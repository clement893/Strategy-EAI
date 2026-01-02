import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default function Analysis() {
  return (
    <section id="analysis" className="py-32 relative bg-white/[0.02]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-16 mb-24">
          <div className="md:w-1/3">
            <h2 className="text-5xl font-sans font-bold mb-4">02</h2>
            <h3 className="text-4xl font-serif italic mb-8">Analyse de la situation 2025</h3>
            <p className="text-white/60 leading-relaxed mb-8">
              L'analyse des données réelles de ventes 2025 révèle des tendances critiques qui doivent orienter la stratégie 2026. L'édition 2025 a permis de valider le marché mais a révélé une fragilité structurelle majeure.
            </p>
            
            <div className="bg-white/5 border border-white/10 p-6 rounded-lg mb-8">
              <h4 className="font-sans text-xs uppercase tracking-widest text-white/50 mb-4">Distribution réelle des inscriptions</h4>
              <Table>
                <TableHeader>
                  <TableRow className="border-white/10 hover:bg-transparent">
                    <TableHead className="text-white/70 font-serif italic">Catégorie</TableHead>
                    <TableHead className="text-right text-white/70 font-serif italic">Nombre</TableHead>
                    <TableHead className="text-right text-white/70 font-serif italic">%</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow className="border-white/10 hover:bg-white/5">
                    <TableCell className="font-sans text-sm">Billets vendus</TableCell>
                    <TableCell className="text-right font-sans text-sm">225</TableCell>
                    <TableCell className="text-right font-sans text-sm text-white/50">22,8%</TableCell>
                  </TableRow>
                  <TableRow className="border-white/10 hover:bg-white/5">
                    <TableCell className="font-sans text-sm">Billets donnés</TableCell>
                    <TableCell className="text-right font-sans text-sm">762</TableCell>
                    <TableCell className="text-right font-sans text-sm text-white/50">77,2%</TableCell>
                  </TableRow>
                  <TableRow className="border-t border-white/20 hover:bg-transparent">
                    <TableCell className="font-serif italic text-white">Total inscriptions</TableCell>
                    <TableCell className="text-right font-serif italic text-white">987</TableCell>
                    <TableCell className="text-right font-serif italic text-white">100%</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>

            <div className="bg-white/5 border border-white/10 p-6 rounded-lg">
              <h4 className="font-sans text-xs uppercase tracking-widest text-white/50 mb-4">Distribution temporelle 2025</h4>
              <Table>
                <TableHeader>
                  <TableRow className="border-white/10 hover:bg-transparent">
                    <TableHead className="text-white/70 font-serif italic">Période</TableHead>
                    <TableHead className="text-right text-white/70 font-serif italic">Billets</TableHead>
                    <TableHead className="text-right text-white/70 font-serif italic">%</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow className="border-white/10 hover:bg-white/5">
                    <TableCell className="font-sans text-sm">Décembre 2024</TableCell>
                    <TableCell className="text-right font-sans text-sm">3</TableCell>
                    <TableCell className="text-right font-sans text-sm text-white/50">1,3%</TableCell>
                  </TableRow>
                  <TableRow className="border-white/10 hover:bg-white/5">
                    <TableCell className="font-sans text-sm">Janvier 2025 (1-17)</TableCell>
                    <TableCell className="text-right font-sans text-sm">6</TableCell>
                    <TableCell className="text-right font-sans text-sm text-white/50">2,7%</TableCell>
                  </TableRow>
                  <TableRow className="border-white/10 hover:bg-white/5">
                    <TableCell className="font-sans text-sm">Janvier 2025 (18-31)</TableCell>
                    <TableCell className="text-right font-sans text-sm">5</TableCell>
                    <TableCell className="text-right font-sans text-sm text-white/50">2,2%</TableCell>
                  </TableRow>
                  <TableRow className="border-white/10 hover:bg-white/5 bg-white/10">
                    <TableCell className="font-sans text-sm font-bold text-red-300">Février 2025</TableCell>
                    <TableCell className="text-right font-sans text-sm font-bold text-red-300">211</TableCell>
                    <TableCell className="text-right font-sans text-sm font-bold text-red-300">93,8%</TableCell>
                  </TableRow>
                  <TableRow className="border-t border-white/20 hover:bg-transparent">
                    <TableCell className="font-serif italic text-white">Total</TableCell>
                    <TableCell className="text-right font-serif italic text-white">225</TableCell>
                    <TableCell className="text-right font-serif italic text-white">100%</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </div>
          
          <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors duration-500">
              <CardHeader>
                <CardTitle className="font-sans text-sm uppercase tracking-widest text-white/50">Performance 2025</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-5xl font-serif italic mb-2">225</div>
                <p className="text-sm text-white/70 mb-6">Billets vendus</p>
                <div className="text-5xl font-serif italic mb-2">7 875$</div>
                <p className="text-sm text-white/70">Revenus générés</p>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors duration-500">
              <CardHeader>
                <CardTitle className="font-sans text-sm uppercase tracking-widest text-white/50">Le Problème</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-5xl font-serif italic mb-2 text-red-300">94,2%</div>
                <p className="text-sm text-white/70 mb-6">Des ventes en Février</p>
                <div className="text-5xl font-serif italic mb-2 text-red-300">80,6%</div>
                <p className="text-sm text-white/70">Durant la dernière semaine</p>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors duration-500 md:col-span-2">
              <CardHeader>
                <CardTitle className="font-sans text-sm uppercase tracking-widest text-white/50">Constats critiques</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h5 className="font-serif italic text-lg mb-2 text-red-300">1. Ratio vendus/donnés déséquilibré</h5>
                  <p className="text-sm text-white/60">Seulement 22,8 % des inscriptions ont généré des revenus. Ce ratio doit être inversé en 2026 pour assurer la viabilité financière de l'événement.</p>
                </div>
                <div>
                  <h5 className="font-serif italic text-lg mb-2 text-red-300">2. Procrastination massive</h5>
                  <p className="text-sm text-white/60">93,8 % des ventes concentrées en février, dont 80,6 % durant la dernière semaine. Cette dynamique génère une pression logistique intense et limite la prévisibilité budgétaire.</p>
                </div>
                <div>
                  <h5 className="font-serif italic text-lg mb-2 text-red-300">3. Sous-exploitation des paliers tarifaires précoces</h5>
                  <p className="text-sm text-white/60">Seulement 14 billets vendus durant les périodes de rabais (-50 %, -30 %, -20 %), alors que ces périodes représentent deux mois complets.</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors duration-500 md:col-span-2">
              <CardHeader>
                <CardTitle className="font-sans text-sm uppercase tracking-widest text-white/50">Opportunités 2026</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="text-2xl font-serif italic text-green-300">987</div>
                  <div>
                    <p className="text-sm text-white/80 font-medium">Base de données active</p>
                    <p className="text-xs text-white/50">Taux de conversion attendu de 35-40 % (345-395 billets)</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="text-2xl font-serif italic text-green-300">28k$</div>
                  <div>
                    <p className="text-sm text-white/80 font-medium">Budget marketing structuré</p>
                    <p className="text-xs text-white/50">vs estimation 5 000-10 000 $ en 2025</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="text-2xl font-serif italic text-green-300">3,9M</div>
                  <div>
                    <p className="text-sm text-white/80 font-medium">Partenariat La Presse</p>
                    <p className="text-xs text-white/50">Visiteurs uniques mensuels</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
