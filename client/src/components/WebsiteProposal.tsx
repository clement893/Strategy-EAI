import { ArrowRight, CheckCircle2, XCircle, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function WebsiteProposal() {
  return (
    <section id="proposal" className="py-32 bg-gradient-to-b from-background to-slate-950/20 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="mb-16">
          <h2 className="text-5xl font-sans font-bold mb-4">08</h2>
          <h3 className="text-4xl font-serif italic mb-8">La Nouvelle Expérience E-AI</h3>
          <p className="text-white/60 leading-relaxed max-w-2xl">
            Transition d'une vitrine statique vers une plateforme de conversion immersive. Comparatif de l'impact avant/après.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Comparatif Avant / Après */}
          <div className="space-y-8">
            
            {/* Ancien Site */}
            <div className="bg-rose-500/5 border border-rose-500/10 p-6 rounded-lg opacity-70 hover:opacity-100 transition-opacity">
              <div className="flex justify-between items-center mb-4">
                <h4 className="font-bold text-rose-200">Site Actuel (entertain-ai.com)</h4>
                <XCircle className="w-5 h-5 text-rose-400" />
              </div>
              <ul className="space-y-3">
                <li className="flex gap-3 text-sm text-white/60">
                  <span className="text-rose-400">•</span> Surcharge cognitive (trop d'éléments)
                </li>
                <li className="flex gap-3 text-sm text-white/60">
                  <span className="text-rose-400">•</span> Proposition de valeur noyée
                </li>
                <li className="flex gap-3 text-sm text-white/60">
                  <span className="text-rose-400">•</span> Parcours de conversion complexe
                </li>
              </ul>
            </div>

            {/* Flèche de transition */}
            <div className="flex justify-center">
              <ArrowRight className="w-8 h-8 text-white/20 rotate-90 lg:rotate-0" />
            </div>

            {/* Nouveau Site */}
            <div className="bg-emerald-500/10 border border-emerald-500/20 p-8 rounded-lg shadow-2xl shadow-emerald-900/20">
              <div className="flex justify-between items-center mb-6">
                <h4 className="font-bold text-xl text-emerald-300">Nouvelle Proposition</h4>
                <CheckCircle2 className="w-6 h-6 text-emerald-400" />
              </div>
              <ul className="space-y-4">
                <li className="flex gap-3 items-start">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-white text-sm">Clarté Radicale</strong>
                    <span className="text-white/50 text-xs">Message unique, dates visibles, hiérarchie maîtrisée.</span>
                  </div>
                </li>
                <li className="flex gap-3 items-start">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-white text-sm">Design Immersif</strong>
                    <span className="text-white/50 text-xs">Esthétique "Dark Mode" premium alignée avec l'industrie Tech/IA.</span>
                  </div>
                </li>
                <li className="flex gap-3 items-start">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-white text-sm">Conversion First</strong>
                    <span className="text-white/50 text-xs">CTAs stratégiques et parcours d'achat simplifié.</span>
                  </div>
                </li>
              </ul>
            </div>

          </div>

          {/* Call to Action & Preview */}
          <div className="text-center lg:text-left space-y-8">
            <div className="relative rounded-2xl overflow-hidden mb-8 border border-white/10 shadow-2xl">
              <img 
                src="/images/discussion-space.jpg" 
                alt="Espace de discussion" 
                className="w-full h-64 object-cover opacity-80 hover:opacity-100 transition-opacity duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-xs font-sans uppercase tracking-widest text-white/50 mb-1">L'expérience E-AI</p>
                <p className="text-white font-serif italic">Connexion humaine, Innovation technologique</p>
              </div>
            </div>

            <h4 className="text-3xl font-serif italic leading-tight">
              "Un design qui ne se contente pas d'informer, mais qui <span className="text-slate-400">inspire</span>."
            </h4>
            <p className="text-white/60 leading-relaxed">
              La nouvelle plateforme a été conçue pour refléter l'ambition d'E-AI 2026 : être le carrefour mondial de l'intelligence créative.
            </p>
            
            <div className="pt-4">
              <Button 
                className="bg-white text-black hover:bg-white/90 px-8 py-6 text-lg rounded-full group"
                onClick={() => window.open('https://e-ai2026-production.up.railway.app/', '_blank')}
              >
                Voir le prototype live
                <ExternalLink className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <p className="mt-4 text-xs text-white/30 uppercase tracking-widest">
                Hébergé sur Railway • Production Ready
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
