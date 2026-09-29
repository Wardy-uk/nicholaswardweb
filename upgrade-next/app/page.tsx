import Link from "next/link";
import { ContactForm } from "../components/ContactForm";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import { Timeline } from "../components/Timeline";
import "./refinement.css";
import "./mock.css";
import "./wow-home.css";
import "./portfolio.css";
import "./showcase.css";

const services = [
  ["01", "Client Onboarding", "All stages of client onboarding, from solution inception through development, delivery and rollout of client solutions."],
  ["02", "Technical Delivery", "Design, development and delivery of SaaS solutions in a DevOps environment."],
  ["03", "Operational Management", "Analysing, implementing and managing controls and operational processes in line with ISO 27001, ISO 9001 and ISO 14001."],
  ["04", "Stakeholder Relationships", "Building strong, lasting relationships with clients and internal stakeholders to understand their business and build lasting trust."],
];

export default function HomePage() {
  return <><SiteHeader active="home" />
    <main id="main">
      <section className="hero hero-showcase">
        <div className="hero-copy hero-showcase-copy">
          <p className="eyebrow">Technical + Operational Manager</p>
          <h1>I am Nicholas Ward</h1>
          <p className="lead">I help teams move from early scoping through implementation, rollout, and ongoing support with fewer delivery surprises.</p>
          <div className="hero-actions"><Link className="button button-primary" href="/about">Learn More <span className="button-arrow">↗</span></Link><Link className="button" href="/contact">Contact</Link><a className="button" href="/cvAug2020.docx">Download CV</a></div>
          <div className="hero-proof" aria-label="Professional focus"><span>20+ years</span><span>Delivery leadership</span><span>Teams &amp; systems</span></div>
        </div>
        <div className="hero-media hero-showcase-media"><div className="hero-orbit hero-orbit-one" aria-hidden="true" /><div className="hero-orbit hero-orbit-two" aria-hidden="true" /><img src="/img/nicholas-hero-cutout.png" alt="Portrait of Nicholas Ward" /></div>
      </section>
      <section className="timeline-section"><div className="container"><div className="career-top"><div><p className="eyebrow">Career in motion</p><h2>Experience that compounds.</h2></div><Link className="button" href="/about">The full story <span className="button-arrow">↗</span></Link></div><Timeline /></div></section>

      <section className="capabilities">
        <div className="container capabilities-inner">
          <div className="capabilities-intro"><p className="eyebrow">What I Do</p><h2>From onboarding to service delivery</h2><p>From solution inception and technical analysis through development, rollout and ongoing support—with operational controls and client trust at the centre.</p></div>
          <div className="capability-list">{services.map(([number, title, copy]) => <article className="capability" key={number}><span>{number}</span><h3>{title}</h3><p>{copy}</p></article>)}</div>
        </div>
      </section>

          <section className="case-study"><div className="container case-study-grid"><div className="case-study-intro"><p className="eyebrow">Current leadership story</p><h2>Built the team. Improved the model.</h2><p>I took a team of four through the period after COVID, alongside acquisitions and significant client growth. At its peak, the function grew to 17 people.</p></div><div className="case-study-detail"><div className="case-stats"><div><strong>4</strong><span>Starting team</span></div><div><strong>17</strong><span>At peak</span></div><div><strong>11</strong><span>Team today</span></div></div><p>Most people who moved on did so to take more technical roles, internally or elsewhere, using capabilities developed in the team. Process optimisation, personal growth, bespoke tooling I built, and thoughtful AI adoption now allow the same workload to be delivered by a smaller, more capable team.</p><Link className="case-link" href="/about">How I think about teams and AI <span aria-hidden="true">↗</span></Link></div></div></section>

      <section className="contact-band"><div className="container contact-grid"><div><p className="eyebrow">Contact</p><h2>Bring me a challenge worth solving.</h2><p className="lead">Prefer direct email? <a href="mailto:contact@nickward.co.uk">contact@nickward.co.uk</a></p></div><ContactForm compact /></div></section>
    </main><SiteFooter />
  </>;
}
