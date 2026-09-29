import { SiteFooter } from "../../components/SiteFooter";
import { SiteHeader } from "../../components/SiteHeader";
import { WorkGrid } from "../../components/WorkGrid";

export default function WorkPage() {
  return <><SiteHeader active="work" /><main id="main"><section className="page-hero container"><p className="eyebrow">Selected work</p><h1>Thoughtful websites for businesses with something to say.</h1><p className="lead">A growing collection of strategy-led, carefully built web work. Every project below is documented honestly—what was needed, what was made, and why.</p></section><section className="section container"><WorkGrid /><p className="portfolio-note">New client projects will be added here as they launch. Interested in being one of the first? <a className="text-link" href="/contact">Let&apos;s talk ↗</a></p></section></main><SiteFooter /></>;
}
