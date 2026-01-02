import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function MediaPlan() {
  const mediaData = [
    { canal: "LinkedIn Ads", budget: 5000, percentage: 18, billets: 150, cpa: 33 },
    { canal: "Meta Ads", budget: 4000, percentage: 14, billets: 120, cpa: 33 },
    { canal: "Google Ads", budget: 4000, percentage: 14, billets: 100, cpa: 40 },
    { canal: "La Presse (total)", budget: 15000, percentage: 54, billets: 200, cpa: 75 },
    { canal: "Webinaire + outils", budget: 500, percentage: 2, billets: 50, cpa: 10 },
    { canal: "Fidèles (email)", budget: 0, percentage: 0, billets: 130, cpa: 0 }
  ];

  const totalBudget = mediaData.reduce((sum, item) => sum + item.budget, 0);
  const totalBillets = mediaData.reduce((sum, item) => sum + item.billets, 0);
  const cpaMoyen = totalBudget / totalBillets;

  return (
    <section id="media-plan" className="py-32 relative">
      <div className="container mx-auto px-4">
        <div className="mb-16">
          <h2 className="text-5xl font-sans font-bold mb-4">07</h2>
          <h3 className="text-4xl font-serif italic mb-8">Plan média détaillé et distribution budgétaire</h3>
          <p className="text-white/60 leading-relaxed max-w-3xl">
            Répartition stratégique du budget marketing de 28 000 $ sur 6 canaux d'acquisition, avec un focus majeur sur le partenariat La Presse pour maximiser la crédibilité et la portée auprès des décideurs.
          </p>
        </div>

        <div className="bg-white/5 border border-white/10 p-8 rounded-lg mb-12">
          <h4 className="font-sans text-sm uppercase tracking-widest text-white/50 mb-6">Distribution budgétaire par canal</h4>
          <Table>
            <TableHeader>
              <TableRow className="border-white/10 hover:bg-transparent">
                <TableHead className="text-white/70 font-serif italic">Canal</TableHead>
                <TableHead className="text-right text-white/70 font-serif italic">Budget</TableHead>
                <TableHead className="text-right text-white/70 font-serif italic">% Budget</TableHead>
                <TableHead className="text-right text-white/70 font-serif italic">Billets attendus</TableHead>
                <TableHead className="text-right text-white/70 font-serif italic">CPA</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mediaData.map((item, index) => (
                <TableRow key={index} className="border-white/10 hover:bg-white/5">
                  <TableCell className="font-sans text-sm">{item.canal}</TableCell>
                  <TableCell className="text-right font-sans text-sm">
                    {item.budget > 0 ? `${item.budget.toLocaleString()} $` : '0 $'}
                  </TableCell>
                  <TableCell className="text-right font-sans text-sm text-white/50">{item.percentage} %</TableCell>
                  <TableCell className="text-right font-sans text-sm">{item.billets}</TableCell>
                  <TableCell className="text-right font-sans text-sm text-white/50">
                    {item.cpa > 0 ? `${item.cpa} $` : '0 $'}
                  </TableCell>
                </TableRow>
              ))}
              <TableRow className="border-t border-white/20 hover:bg-transparent">
                <TableCell className="font-serif italic text-white font-bold">Total</TableCell>
                <TableCell className="text-right font-serif italic text-white font-bold">
                  {totalBudget.toLocaleString()} $
                </TableCell>
                <TableCell className="text-right font-serif italic text-white font-bold">100 %</TableCell>
                <TableCell className="text-right font-serif italic text-white font-bold">{totalBillets}</TableCell>
                <TableCell className="text-right font-serif italic text-white font-bold">
                  {cpaMoyen.toFixed(2)} $
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors duration-500">
            <CardHeader>
              <CardTitle className="font-sans text-sm uppercase tracking-widest text-white/50">Canal le plus efficace</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-serif italic mb-2 text-green-300">Webinaire</div>
              <p className="text-sm text-white/70 mb-2">CPA : 10 $</p>
              <p className="text-xs text-white/50">50 billets attendus avec un investissement minimal</p>
            </CardContent>
          </Card>

          <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors duration-500">
            <CardHeader>
              <CardTitle className="font-sans text-sm uppercase tracking-widest text-white/50">Canal le plus volumineux</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-serif italic mb-2 text-blue-300">La Presse</div>
              <p className="text-sm text-white/70 mb-2">Budget : 15 000 $ (54 %)</p>
              <p className="text-xs text-white/50">200 billets attendus avec crédibilité éditoriale maximale</p>
            </CardContent>
          </Card>

          <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors duration-500">
            <CardHeader>
              <CardTitle className="font-sans text-sm uppercase tracking-widest text-white/50">Acquisition organique</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-serif italic mb-2">130</div>
              <p className="text-sm text-white/70 mb-2">Billets fidèles (CPA : 0 $)</p>
              <p className="text-xs text-white/50">Base de données de 987 participants 2025</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
