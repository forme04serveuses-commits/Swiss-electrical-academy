// Swiss Electrical Academy — Espace Formateur Démonstration (V1.1)
// Statistiques de cohorte, suivi des apprenants et tableau de bord pédagogique

import { TRAINER_DEMO } from '../data/academy-data.js';

export function renderTrainerView(container) {
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
