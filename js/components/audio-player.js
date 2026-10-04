/**
 * AKREFITAS 2027 — CINEMATIC AUDIO COMPONENT
 * Menangani musik tema, kebijakan browser autoplay, dan kontrol manual.
 */

class SiteAudioPlayer extends HTMLElement {
  connectedCallback() {
    const audioSrc = (typeof SITE_CONFIG !== 'undefined' && SITE_CONFIG.audioUrl) 
      ? SITE_CONFIG.audioUrl 
      : '';
    const defaultVolume = (typeof SITE_CONFIG !== 'undefined' && SITE_CONFIG.audioVolume) 
      ? SITE_CONFIG.audioVolume 
      : 0.5;

    if (!audioSrc) return; // Jika belum ada file audio, jangan tampilkan widget

    this.innerHTML = `
      <div class="elemental-audio-widget" id="audioWidget" title="Nyalakan/Matikan Musik Tema">
        <audio id="themeAudio" src="${audioSrc}" loop preload="auto"></audio>
        
        <button class="audio-toggle-btn" id="audioToggleBtn" aria-label="Toggle Musik Tema">
          <!-- Equalizer Waves Animation -->
          <div class="audio-equalizer">
            <span class="eq-bar bar-1"></span>
            <span class="eq-bar bar-2"></span>
            <span class="eq-bar bar-3"></span>
          </div>

          <span class="audio-label" id="audioLabel">MUSIK TEMA</span>

          <!-- Icon Status (Play / Muted) -->
          <svg class="audio-icon icon-muted" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
            <line x1="23" y1="9" x2="17" y2="15"/>
            <line x1="17" y1="9" x2="23" y2="15"/>
          </svg>
          <svg class="audio-icon icon-playing" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
            <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"/>
          </svg>
        </button>
      </div>
    `;

    this.initAudioLogic(defaultVolume);
  }

  initAudioLogic(volume) {
    const audio = this.querySelector('#themeAudio');
    const toggleBtn = this.querySelector('#audioToggleBtn');
    const widget = this.querySelector('#audioWidget');
    const label = this.querySelector('#audioLabel');
    
    audio.volume = volume;
    let isPlaying = false;
    let userHasInteracted = false;

    // Fungsi Play dengan Fade-In halus
    const playAudio = () => {
      audio.play().then(() => {
        isPlaying = true;
        widget.classList.add('playing');
        label.textContent = "PLAYING";
      }).catch(err => {
        // Terblokir policy browser sampai interaksi pertama terjadi
        console.warn("Autoplay terhalang browser policy. Menunggu interaksi pengguna.");
      });
    };

    // Fungsi Pause
    const pauseAudio = () => {
      audio.pause();
      isPlaying = false;
      widget.classList.remove('playing');
      label.textContent = "PAUSED";
    };

    // 1. Trigger Autoplay pada interaksi pertama (klik/tap di mana saja di halaman)
    const handleFirstInteraction = () => {
      if (!userHasInteracted && !isPlaying) {
        userHasInteracted = true;
        playAudio();
      }
      // Hapus event listener setelah interaksi pertama
      ['click', 'touchstart'].forEach(e => document.removeEventListener(e, handleFirstInteraction));
    };

    ['click', 'touchstart'].forEach(e => document.addEventListener(e, handleFirstInteraction, { once: true }));

    // 2. Kontrol Manual lewat Tombol Widget
    toggleBtn.addEventListener('click', (e) => {
      e.stopPropagation(); // Mencegah trigger ganda
      userHasInteracted = true;
      if (isPlaying) {
        pauseAudio();
      } else {
        playAudio();
      }
    });
  }
}

customElements.define('site-audio-player', SiteAudioPlayer);