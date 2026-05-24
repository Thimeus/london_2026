const facts = [
  {
    icon: "✈️",
    title: "HINFLUG",
    date: "01.06.2026",
    details: ["Hamburg → London Heathrow", "13:30 → 14:10 · EW7462"],
  },
  {
    icon: "🛬",
    title: "RÜCKFLUG",
    date: "05.06.2026",
    details: ["Heathrow → Hamburg", "19:25 → 22:00 · EW7465"],
  },
  {
    icon: "📍",
    title: "TREFFPUNKT",
    date: "06:45 Uhr",
    details: ["Johann-Gutenberg-Schule", "Abfahrt 7:00 Uhr"],
  },
  {
    icon: "🏠",
    title: "UNTERKUNFT",
    date: "Restup Driscoll House",
    details: ["172 New Kent Road", "London SE1 4YT"],
  },
];

export default function QuickFacts() {
  return (
    <section
      className="py-12 px-4 bg-card"
      aria-labelledby="quick-facts-heading"
    >
      <div className="max-w-6xl mx-auto">
        <h2 id="quick-facts-heading" className="sr-only">
          Quick Facts
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {facts.map((fact, index) => (
            <article
              key={index}
              className="bg-muted rounded-xl p-6 hover:shadow-lg transition-shadow"
            >
              <span className="text-3xl mb-3 block" aria-hidden="true">
                {fact.icon}
              </span>
              <h3 className="font-bold text-sm tracking-wider text-primary mb-2">
                {fact.title}
              </h3>
              <p className="font-semibold text-foreground mb-1">{fact.date}</p>
              {fact.details.map((detail, i) => (
                <p key={i} className="text-sm text-foreground/70">
                  {detail}
                </p>
              ))}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
