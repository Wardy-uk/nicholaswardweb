import { SiteFooter } from "../../components/SiteFooter";
import { SiteHeader } from "../../components/SiteHeader";
import { Timeline } from "../../components/Timeline";

export default function AboutPage() {
  return <><SiteHeader active="about" /><main id="main">
    <section className="page-hero container"><p className="eyebrow">About</p><h1>Operationally grounded. Technically fluent.</h1></section>
    <section className="container page-layout"><div><p className="lead">Over 20 years in technical and operational service management roles, delivering from initial scope through go-live and support.</p><p className="lead">Focus areas include client onboarding, technical service delivery, governance, and relationship leadership.</p><p className="lead">I provide a practical bridge between business priorities and technical execution, helping teams maintain quality and momentum.</p></div><div><img className="portrait" src="/img/nicholas-profile-cutout.png" alt="Nicholas Ward profile" /></div></section>
    <section className="about-view container"><div><p className="eyebrow">What I&apos;m drawn to</p><h2>Ambitious work that needs a better operating model.</h2></div><div><p className="lead">I&apos;m drawn to technical, team-based work with room to improve how things operate: building capability, reducing bloat and making AI adoption genuinely useful.</p><p className="lead">The aim is not to remove responsibility from people. It&apos;s to remove friction, so they can think better, grow faster and take real ownership of their work.</p></div></section>
    <section className="ai-principle"><div className="container"><p className="eyebrow">A practical view of AI</p><blockquote>AI should make teams more capable, not less thoughtful.</blockquote><p>Used well, it clears repetitive work, improves a first pass and gives people more space for judgement. It never replaces the need to understand the problem or own the outcome.</p></div></section>
    <section className="section container"><div style={{ marginTop: "3rem" }}><Timeline /></div></section>
  </main><SiteFooter /></>;
}
