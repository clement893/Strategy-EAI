import { Slide } from "@/components/Slide";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useEffect, useState } from "react";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 7;

  const nextSlide = () => {
    if (currentSlide < totalSlides - 1) setCurrentSlide(curr => curr + 1);
  };

  const prevSlide = () => {
    if (currentSlide > 0) setCurrentSlide(curr => curr - 1);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown" || e.key === "ArrowRight") nextSlide();
      if (e.key === "ArrowUp" || e.key === "ArrowLeft") prevSlide();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentSlide]);

  return (
    <div className="slide-container bg-background text-foreground">
      {/* Navigation Controls */}
      <div className="fixed right-8 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-4">
        <div className="flex flex-col gap-2 items-center">
          {Array.from({ length: totalSlides }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentSlide === idx ? "bg-accent-purple scale-125" : "bg-white/20 hover:bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>

      <div className="fixed bottom-8 right-8 z-50 flex gap-2">
        <Button 
          variant="outline" 
          size="icon" 
          onClick={prevSlide} 
          disabled={currentSlide === 0}
          className="rounded-full border-white/10 hover:bg-white/10"
        >
          <ChevronUp className="h-4 w-4" />
        </Button>
        <Button 
          variant="outline" 
          size="icon" 
          onClick={nextSlide} 
          disabled={currentSlide === totalSlides - 1}
          className="rounded-full border-white/10 hover:bg-white/10"
        >
          <ChevronDown className="h-4 w-4" />
        </Button>
      </div>

      <div className="fixed top-8 right-8 z-50 font-display text-sm tracking-widest opacity-50">
        {currentSlide + 1} / {totalSlides}
      </div>

      <div className="fixed bottom-8 left-8 z-50">
        <img src="/Nukleo_blanc_RVB.png" alt="Nukleo" className="h-6 opacity-80" />
      </div>

      {/* SLIDE 1: COVER */}
      <Slide isActive={currentSlide === 0} isPrev={currentSlide > 0} backgroundImage="/audience-moment.jpg">
        <div className="max-w-4xl">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
            <span className="text-gradient">Entertain-AI</span> <span className="text-accent-purple">2026</span>
          </h1>
          <div className="h-1 w-32 bg-gradient-to-r from-accent-purple to-accent-green mb-8"></div>
          <p className="text-2xl md:text-3xl font-light italic text-gray-300 mb-12">
            "On se retrousse les manches !"
          </p>
          <div className="glass-panel p-8 inline-block">
            <h2 className="text-xl font-display tracking-widest text-accent-green mb-2">STRATÉGIE MARKETING</h2>
            <p className="text-gray-400">De la communauté à l'événement</p>
          </div>
        </div>
      </Slide>

      {/* SLIDE 2: VISION */}
      <Slide isActive={currentSlide === 1} isPrev={currentSlide > 1}>
        <div className="grid md:grid-cols-2 gap-12 items-center h-full">
          <div>
            <h2 className="text-4xl md:text-5xl mb-8">Notre Vision : <br/><span className="text-accent-green">De l'Événement à la Communauté</span></h2>
            <div className="glass-panel p-8 mb-8 border-l-4 border-l-accent-purple">
              <p className="text-lg leading-relaxed text-gray-300">
                Entertain-AI 2026 n'est pas juste une conférence de deux jours ; c'est le point de ralliement de l'écosystème de l'IA créative au Québec.
              </p>
            </div>
            <p className="text-xl text-gray-400 mb-8">
              Un lieu pour <span className="text-white font-bold">apprendre</span>, <span className="text-white font-bold">partager</span> et <span className="text-white font-bold">jouer</span>.
            </p>
          </div>
          <div className="space-y-6">
            <div className="glass-panel p-6">
              <h3 className="text-accent-gold text-sm font-display mb-2">RÉTROSPECTIVE 2025</h3>
              <div className="flex justify-between items-end mb-2">
                <span className="text-3xl font-bold">1 974</span>
                <span className="text-sm text-gray-400">Billets vendus</span>
              </div>
              <div className="w-full bg-white/10 h-1 rounded-full overflow-hidden">
                <div className="bg-accent-gold h-full w-[98%]"></div>
              </div>
              <p className="text-sm text-gray-400 mt-4">
                ⚠️ Pic de 987 ventes en 24h. Une urgence efficace mais risquée pour la trésorerie.
              </p>
            </div>

            <div className="glass-panel p-6">
              <h3 className="text-accent-purple text-sm font-display mb-4">OBJECTIFS 2026</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent-purple rounded-full"></div>
                  <span><strong>1 000 billets</strong> avec répartition lissée</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent-green rounded-full"></div>
                  <span><strong>Trésorerie saine</strong> (50% ventes en déc.)</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent-gold rounded-full"></div>
                  <span><strong>Communauté engagée</strong> toute l'année</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Slide>

      {/* SLIDE 3: ANALYSE VENTES */}
      <Slide isActive={currentSlide === 2} isPrev={currentSlide > 2}>
        <div className="h-full flex flex-col justify-center">
          <h2 className="text-4xl mb-8">Analyse 2025 : <span className="text-red-400">Le Pic de Dernière Minute</span></h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="glass-panel p-6 col-span-2">
              <h3 className="text-sm font-display text-gray-400 mb-6">TOP 5 JOURS DE VENTE</h3>
              <div className="space-y-4">
                {[
                  { date: "24 fév", count: 161, percent: "100%" },
                  { date: "20 fév", count: 156, percent: "96%" },
                  { date: "25 fév", count: 111, percent: "68%" },
                  { date: "17 fév", count: 105, percent: "65%" },
                  { date: "21 fév", count: 77, percent: "47%" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <span className="w-16 text-sm text-gray-400">{item.date}</span>
                    <div className="flex-1 bg-white/5 h-8 rounded-sm overflow-hidden relative">
                      <div 
                        className="bg-gradient-to-r from-accent-purple to-blue-500 h-full absolute top-0 left-0 flex items-center px-3"
                        style={{ width: item.percent }}
                      >
                        <span className="text-xs font-bold text-white">{item.count}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="glass-panel p-6 flex flex-col justify-center items-center text-center">
              <div className="text-6xl font-bold text-accent-gold mb-2">50%</div>
              <p className="text-gray-300 mb-6">des ventes totales en seulement 6 jours</p>
              <div className="w-full h-px bg-white/10 mb-6"></div>
              <p className="text-sm text-gray-400">
                Cette dépendance à l'urgence crée une instabilité logistique et financière que nous devons corriger.
              </p>
            </div>
          </div>
        </div>
      </Slide>

      {/* SLIDE 4: TARIFICATION */}
      <Slide isActive={currentSlide === 3} isPrev={currentSlide > 3}>
        <h2 className="text-4xl mb-12">Stratégie de Tarification <span className="text-accent-purple">Narrative</span></h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          {/* Phase 1 */}
          <div className="glass-panel p-8 border-t-4 border-t-accent-purple relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300">
            <div className="absolute top-4 right-4 text-xs font-display text-gray-500">PHASE 1</div>
            <h3 className="text-2xl font-bold mb-2 text-white">Les Pionniers</h3>
            <div className="text-4xl font-bold text-accent-purple mb-4">-50%</div>
            <p className="text-sm text-gray-400 mb-6">Jusqu'au 31 déc. 2025</p>
            <div className="bg-white/5 p-4 rounded text-sm italic text-gray-300">
              "Rejoignez le cercle des premiers. Façonnez l'événement."
            </div>
          </div>

          {/* Phase 2 */}
          <div className="glass-panel p-8 border-t-4 border-t-accent-green relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300">
            <div className="absolute top-4 right-4 text-xs font-display text-gray-500">PHASE 2</div>
            <h3 className="text-2xl font-bold mb-2 text-white">Les Bâtisseurs</h3>
            <div className="text-4xl font-bold text-accent-green mb-4">-30%</div>
            <p className="text-sm text-gray-400 mb-6">1er - 17 jan. 2026</p>
            <div className="bg-white/5 p-4 rounded text-sm italic text-gray-300">
              "L'élan est créé. Construisez avec nous."
            </div>
          </div>

          {/* Phase 3 */}
          <div className="glass-panel p-8 border-t-4 border-t-accent-gold relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300">
            <div className="absolute top-4 right-4 text-xs font-display text-gray-500">PHASE 3</div>
            <h3 className="text-2xl font-bold mb-2 text-white">Les Décideurs</h3>
            <div className="text-4xl font-bold text-accent-gold mb-4">-20%</div>
            <p className="text-sm text-gray-400 mb-6">18 - 31 jan. 2026</p>
            <div className="bg-white/5 p-4 rounded text-sm italic text-gray-300">
              "Le programme est là. Prenez votre place."
            </div>
          </div>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          <div className="glass-panel p-6 flex items-center gap-4">
            <div className="bg-accent-purple/20 p-3 rounded-full text-accent-purple font-bold">1+1</div>
            <div>
              <h4 className="font-bold">Offre Duo Ambassadeur</h4>
              <p className="text-sm text-gray-400">Invitez un collègue à moitié prix (Anciens participants)</p>
            </div>
          </div>
          <div className="glass-panel p-6 flex items-center gap-4">
            <div className="bg-accent-green/20 p-3 rounded-full text-accent-green font-bold">VIP</div>
            <div>
              <h4 className="font-bold">Codes Partenaires</h4>
              <p className="text-sm text-gray-400">Valeur exclusive pour les communautés (E180, etc.)</p>
            </div>
          </div>
        </div>
      </Slide>

      {/* SLIDE 5: PLAN MÉDIA */}
      <Slide isActive={currentSlide === 4} isPrev={currentSlide > 4}>
        <div className="grid md:grid-cols-2 gap-12 h-full items-center">
          <div>
            <h2 className="text-4xl mb-8">Plan Média : <br/><span className="text-accent-gold">Orchestration du Budget</span></h2>
            <p className="text-xl text-gray-300 mb-8">
              Budget Marketing : <span className="text-white font-bold">25 000 $</span>
            </p>
            
            <div className="space-y-6">
              <div className="glass-panel p-6 border-l-4 border-l-[#1877F2]">
                <div className="flex justify-between mb-2">
                  <h3 className="font-bold">Meta (FB/Insta)</h3>
                  <span className="text-[#1877F2]">15k $</span>
                </div>
                <p className="text-sm text-gray-400">Retargeting & Lookalike. Toucher ceux qui nous connaissent déjà.</p>
              </div>
              
              <div className="glass-panel p-6 border-l-4 border-l-[#0A66C2]">
                <div className="flex justify-between mb-2">
                  <h3 className="font-bold">LinkedIn</h3>
                  <span className="text-[#0A66C2]">5k $</span>
                </div>
                <p className="text-sm text-gray-400">Ciblage Chirurgical B2B. Décideurs agences & studios.</p>
              </div>
              
              <div className="glass-panel p-6 border-l-4 border-l-[#EA4335]">
                <div className="flex justify-between mb-2">
                  <h3 className="font-bold">Google Ads</h3>
                  <span className="text-[#EA4335]">5k $</span>
                </div>
                <p className="text-sm text-gray-400">Capture d'Intention. "Conférence IA Montréal".</p>
              </div>
            </div>
          </div>
          
          <div className="glass-panel p-8 h-full max-h-[600px] flex flex-col justify-center">
            <h3 className="text-center font-display mb-8 text-gray-400 tracking-widest">RÉPARTITION OPÉRATIONNELLE</h3>
            <div className="relative w-64 h-64 mx-auto mb-8">
              {/* Simple CSS Pie Chart representation */}
              <svg viewBox="0 0 100 100" className="transform -rotate-90 w-full h-full">
                <circle cx="50" cy="50" r="40" fill="transparent" stroke="#333" strokeWidth="20" />
                <circle cx="50" cy="50" r="40" fill="transparent" stroke="#6600FF" strokeWidth="20" strokeDasharray="150 251" /> {/* Media 60% */}
                <circle cx="50" cy="50" r="40" fill="transparent" stroke="#00CC99" strokeWidth="20" strokeDasharray="75 251" strokeDashoffset="-150" /> {/* Prod 30% */}
                <circle cx="50" cy="50" r="40" fill="transparent" stroke="#F9AB00" strokeWidth="20" strokeDasharray="25 251" strokeDashoffset="-225" /> {/* Tools 10% */}
              </svg>
            </div>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-accent-purple rounded-full"></div>
                <span className="flex-1">Achat Média</span>
                <span className="font-bold">15 000 $</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-accent-green rounded-full"></div>
                <span className="flex-1">Production Contenu</span>
                <span className="font-bold">8 000 $</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-accent-gold rounded-full"></div>
                <span className="flex-1">Outils & Tech</span>
                <span className="font-bold">2 000 $</span>
              </div>
            </div>
          </div>
        </div>
      </Slide>

      {/* SLIDE 6: CRÉATIFS */}
      <Slide isActive={currentSlide === 5} isPrev={currentSlide > 5}>
        <h2 className="text-4xl mb-12">Symphonie Créative : <span className="text-white">Tech & Humain</span></h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <div className="aspect-video bg-gray-800 rounded-lg overflow-hidden relative group">
              <img src="/panel-discussion.jpg" alt="Phase 1" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-accent-purple/90 text-white px-4 py-2 font-display text-sm">PHASE 1</div>
              </div>
            </div>
            <h3 className="text-xl font-bold text-accent-purple">L'Émotion</h3>
            <p className="text-sm text-gray-400">Aftermovie, citations, ambiance.</p>
            <p className="italic text-white">"Vous avez aimé 2025 ? Vous n'avez encore rien vu."</p>
          </div>

          <div className="space-y-4">
            <div className="aspect-video bg-gray-800 rounded-lg overflow-hidden relative group">
              <img src="/speaker-woman.jpg" alt="Phase 2" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-accent-green/90 text-white px-4 py-2 font-display text-sm">PHASE 2</div>
              </div>
            </div>
            <h3 className="text-xl font-bold text-accent-green">L'Incarnation</h3>
            <p className="text-sm text-gray-400">Portraits speakers, thèmes.</p>
            <p className="italic text-white">"Voici ceux qui vont définir 2026. Et vous ?"</p>
          </div>

          <div className="space-y-4">
            <div className="aspect-video bg-gray-800 rounded-lg overflow-hidden relative group">
              <img src="/vr-experience.jpg" alt="Phase 3" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-accent-gold/90 text-white px-4 py-2 font-display text-sm">PHASE 3</div>
              </div>
            </div>
            <h3 className="text-xl font-bold text-accent-gold">L'Urgence</h3>
            <p className="text-sm text-gray-400">Compte à rebours, plans site.</p>
            <p className="italic text-white">"L'histoire s'écrit maintenant. Avec ou sans vous."</p>
          </div>
        </div>

        <div className="mt-12 glass-panel p-6">
          <h3 className="text-sm font-display text-gray-400 mb-4">CANAUX DE DISTRIBUTION</h3>
          <div className="flex flex-wrap gap-4">
            <span className="px-4 py-2 bg-white/5 rounded-full text-sm border border-white/10">Email Marketing Segmenté</span>
            <span className="px-4 py-2 bg-white/5 rounded-full text-sm border border-white/10">LinkedIn Organique</span>
            <span className="px-4 py-2 bg-white/5 rounded-full text-sm border border-white/10">Instagram Stories</span>
            <span className="px-4 py-2 bg-white/5 rounded-full text-sm border border-white/10">Partenariats E180</span>
          </div>
        </div>
      </Slide>

      {/* SLIDE 7: MESURE & CONCLUSION */}
      <Slide isActive={currentSlide === 6} isPrev={currentSlide > 6}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl mb-12">Mesurer le Succès</h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="glass-panel p-8">
              <div className="text-4xl font-bold text-accent-purple mb-2">50%</div>
              <div className="text-sm text-gray-400 uppercase tracking-wider">Conversion Early Bird</div>
            </div>
            <div className="glass-panel p-8">
              <div className="text-4xl font-bold text-accent-green mb-2">&lt; 15$</div>
              <div className="text-sm text-gray-400 uppercase tracking-wider">Coût par Acquisition</div>
            </div>
            <div className="glass-panel p-8">
              <div className="text-4xl font-bold text-accent-gold mb-2">70+</div>
              <div className="text-sm text-gray-400 uppercase tracking-wider">Net Promoter Score</div>
            </div>
          </div>

          <div className="glass-panel p-10 mb-12 text-left">
            <h3 className="text-xl font-bold mb-6">Prochaines Étapes</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center font-bold">1</div>
                <p>Finaliser la refonte du site web (Machine de conversion)</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center font-bold">2</div>
                <p>Lancer la campagne "Pionniers" (-50%)</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center font-bold">3</div>
                <p>Déployer le tracking (Pixels & UTMs)</p>
              </div>
            </div>
          </div>

          <p className="text-2xl font-light italic text-gray-300">
            "Ensemble, faisons de Entertain-AI 2026 une institution."
          </p>
        </div>
      </Slide>
    </div>
  );
}
