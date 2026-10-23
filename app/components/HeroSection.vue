<template>
  <section
    id="beranda"
    class="relative min-h-screen flex items-center pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-[#020B1B]"
  >
    <!-- Background Glow Effects -->
    <div class="absolute top-1/4 -left-32 w-96 h-96 bg-[#2583FF]/15 rounded-full blur-3xl pointer-events-none" />
    <div class="absolute bottom-10 -right-32 w-96 h-96 bg-[#27D9F5]/10 rounded-full blur-3xl pointer-events-none" />

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        <!-- Text Column -->
        <div class="lg:col-span-7 text-left space-y-6">
          <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#07172D] border border-[#2583FF]/30 text-xs font-semibold tracking-wide text-[#27D9F5]">
            <span class="w-2 h-2 rounded-full bg-[#27D9F5] animate-ping" />
            <span>Halo, saya</span>
          </div>

          <h1 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#F3F7FF] tracking-tight leading-tight">
            Mita <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#2583FF] to-[#27D9F5]">Nurfitri</span>
          </h1>

          <p class="text-lg sm:text-xl font-medium text-[#27D9F5] flex items-center gap-2">
            <span>Siswi SMK</span>
            <span class="text-[#2583FF]">&bull;</span>
            <span class="text-[#F3F7FF]">Rekayasa Perangkat Lunak</span>
          </p>

          <p class="text-base sm:text-lg text-[#A9B8D0] leading-relaxed max-w-2xl">
            Saya adalah siswi kelas XI jurusan Rekayasa Perangkat Lunak di SMK Negeri 71 Jakarta. Saya sedang belajar mengembangkan website, memahami database, merancang sistem, dan membuat desain antarmuka. Saya senang mengembangkan kemampuan melalui tugas sekolah dan proyek pembelajaran.
          </p>

          <!-- Badges highlight -->
          <div class="flex flex-wrap gap-2.5 pt-2">
            <span class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#07172D]/80 border border-[#2583FF]/20 text-xs text-[#F3F7FF]">
              <svg class="w-4 h-4 text-[#27D9F5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              SMKN 71 Jakarta &bull; Kelas XI
            </span>
            <span class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#07172D]/80 border border-[#2583FF]/20 text-xs text-[#F3F7FF]">
              <svg class="w-4 h-4 text-[#2583FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
              </svg>
              Minat Utama: Menggambar & Desain
            </span>
          </div>

          <!-- CTA Buttons -->
          <div class="flex flex-wrap items-center gap-4 pt-4">
            <a
              href="#proyek"
              class="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#2583FF] to-[#27D9F5] text-[#020B1B] font-bold text-sm tracking-wide shadow-lg shadow-[#2583FF]/25 hover:shadow-[#27D9F5]/40 hover:scale-[1.02] active:scale-[0.98] transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#27D9F5]"
            >
              <span>Lihat Proyek Saya</span>
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </a>

            <a
              href="#kontak"
              class="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#07172D] border border-[#2583FF]/40 text-[#F3F7FF] font-semibold text-sm hover:border-[#27D9F5] hover:bg-[#0B1930] hover:text-[#27D9F5] transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#27D9F5]"
            >
              <span>Hubungi Saya</span>
              <svg class="w-4 h-4 text-[#27D9F5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          </div>
        </div>

        <!-- Photo / Visual Column -->
        <div class="lg:col-span-5 flex justify-center lg:justify-end">
          <div class="relative w-72 sm:w-80 lg:w-96 group">
            <!-- Glow background behind image -->
            <div class="absolute -inset-1.5 bg-gradient-to-tr from-[#2583FF] to-[#27D9F5] rounded-3xl blur-xl opacity-40 group-hover:opacity-60 transition duration-500" />
            
            <!-- Main Photo Container -->
            <div class="relative rounded-3xl overflow-hidden bg-[#07172D] border-2 border-[#2583FF]/30 p-2 shadow-2xl">
              <img
                src="/images/profile/mita-nurfitri.jpg"
                alt="Foto Profil Mita Nurfitri"
                class="w-full h-96 sm:h-[420px] object-cover object-top rounded-2xl transform transition-transform duration-500 group-hover:scale-[1.02]"
                loading="eager"
              />

              <!-- Overlay Card Badge inside image -->
              <div class="absolute bottom-4 left-4 right-4 bg-[#07172D]/90 backdrop-blur-md border border-[#2583FF]/40 p-3 rounded-xl shadow-lg">
                <div class="flex items-center justify-between">
                  <div>
                    <p class="text-xs text-[#27D9F5] font-semibold">Profil Pelajar</p>
                    <p class="text-sm font-bold text-[#F3F7FF]">Mita Nurfitri</p>
                  </div>
                  <span class="px-2.5 py-1 text-[11px] font-medium rounded-full bg-[#2583FF]/20 text-[#27D9F5] border border-[#2583FF]/40">
                    Kelas XI RPL
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Hero Section Component
</script>
