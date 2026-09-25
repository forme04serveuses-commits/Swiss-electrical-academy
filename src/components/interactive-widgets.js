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
// Inspiration pédagogique : Suva (Stromschlag) & Norme SN EN 61140 / OCFo RS 734.2
// ----------------------------------------------------------------------------
export function createSecuriteSimulationWidget() {
  const container = document.createElement('div');
  container.className = 'securite-sim-container';
  container.setAttribute('role', 'region');
  container.setAttribute('aria-label', 'Simulateur interactif des dangers électriques et mécanismes physiologiques');

  // Données des scénarios
  const scenarios = [
    {
      id: 'scen-a',
      code: 'Scénario A',
      title: 'Contact direct 230 V sans DDR',
      desc: 'Contact direct avec la phase nue L1 (230 VAC). Sans protection différentielle, le courant traverse le thorax.',
      ub: 230,
      zk: 750,
      z1: 240,
      z2: 10,
      state: 'danger',
      powerOn: true,
      ddrActive: false,
      vatTested: false,
      touched: true,
      timeTrip: 'Non coupé (> 1 s)',
      feedbackTitle: '🛑 Danger mortel immédiat (Zone AC-4)',
      feedbackText: 'Le courant alternatif 50 Hz traverse la cage thoracique et le myocarde. Avec 230 mA (bien au-delà du seuil mortel de 80 mA), le risque de fibrillation ventriculaire et d\'arrêt circulatoire est quasi certain en moins de 0.4 seconde.'
    },
    {
      id: 'scen-b',
      code: 'Scénario B',
      title: 'Contact indirect (Défaut de masse)',
      desc: 'Défaut d\'isolement interne d\'une machine. La carcasse métallique est portée sous tension Uf = 230 V.',
      ub: 230,
      zk: 750,
      z1: 240,
      z2: 10,
      state: 'danger',
      powerOn: true,
      ddrActive: false,
      vatTested: false,
      touched: true,
      timeTrip: 'Non coupé (> 1 s)',
      feedbackTitle: '⚠️ Choc électrique grave par contact indirect',
      feedbackText: 'En touchant le carter métallique d\'une machine en défaut non protégée par un DDR, l\'opérateur subit une électrisation majeure. Les coupe-surintensité classiques (10 A ou 16 A) ne protègent absolument pas les personnes.'
    },
    {
      id: 'scen-c',
      code: 'Scénario C',
      title: 'Protection active (DDR 30 mA)',
      desc: 'Le circuit est protégé par un Dispositif Différentiel Résiduel 30 mA. Dès le contact, le tore détecte le déséquilibre.',
      ub: 230,
      zk: 750,
      z1: 240,
      z2: 10,
      state: 'safe',
      powerOn: false,
      ddrActive: true,
      vatTested: false,
      touched: true,
      timeTrip: 'Coupé en ≤ 30 ms',
      feedbackTitle: '🛡️ Personne protégée par le DDR',
      feedbackText: 'Dès que le courant de fuite à la terre dépasse 15 à 30 mA, le DDR déclenche instantanément (t ≤ 30 ms). Le passage de courant est stoppé avant l\'apparition de troubles cardiaques irréversibles.'
    },
    {
      id: 'scen-d',
      code: 'Scénario D',
      title: 'Consignation & 5 Règles vitales',
      desc: 'Installation mise hors tension, consignée et vérifiée au VAT (Vérificateur d\'Absence de Tension).',
      ub: 0,
      zk: 750,
      z1: 240,
      z2: 10,
      state: 'safe',
      powerOn: false,
      ddrActive: true,
      vatTested: true,
      touched: true,
      timeTrip: 'Hors tension (0 V)',
      feedbackTitle: '✓ Situation 100% sécurisée',
      feedbackText: 'Règles 1, 2 et 3 appliquées (Déclencher, Sécuriser, Vérifier au VAT). L\'absence de tension est confirmée. Aucun courant ne peut circuler : l\'opérateur travaille en totale sécurité.'
    }
  ];

  let currentScenarioIdx = 0;
  let activeTab = 'sim'; // 'sim' | 'anatomy' | 'quiz'
  let isPowerOn = true;
  let isDdrActive = false;
  let isVatChecked = false;
  let isHandTouching = true;
  let safetySliderVal = 0; // 0 (danger) à 100 (sécurisé)

  // Questions du Micro-Quiz
  const quizQuestions = [
    {
      q: "1. Selon la norme SN EN 61140, quelle est la convention usuelle pour la résistance totale indicative d'un corps humain en basse tension ?",
      options: ["100 [Ω]", "1000 [Ω]", "10 000 [Ω]", "50 000 [Ω]"],
      correct: 1,
      explanation: "Dans la pratique électrotechnique et les normes de sécurité (SN EN 61140), nous prenons une valeur indicative conventionnelle de 1000 Ω pour le corps humain (environ 500 Ω par membre)."
    },
    {
      q: "2. Sous une tension de défaut de 230 VAC et une impédance globale de 1000 Ω, quelle intensité traverse l'organisme ?",
      options: ["23 mA", "230 mA", "2.3 A", "10 A"],
      correct: 1,
      explanation: "Selon la loi d'Ohm Ib = Ub / R = 230 V / 1000 Ω = 0.23 A = 230 mA, soit près de 3 fois le seuil mortel de fibrillation ventriculaire (80 mA)."
    },
    {
      q: "3. Quel organe vital est principalement menacé lors d'un passage de courant alternatif 50 Hz entre la main droite et les pieds ?",
      options: ["Le foie", "Le muscle cardiaque (cœur)", "Les reins", "Les os"],
      correct: 1,
      explanation: "Le courant 50 Hz traverse la cage thoracique et le myocarde, provoquant une désynchronisation des ventricules (fibrillation ventriculaire) et l'arrêt de la circulation sanguine."
    },
    {
      q: "4. Pourquoi un fusible classique ou disjoncteur 16 A ne protège-t-il pas une personne contre un choc électrique ?",
      options: [
        "Parce qu'il ne déclenche que pour des surintensités de plusieurs ampères, alors que quelques dizaines de milliampères sont déjà mortelles.",
        "Parce qu'il ne fonctionne qu'en courant continu.",
        "Parce qu'il est réservé à la haute tension.",
        "Parce qu'il nécessite une commande manuelle."
      ],
      correct: 0,
      explanation: "Les coupe-surintensité protègent uniquement les câbles et matériels contre l'échauffement (surcharges/courts-circuits). Seul un DDR 30 mA protège les personnes en coupant le circuit dès 15-30 mA en quelques millisecondes."
    }
  ];

  let quizAnswers = {};
  let quizScore = null;

  function renderWidget() {
    const sc = scenarios[currentScenarioIdx];
    
    // Calculs électrotechniques en temps réel
    let effectiveUb = isPowerOn ? (sc.ub * (1 - safetySliderVal / 100)) : 0;
    if (isPowerOn && isDdrActive && isHandTouching) {
      effectiveUb = 0; // DDR coupe immédiatement
    }
    const zTotal = sc.zk + sc.z1 + sc.z2; // 1000 ohms
    const ibVal = isHandTouching ? Math.round((effectiveUb / zTotal) * 1000) : 0; // en mA
    
    // Évaluation du niveau de danger physiologique
    let dangerBadge = '🟢 Sécurisé';
    let dangerClass = 'safe';
    let zoneAC = 'AC-1 (Pas de réaction)';
    if (ibVal >= 80) {
      dangerBadge = '🛑 Risque Mortel (Fibrillation)';
      dangerClass = 'danger';
      zoneAC = 'AC-4 (Effets pathophysiologiques / Arrêt cardiaque)';
    } else if (ibVal >= 50) {
      dangerBadge = '🔴 Danger critique (Asphyxie respiratoire)';
      dangerClass = 'danger';
      zoneAC = 'AC-3 (Troubles respiratoires / Crampes sévères)';
    } else if (ibVal >= 15) {
      dangerBadge = '🟠 Tétanisation musculaire (Non-lâcher)';
      dangerClass = 'warning';
      zoneAC = 'AC-3 (Contractions musculaires involontaires)';
    } else if (ibVal >= 1) {
      dangerBadge = '🟡 Perception tactile';
      dangerClass = 'warning';
      zoneAC = 'AC-2 (Picotements sans effets nocifs)';
    }

    container.innerHTML = `
      <div class="securite-sim-header">
        <div class="securite-sim-badge-tag">⚡ EXPÉRIENCE INTERACTIVE · SÉCURITÉ ÉLECTRIQUE</div>
        <h3 class="securite-sim-title">Animation Interactive — Dangers du contact électrique & Flux corporel</h3>
        <p class="securite-sim-desc">
          Explorez les scénarios professionnels, visualisez la traversée du courant dans l'organisme et testez vos décisions d'intervention selon les normes suisses (SN EN 61140 & OCFo RS 734.2).
        </p>
      </div>

      <!-- Onglets de navigation -->
      <div class="securite-sim-tabs" role="tablist">
        <button class="securite-sim-tab-btn ${activeTab === 'sim' ? 'active' : ''}" data-tab="sim" role="tab" aria-selected="${activeTab === 'sim'}">
          <span>🎛️</span> Scénarios & Décisions
        </button>
        <button class="securite-sim-tab-btn ${activeTab === 'anatomy' ? 'active' : ''}" data-tab="anatomy" role="tab" aria-selected="${activeTab === 'anatomy'}">
          <span>👤</span> Cheminement corporel & Seuils
        </button>
        <button class="securite-sim-tab-btn ${activeTab === 'quiz' ? 'active' : ''}" data-tab="quiz" role="tab" aria-selected="${activeTab === 'quiz'}">
          <span>📝</span> Micro-Quiz de validation
        </button>
      </div>

      ${activeTab === 'sim' ? `
        <!-- Sélecteur de scénarios -->
        <div class="securite-sim-scenario-selector" role="radiogroup" aria-label="Choisir un scénario">
          ${scenarios.map((s, idx) => `
            <div class="securite-sim-scenario-card ${idx === currentScenarioIdx ? 'active' : ''}" data-scenario="${idx}" role="radio" aria-checked="${idx === currentScenarioIdx}" tabindex="0">
              <div class="securite-sim-scenario-code">${s.code}</div>
              <div class="securite-sim-scenario-title">${s.title}</div>
            </div>
          `).join('')}
        </div>

        <!-- Scène Vectorielle Interactive (Schéma SVG) -->
        <div class="securite-sim-scene-box">
          <svg viewBox="0 0 740 320" class="securite-sim-svg-wrap" aria-label="Schéma interactif du circuit électrique et du contact">
            <defs>
              <linearGradient id="gradPanel" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#1e293b"/>
                <stop offset="100%" stop-color="#0f172a"/>
              </linearGradient>
              <linearGradient id="gradBody" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stop-color="#38bdf8"/>
                <stop offset="100%" stop-color="#0284c7"/>
              </linearGradient>
              <filter id="glowAlert" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            <!-- 1. Tableau d'alimentation -->
            <rect x="20" y="30" width="160" height="260" rx="8" fill="url(#gradPanel)" stroke="var(--border-medium)" stroke-width="2"/>
            <text x="100" y="55" fill="var(--text-primary)" font-size="12" font-weight="700" text-anchor="middle">ALIMENTATION 230V</text>
            <line x1="30" y1="65" x2="170" y2="65" stroke="var(--border-subtle)" stroke-width="1"/>

            <!-- Disjoncteur / DDR -->
            <rect x="40" y="85" width="120" height="60" rx="6" fill="#0b1329" stroke="${isDdrActive ? '#10b981' : (isPowerOn ? '#ef4444' : '#64748b')}" stroke-width="2"/>
            <text x="100" y="105" fill="${isDdrActive ? '#10b981' : '#f8fafc'}" font-size="11" font-weight="700" text-anchor="middle">
              ${isDdrActive ? 'DDR 30mA [ACTIF]' : (isPowerOn ? 'DISJONCTEUR [ON]' : 'DISJONCTEUR [OFF]')}
            </text>
            <circle cx="60" cy="125" r="7" fill="${isPowerOn ? '#ef4444' : '#10b981'}"/>
            <text x="75" y="129" fill="var(--text-secondary)" font-size="10">
              ${isPowerOn ? 'Sous tension' : 'Hors tension'}
            </text>

            <!-- Bornier de sortie -->
            <circle cx="50" cy="240" r="5" fill="#f59e0b"/>
            <text x="50" y="260" fill="var(--text-muted)" font-size="10" text-anchor="middle">L1</text>
            <circle cx="100" cy="240" r="5" fill="#38bdf8"/>
            <text x="100" y="260" fill="var(--text-muted)" font-size="10" text-anchor="middle">N</text>
            <circle cx="150" cy="240" r="5" fill="#10b981"/>
            <text x="150" y="260" fill="var(--text-muted)" font-size="10" text-anchor="middle">PE</text>

            <!-- 2. Conducteurs vers l'équipement -->
            <!-- L1 (Phase) -->
            <path d="M 50 240 L 50 180 L 260 180 L 260 120 L 320 120" fill="none" stroke="${isPowerOn ? '#ef4444' : '#64748b'}" stroke-width="4" stroke-linecap="round" class="${isPowerOn && ibVal > 0 ? 'sim-flowing-wire' : ''}"/>
            
            <!-- Point de contact conducteur exposé -->
            <circle cx="320" cy="120" r="9" fill="${isPowerOn ? '#ef4444' : '#64748b'}" stroke="#fff" stroke-width="2" filter="${isPowerOn && isHandTouching ? 'url(#glowAlert)' : ''}"/>
            <text x="320" y="100" fill="${isPowerOn ? '#ef4444' : 'var(--text-muted)'}" font-size="11" font-weight="800" text-anchor="middle">
              ${isPowerOn ? '⚡ 230 VAC' : '0 V'}
            </text>

            <!-- Neutre -->
            <path d="M 100 240 L 100 200 L 290 200 L 290 150 L 320 150" fill="none" stroke="#38bdf8" stroke-width="3" stroke-dasharray="4 2"/>
            
            <!-- PE Terre -->
            <path d="M 150 240 L 150 220 L 320 220" fill="none" stroke="#10b981" stroke-width="3" stroke-dasharray="5 3"/>

            <!-- 3. Silhouette humaine stylisée (Anatomie pédagogique) -->
            <!-- Tête -->
            <circle cx="460" cy="70" r="22" fill="url(#gradBody)" stroke="var(--border-medium)" stroke-width="2"/>
            <circle cx="454" cy="67" r="3" fill="#0f172a"/>
            <circle cx="466" cy="67" r="3" fill="#0f172a"/>

            <!-- Tronc & Thorax -->
            <path d="M 440 95 L 480 95 L 475 190 L 445 190 Z" fill="url(#gradBody)" stroke="var(--border-medium)" stroke-width="2"/>

            <!-- Cœur qui pulse en cas d'électrisation -->
            <g transform="translate(455, 125)">
              <path d="M 0 0 C -6 -8 -16 -4 -16 6 C -16 14 0 24 0 24 C 0 24 16 14 16 6 C 16 -4 6 -8 0 0 Z" 
                    fill="${ibVal > 50 ? '#ef4444' : '#e11d48'}" 
                    class="${ibVal > 50 ? 'sim-pulsing-heart' : ''}" 
                    stroke="#fff" stroke-width="1.5"/>
            </g>

            <!-- Bras droit (touchant le conducteur) -->
            <path d="M 440 105 L 370 115 L 320 120" fill="none" stroke="${isPowerOn && isHandTouching && ibVal > 0 ? '#ef4444' : '#38bdf8'}" stroke-width="7" stroke-linecap="round" class="${isPowerOn && isHandTouching && ibVal > 0 ? 'sim-flowing-wire' : ''}"/>
            <circle cx="320" cy="120" r="5" fill="#f59e0b"/>

            <!-- Bras gauche -->
            <path d="M 480 105 L 515 140 L 520 170" fill="none" stroke="#38bdf8" stroke-width="7" stroke-linecap="round"/>

            <!-- Jambe gauche & Pied gauche -->
            <path d="M 450 190 L 445 250 L 440 280 L 430 280" fill="none" stroke="${isPowerOn && isHandTouching && ibVal > 0 ? '#ef4444' : '#38bdf8'}" stroke-width="8" stroke-linecap="round" class="${isPowerOn && isHandTouching && ibVal > 0 ? 'sim-flowing-wire' : ''}"/>
            
            <!-- Jambe droite & Pied droit -->
            <path d="M 470 190 L 475 250 L 480 280 L 490 280" fill="none" stroke="${isPowerOn && isHandTouching && ibVal > 0 ? '#ef4444' : '#38bdf8'}" stroke-width="8" stroke-linecap="round" class="${isPowerOn && isHandTouching && ibVal > 0 ? 'sim-flowing-wire' : ''}"/>

            <!-- Sol & Prise de terre -->
            <line x1="380" y1="285" x2="560" y2="285" stroke="#64748b" stroke-width="4"/>
            <path d="M 460 285 L 460 305 M 450 295 L 470 295 M 454 300 L 466 300 M 457 305 L 463 305" fill="none" stroke="#10b981" stroke-width="2"/>
            <text x="500" y="305" fill="var(--text-muted)" font-size="10">TERRE DE RÉFÉRENCE</text>

            <!-- 4. Boîtier d'information VAT / Indicateur -->
            <rect x="580" y="30" width="140" height="120" rx="8" fill="url(#gradPanel)" stroke="var(--border-medium)" stroke-width="2"/>
            <text x="650" y="55" fill="var(--text-primary)" font-size="11" font-weight="700" text-anchor="middle">INDICATEUR VAT</text>
            <circle cx="615" cy="80" r="10" fill="${isVatChecked ? (effectiveUb > 0 ? '#ef4444' : '#10b981') : '#334155'}" filter="${isVatChecked ? 'url(#glowAlert)' : ''}"/>
            <text x="635" y="85" fill="var(--text-primary)" font-size="11" font-weight="700">
              ${isVatChecked ? (effectiveUb > 0 ? 'TENSION !' : '0.0 V OK') : 'Non testé'}
            </text>
            <text x="650" y="115" fill="var(--text-muted)" font-size="9" text-anchor="middle">
              ${isVatChecked ? (effectiveUb > 0 ? '⚠️ Présence de tension' : '✓ Absence prouvée') : 'Tester au VAT'}
            </text>
          </svg>
        </div>

        <!-- 4 Actions interactives (Que se passe-t-il ?) -->
        <div class="securite-sim-actions-bar" role="group" aria-label="Actions de décision">
          <button class="securite-sim-action-btn ${isHandTouching && isPowerOn && !isDdrActive ? 'active' : ''}" id="btnToucher">
            <span style="font-size:1.2rem;">⚡</span>
            <span>1. Toucher le câble</span>
            <span style="font-size:0.72rem; color:var(--text-muted);">Simuler contact</span>
          </button>
          
          <button class="securite-sim-action-btn ${!isPowerOn ? 'active' : ''}" id="btnCouper">
            <span style="font-size:1.2rem;">🔌</span>
            <span>2. Mettre hors tension</span>
            <span style="font-size:0.72rem; color:var(--text-muted);">Règle 1 : Déclencher</span>
          </button>
          
          <button class="securite-sim-action-btn ${isVatChecked ? 'active' : ''}" id="btnVat">
            <span style="font-size:1.2rem;">🔍</span>
            <span>3. Vérifier au VAT</span>
            <span style="font-size:0.72rem; color:var(--text-muted);">Règle 3 : Mesurer</span>
          </button>
          
          <button class="securite-sim-action-btn ${isDdrActive ? 'active' : ''}" id="btnDdr">
            <span style="font-size:1.2rem;">🛡️</span>
            <span>4. Activer DDR 30mA</span>
            <span style="font-size:0.72rem; color:var(--text-muted);">Protection différentielle</span>
          </button>
        </div>

        <!-- Curseur interactif Avant / Après (Danger ↔ Sécurité) -->
        <div class="securite-sim-slider-wrap">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.6rem; font-size:0.85rem; font-weight:700;">
            <span style="color:var(--accent-red);">⚡ ÉTAT DE DANGER (0%)</span>
            <span style="color:var(--electric-blue);">Niveau de consignation : ${safetySliderVal}%</span>
            <span style="color:#10b981;">🛡️ SITUATION SÉCURISÉE (100%)</span>
          </div>
          <input type="range" id="simSafetySlider" min="0" max="100" step="10" value="${safetySliderVal}" style="width:100%; cursor:pointer; accent-color:var(--accent-red);" aria-label="Curseur d'état de danger et de sécurité"/>
        </div>

        <!-- Métriques en temps réel -->
        <div class="securite-sim-metrics-grid">
          <div class="securite-sim-metric-card">
            <div class="securite-sim-metric-lbl">Tension de contact Ub</div>
            <div class="securite-sim-metric-val" style="color:${effectiveUb > 50 ? 'var(--accent-red)' : '#10b981'};">${effectiveUb} V</div>
            <div style="font-size:0.72rem; color:var(--text-muted);">Loi d'Ohm Ib = Ub / Z</div>
          </div>

          <div class="securite-sim-metric-card">
            <div class="securite-sim-metric-lbl">Impédance totale Z</div>
            <div class="securite-sim-metric-val">1000 Ω</div>
            <div style="font-size:0.72rem; color:var(--text-muted);">750Ω (corps) + 250Ω (sol)</div>
          </div>

          <div class="securite-sim-metric-card">
            <div class="securite-sim-metric-lbl">Courant corporel Ib</div>
            <div class="securite-sim-metric-val" style="color:${ibVal > 50 ? 'var(--accent-red)' : (ibVal > 0 ? 'var(--warning)' : '#10b981')};">${ibVal} mA</div>
            <div style="font-size:0.72rem; color:var(--text-muted);">${zoneAC}</div>
          </div>

          <div class="securite-sim-metric-card">
            <div class="securite-sim-metric-lbl">Diagnostic vital</div>
            <div class="securite-sim-metric-val" style="font-size:1rem; color:${dangerClass === 'danger' ? 'var(--accent-red)' : (dangerClass === 'warning' ? 'var(--warning)' : '#10b981')};">
              ${dangerBadge}
            </div>
            <div style="font-size:0.72rem; color:var(--text-muted);">${isDdrActive ? 'Coupure ≤ 30 ms' : sc.timeTrip}</div>
          </div>
        </div>

        <!-- Feedback explicatif pédagogique -->
        <div class="securite-sim-feedback ${dangerClass}" role="status" aria-live="polite">
          <div style="font-size:1.5rem;">${dangerClass === 'danger' ? '🛑' : (dangerClass === 'warning' ? '⚠️' : '✓')}</div>
          <div>
            <div style="font-weight:800; font-size:0.95rem; margin-bottom:0.25rem;">${sc.feedbackTitle}</div>
            <div>${sc.feedbackText}</div>
          </div>
        </div>
      ` : ''}

      ${activeTab === 'anatomy' ? `
        <!-- Onglet 2 : Anatomie & Cheminement du courant -->
        <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap:1.25rem; margin-bottom:1.5rem;">
          <div style="background:var(--bg-app); border:1px solid var(--border-medium); border-radius:10px; padding:1.25rem; text-align:center;">
            <div style="font-weight:800; font-size:1rem; color:var(--text-primary); margin-bottom:0.75rem;">Trajet corporel du courant alternatif (Main-Pieds)</div>
            <svg viewBox="0 0 300 360" style="width:100%; max-width:240px; margin:0 auto; display:block;">
              <!-- Silhouette détaillée -->
              <circle cx="150" cy="50" r="28" fill="url(#gradBody)"/>
              <path d="M 120 85 L 180 85 L 175 220 L 125 220 Z" fill="url(#gradBody)"/>
              
              <!-- Cœur -->
              <g transform="translate(145, 130)">
                <path d="M 0 0 C -8 -10 -20 -5 -20 8 C -20 18 0 30 0 30 C 0 30 20 18 20 8 C 20 -5 8 -10 0 0 Z" fill="#ef4444" class="sim-pulsing-heart"/>
              </g>

              <!-- Bras droit (Entrée) -->
              <path d="M 120 95 L 40 120" stroke="#ef4444" stroke-width="8" stroke-linecap="round" class="sim-flowing-wire"/>
              <circle cx="40" cy="120" r="7" fill="#f59e0b"/>
              <text x="40" y="105" fill="#f59e0b" font-size="10" font-weight="700" text-anchor="middle">ENTRÉE (Main)</text>

              <!-- Bras gauche -->
              <path d="M 180 95 L 250 140" stroke="#38bdf8" stroke-width="8" stroke-linecap="round"/>

              <!-- Jambe gauche & droite (Sortie) -->
              <path d="M 135 220 L 125 310 L 110 310" stroke="#ef4444" stroke-width="9" stroke-linecap="round" class="sim-flowing-wire"/>
              <path d="M 165 220 L 175 310 L 190 310" stroke="#ef4444" stroke-width="9" stroke-linecap="round" class="sim-flowing-wire"/>
              
              <text x="150" y="340" fill="#10b981" font-size="10" font-weight="700" text-anchor="middle">SORTIE (Pieds / Terre)</text>
            </svg>
          </div>

          <div>
            <div style="font-weight:800; font-size:1rem; color:var(--text-primary); margin-bottom:0.75rem;">Seuils physiologiques normatifs (50 Hz)</div>
            <div class="ocfo-density-table-wrap" style="margin-bottom:1rem;">
              <table class="ocfo-density-table">
                <thead>
                  <tr>
                    <th>Intensité</th>
                    <th>Zone</th>
                    <th>Effet physiologique sur l'organisme</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td><strong>1 [mA]</strong></td><td>AC-1</td><td>Seuil de perception (léger picotement sans danger).</td></tr>
                  <tr><td><strong>5 [mA]</strong></td><td>AC-2</td><td>Électrisation ressentie, fourmillements.</td></tr>
                  <tr><td><strong>15 [mA]</strong></td><td>AC-3</td><td>Seuil de contraction musculaire (tétanisation / non-lâcher).</td></tr>
                  <tr><td><strong>50 [mA]</strong></td><td>AC-3</td><td>Seuil de danger : respiration gênée, asphyxie si prolongé.</td></tr>
                  <tr style="background:rgba(239, 68, 68, 0.12); color:#fca5a5;">
                    <td><strong>≥ 80 [mA]</strong></td><td>AC-4</td><td><strong>Seuil mortel :</strong> fibrillation ventriculaire et arrêt cardiaque.</td></tr>
                </tbody>
              </table>
            </div>

            <div class="ocfo-highlight-card">
              <div class="card-title">⚖️ Décomposition de l'impédance totale de boucle (1000 Ω)</div>
              • <strong>ZK (Corps humain) :</strong> 750 [Ω] (convention 500 Ω par membre)<br>
              • <strong>Z1 (Chaussures de sécurité) :</strong> 240 [Ω]<br>
              • <strong>Z2 (Résistance de contact sol) :</strong> 10 [Ω]<br>
              <strong>Total :</strong> 1000 [Ω] → Courant de contact IB = 230 V / 1000 Ω = 230 [mA].
            </div>
          </div>
        </div>
      ` : ''}

      ${activeTab === 'quiz' ? `
        <!-- Onglet 3 : Micro-Quiz interactif -->
        <div class="securite-sim-quiz-wrap">
          <div style="font-weight:800; font-size:1.05rem; color:var(--text-primary); margin-bottom:1rem;">
            📝 Micro-Quiz d'évaluation des acquis (4 questions)
          </div>

          <div style="display:flex; flex-direction:column; gap:1.25rem;">
            ${quizQuestions.map((qItem, qIdx) => {
              const selectedOpt = quizAnswers[qIdx];
              const isAnswered = selectedOpt !== undefined;
              const isCorrect = selectedOpt === qItem.correct;

              return `
                <div style="background:var(--bg-surface-elevated); border:1px solid ${isAnswered ? (isCorrect ? '#10b981' : 'var(--accent-red)') : 'var(--border-subtle)'}; border-radius:8px; padding:1.1rem;">
                  <div style="font-weight:700; font-size:0.92rem; color:var(--text-primary); margin-bottom:0.75rem;">
                    ${qItem.q}
                  </div>
                  <div style="display:flex; flex-direction:column; gap:0.5rem;">
                    ${qItem.options.map((opt, optIdx) => {
                      let btnStyle = 'background:var(--bg-app); border:1px solid var(--border-medium); color:var(--text-secondary);';
                      if (isAnswered) {
                        if (optIdx === qItem.correct) {
                          btnStyle = 'background:rgba(16, 185, 129, 0.2); border:1px solid #10b981; color:#10b981; font-weight:700;';
                        } else if (selectedOpt === optIdx) {
                          btnStyle = 'background:rgba(239, 68, 68, 0.2); border:1px solid var(--accent-red); color:var(--accent-red); font-weight:700;';
                        }
                      }
                      return `
                        <button class="sim-quiz-opt-btn" data-q="${qIdx}" data-opt="${optIdx}" style="${btnStyle} padding:0.6rem 0.85rem; border-radius:6px; text-align:left; cursor:pointer; font-size:0.85rem; transition:all 0.15s ease;">
                          ${opt}
                        </button>
                      `;
                    }).join('')}
                  </div>
                  ${isAnswered ? `
                    <div style="margin-top:0.75rem; font-size:0.82rem; line-height:1.5; color:${isCorrect ? '#10b981' : 'var(--accent-red)'}; background:rgba(0,0,0,0.2); padding:0.65rem; border-radius:6px;">
                      <strong>${isCorrect ? '✓ Exact !' : '✗ Erreur.'}</strong> ${qItem.explanation}
                    </div>
                  ` : ''}
                </div>
              `;
            }).join('')}
          </div>

          <div style="margin-top:1.5rem; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:1rem;">
            <div>
              ${Object.keys(quizAnswers).length === quizQuestions.length ? `
                <span style="font-weight:800; font-size:1rem; color:#10b981;">
                  Score final : ${Object.keys(quizAnswers).filter(k => quizAnswers[k] === quizQuestions[k].correct).length} / ${quizQuestions.length}
                </span>
              ` : `
                <span style="font-size:0.85rem; color:var(--text-muted);">
                  Répondez aux 4 questions pour valider la simulation.
                </span>
              `}
            </div>
            <button id="btnValidateSimulation" style="display:inline-flex; align-items:center; gap:0.5rem; background:var(--accent-red); color:#fff; font-weight:700; padding:0.65rem 1.25rem; border-radius:8px; border:none; cursor:pointer;" ${Object.keys(quizAnswers).length < quizQuestions.length ? 'disabled style="opacity:0.5; cursor:not-allowed;"' : ''}>
              <span>Valider la simulation (+25 XP)</span>
              <span>✓</span>
            </button>
          </div>
        </div>
      ` : ''}

      <!-- Attribution pédagogique officielle -->
      <div class="securite-sim-attribution">
        ℹ️ <strong>Attribution pédagogique :</strong> Inspiration pédagogique : Suva — <em>Stromschlag / Électricité</em> (<a href="https://ssl-server.ch/client/suva/strom/NEU/FR/suva-stromschlag.html" target="_blank" rel="noopener noreferrer" style="color:var(--electric-blue); text-decoration:underline;">suva-stromschlag.html</a>) & Normes électrotechniques suisses (SN EN 61140, OCFo RS 734.2, OIBT RS 734.27). Modélisation et composants vectoriels interactifs originaux ELECBOOK.
      </div>
    `;

    // Attachement des gestionnaires d'événements
    attachEvents();
  }

  function attachEvents() {
    // Changement d'onglets
    container.querySelectorAll('.securite-sim-tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        activeTab = btn.dataset.tab;
        renderWidget();
      });
    });

    // Changement de scénario
    container.querySelectorAll('.securite-sim-scenario-card').forEach(card => {
      card.addEventListener('click', () => {
        currentScenarioIdx = parseInt(card.dataset.scenario, 10);
        const sc = scenarios[currentScenarioIdx];
        isPowerOn = sc.powerOn;
        isDdrActive = sc.ddrActive;
        isVatChecked = sc.vatTested;
        isHandTouching = sc.touched;
        safetySliderVal = sc.state === 'safe' ? 100 : 0;
        renderWidget();
      });
    });

    // Boutons d'action
    const btnToucher = container.querySelector('#btnToucher');
    if (btnToucher) {
      btnToucher.addEventListener('click', () => {
        isHandTouching = !isHandTouching;
        renderWidget();
      });
    }

    const btnCouper = container.querySelector('#btnCouper');
    if (btnCouper) {
      btnCouper.addEventListener('click', () => {
        isPowerOn = !isPowerOn;
        if (!isPowerOn) safetySliderVal = 100;
        else safetySliderVal = 0;
        renderWidget();
      });
    }

    const btnVat = container.querySelector('#btnVat');
    if (btnVat) {
      btnVat.addEventListener('click', () => {
        isVatChecked = true;
        renderWidget();
      });
    }

    const btnDdr = container.querySelector('#btnDdr');
    if (btnDdr) {
      btnDdr.addEventListener('click', () => {
        isDdrActive = !isDdrActive;
        renderWidget();
      });
    }

    // Slider de sécurité
    const slider = container.querySelector('#simSafetySlider');
    if (slider) {
      slider.addEventListener('input', (e) => {
        safetySliderVal = parseInt(e.target.value, 10);
        if (safetySliderVal >= 50) {
          isPowerOn = false;
        } else {
          isPowerOn = true;
        }
        renderWidget();
      });
    }

    // Micro-quiz options
    container.querySelectorAll('.sim-quiz-opt-btn').forEach(optBtn => {
      optBtn.addEventListener('click', () => {
        const qIdx = parseInt(optBtn.dataset.q, 10);
        const optIdx = parseInt(optBtn.dataset.opt, 10);
        if (quizAnswers[qIdx] === undefined) {
          quizAnswers[qIdx] = optIdx;
          renderWidget();
        }
      });
    });

    // Validation finale de la simulation
    const btnValSim = container.querySelector('#btnValidateSimulation');
    if (btnValSim) {
      btnValSim.addEventListener('click', () => {
        try {
          localStorage.setItem('elecbook_securite_simulation_done', 'true');
        } catch (e) {}
        btnValSim.textContent = '✓ Simulation enregistrée avec succès !';
        btnValSim.style.background = '#10b981';
      });
    }
  }

  // Rendu initial
  renderWidget();
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
