import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, BarChart3, Users, RefreshCw, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Governance() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/panel-discussion.jpg" 
          alt="Pilotage stratégique" 
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background"></div>
      </div>

      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif italic text-white mb-4">
            Pilotage & <span className="text-slate-400">Gouvernance</span>
          </h2>
          <p className="text-white/70 text-lg font-sans">
            Une structure de suivi rigoureuse pour garantir l'atteinte des objectifs et la réactivité face aux imprévus.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
            <CardHeader>
              <div className="w-12 h-12 rounded-full bg-slate-500/20 flex items-center justify-center mb-4">
                <BarChart3 className="w-6 h-6 text-slate-400" />
              </div>
              <CardTitle className="text-xl text-white font-serif">Suivi Hebdomadaire</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-white/70 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-slate-400 mt-1 shrink-0" />
                  <span>Analyse des KPIs (Ventes, CPA, ROAS)</span>
                </li>
                <li className="flex items-start gap-2 text-white/70 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-slate-400 mt-1 shrink-0" />
                  <span>Optimisation des campagnes actives</span>
                </li>
                <li className="flex items-start gap-2 text-white/70 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-slate-400 mt-1 shrink-0" />
                  <span>Validation des créatifs S+1</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
            <CardHeader>
              <div className="w-12 h-12 rounded-full bg-stone-500/20 flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-stone-400" />
              </div>
              <CardTitle className="text-xl text-white font-serif">Comité de Pilotage</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-white/70 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-stone-400 mt-1 shrink-0" />
                  <span>Réunion mensuelle (Déc, Jan, Fév)</span>
                </li>
                <li className="flex items-start gap-2 text-white/70 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-stone-400 mt-1 shrink-0" />
                  <span>Arbitrages budgétaires majeurs</span>
                </li>
                <li className="flex items-start gap-2 text-white/70 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-stone-400 mt-1 shrink-0" />
                  <span>Alignement équipes (Marketing, Tech, Event)</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
            <CardHeader>
              <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center mb-4">
                <RefreshCw className="w-6 h-6 text-emerald-400" />
              </div>
              <CardTitle className="text-xl text-white font-serif">Reporting Temps Réel</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-white/70 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-1 shrink-0" />
                  <span>Dashboard Looker Studio partagé</span>
                </li>
                <li className="flex items-start gap-2 text-white/70 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-1 shrink-0" />
                  <span>Alertes automatiques (Budget, Site)</span>
                </li>
                <li className="flex items-start gap-2 text-white/70 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-1 shrink-0" />
                  <span>Transparence totale des données</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Next Steps / Call to Action */}
        <div className="bg-gradient-to-r from-slate-900/40 to-stone-900/40 border border-white/10 rounded-2xl p-8 md:p-12 backdrop-blur-md">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-4 max-w-2xl">
              <h3 className="text-2xl md:text-3xl font-serif text-white">
                Prêts à lancer la machine ?
              </h3>
              <p className="text-white/70 font-sans">
                Le plan est clair, les outils sont prêts. Voici les actions immédiates pour démarrer la phase de Fondation dès cette semaine.
              </p>
              <div className="flex flex-wrap gap-4 mt-4">
                <span className="px-3 py-1 rounded-full bg-white/10 text-white/80 text-sm border border-white/10">
                  1. Validation Budget
                </span>
                <span className="px-3 py-1 rounded-full bg-white/10 text-white/80 text-sm border border-white/10">
                  2. Accès Techniques (GA4, Meta)
                </span>
                <span className="px-3 py-1 rounded-full bg-white/10 text-white/80 text-sm border border-white/10">
                  3. Kick-off Meeting S1
                </span>
              </div>
            </div>
            <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-50 font-semibold px-8 h-14 text-lg shrink-0" onClick={() => window.open('https://www.notion.so/Checklist-Lancement-EAI-2026-123456', '_blank')}>
              Voir la Checklist de Lancement <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
