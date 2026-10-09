/**
 * AKREFITAS 2027 — APP RUNTIME
 */

document.addEventListener("DOMContentLoaded", () => {
  initHeroLogo();
  initExternalLinks();
  initCountdown();
  renderTimeline();
  renderCompetitions();
  renderAnnouncements();
  initHeroBackground();
});

function initExternalLinks() {
  if (typeof SITE_CONFIG === "undefined") return;

  document.querySelectorAll(".btn-register").forEach(btn => btn.href = SITE_CONFIG.registrationUrl);
  document.querySelectorAll(".btn-juknis").forEach(btn => btn.href = SITE_CONFIG.juknisUrl);
  document.querySelectorAll(".btn-formulir").forEach(btn => btn.href = SITE_CONFIG.formulirUrl);
  document.querySelectorAll(".btn-panduan").forEach(btn => btn.href = SITE_CONFIG.panduanUrl);
  document.querySelectorAll(".btn-dokumen-lain").forEach(btn => btn.href = SITE_CONFIG.dokumenLainUrl);
  document.querySelectorAll(".btn-whatsapp").forEach(btn => btn.href = SITE_CONFIG.whatsappUrl);
  document.querySelectorAll(".btn-whatsapp-channel").forEach(btn => btn.href = SITE_CONFIG.whatsappChannelUrl);
}

function initCountdown() {
  const daysEl = document.getElementById("days");
  const hoursEl = document.getElementById("hours");
  const minutesEl = document.getElementById("minutes");
  const secondsEl = document.getElementById("seconds");
  const statusEl = document.getElementById("countdownStatus");
  const gridEl = document.getElementById("countdownGrid");

  if (!SITE_CONFIG.eventDate || SITE_CONFIG.eventDate.trim() === "" || SITE_CONFIG.eventDate.includes("YYYY")) {
    if (gridEl) gridEl.style.display = "none";
    if (statusEl) statusEl.innerHTML = "<strong>TANGGAL RESMI SEGERA DITETAPKAN</strong>";
    return;
  }

  const targetTime = new Date(SITE_CONFIG.eventDate).getTime();

  function update() {
    const now = new Date().getTime();
    const distance = targetTime - now;

    if (distance < 0) {
      if (gridEl) gridEl.style.display = "none";
      if (statusEl) statusEl.innerHTML = "<strong>EVENT SEDANG / TELAH BERLANGSUNG</strong>";
      return;
    }

    daysEl.textContent = String(Math.floor(distance / (1000 * 60 * 60 * 24))).padStart(2, "0");
    hoursEl.textContent = String(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, "0");
    minutesEl.textContent = String(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, "0");
    secondsEl.textContent = String(Math.floor((distance % 1000) / 1000)).padStart(2, "0");
  }

  update();
  setInterval(update, 1000);
}

function renderTimeline() {
  const container = document.getElementById("timelineContainer");
  if (!container || !SITE_CONFIG.timeline) return;

  container.innerHTML = SITE_CONFIG.timeline.map((item, index) => `
    <div class="timeline-step">
      <div class="timeline-node">${index + 1}</div>
      <div class="timeline-card">
        <div class="timeline-card-header">
          <h3 class="timeline-phase">${escapeHtml(item.phase)}</h3>
          <span class="timeline-date">${escapeHtml(item.date)}</span>
        </div>
        <p class="timeline-note">${escapeHtml(item.note)}</p>
      </div>
    </div>
  `).join("");
}

function renderCompetitions() {
  const container = document.getElementById("competitionsContainer");
  if (!container || !SITE_CONFIG.competitions) return;

  const elementBadgeClasses = {
    EARTH: "badge-earth",
    WATER: "badge-water",
    FIRE: "badge-fire",
    AIR: "badge-air"
  };

  container.innerHTML = SITE_CONFIG.competitions.map(comp => `
    <article class="comp-card">
      <div class="comp-meta">
        <span class="comp-tag">${escapeHtml(comp.tag)}</span>
        <span class="comp-element ${elementBadgeClasses[comp.element] || "badge-earth"}">${escapeHtml(comp.element)}</span>
      </div>
      <h3 class="comp-title">${escapeHtml(comp.category)}</h3>
      <p class="comp-desc">${escapeHtml(comp.description)}</p>
    </article>
  `).join("");
}

function renderAnnouncements() {
  const container = document.getElementById("announcementsContainer");
  if (!container || !SITE_CONFIG.announcements) return;

  container.innerHTML = SITE_CONFIG.announcements.slice(0, 3).map(item => `
    <article class="announcement-card">
      <div class="announcement-body">
        <div class="announcement-date">${escapeHtml(item.date)}</div>
        <h3 class="announcement-title">${escapeHtml(item.title)}</h3>
        <p class="announcement-desc">${escapeHtml(item.description)}</p>
      </div>
      <a href="${escapeHtml(item.link)}" class="announcement-btn">BACA DETAIL</a>
    </article>
  `).join("");
}

function escapeHtml(str) {
  if (!str) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function initHeroBackground() {
  const hero = document.getElementById("hero");
  if (hero && SITE_CONFIG.heroBackgroundImage) {
    hero.style.backgroundImage = `
      radial-gradient(circle at center, rgba(251, 246, 233, 0.80) 0%, rgba(237, 225, 197, 0.92) 65%, rgba(223, 205, 165, 0.98) 100%),
      url('${SITE_CONFIG.heroBackgroundImage}')
    `;
    hero.style.backgroundSize = "cover";
    hero.style.backgroundPosition = "center";
  }
}

function initHeroLogo() {
  const heroLogo = document.getElementById("heroLogoImg");
  if (!heroLogo) return;

  const logoSrc = (typeof SITE_CONFIG !== "undefined" && SITE_CONFIG.logoUrl)
    ? SITE_CONFIG.logoUrl
    : "assets/images/logo-akrefitas.png";

  heroLogo.src = logoSrc;
  heroLogo.style.display = "inline-block";
}

function initExternalLinks() {
  if (typeof SITE_CONFIG === 'undefined') return;

  // Link Formulir Pendaftaran
  document.querySelectorAll('.btn-register').forEach(el => {
    if (SITE_CONFIG.registrationUrl) el.href = SITE_CONFIG.registrationUrl;
  });

  // Link Juknis
  document.querySelectorAll('.btn-juknis').forEach(el => {
    if (SITE_CONFIG.juknisUrl) el.href = SITE_CONFIG.juknisUrl;
  });

  // Link Formulir Berkas
  document.querySelectorAll('.btn-formulir').forEach(el => {
    if (SITE_CONFIG.formUrl) el.href = SITE_CONFIG.formUrl;
  });

  // Link Panduan
  document.querySelectorAll('.btn-panduan').forEach(el => {
    if (SITE_CONFIG.guideUrl) el.href = SITE_CONFIG.guideUrl;
  });

  // Link Dokumen Lainnya
  document.querySelectorAll('.btn-dokumen-lain').forEach(el => {
    if (SITE_CONFIG.otherDocsUrl) el.href = SITE_CONFIG.otherDocsUrl;
  });

  // LINK GOOGLE DRIVE LOGO & ASSETS (TAMBAHKAN INI)
  document.querySelectorAll('.btn-brand-assets').forEach(el => {
    if (SITE_CONFIG.brandAssetsUrl) el.href = SITE_CONFIG.brandAssetsUrl;
  });
}