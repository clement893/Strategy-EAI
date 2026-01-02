# Recalcul des métriques avec prix de 250 $ par billet

## Objectifs 2026

- **Billets vendus** : 500
- **Prix par billet** : 250 $
- **Budget marketing** : 13 000 $

## Revenus

- **Revenus totaux** : 500 × 250 $ = **125 000 $**
- **Revenus 2025** : 225 × 35 $ = 7 875 $ (ancien prix moyen)
- **Croissance revenus** : (125 000 - 7 875) / 7 875 = **+1 487 %**

## ROI Marketing

- **ROI** : 125 000 $ / 13 000 $ = **9,62:1**

## CPA

- **CPA moyen** : 13 000 $ / 500 = **26 $** (inchangé)

## Revenus par phase

### Phase 1 : Fondation et anticipation (5-15 janvier)
- Objectif : 60 billets (12%)
- **Revenus** : 60 × 250 $ = **15 000 $**

### Phase 2 : Amplification et conversion (16-31 janvier)
- Objectif : 200 billets (40%)
- **Revenus** : 200 × 250 $ = **50 000 $**

### Phase 3 : Intensification et dernier appel (1-18 février)
- Objectif : 240 billets (48%)
- **Revenus** : 240 × 250 $ = **60 000 $**

## Scénarios

### Objectif étiré
- 600 billets × 250 $ = **150 000 $**
- ROI : 150 000 $ / 13 000 $ = **11,54:1**

### Objectif minimal
- 400 billets × 250 $ = **100 000 $**
- ROI : 100 000 $ / 13 000 $ = **7,69:1**

## Distribution temporelle

- **Décembre** : 60 billets × 250 $ = **15 000 $** (12%)
- **Janvier** : 200 billets × 250 $ = **50 000 $** (40%)
- **Février** : 240 billets × 250 $ = **60 000 $** (48%)

## Changements à appliquer dans content.ts

1. **executiveSummary.revenue** : 16500 → **125000**
2. **executiveSummary.avgTicketPrice** : 33 → **250**
3. **executiveSummary.roi** : "1,27:1" → **"9,62:1"**
4. **executiveSummary.decemberRevenue** : (si existe) → **15000**
5. **executiveSummary.januaryRevenue** : (si existe) → **50000**
6. **executiveSummary.februaryRevenue** : (si existe) → **60000**
7. **strategy.phase1Revenue** : 1575 → **15000**
8. **strategy.phase2Revenue** : 8850 → **50000**
9. **strategy.phase3Revenue** : 12600 → **60000**
10. **conclusion.revenue** : 16500 → **125000**
11. **kpis.avgTicketPrice** : 33 → **250**
12. **kpis.totalRevenue** : 16500 → **125000**

## Conclusion.tsx

Remplacer "Prix moyen 33 $" par "Prix moyen 250 $"
Remplacer "ROI : 1,27:1" par "ROI : 9,62:1"
Remplacer "16 500 $ / 13 000 $" par "125 000 $ / 13 000 $"
