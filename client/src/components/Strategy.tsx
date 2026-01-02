import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Strategy() {
  const phases = [
    {
      id: "01",
      title: "Fondation et anticipation",
      period: "16-31 décembre 2025",
      billets: "90 billets vendus",
      percentage: "12 % de l'objectif total",
      revenus: "1 575 $",
      desc: "Créer l'anticipation et activer la base de fidèles avec des offres précoces exclusives.",
      tactics: [
        "Optimisation du site web : Audit complet, optimisation vitesse, simplification paiement",
        "Installation tracking : Google Analytics 4, Meta Pixel, LinkedIn Insight Tag",
        "Campagne email fidèles : 987 participants 2025, offre -50 % exclusive",
        "Annonce têtes d'affiche : Communication progressive des conférenciers confirmés",
        "Activation ambassadeurs : 20 participants influents, billet gratuit vs promotion"
      ],
      budget: "500 $",
      kpis: [
        "Billets vendus : 90",
        "Taux de conversion fidèles : 9 % (90/987)",
        "Trafic site web : 5 000 visiteurs",
        "Taux d'ouverture emails : 40 %"
      ]
    },
    {
      id: "02",
      title: "Amplification et conversion",
      period: "1-31 janvier 2026",
      billets: "300 billets vendus",
      percentage: "40 % de l'objectif total",
      revenus: "10 500 $",
      desc: "Acquisition massive via publicités payantes et partenariats stratégiques majeurs.",
      tactics: [
        "Lancement campagnes publicitaires : LinkedIn (5 000 $), Meta (4 000 $), Google (4 000 $)",
        "Partenariat La Presse : Article XTRA (12 jan), bannières, infolettres (26 jan, 2 fév, 9 fév)",
        "Webinaire de prévisualisation : 15 janvier, tête d'affiche, 45 min, objectif 200 inscrits",
        "Retargeting intensif : Visiteurs site, engagements sociaux",
        "Partenariats communautés : AQIII, Montréal AI, incubateurs créatifs",
        "Relations publiques : Communiqués, interviews médias tech/culture"
      ],
      budget: "24 500 $",
      kpis: [
        "Billets vendus : 300",
        "Trafic site web : 20 000 visiteurs",
        "Taux de conversion site : 1,5 %",
        "Impressions publicitaires : 1 000 000",
        "CTR moyen : 2,5 %"
      ]
    },
    {
      id: "03",
      title: "Intensification et dernier appel",
      period: "1-18 février 2026",
      billets: "360 billets vendus",
      percentage: "48 % de l'objectif total",
      revenus: "12 600 $",
      desc: "Maximiser les ventes de dernière minute avec urgence et retargeting agressif.",
      tactics: [
        "Retargeting agressif : Visiteurs site, engagements sociaux, abandons panier",
        "Offres flash : Codes promo limités (24h), offres de groupe (5+)",
        "Urgence finale : Compteurs, notifications push, emails quotidiens",
        "Relations publiques : Interviews médias, podcasts, apparitions publiques",
        "Activation sur place : Vente billets jour même, offres last minute"
      ],
      budget: "3 000 $",
      kpis: [
        "Billets vendus : 360",
        "Trafic site web : 15 000 visiteurs",
        "Taux de conversion site : 2,4 %",
        "Taux d'ouverture emails : 45 %",
        "Billets vendus sur place : 30"
      ]
    }
  ];

  return (
    <section id="strategy" className="py-32 relative overflow-hidden bg-white/[0.02]">
      <div className="container mx-auto px-4 relative z-10">
        <div className="mb-24 md:w-1/2">
          <h2 className="text-5xl font-sans font-bold mb-4">04</h2>
          <h3 className="text-4xl font-serif italic mb-8">Stratégie marketing en 3 phases</h3>
          <p className="text-white/60 leading-relaxed">
            Une approche séquentielle conçue pour redistribuer les ventes sur trois mois et éviter le goulot d'étranglement de février. Chaque phase a des objectifs, des tactiques et des budgets spécifiques.
          </p>
        </div>

        <div className="space-y-12">
          {phases.map((phase, index) => (
            <motion.div 
              key={phase.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group relative"
            >
              <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-500">
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <span className="text-xs font-sans uppercase tracking-widest text-white/40 mb-2 block">Phase {phase.id}</span>
                      <CardTitle className="text-3xl font-serif italic mb-2">{phase.title}</CardTitle>
                      <p className="text-sm font-sans text-white/50 uppercase tracking-wider">{phase.period}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-4xl font-serif italic text-green-300 mb-1">{phase.billets.split(' ')[0]}</div>
                      <p className="text-xs text-white/50">billets vendus</p>
                      <p className="text-xs text-white/40 mt-2">{phase.percentage}</p>
                    </div>
                  </div>
                  <p className="text-white/70 leading-relaxed">{phase.desc}</p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-sans text-xs uppercase tracking-widest text-white/50 mb-4">Tactiques clés</h5>
                      <ul className="space-y-2">
                        {phase.tactics.map((tactic, i) => (
                          <li key={i} className="text-sm text-white/60 flex items-start gap-2">
                            <span className="text-blue-300 mt-1 flex-shrink-0">•</span>
                            <span>{tactic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="space-y-6">
                      <div className="bg-white/5 border border-white/10 p-4 rounded-lg">
                        <h5 className="font-sans text-xs uppercase tracking-widest text-white/50 mb-3">Budget Phase {phase.id}</h5>
                        <div className="text-3xl font-serif italic text-white">{phase.budget}</div>
                      </div>
                      
                      <div className="bg-white/5 border border-white/10 p-4 rounded-lg">
                        <h5 className="font-sans text-xs uppercase tracking-widest text-white/50 mb-3">Revenus estimés</h5>
                        <div className="text-3xl font-serif italic text-green-300">{phase.revenus}</div>
                      </div>
                      
                      <div>
                        <h5 className="font-sans text-xs uppercase tracking-widest text-white/50 mb-3">KPIs Phase {phase.id}</h5>
                        <ul className="space-y-1">
                          {phase.kpis.map((kpi, i) => (
                            <li key={i} className="text-xs text-white/50">{kpi}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Résumé global */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="font-sans text-xs uppercase tracking-widest text-white/50">Budget Total</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-5xl font-serif italic">28 000$</div>
              <p className="text-sm text-white/60 mt-2">Investissement marketing 2026</p>
            </CardContent>
          </Card>
          
          <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="font-sans text-xs uppercase tracking-widest text-white/50">Revenus Totaux</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-5xl font-serif italic text-green-300">24 750$</div>
              <p className="text-sm text-white/60 mt-2">Revenus billets estimés</p>
            </CardContent>
          </Card>
          
          <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="font-sans text-xs uppercase tracking-widest text-white/50">ROI Marketing</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-5xl font-serif italic">0,88:1</div>
              <p className="text-sm text-white/60 mt-2">Retour sur investissement direct</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
