<template>
  <footer class="bg-[#07172D] border-t border-[#2583FF]/20 pt-16 pb-12 text-sm text-[#A9B8D0]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/5 items-start">
        <!-- Brand / Identity (5 cols) -->
        <div class="md:col-span-5 space-y-4">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-[#07172D] to-[#0B1930] border border-[#2583FF]/40 flex items-center justify-center font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#2583FF] to-[#27D9F5] shadow-md">
              MN
            </div>
            <div>
              <span class="text-base font-bold text-[#F3F7FF] block">
                Mita Nurfitri
              </span>
              <span class="text-xs text-[#27D9F5]">
                Siswi SMK Negeri 71 Jakarta &bull; Jurusan RPL
              </span>
            </div>
          </div>

          <p class="text-xs sm:text-sm text-[#A9B8D0] leading-relaxed max-w-sm">
            Portofolio pembelajaran siswa kelas XI Rekayasa Perangkat Lunak. Mendokumentasikan proyek nyata pembuatan aplikasi web, perancangan diagram sistem (DFD Level 0-2, ERD, UML), serta desain antarmuka UI/UX.
          </p>
        </div>

        <!-- Quick Nav (4 cols) -->
        <div class="md:col-span-4 space-y-3">
          <p class="text-xs font-bold text-[#F3F7FF] uppercase tracking-wider">
            Navigasi Cepat
          </p>
          <div class="grid grid-cols-2 gap-2 text-xs">
            <a href="#beranda" class="hover:text-[#27D9F5] transition-colors">Beranda</a>
            <a href="#tentang" class="hover:text-[#27D9F5] transition-colors">Tentang Saya</a>
            <a href="#hobi" class="hover:text-[#27D9F5] transition-colors">Hobi & Minat</a>
            <a href="#skill" class="hover:text-[#27D9F5] transition-colors">Skill & Tools</a>
            <a href="#proyek" class="hover:text-[#27D9F5] transition-colors">Proyek & Tugas</a>
            <a href="#riwayat" class="hover:text-[#27D9F5] transition-colors">Riwayat & Pengalaman</a>
            <a href="#kontak" class="hover:text-[#27D9F5] transition-colors">Hubungi Saya</a>
          </div>
        </div>

        <!-- Contact info (3 cols) -->
        <div class="md:col-span-3 space-y-3 text-xs">
          <p class="text-xs font-bold text-[#F3F7FF] uppercase tracking-wider">
            Hubungi
          </p>
          <p>
            Email:
            <a :href="`mailto:${profile.email}`" class="text-[#27D9F5] hover:underline block font-medium mt-0.5">
              {{ profile.email }}
            </a>
          </p>
          <p class="pt-1">
            Media Sosial:
            <span class="text-[#F3F7FF] block font-medium mt-0.5">Instagram (Teks Non-Interaktif)</span>
          </p>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
        <p class="text-[#A9B8D0]">
          &copy; {{ currentYear }} Mita Nurfitri. Hak Cipta Dilindungi. Portofolio Siswi RPL SMK Negeri 71 Jakarta.
        </p>

        <!-- Back to Top Button -->
        <button
          type="button"
          class="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#0B1930] hover:bg-[#2583FF]/20 text-[#27D9F5] border border-[#2583FF]/30 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#27D9F5]"
          @click="scrollToTop"
        >
          <span>Kembali ke Atas</span>
          <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { profileData as profile } from '~/data/profile'

const currentYear = computed(() => new Date().getFullYear())

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}
</script>
