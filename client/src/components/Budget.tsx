import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Budget() {
  const budgetData = [
    { poste: "La Presse (Article XTRA)", montant: 10805, phase: "Phase 2" },
    { poste: "La Presse (Infolettres x3)", montant: 4195, phase: "Phase 2" },
    { poste: "LinkedIn Ads", montant: 5000, phase: "Phase 2" },
    { poste: "Meta Ads (Facebook/Instagram)", montant: 4000, phase: "Phase 2" },
    { poste: "Google Ads", montant: 4000, phase: "Phase 2" },
    { poste: "Retargeting (Meta + Google)", montant: 2000, phase: "Phase 3" },
    { poste: "Webinaire (production + promo)", montant: 500, phase: "Phase 2" },
    { poste: "Optimisation technique (Phase 1)", montant: 500, phase: "Phase 1" },
    { poste: "Urgence finale (Phase 3)", montant: 1000, phase: "Phase 3" }
  ];

  const totalBudget = budgetData.reduce((sum, item) => sum + item.montant, 0);

  return (
    <section id="budget" className="py-32 bg-white/[0.02]">
      <div className="container mx-auto px-4">
        <div className="mb-16">
          <h2 className="text-5xl font-sans font-bold mb-4">05</h2>
          <h3 className="text-4xl font-serif italic mb-8">Budget prévisionnel détaillé</h3>
          <p className="text-white/60 leading-relaxed max-w-3xl">
            Un investissement stratégique de 28 000 $ réparti sur trois phases, avec un focus majeur sur le partenariat La Presse et les campagnes publicitaires digitales pour maximiser la portée et la conversion.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors duration-500">
            <CardHeader>
              <CardTitle className="font-sans text-sm uppercase tracking-widest text-white/50">Budget Total</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-6xl font-serif italic mb-2">28 000$</div>
              <p className="text-sm text-white/70">Investissement marketing 2026</p>
            </CardContent>
          </Card>

          <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors duration-500">
            <CardHeader>
              <CardTitle className="font-sans text-sm uppercase tracking-widest text-white/50">Revenus Billets</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-6xl font-serif italic mb-2 text-green-300">24 750$</div>
              <p className="text-sm text-white/70">Revenus directs estimés</p>
            </CardContent>
          </Card>

          <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors duration-500">
            <CardHeader>
              <CardTitle className="font-sans text-sm uppercase tracking-widest text-white/50">ROI Marketing</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-6xl font-serif italic mb-2">0,88:1</div>
              <p className="text-sm text-white/70">Retour sur investissement direct</p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-white/5 border border-white/10 p-8 rounded-lg mb-12">
          <h4 className="font-sans text-sm uppercase tracking-widest text-white/50 mb-6">Répartition budgétaire détaillée</h4>
          <Table>
            <TableHeader>
              <TableRow className="border-white/10 hover:bg-transparent">
                <TableHead className="text-white/70 font-serif italic">Poste budgétaire</TableHead>
                <TableHead className="text-white/70 font-serif italic">Phase</TableHead>
                <TableHead className="text-right text-white/70 font-serif italic">Montant</TableHead>
                <TableHead className="text-right text-white/70 font-serif italic">% du total</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {budgetData.map((item, index) => (
                <TableRow key={index} className="border-white/10 hover:bg-white/5">
                  <TableCell className="font-sans text-sm">{item.poste}</TableCell>
                  <TableCell className="font-sans text-sm text-white/50">{item.phase}</TableCell>
                  <TableCell className="text-right font-sans text-sm">{item.montant.toLocaleString()} $</TableCell>
                  <TableCell className="text-right font-sans text-sm text-white/50">
                    {((item.montant / totalBudget) * 100).toFixed(1)} %
                  </TableCell>
                </TableRow>
              ))}
              <TableRow className="border-t border-white/20 hover:bg-transparent">
                <TableCell className="font-serif italic text-white font-bold">Total</TableCell>
                <TableCell></TableCell>
                <TableCell className="text-right font-serif italic text-white font-bold">
                  {totalBudget.toLocaleString()} $
                </TableCell>
                <TableCell className="text-right font-serif italic text-white font-bold">100 %</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="font-sans text-sm uppercase tracking-widest text-white/50">Phase 1</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-serif italic mb-2">500$</div>
              <p className="text-sm text-white/70">Optimisation technique</p>
              <p className="text-xs text-white/50 mt-2">1,8 % du budget</p>
            </CardContent>
          </Card>

          <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="font-sans text-sm uppercase tracking-widest text-white/50">Phase 2</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-serif italic mb-2 text-blue-300">24 500$</div>
              <p className="text-sm text-white/70">Amplification massive</p>
              <p className="text-xs text-white/50 mt-2">87,5 % du budget</p>
            </CardContent>
          </Card>

          <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="font-sans text-sm uppercase tracking-widest text-white/50">Phase 3</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-serif italic mb-2">3 000$</div>
              <p className="text-sm text-white/70">Intensification finale</p>
              <p className="text-xs text-white/50 mt-2">10,7 % du budget</p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 p-8 border border-white/10 bg-white/5 rounded-lg">
          <h4 className="font-serif italic text-2xl mb-4 text-white">Note stratégique : Partenariat La Presse</h4>
          <p className="text-white/60 leading-relaxed mb-4">
            Le partenariat La Presse représente <strong className="text-white">53,6 % du budget total</strong> (15 000 $) et constitue le pilier de la stratégie d'acquisition. Ce n'est pas une dépense média traditionnelle, mais un <strong className="text-white">add-on stratégique focalisé sur le numérique</strong>.
          </p>
          <p className="text-white/60 leading-relaxed">
            L'objectif est de crédibiliser l'événement auprès des décideurs et du grand public via un contenu de marque premium (article XTRA) et une distribution ciblée massive (3,9 millions de visiteurs uniques mensuels). Cette approche vise à générer une visibilité qualifiée impossible à obtenir via les canaux publicitaires traditionnels.
          </p>
        </div>
      </div>
    </section>
  );
}
