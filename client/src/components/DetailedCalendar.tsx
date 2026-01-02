import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const calendarData = [
  { week: "S1", dates: "16-22 déc", phase: "Phase 1", actions: "Optimisation site web, lancement infolettre fidèles, annonce premières têtes d'affiche", goal: "50" },
  { week: "S2", dates: "23-29 déc", phase: "Phase 1", actions: "Activation ambassadeurs, contenu organique, annonce nouveaux conférenciers", goal: "50" },
  { week: "S3", dates: "30 déc-5 jan", phase: "Phase 1-2", actions: "Transition phase 1 à 2, préparation campagnes payantes, contenu organique", goal: "50" },
  { week: "S4", dates: "6-12 jan", phase: "Phase 2", actions: "Lancement campagnes LinkedIn/Meta/Google, deuxième infolettre fidèles", goal: "100" },
  { week: "S5", dates: "13-19 jan", phase: "Phase 2", actions: "Lancement article La Presse XTRA + bannières (12 jan), webinaire gratuit (15 jan), intensification campagnes, fin rabais -30% (17 jan)", goal: "120" },
  { week: "S6", dates: "20-26 jan", phase: "Phase 2", actions: "Retargeting intensif, partenariats communautés tech, relations publiques", goal: "100" },
  { week: "S7", dates: "27 jan-2 fév", phase: "Phase 2-3", actions: "Infolettre La Presse 1 (26 jan) + 2 (2 fév), transition phase 2 à 3, fin rabais -20% (31 jan), amplification campagnes", goal: "130" },
  { week: "S8", dates: "3-9 fév", phase: "Phase 3", actions: "Infolettre La Presse 3 (9 fév), troisième infolettre fidèles, retargeting", goal: "150" },
  { week: "S9", dates: "10-16 fév", phase: "Phase 3", actions: "Offre flash dernière minute, activation participants confirmés", goal: "150" },
  { week: "S10", dates: "17-23 fév", phase: "Phase 3", actions: "Fin campagne La Presse (17 fév), push final, retargeting agressif, urgence 'dernières places'", goal: "184" },
  { week: "S11", dates: "24-28 fév", phase: "Phase 3", actions: "Clôture ventes, derniers rappels", goal: "100" },
];

export default function DetailedCalendar() {
  return (
    <section id="calendar" className="py-32 relative bg-white/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-sans font-bold mb-4">07</h2>
          <h3 className="text-4xl font-serif italic">Calendrier d'Exécution Détaillé</h3>
          <p className="text-white/60 mt-4 max-w-2xl mx-auto">
            Planification hebdomadaire des actions tactiques pour atteindre l'objectif de 1 234 billets.
          </p>
        </div>

        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="border-white/10 hover:bg-transparent">
                <TableHead className="text-white/50 font-sans uppercase tracking-widest w-[80px]">Semaine</TableHead>
                <TableHead className="text-white/50 font-sans uppercase tracking-widest w-[150px]">Dates</TableHead>
                <TableHead className="text-white/50 font-sans uppercase tracking-widest w-[120px]">Phase</TableHead>
                <TableHead className="text-white/50 font-sans uppercase tracking-widest">Actions Prioritaires</TableHead>
                <TableHead className="text-white/50 font-sans uppercase tracking-widest text-right w-[100px]">Obj. Billets</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {calendarData.map((row, index) => (
                <TableRow key={index} className="border-white/5 hover:bg-white/5 transition-colors">
                  <TableCell className="font-sans text-white/70">{row.week}</TableCell>
                  <TableCell className="font-sans text-white/70">{row.dates}</TableCell>
                  <TableCell className="font-sans text-white/70">
                    <span className={`px-2 py-1 rounded text-xs uppercase tracking-wider ${
                      row.phase.includes('Phase 1') ? 'bg-blue-500/20 text-blue-300' :
                      row.phase.includes('Phase 2') ? 'bg-purple-500/20 text-purple-300' :
                      'bg-red-500/20 text-red-300'
                    }`}>
                      {row.phase}
                    </span>
                  </TableCell>
                  <TableCell className="font-serif italic text-white text-lg">{row.actions}</TableCell>
                  <TableCell className="font-sans font-bold text-white text-right">{row.goal}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </section>
  );
}
