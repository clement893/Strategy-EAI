import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Analysis from "@/components/Analysis";
import Personas from "@/components/Personas";
import Strategy from "@/components/Strategy";
import Budget from "@/components/Budget";
import KPIs from "@/components/KPIs";
import Timeline from "@/components/Timeline";
import DetailedCalendar from "@/components/DetailedCalendar";
import { Link } from "wouter";

export default function Home() {
  const documents = [
    { name: "Stratégie Marketing Entertain-AI 2026", path: "/strategie-eai-2026" },
    { name: "Stratégie Digitale Complète", path: "/strategie-digitale-complete-eai-2026" },
    { name: "Plan de Modifications", path: "/plan-modifications-strategie" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-white/20">
      <Navbar />
      <main>
        <Hero />
        <Analysis />
        <Personas />
        <Strategy />
        <Budget />
        <Timeline />
        <DetailedCalendar />
        
        {/* Documents Section */}
        <section className="py-32 border-t border-white/10">
          <div className="container mx-auto px-4">
            <h2 className="text-5xl font-sans font-bold mb-4">Documents</h2>
            <h3 className="text-4xl font-serif italic mb-12">Documentation complète</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {documents.map((doc) => (
                <Link key={doc.path} href={doc.path}>
                  <a className="block bg-white/5 border border-white/10 p-8 hover:bg-white/10 transition-colors duration-500">
                    <h4 className="text-xl font-serif italic mb-4">{doc.name}</h4>
                    <p className="text-sm text-white/60">Voir le document complet →</p>
                  </a>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <footer className="py-12 border-t border-white/10 text-center bg-background">
        <div className="flex flex-col items-center gap-6 mb-8">
          <img src="/images/nukleo-logo.png" alt="Nukleo" className="h-8 w-auto opacity-50 hover:opacity-100 transition-opacity" />
        </div>
        <p className="text-xs font-sans text-white/30 uppercase tracking-widest">
          © 2025 Entertain-AI Strategy • Confidential
        </p>
      </footer>
    </div>
  );
}
