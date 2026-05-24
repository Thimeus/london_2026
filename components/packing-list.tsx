"use client";

import { useState, useEffect } from "react";

const packingCategories = [
  {
    title: "📄 Dokumente",
    items: [
      "Reisepass (gültig!)",
      "UK ETA (Bestätigung ausgedruckt)",
      "Krankenversichertenkarte / EHIC oder GHIC",
      "Notfallkontakte auf Papier",
      "Kopie Hostel-Adresse",
    ],
  },
  {
    title: "💷 Geld & Karte",
    items: [
      "Bargeld ca. 80-150 £",
      "Bank-/Revolut-Karte",
      "Apple Pay / Google Pay aktivieren",
      "Kleine Geldbörse",
    ],
  },
  {
    title: "👕 Kleidung (5 Tage)",
    items: [
      "5× T-Shirts / Tops",
      "1-2× Pullover oder Hoodie",
      "2× lange Hose / Jeans",
      "Regenjacke (London!)",
      "1× wärmere Jacke",
      "5× Unterwäsche & Socken",
      "Schlafanzug",
      "Bequeme Sneaker (viel laufen!)",
    ],
  },
  {
    title: "🧴 Hygiene",
    items: [
      "Zahnbürste & Zahnpasta",
      "Duschgel & Shampoo (< 100 ml im Handgepäck)",
      "Deo",
      "Handtuch",
      "Badeschlappen",
      "Sonnencreme & Lippenbalsam",
      "Persönliche Medikamente",
    ],
  },
  {
    title: "📱 Technik",
    items: [
      "Handy + Ladekabel",
      "UK-Adapter (Typ G)",
      "Powerbank (ins Handgepäck!)",
      "Kopfhörer",
      "Kamera (optional)",
    ],
  },
  {
    title: "🎒 Im Handgepäck",
    items: [
      "Reisepass & ETA",
      "Geld & Karte",
      "Snacks & Wasserflasche (leer)",
      "Buch / Spiel für den Flug",
      "Powerbank",
      "Wechseloberteil (falls Koffer verloren geht)",
    ],
  },
];

const STORAGE_KEY = "london2026-packing-list";

export default function PackingList() {
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});

  // Load from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        setCheckedItems(JSON.parse(saved));
      } catch {
        // Invalid JSON, ignore
      }
    }
  }, []);

  // Save to localStorage whenever checkedItems changes
  useEffect(() => {
    if (Object.keys(checkedItems).length > 0) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(checkedItems));
    }
  }, [checkedItems]);

  const toggleItem = (item: string) => {
    setCheckedItems((prev) => ({
      ...prev,
      [item]: !prev[item],
    }));
  };

  const resetList = () => {
    setCheckedItems({});
    localStorage.removeItem(STORAGE_KEY);
  };

  const totalItems = packingCategories.reduce(
    (acc, cat) => acc + cat.items.length,
    0
  );
  const checkedCount = Object.values(checkedItems).filter(Boolean).length;

  return (
    <section
      id="packliste"
      className="py-16 px-4 bg-muted"
      aria-labelledby="packing-heading"
    >
      <div className="max-w-6xl mx-auto">
        <p className="text-sm font-semibold tracking-widest text-primary uppercase mb-2">
          Don&apos;t Forget
        </p>
        <h2
          id="packing-heading"
          className="text-3xl md:text-4xl font-bold text-foreground mb-4"
        >
          Packliste zum Abhaken
        </h2>
        <p className="text-foreground/70 mb-6 max-w-2xl">
          Hak ab, was im Koffer ist. Wird automatisch in deinem Browser
          gespeichert - also auch nach dem Schließen noch da.
        </p>

        <div className="flex items-center gap-4 mb-8">
          <div className="bg-card px-4 py-2 rounded-full text-sm font-semibold">
            {checkedCount} / {totalItems}
          </div>
          <button
            onClick={resetList}
            className="text-sm text-primary hover:underline focus:outline-none focus:ring-2 focus:ring-ring rounded"
          >
            Zurücksetzen
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {packingCategories.map((category, catIndex) => (
            <div key={catIndex} className="bg-card rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-lg mb-4">{category.title}</h3>
              <ul className="space-y-2">
                {category.items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <label className="flex items-start gap-3 cursor-pointer group">
                      <input
                        type="checkbox"
                        checked={checkedItems[item] || false}
                        onChange={() => toggleItem(item)}
                        className="mt-1 w-4 h-4 text-primary border-border rounded focus:ring-primary"
                      />
                      <span
                        className={`text-sm transition-all ${
                          checkedItems[item]
                            ? "line-through text-foreground/50"
                            : "text-foreground group-hover:text-primary"
                        }`}
                      >
                        {item}
                      </span>
                    </label>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
