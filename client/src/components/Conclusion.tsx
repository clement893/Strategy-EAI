import { useContent } from "@/contexts/ContentContext";
import EditableField from "./EditableField";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

export default function Conclusion() {
  const { content } = useContent();
  const { conclusion } = content;

  const successFactors = [
    "Budget marketing structuré de 13 000 $",
    "Base de données active de 987 participants 2025",
    "Partenariat La Presse gratuit (3,9M visiteurs mensuels)",
    "Optimisation technique et retargeting professionnel",
    "Distribution temporelle équilibrée (réduction risque février)"
  ];

  return (
    <section id="conclusion" className="py-32 relative bg-white/[0.02]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <EditableField
              path="conclusion.sectionNumber"
              className="text-5xl font-sans font-bold mb-4"
            />
            <EditableField
              path="conclusion.sectionTitle"
              className="text-4xl font-serif italic mb-8"
            />
            <div className="text-white/60 leading-relaxed text-lg">
              <EditableField path="conclusion.intro" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border-green-500/20">
              <CardContent className="p-8 text-center">
                <div className="text-6xl font-serif italic mb-2 text-green-300">
                  {conclusion.targetSales}
                </div>
                <p className="text-sm text-white/70">Billets vendus</p>
                <p className="text-xs text-white/50 mt-2">
                  <EditableField path="conclusion.growthPercentage" /> vs 2025
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-500/10 to-indigo-500/10 border-blue-500/20">
              <CardContent className="p-8 text-center">
                <div className="text-6xl font-serif italic mb-2 text-blue-300">
                  {conclusion.revenue.toLocaleString()} $
                </div>
                <p className="text-sm text-white/70">Revenus billets</p>
                <p className="text-xs text-white/50 mt-2">Prix moyen 250 $</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border-purple-500/20">
              <CardContent className="p-8 text-cen                <div className="text-6xl font-serif italic mb-2 text-purple-300">
                  9,62:1
                </div>
                <p className="text-sm text-white/70">ROI marketing</p>
                <p className="text-xs text-white/50 mt-2">125 000 $ / 13 000 $</p>            </Card>
          </div>

          <div className="bg-white/5 border border-white/10 p-8 rounded-lg mb-12">
            <h4 className="font-serif italic text-2xl mb-6 text-white flex items-center gap-3">
              <CheckCircle2 className="w-6 h-6 text-green-300" />
              Facteurs clés de succès
            </h4>
            <div className="space-y-4">
              {successFactors.map((factor, index) => (
                <div key={index} className="flex items-start gap-4 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-green-300" />
                  </div>
                  <p className="text-white/80 leading-relaxed">{factor}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <div className="inline-block bg-white/5 border border-white/10 p-8 rounded-lg">
              <p className="text-white/40 font-serif italic text-xl mb-6">
                "Une stratégie ambitieuse mais réaliste pour transformer Entertain-AI en leader incontesté de l'IA appliquée aux ICC au Québec."
              </p>
              <div className="pt-6 border-t border-white/10">
                <p className="text-xs font-sans uppercase tracking-widest text-white/30 mb-2">Contact</p>
                <p className="text-lg font-sans font-bold">Nukleo</p>
                <p className="text-sm text-white/50">Stratégie et Marketing Digital</p>
                <p className="text-xs text-white/30 mt-2">Décembre 2025</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
