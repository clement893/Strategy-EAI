import { motion } from "framer-motion";

export default function Timeline() {
  const steps = [
    {
      date: "16 Décembre",
      title: "Lancement Phase 1",
      desc: "Infolettre fidèles, annonce têtes d'affiche, optimisation site."
    },
    {
      date: "1 Janvier",
      title: "Début Phase 2",
      desc: "Activation campagnes payantes (LinkedIn, Meta, Google)."
    },
    {
      date: "12 Janvier",
      title: "Lancement La Presse",
      desc: "Publication article commandité et début de la visibilité média."
    },
    {
      date: "17 Janvier",
      title: "Fin Rabais -30%",
      desc: "Premier pic d'urgence tarifaire."
    },
    {
      date: "1 Février",
      title: "Début Phase 3",
      desc: "Intensification budgétaire et retargeting agressif."
    },
    {
      date: "17 Février",
      title: "Fin Campagne La Presse",
      desc: "Dernier push média avant l'événement."
    },
    {
      date: "28 Février",
      title: "Clôture des Ventes",
      desc: "Fin de la campagne marketing."
    }
  ];

  return (
    <section id="timeline" className="py-32 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-24">
          <h2 className="text-5xl font-sans font-bold mb-4">06</h2>
          <h3 className="text-4xl font-serif italic">Timeline de Déploiement</h3>
          <p className="text-white/60 mt-4 max-w-2xl mx-auto">
            Un calendrier d'exécution précis pour orchestrer la montée en puissance de la campagne.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-[1px] bg-white/10" />

          <div className="space-y-12">
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`flex items-center justify-between w-full ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}
              >
                <div className="w-5/12" />
                
                <div className="z-10 flex items-center justify-center w-8 h-8 rounded-full bg-background border border-white/30 shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                  <div className="w-2 h-2 bg-white rounded-full" />
                </div>
                
                <div className={`w-5/12 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                  <span className="text-xs font-sans uppercase tracking-widest text-white/50 block mb-1">{step.date}</span>
                  <h4 className="text-xl font-serif italic mb-2">{step.title}</h4>
                  <p className="text-sm text-white/60">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
