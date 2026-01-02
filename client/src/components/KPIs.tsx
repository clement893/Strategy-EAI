import { Card, CardContent } from "@/components/ui/card";

export default function KPIs() {
  const kpis = [
    {
      category: "Ventes",
      metrics: [
        { label: "Billets vendus", value: "500", unit: "", desc: "+122 % vs 2025" },
        { label: "Prix moyen", value: "250", unit: "$", desc: "par billet" },
        { label: "Revenus totaux", value: "125 000", unit: "$", desc: "revenus billets" }
      ]
    },
    {
      category: "Acquisition",
      metrics: [
        { label: "CPA moyen", value: "26", unit: "$", desc: "coût par acquisition" },
        { label: "Trafic site", value: "40 000", unit: "+", desc: "visiteurs uniques" },
        { label: "Taux de conversion", value: "1,9", unit: "%", desc: "conversion moyenne" }
      ]
    },
    {
      category: "Notoriété",
      metrics: [
        { label: "Impressions", value: "1M", unit: "+", desc: "impressions publicitaires" },
        { label: "Portée La Presse", value: "3,9M", unit: "", desc: "visiteurs uniques/mois" },
        { label: "CTR moyen", value: "2,5", unit: "%", desc: "taux de clic" }
      ]
    }
  ];

  return (
    <section id="kpis" className="py-32">
      <div className="container mx-auto px-4">
        <div className="mb-16">
          <h2 className="text-5xl font-sans font-bold mb-4">06</h2>
          <h3 className="text-4xl font-serif italic mb-6">Indicateurs clés de performance</h3>
          <p className="text-white/60 leading-relaxed max-w-3xl">
            Les KPIs stratégiques qui guideront l'exécution et permettront d'évaluer le succès de la stratégie marketing 2026. Ces indicateurs sont mesurables, actionnables et alignés sur les objectifs commerciaux.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {kpis.map((category, index) => (
            <div key={index} className="space-y-6">
              <h4 className="font-sans text-xs uppercase tracking-widest text-white/50 mb-6">{category.category}</h4>
              {category.metrics.map((metric, i) => (
                <Card key={i} className="bg-white/5 border-white/10 hover:border-white/30 transition-all duration-500 group">
                  <CardContent className="p-8">
                    <span className="block text-xs font-sans uppercase tracking-widest text-white/40 mb-3 group-hover:text-white/60 transition-colors">
                      {metric.label}
                    </span>
                    <div className="text-5xl font-serif italic mb-2 group-hover:text-white transition-colors">
                      {metric.value}
                      <span className="text-2xl text-white/60">{metric.unit}</span>
                    </div>
                    <p className="text-white/50 text-sm">{metric.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
            <CardContent className="p-8">
              <h5 className="font-sans text-xs uppercase tracking-widest text-white/50 mb-4">Objectif étiré</h5>
              <div className="text-5xl font-serif italic mb-2 text-blue-300">600</div>
              <p className="text-white/60 text-sm mb-4">billets vendus (+167 % vs 2025)</p>
              <p className="text-xs text-white/50">
                Scénario exceptionnel en cas de surperformance des campagnes et d'un effet viral organique majeur.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
            <CardContent className="p-8">
              <h5 className="font-sans text-xs uppercase tracking-widest text-white/50 mb-4">Seuil de succès minimal</h5>
              <div className="text-5xl font-serif italic mb-2 text-yellow-300">400</div>
              <p className="text-white/60 text-sm mb-4">billets vendus (+78 % vs 2025)</p>
              <p className="text-xs text-white/50">
                Seuil minimum pour considérer la stratégie comme un succès et justifier l'investissement marketing.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-white/5 border border-white/10 p-8 rounded-lg">
          <h4 className="font-serif italic text-2xl mb-4 text-white">Suivi et ajustements</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h5 className="font-sans text-xs uppercase tracking-widest text-white/50 mb-3">Hebdomadaire</h5>
              <ul className="space-y-2 text-sm text-white/60">
                <li>• Ventes de billets par source</li>
                <li>• Trafic site et taux de conversion</li>
                <li>• Performance campagnes publicitaires</li>
              </ul>
            </div>
            <div>
              <h5 className="font-sans text-xs uppercase tracking-widest text-white/50 mb-3">Mensuel</h5>
              <ul className="space-y-2 text-sm text-white/60">
                <li>• Analyse comparative vs objectifs</li>
                <li>• ROI par canal marketing</li>
                <li>• Ajustements budgétaires</li>
              </ul>
            </div>
            <div>
              <h5 className="font-sans text-xs uppercase tracking-widest text-white/50 mb-3">Par phase</h5>
              <ul className="space-y-2 text-sm text-white/60">
                <li>• Bilan complet de la phase</li>
                <li>• Recommandations pour la phase suivante</li>
                <li>• Révision de la stratégie si nécessaire</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-24 text-center">
          <p className="text-white/40 font-serif italic text-xl mb-4">
            "Une stratégie ambitieuse mais réaliste pour transformer Entertain-AI en leader incontesté de l'IA appliquée aux ICC au Québec."
          </p>
          <div className="mt-8">
            <span className="block text-xs font-sans uppercase tracking-widest text-white/30">Préparé par</span>
            <span className="block text-lg font-sans font-bold mt-2">Nukleo</span>
            <span className="block text-xs font-sans text-white/30 mt-1">Décembre 2025</span>
          </div>
        </div>
      </div>
    </section>
  );
}
