type ContactFormProps = {
  compact?: boolean;
};

export function ContactForm({ compact }: ContactFormProps) {
  return (
    <form className="form" action="/api/contact" method="post">
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
