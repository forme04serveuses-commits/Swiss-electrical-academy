// Swiss Electrical Academy — Vue d'une Leçon (V2.0)
// Respect strict de la séquence pédagogique : Titre -> Objectif -> Intro -> Contenu -> Illustration/Widget -> Cas pratique -> Point important -> Quiz -> Synthèse

import { StorageService } from '../services/storage.js';
import { findFormation } from '../data/academy-data.js';
import { createPyramidWidget, createDangerWidget, createNibtWidget, initOcfoAnnexe4Visual } from '../components/interactive-widgets.js';
import { createQuizEngine } from '../components/quiz.js';
import { createVideoPlayer } from '../components/video-player.js';

export function renderLessonView(container, moduleId, formationId) {
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
  const isLie = formation.parcoursId === 'rs-734-0' || formation.id.startsWith('rs-734-0-');
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
  if (isLie && formation.nextLessonId) {
    if (formation.lessonNumber && formation.lessonNumber < 11) {
      const nextNum = formation.lessonNumber + 1;
      nextRoute = `#/formations/A/rs-734-0/lecon-${nextNum}`;
      nextLabel = `Passer au Chapitre suivant (${nextNum} / 11) →`;
    } else if (formation.lessonNumber === 11) {
      nextRoute = `#/formations/A/rs-734-0/evaluation-finale`;
      nextLabel = `Passer à l'Évaluation finale 🏁 →`;
    }
  } else if (formation.nextChapterId) {
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
        ${isLie ? `
          <span>/</span>
          <a href="#/formations/A/rs-734-0" class="breadcrumb-link">RS 734.0 — LIE</a>
        ` : ''}
        ${isOcfo ? `
          <span>/</span>
          <a href="#/formations/A/rs-734-2" class="breadcrumb-link">RS 734.2 — OCFo</a>
        ` : ''}
        <span>/</span>
        <span>${formation.code}</span>
      </nav>

      <!-- En-tête de leçon (Titre) -->
      <header class="lesson-header-card ${isLie ? 'ocfo-lesson-header' : (isOcfo ? 'ocfo-lesson-header' : '')}">
        <div class="lesson-badges-row">
          <span class="module-code-badge badge-${mod.id}" style="width:30px; height:30px; font-size:0.85rem;">
            ${mod.id}
          </span>
          <span class="formation-code-tag">${formation.code}</span>
          ${isLie && formation.lessonNumber && formation.lessonNumber <= 11 ? `
            <span class="ocfo-progression-pill" style="border-color:rgba(245,158,11,0.4); color:#f59e0b; background:rgba(245,158,11,0.12);">${formation.code} · ${formation.lessonNumber} / 11</span>
          ` : ''}
          ${isLie && formation.isFinalEvaluation ? `
            <span class="ocfo-badge-eval" style="display:inline-block; padding:0.2rem 0.65rem; font-size:0.75rem;">Examen final (11 parties)</span>
          ` : ''}
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
          ${isLie ? `
            <button class="btn-continue" onclick="location.hash='#/formations/A/rs-734-0'" style="background:var(--bg-surface-elevated); color:var(--text-primary); border:1px solid var(--border-medium);">
              ← Sommaire des 11 chapitres LIE
            </button>
          ` : isOcfo ? `
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
        // Si c'est LIE ou OCFo et qu'une leçon suivante existe, naviguer vers la suite ou le hub
        if (isLie) {
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
