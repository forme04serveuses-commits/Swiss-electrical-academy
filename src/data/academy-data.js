// Swiss Electrical Academy — Registre officiel des données et modules (V1.1)
// Source de vérité : Prescriptions officielles suisses (LIE, OCFo, OIBT, NIBT 2025, ESTI, SN)
// Règle absolue : Aucune invention de référence technique. Données réelles ou « Contenu en préparation ».

export const ACADEMY_INFO = {
  institution: "Swiss Electrical Academy",
  baseline: "Apprendre les règles. Comprendre les risques. Maîtriser la pratique.",
  version: "1.1",
  themeColor: "#0B1220",
  accentElectric: "#38BDF8",
  accentRed: "#EF4444"
};

// Profil apprenant par défaut
export const DEFAULT_USER = {
  name: "Alex",
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
    { name: "Alex (Vous)", progress: 75, lastActivity: "N0 — Partie 0", score: 92, status: "En cours" },
    { name: "Marc Dupond", progress: 85, lastActivity: "A00 — Pyramide", score: 95, status: "Actif" },
    { name: "Sophie Meier", progress: 60, lastActivity: "B00 — Sécurité", score: 88, status: "Actif" },
    { name: "Thomas Vuilleumier", progress: 42, lastActivity: "N0 — Partie 0", score: 78, status: "À relancer" },
    { name: "Lukas Weber", progress: 95, lastActivity: "N0 — Quiz validé", score: 98, status: "Prêt examen" },
    { name: "Emma Bovet", progress: 30, lastActivity: "A00 — Pyramide", score: 80, status: "En cours" }
  ]
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
    countLabel: "5 formations",
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
        duration: "6 min",
        tag: "Droit fédéral",
        xpReward: 30,
        objective: "Maîtriser la hiérarchie des lois, ordonnances et règles techniques suisses, les références légales officielles (RS) et la structure des normes SN, SNR et SNG.",
        introduction: "*(Illustration : pyramide hiérarchique des lois, ordonnances et règles techniques suisses, du niveau le plus contraignant — Conseil fédéral — au niveau le moins contraignant — règles techniques / directives.)*",
        contentSections: [
          {
            title: "Abréviations et références légales :",
            text: `<div style="overflow-x:auto; margin-top:0.5rem;">
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
<tr><td><strong>RS 734.24 - O ESTI</strong></td><td>Ordonnance sur l'Inspection fédérale des installations à courant fort</td></tr>
<tr><td><strong>RS 734.26 - OMBT</strong></td><td>Ordonnance sur les Matériels électriques à Basse Tension</td></tr>
<tr><td><strong>RS 734.27 - OIBT</strong></td><td>Ordonnance sur les installations électriques à basse tension</td></tr>
<tr><td><strong>RS 734.272 - O DETEC</strong></td><td>Ordonnance du DETEC sur les installations électriques à Basse Tension (Département fédéral de l'Environnement, des Transports, de l'Energie et de la Communication)</td></tr>
<tr><td><strong>RS 734.31 - OLEI</strong></td><td>Ordonnance sur les lignes électriques</td></tr>
<tr><td><strong>RS 734.5 - OCEM</strong></td><td>Ordonnance sur la comptabilité électromagnétique</td></tr>
<tr><td><strong>RS 784.10 - LTC</strong></td><td>Loi sur les télécommunications</td></tr>
<tr><td><strong>RS 814.710 - ORNI</strong></td><td>Ordonnance sur la protection contre le rayonnement non ionisant</td></tr>
<tr><td><strong>RS 832.20 - LAA</strong></td><td>Loi fédérale sur l'assurance-accidents</td></tr>
<tr><td><strong>RS 832.30 - OPA</strong></td><td>Ordonnance sur la prévention des accidents et des maladies professionnelles</td></tr>
<tr><td><strong>RS 930.11 - LSPro</strong></td><td>Loi fédérale du 12 juin 2009 sur la sécurité des produits</td></tr>
<tr><td><strong>NIBT</strong></td><td>Norme sur les installations à basse tension (SN 411000 :2025)</td></tr>
<tr><td><strong>SN EN</strong></td><td>Norme Suisse Européenne Norme</td></tr>
<tr><td><strong>SNR</strong></td><td>Règle Suisse</td></tr>
<tr><td><strong>SNG</strong></td><td>Guide Suisse</td></tr>
<tr><td><strong>ESTI</strong></td><td>Inspection fédérale des installations à courant fort</td></tr>
<tr><td><strong>AEAI</strong></td><td>Association des établissements cantonaux d'assurance incendie</td></tr>
<tr><td><strong>SUVA</strong></td><td>Caisse nationale suisse d'assurance en cas d'accidents</td></tr>
<tr><td><strong>PDIE</strong></td><td>Prescriptions des distributeurs d'électricité CH</td></tr>
</tbody>
</table>
</div>`
          },
          {
            title: "Structure et présentation des SN, SNR et SNG",
            text: `Actuellement en Suisse, on compte environ 26'000 normes, dont un millier de normes exclusivement suisses [SN], alors que les 25'000 restantes sont d'origine européenne ou internationale et ont été transférées dans l'assortiment de normes suisses.

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
<td>Publication normative préparée sous la direction d'un organisme de normalisation CH, EU ou internationale reconnus</td>
<td>Publication préparée sous la direction d'un organisme de normalisation CH reconnu</td>
<td>Publication chapotée par un organisme de normalisation CH indiquant des explications pour l'élaboration et l'utilisation de normes et de règles</td>
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
<td>Publication normative à un accord limité (sans procéder à un vote formel)</td>
<td>Publication sans définition normative</td>
</tr>
<tr>
<td><strong>Validité</strong></td>
<td>Illimitée</td>
<td>5 ans, possibilité de prolonger de 3 ans en cas ➜ en SN/SNG</td>
<td>Illimitée</td>
</tr>
</tbody>
</table>
</div>`
          },
          {
            title: "Histoire",
            text: `Avec la loi fédérale sur l'établissement de lignes téléphoniques et télégraphiques du 26 juin 1888, la Confédération a essayé de protéger car elle observait un danger dans l'alimentation à courant fort des installations de transmission.

La création de l'Association Suisse des Électriciens ASE (Electrosuisse actuellement) a été faite à cause des difficultés à l'accroissement de l'alimentation en courant. L'ASE a préparé les premières prescriptions pour la réalisation et l'exploitation des installations à courant fort. Celles-ci ont formé la base de la LIE du 24 juin 1902.`
          }
        ],
        interactiveWidget: "pyramid-widget",
        importantPoint: "Hiérarchie des normes : les règles s'ordonnent du niveau le plus contraignant (Conseil fédéral) au niveau le moins contraignant (règles techniques / directives).",
        synthesis: "En Suisse, les prescriptions s'articulent rigoureusement entre les lois et ordonnances fédérales (LIE, OCFa, OCFo, OIBT, O ESTI, OMBT, OLEI, OCEM, LTC, ORNI, LAA, OPA, LSPro), les ordonnances départementales (DETEC), les normes techniques ([SN], NIBT) et les règles et guides ([SNR], [SNG], ESTI, SUVA, AEAI, PDIE).",
        quiz: [
          {
            id: "q_a00_1",
            type: "single",
            question: "Quelle est la durée de validité d'une Règle Suisse [SNR] selon la structure des normes en Suisse ?",
            options: [
              "Illimitée",
              "5 ans, possibilité de prolonger de 3 ans en cas ➜ en SN/SNG",
              "10 ans sans prolongation possible",
              "1 an renouvelable"
            ],
            correctAnswer: 1,
            explanation: "Dans la structure des normes en Suisse, une [SNR] a une validité de 5 ans, avec possibilité de prolonger de 3 ans en cas ➜ en SN/SNG."
          },
          {
            id: "q_a00_2",
            type: "single",
            question: "Parmi les types de publications normatives suisses, lequel bénéficie d'une intégration à la norme CH ?",
            options: [
              "[SN]",
              "[SNR]",
              "[SNG]",
              "Aucun des trois"
            ],
            correctAnswer: 0,
            explanation: "Seules les [SN] (Normes classiques) ont une intégration à la norme CH (Oui pour [SN], Non pour [SNR] et [SNG])."
          },
          {
            id: "q_a00_3",
            type: "single",
            question: "Dans les références légales fédérales, que désigne l'abréviation RS 734.27 - OIBT ?",
            options: [
              "Ordonnance sur les installations électriques à basse tension",
              "Ordonnance sur les installations électriques à courant fort",
              "Ordonnance sur les Matériels électriques à Basse Tension",
              "Ordonnance sur les lignes électriques"
            ],
            correctAnswer: 0,
            explanation: "RS 734.27 - OIBT désigne l'Ordonnance sur les installations électriques à basse tension."
          },
          {
            id: "q_a00_4",
            type: "single",
            question: "Quelle loi fédérale du 26 juin 1888 a marqué la première intervention de la Confédération face au danger du courant fort ?",
            options: [
              "Loi fédérale sur l'établissement de lignes téléphoniques et télégraphiques",
              "Loi sur les installations électriques (LIE)",
              "Loi sur les télécommunications (LTC)",
              "Loi fédérale sur la sécurité des produits (LSPro)"
            ],
            correctAnswer: 0,
            explanation: "Avec la loi fédérale sur l'établissement de lignes téléphoniques et télégraphiques du 26 juin 1888, la Confédération a essayé de protéger car elle observait un danger dans l'alimentation à courant fort des installations de transmission."
          },
          {
            id: "q_a00_5",
            type: "single",
            question: "Quelles prescriptions ont formé la base de la LIE du 24 juin 1902 ?",
            options: [
              "Les premières prescriptions préparées par l'ASE pour la réalisation et l'exploitation des installations à courant fort",
              "Les ordonnances du DETEC sur les télécommunications",
              "Les prescriptions de protection incendie de l'AEAI",
              "Les recommandations de la SUVA sur l'assurance-accidents"
            ],
            correctAnswer: 0,
            explanation: "L'ASE a préparé les premières prescriptions pour la réalisation et l'exploitation des installations à courant fort. Celles-ci ont formé la base de la LIE du 24 juin 1902."
          }
        ]
      },
      {
        id: "rs-734-0-lie",
        routeId: "rs-734-0-lie",
        code: "RS 734.0 - LIE",
        title: "RS 734.0 — Loi sur les installations électriques",
        subtitle: "Loi fédérale du 24 juin 1902 concernant les installations électriques à faible et à fort courant",
        status: "En développement",
        duration: "À venir",
        tag: "Loi fédérale",
        xpReward: 0,
        objective: "Maîtriser les dispositions générales, le champ d'application de la LIE, la responsabilité civile de l'exploitant et les dispositions pénales.",
        introduction: "Cette formation dédiée est actuellement en cours de préparation conformément aux sources officielles suisses.",
        contentSections: [
          {
            title: "🔒 Contenu en préparation",
            text: "La fiche détaillée relative à la RS 734.0 (LIE) est en cours de formalisation technique d'après le Recueil systématique du droit fédéral."
          }
        ]
      },
      {
        id: "rs-734-2-ocfo",
        routeId: "rs-734-2-ocfo",
        code: "RS 734.2 - OCFo",
        title: "RS 734.2 — Ordonnance sur le courant fort",
        subtitle: "Ordonnance du Conseil fédéral sur les installations électriques à courant fort",
        status: "En développement",
        duration: "À venir",
        tag: "Ordonnance",
        xpReward: 0,
        objective: "Comprendre les exigences de sécurité relatives à la construction, l'exploitation et la maintenance des installations à courant fort.",
        introduction: "Cette formation dédiée est actuellement en cours de préparation conformément aux sources officielles suisses.",
        contentSections: [
          {
            title: "🔒 Contenu en préparation",
            text: "La fiche technique relative à la RS 734.2 (OCFo) est en cours de rédaction."
          }
        ]
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
  // MODULE F — Suisse Norme (Strictement nommé ainsi)
  // --------------------------------------------------------------------------
  {
    id: "F",
    code: "F",
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
  const formation = mod.formations.find(f => f.id === formationId || f.routeId === formationId);
  if (!formation) return null;
  return { module: mod, formation };
}
