<template>
  <section id="proyek" class="py-20 lg:py-28 bg-[#020B1B]/70 relative">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto mb-16">
        <span class="inline-block px-3 py-1 rounded-full bg-[#07172D] border border-[#2583FF]/30 text-xs font-semibold uppercase tracking-wider text-[#27D9F5] mb-3">
          Portofolio Nyata
        </span>
        <h2 class="text-3xl sm:text-4xl font-extrabold text-[#F3F7FF] tracking-tight">
          Proyek dan <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#2583FF] to-[#27D9F5]">Tugas Pembelajaran</span>
        </h2>
        <p class="text-sm sm:text-base text-[#A9B8D0] mt-3">
          Berikut beberapa proyek dan tugas yang saya kerjakan selama belajar Rekayasa Perangkat Lunak.
        </p>
        <div class="w-16 h-1 bg-gradient-to-r from-[#2583FF] to-[#27D9F5] mx-auto mt-4 rounded-full" />
      </div>

      <!-- Category Filter Buttons -->
      <div class="flex flex-wrap items-center justify-center gap-2 mb-12">
        <button
          v-for="filter in filters"
          :key="filter.value"
          type="button"
          :class="[
            'px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#27D9F5]',
            activeFilter === filter.value
              ? 'bg-gradient-to-r from-[#2583FF] to-[#27D9F5] text-[#020B1B] shadow-md shadow-[#2583FF]/20 font-bold'
              : 'bg-[#07172D] text-[#A9B8D0] hover:text-[#F3F7FF] border border-[#2583FF]/20'
          ]"
          @click="activeFilter = filter.value"
        >
          {{ filter.label }} ({{ getCount(filter.value) }})
        </button>
      </div>

      <!-- Projects Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <ProjectCard
          v-for="project in filteredProjects"
          :key="project.id"
          :project="project"
          @select="openProjectModal"
        />
      </div>

      <!-- Empty State Fallback -->
      <div v-if="filteredProjects.length === 0" class="text-center py-16">
        <p class="text-sm text-[#A9B8D0]">Tidak ada proyek untuk kategori ini.</p>
      </div>

      <!-- Informative Note -->
      <div class="mt-14 max-w-2xl mx-auto text-center bg-[#07172D]/50 border border-white/5 rounded-2xl p-4">
        <p class="text-xs text-[#A9B8D0] leading-relaxed">
          Semua proyek di atas bersumber dari hasil tugas nyata kelas XI RPL (diagram pemodelan sistem parkir, aplikasi kasir-frontend Nuxt 3, dan brand Finulipe Patisserie).
        </p>
      </div>
    </div>

    <!-- Modal Component -->
    <ProjectModal
      :is-open="isModalOpen"
      :project="selectedProject"
      @close="closeModal"
    />
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { projectsData, type ProjectItem } from '~/data/projects'
import ProjectCard from '~/components/ProjectCard.vue'
import ProjectModal from '~/components/ProjectModal.vue'

const allProjects = projectsData
const activeFilter = ref('all')
const selectedProject = ref<ProjectItem | null>(null)
const isModalOpen = ref(false)

const filters = [
  { label: 'Semua Proyek', value: 'all' },
  { label: 'Web Application', value: 'Web Application' },
  { label: 'Analisis Sistem', value: 'Analisis Sistem' },
  { label: 'Database', value: 'Database' },
  { label: 'UI/UX Design', value: 'UI/UX Design' }
]

const getCount = (filterValue: string) => {
  if (filterValue === 'all') return allProjects.length
  return allProjects.filter(p => p.category === filterValue).length
}

const filteredProjects = computed(() => {
  if (activeFilter.value === 'all') return allProjects
  return allProjects.filter(p => p.category === activeFilter.value)
})

const openProjectModal = (project: ProjectItem) => {
  selectedProject.value = project
  isModalOpen.value = true
}

const closeModal = () => {
  isModalOpen.value = false
  selectedProject.value = null
}
</script>
