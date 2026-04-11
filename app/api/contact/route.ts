import { NextRequest, NextResponse } from "next/server";

// TODO: Replace this stub with Resend when ready.
// Example with Resend:
//   import { Resend } from "resend";
//   const resend = new Resend(process.env.RESEND_API_KEY);
//   await resend.emails.send({ from: "...", to: body.to, subject: ..., text: ... });

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { type, name, email, message, to } = body;

  if (!name || !email || !message || !to) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  const subject =
    type === "testimony"
      ? `New Testimony from ${name}`
      : `Prayer Request from ${name}`;

  const text =
    type === "testimony"
      ? `Name: ${name}\nEmail: ${email}\n\nWhat has God done for you?\n${message}`
      : `Name: ${name}\nEmail: ${email}\n\nWhat would you like God to do for you?\n${message}`;

  // ── Wire Resend here ──
  console.log("Form submission →", { to, subject, text });
  // ─────────────────────

  return NextResponse.json({ ok: true });
}
