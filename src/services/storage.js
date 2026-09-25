// Swiss Electrical Academy — Service de stockage et persistance (V1.1)
// Gestion localStorage, calcul de progression et garantie anti-farming d'XP

import { ACADEMY_MODULES, OFFICIAL_BADGES } from '../data/academy-data.js';

const STORAGE_KEY_PREFIX = 'sea_';

const KEYS = {
  XP: `${STORAGE_KEY_PREFIX}xp`,
  AWARDED_SOURCES: `${STORAGE_KEY_PREFIX}awarded_xp_sources`,
  COMPLETED_LESSONS: `${STORAGE_KEY_PREFIX}completed_lessons`,
  QUIZ_RESULTS: `${STORAGE_KEY_PREFIX}quiz_results`,
  UNLOCKED_BADGES: `${STORAGE_KEY_PREFIX}unlocked_badges`,
  LAST_ACTIVITY: `${STORAGE_KEY_PREFIX}last_activity`,
  THEME: `${STORAGE_KEY_PREFIX}theme`
};

export const StorageService = {
  // Récupérer les données de thème
  getTheme() {
    return localStorage.getItem(KEYS.THEME) || 'dark';
  },

  setTheme(theme) {
    localStorage.setItem(KEYS.THEME, theme);
  },

  // XP total
  getXp() {
    const raw = localStorage.getItem(KEYS.XP);
    return raw ? parseInt(raw, 10) : 0;
  },

  // Ajouter des XP avec protection stricte anti-farming
  // Retourne le nombre d'XP réellement ajouté (0 si déjà attribué)
  addXp(amount, sourceId) {
    if (!sourceId || amount <= 0) return 0;

    const awardedSources = this.getAwardedSources();
    if (awardedSources.includes(sourceId)) {
      console.log(`[Anti-Farming] XP déjà attribués pour ${sourceId}, aucun doublon accordé.`);
      return 0;
    }

    // Attribuer l'XP
    const currentXp = this.getXp();
    const newXp = currentXp + amount;
    localStorage.setItem(KEYS.XP, newXp.toString());

    // Enregistrer la source pour empêcher tout gain futur
    awardedSources.push(sourceId);
    localStorage.setItem(KEYS.AWARDED_SOURCES, JSON.stringify(awardedSources));

    // Vérifier si des badges doivent être débloqués
    this.checkAndUnlockBadges(newXp);

    return amount;
  },

  getAwardedSources() {
    try {
      const raw = localStorage.getItem(KEYS.AWARDED_SOURCES);
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  },

  // Leçons terminées
  getCompletedLessons() {
    try {
      const raw = localStorage.getItem(KEYS.COMPLETED_LESSONS);
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  },

  isLessonCompleted(formationId) {
    const list = this.getCompletedLessons();
    return list.includes(formationId);
  },

  markLessonCompleted(formationId, moduleId) {
    const list = this.getCompletedLessons();
    if (!list.includes(formationId)) {
      list.push(formationId);
      localStorage.setItem(KEYS.COMPLETED_LESSONS, JSON.stringify(list));
    }
    // Vérifier les badges liés aux modules
    this.checkAndUnlockBadges(this.getXp(), moduleId);
  },

  // Résultats de quiz
  getQuizResults() {
    try {
      const raw = localStorage.getItem(KEYS.QUIZ_RESULTS);
      return raw ? JSON.parse(raw) : {};
    } catch {
      return {};
    }
  },

  getQuizResultFor(formationId) {
    const all = this.getQuizResults();
    return all[formationId] || null;
  },

  saveQuizResult(formationId, result) {
    const all = this.getQuizResults();
    all[formationId] = {
      ...result,
      timestamp: Date.now()
    };
    localStorage.setItem(KEYS.QUIZ_RESULTS, JSON.stringify(all));
  },

  // Dernière activité
  getLastActivity() {
    try {
      const raw = localStorage.getItem(KEYS.LAST_ACTIVITY);
      return raw ? JSON.parse(raw) : null;
    } catch {
      return null;
    }
  },

  setLastActivity(activity) {
    const data = {
      ...activity,
      timestamp: Date.now()
    };
    localStorage.setItem(KEYS.LAST_ACTIVITY, JSON.stringify(data));
  },

  // Badges débloqués
  getUnlockedBadges() {
    try {
      const raw = localStorage.getItem(KEYS.UNLOCKED_BADGES);
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  },

  unlockBadge(badgeId) {
    const list = this.getUnlockedBadges();
    if (!list.includes(badgeId)) {
      list.push(badgeId);
      localStorage.setItem(KEYS.UNLOCKED_BADGES, JSON.stringify(list));
      return true;
    }
    return false;
  },

  checkAndUnlockBadges(currentXp = this.getXp(), currentModuleId = null) {
    const completed = this.getCompletedLessons();
    const unlocked = this.getUnlockedBadges();

    OFFICIAL_BADGES.forEach(badge => {
      if (unlocked.includes(badge.id)) return;

      let shouldUnlock = false;

      // Badge Premier pas
      if (badge.id === 'badge-first-step' && completed.length >= 1) {
        shouldUnlock = true;
      }

      // Badge Sécurité (Module B)
      if (badge.id === 'badge-security' && (completed.includes('securite-electrique') || completed.includes('sec-01') || completed.includes('sec-evaluation-finale') || completed.some(id => id.startsWith('sec-')))) {
        shouldUnlock = true;
      }

      // Badge NIBT Explorer (Module N)
      if (badge.id === 'badge-nibt-explorer' && completed.includes('n0')) {
        shouldUnlock = true;
      }

      // Badge Normes suisses (Module S)
      if (badge.id === 'badge-swiss-norms' && (currentModuleId === 'S' || currentModuleId === 'F' || completed.some(id => id.startsWith('sn-')))) {
        shouldUnlock = true;
      }

      // Badge Académie (Progression globale ou XP élevé)
      if (badge.id === 'badge-academy' && currentXp >= 100) {
        shouldUnlock = true;
      }

      if (shouldUnlock) {
        this.unlockBadge(badge.id);
      }
    });
  },

  // Calcul des statistiques de progression (délégué au ProgressionService centralisé)
  getProgressStats() {
    if (typeof ProgressionService !== 'undefined' && ProgressionService.getGlobalProgress) {
      return ProgressionService.getGlobalProgress();
    }

    const completed = this.getCompletedLessons();
    const moduleStats = {};
    let totalFormations = 0;
    let completedFormations = 0;

    ACADEMY_MODULES.forEach(mod => {
      const avail = mod.formations.filter(f => f.status === 'Disponible');
      const modTotal = avail.length;
      totalFormations += modTotal;
      const modCompleted = avail.filter(f => completed.includes(f.id)).length;
      completedFormations += modCompleted;

      const percentage = modTotal > 0 ? Math.round((modCompleted / modTotal) * 100) : 0;
      moduleStats[mod.id] = {
        id: mod.id,
        title: mod.title,
        total: modTotal,
        completed: modCompleted,
        percentage,
        percentageFormatted: `${percentage} %`
      };
    });

    const globalPercentage = totalFormations > 0 ? Math.round((completedFormations / totalFormations) * 100) : 0;

    return {
      globalPercentage,
      globalPercentageFormatted: `${globalPercentage} %`,
      totalFormations,
      completedFormations,
      moduleStats,
      xp: this.getXp(),
      badgesCount: this.getUnlockedBadges().length,
      totalBadgesCount: OFFICIAL_BADGES.length
    };
  }
};
