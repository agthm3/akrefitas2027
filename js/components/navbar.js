/**
 * AKREFITAS 2027 — NAVBAR DENGAN INTEGRATED AUDIO CONTROLLER
 */

class SiteNavbar extends HTMLElement {
  connectedCallback() {
    const regUrl = (typeof SITE_CONFIG !== 'undefined' && SITE_CONFIG.registrationUrl) 
      ? SITE_CONFIG.registrationUrl 
      : '#pendaftaran';

    const logoSrc = (typeof SITE_CONFIG !== 'undefined' && SITE_CONFIG.logoUrl)
      ? SITE_CONFIG.logoUrl
      : 'assets/images/logo-akrefitas.png';

    const audioSrc = (typeof SITE_CONFIG !== 'undefined' && SITE_CONFIG.audioUrl)
      ? SITE_CONFIG.audioUrl
      : 'assets/audio/theme.mp3';

    this.innerHTML = `
      <div class="nav-backdrop" id="navBackdrop"></div>
      <nav class="navbar" id="navbar">
        <div class="container nav-container">
          <a href="index.html#hero" class="nav-brand">
            <span class="brand-monogram">
              <img src="${logoSrc}" alt="Logo AKREFITAS 2027" class="brand-logo-img" 
                   onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
              <svg viewBox="0 0 100 100" class="brand-glyph" style="display: none;">
                <circle cx="50" cy="50" r="44" stroke="currentColor" stroke-width="2.5" fill="none" opacity="0.4" stroke-dasharray="4 2"/>
                <path d="M50 16 L78 78 L50 64 L22 78 Z" fill="none" stroke="currentColor" stroke-width="3" stroke-linejoin="round"/>
                <circle cx="50" cy="46" r="6" fill="currentColor"/>
              </svg>
            </span>
            <span class="brand-text">
              <strong>AKREFITAS</strong>
              <small>2027</small>
            </span>
          </a>

          <div class="nav-menu" id="navMenu">
            <a href="index.html#hero" class="nav-link">BERANDA</a>
            <a href="index.html#tentang" class="nav-link">TENTANG</a>
            <a href="index.html#avatar-concept" class="nav-link">AVATAR</a>
            <a href="index.html#kompetisi" class="nav-link">KOMPETISI</a>

            <!-- DROPDOWN INFORMASI -->
            <div class="nav-dropdown" id="infoDropdown">
              <button class="nav-link nav-dropdown-toggle" id="dropdownBtn" aria-expanded="false">
                <span>INFORMASI</span>
                <svg class="dropdown-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polyline points="6 9 12 15 18 9"/>
                </svg>
              </button>
              <div class="nav-dropdown-menu" id="dropdownMenu">
                <a href="index.html#informasi" class="dropdown-item">Warta & Pengumuman</a>
                <a href="index.html#perjalanan" class="dropdown-item">Linimasa Perjalanan</a>
                <a href="faq.html" class="dropdown-item">Pusat FAQ & Regulasi</a>
              </div>
            </div>

            <a href="panitia.html" class="nav-link">PANITIA</a>
            <a href="index.html#dokumen" class="nav-link">DOKUMEN</a>
            <a href="index.html#kontak" class="nav-link">KONTAK</a>
            
            <a href="${regUrl}" class="nav-cta btn-register" target="_blank" rel="noopener">DAFTAR SEKARANG</a>
          </div>

          <!-- NAVBAR RIGHT ACTIONS: AUDIO CONTROLLER + HAMBURGER -->
          <div class="nav-right-actions">
            <!-- AUDIO CONTROLLER INTEGRATED -->
            <div class="nav-audio-controller" id="navAudioWidget">
              <audio id="navbarAudio" src="${audioSrc}" loop preload="auto"></audio>
              <button class="nav-audio-btn" id="navAudioBtn" aria-label="Toggle Musik Tema" title="Nyalakan/Matikan Musik Tema">
                <div class="audio-equalizer">
                  <span class="eq-bar bar-1"></span>
                  <span class="eq-bar bar-2"></span>
                  <span class="eq-bar bar-3"></span>
                </div>
                <svg class="nav-audio-icon icon-muted" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
                  <line x1="23" y1="9" x2="17" y2="15"/>
                  <line x1="17" y1="9" x2="23" y2="15"/>
                </svg>
                <svg class="nav-audio-icon icon-playing" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
                  <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"/>
                </svg>
              </button>
            </div>

            <button class="hamburger-btn" id="hamburgerBtn" aria-label="Buka Menu Navigasi" aria-expanded="false">
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </nav>
    `;

    this.initInteractions();
    this.initAudioLogic();
  }

  initInteractions() {
    const navbar = this.querySelector('#navbar');
    const hamburger = this.querySelector('#hamburgerBtn');
    const navMenu = this.querySelector('#navMenu');
    const backdrop = this.querySelector('#navBackdrop');
    const dropdownToggle = this.querySelector('#dropdownBtn');
    const dropdownParent = this.querySelector('#infoDropdown');

    // Sticky scroll effect
    window.addEventListener('scroll', () => {
      if (window.scrollY > 30) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }, { passive: true });

    const openMenu = () => {
      hamburger.classList.add('open');
      hamburger.setAttribute('aria-expanded', 'true');
      navMenu.classList.add('open');
      backdrop.classList.add('active');
      document.body.classList.add('menu-locked');
    };

    const closeMenu = () => {
      hamburger.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
      navMenu.classList.remove('open');
      backdrop.classList.remove('active');
      document.body.classList.remove('menu-locked');
      dropdownParent.classList.remove('active');
      dropdownToggle.setAttribute('aria-expanded', 'false');
    };

    // Tombol Hamburger
    hamburger.addEventListener('click', () => {
      if (navMenu.classList.contains('open')) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    backdrop.addEventListener('click', closeMenu);

    // FIX 1: Handler Klik Dropdown Khusus Mobile & Desktop
    dropdownToggle.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation(); // Mencegah bubbling agar tidak menutup menu drawer
      const isCurrentlyActive = dropdownParent.classList.contains('active');
      dropdownParent.classList.toggle('active', !isCurrentlyActive);
      dropdownToggle.setAttribute('aria-expanded', !isCurrentlyActive);
    });

    // Desktop hover: keluar dari area dropdown menutup menu
    dropdownParent.addEventListener('mouseleave', () => {
      if (window.innerWidth > 768) {
        dropdownParent.classList.remove('active');
        dropdownToggle.setAttribute('aria-expanded', 'false');
      }
    });

    // Menutup dropdown jika klik di luar area navbar
    document.addEventListener('click', (e) => {
      if (!dropdownParent.contains(e.target)) {
        dropdownParent.classList.remove('active');
        dropdownToggle.setAttribute('aria-expanded', 'false');
      }
    });

    // FIX 2: Hanya link biasa (bukan tombol toggle dropdown) yang menutup drawer
    const regularNavLinks = navMenu.querySelectorAll('a:not(.nav-dropdown-toggle)');
    regularNavLinks.forEach(link => {
      link.addEventListener('click', () => {
        closeMenu();
      });
    });
  }

 initAudioLogic() {
    const audio = this.querySelector('#navbarAudio');
    const toggleBtn = this.querySelector('#navAudioBtn');
    const widget = this.querySelector('#navAudioWidget');
    if (!audio || !toggleBtn) return;

    audio.volume = (typeof SITE_CONFIG !== 'undefined' && SITE_CONFIG.audioVolume) 
      ? SITE_CONFIG.audioVolume 
      : 0.45;

    // Pulihkan progres detik lagu jika ada
    const savedTime = sessionStorage.getItem('akrefitas_audio_time');
    if (savedTime) {
      audio.currentTime = parseFloat(savedTime);
    }

    const wasPlaying = sessionStorage.getItem('akrefitas_audio_playing') === 'true';

    const playAudio = () => {
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise.then(() => {
          widget.classList.add('playing');
          sessionStorage.setItem('akrefitas_audio_playing', 'true');
        }).catch(err => {
          // Normal jika browser memblokir sebelum interaksi pertama
          console.warn("Autoplay policy: menunggu interaksi pertama.");
        });
      }
    };

    const pauseAudio = () => {
      audio.pause();
      widget.classList.remove('playing');
      sessionStorage.setItem('akrefitas_audio_playing', 'false');
    };

    audio.addEventListener('timeupdate', () => {
      sessionStorage.setItem('akrefitas_audio_time', audio.currentTime);
    });

    // Jika sebelumnya di halaman lain musik sudah menyala, coba putar
    if (wasPlaying) {
      playAudio();
    }

    // LISTENER INTERAKSI GLOBAL (Window Level + Capture Mode)
    // Menangkap klik, tap layar HP, scroll, atau tombol keyboard apa pun
    const triggerAudioOnFirstAction = () => {
      if (sessionStorage.getItem('akrefitas_audio_user_muted') !== 'true') {
        playAudio();
      }
      
      // Bersihkan event setelah interaksi pertama berhasil dideteksi
      ['pointerdown', 'touchstart', 'click', 'keydown'].forEach(evt => {
        window.removeEventListener(evt, triggerAudioOnFirstAction, true);
      });
    };

    // Pasang listener di window dengan capture: true agar tidak terhalang elemen lain
    ['pointerdown', 'touchstart', 'click', 'keydown'].forEach(evt => {
      window.addEventListener(evt, triggerAudioOnFirstAction, { capture: true, once: true });
    });

    // Tombol Toggle di Navbar
    toggleBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      if (!audio.paused) {
        pauseAudio();
        sessionStorage.setItem('akrefitas_audio_user_muted', 'true');
      } else {
        sessionStorage.removeItem('akrefitas_audio_user_muted');
        playAudio();
      }
    });
  }
}

customElements.define('site-navbar', SiteNavbar);