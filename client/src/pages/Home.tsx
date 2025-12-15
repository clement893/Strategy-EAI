import { Slide } from "@/components/Slide";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis, BarChart, Bar, CartesianGrid, Legend, PieChart, Pie, Cell } from "recharts";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 10; 
  const scrollTimeoutRef = useRef<number | null>(null);

  const nextSlide = useCallback(() => {
    setCurrentSlide(curr => (curr < totalSlides - 1 ? curr + 1 : curr));
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentSlide(curr => (curr > 0 ? curr - 1 : curr));
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown" || e.key === "ArrowRight") nextSlide();
      if (e.key === "ArrowUp" || e.key === "ArrowLeft") prevSlide();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextSlide, prevSlide]);

  const COLORS = ['#0f172a', '#334155', '#64748b', '#94a3b8'];

  return (
    <div className="slide-container">
      {/* Navigation Discrète */}
      <div className="fixed bottom-8 right-8 z-50 flex gap-2 print:hidden">
        <Button variant="outline" size="icon" onClick={prevSlide} disabled={currentSlide === 0} className="rounded-none border-slate-300 hover:bg-slate-100 text-slate-600">
          <ChevronUp className="h-4 w-4" />
        </Button>
        <Button variant="outline" size="icon" onClick={nextSlide} disabled={currentSlide === totalSlides - 1} className="rounded-none border-slate-300 hover:bg-slate-100 text-slate-600">
          <ChevronDown className="h-4 w-4" />
        </Button>
      </div>
      <div className="fixed bottom-8 left-12 z-50 text-xs font-mono text-slate-400">
        STRATÉGIE MARKETING 2026 • DOCUMENT CONFIDENTIEL
      </div>
      <div className="fixed top-8 right-12 z-50 text-xs font-serif text-slate-400">
        PAGE {currentSlide + 1} / {totalSlides}
      </div>

      {/* SLIDE 1: TITRE */}
      <Slide isActive={currentSlide === 0} isPrev={currentSlide > 0}>
        <div className="h-full flex flex-col justify-center max-w-4xl">
          <div className="w-24 h-1 bg-accent mb-8"></div>
          <h1 className="text-6xl font-serif text-primary mb-6">
            Plan Stratégique d'Acquisition
          </h1>
          <h2 className="text-3xl text-secondary font-light mb-12">
            Entertain-AI 2026
          </h2>
          <div className="grid grid-cols-2 gap-8 text-sm text-slate-600 border-t border-slate-200 pt-8 max-w-lg">
            <div>
              <span className="block font-bold text-primary mb-1">BUDGET ALLOUÉ</span>
              <span className="font-mono">13,000 $</span>
            </div>
            <div>
              <span className="block font-bold text-primary mb-1">OBJECTIF PRINCIPAL</span>
              <span className="font-mono">Lissage de la courbe de vente</span>
            </div>
          </div>
        </div>
      </Slide>

      {/* SLIDE 2: EXECUTIVE SUMMARY */}
      <Slide isActive={currentSlide === 1} isPrev={currentSlide > 1}>
        <div className="slide-header">
          <h2 className="slide-title">Executive Summary</h2>
          <span className="slide-subtitle">Synthèse Stratégique</span>
        </div>
        <div className="grid grid-cols-3 gap-8 h-3/4">
          <div className="consulting-card">
            <h3 className="text-xl mb-4 text-accent font-bold">01. LE DÉFI 2025</h3>
            <p className="text-slate-700 text-sm leading-relaxed mb-4">
              L'analyse post-mortem 2025 montre une <strong>hyper-concentration des ventes (50%) sur les 6 derniers jours</strong>. Ce comportement "Last Minute" met en péril la trésorerie et la logistique.
            </p>
            <div className="key-insight">
              <p className="insight-text text-sm">"Nous devons passer d'une logique de 'Billetterie' à une logique de 'Club'."</p>
            </div>
          </div>
          <div className="consulting-card">
            <h3 className="text-xl mb-4 text-primary font-bold">02. LA RÉPONSE 2026</h3>
            <p className="text-slate-700 text-sm leading-relaxed mb-4">
              Déploiement d'une stratégie en 3 temps pour sécuriser <strong>30% du CA avant le 31 décembre</strong> :
            </p>
            <ul className="list-decimal list-inside text-sm text-slate-600 mt-4 space-y-2">
              <li><strong>Nov :</strong> Awareness & Branding (Inspiration)</li>
              <li><strong>Déc :</strong> Conversion "Super Early Bird" (Urgence)</li>
              <li><strong>Jan/Fév :</strong> Retargeting & Social Proof (Réassurance)</li>
            </ul>
          </div>
          <div className="consulting-card">
            <h3 className="text-xl mb-4 text-primary font-bold">03. L'INVESTISSEMENT</h3>
            <p className="text-slate-700 text-sm leading-relaxed mb-4">
              Budget optimisé de <strong>13,000 $</strong> concentré sur l'acquisition payante (Meta/LinkedIn) et l'activation de la base existante.
            </p>
            <div className="mt-6 pt-6 border-t border-slate-200">
              <div className="flex justify-between items-end mb-2">
                <span className="text-sm font-bold text-slate-500">ROI PROJETÉ</span>
                <span className="text-2xl font-bold text-primary">x8.5</span>
              </div>
              <div className="w-full bg-slate-200 h-2">
                <div className="bg-primary h-2 w-full"></div>
              </div>
            </div>
          </div>
        </div>
      </Slide>

      {/* SLIDE 3: ANALYSE 2025 */}
      <Slide isActive={currentSlide === 2} isPrev={currentSlide > 2}>
        <div className="slide-header">
          <h2 className="slide-title">Analyse des Données 2025</h2>
          <span className="slide-subtitle">Post-Mortem & Insights</span>
        </div>
        <div className="flex gap-12 h-3/4">
          <div className="w-2/3 h-full">
            <h4 className="text-sm font-bold text-slate-500 mb-4 uppercase">Courbe des Ventes Cumulées 2025</h4>
            <ResponsiveContainer width="100%" height="85%">
              <AreaChart data={[
                { date: 'Nov', sales: 50 }, { date: 'Déc', sales: 120 }, { date: 'Jan 15', sales: 200 },
                { date: 'Feb 1', sales: 350 }, { date: 'Feb 15', sales: 500 }, { date: 'Feb 20', sales: 800 },
                { date: 'Feb 25', sales: 1500 }, { date: 'Feb 26', sales: 2000 }
              ]}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="date" tick={{fontFamily: 'sans-serif', fontSize: 12}} />
                <YAxis tick={{fontFamily: 'sans-serif', fontSize: 12}} />
                <Tooltip contentStyle={{border: '1px solid #e2e8f0', borderRadius: '0px', boxShadow: 'none'}} />
                <Area type="monotone" dataKey="sales" stroke="#0f172a" fill="#cbd5e1" strokeWidth={2} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          <div className="w-1/3 flex flex-col space-y-6">
            <div className="bg-slate-50 p-6 border-l-4 border-accent">
              <h4 className="font-bold text-primary mb-2">INSIGHT MAJEUR</h4>
              <p className="text-sm text-slate-700">
                Le public attend le "dernier moment" car la proposition de valeur n'est pas perçue comme <strong>rare</strong>. Il n'y a pas de pénalité perçue à attendre.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-primary mb-2 text-sm uppercase">Répartition par Canal (2025)</h4>
              <ul className="text-sm space-y-3">
                <li className="flex justify-between border-b border-slate-100 pb-2">
                  <span className="text-slate-600">Bouche à oreille</span>
                  <span className="font-mono font-bold">45%</span>
                </li>
                <li className="flex justify-between border-b border-slate-100 pb-2">
                  <span className="text-slate-600">Newsletter</span>
                  <span className="font-mono font-bold">30%</span>
                </li>
                <li className="flex justify-between border-b border-slate-100 pb-2">
                  <span className="text-slate-600">Social Ads (Tardif)</span>
                  <span className="font-mono font-bold">15%</span>
                </li>
                <li className="flex justify-between border-b border-slate-100 pb-2">
                  <span className="text-slate-600">Organique</span>
                  <span className="font-mono font-bold">10%</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Slide>

      {/* SLIDE 4: PERSONAS */}
      <Slide isActive={currentSlide === 3} isPrev={currentSlide > 3}>
        <div className="slide-header">
          <h2 className="slide-title">Ciblage & Personas</h2>
          <span className="slide-subtitle">Segmentation de l'Audience</span>
        </div>
        <div className="grid grid-cols-3 gap-6 h-3/4">
          {/* Persona 1 */}
          <div className="border border-slate-200 p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-slate-800 text-white flex items-center justify-center font-serif text-xl font-bold">T</div>
              <div>
                <h3 className="font-bold text-primary">Le Tech Enthusiast</h3>
                <p className="text-xs text-slate-500">Dev, Data Scientist, CTO</p>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase mb-1">Motivation</h4>
                <p className="text-sm text-slate-700">Veut comprendre le "comment". Cherche des workshops techniques et du code.</p>
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase mb-1">Frein</h4>
                <p className="text-sm text-slate-700">Peur du contenu "fluff" ou trop marketing.</p>
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase mb-1">Message Clé</h4>
                <p className="text-sm font-serif italic text-primary">"Deep dive into the code of creativity."</p>
              </div>
            </div>
          </div>

          {/* Persona 2 */}
          <div className="border border-slate-200 p-6 hover:shadow-lg transition-shadow bg-slate-50">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-accent text-white flex items-center justify-center font-serif text-xl font-bold">C</div>
              <div>
                <h3 className="font-bold text-primary">Le Créatif Augmenté</h3>
                <p className="text-xs text-slate-500">DA, Motion Designer, Artiste</p>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase mb-1">Motivation</h4>
                <p className="text-sm text-slate-700">Cherche l'inspiration et les nouveaux outils pour rester pertinent.</p>
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase mb-1">Frein</h4>
                <p className="text-sm text-slate-700">Peur que l'IA remplace son métier.</p>
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase mb-1">Message Clé</h4>
                <p className="text-sm font-serif italic text-primary">"L'IA ne vous remplacera pas. Un créatif utilisant l'IA le fera."</p>
              </div>
            </div>
          </div>

          {/* Persona 3 */}
          <div className="border border-slate-200 p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-slate-600 text-white flex items-center justify-center font-serif text-xl font-bold">B</div>
              <div>
                <h3 className="font-bold text-primary">Le Business Leader</h3>
                <p className="text-xs text-slate-500">Agency Owner, CMO</p>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase mb-1">Motivation</h4>
                <p className="text-sm text-slate-700">Cherche le ROI, l'efficacité opérationnelle et le networking.</p>
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase mb-1">Frein</h4>
                <p className="text-sm text-slate-700">Manque de temps, besoin de concret immédiat.</p>
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase mb-1">Message Clé</h4>
                <p className="text-sm font-serif italic text-primary">"Scale your agency with AI workflows."</p>
              </div>
            </div>
          </div>
        </div>
      </Slide>

      {/* SLIDE 5: STRATÉGIE 3 PHASES */}
      <Slide isActive={currentSlide === 4} isPrev={currentSlide > 4}>
        <div className="slide-header">
          <h2 className="slide-title">Stratégie d'Exécution</h2>
          <span className="slide-subtitle">Calendrier & Objectifs</span>
        </div>
        <div className="grid grid-cols-3 gap-0 border border-slate-200 h-2/3">
          {/* Phase 1 */}
          <div className="p-8 border-r border-slate-200 relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-slate-100 px-3 py-1 text-xs font-bold text-slate-500">NOVEMBRE</div>
            <h3 className="text-lg font-bold text-primary mb-2 uppercase">Phase 1 : Inspiration</h3>
            <p className="text-xs text-slate-500 mb-6 italic">"The Art of Possible"</p>
            <ul className="text-sm space-y-4 mb-8">
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">Obj.</span>
                <span className="text-slate-700">Générer 2000 Leads Qualifiés</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">Action</span>
                <span className="text-slate-700">Lancement du "Manifeste E-AI" (Vidéo virale)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">Canal</span>
                <span className="text-slate-700">LinkedIn Organique + Meta Ads (Reach)</span>
              </li>
            </ul>
            <div className="mt-auto pt-4 border-t border-slate-100">
              <span className="text-xs font-bold text-slate-400">BUDGET PHASE 1</span>
              <div className="text-xl font-mono font-bold text-primary">2,000 $</div>
            </div>
          </div>

          {/* Phase 2 */}
          <div className="p-8 border-r border-slate-200 relative overflow-hidden bg-slate-50">
            <div className="absolute top-0 right-0 bg-accent text-white px-3 py-1 text-xs font-bold">DÉCEMBRE</div>
            <h3 className="text-lg font-bold text-primary mb-2 uppercase">Phase 2 : Conversion</h3>
            <p className="text-xs text-slate-500 mb-6 italic">"Secure your seat"</p>
            <ul className="text-sm space-y-4 mb-8">
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">Obj.</span>
                <span className="text-slate-700">30% des ventes totales (Super Early Bird)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">Action</span>
                <span className="text-slate-700">Webinaire Exclusif + Ouverture Billetterie 48h</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">Canal</span>
                <span className="text-slate-700">Emailing Base + Retargeting</span>
              </li>
            </ul>
            <div className="mt-auto pt-4 border-t border-slate-200">
              <span className="text-xs font-bold text-slate-400">BUDGET PHASE 2</span>
              <div className="text-xl font-mono font-bold text-primary">5,000 $</div>
            </div>
          </div>

          {/* Phase 3 */}
          <div className="p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-slate-100 px-3 py-1 text-xs font-bold text-slate-500">JAN - FÉV</div>
            <h3 className="text-lg font-bold text-primary mb-2 uppercase">Phase 3 : Accélération</h3>
            <p className="text-xs text-slate-500 mb-6 italic">"Fear Of Missing Out"</p>
            <ul className="text-sm space-y-4 mb-8">
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">Obj.</span>
                <span className="text-slate-700">Sold Out 10 jours avant l'event</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">Action</span>
                <span className="text-slate-700">Annonce Speakers Stars + Hausse Prix</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">Canal</span>
                <span className="text-slate-700">Ads Conversion + Influence</span>
              </li>
            </ul>
            <div className="mt-auto pt-4 border-t border-slate-100">
              <span className="text-xs font-bold text-slate-400">BUDGET PHASE 3</span>
              <div className="text-xl font-mono font-bold text-primary">6,000 $</div>
            </div>
          </div>
        </div>
      </Slide>

      {/* SLIDE 6: PLAN MÉDIA & BUDGET */}
      <Slide isActive={currentSlide === 5} isPrev={currentSlide > 5}>
        <div className="slide-header">
          <h2 className="slide-title">Plan Média & Distribution Budgétaire</h2>
          <span className="slide-subtitle">Total : 13,000 $</span>
        </div>
        <div className="flex gap-12 h-3/4">
          <div className="w-1/2">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="border-b-2 border-primary">
                  <th className="py-3 font-bold text-primary uppercase tracking-wider">Canal</th>
                  <th className="py-3 font-bold text-primary uppercase tracking-wider text-right">Budget</th>
                  <th className="py-3 font-bold text-primary uppercase tracking-wider text-right">%</th>
                  <th className="py-3 font-bold text-primary uppercase tracking-wider text-right">KPI Cible</th>
                </tr>
              </thead>
              <tbody className="text-slate-700">
                <tr className="border-b border-slate-200 bg-slate-50">
                  <td className="py-3 pl-2 font-bold">Meta Ads (IG/FB)</td>
                  <td className="py-3 text-right font-mono">6,500 $</td>
                  <td className="py-3 text-right font-mono">50%</td>
                  <td className="py-3 text-right font-mono">CPC &lt; 0.80$</td>
                </tr>
                <tr>
                  <td className="py-2 pl-2 text-xs text-slate-500" colSpan={4}>
                    <i>Focus : Visuels "Inspiration" pour Créatifs + Retargeting vidéo</i>
                  </td>
                </tr>
                <tr className="border-b border-slate-200">
                  <td className="py-3 pl-2 font-bold">LinkedIn Ads</td>
                  <td className="py-3 text-right font-mono">4,000 $</td>
                  <td className="py-3 text-right font-mono">30%</td>
                  <td className="py-3 text-right font-mono">CPL &lt; 15$</td>
                </tr>
                <tr>
                  <td className="py-2 pl-2 text-xs text-slate-500" colSpan={4}>
                    <i>Focus : Ciblage CTO/Agency Owners pour billets "Pro"</i>
                  </td>
                </tr>
                <tr className="border-b border-slate-200 bg-slate-50">
                  <td className="py-3 pl-2 font-bold">Google Search</td>
                  <td className="py-3 text-right font-mono">1,500 $</td>
                  <td className="py-3 text-right font-mono">12%</td>
                  <td className="py-3 text-right font-mono">Conv. 5%</td>
                </tr>
                <tr className="border-b border-slate-200">
                  <td className="py-3 pl-2 font-bold">Influence / Partenariats</td>
                  <td className="py-3 text-right font-mono">1,000 $</td>
                  <td className="py-3 text-right font-mono">8%</td>
                  <td className="py-3 text-right font-mono">Reach 50k</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="w-1/2 flex flex-col justify-center items-center">
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={[
                    { name: 'Meta', value: 6500 },
                    { name: 'LinkedIn', value: 4000 },
                    { name: 'Google', value: 1500 },
                    { name: 'Influence', value: 1000 },
                  ]}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  fill="#8884d8"
                  paddingAngle={5}
                  dataKey="value"
                >
                  {COLORS.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
            <div className="text-center mt-4">
              <p className="text-sm text-slate-600 max-w-xs">
                La stratégie privilégie <strong>Meta</strong> pour le volume (B2C/Créatifs) et <strong>LinkedIn</strong> pour la valeur (B2B/Décideurs).
              </p>
            </div>
          </div>
        </div>
      </Slide>

      {/* SLIDE 7: CALENDRIER & PRIX */}
      <Slide isActive={currentSlide === 6} isPrev={currentSlide > 6}>
        <div className="slide-header">
          <h2 className="slide-title">Calendrier d'Exécution</h2>
          <span className="slide-subtitle">Alignement Offre & Communication</span>
        </div>
        <div className="relative h-3/4 pt-8">
          <div className="absolute top-12 left-0 right-0 h-px bg-slate-300 z-0"></div>
          <div className="grid grid-cols-4 gap-4 h-full relative z-10">
            {/* NOV */}
            <div className="bg-white border border-slate-200 p-4 flex flex-col h-full">
              <div className="text-xs font-bold text-slate-400 mb-2">NOVEMBRE</div>
              <div className="bg-slate-100 text-slate-600 text-xs p-2 mb-4 rounded text-center">
                Pas de vente publique
              </div>
              <h4 className="font-bold text-primary text-sm mb-2">Actions</h4>
              <ul className="text-xs space-y-2 text-slate-600">
                <li>• Teasing Speakers</li>
                <li>• Vidéo Manifeste</li>
                <li>• Collecte Leads (Waitlist)</li>
              </ul>
            </div>
            {/* DEC */}
            <div className="bg-white border-2 border-accent p-4 flex flex-col h-full shadow-lg transform scale-105">
              <div className="text-xs font-bold text-accent mb-2">DÉCEMBRE</div>
              <div className="bg-accent text-white text-xs p-2 mb-4 rounded text-center font-bold">
                SUPER EARLY BIRD (299$)
              </div>
              <h4 className="font-bold text-primary text-sm mb-2">Actions</h4>
              <ul className="text-xs space-y-2 text-slate-600">
                <li>• <strong>05/12 :</strong> Webinaire Lancement</li>
                <li>• <strong>06/12 :</strong> Ouverture 48h</li>
                <li>• Emailing Séquence "Urgence"</li>
              </ul>
            </div>
            {/* JAN */}
            <div className="bg-white border border-slate-200 p-4 flex flex-col h-full">
              <div className="text-xs font-bold text-slate-400 mb-2">JANVIER</div>
              <div className="bg-slate-800 text-white text-xs p-2 mb-4 rounded text-center">
                EARLY BIRD (499$)
              </div>
              <h4 className="font-bold text-primary text-sm mb-2">Actions</h4>
              <ul className="text-xs space-y-2 text-slate-600">
                <li>• Annonce Programme Complet</li>
                <li>• Retargeting "Panier Abandonné"</li>
                <li>• Focus LinkedIn Ads</li>
              </ul>
            </div>
            {/* FEB */}
            <div className="bg-white border border-slate-200 p-4 flex flex-col h-full">
              <div className="text-xs font-bold text-slate-400 mb-2">FÉVRIER</div>
              <div className="bg-slate-200 text-slate-600 text-xs p-2 mb-4 rounded text-center">
                REGULAR (699$)
              </div>
              <h4 className="font-bold text-primary text-sm mb-2">Actions</h4>
              <ul className="text-xs space-y-2 text-slate-600">
                <li>• Compte à rebours J-15</li>
                <li>• "Last Chance" Ads</li>
                <li>• Sold Out Push</li>
              </ul>
            </div>
          </div>
        </div>
      </Slide>

      {/* SLIDE 8: KPIS & SUCCÈS */}
      <Slide isActive={currentSlide === 7} isPrev={currentSlide > 7}>
        <div className="slide-header">
          <h2 className="slide-title">Tableau de Bord KPI</h2>
          <span className="slide-subtitle">Métriques de Succès</span>
        </div>
        <div className="grid grid-cols-2 gap-12 h-3/4">
          <div>
            <h3 className="text-lg font-bold text-primary mb-6">Objectifs Quantitatifs</h3>
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div>
                  <div className="text-sm text-slate-500">Chiffre d'Affaires</div>
                  <div className="text-2xl font-bold text-primary">150,000 $</div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-slate-400">vs 2025</div>
                  <div className="text-sm font-bold text-green-600">+25%</div>
                </div>
              </div>
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div>
                  <div className="text-sm text-slate-500">Coût d'Acquisition (CPA)</div>
                  <div className="text-2xl font-bold text-primary">&lt; 45 $</div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-slate-400">Moyenne Secteur</div>
                  <div className="text-sm font-bold text-green-600">-15%</div>
                </div>
              </div>
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div>
                  <div className="text-sm text-slate-500">Taux de Conversion Site</div>
                  <div className="text-2xl font-bold text-primary">3.5%</div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-slate-400">Objectif</div>
                  <div className="text-sm font-bold text-slate-600">Stable</div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-slate-50 p-8 border border-slate-200">
            <h3 className="text-lg font-bold text-primary mb-6">Objectifs Qualitatifs</h3>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm">1</div>
                <div>
                  <h4 className="font-bold text-primary text-sm">Lissage de la Trésorerie</h4>
                  <p className="text-xs text-slate-600">30% du cash encaissé avant le 31/12 pour financer les acomptes prestataires.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm">2</div>
                <div>
                  <h4 className="font-bold text-primary text-sm">Diversification de l'Audience</h4>
                  <p className="text-xs text-slate-600">Atteindre un mix 60% Créatifs / 40% Tech (vs 80% Tech en 2025).</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm">3</div>
                <div>
                  <h4 className="font-bold text-primary text-sm">Satisfaction NPS</h4>
                  <p className="text-xs text-slate-600">Maintenir un NPS &gt; 70 malgré la croissance de l'événement.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </Slide>

      {/* SLIDE 9: RECOMMANDATIONS TACTIQUES */}
      <Slide isActive={currentSlide === 8} isPrev={currentSlide > 8}>
        <div className="slide-header">
          <h2 className="slide-title">Recommandations Tactiques</h2>
          <span className="slide-subtitle">Actions Immédiates</span>
        </div>
        <div className="grid grid-cols-3 gap-8 h-3/4">
          <div className="border-t-4 border-primary pt-4">
            <h3 className="font-bold text-primary mb-4">META (IG/FB)</h3>
            <ul className="text-sm space-y-3 text-slate-600">
              <li>• <strong>Format :</strong> Reels 15s "Behind the scenes" + Carrousels éducatifs.</li>
              <li>• <strong>Audience :</strong> Lookalike des participants 2025 + Intérêts "Midjourney", "Stable Diffusion".</li>
              <li>• <strong>Bid :</strong> Lowest Cost pour le Reach en Phase 1.</li>
            </ul>
          </div>
          <div className="border-t-4 border-primary pt-4">
            <h3 className="font-bold text-primary mb-4">LINKEDIN</h3>
            <ul className="text-sm space-y-3 text-slate-600">
              <li>• <strong>Format :</strong> Single Image Ads (Citations Speakers) + Message Ads (Invitation Webinaire).</li>
              <li>• <strong>Audience :</strong> Job Titles (CTO, CDO, Art Director) + Company Size (10-200).</li>
              <li>• <strong>Bid :</strong> Manual CPC pour contrôler les coûts.</li>
            </ul>
          </div>
          <div className="border-t-4 border-primary pt-4">
            <h3 className="font-bold text-primary mb-4">EMAIL / CRM</h3>
            <ul className="text-sm space-y-3 text-slate-600">
              <li>• <strong>Segmentation :</strong> Séparer les "Alumni 2025" des "Nouveaux Leads".</li>
              <li>• <strong>Offre :</strong> Code promo exclusif "Alumni" (-10% extra) valable 48h.</li>
              <li>• <strong>Automation :</strong> Panier abandonné (J+1, J+3).</li>
            </ul>
          </div>
        </div>
      </Slide>

      {/* SLIDE 10: CONCLUSION */}
      <Slide isActive={currentSlide === 9} isPrev={currentSlide > 9}>
        <div className="h-full flex flex-col justify-center items-center max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-serif text-primary mb-8">Validation Requise</h2>
          <p className="text-slate-600 mb-12 leading-relaxed">
            Pour lancer la Phase 1 (Inspiration) dès lundi prochain, nous sollicitons la validation du budget de 13,000 $ et de la grille tarifaire.
          </p>
          <div className="flex gap-6">
            <Button className="bg-primary text-white px-8 py-6 text-lg rounded-none hover:bg-slate-800 shadow-xl">
              VALIDER LE BUDGET (13k$)
            </Button>
            <Button variant="outline" className="border-slate-300 text-slate-600 px-8 py-6 text-lg rounded-none hover:bg-slate-50">
              DISCUTER LES KPIS
            </Button>
          </div>
        </div>
      </Slide>
    </div>
  );
}
