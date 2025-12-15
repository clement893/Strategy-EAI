import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-4 h-24 flex items-center justify-between">
        <Link href="/">
          <a className="text-3xl font-serif italic tracking-tight hover:opacity-80 transition-opacity">
            EAI <span className="font-sans not-italic font-bold text-sm tracking-widest ml-2 uppercase opacity-70">Strategy 2026</span>
          </a>
        </Link>

        <div className="hidden md:flex items-center gap-10">
          <button onClick={() => scrollToSection("analysis")} className="font-sans text-xs uppercase tracking-widest hover:text-white/70 transition-colors">
            Analyse
          </button>
          <button onClick={() => scrollToSection("personas")} className="font-sans text-xs uppercase tracking-widest hover:text-white/70 transition-colors">
            Cibles
          </button>
          <button onClick={() => scrollToSection("strategy")} className="font-sans text-xs uppercase tracking-widest hover:text-white/70 transition-colors">
            Stratégie
          </button>
          <button onClick={() => scrollToSection("budget")} className="font-sans text-xs uppercase tracking-widest hover:text-white/70 transition-colors">
            Budget
          </button>
          <Button 
            onClick={() => scrollToSection("kpis")}
            variant="outline"
            className="font-sans text-xs uppercase tracking-widest border-white/30 hover:bg-white hover:text-background rounded-full px-6"
          >
            Objectifs
          </Button>
        </div>
      </div>
    </nav>
  );
}
