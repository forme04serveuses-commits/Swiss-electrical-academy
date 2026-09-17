// Swiss Electrical Academy — Composants Interactifs Pédagogiques (V1.1)
// Widgets spécialisés : Pyramide des lois (A00), Dangers Ub/Ib (B00), Chaîne NIBT (N0)

// ----------------------------------------------------------------------------
// 1. Pyramide des lois suisse (Module A — A00)
// ----------------------------------------------------------------------------
export function createPyramidWidget() {
  const tiersData = [
    {
      level: 1,
      name: "1er rang : Actes de l'Assemblée et du Conseil fédéral",
      color: "tier-1",
      badge: "Lois & Ordonnances fédérales",
      description: "Niveau juridique le plus contraignant. Comprend la LIE (Loi sur les installations électriques, RS 734.0), l'OIBT (Ordonnance sur les installations à basse tension, RS 734.27), l'OCFo (RS 734.2) et l'OTEM. Adoptés par le Parlement et le Conseil fédéral.",
      binding: "Force légale contraignante absolue. Prévaut sur tous les rangs inférieurs."
    },
    {
      level: 2,
      name: "2e rang : Ordonnances du DETEC",
      color: "tier-2",
      badge: "Département fédéral",
      description: "Ordonnances techniques édictées par le Département fédéral de l'environnement, des transports, de l'énergie et de la communication (ex: ordonnance sur le matériel électrique à basse tension).",
      binding: "Prescriptions départementales d'application obligatoire."
    },
    {
      level: 3,
      name: "3e rang : Règles techniques reconnues",
      color: "tier-3",
      badge: "Normes & Directives ESTI",
      description: "NIBT 2025 (SN 411000), normes européennes EN (CENELEC), normes internationales CEI/IEC, et directives officielles de l'ESTI (Inspection fédérale des installations à courant fort).",
      binding: "Leur respect confère la présomption légale de conformité aux ordonnances fédérales (OIBT art. 4)."
    },
    {
      level: 4,
      name: "4e rang : Directives professionnelles & recommandations",
      color: "tier-4",
      badge: "Branches & Réseaux",
      description: "PDIE (Prescriptions des distributeurs d'électricité suisses pour le raccordement au réseau), directives de sécurité du travail SUVA, prescriptions de protection incendie de l'AEAI.",
      binding: "Recommandations professionnelles et conditions techniques de raccordement des gestionnaires de réseau."
    }
  ];

  const container = document.createElement('div');
  container.className = 'interactive-widget-wrapper';
  container.innerHTML = `
    <div class="widget-header">
      <div class="widget-title">📐 Pyramide interactive des prescriptions suisses</div>
      <div class="widget-desc">Cliquez sur un étage de la pyramide pour explorer son niveau d'autorité juridique.</div>
    </div>
    <div class="pyramid-visual">
      <div class="pyramid-tier tier-1 active" data-tier="0">1er rang : Lois & Ordonnances fédérales (LIE, OIBT, OCFo)</div>
      <div class="pyramid-tier tier-2" data-tier="1">2e rang : Ordonnances du DETEC</div>
      <div class="pyramid-tier tier-3" data-tier="2">3e rang : Règles techniques reconnues (NIBT, Directives ESTI)</div>
      <div class="pyramid-tier tier-4" data-tier="3">4e rang : Directives professionnelles (PDIE, SUVA, AEAI)</div>
    </div>
    <div class="pyramid-detail-card" id="pyramidDetailBox">
      <div style="font-weight:700; font-size:1.05rem; color:var(--text-primary); margin-bottom:0.4rem;" id="pyramidDetailTitle">
        ${tiersData[0].name}
      </div>
      <div style="display:inline-block; font-size:0.75rem; font-weight:700; color:var(--electric-blue); background:var(--primary-subtle); padding:0.2rem 0.5rem; border-radius:4px; margin-bottom:0.65rem;" id="pyramidDetailBadge">
        ${tiersData[0].badge}
      </div>
      <p style="line-height:1.55; margin-bottom:0.65rem;" id="pyramidDetailDesc">${tiersData[0].description}</p>
      <div style="font-size:0.8rem; color:var(--warning); font-weight:600;" id="pyramidDetailBinding">
        ⚖️ ${tiersData[0].binding}
      </div>
    </div>

    <!-- Tableau normatif SN / SNR / SNG -->
    <div style="margin-top:1.5rem;">
      <div style="font-weight:700; font-size:0.95rem; color:var(--text-primary); margin-bottom:0.5rem;">
        Tableau officiel des types de normes suisses (SNV / CES)
      </div>
      <table class="thresholds-table">
        <thead>
          <tr>
            <th>Type</th>
            <th>Désignation</th>
            <th>Élaboration</th>
            <th>Validité</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>SN</strong></td>
            <td>Norme suisse</td>
            <td>SNV / CES</td>
            <td><strong>Illimitée</strong></td>
          </tr>
          <tr>
            <td><strong>SNR</strong></td>
            <td>Règle suisse</td>
            <td>Comité technique</td>
            <td><strong>5 ans</strong> (prolongeable 3 ans)</td>
          </tr>
          <tr>
            <td><strong>SNG</strong></td>
            <td>Guide suisse</td>
            <td>Groupe d'experts</td>
            <td><strong>Illimitée</strong> (informatif)</td>
          </tr>
        </tbody>
      </table>
    </div>
  `;

  // Gestion de l'interactivité
  const tiersElements = container.querySelectorAll('.pyramid-tier');
  const titleEl = container.querySelector('#pyramidDetailTitle');
  const badgeEl = container.querySelector('#pyramidDetailBadge');
  const descEl = container.querySelector('#pyramidDetailDesc');
  const bindingEl = container.querySelector('#pyramidDetailBinding');

  tiersElements.forEach(el => {
    el.addEventListener('click', () => {
      tiersElements.forEach(t => t.classList.remove('active'));
      el.classList.add('active');
      const idx = parseInt(el.getAttribute('data-tier'), 10);
      const item = tiersData[idx];
      titleEl.textContent = item.name;
      badgeEl.textContent = item.badge;
      descEl.textContent = item.description;
      bindingEl.textContent = `⚖️ ${item.binding}`;
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
