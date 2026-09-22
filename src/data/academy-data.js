// Swiss Electrical Academy — Registre officiel des données et modules (V1.1)
// Source de vérité : Prescriptions officielles suisses (LIE, OCFo, OIBT, NIBT 2025, ESTI, SN)
// Règle absolue : Aucune invention de référence technique. Données réelles ou « Contenu en préparation ».

export const ACADEMY_INFO = {
  name: "ELECBOOK",
  shortName: "EBOOK",
  baseline: "Apprendre les règles. Comprendre les risques. Maîtriser la pratique.",
  version: "2.1",
  themeColor: "#1F3D4A",
  accentElectric: "#38BDF8",
  accentRed: "#EF4444"
};

// Profil apprenant par défaut
export const DEFAULT_USER = {
  name: "Tommy Flynn",
  role: "Installateur-électricien",
  avatar: "👨‍🔧",
  level: "Niveau 2 — Praticien qualifié"
};

// Badges déblocables officiels (Section 25)
export const OFFICIAL_BADGES = [
  {
    id: "badge-first-step",
    name: "Premier pas",
    icon: "🎓",
    description: "Première leçon terminée ou premier quiz validé",
    xpReq: 10
  },
  {
    id: "badge-security",
    name: "Sécurité",
    icon: "⚡",
    description: "Formation B — Dangers de l’électricité validée",
    moduleId: "B",
    xpReq: 50
  },
  {
    id: "badge-nibt-explorer",
    name: "NIBT Explorer",
    icon: "📐",
    description: "Premiers chapitres NIBT explorés et validés",
    moduleId: "N",
    xpReq: 100
  },
  {
    id: "badge-swiss-norms",
    name: "Normes suisses",
    icon: "🇨🇭",
    description: "Première formation du Module F — Suisse Norme consultée",
    moduleId: "F",
    xpReq: 150
  },
  {
    id: "badge-academy",
    name: "Académie",
    icon: "🏆",
    description: "Progression importante dans l'ensemble de la plateforme",
    xpReq: 300
  }
];

// Données de démonstration pour l'espace formateur (Section 27)
export const TRAINER_DEMO = {
  stats: {
    studentsCount: 24,
    avgProgress: 64,
    quizzesCompleted: 142,
    successRate: 86
  },
  students: [
    { name: "Tommy Flynn (Vous)", progress: 75, lastActivity: "N0 — Partie 0", score: 92, status: "En cours" },
    { name: "Marc Dupond", progress: 85, lastActivity: "A00 — Pyramide", score: 95, status: "Actif" },
    { name: "Sophie Meier", progress: 60, lastActivity: "B00 — Sécurité", score: 88, status: "Actif" },
    { name: "Thomas Vuilleumier", progress: 42, lastActivity: "N0 — Partie 0", score: 78, status: "À relancer" },
    { name: "Lukas Weber", progress: 95, lastActivity: "N0 — Quiz validé", score: 98, status: "Prêt examen" },
    { name: "Emma Bovet", progress: 30, lastActivity: "A00 — Pyramide", score: 80, status: "En cours" }
  ]
};

// Informations officielles et structure en 11 chapitres de la RS 734.0 (LIE)
// Source de vérité : 734.0_LIE.pdf (24 juin 1902, état au 1er avril 2026)
export const RS_734_0_INFO = {
  "id": "rs-734-0",
  "code": "RS 734.0",
  "title": "RS 734.0 — LIE",
  "shortTitle": "LIE",
  "description": "Loi fédérale concernant les installations électriques à faible et à fort courant du 24 juin 1902 (État le 1er avril 2026). Fondement légal suprême de la sécurité, de la planification des réseaux, des autorisations de construire, du contrôle et de la responsabilité en Suisse.",
  "lessons": [
    {
      "id": "rs-734-0-lecon-1",
      "slug": "lecon-1",
      "number": "I",
      "title": "Chapitre I — Dispositions générales",
      "articles": "Art. 1 à 3b",
      "duration": "7 min",
      "summary": "Haute surveillance de la Confédération, distinction légale entre faible et fort courant, prescriptions de sécurité et régime des émoluments."
    },
    {
      "id": "rs-734-0-lecon-2",
      "slug": "lecon-2",
      "number": "II",
      "title": "Chapitre II — Installations électriques à faible courant",
      "articles": "Art. 4 à 12",
      "duration": "5 min",
      "summary": "Conditions précises d'assujettissement des installations à faible courant à la LIE, réserve de l'approbation des plans et historique des articles 5 à 12 abrogés."
    },
    {
      "id": "rs-734-0-lecon-3",
      "slug": "lecon-3",
      "number": "III",
      "title": "Chapitre III — Installations électriques à fort courant",
      "articles": "Art. 13 à 15d",
      "duration": "9 min",
      "summary": "Assujettissement général du fort courant, définition légale des installations intérieures, délégation aux règles techniques et priorité au câblage souterrain (réforme 2017)."
    },
    {
      "id": "rs-734-0-lecon-4",
      "slug": "lecon-4",
      "number": "IIIa",
      "title": "Chapitre IIIa — Procédure de plan sectoriel",
      "articles": "Art. 15e à 15k",
      "duration": "6 min",
      "summary": "Coordination avec l'aménagement du territoire (LAT), fixation du corridor de ligne, groupe d'accompagnement OFEN et décision finale du Conseil fédéral."
    },
    {
      "id": "rs-734-0-lecon-5",
      "slug": "lecon-5",
      "number": "IIIb",
      "title": "Chapitre IIIb — Procédure d’approbation des plans",
      "articles": "Art. 16 à 17a",
      "duration": "10 min",
      "summary": "Obligation d'approbation préalable, répartition des compétences ESTI/OFEN, enquête publique de 30 jours, effet de concentration et procédure simplifiée."
    },
    {
      "id": "rs-734-0-lecon-6",
      "slug": "lecon-6",
      "number": "IIIc",
      "title": "Chapitre IIIc — Zones réservées et alignements",
      "articles": "Art. 18 à 18d",
      "duration": "6 min",
      "summary": "Mesures de protection foncière anticipée pour futures lignes THT ≥ 220 kV, alignements, restrictions à la propriété et renvoi à l'expropriation matérielle."
    },
    {
      "id": "rs-734-0-lecon-7",
      "slug": "lecon-7",
      "number": "IV",
      "title": "Chapitre IV — Contrôle",
      "articles": "Art. 19 à 26a",
      "duration": "8 min",
      "summary": "Responsabilité primaire de l'exploitant (Art. 20), missions de l'Inspection fédérale ESTI, contrôles délégués et surveillance des installations intérieures (OIBT)."
    },
    {
      "id": "rs-734-0-lecon-8",
      "slug": "lecon-8",
      "number": "V",
      "title": "Chapitre V — Dispositions concernant la responsabilité civile",
      "articles": "Art. 27 à 41",
      "duration": "9 min",
      "summary": "Responsabilité causale sans faute de l'exploitant (Art. 27), motifs libératoires stricts (force majeure, faute de la victime), assurance obligatoire, nullité des décharges (Art. 39)."
    },
    {
      "id": "rs-734-0-lecon-9",
      "slug": "lecon-9",
      "number": "VI",
      "title": "Chapitre VI — Expropriation",
      "articles": "Art. 42 à 54",
      "duration": "6 min",
      "summary": "Titulaires du droit d'expropriation pour cause d'utilité publique, combinaison procédurale et identification des articles 42 et 46 à 54 abrogés."
    },
    {
      "id": "rs-734-0-lecon-10",
      "slug": "lecon-10",
      "number": "VII",
      "title": "Chapitre VII — Dispositions pénales",
      "articles": "Art. 55 à 60",
      "duration": "7 min",
      "summary": "Amendes jusqu'à 100 000 CHF pour actes intentionnels et 40 000 CHF par négligence, sanctions d'entreprise (Art. 56) et application du DPA (Art. 57)."
    },
    {
      "id": "rs-734-0-lecon-11",
      "slug": "lecon-11",
      "number": "VIII",
      "title": "Chapitre VIII — Dispositions finales",
      "articles": "Art. 61 à 64",
      "duration": "5 min",
      "summary": "Abrogation de la législation de 1889, gestion du droit transitoire des procédures en cours (Art. 63) et pérennité de la LIE jusqu'à son état au 1er avril 2026."
    }
  ],
  "finalEvaluation": {
    "id": "rs-734-0-evaluation-finale",
    "slug": "evaluation-finale",
    "title": "Évaluation finale — RS 734.0 (LIE)",
    "articles": "Art. 1 à 64",
    "duration": "25 min",
    "summary": "16 questions représentatives d'examen couvrant les 11 parties de la loi. Seuil de réussite à 80% requis pour valider le module et obtenir le badge Expert LIE."
  },
  "totalLessons": 11,
  "subtitle": "11 chapitres officiels · État au 1er avril 2026 · Structure officielle en 11 parties",
  "tag": "Loi fédérale",
  "fullTitle": "Loi fédérale concernant les installations électriques à faible et à fort courant (LIE)"
};

// Informations officielles et structure en 7 chapitres de la RS 734.2 (OCFo)
export const RS_734_2_INFO = {
  id: "rs-734-2",
  code: "RS 734.2",
  shortCode: "OCFo",
  title: "Ordonnance sur les installations électriques à courant fort",
  subtitle: "7 chapitres officiels · Sécurité, règles de l'art, contrôles et travaux",
  description: "Réglementation fédérale suisse du Conseil fédéral fixant les exigences de sécurité applicables à l'établissement, à l'exploitation et à l'entretien de toutes les installations à courant fort en Suisse.",
  tag: "Ordonnance fédérale",
  totalChapters: 8,
  chapters: [
    {
      number: "01",
      id: "rs-734-2-chapitre-1",
      slug: "chapitre-1",
      title: "Chapitre 1 : Dispositions générales",
      articles: "Art. 1 à 3",
      duration: "8 min",
      summary: "Champ d'application, rétroactivité aux installations existantes, dérogations (DETEC/ESTI) et 32 définitions clés (seuils BT/HT, compétences)."
    },
    {
      number: "02",
      id: "rs-734-2-chapitre-2",
      slug: "chapitre-2",
      title: "Chapitre 2 : Principes de sécurité applicables à l'établissement, à l'exploitation et à l'entretien",
      articles: "Art. 4 à 19",
      duration: "10 min",
      summary: "Règles de la technique (CEI/CENELEC), annonce immédiate des accidents graves à l'ESTI, contrôles périodiques sous 5 ans et archivage (10 ans)."
    },
    {
      number: "03",
      id: "rs-734-2-chapitre-3",
      slug: "chapitre-3",
      title: "Chapitre 3 : Installations de production et de distribution",
      articles: "Art. 20 à 52",
      duration: "12 min",
      summary: "Couloirs > 20 m à 2 issues, voies de fuite dégagées, cellules blindées SF6 (ventilation basse), clôtures plein air (2,2 m) et gabarits aériens (Annexe 3)."
    },
    {
      number: "04",
      id: "rs-734-2-chapitre-4",
      slug: "chapitre-4",
      title: "Chapitre 4 : Mesures de protection",
      articles: "Art. 53 à 65",
      duration: "12 min",
      summary: "Mise à la terre obligatoire, tension permanente ≤ 50 V AC / 120 V DC, courbe temps-tension (Annexe 4), double terre HT et interdiction de coupure."
    },
    {
      number: "05",
      id: "rs-734-2-chapitre-5",
      slug: "chapitre-5",
      title: "Chapitre 5 : Travaux sur les installations à courant fort",
      articles: "Art. 66 à 80",
      duration: "12 min",
      summary: "Définition du travail, les 5 règles vitales de sécurité de l'Art. 72 al. 1, TST en binôme avec surveillant dédié et arrêt immédiat par orage."
    },
    {
      number: "06",
      id: "rs-734-2-chapitre-6",
      slug: "chapitre-6",
      title: "Chapitre 6 : Installations provisoires",
      articles: "Art. 81 à 83",
      duration: "8 min",
      summary: "Chantiers et foires, enveloppes incombustibles, contrôle périodique annuel et obligation légale de démontage immédiat."
    },
    {
      number: "07",
      id: "rs-734-2-chapitre-7",
      slug: "chapitre-7",
      title: "Chapitre 7 : Dispositions finales",
      articles: "Art. 84 à 86",
      duration: "6 min",
      summary: "Abrogation de l'ordonnance historique de 1933, dispositions transitoires et entrée en vigueur originelle au 1er juin 1994."
    },
    {
      number: "08",
      id: "rs-734-2-annexes",
      slug: "annexes",
      title: "Leçon 8 — Annexes 1 à 4",
      articles: "Annexes 1 à 4",
      duration: "12 min",
      summary: "Prescriptions d'exécution : gabarit libre (Annexe 1), locaux et toitures d'armoires (Annexe 2), distances plein air et correction altimétrique (Annexe 3), courbe temps-tension (Annexe 4)."
    }
  ],
  finalEvaluation: {
    id: "rs-734-2-evaluation-finale",
    slug: "evaluation-finale",
    title: "Évaluation finale — RS 734.2 OCFo",
    articles: "Art. 1 à 86",
    duration: "15 min",
    questionsCount: 12,
    summary: "Examen certifiant de 12 questions représentatives couvrant les 8 unités pédagogiques (Chapitres 1 à 7 et Annexes 1 à 4)."
  }
};

// Architecture officielle des 5 modules (A, B, N, E, F)
export const ACADEMY_MODULES = [
  // --------------------------------------------------------------------------
  // MODULE A — Dispositions légales
  // --------------------------------------------------------------------------
  {
    id: "A",
    code: "A",
    title: "Dispositions légales",
    countLabel: "24 formations",
    description: "Cadre légal et hiérarchie normative suisse : lois fédérales, ordonnances fédérales, DETEC et prescriptions professionnelles.",
    badgeTheme: "legal",
    formations: [
      {
        id: "pyramide-lois",
        routeId: "pyramide-lois",
        code: "Pyramide des lois",
        title: "Pyramide des lois",
        subtitle: "Base",
        status: "Disponible",
        duration: "12 min",
        tag: "Droit fédéral",
        xpReward: 30,
        objective: "Maîtriser la hiérarchie juridique des normes électriques suisses, du Conseil fédéral aux règles techniques et directives, les références officielles (RS) et la structure des normes SN, SNR et SNG.",
        introduction: `Bienvenue dans la pyramide des normes électriques suisses… promis, on va vous éviter un coup de jus ! ;) 
De la LIE aux ordonnances comme l’OIBT, jusqu’à la fameuse NIBT 2025, nous allons décortiquer ensemble la pyramide de lois étape par étape. Grâce à des explications simples et visuelles, vous comprendrez enfin la hiérarchie juridique sans vous mélanger les tournevis.
Prêt à faire la lumière sur le cadre légal et à sécuriser votre travail ?`,
        video: {
          id: "vid-pyramide-lois",
          title: "À regarder — Comprendre la pyramide des lois",
          description: "Cette vidéo pédagogique détaille l'organisation de la pyramide des normes électriques suisses, du Conseil fédéral aux règles techniques, pour vous repérer efficacement dans le cadre juridique.",
          duration: "5 min 24 s",
          src: "./public/media/videos/module-a/VID_20260918_pyramide_lois.mp4",
          keyPoints: [
            "Le Conseil fédéral (CF) constitue le niveau juridiquement le plus contraignant au sommet de la hiérarchie.",
            "Les lois fédérales (LIE, LSPro, LAA) fixent les principes généraux et la responsabilité civile.",
            "Les ordonnances (OIBT, OCFo, O DETEC...) rendent exécutoires les mesures de sécurité et les obligations techniques.",
            "Les règles techniques (NIBT 2025, SN EN) et directives (SNR, SNG, ESTI, PDIE) matérialisent l'état de la technique reconnu."
          ]
        },
        contentSections: [
          {
            title: "Pyramide des lois",
            text: `<p style="margin-bottom:0.75rem; font-size:0.92rem; color:var(--text-secondary); line-height:1.6;">
Abréviations et références légales officielles :
</p>
<div style="overflow-x:auto; margin-top:0.5rem;">
<table class="thresholds-table">
<thead>
<tr>
<th style="min-width:180px;">Référence</th>
<th>Signification</th>
</tr>
</thead>
<tbody>
<tr><td><strong>CF</strong></td><td>Conseil fédéral</td></tr>
<tr><td><strong>RS 734.0 - LIE</strong></td><td>Loi sur les installations électriques</td></tr>
<tr><td><strong>RS 734.1 - OCFa</strong></td><td>Ordonnance sur les installations électriques à courant faible</td></tr>
<tr><td><strong>RS 734.2 - OCFo</strong></td><td>Ordonnance sur les installations électriques à courant fort</td></tr>
<tr><td><strong>RS 734.24 - O ESTI</strong></td><td>Ordonnance sur l’Inspection fédérale des installations à courant fort</td></tr>
<tr><td><strong>RS 734.26 - OMBT</strong></td><td>Ordonnance sur les Matériels électriques à Basse Tension</td></tr>
<tr><td><strong>RS 734.27 - OIBT</strong></td><td>Ordonnance sur les installations électriques à basse tension</td></tr>
<tr><td><strong>RS 734.272 - O DETEC</strong></td><td>Ordonnance du DETEC sur les installations électriques à Basse Tension (Département fédéral de l’Environnement, des Transports, de l’Energie et de la Communication)</td></tr>
<tr><td><strong>RS 734.31 - OLEI</strong></td><td>Ordonnance sur les lignes électriques</td></tr>
<tr><td><strong>RS 734.5 - OCEM</strong></td><td>Ordonnance sur la comptabilité électromagnétique</td></tr>
<tr><td><strong>RS 784.10 - LTC</strong></td><td>Loi sur les télécommunications</td></tr>
<tr><td><strong>RS 814.710 - ORNI</strong></td><td>Ordonnance sur la protection contre le rayonnement non ionisant</td></tr>
<tr><td><strong>RS 832.20 - LAA</strong></td><td>Loi fédérale sur l’assurance-accidents</td></tr>
<tr><td><strong>RS 832.30 - OPA</strong></td><td>Ordonnance sur la prévention des accidents et des maladies professionnelles</td></tr>
<tr><td><strong>RS 930.11 - LSPro</strong></td><td>Loi fédérale du 12 juin 2009 sur la sécurité des produits</td></tr>
<tr><td><strong>NIBT</strong></td><td>Norme sur les installations à basse tension (SN 411000 :2025)</td></tr>
<tr><td><strong>SN EN</strong></td><td>Norme Suisse Européenne Norme</td></tr>
<tr><td><strong>SNR</strong></td><td>Règle Suisse</td></tr>
<tr><td><strong>SNG</strong></td><td>Guide Suisse</td></tr>
<tr><td><strong>ESTI</strong></td><td>Inspection fédérale des installations à courant fort</td></tr>
<tr><td><strong>AEAI</strong></td><td>Association des établissements cantonaux d’assurance incendie</td></tr>
<tr><td><strong>SUVA</strong></td><td>Caisse nationale suisse d’assurance en cas d’accidents</td></tr>
<tr><td><strong>PDIE</strong></td><td>Prescriptions des distributeurs d’électricité CH</td></tr>
</tbody>
</table>
</div>`
          },
          {
            title: "Structure et présentation des SN, SNR et SNG",
            text: `Actuellement en Suisse, on compte environ 26'000 normes, dont un millier de normes exclusivement suisses [SN], alors que les 25'000 restantes sont d’origine européenne ou internationale et ont été transférées dans l’assortiment de normes suisses.

<div style="overflow-x:auto; margin-top:0.75rem;">
<table class="thresholds-table">
<thead>
<tr>
<th style="min-width:140px;"></th>
<th style="min-width:180px;">[SN]</th>
<th style="min-width:180px;">[SNR]</th>
<th style="min-width:180px;">[SNG]</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Définition</strong></td>
<td>Publication normative préparée sous la direction d’un organisme de normalisation CH, EU ou internationale reconnus</td>
<td>Publication préparée sous la direction d’un organisme de normalisation CH reconnu</td>
<td>Publication chapotée par un organisme de normalisation CH indiquant des explications pour l’élaboration et l’utilisation de normes et de règles</td>
</tr>
<tr>
<td><strong>Intégration à la norme CH</strong></td>
<td>Oui</td>
<td>Non</td>
<td>Non</td>
</tr>
<tr>
<td><strong>Description</strong></td>
<td>Norme classique</td>
<td>Publication normative à un accord limité. (Sans procéder à un vote formel)</td>
<td>Publication sans définition normative</td>
</tr>
<tr>
<td><strong>Validité</strong></td>
<td>Illimitée</td>
<td>5 ans Possibilité de prolonger de 3 ans en cas ➔ en SN/SNG</td>
<td>Illimitée</td>
</tr>
</tbody>
</table>
</div>`
          },
          {
            title: "Histoire",
            text: `Avec la loi fédérale sur l’établissement de lignes téléphoniques et télégraphiques du 26 juin 1888, la Confédération a essayé de protéger car elle observait un danger dans l’alimentation à courant fort des installations de transmission.

La création de l’Association Suisse des Électriciens ASE (Electrosuisse actuellement) a été faite à cause des difficultés à l’accroissement de l’alimentation en courant. L’ASE a préparé les premières prescriptions pour la réalisation et l’exploitation des installations à courant fort. Celles-ci ont formé la base de la LIE du 24 juin 1902.`
          }
        ],
        interactiveWidget: "pyramid-widget",
        importantPoint: "Hiérarchie juridique : les règles s’ordonnent du niveau le plus contraignant (Conseil fédéral au sommet) jusqu’aux règles techniques et directives à la base.",
        synthesis: "La pyramide des normes électriques suisses s'articule du sommet juridiquement contraignant (Conseil fédéral, lois LIE/LSPro/LAA, ordonnances OCFa/OCFo/O ESTI/OMBT/OIBT/O DETEC/OLEI/OCEM/LTC/ORNI/OPA) jusqu'à sa base technique ([SN], NIBT SN 411000:2025, SN EN, [SNR], [SNG], ESTI, AEAI, SUVA, PDIE).",
        synthesisVisual: {
          src: "./public/media/images/module-a/infographie_pyramide_lois.png",
          alt: "Infographie synthétique en 4 volets : 1) 1888-1902 : La naissance des lois (de la protection courant fort à la LIE), 2) La Hiérarchie : Une pyramide contraignante (Constitution > Lois > Ordonnances > Règles Techniques), 3) Normes NIBT 2025 et Organismes (L'ESTI, la SUVA et les distributeurs appliquent les règles pour la sécurité), 4) SN, SNR, SNG : Trois validités (SN illimitée, SNR 5 ans, SNG guides d'utilisation).",
          caption: "Figure A.1 — Synthèse visuelle : Histoire, Hiérarchie, Organismes et Validités des normes suisses",
          source: "Illustration originale — ELECBOOK"
        },
        quiz: [
          {
            id: "q_a00_1",
            type: "single",
            question: "Dans la pyramide des normes électriques suisses, quel niveau se trouve au sommet de l'autorité juridiquement contraignante ?",
            options: [
              "CF : Conseil fédéral",
              "Règles techniques / Directives",
              "Prescriptions des distributeurs d'électricité (PDIE)",
              "Guides suisses [SNG]"
            ],
            correctAnswer: 0,
            explanation: "Au sommet de la pyramide des lois, le Conseil fédéral (CF) représente le niveau juridiquement le plus contraignant."
          },
          {
            id: "q_a00_2",
            type: "single",
            question: "Actuellement en Suisse, sur environ 26'000 normes, combien sont des normes exclusivement suisses [SN] ?",
            options: [
              "Un millier",
              "Les 25'000 restantes",
              "La totalité (26'000)",
              "Une cinquantaine"
            ],
            correctAnswer: 0,
            explanation: "On compte environ 26'000 normes en Suisse, dont un millier de normes exclusivement suisses [SN], les 25'000 restantes étant d'origine européenne ou internationale."
          },
          {
            id: "q_a00_3",
            type: "single",
            question: "Quelle est la validité d'une Règle Suisse [SNR] selon la structure des normes en Suisse ?",
            options: [
              "5 ans Possibilité de prolonger de 3 ans en cas ➔ en SN/SNG",
              "Illimitée",
              "10 ans sans prolongation possible",
              "1 an renouvelable annuellement"
            ],
            correctAnswer: 0,
            explanation: "Selon le tableau officiel de structure des normes, la validité d'une [SNR] est de « 5 ans Possibilité de prolonger de 3 ans en cas ➔ en SN/SNG »."
          },
          {
            id: "q_a00_4",
            type: "single",
            question: "Parmi les publications [SN], [SNR] et [SNG], laquelle bénéficie d'une intégration à la norme CH ?",
            options: [
              "[SN]",
              "[SNR]",
              "[SNG]",
              "Aucune d'entre elles"
            ],
            correctAnswer: 0,
            explanation: "Selon le tableau comparatif officiel, seule la [SN] bénéficie d'une intégration à la norme CH (Oui pour [SN], Non pour [SNR], Non pour [SNG])."
          },
          {
            id: "q_a00_5",
            type: "single",
            question: "Quelle est la définition officielle d'un Guide Suisse [SNG] ?",
            options: [
              "Publication chapotée par un organisme de normalisation CH indiquant des explications pour l’élaboration et l’utilisation de normes et de règles",
              "Publication normative à un accord limité. (Sans procéder à un vote formel)",
              "Publication normative préparée sous la direction d’un organisme de normalisation CH, EU ou internationale reconnus",
              "Ordonnance départementale d'application obligatoire"
            ],
            correctAnswer: 0,
            explanation: "Le [SNG] est défini comme : « Publication chapotée par un organisme de normalisation CH indiquant des explications pour l’élaboration et l’utilisation de normes et de règles »."
          },
          {
            id: "q_a00_6",
            type: "single",
            question: "Dans les références légales officielles, à quoi correspond RS 734.27 - OIBT ?",
            options: [
              "Ordonnance sur les installations électriques à basse tension",
              "Ordonnance sur les Matériels électriques à Basse Tension",
              "Ordonnance sur les installations électriques à courant fort",
              "Ordonnance sur l’Inspection fédérale des installations à courant fort"
            ],
            correctAnswer: 0,
            explanation: "RS 734.27 - OIBT désigne l'Ordonnance sur les installations électriques à basse tension."
          },
          {
            id: "q_a00_7",
            type: "single",
            question: "Quelle date marque l'adoption de la LIE (Loi sur les installations électriques) dont les premières prescriptions furent préparées par l'ASE ?",
            options: [
              "24 juin 1902",
              "26 juin 1888",
              "12 juin 2009",
              "1er janvier 2025"
            ],
            correctAnswer: 0,
            explanation: "L'ASE a préparé les premières prescriptions pour la réalisation et l'exploitation des installations à courant fort, qui ont formé la base de la LIE du 24 juin 1902."
          }
        ]
      },
                              // ======================================================================
      // RS 734.0 — LIE : Loi fédérale sur les installations électriques
      // Parcours officiel structuré en 11 leçons conformes aux 11 parties du texte légal
      // (24 juin 1902, état au 1er avril 2026, Art. 1 à 64)
      // ======================================================================

      {
              "id": "rs-734-0-lecon-1",
              "routeId": "rs-734-0/lecon-1",
              "moduleId": "A",
              "parcoursId": "rs-734-0",
              "lessonNumber": 1,
              "totalLessons": 11,
              "code": "RS 734.0 — Leçon 1",
              "title": "Chapitre I — Dispositions générales",
              "subtitle": "Haute surveillance fédérale, distinction faible/fort courant et émoluments (Art. 1 à 3b)",
              "articlesRange": "Art. 1 à 3b",
              "status": "Disponible",
              "duration": "7 min",
              "tag": "Loi fédérale",
              "xpReward": 30,
              "objective": "Maîtriser les principes fondateurs de la LIE : haute surveillance de la Confédération, critère de dangerosité séparant le faible et le fort courant, arbitrage du DETEC et régime des émoluments.",
              "introduction": "La <strong>Loi fédérale concernant les installations électriques à faible et à fort courant (LIE — RS 734.0)</strong> du 24 juin 1902 (état au 1<sup>er</sup> avril 2026) constitue le fondement juridique suprême régissant la sécurité, la planification et l'exploitation des installations électriques en Suisse. Son <strong>Chapitre I (Dispositions générales — Art. 1 à 3b)</strong> place l'ensemble du secteur sous la haute surveillance de la Confédération, définit le critère légal de distinction entre faible et fort courant fondé sur la dangerosité pour les personnes ou les choses, et encadre le régime des émoluments perçus pour les décisions et prestations officielles.",
              "contentSections": [
                      {
                              "title": "Introduction & Rôle fondamental de la LIE",
                              "text": "<div class=\"ocfo-legal-badge\">RS 734.0 — Art. 1 • Haute surveillance fédérale</div>\n<p style=\"margin-bottom:0.75rem; line-height:1.6; color:var(--text-secondary);\">\nLa <strong>Loi fédérale concernant les installations électriques à faible et à fort courant (LIE)</strong> du 24 juin 1902 (état au 1<sup>er</sup> avril 2026) constitue la <strong>loi-cadre suprême</strong> régissant l'ensemble de l'électrotechnique en Suisse.\n</p>\n<p style=\"margin-bottom:0.75rem; line-height:1.6; color:var(--text-secondary);\">\nSelon l'<strong>Art. 1 LIE</strong>, l'établissement et l'exploitation de toutes les installations électriques à faible et à fort courant spécifiées dans la loi sont placés sous la <strong>haute surveillance de la Confédération</strong>. Le Conseil fédéral est expressément investi du pouvoir d'édicter les ordonnances et prescriptions d'exécution nécessaires (notamment l'OCFo, l'OIBT, l'ORNI).\n</p>"
                      },
                      {
                              "title": "1. Art. 2 — Critère légal de distinction : Faible courant vs Fort courant",
                              "text": "<div class=\"ocfo-legal-badge\">RS 734.0 — Art. 2 • Définitions légales</div>\n<div class=\"ocfo-density-table-wrap\" style=\"margin-bottom:0.85rem;\">\n  <table class=\"ocfo-density-table\">\n    <thead>\n      <tr>\n        <th style=\"width:28%;\">Catégorie légale</th>\n        <th style=\"width:44%;\">Définition exacte (Art. 2 LIE)</th>\n        <th style=\"width:28%;\">Conséquence juridique</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong>Installations à faible courant</strong><br><span style=\"font-size:0.75rem; color:var(--text-muted);\">(Art. 2 al. 1)</span></td>\n        <td>Installations qui produisent ou utilisent <em>normalement</em> des courants <strong>n'offrant aucun danger</strong> pour les personnes ou les choses.</td>\n        <td>Soumises à la LIE uniquement si elles empruntent le domaine public/ferroviaire ou perturbent le fort courant (Art. 4).</td>\n      </tr>\n      <tr>\n        <td><strong>Installations à fort courant</strong><br><span style=\"font-size:0.75rem; color:var(--text-muted);\">(Art. 2 al. 2)</span></td>\n        <td>Installations qui produisent ou utilisent des courants <strong>présentant dans certaines circonstances un danger</strong> pour les personnes ou les choses.</td>\n        <td><strong>Assujettissement général et systématique</strong> à la LIE (Art. 13), approbations des plans, contrôles réguliers et responsabilité causale.</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n<div class=\"ocfo-warning-box\" style=\"margin-bottom:0.85rem;\">\n  <strong>⚖️ Règle d'arbitrage (Art. 2 al. 3) :</strong> S'il y a doute au sujet du classement d'une installation électrique, c'est le <strong>Département fédéral de l'environnement, des transports, de l'énergie et de la communication (DETEC)</strong> qui statue en dernière instance.\n</div>\n<div class=\"ocfo-summary-box\">\n  <div class=\"box-title\">📌 À RETENIR</div>\n  Le critère juridique suisse ne repose pas sur une valeur de tension numérique dans la loi elle-même, mais sur le <strong>critère physiologique et matériel de dangerosité</strong> pour les personnes et les biens.\n</div>"
                      },
                      {
                              "title": "2. Art. 3 — Prescriptions de sécurité et prévention des dangers",
                              "text": "<div class=\"ocfo-legal-badge\">RS 734.0 — Art. 3 • Compétences du Conseil fédéral</div>\n<p style=\"margin-bottom:0.65rem; line-height:1.6; color:var(--text-secondary);\">\nL'<strong>Art. 3 al. 1 LIE</strong> donne mandat au Conseil fédéral d'édicter des prescriptions de sécurité en vue de prévenir les dangers et dommages causés par les installations. Selon l'al. 2, il règle notamment :\n</p>\n<ul style=\"margin:0 0 0.85rem 1.25rem; line-height:1.6; color:var(--text-secondary);\">\n  <li><strong>a.</strong> L'établissement et l'entretien des installations à faible courant et à fort courant.</li>\n  <li><strong>b.</strong> Les précautions pour l'établissement de lignes électriques parallèles ou qui se croisent, ainsi qu'avec les voies de chemins de fer.</li>\n  <li><strong>c.</strong> La construction et l'entretien des chemins de fer électriques.</li>\n  <li><strong>d.</strong> La protection des télécommunications et de la radiodiffusion contre les perturbations électromagnétiques (CEM).</li>\n</ul>\n<p style=\"margin-bottom:0.65rem; line-height:1.6; color:var(--text-secondary);\">\nL'<strong>Art. 3 al. 3</strong> impose à l'autorité de veiller scrupuleusement à <strong>sauvegarder le secret des procédés de fabrication</strong> lors des inspections et de l'exécution des prescriptions.\n</p>\n<div class=\"ocfo-abroge-card\" style=\"margin-bottom:0.85rem;\">\n  <span class=\"ocfo-abroge-badge\">ARTICLE ABROGÉ</span>\n  <strong>Art. 3 al. 4 :</strong> Abrogé par la loi fédérale du 20 mars 2008 (mise à jour formelle du droit fédéral).\n</div>"
                      },
                      {
                              "title": "3. Art. 3a et 3b — Régime financier des émoluments",
                              "text": "<div class=\"ocfo-legal-badge\">RS 734.0 — Art. 3a et 3b • Émoluments administratifs et de contrôle</div>\n<p style=\"margin-bottom:0.65rem; line-height:1.6; color:var(--text-secondary);\">\nIntroduits lors des réformes énergétiques récentes, les <strong>Art. 3a et 3b LIE</strong> fixent le cadre légal du financement des prestations régaliennes :\n</p>\n<ul style=\"margin:0 0 0.85rem 1.25rem; line-height:1.6; color:var(--text-secondary);\">\n  <li><strong>Perception d'émoluments appropriés (Art. 3a al. 1) :</strong> dus pour les décisions, les contrôles et les prestations de l'administration fédérale et de l'Inspection fédérale des installations à courant fort (<strong>ESTI</strong>).</li>\n  <li><strong>Couverture des charges cantonales (Art. 3a al. 2) :</strong> perception par l'OFEN d'émoluments auprès des exploitants de réseau pour financer les prestations cantonales déléguées selon la LApEl (art. 9e al. 2).</li>\n  <li><strong>Principes directeurs (Art. 3b al. 2) :</strong> respect obligatoire des principes constitutionnels de la <strong>couverture des coûts</strong> et de l'<strong>équivalence</strong> (proportionnalité entre le service rendu et le tarif facturé).</li>\n  <li><strong>Dérogations (Art. 3b al. 3) :</strong> le Conseil fédéral peut exonérer d'émoluments les actes justifiés par un <strong>intérêt public prépondérant</strong>.</li>\n</ul>\n<div class=\"ocfo-summary-box\">\n  <div class=\"box-title\">📌 À RETENIR</div>\n  L'activité de surveillance, d'approbation et de contrôle de l'ESTI et de l'OFEN s'autofinance par le biais d'émoluments réglementés respectant les principes d'équivalence et de couverture des coûts réels.\n</div>"
                      }
              ],
              "practicalExample": "Un litige survient entre un opérateur télécom et une usine métallurgique concernant une ligne interne alimentée sous une tension inhabituelle. L'industriel prétend qu'il s'agit d'une installation à faible courant non soumise aux contraintes de la LIE. En application de l'Art. 2 al. 3 LIE, c'est le DETEC qui statue en dernière instance sur la qualification juridique de l'ouvrage.",
              "importantPoint": "Le critère de distinction entre faible et fort courant (Art. 2 LIE) est fondé sur le risque objectif pour les personnes et les choses. En cas de doute, la décision finale n'appartient ni à l'électricien ni à l'exploitant, mais au DETEC en dernière instance.",
              "quiz": [
                      {
                              "question": "Selon l'Art. 2 al. 2 LIE, comment sont légalement définies les installations électriques à fort courant ?",
                              "options": [
                                      "Toutes les installations fonctionnant sous une tension nominale supérieure à 1000 V",
                                      "Les installations qui produisent ou utilisent des courants présentant dans certaines circonstances un danger pour les personnes ou les choses",
                                      "Exclusivement les réseaux de transport et de distribution exploités par Swissgrid",
                                      "Les installations nécessitant obligatoirement un transformateur à huile minérale"
                              ],
                              "correctAnswer": 1,
                              "explanation": "L'Art. 2 al. 2 LIE définit les installations à fort courant comme celles qui produisent ou utilisent des courants présentant dans certaines circonstances un danger pour les personnes ou les choses (critère de dangerosité).",
                              "articleRef": "LIE — Art. 2 al. 2"
                      },
                      {
                              "question": "Quelle autorité fédérale statue en dernière instance en cas de doute sur le classement d'une installation électrique ?",
                              "options": [
                                      "L'Inspection fédérale des installations à courant fort (ESTI)",
                                      "Le Tribunal administratif fédéral (TAF)",
                                      "Le Département fédéral de l'environnement, des transports, de l'énergie et de la communication (DETEC)",
                                      "L'Office fédéral de l'environnement (OFEV)"
                              ],
                              "correctAnswer": 2,
                              "explanation": "Selon l'Art. 2 al. 3 LIE, s'il y a doute au sujet du classement d'une installation électrique, c'est le DETEC qui statue en dernière instance.",
                              "articleRef": "LIE — Art. 2 al. 3"
                      },
                      {
                              "question": "Quels principes constitutionnels et légaux le Conseil fédéral doit-il impérativement respecter pour fixer les émoluments de l'ESTI et de l'OFEN ?",
                              "options": [
                                      "Le principe du pollueur-payeur et la rentabilité financière maximale",
                                      "Le principe de précaution et le secret commercial",
                                      "Les principes de l'équivalence et de la couverture des coûts",
                                      "Le principe de gratuité pour toutes les entreprises publiques"
                              ],
                              "correctAnswer": 2,
                              "explanation": "L'Art. 3b al. 2 LIE prescrit que le Conseil fédéral fixe les émoluments en respectant expressément les principes de l'équivalence et de la couverture des coûts.",
                              "articleRef": "LIE — Art. 3b al. 2"
                      }
              ],
              "nextLessonId": "rs-734-0-lecon-2"
      },

      {
              "id": "rs-734-0-lecon-2",
              "routeId": "rs-734-0/lecon-2",
              "moduleId": "A",
              "parcoursId": "rs-734-0",
              "lessonNumber": 2,
              "totalLessons": 11,
              "code": "RS 734.0 — Leçon 2",
              "title": "Chapitre II — Installations électriques à faible courant",
              "subtitle": "Champ d'assujettissement des lignes à faible courant et dispositions abrogées (Art. 4 à 12)",
              "articlesRange": "Art. 4 à 12",
              "status": "Disponible",
              "duration": "5 min",
              "tag": "Loi fédérale",
              "xpReward": 30,
              "objective": "Identifier avec exactitude les 3 cas où une installation à faible courant tombe sous le coup de la LIE, comprendre l'application de la procédure d'approbation des plans et connaître le statut des articles 5 à 12 abrogés.",
              "introduction": "Le <strong>Chapitre II de la LIE (Art. 4 à 12)</strong> encadre les installations à faible courant, caractérisées par des courants n'offrant normalement aucun danger corporel ou matériel. La loi réserve l'intervention fédérale aux situations spécifiques où ces lignes empruntent le domaine public ou ferroviaire (Art. 4), ou lorsqu'elles risquent d'interférer avec des ouvrages à fort courant. Cette leçon met en évidence la coexistence physique des réseaux de télécommunication et d'énergie, ainsi que l'historique des dispositions abrogées lors de la libéralisation du marché des télécoms.",
              "contentSections": [
                      {
                              "title": "1. Art. 4 — Les 3 critères d'assujettissement du faible courant à la LIE",
                              "text": "<div class=\"ocfo-legal-badge\">RS 734.0 — Art. 4 • Champ d'application du faible courant</div>\n<p style=\"margin-bottom:0.75rem; line-height:1.6; color:var(--text-secondary);\">\nContrairement aux installations à fort courant qui sont soumises d'office et intégralement (Art. 13), les installations à <strong>faible courant</strong> ne relèvent de la LIE que dans des situations limitativement énumérées à l'<strong>Art. 4 LIE</strong> :\n</p>\n<div class=\"ocfo-density-table-wrap\" style=\"margin-bottom:0.85rem;\">\n  <table class=\"ocfo-density-table\">\n    <thead>\n      <tr>\n        <th style=\"width:30%;\">Critère légal (Art. 4 al. 1)</th>\n        <th style=\"width:70%;\">Explication & Application pratique</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong>1. Emprunt du domaine public</strong></td>\n        <td>Lignes ou conduites de télécommunication, signalisation ou interphonie traversant ou longeant des voies publiques, des rues ou places communales/cantonales.</td>\n      </tr>\n      <tr>\n        <td><strong>2. Emprunt du domaine ferroviaire</strong></td>\n        <td>Câbles et équipements installés le long ou au-dessus de l'infrastructure des chemins de fer (risques d'interférence avec la signalisation ferroviaire).</td>\n      </tr>\n      <tr>\n        <td><strong>3. Risque de perturbation ou danger avec le fort courant</strong></td>\n        <td>Lignes de faible courant situées à proximité immédiate d'installations à fort courant (lignes aériennes HT, postes de transformation) et risquant de subir des inductions, tensions de pas dangereuses ou perturbations d'exploitation.</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n<p style=\"margin-bottom:0.65rem; line-height:1.6; color:var(--text-secondary);\">\n<strong>Portée de l'assujettissement (Art. 4 al. 2) :</strong> Les installations visées sont soumises à la loi soit en totalité, soit uniquement pour les tronçons concernés par ces conditions.\n</p>\n<div class=\"ocfo-highlight-card\" style=\"margin-bottom:0.85rem;\">\n  <div class=\"card-title\">📋 Réserve formelle de l'approbation des plans (Art. 4 al. 3)</div>\n  L'approbation des plans selon la section <strong>IIIb</strong> de la LIE demeure expressément réservée pour ces installations à faible courant soumises.\n</div>"
                      },
                      {
                              "title": "2. Art. 5 à 12 — Statut des dispositions abrogées",
                              "text": "<div class=\"ocfo-legal-badge\">RS 734.0 — Art. 5 à 12 • Historique législatif</div>\n<div class=\"ocfo-abroge-card\" style=\"margin-bottom:0.85rem;\">\n  <span class=\"ocfo-abroge-badge\">ARTICLES ABROGÉS</span>\n  <strong>Art. 5 à 12 LIE :</strong> Intégralement abrogés par le ch. I 1 de la loi fédérale du 15 décembre 2017 sur la transformation et l'extension des réseaux électriques (en vigueur depuis le 1<sup>er</sup> juin 2019) et antérieurement par la loi sur les télécommunications (LTC).\n</div>\n<p style=\"margin-bottom:0.65rem; line-height:1.6; color:var(--text-secondary);\">\nCes anciens articles régissaient le régime des concessions fédérales accordées pour les lignes télégraphiques et téléphoniques privées du début du XX<sup>e</sup> siècle. Avec la libéralisation des télécommunications et l'entrée en vigueur de la <strong>Loi sur les télécommunications (LTC — RS 784.10)</strong>, ces compétences ont été transférées aux régimes généraux des télécommunications et de l'aménagement du territoire.\n</p>\n<div class=\"ocfo-summary-box\">\n  <div class=\"box-title\">📌 À RETENIR</div>\n  Une installation à faible courant (fibre optique, réseau informatique, vidéosurveillance) n'est soumise à la LIE que si elle utilise le domaine public, ferroviaire ou si sa proximité avec une ligne à fort courant peut créer un danger ou une perturbation technique.\n</div>"
                      }
              ],
              "practicalExample": "Une entreprise de sécurité installe des caméras et un réseau cuivre de télégestion sur le pont d'une route cantonale passant au-dessus d'une voie CFF électrifiée en 15 kV. Bien qu'il s'agisse d'un courant faible, l'ouvrage emprunte le domaine public et le domaine ferroviaire, et se trouve à proximité de fort courant : il est donc formellement assujetti aux prescriptions de la LIE en vertu de l'Art. 4 al. 1.",
              "importantPoint": "Toutes les installations à faible courant ne sont pas soumises à la LIE : les installations intérieures privées à basse tension ne quittant pas la propriété privée et sans voisinage perturbateur en sont exclues.",
              "quiz": [
                      {
                              "question": "Dans laquelle de ces situations une installation à faible courant est-elle obligatoirement soumise à la LIE ?",
                              "options": [
                                      "Dès lors qu'elle utilise du câble à fibre optique monomode",
                                      "Lorsqu'elle emprunte le domaine public ou celui des chemins de fer, ou risque de causer des perturbations avec le fort courant",
                                      "Dès qu'elle consomme plus de 50 Watts de puissance permanente",
                                      "Uniquement si elle appartient à l'armée suisse"
                              ],
                              "correctAnswer": 1,
                              "explanation": "L'Art. 4 al. 1 LIE assujettit les installations à faible courant qui empruntent le domaine public ou des chemins de fer, ou qui, par suite de la proximité d'installations à fort courant, peuvent causer des perturbations ou des dangers.",
                              "articleRef": "LIE — Art. 4 al. 1"
                      },
                      {
                              "question": "Quel est le statut actuel des articles 5 à 12 de la LIE dans la source officielle ?",
                              "options": [
                                      "Ils fixent les amendes pénales applicables au faible courant",
                                      "Ils sont intégralement abrogés",
                                      "Ils régissent la protection des données informatiques",
                                      "Ils définissent les règles de raccordement des panneaux solaires"
                              ],
                              "correctAnswer": 1,
                              "explanation": "Les Art. 5 à 12 sont formellement indiqués comme abrogés dans la source officielle (notamment lors de la révision de 2017 sur les réseaux électriques).",
                              "articleRef": "LIE — Art. 5 à 12"
                      },
                      {
                              "question": "D'après l'Art. 4 al. 2 LIE, à quelle condition une installation est-elle présumée conforme aux exigences de sécurité ?",
                              "options": [
                                      "Si elle respecte les règles techniques désignées par les normes techniques ou le Conseil fédéral",
                                      "Si elle a coûté moins de 100 000 CHF",
                                      "Si elle a été validée par une votation communale",
                                      "Uniquement si tous ses composants ont été fabriqués en Suisse"
                              ],
                              "correctAnswer": 0,
                              "explanation": "L'Art. 4 al. 2 LIE consacre la présomption de conformité : une installation réalisée selon les règles techniques reconnues (normes harmonisées) est réputée conforme aux exigences de sécurité.",
                              "articleRef": "LIE — Art. 4 al. 2"
                      }
              ],
              "prevLessonId": "rs-734-0-lecon-1",
              "nextLessonId": "rs-734-0-lecon-3"
      },

      {
              "id": "rs-734-0-lecon-3",
              "routeId": "rs-734-0/lecon-3",
              "moduleId": "A",
              "parcoursId": "rs-734-0",
              "lessonNumber": 3,
              "totalLessons": 11,
              "code": "RS 734.0 — Leçon 3",
              "title": "Chapitre III — Installations électriques à fort courant",
              "subtitle": "Champ d'application, installations intérieures et règles de câblage souterrain (Art. 13 à 15d)",
              "articlesRange": "Art. 13 à 15d",
              "status": "Disponible",
              "duration": "9 min",
              "tag": "Loi fédérale",
              "xpReward": 30,
              "objective": "Maîtriser le champ d'assujettissement universel du fort courant, la frontière légale des installations intérieures (Art. 14), et appliquer rigoureusement les principes de câblage souterrain en distribution (Art. 15b) et transport (Art. 15c).",
              "introduction": "Pilier technique fondamental du droit électrique suisse, le <strong>Chapitre III de la LIE (Art. 13 à 15d)</strong> s'applique à toute installation produisant ou utilisant des courants susceptibles de présenter un danger. Il impose une conception et une exploitation strictement conformes aux règles reconnues de la sécurité et de la technique, assujettit les installations intérieures aux prescriptions fédérales et consacre le principe moderne de primauté du câblage souterrain pour les lignes à très haute tension, équilibrant impératifs techniques, protection du paysage et coûts économiques.",
              "contentSections": [
                      {
                              "title": "1. Art. 13 et 14 — Champ d'application et définition des installations intérieures",
                              "text": "<div class=\"ocfo-legal-badge\">RS 734.0 — Art. 13 et 14 • Champ d'application général</div>\n<p style=\"margin-bottom:0.75rem; line-height:1.6; color:var(--text-secondary);\">\nL'<strong>Art. 13 al. 1 LIE</strong> pose le principe fondamental : <strong>toutes les installations électriques à fort courant sont soumises aux dispositions de la présente loi</strong>.\n</p>\n<p style=\"margin-bottom:0.75rem; line-height:1.6; color:var(--text-secondary);\">\nLes installations électriques isolées n'empruntant que le terrain de leur propriétaire sont assimilées aux <strong>installations intérieures</strong> (art. 15, 16, 17, 26 et 41) si elles ne présentent pas de danger particulier pour les tiers (Art. 13 al. 2).\n</p>\n<div class=\"ocfo-highlight-card\" style=\"margin-bottom:0.85rem;\">\n  <div class=\"card-title\">🏠 Définition légale des « installations intérieures » (Art. 14 LIE)</div>\n  On entend par installations intérieures les ouvrages établis à l'intérieur des maisons, ateliers ou dépendances, <strong>jusqu'aux coupe-surintensité généraux ou boîtes de dérivation</strong> qui rattachent ces ouvrages aux installations extérieures.\n</div>"
                      },
                      {
                              "title": "2. Art. 15 — Mesures techniques et force obligatoire des normes",
                              "text": "<div class=\"ocfo-legal-badge\">RS 734.0 — Art. 15 • Exigences techniques & Droit de visite</div>\n<ul style=\"margin:0 0 0.85rem 1.25rem; line-height:1.6; color:var(--text-secondary);\">\n  <li><strong>Sécurité des installations (Art. 15 al. 1) :</strong> les mesures techniques de sécurité doivent prévenir tout danger d'électrocution, d'incendie ou d'explosion.</li>\n  <li><strong>Délégation normative (Art. 15 al. 2) :</strong> le Conseil fédéral peut déclarer obligatoires les règles techniques édictées par des <strong>organisations spécialisées</strong> (telles que l'ESTI, Electrosuisse / Comité Électrotechnique Suisse CES).</li>\n  <li><strong>Droit d'accès et d'inspection (Art. 15 al. 3) :</strong> les organes de contrôle ont le droit légal de visiter les installations à tout moment convenable pour s'assurer de leur conformité.</li>\n</ul>"
                      },
                      {
                              "title": "3. Art. 15a à 15d — Révolution du câblage souterrain (Stratégie réseaux 2017)",
                              "text": "<div class=\"ocfo-legal-badge\">RS 734.0 — Art. 15a à 15d • Lignes de transport et de distribution</div>\n<p style=\"margin-bottom:0.75rem; line-height:1.6; color:var(--text-secondary);\">\nIssus de la loi du 15 décembre 2017 sur la transformation et l'extension des réseaux électriques (en vigueur depuis le 1<sup>er</sup> juin 2019), ces articles fixent les règles modernes d'implantation des lignes :\n</p>\n<div class=\"ocfo-density-table-wrap\" style=\"margin-bottom:0.85rem;\">\n  <table class=\"ocfo-density-table\">\n    <thead>\n      <tr>\n        <th style=\"width:25%;\">Niveau de réseau</th>\n        <th style=\"width:40%;\">Principe légal impératif</th>\n        <th style=\"width:35%;\">Exception admise par la loi</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong>Réseau de distribution</strong><br>(Moyenne et Basse tension)<br><strong>Art. 15b LIE</strong></td>\n        <td><strong>Principe du câblage souterrain :</strong> Les lignes doivent être établies sous forme de câbles souterrains.</td>\n        <td>Une ligne aérienne n'est admise que si le câblage engendre des <strong>surcoûts globaux disproportionnés</strong> ou pose des difficultés techniques insurmontables.</td>\n      </tr>\n      <tr>\n        <td><strong>Réseau de transport</strong><br>(Très haute tension ≥ 220 kV)<br><strong>Art. 15c LIE</strong></td>\n        <td><strong>Comparaison objective :</strong> Évaluation d'une variante aérienne et d'une variante câblée souterraine lors de la procédure de plan sectoriel ou d'approbation.</td>\n        <td>Le Conseil fédéral fixe un <strong>facteur de surcoût admissible</strong> (en règle générale facteur 2 à 3). Si le coût du câble dépasse ce facteur, la ligne aérienne est autorisée.</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n<div class=\"ocfo-warning-box\">\n  <strong>🌲 Paysages protégés (Art. 15d LIE) :</strong> Dans les zones d'inventaires fédéraux (ex. IFP, LPN art. 5), le câblage souterrain est prioritaire pour préserver les sites naturels d'importance nationale.\n</div>"
                      }
              ],
              "practicalExample": "Un distributeur d'électricité cantonal souhaite raccorder un nouveau lotissement résidentiel en 16 kV. Pour des motifs d'économie immédiate, il envisage une ligne aérienne sur poteaux bois. En vertu de l'Art. 15b LIE, le câblage souterrain est la règle légale par défaut en réseau de distribution : l'exploitant ne peut déroger vers l'aérien que s'il prouve des surcoûts globaux disproportionnés validés par l'autorité d'approbation.",
              "importantPoint": "Depuis la révision de la LIE, le principe en réseau de distribution (moyenne et basse tension) est le câblage souterrain obligatoire (Art. 15b). Pour les lignes de transport THT (Art. 15c), la décision résulte d'une comparaison méthodique encadrée par un facteur de surcoût fixé par le Conseil fédéral.",
              "quiz": [
                      {
                              "question": "Jusqu'où s'étendent précisément les « installations intérieures » au sens de l'Art. 14 LIE ?",
                              "options": [
                                      "Jusqu'au transformateur de quartier le plus proche",
                                      "Jusqu'aux coupe-surintensité généraux ou boîtes de dérivation rattachant l'ouvrage au réseau extérieur",
                                      "Uniquement jusqu'au tableau de comptage d'énergie",
                                      "Sur l'ensemble de la parcelle cadastrale jusqu'à la limite de propriété"
                              ],
                              "correctAnswer": 1,
                              "explanation": "L'Art. 14 LIE définit les installations intérieures comme les ouvrages établis à l'intérieur des maisons, ateliers ou dépendances jusqu'aux coupe-surintensité généraux ou boîtes de dérivation de raccordement extérieur.",
                              "articleRef": "LIE — Art. 14"
                      },
                      {
                              "question": "Quel principe régit désormais l'établissement des nouvelles lignes de distribution (MT/BT) selon l'Art. 15b LIE ?",
                              "options": [
                                      "Le choix libre laissé à la discrétion exclusive du propriétaire foncier",
                                      "L'obligation absolue d'installer des lignes aériennes visibles pour faciliter la maintenance",
                                      "Le principe du câblage souterrain, sauf surcoûts globaux disproportionnés",
                                      "L'interdiction formelle de poser des câbles souterrains en zone agricole"
                              ],
                              "correctAnswer": 2,
                              "explanation": "Selon l'Art. 15b al. 1 LIE, les lignes de réseau de distribution doivent être établies sous forme de câbles souterrains à moins que cela n'engendre des surcoûts globaux disproportionnés.",
                              "articleRef": "LIE — Art. 15b al. 1"
                      },
                      {
                              "question": "Quelle habilitation légale l'Art. 15 al. 2 LIE confère-t-il au Conseil fédéral concernant les règles techniques ?",
                              "options": [
                                      "L'obligation de rédiger lui-même l'intégralité des schémas d'armoires électriques",
                                      "La possibilité de déclarer obligatoires les règles techniques établies par des organisations spécialisées (comme l'ESTI ou Electrosuisse)",
                                      "L'interdiction d'appliquer des normes internationales en Suisse",
                                      "L'obligation de soumettre chaque norme technique au référendum populaire"
                              ],
                              "correctAnswer": 1,
                              "explanation": "L'Art. 15 al. 2 LIE permet au Conseil fédéral de déclarer obligatoires les règles techniques édictées par des organisations spécialisées reconnues.",
                              "articleRef": "LIE — Art. 15 al. 2"
                      }
              ],
              "prevLessonId": "rs-734-0-lecon-2",
              "nextLessonId": "rs-734-0-lecon-4"
      },

      {
              "id": "rs-734-0-lecon-4",
              "routeId": "rs-734-0/lecon-4",
              "moduleId": "A",
              "parcoursId": "rs-734-0",
              "lessonNumber": 4,
              "totalLessons": 11,
              "code": "RS 734.0 — Leçon 4",
              "title": "Chapitre IIIa — Procédure de plan sectoriel",
              "subtitle": "Planification territoriale stratégique des lignes THT ≥ 220 kV (Art. 15e à 15k)",
              "articlesRange": "Art. 15e à 15k",
              "status": "Disponible",
              "duration": "6 min",
              "tag": "Loi fédérale",
              "xpReward": 30,
              "objective": "Comprendre les étapes et les compétences de la procédure de plan sectoriel pour les grands projets de lignes à très haute tension (≥ 220 kV) reliant la production au réseau national.",
              "introduction": "Introduit pour moderniser et accélérer le développement des infrastructures énergétiques, le <strong>Chapitre IIIa (Art. 15e à 15k)</strong> régit la procédure fédérale de plan sectoriel pour les lignes de transport à très haute tension (tension nominale ≥ 220 kV). Sous le pilotage de l'Office fédéral de l'énergie (OFEN) et avec la participation étroite d'un groupe d'accompagnement cantonal, cette démarche territoriale stratégique arrête le corridor de tracé et la technologie de ligne (aérienne ou souterraine) bien avant toute demande d'approbation des plans.",
              "contentSections": [
                      {
                              "title": "1. Art. 15e et 15f — Champ d'application et assujettissement",
                              "text": "<div class=\"ocfo-legal-badge\">RS 734.0 — Art. 15e et 15f • Plan sectoriel des lignes de transport</div>\n<p style=\"margin-bottom:0.75rem; line-height:1.6; color:var(--text-secondary);\">\nLes très grandes infrastructures de transport électrique ont un impact majeur sur le paysage et l'aménagement du territoire. La section <strong>IIIa LIE</strong> (introduite en 2017) institutionnalise leur intégration dans un <strong>plan sectoriel fédéral</strong> au sens de la Loi sur l'aménagement du territoire (LAT) :\n</p>\n<ul style=\"margin:0 0 0.85rem 1.25rem; line-height:1.6; color:var(--text-secondary);\">\n  <li><strong>Seuil de tension (Art. 15e al. 1) :</strong> les projets concernant une ligne d'une tension nominale <strong>égale ou supérieure à 220 kV</strong> ayant des effets considérables sur le territoire et l'environnement doivent être fixés dans un plan sectoriel.</li>\n  <li><strong>Lignes de tension inférieure (Art. 15e al. 2) :</strong> le Conseil fédéral peut y soumettre d'autres lignes si l'impact environnemental ou territorial l'exige.</li>\n  <li><strong>Décision d'assujettissement (Art. 15f) :</strong> c'est l'<strong>Office fédéral de l'énergie (OFEN)</strong> qui décide formellement si une procédure de plan sectoriel doit être menée, après consultation préalable des cantons et des services fédéraux concernés.</li>\n</ul>"
                      },
                      {
                              "title": "2. Art. 15g à 15k — Déroulement de la procédure et compétences",
                              "text": "<div class=\"ocfo-legal-badge\">RS 734.0 — Art. 15g à 15k • Conduite de la procédure</div>\n<div class=\"ocfo-density-table-wrap\" style=\"margin-bottom:0.85rem;\">\n  <table class=\"ocfo-density-table\">\n    <thead>\n      <tr>\n        <th style=\"width:25%;\">Étape légale</th>\n        <th style=\"width:35%;\">Autorité / Acteur</th>\n        <th style=\"width:40%;\">Mission définie par la LIE</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong>1. Direction de la procédure</strong><br>(Art. 15g al. 1)</td>\n        <td><strong>OFEN</strong></td>\n        <td>Pilote l'ensemble des consultations et coordonne les services fédéraux (ARE, OFEV).</td>\n      </tr>\n      <tr>\n        <td><strong>2. Groupe d'accompagnement</strong><br>(Art. 15g al. 2)</td>\n        <td>OFEN, cantons, communes, organisations</td>\n        <td>Institué par l'OFEN pour intégrer dès l'amont les intérêts locaux et environnementaux.</td>\n      </tr>\n      <tr>\n        <td><strong>3. Élaboration du dossier</strong><br>(Art. 15i al. 1)</td>\n        <td><strong>Entreprise requérante</strong> (ex. Swissgrid)</td>\n        <td>Présente les variantes de tracés et compare les technologies (aérien vs câble souterrain).</td>\n      </tr>\n      <tr>\n        <td><strong>4. Décision finale</strong><br>(Art. 15k)</td>\n        <td><strong>Conseil fédéral</strong></td>\n        <td>Fixe le <strong>corridor de planification</strong> et la <strong>technologie de transport</strong> retenue.</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n<div class=\"ocfo-summary-box\">\n  <div class=\"box-title\">📌 À RETENIR</div>\n  Le plan sectoriel (Art. 15e à 15k) ne délivre pas le permis de construire définitif, mais fige juridiquement le corridor territorial et la technologie (câble vs aérien). Il s'impose ensuite à la procédure d'approbation des plans (Art. 16 ss).\n</div>"
                      }
              ],
              "practicalExample": "Swissgrid projette le renforcement de la ligne 380 kV reliant Chamoson à Chippis en Valais. S'agissant d'une ligne d'une tension nominale supérieure à 220 kV à fort impact territorial, le projet fait l'objet d'une procédure de plan sectoriel dirigée par l'OFEN (Art. 15g), débouchant sur l'adoption par le Conseil fédéral du corridor officiel et du choix technologique (Art. 15k).",
              "importantPoint": "Pour les lignes ≥ 220 kV, la procédure de plan sectoriel est obligatoire en amont de toute demande de permis de construire (Art. 15e). C'est le Conseil fédéral qui arrête le corridor et la technologie (Art. 15k).",
              "quiz": [
                      {
                              "question": "À partir de quel seuil de tension nominale une ligne électrique à fort impact est-elle obligatoirement soumise à la procédure de plan sectoriel ?",
                              "options": [
                                      "Dès 50 kV",
                                      "Dès 110 kV",
                                      "Égale ou supérieure à 220 kV",
                                      "Uniquement pour les lignes en courant continu de 500 kV"
                              ],
                              "correctAnswer": 2,
                              "explanation": "L'Art. 15e al. 1 LIE fixe le seuil légal impératif aux lignes d'une tension nominale égale ou supérieure à 220 kV.",
                              "articleRef": "LIE — Art. 15e al. 1"
                      },
                      {
                              "question": "Quelle instance gouvernementale approuve en dernière instance le plan sectoriel selon l'Art. 15k LIE ?",
                              "options": [
                                      "Le Grand Conseil du canton concerné",
                                      "Le Conseil fédéral",
                                      "La commission de régulation ElCom",
                                      "L'Inspection fédérale ESTI"
                              ],
                              "correctAnswer": 1,
                              "explanation": "Selon l'Art. 15k LIE, c'est le Conseil fédéral qui approuve le plan sectoriel et en fixe le contenu contraignant pour les autorités.",
                              "articleRef": "LIE — Art. 15k"
                      },
                      {
                              "question": "Quelle est la force obligatoire du plan sectoriel approuvé par le Conseil fédéral selon l'Art. 15g LIE ?",
                              "options": [
                                      "Il n'a qu'une valeur indicative et de simple recommandation",
                                      "Il est contraignant pour toutes les autorités de la Confédération, des cantons et des communes",
                                      "Il ne s'applique qu'aux entreprises privées d'électricité",
                                      "Il doit obligatoirement être ratifié par le Parlement fédéral sous forme de loi"
                              ],
                              "correctAnswer": 1,
                              "explanation": "L'Art. 15g LIE dispose explicitement que le plan sectoriel approuvé par le Conseil fédéral a force obligatoire pour toutes les autorités fédérales, cantonales et communales.",
                              "articleRef": "LIE — Art. 15g"
                      }
              ],
              "prevLessonId": "rs-734-0-lecon-3",
              "nextLessonId": "rs-734-0-lecon-5"
      },

      {
              "id": "rs-734-0-lecon-5",
              "routeId": "rs-734-0/lecon-5",
              "moduleId": "A",
              "parcoursId": "rs-734-0",
              "lessonNumber": 5,
              "totalLessons": 11,
              "code": "RS 734.0 — Leçon 5",
              "title": "Chapitre IIIb — Procédure d’approbation des plans",
              "subtitle": "Permis de construire, effet de concentration, oppositions et voies de droit (Art. 16 à 17a)",
              "articlesRange": "Art. 16 à 17a",
              "status": "Disponible",
              "duration": "10 min",
              "tag": "Loi fédérale",
              "xpReward": 30,
              "objective": "Comprendre et maîtriser la procédure d'approbation des plans (permis de construire fédéral des installations électriques), la portée de l'effet de concentration (Art. 16b) et la distinction entre procédure ordinaire, simplifiée et dispense.",
              "introduction": "Le <strong>Chapitre IIIb de la LIE (Art. 16 à 17a)</strong> régit l'approbation des plans, véritable autorisation de construire fédérale indispensable pour toute création ou modification d'installation électrique à courant fort. Reposant sur le principe d'effet de concentration du droit fédéral, cette procédure coordonnée réunit en une seule décision l'ensemble des autorisations fédérales et cantonales requises. Cette leçon détaille les rôles respectifs de l'ESTI et de l'OFEN, la procédure simplifiée pour les ouvrages secondaires, le traitement des oppositions et les voies de recours.",
              "contentSections": [
                      {
                              "title": "1. Art. 16 — Principe général et autorités compétentes",
                              "text": "<div class=\"ocfo-legal-badge\">RS 734.0 — Art. 16 • Obligation d'approbation des plans</div>\n<p style=\"margin-bottom:0.75rem; line-height:1.6; color:var(--text-secondary);\">\nL'<strong>Art. 16 al. 1 LIE</strong> pose l'interdiction de bâtir sans autorisation : <strong>une installation électrique à courant fort ne peut être mise en place ou modifiée que si les plans du projet ont été préalablement approuvés par l'autorité compétente</strong>.\n</p>\n<div class=\"ocfo-density-table-wrap\" style=\"margin-bottom:0.85rem;\">\n  <table class=\"ocfo-density-table\">\n    <thead>\n      <tr>\n        <th style=\"width:30%;\">Autorité compétente</th>\n        <th style=\"width:70%;\">Compétence définie par l'Art. 16 al. 2 LIE</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong>Inspection (ESTI)</strong><br><span style=\"font-size:0.75rem; color:var(--text-muted);\">(Art. 16 al. 2 let. a)</span></td>\n        <td><strong>Autorité ordinaire :</strong> statue sur tous les projets pour lesquels aucune opposition n'a été formée ou si les oppositions ont pu être entièrement liquidées à l'amiable.</td>\n      </tr>\n      <tr>\n        <td><strong>OFEN</strong><br><span style=\"font-size:0.75rem; color:var(--text-muted);\">(Art. 16 al. 2 let. b)</span></td>\n        <td><strong>Autorité supérieure :</strong> statue dès lors que des <strong>oppositions subsistent</strong> ou si le projet requiert l'exercice formel du droit d'expropriation.</td>\n      </tr>\n    </tbody>\n  </table>\n</div>"
                      },
                      {
                              "title": "2. Schéma officiel de la procédure ordinaire d'approbation",
                              "text": "<div class=\"ocfo-legal-badge\">RS 734.0 — Art. 16a à 16f • Déroulement légal</div>\n<div class=\"ocfo-procedure-box\" style=\"margin-bottom:0.85rem; padding:1rem; background:var(--bg-surface); border:1px solid var(--border-medium); border-radius:8px;\">\n  <div style=\"display:flex; flex-direction:column; gap:0.6rem; font-size:0.86rem;\">\n    <div style=\"display:flex; align-items:center; gap:0.75rem;\">\n      <span style=\"background:var(--electric-blue); color:#000; font-weight:800; border-radius:50%; width:24px; height:24px; display:inline-flex; align-items:center; justify-content:center;\">1</span>\n      <strong>Dépôt de la demande et piquetage (Art. 16a al. 1 & 1bis) :</strong> L'entreprise transmet le dossier technique complet et procède au piquetage sur le terrain (profils des mâts, gabarits).\n    </div>\n    <div style=\"text-align:center; color:var(--text-muted);\">↓</div>\n    <div style=\"display:flex; align-items:center; gap:0.75rem;\">\n      <span style=\"background:var(--electric-blue); color:#000; font-weight:800; border-radius:50%; width:24px; height:24px; display:inline-flex; align-items:center; justify-content:center;\">2</span>\n      <strong>Mise à l'enquête publique de 30 jours (Art. 16a al. 1) :</strong> Publication dans la Feuille officielle cantonale et les communes concernées. Consultation obligatoire des services cantonaux et fédéraux.\n    </div>\n    <div style=\"text-align:center; color:var(--text-muted);\">↓</div>\n    <div style=\"display:flex; align-items:center; gap:0.75rem;\">\n      <span style=\"background:var(--electric-blue); color:#000; font-weight:800; border-radius:50%; width:24px; height:24px; display:inline-flex; align-items:center; justify-content:center;\">3</span>\n      <strong>Oppositions éventuelles (Art. 16d) :</strong> Déposées pendant le délai de 30 jours par les riverains ou associations habilitées (LPPA/LEx).\n    </div>\n    <div style=\"text-align:center; color:var(--text-muted);\">↓</div>\n    <div style=\"display:flex; align-items:center; gap:0.75rem;\">\n      <span style=\"background:var(--electric-blue); color:#000; font-weight:800; border-radius:50%; width:24px; height:24px; display:inline-flex; align-items:center; justify-content:center;\">4</span>\n      <strong>Élimination des divergences (Art. 16e) :</strong> Séances de conciliation menées par l'autorité.\n    </div>\n    <div style=\"text-align:center; color:var(--text-muted);\">↓</div>\n    <div style=\"display:flex; align-items:center; gap:0.75rem;\">\n      <span style=\"background:var(--electric-blue); color:#000; font-weight:800; border-radius:50%; width:24px; height:24px; display:inline-flex; align-items:center; justify-content:center;\">5</span>\n      <strong>Décision d'approbation (Art. 16f) :</strong> Rendue par l'ESTI (sans opposition) ou par l'OFEN (avec oppositions/expropriation).\n    </div>\n  </div>\n</div>"
                      },
                      {
                              "title": "3. Art. 16b — L'effet de concentration des autorisations",
                              "text": "<div class=\"ocfo-legal-badge\">RS 734.0 — Art. 16b • Effet de concentration</div>\n<div class=\"ocfo-highlight-card\" style=\"margin-bottom:0.85rem;\">\n  <div class=\"card-title\">⚡ Principe juridique de l'effet de concentration (Art. 16b LIE)</div>\n  <p style=\"line-height:1.6; color:var(--text-secondary); margin:0;\">\n    L'approbation des plans délivrée par l'autorité fédérale <strong>englobe toutes les autorisations requises par le droit fédéral, cantonal et communal</strong> (défrichement, protection des eaux, permis de construire communal). Aucun permis complémentaire ne peut être exigé des cantons ou des communes.\n  </p>\n</div>\n<ul style=\"margin:0 0 0.85rem 1.25rem; line-height:1.6; color:var(--text-secondary);\">\n  <li><strong>Délais de traitement (Art. 16abis) :</strong> pour les lignes ≥ 220 kV, le délai de traitement ne doit pas dépasser 2 ans (accélération légale).</li>\n  <li><strong>Caducité (Art. 16g) :</strong> l'approbation est caduque si les travaux ne débutent pas dans un <strong>délai de 5 ans</strong> (prorogation max de 3 ans pour justes motifs).</li>\n  <li><strong>Voies de droit (Art. 16i) :</strong> recours possible auprès du <strong>Tribunal administratif fédéral (TAF)</strong>, puis du Tribunal fédéral (TF).</li>\n</ul>"
                      },
                      {
                              "title": "4. Art. 17 et 17a — Procédure simplifiée et dispenses",
                              "text": "<div class=\"ocfo-legal-badge\">RS 734.0 — Art. 17 et 17a • Allégements procéduraux</div>\n<ul style=\"margin:0 0 0.85rem 1.25rem; line-height:1.6; color:var(--text-secondary);\">\n  <li><strong>Procédure simplifiée (Art. 17) :</strong> applicable aux projets de portée mineure, ne touchant pas de biens-fonds de tiers contre leur gré, ou modifiant des installations existantes sans impact visuel notable. <em>Dispense de mise à l'enquête publique et de piquetage.</em></li>\n  <li><strong>Installations dispensées d'approbation (Art. 17a) :</strong> les travaux de simple entretien, les réparations urgentes ou les petites modifications techniques sans effet sur les tiers définies par ordonnance du Conseil fédéral sont <strong>totalement dispensés</strong> de procédure d'approbation.</li>\n</ul>\n<div class=\"ocfo-summary-box\">\n  <div class=\"box-title\">📌 À RETENIR</div>\n  La procédure ordinaire (mise à l'enquête 30 jours) est concentrée : une seule décision fédérale vaut permis global. Si aucune opposition ne subsiste, l'ESTI délivre l'autorisation ; en présence d'oppositions formelles, le dossier est tranché par l'OFEN.\n</div>"
                      }
              ],
              "practicalExample": "Pour poser un câble souterrain 20 kV sous une chaussée communale, l'exploitant dépose une demande d'approbation. Grâce à l'effet de concentration (Art. 16b LIE), la décision rendue par l'ESTI couvre à la fois l'autorisation électrique et le permis de fouille cantonal/communal. La commune ne peut pas imposer une procédure de permis de construire séparée.",
              "importantPoint": "L'effet de concentration (Art. 16b) est absolu : la décision fédérale d'approbation des plans tient lieu de permis de construire unique et souverain.",
              "quiz": [
                      {
                              "question": "Quelle autorité est compétente pour approuver les plans lorsque des oppositions formelles de riverains ne sont pas liquidées ?",
                              "options": [
                                      "L'Inspection fédérale des installations à courant fort (ESTI)",
                                      "L'Office fédéral de l'énergie (OFEN)",
                                      "La municipalité de la commune d'implantation",
                                      "La Direction cantonale des travaux publics"
                              ],
                              "correctAnswer": 1,
                              "explanation": "Selon l'Art. 16 al. 2 let. b LIE, dès lors que des oppositions subsistent, la compétence d'approbation des plans bascule de l'ESTI vers l'Office fédéral de l'énergie (OFEN).",
                              "articleRef": "LIE — Art. 16 al. 2 let. b"
                      },
                      {
                              "question": "Quelle est la durée légale de mise à l'enquête publique d'une demande d'approbation des plans selon l'Art. 16a al. 1 LIE ?",
                              "options": [
                                      "10 jours ouvrables",
                                      "20 jours civils",
                                      "30 jours",
                                      "60 jours"
                              ],
                              "correctAnswer": 2,
                              "explanation": "L'Art. 16a al. 1 LIE dispose que la demande d'approbation des plans est mise à l'enquête publique pendant 30 jours dans les communes concernées.",
                              "articleRef": "LIE — Art. 16a al. 1"
                      },
                      {
                              "question": "Que signifie juridiquement l'« effet de concentration » institué par l'Art. 16b LIE ?",
                              "options": [
                                      "L'obligation de concentrer tous les câbles électriques dans une même gaine",
                                      "L'approbation des plans fédérale englobe la totalité des autorisations requises par le droit fédéral, cantonal et communal",
                                      "L'obligation de réaliser les travaux de construction en moins de 6 mois",
                                      "L'obligation pour l'exploitant de concentrer ses dépenses d'investissement dans un seul canton"
                              ],
                              "correctAnswer": 1,
                              "explanation": "L'Art. 16b LIE consacre l'effet de concentration : l'approbation fédérale des plans regroupe et remplace toutes les autorisations fédérales, cantonales ou communales nécessaires à l'ouvrage.",
                              "articleRef": "LIE — Art. 16b"
                      },
                      {
                              "question": "Dans quel délai l'approbation des plans devient-elle caduque si les travaux de construction ne sont pas commencés ?",
                              "options": [
                                      "Après 1 an",
                                      "Après 3 ans",
                                      "Après 5 ans",
                                      "Elle ne devient jamais caduque"
                              ],
                              "correctAnswer": 2,
                              "explanation": "Selon l'Art. 16g al. 1 LIE, l'approbation des plans devient caduque si l'exécution des travaux de construction n'a pas commencé dans un délai de 5 ans.",
                              "articleRef": "LIE — Art. 16g al. 1"
                      }
              ],
              "prevLessonId": "rs-734-0-lecon-4",
              "nextLessonId": "rs-734-0-lecon-6"
      },

      {
              "id": "rs-734-0-lecon-6",
              "routeId": "rs-734-0/lecon-6",
              "moduleId": "A",
              "parcoursId": "rs-734-0",
              "lessonNumber": 6,
              "totalLessons": 11,
              "code": "RS 734.0 — Leçon 6",
              "title": "Chapitre IIIc — Zones réservées et alignements",
              "subtitle": "Réservation foncière, interdictions de bâtir et indemnisation LEx (Art. 18 à 18d)",
              "articlesRange": "Art. 18 à 18d",
              "status": "Disponible",
              "duration": "6 min",
              "tag": "Loi fédérale",
              "xpReward": 30,
              "objective": "Comprendre les instruments de sauvegarde foncière préventive de la LIE (zones réservées et alignements) et leur régime d'indemnisation financière pour expropriation matérielle.",
              "introduction": "Le <strong>Chapitre IIIc (Art. 18 à 18d)</strong> met à disposition de la Confédération et des gestionnaires de réseau deux outils de planification spatiale protecteurs : les zones réservées et les alignements. Ces servitudes de droit public permettent de geler l'affectation des terrains nécessaires aux futurs ouvrages électriques et d'empêcher les constructions incompatibles avec la sécurité d'exploitation. La leçon traite des durées maximales de validité, des restrictions au droit de propriété et du droit à une indemnisation équitable en cas d'expropriation matérielle.",
              "contentSections": [
                      {
                              "title": "1. Art. 18 — Fixation des zones réservées",
                              "text": "<div class=\"ocfo-legal-badge\">RS 734.0 — Art. 18 • Préservation foncière préventive</div>\n<p style=\"margin-bottom:0.75rem; line-height:1.6; color:var(--text-secondary);\">\nPour éviter que des constructions nouvelles ne viennent compromettre ou renchérir démesurément la réalisation de futures lignes stratégiques, la section <strong>IIIc LIE</strong> dote la Confédération d'outils de police des constructions :\n</p>\n<ul style=\"margin:0 0 0.85rem 1.25rem; line-height:1.6; color:var(--text-secondary);\">\n  <li><strong>Autorité compétente & condition (Art. 18 al. 1) :</strong> sur requête de l'entreprise de réseau, l'<strong>OFEN</strong> peut fixer des <strong>zones réservées</strong> pour des périmètres clairement délimités, en vue d'assurer la libre disposition des terrains nécessaires à de futures lignes d'une tension nominale <strong>égale ou supérieure à 220 kV</strong>.</li>\n  <li><strong>Effet juridique (Art. 18 al. 3) :</strong> dans une zone réservée, <strong>aucun acte susceptible d'entraver l'établissement de la ligne</strong> ne peut être accompli sans l'autorisation préalable de l'OFEN.</li>\n  <li><strong>Durée de validité (Art. 18 al. 4) :</strong> la zone réservée est fixée pour une durée de <strong>cinq ans au plus</strong>. L'OFEN peut la prolonger de trois ans au maximum pour de justes motifs.</li>\n</ul>"
                      },
                      {
                              "title": "2. Art. 18a à 18d — Alignements et indemnisation",
                              "text": "<div class=\"ocfo-legal-badge\">RS 734.0 — Art. 18a à 18d • Alignements & Expropriation matérielle</div>\n<div class=\"ocfo-density-table-wrap\" style=\"margin-bottom:0.85rem;\">\n  <table class=\"ocfo-density-table\">\n    <thead>\n      <tr>\n        <th style=\"width:30%;\">Notion légale</th>\n        <th style=\"width:70%;\">Régime juridique (LIE)</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong>Alignements</strong><br>(Art. 18a LIE)</td>\n        <td>Sur requête de l'entreprise, l'OFEN peut fixer des <strong>alignements</strong> le long de lignes existantes ou projetées. Aucun bâtiment ou ouvrage dépassant la limite fixée ne peut être érigé.</td>\n      </tr>\n      <tr>\n        <td><strong>Restrictions de propriété</strong><br>(Art. 18b LIE)</td>\n        <td>Les zones réservées et alignements ont un caractère obligatoire pour quiconque et priment les plans d'affectation communaux. Ils sont mentionnés au registre foncier sur avis de l'OFEN.</td>\n      </tr>\n      <tr>\n        <td><strong>Indemnisation financière</strong><br>(Art. 18c LIE)</td>\n        <td>Si la fixation d'une zone réservée ou d'un alignement équivaut à une <strong>expropriation matérielle</strong> (privation d'un usage actuel ou futur hautement probable du sol), l'entreprise requérante doit indemniser intégralement le propriétaire selon la <strong>Loi fédérale sur l'expropriation (LEx)</strong>.</td>\n      </tr>\n      <tr>\n        <td><strong>Procédure d'établissement</strong><br>(Art. 18d LIE)</td>\n        <td>Le projet de zone réservée ou d'alignement est mis à l'enquête publique pendant <strong>30 jours</strong> dans les communes concernées.</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n<div class=\"ocfo-summary-box\">\n  <div class=\"box-title\">📌 À RETENIR</div>\n  Les zones réservées (5 ans max + 3 ans de prolongation) et les alignements bloquent temporairement les droits de bâtir pour réserver l'emprise des lignes THT ≥ 220 kV, moyennant une indemnisation intégrale en cas d'expropriation matérielle selon la LEx.\n</div>"
                      }
              ],
              "practicalExample": "L'OFEN publie une zone réservée de 5 ans sur des parcelles agricoles situées sur le tracé prévu d'une ligne 220 kV. Un propriétaire se voit refuser le permis de construire un hangar agricole sur sa parcelle. Si cette interdiction vide de sa substance la valeur économique de son terrain, il a droit à une indemnité pour expropriation matérielle versée par l'exploitant de réseau (Art. 18c).",
              "importantPoint": "La zone réservée ne peut excéder 5 ans (prorogation max de 3 ans). Tout préjudice équivalant à une expropriation matérielle donne droit à une pleine indemnisation selon la LEx (Art. 18c).",
              "quiz": [
                      {
                              "question": "Quelle est la durée de validité initiale maximale d'une zone réservée fixée par l'OFEN selon l'Art. 18 al. 4 LIE ?",
                              "options": [
                                      "2 ans",
                                      "5 ans",
                                      "10 ans",
                                      "Indéterminée jusqu'au début du chantier"
                              ],
                              "correctAnswer": 1,
                              "explanation": "Selon l'Art. 18 al. 4 LIE, la zone réservée est fixée pour une durée de 5 ans au plus (avec possibilité de prolongation de 3 ans au maximum).",
                              "articleRef": "LIE — Art. 18 al. 4"
                      },
                      {
                              "question": "À quelle législation fédérale renvoie expressément l'Art. 18c LIE pour indemniser les propriétaires en cas d'expropriation matérielle ?",
                              "options": [
                                      "Au Code des obligations (CO)",
                                      "À la Loi fédérale sur l'expropriation (LEx)",
                                      "Au Code pénal suisse (CPS)",
                                      "À la Loi sur la responsabilité de la Confédération"
                              ],
                              "correctAnswer": 1,
                              "explanation": "L'Art. 18c al. 1 LIE stipule expressément que si les restrictions équivalent à une expropriation matérielle, les indemnités sont allouées conformément à la Loi fédérale sur l'expropriation (LEx).",
                              "articleRef": "LIE — Art. 18c al. 1"
                      },
                      {
                              "question": "Quel est l'objectif des alignements prévus aux Art. 18a et 18b LIE le long des installations électriques ?",
                              "options": [
                                      "Interdire l'accès piétonnier à toute la région",
                                      "Empêcher les constructions ou plantations qui compromettraient l'exploitation ou l'extension de la ligne",
                                      "Permettre le stationnement de véhicules lourds",
                                      "Délimiter les frontières cantonales officielles"
                              ],
                              "correctAnswer": 1,
                              "explanation": "Les alignements (Art. 18a et 18b LIE) ont pour but de réserver l'espace nécessaire et d'empêcher les constructions, plantations ou excavations qui mettraient en danger la ligne électrique ou son exploitation.",
                              "articleRef": "LIE — Art. 18a et 18b"
                      }
              ],
              "prevLessonId": "rs-734-0-lecon-5",
              "nextLessonId": "rs-734-0-lecon-7"
      },

      {
              "id": "rs-734-0-lecon-7",
              "routeId": "rs-734-0/lecon-7",
              "moduleId": "A",
              "parcoursId": "rs-734-0",
              "lessonNumber": 7,
              "totalLessons": 11,
              "code": "RS 734.0 — Leçon 7",
              "title": "Chapitre IV — Contrôle",
              "subtitle": "Surveillance par l'exploitant, organes de contrôle, ESTI et OFEN (Art. 19 à 26a)",
              "articlesRange": "Art. 19 à 26a",
              "status": "Disponible",
              "duration": "8 min",
              "tag": "Loi fédérale",
              "xpReward": 30,
              "objective": "Distinguer sans équivoque la responsabilité de surveillance de l'exploitant de celle des organes d'inspection officiels, maîtriser les attributions de l'ESTI et le cadre de contrôle des installations intérieures.",
              "introduction": "La remarquable sécurité des réseaux électriques suisses repose sur l'organisation des contrôles instaurée par le <strong>Chapitre IV de la LIE (Art. 19 à 26a)</strong>. La loi consacre une responsabilité en cascade : surveillance continue et autocontrôle par les exploitants de réseau (Art. 19), contrôles périodiques indépendants délégués (OIBT), et haute surveillance assurée par l'Inspection fédérale des installations à courant fort (ESTI) sous la tutelle de l'OFEN. La leçon explicite également l'obligation légale de déclaration sans délai des accidents graves et les compétences consultatives de l'office fédéral.",
              "contentSections": [
                      {
                              "title": "1. Art. 20 — Responsabilité première de surveillance de l'exploitant",
                              "text": "<div class=\"ocfo-legal-badge\">RS 734.0 — Art. 20 • Devoir de surveillance de l'exploitant</div>\n<div class=\"ocfo-highlight-card\" style=\"margin-bottom:0.85rem;\">\n  <div class=\"card-title\">🛡️ L'exploitant, garant légal de son installation (Art. 20 al. 1 LIE)</div>\n  <p style=\"line-height:1.6; color:var(--text-secondary); margin:0;\">\n    <strong>La surveillance des installations électriques et de leur bon état d'entretien incombe à l'exploitant</strong> (propriétaire, locataire, concessionnaire, etc.).\n  </p>\n</div>\n<p style=\"margin-bottom:0.65rem; line-height:1.6; color:var(--text-secondary);\">\nL'<strong>Art. 20 al. 2</strong> précise que celui qui exploite des conduites électriques empruntant le domaine des chemins de fer doit pourvoir scrupuleusement à leur surveillance et à leur entretien permanent afin de prévenir tout danger d'accident de transport.\n</p>\n<div class=\"ocfo-abroge-card\" style=\"margin-bottom:0.85rem;\">\n  <span class=\"ocfo-abroge-badge\">ARTICLE ABROGÉ</span>\n  <strong>Art. 19 LIE :</strong> Abrogé par la loi du 24 juin 1977.\n</div>"
                      },
                      {
                              "title": "2. Art. 21 à 24 — L'OFEN et l'Inspection fédérale (ESTI)",
                              "text": "<div class=\"ocfo-legal-badge\">RS 734.0 — Art. 21 à 24 • Architecture institutionnelle de contrôle</div>\n<p style=\"margin-bottom:0.75rem; line-height:1.6; color:var(--text-secondary);\">\nL'<strong>Art. 21 LIE</strong> confie le contrôle de l'exécution des prescriptions de sécurité :\n</p>\n<ul style=\"margin:0 0 0.85rem 1.25rem; line-height:1.6; color:var(--text-secondary);\">\n  <li><strong>a. À l'OFEN</strong> : autorité de tutelle et de recours administratif.</li>\n  <li><strong>b. À l'Inspection fédérale des installations à courant fort (ESTI)</strong> : organe technique d'inspection et d'approbation opérationnelle des installations.</li>\n</ul>\n<div class=\"ocfo-density-table-wrap\" style=\"margin-bottom:0.85rem;\">\n  <table class=\"ocfo-density-table\">\n    <thead>\n      <tr>\n        <th style=\"width:30%;\">Disposition LIE</th>\n        <th style=\"width:70%;\">Contenu réglementaire</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong>Subdélégation</strong><br>(Art. 22 LIE)</td>\n        <td>Le Conseil fédéral peut substituer une institution ad hoc (Electrosuisse) pour l'exécution des contrôles techniques de l'inspection.</td>\n      </tr>\n      <tr>\n        <td><strong>Voies de recours</strong><br>(Art. 23 LIE)</td>\n        <td>Les décisions rendues par l'Inspection (ESTI) peuvent faire l'objet d'un recours devant le <strong>Tribunal administratif fédéral (TAF)</strong> ou l'OFEN selon la nature de l'acte.</td>\n      </tr>\n      <tr>\n        <td><strong>Désaccord technique</strong><br>(Art. 24 LIE)</td>\n        <td>S'il y a désaccord entre les organes de contrôle et les exploitants lors d'une inspection, l'autorité supérieure tranche formellement.</td>\n      </tr>\n    </tbody>\n  </table>\n</div>"
                      },
                      {
                              "title": "3. Art. 25 à 26a — Obligations documentaires et installations intérieures (OIBT)",
                              "text": "<div class=\"ocfo-legal-badge\">RS 734.0 — Art. 25, 26, 26a • Devoirs documentaires et OIBT</div>\n<ul style=\"margin:0 0 0.85rem 1.25rem; line-height:1.6; color:var(--text-secondary);\">\n  <li><strong>Obligation de renseignement et registres (Art. 25) :</strong> les entreprises d'installations à fort courant doivent fournir gratuitement aux organes de contrôle tous les plans, schémas, registres d'exploitation et rapports de sécurité exigés.</li>\n  <li><strong>Installations intérieures (Art. 26) :</strong> le contrôle officiel direct prévu par le chapitre IV de la LIE ne s'étend pas aux installations intérieures (qui sont déléguées par ordonnance fédérale séparée aux gestionnaires de réseau et organes de contrôle indépendants agréés : <strong>OIBT — RS 734.27</strong>).</li>\n  <li><strong>Prestations de l'Inspection (Art. 26a) :</strong> l'ESTI peut fournir des prestations commerciales rémunérées pour autant qu'elles soient en lien étroit avec ses tâches de droit public et ne créent pas de distorsion de concurrence.</li>\n</ul>\n<div class=\"ocfo-summary-box\">\n  <div class=\"box-title\">📌 À RETENIR</div>\n  L'exploitant est le premier responsable de la sécurité de ses ouvrages (Art. 20). L'ESTI contrôle les installations à courant fort sous la haute surveillance de l'OFEN, tandis que les installations intérieures relèvent du régime d'inspection périodique de l'OIBT (Art. 26).\n</div>"
                      }
              ],
              "practicalExample": "Un inspecteur de l'ESTI se présente pour contrôler un poste de transformation privé alimentant une scierie. L'exploitant refuse de lui donner accès aux schémas unifilaires et aux rapports d'entretien sous prétexte de confidentialité. En vertu de l'Art. 25 LIE, l'exploitant a l'obligation légale impérative de fournir tous les plans et registres nécessaires sans délai.",
              "importantPoint": "L'Art. 20 al. 1 pose que la surveillance et l'entretien incombent d'abord et toujours à l'exploitant. Le contrôle de l'ESTI ne décharge pas l'exploitant de sa responsabilité juridique.",
              "quiz": [
                      {
                              "question": "À qui incombe légalement en premier lieu la surveillance des installations électriques et de leur bon état d'entretien selon l'Art. 20 al. 1 LIE ?",
                              "options": [
                                      "À l'installateur-électricien qui a réalisé le câblage initial",
                                      "À l'exploitant (propriétaire, locataire, etc.)",
                                      "Exclusivement à l'Inspection fédérale ESTI",
                                      "À la police cantonale du lieu de situation"
                              ],
                              "correctAnswer": 1,
                              "explanation": "L'Art. 20 al. 1 LIE établit sans équivoque que la surveillance des installations électriques et de leur bon état d'entretien incombe à l'exploitant.",
                              "articleRef": "LIE — Art. 20 al. 1"
                      },
                      {
                              "question": "Pourquoi l'Art. 26 LIE précise-t-il que le contrôle du chapitre IV ne s'étend pas aux installations intérieures ?",
                              "options": [
                                      "Parce que les installations intérieures sont totalement libres de tout contrôle",
                                      "Parce que leur contrôle est délégué et régi de manière spécifique par l'OIBT (RS 734.27)",
                                      "Parce qu'elles relèvent du droit des baux et loyers uniquement",
                                      "Parce que le courant basse tension ne présente aucun risque d'incendie"
                              ],
                              "correctAnswer": 1,
                              "explanation": "L'Art. 26 LIE réserve le contrôle des installations intérieures, qui fait l'objet d'une ordonnance d'exécution spécifique du Conseil fédéral : l'Ordonnance sur les installations à basse tension (OIBT).",
                              "articleRef": "LIE — Art. 26"
                      },
                      {
                              "question": "Quelle obligation l'Art. 25 LIE impose-t-il aux entreprises d'installations à fort courant vis-à-vis des inspecteurs de l'ESTI ?",
                              "options": [
                                      "Verser 5% de leur bénéfice annuel à l'inspection",
                                      "Fournir gratuitement tous les plans, schémas, registres et rapports de sécurité demandés",
                                      "Céder la propriété de leurs lignes électriques à la Confédération",
                                      "Remplacer tous leurs câbles tous les 5 ans"
                              ],
                              "correctAnswer": 1,
                              "explanation": "L'Art. 25 LIE oblige les entreprises à mettre à disposition des organes de contrôle tous les plans, schémas et renseignements techniques nécessaires à l'exercice de leur mission.",
                              "articleRef": "LIE — Art. 25"
                      }
              ],
              "prevLessonId": "rs-734-0-lecon-6",
              "nextLessonId": "rs-734-0-lecon-8"
      },

      {
              "id": "rs-734-0-lecon-8",
              "routeId": "rs-734-0/lecon-8",
              "moduleId": "A",
              "parcoursId": "rs-734-0",
              "lessonNumber": 8,
              "totalLessons": 11,
              "code": "RS 734.0 — Leçon 8",
              "title": "Chapitre V — Dispositions concernant la responsabilité civile",
              "subtitle": "Régime de responsabilité causale objective, assurance RC et prescription (Art. 27 à 41)",
              "articlesRange": "Art. 27 à 41",
              "status": "Disponible",
              "duration": "9 min",
              "tag": "Loi fédérale",
              "xpReward": 30,
              "objective": "Maîtriser le régime civil suisse de responsabilité causale objective lié à l'électricité, identifier les conditions d'exonération draconiennes, la prescription et la nullité absolue des clauses limitatives.",
              "introduction": "Le <strong>Chapitre V (Art. 27 à 41)</strong> instaure l'un des régimes juridiques les plus protecteurs du droit suisse : la responsabilité civile causale objective de l'exploitant d'une installation à courant fort. L'exploitant répond de plein droit des dommages corporels et matériels provoqués par l'électricité sans qu'une faute doive être prouvée. La leçon détaille les motifs très stricts de libération (force majeure, faute exclusive de la victime ou d'un tiers), l'obligation impérative d'assurance responsabilité civile (Art. 38) et les délais légaux de prescription.",
              "contentSections": [
                      {
                              "title": "1. Art. 27 — Le principe fondamental de la responsabilité causale objective",
                              "text": "<div class=\"ocfo-legal-badge\">RS 734.0 — Art. 27 • Responsabilité sans faute de l'exploitant</div>\n<div class=\"ocfo-highlight-card\" style=\"margin-bottom:0.85rem;\">\n  <div class=\"card-title\">⚖️ Responsabilité causale objective (Art. 27 al. 1 LIE)</div>\n  <p style=\"line-height:1.6; color:var(--text-secondary); margin:0;\">\n    <strong>Lorsqu'une personne a été tuée ou blessée par l'exploitation d'une installation électrique</strong> à fort ou à faible courant, privée ou publique, <strong>l'exploitant est responsable du dommage causé</strong>, même en l'absence de toute faute de sa part.\n  </p>\n</div>\n<p style=\"margin-bottom:0.75rem; line-height:1.6; color:var(--text-secondary);\">\nIl s'agit d'une des responsabilités les plus strictes du droit suisse (responsabilité pour risque créé). L'exploitant ne peut s'exonérer qu'en rapportant la preuve stricte de l'un des deux motifs libératoires limitatifs (Art. 27 al. 1 in fine) :\n</p>\n<ul style=\"margin:0 0 0.85rem 1.25rem; line-height:1.6; color:var(--text-secondary);\">\n  <li><strong>1. La force majeure :</strong> événement extraordinaire, imprévisible et irrésistible (ex. séisme cataclysmique, chute de météorite). Les tempêtes ordinaires ou la foudre ne constituent PAS une force majeure exonératoire (Art. 33).</li>\n  <li><strong>2. La faute exclusive de la victime ou d'un tiers :</strong> comportement si imprévisible et grave qu'il relègue au second plan le risque inhérent à l'installation électrique.</li>\n</ul>"
                      },
                      {
                              "title": "2. Art. 28 à 35 — Pluralité d'exploitants, incendie et assurance obligatoire",
                              "text": "<div class=\"ocfo-legal-badge\">RS 734.0 — Art. 28 à 35 • Dommages matériels, incendie et assurance</div>\n<div class=\"ocfo-density-table-wrap\" style=\"margin-bottom:0.85rem;\">\n  <table class=\"ocfo-density-table\">\n    <thead>\n      <tr>\n        <th style=\"width:28%;\">Domaine</th>\n        <th style=\"width:72%;\">Règle légale impérative</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong>Pluralité d'exploitants</strong><br>(Art. 28 LIE)</td>\n        <td>Si l'installation se subdivise en plusieurs parties exploitées par des entités distinctes, elles répondent <strong>solidairement</strong> envers les tiers lésés.</td>\n      </tr>\n      <tr>\n        <td><strong>Dommages par incendie</strong><br>(Art. 29 LIE)</td>\n        <td>L'exploitant répond des dommages causés par un incendie provenant de l'exploitation de l'installation électrique.</td>\n      </tr>\n      <tr>\n        <td><strong>Assurance obligatoire</strong><br>(Art. 32 LIE)</td>\n        <td>L'exploitant d'une installation à fort courant peut être tenu de <strong>justifier d'une assurance-responsabilité civile</strong> suffisante pour couvrir les risques d'exploitation.</td>\n      </tr>\n      <tr>\n        <td><strong>Faute concomitante</strong><br>(Art. 34 LIE)</td>\n        <td>Si la victime a commis une négligence ayant contribué au dommage, le juge peut réduire les indemnités selon les règles de l'art. 44 du Code des obligations (CO).</td>\n      </tr>\n    </tbody>\n  </table>\n</div>"
                      },
                      {
                              "title": "3. Art. 37 à 41 — Prescription, for et nullité d'ordre public (Art. 39)",
                              "text": "<div class=\"ocfo-legal-badge\">RS 734.0 — Art. 37 à 41 • Prescription et règles d'ordre public</div>\n<div class=\"ocfo-warning-box\" style=\"margin-bottom:0.85rem;\">\n  <strong>🚫 Nullité absolue des décharges de responsabilité (Art. 39 LIE) :</strong> Sont nulles et sans aucune valeur légale les règlements, conventions ou déclarations écrites par lesquels un exploitant tente d'exclure ou de restreindre d'avance la responsabilité résultant de la LIE.\n</div>\n<ul style=\"margin:0 0 0.85rem 1.25rem; line-height:1.6; color:var(--text-secondary);\">\n  <li><strong>Prescription (Art. 37) :</strong> l'action en réparation se prescrit selon les dispositions générales du droit civil (délai relatif de <strong>3 ans</strong> à compter du jour où la partie lésée a eu connaissance du dommage et de la personne responsable ; délais absolus de 10 ans pour les choses et 20 ans pour les atteintes corporelles).</li>\n  <li><strong>For judiciaire (Art. 38) :</strong> les contestations civiles sont portées devant le juge ordinaire du lieu de situation de l'installation ou du domicile de la partie défenderesse.</li>\n  <li><strong>Art. 40 LIE :</strong> formellement abrogé par la loi fédérale du 19 décembre 2003.</li>\n  <li><strong>Installations intérieures (Art. 41) :</strong> le régime de responsabilité causale de la LIE s'applique également aux installations intérieures vis-à-vis des tiers.</li>\n</ul>\n<div class=\"ocfo-summary-box\">\n  <div class=\"box-title\">📌 À RETENIR</div>\n  La responsabilité de l'exploitant électrique est causale et objective (sans faute). Aucune pancarte ou contrat ne peut décharger l'exploitant de cette responsabilité (Art. 39). Seules la force majeure véritable ou la faute exclusive de la victime sont exonératoires.\n</div>"
                      }
              ],
              "practicalExample": "Un promeneur touche par mégarde un câble de mise à terre arraché lors d'un orage et subit de graves brûlures. L'exploitant du réseau affirme qu'il n'a commis aucune faute car l'orage est survenu quelques heures auparavant. Selon l'Art. 27 LIE, sa responsabilité causale est engagée sans faute, et un orage ne constitue pas un cas de force majeure exonératoire (Art. 33) : l'exploitant doit indemniser intégralement la victime.",
              "importantPoint": "L'Art. 39 LIE frappe de nullité absolue toute clause de non-responsabilité : afficher « décline toute responsabilité en cas d'électrocution » n'a aucune valeur juridique devant les tribunaux suisses.",
              "quiz": [
                      {
                              "question": "Quelle est la nature juridique de la responsabilité de l'exploitant pour les dommages corporels selon l'Art. 27 LIE ?",
                              "options": [
                                      "Une responsabilité subjective pour faute prouvée",
                                      "Une responsabilité causale objective (sans faute de l'exploitant)",
                                      "Une obligation de moyen sans responsabilité financière",
                                      "Une responsabilité subsidiaire qui ne s'applique que si l'État est insolvable"
                              ],
                              "correctAnswer": 1,
                              "explanation": "L'Art. 27 al. 1 LIE consacre une responsabilité causale objective : l'exploitant répond du dommage du seul fait de l'exploitation de l'installation électrique, indépendamment de toute faute.",
                              "articleRef": "LIE — Art. 27 al. 1"
                      },
                      {
                              "question": "Quelle est la valeur juridique d'un panneau ou d'un contrat par lequel un exploitant déclare décliner toute responsabilité en cas d'accident électrique ?",
                              "options": [
                                      "Il libère totalement l'exploitant si le panneau est visible à 10 mètres",
                                      "Il réduit l'indemnité de moitié",
                                      "Il est nul de plein droit et sans aucune valeur légale selon l'Art. 39 LIE",
                                      "Il est valable uniquement pour les installations intérieures"
                              ],
                              "correctAnswer": 2,
                              "explanation": "L'Art. 39 LIE énonce clairement que sont sans valeur légale les règlements, avis ou conventions excluant ou limitant d'avance la responsabilité résultant de la LIE.",
                              "articleRef": "LIE — Art. 39"
                      },
                      {
                              "question": "Quels sont les deux seuls motifs permettant à l'exploitant de s'exonérer de sa responsabilité selon l'Art. 27 al. 1 LIE ?",
                              "options": [
                                      "Le manque de personnel et la panne de matériel",
                                      "La force majeure ou la faute/négligence de la victime ou d'un tiers",
                                      "L'absence de plainte pénale dans les 24 heures",
                                      "L'ancienneté de l'installation supérieure à 30 ans"
                              ],
                              "correctAnswer": 1,
                              "explanation": "L'exploitant est responsable à moins qu'il ne prouve que le dommage est dû soit à une force majeure, soit à la faute ou à la négligence de la personne lésée ou d'un tiers.",
                              "articleRef": "LIE — Art. 27 al. 1"
                      }
              ],
              "prevLessonId": "rs-734-0-lecon-7",
              "nextLessonId": "rs-734-0-lecon-9"
      },

      {
              "id": "rs-734-0-lecon-9",
              "routeId": "rs-734-0/lecon-9",
              "moduleId": "A",
              "parcoursId": "rs-734-0",
              "lessonNumber": 9,
              "totalLessons": 11,
              "code": "RS 734.0 — Leçon 9",
              "title": "Chapitre VI — Expropriation",
              "subtitle": "Droit d'expropriation, utilité publique et renvoi à la LEx (Art. 42 à 54)",
              "articlesRange": "Art. 42 à 54",
              "status": "Disponible",
              "duration": "6 min",
              "tag": "Loi fédérale",
              "xpReward": 30,
              "objective": "Identifier les bénéficiaires et les conditions d'exercice du droit d'expropriation pour les infrastructures de réseau électrique et comprendre le renvoi vers la Loi fédérale sur l'expropriation (LEx).",
              "introduction": "Considérant l'approvisionnement électrique comme un intérêt public national prépondérant, le <strong>Chapitre VI de la LIE (Art. 42 à 54)</strong> octroie aux exploitants le droit d'expropriation pour les ouvrages nécessaires au transport et à la distribution de l'énergie. Renvoyant directement à la Loi fédérale sur l'expropriation (LEx), cette leçon expose l'acquisition des droits réels (servitudes de passage de ligne, emprises de pylônes), la fixation de la pleine indemnité et la prérogative légale d'accès d'urgence aux fonds voisins en cas d'avarie (Art. 47 LIE).",
              "contentSections": [
                      {
                              "title": "1. Art. 43 à 45 — Titulaires et exercice du droit d'expropriation",
                              "text": "<div class=\"ocfo-legal-badge\">RS 734.0 — Art. 43 à 45 • L'expropriation pour utilité publique</div>\n<p style=\"margin-bottom:0.75rem; line-height:1.6; color:var(--text-secondary);\">\nL'approvisionnement en électricité de la Suisse étant un intérêt national vital, la section <strong>VI de la LIE</strong> confère aux gestionnaires de réseau le droit de requérir l'expropriation des droits réels nécessaires :\n</p>\n<ul style=\"margin:0 0 0.85rem 1.25rem; line-height:1.6; color:var(--text-secondary);\">\n  <li><strong>Titulaires du droit (Art. 43 al. 1) :</strong> l'entreprise qui sollicite l'approbation des plans dispose de plein droit de la faculté d'exercer le droit d'expropriation.</li>\n  <li><strong>Délégation aux preneurs d'énergie (Art. 43 al. 2) :</strong> le DETEC peut également accorder ce droit aux preneurs d'énergie pour des raccordements industriels majeurs.</li>\n  <li><strong>Ouvrages concernés (Art. 44) :</strong> le droit d'expropriation peut être exercé pour la construction, la transformation et la sécurisation des <strong>installations de transport et de distribution d'électricité</strong> reconnues d'utilité publique.</li>\n  <li><strong>Procédure combinée (Art. 45) :</strong> la procédure d'expropriation est instruite de manière coordonnée dans le cadre même de la procédure d'approbation des plans selon la <strong>Loi fédérale du 20 juin 1930 sur l'expropriation (LEx — RS 711)</strong>.</li>\n</ul>"
                      },
                      {
                              "title": "2. Art. 42 et 46 à 54 — Dispositions procédurales abrogées",
                              "text": "<div class=\"ocfo-legal-badge\">RS 734.0 — Art. 42, 46 à 54 • Statut des articles abrogés</div>\n<div class=\"ocfo-abroge-card\" style=\"margin-bottom:0.85rem;\">\n  <span class=\"ocfo-abroge-badge\">ARTICLES ABROGÉS</span>\n  <strong>Art. 42 et Art. 46 à 54 LIE :</strong> Intégralement abrogés par la Loi fédérale du 20 juin 1930 sur l'expropriation (LEx).\n</div>\n<p style=\"margin-bottom:0.65rem; line-height:1.6; color:var(--text-secondary);\">\nCes anciens articles contenaient les règles procédurales spécifiques d'évaluation et de commissions d'estimation de 1902. Lors de l'unification du droit suisse de l'expropriation en 1930, toutes ces règles ont été transférées dans la <strong>LEx moderne</strong> (RS 711), garantissant une pleine indemnité en capital et la compétence des commissions fédérales d'estimation.\n</p>\n<div class=\"ocfo-summary-box\">\n  <div class=\"box-title\">📌 À RETENIR</div>\n  Le gestionnaire de réseau qui demande l'approbation des plans bénéficie du droit d'expropriation (Art. 43). La fixation des indemnités pour passage de câbles ou pose de pylônes relève entièrement de la Loi fédérale sur l'expropriation (LEx).\n</div>"
                      }
              ],
              "practicalExample": "Pour construire une ligne souterraine 50 kV, un distributeur doit traverser plusieurs parcelles privées. Un propriétaire refuse catégoriquement toute servitude de passage malgré une offre d'indemnité conforme au marché. En vertu des Art. 43 et 45 LIE, l'entreprise peut engager la procédure d'expropriation formelle coordonnée avec l'approbation des plans de l'OFEN, conformément à la LEx.",
              "importantPoint": "Le droit d'expropriation découle de la loi pour l'entreprise requérante (Art. 43), mais l'indemnisation intégrale du propriétaire exproprié est garantie par la LEx (Art. 45).",
              "quiz": [
                      {
                              "question": "Qui dispose du droit d'expropriation lors d'un projet de réseau électrique selon l'Art. 43 al. 1 LIE ?",
                              "options": [
                                      "Exclusivement le Conseil d'État du canton",
                                      "L'entreprise qui sollicite l'approbation des plans",
                                      "Chaque citoyen suisse propriétaire d'actions du distributeur",
                                      "La commune où se situe le chantier"
                              ],
                              "correctAnswer": 1,
                              "explanation": "L'Art. 43 al. 1 LIE dispose que l'entreprise qui sollicite l'approbation des plans dispose du droit d'expropriation.",
                              "articleRef": "LIE — Art. 43 al. 1"
                      },
                      {
                              "question": "Quelle loi fédérale règle l'ensemble de la procédure d'indemnisation et de liquidation de l'expropriation selon l'Art. 45 LIE ?",
                              "options": [
                                      "Le Code civil suisse (CCS)",
                                      "La Loi fédérale sur l'expropriation (LEx du 20 juin 1930)",
                                      "L'Ordonnance sur le cadastre foncier",
                                      "La Loi fédérale sur l'énergie (LEne)"
                              ],
                              "correctAnswer": 1,
                              "explanation": "L'Art. 45 LIE renvoie intégralement à la Loi fédérale sur l'expropriation (LEx — RS 711) pour régler l'exercice et l'indemnisation des droits expropriés.",
                              "articleRef": "LIE — Art. 45"
                      },
                      {
                              "question": "Dans quel cas l'expropriant peut-il obtenir l'entrée en possession anticipée selon la législation sur l'expropriation (Art. 45 LIE / LEx) ?",
                              "options": [
                                      "En tout temps et sans motif particulier",
                                      "Lorsque l'attente causerait un préjudice sérieux à l'exécution de l'ouvrage d'utilité publique",
                                      "Uniquement après un délai incompressible de 10 ans d'instruction",
                                      "Si le propriétaire accepte d'abandonner ses terres sans compensation financière"
                              ],
                              "correctAnswer": 1,
                              "explanation": "En vertu du droit de l'expropriation (LEx renvoyé par l'Art. 45 LIE), l'entrée en possession anticipée peut être accordée si le retard de prise de possession compromet sérieusement l'ouvrage d'intérêt public, moyennant versement d'acomptes.",
                              "articleRef": "LIE — Art. 45 / LEx"
                      }
              ],
              "prevLessonId": "rs-734-0-lecon-8",
              "nextLessonId": "rs-734-0-lecon-10"
      },

      {
              "id": "rs-734-0-lecon-10",
              "routeId": "rs-734-0/lecon-10",
              "moduleId": "A",
              "parcoursId": "rs-734-0",
              "lessonNumber": 10,
              "totalLessons": 11,
              "code": "RS 734.0 — Leçon 10",
              "title": "Chapitre VII — Dispositions pénales",
              "subtitle": "Infractions, sanctions financières, responsabilité en entreprise et DPA (Art. 55 à 60)",
              "articlesRange": "Art. 55 à 60",
              "status": "Disponible",
              "duration": "7 min",
              "tag": "Loi fédérale",
              "xpReward": 30,
              "objective": "Connaître le barème précis des sanctions pénales prévues par la LIE, les comportements réprimés (construction sans permis, mise en service dangereuse), et l'application du Droit pénal administratif (DPA).",
              "introduction": "Pour assurer l'application effective des normes de sécurité, le <strong>Chapitre VII (Art. 55 à 60)</strong> réprime pénalement les infractions et manquements graves aux dispositions de la LIE. Qu'il s'agisse de violations intentionnelles ou par négligence, la loi prévoit des peines d'amende pouvant s'élever jusqu'à 100 000 CHF. Cette leçon détaille l'articulation avec la Loi fédérale sur le droit pénal administratif (DPA), la responsabilité pénale au sein des entreprises et la répartition des compétences de poursuite entre l'OFEN et les tribunaux cantonaux.",
              "contentSections": [
                      {
                              "title": "1. Art. 55 — Les infractions et le barème des peines d'amende",
                              "text": "<div class=\"ocfo-legal-badge\">RS 734.0 — Art. 55 • Contraventions pénales</div>\n<p style=\"margin-bottom:0.75rem; line-height:1.6; color:var(--text-secondary);\">\nLa LIE protège pénalement la sécurité publique contre les constructions illicites et les mises en service téméraires :\n</p>\n<div class=\"ocfo-density-table-wrap\" style=\"margin-bottom:0.85rem;\">\n  <table class=\"ocfo-density-table\">\n    <thead>\n      <tr>\n        <th style=\"width:25%;\">Degré de faute</th>\n        <th style=\"width:25%;\">Montant maximal</th>\n        <th style=\"width:50%;\">Comportements réprimés par l'Art. 55 LIE</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong>Intentionnel</strong><br>(Art. 55 al. 1)</td>\n        <td><strong>Amende jusqu'à 100 000 francs</strong></td>\n        <td>\n          • Construire ou modifier une installation sans approbation des plans (let. a).<br>\n          • Mettre en service une installation ne répondant pas aux prescriptions de sécurité de l'Art. 3 (let. b).<br>\n          • Omettre d'effectuer les contrôles périodiques prescrits ou d'éliminer les défauts constatés (let. c).<br>\n          • Entraver les organes de contrôle ou refuser de leur présenter les registres et plans exigés (let. d).\n        </td>\n      </tr>\n      <tr>\n        <td><strong>Négligence</strong><br>(Art. 55 al. 2)</td>\n        <td><strong>Amende jusqu'à 40 000 francs</strong></td>\n        <td>Mêmes comportements commis par imprévoyance coupable, inattention ou négligence professionnelle.</td>\n      </tr>\n    </tbody>\n  </table>\n</div>"
                      },
                      {
                              "title": "2. Art. 56 et 57 — Infractions d'entreprise et Droit pénal administratif (DPA)",
                              "text": "<div class=\"ocfo-legal-badge\">RS 734.0 — Art. 56 et 57 • Responsabilité pénale et procédure DPA</div>\n<ul style=\"margin:0 0 0.85rem 1.25rem; line-height:1.6; color:var(--text-secondary);\">\n  <li><strong>Infractions commises dans une entreprise (Art. 56) :</strong> les administrateurs, directeurs ou gérants qui, intentionnellement ou par négligence, ont enfreint la loi ou n'ont pas empêché une infraction sont personnellement punissables (application des art. 6 et 7 de la loi sur le droit pénal administratif).</li>\n  <li><strong>Application de la DPA (Art. 57 al. 1) :</strong> la <strong>Loi fédérale du 22 mars 1974 sur le droit pénal administratif (DPA — RS 313.0)</strong> est applicable à la poursuite des contraventions de la LIE.</li>\n  <li><strong>Autorité de poursuite (Art. 57 al. 2) :</strong> l'autorité compétente pour poursuivre et juger les infractions administratives de la LIE est l'<strong>Office fédéral de l'énergie (OFEN)</strong>, ou l'Inspection (ESTI) dans les domaines délégués.</li>\n</ul>\n<div class=\"ocfo-abroge-card\" style=\"margin-bottom:0.85rem;\">\n  <span class=\"ocfo-abroge-badge\">ARTICLES ABROGÉS</span>\n  <strong>Art. 58, 59 et 60 LIE :</strong> Intégralement abrogés lors des révisions formelles de la législation pénale fédérale.\n</div>\n<div class=\"ocfo-summary-box\">\n  <div class=\"box-title\">📌 À RETENIR</div>\n  La construction sans permis ou le refus d'éliminer des défauts d'isolement dangereux est passible d'une amende pénale pouvant atteindre 100 000 CHF (40 000 CHF par négligence). La poursuite est instruite par l'OFEN selon le Droit pénal administratif.\n</div>"
                      }
              ],
              "practicalExample": "Un chef d'exploitation d'une usine chimique décide de raccorder un transformateur 20 kV sans demander l'approbation préalable des plans pour gagner du temps. En cas de contrôle, il est passible d'une amende pénale pouvant atteindre 100 000 CHF pour infraction intentionnelle (Art. 55 al. 1 let. a LIE), sanction prononcée par l'OFEN selon le DPA (Art. 57).",
              "importantPoint": "L'amende maximale prévue par la LIE est de 100 000 francs en cas d'acte intentionnel et de 40 000 francs par négligence (Art. 55).",
              "quiz": [
                      {
                              "question": "Quel est le montant maximal de l'amende pénale pour une infraction intentionnelle commise selon l'Art. 55 al. 1 LIE ?",
                              "options": [
                                      "10 000 francs",
                                      "40 000 francs",
                                      "100 000 francs",
                                      "500 000 francs"
                              ],
                              "correctAnswer": 2,
                              "explanation": "L'Art. 55 al. 1 LIE punit d'une amende de 100 000 francs au plus celui qui, intentionnellement, enfreint les dispositions de la loi (ex. construire sans approbation de plans).",
                              "articleRef": "LIE — Art. 55 al. 1"
                      },
                      {
                              "question": "Quelle autorité fédérale est chargée de poursuivre et de juger les infractions pénales de la LIE selon l'Art. 57 al. 2 ?",
                              "options": [
                                      "Le Ministère public du canton",
                                      "L'Office fédéral de l'énergie (OFEN)",
                                      "Le Tribunal fédéral des assurances",
                                      "Le juge de paix local"
                              ],
                              "correctAnswer": 1,
                              "explanation": "Selon l'Art. 57 al. 2 LIE, l'autorité de poursuite et de jugement en matière de droit pénal administratif de la LIE est l'Office fédéral de l'énergie (OFEN).",
                              "articleRef": "LIE — Art. 57 al. 2"
                      },
                      {
                              "question": "Quel est le montant maximal de l'amende pénale encourue en cas d'infraction commise par négligence selon l'Art. 55 al. 2 LIE ?",
                              "options": [
                                      "5 000 francs",
                                      "20 000 francs",
                                      "40 000 francs",
                                      "100 000 francs"
                              ],
                              "correctAnswer": 2,
                              "explanation": "L'Art. 55 al. 2 LIE prévoit que si la contravention a été commise par négligence, le montant maximal de l'amende est de 40 000 francs (contre 100 000 francs en cas de faute intentionnelle).",
                              "articleRef": "LIE — Art. 55 al. 2"
                      }
              ],
              "prevLessonId": "rs-734-0-lecon-9",
              "nextLessonId": "rs-734-0-lecon-11"
      },

      {
              "id": "rs-734-0-lecon-11",
              "routeId": "rs-734-0/lecon-11",
              "moduleId": "A",
              "parcoursId": "rs-734-0",
              "lessonNumber": 11,
              "totalLessons": 11,
              "code": "RS 734.0 — Leçon 11",
              "title": "Chapitre VIII — Dispositions finales",
              "subtitle": "Abrogations antérieures, dispositions transitoires et réformes récentes (Art. 61 à 64)",
              "articlesRange": "Art. 61 à 64",
              "status": "Disponible",
              "duration": "5 min",
              "tag": "Loi fédérale",
              "xpReward": 30,
              "objective": "Comprendre l'historique et les dispositions transitoires de la LIE, le traitement des dossiers d'approbation des plans pendants et la pérennité du socle légal électrique suisse.",
              "introduction": "Le <strong>Chapitre VIII de la LIE (Art. 61 à 64)</strong> clôt la loi par ses dispositions finales. Il régit l'abrogation des anciennes législations cantonales et fédérales, garantit la sécurité juridique par des dispositions transitoires protégeant les installations existantes conformes et confère au Conseil fédéral la délégation de compétence pour édicter les ordonnances d'exécution (OCFo, OIBT, OTEM, etc.). Cette leçon résume également les réformes contemporaines intégrées dans le texte légal jusqu'à son état officiel en vigueur au 1<sup>er</sup> avril 2026.",
              "contentSections": [
                      {
                              "title": "1. Art. 61 à 64 — Abrogations et droit transitoire",
                              "text": "<div class=\"ocfo-legal-badge\">RS 734.0 — Art. 61 à 64 • Dispositions finales</div>\n<p style=\"margin-bottom:0.75rem; line-height:1.6; color:var(--text-secondary);\">\nLa dernière partie de la LIE règle les transitions juridiques entre les époques législatives successives :\n</p>\n<ul style=\"margin:0 0 0.85rem 1.25rem; line-height:1.6; color:var(--text-secondary);\">\n  <li><strong>Abrogation du droit antérieur (Art. 61) :</strong> abroge formellement la loi fédérale du 26 juin 1889 concernant l'établissement de lignes télégraphiques et téléphoniques ainsi que l'art. 66 de l'ancien code pénal fédéral de 1853.</li>\n  <li><strong>Art. 62 LIE :</strong> abrogé.</li>\n  <li><strong>Procédures d'approbation pendantes (Art. 63) :</strong> les demandes d'approbation des plans en cours d'examen lors de l'entrée en vigueur de révisions législatives sont en règle générale menées à terme selon l'ancien droit, pour garantir la sécurité juridique des investisseurs.</li>\n  <li><strong>Dispositions de la révision de 2017 (Art. 64) :</strong> l'Art. 15c (câblage souterrain des lignes de transport) ne s'applique pas aux demandes déposées avant l'entrée en vigueur de la modification du 15 décembre 2017.</li>\n</ul>"
                      },
                      {
                              "title": "2. Pérennité et actualité de la LIE (État au 1er avril 2026)",
                              "text": "<div class=\"ocfo-legal-badge\">RS 734.0 • Synthèse historique et juridique</div>\n<p style=\"margin-bottom:0.75rem; line-height:1.6; color:var(--text-secondary);\">\nAdoptée le <strong>24 juin 1902</strong> au début de l'électrification de la Suisse, la LIE a démontré une extraordinaire résilience juridique. Grâce à ses révisions successives (notamment l'intégration du plan sectoriel et la priorité au câblage souterrain en 2017/2019), elle demeure dans son <strong>état au 1<sup>er</sup> avril 2026</strong> la clé de voûte de toute la réglementation suisse :\n</p>\n<div class=\"ocfo-highlight-card\" style=\"margin-bottom:0.85rem;\">\n  <div class=\"card-title\">🏛️ La pyramide réglementaire découlant de la LIE</div>\n  <div style=\"font-size:0.86rem; line-height:1.6; color:var(--text-secondary);\">\n    <strong>1. LIE (RS 734.0) :</strong> Loi-cadre fédérale de rang constitutionnel délégué.<br>\n    <strong>2. OCFo (RS 734.2) :</strong> Ordonnance d'exécution sur le courant fort.<br>\n    <strong>3. OIBT (RS 734.27) :</strong> Ordonnance sur les installations intérieures à basse tension.<br>\n    <strong>4. Normes techniques (NIBT, EN, CEI) :</strong> Règles de la technique reconnues obligatoires (Art. 15 al. 2).\n  </div>\n</div>\n<div class=\"ocfo-summary-box\">\n  <div class=\"box-title\">📌 À RETENIR</div>\n  La LIE du 24 juin 1902, continuellement adaptée jusqu'à son état au 1er avril 2026, fonde la légitimité de toutes les ordonnances électrotechniques suisses et garantit la conciliation entre sécurité des personnes, transition énergétique et protection des territoires.\n</div>"
                      }
              ],
              "practicalExample": "Un distributeur d'énergie a déposé un dossier d'approbation des plans pour une ligne de transport juste avant l'entrée en vigueur de la nouvelle loi sur les réseaux électriques. Conformément aux dispositions transitoires de l'Art. 63 et 64 LIE, sa demande continue d'être instruite selon l'ancien cadre légal pour préserver la confiance légitime et les investissements déjà engagés.",
              "importantPoint": "Bien que promulguée en 1902, la LIE est un texte vivant constamment révisé, dont les articles modernes (IIIa et IIIc) encadrent la transition énergétique suisse au 1er avril 2026.",
              "quiz": [
                      {
                              "question": "De quelle année date initialement la Loi fédérale sur les installations électriques (LIE) ?",
                              "options": [
                                      "1848",
                                      "24 juin 1902",
                                      "1971",
                                      "2002"
                              ],
                              "correctAnswer": 1,
                              "explanation": "La LIE a été adoptée par l'Assemblée fédérale le 24 juin 1902 et demeure, avec ses révisions, le texte fondamental suisse en vigueur.",
                              "articleRef": "LIE — Titre et préambule"
                      },
                      {
                              "question": "Selon l'Art. 61 LIE, quelle ancienne loi fédérale a été expressément abrogée lors de l'entrée en vigueur de la LIE ?",
                              "options": [
                                      "La loi sur les chemins de fer de 1852",
                                      "La loi fédérale du 26 juin 1889 concernant l'établissement de lignes télégraphiques et téléphoniques",
                                      "La loi sur le charbon de 1874",
                                      "La loi sur l'utilisation des forces hydrauliques"
                              ],
                              "correctAnswer": 1,
                              "explanation": "L'Art. 61 LIE énonce que la loi fédérale du 26 juin 1889 concernant l'établissement de lignes télégraphiques et téléphoniques est abrogée par l'entrée en vigueur de la LIE.",
                              "articleRef": "LIE — Art. 61"
                      },
                      {
                              "question": "Selon l'Art. 64 LIE, à quels projets les nouvelles dispositions de 2017 sur le câblage souterrain (Art. 15c) s'appliquent-elles ?",
                              "options": [
                                      "Rétroactivement à toutes les lignes construites depuis 1902",
                                      "Aux demandes d'approbation des plans déposées après l'entrée en vigueur de la modification du 15 décembre 2017",
                                      "Uniquement aux installations ferroviaires des CFF",
                                      "À aucune ligne de transport existante ou nouvelle"
                              ],
                              "correctAnswer": 1,
                              "explanation": "L'Art. 64 LIE (disposition transitoire de la révision de 2017) précise que l'Art. 15c ne s'applique pas aux demandes d'approbation de plans déposées avant l'entrée en vigueur de la modification.",
                              "articleRef": "LIE — Art. 64"
                      }
              ],
              "prevLessonId": "rs-734-0-lecon-10",
              "nextLessonId": "rs-734-0-evaluation-finale"
      },

      {
              "id": "rs-734-0-evaluation-finale",
              "routeId": "rs-734-0/evaluation-finale",
              "moduleId": "A",
              "parcoursId": "rs-734-0",
              "isFinalEvaluation": true,
              "code": "RS 734.0 — EXAMEN",
              "title": "Évaluation finale — RS 734.0 (LIE)",
              "subtitle": "Certification globale sur les 11 parties de la Loi sur les installations électriques",
              "articlesRange": "Art. 1 à 64",
              "status": "Disponible",
              "duration": "25 min",
              "tag": "Évaluation officielle",
              "xpReward": 100,
              "objective": "Valider formellement la maîtrise globale de la Loi fédérale sur les installations électriques (RS 734.0, état au 1er avril 2026).",
              "introduction": "Cette <strong>évaluation finale officielle</strong> valide l'assimilation approfondie de la <strong>Loi fédérale sur les installations électriques (LIE — RS 734.0)</strong>, état au 1<sup>er</sup> avril 2026. Composée de 16 questions d'examen rigoureuses à choix multiples, elle couvre l'intégralité des 11 chapitres de la loi : surveillance fédérale, délimitation faible/fort courant, plans sectoriels et approbation des plans, zones réservées, contrôles officiels ESTI, responsabilité civile causale objective, expropriation et droit pénal de l'électricité. Un score minimal de 75 % (12/16) est requis pour réussir la certification et obtenir vos 100 XP.",
              "contentSections": [
                      {
                              "title": "Instructions pour l'évaluation finale",
                              "text": "<div class=\"ocfo-legal-badge\">Examen officiel de certification • RS 734.0 LIE</div>\n<p style=\"margin-bottom:0.75rem; line-height:1.6; color:var(--text-secondary);\">\nCette évaluation finale récapitule l'intégralité des <strong>11 leçons</strong> du module consacré à la <strong>Loi sur les installations électriques (LIE — RS 734.0)</strong>, état au 1<sup>er</sup> avril 2026.\n</p>\n<ul style=\"margin:0 0 0.85rem 1.25rem; line-height:1.6; color:var(--text-secondary);\">\n  <li><strong>Nombre de questions :</strong> 16 questions d'examen à choix multiple.</li>\n  <li><strong>Couverture légale :</strong> Parties I à VIII (y compris IIIa, IIIb, IIIc).</li>\n  <li><strong>Seuil de validation :</strong> 80% de réponses exactes (13/16).</li>\n  <li><strong>Récompense :</strong> 100 XP et obtention du badge « Expert RS 734.0 — LIE ».</li>\n</ul>"
                      }
              ],
              "quiz": [
                      {
                              "question": "1. Quel critère juridique fondamental distingue une installation à faible courant d'une installation à fort courant selon l'Art. 2 LIE ?",
                              "options": [
                                      "Une intensité de courant supérieure à 16 Ampères",
                                      "Le fait de produire ou d'utiliser des courants présentant dans certaines circonstances un danger pour les personnes ou les choses",
                                      "La présence obligatoire d'un câble blindé à tresse d'acier",
                                      "La tension supérieure à 50 Volts en continu uniquement"
                              ],
                              "correctAnswer": 1,
                              "explanation": "L'Art. 2 al. 2 LIE qualifie d'installations à fort courant celles qui produisent ou utilisent des courants présentant dans certaines circonstances un danger pour les personnes ou les choses.",
                              "articleRef": "LIE — Art. 2 al. 2"
                      },
                      {
                              "question": "2. En cas de doute sur la qualification faible/fort courant d'un équipement, qui statue en dernière instance ?",
                              "options": [
                                      "L'Office fédéral de l'énergie (OFEN)",
                                      "L'Inspection fédérale ESTI",
                                      "Le Département fédéral de l'environnement, des transports, de l'énergie et de la communication (DETEC)",
                                      "Le Tribunal de district du lieu d'exploitation"
                              ],
                              "correctAnswer": 2,
                              "explanation": "L'Art. 2 al. 3 LIE attribue expressément au DETEC le pouvoir de statuer en dernière instance en cas de doute.",
                              "articleRef": "LIE — Art. 2 al. 3"
                      },
                      {
                              "question": "3. Dans quel cas une installation à faible courant est-elle assujettie aux dispositions de la LIE selon l'Art. 4 al. 1 ?",
                              "options": [
                                      "Dès lors qu'elle est raccordée à l'internet public",
                                      "Lorsqu'elle emprunte le domaine public ou celui des chemins de fer, ou peut causer des perturbations/dangers par proximité avec du fort courant",
                                      "Uniquement si sa longueur dépasse 5 kilomètres",
                                      "Si elle utilise des transformateurs électroniques"
                              ],
                              "correctAnswer": 1,
                              "explanation": "L'Art. 4 al. 1 LIE énumère les 3 cas d'assujettissement du faible courant : emprunt du domaine public, du domaine ferroviaire, ou risque d'interférence/danger avec le fort courant.",
                              "articleRef": "LIE — Art. 4 al. 1"
                      },
                      {
                              "question": "4. Où s'arrêtent légalement les installations intérieures selon la définition de l'Art. 14 LIE ?",
                              "options": [
                                      "Au niveau de la prise de terre principale",
                                      "Jusqu'aux coupe-surintensité généraux ou boîtes de dérivation reliant l'ouvrage au réseau extérieur",
                                      "À la porte d'entrée de l'immeuble",
                                      "Aux disjoncteurs divisionnaires des appareils terminaux"
                              ],
                              "correctAnswer": 1,
                              "explanation": "L'Art. 14 LIE définit les installations intérieures comme les ouvrages intérieurs jusqu'aux coupe-surintensité généraux ou boîtes de dérivation de raccordement extérieur.",
                              "articleRef": "LIE — Art. 14"
                      },
                      {
                              "question": "5. Quel est le principe légal impératif pour la pose de nouvelles lignes de distribution (MT/BT) selon l'Art. 15b LIE ?",
                              "options": [
                                      "L'obligation de privilégier les lignes aériennes pour un accès visuel aisé",
                                      "Le principe du câblage souterrain, sauf surcoûts globaux disproportionnés",
                                      "L'obligation de poser tous les câbles dans des galeries visitables",
                                      "La liberté totale laissée au fournisseur d'énergie sans contrôle"
                              ],
                              "correctAnswer": 1,
                              "explanation": "Selon l'Art. 15b al. 1 LIE, les lignes de réseau de distribution doivent être établies sous forme de câbles souterrains sauf surcoûts disproportionnés.",
                              "articleRef": "LIE — Art. 15b al. 1"
                      },
                      {
                              "question": "6. Quel est le seuil de tension nominale à partir duquel une ligne électrique fait obligatoirement l'objet d'un plan sectoriel selon l'Art. 15e LIE ?",
                              "options": [
                                      "Égale ou supérieure à 50 kV",
                                      "Égale ou supérieure à 132 kV",
                                      "Égale ou supérieure à 220 kV",
                                      "Uniquement dès 380 kV"
                              ],
                              "correctAnswer": 2,
                              "explanation": "L'Art. 15e al. 1 LIE fixe le seuil obligatoire de la procédure de plan sectoriel aux lignes d'une tension nominale égale ou supérieure à 220 kV.",
                              "articleRef": "LIE — Art. 15e al. 1"
                      },
                      {
                              "question": "7. Quelle autorité fédérale approuve en dernière instance le plan sectoriel des lignes de transport selon l'Art. 15k LIE ?",
                              "options": [
                                      "L'Inspection fédérale ESTI",
                                      "Le Conseil fédéral",
                                      "Le Parlement fédéral (Conseil national et Conseil des États)",
                                      "L'Office fédéral du développement territorial (ARE)"
                              ],
                              "correctAnswer": 1,
                              "explanation": "C'est le Conseil fédéral qui approuve formellement le plan sectoriel selon l'Art. 15k LIE.",
                              "articleRef": "LIE — Art. 15k"
                      },
                      {
                              "question": "8. Quelle autorité est compétente pour approuver les plans si aucune opposition n'a été formulée (Art. 16 al. 2 let. a LIE) ?",
                              "options": [
                                      "L'Inspection fédérale des installations à courant fort (ESTI)",
                                      "L'Office fédéral de l'énergie (OFEN)",
                                      "Le préfet du district",
                                      "L'Office cantonal de l'énergie"
                              ],
                              "correctAnswer": 0,
                              "explanation": "En l'absence d'opposition non liquidée, l'ESTI est l'autorité d'approbation ordinaire selon l'Art. 16 al. 2 let. a LIE.",
                              "articleRef": "LIE — Art. 16 al. 2 let. a"
                      },
                      {
                              "question": "9. Quelle est la portée juridique de l'« effet de concentration » garanti par l'Art. 16b LIE ?",
                              "options": [
                                      "Il oblige à regrouper tous les câbles dans une seule tranchée",
                                      "La décision d'approbation fédérale englobe toutes les autorisations fédérales, cantonales et communales nécessaires",
                                      "Il concentre la propriété des réseaux sur une unique société anonyme",
                                      "Il limite la durée des chantiers à 12 mois maximum"
                              ],
                              "correctAnswer": 1,
                              "explanation": "L'Art. 16b LIE dispose que l'approbation des plans délivrée par l'autorité fédérale englobe toutes les autorisations requises par le droit public fédéral, cantonal et communal.",
                              "articleRef": "LIE — Art. 16b"
                      },
                      {
                              "question": "10. Quelle est la durée de validité maximale d'une zone réservée fixée par l'OFEN selon l'Art. 18 al. 4 LIE ?",
                              "options": [
                                      "1 an renouvelable chaque mois",
                                      "5 ans au plus, avec prolongation possible de 3 ans au maximum",
                                      "10 ans fermes sans prolongation",
                                      "25 ans"
                              ],
                              "correctAnswer": 1,
                              "explanation": "L'Art. 18 al. 4 LIE fixe la validité initiale à 5 ans au plus, prorogeable de 3 ans au maximum pour de justes motifs.",
                              "articleRef": "LIE — Art. 18 al. 4"
                      },
                      {
                              "question": "11. À qui incombe légalement la surveillance et le bon entretien d'une installation selon l'Art. 20 al. 1 LIE ?",
                              "options": [
                                      "À l'exploitant (propriétaire, locataire, etc.)",
                                      "À l'assureur incendie",
                                      "Exclusivement aux inspecteurs de l'ESTI",
                                      "Aux sapeurs-pompiers de la commune"
                              ],
                              "correctAnswer": 0,
                              "explanation": "L'Art. 20 al. 1 LIE attribue explicitement la charge de la surveillance et de l'entretien permanent à l'exploitant.",
                              "articleRef": "LIE — Art. 20 al. 1"
                      },
                      {
                              "question": "12. Quelle est la nature de la responsabilité civile de l'exploitant électrique selon l'Art. 27 al. 1 LIE ?",
                              "options": [
                                      "Une responsabilité pour faute grave uniquement",
                                      "Une responsabilité causale objective (sans faute)",
                                      "Une simple obligation morale non sanctionnée par les juges",
                                      "Une responsabilité limitée à 5 000 francs par sinistre"
                              ],
                              "correctAnswer": 1,
                              "explanation": "L'Art. 27 al. 1 LIE institue une responsabilité causale objective : l'exploitant répond du dommage corporel causé par son installation sans qu'aucune faute ne doive être prouvée.",
                              "articleRef": "LIE — Art. 27 al. 1"
                      },
                      {
                              "question": "13. Quelle est la conséquence juridique d'une clause contractuelle excluant d'avance la responsabilité de l'exploitant selon l'Art. 39 LIE ?",
                              "options": [
                                      "Elle est parfaitement valable si elle est écrite en rouge",
                                      "Elle réduit l'indemnisation de 50%",
                                      "Elle est nulle et sans aucune valeur légale",
                                      "Elle est soumise à homologation du préfet"
                              ],
                              "correctAnswer": 2,
                              "explanation": "L'Art. 39 LIE frappe de nullité absolue toutes les conventions ou déclarations écrites dérogeant ou limitant la responsabilité de la LIE.",
                              "articleRef": "LIE — Art. 39"
                      },
                      {
                              "question": "14. Quelle loi fédérale régit l'indemnisation des propriétaires en cas d'expropriation pour une ligne électrique (Art. 45 LIE) ?",
                              "options": [
                                      "La Loi fédérale sur l'expropriation (LEx du 20 juin 1930)",
                                      "Le Code des obligations (CO)",
                                      "La Loi sur la circulation routière (LCR)",
                                      "La Loi sur les cartels (LCart)"
                              ],
                              "correctAnswer": 0,
                              "explanation": "L'Art. 45 LIE renvoie expressément à la Loi fédérale sur l'expropriation (LEx — RS 711).",
                              "articleRef": "LIE — Art. 45"
                      },
                      {
                              "question": "15. Quel est le montant maximal de l'amende pénale pour une infraction intentionnelle selon l'Art. 55 al. 1 LIE ?",
                              "options": [
                                      "10 000 francs",
                                      "40 000 francs",
                                      "100 000 francs",
                                      "1 000 000 de francs"
                              ],
                              "correctAnswer": 2,
                              "explanation": "L'Art. 55 al. 1 LIE punit les contraventions intentionnelles d'une amende allant jusqu'à 100 000 francs (40 000 francs par négligence).",
                              "articleRef": "LIE — Art. 55 al. 1"
                      },
                      {
                              "question": "16. Quelle autorité poursuit et juge les infractions de la LIE selon le Droit pénal administratif (Art. 57 al. 2 LIE) ?",
                              "options": [
                                      "L'Office fédéral de l'énergie (OFEN)",
                                      "Le Ministère public de la Confédération",
                                      "Le Tribunal fédéral à Lausanne",
                                      "Le Conseil d'État cantonal"
                              ],
                              "correctAnswer": 0,
                              "explanation": "L'Art. 57 al. 2 LIE désigne l'OFEN comme autorité compétente de poursuite et de jugement selon le DPA.",
                              "articleRef": "LIE — Art. 57 al. 2"
                      }
              ],
              "prevLessonId": "rs-734-0-lecon-11"
      }
,
      // ======================================================================
      // RS 734.2 — OCFo : Ordonnance sur les installations électriques à courant fort
      // Parcours officiel structuré en 7 chapitres conformes à la source légale suisse
      // ======================================================================

      // ----------------------------------------------------------------------
      // RS 734.2 — CHAPITRE 1 : Dispositions générales (Art. 1 à 3)
      // ----------------------------------------------------------------------
      {
        id: "rs-734-2-chapitre-1",
        routeId: "rs-734-2/chapitre-1",
        moduleId: "A",
        parcoursId: "rs-734-2",
        chapterNumber: 1,
        totalChapters: 8,
        code: "RS 734.2 — Leçon 1",
        title: "Chapitre 1 : Dispositions générales",
        subtitle: "Art. 1 à 3 — Champ d'application, rétroactivité aux installations existantes et 32 définitions légales",
        articlesRange: "Art. 1 à 3",
        status: "Disponible",
        duration: "8 min",
        tag: "Ordonnance RS 734.2",
        xpReward: 30,
        objective: "Maîtriser le champ d'application de l'OCFo et les trois conditions légales de rétroactivité aux installations existantes (Art. 1 al. 2), identifier les compétences d'octroi des dérogations (Art. 1 al. 4), et assimiler les 32 définitions réglementaires suisses indispensables (seuils basse tension ≤ 1000 V AC / 1500 V DC et haute tension > 1000 V AC / 1500 V DC, personnes compétentes vs personnes instruites selon l'Art. 3).",
        introduction: `Édictée par le Conseil fédéral le 30 mars 1994 (État au 1er juin 2019), l'<strong>Ordonnance sur les installations électriques à courant fort (OCFo — RS 734.2)</strong> fixe le cadre de sécurité contraignant pour l'établissement, l'exploitation et l'entretien de l'ensemble des installations à courant fort en Suisse. Son <strong>Chapitre 1 (Dispositions générales)</strong> délimite le champ d'application de la réglementation et fixe les définitions juridiques fondamentales.`,
        contentSections: [
          {
            title: "1. Champ d'application et régime des installations existantes",
            text: `<div class="ocfo-legal-badge">RS 734.2 — Art. 1 & Art. 2</div>
<p style="margin-bottom:0.75rem; line-height:1.6;">
L'<strong>Art. 1 al. 1 OCFo</strong> dispose que l'ordonnance s'applique à l'établissement, à l'exploitation et à l'entretien de l'ensemble des installations électriques à courant fort en Suisse (hors installations de traction et de sécurité ferroviaires relevant de l'art. 42 al. 1 de l'ordonnance sur les chemins de fer).
</p>
<div class="ocfo-highlight-card">
  <div class="card-title">⚖️ Application aux installations existantes (Art. 1 al. 2)</div>
  <p style="margin-bottom:0.5rem; font-size:0.92rem; color:var(--text-secondary);">
    Les prescriptions relatives à l'établissement s'appliquent également aux <strong>installations déjà existantes</strong> dans trois cas légaux stricts :
  </p>
  <ul style="margin:0 0 0 1.25rem; line-height:1.6; font-size:0.9rem; color:var(--text-secondary);">
    <li><strong>a. En cas de transformation complète</strong> de l'installation ;</li>
    <li><strong>b. En cas de modification importante</strong>, à condition que leur application n'exige pas un effort disproportionné et n'affecte pas notablement la sécurité ;</li>
    <li><strong>c. En cas de danger imminent</strong> pour l'homme ou l'environnement, ou si les installations perturbent notablement d'autres installations électriques.</li>
  </ul>
</div>
<div style="background:var(--bg-surface-elevated); border-left:4px solid var(--electric-blue); padding:0.85rem 1rem; border-radius:0 8px 8px 0; margin-top:0.85rem; font-size:0.9rem; line-height:1.6;">
  <strong>Dérogations (Art. 1 al. 4) :</strong> En cas de difficultés sérieuses ou pour favoriser le progrès technique ou la protection du paysage/environnement, des dérogations motivées peuvent être accordées par le <strong>DETEC</strong> ou, pour les cas de moindre importance, par l'<strong>ESTI</strong> (Inspection fédérale des installations à courant fort, art. 21 LIE).
</div>`
          },
          {
            title: "2. Définitions techniques et seuils réglementaires essentiels",
            text: `<div class="ocfo-legal-badge">RS 734.2 — Art. 3</div>
<p style="margin-bottom:0.75rem; line-height:1.6;">
L'<strong>Art. 3 OCFo</strong> regroupe 32 définitions normatives qui constituent le vocabulaire officiel suisse de l'électrotechnique :
</p>
<div style="overflow-x:auto; margin:0.75rem 0 1rem;">
<table class="thresholds-table">
<thead>
<tr>
<th style="min-width:170px;">Terme officiel</th>
<th>Définition selon l'Art. 3 OCFo</th>
<th>Seuil ou Critère réglementaire</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Installation à courant fort</strong><br/><span style="font-size:0.78rem; color:var(--text-muted);">(Art. 3 ch. 9)</span></td>
<td>Installation électrique utilisant ou produisant des courants susceptibles de présenter un danger pour les personnes ou les choses (courant > 2 A ou tension dangereuse).</td>
<td>Courant fort (> 2 A ou tension dangereuse)</td>
</tr>
<tr>
<td><strong>Installation à basse tension</strong><br/><span style="font-size:0.78rem; color:var(--text-muted);">(Art. 3 ch. 10)</span></td>
<td>Installation électrique dont la tension nominale maximale ne dépasse pas les seuils fixés.</td>
<td><strong>≤ 1000 V AC</strong> (alternatif)<br/><strong>≤ 1500 V DC</strong> (continu)</td>
</tr>
<tr>
<td><strong>Installation à haute tension</strong><br/><span style="font-size:0.78rem; color:var(--text-muted);">(Art. 3 ch. 13)</span></td>
<td>Installation électrique dont la tension nominale est supérieure aux limites de la basse tension.</td>
<td><strong>> 1000 V AC</strong> ou <strong>> 1500 V DC</strong></td>
</tr>
<tr>
<td><strong>Installation blindée</strong><br/><span style="font-size:0.78rem; color:var(--text-muted);">(Art. 3 ch. 14)</span></td>
<td>Installation dans laquelle les parties qui, en service, sont sous tension sont entourées d'une enveloppe métallique mise à la terre.</td>
<td>Enveloppe conductrice continue reliée à la terre</td>
</tr>
<tr>
<td><strong>Sectionneur de terre</strong><br/><span style="font-size:0.78rem; color:var(--text-muted);">(Art. 3 ch. 23)</span></td>
<td>Dispositif de mise à la terre résistant aux courts-circuits, monté à demeure, manœuvrable <strong>uniquement hors tension</strong>.</td>
<td>Interverrouillage obligatoire (manœuvre hors tension seule)</td>
</tr>
<tr>
<td><strong>Court-circuiteur rapide de terre</strong><br/><span style="font-size:0.78rem; color:var(--text-muted);">(Art. 3 ch. 6)</span></td>
<td>Dispositif incorporé à une installation de couplage, capable de résister sans dommage au courant de court-circuit, <strong>même en cas de fermeture accidentelle sous tension</strong>.</td>
<td>Pouvoir de fermeture garanti sur court-circuit</td>
</tr>
<tr>
<td><strong>Tension de contact</strong><br/><span style="font-size:0.78rem; color:var(--text-muted);">(Art. 3 ch. 29)</span></td>
<td>Partie de la tension de terre à laquelle une personne peut être soumise lors du contact avec une masse conductrice.</td>
<td>Seuil durable max : 50 V AC / 120 V DC</td>
</tr>
<tr>
<td><strong>Zone d'exploitation</strong><br/><span style="font-size:0.78rem; color:var(--text-muted);">(Art. 3 ch. 32)</span></td>
<td>Zone présentant un danger accru dans l'installation électrique, accessible uniquement au personnel habilité.</td>
<td>Accès strictement restreint et balisé</td>
</tr>
</tbody>
</table>
</div>

<details class="pedagogical-accordion">
  <summary>🔍 Consulter les définitions relatives aux compétences humaines (Art. 3 ch. 19 & 20)</summary>
  <div class="accordion-content">
    <div style="display:flex; flex-direction:column; gap:0.75rem; margin-top:0.5rem;">
      <div style="background:var(--bg-surface); padding:0.75rem; border-radius:6px; border-left:3px solid var(--electric-blue);">
        <strong>Personne compétente (Art. 3 ch. 19) :</strong> Personne possédant une formation de base en électrotechnique (CFC d'installateur-électricien, brevet, diplôme ou formation d'entreprise certifiée) et une expérience pratique lui permettant d'apprécier les risques et de prendre les mesures de sécurité nécessaires.
      </div>
      <div style="background:var(--bg-surface); padding:0.75rem; border-radius:6px; border-left:3px solid var(--warning);">
        <strong>Personne instruite (Art. 3 ch. 20) :</strong> Personne qui ne possède pas de formation électrotechnique de base mais a été instruite spécifiquement sur les dangers d'une installation déterminée et les mesures à observer pour des manœuvres ou activités strictement définies.
      </div>
    </div>
  </div>
</details>`
          }
        ],
        practicalExample: "Sur un site industriel de Neuchâtel, une sous-station 16 kV datant de 1990 subit le remplacement d'un disjoncteur défectueux. S'agissant d'un simple entretien avec remplacement à l'identique (et non d'une transformation complète ni d'un danger imminent au sens de l'Art. 1 al. 2 OCFo), la mise en conformité de l'ensemble du bâtiment aux dernières normes n'est pas requise, pourvu que la sécurité globale soit maintenue.",
        importantPoint: "La distinction entre basse tension (≤ 1000 V AC / ≤ 1500 V DC) et haute tension (> 1000 V AC / > 1500 V DC) fixée à l'Art. 3 ch. 10 et 13 OCFo gouverne toute l'organisation des compétences : seules les personnes compétentes peuvent ordonner, surveiller et valider des travaux sur les installations haute tension.",
        quiz: [
          {
            question: "Selon l'Art. 3 ch. 13 OCFo, à partir de quel seuil une installation est-elle juridiquement qualifiée d'installation à haute tension ?",
            options: [
              "Tension nominale supérieure à 230 V AC ou 400 V DC",
              "Tension nominale supérieure à 1000 V AC ou 1500 V DC",
              "Tension nominale supérieure à 50 V AC ou 120 V DC",
              "Tension nominale supérieure à 10 000 V AC uniquement"
            ],
            correctAnswer: 1,
            explanation: "L'Art. 3 ch. 13 OCFo définit la haute tension comme toute tension nominale supérieure aux limites de la basse tension, soit > 1000 V en courant alternatif (AC) ou > 1500 V en courant continu (DC)."
          },
          {
            question: "Dans quel cas les dispositions relatives à l'établissement de l'OCFo s'appliquent-elles à une installation existante selon l'Art. 1 al. 2 ?",
            options: [
              "Dès qu'une ampoule d'éclairage est remplacée",
              "En cas de transformation complète, de modification importante ou de danger imminent",
              "Uniquement si l'installation a été construite avant 1950",
              "Chaque année de manière automatique"
            ],
            correctAnswer: 1,
            explanation: "L'Art. 1 al. 2 OCFo dispose que les règles d'établissement s'appliquent aux installations existantes en cas de transformation complète, de modification importante (sans effort disproportionné) ou de danger imminent pour l'homme ou l'environnement."
          },
          {
            question: "Quelle autorité est compétente pour accorder des dérogations motivées aux règles de l'OCFo (Art. 1 al. 4) ?",
            options: [
              "Le syndicat local des électriciens",
              "Le DETEC ou, pour les cas de moindre importance, l'ESTI",
              "La police cantonale",
              "Le propriétaire du bâtiment de manière unilatérale"
            ],
            correctAnswer: 1,
            explanation: "L'Art. 1 al. 4 OCFo prévoit que les dérogations motivées sont accordées par le DETEC (Département fédéral) ou, dans les cas de moindre importance, par l'ESTI (Inspection fédérale)."
          },
          {
            question: "D'après l'Art. 3 ch. 19 et 20 OCFo, quelle est la distinction légale clé entre une personne compétente et une personne instruite ?",
            options: [
              "La personne compétente a une formation électrotechnique de base et de l'expérience, alors que la personne instruite a reçu une formation ponctuelle pour des tâches précises",
              "La personne instruite gagne un salaire plus élevé",
              "Il n'y a aucune différence, les deux termes sont synonymes dans l'ordonnance",
              "Seule la personne instruite peut diriger un chantier haute tension"
            ],
            correctAnswer: 0,
            explanation: "L'Art. 3 ch. 19 et 20 réserve le statut de personne compétente aux titulaires d'une formation professionnelle électrotechnique et d'expérience, la personne instruite n'étant formée que pour un périmètre restreint et déterminé."
          }
        ],
        synthesis: "Le Chapitre 1 de l'OCFo (RS 734.2, Art. 1 à 3) définit le socle de l'ordonnance : seuil de la haute tension (> 1000 V AC / > 1500 V DC), rétroactivité limitée aux transformations complètes, modifications majeures ou péril imminent, octroi de dérogations par le DETEC ou l'ESTI, et hiérarchie rigoureuse des compétences entre personnes compétentes et personnes instruites.",
        prevChapterId: null,
        nextChapterId: "rs-734-2-chapitre-2"
      },

      // ----------------------------------------------------------------------
      // RS 734.2 — CHAPITRE 2 : Principes de sécurité applicables à l'établissement, à l'exploitation et à l'entretien (Art. 4 à 19)
      // ----------------------------------------------------------------------
      {
        id: "rs-734-2-chapitre-2",
        routeId: "rs-734-2/chapitre-2",
        moduleId: "A",
        parcoursId: "rs-734-2",
        chapterNumber: 2,
        totalChapters: 8,
        code: "RS 734.2 — Leçon 2",
        title: "Chapitre 2 : Principes de sécurité applicables à l'établissement, à l'exploitation et à l'entretien",
        subtitle: "Art. 4 à 19 — État de la technique, annonce immédiate des accidents graves (ESTI) et contrôles périodiques (5 ans)",
        articlesRange: "Art. 4 à 19",
        status: "Disponible",
        duration: "10 min",
        tag: "Ordonnance RS 734.2",
        xpReward: 30,
        objective: "Maîtriser l'obligation fondamentale de sécurité et la présomption de conformité aux normes CEI/CENELEC (Art. 4), respecter l'obligation d'annonce immédiate des accidents corporels graves à l'ESTI avec gel absolu de l'état des lieux (Art. 16), et appliquer le devoir d'entretien permanent ainsi que la périodicité maximale de contrôle de 5 ans avec conservation des rapports sur 2 cycles (Art. 17 à 19).",
        introduction: `Le <strong>Chapitre 2 de l'OCFo (Art. 4 à 19)</strong> constitue le cœur des obligations de diligence pesant sur les exploitants d'installations à courant fort : conception selon les règles de l'art, qualification continue du personnel, signalisation de danger, obligation de signalement immédiat des accidents et surveillance périodique stricte sous le contrôle de l'Inspection fédérale (ESTI).`,
        contentSections: [
          {
            title: "1. Devoir général de sécurité et règles reconnues de la technique",
            text: `<div class="ocfo-legal-badge">RS 734.2 — Art. 4 à 10</div>
<p style="margin-bottom:0.75rem; line-height:1.6;">
L'<strong>Art. 4 al. 1 OCFo</strong> énonce le principe directeur suisse : <em>« Les installations à courant fort doivent être établies, exploitées et entretenues conformément aux prescriptions de la présente ordonnance et aux règles reconnues de la technique. »</em>
</p>
<ul style="margin:0 0 0.85rem 1.25rem; line-height:1.6; color:var(--text-secondary);">
  <li><strong>Présomption de conformité (Art. 4 al. 2) :</strong> Sont réputées règles reconnues de la technique les normes harmonisées de la <strong>Commission électrotechnique internationale (CEI)</strong> et du <strong>Comité européen de normalisation électrotechnique (CENELEC)</strong>. À défaut, les normes suisses (SN/SNV) font foi.</li>
  <li><strong>Protection contre les incendies et explosions (Art. 6) :</strong> Conformité obligatoire aux directives de protection incendie de l'Association des établissements cantonaux d'assurance incendie (<strong>AEAI</strong>).</li>
  <li><strong>Signalisation de sécurité (Art. 8) :</strong> Les locaux de service et accès aux zones d'exploitation doivent comporter des <strong>signaux d'avertissement de danger électrique indélébiles</strong>, visibles en permanence.</li>
</ul>`
          },
          {
            title: "2. Qualification du personnel et documentation technique",
            text: `<div class="ocfo-legal-badge">RS 734.2 — Art. 11 à 15</div>
<p style="margin-bottom:0.75rem; line-height:1.6;">
La sécurité repose sur la compétence humaine et la mise à disposition de documents d'exploitation à jour :
</p>
<div class="ocfo-highlight-card">
  <div class="card-title">👷 Organisation humaine et formation continue</div>
  <ul style="margin:0 0 0 1.25rem; line-height:1.6; font-size:0.9rem; color:var(--text-secondary);">
    <li><strong>Travaux sous surveillance compétente (Art. 11 al. 1) :</strong> Seules les personnes compétentes peuvent diriger, surveiller et exécuter en toute autonomie des travaux sur les installations à courant fort.</li>
    <li><strong>Répétition périodique des instructions (Art. 12) :</strong> L'exploitant doit instruire son personnel à intervalles réguliers sur les risques électriques, les premiers secours en cas d'électrisation, l'emplacement des téléphones de secours et l'usage des extincteurs.</li>
    <li><strong>Visiteurs (Art. 13) :</strong> Les tiers et visiteurs doivent obligatoirement être accompagnés de personnes compétentes et ne sont admis qu'en <em>petits groupes</em> à proximité de pièces sous tension.</li>
    <li><strong>Plans et schémas tenus à jour (Art. 14) :</strong> Les schémas de principe, schémas de couplage et consignes d'exploitation doivent obligatoirement être tenus à jour et archivés de façon permanente sur le site.</li>
  </ul>
</div>`
          },
          {
            title: "3. Annonce immédiate des accidents et contrôle périodique tous les 5 ans",
            text: `<div class="ocfo-legal-badge">RS 734.2 — Art. 16 à 19</div>
<div style="display:flex; flex-direction:column; gap:1rem; margin-bottom:1rem;">
  <div style="background:var(--bg-surface-elevated); border-left:4px solid var(--accent-red); padding:1rem; border-radius:0 8px 8px 0;">
    <div style="font-weight:700; color:var(--accent-red); font-size:0.95rem; margin-bottom:0.35rem;">🚨 Annonce sans délai des accidents graves (Art. 16)</div>
    <p style="font-size:0.9rem; line-height:1.6; color:var(--text-secondary); margin-bottom:0.4rem;">
      Tout accident corporel grave (ayant nécessité des soins hospitaliers ou mortel) et tout dommage matériel important causés par le courant électrique doivent être <strong>annoncés sans délai à l'ESTI</strong> (Inspection fédérale).
    </p>
    <p style="font-size:0.88rem; line-height:1.5; color:var(--text-muted); font-weight:600;">
      ⛔ Gel de l'état des lieux (Art. 16 al. 2) : Il est strictement interdit de modifier l'état des lieux avant le constat de l'Inspection, sauf pour secourir des personnes ou prévenir un péril imminent.
    </p>
  </div>

  <div style="background:var(--bg-surface-elevated); border-left:4px solid var(--electric-blue); padding:1rem; border-radius:0 8px 8px 0;">
    <div style="font-weight:700; color:var(--electric-blue); font-size:0.95rem; margin-bottom:0.35rem;">📅 Entretien et Contrôle périodique (Art. 17 à 19)</div>
    <ul style="margin:0 0 0 1.25rem; font-size:0.9rem; line-height:1.6; color:var(--text-secondary);">
      <li><strong>Devoir d'entretien (Art. 17) :</strong> L'exploitant a l'obligation de maintenir l'installation en état sûr en permanence et de réparer les défauts sans retard.</li>
      <li><strong>Périodicité maximale (Art. 18) :</strong> Les installations à courant fort doivent être soumises à un contrôle périodique <strong>au moins tous les 5 ans</strong>.</li>
      <li><strong>Rapports de sécurité (Art. 19) :</strong> Le rapport de contrôle doit consigner les mesures, constats et remises en état. <strong>Les rapports doivent être conservés pendant au moins deux périodes de contrôle complètes (soit 10 ans minimum)</strong>.</li>
    </ul>
  </div>
</div>`
          }
        ],
        practicalExample: "Dans une usine d'embouteillage en Valais, un court-circuit sur une cellule haute tension provoque de graves brûlures à un électricien. L'exploitant doit immédiatement : 1. Alerter les secours sanitaires (144), 2. Mettre la zone en sécurité, 3. Préserver rigoureusement l'armoire, les outils et les protections en l'état sans rien déplacer, 4. Signaler l'accident sans délai à l'ESTI par téléphone ou e-mail d'urgence selon l'Art. 16 OCFo.",
        importantPoint: "L'obligation de conserver les rapports de contrôle périodique pendant au moins deux périodes de contrôle (Art. 19 al. 3 OCFo), soit au moins 10 ans pour les installations à courant fort, engage la responsabilité civile et pénale de l'exploitant en cas de sinistre ultérieur.",
        quiz: [
          {
            question: "Dans quel délai un accident corporel grave survenu sur une installation à courant fort doit-il être annoncé à l'ESTI (Art. 16 al. 1 OCFo) ?",
            options: [
              "Dans les 30 jours ouvrables",
              "Sans délai (immédiatement)",
              "Lors du prochain contrôle quinquennal",
              "Uniquement si la victime le demande par écrit"
            ],
            correctAnswer: 1,
            explanation: "L'Art. 16 al. 1 OCFo prescrit que tout accident corporel grave ou dommage matériel important doit être annoncé sans délai à l'Inspection fédérale (ESTI)."
          },
          {
            question: "Quelle est la règle impérative concernant l'état des lieux après un accident corporel grave (Art. 16 al. 2 OCFo) ?",
            options: [
              "Tout nettoyer immédiatement pour reprendre la production au plus vite",
              "Interdiction absolue de modifier l'état des lieux avant le constat de l'ESTI (sauf secours aux blessés)",
              "Changer immédiatement tous les câbles et composants endommagés",
              "Prendre des photos puis tout jeter à la benne"
            ],
            correctAnswer: 1,
            explanation: "L'Art. 16 al. 2 OCFo interdit formellement toute altération des lieux de l'accident avant l'intervention de l'Inspection, afin de garantir l'intégrité de l'enquête technique."
          },
          {
            question: "Quelle est la périodicité maximale légale pour le contrôle des installations à courant fort selon l'Art. 18 al. 1 OCFo ?",
            options: [
              "Tous les ans",
              "Au moins tous les 5 ans",
              "Tous les 10 ans",
              "Tous les 20 ans"
            ],
            correctAnswer: 1,
            explanation: "L'Art. 18 al. 1 OCFo impose un contrôle périodique au moins tous les 5 ans pour l'ensemble des installations à courant fort."
          },
          {
            question: "Combien de temps l'exploitant doit-il conserver les rapports de contrôle périodique selon l'Art. 19 al. 3 OCFo ?",
            options: [
              "Pendant 1 an seulement",
              "Pendant au moins deux périodes de contrôle (soit 10 ans pour un cycle de 5 ans)",
              "Jusqu'au départ du directeur de l'usine",
              "Les rapports n'ont pas besoin d'être conservés après paiement de la facture"
            ],
            correctAnswer: 1,
            explanation: "L'Art. 19 al. 3 OCFo exige que les rapports de contrôle soient conservés pendant au moins deux périodes de contrôle, permettant d'assurer la traçabilité historique de l'installation."
          }
        ],
        synthesis: "Le Chapitre 2 (Art. 4 à 19 OCFo) encadre la sécurité opérationnelle : présomption de conformité aux normes CEI/CENELEC, instruction périodique du personnel, annonce immédiate à l'ESTI des accidents corporels graves avec gel de l'état des lieux, et réalisation obligatoire du contrôle périodique au moins tous les 5 ans avec archivage sur 2 cycles (10 ans).",
        prevChapterId: "rs-734-2-chapitre-1",
        nextChapterId: "rs-734-2-chapitre-3"
      },

      // ----------------------------------------------------------------------
      // RS 734.2 — CHAPITRE 3 : Installations de production et de distribution (Art. 20 à 52)
      // ----------------------------------------------------------------------
      {
        id: "rs-734-2-chapitre-3",
        routeId: "rs-734-2/chapitre-3",
        moduleId: "A",
        parcoursId: "rs-734-2",
        chapterNumber: 3,
        totalChapters: 8,
        code: "RS 734.2 — Leçon 3",
        title: "Chapitre 3 : Installations de production et de distribution",
        subtitle: "Art. 20 à 52 — Couloirs > 20 m (2 issues), postes blindés SF6, clôtures 2,2 m et gabarits Annexes 1 à 3",
        articlesRange: "Art. 20 à 52",
        status: "Disponible",
        duration: "12 min",
        tag: "Ordonnance RS 734.2",
        xpReward: 30,
        objective: "Dimensionner et exploiter les installations en locaux fermés et en plein air selon les règles architecturales de l'OCFo (subdivision réseau Art. 21-22, couloirs > 20 m à 2 issues Art. 35 al. 3, sens de sortie, interdiction d'encombrement Art. 27), appliquer les distances et gabarits minimaux des Annexes 1 et 2 (+14% par 1000 m d'altitude), maîtriser la sécurité des cellules SF6 (Art. 36-40), et dimensionner les postes extérieurs selon l'Art. 41 et la formule de l'Annexe 3 (H = 2,25 m + 0,01 m/kV).",
        introduction: `Le <strong>Chapitre 3 (Art. 20 à 52)</strong> et les <strong>Annexes 1, 2 et 3</strong> de l'OCFo forment le code de construction des réseaux électriques suisses : règles de subdivision, géométrie des couloirs de manœuvre, ventilation des postes blindés au gaz SF6, caractéristiques des clôtures extérieures et hauteurs minimales des conducteurs nus sous tension.`,
        contentSections: [
          {
            title: "1. Subdivision du réseau et dispositifs sectionneurs",
            text: `<div class="ocfo-legal-badge">RS 734.2 — Art. 21 à 25</div>
<p style="margin-bottom:0.75rem; line-height:1.6;">
Les réseaux électriques doivent obligatoirement être subdivisés en <strong>secteurs bien définis</strong> au moyen de sectionneurs manœuvrables sous tension afin de pouvoir mettre ces secteurs complètement hors tension (Art. 21 al. 1).
</p>
<ul style="margin:0 0 0.85rem 1.25rem; line-height:1.6; color:var(--text-secondary);">
  <li><strong>Interdiction des retours de tension (Art. 21 al. 2) :</strong> L'exploitant doit s'assurer que les réalimentations ou retours de tension ne soient pas possibles dans les parties mises hors tension.</li>
  <li><strong>Dispositifs sectionneurs HT (Art. 22 al. 1) :</strong> Dimensionnés de façon qu'aucune décharge disruptive ne se produise entre contacts ouverts, même en présence de surtensions.</li>
  <li><strong>Indicateurs mécaniques sûrs (Art. 22 al. 3) :</strong> Si la coupure n'est pas directement visible, les interrupteurs/sectionneurs doivent comporter un indicateur de position mû par une <strong>liaison mécanique rigide, robuste et indéformable</strong>.</li>
  <li><strong>Traitement du neutre HT (Art. 23) :</strong> L'exploitant fixe le traitement du point neutre pour coordonner l'isolement du réseau et déceler rapidement tout défaut à la terre.</li>
</ul>`
          },
          {
            title: "2. Locaux de service, voies de fuite et distances en locaux (Annexes 1 & 2)",
            text: `<div class="ocfo-legal-badge">RS 734.2 — Art. 26 à 35 & Annexes 1-2</div>
<p style="margin-bottom:0.75rem; line-height:1.6;">
Les passages et couloirs techniques sont soumis à des exigences sévères de sécurité et d'évacuation d'urgence :
</p>
<div class="ocfo-highlight-card">
  <div class="card-title">🚪 Règles impératives des couloirs de service (Art. 27 & 35)</div>
  <ul style="margin:0 0 0 1.25rem; line-height:1.6; font-size:0.9rem; color:var(--text-secondary);">
    <li><strong>Voies de fuite permanentes (Art. 27 al. 2) :</strong> Les lieux de passage doivent pouvoir servir en tout temps de voies de fuite. <strong>On ne doit y entreposer AUCUN matériel</strong>.</li>
    <li><strong>Interdiction d'empiètement (Art. 27 al. 3) :</strong> Aucun chariot de disjoncteur en position de sectionnement, aucune porte ni fenêtre ouverte ne doit réduire le profil libre de passage.</li>
    <li><strong>Couloirs de plus de 20 mètres (Art. 35 al. 3) :</strong> Doivent obligatoirement comporter <strong>une issue à chaque extrémité</strong>.</li>
    <li><strong>Sens d'ouverture des portes (Art. 35 al. 4) :</strong> Les portes de sortie doivent s'ouvrir vers l'extérieur. Entre deux locaux, la porte doit obligatoirement s'ouvrir <strong>du local à plus haut risque vers le local à moindre risque</strong>.</li>
  </ul>
</div>

<details class="pedagogical-accordion" style="margin-top:0.85rem;">
  <summary>📐 Consulter les gabarits des Annexes 1 et 2 et la majoration d'altitude</summary>
  <div class="accordion-content">
    <p style="font-size:0.88rem; line-height:1.6; color:var(--text-secondary); margin-bottom:0.5rem;">
      Les Annexes 1 et 2 fixent les dimensions minimales des couloirs de commande et d'entretien (hauteur libre ≥ 2,00 m, largeur de passage ≥ 0,80 m à 1,00 m selon la présence de pièces nues sous tension).
    </p>
    <div style="background:var(--bg-surface); border-left:3px solid var(--electric-blue); padding:0.75rem; border-radius:4px; font-size:0.88rem; line-height:1.5;">
      <strong>🏔️ Majoration pour altitude (Annexes 1 et 2) :</strong> Au-dessus de 1000 m au-dessus du niveau de la mer, les distances d'isolement dans l'air doivent être <strong>augmentées de 14 % par tranche de 1000 m d'altitude supplémentaire</strong> pour compenser la diminution de la densité de l'air et la baisse de rigidité diélectrique.
    </div>
  </div>
</details>`
          },
          {
            title: "3. Postes blindés isolés au gaz SF6 (Art. 36 à 40)",
            text: `<div class="ocfo-legal-badge">RS 734.2 — Art. 36 à 40</div>
<p style="margin-bottom:0.75rem; line-height:1.6;">
Les installations blindées isolées au gaz (GIS) utilisent l'hexafluorure de soufre (SF₆) pour ses exceptionnelles propriétés diélectriques :
</p>
<ul style="margin:0 0 0.85rem 1.25rem; line-height:1.6; color:var(--text-secondary);">
  <li><strong>Risque d'asphyxie et toxicité :</strong> Le SF₆ est un gaz incolore et inodore environ <strong>5 fois plus lourd que l'air</strong>. En cas de fuite, il chasse l'oxygène vers le haut et s'accumule dans les fosses et sous-sols (Art. 40).</li>
  <li><strong>Ventilation basse obligatoire (Art. 40) :</strong> Les locaux abritant des cellules SF₆ doivent être dotés d'une aspiration mécanique d'air vicié située au ras du sol.</li>
  <li><strong>Limitation des surpressions (Art. 38) :</strong> Les enveloppes métalliques doivent comporter des disques de rupture orientés de telle sorte que les gaz chauds ne soient pas projetés vers les zones de passage habituelles.</li>
</ul>`
          },
          {
            title: "4. Postes plein air, transformateurs et gabarits de l'Annexe 3",
            text: `<div class="ocfo-legal-badge">RS 734.2 — Art. 41 à 52 & Annexe 3</div>
<p style="margin-bottom:0.75rem; line-height:1.6;">
Les installations extérieures à ciel ouvert doivent être protégées contre toute intrusion de personnes non autorisées et d'animaux (Art. 41) :
</p>
<div style="background:var(--bg-surface-elevated); border:1px solid var(--border-medium); border-radius:8px; padding:1rem; margin-bottom:1rem;">
  <ul style="margin:0 0 0 1.25rem; line-height:1.6; color:var(--text-secondary);">
    <li><strong>Clôture périphérique (Art. 41 al. 1) :</strong> Hauteur minimale de <strong>2,20 m</strong> (à rehausser dans les zones très enneigées).</li>
    <li><strong>Treillis métallique (Art. 41 al. 2) :</strong> Mailles d'au maximum <strong>4 cm de largeur</strong>.</li>
    <li><strong>Garde au sol (Art. 41 al. 2) :</strong> Ne doit pas dépasser <strong>10 cm au maximum</strong> pour empêcher le passage de petits animaux.</li>
    <li><strong>Passages intérieurs (Art. 42) :</strong> Largeur libre ≥ 1,20 m et hauteur libre ≥ 2,50 m.</li>
  </ul>
</div>

<div class="ocfo-highlight-card">
  <div class="card-title">⚡ Formule officielle de hauteur au sol — Annexe 3 OCFo</div>
  <p style="font-size:0.92rem; line-height:1.6; color:var(--text-secondary); margin-bottom:0.5rem;">
    Pour les conducteurs nus sous tension accessibles en poste plein air, la hauteur minimale au-dessus du sol (H) est calculée par la formule :
  </p>
  <div style="font-size:1.15rem; font-weight:800; color:var(--electric-blue); text-align:center; padding:0.5rem; background:var(--bg-surface); border-radius:6px; margin-bottom:0.5rem;">
    H = 2,25 m + 0,01 m par kV de tension nominale
  </div>
  <div style="font-size:0.85rem; color:var(--text-muted); text-align:center;">
    Exemple : 50 kV → H = 2,25 + (0,01 × 50) = 2,75 m | 220 kV → H = 2,25 + 2,20 = 4,45 m.
  </div>
</div>`
          }
        ],
        practicalExample: "Lors de la construction d'un poste électrique extérieur 60 kV près de Sion, l'ingénieur prévoit une clôture de 2,20 m de hauteur avec mailles de 40 mm et garde au sol de 8 cm (conforme à l'Art. 41). Pour les conducteurs aériens nus 60 kV, la hauteur libre minimale au-dessus du sol intérieur est fixée selon l'Annexe 3 à : H = 2,25 + (0,01 × 60) = 2,85 m.",
        importantPoint: "Dans tout local de service électrique, les issues de secours ne doivent jamais être verrouillées de l'intérieur (barres anti-panique requises) et les couloirs de plus de 20 m de long doivent impérativement posséder une issue à chaque extrémité (Art. 35 al. 3 OCFo).",
        quiz: [
          {
            question: "À partir de quelle longueur un couloir de manœuvre d'un local électrique doit-il obligatoirement comporter une issue à chaque extrémité (Art. 35 al. 3 OCFo) ?",
            options: [
              "Dès 5 mètres",
              "Plus de 20 mètres",
              "Plus de 50 mètres",
              "Uniquement si le bâtiment a deux étages"
            ],
            correctAnswer: 1,
            explanation: "L'Art. 35 al. 3 OCFo impose formellement que les couloirs de manœuvre de plus de 20 mètres soient pourvus d'une issue à chaque extrémité pour garantir une évacuation sans issue de secours bloquée."
          },
          {
            question: "Quelles sont les exigences réglementaires fixées par l'Art. 41 OCFo pour la clôture d'un poste en plein air ?",
            options: [
              "Hauteur libre de 1,5 m sans exigence sur les mailles",
              "Hauteur minimale de 2,20 m, mailles maximales de 4 cm et garde au sol maximale de 10 cm",
              "Uniquement une haie d'arbres entourant le site",
              "Une clôture en bois de 2 m avec mailles de 15 cm"
            ],
            correctAnswer: 1,
            explanation: "L'Art. 41 al. 1 et 2 OCFo fixe une hauteur minimale de 2,20 m, des mailles d'au plus 4 cm et une garde au sol ne dépassant pas 10 cm pour interdire l'intrusion des tiers et de la faune."
          },
          {
            question: "Selon la formule de l'Annexe 3 de l'OCFo, quelle doit être la hauteur minimale au-dessus du sol des conducteurs nus sous tension pour un réseau 100 kV en plein air ?",
            options: [
              "2,25 m",
              "3,25 m (calcul : 2,25 m + 0,01 m × 100 kV)",
              "4,50 m",
              "6,00 m"
            ],
            correctAnswer: 1,
            explanation: "L'Annexe 3 donne la formule H = 2,25 m + 0,01 m/kV. Pour 100 kV, on obtient 2,25 + (0,01 × 100) = 2,25 + 1,00 = 3,25 mètres."
          },
          {
            question: "Pourquoi l'Art. 40 OCFo prescrit-il une ventilation avec extraction basse dans les locaux abritant des postes blindés au gaz SF6 ?",
            options: [
              "Parce que le SF6 est inflammable à l'air libre",
              "Parce que le SF6 est environ 5 fois plus lourd que l'air et s'accumule au niveau du sol, créant un risque mortel d'asphyxie",
              "Pour refroidir les composants électroniques de pilotage",
              "Pour chasser l'humidité des vitres"
            ],
            correctAnswer: 1,
            explanation: "Le SF6 a une masse volumique très supérieure à l'air (~5 fois plus lourd). En cas d'échappement, il stagne au sol en déplaçant l'oxygène, d'où l'exigence impérative d'une bouche d'extraction basse (Art. 40)."
          }
        ],
        synthesis: "Le Chapitre 3 (Art. 20 à 52 OCFo) dicte les gabarits physiques de sécurité : interdiction de tout stockage dans les voies de fuite, couloirs > 20 m dotés de 2 issues, sens d'évacuation vers les locaux à moindre risque, ventilation basse des cellules SF6, clôtures extérieures h ≥ 2,20 m (mailles ≤ 4 cm, garde au sol ≤ 10 cm), formule Annexe 3 H = 2,25 m + 0,01 m/kV et majoration diélectrique d'altitude (+14%/1000 m).",
        prevChapterId: "rs-734-2-chapitre-2",
        nextChapterId: "rs-734-2-chapitre-4"
      },

      // ----------------------------------------------------------------------
      // RS 734.2 — CHAPITRE 4 : Mesures de protection (Art. 53 à 65)
      // ----------------------------------------------------------------------
      {
        id: "rs-734-2-chapitre-4",
        routeId: "rs-734-2/chapitre-4",
        moduleId: "A",
        parcoursId: "rs-734-2",
        chapterNumber: 4,
        totalChapters: 8,
        code: "RS 734.2 — Leçon 4",
        title: "Chapitre 4 : Mesures de protection",
        subtitle: "Art. 53 à 65 — Mise à la terre, tensions de contact admissibles (Annexe 4), terre HT (2 lignes) et surintensités",
        articlesRange: "Art. 53 à 65",
        status: "Disponible",
        duration: "12 min",
        tag: "Ordonnance RS 734.2",
        xpReward: 30,
        objective: "Comprendre le principe fondamental de la mise à la terre des masses (Art. 53), maîtriser les tensions de contact admissibles (Art. 54, seuil permanent ≤ 50 V AC / 120 V DC et courbe temps-tension de l'Annexe 4 pour t ≤ 5 s), mettre en œuvre les règles de mise à la terre haute tension avec au moins 2 conducteurs indépendants (Art. 57), et respecter l'interdiction formelle d'organes de coupure sur les lignes de terre (Art. 56).",
        introduction: `Le <strong>Chapitre 4 de l'OCFo (Mesures de protection — Art. 53 à 65)</strong> constitue la clé de voûte de la sécurité électrique suisse : canalisation maîtrisée des courants de court-circuit à la terre et limitation des tensions de contact dangereuses. Il intègre la célèbre <strong>Courbe temps-tension de l'Annexe 4</strong> pour les défauts fugitifs de courte durée.`,
        contentSections: [
          {
            title: "1. Principes fondamentaux de mise à la terre",
            text: `<div class="ocfo-legal-badge">RS 734.2 — Art. 53 & Art. 56</div>
<p style="margin-bottom:0.75rem; line-height:1.6;">
En vertu de l'<strong>Art. 53 OCFo</strong>, toutes les parties conductrices qui ne sont pas normalement sous tension doivent être reliées à la terre :
</p>
<ul style="margin:0 0 0.85rem 1.25rem; line-height:1.6; color:var(--text-secondary);">
  <li><strong>Pour la sécurité des personnes :</strong> Réduire le risque d'être soumises à des tensions de contact et tensions de pas dangereuses en cas de défaut d'isolement.</li>
  <li><strong>Pour la sécurité des choses :</strong> Réduire le risque d'incendie, d'explosion et de destructions matérielles consécutives à un arc ou un court-circuit à la masse.</li>
  <li><strong>Interdiction absolue de coupure (Art. 56) :</strong> <em>Il est strictement interdit d'insérer des interrupteurs, sectionneurs ou fusibles sur les conducteurs de terre ou les conducteurs de protection (PE)</em>. La continuité de la terre ne doit pouvoir être interrompue en aucun cas.</li>
</ul>`
          },
          {
            title: "2. Tensions de contact admissibles et courbe de sécurité (Annexe 4 OCFo)",
            text: `<div class="ocfo-legal-badge">RS 734.2 — Art. 54 & Annexe 4</div>
<p style="margin-bottom:0.75rem; line-height:1.6;">
L'<strong>Art. 54 al. 1 OCFo</strong> fixe les limites strictes de tension de contact admises sur les parties métalliques en cas de défaut unipolaire à la terre :
</p>
<div class="ocfo-highlight-card">
  <div class="card-title">⚡ Seuils durables de tension de contact (Art. 54 al. 1)</div>
  <p style="font-size:0.92rem; line-height:1.6; color:var(--text-secondary);">
    La tension de contact ne doit pas dépasser durablement <strong>50 volts en courant alternatif (AC)</strong> ou <strong>120 volts en courant continu (DC)</strong>.
  </p>
</div>

<p style="font-size:0.92rem; line-height:1.6; margin:1rem 0 0.5rem;">
Courbe temps-tension de l'Annexe 4 (durées ≤ 5 secondes) :<br/>
Pour les défauts fugitifs éliminés rapidement par les protections, des tensions plus élevées sont admises selon la courbe officielle de sécurité :
</p>

<!-- Visuel Pédagogique Interactif : Courbe temps-tension Annexe 4 OCFo (RS 734.2) -->
<div class="ocfo-annexe4-widget" id="ocfoAnnexe4Widget" role="region" aria-label="Graphique interactif de la courbe temps-tension selon l'Annexe 4 OCFo"></div>`
          },
          {
            title: "3. Mises à la terre haute tension et basse tension",
            text: `<div class="ocfo-legal-badge">RS 734.2 — Art. 57 à 65</div>
<ul style="margin:0 0 0.85rem 1.25rem; line-height:1.6; color:var(--text-secondary);">
  <li><strong>Mise à la terre haute tension (Art. 57) :</strong> Les installations haute tension doivent être raccordées à la terre par <strong>au moins deux lignes de terre indépendantes</strong> reliées à l'électrode de terre, afin de prévenir toute rupture fortuite.</li>
  <li><strong>Systèmes de distribution basse tension (Art. 58) :</strong> Régimes TN (TN-C avec conducteur PEN, TN-S avec conducteurs N et PE séparés) et TT. Section minimale du conducteur PEN selon les règles de la technique (≥ 10 mm² Cu).</li>
  <li><strong>Tenue aux surintensités et surpressions d'arc (Art. 62 à 65) :</strong> Tous les matériels doivent supporter les effets thermiques et électrodynamiques du courant de court-circuit sans risque de projection ou d'inflammation pour l'environnement.</li>
</ul>`
          }
        ],
        practicalExample: "Dans une station 20 kV alimentant un hôpital, les protections de réseau éliminent les défauts à la masse en 0,1 seconde. D'après l'Annexe 4 de l'OCFo, la tension de contact maximale transitoire tolérée sur l'enveloppe métallique est de 700 V AC. L'installation de mise à la terre est dimensionnée avec 2 lignes distinctes de cuivre 50 mm² (Art. 57) assurant une résistance de terre globale inférieure à 1 ohm.",
        importantPoint: "L'Art. 56 OCFo proscrit sans aucune exception tout interrupteur, sectionneur ou fusible sur les conducteurs de terre et de protection (PE) : la rupture de continuité de la terre transforme immédiatement une carcasse métallique en un piège mortel en cas de défaut d'isolement.",
        quiz: [
          {
            question: "Quelle est la tension de contact permanente maximale admissible en courant alternatif selon l'Art. 54 al. 1 OCFo ?",
            options: [
              "230 V AC",
              "50 V AC",
              "120 V AC",
              "700 V AC"
            ],
            correctAnswer: 1,
            explanation: "L'Art. 54 al. 1 OCFo dispose que la tension de contact ne doit pas dépasser durablement 50 volts en courant alternatif (AC) et 120 volts en courant continu (DC)."
          },
          {
            question: "Selon la courbe temps-tension de l'Annexe 4 OCFo, quelle tension de contact est admise si le défaut est éliminé en moins de 0,05 s ?",
            options: [
              "50 V AC",
              "200 V AC",
              "450 V AC",
              "700 V AC"
            ],
            correctAnswer: 3,
            explanation: "Pour les déclenchements ultra-rapides (t ≤ 0,05 s ou 0,1 s), l'Annexe 4 OCFo tolère une tension de contact maximale de 700 V AC, le temps d'exposition étant trop court pour déclencher une fibrillation ventriculaire."
          },
          {
            question: "Combien de conducteurs de terre indépendants doivent relier une installation haute tension à son électrode de terre (Art. 57 OCFo) ?",
            options: [
              "Un seul conducteur non isolé",
              "Au moins deux conducteurs de terre distincts et indépendants",
              "Cinq conducteurs en faisceau",
              "Aucun conducteur si le sol est humide"
            ],
            correctAnswer: 1,
            explanation: "L'Art. 57 OCFo impose formellement au moins deux lignes de terre indépendantes pour relier les installations haute tension à l'électrode de terre afin d'éliminer le risque de coupure de terre."
          },
          {
            question: "Est-il permis d'insérer un organe de coupure (interrupteur ou fusible) sur une ligne de terre ou un conducteur PE (Art. 56 OCFo) ?",
            options: [
              "Oui, si l'interrupteur est cadenassé",
              "Oui, en période de test d'isolement uniquement",
              "Non, c'est formellement interdit en toutes circonstances",
              "Oui, si un fusible ultra-rapide est utilisé"
            ],
            correctAnswer: 2,
            explanation: "L'Art. 56 OCFo interdit strictement l'insertion d'interrupteurs ou de fusibles sur les conducteurs de terre et de protection pour empêcher toute coupure intempestive du circuit de sécurité."
          }
        ],
        synthesis: "Le Chapitre 4 (Art. 53 à 65 OCFo) et son Annexe 4 définissent les limites vitales de protection : tension permanente limitée à ≤ 50 V AC / ≤ 120 V DC, courbe de tolérance fugitive jusqu'à 700 V AC (Annexe 4), double ligne de terre obligatoire en haute tension (Art. 57) et interdiction absolue d'organes de coupure sur le réseau de terre (Art. 56).",
        prevChapterId: "rs-734-2-chapitre-3",
        nextChapterId: "rs-734-2-chapitre-5"
      },

      // ----------------------------------------------------------------------
      // RS 734.2 — CHAPITRE 5 : Travaux sur les installations à courant fort (Art. 66 à 80)
      // ----------------------------------------------------------------------
      {
        id: "rs-734-2-chapitre-5",
        routeId: "rs-734-2/chapitre-5",
        moduleId: "A",
        parcoursId: "rs-734-2",
        chapterNumber: 5,
        totalChapters: 8,
        code: "RS 734.2 — Leçon 5",
        title: "Chapitre 5 : Travaux sur les installations à courant fort",
        subtitle: "Art. 66 à 80 — Les 5 règles vitales (Art. 72 al. 1), travaux sous tension en binôme (Art. 75-79) et voisinage",
        articlesRange: "Art. 66 à 80",
        status: "Disponible",
        duration: "12 min",
        tag: "Ordonnance RS 734.2",
        xpReward: 30,
        objective: "Assimiler la définition juridique du travail sur installation à courant fort (Art. 66), exécuter avec une rigueur absolue les 5 règles vitales de sécurité de l'Art. 72 al. 1 OCFo pour la préparation de chantier hors tension, respecter les conditions drastiques des travaux sous tension (TST, Art. 75-79, travail en binôme obligatoire, interdiction de cumuler TST et hors tension sur le même poste), et appliquer les distances de sécurité au voisinage (Art. 80).",
        introduction: `Le <strong>Chapitre 5 de l'OCFo (Art. 66 à 80)</strong> régit la sécurité opérationnelle lors des interventions électriques. C'est ici que sont gravées dans le droit fédéral suisse les fameuses <strong>5 règles de sécurité vitales</strong> (Art. 72 al. 1 OCFo) et le statut très encadré des travaux sous tension (TST en binôme).`,
        contentSections: [
          {
            title: "1. Définition légale du travail et responsabilités de chantier",
            text: `<div class="ocfo-legal-badge">RS 734.2 — Art. 66 à 71</div>
<p style="margin-bottom:0.75rem; line-height:1.6;">
L'<strong>Art. 66 OCFo</strong> définit précisément ce qui constitue un travail réglementé :
</p>
<div style="background:var(--bg-surface-elevated); border-left:4px solid var(--electric-blue); padding:0.85rem 1rem; border-radius:0 8px 8px 0; margin-bottom:0.85rem; font-size:0.92rem; line-height:1.6;">
« Est réputée <strong>travail sur une installation à courant fort</strong> toute activité dont l'accomplissement réclame des mesures protégeant les personnes et les choses du courant électrique. N'est pas un travail la commande d'une installation à partir d'un emplacement sûr et au moyen d'équipements construits à cet effet. »
</div>
<ul style="margin:0 0 0.85rem 1.25rem; line-height:1.6; color:var(--text-secondary);">
  <li><strong>Responsable de chantier désigné (Art. 67 al. 2) :</strong> L'exploitant doit désigner pour <em>chaque chantier</em> une personne compétente responsable des mesures de protection et de la sécurité d'exécution.</li>
  <li><strong>Équipements de protection individuelle (Art. 68) :</strong> Port obligatoire d'EPI appropriés contre les contacts, arcs de court-circuit et projections (casque avec visière anti-arc, gants d'électricien isolés, vêtements ininflammables).</li>
  <li><strong>Arrêt obligatoire en cas d'orage (Art. 70 al. 3) :</strong> Dès qu'un danger perceptible dû à des orages ou surtensions atmosphériques apparaît, les travaux extérieurs doivent être <strong>interrompus immédiatement</strong> et le chantier évacué.</li>
</ul>`
          },
          {
            title: "2. Travaux hors tension : Les 5 règles vitales de sécurité",
            text: `<div class="ocfo-legal-badge">RS 734.2 — Art. 72 al. 1 OCFo</div>
<p style="margin-bottom:0.75rem; line-height:1.6;">
Avant tout début d'intervention hors tension, l'<strong>Art. 72 al. 1 OCFo</strong> impose l'application rigoureuse, ordonnée et sans omission des <strong>cinq règles vitales de sécurité</strong> :
</p>

<div style="display:flex; flex-direction:column; gap:0.65rem; margin-bottom:1rem;">
  <div style="background:var(--bg-surface-elevated); border:1px solid var(--border-medium); border-radius:8px; padding:0.85rem 1rem; display:flex; align-items:center; gap:0.85rem;">
    <span style="background:var(--electric-blue); color:#0B1220; font-weight:800; border-radius:50%; width:30px; height:30px; display:flex; align-items:center; justify-content:center; flex-shrink:0;">1</span>
    <div>
      <strong>1. Déclencher et ouvrir les sectionneurs de toutes parts (let. a) :</strong>
      <div style="font-size:0.85rem; color:var(--text-secondary);">Séparation galvanique visible ou vérifiable de toutes les sources d'alimentation potentielles.</div>
    </div>
  </div>

  <div style="background:var(--bg-surface-elevated); border:1px solid var(--border-medium); border-radius:8px; padding:0.85rem 1rem; display:flex; align-items:center; gap:0.85rem;">
    <span style="background:var(--electric-blue); color:#0B1220; font-weight:800; border-radius:50%; width:30px; height:30px; display:flex; align-items:center; justify-content:center; flex-shrink:0;">2</span>
    <div>
      <strong>2. Les assurer contre le réenclenchement (let. b) :</strong>
      <div style="font-size:0.85rem; color:var(--text-secondary);">Verrouillage mécanique par cadenas de consignation et pose d'un panneau d'interdiction de manœuvre.</div>
    </div>
  </div>

  <div style="background:var(--bg-surface-elevated); border:1px solid var(--border-medium); border-radius:8px; padding:0.85rem 1rem; display:flex; align-items:center; gap:0.85rem;">
    <span style="background:var(--electric-blue); color:#0B1220; font-weight:800; border-radius:50%; width:30px; height:30px; display:flex; align-items:center; justify-content:center; flex-shrink:0;">3</span>
    <div>
      <strong>3. Vérifier l'absence de tension (let. c) :</strong>
      <div style="font-size:0.85rem; color:var(--text-secondary);">Contrôle sur chaque phase avec un VAT adapté et certifié, testé impérativement immédiatement avant et après usage.</div>
    </div>
  </div>

  <div style="background:var(--bg-surface-elevated); border:1px solid var(--border-medium); border-radius:8px; padding:0.85rem 1rem; display:flex; align-items:center; gap:0.85rem;">
    <span style="background:var(--electric-blue); color:#0B1220; font-weight:800; border-radius:50%; width:30px; height:30px; display:flex; align-items:center; justify-content:center; flex-shrink:0;">4</span>
    <div>
      <strong>4. Mettre à la terre et en court-circuit (let. d) :</strong>
      <div style="font-size:0.85rem; color:var(--text-secondary);">Obligatoire en haute tension. <em>Règle d'or : raccorder d'abord la borne de terre avant de fixer les pinces sur les conducteurs actifs !</em></div>
    </div>
  </div>

  <div style="background:var(--bg-surface-elevated); border:1px solid var(--border-medium); border-radius:8px; padding:0.85rem 1rem; display:flex; align-items:center; gap:0.85rem;">
    <span style="background:var(--electric-blue); color:#0B1220; font-weight:800; border-radius:50%; width:30px; height:30px; display:flex; align-items:center; justify-content:center; flex-shrink:0;">5</span>
    <div>
      <strong>5. Protéger contre les éléments voisins sous tension (let. e) :</strong>
      <div style="font-size:0.85rem; color:var(--text-secondary);">Mise en place d'écrans isolants rigides, capuchons, banderoles de balisage et délimitation de la zone de travail.</div>
    </div>
  </div>
</div>`
          },
          {
            title: "3. Travaux sous tension (TST) et travaux au voisinage",
            text: `<div class="ocfo-legal-badge">RS 734.2 — Art. 75 à 80</div>
<p style="margin-bottom:0.75rem; line-height:1.6;">
Les travaux sous tension sont en principe interdits et ne sont admis qu'à titre exceptionnel sous des conditions draconiennes :
</p>
<div class="ocfo-highlight-card">
  <div class="card-title">⚡ Exigences réglementaires pour les TST (Art. 75 à 79)</div>
  <ul style="margin:0 0 0 1.25rem; line-height:1.6; font-size:0.9rem; color:var(--text-secondary);">
    <li><strong>Qualification TST spécifique (Art. 76) :</strong> Les intervenants doivent avoir suivi une formation spéciale certifiée et renouvelée régulièrement.</li>
    <li><strong>Travail en binôme obligatoire (Art. 78 al. 1) :</strong> <em>« Les travaux sous tension doivent être exécutés par deux personnes au moins, formées à cet effet. L'une d'elles surveille les travaux et peut intervenir en tout temps. »</em></li>
    <li><strong>Interdiction absolue de cumul (Art. 79 al. 2) :</strong> Il est strictement interdit d'effectuer simultanément des travaux sous tension et des travaux hors tension sur le même emplacement de travail.</li>
    <li><strong>Outillage et EPI homologués (Art. 77) :</strong> Perches isolantes, gants haute tension certifiés, tabourets et tapis isolants contrôlés périodiquement.</li>
  </ul>
</div>`
          }
        ],
        practicalExample: "Remplacement d'un isolateur fissuré sur une ligne 50 kV : le chef de chantier applique l'Art. 72 al. 1 : déclenchement et verrouillage des disjoncteurs aux deux sous-stations d'extrémité, vérification de l'absence de tension sur les 3 conducteurs, mise à la terre et en court-circuit au moyen de perches homologuées en raccordant d'abord la prise de terre au pied du pylône, puis les pinces sur les conducteurs. Un travail sous tension sur le circuit parallèle voisin est formellement interdit sur ce même pylône (Art. 79 al. 2).",
        importantPoint: "L'obligation du travail en binôme (Art. 78 al. 1 OCFo) pour les travaux sous tension impose qu'une personne veille continuellement sans participer aux gestes manuels, prête à couper l'alimentation ou à donner l'alerte immédiate en cas d'accident.",
        quiz: [
          {
            question: "Quel article de l'OCFo constitue le fondement juridique officiel des 5 règles vitales de sécurité en Suisse ?",
            options: [
              "Art. 1 OCFo",
              "Art. 18 OCFo",
              "Art. 72 al. 1 OCFo",
              "Art. 86 OCFo"
            ],
            correctAnswer: 2,
            explanation: "L'Art. 72 al. 1 OCFo formule lettre par lettre les 5 mesures préparatoires indispensables pour tout chantier hors tension sur les installations à haute tension."
          },
          {
            question: "Lors de la mise à la terre et en court-circuit (4e règle, Art. 72 al. 1 let. d), quelle séquence de raccordement est obligatoire ?",
            options: [
              "Raccorder d'abord les phases entre elles puis à la terre",
              "Raccorder d'abord le dispositif à la terre, puis aux conducteurs sous tension consignés",
              "L'ordre n'a aucune importance technique",
              "Raccorder uniquement une seule phase"
            ],
            correctAnswer: 1,
            explanation: "On doit obligatoirement relier l'équipement à la terre d'abord : si le conducteur était encore sous tension par erreur, le courant de court-circuit s'écoule immédiatement à la terre sans traverser l'opérateur."
          },
          {
            question: "Combien de personnes au minimum doivent obligatoirement participer à des travaux sous tension (TST) selon l'Art. 78 al. 1 OCFo ?",
            options: [
              "Une seule personne si elle a plus de 10 ans d'expérience",
              "Au moins deux personnes formées (travail en binôme avec surveillant dédié)",
              "Une équipe complète de 5 ingénieurs",
              "Un électricien et un pompier"
            ],
            correctAnswer: 1,
            explanation: "L'Art. 78 al. 1 OCFo exige impérativement au moins deux personnes qualifiées pour les TST, dont une consacrée exclusivement à la surveillance et prête à intervenir."
          },
          {
            question: "Que dispose l'Art. 79 al. 2 OCFo concernant la combinaison de travaux sous tension et de travaux hors tension ?",
            options: [
              "Il est interdit d'effectuer simultanément des travaux sous tension et des travaux hors tension sur le même emplacement",
              "C'est encouragé pour gagner du temps",
              "C'est autorisé sous réserve d'un accord verbal du client",
              "C'est permis uniquement le week-end"
            ],
            correctAnswer: 0,
            explanation: "L'Art. 79 al. 2 OCFo prohibe formellement le cumul de travaux sous tension et hors tension sur le même emplacement de travail afin d'éviter toute confusion mortelle entre parties consignées et parties sous tension."
          }
        ],
        synthesis: "Le Chapitre 5 (Art. 66 à 80 OCFo) consacre les 5 règles vitales de sécurité de l'Art. 72 al. 1 pour toute intervention hors tension (Déclencher, Assurer contre réenclenchement, Vérifier l'absence de tension, Mettre à la terre et en court-circuit, Protéger contre les éléments voisins), l'arrêt obligatoire des travaux extérieurs par temps d'orage (Art. 70), le binôme obligatoire pour les TST (Art. 78) et l'interdiction de cumuler TST et hors tension (Art. 79).",
        prevChapterId: "rs-734-2-chapitre-4",
        nextChapterId: "rs-734-2-chapitre-6"
      },

      // ----------------------------------------------------------------------
      // RS 734.2 — CHAPITRE 6 : Installations provisoires (Art. 81 à 83)
      // ----------------------------------------------------------------------
      {
        id: "rs-734-2-chapitre-6",
        routeId: "rs-734-2/chapitre-6",
        moduleId: "A",
        parcoursId: "rs-734-2",
        chapterNumber: 6,
        totalChapters: 8,
        code: "RS 734.2 — Leçon 6",
        title: "Chapitre 6 : Installations provisoires",
        subtitle: "Art. 81 à 83 — Chantiers, foires et manifestations : sécurité, contrôle annuel et démontage obligatoire",
        articlesRange: "Art. 81 à 83",
        status: "Disponible",
        duration: "8 min",
        tag: "Ordonnance RS 734.2",
        xpReward: 30,
        objective: "Maîtriser les dispositions régissant les installations temporaires et de chantier (Art. 81), appliquer les critères de robustesse et d'incombustibilité des coffrets et tableaux (Art. 82), et respecter l'obligation de contrôle périodique annuel ainsi que le démontage immédiat et intégral dès la cessation de l'utilisation (Art. 83).",
        introduction: `Les installations électriques provisoires (chantiers de construction, manifestations, foires, installations de secours) sont soumises aux dispositions spécifiques du <strong>Chapitre 6 de l'OCFo (Art. 81 à 83)</strong>. En raison des contraintes mécaniques et des intempéries, la réglementation impose une résistance accrue et un démontage sans délai dès la fin des travaux.`,
        contentSections: [
          {
            title: "1. Champ d'application et principe de sécurité équivalente",
            text: `<div class="ocfo-legal-badge">RS 734.2 — Art. 81</div>
<p style="margin-bottom:0.75rem; line-height:1.6;">
L'<strong>Art. 81 OCFo</strong> dispose que les exigences de l'ordonnance s'appliquent pleinement aux installations d'exploitation limitée dans le temps :
</p>
<ul style="margin:0 0 0.85rem 1.25rem; line-height:1.6; color:var(--text-secondary);">
  <li><strong>Installations visées :</strong> Chantiers de génie civil et de bâtiment, tentes, foires, fêtes foraines, illuminations temporaires, dérivations de réseau de secours.</li>
  <li><strong>Dérogations conditionnelles :</strong> Des allégements aux règles de construction ne peuvent être tolérés que si la sécurité des personnes et des choses est garantie par d'autres <strong>mesures équivalentes ou des dispositions supplémentaires</strong>.</li>
</ul>`
          },
          {
            title: "2. Construction, matériel et résistance au feu",
            text: `<div class="ocfo-legal-badge">RS 734.2 — Art. 82</div>
<p style="margin-bottom:0.75rem; line-height:1.6;">
Le matériel employé sur les installations provisoires doit présenter une endurance adaptée aux conditions sévères d'exploitation :
</p>
<div class="ocfo-highlight-card">
  <div class="card-title">🛡️ Résistance mécanique et incombustibilité (Art. 82)</div>
  <ul style="margin:0 0 0 1.25rem; line-height:1.6; font-size:0.9rem; color:var(--text-secondary);">
    <li><strong>Protection contre les agressions :</strong> Le matériel doit être protégé contre l'eau, l'humidité, la poussière et les dégradations mécaniques (chocs, écrasement par engins).</li>
    <li><strong>Incombustibilité des coffrets :</strong> Les armoires de distribution, coffrets de chantier et tableaux doivent être construits en <strong>matériaux incombustibles ou difficilement inflammables</strong>.</li>
    <li><strong>Passages de câbles :</strong> Les câbles posés au sol doivent être protégés par des ponts de câbles renforcés ou enterrés sous fourreau pour prévenir tout sectionnement ou écrasement.</li>
  </ul>
</div>`
          },
          {
            title: "3. Contrôle périodique annuel et démontage obligatoire",
            text: `<div class="ocfo-legal-badge">RS 734.2 — Art. 83</div>
<div style="background:var(--bg-surface-elevated); border-left:4px solid var(--electric-blue); padding:1rem; border-radius:0 8px 8px 0; margin-bottom:0.85rem;">
  <ul style="margin:0 0 0 1.25rem; line-height:1.7; font-size:0.92rem; color:var(--text-secondary);">
    <li><strong>Contrôle annuel obligatoire (Art. 83 al. 1) :</strong> Les installations provisoires qui restent en service pendant plusieurs années (grands chantiers de tunnels, autoroutes, barrages) doivent être <strong>vérifiées au moins chaque année</strong> par une personne compétente.</li>
    <li><strong>Démontage immédiat obligatoire (Art. 83 al. 2) :</strong> <em>« Les installations provisoires doivent être démontées dès qu'elles ne sont plus utilisées. »</em> L'abandon sur site de câbles, coffrets ou lignes temporaires est formellement prohibé.</li>
  </ul>
</div>`
          }
        ],
        practicalExample: "Sur le chantier d'un viaduc autoroutier devant durer 3 ans, l'entreprise de construction met en place une distribution provisoire 400 V / 1000 V. Conformément au Chapitre 6 de l'OCFo, tous les coffrets de chantier sont en tôle d'acier incombustible (Art. 82), une vérification complète avec rapport d'inspection doit être consignée au bout de 12 mois puis à 24 mois (Art. 83 al. 1), et l'ensemble du réseau électrique temporaire doit être intégralement déposé le jour de l'achèvement de l'ouvrage (Art. 83 al. 2).",
        importantPoint: "L'obligation légale de démontage immédiat de l'Art. 83 al. 2 OCFo engage directement l'exploitant : laisser une ligne provisoire abandonnée sans utilisation expose son détenteur à des poursuites pénales (art. 55 LIE).",
        quiz: [
          {
            question: "À quelle fréquence minimale une installation provisoire de longue durée doit-elle être contrôlée selon l'Art. 83 al. 1 OCFo ?",
            options: [
              "Tous les 5 ans comme les installations définitives",
              "Au moins chaque année (une fois par an)",
              "Tous les mois obligatoirement",
              "Uniquement le jour de sa mise en service"
            ],
            correctAnswer: 1,
            explanation: "L'Art. 83 al. 1 OCFo dispose que les installations provisoires exploitées pendant plusieurs années doivent obligatoirement être vérifiées au moins chaque année."
          },
          {
            question: "Quelle exigence de réaction au feu s'applique aux armoires et coffrets de distribution provisoires selon l'Art. 82 OCFo ?",
            options: [
              "Ils peuvent être en bois brut non traité",
              "Ils doivent être construits en matériaux incombustibles ou difficilement inflammables",
              "Aucune exigence de réaction au feu n'est fixée",
              "Ils doivent obligatoirement être immergés dans l'eau"
            ],
            correctAnswer: 1,
            explanation: "L'Art. 82 al. 1 OCFo exige que les enveloppes et tableaux des installations provisoires soient réalisés en matériaux incombustibles ou difficilement inflammables pour prévenir tout départ de feu."
          },
          {
            question: "Quelle obligation stricte s'impose dès qu'une installation provisoire n'est plus utilisée (Art. 83 al. 2 OCFo) ?",
            options: [
              "La laisser sur place en coupant simplement le disjoncteur général",
              "Elle doit obligatoirement et immédiatement être démontée",
              "La céder gratuitement au propriétaire foncier",
              "Attendre le prochain contrôle quinquennal"
            ],
            correctAnswer: 1,
            explanation: "L'Art. 83 al. 2 OCFo ordonne sans ambiguïté : « Les installations provisoires doivent être démontées dès qu'elles ne sont plus utilisées. »"
          }
        ],
        synthesis: "Le Chapitre 6 (Art. 81 à 83 OCFo) soumet les chantiers et installations temporaires aux exigences de sécurité équivalente, impose des tableaux et coffrets incombustibles ou difficilement inflammables (Art. 82), requiert une vérification périodique annuelle (Art. 83 al. 1) et impose le démontage immédiat dès l'achèvement de l'usage (Art. 83 al. 2).",
        prevChapterId: "rs-734-2-chapitre-5",
        nextChapterId: "rs-734-2-chapitre-7"
      },

      // ----------------------------------------------------------------------
      // RS 734.2 — CHAPITRE 7 : Dispositions finales (Art. 84 à 86)
      // ----------------------------------------------------------------------
      {
        id: "rs-734-2-chapitre-7",
        routeId: "rs-734-2/chapitre-7",
        moduleId: "A",
        parcoursId: "rs-734-2",
        chapterNumber: 7,
        totalChapters: 8,
        code: "RS 734.2 — Leçon 7",
        title: "Chapitre 7 : Dispositions finales",
        subtitle: "Art. 84 à 86 — Abrogation de l'ordonnance de 1933, dispositions transitoires et entrée en vigueur",
        articlesRange: "Art. 84 à 86",
        status: "Disponible",
        duration: "6 min",
        tag: "Ordonnance RS 734.2",
        xpReward: 30,
        objective: "Identifier la portée juridique des dispositions finales de l'OCFo (Art. 84 à 86) : abrogation formelle de l'ordonnance historique du 7 juillet 1933, régime transitoire accordé aux installations existantes (Art. 85) et entrée en vigueur officielle de l'ordonnance au 1er juin 1994.",
        introduction: `Le <strong>Chapitre 7 (Art. 84 à 86 OCFo)</strong> clôt l'ordonnance par les clauses juridiques de transition et de mise en vigueur. Il consacre le passage de l'ancien droit technique fédéral de 1933 à la réglementation moderne unifiée du Conseil fédéral.`,
        contentSections: [
          {
            title: "1. Abrogation du droit antérieur et dispositions transitoires",
            text: `<div class="ocfo-legal-badge">RS 734.2 — Art. 84 & Art. 85</div>
<div class="ocfo-highlight-card">
  <div class="card-title">📜 Abrogation formelle de l'ancien droit (Art. 84)</div>
  <p style="font-size:0.92rem; line-height:1.6; color:var(--text-secondary); margin-bottom:0.5rem;">
    L'<strong>Art. 84 OCFo</strong> abroge formellement :
  </p>
  <ul style="margin:0 0 0 1.25rem; font-size:0.9rem; line-height:1.6; color:var(--text-secondary);">
    <li>L'ancienne <strong>ordonnance du 7 juillet 1933 sur les installations électriques à courant fort</strong> ;</li>
    <li>Les arrêtés complémentaires et dispositions d'exécution devenus obsolètes.</li>
  </ul>
</div>

<p style="margin:1rem 0 0.75rem; line-height:1.6;">
L'<strong>Art. 85 OCFo (Dispositions transitoires)</strong> régit la transition :
</p>
<ul style="margin:0 0 0.85rem 1.25rem; line-height:1.6; color:var(--text-secondary);">
  <li>Les installations légalement établies sous l'ancien droit conservent le droit d'être exploitées dans leur état d'origine tant qu'aucun risque direct pour les personnes et l'environnement n'apparaît.</li>
  <li>Toutefois, les règles d'exploitation, l'obligation d'entretien (Art. 17), le devoir de contrôle périodique tous les 5 ans (Art. 18) et les 5 règles vitales pour les travaux (Art. 72) s'appliquent immédiatement sans délai de grâce.</li>
</ul>`
          },
          {
            title: "2. Entrée en vigueur de l'ordonnance",
            text: `<div class="ocfo-legal-badge">RS 734.2 — Art. 86</div>
<p style="margin-bottom:0.75rem; line-height:1.6;">
L'<strong>Art. 86 OCFo</strong> fixe l'entrée en vigueur de l'ordonnance au <strong>1er juin 1994</strong>.
</p>
<div style="background:var(--bg-surface-elevated); border-left:4px solid var(--electric-blue); padding:0.85rem 1rem; border-radius:0 8px 8px 0; font-size:0.92rem; line-height:1.6;">
  📅 <strong>Évolutions et mises à jour :</strong> L'ordonnance a été révisée ultérieurement par le Conseil fédéral (notamment mise à jour de référence au 1er juin 2019 / 1er juillet 2021) pour s'adapter aux technologies modernes (postes GIS, normes internationales CEI/CENELEC, transition énergétique).
</div>`
          }
        ],
        practicalExample: "Lors de l'audit de sécurité d'un poste de couplage 110 kV mis en service en 1988, l'auditeur constate que certaines distances constructives correspondent à l'ordonnance abrogée de 1933. En vertu de l'Art. 85 OCFo, l'installation peut continuer à être exploitée telle quelle tant qu'elle ne fait pas l'objet d'une transformation complète et qu'aucun danger direct n'existe (Art. 1 al. 2) ; en revanche, le contrôle périodique sous 5 ans et l'application des 5 règles vitales d'intervention sont obligatoires sans dérogation.",
        importantPoint: "Même si une ancienne installation bénéficie des dispositions transitoires de l'Art. 85 pour sa structure matérielle, les prescriptions relatives à l'exploitation, à la sécurité des travailleurs et au contrôle périodique quinquennal (Art. 18) s'imposent à tous les ouvrages sans exception.",
        quiz: [
          {
            question: "Quel texte historique a été formellement abrogé lors de l'adoption de l'OCFo selon l'Art. 84 ?",
            options: [
              "Le Code civil suisse",
              "L'ordonnance du 7 juillet 1933 sur les installations électriques à courant fort",
              "La loi fédérale sur l'assurance maladie",
              "L'ordonnance sur la circulation routière"
            ],
            correctAnswer: 1,
            explanation: "L'Art. 84 OCFo abroge expressément l'ancienne ordonnance du 7 juillet 1933 qui régissait auparavant le courant fort en Suisse."
          },
          {
            question: "Que prévoient les dispositions transitoires de l'Art. 85 OCFo pour les installations existantes conformes à l'ancien droit ?",
            options: [
              "Elles doivent être rasées et reconstruites immédiatement",
              "Elles peuvent continuer à être exploitées tant qu'aucun danger ne survient, mais sont immédiatement soumises aux règles d'exploitation et de contrôle",
              "Elles ne sont soumises à aucune règle de sécurité",
              "Elles sont exemptées de contrôle périodique"
            ],
            correctAnswer: 1,
            explanation: "L'Art. 85 OCFo tolère le maintien de la structure matérielle existante sans danger immédiat, mais soumet sans réserve les exploitants aux règles d'entretien, de sécurité au travail et de contrôle périodique."
          },
          {
            question: "À quelle date l'ordonnance RS 734.2 (OCFo) est-elle initialement entrée en vigueur (Art. 86) ?",
            options: [
              "Le 1er janvier 1902",
              "Le 1er juin 1994",
              "Le 1er janvier 2025",
              "Le 1er août 2000"
            ],
            correctAnswer: 1,
            explanation: "L'Art. 86 OCFo fixe l'entrée en vigueur officielle de l'ordonnance au 1er juin 1994."
          }
        ],
        synthesis: "Le Chapitre 7 (Art. 84 à 86 OCFo) consacre l'abrogation de l'ordonnance de 1933, fixe les dispositions transitoires préservant les installations existantes sous réserve de conformité aux devoirs d'exploitation et de contrôle, et date l'entrée en vigueur au 1er juin 1994.",
        prevChapterId: "rs-734-2-chapitre-6",
        nextChapterId: "rs-734-2-annexes"
      },

      // ----------------------------------------------------------------------
      // ----------------------------------------------------------------------
      // RS 734.2 — LEÇON 8 : Annexes 1 à 4 (Prescriptions techniques et dimensions réglementaires)
      // ----------------------------------------------------------------------
      {
        id: "rs-734-2-annexes",
        routeId: "rs-734-2/annexes",
        moduleId: "A",
        parcoursId: "rs-734-2",
        chapterNumber: 8,
        totalChapters: 8,
        code: "RS 734.2 — Leçon 8",
        title: "Leçon 8 — Annexes 1 à 4 : Prescriptions techniques et dimensions réglementaires",
        subtitle: "Annexes 1 à 4 — Profil libre des passages, dimensions en locaux, distances en plein air et tensions de contact admissibles",
        articlesRange: "Annexes 1 à 4",
        status: "Disponible",
        duration: "12 min",
        tag: "Annexes RS 734.2",
        xpReward: 40,
        objective: "Maîtriser les prescriptions techniques d'exécution figurant dans les 4 annexes de l'OCFo : le gabarit de passage libre inaliénable (Annexe 1), les dimensions, hauteurs d'éléments nus et fermeture des armoires < 2,2 m en locaux (Annexe 2), les distances minimales en plein air et la correction altimétrique de +14%/1000m (Annexe 3), ainsi que la courbe de coupure admissible temps-tension ≤ 5 s (Annexe 4).",
        introduction: `Les quatre annexes de l'<strong>Ordonnance sur les installations électriques à courant fort (OCFo — RS 734.2)</strong> fixent les valeurs numériques, hauteurs de garde, formules géométriques et courbes limites contraignantes qui s'imposent aux ingénieurs et installateurs suisses. Réunies dans cette <strong>8ᵉ et dernière leçon</strong>, elles forment le prolongement technique direct des chapitres 3 et 4 de l'ordonnance.`,
        contentSections: [
          {
            title: "Annexe 1 : Profil libre des passages (art. 22 al. 3, 25 al. 2)",
            text: `<div class="ocfo-legal-badge">RS 734.2 — Annexe 1 (Renvois : Art. 22 al. 3 & Art. 25 al. 2)</div>
<p style="margin-bottom:0.75rem; line-height:1.6;">
L'<strong>Annexe 1</strong> de l'OCFo régit les voies de passage et couloirs de circulation dans les locaux de service électrique et installations de couplage. Elle prescrit un gabarit rectangulaire dégagé de tout obstacle :
</p>
<div class="ocfo-highlight-card">
  <div class="card-title">📏 Dimensions minimales du profil libre de passage</div>
  <ul style="margin:0 0 0 1.25rem; line-height:1.6; font-size:0.92rem; color:var(--text-secondary);">
    <li><strong>Hauteur libre minimale : 2,00 m</strong> de sol fini à tout élément suspendu.</li>
    <li><strong>Largeur libre minimale : 0,80 m</strong> dans les couloirs de manœuvre normaux (réductible à <strong>0,60 m</strong> uniquement sur des accès d'inspection très courts ou secondaires).</li>
  </ul>
</div>
<div style="background:var(--bg-surface-elevated); border-left:4px solid var(--warning); padding:0.85rem 1rem; border-radius:0 8px 8px 0; margin-top:0.85rem; font-size:0.9rem; line-height:1.6;">
  <strong>⛔ Règle d'inviolabilité absolue du profil libre (Art. 22 al. 3) :</strong><br/>
  Aucun organe de commande, chariot de disjoncteur en position de sectionnement ou d'essai, porte d'armoire ouverte ou battant de fenêtre <strong>ne doit réduire le profil libre des passages</strong>. Les couloirs doivent rester parfaitement praticables même pendant les manœuvres d'exploitation et en situation d'évacuation d'urgence.
</div>`
          },
          {
            title: "Annexe 2 : Distances, hauteurs et dimensions minimales dans les installations en locaux (art. 22 al. 2, 24)",
            text: `<div class="ocfo-legal-badge">RS 734.2 — Annexe 2 (Renvois : Art. 22 al. 2 & Art. 24)</div>
<p style="margin-bottom:0.75rem; line-height:1.6;">
L'<strong>Annexe 2</strong> fixe les espacements diélectriques dans l'air et les hauteurs d'implantation protectrices dans les installations électriques intérieures en fonction de la tension nominale de service (U<sub>n</sub>) :
</p>
<div style="overflow-x:auto; margin:0.75rem 0 1rem;">
<table class="thresholds-table">
<thead>
<tr>
<th style="min-width:140px;">Tension nominale (U<sub>n</sub>)</th>
<th>Distance minimale d'isolement dans l'air</th>
<th>Hauteur min. au sol des pièces nues</th>
<th>Cloisons / Grillages de protection</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>≤ 1 kV (Basse tension)</strong></td>
<td>10 mm (50 mm parties nues non isolées)</td>
<td>2,50 m</td>
<td>Hauteur min. 1,80 m si accessibles aux personnes</td>
</tr>
<tr>
<td><strong>3 kV</strong></td>
<td>60 mm</td>
<td>2,50 m</td>
<td>Cloisons pleines ou grillagées indémontables</td>
</tr>
<tr>
<td><strong>6 kV</strong></td>
<td>90 mm</td>
<td>2,50 m</td>
<td>Grillage de protection mailles ≤ 40 mm</td>
</tr>
<tr>
<td><strong>10 kV</strong></td>
<td>120 mm</td>
<td>2,50 m</td>
<td>Interverrouillage mécanique obligatoire</td>
</tr>
<tr>
<td><strong>15 kV</strong></td>
<td>160 mm</td>
<td>2,60 m</td>
<td>Accès réservé au personnel qualifié</td>
</tr>
<tr>
<td><strong>20 kV</strong></td>
<td>220 mm</td>
<td>2,70 m</td>
<td>Balisage haute tension indélébile</td>
</tr>
<tr>
<td><strong>30 kV</strong></td>
<td>320 mm</td>
<td>2,80 m</td>
<td>Cellules fermées sous enveloppe métallique</td>
</tr>
</tbody>
</table>
</div>
<div style="background:var(--bg-surface-elevated); border-left:4px solid var(--electric-blue); padding:0.85rem 1rem; border-radius:0 8px 8px 0; margin-top:0.5rem; font-size:0.9rem; line-height:1.6;">
  <strong>🔒 Armoires de distribution (Annexe 2 & Art. 24) :</strong><br/>
  Les armoires de distribution et tableaux électriques d'une hauteur <strong>inférieure à 2,20 m</strong> doivent impérativement être <strong>entièrement fermées vers le haut</strong> afin d'empêcher toute chute accidentelle d'objets métalliques ou d'outils conducteurs sur des conducteurs actifs.
</div>`
          },
          {
            title: "Annexe 3 : Distances de sécurité dans les installations en plein air (art. 43, 48)",
            text: `<div class="ocfo-legal-badge">RS 734.2 — Annexe 3 (Renvois : Art. 43 & Art. 48)</div>
<p style="margin-bottom:0.75rem; line-height:1.6;">
L'<strong>Annexe 3</strong> s'applique aux sous-stations de transformation extérieures, postes haute tension en plein air et travées de couplage. Elle prescrit les distances de garde par rapport aux pièces sous tension :
</p>
<div style="overflow-x:auto; margin:0.75rem 0 1rem;">
<table class="thresholds-table">
<thead>
<tr>
<th>Tension nominale (U<sub>n</sub>)</th>
<th>Tension max. exploitation (U<sub>m</sub>)</th>
<th>Distance minimale d'isolement (D)</th>
<th>Hauteur min. au sol des conducteurs nus</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>≤ 1 kV</strong></td>
<td>1 kV</td>
<td>50 mm</td>
<td><strong>5,00 m</strong></td>
</tr>
<tr>
<td><strong>10 kV</strong></td>
<td>12 kV</td>
<td>150 mm</td>
<td><strong>5,20 m</strong></td>
</tr>
<tr>
<td><strong>20 kV</strong></td>
<td>24 kV</td>
<td>220 mm</td>
<td><strong>5,30 m</strong></td>
</tr>
<tr>
<td><strong>50 kV</strong></td>
<td>52 kV</td>
<td>480 mm</td>
<td><strong>5,60 m</strong></td>
</tr>
<tr>
<td><strong>132 kV</strong></td>
<td>145 kV</td>
<td>1200 mm</td>
<td><strong>6,40 m</strong></td>
</tr>
<tr>
<td><strong>220 kV</strong></td>
<td>245 kV</td>
<td>1900 mm</td>
<td><strong>7,30 m</strong></td>
</tr>
<tr>
<td><strong>380 kV</strong></td>
<td>420 kV</td>
<td>3200 mm</td>
<td><strong>8,90 m</strong></td>
</tr>
</tbody>
</table>
</div>
<div class="ocfo-highlight-card">
  <div class="card-title">⛰️ Règle impérative de correction altimétrique suisse</div>
  <p style="margin-bottom:0.5rem; font-size:0.92rem; color:var(--text-secondary);">
    Les distances d'isolement dans l'air fixées à l'Annexe 3 sont calculées pour des installations situées à une altitude <strong>inférieure ou égale à 1000 mètres</strong>.
  </p>
  <p style="margin:0; font-size:0.92rem; color:var(--text-secondary); line-height:1.6;">
    <strong>Règle de majoration :</strong> Au-delà de 1000 m d'altitude, la raréfaction de l'air diminue sa rigidité diélectrique. Les distances minimales doivent être augmentées de façon linéaire de <strong>14 % par tranche supplémentaire de 1000 mètres d'altitude</strong> :
    <br/>
    <code style="display:inline-block; margin-top:0.4rem; padding:0.25rem 0.5rem; background:var(--bg-surface); border-radius:4px; font-weight:600; color:var(--electric-blue);">
      D_altitude = D_base × [1 + 0,14 × (Altitude - 1000) / 1000]
    </code>
  </p>
</div>`
          },
          {
            title: "Annexe 4 : Tensions de contact admissibles en fonction de la durée de coupure (art. 54 al. 2, 59)",
            text: `<div class="ocfo-legal-badge">RS 734.2 — Annexe 4 (Renvois : Art. 54 al. 2 & Art. 59)</div>
<p style="margin-bottom:0.75rem; line-height:1.6;">
L'<strong>Annexe 4</strong> définit la courbe limite de sécurité suisse reliant la tension de contact présumée (U<sub>C</sub>) au temps maximal admissible de déclenchement du dispositif de protection ($t_{coupure} \le 5	ext{ s}$) :
</p>
<div style="overflow-x:auto; margin:0.75rem 0 1rem;">
<table class="thresholds-table">
<thead>
<tr>
<th>Tension de contact (U<sub>C</sub>)</th>
<th>Temps max de déclenchement admissible</th>
<th>Régime de sécurité</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>≤ 50 V AC / ≤ 120 V DC</strong></td>
<td><strong>Illimité (régime continu)</strong></td>
<td>Tension de contact limite conventionnelle (U<sub>L</sub>)</td>
</tr>
<tr>
<td><strong>75 V AC</strong></td>
<td>≈ 1,00 s</td>
<td>Déclenchement temporisé admis</td>
</tr>
<tr>
<td><strong>90 V AC</strong></td>
<td>≈ 0,50 s</td>
<td>Déclenchement standard</td>
</tr>
<tr>
<td><strong>110 V AC</strong></td>
<td>≈ 0,20 s</td>
<td>Coupure rapide obligatoire</td>
</tr>
<tr>
<td><strong>150 V AC</strong></td>
<td>≈ 0,10 s</td>
<td>Coupure instantanée</td>
</tr>
<tr>
<td><strong>230 V AC</strong></td>
<td>≈ 0,05 s (50 ms)</td>
<td>Disjoncteur différentiel / déclencheur ultra-rapide</td>
</tr>
<tr>
<td><strong>400 V AC</strong></td>
<td>≈ 0,02 s (20 ms)</td>
<td>Coupure au premier cycle réseau (1 période 50 Hz)</td>
</tr>
</tbody>
</table>
</div>
<div style="background:var(--bg-surface-elevated); border-left:4px solid var(--electric-blue); padding:0.85rem 1rem; border-radius:0 8px 8px 0; margin-top:0.75rem; font-size:0.9rem; line-height:1.6;">
  <strong>👥 Zones de présence humaine & Tolérance en zone habitée :</strong><br/>
  • Les valeurs de l'Annexe 4 doivent être impérativement respectées dans les zones où la présence de personnes est probable ou prolongée.<br/>
  • <em>Exception légale :</em> Dans les zones habitées ou aux abords de voies publiques, un dépassement temporaire de ces valeurs de contact est toléré pour une durée maximale absolue de <strong>2 secondes</strong>.
</div>

<!-- Widget interactif de la courbe temps-tension Annexe 4 -->
<div id="ocfoAnnexe4Widget" style="margin-top:1.5rem;"></div>`
          }
        ],
        practicalExample: "Dans une sous-station alpine située à 2400 m d'altitude dans le Valais (station de pompage turbinage), l'ingénieur électricien applique l'Annexe 3 de l'OCFo : la distance d'isolement de base pour un poste 50 kV (480 mm) doit être majorée de 19,6 % (14 % × 1,4), soit une distance minimale de 574 mm. À l'intérieur, les couloirs conservent les 2,0 m × 0,8 m prescrits par l'Annexe 1 sans saillie de disjoncteur.",
        importantPoint: "Les 4 annexes de l'OCFo ont une valeur juridique contraignante absolue : le gabarit de 2,0 m × 0,8 m (Annexe 1) est inaliénable ; les armoires de moins de 2,2 m doivent être couvertes (Annexe 2) ; la règle des +14%/1000 m d'altitude (Annexe 3) protège contre le claquage diélectrique en montagne ; et la tension de contact sans coupure ne doit jamais dépasser 50 V AC (Annexe 4).",
        quiz: [
          {
            question: "[Annexe 1 — Profil libre] Selon l'Annexe 1 de l'OCFo, quelles sont les dimensions minimales du profil libre des passages dans les installations en locaux ?",
            options: [
              "Hauteur 1,80 m et largeur 0,50 m",
              "Hauteur 2,00 m et largeur 0,80 m (réductible à 0,60 m pour les accès secondaires)",
              "Hauteur 2,50 m et largeur 1,20 m",
              "Aucune dimension minimale n'est imposée par l'ordonnance"
            ],
            correctAnswer: 1,
            explanation: "L'Annexe 1 et l'Art. 22 al. 3 OCFo imposent une hauteur libre minimale de 2,00 m et une largeur libre de 0,80 m, qui ne doivent être réduites par aucun obstacle, organe de commande, porte ouverte ou chariot de disjoncteur débroché."
          },
          {
            question: "[Annexe 2 — Armoires en locaux] Quelle obligation s'applique aux armoires de distribution d'une hauteur inférieure à 2,20 m selon l'Annexe 2 et l'Art. 24 OCFo ?",
            options: [
              "Elles doivent être peintes en jaune fluo",
              "Elles doivent être obligatoirement fermées vers le haut pour empêcher les chutes d'objets",
              "Elles doivent comporter une climatisation forcée",
              "Elles peuvent rester ouvertes sur toutes leurs faces"
            ],
            correctAnswer: 1,
            explanation: "L'Annexe 2 et l'Art. 24 OCFo exigent que toutes les armoires et tableaux électriques dont la hauteur est inférieure à 2,20 m soient fermés vers le haut pour parer à la chute accidentelle d'outils conducteurs sur les jeux de barres."
          },
          {
            question: "[Annexe 3 — Correction altimétrique] Dans les installations en plein air situées à plus de 1000 m d'altitude, de combien les distances de sécurité doivent-elles être augmentées (Annexe 3) ?",
            options: [
              "De 5 % par tranche de 500 mètres",
              "De façon linéaire de 14 % par tranche supplémentaire de 1000 mètres d'altitude",
              "D'une valeur fixe de 50 cm quel que soit le relief",
              "Les distances diminuent en montagne en raison du froid"
            ],
            correctAnswer: 1,
            explanation: "L'Annexe 3 OCFo stipule que pour les altitudes supérieures à 1000 m, les distances d'isolement dans l'air doivent être majorées linéairement de 14 % par tranche de 1000 m supplémentaire en raison de la baisse de rigidité diélectrique de l'air raréfié."
          },
          {
            question: "[Annexe 4 — Tensions de contact] Selon l'Annexe 4 et l'Art. 54, quelle est la tolérance maximale admise pour le dépassement des tensions de contact dans les zones habitées ou chemins ?",
            options: [
              "Dépassement toléré pendant 2 secondes au maximum",
              "Dépassement illimité sans coupure",
              "Tolérance pendant 10 minutes",
              "Aucun dépassement n'est jamais admis même pour 1 milliseconde"
            ],
            correctAnswer: 0,
            explanation: "L'Annexe 4 et l'Art. 54 al. 2 OCFo précisent que dans les zones habitées ou à proximité de chemins, les valeurs de tension de contact admissibles peuvent être dépassées pendant une durée maximale de 2 secondes."
          }
        ],
        synthesis: "La Leçon 8 parachève l'étude de l'OCFo (RS 734.2) par ses 4 annexes normatives : Annexe 1 (profils de passage inaliénables 2,0 × 0,8 m), Annexe 2 (distances en locaux et toitures d'armoires < 2,2 m), Annexe 3 (distances en plein air et règle alpine des +14%/1000 m), et Annexe 4 (tensions limites 50 V AC et courbe de déclenchement rapide ≤ 5 s).",
        prevChapterId: "rs-734-2-chapitre-7",
        nextChapterId: "rs-734-2-evaluation-finale"
      },
      // RS 734.2 — ÉVALUATION FINALE : Parcours certifiant (Art. 1 à 86)
      // ----------------------------------------------------------------------
      {
        id: "rs-734-2-evaluation-finale",
        routeId: "rs-734-2/evaluation-finale",
        moduleId: "A",
        parcoursId: "rs-734-2",
        chapterNumber: 8,
        isFinalEvaluation: true,
        code: "RS 734.2 — Examen",
        title: "Évaluation finale — RS 734.2 OCFo",
        subtitle: "12 questions d'examen certifiantes couvrant équitablement les 7 chapitres officiels",
        articlesRange: "Art. 1 à 86 (Ensemble des 7 chapitres)",
        status: "Disponible",
        duration: "15 min",
        tag: "Évaluation certifiante",
        xpReward: 50,
        objective: "Valider de manière exhaustive et certifiante la maîtrise de l'Ordonnance sur les installations électriques à courant fort (RS 734.2 OCFo) à travers 12 questions techniques et juridiques portant sur les 7 chapitres de la source officielle (champ d'application, définitions, entretien, contrôles périodiques, locaux, GIS, plein air, Annexe 4, les 5 règles de sécurité vitales, installations provisoires et dispositions finales).",
        introduction: `Cette <strong>évaluation finale officielle</strong> valide l'acquisition des compétences réglementaires indispensables à tout professionnel du secteur électrique en Suisse. Les 12 questions couvrent l'intégralité des 7 chapitres de la RS 734.2 (OCFo). Un score minimal de 75 % est requis pour certifier la réussite du module et débloquer les 50 XP.`,
        contentSections: [
          {
            title: "Consignes de l'évaluation finale",
            text: `<div class="ocfo-highlight-card">
  <div class="card-title">📋 Modalités de certification du module RS 734.2</div>
  <ul style="margin:0 0 0 1.25rem; line-height:1.6; font-size:0.9rem; color:var(--text-secondary);">
    <li><strong>12 questions représentatives :</strong> Réparties équitablement sur les 7 chapitres de l'OCFo.</li>
    <li><strong>Références juridiques systématiques :</strong> Chaque question mentionne l'article légal officiel de référence.</li>
    <li><strong>Seuil de réussite :</strong> 75 % de bonnes réponses (9 réponses correctes sur 12).</li>
    <li><strong>Récompense :</strong> 50 points d'expérience (XP) attribués avec protection stricte anti-farming.</li>
  </ul>
</div>`
          }
        ],
        practicalExample: "En situation d'expertise ou de contrôle périodique ESTI, l'installateur-électricien ou le responsable d'exploitation doit être capable de mobiliser instantanément les articles fondamentaux de l'OCFo : seuils de tension (Art. 3), obligation d'annonce d'accident (Art. 16), périodicité de 5 ans (Art. 18), dimensions de couloirs (Art. 35), tension permanente de 50 V (Art. 54), courbe Annexe 4, et les 5 règles vitales de l'Art. 72 al. 1.",
        importantPoint: "L'évaluation finale est sanctionnée par l'enregistrement de votre résultat dans votre profil d'apprentissage et votre progression globale sur l'Académie.",
        quiz: [
          {
            question: "[Chapitre 1 — Art. 3 ch. 10 & 13] Quelle est la limite réglementaire officielle séparant la basse tension de la haute tension selon l'OCFo ?",
            options: [
              "230 V AC / 400 V DC",
              "50 V AC / 120 V DC",
              "1000 V AC / 1500 V DC",
              "10 000 V AC / 15 000 V DC"
            ],
            correctAnswer: 2,
            explanation: "Art. 3 ch. 10 et 13 OCFo : la basse tension ne dépasse pas 1000 V AC ou 1500 V DC. Au-delà de ces seuils, l'installation relève de la haute tension."
          },
          {
            question: "[Chapitre 1 — Art. 1 al. 2] Dans quel cas l'OCFo s'applique-t-elle rétroactivement à une installation existante ?",
            options: [
              "En cas de transformation complète, modification importante ou danger imminent",
              "Lors du changement annuel d'heure d'hiver",
              "Uniquement si le locataire en fait la demande écrite",
              "Jamais, le droit suisse interdit toute rétroactivité sans exception"
            ],
            correctAnswer: 0,
            explanation: "Art. 1 al. 2 OCFo : les règles d'établissement s'appliquent aux installations antérieures lors d'une transformation complète, d'une modification importante sans effort disproportionné, ou d'un danger imminent."
          },
          {
            question: "[Chapitre 2 — Art. 4 al. 2] Quelles normes constituent la présomption de conformité aux règles de la technique reconnues ?",
            options: [
              "Les normes américaines NFPA uniquement",
              "Les normes harmonisées de la CEI et du CENELEC, puis les normes suisses (SN)",
              "Les consignes internes non écrites de l'entreprise",
              "Le manuel d'instructions du fabricant sans certification"
            ],
            correctAnswer: 1,
            explanation: "Art. 4 al. 2 OCFo : la présomption de conformité repose en priorité sur les normes internationales CEI et européennes CENELEC, complétées par les normes nationales SN."
          },
          {
            question: "[Chapitre 2 — Art. 16 al. 1 & 2] Quelle conduite l'exploitant doit-il impérativement observer lors d'un accident corporel grave ?",
            options: [
              "Prévenir l'ESTI sans délai et maintenir rigoureusement l'état des lieux sans le modifier",
              "Attendre une semaine puis envoyer un rapport simplifié",
              "Remplacer les pièces cassées avant d'appeler l'Inspection",
              "Ne rien faire si la personne n'est blessée que légèrement"
            ],
            correctAnswer: 0,
            explanation: "Art. 16 al. 1 et 2 OCFo : tout accident corporel grave doit être annoncé sans délai à l'ESTI avec interdiction stricte de modifier l'état des lieux."
          },
          {
            question: "[Chapitre 2 — Art. 18 & 19] Quelle est la périodicité maximale de contrôle d'une installation à courant fort et la durée de conservation des rapports ?",
            options: [
              "Contrôle tous les 20 ans, conservation pendant 1 an",
              "Contrôle tous les 5 ans au moins, conservation sur au moins 2 périodes de contrôle (10 ans minimum)",
              "Contrôle tous les ans, aucune conservation requise",
              "Contrôle tous les 15 ans, conservation illimitée"
            ],
            correctAnswer: 1,
            explanation: "Art. 18 al. 1 et Art. 19 al. 3 OCFo : contrôle au moins tous les 5 ans et conservation obligatoire des rapports pendant au moins deux cycles de contrôle."
          },
          {
            question: "[Chapitre 3 — Art. 35 al. 3] À partir de quelle longueur un couloir de manœuvre en local électrique doit-il comporter une issue à chaque extrémité ?",
            options: [
              "Plus de 10 mètres",
              "Plus de 20 mètres",
              "Plus de 35 mètres",
              "Plus de 50 mètres"
            ],
            correctAnswer: 1,
            explanation: "Art. 35 al. 3 OCFo : dès qu'un couloir de manœuvre excède 20 mètres de longueur, il doit impérativement disposer d'une issue à chaque extrémité."
          },
          {
            question: "[Chapitre 3 — Art. 41] Quelles sont les dimensions réglementaires d'une clôture de poste plein air ?",
            options: [
              "Hauteur 1,8 m, mailles 10 cm, garde au sol 20 cm",
              "Hauteur minimale de 2,20 m, mailles maximales de 4 cm et garde au sol maximale de 10 cm",
              "Hauteur 3 m sans exigence de mailles",
              "Hauteur libre sans clôture si des panneaux existent"
            ],
            correctAnswer: 1,
            explanation: "Art. 41 al. 1 et 2 OCFo : hauteur minimale 2,20 m, treillis à mailles max 4 cm et garde au sol max 10 cm pour interdire l'accès des tiers et de la faune."
          },
          {
            question: "[Chapitre 4 — Art. 54 al. 1 & Annexe 4] Quelle est la limite durable de tension de contact admissible en courant alternatif (AC) ?",
            options: [
              "24 V AC",
              "50 V AC",
              "120 V AC",
              "230 V AC"
            ],
            correctAnswer: 1,
            explanation: "Art. 54 al. 1 OCFo : la tension de contact ne doit pas dépasser durablement 50 volts en courant alternatif (AC) et 120 volts en continu (DC)."
          },
          {
            question: "[Chapitre 5 — Art. 72 al. 1] Dans quel ordre légal doivent être appliquées les 5 règles vitales de sécurité hors tension ?",
            options: [
              "Vérifier la tension, mettre à la terre, ouvrir, verrouiller, protéger",
              "Déclencher/ouvrir, assurer contre réenclenchement, vérifier l'absence de tension, mettre à la terre et en court-circuit, protéger contre les éléments voisins",
              "Mettre à la terre en premier avant tout déclenchement",
              "L'ordre est totalement libre"
            ],
            correctAnswer: 1,
            explanation: "Art. 72 al. 1 OCFo : l'ordre immuable est : 1. Déclencher et ouvrir, 2. Assurer contre réenclenchement, 3. Vérifier absence de tension, 4. MALT/CC, 5. Protéger contre les voisins."
          },
          {
            question: "[Chapitre 6 — Art. 83] Quelles sont les obligations spécifiques aux installations provisoires de chantier ?",
            options: [
              "Vérification annuelle obligatoire pour les chantiers pluriannuels et démontage immédiat dès la fin de l'utilisation",
              "Aucun contrôle requis et conservation des câbles abandonnés",
              "Contrôle tous les 10 ans uniquement",
              "Démontage facultatif selon le bon vouloir de l'entrepreneur"
            ],
            correctAnswer: 0,
            explanation: "Art. 83 al. 1 et 2 OCFo : vérification annuelle obligatoire des installations temporaires maintenues dans le temps, et démontage immédiat dès que l'installation n'est plus utilisée."
          },
          {
            question: "[Leçon 8 — Annexes 1 & 2] Quelles prescriptions s'appliquent respectivement aux couloirs de passage et aux armoires électriques selon les Annexes 1 et 2 de l'OCFo ?",
            options: [
              "Couloirs libres de min. 2,00 m × 0,80 m sans obstacle (Annexe 1) et fermeture obligatoire vers le haut des armoires < 2,20 m (Annexe 2)",
              "Couloirs d'au moins 5 mètres de large et armoires systématiquement ouvertes",
              "Aucune règle dimensionnelle en intérieur",
              "Armoires de moins de 1,50 m interdites"
            ],
            correctAnswer: 0,
            explanation: "Annexe 1 (profil libre 2,00 m × 0,80 m sans saillie de commande ou chariot) et Annexe 2 (armoires < 2,20 m obligatoirement fermées vers le haut pour empêcher les chutes d'objets conducteurs)."
          },
          {
            question: "[Leçon 8 — Annexes 3 & 4] Dans les installations en plein air de haute montagne (> 1000 m) et les zones habitées, quelles règles s'appliquent selon les Annexes 3 et 4 ?",
            options: [
              "Majoration de 14 % par 1000 m d'altitude au-delà de 1000 m (Annexe 3) et tolérance max de 2 secondes de dépassement de la tension de contact en zone habitée (Annexe 4)",
              "Diminution de 50 % des distances et aucune tolérance de tension",
              "Application des normes maritimes",
              "Suppression des prises de terre au-dessus de 1500 mètres"
            ],
            correctAnswer: 0,
            explanation: "Annexe 3 (majoration linéaire de +14 % par 1000 m supplémentaire en altitude) et Annexe 4 / Art. 54 al. 2 (tolérance maximale de 2 secondes pour les tensions de contact en zone habitée)."
          }
        ],
        synthesis: "Félicitations pour la complétion du parcours certifiant RS 734.2 OCFo ! Vous maîtrisez les 7 chapitres fondamentaux de l'ordonnance fédérale suisse sur les installations à courant fort : le cadre légal et les compétences du Chapitre 1, la sécurité opérationnelle et le signalement ESTI du Chapitre 2, la conception des locaux et des postes du Chapitre 3, les mesures de mise à la terre et l'Annexe 4 du Chapitre 4, les 5 règles vitales et les TST du Chapitre 5, la rigueur des chantiers du Chapitre 6, et les dispositions transitoires du Chapitre 7.",
        prevChapterId: "rs-734-2-annexes",
        nextChapterId: null
      },
      {
        id: "rs-734-27-oibt",
        routeId: "rs-734-27-oibt",
        code: "RS 734.27 - OIBT",
        title: "RS 734.27 — Ordonnance sur les installations à basse tension",
        subtitle: "Ordonnance du Conseil fédéral du 7 novembre 2001 sur les installations à basse tension",
        status: "En développement",
        duration: "À venir",
        tag: "Ordonnance",
        xpReward: 0,
        objective: "Étudier les règles fondamentales régissant les autorisations d'installer, le devoir de diligence, les périodicités de contrôle et le rapport de sécurité (RS / RaSi).",
        introduction: "Cette formation dédiée est actuellement en cours de préparation conformément aux sources officielles suisses.",
        contentSections: [
          {
            title: "🔒 Contenu en préparation",
            text: "La fiche technique relative à la RS 734.27 (OIBT) est en cours de formalisation."
          }
        ]
      },
      {
        id: "rs-814-710-orni",
        routeId: "rs-814-710-orni",
        code: "RS 814.710 - ORNI",
        title: "RS 814.710 — Protection contre le rayonnement non ionisant",
        subtitle: "Ordonnance du 23 décembre 1999 sur la protection contre le rayonnement non ionisant",
        status: "En développement",
        duration: "À venir",
        tag: "Santé et environnement",
        xpReward: 0,
        objective: "Connaître les valeurs limites d'immission et les valeurs limites de l'installation pour les champs magnétiques à basse fréquence (50 Hz).",
        introduction: "Cette formation dédiée est actuellement en cours de préparation conformément aux sources officielles suisses.",
        contentSections: [
          {
            title: "🔒 Contenu en préparation",
            text: "La fiche technique relative à l'ORNI (RS 814.710) est en cours de structuration pédagogique."
          }
        ]
      }
    ]
  },

  // --------------------------------------------------------------------------
  // MODULE B — Dangers de l’électricité
  // --------------------------------------------------------------------------
  {
    id: "B",
    code: "B",
    title: "Dangers de l’électricité",
    countLabel: "1 formation",
    description: "Analyse des risques d'électrisation, grandeurs physiques de contact (Ub, Ib, Uf, If), seuils physiologiques corporels et 5 règles vitales de sécurité.",
    badgeTheme: "danger",
    formations: [
      {
        id: "securite-electrique",
        routeId: "securite-electrique",
        code: "Sécurité électrique",
        title: "Sécurité électrique",
        subtitle: "Grandeurs physiques de défaut, seuils physiologiques du corps humain et 5 règles vitales",
        status: "Disponible",
        duration: "8 min",
        tag: "Sécurité vitale",
        xpReward: 40,
        objective: "Identifier avec précision les grandeurs électriques de défaut (Ub, Ib, Uf, If), comprendre la réaction de l'organisme humain selon l'intensité du courant et appliquer rigoureusement les 5 règles de sécurité.",
        introduction: "Le courant électrique présente un danger invisible et redoutable. Dès lors qu'un corps humain entre en contact avec une pièce sous tension, il ferme un circuit électrique et devient conducteur.",
        contentSections: [
          {
            title: "1. Notions physiques fondamentales en situation de défaut",
            text: `En électrotechnique de sécurité, on distingue rigoureusement :
• Ub (Tension de contact - Berührungsspannung) :
  Partie de la tension de défaut susceptible d'être pontée par une personne touchant une masse métallique et le sol ou deux éléments simultanément conducteurs.
  
• Ib (Courant de contact - Berührungsstrom) :
  Courant électrique qui traverse effectivement le corps humain lors du contact : Ib = Ub / Rb (où Rb est la résistance électrique interne et superficielle du corps, conventionnellement estimée à 1000 Ω en milieu sec sous 230 V).
  
• Uf (Tension de défaut - Fehlerspannung) :
  Tension apparaissant entre une masse conductrice et une terre de référence lointaine lors d'un claquage d'isolement.
  
• If (Courant de défaut - Fehlerstrom) :
  Courant total s'écoulant au point de défaut d'isolement vers la terre ou le conducteur de protection PE.`
          },
          {
            title: "2. Seuils physiologiques d'effet du courant alternatif (50 Hz)",
            text: `Les effets sur le corps humain dépendent de l'intensité (mA), de la trajectoire (main-main, main-pied) et de la durée d'exposition :
• 0.5 mA — Seuil de perception :
  Sensation de léger picotement ou de chatouillement à l'extrémité des doigts. Aucun réflexe musculaire dangereux.
  
• 10 mA — Seuil de non-lâcher :
  Contraction musculaire tétanisante involontaire. La personne ne peut plus ouvrir la main pour relâcher le conducteur saisi.
  
• 30 mA — Seuil d'asphyxie respiratoire :
  Paralysie des muscles thoraciques et du diaphragme si le contact se prolonge. Risque d'étouffement rapide. C'est le seuil maximal de déclenchement imposé pour les DDR de protection complémentaire des personnes (30 mA).
  
• 50 mA — Seuil de fibrillation ventriculaire :
  Dérèglement chaotique et irréversible des contractions du cœur. Les ventricules ne pompent plus le sang : arrêt circulatoire mortel en quelques minutes sans réanimation rapide.`
          },
          {
            title: "3. Les 5 règles vitales de sécurité (SUVA / ESTI)",
            text: `Avant toute intervention sur une installation électrique ou à proximité de celle-ci, les 5 règles vitales doivent être appliquées dans l'ordre chronologique strict :
1. Déclencher et couper sur tous les pôles (séparation visible ou garantie de l'alimentation).
2. Sécuriser contre le réenclenchement inopiné (cadenassage, condamnation d'organes, pancartes).
3. Vérifier l'absence de tension sur tous les conducteurs à l'aide d'un vérificateur d'absence de tension (VAT) préalablement testé.
4. Mettre à terre et en court-circuit (obligatoire en haute tension et pour les lignes aériennes basse tension).
5. Protéger et couvrir les parties voisines restées sous tension (écrans isolants, nappes en caoutchouc).`
          }
        ],
        interactiveWidget: "danger-widget",
        practicalExample: "Sous une tension de contact Ub = 230 V avec une impédance corporelle Rb = 1000 Ω, le courant corporel atteint immédiatement Ib = 230 V / 1000 Ω = 230 mA ! Cette valeur est presque 5 fois supérieure au seuil létal de fibrillation cardiaque (50 mA). L'installation doit couper en une fraction de seconde (< 0.4 s en schéma TN).",
        importantPoint: "Un disjoncteur standard (ex: B16A ou C16A) protège les câbles contre les surintensités, mais ne protège PAS une personne contre l'électrisation ! Seul un dispositif à courant différentiel résiduel (DDR ≤ 30 mA) assure la protection complémentaire des personnes contre les contacts directs et indirects.",
        synthesis: "La sécurité électrique repose sur deux piliers : des dispositifs techniques fiables (coupure automatique par DDR et mise à la terre) et une discipline professionnelle irréprochable (respect absolu des 5 règles vitales).",
        quiz: [
          {
            id: "q_b00_1",
            type: "single",
            question: "Que représente le symbole électrique « Ub » dans l'analyse de sécurité ?",
            options: [
              "Le courant s'écoulant au point de défaut",
              "La tension de contact susceptible d'être pontée par une personne",
              "La tension nominale du réseau de distribution",
              "La résistance de boucle de terre"
            ],
            correctAnswer: 1,
            explanation: "Ub (Berührungsspannung) est la tension de contact qui apparaît entre deux parties simultanément accessibles lors d'un défaut."
          },
          {
            id: "q_b00_2",
            type: "single",
            question: "À partir de quel seuil d'intensité en courant alternatif 50 Hz le risque de fibrillation ventriculaire irréversible apparaît-il ?",
            options: [
              "0.5 mA",
              "10 mA",
              "30 mA",
              "50 mA"
            ],
            correctAnswer: 3,
            explanation: "Dès 50 mA en alternatif 50 Hz, le risque de fibrillation cardiaque irréversible survient, rendant le choc potentiellement mortel."
          },
          {
            id: "q_b00_3",
            type: "single",
            question: "Quelle est la 3e règle vitale de sécurité parmi les 5 règles officielles ESTI / SUVA ?",
            options: [
              "Mettre à terre et en court-circuit",
              "Vérifier l'absence de tension",
              "Déclencher et couper sur tous les pôles",
              "Couvrir les parties voisines"
            ],
            correctAnswer: 1,
            explanation: "L'ordre strict est : 1. Déclencher, 2. Sécuriser contre le réenclenchement, 3. Vérifier l'absence de tension, 4. Mettre à terre et en court-circuit, 5. Couvrir les parties voisines."
          },
          {
            id: "q_b00_4",
            type: "single",
            question: "Quelle est la sensibilité maximale d'un disjoncteur différentiel (DDR) destiné à la protection complémentaire des personnes ?",
            options: [
              "10 mA",
              "30 mA",
              "100 mA",
              "300 mA"
            ],
            correctAnswer: 1,
            explanation: "Le seuil légal de protection complémentaire des personnes est 30 mA, choisi car il se situe en dessous du seuil de fibrillation ventriculaire (50 mA)."
          }
        ]
      }
    ]
  },

  // --------------------------------------------------------------------------
  // MODULE N — NIBT (Norme SN 411000:2025) — Strictement N !
  // --------------------------------------------------------------------------
  {
    id: "N",
    code: "N",
    title: "NIBT",
    countLabel: "17 chapitres",
    description: "Norme sur les Installations à Basse Tension — SN 411000:2025. Cœur technique des règles d'installation, de conception et de sécurité en Suisse.",
    badgeTheme: "nibt",
    formations: [
      {
        id: "n0",
        routeId: "n0",
        code: "N0",
        title: "Partie 0",
        subtitle: "Introduction à la NIBT 2025, chaîne de normalisation, volumes et conventions de symboles",
        status: "Disponible",
        duration: "7 min",
        tag: "Fondements NIBT",
        xpReward: 35,
        objective: "Maîtriser l'organisation de la NIBT 2025 (SN 411000), comprendre la chaîne d'harmonisation internationale et interpréter sans erreur les symboles réglementaires.",
        introduction: "La NIBT (Norme sur les Installations à Basse Tension) est le recueil de règles techniques fondamental régissant la conception, la réalisation et le contrôle des installations électriques en Suisse.",
        contentSections: [
          {
            title: "1. La chaîne de normalisation internationale et suisse",
            text: `La NIBT s'inscrit dans un processus de normalisation en 3 niveaux :
• Niveau mondial : CEI (Commission Électrotechnique Internationale - IEC)
  Élabore les normes fondamentales mondiales d'installations (série IEC 60364).
  
• Niveau européen : CENELEC (Comité Européen de Normalisation Électrotechnique)
  Transpose les documents CEI en documents d'harmonisation européens (série HD 60364).
  
• Niveau national suisse : CES / Electrosuisse via la commission TK 64
  La Commission Technique TK 64 (Comité Électrotechnique Suisse) intègre les prescriptions européennes, les complète par les spécificités suisses et publie la NIBT sous l'appellation officielle SN 411000 (édition actuelle : 2025).`
          },
          {
            title: "2. Organisation de la NIBT 2025 en deux volumes",
            text: `La NIBT 2025 est structurée en deux volumes physiques et thématiques distincts :
• Volume 1 — Prescriptions fondamentales :
  Regroupe les parties 1 à 6 de la norme (Domaine d'application, définitions, caractéristiques générales, protection pour assurer la sécurité, choix et mise en œuvre des matériels, vérifications initiales et périodiques).
  
• Volume 2 — Installations et emplacements spéciaux :
  Dédié exclusivement à la Partie 7 (Locaux humides, salles de bain, piscines, chantiers, locaux médicaux, installations photovoltaïques, bornes de recharge pour véhicules électriques).`
          },
          {
            title: "3. Conventions et symboles officiels de la NIBT",
            text: `Dans les textes et tableaux de la NIBT, des symboles et chiffres clés sont normalisés :
• Chiffre « 5 » dans la numérotation :
  Signale une disposition ou modification nationale suisse spécifique introduite par le TK 64 qui s'écarte ou complète le texte européen CENELEC.
  
• Symbole « OK » :
  Solution admissible et conforme aux exigences normatives.
  
• Symbole « ⚠ » :
  Obligation impérative : doit être appliqué, est nécessaire.
  
• Symbole « 8 » :
  Impossible du point de vue de la construction ou des lois physiques.
  
• Symbole « 9 » :
  Inadmissible : formellement interdit, on ne doit pas.
  
• Symbole « ✅ » :
  Désigne la solution expressément recommandée par les experts.
  
• Document SNG 491000 : Guide pratique d'application édité pour expliciter les cas complexes de la NIBT.`
          }
        ],
        interactiveWidget: "nibt-widget",
        practicalExample: "Dans un tableau comparatif de la NIBT, si un mode de pose est repéré par le symbole « 9 », il est rigoureusement interdit et sera refusé lors du contrôle de réception. S'il porte le symbole « 5 », il traduit une exigence suisse propre qui n'existe pas en France ou en Allemagne.",
        importantPoint: "La commission technique suisse responsable de la mise à jour et de l'adaptation de la NIBT est la commission TK 64 d'Electrosuisse.",
        synthesis: "La NIBT SN 411000:2025 est une norme harmonisée au niveau mondial (CEI) et européen (CENELEC), dotée de spécificités suisses (identifiées par le chiffre 5) gérées par le TK 64.",
        quiz: [
          {
            id: "q_n0_1",
            type: "single",
            question: "Quel comité technique suisse est responsable de l'élaboration et de la mise à jour de la NIBT ?",
            options: [
              "Le comité TK 12",
              "La commission technique TK 64",
              "Le département fédéral de justice",
              "La commission fédérale de l'énergie"
            ],
            correctAnswer: 1,
            explanation: "C'est la commission technique TK 64 du Comité Électrotechnique Suisse (CES / Electrosuisse) qui rédige et adapte la NIBT."
          },
          {
            id: "q_n0_2",
            type: "single",
            question: "Dans la numérotation des articles de la NIBT, que signifie la présence du chiffre « 5 » ?",
            options: [
              "Il s'agit d'une règle réservée aux installations de plus de 500 Volts",
              "Il s'agit d'une prescription nationale suisse spécifique",
              "L'article a une validité maximale de 5 ans",
              "L'article ne s'applique qu'au volume 2"
            ],
            correctAnswer: 1,
            explanation: "Le chiffre 5 indique une disposition nationale suisse spécifique rédigée par le TK 64, distincte du texte européen CENELEC."
          },
          {
            id: "q_n0_3",
            type: "single",
            question: "Dans les tableaux de la NIBT, que signifie sans équivoque le chiffre « 9 » ?",
            options: [
              "Recommandé",
              "Obligatoire",
              "Inadmissible (formellement interdit)",
              "Sous réserve d'autorisation"
            ],
            correctAnswer: 2,
            explanation: "Le chiffre 9 signifie 'Inadmissible' : on ne doit en aucun cas mettre en œuvre cette disposition."
          },
          {
            id: "q_n0_4",
            type: "single",
            question: "En combien de volumes physiques l'édition officielle NIBT 2025 est-elle organisée ?",
            options: [
              "1 volume unique",
              "2 volumes (Volume 1 : Parties 1-6 ; Volume 2 : Partie 7)",
              "4 volumes trimestriels",
              "7 volumes individuels"
            ],
            correctAnswer: 1,
            explanation: "La NIBT 2025 se divise en 2 volumes : le volume 1 pour les règles fondamentales (1 à 6) et le volume 2 pour les emplacements spéciaux (Partie 7)."
          }
        ]
      },
      {
        id: "n1",
        routeId: "n1",
        code: "N1",
        title: "Partie 1 — Domaine d'application",
        subtitle: "Objet et principes fondamentaux de la NIBT",
        status: "En développement",
        duration: "À venir",
        tag: "NIBT V1",
        xpReward: 0,
        objective: "Délimiter les installations couvertes par la NIBT et les exclusions légales.",
        introduction: "Cette formation dédiée est actuellement en cours de préparation conformément à la norme SN 411000:2025.",
        contentSections: [{ title: "🔒 Contenu en préparation", text: "Ce chapitre NIBT sera prochainement documenté d'après les sources du TK 64." }]
      },
      {
        id: "n3",
        routeId: "n3",
        code: "N3",
        title: "Partie 3 — Détermination des caractéristiques générales",
        subtitle: "Alimentation, schémas des liaisons à la terre et influences externes",
        status: "En développement",
        duration: "À venir",
        tag: "NIBT V1",
        xpReward: 0,
        objective: "Identifier les régimes de neutre (TN, TT, IT) et classifier les influences externes.",
        introduction: "Cette formation dédiée est actuellement en cours de préparation conformément à la norme SN 411000:2025.",
        contentSections: [{ title: "🔒 Contenu en préparation", text: "Ce chapitre NIBT sera prochainement documenté d'après les sources du TK 64." }]
      },
      {
        id: "n41",
        routeId: "n41",
        code: "N41",
        title: "Chapitre 4.1 — Protection contre les chocs électriques",
        subtitle: "Protection principale et protection en cas de défaut",
        status: "En développement",
        duration: "À venir",
        tag: "Sécurité NIBT",
        xpReward: 0,
        objective: "Maîtriser les mesures de protection par coupure automatique de l'alimentation, TBTS, TBTP et isolation double.",
        introduction: "Cette formation dédiée est actuellement en cours de préparation conformément à la norme SN 411000:2025.",
        contentSections: [{ title: "🔒 Contenu en préparation", text: "Ce chapitre NIBT sera prochainement documenté d'après les sources du TK 64." }]
      },
      {
        id: "n42",
        routeId: "n42",
        code: "N42",
        title: "Chapitre 4.2 — Effets thermiques",
        subtitle: "Protection contre les incendies et les brûlures provoqués par l'installation",
        status: "En développement",
        duration: "À venir",
        tag: "Thermique",
        xpReward: 0,
        objective: "Prévenir les risques d'inflammation et de surchauffe des composants.",
        introduction: "Cette formation dédiée est actuellement en cours de préparation conformément à la norme SN 411000:2025.",
        contentSections: [{ title: "🔒 Contenu en préparation", text: "Ce chapitre NIBT sera prochainement documenté d'après les sources du TK 64." }]
      },
      {
        id: "n43",
        routeId: "n43",
        code: "N43",
        title: "Chapitre 4.3 — Surintensités",
        subtitle: "Protection des conducteurs contre les surcharges et courts-circuits",
        status: "En développement",
        duration: "À venir",
        tag: "Surintensités",
        xpReward: 0,
        objective: "Dimensionner les dispositifs de coupure selon la section et le courant admissible des conducteurs.",
        introduction: "Cette formation dédiée est actuellement en cours de préparation conformément à la norme SN 411000:2025.",
        contentSections: [{ title: "🔒 Contenu en préparation", text: "Ce chapitre NIBT sera prochainement documenté d'après les sources du TK 64." }]
      },
      {
        id: "n44",
        routeId: "n44",
        code: "N44",
        title: "Chapitre 4.4 — Perturbations de tension",
        subtitle: "Protection contre les surtensions transitoires et les effets électromagnétiques",
        status: "En développement",
        duration: "À venir",
        tag: "Surtensions",
        xpReward: 0,
        objective: "Mettre en œuvre les parafoudres (SPD) et le blindage CEM.",
        introduction: "Cette formation dédiée est actuellement en cours de préparation conformément à la norme SN 411000:2025.",
        contentSections: [{ title: "🔒 Contenu en préparation", text: "Ce chapitre NIBT sera prochainement documenté d'après les sources du TK 64." }]
      },
      {
        id: "n46",
        routeId: "n46",
        code: "N46",
        title: "Chapitre 4.6 — Sectionnement et commande",
        subtitle: "Organes de coupure d'urgence, de maintenance et d'exploitation",
        status: "En développement",
        duration: "À venir",
        tag: "Coupure",
        xpReward: 0,
        objective: "Positionner les dispositifs d'arrêt d'urgence et de sectionnement omnipolaire.",
        introduction: "Cette formation dédiée est actuellement en cours de préparation conformément à la norme SN 411000:2025.",
        contentSections: [{ title: "🔒 Contenu en préparation", text: "Ce chapitre NIBT sera prochainement documenté d'après les sources du TK 64." }]
      },
      {
        id: "n51",
        routeId: "n51",
        code: "N51",
        title: "Chapitre 5.1 — Règles communes des matériels",
        subtitle: "Choix, installation, repérage et compatibilité des composants",
        status: "En développement",
        duration: "À venir",
        tag: "Matériels",
        xpReward: 0,
        objective: "Respecter les règles de marquage CE/CH et de mise en œuvre.",
        introduction: "Cette formation dédiée est actuellement en cours de préparation conformément à la norme SN 411000:2025.",
        contentSections: [{ title: "🔒 Contenu en préparation", text: "Ce chapitre NIBT sera prochainement documenté d'après les sources du TK 64." }]
      },
      {
        id: "n52",
        routeId: "n52",
        code: "N52",
        title: "Chapitre 5.2 — Canalisations électriques",
        subtitle: "Types de conducteurs, modes de pose et facteurs de correction de courant",
        status: "En développement",
        duration: "À venir",
        tag: "Canalisations",
        xpReward: 0,
        objective: "Calculer les sections de câbles en fonction de la température et du groupement.",
        introduction: "Cette formation dédiée est actuellement en cours de préparation conformément à la norme SN 411000:2025.",
        contentSections: [{ title: "🔒 Contenu en préparation", text: "Ce chapitre NIBT sera prochainement documenté d'après les sources du TK 64." }]
      },
      {
        id: "n53",
        routeId: "n53",
        code: "N53",
        title: "Chapitre 5.3 — Appareillage",
        subtitle: "Appareils de coupure, de sectionnement et de protection",
        status: "En développement",
        duration: "À venir",
        tag: "Appareillage",
        xpReward: 0,
        objective: "Sélectionner les courbes de déclenchement des disjoncteurs et les types de DDR (A, F, B).",
        introduction: "Cette formation dédiée est actuellement en cours de préparation conformément à la norme SN 411000:2025.",
        contentSections: [{ title: "🔒 Contenu en préparation", text: "Ce chapitre NIBT sera prochainement documenté d'après les sources du TK 64." }]
      },
      {
        id: "n54",
        routeId: "n54",
        code: "N54",
        title: "Chapitre 5.4 — Mises à la terre et liaisons équipotentielles",
        subtitle: "Prises de terre, conducteurs de terre et liaisons équipotentielles principales",
        status: "En développement",
        duration: "À venir",
        tag: "Terre",
        xpReward: 0,
        objective: "Concevoir le réseau de terre de fondation et les liaisons équipotentielles de protection.",
        introduction: "Cette formation dédiée est actuellement en cours de préparation conformément à la norme SN 411000:2025.",
        contentSections: [{ title: "🔒 Contenu en préparation", text: "Ce chapitre NIBT sera prochainement documenté d'après les sources du TK 64." }]
      },
      {
        id: "n56",
        routeId: "n56",
        code: "N56",
        title: "Chapitre 5.6 — Alimentation pour services de sécurité",
        subtitle: "Éclairage de secours, pompes incendie et sources autonomes de remplacement",
        status: "En développement",
        duration: "À venir",
        tag: "Services sécurité",
        xpReward: 0,
        objective: "Garantir le maintien de fonction en cas de sinistre.",
        introduction: "Cette formation dédiée est actuellement en cours de préparation conformément à la norme SN 411000:2025.",
        contentSections: [{ title: "🔒 Contenu en préparation", text: "Ce chapitre NIBT sera prochainement documenté d'après les sources du TK 64." }]
      },
      {
        id: "n6",
        routeId: "n6",
        code: "N6",
        title: "Chapitre 6 — Vérifications",
        subtitle: "Contrôles visuels, mesures instrumentales et protocoles de réception",
        status: "En développement",
        duration: "À venir",
        tag: "Contrôles",
        xpReward: 0,
        objective: "Exécuter les mesures de continuité des PE, résistance d'isolement, impédance de boucle et temps de déclenchement DDR.",
        introduction: "Cette formation dédiée est actuellement en cours de préparation conformément à la norme SN 411000:2025.",
        contentSections: [{ title: "🔒 Contenu en préparation", text: "Ce chapitre NIBT sera prochainement documenté d'après les sources du TK 64." }]
      },
      {
        id: "n71",
        routeId: "n71",
        code: "N71",
        title: "Chapitre 7.01 — Locaux contenant une baignoire ou une douche",
        subtitle: "Volumes de sécurité 0, 1, 2 et indices de protection IP",
        status: "En développement",
        duration: "À venir",
        tag: "Emplacements spéciaux",
        xpReward: 0,
        objective: "Maîtriser les volumes de protection et les interdictions d'appareillage dans les salles de bain.",
        introduction: "Cette formation dédiée est actuellement en cours de préparation conformément à la norme SN 411000:2025.",
        contentSections: [{ title: "🔒 Contenu en préparation", text: "Ce chapitre NIBT sera prochainement documenté d'après les sources du TK 64." }]
      },
      {
        id: "n72",
        routeId: "n72",
        code: "N72",
        title: "Chapitre 7.02 — Bassins de natation et fontaines",
        subtitle: "Exigences accrues pour piscines et plans d'eau",
        status: "En développement",
        duration: "À venir",
        tag: "Emplacements spéciaux",
        xpReward: 0,
        objective: "Sécuriser les éclairages subaquatiques et les équipements techniques de pompage.",
        introduction: "Cette formation dédiée est actuellement en cours de préparation conformément à la norme SN 411000:2025.",
        contentSections: [{ title: "🔒 Contenu en préparation", text: "Ce chapitre NIBT sera prochainement documenté d'après les sources du TK 64." }]
      },
      {
        id: "n74",
        routeId: "n74",
        code: "N74",
        title: "Chapitre 7.04 — Chantiers de construction",
        subtitle: "Armoires de chantier, liaisons équipotentielles temporaires et DDR 30 mA",
        status: "En développement",
        duration: "À venir",
        tag: "Chantiers",
        xpReward: 0,
        objective: "Équiper et vérifier les coffrets de distribution provisoires sur chantier.",
        introduction: "Cette formation dédiée est actuellement en cours de préparation conformément à la norme SN 411000:2025.",
        contentSections: [{ title: "🔒 Contenu en préparation", text: "Ce chapitre NIBT sera prochainement documenté d'après les sources du TK 64." }]
      }
    ]
  },

  // --------------------------------------------------------------------------
  // MODULE E — ESTI directives
  // --------------------------------------------------------------------------
  {
    id: "E",
    code: "E",
    title: "ESTI directives",
    countLabel: "2 directives",
    description: "Directives de l'Inspection fédérale des installations à courant fort (ESTI) précisant les obligations de sécurité, d'autorisation et de contrôle technique.",
    badgeTheme: "esti",
    formations: [
      {
        id: "esti-221",
        routeId: "esti-221",
        code: "ESTI 221",
        title: "Directive ESTI 221",
        subtitle: "Exigences relatives aux autorisations d'installer et de contrôler selon l'OIBT",
        status: "En développement",
        duration: "À venir",
        tag: "Directive ESTI",
        xpReward: 0,
        objective: "Connaître les critères de délivrance des autorisations générales et limitées d'installer.",
        introduction: "Cette formation dédiée est actuellement en cours de préparation conformément aux directives officielles de l'ESTI.",
        contentSections: [{ title: "🔒 Contenu en préparation", text: "La fiche relative à la directive ESTI 221 sera complétée à partir des sources officielles de l'inspection fédérale." }]
      },
      {
        id: "esti-407",
        routeId: "esti-407",
        code: "ESTI 407",
        title: "Directive ESTI 407",
        subtitle: "Activités sur ou à proximité des installations électriques",
        status: "En développement",
        duration: "À venir",
        tag: "Sécurité chantier",
        xpReward: 0,
        objective: "Appliquer les mesures organisationnelles lors des travaux sous tension et au voisinage de conducteurs actifs.",
        introduction: "Cette formation dédiée est actuellement en cours de préparation conformément aux directives officielles de l'ESTI.",
        contentSections: [{ title: "🔒 Contenu en préparation", text: "La fiche relative à la directive ESTI 407 sera complétée à partir des sources officielles de l'inspection fédérale." }]
      }
    ]
  },

  // --------------------------------------------------------------------------
  // MODULE S — Suisse Norme (Strictement nommé ainsi)
  // --------------------------------------------------------------------------
  {
    id: "S",
    code: "S",
    title: "Suisse Norme",
    countLabel: "3 normes",
    description: "Normes électrotechniques suisses spécifiques homologuées par Electrosuisse et l'Association suisse de normalisation (SNV).",
    badgeTheme: "normes",
    formations: [
      {
        id: "sn-414022",
        routeId: "sn-414022",
        code: "SN414022",
        title: "SN 414022",
        subtitle: "Protection contre la foudre et installations de paratonnerres",
        status: "En développement",
        duration: "À venir",
        tag: "Norme suisse",
        xpReward: 0,
        objective: "Comprendre les principes de capture, d'écoulement et de terre pour les installations de paratonnerres.",
        introduction: "Cette formation dédiée est actuellement en cours de préparation d'après la norme SN 414022.",
        contentSections: [{ title: "🔒 Contenu en préparation", text: "Cette norme fait l'objet d'une formalisation technique selon les directives suisses." }]
      },
      {
        id: "sn-414113",
        routeId: "sn-414113",
        code: "SN414113",
        title: "SN 414113",
        subtitle: "Terres de fondation",
        status: "En développement",
        duration: "À venir",
        tag: "Norme suisse",
        xpReward: 0,
        objective: "Maîtriser la terre de fondation et sa mise en oeuvre.",
        introduction: "Cette formation dédiée est actuellement en cours de préparation d'après la norme SN 414113.",
        contentSections: [{ title: "🔒 Contenu en préparation", text: "Cette norme fait l'objet d'une formalisation technique selon les directives suisses." }]
      },
      {
        id: "sn-411439",
        routeId: "sn-411439",
        code: "SN411439",
        title: "SN 411439",
        subtitle: "Raccordement des systèmes photovoltaïques et onduleurs au réseau basse tension",
        status: "En développement",
        duration: "À venir",
        tag: "Norme suisse",
        xpReward: 0,
        objective: "Assurer la sécurité de l'interface AC/DC et la protection contre le découplage réseau.",
        introduction: "Cette formation dédiée est actuellement en cours de préparation d'après la norme SN 411439.",
        contentSections: [{ title: "🔒 Contenu en préparation", text: "Cette norme fait l'objet d'une formalisation technique selon les directives suisses." }]
      }
    ]
  }
];

// Trouver une formation par identifiant ou module/route
export function findFormation(moduleId, formationId) {
  const mod = ACADEMY_MODULES.find(m => m.id === moduleId);
  if (!mod) return null;

  // Aliases pour rétrocompatibilité et accès fluide
  const aliases = {
    'rs-734-0': 'rs-734-0-lecon-1',
    'RS-734-0': 'rs-734-0-lecon-1',
    'rs-734-0-lie': 'rs-734-0-lecon-1',
    'rs-734-0-lie-plans': 'rs-734-0-lecon-5',
    'rs-734-0-lie-controle': 'rs-734-0-lecon-7',
    'rs-734-0-lie-responsabilite': 'rs-734-0-lecon-8',
    'rs-734-0-lie-penal': 'rs-734-0-lecon-10',
    'lecon-1': 'rs-734-0-lecon-1',
    'lecon-2': 'rs-734-0-lecon-2',
    'lecon-3': 'rs-734-0-lecon-3',
    'lecon-4': 'rs-734-0-lecon-4',
    'lecon-5': 'rs-734-0-lecon-5',
    'lecon-6': 'rs-734-0-lecon-6',
    'lecon-7': 'rs-734-0-lecon-7',
    'lecon-8': 'rs-734-0-lecon-8',
    'lecon-9': 'rs-734-0-lecon-9',
    'lecon-10': 'rs-734-0-lecon-10',
    'lecon-11': 'rs-734-0-lecon-11',
    'rs-734-0-chapitre-1': 'rs-734-0-lecon-1',
    'rs-734-0-chapitre-2': 'rs-734-0-lecon-2',
    'rs-734-0-chapitre-3': 'rs-734-0-lecon-3',
    'rs-734-0-chapitre-4': 'rs-734-0-lecon-4',
    'rs-734-0-chapitre-5': 'rs-734-0-lecon-5',
    'rs-734-0-chapitre-6': 'rs-734-0-lecon-6',
    'rs-734-0-chapitre-7': 'rs-734-0-lecon-7',
    'rs-734-0-chapitre-8': 'rs-734-0-lecon-8',
    'rs-734-0-chapitre-9': 'rs-734-0-lecon-9',
    'rs-734-0-chapitre-10': 'rs-734-0-lecon-10',
    'rs-734-0-chapitre-11': 'rs-734-0-lecon-11',
    'rs-734-0-evaluation-finale': 'rs-734-0-evaluation-finale',
    'rs-734-2': 'rs-734-2-chapitre-1',
    'RS-734-2': 'rs-734-2-chapitre-1',
    'rs-734-2-ocfo': 'rs-734-2-chapitre-1',
    'rs-734-2-ocfo-art20-40': 'rs-734-2-chapitre-3',
    'rs-734-2-ocfo-art41-52': 'rs-734-2-chapitre-3',
    'rs-734-2-ocfo-art53-65': 'rs-734-2-chapitre-4',
    'rs-734-2-ocfo-art66-86': 'rs-734-2-chapitre-5',
    'chapitre-1': 'rs-734-2-chapitre-1',
    'chapitre-2': 'rs-734-2-chapitre-2',
    'chapitre-3': 'rs-734-2-chapitre-3',
    'chapitre-4': 'rs-734-2-chapitre-4',
    'chapitre-5': 'rs-734-2-chapitre-5',
    'chapitre-6': 'rs-734-2-chapitre-6',
    'chapitre-7': 'rs-734-2-chapitre-7',
    'rs-734-2-annexes': 'rs-734-2-annexes',
    'annexes': 'rs-734-2-annexes',
    'lecon-8': 'rs-734-2-annexes',
    'chapitre-8': 'rs-734-2-annexes',
    'evaluation-finale': 'rs-734-2-evaluation-finale'
  };

  const targetId = aliases[formationId] || formationId;
  const formation = mod.formations.find(f => f.id === targetId || f.routeId === targetId || f.id === formationId || f.routeId === formationId);
  if (!formation) return null;
  return { module: mod, formation };
}
