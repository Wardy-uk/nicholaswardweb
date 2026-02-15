(() => {
  // Editable timeline source: add/remove/update entries here.
  const timelineEntries = [
    {
      period: "2000s",
      title: "Operations Foundations",
      detail: "Built core operational expertise across service-led environments.",
    },
    {
      period: "2010s",
      title: "Technical Delivery Leadership",
      detail: "Led implementation programs from scoping through rollout and support.",
    },
    {
      period: "Late 2010s",
      title: "Governance and Quality",
      detail: "Embedded ISO-aligned controls into operational and delivery workflows.",
    },
    {
      period: "Today",
      title: "End-to-End Ownership",
      detail: "Combines technical account management with delivery and process leadership.",
    },
  ];

  const mounts = document.querySelectorAll('[data-timeline="career"]');
  mounts.forEach((mount) => {
    mount.innerHTML = timelineEntries
      .map(
        (item) => `
          <article class="timeline-item">
            <p class="timeline-period">${item.period}</p>
            <h3 class="timeline-title">${item.title}</h3>
            <p class="timeline-detail">${item.detail}</p>
          </article>
        `
      )
      .join("");
  });
})();
