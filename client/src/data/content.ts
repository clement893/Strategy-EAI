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
    sectionNumber: string;
    sectionTitle: string;
    intro1: string;
    intro2: string;
    intro3: string;
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
  iccDefinition: {
    title: string;
    definition: string;
    whyTitle: string;
    whyText: string;
  };
  analysis: {
    sectionNumber: string;
    sectionTitle: string;
    subtitle: string;
    intro: string;
    performanceTitle: string;
    performanceIntro: string;
    sold2025: number;
    given2025: number;
    total2025: number;
    revenue2025: number;
    avgPrice2025: number;
    criticalFindingsTitle: string;
    finding1Title: string;
    finding1Text: string;
    finding2Title: string;
    finding2Text: string;
    finding3Title: string;
    finding3Text: string;
    opportunitiesTitle: string;
    opp1: string;
    opp2: string;
    opp3: string;
    opp4: string;
  };
  personas: {
    sectionNumber: string;
    sectionTitle: string;
    intro: string;
    persona1Name: string;
    persona1Percentage: number;
    persona1Target: number;
    persona1Profile: string;
    persona1Motivations: string;
    persona1Barriers: string;
    persona1Strategy: string;
    persona2Name: string;
    persona2Percentage: number;
    persona2Target: number;
    persona2Profile: string;
    persona2Motivations: string;
    persona2Barriers: string;
    persona2Strategy: string;
    persona3Name: string;
    persona3Percentage: number;
    persona3Target: number;
    persona3Profile: string;
    persona3Motivations: string;
    persona3Barriers: string;
    persona3Strategy: string;
  };
  strategy: {
    sectionNumber: string;
    sectionTitle: string;
    intro: string;
    phase1Name: string;
    phase1Dates: string;
    phase1Objective: string;
    phase1Budget: number;
    phase1Revenue: number;
    phase1Description: string;
    phase2Name: string;
    phase2Dates: string;
    phase2Objective: string;
    phase2Budget: number;
    phase2Revenue: number;
    phase2Description: string;
    phase3Name: string;
    phase3Dates: string;
    phase3Objective: string;
    phase3Budget: number;
    phase3Revenue: number;
    phase3Description: string;
  };
  budget: {
    sectionNumber: string;
    sectionTitle: string;
    intro: string;
    totalBudget: number;
    laPresseTitle: string;
    laPresseIntro: string;
    laPresseTotal: number;
  };
  kpis: {
    sectionNumber: string;
    sectionTitle: string;
    intro: string;
    salesTitle: string;
    acquisitionTitle: string;
    brandTitle: string;
  };
  mediaPlan: {
    sectionNumber: string;
    sectionTitle: string;
    intro: string;
    totalBudget: number;
  };
  timeline: {
    sectionNumber: string;
    sectionTitle: string;
    intro: string;
  };
  freeTickets: {
    sectionNumber: string;
    sectionTitle: string;
    intro: string;
    totalTickets: number;
    totalValue: number;
    ratio: string;
    category1Title: string;
    category1Tickets: number;
    category1Value: number;
    category2Title: string;
    category2Tickets: number;
    category2Value: number;
    category3Title: string;
    category3Tickets: number;
    category3Value: number;
    category4Title: string;
    category4Tickets: number;
    category4Value: number;
  };
  riskManagement: {
    sectionNumber: string;
    sectionTitle: string;
    intro: string;
    alertThreshold: number;
    alertDate: string;
    emergencyBudget: number;
  };
  geographicExpansion: {
    sectionNumber: string;
    sectionTitle: string;
    intro: string;
    whyQuebecTitle: string;
    localCPA: number;
    internationalCPA: string;
    localPotential: string;
    year2027Title: string;
    year2027Budget: number;
    year2027Target: number;
    year2027Region: string;
    year2028Title: string;
    year2028Budget: number;
    year2028Target: number;
    year2028Region: string;
  };
  conclusion: {
    sectionNumber: string;
    sectionTitle: string;
    intro: string;
    targetSales: number;
    growthPercentage: string;
    revenue: number;
    valueRatio: string;
    totalValue: number;
    investment: number;
  };
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
    sectionNumber: "01",
    sectionTitle: "Sommaire exécutif",
    intro1: "Entertain-AI s'est imposé comme l'événement de référence en intelligence artificielle appliquée aux Industries Culturelles et Créatives (ICC) au Québec.",
    intro2: "L'édition 2025 a généré",
    intro3: "L'analyse révèle une concentration critique des inscriptions :",
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
  },
  iccDefinition: {
    title: "Industries Culturelles et Créatives (ICC) : Notre positionnement unique",
    definition: "Industries Culturelles et Créatives (ICC) : Secteur regroupant les arts, le divertissement, les médias, le design et la création de contenu. Entertain-AI se positionne comme l'événement de référence en intelligence artificielle appliquée aux ICC au Québec, distinguant clairement son offre des conférences IA orientées entreprise ou recherche académique.",
    whyTitle: "Pourquoi ce positionnement ?",
    whyText: "Alors que la plupart des événements IA se concentrent sur les applications d'entreprise (finance, santé, logistique) ou la recherche académique, Entertain-AI explore l'intersection créative : jeux vidéo, cinéma, musique, design, arts visuels, médias interactifs. Ce positionnement unique attire un public passionné et diversifié, moins saturé par les événements corporatifs traditionnels."
  },
  analysis: {
    sectionNumber: "02",
    sectionTitle: "Analyse de la situation 2025",
    subtitle: "Performance 2025 : Insights clés",
    intro: "L'analyse des données réelles de ventes 2025 révèle des tendances critiques qui doivent orienter la stratégie 2026.",
    performanceTitle: "Distribution réelle des inscriptions",
    performanceIntro: "L'édition 2025 a généré un total de 987 inscriptions, avec une répartition déséquilibrée entre billets vendus et billets donnés.",
    sold2025: 225,
    given2025: 762,
    total2025: 987,
    revenue2025: 7875,
    avgPrice2025: 35,
    criticalFindingsTitle: "Constats critiques",
    finding1Title: "Ratio vendus/donnés déséquilibré",
    finding1Text: "Seulement 22,8 % des inscriptions ont généré des revenus. Ce ratio doit être inversé en 2026 pour assurer la viabilité financière de l'événement.",
    finding2Title: "Procrastination massive",
    finding2Text: "93,8 % des ventes concentrées en février, dont 80,6 % durant la dernière semaine. Cette dynamique génère une pression logistique intense et limite la prévisibilité budgétaire.",
    finding3Title: "Sous-exploitation des paliers tarifaires précoces",
    finding3Text: "Seulement 14 billets vendus durant les périodes de rabais (-50 %, -30 %, -20 %), alors que ces périodes représentent deux mois complets. Cela indique un manque de visibilité et d'urgence durant la phase d'anticipation.",
    opportunitiesTitle: "Opportunités 2026",
    opp1: "Base de données de 987 participants qualifiés",
    opp2: "Notoriété établie dans l'écosystème ICC québécois",
    opp3: "Partenariat La Presse confirmé pour amplification média",
    opp4: "Optimisation technique du site et du funnel de conversion"
  },
  personas: {
    sectionNumber: "03",
    sectionTitle: "Personas et segments cibles",
    intro: "La stratégie 2026 cible trois segments distincts au sein de l'écosystème des Industries Culturelles et Créatives (ICC) du Québec, chacun avec des motivations, freins et stratégies d'activation spécifiques.",
    persona1Name: "Créateurs culturels",
    persona1Percentage: 40,
    persona1Target: 300,
    persona1Profile: "Artistes, designers, musiciens, cinéastes, créateurs de contenu qui explorent l'IA comme outil créatif.",
    persona1Motivations: "Découvrir des outils IA applicables immédiatement, networker avec des pairs créatifs, comprendre l'impact de l'IA sur leur pratique artistique.",
    persona1Barriers: "Budget limité, scepticisme face à la technologie, perception que l'IA menace la créativité humaine.",
    persona1Strategy: "Mettre en avant les cas d'usage créatifs concrets, proposer des ateliers pratiques, offrir des rabais précoces agressifs (-50 %), utiliser des témoignages d'artistes reconnus.",
    persona2Name: "Technologues de la création",
    persona2Percentage: 35,
    persona2Target: 262,
    persona2Profile: "Développeurs, ingénieurs logiciels, data scientists travaillant dans les ICC (jeux vidéo, médias, divertissement).",
    persona2Motivations: "Approfondir leurs compétences techniques en IA, découvrir les dernières innovations, échanger avec des experts de pointe.",
    persona2Barriers: "Offre technique perçue comme trop superficielle, manque de contenu avancé, concurrence d'événements tech généralistes.",
    persona2Strategy: "Annoncer des conférenciers de haut niveau technique, proposer des sessions avancées (deep learning, NLP, computer vision), mettre en avant le positionnement ICC unique.",
    persona3Name: "Décideurs ICC",
    persona3Percentage: 25,
    persona3Target: 188,
    persona3Profile: "Directeurs créatifs, producteurs, gestionnaires de studios, responsables innovation dans les ICC.",
    persona3Motivations: "Comprendre les implications stratégiques de l'IA, identifier des opportunités d'intégration, rencontrer des fournisseurs et partenaires potentiels.",
    persona3Barriers: "Coût perçu vs ROI incertain, manque de temps, besoin de justification auprès de la direction.",
    persona3Strategy: "Partenariat La Presse pour crédibilité éditoriale, mettre en avant le ROI et les cas d'affaires concrets, proposer des billets corporatifs groupés, cibler via LinkedIn Ads."
  },
  strategy: {
    sectionNumber: "04",
    sectionTitle: "Stratégie marketing en 3 phases",
    intro: "La stratégie marketing s'articule autour de trois phases distinctes, chacune avec des objectifs, tactiques et budgets spécifiques. L'objectif global est de redistribuer les ventes sur trois mois pour réduire la concentration critique de février.",
    phase1Name: "Phase 1 : Fondation et anticipation",
    phase1Dates: "16 décembre 2025 - 31 décembre 2025",
    phase1Objective: "90 billets vendus (12 % de l'objectif)",
    phase1Budget: 3500,
    phase1Revenue: 1575,
    phase1Description: "Activation de la base de données fidèles (987 participants 2025), annonce des têtes d'affiche, optimisation du site web et du funnel de conversion, lancement du rabais -50 % jusqu'au 31 décembre.",
    phase2Name: "Phase 2 : Amplification et visibilité",
    phase2Dates: "1 janvier 2026 - 31 janvier 2026",
    phase2Objective: "300 billets vendus (40 % de l'objectif)",
    phase2Budget: 21500,
    phase2Revenue: 8850,
    phase2Description: "Lancement des campagnes payantes (LinkedIn, Meta, Google), activation du partenariat La Presse (article commandité + 3 infolettres), webinaire de prévisualisation, retargeting professionnel, paliers tarifaires -30 % puis -20 %.",
    phase3Name: "Phase 3 : Intensification et urgence",
    phase3Dates: "1 février 2026 - 17 février 2026",
    phase3Objective: "360 billets vendus (48 % de l'objectif)",
    phase3Budget: 3000,
    phase3Revenue: 12600,
    phase3Description: "Amplification budgétaire +30 % sur LinkedIn/Meta, retargeting agressif de tous les visiteurs, messages d'urgence (dernières places, compte à rebours), offre flash 48h mi-février (-15 %), activation des participants confirmés pour partage social."
  },
  budget: {
    sectionNumber: "05",
    sectionTitle: "Budget et répartition",
    intro: "Le budget marketing total de 28 000 $ est réparti stratégiquement sur trois phases et six canaux d'acquisition, avec un focus majeur sur le partenariat La Presse pour maximiser la crédibilité et la portée.",
    totalBudget: 28000,
    laPresseTitle: "Focus : Partenariat La Presse",
    laPresseIntro: "Le partenariat avec La Presse représente 54 % du budget marketing (15 000 $) et constitue le levier principal pour atteindre les décideurs ICC et générer une crédibilité éditoriale maximale.",
    laPresseTotal: 15000
  },
  kpis: {
    sectionNumber: "06",
    sectionTitle: "KPIs et métriques de succès",
    intro: "Les indicateurs de performance sont organisés en trois catégories principales : ventes, acquisition et notoriété. Chaque KPI dispose d'un objectif étiré (scénario exceptionnel) et d'un objectif minimal (seuil de succès).",
    salesTitle: "KPIs de ventes",
    acquisitionTitle: "KPIs d'acquisition",
    brandTitle: "KPIs de notoriété"
  },
  mediaPlan: {
    sectionNumber: "07",
    sectionTitle: "Plan média détaillé et distribution budgétaire",
    intro: "Répartition stratégique du budget marketing de 28 000 $ sur 6 canaux d'acquisition, avec un focus majeur sur le partenariat La Presse pour maximiser la crédibilité et la portée auprès des décideurs.",
    totalBudget: 28000
  },
  timeline: {
    sectionNumber: "08",
    sectionTitle: "Calendrier d'exécution détaillé",
    intro: "Planning semaine par semaine du 16 décembre 2025 au 18 février 2026, avec actions prioritaires et objectifs de billets vendus pour chaque période. Ce calendrier assure une exécution rigoureuse et une redistribution équilibrée des ventes."
  },
  freeTickets: {
    sectionNumber: "09",
    sectionTitle: "Stratégie de distribution des billets gratuits",
    intro: "Les billets donnés (250 sur 1 000) ne sont pas une perte, mais un investissement stratégique générant une valeur équivalente ou supérieure au budget marketing. Chaque billet gratuit est attribué à des partenaires qui apportent une contribution tangible à l'événement.",
    totalTickets: 250,
    totalValue: 125000,
    ratio: "4,5:1",
    category1Title: "Partenaires médias",
    category1Tickets: 80,
    category1Value: 40000,
    category2Title: "Conférenciers et experts",
    category2Tickets: 80,
    category2Value: 40000,
    category3Title: "Partenaires corporatifs",
    category3Tickets: 60,
    category3Value: 30000,
    category4Title: "Ambassadeurs et promotion",
    category4Tickets: 30,
    category4Value: 15000
  },
  riskManagement: {
    sectionNumber: "10",
    sectionTitle: "Gestion des risques et plan de contingence",
    intro: "Un plan de contingence structuré pour anticiper et réagir rapidement aux écarts de performance. Le seuil d'alerte est fixé à moins de 300 billets vendus au 31 janvier, déclenchant un budget d'urgence de 5 000 $ et des actions correctives immédiates.",
    alertThreshold: 300,
    alertDate: "31 janvier",
    emergencyBudget: 5000
  },
  geographicExpansion: {
    sectionNumber: "11",
    sectionTitle: "Expansion géographique : Vision 2027-2028",
    intro: "La stratégie 2026 se concentre exclusivement sur le marché québécois pour maximiser le ROI. L'expansion internationale est reportée à 2027-2028, une fois la preuve de concept établie et le modèle économique validé.",
    whyQuebecTitle: "Pourquoi Québec d'abord ?",
    localCPA: 37,
    internationalCPA: "220-330",
    localPotential: "5 000+",
    year2027Title: "2027 - Phase pilote",
    year2027Budget: 15000,
    year2027Target: 100,
    year2027Region: "Ontario et États du Nord-Est",
    year2028Title: "2028 - Expansion francophone",
    year2028Budget: 25000,
    year2028Target: 150,
    year2028Region: "France, Belgique, Suisse"
  },
  conclusion: {
    sectionNumber: "12",
    sectionTitle: "Conclusion",
    intro: "L'objectif de 750 billets vendus représente une croissance ambitieuse de +233 % vs 2025, mais réaliste avec une stratégie structurée et des leviers éprouvés.",
    targetSales: 750,
    growthPercentage: "+233 %",
    revenue: 24750,
    valueRatio: "5,3:1",
    totalValue: 149750,
    investment: 28000
  }
};
