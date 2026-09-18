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
// 2. Dangers de l'électricité, notions Ub/Ib et 5 règles (Module B — B00)
// ----------------------------------------------------------------------------
export function createDangerWidget() {
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
