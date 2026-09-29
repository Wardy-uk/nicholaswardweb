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
  ["01", "Client Onboarding", "End-to-end onboarding from initial scope to live implementation."],
  ["02", "Technical Delivery", "Design and delivery of SaaS solutions in DevOps-focused environments."],
  ["03", "Operational Management", "Process and control management aligned to ISO-oriented standards."],
  ["04", "Stakeholder Relationships", "Trusted communication across clients and internal delivery teams."],
];

export default function HomePage() {
  return <><SiteHeader active="home" />
    <main id="main">
      <section className="hero hero-showcase">
        <div className="hero-copy hero-showcase-copy">
          <p className="eyebrow">Technical + Operational Leadership</p>
          <h1>I am Nicholas Ward</h1>
          <p className="lead">I help teams move from early scoping through implementation, rollout, and ongoing support with fewer delivery surprises.</p>
          <div className="hero-actions"><Link className="button button-primary" href="/about">Learn More <span className="button-arrow">↗</span></Link><Link className="button" href="/contact">Contact</Link><a className="button" href="/cvAug2020.docx">Download CV</a></div>
          <div className="hero-proof" aria-label="Professional focus"><span>20+ years</span><span>Delivery leadership</span><span>Teams &amp; systems</span></div>
        </div>
        <div className="hero-media hero-showcase-media"><div className="hero-art-label hero-art-label-top">01 / CLEAR THINKING</div><img src="/img/nicholas-hero-cutout.png" alt="Portrait of Nicholas Ward" /><div className="hero-art-label hero-art-label-bottom">OPERATIONS — TECHNOLOGY — PEOPLE</div></div>
      </section>
      <section className="timeline-section"><div className="container"><div className="career-top"><div><p className="eyebrow">Career in motion</p><h2>Experience that compounds.</h2></div><Link className="button" href="/about">The full story <span className="button-arrow">↗</span></Link></div><Timeline /></div></section>

      <section className="section container">
        <div className="section-intro"><div><p className="eyebrow">What I Do</p><h2>From onboarding to service delivery</h2></div><p className="lead">From scoping to rollout, with operational controls and client trust at the center.</p></div>
        <div className="services">{services.map(([number, title, copy]) => <article className="service" key={number}><span className="service-number">{number}</span><h3>{title}</h3><p>{copy}</p></article>)}</div>
      </section>

          <section className="case-study"><div className="container case-study-grid"><div className="case-study-intro"><p className="eyebrow">Current leadership story</p><h2>Built the team. Improved the model.</h2><p>I took a team of four through the period after COVID, alongside acquisitions and significant client growth. At its peak, the function grew to 17 people.</p></div><div className="case-study-detail"><div className="case-stats"><div><strong>4</strong><span>Starting team</span></div><div><strong>17</strong><span>At peak</span></div><div><strong>11</strong><span>Team today</span></div></div><p>Most people who moved on did so to take more technical roles, internally or elsewhere, using capabilities developed in the team. Process optimisation, personal growth, bespoke tooling I built, and thoughtful AI adoption now allow the same workload to be delivered by a smaller, more capable team.</p><Link className="case-link" href="/about">How I think about teams and AI <span aria-hidden="true">↗</span></Link></div></div></section>

      <section className="contact-band"><div className="container contact-grid"><div><p className="eyebrow">Contact</p><h2>Bring me a challenge worth solving.</h2><p className="lead">Prefer direct email? <a href="mailto:contact@nickward.co.uk">contact@nickward.co.uk</a></p></div><ContactForm compact /></div></section>
    </main><SiteFooter />
  </>;
}
