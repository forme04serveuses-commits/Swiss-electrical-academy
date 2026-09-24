// Swiss Electrical Academy — Service Centralisé de Progression (V2.5.2)
// Source unique de vérité pour tous les calculs de progression (global, modules, parcours, leçons)
// Garantit la cohérence absolue, l'arrondi décimal précis, l'anti-farming et la persistance.

import { ACADEMY_MODULES, PYRAMIDE_LOIS_INFO, RS_734_0_INFO, RS_734_2_INFO, RS_734_27_INFO, RS_814_710_INFO, ESTI_221_INFO, ESTI_407_INFO, OFFICIAL_BADGES } from '../data/academy-data.js';
import { StorageService } from './storage.js';

// Table de normalisation des anciens identifiants et alias pour migration déterministe
const LEGACY_ID_MAP = {
  'esti-221': 'esti-221-lecon-1',
  'ESTI-221': 'esti-221-lecon-1',
  'esti221': 'esti-221-lecon-1',
  'esti-221-01': 'esti-221-lecon-1',
  'esti-221-02': 'esti-221-lecon-2',
  'esti-221-03': 'esti-221-lecon-3',
  'esti-221-04': 'esti-221-lecon-4',
  'esti-221-examen': 'esti-221-evaluation-finale',
  'esti-407': 'esti-407-lecon-1',
  'ESTI-407': 'esti-407-lecon-1',
  'esti407': 'esti-407-lecon-1',
  'esti-407-01': 'esti-407-lecon-1',
  'esti-407-02': 'esti-407-lecon-2',
  'esti-407-03': 'esti-407-lecon-3',
  'esti-407-04': 'esti-407-lecon-4',
  'esti-407-05': 'esti-407-lecon-5',
  'esti-407-06': 'esti-407-lecon-6',
  'esti-407-07': 'esti-407-lecon-7',
  'esti-407-08': 'esti-407-lecon-8',
  'esti-407-09': 'esti-407-lecon-9',
  'esti-407-10': 'esti-407-lecon-10',
  'esti-407-11': 'esti-407-lecon-11',
  'esti-407-12': 'esti-407-lecon-12',
  'esti-407-13': 'esti-407-lecon-13',
  'esti-407-examen': 'esti-407-evaluation-finale',
  'pyramide-lois': 'pyr-01',
  'pyramide': 'pyr-01',
  'a00': 'pyr-01',
  'A00': 'pyr-01',
  'pyramide-des-lois': 'pyr-01',
  'pyramide-lecon-1': 'pyr-01',
  'pyramide-lecon-2': 'pyr-02',
  'pyramide-lecon-3': 'pyr-03',
  'pyramide-lecon-4': 'pyr-04',
  'pyr-lecon-1': 'pyr-01',
  'pyr-lecon-2': 'pyr-02',
  'pyr-lecon-3': 'pyr-03',
  'pyr-lecon-4': 'pyr-04',
  'pyramide-evaluation-finale': 'pyr-evaluation-finale',
  'rs-814-710': 'rs-814-710-lecon-1',
  'RS-814-710': 'rs-814-710-lecon-1',
  'rs-814-710-orni': 'rs-814-710-lecon-1',
  'orni': 'rs-814-710-lecon-1',
  'rs-734-27': 'rs-734-27-lecon-1',
  'RS-734-27': 'rs-734-27-lecon-1',
  'rs-734-27-oibt': 'rs-734-27-lecon-1',
  'oibt': 'rs-734-27-lecon-1',
  'rs-734-27-annexe': 'rs-734-27-lecon-7',
  'rs-734-0': 'rs-734-0-lecon-1',
  'RS-734-0': 'rs-734-0-lecon-1',
  'rs-734-0-lie': 'rs-734-0-lecon-1',
  'rs-734-0-lie-plans': 'rs-734-0-lecon-5',
  'rs-734-0-lie-controle': 'rs-734-0-lecon-7',
  'rs-734-0-lie-responsabilite': 'rs-734-0-lecon-8',
  'rs-734-0-lie-penal': 'rs-734-0-lecon-10',
  'rs-734-0-chapitre-1': 'rs-734-0-lecon-1',
  'rs-734-0-chapitre-2': 'rs-734-0-lecon-2',
  'rs-734-0-chapitre-3': 'rs-734-0-lecon-3',
  'rs-734-0-chapitre-4': 'rs-734-0-lecon-4',
  'rs-734-0-chapitre-5': 'rs-734-0-lecon-5',
  'rs-734-0-chapitre-6': 'rs-734-0-lecon-6',
  'rs-734-0-chapitre-7': 'rs-734-0-lecon-7',
  'rs-734-0-chapitre-8': 'rs-734-0-lecon-8',
  'rs-734-0-chapitre-9': 'rs-734-0-lecon-9',
  'rs-734-0-chapitre-10': 'rs-734-0-lecon-10',
  'rs-734-0-chapitre-11': 'rs-734-0-lecon-11',
  'rs-734-2': 'rs-734-2-chapitre-1',
  'RS-734-2': 'rs-734-2-chapitre-1',
  'rs-734-2-ocfo': 'rs-734-2-chapitre-1',
  'rs-734-2-annexe': 'rs-734-2-annexes',
  'annexes': 'rs-734-2-annexes',
  'lecon-8': 'rs-734-2-annexes',
  'chapitre-8': 'rs-734-2-annexes',
  'evaluation-finale': 'rs-734-2-evaluation-finale'
};

// Configuration formelle des sous-parcours structurés
const PARCOURS_REGISTRY = {
  'esti-221': {
    id: 'esti-221',
    shortCode: 'ESTI 221',
    title: 'Directive ESTI n° 221',
    fullTitle: 'Directive ESTI n° 221 — Obligations d\'annoncer',
    typeLabel: 'Directive ESTI',
    accentColor: '#10b981',
    hubRoute: '#/formations/E/esti-221',
    getLessons: () => (ESTI_221_INFO ? ESTI_221_INFO.lessons : []),
    finalEvaluationId: 'esti-221-evaluation-finale'
  },
  'esti-407': {
    id: 'esti-407',
    shortCode: 'ESTI 407',
    title: 'Directive ESTI n° 407',
    fullTitle: 'Directive ESTI n° 407 — Activités sur des installations électriques ou à proximité de celles-ci',
    typeLabel: 'Directive ESTI',
    accentColor: '#10b981',
    hubRoute: '#/formations/E/esti-407',
    getLessons: () => (ESTI_407_INFO ? ESTI_407_INFO.lessons : []),
    finalEvaluationId: 'esti-407-evaluation-finale'
  },
  'pyramide-lois': {
    id: 'pyramide-lois',
    shortCode: 'PYR',
    title: 'Pyramide des lois',
    fullTitle: 'Cadre légal et hiérarchie normative suisse (Pyramide des lois)',
    typeLabel: 'Cadre normatif fédéral',
    accentColor: '#f59e0b',
    hubRoute: '#/formations/A/pyramide-lois',
    getLessons: () => (PYRAMIDE_LOIS_INFO ? PYRAMIDE_LOIS_INFO.lessons : []),
    finalEvaluationId: 'pyr-evaluation-finale'
  },
  'rs-734-0': {
    id: 'rs-734-0',
    shortCode: 'LIE',
    title: 'RS 734.0 — LIE',
    fullTitle: 'Loi fédérale concernant les installations électriques à faible et à fort courant (LIE)',
    typeLabel: 'Loi fédérale',
    accentColor: '#f59e0b',
    hubRoute: '#/formations/A/rs-734-0',
    getLessons: () => (RS_734_0_INFO ? RS_734_0_INFO.lessons : []),
    finalEvaluationId: 'rs-734-0-evaluation-finale'
  },
  'rs-734-2': {
    id: 'rs-734-2',
    shortCode: 'OCFo',
    title: 'RS 734.2 — OCFo',
    fullTitle: 'Ordonnance sur les installations électriques à courant fort (OCFo)',
    typeLabel: 'Ordonnance fédérale',
    accentColor: '#0284c7',
    hubRoute: '#/formations/A/rs-734-2',
    getLessons: () => (RS_734_2_INFO ? RS_734_2_INFO.chapters : []),
    finalEvaluationId: 'rs-734-2-evaluation-finale'
  },
  'rs-734-27': {
    id: 'rs-734-27',
    shortCode: 'OIBT',
    title: 'RS 734.27 — OIBT',
    fullTitle: 'Ordonnance sur les installations électriques à basse tension (OIBT)',
    typeLabel: 'Ordonnance fédérale',
    accentColor: '#10b981',
    hubRoute: '#/formations/A/rs-734-27',
    getLessons: () => (RS_734_27_INFO ? RS_734_27_INFO.lessons : []),
    finalEvaluationId: 'rs-734-27-evaluation-finale'
  },
  'rs-814-710': {
    id: 'rs-814-710',
    shortCode: 'ORNI',
    title: 'RS 814.710 — ORNI',
    fullTitle: 'Ordonnance sur la protection contre le rayonnement non ionisant (ORNI)',
    typeLabel: 'Ordonnance fédérale',
    accentColor: '#8b5cf6',
    hubRoute: '#/formations/A/rs-814-710',
    getLessons: () => (RS_814_710_INFO ? RS_814_710_INFO.lessons : []),
    finalEvaluationId: 'rs-814-710-evaluation-finale'
  }
};

export const ProgressionService = {
  /**
   * Calcul numérique d'un pourcentage avec 1 décimale exacte si nécessaire.
   * @param {number} count - Nombre d'éléments complétés
   * @param {number} total - Total d'éléments
   * @returns {number} Valeur entre 0 et 100 arrondie à 1 décimale
   */
  calculatePercentage(count, total) {
    if (!total || total <= 0 || !count || count <= 0) return 0;
    if (count >= total) return 100;
    const raw = (count / total) * 100;
    return Math.round(raw * 10) / 10;
  },

  /**
   * Formatage soigné suisse/français des pourcentages.
   * Règle stricte :
   * - 0 -> "0 %"
   * - 100 -> "100 %"
   * - Entier -> "25 %", "50 %", "75 %"
   * - Décimale -> "12,5 %", "37,5 %", "62,5 %", "87,5 %"
   * @param {number} ratioOrCount - Ratio (0-1), count si total est fourni, ou valeur brute (0-100)
   * @param {number} [total] - Optionnel si ratioOrCount est un compteur
   * @returns {string} Chaîne formattée ex: "37,5 %"
   */
  formatPercentage(ratioOrCount, total) {
    let value = 0;
    if (typeof total === 'number') {
      value = this.calculatePercentage(ratioOrCount, total);
    } else if (ratioOrCount <= 1 && ratioOrCount > 0) {
      value = Math.round(ratioOrCount * 1000) / 10;
    } else {
      value = Math.round(Number(ratioOrCount || 0) * 10) / 10;
    }

    if (value <= 0) return '0 %';
    if (value >= 100) return '100 %';

    if (value % 1 === 0) {
      return `${Math.round(value)} %`;
    }
    return `${value.toString().replace('.', ',')} %`;
  },

  /**
   * Ensemble de tous les identifiants valides de formation existant dans le catalogue
   */
  getAllValidFormationIds() {
    const valid = new Set();
    ACADEMY_MODULES.forEach(mod => {
      mod.formations.forEach(f => {
        if (f.id) valid.add(f.id);
      });
    });
    return valid;
  },

  /**
   * Ensemble de tous les identifiants de formations réellement disponibles (avec quiz ou contenu actif)
   */
  getAvailableFormationIds() {
    const available = new Set();
    ACADEMY_MODULES.forEach(mod => {
      mod.formations.forEach(f => {
        if (f.status === 'Disponible' && f.id) {
          available.add(f.id);
        }
      });
    });
    return available;
  },

  /**
   * Migration, normalisation et déduplication des données de persistance localStorage.
   * Résout les doublons, corrige les anciens identifiants et élimine les orphelins.
   * @returns {string[]} Liste dédupliquée et assainie des identifiants complétés.
   */
  migrateProgressionData() {
    try {
      const raw = localStorage.getItem('sea_completed_lessons');
      if (!raw) return [];

      let list;
      try {
        list = JSON.parse(raw);
      } catch {
        list = [];
      }

      if (!Array.isArray(list)) list = [];

      // Migration auto pour les utilisateurs ayant validé l'ancien 'pyramide-lois' monolithique
      if (list.includes('pyramide-lois') || list.includes('pyramide') || list.includes('a00') || list.includes('A00')) {
        ['pyr-01', 'pyr-02', 'pyr-03', 'pyr-04'].forEach(id => {
          if (!list.includes(id)) list.push(id);
        });
      }

      const validIds = this.getAllValidFormationIds();
      const cleaned = [];
      const seen = new Set();

      list.forEach(item => {
        if (!item || typeof item !== 'string') return;
        let targetId = item.trim();

        // Normaliser via la table d'alias
        if (LEGACY_ID_MAP[targetId]) {
          targetId = LEGACY_ID_MAP[targetId];
        }

        // Valider l'existence dans le catalogue officiel
        if (validIds.has(targetId) && !seen.has(targetId)) {
          seen.add(targetId);
          cleaned.push(targetId);
        }
      });

      // Sauvegarder la liste nettoyée
      localStorage.setItem('sea_completed_lessons', JSON.stringify(cleaned));

      // Dédupliquer également les sources d'XP attribuées
      const rawSources = localStorage.getItem('sea_awarded_xp_sources');
      if (rawSources) {
        try {
          const sources = JSON.parse(rawSources);
          if (Array.isArray(sources)) {
            const uniqueSources = Array.from(new Set(sources));
            localStorage.setItem('sea_awarded_xp_sources', JSON.stringify(uniqueSources));
          }
        } catch {
          // ignore
        }
      }

      return cleaned;
    } catch (e) {
      console.warn('[ProgressionService] Erreur lors de la migration :', e);
      return [];
    }
  },

  /**
   * Progression spécifique pour un des 5 sous-parcours structurés (Pyramide, LIE, OCFo, OIBT, ORNI).
   * @param {string} parcoursId - 'pyramide-lois' | 'rs-734-0' | 'rs-734-2' | 'rs-734-27' | 'rs-814-710' (ou alias)
   */
  getParcoursProgress(parcoursId) {
    let key = parcoursId;
    if (key === 'esti-221' || key === 'esti221' || key === 'ESTI-221' || key === 'ESTI221') key = 'esti-221';
    if (key === 'esti-407' || key === 'esti407' || key === 'ESTI-407' || key === 'ESTI407') key = 'esti-407';
    if (key === 'pyramide' || key === 'pyramide-lois' || key === 'pyr' || key === 'a00' || key === 'A00') key = 'pyramide-lois';
    if (key === 'lie' || key === 'LIE') key = 'rs-734-0';
    if (key === 'ocfo' || key === 'OCFo') key = 'rs-734-2';
    if (key === 'oibt' || key === 'OIBT') key = 'rs-734-27';
    if (key === 'orni' || key === 'ORNI') key = 'rs-814-710';

    const cfg = PARCOURS_REGISTRY[key];
    if (!cfg) {
      return {
        id: parcoursId,
        shortCode: '',
        title: '',
        lessonsTotal: 0,
        lessonsCompleted: 0,
        percentage: 0,
        percentageFormatted: '0 %',
        isFinalDone: false,
        isCertified: false,
        isLessonsCompleted: false,
        status: 'not-started'
      };
    }

    const completed = StorageService.getCompletedLessons();
    const lessons = cfg.getLessons();
    const lessonsTotal = lessons.length;
    const lessonsCompleted = lessons.filter(l => completed.includes(l.id)).length;
    const percentage = this.calculatePercentage(lessonsCompleted, lessonsTotal);
    const percentageFormatted = this.formatPercentage(lessonsCompleted, lessonsTotal);

    const isFinalDone = completed.includes(cfg.finalEvaluationId);
    const isLessonsCompleted = lessonsTotal > 0 && lessonsCompleted === lessonsTotal;
    const isCertified = isLessonsCompleted && isFinalDone;

    let status = 'not-started';
    if (isCertified) {
      status = 'certified';
    } else if (lessonsCompleted > 0 || isFinalDone) {
      status = 'in-progress';
    }

    return {
      id: cfg.id,
      shortCode: cfg.shortCode,
      title: cfg.title,
      fullTitle: cfg.fullTitle,
      typeLabel: cfg.typeLabel,
      accentColor: cfg.accentColor,
      hubRoute: cfg.hubRoute,
      lessonsTotal,
      lessonsCompleted,
      percentage,
      percentageFormatted,
      isFinalDone,
      isCertified,
      isLessonsCompleted,
      status
    };
  },

  /**
   * Progression complète pour un Module donné (A, B, N, E, S)
   * @param {string} moduleId - Identifiant du module ('A', 'B', 'N', 'E', 'S')
   */
  getModuleProgress(moduleId) {
    const mod = ACADEMY_MODULES.find(m => m.id === moduleId);
    if (!mod) {
      return {
        id: moduleId,
        code: moduleId,
        title: '',
        totalAvailable: 0,
        catalogTotal: 0,
        completedCount: 0,
        percentage: 0,
        percentageFormatted: '0 %',
        isModuleCompleted: false,
        isInDevelopment: true
      };
    }

    const completed = StorageService.getCompletedLessons();
    const availableFormations = mod.formations.filter(f => f.status === 'Disponible');
    const totalAvailable = availableFormations.length;
    const catalogTotal = mod.formations.length;

    const completedCount = availableFormations.filter(f => completed.includes(f.id)).length;
    const percentage = this.calculatePercentage(completedCount, totalAvailable);
    const percentageFormatted = this.formatPercentage(completedCount, totalAvailable);
    const isModuleCompleted = totalAvailable > 0 && completedCount === totalAvailable;
    const isInDevelopment = totalAvailable === 0;

    let subParcours = null;
    if (moduleId === 'A') {
      subParcours = {
        pyramide: this.getParcoursProgress('pyramide-lois'),
        lie: this.getParcoursProgress('rs-734-0'),
        ocfo: this.getParcoursProgress('rs-734-2'),
        oibt: this.getParcoursProgress('rs-734-27'),
        orni: this.getParcoursProgress('rs-814-710')
      };
    } else if (moduleId === 'E') {
      subParcours = {
        esti221: this.getParcoursProgress('esti-221'),
        esti407: this.getParcoursProgress('esti-407')
      };
    }

    return {
      id: mod.id,
      code: mod.code,
      title: mod.title,
      description: mod.description,
      countLabel: mod.countLabel,
      totalAvailable,
      catalogTotal,
      completedCount,
      percentage,
      percentageFormatted,
      isModuleCompleted,
      isInDevelopment,
      subParcours
    };
  },

  /**
   * Progression globale unifiée de l'Académie ELECBOOK.
   * Calculée de façon rigoureuse sur les unités réellement disponibles (40 unités disponibles au total).
   */
  getGlobalProgress() {
    // S'assurer que les données sont migrées et saines
    const completed = StorageService.getCompletedLessons();
    const availableIds = this.getAvailableFormationIds();

    let totalAvailable = 0;
    let completedCount = 0;
    let catalogTotal = 0;
    const moduleStats = {};

    ACADEMY_MODULES.forEach(mod => {
      const p = this.getModuleProgress(mod.id);
      moduleStats[mod.id] = {
        id: p.id,
        code: p.code,
        title: p.title,
        total: p.totalAvailable,
        totalAvailable: p.totalAvailable,
        catalogTotal: p.catalogTotal,
        completed: p.completedCount,
        percentage: p.percentage,
        percentageFormatted: p.percentageFormatted,
        isCompleted: p.isModuleCompleted,
        isInDevelopment: p.isInDevelopment,
        subParcours: p.subParcours
      };

      totalAvailable += p.totalAvailable;
      completedCount += p.completedCount;
      catalogTotal += p.catalogTotal;
    });

    const globalPercentage = this.calculatePercentage(completedCount, totalAvailable);
    const globalPercentageFormatted = this.formatPercentage(completedCount, totalAvailable);
    const isGlobalCompleted = totalAvailable > 0 && completedCount === totalAvailable;

    return {
      globalPercentage,
      globalPercentageFormatted,
      completedFormations: completedCount,
      totalFormations: totalAvailable,
      catalogTotalFormations: catalogTotal,
      moduleStats,
      xp: StorageService.getXp(),
      badgesCount: StorageService.getUnlockedBadges().length,
      totalBadgesCount: OFFICIAL_BADGES.length,
      isGlobalCompleted
    };
  },

  /**
   * Vérifie si une formation spécifique est terminée
   */
  isLessonCompleted(formationId) {
    const list = StorageService.getCompletedLessons();
    return list.includes(formationId);
  }
};
