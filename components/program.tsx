const programData = [
  {
    day: "Mo",
    date: "01.06.2026",
    title: "Anreise & Ankommen",
    events: [
      { time: "07:00", activity: "Abfahrt Bremerhaven" },
      { time: "13:30", activity: "Abflug Hamburg" },
      { time: "14:10", activity: "Ankunft London Heathrow" },
      { time: "PM", activity: "🚇 Tube fahren üben & Stadtrallye" },
      { time: "Abend", activity: "Freizeit am Hostel" },
    ],
  },
  {
    day: "Di",
    date: "02.06.2026",
    title: "London Eye & Camden",
    events: [
      { time: "10:00", activity: "🎡 London Eye" },
      { time: "12:00", activity: "🎨 Leake Street Arches (Graffiti-Tunnel)" },
      { time: "PM", activity: "Camden Market & Camden Locks" },
      { time: "Abend", activity: "Freizeit" },
    ],
  },
  {
    day: "Mi",
    date: "03.06.2026",
    title: "Royal London",
    events: [
      { time: "10:00", activity: "👮 Change of Guards" },
      { time: "AM", activity: "Spaziergang durch St. James's Park" },
      { time: "13:00", activity: "🎸 Hard Rock Café" },
      { time: "PM", activity: "Wahl: British Museum oder Natural History Museum" },
      { time: "Abend", activity: "Freizeit" },
    ],
  },
  {
    day: "Do",
    date: "04.06.2026",
    title: "Bridges & Views",
    events: [
      { time: "AM", activity: "🌉 Tower Bridge Walk" },
      { time: "AM", activity: "🛍️ Regent Street & Hyde Park" },
      { time: "AM", activity: "💡 The Outernet London" },
      { time: "PM", activity: "🌿 Sky Garden / 🔬 Science Museum" },
      { time: "Abend", activity: "Freizeit" },
    ],
  },
  {
    day: "Fr",
    date: "05.06.2026",
    title: "Abschied",
    events: [
      { time: "AM", activity: "Trafalgar Square & Chinatown" },
      { time: "15:00", activity: "Abfahrt zum Flughafen" },
      { time: "19:25", activity: "Abflug Heathrow" },
      { time: "22:00", activity: "Ankunft Hamburg" },
      { time: "~01:00", activity: "Ankunft Bremerhaven (Sa, 06.06.)" },
    ],
  },
];

export default function Program() {
  return (
    <section
      id="programm"
      className="py-16 px-4 bg-background"
      aria-labelledby="program-heading"
    >
      <div className="max-w-4xl mx-auto">
        <p className="text-sm font-semibold tracking-widest text-primary uppercase mb-2">
          Tag für Tag
        </p>
        <h2
          id="program-heading"
          className="text-3xl md:text-4xl font-bold text-foreground mb-4"
        >
          Das Programm
        </h2>
        <p className="text-foreground/70 mb-10 max-w-2xl">
          Hier seht ihr, was an jedem Tag geplant ist. Programme mit Fragezeichen
          sind Optionen - wir entscheiden vor Ort gemeinsam.
        </p>

        <div className="space-y-6">
          {programData.map((day, index) => (
            <article
              key={index}
              className="bg-card rounded-xl overflow-hidden shadow-sm border border-border"
            >
              <div className="bg-accent/30 px-6 py-4 flex flex-col sm:flex-row sm:items-center gap-2">
                <span className="text-sm font-bold text-primary bg-primary/10 px-3 py-1 rounded-full w-fit">
                  {day.day}
                </span>
                <h3 className="font-bold text-foreground">{day.date}</h3>
                <p className="text-foreground/70 sm:ml-auto">{day.title}</p>
              </div>
              <ul className="divide-y divide-border">
                {day.events.map((event, eventIndex) => (
                  <li
                    key={eventIndex}
                    className="px-6 py-3 flex gap-4 items-start"
                  >
                    <span className="text-sm font-mono text-primary min-w-[60px]">
                      {event.time}
                    </span>
                    <span className="text-foreground">{event.activity}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
