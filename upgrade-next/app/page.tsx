import Link from "next/link";
import { Timeline } from "../components/Timeline";

export default function HomePage() {
  return (
    <>
      <header className="header">
        <div className="container header-inner">
          <strong>NW Upgrade</strong>
          <nav className="nav">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
          </nav>
          <a className="btn" href="../ab-wow-2/index.html">
            Variant C
          </a>
        </div>
      </header>

      <main className="container">
        <section className="panel hero">
          <div className="hero-copy">
            <p className="kicker">Modern Upgrade</p>
            <h1>Technical Delivery, Upgraded Stack</h1>
            <p className="lead">
              This version moves the site to Next.js with reusable components, centralized data, and API routing for future growth.
            </p>
            <div className="actions">
              <Link className="btn btn-primary" href="/about">
                View About
              </Link>
              <a className="btn" href="../cvAug2020.docx">
                Download CV
              </a>
            </div>
          </div>
          <div className="hero-media">
            <img src="../img/banner/home-right.png" alt="Portrait of Nicholas Ward" />
          </div>
        </section>

        <section className="panel">
          <div className="grid-2">
            <article className="col">
              <p className="kicker">Proof</p>
              <h2>20+ years across technical and operational delivery.</h2>
              <p className="lead">
                From scoping to rollout, with operational controls and client trust at the center.
              </p>
            </article>
            <aside className="col stats">
              <div className="stat">20+ Years Experience</div>
              <div className="stat">ISO-Oriented Governance</div>
              <div className="stat">End-to-End Delivery Ownership</div>
            </aside>
          </div>
          <Timeline />
        </section>

        <section className="panel">
          <div className="grid-2">
            <article className="col">
              <p className="kicker">Contact</p>
              <h2>API-backed contact endpoint</h2>
              <p className="lead">
                This upgrade includes a server route at <code>/api/contact</code> to support future form and CRM integration.
              </p>
            </article>
            <div className="col">
              <form className="form" action="/api/contact" method="post">
                <input name="name" placeholder="Name" required />
                <input type="email" name="email" placeholder="Email" required />
                <input name="subject" placeholder="Subject" required />
                <textarea name="message" rows={5} placeholder="Message" required />
                <button className="btn btn-primary" type="submit">
                  Send
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">Upgrade track for A/B and migration.</div>
      </footer>
    </>
  );
}
