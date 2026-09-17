// Swiss Electrical Academy — Moteur de Quiz Pédagogique (V1.1)
// Types de questions, feedback immédiat (✓ Correct / ✕ Incorrect), score, révision des erreurs et gain d'XP anti-farming

import { StorageService } from '../services/storage.js';

export function createQuizEngine(formation, onComplete) {
  const quizData = formation.quiz;
  if (!quizData || quizData.length === 0) {
    const empty = document.createElement('div');
    empty.className = 'quiz-section';
    empty.innerHTML = `
      <div style="text-align:center; padding:1.5rem; color:var(--text-muted);">
        ℹ️ Aucun quiz associé à cette fiche.
      </div>
    `;
    return empty;
  }

  let currentIndex = 0;
  let userAnswers = {}; // { [questionIndex]: selectedOptionIndex }
  let userMistakes = []; // [questionIndices]
  let currentScore = 0;
  let isAnswerSubmitted = false;

  const container = document.createElement('div');
  container.className = 'quiz-section';

  function renderCurrentQuestion() {
    container.innerHTML = '';

    // Si toutes les questions ont été traitées, afficher le score final
    if (currentIndex >= quizData.length) {
      renderFinalScore();
      return;
    }

    const q = quizData[currentIndex];
    isAnswerSubmitted = false;

    container.innerHTML = `
      <div class="quiz-header">
        <div class="quiz-title">📝 Quiz d'évaluation — ${formation.title}</div>
        <div class="quiz-progress-pill">Question ${currentIndex + 1} / ${quizData.length}</div>
      </div>

      <div class="question-card">
        <div class="question-text">${currentIndex + 1}. ${q.question}</div>
        <div class="options-list" id="optionsList"></div>
      </div>

      <div id="feedbackContainer"></div>

      <div class="quiz-actions-row">
        <button class="btn-quiz-action" id="btnValidateAnswer" disabled>Valider la réponse</button>
      </div>
    `;

    const optionsList = container.querySelector('#optionsList');
    const btnValidate = container.querySelector('#btnValidateAnswer');
    const feedbackContainer = container.querySelector('#feedbackContainer');

    q.options.forEach((optText, optIdx) => {
      const optEl = document.createElement('div');
      optEl.className = 'option-item';
      optEl.innerHTML = `
        <div class="option-radio"></div>
        <div class="option-text">${optText}</div>
      `;

      optEl.addEventListener('click', () => {
        if (isAnswerSubmitted) return; // Ne plus changer après validation
        optionsList.querySelectorAll('.option-item').forEach(el => el.classList.remove('selected'));
        optEl.classList.add('selected');
        userAnswers[currentIndex] = optIdx;
        btnValidate.disabled = false;
      });

      optionsList.appendChild(optEl);
    });

    btnValidate.addEventListener('click', () => {
      if (isAnswerSubmitted) {
        // Passer à la question suivante
        currentIndex++;
        renderCurrentQuestion();
        return;
      }

      // Valider la réponse actuelle
      isAnswerSubmitted = true;
      const selectedOpt = userAnswers[currentIndex];
      const isCorrect = (selectedOpt === q.correctAnswer);

      if (isCorrect) {
        currentScore++;
      } else {
        userMistakes.push(currentIndex);
      }

      // Colorer les options
      const optElements = optionsList.querySelectorAll('.option-item');
      optElements.forEach((el, idx) => {
        if (idx === q.correctAnswer) {
          el.classList.add('correct');
        } else if (idx === selectedOpt) {
          el.classList.add('incorrect');
        }
      });

      // Feedback Immédiat (Section 21)
      feedbackContainer.innerHTML = `
        <div class="quiz-feedback-box ${isCorrect ? 'feedback-correct' : 'feedback-incorrect'}">
          <div class="feedback-badge">
            ${isCorrect ? '✓ Correct !' : '✕ Incorrect'}
          </div>
          <div class="feedback-explanation">
            ${isCorrect ? '' : `<strong>Bonne réponse :</strong> ${q.options[q.correctAnswer]}<br/>`}
            ${q.explanation}
          </div>
        </div>
      `;

      btnValidate.textContent = (currentIndex + 1 < quizData.length) ? "Question suivante →" : "Voir les résultats 🏁";
    });
  }

  function renderFinalScore() {
    const total = quizData.length;
    const percentage = Math.round((currentScore / total) * 100);
    const passed = percentage >= 75;
    const xpAvailable = formation.xpReward || 20;

    // Enregistrer les résultats dans le localStorage
    StorageService.saveQuizResult(formation.id, {
      score: currentScore,
      total,
      percentage,
      passed
    });

    // Attribuer l'XP (anti-farming : si déjà acquis, addXp renvoie 0)
    let awardedXp = 0;
    if (passed) {
      StorageService.markLessonCompleted(formation.id, formation.moduleId);
      awardedXp = StorageService.addXp(xpAvailable, `quiz_${formation.id}`);
    }

    const isAlreadyAwarded = StorageService.getAwardedSources().includes(`quiz_${formation.id}`);

    container.innerHTML = `
      <div class="quiz-score-card">
        <div class="score-circle">
          <div class="score-number">${currentScore}/${total}</div>
          <div class="score-percent">${percentage}%</div>
        </div>

        <div style="font-size:1.3rem; font-weight:800; color:var(--text-primary);">
          ${passed ? '🎉 Félicitations ! Formation validée' : '⚠️ Objectif non atteint (75% requis)'}
        </div>

        <div style="color:var(--text-secondary); max-width:460px; line-height:1.5;">
          ${passed 
            ? 'Vous avez démontré votre maîtrise des notions abordées dans cette formation technique.' 
            : 'Nous vous recommandons de réviser les notions clés et de retenter le quiz.'}
        </div>

        ${passed ? `
          <div class="score-xp-award">
            ⚡ ${awardedXp > 0 ? `+${awardedXp} XP gagnés !` : `${xpAvailable} XP (Déjà acquis)`}
          </div>
        ` : ''}

        <div class="score-actions-row">
          ${userMistakes.length > 0 ? `
            <button class="btn-quiz-action" style="background:var(--bg-surface-elevated); color:var(--text-primary); border:1px solid var(--border-medium);" id="btnReviewMistakes">
              🔍 Revoir mes erreurs (${userMistakes.length})
            </button>
          ` : ''}
          <button class="btn-quiz-action" id="btnRestartQuiz">
            🔄 Recommencer le quiz
          </button>
          <button class="btn-quiz-action" style="background:var(--success); color:#FFFFFF;" id="btnFinishLesson">
            Continuer la formation →
          </button>
        </div>
      </div>
    `;

    // Revoir mes erreurs (AC-P1-007)
    const btnReview = container.querySelector('#btnReviewMistakes');
    if (btnReview) {
      btnReview.addEventListener('click', () => {
        renderReviewMistakes();
      });
    }

    // Recommencer
    container.querySelector('#btnRestartQuiz').addEventListener('click', () => {
      currentIndex = 0;
      userAnswers = {};
      userMistakes = [];
      currentScore = 0;
      renderCurrentQuestion();
    });

    // Terminer
    container.querySelector('#btnFinishLesson').addEventListener('click', () => {
      if (onComplete) onComplete();
    });
  }

  function renderReviewMistakes() {
    container.innerHTML = `
      <div class="quiz-header">
        <div class="quiz-title">🔍 Revue détaillée de vos erreurs (${userMistakes.length})</div>
        <button class="btn-quiz-action" style="padding:0.35rem 0.85rem; font-size:0.8rem;" id="btnBackToScore">
          ← Retour au score
        </button>
      </div>
      <div style="display:flex; flex-direction:column; gap:1.25rem; margin-top:1rem;">
        ${userMistakes.map((qIdx) => {
          const q = quizData[qIdx];
          const userChoice = userAnswers[qIdx];
          return `
            <div style="background:var(--bg-app); border:1px solid var(--border-subtle); border-radius:var(--radius-md); padding:1.25rem;">
              <div style="font-weight:700; color:var(--text-primary); margin-bottom:0.75rem;">
                Question ${qIdx + 1} : ${q.question}
              </div>
              <div style="font-size:0.85rem; color:var(--danger); margin-bottom:0.35rem;">
                ✕ Votre réponse : <strong>${q.options[userChoice]}</strong>
              </div>
              <div style="font-size:0.85rem; color:var(--success); margin-bottom:0.65rem;">
                ✓ Réponse correcte : <strong>${q.options[q.correctAnswer]}</strong>
              </div>
              <div style="font-size:0.82rem; color:var(--text-muted); background:var(--bg-surface-elevated); padding:0.65rem; border-radius:var(--radius-sm);">
                💡 <strong>Explication :</strong> ${q.explanation}
              </div>
            </div>
          `;
        }).join('')}
      </div>
    `;

    container.querySelector('#btnBackToScore').addEventListener('click', () => {
      renderFinalScore();
    });
  }

  renderCurrentQuestion();
  return container;
}
