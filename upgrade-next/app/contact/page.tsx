import { ContactForm } from "../../components/ContactForm";
import { SiteFooter } from "../../components/SiteFooter";
import { SiteHeader } from "../../components/SiteHeader";
import "../showcase.css";

export default function ContactPage() {
  return <><SiteHeader active="contact" /><main id="main" className="contact-page"><section className="page-hero contact-hero"><div className="container"><p className="eyebrow">Contact</p><h1>Bring me a challenge worth solving.</h1></div></section><section className="container page-layout"><div><p className="lead">If you&apos;re building a technical team, improving how work gets done or making AI useful in practice, tell me about it.</p><p className="lead">Use the form and I&apos;ll respond as soon as possible.</p><p className="lead">Direct email: <a className="contact-email" href="mailto:contact@nickward.co.uk">contact@nickward.co.uk</a></p><img className="portrait contact-portrait" src="/img/nicholas-profile-cutout.png" alt="Nicholas Ward profile" /></div><div><ContactForm /></div></section></main><SiteFooter /></>;
}
