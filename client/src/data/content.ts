export interface ContentData {
  hero: {
    subtitle: string;
    title: string;
    titleItalic: string;
    description: string;
    preparedBy: string;
    date: string;
  };
  executiveSummary: {
    year2025Sold: number;
    year2025Given: number;
    year2025Total: number;
    year2025Revenue: number;
    concentrationFeb: string;
    concentrationLastWeek: string;
    eventDate: string;
    eventLocation: string;
    objective2026: number;
    objectiveIncrease: string;
    revenue2026: number;
    budget: number;
    roi: string;
    cpa: number;
    avgPrice: number;
    objectiveStretched: number;
    objectiveMinimal: number;
  };
  objectives: {
    decemberSales: number;
    decemberPercentage: number;
    januarySales: number;
    januaryPercentage: number;
    februarySales: number;
    februaryPercentage: number;
  };
  // Ajoutez d'autres sections ici selon les besoins
}

export const defaultContent: ContentData = {
  hero: {
    subtitle: "Préparé par Nukleo • Décembre 2025",
    title: "Stratégie Marketing",
    titleItalic: "Entertain-AI 2026",
    description: "Plan d'action pour maximiser les ventes, redistribuer la croissance et solidifier le leadership IA au sein des ICC du Québec",
    preparedBy: "Nukleo",
    date: "Décembre 2025"
  },
  executiveSummary: {
    year2025Sold: 225,
    year2025Given: 762,
    year2025Total: 987,
    year2025Revenue: 7875,
    concentrationFeb: "94,2 %",
    concentrationLastWeek: "80,6 %",
    eventDate: "18-19 février 2026",
    eventLocation: "Palais des congrès de Montréal",
    objective2026: 750,
    objectiveIncrease: "+233%",
    revenue2026: 24750,
    budget: 28000,
    roi: "0,88:1",
    cpa: 37.33,
    avgPrice: 33,
    objectiveStretched: 850,
    objectiveMinimal: 500
  },
  objectives: {
    decemberSales: 90,
    decemberPercentage: 12,
    januarySales: 300,
    januaryPercentage: 40,
    februarySales: 360,
    februaryPercentage: 48
  }
};
