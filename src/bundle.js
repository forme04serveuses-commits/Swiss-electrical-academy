/* Swiss Electrical Academy — Standalone Bundle (Compatible file:// & http://) */
(() => {
  'use strict';

  // ==================== src/data/academy-data.js ====================
  // Swiss Electrical Academy — Registre officiel des données et modules (V1.1)
  // Source de vérité : Prescriptions officielles suisses (LIE, OCFo, OIBT, NIBT 2025, ESTI, SN)
  // Règle absolue : Aucune invention de référence technique. Données réelles ou « Contenu en préparation ».

  const ACADEMY_INFO = {
    name: "ELECBOOK",
    shortName: "EBOOK",
    baseline: "Apprendre les règles. Comprendre les risques. Maîtriser la pratique.",
    version: "2.1",
    themeColor: "#1F3D4A",
    accentElectric: "#38BDF8",
    accentRed: "#EF4444"
  };

  // Profil apprenant par défaut
  const DEFAULT_USER = {
    name: "Tommy Flynn",
    role: "Installateur-électricien",
    avatar: "👨‍🔧",
    level: "Niveau 2 — Praticien qualifié"
  };

  // Badges déblocables officiels (Section 25)
  const OFFICIAL_BADGES = [
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
  const TRAINER_DEMO = {
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

  // Informations officielles et structure en 4 leçons de la Pyramide des lois
  // Source de vérité : Infographie synthétique originale & Recueil systématique du droit fédéral
  const PYRAMIDE_LOIS_INFO = {
    id: "pyramide-lois",
    code: "Pyramide des lois",
    title: "Pyramide des lois",
    shortTitle: "Pyramide",
    description: "Cadre légal et hiérarchie normative suisse : lois fédérales, ordonnances fédérales, DETEC, règles techniques NIBT et structure des normes SN, SNR, SNG.",
    lessons: [
      {
        id: "pyr-01",
        slug: "lecon-1",
        number: "1",
        code: "PYR-01",
        title: "Histoire et Genèse des Lois Électriques (1888–1902)",
        subtitle: "De la protection télégraphique à la création de l'ASE et la LIE de 1902",
        duration: "6 min",
        xpReward: 30,
        summary: "Loi du 26 juin 1888 sur les lignes télégraphiques et téléphoniques, création de l'ASE (Electrosuisse) et fondement de la LIE du 24 juin 1902."
      },
      {
        id: "pyr-02",
        slug: "lecon-2",
        number: "2",
        code: "PYR-02",
        title: "La Hiérarchie Juridique — Du Conseil Fédéral aux Ordonnances",
        subtitle: "Niveau suprême (CF), lois fédérales (LIE, LSPro, LAA) et ordonnances d'application",
        duration: "8 min",
        xpReward: 30,
        summary: "Le Conseil fédéral au sommet, tableau officiel complet des références légales (RS 734.0 à RS 930.11) et widget interactif de la pyramide."
      },
      {
        id: "pyr-03",
        slug: "lecon-3",
        number: "3",
        code: "PYR-03",
        title: "Règles Techniques et Organismes d'Application",
        subtitle: "NIBT 2025, normes SN EN, directives et rôles de l'ESTI, la SUVA, l'AEAI et les PDIE",
        duration: "8 min",
        xpReward: 30,
        summary: "Règles reconnues de l'art (NIBT SN 411000:2025, SN EN), organismes de contrôle et de surveillance (ESTI, SUVA, AEAI, PDIE) et vidéo pédagogique complète."
      },
      {
        id: "pyr-04",
        slug: "lecon-4",
        number: "4",
        code: "PYR-04",
        title: "Structure et Typologie des Normes — [SN], [SNR] et [SNG]",
        subtitle: "26'000 normes en Suisse, tableau comparatif : définitions, intégration CH et durées de validité",
        duration: "7 min",
        xpReward: 30,
        summary: "Analyse comparative des normes exclusives [SN], des règles [SNR] (validité 5 ans + 3 ans) et des guides [SNG]."
      }
    ],
    finalEvaluation: {
      id: "pyr-evaluation-finale",
      slug: "evaluation-finale",
      code: "PYR-FINAL",
      title: "Évaluation finale — Pyramide des lois",
      subtitle: "Synthèse générale et validation certifiante sur l'ensemble de la hiérarchie juridique",
      duration: "15 min",
      xpReward: 100,
      summary: "Examen de certification comprenant 8 questions rigoureuses couvrant l'histoire, la hiérarchie, les organismes et la typologie des normes SN/SNR/SNG. Seuil de réussite à 75% requis."
    },
    totalLessons: 4,
    subtitle: "4 leçons officielles · Infographie synthétique en 4 volets · Évaluation finale certifiante",
    tag: "Cadre normatif fédéral",
    fullTitle: "Cadre légal et hiérarchie normative suisse (Pyramide des lois)"
  };

  // Informations officielles et structure en 11 chapitres de la RS 734.0 (LIE)
  // Source de vérité : 734.0_LIE.pdf (24 juin 1902, état au 1er avril 2026)
  const RS_734_0_INFO = {
    "id": "rs-734-0",
    "code": "RS 734.0",
    "title": "RS 734.0 — LIE",
    "shortTitle": "LIE",
    "description": "Loi fédérale concernant les installations électriques à faible et à fort courant du 24 juin 1902 (État le 1er avril 2026). Fondement légal suprême de la sécurité, de la planification des réseaux, des autorisations de construire, du contrôle et de la responsabilité en Suisse.",
    "lessons": [
      {
        "id": "rs-734-0-lecon-1",
        "slug": "lecon-1",
        "number": "1",
        "title": "Chapitre 1 — Dispositions générales",
        "articles": "Art. 1 à 3b",
        "duration": "7 min",
        "summary": "Haute surveillance de la Confédération, distinction légale entre faible et fort courant, prescriptions de sécurité et régime des émoluments."
      },
      {
        "id": "rs-734-0-lecon-2",
        "slug": "lecon-2",
        "number": "2",
        "title": "Chapitre 2 — Installations électriques à faible courant",
        "articles": "Art. 4 à 12",
        "duration": "5 min",
        "summary": "Conditions précises d'assujettissement des installations à faible courant à la LIE, réserve de l'approbation des plans et historique des articles 5 à 12 abrogés."
      },
      {
        "id": "rs-734-0-lecon-3",
        "slug": "lecon-3",
        "number": "3",
        "title": "Chapitre 3 — Installations électriques à fort courant",
        "articles": "Art. 13 à 15d",
        "duration": "9 min",
        "summary": "Assujettissement général du fort courant, définition légale des installations intérieures, délégation aux règles techniques et priorité au câblage souterrain (réforme 2017)."
      },
      {
        "id": "rs-734-0-lecon-4",
        "slug": "lecon-4",
        "number": "3a",
        "title": "Chapitre 3a — Procédure de plan sectoriel",
        "articles": "Art. 15e à 15k",
        "duration": "6 min",
        "summary": "Coordination avec l'aménagement du territoire (LAT), fixation du corridor de ligne, groupe d'accompagnement OFEN et décision finale du Conseil fédéral."
      },
      {
        "id": "rs-734-0-lecon-5",
        "slug": "lecon-5",
        "number": "3b",
        "title": "Chapitre 3b — Procédure d’approbation des plans",
        "articles": "Art. 16 à 17a",
        "duration": "10 min",
        "summary": "Obligation d'approbation préalable, répartition des compétences ESTI/OFEN, enquête publique de 30 jours, effet de concentration et procédure simplifiée."
      },
      {
        "id": "rs-734-0-lecon-6",
        "slug": "lecon-6",
        "number": "3c",
        "title": "Chapitre 3c — Zones réservées et alignements",
        "articles": "Art. 18 à 18d",
        "duration": "6 min",
        "summary": "Mesures de protection foncière anticipée pour futures lignes THT ≥ 220 kV, alignements, restrictions à la propriété et renvoi à l'expropriation matérielle."
      },
      {
        "id": "rs-734-0-lecon-7",
        "slug": "lecon-7",
        "number": "4",
        "title": "Chapitre 4 — Contrôle",
        "articles": "Art. 19 à 26a",
        "duration": "8 min",
        "summary": "Responsabilité primaire de l'exploitant (Art. 20), missions de l'Inspection fédérale ESTI, contrôles délégués et surveillance des installations intérieures (OIBT)."
      },
      {
        "id": "rs-734-0-lecon-8",
        "slug": "lecon-8",
        "number": "5",
        "title": "Chapitre 5 — Dispositions concernant la responsabilité civile",
        "articles": "Art. 27 à 41",
        "duration": "9 min",
        "summary": "Responsabilité causale sans faute de l'exploitant (Art. 27), motifs libératoires stricts (force majeure, faute de la victime), assurance obligatoire, nullité des décharges (Art. 39)."
      },
      {
        "id": "rs-734-0-lecon-9",
        "slug": "lecon-9",
        "number": "6",
        "title": "Chapitre 6 — Expropriation",
        "articles": "Art. 42 à 54",
        "duration": "6 min",
        "summary": "Titulaires du droit d'expropriation pour cause d'utilité publique, combinaison procédurale et identification des articles 42 et 46 à 54 abrogés."
      },
      {
        "id": "rs-734-0-lecon-10",
        "slug": "lecon-10",
        "number": "7",
        "title": "Chapitre 7 — Dispositions pénales",
        "articles": "Art. 55 à 60",
        "duration": "7 min",
        "summary": "Amendes jusqu'à 100 000 CHF pour actes intentionnels et 40 000 CHF par négligence, sanctions d'entreprise (Art. 56) et application du DPA (Art. 57)."
      },
      {
        "id": "rs-734-0-lecon-11",
        "slug": "lecon-11",
        "number": "8",
        "title": "Chapitre 8 — Dispositions finales",
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
  // Source de vérité : 734.2_OCFo.pdf (30 mars 1994, état au 1er juin 2019, RO 1994 1199)
  const RS_734_2_INFO = {
    id: "rs-734-2",
    code: "RS 734.2",
    shortCode: "OCFo",
    title: "Ordonnance sur les installations électriques à courant fort",
    subtitle: "8 leçons officielles · État au 1er juin 2019 · Structure officielle complète et Annexes 1 à 4",
    description: "Ordonnance du Conseil fédéral du 30 mars 1994 sur les installations électriques à courant fort (État le 1er juin 2019). Réglementation fédérale suisse fixant les exigences de sécurité applicables à l'établissement, à l'exploitation et à l'entretien de toutes les installations à courant fort en Suisse.",
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
  const RS_734_27_INFO = {
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
  const RS_814_710_INFO = {
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


  // Informations officielles et structure en 4 leçons de la Directive ESTI n° 221
  // Source de vérité : ESTI directive n° 221 / Version 0621 (valable dès le 1er juillet 2021)
  const ESTI_221_INFO = {
    "id": "esti-221",
    "code": "ESTI 221",
    "title": "Directive ESTI n° 221",
    "shortTitle": "ESTI 221",
    "description": "Directive ESTI n° 221 / Version 0621 — Obligations d'annoncer en cas d'autorisation générale ou limitée d'installer (Valable dès le 1er juillet 2021). Référentiel officiel fixant les 13 catégories d'avis d'installation obligatoire auprès des exploitants de réseau et les 4 critères cumulatifs de dispense du rapport de sécurité formel.",
    "lessons": [
      {
        "id": "esti-221-lecon-1",
        "slug": "lecon-1",
        "number": "1",
        "title": "Sections 1 & 2 — Introduction & Principes de l'avis d'installation",
        "sectionsRange": "Sections 1 & 2",
        "duration": "7 min",
        "summary": "Fondements légaux OIBT (art. 23, 24, 25), compétence régalienne de l'ESTI, principe de l'avis d'installation, signataires autorisés et liberté de forme de l'exploitant de réseau."
      },
      {
        "id": "esti-221-lecon-2",
        "slug": "lecon-2",
        "number": "2",
        "title": "Section 3 — Exceptions à l'obligation d'annoncer (Les 13 cas soumis)",
        "sectionsRange": "Section 3",
        "duration": "8 min",
        "summary": "Liste exhaustive des 13 catégories d'installations soumises à annonce, seuil déterminant > 3,7 kVA, raccordements, PDIE-CH, PV, bornes IRVE, chantiers et dispense de tous les autres travaux."
      },
      {
        "id": "esti-221-lecon-3",
        "slug": "lecon-3",
        "number": "3",
        "title": "Section 4 — Première vérification & Exception au rapport de sécurité formel",
        "sectionsRange": "Section 4",
        "duration": "9 min",
        "summary": "Obligation absolue de première vérification (art. 24 al. 1 OIBT), interdiction stricte pour apprentis/auxiliaires (art. 10a al. 4), 4 critères cumulatifs de dispense de RaSi formel et maintien du contrôle de réception < 20 ans."
      },
      {
        "id": "esti-221-lecon-4",
        "slug": "lecon-4",
        "number": "4",
        "title": "Sections 5 & 6 — Dispositions transitoires, Publication & Communication",
        "sectionsRange": "Sections 5 & 6",
        "duration": "6 min",
        "summary": "Entrée en vigueur au 1er juillet 2021, abrogation de la dérogation du 30 novembre 2018, publication au Recueil officiel (RS 170.512) et notification aux 5 organisations de branche (OFEN, AES, EIT.swiss, ASCE, ODEC)."
      }
    ],
    "finalEvaluation": {
      "id": "esti-221-evaluation-finale",
      "slug": "evaluation-finale",
      "title": "Évaluation finale — Directive ESTI n° 221",
      "sectionsRange": "Sections 1 à 6",
      "duration": "20 min",
      "summary": "10 questions représentatives d'examen couvrant les 6 sections de la directive ESTI 221. Seuil de réussite à 80% requis pour valider le module et obtenir le badge Expert ESTI 221."
    },
    "totalLessons": 4,
    "subtitle": "4 leçons officielles · Version 0621 · Valable dès le 1er juillet 2021",
    "tag": "Directive ESTI",
    "fullTitle": "Directive ESTI n° 221 — Obligations d'annoncer en cas d'autorisation générale ou limitée d'installer"
  };

  const ACADEMY_MODULES = [
    // --------------------------------------------------------------------------
    // MODULE A — Dispositions légales
    // --------------------------------------------------------------------------
    {
      id: "A",
      code: "A",
      title: "Dispositions légales",
      countLabel: "42 formations",
      description: "Cadre légal et hiérarchie normative suisse : lois fédérales, ordonnances fédérales, DETEC et prescriptions professionnelles.",
      badgeTheme: "legal",
      formations: [
        // ======================================================================
        // PARCOURS : PYRAMIDE DES LOIS & CADRE NORMATIF SUISSE
        // 4 leçons autonomes + 1 évaluation finale certifiante
        // Source de vérité : Infographie synthétique & Recueil systématique RS
        // ======================================================================
        {
          id: "pyr-01",
          routeId: "pyramide-lois/pyr-01",
          moduleId: "A",
          parcoursId: "pyramide-lois",
          lessonNumber: 1,
          totalLessons: 4,
          nextLessonId: "pyr-02",
          code: "PYR-01",
          title: "Histoire et Genèse des Lois Électriques (1888–1902)",
          subtitle: "De la protection télégraphique à la création de l'ASE et la LIE de 1902",
          status: "Disponible",
          duration: "6 min",
          tag: "Histoire & Genèse",
          xpReward: 30,
          objective: "Comprendre l'origine historique du cadre légal électrique suisse : la loi de 1888 sur les lignes télégraphiques et téléphoniques, la création de l'ASE et l'adoption de la LIE du 24 juin 1902.",
          introduction: "Bienvenue dans la première unité du parcours <strong>Pyramide des lois</strong> ! Pour comprendre la hiérarchie juridique moderne, il est indispensable de remonter aux origines de l'électrotechnique en Suisse. À la fin du XIXe siècle, l'essor rapide du courant fort posa des défis inédits de sécurité et de cohabitation avec les réseaux de communication existants.",
          contentSections: [
            {
              title: "1. La loi fédérale du 26 juin 1888 — Première intervention fédérale",
              text: `<div class="ocfo-legal-badge">Contexte historique • 26 juin 1888</div>
  <p style="margin-bottom:0.75rem; line-height:1.6; color:var(--text-secondary);">
  Avec la <strong>loi fédérale sur l’établissement de lignes téléphoniques et télégraphiques du 26 juin 1888</strong>, la Confédération est intervenue pour la première fois dans le secteur électrique suisse.
  </p>
  <p style="margin-bottom:0.75rem; line-height:1.6; color:var(--text-secondary);">
  Elle a cherché à protéger le réseau de transmission d'informations car elle observait un <strong>danger réel dans l’alimentation à courant fort</strong> des premières lignes d'énergie, susceptibles de perturber ou d'endommager gravement les télégraphes et téléphones.
  </p>`
            },
            {
              title: "2. Création de l'ASE (Electrosuisse) et naissance de la LIE (1902)",
              text: `<div class="ocfo-legal-badge">Fondation de l'ASE & Adoption de la LIE • 24 juin 1902</div>
  <p style="margin-bottom:0.75rem; line-height:1.6; color:var(--text-secondary);">
  La création de l’<strong>Association Suisse des Électriciens (ASE)</strong> — aujourd'hui <strong>Electrosuisse</strong> — a été décidée par les professionnels pour répondre aux difficultés techniques liées à l’accroissement rapide de l’alimentation en courant électrique.
  </p>
  <p style="margin-bottom:0.75rem; line-height:1.6; color:var(--text-secondary);">
  L’ASE a immédiatement préparé et publié les <strong>premières prescriptions techniques</strong> pour la réalisation et l’exploitation des installations à courant fort en Suisse.
  </p>
  <p style="margin-bottom:0.75rem; line-height:1.6; color:var(--text-secondary);">
  Ces prescriptions professionnelles pionnières ont directement constitué le socle technique et la base de la <strong>Loi fédérale sur les installations électriques (LIE) du 24 juin 1902</strong>.
  </p>
  <div class="ocfo-summary-box">
    <div class="box-title">📌 À RETENIR</div>
    La loi du 26 juin 1888 a été la première mesure de protection fédérale contre le courant fort. Les prescriptions techniques de l'ASE ont ensuite forgé la base de la LIE du 24 juin 1902, loi-cadre toujours en vigueur aujourd'hui.
  </div>`
            }
          ],
          importantPoint: "La loi du 26 juin 1888 protégeait les lignes de transmission contre les dangers du courant fort. Les premières prescriptions de l'ASE ont ensuite constitué le fondement de la LIE du 24 juin 1902.",
          quiz: [
            {
              id: "q_pyr01_1",
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
            },
            {
              id: "q_pyr01_2",
              type: "single",
              question: "Quel était l'objectif principal de la loi fédérale du 26 juin 1888 sur les lignes téléphoniques et télégraphiques ?",
              options: [
                "Protéger les installations de transmission contre le danger causé par l'alimentation à courant fort",
                "Remplacer toutes les lignes électriques aériennes par des câbles souterrains",
                "Créer l'Office fédéral de l'énergie (OFEN)",
                "Imposer la norme NIBT à tous les cantons suisses"
              ],
              correctAnswer: 0,
              explanation: "Par la loi du 26 juin 1888, la Confédération cherchait à protéger les lignes de télécommunication car elle observait un danger dans l’alimentation à courant fort des installations de transmission."
            }
          ]
        },
        {
          id: "pyr-02",
          routeId: "pyramide-lois/pyr-02",
          moduleId: "A",
          parcoursId: "pyramide-lois",
          lessonNumber: 2,
          totalLessons: 4,
          nextLessonId: "pyr-03",
          code: "PYR-02",
          title: "La Hiérarchie Juridique — Du Conseil Fédéral aux Ordonnances",
          subtitle: "Niveau suprême (CF), lois fédérales (LIE, LSPro, LAA) et ordonnances d'application",
          status: "Disponible",
          duration: "8 min",
          tag: "Hiérarchie légale",
          xpReward: 30,
          objective: "Identifier la structure pyramidale du droit fédéral : primauté du Conseil fédéral, articulation des lois fédérales, ordonnances d'exécution (OIBT, OCFo, O DETEC...) et leurs références RS officielles.",
          introduction: "Dans cette deuxième leçon, nous explorons l'architecture juridique suisse. Au sommet de la pyramide siège le Conseil fédéral. En dessous s'ordonnent les lois fédérales votées par le Parlement et les ordonnances d'exécution qui fixent les prescriptions de sécurité applicables sur le terrain.",
          contentSections: [
            {
              title: "1. Le principe de la hiérarchie juridique suisse",
              text: `<p style="margin-bottom:0.75rem; line-height:1.6; color:var(--text-secondary);">
  Dans l’ordre juridique suisse, les règles s’ordonnent du niveau le plus contraignant (au sommet) jusqu’aux modalités techniques d'exécution :
  </p>
  <ul style="margin:0 0 0.85rem 1.25rem; line-height:1.6; color:var(--text-secondary);">
    <li><strong>Conseil fédéral (CF) :</strong> Au sommet de l'autorité juridiquement contraignante, il édicte les ordonnances d'exécution et veille à l'application des lois.</li>
    <li><strong>Lois fédérales :</strong> Votées par l'Assemblée fédérale (Parlement), elles fixent les principes généraux, les devoirs fondamentaux et la responsabilité civile (LIE, LSPro, LAA, LTC).</li>
    <li><strong>Ordonnances fédérales :</strong> Édictées par le Conseil fédéral pour rendre les lois directement applicables (OIBT, OCFo, OCFa, O ESTI, OMBT, OLEI, OCEM, ORNI, OPA).</li>
    <li><strong>Ordonnances départementales :</strong> Édictées par le DETEC (ex. O DETEC RS 734.272).</li>
  </ul>`
            },
            {
              title: "2. Tableau officiel des abréviations et références légales (RS)",
              text: `<p style="margin-bottom:0.75rem; font-size:0.92rem; color:var(--text-secondary); line-height:1.6;">
  Références officielles au Recueil systématique du droit fédéral (RS) :
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
  <tr><td><strong>CF</strong></td><td>Conseil fédéral (Autorité suprême au sommet de la pyramide)</td></tr>
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
  </tbody>
  </table>
  </div>`
            }
          ],
          interactiveWidget: "pyramid-widget",
          importantPoint: "Au sommet de la pyramide, le Conseil fédéral (CF) constitue l'autorité suprême. Les lois fédérales (LIE, LSPro, LAA) fixent le cadre et les ordonnances (OIBT, OCFo) précisent les obligations applicables aux professionnels.",
          quiz: [
            {
              id: "q_pyr02_1",
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
              id: "q_pyr02_2",
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
            }
          ]
        },
        {
          id: "pyr-03",
          routeId: "pyramide-lois/pyr-03",
          moduleId: "A",
          parcoursId: "pyramide-lois",
          lessonNumber: 3,
          totalLessons: 4,
          nextLessonId: "pyr-04",
          code: "PYR-03",
          title: "Règles Techniques et Organismes d'Application",
          subtitle: "NIBT 2025, normes SN EN, directives et rôles de l'ESTI, la SUVA, l'AEAI et les PDIE",
          status: "Disponible",
          duration: "8 min",
          tag: "Règles de l'art",
          xpReward: 30,
          objective: "Identifier la place des règles techniques (NIBT 2025, SN EN) dans la pyramide et comprendre le rôle des organismes clés : ESTI, AEAI, SUVA et les distributeurs d'électricité (PDIE).",
          introduction: "Les lois et ordonnances définissent les objectifs fondamentaux de sécurité, mais ce sont les règles techniques reconnues (comme la NIBT 2025) et les organismes de surveillance et de prévention (ESTI, SUVA, AEAI, PDIE) qui encadrent concrètement la pratique sur les chantiers.",
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
              title: "1. Les règles techniques reconnues : NIBT et SN EN",
              text: `<p style="margin-bottom:0.75rem; line-height:1.6; color:var(--text-secondary);">
  Les règles techniques concrétisent l'état de la technique et créent une <strong>présomption de conformité</strong> aux ordonnances fédérales :
  </p>
  <div style="overflow-x:auto; margin-top:0.5rem; margin-bottom:1rem;">
  <table class="thresholds-table">
  <thead>
  <tr>
  <th style="min-width:180px;">Règle / Norme</th>
  <th>Description et Portée</th>
  </tr>
  </thead>
  <tbody>
  <tr><td><strong>NIBT (SN 411000 :2025)</strong></td><td>Norme sur les installations à basse tension. Document technique de référence pour l'étude, l'exécution et le contrôle des installations BT en Suisse.</td></tr>
  <tr><td><strong>SN EN</strong></td><td>Norme Suisse Européenne Norme : normes européennes harmonisées transposées dans la collection suisse.</td></tr>
  <tr><td><strong>SNR / SNG</strong></td><td>Règles Suisses et Guides Suisses élaborés pour préciser des applications sectorielles.</td></tr>
  </tbody>
  </table>
  </div>`
            },
            {
              title: "2. Les organismes d'application et de surveillance",
              text: `<p style="margin-bottom:0.75rem; line-height:1.6; color:var(--text-secondary);">
  Quatre organismes majeurs interviennent pour veiller à la sécurité et à l'application des règles :
  </p>
  <div style="overflow-x:auto; margin-top:0.5rem;">
  <table class="thresholds-table">
  <thead>
  <tr>
  <th style="min-width:130px;">Sigle</th>
  <th style="min-width:240px;">Organisme officiel</th>
  <th>Rôle et missions principales</th>
  </tr>
  </thead>
  <tbody>
  <tr><td><strong>ESTI</strong></td><td>Inspection fédérale des installations à courant fort</td><td>Surveillance générale, approbation des plans d'installations, surveillance du marché des matériels BT et délivrance des autorisations d'installer (OIBT).</td></tr>
  <tr><td><strong>SUVA</strong></td><td>Caisse nationale suisse d’assurance en cas d’accidents</td><td>Prévention des accidents du travail et des maladies professionnelles, édiction des règles vitales pour électriciens.</td></tr>
  <tr><td><strong>AEAI</strong></td><td>Association des établissements cantonaux d’assurance incendie</td><td>Prescriptions de protection incendie régissant l'implantation et la résistance au feu des installations électriques.</td></tr>
  <tr><td><strong>PDIE</strong></td><td>Prescriptions des distributeurs d’électricité CH</td><td>Prescriptions techniques de raccordement édictées par les gestionnaires de réseau de distribution (GRD).</td></tr>
  </tbody>
  </table>
  </div>`
            }
          ],
          importantPoint: "Les règles de l'art (NIBT 2025, SN EN) matérialisent l'état de la technique reconnu. L'ESTI surveille les installations et octroie les autorisations, la SUVA prévient les accidents, l'AEAI protège contre l'incendie et les PDIE régissent le raccordement.",
          quiz: [
            {
              id: "q_pyr03_1",
              type: "single",
              question: "Selon le cadre des normes électriques suisses, que désigne la NIBT (SN 411000 :2025) ?",
              options: [
                "La Norme sur les installations à basse tension concrétisant les règles de la technique reconnues",
                "Une loi fédérale adoptée par le Parlement suisse",
                "Une ordonnance départementale édictée par le DETEC",
                "Un guide explicatif non contraignant sans valeur juridique"
              ],
              correctAnswer: 0,
              explanation: "La NIBT (SN 411000 :2025) est la Norme sur les installations à basse tension, concrétisant les règles de la technique reconnues et assurant la conformité aux ordonnances fédérales (OIBT)."
            },
            {
              id: "q_pyr03_2",
              type: "single",
              question: "Quel organisme officiel a pour mission la surveillance générale, l'approbation des plans et le contrôle des installations à courant fort en Suisse ?",
              options: [
                "ESTI (Inspection fédérale des installations à courant fort)",
                "AEAI (Association des établissements cantonaux d’assurance incendie)",
                "SUVA (Caisse nationale suisse d’assurance en cas d’accidents)",
                "PDIE (Prescriptions des distributeurs d’électricité CH)"
              ],
              correctAnswer: 0,
              explanation: "L'ESTI (Inspection fédérale des installations à courant fort) est l'organe technique placé sous la haute surveillance de la Confédération chargé de veiller à la sécurité des installations et de délivrer les autorisations d'installer."
            }
          ]
        },
        {
          id: "pyr-04",
          routeId: "pyramide-lois/pyr-04",
          moduleId: "A",
          parcoursId: "pyramide-lois",
          lessonNumber: 4,
          totalLessons: 4,
          nextLessonId: "pyr-evaluation-finale",
          code: "PYR-04",
          title: "Structure et Typologie des Normes — [SN], [SNR] et [SNG]",
          subtitle: "26'000 normes en Suisse, tableau comparatif : définitions, intégration CH et durées de validité",
          status: "Disponible",
          duration: "7 min",
          tag: "Typologie normative",
          xpReward: 30,
          objective: "Maîtriser la typologie des publications de normalisation : distinguer formellement une Norme Suisse [SN], une Règle Suisse [SNR] et un Guide Suisse [SNG] selon leur définition, intégration à la collection CH et durée de validité.",
          introduction: "Le recueil de normes applicables en Suisse compte environ 26'000 documents. Mais toutes les publications normatives n'ont pas la même portée juridique ni la même durée de vie. Cette leçon décortique le tableau comparatif officiel entre [SN], [SNR] et [SNG].",
          contentSections: [
            {
              title: "1. Le paysage normatif suisse : 26'000 normes",
              text: `<p style="margin-bottom:0.75rem; line-height:1.6; color:var(--text-secondary);">
  Actuellement en Suisse, on compte environ <strong>26'000 normes</strong>, dont <strong>un millier de normes exclusivement suisses [SN]</strong>, alors que les 25'000 restantes sont d’origine européenne ou internationale et ont été transférées dans l’assortiment de normes suisses.
  </p>`
            },
            {
              title: "2. Structure et présentation comparée des [SN], [SNR] et [SNG]",
              text: `<div style="overflow-x:auto; margin-top:0.75rem;">
  <table class="thresholds-table">
  <thead>
  <tr>
  <th style="min-width:140px;">Critère</th>
  <th style="min-width:180px;">[SN] — Norme Suisse</th>
  <th style="min-width:180px;">[SNR] — Règle Suisse</th>
  <th style="min-width:180px;">[SNG] — Guide Suisse</th>
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
  <td><strong>Oui</strong></td>
  <td><strong>Non</strong></td>
  <td><strong>Non</strong></td>
  </tr>
  <tr>
  <td><strong>Description</strong></td>
  <td>Norme classique</td>
  <td>Publication normative à un accord limité. (Sans procéder à un vote formel)</td>
  <td>Publication sans définition normative</td>
  </tr>
  <tr>
  <td><strong>Validité</strong></td>
  <td><strong>Illimitée</strong></td>
  <td><strong>5 ans</strong> Possibilité de prolonger de 3 ans en cas ➔ en SN/SNG</td>
  <td><strong>Illimitée</strong></td>
  </tr>
  </tbody>
  </table>
  </div>
  <div class="ocfo-summary-box">
    <div class="box-title">📌 POINTS CLÉS DU TABLEAU COMPARATIF</div>
    • <strong>[SN] :</strong> Seule publication bénéficiant d'une intégration formelle à la norme CH, validité illimitée.<br>
    • <strong>[SNR] :</strong> Publication à accord limité sans vote formel, validité limitée à 5 ans (+ 3 ans de prolongation).<br>
    • <strong>[SNG] :</strong> Guide explicatif sans définition normative, validité illimitée.
  </div>`
            }
          ],
          importantPoint: "Seule la [SN] bénéficie d'une intégration formelle à la norme CH. La [SNR] est une règle à accord limité valable 5 ans (prolongation de 3 ans). Le [SNG] est un guide explicatif sans valeur normative.",
          quiz: [
            {
              id: "q_pyr04_1",
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
              id: "q_pyr04_2",
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
              id: "q_pyr04_3",
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
              id: "q_pyr04_4",
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
            }
          ]
        },
        {
          id: "pyr-evaluation-finale",
          routeId: "pyramide-lois/evaluation-finale",
          moduleId: "A",
          parcoursId: "pyramide-lois",
          isFinalEvaluation: true,
          code: "PYR-FINAL",
          title: "Évaluation finale — Pyramide des lois",
          subtitle: "Certification générale sur la hiérarchie juridique et les normes suisses",
          status: "Disponible",
          duration: "15 min",
          tag: "Évaluation officielle",
          xpReward: 100,
          objective: "Valider formellement la maîtrise globale de la Pyramide des lois suisses : histoire (1888-1902), hiérarchie juridique, références RS, règles techniques (NIBT) et structure des normes SN, SNR, SNG.",
          introduction: "Cette <strong>évaluation finale officielle</strong> valide l'assimilation approfondie du parcours <strong>Pyramide des lois</strong>. Composée de 8 questions d'examen à choix multiples, elle couvre l'intégralité des 4 unités pédagogiques : genèse historique (1888-1902), autorité suprême du Conseil fédéral, références légales RS, règles techniques et typologie des normes [SN], [SNR], [SNG]. Un score minimal de 75 % (6/8) est requis pour réussir la certification et obtenir vos 100 XP.",
          synthesis: "La pyramide des normes électriques suisses s'articule du sommet juridiquement contraignant (Conseil fédéral, lois LIE/LSPro/LAA, ordonnances OCFa/OCFo/O ESTI/OMBT/OIBT/O DETEC/OLEI/OCEM/LTC/ORNI/OPA) jusqu'à sa base technique ([SN], NIBT SN 411000:2025, SN EN, [SNR], [SNG], ESTI, AEAI, SUVA, PDIE).",
          synthesisVisual: {
            src: "./public/media/images/module-a/infographie_pyramide_lois.png",
            alt: "Infographie synthétique en 4 volets : 1) 1888-1902 : La naissance des lois (de la protection courant fort à la LIE), 2) La Hiérarchie : Une pyramide contraignante (Constitution > Lois > Ordonnances > Règles Techniques), 3) Normes NIBT 2025 et Organismes (L'ESTI, la SUVA et les distributeurs appliquent les règles pour la sécurité), 4) SN, SNR, SNG : Trois validités (SN illimitée, SNR 5 ans, SNG guides d'utilisation).",
            caption: "Figure A.1 — Synthèse visuelle : Histoire, Hiérarchie, Organismes et Validités des normes suisses",
            source: "Illustration originale — ELECBOOK"
          },
          contentSections: [
            {
              title: "Instructions pour l'évaluation finale",
              text: `<div class="ocfo-legal-badge">Examen officiel de certification • Pyramide des lois</div>
  <p style="margin-bottom:0.75rem; line-height:1.6; color:var(--text-secondary);">
  Cette évaluation finale récapitule l'intégralité des <strong>4 leçons</strong> du parcours consacré à la <strong>Pyramide des lois</strong> :
  </p>
  <ul style="margin:0 0 0.85rem 1.25rem; line-height:1.6; color:var(--text-secondary);">
    <li><strong>Nombre de questions :</strong> 8 questions d'examen à choix multiple.</li>
    <li><strong>Couverture pédagogique :</strong> Histoire & Genèse, Hiérarchie légale (CF & RS), Règles techniques & Organismes, Typologie SN / SNR / SNG.</li>
    <li><strong>Seuil de validation :</strong> 75% de réponses exactes (6/8).</li>
    <li><strong>Récompense :</strong> 100 XP et validation certifiante du parcours.</li>
  </ul>`
            }
          ],
          quiz: [
            {
              id: "q_final_pyr_1",
              type: "single",
              question: "1. Quelle date marque l'adoption de la LIE (Loi sur les installations électriques) dont les premières prescriptions furent préparées par l'ASE ?",
              options: [
                "24 juin 1902",
                "26 juin 1888",
                "12 juin 2009",
                "1er janvier 2025"
              ],
              correctAnswer: 0,
              explanation: "L'ASE a préparé les premières prescriptions pour la réalisation et l'exploitation des installations à courant fort, qui ont formé la base de la LIE du 24 juin 1902."
            },
            {
              id: "q_final_pyr_2",
              type: "single",
              question: "2. Quel était le but principal de la première loi fédérale du 26 juin 1888 concernant les lignes télégraphiques et téléphoniques ?",
              options: [
                "Protéger les installations de transmission contre le danger causé par l'alimentation à courant fort",
                "Imposer le raccordement triphasé à toutes les habitations",
                "Instaurer l'Inspection fédérale ESTI",
                "Définir les règles de tarification de l'électricité"
              ],
              correctAnswer: 0,
              explanation: "La Confédération a cherché à protéger les installations de télécommunication car elle observait un danger dans l’alimentation à courant fort des installations de transmission."
            },
            {
              id: "q_final_pyr_3",
              type: "single",
              question: "3. Dans la pyramide des normes électriques suisses, quel niveau se trouve au sommet de l'autorité juridiquement contraignante ?",
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
              id: "q_final_pyr_4",
              type: "single",
              question: "4. Dans les références légales officielles, à quoi correspond RS 734.27 - OIBT ?",
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
              id: "q_final_pyr_5",
              type: "single",
              question: "5. Selon la hiérarchie normative suisse, quelle est la nature juridique de la NIBT (SN 411000 :2025) ?",
              options: [
                "Une règle technique reconnue matérialisant l'état de la technique pour les installations basse tension",
                "Une loi fédérale votée au suffrage universel",
                "Une simple notice commerciale sans valeur de preuve",
                "Une ordonnance pénale de police administrative"
              ],
              correctAnswer: 0,
              explanation: "La NIBT (SN 411000 :2025) est la norme technique reconnue qui concrétise l'état de la technique et crée une présomption de conformité aux ordonnances fédérales."
            },
            {
              id: "q_final_pyr_6",
              type: "single",
              question: "6. Quel organisme officiel assure la surveillance générale et délivre les autorisations d'installer selon l'OIBT ?",
              options: [
                "ESTI (Inspection fédérale des installations à courant fort)",
                "AEAI (Association des établissements cantonaux d’assurance incendie)",
                "SUVA (Caisse nationale suisse d’assurance en cas d’accidents)",
                "PDIE (Prescriptions des distributeurs d’électricité)"
              ],
              correctAnswer: 0,
              explanation: "L'ESTI est l'Inspection fédérale chargée de la surveillance générale, des approbations et de la délivrance des autorisations d'installer."
            },
            {
              id: "q_final_pyr_7",
              type: "single",
              question: "7. Quelle est la durée de validité officielle d'une Règle Suisse [SNR] ?",
              options: [
                "5 ans Possibilité de prolonger de 3 ans en cas ➔ en SN/SNG",
                "Illimitée dès sa parution",
                "1 an seulement",
                "20 ans renouvelable une fois"
              ],
              correctAnswer: 0,
              explanation: "Selon le tableau officiel de structure des normes, la validité d'une [SNR] est de 5 ans avec possibilité de prolongation de 3 ans."
            },
            {
              id: "q_final_pyr_8",
              type: "single",
              question: "8. Parmi les publications [SN], [SNR] et [SNG], laquelle bénéficie formellement d'une intégration à la norme CH ?",
              options: [
                "[SN]",
                "[SNR]",
                "[SNG]",
                "Aucune des trois"
              ],
              correctAnswer: 0,
              explanation: "Seule la [SN] bénéficie de l'intégration formelle à la collection de normes CH (Oui pour [SN], Non pour [SNR], Non pour [SNG])."
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
                "title": "Chapitre 1 — Dispositions générales",
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
                "title": "Chapitre 2 — Installations électriques à faible courant",
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
                "title": "Chapitre 3 — Installations électriques à fort courant",
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
                "title": "Chapitre 3a — Procédure de plan sectoriel",
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
                "title": "Chapitre 3b — Procédure d’approbation des plans",
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
                "title": "Chapitre 3c — Zones réservées et alignements",
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
                "title": "Chapitre 4 — Contrôle",
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
                "title": "Chapitre 5 — Dispositions concernant la responsabilité civile",
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
                "title": "Chapitre 6 — Expropriation",
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
                "title": "Chapitre 7 — Dispositions pénales",
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
                "title": "Chapitre 8 — Dispositions finales",
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
      countLabel: "6 unités (1 directive disponible)",
      description: "Directives de l'Inspection fédérale des installations à courant fort (ESTI) précisant les obligations de sécurité, d'autorisation et de contrôle technique.",
      badgeTheme: "esti",
      formations: [
        {
                  "id": "esti-221-lecon-1",
                  "routeId": "esti-221/lecon-1",
                  "moduleId": "E",
                  "parcoursId": "esti-221",
                  "lessonNumber": 1,
                  "totalLessons": 4,
                  "code": "ESTI 221 — Leçon 1",
                  "title": "Sections 1 & 2 — Introduction & Principes de l'avis d'installation",
                  "subtitle": "Bases légales OIBT, avis d'installation, signataires autorisés et forme de l'annonce",
                  "sectionsRange": "Sections 1 & 2",
                  "status": "Disponible",
                  "duration": "7 min",
                  "tag": "Directive ESTI",
                  "xpReward": 30,
                  "objective": "Maîtriser le cadre légal de l'obligation d'annoncer selon les art. 23 et 25 OIBT, les règles de signature par type d'autorisation et le principe de liberté de forme fixé par les exploitants de réseaux.",
                  "introduction": "La <strong>Directive ESTI n° 221 (Version 0621)</strong>, valable dès le 1<sup>er</sup> juillet 2021, précise les obligations d'annoncer incombant aux titulaires d'autorisations d'installer générales ou limitées en vertu des art. 23 et 25 OIBT. Cette première unité aborde le fondement légal de l'« avis d'installation », les compétences déléguées à l'ESTI, les personnes habilitées à signer l'annonce et le régime formel arrêté par les gestionnaires de réseau.",
                  "contentSections": [
                          {
                                  "title": "1. Section 1 — Introduction & Fondements légaux OIBT (Art. 23, 24, 25)",
                                  "text": "<div class=\"ocfo-legal-badge\">ESTI 221 — Section 1 • Cadre légal OIBT révisé</div>\n<p style=\"margin-bottom:0.75rem; line-height:1.6; color:var(--text-secondary);\">\nLes <strong>art. 23 et 25 OIBT</strong> régissent les obligations d'annoncer incombant aux titulaires d'autorisations d'installer générales ou limitées. Ces obligations impliquent notamment d'annoncer au <strong>gestionnaire de réseau concerné</strong> les travaux d'installation avant que ceux-ci ne débutent, en pratique sous la forme d'un <strong>« avis d'installation »</strong>.\n</p>\n<p style=\"margin-bottom:0.75rem; line-height:1.6; color:var(--text-secondary);\">\nLes art. 23 et 25 OIBT révisés et entrant en vigueur le <strong>1<sup>er</sup> juillet 2021</strong> confient expressément à l'<strong>Inspection fédérale des installations à courant fort ESTI</strong> le soin de définir les dérogations à cette obligation d'annoncer (voir <strong>art. 23 al. 2</strong> et <strong>art. 25 al. 1<sup>bis</sup> OIBT</strong>). Ces dérogations figurent de manière <strong>exhaustive</strong> dans la présente directive.\n</p>\n<p style=\"margin-bottom:0.75rem; line-height:1.6; color:var(--text-secondary);\">\nIl appartient par ailleurs à l'ESTI de déterminer les cas dans lesquels l'obligation de rédiger un rapport de sécurité ne s'applique pas (voir <strong>art. 24 al. 5 OIBT</strong>).\n</p>"
                          },
                          {
                                  "title": "2. Section 2.a — Principe de l'obligation d'annoncer & Contenu de l'annonce",
                                  "text": "<div class=\"ocfo-legal-badge\">ESTI 221 — Section 2.a • Champ d'application & Délais</div>\n<p style=\"margin-bottom:0.75rem; line-height:1.6; color:var(--text-secondary);\">\n<strong>Principe général :</strong> L'ensemble des travaux d'installation exécutés sur des installations électriques à basse tension telles que celles visées à l'<strong>art. 2 al. 1 OIBT</strong> doivent être annoncés à l'exploitant du réseau compétent <strong>avant leur exécution et en temps utile</strong>.\n</p>\n<p style=\"margin-bottom:0.75rem; line-height:1.6; color:var(--text-secondary);\">\nCette obligation s'applique de manière égale à <strong>l'ensemble des titulaires d'une autorisation d'installer</strong>, y compris aux titulaires d'une <strong>autorisation temporaire</strong> (voir art. 23 al. 1 OIBT).\n</p>\n<div class=\"ocfo-warning-box\" style=\"margin-bottom:0.85rem;\">\n  <strong>⚡ Contenu de l'annonce :</strong> L'OIBT ne détaille pas les rubriques techniques à renseigner. <strong>Les exploitants de réseaux déterminent eux-mêmes le contenu de l'annonce.</strong>\n</div>"
                          },
                          {
                                  "title": "3. Sections 2.b & 2.c — Règles de signature & Liberté de forme",
                                  "text": "<div class=\"ocfo-legal-badge\">ESTI 221 — Sections 2.b & 2.c • Habilitations & Supports</div>\n<div class=\"ocfo-density-table-wrap\" style=\"margin-bottom:0.85rem;\">\n  <table class=\"ocfo-density-table\">\n    <thead>\n      <tr>\n        <th style=\"width:35%;\">Type d'autorisation d'installer</th>\n        <th style=\"width:65%;\">Personne habilitée à signer l'annonce (Section 2.b)</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong>Autorisations générales d'installer</strong></td>\n        <td>L'annonce doit être signée par :<br>\n        • <strong>une personne du métier</strong> (art. 8 OIBT) mentionnée dans l'autorisation d'installer <em>OU</em> ;<br>\n        • <strong>une personne autorisée à contrôler</strong> (art. 27 al. 1 let. a OIBT) mentionnée dans l'autorisation d'installer.</td>\n      </tr>\n      <tr>\n        <td><strong>Autorisations temporaires</strong></td>\n        <td>L'annonce doit être signée par la <strong>personne mentionnée dans ladite autorisation</strong> (voir art. 11 al. 1 OIBT).</td>\n      </tr>\n      <tr>\n        <td><strong>Autorisations d'installer limitées</strong></td>\n        <td>L'annonce doit être signée par la <strong>personne qui exécute les travaux d'installation</strong>.</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n<div class=\"ocfo-summary-box\">\n  <div class=\"box-title\">📄 FORME DE L'ANNONCE (Section 2.c)</div>\n  L'OIBT ne prescrit <strong>aucune forme particulière (numérique / écrite)</strong> pour l'annonce. L'obligation d'annoncer visant exclusivement les tâches des exploitants de réseaux, <strong>il appartient à ces derniers d'indiquer la forme souhaitée</strong> pour cette annonce (portail web, formulaire PDF ou papier).\n</div>"
                          }
                  ],
                  "practicalExample": "Une entreprise d'installation générale emploie un conseiller en sécurité titulaire du brevet fédéral, expressément inscrit comme personne autorisée à contrôler (art. 27 al. 1 let. a OIBT) sur l'autorisation d'installer ESTI de l'entreprise. En vertu de la Section 2.b de la directive 221, ce conseiller en sécurité peut valablement signer l'avis d'installation transmis au gestionnaire de réseau au même titre que la personne du métier (art. 8 OIBT).",
                  "importantPoint": "L'avis d'installation doit obligatoirement parvenir à l'exploitant du réseau avant l'exécution des travaux et en temps utile. Les exploitants déterminent eux-mêmes le contenu et la forme (numérique ou écrite) de l'annonce.",
                  "quiz": [
                          {
                                  "question": "À quel moment précis l'avis d'installation doit-il être transmis à l'exploitant du réseau selon la directive ESTI 221 ?",
                                  "options": [
                                          "Au plus tard lors de la mise sous tension de l'installation",
                                          "Avant l'exécution des travaux et en temps utile",
                                          "Dans les 30 jours suivant la remise de l'ouvrage au propriétaire",
                                          "Uniquement lors du contrôle final d'entreprise"
                                  ],
                                  "correctAnswer": 1,
                                  "explanation": "Selon la Section 2.a de la directive ESTI 221 (et l'art. 23 al. 1 OIBT), l'annonce doit être adressée à l'exploitant du réseau compétent avant l'exécution des travaux et en temps utile."
                          },
                          {
                                  "question": "Pour les autorisations générales d'installer, qui peut signer l'avis d'installation selon la Section 2.b ?",
                                  "options": [
                                          "Exclusivement le directeur général de l'entreprise d'installation",
                                          "N'importe quel installateur-électricien CFC ayant 3 ans d'expérience",
                                          "Une personne du métier (art. 8 OIBT) OU une personne autorisée à contrôler (art. 27 al. 1 let. a OIBT) mentionnée dans l'autorisation d'installer",
                                          "Uniquement un inspecteur assermenté de l'ESTI"
                                  ],
                                  "correctAnswer": 2,
                                  "explanation": "La Section 2.b dispose que l'annonce doit être signée par une personne du métier (art. 8 OIBT) mentionnée dans l'autorisation d'installer OU une personne autorisée à contrôler (art. 27 al. 1 let. a OIBT) mentionnée dans l'autorisation."
                          },
                          {
                                  "question": "Quelle forme l'OIBT impose-t-elle pour l'avis d'installation selon la Section 2.c ?",
                                  "options": [
                                          "Une forme papier avec lettre recommandée obligatoire",
                                          "Un formulaire numérique standardisé fédéral géré par l'ESTI",
                                          "Aucune forme particulière prescrite par l'OIBT : c'est aux exploitants de réseaux d'indiquer la forme souhaitée (numérique ou écrite)",
                                          "Un courrier électronique obligatoirement signé électroniquement (QES)"
                                  ],
                                  "correctAnswer": 2,
                                  "explanation": "La Section 2.c précise que l'OIBT ne prescrit aucune forme particulière (numérique/écrite) ; visant exclusivement les tâches des exploitants de réseaux, il leur appartient d'indiquer la forme souhaitée."
                          }
                  ],
                  "prevLessonId": null,
                  "nextLessonId": "esti-221-lecon-2"
          },
          {
                  "id": "esti-221-lecon-2",
                  "routeId": "esti-221/lecon-2",
                  "moduleId": "E",
                  "parcoursId": "esti-221",
                  "lessonNumber": 2,
                  "totalLessons": 4,
                  "code": "ESTI 221 — Leçon 2",
                  "title": "Section 3 — Exceptions à l'obligation d'annoncer (Les 13 cas soumis)",
                  "subtitle": "Liste exhaustive des travaux soumis à annonce, seuil de 3,7 kVA et travaux dispensés",
                  "sectionsRange": "Section 3",
                  "status": "Disponible",
                  "duration": "8 min",
                  "tag": "Directive ESTI",
                  "xpReward": 30,
                  "objective": "Identifier exhaustivement les 13 cas où une annonce aux exploitants de réseaux est obligatoire et déterminer avec certitude les travaux d'installation qui en sont dispensés.",
                  "introduction": "La <strong>Section 3</strong> de la directive ESTI 221 constitue le cœur opérationnel de la réglementation : elle fixe la liste exhaustive des cas où une annonce doit être faite aux exploitants de réseaux. La règle fondamentale posée par l'ESTI est binaire : seuls les travaux entrant dans l'une de ces 13 catégories sont soumis à obligation d'annonce ; <strong>tous les autres travaux en sont dispensés</strong>.",
                  "contentSections": [
                          {
                                  "title": "1. Principe d'exhaustivité & Règle fondamentale de dispense",
                                  "text": "<div class=\"ocfo-legal-badge\">ESTI 221 — Section 3 • Cadre dérogatoire exhaustif</div>\n<p style=\"margin-bottom:0.75rem; line-height:1.6; color:var(--text-secondary);\">\nConformément au mandat conféré par les art. 23 al. 2 et 25 al. 1<sup>bis</sup> OIBT, l'ESTI énumère de manière <strong>exhaustive</strong> les cas où une annonce doit être faite aux exploitants de réseaux.\n</p>\n<div class=\"ocfo-warning-box\" style=\"margin-bottom:0.85rem;\">\n  <strong>⚖️ RÈGLE D'OR DE LA DIRECTIVE 221 :</strong><br>\n  <em>« Les travaux d'installation qui entrent dans l'une de ces catégories sont soumis à une obligation d'annonce. <strong>Tous les autres travaux en sont dispensés.</strong> Ces consignes s'appliquent à l'ensemble des titulaires d'autorisations d'installer. »</em>\n</div>"
                          },
                          {
                                  "title": "2. Liste exhaustive des 13 catégories d'installations soumises à annonce",
                                  "text": "<div class=\"ocfo-legal-badge\">ESTI 221 — Section 3 • Les 13 cas d'annonce obligatoire</div>\n<div class=\"ocfo-density-table-wrap\" style=\"margin-bottom:0.85rem;\">\n  <table class=\"ocfo-density-table\">\n    <thead>\n      <tr>\n        <th style=\"width:12%;\">N°</th>\n        <th style=\"width:48%;\">Catégorie de travaux soumise à annonce (Section 3)</th>\n        <th style=\"width:40%;\">Critère technique / Précision officielle</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong>1</strong></td>\n        <td>Nouvelles installations et extensions d'installations</td>\n        <td>Entraînant une <strong>augmentation de puissance > 3.7 kVA</strong></td>\n      </tr>\n      <tr>\n        <td><strong>2</strong></td>\n        <td>Démontage d'installations électriques</td>\n        <td>Portant sur une <strong>puissance > 3.7 kVA</strong></td>\n      </tr>\n      <tr>\n        <td><strong>3</strong></td>\n        <td>Nouveau raccordement au réseau</td>\n        <td>Tout premier raccordement physique au réseau basse tension</td>\n      </tr>\n      <tr>\n        <td><strong>4</strong></td>\n        <td>Extension ou modification d'un raccordement existant au réseau</td>\n        <td>Modification de la liaison d'abonné ou de l'introduction bâtiment</td>\n      </tr>\n      <tr>\n        <td><strong>5</strong></td>\n        <td>Raccordement d'appareils et d'installations pouvant provoquer des <strong>variations de tension</strong></td>\n        <td>Selon recommandation de la Branche <strong>PDIE-CH</strong> (publiée par l'AES)</td>\n      </tr>\n      <tr>\n        <td><strong>6</strong></td>\n        <td>Raccordement d'appareils et d'installations pouvant provoquer des <strong>harmoniques</strong></td>\n        <td>Selon recommandation de la Branche <strong>PDIE-CH</strong></td>\n      </tr>\n      <tr>\n        <td><strong>7</strong></td>\n        <td>Raccordement de <strong>filtres actifs</strong> et d'installations de filtrage d'harmoniques</td>\n        <td>Selon recommandation de la Branche <strong>PDIE-CH</strong></td>\n      </tr>\n      <tr>\n        <td><strong>8</strong></td>\n        <td>Raccordement d'installations de <strong>production d'énergie</strong> au réseau de distribution à basse tension</td>\n        <td>Installations photovoltaïques, éoliennes, génératrices en régime <strong>parallèle ou en îlot</strong></td>\n      </tr>\n      <tr>\n        <td><strong>9</strong></td>\n        <td>Raccordement d'<strong>accumulateurs d'énergie électriques</strong></td>\n        <td>Systèmes de batteries stationnaires de stockage d'énergie</td>\n      </tr>\n      <tr>\n        <td><strong>10</strong></td>\n        <td>Raccordement de <strong>stations de charge pour véhicules électriques</strong></td>\n        <td>Bornes de recharge (wallbox et infrastructures IRVE, sans condition de seuil)</td>\n      </tr>\n      <tr>\n        <td><strong>11</strong></td>\n        <td>Nouvelles installations, modifications ou extensions de lignes principales ou de canalisations de commande et de dispositifs de mesure du gestionnaire du réseau</td>\n        <td>Ouvrages de transport, canalisations pilotes et organes de comptage du gestionnaire</td>\n      </tr>\n      <tr>\n        <td><strong>12</strong></td>\n        <td>Installations qui nécessitent une modification, un montage, un démontage ou un remplacement d'appareils de mesure et de commande du gestionnaire du réseau</td>\n        <td>Interventions sur compteurs, relais de télécommande, transformateurs de mesure</td>\n      </tr>\n      <tr>\n        <td><strong>13</strong></td>\n        <td>Installations provisoires ou temporaires</td>\n        <td>Telles que <strong>chantiers, fêtes foraines, etc.</strong></td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n<p style=\"font-size:0.8rem; color:var(--text-muted); line-height:1.5;\">\n  <sup>1</sup> <em>PDIE-CH : Recommandation de la Branche Prescriptions des distributeurs d'électricité CH, Conditions techniques de raccordement pour le raccordement de récepteurs d'énergie, d'installations de production ou de stockage, raccordés au réseau basse tension, publiée par l'Association des entreprises électriques suisses AES.</em>\n</p>"
                          },
                          {
                                  "title": "3. Application pratique : Les travaux d'installation dispensés d'annonce",
                                  "text": "<div class=\"ocfo-legal-badge\">ESTI 221 — Section 3 • Régime de dispense</div>\n<p style=\"margin-bottom:0.75rem; line-height:1.6; color:var(--text-secondary);\">\nTous les travaux qui n'entrent dans aucune des 13 catégories ci-dessus sont <strong>légalement dispensés d'avis d'installation</strong>.\n</p>\n<ul style=\"margin:0 0 0.85rem 1.25rem; line-height:1.6; color:var(--text-secondary);\">\n  <li><strong>Remplacement à l'identique ou ajout de prises / luminaires :</strong> si l'augmentation de puissance est ≤ 3,7 kVA et qu'aucune ligne principale ou appareil de comptage n'est touché.</li>\n  <li><strong>Rénovation d'installations intérieures terminales existantes :</strong> sans dépassement du seuil de 3,7 kVA et sans modification du coffret d'introduction ou des compteurs.</li>\n  <li><strong>Appareils standards ne provoquant ni harmoniques ni variations de tension :</strong> conformes aux normes CEM sans exigence spécifique PDIE-CH.</li>\n</ul>\n<div class=\"ocfo-summary-box\">\n  <div class=\"box-title\">📌 VALEUR CLÉ À RETENIR</div>\n  Le seuil de puissance déclenchant l'obligation d'annonce est de <strong>strictement plus de 3,7 kVA (> 3,7 kVA)</strong> (soit typiquement au-delà d'un circuit monophasé 16 A à 230 V). En deçà ou égal à 3,7 kVA, aucune annonce n'est requise sauf cas spécifiques (stations de charge, PV, accumulateurs, mesure gestionnaire, chantiers).\n</div>"
                          }
                  ],
                  "practicalExample": "Un installateur pose une prise de recharge murale (wallbox) de 11 kW dans un parking souterrain privé. Même si le raccordement électrique général de l'immeuble est déjà existant et largement dimensionné, cette installation entre obligatoirement dans la catégorie 10 (« Raccordement de stations de charge pour véhicules électriques ») ainsi que dans la catégorie 1 (> 3,7 kVA) : un avis d'installation doit être impérativement soumis à l'exploitant de réseau avant le début des travaux.",
                  "importantPoint": "Pour les nouvelles installations, extensions ou démontages, le seuil est strictement supérieur à 3,7 kVA (> 3,7 kVA). En revanche, les stations de charge, accumulateurs, installations de production et chantiers sont obligatoirement soumis à annonce quel que soit leur niveau de puissance.",
                  "quiz": [
                          {
                                  "question": "Quel est le seuil de puissance à partir duquel une extension d'installation nécessite obligatoirement une annonce selon le point 3 de l'ESTI 221 ?",
                                  "options": [
                                          "Une augmentation de puissance supérieure à 2,3 kVA (> 2,3 kVA)",
                                          "Une augmentation de puissance supérieure à 3,7 kVA (> 3,7 kVA)",
                                          "Une augmentation de puissance supérieure à 10 kVA (> 10 kVA)",
                                          "Toute extension quelle que soit sa puissance"
                                  ],
                                  "correctAnswer": 1,
                                  "explanation": "La catégorie 1 de la Section 3 vise les « Nouvelles installations et extensions d'installations entraînant une augmentation de puissance > 3.7 kVA »."
                          },
                          {
                                  "question": "Parmi les équipements suivants, lequel est soumis à une obligation d'annonce selon la Section 3 de la directive 221 ?",
                                  "options": [
                                          "Le simple remplacement d'une prise 230 V défectueuse dans un salon",
                                          "Le raccordement de stations de charge pour véhicules électriques",
                                          "L'installation d'un radiateur d'appoint de 2 kW sans modification de puissance souscrite",
                                          "La pose d'un luminaire LED de 50 W dans un couloir"
                                  ],
                                  "correctAnswer": 1,
                                  "explanation": "La catégorie 10 de la Section 3 soumet obligatoirement à annonce le « Raccordement de stations de charge pour véhicules électriques »."
                          },
                          {
                                  "question": "Que prévoit explicitement la directive ESTI 221 pour les travaux d'installation qui ne figurent pas dans la liste des 13 catégories du point 3 ?",
                                  "options": [
                                          "L'électricien doit demander une dérogation écrite préalable à l'ESTI",
                                          "Ces travaux sont formellement dispensés de l'obligation d'annonce",
                                          "L'annonce peut être faite après achèvement des travaux dans un délai de 6 mois",
                                          "Le propriétaire doit obligatoirement rédiger lui-même l'annonce"
                                  ],
                                  "correctAnswer": 1,
                                  "explanation": "La directive dispose de manière claire et catégorique : « Les travaux d'installation qui entrent dans l'une de ces catégories sont soumis à une obligation d'annonce. Tous les autres travaux en sont dispensés. »"
                          }
                  ],
                  "prevLessonId": "esti-221-lecon-1",
                  "nextLessonId": "esti-221-lecon-3"
          },
          {
                  "id": "esti-221-lecon-3",
                  "routeId": "esti-221/lecon-3",
                  "moduleId": "E",
                  "parcoursId": "esti-221",
                  "lessonNumber": 3,
                  "totalLessons": 4,
                  "code": "ESTI 221 — Leçon 3",
                  "title": "Section 4 — Première vérification & Exception au rapport de sécurité formel",
                  "subtitle": "Procès-verbal de 1ère vérification, statut des apprentis, 4 critères de dispense de RaSi et contrôle de réception",
                  "sectionsRange": "Section 4",
                  "status": "Disponible",
                  "duration": "9 min",
                  "tag": "Directive ESTI",
                  "xpReward": 30,
                  "objective": "Maîtriser les règles strictes de première vérification (art. 24 al. 1 et art. 10a al. 4 OIBT), les 4 critères cumulatifs permettant de renoncer au rapport de sécurité formel et le maintien du contrôle de réception.",
                  "introduction": "La <strong>Section 4</strong> rappelle que la première vérification avec procès-verbal est obligatoire sans exception avant mise en service. Elle définit les conditions exceptionnelles très précises permettant de renoncer à l'établissement du rapport de sécurité formel (RaSi selon l'art. 37 OIBT) au profit du seul procès-verbal de première vérification, tout en préservant le contrôle de réception légal.",
                  "contentSections": [
                          {
                                  "title": "1. Obligation stricte de première vérification & Rôle des apprentis",
                                  "text": "<div class=\"ocfo-legal-badge\">ESTI 221 — Section 4 • Première vérification (Art. 24 al. 1 & 10a al. 4 OIBT)</div>\n<p style=\"margin-bottom:0.75rem; line-height:1.6; color:var(--text-secondary);\">\nLes titulaires d'une autorisation générale d'installer sont tenus <strong>sans exception</strong> d'effectuer, avant la mise en service d'une installation électrique ou de parties de l'installation électrique, une <strong>première vérification parallèlement à la construction</strong>.\n</p>\n<p style=\"margin-bottom:0.75rem; line-height:1.6; color:var(--text-secondary);\">\nCette première vérification doit obligatoirement être <strong>consignée dans un procès-verbal</strong> (voir <strong>art. 24 al. 1 OIBT</strong>).\n</p>\n<div class=\"ocfo-warning-box\" style=\"margin-bottom:0.85rem;\">\n  <strong>🛑 RÈGLE STRICTE APPRENTIS ET AUXILIAIRES (Art. 10a al. 4 OIBT) :</strong><br>\n  • Les apprentis et les auxiliaires <strong>ne peuvent effectuer aucune première vérification sans direction et surveillance</strong>.<br>\n  • Il leur est également <strong>strictement interdit de signer un procès-verbal</strong> de première vérification.\n</div>\n<p style=\"margin-bottom:0.75rem; line-height:1.6; color:var(--text-secondary);\">\nPar ailleurs, un <strong>contrôle final propre à l'entreprise</strong> doit être effectué avant la remise d'une installation électrique au propriétaire (voir <strong>art. 24 al. 2 OIBT</strong>).\n</p>"
                          },
                          {
                                  "title": "2. Les 4 critères cumulatifs autorisant la dispense de rapport de sécurité formel",
                                  "text": "<div class=\"ocfo-legal-badge\">ESTI 221 — Section 4 • Conditions cumulatives de dispense de RaSi</div>\n<p style=\"margin-bottom:0.75rem; line-height:1.6; color:var(--text-secondary);\">\nLorsque des travaux d'installation remplissent <strong>simultanément</strong> les 4 critères suivants, il est possible, à titre exceptionnel, de renoncer à la rédaction d'un rapport de sécurité formel :\n</p>\n<div class=\"ocfo-density-table-wrap\" style=\"margin-bottom:0.85rem;\">\n  <table class=\"ocfo-density-table\">\n    <thead>\n      <tr>\n        <th style=\"width:15%;\">Critère</th>\n        <th style=\"width:85%;\">Condition cumulative obligatoire (Section 4)</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong>Critère 1</strong></td>\n        <td><strong>Réparations et remplacements</strong> de matériels électriques à basse tension tels que <strong>lampes, appareils ménagers, prises, etc.</strong> ;</td>\n      </tr>\n      <tr>\n        <td><strong>Critère 2</strong></td>\n        <td>Modification de la puissance <strong>inférieure ou égale à 3,7 kVA (≤ 3,7 kVA)</strong> ;</td>\n      </tr>\n      <tr>\n        <td><strong>Critère 3</strong></td>\n        <td><strong>Aucune adaptation</strong> des lignes principales, des lignes d'abonnés ou de distribution ;</td>\n      </tr>\n      <tr>\n        <td><strong>Critère 4</strong></td>\n        <td><strong>Absence d'obligation d'annoncer</strong> au sens du point 3 de la présente directive.</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n<div class=\"ocfo-summary-box\" style=\"margin-bottom:0.85rem;\">\n  <div class=\"box-title\">⚖️ CONSÉQUENCES JURIDIQUES ET PRATIQUES</div>\n  • En lieu et place du rapport de sécurité formel (art. 37 OIBT), <strong>il suffira d'établir le procès-verbal de la première vérification et de le remettre au propriétaire</strong>.<br>\n  • Il sera possible de <strong>renoncer au contrôle final</strong> selon l'art. 24 al. 2 OIBT.<br>\n  • Il sera toutefois <em>toujours possible dans ces cas d'établir un rapport de sécurité formel</em> au sens de l'art. 37 OIBT si souhaité.\n</div>"
                          },
                          {
                                  "title": "3. Maintien impératif du contrôle de réception (Art. 35 al. 3 ou 4 OIBT)",
                                  "text": "<div class=\"ocfo-legal-badge\">ESTI 221 — Section 4 • Périodicité de contrôle < 20 ans</div>\n<p style=\"margin-bottom:0.75rem; line-height:1.6; color:var(--text-secondary);\">\nL'obligation de procéder à un éventuel <strong>contrôle de réception</strong> au sens de l'<strong>art. 35 al. 3 ou 4 OIBT</strong> est <strong>maintenue</strong> même dans les cas où aucun rapport de sécurité formel n'est délivré par l'installateur.\n</p>\n<ul style=\"margin:0 0 0.85rem 1.25rem; line-height:1.6; color:var(--text-secondary);\">\n  <li><strong>Champ d'application :</strong> Sont concernées toutes les installations électriques dont la période de contrôle selon l'annexe OIBT est <strong>inférieure à 20 ans</strong> (périodicités de 1 an, 5 ans ou 10 ans, telles que locaux commerciaux, industriels, médicalisés, lieux de rassemblement, etc.).</li>\n  <li><strong>Établissement du RaSi :</strong> Dans ce cas, c'est <strong>l'entreprise chargée du contrôle de réception</strong> (organe de contrôle indépendant accrédité) qui établit le rapport de sécurité formel.</li>\n</ul>"
                          }
                  ],
                  "practicalExample": "Un électricien procède au remplacement de 4 prises 230 V et de 2 interrupteurs défectueux dans un restaurant (périodicité de contrôle de 5 ans selon l'annexe OIBT). Ces travaux de réparation n'entraînent aucune hausse de puissance (≤ 3,7 kVA), ne touchent pas à la ligne principale et sont dispensés d'annonce selon le point 3 : l'installateur remet simplement son PV de première vérification au restaurateur sans établir de RaSi formel. Toutefois, la période de contrôle étant inférieure à 20 ans (5 ans), l'obligation de contrôle de réception (art. 35 OIBT) subsiste, et c'est l'organisme de contrôle indépendant qui rédigera le rapport de sécurité formel.",
                  "importantPoint": "Pour renoncer au rapport de sécurité formel, les 4 critères de la Section 4 doivent être remplis simultanément. Les apprentis et auxiliaires ne peuvent en aucun cas signer un procès-verbal de première vérification. Le contrôle de réception périodique (< 20 ans) reste obligatoire même sans RaSi de l'installateur.",
                  "quiz": [
                          {
                                  "question": "Que prévoit l'art. 10a al. 4 OIBT cité dans la Section 4 concernant les apprentis et les auxiliaires ?",
                                  "options": [
                                          "Ils peuvent réaliser seuls la première vérification sous réserve d'une validation téléphonique",
                                          "Ils ne peuvent effectuer aucune première vérification sans direction et surveillance, et ont l'interdiction de signer le procès-verbal",
                                          "Ils ont le droit de signer le procès-verbal de première vérification s'ils sont en 4e année d'apprentissage",
                                          "Ils sont totalement dispensés de connaître les règles de première vérification"
                                  ],
                                  "correctAnswer": 1,
                                  "explanation": "La Section 4 cite expressément l'art. 10a al. 4 OIBT : les apprentis et les auxiliaires ne peuvent effectuer aucune première vérification sans direction et surveillance ; il leur est également interdit de signer un procès-verbal de première vérification."
                          },
                          {
                                  "question": "Combien de critères doivent être réunis SIMULTANÉMENT pour pouvoir renoncer à la rédaction d'un rapport de sécurité formel selon la Section 4 ?",
                                  "options": [
                                          "2 critères alternatifs au choix",
                                          "3 critères sur 4",
                                          "Les 4 critères cumulatifs énumérés à la Section 4",
                                          "Seul le critère d'absence d'obligation d'annoncer suffit"
                                  ],
                                  "correctAnswer": 2,
                                  "explanation": "Le texte indique sans équivoque : « Lorsque des travaux d'installation remplissent simultanément les critères suivants, il est possible, à titre exceptionnel, de renoncer à la rédaction d'un rapport de sécurité formel : » (les 4 critères doivent être simultanément remplis)."
                          },
                          {
                                  "question": "Dans quel cas l'obligation de procéder à un contrôle de réception (art. 35 OIBT) est-elle maintenue même si aucun rapport de sécurité formel n'est délivré par l'installateur ?",
                                  "options": [
                                          "Uniquement pour les installations sous haute tension > 1000 V",
                                          "Pour toutes les installations dont la période de contrôle selon l'annexe OIBT est inférieure à 20 ans",
                                          "Uniquement si l'exploitant de réseau en fait la demande expresse sous 24h",
                                          "Le contrôle de réception est toujours automatiquement annulé quand il n'y a pas de RaSi"
                                  ],
                                  "correctAnswer": 1,
                                  "explanation": "La Section 4 précise que l'obligation de procéder à un éventuel contrôle de réception est maintenue même sans rapport de sécurité formel pour « toutes les installations électriques dont la période de contrôle selon l'annexe OIBT est inférieure à 20 ans »."
                          }
                  ],
                  "prevLessonId": "esti-221-lecon-2",
                  "nextLessonId": "esti-221-lecon-4"
          },
          {
                  "id": "esti-221-lecon-4",
                  "routeId": "esti-221/lecon-4",
                  "moduleId": "E",
                  "parcoursId": "esti-221",
                  "lessonNumber": 4,
                  "totalLessons": 4,
                  "code": "ESTI 221 — Leçon 4",
                  "title": "Sections 5 & 6 — Dispositions transitoires, Publication & Communication",
                  "subtitle": "Entrée en vigueur au 1er juillet 2021, abrogation de 2018, publication au RO et organismes notifiés",
                  "sectionsRange": "Sections 5 & 6",
                  "status": "Disponible",
                  "duration": "6 min",
                  "tag": "Directive ESTI",
                  "xpReward": 30,
                  "objective": "Connaître la date d'entrée en vigueur de la directive ESTI 221, l'abrogation de l'ancienne dérogation de 2018, la procédure de publication au Recueil officiel et les 5 organisations partenaires notifiées.",
                  "introduction": "Les <strong>Sections 5 et 6</strong> clôturent la directive ESTI n° 221 en fixant sa date de prise d'effet au 1<sup>er</sup> juillet 2021, en abrogeant l'ancienne dérogation du 30 novembre 2018 et en garantissant la sécurité juridique par sa publication au Recueil officiel fédéral et sa notification aux partenaires de la branche électrique suisse.",
                  "contentSections": [
                          {
                                  "title": "1. Section 5 — Dispositions transitoires & Abrogation de la dérogation de 2018",
                                  "text": "<div class=\"ocfo-legal-badge\">ESTI 221 — Section 5 • Droit transitoire</div>\n<p style=\"margin-bottom:0.75rem; line-height:1.6; color:var(--text-secondary);\">\nLa directive ESTI n° 221 / Version 0621 <strong>entre en vigueur le 1<sup>er</sup> juillet 2021</strong>.\n</p>\n<div class=\"ocfo-abroge-card\" style=\"margin-bottom:0.85rem;\">\n  <span class=\"ocfo-abroge-badge\">ABROGATION FORMELLE</span>\n  <strong>Abrogation de la dérogation du 30 novembre 2018 :</strong> L'entrée en vigueur de la présente directive a pour effet immédiat d'<strong>abroger la dérogation de l'ESTI du 30 novembre 2018</strong>. Tout travail débuté à compter du 1<sup>er</sup> juillet 2021 est exclusivement soumis aux prescriptions de la directive 221.\n</div>"
                          },
                          {
                                  "title": "2. Section 6 — Publication au Recueil officiel & Voies de droit",
                                  "text": "<div class=\"ocfo-legal-badge\">ESTI 221 — Section 6 • Publications officielles (RS 170.512 & RS 172.021)</div>\n<p style=\"margin-bottom:0.75rem; line-height:1.6; color:var(--text-secondary);\">\nL'abrogation de la dérogation de l'ESTI du 30 novembre 2018 et son remplacement par la présente directive sont publiées dans le <strong>Recueil officiel (RO)</strong> conformément aux :\n</p>\n<ul style=\"margin:0 0 0.85rem 1.25rem; line-height:1.6; color:var(--text-secondary);\">\n  <li><strong>Art. 13 al. 2 let. c et 13 al. 3</strong> de la loi sur les publications officielles (<strong>RS 170.512</strong>) ;</li>\n  <li><strong>Art. 23</strong> de l'Ordonnance sur les publications officielles (<strong>RS 170.512.1</strong>).</li>\n</ul>\n<div class=\"ocfo-warning-box\" style=\"margin-bottom:0.85rem;\">\n  <strong>⚖️ Voies de droit (RS 172.021) :</strong> En application de l'<strong>art. 35 al. 3 de la loi fédérale sur la procédure administrative (RS 172.021)</strong>, les personnes concernées peuvent demander que la décision indique les voies de droit.\n</div>"
                          },
                          {
                                  "title": "3. Notification officielle aux 5 organisations de branche",
                                  "text": "<div class=\"ocfo-legal-badge\">ESTI 221 — Section 6 • Destinataires de la communication</div>\n<p style=\"margin-bottom:0.75rem; line-height:1.6; color:var(--text-secondary);\">\nLa publication susmentionnée ainsi que la directive sont en outre formellement communiquées à <strong>5 entités clés</strong> du secteur électrotechnique suisse :\n</p>\n<div class=\"ocfo-density-table-wrap\" style=\"margin-bottom:0.85rem;\">\n  <table class=\"ocfo-density-table\">\n    <thead>\n      <tr>\n        <th style=\"width:25%;\">Sigle officiel</th>\n        <th style=\"width:75%;\">Dénomination complète de l'organisation</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong>OFEN</strong></td>\n        <td>Office fédéral de l'énergie</td>\n      </tr>\n      <tr>\n        <td><strong>AES</strong></td>\n        <td>Association des entreprises électriques suisses</td>\n      </tr>\n      <tr>\n        <td><strong>EIT.swiss</strong></td>\n        <td>Union suisse des installateurs-électriciens</td>\n      </tr>\n      <tr>\n        <td><strong>ASCE</strong></td>\n        <td>Association suisse pour le contrôle des installations électriques</td>\n      </tr>\n      <tr>\n        <td><strong>ODEC</strong></td>\n        <td>Association suisse des diplômées et des diplômés des écoles supérieures</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n<div class=\"ocfo-summary-box\">\n  <div class=\"box-title\">📌 SYNTHÈSE DE LA LEÇON</div>\n  Valable dès le 1<sup>er</sup> juillet 2021, la directive ESTI 221 remplace la dérogation de 2018. Publiée au Recueil officiel fédéral, elle lie l'ensemble des acteurs sous l'autorité coordonnée de l'ESTI, de l'OFEN, de l'AES, d'EIT.swiss, de l'ASCE et de l'ODEC.\n</div>"
                          }
                  ],
                  "practicalExample": "Lors d'une contestation administrative sur la portée d'une exigence d'annonce d'un gestionnaire de réseau, un installateur se réfère à la publication officielle de la directive 221 au Recueil officiel (RS 170.512) et demande formellement la communication des voies de droit applicables conformément à l'art. 35 al. 3 de la loi sur la procédure administrative (RS 172.021).",
                  "importantPoint": "La directive ESTI 221 est entrée en vigueur le 1er juillet 2021 en abrogeant la dérogation du 30 novembre 2018. Elle est publiée au Recueil officiel fédéral et notifiée à l'OFEN, l'AES, EIT.swiss, l'ASCE et l'ODEC.",
                  "quiz": [
                          {
                                  "question": "À quelle date précise la directive ESTI 221 est-elle entrée en vigueur selon la Section 5 ?",
                                  "options": [
                                          "Le 1er janvier 2020",
                                          "Le 1er juillet 2021",
                                          "Le 30 novembre 2018",
                                          "Le 1er avril 2026"
                                  ],
                                  "correctAnswer": 1,
                                  "explanation": "La Section 5 dispose expressément : « La présente directive entre en vigueur le 1er juillet 2021. »"
                          },
                          {
                                  "question": "Quel texte de l'ESTI a été formellement abrogé par l'entrée en vigueur de la directive 221 selon la Section 5 ?",
                                  "options": [
                                          "La directive ESTI n° 407 de 2015",
                                          "L'Ordonnance sur le courant fort de 1994",
                                          "La dérogation de l'ESTI du 30 novembre 2018",
                                          "La recommandation PDIE-CH de 2008"
                                  ],
                                  "correctAnswer": 2,
                                  "explanation": "La Section 5 précise : « L'entrée en vigueur de la présente directive a pour effet d'abroger la dérogation de l'ESTI du 30 novembre 2018. »"
                          },
                          {
                                  "question": "Parmi les organisations suivantes, laquelle NE fait PAS partie des 5 entités auxquelles la directive ESTI 221 est officiellement communiquée selon la Section 6 ?",
                                  "options": [
                                          "L'Office fédéral de l'énergie (OFEN)",
                                          "L'Association suisse pour le contrôle des installations électriques (ASCE)",
                                          "La Caisse nationale suisse d'assurance en cas d'accidents (SUVA)",
                                          "L'Union suisse des installateurs-électriciens (EIT.swiss)"
                                  ],
                                  "correctAnswer": 2,
                                  "explanation": "Les 5 organismes mentionnés à la Section 6 sont l'OFEN, l'AES, EIT.swiss, l'ASCE et l'ODEC. La SUVA ne figure pas dans cette liste."
                          }
                  ],
                  "prevLessonId": "esti-221-lecon-3",
                  "nextLessonId": "esti-221-evaluation-finale"
          },
          {
                  "id": "esti-221-evaluation-finale",
                  "routeId": "esti-221/evaluation-finale",
                  "moduleId": "E",
                  "parcoursId": "esti-221",
                  "isFinalEvaluation": true,
                  "code": "ESTI 221 — EXAMEN",
                  "title": "Évaluation finale — Directive ESTI n° 221",
                  "subtitle": "Certification officielle sur les obligations d'annoncer et dérogations au rapport de sécurité",
                  "sectionsRange": "Sections 1 à 6",
                  "status": "Disponible",
                  "duration": "20 min",
                  "tag": "Évaluation officielle",
                  "xpReward": 100,
                  "objective": "Valider formellement la maîtrise intégrale de la Directive ESTI 221 (Version 0621, en vigueur dès le 1er juillet 2021).",
                  "introduction": "Cette <strong>évaluation finale officielle</strong> valide votre maîtrise approfondie de la <strong>Directive ESTI n° 221</strong> (Version 0621). Composée de 10 questions d'examen représentatives couvrant l'ensemble du texte réglementaire, elle porte sur les bases légales OIBT (art. 23, 24, 25), les règles de signature, la liste exhaustive des 13 cas soumis à annonce, le seuil déterminant de 3,7 kVA, les règles de première vérification pour les apprentis et les 4 critères cumulatifs autorisant la dispense de rapport de sécurité formel. Un score minimal de <strong>80 % (8/10)</strong> est requis pour valider l'examen et remporter le badge Expert ESTI 221 avec 100 XP.",
                  "contentSections": [
                          {
                                  "title": "Consignes de l'évaluation finale",
                                  "text": "<div class=\"ocfo-legal-badge\">ESTI 221 — Certification officielle • Examen final</div>\n<p style=\"margin-bottom:0.75rem; line-height:1.6; color:var(--text-secondary);\">\nL'évaluation finale est constituée de <strong>10 questions à choix multiples</strong> couvrant l'intégralité des 6 sections de la directive ESTI 221 / Version 0621 :\n</p>\n<ul style=\"margin:0 0 0.85rem 1.25rem; line-height:1.6; color:var(--text-secondary);\">\n  <li><strong>Bases légales OIBT & avis d'installation :</strong> Art. 23 et 25 OIBT, rôle de l'ESTI, délais et forme de l'annonce.</li>\n  <li><strong>Signataires autorisés :</strong> Règles spécifiques pour autorisations générales, temporaires et limitées.</li>\n  <li><strong>Les 13 catégories obligatoires :</strong> Seuils de 3,7 kVA, raccordements, PDIE-CH, PV, bornes de charge, chantiers.</li>\n  <li><strong>Première vérification & statut des apprentis :</strong> Art. 24 al. 1 et art. 10a al. 4 OIBT.</li>\n  <li><strong>Dispense de rapport de sécurité formel :</strong> Les 4 critères cumulatifs et maintien du contrôle de réception (< 20 ans).</li>\n  <li><strong>Dispositions transitoires & publication :</strong> Entrée en vigueur au 01.07.2021, abrogation de 2018 et organismes notifiés.</li>\n</ul>\n<div class=\"ocfo-warning-box\">\n  <strong>🎯 Critère de certification :</strong> Seuil d'admission fixé à <strong>80 % (8 bonnes réponses sur 10)</strong>. Vous pouvez recommencer l'évaluation en cas d'échec sans pénalité.\n</div>"
                          }
                  ],
                  "questions": [
                          {
                                  "question": "1. Sur quelle base légale révisée de l'OIBT l'ESTI est-elle habilitée à édicter les dérogations à l'obligation d'annoncer ?",
                                  "options": [
                                          "L'art. 3 LIE de 1902",
                                          "Les art. 23 al. 2 et 25 al. 1bis OIBT",
                                          "L'art. 40 OCFo de 1994",
                                          "L'art. 12 ORNI de 1999"
                                  ],
                                  "correctAnswer": 1,
                                  "explanation": "La Section 1 de l'ESTI 221 cite expressément les art. 23 al. 2 et 25 al. 1bis OIBT révisés au 1er juillet 2021 comme mandat légal délégué à l'ESTI pour définir ces dérogations."
                          },
                          {
                                  "question": "2. Pour les autorisations générales d'installer, qui peut valablement signer l'avis d'installation selon la Section 2.b ?",
                                  "options": [
                                          "Uniquement le titulaire du diplôme fédéral d'installateur",
                                          "Une personne du métier (art. 8 OIBT) OU une personne autorisée à contrôler (art. 27 al. 1 let. a OIBT) mentionnée dans l'autorisation d'installer",
                                          "Tout monteur-électricien chef d'équipe sur le chantier",
                                          "Le maître d'ouvrage propriétaire de l'immeuble"
                                  ],
                                  "correctAnswer": 1,
                                  "explanation": "Selon la Section 2.b, l'annonce pour les autorisations générales doit être signée par une personne du métier (art. 8 OIBT) OU une personne autorisée à contrôler (art. 27 al. 1 let. a OIBT) mentionnée dans l'autorisation."
                          },
                          {
                                  "question": "3. Qui fixe le contenu et la forme (écrite ou numérique) de l'avis d'installation ?",
                                  "options": [
                                          "Le Conseil fédéral dans une ordonnance d'exécution",
                                          "Les exploitants de réseaux compétents eux-mêmes",
                                          "L'Inspection fédérale ESTI sur un formulaire unique centralisé",
                                          "L'Office fédéral de l'énergie (OFEN)"
                                  ],
                                  "correctAnswer": 1,
                                  "explanation": "La Section 2.a et 2.c précisent que l'OIBT ne prescrit aucune forme particulière et que les exploitants de réseaux déterminent eux-mêmes le contenu et la forme de l'annonce."
                          },
                          {
                                  "question": "4. Quel est le critère de puissance entraînant l'obligation d'annonce lors d'une nouvelle installation ou d'une extension selon la Section 3 ?",
                                  "options": [
                                          "Une augmentation de puissance supérieure à 2,3 kVA",
                                          "Une augmentation de puissance supérieure à 3,7 kVA (> 3.7 kVA)",
                                          "Une augmentation de puissance strictement supérieure à 11 kVA",
                                          "Toute modification de puissance quelle qu'elle soit"
                                  ],
                                  "correctAnswer": 1,
                                  "explanation": "La catégorie 1 de la Section 3 dispose : « Nouvelles installations et extensions d'installations entraînant une augmentation de puissance > 3.7 kVA »."
                          },
                          {
                                  "question": "5. Le démontage d'une installation électrique existante doit-il faire l'objet d'une annonce au réseau ?",
                                  "options": [
                                          "Non, les démontages sont toujours totalement dispensés",
                                          "Oui, mais uniquement si la puissance démontée est supérieure à 3,7 kVA (> 3.7 kVA)",
                                          "Oui, pour tout démontage sans condition de seuil",
                                          "Uniquement si le bâtiment est entièrement détruit"
                                  ],
                                  "correctAnswer": 1,
                                  "explanation": "La catégorie 2 de la Section 3 soumet explicitement à annonce le « Démontage d'installations électriques > 3.7 kVA »."
                          },
                          {
                                  "question": "6. Le raccordement d'une station de charge pour véhicules électriques (wallbox) nécessite-t-il une annonce à l'exploitant de réseau ?",
                                  "options": [
                                          "Non, sauf si sa puissance dépasse 22 kW en triphasé",
                                          "Oui, le raccordement de stations de charge pour véhicules électriques figure expressément parmi les 13 cas soumis",
                                          "Uniquement si elle est accessible au public",
                                          "Seulement si l'exploitant de réseau le demande par écrit"
                                  ],
                                  "correctAnswer": 1,
                                  "explanation": "La catégorie 10 de la Section 3 vise expressément le « Raccordement de stations de charge pour véhicules électriques », sans condition d'accès public ou de seuil dérogatoire."
                          },
                          {
                                  "question": "7. Concernant la première vérification, quelle interdiction formelle l'art. 10a al. 4 OIBT pose-t-il aux apprentis ?",
                                  "options": [
                                          "Ils ont l'interdiction de mesurer la résistance d'isolement",
                                          "Ils ne peuvent effectuer aucune première vérification sans surveillance et ont l'interdiction absolue de signer le procès-verbal",
                                          "Ils ne peuvent participer à la vérification qu'après avoir terminé leur apprentissage",
                                          "Ils peuvent signer le procès-verbal s'ils sont accompagnés d'un collègue"
                                  ],
                                  "correctAnswer": 1,
                                  "explanation": "La Section 4 cite l'art. 10a al. 4 OIBT : « Les apprentis et les auxiliaires ne peuvent effectuer aucune première vérification sans direction et surveillance ; il leur est également interdit de signer un procès-verbal de première vérification. »"
                          },
                          {
                                  "question": "8. Les 4 critères permettant de renoncer à la rédaction d'un rapport de sécurité formel doivent-ils être remplis simultanément ?",
                                  "options": [
                                          "Non, un seul critère suffit",
                                          "Deux critères sur quatre suffisent",
                                          "Oui, les 4 critères doivent obligatoirement être remplis simultanément",
                                          "C'est au choix exclusif du maître d'ouvrage"
                                  ],
                                  "correctAnswer": 2,
                                  "explanation": "La Section 4 énonce expressément : « Lorsque des travaux d'installation remplissent simultanément les critères suivants, il est possible, à titre exceptionnel, de renoncer à la rédaction d'un rapport de sécurité formel : »."
                          },
                          {
                                  "question": "9. Lorsque les 4 critères de dispense de RaSi formel sont réunis, qu'est-ce que l'installateur remet au propriétaire ?",
                                  "options": [
                                          "Aucun document n'est remis",
                                          "Le procès-verbal de la première vérification",
                                          "Une facture acquittée avec mention de garantie légale",
                                          "Une attestation sur l'honneur rédigée sur papier libre"
                                  ],
                                  "correctAnswer": 1,
                                  "explanation": "La Section 4 précise : « Dans ce cas, en lieu et place du rapport de sécurité formel au sens de l'art. 37 OIBT, il suffira d'établir le procès-verbal de la première vérification et de le remettre au propriétaire. »"
                          },
                          {
                                  "question": "10. Quel effet l'entrée en vigueur de la directive ESTI 221 au 1er juillet 2021 a-t-elle eu sur les dérogations antérieures ?",
                                  "options": [
                                          "Elle a reconduit la dérogation ESTI de 2018 pour une durée indéterminée",
                                          "Elle a abrogé la dérogation de l'ESTI du 30 novembre 2018",
                                          "Elle a suspendu toutes les autorisations limitées d'installer",
                                          "Elle a abrogé l'ensemble de l'OIBT"
                                  ],
                                  "correctAnswer": 1,
                                  "explanation": "La Section 5 précise formellement : « L'entrée en vigueur de la présente directive a pour effet d'abroger la dérogation de l'ESTI du 30 novembre 2018. »"
                          }
                  ],
                  "prevLessonId": "esti-221-lecon-4",
                  "nextLessonId": null
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
  function findFormation(moduleId, formationId) {
    const mod = ACADEMY_MODULES.find(m => m.id === moduleId);
    if (!mod) return null;

    // Aliases pour rétrocompatibilité et accès fluide
    const aliases = {
      'esti-221': 'esti-221-lecon-1',
      'ESTI-221': 'esti-221-lecon-1',
      'esti221': 'esti-221-lecon-1',
      'esti-221-01': 'esti-221-lecon-1',
      'esti-221-02': 'esti-221-lecon-2',
      'esti-221-03': 'esti-221-lecon-3',
      'esti-221-04': 'esti-221-lecon-4',
      'esti-221-lecon-1': 'esti-221-lecon-1',
      'esti-221-lecon-2': 'esti-221-lecon-2',
      'esti-221-lecon-3': 'esti-221-lecon-3',
      'esti-221-lecon-4': 'esti-221-lecon-4',
      'esti-221-evaluation-finale': 'esti-221-evaluation-finale',
      'esti-221-examen': 'esti-221-evaluation-finale',
      'pyramide-lois': 'pyr-01',
      'pyramide': 'pyr-01',
      'a00': 'pyr-01',
      'pyr-01': 'pyr-01',
      'pyr-02': 'pyr-02',
      'pyr-03': 'pyr-03',
      'pyr-04': 'pyr-04',
      'pyr-evaluation-finale': 'pyr-evaluation-finale',
      'pyr-examen': 'pyr-evaluation-finale',
      'pyramide-lecon-1': 'pyr-01',
      'pyramide-lecon-2': 'pyr-02',
      'pyramide-lecon-3': 'pyr-03',
      'pyramide-lecon-4': 'pyr-04',
      'pyr-lecon-1': 'pyr-01',
      'pyr-lecon-2': 'pyr-02',
      'pyr-lecon-3': 'pyr-03',
      'pyr-lecon-4': 'pyr-04',
      'pyramide-evaluation-finale': 'pyr-evaluation-finale',
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


  // ==================== src/services/storage.js ====================
  // Swiss Electrical Academy — Service de stockage et persistance (V1.1)
  // Gestion localStorage, calcul de progression et garantie anti-farming d'XP


  const STORAGE_KEY_PREFIX = 'sea_';

  const KEYS = {
    XP: `${STORAGE_KEY_PREFIX}xp`,
    AWARDED_SOURCES: `${STORAGE_KEY_PREFIX}awarded_xp_sources`,
    COMPLETED_LESSONS: `${STORAGE_KEY_PREFIX}completed_lessons`,
    QUIZ_RESULTS: `${STORAGE_KEY_PREFIX}quiz_results`,
    UNLOCKED_BADGES: `${STORAGE_KEY_PREFIX}unlocked_badges`,
    LAST_ACTIVITY: `${STORAGE_KEY_PREFIX}last_activity`,
    THEME: `${STORAGE_KEY_PREFIX}theme`
  };

  const StorageService = {
    // Récupérer les données de thème
    getTheme() {
      return localStorage.getItem(KEYS.THEME) || 'dark';
    },

    setTheme(theme) {
      localStorage.setItem(KEYS.THEME, theme);
    },

    // XP total
    getXp() {
      const raw = localStorage.getItem(KEYS.XP);
      return raw ? parseInt(raw, 10) : 0;
    },

    // Ajouter des XP avec protection stricte anti-farming
    // Retourne le nombre d'XP réellement ajouté (0 si déjà attribué)
    addXp(amount, sourceId) {
      if (!sourceId || amount <= 0) return 0;

      const awardedSources = this.getAwardedSources();
      if (awardedSources.includes(sourceId)) {
        console.log(`[Anti-Farming] XP déjà attribués pour ${sourceId}, aucun doublon accordé.`);
        return 0;
      }

      // Attribuer l'XP
      const currentXp = this.getXp();
      const newXp = currentXp + amount;
      localStorage.setItem(KEYS.XP, newXp.toString());

      // Enregistrer la source pour empêcher tout gain futur
      awardedSources.push(sourceId);
      localStorage.setItem(KEYS.AWARDED_SOURCES, JSON.stringify(awardedSources));

      // Vérifier si des badges doivent être débloqués
      this.checkAndUnlockBadges(newXp);

      return amount;
    },

    getAwardedSources() {
      try {
        const raw = localStorage.getItem(KEYS.AWARDED_SOURCES);
        return raw ? JSON.parse(raw) : [];
      } catch {
        return [];
      }
    },

    // Leçons terminées
    getCompletedLessons() {
      try {
        const raw = localStorage.getItem(KEYS.COMPLETED_LESSONS);
        return raw ? JSON.parse(raw) : [];
      } catch {
        return [];
      }
    },

    isLessonCompleted(formationId) {
      const list = this.getCompletedLessons();
      return list.includes(formationId);
    },

    markLessonCompleted(formationId, moduleId) {
      const list = this.getCompletedLessons();
      if (!list.includes(formationId)) {
        list.push(formationId);
        localStorage.setItem(KEYS.COMPLETED_LESSONS, JSON.stringify(list));
      }
      // Vérifier les badges liés aux modules
      this.checkAndUnlockBadges(this.getXp(), moduleId);
    },

    // Résultats de quiz
    getQuizResults() {
      try {
        const raw = localStorage.getItem(KEYS.QUIZ_RESULTS);
        return raw ? JSON.parse(raw) : {};
      } catch {
        return {};
      }
    },

    getQuizResultFor(formationId) {
      const all = this.getQuizResults();
      return all[formationId] || null;
    },

    saveQuizResult(formationId, result) {
      const all = this.getQuizResults();
      all[formationId] = {
        ...result,
        timestamp: Date.now()
      };
      localStorage.setItem(KEYS.QUIZ_RESULTS, JSON.stringify(all));
    },

    // Dernière activité
    getLastActivity() {
      try {
        const raw = localStorage.getItem(KEYS.LAST_ACTIVITY);
        return raw ? JSON.parse(raw) : null;
      } catch {
        return null;
      }
    },

    setLastActivity(activity) {
      const data = {
        ...activity,
        timestamp: Date.now()
      };
      localStorage.setItem(KEYS.LAST_ACTIVITY, JSON.stringify(data));
    },

    // Badges débloqués
    getUnlockedBadges() {
      try {
        const raw = localStorage.getItem(KEYS.UNLOCKED_BADGES);
        return raw ? JSON.parse(raw) : [];
      } catch {
        return [];
      }
    },

    unlockBadge(badgeId) {
      const list = this.getUnlockedBadges();
      if (!list.includes(badgeId)) {
        list.push(badgeId);
        localStorage.setItem(KEYS.UNLOCKED_BADGES, JSON.stringify(list));
        return true;
      }
      return false;
    },

    checkAndUnlockBadges(currentXp = this.getXp(), currentModuleId = null) {
      const completed = this.getCompletedLessons();
      const unlocked = this.getUnlockedBadges();

      OFFICIAL_BADGES.forEach(badge => {
        if (unlocked.includes(badge.id)) return;

        let shouldUnlock = false;

        // Badge Premier pas
        if (badge.id === 'badge-first-step' && completed.length >= 1) {
          shouldUnlock = true;
        }

        // Badge Sécurité (Module B)
        if (badge.id === 'badge-security' && completed.includes('securite-electrique')) {
          shouldUnlock = true;
        }

        // Badge NIBT Explorer (Module N)
        if (badge.id === 'badge-nibt-explorer' && completed.includes('n0')) {
          shouldUnlock = true;
        }

        // Badge Normes suisses (Module S)
        if (badge.id === 'badge-swiss-norms' && (currentModuleId === 'S' || currentModuleId === 'F' || completed.some(id => id.startsWith('sn-')))) {
          shouldUnlock = true;
        }

        // Badge Académie (Progression globale ou XP élevé)
        if (badge.id === 'badge-academy' && currentXp >= 100) {
          shouldUnlock = true;
        }

        if (shouldUnlock) {
          this.unlockBadge(badge.id);
        }
      });
    },

    // Calcul des statistiques de progression (délégué au ProgressionService centralisé)
    getProgressStats() {
      if (typeof ProgressionService !== 'undefined' && ProgressionService.getGlobalProgress) {
        return ProgressionService.getGlobalProgress();
      }

      const completed = this.getCompletedLessons();
      const moduleStats = {};
      let totalFormations = 0;
      let completedFormations = 0;

      ACADEMY_MODULES.forEach(mod => {
        const avail = mod.formations.filter(f => f.status === 'Disponible');
        const modTotal = avail.length;
        totalFormations += modTotal;
        const modCompleted = avail.filter(f => completed.includes(f.id)).length;
        completedFormations += modCompleted;

        const percentage = modTotal > 0 ? Math.round((modCompleted / modTotal) * 100) : 0;
        moduleStats[mod.id] = {
          id: mod.id,
          title: mod.title,
          total: modTotal,
          completed: modCompleted,
          percentage,
          percentageFormatted: `${percentage} %`
        };
      });

      const globalPercentage = totalFormations > 0 ? Math.round((completedFormations / totalFormations) * 100) : 0;

      return {
        globalPercentage,
        globalPercentageFormatted: `${globalPercentage} %`,
        totalFormations,
        completedFormations,
        moduleStats,
        xp: this.getXp(),
        badgesCount: this.getUnlockedBadges().length,
        totalBadgesCount: OFFICIAL_BADGES.length
      };
    }
  };


  // ==================== src/services/progression.js ====================
  // Swiss Electrical Academy — Service Centralisé de Progression (V2.5.2)
  // Source unique de vérité pour tous les calculs de progression (global, modules, parcours, leçons)
  // Garantit la cohérence absolue, l'arrondi décimal précis, l'anti-farming et la persistance.


  // Table de normalisation des anciens identifiants et alias pour migration déterministe
  const LEGACY_ID_MAP = {
    'esti-221': 'esti-221-lecon-1',
    'ESTI-221': 'esti-221-lecon-1',
    'esti221': 'esti-221-lecon-1',
    'esti-221-01': 'esti-221-lecon-1',
    'esti-221-02': 'esti-221-lecon-2',
    'esti-221-03': 'esti-221-lecon-3',
    'esti-221-04': 'esti-221-lecon-4',
    'esti-221-examen': 'esti-221-evaluation-finale',
    'pyramide-lois': 'pyr-01',
    'pyramide': 'pyr-01',
    'a00': 'pyr-01',
    'A00': 'pyr-01',
    'pyramide-des-lois': 'pyr-01',
    'pyramide-lecon-1': 'pyr-01',
    'pyramide-lecon-2': 'pyr-02',
    'pyramide-lecon-3': 'pyr-03',
    'pyramide-lecon-4': 'pyr-04',
    'pyr-lecon-1': 'pyr-01',
    'pyr-lecon-2': 'pyr-02',
    'pyr-lecon-3': 'pyr-03',
    'pyr-lecon-4': 'pyr-04',
    'pyramide-evaluation-finale': 'pyr-evaluation-finale',
    'rs-814-710': 'rs-814-710-lecon-1',
    'RS-814-710': 'rs-814-710-lecon-1',
    'rs-814-710-orni': 'rs-814-710-lecon-1',
    'orni': 'rs-814-710-lecon-1',
    'rs-734-27': 'rs-734-27-lecon-1',
    'RS-734-27': 'rs-734-27-lecon-1',
    'rs-734-27-oibt': 'rs-734-27-lecon-1',
    'oibt': 'rs-734-27-lecon-1',
    'rs-734-27-annexe': 'rs-734-27-lecon-7',
    'rs-734-0': 'rs-734-0-lecon-1',
    'RS-734-0': 'rs-734-0-lecon-1',
    'rs-734-0-lie': 'rs-734-0-lecon-1',
    'rs-734-0-lie-plans': 'rs-734-0-lecon-5',
    'rs-734-0-lie-controle': 'rs-734-0-lecon-7',
    'rs-734-0-lie-responsabilite': 'rs-734-0-lecon-8',
    'rs-734-0-lie-penal': 'rs-734-0-lecon-10',
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
    'rs-734-2': 'rs-734-2-chapitre-1',
    'RS-734-2': 'rs-734-2-chapitre-1',
    'rs-734-2-ocfo': 'rs-734-2-chapitre-1',
    'rs-734-2-annexe': 'rs-734-2-annexes',
    'annexes': 'rs-734-2-annexes',
    'lecon-8': 'rs-734-2-annexes',
    'chapitre-8': 'rs-734-2-annexes',
    'evaluation-finale': 'rs-734-2-evaluation-finale'
  };

  // Configuration formelle des sous-parcours structurés
  const PARCOURS_REGISTRY = {
    'esti-221': {
      id: 'esti-221',
      shortCode: 'ESTI 221',
      title: 'Directive ESTI n° 221',
      fullTitle: 'Directive ESTI n° 221 — Obligations d\'annoncer',
      typeLabel: 'Directive ESTI',
      accentColor: '#10b981',
      hubRoute: '#/formations/E/esti-221',
      getLessons: () => (ESTI_221_INFO ? ESTI_221_INFO.lessons : []),
      finalEvaluationId: 'esti-221-evaluation-finale'
    },
    'pyramide-lois': {
      id: 'pyramide-lois',
      shortCode: 'PYR',
      title: 'Pyramide des lois',
      fullTitle: 'Cadre légal et hiérarchie normative suisse (Pyramide des lois)',
      typeLabel: 'Cadre normatif fédéral',
      accentColor: '#f59e0b',
      hubRoute: '#/formations/A/pyramide-lois',
      getLessons: () => (PYRAMIDE_LOIS_INFO ? PYRAMIDE_LOIS_INFO.lessons : []),
      finalEvaluationId: 'pyr-evaluation-finale'
    },
    'rs-734-0': {
      id: 'rs-734-0',
      shortCode: 'LIE',
      title: 'RS 734.0 — LIE',
      fullTitle: 'Loi fédérale concernant les installations électriques à faible et à fort courant (LIE)',
      typeLabel: 'Loi fédérale',
      accentColor: '#f59e0b',
      hubRoute: '#/formations/A/rs-734-0',
      getLessons: () => (RS_734_0_INFO ? RS_734_0_INFO.lessons : []),
      finalEvaluationId: 'rs-734-0-evaluation-finale'
    },
    'rs-734-2': {
      id: 'rs-734-2',
      shortCode: 'OCFo',
      title: 'RS 734.2 — OCFo',
      fullTitle: 'Ordonnance sur les installations électriques à courant fort (OCFo)',
      typeLabel: 'Ordonnance fédérale',
      accentColor: '#0284c7',
      hubRoute: '#/formations/A/rs-734-2',
      getLessons: () => (RS_734_2_INFO ? RS_734_2_INFO.chapters : []),
      finalEvaluationId: 'rs-734-2-evaluation-finale'
    },
    'rs-734-27': {
      id: 'rs-734-27',
      shortCode: 'OIBT',
      title: 'RS 734.27 — OIBT',
      fullTitle: 'Ordonnance sur les installations électriques à basse tension (OIBT)',
      typeLabel: 'Ordonnance fédérale',
      accentColor: '#10b981',
      hubRoute: '#/formations/A/rs-734-27',
      getLessons: () => (RS_734_27_INFO ? RS_734_27_INFO.lessons : []),
      finalEvaluationId: 'rs-734-27-evaluation-finale'
    },
    'rs-814-710': {
      id: 'rs-814-710',
      shortCode: 'ORNI',
      title: 'RS 814.710 — ORNI',
      fullTitle: 'Ordonnance sur la protection contre le rayonnement non ionisant (ORNI)',
      typeLabel: 'Ordonnance fédérale',
      accentColor: '#8b5cf6',
      hubRoute: '#/formations/A/rs-814-710',
      getLessons: () => (RS_814_710_INFO ? RS_814_710_INFO.lessons : []),
      finalEvaluationId: 'rs-814-710-evaluation-finale'
    }
  };

  const ProgressionService = {
    /**
     * Calcul numérique d'un pourcentage avec 1 décimale exacte si nécessaire.
     * @param {number} count - Nombre d'éléments complétés
     * @param {number} total - Total d'éléments
     * @returns {number} Valeur entre 0 et 100 arrondie à 1 décimale
     */
    calculatePercentage(count, total) {
      if (!total || total <= 0 || !count || count <= 0) return 0;
      if (count >= total) return 100;
      const raw = (count / total) * 100;
      return Math.round(raw * 10) / 10;
    },

    /**
     * Formatage soigné suisse/français des pourcentages.
     * Règle stricte :
     * - 0 -> "0 %"
     * - 100 -> "100 %"
     * - Entier -> "25 %", "50 %", "75 %"
     * - Décimale -> "12,5 %", "37,5 %", "62,5 %", "87,5 %"
     * @param {number} ratioOrCount - Ratio (0-1), count si total est fourni, ou valeur brute (0-100)
     * @param {number} [total] - Optionnel si ratioOrCount est un compteur
     * @returns {string} Chaîne formattée ex: "37,5 %"
     */
    formatPercentage(ratioOrCount, total) {
      let value = 0;
      if (typeof total === 'number') {
        value = this.calculatePercentage(ratioOrCount, total);
      } else if (ratioOrCount <= 1 && ratioOrCount > 0) {
        value = Math.round(ratioOrCount * 1000) / 10;
      } else {
        value = Math.round(Number(ratioOrCount || 0) * 10) / 10;
      }

      if (value <= 0) return '0 %';
      if (value >= 100) return '100 %';

      if (value % 1 === 0) {
        return `${Math.round(value)} %`;
      }
      return `${value.toString().replace('.', ',')} %`;
    },

    /**
     * Ensemble de tous les identifiants valides de formation existant dans le catalogue
     */
    getAllValidFormationIds() {
      const valid = new Set();
      ACADEMY_MODULES.forEach(mod => {
        mod.formations.forEach(f => {
          if (f.id) valid.add(f.id);
        });
      });
      return valid;
    },

    /**
     * Ensemble de tous les identifiants de formations réellement disponibles (avec quiz ou contenu actif)
     */
    getAvailableFormationIds() {
      const available = new Set();
      ACADEMY_MODULES.forEach(mod => {
        mod.formations.forEach(f => {
          if (f.status === 'Disponible' && f.id) {
            available.add(f.id);
          }
        });
      });
      return available;
    },

    /**
     * Migration, normalisation et déduplication des données de persistance localStorage.
     * Résout les doublons, corrige les anciens identifiants et élimine les orphelins.
     * @returns {string[]} Liste dédupliquée et assainie des identifiants complétés.
     */
    migrateProgressionData() {
      try {
        const raw = localStorage.getItem('sea_completed_lessons');
        if (!raw) return [];

        let list;
        try {
          list = JSON.parse(raw);
        } catch {
          list = [];
        }

        if (!Array.isArray(list)) list = [];

        // Migration auto pour les utilisateurs ayant validé l'ancien 'pyramide-lois' monolithique
        if (list.includes('pyramide-lois') || list.includes('pyramide') || list.includes('a00') || list.includes('A00')) {
          ['pyr-01', 'pyr-02', 'pyr-03', 'pyr-04'].forEach(id => {
            if (!list.includes(id)) list.push(id);
          });
        }

        const validIds = this.getAllValidFormationIds();
        const cleaned = [];
        const seen = new Set();

        list.forEach(item => {
          if (!item || typeof item !== 'string') return;
          let targetId = item.trim();

          // Normaliser via la table d'alias
          if (LEGACY_ID_MAP[targetId]) {
            targetId = LEGACY_ID_MAP[targetId];
          }

          // Valider l'existence dans le catalogue officiel
          if (validIds.has(targetId) && !seen.has(targetId)) {
            seen.add(targetId);
            cleaned.push(targetId);
          }
        });

        // Sauvegarder la liste nettoyée
        localStorage.setItem('sea_completed_lessons', JSON.stringify(cleaned));

        // Dédupliquer également les sources d'XP attribuées
        const rawSources = localStorage.getItem('sea_awarded_xp_sources');
        if (rawSources) {
          try {
            const sources = JSON.parse(rawSources);
            if (Array.isArray(sources)) {
              const uniqueSources = Array.from(new Set(sources));
              localStorage.setItem('sea_awarded_xp_sources', JSON.stringify(uniqueSources));
            }
          } catch {
            // ignore
          }
        }

        return cleaned;
      } catch (e) {
        console.warn('[ProgressionService] Erreur lors de la migration :', e);
        return [];
      }
    },

    /**
     * Progression spécifique pour un des 5 sous-parcours structurés (Pyramide, LIE, OCFo, OIBT, ORNI).
     * @param {string} parcoursId - 'pyramide-lois' | 'rs-734-0' | 'rs-734-2' | 'rs-734-27' | 'rs-814-710' (ou alias)
     */
    getParcoursProgress(parcoursId) {
      let key = parcoursId;
      if (key === 'esti-221' || key === 'esti221' || key === 'ESTI-221' || key === 'ESTI221') key = 'esti-221';
      if (key === 'pyramide' || key === 'pyramide-lois' || key === 'pyr' || key === 'a00' || key === 'A00') key = 'pyramide-lois';
      if (key === 'lie' || key === 'LIE') key = 'rs-734-0';
      if (key === 'ocfo' || key === 'OCFo') key = 'rs-734-2';
      if (key === 'oibt' || key === 'OIBT') key = 'rs-734-27';
      if (key === 'orni' || key === 'ORNI') key = 'rs-814-710';

      const cfg = PARCOURS_REGISTRY[key];
      if (!cfg) {
        return {
          id: parcoursId,
          shortCode: '',
          title: '',
          lessonsTotal: 0,
          lessonsCompleted: 0,
          percentage: 0,
          percentageFormatted: '0 %',
          isFinalDone: false,
          isCertified: false,
          isLessonsCompleted: false,
          status: 'not-started'
        };
      }

      const completed = StorageService.getCompletedLessons();
      const lessons = cfg.getLessons();
      const lessonsTotal = lessons.length;
      const lessonsCompleted = lessons.filter(l => completed.includes(l.id)).length;
      const percentage = this.calculatePercentage(lessonsCompleted, lessonsTotal);
      const percentageFormatted = this.formatPercentage(lessonsCompleted, lessonsTotal);

      const isFinalDone = completed.includes(cfg.finalEvaluationId);
      const isLessonsCompleted = lessonsTotal > 0 && lessonsCompleted === lessonsTotal;
      const isCertified = isLessonsCompleted && isFinalDone;

      let status = 'not-started';
      if (isCertified) {
        status = 'certified';
      } else if (lessonsCompleted > 0 || isFinalDone) {
        status = 'in-progress';
      }

      return {
        id: cfg.id,
        shortCode: cfg.shortCode,
        title: cfg.title,
        fullTitle: cfg.fullTitle,
        typeLabel: cfg.typeLabel,
        accentColor: cfg.accentColor,
        hubRoute: cfg.hubRoute,
        lessonsTotal,
        lessonsCompleted,
        percentage,
        percentageFormatted,
        isFinalDone,
        isCertified,
        isLessonsCompleted,
        status
      };
    },

    /**
     * Progression complète pour un Module donné (A, B, N, E, S)
     * @param {string} moduleId - Identifiant du module ('A', 'B', 'N', 'E', 'S')
     */
    getModuleProgress(moduleId) {
      const mod = ACADEMY_MODULES.find(m => m.id === moduleId);
      if (!mod) {
        return {
          id: moduleId,
          code: moduleId,
          title: '',
          totalAvailable: 0,
          catalogTotal: 0,
          completedCount: 0,
          percentage: 0,
          percentageFormatted: '0 %',
          isModuleCompleted: false,
          isInDevelopment: true
        };
      }

      const completed = StorageService.getCompletedLessons();
      const availableFormations = mod.formations.filter(f => f.status === 'Disponible');
      const totalAvailable = availableFormations.length;
      const catalogTotal = mod.formations.length;

      const completedCount = availableFormations.filter(f => completed.includes(f.id)).length;
      const percentage = this.calculatePercentage(completedCount, totalAvailable);
      const percentageFormatted = this.formatPercentage(completedCount, totalAvailable);
      const isModuleCompleted = totalAvailable > 0 && completedCount === totalAvailable;
      const isInDevelopment = totalAvailable === 0;

      let subParcours = null;
      if (moduleId === 'A') {
        subParcours = {
          pyramide: this.getParcoursProgress('pyramide-lois'),
          lie: this.getParcoursProgress('rs-734-0'),
          ocfo: this.getParcoursProgress('rs-734-2'),
          oibt: this.getParcoursProgress('rs-734-27'),
          orni: this.getParcoursProgress('rs-814-710')
        };
      } else if (moduleId === 'E') {
        subParcours = {
          esti221: this.getParcoursProgress('esti-221')
        };
      }

      return {
        id: mod.id,
        code: mod.code,
        title: mod.title,
        description: mod.description,
        countLabel: mod.countLabel,
        totalAvailable,
        catalogTotal,
        completedCount,
        percentage,
        percentageFormatted,
        isModuleCompleted,
        isInDevelopment,
        subParcours
      };
    },

    /**
     * Progression globale unifiée de l'Académie ELECBOOK.
     * Calculée de façon rigoureuse sur les unités réellement disponibles (40 unités disponibles au total).
     */
    getGlobalProgress() {
      // S'assurer que les données sont migrées et saines
      const completed = StorageService.getCompletedLessons();
      const availableIds = this.getAvailableFormationIds();

      let totalAvailable = 0;
      let completedCount = 0;
      let catalogTotal = 0;
      const moduleStats = {};

      ACADEMY_MODULES.forEach(mod => {
        const p = this.getModuleProgress(mod.id);
        moduleStats[mod.id] = {
          id: p.id,
          code: p.code,
          title: p.title,
          total: p.totalAvailable,
          totalAvailable: p.totalAvailable,
          catalogTotal: p.catalogTotal,
          completed: p.completedCount,
          percentage: p.percentage,
          percentageFormatted: p.percentageFormatted,
          isCompleted: p.isModuleCompleted,
          isInDevelopment: p.isInDevelopment,
          subParcours: p.subParcours
        };

        totalAvailable += p.totalAvailable;
        completedCount += p.completedCount;
        catalogTotal += p.catalogTotal;
      });

      const globalPercentage = this.calculatePercentage(completedCount, totalAvailable);
      const globalPercentageFormatted = this.formatPercentage(completedCount, totalAvailable);
      const isGlobalCompleted = totalAvailable > 0 && completedCount === totalAvailable;

      return {
        globalPercentage,
        globalPercentageFormatted,
        completedFormations: completedCount,
        totalFormations: totalAvailable,
        catalogTotalFormations: catalogTotal,
        moduleStats,
        xp: StorageService.getXp(),
        badgesCount: StorageService.getUnlockedBadges().length,
        totalBadgesCount: OFFICIAL_BADGES.length,
        isGlobalCompleted
      };
    },

    /**
     * Vérifie si une formation spécifique est terminée
     */
    isLessonCompleted(formationId) {
      const list = StorageService.getCompletedLessons();
      return list.includes(formationId);
    }
  };


  // ==================== src/components/video-player.js ====================
  // Swiss Electrical Academy — Composant Lecteur Vidéo Pédagogique (V1.1)
  // Accessible WCAG 2.2 AA, responsive, sans autoplay avec le son, gestion d'erreurs et support plein écran

  function createVideoPlayer(config) {
    const container = document.createElement('div');
    container.className = 'video-player-component';
    container.setAttribute('role', 'region');
    container.setAttribute('aria-label', `Lecteur vidéo : ${config.title || 'Vidéo pédagogique'}`);

    const videoSrc = config.src || '';

    container.innerHTML = `
      <div class="video-media-wrapper" tabindex="0" aria-label="Zone vidéo. Appuyez sur Espace pour lire ou mettre en pause">
        <video
          class="video-element"
          preload="metadata"
          playsinline
          webkit-playsinline
          aria-label="${config.title || 'Vidéo de formation'}"
        >
          <source src="${videoSrc}" type="video/mp4" />
          Votre navigateur ne prend pas en charge la lecture de vidéos HTML5.
        </video>

        <!-- Bouton Play géant de démarrage (Overlay) -->
        <button class="video-big-play-btn" type="button" aria-label="Démarrer la vidéo">
          <span class="big-play-icon" aria-hidden="true">▶</span>
        </button>

        <!-- Écran d'erreur élégant si chargement impossible -->
        <div class="video-error-overlay" style="display:none;" role="alert">
          <div class="video-error-icon" aria-hidden="true">⚠️</div>
          <div class="video-error-title">Vidéo momentanément indisponible</div>
          <div class="video-error-desc">Le contenu vidéo n'a pas pu être chargé. Veuillez vérifier votre connexion ou réessayer.</div>
          <button class="btn-video-retry" type="button">🔄 Réessayer</button>
        </div>

        <!-- Barre de contrôles personnalisés -->
        <div class="video-controls-bar" role="toolbar" aria-label="Contrôles de la vidéo">
          <!-- Barre de défilement temporelle -->
          <div class="video-progress-container" aria-label="Progression de la lecture">
            <input
              type="range"
              class="video-seek-slider"
              min="0"
              max="100"
              value="0"
              step="0.1"
              aria-label="Position dans la vidéo"
            />
            <div class="video-progress-fill"></div>
          </div>

          <div class="video-controls-row">
            <div class="video-controls-left">
              <!-- Bouton Lecture / Pause -->
              <button class="video-ctrl-btn btn-play-pause" type="button" aria-label="Lecture">
                <span class="ctrl-icon" aria-hidden="true">▶</span>
              </button>

              <!-- Temps écoulé / Durée totale -->
              <div class="video-time-display" aria-live="off">
                <span class="time-current">00:00</span>
                <span class="time-sep">/</span>
                <span class="time-total">00:00</span>
              </div>

              <!-- Volume et Muet -->
              <div class="video-volume-group">
                <button class="video-ctrl-btn btn-mute" type="button" aria-label="Couper le son">
                  <span class="ctrl-icon icon-volume" aria-hidden="true">🔊</span>
                </button>
                <input
                  type="range"
                  class="video-volume-slider"
                  min="0"
                  max="1"
                  step="0.05"
                  value="1"
                  aria-label="Volume audio"
                />
              </div>
            </div>

            <div class="video-controls-right">
              <!-- Vitesse de lecture -->
              <div class="video-speed-group">
                <label for="speedSelect_${config.id || 'default'}" class="sr-only">Vitesse de lecture</label>
                <select class="video-speed-select" id="speedSelect_${config.id || 'default'}" aria-label="Vitesse de lecture">
                  <option value="0.75">0.75x</option>
                  <option value="1" selected>1x</option>
                  <option value="1.25">1.25x</option>
                  <option value="1.5">1.5x</option>
                </select>
              </div>

              <!-- Plein écran -->
              <button class="video-ctrl-btn btn-fullscreen" type="button" aria-label="Activer le plein écran">
                <span class="ctrl-icon" aria-hidden="true">⛶</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    `;

    // Éléments du DOM
    const mediaWrapper = container.querySelector('.video-media-wrapper');
    const video = container.querySelector('.video-element');
    const bigPlayBtn = container.querySelector('.video-big-play-btn');
    const playPauseBtn = container.querySelector('.btn-play-pause');
    const playIcon = playPauseBtn.querySelector('.ctrl-icon');
    const seekSlider = container.querySelector('.video-seek-slider');
    const progressFill = container.querySelector('.video-progress-fill');
    const timeCurrent = container.querySelector('.time-current');
    const timeTotal = container.querySelector('.time-total');
    const muteBtn = container.querySelector('.btn-mute');
    const muteIcon = muteBtn.querySelector('.icon-volume');
    const volumeSlider = container.querySelector('.video-volume-slider');
    const speedSelect = container.querySelector('.video-speed-select');
    const fullscreenBtn = container.querySelector('.btn-fullscreen');
    const fullscreenIcon = fullscreenBtn ? fullscreenBtn.querySelector('.ctrl-icon') : null;
    const errorOverlay = container.querySelector('.video-error-overlay');
    const retryBtn = container.querySelector('.btn-video-retry');

    let isSeeking = false;

    // Formatage du temps en mm:ss
    function formatTime(seconds) {
      if (isNaN(seconds) || seconds < 0) return '00:00';
      const mins = Math.floor(seconds / 60);
      const secs = Math.floor(seconds % 60);
      return `${mins < 10 ? '0' : ''}${mins}:${secs < 10 ? '0' : ''}${secs}`;
    }

    // Mise à jour de l'icône Play/Pause
    function updatePlayState() {
      if (video.paused || video.ended) {
        playIcon.textContent = '▶';
        playPauseBtn.setAttribute('aria-label', 'Lecture');
        bigPlayBtn.style.display = 'flex';
        container.classList.remove('is-playing');
      } else {
        playIcon.textContent = '⏸';
        playPauseBtn.setAttribute('aria-label', 'Pause');
        bigPlayBtn.style.display = 'none';
        container.classList.add('is-playing');
      }
    }

    // Bascule Lecture / Pause
    function togglePlay() {
      if (video.paused || video.ended) {
        video.play().catch((err) => {
          console.warn('[VideoPlayer] Lecture interrompue ou bloquée :', err);
        });
      } else {
        video.pause();
      }
      updatePlayState();
    }

    // Événements Vidéo
    video.addEventListener('play', updatePlayState);
    video.addEventListener('pause', updatePlayState);
    video.addEventListener('ended', () => {
      updatePlayState();
      // Événement d'accomplissement pédagogique
      if (config.onCompleted && typeof config.onCompleted === 'function') {
        config.onCompleted();
      }
    });

    video.addEventListener('loadedmetadata', () => {
      timeTotal.textContent = formatTime(video.duration);
      seekSlider.max = video.duration || 100;
    });

    video.addEventListener('timeupdate', () => {
      if (!isSeeking) {
        seekSlider.value = video.currentTime;
        timeCurrent.textContent = formatTime(video.currentTime);
        const percent = video.duration ? (video.currentTime / video.duration) * 100 : 0;
        progressFill.style.width = `${percent}%`;
      }
    });

    video.addEventListener('error', () => {
      errorOverlay.style.display = 'flex';
      bigPlayBtn.style.display = 'none';
    });

    // Boutons Play / Pause
    playPauseBtn.addEventListener('click', togglePlay);
    bigPlayBtn.addEventListener('click', togglePlay);

    // Barre de progression (Seek)
    seekSlider.addEventListener('input', () => {
      isSeeking = true;
      timeCurrent.textContent = formatTime(seekSlider.value);
      const percent = video.duration ? (seekSlider.value / video.duration) * 100 : 0;
      progressFill.style.width = `${percent}%`;
    });

    seekSlider.addEventListener('change', () => {
      video.currentTime = parseFloat(seekSlider.value);
      isSeeking = false;
    });

    // Volume & Muet
    function updateVolumeIcon(vol, muted) {
      if (muted || vol === 0) {
        muteIcon.textContent = '🔇';
        muteBtn.setAttribute('aria-label', 'Activer le son');
      } else if (vol < 0.5) {
        muteIcon.textContent = '🔉';
        muteBtn.setAttribute('aria-label', 'Couper le son');
      } else {
        muteIcon.textContent = '🔊';
        muteBtn.setAttribute('aria-label', 'Couper le son');
      }
    }

    muteBtn.addEventListener('click', () => {
      video.muted = !video.muted;
      updateVolumeIcon(video.volume, video.muted);
      volumeSlider.value = video.muted ? 0 : video.volume;
    });

    volumeSlider.addEventListener('input', () => {
      const val = parseFloat(volumeSlider.value);
      video.volume = val;
      video.muted = val === 0;
      updateVolumeIcon(val, video.muted);
    });

    // Vitesse de lecture
    speedSelect.addEventListener('change', () => {
      video.playbackRate = parseFloat(speedSelect.value);
    });

    // Plein écran (support universel : standard Fullscreen API & WebKit iPhone/iOS)
    function isFullscreenActive() {
      return !!(
        document.fullscreenElement ||
        document.webkitFullscreenElement ||
        document.mozFullScreenElement ||
        document.msFullscreenElement ||
        video.webkitDisplayingFullscreen
      );
    }

    function updateFullscreenUI(isFullscreen) {
      if (isFullscreen) {
        fullscreenBtn.setAttribute('aria-label', 'Quitter le plein écran');
        if (fullscreenIcon) fullscreenIcon.textContent = '⤓';
        container.classList.add('is-fullscreen');
      } else {
        fullscreenBtn.setAttribute('aria-label', 'Activer le plein écran');
        if (fullscreenIcon) fullscreenIcon.textContent = '⛶';
        container.classList.remove('is-fullscreen');
      }
    }

    function toggleFullscreen() {
      if (!isFullscreenActive()) {
        if (mediaWrapper.requestFullscreen) {
          mediaWrapper.requestFullscreen().catch(() => {
            if (video.webkitEnterFullscreen) {
              video.webkitEnterFullscreen();
            }
          });
        } else if (mediaWrapper.webkitRequestFullscreen) {
          mediaWrapper.webkitRequestFullscreen();
        } else if (video.webkitEnterFullscreen) {
          // Support natif iOS Safari / iPhone
          if (video.paused) {
            video.play().catch(() => {});
          }
          video.webkitEnterFullscreen();
        } else if (video.requestFullscreen) {
          video.requestFullscreen().catch(() => {});
        }
      } else {
        if (document.exitFullscreen) {
          document.exitFullscreen().catch(() => {});
        } else if (document.webkitExitFullscreen) {
          document.webkitExitFullscreen();
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen();
        } else if (video.webkitExitFullscreen) {
          video.webkitExitFullscreen();
        }
      }
    }

    fullscreenBtn.addEventListener('click', toggleFullscreen);

    // Synchronisation des états plein écran (standard + iOS WebKit)
    const onFullscreenChange = () => {
      updateFullscreenUI(isFullscreenActive());
    };
    document.addEventListener('fullscreenchange', onFullscreenChange);
    document.addEventListener('webkitfullscreenchange', onFullscreenChange);
    video.addEventListener('webkitbeginfullscreen', () => updateFullscreenUI(true));
    video.addEventListener('webkitendfullscreen', () => updateFullscreenUI(false));

    // Réessayer en cas d'erreur
    retryBtn.addEventListener('click', () => {
      errorOverlay.style.display = 'none';
      video.load();
      video.play().catch(() => {});
    });

    // Raccourcis clavier accessibles
    mediaWrapper.addEventListener('keydown', (e) => {
      // Si l'utilisateur est sur un select ou un input, ne pas intercepter
      if (e.target === speedSelect || e.target === volumeSlider) return;

      if (e.key === ' ' || e.key === 'k' || e.key === 'K') {
        e.preventDefault();
        togglePlay();
      } else if (e.key === 'f' || e.key === 'F') {
        e.preventDefault();
        toggleFullscreen();
      } else if (e.key === 'm' || e.key === 'M') {
        e.preventDefault();
        video.muted = !video.muted;
        updateVolumeIcon(video.volume, video.muted);
        volumeSlider.value = video.muted ? 0 : video.volume;
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        video.currentTime = Math.max(0, video.currentTime - 5);
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        video.currentTime = Math.min(video.duration || 0, video.currentTime + 5);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        video.volume = Math.min(1, video.volume + 0.1);
        volumeSlider.value = video.volume;
        video.muted = false;
        updateVolumeIcon(video.volume, false);
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        video.volume = Math.max(0, video.volume - 0.1);
        volumeSlider.value = video.volume;
        updateVolumeIcon(video.volume, video.volume === 0);
      }
    });

    return container;
  }


  // ==================== src/components/interactive-widgets.js ====================
  // Swiss Electrical Academy — Composants Interactifs Pédagogiques (V1.1)
  // Widgets spécialisés : Pyramide des lois (A00), Dangers Ub/Ib (B00), Chaîne NIBT (N0)

  // ----------------------------------------------------------------------------
  // 1. Pyramide des lois suisse (Module A — A00)
  // ----------------------------------------------------------------------------
  function createPyramidWidget() {
    const tiersData = [
      {
        level: 1,
        name: "Sommet : Conseil fédéral (CF)",
        badge: "Conseil fédéral (CF)",
        description: "Au sommet de la pyramide des lois, le Conseil fédéral représente le niveau suprême de l'autorité réglementaire fédérale suisse. Il édicte les ordonnances d'application des lois fédérales et garantit la sécurité des personnes et des installations.",
        references: "CF : Conseil fédéral",
        binding: "Juridiquement contraignant — Sommet de la hiérarchie normative suisse."
      },
      {
        level: 2,
        name: "2e rang : Lois fédérales",
        badge: "Lois fédérales",
        description: "Textes législatifs fondateurs adoptés par l'Assemblée fédérale suisse régissant la sécurité, la responsabilité civile et la protection des personnes et des biens.",
        references: "RS 734.0 - LIE (Loi sur les installations électriques) • RS 930.11 - LSPro (Loi fédérale du 12 juin 2009 sur la sécurité des produits) • RS 832.20 - LAA (Loi fédérale sur l’assurance-accidents) • RS 784.10 - LTC (Loi sur les télécommunications).",
        binding: "Juridiquement contraignant — Force de loi obligatoire votée par le Parlement."
      },
      {
        level: 3,
        name: "3e rang : Ordonnances fédérales et départementales",
        badge: "Ordonnances",
        description: "Ordonnances d'application exécutoires édictées par le Conseil fédéral et le Département fédéral de l'Environnement, des Transports, de l'Energie et de la Communication (DETEC).",
        references: "RS 734.1 - OCFa • RS 734.2 - OCFo • RS 734.24 - O ESTI • RS 734.26 - OMBT • RS 734.27 - OIBT • RS 734.272 - O DETEC • RS 734.31 - OLEI • RS 734.5 - OCEM • RS 814.710 - ORNI • RS 832.30 - OPA.",
        binding: "Juridiquement contraignant — Ordonnances d'exécution d'application obligatoire."
      },
      {
        level: 4,
        name: "4e rang : Règles techniques et Directives",
        badge: "Règles techniques / Directives",
        description: "Normes techniques suisses et européennes, règles, guides et prescriptions des organismes de normalisation reconnus (Electrosuisse / CES, CENELEC, CEI) et des institutions professionnelles.",
        references: "NIBT (SN 411000 :2025) • SN EN (Norme Suisse Européenne Norme, ex: SN EN 61439, SN EN 60204) • SNR (Règle Suisse) • SNG (Guide Suisse) • ESTI • SUVA • AEAI • PDIE (Prescriptions des distributeurs d’électricité CH / CTR).",
        binding: "Présomption de conformité à l'état de la technique et respect des règles de l'art."
      }
    ];

    const container = document.createElement('div');
    container.className = 'interactive-widget-wrapper';
    container.innerHTML = `
      <div class="widget-header">
        <div class="widget-title">📐 Pyramide hiérarchique des normes électriques suisses</div>
        <div class="widget-desc">Cliquez sur chaque étage de la pyramide pour visualiser son autorité juridique et ses textes de référence officiels.</div>
      </div>

      <div style="display:flex; align-items:center; justify-content:center; gap:0.5rem; margin-bottom:1.25rem; font-size:0.82rem; font-weight:700; color:var(--electric-blue); text-transform:uppercase; letter-spacing:0.05em; background:var(--primary-subtle); padding:0.4rem 0.8rem; border-radius:20px; width:fit-content; margin-left:auto; margin-right:auto;">
        <span>⬆️ Juridiquement contraignant (vers le sommet)</span>
      </div>

      <div class="pyramid-visual">
        <div class="pyramid-tier tier-1 active" data-tier="0" role="button" tabindex="0" aria-label="Étage 1 : Conseil fédéral (CF)">
          1. Conseil fédéral (CF)
        </div>
        <div class="pyramid-tier tier-2" data-tier="1" role="button" tabindex="0" aria-label="Étage 2 : Lois (LIE, LSPro, LAA)">
          2. Lois (LIE, LSPro, LAA)
        </div>
        <div class="pyramid-tier tier-3" data-tier="2" role="button" tabindex="0" aria-label="Étage 3 : Ordonnances (OIBT, OCFo, OCFa, O ESTI, O DETEC...)">
          3. Ordonnances (OIBT, OCFo, OCFa, O ESTI, O DETEC...)
        </div>
        <div class="pyramid-tier tier-4" data-tier="3" role="button" tabindex="0" aria-label="Étage 4 : Règles techniques et Directives (NIBT, SNR, SNG, ESTI, PDIE...)">
          4. Règles techniques / Directives (NIBT 2025, SNR, SNG, ESTI, PDIE...)
        </div>
      </div>

      <div class="pyramid-detail-card" id="pyramidDetailBox" aria-live="polite">
        <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:0.4rem; flex-wrap:wrap; gap:0.5rem;">
          <div style="font-weight:700; font-size:1.05rem; color:var(--text-primary);" id="pyramidDetailTitle">
            ${tiersData[0].name}
          </div>
          <div style="display:inline-block; font-size:0.75rem; font-weight:700; color:var(--electric-blue); background:var(--primary-subtle); padding:0.2rem 0.5rem; border-radius:4px;" id="pyramidDetailBadge">
            ${tiersData[0].badge}
          </div>
        </div>
        <p style="line-height:1.55; margin-bottom:0.65rem;" id="pyramidDetailDesc">${tiersData[0].description}</p>

        <div style="font-size:0.85rem; color:var(--text-primary); background:var(--bg-surface-elevated); padding:0.6rem 0.75rem; border-radius:6px; margin-bottom:0.65rem; border-left:3px solid var(--electric-blue);" id="pyramidDetailRefs">
          <strong>Textes de référence :</strong> <span id="pyramidDetailRefsText">${tiersData[0].references}</span>
        </div>

        <div style="font-size:0.82rem; color:var(--warning); font-weight:600;" id="pyramidDetailBinding">
          ⚖️ ${tiersData[0].binding}
        </div>
      </div>
    `;

    // Gestion de l'interactivité (souris et clavier)
    const tiersElements = container.querySelectorAll('.pyramid-tier');
    const titleEl = container.querySelector('#pyramidDetailTitle');
    const badgeEl = container.querySelector('#pyramidDetailBadge');
    const descEl = container.querySelector('#pyramidDetailDesc');
    const refsTextEl = container.querySelector('#pyramidDetailRefsText');
    const bindingEl = container.querySelector('#pyramidDetailBinding');

    function selectTier(idx) {
      tiersElements.forEach(t => t.classList.remove('active'));
      tiersElements[idx].classList.add('active');
      const item = tiersData[idx];
      titleEl.textContent = item.name;
      badgeEl.textContent = item.badge;
      descEl.textContent = item.description;
      refsTextEl.textContent = item.references;
      bindingEl.textContent = `⚖️ ${item.binding}`;
    }

    tiersElements.forEach((el, index) => {
      el.addEventListener('click', () => selectTier(index));
      el.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          selectTier(index);
        }
      });
    });

    return container;
  }

  // ----------------------------------------------------------------------------
  // 2. Dangers de l'électricité, notions Ub/Ib et 5 règles (Module B — B00)
  // ----------------------------------------------------------------------------
  function createDangerWidget() {
    const container = document.createElement('div');
    container.className = 'interactive-widget-wrapper';
    container.innerHTML = `
      <div class="widget-header">
        <div class="widget-title">⚡ Simulateur interactif de tension & courant de contact</div>
        <div class="widget-desc">Ajustez la tension de contact Ub pour observer le courant traversant le corps humain Ib (Rb = 1000 Ω) et le niveau de danger physiologique.</div>
      </div>

      <!-- Schéma des grandeurs Ub / Ib / Uf / If -->
      <div class="danger-metrics-grid">
        <div class="danger-metric-box">
          <div class="danger-metric-symbol">Ub</div>
          <div style="font-weight:700; color:var(--text-primary); font-size:0.85rem;">Tension de contact</div>
          <div style="font-size:0.75rem; color:var(--text-muted); margin-top:0.2rem;">Tension susceptible d'être pontée par une personne entre deux parties accessibles.</div>
        </div>
        <div class="danger-metric-box">
          <div class="danger-metric-symbol">Ib</div>
          <div style="font-weight:700; color:var(--text-primary); font-size:0.85rem;">Courant de contact</div>
          <div style="font-size:0.75rem; color:var(--text-muted); margin-top:0.2rem;">Courant traversant le corps : <code>Ib = Ub / Rb</code>.</div>
        </div>
        <div class="danger-metric-box">
          <div class="danger-metric-symbol">Uf</div>
          <div style="font-weight:700; color:var(--text-primary); font-size:0.85rem;">Tension de défaut</div>
          <div style="font-size:0.75rem; color:var(--text-muted); margin-top:0.2rem;">Tension entre une carcasse métallique sous défaut et la terre lointaine.</div>
        </div>
        <div class="danger-metric-box">
          <div class="danger-metric-symbol">If</div>
          <div style="font-weight:700; color:var(--text-primary); font-size:0.85rem;">Courant de défaut</div>
          <div style="font-size:0.75rem; color:var(--text-muted); margin-top:0.2rem;">Courant total s'écoulant au point de claquage d'isolement.</div>
        </div>
      </div>

      <!-- Simulateur interactif de contact -->
      <div style="background:var(--bg-app); border:1px solid var(--border-subtle); border-radius:var(--radius-md); padding:1.25rem; margin-bottom:1.5rem;">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.75rem;">
          <span style="font-weight:700; font-size:0.9rem; color:var(--text-primary);">Tension de contact Ub : <span id="valUb" style="color:var(--electric-blue); font-size:1.1rem;">230 V</span></span>
          <span style="font-size:0.8rem; color:var(--text-muted);">Résistance corporelle conventionnelle Rb = 1000 Ω</span>
        </div>
        <input type="range" id="sliderUb" min="10" max="400" step="5" value="230" style="width:100%; cursor:pointer; accent-color:var(--electric-blue);"/>

        <div style="display:flex; align-items:center; justify-content:space-between; margin-top:1.25rem; padding:0.85rem 1.1rem; border-radius:var(--radius-sm); background:var(--bg-surface-elevated);" id="dangerResultBox">
          <div>
            <div style="font-size:0.75rem; color:var(--text-muted); text-transform:uppercase;">Courant corporel calculé (Ib)</div>
            <div style="font-size:1.5rem; font-weight:800;" id="calcIb">230 mA</div>
          </div>
          <div style="text-align:right;">
            <div style="font-size:0.75rem; color:var(--text-muted); text-transform:uppercase;">Conséquence physiologique</div>
            <div style="font-size:0.95rem; font-weight:700; color:var(--danger);" id="dangerLevelText">⚠️ Risque létal de fibrillation ventriculaire (> 50 mA)</div>
          </div>
        </div>
      </div>

      <!-- Tableau des seuils physiologiques 50 Hz -->
      <div style="margin-bottom:1.5rem;">
        <div style="font-weight:700; font-size:0.95rem; color:var(--text-primary); margin-bottom:0.5rem;">
          Seuils physiologiques du courant alternatif (50 Hz)
        </div>
        <table class="thresholds-table">
          <thead>
            <tr>
              <th>Seuil</th>
              <th>Intensité</th>
              <th>Réaction physiologique corporelle</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Perception</strong></td>
              <td><strong>0.5 mA</strong></td>
              <td>Léger picotement sans danger ni contraction musculaire.</td>
            </tr>
            <tr>
              <td><strong>Non-lâcher</strong></td>
              <td><strong>10 mA</strong></td>
              <td>Contraction musculaire tétanisante : impossibilité de lâcher le conducteur saisi.</td>
            </tr>
            <tr>
              <td><strong>Asphyxie respiratoire</strong></td>
              <td><strong>30 mA</strong></td>
              <td>Tétanisation des muscles thoraciques si le contact dure. <em>(Seuil des DDR haute sensibilité)</em>.</td>
            </tr>
            <tr style="background:rgba(239, 68, 68, 0.08);">
              <td><strong style="color:var(--danger);">Fibrillation ventriculaire</strong></td>
              <td><strong style="color:var(--danger);">≥ 50 mA</strong></td>
              <td>Arrêt circulatoire chaotique du cœur. Mortel en quelques minutes sans défibrillateur.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- 5 règles vitales de sécurité -->
      <div>
        <div style="font-weight:700; font-size:0.95rem; color:var(--text-primary); margin-bottom:0.65rem;">
          Les 5 règles vitales de sécurité (SUVA / ESTI) — Ordre chronologique strict :
        </div>
        <div class="rule-vital-item"><div class="rule-number">1</div><span><strong>Déclencher</strong> et couper sur tous les pôles.</span></div>
        <div class="rule-vital-item"><div class="rule-number">2</div><span><strong>Sécuriser</strong> contre tout réenclenchement intempestif.</span></div>
        <div class="rule-vital-item"><div class="rule-number">3</div><span><strong>Vérifier</strong> l'absence de tension sur tous les conducteurs à l'aide d'un VAT certifié.</span></div>
        <div class="rule-vital-item"><div class="rule-number">4</div><span><strong>Mettre à terre</strong> et en court-circuit (lignes aériennes et haute tension).</span></div>
        <div class="rule-vital-item"><div class="rule-number">5</div><span><strong>Protéger</strong> et couvrir les parties voisines restées sous tension.</span></div>
      </div>
    `;

    // Logique du slider
    const slider = container.querySelector('#sliderUb');
    const valUb = container.querySelector('#valUb');
    const calcIb = container.querySelector('#calcIb');
    const dangerLevelText = container.querySelector('#dangerLevelText');

    slider.addEventListener('input', (e) => {
      const ub = parseInt(e.target.value, 10);
      valUb.textContent = `${ub} V`;
      // Rb = 1000 ohms -> Ib = Ub / 1000 A = Ub mA
      const ib = ub; 
      calcIb.textContent = `${ib} mA`;

      if (ib < 0.5) {
        dangerLevelText.textContent = "🟢 En dessous du seuil de perception";
        dangerLevelText.style.color = "var(--success)";
        calcIb.style.color = "var(--success)";
      } else if (ib < 10) {
        dangerLevelText.textContent = "🟡 Perception tactile sans tétanisation";
        dangerLevelText.style.color = "var(--warning)";
        calcIb.style.color = "var(--warning)";
      } else if (ib < 30) {
        dangerLevelText.textContent = "🟠 Tétanisation musculaire (seuil de non-lâcher)";
        dangerLevelText.style.color = "var(--warning)";
        calcIb.style.color = "var(--warning)";
      } else if (ib < 50) {
        dangerLevelText.textContent = "🔴 Asphyxie respiratoire possible si prolongé";
        dangerLevelText.style.color = "var(--danger)";
        calcIb.style.color = "var(--danger)";
      } else {
        dangerLevelText.textContent = "⚠️ Danger létal : Risque de fibrillation ventriculaire";
        dangerLevelText.style.color = "var(--danger)";
        calcIb.style.color = "var(--danger)";
      }
    });

    return container;
  }

  // ----------------------------------------------------------------------------
  // 3. Chaîne de normalisation NIBT & Symboles (Module N — N0)
  // ----------------------------------------------------------------------------
  function createNibtWidget() {
    const container = document.createElement('div');
    container.className = 'interactive-widget-wrapper';
    container.innerHTML = `
      <div class="widget-header">
        <div class="widget-title">🌐 Chaîne officielle de normalisation NIBT (Section 16 & 50)</div>
        <div class="widget-desc">De la norme internationale CEI à la norme suisse d'application NIBT SN 411000:2025.</div>
      </div>

      <!-- Diagramme de filiation CEI -> CENELEC -> CES/TK64 -> NIBT -->
      <div class="norm-chain-flow">
        <div class="norm-step-card">
          <div class="norm-step-level">Mondial</div>
          <div class="norm-step-name">CEI / IEC</div>
          <div style="font-size:0.72rem; color:var(--text-muted); margin-top:0.2rem;">Série IEC 60364</div>
        </div>
        <div class="norm-arrow">➔</div>
        <div class="norm-step-card">
          <div class="norm-step-level">Européen</div>
          <div class="norm-step-name">CENELEC</div>
          <div style="font-size:0.72rem; color:var(--text-muted); margin-top:0.2rem;">Série HD 60364</div>
        </div>
        <div class="norm-arrow">➔</div>
        <div class="norm-step-card" style="border-color:var(--electric-blue); box-shadow:var(--shadow-electric);">
          <div class="norm-step-level">Suisse</div>
          <div class="norm-step-name">CES / TK 64</div>
          <div style="font-size:0.72rem; color:var(--text-muted); margin-top:0.2rem;">Comité Électrotechnique</div>
        </div>
        <div class="norm-arrow">➔</div>
        <div class="norm-step-card" style="background:var(--primary-subtle); border-color:var(--electric-blue);">
          <div class="norm-step-level" style="color:var(--text-primary);">Norme Finale</div>
          <div class="norm-step-name" style="color:var(--electric-blue);">NIBT 2025</div>
          <div style="font-size:0.72rem; color:var(--text-primary); margin-top:0.2rem;">SN 411000:2025</div>
        </div>
      </div>

      <!-- Répartition en 2 Volumes -->
      <div style="display:grid; grid-template-columns:1fr 1fr; gap:1rem; margin:1.5rem 0;">
        <div style="background:var(--bg-app); border:1px solid var(--border-subtle); border-radius:var(--radius-md); padding:1rem;">
          <div style="font-weight:700; color:var(--text-primary); font-size:0.95rem; margin-bottom:0.3rem;">Volume 1 : Prescriptions fondamentales</div>
          <div style="font-size:0.8rem; color:var(--text-secondary); line-height:1.45;">
            Comprend les <strong>Parties 1 à 6</strong> de la norme : Principes, définitions, caractéristiques, sécurité, choix des matériels et vérifications de conformité.
          </div>
        </div>
        <div style="background:var(--bg-app); border:1px solid var(--border-subtle); border-radius:var(--radius-md); padding:1rem;">
          <div style="font-weight:700; color:var(--text-primary); font-size:0.95rem; margin-bottom:0.3rem;">Volume 2 : Emplacements spéciaux</div>
          <div style="font-size:0.8rem; color:var(--text-secondary); line-height:1.45;">
            Dédié intégralement à la <strong>Partie 7</strong> : Locaux avec baignoire/douche (7.01), piscines (7.02), chantiers (7.04), solaire PV et bornes IRVE.
          </div>
        </div>
      </div>

      <!-- Grille des Symboles officiels NIBT -->
      <div>
        <div style="font-weight:700; font-size:0.95rem; color:var(--text-primary); margin-bottom:0.5rem;">
          Guide des conventions et symboles réglementaires NIBT
        </div>
        <div class="symbols-grid">
          <div class="symbol-card">
            <div class="symbol-badge" style="color:var(--electric-blue);">5</div>
            <div>
              <div style="font-weight:700; font-size:0.82rem; color:var(--text-primary);">Écart suisse</div>
              <div style="font-size:0.7rem; color:var(--text-muted);">Disposition nationale suisse</div>
            </div>
          </div>
          <div class="symbol-card">
            <div class="symbol-badge" style="color:var(--success);">OK</div>
            <div>
              <div style="font-weight:700; font-size:0.82rem; color:var(--text-primary);">Admissible</div>
              <div style="font-size:0.7rem; color:var(--text-muted);">Solution conforme</div>
            </div>
          </div>
          <div class="symbol-card">
            <div class="symbol-badge" style="color:var(--warning);">⚠</div>
            <div>
              <div style="font-weight:700; font-size:0.82rem; color:var(--text-primary);">Nécessaire</div>
              <div style="font-size:0.7rem; color:var(--text-muted);">Obligation impérative</div>
            </div>
          </div>
          <div class="symbol-card">
            <div class="symbol-badge" style="color:var(--text-muted);">8</div>
            <div>
              <div style="font-weight:700; font-size:0.82rem; color:var(--text-primary);">Impossible</div>
              <div style="font-size:0.7rem; color:var(--text-muted);">Constructif / physique</div>
            </div>
          </div>
          <div class="symbol-card">
            <div class="symbol-badge" style="color:var(--danger);">9</div>
            <div>
              <div style="font-weight:700; font-size:0.82rem; color:var(--text-primary);">Inadmissible</div>
              <div style="font-size:0.7rem; color:var(--text-muted);">Formellement interdit</div>
            </div>
          </div>
          <div class="symbol-card">
            <div class="symbol-badge" style="color:var(--success);">✅</div>
            <div>
              <div style="font-weight:700; font-size:0.82rem; color:var(--text-primary);">Recommandé</div>
              <div style="font-size:0.7rem; color:var(--text-muted);">Bonne pratique préconisée</div>
            </div>
          </div>
        </div>
      </div>
    `;

    return container;
  }

  // ----------------------------------------------------------------------------
  // 4. Graphique interactif : Courbe temps-tension Annexe 4 OCFo (RS 734.2)
  //    Fidélité 100% à la source officielle fédérale (art. 54, 55 et 57)
  // ----------------------------------------------------------------------------
  // ----------------------------------------------------------------------------
  // 4. Graphique interactif : Courbe temps-tension Annexe 4 OCFo (RS 734.2)
  //    Fidélité 100% à la source officielle fédérale (Image 2 : art. 54, 55 et 57)
  // ----------------------------------------------------------------------------
  // 4. Graphique interactif : Courbe temps-tension Annexe 4 OCFo (RS 734.2)
  //    Fidélité 100% absolue à la source officielle fédérale (art. 54, 55 et 57)
  //    Axe horizontal au bas : durée (s) de 0,05 s à 6,0 s (avec 0,1, 0,5, 1, 2, 3, 4, 5)
  //    Axe vertical à gauche : tension (V) de 30 V à 1000 V (échelle logarithmique)
  //    Zones : zone inadmissible en haut, zone admissible en bas
  // ----------------------------------------------------------------------------
  function initOcfoAnnexe4Visual(root) {
    const containerRoot = root && root.querySelectorAll ? root : document;
    const widgetElements = containerRoot.querySelectorAll('#ocfoAnnexe4Widget, .ocfo-annexe4-widget');
    if (!widgetElements || widgetElements.length === 0) return;

    // Constantes de projection identiques à la source officielle fédérale
    const xLeft = 65.0;
    const x01 = 155.0;
    const x1 = 415.0;
    const xRight = 680.0;
    const wDec = x1 - x01; // 260 px

    const yTop = 35.0;
    const yBottom = 415.0;
    const hSpan = yBottom - yTop; // 380 px
    const logSpanU = Math.log10(1000.0) - Math.log10(30.0); // 1.52288
    const scaleU = hSpan / logSpanU; // 249.527

    function tToX(t) {
      const clampedT = Math.max(0.0456, Math.min(6.0, t));
      if (clampedT <= 1.0) {
        return x01 + wDec * (Math.log10(clampedT) + 1.0);
      } else {
        return x1 + ((xRight - x1) / 5.0) * (clampedT - 1.0);
      }
    }

    function xToT(x) {
      const clampedX = Math.max(xLeft, Math.min(xRight, x));
      if (clampedX <= x1) {
        const logT = ((clampedX - x01) / wDec) - 1.0;
        return Math.pow(10, logT);
      } else {
        return 1.0 + ((clampedX - x1) / (xRight - x1)) * 5.0;
      }
    }

    function uToY(u) {
      const clampedU = Math.max(30.0, Math.min(1000.0, u));
      return yTop + scaleU * (3.0 - Math.log10(clampedU));
    }

    function yToU(y) {
      const clampedY = Math.max(yTop, Math.min(yBottom, y));
      const logU = 3.0 - ((clampedY - yTop) / scaleU);
      return Math.pow(10, logU);
    }

    // Calcul exact des tensions admissibles selon la source Annexe 4
    function getAcVoltage(t) {
      if (t <= 0.10) {
        return 700.0;
      } else if (t <= 0.90) {
        const ratio = (Math.log10(t) - Math.log10(0.10)) / (Math.log10(0.90) - Math.log10(0.10));
        return Math.pow(10, Math.log10(700.0) + ratio * (Math.log10(80.0) - Math.log10(700.0)));
      } else if (t <= 5.0) {
        const x = tToX(t);
        const y = 308.7 + ((x - 403.1) / (627.0 - 403.1)) * (359.6 - 308.7);
        return yToU(y);
      } else {
        return 50.0;
      }
    }

    function getDcVoltage(t) {
      if (t <= 0.10) {
        return 700.0;
      } else if (t <= 0.90) {
        const ratio = (Math.log10(t) - Math.log10(0.10)) / (Math.log10(0.90) - Math.log10(0.10));
        return Math.pow(10, Math.log10(700.0) + ratio * (Math.log10(140.0) - Math.log10(700.0)));
      } else if (t <= 5.0) {
        const x = tToX(t);
        const y = 248.1 + ((x - 403.1) / (627.0 - 403.1)) * (264.8 - 248.1);
        return yToU(y);
      } else {
        return 120.0;
      }
    }

    function getExplanation(t, ac, dc) {
      if (t <= 0.10) {
        return "Temps d'élimination ultra-rapide (t ≤ 0,10 s). Tolérance maximale de 700 V AC et DC pour défauts fugitifs instantanés éliminés par fusibles HPC ou protections ultra-rapides (Annexe 4).";
      } else if (t <= 0.25) {
        return `Déclencheur rapide de ligne ou disjoncteur différentiel (t = ${t.toFixed(2)} s). Tension admissible : ${Math.round(ac)} V AC (15-100 Hz) / ${Math.round(dc)} V DC, seuil physiologique garanti par l'Art. 54 OCFo.`;
      } else if (t <= 0.50) {
        return `Temps de coupure conventionnel pour circuits basse tension NIBT ≤ 32 A (t = ${t.toFixed(2)} s). Tension admissible limitée à ${Math.round(ac)} V AC et ${Math.round(dc)} V DC pour prévenir l'asphyxie respiratoire.`;
      } else if (t <= 1.00) {
        return `Temporisation de protection moyenne (t = ${t.toFixed(2)} s). Coude à 80 V AC / 140 V DC. La tension admissible chute rapidement.`;
      } else if (t <= 2.50) {
        return `Tolérance de dépassement en zones habitées ou à proximité de chemins (Art. 54 al. 2 OCFo) : durée maximale de 2 secondes. Tension admissible : ${Math.round(ac)} V AC / ${Math.round(dc)} V DC.`;
      } else {
        return "Régime permanent (t ≥ 5,0 s). L'Art. 54 al. 1 OCFo impose une tension de contact permanente strictement ≤ 50 V AC (15-100 Hz) et ≤ 120 V DC en toute circonstance.";
      }
    }

    widgetElements.forEach(widget => {
      widget.innerHTML = `
        <div class="ocfo-widget-header">
          <div class="ocfo-widget-title-row">
            <div class="ocfo-widget-title">
              <span class="ocfo-pulse-dot" aria-hidden="true"></span>
              Tensions de contact admissibles
            </div>
            <span class="ocfo-widget-tag">Annexe 4 (art. 54, 55 et 57) • RS 734.2</span>
          </div>
          <div class="ocfo-widget-desc">
            Reproduction vectorielle 100% fidèle à l'Annexe 4 de l'OCFo (RS 734.2) : durée (s) en abscisse (0,1 à 5 s), tension (V) en ordonnée (30 à 1000 V), zones admissible et inadmissible conformes.
          </div>
        </div>

        <!-- Sélecteur de mode : AC / DC / Vue Source Superposée -->
        <div class="ocfo-mode-selector" role="tablist" aria-label="Sélection du type de courant">
          <button class="ocfo-mode-btn active" data-mode="ac" role="tab" aria-selected="true">
            ⚡ Tension alternative 15 - 100 Hz
          </button>
          <button class="ocfo-mode-btn" data-mode="dc" role="tab" aria-selected="false">
            🔋 Tension continue
          </button>
          <button class="ocfo-mode-btn" data-mode="all" role="tab" aria-selected="false">
            ⚖️ Vue Source RS 734.2 (AC + DC)
          </button>
        </div>

        <!-- Graphique SVG Bi-Logarithmique STRICTEMENT IDENTIQUE À LA SOURCE OFFICIELLE RS 734.2 -->
        <div class="ocfo-svg-container" style="position:relative;">
          <svg viewBox="0 0 740 480" preserveAspectRatio="xMidYMid meet" class="ocfo-svg-plot" style="width:100%; height:auto; display:block;" aria-label="Annexe 4 RS 734.2 - Tensions de contact admissibles">
            <defs>
              <linearGradient id="gradAcSafe" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stop-color="#38BDF8" stop-opacity="0.30"/>
                <stop offset="100%" stop-color="#38BDF8" stop-opacity="0.05"/>
              </linearGradient>
              <linearGradient id="gradDcSafe" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stop-color="#34D399" stop-opacity="0.30"/>
                <stop offset="100%" stop-color="#34D399" stop-opacity="0.05"/>
              </linearGradient>
            </defs>

            <!-- Cadre extérieur de la grille conforme au dessin source -->
            <rect x="65" y="35" width="615" height="380" fill="none" stroke="#CBD5E1" stroke-width="1.5"/>

            <!-- Grille bi-logarithmique complète conforme à l'Annexe 4 -->
            <line x1="65.0" y1="35.0" x2="680.0" y2="35.0" stroke="rgba(255,255,255,0.30)"/>
            <text x="58" y="39.0" class="ocfo-axis-label" text-anchor="end">1000</text>
            <line x1="65.0" y1="46.4" x2="680.0" y2="46.4" stroke="rgba(255,255,255,0.12)"/>
            <text x="58" y="50.4" class="ocfo-axis-label" text-anchor="end">900</text>
            <line x1="65.0" y1="59.2" x2="680.0" y2="59.2" stroke="rgba(255,255,255,0.12)"/>
            <text x="58" y="63.2" class="ocfo-axis-label" text-anchor="end">800</text>
            <line x1="65.0" y1="73.7" x2="680.0" y2="73.7" stroke="rgba(255,255,255,0.30)"/>
            <text x="58" y="77.7" class="ocfo-axis-label ocfo-axis-highlight-top" text-anchor="end">700</text>
            <line x1="65.0" y1="90.4" x2="680.0" y2="90.4" stroke="rgba(255,255,255,0.12)"/>
            <text x="58" y="94.4" class="ocfo-axis-label" text-anchor="end">600</text>
            <line x1="65.0" y1="110.1" x2="680.0" y2="110.1" stroke="rgba(255,255,255,0.12)"/>
            <text x="58" y="114.1" class="ocfo-axis-label" text-anchor="end">500</text>
            <line x1="65.0" y1="134.3" x2="680.0" y2="134.3" stroke="rgba(255,255,255,0.12)"/>
            <text x="58" y="138.3" class="ocfo-axis-label" text-anchor="end">400</text>
            <line x1="65.0" y1="165.5" x2="680.0" y2="165.5" stroke="rgba(255,255,255,0.12)"/>
            <text x="58" y="169.5" class="ocfo-axis-label" text-anchor="end">300</text>
            <line x1="65.0" y1="209.4" x2="680.0" y2="209.4" stroke="rgba(255,255,255,0.12)"/>
            <text x="58" y="213.4" class="ocfo-axis-label" text-anchor="end">200</text>
            <line x1="65.0" y1="284.5" x2="680.0" y2="284.5" stroke="rgba(255,255,255,0.30)"/>
            <text x="58" y="288.5" class="ocfo-axis-label" text-anchor="end">100</text>
            <line x1="65.0" y1="295.9" x2="680.0" y2="295.9" stroke="rgba(255,255,255,0.12)"/>
            <text x="58" y="299.9" class="ocfo-axis-label" text-anchor="end">90</text>
            <line x1="65.0" y1="308.7" x2="680.0" y2="308.7" stroke="rgba(255,255,255,0.12)"/>
            <text x="58" y="312.7" class="ocfo-axis-label" text-anchor="end">80</text>
            <line x1="65.0" y1="323.2" x2="680.0" y2="323.2" stroke="rgba(255,255,255,0.12)"/>
            <text x="58" y="327.2" class="ocfo-axis-label" text-anchor="end">70</text>
            <line x1="65.0" y1="339.9" x2="680.0" y2="339.9" stroke="rgba(255,255,255,0.12)"/>
            <text x="58" y="343.9" class="ocfo-axis-label" text-anchor="end">60</text>
            <line x1="65.0" y1="359.6" x2="680.0" y2="359.6" stroke="rgba(255,255,255,0.30)"/>
            <text x="58" y="363.6" class="ocfo-axis-label ocfo-axis-highlight-ac" text-anchor="end">50</text>
            <line x1="65.0" y1="383.8" x2="680.0" y2="383.8" stroke="rgba(255,255,255,0.12)"/>
            <text x="58" y="387.8" class="ocfo-axis-label" text-anchor="end">40</text>
            <line x1="65.0" y1="415.0" x2="680.0" y2="415.0" stroke="rgba(255,255,255,0.30)"/>
            <text x="58" y="419.0" class="ocfo-axis-label" text-anchor="end">30</text>
            <line x1="76.7" y1="35.0" x2="76.7" y2="415.0" stroke="rgba(255,255,255,0.12)"/>
            <line x1="97.3" y1="35.0" x2="97.3" y2="415.0" stroke="rgba(255,255,255,0.12)"/>
            <line x1="114.7" y1="35.0" x2="114.7" y2="415.0" stroke="rgba(255,255,255,0.12)"/>
            <line x1="129.8" y1="35.0" x2="129.8" y2="415.0" stroke="rgba(255,255,255,0.12)"/>
            <line x1="143.1" y1="35.0" x2="143.1" y2="415.0" stroke="rgba(255,255,255,0.12)"/>
            <line x1="233.3" y1="35.0" x2="233.3" y2="415.0" stroke="rgba(255,255,255,0.12)"/>
            <line x1="279.1" y1="35.0" x2="279.1" y2="415.0" stroke="rgba(255,255,255,0.12)"/>
            <line x1="311.5" y1="35.0" x2="311.5" y2="415.0" stroke="rgba(255,255,255,0.12)"/>
            <line x1="357.3" y1="35.0" x2="357.3" y2="415.0" stroke="rgba(255,255,255,0.12)"/>
            <line x1="374.7" y1="35.0" x2="374.7" y2="415.0" stroke="rgba(255,255,255,0.12)"/>
            <line x1="389.8" y1="35.0" x2="389.8" y2="415.0" stroke="rgba(255,255,255,0.12)"/>
            <line x1="403.1" y1="35.0" x2="403.1" y2="415.0" stroke="rgba(255,255,255,0.12)"/>
            <line x1="155.0" y1="35.0" x2="155.0" y2="415.0" stroke="rgba(255,255,255,0.30)"/>
            <text x="155.0" y="432" class="ocfo-axis-label" text-anchor="middle">0,1</text>
            <line x1="336.7" y1="35.0" x2="336.7" y2="415.0" stroke="rgba(255,255,255,0.20)"/>
            <text x="336.7" y="432" class="ocfo-axis-label" text-anchor="middle">0,5</text>
            <line x1="415.0" y1="35.0" x2="415.0" y2="415.0" stroke="rgba(255,255,255,0.30)"/>
            <text x="415.0" y="432" class="ocfo-axis-label" text-anchor="middle">1</text>
            <line x1="468.0" y1="35.0" x2="468.0" y2="415.0" stroke="rgba(255,255,255,0.20)"/>
            <text x="468.0" y="432" class="ocfo-axis-label" text-anchor="middle">2</text>
            <line x1="521.0" y1="35.0" x2="521.0" y2="415.0" stroke="rgba(255,255,255,0.20)"/>
            <text x="521.0" y="432" class="ocfo-axis-label" text-anchor="middle">3</text>
            <line x1="574.0" y1="35.0" x2="574.0" y2="415.0" stroke="rgba(255,255,255,0.20)"/>
            <text x="574.0" y="432" class="ocfo-axis-label" text-anchor="middle">4</text>
            <line x1="627.0" y1="35.0" x2="627.0" y2="415.0" stroke="rgba(255,255,255,0.30)"/>
            <text x="627.0" y="432" class="ocfo-axis-label ocfo-axis-highlight-ac" text-anchor="middle">5</text>

            <!-- Axe vertical à gauche : Titre et flèche directionnelle vers le haut (Image 2) -->
            <text x="18" y="225" class="ocfo-axis-title" text-anchor="middle" transform="rotate(-90, 18, 225)">▲ tension (V)</text>

            <!-- Axe horizontal au bas : Titre et flèche directionnelle vers la droite (Image 2) -->
            <text x="372" y="465" class="ocfo-axis-title" text-anchor="middle">durée (s) ────────────────►</text>

            <!-- Surfaces sous les courbes (zone admissible ombrée) -->
            <path class="ocfo-area-ac" fill="url(#gradAcSafe)" d="M 65.0,73.7 L 155.0,73.7 L 403.1,308.7 L 627.0,359.6 L 680.0,359.6 L 680.0,415.0 L 65.0,415.0 Z"/>
            <path class="ocfo-area-dc" fill="url(#gradDcSafe)" d="M 65.0,73.7 L 155.0,73.7 L 403.1,248.1 L 627.0,264.8 L 680.0,264.8 L 680.0,415.0 L 65.0,415.0 Z" style="display:none;"/>

            <!-- Courbe continue : Tension continue (Trait interrompu / tiretés épais) -->
            <path class="ocfo-curve-dc" d="M 155.0,73.7 L 403.1,248.1 L 627.0,264.8 L 680.0,264.8" stroke="#34D399" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="10,6" fill="none" style="display:none;"/>

            <!-- Courbe alternative : Tension alternative 15 - 100 Hz (Trait plein épais) -->
            <path class="ocfo-curve-ac" d="M 65.0,73.7 L 155.0,73.7 L 403.1,308.7 L 627.0,359.6 L 680.0,359.6" stroke="#38BDF8" stroke-width="3.8" stroke-linecap="round" stroke-linejoin="round" fill="none"/>

            <!-- Cartouche officiel : zone inadmissible (En haut à droite selon Image 2) -->
            <g class="ocfo-official-box ocfo-box-inadmissible" transform="translate(480, 160)">
              <rect x="0" y="0" width="145" height="28" rx="2" fill="#0A101D" stroke="#EF4444" stroke-width="1.2" fill-opacity="0.96"/>
              <text x="72" y="18" fill="#FCA5A5" font-size="11" font-weight="700" text-anchor="middle">zone inadmissible</text>
            </g>

            <!-- Cartouche officiel : zone admissible (En bas à droite selon Image 2) -->
            <g class="ocfo-official-box ocfo-box-admissible" transform="translate(470, 375)">
              <rect x="0" y="0" width="135" height="28" rx="2" fill="#0A101D" stroke="#34D399" stroke-width="1.2" fill-opacity="0.96"/>
              <text x="67" y="18" fill="#34D399" font-size="11" font-weight="700" text-anchor="middle">zone admissible</text>
            </g>

            <!-- Étiquette officielle : tension continue (pointant sur la courbe tiretée) -->
            <g class="ocfo-label-dc-box" transform="translate(250, 95)" style="display:none;">
              <rect x="0" y="0" width="125" height="25" rx="2" fill="#0A101D" stroke="#34D399" stroke-width="1.2" fill-opacity="0.96"/>
              <text x="62" y="16" fill="#34D399" font-size="10.5" font-weight="700" text-anchor="middle">tension continue</text>
              <line x1="0" y1="12" x2="-25" y2="28" stroke="#34D399" stroke-width="1.2" stroke-dasharray="3,2"/>
            </g>

            <!-- Étiquette officielle : tension alternative 15 - 100 Hz (pointant sur la courbe pleine) -->
            <g class="ocfo-label-ac-box" transform="translate(130, 220)">
              <rect x="0" y="0" width="185" height="25" rx="2" fill="#0A101D" stroke="#38BDF8" stroke-width="1.2" fill-opacity="0.96"/>
              <text x="92" y="16" fill="#38BDF8" font-size="10.5" font-weight="700" text-anchor="middle">tension alternative 15 - 100 Hz</text>
              <line x1="185" y1="12" x2="210" y2="-20" stroke="#38BDF8" stroke-width="1.2"/>
            </g>

            <!-- Lignes repères réticule interactif (vertical = durée t, horizontal = tension U) -->
            <line class="ocfo-reticle-v" x1="233.3" y1="35" x2="233.3" y2="415" stroke="rgba(255,255,255,0.75)" stroke-dasharray="3,3" stroke-width="1.5"/>
            <line class="ocfo-reticle-h" x1="65" y1="180.0" x2="680" y2="180.0" stroke="rgba(56,189,248,0.50)" stroke-dasharray="2,2" stroke-width="1.2"/>

            <!-- Points interactifs mobiles sur les courbes -->
            <circle class="ocfo-point-dc" cx="233.3" cy="155.0" r="6" fill="#34D399" stroke="#070D18" stroke-width="2.5" style="display:none;"/>
            <circle class="ocfo-point-ac" cx="233.3" cy="180.0" r="6" fill="#38BDF8" stroke="#070D18" stroke-width="2.5"/>

            <!-- Badges Tooltips réticule dynamiques -->
            <g class="ocfo-badge-ac" transform="translate(233.3, 180.0)">
              <rect x="-45" y="-30" width="90" height="24" rx="4" fill="#0A101D" stroke="#38BDF8" stroke-width="1.5" fill-opacity="0.98"/>
              <text class="ocfo-badge-ac-text" x="0" y="-14" fill="#38BDF8" font-size="11" font-weight="800" text-anchor="middle">350 V AC</text>
            </g>

            <g class="ocfo-badge-dc" transform="translate(233.3, 155.0)" style="display:none;">
              <rect x="-45" y="-30" width="90" height="24" rx="4" fill="#0A101D" stroke="#34D399" stroke-width="1.5" fill-opacity="0.98"/>
              <text class="ocfo-badge-dc-text" x="0" y="-14" fill="#34D399" font-size="11" font-weight="800" text-anchor="middle">480 V DC</text>
            </g>
          </svg>
        </div>

        <!-- Curseur temporel interactif -->
        <div class="ocfo-slider-wrapper">
          <div class="ocfo-slider-label">
            <span style="font-weight:700; color:var(--text-primary);">⏱️ Durée maximale d'élimination du défaut (t) :</span>
            <span class="ocfo-slider-badge ocfo-slider-val-el">0,20 s (200 ms)</span>
          </div>
          <input type="range" class="ocfo-slider-input ocfo-slider-input-el" min="0" max="100" value="17.7" step="0.5" aria-label="Ajuster la durée maximale d'élimination du défaut en secondes"/>
        </div>

        <!-- Paliers types officiels de coupure selon Annexe 4 & OCFo -->
        <div class="ocfo-presets-header">
          ⚡ Paliers types officiels de déclenchement (Annexe 4 OCFo, art. 54 & NIBT) :
        </div>
        <div class="ocfo-presets-bar">
          <button class="ocfo-preset-btn" data-t="0.10">0,10 s (Palier 700 V)</button>
          <button class="ocfo-preset-btn active" data-t="0.20">0,20 s (Ligne HT)</button>
          <button class="ocfo-preset-btn" data-t="0.40">0,40 s (NIBT ≤ 32 A)</button>
          <button class="ocfo-preset-btn" data-t="0.50">0,50 s (Temporisé moyen)</button>
          <button class="ocfo-preset-btn" data-t="0.90">0,90 s (Coude 80 V AC)</button>
          <button class="ocfo-preset-btn" data-t="1.00">1,00 s (Coude 140 V DC)</button>
          <button class="ocfo-preset-btn" data-t="2.00">2,00 s (Zone habitée Art. 54)</button>
          <button class="ocfo-preset-btn" data-t="5.00">5,00 s (Palier permanent 50 V)</button>
          <button class="ocfo-preset-btn btn-auto-play" style="background:rgba(56,189,248,0.15); border-color:var(--electric-blue); color:var(--electric-blue);">
            ▶️ Animer
          </button>
        </div>

        <!-- Fiche de résultats & indicateurs légaux -->
        <div class="ocfo-feedback-card">
          <div class="ocfo-metrics-grid">
            <div class="ocfo-metric-box">
              <div class="ocfo-metric-val ocfo-metric-time" style="color:#F8FAFC;">0,20 s</div>
              <div class="ocfo-metric-lbl">Durée de coupure (t)</div>
            </div>
            <div class="ocfo-metric-box ocfo-box-ac">
              <div class="ocfo-metric-val ocfo-metric-ac" style="color:#38BDF8;">350 V</div>
              <div class="ocfo-metric-lbl">Tension max AC admise (15-100 Hz)</div>
            </div>
            <div class="ocfo-metric-box ocfo-box-dc">
              <div class="ocfo-metric-val ocfo-metric-dc" style="color:#34D399;">480 V</div>
              <div class="ocfo-metric-lbl">Tension max DC admise</div>
            </div>
          </div>

          <div class="ocfo-status-pill safe ocfo-status-pill-el">
            <span>🛡️ Zone Admissible : Sécurité des personnes garantie si le déclenchement survient en ≤ 0,20 s (Annexe 4 OCFo)</span>
          </div>

          <div class="ocfo-explanation-box ocfo-explanation-text">
            Déclenchement rapide de ligne haute tension ou disjoncteur différentiel (t = 0,20 s). Tension admissible : 350 V AC (15-100 Hz) / 480 V DC, seuil physiologique garanti par l'Art. 54 OCFo.
          </div>
        </div>
      `;

      // Références DOM
      const slider = widget.querySelector('.ocfo-slider-input-el');
      const sliderVal = widget.querySelector('.ocfo-slider-val-el');
      const metricTime = widget.querySelector('.ocfo-metric-time');
      const metricAc = widget.querySelector('.ocfo-metric-ac');
      const metricDc = widget.querySelector('.ocfo-metric-dc');
      const boxAc = widget.querySelector('.ocfo-box-ac');
      const boxDc = widget.querySelector('.ocfo-box-dc');
      const statusPill = widget.querySelector('.ocfo-status-pill-el');
      const explanation = widget.querySelector('.ocfo-explanation-text');
      const reticleH = widget.querySelector('.ocfo-reticle-h');
      const reticleV = widget.querySelector('.ocfo-reticle-v');
      const pointAc = widget.querySelector('.ocfo-point-ac');
      const pointDc = widget.querySelector('.ocfo-point-dc');
      const badgeAc = widget.querySelector('.ocfo-badge-ac');
      const badgeDc = widget.querySelector('.ocfo-badge-dc');
      const badgeAcText = widget.querySelector('.ocfo-badge-ac-text');
      const badgeDcText = widget.querySelector('.ocfo-badge-dc-text');
      const curveAc = widget.querySelector('.ocfo-curve-ac');
      const curveDc = widget.querySelector('.ocfo-curve-dc');
      const areaAc = widget.querySelector('.ocfo-area-ac');
      const areaDc = widget.querySelector('.ocfo-area-dc');
      const labelAcBox = widget.querySelector('.ocfo-label-ac-box');
      const labelDcBox = widget.querySelector('.ocfo-label-dc-box');
      const presetBtns = widget.querySelectorAll('.ocfo-preset-btn:not(.btn-auto-play)');
      const btnAutoPlay = widget.querySelector('.btn-auto-play');
      const modeBtns = widget.querySelectorAll('.ocfo-mode-btn');

      let currentMode = 'ac';
      let playInterval = null;

      function applyModeVisibility() {
        if (currentMode === 'ac') {
          if (curveAc) curveAc.style.display = '';
          if (curveDc) curveDc.style.display = 'none';
          if (areaAc) areaAc.style.display = '';
          if (areaDc) areaDc.style.display = 'none';
          if (pointAc) pointAc.style.display = '';
          if (pointDc) pointDc.style.display = 'none';
          if (badgeAc) badgeAc.style.display = '';
          if (badgeDc) badgeDc.style.display = 'none';
          if (labelAcBox) labelAcBox.style.display = '';
          if (labelDcBox) labelDcBox.style.display = 'none';
          if (boxAc) { boxAc.style.opacity = '1'; boxAc.style.display = ''; }
          if (boxDc) { boxDc.style.opacity = '0.35'; }
        } else if (currentMode === 'dc') {
          if (curveAc) curveAc.style.display = 'none';
          if (curveDc) curveDc.style.display = '';
          if (areaAc) areaAc.style.display = 'none';
          if (areaDc) areaDc.style.display = '';
          if (pointAc) pointAc.style.display = 'none';
          if (pointDc) pointDc.style.display = '';
          if (badgeAc) badgeAc.style.display = 'none';
          if (badgeDc) badgeDc.style.display = '';
          if (labelAcBox) labelAcBox.style.display = 'none';
          if (labelDcBox) labelDcBox.style.display = '';
          if (boxAc) { boxAc.style.opacity = '0.35'; }
          if (boxDc) { boxDc.style.opacity = '1'; boxDc.style.display = ''; }
        } else {
          // 'all' -> Vue Source RS 734.2 (AC + DC)
          if (curveAc) curveAc.style.display = '';
          if (curveDc) curveDc.style.display = '';
          if (areaAc) areaAc.style.display = '';
          if (areaDc) areaDc.style.display = 'none';
          if (pointAc) pointAc.style.display = '';
          if (pointDc) pointDc.style.display = '';
          if (badgeAc) badgeAc.style.display = '';
          if (badgeDc) badgeDc.style.display = '';
          if (labelAcBox) labelAcBox.style.display = '';
          if (labelDcBox) labelDcBox.style.display = '';
          if (boxAc) { boxAc.style.opacity = '1'; boxAc.style.display = ''; }
          if (boxDc) { boxDc.style.opacity = '1'; boxDc.style.display = ''; }
        }
      }

      function updateView(t, activePreset = null) {
        const valAc = getAcVoltage(t);
        const valDc = getDcVoltage(t);
        const xPos = tToX(t);
        const yAc = uToY(valAc);
        const yDc = uToY(valDc);

        const sliderPercent = ((Math.log10(t) - Math.log10(0.1)) / (Math.log10(5.0) - Math.log10(0.1))) * 100;
        if (slider && document.activeElement !== slider) {
          slider.value = Math.max(0, Math.min(100, sliderPercent));
        }
        if (sliderVal) {
          sliderVal.textContent = t < 1.0 ? `${t.toFixed(2)} s (${Math.round(t * 1000)} ms)` : `${t.toFixed(2)} s`;
        }

        if (metricTime) metricTime.textContent = `${t.toFixed(2)} s`;
        if (metricAc) metricAc.textContent = `${Math.round(valAc)} V`;
        if (metricDc) metricDc.textContent = `${Math.round(valDc)} V`;
        if (explanation) explanation.textContent = getExplanation(t, valAc, valDc);

        if (statusPill) {
          statusPill.className = 'ocfo-status-pill safe ocfo-status-pill-el';
          statusPill.innerHTML = `<span>🛡️ Zone Admissible : Sécurité garantie si la coupure survient en ≤ ${t.toFixed(2)} s (Annexe 4 OCFo)</span>`;
        }

        // Positionnement des réticules (vertical = t, horizontal = U)
        if (reticleV) {
          reticleV.setAttribute('x1', xPos.toFixed(1));
          reticleV.setAttribute('x2', xPos.toFixed(1));
        }
        if (reticleH) {
          const yRef = (currentMode === 'dc' ? yDc : yAc);
          reticleH.setAttribute('y1', yRef.toFixed(1));
          reticleH.setAttribute('y2', yRef.toFixed(1));
        }

        // Points sur les courbes
        if (pointAc) {
          pointAc.setAttribute('cx', xPos.toFixed(1));
          pointAc.setAttribute('cy', yAc.toFixed(1));
        }
        if (pointDc) {
          pointDc.setAttribute('cx', xPos.toFixed(1));
          pointDc.setAttribute('cy', yDc.toFixed(1));
        }

        // Positionnement des badges tooltips
        let offsetYAc = -14;
        let offsetYDc = -14;
        if (currentMode === 'all' && Math.abs(yAc - yDc) < 35) {
          offsetYDc = -30;
          offsetYAc = 18;
        }

        if (badgeAc) {
          badgeAc.setAttribute('transform', `translate(${xPos.toFixed(1)}, ${(yAc + offsetYAc).toFixed(1)})`);
        }
        if (badgeAcText) {
          badgeAcText.textContent = `${Math.round(valAc)} V AC`;
        }

        if (badgeDc) {
          badgeDc.setAttribute('transform', `translate(${xPos.toFixed(1)}, ${(yDc + offsetYDc).toFixed(1)})`);
        }
        if (badgeDcText) {
          badgeDcText.textContent = `${Math.round(valDc)} V DC`;
        }

        applyModeVisibility();

        presetBtns.forEach(btn => {
          const btnT = parseFloat(btn.dataset.t);
          if (activePreset !== null && Math.abs(btnT - t) < 0.02) {
            btn.classList.add('active');
          } else {
            btn.classList.remove('active');
          }
        });
      }

      // Curseur temporel
      if (slider) {
        slider.addEventListener('input', (e) => {
          if (playInterval) {
            clearInterval(playInterval);
            playInterval = null;
            if (btnAutoPlay) btnAutoPlay.textContent = '▶️ Animer';
          }
          const pct = parseFloat(e.target.value) / 100;
          const t = Math.pow(10, Math.log10(0.1) + pct * (Math.log10(5.0) - Math.log10(0.1)));
          updateView(t, null);
        });
      }

      // Boutons de présélections de paliers
      presetBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          if (playInterval) {
            clearInterval(playInterval);
            playInterval = null;
            if (btnAutoPlay) btnAutoPlay.textContent = '▶️ Animer';
          }
          const t = parseFloat(btn.dataset.t);
          updateView(t, t);
        });
      });

      // Boutons d'onglets de mode
      modeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          modeBtns.forEach(b => {
            b.classList.remove('active');
            b.setAttribute('aria-selected', 'false');
          });
          btn.classList.add('active');
          btn.setAttribute('aria-selected', 'true');
          currentMode = btn.dataset.mode;
          applyModeVisibility();
        });
      });

      // Animation automatique
      if (btnAutoPlay) {
        btnAutoPlay.addEventListener('click', () => {
          if (playInterval) {
            clearInterval(playInterval);
            playInterval = null;
            btnAutoPlay.textContent = '▶️ Animer';
          } else {
            btnAutoPlay.textContent = '⏸️ Pause';
            let animT = 0.10;
            let direction = 1;
            playInterval = setInterval(() => {
              if (direction === 1) {
                animT *= 1.07;
                if (animT >= 5.0) {
                  animT = 5.0;
                  direction = -1;
                }
              } else {
                animT /= 1.07;
                if (animT <= 0.10) {
                  animT = 0.10;
                  direction = 1;
                }
              }
              updateView(animT, null);
            }, 60);
          }
        });
      }

      // Interaction pointeur / tactile directement sur le graphique SVG
      const svgPlot = widget.querySelector('.ocfo-svg-plot');
      if (svgPlot) {
        let isInteracting = false;
        const handleCoord = (clientX) => {
          const rect = svgPlot.getBoundingClientRect();
          const svgX = ((clientX - rect.left) / rect.width) * 740;
          if (svgX >= xLeft && svgX <= xRight) {
            const t = xToT(svgX);
            updateView(t, null);
          }
        };

        svgPlot.addEventListener('pointerdown', (evt) => {
          if (playInterval) {
            clearInterval(playInterval);
            playInterval = null;
            if (btnAutoPlay) btnAutoPlay.textContent = '▶️ Animer';
          }
          isInteracting = true;
          try { svgPlot.setPointerCapture(evt.pointerId); } catch (e) {}
          handleCoord(evt.clientX);
        });

        svgPlot.addEventListener('pointermove', (evt) => {
          if (!isInteracting) return;
          handleCoord(evt.clientX);
        });

        const stopInteracting = (evt) => {
          if (!isInteracting) return;
          isInteracting = false;
          try { svgPlot.releasePointerCapture(evt.pointerId); } catch (e) {}
        };

        svgPlot.addEventListener('pointerup', stopInteracting);
        svgPlot.addEventListener('pointercancel', stopInteracting);
        svgPlot.addEventListener('pointerleave', stopInteracting);
      }

      // Initialisation au point de référence officiel 0,20 s (Lignes HT / OCFo)
      updateView(0.20, 0.20);
    });
  }
  if (typeof window !== 'undefined') {
    window.initOcfoAnnexe4Visual = initOcfoAnnexe4Visual;
  }


  // ==================== src/components/quiz.js ====================
  // Swiss Electrical Academy — Moteur de Quiz Pédagogique (V1.1)
  // Types de questions, feedback immédiat (✓ Correct / ✕ Incorrect), score, révision des erreurs et gain d'XP anti-farming


  function createQuizEngine(formation, onComplete) {
    const quizData = formation.quiz;
    if (!quizData || quizData.length === 0) {
      const empty = document.createElement('div');
      empty.className = 'quiz-section';
      empty.innerHTML = `
        <div style="text-align:center; padding:1.5rem; color:var(--text-muted);">
          ℹ️ Aucun quiz associé à cette fiche.
        </div>
      `;
      return empty;
    }

    let currentIndex = 0;
    let userAnswers = {}; // { [questionIndex]: selectedOptionIndex }
    let userMistakes = []; // [questionIndices]
    let currentScore = 0;
    let isAnswerSubmitted = false;

    const container = document.createElement('div');
    container.className = 'quiz-section';

    function renderCurrentQuestion() {
      container.innerHTML = '';

      // Si toutes les questions ont été traitées, afficher le score final
      if (currentIndex >= quizData.length) {
        renderFinalScore();
        return;
      }

      const q = quizData[currentIndex];
      isAnswerSubmitted = false;

      container.innerHTML = `
        <div class="quiz-header">
          <div class="quiz-title">📝 Quiz d'évaluation — ${formation.title}</div>
          <div class="quiz-progress-pill">Question ${currentIndex + 1}&nbsp;/&nbsp;${quizData.length}</div>
        </div>

        <div class="question-card">
          <div class="question-text">${currentIndex + 1}. ${q.question}</div>
          <div class="options-list" id="optionsList"></div>
        </div>

        <div id="feedbackContainer"></div>

        <div class="quiz-actions-row">
          <button class="btn-quiz-action" id="btnValidateAnswer" disabled>Valider la réponse</button>
        </div>
      `;

      const optionsList = container.querySelector('#optionsList');
      const btnValidate = container.querySelector('#btnValidateAnswer');
      const feedbackContainer = container.querySelector('#feedbackContainer');

      q.options.forEach((optText, optIdx) => {
        const optEl = document.createElement('div');
        optEl.className = 'option-item';
        optEl.innerHTML = `
          <div class="option-radio"></div>
          <div class="option-text">${optText}</div>
        `;

        optEl.addEventListener('click', () => {
          if (isAnswerSubmitted) return; // Ne plus changer après validation
          optionsList.querySelectorAll('.option-item').forEach(el => el.classList.remove('selected'));
          optEl.classList.add('selected');
          userAnswers[currentIndex] = optIdx;
          btnValidate.disabled = false;
        });

        optionsList.appendChild(optEl);
      });

      btnValidate.addEventListener('click', () => {
        if (isAnswerSubmitted) {
          // Passer à la question suivante
          currentIndex++;
          renderCurrentQuestion();
          return;
        }

        // Valider la réponse actuelle
        isAnswerSubmitted = true;
        const selectedOpt = userAnswers[currentIndex];
        const isCorrect = (selectedOpt === q.correctAnswer);

        if (isCorrect) {
          currentScore++;
        } else {
          userMistakes.push(currentIndex);
        }

        // Colorer les options
        const optElements = optionsList.querySelectorAll('.option-item');
        optElements.forEach((el, idx) => {
          if (idx === q.correctAnswer) {
            el.classList.add('correct');
          } else if (idx === selectedOpt) {
            el.classList.add('incorrect');
          }
        });

        // Feedback Immédiat (Section 21)
        feedbackContainer.innerHTML = `
          <div class="quiz-feedback-box ${isCorrect ? 'feedback-correct' : 'feedback-incorrect'}">
            <div class="feedback-badge">
              ${isCorrect ? '✓ Correct !' : '✕ Incorrect'}
            </div>
            <div class="feedback-explanation">
              ${isCorrect ? '' : `<strong>Bonne réponse :</strong> ${q.options[q.correctAnswer]}<br/>`}
              ${q.explanation}
            </div>
          </div>
        `;

        btnValidate.textContent = (currentIndex + 1 < quizData.length) ? "Question suivante →" : "Voir les résultats 🏁";
      });
    }

    function renderFinalScore() {
      const total = quizData.length;
      const percentage = Math.round((currentScore / total) * 100);
      const passed = percentage >= 75;
      const xpAvailable = formation.xpReward || 20;

      // Enregistrer les résultats dans le localStorage
      StorageService.saveQuizResult(formation.id, {
        score: currentScore,
        total,
        percentage,
        passed
      });

      // Attribuer l'XP (anti-farming : si déjà acquis, addXp renvoie 0)
      let awardedXp = 0;
      if (passed) {
        StorageService.markLessonCompleted(formation.id, formation.moduleId);
        awardedXp = StorageService.addXp(xpAvailable, `quiz_${formation.id}`);
      }

      const isAlreadyAwarded = StorageService.getAwardedSources().includes(`quiz_${formation.id}`);

      container.innerHTML = `
        <div class="quiz-score-card">
          <div class="score-circle">
            <div class="score-number">${currentScore}/${total}</div>
            <div class="score-percent">${percentage}%</div>
          </div>

          <div style="font-size:1.3rem; font-weight:800; color:var(--text-primary);">
            ${passed ? '🎉 Félicitations ! Formation validée' : '⚠️ Objectif non atteint (75% requis)'}
          </div>

          <div style="color:var(--text-secondary); max-width:460px; line-height:1.5;">
            ${passed 
              ? 'Vous avez démontré votre maîtrise des notions abordées dans cette formation technique.' 
              : 'Nous vous recommandons de réviser les notions clés et de retenter le quiz.'}
          </div>

          ${passed ? `
            <div class="score-xp-award">
              ⚡ ${awardedXp > 0 ? `+${awardedXp} XP gagnés !` : `${xpAvailable} XP (Déjà acquis)`}
            </div>
          ` : ''}

          <div class="score-actions-row">
            ${userMistakes.length > 0 ? `
              <button class="btn-quiz-action" style="background:var(--bg-surface-elevated); color:var(--text-primary); border:1px solid var(--border-medium);" id="btnReviewMistakes">
                🔍 Revoir mes erreurs (${userMistakes.length})
              </button>
            ` : ''}
            <button class="btn-quiz-action" id="btnRestartQuiz">
              🔄 Recommencer le quiz
            </button>
            <button class="btn-quiz-action" style="background:var(--success); color:#FFFFFF;" id="btnFinishLesson">
              Continuer la formation →
            </button>
          </div>
        </div>
      `;

      // Revoir mes erreurs (AC-P1-007)
      const btnReview = container.querySelector('#btnReviewMistakes');
      if (btnReview) {
        btnReview.addEventListener('click', () => {
          renderReviewMistakes();
        });
      }

      // Recommencer
      const btnRestart = container.querySelector('#btnRestartQuiz');
      if (btnRestart) {
        btnRestart.addEventListener('click', () => {
          currentIndex = 0;
          userAnswers = {};
          userMistakes = [];
          currentScore = 0;
          renderCurrentQuestion();
        });
      }

      // Terminer
      const btnFinish = container.querySelector('#btnFinishLesson');
      if (btnFinish) {
        btnFinish.addEventListener('click', () => {
          if (onComplete) onComplete();
        });
      }
    }

    function renderReviewMistakes() {
      container.innerHTML = `
        <div class="quiz-header">
          <div class="quiz-title">🔍 Revue détaillée de vos erreurs (${userMistakes.length})</div>
          <button class="btn-quiz-action" style="padding:0.35rem 0.85rem; font-size:0.8rem;" id="btnBackToScore">
            ← Retour au score
          </button>
        </div>
        <div style="display:flex; flex-direction:column; gap:1.25rem; margin-top:1rem;">
          ${userMistakes.map((qIdx) => {
            const q = quizData[qIdx];
            const userChoice = userAnswers[qIdx];
            return `
              <div style="background:var(--bg-app); border:1px solid var(--border-subtle); border-radius:var(--radius-md); padding:1.25rem;">
                <div style="font-weight:700; color:var(--text-primary); margin-bottom:0.75rem;">
                  Question ${qIdx + 1} : ${q.question}
                </div>
                <div style="font-size:0.85rem; color:var(--danger); margin-bottom:0.35rem;">
                  ✕ Votre réponse : <strong>${q.options[userChoice]}</strong>
                </div>
                <div style="font-size:0.85rem; color:var(--success); margin-bottom:0.65rem;">
                  ✓ Réponse correcte : <strong>${q.options[q.correctAnswer]}</strong>
                </div>
                <div style="font-size:0.82rem; color:var(--text-muted); background:var(--bg-surface-elevated); padding:0.65rem; border-radius:var(--radius-sm);">
                  💡 <strong>Explication :</strong> ${q.explanation}
                </div>
              </div>
            `;
          }).join('')}
        </div>
      `;

      const btnBack = container.querySelector('#btnBackToScore');
      if (btnBack) {
        btnBack.addEventListener('click', () => {
          renderFinalScore();
        });
      }
    }

    renderCurrentQuestion();
    return container;
  }


  // ==================== src/components/navigation.js ====================
  // Swiss Electrical Academy — Composant de Navigation (V1.1)
  // Sidebar permanente desktop, bottom-nav mobile, bandeau supérieur avec XP, réseau & PWA


  function setupNavigation(container, onNavigate) {
    let deferredPrompt = null;

    // Créer le shell HTML de base
    container.innerHTML = `
      <!-- Sidebar Desktop Permanente -->
      <aside class="sidebar" id="appSidebar" role="navigation" aria-label="Navigation principale">
        <div class="sidebar-header">
          <div class="brand-icon" aria-hidden="true">
            <img src="./public/icons/icon-192.png" alt="Logo ELECBOOK" width="34" height="34" style="border-radius:6px; object-fit:contain; display:block;"/>
          </div>
          <div class="brand-title" aria-label="ELECBOOK EBOOK">
            <div class="brand-name font-brand" aria-label="ELECBOOK">
              <span class="brand-lead">e&#xF025;c</span><span class="brand-tail">b&#xF03A;k</span>
            </div>
            <div class="brand-subtitle font-brand" aria-label="EBOOK">
              <span class="brand-lead">&#xF025;</span><span class="brand-tail">b&#xF03A;k</span>
            </div>
          </div>
        </div>

        <nav class="sidebar-nav">
          <div>
            <div class="nav-group-title">Navigation</div>
            <ul class="nav-links">
              <li>
                <a href="#/" class="nav-link" data-route="home">
                  <span class="nav-link-icon">🏠</span>
                  <span>Accueil</span>
                </a>
              </li>
              <li>
                <a href="#/formations" class="nav-link" data-route="formations">
                  <span class="nav-link-icon">📚</span>
                  <span>Formations</span>
                </a>
              </li>
              <li>
                <a href="#/progression" class="nav-link" data-route="progression">
                  <span class="nav-link-icon">📊</span>
                  <span>Progression</span>
                </a>
              </li>
              <li>
                <a href="#/formateur" class="nav-link" data-route="formateur">
                  <span class="nav-link-icon">👨‍🏫</span>
                  <span>Espace Formateur</span>
                </a>
              </li>
              <li>
                <a href="#/profil" class="nav-link" data-route="profil">
                  <span class="nav-link-icon">👤</span>
                  <span>Profil</span>
                </a>
              </li>
            </ul>
          </div>

          <div>
            <div class="nav-group-title">Les Cinq Modules Officiels</div>
            <ul class="nav-links">
              ${ACADEMY_MODULES.map(mod => `
                <li>
                  <a href="#/formations/${mod.id}" class="nav-link" data-route="module-${mod.id}">
                    <span class="nav-link-icon">${mod.id}</span>
                    <span>${mod.title}</span>
                    <span class="module-nav-badge">${mod.formations.length}</span>
                  </a>
                </li>
              `).join('')}
            </ul>
          </div>
        </nav>

        <div class="sidebar-footer">
          <div style="font-weight:600; color:var(--text-secondary); margin-bottom:0.2rem;">Édition V1.1 — Suisse</div>
          <div>« Apprendre les règles. Comprendre les risques. Maîtriser la pratique. »</div>
        </div>
      </aside>

      <!-- Corps Principal (Main Wrapper) -->
      <div class="main-wrapper">
        <!-- En-tête supérieur -->
        <header class="app-header" role="banner">
          <div class="header-left">
            <button class="mobile-menu-toggle" id="btnToggleSidebar" aria-label="Ouvrir le menu de navigation">
              ☰
            </button>
            <div class="header-brand-mobile" aria-label="EBOOK">
              <img src="./public/icons/icon-192.png" alt="Logo ELECBOOK" class="header-brand-mobile-logo" width="28" height="28"/>
              <span class="header-brand-mobile-name font-brand" aria-label="EBOOK">
                <span class="brand-lead">&#xF025;</span><span class="brand-tail">b&#xF03A;k</span>
              </span>
            </div>
            <div class="header-tagline">
              Plateforme e-learning des règles techniques électriques en Suisse
            </div>
          </div>

          <div class="header-right">
            <!-- Indicateur d'état réseau -->
            <div class="network-pill" id="networkPill">
              <span class="network-dot"></span>
              <span id="networkLabel">En ligne</span>
            </div>

            <!-- Bouton installation PWA -->
            <button class="btn-install-pwa" id="btnInstallPwa" style="display:none;" aria-label="Installer l'application sur votre appareil">
              📲 <span>Installer</span>
            </button>

            <!-- Indicateur XP -->
            <div class="header-xp-badge" id="headerXpBadge" title="Points d'expérience acquis">
              ⚡ <span id="headerXpVal">${StorageService.getXp()}</span> <span>XP</span>
            </div>

            <!-- Bouton de sélection de Thème basé sur une icône (🌙 → ☀️ → 🖥️ → 🌙) -->
            <button class="theme-toggle-btn" id="themeToggleBtn" type="button" aria-label="Thème sombre" title="Thème sombre" data-tooltip="Thème sombre">
              <span class="theme-toggle-icon" id="themeToggleIcon" aria-hidden="true">🌙</span>
            </button>

            <!-- Avatar Profil -->
            <div class="user-avatar-pill" id="headerProfileBtn" role="button" tabindex="0" aria-label="Accéder à votre profil">
              <div class="user-avatar-circle">👨‍🔧</div>
              <span class="user-name-label">Tommy Flynn</span>
            </div>
          </div>
        </header>

        <!-- Conteneur de page dynamique -->
        <main class="main-content" id="pageContainer" role="main"></main>
      </div>

      <!-- Navigation Inférieure Mobile (Section 7) -->
      <nav class="bottom-nav" role="navigation" aria-label="Navigation mobile">
        <a href="#/" class="bottom-nav-item" data-route="home">
          <span class="bottom-nav-icon">🏠</span>
          <span>Accueil</span>
        </a>
        <a href="#/formations" class="bottom-nav-item" data-route="formations">
          <span class="bottom-nav-icon">📚</span>
          <span>Formations</span>
        </a>
        <a href="#/progression" class="bottom-nav-item" data-route="progression">
          <span class="bottom-nav-icon">📊</span>
          <span>Progrès</span>
        </a>
        <a href="#/profil" class="bottom-nav-item" data-route="profil">
          <span class="bottom-nav-icon">👤</span>
          <span>Profil</span>
        </a>
      </nav>
    `;

    // Gestion du réseau (En ligne / Hors ligne)
    const networkPill = container.querySelector('#networkPill');
    const networkLabel = container.querySelector('#networkLabel');

    function updateNetworkStatus() {
      if (!networkPill || !networkLabel) return;
      if (navigator.onLine) {
        networkPill.classList.remove('offline');
        networkLabel.textContent = 'En ligne';
      } else {
        networkPill.classList.add('offline');
        networkLabel.textContent = 'Mode hors-ligne';
      }
    }

    window.addEventListener('online', updateNetworkStatus);
    window.addEventListener('offline', updateNetworkStatus);
    updateNetworkStatus();

    // Gestion du bouton PWA d'installation
    const btnInstall = container.querySelector('#btnInstallPwa');
    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      deferredPrompt = e;
      if (btnInstall) btnInstall.style.display = 'inline-flex';
    });

    if (btnInstall) {
      btnInstall.addEventListener('click', async () => {
        if (!deferredPrompt) return;
        deferredPrompt.prompt();
        const { outcome } = await deferredPrompt.userChoice;
        console.log('[PWA] Choix utilisateur :', outcome);
        deferredPrompt = null;
        btnInstall.style.display = 'none';
      });
    }

    // Gestion du Thème cyclique basé sur une icône (Sombre 🌙 → Clair ☀️ → Système 🖥️ → Sombre 🌙)
    const THEME_MODES = {
      dark: {
        next: 'light',
        icon: '🌙',
        label: 'Thème sombre'
      },
      light: {
        next: 'system',
        icon: '☀️',
        label: 'Thème clair'
      },
      system: {
        next: 'dark',
        icon: '🖥️',
        label: 'Thème système'
      }
    };

    const themeBtn = container.querySelector('#themeToggleBtn');
    const themeIcon = container.querySelector('#themeToggleIcon');

    function applyTheme(theme, animate = false) {
      const validTheme = THEME_MODES[theme] ? theme : 'dark';
      const config = THEME_MODES[validTheme];

      // 1. Appliquer data-theme sur documentElement
      if (validTheme === 'system') {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        document.documentElement.setAttribute('data-theme', prefersDark ? 'dark' : 'light');
      } else {
        document.documentElement.setAttribute('data-theme', validTheme);
      }

      // 2. Mettre à jour l'icône, aria-label et tooltip du bouton
      if (themeBtn && themeIcon) {
        themeBtn.setAttribute('aria-label', config.label);
        themeBtn.setAttribute('title', config.label);
        themeBtn.setAttribute('data-tooltip', config.label);
        themeBtn.setAttribute('data-theme-mode', validTheme);

        const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (animate && !reduceMotion) {
          themeIcon.style.transform = 'scale(0.7) rotate(15deg)';
          themeIcon.style.opacity = '0.5';
          setTimeout(() => {
            themeIcon.textContent = config.icon;
            themeIcon.style.transform = 'scale(1) rotate(0deg)';
            themeIcon.style.opacity = '1';
          }, 120);
        } else {
          themeIcon.textContent = config.icon;
          themeIcon.style.transform = 'none';
          themeIcon.style.opacity = '1';
        }
      }
    }

    // Initialiser avec le thème sauvegardé (défaut: dark)
    const savedTheme = StorageService.getTheme();
    applyTheme(savedTheme, false);

    // Clic sur le bouton : cycler vers le mode suivant
    if (themeBtn) {
      themeBtn.addEventListener('click', () => {
        const current = StorageService.getTheme() || 'dark';
        const next = THEME_MODES[current] ? THEME_MODES[current].next : 'light';
        StorageService.setTheme(next);
        applyTheme(next, true);

        // Synchroniser la page profil si elle est ouverte
        const profileButtons = document.getElementById('profileThemeButtons');
        if (profileButtons) {
          profileButtons.querySelectorAll('button').forEach(b => {
            if (b.getAttribute('data-theme-val') === next) {
              b.classList.remove('inactive-theme');
            } else {
              b.classList.add('inactive-theme');
            }
          });
        }
      });
    }

    // Écouteur de changement de préférence système de l'OS (quand mode Système actif)
    if (typeof window.matchMedia === 'function') {
      const systemSchemeQuery = window.matchMedia('(prefers-color-scheme: dark)');
      if (systemSchemeQuery) {
        if (systemSchemeQuery.addEventListener) {
          systemSchemeQuery.addEventListener('change', (e) => {
            if (StorageService.getTheme() === 'system') {
              document.documentElement.setAttribute('data-theme', e.matches ? 'dark' : 'light');
            }
          });
        } else if (systemSchemeQuery.addListener) {
          systemSchemeQuery.addListener((e) => {
            if (StorageService.getTheme() === 'system') {
              document.documentElement.setAttribute('data-theme', e.matches ? 'dark' : 'light');
            }
          });
        }
      }
    }

    // Exposer globalement pour la vue profil
    window.applyAppTheme = function(theme, animate = false) {
      applyTheme(theme, animate);
    };

    // Toggle Sidebar sur mobile
    const sidebar = container.querySelector('#appSidebar');
    const btnToggleSidebar = container.querySelector('#btnToggleSidebar');
    if (btnToggleSidebar && sidebar) {
      btnToggleSidebar.addEventListener('click', () => {
        sidebar.classList.toggle('open');
      });
    }

    // Profil click
    const headerProfileBtn = container.querySelector('#headerProfileBtn');
    if (headerProfileBtn) {
      headerProfileBtn.addEventListener('click', () => {
        location.hash = '#/profil';
      });
    }

    // Mise à jour de l'indicateur XP
    window.updateHeaderXp = function() {
      const xpVal = container.querySelector('#headerXpVal');
      if (xpVal) {
        xpVal.textContent = StorageService.getXp();
      }
    };

    // Fermer la sidebar mobile lors d'un clic sur un lien
    container.querySelectorAll('.nav-link, .bottom-nav-item').forEach(link => {
      link.addEventListener('click', () => {
        if (sidebar) sidebar.classList.remove('open');
      });
    });
  }

  // Mise en surbrillance du lien actif
  function updateActiveNav(route) {
    document.querySelectorAll('.nav-link, .bottom-nav-item').forEach(el => {
      el.classList.remove('active');
    });

    if (route === '/' || route === '') {
      document.querySelectorAll('[data-route="home"]').forEach(el => el.classList.add('active'));
    } else if (route.startsWith('/formations')) {
      document.querySelectorAll('[data-route="formations"]').forEach(el => el.classList.add('active'));
    } else if (route === '/progression') {
      document.querySelectorAll('[data-route="progression"]').forEach(el => el.classList.add('active'));
    } else if (route === '/formateur') {
      document.querySelectorAll('[data-route="formateur"]').forEach(el => el.classList.add('active'));
    } else if (route === '/profil') {
      document.querySelectorAll('[data-route="profil"]').forEach(el => el.classList.add('active'));
    }
  }


  // ==================== src/pages/dashboard.js ====================
  // Swiss Electrical Academy — Page Dashboard (V1.1)
  // Accueil, progression globale, continuer la formation, et les 5 modules officiels (A, B, N, E, F)


  function renderDashboard(container) {
    const stats = ProgressionService.getGlobalProgress();
    const lastActivity = StorageService.getLastActivity() || {
      moduleId: "A",
      formationId: "pyramide-lois",
      title: "Pyramide des lois",
      code: "Pyramide des lois",
      subtitle: "1.2 Base : Hiérarchie des lois et prescriptions suisses"
    };

    container.innerHTML = `
      <!-- Hero Banner (Section 8) -->
      <section class="dashboard-hero" aria-labelledby="heroTitle">
        <h1 class="hero-greeting" id="heroTitle">Bienvenue sur <span class="brand-highlight font-brand" aria-label="ELECBOOK"><span class="brand-lead">e&#xF025;c</span><span class="brand-tail">b&#xF03A;k</span></span> 👋</h1>
        <div class="hero-tagline">« ${ACADEMY_INFO.baseline} »</div>

        <!-- Métriques de progression globale -->
        <div class="hero-metrics-grid">
          <div class="metric-card">
            <span class="metric-value" style="color:var(--electric-blue);">${stats.globalPercentageFormatted}</span>
            <span class="metric-label">Progression globale</span>
          </div>
          <div class="metric-card">
            <span class="metric-value" style="color:var(--warning);">⚡ ${stats.xp}</span>
            <span class="metric-label">Points d'expérience (XP)</span>
          </div>
          <div class="metric-card">
            <span class="metric-value">${stats.completedFormations} / ${stats.totalFormations}</span>
            <span class="metric-label">Formations validées</span>
          </div>
          <div class="metric-card">
            <span class="metric-value" style="color:var(--success);">🏆 ${stats.badgesCount} / ${stats.totalBadgesCount}</span>
            <span class="metric-label">Badges débloqués</span>
          </div>
        </div>
      </section>

      <!-- Continuer la formation (Section 8) -->
      <section class="continue-section" aria-labelledby="continueHeading">
        <div class="section-heading" id="continueHeading">
          <span>⚡</span> Continuer votre apprentissage
        </div>
        <div class="continue-card">
          <div class="continue-info">
            <span class="continue-badge">Dernière activité • Module ${lastActivity.moduleId}</span>
            <div class="continue-title">${lastActivity.code} — ${lastActivity.title}</div>
            <div class="continue-desc">${lastActivity.subtitle || 'Reprendre là où vous vous étiez arrêté.'}</div>
          </div>
          <button class="btn-continue" id="btnResumeLearning">
            <span>Reprendre la leçon</span>
            <span>→</span>
          </button>
        </div>
      </section>

      <!-- Les Cinq Modules Officiels (Section 6 & 9) -->
      <section aria-labelledby="modulesHeading">
        <div class="section-heading" id="modulesHeading">
          <span>📚</span> Les 5 modules de formation
        </div>
        <div class="modules-grid">
          ${ACADEMY_MODULES.map(mod => {
            const modStats = ProgressionService.getModuleProgress(mod.id);
            const countDisplay = modStats.isInDevelopment
              ? `En préparation (0/${modStats.catalogTotal})`
              : `${modStats.percentageFormatted} (${modStats.completedCount}/${modStats.totalAvailable})`;

            return `
              <article class="module-card" data-module-id="${mod.id}">
                <div>
                  <div class="module-card-top">
                    <div class="module-code-badge badge-${mod.id}">
                      ${mod.code}
                    </div>
                    <div style="display:flex; align-items:center; gap:0.4rem; flex-wrap:wrap;">
                      ${modStats.isModuleCompleted ? '<span style="font-size:0.75rem; background:rgba(16,185,129,0.15); color:#10b981; border:1px solid rgba(16,185,129,0.4); padding:0.15rem 0.5rem; border-radius:12px; font-weight:700;">✓ Terminé</span>' : ''}
                      <span class="module-count-tag">${mod.countLabel}</span>
                    </div>
                  </div>
                  <h2 class="module-title">${mod.title}</h2>
                  <p class="module-desc">${mod.description}</p>
                </div>

                <div>
                  <div class="module-progress-wrapper">
                    <div class="progress-labels">
                      <span>Progression</span>
                      <span>${countDisplay}</span>
                    </div>
                    <div class="progress-bar-bg">
                      <div class="progress-bar-fill" style="width: ${modStats.percentage}%;"></div>
                    </div>
                  </div>

                  <button class="btn-module-open" data-module-id="${mod.id}">
                    <span>Explorer le module</span>
                    <span>→</span>
                  </button>
                </div>
              </article>
            `;
          }).join('')}
        </div>
      </section>
    `;

    // Gestion du bouton Reprendre
    const btnResumeLearning = container.querySelector('#btnResumeLearning');
    if (btnResumeLearning) {
      btnResumeLearning.addEventListener('click', () => {
        location.hash = `#/formations/${lastActivity.moduleId}/${lastActivity.formationId}`;
      });
    }

    // Gestion des clics sur cartes modules
    container.querySelectorAll('.btn-module-open, .module-card').forEach(el => {
      el.addEventListener('click', (e) => {
        // Éviter double déclenchement si clic sur bouton interne
        const moduleId = el.getAttribute('data-module-id') || el.closest('.module-card')?.getAttribute('data-module-id');
        if (moduleId) {
          location.hash = `#/formations/${moduleId}`;
        }
      });
    });
  }


  // ==================== src/pages/module-view.js ====================
  // Swiss Electrical Academy — Vue d'un Module et Vue Parcours RS 734.2 (V2.0)
  // Détail du module, progression spécifique et liste ordonnée des leçons/chapitres


  function renderModuleView(container, moduleId) {
    const mod = ACADEMY_MODULES.find(m => m.id === moduleId);

    if (!mod) {
      container.innerHTML = `
        <div style="text-align:center; padding:3rem 1rem;">
          <h2>Module introuvable</h2>
          <p style="color:var(--text-muted); margin-top:0.5rem;">Le module demandé n'existe pas dans le référentiel officiel.</p>
          <button class="btn-continue" style="margin-top:1.5rem;" onclick="location.hash='#/'">← Retour à l'accueil</button>
        </div>
      `;
      return;
    }

    const modProgress = ProgressionService.getModuleProgress(moduleId);
    const pyramideProgress = ProgressionService.getParcoursProgress('pyramide-lois');
    const lieProgress = ProgressionService.getParcoursProgress('rs-734-0');
    const ocfoProgress = ProgressionService.getParcoursProgress('rs-734-2');
    const oibtProgress = ProgressionService.getParcoursProgress('rs-734-27');
    const orniProgress = ProgressionService.getParcoursProgress('rs-814-710');
    const esti221Progress = ProgressionService.getParcoursProgress('esti-221');
    const completed = StorageService.getCompletedLessons();

    container.innerHTML = `
      <nav class="breadcrumb-nav" aria-label="Fil d'ariane">
        <a href="#/" class="breadcrumb-link">Accueil</a>
        <span>/</span>
        <a href="#/formations" class="breadcrumb-link">Formations</a>
        <span>/</span>
        <span>Module ${mod.id}</span>
      </nav>

      <header class="module-view-header">
        <div style="display:flex; align-items:center; gap:1rem; margin-bottom:1rem;">
          <div class="module-code-badge badge-${mod.id}" style="width:48px; height:48px; font-size:1.4rem;">
            ${mod.code}
          </div>
          <div>
            <div style="font-size:0.75rem; font-weight:700; color:var(--electric-blue); text-transform:uppercase; letter-spacing:0.08em;">
              Module ${mod.id}
            </div>
            <h1 style="font-size:1.6rem; font-weight:800; color:var(--text-primary);">${mod.title}</h1>
          </div>
        </div>

        <p style="color:var(--text-secondary); max-width:700px; line-height:1.5; margin-bottom:1.5rem;">
          ${mod.description}
        </p>

        <div style="max-width:480px;">
          <div class="progress-labels">
            <span>Progression du module</span>
            <span>${modProgress.percentageFormatted} (${modProgress.completedCount} sur ${modProgress.totalAvailable} validés)</span>
          </div>
          <div class="progress-bar-bg" style="height:8px;">
            <div class="progress-bar-fill" style="width: ${modProgress.percentage}%;"></div>
          </div>
        </div>
      </header>

      ${moduleId === 'A' ? `
        <!-- Carte Parcours Structuré Pyramide des lois (Cadre normatif fédéral) -->
        <section class="pyramide-featured-parcours-box" aria-labelledby="pyramideFeaturedTitle">
          <div class="pyramide-featured-top">
            <div style="display:flex; align-items:center; gap:0.75rem;">
              <span class="pyramide-featured-badge">CADRE NORMATIF FÉDÉRAL</span>
              <span class="pyramide-featured-code">PYRAMIDE DES LOIS</span>
            </div>
            <span class="pyramide-featured-stats">${pyramideProgress.lessonsCompleted} / ${pyramideProgress.lessonsTotal} leçons · ${pyramideProgress.percentageFormatted}</span>
          </div>
          <h2 id="pyramideFeaturedTitle" class="pyramide-featured-title">Cadre légal et hiérarchie normative suisse (Pyramide des lois)</h2>
          <p class="pyramide-featured-desc">
            Parcours structuré en 4 leçons officielles (Histoire 1888-1902, Hiérarchie juridique & références RS, Règles techniques & Organismes, Typologie des normes [SN]/[SNR]/[SNG]) et 1 évaluation finale certifiante de 8 questions.
          </p>
          <div class="progress-bar-bg" style="height:6px; margin-bottom:1rem;">
            <div class="progress-bar-fill" style="width: ${pyramideProgress.percentage}%; background:#ec4899;"></div>
          </div>
          <div style="display:flex; gap:0.75rem; flex-wrap:wrap;">
            <button class="btn-continue" id="btnOpenPyramideHub" onclick="location.hash='#/formations/A/pyramide-lois'" style="display:inline-flex; align-items:center; gap:0.5rem; background:#ec4899; color:#ffffff; font-weight:700; cursor:pointer;">
              <span>Explorer les ${pyramideProgress.lessonsTotal} leçons</span>
              <span>→</span>
            </button>
          </div>
        </section>

        <!-- Carte Parcours Structuré RS 734.0 — LIE (Loi fédérale) -->
        <section class="lie-featured-parcours-box" aria-labelledby="lieFeaturedTitle">
          <div class="lie-featured-top">
            <div style="display:flex; align-items:center; gap:0.75rem;">
              <span class="lie-featured-badge">LOI FÉDÉRALE</span>
              <span class="lie-featured-code">RS 734.0 — LIE</span>
            </div>
            <span class="lie-featured-stats">${lieProgress.lessonsCompleted} / ${lieProgress.lessonsTotal} leçons · ${lieProgress.percentageFormatted}</span>
          </div>
          <h2 id="lieFeaturedTitle" class="lie-featured-title">Loi fédérale concernant les installations électriques à faible et à fort courant (LIE)</h2>
          <p class="lie-featured-desc">
            Parcours structuré en 11 leçons officielles fidèles aux 11 parties du texte légal (du 24 juin 1902, état au 1er avril 2026, Art. 1 à 64) et 1 évaluation finale certifiante de 16 questions.
          </p>
          <div class="progress-bar-bg" style="height:6px; margin-bottom:1rem;">
            <div class="progress-bar-fill" style="width: ${lieProgress.percentage}%; background:#f59e0b;"></div>
          </div>
          <div style="display:flex; gap:0.75rem; flex-wrap:wrap;">
            <button class="btn-continue" id="btnOpenLieHub" onclick="location.hash='#/formations/A/rs-734-0'" style="display:inline-flex; align-items:center; gap:0.5rem; background:#f59e0b; color:#000; font-weight:700; cursor:pointer;">
              <span>Explorer les ${lieProgress.lessonsTotal} leçons</span>
              <span>→</span>
            </button>
          </div>
        </section>

        <!-- Carte Parcours Structuré RS 734.2 — OCFo (Section 7) -->
        <section class="ocfo-featured-parcours-box" aria-labelledby="ocfoFeaturedTitle">
          <div class="ocfo-featured-top">
            <div style="display:flex; align-items:center; gap:0.75rem;">
              <span class="ocfo-featured-badge">ORDONNANCE</span>
              <span class="ocfo-featured-code">RS 734.2 — OCFo</span>
            </div>
            <span class="ocfo-featured-stats">${ocfoProgress.lessonsCompleted} / ${ocfoProgress.lessonsTotal} leçons · ${ocfoProgress.percentageFormatted}</span>
          </div>
          <h2 id="ocfoFeaturedTitle" class="ocfo-featured-title">Ordonnance sur les installations électriques à courant fort (OCFo)</h2>
          <p class="ocfo-featured-desc">
            Parcours complet restructuré fidèlement en 8 leçons (les 7 chapitres légaux et la Leçon 8 regroupant les Annexes 1 à 4 · État au 1er juin 2019).
            Des définitions fondamentales aux 5 règles vitales d'intervention, avec la visualisation interactive de l'Annexe 4.
          </p>
          <div class="progress-bar-bg" style="height:6px; margin-bottom:1rem;">
            <div class="progress-bar-fill" style="width: ${ocfoProgress.percentage}%; background:#0284c7;"></div>
          </div>
          <div style="display:flex; gap:0.75rem; flex-wrap:wrap;">
            <button class="btn-continue" id="btnOpenOcfoHub" onclick="location.hash='#/formations/A/rs-734-2'" style="display:inline-flex; align-items:center; gap:0.5rem; cursor:pointer;">
              <span>Explorer les ${ocfoProgress.lessonsTotal} leçons</span>
              <span>→</span>
            </button>
          </div>
        </section>

        <!-- Carte Parcours Structuré RS 734.27 — OIBT (Ordonnance basse tension) -->
        <section class="oibt-featured-parcours-box" aria-labelledby="oibtFeaturedTitle">
          <div class="oibt-featured-top">
            <div style="display:flex; align-items:center; gap:0.75rem;">
              <span class="oibt-featured-badge">ORDONNANCE</span>
              <span class="oibt-featured-code">RS 734.27 — OIBT</span>
            </div>
            <span class="oibt-featured-stats">${oibtProgress.lessonsCompleted} / ${oibtProgress.lessonsTotal} leçons · ${oibtProgress.percentageFormatted}</span>
          </div>
          <h2 id="oibtFeaturedTitle" class="oibt-featured-title">Ordonnance sur les installations électriques à basse tension (OIBT)</h2>
          <p class="oibt-featured-desc">
            Parcours complet restructuré en 7 leçons officielles (les 6 chapitres réglementaires et la Leçon 7 dédiée à l'Annexe des contrôles périodiques · Art. 1 à 45 et Annexe) et 1 évaluation finale certifiante de 16 questions.
          </p>
          <div class="progress-bar-bg" style="height:6px; margin-bottom:1rem;">
            <div class="progress-bar-fill" style="width: ${oibtProgress.percentage}%; background:#10b981;"></div>
          </div>
          <div style="display:flex; gap:0.75rem; flex-wrap:wrap;">
            <button class="btn-continue" id="btnOpenOibtHub" onclick="location.hash='#/formations/A/rs-734-27'" style="display:inline-flex; align-items:center; gap:0.5rem; background:#10b981; color:#042f2e; font-weight:700; cursor:pointer;">
              <span>Explorer les ${oibtProgress.lessonsTotal} leçons</span>
              <span>→</span>
            </button>
          </div>
        </section>

        <!-- Carte Parcours Structuré RS 814.710 — ORNI (Ordonnance rayonnement non ionisant) -->
        <section class="orni-featured-parcours-box" aria-labelledby="orniFeaturedTitle">
          <div class="orni-featured-top">
            <div style="display:flex; align-items:center; gap:0.75rem;">
              <span class="orni-featured-badge">ORDONNANCE</span>
              <span class="orni-featured-code">RS 814.710 — ORNI</span>
            </div>
            <span class="orni-featured-stats">${orniProgress.lessonsCompleted} / ${orniProgress.lessonsTotal} leçons · ${orniProgress.percentageFormatted}</span>
          </div>
          <h2 id="orniFeaturedTitle" class="orni-featured-title">Ordonnance sur la protection contre le rayonnement non ionisant (ORNI)</h2>
          <p class="orni-featured-desc">
            Parcours officiel structuré en 7 leçons conformes au texte légal (champs de 0 Hz à 300 GHz, LAUS, VLI préventive à 1 µT, courants déterminants, NIBT, téléphonie mobile) et 1 évaluation finale certifiante de 16 questions.
          </p>
          <div class="progress-bar-bg" style="height:6px; margin-bottom:1rem;">
            <div class="progress-bar-fill" style="width: ${orniProgress.percentage}%; background:#8b5cf6;"></div>
          </div>
          <div style="display:flex; gap:0.75rem; flex-wrap:wrap;">
            <button class="btn-continue" id="btnOpenOrniHub" onclick="location.hash='#/formations/A/rs-814-710'" style="display:inline-flex; align-items:center; gap:0.5rem; background:#8b5cf6; color:#ffffff; font-weight:700; cursor:pointer;">
              <span>Explorer les ${orniProgress.lessonsTotal} leçons</span>
              <span>→</span>
            </button>
          </div>
        </section>
      ` : ''}

      ${moduleId === 'E' ? `
        <!-- Carte Parcours Structuré Directive ESTI n° 221 (Version 0621) -->
        <section class="esti-featured-parcours-box" aria-labelledby="estiFeaturedTitle">
          <div class="esti-featured-top">
            <div style="display:flex; align-items:center; gap:0.75rem;">
              <span class="esti-featured-badge">DIRECTIVE ESTI · VERSION 0621</span>
              <span class="esti-featured-code">ESTI 221</span>
            </div>
            <span class="esti-featured-stats">${esti221Progress.lessonsCompleted} / ${esti221Progress.lessonsTotal} leçons · ${esti221Progress.percentageFormatted}</span>
          </div>
          <h2 id="estiFeaturedTitle" class="esti-featured-title">Directive ESTI n° 221 — Obligations d'annoncer</h2>
          <p class="esti-featured-desc">
            Parcours officiel structuré en 4 leçons conformes à la directive ESTI 221 (Cadre légal OIBT, Les 13 cas d'annonce obligatoire, Première vérification & dispense de RaSi, Droit transitoire & notification) et 1 évaluation finale certifiante de 10 questions.
          </p>
          <div class="progress-bar-bg" style="height:6px; margin-bottom:1rem;">
            <div class="progress-bar-fill" style="width: ${esti221Progress.percentage}%; background:#10b981;"></div>
          </div>
          <div style="display:flex; gap:0.75rem; flex-wrap:wrap;">
            <button class="btn-continue" id="btnOpenEsti221Hub" onclick="location.hash='#/formations/E/esti-221'" style="display:inline-flex; align-items:center; gap:0.5rem; background:#10b981; color:#042f2e; font-weight:700; cursor:pointer;">
              <span>Explorer les ${esti221Progress.lessonsTotal} leçons</span>
              <span>→</span>
            </button>
          </div>
        </section>
      ` : ''}

      <section aria-label="Liste des formations du module">
        <div class="section-heading">
          <span>📑</span> Contenu de la formation (${mod.countLabel})
        </div>
        <div class="formations-list">
          ${mod.formations.map(formation => {
            const isDone = completed.includes(formation.id);
            const isAvailable = formation.status === "Disponible";
            const isPyramide = formation.id.startsWith('pyr-');
            const isLie = formation.id.startsWith('rs-734-0-');
            const isOcfo = formation.id.startsWith('rs-734-2-') && !formation.id.startsWith('rs-734-27-');
            const isOibt = formation.id.startsWith('rs-734-27-');
            const isOrni = formation.id.startsWith('rs-814-710-');
            const isEsti = formation.id.startsWith('esti-221-');

            return `
              <article class="formation-item-card ${isPyramide ? 'pyramide-card-accent' : (isLie ? 'lie-card-accent' : (isOcfo ? 'ocfo-card-accent' : (isOibt ? 'oibt-card-accent' : (isOrni ? 'orni-card-accent' : (isEsti ? 'esti-card-accent' : '')))))}" data-formation-id="${formation.id}">
                <div class="formation-code-col">
                  <span class="formation-code-tag">${formation.code}</span>
                </div>

                <div class="formation-title-col">
                  <div class="formation-item-title">
                    ${formation.title} ${isDone ? '✓' : ''}
                  </div>
                  <div class="formation-item-subtitle">${formation.subtitle || ''}</div>
                </div>

                <div style="display:flex; align-items:center; gap:0.85rem;">
                  <span style="font-size:0.75rem; color:var(--text-muted);">${formation.duration}</span>
                  <span class="status-badge ${isAvailable ? (isDone ? 'status-available' : 'status-available') : 'status-dev'}">
                    ${isDone ? '✓ Validé' : formation.status}
                  </span>
                  <span style="color:var(--electric-blue); font-size:1.1rem;">→</span>
                </div>
              </article>
            `;
          }).join('')}
        </div>
      </section>
    `;

    // Clic sur le bouton du parcours Pyramide des lois
    const btnOpenPyramideHub = container.querySelector('#btnOpenPyramideHub');
    if (btnOpenPyramideHub) {
      btnOpenPyramideHub.addEventListener('click', () => {
        location.hash = '#/formations/A/pyramide-lois';
      });
    }

    // Clic sur le bouton du parcours LIE
    const btnOpenLieHub = container.querySelector('#btnOpenLieHub');
    if (btnOpenLieHub) {
      btnOpenLieHub.addEventListener('click', () => {
        location.hash = '#/formations/A/rs-734-0';
      });
    }

    // Clic sur le bouton du parcours OCFo
    const btnOpenOcfoHub = container.querySelector('#btnOpenOcfoHub');
    if (btnOpenOcfoHub) {
      btnOpenOcfoHub.addEventListener('click', () => {
        location.hash = '#/formations/A/rs-734-2';
      });
    }

    // Clic sur le bouton du parcours OIBT
    const btnOpenOibtHub = container.querySelector('#btnOpenOibtHub');
    if (btnOpenOibtHub) {
      btnOpenOibtHub.addEventListener('click', () => {
        location.hash = '#/formations/A/rs-734-27';
      });
    }

    // Clic sur le bouton du parcours ORNI
    const btnOpenOrniHub = container.querySelector('#btnOpenOrniHub');
    if (btnOpenOrniHub) {
      btnOpenOrniHub.addEventListener('click', () => {
        location.hash = '#/formations/A/rs-814-710';
      });
    }

    // Événements de clic sur chaque formation
    container.querySelectorAll('.formation-item-card').forEach(card => {
      card.addEventListener('click', () => {
        const formationId = card.getAttribute('data-formation-id');
        if (formationId.startsWith('pyr-0')) {
          location.hash = `#/formations/A/pyramide-lois/${formationId}`;
        } else if (formationId === 'pyr-evaluation-finale') {
          location.hash = `#/formations/A/pyramide-lois/evaluation-finale`;
        } else if (formationId.startsWith('rs-734-0-lecon-')) {
          const leconNum = formationId.replace('rs-734-0-lecon-', '');
          location.hash = `#/formations/A/rs-734-0/lecon-${leconNum}`;
        } else if (formationId === 'rs-734-0-evaluation-finale') {
          location.hash = `#/formations/A/rs-734-0/evaluation-finale`;
        } else if (formationId.startsWith('rs-734-27-lecon-')) {
          const leconNum = formationId.replace('rs-734-27-lecon-', '');
          location.hash = `#/formations/A/rs-734-27/lecon-${leconNum}`;
        } else if (formationId === 'rs-734-27-evaluation-finale') {
          location.hash = `#/formations/A/rs-734-27/evaluation-finale`;
        } else if (formationId.startsWith('rs-814-710-lecon-')) {
          const leconNum = formationId.replace('rs-814-710-lecon-', '');
          location.hash = `#/formations/A/rs-814-710/lecon-${leconNum}`;
        } else if (formationId === 'rs-814-710-evaluation-finale') {
          location.hash = `#/formations/A/rs-814-710/evaluation-finale`;
        } else if (formationId.startsWith('rs-734-2-chapitre-')) {
          const chapNum = formationId.replace('rs-734-2-chapitre-', '');
          location.hash = `#/formations/A/rs-734-2/chapitre-${chapNum}`;
        } else if (formationId.startsWith('rs-734-2-evaluation-finale')) {
          location.hash = `#/formations/A/rs-734-2/evaluation-finale`;
        } else if (formationId.startsWith('esti-221-lecon-')) {
          const leconNum = formationId.replace('esti-221-lecon-', '');
          location.hash = `#/formations/E/esti-221/lecon-${leconNum}`;
        } else if (formationId === 'esti-221-evaluation-finale') {
          location.hash = `#/formations/E/esti-221/evaluation-finale`;
        } else {
          location.hash = `#/formations/${mod.id}/${formationId}`;
        }
      });
    });
  }

  // ----------------------------------------------------------------------------
  // Vue Hub Dédiée : RS 734.2 — OCFo (7 Chapitres officiels)
  // Conforme au design de la Section 7 du prompt utilisateur
  // ----------------------------------------------------------------------------
  function renderOcfoParcoursView(container) {
    const parcoursProgress = ProgressionService.getParcoursProgress('rs-734-2');
    const chapters = RS_734_2_INFO.chapters;
    const isFinalDone = parcoursProgress.isFinalDone;
    const completedCount = parcoursProgress.lessonsCompleted;
    const totalLessons = parcoursProgress.lessonsTotal;

    // Trouver le premier chapitre non validé pour le bouton "Continuer"
    let nextChapterSlug = 'chapitre-1';
    const completed = StorageService.getCompletedLessons();
    for (const c of chapters) {
      if (!completed.includes(c.id)) {
        nextChapterSlug = c.slug;
        break;
      }
    }
    if (completedCount === totalLessons && !isFinalDone) {
      nextChapterSlug = 'evaluation-finale';
    }

    container.innerHTML = `
      <nav class="breadcrumb-nav" aria-label="Fil d'ariane">
        <a href="#/" class="breadcrumb-link">Accueil</a>
        <span>/</span>
        <a href="#/formations" class="breadcrumb-link">Formations</a>
        <span>/</span>
        <a href="#/formations/A" class="breadcrumb-link">Module A — Dispositions légales</a>
        <span>/</span>
        <span>RS 734.2 — OCFo</span>
      </nav>

      <!-- Header Hero Card OCFo (Section 7) -->
      <header class="ocfo-hub-hero" role="region" aria-label="En-tête du parcours RS 734.2">
        <div class="ocfo-hub-badge-row">
          <span class="ocfo-hub-tag">DROIT FÉDÉRAL SUISSE · COURANT FORT</span>
          <span class="ocfo-hub-ref">RS 734.2</span>
        </div>

        <div class="ocfo-hub-title-row">
          <div>
            <div class="ocfo-hub-short">OCFo (du 30 mars 1994 · État au 1er juin 2019)</div>
            <h1 class="ocfo-hub-title">Ordonnance sur les installations électriques à courant fort</h1>
          </div>
        </div>

        <p class="ocfo-hub-desc">
          ${RS_734_2_INFO.description}
        </p>

        <div class="ocfo-hub-progress-card">
          <div class="progress-labels">
            <span style="font-weight:700; color:var(--text-primary);">Progression du parcours OCFo</span>
            <span style="font-weight:800; color:var(--electric-blue); font-size:1rem;">
              ${parcoursProgress.percentageFormatted} · ${completedCount} / ${totalLessons} leçons
            </span>
          </div>
          <div class="progress-bar-bg" style="height:10px; margin-top:0.5rem;">
            <div class="progress-bar-fill" style="width: ${parcoursProgress.percentage}%;"></div>
          </div>

          <div style="margin-top:1rem; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:0.75rem;">
            <button class="btn-continue" id="btnResumeOcfo" style="display:inline-flex; align-items:center; gap:0.5rem;">
              <span>${completedCount === 0 ? 'Commencer la Leçon 1' : (completedCount === 8 ? 'Accéder à l\'évaluation finale' : 'Reprendre le parcours')}</span>
              <span>→</span>
            </button>
            <button class="btn-continue" onclick="location.hash='#/formations/A'" style="background:var(--bg-surface-elevated); color:var(--text-primary); border:1px solid var(--border-medium);">
              ← Retour au Module A
            </button>
          </div>
        </div>
      </header>

      <!-- Liste des 8 Leçons officielles (7 Chapitres + Leçon 8 Annexes) -->
      <section class="ocfo-chapters-section" aria-label="Liste ordonnée des 8 leçons OCFo">
        <div class="section-heading">
          <span>📚</span> Les 8 leçons du parcours (7 chapitres légaux & Annexes 1 à 4)
        </div>

        <div class="ocfo-chapters-list">
          ${chapters.map((chap, idx) => {
            const isDone = completed.includes(chap.id);
            const isCurrent = !isDone && (idx === 0 || completed.includes(chapters[idx - 1].id));

            return `
              <article class="ocfo-chapter-card ${isCurrent ? 'chapter-in-progress' : ''} ${isDone ? 'chapter-completed' : ''}" data-chapter-slug="${chap.slug}">
                <div class="ocfo-card-left">
                  <span class="ocfo-chap-number">${chap.number}</span>
                  <span class="ocfo-status-box ${isDone ? 'box-done' : (isCurrent ? 'box-current' : 'box-pending')}">
                    ${isDone ? '[✓]' : (isCurrent ? '[●]' : '[  ]')}
                  </span>
                </div>

                <div class="ocfo-card-center">
                  <div class="ocfo-chap-title-row">
                    <h2 class="ocfo-chap-title">${chap.title}</h2>
                    ${isDone ? '<span class="ocfo-badge-done">✓ Validé</span>' : (isCurrent ? '<span class="ocfo-badge-current">En cours</span>' : '')}
                  </div>
                  <div class="ocfo-chap-articles">
                    <span class="legal-tag">${chap.articles}</span>
                    <span style="color:var(--text-muted); font-size:0.8rem;">•</span>
                    <span style="color:var(--text-muted); font-size:0.8rem;">⏱️ ${chap.duration}</span>
                  </div>
                  <p class="ocfo-chap-summary">${chap.summary}</p>
                </div>

                <div class="ocfo-card-right">
                  <button class="ocfo-btn-open" aria-label="Ouvrir le ${chap.title}">
                    <span>${isDone ? 'Revoir' : (isCurrent ? 'Continuer' : 'Commencer')}</span>
                    <span>→</span>
                  </button>
                </div>
              </article>
            `;
          }).join('')}

          <!-- Évaluation Finale (Section 11) -->
          <article class="ocfo-chapter-card ocfo-final-card ${isFinalDone ? 'chapter-completed' : ''}" data-chapter-slug="evaluation-finale">
            <div class="ocfo-card-left">
              <span class="ocfo-chap-number" style="background:rgba(239,68,68,0.15); color:var(--accent-red);">🏁</span>
              <span class="ocfo-status-box ${isFinalDone ? 'box-done' : 'box-pending'}">
                ${isFinalDone ? '[✓]' : '[  ]'}
              </span>
            </div>

            <div class="ocfo-card-center">
              <div class="ocfo-chap-title-row">
                <h2 class="ocfo-chap-title" style="color:var(--text-primary);">${RS_734_2_INFO.finalEvaluation.title}</h2>
                ${isFinalDone ? '<span class="ocfo-badge-done">✓ Certifié</span>' : '<span class="ocfo-badge-eval">Examen final</span>'}
              </div>
              <div class="ocfo-chap-articles">
                <span class="legal-tag">Art. 1 à 86</span>
                <span style="color:var(--text-muted); font-size:0.8rem;">•</span>
                <span style="color:var(--text-muted); font-size:0.8rem;">⏱️ ${RS_734_2_INFO.finalEvaluation.duration}</span>
                <span style="color:var(--text-muted); font-size:0.8rem;">•</span>
                <span style="color:var(--warning); font-size:0.8rem; font-weight:700;">⚡ 50 XP</span>
              </div>
              <p class="ocfo-chap-summary">${RS_734_2_INFO.finalEvaluation.summary}</p>
            </div>

            <div class="ocfo-card-right">
              <button class="ocfo-btn-open" style="background:var(--accent-red); color:#fff; border-color:var(--accent-red);" aria-label="Ouvrir l'évaluation finale">
                <span>${isFinalDone ? 'Revoir' : 'Passer l\'examen'}</span>
                <span>→</span>
              </button>
            </div>
          </article>
        </div>
      </section>
    `;

    // Clic sur bouton Continuer
    const btnResume = container.querySelector('#btnResumeOcfo');
    if (btnResume) {
      btnResume.addEventListener('click', () => {
        location.hash = `#/formations/A/rs-734-2/${nextChapterSlug}`;
      });
    }

    // Clics sur les cartes de chapitres
    container.querySelectorAll('.ocfo-chapter-card').forEach(card => {
      card.addEventListener('click', () => {
        const slug = card.getAttribute('data-chapter-slug');
        location.hash = `#/formations/A/rs-734-2/${slug}`;
      });
    });
  }

  // ----------------------------------------------------------------------------
  // Vue Hub Dédiée : Pyramide des lois (4 Leçons officielles + Évaluation finale)
  // Source de vérité : Infographie synthétique & Recueil systématique RS
  // ----------------------------------------------------------------------------
  function renderPyramideParcoursView(container) {
    const parcoursProgress = ProgressionService.getParcoursProgress('pyramide-lois');
    const lessons = PYRAMIDE_LOIS_INFO ? PYRAMIDE_LOIS_INFO.lessons : [];
    const isFinalDone = parcoursProgress.isFinalDone;
    const completedCount = parcoursProgress.lessonsCompleted;
    const totalLessons = parcoursProgress.lessonsTotal;

    // Trouver la première leçon non validée
    let nextLessonSlug = 'pyr-01';
    const completed = StorageService.getCompletedLessons();
    for (const l of lessons) {
      if (!completed.includes(l.id)) {
        nextLessonSlug = l.id;
        break;
      }
    }
    if (completedCount === totalLessons && !isFinalDone) {
      nextLessonSlug = 'evaluation-finale';
    }

    container.innerHTML = `
      <nav class="breadcrumb-nav" aria-label="Fil d'ariane">
        <a href="#/" class="breadcrumb-link">Accueil</a>
        <span>/</span>
        <a href="#/formations" class="breadcrumb-link">Formations</a>
        <span>/</span>
        <a href="#/formations/A" class="breadcrumb-link">Module A — Dispositions légales</a>
        <span>/</span>
        <span>Pyramide des lois</span>
      </nav>

      <!-- Header Hero Card Pyramide -->
      <header class="ocfo-hub-hero" style="border-left: 4px solid #ec4899;" role="region" aria-label="En-tête du parcours Pyramide des lois">
        <div class="ocfo-hub-badge-row">
          <span class="ocfo-hub-tag">CADRE NORMATIF FÉDÉRAL · HIÉRARCHIE DES NORMES</span>
          <span class="ocfo-hub-ref" style="border-color:rgba(236,72,153,0.4); color:#f472b6; background:rgba(236,72,153,0.12);">PYRAMIDE DES LOIS</span>
        </div>

        <div class="ocfo-hub-title-row">
          <div>
            <div class="ocfo-hub-short" style="color:#ec4899;">HIÉRARCHIE DU DROIT ÉLECTRIQUE SUISSE</div>
            <h1 class="ocfo-hub-title">Cadre légal et hiérarchie normative suisse (Pyramide des lois)</h1>
          </div>
        </div>

        <p class="ocfo-hub-desc">
          ${PYRAMIDE_LOIS_INFO.description}
        </p>

        <div class="ocfo-hub-progress-card">
          <div class="progress-labels">
            <span style="font-weight:700; color:var(--text-primary);">Progression du parcours Pyramide</span>
            <span style="font-weight:800; color:#ec4899; font-size:1rem;">
              ${parcoursProgress.percentageFormatted} · ${completedCount} / ${totalLessons} leçons
            </span>
          </div>
          <div class="progress-bar-bg" style="height:10px; margin-top:0.5rem;">
            <div class="progress-bar-fill" style="width: ${parcoursProgress.percentage}%; background:#ec4899;"></div>
          </div>

          <div style="margin-top:1rem; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:0.75rem;">
            <button class="btn-continue" id="btnResumePyramide" style="display:inline-flex; align-items:center; gap:0.5rem; background:#ec4899; color:#ffffff; font-weight:700; cursor:pointer;">
              <span>${completedCount === 0 ? 'Commencer la Leçon 1' : (completedCount === totalLessons && !isFinalDone ? 'Accéder à l\'évaluation finale' : (isFinalDone ? 'Revoir le parcours' : 'Reprendre le parcours'))}</span>
              <span>→</span>
            </button>
            <button class="btn-continue" onclick="location.hash='#/formations/A'" style="background:var(--bg-surface-elevated); color:var(--text-primary); border:1px solid var(--border-medium); cursor:pointer;">
              ← Retour au Module A
            </button>
          </div>
        </div>
      </header>

      <!-- Liste des 4 Leçons officielles -->
      <section class="ocfo-chapters-section" aria-label="Liste ordonnée des 4 leçons de la Pyramide des lois">
        <div class="section-heading">
          <span>📚</span> Les 4 leçons du parcours (fidèles aux 4 volets de la pyramide)
        </div>

        <div class="ocfo-chapters-list">
          ${lessons.map((les, idx) => {
            const isDone = completed.includes(les.id);
            const isCurrent = !isDone && (idx === 0 || completed.includes(lessons[idx - 1].id));

            return `
              <article class="ocfo-chapter-card ${isCurrent ? 'chapter-in-progress' : ''} ${isDone ? 'chapter-completed' : ''}" data-lesson-id="${les.id}" style="${isCurrent ? 'border-color:#ec4899;' : ''}">
                <div class="ocfo-card-left">
                  <span class="ocfo-chap-number" style="border-color:rgba(236,72,153,0.3); color:#ec4899;">${les.number}</span>
                  <span class="ocfo-status-box ${isDone ? 'box-done' : (isCurrent ? 'box-current' : 'box-pending')}">
                    ${isDone ? '[✓]' : (isCurrent ? '[●]' : '[  ]')}
                  </span>
                </div>

                <div class="ocfo-card-center">
                  <div class="ocfo-chap-title-row">
                    <h2 class="ocfo-chap-title">${les.title}</h2>
                    ${isDone ? '<span class="ocfo-badge-done">✓ Validé</span>' : (isCurrent ? '<span class="ocfo-badge-current" style="background:rgba(236,72,153,0.15); color:#f472b6; border-color:rgba(236,72,153,0.3);">En cours</span>' : '')}
                  </div>
                  <div class="ocfo-chap-articles">
                    <span class="legal-tag" style="border-color:rgba(236,72,153,0.3); color:#ec4899; background:rgba(236,72,153,0.08);">${les.code}</span>
                    <span style="color:var(--text-muted); font-size:0.8rem;">•</span>
                    <span style="color:var(--text-muted); font-size:0.8rem;">⏱️ ${les.duration}</span>
                    <span style="color:var(--text-muted); font-size:0.8rem;">•</span>
                    <span style="color:#ec4899; font-size:0.8rem; font-weight:700;">⚡ ${les.xpReward} XP</span>
                  </div>
                  <p class="ocfo-chap-summary">${les.summary}</p>
                </div>

                <div class="ocfo-card-right">
                  <button class="ocfo-btn-open" aria-label="Ouvrir la leçon ${les.title}">
                    <span>${isDone ? 'Revoir' : (isCurrent ? 'Continuer' : 'Commencer')}</span>
                    <span>→</span>
                  </button>
                </div>
              </article>
            `;
          }).join('')}

          <!-- Évaluation Finale (8 questions) -->
          <article class="ocfo-chapter-card ocfo-final-card ${isFinalDone ? 'chapter-completed' : ''}" data-lesson-id="pyr-evaluation-finale">
            <div class="ocfo-card-left">
              <span class="ocfo-chap-number" style="background:rgba(239,68,68,0.15); color:var(--accent-red);">🏁</span>
              <span class="ocfo-status-box ${isFinalDone ? 'box-done' : 'box-pending'}">
                ${isFinalDone ? '[✓]' : '[  ]'}
              </span>
            </div>

            <div class="ocfo-card-center">
              <div class="ocfo-chap-title-row">
                <h2 class="ocfo-chap-title" style="color:var(--text-primary);">${PYRAMIDE_LOIS_INFO.finalEvaluation.title}</h2>
                ${isFinalDone ? '<span class="ocfo-badge-done">✓ Certifié</span>' : '<span class="ocfo-badge-eval">Examen final</span>'}
              </div>
              <div class="ocfo-chap-articles">
                <span class="legal-tag">PYR-FINAL</span>
                <span style="color:var(--text-muted); font-size:0.8rem;">•</span>
                <span style="color:var(--text-muted); font-size:0.8rem;">⏱️ ${PYRAMIDE_LOIS_INFO.finalEvaluation.duration}</span>
                <span style="color:var(--text-muted); font-size:0.8rem;">•</span>
                <span style="color:var(--warning); font-size:0.8rem; font-weight:700;">⚡ ${PYRAMIDE_LOIS_INFO.finalEvaluation.xpReward} XP</span>
                <span style="color:var(--text-muted); font-size:0.8rem;">•</span>
                <span style="color:var(--text-muted); font-size:0.8rem;">8 questions</span>
              </div>
              <p class="ocfo-chap-summary">${PYRAMIDE_LOIS_INFO.finalEvaluation.summary}</p>
            </div>

            <div class="ocfo-card-right">
              <button class="ocfo-btn-open" style="background:var(--accent-red); color:#fff; border-color:var(--accent-red);" aria-label="Ouvrir l'évaluation finale">
                <span>${isFinalDone ? 'Revoir' : 'Passer l\'examen'}</span>
                <span>→</span>
              </button>
            </div>
          </article>
        </div>
      </section>
    `;

    // Clic sur bouton Continuer
    const btnResume = container.querySelector('#btnResumePyramide');
    if (btnResume) {
      btnResume.addEventListener('click', () => {
        location.hash = `#/formations/A/pyramide-lois/${nextLessonSlug}`;
      });
    }

    // Clics sur les cartes de leçons
    container.querySelectorAll('.ocfo-chapter-card').forEach(card => {
      card.addEventListener('click', () => {
        const lessonId = card.getAttribute('data-lesson-id');
        if (lessonId) {
          location.hash = `#/formations/A/pyramide-lois/${lessonId}`;
        }
      });
    });
  }

  // ----------------------------------------------------------------------------
  // Vue Hub Dédiée : RS 734.0 — LIE (11 Leçons officielles · Art. 1 à 64)
  // Source de vérité : 734.0_LIE.pdf (24 juin 1902, état au 1er avril 2026)
  // ----------------------------------------------------------------------------
  function renderLieParcoursView(container) {
    const parcoursProgress = ProgressionService.getParcoursProgress('rs-734-0');
    const lessons = RS_734_0_INFO ? RS_734_0_INFO.lessons : [];
    const isFinalDone = parcoursProgress.isFinalDone;
    const completedCount = parcoursProgress.lessonsCompleted;
    const totalLessons = parcoursProgress.lessonsTotal;

    // Trouver la première leçon non validée
    let nextLessonSlug = 'lecon-1';
    const completed = StorageService.getCompletedLessons();
    for (const l of lessons) {
      if (!completed.includes(l.id)) {
        nextLessonSlug = l.slug;
        break;
      }
    }
    if (completedCount === totalLessons && !isFinalDone) {
      nextLessonSlug = 'evaluation-finale';
    }

    container.innerHTML = `
      <nav class="breadcrumb-nav" aria-label="Fil d'ariane">
        <a href="#/" class="breadcrumb-link">Accueil</a>
        <span>/</span>
        <a href="#/formations" class="breadcrumb-link">Formations</a>
        <span>/</span>
        <a href="#/formations/A" class="breadcrumb-link">Module A — Dispositions légales</a>
        <span>/</span>
        <span>RS 734.0 — LIE</span>
      </nav>

      <!-- Header Hero Card LIE -->
      <header class="ocfo-hub-hero" style="border-left: 4px solid #f59e0b;" role="region" aria-label="En-tête du parcours RS 734.0">
        <div class="ocfo-hub-badge-row">
          <span class="ocfo-hub-tag">DROIT FÉDÉRAL SUISSE · LOI-CADRE FONDAMENTALE</span>
          <span class="ocfo-hub-ref" style="border-color:rgba(245,158,11,0.4); color:#f59e0b; background:rgba(245,158,11,0.12);">RS 734.0</span>
        </div>

        <div class="ocfo-hub-title-row">
          <div>
            <div class="ocfo-hub-short" style="color:#f59e0b;">LIE (du 24 juin 1902 · État au 1er avril 2026)</div>
            <h1 class="ocfo-hub-title">Loi fédérale concernant les installations électriques à faible et à fort courant</h1>
          </div>
        </div>

        <p class="ocfo-hub-desc">
          ${RS_734_0_INFO.description}
        </p>

        <div class="ocfo-hub-progress-card">
          <div class="progress-labels">
            <span style="font-weight:700; color:var(--text-primary);">Progression du parcours LIE</span>
            <span style="font-weight:800; color:#f59e0b; font-size:1rem;">
              ${parcoursProgress.percentageFormatted} · ${completedCount} / ${totalLessons} leçons
            </span>
          </div>
          <div class="progress-bar-bg" style="height:10px; margin-top:0.5rem;">
            <div class="progress-bar-fill" style="width: ${parcoursProgress.percentage}%; background:#f59e0b;"></div>
          </div>

          <div style="margin-top:1rem; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:0.75rem;">
            <button class="btn-continue" id="btnResumeLie" style="display:inline-flex; align-items:center; gap:0.5rem; background:#f59e0b; color:#000; font-weight:700;">
              <span>${completedCount === 0 ? 'Commencer la Leçon 1' : (completedCount === 11 ? 'Accéder à l\'évaluation finale' : 'Reprendre le parcours')}</span>
              <span>→</span>
            </button>
            <button class="btn-continue" onclick="location.hash='#/formations/A'" style="background:var(--bg-surface-elevated); color:var(--text-primary); border:1px solid var(--border-medium);">
              ← Retour au Module A
            </button>
          </div>
        </div>
      </header>

      <!-- Liste des 11 Leçons officielles (Parties I à VIII) -->
      <section class="ocfo-chapters-section" aria-label="Liste ordonnée des 11 leçons LIE">
        <div class="section-heading">
          <span>📚</span> Les 11 leçons du parcours (fidèles aux 11 parties de la LIE · Art. 1 à 64)
        </div>

        <div class="ocfo-chapters-list">
          ${lessons.map((les, idx) => {
            const isDone = completed.includes(les.id);
            const isCurrent = !isDone && (idx === 0 || completed.includes(lessons[idx - 1].id));

            return `
              <article class="ocfo-chapter-card ${isCurrent ? 'chapter-in-progress' : ''} ${isDone ? 'chapter-completed' : ''}" data-lesson-slug="${les.slug}" style="${isCurrent ? 'border-color:#f59e0b;' : ''}">
                <div class="ocfo-card-left">
                  <span class="ocfo-chap-number" style="border-color:rgba(245,158,11,0.3); color:#f59e0b;">${les.number}</span>
                  <span class="ocfo-status-box ${isDone ? 'box-done' : (isCurrent ? 'box-current' : 'box-pending')}">
                    ${isDone ? '[✓]' : (isCurrent ? '[●]' : '[  ]')}
                  </span>
                </div>

                <div class="ocfo-card-center">
                  <div class="ocfo-chap-title-row">
                    <h2 class="ocfo-chap-title">${les.title}</h2>
                    ${isDone ? '<span class="ocfo-badge-done">✓ Validé</span>' : (isCurrent ? '<span class="ocfo-badge-current" style="background:rgba(245,158,11,0.15); color:#f59e0b; border-color:rgba(245,158,11,0.3);">En cours</span>' : '')}
                  </div>
                  <div class="ocfo-chap-articles">
                    <span class="legal-tag" style="border-color:rgba(245,158,11,0.3); color:#f59e0b; background:rgba(245,158,11,0.08);">${les.articles}</span>
                    <span style="color:var(--text-muted); font-size:0.8rem;">•</span>
                    <span style="color:var(--text-muted); font-size:0.8rem;">⏱️ ${les.duration}</span>
                    <span style="color:var(--text-muted); font-size:0.8rem;">•</span>
                    <span style="color:var(--warning); font-size:0.8rem; font-weight:700;">⚡ 30 XP</span>
                  </div>
                  <p class="ocfo-chap-summary">${les.summary}</p>
                </div>

                <div class="ocfo-card-right">
                  <button class="ocfo-btn-open" aria-label="Ouvrir la ${les.title}">
                    <span>${isDone ? 'Revoir' : (isCurrent ? 'Continuer' : 'Commencer')}</span>
                    <span>→</span>
                  </button>
                </div>
              </article>
            `;
          }).join('')}

          <!-- Évaluation Finale (16 questions) -->
          <article class="ocfo-chapter-card ocfo-final-card ${isFinalDone ? 'chapter-completed' : ''}" data-lesson-slug="evaluation-finale">
            <div class="ocfo-card-left">
              <span class="ocfo-chap-number" style="background:rgba(239,68,68,0.15); color:var(--accent-red);">🏁</span>
              <span class="ocfo-status-box ${isFinalDone ? 'box-done' : 'box-pending'}">
                ${isFinalDone ? '[✓]' : '[  ]'}
              </span>
            </div>

            <div class="ocfo-card-center">
              <div class="ocfo-chap-title-row">
                <h2 class="ocfo-chap-title" style="color:var(--text-primary);">${RS_734_0_INFO.finalEvaluation.title}</h2>
                ${isFinalDone ? '<span class="ocfo-badge-done">✓ Certifié</span>' : '<span class="ocfo-badge-eval">Examen final</span>'}
              </div>
              <div class="ocfo-chap-articles">
                <span class="legal-tag">Art. 1 à 64</span>
                <span style="color:var(--text-muted); font-size:0.8rem;">•</span>
                <span style="color:var(--text-muted); font-size:0.8rem;">⏱️ ${RS_734_0_INFO.finalEvaluation.duration}</span>
                <span style="color:var(--text-muted); font-size:0.8rem;">•</span>
                <span style="color:var(--warning); font-size:0.8rem; font-weight:700;">⚡ 100 XP</span>
                <span style="color:var(--text-muted); font-size:0.8rem;">•</span>
                <span style="color:var(--text-muted); font-size:0.8rem;">16 questions</span>
              </div>
              <p class="ocfo-chap-summary">${RS_734_0_INFO.finalEvaluation.summary}</p>
            </div>

            <div class="ocfo-card-right">
              <button class="ocfo-btn-open" style="background:var(--accent-red); color:#fff; border-color:var(--accent-red);" aria-label="Ouvrir l'évaluation finale">
                <span>${isFinalDone ? 'Revoir' : 'Passer l\'examen'}</span>
                <span>→</span>
              </button>
            </div>
          </article>
        </div>
      </section>
    `;

    // Clic sur bouton Continuer
    const btnResume = container.querySelector('#btnResumeLie');
    if (btnResume) {
      btnResume.addEventListener('click', () => {
        location.hash = `#/formations/A/rs-734-0/${nextLessonSlug}`;
      });
    }

    // Clics sur les cartes de leçons
    container.querySelectorAll('.ocfo-chapter-card').forEach(card => {
      card.addEventListener('click', () => {
        const slug = card.getAttribute('data-lesson-slug');
        if (slug) {
          location.hash = `#/formations/A/rs-734-0/${slug}`;
        }
      });
    });
  }

  // ----------------------------------------------------------------------------
  // Vue Hub Dédiée : RS 734.27 — OIBT (7 Leçons officielles · Art. 1 à 45 + Annexe)
  // Source de vérité : 734.27_OIBT.pdf (7 novembre 2001, état au 31 octobre 2025)
  // ----------------------------------------------------------------------------
  function renderOibtParcoursView(container) {
    const parcoursProgress = ProgressionService.getParcoursProgress('rs-734-27');
    const lessons = RS_734_27_INFO ? RS_734_27_INFO.lessons : [];
    const isFinalDone = parcoursProgress.isFinalDone;
    const completedCount = parcoursProgress.lessonsCompleted;
    const totalLessons = parcoursProgress.lessonsTotal;

    // Trouver la première leçon non validée
    let nextLessonSlug = 'lecon-1';
    const completed = StorageService.getCompletedLessons();
    for (const l of lessons) {
      if (!completed.includes(l.id)) {
        nextLessonSlug = l.slug;
        break;
      }
    }
    if (completedCount === totalLessons && !isFinalDone) {
      nextLessonSlug = 'evaluation-finale';
    }

    container.innerHTML = `
      <nav class="breadcrumb-nav" aria-label="Fil d'ariane">
        <a href="#/" class="breadcrumb-link">Accueil</a>
        <span>/</span>
        <a href="#/formations" class="breadcrumb-link">Formations</a>
        <span>/</span>
        <a href="#/formations/A" class="breadcrumb-link">Module A — Dispositions légales</a>
        <span>/</span>
        <span>RS 734.27 — OIBT</span>
      </nav>

      <!-- Header Hero Card OIBT -->
      <header class="ocfo-hub-hero" style="border-left: 4px solid #10b981;" role="region" aria-label="En-tête du parcours RS 734.27">
        <div class="ocfo-hub-badge-row">
          <span class="ocfo-hub-tag" style="background:rgba(16,185,129,0.15); color:#10b981;">DROIT FÉDÉRAL SUISSE · BASSE TENSION</span>
          <span class="ocfo-hub-ref" style="border-color:rgba(16,185,129,0.4); color:#10b981; background:rgba(16,185,129,0.12);">RS 734.27</span>
        </div>

        <div class="ocfo-hub-title-row">
          <div>
            <div class="ocfo-hub-short" style="color:#10b981;">OIBT (du 7 novembre 2001 · État au 31 octobre 2025)</div>
            <h1 class="ocfo-hub-title">Ordonnance sur les installations électriques à basse tension</h1>
          </div>
        </div>

        <p class="ocfo-hub-desc">
          ${RS_734_27_INFO ? RS_734_27_INFO.description : ''}
        </p>

        <div class="ocfo-hub-progress-card">
          <div class="progress-labels">
            <span style="font-weight:700; color:var(--text-primary);">Progression du parcours OIBT</span>
            <span style="font-weight:800; color:#10b981; font-size:1rem;">
              ${parcoursProgress.percentageFormatted} · ${completedCount} / ${totalLessons} leçons
            </span>
          </div>
          <div class="progress-bar-bg" style="height:10px; margin-top:0.5rem;">
            <div class="progress-bar-fill" style="width: ${parcoursProgress.percentage}%; background:#10b981;"></div>
          </div>

          <div style="margin-top:1rem; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:0.75rem;">
            <button class="btn-continue" id="btnResumeOibt" style="display:inline-flex; align-items:center; gap:0.5rem; background:#10b981; color:#042f2e; font-weight:700;">
              <span>${completedCount === 0 ? 'Commencer la Leçon 1' : (completedCount === 7 ? 'Accéder à l\'évaluation finale' : 'Reprendre le parcours')}</span>
              <span>→</span>
            </button>
            <button class="btn-continue" onclick="location.hash='#/formations/A'" style="background:var(--bg-surface-elevated); color:var(--text-primary); border:1px solid var(--border-medium);">
              ← Retour au Module A
            </button>
          </div>
        </div>
      </header>

      <!-- Liste des 7 Leçons officielles (6 Chapitres + Leçon 7 Annexe) -->
      <section class="ocfo-chapters-section" aria-label="Liste ordonnée des 7 leçons OIBT">
        <div class="section-heading">
          <span>📚</span> Les 7 leçons du parcours (6 chapitres légaux & Annexe contrôles périodiques)
        </div>

        <div class="ocfo-chapters-list">
          ${lessons.map((les, idx) => {
            const isDone = completed.includes(les.id);
            const isCurrent = !isDone && (idx === 0 || completed.includes(lessons[idx - 1].id));

            return `
              <article class="ocfo-chapter-card ${isCurrent ? 'chapter-in-progress' : ''} ${isDone ? 'chapter-completed' : ''}" data-lesson-slug="${les.slug}" style="${isCurrent ? 'border-color:#10b981;' : ''}">
                <div class="ocfo-card-left">
                  <span class="ocfo-chap-number" style="border-color:rgba(16,185,129,0.3); color:#10b981;">${les.number}</span>
                  <span class="ocfo-status-box ${isDone ? 'box-done' : (isCurrent ? 'box-current' : 'box-pending')}">
                    ${isDone ? '[✓]' : (isCurrent ? '[●]' : '[  ]')}
                  </span>
                </div>

                <div class="ocfo-card-center">
                  <div class="ocfo-chap-title-row">
                    <h2 class="ocfo-chap-title">${les.title}</h2>
                    ${isDone ? '<span class="ocfo-badge-done">✓ Validé</span>' : (isCurrent ? '<span class="ocfo-badge-current" style="background:rgba(16,185,129,0.15); color:#10b981; border-color:rgba(16,185,129,0.3);">En cours</span>' : '')}
                  </div>
                  <div class="ocfo-chap-articles">
                    <span class="legal-tag" style="border-color:rgba(16,185,129,0.3); color:#10b981; background:rgba(16,185,129,0.08);">${les.articles}</span>
                    <span style="color:var(--text-muted); font-size:0.8rem;">•</span>
                    <span style="color:var(--text-muted); font-size:0.8rem;">⏱️ ${les.duration}</span>
                    <span style="color:var(--text-muted); font-size:0.8rem;">•</span>
                    <span style="color:var(--warning); font-size:0.8rem; font-weight:700;">⚡ 30 XP</span>
                  </div>
                  <p class="ocfo-chap-summary">${les.summary}</p>
                </div>

                <div class="ocfo-card-right">
                  <button class="ocfo-btn-open" aria-label="Ouvrir la ${les.title}">
                    <span>${isDone ? 'Revoir' : (isCurrent ? 'Continuer' : 'Commencer')}</span>
                    <span>→</span>
                  </button>
                </div>
              </article>
            `;
          }).join('')}

          <!-- Évaluation Finale (16 questions) -->
          <article class="ocfo-chapter-card ocfo-final-card ${isFinalDone ? 'chapter-completed' : ''}" data-lesson-slug="evaluation-finale">
            <div class="ocfo-card-left">
              <span class="ocfo-chap-number" style="background:rgba(239,68,68,0.15); color:var(--accent-red);">🏁</span>
              <span class="ocfo-status-box ${isFinalDone ? 'box-done' : 'box-pending'}">
                ${isFinalDone ? '[✓]' : '[  ]'}
              </span>
            </div>

            <div class="ocfo-card-center">
              <div class="ocfo-chap-title-row">
                <h2 class="ocfo-chap-title" style="color:var(--text-primary);">${RS_734_27_INFO ? RS_734_27_INFO.finalEvaluation.title : 'Évaluation Finale Certifiante'}</h2>
                ${isFinalDone ? '<span class="ocfo-badge-done">✓ Certifié</span>' : '<span class="ocfo-badge-eval">Examen final</span>'}
              </div>
              <div class="ocfo-chap-articles">
                <span class="legal-tag">Art. 1 à 45 & Annexe</span>
                <span style="color:var(--text-muted); font-size:0.8rem;">•</span>
                <span style="color:var(--text-muted); font-size:0.8rem;">⏱️ ${RS_734_27_INFO ? RS_734_27_INFO.finalEvaluation.duration : '30 min'}</span>
                <span style="color:var(--text-muted); font-size:0.8rem;">•</span>
                <span style="color:var(--warning); font-size:0.8rem; font-weight:700;">⚡ 100 XP</span>
                <span style="color:var(--text-muted); font-size:0.8rem;">•</span>
                <span style="color:var(--text-muted); font-size:0.8rem;">16 questions</span>
              </div>
              <p class="ocfo-chap-summary">${RS_734_27_INFO ? RS_734_27_INFO.finalEvaluation.summary : ''}</p>
            </div>

            <div class="ocfo-card-right">
              <button class="ocfo-btn-open" style="background:var(--accent-red); color:#fff; border-color:var(--accent-red);" aria-label="Ouvrir l'évaluation finale">
                <span>${isFinalDone ? 'Revoir' : 'Passer l\'examen'}</span>
                <span>→</span>
              </button>
            </div>
          </article>
        </div>
      </section>
    `;

    // Clic sur bouton Continuer
    const btnResume = container.querySelector('#btnResumeOibt');
    if (btnResume) {
      btnResume.addEventListener('click', () => {
        location.hash = `#/formations/A/rs-734-27/${nextLessonSlug}`;
      });
    }

    // Clics sur les cartes de leçons
    container.querySelectorAll('.ocfo-chapter-card').forEach(card => {
      card.addEventListener('click', () => {
        const slug = card.getAttribute('data-lesson-slug');
        if (slug) {
          location.hash = `#/formations/A/rs-734-27/${slug}`;
        }
      });
    });
  }

  // ----------------------------------------------------------------------------
  // Vue Hub Dédiée : RS 814.710 — ORNI (7 Leçons officielles · Art. 1 à 21 + Annexes 1-2)
  // Source de vérité : 814.710_ORNI.pdf (23 décembre 1999, état au 1er novembre 2023)
  // ----------------------------------------------------------------------------
  function renderOrniParcoursView(container) {
    const parcoursProgress = ProgressionService.getParcoursProgress('rs-814-710');
    const lessons = RS_814_710_INFO ? RS_814_710_INFO.lessons : [];
    const isFinalDone = parcoursProgress.isFinalDone;
    const completedCount = parcoursProgress.lessonsCompleted;
    const totalLessons = parcoursProgress.lessonsTotal;

    // Trouver la première leçon non validée
    let nextLessonSlug = 'lecon-1';
    const completed = StorageService.getCompletedLessons();
    for (const l of lessons) {
      if (!completed.includes(l.id)) {
        nextLessonSlug = l.slug;
        break;
      }
    }
    if (completedCount === totalLessons && !isFinalDone) {
      nextLessonSlug = 'evaluation-finale';
    }

    container.innerHTML = `
      <nav class="breadcrumb-nav" aria-label="Fil d'ariane">
        <a href="#/" class="breadcrumb-link">Accueil</a>
        <span>/</span>
        <a href="#/formations" class="breadcrumb-link">Formations</a>
        <span>/</span>
        <a href="#/formations/A" class="breadcrumb-link">Module A — Dispositions légales</a>
        <span>/</span>
        <span>RS 814.710 — ORNI</span>
      </nav>

      <!-- Header Hero Card ORNI -->
      <header class="ocfo-hub-hero" style="border-left: 4px solid #8b5cf6;" role="region" aria-label="En-tête du parcours RS 814.710">
        <div class="ocfo-hub-badge-row">
          <span class="ocfo-hub-tag" style="background:rgba(139,92,246,0.15); color:#a78bfa;">DROIT FÉDÉRAL SUISSE · ENVIRONNEMENT & RNI</span>
          <span class="ocfo-hub-ref" style="border-color:rgba(139,92,246,0.4); color:#a78bfa; background:rgba(139,92,246,0.12);">RS 814.710</span>
        </div>

        <div class="ocfo-hub-title-row">
          <div>
            <div class="ocfo-hub-short" style="color:#a78bfa;">ORNI (du 23 décembre 1999 · État au 1er novembre 2023)</div>
            <h1 class="ocfo-hub-title">Ordonnance sur la protection contre le rayonnement non ionisant</h1>
          </div>
        </div>

        <p class="ocfo-hub-desc">
          ${RS_814_710_INFO ? RS_814_710_INFO.description : ''}
        </p>

        <div class="ocfo-hub-progress-card">
          <div class="progress-labels">
            <span style="font-weight:700; color:var(--text-primary);">Progression du parcours ORNI</span>
            <span style="font-weight:800; color:#a78bfa; font-size:1rem;">
              ${parcoursProgress.percentageFormatted} · ${completedCount} / ${totalLessons} leçons
            </span>
          </div>
          <div class="progress-bar-bg" style="height:10px; margin-top:0.5rem;">
            <div class="progress-bar-fill" style="width: ${parcoursProgress.percentage}%; background:#8b5cf6;"></div>
          </div>

          <div style="margin-top:1rem; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:0.75rem;">
            <button class="btn-continue" id="btnResumeOrni" style="display:inline-flex; align-items:center; gap:0.5rem; background:#8b5cf6; color:#ffffff; font-weight:700; cursor:pointer;">
              <span>${completedCount === 0 ? 'Commencer la Leçon 1' : (completedCount === 7 ? 'Accéder à l\'évaluation finale' : 'Reprendre le parcours')}</span>
              <span>→</span>
            </button>
            <button class="btn-continue" onclick="location.hash='#/formations/A'" style="background:var(--bg-surface-elevated); color:var(--text-primary); border:1px solid var(--border-medium);">
              ← Retour au Module A
            </button>
          </div>
        </div>
      </header>

      <!-- Liste des 7 Leçons officielles -->
      <section class="ocfo-chapters-section" aria-label="Liste ordonnée des 7 leçons ORNI">
        <div class="section-heading">
          <span>📚</span> Les 7 leçons du parcours (Art. 1 à 21 & Annexes 1 et 2)
        </div>

        <div class="ocfo-chapters-list">
          ${lessons.map((les, idx) => {
            const isDone = completed.includes(les.id);
            const isCurrent = !isDone && (idx === 0 || completed.includes(lessons[idx - 1].id));

            return `
              <article class="ocfo-chapter-card ${isCurrent ? 'chapter-in-progress' : ''} ${isDone ? 'chapter-completed' : ''}" data-lesson-slug="${les.slug}" style="${isCurrent ? 'border-color:#8b5cf6;' : ''}">
                <div class="ocfo-card-left">
                  <span class="ocfo-chap-number" style="border-color:rgba(139,92,246,0.3); color:#a78bfa;">${les.number}</span>
                  <span class="ocfo-status-box ${isDone ? 'box-done' : (isCurrent ? 'box-current' : 'box-pending')}">
                    ${isDone ? '[✓]' : (isCurrent ? '[●]' : '[  ]')}
                  </span>
                </div>

                <div class="ocfo-card-center">
                  <div class="ocfo-chap-title-row">
                    <h2 class="ocfo-chap-title">${les.title}</h2>
                    ${isDone ? '<span class="ocfo-badge-done">✓ Validé</span>' : (isCurrent ? '<span class="ocfo-badge-current" style="background:rgba(139,92,246,0.15); color:#a78bfa; border-color:rgba(139,92,246,0.3);">En cours</span>' : '')}
                  </div>
                  <div class="ocfo-chap-articles">
                    <span class="legal-tag" style="border-color:rgba(139,92,246,0.3); color:#a78bfa; background:rgba(139,92,246,0.08);">${les.articles}</span>
                    <span style="color:var(--text-muted); font-size:0.8rem;">•</span>
                    <span style="color:var(--text-muted); font-size:0.8rem;">⏱️ ${les.duration}</span>
                    <span style="color:var(--text-muted); font-size:0.8rem;">•</span>
                    <span style="color:var(--warning); font-size:0.8rem; font-weight:700;">⚡ 30 XP</span>
                  </div>
                  <p class="ocfo-chap-summary">${les.summary}</p>
                </div>

                <div class="ocfo-card-right">
                  <button class="ocfo-btn-open" aria-label="Ouvrir la ${les.title}">
                    <span>${isDone ? 'Revoir' : (isCurrent ? 'Continuer' : 'Commencer')}</span>
                    <span>→</span>
                  </button>
                </div>
              </article>
            `;
          }).join('')}

          <!-- Évaluation Finale (16 questions) -->
          <article class="ocfo-chapter-card ocfo-final-card ${isFinalDone ? 'chapter-completed' : ''}" data-lesson-slug="evaluation-finale">
            <div class="ocfo-card-left">
              <span class="ocfo-chap-number" style="background:rgba(239,68,68,0.15); color:var(--accent-red);">🏁</span>
              <span class="ocfo-status-box ${isFinalDone ? 'box-done' : 'box-pending'}">
                ${isFinalDone ? '[✓]' : '[  ]'}
              </span>
            </div>

            <div class="ocfo-card-center">
              <div class="ocfo-chap-title-row">
                <h2 class="ocfo-chap-title" style="color:var(--text-primary);">${RS_814_710_INFO ? RS_814_710_INFO.finalEvaluation.title : 'Évaluation Finale Certifiante'}</h2>
                ${isFinalDone ? '<span class="ocfo-badge-done">✓ Certifié</span>' : '<span class="ocfo-badge-eval">Examen final</span>'}
              </div>
              <div class="ocfo-chap-articles">
                <span class="legal-tag">Art. 1 à 21 & Annexes 1-2</span>
                <span style="color:var(--text-muted); font-size:0.8rem;">•</span>
                <span style="color:var(--text-muted); font-size:0.8rem;">⏱️ ${RS_814_710_INFO ? RS_814_710_INFO.finalEvaluation.duration : '20 min'}</span>
                <span style="color:var(--text-muted); font-size:0.8rem;">•</span>
                <span style="color:var(--warning); font-size:0.8rem; font-weight:700;">⚡ 100 XP</span>
                <span style="color:var(--text-muted); font-size:0.8rem;">•</span>
                <span style="color:var(--text-muted); font-size:0.8rem;">16 questions</span>
              </div>
              <p class="ocfo-chap-summary">${RS_814_710_INFO ? RS_814_710_INFO.finalEvaluation.summary : ''}</p>
            </div>

            <div class="ocfo-card-right">
              <button class="ocfo-btn-open" style="background:var(--accent-red); color:#fff; border-color:var(--accent-red);" aria-label="Ouvrir l'évaluation finale">
                <span>${isFinalDone ? 'Revoir' : 'Passer l\'examen'}</span>
                <span>→</span>
              </button>
            </div>
          </article>
        </div>
      </section>
    `;

    // Clic sur bouton Continuer
    const btnResume = container.querySelector('#btnResumeOrni');
    if (btnResume) {
      btnResume.addEventListener('click', () => {
        location.hash = `#/formations/A/rs-814-710/${nextLessonSlug}`;
      });
    }

    // Clics sur les cartes de leçons
    container.querySelectorAll('.ocfo-chapter-card').forEach(card => {
      card.addEventListener('click', () => {
        const slug = card.getAttribute('data-lesson-slug');
        if (slug) {
          location.hash = `#/formations/A/rs-814-710/${slug}`;
        }
      });
    });
  }

  // ----------------------------------------------------------------------------
  // Vue Hub Dédiée : Directive ESTI n° 221 (4 Leçons officielles · Version 0621)
  // Source de vérité : ESTI directive n° 221 / Version 0621 (valable dès le 01.07.2021)
  // Modèle de référence : RS 734.0 — LIE
  // ----------------------------------------------------------------------------
  function renderEsti221ParcoursView(container) {
    const parcoursProgress = ProgressionService.getParcoursProgress('esti-221');
    const lessons = ESTI_221_INFO ? ESTI_221_INFO.lessons : [];
    const isFinalDone = parcoursProgress.isFinalDone;
    const completedCount = parcoursProgress.lessonsCompleted;
    const totalLessons = parcoursProgress.lessonsTotal;

    // Trouver la première leçon non validée
    let nextLessonSlug = 'lecon-1';
    const completed = StorageService.getCompletedLessons();
    for (const l of lessons) {
      if (!completed.includes(l.id)) {
        nextLessonSlug = l.slug;
        break;
      }
    }
    if (completedCount === totalLessons && !isFinalDone) {
      nextLessonSlug = 'evaluation-finale';
    }

    container.innerHTML = `
      <nav class="breadcrumb-nav" aria-label="Fil d'ariane">
        <a href="#/" class="breadcrumb-link">Accueil</a>
        <span>/</span>
        <a href="#/formations" class="breadcrumb-link">Formations</a>
        <span>/</span>
        <a href="#/formations/E" class="breadcrumb-link">Module E — ESTI directives</a>
        <span>/</span>
        <span>Directive ESTI 221</span>
      </nav>

      <!-- Header Hero Card ESTI 221 -->
      <header class="ocfo-hub-hero" style="border-left: 4px solid #10b981;" role="region" aria-label="En-tête du parcours ESTI 221">
        <div class="ocfo-hub-badge-row">
          <span class="ocfo-hub-tag">DIRECTIVE OFFICIELLE ESTI · VERSION 0621</span>
          <span class="ocfo-hub-ref" style="border-color:rgba(16,185,129,0.4); color:#10b981; background:rgba(16,185,129,0.12);">ESTI n° 221</span>
        </div>

        <div class="ocfo-hub-title-row">
          <div>
            <div class="ocfo-hub-short" style="color:#10b981;">ESTI directive n° 221 (Valable dès le 1er juillet 2021)</div>
            <h1 class="ocfo-hub-title">Obligations d'annoncer en cas d'autorisation générale ou limitée d'installer</h1>
          </div>
        </div>

        <p class="ocfo-hub-desc">
          ${ESTI_221_INFO ? ESTI_221_INFO.description : ''}
        </p>

        <div class="ocfo-hub-progress-card">
          <div class="progress-labels">
            <span style="font-weight:700; color:var(--text-primary);">Progression du parcours ESTI 221</span>
            <span style="font-weight:800; color:#10b981; font-size:1rem;">
              ${parcoursProgress.percentageFormatted} · ${completedCount} / ${totalLessons} leçons
            </span>
          </div>
          <div class="progress-bar-bg" style="height:10px; margin-top:0.5rem;">
            <div class="progress-bar-fill" style="width: ${parcoursProgress.percentage}%; background:#10b981;"></div>
          </div>

          <div style="margin-top:1rem; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:0.75rem;">
            <button class="btn-continue" id="btnResumeEsti221" style="display:inline-flex; align-items:center; gap:0.5rem; background:#10b981; color:#042f2e; font-weight:700;">
              <span>${completedCount === 0 ? 'Commencer la Leçon 1' : (completedCount === totalLessons ? 'Accéder à l\'évaluation finale' : 'Reprendre le parcours')}</span>
              <span>→</span>
            </button>
            <button class="btn-continue" onclick="location.hash='#/formations/E'" style="background:var(--bg-surface-elevated); color:var(--text-primary); border:1px solid var(--border-medium);">
              ← Retour au Module E
            </button>
          </div>
        </div>
      </header>

      <!-- Liste des 4 Leçons officielles -->
      <section class="ocfo-chapters-section" aria-label="Liste ordonnée des 4 leçons ESTI 221">
        <div class="section-heading">
          <span>📚</span> Les 4 leçons du parcours (fidèles aux 6 sections de la directive ESTI 221)
        </div>

        <div class="ocfo-chapters-list">
          ${lessons.map((les, idx) => {
            const isDone = completed.includes(les.id);
            const isCurrent = !isDone && (idx === 0 || completed.includes(lessons[idx - 1].id));

            return `
              <article class="ocfo-chapter-card ${isCurrent ? 'chapter-in-progress' : ''} ${isDone ? 'chapter-completed' : ''}" data-lesson-slug="${les.slug}" style="${isCurrent ? 'border-color:#10b981;' : ''}">
                <div class="ocfo-card-left">
                  <span class="ocfo-chap-number" style="border-color:rgba(16,185,129,0.3); color:#10b981;">${les.number}</span>
                  <span class="ocfo-status-box ${isDone ? 'box-done' : (isCurrent ? 'box-current' : 'box-pending')}">
                    ${isDone ? '[✓]' : (isCurrent ? '[●]' : '[  ]')}
                  </span>
                </div>

                <div class="ocfo-card-center">
                  <div class="ocfo-chap-title-row">
                    <h2 class="ocfo-chap-title">${les.title}</h2>
                    ${isDone ? '<span class="ocfo-badge-done">✓ Validé</span>' : (isCurrent ? '<span class="ocfo-badge-current" style="background:rgba(16,185,129,0.15); color:#10b981; border-color:rgba(16,185,129,0.3);">En cours</span>' : '')}
                  </div>
                  <div class="ocfo-chap-articles">
                    <span class="legal-tag" style="border-color:rgba(16,185,129,0.3); color:#10b981; background:rgba(16,185,129,0.08);">${les.sectionsRange}</span>
                    <span style="color:var(--text-muted); font-size:0.8rem;">•</span>
                    <span style="color:var(--text-muted); font-size:0.8rem;">⏱️ ${les.duration}</span>
                    <span style="color:var(--text-muted); font-size:0.8rem;">•</span>
                    <span style="color:var(--warning); font-size:0.8rem; font-weight:700;">⚡ 30 XP</span>
                  </div>
                  <p class="ocfo-chap-summary">${les.summary}</p>
                </div>

                <div class="ocfo-card-right">
                  <button class="ocfo-btn-open" aria-label="Ouvrir la ${les.title}">
                    <span>${isDone ? 'Revoir' : (isCurrent ? 'Continuer' : 'Commencer')}</span>
                    <span>→</span>
                  </button>
                </div>
              </article>
            `;
          }).join('')}

          <!-- Évaluation Finale (10 questions) -->
          <article class="ocfo-chapter-card ocfo-final-card ${isFinalDone ? 'chapter-completed' : ''}" data-lesson-slug="evaluation-finale">
            <div class="ocfo-card-left">
              <span class="ocfo-chap-number" style="background:rgba(239,68,68,0.15); color:var(--accent-red);">🏁</span>
              <span class="ocfo-status-box ${isFinalDone ? 'box-done' : 'box-pending'}">
                ${isFinalDone ? '[✓]' : '[  ]'}
              </span>
            </div>

            <div class="ocfo-card-center">
              <div class="ocfo-chap-title-row">
                <h2 class="ocfo-chap-title" style="color:var(--text-primary);">${ESTI_221_INFO ? ESTI_221_INFO.finalEvaluation.title : 'Évaluation Finale Certifiante'}</h2>
                ${isFinalDone ? '<span class="ocfo-badge-done">✓ Certifié</span>' : '<span class="ocfo-badge-eval">Examen final</span>'}
              </div>
              <div class="ocfo-chap-articles">
                <span class="legal-tag">Sections 1 à 6</span>
                <span style="color:var(--text-muted); font-size:0.8rem;">•</span>
                <span style="color:var(--text-muted); font-size:0.8rem;">⏱️ ${ESTI_221_INFO ? ESTI_221_INFO.finalEvaluation.duration : '20 min'}</span>
                <span style="color:var(--text-muted); font-size:0.8rem;">•</span>
                <span style="color:var(--warning); font-size:0.8rem; font-weight:700;">⚡ 100 XP</span>
                <span style="color:var(--text-muted); font-size:0.8rem;">•</span>
                <span style="color:var(--text-muted); font-size:0.8rem;">10 questions</span>
              </div>
              <p class="ocfo-chap-summary">${ESTI_221_INFO ? ESTI_221_INFO.finalEvaluation.summary : ''}</p>
            </div>

            <div class="ocfo-card-right">
              <button class="ocfo-btn-open" style="background:var(--accent-red); color:#fff; border-color:var(--accent-red);" aria-label="Ouvrir l'évaluation finale">
                <span>${isFinalDone ? 'Revoir' : 'Passer l\'examen'}</span>
                <span>→</span>
              </button>
            </div>
          </article>
        </div>
      </section>
    `;

    // Clic sur bouton Continuer
    const btnResume = container.querySelector('#btnResumeEsti221');
    if (btnResume) {
      btnResume.addEventListener('click', () => {
        location.hash = `#/formations/E/esti-221/${nextLessonSlug}`;
      });
    }

    // Clics sur les cartes de leçons
    container.querySelectorAll('.ocfo-chapter-card').forEach(card => {
      card.addEventListener('click', () => {
        const slug = card.getAttribute('data-lesson-slug');
        if (slug) {
          location.hash = `#/formations/E/esti-221/${slug}`;
        }
      });
    });
  }




  // ==================== src/pages/lesson-view.js ====================
  // Swiss Electrical Academy — Vue d'une Leçon (V2.0)
  // Respect strict de la séquence pédagogique : Titre -> Objectif -> Intro -> Contenu -> Illustration/Widget -> Cas pratique -> Point important -> Quiz -> Synthèse


  function renderLessonView(container, moduleId, formationId) {
    // Défilement immédiat au sommet dès l'entrée dans la leçon
    if (container) container.scrollTop = 0;
    window.scrollTo(0, 0);
    if (window.scrollToTop) window.scrollToTop(container);

    const result = findFormation(moduleId, formationId);

    if (!result) {
      container.innerHTML = `
        <div style="text-align:center; padding:3rem 1rem;">
          <h2>Formation introuvable</h2>
          <p style="color:var(--text-muted); margin-top:0.5rem;">Cette référence pédagogique n'a pas été trouvée dans le module ${moduleId}.</p>
          <button class="btn-continue" style="margin-top:1.5rem;" onclick="location.hash='#/formations/${moduleId}'">← Retour au module</button>
        </div>
      `;
      return;
    }

    const { module: mod, formation } = result;
    const isPyramide = formation.parcoursId === 'pyramide-lois' || formation.id.startsWith('pyr-');
    const isLie = formation.parcoursId === 'rs-734-0' || formation.id.startsWith('rs-734-0-');
    const isOcfo = formation.parcoursId === 'rs-734-2' || formation.id.startsWith('rs-734-2-');
    const isOibt = formation.parcoursId === 'rs-734-27' || formation.id.startsWith('rs-734-27-');
    const isOrni = formation.parcoursId === 'rs-814-710' || formation.id.startsWith('rs-814-710-');
    const isEsti221 = formation.parcoursId === 'esti-221' || formation.id.startsWith('esti-221-');

    // Enregistrer comme dernière activité pour le bouton « Continuer »
    StorageService.setLastActivity({
      moduleId: mod.id,
      formationId: formation.id,
      title: formation.title,
      code: formation.code,
      subtitle: formation.subtitle
    });

    const isAvailable = formation.status === "Disponible";
    const isDone = StorageService.isLessonCompleted(formation.id);

    const totalPyramide = isPyramide ? ProgressionService.getParcoursProgress('pyramide-lois').lessonsTotal : 4;
    const totalLie = isLie ? ProgressionService.getParcoursProgress('rs-734-0').lessonsTotal : 11;
    const totalOcfo = isOcfo ? ProgressionService.getParcoursProgress('rs-734-2').lessonsTotal : 8;
    const totalOibt = isOibt ? ProgressionService.getParcoursProgress('rs-734-27').lessonsTotal : 7;
    const totalOrni = isOrni ? ProgressionService.getParcoursProgress('rs-814-710').lessonsTotal : 7;
    const totalEsti221 = isEsti221 ? ProgressionService.getParcoursProgress('esti-221').lessonsTotal : 4;

    // Déterminer les routes de navigation séquentielle
    let nextRoute = null;
    let nextLabel = null;
    if (isPyramide && formation.nextLessonId) {
      if (formation.lessonNumber && formation.lessonNumber < totalPyramide) {
        const nextNum = formation.lessonNumber + 1;
        nextRoute = `#/formations/A/pyramide-lois/pyr-0${nextNum}`;
        nextLabel = `Passer à la Leçon ${nextNum} (${nextNum} / ${totalPyramide}) →`;
      } else if (formation.lessonNumber === totalPyramide) {
        nextRoute = `#/formations/A/pyramide-lois/evaluation-finale`;
        nextLabel = `Passer à l'Évaluation finale 🏁 →`;
      }
    } else if (isLie && formation.nextLessonId) {
      if (formation.lessonNumber && formation.lessonNumber < totalLie) {
        const nextNum = formation.lessonNumber + 1;
        nextRoute = `#/formations/A/rs-734-0/lecon-${nextNum}`;
        nextLabel = `Passer au Chapitre suivant (${nextNum} / ${totalLie}) →`;
      } else if (formation.lessonNumber === totalLie) {
        nextRoute = `#/formations/A/rs-734-0/evaluation-finale`;
        nextLabel = `Passer à l'Évaluation finale 🏁 →`;
      }
    } else if (isOibt && formation.nextLessonId) {
      if (formation.lessonNumber && formation.lessonNumber < totalOibt) {
        const nextNum = formation.lessonNumber + 1;
        nextRoute = `#/formations/A/rs-734-27/lecon-${nextNum}`;
        nextLabel = `Passer à la Leçon ${nextNum} (${nextNum} / ${totalOibt}) →`;
      } else if (formation.lessonNumber === totalOibt) {
        nextRoute = `#/formations/A/rs-734-27/evaluation-finale`;
        nextLabel = `Passer à l'Évaluation finale 🏁 →`;
      }
    } else if (isOrni && formation.nextLessonId) {
      if (formation.lessonNumber && formation.lessonNumber < totalOrni) {
        const nextNum = formation.lessonNumber + 1;
        nextRoute = `#/formations/A/rs-814-710/lecon-${nextNum}`;
        nextLabel = `Passer à la Leçon ${nextNum} (${nextNum} / ${totalOrni}) →`;
      } else if (formation.lessonNumber === totalOrni) {
        nextRoute = `#/formations/A/rs-814-710/evaluation-finale`;
        nextLabel = `Passer à l'Évaluation finale 🏁 →`;
      }
    } else if (isEsti221 && formation.nextLessonId) {
      if (formation.lessonNumber && formation.lessonNumber < totalEsti221) {
        const nextNum = formation.lessonNumber + 1;
        nextRoute = `#/formations/E/esti-221/lecon-${nextNum}`;
        nextLabel = `Passer à la Leçon ${nextNum} (${nextNum} / ${totalEsti221}) →`;
      } else if (formation.lessonNumber === totalEsti221) {
        nextRoute = `#/formations/E/esti-221/evaluation-finale`;
        nextLabel = `Passer à l'Évaluation finale 🏁 →`;
      }
    } else if (formation.nextChapterId) {
      const nextNum = formation.chapterNumber + 1;
      if (nextNum < totalOcfo) {
        nextRoute = `#/formations/A/rs-734-2/chapitre-${nextNum}`;
        nextLabel = `Passer au Chapitre ${nextNum} / ${totalOcfo} →`;
      } else if (nextNum === totalOcfo) {
        nextRoute = `#/formations/A/rs-734-2/annexes`;
        nextLabel = `Passer à la Leçon ${totalOcfo} (Annexes 1 à 4) →`;
      } else {
        nextRoute = `#/formations/A/rs-734-2/evaluation-finale`;
        nextLabel = `Passer à l'Évaluation finale 🏁 →`;
      }
    }

    container.innerHTML = `
      <div class="lesson-container">
        <!-- Fil d'ariane -->
        <nav class="breadcrumb-nav" aria-label="Fil d'ariane">
          <a href="#/" class="breadcrumb-link">Accueil</a>
          <span>/</span>
          <a href="#/formations/${mod.id}" class="breadcrumb-link">Module ${mod.id} — ${mod.title}</a>
          ${isPyramide ? `
            <span>/</span>
            <a href="#/formations/A/pyramide-lois" class="breadcrumb-link">Pyramide des lois</a>
          ` : ''}
          ${isLie ? `
            <span>/</span>
            <a href="#/formations/A/rs-734-0" class="breadcrumb-link">RS 734.0 — LIE</a>
          ` : ''}
          ${isOcfo ? `
            <span>/</span>
            <a href="#/formations/A/rs-734-2" class="breadcrumb-link">RS 734.2 — OCFo</a>
          ` : ''}
          ${isOibt ? `
            <span>/</span>
            <a href="#/formations/A/rs-734-27" class="breadcrumb-link">RS 734.27 — OIBT</a>
          ` : ''}
          ${isOrni ? `
            <span>/</span>
            <a href="#/formations/A/rs-814-710" class="breadcrumb-link">RS 814.710 — ORNI</a>
          ` : ''}
          ${isEsti221 ? `
            <span>/</span>
            <a href="#/formations/E/esti-221" class="breadcrumb-link">Directive ESTI 221</a>
          ` : ''}
          <span>/</span>
          <span>${formation.code}</span>
        </nav>

        <!-- En-tête de leçon (Titre) -->
        <header class="lesson-header-card ${isPyramide ? 'pyramide-lesson-header' : (isLie ? 'ocfo-lesson-header' : (isOcfo ? 'ocfo-lesson-header' : (isOibt ? 'oibt-lesson-header' : (isOrni ? 'orni-lesson-header' : (isEsti221 ? 'esti-lesson-header' : '')))))}">
          <div class="lesson-badges-row">
            <span class="module-code-badge badge-${mod.id}" style="width:30px; height:30px; font-size:0.85rem;">
              ${mod.id}
            </span>
            <span class="formation-code-tag">${formation.code}</span>
            ${isPyramide && formation.lessonNumber && formation.lessonNumber <= totalPyramide ? `
              <span class="ocfo-progression-pill" style="border-color:rgba(236,72,153,0.4); color:#ec4899; background:rgba(236,72,153,0.12);">${formation.code} · ${formation.lessonNumber} / ${totalPyramide}</span>
            ` : ''}
            ${isPyramide && formation.isFinalEvaluation ? `
              <span class="ocfo-badge-eval" style="display:inline-block; padding:0.2rem 0.65rem; font-size:0.75rem; background:rgba(236,72,153,0.2); color:#f472b6; border:1px solid rgba(236,72,153,0.4);">Examen final (${totalPyramide} leçons)</span>
            ` : ''}
            ${isLie && formation.lessonNumber && formation.lessonNumber <= totalLie ? `
              <span class="ocfo-progression-pill" style="border-color:rgba(245,158,11,0.4); color:#f59e0b; background:rgba(245,158,11,0.12);">${formation.code} · ${formation.lessonNumber} / ${totalLie}</span>
            ` : ''}
            ${isLie && formation.isFinalEvaluation ? `
              <span class="ocfo-badge-eval" style="display:inline-block; padding:0.2rem 0.65rem; font-size:0.75rem;">Examen final (${totalLie} parties)</span>
            ` : ''}
            ${isOcfo && formation.chapterNumber && formation.chapterNumber <= totalOcfo ? `
              <span class="ocfo-progression-pill">${formation.chapterNumber === totalOcfo ? `Leçon ${totalOcfo} / ${totalOcfo} · Annexes 1 à 4` : `Chapitre ${formation.chapterNumber} / ${totalOcfo}`}</span>
            ` : ''}
            ${isOcfo && formation.isFinalEvaluation ? `
              <span class="ocfo-badge-eval" style="display:inline-block; padding:0.2rem 0.65rem; font-size:0.75rem;">Examen final (${totalOcfo} unités)</span>
            ` : ''}
            ${isOibt && formation.lessonNumber && formation.lessonNumber <= totalOibt ? `
              <span class="ocfo-progression-pill" style="border-color:rgba(16,185,129,0.4); color:#10b981; background:rgba(16,185,129,0.12);">${formation.code} · ${formation.lessonNumber} / ${totalOibt}</span>
            ` : ''}
            ${isOibt && formation.isFinalEvaluation ? `
              <span class="ocfo-badge-eval" style="display:inline-block; padding:0.2rem 0.65rem; font-size:0.75rem; background:rgba(16,185,129,0.2); color:#10b981; border:1px solid rgba(16,185,129,0.4);">Examen final (${totalOibt} unités)</span>
            ` : ''}
            ${isOrni && formation.lessonNumber && formation.lessonNumber <= totalOrni ? `
              <span class="ocfo-progression-pill" style="border-color:rgba(139,92,246,0.4); color:#a78bfa; background:rgba(139,92,246,0.12);">${formation.code} · ${formation.lessonNumber} / ${totalOrni}</span>
            ` : ''}
            ${isOrni && formation.isFinalEvaluation ? `
              <span class="ocfo-badge-eval" style="display:inline-block; padding:0.2rem 0.65rem; font-size:0.75rem; background:rgba(239,68,68,0.15); color:var(--accent-red); border-color:rgba(239,68,68,0.3);">Examen final ORNI</span>
            ` : ''}
            ${isEsti221 && formation.lessonNumber && formation.lessonNumber <= totalEsti221 ? `
              <span class="ocfo-progression-pill" style="border-color:rgba(16,185,129,0.4); color:#10b981; background:rgba(16,185,129,0.12);">${formation.code} · ${formation.lessonNumber} / ${totalEsti221}</span>
            ` : ''}
            ${isEsti221 && formation.isFinalEvaluation ? `
              <span class="ocfo-badge-eval" style="display:inline-block; padding:0.2rem 0.65rem; font-size:0.75rem; background:rgba(16,185,129,0.2); color:#10b981; border:1px solid rgba(16,185,129,0.4);">Examen final (${totalEsti221} leçons)</span>
            ` : ''}
            <span class="status-badge ${isAvailable ? 'status-available' : 'status-dev'}">${formation.status}</span>
            ${isDone ? '<span class="status-badge status-available">✓ Validée</span>' : ''}
            <span style="font-size:0.75rem; color:var(--text-muted); margin-left:auto;">⏳ ${formation.duration}</span>
          </div>

          <h1 class="lesson-h1">${formation.title}</h1>
          ${formation.subtitle ? `<div class="lesson-subtitle">${formation.subtitle}</div>` : ''}
          ${formation.articlesRange ? `
            <div style="margin-top:0.5rem;">
              <span class="legal-tag">Articles concernés : ${formation.articlesRange}</span>
            </div>
          ` : ''}
        </header>

        ${isAvailable ? `
          <!-- Objectif Pédagogique -->
          <section class="objective-box" aria-label="Objectif pédagogique">
            <div class="box-icon">🎯</div>
            <div>
              <div class="box-title">Objectif pédagogique</div>
              <div class="box-text">${formation.objective}</div>
            </div>
          </section>

          <!-- Introduction -->
          ${formation.introduction ? `
          <section class="content-article" aria-label="Introduction">
            <div class="section-title">Introduction</div>
            <div class="section-body">${formation.introduction}</div>
          </section>
          ` : ''}

          <!-- Bloc Vidéo Pédagogique (si présent) -->
          ${formation.video ? `
            <section class="video-pedagogical-box" aria-label="Vidéo pédagogique">
              <div class="video-box-header">
                <div class="video-box-title">🎬 ${formation.video.title}</div>
                ${formation.video.duration ? `<span class="video-duration-tag">⏱️ ${formation.video.duration}</span>` : ''}
              </div>
              ${formation.video.description ? `
                <p class="video-box-intro">${formation.video.description}</p>
              ` : ''}

              <div id="videoPlayerMount" class="video-player-mount"></div>

              ${formation.video.keyPoints && formation.video.keyPoints.length > 0 ? `
                <div class="video-keypoints-card">
                  <div class="video-keypoints-title">📌 À retenir :</div>
                  <ul class="video-keypoints-list">
                    ${formation.video.keyPoints.map(kp => `<li>${kp}</li>`).join('')}
                  </ul>
                </div>
              ` : ''}
            </section>
          ` : ''}

          <!-- Contenu Détaillé -->
          <section class="content-article" aria-label="Contenu détaillé">
            ${formation.contentSections.map(sec => `
              <div class="content-sub-block">
                <h2 class="section-title">${sec.title}</h2>
                <div class="section-body">${sec.text}</div>
              </div>
            `).join('')}
          </section>

          <!-- Illustration / Composant Interactif Dédié -->
          <section id="interactiveWidgetSlot" aria-label="Illustration interactive"></section>

          <!-- Exemple Pratique -->
          ${formation.practicalExample ? `
            <section class="case-study-box" aria-label="Exemple pratique">
              <div class="box-icon">⚡</div>
              <div>
                <div class="box-title">${typeof formation.practicalExample === 'object' && formation.practicalExample.title ? formation.practicalExample.title : 'Exemple pratique (Exemple pédagogique)'}</div>
                <div class="box-text">${typeof formation.practicalExample === 'object' ? formation.practicalExample.text : formation.practicalExample}</div>
              </div>
            </section>
          ` : ''}

          <!-- Point Important -->
          ${formation.importantPoint ? `
            <section class="important-box" aria-label="Point important">
              <div class="box-icon">⚠️</div>
              <div>
                <div class="box-title">${typeof formation.importantPoint === 'object' && formation.importantPoint.title ? formation.importantPoint.title : 'Règle incontournable & sécurité'}</div>
                <div class="box-text">${typeof formation.importantPoint === 'object' ? formation.importantPoint.text : formation.importantPoint}</div>
              </div>
            </section>
          ` : ''}

          <!-- Moteur de Quiz Dédié -->
          <section id="quizSlot" aria-label="Quiz d'évaluation"></section>

          <!-- Synthèse -->
          ${formation.synthesis ? `
            <section class="synthesis-box" aria-label="Synthèse">
              <div class="box-icon">💡</div>
              <div class="synthesis-content-wrapper">
                <div class="box-title">À retenir</div>
                <div class="box-text">${formation.synthesis}</div>
                ${formation.synthesisVisual ? `
                  <figure class="pedagogical-visual-card">
                    <div class="pedagogical-visual-frame" role="button" tabindex="0" aria-label="Agrandir l'infographie pédagogique" title="Cliquer pour agrandir le visuel">
                      <img src="${formation.synthesisVisual.src}" 
                           alt="${formation.synthesisVisual.alt}" 
                           class="pedagogical-visual-img"
                           loading="lazy"/>
                      <div class="visual-zoom-hint">
                        <span>🔍 Cliquer pour agrandir</span>
                      </div>
                    </div>
                    <figcaption class="pedagogical-visual-caption">
                      <div class="caption-title-row">
                        <span class="caption-badge">Infographie pédagogique</span>
                        <strong class="caption-title">${formation.synthesisVisual.caption}</strong>
                      </div>
                      ${formation.synthesisVisual.source ? `
                        <div class="caption-source">${formation.synthesisVisual.source}</div>
                      ` : ''}
                    </figcaption>
                  </figure>
                ` : ''}
              </div>
            </section>
          ` : ''}

        ` : `
          <!-- Contenu en cours de développement -->
          <section class="content-article" style="text-align:center; padding:3rem 1.5rem;">
            <div style="font-size:3rem; margin-bottom:1rem;">🔒</div>
            <h2 style="font-size:1.3rem; font-weight:700; margin-bottom:0.5rem;">Contenu en préparation</h2>
            <p style="color:var(--text-secondary); max-width:560px; margin:0 auto 1.5rem; line-height:1.5;">
              Cette formation dédiée au sujet <strong>${formation.title}</strong> fait actuellement l'objet d'une formalisation technique et réglementaire rigoureuse.
            </p>
            <div style="background:var(--bg-surface-elevated); border:1px solid var(--border-medium); border-radius:var(--radius-md); padding:1.25rem; max-width:560px; margin:0 auto; text-align:left;">
              <div style="font-weight:700; font-size:0.85rem; color:var(--electric-blue); margin-bottom:0.35rem;">Cadre réglementaire de cette fiche :</div>
              <div style="font-size:0.82rem; color:var(--text-muted);">${formation.objective}</div>
            </div>
            <div style="margin-top:2rem;">
              <button class="btn-continue" onclick="location.hash='#/formations/${mod.id}'">
                ← Retour aux chapitres du Module ${mod.id}
              </button>
            </div>
          </section>
        `}

        <!-- Barre de navigation bas de leçon -->
        <div class="lesson-footer-nav">
          <div style="display:flex; gap:var(--space-2); flex-wrap:wrap;">
            ${isPyramide ? `
              <button class="btn-continue" onclick="location.hash='#/formations/A/pyramide-lois'" style="background:var(--bg-surface-elevated); color:var(--text-primary); border:1px solid var(--border-medium); cursor:pointer;">
                ← Sommaire des 4 leçons Pyramide
              </button>
            ` : isLie ? `
              <button class="btn-continue" onclick="location.hash='#/formations/A/rs-734-0'" style="background:var(--bg-surface-elevated); color:var(--text-primary); border:1px solid var(--border-medium);">
                ← Sommaire des 11 leçons LIE
              </button>
            ` : isOcfo ? `
              <button class="btn-continue" onclick="location.hash='#/formations/A/rs-734-2'" style="background:var(--bg-surface-elevated); color:var(--text-primary); border:1px solid var(--border-medium);">
                ← Sommaire des 8 leçons OCFo
              </button>
            ` : isOibt ? `
              <button class="btn-continue" onclick="location.hash='#/formations/A/rs-734-27'" style="background:var(--bg-surface-elevated); color:var(--text-primary); border:1px solid var(--border-medium);">
                ← Sommaire des 7 leçons OIBT
              </button>
            ` : isOrni ? `
              <button class="btn-continue" onclick="location.hash='#/formations/A/rs-814-710'" style="background:var(--bg-surface-elevated); color:var(--text-primary); border:1px solid var(--border-medium);">
                ← Sommaire des 7 leçons ORNI
              </button>
            ` : isEsti221 ? `
              <button class="btn-continue" onclick="location.hash='#/formations/E/esti-221'" style="background:var(--bg-surface-elevated); color:var(--text-primary); border:1px solid var(--border-medium);">
                ← Sommaire des 4 leçons ESTI 221
              </button>
            ` : `
              <button class="btn-continue" onclick="location.hash='#/formations/${mod.id}'" style="background:var(--bg-surface-elevated); color:var(--text-primary); border:1px solid var(--border-medium);">
                ← Retour au module
              </button>
            `}
            <button class="btn-continue" onclick="location.hash='#/progression'" style="background:var(--bg-surface-elevated); color:var(--text-primary); border:1px solid var(--border-medium);">
              Voir ma progression 📊
            </button>
          </div>

          ${nextRoute ? `
            <button class="btn-continue" id="btnNextLessonNav" onclick="if(window.scrollToTop) window.scrollToTop(); else { window.scrollTo(0,0); const c = document.getElementById('pageContainer'); if(c) c.scrollTop = 0; } location.hash='${nextRoute}';" style="display:inline-flex; align-items:center; gap:0.5rem; cursor:pointer;">
              <span>${nextLabel}</span>
            </button>
          ` : ''}
        </div>
      </div>
    `;

    // Insertion du lecteur vidéo (si présent)
    if (isAvailable && formation.video) {
      const videoMount = container.querySelector('#videoPlayerMount');
      if (videoMount) {
        videoMount.appendChild(createVideoPlayer(formation.video));
      }
    }

    // Insertion du widget interactif
    if (isAvailable && formation.interactiveWidget) {
      const slot = container.querySelector('#interactiveWidgetSlot');
      if (slot) {
        if (formation.interactiveWidget === 'pyramid-widget') {
          slot.appendChild(createPyramidWidget());
        } else if (formation.interactiveWidget === 'danger-widget') {
          slot.appendChild(createDangerWidget());
        } else if (formation.interactiveWidget === 'nibt-widget') {
          slot.appendChild(createNibtWidget());
        }
      }
    }

    // Initialisation du visuel interactif OCFo Annexe 4 (si présent dans le DOM)
    initOcfoAnnexe4Visual(container);

    // Insertion du quiz
    if (isAvailable && formation.quiz) {
      const quizSlot = container.querySelector('#quizSlot');
      if (quizSlot) {
        const quizEl = createQuizEngine(formation, () => {
          // Callback lors de la complétion
          if (window.updateHeaderXp) window.updateHeaderXp();
          // Si c'est Pyramide, LIE, OCFo, OIBT ou ORNI et qu'une leçon suivante existe, naviguer vers la suite ou le hub
          if (isPyramide) {
            if (nextRoute) {
              location.hash = nextRoute;
            } else {
              location.hash = '#/formations/A/pyramide-lois';
            }
          } else if (isLie) {
            if (nextRoute) {
              location.hash = nextRoute;
            } else {
              location.hash = '#/formations/A/rs-734-0';
            }
          } else if (isOcfo) {
            if (nextRoute) {
              location.hash = nextRoute;
            } else {
              location.hash = '#/formations/A/rs-734-2';
            }
          } else if (isOibt) {
            if (nextRoute) {
              location.hash = nextRoute;
            } else {
              location.hash = '#/formations/A/rs-734-27';
            }
          } else if (isOrni) {
            if (nextRoute) {
              location.hash = nextRoute;
            } else {
              location.hash = '#/formations/A/rs-814-710';
            }
          } else if (isEsti221) {
            if (nextRoute) {
              location.hash = nextRoute;
            } else {
              location.hash = '#/formations/E/esti-221';
            }
          } else {
            location.hash = `#/formations/${mod.id}`;
          }
        });
        quizSlot.appendChild(quizEl);
      }
    }

    // Gestion du zoom / agrandissement de l'infographie pédagogique
    const visualFrame = container.querySelector('.pedagogical-visual-frame');
    if (visualFrame && formation.synthesisVisual) {
      const openLightbox = () => {
        let modal = document.getElementById('visualLightboxModal');
        if (!modal) {
          modal = document.createElement('div');
          modal.id = 'visualLightboxModal';
          modal.className = 'visual-lightbox-backdrop';
          modal.innerHTML = `
            <div class="visual-lightbox-dialog" role="dialog" aria-modal="true" aria-label="${formation.synthesisVisual.caption}">
              <button class="visual-lightbox-close" aria-label="Fermer l'agrandissement">&times;</button>
              <img src="${formation.synthesisVisual.src}" alt="${formation.synthesisVisual.alt}" class="visual-lightbox-img" />
              <div class="visual-lightbox-caption">${formation.synthesisVisual.caption}</div>
            </div>
          `;
          document.body.appendChild(modal);

          const closeModal = () => {
            modal.classList.remove('active');
          };

          const closeBtn = modal.querySelector('.visual-lightbox-close');
          if (closeBtn) closeBtn.addEventListener('click', closeModal);
          modal.addEventListener('click', (e) => {
            if (e.target === modal) closeModal();
          });
        }
        modal.classList.add('active');
        const handleKey = (e) => {
          if (e.key === 'Escape') {
            modal.classList.remove('active');
            document.removeEventListener('keydown', handleKey);
          }
        };
        document.addEventListener('keydown', handleKey);
      };

      visualFrame.addEventListener('click', openLightbox);
      visualFrame.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openLightbox();
        }
      });
    }

    // Garantir que la nouvelle leçon s'affiche tout en haut dès la fin du rendu
    if (container) container.scrollTop = 0;
    window.scrollTo(0, 0);
    if (window.scrollToTop) window.scrollToTop(container);
    requestAnimationFrame(() => {
      if (container) container.scrollTop = 0;
      window.scrollTo(0, 0);
      if (window.scrollToTop) window.scrollToTop(container);
    });
    setTimeout(() => {
      if (container) container.scrollTop = 0;
      window.scrollTo(0, 0);
    }, 40);
  }


  // ==================== src/pages/progress-view.js ====================
  // Swiss Electrical Academy — Page Progression & Gamification (V1.1)
  // Progression globale, progression par module (A, B, N, E, F), XP et badges déblocables


  function renderProgressView(container) {
    const stats = ProgressionService.getGlobalProgress();
    const unlockedBadges = StorageService.getUnlockedBadges();

    container.innerHTML = `
      <header style="margin-bottom:2rem;">
        <h1 style="font-size:1.7rem; font-weight:800; color:var(--text-primary); margin-bottom:0.4rem;">
          Tableau de bord de votre progression
        </h1>
        <p style="color:var(--text-secondary); font-size:0.92rem;">
          Suivi de vos acquis, validation des chapitres normatifs et badges de compétences professionnelles.
        </p>
      </header>

      <!-- Cartes résumé -->
      <div class="progress-grid">
        <div class="metric-card" style="padding:1.25rem;">
          <span class="metric-label">Progression globale</span>
          <span class="metric-value" style="color:var(--electric-blue); font-size:2rem; margin:0.35rem 0;">
            ${stats.globalPercentageFormatted}
          </span>
          <div class="progress-bar-bg" style="height:6px;">
            <div class="progress-bar-fill" style="width:${stats.globalPercentage}%;"></div>
          </div>
        </div>

        <div class="metric-card" style="padding:1.25rem;">
          <span class="metric-label">Points d'expérience cumulés</span>
          <span class="metric-value" style="color:var(--warning); font-size:2rem; margin:0.35rem 0;">
            ⚡ ${stats.xp} XP
          </span>
          <span style="font-size:0.75rem; color:var(--text-muted);">Acquis par validation des quiz techniques</span>
        </div>

        <div class="metric-card" style="padding:1.25rem;">
          <span class="metric-label">Formations validées</span>
          <span class="metric-value" style="font-size:2rem; margin:0.35rem 0;">
            ${stats.completedFormations} / ${stats.totalFormations}
          </span>
          <span style="font-size:0.75rem; color:var(--text-muted);">Sur les formations actuellement disponibles</span>
        </div>
      </div>

      <!-- Détail par Module (A, B, N, E, F) (Section 23) -->
      <section style="margin-bottom:2.5rem;" aria-labelledby="modulesProgressHeading">
        <div class="section-heading" id="modulesProgressHeading">
          <span>📊</span> Progression détaillée par module officiel
        </div>
        <div style="display:flex; flex-direction:column; gap:0.85rem;">
          ${ACADEMY_MODULES.map(mod => {
            const modStats = ProgressionService.getModuleProgress(mod.id);
            const countLabelDetail = modStats.isInDevelopment
              ? `En préparation (0 sur ${modStats.catalogTotal})`
              : `${modStats.completedCount} sur ${modStats.totalAvailable}`;
            const percentLabel = modStats.isInDevelopment
              ? `0 %`
              : modStats.percentageFormatted;

            return `
              <div style="background:var(--bg-surface); border:1px solid var(--border-subtle); border-radius:var(--radius-md); padding:1.25rem; display:flex; flex-direction:column; gap:0.6rem;">
                <div style="display:flex; justify-content:space-between; align-items:center;">
                  <div style="display:flex; align-items:center; gap:0.75rem;">
                    <span class="module-code-badge badge-${mod.id}" style="width:32px; height:32px; font-size:0.95rem;">
                      ${mod.code}
                    </span>
                    <div>
                      <strong style="color:var(--text-primary); font-size:0.95rem;">Module ${mod.id} — ${mod.title}</strong>
                      <div style="font-size:0.75rem; color:var(--text-muted);">${mod.countLabel} ${modStats.isModuleCompleted ? '· <span style="color:#10b981; font-weight:700;">✓ Terminé</span>' : ''}</div>
                    </div>
                  </div>
                  <div style="text-align:right;">
                    <span style="font-weight:700; font-size:1.05rem; color:var(--text-primary);">${percentLabel}</span>
                    <div style="font-size:0.72rem; color:var(--text-muted);">${countLabelDetail}</div>
                  </div>
                </div>
                <div class="progress-bar-bg" style="height:6px;">
                  <div class="progress-bar-fill" style="width:${modStats.percentage}%;"></div>
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </section>

      <!-- Référentiel des Badges (Section 25) -->
      <section aria-labelledby="badgesHeading">
        <div class="section-heading" id="badgesHeading">
          <span>🏆</span> Badges de compétences (${stats.badgesCount} débloqués sur ${stats.totalBadgesCount})
        </div>
        <div class="badges-grid">
          ${OFFICIAL_BADGES.map(badge => {
            const isUnlocked = unlockedBadges.includes(badge.id);
            return `
              <div class="badge-card ${isUnlocked ? 'unlocked' : 'locked'}">
                <div class="badge-icon-box">${badge.icon}</div>
                <div>
                  <div class="badge-name">${badge.name}</div>
                  <div class="badge-desc">${badge.description}</div>
                  <div style="margin-top:0.4rem; font-size:0.7rem; font-weight:700; color:${isUnlocked ? 'var(--success)' : 'var(--text-muted)'};">
                    ${isUnlocked ? '✓ Débloqué' : '🔒 À débloquer'}
                  </div>
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </section>
    `;
  }


  // ==================== src/pages/trainer-view.js ====================
  // Swiss Electrical Academy — Espace Formateur Démonstration (V1.1)
  // Statistiques de cohorte, suivi des apprenants et tableau de bord pédagogique


  function renderTrainerView(container) {
    const { stats, students } = TRAINER_DEMO;

    container.innerHTML = `
      <header style="margin-bottom:2rem;">
        <div style="display:inline-block; font-size:0.75rem; font-weight:700; color:var(--electric-blue); background:var(--primary-subtle); padding:0.2rem 0.6rem; border-radius:var(--radius-sm); margin-bottom:0.5rem;">
          ESPACE FORMATEUR & ENTREPRISE
        </div>
        <h1 style="font-size:1.7rem; font-weight:800; color:var(--text-primary); margin-bottom:0.4rem;">
          Tableau de bord de suivi pédagogique
        </h1>
        <p style="color:var(--text-secondary); font-size:0.92rem;">
          Supervisez en temps réel l'avancement de vos apprentis et techniciens sur les prescriptions suisses.
        </p>
      </header>

      <!-- Métriques Clés de la cohorte (Section 27) -->
      <div class="trainer-stats-row">
        <div class="metric-card">
          <span class="metric-label">Apprenants suivis</span>
          <span class="metric-value" style="color:var(--electric-blue); font-size:1.8rem;">${stats.studentsCount}</span>
          <span style="font-size:0.72rem; color:var(--text-muted);">Inscrits dans votre groupe</span>
        </div>
        <div class="metric-card">
          <span class="metric-label">Progression moyenne</span>
          <span class="metric-value" style="font-size:1.8rem;">${stats.avgProgress}%</span>
          <span style="font-size:0.72rem; color:var(--text-muted);">Sur l'ensemble des modules</span>
        </div>
        <div class="metric-card">
          <span class="metric-label">Quiz validés</span>
          <span class="metric-value" style="color:var(--warning); font-size:1.8rem;">${stats.quizzesCompleted}</span>
          <span style="font-size:0.72rem; color:var(--text-muted);">Évaluations terminées</span>
        </div>
        <div class="metric-card">
          <span class="metric-label">Taux de réussite</span>
          <span class="metric-value" style="color:var(--success); font-size:1.8rem;">${stats.successRate}%</span>
          <span style="font-size:0.72rem; color:var(--text-muted);">Score moyen aux quiz</span>
        </div>
      </div>

      <!-- Tableau des Apprenants -->
      <section aria-labelledby="studentsTableHeading" style="margin-bottom:2.5rem;">
        <div class="section-heading" id="studentsTableHeading">
          <span>👥</span> Suivi individuel des apprenants
        </div>
        <div class="trainer-table-wrapper">
          <table class="trainer-table">
            <thead>
              <tr>
                <th>Apprenant</th>
                <th>Progression</th>
                <th>Dernière activité</th>
                <th>Score moyen</th>
                <th>Statut</th>
              </tr>
            </thead>
            <tbody>
              ${students.map(s => `
                <tr>
                  <td><strong>${s.name}</strong></td>
                  <td style="min-width:140px;">
                    <div style="display:flex; align-items:center; gap:0.5rem;">
                      <div class="progress-bar-bg" style="flex:1; height:6px;">
                        <div class="progress-bar-fill" style="width:${s.progress}%;"></div>
                      </div>
                      <span style="font-size:0.78rem; font-weight:700;">${s.progress}%</span>
                    </div>
                  </td>
                  <td style="color:var(--text-secondary);">${s.lastActivity}</td>
                  <td><strong style="color:${s.score >= 80 ? 'var(--success)' : 'var(--warning)'};">${s.score}%</strong></td>
                  <td>
                    <span class="status-badge status-available" style="font-size:0.7rem;">${s.status}</span>
                  </td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </section>

      <!-- Évolutions futures LMS (Section 27 & 66) -->
      <section style="background:var(--bg-surface); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:1.75rem;">
        <h2 style="font-size:1.15rem; font-weight:700; color:var(--text-primary); margin-bottom:0.5rem;">
          🚀 Évolutions LMS Entreprise & École
        </h2>
        <p style="font-size:0.85rem; color:var(--text-secondary); line-height:1.55; margin-bottom:1rem;">
          Cette démonstration préfigure la version LMS connectée. L'architecture technique est conçue pour intégrer prochainement :
        </p>
        <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(220px, 1fr)); gap:0.85rem;">
          <div style="background:var(--bg-app); padding:0.85rem; border-radius:var(--radius-sm); font-size:0.82rem; border:1px solid var(--border-subtle);">
            📁 <strong>Gestion des cohortes</strong> : Création de classes d'apprentissage et assignation de modules spécifiques.
          </div>
          <div style="background:var(--bg-app); padding:0.85rem; border-radius:var(--radius-sm); font-size:0.82rem; border:1px solid var(--border-subtle);">
            📜 <strong>Certificats officiels</strong> : Génération automatisée d'attestations de formation continue conformes à l'OIBT art. 8.
          </div>
          <div style="background:var(--bg-app); padding:0.85rem; border-radius:var(--radius-sm); font-size:0.82rem; border:1px solid var(--border-subtle);">
            📊 <strong>Exports statistiques</strong> : Rapports PDF et CSV pour le suivi des obligations légales de formation.
          </div>
        </div>
      </section>
    `;
  }


  // ==================== src/pages/profile-view.js ====================
  // Swiss Electrical Academy — Page Profil Apprenant (V1.1)
  // Identité, avatar, statistiques personnelles, gestion du thème et persistance


  function renderProfileView(container) {
    const stats = ProgressionService.getGlobalProgress();
    const currentTheme = StorageService.getTheme();

    container.innerHTML = `
      <div class="profile-card">
        <div class="profile-user-header">
          <div class="profile-large-avatar">${DEFAULT_USER.avatar}</div>
          <div>
            <h1 style="font-size:1.4rem; font-weight:800; color:var(--text-primary); margin-bottom:0.2rem;">
              ${DEFAULT_USER.name}
            </h1>
            <div style="font-size:0.85rem; color:var(--electric-blue); font-weight:600;">
              ${DEFAULT_USER.role}
            </div>
            <div style="font-size:0.75rem; color:var(--text-muted); margin-top:0.2rem;">
              ${DEFAULT_USER.level}
            </div>
          </div>
        </div>

        <!-- Métriques Apprenant -->
        <div style="display:grid; grid-template-columns:repeat(3, 1fr); gap:0.75rem; background:var(--bg-app); border:1px solid var(--border-subtle); border-radius:var(--radius-md); padding:1rem; text-align:center;">
          <div>
            <div style="font-size:1.4rem; font-weight:800; color:var(--electric-blue);">${stats.globalPercentageFormatted}</div>
            <div style="font-size:0.7rem; color:var(--text-muted); text-transform:uppercase;">Progression</div>
          </div>
          <div>
            <div style="font-size:1.4rem; font-weight:800; color:var(--warning);">⚡ ${stats.xp}</div>
            <div style="font-size:0.7rem; color:var(--text-muted); text-transform:uppercase;">XP Total</div>
          </div>
          <div>
            <div style="font-size:1.4rem; font-weight:800; color:var(--success);">🏆 ${stats.badgesCount}</div>
            <div style="font-size:0.7rem; color:var(--text-muted); text-transform:uppercase;">Badges</div>
          </div>
        </div>

        <!-- Préférences d'affichage & Thème (Sections 29, 30, 50) -->
        <div>
          <h2 style="font-size:0.95rem; font-weight:700; color:var(--text-primary); margin-bottom:0.65rem;">
            Thème visuel (Par défaut : Sombre natif)
          </h2>
          <div style="display:grid; grid-template-columns:repeat(3, 1fr); gap:0.65rem;" id="profileThemeButtons">
            <button class="btn-quiz-action ${currentTheme === 'dark' ? '' : 'inactive-theme'}" style="padding:0.65rem; font-size:0.82rem;" data-theme-val="dark">
              🌙 Sombre
            </button>
            <button class="btn-quiz-action ${currentTheme === 'light' ? '' : 'inactive-theme'}" style="padding:0.65rem; font-size:0.82rem;" data-theme-val="light">
              ☀️ Clair
            </button>
            <button class="btn-quiz-action ${currentTheme === 'system' ? '' : 'inactive-theme'}" style="padding:0.65rem; font-size:0.82rem;" data-theme-val="system">
              💻 Système
            </button>
          </div>
        </div>

        <!-- Réinitialisation des données locales pour tests -->
        <div style="border-top:1px solid var(--border-subtle); padding-top:1.25rem;">
          <h3 style="font-size:0.85rem; font-weight:700; color:var(--text-muted); margin-bottom:0.5rem; text-transform:uppercase;">
            Données locales (localStorage)
          </h3>
          <p style="font-size:0.78rem; color:var(--text-muted); line-height:1.45; margin-bottom:0.85rem;">
            Toutes vos données (progrès, quiz, XP, badges) sont stockées localement dans votre navigateur sans cookie publicitaire.
          </p>
          <button class="btn-quiz-action" style="background:var(--danger-bg); color:var(--danger); border:1px solid rgba(239, 68, 68, 0.3); width:100%;" id="btnResetProgress">
            🗑️ Réinitialiser ma progression locale
          </button>
        </div>
      </div>
    `;

    // Gestion des boutons de thème
    container.querySelectorAll('#profileThemeButtons button').forEach(btn => {
      btn.addEventListener('click', () => {
        const selected = btn.getAttribute('data-theme-val');
        StorageService.setTheme(selected);

        // Appliquer au DOM et synchroniser le bouton d'en-tête
        if (typeof window.applyAppTheme === 'function') {
          window.applyAppTheme(selected, true);
        } else {
          if (selected === 'system') {
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            document.documentElement.setAttribute('data-theme', prefersDark ? 'dark' : 'light');
          } else {
            document.documentElement.setAttribute('data-theme', selected);
          }
        }

        // Re-render la vue profil pour refléter le bouton actif
        renderProfileView(container);
      });
    });

    // Réinitialiser
    const btnReset = container.querySelector('#btnResetProgress');
    if (btnReset) {
      btnReset.addEventListener('click', () => {
        if (confirm('Voulez-vous vraiment réinitialiser l\'ensemble de votre progression locale et vos XP ?')) {
          localStorage.clear();
          StorageService.setTheme(currentTheme);
          alert('Progression réinitialisée.');
          if (window.updateHeaderXp) window.updateHeaderXp();
          location.hash = '#/';
        }
      });
    }
  }


  // ==================== src/main.js ====================
  // Swiss Electrical Academy — Point d'entrée applicatif (V2.0)
  // Initialisation du Shell, Enregistrement PWA Service Worker et Routeur Hash sans rechargement


  // Désactiver la restauration automatique de défilement du navigateur pour les navigations SPA
  if (typeof history !== 'undefined' && 'scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
  }

  function scrollToTop(container) {
    const target = container || document.getElementById('pageContainer') || document.querySelector('.main-content');
    if (target) {
      target.scrollTop = 0;
      if (typeof target.scrollTo === 'function') {
        try {
          target.scrollTo({ top: 0, left: 0, behavior: 'instant' });
        } catch (e) {
          target.scrollTop = 0;
        }
      }
    }
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0);
    }
    if (typeof document !== 'undefined') {
      if (document.documentElement) document.documentElement.scrollTop = 0;
      if (document.body) document.body.scrollTop = 0;
    }
  }
  if (typeof window !== 'undefined') {
    window.scrollToTop = scrollToTop;
  }

  function initSEA() {
    const appRoot = document.getElementById('app');
    if (!appRoot) return;
    if (appRoot.children.length > 0) return; // Déjà initialisé

    // Migration et déduplication automatique des données de progression
    try {
      ProgressionService.migrateProgressionData();
    } catch (e) {
      console.warn('[SEA] Erreur migration progression :', e);
    }

    // Création du shell de navigation
    const appContainer = document.createElement('div');
    appContainer.className = 'app-container';
    appRoot.appendChild(appContainer);

    setupNavigation(appContainer, (route) => {
      location.hash = `#${route}`;
    });

    const pageContainer = document.getElementById('pageContainer');

    // Enregistrement du Service Worker PWA (uniquement sur http/https, évite les erreurs sur file://)
    if ('serviceWorker' in navigator && location.protocol !== 'file:') {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('./sw.js')
          .then((reg) => {
            console.log('[SEA] Service Worker enregistré avec succès :', reg.scope);
            reg.update();
          })
          .catch((err) => console.warn('[SEA] Échec enregistrement Service Worker :', err));
      });

      let isRefreshing = false;
      navigator.serviceWorker.addEventListener('controllerchange', () => {
        if (!isRefreshing) {
          isRefreshing = true;
          window.location.reload();
        }
      });
    }

    // Routeur Hash sans rechargement
    function handleRouting() {
      // Normaliser le hash (ex: "#/formations/A/rs-734-2/chapitre-1" -> "/formations/A/rs-734-2/chapitre-1")
      const hash = window.location.hash.slice(1) || '/';
      const cleanPath = hash.split('?')[0];
      const segments = cleanPath.split('/').filter(Boolean);

      // Faire défiler immédiatement la page vers le haut à chaque changement de route
      scrollToTop(pageContainer);
      requestAnimationFrame(() => scrollToTop(pageContainer));

      // Mise à jour de la surbrillance dans les barres de menu
      updateActiveNav(cleanPath);

      // Règle absolue (Section 39) : Interdiction absolue des anciennes routes basées sur C
      if (segments[0] === 'formations' && segments[1] === 'C') {
        console.warn('[Router] Route Module C interdite. Redirection vers Module N (NIBT).');
        location.hash = '#/formations/N';
        return;
      }

      // 1. Accueil
      if (segments.length === 0 || cleanPath === '/') {
        renderDashboard(pageContainer);
        return;
      }

      // 2. Formations (liste globale)
      if (segments[0] === 'formations' && segments.length === 1) {
        renderDashboard(pageContainer);
        return;
      }

      // 3. Vue Module (ex: /formations/A, /formations/B, /formations/N, /formations/E, /formations/F)
      if (segments[0] === 'formations' && segments.length === 2) {
        const moduleId = segments[1].toUpperCase();
        renderModuleView(pageContainer, moduleId);
        return;
      }

      // 3bis. Parcours dédié Pyramide des lois (Hub des 4 leçons) : /formations/A/pyramide-lois ou /formations/A/pyramide
      if (segments[0] === 'formations' && segments.length === 3 && (segments[2].toLowerCase() === 'pyramide-lois' || segments[2].toLowerCase() === 'pyramide' || segments[2].toLowerCase() === 'a00')) {
        renderPyramideParcoursView(pageContainer);
        return;
      }

      // 4. Parcours dédié RS 734.0 (Hub des 11 leçons LIE) : /formations/A/rs-734-0 ou /formations/A/lie
      if (segments[0] === 'formations' && segments.length === 3 && (segments[2].toLowerCase() === 'rs-734-0' || segments[2].toLowerCase() === 'lie')) {
        renderLieParcoursView(pageContainer);
        return;
      }

      // 4ter. Parcours dédié RS 734.27 (Hub des 7 leçons OIBT) : /formations/A/rs-734-27 ou /formations/A/oibt
      if (segments[0] === 'formations' && segments.length === 3 && (segments[2].toLowerCase() === 'rs-734-27' || segments[2].toLowerCase() === 'oibt' || segments[2].toLowerCase() === 'rs-734-27-oibt')) {
        renderOibtParcoursView(pageContainer);
        return;
      }

      // 4quater. Parcours dédié RS 814.710 (Hub des 7 leçons ORNI) : /formations/A/rs-814-710 ou /formations/A/orni
      if (segments[0] === 'formations' && segments.length === 3 && (segments[2].toLowerCase() === 'rs-814-710' || segments[2].toLowerCase() === 'orni' || segments[2].toLowerCase() === 'rs-814-710-orni')) {
        renderOrniParcoursView(pageContainer);
        return;
      }

      // 4bis. Parcours dédié RS 734.2 (Hub des 7 chapitres OCFo) : /formations/A/RS-734-2 ou /formations/A/rs-734-2
      if (segments[0] === 'formations' && segments.length === 3 && (segments[2].toLowerCase() === 'rs-734-2' || segments[2].toLowerCase() === 'ocfo')) {
        renderOcfoParcoursView(pageContainer);
        return;
      }

      // 4quinquies. Parcours dédié Directive ESTI 221 (Hub des 4 leçons) : /formations/E/esti-221 ou /formations/E/esti221
      if (segments[0] === 'formations' && segments.length === 3 && segments[1].toUpperCase() === 'E' && (segments[2].toLowerCase() === 'esti-221' || segments[2].toLowerCase() === 'esti221')) {
        renderEsti221ParcoursView(pageContainer);
        return;
      }

      // 5. Vue Chapitre ou Leçon
      if (segments[0] === 'formations' && segments.length >= 3) {
        const moduleId = segments[1].toUpperCase();

        // Sous-routes pour le parcours Pyramide des lois (ex: /formations/A/pyramide-lois/pyr-01 ou /lecon-1)
        if (segments.length >= 4 && (segments[2].toLowerCase() === 'pyramide-lois' || segments[2].toLowerCase() === 'pyramide' || segments[2].toLowerCase() === 'a00')) {
          const slug = segments[3].toLowerCase();
          let targetId = slug;
          if (slug === 'evaluation-finale' || slug === 'examen' || slug === 'final') {
            targetId = 'pyr-evaluation-finale';
          } else if (slug === 'lecon-1' || slug === 'pyr-1' || slug === 'pyr-01' || slug === 'chapitre-1') {
            targetId = 'pyr-01';
          } else if (slug === 'lecon-2' || slug === 'pyr-2' || slug === 'pyr-02' || slug === 'chapitre-2') {
            targetId = 'pyr-02';
          } else if (slug === 'lecon-3' || slug === 'pyr-3' || slug === 'pyr-03' || slug === 'chapitre-3') {
            targetId = 'pyr-03';
          } else if (slug === 'lecon-4' || slug === 'pyr-4' || slug === 'pyr-04' || slug === 'chapitre-4') {
            targetId = 'pyr-04';
          }
          renderLessonView(pageContainer, moduleId, targetId);
          return;
        }

        // Sous-routes pour le parcours RS 734.0 (ex: /formations/A/rs-734-0/chapitre-1 ou /lecon-1)
        if (segments.length >= 4 && (segments[2].toLowerCase() === 'rs-734-0' || segments[2].toLowerCase() === 'lie')) {
          const slug = segments[3].toLowerCase();
          let targetId = slug.startsWith('rs-734-0-') ? slug : `rs-734-0-${slug}`;
          if (slug === 'evaluation-finale' || slug === 'examen') {
            targetId = 'rs-734-0-evaluation-finale';
          } else if (slug.startsWith('chapitre-')) {
            const chapPart = slug.replace('chapitre-', '');
            const romanMap = { 'i': '1', 'ii': '2', 'iii': '3', 'iiia': '4', 'iiib': '5', 'iiic': '6', 'iv': '7', 'v': '8', 'vi': '9', 'vii': '10', 'viii': '11' };
            const mappedNum = romanMap[chapPart] || chapPart;
            targetId = `rs-734-0-lecon-${mappedNum}`;
          }
          renderLessonView(pageContainer, moduleId, targetId);
          return;
        }

        // Sous-routes pour le parcours RS 734.2 (ex: /formations/A/rs-734-2/chapitre-1)
        if (segments.length >= 4 && (segments[2].toLowerCase() === 'rs-734-2' || segments[2].toLowerCase() === 'ocfo')) {
          const slug = segments[3].toLowerCase();
          let targetId = slug.startsWith('rs-734-2-') ? slug : `rs-734-2-${slug}`;
          if (slug === 'evaluation-finale' || slug === 'examen') {
            targetId = 'rs-734-2-evaluation-finale';
          } else if (slug === 'annexes' || slug === 'annexes-1-4' || slug === 'chapitre-8' || slug === 'lecon-8') {
            targetId = 'rs-734-2-annexes';
          }
          renderLessonView(pageContainer, moduleId, targetId);
          setTimeout(() => {
            initOcfoAnnexe4Visual(pageContainer);
          }, 50);
          return;
        }

        // Sous-routes pour le parcours RS 734.27 (ex: /formations/A/rs-734-27/lecon-1 ou /lecon-2)
        if (segments.length >= 4 && (segments[2].toLowerCase() === 'rs-734-27' || segments[2].toLowerCase() === 'oibt' || segments[2].toLowerCase() === 'rs-734-27-oibt')) {
          const slug = segments[3].toLowerCase();
          let targetId = slug.startsWith('rs-734-27-') ? slug : `rs-734-27-${slug}`;
          if (slug === 'evaluation-finale' || slug === 'examen') {
            targetId = 'rs-734-27-evaluation-finale';
          } else if (slug.startsWith('chapitre-')) {
            const chapPart = slug.replace('chapitre-', '');
            targetId = `rs-734-27-lecon-${chapPart}`;
          } else if (slug === 'annexe' || slug === 'annexes') {
            targetId = 'rs-734-27-lecon-7';
          }
          renderLessonView(pageContainer, moduleId, targetId);
          return;
        }

        // Sous-routes pour le parcours RS 814.710 (ex: /formations/A/rs-814-710/lecon-1 ou /lecon-2)
        if (segments.length >= 4 && (segments[2].toLowerCase() === 'rs-814-710' || segments[2].toLowerCase() === 'orni' || segments[2].toLowerCase() === 'rs-814-710-orni')) {
          const slug = segments[3].toLowerCase();
          let targetId = slug.startsWith('rs-814-710-') ? slug : `rs-814-710-${slug}`;
          if (slug === 'evaluation-finale' || slug === 'examen') {
            targetId = 'rs-814-710-evaluation-finale';
          } else if (slug.startsWith('chapitre-')) {
            const chapPart = slug.replace('chapitre-', '');
            targetId = `rs-814-710-lecon-${chapPart}`;
          }
          renderLessonView(pageContainer, moduleId, targetId);
          return;
        }

        // Sous-routes pour le parcours ESTI 221 (ex: /formations/E/esti-221/lecon-1 ou /lecon-2)
        if (segments.length >= 4 && segments[1].toUpperCase() === 'E' && (segments[2].toLowerCase() === 'esti-221' || segments[2].toLowerCase() === 'esti221')) {
          const slug = segments[3].toLowerCase();
          let targetId = slug.startsWith('esti-221-') ? slug : `esti-221-${slug}`;
          if (slug === 'evaluation-finale' || slug === 'examen') {
            targetId = 'esti-221-evaluation-finale';
          } else if (slug.startsWith('lecon-')) {
            const numPart = slug.replace('lecon-', '');
            targetId = `esti-221-lecon-${numPart}`;
          }
          renderLessonView(pageContainer, moduleId, targetId);
          return;
        }

        const formationId = segments.length >= 4 ? segments[segments.length - 1] : segments[2];
        renderLessonView(pageContainer, moduleId, formationId);
        setTimeout(() => {
          initOcfoAnnexe4Visual(pageContainer);
        }, 50);
        return;
      }

      // 6. Progression
      if (segments[0] === 'progression') {
        renderProgressView(pageContainer);
        return;
      }

      // 7. Espace Formateur
      if (segments[0] === 'formateur') {
        renderTrainerView(pageContainer);
        return;
      }

      // 8. Profil
      if (segments[0] === 'profil') {
        renderProfileView(pageContainer);
        return;
      }

      // Fallback : Redirection Accueil
      renderDashboard(pageContainer);
    }

    window.addEventListener('hashchange', () => {
      handleRouting();
      scrollToTop(pageContainer);
      requestAnimationFrame(() => scrollToTop(pageContainer));
    });
    handleRouting();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initSEA);
  } else {
    initSEA();
  }


  // Expose core services globally
  if (typeof window !== 'undefined') {
    window.StorageService = StorageService;
    window.ProgressionService = ProgressionService;
    window.ACADEMY_MODULES = ACADEMY_MODULES;
    window.OFFICIAL_BADGES = OFFICIAL_BADGES;
    window.PYRAMIDE_LOIS_INFO = PYRAMIDE_LOIS_INFO;
    window.findFormation = findFormation;
    window.renderDashboard = renderDashboard;
    window.renderModuleView = renderModuleView;
    window.renderLessonView = renderLessonView;
    window.renderPyramideParcoursView = renderPyramideParcoursView;
    window.renderLieParcoursView = renderLieParcoursView;
    window.renderOcfoParcoursView = renderOcfoParcoursView;
    window.renderOibtParcoursView = renderOibtParcoursView;
    window.renderOrniParcoursView = renderOrniParcoursView;
    window.renderEsti221ParcoursView = renderEsti221ParcoursView;
    window.ESTI_221_INFO = ESTI_221_INFO;
    window.renderProgressView = renderProgressView;
    window.renderTrainerView = renderTrainerView;
    window.renderProfileView = renderProfileView;
  }

})();
