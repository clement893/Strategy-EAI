import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Share2, Database, BarChart3, Mail, Users, MousePointer2 } from "lucide-react";

export default function DigitalStrategy() {
  return (
    <section id="digital-strategy" className="py-32 relative bg-white/5 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/vr-experience.jpg" 
          alt="Expérience Digitale" 
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-sans font-bold mb-4">04.5</h2>
          <h3 className="text-4xl font-serif italic">Stratégie Digitale Complète</h3>
          <p className="text-white/60 mt-4 max-w-2xl mx-auto">
            Un écosystème intégré combinant acquisition, engagement et conversion pour maximiser le ROI.
          </p>
        </div>

        <Tabs defaultValue="architecture" className="w-full">
          <TabsList className="grid w-full grid-cols-4 bg-white/10 p-1 rounded-xl mb-12">
            <TabsTrigger value="architecture" className="data-[state=active]:bg-slate-600 data-[state=active]:text-white font-sans">Architecture</TabsTrigger>
            <TabsTrigger value="funnel" className="data-[state=active]:bg-slate-600 data-[state=active]:text-white font-sans">Tunnel & Parcours</TabsTrigger>
            <TabsTrigger value="tech" className="data-[state=active]:bg-slate-600 data-[state=active]:text-white font-sans">Infrastructure</TabsTrigger>
            <TabsTrigger value="audiences" className="data-[state=active]:bg-slate-600 data-[state=active]:text-white font-sans">Audiences & Créatifs</TabsTrigger>
          </TabsList>

          <TabsContent value="architecture" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="bg-white/5 border-white/10">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-xl font-serif italic text-white">
                    <Share2 className="w-6 h-6 text-slate-400" />
                    Acquisition
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-white/70 space-y-2">
                  <p>• LinkedIn Ads (B2B précis)</p>
                  <p>• Meta Ads (Portée massive)</p>
                  <p>• Google Ads (Intention)</p>
                  <p className="text-emerald-400 font-bold">• Google Ad Grants (10k$/mois)</p>
                  <p>• La Presse (Crédibilité)</p>
                </CardContent>
              </Card>
              
              <Card className="bg-white/5 border-white/10">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-xl font-serif italic text-white">
                    <Target className="w-6 h-6 text-stone-400" />
                    Hub Central
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-white/70 space-y-2">
                  <p>• Site web Entertain-AI</p>
                  <p>• Billetterie Weezevent</p>
                  <p>• Landing Pages dédiées</p>
                </CardContent>
              </Card>

              <Card className="bg-white/5 border-white/10">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-xl font-serif italic text-white">
                    <Database className="w-6 h-6 text-emerald-400" />
                    Conversion
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-white/70 space-y-2">
                  <p>• Capture Emails</p>
                  <p>• Webinaire Gratuit</p>
                  <p>• Programme 1+1</p>
                  <p>• Offres Échelonnées</p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="funnel" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-white font-sans border-b border-white/20 pb-2">Parcours A : Fidèles</h4>
                <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                  <span className="text-xs uppercase text-slate-400 font-bold">Réactivation</span>
                  <p className="text-white/80 mt-1">Email personnalisé direct (-50%)</p>
                </div>
                <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                  <span className="text-xs uppercase text-slate-400 font-bold">Rappel</span>
                  <p className="text-white/80 mt-1">Retargeting Meta + Email urgence</p>
                </div>
                <div className="bg-emerald-500/10 p-4 rounded-lg border border-emerald-500/20">
                  <span className="text-xs uppercase text-emerald-400 font-bold">Objectif</span>
                  <p className="text-white font-bold mt-1">345 billets (35% conv.)</p>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-xl font-bold text-white font-sans border-b border-white/20 pb-2">Parcours B : Explorateurs</h4>
                <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                  <span className="text-xs uppercase text-stone-400 font-bold">Découverte</span>
                  <p className="text-white/80 mt-1">Ads LinkedIn/Meta/Google</p>
                </div>
                <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                  <span className="text-xs uppercase text-stone-400 font-bold">Éducation</span>
                  <p className="text-white/80 mt-1">Webinaire gratuit (Lead Magnet)</p>
                </div>
                <div className="bg-emerald-500/10 p-4 rounded-lg border border-emerald-500/20">
                  <span className="text-xs uppercase text-emerald-400 font-bold">Objectif</span>
                  <p className="text-white font-bold mt-1">739 billets</p>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-xl font-bold text-white font-sans border-b border-white/20 pb-2">Parcours C : Décideurs</h4>
                <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                  <span className="text-xs uppercase text-amber-400 font-bold">Crédibilisation</span>
                  <p className="text-white/80 mt-1">Article La Presse XTRA</p>
                </div>
                <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                  <span className="text-xs uppercase text-amber-400 font-bold">Démonstration</span>
                  <p className="text-white/80 mt-1">Page "Forfaits Corporatifs"</p>
                </div>
                <div className="bg-emerald-500/10 p-4 rounded-lg border border-emerald-500/20">
                  <span className="text-xs uppercase text-emerald-400 font-bold">Objectif</span>
                  <p className="text-white font-bold mt-1">150 billets</p>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="tech" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="bg-white/5 border-white/10">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-xl font-serif italic text-white">
                    <BarChart3 className="w-6 h-6 text-slate-400" />
                    Pixels & Tracking
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-white/70 space-y-4">
                  <div>
                    <h4 className="text-white font-bold mb-1">Meta Pixel</h4>
                    <p className="text-sm">PageView, ViewContent, InitiateCheckout, Purchase, Lead</p>
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">LinkedIn Insight Tag</h4>
                    <p className="text-sm">Visites billetterie, Achats, Inscriptions webinaire</p>
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">GA4 & Google Ads</h4>
                    <p className="text-sm">Événements personnalisés et suivi des conversions</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/5 border-white/10">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-xl font-serif italic text-white">
                    <MousePointer2 className="w-6 h-6 text-stone-400" />
                    Structure UTM
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-white/70 space-y-4">
                  <div className="bg-black/30 p-4 rounded font-mono text-xs text-slate-300 break-all">
                    ?utm_source=linkedin&utm_medium=cpc&utm_campaign=eai2026_phase2
                  </div>
                  <ul className="list-disc list-inside space-y-2 text-sm">
                    <li><span className="text-white">LinkedIn</span>: linkedin / cpc</li>
                    <li><span className="text-white">Meta</span>: facebook-instagram / cpc</li>
                    <li><span className="text-white">Email</span>: email / email</li>
                    <li><span className="text-white">La Presse</span>: lapresse / cpm</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="audiences" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="bg-white/5 border-white/10">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-xl font-serif italic text-white">
                    <Users className="w-6 h-6 text-slate-400" />
                    Audiences Cibles
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-white/70 space-y-4">
                  <div>
                    <h4 className="text-white font-bold mb-1">Lookalike (Sosies)</h4>
                    <p className="text-sm">Basé sur les 987 participants 2025 (1%)</p>
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">LinkedIn B2B</h4>
                    <p className="text-sm">VP Innovation, CTO, Data Scientists (Québec, 50+ employés)</p>
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">Retargeting</h4>
                    <p className="text-sm">Visiteurs site (J-30), Inscrits webinaire, Engagement social</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/5 border-white/10">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-xl font-serif italic text-white">
                    <Mail className="w-6 h-6 text-stone-400" />
                    Nurturing & Créatifs
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-white/70 space-y-4">
                  <div>
                    <h4 className="text-white font-bold mb-1">Séquence Email</h4>
                    <p className="text-sm">J+1 (Replay), J+7 (Preuve sociale), J+14 (Urgence)</p>
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">Formats Créatifs</h4>
                    <p className="text-sm">Image statique (Acquisition), Carrousel (Témoignages), Vidéo (Teaser)</p>
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">Rotation</h4>
                    <p className="text-sm">Changement aux 2 semaines pour éviter la fatigue publicitaire</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
