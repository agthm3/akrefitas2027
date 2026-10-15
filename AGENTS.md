# AGENTS.md — Konteks Proyek AKREFITAS 2027

Dokumen ini ditujukan sebagai panduan instruksi dan konteks teknis bagi agen AI (maupun developer) yang bekerja pada repositori ini.

---

## 1. Ikhtisar Proyek (Project Overview)

- **Nama Acara**: AKREFITAS 2027
- **Penyelenggara**: PMR PMI Unit 205 SMAN 5 Makassar
- **Tema Kegiatan**: **AVATAR** (*Aksi Visioner, Aktualisasi Talenta, dan Aspirasi Relawan Muda*)
- **Filosofi Visual**: Konsep 4 Elemen Avatar (*Water*, *Earth*, *Fire*, *Air*) dipadukan dengan estetika *Ancient Parchment* / naskah kuno bernuansa hangat dan elegan.
- **Jenis Website**: Static landing page & information hub (multi-page static site) tanpa build tools atau framework eksternal berat (Vanilla HTML, CSS, JavaScript).

---

## 2. Struktur Direktori

```text
akrefitas2027/
├── index.html                 # Halaman utama (Hero, Countdown, Tentang, Tema Avatar, Lomba, Linimasa, Warta, Dokumen, Kontak)
├── panitia.html               # Halaman susunan Panitia Pelaksana, Coster, & Steering Committee
├── faq.html                   # Halaman Tanya Jawab / Regulasi interaktif (Accordion)
├── AGENTS.md                  # Panduan konteks & instruksi untuk agen AI
├── css/
│   └── style.css              # Seluruh styling styling CSS (desain kuno/ancient, mobile-first, animasi, accordion)
├── js/
│   ├── config.js              # Pusat konfigurasi URL, tanggal event, FAQ, cabang lomba, dan susunan panitia
│   ├── app.js                 # Runtime index.html (countdown, render timeline, kompetisi, pengumuman, hero)
│   └── components/
│       ├── navbar.js          # Web Component <site-navbar> (navigasi, dropdown warta, tombol audio background)
│       ├── footer.js          # Web Component <site-footer> (footer modular lintas halaman)
│       └── audio-player.js    # Standalone audio player Web Component <site-audio-player>
└── assets/
    ├── audio/
    │   └── theme.mp3          # Musik latar tema ambient
    └── images/
        ├── logo-akrefitas.png # Logo emblem utama
        ├── logo-akrefitas-merah.png # Varian tipografi / logo merah
        ├── hero-web-art*.jpg  # Background hero art
        └── panitia/           # Foto & siluet panitia (1.png s.d. 10.png)
```

---

## 3. Arsitektur & Prinsip Kode

### A. Centralized Configuration (`js/config.js`)
- Semua link eksternal (Google Forms pendaftaran, tautan juknis Google Drive, media sosial, nomor WhatsApp) **wajib diatur melalui `SITE_CONFIG`**.
- Data dinamis yang dirender ke DOM diatur di `SITE_CONFIG`:
  - `eventDate`: ISO Date string untuk countdown timer (menuju puncak 14 Agustus 2027).
  - `timeline`: Linimasa tahapan acara (Persiapan, Pendaftaran, Technical Meeting, Pelaksanaan, dsb.).
  - `competitions`: Daftar cabang lomba berdasarkan 4 elemen PMR (PP/Earth, PK/Water, Tandu Evakuasi/Fire, Leadership/Air).
  - `announcements`: Warta dan pengumuman terbaru.
  - `faqCategories`: Pertanyaan umum dikelompokkan berdasarkan 4 elemen.
  - `committee`: Struktur panitia (`chairperson`, `organizingTeam`, `coster`, `steering`).

### B. Web Components (Modular UI)
- Header dan Footer dibangun sebagai Native Custom Elements:
  - `<site-navbar>` (`js/components/navbar.js`): Menyediakan drawer responsif, menu dropdown, dan integrasi pemutar audio tema dengan state tersimpan di `sessionStorage`.
  - `<site-footer>` (`js/components/footer.js`): Footer terpadu yang membaca link dari `SITE_CONFIG`.
- Saat memodifikasi navigasi atau footer, lakukan pada komponen terkait di `js/components/` agar otomatis berdampak pada seluruh halaman (`index.html`, `panitia.html`, `faq.html`).

### C. Desain & Tema (`css/style.css`)
- **Palet Warna**:
  - Dominan Parchment (70%): `--color-parchment-antique` (#E8D29A), `--color-parchment-bg` (#F7F1E1), `--color-gold-antique` (#C29A52).
  - Tinta/Dark Brown (15%): `--color-brown-deep` (#3E2B1F), `--color-ink-deep` (#241A14).
  - Aksen 4 Elemen (15%):
    - *Water*: `#3B8FB5` (Badge: `.badge-water`)
    - *Air*: `#8CC9D8` (Badge: `.badge-air`)
    - *Fire*: `#B94A2F` / `#D66A32` (Badge: `.badge-fire`)
    - *Earth*: `#6E4A2E` / `#68704A` (Badge: `.badge-earth`)
- **Tipografi**:
  - Headings / Display: `'Cinzel', serif`
  - Body Text: `'Plus Jakarta Sans', sans-serif`
- **Efek Khusus**:
  - Tekstur kertas kuno via `.ancient-parchment-overlay` dengan SVG fractal noise filter.
  - Animasi mandala elemen SVG pada hero section.
  - Penanganan audio autoplay sesuai browser policy (memerlukan user gesture pertama atau toggle manual).

---

## 4. Panduan Kerja untuk Agen & Pengembang (Guidelines)

1. **Pertahankan Vanilla Architecture**:
   - Jangan menambahkan bundler (Webpack, Vite), node framework, atau dependensi NPM runtime kecuali diinstruksikan langsung oleh pengguna.
   - Situs harus tetap dapat dijalankan langsung via static file server (seperti Live Server, Python `http.server`, atau GitHub Pages).

2. **Konsistensi Data**:
   - Jika mengubah URL, jadwal, atau konten lomba/panitia/FAQ, utamakan mengedit `js/config.js`.
   - Pastikan sanitasi teks terjaga saat merender ke HTML (gunakan helper `escapeHtml` jika data bersumber dari luar).

3. **Kompatibilitas Lintas Halaman**:
   - Setiap halaman baru harus menyertakan font Cinzel & Plus Jakarta Sans, `css/style.css`, `js/config.js`, serta komponen `<site-navbar>` dan `<site-footer>`.
   - Sertakan `<div class="ancient-parchment-overlay" aria-hidden="true"></div>` di awal `<body>` untuk menjaga kontinuitas tekstur visual.

4. **Mobile Responsiveness**:
   - Gunakan pendekatan *mobile-first*.
   - Uji perilaku menu drawer vertikal (`hamburger-vertical`), accordion FAQ, serta grid panitia pada resolusi layar ponsel (&le; 768px).

---

## 5. Menjalankan Proyek Secara Lokal

Gunakan web server statis sederhana di root direktori proyek:
```bash
# Menggunakan Python 3
python3 -m http.server 8000

# Atau menggunakan PHP built-in server
php -S localhost:8000
```
Buka browser di `http://localhost:8000/`.
