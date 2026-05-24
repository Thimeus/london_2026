const tubeSteps = [
  {
    number: "01",
    title: "Oyster oder kontaktlos",
    description:
      "Wir nutzen kontaktloses Bezahlen (Apple Pay / Karte) oder eine Oyster Card. Einfach an den gelben Reader halten - beim Ein- und Aussteigen!",
  },
  {
    number: "02",
    title: "Linie & Richtung",
    description:
      "Schau auf den Tube-Plan: welche farbige Linie (z. B. Northern = schwarz) und welche Richtung (Northbound / Southbound)?",
  },
  {
    number: "03",
    title: "Mind the gap!",
    description:
      "Vorsicht beim Einsteigen - zwischen Bahnsteig und Zug ist manchmal ein Spalt. Auf der Rolltreppe rechts stehen, links gehen.",
  },
  {
    number: "04",
    title: "Unsere Station",
    description:
      "Vom Hostel: Elephant & Castle (Bakerloo & Northern Line). Von dort geht's überall hin.",
  },
  {
    number: "05",
    title: "App-Tipp",
    description:
      "Citymapper oder TfL Go geben dir Live-Infos - auch zu Störungen.",
  },
];

export default function TubeGuide() {
  return (
    <section
      id="tube"
      className="py-16 px-4 bg-secondary text-white"
      aria-labelledby="tube-heading"
    >
      <div className="max-w-6xl mx-auto">
        <p className="text-sm font-semibold tracking-widest text-accent uppercase mb-2">
          Mind the Gap
        </p>
        <h2
          id="tube-heading"
          className="text-3xl md:text-4xl font-bold mb-4"
        >
          So nutzt du die Tube
        </h2>
        <p className="text-white/80 mb-10 max-w-2xl">
          Die Londoner U-Bahn ist die beste Art, um die Stadt zu erkunden. Schau
          dir das Video an - danach klappt das wie bei einem Londoner.
        </p>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* YouTube Video */}
          <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/EOVX4eUYJ-4"
              title="So nutzt du die London Tube"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>

          {/* Steps */}
          <div className="space-y-4">
            {tubeSteps.map((step) => (
              <div
                key={step.number}
                className="bg-white/10 rounded-lg p-4 backdrop-blur-sm"
              >
                <div className="flex gap-4">
                  <span className="text-accent font-bold text-lg">
                    {step.number}
                  </span>
                  <div>
                    <h3 className="font-bold text-white mb-1">{step.title}</h3>
                    <p className="text-white/70 text-sm">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
