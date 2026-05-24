const emergencyContacts = [
  {
    icon: "👩‍🏫",
    label: "BEGLEITLEHRERIN",
    name: "Mrs. Heyden",
    number: "+49 171 3471267",
    note: "Tippen zum Anrufen",
    tel: "tel:+491713471267",
  },
  {
    icon: "🚨",
    label: "UK NOTRUF",
    name: "Police / Ambulance / Fire",
    number: "999",
    note: "Tippen zum Anrufen",
    tel: "tel:999",
  },
  {
    icon: "🆘",
    label: "EUROPÄISCHER NOTRUF",
    name: "Funktioniert auch in UK",
    number: "112",
    note: "Tippen zum Anrufen",
    tel: "tel:112",
  },
];

export default function Emergency() {
  return (
    <section
      id="notfall"
      className="py-16 px-4 bg-primary text-white"
      aria-labelledby="emergency-heading"
    >
      <div className="max-w-4xl mx-auto">
        <p className="text-sm font-semibold tracking-widest text-white/70 uppercase mb-2">
          In Case of Emergency
        </p>
        <h2
          id="emergency-heading"
          className="text-3xl md:text-4xl font-bold mb-4"
        >
          Notfall-Nummern
        </h2>
        <p className="text-white/80 mb-10">
          Speichere diese Nummern in deinem Handy, bevor es losgeht.
        </p>

        <div className="grid gap-4 mb-8">
          {emergencyContacts.map((contact, index) => (
            <a
              key={index}
              href={contact.tel}
              className="block bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary"
            >
              <div className="flex items-center gap-4">
                <span className="text-3xl" aria-hidden="true">
                  {contact.icon}
                </span>
                <div className="flex-1">
                  <p className="text-xs font-semibold tracking-wider text-white/70">
                    {contact.label}
                  </p>
                  <p className="text-white font-medium">{contact.name}</p>
                  <p className="text-2xl font-bold">{contact.number}</p>
                </div>
                <span className="text-sm text-white/70 hidden sm:block">
                  {contact.note}
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* Hostel Address */}
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
          <div className="flex items-start gap-4">
            <span className="text-3xl" aria-hidden="true">
              🏠
            </span>
            <div>
              <p className="text-xs font-semibold tracking-wider text-white/70 mb-1">
                ADRESSE UNTERKUNFT
              </p>
              <p className="font-semibold text-white">Restup Driscoll House</p>
              <p className="text-xl font-bold">
                172 New Kent Road
                <br />
                London SE1 4YT
              </p>
              <p className="text-sm text-white/70 mt-2">
                Zeig das einem Taxi/Bus
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
