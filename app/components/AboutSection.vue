<template>
  <section id="tentang" class="py-20 lg:py-28 bg-[#020B1B] relative">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto mb-16">
        <span class="inline-block px-3 py-1 rounded-full bg-[#07172D] border border-[#2583FF]/30 text-xs font-semibold uppercase tracking-wider text-[#27D9F5] mb-3">
          Profil Pribadi
        </span>
        <h2 class="text-3xl sm:text-4xl font-extrabold text-[#F3F7FF] tracking-tight">
          Tentang <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#2583FF] to-[#27D9F5]">Saya</span>
        </h2>
        <div class="w-16 h-1 bg-gradient-to-r from-[#2583FF] to-[#27D9F5] mx-auto mt-4 rounded-full" />
      </div>

      <!-- Main Narrative and Characteristics Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        <!-- Narrative Card (7 cols) -->
        <div class="lg:col-span-7 bg-[#07172D] border border-[#2583FF]/25 rounded-2xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
          <div class="absolute top-0 right-0 w-48 h-48 bg-[#2583FF]/10 rounded-full blur-2xl pointer-events-none" />

          <h3 class="text-xl font-bold text-[#F3F7FF] mb-4 flex items-center gap-3">
            <span class="w-2.5 h-2.5 rounded-full bg-[#27D9F5]" />
            Dedikasi Pembelajaran Siswi RPL
          </h3>

          <p class="text-base text-[#A9B8D0] leading-relaxed mb-6">
            {{ profile.aboutNarrative }}
          </p>

          <div class="border-t border-white/10 pt-6 mt-6">
            <h4 class="text-sm font-semibold text-[#27D9F5] uppercase tracking-wider mb-4">
              Karakteristik & Sikap Belajar
            </h4>
            <div class="space-y-3">
              <div
                v-for="(char, index) in profile.characteristics"
                :key="index"
                class="flex items-start gap-3 text-sm text-[#F3F7FF]"
              >
                <div class="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-[#2583FF]/20 border border-[#2583FF]/40 flex items-center justify-center text-[#27D9F5]">
                  <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span>{{ char }}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Quick Summary Cards (5 cols) -->
        <div class="lg:col-span-5 space-y-4">
          <!-- Card Sekolah -->
          <div class="bg-[#0B1930] border border-[#2583FF]/20 rounded-2xl p-5 hover:border-[#27D9F5]/40 transition-colors shadow-lg">
            <div class="flex items-center gap-4">
              <div class="w-12 h-12 rounded-xl bg-[#2583FF]/15 border border-[#2583FF]/30 flex items-center justify-center text-[#27D9F5] flex-shrink-0">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <div>
                <p class="text-xs text-[#A9B8D0]">Instansi Pendidikan</p>
                <p class="text-base font-bold text-[#F3F7FF]">{{ profile.school }}</p>
                <p class="text-xs text-[#27D9F5]">Jurusan {{ profile.major }} &bull; {{ profile.grade }}</p>
              </div>
            </div>
          </div>

          <!-- Card Proyek Nyata -->
          <div class="bg-[#0B1930] border border-[#2583FF]/20 rounded-2xl p-5 hover:border-[#27D9F5]/40 transition-colors shadow-lg">
            <div class="flex items-center gap-4">
              <div class="w-12 h-12 rounded-xl bg-[#27D9F5]/15 border border-[#27D9F5]/30 flex items-center justify-center text-[#27D9F5] flex-shrink-0">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div>
                <p class="text-xs text-[#A9B8D0]">Dokumentasi Pembelajaran</p>
                <p class="text-base font-bold text-[#F3F7FF]">8 Proyek & Tugas Terverifikasi</p>
                <p class="text-xs text-[#27D9F5]">Web, DFD (Level 0, 1, 2), ERD, UML, UI/UX</p>
              </div>
            </div>
          </div>

          <!-- Card Minat Kreatif -->
          <div class="bg-[#0B1930] border border-[#2583FF]/20 rounded-2xl p-5 hover:border-[#27D9F5]/40 transition-colors shadow-lg">
            <div class="flex items-center gap-4">
              <div class="w-12 h-12 rounded-xl bg-[#2583FF]/15 border border-[#2583FF]/30 flex items-center justify-center text-[#27D9F5] flex-shrink-0">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <div>
                <p class="text-xs text-[#A9B8D0]">Minat Kreativitas</p>
                <p class="text-base font-bold text-[#F3F7FF]">Menggambar & UI/UX</p>
                <p class="text-xs text-[#27D9F5]">Kombinasi Logika Kode & Kepekaan Visual</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { profileData as profile } from '~/data/profile'
</script>
