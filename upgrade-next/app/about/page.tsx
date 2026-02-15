import Link from "next/link";
import { Timeline } from "../../components/Timeline";

export default function AboutPage() {
  return (
    <>
      <header className="header">
        <div className="container header-inner">
          <strong>NW Upgrade</strong>
          <nav className="nav">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
          </nav>
          <a className="btn" href="../../ab-wow-2/about.html">
            Variant C About
          </a>
        </div>
      </header>

      <main className="container">
        <section className="panel grid-2">
          <article className="col">
            <p className="kicker">About</p>
            <h1>Operationally grounded. Technically fluent.</h1>
            <p className="lead">
              Over 20 years in technical and operational service management roles, delivering from initial scope through go-live and support.
            </p>
            <p className="lead">
              Focus areas include client onboarding, technical service delivery, governance, and relationship leadership.
            </p>
          </article>
          <aside className="col">
            <img src="../../img/about-me.png" alt="Nicholas Ward profile" style={{ width: "100%", border: "1px solid var(--line)" }} />
          </aside>
        </section>

        <section className="panel">
          <Timeline />
        </section>
      </main>
    </>
  );
}
