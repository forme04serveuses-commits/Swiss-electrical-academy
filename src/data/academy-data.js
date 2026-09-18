// Swiss Electrical Academy — Registre officiel des données et modules (V1.1)
// Source de vérité : Prescriptions officielles suisses (LIE, OCFo, OIBT, NIBT 2025, ESTI, SN)
// Règle absolue : Aucune invention de référence technique. Données réelles ou « Contenu en préparation ».

export const ACADEMY_INFO = {
  institution: "Electricité Learning Qualité",
  name: "Electricité Learning Qualité",
  shortName: "ELEQ",
  baseline: "Apprendre les règles. Comprendre les risques. Maîtriser la pratique.",
  version: "1.1",
  themeColor: "#0B1220",
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

// Architecture officielle des 5 modules (A, B, N, E, F)
export const ACADEMY_MODULES = [
  // --------------------------------------------------------------------------
  // MODULE A — Dispositions légales
  // --------------------------------------------------------------------------
  {
    id: "A",
    code: "A",
    title: "Dispositions légales",
    countLabel: "9 formations",
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
          source: "Illustration originale — Electricité Learning Qualité | ELEQ"
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
        code: "LIE — Art. 1-15",
        title: "LIE — Principes, Courant faible vs Fort & Câblage",
        subtitle: "Champ d'application, surveillance fédérale, installations intérieures et règle du câblage souterrain",
        status: "Disponible",
        duration: "6 min",
        tag: "Loi fédérale",
        xpReward: 30,
        objective: "Distinguer juridiquement les installations à faible courant et à fort courant selon le critère légal du danger (Art. 2), définir le cadre des installations intérieures (Art. 14) et appliquer la règle légale du câblage souterrain avec le facteur de surcoût maximal de 3.0 (Art. 15c).",
        introduction: `Adoptée le 24 juin 1902, la <strong>Loi sur les installations électriques (LIE — RS 734.0)</strong> constitue le socle législatif de toute l'électrotechnique en Suisse. Elle place l'établissement et l'exploitation des installations sous la haute surveillance de la Confédération et fixe les distinctions fondamentales entre courant faible, courant fort, installations intérieures et réseau de transport.`,
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
        code: "LIE — Art. 16-18",
        title: "LIE — Approbation des plans, Procédures & Délais",
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
        code: "LIE — Art. 20-26",
        title: "LIE — Surveillance, Organes de contrôle & Installations intérieures",
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
        code: "LIE — Art. 27-41",
        title: "LIE — Responsabilité causale de l'exploitant & Annonce d'accidents",
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
        code: "LIE — Art. 55-57",
        title: "LIE — Dispositions pénales, Amendes & Sanctions",
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
  const formation = mod.formations.find(f => f.id === formationId || f.routeId === formationId);
  if (!formation) return null;
  return { module: mod, formation };
}
