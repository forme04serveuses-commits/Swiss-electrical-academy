// Swiss Electrical Academy — Vue d'une Leçon (V2.0)
// Respect strict de la séquence pédagogique : Titre -> Objectif -> Intro -> Contenu -> Illustration/Widget -> Cas pratique -> Point important -> Quiz -> Synthèse

import { StorageService } from '../services/storage.js';
import { ProgressionService } from '../services/progression.js';
import { findFormation } from '../data/academy-data.js';
import { createPyramidWidget, createDangerWidget, createNibtWidget, initOcfoAnnexe4Visual } from '../components/interactive-widgets.js';
import { createQuizEngine } from '../components/quiz.js';
import { createVideoPlayer } from '../components/video-player.js';

export function renderLessonView(container, moduleId, formationId) {
  // Défilement immédiat au sommet dès l'entrée dans la leçon
  if (container) container.scrollTop = 0;
  window.scrollTo(0, 0);
  if (window.scrollToTop) window.scrollToTop(container);

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
  const isPyramide = formation.parcoursId === 'pyramide-lois' || formation.id.startsWith('pyr-');
  const isLie = formation.parcoursId === 'rs-734-0' || formation.id.startsWith('rs-734-0-');
  const isOcfo = formation.parcoursId === 'rs-734-2' || formation.id.startsWith('rs-734-2-');
  const isOibt = formation.parcoursId === 'rs-734-27' || formation.id.startsWith('rs-734-27-');
  const isOrni = formation.parcoursId === 'rs-814-710' || formation.id.startsWith('rs-814-710-');

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

  const totalPyramide = isPyramide ? ProgressionService.getParcoursProgress('pyramide-lois').lessonsTotal : 4;
  const totalLie = isLie ? ProgressionService.getParcoursProgress('rs-734-0').lessonsTotal : 11;
  const totalOcfo = isOcfo ? ProgressionService.getParcoursProgress('rs-734-2').lessonsTotal : 8;
  const totalOibt = isOibt ? ProgressionService.getParcoursProgress('rs-734-27').lessonsTotal : 7;
  const totalOrni = isOrni ? ProgressionService.getParcoursProgress('rs-814-710').lessonsTotal : 7;

  // Déterminer les routes de navigation séquentielle
  let nextRoute = null;
  let nextLabel = null;
  if (isPyramide && formation.nextLessonId) {
    if (formation.lessonNumber && formation.lessonNumber < totalPyramide) {
      const nextNum = formation.lessonNumber + 1;
      nextRoute = `#/formations/A/pyramide-lois/pyr-0${nextNum}`;
      nextLabel = `Passer à la Leçon ${nextNum} (${nextNum} / ${totalPyramide}) →`;
    } else if (formation.lessonNumber === totalPyramide) {
      nextRoute = `#/formations/A/pyramide-lois/evaluation-finale`;
      nextLabel = `Passer à l'Évaluation finale 🏁 →`;
    }
  } else if (isLie && formation.nextLessonId) {
    if (formation.lessonNumber && formation.lessonNumber < totalLie) {
      const nextNum = formation.lessonNumber + 1;
      nextRoute = `#/formations/A/rs-734-0/lecon-${nextNum}`;
      nextLabel = `Passer au Chapitre suivant (${nextNum} / ${totalLie}) →`;
    } else if (formation.lessonNumber === totalLie) {
      nextRoute = `#/formations/A/rs-734-0/evaluation-finale`;
      nextLabel = `Passer à l'Évaluation finale 🏁 →`;
    }
  } else if (isOibt && formation.nextLessonId) {
    if (formation.lessonNumber && formation.lessonNumber < totalOibt) {
      const nextNum = formation.lessonNumber + 1;
      nextRoute = `#/formations/A/rs-734-27/lecon-${nextNum}`;
      nextLabel = `Passer à la Leçon ${nextNum} (${nextNum} / ${totalOibt}) →`;
    } else if (formation.lessonNumber === totalOibt) {
      nextRoute = `#/formations/A/rs-734-27/evaluation-finale`;
      nextLabel = `Passer à l'Évaluation finale 🏁 →`;
    }
  } else if (isOrni && formation.nextLessonId) {
    if (formation.lessonNumber && formation.lessonNumber < totalOrni) {
      const nextNum = formation.lessonNumber + 1;
      nextRoute = `#/formations/A/rs-814-710/lecon-${nextNum}`;
      nextLabel = `Passer à la Leçon ${nextNum} (${nextNum} / ${totalOrni}) →`;
    } else if (formation.lessonNumber === totalOrni) {
      nextRoute = `#/formations/A/rs-814-710/evaluation-finale`;
      nextLabel = `Passer à l'Évaluation finale 🏁 →`;
    }
  } else if (formation.nextChapterId) {
    const nextNum = formation.chapterNumber + 1;
    if (nextNum < totalOcfo) {
      nextRoute = `#/formations/A/rs-734-2/chapitre-${nextNum}`;
      nextLabel = `Passer au Chapitre ${nextNum} / ${totalOcfo} →`;
    } else if (nextNum === totalOcfo) {
      nextRoute = `#/formations/A/rs-734-2/annexes`;
      nextLabel = `Passer à la Leçon ${totalOcfo} (Annexes 1 à 4) →`;
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
        ${isPyramide ? `
          <span>/</span>
          <a href="#/formations/A/pyramide-lois" class="breadcrumb-link">Pyramide des lois</a>
        ` : ''}
        ${isLie ? `
          <span>/</span>
          <a href="#/formations/A/rs-734-0" class="breadcrumb-link">RS 734.0 — LIE</a>
        ` : ''}
        ${isOcfo ? `
          <span>/</span>
          <a href="#/formations/A/rs-734-2" class="breadcrumb-link">RS 734.2 — OCFo</a>
        ` : ''}
        ${isOibt ? `
          <span>/</span>
          <a href="#/formations/A/rs-734-27" class="breadcrumb-link">RS 734.27 — OIBT</a>
        ` : ''}
        ${isOrni ? `
          <span>/</span>
          <a href="#/formations/A/rs-814-710" class="breadcrumb-link">RS 814.710 — ORNI</a>
        ` : ''}
        <span>/</span>
        <span>${formation.code}</span>
      </nav>

      <!-- En-tête de leçon (Titre) -->
      <header class="lesson-header-card ${isPyramide ? 'pyramide-lesson-header' : (isLie ? 'ocfo-lesson-header' : (isOcfo ? 'ocfo-lesson-header' : (isOibt ? 'oibt-lesson-header' : (isOrni ? 'orni-lesson-header' : ''))))}">
        <div class="lesson-badges-row">
          <span class="module-code-badge badge-${mod.id}" style="width:30px; height:30px; font-size:0.85rem;">
            ${mod.id}
          </span>
          <span class="formation-code-tag">${formation.code}</span>
          ${isPyramide && formation.lessonNumber && formation.lessonNumber <= totalPyramide ? `
            <span class="ocfo-progression-pill" style="border-color:rgba(236,72,153,0.4); color:#ec4899; background:rgba(236,72,153,0.12);">${formation.code} · ${formation.lessonNumber} / ${totalPyramide}</span>
          ` : ''}
          ${isPyramide && formation.isFinalEvaluation ? `
            <span class="ocfo-badge-eval" style="display:inline-block; padding:0.2rem 0.65rem; font-size:0.75rem; background:rgba(236,72,153,0.2); color:#f472b6; border:1px solid rgba(236,72,153,0.4);">Examen final (${totalPyramide} leçons)</span>
          ` : ''}
          ${isLie && formation.lessonNumber && formation.lessonNumber <= totalLie ? `
            <span class="ocfo-progression-pill" style="border-color:rgba(245,158,11,0.4); color:#f59e0b; background:rgba(245,158,11,0.12);">${formation.code} · ${formation.lessonNumber} / ${totalLie}</span>
          ` : ''}
          ${isLie && formation.isFinalEvaluation ? `
            <span class="ocfo-badge-eval" style="display:inline-block; padding:0.2rem 0.65rem; font-size:0.75rem;">Examen final (${totalLie} parties)</span>
          ` : ''}
          ${isOcfo && formation.chapterNumber && formation.chapterNumber <= totalOcfo ? `
            <span class="ocfo-progression-pill">${formation.chapterNumber === totalOcfo ? `Leçon ${totalOcfo} / ${totalOcfo} · Annexes 1 à 4` : `Chapitre ${formation.chapterNumber} / ${totalOcfo}`}</span>
          ` : ''}
          ${isOcfo && formation.isFinalEvaluation ? `
            <span class="ocfo-badge-eval" style="display:inline-block; padding:0.2rem 0.65rem; font-size:0.75rem;">Examen final (${totalOcfo} unités)</span>
          ` : ''}
          ${isOibt && formation.lessonNumber && formation.lessonNumber <= totalOibt ? `
            <span class="ocfo-progression-pill" style="border-color:rgba(16,185,129,0.4); color:#10b981; background:rgba(16,185,129,0.12);">${formation.code} · ${formation.lessonNumber} / ${totalOibt}</span>
          ` : ''}
          ${isOibt && formation.isFinalEvaluation ? `
            <span class="ocfo-badge-eval" style="display:inline-block; padding:0.2rem 0.65rem; font-size:0.75rem; background:rgba(16,185,129,0.2); color:#10b981; border:1px solid rgba(16,185,129,0.4);">Examen final (${totalOibt} unités)</span>
          ` : ''}
          ${isOrni && formation.lessonNumber && formation.lessonNumber <= totalOrni ? `
            <span class="ocfo-progression-pill" style="border-color:rgba(139,92,246,0.4); color:#a78bfa; background:rgba(139,92,246,0.12);">${formation.code} · ${formation.lessonNumber} / ${totalOrni}</span>
          ` : ''}
          ${isOrni && formation.isFinalEvaluation ? `
            <span class="ocfo-badge-eval" style="display:inline-block; padding:0.2rem 0.65rem; font-size:0.75rem; background:rgba(239,68,68,0.15); color:var(--accent-red); border-color:rgba(239,68,68,0.3);">Examen final ORNI</span>
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
              <div class="box-title">${typeof formation.practicalExample === 'object' && formation.practicalExample.title ? formation.practicalExample.title : 'Exemple pratique (Exemple pédagogique)'}</div>
              <div class="box-text">${typeof formation.practicalExample === 'object' ? formation.practicalExample.text : formation.practicalExample}</div>
            </div>
          </section>
        ` : ''}

        <!-- Point Important -->
        ${formation.importantPoint ? `
          <section class="important-box" aria-label="Point important">
            <div class="box-icon">⚠️</div>
            <div>
              <div class="box-title">${typeof formation.importantPoint === 'object' && formation.importantPoint.title ? formation.importantPoint.title : 'Règle incontournable & sécurité'}</div>
              <div class="box-text">${typeof formation.importantPoint === 'object' ? formation.importantPoint.text : formation.importantPoint}</div>
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
          ${isPyramide ? `
            <button class="btn-continue" onclick="location.hash='#/formations/A/pyramide-lois'" style="background:var(--bg-surface-elevated); color:var(--text-primary); border:1px solid var(--border-medium); cursor:pointer;">
              ← Sommaire des 4 leçons Pyramide
            </button>
          ` : isLie ? `
            <button class="btn-continue" onclick="location.hash='#/formations/A/rs-734-0'" style="background:var(--bg-surface-elevated); color:var(--text-primary); border:1px solid var(--border-medium);">
              ← Sommaire des 11 leçons LIE
            </button>
          ` : isOcfo ? `
            <button class="btn-continue" onclick="location.hash='#/formations/A/rs-734-2'" style="background:var(--bg-surface-elevated); color:var(--text-primary); border:1px solid var(--border-medium);">
              ← Sommaire des 8 leçons OCFo
            </button>
          ` : isOibt ? `
            <button class="btn-continue" onclick="location.hash='#/formations/A/rs-734-27'" style="background:var(--bg-surface-elevated); color:var(--text-primary); border:1px solid var(--border-medium);">
              ← Sommaire des 7 leçons OIBT
            </button>
          ` : isOrni ? `
            <button class="btn-continue" onclick="location.hash='#/formations/A/rs-814-710'" style="background:var(--bg-surface-elevated); color:var(--text-primary); border:1px solid var(--border-medium);">
              ← Sommaire des 7 leçons ORNI
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
          <button class="btn-continue" id="btnNextLessonNav" onclick="if(window.scrollToTop) window.scrollToTop(); else { window.scrollTo(0,0); const c = document.getElementById('pageContainer'); if(c) c.scrollTop = 0; } location.hash='${nextRoute}';" style="display:inline-flex; align-items:center; gap:0.5rem; cursor:pointer;">
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
        // Si c'est Pyramide, LIE, OCFo, OIBT ou ORNI et qu'une leçon suivante existe, naviguer vers la suite ou le hub
        if (isPyramide) {
          if (nextRoute) {
            location.hash = nextRoute;
          } else {
            location.hash = '#/formations/A/pyramide-lois';
          }
        } else if (isLie) {
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
        } else if (isOibt) {
          if (nextRoute) {
            location.hash = nextRoute;
          } else {
            location.hash = '#/formations/A/rs-734-27';
          }
        } else if (isOrni) {
          if (nextRoute) {
            location.hash = nextRoute;
          } else {
            location.hash = '#/formations/A/rs-814-710';
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

        const closeBtn = modal.querySelector('.visual-lightbox-close');
        if (closeBtn) closeBtn.addEventListener('click', closeModal);
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

  // Garantir que la nouvelle leçon s'affiche tout en haut dès la fin du rendu
  if (container) container.scrollTop = 0;
  window.scrollTo(0, 0);
  if (window.scrollToTop) window.scrollToTop(container);
  requestAnimationFrame(() => {
    if (container) container.scrollTop = 0;
    window.scrollTo(0, 0);
    if (window.scrollToTop) window.scrollToTop(container);
  });
  setTimeout(() => {
    if (container) container.scrollTop = 0;
    window.scrollTo(0, 0);
  }, 40);
}
