import { AlertTriangle, MousePointerClick, Eye, Layout } from "lucide-react";

export default function WebsiteAudit() {
  return (
    <section id="audit" className="py-32 bg-white/5 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="mb-16">
          <h2 className="text-5xl font-sans font-bold mb-4">08</h2>
          <h3 className="text-4xl font-serif italic mb-8">Audit du site actuel</h3>
          <p className="text-white/60 leading-relaxed max-w-2xl">
            Analyse critique de <span className="text-white font-medium">entertain-ai.com</span> : pourquoi la plateforme actuelle freine la conversion et dilue le message.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          
          {/* Colonne Gauche : Problèmes identifiés */}
          <div className="space-y-8">
            <div className="bg-rose-500/10 border border-rose-500/20 p-6 rounded-lg">
              <div className="flex items-start gap-4">
                <Layout className="w-6 h-6 text-rose-400 mt-1 shrink-0" />
                <div>
                  <h4 className="font-bold text-lg mb-2 text-rose-200">Hiérarchie visuelle confuse</h4>
                  <p className="text-white/60 text-sm leading-relaxed">
                    L'utilisateur est bombardé d'informations concurrentes (compteur, multiples boutons, logos partenaires) sans fil conducteur. L'œil ne sait pas où se poser, augmentant la charge cognitive et le taux de rebond.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-rose-500/10 border border-rose-500/20 p-6 rounded-lg">
              <div className="flex items-start gap-4">
                <MousePointerClick className="w-6 h-6 text-rose-400 mt-1 shrink-0" />
                <div>
                  <h4 className="font-bold text-lg mb-2 text-rose-200">Friction à la conversion</h4>
                  <p className="text-white/60 text-sm leading-relaxed">
                    Les appels à l'action (CTA) manquent de contraste et de clarté. Le parcours d'achat n'est pas intuitif, demandant trop d'efforts à l'utilisateur pour comprendre "quoi faire ensuite".
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-rose-500/10 border border-rose-500/20 p-6 rounded-lg">
              <div className="flex items-start gap-4">
                <Eye className="w-6 h-6 text-rose-400 mt-1 shrink-0" />
                <div>
                  <h4 className="font-bold text-lg mb-2 text-rose-200">Lisibilité & Accessibilité</h4>
                  <p className="text-white/60 text-sm leading-relaxed">
                    Problèmes de contraste majeurs (texte blanc sur fond clair ou images complexes). La proposition de valeur unique est noyée visuellement, rendant le message principal inaudible.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Colonne Droite : Recommandations */}
          <div className="bg-white/5 border border-white/10 p-8 rounded-lg h-full">
            <h4 className="font-serif italic text-2xl mb-8">Recommandations Prioritaires</h4>
            <ul className="space-y-6">
              <li className="flex gap-4 items-start">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold shrink-0 mt-1">1</span>
                <div>
                  <strong className="block text-white mb-1">Simplifier la "Hero Section"</strong>
                  <p className="text-white/50 text-sm">Une seule accroche, un seul bouton d'action principal (CTA) clair et contrasté.</p>
                </div>
              </li>
              <li className="flex gap-4 items-start">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold shrink-0 mt-1">2</span>
                <div>
                  <strong className="block text-white mb-1">Structurer le contenu</strong>
                  <p className="text-white/50 text-sm">Adopter une mise en page en "Z" ou "F" pour guider l'œil naturellement vers la conversion.</p>
                </div>
              </li>
              <li className="flex gap-4 items-start">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold shrink-0 mt-1">3</span>
                <div>
                  <strong className="block text-white mb-1">Renforcer le contraste</strong>
                  <p className="text-white/50 text-sm">Utiliser des fonds sombres unis ou des filtres sur les images pour garantir la lisibilité du texte à 100%.</p>
                </div>
              </li>
            </ul>
            
            <div className="mt-12 pt-8 border-t border-white/10">
              <p className="font-serif italic text-white/80 text-center">
                "Un site web ne doit pas être une vitrine statique, mais un moteur de conversion actif."
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
