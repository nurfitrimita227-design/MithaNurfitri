<template>
  <div class="relative bg-[#020B1B] text-[#F3F7FF] min-h-screen">
    <!-- Sticky Top Navigation -->
    <AppNavbar />

    <!-- Main Content Landmark -->
    <main id="main-content">
      <HeroSection />
      <AboutSection />
      <HobbiesSection />
      <SkillsSection />
      <ProjectsSection />
      <HistorySection />
      <ContactSection />
    </main>

    <!-- Global Footer -->
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import AppNavbar from '~/components/AppNavbar.vue'
import HeroSection from '~/components/HeroSection.vue'
import AboutSection from '~/components/AboutSection.vue'
import HobbiesSection from '~/components/HobbiesSection.vue'
import SkillsSection from '~/components/SkillsSection.vue'
import ProjectsSection from '~/components/ProjectsSection.vue'
import HistorySection from '~/components/HistorySection.vue'
import ContactSection from '~/components/ContactSection.vue'
import AppFooter from '~/components/AppFooter.vue'

// Set Meta SEO
useHead({
  title: 'Mita Nurfitri | Portofolio RPL',
  meta: [
    {
      name: 'description',
      content:
        'Portofolio resmi Mita Nurfitri - Siswi SMK Negeri 71 Jakarta Jurusan Rekayasa Perangkat Lunak (RPL). Menyajikan proyek aplikasi web, pemodelan sistem (DFD Level 0, 1, 2, ERD, Use Case, Activity, Class Diagram), dan desain antarmuka UI/UX.'
    },
    { property: 'og:title', content: 'Mita Nurfitri | Portofolio RPL' },
    {
      property: 'og:description',
      content:
        'Portofolio siswi RPL SMK Negeri 71 Jakarta - Pembelajaran Web, Database, Analisis Sistem (DFD Level 0-2, ERD, UML), dan Desain UI/UX.'
    },
    { property: 'og:type', content: 'website' }
  ]
})
</script>
