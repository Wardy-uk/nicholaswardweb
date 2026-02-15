import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const formData = await request.formData();

  const name = String(formData.get("name") ?? "");
  const email = String(formData.get("email") ?? "");
  const subject = String(formData.get("subject") ?? "");
  const message = String(formData.get("message") ?? "");

  if (!name || !email || !subject || !message) {
    return NextResponse.json({ ok: false, error: "Missing required fields." }, { status: 400 });
  }

  // Replace with mail/CRM integration when ready.
  console.log("Contact submission", { name, email, subject, message });

  return NextResponse.redirect(new URL("/", request.url), 303);
}
