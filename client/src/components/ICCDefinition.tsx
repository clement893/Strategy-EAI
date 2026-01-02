import { Card, CardContent } from "@/components/ui/card";
import { Sparkles } from "lucide-react";

export default function ICCDefinition() {
  return (
    <section className="py-16 relative">
      <div className="container mx-auto px-4">
        <Card className="bg-gradient-to-br from-blue-500/10 to-indigo-500/10 border-blue-500/20 backdrop-blur-sm">
          <CardContent className="p-8 md:p-12">
            <div className="flex items-start gap-6">
              <div className="p-4 bg-blue-500/20 rounded-lg flex-shrink-0">
                <Sparkles className="w-8 h-8 text-blue-300" />
              </div>
              <div>
                <h3 className="text-2xl font-serif italic mb-4 text-blue-200">
                  Industries Culturelles et Créatives (ICC) : Notre positionnement unique
                </h3>
                <p className="text-white/80 leading-relaxed mb-4">
                  <strong className="text-white">Industries Culturelles et Créatives (ICC)</strong> : Secteur regroupant les arts, le divertissement, les médias, le design et la création de contenu. Entertain-AI se positionne comme l'événement de référence en intelligence artificielle appliquée aux ICC au Québec, distinguant clairement son offre des conférences IA orientées entreprise ou recherche académique.
                </p>
                <div className="bg-white/5 border border-white/10 p-6 rounded-lg">
                  <h4 className="font-sans text-xs uppercase tracking-widest text-white/50 mb-3">Pourquoi ce positionnement ?</h4>
                  <p className="text-white/70 leading-relaxed text-sm">
                    Alors que la plupart des événements IA se concentrent sur les applications d'entreprise (finance, santé, logistique) ou la recherche académique, Entertain-AI explore l'intersection créative : <strong className="text-white">jeux vidéo, cinéma, musique, design, arts visuels, médias interactifs</strong>. Ce positionnement unique attire un public passionné et diversifié, moins saturé par les événements corporatifs traditionnels.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
