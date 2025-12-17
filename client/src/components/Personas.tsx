import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Personas() {
  return (
    <section id="personas" className="py-32 bg-white/5">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="text-5xl font-sans font-bold mb-4">02</h2>
          <h3 className="text-4xl font-serif italic">Cibles & Personas</h3>
        </div>

        <Tabs defaultValue="fideles" className="w-full max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 bg-transparent border-b border-white/10 rounded-none p-0 h-auto">
            <TabsTrigger 
              value="fideles" 
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-white data-[state=active]:bg-transparent py-6 font-sans uppercase tracking-widest text-xs"
            >
              Les Fidèles
            </TabsTrigger>
            <TabsTrigger 
              value="explorateurs" 
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-white data-[state=active]:bg-transparent py-6 font-sans uppercase tracking-widest text-xs"
            >
              Les Explorateurs
            </TabsTrigger>
            <TabsTrigger 
              value="decideurs" 
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-white data-[state=active]:bg-transparent py-6 font-sans uppercase tracking-widest text-xs"
            >
              Les Décideurs
            </TabsTrigger>
          </TabsList>
          
          <div className="mt-12 min-h-[400px]">
            <TabsContent value="fideles" className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <h4 className="text-3xl font-serif italic mb-6">L'Ambassadeur</h4>
                  <p className="text-white/70 mb-6 leading-relaxed">
                    Participants des éditions précédentes (28-45 ans). Ils cherchent à maintenir leur avance compétitive et retrouver leur communauté.
                  </p>
                  <ul className="space-y-3 text-sm font-sans text-white/50">
                    <li className="flex items-center gap-3">
                      <span className="w-1 h-1 bg-white rounded-full"/> Motivation: Continuité d'apprentissage
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-1 h-1 bg-white rounded-full"/> Motivation: Réseautage qualifié
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-1 h-1 bg-white rounded-full"/> Frein: Concurrence calendaire
                    </li>
                  </ul>
                </div>
                <div className="bg-white/5 p-8 border border-white/10">
                  <h5 className="font-sans text-xs uppercase tracking-widest mb-6 text-white/50">Stratégie d'activation</h5>
                  <div className="space-y-6">
                    <div>
                      <span className="block text-xl font-serif italic mb-1">Infolettres Personnalisées</span>
                      <p className="text-sm text-white/60">Ton de reconnaissance, offres exclusives.</p>
                    </div>
                    <div>
                      <span className="block text-xl font-serif italic mb-1">Offre 1+1</span>
                      <p className="text-sm text-white/60">Transformer les fidèles en force de vente organique.</p>
                    </div>
                    <div className="pt-4 border-t border-white/10 flex justify-between items-end">
                      <span className="text-xs uppercase tracking-widest text-white/50">Objectif</span>
                      <span className="text-3xl font-serif italic">345 billets</span>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="explorateurs" className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <h4 className="text-3xl font-serif italic mb-6">Le Curieux Tech</h4>
                  <p className="text-white/70 mb-6 leading-relaxed">
                    Professionnels créatifs et tech (25-40 ans) n'ayant jamais participé. Ils veulent élargir leurs compétences et découvrir de nouveaux outils.
                  </p>
                  <ul className="space-y-3 text-sm font-sans text-white/50">
                    <li className="flex items-center gap-3">
                      <span className="w-1 h-1 bg-white rounded-full"/> Motivation: Curiosité professionnelle
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-1 h-1 bg-white rounded-full"/> Motivation: Validation sociale
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-1 h-1 bg-white rounded-full"/> Frein: Risque perçu (jamais venu)
                    </li>
                  </ul>
                </div>
                <div className="bg-white/5 p-8 border border-white/10">
                  <h5 className="font-sans text-xs uppercase tracking-widest mb-6 text-white/50">Stratégie d'activation</h5>
                  <div className="space-y-6">
                    <div>
                      <span className="block text-xl font-serif italic mb-1">Campagnes Social Ads</span>
                      <p className="text-sm text-white/60">LinkedIn & Meta avec contenu vidéo dynamique.</p>
                    </div>
                    <div>
                      <span className="block text-xl font-serif italic mb-1">Google Ad Grants</span>
                      <p className="text-sm text-white/60">Capter l'intention de recherche active.</p>
                    </div>
                    <div className="pt-4 border-t border-white/10 flex justify-between items-end">
                      <span className="text-xs uppercase tracking-widest text-white/50">Objectif</span>
                      <span className="text-3xl font-serif italic">739 billets</span>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="decideurs" className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <h4 className="text-3xl font-serif italic mb-6">Le Visionnaire</h4>
                  <p className="text-white/70 mb-6 leading-relaxed">
                    Cadres supérieurs et VP (35-55 ans). Ils cherchent à comprendre les implications stratégiques de l'IA pour leur organisation.
                  </p>
                  <ul className="space-y-3 text-sm font-sans text-white/50">
                    <li className="flex items-center gap-3">
                      <span className="w-1 h-1 bg-white rounded-full"/> Motivation: Veille stratégique
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-1 h-1 bg-white rounded-full"/> Motivation: Réseautage haut niveau
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-1 h-1 bg-white rounded-full"/> Frein: Processus d'approbation
                    </li>
                  </ul>
                </div>
                <div className="bg-white/5 p-8 border border-white/10">
                  <h5 className="font-sans text-xs uppercase tracking-widest mb-6 text-white/50">Stratégie d'activation</h5>
                  <div className="space-y-6">
                    <div>
                      <span className="block text-xl font-serif italic mb-1">Partenariat La Presse</span>
                      <p className="text-sm text-white/60">Article commandité et visibilité premium.</p>
                    </div>
                    <div>
                      <span className="block text-xl font-serif italic mb-1">Outreach B2B</span>
                      <p className="text-sm text-white/60">Approche directe et offres de groupe.</p>
                    </div>
                    <div className="pt-4 border-t border-white/10 flex justify-between items-end">
                      <span className="text-xs uppercase tracking-widest text-white/50">Objectif</span>
                      <span className="text-3xl font-serif italic">150 billets</span>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </section>
  );
}
