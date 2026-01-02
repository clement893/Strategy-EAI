import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Gift, Newspaper, Users, Building2, Trophy } from "lucide-react";

export default function FreeTickets() {
  const categories = [
    {
      icon: Newspaper,
      title: "Partenaires médias",
      billets: 80,
      valeur: 40000,
      details: [
        "La Presse : 30 billets → Couverture éditoriale (15 000 $)",
        "Médias locaux : 20 billets → Articles/mentions (10 000 $)",
        "Influenceurs/créateurs : 20 billets → Contenu organique (10 000 $)",
        "Podcasts/YouTube : 10 billets → Interviews (5 000 $)"
      ]
    },
    {
      icon: Users,
      title: "Conférenciers et experts",
      billets: 80,
      valeur: 40000,
      details: [
        "Conférenciers principaux : 50 billets (2 × 25 conférenciers)",
        "Panélistes/modérateurs : 20 billets",
        "Experts ateliers : 10 billets"
      ]
    },
    {
      icon: Building2,
      title: "Partenaires corporatifs",
      billets: 60,
      valeur: 30000,
      details: [
        "Sponsors platine : 30 billets → Commandite 15 000 $",
        "Sponsors or : 20 billets → Commandite 10 000 $",
        "Partenaires techniques : 10 billets → Services 5 000 $"
      ]
    },
    {
      icon: Trophy,
      title: "Ambassadeurs et promotion",
      billets: 30,
      valeur: 15000,
      details: [
        "Ambassadeurs réseaux sociaux : 20 billets",
        "Concours/giveaways : 10 billets"
      ]
    }
  ];

  const totalBillets = categories.reduce((sum, cat) => sum + cat.billets, 0);
  const totalValeur = categories.reduce((sum, cat) => sum + cat.valeur, 0);

  return (
    <section id="free-tickets" className="py-32 relative">
      <div className="container mx-auto px-4">
        <div className="mb-16">
          <h2 className="text-5xl font-sans font-bold mb-4">09</h2>
          <h3 className="text-4xl font-serif italic mb-8">Stratégie de distribution des billets gratuits</h3>
          <p className="text-white/60 leading-relaxed max-w-3xl mb-8">
            Les billets donnés (250 sur 1 000) ne sont pas une perte, mais un <strong className="text-white">investissement stratégique</strong> générant une valeur équivalente ou supérieure au budget marketing. Chaque billet gratuit est attribué à des partenaires qui apportent une contribution tangible à l'événement.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border-green-500/20">
              <CardContent className="p-8 text-center">
                <Gift className="w-12 h-12 mx-auto mb-4 text-green-300" />
                <div className="text-5xl font-serif italic mb-2 text-green-300">{totalBillets}</div>
                <p className="text-sm text-white/70">Billets donnés (25 % du total)</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-500/10 to-indigo-500/10 border-blue-500/20">
              <CardContent className="p-8 text-center">
                <div className="text-5xl font-serif italic mb-2 text-blue-300">{totalValeur.toLocaleString()}$</div>
                <p className="text-sm text-white/70">Valeur totale générée</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border-purple-500/20">
              <CardContent className="p-8 text-center">
                <div className="text-5xl font-serif italic mb-2 text-purple-300">4,5:1</div>
                <p className="text-sm text-white/70">Ratio valeur/coût (125 000 $ / 28 000 $)</p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((category, index) => (
            <Card key={index} className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-500 group">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-white/10 rounded-lg group-hover:bg-white/20 transition-colors">
                    <category.icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-2xl font-serif italic">{category.title}</CardTitle>
                  </div>
                </div>
                <div className="flex items-end justify-between">
                  <div>
                    <div className="text-4xl font-sans font-bold text-green-300">{category.billets}</div>
                    <p className="text-xs text-white/50">billets donnés</p>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-serif italic">{category.valeur.toLocaleString()}$</div>
                    <p className="text-xs text-white/50">valeur générée</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <h5 className="font-sans text-xs uppercase tracking-widest text-white/50 mb-3">Détail de la distribution</h5>
                <ul className="space-y-2">
                  {category.details.map((detail, i) => (
                    <li key={i} className="text-sm text-white/60 flex items-start gap-2">
                      <span className="text-green-300 mt-1 flex-shrink-0">•</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20 p-8 rounded-lg">
          <h4 className="font-serif italic text-2xl mb-4 text-green-200">Pourquoi cette approche fonctionne</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-white/70 leading-relaxed">
            <div>
              <p className="mb-4">
                Les billets gratuits ne sont pas une concession, mais un <strong className="text-white">levier stratégique multiplié</strong>. Chaque billet donné à un partenaire média, un conférencier ou un sponsor génère une valeur mesurable en termes de :
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-green-300 mt-1">✓</span>
                  <span>Crédibilité éditoriale et couverture médiatique</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-300 mt-1">✓</span>
                  <span>Contenu de qualité et expertise reconnue</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-300 mt-1">✓</span>
                  <span>Commandites et soutien financier direct</span>
                </li>
              </ul>
            </div>
            <div>
              <p className="mb-4">
                Le ratio valeur/coût de <strong className="text-white">4,5:1</strong> démontre que chaque dollar investi dans le marketing génère 4,50 $ de valeur combinée (revenus billets + valeur billets donnés).
              </p>
              <div className="bg-white/5 border border-white/10 p-4 rounded-lg">
                <p className="text-xs text-white/50 mb-2">Calcul de la valeur totale</p>
                <p className="text-sm">Revenus billets : <span className="font-serif italic text-lg">24 750 $</span></p>
                <p className="text-sm">Valeur billets donnés : <span className="font-serif italic text-lg">125 000 $</span></p>
                <p className="text-sm font-bold text-white mt-2">Total valeur : <span className="font-serif italic text-2xl text-green-300">149 750 $</span></p>
                <p className="text-xs text-white/50 mt-2">vs investissement 28 000 $</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
