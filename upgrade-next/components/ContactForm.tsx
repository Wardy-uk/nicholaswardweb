"use client";

import type { FormEvent } from "react";

type ContactFormProps = {
  compact?: boolean;
};

export function ContactForm({ compact }: ContactFormProps) {
  function openMailClient(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    if (data.get("company")) return;
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const subject = String(data.get("subject") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;
    window.location.href = `mailto:contact@nickward.co.uk?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form className="form" onSubmit={openMailClient}>
      <label className="sr-only" htmlFor="company">Company</label><input className="honeypot" id="company" name="company" tabIndex={-1} autoComplete="off" />
      <label className="sr-only" htmlFor="contact-name">Name</label><input id="contact-name" name="name" placeholder="Name" autoComplete="name" required />
      <label className="sr-only" htmlFor="contact-email">Email</label><input id="contact-email" type="email" name="email" placeholder="Email" autoComplete="email" required />
      <label className="sr-only" htmlFor="contact-subject">Subject</label><input id="contact-subject" name="subject" placeholder="Subject" required />
      <label className="sr-only" htmlFor="contact-message">Message</label><textarea id="contact-message" name="message" rows={compact ? 4 : 6} placeholder="Message" required />
      <button className="button button-primary" type="submit">
        Send Message <span className="button-arrow">↗</span>
      </button>
    </form>
  );
}
