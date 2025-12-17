import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const data = [
  { date: "1 Dec", sales: 0 },
  { date: "15 Dec", sales: 5 },
  { date: "1 Jan", sales: 12 },
  { date: "15 Jan", sales: 25 },
  { date: "1 Feb", sales: 45 },
  { date: "10 Feb", sales: 120 },
  { date: "15 Feb", sales: 350 },
  { date: "18 Feb", sales: 850 },
  { date: "20 Feb", sales: 987 },
];

export default function SalesChart() {
  return (
    <div className="h-[300px] w-full mt-8">
      <h4 className="font-sans text-xs uppercase tracking-widest text-white/50 mb-6">Courbe des ventes cumulées 2025</h4>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          <defs>
            <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#ffffff" stopOpacity={0.3}/>
              <stop offset="95%" stopColor="#ffffff" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" vertical={false} />
          <XAxis 
            dataKey="date" 
            stroke="rgba(255,255,255,0.3)" 
            tick={{ fill: 'rgba(255,255,255,0.5)', fontSize: 10, fontFamily: 'Inter' }}
            tickLine={false}
            axisLine={false}
          />
          <YAxis 
            stroke="rgba(255,255,255,0.3)" 
            tick={{ fill: 'rgba(255,255,255,0.5)', fontSize: 10, fontFamily: 'Inter' }}
            tickLine={false}
            axisLine={false}
          />
          <Tooltip 
            contentStyle={{ backgroundColor: '#1a1a1a', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '4px' }}
            itemStyle={{ color: '#fff', fontFamily: 'Inter', fontSize: '12px' }}
            labelStyle={{ color: 'rgba(255,255,255,0.5)', marginBottom: '4px', fontSize: '10px', textTransform: 'uppercase' }}
          />
          <Area 
            type="monotone" 
            dataKey="sales" 
            stroke="#ffffff" 
            strokeWidth={2}
            fillOpacity={1} 
            fill="url(#colorSales)" 
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
