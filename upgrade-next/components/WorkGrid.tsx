import Link from "next/link";
import { workItems } from "../data/work";

export function WorkGrid() {
  return <div className="work-grid">{workItems.map((work, index) => <article className={`work-card work-card-${index + 1}`} key={work.slug}>
    <div className="work-art" aria-hidden="true"><span>NW</span><i /><b /></div>
    <div className="work-content"><p className="eyebrow">{work.type}</p><h3>{work.title}</h3><p>{work.summary}</p><Link className="text-link" href={`/work/${work.slug}`}>Read the project <span>↗</span></Link></div>
  </article>)}</div>;
}
