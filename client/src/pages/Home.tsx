import { Slide } from "@/components/Slide";
import { FontTest } from "@/components/FontTest";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useEffect, useState } from "react";
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 12; // Increased for Scope, Roadmap, Budget

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
      {/* Font Test - À retirer après validation */}
      {import.meta.env.DEV && (
        <div className="fixed top-4 left-4 z-[100] max-w-md">
          <FontTest />
        </div>
      )}
      
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

      {/* SLIDE 2: MISSION & VISION (Storytelling) */}
      <Slide isActive={currentSlide === 1} isPrev={currentSlide > 1} backgroundImage="/vr-experience.jpg">
        <div className="grid md:grid-cols-2 gap-12 items-center h-full">
          <div className="glass-panel p-10 backdrop-blur-xl border-l-4 border-l-accent-purple">
            <h3 className="text-accent-purple font-display tracking-widest mb-4">NOTRE MISSION</h3>
            <p className="text-3xl md:text-4xl font-light italic leading-relaxed text-white mb-8">
              "Réinventer la créativité, <br/>
              <span className="text-accent-green font-normal">réhumaniser l'IA.</span>"
            </p>
            <div className="w-20 h-1 bg-white/20 mb-8"></div>
            <p className="text-lg text-gray-300 leading-relaxed">
              Créer un espace de convergence où la technologie ne remplace pas l'humain, mais amplifie son potentiel émotionnel et créatif.
            </p>
          </div>
          
          <div className="space-y-6">
            <div className="glass-panel p-8">
              <h3 className="text-accent-gold font-display tracking-widest mb-4">THÉMATIQUE 2026</h3>
              <h2 className="text-4xl font-bold text-white mb-6">À ÉCHELLE HUMAINE</h2>
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <span className="text-accent-purple font-bold text-xl">01</span>
                  <div>
                    <h4 className="font-bold text-white">EXPÉRIMENTATION</h4>
                    <p className="text-sm text-gray-400">Des ateliers "hands-on" pour toucher, tester et casser les codes.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="text-accent-green font-bold text-xl">02</span>
                  <div>
                    <h4 className="font-bold text-white">CONNEXION</h4>
                    <p className="text-sm text-gray-400">Un networking qualitatif favorisant les échanges réels.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="text-accent-gold font-bold text-xl">03</span>
                  <div>
                    <h4 className="font-bold text-white">INSPIRATION</h4>
                    <p className="text-sm text-gray-400">Des keynotes visionnaires ancrées dans la réalité du marché.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Slide>

      {/* SLIDE 3: ANALYSE & OBJECTIFS (Data Storytelling) */}
      <Slide isActive={currentSlide === 2} isPrev={currentSlide > 2}>
        <div className="grid md:grid-cols-2 gap-12 h-full items-center">
          <div>
            <h2 className="text-4xl mb-8">Analyse 2025 : <br/><span className="text-red-400">Le Pic de Dernière Minute</span></h2>
            <div className="glass-panel p-6 mb-8">
              <div className="h-64 w-full mb-4">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart
                    data={[
                      { date: 'Jan 1', sales: 5 }, { date: 'Jan 15', sales: 12 }, { date: 'Feb 1', sales: 25 },
                      { date: 'Feb 10', sales: 45 }, { date: 'Feb 15', sales: 80 }, { date: 'Feb 20', sales: 156 },
                      { date: 'Feb 24', sales: 161 }, { date: 'Feb 25', sales: 111 }, { date: 'Feb 26', sales: 40 }
                    ]}
                  >
                    <defs>
                      <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#ef4444" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#ef4444" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <XAxis dataKey="date" stroke="#666" tick={{fill: '#666'}} />
                    <YAxis stroke="#666" tick={{fill: '#666'}} />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#1a1a1a', border: '1px solid #333' }}
                      itemStyle={{ color: '#fff' }}
                    />
                    <Area type="monotone" dataKey="sales" stroke="#ef4444" fillOpacity={1} fill="url(#colorSales)" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
              <div className="flex items-center gap-4 mb-2">
                <div className="text-5xl font-bold text-accent-gold">50%</div>
                <div className="text-gray-300 leading-tight">des ventes totales réalisées<br/>en seulement 6 jours.</div>
              </div>
              <p className="mt-4 text-sm text-gray-400 italic border-l-2 border-red-400 pl-4">
                "Ce pic tardif crée une tension extrême sur la trésorerie et la logistique. Il faut lisser la courbe."
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-4xl mb-8 text-right">Objectifs 2026</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="glass-panel p-6 text-center group hover:bg-white/5 transition-colors">
                <div className="text-accent-purple text-3xl font-bold mb-2 group-hover:scale-110 transition-transform">1000</div>
                <div className="text-xs font-display tracking-widest text-gray-400">BILLETS VENDUS</div>
                <div className="text-xs text-green-400 mt-2">+66% vs 2025</div>
              </div>
              <div className="glass-panel p-6 text-center group hover:bg-white/5 transition-colors">
                <div className="text-accent-green text-3xl font-bold mb-2 group-hover:scale-110 transition-transform">+50%</div>
                <div className="text-xs font-display tracking-widest text-gray-400">PORTÉE MÉDIA</div>
                <div className="text-xs text-gray-500 mt-2">Notoriété Brand</div>
              </div>
              <div className="glass-panel p-6 text-center group hover:bg-white/5 transition-colors">
                <div className="text-accent-gold text-3xl font-bold mb-2 group-hover:scale-110 transition-transform">&gt;70</div>
                <div className="text-xs font-display tracking-widest text-gray-400">SCORE NPS</div>
                <div className="text-xs text-gray-500 mt-2">Qualité Expérience</div>
              </div>
              <div className="glass-panel p-6 text-center group hover:bg-white/5 transition-colors">
                <div className="text-white text-3xl font-bold mb-2 group-hover:scale-110 transition-transform">50%</div>
                <div className="text-xs font-display tracking-widest text-gray-400">VENTES DÉC.</div>
                <div className="text-xs text-green-400 mt-2">Sécurité Cashflow</div>
              </div>
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

      {/* SLIDE 9: SCOPE OF WORK */}
      <Slide isActive={currentSlide === 8} isPrev={currentSlide > 8}>
        <h2 className="text-4xl mb-12">Notre Périmètre d'Intervention</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="glass-panel p-8">
            <h3 className="text-2xl text-accent-purple mb-6 font-display">STRATÉGIE & GESTION</h3>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-accent-purple mt-1">✓</span>
                <span><strong>Pilotage Stratégique :</strong> Ajustement hebdomadaire des axes de communication.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent-purple mt-1">✓</span>
                <span><strong>Gestion Média :</strong> Setup, optimisation et scaling des campagnes Meta & Google Ads.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent-purple mt-1">✓</span>
                <span><strong>Reporting :</strong> Dashboard live et rapports de performance hebdomadaires.</span>
              </li>
            </ul>
          </div>
          <div className="glass-panel p-8">
            <h3 className="text-2xl text-accent-green mb-6 font-display">CRÉATION & CONTENU</h3>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-accent-green mt-1">✓</span>
                <span><strong>Production Visuelle :</strong> Déclinaison des assets (bannières, stories, carrousels) pour chaque phase.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent-green mt-1">✓</span>
                <span><strong>Copywriting :</strong> Rédaction des séquences emails et des publicités.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent-green mt-1">✓</span>
                <span><strong>Intégration :</strong> Mise en place des pixels de tracking et des formulaires.</span>
              </li>
            </ul>
          </div>
        </div>
      </Slide>

      {/* SLIDE 10: ROADMAP */}
      <Slide isActive={currentSlide === 9} isPrev={currentSlide > 9}>
        <h2 className="text-4xl mb-12">Roadmap Opérationnelle</h2>
        <div className="relative border-l-2 border-white/10 ml-4 space-y-12">
          <div className="relative pl-8">
            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-accent-purple"></div>
            <h3 className="text-xl font-bold text-white mb-2">Semaine 1 : Setup & Fondation</h3>
            <p className="text-gray-400">Audit des comptes pub, installation du tracking avancé, validation des personas.</p>
          </div>
          <div className="relative pl-8">
            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-accent-green"></div>
            <h3 className="text-xl font-bold text-white mb-2">Semaine 2 : Production Créative</h3>
            <p className="text-gray-400">Création des visuels Phase 1 ("Pionniers"), rédaction des séquences emails de réchauffement.</p>
          </div>
          <div className="relative pl-8">
            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-accent-gold"></div>
            <h3 className="text-xl font-bold text-white mb-2">Semaine 3 : Lancement Phase 1</h3>
            <p className="text-gray-400">Activation des campagnes "Early Bird", envoi du premier email à la base existante.</p>
          </div>
          <div className="relative pl-8">
            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white"></div>
            <h3 className="text-xl font-bold text-white mb-2">Semaine 4-8 : Optimisation Continue</h3>
            <p className="text-gray-400">A/B testing des créas, ajustement des budgets par canal, reporting hebdo.</p>
          </div>
        </div>
      </Slide>

      {/* SLIDE 11: BUDGET */}
      <Slide isActive={currentSlide === 10} isPrev={currentSlide > 10}>
        <h2 className="text-4xl mb-12">Investissement Global</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="glass-panel p-8 flex flex-col justify-between border border-white/10">
            <div>
              <h3 className="text-sm font-display text-gray-400 mb-2">BUDGET MÉDIA (ESTIMÉ)</h3>
              <div className="text-5xl font-bold text-white mb-6">25 000 $</div>
              <p className="text-gray-400 text-sm mb-6">Payé directement aux plateformes (Meta, Google, LinkedIn).</p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• Meta Ads : 12 500 $</li>
                <li>• LinkedIn Ads : 7 500 $</li>
                <li>• Google Ads : 5 000 $</li>
              </ul>
            </div>
          </div>
          <div className="glass-panel p-8 flex flex-col justify-between border border-accent-purple/50 bg-accent-purple/5">
            <div>
              <h3 className="text-sm font-display text-accent-purple mb-2">HONORAIRES AGENCE</h3>
              <div className="text-5xl font-bold text-white mb-6">15 000 $</div>
              <p className="text-gray-400 text-sm mb-6">Forfait global pour la durée de la campagne (3 mois).</p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• Stratégie & Pilotage</li>
                <li>• Création & Production</li>
                <li>• Gestion Média & Reporting</li>
              </ul>
            </div>
            <div className="mt-8 pt-6 border-t border-white/10">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-400">ROI Estimé</span>
                <span className="text-xl font-bold text-green-400">x4.5</span>
              </div>
            </div>
          </div>
        </div>
      </Slide>

      {/* SLIDE 12: MESURE (Moved) */}
      <Slide isActive={currentSlide === 11} isPrev={currentSlide > 11}>
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

      {/* SLIDE 5: PLAN MÉDIA - BUDGET */}
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

      {/* SLIDE 7: PERSONAS & CIBLAGE (NEW) */}
      <Slide isActive={currentSlide === 6} isPrev={currentSlide > 6}>
        <h2 className="text-4xl mb-12">Ciblage : <span className="text-accent-purple">Nos 3 Piliers</span></h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="glass-panel p-8 border-t-4 border-t-accent-purple">
            <div className="w-12 h-12 bg-accent-purple/20 rounded-full flex items-center justify-center mb-6">
              <span className="text-2xl">🎨</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Les Créatifs Tech</h3>
            <p className="text-sm text-gray-400 mb-4">Directeurs artistiques, Designers, Motion Designers.</p>
            <ul className="text-sm space-y-2 text-gray-300">
              <li>• Cherchent l'inspiration</li>
              <li>• Veulent maîtriser les nouveaux outils</li>
              <li>• Canaux : Instagram, Behance</li>
            </ul>
          </div>

          <div className="glass-panel p-8 border-t-4 border-t-accent-green">
            <div className="w-12 h-12 bg-accent-green/20 rounded-full flex items-center justify-center mb-6">
              <span className="text-2xl">💼</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Les Décideurs</h3>
            <p className="text-sm text-gray-400 mb-4">Chefs d'entreprise, Directeurs d'agence, CTOs.</p>
            <ul className="text-sm space-y-2 text-gray-300">
              <li>• Cherchent le ROI et l'efficacité</li>
              <li>• Veulent réseauter</li>
              <li>• Canaux : LinkedIn, Email</li>
            </ul>
          </div>

          <div className="glass-panel p-8 border-t-4 border-t-accent-gold">
            <div className="w-12 h-12 bg-accent-gold/20 rounded-full flex items-center justify-center mb-6">
              <span className="text-2xl">🚀</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Les Innovateurs</h3>
            <p className="text-sm text-gray-400 mb-4">Développeurs IA, Chercheurs, Startups.</p>
            <ul className="text-sm space-y-2 text-gray-300">
              <li>• Cherchent la technique</li>
              <li>• Veulent voir le futur</li>
              <li>• Canaux : Twitter/X, Discord</li>
            </ul>
          </div>
        </div>
      </Slide>

      {/* SLIDE 8: RISQUES & MITIGATION (NEW) */}
      <Slide isActive={currentSlide === 7} isPrev={currentSlide > 7}>
        <h2 className="text-4xl mb-12">Gestion des Risques</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="glass-panel p-8">
            <h3 className="text-xl font-bold text-red-400 mb-4">Risque 1 : Saturation des Canaux</h3>
            <p className="text-gray-300 mb-4">
              Le bruit médiatique autour de l'IA est immense. Risque de noyade du message.
            </p>
            <div className="bg-white/5 p-4 rounded border-l-2 border-accent-green">
              <h4 className="font-bold text-accent-green text-sm mb-1">MITIGATION</h4>
              <p className="text-sm text-gray-400">
                Focus sur la niche "Créative" et l'humain. Ne pas parler de "tech" générique, mais d'usage concret et d'émotion.
              </p>
            </div>
          </div>

          <div className="glass-panel p-8">
            <h3 className="text-xl font-bold text-red-400 mb-4">Risque 2 : Fatigue "Early Bird"</h3>
            <p className="text-gray-300 mb-4">
              Si la phase 1 ne convertit pas assez, la pression sur janvier augmente.
            </p>
            <div className="bg-white/5 p-4 rounded border-l-2 border-accent-green">
              <h4 className="font-bold text-accent-green text-sm mb-1">MITIGATION</h4>
              <p className="text-sm text-gray-400">
                Activation agressive de la base de données 2025 (Emailing personnalisé) dès le jour 1. Le "1+1" est notre filet de sécurité.
              </p>
            </div>
          </div>
        </div>
      </Slide>
    </div>
  );
}
