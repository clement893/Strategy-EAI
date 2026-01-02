import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useContent } from "@/contexts/ContentContext";
import EditableField from "./EditableField";

export default function ExecutiveSummary() {
  const { content } = useContent();
  
  return (
    <section id="executive-summary" className="py-32 relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-16 mb-24">
          <div className="md:w-1/3">
            <h2 className="text-5xl font-sans font-bold mb-4">01</h2>
            <h3 className="text-4xl font-serif italic mb-8">Sommaire exécutif</h3>
            <p className="text-white/60 leading-relaxed mb-6">
              Entertain-AI s'est imposé comme l'événement de référence en intelligence artificielle appliquée aux <strong className="text-white/80">Industries Culturelles et Créatives (ICC)</strong> au Québec.
            </p>
            <p className="text-white/60 leading-relaxed mb-6">
              L'édition 2025 a généré <strong className="text-white/80">
                <EditableField path="executiveSummary.year2025Sold" value={content.executiveSummary.year2025Sold} type="number" /> billets vendus
              </strong> et <strong className="text-white/80">
                <EditableField path="executiveSummary.year2025Given" value={content.executiveSummary.year2025Given} type="number" /> billets donnés
              </strong> (partenaires, médias, conférenciers), pour un total de <strong className="text-white/80">
                <EditableField path="executiveSummary.year2025Total" value={content.executiveSummary.year2025Total} type="number" /> inscriptions
              </strong> et des revenus de <strong className="text-white/80">
                <EditableField path="executiveSummary.year2025Revenue" value={content.executiveSummary.year2025Revenue} type="number" /> $
              </strong>.
            </p>
            <p className="text-white/60 leading-relaxed mb-8">
              L'analyse révèle une concentration critique des inscriptions : <strong className="text-red-300">
                <EditableField path="executiveSummary.concentrationFeb" value={content.executiveSummary.concentrationFeb} /> ont été prises en février
              </strong>, dont <strong className="text-red-300">
                <EditableField path="executiveSummary.concentrationLastWeek" value={content.executiveSummary.concentrationLastWeek} /> durant la dernière semaine
              </strong> avant l'événement. Cette dynamique présente un risque majeur pour 2026.
            </p>
            
            <div className="bg-white/5 border border-white/10 p-6 rounded-lg">
              <h4 className="font-sans text-xs uppercase tracking-widest text-white/50 mb-4">Dates clés</h4>
              <div className="space-y-3">
                <div>
                  <p className="text-xs text-white/50 font-sans uppercase tracking-wider mb-1">Événement</p>
                  <p className="text-lg font-serif italic">
                    <EditableField path="executiveSummary.eventDate" value={content.executiveSummary.eventDate} />
                  </p>
                </div>
                <div>
                  <p className="text-xs text-white/50 font-sans uppercase tracking-wider mb-1">Lieu</p>
                  <p className="text-lg font-serif italic">
                    <EditableField path="executiveSummary.eventLocation" value={content.executiveSummary.eventLocation} />
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors duration-500">
              <CardHeader>
                <CardTitle className="font-sans text-sm uppercase tracking-widest text-white/50">Objectif Principal 2026</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-6xl font-serif italic mb-2 text-green-300">
                  <EditableField path="executiveSummary.objective2026" value={content.executiveSummary.objective2026} type="number" />
                </div>
                <p className="text-sm text-white/70 mb-6">Billets vendus</p>
                <div className="text-3xl font-serif italic mb-2 text-green-300">
                  <EditableField path="executiveSummary.objectiveIncrease" value={content.executiveSummary.objectiveIncrease} />
                </div>
                <p className="text-sm text-white/70">vs 2025</p>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors duration-500">
              <CardHeader>
                <CardTitle className="font-sans text-sm uppercase tracking-widest text-white/50">Revenus Estimés</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-6xl font-serif italic mb-2">
                  <EditableField path="executiveSummary.revenue2026" value={content.executiveSummary.revenue2026} type="number" />$
                </div>
                <p className="text-sm text-white/70 mb-6">Revenus billets</p>
                <div className="text-3xl font-serif italic mb-2">
                  <EditableField path="executiveSummary.roi" value={content.executiveSummary.roi} />
                </div>
                <p className="text-sm text-white/70">ROI marketing direct</p>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors duration-500">
              <CardHeader>
                <CardTitle className="font-sans text-sm uppercase tracking-widest text-white/50">Budget Marketing</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-6xl font-serif italic mb-2">
                  <EditableField path="executiveSummary.budget" value={content.executiveSummary.budget} type="number" />$
                </div>
                <p className="text-sm text-white/70 mb-6">Budget total</p>
                <div className="text-3xl font-serif italic mb-2">
                  <EditableField path="executiveSummary.cpa" value={content.executiveSummary.cpa} type="number" />$
                </div>
                <p className="text-sm text-white/70">CPA moyen</p>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors duration-500">
              <CardHeader>
                <CardTitle className="font-sans text-sm uppercase tracking-widest text-white/50">Scénarios</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <div className="text-2xl font-serif italic mb-1 text-blue-300">
                    <EditableField path="executiveSummary.objectiveStretched" value={content.executiveSummary.objectiveStretched} type="number" />
                  </div>
                  <p className="text-xs text-white/50">Objectif étiré</p>
                </div>
                <div>
                  <div className="text-2xl font-serif italic mb-1 text-orange-300">
                    <EditableField path="executiveSummary.objectiveMinimal" value={content.executiveSummary.objectiveMinimal} type="number" />
                  </div>
                  <p className="text-xs text-white/50">Objectif minimal</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="bg-white/5 border border-white/10 p-8 rounded-lg">
          <h4 className="font-sans text-sm uppercase tracking-widest text-white/50 mb-6">Objectifs 2026 : Redistribution temporelle</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex justify-between items-end mb-3">
                <span className="text-sm text-white/70">Décembre 2025</span>
                <span className="text-3xl font-serif italic">
                  <EditableField path="objectives.decemberSales" value={content.objectives.decemberSales} type="number" />
                </span>
              </div>
              <div className="h-3 bg-white/10 rounded-full overflow-hidden mb-2">
                <div className="h-full bg-blue-500" style={{ width: `${content.objectives.decemberPercentage}%` }} />
              </div>
              <p className="text-xs text-white/50">
                <EditableField path="objectives.decemberPercentage" value={content.objectives.decemberPercentage} type="number" /> % des ventes
              </p>
            </div>

            <div>
              <div className="flex justify-between items-end mb-3">
                <span className="text-sm text-white/70">Janvier 2026</span>
                <span className="text-3xl font-serif italic">
                  <EditableField path="objectives.januarySales" value={content.objectives.januarySales} type="number" />
                </span>
              </div>
              <div className="h-3 bg-white/10 rounded-full overflow-hidden mb-2">
                <div className="h-full bg-green-500" style={{ width: `${content.objectives.januaryPercentage}%` }} />
              </div>
              <p className="text-xs text-white/50">
                <EditableField path="objectives.januaryPercentage" value={content.objectives.januaryPercentage} type="number" /> % des ventes
              </p>
            </div>

            <div>
              <div className="flex justify-between items-end mb-3">
                <span className="text-sm text-white/70">Février 2026</span>
                <span className="text-3xl font-serif italic">
                  <EditableField path="objectives.februarySales" value={content.objectives.februarySales} type="number" />
                </span>
              </div>
              <div className="h-3 bg-white/10 rounded-full overflow-hidden mb-2">
                <div className="h-full bg-orange-500" style={{ width: `${content.objectives.februaryPercentage}%` }} />
              </div>
              <p className="text-xs text-white/50">
                <EditableField path="objectives.februaryPercentage" value={content.objectives.februaryPercentage} type="number" /> % des ventes
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
