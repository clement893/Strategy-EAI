import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

const data = [
  { name: "La Presse", value: 15000, color: "#ffffff" },
  { name: "LinkedIn Ads", value: 5000, color: "rgba(255,255,255,0.6)" },
  { name: "Meta Ads", value: 4000, color: "rgba(255,255,255,0.4)" },
  { name: "Google Ads", value: 4000, color: "rgba(255,255,255,0.2)" },
];

export default function Budget() {
  return (
    <section id="budget" className="py-32 bg-white/5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-5xl font-sans font-bold mb-4">04</h2>
            <h3 className="text-4xl font-serif italic mb-8">Budget & ROI</h3>
            <p className="text-white/60 leading-relaxed mb-12">
              Un investissement stratégique de 28 000 $ focalisé sur les canaux à fort impact pour générer un ROI projeté de 3,5:1.
            </p>

            <div className="space-y-8">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <span className="font-serif italic text-xl">Budget Total</span>
                <span className="font-sans font-bold text-2xl">28 000 $</span>
              </div>
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <span className="font-serif italic text-xl">Revenus Projetés</span>
                <span className="font-sans font-bold text-2xl">45 000 $</span>
              </div>
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <span className="font-serif italic text-xl">ROI Estimé</span>
                <span className="font-sans font-bold text-2xl text-green-400">3,5:1</span>
              </div>
            </div>
          </div>

          <div className="h-[400px] relative">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  innerRadius={100}
                  outerRadius={140}
                  paddingAngle={5}
                  dataKey="value"
                  stroke="none"
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1a1a1a', border: 'none', borderRadius: '0px' }}
                  itemStyle={{ color: '#fff', fontFamily: 'Inter' }}
                  formatter={(value: number) => `${value.toLocaleString()} $`}
                />
              </PieChart>
            </ResponsiveContainer>
            
            {/* Legend */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
              <span className="block text-xs font-sans uppercase tracking-widest text-white/50 mb-1">Investissement</span>
              <span className="block text-3xl font-serif italic">28k$</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
          {data.map((item, index) => (
            <div key={index} className="text-center">
              <div className="w-3 h-3 rounded-full mx-auto mb-4" style={{ backgroundColor: item.color }} />
              <h4 className="font-serif italic text-lg mb-1">{item.name}</h4>
              <p className="text-sm text-white/50">{item.value.toLocaleString()} $</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
