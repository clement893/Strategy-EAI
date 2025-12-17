import { Card, CardContent } from "@/components/ui/card";

const teamMembers = [
  {
    name: "Margaux",
    role: "Directrice de Création",
    image: "/images/margaux.jpg",
    color: "text-stone-400"
  },
  {
    name: "Camille",
    role: "Production Graphique",
    image: "/images/camille.png",
    color: "text-rose-400"
  },
  {
    name: "Omar",
    role: "Coordination",
    image: "/images/omar.png",
    color: "text-slate-400"
  },
  {
    name: "Maxime",
    role: "Achat Média",
    image: "/images/maxime.png",
    color: "text-emerald-400"
  },
  {
    name: "Clément",
    role: "Direction de Projet",
    image: "/images/clement.jpg",
    color: "text-amber-400"
  }
];

export default function Team() {
  return (
    <section id="team" className="py-24 bg-background relative border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif italic text-white mb-4">
            L'Équipe <span className="text-slate-400">Nukleo</span>
          </h2>
          <p className="text-white/60 font-sans max-w-2xl mx-auto">
            Votre équipe de projet dédiée pour EAI 2026.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="group relative">
              <div className="relative overflow-hidden rounded-xl aspect-[3/4] mb-4 border border-white/10 transition-all duration-500 group-hover:border-white/30 group-hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
              </div>
              
              <div className="text-center">
                <h3 className="text-xl font-serif text-white mb-1">{member.name}</h3>
                <p className={`text-xs font-sans uppercase tracking-widest ${member.color}`}>
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
