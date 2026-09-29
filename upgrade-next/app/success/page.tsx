import Link from "next/link";
import { SiteFooter } from "../../components/SiteFooter";
import { SiteHeader } from "../../components/SiteHeader";

export default function SuccessPage() {
  return <><SiteHeader /><main id="main"><section className="page-hero container"><p className="eyebrow">Message Sent</p><h1>Thanks, I&apos;ve got your message.</h1><p className="lead">I&apos;ll come back to you as soon as possible.</p><div className="hero-actions"><Link className="button button-primary" href="/">Back Home <span className="button-arrow">↗</span></Link><Link className="button" href="/contact">Send Another</Link></div></section></main><SiteFooter /></>;
}
