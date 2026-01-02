import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ExecutiveSummary() {
  return (
    <section id="executive-summary" className="py-32 relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-16 mb-24">
          <div className="md:w-1/3">
            <h2 className="text-5xl font-sans font-bold mb-4">01</h2>
            <h3 className="text-4xl font-serif italic mb-8">Sommaire exécutif</h3>
            <p className="text-white/60 leading-relaxed mb-6">
              Entertain-AI s'est imposé comme l'événement de référence en intelligence artificielle appliquée aux <strong className="text-white/80">Industries Culturelles et Créatives (ICC)</strong> au Québec.
            </p>
            <p className="text-white/60 leading-relaxed mb-6">
              L'édition 2025 a généré <strong className="text-white/80">225 billets vendus</strong> et <strong className="text-white/80">762 billets donnés</strong> (partenaires, médias, conférenciers), pour un total de <strong className="text-white/80">987 inscriptions</strong> et des revenus de <strong className="text-white/80">7 875 $</strong>.
            </p>
            <p className="text-white/60 leading-relaxed mb-8">
              L'analyse révèle une concentration critique des inscriptions : <strong className="text-red-300">94,2 % ont été prises en février</strong>, dont <strong className="text-red-300">80,6 % durant la dernière semaine</strong> avant l'événement. Cette dynamique présente un risque majeur pour 2026.
            </p>
            
            <div className="bg-white/5 border border-white/10 p-6 rounded-lg">
              <h4 className="font-sans text-xs uppercase tracking-widest text-white/50 mb-4">Dates clés</h4>
              <div className="space-y-3">
                <div>
                  <p className="text-xs text-white/50 font-sans uppercase tracking-wider mb-1">Événement</p>
                  <p className="text-lg font-serif italic">18-19 février 2026</p>
                </div>
                <div>
                  <p className="text-xs text-white/50 font-sans uppercase tracking-wider mb-1">Lieu</p>
                  <p className="text-lg font-serif italic">Palais des congrès de Montréal</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors duration-500">
              <CardHeader>
                <CardTitle className="font-sans text-sm uppercase tracking-widest text-white/50">Objectif Principal 2026</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-6xl font-serif italic mb-2 text-green-300">750</div>
                <p className="text-sm text-white/70 mb-6">Billets vendus</p>
                <div className="text-3xl font-serif italic mb-2 text-green-300">+233%</div>
                <p className="text-sm text-white/70">vs 2025</p>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors duration-500">
              <CardHeader>
                <CardTitle className="font-sans text-sm uppercase tracking-widest text-white/50">Revenus Estimés</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-6xl font-serif italic mb-2">24 750$</div>
                <p className="text-sm text-white/70 mb-6">Revenus billets</p>
                <div className="text-3xl font-serif italic mb-2">0,88:1</div>
                <p className="text-sm text-white/70">ROI marketing direct</p>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors duration-500">
              <CardHeader>
                <CardTitle className="font-sans text-sm uppercase tracking-widest text-white/50">Budget Marketing</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-6xl font-serif italic mb-2">28 000$</div>
                <p className="text-sm text-white/70 mb-6">Budget total</p>
                <div className="text-3xl font-serif italic mb-2">37,33$</div>
                <p className="text-sm text-white/70">CPA moyen</p>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors duration-500">
              <CardHeader>
                <CardTitle className="font-sans text-sm uppercase tracking-widest text-white/50">Scénarios</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <div className="text-2xl font-serif italic mb-1 text-blue-300">850</div>
                  <p className="text-xs text-white/50">Objectif étiré</p>
                </div>
                <div>
                  <div className="text-2xl font-serif italic mb-1 text-yellow-300">500</div>
                  <p className="text-xs text-white/50">Seuil de succès minimal</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Distribution temporelle */}
        <div className="bg-white/5 border border-white/10 p-8 rounded-lg">
          <h4 className="font-sans text-sm uppercase tracking-widest text-white/50 mb-6">Distribution temporelle des ventes 2026</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-white/5 rounded-lg border border-white/10">
              <div className="text-5xl font-serif italic mb-2">90</div>
              <p className="text-sm text-white/70 mb-2">billets vendus</p>
              <p className="text-xs text-white/50 font-sans uppercase tracking-wider">Décembre 2025</p>
              <p className="text-xs text-white/40 mt-2">12 % des ventes</p>
            </div>
            <div className="text-center p-6 bg-white/5 rounded-lg border border-white/10">
              <div className="text-5xl font-serif italic mb-2">300</div>
              <p className="text-sm text-white/70 mb-2">billets vendus</p>
              <p className="text-xs text-white/50 font-sans uppercase tracking-wider">Janvier 2026</p>
              <p className="text-xs text-white/40 mt-2">40 % des ventes</p>
            </div>
            <div className="text-center p-6 bg-white/5 rounded-lg border border-white/10">
              <div className="text-5xl font-serif italic mb-2">360</div>
              <p className="text-sm text-white/70 mb-2">billets vendus</p>
              <p className="text-xs text-white/50 font-sans uppercase tracking-wider">Février 2026 (1-18)</p>
              <p className="text-xs text-white/40 mt-2">48 % des ventes</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
