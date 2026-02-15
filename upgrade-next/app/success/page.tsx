import Link from "next/link";
import { SiteFooter } from "../../components/SiteFooter";
import { SiteHeader } from "../../components/SiteHeader";

export default function SuccessPage() {
  return (
    <>
      <SiteHeader />
      <main className="container">
        <section className="panel col">
          <p className="kicker">Message Sent</p>
          <h1>Thanks, I&apos;ve got your message.</h1>
          <p className="lead">I&apos;ll come back to you as soon as possible.</p>
          <div className="actions">
            <Link className="btn btn-primary" href="/">
              Back Home
            </Link>
            <Link className="btn" href="/contact">
              Send Another
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
