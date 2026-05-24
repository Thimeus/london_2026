"use client";

import { useState, useEffect } from "react";

const targetDate = new Date("2026-06-01T06:45:00").getTime();

export default function Hero() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const pad = (num: number) => num.toString().padStart(2, "0");

  return (
    <section className="relative py-16 md:py-24 px-4 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted to-background -z-10" />

      <div className="max-w-4xl mx-auto text-center">
        <p className="text-sm font-semibold tracking-widest text-primary uppercase mb-4">
          Sprachreise &middot; Klasse 8-10
        </p>

        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          <span className="text-foreground">Welcome to</span>
          <br />
          <span className="text-primary">LONDON</span>
          <br />
          <span className="text-secondary">2026</span>
        </h1>

        <p className="text-lg md:text-xl text-foreground/80 mb-8 max-w-2xl mx-auto">
          01. - 05. Juni 2026 &middot; Johann-Gutenberg-Schule &middot; Eure
          Kursfahrt nach Großbritannien. Hier findet ihr alle Infos zur Reise.
        </p>

        {/* Countdown */}
        <div
          className="flex justify-center gap-2 md:gap-4 mb-10"
          aria-label="Countdown bis zur Abreise"
        >
          <div className="flex flex-col items-center">
            <span className="text-3xl md:text-5xl font-bold text-primary bg-card px-3 md:px-4 py-2 rounded-lg shadow-sm">
              {pad(timeLeft.days)}
            </span>
            <span className="text-xs md:text-sm text-foreground/70 mt-1">
              TAGE
            </span>
          </div>
          <span className="text-2xl md:text-4xl font-bold text-foreground/30 self-start mt-2">
            :
          </span>
          <div className="flex flex-col items-center">
            <span className="text-3xl md:text-5xl font-bold text-primary bg-card px-3 md:px-4 py-2 rounded-lg shadow-sm">
              {pad(timeLeft.hours)}
            </span>
            <span className="text-xs md:text-sm text-foreground/70 mt-1">
              STUNDEN
            </span>
          </div>
          <span className="text-2xl md:text-4xl font-bold text-foreground/30 self-start mt-2">
            :
          </span>
          <div className="flex flex-col items-center">
            <span className="text-3xl md:text-5xl font-bold text-primary bg-card px-3 md:px-4 py-2 rounded-lg shadow-sm">
              {pad(timeLeft.minutes)}
            </span>
            <span className="text-xs md:text-sm text-foreground/70 mt-1">
              MINUTEN
            </span>
          </div>
          <span className="text-2xl md:text-4xl font-bold text-foreground/30 self-start mt-2">
            :
          </span>
          <div className="flex flex-col items-center">
            <span className="text-3xl md:text-5xl font-bold text-primary bg-card px-3 md:px-4 py-2 rounded-lg shadow-sm">
              {pad(timeLeft.seconds)}
            </span>
            <span className="text-xs md:text-sm text-foreground/70 mt-1">
              SEKUNDEN
            </span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#programm"
            className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white font-semibold rounded-full hover:bg-primary-dark transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
          >
            Zum Programm
          </a>
          <a
            href="#packliste"
            className="inline-flex items-center justify-center px-6 py-3 bg-card text-foreground font-semibold rounded-full border-2 border-border hover:border-primary hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
          >
            Packliste öffnen
          </a>
        </div>
      </div>
    </section>
  );
}
