export interface ProjectDiagramTab {
  id: string
  label: string
  title: string
  image: string
  description: string
}

export interface ProjectItem {
  id: string
  title: string
  subtitle: string
  category: 'Web Application' | 'Analisis Sistem' | 'UI/UX Design' | 'Database'
  status: 'Selesai sebagai tugas pembelajaran' | 'Perancangan/Diagram' | 'Dalam Pengembangan'
  tech: string[]
  tools?: string
  description: string
  features?: string[]
  image: string
  diagramTabs?: ProjectDiagramTab[]
  badgeColor?: string
}

export const projectsData: ProjectItem[] = [
  {
    id: 'pos-kasir',
    title: 'POS Kasir — kasir-frontend',
    subtitle: 'Aplikasi Point of Sale Toko Makmur',
    category: 'Web Application',
    status: 'Selesai sebagai tugas pembelajaran',
    tech: ['Nuxt 3', 'Vue 3', 'Laravel API', 'PHP', 'MySQL', 'REST API'],
    image: '/images/projects/pos-kasir.jpg',
    description:
      'Proyek aplikasi kasir dengan pengelolaan data barang dan integrasi API. Bagian frontend dibuat menggunakan Nuxt 3, sedangkan backend menggunakan Laravel API sesuai implementasi proyek.',
    features: [
      'Autentikasi login kasir',
      'Katalog daftar produk dengan filter dan pencarian',
      'Pengelolaan data barang (CRUD: kode barang, stok, harga jual)',
      'Keranjang belanja kalkulasi subtotal dan total harga otomatis',
      'Pilihan metode pembayaran (Tunai / Digital) dan kalkulasi kembalian uang',
      'Riwayat struk transaksi penjualan'
    ]
  },
  {
    id: 'dfd-sistem-parkir',
    title: 'Data Flow Diagram (DFD) — Sistem Parkir',
    subtitle: 'Hierarki Aliran Data Berjenjang Level 0, Level 1, dan Level 2',
    category: 'Analisis Sistem',
    status: 'Perancangan/Diagram',
    tech: ['Draw.io', 'DFD Level 0', 'DFD Level 1', 'DFD Level 2', 'Analisis Sistem'],
    image: '/images/projects/dfd-level-0.jpg',
    description:
      'Diagram aliran data terstruktur berjenjang untuk memodelkan proses bisnis sistem parkir, interaksi entitas eksternal, dekomposisi proses fungsional, dan penyimpanan data relasional.',
    diagramTabs: [
      {
        id: 'level-0',
        label: 'DFD Level 0 (Diagram Konteks)',
        title: 'DFD Level 0 — Diagram Konteks Sistem Parkir',
        image: '/images/projects/dfd-level-0.jpg',
        description:
          'Menggambarkan batasan sistem secara menyeluruh dengan proses tunggal "Sistem Parkir" dan 3 entitas luar: Pengendara (input data kendaraan, scan karcis, bayar; output karcis, info tarif, struk), Petugas (input data petugas, validasi bayar; output info detail), dan Pimpinan (menerima laporan transaksi parkir & pendapatan).'
      },
      {
        id: 'level-1',
        label: 'DFD Level 1 (Dekomposisi)',
        title: 'DFD Level 1 — Dekomposisi 3 Proses Utama',
        image: '/images/projects/dfd-level-1.jpg',
        description:
          'Dekomposisi sistem menjadi 3 proses utama: Proses 1.1 Parkir Masuk (menyimpan data ke D1 Parkir dan menerbitkan karcis), Proses 2.1 Parkir Keluar & Pembayaran (membaca data D1, memproses pembayaran via Petugas, menyimpan ke D2 Pembayaran), dan Proses 3.1 Pembuatan Laporan (merekap data D1 dan D2 menjadi laporan untuk Pimpinan).'
      },
      {
        id: 'level-2',
        label: 'DFD Level 2 (Proses 2)',
        title: 'DFD Level 2 — Rincian Proses Parkir Keluar & Pembayaran',
        image: '/images/projects/dfd-level-2.jpg',
        description:
          'Dekomposisi mendalam terhadap proses 2 menjadi 3 sub-proses terperinci: 2.2.1 Scan & Cek Data Parkir (verifikasi karcis & jam masuk dari data store D1), 2.2.2 Hitung Biaya Parkir (kalkulasi durasi dan akumulasi tarif), serta 2.2.3 Transaksi Pembayaran (pembayaran dari pengendara, validasi petugas, cetak struk, simpan data ke D2, dan pembaruan jam keluar ke D1).'
      }
    ],
    features: [
      'Level 0 (Context Diagram): Batasan sistem & entitas Pengendara, Petugas, Pimpinan',
      'Level 1: Dekomposisi fungsional (Parkir Masuk, Parkir Keluar & Bayar, Laporan)',
      'Level 2: Detail alur transaksi (Scan & Verifikasi, Kalkulasi Tarif Durasi, Validasi & Cetak Struk)',
      'Data Store D1 (Data Parkir) & D2 (Data Pembayaran)'
    ]
  },
  {
    id: 'erd-sistem-parkir',
    title: 'Entity Relationship Diagram (ERD)',
    subtitle: 'Struktur Basis Data Sistem Parkir',
    category: 'Database',
    status: 'Perancangan/Diagram',
    tech: ['Draw.io', 'Database Modeling', 'Relational Schema'],
    image: '/images/projects/erd-parkir.jpg',
    description:
      'Perancangan entitas, atribut, primary key, foreign key, dan kardinalitas relasi data untuk menggambarkan struktur basis data sistem parkir yang efisien dan normal.',
    features: [
      'Entitas Pengendara (id_pengendara, no_plat)',
      'Entitas Parkir (id_parkir, jenis_kendaraan, waktu_masuk, waktu_keluar)',
      'Entitas Pembayaran (id_pembayaran, id_parkir FK, total_biaya)',
      'Entitas Petugas (id_petugas, nama_petugas, no_telp, shift_kerja)',
      'Entitas Admin (id_admin, nama_admin, no_telp)',
      'Relasi kardinalitas 1-to-N dan 1-to-1 antar entitas'
    ]
  },
  {
    id: 'use-case-sistem-parkir',
    title: 'Use Case Diagram — Sistem Parkir',
    subtitle: 'Dokumentasi Kebutuhan dan Interaksi Aktor',
    category: 'Analisis Sistem',
    status: 'Perancangan/Diagram',
    tech: ['Draw.io', 'UML', 'Analisis Kebutuhan'],
    image: '/images/projects/use-case-parkir.jpg',
    description:
      'Dokumentasi kebutuhan fungsional dan pemodelan interaksi antara 4 aktor (Pengendara, Petugas, Admin, dan Sistem) dengan use case dalam sistem parkir.',
    features: [
      'Aktor Pengendara: Request karcis masuk, pembayaran, tap kartu member, terima struk',
      'Aktor Petugas: Scan karcis, tangani kehilangan karcis, kelola member, proses pembayaran',
      'Aktor Admin: Kelola akun petugas, lihat laporan transaksi, cetak laporan',
      'Aktor Sistem: Validasi KTP/STNK, hitung denda karcis, cetak karcis, kalkulasi biaya durasi, sinkronisasi data',
      'Hubungan relasi <<include>> dan <<extend>> pada skenario penanganan karcis'
    ]
  },
  {
    id: 'activity-diagram-sistem-parkir',
    title: 'Activity Diagram — Sistem Parkir',
    subtitle: 'Alur Proses dan Keputusan Sistem Parkir',
    category: 'Analisis Sistem',
    status: 'Perancangan/Diagram',
    tech: ['Draw.io', 'UML', 'Activity Workflow'],
    image: '/images/projects/activity-diagram-parkir.jpg',
    description:
      'Perancangan alur aktivitas dan proses sistem untuk menggambarkan urutan langkah serta alur keputusan dalam operasional sistem parkir.',
    features: [
      'Aktivitas Parkir Masuk Member (Tap kartu, validasi status keaktifan, buka palang)',
      'Aktivitas Parkir Masuk Non-member (Request karcis, cetak karcis & struk, buka palang)',
      'Aktivitas Penanganan Karcis Hilang (Lapor petugas, verifikasi identitas kendaraan, hitung denda)',
      'Aktivitas Keluar Parkir Member (Tempel kartu pada mesin header, kalkulasi status)',
      'Aktivitas Keluar Parkir Non-member (Scan karcis, hitung durasi & tarif, bayar tunai/QR, cetak struk)',
      'Aktivitas Pendaftaran & Perpanjangan Member Baru'
    ]
  },
  {
    id: 'class-diagram-sistem-parkir',
    title: 'Class Diagram — Sistem Parkir',
    subtitle: 'Struktur Kelas, Atribut, dan Metode Berorientasi Objek',
    category: 'Analisis Sistem',
    status: 'Perancangan/Diagram',
    tech: ['Draw.io', 'UML', 'Object-Oriented Design'],
    image: '/images/projects/class-diagram-parkir.jpg',
    description:
      'Perancangan struktur kelas, atribut, tipe data, visibilitas, metode operasi, dan asosiasi relasi antar kelas untuk implementasi perangkat lunak berorientasi objek.',
    features: [
      'Kelas Pengendara: atribut id_pengendara, plat_nomor; metode masukParkir(), bayarParkir(), keluarParkir()',
      'Kelas Parkir: atribut id_parkir, jenis_kendaraan, waktu_masuk, waktu_keluar; metode hitungDurasi(), hitungBiaya()',
      'Kelas Pembayaran: atribut id_pembayaran, id_parkir, total_biaya; metode prosesbayar()',
      'Kelas Petugas: atribut id_petugas, nama_petugas, no_telp, shift_kerja; metode validasiPembayaran()',
      'Kelas Admin: atribut id_admin, nama_admin, no_telp; metode kelolaPetugas(), aturTarif(), lihatLaporan()'
    ]
  },
  {
    id: 'finulipe-uiux',
    title: 'UI/UX Design — Finulipe Patisserie',
    subtitle: 'Desain Antarmuka Web & Mobile Bakery Brand',
    category: 'UI/UX Design',
    status: 'Selesai sebagai tugas pembelajaran',
    tech: ['Figma', 'Wireframing', 'High-Fidelity Mockup', 'Design System'],
    image: '/images/projects/finulipe-uiux.jpg',
    description:
      'Perancangan tampilan dan pengalaman pengguna untuk brand toko roti Finulipe Patisserie. Mencakup grand design tata letak website landing page serta rancangan alur aplikasi mobile.',
    features: [
      'Grand design landing page website dengan suasana hangat (warm artisanal pastry theme)',
      'Komposisi tipografi klasik modern dan palet warna cokelat hangat natural',
      'Rancangan layar mobile app: Splash screen, Login/Register, Katalog Roti & Croissant, Detail Produk, Keranjang, Checkout Pembayaran, dan Profil Akun',
      'Desain kartu produk, banner promosi, dan navigasi bottom bar mobile'
    ]
  },
  {
    id: 'finulipe-website',
    title: 'Website Toko Roti — Finulipe Patisserie',
    subtitle: 'Implementasi Frontend Brand Toko Roti',
    category: 'Web Application',
    status: 'Selesai sebagai tugas pembelajaran',
    tech: ['Vue 3', 'Tailwind CSS', 'HTML Semantik', 'Responsive Web Design'],
    image: '/images/projects/finulipe-website.jpg',
    description:
      'Proyek website toko roti dengan tampilan yang menyajikan informasi brand, halaman beranda, tentang kami, produk, galeri, dan kontak sesuai bagian yang benar-benar tersedia.',
    features: [
      'Hero banner beranda dengan headline "Awali Harimu dengan Rasa"',
      'Section "Tentang Kami" yang menceritakan filosofi bahan dan kehangatan produk',
      'Katalog kategori produk (Roti, Pastry, Tart, Croissant, Cromboloni)',
      'Galeri visual produk dan ulasan kehangatan rasa',
      'Form kontak pemesanan dan informasi gerai toko'
    ]
  }
]
