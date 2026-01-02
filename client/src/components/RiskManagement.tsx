import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle, Search, Zap, TrendingUp } from "lucide-react";

export default function RiskManagement() {
  return (
    <section id="risk-management" className="py-32 relative bg-white/[0.02]">
      <div className="container mx-auto px-4">
        <div className="mb-16">
          <h2 className="text-5xl font-sans font-bold mb-4">10</h2>
          <h3 className="text-4xl font-serif italic mb-8">Gestion des risques et plan de contingence</h3>
          <p className="text-white/60 leading-relaxed max-w-3xl">
            Un plan de contingence structuré pour anticiper et réagir rapidement aux écarts de performance. Le seuil d'alerte est fixé à <strong className="text-red-300">moins de 300 billets vendus au 31 janvier</strong>, déclenchant un budget d'urgence de 5 000 $ et des actions correctives immédiates.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card className="bg-gradient-to-br from-red-500/10 to-orange-500/10 border-red-500/20">
            <CardHeader>
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-red-500/20 rounded-lg">
                  <AlertTriangle className="w-6 h-6 text-red-300" />
                </div>
                <CardTitle className="text-2xl font-serif italic text-red-200">Seuil d'alerte</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-center py-6">
                <div className="text-6xl font-serif italic mb-2 text-red-300">&lt; 300</div>
                <p className="text-sm text-white/70 mb-4">billets vendus au 31 janvier</p>
                <p className="text-xs text-white/50">
                  Si moins de 300 billets sont vendus au 31 janvier, le plan de contingence est activé immédiatement avec un budget d'urgence de 5 000 $.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-blue-500/10 to-indigo-500/10 border-blue-500/20">
            <CardHeader>
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-blue-500/20 rounded-lg">
                  <TrendingUp className="w-6 h-6 text-blue-300" />
                </div>
                <CardTitle className="text-2xl font-serif italic text-blue-200">Budget d'urgence</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-center py-6">
                <div className="text-6xl font-serif italic mb-2 text-blue-300">5 000$</div>
                <p className="text-sm text-white/70 mb-4">Budget de contingence</p>
                <p className="text-xs text-white/50">
                  Budget réservé pour des actions correctives rapides : amplification publicitaire, offres flash, webinaire additionnel, ou partenariat média d'urgence.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-500">
            <CardHeader>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-white/10 rounded-lg">
                  <Search className="w-5 h-5" />
                </div>
                <CardTitle className="font-sans text-sm uppercase tracking-widest text-white/50">1. Diagnostic</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="text-sm text-white/70 flex items-start gap-2">
                  <span className="text-blue-300 mt-1">•</span>
                  <span>Analyse performances par canal</span>
                </li>
                <li className="text-sm text-white/70 flex items-start gap-2">
                  <span className="text-blue-300 mt-1">•</span>
                  <span>Identification des blocages</span>
                </li>
                <li className="text-sm text-white/70 flex items-start gap-2">
                  <span className="text-blue-300 mt-1">•</span>
                  <span>Sondage express non-convertis</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-500">
            <CardHeader>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-white/10 rounded-lg">
                  <Zap className="w-5 h-5" />
                </div>
                <CardTitle className="font-sans text-sm uppercase tracking-widest text-white/50">2. Actions tactiques</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="text-sm text-white/70 flex items-start gap-2">
                  <span className="text-orange-300 mt-1">•</span>
                  <span>Offre flash 48h (-40 % au lieu de plein tarif)</span>
                </li>
                <li className="text-sm text-white/70 flex items-start gap-2">
                  <span className="text-orange-300 mt-1">•</span>
                  <span>Amplification budget Meta/LinkedIn (+100 %)</span>
                </li>
                <li className="text-sm text-white/70 flex items-start gap-2">
                  <span className="text-orange-300 mt-1">•</span>
                  <span>Webinaire additionnel avec tête d'affiche majeure</span>
                </li>
                <li className="text-sm text-white/70 flex items-start gap-2">
                  <span className="text-orange-300 mt-1">•</span>
                  <span>Partenariat média additionnel (radio, podcast)</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-500">
            <CardHeader>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-white/10 rounded-lg">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <CardTitle className="font-sans text-sm uppercase tracking-widest text-white/50">3. Ajustement objectifs</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="text-sm text-white/70 flex items-start gap-2">
                  <span className="text-yellow-300 mt-1">•</span>
                  <span>Réduction objectif à 500 billets (seuil minimal)</span>
                </li>
                <li className="text-sm text-white/70 flex items-start gap-2">
                  <span className="text-yellow-300 mt-1">•</span>
                  <span>Augmentation billets donnés à 500</span>
                </li>
                <li className="text-sm text-white/70 flex items-start gap-2">
                  <span className="text-yellow-300 mt-1">•</span>
                  <span>Focus impact écosystémique vs revenus</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="bg-white/5 border border-white/10 p-8 rounded-lg">
          <h4 className="font-serif italic text-2xl mb-6 text-white">Scénarios de contingence</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h5 className="font-sans text-xs uppercase tracking-widest text-white/50 mb-4">Scénario 1 : Sous-performance modérée</h5>
              <p className="text-sm text-white/60 mb-4">
                <strong className="text-white">200-299 billets au 31 janvier</strong>
              </p>
              <ul className="space-y-2 text-sm text-white/60">
                <li>• Activation plan de contingence partiel (2 500 $)</li>
                <li>• Offre flash 48h avec -30 %</li>
                <li>• Amplification Meta/LinkedIn +50 %</li>
                <li>• Maintien objectif 500 billets (seuil minimal)</li>
              </ul>
            </div>
            <div>
              <h5 className="font-sans text-xs uppercase tracking-widest text-white/50 mb-4">Scénario 2 : Sous-performance critique</h5>
              <p className="text-sm text-white/60 mb-4">
                <strong className="text-white">Moins de 200 billets au 31 janvier</strong>
              </p>
              <ul className="space-y-2 text-sm text-white/60">
                <li>• Activation plan de contingence complet (5 000 $)</li>
                <li>• Offre flash 48h avec -40 %</li>
                <li>• Amplification Meta/LinkedIn +100 %</li>
                <li>• Webinaire additionnel + partenariat média d'urgence</li>
                <li>• Réduction objectif à 400 billets et augmentation billets donnés</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
