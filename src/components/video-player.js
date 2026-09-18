// Swiss Electrical Academy — Composant Lecteur Vidéo Pédagogique (V1.1)
// Accessible WCAG 2.2 AA, responsive, sans autoplay avec le son, gestion d'erreurs et support plein écran

export function createVideoPlayer(config) {
  const container = document.createElement('div');
  container.className = 'video-player-component';
  container.setAttribute('role', 'region');
  container.setAttribute('aria-label', `Lecteur vidéo : ${config.title || 'Vidéo pédagogique'}`);

  const videoSrc = config.src || '';

  container.innerHTML = `
    <div class="video-media-wrapper" tabindex="0" aria-label="Zone vidéo. Appuyez sur Espace pour lire ou mettre en pause">
      <video
        class="video-element"
        preload="metadata"
        playsinline
        aria-label="${config.title || 'Vidéo de formation'}"
      >
        <source src="${videoSrc}" type="video/mp4" />
        Votre navigateur ne prend pas en charge la lecture de vidéos HTML5.
      </video>

      <!-- Bouton Play géant de démarrage (Overlay) -->
      <button class="video-big-play-btn" type="button" aria-label="Démarrer la vidéo">
        <span class="big-play-icon" aria-hidden="true">▶</span>
      </button>

      <!-- Écran d'erreur élégant si chargement impossible -->
      <div class="video-error-overlay" style="display:none;" role="alert">
        <div class="video-error-icon" aria-hidden="true">⚠️</div>
        <div class="video-error-title">Vidéo momentanément indisponible</div>
        <div class="video-error-desc">Le contenu vidéo n'a pas pu être chargé. Veuillez vérifier votre connexion ou réessayer.</div>
        <button class="btn-video-retry" type="button">🔄 Réessayer</button>
      </div>

      <!-- Barre de contrôles personnalisés -->
      <div class="video-controls-bar" role="toolbar" aria-label="Contrôles de la vidéo">
        <!-- Barre de défilement temporelle -->
        <div class="video-progress-container" aria-label="Progression de la lecture">
          <input
            type="range"
            class="video-seek-slider"
            min="0"
            max="100"
            value="0"
            step="0.1"
            aria-label="Position dans la vidéo"
          />
          <div class="video-progress-fill"></div>
        </div>

        <div class="video-controls-row">
          <div class="video-controls-left">
            <!-- Bouton Lecture / Pause -->
            <button class="video-ctrl-btn btn-play-pause" type="button" aria-label="Lecture">
              <span class="ctrl-icon" aria-hidden="true">▶</span>
            </button>

            <!-- Temps écoulé / Durée totale -->
            <div class="video-time-display" aria-live="off">
              <span class="time-current">00:00</span>
              <span class="time-sep">/</span>
              <span class="time-total">00:00</span>
            </div>

            <!-- Volume et Muet -->
            <div class="video-volume-group">
              <button class="video-ctrl-btn btn-mute" type="button" aria-label="Couper le son">
                <span class="ctrl-icon icon-volume" aria-hidden="true">🔊</span>
              </button>
              <input
                type="range"
                class="video-volume-slider"
                min="0"
                max="1"
                step="0.05"
                value="1"
                aria-label="Volume audio"
              />
            </div>
          </div>

          <div class="video-controls-right">
            <!-- Vitesse de lecture -->
            <div class="video-speed-group">
              <label for="speedSelect_${config.id || 'default'}" class="sr-only">Vitesse de lecture</label>
              <select class="video-speed-select" id="speedSelect_${config.id || 'default'}" aria-label="Vitesse de lecture">
                <option value="0.75">0.75x</option>
                <option value="1" selected>1x</option>
                <option value="1.25">1.25x</option>
                <option value="1.5">1.5x</option>
              </select>
            </div>

            <!-- Plein écran -->
            <button class="video-ctrl-btn btn-fullscreen" type="button" aria-label="Activer le plein écran">
              <span class="ctrl-icon" aria-hidden="true">⛶</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  `;

  // Éléments du DOM
  const mediaWrapper = container.querySelector('.video-media-wrapper');
  const video = container.querySelector('.video-element');
  const bigPlayBtn = container.querySelector('.video-big-play-btn');
  const playPauseBtn = container.querySelector('.btn-play-pause');
  const playIcon = playPauseBtn.querySelector('.ctrl-icon');
  const seekSlider = container.querySelector('.video-seek-slider');
  const progressFill = container.querySelector('.video-progress-fill');
  const timeCurrent = container.querySelector('.time-current');
  const timeTotal = container.querySelector('.time-total');
  const muteBtn = container.querySelector('.btn-mute');
  const muteIcon = muteBtn.querySelector('.icon-volume');
  const volumeSlider = container.querySelector('.video-volume-slider');
  const speedSelect = container.querySelector('.video-speed-select');
  const fullscreenBtn = container.querySelector('.btn-fullscreen');
  const errorOverlay = container.querySelector('.video-error-overlay');
  const retryBtn = container.querySelector('.btn-video-retry');

  let isSeeking = false;

  // Formatage du temps en mm:ss
  function formatTime(seconds) {
    if (isNaN(seconds) || seconds < 0) return '00:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins < 10 ? '0' : ''}${mins}:${secs < 10 ? '0' : ''}${secs}`;
  }

  // Mise à jour de l'icône Play/Pause
  function updatePlayState() {
    if (video.paused || video.ended) {
      playIcon.textContent = '▶';
      playPauseBtn.setAttribute('aria-label', 'Lecture');
      bigPlayBtn.style.display = 'flex';
      container.classList.remove('is-playing');
    } else {
      playIcon.textContent = '⏸';
      playPauseBtn.setAttribute('aria-label', 'Pause');
      bigPlayBtn.style.display = 'none';
      container.classList.add('is-playing');
    }
  }

  // Bascule Lecture / Pause
  function togglePlay() {
    if (video.paused || video.ended) {
      video.play().catch((err) => {
        console.warn('[VideoPlayer] Lecture interrompue ou bloquée :', err);
      });
    } else {
      video.pause();
    }
    updatePlayState();
  }

  // Événements Vidéo
  video.addEventListener('play', updatePlayState);
  video.addEventListener('pause', updatePlayState);
  video.addEventListener('ended', () => {
    updatePlayState();
    // Événement d'accomplissement pédagogique
    if (config.onCompleted && typeof config.onCompleted === 'function') {
      config.onCompleted();
    }
  });

  video.addEventListener('loadedmetadata', () => {
    timeTotal.textContent = formatTime(video.duration);
    seekSlider.max = video.duration || 100;
  });

  video.addEventListener('timeupdate', () => {
    if (!isSeeking) {
      seekSlider.value = video.currentTime;
      timeCurrent.textContent = formatTime(video.currentTime);
      const percent = video.duration ? (video.currentTime / video.duration) * 100 : 0;
      progressFill.style.width = `${percent}%`;
    }
  });

  video.addEventListener('error', () => {
    errorOverlay.style.display = 'flex';
    bigPlayBtn.style.display = 'none';
  });

  // Boutons Play / Pause
  playPauseBtn.addEventListener('click', togglePlay);
  bigPlayBtn.addEventListener('click', togglePlay);

  // Barre de progression (Seek)
  seekSlider.addEventListener('input', () => {
    isSeeking = true;
    timeCurrent.textContent = formatTime(seekSlider.value);
    const percent = video.duration ? (seekSlider.value / video.duration) * 100 : 0;
    progressFill.style.width = `${percent}%`;
  });

  seekSlider.addEventListener('change', () => {
    video.currentTime = parseFloat(seekSlider.value);
    isSeeking = false;
  });

  // Volume & Muet
  function updateVolumeIcon(vol, muted) {
    if (muted || vol === 0) {
      muteIcon.textContent = '🔇';
      muteBtn.setAttribute('aria-label', 'Activer le son');
    } else if (vol < 0.5) {
      muteIcon.textContent = '🔉';
      muteBtn.setAttribute('aria-label', 'Couper le son');
    } else {
      muteIcon.textContent = '🔊';
      muteBtn.setAttribute('aria-label', 'Couper le son');
    }
  }

  muteBtn.addEventListener('click', () => {
    video.muted = !video.muted;
    updateVolumeIcon(video.volume, video.muted);
    volumeSlider.value = video.muted ? 0 : video.volume;
  });

  volumeSlider.addEventListener('input', () => {
    const val = parseFloat(volumeSlider.value);
    video.volume = val;
    video.muted = val === 0;
    updateVolumeIcon(val, video.muted);
  });

  // Vitesse de lecture
  speedSelect.addEventListener('change', () => {
    video.playbackRate = parseFloat(speedSelect.value);
  });

  // Plein écran
  function toggleFullscreen() {
    if (!document.fullscreenElement) {
      if (mediaWrapper.requestFullscreen) {
        mediaWrapper.requestFullscreen();
      } else if (mediaWrapper.webkitRequestFullscreen) {
        mediaWrapper.webkitRequestFullscreen();
      }
      fullscreenBtn.setAttribute('aria-label', 'Quitter le plein écran');
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
      fullscreenBtn.setAttribute('aria-label', 'Activer le plein écran');
    }
  }

  fullscreenBtn.addEventListener('click', toggleFullscreen);

  // Réessayer en cas d'erreur
  retryBtn.addEventListener('click', () => {
    errorOverlay.style.display = 'none';
    video.load();
    video.play().catch(() => {});
  });

  // Raccourcis clavier accessibles
  mediaWrapper.addEventListener('keydown', (e) => {
    // Si l'utilisateur est sur un select ou un input, ne pas intercepter
    if (e.target === speedSelect || e.target === volumeSlider) return;

    if (e.key === ' ' || e.key === 'k' || e.key === 'K') {
      e.preventDefault();
      togglePlay();
    } else if (e.key === 'f' || e.key === 'F') {
      e.preventDefault();
      toggleFullscreen();
    } else if (e.key === 'm' || e.key === 'M') {
      e.preventDefault();
      video.muted = !video.muted;
      updateVolumeIcon(video.volume, video.muted);
      volumeSlider.value = video.muted ? 0 : video.volume;
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      video.currentTime = Math.max(0, video.currentTime - 5);
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      video.currentTime = Math.min(video.duration || 0, video.currentTime + 5);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      video.volume = Math.min(1, video.volume + 0.1);
      volumeSlider.value = video.volume;
      video.muted = false;
      updateVolumeIcon(video.volume, false);
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      video.volume = Math.max(0, video.volume - 0.1);
      volumeSlider.value = video.volume;
      updateVolumeIcon(video.volume, video.volume === 0);
    }
  });

  return container;
}
