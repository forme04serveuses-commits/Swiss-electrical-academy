// Swiss Electrical Academy — Composants Interactifs Pédagogiques (V1.1)
// Widgets spécialisés : Pyramide des lois (A00), Dangers Ub/Ib (B00), Chaîne NIBT (N0)

// ----------------------------------------------------------------------------
// 1. Pyramide des lois suisse (Module A — A00)
// ----------------------------------------------------------------------------
export function createPyramidWidget() {
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
// 2. Simulateur et Animation Interactive — Dangers & Sécurité électrique
// Conforme aux normes suisses et internationales (SN EN 61140, CEI 60479, OCFo RS 734.2)
// ----------------------------------------------------------------------------
// ----------------------------------------------------------------------------
// 2. Simulateur et Animation Interactive — Dangers & Sécurité électrique
// Conforme aux normes suisses et internationales (SN EN 61140, CEI 60479, OCFo RS 734.2)
// Refonte pédagogique complète en 6 étapes : UNE ÉTAPE = UNE INFORMATION PRINCIPALE
// ----------------------------------------------------------------------------
export function createSecuriteSimulationWidget() {
  const container = document.createElement('div');
  container.className = 'securite-sim-container';
  container.setAttribute('role', 'region');
  container.setAttribute('aria-label', 'Animation pédagogique interactive de la sécurité électrique');

  // État de navigation (Étape 1 à 6)
  let currentStep = 1;
  const totalSteps = 6;

  // État interactif du simulateur
  let contactType = 'direct'; // 'direct' | 'indirect'
  let voltageU = 230; // 230 V, 400 V, 24 V ou 0 V
  let zCorps = 750; // Zk = 750 ohms
  let zChaussures = 240; // Z1 = 240 ohms, 0 ohms ou 2000 ohms
  let zSol = 10; // Z2 = 10 ohms, 0 ohms ou 3000 ohms
  let tripTimeMs = 500; // 500 ms, 400 ms, ou 25 ms
  let protectionMode = 'none'; // 'none' (500ms) | 'breaker' (400ms) | 'ddr' (25ms)
  let activeScenario = 'official'; // 'official' | 'barefoot' | 'ddr' | 'ppe' | 'off' | 'custom'
  
  // États d'affichage interactifs
  let isSimulatingCurrent = false; // Animation flux de courant à l'étape 2
  let showOhmDetail = false; // Dépliage du calcul loi d'Ohm à l'étape 3
  let chosenAction = null; // Action choisie à l'étape 4 ('touch' | 'disconnect' | 'ppe' | 'ddr')
  let showTechGraphModal = false; // Modale graphique CEI 60479
  let showSkeletonModal = false; // Modale modèle anatomique 500 ohms
  let showCustomSettings = false; // Accordéon réglages personnalisés à l'étape 5

  // Données du mini-quiz à l'étape 6
  const quizData = [
    {
      q: "1. Selon la norme suisse (SN EN 61140), quelle est l'impédance totale indicative du circuit de défaut (Zk + Z1 + Z2) ?",
      options: ["100 [Ω]", "1000 [Ω]", "10 000 [Ω]", "50 000 [Ω]"],
      correct: 1,
      hint: "Ztotal = Zk (corps 750 Ω) + Z1 (chaussures 240 Ω) + Z2 (sol 10 Ω) = 1000 [Ω]."
    },
    {
      q: "2. Avec une tension de 230 V et une impédance globale de 1000 Ω, quel est le courant de contact IB ?",
      options: ["23 [mA]", "230 [mA] (0.23 A)", "2.3 [A]", "16 [A]"],
      correct: 1,
      hint: "Loi d'Ohm : IB = U / Ztotal = 230 / 1000 = 0.23 [A] = 230 [mA]."
    },
    {
      q: "3. Pourquoi le courant doit-il impérativement être coupé en moins de 400 [ms] (ou ≤ 25 ms par DDR) ?",
      options: [
        "Pour économiser l'énergie électrique du réseau.",
        "Pour éviter la zone AC-4 de fibrillation ventriculaire cardiaque mortelle.",
        "Pour empêcher l'échauffement des disjoncteurs divisionnaires."
      ],
      correct: 1,
      hint: "À 230 mA, le passage dans le myocarde entraîne la fibrillation ventriculaire dès 300-400 ms. Un DDR 30 mA coupe en ≤ 25 ms (zone sécurisée)."
    }
  ];

  let quizAnswers = {};
  let quizDone = false;
  try {
    if (localStorage.getItem('elecbook_securite_simulation_done') === 'true') {
      quizDone = true;
    }
  } catch (e) {}

  // Scénarios pédagogiques
  const scenarios = [
    {
      id: 'official',
      icon: '⚡',
      title: "1. Contact direct standard",
      shortDesc: "Contact avec une phase 230 V en tenue de travail classique sur sol sec.",
      badge: "Cas d'école du cours",
      badgeType: "warning"
    },
    {
      id: 'barefoot',
      icon: '💧',
      title: "2. Pieds nus sur sol humide",
      shortDesc: "Isolation nulle aux pieds (Z1=0 Ω) et sol mouillé (Z2=0 Ω). Choc direct foudroyant.",
      badge: "Défaut franc sans résistance",
      badgeType: "danger"
    },
    {
      id: 'ddr',
      icon: '🛡️',
      title: "3. Protection par DDR 30 mA",
      shortDesc: "Contact direct avec coupure automatique instantanée en moins de 25 ms.",
      badge: "Survie garantie (≤ 25 ms)",
      badgeType: "safe"
    },
    {
      id: 'ppe',
      icon: '🥾',
      title: "4. Équipé EPI & Tapis isolant",
      shortDesc: "Chaussures isolantes (2000 Ω) et tapis isolant (3000 Ω) limitant fortement le courant.",
      badge: "Protection individuelle",
      badgeType: "info"
    },
    {
      id: 'off',
      icon: '🔒',
      title: "5. Installation consignée (0 V)",
      shortDesc: "Application stricte des 5 règles de sécurité. Tension et courant rigoureusement nuls.",
      badge: "Sécurité absolue (0 V)",
      badgeType: "safe"
    }
  ];

  // Points normatifs exacts issus du diagramme officiel SVG : [durée t (ms), courant I (mA)]
  const ptsCurveB = [
    [10000, 5.0],
    [5000, 5.0],
    [2000, 8.6],
    [1000, 13.0],
    [500, 19.6],
    [400, 22.4],
    [200, 33.8],
    [100, 51.0],
    [50, 76.9],
    [20, 132.5],
    [10, 200.0]
  ];

  const ptsCurveC1 = [
    [10000, 50.0],
    [5000, 50.0],
    [2000, 50.0],
    [1500, 55.0],
    [1000, 72.0],
    [700, 105.0],
    [500, 160.0],
    [400, 230.0],
    [300, 320.0],
    [200, 420.0],
    [150, 475.0],
    [100, 500.0],
    [50, 500.0],
    [20, 500.0],
    [10, 500.0]
  ];

  function getCurveCurrentThreshold(pts, tMs) {
    const tClamped = Math.max(10, Math.min(10000, tMs));
    for (let i = 0; i < pts.length - 1; i++) {
      const [t1, i1] = pts[i];
      const [t2, i2] = pts[i + 1];
      if (t2 <= tClamped && tClamped <= t1) {
        const logT = Math.log10(tClamped);
        const logT1 = Math.log10(t1);
        const logT2 = Math.log10(t2);
        const frac = (logT - logT1) / (logT2 - logT1);
        const logI = Math.log10(i1) + frac * (Math.log10(i2) - Math.log10(i1));
        return Math.pow(10, logI);
      }
    }
    return pts[pts.length - 1][1];
  }

  // Projection logarithmique (X : 0.1 à 2000 mA, Y : 10 à 10000 ms)
  const plotLeft = 85;
  const plotRight = 600;
  const plotTop = 26;
  const plotBottom = 275;

  function toSvgX(iMa) {
    const val = Math.max(0.1, Math.min(2000, iMa));
    const logMin = Math.log10(0.1);
    const logMax = Math.log10(2000);
    const ratio = (Math.log10(val) - logMin) / (logMax - logMin);
    return Math.round((plotLeft + ratio * (plotRight - plotLeft)) * 10) / 10;
  }

  function toSvgY(tMs) {
    const val = Math.max(10, Math.min(10000, tMs));
    const logMin = Math.log10(10);
    const logMax = Math.log10(10000);
    const ratio = (Math.log10(val) - logMin) / (logMax - logMin);
    return Math.round((plotBottom - ratio * (plotBottom - plotTop)) * 10) / 10;
  }

  function computeElectrotechnics() {
    const zTotal = zCorps + zChaussures + zSol;
    const effectiveU = voltageU;
    const currentA = zTotal > 0 ? (effectiveU / zTotal) : 0;
    const currentMa = Math.round(currentA * 1000 * 10) / 10;
    const ub = Math.round((zCorps / zTotal) * effectiveU * 10) / 10;
    const du1 = Math.round((zChaussures / zTotal) * effectiveU * 10) / 10;
    const du2 = Math.round((zSol / zTotal) * effectiveU * 10) / 10;

    const thB = getCurveCurrentThreshold(ptsCurveB, tripTimeMs);
    const thC1 = getCurveCurrentThreshold(ptsCurveC1, tripTimeMs);

    let zone = 'Zone AC-1';
    let zoneColor = '#10b981';
    let zoneBadgeClass = 'zone-ac1';
    let zoneTitle = 'Zone AC-1 : Imperceptible (< 0.5 mA)';
    let zoneDesc = 'Courant inférieur au seuil de perception. Aucun effet nocif.';
    let heartState = 'normal'; // 'normal' | 'racing' | 'fibrillation' | 'saved' | 'off'

    if (effectiveU === 0 || currentMa === 0) {
      zone = 'SÉCURISÉ';
      zoneColor = '#10b981';
      zoneBadgeClass = 'zone-safe';
      zoneTitle = '✓ Circuit Hors Tension (0 Volt)';
      zoneDesc = 'Aucun courant ne circule. L\'intervention est 100% sécurisée.';
      heartState = 'off';
    } else if (protectionMode === 'ddr') {
      zone = 'PROTÉGÉ DDR';
      zoneColor = '#10b981';
      zoneBadgeClass = 'zone-ddr';
      zoneTitle = '🛡️ Protection DDR 30mA (Coupure ≤ 25 ms)';
      zoneDesc = `Courant de ${currentMa} mA interrompu en ≤ 25 ms : zone sécurisée, fibrillation cardiaque évitée !`;
      heartState = 'saved';
    } else if (currentMa <= 0.5) {
      zone = 'Zone AC-1';
      zoneColor = '#10b981';
      zoneBadgeClass = 'zone-ac1';
      zoneTitle = 'Zone AC-1 : Imperceptible (< 0.5 mA)';
      zoneDesc = `Courant minime (${currentMa} mA) inférieur à la ligne de perception (0.5 mA).`;
      heartState = 'normal';
    } else if (currentMa <= thB) {
      zone = 'Zone AC-2';
      zoneColor = '#f59e0b';
      zoneBadgeClass = 'zone-ac2';
      zoneTitle = 'Zone AC-2 : Perception & Picotements (0.5 mA à courbe 2)';
      zoneDesc = `Courant de ${currentMa} mA ressenti nettement mais sans spasme musculaire ni crampe tétanisante.`;
      heartState = 'racing';
    } else if (currentMa <= thC1) {
      zone = 'Zone AC-3';
      zoneColor = '#f97316';
      zoneBadgeClass = 'zone-ac3';
      zoneTitle = 'Zone AC-3 : Tétanisation & Non-lâcher (courbe 2 à 3)';
      zoneDesc = `Contractions musculaires involontaires (${currentMa} mA pendant ${tripTimeMs} ms), non-lâcher, effets réversibles.`;
      heartState = 'racing';
    } else {
      zone = 'Zone AC-4';
      zoneColor = '#ef4444';
      zoneBadgeClass = 'zone-ac4';
      zoneTitle = 'Zone AC-4 : Fibrillation ventriculaire mortelle (> courbe 3)';
      zoneDesc = `Danger foudroyant (${currentMa} mA pendant ${tripTimeMs} ms) : Risque mortel de fibrillation ventriculaire et d'arrêt cardiaque !`;
      heartState = 'fibrillation';
    }

    return { zTotal, effectiveU, currentA, currentMa, ub, du1, du2, zone, zoneColor, zoneBadgeClass, zoneTitle, zoneDesc, heartState, thB, thC1 };
  }

  function setScenario(scId) {
    activeScenario = scId;
    isSimulatingCurrent = false;
    chosenAction = null;

    if (scId === 'official') {
      voltageU = 230;
      zCorps = 750;
      zChaussures = 240;
      zSol = 10;
      protectionMode = 'none';
      tripTimeMs = 500;
      contactType = 'direct';
    } else if (scId === 'barefoot') {
      voltageU = 230;
      zCorps = 750;
      zChaussures = 0;
      zSol = 0;
      protectionMode = 'none';
      tripTimeMs = 500;
      contactType = 'direct';
    } else if (scId === 'ddr') {
      voltageU = 230;
      zCorps = 750;
      zChaussures = 240;
      zSol = 10;
      protectionMode = 'ddr';
      tripTimeMs = 25;
      contactType = 'direct';
    } else if (scId === 'ppe') {
      voltageU = 230;
      zCorps = 750;
      zChaussures = 2000;
      zSol = 3000;
      protectionMode = 'none';
      tripTimeMs = 500;
      contactType = 'direct';
    } else if (scId === 'off') {
      voltageU = 0;
      protectionMode = 'none';
      tripTimeMs = 500;
      contactType = 'direct';
    }
  }

  function render() {
    const calc = computeElectrotechnics();

    // Titres des étapes
    const stepLabels = [
      "1. Situation",
      "2. Scène & Courant",
      "3. Corps & Loi d'Ohm",
      "4. Action & Réaction",
      "5. Protections",
      "6. Bilan & XP"
    ];

    container.innerHTML = `
      <!-- En-tête Global de l'Atelier Interactif -->
      <div class="sim-play-header">
        <div class="sim-play-topline">
          <div class="sim-play-badge">
            <span>⚡ MODULE B</span>
            <span>·</span>
            <span>SÉCURITÉ ÉLECTRIQUE (SN EN 61140)</span>
          </div>
          <div style="display:flex; gap:0.5rem; flex-wrap:wrap;">
            <button class="sim-skeleton-toggle-btn" id="btnToggleSkeleton" aria-label="Afficher le modèle anatomique 500 ohms">
              <span>🦴</span> Modèle d'impédance (500 Ω/membre)
            </button>
            <button class="sim-skeleton-toggle-btn" id="btnToggleTechGraph" aria-label="Afficher le graphique normatif CEI 60479">
              <span>📊</span> Analyse CEI 60479
            </button>
          </div>
        </div>
        <h3 class="sim-play-title">Expérience Interactive : Comprendre le Risque & la Sécurité Électrique</h3>
        <p class="sim-play-subtitle">
          Une approche progressive pas-à-pas : Situation ➔ Danger ➔ Contact ➔ Courant corporel ➔ Action ➔ Protection.
        </p>
      </div>

      <!-- Stepper / Fil d'Ariane Pédagogique (Étape X / 6) -->
      <div class="sim-stepper-wrap" aria-label="Progression dans l'animation">
        <div class="sim-stepper-track">
          ${stepLabels.map((lbl, idx) => {
            const stepNum = idx + 1;
            const isCompleted = stepNum < currentStep;
            const isActive = stepNum === currentStep;
            let cls = 'sim-step-node';
            if (isActive) cls += ' active';
            if (isCompleted) cls += ' completed';

            return `
              <button class="${cls}" data-goto="${stepNum}" aria-current="${isActive ? 'step' : 'false'}" aria-label="Étape ${stepNum} : ${lbl}">
                <span class="sim-node-circle">${isCompleted ? '✓' : stepNum}</span>
                <span class="sim-node-label">${lbl}</span>
              </button>
              ${stepNum < totalSteps ? `<div class="sim-step-connector ${stepNum < currentStep ? 'filled' : ''}"></div>` : ''}
            `;
          }).join('')}
        </div>
        <div class="sim-stepper-status">
          <strong>Étape ${currentStep} sur ${totalSteps} :</strong> ${stepLabels[currentStep - 1]}
        </div>
      </div>

      <!-- Zone Principale : Contenu de l'Étape Active -->
      <div class="sim-step-content-box">
        ${renderCurrentStepContent(calc)}
      </div>

      <!-- Barre de Navigation Inférieure (Précédent / Suivant) -->
      <div class="sim-nav-bar">
        <button class="sim-nav-btn sim-nav-prev" id="btnPrevStep" ${currentStep === 1 ? 'disabled style="opacity:0.4; cursor:not-allowed;"' : ''}>
          <span>←</span>
          <span>Étape précédente</span>
        </button>
        
        <div class="sim-nav-indicators">
          ${Array.from({ length: totalSteps }, (_, i) => `
            <span class="sim-dot-indicator ${i + 1 === currentStep ? 'active' : (i + 1 < currentStep ? 'passed' : '')}"></span>
          `).join('')}
        </div>

        ${currentStep < totalSteps ? `
          <button class="sim-nav-btn sim-nav-next" id="btnNextStep">
            <span>Continuer</span>
            <span>➔</span>
          </button>
        ` : `
          <button class="sim-nav-btn sim-nav-restart" id="btnRestartStep">
            <span>🔄</span>
            <span>Tester une autre situation</span>
          </button>
        `}
      </div>

      <!-- Modale Graphique CEI 60479 (Dédiée, Agrandie et Lisible) -->
      ${showTechGraphModal ? renderTechGraphModal(calc) : ''}

      <!-- Modale Modèle Anatomique (500 Ω/membre) -->
      ${showSkeletonModal ? renderSkeletonModal() : ''}

      <!-- Footer Normatif ELECBOOK -->
      <div class="sim-legal-attribution">
        ℹ️ <strong>Référence normative suisse :</strong> SN EN 61140, OCFo RS 734.2, OIBT RS 734.27, CEI 60479-1. Expérience interactive conçue pour une compréhension visuelle immédiate.
      </div>
    `;

    attachEvents();
  }

  // --------------------------------------------------------------------------
  // Rendu de chaque Étape Pédagogique (1 à 6)
  // --------------------------------------------------------------------------
  function renderCurrentStepContent(calc) {
    switch (currentStep) {
      case 1:
        return renderStep1();
      case 2:
        return renderStep2(calc);
      case 3:
        return renderStep3(calc);
      case 4:
        return renderStep4(calc);
      case 5:
        return renderStep5(calc);
      case 6:
        return renderStep6(calc);
      default:
        return renderStep1();
    }
  }

  // ÉTAPE 1 : CHOISIR UNE SITUATION
  function renderStep1() {
    return `
      <div class="sim-step-screen sim-step-1">
        <div class="sim-step-intro">
          <div class="sim-intro-icon">🎯</div>
          <div>
            <h4 class="sim-step-title">Étape 1 — Choisissez une situation de départ</h4>
            <p class="sim-step-desc">
              Sélectionnez un cas concret pour débuter l'expérience. Vous observerez le comportement du courant, analyserez son trajet et testerez les moyens de protection.
            </p>
          </div>
        </div>

        <div class="sim-scenarios-hero-grid">
          ${scenarios.map(sc => {
            const isSelected = activeScenario === sc.id;
            return `
              <div class="sim-hero-card ${isSelected ? 'selected' : ''}" data-sc="${sc.id}" role="button" tabindex="0" aria-label="Choisir : ${sc.title}">
                <div class="sim-hero-card-head">
                  <span class="sim-hero-card-icon">${sc.icon}</span>
                  <span class="sim-hero-card-badge badge-${sc.badgeType}">${sc.badge}</span>
                </div>
                <h5 class="sim-hero-card-title">${sc.title}</h5>
                <p class="sim-hero-card-desc">${sc.shortDesc}</p>
                <div class="sim-hero-card-action">
                  <span>${isSelected ? '✓ Situation sélectionnée' : 'Sélectionner ce scénario'}</span>
                  <span>➔</span>
                </div>
              </div>
            `;
          }).join('')}
        </div>

        <div class="sim-step1-continue-box">
          <button class="sim-primary-action-btn" id="btnStartFromStep1">
            <span>Lancer la simulation de cette situation</span>
            <span>➔</span>
          </button>
        </div>
      </div>
    `;
  }

  // ÉTAPE 2 : GRANDE SCÈNE VISUELLE & ANIMATION DU COURANT
  function renderStep2(calc) {
    const currentScenarioObj = scenarios.find(s => s.id === activeScenario) || scenarios[0];

    return `
      <div class="sim-step-screen sim-step-2">
        <div class="sim-stage-header-row">
          <div class="sim-stage-header-left">
            <span class="sim-stage-badge">${currentScenarioObj.icon} ${currentScenarioObj.title}</span>
            <h4 class="sim-step-title">Étape 2 — Visualisation du circuit et du contact électrique</h4>
          </div>
          <div class="sim-mini-tabs">
            <button class="sim-minitab ${contactType === 'direct' ? 'active' : ''}" id="btnModeDirect">Ligne L (Direct)</button>
            <button class="sim-minitab ${contactType === 'indirect' ? 'active' : ''}" id="btnModeIndirect">Machine (Indirect)</button>
          </div>
        </div>

        <div class="sim-center-visual-stage">
          <div class="sim-stage-action-bar">
            <button class="sim-simulate-flow-btn ${isSimulatingCurrent ? 'active' : ''}" id="btnToggleSimulate">
              <span>${isSimulatingCurrent ? '⏸️ Mettre en pause le courant' : '▶️ Voir ce qui se passe (Animer le courant)'}</span>
            </button>
            <span class="sim-stage-hint">
              ${isSimulatingCurrent ? '⚡ Le courant s\'écoule de la source vers la terre à travers le corps.' : 'Cliquez sur le bouton ci-dessus pour déclencher l\'animation lumineuse.'}
            </span>
          </div>

          <div class="sim-svg-large-wrap">
            <svg viewBox="0 0 680 400" class="sim-svg-large" aria-label="Grande scène interactive du circuit électrique et du contact">
              <defs>
                <linearGradient id="liveBarGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stop-color="#38bdf8" />
                  <stop offset="100%" stop-color="#0284c7" />
                </linearGradient>
                <filter id="glowEffect" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="3.5" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
                <filter id="heartGlow2" x="-30%" y="-30%" width="160%" height="160%">
                  <feGaussianBlur stdDeviation="4" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>

              <!-- 1. SOURCE D'ALIMENTATION / CONDUCTEUR DE PHASE -->
              ${contactType === 'direct' ? `
                <!-- Barre Phase L -->
                <rect x="30" y="24" width="620" height="24" rx="5" fill="url(#liveBarGrad2)" stroke="#7dd3fc" stroke-width="1.8" />
                <text x="60" y="41" fill="#ffffff" font-size="13" font-weight="900" letter-spacing="0.5">SOURCE DE TENSION : L = ${calc.effectiveU} [V_AC]</text>
                
                ${calc.effectiveU > 0 ? `
                  <!-- Arc électrique au point de contact -->
                  <g transform="translate(480, 10)">
                    <path d="M 6 0 L -6 18 L 4 18 L -8 36 L 10 14 L 0 14 Z" fill="#ef4444" stroke="#fef08a" stroke-width="1.5" class="sim-pulsing-lightning" filter="url(#glowEffect)" />
                  </g>
                ` : `
                  <rect x="520" y="27" width="120" height="18" rx="4" fill="#10b981" />
                  <text x="580" y="40" fill="#fff" font-size="10" font-weight="900" text-anchor="middle">CONSIGNÉ 0 V</text>
                `}
              ` : `
                <!-- Machine Métallique (Contact indirect) -->
                <rect x="30" y="24" width="220" height="18" rx="4" fill="url(#liveBarGrad2)" stroke="#7dd3fc" stroke-width="1.8" />
                <text x="50" y="38" fill="#ffffff" font-size="12" font-weight="900">L = ${calc.effectiveU} [V_AC]</text>

                <!-- Carcasse Machine -->
                <rect x="250" y="42" width="140" height="140" rx="10" fill="#1e293b" stroke="${calc.effectiveU > 0 ? '#ef4444' : '#10b981'}" stroke-width="3" />
                <text x="320" y="70" fill="#f8fafc" font-size="13" font-weight="900" text-anchor="middle">MACHINE</text>
                <circle cx="320" cy="110" r="28" fill="#0284c7" stroke="#38bdf8" stroke-width="2" />
                <text x="320" y="118" fill="#fff" font-size="18" font-weight="900" text-anchor="middle">M</text>

                <!-- PE -->
                <line x1="360" y1="12" x2="360" y2="42" stroke="#10b981" stroke-width="3.5" stroke-dasharray="6 4" />
                <text x="360" y="8" fill="#10b981" font-size="11" font-weight="900" text-anchor="middle">PE</text>

                <!-- Ligne de défaut vers carcasse -->
                <path d="M 180 40 L 180 100 L 250 100" stroke="#ef4444" stroke-width="4" fill="none" class="${isSimulatingCurrent ? 'sim-flowing-wire' : ''}" />
              `}

              <!-- 2. CONDUCTEUR & FLUX DE COURANT DYNAMIQUE -->
              ${isSimulatingCurrent && calc.effectiveU > 0 && protectionMode !== 'ddr' ? `
                <!-- Animation de flux lumineux le long du circuit -->
                <g class="sim-luminous-flow">
                  <!-- Particules de courant descendantes -->
                  <circle cx="${contactType === 'direct' ? '486' : '390'}" cy="50" r="4" fill="#fbbf24" class="sim-glow-particle p1" />
                  <circle cx="486" cy="140" r="4" fill="#fbbf24" class="sim-glow-particle p2" />
                  <circle cx="486" cy="230" r="4" fill="#fbbf24" class="sim-glow-particle p3" />
                  <circle cx="486" cy="320" r="4" fill="#fbbf24" class="sim-glow-particle p4" />
                </g>
              ` : ''}

              <!-- 3. PERSONNAGE ET POINTS DE CONTACT (GRAND ET DÉTAILLÉ) -->
              <g transform="translate(${contactType === 'direct' ? '440' : '360'}, 28)">
                
                <!-- Bras touchant le conducteur -->
                ${contactType === 'direct' ? `
                  <path d="M 46 80 L 46 18" stroke="${isSimulatingCurrent && calc.effectiveU > 0 ? '#ef4444' : '#10b981'}" stroke-width="9" stroke-linecap="round" class="${isSimulatingCurrent && calc.effectiveU > 0 ? 'sim-flowing-wire' : ''}" />
                  <circle cx="46" cy="18" r="8" fill="#f59e0b" stroke="#fff" stroke-width="2" />
                ` : `
                  <path d="M 40 85 L -80 65" stroke="${isSimulatingCurrent && calc.effectiveU > 0 ? '#ef4444' : '#10b981'}" stroke-width="9" stroke-linecap="round" class="${isSimulatingCurrent && calc.effectiveU > 0 ? 'sim-flowing-wire' : ''}" />
                  <circle cx="-80" cy="65" r="8" fill="#f59e0b" stroke="#fff" stroke-width="2" />
                `}

                <!-- Bras gauche libre -->
                <path d="M 85 80 L 102 135 L 96 170" stroke="${calc.currentMa > 50 && isSimulatingCurrent && protectionMode !== 'ddr' ? '#ef4444' : '#059669'}" stroke-width="8" stroke-linecap="round" />

                <!-- Tête -->
                <ellipse cx="65" cy="48" rx="22" ry="26" fill="#fed7aa" stroke="#1e293b" stroke-width="2" />
                <path d="M 43 40 Q 65 15 87 40 Q 65 27 43 40 Z" fill="#c2410c" />

                <!-- Yeux et expression faciale -->
                ${isSimulatingCurrent && calc.heartState === 'fibrillation' ? `
                  <circle cx="56" cy="45" r="3.5" fill="#fff" stroke="#ef4444" stroke-width="2" />
                  <circle cx="56" cy="45" r="1.5" fill="#ef4444" />
                  <circle cx="74" cy="45" r="3.5" fill="#fff" stroke="#ef4444" stroke-width="2" />
                  <circle cx="74" cy="45" r="1.5" fill="#ef4444" />
                  <path d="M 56 60 Q 65 52 74 60" stroke="#ef4444" stroke-width="3" fill="none" stroke-linecap="round" />
                ` : (calc.heartState === 'saved' || calc.effectiveU === 0 ? `
                  <path d="M 54 45 Q 58 41 62 45" stroke="#0f172a" stroke-width="2.5" fill="none" />
                  <path d="M 68 45 Q 72 41 76 45" stroke="#0f172a" stroke-width="2.5" fill="none" />
                  <path d="M 56 56 Q 65 65 74 56" stroke="#10b981" stroke-width="3" fill="none" stroke-linecap="round" />
                ` : `
                  <circle cx="56" cy="45" r="2.5" fill="#0f172a" />
                  <circle cx="74" cy="45" r="2.5" fill="#0f172a" />
                  <line x1="56" y1="58" x2="74" y2="58" stroke="#0f172a" stroke-width="2.5" stroke-linecap="round" />
                `)}

                <!-- Tronc (Chemise de travail) -->
                <path d="M 42 74 L 88 74 L 82 180 L 48 180 Z" fill="${isSimulatingCurrent && calc.currentMa > 50 && protectionMode !== 'ddr' ? '#ef4444' : '#059669'}" stroke="#1e293b" stroke-width="2.5" />
                <path d="M 57 74 L 65 88 L 73 74" stroke="#ffffff" stroke-width="2" fill="none" />

                <!-- Cœur avec animation pulsante -->
                <g transform="translate(65, 118)">
                  <path d="M 0 -5 C -6 -12 -16 -8 -16 2 C -16 10 0 20 0 20 C 0 20 16 10 16 2 C 16 -8 6 -12 0 -5 Z" 
                        fill="${isSimulatingCurrent && calc.heartState === 'fibrillation' ? '#ef4444' : (calc.heartState === 'saved' ? '#10b981' : '#ffffff')}" 
                        class="${isSimulatingCurrent && calc.heartState === 'fibrillation' ? 'sim-pulsing-heart' : ''}" 
                        stroke="#0f172a" stroke-width="2" filter="url(#heartGlow2)" />
                </g>

                <!-- Jambe droite -->
                <path d="M 52 180 L 48 305" stroke="${isSimulatingCurrent && calc.currentMa > 50 && protectionMode !== 'ddr' ? '#ef4444' : '#b45309'}" stroke-width="12" stroke-linecap="round" class="${isSimulatingCurrent && calc.effectiveU > 0 ? 'sim-flowing-wire' : ''}" />
                <!-- Jambe gauche -->
                <path d="M 78 180 L 82 305" stroke="${isSimulatingCurrent && calc.currentMa > 50 && protectionMode !== 'ddr' ? '#ef4444' : '#b45309'}" stroke-width="12" stroke-linecap="round" class="${isSimulatingCurrent && calc.effectiveU > 0 ? 'sim-flowing-wire' : ''}" />

                <!-- Chaussures (Z1) -->
                <rect x="33" y="303" width="28" height="14" rx="4" fill="${zChaussures === 0 ? '#fed7aa' : (zChaussures >= 2000 ? '#0284c7' : '#1e293b')}" stroke="#475569" stroke-width="2" />
                <rect x="70" y="303" width="28" height="14" rx="4" fill="${zChaussures === 0 ? '#fed7aa' : (zChaussures >= 2000 ? '#0284c7' : '#1e293b')}" stroke="#475569" stroke-width="2" />
              </g>

              <!-- 4. SOL & MISE À LA TERRE NORMALISÉE CEI 60617 (3 TRAITS DÉCROISSANTS) -->
              <g transform="translate(${contactType === 'direct' ? '440' : '360'}, 345)">
                <!-- Plaque de sol (Z2) -->
                <rect x="-20" y="0" width="170" height="20" rx="5" fill="${zSol === 0 ? '#0284c7' : (zSol >= 3000 ? '#475569' : '#334155')}" stroke="#64748b" stroke-width="2" />
                <text x="65" y="14" fill="#ffffff" font-size="11" font-weight="900" text-anchor="middle">
                  ${zSol === 0 ? '💧 Sol Mouillé (0 Ω)' : (zSol >= 3000 ? '🛡️ Tapis Isolant (3000 Ω)' : '🌍 Sol Standard (10 Ω)')}
                </text>

                <!-- Symbole Normé CEI 60617 (Tige + 3 barres horizontales décroissantes) -->
                <g stroke="#10b981" stroke-linecap="round">
                  <line x1="65" y1="20" x2="65" y2="35" stroke-width="3" />
                  <line x1="38" y1="35" x2="92" y2="35" stroke-width="3.5" />
                  <line x1="47" y1="42" x2="83" y2="42" stroke-width="2.8" />
                  <line x1="56" y1="49" x2="74" y2="49" stroke-width="2.2" />
                </g>
                <text x="65" y="68" fill="#10b981" font-size="12" font-weight="900" text-anchor="middle" letter-spacing="0.5">Terre de référence = 0 [V]</text>
              </g>
            </svg>
          </div>

          <!-- Panneau d'état sous la scène -->
          <div class="sim-stage-feedback-banner ${calc.zoneBadgeClass}">
            <span class="sim-fb-banner-icon">${calc.heartState === 'fibrillation' ? '💀' : (calc.heartState === 'saved' ? '🛡️' : (calc.heartState === 'off' ? '🔒' : '⚠️'))}</span>
            <div class="sim-fb-banner-text">
              <strong>${isSimulatingCurrent ? calc.zoneTitle : 'Prêt à simuler'}</strong>
              <p>${isSimulatingCurrent ? calc.zoneDesc : 'Lancez l\'animation pour observer comment le courant circule de la main jusqu\'à la terre à travers le corps.'}</p>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  // ÉTAPE 3 : COMPRENDRE LE COURANT DANS LE CORPS & LOI D'OHM
  function renderStep3(calc) {
    return `
      <div class="sim-step-screen sim-step-3">
        <div class="sim-step-intro">
          <div class="sim-intro-icon">👤</div>
          <div>
            <h4 class="sim-step-title">Étape 3 — Comprendre le courant dans le corps humain</h4>
            <p class="sim-step-desc">
              Découvrez les 3 points clés du parcours corporel et la valeur exacte du courant traversant le myocarde.
            </p>
          </div>
        </div>

        <div class="sim-body-analysis-grid">
          
          <!-- Schéma Anatomique des 3 Points Clés -->
          <div class="sim-body-card">
            <h5 class="sim-body-card-title">📍 Trajet du Courant Corporel</h5>
            
            <div class="sim-body-path-steps">
              <div class="sim-path-item">
                <span class="sim-path-num">①</span>
                <div>
                  <strong>Point d'entrée : Contact électrique</strong>
                  <p>La main droite touche la pièce sous tension (${calc.effectiveU} V).</p>
                </div>
              </div>
              <div class="sim-path-item active">
                <span class="sim-path-num">②</span>
                <div>
                  <strong>Traversée interne : Le cœur (Myocarde)</strong>
                  <p>Le courant traverse le thorax et le muscle cardiaque. C'est la zone critique de fibrillation.</p>
                </div>
              </div>
              <div class="sim-path-item">
                <span class="sim-path-num">③</span>
                <div>
                  <strong>Point de sortie : Pieds & Sol</strong>
                  <p>Le courant s'échappe par les pieds vers le sol et rejoint la terre de référence (0 V).</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Hero Métrique du Courant -->
          <div class="sim-hero-metric-card ${calc.zoneBadgeClass}">
            <span class="sim-hero-metric-label">COURANT TRAVERSANT LE CORPS (I<sub>B</sub>)</span>
            <div class="sim-hero-metric-number" style="color:${calc.zoneColor};">
              ${calc.effectiveU === 0 ? '0' : calc.currentMa} <span class="sim-unit">mA</span>
            </div>
            <div class="sim-hero-metric-status">
              <span class="sim-risk-badge ${calc.zoneBadgeClass}">${calc.zone}</span>
            </div>
            <p class="sim-hero-metric-explanation">
              ${calc.effectiveU === 0 ? 'Installation sécurisée : tension nulle.' : `Pour une tension de ${calc.effectiveU} V et une impédance globale de ${calc.zTotal} Ω, le corps est traversé par ${calc.currentMa} mA.`}
            </p>
          </div>
        </div>

        <!-- Module Dépliable : Loi d'Ohm Pédagogique -->
        <div class="sim-ohm-accordion-box">
          <button class="sim-ohm-toggle-btn ${showOhmDetail ? 'expanded' : ''}" id="btnToggleOhm">
            <span>🔎 ${showOhmDetail ? 'Masquer le détail du calcul' : 'Comprendre le calcul (Loi d\'Ohm)'}</span>
            <span class="sim-arrow">${showOhmDetail ? '▲' : '▼'}</span>
          </button>

          ${showOhmDetail ? `
            <div class="sim-ohm-content">
              <div class="sim-ohm-formula-main">
                <div class="sim-ohm-step-box">
                  <span class="sim-step-tag">1. Tension de défaut</span>
                  <strong>U<sub>F</sub> = ${calc.effectiveU} [V]</strong>
                </div>
                <div class="sim-ohm-operator">÷</div>
                <div class="sim-ohm-step-box">
                  <span class="sim-step-tag">2. Somme des résistances</span>
                  <strong>Z<sub>total</sub> = ${zCorps} + ${zChaussures} + ${zSol} = ${calc.zTotal} [Ω]</strong>
                </div>
                <div class="sim-ohm-operator">=</div>
                <div class="sim-ohm-step-box highlight">
                  <span class="sim-step-tag">3. Courant corporel</span>
                  <strong style="color:${calc.zoneColor};">I<sub>B</sub> = ${calc.currentMa} [mA]</strong>
                </div>
              </div>

              <div class="sim-resistances-breakdown-row">
                <div class="sim-rb-cell">
                  <strong>Z<sub>K</sub> (Corps humain)</strong>
                  <span>${zCorps} Ω (Tension U<sub>B</sub> = ${calc.ub} V)</span>
                </div>
                <div class="sim-rb-cell">
                  <strong>Z<sub>1</sub> (Chaussures & habits)</strong>
                  <span>${zChaussures} Ω (Tension ΔU<sub>1</sub> = ${calc.du1} V)</span>
                </div>
                <div class="sim-rb-cell">
                  <strong>Z<sub>2</sub> (Nature du sol)</strong>
                  <span>${zSol} Ω (Tension ΔU<sub>2</sub> = ${calc.du2} V)</span>
                </div>
              </div>
              <small class="sim-ohm-source-note">Conforme aux valeurs de référence de la norme suisse SN EN 61140 & CEI 60479.</small>
            </div>
          ` : ''}
        </div>
      </div>
    `;
  }

  // ÉTAPE 4 : ACTION & RÉACTION (INTERACTION PÉDAGOGIQUE)
  function renderStep4(calc) {
    const actions = [
      {
        id: 'touch',
        icon: '⚡',
        title: '1. Toucher sans protection',
        desc: 'Intervenir directement à mains nues sans consigner ni vérifier l\'absence de tension.',
        type: 'danger'
      },
      {
        id: 'disconnect',
        icon: '🔌',
        title: '2. Consigner hors tension (5 règles)',
        desc: 'Déclencher, condamner, vérifier l\'absence de tension, mettre à terre et en court-circuit.',
        type: 'safe'
      },
      {
        id: 'ppe',
        icon: '🥾',
        title: '3. Utiliser EPI & Tapis isolant',
        desc: 'S\'équiper de bottes de sécurité isolantes (2000 Ω) et se placer sur un tapis isolant (3000 Ω).',
        type: 'safe'
      },
      {
        id: 'ddr',
        icon: '🛡️',
        title: '4. Protéger par DDR 30 mA',
        desc: 'Raccorder le circuit à un dispositif différentiel résiduel haute sensibilité (≤ 25 ms).',
        type: 'safe'
      }
    ];

    return `
      <div class="sim-step-screen sim-step-4">
        <div class="sim-step-intro">
          <div class="sim-intro-icon">🎯</div>
          <div>
            <h4 class="sim-step-title">Étape 4 — Que devez-vous faire face à cette situation ?</h4>
            <p class="sim-step-desc">
              Choisissez l'action que vous mèneriez sur le terrain pour observer son impact immédiat sur votre sécurité.
            </p>
          </div>
        </div>

        <div class="sim-action-choices-grid">
          ${actions.map(act => {
            const isChosen = chosenAction === act.id;
            return `
              <button class="sim-action-btn ${isChosen ? 'chosen ' + act.type : ''}" data-act="${act.id}">
                <span class="sim-act-icon">${act.icon}</span>
                <div class="sim-act-content">
                  <strong class="sim-act-title">${act.title}</strong>
                  <p class="sim-act-desc">${act.desc}</p>
                </div>
              </button>
            `;
          }).join('')}
        </div>

        <!-- Feedback Visuel Immédiat -->
        ${chosenAction ? `
          <div class="sim-action-feedback-box ${chosenAction === 'touch' ? 'fb-danger' : 'fb-success'}">
            <div class="sim-afb-head">
              <span class="sim-afb-icon">${chosenAction === 'touch' ? '⚠️ DANGER MAJEUR' : '✅ SITUATION SÉCURISÉE'}</span>
              <span class="sim-afb-badge">${chosenAction === 'touch' ? 'Non conforme' : 'Bonne pratique suisse'}</span>
            </div>
            
            <div class="sim-afb-body">
              ${chosenAction === 'touch' ? `
                <p><strong>Risque d'électrocution mortelle !</strong> Sans protection ni consignation, le courant de <strong>${calc.currentMa} mA</strong> traverse le corps sans être interrompu. Dès 400 ms, le risque de fibrillation ventriculaire (Zone AC-4) est maximal.</p>
              ` : (chosenAction === 'disconnect' ? `
                <p><strong>Mesure de sécurité suprême (5 Règles de sécurité) !</strong> En coupant l'alimentation et en vérifiant l'absence de tension (0 V), le courant est strictement nul (0 mA). L'intervention est 100% sécurisée.</p>
              ` : (chosenAction === 'ppe' ? `
                <p><strong>Protection individuelle efficace !</strong> Les bottes (2000 Ω) et le tapis isolant (3000 Ω) portent l'impédance totale à plus de 5750 Ω. Le courant chute à moins de 40 mA, limitant considérablement le danger.</p>
              ` : `
                <p><strong>Déclenchement différentiel ultra-rapide !</strong> Le DDR 30 mA détecte la fuite de courant et coupe le circuit en moins de <strong>25 ms</strong>, maintenant l'exposition bien en deçà du seuil de fibrillation ventriculaire !</p>
              `))}
            </div>
          </div>
        ` : `
          <div class="sim-action-placeholder-hint">
            👆 Cliquez sur l'une des 4 actions ci-dessus pour tester votre décision.
          </div>
        `}
      </div>
    `;
  }

  // ÉTAPE 5 : PROTECTIONS & ANALYSE TECHNIQUE (CEI 60479 & PARAMÈTRES)
  function renderStep5(calc) {
    return `
      <div class="sim-step-screen sim-step-5">
        <div class="sim-step-intro">
          <div class="sim-intro-icon">🛡️</div>
          <div>
            <h4 class="sim-step-title">Étape 5 — Comparatif des protections & Analyse technique</h4>
            <p class="sim-step-desc">
              Comparez l'efficacité des différents niveaux de protection et affinez les paramètres de simulation selon vos besoins.
            </p>
          </div>
        </div>

        <!-- Grille de Synthèse des Protections -->
        <div class="sim-protections-summary-grid">
          <div class="sim-prot-card danger">
            <div class="sim-prot-head">
              <span>🔴 Sans protection</span>
              <span class="sim-prot-time">> 500 ms</span>
            </div>
            <p>Danger mortel en zone AC-4. Fibrillation ventriculaire irréversible en cas de choc prolongé.</p>
          </div>

          <div class="sim-prot-card warning">
            <div class="sim-prot-head">
              <span>🟠 Disjoncteur standard</span>
              <span class="sim-prot-time">≤ 400 ms</span>
            </div>
            <p>Coupure automatique à la limite réglementaire des 400 ms pour circuits terminaux.</p>
          </div>

          <div class="sim-prot-card safe">
            <div class="sim-prot-head">
              <span>🟢 Protection DDR 30 mA</span>
              <span class="sim-prot-time">≤ 25 ms</span>
            </div>
            <p>Coupure ultra-rapide garantissant le maintien dans la zone physiologique réversible.</p>
          </div>

          <div class="sim-prot-card safe">
            <div class="sim-prot-head">
              <span>🔒 Consignation (0 V)</span>
              <span class="sim-prot-time">Risque 0</span>
            </div>
            <p>Absence totale de tension et de courant. Garantie de protection maximale.</p>
          </div>
        </div>

        <!-- Bouton Ouvrir Graphique CEI 60479 -->
        <div class="sim-open-graph-banner">
          <div class="sim-og-left">
            <span style="font-size:1.6rem;">📊</span>
            <div>
              <strong>Graphique normatif CEI 60479 / SN EN 61140</strong>
              <p>Visualisez les 4 zones physiologiques (AC-1 à AC-4) et le point dynamique (${calc.currentMa} mA · ${tripTimeMs} ms).</p>
            </div>
          </div>
          <button class="sim-primary-action-btn" id="btnOpenGraphModal">
            <span>Ouvrir l'analyse graphique</span>
            <span>➔</span>
          </button>
        </div>

        <!-- Accordéon : Personnalisation des paramètres -->
        <div class="sim-custom-settings-wrap">
          <button class="sim-settings-toggle-btn ${showCustomSettings ? 'expanded' : ''}" id="btnToggleSettings">
            <span>⚙️ ${showCustomSettings ? 'Masquer les paramètres personnalisés' : 'Personnaliser les paramètres de simulation'}</span>
            <span class="sim-arrow">${showCustomSettings ? '▲' : '▼'}</span>
          </button>

          ${showCustomSettings ? `
            <div class="sim-settings-panel">
              <div class="sim-settings-grid">
                
                <!-- Tension -->
                <div class="sim-setting-group">
                  <label class="sim-sg-label">⚡ Tension de défaut (U<sub>F</sub>)</label>
                  <div class="sim-sg-btn-stack">
                    <button class="sim-pill-btn ${voltageU === 0 ? 'active' : ''}" data-param="u" data-val="0">0 V (Consigné)</button>
                    <button class="sim-pill-btn ${voltageU === 24 ? 'active' : ''}" data-param="u" data-val="24">24 V (TBT)</button>
                    <button class="sim-pill-btn ${voltageU === 230 ? 'active' : ''}" data-param="u" data-val="230">230 V (Réseau CH)</button>
                    <button class="sim-pill-btn ${voltageU === 400 ? 'active' : ''}" data-param="u" data-val="400">400 V (Triphasé)</button>
                  </div>
                </div>

                <!-- Chaussures -->
                <div class="sim-setting-group">
                  <label class="sim-sg-label">👟 Chaussures & Habits (Z<sub>1</sub>)</label>
                  <div class="sim-sg-btn-stack">
                    <button class="sim-pill-btn ${zChaussures === 0 ? 'active' : ''}" data-param="z1" data-val="0">Pieds nus (0 Ω)</button>
                    <button class="sim-pill-btn ${zChaussures === 240 ? 'active' : ''}" data-param="z1" data-val="240">Travail (240 Ω)</button>
                    <button class="sim-pill-btn ${zChaussures === 2000 ? 'active' : ''}" data-param="z1" data-val="2000">Isolantes (2000 Ω)</button>
                  </div>
                </div>

                <!-- Sol -->
                <div class="sim-setting-group">
                  <label class="sim-sg-label">🌍 Nature du Sol (Z<sub>2</sub>)</label>
                  <div class="sim-sg-btn-stack">
                    <button class="sim-pill-btn ${zSol === 0 ? 'active' : ''}" data-param="z2" data-val="0">Mouillé / Eau (0 Ω)</button>
                    <button class="sim-pill-btn ${zSol === 10 ? 'active' : ''}" data-param="z2" data-val="10">Sec standard (10 Ω)</button>
                    <button class="sim-pill-btn ${zSol === 3000 ? 'active' : ''}" data-param="z2" data-val="3000">Tapis isolant (3000 Ω)</button>
                  </div>
                </div>

                <!-- Protection -->
                <div class="sim-setting-group">
                  <label class="sim-sg-label">🛡️ Dispositif de Protection</label>
                  <div class="sim-sg-btn-stack">
                    <button class="sim-pill-btn ${protectionMode === 'none' ? 'active' : ''}" data-param="prot" data-val="none">Sans coupure (>500ms)</button>
                    <button class="sim-pill-btn ${protectionMode === 'breaker' ? 'active' : ''}" data-param="prot" data-val="breaker">Disjoncteur (≤400ms)</button>
                    <button class="sim-pill-btn ${protectionMode === 'ddr' ? 'active' : ''}" data-param="prot" data-val="ddr">DDR 30mA (≤25ms)</button>
                  </div>
                </div>

              </div>
            </div>
          ` : ''}
        </div>
      </div>
    `;
  }

  // ÉTAPE 6 : BILAN PÉDAGOGIQUE & VALIDATION (+25 XP)
  function renderStep6(calc) {
    const answeredCount = Object.keys(quizAnswers).length;
    const score = Object.keys(quizAnswers).filter(k => quizAnswers[k] === quizData[k].correct).length;

    return `
      <div class="sim-step-screen sim-step-6">
        <div class="sim-step-intro">
          <div class="sim-intro-icon">🎉</div>
          <div>
            <h4 class="sim-step-title">Étape 6 — Bilan de sécurité & Validation (+25 XP)</h4>
            <p class="sim-step-desc">
              Félicitations ! Vous avez complété le parcours interactif. Retenez ces 3 principes clés et validez votre défi.
            </p>
          </div>
        </div>

        <!-- Les 3 Règles d'Or -->
        <div class="sim-takeaways-grid">
          <div class="sim-takeaway-item">
            <span class="sim-tk-icon">⏱️</span>
            <strong>1. La règle vitale des 400 ms</strong>
            <p>À 230 mA, la coupure doit impérativement intervenir en moins de 400 ms pour éviter la zone AC-4 de mort subite.</p>
          </div>

          <div class="sim-takeaway-item">
            <span class="sim-tk-icon">🛡️</span>
            <strong>2. L'efficacité du DDR 30 mA</strong>
            <p>Grâce à son temps de déclenchement ultra-court (≤ 25 ms), le DDR interrompt le choc avant le début du cycle cardiaque vulnérable.</p>
          </div>

          <div class="sim-takeaway-item">
            <span class="sim-tk-icon">🔒</span>
            <strong>3. La priorité aux 5 règles</strong>
            <p>La mise hors tension et la vérification de l'absence de tension restent la seule garantie absolue de risque zéro (0 V, 0 mA).</p>
          </div>
        </div>

        <!-- Mini-Quiz de Contrôle des Connaissances -->
        <div class="sim-quiz-direct-wrap">
          <div class="sim-quiz-direct-header">
            <div class="sim-qdh-left">
              <span style="font-size:1.4rem;">🏆</span>
              <div>
                <div style="font-weight:800; font-size:1rem; color:var(--text-primary);">Contrôle des connaissances (+25 XP)</div>
                <div style="font-size:0.82rem; color:var(--text-secondary);">Répondez aux 3 questions pour enregistrer vos points d'expérience.</div>
              </div>
            </div>
            <div class="sim-qdh-score">
              Score : ${score} / ${quizData.length}
            </div>
          </div>

          <div class="sim-questions-stack">
            ${quizData.map((item, qIdx) => {
              const answered = quizAnswers[qIdx] !== undefined;
              const isCorrect = quizAnswers[qIdx] === item.correct;

              return `
                <div class="sim-q-box ${answered ? (isCorrect ? 'q-box-correct' : 'q-box-wrong') : ''}">
                  <div class="sim-q-head">${item.q}</div>
                  <div class="sim-q-btn-grid">
                    ${item.options.map((opt, optIdx) => {
                      let btnCls = 'sim-opt-choice';
                      if (answered) {
                        if (optIdx === item.correct) btnCls += ' choice-correct';
                        else if (quizAnswers[qIdx] === optIdx) btnCls += ' choice-wrong';
                      }
                      return `
                        <button class="${btnCls}" data-q="${qIdx}" data-opt="${optIdx}">
                          <span class="sim-choice-letter">${['A', 'B', 'C', 'D'][optIdx]}</span>
                          <span class="sim-choice-text">${opt}</span>
                        </button>
                      `;
                    }).join('')}
                  </div>
                  ${answered ? `
                    <div class="sim-q-feedback ${isCorrect ? 'fb-pass' : 'fb-fail'}">
                      <strong>${isCorrect ? '✓ Exact !' : '✗ Incorrect.'}</strong> ${item.hint}
                    </div>
                  ` : ''}
                </div>
              `;
            }).join('')}
          </div>

          <div class="sim-quiz-bottom-action">
            <button class="sim-claim-xp-btn" id="btnClaimXp" ${answeredCount < quizData.length ? 'disabled style="opacity:0.5; cursor:not-allowed;"' : ''}>
              <span>${quizDone ? '✓ Défi Validé avec succès (+25 XP)' : 'Enregistrer le Défi (+25 XP)'}</span>
              <span>🎉</span>
            </button>
          </div>
        </div>
      </div>
    `;
  }

  // --------------------------------------------------------------------------
  // Modale Graphique Normatif CEI 60479 (Haute résolution & Lisibilité)
  // --------------------------------------------------------------------------
  function renderTechGraphModal(calc) {
    const dotX = calc.effectiveU === 0 ? toSvgX(0.1) : toSvgX(calc.currentMa);
    const dotY = toSvgY(tripTimeMs);
    const xA = toSvgX(0.5);
    const x230 = toSvgX(230);
    const y400 = toSvgY(400);

    const pathBPoints = ptsCurveB.map(([t, i]) => `${toSvgX(i)},${toSvgY(t)}`).join(' L ');
    const pathBStroke = `M ${pathBPoints}`;
    const pathC1Points = ptsCurveC1.map(([t, i]) => `${toSvgX(i)},${toSvgY(t)}`).join(' L ');
    const pathC1Stroke = `M ${pathC1Points}`;

    const dAc1 = `M ${plotLeft},${plotTop} L ${xA},${plotTop} L ${xA},${plotBottom} L ${plotLeft},${plotBottom} Z`;
    const dAc2 = `M ${xA},${plotTop} L ${pathBPoints} L ${xA},${plotBottom} Z`;
    const ptsC1Rev = [...ptsCurveC1].reverse().map(([t, i]) => `${toSvgX(i)},${toSvgY(t)}`).join(' L ');
    const dAc3 = `M ${toSvgX(ptsCurveB[0][1])},${toSvgY(ptsCurveB[0][0])} L ${pathBPoints} L ${ptsC1Rev} Z`;
    const dAc4 = `M ${toSvgX(ptsCurveC1[0][1])},${toSvgY(ptsCurveC1[0][0])} L ${pathC1Points} L ${plotRight},${plotBottom} L ${plotRight},${plotTop} Z`;

    return `
      <div class="sim-modal-backdrop" id="techGraphBackdrop">
        <div class="sim-techgraph-card" role="dialog" aria-modal="true">
          <div class="sim-modal-header">
            <div>
              <div style="font-weight:800; font-size:1.15rem; color:var(--text-primary);">📈 Courbes Physiologiques CEI 60479 / SN EN 61140</div>
              <div style="font-size:0.8rem; color:var(--text-secondary);">Représentation exacte temps-courant des effets physiologiques du courant alternatif (15 - 100 Hz).</div>
            </div>
            <button class="sim-close-btn" id="btnCloseTechGraph" aria-label="Fermer la modale">✕</button>
          </div>

          <div class="sim-modal-body" style="flex-direction:column;">
            <div class="sim-svg-wrap" style="min-height:360px;">
              <svg viewBox="0 0 660 350" class="sim-svg-graph" aria-label="Courbe normative des zones AC-1 à AC-4">
                <!-- Fond du graphique -->
                <rect x="${plotLeft}" y="${plotTop}" width="${plotRight - plotLeft}" height="${plotBottom - plotTop}" fill="#0a1224" stroke="#334155" stroke-width="1.5" />

                <!-- Zones Physiologiques Colorées -->
                <path d="${dAc1}" fill="rgba(16, 185, 129, 0.18)" />
                <path d="${dAc2}" fill="rgba(245, 158, 11, 0.18)" />
                <path d="${dAc3}" fill="rgba(249, 115, 22, 0.20)" />
                <path d="${dAc4}" fill="rgba(239, 68, 68, 0.24)" />

                <!-- Quadrillage vertical logarithmique (Courant I_B) -->
                ${[0.1, 0.2, 0.5, 1, 2, 5, 10, 20, 50, 100, 500, 1000, 2000].map(i => `
                  <line x1="${toSvgX(i)}" y1="${plotTop}" x2="${toSvgX(i)}" y2="${plotBottom}" stroke="#334155" stroke-width="1" opacity="${i === 0.5 ? '0.7' : '0.4'}" />
                `).join('')}

                <!-- Quadrillage horizontal logarithmique (Durée t) -->
                ${[10, 20, 50, 100, 200, 500, 1000, 2000, 5000, 10000].map(t => `
                  <line x1="${plotLeft}" y1="${toSvgY(t)}" x2="${plotRight}" y2="${toSvgY(t)}" stroke="#334155" stroke-width="1" opacity="0.4" />
                `).join('')}

                <!-- Courbes caractéristiques normées -->
                <!-- Ligne a (0.5 mA) : Seuil de perception -->
                <line x1="${xA}" y1="${plotTop}" x2="${xA}" y2="${plotBottom}" stroke="#475569" stroke-width="2.2" stroke-dasharray="5 3" />
                <!-- Courbe b : Seuil de non-lâcher -->
                <path d="${pathBStroke}" fill="none" stroke="#64748b" stroke-width="2.5" />
                <!-- Courbe c1 : Seuil de fibrillation ventriculaire -->
                <path d="${pathC1Stroke}" fill="none" stroke="#94a3b8" stroke-width="2.5" />

                <!-- Badges des Zones (Positionnés précisément au centre géométrique supérieur de chaque zone sans chevaucher les courbes) -->
                <rect x="${toSvgX(0.22) - 17}" y="34" width="34" height="18" rx="4" fill="#15803d" />
                <text x="${toSvgX(0.22)}" y="46.5" fill="#fff" font-size="8.5" font-weight="900" text-anchor="middle">AC-1</text>

                <rect x="${toSvgX(1.6) - 17}" y="34" width="34" height="18" rx="4" fill="#d97706" />
                <text x="${toSvgX(1.6)}" y="46.5" fill="#fff" font-size="8.5" font-weight="900" text-anchor="middle">AC-2</text>

                <rect x="${toSvgX(16) - 17}" y="34" width="34" height="18" rx="4" fill="#ea580c" />
                <text x="${toSvgX(16)}" y="46.5" fill="#fff" font-size="8.5" font-weight="900" text-anchor="middle">AC-3</text>

                <rect x="${toSvgX(350) - 17}" y="34" width="34" height="18" rx="4" fill="#dc2626" />
                <text x="${toSvgX(350)}" y="46.5" fill="#fff" font-size="8.5" font-weight="900" text-anchor="middle">AC-4</text>

                <!-- Lignes de repères statiques normatifs (Avec cartouches sur la gauche pour éviter toute collision avec les points et courbes) -->
                <!-- Repère réglementaire 400 ms -->
                <line x1="${plotLeft}" y1="${y400}" x2="${plotRight}" y2="${y400}" stroke="#ea580c" stroke-width="1.2" stroke-dasharray="4 3" opacity="0.75" />
                <rect x="${plotLeft + 6}" y="${y400 - 15}" width="168" height="13" rx="3" fill="#0b1329" fill-opacity="0.9" stroke="#ea580c" stroke-width="0.8" />
                <text x="${plotLeft + 10}" y="${y400 - 5}" fill="#ea580c" font-size="7.5" font-weight="700">Seuil maximal réglementaire (≤ 400 ms)</text>

                <!-- Repère DDR 25 ms -->
                <line x1="${plotLeft}" y1="${toSvgY(25)}" x2="${plotRight}" y2="${toSvgY(25)}" stroke="#10b981" stroke-width="1.2" stroke-dasharray="4 3" opacity="0.8" />
                <rect x="${plotLeft + 6}" y="${toSvgY(25) - 15}" width="176" height="13" rx="3" fill="#0b1329" fill-opacity="0.9" stroke="#10b981" stroke-width="0.8" />
                <text x="${plotLeft + 10}" y="${toSvgY(25) - 5}" fill="#10b981" font-size="7.5" font-weight="700">Coupure DDR ≤ 25 ms (Zone de sécurité)</text>

                <!-- Lignes de repères dynamiques associées au point de simulation actuel -->
                ${calc.effectiveU > 0 ? `
                  <line x1="${plotLeft}" y1="${dotY}" x2="${dotX}" y2="${dotY}" stroke="${calc.zoneColor}" stroke-width="1.8" stroke-dasharray="4 3" opacity="0.9" />
                  <line x1="${dotX}" y1="${dotY}" x2="${dotX}" y2="${plotBottom}" stroke="${calc.zoneColor}" stroke-width="1.8" stroke-dasharray="4 3" opacity="0.9" />
                ` : ''}

                <!-- Graduations Y (Durée t en ms - Espacement régulier et net) -->
                ${[10000, 5000, 2000, 1000, 200, 100, 50, 20, 10].map(t => `
                  <text x="76" y="${toSvgY(t) + 3}" fill="#94a3b8" font-size="7.5" font-weight="500" text-anchor="end">${t}</text>
                `).join('')}
                <!-- Repère 400 ms sur l'axe Y -->
                <line x1="${plotLeft - 4}" y1="${y400}" x2="${plotLeft}" y2="${y400}" stroke="#ea580c" stroke-width="2" />
                <text x="76" y="${y400 + 3}" fill="#ea580c" font-size="8" font-weight="800" text-anchor="end">400 ms</text>

                <text x="20" y="150" fill="#94a3b8" font-size="8.5" font-weight="800" transform="rotate(-90 20 150)" text-anchor="middle">Durée de passage du courant [ms]</text>

                <!-- Graduations X (Courant I_B en mA - Sans chevauchement 200 / 230) -->
                ${[0.1, 0.2, 0.5, 1, 2, 5, 10, 20, 50, 100, 500, 1000, 2000].map(i => `
                  <text x="${toSvgX(i)}" y="${plotBottom + 13}" fill="#94a3b8" font-size="7.5" text-anchor="middle">${i}</text>
                `).join('')}
                
                <!-- Tick spécial 230 mA (Cas standard d'école) -->
                <line x1="${x230}" y1="${plotBottom}" x2="${x230}" y2="${plotBottom + 4}" stroke="#ea580c" stroke-width="2" />
                <text x="${x230}" y="${plotBottom + 14}" fill="#ea580c" font-size="8" font-weight="900" text-anchor="middle">230</text>
                
                <!-- Titre Axe X -->
                <text x="345" y="${plotBottom + 30}" fill="#94a3b8" font-size="8.5" font-weight="800" text-anchor="middle">Courant de contact I_B [mA] ───────────►</text>

                <!-- Point de fonctionnement dynamique (Avec pulsation SVG concentrique et étiquette intelligente sans superposition) -->
                ${calc.effectiveU > 0 ? `
                  <g transform="translate(${dotX}, ${dotY})">
                    <!-- Anneau pulsant concentrique -->
                    <circle cx="0" cy="0" r="10" fill="none" stroke="${calc.zoneColor}" stroke-width="2">
                      <animate attributeName="r" values="7;18;7" dur="1.8s" repeatCount="indefinite"/>
                      <animate attributeName="opacity" values="0.9;0.1;0.9" dur="1.8s" repeatCount="indefinite"/>
                    </circle>
                    <!-- Point central -->
                    <circle cx="0" cy="0" r="5.5" fill="#ffffff" stroke="${calc.zoneColor}" stroke-width="2.5" />
                    <!-- Badge d'information au-dessus ou au-dessous du point -->
                    <rect x="-50" y="${dotY < 60 ? 8 : -26}" width="100" height="18" rx="4" fill="#0b1329" stroke="${calc.zoneColor}" stroke-width="1.5" />
                    <text x="0" y="${dotY < 60 ? 20 : -14}" fill="#ffffff" font-size="8.5" font-weight="900" text-anchor="middle">${calc.currentMa} mA · ${tripTimeMs} ms</text>
                  </g>
                ` : `
                  <g transform="translate(${toSvgX(0.1)}, ${toSvgY(10)})">
                    <circle cx="0" cy="0" r="6" fill="#10b981" stroke="#fff" stroke-width="2" />
                    <text x="12" y="4" fill="#10b981" font-size="9" font-weight="800">0 mA (Hors tension)</text>
                  </g>
                `}
              </svg>
            </div>

            <!-- Synthèse de zone sous le graphique -->
            <div class="sim-graph-verdict ${calc.zoneBadgeClass}" style="margin-top:0.85rem;">
              <span class="sim-verdict-icon">${calc.heartState === 'fibrillation' ? '💀' : (calc.heartState === 'saved' ? '🛡️' : (calc.heartState === 'off' ? '🔒' : '⚠️'))}</span>
              <div class="sim-verdict-text">
                <strong>${calc.zoneTitle}</strong>
                <p>${calc.zoneDesc}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  // --------------------------------------------------------------------------
  // Modale Modèle Anatomique & Réseau d'Impédance (CEI 60479 / SN EN 61140)
  // Refonte complète : grande illustration, schéma équivalent, trajets interactifs
  // --------------------------------------------------------------------------
  let skeletonPath = 'hand-feet'; // 'hand-feet' | 'hand-hand' | 'step-step'

  function renderSkeletonModal() {
    let pathTitle = "Trajet Main droite ➔ Deux pieds (Standard)";
    let pathZFormula = "Z_bras (500 Ω) + Z_tronc (500 Ω) + [Z_jambes // (250 Ω)]";
    let pathZTotal = "1250 Ω";
    let pathZHumid = "750 Ω (conditions humides / tension de contact 230 V)";
    let pathDesc = "Cas d'école le plus fréquent lors d'un contact direct avec la main sur un conducteur sous tension et retour par les pieds au sol.";

    if (skeletonPath === 'hand-hand') {
      pathTitle = "Trajet Main ➔ Main (Contact biphasé direct)";
      pathZFormula = "Z_bras_droit (500 Ω) + Z_bras_gauche (500 Ω)";
      pathZTotal = "1000 Ω";
      pathZHumid = "1000 Ω (Traversée directe de la cage thoracique et du cœur)";
      pathDesc = "Contact simultané entre deux phases ou entre phase et neutre avec les deux mains. Le courant traverse directement le muscle cardiaque de part en part.";
    } else if (skeletonPath === 'step-step') {
      pathTitle = "Trajet Pied ➔ Pied (Tension de pas)";
      pathZFormula = "Z_jambe_1 (500 Ω) + Z_jambe_2 (500 Ω)";
      pathZTotal = "1000 Ω";
      pathZHumid = "1000 Ω (Gradient de potentiel au sol lors d'un défaut à la terre)";
      pathDesc = "Différence de potentiel au sol entre deux pas lors d'un écoulement de courant de défaut dans la terre. Le courant ne traverse pas directement le cœur.";
    }

    return `
      <div class="sim-modal-backdrop" id="skeletonBackdrop">
        <div class="sim-skeleton-card" role="dialog" aria-modal="true">
          <div class="sim-modal-header">
            <div>
              <div style="font-weight:800; font-size:1.15rem; color:var(--text-primary);">🦴 Modèle d'impédance du corps humain (CEI 60479)</div>
              <div style="font-size:0.8rem; color:var(--text-secondary);">Convention normative suisse (SN EN 61140 & CEI 60479-1) : 500 [Ω] par membre et tronc.</div>
            </div>
            <button class="sim-close-btn" id="btnCloseSkeleton" aria-label="Fermer la modale">✕</button>
          </div>

          <!-- Onglets des 3 trajets normatifs -->
          <div class="sim-sk-tabs-row">
            <button class="sim-sk-tab ${skeletonPath === 'hand-feet' ? 'active' : ''}" data-path="hand-feet">
              <span>⚡ Main ➔ 2 Pieds</span>
            </button>
            <button class="sim-sk-tab ${skeletonPath === 'hand-hand' ? 'active' : ''}" data-path="hand-hand">
              <span>👐 Main ➔ Main</span>
            </button>
            <button class="sim-sk-tab ${skeletonPath === 'step-step' ? 'active' : ''}" data-path="step-step">
              <span>👣 Pied ➔ Pied (Pas)</span>
            </button>
          </div>

          <div class="sim-modal-body sim-sk-body-grid">
            
            <!-- Grande Illustration Anatomique & Circuit d'Impédances -->
            <div class="sim-sk-visual-column">
              <svg viewBox="0 0 320 390" class="sim-sk-svg-pro" aria-label="Schéma électrique équivalent de l'impédance du corps humain">
                <defs>
                  <filter id="skGlow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="3" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                </defs>

                <!-- Tête -->
                <circle cx="160" cy="40" r="22" fill="#1e293b" stroke="#64748b" stroke-width="2.5" />
                <circle cx="160" cy="40" r="14" fill="#0f172a" />
                <circle cx="154" cy="38" r="2.5" fill="#38bdf8" />
                <circle cx="166" cy="38" r="2.5" fill="#38bdf8" />

                <!-- Tronc / Cage Thoracique & Cœur (500 Ω) -->
                <rect x="120" y="75" width="80" height="120" rx="8" 
                      fill="${skeletonPath !== 'step-step' ? '#0c4a6e' : '#1e293b'}" 
                      stroke="${skeletonPath !== 'step-step' ? '#38bdf8' : '#475569'}" 
                      stroke-width="2.5" />
                <text x="160" y="105" fill="#f8fafc" font-size="11" font-weight="900" text-anchor="middle">TRONC</text>
                <text x="160" y="125" fill="${skeletonPath !== 'step-step' ? '#38bdf8' : '#94a3b8'}" font-size="14" font-weight="900" text-anchor="middle">500 Ω</text>
                
                <!-- Cœur au centre du tronc -->
                <g transform="translate(160, 155)">
                  <path d="M 0 -4 C -5 -10 -13 -6 -13 1 C -13 8 0 15 0 15 C 0 15 13 8 13 1 C 13 -6 5 -10 0 -4 Z" 
                        fill="${skeletonPath !== 'step-step' ? '#ef4444' : '#64748b'}" 
                        stroke="#fff" stroke-width="1.2" 
                        class="${skeletonPath !== 'step-step' ? 'sim-pulsing-heart' : ''}" filter="url(#skGlow)" />
                </g>

                <!-- Bras Droit (Touchant la phase dans le cas main-pieds / main-main) -->
                <!-- Ligne de contact -->
                <line x1="40" y1="100" x2="120" y2="100" 
                      stroke="${skeletonPath !== 'step-step' ? '#ef4444' : '#475569'}" 
                      stroke-width="6" stroke-linecap="round" />
                <!-- Boîtier Résistance Bras Droit -->
                <rect x="42" y="80" width="70" height="40" rx="6" 
                      fill="${skeletonPath !== 'step-step' ? '#7f1d1d' : '#1e293b'}" 
                      stroke="${skeletonPath !== 'step-step' ? '#ef4444' : '#475569'}" stroke-width="2" />
                <text x="77" y="97" fill="#fff" font-size="10" font-weight="800" text-anchor="middle">Bras Droit</text>
                <text x="77" y="112" fill="${skeletonPath !== 'step-step' ? '#fca5a5' : '#94a3b8'}" font-size="12" font-weight="900" text-anchor="middle">500 Ω</text>
                <!-- Point d'entrée -->
                <circle cx="36" cy="100" r="7" fill="${skeletonPath !== 'step-step' ? '#ef4444' : '#64748b'}" stroke="#fff" stroke-width="2" />
                <text x="36" y="70" fill="${skeletonPath !== 'step-step' ? '#ef4444' : '#64748b'}" font-size="9" font-weight="900" text-anchor="middle">ENTRÉE ⚡</text>

                <!-- Bras Gauche -->
                <line x1="200" y1="100" x2="280" y2="100" 
                      stroke="${skeletonPath === 'hand-hand' ? '#10b981' : '#475569'}" 
                      stroke-width="6" stroke-linecap="round" />
                <rect x="208" y="80" width="70" height="40" rx="6" 
                      fill="${skeletonPath === 'hand-hand' ? '#064e3b' : '#1e293b'}" 
                      stroke="${skeletonPath === 'hand-hand' ? '#10b981' : '#475569'}" stroke-width="2" />
                <text x="243" y="97" fill="#fff" font-size="10" font-weight="800" text-anchor="middle">Bras Gauche</text>
                <text x="243" y="112" fill="${skeletonPath === 'hand-hand' ? '#6ee7b7' : '#94a3b8'}" font-size="12" font-weight="900" text-anchor="middle">500 Ω</text>
                ${skeletonPath === 'hand-hand' ? `
                  <circle cx="284" cy="100" r="7" fill="#10b981" stroke="#fff" stroke-width="2" />
                  <text x="284" y="70" fill="#10b981" font-size="9" font-weight="900" text-anchor="middle">SORTIE ➔</text>
                ` : ''}

                <!-- Jambe Droite -->
                <line x1="140" y1="195" x2="115" y2="330" 
                      stroke="${skeletonPath !== 'hand-hand' ? '#38bdf8' : '#475569'}" 
                      stroke-width="6" stroke-linecap="round" />
                <rect x="75" y="235" width="70" height="42" rx="6" 
                      fill="${skeletonPath !== 'hand-hand' ? '#0c4a6e' : '#1e293b'}" 
                      stroke="${skeletonPath !== 'hand-hand' ? '#38bdf8' : '#475569'}" stroke-width="2" />
                <text x="110" y="252" fill="#fff" font-size="10" font-weight="800" text-anchor="middle">Jambe D.</text>
                <text x="110" y="268" fill="${skeletonPath !== 'hand-hand' ? '#38bdf8' : '#94a3b8'}" font-size="12" font-weight="900" text-anchor="middle">500 Ω</text>

                <!-- Jambe Gauche -->
                <line x1="180" y1="195" x2="205" y2="330" 
                      stroke="${skeletonPath !== 'hand-hand' ? '#38bdf8' : '#475569'}" 
                      stroke-width="6" stroke-linecap="round" />
                <rect x="175" y="235" width="70" height="42" rx="6" 
                      fill="${skeletonPath !== 'hand-hand' ? '#0c4a6e' : '#1e293b'}" 
                      stroke="${skeletonPath !== 'hand-hand' ? '#38bdf8' : '#475569'}" stroke-width="2" />
                <text x="210" y="252" fill="#fff" font-size="10" font-weight="800" text-anchor="middle">Jambe G.</text>
                <text x="210" y="268" fill="${skeletonPath !== 'hand-hand' ? '#38bdf8' : '#94a3b8'}" font-size="12" font-weight="900" text-anchor="middle">500 Ω</text>

                <!-- Sorties aux pieds / Terre -->
                ${skeletonPath === 'hand-feet' ? `
                  <circle cx="115" cy="335" r="5" fill="#10b981" />
                  <circle cx="205" cy="335" r="5" fill="#10b981" />
                  <line x1="100" y1="345" x2="220" y2="345" stroke="#10b981" stroke-width="2" />
                  <text x="160" y="365" fill="#10b981" font-size="10" font-weight="900" text-anchor="middle">SORTIE PAR LES DEUX PIEDS (//)</text>
                ` : (skeletonPath === 'step-step' ? `
                  <circle cx="115" cy="335" r="6" fill="#ef4444" stroke="#fff" stroke-width="1.5" />
                  <circle cx="205" cy="335" r="6" fill="#10b981" stroke="#fff" stroke-width="1.5" />
                  <text x="115" y="360" fill="#ef4444" font-size="9" font-weight="800" text-anchor="middle">PAS 1 ⚡</text>
                  <text x="205" y="360" fill="#10b981" font-size="9" font-weight="800" text-anchor="middle">PAS 2 ➔</text>
                ` : '')}
              </svg>
            </div>

            <!-- Colonne Explications, Calcul et Normes -->
            <div class="sim-sk-info-column">
              <div class="sim-sk-path-header">
                <span class="sim-sk-tag">Trajet analysé</span>
                <h5 class="sim-sk-title">${pathTitle}</h5>
                <p class="sim-sk-desc">${pathDesc}</p>
              </div>

              <!-- Cartouche de Calcul Détaillé -->
              <div class="sim-sk-calc-card">
                <span class="sim-sk-calc-label">DÉCOMPOSITION DU CALCUL D'IMPÉDANCE :</span>
                <div class="sim-sk-calc-formula">${pathZFormula}</div>
                
                <div class="sim-sk-hero-results">
                  <div class="sim-sk-res-box">
                    <span class="sim-sk-res-title">Valeur théorique sèche</span>
                    <strong class="sim-sk-res-val">${pathZTotal}</strong>
                  </div>
                  <div class="sim-sk-res-box highlight">
                    <span class="sim-sk-res-title">Valeur conventionnelle (Cours)</span>
                    <strong class="sim-sk-res-val" style="color:var(--electric-blue);">${pathZHumid}</strong>
                  </div>
                </div>
              </div>

              <!-- Note Pédagogique Normative -->
              <div class="sim-sk-note-box">
                <strong>💡 Pourquoi 750 [Ω] dans le cours ?</strong>
                <p>
                  À la tension du réseau (230 V), la couche cornée de la peau claque (perforation diélectrique cutanée). L'impédance totale du corps s'effondre alors à <strong>750 [Ω]</strong> (valeur de dimensionnement retenue par la norme suisse <strong>SN EN 61140</strong> pour garantir la sécurité en milieu de travail).
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    `;
  }

  // --------------------------------------------------------------------------
  // Gestionnaires d'Événements
  // --------------------------------------------------------------------------
  function attachEvents() {
    // Stepper navigation directe par nœuds
    container.querySelectorAll('.sim-step-node').forEach(node => {
      node.addEventListener('click', () => {
        const targetStep = parseInt(node.dataset.goto, 10);
        if (targetStep >= 1 && targetStep <= totalSteps) {
          currentStep = targetStep;
          render();
        }
      });
    });

    // Navigation précédent / suivant
    const btnPrev = container.querySelector('#btnPrevStep');
    if (btnPrev) {
      btnPrev.addEventListener('click', () => {
        if (currentStep > 1) {
          currentStep--;
          render();
        }
      });
    }

    const btnNext = container.querySelector('#btnNextStep');
    if (btnNext) {
      btnNext.addEventListener('click', () => {
        if (currentStep < totalSteps) {
          currentStep++;
          render();
        }
      });
    }

    const btnRestart = container.querySelector('#btnRestartStep');
    if (btnRestart) {
      btnRestart.addEventListener('click', () => {
        currentStep = 1;
        chosenAction = null;
        isSimulatingCurrent = false;
        render();
      });
    }

    // Étape 1 : Cartes de scénarios et bouton de démarrage
    container.querySelectorAll('.sim-hero-card').forEach(card => {
      card.addEventListener('click', () => {
        setScenario(card.dataset.sc);
        render();
      });
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          setScenario(card.dataset.sc);
          render();
        }
      });
    });

    const btnStartFromStep1 = container.querySelector('#btnStartFromStep1');
    if (btnStartFromStep1) {
      btnStartFromStep1.addEventListener('click', () => {
        currentStep = 2;
        isSimulatingCurrent = true;
        render();
      });
    }

    // Étape 2 : Simulation du flux et toggle direct/indirect
    const btnToggleSimulate = container.querySelector('#btnToggleSimulate');
    if (btnToggleSimulate) {
      btnToggleSimulate.addEventListener('click', () => {
        isSimulatingCurrent = !isSimulatingCurrent;
        render();
      });
    }

    const btnDirect = container.querySelector('#btnModeDirect');
    if (btnDirect) {
      btnDirect.addEventListener('click', () => {
        contactType = 'direct';
        render();
      });
    }

    const btnIndirect = container.querySelector('#btnModeIndirect');
    if (btnIndirect) {
      btnIndirect.addEventListener('click', () => {
        contactType = 'indirect';
        render();
      });
    }

    // Étape 3 : Accordéon Loi d'Ohm
    const btnToggleOhm = container.querySelector('#btnToggleOhm');
    if (btnToggleOhm) {
      btnToggleOhm.addEventListener('click', () => {
        showOhmDetail = !showOhmDetail;
        render();
      });
    }

    // Étape 4 : Boutons d'actions
    container.querySelectorAll('.sim-action-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const actId = btn.dataset.act;
        chosenAction = actId;

        if (actId === 'touch') {
          // Sans protection : choc direct 230V
          voltageU = 230;
          protectionMode = 'none';
          tripTimeMs = 500;
        } else if (actId === 'disconnect') {
          // Consignation 0V
          voltageU = 0;
          protectionMode = 'none';
          tripTimeMs = 500;
        } else if (actId === 'ppe') {
          // EPI et tapis
          voltageU = 230;
          zChaussures = 2000;
          zSol = 3000;
          protectionMode = 'none';
          tripTimeMs = 500;
        } else if (actId === 'ddr') {
          // DDR 30 mA
          voltageU = 230;
          protectionMode = 'ddr';
          tripTimeMs = 25;
        }

        render();
      });
    });

    // Étape 5 : Ouvrir graphique et toggle réglages personnalisés
    const btnOpenGraph = container.querySelector('#btnOpenGraphModal');
    if (btnOpenGraph) {
      btnOpenGraph.addEventListener('click', () => {
        showTechGraphModal = true;
        render();
      });
    }

    const btnToggleSettings = container.querySelector('#btnToggleSettings');
    if (btnToggleSettings) {
      btnToggleSettings.addEventListener('click', () => {
        showCustomSettings = !showCustomSettings;
        render();
      });
    }

    // Boutons de personnalisation des paramètres (Pills)
    container.querySelectorAll('.sim-pill-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const param = btn.dataset.param;
        const val = btn.dataset.val;

        if (param === 'u') {
          voltageU = parseInt(val, 10);
        } else if (param === 'z1') {
          zChaussures = parseInt(val, 10);
        } else if (param === 'z2') {
          zSol = parseInt(val, 10);
        } else if (param === 'prot') {
          protectionMode = val;
          if (val === 'ddr') tripTimeMs = 25;
          else if (val === 'breaker') tripTimeMs = 400;
          else tripTimeMs = 500;
        }
        render();
      });
    });

    // Modale Graphique CEI 60479
    const btnToggleTechGraph = container.querySelector('#btnToggleTechGraph');
    if (btnToggleTechGraph) {
      btnToggleTechGraph.addEventListener('click', () => {
        showTechGraphModal = !showTechGraphModal;
        render();
      });
    }

    const btnCloseTechGraph = container.querySelector('#btnCloseTechGraph');
    if (btnCloseTechGraph) {
      btnCloseTechGraph.addEventListener('click', () => {
        showTechGraphModal = false;
        render();
      });
    }

    const techGraphBackdrop = container.querySelector('#techGraphBackdrop');
    if (techGraphBackdrop) {
      techGraphBackdrop.addEventListener('click', (e) => {
        if (e.target === techGraphBackdrop) {
          showTechGraphModal = false;
          render();
        }
      });
    }

    // Modale Anatomique Squelette & Onglets de trajets
    const btnToggleSkeleton = container.querySelector('#btnToggleSkeleton');
    if (btnToggleSkeleton) {
      btnToggleSkeleton.addEventListener('click', () => {
        showSkeletonModal = !showSkeletonModal;
        render();
      });
    }

    container.querySelectorAll('.sim-sk-tab').forEach(tab => {
      tab.addEventListener('click', () => {
        skeletonPath = tab.dataset.path;
        render();
      });
    });

    const btnCloseSkeleton = container.querySelector('#btnCloseSkeleton');
    if (btnCloseSkeleton) {
      btnCloseSkeleton.addEventListener('click', () => {
        showSkeletonModal = false;
        render();
      });
    }

    const skeletonBackdrop = container.querySelector('#skeletonBackdrop');
    if (skeletonBackdrop) {
      skeletonBackdrop.addEventListener('click', (e) => {
        if (e.target === skeletonBackdrop) {
          showSkeletonModal = false;
          render();
        }
      });
    }

    // Étape 6 : Quiz & Claim XP
    container.querySelectorAll('.sim-opt-choice').forEach(btn => {
      btn.addEventListener('click', () => {
        const qIdx = parseInt(btn.dataset.q, 10);
        const optIdx = parseInt(btn.dataset.opt, 10);
        if (quizAnswers[qIdx] === undefined) {
          quizAnswers[qIdx] = optIdx;
          render();
        }
      });
    });

    const btnClaim = container.querySelector('#btnClaimXp');
    if (btnClaim) {
      btnClaim.addEventListener('click', () => {
        quizDone = true;
        try {
          localStorage.setItem('elecbook_securite_simulation_done', 'true');
        } catch (e) {}
        btnClaim.innerHTML = '<span>✓ Défi Enregistré avec succès (+25 XP)</span> <span>🎉</span>';
        btnClaim.style.background = '#10b981';
      });
    }
  }

  render();
  return container;
}

// Alias pour compatibilité ascendante
export function createDangerWidget() {
  return createSecuriteSimulationWidget();
}


// ----------------------------------------------------------------------------
// 3. Chaîne de normalisation NIBT & Symboles (Module N — N0)
// ----------------------------------------------------------------------------
export function createNibtWidget() {
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
export function initOcfoAnnexe4Visual(root) {
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
