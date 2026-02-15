type ContactFormProps = {
  compact?: boolean;
};

export function ContactForm({ compact }: ContactFormProps) {
  return (
    <form className="form" action="/api/contact" method="post">
      <input name="name" placeholder="Name" required />
      <input type="email" name="email" placeholder="Email" required />
      <input name="subject" placeholder="Subject" required />
      <textarea name="message" rows={compact ? 4 : 6} placeholder="Message" required />
      <button className="btn btn-primary" type="submit">
        Send Message
      </button>
    </form>
  );
}
