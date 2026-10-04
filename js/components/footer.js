/**
 * AKREFITAS 2027 — REUSABLE FOOTER COMPONENT
 * Sekali edit file ini, seluruh halaman yang memuat <site-footer> langsung berubah.
 */

class SiteFooter extends HTMLElement {
  connectedCallback() {
    const regUrl = (typeof SITE_CONFIG !== 'undefined' && SITE_CONFIG.registrationUrl) ? SITE_CONFIG.registrationUrl : '#';
    const waChannelUrl = (typeof SITE_CONFIG !== 'undefined' && SITE_CONFIG.whatsappChannelUrl) ? SITE_CONFIG.whatsappChannelUrl : '#';
    const igUrl = (typeof SITE_CONFIG !== 'undefined' && SITE_CONFIG.instagramUrl) ? SITE_CONFIG.instagramUrl : '#';

    this.innerHTML = `
      <footer class="footer">
        <div class="container footer-layout">
          <div class="footer-brand">
            <h3 class="footer-logo">AKREFITAS 2027</h3>
            <p class="footer-theme">AVATAR</p>
            <p class="footer-motto">
              &ldquo;Aksi Visioner, Aktualisasi Talenta, dan Aspirasi Relawan Muda.&rdquo;
            </p>
          </div>

          <div class="footer-nav">
            <h4>NAVIGASI</h4>
            <ul>
              <li><a href="index.html#hero">Beranda</a></li>
              <li><a href="index.html#tentang">Tentang</a></li>
              <li><a href="index.html#kompetisi">Kompetisi</a></li>
              <li><a href="panitia.html">Panitia Pelaksana</a></li>
              <li><a href="faq.html">Tanya Jawab (FAQ)</a></li>
              <li><a href="index.html#dokumen">Pusat Dokumen</a></li>
            </ul>
          </div>

          <div class="footer-links">
            <h4>TAUTAN CEPAT</h4>
            <ul>
              <li><a href="${regUrl}" class="btn-register" target="_blank" rel="noopener">Pendaftaran (Google Form)</a></li>
              <li><a href="index.html#dokumen">Pusat Juknis & Dokumen</a></li>
              <li><a href="${waChannelUrl}" class="btn-whatsapp-channel" target="_blank" rel="noopener">WhatsApp Saluran</a></li>
              <li><a href="${igUrl}" class="btn-instagram" target="_blank" rel="noopener">Instagram Resmi</a></li>
            </ul>
          </div>
        </div>

        <div class="footer-bottom">
          <div class="container footer-bottom-flex">
            <p>&copy; 2027 AKREFITAS. All Rights Reserved.</p>
            <p class="footer-tagline">PMR PMI UNIT 205 SMAN 5 MAKASSAR</p>
          </div>
        </div>
      </footer>
    `;
  }
}

customElements.define('site-footer', SiteFooter);