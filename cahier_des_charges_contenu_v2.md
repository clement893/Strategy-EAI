# Cahier des Charges v2 : Intégration du contenu dans le design de Staging

**Projet :** Intégration du contenu de la stratégie 2026 dans la page d'accueil existante.
**Date :** 2 janvier 2026
**Auteur :** Manus AI

## 1. Objectif Général

L'objectif est d'intégrer le **contenu textuel et les données** du document "Stratégie Marketing Entertain-AI 2026" (provenant de la page Railway) dans la structure de composants et le design **actuels** de la branche `staging`. Le style visuel existant (thème sombre, typographie, mise en page des sections) doit être conservé.

## 2. Principes Directeurs

- **Conservation du Design :** Aucune modification majeure du CSS ou des styles globaux. Le design de `staging` est la référence.
- **Adaptation du Contenu :** Le contenu du document de stratégie sera adapté et réparti dans les composants React existants (`Hero.tsx`, `Analysis.tsx`, `Personas.tsx`, etc.).
- **Utilisation des Composants `shadcn/ui` :** Les éléments comme les tableaux et les cartes doivent utiliser les composants `Table` et `Card` de la bibliothèque `shadcn/ui` déjà en place.

## 3. Plan d'Intégration par Composant

Le fichier `client/src/pages/Home.tsx` conservera sa structure. Les modifications se feront à l'intérieur de chaque composant listé ci-dessous.

### 3.1. `Hero.tsx`

- **Titre (`h1`) :** Remplacer le texte actuel par :
  - Ligne 1 : `Stratégie Marketing`
  - Ligne 2 (en italique) : `Entertain-AI 2026`
- **Sous-titre (`p`) :** Utiliser le sous-titre du document : `Plan d'action pour maximiser les ventes, redistribuer la croissance et solidifier le leadership IA au sein des ICC du Québec.`
- **Badge supérieur :** Mettre à jour le texte pour `Préparé par Nukleo - Décembre 2025`.

### 3.2. `Analysis.tsx` (Section "Analyse de la situation")

Ce composant sera réutilisé pour afficher le **Sommaire exécutif** et les **Objectifs 2026**.

- **Titre de section (`h3`) :** Changer pour `Sommaire & Objectifs`.
- **Paragraphe de gauche :** Insérer le texte du **Sommaire exécutif**.
- **Tableau de gauche :** Remplacer le tableau "Distribution des ventes 2025" par le tableau **"Répartition détaillée"** des objectifs 2026 (750 billets vendus, etc.). Utiliser le composant `Table` de `shadcn/ui`.
- **Cartes (`Card`) de droite :**
  - **Carte 1 :** Afficher l'objectif principal : `750 Billets vendus` et le pourcentage `+233 % vs 2025`.
  - **Carte 2 :** Afficher les revenus estimés : `24 750 $` et le ROI marketing `0,88:1`.

### 3.3. `Personas.tsx` (Section "Segmentation et personas")

Ce composant sera utilisé pour présenter les 3 personas du document de stratégie.

- **Structure :** Conserver la mise en page en 3 colonnes.
- **Contenu de chaque carte/colonne :**
  - **Titre :** Nom du persona (ex: `Les créateurs et travailleurs culturels`).
  - **Description :** Résumer le profil démographique et les motivations d'achat.
  - **Indicateur clé :** Afficher le pourcentage des ventes et le nombre de billets ciblés (ex: `40 % des ventes = 300 billets`).

### 3.4. `Strategy.tsx` (Section "Stratégie marketing en 3 phases")

Ce composant affichera les 3 phases de la stratégie marketing.

- **Structure :** Utiliser un `Accordion` de `shadcn/ui` pour présenter chaque phase.
- **Chaque item de l'accordéon (`AccordionItem`) correspondra à une phase :**
  - **Titre (`AccordionTrigger`) :** Nom de la phase (ex: `Phase 1 : Fondation et anticipation`).
  - **Contenu (`AccordionContent`) :** Détailler les objectifs de la phase (billets, revenus), les tactiques clés et le budget associé.

### 3.5. `Budget.tsx` et `KPIs.tsx`

Ces composants seront utilisés pour présenter le budget détaillé et les indicateurs de performance.

- **`Budget.tsx` :**
  - Présenter le tableau **"Budget prévisionnel détaillé"** du document de stratégie.
  - Utiliser le composant `Table` de `shadcn/ui`.
- **`KPIs.tsx` :**
  - Afficher les KPIs principaux sous forme de cartes (`Card`) : CPA moyen, prix moyen par billet, taux de conversion, etc.

### 3.6. `Timeline.tsx` et `DetailedCalendar.tsx`

Ces composants peuvent être conservés pour afficher le calendrier d'actions de manière visuelle, en utilisant les données du document de stratégie.

## 4. Fichiers à Modifier

- `/home/ubuntu/Strategy-EAI/client/src/components/Hero.tsx`
- `/home/ubuntu/Strategy-EAI/client/src/components/Analysis.tsx`
- `/home/ubuntu/Strategy-EAI/client/src/components/Personas.tsx`
- `/home/ubuntu/Strategy-EAI/client/src/components/Strategy.tsx`
- `/home/ubuntu/Strategy-EAI/client/src/components/Budget.tsx`
- `/home/ubuntu/Strategy-EAI/client/src/components/KPIs.tsx`

Le fichier de contenu source reste : `/home/ubuntu/page_texts/strategy-eai-production.up.railway.app_strategie-eai-2026.md`.

## 5. Livrable Final

La page d'accueil de la branche `staging` présentera le contenu de la stratégie 2026, mais en utilisant le design et la structure de composants existants. Le résultat sera une page qui a l'apparence de `staging` mais avec le fond informationnel de la page Railway.
