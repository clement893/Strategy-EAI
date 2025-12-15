import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Analysis() {
  return (
    <section id="analysis" className="py-32 relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-16 mb-24">
          <div className="md:w-1/3">
            <h2 className="text-5xl font-sans font-bold mb-4">01</h2>
            <h3 className="text-4xl font-serif italic mb-8">Analyse de la situation</h3>
            <p className="text-white/60 leading-relaxed">
              L'édition 2025 a été un succès financier mais a révélé une fragilité structurelle majeure : une dépendance critique aux ventes de dernière minute.
            </p>
          </div>
          
          <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors duration-500">
              <CardHeader>
                <CardTitle className="font-sans text-sm uppercase tracking-widest text-white/50">Performance 2025</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-5xl font-serif italic mb-2">987</div>
                <p className="text-sm text-white/70">Billets vendus</p>
                <div className="mt-6 text-5xl font-serif italic mb-2">35k$</div>
                <p className="text-sm text-white/70">Revenus générés</p>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors duration-500">
              <CardHeader>
                <CardTitle className="font-sans text-sm uppercase tracking-widest text-white/50">Le Problème</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-5xl font-serif italic mb-2 text-red-300">94%</div>
                <p className="text-sm text-white/70">Des ventes en Février</p>
                <div className="mt-6 text-5xl font-serif italic mb-2 text-red-300">80%</div>
                <p className="text-sm text-white/70">Durant la dernière semaine</p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="border-t border-white/10 pt-24">
          <h3 className="text-2xl font-sans font-bold mb-12 text-center">Opportunités Identifiées</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center font-serif italic text-xl mb-4">1</div>
              <h4 className="text-xl font-serif italic">Base de données active</h4>
              <p className="text-white/60 text-sm leading-relaxed">
                987 participants qualifiés prêts à être réactivés avec un taux de conversion estimé à 30-40%.
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center font-serif italic text-xl mb-4">2</div>
              <h4 className="text-xl font-serif italic">Google Ad Grants</h4>
              <p className="text-white/60 text-sm leading-relaxed">
                Accès à 10 000$ USD/mois de publicité gratuite grâce au statut OBNL, sous-utilisé en 2025.
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center font-serif italic text-xl mb-4">3</div>
              <h4 className="text-xl font-serif italic">Partenariats Média</h4>
              <p className="text-white/60 text-sm leading-relaxed">
                Collaboration stratégique avec La Presse pour toucher les décideurs corporatifs et crédibiliser l'événement.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
