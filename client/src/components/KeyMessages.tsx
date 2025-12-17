import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquareQuote, Sparkles, Target, Zap } from "lucide-react";

export default function KeyMessages() {
  return (
    <section id="messages" className="py-24 bg-background relative overflow-hidden border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif italic text-white mb-4">
            Messages <span className="text-slate-400">Clés</span>
          </h2>
          <p className="text-white/60 font-sans max-w-2xl mx-auto">
            Les piliers narratifs qui guideront toutes nos communications pour convaincre chaque cible.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Axe 1: Innovation & Futur */}
          <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group">
            <CardHeader>
              <div className="w-12 h-12 rounded-full bg-slate-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Sparkles className="w-6 h-6 text-slate-400" />
              </div>
              <CardTitle className="text-xl text-white font-serif">L'Avant-Garde IA</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-white/70 mb-6 text-sm">
                Positionner EAI comme le rendez-vous incontournable pour comprendre le futur immédiat de l'IA.
              </p>
              <div className="bg-black/30 p-4 rounded-lg border-l-2 border-slate-400">
                <p className="text-white font-serif italic text-lg">
                  "Ne subissez pas la révolution IA, dirigez-la."
                </p>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="text-xs bg-slate-500/10 text-slate-300 px-2 py-1 rounded">Innovation</span>
                <span className="text-xs bg-slate-500/10 text-slate-300 px-2 py-1 rounded">Futur</span>
                <span className="text-xs bg-slate-500/10 text-slate-300 px-2 py-1 rounded">Leadership</span>
              </div>
            </CardContent>
          </Card>

          {/* Axe 2: Pragmatique & ROI */}
          <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group">
            <CardHeader>
              <div className="w-12 h-12 rounded-full bg-stone-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Target className="w-6 h-6 text-stone-400" />
              </div>
              <CardTitle className="text-xl text-white font-serif">Solutions Concrètes</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-white/70 mb-6 text-sm">
                Sortir du théorique pour offrir des outils et stratégies applicables dès le lendemain.
              </p>
              <div className="bg-black/30 p-4 rounded-lg border-l-2 border-stone-400">
                <p className="text-white font-serif italic text-lg">
                  "Des stratégies IA, pas de la science-fiction."
                </p>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="text-xs bg-stone-500/10 text-stone-300 px-2 py-1 rounded">ROI</span>
                <span className="text-xs bg-stone-500/10 text-stone-300 px-2 py-1 rounded">Pratique</span>
                <span className="text-xs bg-stone-500/10 text-stone-300 px-2 py-1 rounded">Outils</span>
              </div>
            </CardContent>
          </Card>

          {/* Axe 3: Réseautage & Élite */}
          <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group">
            <CardHeader>
              <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Zap className="w-6 h-6 text-emerald-400" />
              </div>
              <CardTitle className="text-xl text-white font-serif">L'Écosystème Élite</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-white/70 mb-6 text-sm">
                Valoriser la qualité du networking et la présence des décideurs clés de l'industrie.
              </p>
              <div className="bg-black/30 p-4 rounded-lg border-l-2 border-emerald-400">
                <p className="text-white font-serif italic text-lg">
                  "Connectez avec ceux qui font l'IA aujourd'hui."
                </p>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="text-xs bg-emerald-500/10 text-emerald-300 px-2 py-1 rounded">Networking</span>
                <span className="text-xs bg-emerald-500/10 text-emerald-300 px-2 py-1 rounded">Décideurs</span>
                <span className="text-xs bg-emerald-500/10 text-emerald-300 px-2 py-1 rounded">Communauté</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
