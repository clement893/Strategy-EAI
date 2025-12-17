import { motion } from "framer-motion";
import { CheckCircle2, Circle, ArrowLeft } from "lucide-react";
import { Link } from "wouter";

export default function Checklist() {
  const phases = [
    {
      title: "Phase 1 : Préparation & Configuration (Décembre)",
      tasks: [
        { id: 1, text: "Audit technique du site web (Vitesse, SEO, UX)", status: "done" },
        { id: 2, text: "Installation des pixels de suivi (Meta, LinkedIn, Google)", status: "pending" },
        { id: 3, text: "Configuration du compte Google Ad Grants via TechSoup", status: "pending" },
        { id: 4, text: "Création des audiences de retargeting", status: "pending" },
        { id: 5, text: "Validation de la charte graphique et des visuels clés", status: "pending" }
      ]
    },
    {
      title: "Phase 2 : Activation & Contenu (Début Janvier)",
      tasks: [
        { id: 6, text: "Lancement de la séquence infolettre 'Activation'", status: "pending" },
        { id: 7, text: "Mise en ligne de l'article commandité La Presse", status: "pending" },
        { id: 8, text: "Déploiement des campagnes Social Ads (Teasing)", status: "pending" },
        { id: 9, text: "Activation de l'offre 'Super Early Bird' (100 billets)", status: "pending" },
        { id: 10, text: "Brief des partenaires pour l'offre 2 pour 1", status: "pending" }
      ]
    },
    {
      title: "Phase 3 : Accélération & Conversion (Fin Janvier - Février)",
      tasks: [
        { id: 11, text: "Lancement des campagnes de retargeting agressif", status: "pending" },
        { id: 12, text: "Envoi de la séquence 'Urgence' (Fin Early Bird)", status: "pending" },
        { id: 13, text: "Optimisation quotidienne des enchères publicitaires", status: "pending" },
        { id: 14, text: "Activation de la séquence 'Hype' post-achat", status: "pending" },
        { id: 15, text: "Rapport hebdomadaire de performance et ajustements", status: "pending" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground p-8">
      <div className="max-w-4xl mx-auto">
        <Link href="/">
          <a className="inline-flex items-center gap-2 text-white/60 hover:text-white mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Retour à la stratégie
          </a>
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-serif italic text-white mb-4">
            Checklist de <span className="text-blue-400">Lancement</span>
          </h1>
          <p className="text-white/60 font-sans text-lg">
            Feuille de route opérationnelle pour un déploiement sans faille.
          </p>
        </motion.div>

        <div className="space-y-12">
          {phases.map((phase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-8"
            >
              <h2 className="text-2xl font-bold text-white mb-6">{phase.title}</h2>
              <div className="space-y-4">
                {phase.tasks.map((task) => (
                  <div key={task.id} className="flex items-start gap-4 group">
                    <div className={`mt-1 ${task.status === 'done' ? 'text-green-400' : 'text-white/20 group-hover:text-white/40 transition-colors'}`}>
                      {task.status === 'done' ? <CheckCircle2 className="w-5 h-5" /> : <Circle className="w-5 h-5" />}
                    </div>
                    <span className={`text-lg ${task.status === 'done' ? 'text-white/40 line-through' : 'text-white/80'}`}>
                      {task.text}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
