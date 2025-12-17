import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle, ShieldCheck, TrendingDown, ServerCrash, Users } from "lucide-react";

export default function RiskManagement() {
  return (
    <section id="risks" className="py-32 relative bg-white/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-sans font-bold mb-4">07</h2>
          <h3 className="text-4xl font-serif italic">Gestion des Risques</h3>
          <p className="text-white/60 mt-4 max-w-2xl mx-auto">
            Identification proactive des menaces et plans de contingence pour sécuriser l'atteinte des objectifs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Risque 1 */}
          <Card className="bg-rose-500/5 border-rose-500/20 hover:bg-rose-500/10 transition-colors">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-xl font-serif italic text-white">
                <TrendingDown className="w-6 h-6 text-rose-400" />
                Sous-performance
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="text-xs font-bold text-rose-400 uppercase mb-1">Risque</h4>
                <p className="text-white/80 text-sm">Les campagnes d'acquisition (Phase 1) ne génèrent pas le volume attendu de leads.</p>
              </div>
              <div className="pt-4 border-t border-rose-500/20">
                <h4 className="text-xs font-bold text-emerald-400 uppercase mb-1 flex items-center gap-2">
                  <ShieldCheck className="w-3 h-3" /> Plan B
                </h4>
                <p className="text-white/80 text-sm">Réallocation immédiate du budget vers La Presse (canal de confiance) et activation précoce de la base "Fidèles" avec offre agressive.</p>
              </div>
            </CardContent>
          </Card>

          {/* Risque 2 */}
          <Card className="bg-amber-500/5 border-amber-500/20 hover:bg-amber-500/10 transition-colors">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-xl font-serif italic text-white">
                <Users className="w-6 h-6 text-amber-400" />
                Concentration Extrême
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="text-xs font-bold text-amber-400 uppercase mb-1">Risque</h4>
                <p className="text-white/80 text-sm">Répétition du scénario 2025 : 50% des ventes dans les 48 dernières heures.</p>
              </div>
              <div className="pt-4 border-t border-amber-500/20">
                <h4 className="text-xs font-bold text-emerald-400 uppercase mb-1 flex items-center gap-2">
                  <ShieldCheck className="w-3 h-3" /> Plan B
                </h4>
                <p className="text-white/80 text-sm">Mise en place de quotas de billets par phase ("Plus que 50 billets à ce prix") pour forcer l'urgence artificielle plus tôt.</p>
              </div>
            </CardContent>
          </Card>

          {/* Risque 3 */}
          <Card className="bg-slate-500/5 border-slate-500/20 hover:bg-slate-500/10 transition-colors">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-xl font-serif italic text-white">
                <ServerCrash className="w-6 h-6 text-slate-400" />
                Problème Technique
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase mb-1">Risque</h4>
                <p className="text-white/80 text-sm">Panne de la billetterie ou du site lors des pics de trafic (ex: post-La Presse).</p>
              </div>
              <div className="pt-4 border-t border-slate-500/20">
                <h4 className="text-xs font-bold text-emerald-400 uppercase mb-1 flex items-center gap-2">
                  <ShieldCheck className="w-3 h-3" /> Plan B
                </h4>
                <p className="text-white/80 text-sm">Page de secours hébergée indépendamment avec lien direct Weezevent et formulaire de capture email de secours.</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
