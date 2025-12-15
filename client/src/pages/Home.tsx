import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Analysis from "@/components/Analysis";
import Personas from "@/components/Personas";
import Strategy from "@/components/Strategy";
import Budget from "@/components/Budget";
import KPIs from "@/components/KPIs";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-white/20">
      <Navbar />
      <main>
        <Hero />
        <Analysis />
        <Personas />
        <Strategy />
        <Budget />
        <KPIs />
      </main>
      
      <footer className="py-8 border-t border-white/10 text-center">
        <p className="text-xs font-sans text-white/30 uppercase tracking-widest">
          © 2025 Entertain-AI Strategy • Confidential
        </p>
      </footer>
    </div>
  );
}
