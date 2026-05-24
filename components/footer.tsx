export default function Footer() {
  return (
    <footer className="bg-card border-t border-border py-8 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <div className="flex items-baseline justify-center gap-1 text-xl font-bold mb-2">
          <span className="text-primary">London</span>
          <span className="text-secondary">&apos;26</span>
        </div>
        <p className="text-foreground/70 text-sm mb-2">
          Johann-Gutenberg-Schule &middot; Kursfahrt 8.-10. Klasse
        </p>
        <p className="text-foreground/50 text-xs">
          Made with ❤️ für die Klasse &middot; Hosted on Netlify
        </p>
      </div>
    </footer>
  );
}
