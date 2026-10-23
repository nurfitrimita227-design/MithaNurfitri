<template>
  <section id="skill" class="py-20 lg:py-28 bg-[#020B1B] relative">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto mb-16">
        <span class="inline-block px-3 py-1 rounded-full bg-[#07172D] border border-[#2583FF]/30 text-xs font-semibold uppercase tracking-wider text-[#27D9F5] mb-3">
          Kompetensi Kejuruan
        </span>
        <h2 class="text-3xl sm:text-4xl font-extrabold text-[#F3F7FF] tracking-tight">
          Skill & <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#2583FF] to-[#27D9F5]">Tools</span>
        </h2>
        <p class="text-sm sm:text-base text-[#A9B8D0] mt-3">
          Kemampuan teknis dan pemahaman yang dipelajari selama menempuh jurusan Rekayasa Perangkat Lunak di kelas XI.
        </p>
        <div class="w-16 h-1 bg-gradient-to-r from-[#2583FF] to-[#27D9F5] mx-auto mt-4 rounded-full" />
      </div>

      <!-- Categories Filter / Tabs -->
      <div class="flex flex-wrap items-center justify-center gap-2 mb-10">
        <button
          type="button"
          :class="[
            'px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#27D9F5]',
            activeCategory === 'all'
              ? 'bg-gradient-to-r from-[#2583FF] to-[#27D9F5] text-[#020B1B] shadow-md shadow-[#2583FF]/20'
              : 'bg-[#07172D] text-[#A9B8D0] hover:text-[#F3F7FF] border border-[#2583FF]/20'
          ]"
          @click="activeCategory = 'all'"
        >
          Semua Kategori ({{ categories.length }})
        </button>
        <button
          v-for="cat in categories"
          :key="cat.category"
          type="button"
          :class="[
            'px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#27D9F5]',
            activeCategory === cat.category
              ? 'bg-gradient-to-r from-[#2583FF] to-[#27D9F5] text-[#020B1B] shadow-md shadow-[#2583FF]/20'
              : 'bg-[#07172D] text-[#A9B8D0] hover:text-[#F3F7FF] border border-[#2583FF]/20'
          ]"
          @click="activeCategory = cat.category"
        >
          {{ cat.category }}
        </button>
      </div>

      <!-- Skill Cards Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="cat in filteredCategories"
          :key="cat.category"
          class="bg-[#07172D] border border-[#2583FF]/25 rounded-2xl p-6 shadow-xl flex flex-col justify-between hover:border-[#27D9F5]/40 transition-colors"
        >
          <div>
            <div class="flex items-center gap-3 mb-3">
              <div class="w-9 h-9 rounded-lg bg-[#2583FF]/15 border border-[#2583FF]/30 flex items-center justify-center text-[#27D9F5] flex-shrink-0">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 class="text-base font-bold text-[#F3F7FF]">
                {{ cat.category }}
              </h3>
            </div>

            <p class="text-xs text-[#A9B8D0] mb-6 leading-relaxed">
              {{ cat.description }}
            </p>

            <!-- Skill Items with Progress Bars -->
            <div class="space-y-4">
              <div v-for="item in cat.items" :key="item.name">
                <div class="flex justify-between items-center text-xs mb-1.5">
                  <span class="font-medium text-[#F3F7FF]">{{ item.name }}</span>
                  <span class="font-bold text-[#27D9F5]">{{ item.percentage }}%</span>
                </div>
                <div class="w-full h-2 bg-[#020B1B] rounded-full overflow-hidden border border-white/5">
                  <div
                    class="h-full rounded-full bg-gradient-to-r from-[#2583FF] to-[#27D9F5] transition-all duration-700 ease-out"
                    :style="{ width: `${item.percentage}%` }"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Disclaimer Note -->
      <div class="mt-12 max-w-3xl mx-auto bg-[#07172D]/60 border border-[#2583FF]/20 rounded-xl p-4 text-center">
        <p class="text-xs text-[#A9B8D0] leading-relaxed">
          <strong class="text-[#27D9F5]">Catatan Keterbukaan:</strong> Persentase di atas merupakan perkiraan awal tingkat pemahaman materi selama proses belajar kelas XI Rekayasa Perangkat Lunak di sekolah, bukan penilaian sertifikasi resmi ataupun pengalaman kerja profesional.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { skillsData } from '~/data/skills'

const categories = skillsData
const activeCategory = ref('all')

const filteredCategories = computed(() => {
  if (activeCategory.value === 'all') {
    return categories
  }
  return categories.filter(c => c.category === activeCategory.value)
})
</script>
