import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { supabaseAdmin } from "../../../lib/supabase";

const DISCLAIMER = `
Disclaimer

This e-mail (and any attachments) is confidential and for the intended recipient only. If you have received this e-mail because of an addressing or delivery error, please inform the sender by replying to this e-mail and then delete it immediately. If you are not the intended recipient you must not use, disclose, distribute, copy, or print any of the information in it. Any opinions or views expressed in this message are those of the individual sender, except where the sender specifically states them to be otherwise. The Transforming Church UK takes no responsibility as to the presence of any viruses in this e-mail.

The Transforming Church UK. Registered Charity in England and Wales No 1194579.`;

export async function POST(req: NextRequest) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY || "missing-api-key");
    const body = await req.json();
    const { type, name, email, message, to } = body;

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
    let replyBody = "";

    if (type === "testimony") {
      subjectToChurch = `New Testimony from ${name}`;
      textToChurch = `Name: ${name}\nEmail: ${email}\n\nWhat has God done for you?\n${message}`;

      replySubject = "Thank you for sharing your testimony";
      replyBody = `Dear ${name},\n\nThank you for sharing your testimonies with us. We declare that your joy will be permanent and you will continue to testify of God’s goodness in your life. God bless you.\n\n${DISCLAIMER}`;
    } else if (type === "prayer") {
      subjectToChurch = `Prayer Request from ${name}`;
      textToChurch = `Name: ${name}\nEmail: ${email}\n\nWhat would you like God to do for you?\n${message}`;

      replySubject = "TTC UK Prayer Requests";
      replyBody = `Dear ${name},\n\nThank you for sending your prayer request. May the Lord grant your requests in Jesus name.\n\n${DISCLAIMER}`;
    } else if (type === "member") {
      subjectToChurch = `New Membership Interest: ${name}`;
      textToChurch = `Name: ${name}\nEmail: ${email}\n\nQuestions/Message:\n${message}`;

      replySubject = "Welcome to The Transforming Church UK";
      replyBody = `Dear ${name},\n\nThank you for your interest in becoming a member! Be part of a loving, faith-filled community. There's a place here for you.\n\nOur team will be in touch shortly to answer any questions you have and welcome you.\n\n${DISCLAIMER}`;
    } else {
      // generic contact fallback
      subjectToChurch = `New Contact Message from ${name}`;
      textToChurch = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;

      replySubject = "We received your message!";
      replyBody = `Dear ${name},\n\nThank you for contacting us. Our team will get back to you shortly.\n\n${DISCLAIMER}`;
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
    if (replyBody) {
      const { error: resendError2 } = await resend.emails.send({
        from: "The Transforming Church UK <no-reply@ttcuk.church>",
        to: email, // The person who filled the form
        subject: replySubject,
        text: replyBody,
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
