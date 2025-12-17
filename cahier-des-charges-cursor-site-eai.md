# Cahier des charges technique - Refonte site Entertain-AI 2026

**Site cible** : https://e-ai2026-production.up.railway.app/  
**Objectif** : Refléter l'univers créatif de l'événement, réduire les chiffres, amplifier le pourquoi et la proposition de valeur  
**Framework détecté** : React (à confirmer en inspectant le code)

---

## Phase 1 : Modifications critiques (priorité haute)

### 1.1 Réécrire la section Hero

**Fichier à modifier** : `components/Hero.tsx` ou `pages/Home.tsx` (section hero)

**Modifications :**

**AVANT (texte actuel) :**
```
E-AI 2026

Rassemble des esprits créatifs, des leaders et des acteurs de changement 
pour favoriser la collaboration et stimuler l'innovation dans l'IA.

Réinventer la Créativité. Réhumaniser l'IA.

📍 PALAIS DES CONGRÈS DE MONTRÉAL
```

**APRÈS (nouveau texte) :**
```
ENTERTAIN-AI 2026
18 & 19 février • Palais des congrès de Montréal

Réinventer la Créativité. Réhumaniser l'IA.

Et si l'IA devenait votre plus grande alliée créative ?

Rejoignez 1 000 esprits créatifs qui explorent l'intelligence artificielle 
autrement — à échelle humaine, dans un esprit d'apprentissage, de partage et de jeu.
```

**Changements de style :**
- Augmenter la taille du tagline "Réinventer la Créativité. Réhumaniser l'IA." (font-size: 3rem → 4rem)
- Ajouter un sous-titre accrocheur en font-size: 1.5rem
- Remplacer l'emoji 📍 par du texte stylisé

**Boutons CTA :**
- Bouton principal : "Rejoindre le mouvement" (au lieu de "Acheter un billet")
- Bouton secondaire : "Découvrir le programme"

---

### 1.2 Supprimer/Déplacer la section Statistiques

**Fichier à modifier** : `components/Stats.tsx` ou section stats dans `pages/Home.tsx`

**Action :**
1. Supprimer la section proéminente avec les 4 blocs (50+ Pays, 100+ Conférenciers, etc.)
2. Créer un nouvel encart discret dans le footer

**Nouveau composant footer stats :**

**Fichier** : `components/Footer.tsx` ou créer `components/FooterStats.tsx`

**Code à ajouter :**
```tsx
<div className="text-center text-sm text-gray-400 py-4 border-t border-gray-700">
  <p>
    E-AI 2025 en chiffres : 1 000 participants • 100+ conférenciers • 50 pays • 100 000 $ en bourses ALCHIMIAv1.0
  </p>
</div>
```

**Style :**
- Texte petit (text-sm)
- Couleur discrète (text-gray-400 ou équivalent)
- Positionné en bas de page, avant les mentions légales

---

### 1.3 Créer une nouvelle section "Raison d'être"

**Fichier à créer** : `components/RaisonDetre.tsx`

**Position** : Juste après le Hero, avant la section "Les 3 piliers"

**Contenu complet :**

```tsx
export default function RaisonDetre() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
            Pourquoi Entertain-AI existe
          </h2>
          
          <div className="text-xl md:text-2xl text-gray-300 leading-relaxed space-y-6">
            <p>
              L'IA est partout. Dans nos outils, nos processus, nos conversations. 
              Mais <span className="text-cyan-400 font-semibold">qui la façonne ?</span> Qui décide comment elle transforme notre créativité ?
            </p>
            
            <p>
              Entertain-AI est né d'une conviction : <span className="text-cyan-400 font-semibold">l'intelligence artificielle ne doit pas 
              remplacer la créativité humaine, elle doit l'amplifier.</span>
            </p>
            
            <p>
              Pour les industries culturelles et créatives du Québec, c'est une opportunité 
              historique d'explorer de nouveaux territoires, de repousser les frontières 
              de l'imaginaire et de définir l'avenir de la création.
            </p>
          </div>

          <div className="mt-16 grid md:grid-cols-2 gap-8 text-left">
            <div className="bg-gray-800/50 p-8 rounded-lg border border-cyan-500/30">
              <h3 className="text-2xl font-bold mb-4 text-cyan-400">Notre mission</h3>
              <p className="text-gray-300 leading-relaxed">
                Bâtir une communauté locale et internationale capable de stimuler les collaborations, 
                d'accélérer l'innovation et de positionner Montréal et le Québec comme des pôles 
                majeurs de l'IA créative à l'échelle internationale.
              </p>
            </div>

            <div className="bg-gray-800/50 p-8 rounded-lg border border-cyan-500/30">
              <h3 className="text-2xl font-bold mb-4 text-cyan-400">Notre conviction</h3>
              <p className="text-gray-300 leading-relaxed">
                L'IA devient une alliée puissante quand elle est explorée à échelle humaine — 
                dans un esprit d'apprentissage, de partage et de jeu.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
```

**Intégration :**
- Ajouter `<RaisonDetre />` dans `pages/Home.tsx` juste après `<Hero />`
- Ordre des sections : Hero → RaisonDetre → Les 3 piliers → Reste du contenu

---

### 1.4 Réécrire la section "Les 3 piliers"

**Fichier à modifier** : `components/ThreePillars.tsx` ou section correspondante

**Titre de section :**
- AVANT : "À Échelle Humaine"
- APRÈS : "Les 3 piliers d'Entertain-AI" ou "Comment nous explorons l'IA"

**Contenu des 3 piliers :**

**APPRENDRE**
```
Titre : APPRENDRE

Texte : Mieux comprendre ce qui peut et ce qui ne peut pas être fait concrètement avec l'IA. 
Acquérir les connaissances et compétences nécessaires pour naviguer dans cette nouvelle ère, 
sans jargon technique, avec curiosité et audace.
```

**PARTAGER**
```
Titre : PARTAGER

Texte : Échanger sur les échecs comme les réussites de l'IA afin d'amplifier le partage de connaissances. 
Créer une communauté où les idées circulent librement, où les expériences se croisent et où chacun 
contribue à l'intelligence collective.
```

**JOUER**
```
Titre : JOUER

Texte : Expérimenter dans un esprit ludique afin de tester les applications et de s'approprier 
les outils existants. Explorer l'IA sans peur de l'échec, dans un environnement où la créativité 
prime sur la performance.
```

**Changements de style :**
- Augmenter la taille des icônes (si présentes)
- Augmenter l'espacement entre les 3 colonnes
- Ajouter une bordure subtile ou un fond légèrement différent pour chaque pilier

---

### 1.5 Réécrire la section "Pour qui ?" (Un terrain de jeu immersif)

**Fichier à modifier** : `components/ForWho.tsx` ou section "Un terrain de jeu immersif"

**Titre de section :**
- AVANT : "Un terrain de jeu immersif pour apprendre et se connecter"
- APRÈS : "E-AI est fait pour vous"

**Sous-titre :**
```
Que vous soyez créatif, décideur ou innovateur, E-AI 2026 est conçu pour vous donner 
une longueur d'avance — et surtout, pour vous rappeler pourquoi vous avez choisi de créer.
```

**Contenu des 3 profils :**

**POUR LES CRÉATIFS**
```
Titre : Vous êtes créatif ?

Texte : Vous cherchez à intégrer l'IA dans votre processus sans perdre votre âme d'artiste. 
E-AI vous montre comment l'IA peut devenir votre co-créateur, pas votre remplaçant.

Participez à des ateliers pratiques où vous manipulez les outils d'IA générative en temps réel. 
Intégrez l'IA dans vos processus créatifs. Repoussez les limites de l'innovation.
```

**POUR LES DÉCIDEURS**
```
Titre : Vous êtes décideur ?

Texte : Vous sentez que l'IA va transformer votre industrie, mais vous ne savez pas par où commencer. 
À E-AI, pas de jargon technique. Juste des stratégies claires, des cas d'usage réels et des 
conversations franches avec des leaders qui ont déjà franchi le pas.

Découvrez comment l'IA transforme les stratégies d'affaires. Créez de nouvelles opportunités de croissance. 
Rencontrez des leaders visionnaires.
```

**POUR LES INNOVATEURS**
```
Titre : Vous êtes innovateur ?

Texte : Vous repoussez déjà les limites de la technologie et vous cherchez une communauté qui pense comme vous. 
E-AI est votre terrain de jeu pour expérimenter, échouer et réussir ensemble.

Plongez dans l'état de l'art de la technologie IA. Échangez avec des chercheurs de renommée mondiale. 
Découvrez les dernières avancées techniques.
```

**Changements de style :**
- Remplacer les icônes génériques par des illustrations plus créatives (si possible)
- Augmenter la taille du texte d'introduction de chaque profil
- Ajouter un effet hover sur chaque carte

---

### 1.6 Modifier la section Billetterie

**Fichier à modifier** : `components/Tickets.tsx` ou section billetterie

**Titre de section :**
- AVANT : "LES BILLETS SONT DISPONIBLES"
- APRÈS : "Rejoignez le mouvement"

**Sous-titre à ajouter :**
```
Seulement 1 000 places. Deux jours qui peuvent changer votre façon de créer. Êtes-vous prêt ?
```

**Modifications des cartes de prix :**

**Carte "Early Bird" :**
- Badge : "PIONNIERS" ou "VISIONNAIRES" (au lieu de "EARLY BIRD")
- Bouton : "Je rejoins E-AI 2026" (au lieu de "Acheter")

**Carte "Régulier" :**
- Badge : "RÉGULIER"
- Bouton : "Je rejoins E-AI 2026"

**Ajouter un badge "Places limitées" :**
- Positionné en haut de la section
- Couleur : rouge/orange pour créer l'urgence
- Texte : "⚡ Places limitées • Confirmation immédiate"

---

## Phase 2 : Améliorations visuelles (priorité moyenne)

### 2.1 Ajouter une vidéo ou carrousel dans le Hero

**Fichier à modifier** : `components/Hero.tsx`

**Option 1 : Vidéo en background**
```tsx
<div className="relative h-screen">
  <video 
    autoPlay 
    loop 
    muted 
    playsInline
    className="absolute inset-0 w-full h-full object-cover opacity-40"
  >
    <source src="/videos/eai-2025-highlights.mp4" type="video/mp4" />
  </video>
  
  <div className="relative z-10">
    {/* Contenu du hero */}
  </div>
</div>
```

**Option 2 : Carrousel d'images dynamiques**
- Utiliser une librairie comme `react-slick` ou `swiper`
- 3-5 images de l'événement 2025 en rotation automatique
- Transition fade de 5 secondes

**Fichiers vidéo/images nécessaires :**
- Vidéo : `/public/videos/eai-2025-highlights.mp4` (15-30 secondes)
- OU Images : `/public/images/hero-1.jpg`, `/public/images/hero-2.jpg`, etc.

---

### 2.2 Améliorer la typographie

**Fichier à modifier** : `styles/globals.css` ou configuration Tailwind

**Modifications :**

1. **Titres principaux (h1) :**
   - Font-size : 4rem → 5rem (desktop)
   - Font-weight : 700 → 800
   - Letter-spacing : -0.02em (plus serré)

2. **Titres secondaires (h2) :**
   - Font-size : 3rem → 3.5rem
   - Ajouter un gradient de couleur sur certains titres clés

3. **Citations/messages clés :**
   - Créer une classe `.quote-highlight`
   - Font-size : 2rem
   - Couleur : cyan-400
   - Font-style : italic

**Exemple de classe à ajouter :**
```css
.quote-highlight {
  font-size: 2rem;
  color: #22d3ee; /* cyan-400 */
  font-style: italic;
  font-weight: 600;
  line-height: 1.4;
}
```

---

### 2.3 Ajouter des animations subtiles

**Fichier à modifier** : Composants individuels

**Animations à implémenter :**

1. **Fade-in au scroll :**
   - Utiliser `framer-motion` ou `AOS (Animate On Scroll)`
   - Appliquer sur les sections principales

```tsx
import { motion } from 'framer-motion';

<motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
>
  {/* Contenu de la section */}
</motion.div>
```

2. **Hover effects sur les cartes :**
   - Légère élévation (transform: translateY(-8px))
   - Ombre plus prononcée
   - Transition smooth (0.3s)

```css
.card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}
```

3. **Parallaxe sur le hero :**
   - Background se déplace plus lentement que le contenu
   - Utiliser `react-parallax` ou CSS transform

---

### 2.4 Enrichir la palette de couleurs

**Fichier à modifier** : `tailwind.config.js` ou équivalent

**Couleurs actuelles détectées :**
- Bleu/violet dominant
- Cyan pour les accents

**Ajouts recommandés :**
- Jaune/orange pour les CTA et éléments d'urgence (#FFB800)
- Gradient violet → cyan pour les titres importants

**Configuration Tailwind à ajouter :**
```js
theme: {
  extend: {
    colors: {
      'eai-yellow': '#FFB800',
      'eai-orange': '#FF8A00',
      'eai-purple': '#5B21B6',
      'eai-cyan': '#22D3EE',
    },
    backgroundImage: {
      'gradient-eai': 'linear-gradient(135deg, #5B21B6 0%, #22D3EE 100%)',
    }
  }
}
```

**Utilisation :**
- Boutons CTA : `bg-eai-yellow hover:bg-eai-orange`
- Titres importants : `bg-gradient-eai bg-clip-text text-transparent`

---

## Phase 3 : Contenu additionnel (priorité basse)

### 3.1 Créer une section "L'expérience E-AI"

**Fichier à créer** : `components/Experience.tsx`

**Position** : Après la section "Pour qui ?", avant ALCHIMIAv1.0

**Contenu complet :**

```tsx
export default function Experience() {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-5xl font-bold mb-6 text-center text-white">
            Deux jours pour tout changer
          </h2>
          
          <p className="text-2xl text-gray-300 text-center mb-12 leading-relaxed">
            Imaginez un espace où 1 000 esprits créatifs, décideurs et innovateurs se rencontrent 
            pour explorer ensemble les possibilités infinies de l'IA. Pas une conférence de plus. 
            Une expérience immersive où vous apprenez en créant, où vous partagez en expérimentant, 
            où vous jouez en innovant.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="text-6xl mb-4">🛠️</div>
              <h3 className="text-xl font-bold mb-3 text-cyan-400">Ateliers pratiques</h3>
              <p className="text-gray-300">
                Manipulez les outils d'IA générative en temps réel. Créez, expérimentez, apprenez par la pratique.
              </p>
            </div>

            <div className="text-center">
              <div className="text-6xl mb-4">💡</div>
              <h3 className="text-xl font-bold mb-3 text-cyan-400">Conversations inspirantes</h3>
              <p className="text-gray-300">
                Échangez avec des pionniers qui repoussent les limites de la création. Pas de pitch, juste des conversations authentiques.
              </p>
            </div>

            <div className="text-center">
              <div className="text-6xl mb-4">🤝</div>
              <h3 className="text-xl font-bold mb-3 text-cyan-400">Connexions authentiques</h3>
              <p className="text-gray-300">
                Rencontrez des esprits créatifs qui partagent vos défis. Les meilleures collaborations naissent ici.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
```

**Intégration :**
- Ajouter `<Experience />` dans `pages/Home.tsx` après la section "Pour qui ?"

---

### 3.2 Créer une section "Manifeste"

**Fichier à créer** : `components/Manifesto.tsx`

**Position** : Avant la section Programme ou après ALCHIMIAv1.0

**Contenu complet :**

```tsx
export default function Manifesto() {
  return (
    <section className="py-24 bg-gradient-to-br from-purple-900 via-gray-900 to-cyan-900">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-12 text-white">
            Notre vision : L'IA à échelle humaine
          </h2>
          
          <div className="space-y-8 text-xl md:text-2xl text-gray-200 leading-relaxed">
            <p>
              <span className="text-cyan-400 font-semibold">Nous croyons</span> que l'intelligence artificielle 
              ne doit pas être réservée aux géants de la tech. Elle appartient aux créateurs, aux rêveurs, 
              aux artistes, aux entrepreneurs qui façonnent notre culture.
            </p>
            
            <p>
              <span className="text-cyan-400 font-semibold">Nous croyons</span> que l'IA n'est pas une menace, 
              mais une invitation — à repenser nos processus, à explorer de nouveaux territoires créatifs, 
              à collaborer différemment.
            </p>
            
            <p>
              <span className="text-cyan-400 font-semibold">Nous croyons</span> que Montréal et le Québec 
              ont une voix unique à porter dans cette révolution. Une voix créative, humaine, audacieuse.
            </p>
          </div>

          <div className="mt-16">
            <p className="text-4xl font-bold text-yellow-400">
              Entertain-AI n'est pas une conférence. C'est un mouvement.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
```

**Intégration :**
- Ajouter `<Manifesto />` dans `pages/Home.tsx` avant la section Programme

---

## Checklist de validation

### Phase 1 (Critique)
- [ ] Hero réécrit avec nouveau message émotionnel
- [ ] Statistiques déplacées en footer (format discret)
- [ ] Section "Raison d'être" créée et positionnée après Hero
- [ ] Section "Les 3 piliers" réécrite avec nouveaux textes
- [ ] Section "Pour qui ?" réécrite avec approche storytelling
- [ ] Section Billetterie modifiée (titre + CTA + badges)

### Phase 2 (Visuel)
- [ ] Vidéo ou carrousel ajouté au Hero
- [ ] Typographie améliorée (titres plus audacieux)
- [ ] Animations fade-in au scroll implémentées
- [ ] Hover effects sur les cartes
- [ ] Palette de couleurs enrichie (jaune/orange ajoutés)

### Phase 3 (Contenu)
- [ ] Section "L'expérience E-AI" créée
- [ ] Section "Manifeste" créée
- [ ] Témoignages vidéo ajoutés (si disponibles)

---

## Fichiers à fournir

**Assets nécessaires pour Phase 2 :**
1. Vidéo hero : `/public/videos/eai-2025-highlights.mp4` (15-30 sec, format MP4, max 10 MB)
2. OU Images hero : `/public/images/hero-1.jpg`, `/public/images/hero-2.jpg`, `/public/images/hero-3.jpg` (1920x1080px, format JPG/WebP)
3. Illustrations personnalisées pour les 3 profils (optionnel) : `/public/images/creative.svg`, `/public/images/decision-maker.svg`, `/public/images/innovator.svg`

---

## Notes techniques

**Stack détecté :**
- Framework : React (à confirmer)
- Styling : Tailwind CSS (probable)
- Animations : À implémenter (framer-motion recommandé)

**Commandes à exécuter après modifications :**
```bash
npm install framer-motion  # Pour les animations
npm install react-slick slick-carousel  # Pour le carrousel (si option 2 choisie)
npm run build  # Pour tester en production
```

**Tests à effectuer :**
1. Responsive mobile (iPhone 12, Samsung Galaxy)
2. Performance Lighthouse (score > 90)
3. Accessibilité (contraste, navigation clavier)
4. Cross-browser (Chrome, Firefox, Safari)

---

## Ordre d'exécution recommandé

1. **Commencer par Phase 1.2** (supprimer stats) → Impact visuel immédiat
2. **Puis Phase 1.1** (hero) → Première impression améliorée
3. **Puis Phase 1.3** (raison d'être) → Ajout de contenu émotionnel
4. **Puis Phase 1.4 et 1.5** (3 piliers + pour qui) → Amélioration du storytelling
5. **Puis Phase 1.6** (billetterie) → Optimisation conversion
6. **Tester et valider Phase 1** avant de passer à Phase 2

**Durée estimée :**
- Phase 1 : 4-6 heures
- Phase 2 : 3-4 heures
- Phase 3 : 2-3 heures
- **Total : 9-13 heures de développement**
