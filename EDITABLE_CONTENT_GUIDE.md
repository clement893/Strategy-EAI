# Guide d'utilisation du système de contenu éditable

## Vue d'ensemble

Le système d'édition permet de modifier tous les textes et valeurs de la stratégie directement depuis le frontend, sans toucher au code.

## Architecture

### 1. Structure de données (`client/src/data/content.ts`)

Contient toutes les données éditables dans une structure TypeScript typée :
- `ContentData` : Interface définissant la structure complète
- `defaultContent` : Valeurs par défaut de tout le contenu

### 2. Contexte React (`client/src/contexts/ContentContext.tsx`)

Gère l'état global du contenu éditable :
- Sauvegarde automatique dans localStorage
- Export/Import JSON
- Réinitialisation aux valeurs par défaut
- Mode édition activable/désactivable

### 3. Composant EditableField (`client/src/components/EditableField.tsx`)

Composant réutilisable pour rendre n'importe quel texte éditable :
```tsx
<EditableField 
  path="hero.title"           // Chemin dans la structure de données
  value={content.hero.title}  // Valeur actuelle
  type="text"                 // Type: text, number, textarea
  className="..."             // Classes CSS
  as="span"                   // Élément HTML: span, div, h1, h2, etc.
/>
```

### 4. Panneau d'administration (`client/src/components/AdminPanel.tsx`)

Interface flottante en bas à droite avec :
- Toggle mode édition
- Export JSON
- Import JSON
- Réinitialisation

## Comment ajouter un nouveau champ éditable

### Étape 1 : Ajouter dans la structure de données

Dans `client/src/data/content.ts`, ajouter le champ dans l'interface et les valeurs par défaut :

```typescript
export interface ContentData {
  // ... sections existantes
  maNouvelleSect ion: {
    titre: string;
    description: string;
    valeur: number;
  };
}

export const defaultContent: ContentData = {
  // ... sections existantes
  maNouvelleSection: {
    titre: "Mon titre",
    description: "Ma description",
    valeur: 100
  }
};
```

### Étape 2 : Utiliser dans un composant

Dans votre composant React :

```tsx
import { useContent } from "@/contexts/ContentContext";
import EditableField from "./EditableField";

export default function MonComposant() {
  const { content } = useContent();
  
  return (
    <div>
      <h2>
        <EditableField 
          path="maNouvelleSection.titre" 
          value={content.maNouvelleSection.titre}
          className="text-2xl font-bold"
          as="span"
        />
      </h2>
      <p>
        <EditableField 
          path="maNouvelleSection.description" 
          value={content.maNouvelleSection.description}
          type="textarea"
        />
      </p>
      <div>
        <EditableField 
          path="maNouvelleSection.valeur" 
          value={content.maNouvelleSection.valeur}
          type="number"
        />
      </div>
    </div>
  );
}
```

## Composants déjà intégrés

✅ Hero
✅ ExecutiveSummary
✅ ICCDefinition

## Composants à intégrer

⏳ Analysis
⏳ Personas
⏳ Strategy
⏳ Budget
⏳ KPIs
⏳ MediaPlan
⏳ Timeline
⏳ FreeTickets
⏳ RiskManagement
⏳ GeographicExpansion
⏳ Conclusion

## Utilisation

1. **Activer le mode édition** : Cliquer sur l'icône ⚙️ en bas à droite et activer le toggle
2. **Modifier un texte** : Cliquer sur n'importe quel texte éditable (bordure en pointillés au survol)
3. **Sauvegarder** : Les modifications sont automatiques dans localStorage
4. **Exporter** : Télécharger le contenu en JSON pour backup permanent
5. **Importer** : Restaurer un contenu depuis un fichier JSON
6. **Réinitialiser** : Remettre toutes les valeurs par défaut

## Avantages

- ✅ Modification sans toucher au code
- ✅ Sauvegarde automatique dans le navigateur
- ✅ Export/Import pour backup et partage
- ✅ Interface intuitive
- ✅ TypeScript pour la sécurité des types
- ✅ Aucune base de données nécessaire
