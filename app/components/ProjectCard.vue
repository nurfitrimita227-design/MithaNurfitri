<template>
  <div
    class="group bg-[#07172D] border border-[#2583FF]/25 hover:border-[#27D9F5]/50 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-[#2583FF]/10 transition-all duration-300 flex flex-col justify-between"
  >
    <div>
      <!-- Thumbnail Image Container -->
      <div class="relative h-48 sm:h-52 w-full overflow-hidden bg-[#020B1B] border-b border-[#2583FF]/20 cursor-pointer" @click="$emit('select', project)">
        <img
          :src="project.image"
          :alt="project.title"
          class="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        
        <!-- Category & Status Badges -->
        <div class="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none gap-2">
          <span class="px-2.5 py-1 rounded-md text-[11px] font-bold tracking-wide uppercase bg-[#020B1B]/85 backdrop-blur-md text-[#27D9F5] border border-[#2583FF]/40 shadow-sm">
            {{ project.category }}
          </span>
          <span
            :class="[
              'px-2 py-0.5 rounded-md text-[10px] font-semibold backdrop-blur-md border shadow-sm',
              project.status.includes('Selesai')
                ? 'bg-emerald-950/80 text-emerald-300 border-emerald-500/30'
                : 'bg-cyan-950/80 text-[#27D9F5] border-[#27D9F5]/30'
            ]"
          >
            {{ project.status }}
          </span>
        </div>

        <!-- DFD Level Badge Indicator -->
        <div
          v-if="project.diagramTabs"
          class="absolute bottom-2 left-3 bg-[#020B1B]/90 backdrop-blur-md text-[10px] font-semibold text-[#27D9F5] px-2 py-0.5 rounded border border-[#27D9F5]/40"
        >
          Level 0 &bull; Level 1 &bull; Level 2
        </div>
      </div>

      <!-- Content -->
      <div class="p-5 sm:p-6">
        <h3 class="text-lg font-bold text-[#F3F7FF] group-hover:text-[#27D9F5] transition-colors leading-snug">
          {{ project.title }}
        </h3>
        <p class="text-xs text-[#27D9F5] font-medium mt-1 mb-3">
          {{ project.subtitle }}
        </p>

        <p class="text-xs sm:text-sm text-[#A9B8D0] line-clamp-3 leading-relaxed mb-4">
          {{ project.description }}
        </p>

        <!-- Tech tags -->
        <div class="flex flex-wrap gap-1.5 pt-1">
          <span
            v-for="t in project.tech.slice(0, 4)"
            :key="t"
            class="px-2 py-0.5 rounded text-[10px] font-medium bg-[#0B1930] text-[#A9B8D0] border border-white/5"
          >
            {{ t }}
          </span>
          <span
            v-if="project.tech.length > 4"
            class="px-2 py-0.5 rounded text-[10px] font-medium bg-[#0B1930] text-[#27D9F5]"
          >
            +{{ project.tech.length - 4 }}
          </span>
        </div>
      </div>
    </div>

    <!-- Action Button -->
    <div class="px-5 pb-5 pt-2 border-t border-white/5 bg-[#07172D]">
      <button
        type="button"
        class="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#0B1930] hover:bg-gradient-to-r hover:from-[#2583FF] hover:to-[#27D9F5] text-[#F3F7FF] hover:text-[#020B1B] text-xs font-bold border border-[#2583FF]/30 hover:border-transparent transition-all shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#27D9F5]"
        @click="$emit('select', project)"
      >
        <span>Lihat Detail Proyek</span>
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ProjectItem } from '~/data/projects'

defineProps<{
  project: ProjectItem
}>()

defineEmits<{
  (e: 'select', project: ProjectItem): void
}>()
</script>
