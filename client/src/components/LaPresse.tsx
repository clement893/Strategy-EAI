import { motion } from "framer-motion";
import { Newspaper, Smartphone, MousePointer, Eye } from "lucide-react";

export default function LaPresse() {
  return (
    <section id="lapresse" className="py-24 bg-[#1a1a1a] relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-8">
          <div className="md:w-1/2">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-rose-600 p-3 rounded-lg">
                <Newspaper className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-4xl font-serif italic text-white">
                Partenariat <span className="text-rose-500">La Presse</span>
              </h2>
            </div>
            <p className="text-white/60 font-sans text-lg">
              Une visibilité premium auprès de 3.9M de visiteurs uniques mensuels, ciblant spécifiquement les professionnels et décideurs (MOPEs).
            </p>
          </div>
          
          <div className="md:w-1/2 flex justify-end">
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-right">
              <span className="block text-sm text-white/40 uppercase tracking-widest mb-1">Valeur Média</span>
              <span className="text-4xl font-bold text-white">15 000 $</span>
              <span className="block text-xs text-rose-400 mt-2">*Crédit Display Uniquement</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-white/5 p-6 rounded-xl border-l-4 border-rose-500"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-white">La Presse+</h3>
              <Eye className="w-5 h-5 text-white/40" />
            </div>
            <p className="text-white/70 text-sm mb-4">Format Plein Écran immersif.</p>
            <div className="flex justify-between items-end">
              <span className="text-xs text-white/40">Impressions</span>
              <span className="text-xl font-mono text-white">50 000</span>
            </div>
          </motion.div>

          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-white/5 p-6 rounded-xl border-l-4 border-rose-500"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-white">Écosystème</h3>
              <Smartphone className="w-5 h-5 text-white/40" />
            </div>
            <p className="text-white/70 text-sm mb-4">Double Îlot (Web & Mobile).</p>
            <div className="flex justify-between items-end">
              <span className="text-xs text-white/40">Impressions</span>
              <span className="text-xl font-mono text-white">200 172</span>
            </div>
          </motion.div>

          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-white/5 p-6 rounded-xl border-l-4 border-rose-500"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-white">Ciblage</h3>
              <MousePointer className="w-5 h-5 text-white/40" />
            </div>
            <p className="text-white/70 text-sm mb-4">Segments Affaires + IA.</p>
            <div className="flex justify-between items-end">
              <span className="text-xs text-white/40">Période</span>
              <span className="text-sm font-mono text-white">12 Jan - 17 Fév</span>
            </div>
          </motion.div>
        </div>

        <div className="bg-rose-900/20 border border-rose-500/30 rounded-xl p-6 flex items-start gap-4">
          <div className="min-w-[24px]">
            <div className="w-6 h-6 rounded-full bg-rose-500 flex items-center justify-center text-white font-bold text-xs">!</div>
          </div>
          <div>
            <h4 className="text-white font-bold mb-1">Note Importante</h4>
            <p className="text-white/70 text-sm">
              Le crédit de 15 000$ est applicable <strong>uniquement sur l'inventaire publicitaire display</strong> (bannières). 
              Les articles commandités ou contenus natifs ne sont pas inclus dans cette enveloppe et nécessiteraient un budget additionnel.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
