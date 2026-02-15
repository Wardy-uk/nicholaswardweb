import { timelineEntries } from "../data/timeline";

export function Timeline() {
  return (
    <section className="timeline-wrap" aria-label="Career timeline">
      <div className="timeline-track">
        {timelineEntries.map((entry) => (
          <article className="timeline-item" key={`${entry.period}-${entry.title}`}>
            <p className="period">{entry.period}</p>
            <h3 className="title">{entry.title}</h3>
            <p className="detail">{entry.detail}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
