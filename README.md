# Swiss Electrical Academy — Plateforme E-Learning Officielle (V1.1)

> **« Apprendre les règles. Comprendre les risques. Maîtriser la pratique. »**

Plateforme e-learning professionnelle suisse dédiée à l'apprentissage et à la révision des règles techniques, des ordonnances et de la sécurité dans le domaine des installations électriques en Suisse.

---

## 1. Vue d'ensemble & Identité

- **Public cible** : Apprentis, installateurs-électriciens, contrôleurs, chefs de projet, candidats aux examens professionnels et formateurs.
- **Identité visuelle** : Design suisse moderne, technique, minimaliste et épuré.
- **Thème sombre natif par défaut** (`#0B1220`) avec accents *Electric Blue* (`#38BDF8`) et *Swiss Red* (`#EF4444`).
- **Accessibilité** : Conforme aux recommandations **WCAG 2.2 AA** (contrastes vérifiés, navigation clavier, focus visible, support de `prefers-reduced-motion`).

---

## 2. Structure Pédagogique Officielle

L'architecture des modules respecte rigoureusement la taxonomie officielle suisse (les anciennes appellations Module C sont formellement proscrites) :

```text
Swiss Electrical Academy
│
├── Module A — Dispositions légales (13 formations)
│   ├── Pyramide des lois (A00 — Disponible)
│   ├── RS 734.0 - LIE (5 leçons Art. 1-58 — Disponibles)
│   ├── RS 734.2 - OCFo (5 leçons Art. 1-86 — Disponibles)
│   ├── RS 734.27 - OIBT (En préparation)
│   └── RS 814.710 - ORNI (En préparation)
│
├── Module B — Dangers de l’électricité (1 formation)
│   └── Sécurité électrique (B00 — Disponible)
│
├── Module N — NIBT (Norme SN 411000:2025 — 17 chapitres)
│   ├── N0  — Partie 0 (Disponible)
│   ├── N1  — Partie 1 (En préparation)
│   ├── N3  — Partie 3 (En préparation)
│   ├── N41 — Chapitre 4.1 (En préparation)
│   ├── N42 — Chapitre 4.2 (En préparation)
│   ├── N43 — Chapitre 4.3 (En préparation)
│   ├── N44 — Chapitre 4.4 (En préparation)
│   ├── N46 — Chapitre 4.6 (En préparation)
│   ├── N51 — Chapitre 5.1 (En préparation)
│   ├── N52 — Chapitre 5.2 (En préparation)
│   ├── N53 — Chapitre 5.3 (En préparation)
│   ├── N54 — Chapitre 5.4 (En préparation)
│   ├── N56 — Chapitre 5.6 (En préparation)
│   ├── N6  — Chapitre 6 (En préparation)
│   ├── N71 — Chapitre 7.01 (En préparation)
│   ├── N72 — Chapitre 7.02 (En préparation)
│   └── N74 — Chapitre 7.04 (En préparation)
│
├── Module E — ESTI directives (2 directives)
│   ├── ESTI 221 (En préparation)
│   └── ESTI 407 (En préparation)
│
└── Module F — Suisse Norme (3 normes)
    ├── SN414022 (En préparation)
    ├── SN414113 (En préparation)
    └── SN411439 (En préparation)
```

> **Règle absolue sur les contenus** : Aucune donnée normative ou légale n'est inventée. Les contenus proviennent des lois fédérales (LIE, OCFo, OIBT), de la NIBT 2025 (SN 411000) et des directives ESTI. Les fiches dont la formalisation technique est en cours affichent strictement la mention **« 🔒 Contenu en préparation »**.

---

## 3. Fonctionnalités Clés

### A. Dashboard & Progression en Temps Réel
- Accueil personnalisé (**Tommy Flynn 👋**).
- Statistiques globales (pourcentage global, XP, formations validées, badges débloqués).
- Carte interactive **« Continuer la formation »** reprenant automatiquement la dernière activité.
- Cartes détaillées des 5 modules avec barres de progression individuelles.

### B. Micro-learning & Séquence Pédagogique
Chaque unité (3 à 10 min) suit une structure normalisée :
`Titre → Objectif → Introduction → Contenu → Schéma/Widget interactif → Exemple pratique → Point important → Quiz → Synthèse`

### C. Composants Interactifs Dédiés
1. **Pyramide des lois (A00)** : Visualisation interactive des 4 échelons juridiques suisses et tableau comparatif SN / SNR / SNG.
2. **Simulateur de Dangers électriques (B00)** : Calculateur dynamique de tension de contact ($U_b$), courant corporel ($I_b$) sous $R_b = 1000\ \Omega$, identification des seuils physiologiques (0.5 mA, 10 mA, 30 mA, 50 mA) et checklist des 5 règles vitales ESTI/SUVA.
3. **Chaîne de normalisation NIBT (N0)** : Flux international CEI → CENELEC → CES/TK64 → NIBT 2025, organisation en 2 volumes et guide des symboles réglementaires (5, OK, ⚠, 8, 9, ✅).

### D. Moteur de Quiz & Gamification Sobre
- Feedback immédiat (**✓ Correct** / **✕ Incorrect**) avec explications pédagogiques détaillées.
- Écran de score final (+XP, pourcentage, félicitations).
- Bouton **« Revoir mes erreurs »** permettant à l'apprenant de comprendre ses erreurs sans frustration.
- **Protection anti-farming** : L'XP est attribué une seule fois par formation validée. Aucun doublon lors des rechargements.
- Système de 5 badges de compétences déblocables (*Premier pas*, *Sécurité*, *NIBT Explorer*, *Normes suisses*, *Académie*).

### E. Espace Formateur Démonstration
- Tableau de bord de cohorte (nombre d'apprenants, progression moyenne, quiz complétés, taux de réussite).
- Table interactive de suivi individuel des apprenants.
- Architecture prête pour l'évolution vers un véritable LMS d'entreprise.

---

## 4. Architecture PWA & Mode Hors-ligne

- **Manifeste Web** (`manifest.webmanifest`) : Déclaration PWA complète (nom, icônes SVG/PNG, start_url, mode standalone, thème `#0B1220`).
- **Service Worker** (`sw.js`) : Stratégie de mise en cache pour tous les composants de l'application. Fonctionnement hors-ligne garanti pour les contenus chargés.
- **Indicateur réseau dynamique** : Pastille verte « En ligne » / Pastille rouge « Mode hors-ligne ».
- **Installation PWA** : Bouton contextuel d'installation déclenché par l'événement `beforeinstallprompt`.

---

## 5. Démarrage Rapide

### Prérequis
Un navigateur moderne supportant les modules JavaScript ES6 (Chrome, Safari, Firefox, Edge).

### Lancement avec Python (Inclus par défaut sur macOS) :
```bash
python3 -m http.server 8080
```
Ouvrir ensuite : [http://localhost:8080](http://localhost:8080)

### Lancement avec Vite / Node.js :
```bash
npm install
npm run dev
```

### Build de Production :
```bash
npm run build
```

---

## 6. Structure des Fichiers

```text
E-Learning_chatgpt/
├── index.html                  # Shell HTML principal avec métadonnées PWA
├── manifest.webmanifest        # Manifeste officiel PWA
├── sw.js                       # Service Worker (gestion du cache & offline)
├── package.json                # Dépendances et scripts de développement
├── README.md                   # Documentation officielle
├── ACCEPTANCE-MATRIX.md        # Matrice de conformité des critères d'acceptation
├── QA-REPORT.md                # Rapport d'assurance qualité
├── public/
│   └── icons/
│       ├── icon.svg            # Emblème officiel vectoriel
│       ├── icon-192.png        # Icône PWA 192x192
│       └── icon-512.png        # Icône PWA 512x512
└── src/
    ├── main.js                 # Initialisation, routage hash et Service Worker
    ├── data/
    │   └── academy-data.js     # Registre complet des modules A, B, N, E, F
    ├── services/
    │   └── storage.js          # Persistance localStorage & logique anti-farming
    ├── components/
    │   ├── navigation.js       # Sidebar desktop, bottom-nav mobile, bandeau
    │   ├── interactive-widgets.js # Pyramide, simulateur dangers, chaîne NIBT
    │   └── quiz.js             # Moteur de quiz & révision des erreurs
    ├── pages/
    │   ├── dashboard.js        # Écran d'accueil & vue des 5 modules
    │   ├── module-view.js      # Liste ordonnée des leçons d'un module
    │   ├── lesson-view.js      # Déroulé pédagogique de leçon
    │   ├── progress-view.js    # Statistiques détaillées & badges
    │   ├── trainer-view.js     # Espace formateur démonstration
    │   └── profile-view.js     # Profil utilisateur & sélecteur de thème
    └── styles/
        ├── theme.css           # Tokens de design & thèmes Sombre/Clair
        └── base.css            # Styles du shell, responsive & composants
```

---

## 7. Limites Actuelles & Évolutions Futures (P2 / P3)

- **V1.1 Actuelle** : Mode local `localStorage`, offline-first PWA, modules A00, B00 et N0 pleinement interactifs avec quiz, fiches en développement pour les autres unités.
- **V2.0 Future** : Backend centralisé avec base de données, authentification sécurisée SSO, synchronisation cloud multi-appareils, administration complète pour formateurs, génération de certificats PDF officiels conformes à l'OIBT art. 8.
