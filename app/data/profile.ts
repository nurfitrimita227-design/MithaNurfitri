export interface Education {
  institution: string
  major?: string
  grade?: string
  period: string
  description: string
  current?: boolean
}

export interface Organization {
  name: string
  role: string
  period: string
  totalMembers?: string
  teamDetail?: string
  keyPrograms: string[]
  description: string
}

export interface LearningExperience {
  title: string
  category: string
  description: string
  tools: string[]
}

export const profileData = {
  name: 'Mita Nurfitri',
  role: 'Siswi SMK | Rekayasa Perangkat Lunak',
  school: 'SMK Negeri 71 Jakarta',
  major: 'Rekayasa Perangkat Lunak (RPL)',
  grade: 'Kelas XI',
  previousSchool: 'SMPN 139 Jakarta',
  email: 'nurfitrimita227@gmail.com',
  photoUrl: '/images/profile/mita-nurfitri.jpg',
  monogram: 'MN',
  location: 'DKI Jakarta, Indonesia',
  bioIntro:
    'Saya adalah siswi kelas XI jurusan Rekayasa Perangkat Lunak di SMK Negeri 71 Jakarta. Saya sedang belajar mengembangkan website, memahami database, merancang sistem, dan membuat desain antarmuka. Saya senang mengembangkan kemampuan melalui tugas sekolah dan proyek pembelajaran.',
  aboutNarrative:
    'Saya adalah siswi SMK Negeri 71 Jakarta kelas XI jurusan Rekayasa Perangkat Lunak. Saya sedang mengembangkan kemampuan dalam pembuatan website, pengelolaan database, analisis sistem, dan desain antarmuka. Melalui tugas sekolah dan proyek pembelajaran, saya belajar memahami kebutuhan pengguna, menyusun struktur aplikasi, membuat fitur, serta memperbaiki kesalahan dalam proses pengembangan.',
  characteristics: [
    'Senang mempelajari teknologi baru',
    'Tertarik pada desain UI/UX dan estetika antarmuka',
    'Senang memecahkan masalah logika pemrograman',
    'Belajar bertanggung jawab dan bekerja sama melalui tugas serta organisasi',
    'Memiliki minat besar pada kegiatan menggambar'
  ],
  hobbies: {
    drawing: {
      title: 'Menggambar',
      category: 'Hobi Utama & Favorit',
      description:
        'Menggambar merupakan kegiatan favorit saya untuk menyalurkan kreativitas, menuangkan imajinasi, dan melatih ketelitian visual. Hobi ini sangat membantu dalam menumbuhkan rasa estetika, komposisi tata letak, dan pemilihan warna ketika merancang antarmuka UI/UX aplikasi.',
      note: 'Galeri karya gambar dapat ditambahkan pada folder public/images/drawing/.'
    },
    gaming: {
      title: 'Bermain Game',
      category: 'Hobi Lainnya',
      description:
        'Bermain game menjadi sarana hiburan di waktu luang yang sekaligus melatih daya fokus, strategi penyelesaian masalah, serta mengamati antarmuka dan interaksi game yang interaktif.'
    }
  },
  education: [
    {
      institution: 'SMK Negeri 71 Jakarta',
      major: 'Rekayasa Perangkat Lunak (RPL)',
      grade: 'Kelas XI',
      period: '2024 - Sekarang (Tahun Ajaran Aktif)',
      description:
        'Mendalami logika pemrograman, pengembangan aplikasi web (Vue 3, Nuxt, Tailwind CSS), database relational (MySQL), integrasi REST API (Laravel), analisis sistem (DFD Level 0-2, ERD, UML), dan perancangan UI/UX.',
      current: true
    },
    {
      institution: 'SMPN 139 Jakarta',
      period: '2021 - 2024',
      description:
        'Menyelesaikan pendidikan sekolah menengah pertama dengan fokus awal pada pembelajaran akademik, teknologi informasi dasar, dan kegiatan ekstrakurikuler.',
      current: false
    }
  ] as Education[],
  organizations: [
    {
      name: 'OSIS SMK Negeri 71 Jakarta',
      role: 'Anggota Sekbid Seni Budaya & Olahraga',
      period: 'Periode 2024 - 2025',
      totalMembers: '40 Anggota OSIS & 30 Anggota MPK',
      teamDetail: '5 Anggota di Seksi Bidang Seni Budaya & Olahraga',
      keyPrograms: [
        'Menaungi dan mengoordinasikan seluruh kegiatan ekstrakurikuler di sekolah',
        'Program Kerja Utama: Penerbitan dan pengelolaan Mading (Majalah Dinding) sekolah sebagai sarana kreasi siswa'
      ],
      description:
        'Berperan aktif dalam koordinasi kegiatan antarekstrakurikuler di sekolah serta mengelola publikasi media informasi mading sekolah untuk menyalurkan kreativitas seni dan literasi siswa.'
    },
    {
      name: 'ISYAD (Organisasi Pengajian)',
      role: 'Bendahara',
      period: 'Periode Berjalan',
      totalMembers: '20 Anggota',
      teamDetail: 'Tim Bendahara beranggotakan 2 orang (Mita dan rekan)',
      keyPrograms: [
        'Pengelolaan dan pencatatan kas rutin organisasi',
        'Penyusunan anggaran dan pencatatan keuangan untuk event serta kegiatan pengajian'
      ],
      description:
        'Bertanggung jawab atas administrasi keuangan, pencatatan iuran kas, dan pelaporan keuangan acara keagamaan pengajian ISYAD secara transparan dan tertib.'
    }
  ] as Organization[],
  learningExperiences: [
    {
      title: 'Pengembangan Frontend POS Kasir',
      category: 'Web Application',
      description: 'Membangun aplikasi kasir dengan Nuxt 3 dan integrasi Laravel API, mencakup katalog barang, stok, dan transaksi.',
      tools: ['Nuxt 3', 'Vue 3', 'Laravel API', 'MySQL']
    },
    {
      title: 'Analisis Aliran Data Berjenjang (DFD)',
      category: 'Sistem Analisis',
      description: 'Menyusun dokumentasi Data Flow Diagram Sistem Parkir dari Level 0 (Konteks), Level 1 (Dekomposisi Proses), hingga Level 2.',
      tools: ['DFD Level 0', 'DFD Level 1', 'DFD Level 2', 'Draw.io']
    },
    {
      title: 'Perancangan Diagram UML & Basis Data',
      category: 'Software Engineering',
      description: 'Merancang Use Case Diagram, Activity Diagram, Class Diagram, dan Entity Relationship Diagram (ERD).',
      tools: ['Use Case', 'Activity Diagram', 'Class Diagram', 'ERD']
    },
    {
      title: 'Perancangan UI/UX & Web Finulipe Patisserie',
      category: 'UI/UX & Frontend',
      description: 'Merancang identitas visual, wireframe, mockup aplikasi, serta mengimplementasikan website brand toko roti.',
      tools: ['Figma', 'Vue 3', 'Tailwind CSS']
    }
  ] as LearningExperience[]
}
