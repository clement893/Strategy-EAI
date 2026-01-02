import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Code, Briefcase } from "lucide-react";

export default function Personas() {
  const personas = [
    {
      icon: Users,
      title: "Les créateurs et travailleurs culturels",
      target: "40 % des ventes = 300 billets",
      age: "25-40 ans",
      sectors: "Arts visuels, musique, cinéma, jeux vidéo, design, médias",
      revenue: "35 000 $ à 80 000 $ annuel",
      motivations: [
        "Découvrir comment l'IA transforme leur discipline créative",
        "Apprendre des outils IA pratiques (génération d'images, musique, vidéo)",
        "Réseauter avec d'autres créateurs et collaborateurs potentiels",
        "Se positionner à l'avant-garde de leur industrie"
      ],
      barriers: [
        "Budget limité (freelance, artistes émergents)",
        "Doute sur l'applicabilité concrète à leur pratique",
        "Perception que l'IA menace leur métier"
      ],
      activation: [
        "Rabais précoces agressifs (-50 %, -30 %)",
        "Témoignages de créateurs ayant adopté l'IA",
        "Démonstrations concrètes d'outils IA créatifs",
        "Offres de groupe pour collectifs/studios"
      ]
    },
    {
      icon: Code,
      title: "Les technologues de la création",
      target: "35 % des ventes = 262 billets",
      age: "28-45 ans",
      sectors: "Tech, startups créatives, agences digitales, studios de jeux/VFX",
      revenue: "60 000 $ à 120 000 $ annuel",
      motivations: [
        "Veille technologique sur les dernières avancées IA créatives",
        "Identifier des opportunités d'innovation produit",
        "Réseauter avec des talents et partenaires potentiels",
        "Développement professionnel et formation continue"
      ],
      barriers: [
        "Concurrence des événements tech génériques",
        "Doute sur la profondeur technique du contenu",
        "Procrastination (attente de la programmation complète)"
      ],
      activation: [
        "Campagnes LinkedIn ciblées (fonctions tech)",
        "Webinaire technique de prévisualisation",
        "Annonce précoce des conférenciers techniques",
        "Offres corporatives (billets multiples)"
      ]
    },
    {
      icon: Briefcase,
      title: "Les décideurs de l'écosystème ICC",
      target: "25 % des ventes = 188 billets",
      age: "35-55 ans",
      sectors: "Investissement, institutions culturelles, politiques publiques, incubateurs",
      revenue: "100 000 $ à 200 000 $ annuel",
      motivations: [
        "Comprendre les implications stratégiques de l'IA pour l'écosystème ICC",
        "Identifier des opportunités d'investissement ou de soutien",
        "Réseautage de haut niveau avec pairs et leaders",
        "Positionnement comme acteur clé de la transformation numérique culturelle"
      ],
      barriers: [
        "Processus d'approbation interne (budgets, calendrier)",
        "Doute sur la pertinence sectorielle",
        "Manque de visibilité (canaux B2B)"
      ],
      activation: [
        "Partenariat La Presse (crédibilité éditoriale)",
        "Campagnes LinkedIn B2B (InMail, contenu sponsorisé)",
        "Outreach direct aux organisations culturelles majeures",
        "Offres corporatives et facilités de facturation"
      ]
    }
  ];

  return (
    <section id="personas" className="py-32 relative">
      <div className="container mx-auto px-4">
        <div className="mb-16">
          <h2 className="text-5xl font-sans font-bold mb-4">03</h2>
          <h3 className="text-4xl font-serif italic mb-6">Segmentation et personas</h3>
          <p className="text-white/60 leading-relaxed max-w-3xl">
            Notre stratégie marketing cible trois segments distincts au sein de l'écosystème des Industries Culturelles et Créatives (ICC) du Québec. Chaque persona représente un groupe avec des motivations, des freins et des stratégies d'activation spécifiques.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {personas.map((persona, index) => (
            <Card key={index} className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-500 group">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-white/10 rounded-lg group-hover:bg-white/20 transition-colors">
                    <persona.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <CardTitle className="font-sans text-xs uppercase tracking-widest text-white/50">Persona {index + 1}</CardTitle>
                  </div>
                </div>
                <h4 className="text-2xl font-serif italic leading-tight mb-3">{persona.title}</h4>
                <div className="text-3xl font-sans font-bold text-green-300">{persona.target.split('=')[0]}</div>
                <p className="text-sm text-white/50">{persona.target.split('=')[1]}</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h5 className="font-sans text-xs uppercase tracking-widest text-white/50 mb-3">Profil</h5>
                  <div className="space-y-2 text-sm text-white/70">
                    <p><span className="text-white/50">Âge:</span> {persona.age}</p>
                    <p><span className="text-white/50">Secteurs:</span> {persona.sectors}</p>
                    <p><span className="text-white/50">Revenu:</span> {persona.revenue}</p>
                  </div>
                </div>

                <div>
                  <h5 className="font-sans text-xs uppercase tracking-widest text-white/50 mb-3">Motivations</h5>
                  <ul className="space-y-2">
                    {persona.motivations.map((motivation, i) => (
                      <li key={i} className="text-xs text-white/60 flex items-start gap-2">
                        <span className="text-green-300 mt-1">•</span>
                        <span>{motivation}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h5 className="font-sans text-xs uppercase tracking-widest text-white/50 mb-3">Freins à l'achat</h5>
                  <ul className="space-y-2">
                    {persona.barriers.map((barrier, i) => (
                      <li key={i} className="text-xs text-white/60 flex items-start gap-2">
                        <span className="text-red-300 mt-1">•</span>
                        <span>{barrier}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h5 className="font-sans text-xs uppercase tracking-widest text-white/50 mb-3">Stratégie d'activation</h5>
                  <ul className="space-y-2">
                    {persona.activation.map((action, i) => (
                      <li key={i} className="text-xs text-white/60 flex items-start gap-2">
                        <span className="text-blue-300 mt-1">•</span>
                        <span>{action}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
