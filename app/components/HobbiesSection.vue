<template>
  <section id="hobi" class="py-20 lg:py-28 bg-[#020B1B]/60 relative">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto mb-16">
        <span class="inline-block px-3 py-1 rounded-full bg-[#07172D] border border-[#2583FF]/30 text-xs font-semibold uppercase tracking-wider text-[#27D9F5] mb-3">
          Kreativitas & Minat
        </span>
        <h2 class="text-3xl sm:text-4xl font-extrabold text-[#F3F7FF] tracking-tight">
          Hobi & <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#2583FF] to-[#27D9F5]">Minat Pribadi</span>
        </h2>
        <div class="w-16 h-1 bg-gradient-to-r from-[#2583FF] to-[#27D9F5] mx-auto mt-4 rounded-full" />
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        <!-- Hobi Utama: Menggambar (8 cols) -->
        <div class="lg:col-span-8 bg-gradient-to-br from-[#07172D] to-[#0B1930] border-2 border-[#2583FF]/40 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden flex flex-col justify-between">
          <div class="absolute -right-16 -top-16 w-64 h-64 bg-[#2583FF]/15 rounded-full blur-3xl pointer-events-none" />

          <div>
            <div class="flex items-center justify-between mb-4 flex-wrap gap-2">
              <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#27D9F5]/20 text-[#27D9F5] text-xs font-bold border border-[#27D9F5]/40">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
                Hobi Favorit Utama
              </span>
              <span class="text-xs text-[#A9B8D0]">Seni Visual & Kreativitas</span>
            </div>

            <h3 class="text-2xl sm:text-3xl font-extrabold text-[#F3F7FF] mb-3">
              Menggambar
            </h3>

            <p class="text-base text-[#A9B8D0] leading-relaxed mb-6">
              {{ profile.hobbies.drawing.description }}
            </p>
          </div>

          <!-- Showcase Gallery / Upload Placeholder -->
          <div class="mt-4 pt-6 border-t border-white/10">
            <div class="flex items-center justify-between mb-3">
              <h4 class="text-xs font-bold uppercase tracking-wider text-[#27D9F5]">
                Galeri Karya Ilustrasi / Gambar
              </h4>
              <span class="text-[11px] text-[#A9B8D0]">Folder: public/images/drawing/</span>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <!-- Placeholder Karya 1 -->
              <div class="rounded-2xl border-2 border-dashed border-[#2583FF]/30 bg-[#020B1B]/70 p-6 flex flex-col items-center justify-center text-center min-h-[170px] hover:border-[#27D9F5]/50 transition-colors">
                <div class="w-10 h-10 rounded-full bg-[#2583FF]/15 flex items-center justify-center text-[#27D9F5] mb-2">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <p class="text-xs font-semibold text-[#F3F7FF]">Tambahkan karya gambar di sini</p>
                <p class="text-[11px] text-[#A9B8D0] mt-1">Simpan berkas pada <code class="text-[#27D9F5]">public/images/drawing/</code></p>
              </div>

              <!-- Placeholder Karya 2 -->
              <div class="rounded-2xl border-2 border-dashed border-[#2583FF]/30 bg-[#020B1B]/70 p-6 flex flex-col items-center justify-center text-center min-h-[170px] hover:border-[#27D9F5]/50 transition-colors">
                <div class="w-10 h-10 rounded-full bg-[#2583FF]/15 flex items-center justify-center text-[#27D9F5] mb-2">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                <p class="text-xs font-semibold text-[#F3F7FF]">Sketsa & Ilustrasi Digital</p>
                <p class="text-[11px] text-[#A9B8D0] mt-1">Dapat diunggah sewaktu-waktu</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Hobi Lainnya: Bermain Game (4 cols) -->
        <div class="lg:col-span-4 bg-[#07172D] border border-[#2583FF]/20 rounded-3xl p-6 sm:p-8 shadow-xl flex flex-col justify-between">
          <div>
            <div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0B1930] text-[#A9B8D0] text-xs font-medium border border-white/5 mb-4">
              <span>Hobi Lainnya</span>
            </div>

            <div class="w-12 h-12 rounded-2xl bg-[#2583FF]/15 border border-[#2583FF]/30 flex items-center justify-center text-[#27D9F5] mb-4">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
              </svg>
            </div>

            <h3 class="text-xl sm:text-2xl font-bold text-[#F3F7FF] mb-3">
              Bermain Game
            </h3>

            <p class="text-sm text-[#A9B8D0] leading-relaxed mb-6">
              {{ profile.hobbies.gaming.description }}
            </p>
          </div>

          <div class="bg-[#0B1930] border border-white/5 rounded-2xl p-4">
            <p class="text-xs text-[#27D9F5] font-semibold mb-1">Koneksi dengan Pemrograman</p>
            <p class="text-xs text-[#A9B8D0] leading-relaxed">
              Mengamati bagaimana tata letak UI, logika state permainan, dan respon interaksi pengguna dirancang dalam video game modern.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { profileData as profile } from '~/data/profile'
</script>
