import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Image, Video, Layers } from "lucide-react";

export default function Creatives() {
  return (
    <section id="creatives" className="py-24 bg-white/5 relative border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif italic text-white mb-4">
            Direction <span className="text-slate-400">Artistique</span> <span className="text-sm align-top bg-white/10 px-2 py-1 rounded-full text-white/50 not-italic font-sans ml-2">À VENIR</span>
          </h2>
          <p className="text-white/60 font-sans max-w-2xl mx-auto">
            Une identité visuelle forte et cohérente déclinée sur tous les points de contact.
          </p>
        </div>

        <Tabs defaultValue="social" className="w-full max-w-5xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 bg-white/10 p-1 rounded-xl mb-12">
            <TabsTrigger value="social" className="data-[state=active]:bg-slate-600 data-[state=active]:text-white font-sans flex items-center gap-2">
              <Image className="w-4 h-4" /> Social Ads
            </TabsTrigger>
            <TabsTrigger value="video" className="data-[state=active]:bg-slate-600 data-[state=active]:text-white font-sans flex items-center gap-2">
              <Video className="w-4 h-4" /> Vidéo & Motion
            </TabsTrigger>
            <TabsTrigger value="display" className="data-[state=active]:bg-slate-600 data-[state=active]:text-white font-sans flex items-center gap-2">
              <Layers className="w-4 h-4" /> Display & Bannières
            </TabsTrigger>
          </TabsList>

          <TabsContent value="social" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="group relative aspect-square bg-black/40 rounded-lg overflow-hidden border border-white/10">
                <img src="/images/vr-experience.jpg" alt="Visuel Immersion" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 to-transparent">
                  <span className="text-xs font-sans uppercase text-slate-400 font-bold">Format Carré</span>
                  <p className="text-white text-sm mt-1">Focus Expérience</p>
                </div>
              </div>
              <div className="group relative aspect-[4/5] bg-black/40 rounded-lg overflow-hidden border border-white/10 md:col-span-2">
                <img src="/images/speaker-woman.jpg" alt="Visuel Speaker" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 to-transparent">
                  <span className="text-xs font-sans uppercase text-stone-400 font-bold">Format Story</span>
                  <p className="text-white text-sm mt-1">Focus Speaker & Citation</p>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="video" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/5 p-8 rounded-lg border border-white/10 flex flex-col items-center justify-center text-center h-64">
                <Video className="w-12 h-12 text-white/20 mb-4" />
                <h4 className="text-xl font-serif text-white mb-2">Teaser 15s</h4>
                <p className="text-white/50 text-sm">Format rapide pour Stories et Reels. <br/>Accroche visuelle forte.</p>
              </div>
              <div className="bg-white/5 p-8 rounded-lg border border-white/10 flex flex-col items-center justify-center text-center h-64">
                <Video className="w-12 h-12 text-white/20 mb-4" />
                <h4 className="text-xl font-serif text-white mb-2">Manifesto 60s</h4>
                <p className="text-white/50 text-sm">Vidéo de marque pour YouTube et LinkedIn. <br/>Storytelling émotionnel.</p>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="display" className="space-y-8">
            <div className="space-y-6">
              <div className="w-full h-32 bg-black/40 rounded-lg border border-white/10 relative overflow-hidden group">
                <img src="/images/audience-moment.jpg" alt="Bannière Large" className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white font-serif italic text-2xl">Leaderboard 728x90</span>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="w-full h-64 bg-black/40 rounded-lg border border-white/10 relative overflow-hidden group">
                  <img src="/images/discussion-space.jpg" alt="Pavé" className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white font-serif italic text-xl">Pavé 300x250</span>
                  </div>
                </div>
                <div className="w-full h-64 bg-black/40 rounded-lg border border-white/10 relative overflow-hidden group">
                  <img src="/images/panel-discussion.jpg" alt="Grand Angle" className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white font-serif italic text-xl">Grand Angle 300x600</span>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
