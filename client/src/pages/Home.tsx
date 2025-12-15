import { Slide } from "@/components/Slide";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis, BarChart, Bar, CartesianGrid, Legend } from "recharts";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 9; 
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
            Stratégie d'Acquisition & Engagement
          </h1>
          <h2 className="text-3xl text-secondary font-light mb-12">
            Entertain-AI 2026
          </h2>
          <div className="text-sm text-slate-500 font-mono mt-auto">
            PRÉPARÉ POUR LE COMITÉ DE DIRECTION<br/>
            14 DÉCEMBRE 2025
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
            <h3 className="text-xl mb-4 text-accent font-bold">01. DIAGNOSTIC</h3>
            <p className="text-slate-700 text-sm leading-relaxed mb-4">
              L'analyse des données 2025 révèle une <strong>dépendance critique aux ventes de dernière minute</strong> (50% du CA sur J-6). Ce modèle génère une tension opérationnelle insoutenable et limite la prévisibilité financière.
            </p>
            <div className="key-insight">
              <p className="insight-text text-sm">"Le modèle actuel subit le marché au lieu de le dicter."</p>
            </div>
          </div>
          <div className="consulting-card">
            <h3 className="text-xl mb-4 text-primary font-bold">02. RECOMMANDATION</h3>
            <p className="text-slate-700 text-sm leading-relaxed mb-4">
              Pivoter d'une stratégie "Event-Centric" vers une stratégie <strong>"Community-First"</strong>. Lisser l'acquisition sur 4 mois via une séquence : Inspiration (Nov) > Éducation (Déc) > Urgence (Jan).
            </p>
            <ul className="list-disc list-inside text-sm text-slate-600 mt-4 space-y-2">
              <li>Segmentation par maturité (Tech vs Créatif)</li>
              <li>Contenu "Snackable" à haute valeur ajoutée</li>
            </ul>
          </div>
          <div className="consulting-card">
            <h3 className="text-xl mb-4 text-primary font-bold">03. IMPACT PROJETÉ</h3>
            <p className="text-slate-700 text-sm leading-relaxed mb-4">
              L'objectif est de sécuriser <strong>30% du CA avant le 1er janvier</strong> (vs 5% en 2025).
            </p>
            <div className="mt-6 pt-6 border-t border-slate-200">
              <div className="flex justify-between items-end mb-2">
                <span className="text-sm font-bold text-slate-500">ROI CIBLE</span>
                <span className="text-2xl font-bold text-primary">x4.5</span>
              </div>
              <div className="w-full bg-slate-200 h-2">
                <div className="bg-primary h-2 w-3/4"></div>
              </div>
            </div>
          </div>
        </div>
      </Slide>

      {/* SLIDE 3: ANALYSE DE LA SITUATION */}
      <Slide isActive={currentSlide === 2} isPrev={currentSlide > 2}>
        <div className="slide-header">
          <h2 className="slide-title">Analyse de la Performance 2025</h2>
          <span className="slide-subtitle">Diagnostic des Ventes</span>
        </div>
        <div className="flex gap-12 h-3/4">
          <div className="w-2/3 h-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={[
                { date: 'J-60', sales: 5 }, { date: 'J-45', sales: 8 }, { date: 'J-30', sales: 15 },
                { date: 'J-15', sales: 25 }, { date: 'J-7', sales: 45 }, { date: 'J-3', sales: 120 },
                { date: 'J-1', sales: 250 }, { date: 'J-0', sales: 180 }
              ]}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="date" tick={{fontFamily: 'sans-serif', fontSize: 12}} />
                <YAxis tick={{fontFamily: 'sans-serif', fontSize: 12}} />
                <Tooltip contentStyle={{border: '1px solid #e2e8f0', borderRadius: '0px', boxShadow: 'none'}} />
                <Area type="monotone" dataKey="sales" stroke="#0f172a" fill="#cbd5e1" strokeWidth={2} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          <div className="w-1/3 flex flex-col justify-center space-y-8">
            <div>
              <h4 className="text-accent font-bold text-lg mb-2">LE PROBLÈME</h4>
              <p className="text-slate-700 text-sm">
                La courbe de vente est exponentielle tardive. Cela indique un <strong>manque de "Fear Of Missing Out" (FOMO)</strong> précoce et une proposition de valeur mal comprise avant l'urgence de l'événement.
              </p>
            </div>
            <div className="bg-slate-50 p-6 border-l-4 border-primary">
              <div className="text-3xl font-bold text-primary mb-1">50%</div>
              <div className="text-xs uppercase tracking-widest text-slate-500">du Chiffre d'Affaires</div>
              <div className="text-sm text-slate-700 mt-2">Réalisé sur les 6 derniers jours.</div>
            </div>
          </div>
        </div>
      </Slide>

      {/* SLIDE 4: PILIERS STRATÉGIQUES */}
      <Slide isActive={currentSlide === 3} isPrev={currentSlide > 3}>
        <div className="slide-header">
          <h2 className="slide-title">Piliers Stratégiques 2026</h2>
          <span className="slide-subtitle">Cadre d'Intervention</span>
        </div>
        <div className="grid grid-cols-3 gap-0 border border-slate-200 h-2/3">
          <div className="p-8 border-r border-slate-200 hover:bg-slate-50 transition-colors">
            <div className="text-4xl font-serif text-slate-200 mb-6">I</div>
            <h3 className="text-lg font-bold text-primary mb-4 uppercase">Segmenter</h3>
            <p className="text-sm text-slate-600 mb-6">
              Ne plus parler à "tout le monde". Créer deux tunnels de conversion distincts.
            </p>
            <ul className="text-sm space-y-3">
              <li className="flex items-start gap-2">
                <span className="text-accent font-bold">A.</span>
                <span className="text-slate-700"><strong>Profil Tech :</strong> Cherche l'innovation, le code, le futur.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent font-bold">B.</span>
                <span className="text-slate-700"><strong>Profil Créatif :</strong> Cherche l'inspiration, l'outil, l'usage.</span>
              </li>
            </ul>
          </div>
          <div className="p-8 border-r border-slate-200 hover:bg-slate-50 transition-colors">
            <div className="text-4xl font-serif text-slate-200 mb-6">II</div>
            <h3 className="text-lg font-bold text-primary mb-4 uppercase">Éduquer</h3>
            <p className="text-sm text-slate-600 mb-6">
              Transformer l'intérêt en désir par la preuve. Le contenu doit apporter de la valeur <i>avant</i> l'achat.
            </p>
            <ul className="text-sm space-y-3">
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span className="text-slate-700">Webinaires "Teaser"</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span className="text-slate-700">Études de cas clients</span>
              </li>
            </ul>
          </div>
          <div className="p-8 hover:bg-slate-50 transition-colors">
            <div className="text-4xl font-serif text-slate-200 mb-6">III</div>
            <h3 className="text-lg font-bold text-primary mb-4 uppercase">Accélérer</h3>
            <p className="text-sm text-slate-600 mb-6">
              Utiliser des leviers psychologiques pour forcer la décision d'achat anticipée.
            </p>
            <ul className="text-sm space-y-3">
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span className="text-slate-700">Prix progressifs (Yield)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span className="text-slate-700">Bonus exclusifs "Early Bird"</span>
              </li>
            </ul>
          </div>
        </div>
      </Slide>

      {/* SLIDE 5: PLAN D'ACTION - PHASE 1 */}
      <Slide isActive={currentSlide === 4} isPrev={currentSlide > 4}>
        <div className="slide-header">
          <h2 className="slide-title">Plan d'Action : Phase 1 (Awareness)</h2>
          <span className="slide-subtitle">Novembre - Décembre</span>
        </div>
        <div className="flex gap-8 h-3/4">
          <div className="w-1/3 bg-slate-50 p-8 border border-slate-200">
            <h3 className="text-lg font-bold text-primary mb-6 border-b border-slate-200 pb-2">OBJECTIFS</h3>
            <ul className="space-y-4">
              <li className="flex justify-between items-center">
                <span className="text-sm text-slate-600">Portée (Reach)</span>
                <span className="font-bold text-primary">50k+</span>
              </li>
              <li className="flex justify-between items-center">
                <span className="text-sm text-slate-600">Leads Qualifiés</span>
                <span className="font-bold text-primary">2,000</span>
              </li>
              <li className="flex justify-between items-center">
                <span className="text-sm text-slate-600">Ventes Early Bird</span>
                <span className="font-bold text-primary">150</span>
              </li>
            </ul>
          </div>
          <div className="w-2/3 space-y-6">
            <div>
              <h4 className="font-bold text-primary mb-2">1. CAMPAGNE "THE SHIFT"</h4>
              <p className="text-sm text-slate-600 mb-2">
                Série de contenus courts (LinkedIn/Instagram) mettant en avant le changement de paradigme de l'IA.
              </p>
              <div className="flex gap-2">
                <span className="text-xs bg-slate-100 px-2 py-1 border border-slate-200">Vidéo Manifeste</span>
                <span className="text-xs bg-slate-100 px-2 py-1 border border-slate-200">Interviews Speakers</span>
              </div>
            </div>
            <div className="h-px bg-slate-100"></div>
            <div>
              <h4 className="font-bold text-primary mb-2">2. WEBINAIRE D'OUVERTURE</h4>
              <p className="text-sm text-slate-600 mb-2">
                "L'état de l'art de l'IA Créative en 2026". Gratuit, sur inscription.
              </p>
              <div className="key-insight mt-2">
                <p className="insight-text text-sm not-italic text-slate-600">
                  <span className="font-bold text-accent">Tactique :</span> L'ouverture de la billetterie "Super Early Bird" se fait <strong>uniquement</strong> à la fin du webinaire pour les présents.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Slide>

      {/* SLIDE 6: PLAN D'ACTION - PHASE 2 */}
      <Slide isActive={currentSlide === 5} isPrev={currentSlide > 5}>
        <div className="slide-header">
          <h2 className="slide-title">Plan d'Action : Phase 2 (Conversion)</h2>
          <span className="slide-subtitle">Janvier - Février</span>
        </div>
        <div className="grid grid-cols-2 gap-12 h-3/4">
          <div>
            <h3 className="text-lg font-bold text-primary mb-6">LEVIERS D'ACTIVATION</h3>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-slate-100 flex items-center justify-center font-serif font-bold text-xl text-slate-400">A</div>
                <div>
                  <h4 className="font-bold text-primary text-sm">Retargeting Granulaire</h4>
                  <p className="text-xs text-slate-600 mt-1">
                    Ciblage des visiteurs du site n'ayant pas acheté. Publicités témoignages ("Social Proof").
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-slate-100 flex items-center justify-center font-serif font-bold text-xl text-slate-400">B</div>
                <div>
                  <h4 className="font-bold text-primary text-sm">Emailing Séquencé</h4>
                  <p className="text-xs text-slate-600 mt-1">
                    Séquence de 5 emails "Soap Opera" : Problème > Agitation > Solution > Offre.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-slate-100 flex items-center justify-center font-serif font-bold text-xl text-slate-400">C</div>
                <div>
                  <h4 className="font-bold text-primary text-sm">Partenariats Influence</h4>
                  <p className="text-xs text-slate-600 mt-1">
                    Activation des communautés des speakers (Kit média fourni clé en main).
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-slate-50 p-8 border border-slate-200">
            <h3 className="text-lg font-bold text-primary mb-6">CALENDRIER DES PRIX</h3>
            <div className="relative pt-4">
              <div className="absolute left-4 top-0 bottom-0 w-px bg-slate-300"></div>
              <div className="space-y-8 relative">
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-white border-2 border-slate-300 flex items-center justify-center text-xs font-bold z-10">1</div>
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <span className="font-bold text-sm">Super Early Bird</span>
                      <span className="font-mono text-sm text-slate-500">299€</span>
                    </div>
                    <div className="text-xs text-slate-500">Jusqu'au 31 Déc.</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-white border-2 border-slate-300 flex items-center justify-center text-xs font-bold z-10">2</div>
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <span className="font-bold text-sm">Early Bird</span>
                      <span className="font-mono text-sm text-slate-500">499€</span>
                    </div>
                    <div className="text-xs text-slate-500">Jusqu'au 31 Jan.</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-white border-2 border-primary flex items-center justify-center text-xs font-bold text-primary z-10">3</div>
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <span className="font-bold text-primary text-sm">Regular</span>
                      <span className="font-mono text-sm text-primary font-bold">699€</span>
                    </div>
                    <div className="text-xs text-slate-500">Février</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Slide>

      {/* SLIDE 7: BUDGET & ROI */}
      <Slide isActive={currentSlide === 6} isPrev={currentSlide > 6}>
        <div className="slide-header">
          <h2 className="slide-title">Allocation Budgétaire</h2>
          <span className="slide-subtitle">Investissement & Retour</span>
        </div>
        <div className="flex flex-col h-3/4">
          <div className="flex-1 mb-8">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="border-b-2 border-primary">
                  <th className="py-3 font-bold text-primary uppercase tracking-wider">Canal</th>
                  <th className="py-3 font-bold text-primary uppercase tracking-wider text-right">Budget</th>
                  <th className="py-3 font-bold text-primary uppercase tracking-wider text-right">% Total</th>
                  <th className="py-3 font-bold text-primary uppercase tracking-wider text-right">CPA Cible</th>
                </tr>
              </thead>
              <tbody className="text-slate-700">
                <tr className="border-b border-slate-200">
                  <td className="py-3">Paid Social (Meta/LinkedIn)</td>
                  <td className="py-3 text-right font-mono">25,000 €</td>
                  <td className="py-3 text-right font-mono">55%</td>
                  <td className="py-3 text-right font-mono">45 €</td>
                </tr>
                <tr className="border-b border-slate-200">
                  <td className="py-3">Paid Search (Google)</td>
                  <td className="py-3 text-right font-mono">8,000 €</td>
                  <td className="py-3 text-right font-mono">18%</td>
                  <td className="py-3 text-right font-mono">35 €</td>
                </tr>
                <tr className="border-b border-slate-200">
                  <td className="py-3">Production Contenu</td>
                  <td className="py-3 text-right font-mono">8,000 €</td>
                  <td className="py-3 text-right font-mono">18%</td>
                  <td className="py-3 text-right font-mono">-</td>
                </tr>
                <tr className="border-b border-slate-200">
                  <td className="py-3">Outils & Tech</td>
                  <td className="py-3 text-right font-mono">4,000 €</td>
                  <td className="py-3 text-right font-mono">9%</td>
                  <td className="py-3 text-right font-mono">-</td>
                </tr>
                <tr className="bg-slate-50 font-bold text-primary">
                  <td className="py-4 pl-2">TOTAL</td>
                  <td className="py-4 text-right font-mono pr-2">45,000 €</td>
                  <td className="py-4 text-right font-mono pr-2">100%</td>
                  <td className="py-4 text-right font-mono pr-2">42 € (moy)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="h-32 bg-slate-50 border border-slate-200 p-6 flex items-center justify-between">
            <div>
              <div className="text-xs uppercase tracking-widest text-slate-500 mb-1">Chiffre d'Affaires Prévisionnel</div>
              <div className="text-3xl font-bold text-primary">205,000 €</div>
            </div>
            <div className="h-full w-px bg-slate-300 mx-8"></div>
            <div>
              <div className="text-xs uppercase tracking-widest text-slate-500 mb-1">Marge Brute Marketing</div>
              <div className="text-3xl font-bold text-primary">160,000 €</div>
            </div>
            <div className="h-full w-px bg-slate-300 mx-8"></div>
            <div>
              <div className="text-xs uppercase tracking-widest text-slate-500 mb-1">ROI Marketing</div>
              <div className="text-3xl font-bold text-accent">x4.55</div>
            </div>
          </div>
        </div>
      </Slide>

      {/* SLIDE 8: TIMELINE */}
      <Slide isActive={currentSlide === 7} isPrev={currentSlide > 7}>
        <div className="slide-header">
          <h2 className="slide-title">Calendrier de Déploiement</h2>
          <span className="slide-subtitle">Q4 2025 - Q1 2026</span>
        </div>
        <div className="relative h-3/4 pt-12">
          <div className="absolute top-8 left-0 right-0 h-px bg-slate-300"></div>
          <div className="grid grid-cols-4 gap-4 h-full">
            {/* NOV */}
            <div className="relative border-l border-slate-200 pl-4">
              <div className="absolute -top-3 left-0 w-2 h-2 bg-primary rounded-full -translate-x-1/2"></div>
              <h3 className="font-bold text-primary mb-6">NOVEMBRE</h3>
              <div className="space-y-2">
                <div className="bg-slate-100 p-3 text-xs border-l-2 border-slate-400">
                  <strong>14/11</strong> : Kick-off Stratégie
                </div>
                <div className="bg-slate-100 p-3 text-xs border-l-2 border-slate-400">
                  <strong>26/11</strong> : Validation Assets
                </div>
              </div>
            </div>
            {/* DEC */}
            <div className="relative border-l border-slate-200 pl-4">
              <div className="absolute -top-3 left-0 w-2 h-2 bg-primary rounded-full -translate-x-1/2"></div>
              <h3 className="font-bold text-primary mb-6">DÉCEMBRE</h3>
              <div className="space-y-2">
                <div className="bg-blue-50 p-3 text-xs border-l-2 border-blue-500">
                  <strong>05/12</strong> : Lancement "The Shift"
                </div>
                <div className="bg-blue-50 p-3 text-xs border-l-2 border-blue-500">
                  <strong>15/12</strong> : Webinaire & Ouverture
                </div>
              </div>
            </div>
            {/* JAN */}
            <div className="relative border-l border-slate-200 pl-4">
              <div className="absolute -top-3 left-0 w-2 h-2 bg-primary rounded-full -translate-x-1/2"></div>
              <h3 className="font-bold text-primary mb-6">JANVIER</h3>
              <div className="space-y-2">
                <div className="bg-red-50 p-3 text-xs border-l-2 border-red-500">
                  <strong>10/01</strong> : Accélération Ads
                </div>
                <div className="bg-red-50 p-3 text-xs border-l-2 border-red-500">
                  <strong>31/01</strong> : Fin Early Bird
                </div>
              </div>
            </div>
            {/* FEB */}
            <div className="relative border-l border-slate-200 pl-4">
              <div className="absolute -top-3 left-0 w-2 h-2 bg-primary rounded-full -translate-x-1/2"></div>
              <h3 className="font-bold text-primary mb-6">FÉVRIER</h3>
              <div className="space-y-2">
                <div className="bg-slate-100 p-3 text-xs border-l-2 border-slate-800">
                  <strong>15/02</strong> : Last Call
                </div>
                <div className="bg-primary text-white p-3 text-xs">
                  <strong>26/02</strong> : EVENT DAY
                </div>
              </div>
            </div>
          </div>
        </div>
      </Slide>

      {/* SLIDE 9: NEXT STEPS */}
      <Slide isActive={currentSlide === 8} isPrev={currentSlide > 8}>
        <div className="h-full flex flex-col justify-center items-center max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-serif text-primary mb-8">Prochaines Étapes</h2>
          <p className="text-slate-600 mb-12 leading-relaxed">
            Pour tenir le calendrier de lancement au 5 décembre, les décisions suivantes sont requises ce jour :
          </p>
          <div className="grid grid-cols-2 gap-6 w-full text-left mb-12">
            <div className="border border-slate-200 p-6 hover:border-primary transition-colors cursor-pointer">
              <div className="flex items-center gap-4 mb-2">
                <div className="w-6 h-6 border border-slate-300 rounded flex items-center justify-center"></div>
                <h3 className="font-bold text-primary">Validation Budget</h3>
              </div>
              <p className="text-xs text-slate-500 pl-10">Enveloppe de 45k€ pour Q1 2026.</p>
            </div>
            <div className="border border-slate-200 p-6 hover:border-primary transition-colors cursor-pointer">
              <div className="flex items-center gap-4 mb-2">
                <div className="w-6 h-6 border border-slate-300 rounded flex items-center justify-center"></div>
                <h3 className="font-bold text-primary">Validation Axe Créatif</h3>
              </div>
              <p className="text-xs text-slate-500 pl-10">Direction "Human First" validée.</p>
            </div>
          </div>
          <Button className="bg-primary text-white px-8 py-6 text-lg rounded-none hover:bg-slate-800">
            VALIDER LA STRATÉGIE
          </Button>
        </div>
      </Slide>
    </div>
  );
}
