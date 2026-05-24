import Header from "@/components/header";
import Hero from "@/components/hero";
import QuickFacts from "@/components/quick-facts";
import Program from "@/components/program";
import TubeGuide from "@/components/tube-guide";
import PackingList from "@/components/packing-list";
import MapSection from "@/components/map-section";
import Emergency from "@/components/emergency";
import FAQ from "@/components/faq";
import Tips from "@/components/tips";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <a href="#main" className="skip-link">
        Zum Inhalt springen
      </a>
      <Header />
      <main id="main" className="flex-1">
        <Hero />
        <QuickFacts />
        <Program />
        <TubeGuide />
        <PackingList />
        <MapSection />
        <Emergency />
        <FAQ />
        <Tips />
      </main>
      <Footer />
    </>
  );
}
