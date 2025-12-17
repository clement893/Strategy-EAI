import { motion } from "framer-motion";

export default function Strategy() {
  const phases = [
    {
      id: "01",
      title: "Fondation",
      period: "16 - 31 Décembre",
      goal: "150 billets",
      desc: "Créer la notoriété et activer les fidèles.",
      actions: ["Infolettre Fidèles", "Annonce Têtes d'affiche", "Optimisation Site"]
    },
    {
      id: "02",
      title: "Amplification",
      period: "1 - 31 Janvier",
      goal: "500 billets",
      desc: "Acquisition massive et conversion des indécis.",
      actions: ["Campagnes Ads (LinkedIn/Meta)", "Partenariat La Presse", "Webinaire Gratuit"]
    },
    {
      id: "03",
      title: "Intensification",
      period: "1 - 28 Février",
      goal: "584 billets",
      desc: "Maximiser les ventes de dernière minute.",
      actions: ["Retargeting Agressif", "Offres Flash", "Urgence Finale"]
    }
  ];

  return (
    <section id="strategy" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="mb-24 md:w-1/2">
          <h2 className="text-5xl font-sans font-bold mb-4">03</h2>
          <h3 className="text-4xl font-serif italic mb-8">Stratégie en 3 Phases</h3>
          <p className="text-white/60 leading-relaxed">
            Une approche séquentielle conçue pour redistribuer les ventes sur trois mois et éviter le goulot d'étranglement de février.
          </p>
        </div>

        <div className="space-y-0">
          {phases.map((phase, index) => (
            <motion.div 
              key={phase.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group relative border-t border-white/10 py-16 hover:bg-white/5 transition-colors duration-500"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                <div className="md:col-span-2">
                  <span className="text-xs font-sans uppercase tracking-widest text-white/40">Phase {phase.id}</span>
                </div>
                
                <div className="md:col-span-4">
                  <h4 className="text-3xl font-serif italic mb-2">{phase.title}</h4>
                  <p className="text-sm font-sans text-white/50 uppercase tracking-wider">{phase.period}</p>
                </div>

                <div className="md:col-span-3">
                  <p className="text-white/70 mb-6">{phase.desc}</p>
                  <ul className="space-y-2">
                    {phase.actions.map((action, i) => (
                      <li key={i} className="text-sm text-white/50 flex items-center gap-2">
                        <span className="w-1 h-1 bg-white/30 rounded-full" />
                        {action}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="md:col-span-3 text-right md:text-right flex flex-col items-start md:items-end justify-between h-full">
                  <span className="text-xs font-sans uppercase tracking-widest text-white/40 mb-4">Objectif</span>
                  <span className="text-4xl font-serif italic group-hover:text-white transition-colors text-white/80">{phase.goal}</span>
                </div>
              </div>
            </motion.div>
          ))}
          <div className="border-t border-white/10" />
        </div>
      </div>
    </section>
  );
}
