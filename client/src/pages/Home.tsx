import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ExecutiveSummary from "@/components/ExecutiveSummary";
import Analysis from "@/components/Analysis";
import Personas from "@/components/Personas";
import Strategy from "@/components/Strategy";
import Budget from "@/components/Budget";
import KPIs from "@/components/KPIs";
import Timeline from "@/components/Timeline";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-white/20">
      <Navbar />
      <main>
        <Hero />
        <ExecutiveSummary />
        <Analysis />
        <Personas />
        <Strategy />
        <Budget />
        <KPIs />
        <Timeline />
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
