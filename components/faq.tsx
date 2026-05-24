"use client";

import { useState } from "react";

const faqData = [
  {
    question: "Brauche ich einen Reisepass?",
    answer:
      "Ja! Seit dem Brexit ist ein gültiger Reisepass Pflicht für die Einreise nach Großbritannien. Ein Personalausweis reicht nicht mehr. Außerdem braucht ihr eine UK ETA (Electronic Travel Authorisation).",
  },
  {
    question: "Wieviel Taschengeld soll ich mitnehmen?",
    answer:
      "Wir empfehlen 80-150 £ in bar plus eine Karte (Revolut, Visa, etc.) für größere Ausgaben. Bedenkt: London ist teuer! Essen, Souvenirs und kleine Extras kosten schnell mehr als gedacht.",
  },
  {
    question: "Brauche ich einen Adapter?",
    answer:
      "Ja! In Großbritannien werden Stecker vom Typ G verwendet (drei rechteckige Stifte). Kauft euch vorher einen UK-Adapter - es gibt auch Mehrfachsteckdosen mit USB-Anschlüssen.",
  },
  {
    question: "Funktioniert mein Handy in London?",
    answer:
      "Ja, aber achtung: Seit dem Brexit können Roaming-Gebühren anfallen! Checkt vorher mit eurem Anbieter oder nutzt WLAN im Hostel. Apps wie Citymapper funktionieren auch offline.",
  },
  {
    question: "Wie viel Gepäck darf ich mitnehmen?",
    answer:
      "1 Koffer/Tasche (max. 20kg) plus 1 Handgepäck (40cm × 30cm × 25cm). Packt Powerbanks und Flüssigkeiten über 100ml in den Koffer, nicht ins Handgepäck!",
  },
  {
    question: "Was, wenn ich mich verlaufe?",
    answer:
      "Keine Panik! Geht zur nächsten Tube-Station und fragt nach dem Weg zu Elephant & Castle. Ihr könnt auch Mrs. Heyden anrufen (+49 171 3471267) oder die Hostel-Adresse einem Taxi zeigen.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="py-16 px-4 bg-muted"
      aria-labelledby="faq-heading"
    >
      <div className="max-w-3xl mx-auto">
        <p className="text-sm font-semibold tracking-widest text-primary uppercase mb-2">
          FAQ
        </p>
        <h2
          id="faq-heading"
          className="text-3xl md:text-4xl font-bold text-foreground mb-10"
        >
          Häufige Fragen
        </h2>

        <div className="space-y-3">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="bg-card rounded-xl overflow-hidden shadow-sm"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-inset"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="font-semibold text-foreground">
                  {item.question}
                </span>
                <span
                  className="text-primary text-xl font-light flex-shrink-0"
                  aria-hidden="true"
                >
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>
              <div
                id={`faq-answer-${index}`}
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <p className="px-6 pb-4 text-foreground/70">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
