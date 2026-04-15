import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { supabaseAdmin } from "../../../lib/supabase";

const DISCLAIMER_HTML = `
  <br/><br/>
  <hr style="border: none; border-top: 1px solid #eee; margin-top: 20px;"/>
  <p style="font-size: 11px; font-style: italic; color: #666; line-height: 1.4;">
    <strong>Disclaimer</strong><br/>
    This e-mail (and any attachments) is confidential and for the intended recipient only. If you have received this e-mail because of an addressing or delivery error, please inform the sender by replying to this e-mail and then delete it immediately. If you are not the intended recipient you must not use, disclose, distribute, copy, or print any of the information in it. Any opinions or views expressed in this message are those of the individual sender, except where the sender specifically states them to be otherwise. The Transforming Church UK takes no responsibility as to the presence of any viruses in this e-mail.<br/><br/>
    The Transforming Church UK. Registered Charity in England and Wales No 1194579.
  </p>
`;

export async function POST(req: NextRequest) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY || "missing-api-key");
    const body = await req.json();
    const { type, name, email, message, to, website } = body;

    // Honeypot — bots fill this, humans don't
    if (website) {
      return NextResponse.json({ ok: true });
    }

    if (!name || !email || !message || !to) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    // 1. Save to Supabase (Permanent Storage)
    const { error: dbError } = await supabaseAdmin.from("submissions").insert({
      type,
      name,
      email,
      message,
    });

    if (dbError) {
      console.error("Supabase Insert Error:", dbError);
      // We log the error but still try to send the email
    }

    // 2. Determine subjects and texts for the Notification Email (to Church)
    let subjectToChurch = "";
    let textToChurch = "";

    // 3. Determine subjects and texts for the Auto-Reply Email (to Submitter)
    let replySubject = "";
    let replyHtml = "";

    if (type === "testimony") {
      subjectToChurch = `New Testimony from ${name}`;
      textToChurch = `Name: ${name}\nEmail: ${email}\n\nWhat has God done for you?\n${message}`;

      replySubject = "Thank you for sharing your testimony";
      replyHtml = `<p>Dear ${name},</p><p>Thank you for sharing your testimonies with us. We declare that your joy will be permanent and you will continue to testify of God’s goodness in your life. God bless you.</p>${DISCLAIMER_HTML}`;
    } else if (type === "prayer") {
      subjectToChurch = `Prayer Request from ${name}`;
      textToChurch = `Name: ${name}\nEmail: ${email}\n\nWhat would you like God to do for you?\n${message}`;

      replySubject = "TTC UK Prayer Requests";
      replyHtml = `<p>Dear ${name},</p><p>Thank you for sending your prayer request. May the Lord grant your requests in Jesus name.</p>${DISCLAIMER_HTML}`;
    } else if (type === "member") {
      subjectToChurch = `New Membership Interest: ${name}`;
      textToChurch = `Name: ${name}\nEmail: ${email}\n\nQuestions/Message:\n${message}`;

      replySubject = "Welcome to The Transforming Church UK";
      replyHtml = `<p>Dear ${name},</p><p>Thank you for your interest in becoming a member! Be part of a loving, faith-filled community. There's a place here for you.</p><p>Our team will be in touch shortly to answer any questions you have and welcome you.</p>${DISCLAIMER_HTML}`;
    } else {
      // generic contact fallback
      subjectToChurch = `New Contact Message from ${name}`;
      textToChurch = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;

      replySubject = "We received your message!";
      replyHtml = `<p>Dear ${name},</p><p>Thank you for contacting us. Our team will get back to you shortly.</p>${DISCLAIMER_HTML}`;
    }

    // 4. Send Notification Email to Church Admin
    const { error: resendError1 } = await resend.emails.send({
      from: "Notifications <no-reply@ttcuk.church>",
      to,
      subject: subjectToChurch,
      text: textToChurch,
      replyTo: email, // let the church reply directly to the person
    });

    if (resendError1) {
      console.error("Resend Notification Error:", resendError1);
      return NextResponse.json({ error: "Failed to send notification" }, { status: 500 });
    }

    // 5. Send Auto-Reply to the Submitter
    if (replyHtml) {
      const { error: resendError2 } = await resend.emails.send({
        from: "The Transforming Church UK <no-reply@ttcuk.church>",
        to: email, // The person who filled the form
        subject: replySubject,
        html: replyHtml,
      });

      if (resendError2) {
        console.error("Resend Auto-Reply Error:", resendError2);
        // Do not fail the whole request, they did submit successfully.
      }
    }

    return NextResponse.json({ ok: true });
  } catch (err: any) {
    console.error("API Error:", err);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
