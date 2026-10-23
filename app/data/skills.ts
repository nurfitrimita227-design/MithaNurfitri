export interface SkillItem {
  name: string
  percentage: number
  levelLabel?: string
}

export interface SkillCategory {
  category: string
  icon: string
  description: string
  items: SkillItem[]
}

export const skillsData: SkillCategory[] = [
  {
    category: 'Frontend Development',
    icon: 'code-bracket',
    description: 'Pembuatan struktur halaman, penataan tampilan responsif, dan interaktivitas komponen modern.',
    items: [
      { name: 'HTML Semantik', percentage: 85 },
      { name: 'CSS Modern', percentage: 80 },
      { name: 'JavaScript', percentage: 65 },
      { name: 'Vue 3 Composition API', percentage: 60 },
      { name: 'Nuxt 4', percentage: 50 },
      { name: 'Tailwind CSS', percentage: 65 }
    ]
  },
  {
    category: 'Backend Development',
    icon: 'server',
    description: 'Pemrograman sisi server dasar, routing logika, dan konsumsi RESTful API.',
    items: [
      { name: 'PHP', percentage: 60 },
      { name: 'Laravel Framework', percentage: 60 },
      { name: 'REST API Integration', percentage: 55 }
    ]
  },
  {
    category: 'Database & Developer Tools',
    icon: 'circle-stack',
    description: 'Pengelolaan basis data relasional serta perkakas pengembangan aplikasi sehari-hari.',
    items: [
      { name: 'MySQL', percentage: 65 },
      { name: 'XAMPP Local Server', percentage: 70 },
      { name: 'HeidiSQL', percentage: 55 },
      { name: 'Visual Studio Code', percentage: 80 },
      { name: 'Git & GitHub', percentage: 50 }
    ]
  },
  {
    category: 'UI/UX & Desain',
    icon: 'swatch',
    description: 'Eksplorasi antarmuka visual, pemilihan skema warna, tipografi, dan pembuatan wireframe/mockup.',
    items: [
      { name: 'Figma', percentage: 65 },
      { name: 'Canva', percentage: 80 },
      { name: 'Wireframe & Mockup', percentage: 65 }
    ]
  },
  {
    category: 'Analisis & Perancangan Sistem',
    icon: 'document-chart-bar',
    description: 'Dokumentasi terstruktur kebutuhan perangkat lunak, aliran data berjenjang, dan relasi entitas.',
    items: [
      { name: 'Draw.io', percentage: 75 },
      { name: 'Data Flow Diagram (DFD Level 0, 1, 2)', percentage: 70 },
      { name: 'Entity Relationship Diagram (ERD)', percentage: 70 },
      { name: 'Use Case Diagram', percentage: 60 },
      { name: 'Activity Diagram', percentage: 60 },
      { name: 'Class Diagram', percentage: 60 }
    ]
  }
]
