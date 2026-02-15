import { ContactForm } from "../../components/ContactForm";
import { SiteFooter } from "../../components/SiteFooter";
import { SiteHeader } from "../../components/SiteHeader";

export default function ContactPage() {
  return (
    <>
      <SiteHeader active="contact" />
      <main className="container">
        <section className="panel grid-2">
          <article className="col">
            <p className="kicker">Contact</p>
            <h1>Let&apos;s talk</h1>
            <p className="lead">Use the form and I&apos;ll respond as soon as possible.</p>
            <p className="lead">
              Direct email: <a href="mailto:contact@nickward.co.uk">contact@nickward.co.uk</a>
            </p>
            <img src="/img/about-me.png" alt="Nicholas Ward profile" style={{ width: "100%", border: "1px solid var(--line)" }} />
          </article>
          <div className="col">
            <ContactForm />
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
