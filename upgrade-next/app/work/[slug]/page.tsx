import { notFound } from "next/navigation";
import Link from "next/link";
import { SiteFooter } from "../../../components/SiteFooter";
import { SiteHeader } from "../../../components/SiteHeader";
import { workItems } from "../../../data/work";

export function generateStaticParams() { return workItems.map(({ slug }) => ({ slug })); }

export default async function WorkDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const work = workItems.find((item) => item.slug === slug);
  if (!work) notFound();
  return <><SiteHeader active="work" /><main id="main"><section className="case-hero"><div className="container"><p className="eyebrow">Case study · {work.type}</p><h1>{work.title}</h1><p className="lead">{work.summary}</p></div></section><section className="container case-grid"><div><p className="eyebrow">The brief</p><h2>A site with a job to do.</h2></div><p className="lead">{work.challenge}</p></section><section className="case-details"><div className="container case-grid"><div><p className="eyebrow">The work</p><h2>From blank page to a clearer proposition.</h2></div><div><ol className="approach-list">{work.approach.map((item, index) => <li key={item}><span>0{index + 1}</span>{item}</li>)}</ol></div></div></section><section className="section container"><p className="eyebrow">Delivered</p><div className="deliverables">{work.deliverables.map((item) => <span key={item}>{item}</span>)}</div><Link className="button" href="/work">Back to work</Link></section></main><SiteFooter /></>;
}
