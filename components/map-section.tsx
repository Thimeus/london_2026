"use client";

import dynamic from "next/dynamic";

const MapComponent = dynamic(() => import("./map-component"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[400px] bg-muted rounded-xl flex items-center justify-center">
      <p className="text-foreground/50">Karte wird geladen...</p>
    </div>
  ),
});

export default function MapSection() {
  return (
    <section
      id="karte"
      className="py-16 px-4 bg-background"
      aria-labelledby="map-heading"
    >
      <div className="max-w-6xl mx-auto">
        <p className="text-sm font-semibold tracking-widest text-primary uppercase mb-2">
          Maps
        </p>
        <h2
          id="map-heading"
          className="text-3xl md:text-4xl font-bold text-foreground mb-4"
        >
          Wichtige Orte
        </h2>
        <p className="text-foreground/70 mb-8 max-w-2xl">
          Hostel, Treffpunkte und Highlights auf einen Blick. Tipp: Marker
          anklicken für Details.
        </p>

        <div className="rounded-xl overflow-hidden shadow-lg mb-6">
          <MapComponent />
        </div>

        <ul className="flex flex-wrap gap-4 text-sm">
          <li className="flex items-center gap-2">
            <span className="w-3 h-3 bg-primary rounded-full" />
            Unterkunft (Restup Driscoll House)
          </li>
          <li className="flex items-center gap-2">
            <span className="w-3 h-3 bg-secondary rounded-full" />
            Nächste Tube: Elephant & Castle
          </li>
          <li className="flex items-center gap-2">
            <span className="w-3 h-3 bg-accent rounded-full" />
            Sehenswürdigkeiten
          </li>
        </ul>
      </div>
    </section>
  );
}
