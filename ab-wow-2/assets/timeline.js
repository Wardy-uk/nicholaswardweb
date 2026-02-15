(() => {
  // Editable timeline source: add/remove/update entries here.
  const timelineEntries = [
    {
      period: "2003",
      title: "Operations Career Start",
      detail: "Started building operational service-management foundations in client-led environments.",
    },
    {
      period: "2008",
      title: "Client Onboarding Focus",
      detail: "Took ownership of onboarding and implementation workflows across multiple accounts.",
    },
    {
      period: "2012",
      title: "Technical Program Delivery",
      detail: "Shifted into end-to-end technical delivery and cross-team execution leadership.",
    },
    {
      period: "2015",
      title: "DevOps-Aligned Implementation",
      detail: "Led SaaS implementation programs with stronger engineering and operational alignment.",
    },
    {
      period: "2018",
      title: "Governance Integration",
      detail: "Embedded ISO-oriented control frameworks into day-to-day delivery operations.",
    },
    {
      period: "2020",
      title: "Account + Delivery Leadership",
      detail: "Expanded technical account ownership while maintaining delivery accountability.",
    },
    {
      period: "2023",
      title: "Process Optimization",
      detail: "Improved delivery predictability through measurable process and communication standards.",
    },
    {
      period: "Today",
      title: "End-to-End Ownership",
      detail: "Combines technical account management with operational and project leadership.",
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
