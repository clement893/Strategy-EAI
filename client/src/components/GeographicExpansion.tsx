import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, TrendingUp, Globe } from "lucide-react";

export default function GeographicExpansion() {
  return (
    <section id="geographic-expansion" className="py-32 relative">
      <div className="container mx-auto px-4">
        <div className="mb-16">
          <h2 className="text-5xl font-sans font-bold mb-4">11</h2>
          <h3 className="text-4xl font-serif italic mb-8">Expansion géographique : Vision 2027-2028</h3>
          <p className="text-white/60 leading-relaxed max-w-3xl">
            La stratégie 2026 se concentre exclusivement sur le marché québécois pour maximiser le ROI. L'expansion internationale est reportée à 2027-2028, une fois la preuve de concept établie et le modèle économique validé.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card className="bg-gradient-to-br from-blue-500/10 to-indigo-500/10 border-blue-500/20">
            <CardHeader>
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-blue-500/20 rounded-lg">
                  <MapPin className="w-6 h-6 text-blue-300" />
                </div>
                <CardTitle className="text-2xl font-serif italic text-blue-200">Pourquoi Québec d'abord ?</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="text-3xl font-serif italic text-blue-300">37$</div>
                <div>
                  <p className="text-sm text-white/80 font-medium">CPA local vs 220-330 $ international</p>
                  <p className="text-xs text-white/50">Coût d'acquisition 6 à 9 fois inférieur au Québec</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="text-3xl font-serif italic text-blue-300">5k+</div>
                <div>
                  <p className="text-sm text-white/80 font-medium">Potentiel local de participants qualifiés</p>
                  <p className="text-xs text-white/50">Marché québécois ICC encore largement inexploité</p>
                </div>
              </div>
              <div className="bg-white/5 border border-white/10 p-4 rounded-lg">
                <h5 className="font-sans text-xs uppercase tracking-widest text-white/50 mb-2">Barrières internationales</h5>
                <ul className="space-y-2 text-xs text-white/60">
                  <li>• Coûts de déplacement (vol + hébergement)</li>
                  <li>• Complexité logistique et administrative</li>
                  <li>• Nécessité d'une preuve de concept locale solide</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border-green-500/20">
            <CardHeader>
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-green-500/20 rounded-lg">
                  <TrendingUp className="w-6 h-6 text-green-300" />
                </div>
                <CardTitle className="text-2xl font-serif italic text-green-200">Feuille de route internationale</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-white/5 border border-white/10 p-4 rounded-lg">
                <h5 className="font-sans text-xs uppercase tracking-widest text-white/50 mb-3">2027 - Phase pilote</h5>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-white/70">Ciblage</span>
                    <span className="text-sm font-serif italic">Ontario et États du Nord-Est</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-white/70">Budget additionnel</span>
                    <span className="text-sm font-serif italic">15 000 $</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-white/70">Objectif</span>
                    <span className="text-sm font-serif italic text-green-300">100 billets hors Québec</span>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 p-4 rounded-lg">
                <h5 className="font-sans text-xs uppercase tracking-widest text-white/50 mb-3">2028 - Expansion francophone</h5>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-white/70">Ciblage</span>
                    <span className="text-sm font-serif italic">France, Belgique, Suisse</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-white/70">Budget additionnel</span>
                    <span className="text-sm font-serif italic">25 000 $</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-white/70">Objectif</span>
                    <span className="text-sm font-serif italic text-green-300">150 billets internationaux</span>
                  </div>
                  <div className="pt-2 border-t border-white/10">
                    <p className="text-xs text-white/50">Format hybride (présentiel + streaming)</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="bg-white/5 border border-white/10 p-8 rounded-lg">
          <div className="flex items-start gap-6">
            <div className="p-4 bg-white/10 rounded-lg flex-shrink-0">
              <Globe className="w-8 h-8 text-white/70" />
            </div>
            <div>
              <h4 className="font-serif italic text-2xl mb-4 text-white">Stratégie d'expansion progressive</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-white/70">
                <div>
                  <h5 className="font-sans text-xs uppercase tracking-widest text-white/50 mb-3">2026 : Consolidation locale</h5>
                  <p className="leading-relaxed">
                    Focus exclusif sur le marché québécois pour établir une base solide, optimiser le modèle économique et créer une preuve de concept irréfutable.
                  </p>
                </div>
                <div>
                  <h5 className="font-sans text-xs uppercase tracking-widest text-white/50 mb-3">2027 : Expansion régionale</h5>
                  <p className="leading-relaxed">
                    Test pilote sur les marchés adjacents (Ontario, États du Nord-Est) avec un budget limité pour valider l'appétit international sans risque majeur.
                  </p>
                </div>
                <div>
                  <h5 className="font-sans text-xs uppercase tracking-widest text-white/50 mb-3">2028 : Rayonnement francophone</h5>
                  <p className="leading-relaxed">
                    Expansion vers l'Europe francophone avec format hybride, capitalisant sur la notoriété établie et les retours d'expérience 2026-2027.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
