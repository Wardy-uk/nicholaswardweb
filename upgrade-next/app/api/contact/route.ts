import { NextResponse } from "next/server";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  const formData = await request.formData();
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const subject = String(formData.get("subject") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();
  const company = String(formData.get("company") ?? "").trim();

  if (company) return NextResponse.redirect(new URL("/success", request.url), 303);
  if (!name || !emailPattern.test(email) || !subject || !message) return NextResponse.json({ ok: false, error: "Please complete each field with a valid email address." }, { status: 400 });

  const apiKey = process.env.RESEND_API_KEY;
  const destination = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;
  if (!apiKey || !destination || !from) return NextResponse.json({ ok: false, error: "Contact delivery has not been configured yet. Please email contact@nickward.co.uk." }, { status: 503 });

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({ from, to: [destination], reply_to: email, subject: `[Website] ${subject}`, text: `Name: ${name}\nEmail: ${email}\n\n${message}` }),
  });
  if (!response.ok) return NextResponse.json({ ok: false, error: "Message delivery failed. Please email contact@nickward.co.uk." }, { status: 502 });
  return NextResponse.redirect(new URL("/success", request.url), 303);
}
