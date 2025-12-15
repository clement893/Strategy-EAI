import { Card, CardContent } from "@/components/ui/card";

export default function KPIs() {
  return (
    <section id="kpis" className="py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-24">
          <h2 className="text-5xl font-sans font-bold mb-4">05</h2>
          <h3 className="text-4xl font-serif italic">Objectifs Clés</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="bg-transparent border border-white/20 hover:border-white/50 transition-colors duration-500 group">
            <CardContent className="p-12 text-center">
              <span className="block text-xs font-sans uppercase tracking-widest text-white/50 mb-6 group-hover:text-white transition-colors">Ventes</span>
              <div className="text-6xl font-serif italic mb-4">1 234</div>
              <p className="text-white/60 text-sm">Billets vendus (+25%)</p>
            </CardContent>
          </Card>

          <Card className="bg-transparent border border-white/20 hover:border-white/50 transition-colors duration-500 group">
            <CardContent className="p-12 text-center">
              <span className="block text-xs font-sans uppercase tracking-widest text-white/50 mb-6 group-hover:text-white transition-colors">Acquisition</span>
              <div className="text-6xl font-serif italic mb-4">22,70$</div>
              <p className="text-white/60 text-sm">Coût par acquisition moyen</p>
            </CardContent>
          </Card>

          <Card className="bg-transparent border border-white/20 hover:border-white/50 transition-colors duration-500 group">
            <CardContent className="p-12 text-center">
              <span className="block text-xs font-sans uppercase tracking-widest text-white/50 mb-6 group-hover:text-white transition-colors">Notoriété</span>
              <div className="text-6xl font-serif italic mb-4">1M+</div>
              <p className="text-white/60 text-sm">Impressions publicitaires</p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-32 text-center">
          <p className="text-white/40 font-serif italic text-lg">
            "Une stratégie ambitieuse mais réaliste pour transformer Entertain-AI en leader incontesté."
          </p>
          <div className="mt-8">
            <span className="block text-xs font-sans uppercase tracking-widest text-white/30">Préparé par</span>
            <span className="block text-sm font-sans font-bold mt-2">Nukleo</span>
          </div>
        </div>
      </div>
    </section>
  );
}
