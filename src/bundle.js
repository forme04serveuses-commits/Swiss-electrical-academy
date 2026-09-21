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

  // Informations officielles et structure en 7 chapitres de la RS 734.2 (OCFo)
  const RS_734_2_INFO = {
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
  const ACADEMY_MODULES = [
    // --------------------------------------------------------------------------
    // MODULE A — Dispositions légales
    // --------------------------------------------------------------------------
    {
      id: "A",
      code: "A",
      title: "Dispositions légales",
      countLabel: "17 formations",
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
        // ----------------------------------------------------------------------
        // LIE — Leçon 1 : Principes fondamentaux, Courant faible vs Fort & Câblage (Art. 1 à 15d)
        // ----------------------------------------------------------------------
        {
          id: "rs-734-0-lie",
          routeId: "rs-734-0-lie",
          code: "RS 734.0 - LIE",
          title: "Art. 1-15 — Principes, courant faible vs fort & câblage",
          subtitle: "Champ d'application, surveillance fédérale, installations intérieures et règle du câblage souterrain",
          status: "Disponible",
          duration: "8 min",
          tag: "Loi fédérale",
          xpReward: 30,
          objective: "Distinguer juridiquement les installations à faible courant et à fort courant selon le critère légal du danger (Art. 2), définir le cadre des installations intérieures (Art. 14) et appliquer la règle légale du câblage souterrain avec le facteur de surcoût maximal de 3.0 (Art. 15c).",
          introduction: `Adoptée le 24 juin 1902, la <strong>Loi sur les installations électriques (LIE — RS 734.0)</strong> constitue le socle législatif de toute l'électrotechnique en Suisse. Elle place l'établissement et l'exploitation des installations sous la haute surveillance de la Confédération et fixe les distinctions fondamentales entre courant faible, courant fort, installations intérieures et réseau de transport.`,
          video: {
            id: "vid-lie-principes",
            title: "À regarder — La loi sur l'électricité et ses principes fondateurs",
            description: "Cette vidéo pédagogique présente la Loi sur les installations électriques (LIE — RS 734.0), le cadre légal de protection des personnes, les installations intérieures (Art. 14) et la conciliation entre sécurité et progrès technique.",
            duration: "1 min 57 s",
            src: "./public/media/videos/module-a/VID_20260918_LIE.mp4",
            keyPoints: [
              "La LIE (RS 734.0) garantit la protection des personnes et des choses contre les dangers de l'électricité sous la haute surveillance de la Confédération.",
              "La distinction juridique entre faible et fort courant est fondée exclusivement sur le critère du danger (Art. 2 LIE).",
              "L'installation intérieure désigne les ouvrages à l'intérieur des bâtiments utilisant des tensions autorisées (Art. 14 LIE).",
              "Les frais occasionnés par le croisement ou le voisinage de lignes sont supportés en proportion de leur importance économique, sans droit d'antériorité (Art. 5 et 15 LIE)."
            ]
          },
          contentSections: [
            {
              title: "1. Haute surveillance et critère légal du danger (Art. 1 & 2 LIE)",
              text: `<p style="margin-bottom:0.75rem; line-height:1.6;">
  L'<strong>Art. 1 LIE</strong> soumet l'établissement et l'exploitation des installations à faible et à fort courant à la haute surveillance de la Confédération, le Conseil fédéral édictant les ordonnances d'exécution nécessaires.
  </p>
  <p style="margin-bottom:0.75rem; line-height:1.6;">
  La distinction entre faible courant et fort courant repose juridiquement sur un critère unique : <strong>le danger pour les personnes ou les choses</strong> (Art. 2) :
  </p>
  <div style="overflow-x:auto; margin:0.75rem 0 1rem;">
  <table class="thresholds-table">
  <thead>
  <tr>
  <th style="min-width:180px;">Catégorie légale</th>
  <th>Définition selon l'Art. 2 LIE</th>
  <th>Arbitrage en cas de doute</th>
  </tr>
  </thead>
  <tbody>
  <tr>
  <td><strong>Installations à faible courant</strong><br/><span style="font-size:0.78rem; color:var(--text-muted);">(Art. 2 al. 1)</span></td>
  <td>Installations qui produisent ou utilisent normalement des courants <strong>n'offrant aucun danger</strong> pour les personnes ou les choses (téléphonie, signalisation, réseaux informatiques).</td>
  <td rowspan="2" style="vertical-align:middle; text-align:center;">
  <strong>DETEC</strong><br/>
  <span style="font-size:0.8rem; color:var(--text-muted);">Département fédéral de l'environnement, des transports, de l'énergie et de la communication<br/>(statue en dernière instance, Art. 2 al. 3)</span>
  </td>
  </tr>
  <tr>
  <td><strong>Installations à fort courant</strong><br/><span style="font-size:0.78rem; color:var(--text-muted);">(Art. 2 al. 2)</span></td>
  <td>Installations qui produisent ou utilisent des courants présentant dans certaines circonstances <strong>un danger pour les personnes ou les choses</strong> (BT, MT, HT).</td>
  </tr>
  </tbody>
  </table>
  </div>`
            },
            {
              title: "2. Installations intérieures et terrain privé (Art. 13 & 14 LIE)",
              text: `<p style="margin-bottom:0.75rem; line-height:1.6;">
  L'<strong>Art. 14 LIE</strong> définit précisément les « installations intérieures » :
  </p>
  <div style="background:var(--bg-surface-elevated); border-left:4px solid var(--electric-blue); padding:0.85rem 1rem; border-radius:0 8px 8px 0; margin-bottom:0.85rem; font-size:0.92rem; line-height:1.6;">
  « On entend par <strong>installations intérieures</strong> les ouvrages établis à l'intérieur des maisons, des locaux adjacents ou de leurs dépendances qui utilisent des tensions électriques ne dépassant pas celles autorisées par le Conseil fédéral. »
  </div>
  <p style="line-height:1.6;">
  En vertu de l'<strong>Art. 13 al. 2 LIE</strong>, les installations isolées n'empruntant que le terrain de celui qui les fait établir sont <strong>assimilées aux installations intérieures</strong> si elles respectent les tensions autorisées et ne risquent pas de causer de perturbations ou de dangers par suite de la proximité d'autres installations.
  </p>`
            },
            {
              title: "3. Voisinage de lignes et absence de droit d'antériorité (Art. 15 LIE)",
              text: `<p style="margin-bottom:0.75rem; line-height:1.6;">
  Lorsque des lignes à courant fort et à courant faible se côtoient ou se croisent (voisinage immédiat), l'<strong>Art. 15 LIE</strong> impose des règles strictes de sécurité technique et de partage des coûts :
  </p>
  <ul style="margin:0 0 0.85rem 1.25rem; line-height:1.6; color:var(--text-secondary);">
  <li><strong>Décision en cas de désaccord :</strong> Si aucune entente ne peut s'établir quant aux mesures techniques à prendre, le <strong>DETEC décide</strong> (Art. 15 al. 2).</li>
  <li><strong>Répartition des frais :</strong> Les frais sont supportés en commun et répartis en proportion de <strong>l'importance économique des lignes</strong> (Art. 15 al. 3 & 4).</li>
  <li><strong>Règle essentielle :</strong> Il n'y a <em>pas lieu de rechercher laquelle des lignes a été établie la première</em> (aucun privilège d'antériorité).</li>
  <li><strong>Non-application :</strong> Ces règles de voisinage ne s'appliquent pas aux installations intérieures (Art. 15 al. 6).</li>
  </ul>`
            },
            {
              title: "4. Obligation de câblage souterrain & facteur de surcoût 3.0 (Art. 15c LIE)",
              text: `<p style="margin-bottom:0.75rem; line-height:1.6;">
  Introduit pour moderniser le réseau et préserver les paysages suisses, l'<strong>Art. 15c LIE</strong> fixe un principe fondamental pour la distribution électrique :
  </p>
  <div style="background:var(--bg-surface-elevated); border:1px solid var(--border-medium); border-radius:8px; padding:1rem; margin-bottom:0.85rem;">
  <div style="display:flex; align-items:center; gap:0.5rem; margin-bottom:0.5rem; font-weight:700; color:var(--electric-blue);">
  <span>🔌 Règle légale du câblage souterrain (< 220 kV)</span>
  </div>
  <p style="font-size:0.92rem; line-height:1.6; margin-bottom:0.5rem;">
  Toute ligne (50 Hz) du réseau de distribution d'une <strong>tension nominale inférieure à 220 kV</strong> doit impérativement être réalisée sous forme de <strong>ligne souterraine</strong> si cela est possible techniquement et que les coûts totaux ne dépassent pas un <strong>facteur de surcoût</strong> donné par rapport à une ligne aérienne.
  </p>
  <p style="font-size:0.92rem; line-height:1.6; margin:0;">
  ⚖️ <strong>Plafond légal :</strong> Le facteur de surcoût se monte à <strong>3.0 au maximum</strong> (Art. 15c al. 2). Au-delà, une ligne aérienne peut être admise à moins qu'un tiers ne prenne en charge le surcoût.
  </p>
  </div>`
            }
          ],
          practicalExample: "Un distributeur planifie le raccordement moyenne tension 16 kV d'un éco-quartier. Une ligne aérienne coûterait 100'000 CHF, tandis que l'enfouissement en câble souterrain est chiffré à 240'000 CHF. Le ratio de coût est de 240'000 / 100'000 = 2.4. Ce facteur de 2.4 étant inférieur au plafond légal de 3.0 (Art. 15c LIE), le gestionnaire de réseau est légalement tenu de réaliser la ligne en souterrain.",
          importantPoint: "En cas de doute sur le classement d'une installation en courant faible ou fort, c'est le DETEC qui statue en dernière instance (Art. 2 al. 3). Lors du voisinage de lignes, aucun droit d'antériorité ne protège la première ligne construite pour le partage des frais (Art. 15 al. 4).",
          synthesis: "La LIE RS 734.0 régit toutes les installations électriques suisses sous l'égide de la Confédération. Le critère légal de dangerosité délimite le courant faible du courant fort (arbitrage DETEC). Les installations intérieures sont définies par l'Art. 14, et le réseau de distribution < 220 kV doit obligatoirement être enfoui si le surcoût ne dépasse pas un facteur de 3.0 (Art. 15c).",
          synthesisVisual: {
            src: "./public/media/images/module-a/infographie_lie_art1_15.jpg",
            alt: "Infographie synthétique en 6 volets sur la LIE (Art. 1 à 15) : 1) Classification faible vs fort courant selon le danger, 2) Haute surveillance fédérale et arbitrage du DETEC, 3) Régime des installations intérieures, 4) Prévention des dangers par le Conseil fédéral, 5) Mesures techniques de sécurité de voisinage, 6) Répartition équitable des frais selon l'importance économique sans priorité au premier installé.",
            caption: "Figure A.2 — Synthèse visuelle : Classification, surveillance, installations intérieures, sécurité et répartition des frais (LIE Art. 1-15)",
            source: "Illustration originale — ELECBOOK"
          },
          quiz: [
            {
              id: "q_lie1_1",
              type: "single",
              question: "Selon l'Art. 2 de la LIE, quel est le critère juridique qui distingue une installation à faible courant d'une installation à fort courant ?",
              options: [
                "Le danger potentiel pour les personnes ou les choses",
                "La fréquence du courant (50 Hz vs continu)",
                "Le diamètre des conducteurs de phase",
                "Le caractère public ou privé du terrain traversé"
              ],
              correctAnswer: 0,
              explanation: "L'Art. 2 LIE dispose que les installations à faible courant n'offrent normalement aucun danger, alors que les installations à fort courant présentent dans certaines circonstances un danger pour les personnes ou les choses."
            },
            {
              id: "q_lie1_2",
              type: "single",
              question: "S'il y a doute au sujet du classement d'une installation électrique, quelle autorité fédérale statue en dernière instance ?",
              options: [
                "Le DETEC (Département fédéral de l'environnement, des transports, de l'énergie et de la communication)",
                "Le Conseil d'État cantonal",
                "La préfecture du district",
                "La commission communale d'urbanisme"
              ],
              correctAnswer: 0,
              explanation: "L'Art. 2 al. 3 de la LIE confère expressément au DETEC la compétence de statuer en dernière instance en cas de doute sur le classement d'une installation."
            },
            {
              id: "q_lie1_3",
              type: "single",
              question: "Selon l'Art. 15c al. 2 LIE, à combien se monte au maximum le facteur de surcoût pour obliger la réalisation d'une ligne de distribution (< 220 kV) sous forme souterraine ?",
              options: [
                "3.0 au maximum",
                "1.5 au maximum",
                "5.0 au maximum",
                "10.0 au maximum"
              ],
              correctAnswer: 0,
              explanation: "L'Art. 15c al. 2 LIE précise expressément : « Le facteur de surcoût se monte à 3.0 au maximum. »"
            },
            {
              id: "q_lie1_4",
              type: "single",
              question: "Lors de travaux de sécurisation pour voisinage de lignes (Art. 15 LIE), comment sont répartis les frais entre les entreprises intéressées ?",
              options: [
                "En proportion de l'importance économique des lignes, sans égard à l'antériorité",
                "Intégralement à la charge de la dernière ligne construite",
                "À 100% par le canton où se situe le croisement",
                "À parts égales entre tous les propriétaires riverains"
              ],
              correctAnswer: 0,
              explanation: "Selon l'Art. 15 al. 4 LIE, les frais sont répartis en proportion de l'importance économique des lignes, sans rechercher laquelle a été établie la première (aucun droit d'antériorité)."
            }
          ]
        },

        // ----------------------------------------------------------------------
        // LIE — Leçon 2 : Approbation des plans, Procédures & Délais légaux (Art. 15e à 18d)
        // ----------------------------------------------------------------------
        {
          id: "rs-734-0-lie-plans",
          routeId: "rs-734-0-lie-plans",
          code: "RS 734.0 - LIE",
          title: "Art. 16-18 — Approbation des plans, procédures & délais",
          subtitle: "Compétences ESTI/OFEN, enquête publique 30 jours, caducité 3 ans et zones réservées",
          status: "Disponible",
          duration: "6 min",
          tag: "Loi fédérale",
          xpReward: 30,
          objective: "Maîtriser la procédure fédérale d'approbation des plans d'installations électriques, identifier les rôles respectifs de l'ESTI et de l'OFEN, comprendre la primauté du droit fédéral sur le droit cantonal (Art. 16 al. 4) et retenir les délais légaux de mise à l'enquête et de caducité.",
          introduction: `Aucune installation à fort courant ou à faible courant sensible ne peut être construite ou modifiée sans une autorisation officielle préalable. La LIE instaure la <strong>procédure d'approbation des plans</strong>, conçue selon le principe de concentration des décisions pour éviter la dispersion des permis cantonaux.`,
          contentSections: [
            {
              title: "1. Autorités chargées de l'approbation des plans (Art. 16 LIE)",
              text: `<p style="margin-bottom:0.75rem; line-height:1.6;">
  En vertu de l'<strong>Art. 16 al. 1 LIE</strong>, une installation électrique à courant fort ne peut être mise en place ou modifiée que si les plans du projet ont été approuvés par l'autorité compétente :
  </p>
  <ul style="margin:0 0 0.85rem 1.25rem; line-height:1.6; color:var(--text-secondary);">
  <li><strong>L'Inspection fédérale (ESTI) :</strong> Autorité d'approbation ordinaire pour les installations électriques à courant fort et faible (Art. 16 al. 2 let. a).</li>
  <li><strong>L'Office fédéral de l'énergie (OFEN) :</strong> Intervient dès lors que l'Inspection n'a pas réussi à régler les oppositions ou s'il existe des divergences non résolues entre autorités fédérales (Art. 16 al. 2 let. b et 16h al. 2).</li>
  <li><strong>L'autorité ferroviaire (OFT) :</strong> Compétente pour les installations destinées exclusivement ou principalement aux chemins de fer ou trolleybus.</li>
  </ul>`
            },
            {
              title: "2. Primauté du droit fédéral et effet de concentration (Art. 16 al. 3 & 4 LIE)",
              text: `<p style="margin-bottom:0.75rem; line-height:1.6;">
  La LIE applique le principe de <strong>concentration des autorisations</strong> au niveau fédéral :
  </p>
  <div style="background:var(--bg-surface-elevated); border:1px solid var(--border-medium); border-radius:8px; padding:1rem; margin-bottom:0.85rem;">
  <p style="margin-bottom:0.5rem; line-height:1.6;">
  ⚖️ <strong>Art. 16 al. 3 :</strong> « L'approbation des plans couvre toutes les autorisations requises par le droit fédéral. »
  </p>
  <p style="margin:0; line-height:1.6; color:var(--text-secondary);">
  ⚖️ <strong>Art. 16 al. 4 :</strong> « <strong>Aucune autorisation ni aucun plan relevant du droit cantonal ne sont requis.</strong> Le droit cantonal est pris en compte dans la mesure où il n'entrave pas de manière disproportionnée l'accomplissement des tâches de l'entreprise. »
  </p>
  </div>
  <p style="font-size:0.9rem; color:var(--text-muted); line-height:1.5;">
  Conséquence pratique : un projet électrique approuvé au niveau fédéral n'a pas besoin d'un permis de construire municipal ou cantonal.
  </p>`
            },
            {
              title: "3. Piquetage, mise à l'enquête 30 jours et caducité sous 3 ans (Art. 16c à 16i LIE)",
              text: `<div style="overflow-x:auto; margin:0.75rem 0 1rem;">
  <table class="thresholds-table">
  <thead>
  <tr>
  <th style="min-width:160px;">Étape de procédure</th>
  <th>Exigence légale de la LIE</th>
  <th>Délai strict</th>
  </tr>
  </thead>
  <tbody>
  <tr>
  <td><strong>Piquetage & gabarits</strong><br/><span style="font-size:0.78rem; color:var(--text-muted);">(Art. 16c)</span></td>
  <td>Marquage sur le terrain par piquetage et pose de gabarits pour les bâtiments avant l'enquête.</td>
  <td>Avant la mise à l'enquête</td>
  </tr>
  <tr>
  <td><strong>Mise à l'enquête publique</strong><br/><span style="font-size:0.78rem; color:var(--text-muted);">(Art. 16d al. 2 & 16f)</span></td>
  <td>Publication dans la feuille officielle des cantons et communes. Délai unique pour faire opposition.</td>
  <td><strong>30 jours</strong></td>
  </tr>
  <tr>
  <td><strong>Avis des cantons</strong><br/><span style="font-size:0.78rem; color:var(--text-muted);">(Art. 16d al. 1)</span></td>
  <td>Transmission du dossier aux cantons concernés pour préavis officiel.</td>
  <td><strong>3 mois</strong></td>
  </tr>
  <tr>
  <td><strong>Caducité de la décision</strong><br/><span style="font-size:0.78rem; color:var(--text-muted);">(Art. 16i al. 1)</span></td>
  <td>L'approbation devient caduque de plein droit si la réalisation du chantier n'a pas débuté.</td>
  <td><strong>3 ans</strong> après entrée en force</td>
  </tr>
  </tbody>
  </table>
  </div>`
            },
            {
              title: "4. Procédure simplifiée et zones réservées (Art. 17 & 18 LIE)",
              text: `<p style="margin-bottom:0.75rem; line-height:1.6;">
  L'<strong>Art. 17 LIE</strong> autorise une procédure simplifiée (sans mise à l'enquête publique) pour les chantiers provisoires (< 3 ans), les modifications mineures sans impact pour les tiers/environnement, et les plans de détail d'un projet déjà approuvé.
  </p>
  <p style="line-height:1.6;">
  L'<strong>Art. 18 & 18a LIE</strong> permet à l'OFEN de fixer des <strong>zones réservées</strong> pour de futures lignes >= 220 kV. La durée maximale initiale est de <strong>5 ans</strong>, prolongeable de <strong>3 ans au plus</strong>. Les propriétaires touchés ont droit à une indemnité pleine et entière (Art. 18d).
  </p>`
            }
          ],
          practicalExample: "Une société de réseau obtient l'approbation des plans de l'ESTI pour construire une sous-station 50 kV le 10 juin 2023. En raison de retards internes, le chantier n'a toujours pas débuté au 11 juin 2026. Conformément à l'Art. 16i al. 1 LIE, la décision est caduque : l'entreprise ne peut pas entamer les travaux et doit déposer une nouvelle demande d'approbation.",
          importantPoint: "L'approbation fédérale des plans évince totalement les permis de construire cantonaux et communaux (Art. 16 al. 4). Si une opposition ne peut pas être réglée à l'amiable par l'ESTI, le dossier est obligatoirement transmis à l'OFEN pour décision formelle (Art. 16 al. 2 let. b).",
          synthesis: "L'approbation des plans est délivrée par l'ESTI (ou l'OFEN en cas d'opposition). Elle couvre l'ensemble des autorisations fédérales sans permis cantonal (Art. 16 al. 4). L'enquête publique dure 30 jours, et l'autorisation devient caduque si les travaux ne démarrent pas sous 3 ans (Art. 16i).",
          quiz: [
            {
              id: "q_lie2_1",
              type: "single",
              question: "En vertu de l'Art. 16 al. 2 let. b LIE, quelle autorité fédérale est chargée d'approuver les plans lorsque l'Inspection (ESTI) n'a pas réussi à régler les oppositions ?",
              options: [
                "L'OFEN (Office fédéral de l'énergie)",
                "Le Tribunal de district",
                "Le service cantonal des ponts et chaussées",
                "L'Association des propriétaires fonciers"
              ],
              correctAnswer: 0,
              explanation: "L'Art. 16 al. 2 let. b LIE confie expressément à l'OFEN l'approbation des plans pour les installations où l'Inspection n'a pas réussi à régler les oppositions ou supprimer les divergences."
            },
            {
              id: "q_lie2_2",
              type: "single",
              question: "Selon l'Art. 16 al. 4 LIE, quelle est la règle concernant les autorisations relevant du droit cantonal pour un projet électrique approuvé ?",
              options: [
                "Aucune autorisation ni aucun plan relevant du droit cantonal ne sont requis",
                "Un permis de construire cantonal reste toujours obligatoire en parallèle",
                "L'autorisation cantonale prévaut toujours sur la décision fédérale",
                "Une simple taxe communale remplace l'enquête fédérale"
              ],
              correctAnswer: 0,
              explanation: "L'Art. 16 al. 4 LIE dispose formellement : « Aucune autorisation ni aucun plan relevant du droit cantonal ne sont requis. »"
            },
            {
              id: "q_lie2_3",
              type: "single",
              question: "Pendant combien de jours une demande ordinaire d'approbation des plans doit-elle être mise à l'enquête publique (Art. 16d al. 2 LIE) ?",
              options: [
                "30 jours",
                "10 jours",
                "60 jours",
                "90 jours"
              ],
              correctAnswer: 0,
              explanation: "Selon l'Art. 16d al. 2 LIE, la demande doit être publiée dans les organes officiels et mise à l'enquête pendant 30 jours."
            },
            {
              id: "q_lie2_4",
              type: "single",
              question: "Selon l'Art. 16i al. 1 LIE, dans quel délai la réalisation du projet de construction doit-elle débuter après l'entrée en force de la décision, sous peine de caducité ?",
              options: [
                "Dans les trois ans",
                "Dans les six mois",
                "Dans les dix ans",
                "Il n'existe aucune limite dans le temps"
              ],
              correctAnswer: 0,
              explanation: "L'Art. 16i al. 1 LIE stipule : « L'approbation des plans est caduque si la réalisation du projet de construction n'a pas commencé dans les trois ans qui suivent l'entrée en force de la décision. »"
            }
          ]
        },

        // ----------------------------------------------------------------------
        // LIE — Leçon 3 : Surveillance, Organes de contrôle & Installations intérieures (Art. 20 à 26a)
        // ----------------------------------------------------------------------
        {
          id: "rs-734-0-lie-controle",
          routeId: "rs-734-0-lie-controle",
          code: "RS 734.0 - LIE",
          title: "Art. 20-26 — Surveillance, organes de contrôle & installations intérieures",
          subtitle: "Responsabilité de l'exploitant, compétences OFT vs ESTI, recours au TAF et régime de l'Art. 26",
          status: "Disponible",
          duration: "5 min",
          tag: "Loi fédérale",
          xpReward: 30,
          objective: "Identifier à qui incombe la surveillance des installations (l'exploitant, Art. 20), distinguer les organes de contrôle fédéraux (OFT vs ESTI, Art. 21), maîtriser les voies de recours au Tribunal administratif fédéral (Art. 23) et comprendre l'articulation de l'Art. 26 pour les installations intérieures (fondement de l'OIBT).",
          introduction: `Pour garantir la sécurité et la fiabilité du réseau, la LIE organise les responsabilités opérationnelles : la surveillance quotidienne incombe à l'exploitant, l'État délègue les contrôles régaliens à des inspections officielles, et un mécanisme original régit les installations intérieures privées.`,
          contentSections: [
            {
              title: "1. Devoir légal de surveillance de l'exploitant (Art. 20 LIE)",
              text: `<p style="margin-bottom:0.75rem; line-height:1.6;">
  L'<strong>Art. 20 al. 1 LIE</strong> pose le principe cardinal de la maintenance :
  </p>
  <div style="background:var(--bg-surface-elevated); border-left:4px solid var(--electric-blue); padding:0.85rem 1rem; border-radius:0 8px 8px 0; margin-bottom:0.85rem; font-size:0.92rem; line-height:1.6;">
  « <strong>La surveillance des installations électriques et de leur bon état d'entretien incombe à l'exploitant</strong> (propriétaire, locataire, etc.). »
  </div>
  <p style="line-height:1.6; color:var(--text-secondary);">
  Ce devoir est permanent : l'exploitant ne peut pas se retrancher derrière l'absence de passage d'un inspecteur pour justifier le délabrement d'une installation électrique.
  </p>`
            },
            {
              title: "2. Répartition des organes de contrôle fédéraux (Art. 21 & 22 LIE)",
              text: `<p style="margin-bottom:0.75rem; line-height:1.6;">
  Le contrôle de l'exécution des prescriptions de sécurité est confié par la loi à deux entités bien distinctes :
  </p>
  <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(260px, 1fr)); gap:1rem; margin-bottom:1rem;">
  <div style="background:var(--bg-surface-elevated); border:1px solid var(--border-medium); border-radius:8px; padding:1rem;">
  <div style="font-weight:700; color:var(--electric-blue); margin-bottom:0.35rem;">🚆 Office fédéral des transports (OFT)</div>
  <div style="font-size:0.85rem; color:var(--text-secondary); line-height:1.5;">
  • Installations spécifiques aux chemins de fer<br/>
  • Installations nécessaires à la sécurité et fiabilité ferroviaire<br/>
  • Parties et systèmes électriques des véhicules ferroviaires (Art. 21 let. a).
  </div>
  </div>
  <div style="background:var(--bg-surface-elevated); border:1px solid var(--border-medium); border-radius:8px; padding:1rem;">
  <div style="font-weight:700; color:var(--electric-blue); margin-bottom:0.35rem;">⚡ Inspection fédérale (ESTI)</div>
  <div style="font-size:0.85rem; color:var(--text-secondary); line-height:1.5;">
  • Toutes les autres installations électriques à courant fort et faible<br/>
  • Surveillance du marché des matériels électriques (Art. 21 let. b).
  </div>
  </div>
  </div>`
            },
            {
              title: "3. Recours au TAF et arbitrage du DETEC (Art. 23 & 24 LIE)",
              text: `<p style="margin-bottom:0.75rem; line-height:1.6;">
  Contre les décisions de l'ESTI ou de l'OFT (ordres de mise en conformité, interdictions d'exploiter, décisions d'approbation des plans), un <strong>recours peut être formé devant le Tribunal administratif fédéral (TAF)</strong> à Saint-Gall (Art. 23 LIE).
  </p>
  <p style="line-height:1.6; color:var(--text-secondary);">
  En cas de désaccord direct entre les deux organes de contrôle (OFT et ESTI), c'est le <strong>DETEC</strong> qui tranche (Art. 24 LIE).
  </p>`
            },
            {
              title: "4. Le régime de l'Art. 26 : Fondement de l'OIBT",
              text: `<p style="margin-bottom:0.75rem; line-height:1.6;">
  L'<strong>Art. 26 LIE</strong> instaure une dissociation juridique fondamentale :
  </p>
  <div style="background:var(--bg-surface-elevated); border:1px solid var(--border-medium); border-radius:8px; padding:1rem; margin-bottom:0.85rem;">
  <p style="line-height:1.6; margin-bottom:0.5rem;">
  1. Le contrôle fédéral direct de l'ESTI <strong>ne s'étend pas aux installations intérieures</strong> privées.
  </p>
  <p style="line-height:1.6; margin:0; color:var(--electric-blue); font-weight:600;">
  2. En contrepartie, le FOURNISSEUR D'ÉNERGIE ÉLECTRIQUE est tenu de JUSTIFIER que les installations intérieures sont contrôlées d'une autre façon.
  </p>
  </div>
  <p style="font-size:0.88rem; color:var(--text-muted); line-height:1.5;">
  Cet article a permis au Conseil fédéral d'édicter l'OIBT (RS 734.27), qui charge les distributeurs de tenir le registre des contrôles périodiques réalisés par des électriciens et organismes de contrôle indépendants certifiés.
  </p>`
            }
          ],
          practicalExample: "Un distributeur d'électricité adresse à un propriétaire d'atelier un avis d'invitation à produire le Rapport de Sécurité (RaSi / RS) pour le contrôle périodique décennal. Cette obligation du distributeur d'exiger et de vérifier la preuve du contrôle découle directement de l'Art. 26 LIE.",
          importantPoint: "La surveillance incombe légalement à l'exploitant (Art. 20). Les décisions de l'ESTI et de l'OFT peuvent faire l'objet d'un recours devant le Tribunal administratif fédéral (TAF, Art. 23 LIE).",
          synthesis: "L'exploitant est légalement garant du bon entretien de ses installations (Art. 20). La surveillance étatique est déléguée à l'OFT (ferroviaire) et à l'ESTI (général), avec recours au TAF (Art. 23). Pour les installations intérieures, l'Art. 26 oblige les fournisseurs d'énergie à vérifier qu'un contrôle périodique certifié est effectué.",
          quiz: [
            {
              id: "q_lie3_1",
              type: "single",
              question: "À qui incombe légalement la surveillance des installations électriques et de leur bon état d'entretien selon l'Art. 20 al. 1 LIE ?",
              options: [
                "À l'exploitant (propriétaire, locataire, etc.)",
                "Exclusivement à l'inspecteur cantonal du travail",
                "À l'entreprise ayant posé les câbles il y a 30 ans",
                "À la police municipale"
              ],
              correctAnswer: 0,
              explanation: "L'Art. 20 al. 1 LIE dispose clairement : « La surveillance des installations électriques et de leur bon état d'entretien incombe à l'exploitant (propriétaire, locataire, etc.). »"
            },
            {
              id: "q_lie3_2",
              type: "single",
              question: "Quel organisme fédéral est compétent pour le contrôle des installations électriques spécifiques aux chemins de fer (Art. 21 let. a LIE) ?",
              options: [
                "L'Office fédéral des transports (OFT)",
                "L'Office fédéral de l'environnement (OFEV)",
                "Le Secrétariat d'État à l'économie (SECO)",
                "L'Office fédéral de la santé publique (OFSP)"
              ],
              correctAnswer: 0,
              explanation: "Selon l'Art. 21 let. a LIE, le contrôle des installations spécifiques aux chemins de fer et des véhicules ferroviaires est confié à l'Office fédéral des transports (OFT)."
            },
            {
              id: "q_lie3_3",
              type: "single",
              question: "Devant quelle juridiction peut-on former un recours contre les décisions de l'ESTI ou des autorités de plans selon l'Art. 23 LIE ?",
              options: [
                "Le Tribunal administratif fédéral (TAF)",
                "Le tribunal civil de première instance",
                "La chambre de conciliation cantonale",
                "La Cour européenne de justice"
              ],
              correctAnswer: 0,
              explanation: "L'Art. 23 LIE dispose : « Un recours peut être formé devant le Tribunal administratif fédéral contre les décisions des autorités chargées de l'approbation des plans [...] et contre celles des organes de contrôle. »"
            },
            {
              id: "q_lie3_4",
              type: "single",
              question: "Selon l'Art. 26 LIE, que doit faire le fournisseur d'énergie électrique concernant les installations intérieures privées ?",
              options: [
                "Justifier qu'elles sont contrôlées d'une autre façon",
                "Réaliser lui-même gratuitement tous les travaux de câblage",
                "Interdire toute utilisation d'appareils de plus de 1000 W",
                "Se substituer au propriétaire pour assumer l'entretien"
              ],
              correctAnswer: 0,
              explanation: "L'Art. 26 LIE prévoit que si le contrôle étatique du chapitre IV ne s'étend pas aux installations intérieures, « le fournisseur d'énergie électrique sera tenu de justifier qu'elles sont contrôlées d'une autre façon » (fondement de l'OIBT)."
            }
          ]
        },

        // ----------------------------------------------------------------------
        // LIE — Leçon 4 : Responsabilité causale de l'exploitant & Annonce d'accidents (Art. 27 à 41)
        // ----------------------------------------------------------------------
        {
          id: "rs-734-0-lie-responsabilite",
          routeId: "rs-734-0-lie-responsabilite",
          code: "RS 734.0 - LIE",
          title: "Art. 27-41 — Responsabilité causale de l'exploitant & annonce d'accidents",
          subtitle: "Responsabilité causale objective, motifs libératoires stricts, déclaration immédiate et nullité des décharges",
          status: "Disponible",
          duration: "6 min",
          tag: "Loi fédérale",
          xpReward: 30,
          objective: "Comprendre le régime de responsabilité civile causale objective pesant sur l'exploitant (Art. 27 LIE), maîtriser les trois motifs libératoires stricts, intégrer l'exclusion de la force majeure en cas de non-respect de l'Art. 3 (Art. 33), appliquer l'obligation de dénoncer immédiatement tout accident corporel (Art. 32) et retenir la nullité des décharges de responsabilité (Art. 39).",
          introduction: `Le droit suisse protège vigoureusement le public contre les périls de l'électricité. La LIE instaure une <strong>responsabilité causale objective</strong> : en cas d'accident corporel ou de dommage matériel causé par une installation, l'exploitant est présumé responsable, même sans faute de sa part.`,
          contentSections: [
            {
              title: "1. La responsabilité causale objective de l'exploitant (Art. 27 LIE)",
              text: `<p style="margin-bottom:0.75rem; line-height:1.6;">
  L'<strong>Art. 27 al. 1 LIE</strong> énonce la règle clé :
  </p>
  <div style="background:var(--bg-surface-elevated); border-left:4px solid var(--electric-blue); padding:0.85rem 1rem; border-radius:0 8px 8px 0; margin-bottom:0.85rem; font-size:0.92rem; line-height:1.6;">
  « Lorsqu'une personne a été <strong>tuée ou blessée</strong> par l'exploitation d'une installation électrique à fort ou à faible courant, privée ou publique, <strong>l'exploitant est responsable du dommage causé</strong> [...]. »
  </div>
  <p style="line-height:1.6; color:var(--text-secondary);">
  L'al. 2 étend la même responsabilité aux <strong>dommages causés aux choses</strong> (hors perturbations d'exploitation). La victime n'a pas à prouver une négligence : la seule exploitation de l'installation engage la responsabilité.
  </p>`
            },
            {
              title: "2. Les 3 seuls motifs d'exonération de l'exploitant (Art. 27 al. 1 in fine LIE)",
              text: `<p style="margin-bottom:0.75rem; line-height:1.6;">
  L'exploitant ne peut échapper à sa responsabilité qu'en apportant la <strong>preuve stricte</strong> que l'accident est dû exclusivement à l'une de ces trois causes :
  </p>
  <ul style="margin:0 0 0.85rem 1.25rem; line-height:1.6; color:var(--text-secondary);">
  <li><strong>1. Une force majeure :</strong> Événement naturel imprévisible, extraordinaire et irrésistible.</li>
  <li><strong>2. La faute ou négligence d'un tiers :</strong> Action extérieure imprévisible ayant provoqué le dommage.</li>
  <li><strong>3. La faute LOURDE de la victime :</strong> Comportement téméraire ou violation délibérée des règles élémentaires de survie par la personne lésée.</li>
  </ul>`
            },
            {
              title: "3. Exclusion de la force majeure en cas de non-conformité (Art. 33 LIE)",
              text: `<div style="background:rgba(239, 68, 68, 0.1); border:1px solid rgba(239, 68, 68, 0.3); border-radius:8px; padding:1rem; margin-bottom:0.85rem;">
  <div style="font-weight:700; color:#F87171; margin-bottom:0.4rem;">⚠️ Art. 33 LIE — Règle capitale :</div>
  <p style="margin:0; font-size:0.92rem; line-height:1.6; color:var(--text-primary);">
  « L'exception de force majeure dans le sens de la loi <strong>ne pourra être invoquée</strong> lorsque le dommage causé aurait pu être prévenu par des <strong>ouvrages conformes aux prescriptions</strong> prévues à l'art. 3. »
  </p>
  </div>
  <p style="font-size:0.88rem; color:var(--text-muted); line-height:1.5;">
  Si un arbre touche une ligne pendant un orage mais que l'exploitant n'avait pas respecté les distances d'élagage réglementaires, il est privé du droit d'invoquer la force majeure !
  </p>`
            },
            {
              title: "4. Dénonciation sans délai de tout accident corporel (Art. 32 LIE)",
              text: `<p style="margin-bottom:0.75rem; line-height:1.6;">
  L'<strong>Art. 32 LIE</strong> impose une obligation stricte et immédiate :
  </p>
  <ul style="margin:0 0 0.85rem 1.25rem; line-height:1.6; color:var(--text-secondary);">
  <li>L'exploitant doit <strong>dénoncer sans délai à l'autorité locale</strong> tout accident corporel de quelque gravité ainsi que tout dommage important causé aux tiers (Art. 32 al. 1).</li>
  <li>L'autorité locale ouvre <strong>immédiatement une enquête officielle</strong> sur la cause et les conséquences, puis annonce au gouvernement cantonal qui en avise le <strong>DETEC</strong> (Art. 32 al. 2).</li>
  </ul>`
            },
            {
              title: "5. Nullité absolue des décharges de responsabilité (Art. 39 & 41 LIE)",
              text: `<p style="margin-bottom:0.75rem; line-height:1.6;">
  Selon l'<strong>Art. 39 LIE</strong>, sont <strong>sans valeur légale</strong> (nulles de plein droit) toutes les clauses contractuelles, règlements ou pancartes excluant ou limitant d'avance la responsabilité de l'exploitant.
  </p>
  <p style="line-height:1.6; color:var(--text-secondary);">
  L'<strong>Art. 41 LIE</strong> précise que le chapitre V de la LIE ne s'applique pas aux installations intérieures : celles-ci sont régies par la responsabilité du propriétaire d'ouvrage de l'<strong>art. 58 du Code des obligations (CO)</strong>.
  </p>`
            }
          ],
          practicalExample: "Un poseur d'affiches subit une électrisation par arc électrique à proximité d'un transformateur dont la grille de protection était rouillée et ouverte. L'exploitant prétendait s'exonérer grâce à un panneau « Accès interdit sous peine de décharge de toute responsabilité ». En application de l'Art. 39 LIE, cette décharge est nulle. De plus, selon l'Art. 33 LIE, l'exploitant ne peut invoquer aucun événement extérieur puisque son installation n'était pas conforme aux règles de sécurité de l'Art. 3.",
          importantPoint: "L'Art. 39 LIE interdit toute limitation de responsabilité par convention : les décharges sont nulles de plein droit. Tout accident corporel doit être dénoncé sans délai à l'autorité pour enquête officielle (Art. 32 LIE).",
          synthesis: "La LIE instaure une responsabilité causale objective de l'exploitant (Art. 27). Seules la force majeure, la faute d'un tiers ou la faute lourde de la victime libèrent l'exploitant. La force majeure est inapplicable si les normes de sécurité n'étaient pas respectées (Art. 33). Tout accident corporel doit être dénoncé sans délai (Art. 32) et les clauses limitatives sont nulles (Art. 39).",
          quiz: [
            {
              id: "q_lie4_1",
              type: "single",
              question: "Quelle est la nature juridique de la responsabilité de l'exploitant selon l'Art. 27 al. 1 LIE lorsqu'une personne est blessée par une installation électrique ?",
              options: [
                "Une responsabilité causale objective (l'exploitant répond du dommage même sans faute)",
                "Une responsabilité pénale exclusivement réservée aux fabricants de câbles",
                "Une responsabilité morale sans obligation financière d'indemnisation",
                "Une responsabilité subsidiaire uniquement en cas de récidive"
              ],
              correctAnswer: 0,
              explanation: "L'Art. 27 LIE institue une responsabilité causale objective : la victime n'a pas à prouver de faute, la responsabilité de l'exploitant découle de l'exploitation de l'ouvrage."
            },
            {
              id: "q_lie4_2",
              type: "single",
              question: "Parmi les motifs suivants, lequel NE libère PAS l'exploitant selon l'Art. 27 al. 1 in fine LIE ?",
              options: [
                "La simple faute légère et involontaire de la victime",
                "La faute lourde de la personne qui a été tuée ou blessée",
                "La force majeure dûment établie",
                "La faute exclusive d'un tiers"
              ],
              correctAnswer: 0,
              explanation: "La loi exige la faute LOURDE de la victime pour libérer l'exploitant. Une simple imprudence ou faute légère de la victime ne suffit pas à dégager l'exploitant."
            },
            {
              id: "q_lie4_3",
              type: "single",
              question: "Selon l'Art. 33 LIE, quand l'exploitant est-il privé du droit d'invoquer la force majeure ?",
              options: [
                "Lorsque le dommage aurait pu être prévenu par des ouvrages conformes aux prescriptions de sécurité de l'Art. 3",
                "Dès que la facture d'électricité n'a pas été acquittée",
                "Lorsque l'accident s'est produit un dimanche ou jour férié",
                "Uniquement si l'installation a plus de 50 ans"
              ],
              correctAnswer: 0,
              explanation: "L'Art. 33 LIE dispose formellement que l'exception de force majeure ne peut pas être invoquée lorsque le dommage causé aurait pu être évité par des ouvrages conformes aux prescriptions prévues à l'Art. 3."
            },
            {
              id: "q_lie4_4",
              type: "single",
              question: "Quelle est la valeur juridique d'un règlement d'exploitation stipulant qu'une entreprise électrique décline d'avance toute responsabilité en cas de blessure (Art. 39 LIE) ?",
              options: [
                "Sans valeur légale (nul de plein droit)",
                "Totalement valable et opposable à toute victime",
                "Valable uniquement si le client a signé un contrat écrit",
                "Valable si le montant du dommage dépasse 100'000 CHF"
              ],
              correctAnswer: 0,
              explanation: "L'Art. 39 LIE dispose expressément : « Sont sans valeur légale les règlements, publications ou conventions spéciales qui excluraient ou limiteraient d'avance la responsabilité telle qu'elle résulte des dispositions de la présente loi. »"
            }
          ]
        },

        // ----------------------------------------------------------------------
        // LIE — Leçon 5 : Dispositions pénales, Amendes & Sanctions (Art. 55 à 57)
        // ----------------------------------------------------------------------
        {
          id: "rs-734-0-lie-penal",
          routeId: "rs-734-0-lie-penal",
          code: "RS 734.0 - LIE",
          title: "Art. 55-57 — Dispositions pénales, amendes & sanctions",
          subtitle: "Amende jusqu'à 100'000 CHF, réenclenchement illégal d'installations dangereuses, infractions CEM et autorités",
          status: "Disponible",
          duration: "5 min",
          tag: "Loi fédérale",
          xpReward: 30,
          objective: "Maîtriser le catalogue des infractions pénales de la LIE (Art. 55), connaître le montant des amendes pour actes intentionnels (jusqu'à 100'000 CHF), pour négligence (jusqu'à 20'000 CHF) et l'amende d'ordre (jusqu'à 5'000 CHF, Art. 56), identifier l'interdiction de réenclenchement d'une installation scellée et connaître les autorités pénales compétentes (OFEN, OFCOM, ESTI selon l'Art. 57 DPA).",
          introduction: `En matière d'électricité, les manquements délibérés peuvent causer des électrocutions ou des incendies dévastateurs. Pour protéger la collectivité, le législateur a doté la LIE d'un volet pénal sévère : amendes jusqu'à 100'000 CHF, répression de la négligence et poursuite administrative fédérale.`,
          contentSections: [
            {
              title: "1. Délit intentionnel : amende de 100'000 CHF au plus (Art. 55 al. 1 LIE)",
              text: `<p style="margin-bottom:0.75rem; line-height:1.6;">
  L'<strong>Art. 55 al. 1 LIE</strong> punit d'une <strong>amende de 100'000 francs au plus</strong> (sauf peine plus sévère du Code pénal) celui qui, intentionnellement :
  </p>
  <div style="background:var(--bg-surface-elevated); border:1px solid var(--border-medium); border-radius:8px; padding:1rem; margin-bottom:0.85rem;">
  <ul style="margin:0 0 0 1.25rem; line-height:1.7; color:var(--text-secondary); font-size:0.92rem;">
  <li><strong>a. Travaux sans approbation :</strong> Construit ou modifie une installation électrique sans avoir fait approuver les plans (Art. 16) ;</li>
  <li><strong>b. Réenclenchement illégal :</strong> Remet ou fait remettre en service <em>de son propre chef</em> une installation mise hors circuit pour cause de <strong>défectuosité dangereuse</strong> par l'office de contrôle ;</li>
  <li><strong>c. Mise sur le marché CEM non conforme :</strong> Importe, offre ou met à disposition un appareil ne remplissant pas les exigences de compatibilité électromagnétique ;</li>
  <li><strong>d. Utilisation CEM non conforme :</strong> Met en service ou utilise un appareil ou une installation fixe ne remplissant pas les exigences CEM.</li>
  </ul>
  </div>`
            },
            {
              title: "2. Répression de la négligence & amende d'entreprise (Art. 55 al. 2 & 2bis LIE)",
              text: `<p style="margin-bottom:0.75rem; line-height:1.6;">
  Même sans intention coupable, l'inobservation des règles de prudence est réprimée :
  </p>
  <ul style="margin:0 0 0.85rem 1.25rem; line-height:1.6; color:var(--text-secondary);">
  <li><strong>Négligence (Art. 55 al. 2) :</strong> Punie d'une amende de <strong>20'000 francs au plus</strong>.</li>
  <li><strong>Condamnation de l'entreprise (Art. 55 al. 2bis) :</strong> Lorsque l'amende n'excède pas 20'000 CHF et que l'enquête individuelle impliquerait des investigations disproportionnées, l'autorité peut renoncer à poursuivre les personnes physiques et <strong>condamner directement l'entreprise</strong> au paiement de l'amende (application de l'art. 7 DPA).</li>
  </ul>`
            },
            {
              title: "3. L'amende d'ordre de 5'000 CHF pour désobéissance (Art. 56 LIE)",
              text: `<p style="margin-bottom:0.75rem; line-height:1.6;">
  L'<strong>Art. 56 LIE</strong> sanctionne le refus d'obtempérer aux décisions de l'autorité :
  </p>
  <div style="background:var(--bg-surface-elevated); border-left:4px solid var(--electric-blue); padding:0.85rem 1rem; border-radius:0 8px 8px 0; margin-bottom:0.85rem; font-size:0.92rem; line-height:1.6;">
  Celui qui, en dépit d'un avertissement et sous menace de peine, ne se conforme pas à une disposition de la loi, à une ordonnance d'exécution ou à une décision officielle (sommation) est puni d'une <strong>amende d'ordre de 5'000 francs au plus</strong>.
  </div>
  <p style="font-size:0.88rem; color:var(--text-muted); line-height:1.5;">
  L'al. 2 réserve expressément les poursuites devant le juge pénal pour insoumission ou violence contre l'autorité (art. 285 et 286 du Code pénal suisse).
  </p>`
            },
            {
              title: "4. Autorités administratives compétentes de poursuite (Art. 57 LIE)",
              text: `<p style="margin-bottom:0.75rem; line-height:1.6;">
  La poursuite et le jugement des infractions pénales de la LIE s'effectuent selon la <strong>Loi fédérale sur le droit pénal administratif (DPA — RS 313.0)</strong> :
  </p>
  <div style="overflow-x:auto; margin:0.75rem 0 1rem;">
  <table class="thresholds-table">
  <thead>
  <tr>
  <th style="min-width:180px;">Domaine d'infraction</th>
  <th>Autorité de poursuite compétente</th>
  <th>Délégation possible</th>
  </tr>
  </thead>
  <tbody>
  <tr>
  <td><strong>Installations & réenclenchement</strong><br/><span style="font-size:0.78rem; color:var(--text-muted);">(Art. 55 al. 1 let. a & b)</span></td>
  <td><strong>OFEN</strong> (Office fédéral de l'énergie)</td>
  <td>Le DETEC peut déléguer l'instruction et le jugement à l'<strong>Inspection (ESTI)</strong>.</td>
  </tr>
  <tr>
  <td><strong>Appareils & CEM</strong><br/><span style="font-size:0.78rem; color:var(--text-muted);">(Art. 55 al. 1 let. c & d)</span></td>
  <td><strong>OFCOM</strong> (Office fédéral de la communication)</td>
  <td>Non délégué à l'ESTI (compétence télécoms / CEM).</td>
  </tr>
  <tr>
  <td><strong>Chemins de fer</strong><br/><span style="font-size:0.78rem; color:var(--text-muted);">(Art. 57 al. 4)</span></td>
  <td>Poursuite ouverte sur plainte de l'autorité de surveillance des chemins de fer (OFT).</td>
  <td>Régie par l'art. 88a de la loi sur les chemins de fer.</td>
  </tr>
  </tbody>
  </table>
  </div>`
            }
          ],
          practicalExample: "Un atelier de mécanique industrielle subit un contrôle d'inspection de l'ESTI. Un départ de tableau présente un risque immédiat d'incendie et d'électrocution. L'inspecteur pose des scellés et ordonne la coupure. Le directeur de l'atelier fait briser les scellés pour continuer le travail. Cet acte constitue une infraction pénale intentionnelle au titre de l'Art. 55 al. 1 let. b LIE, passible d'une amende de 100'000 CHF prononcée par l'OFEN / l'ESTI.",
          importantPoint: "Remettre en service de son propre chef une installation électrique mise hors circuit pour défectuosité dangereuse constitue un délit pénal puni d'une amende pouvant atteindre 100'000 CHF (Art. 55 al. 1 let. b). La négligence est punie de 20'000 CHF d'amende (Art. 55 al. 2).",
          synthesis: "La LIE punit d'une amende jusqu'à 100'000 CHF les infractions intentionnelles majeures (travaux sans approbation, remise en service illégale d'installations dangereuses, manquements CEM) et jusqu'à 20'000 CHF la négligence (Art. 55). Une amende d'ordre jusqu'à 5'000 CHF sanctionne le refus d'obtempérer (Art. 56). La poursuite est menée par l'OFEN et l'OFCOM selon la DPA (Art. 57).",
          quiz: [
            {
              id: "q_lie5_1",
              type: "single",
              question: "Quel est le montant maximal de l'amende pénale prévue à l'Art. 55 al. 1 LIE pour une infraction intentionnelle ?",
              options: [
                "100'000 francs",
                "10'000 francs",
                "5'000 francs",
                "500'000 francs"
              ],
              correctAnswer: 0,
              explanation: "L'Art. 55 al. 1 LIE prévoit expressément une amende de 100'000 francs au plus pour les infractions commises intentionnellement."
            },
            {
              id: "q_lie5_2",
              type: "single",
              question: "Quelle infraction précise est visée par l'Art. 55 al. 1 let. b de la LIE ?",
              options: [
                "Remettre en service de son propre chef une installation mise hors circuit pour dangerosité par l'office de contrôle",
                "Oublier d'éteindre les lampes d'un chantier le soir",
                "Poser un disjoncteur 10 A au lieu d'un disjoncteur 13 A",
                "Commander du matériel auprès d'un fournisseur étranger"
              ],
              correctAnswer: 0,
              explanation: "L'Art. 55 al. 1 let. b LIE punit expressément celui qui remet ou fait remettre en service de son propre chef une installation mise hors circuit par l'office de contrôle pour cause de défectuosité dangereuse."
            },
            {
              id: "q_lie5_3",
              type: "single",
              question: "À combien s'élève l'amende maximale en cas d'infraction commise par négligence selon l'Art. 55 al. 2 LIE ?",
              options: [
                "20'000 francs au plus",
                "1'000 francs au plus",
                "100'000 francs au plus",
                "Aucune amende n'est prévue pour simple négligence"
              ],
              correctAnswer: 0,
              explanation: "L'Art. 55 al. 2 LIE dispose formellement : « La négligence est punie d'une amende de 20 000 francs au plus. »"
            },
            {
              id: "q_lie5_4",
              type: "single",
              question: "En vertu de l'Art. 57 al. 1 let. a et al. 2 LIE, quelle autorité administrative est compétente pour la poursuite des infractions de l'Art. 55 al. 1 let. a et b, avec délégation possible à l'ESTI ?",
              options: [
                "L'Office fédéral de l'énergie (OFEN)",
                "Le Département fédéral de la défense",
                "L'Office fédéral de la topographie",
                "La chancellerie d'État cantonale"
              ],
              correctAnswer: 0,
              explanation: "L'Art. 57 al. 1 let. a LIE désigne l'OFEN comme autorité compétente pour les infractions aux installations (Art. 55 al. 1 let. a et b), avec faculté de délégation à l'Inspection (ESTI) accordée au DETEC (al. 2)."
            }
          ]
        },
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
          code: "RS 734.2 — Chapitre 1",
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
          code: "RS 734.2 — Chapitre 2",
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
          code: "RS 734.2 — Chapitre 3",
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
          code: "RS 734.2 — Chapitre 4",
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
          code: "RS 734.2 — Chapitre 5",
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
          code: "RS 734.2 — Chapitre 6",
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
          code: "RS 734.2 — Chapitre 7",
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
  function findFormation(moduleId, formationId) {
    const mod = ACADEMY_MODULES.find(m => m.id === moduleId);
    if (!mod) return null;

    // Aliases pour rétrocompatibilité et accès fluide
    const aliases = {
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

    // Calcul des statistiques de progression
    getProgressStats() {
      const completed = this.getCompletedLessons();
      const moduleStats = {};
      let totalFormations = 0;
      let completedFormations = 0;

      ACADEMY_MODULES.forEach(mod => {
        const modTotal = mod.formations.length;
        totalFormations += modTotal;
        const modCompleted = mod.formations.filter(f => completed.includes(f.id)).length;
        completedFormations += modCompleted;

        const percentage = modTotal > 0 ? Math.round((modCompleted / modTotal) * 100) : 0;
        moduleStats[mod.id] = {
          id: mod.id,
          title: mod.title,
          total: modTotal,
          completed: modCompleted,
          percentage
        };
      });

      const globalPercentage = totalFormations > 0 ? Math.round((completedFormations / totalFormations) * 100) : 0;

      return {
        globalPercentage,
        totalFormations,
        completedFormations,
        moduleStats,
        xp: this.getXp(),
        badgesCount: this.getUnlockedBadges().length,
        totalBadgesCount: OFFICIAL_BADGES.length
      };
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
      container.querySelector('#btnRestartQuiz').addEventListener('click', () => {
        currentIndex = 0;
        userAnswers = {};
        userMistakes = [];
        currentScore = 0;
        renderCurrentQuestion();
      });

      // Terminer
      container.querySelector('#btnFinishLesson').addEventListener('click', () => {
        if (onComplete) onComplete();
      });
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

      container.querySelector('#btnBackToScore').addEventListener('click', () => {
        renderFinalScore();
      });
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
      btnInstall.style.display = 'inline-flex';
    });

    btnInstall.addEventListener('click', async () => {
      if (!deferredPrompt) return;
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      console.log('[PWA] Choix utilisateur :', outcome);
      deferredPrompt = null;
      btnInstall.style.display = 'none';
    });

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
    const systemSchemeQuery = window.matchMedia('(prefers-color-scheme: dark)');
    systemSchemeQuery.addEventListener('change', (e) => {
      if (StorageService.getTheme() === 'system') {
        document.documentElement.setAttribute('data-theme', e.matches ? 'dark' : 'light');
      }
    });

    // Exposer globalement pour la vue profil
    window.applyAppTheme = function(theme, animate = false) {
      applyTheme(theme, animate);
    };

    // Toggle Sidebar sur mobile
    const sidebar = container.querySelector('#appSidebar');
    const btnToggleSidebar = container.querySelector('#btnToggleSidebar');
    btnToggleSidebar.addEventListener('click', () => {
      sidebar.classList.toggle('open');
    });

    // Profil click
    container.querySelector('#headerProfileBtn').addEventListener('click', () => {
      location.hash = '#/profil';
    });

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
        sidebar.classList.remove('open');
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
    const stats = StorageService.getProgressStats();
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
            <span class="metric-value" style="color:var(--electric-blue);">${stats.globalPercentage}%</span>
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
            const modStats = stats.moduleStats[mod.id] || { percentage: 0, completed: 0, total: mod.formations.length };
            return `
              <article class="module-card" data-module-id="${mod.id}">
                <div>
                  <div class="module-card-top">
                    <div class="module-code-badge badge-${mod.id}">
                      ${mod.code}
                    </div>
                    <span class="module-count-tag">${mod.countLabel}</span>
                  </div>
                  <h2 class="module-title">${mod.title}</h2>
                  <p class="module-desc">${mod.description}</p>
                </div>

                <div>
                  <div class="module-progress-wrapper">
                    <div class="progress-labels">
                      <span>Progression</span>
                      <span>${modStats.percentage}% (${modStats.completed}/${modStats.total})</span>
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
    container.querySelector('#btnResumeLearning').addEventListener('click', () => {
      location.hash = `#/formations/${lastActivity.moduleId}/${lastActivity.formationId}`;
    });

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

    const completed = StorageService.getCompletedLessons();
    const completedCount = mod.formations.filter(f => completed.includes(f.id)).length;
    const modPercentage = mod.formations.length > 0 ? Math.round((completedCount / mod.formations.length) * 100) : 0;

    // Si c'est le Module A, calculer les statistiques spécifiques au parcours RS 734.2
    const ocfoChapters = RS_734_2_INFO.chapters;
    const ocfoCompletedCount = ocfoChapters.filter(c => completed.includes(c.id)).length;
    const ocfoPercentage = Math.round((ocfoCompletedCount / ocfoChapters.length) * 100);

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
            <span>${modPercentage}% (${completedCount} sur ${mod.formations.length} validés)</span>
          </div>
          <div class="progress-bar-bg" style="height:8px;">
            <div class="progress-bar-fill" style="width: ${modPercentage}%;"></div>
          </div>
        </div>
      </header>

      ${moduleId === 'A' ? `
        <!-- Carte Parcours Structuré RS 734.2 — OCFo (Section 7) -->
        <section class="ocfo-featured-parcours-box" aria-labelledby="ocfoFeaturedTitle">
          <div class="ocfo-featured-top">
            <div style="display:flex; align-items:center; gap:0.75rem;">
              <span class="ocfo-featured-badge">PARCOURS OFFICIEL</span>
              <span class="ocfo-featured-code">RS 734.2 — OCFo</span>
            </div>
            <span class="ocfo-featured-stats">${ocfoCompletedCount} / 8 leçons · ${ocfoPercentage}%</span>
          </div>
          <h2 id="ocfoFeaturedTitle" class="ocfo-featured-title">Ordonnance sur les installations électriques à courant fort</h2>
          <p class="ocfo-featured-desc">
            Parcours complet restructuré fidèlement en 8 leçons (les 7 chapitres légaux et la Leçon 8 regroupant les Annexes 1 à 4).
            Des définitions fondamentales aux 5 règles vitales d'intervention, avec la visualisation interactive de l'Annexe 4.
          </p>
          <div class="progress-bar-bg" style="height:6px; margin-bottom:1rem;">
            <div class="progress-bar-fill" style="width: ${ocfoPercentage}%;"></div>
          </div>
          <div style="display:flex; gap:0.75rem; flex-wrap:wrap;">
            <button class="btn-continue" id="btnOpenOcfoHub" style="display:inline-flex; align-items:center; gap:0.5rem;">
              <span>Explorer les 8 leçons (0/8 → 8/8)</span>
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
            const isOcfo = formation.id.startsWith('rs-734-2-');

            return `
              <article class="formation-item-card ${isOcfo ? 'ocfo-card-accent' : ''}" data-formation-id="${formation.id}">
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

    // Clic sur le bouton du parcours OCFo
    const btnOpenOcfoHub = container.querySelector('#btnOpenOcfoHub');
    if (btnOpenOcfoHub) {
      btnOpenOcfoHub.addEventListener('click', () => {
        location.hash = '#/formations/A/rs-734-2';
      });
    }

    // Événements de clic sur chaque formation
    container.querySelectorAll('.formation-item-card').forEach(card => {
      card.addEventListener('click', () => {
        const formationId = card.getAttribute('data-formation-id');
        if (formationId.startsWith('rs-734-2-chapitre-')) {
          const chapNum = formationId.replace('rs-734-2-chapitre-', '');
          location.hash = `#/formations/A/rs-734-2/chapitre-${chapNum}`;
        } else if (formationId === 'rs-734-2-evaluation-finale') {
          location.hash = `#/formations/A/rs-734-2/evaluation-finale`;
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
    const completed = StorageService.getCompletedLessons();
    const chapters = RS_734_2_INFO.chapters;
    const completedCount = chapters.filter(c => completed.includes(c.id)).length;
    const percentage = Math.round((completedCount / chapters.length) * 100);
    const isFinalDone = completed.includes(RS_734_2_INFO.finalEvaluation.id);

    // Trouver le premier chapitre non validé pour le bouton "Continuer"
    let nextChapterSlug = 'chapitre-1';
    for (const c of chapters) {
      if (!completed.includes(c.id)) {
        nextChapterSlug = c.slug;
        break;
      }
    }
    if (completedCount === chapters.length && !isFinalDone) {
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
          <span class="ocfo-hub-tag">DROIT FÉDÉRAL SUISSE</span>
          <span class="ocfo-hub-ref">RS 734.2</span>
        </div>

        <div class="ocfo-hub-title-row">
          <div>
            <div class="ocfo-hub-short">OCFo</div>
            <h1 class="ocfo-hub-title">Ordonnance sur les installations électriques à courant fort</h1>
          </div>
        </div>

        <p class="ocfo-hub-desc">
          ${RS_734_2_INFO.description}
        </p>

        <div class="ocfo-hub-progress-card">
          <div class="progress-labels">
            <span style="font-weight:700; color:var(--text-primary);">Progression du parcours</span>
            <span style="font-weight:800; color:var(--electric-blue); font-size:1rem;">
              ${percentage} % · ${completedCount} / 8 leçons
            </span>
          </div>
          <div class="progress-bar-bg" style="height:10px; margin-top:0.5rem;">
            <div class="progress-bar-fill" style="width: ${percentage}%;"></div>
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


  // ==================== src/pages/lesson-view.js ====================
  // Swiss Electrical Academy — Vue d'une Leçon (V2.0)
  // Respect strict de la séquence pédagogique : Titre -> Objectif -> Intro -> Contenu -> Illustration/Widget -> Cas pratique -> Point important -> Quiz -> Synthèse


  function renderLessonView(container, moduleId, formationId) {
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
    const isOcfo = formation.parcoursId === 'rs-734-2' || formation.id.startsWith('rs-734-2-');

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

    // Déterminer les routes de navigation séquentielle
    let nextRoute = null;
    let nextLabel = null;
    if (formation.nextChapterId) {
      const nextNum = formation.chapterNumber + 1;
      if (nextNum <= 7) {
        nextRoute = `#/formations/A/rs-734-2/chapitre-${nextNum}`;
        nextLabel = `Passer au Chapitre ${nextNum} / 8 →`;
      } else if (nextNum === 8) {
        nextRoute = `#/formations/A/rs-734-2/annexes`;
        nextLabel = `Passer à la Leçon 8 (Annexes 1 à 4) →`;
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
          ${isOcfo ? `
            <span>/</span>
            <a href="#/formations/A/rs-734-2" class="breadcrumb-link">RS 734.2 — OCFo</a>
          ` : ''}
          <span>/</span>
          <span>${formation.code}</span>
        </nav>

        <!-- En-tête de leçon (Titre) -->
        <header class="lesson-header-card ${isOcfo ? 'ocfo-lesson-header' : ''}">
          <div class="lesson-badges-row">
            <span class="module-code-badge badge-${mod.id}" style="width:30px; height:30px; font-size:0.85rem;">
              ${mod.id}
            </span>
            <span class="formation-code-tag">${formation.code}</span>
            ${isOcfo && formation.chapterNumber && formation.chapterNumber <= 8 ? `
              <span class="ocfo-progression-pill">${formation.chapterNumber === 8 ? 'Leçon 8 / 8 · Annexes 1 à 4' : `Chapitre ${formation.chapterNumber} / 8`}</span>
            ` : ''}
            ${isOcfo && formation.isFinalEvaluation ? `
              <span class="ocfo-badge-eval" style="display:inline-block; padding:0.2rem 0.65rem; font-size:0.75rem;">Examen final (8 unités)</span>
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
          <section class="content-article" aria-label="Introduction">
            <div class="section-title">Introduction</div>
            <div class="section-body">${formation.introduction}</div>
          </section>

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
                <div class="box-title">Exemple pratique (Exemple pédagogique)</div>
                <div class="box-text">${formation.practicalExample}</div>
              </div>
            </section>
          ` : ''}

          <!-- Point Important -->
          ${formation.importantPoint ? `
            <section class="important-box" aria-label="Point important">
              <div class="box-icon">⚠️</div>
              <div>
                <div class="box-title">Règle incontournable & sécurité</div>
                <div class="box-text">${formation.importantPoint}</div>
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
            ${isOcfo ? `
              <button class="btn-continue" onclick="location.hash='#/formations/A/rs-734-2'" style="background:var(--bg-surface-elevated); color:var(--text-primary); border:1px solid var(--border-medium);">
                ← Sommaire des 8 leçons OCFo
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
            <button class="btn-continue" onclick="location.hash='${nextRoute}'" style="display:inline-flex; align-items:center; gap:0.5rem;">
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
          // Si c'est un chapitre OCFo et qu'un chapitre suivant existe, naviguer vers la suite ou le hub
          if (isOcfo) {
            if (nextRoute) {
              location.hash = nextRoute;
            } else {
              location.hash = '#/formations/A/rs-734-2';
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

          modal.querySelector('.visual-lightbox-close').addEventListener('click', closeModal);
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
  }


  // ==================== src/pages/progress-view.js ====================
  // Swiss Electrical Academy — Page Progression & Gamification (V1.1)
  // Progression globale, progression par module (A, B, N, E, F), XP et badges déblocables


  function renderProgressView(container) {
    const stats = StorageService.getProgressStats();
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
            ${stats.globalPercentage}%
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
          <span style="font-size:0.75rem; color:var(--text-muted);">Sur les 5 modules de l'Académie</span>
        </div>
      </div>

      <!-- Détail par Module (A, B, N, E, F) (Section 23) -->
      <section style="margin-bottom:2.5rem;" aria-labelledby="modulesProgressHeading">
        <div class="section-heading" id="modulesProgressHeading">
          <span>📊</span> Progression détaillée par module officiel
        </div>
        <div style="display:flex; flex-direction:column; gap:0.85rem;">
          ${ACADEMY_MODULES.map(mod => {
            const modStats = stats.moduleStats[mod.id] || { percentage: 0, completed: 0, total: mod.formations.length };
            return `
              <div style="background:var(--bg-surface); border:1px solid var(--border-subtle); border-radius:var(--radius-md); padding:1.25rem; display:flex; flex-direction:column; gap:0.6rem;">
                <div style="display:flex; justify-content:space-between; align-items:center;">
                  <div style="display:flex; align-items:center; gap:0.75rem;">
                    <span class="module-code-badge badge-${mod.id}" style="width:32px; height:32px; font-size:0.95rem;">
                      ${mod.code}
                    </span>
                    <div>
                      <strong style="color:var(--text-primary); font-size:0.95rem;">Module ${mod.id} — ${mod.title}</strong>
                      <div style="font-size:0.75rem; color:var(--text-muted);">${mod.countLabel}</div>
                    </div>
                  </div>
                  <div style="text-align:right;">
                    <span style="font-weight:700; font-size:1.05rem; color:var(--text-primary);">${modStats.percentage}%</span>
                    <div style="font-size:0.72rem; color:var(--text-muted);">${modStats.completed} sur ${modStats.total}</div>
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
    const stats = StorageService.getProgressStats();
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
            <div style="font-size:1.4rem; font-weight:800; color:var(--electric-blue);">${stats.globalPercentage}%</div>
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
    container.querySelector('#btnResetProgress').addEventListener('click', () => {
      if (confirm('Voulez-vous vraiment réinitialiser l\'ensemble de votre progression locale et vos XP ?')) {
        localStorage.clear();
        StorageService.setTheme(currentTheme);
        alert('Progression réinitialisée.');
        if (window.updateHeaderXp) window.updateHeaderXp();
        location.hash = '#/';
      }
    });
  }


  // ==================== src/main.js ====================
  // Swiss Electrical Academy — Point d'entrée applicatif (V2.0)
  // Initialisation du Shell, Enregistrement PWA Service Worker et Routeur Hash sans rechargement


  function initSEA() {
    const appRoot = document.getElementById('app');
    if (!appRoot) return;
    if (appRoot.children.length > 0) return; // Déjà initialisé

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
          .then((reg) => console.log('[SEA] Service Worker enregistré avec succès :', reg.scope))
          .catch((err) => console.warn('[SEA] Échec enregistrement Service Worker :', err));
      });
    }

    // Routeur Hash sans rechargement
    function handleRouting() {
      // Normaliser le hash (ex: "#/formations/A/rs-734-2/chapitre-1" -> "/formations/A/rs-734-2/chapitre-1")
      const hash = window.location.hash.slice(1) || '/';
      const cleanPath = hash.split('?')[0];
      const segments = cleanPath.split('/').filter(Boolean);

      // Faire défiler la page vers le haut à chaque changement de route
      if (pageContainer) {
        pageContainer.scrollTop = 0;
      }

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

      // 4. Parcours dédié RS 734.2 (Hub des 7 chapitres) : /formations/A/RS-734-2 ou /formations/A/rs-734-2
      if (segments[0] === 'formations' && segments.length === 3 && (segments[2].toLowerCase() === 'rs-734-2' || segments[2].toLowerCase() === 'ocfo')) {
        renderOcfoParcoursView(pageContainer);
        return;
      }

      // 5. Vue Chapitre ou Leçon
      if (segments[0] === 'formations' && segments.length >= 3) {
        const moduleId = segments[1].toUpperCase();

        // Sous-routes pour le parcours RS 734.2 (ex: /formations/A/rs-734-2/chapitre-1)
        if (segments.length >= 4 && (segments[2].toLowerCase() === 'rs-734-2' || segments[2].toLowerCase() === 'ocfo')) {
          const slug = segments[3].toLowerCase();
          let targetId = `rs-734-2-${slug}`;
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

        const formationId = segments[2];
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

    window.addEventListener('hashchange', handleRouting);
    handleRouting();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initSEA);
  } else {
    initSEA();
  }


})();
