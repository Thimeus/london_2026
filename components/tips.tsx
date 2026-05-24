const tips = [
  {
    number: "01",
    title: "Apps vorher laden",
    description:
      "Citymapper, TfL Go, Google Maps offline. Spart Datenvolumen und Nerven.",
  },
  {
    number: "02",
    title: "Links gucken!",
    description:
      "In UK fährt der Verkehr links. Schau vor dem Überqueren immer zuerst nach rechts.",
  },
  {
    number: "03",
    title: "Höflichkeit zählt",
    description:
      '"Please", "thank you", "sorry" - Briten lieben das. Auch in der Tube: rechts stehen, links gehen.',
  },
  {
    number: "04",
    title: "Tasche vorne",
    description:
      "Im Camden Market und auf belebten Plätzen Rucksack/Tasche vorne tragen.",
  },
  {
    number: "05",
    title: "Wasser dabei",
    description:
      "Trinkflasche mitnehmen - Leitungswasser in UK ist sicher und kostenlos nachfüllbar.",
  },
  {
    number: "06",
    title: "Foto-Spots",
    description:
      "Tower Bridge, Sky Garden (gratis!), Notting Hill, Leake Street Arches.",
  },
];

export default function Tips() {
  return (
    <section
      className="py-16 px-4 bg-background"
      aria-labelledby="tips-heading"
    >
      <div className="max-w-6xl mx-auto">
        <p className="text-sm font-semibold tracking-widest text-primary uppercase mb-2">
          Survival Kit
        </p>
        <h2
          id="tips-heading"
          className="text-3xl md:text-4xl font-bold text-foreground mb-10"
        >
          London-Tipps
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tips.map((tip) => (
            <article
              key={tip.number}
              className="bg-card rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <span className="text-4xl font-bold text-primary/20">
                {tip.number}
              </span>
              <h3 className="font-bold text-lg text-foreground mt-2 mb-2">
                {tip.title}
              </h3>
              <p className="text-foreground/70 text-sm">{tip.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
