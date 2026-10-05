/**
 * AKREFITAS 2027 — SITE CONFIGURATION
 * Seluruh tautan eksternal, jadwal dummy 2027, dan data konten statis dipusatkan di sini.
 */

const SITE_CONFIG = {
  // External Links (Google Forms, Google Drive, WhatsApp, Medsos)
  registrationUrl: "https://forms.google.com/your-registration-form-id",
  juknisUrl: "https://drive.google.com/file/d/your-juknis-id/view",
  formulirUrl: "https://drive.google.com/file/d/your-formulir-id/view",
  panduanUrl: "https://drive.google.com/file/d/your-panduan-id/view",
  dokumenLainUrl: "https://drive.google.com/drive/folders/your-folder-id",
  whatsappUrl: "https://wa.me/6281234567890",
  whatsappChannelUrl: "https://whatsapp.com/channel/your-channel-id",
  instagramUrl: "https://instagram.com/akrefitas",
  youtubeUrl: "https://youtube.com/@akrefitas",
  tiktokUrl: "https://tiktok.com/@akrefitas",
  audioUrl: "assets/audio/theme.mp3",
  audioVolume: 0.45,
  heroBackgroundImage: "assets/images/hero-web-art2.jpg",
  logoUrl: "assets/images/logo-akrefitas.png",
  // TARGET TANGGAL EVENT (DUMMY 2027)
  // Menuju hari puncak pelaksanaan: 14 Agustus 2027 pukul 08:00:00 WITA
  eventDate: "2027-08-14T08:00:00",

  // LINIMASA PERJALANAN (DUMMY 2027)
  timeline: [
    { 
      phase: "PERSIAPAN & SOSIALISASI", 
      date: "15 MEI 2027", 
      note: "Publikasi panduan teknis umum dan sosialisasi regulasi ke pangkalan PMR." 
    },
    { 
      phase: "PENDAFTARAN DELEGASI", 
      date: "01 JUNI – 15 JULI 2027", 
      note: "Pengisian formulir registrasi online peserta melalui Google Form resmi." 
    },
    { 
      phase: "TECHNICAL MEETING", 
      date: "01 AGUSTUS 2027", 
      note: "Pemaparan detail teknis penilaian dan pengundian nomor urut tanding kontingen." 
    },
    { 
      phase: "PELAKSANAAN KOMPETISI", 
      date: "14 – 16 AGUSTUS 2027", 
      note: "Ajang uji ketangkasan 4 elemen kepalangmerahan remaja di gelanggang utama." 
    },
    { 
      phase: "PENGANUGERAHAN & PENUTUPAN", 
      date: "17 AGUSTUS 2027", 
      note: "Pengumuman juara umum, seremonial piala bergilir, dan malam keakraban relawan." 
    }
  ],

  // DATA PENGUMUMAN TERBARU (DUMMY 2027)
  announcements: [
    {
      date: "10 JUNI 2027",
      title: "Juknis Operasional & Lembar Penilaian Resmi Dirilis",
      description: "Petunjuk teknis final untuk seluruh cabang ketangkasan medis dan tandu darurat telah dapat diunduh di Pusat Dokumen.",
      link: "#dokumen"
    },
    {
      date: "01 JUNI 2027",
      title: "Pendaftaran Gelombang I Resmi Dibuka",
      description: "Narahubung kontingen sekolah kini dapat mendaftarkan tim delegasinya melalui formulir digital terpadu.",
      link: "#pendaftaran"
    },
    {
      date: "15 MEI 2027",
      title: "Peluncuran Tema AVATAR: Semangat Empat Elemen PMR",
      description: "Eksplorasi filosofi Aksi Visioner, Aktualisasi Talenta, dan Aspirasi Relawan Muda untuk edisi AKREFITAS 2027.",
      link: "#avatar-concept"
    }
  ],

  // CABANG KOMPETISI
  competitions: [
    {
      category: "Pertolongan Pertama (PP)",
      element: "EARTH",
      tag: "Ketangkasan Medis",
      description: "Ketangguhan mental, stabilitas tindakan, dan kecakapan teknis penanganan kegawatdaruratan medis dasar di lapangan."
    },
    {
      category: "Perawatan Keluarga (PK)",
      element: "WATER",
      tag: "Empati & Perawatan",
      description: "Adaptabilitas, kelembutan empati, dan alur penanganan kesehatan promotif-preventif di lingkungan keluarga dan masyarakat."
    },
    {
      category: "Evakuasi & Pasang Bongkar Tandu",
      element: "FIRE",
      tag: "Ketangkasan Fisik",
      description: "Ketangkasan, dinamisme kecepatan, dan keberanian membara dalam rekayasa lintasan evakuasi korban darurat."
    },
    {
      category: "Youth Leadership & Campaigner",
      element: "AIR",
      tag: "Komunikasi & Visi",
      description: "Penyebaran gagasan kemanusiaan, orasi visioner, dan advokasi kesehatan remaja dengan daya jangkau tanpa batas."
    }
  ],

  // Tambahkan properti ini di dalam objek SITE_CONFIG di js/config.js:
  faqCategories: [
    {
      element: "EARTH",
      elementTitle: "PENDAFTARAN & KETENTUAN UMUM",
      items: [
        {
          q: "Apa itu AKREFITAS 2027?",
          a: "AKREFITAS 2027 adalah ajang kompetisi kepalangmerahan akbar dua tahunan untuk tingkat Palang Merah Remaja (PMR). Pada edisi tahun 2027, kegiatan mengusung tema <strong>AVATAR</strong> yang merefleksikan <em>Aksi Visioner, Aktualisasi Talenta, dan Aspirasi Relawan Muda</em>."
        },
        {
          q: "Siapa saja yang berhak menjadi peserta?",
          a: "Peserta merupakan anggota aktif Palang Merah Remaja (PMR) tingkat Madya (SMP/MTs sederajat) dan Wira (SMA/SMK/MA sederajat) yang terdaftar resmi di pangkalan sekolah masing-masing dan mendapatkan rekomendasi/mandat dari pihak sekolah."
        },
        {
          q: "Bagaimana alur pendaftaran kontingen?",
          a: "Pendaftaran dilakukan secara terpusat melalui tautan <strong>Google Form resmi</strong> yang tersedia di website ini. Pembina atau pimpinan kontingen mengisi formulir delegasi dan mengunggah kelengkapan berkas administrasi sesuai petunjuk pelaksanaan."
        },
        {
          q: "Apakah pendaftaran dikenakan biaya?",
          a: "Ketentuan terkait biaya kontribusi kegiatan, paket konsumsi, atribut peserta, dan akomodasi diatur secara rinci dalam Buku Petunjuk Teknis (Juknis) yang dapat diunduh pada Pusat Dokumen."
        }
      ]
    },
    {
      element: "FIRE",
      elementTitle: "TEKNIS LOMBA & CABANG KOMPETISI",
      items: [
        {
          q: "Apa saja cabang lomba yang dipertandingkan?",
          a: "Terdapat 4 rumpun cabang kompetisi utama yang mewakili elemen kesiapsiagaan: Pertolongan Pertama (PP), Perawatan Keluarga (PK), Pasang Bongkar Tandu & Evakuasi Darurat, serta Youth Leadership & Health Campaigner."
        },
        {
          q: "Berapa jumlah anggota dalam satu tim kontingen?",
          a: "Setiap cabang memiliki alokasi kuota tim yang berbeda (misalnya: tim tandu beranggotakan 2 orang, tim PP 3 orang). Detail kuota tim tiap cabang dan peserta cadangan tertera lengkap pada lampiran Juknis."
        },
        {
          q: "Kapan dan di mana Technical Meeting diadakan?",
          a: "Technical Meeting dijadwalkan pada <strong>01 Agustus 2027</strong>. Seluruh perwakilan kontingen diwajibkan hadir untuk mendengarkan penegasan tata tertib serta mengikuti pengundian nomor urut tanding."
        }
      ]
    },
    {
      element: "WATER",
      elementTitle: "BERKAS, JUKNIS & ADMINISTRASI",
      items: [
        {
          q: "Di mana saya bisa mengunduh formulir pendaftaran dan surat mandat?",
          a: "Seluruh berkas formal, draft surat mandat kepala sekolah, lembar biodata peserta, dan pedoman teknis telah disiapkan dalam format cloud di menu <strong>Pusat Dokumen</strong> website ini."
        },
        {
          q: "Bagaimana jika ada perubahan susunan anggota peserta sebelum lomba?",
          a: "Perubahan data peserta diperkenankan paling lambat sebelum sesi verifikasi faktual pada saat Technical Meeting dengan membawa surat revisi mandat resmi dari kepala sekolah."
        }
      ]
    },
    {
      element: "AIR",
      elementTitle: "LAYANAN INFORMASI & BANTUAN",
      items: [
        {
          q: "Bagaimana cara mendapatkan pembaruan informasi tercepat?",
          a: "Seluruh informasi mendesak, rilis pengumuman, dan tanya-jawab umum disiarkan melalui <strong>WhatsApp Channel Resmi AKREFITAS 2027</strong>. Pastikan pembina dan ketua kontingen telah bergabung ke saluran tersebut."
        },
        {
          q: "Ke mana saya harus menghubungi jika mengalami kendala berkas?",
          a: "Silakan hubungi Helpdesk Panitia melalui tombol kontak WhatsApp resmi yang tersedia di bagian bawah website ini pada jam kerja operasional panitia."
        }
      ]
    }
  ],
 // Data Panitia Pelaksana AKREFITAS 2027
  committee: {
    // 1. KETUA PELAKSANA (Orang pertama otomatis tampil di Spotlight teratas)
    chairperson: {
      name: "Rista Ilma Andasari",
      role: "Ketua Pelaksana (Project Leader)",
      element: "FIRE",
      image: "assets/images/panitia/1.png",
      division: "Pimpinan Pelaksana",
      quote: "Kobarkan aksi visioner, buktikan dedikasi nyata relawan muda."
    },

    // 2. BPH INTI & ANGGOTA PANITIA LAINNYA
    organizingTeam: [
      // BPH Inti
      {
        name: "Fajar Ramadhan",
        role: "Wakil Ketua Pelaksana",
        element: "WATER",
        image: "assets/images/panitia/2.png",
        division: "BPH Inti",
        quote: "Menjaga keseimbangan dan kelancaran setiap alur koordinasi."
      },
      {
        name: "Annisa Tri Wardani",
        role: "Sekretaris I",
        element: "AIR",
        image: "assets/images/panitia/3.png",
        division: "BPH Inti"
      },
      {
        name: "Muhammad Rizky Pratama",
        role: "Sekretaris II",
        element: "AIR",
        image: "assets/images/panitia/7.png",
        division: "BPH Inti"
      },
      {
        name: "Dinda Maharani",
        role: "Bendahara Umum",
        element: "EARTH",
        image: "assets/images/panitia/4.png",
        division: "BPH Inti"
      },
      {
        name: "Siti Rahmania Putri",
        role: "Wakil Bendahara",
        element: "EARTH",
        image: "assets/images/panitia/6.png",
        division: "BPH Inti"
      },

      // Koordinator & Anggota Divisi Acara
      {
        name: "Bagas Satria Wibowo",
        role: "Koordinator Sie Acara",
        element: "FIRE",
        image: "assets/images/panitia/5.png",
        division: "Divisi Acara & Perlombaan"
      },
      {
        name: "Alif Hidayatullah",
        role: "Staff / Anggota Divisi Acara",
        element: "FIRE",
        image: "assets/images/panitia/2.png",
        division: "Divisi Acara & Perlombaan"
      },
      {
        name: "Tiara Kusuma Dewi",
        role: "Staff / Anggota Divisi Acara",
        element: "FIRE",
        image: "assets/images/panitia/3.png",
        division: "Divisi Acara & Perlombaan"
      },

      // Koordinator & Anggota Logistik / Perlengkapan
      {
        name: "Tegar Maulana Putra",
        role: "Koordinator Perlengkapan",
        element: "EARTH",
        image: "assets/images/panitia/6.png",
        division: "Divisi Logistik & Sarpras"
      },
      {
        name: "Rendy Pratama",
        role: "Staff Perlengkapan Lapangan",
        element: "EARTH",
        image: "assets/images/panitia/5.png",
        division: "Divisi Logistik & Sarpras"
      },

      // Koordinator & Anggota Publikasi & Humas
      {
        name: "Zahra Amalia Putri",
        role: "Koordinator Publikasi & Dokumentasi",
        element: "AIR",
        image: "assets/images/panitia/7.png",
        division: "Divisi Publikasi & Humas"
      },
      {
        name: "Fikri Haikal",
        role: "Staff Desain & Multimedia",
        element: "AIR",
        image: "assets/images/panitia/8.png",
        division: "Divisi Publikasi & Humas"
      },

      // Koordinator & Anggota Medis & K3
      {
        name: "drg. Fitriani Azzahra",
        role: "Koordinator Medis & Kesehatan",
        element: "WATER",
        image: "assets/images/panitia/8.png",
        division: "Divisi Medis & K3"
      },
      {
        name: "Rahmat Santoso",
        role: "Staff Tim Reaksi Cepat Medis",
        element: "WATER",
        image: "assets/images/panitia/2.png",
        division: "Divisi Medis & K3"
      },

      // Divisi Konsumsi & Akomodasi
      {
        name: "Nabilah Syifaurrahmah",
        role: "Koordinator Sie Konsumsi",
        element: "WATER",
        image: "assets/images/panitia/4.png",
        division: "Divisi Konsumsi & Logistik Pangan"
      },
      {
        name: "Melani Eka Pratiwi",
        role: "Staff Sie Akomodasi & Transit",
        element: "AIR",
        image: "assets/images/panitia/3.png",
        division: "Divisi Akomodasi Kontingen"
      }
    ],

    // 3. STEERING COMMITTEE (BANYAK / BEBERAPA ORANG)
    steering: [
      {
        name: "Drs. H. Makkasau, M.Pd",
        role: "Ketua Steering Committee",
        element: "EARTH",
        image: "assets/images/panitia/9.png",
        quote: "Menjaga integritas, sportivitas, dan kemurnian prinsip dasar kepalangmerahan."
      },
      {
        name: "Khaerul Anwar, S.ST",
        role: "Penasihat Teknis Lomba",
        element: "AIR",
        image: "assets/images/panitia/10.png",
        quote: "Standarisasi kompetisi berbasis kurikulum PMR modern dan aplikatif."
      },
      {
        name: "Nurhaliza Basri, S.Ked",
        role: "Pengarah Divisi Medis & K3",
        element: "WATER",
        image: "assets/images/panitia/8.png",
        quote: "Kesiapsiagaan penanganan kegawatdaruratan tanpa kompromi."
      },
      {
        name: "Ilham Akbar, S.Kom",
        role: "Pengarah Transformasi Digital",
        element: "FIRE",
        image: "assets/images/panitia/6.png",
        quote: "Membangun sistem informasi dan publikasi yang inklusif bagi seluruh kontingen."
      }
    ],

    // 4. COSTER (HANYA 1 ORANG)
    coster: {
      name: "Arya Bima Perkasa",
      role: "Chief Field Marshal / Coster Utama",
      element: "FIRE",
      image: "assets/images/panitia/5.png",
      division: "Komandan Lapangan & Pengendali Teknis",
      quote: "Memastikan denyut alur lapangan bergerak selaras dengan ritme 4 elemen."
    }
  }
};

