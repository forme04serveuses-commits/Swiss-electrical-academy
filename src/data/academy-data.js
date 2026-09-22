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
  "subtitle": "11 leçons officielles · État au 1er avril 2026 · Structure officielle en 11 parties",
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
// Informations officielles et structure en 7 leçons de la RS 734.27 (OIBT)
// Source de vérité : 734.27_OIBT.pdf (7 novembre 2001, état au 31 octobre 2025)
export const RS_734_27_INFO = {
  "id": "rs-734-27",
  "code": "RS 734.27",
  "shortTitle": "OIBT",
  "title": "RS 734.27 — OIBT",
  "fullTitle": "Ordonnance sur les installations électriques à basse tension (OIBT)",
  "subtitle": "7 leçons officielles · État au 31 octobre 2025 · Structure officielle complète et Annexe",
  "description": "Ordonnance du Conseil fédéral du 7 novembre 2001 sur les installations électriques à basse tension (État le 31 octobre 2025). Cadre réglementaire suisse régissant les autorisations d'installer, l'exécution des travaux, les devoirs des propriétaires, les organes de contrôle indépendants, le rapport de sécurité (RS) et les périodicités officielles de contrôle.",
  "tag": "Ordonnance fédérale",
  "totalLessons": 7,
  "lessons": [
    {
      "id": "rs-734-27-lecon-1",
      "slug": "lecon-1",
      "number": "1",
      "title": "Chapitre 1 : Dispositions générales",
      "articles": "Art. 1 à 5",
      "duration": "8 min",
      "summary": "Champ d'assujettissement des installations à basse tension, définitions fondamentales, exigences de sécurité et de compatibilité, et obligations légales pesant sur le propriétaire."
    },
    {
      "id": "rs-734-27-lecon-2",
      "slug": "lecon-2",
      "number": "2",
      "title": "Chapitre 2 : Autorisations pour travaux d’installation",
      "articles": "Art. 6 à 21",
      "duration": "12 min",
      "summary": "Les 5 sections du Chapitre 2 : régime d'autorisation obligatoire (Art. 6), conditions pour personnes physiques et entreprises (Art. 7 à 11, 10a, 10b), autorisations limitées (Art. 12 à 15), travaux autorisés aux particuliers sans autorisation (Art. 16) et registre public ESTI (Art. 17 à 21)."
    },
    {
      "id": "rs-734-27-lecon-3",
      "slug": "lecon-3",
      "number": "3",
      "title": "Chapitre 3 : Exécution des travaux d’installation",
      "articles": "Art. 22 à 25",
      "duration": "9 min",
      "summary": "Règles d'exécution sur le chantier : interdiction des travaux sous tension sauf exceptions (Art. 22), avis d'installation préalable aux gestionnaires de réseau (Art. 23), et obligations incontournables de la première vérification et du contrôle final propre à l'entreprise (Art. 24)."
    },
    {
      "id": "rs-734-27-lecon-4",
      "slug": "lecon-4",
      "number": "4",
      "title": "Chapitre 4 : Contrôle des installations",
      "articles": "Art. 26 à 40",
      "duration": "14 min",
      "summary": "Les 4 sections du Chapitre 4 : les différents organes de contrôle et la stricte règle d'indépendance (Sec. 1, Art. 26 à 31), les missions respectives de l'ESTI, des gestionnaires de réseau et des organismes accrédités (Sec. 2, Art. 32 à 34), l'établissement, le contenu et la sommation du rapport de sécurité RS (Sec. 3, Art. 35 à 38), et les contrôles sporadiques et mesures de coupure en cas de défaut dangereux (Sec. 4, Art. 39 et 40)."
    },
    {
      "id": "rs-734-27-lecon-5",
      "slug": "lecon-5",
      "number": "5",
      "title": "Chapitre 5 : Émoluments et dispositions pénales",
      "articles": "Art. 41 et 42",
      "duration": "7 min",
      "summary": "Émoluments officiels perçus par l'ESTI (Art. 41) et catalogue exhaustif des infractions pénales réprimées selon l'Art. 55 al. 3 LIE (Art. 42 : travaux sans autorisation, contrôles illégaux, violation de l'organisation d'entreprise, sous-traitance illicite, prête-nom, défaut de RS et remise d'installations dangereuses)."
    },
    {
      "id": "rs-734-27-lecon-6",
      "slug": "lecon-6",
      "number": "6",
      "title": "Chapitre 6 : Dispositions finales",
      "articles": "Art. 43 à 45",
      "duration": "8 min",
      "summary": "Abrogation formelle de l'ancienne ordonnance de 1989 (Art. 43), dispositions transitoires initiales avec maintien des al. 1 et 2 abrogés (`1 et 2 …`) et gestion des anciens droits (Art. 44), dispositions transitoires issues de la révision majeure du 23 août 2017 (Art. 44a : règlements EIT.swiss, adaptation des entreprises en 3 ans, électriciens de montage CFC), et date d'entrée en vigueur au 1er janvier 2002 (Art. 45)."
    },
    {
      "id": "rs-734-27-lecon-7",
      "slug": "lecon-7",
      "number": "7",
      "title": "Annexe : Contrôles périodiques",
      "articles": "Annexe (ch. 1 à 4)",
      "duration": "15 min",
      "summary": "L'Annexe officielle intégrale de l'OIBT dans ses 4 chapitres réels : installations spéciales soumises à organisme d'inspection accrédité (ch. 1), installations soumises à organe indépendant (ch. 2, de 1 an à 20 ans pour toutes les autres, avec préservation de 2.4.11 …), contrôles à chaque changement de propriétaire (ch. 3), et installations de production d'énergie (ch. 4)."
    }
  ],
  "finalEvaluation": {
    "id": "rs-734-27-evaluation-finale",
    "slug": "evaluation-finale",
    "title": "Évaluation finale — RS 734.27 (OIBT)",
    "articles": "Art. 1 à 45 et Annexe",
    "duration": "25 min",
    "summary": "Examen représentatif de 16 questions d'examen couvrant les 7 leçons du module OIBT : champ d'application, autorisations d'installer, organisation d'entreprise, règles de chantier, organes de contrôle, RS, émoluments, droit pénal, dispositions transitoires et périodicités de l'Annexe. Seuil de réussite à 75% requis pour obtenir le badge Expert OIBT et 100 XP."
  }
};

// Informations officielles et structure en 7 leçons de la RS 814.710 (ORNI)
// Source de vérité : 814.710_ORNI.pdf (23 décembre 1999, état au 1er novembre 2023, RO 2000 213)
export const RS_814_710_INFO = {
  "id": "rs-814-710",
  "code": "RS 814.710",
  "shortTitle": "ORNI",
  "fullTitle": "Ordonnance sur la protection contre le rayonnement non ionisant (ORNI)",
  "subtitle": "7 leçons officielles · État au 1er novembre 2023 · Structure officielle complète et Annexes",
  "description": "Ordonnance du Conseil fédéral du 23 décembre 1999 sur la protection contre le rayonnement non ionisant (État le 1er novembre 2023, RO 2000 213). Cadre légal suisse régissant les émissions stationnaires de 0 Hz à 300 GHz, la valeur limite de 1 µT pour les réseaux électriques et transformateurs dans les lieux à utilisation sensible (LAUS), la référence NIBT, les stations de téléphonie mobile et les règles de sommation des immissions.",
  "tag": "Ordonnance fédérale",
  "totalLessons": 7,
  "lessons": [
    {
      "id": "rs-814-710-lecon-1",
      "slug": "lecon-1",
      "number": 1,
      "title": "Chapitre 1 : Dispositions générales & Définitions",
      "articles": "Art. 1 à 3",
      "duration": "10 min",
      "summary": "L'ORNI protège l'homme contre le rayonnement non ionisant (0 Hz à 300 GHz) émis par les installations stationnaires. Les appareils domestiques usuels et les dispositifs médicaux sont exclus. Les lieux à utilisation sensible (LAUS) bénéficient d'une protection préventive renforcée par les valeurs limites de l'installation (VLI)."
    },
    {
      "id": "rs-814-710-lecon-2",
      "slug": "lecon-2",
      "number": 2,
      "title": "Chapitre 2 : Émissions & Assainissement",
      "articles": "Art. 4 à 9",
      "duration": "9 min",
      "summary": "Les installations doivent respecter les limitations préventives de l'Annexe 1. Si les limites d'immissions de l'Annexe 2 risquent d'être dépassées, des mesures complémentaires sont imposées. Les anciennes installations non conformes doivent être assainies dans un délai fixé par l'Annexe 1 ou de 5 ans au plus."
    },
    {
      "id": "rs-814-710-lecon-3",
      "slug": "lecon-3",
      "number": 3,
      "title": "Chapitre 2 (Section 4) : Fiche de données & Contrôles",
      "articles": "Art. 10 à 12",
      "duration": "9 min",
      "summary": "Le détenteur doit remettre une fiche spécifique au site avant toute construction ou modification (hors électricité domestique). Pour les antennes mobiles, les données d'exploitation sont transmises à l'OFCOM tous les 14 jours. L'autorité effectue des mesures et vérifie dans les 6 mois la conformité des installations dérogatoires."
    },
    {
      "id": "rs-814-710-lecon-4",
      "slug": "lecon-4",
      "number": 4,
      "title": "Chapitres 3 à 5 : Immissions, Zones à bâtir & Exécution",
      "articles": "Art. 13 à 21",
      "duration": "9 min",
      "summary": "Les valeurs limites d'immissions (Annexe 2) s'appliquent partout où des personnes peuvent séjourner. De nouvelles zones à bâtir ne peuvent être créées que si les valeurs limites de l'installation sont respectées. Les cantons sont chargés de l'exécution, sous réserve des compétences fédérales."
    },
    {
      "id": "rs-814-710-lecon-5",
      "slug": "lecon-5",
      "number": 5,
      "title": "Annexe 1 (Partie 1) : Réseau électrique, Transformateurs & NIBT",
      "articles": "Annexe 1, ch. 1 à 5",
      "duration": "10 min",
      "summary": "La VLI pour les lignes > 1000 V, transformateurs, sous-stations et chemins de fer est de 1 µT dans les LAUS. Le courant déterminant est calculé à 40 °C avec vent de 0.5 m/s ou selon l'IEC 60287. Pour les installations domestiques, la conformité à la NIBT (SN 411000) vaut respect de l'état de la technique."
    },
    {
      "id": "rs-814-710-lecon-6",
      "slug": "lecon-6",
      "number": 6,
      "title": "Annexe 1 (Partie 2) : Téléphonie mobile, Radiodiffusion & Radars",
      "articles": "Annexe 1, ch. 6 à 8",
      "duration": "9 min",
      "summary": "Pour la téléphonie mobile, les VLI dans les LAUS sont de 4,0 V/m (≤ 900 MHz), 6,0 V/m (≥ 1800 MHz) et 5,0 V/m (autres fréquences). Le périmètre de coordination se calcule par r = F · √(ERP90). Les antennes adaptatives bénéficient de facteurs de correction KAA selon leurs sous-réseaux."
    },
    {
      "id": "rs-814-710-lecon-7",
      "slug": "lecon-7",
      "number": 7,
      "title": "Annexe 2 : Valeurs limites d’immissions & Sommation",
      "articles": "Annexe 2",
      "duration": "10 min",
      "summary": "À 50 Hz, la valeur limite d'immission générale est de 100 µT (contre 1 µT pour la VLI dans les LAUS). L'Annexe 2 plafonne le courant de fuite à 45 mA et le courant de contact de 0.5 à 20 mA. Lorsque plusieurs fréquences coexistent, la somme normalisée des immissions ne doit jamais excéder 1."
    }
  ],
  "finalEvaluation": {
    "id": "rs-814-710-evaluation-finale",
    "slug": "evaluation-finale",
    "title": "Évaluation finale : Examen certifiant ORNI (RS 814.710)",
    "articles": "Art. 1 à 21 & Annexes 1-2",
    "duration": "20 min",
    "summary": "L'ORNI est le pilier suisse de la protection de la population contre les champs électromagnétiques stationnaires. Maîtriser ses 21 articles et ses deux annexes est indispensable pour concevoir, installer et contrôler des ouvrages électriques conformes."
  }
};

export const ACADEMY_MODULES = [
  // --------------------------------------------------------------------------
  // MODULE A — Dispositions légales
  // --------------------------------------------------------------------------
  {
    id: "A",
    code: "A",
    title: "Dispositions légales",
    countLabel: "38 formations",
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
      // ======================================================================
      // RS 734.27 — OIBT : Ordonnance sur les installations à basse tension
      // Parcours officiel structuré en 7 leçons (7 chapitres/annexe) + évaluation finale
      // Source de vérité : 734.27_OIBT.pdf (7 novembre 2001, état au 31 octobre 2025)
      // ======================================================================
      {
              "id": "rs-734-27-lecon-1",
              "routeId": "rs-734-27/lecon-1",
              "moduleId": "A",
              "parcoursId": "rs-734-27",
              "lessonNumber": 1,
              "totalLessons": 7,
              "code": "RS 734.27 — Leçon 1",
              "title": "Chapitre 1 : Dispositions générales",
              "subtitle": "Objet, champ d’application, définitions, sécurité, perturbations et devoirs du propriétaire (Art. 1 à 5)",
              "articlesRange": "Art. 1 à 5",
              "status": "Disponible",
              "duration": "8 min",
              "tag": "Ordonnance fédérale",
              "xpReward": 35,
              "objective": "Maîtriser le champ d'application de l'OIBT, distinguer les installations intérieures et propres à l'entreprise, et assimiler les devoirs légaux du propriétaire (sécurité permanente, dossier technique et conservation du rapport de sécurité RS).",
              "introduction": "Édictée par le Conseil fédéral le <strong>7 novembre 2001 (état au 31 octobre 2025)</strong>, l'<strong>Ordonnance sur les installations électriques à basse tension (OIBT — RS 734.27)</strong> régit les conditions applicables aux interventions sur les installations électriques à basse tension ainsi qu'au contrôle de ces ouvrages. Son <strong>Chapitre 1 (Dispositions générales — Art. 1 à 5)</strong> pose les définitions clés du droit basse tension suisse, consacre la primauté des règles techniques reconnues et définit la responsabilité directe du propriétaire foncier quant au maintien de la sécurité de ses installations.",
              "contentSections": [
                      {
                              "title": "1. Art. 1 — Objet et champ d’application",
                              "text": "<div class=\"legal-ref-badge\">🔎 RS 734.27 — Art. 1 • Champ d'application</div>\n<p style=\"margin-bottom:0.75rem; line-height:1.6; color:var(--text-secondary);\">\nL'<strong>Art. 1 al. 1 OIBT</strong> dispose que l'ordonnance règle les conditions applicables aux <strong>interventions sur les installations électriques à basse tension</strong> ainsi qu'au <strong>contrôle de ces installations</strong>.\n</p>\n<div class=\"ocfo-highlight-card\" style=\"margin-bottom:0.85rem;\">\n  <div class=\"card-title\">⚡ Installations assujetties à l'OIBT (Art. 1 al. 2)</div>\n  <ul style=\"margin:0 0 0 1.25rem; line-height:1.6; color:var(--text-secondary); font-size:0.88rem;\">\n    <li>Les installations alimentées avec une <strong>tension nominale ne dépassant pas 1000 V en courant alternatif (AC) ou 1500 V en courant continu (DC)</strong>.</li>\n    <li>Les installations alimentées à partir d'installations à fort courant à basse tension ou d'installations à haute tension au moyen d'un transformateur.</li>\n    <li>Les installations à courant faible soumises à la LIE par l'Art. 4 al. 1 LIE (risques de perturbation ou emprise publique).</li>\n  </ul>\n</div>\n<p style=\"margin-bottom:0.75rem; line-height:1.6; color:var(--text-secondary);\">\n<strong>Exclusions du champ d'application (Art. 1 al. 3) :</strong> L'OIBT ne s'applique pas aux installations soumises à la législation sur les chemins de fer, aux installations de télécommunication et aux installations militaires soumises à des prescriptions fédérales de sécurité spécifiques.\n</p>"
                      },
                      {
                              "title": "2. Art. 2 — Définitions réglementaires suisses",
                              "text": "<div class=\"legal-ref-badge\">🔎 RS 734.27 — Art. 2 • Définitions officielles</div>\n<div class=\"ocfo-density-table-wrap\" style=\"margin-bottom:0.85rem;\">\n  <table class=\"ocfo-density-table\">\n    <thead>\n      <tr>\n        <th style=\"width:30%;\">Terme réglementaire</th>\n        <th style=\"width:45%;\">Définition légale (Art. 2 OIBT)</th>\n        <th style=\"width:25%;\">Portée pratique</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong>Installations électriques</strong><br><span style=\"font-size:0.75rem; color:var(--text-muted);\">(Art. 2 al. 1)</span></td>\n        <td>Installations intérieures et installations qui ne sont ni des installations de production d'énergie, ni des installations de transport ou de distribution au sens de la LIE.</td>\n        <td>Ensemble du parc basse tension terminal suisse.</td>\n      </tr>\n      <tr>\n        <td><strong>Installations intérieures</strong><br><span style=\"font-size:0.75rem; color:var(--text-muted);\">(Art. 2 al. 2)</span></td>\n        <td>Installations situées en aval du point de raccordement au réseau de distribution (coupe-surintensité général de l'immeuble ou boîte de dérivation).</td>\n        <td>Bâtiments d'habitation, commerces, industries et artisanat.</td>\n      </tr>\n      <tr>\n        <td><strong>Installations propres à l'entreprise</strong><br><span style=\"font-size:0.75rem; color:var(--text-muted);\">(Art. 2 al. 3)</span></td>\n        <td>Installations électriques situées dans des immeubles d'une entreprise ou sur son terrain, alimentées par ses propres transformateurs ou raccordées au réseau public.</td>\n        <td>Régime spécial d'autorisation pour travaux internes (Art. 13).</td>\n      </tr>\n      <tr>\n        <td><strong>Installations de production d’énergie</strong><br><span style=\"font-size:0.75rem; color:var(--text-muted);\">(Art. 2 al. 4)</span></td>\n        <td>Installations de production d'électricité autonomes ou couplées au réseau (installations photovoltaïques, groupes électrogènes, éoliennes, micro-cogénération).</td>\n        <td>Raccordement et contrôle selon la même périodicité que le bâtiment (Annexe ch. 4).</td>\n      </tr>\n    </tbody>\n  </table>\n</div>"
                      },
                      {
                              "title": "3. Art. 3 & 4 — Exigences fondamentales de sécurité et lutte contre les perturbations",
                              "text": "<div class=\"legal-ref-badge\">🔎 RS 734.27 — Art. 3 & 4 • Règles de la technique</div>\n<p style=\"margin-bottom:0.75rem; line-height:1.6; color:var(--text-secondary);\">\n<strong>Sécurité absolue (Art. 3 al. 1) :</strong> Les installations électriques doivent être établies, modifiées, entretenues et contrôlées selon les <strong>règles techniques reconnues</strong> de telle sorte qu'elles ne mettent en danger ni les personnes, ni les animaux, ni les choses.\n</p>\n<div class=\"ocfo-highlight-card\" style=\"margin-bottom:0.85rem;\">\n  <div class=\"card-title\">📜 Présomption de conformité (Art. 3 al. 2)</div>\n  <p style=\"margin:0; line-height:1.6; color:var(--text-secondary); font-size:0.88rem;\">\n  Sont considérées comme règles techniques reconnues les <strong>normes harmonisées</strong> publiées par le Conseil fédéral ou l'Office fédéral de l'énergie (OFEN), ainsi que les normes internationales et européennes (CEI / CENELEC) et la <strong>Norme sur les installations à basse tension (NIBT)</strong> publiée par Electrosuisse.\n  </p>\n</div>\n<p style=\"margin-bottom:0.75rem; line-height:1.6; color:var(--text-secondary);\">\n<strong>Lutte contre les perturbations (Art. 4) :</strong> Les installations ne doivent pas causer de perturbations intolérables à d'autres installations électriques ou appareils électromagnétiques, et doivent présenter un niveau d'immunité adéquat aux perturbations prévisibles.\n</p>"
                      },
                      {
                              "title": "4. Art. 5 — Devoirs impératifs du propriétaire d’une installation",
                              "text": "<div class=\"legal-ref-badge\">🔎 RS 734.27 — Art. 5 • Responsabilité du propriétaire</div>\n<p style=\"margin-bottom:0.75rem; line-height:1.6; color:var(--text-secondary);\">\nL'<strong>Art. 5 OIBT</strong> établit le principe cardinal de la responsabilité de droit public en matière de sécurité électrique :\n</p>\n<ul style=\"margin:0 0 0.85rem 1.25rem; line-height:1.6; color:var(--text-secondary);\">\n  <li><strong>Maintien de la sécurité (al. 1) :</strong> Le propriétaire ou un représentant désigné par lui veille à ce que l'installation électrique réponde en tout temps aux exigences de sécurité des Art. 3 et 4.</li>\n  <li><strong>Dossier technique (al. 1) :</strong> Il conserve le dossier technique de l'installation (plans, schémas, descriptions) pendant toute la durée d'exploitation de celle-ci.</li>\n  <li><strong>Rapport de sécurité RS (al. 2) :</strong> Le propriétaire conserve le rapport de sécurité (RS) ainsi que les procès-verbaux de contrôle pendant toute la durée de la période de contrôle fixée dans l'Annexe.</li>\n  <li><strong>Élimination des défauts (al. 3) :</strong> Dès qu'un défaut est constaté, le propriétaire le fait éliminer <em>sans délai</em> par une personne titulaire d'une autorisation d'installer.</li>\n</ul>\n<div class=\"ocfo-summary-box\">\n  <div class=\"box-title\">📌 À RETENIR</div>\n  La charge légale de prouver la sécurité de l'installation pèse entièrement sur le propriétaire foncier. C'est à lui de mandater à ses frais un organe de contrôle indépendant périodique et de conserver le précieux Rapport de sécurité (RS).\n</div>"
                      }
              ],
              "practicalExample": {
                      "title": "Cas concret : Vente immobilière et transmission du dossier électrique",
                      "text": "Lors de la vente d'un immeuble d'habitation, le propriétaire vendeur doit remettre à l'acquéreur le dossier technique complet et le dernier rapport de sécurité (RS) en vigueur. Si l'installation date de plus de 5 ans dans une périodicité de 20 ans, le transfert de propriété déclenche l'obligation légale d'un nouveau contrôle périodique (Annexe ch. 3 OIBT)."
              },
              "importantPoint": {
                      "title": "Principe de diligence permanente",
                      "text": "Le propriétaire ne peut pas s'exonérer de sa responsabilité en prétextant ignorer l'état de son installation. S'il ne fait pas réparer un défaut signalé ou omet le contrôle périodique, le gestionnaire de réseau ou l'ESTI peut ordonner la coupure d'urgence de l'alimentation électrique (Art. 40 OIBT)."
              },
              "synthesis": "L'OIBT régit l'ensemble du parc basse tension suisse (≤ 1000 V AC / 1500 V DC). Les installations doivent satisfaire aux règles techniques reconnues (NIBT 2025) sans mettre en péril personnes et biens. La responsabilité juridique du maintien de la sécurité et de la conservation du RS pèse entièrement sur le propriétaire.",
              "quiz": [
                      {
                              "question": "1. Quels sont les seuils de tension nominale délimitant le champ d'application de l'OIBT selon l'Art. 1 al. 2 ?",
                              "options": [
                                      "Jusqu'à 230 V AC et 400 V DC",
                                      "Au maximum 1000 V AC (alternatif) et 1500 V DC (continu)",
                                      "De 50 V à 50 000 V indistinctement",
                                      "Uniquement les installations au-delà de 1500 V AC"
                              ],
                              "correctAnswer": 1,
                              "explanation": "L'Art. 1 al. 2 let. a OIBT fixe expressément la limite supérieure de la basse tension à 1000 V en courant alternatif (AC) et 1500 V en courant continu (DC).",
                              "articleRef": "OIBT — Art. 1 al. 2 let. a"
                      },
                      {
                              "question": "2. Comment sont définies les installations intérieures selon l'Art. 2 al. 2 OIBT ?",
                              "options": [
                                      "Les installations situées exclusivement à l'intérieur des chambres à coucher",
                                      "Les installations situées en aval du point de raccordement au réseau de distribution (coupe-surintensité général)",
                                      "Uniquement les appareils mobiles raccordés à des prises murales",
                                      "Les lignes aériennes de distribution du gestionnaire de réseau public"
                              ],
                              "correctAnswer": 1,
                              "explanation": "L'Art. 2 al. 2 OIBT définit les installations intérieures comme les installations situées en aval du point de raccordement au réseau de distribution.",
                              "articleRef": "OIBT — Art. 2 al. 2"
                      },
                      {
                              "question": "3. Pendant quelle durée le propriétaire d'une installation électrique doit-il conserver le rapport de sécurité (RS) selon l'Art. 5 al. 2 OIBT ?",
                              "options": [
                                      "Pendant 1 an seulement après la fin des travaux",
                                      "Pendant toute la durée de la période de contrôle fixée dans l'annexe",
                                      "Pendant 50 ans au registre foncier cantonal",
                                      "Il n'est pas tenu de le conserver, seul l'électricien le garde"
                              ],
                              "correctAnswer": 1,
                              "explanation": "L'Art. 5 al. 2 OIBT impose au propriétaire de conserver le rapport de sécurité pendant toute la durée de la période de contrôle fixée dans l'annexe.",
                              "articleRef": "OIBT — Art. 5 al. 2"
                      },
                      {
                              "question": "4. Que doit faire le propriétaire lorsqu'un défaut est constaté sur son installation selon l'Art. 5 al. 3 OIBT ?",
                              "options": [
                                      "Attendre la fin de la période de contrôle de 20 ans",
                                      "Le faire éliminer sans délai par une personne titulaire d'une autorisation d'installer",
                                      "Remplacer lui-même les câbles défectueux sans contrôle ultérieur",
                                      "Envoyer une réclamation écrite au Conseil fédéral"
                              ],
                              "correctAnswer": 1,
                              "explanation": "L'Art. 5 al. 3 OIBT stipule que le propriétaire fait éliminer sans délai les défauts par une personne titulaire d'une autorisation d'installer.",
                              "articleRef": "OIBT — Art. 5 al. 3"
                      }
              ],
              "nextLessonId": "rs-734-27-lecon-2"
      },

      {
              "id": "rs-734-27-lecon-2",
              "routeId": "rs-734-27/lecon-2",
              "moduleId": "A",
              "parcoursId": "rs-734-27",
              "lessonNumber": 2,
              "totalLessons": 7,
              "code": "RS 734.27 — Leçon 2",
              "title": "Chapitre 2 : Autorisations pour travaux d’installation",
              "subtitle": "Régime de l'autorisation, autorisation générale, autorisations limitées, travaux sans autorisation et dispositions communes (Art. 6 à 21)",
              "articlesRange": "Art. 6 à 21",
              "status": "Disponible",
              "duration": "12 min",
              "tag": "Ordonnance fédérale",
              "xpReward": 35,
              "objective": "Comprendre les conditions d'octroi des autorisations d'installer générales et limitées, la qualification de personne du métier (Art. 8), les règles d'encadrement en entreprise (Art. 10, 10a, 10b) et les limites strictes des travaux réalisables sans autorisation par les particuliers (Art. 16).",
              "introduction": "Le <strong>Chapitre 2 de l'OIBT (Art. 6 à 21)</strong> constitue le pilier professionnel de la sécurité électrique suisse. Il instaure un monopole d'exercice conditionné par l'obtention d'une autorisation officielle délivrée par l'Inspection fédérale des installations à courant fort (ESTI). Structuré en <strong>cinq sections réelles</strong>, il régit l'autorisation générale pour les personnes physiques et les entreprises d'installation, définit le statut de personne du métier, encadre les autorisations limitées pour l'industrie et la maintenance, et délimite strictement les rares travaux qu'un propriétaire peut réaliser sans autorisation.",
              "contentSections": [
                      {
                              "title": "1. Section 1 : Régime de l’autorisation (Art. 6)",
                              "text": "<div class=\"legal-ref-badge\">🔎 RS 734.27 — Art. 6 • Obligation générale d'autorisation</div>\n<p style=\"margin-bottom:0.75rem; line-height:1.6; color:var(--text-secondary);\">\nSelon l'<strong>Art. 6 OIBT</strong>, celui qui établit, modifie ou entretient des installations électriques et celui qui veut y raccorder à demeure des appareils électriques fixes doit être <strong>titulaire d'une autorisation d'installer délivrée par l'Inspection (ESTI)</strong>.\n</p>\n<div class=\"ocfo-summary-box\">\n  <div class=\"box-title\">⚖️ Portée juridique</div>\n  Toute intervention sur le réseau électrique basse tension suisse est illicite sans autorisation formelle de l'ESTI, sous réserve des exceptions strictement énumérées à l'Art. 16.\n</div>"
                      },
                      {
                              "title": "2. Section 2 : Autorisation générale d’installer (Art. 7 à 11)",
                              "text": "<div class=\"legal-ref-badge\">🔎 RS 734.27 — Art. 7 à 11 • Personnes du métier & Entreprises</div>\n<p style=\"margin-bottom:0.75rem; line-height:1.6; color:var(--text-secondary);\">\n<strong>Personnes physiques (Art. 7) :</strong> L'autorisation générale est accordée aux personnes physiques qui sont du métier et garantissent une exécution conforme aux prescriptions.\n</p>\n<div class=\"ocfo-highlight-card\" style=\"margin-bottom:0.85rem;\">\n  <div class=\"card-title\">🎓 Qui est légalement « personne du métier » ? (Art. 8 OIBT)</div>\n  <ul style=\"margin:0 0 0 1.25rem; line-height:1.6; color:var(--text-secondary); font-size:0.88rem;\">\n    <li>Le titulaire de l'<strong>examen professionnel supérieur (EPS d'installateur-électricien diplômé / maîtrise fédérale)</strong>.</li>\n    <li>Le diplômé d'une haute école universitaire ou spécialisée (ingénieur HES/EPF) en électrotechnique justifiant de <strong>3 ans de pratique</strong> dans les travaux d'installation sous la surveillance d'une personne du métier et ayant réussi l'examen pratique (Art. 8 al. 1 let. b).</li>\n    <li>Le titulaire d'un brevet fédéral de conseiller en sécurité électrique ou électricien-chef de projet justifiant d'au moins <strong>5 ans de pratique</strong> et ayant réussi l'examen pratique.</li>\n  </ul>\n</div>\n<p style=\"margin-bottom:0.75rem; line-height:1.6; color:var(--text-secondary);\">\n<strong>Autorisation aux entreprises (Art. 9 & 10) :</strong> L'entreprise doit employer à plein temps (taux d'occupation minimal) une personne du métier responsable de la surveillance technique. Selon l'<strong>Art. 10 OIBT</strong>, la personne du métier doit pouvoir assurer effectivement la direction technique et la surveillance des chantiers.\n</p>\n<p style=\"margin-bottom:0.75rem; line-height:1.6; color:var(--text-secondary);\">\n<strong>Exécution par l'entreprise elle-même (Art. 10a) :</strong> Les travaux peuvent être exécutés par des personnes du métier, des électriciens de montage CFC ou installateurs-électriciens CFC, ou des apprentis encadrés.\n</p>\n<p style=\"margin-bottom:0.75rem; line-height:1.6; color:var(--text-secondary);\">\n<strong>Recours à d'autres entreprises ou particuliers (Art. 10b) :</strong> Encadre strictement la sous-traitance et le personnel temporaire, qui doivent être intégrés dans l'organisation de surveillance de l'entreprise titulaire.\n</p>\n<p style=\"margin-bottom:0.75rem; line-height:1.6; color:var(--text-secondary);\">\n<strong>Autorisation temporaire (Art. 11) :</strong> Si une entreprise n'emploie momentanément aucune personne du métier (décès, départ imprévu), l'ESTI peut accorder une autorisation temporaire de <strong>6 mois au maximum</strong> pour permettre son remplacement.\n</p>"
                      },
                      {
                              "title": "3. Section 3 : Autorisations d’installer limitées (Art. 12 à 15)",
                              "text": "<div class=\"legal-ref-badge\">🔎 RS 734.27 — Art. 12 à 15 • Régimes limités</div>\n<p style=\"margin-bottom:0.75rem; line-height:1.6; color:var(--text-secondary);\">\nL'ESTI peut octroyer des autorisations d'installer limitées à des entreprises non-installatrices pour des besoins techniques spécifiques :\n</p>\n<div class=\"ocfo-density-table-wrap\" style=\"margin-bottom:0.85rem;\">\n  <table class=\"ocfo-density-table\">\n    <thead>\n      <tr>\n        <th style=\"width:28%;\">Type d'autorisation</th>\n        <th style=\"width:42%;\">Champ d'application exact</th>\n        <th style=\"width:30%;\">Exigences de qualification</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong>Installations propres à l'entreprise</strong><br><span style=\"font-size:0.75rem; color:var(--text-muted);\">(Art. 13)</span></td>\n        <td>Entretien et modification d'installations dans les locaux et terrains propres d'une entreprise industrielle ou commerciale.</td>\n        <td>Présence d'une personne du métier ou d'un électricien de réseau/exploitation qualifié ayant réussi l'examen ESTI.</td>\n      </tr>\n      <tr>\n        <td><strong>Installations spéciales</strong><br><span style=\"font-size:0.75rem; color:var(--text-muted);\">(Art. 14)</span></td>\n        <td>Travaux sur des installations spécifiques (ascenseurs, enseignes lumineuses, téléphériques, installations photovoltaïques, etc.).</td>\n        <td>Formation professionnelle correspondante + examen spécifique ESTI.</td>\n      </tr>\n      <tr>\n        <td><strong>Raccordement d'appareils</strong><br><span style=\"font-size:0.75rem; color:var(--text-muted);\">(Art. 15)</span></td>\n        <td>Raccordement et remplacement d'appareils électriques et d'équipements spécifiques (chauffage, ventilation, pompes à chaleur, machines industrielles).</td>\n        <td>Professionnel de la branche technique (chauffagiste, mécanicien) ayant suivi la formation OIBT 15 et réussi l'examen ESTI.</td>\n      </tr>\n    </tbody>\n  </table>\n</div>"
                      },
                      {
                              "title": "4. Section 4 : Travaux d’installation sans autorisation (Art. 16)",
                              "text": "<div class=\"legal-ref-badge\">🔎 RS 734.27 — Art. 16 • Travaux d’installation sans autorisation</div>\n<p style=\"margin-bottom:0.75rem; line-height:1.6; color:var(--text-secondary);\">\nL'<strong>Art. 16 OIBT</strong> délimite strictement les cas où des travaux d'installation électrique peuvent être exécutés <strong>sans autorisation d'installer</strong> :\n</p>\n<ul style=\"margin:0 0 0.85rem 1.25rem; line-height:1.6; color:var(--text-secondary);\">\n  <li><strong>Personnes qualifiées dans leur propre logement (Art. 16 al. 1) :</strong> Ne doivent pas demander d'autorisation pour les travaux d'installation dans les locaux d'habitation et les locaux annexes qu'elles habitent ou dont elles sont propriétaires :\n    <ul style=\"margin-top:0.35rem; margin-bottom:0.35rem;\">\n      <li>a. les personnes du métier visées à l'art. 8 ;</li>\n      <li>b. les personnes autorisées à contrôler visées à l'art. 27, al. 1 ;</li>\n      <li>c. les installateurs-électriciens CFC ;</li>\n      <li>d. les électriciens de montage CFC habilités à effectuer la première vérification.</li>\n    </ul>\n  </li>\n  <li><strong>Travaux autorisés sans autorisation à tout occupant dans son propre logement (Art. 16 al. 2) :</strong> L'autorisation n'est en outre pas nécessaire pour :\n    <ul style=\"margin-top:0.35rem; margin-bottom:0.35rem;\">\n      <li><strong>let. a :</strong> l'installation de prises et d'interrupteurs effectuée sur des équipements existants dans le logement occupé en propre ou les locaux annexes à celui-ci sur des circuits terminaux monophasés précédés d'un coupe-surintensité divisionnaire, <strong>à condition que les installations soient protégées par un disjoncteur à courant différentiel-résiduel de 30 mA au maximum</strong> ;</li>\n      <li><strong>let. b :</strong> le raccordement ou le débranchement des <strong>luminaires</strong> ou le remplacement des <strong>interrupteurs</strong> dans le logement occupé en propre ou les locaux annexes à celui-ci.</li>\n    </ul>\n  </li>\n</ul>\n<div class=\"ocfo-highlight-card\" style=\"margin-bottom:0.85rem;\">\n  <div class=\"card-title\">⚠️ Contrôle obligatoire et rapport de sécurité RS (Art. 16 al. 3)</div>\n  <p style=\"margin:0; line-height:1.6; color:var(--text-secondary); font-size:0.88rem;\">\n  Selon l'<strong>Art. 16 al. 3 OIBT</strong>, les installations électriques selon les <strong>al. 1</strong> et <strong>al. 2, let. a</strong>, <strong>doivent être contrôlées par le titulaire d’une autorisation de contrôler</strong>. Cette personne <strong>remettra le rapport de sécurité (RS) au propriétaire de l’installation</strong>.\n  <br><br>\n  <em>Remarque : les travaux visés à l'al. 2 let. b (pose/débranchement de luminaires et remplacement d'interrupteurs) ne nécessitent pas ce contrôle.</em>\n  </p>\n</div>"
                      },
                      {
                              "title": "5. Section 5 : Dispositions communes (Art. 17 à 21)",
                              "text": "<div class=\"legal-ref-badge\">🔎 RS 734.27 — Art. 17 à 21 • Validité & Registre ESTI</div>\n<ul style=\"margin:0 0 0.85rem 1.25rem; line-height:1.6; color:var(--text-secondary);\">\n  <li><strong>Teneur (Art. 17) :</strong> L'autorisation mentionne les personnes du métier et les personnes responsables de l'exécution technique.</li>\n  <li><strong>Durée et intransmissibilité (Art. 18) :</strong> L'autorisation est <strong>illimitée dans le temps</strong> mais strictement <strong>intransmissible</strong> (elle ne peut être cédée, vendue ou prêtée).</li>\n  <li><strong>Obligation d'annoncer les mutations (Art. 19) :</strong> Tout changement (départ de la personne du métier, changement d'adresse, modification de raison sociale) doit être annoncé à l'ESTI dans un délai de <strong>deux semaines</strong>.</li>\n  <li><strong>Registre public (Art. 20) :</strong> L'ESTI tient un registre officiel accessible au public répertoriant tous les titulaires d'autorisations d'installer en Suisse.</li>\n  <li><strong>Examens (Art. 21) :</strong> L'ESTI organise ou fait organiser les examens exigés pour l'octroi des autorisations.</li>\n</ul>"
                      }
              ],
              "practicalExample": {
                      "title": "Cas concret : Un chauffagiste peut-il raccorder une pompe à chaleur ?",
                      "text": "Oui, mais uniquement s'il est titulaire de l'autorisation de raccordement selon l'Art. 15 OIBT. Cette autorisation lui permet de raccorder à demeure la pompe à chaleur depuis le disjoncteur terminal prévu à cet effet, mais ne l'autorise en aucun cas à modifier le tableau principal ou à tirer de nouvelles lignes générales."
              },
              "importantPoint": {
                      "title": "Prête-nom formellement interdit",
                      "text": "La personne du métier ne peut pas prêter son nom pour 'couvrir' les chantiers d'une autre entreprise sans en assumer la direction et la surveillance effectives (Art. 10b et Art. 42 let. c ch. 3 OIBT, sanctionné pénalement)."
              },
              "synthesis": "Nul ne peut installer sans autorisation délivrée par l'ESTI. L'autorisation générale est réservée aux personnes du métier (maîtrise / EPS, ou diplôme HES/EPF avec 3 ans de pratique et examen pratique, ou brevet fédéral avec 5 ans de pratique et examen pratique). Les autorisations limitées (Art. 12 à 15) et travaux sans autorisation (Art. 16) sont strictement encadrés.",
              "quiz": [
                      {
                              "question": "1. Quelle qualification confère de plein droit la qualité de personne du métier selon l'Art. 8 al. 1 let. a OIBT ?",
                              "options": [
                                      "Le certificat de capacité d'employé de commerce",
                                      "L'examen professionnel supérieur (EPS d'installateur-électricien diplômé / maîtrise fédérale)",
                                      "Un cours du soir d'initiation à l'électricité de 20 heures",
                                      "Le permis de conduire pour véhicules lourds"
                              ],
                              "correctAnswer": 1,
                              "explanation": "L'Art. 8 al. 1 let. a OIBT dispose qu'est du métier une personne qui a réussi l'examen professionnel supérieur (EPS).",
                              "articleRef": "OIBT — Art. 8 al. 1 let. a"
                      },
                      {
                              "question": "2. Pendant quelle durée maximale l'ESTI peut-elle accorder une autorisation temporaire selon l'Art. 11 al. 1 OIBT ?",
                              "options": [
                                      "1 mois au maximum",
                                      "6 mois au maximum",
                                      "5 ans renouvelables",
                                      "Indéfiniment jusqu'à la retraite du directeur"
                              ],
                              "correctAnswer": 1,
                              "explanation": "L'Art. 11 al. 1 OIBT prévoit que si l'entreprise n'emploie momentanément aucune personne du métier, l'Inspection peut délivrer une autorisation temporaire valable pour six mois au plus.",
                              "articleRef": "OIBT — Art. 11 al. 1"
                      },
                      {
                              "question": "3. Quels travaux un occupant peut-il exécuter sans autorisation dans son propre logement selon l'Art. 16 al. 2 OIBT ?",
                              "options": [
                                      "Modifier le raccordement au réseau de transport haute tension",
                                      "Poser/débrancher des luminaires, remplacer des interrupteurs (let. b) et installer des prises/interrupteurs avec DDR ≤ 30 mA (let. a)",
                                      "Construire un poste de transformation à huile dans sa cave",
                                      "Poser des compteurs d'énergie pour revendre du courant aux voisins"
                              ],
                              "correctAnswer": 1,
                              "explanation": "L'Art. 16 al. 2 OIBT autorise l'occupant en propre à raccorder/débrancher des luminaires, remplacer des interrupteurs (let. b) et poser des prises/interrupteurs sur des circuits terminaux monophasés protégés par un DDR ≤ 30 mA (let. a).",
                              "articleRef": "OIBT — Art. 16 al. 2"
                      },
                      {
                              "question": "4. Dans quel délai le titulaire d'une autorisation d'installer doit-il annoncer à l'Inspection tout changement de personne du métier selon l'Art. 19 al. 1 OIBT ?",
                              "options": [
                                      "Dans les deux semaines",
                                      "Dans les six mois",
                                      "Lors du contrôle périodique de 20 ans",
                                      "Aucune annonce n'est requise"
                              ],
                              "correctAnswer": 0,
                              "explanation": "L'Art. 19 al. 1 OIBT impose au titulaire d'annoncer dans les deux semaines à l'Inspection toute modification des conditions ayant conduit à l'octroi de l'autorisation.",
                              "articleRef": "OIBT — Art. 19 al. 1"
                      }
              ],
              "prevLessonId": "rs-734-27-lecon-1",
              "nextLessonId": "rs-734-27-lecon-3"
      },

      {
              "id": "rs-734-27-lecon-3",
              "routeId": "rs-734-27/lecon-3",
              "moduleId": "A",
              "parcoursId": "rs-734-27",
              "lessonNumber": 3,
              "totalLessons": 7,
              "code": "RS 734.27 — Leçon 3",
              "title": "Chapitre 3 : Exécution des travaux d’installation",
              "subtitle": "Sécurité au travail, avis d'installation, première vérification et contrôle final propre à l'entreprise (Art. 22 à 25)",
              "articlesRange": "Art. 22 à 25",
              "status": "Disponible",
              "duration": "9 min",
              "tag": "Ordonnance fédérale",
              "xpReward": 35,
              "objective": "Maîtriser la chronologie obligatoire des chantiers électriques en Suisse : sécurité d'intervention (Art. 22), obligation d'annonce préalable au gestionnaire de réseau (Art. 23), première vérification avant mise sous tension et contrôle final avec procès-verbal d'essais et protocole de mesure (Art. 24).",
              "introduction": "Le <strong>Chapitre 3 de l'OIBT (Art. 22 à 25)</strong> encadre l'activité quotidienne des installateurs électriciens sur les chantiers. Il pose la règle absolue de travail hors tension et renvoie aux 5 règles vitales de sécurité. Il institue également une discipline de traçabilité stricte en exigeant l'annonce préalable des chantiers au gestionnaire de réseau (avis d'installation) ainsi qu'une procédure de double contrôle interne : la <strong>première vérification</strong> préalable à la mise en service et le <strong>contrôle final propre à l'entreprise</strong> consigné dans un rapport de sécurité.",
              "contentSections": [
                      {
                              "title": "1. Art. 22 — Sécurité au travail et règles d'intervention",
                              "text": "<div class=\"legal-ref-badge\">🔎 RS 734.27 — Art. 22 • Travaux hors tension & TST</div>\n<p style=\"margin-bottom:0.75rem; line-height:1.6; color:var(--text-secondary);\">\n<strong>Règle fondamentale (Art. 22 al. 1) :</strong> En règle générale, les travaux sur des installations électriques <strong>ne doivent être entrepris que si l'installation est hors tension</strong>.\n</p>\n<div class=\"ocfo-highlight-card\" style=\"margin-bottom:0.85rem;\">\n  <div class=\"card-title\">🛡️ Les 5 règles de sécurité de l'Art. 22 al. 1 OIBT</div>\n  <ol style=\"margin:0 0 0 1.25rem; line-height:1.6; color:var(--text-secondary); font-size:0.88rem;\">\n    <li><strong>Déclencher et couper</strong> l'alimentation sur tous les pôles.</li>\n    <li><strong>Assurer contre le réenclenchement</strong> inopiné (cadenassage, condamnation).</li>\n    <li><strong>Vérifier l'absence de tension</strong> à l'aide d'un vérificateur homologué.</li>\n    <li><strong>Mettre à la terre et en court-circuit</strong> (si requis par les caractéristiques de l'installation).</li>\n    <li><strong>Protéger contre les parties voisines</strong> restées sous tension (écrans, capuchons isolants).</li>\n  </ol>\n</div>\n<p style=\"margin-bottom:0.75rem; line-height:1.6; color:var(--text-secondary);\">\n<strong>Dérogations et Travaux sous tension - TST (Art. 22 al. 2 à 4) :</strong> Les travaux sur des installations sous tension ne sont admissibles qu'à titre exceptionnel, sous la responsabilité directe d'une personne du métier, avec un personnel spécialement formé, équipé d'EPI appropriés et toujours en <strong>binôme (présence permanente d'une 2e personne instruite)</strong>.\n</p>"
                      },
                      {
                              "title": "2. Art. 23 — Obligation d’annoncer les travaux (Avis d'installation)",
                              "text": "<div class=\"legal-ref-badge\">🔎 RS 734.27 — Art. 23 • Avis d'installation</div>\n<p style=\"margin-bottom:0.75rem; line-height:1.6; color:var(--text-secondary);\">\nSelon l'<strong>Art. 23 OIBT</strong>, les titulaires d'une autorisation d'installer doivent <strong>annoncer au gestionnaire de réseau compétent</strong>, avant le début des travaux :\n</p>\n<ul style=\"margin:0 0 0.85rem 1.25rem; line-height:1.6; color:var(--text-secondary);\">\n  <li>Les travaux nécessitant l'établissement, la modification ou le renforcement du raccordement au réseau.</li>\n  <li>Les travaux portant sur des installations dont la périodicité de contrôle est <strong>inférieure à 20 ans</strong> selon l'Annexe.</li>\n  <li>Les installations de production d'énergie (photovoltaïque, accumulateurs).</li>\n</ul>\n<p style=\"margin-bottom:0.75rem; line-height:1.6; color:var(--text-secondary);\">\n<em>Notification a posteriori :</em> Pour les petites interventions urgentes, l'annonce doit intervenir au plus tard dans les 20 jours suivant l'intervention.\n</p>"
                      },
                      {
                              "title": "3. Art. 24 — Première vérification et contrôle final propre à l’entreprise",
                              "text": "<div class=\"legal-ref-badge\">🔎 RS 734.27 — Art. 24 • Vérification & Contrôle final</div>\n<div class=\"ocfo-density-table-wrap\" style=\"margin-bottom:0.85rem;\">\n  <table class=\"ocfo-density-table\">\n    <thead>\n      <tr>\n        <th style=\"width:25%;\">Étape technique</th>\n        <th style=\"width:45%;\">Exigence réglementaire (Art. 24 OIBT)</th>\n        <th style=\"width:30%;\">Document obligatoire</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong>Première vérification</strong><br><span style=\"font-size:0.75rem; color:var(--text-muted);\">(Art. 24 al. 1)</span></td>\n        <td>Effectuée <em>avant</em> la mise en service de l'installation ou de la partie d'installation modifiée, pour s'assurer de l'absence de danger immédiat.</td>\n        <td>Procès-verbal de première vérification (mesures d'isolement, continuité du PE).</td>\n      </tr>\n      <tr>\n        <td><strong>Contrôle final propre à l'entreprise</strong><br><span style=\"font-size:0.75rem; color:var(--text-muted);\">(Art. 24 al. 2)</span></td>\n        <td>Effectué par une personne du métier ou un conseiller en sécurité avant la remise de l'installation au propriétaire. Mesures complètes selon NIBT.</td>\n        <td><strong>Protocole de mesure</strong> et <strong>Rapport de sécurité (RS)</strong> signé par l'installateur.</td>\n      </tr>\n      <tr>\n        <td><strong>Remise du RS</strong><br><span style=\"font-size:0.75rem; color:var(--text-muted);\">(Art. 24 al. 3 & 4)</span></td>\n        <td>Le rapport de sécurité est remis au propriétaire ainsi qu'au gestionnaire de réseau compétent.</td>\n        <td>RS officiel remis sans délai.</td>\n      </tr>\n    </tbody>\n  </table>\n</div>"
                      },
                      {
                              "title": "4. Art. 25 — Obligation d’annonce pour les autorisations limitées",
                              "text": "<div class=\"legal-ref-badge\">🔎 RS 734.27 — Art. 25 • Régime des autorisations limitées</div>\n<p style=\"margin-bottom:0.75rem; line-height:1.6; color:var(--text-secondary);\">\nLes titulaires d'une autorisation d'installer limitée (Art. 13, 14, 15) doivent consigner tous leurs travaux dans un <strong>registre de contrôle</strong> tenu à disposition de l'Inspection (ESTI).\n</p>\n<p style=\"margin-bottom:0.75rem; line-height:1.6; color:var(--text-secondary);\">\nIls procèdent également à la première vérification et remettent un rapport de sécurité spécifique attestant de la conformité du raccordement exécuté.\n</p>"
                      }
              ],
              "practicalExample": {
                      "title": "Cas concret : Mise sous tension d'un nouveau tableau divisionnaire",
                      "text": "Avant d'enclencher le disjoncteur général, l'électricien effectue la première vérification : inspection visuelle, mesure de résistance d'isolement (Riso ≥ 1 MΩ) et continuité des conducteurs de protection (Rpe ≤ 1 Ω). Une fois sous tension, il effectue le contrôle final complet (déclenchement des différentiels DDR en temps et courant, impédance de boucle de défaut Zs) et consigne les valeurs dans le protocole de mesure joint au RS."
              },
              "importantPoint": {
                      "title": "Interdiction de mise en service sans vérification",
                      "text": "Mettre en service une installation électrique sans première vérification préalable engage directement la responsabilité civile et pénale de l'installateur (Art. 42 let. c ch. 5 OIBT)."
              },
              "synthesis": "L'installateur doit respecter les règles de l'art, procéder à l'autocontrôle complet consigné avant la mise en service, et notifier les travaux au gestionnaire de réseau selon les seuils réglementaires (Art. 23 et 24).",
              "quiz": [
                      {
                              "question": "1. Quelle est la règle générale concernant l'état d'une installation lors de l'exécution de travaux selon l'Art. 22 al. 1 OIBT ?",
                              "options": [
                                      "Les travaux doivent toujours être faits sous tension pour vérifier que le courant passe",
                                      "En règle générale, les travaux ne doivent être entrepris que si l'installation est hors tension",
                                      "La tension n'a aucune importance si l'ouvrier porte des chaussures de sécurité",
                                      "L'installation doit être mise sous surtension de 10 000 V pour tester sa résistance"
                              ],
                              "correctAnswer": 1,
                              "explanation": "L'Art. 22 al. 1 OIBT pose le principe absolu : en règle générale, les travaux sur des installations électriques ne doivent être entrepris que si l'installation est hors tension.",
                              "articleRef": "OIBT — Art. 22 al. 1"
                      },
                      {
                              "question": "2. À quel moment la première vérification doit-elle obligatoirement être effectuée selon l'Art. 24 al. 1 OIBT ?",
                              "options": [
                                      "5 ans après l'emménagement du propriétaire",
                                      "Avant la mise en service de l'installation ou de la partie d'installation modifiée",
                                      "Uniquement en cas d'accident corporel",
                                      "Lors de la démolition du bâtiment"
                              ],
                              "correctAnswer": 1,
                              "explanation": "L'Art. 24 al. 1 OIBT dispose expressément qu'une première vérification doit être effectuée avant la mise en service de l'installation.",
                              "articleRef": "OIBT — Art. 24 al. 1"
                      },
                      {
                              "question": "3. Qui doit exécuter le contrôle final propre à l'entreprise selon l'Art. 24 al. 2 OIBT ?",
                              "options": [
                                      "Un apprenti de première année seul sur le chantier",
                                      "Une personne du métier ou un contrôleur / conseiller en sécurité qualifié",
                                      "Le concierge de l'immeuble",
                                      "La police cantonale"
                              ],
                              "correctAnswer": 1,
                              "explanation": "L'Art. 24 al. 2 OIBT exige que le contrôle final soit effectué par une personne du métier ou un titulaire du brevet de conseiller en sécurité.",
                              "articleRef": "OIBT — Art. 24 al. 2"
                      },
                      {
                              "question": "4. Quels documents essentiels constituent le dossier de contrôle remis au propriétaire selon l'Art. 24 al. 2 et 3 OIBT ?",
                              "options": [
                                      "Une simple facture acquittée",
                                      "Le protocole de mesure complet et le Rapport de sécurité (RS)",
                                      "Un certificat médical d'aptitude",
                                      "Uniquement le bon de livraison du matériel"
                              ],
                              "correctAnswer": 1,
                              "explanation": "L'Art. 24 al. 2 et 3 OIBT exige la consignation des résultats dans un protocole de mesure et l'établissement d'un rapport de sécurité (RS).",
                              "articleRef": "OIBT — Art. 24 al. 2 et 3"
                      }
              ],
              "prevLessonId": "rs-734-27-lecon-2",
              "nextLessonId": "rs-734-27-lecon-4"
      },

      {
              "id": "rs-734-27-lecon-4",
              "routeId": "rs-734-27/lecon-4",
              "moduleId": "A",
              "parcoursId": "rs-734-27",
              "lessonNumber": 4,
              "totalLessons": 7,
              "code": "RS 734.27 — Leçon 4",
              "title": "Chapitre 4 : Contrôle des installations",
              "subtitle": "Organes de contrôle, indépendance, compétences, rapport de sécurité RS, contrôles sporadiques et élimination des défauts (Art. 26 à 40)",
              "articlesRange": "Art. 26 à 40",
              "status": "Disponible",
              "duration": "14 min",
              "tag": "Ordonnance fédérale",
              "xpReward": 40,
              "objective": "Maîtriser le système de contrôle suisse à plusieurs niveaux : distinction entre organes indépendants et organismes accrédités (Art. 26), incompatibilité absolue entre installation et contrôle (Art. 31), procédure de sommation périodique (Art. 36), contenu obligatoire du RS (Art. 37) et traitement des défauts graves (Art. 40).",
              "introduction": "Le <strong>Chapitre 4 de l'OIBT (Art. 26 à 40)</strong> est la clé de voûte de la sécurité des installations intérieures suisses. Il organise une séparation stricte des pouvoirs en instaurant des <strong>organes de contrôle indépendants</strong> et des <strong>organismes d'inspection accrédités</strong>. Structuré en <strong>quatre sections réelles</strong>, il régit l'autorisation de contrôler délivrée par l'ESTI, verrouille le principe d'incompatibilité (interdiction d'être juge et partie), fixe le contenu impératif du Rapport de sécurité (RS), détaille la procédure de sommation par les gestionnaires de réseau et prévoit la coupure d'urgence en cas de danger grave.",
              "contentSections": [
                      {
                              "title": "1. Section 1 : Dispositions communes & Indépendance des contrôles (Art. 26 à 31)",
                              "text": "<div class=\"legal-ref-badge\">🔎 RS 734.27 — Art. 26 à 31 • Les acteurs du contrôle</div>\n<p style=\"margin-bottom:0.75rem; line-height:1.6; color:var(--text-secondary);\">\n<strong>Les 4 catégories d'organes de contrôle (Art. 26 al. 1) :</strong>\n</p>\n<ul style=\"margin:0 0 0.85rem 1.25rem; line-height:1.6; color:var(--text-secondary);\">\n  <li><strong>a. Les organes de contrôle indépendants :</strong> titulaires d'une autorisation de contrôler délivrée par l'ESTI.</li>\n  <li><strong>b. Les organismes d'inspection accrédités :</strong> accrédités selon la norme ISO/CEI 17020 pour le contrôle des installations spéciales à haut risque (locaux médicaux groupe 2, zones Ex, mines, etc.).</li>\n  <li><strong>c. Les gestionnaires de réseau :</strong> dans leur propre zone de desserte (surveillance des délais et contrôles sporadiques).</li>\n  <li><strong>d. L'Inspection fédérale (ESTI) :</strong> haute surveillance et contrôles d'office.</li>\n</ul>\n<div class=\"ocfo-highlight-card\" style=\"margin-bottom:0.85rem;\">\n  <div class=\"card-title\">⚖️ Art. 31 OIBT — La règle d'incompatibilité absolue</div>\n  <p style=\"margin:0; line-height:1.6; color:var(--text-secondary); font-size:0.88rem;\">\n  <strong>« Celui qui a participé à la conception, à l'exécution, à la modification ou à la remise en état d'une installation électrique ne peut pas être chargé du contrôle de réception (art. 35 al. 3) ni du contrôle périodique (art. 36) de cette même installation. »</strong><br>\n  Cette interdiction s'étend aux personnes faisant partie de la même entreprise ou ayant des liens économiques directs avec l'installateur.\n  </p>\n</div>"
                      },
                      {
                              "title": "2. Section 2 : Compétences et tâches des organes de contrôle (Art. 32 à 34)",
                              "text": "<div class=\"legal-ref-badge\">🔎 RS 734.27 — Art. 32 à 34 • Rôles institutionnels</div>\n<ul style=\"margin:0 0 0.85rem 1.25rem; line-height:1.6; color:var(--text-secondary);\">\n  <li><strong>Contrôles techniques (Art. 32) :</strong> Les organismes d'inspection accrédités ont l'exclusivité du contrôle des installations spéciales énumérées au ch. 1 de l'Annexe (ouvrages classifiés, hôpitaux groupe 2, dépôts de carburants, etc.). Les organes indépendants contrôlent toutes les autres installations soumises aux ch. 2, 3 et 4.</li>\n  <li><strong>Tâches des gestionnaires de réseau (Art. 33) :</strong> Ils tiennent le registre des installations de leur réseau, surveillent les échéances de contrôle périodique et conservent les rapports de sécurité transmis par les propriétaires.</li>\n  <li><strong>Haute surveillance de l'ESTI (Art. 34) :</strong> L'Inspection supervise l'ensemble des organes de contrôle et des gestionnaires de réseau, procède à des audits et tranche les litiges techniques.</li>\n</ul>"
                      },
                      {
                              "title": "3. Section 3 : Rapport de sécurité RS et sommations (Art. 35 à 38)",
                              "text": "<div class=\"legal-ref-badge\">🔎 RS 734.27 — Art. 35 à 38 • La procédure RS</div>\n<p style=\"margin-bottom:0.75rem; line-height:1.6; color:var(--text-secondary);\">\n<strong>Prise en charge d'une installation neuve (Art. 35) :</strong>\nPour toute installation dont la période de contrôle est inférieure à 20 ans, le propriétaire doit faire effectuer un <strong>contrôle de réception indépendant</strong> dans les <strong>6 mois</strong> suivant la reprise de l'installation.\n</p>\n<div class=\"ocfo-highlight-card\" style=\"margin-bottom:0.85rem;\">\n  <div class=\"card-title\">📅 Sommation périodique (Art. 36 OIBT)</div>\n  <p style=\"margin:0; line-height:1.6; color:var(--text-secondary); font-size:0.88rem;\">\n  <strong>Six mois au moins</strong> avant l'expiration d'une période de contrôle fixée à l'Annexe, le gestionnaire de réseau invite par écrit le propriétaire à présenter le rapport de sécurité attestant de la conformité de son installation dans un délai de <strong>six mois</strong>.\n  </p>\n</div>\n<p style=\"margin-bottom:0.75rem; line-height:1.6; color:var(--text-secondary);\">\n<strong>Contenu obligatoire du Rapport de sécurité (Art. 37 OIBT) :</strong>\nEmplacement et désignation de l'installation, nom et adresse du propriétaire, description technique, périodicité de contrôle, nom et numéro d'autorisation de l'installateur et de l'organe de contrôle, résultats des mesures et mention expresse de conformité.\n</p>\n<p style=\"margin-bottom:0.75rem; line-height:1.6; color:var(--text-secondary);\">\n<strong>Refus des rapports incomplets (Art. 38) :</strong> Les gestionnaires de réseau refusent les rapports incomplets ou établis par des personnes non autorisées et impartissent un délai pour les rectifier.\n</p>"
                      },
                      {
                              "title": "4. Section 4 : Contrôles sporadiques et élimination des défauts (Art. 39 & 40)",
                              "text": "<div class=\"legal-ref-badge\">🔎 RS 734.27 — Art. 39 & 40 • Contrôles inopinés & Défauts</div>\n<p style=\"margin-bottom:0.75rem; line-height:1.6; color:var(--text-secondary);\">\n<strong>Contrôles ponctuels sporadiques (Art. 39) :</strong> L'ESTI et les gestionnaires de réseau contrôlent par sondage des installations déjà certifiées pour s'assurer de la qualité du travail des installateurs et des contrôleurs.\n</p>\n<div class=\"ocfo-summary-box\">\n  <div class=\"box-title\">⚡ Traitement des défauts graves (Art. 40 OIBT)</div>\n  <ul style=\"margin:0 0 0 1.25rem; line-height:1.6; color:var(--text-secondary); font-size:0.88rem;\">\n    <li>Les défauts qui présentent un danger direct pour les personnes ou les choses doivent être éliminés <strong>immédiatement</strong>.</li>\n    <li>En cas de danger imminent, l'organe de contrôle ou l'exploitant de réseau est tenu de <strong>couper immédiatement l'alimentation de l'installation</strong> ou de la partie dangereuse (Art. 40 al. 2).</li>\n    <li>Si le propriétaire ne donne pas suite aux sommations de mise en conformité, le dossier est transmis à l'ESTI qui ordonne le contrôle d'office aux frais du récalcitrant et peut infliger des sanctions.</li>\n  </ul>\n</div>"
                      }
              ],
              "practicalExample": {
                      "title": "Cas concret : L'installateur peut-il signer le RS périodique de son propre client ?",
                      "text": "Non ! Même si l'installateur possède également un brevet de contrôleur, l'Art. 31 OIBT lui interdit formellement de signer le rapport de sécurité périodique ou de réception d'une installation qu'il a lui-même posée ou modifiée. Le propriétaire doit obligatoirement mandater un bureau de contrôle indépendant tiers."
              },
              "importantPoint": {
                      "title": "Délai de sommation de 6 mois",
                      "text": "Le gestionnaire de réseau doit avertir le propriétaire au moins 6 mois avant l'échéance légale de l'annexe (Art. 36 al. 1 OIBT). Si le propriétaire ne répond pas après rappels, l'affaire est transmise à l'ESTI pour procédure administrative contraignante."
              },
              "synthesis": "Séparation stricte des pouvoirs (Art. 31) : interdiction absolue d'installer et de contrôler la même installation. Le gestionnaire de réseau somme le propriétaire 6 mois avant l'échéance légale (Art. 36). En cas de danger grave et imminent, coupure immédiate du réseau (Art. 40 al. 2).",
              "quiz": [
                      {
                              "question": "1. Qui a l'interdiction formelle de réaliser le contrôle périodique d'une installation selon l'Art. 31 OIBT ?",
                              "options": [
                                      "Tout organisme possédant une accréditation fédérale",
                                      "Celui qui a participé à la conception, à l'exécution, à la modification ou à la remise en état de cette installation",
                                      "Les organes de contrôle ayant leur siège dans un autre canton",
                                      "Les personnes ayant plus de 10 ans d'expérience dans le métier"
                              ],
                              "correctAnswer": 1,
                              "explanation": "L'Art. 31 OIBT pose le principe d'indépendance absolue : celui qui a participé à la conception, réalisation ou modification d'une installation ne peut pas effectuer son contrôle périodique ou de réception.",
                              "articleRef": "OIBT — Art. 31"
                      },
                      {
                              "question": "2. Combien de temps à l'avance le gestionnaire de réseau doit-il inviter le propriétaire à présenter le RS selon l'Art. 36 al. 1 OIBT ?",
                              "options": [
                                      "Deux jours avant l'échéance",
                                      "Six mois au moins avant l'expiration de la période de contrôle",
                                      "Cinq ans à l'avance",
                                      "Uniquement après la survenue d'un court-circuit"
                              ],
                              "correctAnswer": 1,
                              "explanation": "L'Art. 36 al. 1 OIBT dispose que six mois au moins avant l'expiration d'une période de contrôle, les gestionnaires de réseau invitent par écrit les propriétaires à présenter le rapport de sécurité.",
                              "articleRef": "OIBT — Art. 36 al. 1"
                      },
                      {
                              "question": "3. Quelle mesure doit être prise en cas de défaut présentant un danger imminent selon l'Art. 40 al. 2 OIBT ?",
                              "options": [
                                      "Attendre le prochain renouvellement du bail à loyer",
                                      "Couper immédiatement l'alimentation de l'installation électrique ou de la partie dangereuse",
                                      "Poser une simple affiche d'avertissement en carton",
                                      "Réduire la puissance du compteur de 10 %"
                              ],
                              "correctAnswer": 1,
                              "explanation": "L'Art. 40 al. 2 OIBT prescrit que les installations présentant un danger imminent pour les personnes ou les choses doivent être immédiatement déconnectées du réseau.",
                              "articleRef": "OIBT — Art. 40 al. 2"
                      },
                      {
                              "question": "4. Dans quel délai le propriétaire d'une installation dont la période est inférieure à 20 ans doit-il faire effectuer le contrôle de réception indépendant selon l'Art. 35 al. 3 OIBT ?",
                              "options": [
                                      "Dans les 6 mois suivant la reprise de l'installation",
                                      "Dans les 10 ans",
                                      "Le jour même avant midi",
                                      "Aucun contrôle de réception n'est requis si l'installation est neuve"
                              ],
                              "correctAnswer": 0,
                              "explanation": "Selon l'Art. 35 al. 3 OIBT, pour les installations dont la période de contrôle est inférieure à 20 ans, le contrôle de réception par un organe indépendant doit intervenir dans les 6 mois.",
                              "articleRef": "OIBT — Art. 35 al. 3"
                      }
              ],
              "prevLessonId": "rs-734-27-lecon-3",
              "nextLessonId": "rs-734-27-lecon-5"
      },

      {
              "id": "rs-734-27-lecon-5",
              "routeId": "rs-734-27/lecon-5",
              "moduleId": "A",
              "parcoursId": "rs-734-27",
              "lessonNumber": 5,
              "totalLessons": 7,
              "code": "RS 734.27 — Leçon 5",
              "title": "Chapitre 5 : Émoluments et dispositions pénales",
              "subtitle": "Régime financier des prestations de l'Inspection et répression pénale selon l'Art. 55 al. 3 LIE (Art. 41 et 42)",
              "articlesRange": "Art. 41 et 42",
              "status": "Disponible",
              "duration": "7 min",
              "tag": "Ordonnance fédérale",
              "xpReward": 35,
              "objective": "Connaître le régime des émoluments perçus par l'ESTI (Art. 41) et assimiler la liste précise des actes délictueux sanctionnés pénalement par l'Art. 42 OIBT en lien avec l'Art. 55 al. 3 LIE.",
              "introduction": "Le <strong>Chapitre 5 de l'OIBT (Art. 41 et 42)</strong> fixe le cadre financier et répressif garantissant l'autorité des prescriptions fédérales. L'<strong>Art. 41</strong> règle les émoluments perçus par l'Inspection fédérale (ESTI) pour ses décisions et contrôles d'office. L'<strong>Art. 42</strong> dresse la liste rigoureuse des infractions pénales passibles d'amende selon l'Art. 55 al. 3 de la LIE, sanctionnant sévèrement le travail au noir, l'exercice sans autorisation, les complaisances d'organisations d'entreprise (prête-nom) et la mise en danger d'autrui.",
              "contentSections": [
                      {
                              "title": "1. Art. 41 — Émoluments perçus par l'Inspection (ESTI)",
                              "text": "<div class=\"legal-ref-badge\">🔎 RS 734.27 — Art. 41 • Émoluments officiels</div>\n<p style=\"margin-bottom:0.75rem; line-height:1.6; color:var(--text-secondary);\">\nL'<strong>Art. 41 OIBT</strong> dispose que l'Inspection perçoit des <strong>émoluments pour les contrôles et les décisions prises</strong> en vertu de la présente ordonnance.\n</p>\n<div class=\"ocfo-highlight-card\" style=\"margin-bottom:0.85rem;\">\n  <div class=\"card-title\">📋 Renvoi à l'Ordonnance sur l'Inspection (RS 734.24)</div>\n  <p style=\"margin:0; line-height:1.6; color:var(--text-secondary); font-size:0.88rem;\">\n  Le barème et le calcul de ces émoluments sont régis par les <strong>Art. 9 et 10 de l'ordonnance du 7 décembre 1992 sur l'Inspection fédérale des installations à courant fort (O-ESTI — RS 734.24)</strong>. Sont notamment facturés au temps consacré ou au forfait : l'octroi des autorisations d'installer et de contrôler, les examens professionnels d'admission et les contrôles d'office ordonnés en cas de défaillance d'un propriétaire.\n  </p>\n</div>"
                      },
                      {
                              "title": "2. Art. 42 — Dispositions pénales (Renvoi à l'Art. 55 al. 3 LIE)",
                              "text": "<div class=\"legal-ref-badge\">🔎 RS 734.27 — Art. 42 • Sanctions pénales</div>\n<p style=\"margin-bottom:0.75rem; line-height:1.6; color:var(--text-secondary);\">\nL'<strong>Art. 42 OIBT</strong> énumère limitativement les infractions punies des peines prévues à l'<strong>Art. 55 al. 3 LIE (amende pénale jusqu'à 100 000 CHF)</strong> :\n</p>\n<div class=\"ocfo-density-table-wrap\" style=\"margin-bottom:0.85rem;\">\n  <table class=\"ocfo-density-table\">\n    <thead>\n      <tr>\n        <th style=\"width:20%;\">Infraction (Art. 42)</th>\n        <th style=\"width:50%;\">Comportement punissable</th>\n        <th style=\"width:30%;\">Base légale liée</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong>Let. a</strong></td>\n        <td>Exécuter des travaux d'installation sans posséder l'autorisation requise.</td>\n        <td>Violation de l'Art. 6 OIBT</td>\n      </tr>\n      <tr>\n        <td><strong>Let. b</strong></td>\n        <td>Exécuter des contrôles d'installations sans posséder l'autorisation requise.</td>\n        <td>Violation de l'Art. 26 al. 2 OIBT</td>\n      </tr>\n      <tr>\n        <td><strong>Let. c ch. 1</strong></td>\n        <td>Ne pas respecter les prescriptions concernant l'organisation de l'entreprise (taux d'occupation, absence de personne du métier).</td>\n        <td>Violation des Art. 10 et 10a</td>\n      </tr>\n      <tr>\n        <td><strong>Let. c ch. 2</strong></td>\n        <td>Contrevenir aux prescriptions concernant le recours à d'autres entreprises et à des particuliers (sous-traitance opaque).</td>\n        <td>Violation de l'Art. 10b</td>\n      </tr>\n      <tr>\n        <td><strong>Let. c ch. 3</strong></td>\n        <td><strong>Prête-nom :</strong> annoncer des travaux à réaliser par des personnes non intégrées dans l'entreprise ou achever de tels travaux par la délivrance consécutive d'un rapport de sécurité de complaisance (révision 2024).</td>\n        <td>Interdiction de couverture frauduleuse</td>\n      </tr>\n      <tr>\n        <td><strong>Let. c ch. 4</strong></td>\n        <td>Négliger d'élaborer le rapport de sécurité ou de le remettre au propriétaire dans les délais requis.</td>\n        <td>Violation de l'Art. 24</td>\n      </tr>\n      <tr>\n        <td><strong>Let. c ch. 5</strong></td>\n        <td>Négliger d'effectuer les contrôles prescrits ou les effectuer de façon gravement incorrecte.</td>\n        <td>Violation des Art. 24 et 25</td>\n      </tr>\n      <tr>\n        <td><strong>Let. c ch. 6</strong></td>\n        <td>Violer l'obligation d'indépendance des contrôles (être juge et partie).</td>\n        <td>Violation de l'Art. 31</td>\n      </tr>\n      <tr>\n        <td><strong>Let. c ch. 7</strong></td>\n        <td>Remettre au propriétaire des installations électriques qui présentent des défauts dangereux.</td>\n        <td>Violation de l'Art. 3</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n<div class=\"ocfo-summary-box\">\n  <div class=\"box-title\">📌 À RETENIR</div>\n  La poursuite pénale relève du Droit pénal administratif (DPA) sous la compétence de l'OFEN et de l'Inspection, et peut être engagée contre l'électricien, le contrôleur complaisant, mais aussi contre le chef d'entreprise.\n</div>"
                      }
              ],
              "practicalExample": {
                      "title": "Cas concret : Signer un RS pour un ami qui a fait son installation lui-même",
                      "text": "Un électricien titulaire d'une autorisation qui signe un rapport de sécurité (RS) pour des travaux qu'il n'a pas exécutés ni surveillés directement commet l'infraction pénale de l'Art. 42 let. c ch. 3 OIBT (prête-nom). Il s'expose à une lourde amende pénale ainsi qu'au retrait immédiat de son autorisation d'installer par l'ESTI."
              },
              "importantPoint": {
                      "title": "Double sanction administrative et pénale",
                      "text": "Une infraction à l'OIBT entraîne non seulement une condamnation pénale (amende pouvant aller jusqu'à 100 000 CHF), mais également une sanction administrative de révocation temporaire ou définitive de l'autorisation d'exercer prononcée par l'ESTI."
              },
              "synthesis": "L'ESTI facture ses actes selon l'ordonnance sur les émoluments. Toute violation délibérée ou par négligence aux devoirs d'autorisation, d'exécution ou de contrôle est passible d'amendes pénales selon l'Art. 42 OIBT et la LIE.",
              "quiz": [
                      {
                              "question": "1. Selon quelle loi fondamentale les infractions énumérées à l'Art. 42 OIBT sont-elles punies ?",
                              "options": [
                                      "Le code de la route suisse",
                                      "L'Art. 55 al. 3 de la Loi fédérale sur les installations électriques (LIE — RS 734.0)",
                                      "La loi sur les banques",
                                      "Le droit ecclésiastique cantonal"
                              ],
                              "correctAnswer": 1,
                              "explanation": "L'Art. 42 OIBT débute par la mention expresse : 'Est puni selon l’art. 55, al. 3, LIE quiconque...'.",
                              "articleRef": "OIBT — Art. 42"
                      },
                      {
                              "question": "2. Que sanctionne expressément l'Art. 42 let. c ch. 3 OIBT (mis à jour en 2024) ?",
                              "options": [
                                      "Le fait d'utiliser un véhicule d'entreprise non lavé",
                                      "Le fait d'annoncer des travaux réalisés par des personnes non intégrées dans l'entreprise ou d'achever de tels travaux par la délivrance d'un rapport de sécurité de complaisance (prête-nom)",
                                      "Le fait de commander du matériel électrique en ligne",
                                      "Le port d'un casque de chantier bleu au lieu de blanc"
                              ],
                              "correctAnswer": 1,
                              "explanation": "L'Art. 42 let. c ch. 3 OIBT incrimine très précisément la pratique du prête-nom et la couverture de travaux non encadrés par la remise d'un rapport de sécurité.",
                              "articleRef": "OIBT — Art. 42 let. c ch. 3"
                      },
                      {
                              "question": "3. Selon quel texte réglementaire l'Inspection perçoit-elle ses émoluments administratifs selon l'Art. 41 OIBT ?",
                              "options": [
                                      "L'ordonnance sur l'Inspection fédérale des installations à courant fort (RS 734.24)",
                                      "Le barème des douanes suisses",
                                      "Le tarif postal prioritaire",
                                      "Le règlement communal de voirie"
                              ],
                              "correctAnswer": 0,
                              "explanation": "L'Art. 41 OIBT renvoie expressément aux Art. 9 et 10 de l'ordonnance du 7 décembre 1992 sur l'Inspection fédérale des installations à courant fort (RS 734.24).",
                              "articleRef": "OIBT — Art. 41"
                      },
                      {
                              "question": "4. Le fait de violer l'obligation d'indépendance des contrôles (Art. 31) constitue-t-il une infraction pénale selon l'OIBT ?",
                              "options": [
                                      "Non, c'est une simple maladresse administrative sans conséquence",
                                      "Oui, c'est une infraction expressément punissable au sens de l'Art. 42 let. c ch. 6 OIBT",
                                      "Uniquement si l'amende dépasse 1 million de francs",
                                      "Seulement si l'installation a pris feu"
                              ],
                              "correctAnswer": 1,
                              "explanation": "L'Art. 42 let. c ch. 6 OIBT punit explicitement quiconque contrevient aux obligations en ne respectant pas l'obligation d'indépendance des contrôles (art. 31).",
                              "articleRef": "OIBT — Art. 42 let. c ch. 6"
                      }
              ],
              "prevLessonId": "rs-734-27-lecon-4",
              "nextLessonId": "rs-734-27-lecon-6"
      },

      {
              "id": "rs-734-27-lecon-6",
              "routeId": "rs-734-27/lecon-6",
              "moduleId": "A",
              "parcoursId": "rs-734-27",
              "lessonNumber": 6,
              "totalLessons": 7,
              "code": "RS 734.27 — Leçon 6",
              "title": "Chapitre 6 : Dispositions finales",
              "subtitle": "Abrogation du droit de 1989, dispositions transitoires (Art. 44 al. 1-2 abrogés, Art. 44a révision 2017) et entrée en vigueur (Art. 43 à 45)",
              "articlesRange": "Art. 43 à 45",
              "status": "Disponible",
              "duration": "8 min",
              "tag": "Ordonnance fédérale",
              "xpReward": 35,
              "objective": "Comprendre l'articulation transitoire de l'OIBT : abrogation de l'ancien droit de 1989, validité des attestations de personnes du métier, maintien visible des alinéas abrogés 44 al. 1 et 2, dispositions transitoires spécifiques de la réforme du 23 août 2017 (Art. 44a) et entrée en vigueur au 1er janvier 2002.",
              "introduction": "Le <strong>Chapitre 6 de l'OIBT (Art. 43 à 45)</strong> clôt l'ordonnance par ses clauses d'exécution, d'abrogation et de transition. Conformément aux exigences de rigueur réglementaire de la Confédération, il assure la continuité des droits acquis sous l'empire de l'ancienne ordonnance du 6 septembre 1989 tout en organisant les transitions professionnelles. Il intègre également l'important <strong>Art. 44a</strong> issu de la révision du 23 août 2017, régissant la reconnaissance des règlements d'examen de l'EIT.swiss et l'adaptation organisationnelle des entreprises d'installation.",
              "contentSections": [
                      {
                              "title": "1. Art. 43 — Abrogation du droit en vigueur",
                              "text": "<div class=\"legal-ref-badge\">🔎 RS 734.27 — Art. 43 • Abrogation de l'ancien droit</div>\n<p style=\"margin-bottom:0.75rem; line-height:1.6; color:var(--text-secondary);\">\nL'<strong>Art. 43 OIBT</strong> prononce l'abrogation formelle du droit antérieur :\n</p>\n<blockquote style=\"margin:0 0 0.85rem 1rem; padding-left:0.75rem; border-left:3px solid var(--primary-accent); color:var(--text-secondary); font-style:italic;\">\n« L’ordonnance du 6 septembre 1989 sur les installations électriques à basse tension est abrogée. »\n</blockquote>\n<p style=\"margin-bottom:0.75rem; line-height:1.6; color:var(--text-secondary);\">\nCette abrogation a marqué le passage historique de l'ancien système de concessions délivrées par les régies électriques locales à un <strong>régime d'autorisations fédérales unifié</strong> sous la surveillance de l'Inspection fédérale (ESTI).\n</p>"
                      },
                      {
                              "title": "2. Art. 44 — Dispositions transitoires initiales",
                              "text": "<div class=\"legal-ref-badge\">🔎 RS 734.27 — Art. 44 • Clauses transitoires</div>\n<p style=\"margin-bottom:0.75rem; line-height:1.6; color:var(--text-secondary);\">\nFidèlement à la source officielle, le texte de l'Art. 44 présente la structure suivante :\n</p>\n<div class=\"ocfo-highlight-card\" style=\"margin-bottom:0.85rem;\">\n  <div class=\"card-title\">📜 Statut visible des alinéas 1 et 2 (Art. 44 OIBT)</div>\n  <p style=\"margin:0 0 0.5rem 0; line-height:1.6; color:var(--text-secondary); font-size:0.88rem;\">\n  <strong>Al. 1 et 2 … (Abrogés)</strong><br>\n  <span style=\"font-size:0.8rem; color:var(--text-muted);\">Note officielle 74 : Abrogés par le ch. IV 24 de l’O du 22 août 2007 relative à la mise à jour formelle du droit fédéral, avec effet au 1er janvier 2008 (RO 2007 4477).</span>\n  </p>\n</div>\n<ul style=\"margin:0 0 0.85rem 1.25rem; line-height:1.6; color:var(--text-secondary);\">\n  <li><strong>Al. 3 :</strong> Les attestations de personnes du métier délivrées selon l'ancien droit restent valables.</li>\n  <li><strong>Al. 4 :</strong> Les personnes habilitées à contrôler selon l'ancien droit ont pu poursuivre leurs activités pendant 2 ans au plus jusqu'à l'octroi de l'autorisation fédérale.</li>\n  <li><strong>Al. 5 :</strong> L'Inspection a établi les registres des détenteurs d'autorisations d'installer et de contrôler dans les deux ans suivant l'entrée en vigueur.</li>\n  <li><strong>Al. 6 & 7 :</strong> Maintien des périodes de contrôle en cours (dans les 5 ans pour les périodes de 20 ans, dans les 2 ans pour les périodes inférieures à 20 ans) sous peine de contrôle d'office aux frais des exploitants retardataires.</li>\n  <li><strong>Al. 8 :</strong> Mesure transitoire de 6 mois pour les exploitants de réseau pour adapter leurs structures de contrôle indépendant.</li>\n</ul>"
                      },
                      {
                              "title": "3. Art. 44a — Dispositions transitoires relatives à la modification du 23 août 2017",
                              "text": "<div class=\"legal-ref-badge\">🔎 RS 734.27 — Art. 44a • Réforme 2017 / 2018</div>\n<p style=\"margin-bottom:0.75rem; line-height:1.6; color:var(--text-secondary);\">\nIntroduit lors de la refonte majeure de 2017 (en vigueur le 1er janvier 2018), l'<strong>Art. 44a OIBT</strong> précise :\n</p>\n<ul style=\"margin:0 0 0.85rem 1.25rem; line-height:1.6; color:var(--text-secondary);\">\n  <li><strong>Al. 1 — Maintien des attestations professionnelles :</strong> Les attestations de personne du métier et les autorisations de contrôler délivrées sur la base des règlements de l'association professionnelle <strong>EIT.swiss</strong> (règlements d'examens professionnels de 2003 et examen pratique de 2009) restent intégralement valables.</li>\n  <li><strong>Al. 2 — Délai d'adaptation des entreprises (3 ans) :</strong> Les entreprises déjà titulaires d'une autorisation ont disposé d'un délai de <strong>trois ans</strong> pour adapter leur organisation interne aux exigences accrues de l'Art. 9.</li>\n  <li><strong>Al. 3 — Électriciens de montage CFC antérieurs à 2015 :</strong> Les personnes titulaires d'un CFC d'électricien de montage ayant débuté leur formation avant 2015 ne peuvent mettre en service des installations (Art. 10a al. 2) que si elles justifient d'<strong>une année de pratique</strong> sous la surveillance d'une personne du métier et d'une formation complémentaire définie par EIT.swiss habilitant à la première vérification.</li>\n</ul>"
                      },
                      {
                              "title": "4. Art. 45 — Entrée en vigueur de l'OIBT",
                              "text": "<div class=\"legal-ref-badge\">🔎 RS 734.27 — Art. 45 • Date d'effet</div>\n<blockquote style=\"margin:0 0 0.85rem 1rem; padding-left:0.75rem; border-left:3px solid var(--primary-accent); color:var(--text-secondary); font-style:italic;\">\n« La présente ordonnance entre en vigueur le 1er janvier 2002. »\n</blockquote>\n<p style=\"margin-bottom:0.75rem; line-height:1.6; color:var(--text-secondary);\">\nL'ordonnance du 7 novembre 2001 est en vigueur depuis le <strong>1<sup>er</sup> janvier 2002</strong>, et a fait l'objet de mises à jour successives jusqu'à son état officiel actuel au <strong>31 octobre 2025</strong> (intégrant notamment l'erratum RO 2025 671).\n</p>"
                      }
              ],
              "practicalExample": {
                      "title": "Cas concret : Reconnaissance des maîtrises fédérales antérieures à 2018",
                      "text": "Un installateur ayant obtenu sa maîtrise fédérale (diplôme d'installateur-électricien) sous l'ancien règlement de l'EIT.swiss conserve l'intégralité de ses prérogatives de personne du métier en vertu de l'Art. 44a al. 1 OIBT, sans avoir à repasser de nouvel examen pratique."
              },
              "importantPoint": {
                      "title": "Préservation des alinéas abrogés",
                      "text": "Conformément à la rigueur de légistique fédérale, les alinéas 1 et 2 de l'Art. 44 sont mentionnés comme abrogés par l'ordonnance du 22 août 2007 (RO 2007 4477). Ils ne doivent jamais être supprimés silencieusement des textes officiels."
              },
              "synthesis": "L'OIBT 2001 abroge le texte de 1997. Les alinéas 1 et 2 de l'Art. 44 ont été formellement abrogés en 2007 ('1 et 2 …'). L'Art. 44a encadre les droits acquis et délais de transition de la révision de 2017.",
              "quiz": [
                      {
                              "question": "1. Quelle ordonnance antérieure a été formellement abrogée par l'Art. 43 de l'OIBT ?",
                              "options": [
                                      "L'ordonnance du 6 septembre 1989 sur les installations électriques à basse tension",
                                      "La loi sur les chemins de fer de 1872",
                                      "L'ordonnance sur la poste de 1910",
                                      "La loi sur le blé de 1932"
                              ],
                              "correctAnswer": 0,
                              "explanation": "L'Art. 43 OIBT énonce explicitement que l'ordonnance du 6 septembre 1989 sur les installations électriques à basse tension est abrogée.",
                              "articleRef": "OIBT — Art. 43"
                      },
                      {
                              "question": "2. Quel est le statut juridique des alinéas 1 et 2 de l'Art. 44 OIBT dans la source officielle ?",
                              "options": [
                                      "Ils sont applicables à compter de l'an 2050",
                                      "Ils sont expressément abrogés depuis le 1er janvier 2008 (RO 2007 4477) et notés « 1 et 2 … »",
                                      "Ils ont été transférés dans la Constitution fédérale",
                                      "Ils ne concernent que le canton du Jura"
                              ],
                              "correctAnswer": 1,
                              "explanation": "Les alinéas 1 et 2 de l'Art. 44 OIBT ont été abrogés par l'ordonnance du 22 août 2007 avec effet au 1er janvier 2008, et figurent sous la forme '1 et 2 …' dans le recueil officiel.",
                              "articleRef": "OIBT — Art. 44 al. 1 et 2"
                      },
                      {
                              "question": "3. Quel délai d'adaptation a été imparti aux entreprises pour se conformer à l'Art. 9 selon l'Art. 44a al. 2 OIBT (réforme 2017) ?",
                              "options": [
                                      "1 mois",
                                      "Trois ans à compter de l'entrée en vigueur de la modification",
                                      "Vingt-cinq ans",
                                      "Aucun délai n'a été accordé"
                              ],
                              "correctAnswer": 1,
                              "explanation": "L'Art. 44a al. 2 OIBT précise que les entreprises titulaires d'une autorisation devaient adapter leur organisation dans un délai de trois ans.",
                              "articleRef": "OIBT — Art. 44a al. 2"
                      },
                      {
                              "question": "4. Quelle est la date initiale d'entrée en vigueur de l'OIBT fixée à l'Art. 45 ?",
                              "options": [
                                      "1er janvier 1902",
                                      "1er janvier 2002",
                                      "31 octobre 2025",
                                      "1er août 1914"
                              ],
                              "correctAnswer": 1,
                              "explanation": "L'Art. 45 OIBT fixe l'entrée en vigueur au 1er janvier 2002.",
                              "articleRef": "OIBT — Art. 45"
                      }
              ],
              "prevLessonId": "rs-734-27-lecon-5",
              "nextLessonId": "rs-734-27-lecon-7"
      },

      {
              "id": "rs-734-27-lecon-7",
              "routeId": "rs-734-27/lecon-7",
              "moduleId": "A",
              "parcoursId": "rs-734-27",
              "lessonNumber": 7,
              "totalLessons": 7,
              "code": "RS 734.27 — Leçon 7",
              "title": "Annexe : Contrôles périodiques",
              "subtitle": "Périodicités officielles (1 an, 3 ans, 5 ans, 10 ans, 20 ans), organismes accrédités, organes indépendants et cas spéciaux (Ch. 1 à 4)",
              "articlesRange": "Annexe (ch. 1 à 4)",
              "status": "Disponible",
              "duration": "15 min",
              "tag": "Annexe OIBT",
              "xpReward": 40,
              "objective": "Maîtriser exhaustivement la table des périodicités de contrôle de l'Annexe OIBT : identifier les locaux à 1, 3, 5, 10 ou 20 ans, savoir quand recourir à un organisme accrédité (ch. 1) ou à un organe indépendant (ch. 2), appliquer la clause de vente immobilière (ch. 3) et la règle des installations de production d'énergie (ch. 4).",
              "introduction": "L'<strong>Annexe officielle de l'OIBT (RS 734.27)</strong>, dans sa teneur issue de la révision du 23 août 2017 et mise à jour jusqu'à l'<strong>erratum officiel du 31 octobre 2025 (RO 2025 671)</strong>, est l'un des documents les plus consultés de l'électrotechnique suisse. Elle détermine avec précision la fréquence impérative à laquelle chaque type de bâtiment et d'installation doit être réexaminé. Elle s'articule rigoureusement en <strong>quatre chapitres officiels</strong> que cette leçon présente dans leur intégralité sans fragmentation arbitraire.",
              "contentSections": [
                      {
                              "title": "1. Chapitre 1 : Organismes d’inspection accrédités (Installations spéciales, art. 32 al. 2)",
                              "text": "<div class=\"legal-ref-badge\">🔎 RS 734.27 — Annexe Ch. 1 • Organismes accrédités</div>\n<p style=\"margin-bottom:0.75rem; line-height:1.6; color:var(--text-secondary);\">\nLes installations spéciales à haut risque technique ou sécuritaire ne peuvent être contrôlées que par un <strong>organisme d'inspection accrédité (norme ISO/CEI 17020)</strong> selon les périodicités suivantes :\n</p>\n<div class=\"ocfo-density-table-wrap\" style=\"margin-bottom:0.85rem;\">\n  <table class=\"ocfo-density-table\">\n    <thead>\n      <tr>\n        <th style=\"width:22%;\">Périodicité</th>\n        <th style=\"width:15%;\">Ch. Annexe</th>\n        <th style=\"width:63%;\">Installations électriques assujetties</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong>Contrôle annuel<br>(1 an)</strong></td>\n        <td>1.1.1 à 1.1.6</td>\n        <td>\n          • <strong>1.1.1 :</strong> Installations de transport par conduites sous surveillance fédérale.<br>\n          • <strong>1.1.2 :</strong> Ouvrages de munitions et dépôts de carburants militaires classifiés.<br>\n          • <strong>1.1.3 :</strong> <strong>Locaux à affectation médicale du groupe 2</strong> (salles d'opération, soins intensifs).<br>\n          • <strong>1.1.4 :</strong> Locaux de fabrication, traitement ou entreposage d'explosifs ou pyrotechnie.<br>\n          • <strong>1.1.5 :</strong> Installations électriques des mines.<br>\n          • <strong>1.1.6 :</strong> Installations construites, modifiées ou remises en état par le titulaire d'une autorisation pour installations propres à l'entreprise (art. 13).\n        </td>\n      </tr>\n      <tr>\n        <td><strong>Contrôle tous les 3 ans</strong></td>\n        <td>1.2</td>\n        <td>\n          • <strong>1.2 :</strong> Installations situées dans les <strong>zones de protection contre les explosions 0 et 20 ainsi que 1 et 21</strong> définies par la SUVA (à l'exception des stations-service et ateliers de réparation de véhicules, relevant du ch. 2.2).\n        </td>\n      </tr>\n      <tr>\n        <td><strong>Contrôle tous les 5 ans</strong></td>\n        <td>1.3.1 à 1.3.7</td>\n        <td>\n          • <strong>1.3.1 :</strong> Routes nationales de 1re et 2e classe (sécurité du trafic et exploitation).<br>\n          • <strong>1.3.2 :</strong> Bâtiments militaires classifiés non visés au ch. 1.1.<br>\n          • <strong>1.3.3 :</strong> Dépôts de carburants en zones de protection explosion 2 et 22 (SUVA).<br>\n          • <strong>1.3.4 :</strong> Installations ferroviaires non spécifiques au rail reliées à la terre ferroviaire (tunnels, ateliers, lavage).<br>\n          • <strong>1.3.5 :</strong> Installations construites/modifiées sous autorisation limitée (art. 14 et 15).<br>\n          • <strong>1.3.6 :</strong> <strong>Locaux médicaux du groupe 1</strong> (sauf cabinets dentaires et physiothérapie isolés hors clinique).<br>\n          • <strong>1.3.7 :</strong> Téléphonie mobile sur mâts à haute tension alimentée par le réseau général.\n        </td>\n      </tr>\n      <tr>\n        <td><strong>Contrôle tous les 10 ans</strong></td>\n        <td>1.4.1 à 1.4.4</td>\n        <td>\n          • <strong>1.4.1 :</strong> Constructions de la protection civile équipées de production d'énergie ou protégées contre l'IEMN (impulsion électromagnétique nucléaire).<br>\n          • <strong>1.4.2 :</strong> Bateaux destinés au transport commercial de personnes ou de marchandises.<br>\n          • <strong>1.4.3 :</strong> Installations à haute tension alimentées par des installations électriques (filtres, sites d'essai, générateurs d'ozone, sauf néons et rayons X non médicaux).<br>\n          • <strong>1.4.4 :</strong> Installations d'exploitation ferroviaire non spécifiques reliées à la terre non visées au 1.3.4.\n        </td>\n      </tr>\n    </tbody>\n  </table>\n</div>"
                      },
                      {
                              "title": "2. Chapitre 2 : Organes de contrôle indépendants (Du contrôle annuel aux 20 ans)",
                              "text": "<div class=\"legal-ref-badge\">🔎 RS 734.27 — Annexe Ch. 2 • Organes de contrôle indépendants</div>\n<p style=\"margin-bottom:0.75rem; line-height:1.6; color:var(--text-secondary);\">\nLes installations courantes sont contrôlées par des <strong>organes de contrôle indépendants</strong> selon les périodicités suivantes :\n</p>\n<div class=\"ocfo-density-table-wrap\" style=\"margin-bottom:0.85rem;\">\n  <table class=\"ocfo-density-table\">\n    <thead>\n      <tr>\n        <th style=\"width:20%;\">Périodicité</th>\n        <th style=\"width:15%;\">Ch. Annexe</th>\n        <th style=\"width:65%;\">Installations électriques assujetties</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong>Contrôle annuel<br>(1 an)</strong></td>\n        <td>2.1</td>\n        <td>\n          • <strong>2.1 :</strong> <strong>Chantiers</strong> et <strong>marchés</strong> (installations foraines, foires, événements temporaires).\n        </td>\n      </tr>\n      <tr>\n        <td><strong>Contrôle tous les 3 ans</strong></td>\n        <td>2.2</td>\n        <td>\n          • <strong>2.2 :</strong> <strong>Stations-service</strong> et <strong>ateliers de réparation de véhicules</strong> situés dans les zones de protection explosion 0, 20, 1, 21 définies par la SUVA (CNA) ainsi qu'en zones 2 et 22.\n        </td>\n      </tr>\n      <tr>\n        <td><strong>Contrôle tous les 5 ans</strong></td>\n        <td>2.3.1 à 2.3.11</td>\n        <td>\n          • <strong>2.3.1 :</strong> Scènes de théâtre.<br>\n          • <strong>2.3.2 :</strong> Locaux exposés à des substances corrosives.<br>\n          • <strong>2.3.3 :</strong> <strong>Stations de recharge de véhicules électriques situées sur le domaine public</strong>.<br>\n          • <strong>2.3.4 :</strong> Locaux médicaux des groupes 0 et 1 non contrôlés sous 1.3.6.<br>\n          • <strong>2.3.5 :</strong> Ouvrages souterrains (tunnels et cavernes).<br>\n          • <strong>2.3.6 :</strong> Locaux industriels et commerciaux.<br>\n          • <strong>2.3.7 :</strong> Laboratoires ou locaux d'essai industriels, commerciaux, scolaires.<br>\n          • <strong>2.3.8 :</strong> <strong>Locaux recevant un grand nombre de personnes :</strong> grands magasins ou centres de bricolage <strong>surface de vente > 1200 m²</strong>, cinémas, hôtels, dancings, EMS, garderies, hôpitaux, casernes, établissements scolaires et hautes écoles.<br>\n          • <strong>2.3.9 :</strong> <strong>Petites entreprises de restauration :</strong> bistros, cafés, take-away (&lt; 1200 m² et ≤ 300 personnes).<br>\n          • <strong>2.3.10 :</strong> Terrains de camping et ports de plaisance.<br>\n          • <strong>2.3.11 :</strong> Installations comportant des éléments avec <strong>mise au neutre selon le schéma III</strong> (ancien TN-C généralisé).\n        </td>\n      </tr>\n      <tr>\n        <td><strong>Contrôle tous les 10 ans</strong></td>\n        <td>2.4.1 à 2.4.13</td>\n        <td>\n          • <strong>2.4.1 :</strong> Locaux humides à usage commercial.<br>\n          • <strong>2.4.2 :</strong> Locaux à usage commercial présentant un danger d'incendie.<br>\n          • <strong>2.4.3 :</strong> Ateliers commerciaux.<br>\n          • <strong>2.4.4 :</strong> Locaux de vente non soumis au ch. 2.3.8 ni 2.3.9.<br>\n          • <strong>2.4.5 :</strong> <strong>Immeubles de bureaux</strong>.<br>\n          • <strong>2.4.6 :</strong> Églises.<br>\n          • <strong>2.4.7 :</strong> Arsenaux.<br>\n          • <strong>2.4.8 :</strong> <strong>Exploitations agricoles</strong>.<br>\n          • <strong>2.4.9 :</strong> Constructions de protection civile non soumises au 1.4.1.<br>\n          • <strong>2.4.10 :</strong> Bateaux de plaisance.<br>\n          • <strong>2.4.11 :</strong> <strong>…</strong> <span style=\"font-size:0.8rem; color:var(--text-muted);\">(Alinéa abrogé, strictement maintenu comme tel)</span>.<br>\n          • <strong>2.4.12 :</strong> Routes nationales 1re et 2e classe non soumises au 1.3.1.<br>\n          • <strong>2.4.13 :</strong> Téléphonie mobile sur bâtiments alimentée par le réseau général.\n        </td>\n      </tr>\n      <tr>\n        <td><strong>Contrôle tous les 20 ans</strong></td>\n        <td>2.5</td>\n        <td>\n          • <strong>2.5 :</strong> <strong>Toutes les autres installations électriques</strong> (principalement les <strong>logements, appartements et maisons individuelles privées</strong>).\n        </td>\n      </tr>\n    </tbody>\n  </table>\n</div>"
                      },
                      {
                              "title": "3. Chapitre 3 : Installations soumises au contrôle tous les 10 ou 20 ans (Vente immobilière)",
                              "text": "<div class=\"legal-ref-badge\">🔎 RS 734.27 — Annexe Ch. 3 • Changement de propriétaire</div>\n<blockquote style=\"margin:0 0 0.85rem 1rem; padding-left:0.75rem; border-left:3px solid var(--primary-accent); color:var(--text-secondary); font-style:italic;\">\n« Les installations électriques soumises au contrôle tous les 10 ou 20 ans doivent en outre être contrôlées à chaque changement de propriétaire, si le dernier contrôle effectué date de cinq ans. »\n</blockquote>\n<div class=\"ocfo-highlight-card\" style=\"margin-bottom:0.85rem;\">\n  <div class=\"card-title\">🏡 Règle pratique de la transaction immobilière</div>\n  <p style=\"margin:0; line-height:1.6; color:var(--text-secondary); font-size:0.88rem;\">\n  Lorsqu'une maison d'habitation (périodicité de 20 ans) est vendue, le notaire ou le gestionnaire de réseau vérifie la date du dernier RS. Si ce dernier a plus de 5 ans (ex. 6 ans), un contrôle complet par un organe indépendant doit être ordonné aux frais des parties avant ou immédiatement après la transaction.\n  </p>\n</div>"
                      },
                      {
                              "title": "4. Chapitre 4 : Installations de production d’énergie",
                              "text": "<div class=\"legal-ref-badge\">🔎 RS 734.27 — Annexe Ch. 4 • Photovoltaïque & Production</div>\n<blockquote style=\"margin:0 0 0.85rem 1rem; padding-left:0.75rem; border-left:3px solid var(--primary-accent); color:var(--text-secondary); font-style:italic;\">\n« Les installations de production d’énergie reliées ou non à un réseau de distribution à basse tension sont soumises à la même périodicité de contrôle que les installations électriques de l’objet auxquelles l’installation est raccordée. »\n</blockquote>\n<div class=\"ocfo-summary-box\">\n  <div class=\"box-title\">☀️ Exemple pratique</div>\n  Une installation solaire photovoltaïque installée sur le toit d'une villa familiale (objet à 20 ans) suit une périodicité de contrôle de 20 ans. La même installation photovoltaïque posée sur le toit d'un grand magasin de plus de 1200 m² (objet soumis au ch. 2.3.8) doit être contrôlée tous les <strong>5 ans</strong> !\n</div>"
                      }
              ],
              "practicalExample": {
                      "title": "Cas concret : Quelle périodicité pour un café-restaurant de 80 places ?",
                      "text": "Un café de 80 places et moins de 1200 m² relève du Ch. 2.3.9 de l'Annexe OIBT ('petites entreprises de restauration telles que bistros, cafés, take-away... pouvant accueillir 300 personnes au maximum'). Sa périodicité légale est donc de 5 ans (et non de 20 ans comme pour un logement)."
              },
              "importantPoint": {
                      "title": "La borne des 1200 m² et 300 personnes",
                      "text": "Le seuil de 1200 m² de surface de vente sépare les grands magasins du Ch. 2.3.8 des petits commerces. Attention : les deux sont désormais contrôlés tous les 5 ans pour les restaurants (2.3.9), mais les locaux commerciaux simples ne présentant pas de risque particulier sont à 10 ans (2.4.4)."
              },
              "synthesis": "Les périodicités sont fixées par affectation : 1 an (chantiers, hôpitaux groupe 2), 3 ans (zones explosion, stations-service), 5 ans (bornes de recharge publiques, magasins > 1200 m²), 10 ans (bureaux, fermes, alinéa 2.4.11 … abrogé maintenu), 20 ans (logements). Changement de propriétaire : contrôle obligatoire si le dernier RS date de plus de 5 ans. Le photovoltaïque suit la périodicité de l'objet hôte.",
              "quiz": [
                      {
                              "question": "1. Quelle est la périodicité de contrôle obligatoire pour les installations de chantiers selon le Ch. 2.1 de l'Annexe OIBT ?",
                              "options": [
                                      "Tous les 20 ans",
                                      "Tous les 5 ans",
                                      "Contrôle annuel (chaque année)",
                                      "Aucun contrôle n'est obligatoire sur un chantier"
                              ],
                              "correctAnswer": 2,
                              "explanation": "Le Ch. 2.1 de l'Annexe OIBT dispose que les installations électriques des chantiers et des marchés sont soumises au contrôle annuel.",
                              "articleRef": "Annexe OIBT — Ch. 2.1"
                      },
                      {
                              "question": "2. Quelle est la périodicité de contrôle pour les locaux à affectation médicale du groupe 2 (salles d'opération) selon le Ch. 1.1.3 ?",
                              "options": [
                                      "Contrôle annuel (1 an) par un organisme d'inspection accrédité",
                                      "Contrôle tous les 10 ans par le médecin-chef",
                                      "Contrôle tous les 20 ans par l'électricien du village",
                                      "Contrôle tous les 5 ans sans accréditation"
                              ],
                              "correctAnswer": 0,
                              "explanation": "Le Ch. 1.1.3 de l'Annexe OIBT classe les locaux médicaux du groupe 2 sous contrôle annuel (1 an) obligatoire par un organisme d'inspection accrédité.",
                              "articleRef": "Annexe OIBT — Ch. 1.1.3"
                      },
                      {
                              "question": "3. En cas de vente d'un logement (périodicité de 20 ans), à quelle condition un nouveau contrôle est-il exigé selon le Ch. 3 de l'Annexe OIBT ?",
                              "options": [
                                      "Si le dernier contrôle date de plus de 5 ans",
                                      "Uniquement si l'acheteur a moins de 30 ans",
                                      "Si le dernier contrôle date de plus de 19 ans seulement",
                                      "Aucun contrôle n'est jamais requis lors d'une vente"
                              ],
                              "correctAnswer": 0,
                              "explanation": "Le Ch. 3 de l'Annexe OIBT impose un nouveau contrôle à chaque changement de propriétaire si le dernier contrôle effectué date de cinq ans.",
                              "articleRef": "Annexe OIBT — Ch. 3"
                      },
                      {
                              "question": "4. Quelle est la périodicité de contrôle d'une installation photovoltaïque selon le Ch. 4 de l'Annexe OIBT ?",
                              "options": [
                                      "Toujours 1 an indépendamment du lieu d'implantation",
                                      "La même périodicité de contrôle que l'objet auquel l'installation est raccordée",
                                      "Toujours 50 ans avec garantie constructeur",
                                      "Elle n'est soumise à aucun contrôle périodique"
                              ],
                              "correctAnswer": 1,
                              "explanation": "Le Ch. 4 de l'Annexe OIBT dispose que les installations de production d'énergie sont soumises à la même périodicité de contrôle que les installations de l'objet auquel elles sont raccordées.",
                              "articleRef": "Annexe OIBT — Ch. 4"
                      }
              ],
              "prevLessonId": "rs-734-27-lecon-6",
              "nextLessonId": "rs-734-27-evaluation-finale"
      },

      {
              "id": "rs-734-27-evaluation-finale",
              "routeId": "rs-734-27/evaluation-finale",
              "moduleId": "A",
              "parcoursId": "rs-734-27",
              "isFinalEvaluation": true,
              "code": "RS 734.27 — EXAMEN",
              "title": "Évaluation finale — RS 734.27 (OIBT)",
              "subtitle": "Certification officielle sur les 7 leçons et l'Annexe des contrôles périodiques",
              "articlesRange": "Art. 1 à 45 et Annexe",
              "status": "Disponible",
              "duration": "25 min",
              "tag": "Évaluation officielle",
              "xpReward": 100,
              "objective": "Valider formellement la maîtrise intégrale de l'Ordonnance sur les installations électriques à basse tension (RS 734.27, état au 31 octobre 2025).",
              "introduction": "Cette <strong>évaluation finale officielle</strong> valide l'assimilation approfondie de l'<strong>Ordonnance sur les installations électriques à basse tension (OIBT — RS 734.27)</strong> dans son état officiel au 31 octobre 2025. Composée de <strong>16 questions à choix multiples</strong>, elle évalue rigoureusement votre compréhension des 7 leçons du programme : compétences de l'ESTI, régime de l'autorisation générale et des autorisations limitées, incompatibilités de contrôle (Art. 31), procédure du rapport de sécurité (RS), catalogue des infractions pénales (Art. 42) et tableau des périodicités de l'Annexe. Un score minimal de 75 % (12/16) est requis pour réussir la certification et obtenir le badge officiel ainsi que 100 XP.",
              "contentSections": [
                      {
                              "title": "Instructions pour l'examen de certification OIBT",
                              "text": "<div class=\"ocfo-legal-badge\">Examen officiel de certification • RS 734.27 OIBT</div>\n<p style=\"margin-bottom:0.75rem; line-height:1.6; color:var(--text-secondary);\">\nCette évaluation finale récapitule l'intégralité des <strong>7 leçons</strong> du module consacré à l'<strong>Ordonnance sur les installations à basse tension (OIBT — RS 734.27)</strong>, état au 31 octobre 2025.\n</p>\n<ul style=\"margin:0 0 0.85rem 1.25rem; line-height:1.6; color:var(--text-secondary);\">\n  <li><strong>Nombre de questions :</strong> 16 questions d'examen à choix unique.</li>\n  <li><strong>Couverture légale :</strong> Chapitres 1 à 6 de l'OIBT et l'intégralité de l'Annexe (ch. 1 à 4).</li>\n  <li><strong>Seuil de validation :</strong> 75 % de réponses exactes (12 sur 16).</li>\n  <li><strong>Récompense :</strong> 100 XP et attribution du badge « Expert RS 734.27 — OIBT ».</li>\n</ul>"
                      }
              ],
              "practicalExample": "",
              "importantPoint": "",
              "synthesis": "",
              "quiz": [
                      {
                              "question": "1. Quel texte réglementaire constitue la base légale supérieure dont découle l'OIBT (RS 734.27) ?",
                              "options": [
                                      "Le Code civil suisse (CCS)",
                                      "La Loi fédérale sur les installations électriques (LIE — RS 734.0, notamment ses Art. 1, 3 et 26)",
                                      "La Loi sur l'énergie atomique",
                                      "Le Règlement général des routes nationales"
                              ],
                              "correctAnswer": 1,
                              "explanation": "L'OIBT est une ordonnance d'exécution adoptée par le Conseil fédéral sur la base des délégations de compétence de la LIE (RS 734.0).",
                              "articleRef": "OIBT — Préambule & LIE Art. 3"
                      },
                      {
                              "question": "2. Jusqu'à quel point précis les installations intérieures s'étendent-elles selon l'Art. 2 al. 2 OIBT ?",
                              "options": [
                                      "Jusqu'au commutateur d'éclairage de l'entrée",
                                      "En aval du point de raccordement au réseau de distribution (coupe-surintensité général de l'immeuble)",
                                      "Jusqu'à la centrale de production hydraulique",
                                      "Aux seules lignes enterrées sous la chaussée"
                              ],
                              "correctAnswer": 1,
                              "explanation": "L'Art. 2 al. 2 OIBT définit les installations intérieures comme les installations situées en aval du point de raccordement au réseau de distribution.",
                              "articleRef": "OIBT — Art. 2 al. 2"
                      },
                      {
                              "question": "3. Qui est légalement tenu de maintenir l'installation électrique en état de sécurité permanent selon l'Art. 5 al. 1 OIBT ?",
                              "options": [
                                      "Le gestionnaire de réseau public",
                                      "Le propriétaire de l'installation (ou son représentant désigné)",
                                      "Le fabricant des câbles électriques",
                                      "L'électricien ayant posé la première prise 20 ans plus tôt"
                              ],
                              "correctAnswer": 1,
                              "explanation": "L'Art. 5 al. 1 OIBT pose le principe fondamental selon lequel c'est le propriétaire qui veille à ce que l'installation réponde en tout temps aux exigences de sécurité.",
                              "articleRef": "OIBT — Art. 5 al. 1"
                      },
                      {
                              "question": "4. Une entreprise peut-elle confier des travaux d'installation à du personnel temporaire selon l'Art. 10b OIBT ?",
                              "options": [
                                      "Non, le personnel temporaire est totalement prohibé dans le bâtiment",
                                      "Oui, pour autant qu'il soit qualifié selon l'Art. 10a et placé sous la surveillance effective de la personne du métier de l'entreprise titulaire",
                                      "Oui, sans aucune surveillance ni restriction",
                                      "Uniquement le week-end et la nuit"
                              ],
                              "correctAnswer": 1,
                              "explanation": "L'Art. 10b OIBT autorise le recours à du personnel de location de services à condition qu'il réponde aux qualifications professionnelles de l'Art. 10a et soit surveillé par la personne du métier.",
                              "articleRef": "OIBT — Art. 10b"
                      },
                      {
                              "question": "5. Quelle autorisation limitée permet à un chauffagiste de brancher une chaudière ou une pompe à chaleur selon l'OIBT ?",
                              "options": [
                                      "L'autorisation pour installations propres à l'entreprise (Art. 13)",
                                      "L'autorisation de raccordement selon l'Art. 15 OIBT",
                                      "L'autorisation générale d'installer selon l'Art. 7",
                                      "Le permis d'habiter délivré par la commune"
                              ],
                              "correctAnswer": 1,
                              "explanation": "L'Art. 15 OIBT régit l'autorisation de raccordement d'appareils et d'équipements électriques spécifiques.",
                              "articleRef": "OIBT — Art. 15"
                      },
                      {
                              "question": "6. Selon l'Art. 16 al. 2 et 3 OIBT, un propriétaire occupant son propre logement peut-il installer une prise monophasée sans autorisation, et quel contrôle s'applique ?",
                              "options": [
                                      "Non, c'est strictement interdit sous peine d'emprisonnement",
                                      "Oui, si le circuit est protégé par un DDR ≤ 30 mA (al. 2 let. a), mais l'installation doit obligatoirement être contrôlée par le titulaire d'une autorisation de contrôler qui remet le RS au propriétaire (al. 3)",
                                      "Oui, mais uniquement pour des prises en triphasé 400 V sans aucun contrôle",
                                      "Uniquement s'il a obtenu l'accord écrit préalable du Tribunal fédéral"
                              ],
                              "correctAnswer": 1,
                              "explanation": "Art. 16 al. 2 let. a et al. 3 OIBT : l'installation de prises sur un circuit terminal monophasé protégé par un DDR ≤ 30 mA est autorisée sans autorisation d'installer, mais elle doit obligatoirement faire l'objet d'un contrôle par le titulaire d'une autorisation de contrôler, qui remet le rapport de sécurité (RS) au propriétaire.",
                              "articleRef": "OIBT — Art. 16 al. 2 let. a & al. 3"
                      },
                      {
                              "question": "7. Dans quel délai toute modification des conditions d'une autorisation d'installer doit-elle être annoncée à l'Inspection selon l'Art. 19 al. 1 OIBT ?",
                              "options": [
                                      "Dans les deux semaines",
                                      "Dans les 6 mois",
                                      "Dans l'année civile",
                                      "Jamais"
                              ],
                              "correctAnswer": 0,
                              "explanation": "L'Art. 19 al. 1 OIBT impose au titulaire d'annoncer dans les deux semaines à l'Inspection toute modification des conditions d'autorisation.",
                              "articleRef": "OIBT — Art. 19 al. 1"
                      },
                      {
                              "question": "8. Quelle est la condition indispensable pour entreprendre des travaux sous tension (TST) selon l'Art. 22 OIBT ?",
                              "options": [
                                      "Travailler seul pour éviter de distraire ses collègues",
                                      "Avoir été formé pour les TST, disposer d'EPI appropriés et travailler en binôme (avec une 2e personne instruite présente en permanence)",
                                      "Ne porter aucun gant pour garder la sensibilité tactile",
                                      "Brancher l'installation sur une prise sans disjoncteur"
                              ],
                              "correctAnswer": 1,
                              "explanation": "L'Art. 22 al. 3 et 4 OIBT prescrit que les travaux sous tension exigent des personnes formées, des équipements de protection et la présence permanente d'au moins une deuxième personne instruite.",
                              "articleRef": "OIBT — Art. 22 al. 3 et 4"
                      },
                      {
                              "question": "9. Quel document l'installateur doit-il obligatoirement joindre au rapport de sécurité (RS) lors du contrôle final selon l'Art. 24 al. 2 OIBT ?",
                              "options": [
                                      "Le catalogue des tarifs du grossiste",
                                      "Le protocole de mesure consignant l'ensemble des essais et contrôles prescrits par la NIBT",
                                      "La photo d'identité de l'électricien",
                                      "Une attestation de non-faillite"
                              ],
                              "correctAnswer": 1,
                              "explanation": "L'Art. 24 al. 2 OIBT exige que les résultats du contrôle final soient consignés dans un protocole de mesure joint au rapport de sécurité.",
                              "articleRef": "OIBT — Art. 24 al. 2"
                      },
                      {
                              "question": "10. Selon l'Art. 31 OIBT, quelle est l'incompatibilité majeure régissant les organes de contrôle ?",
                              "options": [
                                      "Ils ne peuvent pas contrôler plus de 3 installations par jour",
                                      "Celui qui a participé à la conception, réalisation ou modification d'une installation ne peut pas effectuer son contrôle périodique ou de réception",
                                      "Ils doivent refuser les clients qui ne paient pas en espèces",
                                      "Ils ne peuvent contrôler que des installations situées à plus de 50 km de leur domicile"
                              ],
                              "correctAnswer": 1,
                              "explanation": "L'Art. 31 OIBT interdit de manière impérative à toute personne ayant participé à la pose ou modification d'une installation d'en faire le contrôle de réception ou périodique.",
                              "articleRef": "OIBT — Art. 31"
                      },
                      {
                              "question": "11. À qui le gestionnaire de réseau doit-il transmettre le dossier si un propriétaire ne donne pas suite aux sommations de contrôle périodique (Art. 40 al. 3) ?",
                              "options": [
                                      "À l'Inspection fédérale des installations à courant fort (ESTI)",
                                      "Au service des impôts communal",
                                      "Au juge de paix pour expulsion immédiate",
                                      "À l'armée suisse"
                              ],
                              "correctAnswer": 0,
                              "explanation": "L'Art. 40 al. 3 OIBT prévoit que si le propriétaire ne donne pas suite aux sommations, le gestionnaire de réseau transmet le dossier à l'Inspection pour décision d'office.",
                              "articleRef": "OIBT — Art. 40 al. 3"
                      },
                      {
                              "question": "12. Que risque pénalement une personne qui exécute des travaux d'installation électrique sans posséder l'autorisation requise selon l'Art. 42 let. a OIBT ?",
                              "options": [
                                      "Une simple remarque verbale sans suite",
                                      "Une condamnation à une amende pénale selon l'Art. 55 al. 3 LIE pouvant s'élever jusqu'à 100 000 CHF",
                                      "La confiscation de son véhicule privé",
                                      "Une dispense de payer ses factures d'électricité"
                              ],
                              "correctAnswer": 1,
                              "explanation": "L'Art. 42 let. a OIBT réprime l'exercice sans autorisation par renvoi direct à l'Art. 55 al. 3 LIE (amende pénale jusqu'à 100 000 CHF).",
                              "articleRef": "OIBT — Art. 42 let. a"
                      },
                      {
                              "question": "13. Quelle est la périodicité de contrôle obligatoire pour les installations électriques des stations-service selon le Ch. 2.2 de l'Annexe OIBT ?",
                              "options": [
                                      "Tous les 20 ans",
                                      "Tous les 3 ans",
                                      "Tous les 10 ans",
                                      "Tous les 6 mois"
                              ],
                              "correctAnswer": 1,
                              "explanation": "Le Ch. 2.2 de l'Annexe OIBT soumet au contrôle tous les 3 ans les stations-service et ateliers de réparation de véhicules situés dans des zones de protection contre les explosions.",
                              "articleRef": "Annexe OIBT — Ch. 2.2"
                      },
                      {
                              "question": "14. Quelle est la périodicité de contrôle légale d'un grand magasin d'une surface de vente supérieure à 1200 m² selon le Ch. 2.3.8 de l'Annexe OIBT ?",
                              "options": [
                                      "Tous les 20 ans",
                                      "Tous les 5 ans",
                                      "Tous les 10 ans",
                                      "Chaque semaine"
                              ],
                              "correctAnswer": 1,
                              "explanation": "Le Ch. 2.3.8 de l'Annexe OIBT classe les magasins et centres de bricolage d'une surface supérieure à 1200 m² sous la périodicité de 5 ans.",
                              "articleRef": "Annexe OIBT — Ch. 2.3.8"
                      },
                      {
                              "question": "15. Quelle est la périodicité de contrôle de droit commun pour les logements et appartements privés selon le Ch. 2.5 de l'Annexe OIBT ?",
                              "options": [
                                      "Tous les 5 ans",
                                      "Tous les 10 ans",
                                      "Tous les 20 ans (toutes les autres installations électriques)",
                                      "Le contrôle n'est jamais obligatoire pour les logements"
                              ],
                              "correctAnswer": 2,
                              "explanation": "Le Ch. 2.5 de l'Annexe OIBT dispose que toutes les autres installations électriques (dont les logements privés) sont soumises au contrôle tous les 20 ans.",
                              "articleRef": "Annexe OIBT — Ch. 2.5"
                      },
                      {
                              "question": "16. Selon l'Art. 44a al. 3 OIBT, à quelle condition un électricien de montage CFC formé avant 2015 peut-il mettre en service des installations ?",
                              "options": [
                                      "Sans aucune condition particulière",
                                      "S'il justifie d'une année de pratique sous la surveillance d'une personne du métier et d'une formation complémentaire définie par EIT.swiss l'habilitant à la première vérification",
                                      "Uniquement s'il a plus de 60 ans",
                                      "C'est totalement interdit sans exception"
                              ],
                              "correctAnswer": 1,
                              "explanation": "L'Art. 44a al. 3 OIBT conditionne la mise en service par les électriciens de montage CFC d'avant 2015 à une année de pratique et à une formation complémentaire EIT.swiss.",
                              "articleRef": "OIBT — Art. 44a al. 3"
                      }
              ],
              "prevLessonId": "rs-734-27-lecon-7"
      },
      // ======================================================================
      // RS 814.710 — ORNI : Protection contre le rayonnement non ionisant
      // Parcours officiel structuré en 7 leçons (Art. 1 à 21 + Annexes 1-2) + évaluation finale
      // Source de vérité : 814.710_ORNI.pdf (23 décembre 1999, état au 1er novembre 2023)
      // ======================================================================
      {
              "id": "rs-814-710-lecon-1",
              "routeId": "rs-814-710/lecon-1",
              "moduleId": "A",
              "parcoursId": "rs-814-710",
              "lessonNumber": 1,
              "totalLessons": 7,
              "code": "RS 814.710 — Leçon 1",
              "title": "Chapitre 1 : Dispositions générales & Définitions",
              "subtitle": "But de protection, champ d'application (0 Hz à 300 GHz) et notions fondamentales",
              "articlesRange": "Art. 1 à 3",
              "status": "Disponible",
              "duration": "10 min",
              "tag": "Dispositions générales",
              "xpReward": 30,
              "objective": "Maîtriser le champ d'application de l'ORNI, identifier les sources exclues et assimiler les définitions juridiques fondamentales, notamment la notion de lieu à utilisation sensible (LAUS).",
              "introduction": "Le <strong>Chapitre 1 de l'ORNI (Art. 1 à 3)</strong> pose le socle juridique suisse de la protection de l'être humain contre les champs électromagnétiques stationnaires. Il fixe une distinction capitale entre installations anciennes et nouvelles, et définit le concept clé de <em>Lieu à Utilisation Sensible (LAUS)</em> qui gouverne l'ensemble des valeurs limites préventives.",
              "contentSections": [
                      {
                              "title": "1. But et champ d'application (Art. 1 et 2)",
                              "text": "<div class=\"legal-ref-badge\">🔎 RS 814.710 — Art. 1 & 2 • But & Champ d’application</div>\n<div class=\"legal-quote-box\">\n  <strong>Art. 1 But :</strong> La présente ordonnance a pour but de protéger l’homme contre le rayonnement non ionisant nuisible ou incommodant.\n</div>\n<p style=\"margin-bottom:0.75rem; line-height:1.6; color:var(--text-secondary);\">\nL'ordonnance régit trois domaines fondamentaux (Art. 2 al. 1) :\n</p>\n<ul style=\"margin:0 0 0.85rem 1.25rem; line-height:1.6; color:var(--text-secondary);\">\n  <li><strong>a. Limitation des émissions :</strong> champs électriques et magnétiques générés par des <strong>installations stationnaires</strong> dans une gamme de fréquence de <strong>0 Hz à 300 GHz</strong> (rayonnement) ;</li>\n  <li><strong>b. Immissions :</strong> détermination et évaluation des immissions de rayonnement ;</li>\n  <li><strong>c. Aménagement du territoire :</strong> exigences posées à la définition des zones à bâtir.</li>\n</ul>\n<div class=\"ocfo-highlight-card\" style=\"margin-bottom:0.85rem;\">\n  <div class=\"card-title\">⚠️ Exclusions expresses du champ d'application (Art. 2 al. 2 & 3)</div>\n  <p style=\"margin:0; line-height:1.6; color:var(--text-secondary); font-size:0.88rem;\">\n  L'ORNI ne régit <strong>pas</strong> :\n  <br>• Les sources professionnelles en entreprise dans la mesure où le personnel y est exposé ;\n  <br>• L'utilisation médicale de dispositifs médicaux (RS 812.213) ;\n  <br>• Les installations militaires n'agissant que sur la troupe ;\n  <br>• Les appareils électriques courants : <strong>fours micro-ondes, cuisinières, outils électriques, téléphones portables</strong> ;\n  <br>• Les effets sur les dispositifs médicaux auxiliaires comme les <strong>stimulateurs cardiaques</strong>.\n  </p>\n</div>"
                      },
                      {
                              "title": "2. Anciennes et nouvelles installations (Art. 3 al. 1 et 2)",
                              "text": "<div class=\"legal-ref-badge\">🔎 RS 814.710 — Art. 3 al. 1 & 2 • Statut des installations</div>\n<p style=\"margin-bottom:0.75rem; line-height:1.6; color:var(--text-secondary);\">\nLa qualification juridique d'une installation conditionne les exigences et délais d'assainissement applicables :\n</p>\n<ul style=\"margin:0 0 0.85rem 1.25rem; line-height:1.6; color:var(--text-secondary);\">\n  <li><strong>Ancienne installation (al. 1) :</strong> installation dont la décision permettant d'entamer les travaux de construction ou la mise en service avait <strong>force de chose jugée au moment de l'entrée en vigueur</strong> de l'ordonnance (1er février 2000). Pour les installations à plusieurs lignes électriques, l'autorisation d'au moins une ligne devait être définitive.</li>\n  <li><strong>Nouvelle installation (al. 2) :</strong> installation qui ne remplit pas les conditions d'ancienne installation, ou qui est <strong>réinstallée sur un autre site</strong>, ou <strong>remplacée sur son site actuel</strong> (les chemins de fer font exception selon l'annexe 1 ch. 5).</li>\n</ul>"
                      },
                      {
                              "title": "3. Lieux à utilisation sensible — LAUS (Art. 3 al. 3)",
                              "text": "<div class=\"legal-ref-badge\">🔎 RS 814.710 — Art. 3 al. 3 • Notion clé de LAUS / LUS</div>\n<div class=\"legal-quote-box\">\n  <strong>Par lieu à utilisation sensible (LAUS), on entend :</strong>\n  <br><strong>a.</strong> Les locaux situés à l’intérieur d’un bâtiment dans lesquels des personnes séjournent régulièrement durant une période prolongée (chambres à coucher, séjours, bureaux, salles de classe, crèches, hôpitaux) ;\n  <br><strong>b.</strong> Les places de jeux publiques ou privées, définies dans un plan d’aménagement ;\n  <br><strong>c.</strong> Les parties de terrains non bâtis sur lesquelles de telles activités sont permises.\n</div>\n<p style=\"margin-top:0.75rem; line-height:1.6; color:var(--text-secondary);\">\n<em>À l'inverse, les garages, couloirs, caves, combles non aménagés ou balcons ne constituent pas des LAUS au sens de l'ORNI.</em>\n</p>"
                      },
                      {
                              "title": "4. Définitions techniques et grandeurs physiques (Art. 3 al. 4 à 9)",
                              "text": "<div class=\"legal-ref-badge\">🔎 RS 814.710 — Art. 3 al. 4 à 9 • Critères & Grandeurs</div>\n<ul style=\"margin:0 0 0.85rem 1.25rem; line-height:1.6; color:var(--text-secondary);\">\n  <li><strong>Réalisables techniquement (al. 4) :</strong> mesures ayant fait leurs preuves sur des installations comparables en Suisse ou à l'étranger, ou appliquées avec succès lors d'essais transposables.</li>\n  <li><strong>Économiquement supportables (al. 5) :</strong> mesures acceptables pour une <strong>entreprise moyenne, économiquement saine</strong>, de la branche concernée.</li>\n  <li><strong>Valeur limite de l'installation - VLI (al. 6) :</strong> limitation des émissions concernant le rayonnement émis par une installation donnée (mesure préventive stricte).</li>\n  <li><strong>Courant de contact (al. 7) :</strong> courant circulant lorsqu'une personne touche un objet conducteur non relié à une source de tension qui se charge dans un champ électrique ou magnétique.</li>\n  <li><strong>Courant de fuite (al. 8) :</strong> courant circulant d'une personne située dans un champ électrique vers la terre sans contact avec un objet conducteur.</li>\n  <li><strong>Puissance apparente rayonnée - ERP (al. 9) :</strong> puissance transmise à une antenne multipliée par son gain dans la direction principale, rapportée au dipôle demi-onde.</li>\n</ul>"
                      }
              ],
              "practicalExample": {
                      "title": "Cas concret : Une terrasse ou un balcon est-il un LAUS ?",
                      "text": "Non. Le Tribunal fédéral a confirmé que les balcons et terrasses extérieurs ne sont pas des locaux situés à l'intérieur d'un bâtiment et ne sont pas considérés comme des lieux à utilisation sensible (LAUS) au sens de l'Art. 3 al. 3 let. a, même s'ils font partie d'un logement."
              },
              "importantPoint": {
                      "title": "Principe de précaution : VLI vs Valeur limite d'immission",
                      "text": "La valeur limite de l'installation (VLI) est une valeur préventive beaucoup plus sévère que la valeur limite d'immission générale. Par exemple, à 50 Hz, la VLI pour les lignes et transformateurs dans un LAUS est de 1 µT, alors que la limite d'immission générale pour la santé humaine est de 100 µT !"
              },
              "synthesis": "L'ORNI protège l'homme contre le rayonnement non ionisant (0 Hz à 300 GHz) émis par les installations stationnaires. Les appareils domestiques usuels et les dispositifs médicaux sont exclus. Les lieux à utilisation sensible (LAUS) bénéficient d'une protection préventive renforcée par les valeurs limites de l'installation (VLI).",
              "quiz": [
                      {
                              "question": "1. Quelle est la gamme de fréquence régie par l'ORNI selon l'Art. 2 al. 1 let. a ?",
                              "options": [
                                      "De 50 Hz à 1000 Hz uniquement",
                                      "De 0 Hz à 300 GHz",
                                      "De 10 kHz à 300 MHz",
                                      "De 1 GHz à 100 GHz"
                              ],
                              "correctAnswer": 1,
                              "explanation": "L'Art. 2 al. 1 let. a ORNI fixe expressément le champ d'application aux installations stationnaires générant des champs de 0 Hz à 300 GHz.",
                              "articleRef": "ORNI — Art. 2 al. 1 let. a"
                      },
                      {
                              "question": "2. Quel équipement est expressément exclu du champ d'application selon l'Art. 2 al. 2 let. d ORNI ?",
                              "options": [
                                      "Les lignes de transport d'énergie électrique",
                                      "Les fours micro-ondes, cuisinières, outils électriques et téléphones portables",
                                      "Les sous-stations et transformateurs haute tension",
                                      "Les antennes relais de téléphonie mobile"
                              ],
                              "correctAnswer": 1,
                              "explanation": "L'Art. 2 al. 2 let. d ORNI exclut de son champ d'application les appareils électriques d'usage courant comme les fours micro-ondes, cuisinières, outils électriques ou téléphones portables.",
                              "articleRef": "ORNI — Art. 2 al. 2 let. d"
                      },
                      {
                              "question": "3. Selon l'Art. 3 al. 3 ORNI, lequel des lieux suivants est un lieu à utilisation sensible (LAUS) ?",
                              "options": [
                                      "Un garage souterrain pour véhicules automobiles",
                                      "Une chambre à coucher dans laquelle des personnes séjournent régulièrement durant une période prolongée",
                                      "Un couloir de distribution d'un immeuble",
                                      "Un grenier non aménagé servant de dépôt"
                              ],
                              "correctAnswer": 1,
                              "explanation": "L'Art. 3 al. 3 let. a ORNI définit les LAUS comme les locaux à l'intérieur d'un bâtiment où des personnes séjournent régulièrement durant une période prolongée (logements, chambres, bureaux, écoles).",
                              "articleRef": "ORNI — Art. 3 al. 3 let. a"
                      },
                      {
                              "question": "4. Comment se définit le courant de fuite selon l'Art. 3 al. 8 ORNI ?",
                              "options": [
                                      "Le courant de court-circuit circulant dans le conducteur de protection PE",
                                      "Le courant circulant d'une personne dans un champ électrique vers la terre sans qu'un objet conducteur soit touché",
                                      "Le courant résiduel déclenchant un disjoncteur différentiel 30 mA",
                                      "Le courant circulant dans un parafoudre en l'absence de surtension"
                              ],
                              "correctAnswer": 1,
                              "explanation": "Selon l'Art. 3 al. 8 ORNI, le courant de fuite est le courant électrique qui circule d'une personne se trouvant dans un champ électrique vers la terre sans qu'un objet conducteur soit touché.",
                              "articleRef": "ORNI — Art. 3 al. 8"
                      }
              ],
              "nextLessonId": "rs-814-710-lecon-2"
      },

      {
              "id": "rs-814-710-lecon-2",
              "routeId": "rs-814-710/lecon-2",
              "moduleId": "A",
              "parcoursId": "rs-814-710",
              "lessonNumber": 2,
              "totalLessons": 7,
              "code": "RS 814.710 — Leçon 2",
              "title": "Chapitre 2 : Émissions & Assainissement",
              "subtitle": "Limitations préventives, limitations plus sévères et délais d'assainissement",
              "articlesRange": "Art. 4 à 9",
              "status": "Disponible",
              "duration": "9 min",
              "tag": "Émissions & Délais",
              "xpReward": 30,
              "objective": "Comprendre les principes de limitation préventive (Annexe 1) et complémentaire (Annexe 2), le régime des nouvelles installations et les obligations strictes d'assainissement des anciennes installations.",
              "introduction": "Le <strong>Chapitre 2 (Sections 1 à 3, Art. 4 à 9)</strong> organise le contrôle à la source des rayonnements. Il articule deux niveaux de protection : la limitation préventive (Annexe 1) et, si nécessaire, une limitation plus sévère pour garantir le respect des valeurs d'immissions (Annexe 2). Il impose également l'assainissement obligatoire des installations non conformes.",
              "contentSections": [
                      {
                              "title": "1. Prescriptions communes aux installations (Art. 4 et 5)",
                              "text": "<div class=\"legal-ref-badge\">🔎 RS 814.710 — Art. 4 & 5 • Limitation préventive et plus sévère</div>\n<ul style=\"margin:0 0 0.85rem 1.25rem; line-height:1.6; color:var(--text-secondary);\">\n  <li><strong>Limitation préventive (Art. 4 al. 1) :</strong> Les installations doivent être construites et exploitées de façon à ne pas dépasser les <strong>limitations préventives des émissions définies à l’annexe 1</strong>.</li>\n  <li><strong>Absence de prescriptions dans l'annexe 1 (Art. 4 al. 2) :</strong> L'autorité fixe les limitations dans la mesure de l'état de la technique et pour autant que cela soit économiquement supportable.</li>\n  <li><strong>Limitation complémentaire ou plus sévère (Art. 5 al. 1 & 2) :</strong> Si une installation entraîne, seule ou combinée à d'autres, des immissions dépassant l'<strong>annexe 2</strong>, l'autorité impose des restrictions plus sévères jusqu'à ce que les valeurs limites d'immissions ne soient plus dépassées.</li>\n  <li><strong>Dépassement du courant de contact (Art. 5 al. 3) :</strong> L'autorité ordonne en priorité des mesures portant sur les objets conducteurs en cause.</li>\n</ul>"
                      },
                      {
                              "title": "2. Nouvelles installations et modifications (Art. 6)",
                              "text": "<div class=\"legal-ref-badge\">🔎 RS 814.710 — Art. 6 • Nouvelles installations</div>\n<p style=\"margin-bottom:0.75rem; line-height:1.6; color:var(--text-secondary);\">\nSelon l'<strong>Art. 6 ORNI</strong>, si après sa mise en service, une nouvelle installation est modifiée au sens de l'annexe 1, les prescriptions relatives aux limitations d'émissions concernant les <strong>nouvelles installations</strong> lui demeurent intégralement applicables.\n</p>"
                      },
                      {
                              "title": "3. Obligation et délais d'assainissement (Art. 7 et 8)",
                              "text": "<div class=\"legal-ref-badge\">🔎 RS 814.710 — Art. 7 & 8 • Assainissement obligatoire</div>\n<p style=\"margin-bottom:0.75rem; line-height:1.6; color:var(--text-secondary);\">\nL'autorité veille à ce que les anciennes installations ne satisfaisant pas aux art. 4 et 5 soient assainies :\n</p>\n<ul style=\"margin:0 0 0.85rem 1.25rem; line-height:1.6; color:var(--text-secondary);\">\n  <li><strong>Mesures de contrainte (Art. 7 al. 2) :</strong> L'autorité peut imposer une réduction de l'activité pour la durée de l'assainissement ou prononcer l'arrêt de l'installation.</li>\n  <li><strong>Renonciation à l'assainissement (Art. 7 al. 3) :</strong> Le détenteur peut renoncer aux travaux s'il s'engage formellement à arrêter l'exploitation avant l'échéance du délai.</li>\n  <li><strong>Délai préventif (Art. 8 al. 1) :</strong> Déterminé par l'annexe 1 (ex: 3 ans pour les lignes électriques). À défaut, le délai est de <strong>5 ans au plus</strong>. Une prolongation de la moitié au maximum peut être accordée pour des motifs économiques.</li>\n  <li><strong>Délai pour limitation plus sévère (Art. 8 al. 2) :</strong> Au maximum <strong>3 ans</strong> (réduit à un minimum de 3 mois lorsque les mesures ne requièrent pas d'investissements majeurs).</li>\n</ul>"
                      },
                      {
                              "title": "4. Modification d'anciennes installations (Art. 9)",
                              "text": "<div class=\"legal-ref-badge\">🔎 RS 814.710 — Art. 9 • Bascule vers le régime des nouvelles installations</div>\n<p style=\"margin-bottom:0.75rem; line-height:1.6; color:var(--text-secondary);\">\nLorsqu'une ancienne installation est modifiée conformément aux critères de l'annexe 1, les dispositions relatives à la limitation des émissions pour les <strong>nouvelles installations</strong> lui deviennent immédiatement applicables, sauf dérogation expresse prévue par l'annexe 1.\n</p>"
                      }
              ],
              "practicalExample": {
                      "title": "Cas concret : Assainissement d'une ligne moyenne tension ancienne",
                      "text": "Si une ligne électrique existante génère une densité de flux supérieure à 1 µT dans les chambres d'une habitation voisine, l'exploitant du réseau doit assainir l'installation dans le délai de 3 ans prévu à l'Annexe 1 ch. 16, notamment en optimisant l'ordre des phases des conducteurs."
              },
              "importantPoint": {
                      "title": "Priorité aux objets conducteurs pour le courant de contact",
                      "text": "Selon l'Art. 5 al. 3 ORNI, lorsqu'un courant de contact dangereux est constaté sur une clôture métallique ou un toit de tôle sous une ligne HT, l'autorité ordonne en premier lieu des mesures directes sur ces objets (mise à la terre, coupure de continuité) avant d'exiger la modification de la ligne électrique."
              },
              "synthesis": "Les installations doivent respecter les limitations préventives de l'Annexe 1. Si les limites d'immissions de l'Annexe 2 risquent d'être dépassées, des mesures complémentaires sont imposées. Les anciennes installations non conformes doivent être assainies dans un délai fixé par l'Annexe 1 ou de 5 ans au plus.",
              "quiz": [
                      {
                              "question": "1. Quel est l'objet de l'Annexe 1 auquel renvoie l'Art. 4 al. 1 ORNI ?",
                              "options": [
                                      "Définir les sanctions pénales applicables en cas d'infraction",
                                      "Définir les limitations préventives des émissions pour chaque type d'installation stationnaire",
                                      "Fixer le tarif des émoluments perçus par l'ESTI",
                                      "Énumérer les diplômes requis pour devenir installateur-électricien"
                              ],
                              "correctAnswer": 1,
                              "explanation": "L'Art. 4 al. 1 ORNI dispose que les installations doivent être construites et exploitées de façon à ne pas dépasser les limitations préventives d'émissions de l'Annexe 1.",
                              "articleRef": "ORNI — Art. 4 al. 1"
                      },
                      {
                              "question": "2. À quel moment l'autorité impose-t-elle une limitation d'émissions complémentaire selon l'Art. 5 al. 1 ORNI ?",
                              "options": [
                                      "Uniquement en cas de panne totale du réseau électrique",
                                      "Dès lors qu'une installation entraîne des immissions dépassant les valeurs limites de l'Annexe 2",
                                      "Tous les 20 ans de manière automatique sans mesure préalable",
                                      "Uniquement sur demande écrite du syndic de la commune"
                              ],
                              "correctAnswer": 1,
                              "explanation": "L'Art. 5 al. 1 ORNI prescrit l'imposition de limitations complémentaires dès qu'une installation risque de dépasser les valeurs limites d'immissions de l'Annexe 2.",
                              "articleRef": "ORNI — Art. 5 al. 1"
                      },
                      {
                              "question": "3. Quel est le délai d'assainissement maximal fixé par l'Art. 8 al. 1 si l'Annexe 1 ne contient pas de prescriptions ?",
                              "options": [
                                      "6 mois",
                                      "Cinq ans au plus",
                                      "Dix ans fermes",
                                      "Vingt ans"
                              ],
                              "correctAnswer": 1,
                              "explanation": "Selon l'Art. 8 al. 1 ORNI, si l'Annexe 1 ne prévoit pas de délai spécifique, le délai d'assainissement est de cinq ans au plus.",
                              "articleRef": "ORNI — Art. 8 al. 1"
                      },
                      {
                              "question": "4. Que prévoit l'Art. 9 ORNI lorsqu'une ancienne installation est modifiée au sens de l'Annexe 1 ?",
                              "options": [
                                      "Elle conserve indéfiniment son statut d'ancienne installation sans aucune contrainte",
                                      "Les dispositions relatives à la limitation des émissions pour les nouvelles installations lui deviennent applicables",
                                      "Elle doit être démontée immédiatement dans les 24 heures",
                                      "Elle est exemptée de tout contrôle futur"
                              ],
                              "correctAnswer": 1,
                              "explanation": "L'Art. 9 ORNI dispose que lorsqu'une ancienne installation est modifiée conformément à l'Annexe 1, les dispositions pour nouvelles installations lui sont applicables, sauf mention contraire.",
                              "articleRef": "ORNI — Art. 9"
                      }
              ],
              "prevLessonId": "rs-814-710-lecon-1",
              "nextLessonId": "rs-814-710-lecon-3"
      },

      {
              "id": "rs-814-710-lecon-3",
              "routeId": "rs-814-710/lecon-3",
              "moduleId": "A",
              "parcoursId": "rs-814-710",
              "lessonNumber": 3,
              "totalLessons": 7,
              "code": "RS 814.710 — Leçon 3",
              "title": "Chapitre 2 (Section 4) : Fiche de données & Contrôles",
              "subtitle": "Fiche spécifique au site, obligations envers l'OFCOM et vérifications sur le terrain",
              "articlesRange": "Art. 10 à 12",
              "status": "Disponible",
              "duration": "9 min",
              "tag": "Fiche de données & OFCOM",
              "xpReward": 30,
              "objective": "Comprendre les obligations de renseigner du détenteur, le contenu de la fiche de données spécifique au site (Art. 11), le système de notification OFCOM (Art. 11a/b) et les modalités de contrôle à 6 mois.",
              "introduction": "La <strong>Section 4 du Chapitre 2 (Art. 10 à 12)</strong> régit les obligations déclaratives des exploitants d'installations émettrices. Tout projet de construction ou de modification exige le dépôt d'une fiche de données spécifique au site. Pour la téléphonie mobile, un système d'information centralisé est géré par l'OFCOM avec mise à jour bimensuelle obligatoire.",
              "contentSections": [
                      {
                              "title": "1. Obligation de collaborer (Art. 10)",
                              "text": "<div class=\"legal-ref-badge\">🔎 RS 814.710 — Art. 10 • Devoir d'information</div>\n<p style=\"margin-bottom:0.75rem; line-height:1.6; color:var(--text-secondary);\">\nLe détenteur d’une installation est tenu de fournir à l’autorité, à la demande de cette dernière, tous les renseignements nécessaires à l’exécution de l'ordonnance. S’il le faut, il est <strong>tenu de procéder à des mesures ou à d’autres enquêtes, ou de les tolérer</strong>.\n</p>"
                      },
                      {
                              "title": "2. Fiche de données spécifique au site (Art. 11)",
                              "text": "<div class=\"legal-ref-badge\">🔎 RS 814.710 — Art. 11 • Fiche obligatoire de données de site</div>\n<p style=\"margin-bottom:0.75rem; line-height:1.6; color:var(--text-secondary);\">\nAvant qu'une installation de l'annexe 1 soit construite, réinstallée, remplacée ou modifiée, le détenteur remet une fiche de données spécifique au site. <strong>Les installations électriques domestiques font exception (annexe 1 ch. 4)</strong>.\n</p>\n<p style=\"margin-bottom:0.75rem; line-height:1.6; color:var(--text-secondary);\">\nContenu légal obligatoire de la fiche (Art. 11 al. 2) :\n</p>\n<ul style=\"margin:0 0 0.85rem 1.25rem; line-height:1.6; color:var(--text-secondary);\">\n  <li><strong>a.</strong> Données techniques et d'exploitation déterminantes pour l'émission ;</li>\n  <li><strong>b.</strong> Mode d'exploitation déterminant selon l'annexe 1 ;</li>\n  <li><strong>c.</strong> Données de rayonnement sur trois points stratégiques :\n    <br>1. Sur le lieu accessible où le rayonnement est le plus fort ;\n    <br>2. <strong>Sur les trois lieux à utilisation sensible (LAUS) où le rayonnement est le plus fort</strong> ;\n    <br>3. Sur tous les LAUS où la valeur limite de l'installation est dépassée ;</li>\n  <li><strong>d.</strong> Un plan d'ensemble présentant visuellement ces informations.</li>\n</ul>"
                      },
                      {
                              "title": "3. Téléphonie mobile et registre électronique OFCOM (Art. 11a et 11b)",
                              "text": "<div class=\"legal-ref-badge\">🔎 RS 814.710 — Art. 11a & 11b • Dispositif centralisé OFCOM</div>\n<ul style=\"margin:0 0 0.85rem 1.25rem; line-height:1.6; color:var(--text-secondary);\">\n  <li><strong>Transmission à l'OFCOM (Art. 11a al. 1) :</strong> Le détenteur d'une station émettrice de téléphonie mobile ou sans fil communique les données dans un délai de <strong>14 jours</strong> après clôture de la procédure d'autorisation/notification, la date de mise en service, et ses <strong>données d'exploitation actuelles au moins tous les 14 jours</strong>.</li>\n  <li><strong>Système d'information électronique (Art. 11b) :</strong> L'OFCOM exploite la plateforme électronique nationale. Les autorités de protection de l'environnement, les organes de contrôle et les exploitants y disposent d'un accès en ligne sécurisé pour accomplir leurs missions légales.</li>\n</ul>"
                      },
                      {
                              "title": "4. Surveillance et contrôle sur le terrain (Art. 12)",
                              "text": "<div class=\"legal-ref-badge\">🔎 RS 814.710 — Art. 12 • Contrôles par l'autorité</div>\n<p style=\"margin-bottom:0.75rem; line-height:1.6; color:var(--text-secondary);\">\nL'autorité veille au respect des limitations d'émissions. Elle procède à des mesures ou calculs, ou s'appuie sur des données de tiers selon les méthodes recommandées par l'Office fédéral de l'environnement (OFEV).\n</p>\n<div class=\"ocfo-highlight-card\" style=\"margin-bottom:0.85rem;\">\n  <div class=\"card-title\">⚠️ Contrôle dans les 6 mois après mise en service (Art. 12 al. 3)</div>\n  <p style=\"margin:0; line-height:1.6; color:var(--text-secondary); font-size:0.88rem;\">\n  Si une nouvelle installation ou une installation modifiée bénéficie d'une dérogation permettant de dépasser la valeur limite, l'autorité effectue des mesures périodiques et doit <strong>contrôler au plus tard 6 mois après sa mise en service</strong> l'exactitude des données d'exploitation et l'application stricte des prescriptions arrêtées.\n  </p>\n</div>"
                      }
              ],
              "practicalExample": {
                      "title": "Cas concret : Ajout d'antennes 5G sur un mât existant",
                      "text": "L'opérateur doit déposer une fiche de données spécifique au site modifiée détaillant les 3 LAUS les plus exposés, transmettre ses paramètres à l'OFCOM sous 14 jours et alimenter le système d'information de l'OFCOM tous les 14 jours au minimum avec la puissance d'émission réelle."
              },
              "importantPoint": {
                      "title": "Dispense pour les installations domestiques",
                      "text": "L'Art. 11 al. 1 ORNI dispense expressément les installations électriques domestiques (au sens de l'Art. 14 LIE / Annexe 1 ch. 4) de l'établissement d'une fiche de données spécifique au site."
              },
              "synthesis": "Le détenteur doit remettre une fiche spécifique au site avant toute construction ou modification (hors électricité domestique). Pour les antennes mobiles, les données d'exploitation sont transmises à l'OFCOM tous les 14 jours. L'autorité effectue des mesures et vérifie dans les 6 mois la conformité des installations dérogatoires.",
              "quiz": [
                      {
                              "question": "1. Quelles installations sont formellement dispensées de la fiche spécifique au site selon l'Art. 11 al. 1 ORNI ?",
                              "options": [
                                      "Les lignes de transport d'énergie de 380 kV",
                                      "Les installations électriques domestiques (annexe 1 ch. 4)",
                                      "Les stations de transformation de quartier",
                                      "Les émetteurs de radiodiffusion FM de haute puissance"
                              ],
                              "correctAnswer": 1,
                              "explanation": "L'Art. 11 al. 1 ORNI dispose explicitement que 'Les installations électriques domestiques font exception (annexe 1, ch. 4)'.",
                              "articleRef": "ORNI — Art. 11 al. 1"
                      },
                      {
                              "question": "2. Combien de lieux à utilisation sensible (LAUS) les plus exposés doivent figurer sur la fiche de site (Art. 11 al. 2 let. c ch. 2) ?",
                              "options": [
                                      "Un seul lieu",
                                      "Les trois lieux à utilisation sensible où le rayonnement est le plus fort",
                                      "Dix lieux obligatoires",
                                      "Aucun si le propriétaire est d'accord"
                              ],
                              "correctAnswer": 1,
                              "explanation": "L'Art. 11 al. 2 let. c ch. 2 ORNI exige des informations détaillées sur les trois lieux à utilisation sensible où ce rayonnement est le plus fort.",
                              "articleRef": "ORNI — Art. 11 al. 2 let. c ch. 2"
                      },
                      {
                              "question": "3. À quelle fréquence minimale les données d'exploitation des antennes mobiles doivent-elles être transmises à l'OFCOM (Art. 11a al. 1 let. c) ?",
                              "options": [
                                      "Une fois par an lors du bilan annuel",
                                      "Au moins tous les 14 jours",
                                      "Tous les cinq ans lors du contrôle périodique",
                                      "Uniquement en cas de réclamation de riverains"
                              ],
                              "correctAnswer": 1,
                              "explanation": "L'Art. 11a al. 1 let. c ORNI impose la communication des données d'exploitation actuelles dans l'intervalle fixé par l'OFCOM, mais au moins tous les 14 jours.",
                              "articleRef": "ORNI — Art. 11a al. 1 let. c"
                      },
                      {
                              "question": "4. Dans quel délai l'autorité doit-elle contrôler une installation bénéficiant d'une dérogation après sa mise en service (Art. 12 al. 3) ?",
                              "options": [
                                      "Au plus tard un mois après",
                                      "Au plus tard six mois après leur mise en service",
                                      "Dans les 5 ans révolus",
                                      "Après la fin de la période de garantie décennale"
                              ],
                              "correctAnswer": 1,
                              "explanation": "Selon l'Art. 12 al. 3 ORNI, l'autorité contrôle au plus tard six mois après leur mise en service si les indications d'exploitation sont exactes et si les prescriptions sont appliquées.",
                              "articleRef": "ORNI — Art. 12 al. 3"
                      }
              ],
              "prevLessonId": "rs-814-710-lecon-2",
              "nextLessonId": "rs-814-710-lecon-4"
      },

      {
              "id": "rs-814-710-lecon-4",
              "routeId": "rs-814-710/lecon-4",
              "moduleId": "A",
              "parcoursId": "rs-814-710",
              "lessonNumber": 4,
              "totalLessons": 7,
              "code": "RS 814.710 — Leçon 4",
              "title": "Chapitres 3 à 5 : Immissions, Zones à bâtir & Exécution",
              "subtitle": "Immissions globales, aménagement du territoire et répartition Confédération/Cantons",
              "articlesRange": "Art. 13 à 21",
              "status": "Disponible",
              "duration": "9 min",
              "tag": "Immissions & Aménagement",
              "xpReward": 30,
              "objective": "Connaître le champ d'application des valeurs limites d'immissions, les contraintes sur les zones à bâtir (Art. 16) et la répartition des compétences d'exécution entre Cantons, Confédération, OFEV et OFCOM.",
              "introduction": "Les <strong>Chapitres 3, 4 et 5 (Art. 13 à 21)</strong> régissent l'exposition générale de la population dans l'environnement, l'articulation obligatoire avec l'aménagement du territoire (droit de construire) et l'exécution fédérale coordonnée entre les cantons, l'OFEV et l'OFCOM.",
              "contentSections": [
                      {
                              "title": "1. Immissions et méthodes d'évaluation (Art. 13 à 15)",
                              "text": "<div class=\"legal-ref-badge\">🔎 RS 814.710 — Art. 13 à 15 • Immissions générales</div>\n<ul style=\"margin:0 0 0.85rem 1.25rem; line-height:1.6; color:var(--text-secondary);\">\n  <li><strong>Champ d'application (Art. 13 al. 1) :</strong> Les valeurs limites d’immissions de l’annexe 2 <strong>doivent être respectées partout où des personnes peuvent séjourner</strong> (chemins, champs, rues, bâtiments, espaces publics).</li>\n  <li><strong>Corps entier (Art. 13 al. 2) :</strong> Elles s'appliquent au rayonnement agissant de manière uniforme sur l'ensemble du corps humain.</li>\n  <li><strong>Détermination (Art. 14) :</strong> Mesures ou calculs pour le mode d'exploitation le plus émissif. Les sources internes aux entreprises ne sont pas comptées.</li>\n  <li><strong>Moyenne quadratique (Art. 14 al. 5) :</strong> Si une durée d'appréciation figure à l'annexe 2 (ex: 6 minutes), la valeur s'exprime par la moyenne quadratique ; sinon, la valeur efficace maximale est déterminante.</li>\n</ul>"
                      },
                      {
                              "title": "2. Exigences posées aux zones à bâtir (Art. 16)",
                              "text": "<div class=\"legal-ref-badge\">🔎 RS 814.710 — Art. 16 • Coordination avec l'urbanisme</div>\n<div class=\"legal-quote-box\">\n  <strong>Art. 16 Définition des zones à bâtir :</strong>\n  Les zones à bâtir ne doivent être définies que là où les valeurs limites de l’installation au sens de l’annexe 1 sont respectées, ou peuvent l’être grâce à des mesures de planification ou de construction. Sont à considérer les installations existantes ainsi que les projets établis conformément au droit de l’aménagement du territoire.\n</div>\n<p style=\"margin-top:0.75rem; line-height:1.6; color:var(--text-secondary);\">\n<em>Cet article interdit formellement de créer des zones résidentielles directement sous des lignes à très haute tension ou à proximité immédiate de transformateurs si le champ magnétique y dépasse 1 µT.</em>\n</p>"
                      },
                      {
                              "title": "3. Répartition des compétences d'exécution (Art. 17 à 19b)",
                              "text": "<div class=\"legal-ref-badge\">🔎 RS 814.710 — Art. 17 à 19b • Cantons & Confédération</div>\n<ul style=\"margin:0 0 0.85rem 1.25rem; line-height:1.6; color:var(--text-secondary);\">\n  <li><strong>Cantons (Art. 17) :</strong> Les cantons exécutent l'ordonnance dans leur domaine ordinaire de police des constructions et de protection environnementale.</li>\n  <li><strong>Confédération (Art. 18) :</strong> Les autorités fédérales (OFEN, ESTI, OFT) exécutent l'ordonnance lorsqu'elles appliquent d'autres lois fédérales (chemins de fer, transport d'électricité, concessions de radiocommunication).</li>\n  <li><strong>Autorité de coordination (Art. 19) :</strong> Désignée lorsque des dépassements impliquent plusieurs installations relevant d'autorités distinctes.</li>\n  <li><strong>Information du public (Art. 19b) :</strong> L'OFEV publie périodiquement une vue d'ensemble nationale de l'exposition au rayonnement et l'OFCOM publie les données de téléphonie mobile.</li>\n</ul>"
                      },
                      {
                              "title": "4. Dispositions transitoires et entrée en vigueur (Art. 20 et 21)",
                              "text": "<div class=\"legal-ref-badge\">🔎 RS 814.710 — Art. 20 & 21 • Validité légale</div>\n<p style=\"margin-bottom:0.75rem; line-height:1.6; color:var(--text-secondary);\">\n• <strong>Art. 20 (Disposition transitoire de 2009) :</strong> Les installations approuvées avant l'entrée en vigueur de la modification du 1er juillet 2009 doivent respecter l'annexe 1 dès qu'elles sont remplacées, réinstallées ou modifiées.\n<br>• <strong>Art. 21 (Entrée en vigueur initiale) :</strong> L'ordonnance est entrée en vigueur le <strong>1er février 2000</strong>.\n</p>"
                      }
              ],
              "practicalExample": {
                      "title": "Cas concret : Nouveau plan de quartier près d'une sous-station",
                      "text": "Lorsqu'une commune suisse révise son plan d'affectation des zones pour ouvrir un secteur au logement, elle doit prouver, calculs à l'appui, que la future zone résidentielle respecte la VLI de 1 µT émise par la sous-station électrique adjacente (Art. 16 ORNI)."
              },
              "importantPoint": {
                      "title": "Portée universelle des valeurs limites d'immissions",
                      "text": "Contrairement aux valeurs limites d'installation (VLI) qui ne s'appliquent que dans les LAUS, les valeurs limites d'immissions de l'Annexe 2 doivent être respectées sans exception partout où des êtres humains peuvent séjourner (Art. 13 al. 1)."
              },
              "synthesis": "Les valeurs limites d'immissions (Annexe 2) s'appliquent partout où des personnes peuvent séjourner. De nouvelles zones à bâtir ne peuvent être créées que si les valeurs limites de l'installation sont respectées. Les cantons sont chargés de l'exécution, sous réserve des compétences fédérales.",
              "quiz": [
                      {
                              "question": "1. Où les valeurs limites d'immissions de l'Annexe 2 doivent-elles être respectées selon l'Art. 13 al. 1 ORNI ?",
                              "options": [
                                      "Uniquement dans les salles d'opération des hôpitaux",
                                      "Partout où des personnes peuvent séjourner",
                                      "Exclusivement à l'intérieur des chambres à coucher",
                                      "Seulement dans les zones industrielles de plus de 10 hectares"
                              ],
                              "correctAnswer": 1,
                              "explanation": "L'Art. 13 al. 1 ORNI dispose clairement : 'Les valeurs limites d’immissions au sens de l’annexe 2 doivent être respectées partout où des personnes peuvent séjourner'.",
                              "articleRef": "ORNI — Art. 13 al. 1"
                      },
                      {
                              "question": "2. Que prescrit l'Art. 16 ORNI pour la définition de nouvelles zones à bâtir ?",
                              "options": [
                                      "Les zones à bâtir peuvent être créées librement quel que soit le rayonnement",
                                      "Elles ne doivent être définies que là où les valeurs limites de l'installation de l'Annexe 1 sont respectées ou peuvent l'être",
                                      "Il est obligatoire de construire un mur en plomb de 2 mètres de hauteur autour de la zone",
                                      "Seuls les bâtiments en bois sont autorisés dans un rayon de 500 mètres"
                              ],
                              "correctAnswer": 1,
                              "explanation": "L'Art. 16 ORNI impose que les zones à bâtir ne soient définies que là où les valeurs limites de l'installation (Annexe 1) sont respectées ou garanties par des mesures de planification/construction.",
                              "articleRef": "ORNI — Art. 16"
                      },
                      {
                              "question": "3. Qui exécute l'ORNI en règle générale selon l'Art. 17 ?",
                              "options": [
                                      "L'armée suisse",
                                      "Les cantons (sous réserve des compétences fédérales de l'art. 18)",
                                      "Interpol",
                                      "Les compagnies privées d'assurance incendie"
                              ],
                              "correctAnswer": 1,
                              "explanation": "L'Art. 17 ORNI pose la règle générale : 'Les cantons exécutent la présente ordonnance sous réserve de l’art. 18'.",
                              "articleRef": "ORNI — Art. 17"
                      },
                      {
                              "question": "4. Quel office fédéral publie périodiquement la vue d'ensemble nationale de l'exposition au rayonnement selon l'Art. 19b al. 1 ?",
                              "options": [
                                      "L'Office fédéral de la statistique (OFS)",
                                      "L'Office fédéral de l'environnement (OFEV)",
                                      "L'Office fédéral de l'agriculture (OFAG)",
                                      "La Banque nationale suisse (BNS)"
                              ],
                              "correctAnswer": 1,
                              "explanation": "L'Art. 19b al. 1 ORNI charge expressément l'OFEV de publier périodiquement la vue d'ensemble nationale de l'exposition de la population au rayonnement.",
                              "articleRef": "ORNI — Art. 19b al. 1"
                      }
              ],
              "prevLessonId": "rs-814-710-lecon-3",
              "nextLessonId": "rs-814-710-lecon-5"
      },

      {
              "id": "rs-814-710-lecon-5",
              "routeId": "rs-814-710/lecon-5",
              "moduleId": "A",
              "parcoursId": "rs-814-710",
              "lessonNumber": 5,
              "totalLessons": 7,
              "code": "RS 814.710 — Leçon 5",
              "title": "Annexe 1 (Partie 1) : Réseau électrique, Transformateurs & NIBT",
              "subtitle": "Lignes de transport > 1000 V, sous-stations, courant déterminant et conformité NIBT",
              "articlesRange": "Annexe 1, ch. 1 à 5",
              "status": "Disponible",
              "duration": "10 min",
              "tag": "Annexe 1 · Énergie électrique",
              "xpReward": 30,
              "objective": "Maîtriser les valeurs limites de l'installation de 1 µT pour les lignes de transport, transformateurs et chemins de fer, la définition du courant déterminant et le statut normatif de la NIBT.",
              "introduction": "La **première partie de l'Annexe 1 (ch. 1 à 5)** constitue le cœur technique de l'ORNI pour les professionnels de la branche électrique suisse. Elle fixe la **valeur limite de l'installation de 1 µT** pour la densité de flux magnétique dans les LAUS, détaille les calculs de courant déterminant et consacre formellement la **NIBT (SN 411000)** comme état de la technique pour les installations domestiques.",
              "contentSections": [
                      {
                              "title": "1. Lignes électriques de transport > 1000 V (Annexe 1 ch. 1)",
                              "text": "<div class=\"legal-ref-badge\">🔎 Annexe 1 ch. 1 • Lignes aériennes et câbles HT</div>\n<ul style=\"margin:0 0 0.85rem 1.25rem; line-height:1.6; color:var(--text-secondary);\">\n  <li><strong>Champ d'application (ch. 11) :</strong> Installations à courant alternatif de <strong>tension nominale supérieure à 1000 V</strong> (lignes aériennes et câbles monoconducteurs dans tubes distincts).</li>\n  <li><strong>Définitions (ch. 12) :</strong> Conducteur de phase, terne (L1-L2-L3 ou U-V), zone de voisinage (espace où la densité de flux dépasse la VLI).</li>\n  <li><strong>Courant déterminant (ch. 13) :</strong> Courant permanent maximal admissible calculé à <strong>40 °C avec un vent de 0,5 m/s</strong> pour les lignes aériennes, et selon la norme <strong>IEC 60287</strong> pour les câbles souterrains. Respecté pendant au moins 98 % du temps sur l'année.</li>\n  <li><strong>Valeur limite de l'installation (ch. 14) :</strong> <strong>1 µT</strong> pour la valeur efficace de la densité de flux magnétique dans les lieux à utilisation sensible (LAUS).</li>\n  <li><strong>Assainissement (ch. 16) :</strong> Délai d'assainissement de <strong>3 ans au plus</strong> avec optimisation obligatoire de l'ordre des phases.</li>\n  <li><strong>Mesures interdites (ch. 17 al. 3) :</strong> Il est interdit de câbler ou de déplacer les ternes d'une tension nominale ≥ 220 kV ou à fréquence de 16,7 Hz.</li>\n</ul>"
                      },
                      {
                              "title": "2. Stations de transformation, sous-stations et couplage (Annexe 1 ch. 2 et 3)",
                              "text": "<div class=\"legal-ref-badge\">🔎 Annexe 1 ch. 2 & 3 • Postes de transformation et couplage</div>\n<ul style=\"margin:0 0 0.85rem 1.25rem; line-height:1.6; color:var(--text-secondary);\">\n  <li><strong>Stations de transformation (ch. 2) :</strong> Transformation haute tension vers basse tension (HT -> BT). L'installation comprend toutes les parties conductrices, liaisons BT et distributeur BT inclus.</li>\n  <li><strong>Sous-stations et postes de couplage (ch. 3) :</strong> Transformation entre deux niveaux de haute tension (ex: 220 kV / 132 kV ou 50 kV).</li>\n  <li><strong>Mode d'exploitation déterminant :</strong> Exploitation à la <strong>puissance nominale</strong>.</li>\n  <li><strong>Valeur limite de l'installation (VLI) :</strong> <strong>1 µT</strong> pour la valeur efficace de la densité de flux magnétique dans les LAUS.</li>\n  <li><strong>Dérogations :</strong> Accordées si le détenteur prouve que toutes les mesures possibles ont été prises (blindages magnétiques, éloignement) et sont économiquement supportables.</li>\n</ul>"
                      },
                      {
                              "title": "3. Installations électriques domestiques & Référence NIBT (Annexe 1 ch. 4)",
                              "text": "<div class=\"legal-ref-badge\">🔎 Annexe 1 ch. 4 • Installations domestiques & Norme NIBT</div>\n<div class=\"legal-quote-box\">\n  <strong>Annexe 1 ch. 4 Installations électriques domestiques :</strong>\n  <br><strong>1.</strong> Les dispositions du présent chiffre s'appliquent aux installations domestiques au sens de l'art. 14 de la loi du 24 juin 1902 sur les installations électriques (LIE, RS 734.0), à l'exclusion du matériel électrique à connexion fixe et stationnaire connecté par prise.\n  <br><strong>2.</strong> Les installations domestiques doivent être réalisées selon l'état reconnu de la technique de manière à réduire autant que possible la densité de flux magnétique dans les lieux à utilisation sensible.\n  <br><strong>3.</strong> Sont en particulier considérées comme état reconnu de la technique les prescriptions de la <strong>norme sur les installations à basse tension (NIBT / SN 411000)</strong>.\n</div>"
                      },
                      {
                              "title": "4. Chemins de fer à courant alternatif (Annexe 1 ch. 5)",
                              "text": "<div class=\"legal-ref-badge\">🔎 Annexe 1 ch. 5 • Installations ferroviaires</div>\n<ul style=\"margin:0 0 0.85rem 1.25rem; line-height:1.6; color:var(--text-secondary);\">\n  <li><strong>Champ d'application (ch. 51 & 52) :</strong> Ligne de contact, installations de retour de courant de traction et mise à la terre.</li>\n  <li><strong>Mode d'exploitation déterminant (ch. 53) :</strong> Trafic voyageurs et fret avec courant injecté <strong>moyenné sur 24 heures</strong>.</li>\n  <li><strong>Valeur limite de l'installation (ch. 54) :</strong> <strong>1 µT</strong> moyennée sur 24 heures dans les LAUS.</li>\n  <li><strong>Conducteur de retour (ch. 55 al. 2 let. a & ch. 56) :</strong> Obligation d'installer un <strong>conducteur de retour au plus près des conducteurs d'alimentation</strong> pour compenser le champ magnétique par opposition de phase.</li>\n</ul>"
                      }
              ],
              "practicalExample": {
                      "title": "Cas concret : Pose d'un tableau de distribution dans une maison",
                      "text": "En application de l'Annexe 1 ch. 4 et de la NIBT, l'installateur évitera de placer le tableau principal de distribution ou la colonne montante immédiatement derrière la tête de lit d'une chambre à coucher (qui constitue un LAUS), afin de limiter le champ magnétique basse fréquence permanent."
              },
              "importantPoint": {
                      "title": "Valeur universelle : 1 µT pour la basse fréquence (50 Hz)",
                      "text": "Retenez ce chiffre fondamental pour tous vos examens électriques suisses : pour toutes les installations de production, transport et distribution d'énergie électrique (lignes, transformateurs, sous-stations, voies ferrées), la valeur limite de l'installation (VLI) est de 1 µT dans les LAUS !"
              },
              "synthesis": "La VLI pour les lignes > 1000 V, transformateurs, sous-stations et chemins de fer est de 1 µT dans les LAUS. Le courant déterminant est calculé à 40 °C avec vent de 0.5 m/s ou selon l'IEC 60287. Pour les installations domestiques, la conformité à la NIBT (SN 411000) vaut respect de l'état de la technique.",
              "quiz": [
                      {
                              "question": "1. Quelle est la valeur limite de l'installation (VLI) pour les lignes électriques et transformateurs dans les LAUS (Annexe 1 ch. 14 et 24) ?",
                              "options": [
                                      "0,1 µT",
                                      "1 µT (pour la valeur efficace de la densité de flux magnétique)",
                                      "10 µT",
                                      "100 µT"
                              ],
                              "correctAnswer": 1,
                              "explanation": "L'Annexe 1 chiffres 14, 24 et 34 fixe uniformément la valeur limite de l'installation à 1 µT pour la valeur efficace de la densité de flux magnétique dans les LAUS.",
                              "articleRef": "Annexe 1 ch. 14, 24, 34"
                      },
                      {
                              "question": "2. Quelles conditions climatiques conventionnelles définissent le courant déterminant d'une ligne aérienne selon le ch. 13 al. 2 let. a ?",
                              "options": [
                                      "Température ambiante de 0 °C avec vent de 10 m/s",
                                      "Température ambiante de 40 °C avec un vent de 0,5 m/s",
                                      "Température ambiante de 20 °C sous pluie battante",
                                      "Conditions de gel à -10 °C sans vent"
                              ],
                              "correctAnswer": 1,
                              "explanation": "L'Annexe 1 ch. 13 al. 2 let. a définit le courant permanent maximal admissible calculé à une température ambiante de 40 °C avec un vent de 0,5 m/s.",
                              "articleRef": "Annexe 1 ch. 13 al. 2 let. a"
                      },
                      {
                              "question": "3. Quelle norme technique suisse est formellement consacrée comme état de la technique à l'Annexe 1 ch. 4 al. 3 pour les installations domestiques ?",
                              "options": [
                                      "La norme SIA 380/1",
                                      "Les prescriptions de la norme sur les installations à basse tension (NIBT / SN 411000)",
                                      "L'ordonnance sur les appareils à gaz",
                                      "Le règlement de la SUVA sur le travail en hauteur"
                              ],
                              "correctAnswer": 1,
                              "explanation": "L'Annexe 1 ch. 4 al. 3 ORNI énonce expressément que sont en particulier considérées comme état reconnu de la technique les prescriptions de la norme sur les installations à basse tension (NIBT).",
                              "articleRef": "Annexe 1 ch. 4 al. 3"
                      },
                      {
                              "question": "4. Quelle mesure technique spécifique est imposée aux chemins de fer pour réduire le champ magnétique (Annexe 1 ch. 55 et 56) ?",
                              "options": [
                                      "L'installation d'un conducteur de retour au plus près des conducteurs d'alimentation",
                                      "L'arrêt complet de la circulation des trains de nuit",
                                      "La réduction de la vitesse des convois à 20 km/h en gare",
                                      "L'interdiction des locomotives électriques"
                              ],
                              "correctAnswer": 0,
                              "explanation": "L'Annexe 1 ch. 55 al. 2 let. a et ch. 56 prescrit que l'installation soit munie d'un conducteur de retour installé aussi près que possible des conducteurs d'alimentation.",
                              "articleRef": "Annexe 1 ch. 55 al. 2 & ch. 56"
                      }
              ],
              "prevLessonId": "rs-814-710-lecon-4",
              "nextLessonId": "rs-814-710-lecon-6"
      },

      {
              "id": "rs-814-710-lecon-6",
              "routeId": "rs-814-710/lecon-6",
              "moduleId": "A",
              "parcoursId": "rs-814-710",
              "lessonNumber": 6,
              "totalLessons": 7,
              "code": "RS 814.710 — Leçon 6",
              "title": "Annexe 1 (Partie 2) : Téléphonie mobile, Radiodiffusion & Radars",
              "subtitle": "Limites de champ électrique en V/m, formule du périmètre et antennes adaptatives",
              "articlesRange": "Annexe 1, ch. 6 à 8",
              "status": "Disponible",
              "duration": "9 min",
              "tag": "Annexe 1 · Télécommunications",
              "xpReward": 30,
              "objective": "Maîtriser les valeurs limites d'installation en intensité de champ électrique (V/m), la formule du périmètre d'antennes et les règles régissant les antennes adaptatives 5G.",
              "introduction": "La **seconde partie de l'Annexe 1 (ch. 6 à 8)** traite des installations émettrices de radiocommunication à haute fréquence (téléphonie mobile, radiodiffusion et radars). Les valeurs limites d'installation ne s'y expriment plus en microteslas (µT) mais en **volts par mètre (V/m)** pour l'intensité efficace de champ électrique.",
              "contentSections": [
                      {
                              "title": "1. Stations émettrices de téléphonie mobile (Annexe 1 ch. 6)",
                              "text": "<div class=\"legal-ref-badge\">🔎 Annexe 1 ch. 6 • Téléphonie cellulaire & Sans fil</div>\n<ul style=\"margin:0 0 0.85rem 1.25rem; line-height:1.6; color:var(--text-secondary);\">\n  <li><strong>Champ d'application (ch. 61) :</strong> Réseaux mobiles et liaisons sans fil. Sont exclues : liaisons à faisceaux hertziens, antennes intérieures avec ERP ≤ 6 W, et antennes émettant moins de 800 heures par an.</li>\n  <li><strong>Périmètre d'un groupe d'antennes (ch. 62 al. 4) :</strong> Surface horizontale formée de cercles de rayon <em>r</em> autour de chaque antenne :\n    <br><strong style=\"color:var(--electric-blue); font-size:1rem;\">r = F · √(ERP₉₀)</strong>\n    <br>• <strong>F = 2,63</strong> pour les fréquences autour de 900 MHz ou plus basses ;\n    <br>• <strong>F = 1,76</strong> pour les fréquences autour de 1800 MHz ou plus élevées ;\n    <br>• <strong>F = 2,10</strong> pour les autres gammes de fréquence ;\n    <br>• <strong>ERP₉₀ :</strong> puissance apparente rayonnée cumulée dans le secteur azimutal le plus émissif de 90°.</li>\n</ul>"
                      },
                      {
                              "title": "2. Valeurs limites d'installation en téléphonie mobile (Annexe 1 ch. 64)",
                              "text": "<div class=\"legal-ref-badge\">🔎 Annexe 1 ch. 64 • VLI en champ électrique (V/m)</div>\n<div class=\"legal-quote-box\">\n  <strong>Valeurs limites d’installation dans les LAUS (valeur efficace de champ électrique) :</strong>\n  <br>• <strong>4,0 V/m :</strong> pour les installations émettant exclusivement autour de <strong>900 MHz ou fréquences plus basses</strong> ;\n  <br>• <strong>6,0 V/m :</strong> pour les installations émettant exclusivement autour de <strong>1800 MHz ou fréquences plus élevées</strong> ;\n  <br>• <strong>5,0 V/m :</strong> pour toutes les autres installations (fréquences mixtes).\n</div>"
                      },
                      {
                              "title": "3. Antennes adaptatives et facteur de correction KAA (Annexe 1 ch. 63)",
                              "text": "<div class=\"legal-ref-badge\">🔎 Annexe 1 ch. 63 • Antennes adaptatives (Beamforming 5G)</div>\n<p style=\"margin-bottom:0.75rem; line-height:1.6; color:var(--text-secondary);\">\nLes antennes adaptatives adaptent automatiquement leur diagramme vers l'utilisateur. Pour les antennes possédant au moins 8 sous-ensembles (<em>sub arrays</em>) avec limitation automatique de puissance sur 6 minutes, un facteur de correction <strong>K<sub>AA</sub></strong> est appliqué à l'ERP maximale :\n</p>\n<table class=\"ocfo-norm-table\" style=\"margin-bottom:0.85rem;\">\n  <thead>\n    <tr>\n      <th>Nombre de sub arrays</th>\n      <th>Facteur de correction K<sub>AA</sub></th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr><td>64 et plus</td><td><strong>≥ 0,10</strong></td></tr>\n    <tr><td>32 à 63</td><td><strong>≥ 0,13</strong></td></tr>\n    <tr><td>16 à 31</td><td><strong>≥ 0,20</strong></td></tr>\n    <tr><td>8 à 15</td><td><strong>≥ 0,40</strong></td></tr>\n  </tbody>\n</table>"
                      },
                      {
                              "title": "4. Stations de radiodiffusion et radars (Annexe 1 ch. 7 et 8)",
                              "text": "<div class=\"legal-ref-badge\">🔎 Annexe 1 ch. 7 & 8 • Émetteurs radio, TV et radars</div>\n<ul style=\"margin:0 0 0.85rem 1.25rem; line-height:1.6; color:var(--text-secondary);\">\n  <li><strong>Radiodiffusion (ch. 74) :</strong> Émetteurs de plus de 6 W émettant ≥ 800 h/an :\n    <br>• <strong>8,5 V/m :</strong> pour les émetteurs à ondes longues et ondes moyennes ;\n    <br>• <strong>3,0 V/m :</strong> pour tous les autres émetteurs (FM, DAB+, télévision).</li>\n  <li><strong>Stations radars (ch. 84) :</strong> Émetteurs radars avec ERP moyenne > 6 W sur cycle de balayage (≥ 800 h/an) :\n    <br>• <strong>5,5 V/m :</strong> mesuré en tant que moyenne pendant un cycle de balayage complet.</li>\n</ul>"
                      }
              ],
              "practicalExample": {
                      "title": "Cas concret : Détermination de la VLI d'une antenne mobile à 800 MHz et 2100 MHz",
                      "text": "Lorsqu'une station émettrice combine simultanément plusieurs bandes de fréquences (ex: bande LTE 800 MHz et bande 5G à 2100 MHz), la valeur limite d'installation applicable dans les LAUS voisins est la valeur intermédiaire de 5,0 V/m selon le ch. 64 let. c."
              },
              "importantPoint": {
                      "title": "Périmètre de protection : r = F · √(ERP90)",
                      "text": "Cette formule permet aux autorités cantonales et communales de déterminer la zone de coordination spatiale dans laquelle deux groupes d'antennes doivent être évalués ensemble comme une seule et unique installation."
              },
              "synthesis": "Pour la téléphonie mobile, les VLI dans les LAUS sont de 4,0 V/m (≤ 900 MHz), 6,0 V/m (≥ 1800 MHz) et 5,0 V/m (autres fréquences). Le périmètre de coordination se calcule par r = F · √(ERP90). Les antennes adaptatives bénéficient de facteurs de correction KAA selon leurs sous-réseaux.",
              "quiz": [
                      {
                              "question": "1. Quelle est la valeur limite de l'installation pour une antenne mobile émettant à 900 MHz (Annexe 1 ch. 64 let. a) ?",
                              "options": [
                                      "1,0 V/m",
                                      "4,0 V/m",
                                      "6,0 V/m",
                                      "8,5 V/m"
                              ],
                              "correctAnswer": 1,
                              "explanation": "L'Annexe 1 ch. 64 let. a fixe la VLI à 4,0 V/m pour les installations émettant exclusivement autour de 900 MHz ou fréquences plus basses.",
                              "articleRef": "Annexe 1 ch. 64 let. a"
                      },
                      {
                              "question": "2. Quelle est la VLI pour une station de téléphonie mobile émettant exclusivement à 1800 MHz ou plus (Annexe 1 ch. 64 let. b) ?",
                              "options": [
                                      "3,0 V/m",
                                      "5,0 V/m",
                                      "6,0 V/m",
                                      "12,0 V/m"
                              ],
                              "correctAnswer": 2,
                              "explanation": "L'Annexe 1 ch. 64 let. b fixe la VLI à 6,0 V/m pour les installations émettant exclusivement autour de 1800 MHz ou dans des gammes plus élevées.",
                              "articleRef": "Annexe 1 ch. 64 let. b"
                      },
                      {
                              "question": "3. Quel est le facteur de correction KAA pour une antenne adaptative possédant 64 sous-ensembles (sub arrays) selon le ch. 63 al. 3 ?",
                              "options": [
                                      "≥ 0,10",
                                      "≥ 0,40",
                                      "≥ 0,75",
                                      "1,00 (aucun facteur)"
                              ],
                              "correctAnswer": 0,
                              "explanation": "Le tableau du ch. 63 al. 3 ORNI attribue un facteur de correction KAA ≥ 0,10 pour les antennes adaptatives comportant 64 sub arrays et plus.",
                              "articleRef": "Annexe 1 ch. 63 al. 3"
                      },
                      {
                              "question": "4. Quelle est la VLI pour un émetteur de radiodiffusion FM ou télévision selon l'Annexe 1 ch. 74 let. b ?",
                              "options": [
                                      "1,0 V/m",
                                      "3,0 V/m",
                                      "5,5 V/m",
                                      "8,5 V/m"
                              ],
                              "correctAnswer": 1,
                              "explanation": "L'Annexe 1 ch. 74 let. b fixe la VLI à 3,0 V/m pour tous les émetteurs de radiodiffusion autres que les émetteurs à ondes longues et moyennes.",
                              "articleRef": "Annexe 1 ch. 74 let. b"
                      }
              ],
              "prevLessonId": "rs-814-710-lecon-5",
              "nextLessonId": "rs-814-710-lecon-7"
      },

      {
              "id": "rs-814-710-lecon-7",
              "routeId": "rs-814-710/lecon-7",
              "moduleId": "A",
              "parcoursId": "rs-814-710",
              "lessonNumber": 7,
              "totalLessons": 7,
              "code": "RS 814.710 — Leçon 7",
              "title": "Annexe 2 : Valeurs limites d’immissions & Sommation",
              "subtitle": "Protection générale de la santé humaine, courants de contact et sommation de fréquences",
              "articlesRange": "Annexe 2",
              "status": "Disponible",
              "duration": "10 min",
              "tag": "Annexe 2 · Immissions globales",
              "xpReward": 30,
              "objective": "Comprendre les valeurs limites d'immissions générales pour l'ensemble du corps, les limites de courant de contact/fuite et la formule mathématique de sommation pour fréquences multiples.",
              "introduction": "L'**Annexe 2 de l'ORNI** fixe les **valeurs limites d'immissions (VLI générales)** qui protègent la population suisse contre les effets thermiques et neurologiques avérés à court terme. Elles doivent être respectées partout où des personnes peuvent séjourner. L'Annexe définit également des formules strictes de sommation lorsque plusieurs fréquences se cumulent dans l'environnement.",
              "contentSections": [
                      {
                              "title": "1. Valeurs limites d'immissions par gamme de fréquences (Annexe 2 ch. 11)",
                              "text": "<div class=\"legal-ref-badge\">🔎 Annexe 2 ch. 11 • Seuils d'immissions corps entier</div>\n<p style=\"margin-bottom:0.75rem; line-height:1.6; color:var(--text-secondary);\">\nLes valeurs limites de l'Annexe 2 visent à empêcher tout effet biologique nocif (stimulation des tissus nerveux à basse fréquence et réchauffement thermique à haute fréquence) :\n</p>\n<table class=\"ocfo-norm-table\" style=\"margin-bottom:0.85rem;\">\n  <thead>\n    <tr>\n      <th>Fréquence</th>\n      <th>Champ électrique E (V/m)</th>\n      <th>Densité de flux B (µT)</th>\n      <th>Durée</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr><td>< 1 Hz</td><td>–</td><td>40 000 µT</td><td>Valeur max</td></tr>\n    <tr><td>8–25 Hz</td><td>10 000 V/m</td><td>5000 / f µT</td><td>Valeur max</td></tr>\n    <tr><td><strong>50 Hz (réseau suisse)</strong></td><td><strong>5 000 V/m</strong></td><td><strong>100 µT</strong> (5000/50)</td><td>Valeur max</td></tr>\n    <tr><td>10–400 MHz</td><td>28 V/m</td><td>0,092 µT</td><td>6 min</td></tr>\n    <tr><td>900 MHz (téléphonie)</td><td>41,25 V/m</td><td>0,138 µT</td><td>6 min</td></tr>\n    <tr><td>1800 MHz (téléphonie)</td><td>58,3 V/m</td><td>0,195 µT</td><td>6 min</td></tr>\n    <tr><td>2–10 GHz</td><td>61 V/m</td><td>0,20 µT</td><td>6 min</td></tr>\n  </tbody>\n</table>"
                      },
                      {
                              "title": "2. Courants de fuite et courants de contact (Annexe 2 ch. 12 et 13)",
                              "text": "<div class=\"legal-ref-badge\">🔎 Annexe 2 ch. 12 & 13 • Courants induits et de contact</div>\n<ul style=\"margin:0 0 0.85rem 1.25rem; line-height:1.6; color:var(--text-secondary);\">\n  <li><strong>Courant de fuite traversant un membre (ch. 12) :</strong> Pour les fréquences de 10 à 110 MHz, la valeur limite d'immission est de <strong>45 mA</strong> pour la valeur efficace moyennée sur 6 minutes.</li>\n  <li><strong>Courant de contact (ch. 13) :</strong> Valeur limite efficace :\n    <br>• <strong>0,5 mA :</strong> pour f < 2,5 kHz (évite la sensation de choc douloureux) ;\n    <br>• <strong>0,2 · f mA :</strong> pour 2,5 kHz ≤ f ≤ 100 kHz ;\n    <br>• <strong>20 mA :</strong> pour 0,1 MHz à 110 MHz (évite les brûlures de contact).</li>\n</ul>"
                      },
                      {
                              "title": "3. Immissions de fréquences multiples et sommation (Annexe 2 ch. 2)",
                              "text": "<div class=\"legal-ref-badge\">🔎 Annexe 2 ch. 2 • Règles mathématiques de sommation</div>\n<p style=\"margin-bottom:0.75rem; line-height:1.6; color:var(--text-secondary);\">\nLorsqu'un lieu est exposé simultanément à plusieurs sources de fréquences différentes :\n</p>\n<ul style=\"margin:0 0 0.85rem 1.25rem; line-height:1.6; color:var(--text-secondary);\">\n  <li><strong>Principe (ch. 21) :</strong> Les immissions sont déterminées séparément pour chaque fréquence, pondérées par un facteur spécifique et sommées.</li>\n  <li><strong>Règle d'or :</strong> La valeur limite d'immissions vaut <strong>1</strong> pour chaque somme calculée selon les formules des chiffres 221 à 225 :\n    <br><strong style=\"color:var(--accent-red); font-size:1.05rem;\">Somme pondérée ≤ 1</strong></li>\n  <li>Si la somme dépasse 1, l'autorité doit ordonner une limitation plus sévère conformément à l'Art. 5 al. 1.</li>\n</ul>"
                      }
              ],
              "practicalExample": {
                      "title": "Cas concret : Pourquoi 100 µT d'immission générale et 1 µT de VLI à 50 Hz ?",
                      "text": "100 µT est la limite internationale (ICNIRP) en dessous de laquelle aucun effet nocif immédiat sur le système nerveux n'est scientifiquement constaté pour une personne traversant la rue. 1 µT est la limite préventive suisse (VLI) imposée pour protéger le sommeil et l'exposition chronique 24h/24 des habitants dans leurs logements."
              },
              "importantPoint": {
                      "title": "Règle de sommation obligatoire",
                      "text": "Le fait que chaque antenne ou chaque ligne respecte individuellement sa propre valeur limite ne suffit pas : la somme pondérée de toutes les fréquences présentes simultanément ne doit jamais excéder la valeur normalisée de 1 (Annexe 2 ch. 21 al. 3)."
              },
              "synthesis": "À 50 Hz, la valeur limite d'immission générale est de 100 µT (contre 1 µT pour la VLI dans les LAUS). L'Annexe 2 plafonne le courant de fuite à 45 mA et le courant de contact de 0.5 à 20 mA. Lorsque plusieurs fréquences coexistent, la somme normalisée des immissions ne doit jamais excéder 1.",
              "quiz": [
                      {
                              "question": "1. À la fréquence industrielle de 50 Hz, quelle est la valeur limite d'immission générale selon l'Annexe 2 ch. 11 ?",
                              "options": [
                                      "1 µT",
                                      "10 µT",
                                      "100 µT (calculée par 5000 / 50)",
                                      "1000 µT"
                              ],
                              "correctAnswer": 2,
                              "explanation": "Pour la fréquence de 50 Hz (plage 8-25 Hz / 0.025-0.8 kHz), la formule 5000 / f donne une valeur limite d'immission générale de 100 µT.",
                              "articleRef": "Annexe 2 ch. 11"
                      },
                      {
                              "question": "2. Quelle est la valeur limite d'immission pour le courant de fuite traversant un membre selon l'Annexe 2 ch. 12 ?",
                              "options": [
                                      "5 mA",
                                      "45 mA (pour des fréquences de 10 à 110 MHz sur 6 minutes)",
                                      "100 mA",
                                      "500 mA"
                              ],
                              "correctAnswer": 1,
                              "explanation": "L'Annexe 2 ch. 12 fixe la valeur limite d'immissions pour le courant électrique traversant un membre à 45 mA pour des fréquences de 10 à 110 MHz sur une durée d'appréciation de 6 minutes.",
                              "articleRef": "Annexe 2 ch. 12"
                      },
                      {
                              "question": "3. Quelle est la valeur limite du courant de contact pour les très basses fréquences (< 2,5 kHz) selon l'Annexe 2 ch. 13 ?",
                              "options": [
                                      "0,5 mA",
                                      "10 mA",
                                      "30 mA",
                                      "50 mA"
                              ],
                              "correctAnswer": 0,
                              "explanation": "L'Annexe 2 ch. 13 fixe la valeur limite du courant de contact à 0,5 mA pour les fréquences inférieures à 2,5 kHz.",
                              "articleRef": "Annexe 2 ch. 13"
                      },
                      {
                              "question": "4. Selon l'Annexe 2 ch. 21 al. 3, à quelle valeur maximale la somme pondérée des immissions de plusieurs fréquences doit-elle être inférieure ou égale ?",
                              "options": [
                                      "Elle ne doit pas dépasser 1",
                                      "Elle ne doit pas dépasser 10",
                                      "Elle ne doit pas dépasser 100",
                                      "Il n'y a pas de limite pour le cumul"
                              ],
                              "correctAnswer": 0,
                              "explanation": "L'Annexe 2 ch. 21 al. 3 dispose : 'La valeur limite d’immissions vaut 1 pour chaque somme calculée selon le ch. 22'. La somme ne doit donc jamais dépasser 1.",
                              "articleRef": "Annexe 2 ch. 21 al. 3"
                      }
              ],
              "prevLessonId": "rs-814-710-lecon-6",
              "nextLessonId": "rs-814-710-evaluation-finale"
      },

      {
              "id": "rs-814-710-evaluation-finale",
              "routeId": "rs-814-710/evaluation-finale",
              "moduleId": "A",
              "parcoursId": "rs-814-710",
              "isFinalEvaluation": true,
              "code": "RS 814.710 — EXAMEN",
              "title": "Évaluation finale : Examen certifiant ORNI (RS 814.710)",
              "subtitle": "Contrôle global des connaissances sur l'Ordonnance sur le rayonnement non ionisant",
              "articlesRange": "Art. 1 à 21 & Annexes 1-2",
              "status": "Disponible",
              "duration": "20 min",
              "tag": "Évaluation officielle",
              "xpReward": 100,
              "objective": "Valider l'assimilation globale de l'ORNI : champ d'application, LAUS, VLI à 1 µT, courants déterminants, règles de téléphonie mobile, NIBT et valeurs limites d'immissions.",
              "introduction": "Bienvenue à l'<strong>Examen certifiant officiel RS 814.710 — ORNI</strong>. Cette évaluation comporte 16 questions à choix multiples balayant l'ensemble des 7 leçons du module. Une note minimale de 80 % est exigée pour obtenir l'attestation et remporter 100 XP.",
              "contentSections": [
                      {
                              "title": "Instructions pour l'examen final",
                              "text": "<div class=\"legal-ref-badge\">🎯 RS 814.710 • Validation certifiante</div>\n<p style=\"line-height:1.6; color:var(--text-secondary);\">\nCet examen officiel teste votre maîtrise complète des aspects juridiques et techniques de l'ORNI :\n<br>• Champ d'application et exclusions formelles (Art. 1 & 2) ;\n<br>• Définition stricte des lieux à utilisation sensible (LAUS) et statut des installations (Art. 3) ;\n<br>• Régime des émissions, assainissement et délais légaux (Art. 4 à 9) ;\n<br>• Fiche de données spécifique au site, obligations OFCOM et contrôles (Art. 10 à 12) ;\n<br>• Immissions générales et contraintes d'aménagement des zones à bâtir (Art. 13 à 21) ;\n<br>• Valeur limite de l'installation de 1 µT, courant déterminant et NIBT (Annexe 1 ch. 1 à 5) ;\n<br>• Téléphonie mobile, périmètre r et antennes adaptatives (Annexe 1 ch. 6 à 8) ;\n<br>• Valeurs limites d'immissions corps entier et formule de sommation (Annexe 2).\n</p>"
                      }
              ],
              "practicalExample": "",
              "importantPoint": "",
              "synthesis": "L'ORNI est le pilier suisse de la protection de la population contre les champs électromagnétiques stationnaires. Maîtriser ses 21 articles et ses deux annexes est indispensable pour concevoir, installer et contrôler des ouvrages électriques conformes.",
              "quiz": [
                      {
                              "question": "1. Quel est le but officiel de l'ORNI selon son Article 1 ?",
                              "options": [
                                      "Fixer le prix de vente de l'électricité basse tension en Suisse",
                                      "Protéger l’homme contre le rayonnement non ionisant nuisible ou incommodant",
                                      "Interdire totalement l'utilisation des smartphones en public",
                                      "Remplacer les disjoncteurs différentiels par des fusibles"
                              ],
                              "correctAnswer": 1,
                              "explanation": "L'Art. 1 ORNI énonce expressément : 'La présente ordonnance a pour but de protéger l’homme contre le rayonnement non ionisant nuisible ou incommodant'.",
                              "articleRef": "ORNI — Art. 1"
                      },
                      {
                              "question": "2. Laquelle des sources suivantes est exclue du champ d'application de l'ORNI selon l'Art. 2 al. 2 ?",
                              "options": [
                                      "Une ligne aérienne de transport à 220 kV",
                                      "Un transformateur de quartier 16 kV / 400 V",
                                      "Un four micro-ondes ou un téléphone portable d'un particulier",
                                      "Une sous-station électrique de couplage"
                              ],
                              "correctAnswer": 2,
                              "explanation": "L'Art. 2 al. 2 let. d ORNI exclut formellement les appareils électriques tels que les fours micro-ondes, cuisinières, outils électriques ou téléphones portables.",
                              "articleRef": "ORNI — Art. 2 al. 2 let. d"
                      },
                      {
                              "question": "3. Lequel des espaces suivants constitue un Lieu à Utilisation Sensible (LAUS) selon l'Art. 3 al. 3 ORNI ?",
                              "options": [
                                      "Une salle de séjour dans un logement d'habitation",
                                      "Un parking souterrain non ventilé",
                                      "Un local à vélos dans les sous-sols",
                                      "Une cage d'ascenseur fermée"
                              ],
                              "correctAnswer": 0,
                              "explanation": "L'Art. 3 al. 3 let. a ORNI classe comme LAUS les locaux à l'intérieur d'un bâtiment dans lesquels des personnes séjournent régulièrement durant une période prolongée.",
                              "articleRef": "ORNI — Art. 3 al. 3 let. a"
                      },
                      {
                              "question": "4. Quel est le délai d'assainissement de droit commun prévu par l'Art. 8 al. 1 si l'Annexe 1 ne fixe pas de durée spécifique ?",
                              "options": [
                                      "Un an au plus",
                                      "Cinq ans au plus",
                                      "Dix ans fermes",
                                      "Vingt-cinq ans"
                              ],
                              "correctAnswer": 1,
                              "explanation": "L'Art. 8 al. 1 ORNI dispose que si l'annexe 1 ne contient pas de prescriptions, le délai d'assainissement est de cinq ans au plus.",
                              "articleRef": "ORNI — Art. 8 al. 1"
                      },
                      {
                              "question": "5. Quelles installations sont formellement dispensées d'établir une fiche spécifique au site selon l'Art. 11 al. 1 ORNI ?",
                              "options": [
                                      "Les installations de téléphonie mobile 5G",
                                      "Les installations électriques domestiques (annexe 1 ch. 4)",
                                      "Les lignes de transport à haute tension",
                                      "Les stations radars météorologiques"
                              ],
                              "correctAnswer": 1,
                              "explanation": "L'Art. 11 al. 1 ORNI précise expressément : 'Les installations électriques domestiques font exception (annexe 1, ch. 4)'.",
                              "articleRef": "ORNI — Art. 11 al. 1"
                      },
                      {
                              "question": "6. À quelle fréquence minimale les données réelles d'exploitation des stations de téléphonie mobile doivent-elles être transmises à l'OFCOM (Art. 11a al. 1 let. c) ?",
                              "options": [
                                      "Chaque jour à minuit",
                                      "Au moins tous les 14 jours",
                                      "Tous les 6 mois",
                                      "Une fois tous les deux ans"
                              ],
                              "correctAnswer": 1,
                              "explanation": "L'Art. 11a al. 1 let. c ORNI impose la communication des données d'exploitation actuelles à l'OFCOM au moins tous les 14 jours.",
                              "articleRef": "ORNI — Art. 11a al. 1 let. c"
                      },
                      {
                              "question": "7. Que prescrit l'Art. 16 ORNI pour la création de nouvelles zones à bâtir ?",
                              "options": [
                                      "Toute construction est libre sans égard aux lignes électriques",
                                      "Les zones à bâtir ne doivent être définies que là où les valeurs limites de l'installation (Annexe 1) sont respectées ou peuvent l'être",
                                      "Il faut une dérogation ministérielle pour toute maison",
                                      "Seules les zones industrielles peuvent accueillir des transformateurs"
                              ],
                              "correctAnswer": 1,
                              "explanation": "L'Art. 16 ORNI pose le principe d'inconstructibilité dans les zones où la valeur limite de l'installation (Annexe 1) ne peut pas être respectée.",
                              "articleRef": "ORNI — Art. 16"
                      },
                      {
                              "question": "8. Quelle est la valeur limite de l'installation (VLI) pour une ligne aérienne ou un câble de transport > 1000 V dans un LAUS (Annexe 1 ch. 14) ?",
                              "options": [
                                      "0,5 µT",
                                      "1 µT (valeur efficace de la densité de flux magnétique)",
                                      "5 µT",
                                      "100 µT"
                              ],
                              "correctAnswer": 1,
                              "explanation": "L'Annexe 1 ch. 14 ORNI fixe la valeur limite de l'installation à 1 µT pour la valeur efficace de la densité de flux magnétique.",
                              "articleRef": "Annexe 1 ch. 14"
                      },
                      {
                              "question": "9. Quel est le délai d'assainissement maximal d'une ancienne ligne électrique dépassant la VLI selon l'Annexe 1 ch. 16 al. 2 ?",
                              "options": [
                                      "Trois ans au plus",
                                      "Sept ans",
                                      "Dix ans",
                                      "Aucun délai n'est fixé"
                              ],
                              "correctAnswer": 0,
                              "explanation": "L'Annexe 1 ch. 16 al. 2 ORNI prescrit expressément : 'Le délai d’assainissement au sens de l’art. 8, al. 1, est de trois ans au plus'.",
                              "articleRef": "Annexe 1 ch. 16 al. 2"
                      },
                      {
                              "question": "10. Quelle norme technique est expressément citée à l'Annexe 1 ch. 4 al. 3 comme état reconnu de la technique pour les installations domestiques ?",
                              "options": [
                                      "La norme allemande DIN VDE 0100",
                                      "La norme sur les installations à basse tension (NIBT / SN 411000)",
                                      "La norme NF C 15-100",
                                      "Le code électrique américain NEC"
                              ],
                              "correctAnswer": 1,
                              "explanation": "L'Annexe 1 ch. 4 al. 3 ORNI cite directement la norme sur les installations à basse tension (NIBT / SN 411000).",
                              "articleRef": "Annexe 1 ch. 4 al. 3"
                      },
                      {
                              "question": "11. Quelle exigence technique est imposée aux chemins de fer pour limiter le champ magnétique (Annexe 1 ch. 55 et 56) ?",
                              "options": [
                                      "L'installation d'un conducteur de retour au plus près des conducteurs d'alimentation",
                                      "L'abaissement de la tension de ligne à 230 V",
                                      "L'obligation de peindre les rails en blanc",
                                      "Le remplacement des voies par du béton armé"
                              ],
                              "correctAnswer": 0,
                              "explanation": "L'Annexe 1 ch. 55 al. 2 let. a et ch. 56 impose l'installation d'un conducteur de retour aussi près que possible des conducteurs d'alimentation.",
                              "articleRef": "Annexe 1 ch. 55 al. 2 & ch. 56"
                      },
                      {
                              "question": "12. Quelle est la VLI en champ électrique pour une antenne de téléphonie mobile émettant à 900 MHz (Annexe 1 ch. 64 let. a) ?",
                              "options": [
                                      "2,0 V/m",
                                      "4,0 V/m",
                                      "6,0 V/m",
                                      "10,0 V/m"
                              ],
                              "correctAnswer": 1,
                              "explanation": "L'Annexe 1 ch. 64 let. a fixe la VLI à 4,0 V/m pour les installations émettant autour de 900 MHz ou fréquences plus basses.",
                              "articleRef": "Annexe 1 ch. 64 let. a"
                      },
                      {
                              "question": "13. Quelle formule régit le calcul du rayon r du périmètre d'antennes de téléphonie selon le ch. 62 al. 4 ?",
                              "options": [
                                      "r = F · √(ERP90)",
                                      "r = 2 · π · ERP",
                                      "r = ERP / F²",
                                      "r = 50 · F"
                              ],
                              "correctAnswer": 0,
                              "explanation": "L'Annexe 1 ch. 62 al. 4 énonce la formule officielle : r = F · √(ERP90).",
                              "articleRef": "Annexe 1 ch. 62 al. 4"
                      },
                      {
                              "question": "14. Quelle est la valeur limite d'immission générale fixée à 50 Hz par l'Annexe 2 ch. 11 ?",
                              "options": [
                                      "1 µT",
                                      "10 µT",
                                      "100 µT (calculée selon 5000 / 50)",
                                      "1000 µT"
                              ],
                              "correctAnswer": 2,
                              "explanation": "À 50 Hz, la valeur limite d'immission générale pour la santé humaine est de 100 µT (contre 1 µT en VLI pour les LAUS).",
                              "articleRef": "Annexe 2 ch. 11"
                      },
                      {
                              "question": "15. Quelle est la limite d'immission pour le courant de fuite traversant un membre selon l'Annexe 2 ch. 12 ?",
                              "options": [
                                      "10 mA",
                                      "45 mA (pour 10 à 110 MHz sur 6 minutes)",
                                      "100 mA",
                                      "300 mA"
                              ],
                              "correctAnswer": 1,
                              "explanation": "L'Annexe 2 ch. 12 fixe la limite pour le courant électrique traversant un membre à 45 mA pour les fréquences de 10 à 110 MHz.",
                              "articleRef": "Annexe 2 ch. 12"
                      },
                      {
                              "question": "16. Quel est le principe de la règle de sommation pour fréquences multiples selon l'Annexe 2 ch. 21 al. 3 ?",
                              "options": [
                                      "On ne retient que la fréquence la plus élevée sans additionner",
                                      "La somme pondérée des quotients des immissions sur leurs limites ne doit jamais excéder 1",
                                      "On additionne les puissances brutes sans tenir compte de la fréquence",
                                      "La limite maximale est multipliée par le nombre d'émetteurs"
                              ],
                              "correctAnswer": 1,
                              "explanation": "Selon l'Annexe 2 ch. 21 al. 3, la valeur limite d'immissions vaut 1 pour chaque somme calculée selon le ch. 22 : le cumul pondéré ne doit donc jamais dépasser 1.",
                              "articleRef": "Annexe 2 ch. 21 al. 3"
                      }
              ],
              "prevLessonId": "rs-814-710-lecon-7"
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
    'rs-814-710': 'rs-814-710-lecon-1',
    'RS-814-710': 'rs-814-710-lecon-1',
    'rs-814-710-orni': 'rs-814-710-lecon-1',
    'orni': 'rs-814-710-lecon-1',
    'rs-814-710-lecon-1': 'rs-814-710-lecon-1',
    'rs-814-710-lecon-2': 'rs-814-710-lecon-2',
    'rs-814-710-lecon-3': 'rs-814-710-lecon-3',
    'rs-814-710-lecon-4': 'rs-814-710-lecon-4',
    'rs-814-710-lecon-5': 'rs-814-710-lecon-5',
    'rs-814-710-lecon-6': 'rs-814-710-lecon-6',
    'rs-814-710-lecon-7': 'rs-814-710-lecon-7',
    'rs-814-710-evaluation-finale': 'rs-814-710-evaluation-finale',
    'rs-734-27': 'rs-734-27-lecon-1',
    'RS-734-27': 'rs-734-27-lecon-1',
    'rs-734-27-oibt': 'rs-734-27-lecon-1',
    'oibt': 'rs-734-27-lecon-1',
    'rs-734-27-lecon-1': 'rs-734-27-lecon-1',
    'rs-734-27-lecon-2': 'rs-734-27-lecon-2',
    'rs-734-27-lecon-3': 'rs-734-27-lecon-3',
    'rs-734-27-lecon-4': 'rs-734-27-lecon-4',
    'rs-734-27-lecon-5': 'rs-734-27-lecon-5',
    'rs-734-27-lecon-6': 'rs-734-27-lecon-6',
    'rs-734-27-lecon-7': 'rs-734-27-lecon-7',
    'rs-734-27-annexe': 'rs-734-27-lecon-7',
    'rs-734-27-evaluation-finale': 'rs-734-27-evaluation-finale',
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
