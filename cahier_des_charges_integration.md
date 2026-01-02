# Cahier des Charges : Intégration de la page Stratégie EAI 2026

**Projet :** Refonte de la page d'accueil de la branche `staging`
**Date :** 2 janvier 2026
**Auteur :** Manus AI

## 1. Objectif Général

L'objectif est de remplacer intégralement le contenu et l'apparence de la page d'accueil actuelle de la branche `staging` pour qu'elle soit une réplique fidèle de la page hébergée sur Railway : [https://strategy-eai-production.up.railway.app/strategie-eai-2026](https://strategy-eai-production.up.railway.app/strategie-eai-2026).

Le projet doit aboutir à une page unique, statique, qui présente le document "Stratégie Marketing Entertain-AI 2026" en respectant scrupuleusement le design et la mise en page du site de référence.

## 2. Contenu et Fichiers Sources

- **Contenu textuel complet :** Le contenu à intégrer est disponible dans le fichier Markdown suivant : `/home/ubuntu/page_texts/strategy-eai-production.up.railway.app_strategie-eai-2026.md`.
- **Analyse du design de référence :** Les spécifications de conception (couleurs, typographie, mise en page) sont documentées dans : `/home/ubuntu/Strategy-EAI/railway_design_analysis.md`.

## 3. Exigences Techniques et de Développement

Le développement devra être réalisé en respectant l'architecture React et TypeScript existante du projet.

### 3.1. Structure de la Page

La page `Home.tsx` (`client/src/pages/Home.tsx`) doit être entièrement remaniée. La structure actuelle basée sur de multiples composants (`Hero`, `Analysis`, `Personas`, etc.) doit être abandonnée au profit d'une structure qui reflète le document de stratégie.

Il est recommandé de décomposer le contenu du document en plusieurs composants sémantiques pour une meilleure lisibilité et maintenance. Par exemple :

- `SommaireExécutif.tsx`
- `Objectifs2026.tsx`
- `AnalyseSituation2025.tsx`
- `SegmentationPersonas.tsx`
- `StrategieMarketingPhases.tsx`
- `BudgetPrevisionnel.tsx`

### 3.2. Navigation

Le composant de navigation `Navbar.tsx` doit être modifié pour correspondre exactement à celui de la page de référence. Il doit contenir les quatre liens suivants, sans fonctionnalité de routage (liens d'ancrage `#` si nécessaire) :

1.  ACCUEIL
2.  STRATÉGIE MARKETING
3.  STRATÉGIE DIGITALE
4.  PLAN MODIFICATIONS

Le style, y compris les numéros verts et les bordures, doit être reproduit.

### 3.3. Style et Thème (Design)

L'apparence visuelle est primordiale. Le fichier `client/src/index.css` devra être ajusté pour implémenter les styles décrits dans le document d'analyse de design.

| Élément | Spécification | Fichier(s) à modifier |
| :--- | :--- | :--- |
| **Arrière-plan** | Couleur bleu foncé/violet (#3B3B7E ou similaire) pour tout le corps de la page. | `index.css` (variable `--background`) |
| **Typographie Titres** | Police serif en italique, couleur blanche. La taille variera selon le niveau de titre (h2, h3). | `index.css`, classes Tailwind CSS dans les composants |
| **Typographie Corps** | Police sans-serif, couleur blanche. | `index.css`, classes Tailwind CSS dans les composants |
| **Tableaux** | Fond légèrement plus foncé que l'arrière-plan principal, avec des bordures fines et blanches. | `index.css`, classes Tailwind CSS dans les composants |
| **Mise en page** | Contenu principal centré avec une largeur maximale. Espacements verticaux généreux entre les sections. | Classes Tailwind CSS dans les composants (`container`, `mx-auto`, `py-16`, `mb-12`, etc.) |

### 3.4. Contenu Spécifique

- **Tableaux de données :** Tous les tableaux présents dans le document source doivent être recréés en HTML/JSX et stylisés conformément au design de référence.
- **Listes :** Les listes à puces et numérotées doivent respecter les espacements et l'indentation du document original.

### 3.5. Pied de page (Footer)

Le pied de page actuel doit être supprimé. La page de référence n'ayant pas de pied de page visible, aucun ne sera implémenté dans la nouvelle version.

## 4. Livrable Final

Le livrable est une modification de la branche `staging` où la page d'accueil (`/`) est une réplique visuelle et structurelle de la page de référence Railway, présentant le contenu du document de stratégie. Le code doit être propre, commenté si nécessaire, et respecter les conventions du projet existant.
