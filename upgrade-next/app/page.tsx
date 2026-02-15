import Link from "next/link";
import { ContactForm } from "../components/ContactForm";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import { Timeline } from "../components/Timeline";

export default function HomePage() {
  return (
    <>
      <SiteHeader active="home" />

      <main className="container">
        <section className="panel hero">
          <div className="hero-copy">
            <p className="kicker">Technical + Operational Leadership</p>
            <h1>I am Nicholas Ward</h1>
            <p className="lead">
              I help teams move from early scoping through implementation, rollout, and ongoing support with fewer delivery surprises.
            </p>
            <div className="actions">
              <Link className="btn btn-primary" href="/about">
                Learn More
              </Link>
              <Link className="btn" href="/contact">
                Contact
              </Link>
              <a className="btn" href="/cvAug2020.docx">
                Download CV
              </a>
            </div>
          </div>
          <div className="hero-media">
            <img src="/img/banner/home-right.png" alt="Portrait of Nicholas Ward" />
          </div>
        </section>

        <section className="panel">
          <div className="section-head">
            <p className="kicker">What I Do</p>
            <h2>From onboarding to service delivery</h2>
          </div>
          <div className="feature-grid">
            <article className="feature-card">
              <h3>Client Onboarding</h3>
              <p>End-to-end onboarding from initial scope to live implementation.</p>
            </article>
            <article className="feature-card">
              <h3>Technical Delivery</h3>
              <p>Design and delivery of SaaS solutions in DevOps-focused environments.</p>
            </article>
            <article className="feature-card">
              <h3>Operational Management</h3>
              <p>Process and control management aligned to ISO-oriented standards.</p>
            </article>
            <article className="feature-card">
              <h3>Stakeholder Relationships</h3>
              <p>Trusted communication across clients and internal delivery teams.</p>
            </article>
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
              <h2>Start a conversation</h2>
              <p className="lead">
                Prefer direct email? <a href="mailto:contact@nickward.co.uk">contact@nickward.co.uk</a>
              </p>
            </article>
            <div className="col">
              <ContactForm compact />
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
