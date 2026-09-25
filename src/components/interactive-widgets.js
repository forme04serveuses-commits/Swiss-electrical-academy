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
  container.setAttribute('aria-label', 'Animation pédagogique interactive sur la sécurité électrique');

  // État interactif du simulateur
  let currentMode = 'direct'; // 'direct' | 'indirect' | 'ddr' | 'safe'
  let safetySlider = 0; // 0 = danger, 100 = 100% sécurisé
  let activeView = 'lab'; // 'lab' | 'slider' | 'quiz'

  const modesData = {
    'direct': {
      title: 'Contact direct (Phase nue 230 V)',
      subtitle: 'Sans disjoncteur différentiel 30 mA',
      ub: 230,
      zk: 750,
      zTotal: 1000,
      ib: 230,
      state: 'danger',
      tripTime: 'Non coupé (> 1 s)',
      heartState: 'critical', // 'normal' | 'alert' | 'critical'
      badge: '🛑 DANGER MORTEL',
      badgeColor: '#ef4444',
      reaction: 'AC-4 : Fibrillation ventriculaire cardiaque',
      bodyText: 'Le courant alternatif 50 Hz pénètre par la main droite, traverse le thorax et le cœur, et rejoint la terre par les pieds.',
      consequence: 'Sans coupure en moins de 0.4 s, l\'arrêt cardiaque est quasi certain.',
      actionAdvice: 'Ne jamais toucher un conducteur sans avoir vérifié l\'absence de tension (VAT).'
    },
    'indirect': {
      title: 'Contact indirect (Carcasse en défaut)',
      subtitle: 'Défaut d\'isolement sans protection différentielle',
      ub: 230,
      zk: 750,
      zTotal: 1000,
      ib: 230,
      state: 'danger',
      tripTime: 'Non coupé (> 1 s)',
      heartState: 'critical',
      badge: '⚠️ DÉFAUT DE MASSE',
      badgeColor: '#f59e0b',
      reaction: 'AC-4 : Électrisation sévère à travers la carcasse',
      bodyText: 'Un fil dénudé touche le châssis métallique. En posant la main sur la machine, la personne subit le plein courant de défaut.',
      consequence: 'Les disjoncteurs 16 A ne détectent pas ce faible courant mortel pour l\'homme.',
      actionAdvice: 'Relier toutes les masses à la terre (PE) et installer un DDR 30 mA.'
    },
    'ddr': {
      title: 'Protection active par DDR 30 mA',
      subtitle: 'Dispositif Différentiel Résiduel à haute sensibilité',
      ub: 0,
      zk: 750,
      zTotal: 1000,
      ib: 0,
      state: 'safe',
      tripTime: 'Coupé en ≤ 25 ms',
      heartState: 'normal',
      badge: '🛡️ SAUVÉ PAR LE DDR',
      badgeColor: '#10b981',
      reaction: 'Coupure ultra-rapide avant fibrillation',
      bodyText: 'Dès que le tore détecte 15 à 30 mA de fuite vers la terre, le mécanisme déclenche en moins de 30 millisecondes.',
      consequence: 'L\'énergie traversant le cœur est limitée à un seuil inoffensif. Vie sauvée !',
      actionAdvice: 'Tester régulièrement le bouton test [T] du disjoncteur différentiel.'
    },
    'safe': {
      title: 'Installation consignée (5 Règles vitales)',
      subtitle: 'Mise hors tension + Cadenassage + Mesure au VAT',
      ub: 0,
      zk: 750,
      zTotal: 1000,
      ib: 0,
      state: 'safe',
      tripTime: 'Hors tension (0.0 V)',
      heartState: 'normal',
      badge: '✓ 100% SÉCURISÉ',
      badgeColor: '#10b981',
      reaction: 'Aucun courant — Risque zéro',
      bodyText: 'Les 5 règles de sécurité ont été appliquées : Déclencher, Sécuriser contre le réenclenchement, Vérifier au VAT (0 V).',
      consequence: 'L\'opérateur peut intervenir en toute tranquillité sur les conducteurs.',
      actionAdvice: 'Toujours mesurer au VAT avant de poser les mains.'
    }
  };

  const quizData = [
    {
      q: "1. Quelle intensité traverse le corps lors d'un contact direct 230 V avec une impédance de 1000 Ω ?",
      options: ["23 mA", "230 mA (mortel)", "2.3 A", "16 A"],
      correct: 1,
      hint: "Loi d'Ohm : Ib = Ub / Z = 230 V / 1000 Ω = 0.23 A = 230 mA."
    },
    {
      q: "2. Pourquoi un fusible ou disjoncteur 16 A ne protège-t-il pas une personne contre l'électrisation ?",
      options: [
        "Parce qu'il ne coupe que pour les surcharges (ampères), alors que 50 mA est déjà mortel pour le cœur.",
        "Parce qu'il ne fonctionne qu'en courant continu.",
        "Parce qu'il est trop lent pour les courts-circuits."
      ],
      correct: 0,
      hint: "Seul un Dispositif Différentiel Résiduel (DDR 30 mA) détecte les fuites infimes et protège les vies."
    },
    {
      q: "3. Quel organe vital est en danger immédiat lors d'un trajet de courant Main ➔ Pieds ?",
      options: [
        "Le foie",
        "Le cœur (risque de fibrillation ventriculaire)",
        "Les poumons uniquement"
      ],
      correct: 1,
      hint: "Le courant 50 Hz désynchronise les battements du myocarde, entraînant un arrêt cardiaque immédiat."
    }
  ];

  let quizAnswers = {};
  let quizCompleted = false;

  function render() {
    const current = modesData[currentMode];
    const isDangerous = current.state === 'danger' && safetySlider < 50;
    const effectiveUb = isDangerous ? current.ub : 0;
    const effectiveIb = isDangerous ? current.ib : 0;

    container.innerHTML = `
      <!-- Header Ludique -->
      <div class="sim-play-header">
        <div class="sim-play-badge">
          <span>⚡ ATELIER INTERACTIF</span>
          <span>·</span>
          <span>SÉCURITÉ ÉLECTRIQUE</span>
        </div>
        <h3 class="sim-play-title">Que se passe-t-il lors d'un contact électrique ?</h3>
        <p class="sim-play-subtitle">
          Testez différentes situations en 1 clic, observez le trajet du courant à travers le corps et découvrez comment vous protéger.
        </p>

        <!-- Navigation simple en 3 étapes -->
        <div class="sim-play-nav">
          <button class="sim-nav-btn ${activeView === 'lab' ? 'active' : ''}" data-view="lab">
            <span>🎮</span> 1. Simulateur de choc
          </button>
          <button class="sim-nav-btn ${activeView === 'slider' ? 'active' : ''}" data-view="slider">
            <span>🎚️</span> 2. Curseur Avant / Après
          </button>
          <button class="sim-nav-btn ${activeView === 'quiz' ? 'active' : ''}" data-view="quiz">
            <span>🏆</span> 3. Mini-Défi (+25 XP)
          </button>
        </div>
      </div>

      <!-- VUE 1 : LE SIMULATEUR DE CHOC -->
      ${activeView === 'lab' || activeView === 'slider' ? `
        <!-- Boutons de choix de situation (Grandes Cartes Ludiques) -->
        ${activeView === 'lab' ? `
          <div class="sim-scenarios-bar" role="radiogroup" aria-label="Choisir une situation">
            <button class="sim-scenario-btn ${currentMode === 'direct' ? 'active danger' : ''}" data-mode="direct">
              <span class="sim-btn-icon">⚡</span>
              <span class="sim-btn-text">
                <strong>1. Contact direct 230V</strong>
                <small>Touche le fil nu (Sans DDR)</small>
              </span>
            </button>

            <button class="sim-scenario-btn ${currentMode === 'indirect' ? 'active warning' : ''}" data-mode="indirect">
              <span class="sim-btn-icon">⚠️</span>
              <span class="sim-btn-text">
                <strong>2. Défaut de masse</strong>
                <small>Machine sous tension</small>
              </span>
            </button>

            <button class="sim-scenario-btn ${currentMode === 'ddr' ? 'active safe' : ''}" data-mode="ddr">
              <span class="sim-btn-icon">🛡️</span>
              <span class="sim-btn-text">
                <strong>3. Protégé par DDR 30mA</strong>
                <small>Coupure en 25 ms</small>
              </span>
            </button>

            <button class="sim-scenario-btn ${currentMode === 'safe' ? 'active safe' : ''}" data-mode="safe">
              <span class="sim-btn-icon">🔒</span>
              <span class="sim-btn-text">
                <strong>4. Consigné (0 Volt)</strong>
                <small>5 règles appliquées</small>
              </span>
            </button>
          </div>
        ` : ''}

        <!-- Curseur interactif Avant / Après si mode slider -->
        ${activeView === 'slider' ? `
          <div class="sim-slider-box">
            <div class="sim-slider-labels">
              <span style="color:var(--accent-red); font-weight:800;">⚡ DANGER (0%)</span>
              <span style="color:var(--electric-blue); font-weight:700;">Glissez pour sécuriser : ${safetySlider}%</span>
              <span style="color:#10b981; font-weight:800;">🛡️ SÉCURISÉ (100%)</span>
            </div>
            <input type="range" class="sim-slider-input" id="safetySliderInput" min="0" max="100" step="5" value="${safetySlider}" aria-label="Curseur d'état de sécurité">
            <div style="text-align:center; font-size:0.82rem; color:var(--text-muted); margin-top:0.4rem;">
              ${safetySlider < 50 ? '⚠️ L\'installation est sous tension et non protégée !' : '✓ L\'installation est consignée et coupée (0 Volt).'}
            </div>
          </div>
        ` : ''}

        <!-- SCÈNE VISUELLE INTERACTIVE (SVG HD) -->
        <div class="sim-stage-card ${isDangerous ? 'stage-danger' : 'stage-safe'}">
          <!-- Étiquette d'état en haut de la scène -->
          <div class="sim-status-banner" style="background:${isDangerous ? 'rgba(239, 68, 68, 0.2)' : 'rgba(16, 185, 129, 0.2)'}; border-color:${isDangerous ? '#ef4444' : '#10b981'}; color:${isDangerous ? '#fca5a5' : '#6ee7b7'};">
            <span style="font-size:1.2rem;">${isDangerous ? '⚡' : '🛡️'}</span>
            <strong>${isDangerous ? current.badge : '✓ SITUATION TOTALEMENT SÉCURISÉE'}</strong>
            <span>—</span>
            <span>${isDangerous ? current.reaction : 'Aucun risque de choc électrique'}</span>
          </div>

          <svg viewBox="0 0 760 320" class="sim-svg-scene" aria-label="Illustration interactive de la scène">
            <defs>
              <linearGradient id="gradSky" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stop-color="#0f172a" />
                <stop offset="100%" stop-color="#1e293b" />
              </linearGradient>
              <linearGradient id="gradMan" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stop-color="${isDangerous ? '#f87171' : '#38bdf8'}" />
                <stop offset="100%" stop-color="${isDangerous ? '#dc2626' : '#0284c7'}" />
              </linearGradient>
              <filter id="neonGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="4" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            <!-- Arrière-plan scène -->
            <rect x="0" y="0" width="760" height="320" rx="10" fill="url(#gradSky)" />

            <!-- Sol & Grille de terre -->
            <line x1="20" y1="280" x2="740" y2="280" stroke="#475569" stroke-width="3" />
            <path d="M 500 280 L 500 305 M 485 293 L 515 293 M 490 300 L 510 300 M 495 305 L 505 305" stroke="#10b981" stroke-width="2" />
            <text x="525" y="303" fill="#10b981" font-size="10" font-weight="700">TERRE (PE)</text>

            <!-- 1. TABLEAU ÉLECTRIQUE -->
            <g transform="translate(40, 40)">
              <rect x="0" y="0" width="160" height="230" rx="8" fill="#1e293b" stroke="#334155" stroke-width="2" />
              <rect x="10" y="10" width="140" height="28" rx="4" fill="#0f172a" />
              <text x="80" y="28" fill="#f8fafc" font-size="11" font-weight="800" text-anchor="middle">TABLEAU 230V</text>

              <!-- Disjoncteur Principal / DDR -->
              <rect x="25" y="55" width="110" height="70" rx="6" fill="#0f172a" stroke="${currentMode === 'ddr' || currentMode === 'safe' || safetySlider >= 50 ? '#10b981' : '#ef4444'}" stroke-width="2" />
              <text x="80" y="75" fill="#f8fafc" font-size="10" font-weight="700" text-anchor="middle">
                ${currentMode === 'ddr' ? 'DDR 30mA' : (currentMode === 'safe' || safetySlider >= 50 ? 'DISJONCTEUR' : 'DISJONCTEUR')}
              </text>
              
              <!-- Manette disjoncteur basculante -->
              <rect x="65" y="${isDangerous ? '85' : '98'}" width="30" height="18" rx="3" fill="${isDangerous ? '#ef4444' : '#10b981'}" />
              <text x="80" y="${isDangerous ? '98' : '111'}" fill="#fff" font-size="9" font-weight="800" text-anchor="middle">
                ${isDangerous ? 'ON' : 'OFF'}
              </text>

              <!-- Bornes L1, N, PE -->
              <circle cx="45" cy="190" r="6" fill="#ef4444" />
              <text x="45" y="210" fill="#f87171" font-size="9" font-weight="700" text-anchor="middle">L1 (Phase)</text>

              <circle cx="80" cy="190" r="6" fill="#38bdf8" />
              <text x="80" y="210" fill="#38bdf8" font-size="9" font-weight="700" text-anchor="middle">N (Neutre)</text>

              <circle cx="115" cy="190" r="6" fill="#10b981" />
              <text x="115" y="210" fill="#10b981" font-size="9" font-weight="700" text-anchor="middle">PE (Terre)</text>
            </g>

            <!-- 2. CÂBLES & CONDUCTEURS -->
            <!-- Câble Phase L1 -->
            <path d="M 85 230 L 85 150 L 320 150 L 320 125" fill="none" stroke="${isDangerous ? '#ef4444' : '#475569'}" stroke-width="5" stroke-linecap="round" class="${isDangerous ? 'sim-flowing-wire' : ''}" />
            
            <!-- Point de contact étincelant / Borne -->
            <circle cx="320" cy="125" r="10" fill="${isDangerous ? '#ef4444' : '#64748b'}" stroke="#fff" stroke-width="2" filter="${isDangerous ? 'url(#neonGlow)' : ''}" />
            <text x="320" y="105" fill="${isDangerous ? '#ef4444' : '#94a3b8'}" font-size="12" font-weight="800" text-anchor="middle">
              ${isDangerous ? '⚡ 230 V' : '0 V'}
            </text>

            <!-- Câble Terre PE vers la machine si contact indirect -->
            ${currentMode === 'indirect' ? `
              <rect x="270" y="115" width="80" height="90" rx="6" fill="#334155" stroke="${isDangerous ? '#ef4444' : '#10b981'}" stroke-width="2" />
              <text x="310" y="160" fill="#f8fafc" font-size="10" font-weight="700" text-anchor="middle">MACHINE</text>
              <text x="310" y="175" fill="#fca5a5" font-size="8" text-anchor="middle">Carcasse en défaut</text>
            ` : ''}

            <!-- 3. SILHOUETTE DU TECHNICIEN (Électricien stylisé) -->
            <!-- Casque jaune de sécurité -->
            <ellipse cx="490" cy="52" rx="22" ry="12" fill="#f59e0b" />
            <rect x="472" y="52" width="36" height="5" rx="2" fill="#d97706" />

            <!-- Tête -->
            <circle cx="490" cy="72" r="18" fill="url(#gradMan)" stroke="#38bdf8" stroke-width="1.5" />
            <!-- Visage expressif -->
            <circle cx="484" cy="70" r="2.5" fill="#0f172a" />
            <circle cx="496" cy="70" r="2.5" fill="#0f172a" />
            <path d="M 485 ${isDangerous ? '79 Q 490 74 495 79' : '77 Q 490 82 495 77'}" stroke="#0f172a" stroke-width="2" fill="none" />

            <!-- Tronc / Thorax -->
            <path d="M 470 95 L 510 95 L 505 185 L 475 185 Z" fill="url(#gradMan)" stroke="${isDangerous ? '#ef4444' : '#38bdf8'}" stroke-width="2" />

            <!-- Cœur qui bat ou s'affole -->
            <g transform="translate(488, 122)">
              <path d="M 0 0 C -6 -8 -15 -4 -15 5 C -15 13 0 22 0 22 C 0 22 15 13 15 5 C 15 -4 6 -8 0 0 Z" 
                    fill="${isDangerous ? '#ef4444' : '#10b981'}" 
                    class="${isDangerous ? 'sim-pulsing-heart' : ''}" 
                    stroke="#fff" stroke-width="1.5" filter="${isDangerous ? 'url(#neonGlow)' : ''}" />
            </g>
            <text x="490" y="155" fill="${isDangerous ? '#fca5a5' : '#6ee7b7'}" font-size="8" font-weight="800" text-anchor="middle">
              ${isDangerous ? 'CŒUR (Fibrillation)' : 'CŒUR (OK)'}
            </text>

            <!-- Bras Droit : vers le câble / machine -->
            <path d="M 470 105 L 390 115 L 320 125" fill="none" stroke="${isDangerous ? '#ef4444' : '#38bdf8'}" stroke-width="8" stroke-linecap="round" class="${isDangerous ? 'sim-flowing-wire' : ''}" />
            <!-- Main droite au point de contact -->
            <circle cx="320" cy="125" r="7" fill="#f59e0b" />
            <text x="340" y="145" fill="#f59e0b" font-size="9" font-weight="700">ENTRÉE (Main)</text>

            <!-- Bras Gauche au repos -->
            <path d="M 510 105 L 540 135 L 545 165" fill="none" stroke="#38bdf8" stroke-width="8" stroke-linecap="round" />

            <!-- Jambe Gauche & Pied -->
            <path d="M 480 185 L 475 240 L 465 278" fill="none" stroke="${isDangerous ? '#ef4444' : '#38bdf8'}" stroke-width="9" stroke-linecap="round" class="${isDangerous ? 'sim-flowing-wire' : ''}" />
            <rect x="450" y="274" width="22" height="8" rx="3" fill="#1e293b" stroke="#475569" />

            <!-- Jambe Droite & Pied -->
            <path d="M 500 185 L 505 240 L 515 278" fill="none" stroke="${isDangerous ? '#ef4444' : '#38bdf8'}" stroke-width="9" stroke-linecap="round" class="${isDangerous ? 'sim-flowing-wire' : ''}" />
            <rect x="508" y="274" width="22" height="8" rx="3" fill="#1e293b" stroke="#475569" />

            <text x="490" y="270" fill="${isDangerous ? '#ef4444' : '#10b981'}" font-size="9" font-weight="800" text-anchor="middle">
              SORTIE (Pieds ➔ Terre)
            </text>

            <!-- 4. APPAREIL DE CONTRÔLE VAT (En haut à droite) -->
            <g transform="translate(590, 40)">
              <rect x="0" y="0" width="140" height="100" rx="8" fill="#1e293b" stroke="#334155" stroke-width="2" />
              <text x="70" y="22" fill="#f8fafc" font-size="10" font-weight="800" text-anchor="middle">TESTEUR VAT</text>
              
              <rect x="15" y="32" width="110" height="35" rx="4" fill="#0f172a" />
              <text x="70" y="55" fill="${isDangerous ? '#ef4444' : '#10b981'}" font-size="14" font-weight="900" text-anchor="middle">
                ${isDangerous ? '230 V ⚡' : '0.0 V ✓'}
              </text>
              <text x="70" y="85" fill="#94a3b8" font-size="8" text-anchor="middle">
                ${isDangerous ? 'DANGER SOUS TENSION' : 'ABSENCE DE TENSION'}
              </text>
            </g>
          </svg>

          <!-- 3 Compteurs Clairs & Visuels sous le schéma -->
          <div class="sim-metrics-ribbon">
            <div class="sim-metric-box">
              <span class="sim-metric-title">Tension de contact</span>
              <span class="sim-metric-number" style="color:${isDangerous ? 'var(--accent-red)' : '#10b981'};">
                ${effectiveUb} V
              </span>
              <span class="sim-metric-sub">Tension nominale</span>
            </div>

            <div class="sim-metric-box">
              <span class="sim-metric-title">Résistance du corps</span>
              <span class="sim-metric-number">1000 Ω</span>
              <span class="sim-metric-sub">Convention SN EN 61140</span>
            </div>

            <div class="sim-metric-box">
              <span class="sim-metric-title">Courant dans le cœur</span>
              <span class="sim-metric-number" style="color:${isDangerous ? 'var(--accent-red)' : '#10b981'};">
                ${effectiveIb} mA
              </span>
              <span class="sim-metric-sub">${isDangerous ? '🛑 Fibrillation (Seuil > 80 mA)' : '✓ Inoffensif (0 mA)'}</span>
            </div>

            <div class="sim-metric-box">
              <span class="sim-metric-title">Temps de coupure</span>
              <span class="sim-metric-number" style="font-size:1.05rem; color:${current.state === 'safe' ? '#10b981' : 'var(--accent-red)'};">
                ${isDangerous ? current.tripTime : (currentMode === 'ddr' ? '≤ 25 ms' : '0 V')}
              </span>
              <span class="sim-metric-sub">${currentMode === 'ddr' ? 'DDR instantané' : 'Intervention'}</span>
            </div>
          </div>
        </div>

        <!-- Explication Simple & Percutante en bas de scène -->
        <div class="sim-explanation-card ${isDangerous ? 'exp-danger' : 'exp-safe'}">
          <div class="sim-exp-icon">${isDangerous ? '🚨' : '💡'}</div>
          <div class="sim-exp-content">
            <div class="sim-exp-heading">${current.title} : Que se passe-t-il ?</div>
            <p style="margin:0.25rem 0 0.4rem 0;">${current.bodyText}</p>
            <div class="sim-exp-advice">
              <strong>Conseil de sécurité suisse :</strong> ${current.actionAdvice}
            </div>
          </div>
        </div>
      ` : ''}

      <!-- VUE 3 : LE MINI-DÉFI LUDIQUE (QUIZ) -->
      ${activeView === 'quiz' ? `
        <div class="sim-quiz-section">
          <div class="sim-quiz-header-card">
            <div style="font-size:1.8rem;">🎯</div>
            <div>
              <div style="font-weight:800; font-size:1.1rem; color:var(--text-primary);">Mini-Défi : Maîtrisez-vous les risques électriques ?</div>
              <div style="font-size:0.85rem; color:var(--text-secondary);">Répondez aux 3 questions pour valider vos connaissances et remporter vos points d'expérience.</div>
            </div>
          </div>

          <div class="sim-quiz-cards-list">
            ${quizData.map((item, qIdx) => {
              const answered = quizAnswers[qIdx] !== undefined;
              const isCorrect = quizAnswers[qIdx] === item.correct;

              return `
                <div class="sim-q-card ${answered ? (isCorrect ? 'q-correct' : 'q-wrong') : ''}">
                  <div class="sim-q-title">${item.q}</div>
                  <div class="sim-q-options">
                    ${item.options.map((opt, optIdx) => {
                      let btnClass = 'sim-opt-btn';
                      if (answered) {
                        if (optIdx === item.correct) btnClass += ' opt-correct';
                        else if (quizAnswers[qIdx] === optIdx) btnClass += ' opt-wrong';
                      }
                      return `
                        <button class="${btnClass}" data-q="${qIdx}" data-opt="${optIdx}">
                          <span>${['A', 'B', 'C', 'D'][optIdx]}.</span>
                          <span>${opt}</span>
                        </button>
                      `;
                    }).join('')}
                  </div>
                  ${answered ? `
                    <div class="sim-q-feedback ${isCorrect ? 'fb-correct' : 'fb-wrong'}">
                      <span>${isCorrect ? '✓ Exact !' : '✗ Pas tout à fait.'}</span>
                      <span>${item.hint}</span>
                    </div>
                  ` : ''}
                </div>
              `;
            }).join('')}
          </div>

          <!-- Barre de score et validation -->
          <div class="sim-quiz-footer">
            <div class="sim-quiz-score-badge">
              Score : <strong>${Object.keys(quizAnswers).filter(k => quizAnswers[k] === quizData[k].correct).length} / ${quizData.length}</strong>
            </div>

            <button class="sim-validate-btn" id="btnValidateQuiz" ${Object.keys(quizAnswers).length < quizData.length ? 'disabled style="opacity:0.5; cursor:not-allowed;"' : ''}>
              <span>${quizCompleted ? '✓ Défi Validé (+25 XP)' : 'Valider mon résultat (+25 XP)'}</span>
              <span>🏆</span>
            </button>
          </div>
        </div>
      ` : ''}

      <!-- Mention Pédagogique et Copyright -->
      <div class="sim-legal-attribution">
        ℹ️ <strong>Inspiration pédagogique :</strong> Suva — <em>Stromschlag / Électricité</em> (<a href="https://ssl-server.ch/client/suva/strom/NEU/FR/suva-stromschlag.html" target="_blank" rel="noopener noreferrer" style="color:var(--electric-blue); text-decoration:underline;">suva-stromschlag.html</a>). Modélisation originale ELECBOOK conforme aux normes SN EN 61140, OCFo RS 734.2 et OIBT RS 734.27.
      </div>
    `;

    attachEvents();
  }

  function attachEvents() {
    // Onglets / Vues
    container.querySelectorAll('.sim-nav-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        activeView = btn.dataset.view;
        render();
      });
    });

    // Choix des scénarios (Mode Lab)
    container.querySelectorAll('.sim-scenario-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        currentMode = btn.dataset.mode;
        safetySlider = (currentMode === 'ddr' || currentMode === 'safe') ? 100 : 0;
        render();
      });
    });

    // Slider de sécurité
    const sliderInput = container.querySelector('#safetySliderInput');
    if (sliderInput) {
      sliderInput.addEventListener('input', (e) => {
        safetySlider = parseInt(e.target.value, 10);
        if (safetySlider >= 50) {
          currentMode = 'safe';
        } else {
          currentMode = 'direct';
        }
        render();
      });
    }

    // Options du Mini-Quiz
    container.querySelectorAll('.sim-opt-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const qIdx = parseInt(btn.dataset.q, 10);
        const optIdx = parseInt(btn.dataset.opt, 10);
        if (quizAnswers[qIdx] === undefined) {
          quizAnswers[qIdx] = optIdx;
          render();
        }
      });
    });

    // Bouton de validation du Quiz
    const btnValidate = container.querySelector('#btnValidateQuiz');
    if (btnValidate) {
      btnValidate.addEventListener('click', () => {
        quizCompleted = true;
        try {
          localStorage.setItem('elecbook_securite_simulation_done', 'true');
        } catch (e) {}
        btnValidate.innerHTML = '<span>✓ Félicitations ! Défi Enregistré (+25 XP)</span> <span>🎉</span>';
        btnValidate.style.background = '#10b981';
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
