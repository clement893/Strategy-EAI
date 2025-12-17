import { motion } from "framer-motion";
import { Mail, Send, Clock, Users, Gift, Ticket, PartyPopper, ArrowRight } from "lucide-react";

export default function NewsletterSequence() {
  const steps = [
    {
      id: 1,
      icon: <Users className="w-6 h-6 text-slate-400" />,
      title: "L'Activation",
      date: "Immédiat",
      content: "Réveil de la base de données. On ne vend pas, on reconnecte. 'Vous nous avez manqué'.",
      color: "border-slate-500/50 bg-slate-500/10"
    },
    {
      id: 2,
      icon: <Gift className="w-6 h-6 text-stone-400" />,
      title: "Le Cadeau",
      date: "Semaine 1",
      content: "Offre exclusive 'Fidèles' : 2 pour 1 limité. Récompenser l'engagement passé.",
      color: "border-stone-500/50 bg-stone-500/10"
    },
    {
      id: 3,
      icon: <Ticket className="w-6 h-6 text-emerald-400" />,
      title: "L'Urgence",
      date: "Semaine 2",
      content: "Fin du tarif Early Bird. 'Dernière chance avant augmentation'. Créer la FOMO.",
      color: "border-emerald-500/50 bg-emerald-500/10"
    },
    {
      id: 4,
      icon: <Send className="w-6 h-6 text-amber-400" />,
      title: "La Relance",
      date: "Semaine 3+",
      content: "Séquence automatisée pour les paniers abandonnés et les cliqueurs non-acheteurs.",
      color: "border-amber-500/50 bg-amber-500/10"
    }
  ];

  return (
    <section id="newsletter" className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/5 mb-6"
          >
            <Mail className="w-8 h-8 text-white" />
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-serif italic text-white mb-4">
            Séquence <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-400 to-stone-400">Infolettre</span>
          </h2>
          <p className="text-white/60 font-sans max-w-2xl mx-auto mb-8">
            Une conversation continue pour transformer les abonnés en ambassadeurs.
          </p>
          
          <div className="flex justify-center gap-8 mb-12">
            <div className="bg-white/5 px-6 py-3 rounded-xl border border-white/10">
              <span className="block text-xs text-white/40 uppercase tracking-widest mb-1">Base de données</span>
              <span className="text-2xl font-bold text-white">3 000</span>
              <span className="text-xs text-white/40 ml-1">abonnés</span>
            </div>
            <div className="bg-white/5 px-6 py-3 rounded-xl border border-white/10">
              <span className="block text-xs text-white/40 uppercase tracking-widest mb-1">Objectif Conversion</span>
              <span className="text-2xl font-bold text-emerald-400">2.5%</span>
              <span className="text-xs text-white/40 ml-1">visé</span>
            </div>
          </div>
        </div>

        <div className="relative mb-24">
          {/* Connecting Line */}
          <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-slate-500/20 via-stone-500/20 to-amber-500/20 -translate-y-1/2 hidden md:block" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className={`relative p-6 rounded-2xl border ${step.color} backdrop-blur-sm hover:-translate-y-2 transition-transform duration-300`}
              >
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-background p-2 rounded-full border border-white/10">
                  {step.icon}
                </div>
                <div className="mt-6 text-center">
                  <span className="inline-block px-2 py-1 rounded text-xs font-mono bg-white/5 text-white/50 mb-2">
                    {step.date}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-sm text-white/70 leading-relaxed">
                    {step.content}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Post-Purchase Sequence */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-gradient-to-r from-rose-500/10 to-stone-500/10 border border-rose-500/20 rounded-2xl p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <PartyPopper className="w-32 h-32 text-rose-500" />
            </div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-rose-500 p-2 rounded-lg">
                  <PartyPopper className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-serif italic text-white">Séquence "Hype" Post-Achat</h3>
              </div>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-sm font-bold">1</div>
                  <div>
                    <h4 className="text-white font-bold mb-1">Confirmation Immédiate</h4>
                    <p className="text-white/60 text-sm">"Vous y êtes ! Voici votre billet + Guide de survie EAI 2026"</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-sm font-bold">2</div>
                  <div>
                    <h4 className="text-white font-bold mb-1">L'Effet Multiplicateur (J+1)</h4>
                    <p className="text-white/60 text-sm">
                      "Ne venez pas seul : Voici un code -50% pour inviter un collègue ou ami."
                      <span className="block text-rose-400 text-xs mt-1 font-bold uppercase tracking-wider">Objectif : Viralité organique</span>
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-sm font-bold">3</div>
                  <div>
                    <h4 className="text-white font-bold mb-1">Teasing Exclusif (J+7)</h4>
                    <p className="text-white/60 text-sm">"Dévoilement d'un speaker en avant-première pour les inscrits."</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-white/60">
            <Clock className="w-4 h-4" />
            <span>Automatisé via HubSpot & Mailchimp</span>
          </div>
        </div>
      </div>
    </section>
  );
}
