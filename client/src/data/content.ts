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

  kpis: {
    sectionNumber: string;
    sectionTitle: string;
    intro: string;
    salesTitle: string;
    salesTickets: number;
    salesGrowth: string;
    salesAvgPrice: number;
    salesRevenue: number;
    acquisitionTitle: string;
    acquisitionCPA: number;
    acquisitionTraffic: string;
    acquisitionConversion: string;
    brandTitle: string;
    brandImpressions: string;
    brandReachLaPresse: string;
    brandCTR: string;
    stretchedTitle: string;
    stretchedTickets: number;
    stretchedGrowth: string;
    stretchedDescription: string;
    minimalTitle: string;
    minimalTickets: number;
    minimalGrowth: string;
    minimalDescription: string;
  };
  mediaPlan: {
    sectionNumber: string;
    sectionTitle: string;
    intro: string;
    totalBudget: number;
    linkedinBudget: number;
    linkedinPercentage: number;
    linkedinTickets: number;
    linkedinCPA: number;
    metaBudget: number;
    metaPercentage: number;
    metaTickets: number;
    metaCPA: number;
    googleBudget: number;
    googlePercentage: number;
    googleTickets: number;
    googleCPA: number;
    laPresseNote: string;
    laPresseTickets: number;
    webinarBudget: number;
    webinarPercentage: number;
    webinarTickets: number;
    webinarCPA: number;
    emailBudget: number;
    emailPercentage: number;
    emailTickets: number;
    emailCPA: number;
    totalTickets: number;
    avgCPA: number;
  };
  timeline: {
    sectionNumber: string;
    sectionTitle: string;
    intro: string;
  };

  riskManagement: {
    sectionNumber: string;
    sectionTitle: string;
    intro: string;
    alertThreshold: number;
    alertDate: string;
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
  
  creatives: {
    sectionNumber: string;
    sectionTitle: string;
    intro: string;
    totalAssets: number;
    secondaireTitle: string;
    secondaireDescription: string;
    secondaireCount: number;
    generalTitle: string;
    generalDescription: string;
    generalCount: number;
    generalAnimations: number;
    argumentTitle: string;
    argumentDescription: string;
    argumentCount: number;
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
    objective2026: 500,
    objectiveIncrease: "+122%",
    revenue2026: 16500,
    budget: 13000,
    roi: "1,27:1",
    cpa: 26,
    avgPrice: 33,
    objectiveStretched: 600,
    objectiveMinimal: 400
  },
  objectives: {
    decemberSales: 60,
    decemberPercentage: 12,
    januarySales: 200,
    januaryPercentage: 40,
    februarySales: 240,
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
    phase1Objective: "60 billets vendus (12 % de l'objectif)",
    phase1Budget: 3500,
    phase1Revenue: 1575,
    phase1Description: "Activation de la base de données fidèles (987 participants 2025), annonce des têtes d'affiche, optimisation du site web et du funnel de conversion, lancement du rabais -50 % jusqu'au 31 décembre.",
    phase2Name: "Phase 2 : Amplification et visibilité",
    phase2Dates: "1 janvier 2026 - 31 janvier 2026",
    phase2Objective: "200 billets vendus (40 % de l'objectif)",
    phase2Budget: 21500,
    phase2Revenue: 8850,
    phase2Description: "Lancement des campagnes payantes (LinkedIn, Meta, Google), activation du partenariat La Presse (article commandité + 3 infolettres), webinaire de prévisualisation, retargeting professionnel, paliers tarifaires -30 % puis -20 %.",
    phase3Name: "Phase 3 : Intensification et urgence",
    phase3Dates: "1 février 2026 - 17 février 2026",
    phase3Objective: "240 billets vendus (48 % de l'objectif)",
    phase3Budget: 3000,
    phase3Revenue: 12600,
    phase3Description: "Amplification budgétaire +30 % sur LinkedIn/Meta, retargeting agressif de tous les visiteurs, messages d'urgence (dernières places, compte à rebours), offre flash 48h mi-février (-15 %), activation des participants confirmés pour partage social."
  },

  kpis: {
    sectionNumber: "05",
    sectionTitle: "Indicateurs clés de performance",
    intro: "Les KPIs stratégiques qui guideront l'exécution et permettront d'évaluer le succès de la stratégie marketing 2026. Ces indicateurs sont mesurables, actionnables et alignés sur les objectifs commerciaux.",
    salesTitle: "Ventes",
    salesTickets: 500,
    salesGrowth: "+122 % vs 2025",
    salesAvgPrice: 33,
    salesRevenue: 16500,
    acquisitionTitle: "Acquisition",
    acquisitionCPA: 26,
    acquisitionTraffic: "40 000+",
    acquisitionConversion: "1,25%",
    brandTitle: "Notoriété",
    brandImpressions: "1M+",
    brandReachLaPresse: "3,9M",
    brandCTR: "2,5%",
    stretchedTitle: "Objectif étiré",
    stretchedTickets: 600,
    stretchedGrowth: "+167 % vs 2025",
    stretchedDescription: "Scénario exceptionnel en cas de surperformance des campagnes et d'un effet viral organique majeur.",
    minimalTitle: "Seuil de succès minimal",
    minimalTickets: 400,
    minimalGrowth: "+78 % vs 2025",
    minimalDescription: "Seuil minimum pour considérer la stratégie comme un succès et justifier l'investissement marketing."
  },
  mediaPlan: {
    sectionNumber: "06",
    sectionTitle: "Plan média détaillé et distribution budgétaire",
    intro: "Répartition stratégique du budget publicitaire de 13 000 $ sur 5 canaux d'acquisition. Le partenariat La Presse est gratuit (partenariat média) et constitue un levier majeur pour atteindre 133 billets vendus.",
    totalBudget: 13000,
    linkedinBudget: 5000,
    linkedinPercentage: 38,
    linkedinTickets: 100,
    linkedinCPA: 33,
    metaBudget: 4000,
    metaPercentage: 31,
    metaTickets: 80,
    metaCPA: 33,
    googleBudget: 4000,
    googlePercentage: 31,
    googleTickets: 67,
    googleCPA: 40,
    laPresseNote: "Gratuit (partenariat média)",
    laPresseTickets: 133,
    webinarBudget: 500,
    webinarPercentage: 4,
    webinarTickets: 33,
    webinarCPA: 10,
    emailBudget: 0,
    emailPercentage: 0,
    emailTickets: 87,
    emailCPA: 0,
    totalTickets: 500,
    avgCPA: 26
  },
  timeline: {
    sectionNumber: "07",
    sectionTitle: "Calendrier d'exécution détaillé",
    intro: "Planning semaine par semaine du 16 décembre 2025 au 18 février 2026, avec actions prioritaires et objectifs de billets vendus pour chaque période. Ce calendrier assure une exécution rigoureuse et une redistribution équilibrée des ventes."
  },

  riskManagement: {
    sectionNumber: "08",
    sectionTitle: "Gestion des risques et plan de contingence",
    intro: "Un plan de contingence structuré pour anticiper et réagir rapidement aux écarts de performance. Le seuil d'alerte est fixé à moins de 300 billets vendus au 31 janvier, déclenchant des actions correctives immédiates.",
    alertThreshold: 300,
    alertDate: "31 janvier"
  },

  conclusion: {
    sectionNumber: "09",
    sectionTitle: "Conclusion",
    intro: "L'objectif de 500 billets vendus représente une croissance ambitieuse de +122 % vs 2025, mais réaliste avec une stratégie structurée et des leviers éprouvés.",
    targetSales: 500,
    growthPercentage: "+122 %",
    revenue: 16500,
    valueRatio: "11,5:1",
    totalValue: 149750,
    investment: 13000
  },
  
  creatives: {
    sectionNumber: "10",
    sectionTitle: "Créatifs publicitaires",
    intro: "Une banque de 28 assets créatifs conçus pour maximiser l'impact visuel et l'engagement sur les différentes plateformes publicitaires. Chaque catégorie répond à un objectif stratégique spécifique et s'adapte aux formats natifs des canaux d'acquisition.",
    totalAssets: 28,
    secondaireTitle: "Secondaire",
    secondaireDescription: "Design coloré avec blocs de couleurs vives. Message principal : \"Quand l'IA rencontre votre imagination\". Format modulaire adapté aux différentes plateformes sociales.",
    secondaireCount: 3,
    generalTitle: "General",
    generalDescription: "Visuel avec silhouette humaine sur fond dégradé violet/bleu. Inclut 2 animations vidéo pour maximiser l'engagement sur Meta et LinkedIn. Message : \"Quand l'IA rencontre votre imagination\".",
    generalCount: 11,
    generalAnimations: 2,
    argumentTitle: "Argument",
    argumentDescription: "Créatifs axés sur la proposition de valeur : \"Collaborez avec les talents de demain\". Sous-titre explicatif sur les conférences courtes, cas d'usage concrets et ateliers pratiques. Idéal pour le retargeting et la conversion.",
    argumentCount: 12
  }
};
