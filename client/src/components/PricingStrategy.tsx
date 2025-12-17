import { motion } from "framer-motion";
import { Tag, Users, AlertCircle, Calendar, Ticket } from "lucide-react";

export default function PricingStrategy() {
  const offers = [
    {
      discount: "-50%",
      title: "Lancement",
      deadline: "31 Décembre",
      desc: "Offre de lancement agressive pour sécuriser le noyau dur.",
      limit: "Illimité",
      color: "text-emerald-400",
      bg: "bg-emerald-500/20",
      border: "border-emerald-500/50"
    },
    {
      discount: "-30%",
      title: "Early Bird",
      deadline: "17 Janvier",
      desc: "Tarif préférentiel pour maintenir la dynamique post-fêtes.",
      limit: "Illimité",
      color: "text-slate-400",
      bg: "bg-slate-500/20",
      border: "border-slate-500/50"
    },
    {
      discount: "-20%",
      title: "Last Call",
      deadline: "31 Janvier",
      desc: "Dernière opportunité avant le tarif régulier.",
      limit: "Illimité",
      color: "text-amber-400",
      bg: "bg-amber-500/20",
      border: "border-amber-500/50"
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-background relative overflow-hidden border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif italic text-white mb-4">
            Stratégie <span className="text-emerald-400">Billetterie</span>
          </h2>
          <p className="text-white/60 font-sans max-w-2xl mx-auto">
            Un calendrier promotionnel dégressif pour récompenser l'engagement rapide.
          </p>
        </div>

        {/* Chronologie des offres */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
          {offers.map((offer, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`bg-white/5 border ${offer.border} rounded-2xl p-6 relative overflow-hidden group hover:bg-white/10 transition-colors`}
            >
              <div className="flex justify-between items-start mb-4">
                <div className={`p-2 rounded-lg ${offer.bg}`}>
                  <Tag className={`w-5 h-5 ${offer.color}`} />
                </div>
                <div className="flex items-center gap-1 text-white/60 text-xs font-sans uppercase tracking-wider bg-black/30 px-2 py-1 rounded">
                  <Calendar className="w-3 h-3" />
                  Jusqu'au {offer.deadline}
                </div>
              </div>
              
              <div className={`text-4xl font-bold ${offer.color} mb-2`}>{offer.discount}</div>
              <h3 className="text-xl font-serif text-white mb-2">{offer.title}</h3>
              <p className="text-white/60 text-sm mb-4">{offer.desc}</p>
              
              <div className="pt-4 border-t border-white/10 flex items-center gap-2 text-xs text-white/40">
                <Ticket className="w-3 h-3" />
                <span>Quantité : {offer.limit}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stratégies Complémentaires */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-white/5 border border-white/10 rounded-2xl p-8"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-stone-500/20 rounded-lg">
                <Users className="w-5 h-5 text-stone-400" />
              </div>
              <h3 className="text-xl font-bold text-white">Offre Fidélité (1+1)</h3>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              Offre exclusive pour les anciens participants : pour chaque billet acheté, un billet offert pour inviter un collègue.
              <span className="block mt-2 text-stone-400 font-bold text-xs uppercase">Objectif : Viralité & Nouveaux Publics</span>
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-white/5 border border-white/10 rounded-2xl p-8"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-slate-500/20 rounded-lg">
                <AlertCircle className="w-5 h-5 text-slate-400" />
              </div>
              <h3 className="text-xl font-bold text-white">Codes Partenaires</h3>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              Distribution de codes promos exclusifs aux partenaires réseaux pour activer leurs communautés respectives.
              <span className="block mt-2 text-slate-400 font-bold text-xs uppercase">Objectif : Acquisition Indirecte</span>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
