import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default function Timeline() {
  const calendar = [
    { semaine: "S1", dates: "16-22 déc", phase: "Phase 1", actions: "Optimisation site, email fidèles, annonce têtes d'affiche", objectif: 30 },
    { semaine: "S2", dates: "23-31 déc", phase: "Phase 1", actions: "Ambassadeurs, contenu organique, fin -50% (31 déc)", objectif: 60 },
    { semaine: "S3", dates: "1-12 jan", phase: "Phase 2", actions: "Lancement pub LinkedIn/Meta/Google, email fidèles #2", objectif: 80 },
    { semaine: "S4", dates: "13-17 jan", phase: "Phase 2", actions: "Article La Presse (12 jan), webinaire (15 jan), fin -30% (17 jan)", objectif: 80 },
    { semaine: "S5", dates: "18-26 jan", phase: "Phase 2", actions: "Retargeting, partenariats, Infolettre La Presse 1 (26 jan)", objectif: 80 },
    { semaine: "S6", dates: "27-31 jan", phase: "Phase 2-3", actions: "Fin -20% (31 jan), amplification", objectif: 60 },
    { semaine: "S7", dates: "1-9 fév", phase: "Phase 3", actions: "Infolettres La Presse 2+3 (2, 9 fév), retargeting intensif", objectif: 150 },
    { semaine: "S8", dates: "10-17 fév", phase: "Phase 3", actions: "Fin La Presse (17 fév), offre flash, push final", objectif: 150 },
    { semaine: "S9", dates: "18 fév", phase: "ÉVÉNEMENT", actions: "ENTERTAIN-AI 2026 - Palais des congrès", objectif: null }
  ];

  const totalObjectif = calendar.reduce((sum, item) => sum + (item.objectif || 0), 0);

  return (
    <section id="timeline" className="py-32 relative bg-white/[0.02]">
      <div className="container mx-auto px-4">
        <div className="mb-16">
          <h2 className="text-5xl font-sans font-bold mb-4">08</h2>
          <h3 className="text-4xl font-serif italic mb-8">Calendrier d'exécution détaillé</h3>
          <p className="text-white/60 leading-relaxed max-w-3xl">
            Planning semaine par semaine du 16 décembre 2025 au 18 février 2026, avec actions prioritaires et objectifs de billets vendus pour chaque période. Ce calendrier assure une exécution rigoureuse et une redistribution équilibrée des ventes.
          </p>
        </div>

        <div className="bg-white/5 border border-white/10 p-8 rounded-lg mb-12">
          <h4 className="font-sans text-sm uppercase tracking-widest text-white/50 mb-6">Planning d'exécution (9 semaines)</h4>
          <Table>
            <TableHeader>
              <TableRow className="border-white/10 hover:bg-transparent">
                <TableHead className="text-white/70 font-serif italic">Semaine</TableHead>
                <TableHead className="text-white/70 font-serif italic">Dates</TableHead>
                <TableHead className="text-white/70 font-serif italic">Phase</TableHead>
                <TableHead className="text-white/70 font-serif italic">Actions prioritaires</TableHead>
                <TableHead className="text-right text-white/70 font-serif italic">Objectif billets</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {calendar.map((item, index) => (
                <TableRow 
                  key={index} 
                  className={`border-white/10 hover:bg-white/5 ${item.phase === 'ÉVÉNEMENT' ? 'bg-white/10' : ''}`}
                >
                  <TableCell className="font-sans text-sm font-bold">{item.semaine}</TableCell>
                  <TableCell className="font-sans text-sm text-white/70">{item.dates}</TableCell>
                  <TableCell className="font-sans text-sm">
                    <span className={`px-2 py-1 rounded text-xs ${
                      item.phase === 'Phase 1' ? 'bg-blue-500/20 text-blue-300' :
                      item.phase === 'Phase 2' ? 'bg-green-500/20 text-green-300' :
                      item.phase === 'Phase 2-3' ? 'bg-yellow-500/20 text-yellow-300' :
                      item.phase === 'Phase 3' ? 'bg-orange-500/20 text-orange-300' :
                      'bg-red-500/20 text-red-300'
                    }`}>
                      {item.phase}
                    </span>
                  </TableCell>
                  <TableCell className="font-sans text-sm text-white/60">{item.actions}</TableCell>
                  <TableCell className="text-right font-sans text-sm font-bold">
                    {item.objectif !== null ? item.objectif : 'Ventes sur place'}
                  </TableCell>
                </TableRow>
              ))}
              <TableRow className="border-t border-white/20 hover:bg-transparent">
                <TableCell colSpan={4} className="font-serif italic text-white font-bold">
                  Total objectif billets vendus
                </TableCell>
                <TableCell className="text-right font-serif italic text-white font-bold text-xl">
                  {totalObjectif}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white/5 border border-white/10 p-6 rounded-lg">
            <h5 className="font-sans text-xs uppercase tracking-widest text-white/50 mb-4">Moments clés</h5>
            <ul className="space-y-3 text-sm text-white/70">
              <li className="flex items-start gap-2">
                <span className="text-blue-300 mt-1">•</span>
                <span><strong className="text-white">31 déc :</strong> Fin rabais -50%</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-300 mt-1">•</span>
                <span><strong className="text-white">12 jan :</strong> Article La Presse</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-300 mt-1">•</span>
                <span><strong className="text-white">15 jan :</strong> Webinaire prévisualisation</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-300 mt-1">•</span>
                <span><strong className="text-white">17 jan :</strong> Fin rabais -30%</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-300 mt-1">•</span>
                <span><strong className="text-white">31 jan :</strong> Fin rabais -20%</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-300 mt-1">•</span>
                <span><strong className="text-white">17 fév :</strong> Fin campagne La Presse</span>
              </li>
            </ul>
          </div>

          <div className="bg-white/5 border border-white/10 p-6 rounded-lg">
            <h5 className="font-sans text-xs uppercase tracking-widest text-white/50 mb-4">Répartition temporelle</h5>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-white/70">Décembre (S1-S2)</span>
                  <span className="text-lg font-serif italic">90</span>
                </div>
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-500" style={{ width: '12%' }} />
                </div>
              </div>
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-white/70">Janvier (S3-S6)</span>
                  <span className="text-lg font-serif italic">300</span>
                </div>
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-green-500" style={{ width: '40%' }} />
                </div>
              </div>
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-white/70">Février (S7-S8)</span>
                  <span className="text-lg font-serif italic">360</span>
                </div>
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-orange-500" style={{ width: '48%' }} />
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 p-6 rounded-lg">
            <h5 className="font-sans text-xs uppercase tracking-widest text-white/50 mb-4">Dates de l'événement</h5>
            <div className="text-center py-6">
              <div className="text-5xl font-serif italic mb-2 text-red-300">18-19</div>
              <p className="text-sm text-white/70 mb-4">Février 2026</p>
              <p className="text-xs text-white/50">Palais des congrès de Montréal</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
