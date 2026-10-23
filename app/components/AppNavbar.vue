<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    :class="[isScrolled ? 'bg-[#020B1B]/90 backdrop-blur-md border-b border-[#2583FF]/20 shadow-lg shadow-black/30 py-3' : 'bg-transparent py-5']"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between">
        <!-- Logo / Brand -->
        <a
          href="#beranda"
          class="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#27D9F5] rounded-lg p-1"
          aria-label="Kembali ke beranda Mita Nurfitri"
        >
          <div
            class="w-10 h-10 rounded-xl bg-gradient-to-br from-[#07172D] to-[#0B1930] border border-[#2583FF]/40 flex items-center justify-center font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#2583FF] to-[#27D9F5] group-hover:border-[#27D9F5] transition-colors shadow-md"
          >
            MN
          </div>
          <div class="flex flex-col text-left">
            <span class="text-base font-bold text-[#F3F7FF] tracking-wide group-hover:text-[#27D9F5] transition-colors">
              Mita Nurfitri
            </span>
            <span class="text-xs text-[#A9B8D0] font-normal hidden sm:block">
              Siswi SMK | Rekayasa Perangkat Lunak
            </span>
          </div>
        </a>

        <!-- Desktop Navigation Links -->
        <nav class="hidden md:flex items-center gap-1 lg:gap-2" aria-label="Navigasi Utama">
          <a
            v-for="item in navItems"
            :key="item.id"
            :href="`#${item.id}`"
            :class="[
              'px-3.5 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#27D9F5]',
              activeSection === item.id
                ? 'text-[#27D9F5] bg-[#07172D] border border-[#2583FF]/30 shadow-sm'
                : 'text-[#A9B8D0] hover:text-[#F3F7FF] hover:bg-[#07172D]/60'
            ]"
            @click="activeSection = item.id"
          >
            {{ item.label }}
          </a>
        </nav>

        <!-- CTA & Mobile Toggle -->
        <div class="flex items-center gap-3">
          <a
            href="#kontak"
            class="hidden sm:inline-flex items-center justify-center px-4 py-2 text-xs font-semibold rounded-lg bg-gradient-to-r from-[#2583FF] to-[#27D9F5] text-[#020B1B] hover:opacity-90 transition-opacity shadow-md shadow-[#2583FF]/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#27D9F5]"
          >
            Hubungi Saya
          </a>

          <!-- Mobile Hamburger Button -->
          <button
            type="button"
            class="md:hidden inline-flex items-center justify-center p-2 rounded-lg text-[#A9B8D0] hover:text-[#F3F7FF] hover:bg-[#07172D] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#27D9F5] border border-[#2583FF]/20"
            :aria-expanded="isMobileMenuOpen"
            aria-controls="mobile-menu"
            aria-label="Buka menu navigasi"
            @click="isMobileMenuOpen = !isMobileMenuOpen"
          >
            <svg
              v-if="!isMobileMenuOpen"
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg
              v-else
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Drawer Menu -->
    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div
        v-if="isMobileMenuOpen"
        id="mobile-menu"
        class="md:hidden bg-[#07172D] border-b border-[#2583FF]/30 px-4 pt-3 pb-5 space-y-1 shadow-2xl"
      >
        <p class="text-[11px] text-[#A9B8D0] px-3 pt-1 pb-2 border-b border-white/5">
          Mita Nurfitri &bull; Siswi SMK Negeri 71 Jakarta (RPL)
        </p>
        <a
          v-for="item in navItems"
          :key="item.id"
          :href="`#${item.id}`"
          :class="[
            'block px-3 py-2.5 rounded-lg text-base font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#27D9F5]',
            activeSection === item.id
              ? 'text-[#27D9F5] bg-[#0B1930] border-l-4 border-[#27D9F5]'
              : 'text-[#A9B8D0] hover:text-[#F3F7FF] hover:bg-[#0B1930]/60'
          ]"
          @click="closeMobileMenu(item.id)"
        >
          {{ item.label }}
        </a>
        <div class="pt-3">
          <a
            href="#kontak"
            class="w-full inline-flex items-center justify-center px-4 py-2.5 text-sm font-semibold rounded-lg bg-gradient-to-r from-[#2583FF] to-[#27D9F5] text-[#020B1B]"
            @click="isMobileMenuOpen = false"
          >
            Hubungi Saya
          </a>
        </div>
      </div>
    </transition>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const navItems = [
  { id: 'beranda', label: 'Beranda' },
  { id: 'tentang', label: 'Tentang' },
  { id: 'hobi', label: 'Hobi' },
  { id: 'skill', label: 'Skill' },
  { id: 'proyek', label: 'Proyek' },
  { id: 'riwayat', label: 'Riwayat' },
  { id: 'kontak', label: 'Kontak' }
]

const activeSection = ref('beranda')
const isMobileMenuOpen = ref(false)
const isScrolled = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20

  const sections = navItems.map(item => document.getElementById(item.id))
  const scrollPos = window.scrollY + 120

  for (let i = sections.length - 1; i >= 0; i--) {
    const sec = sections[i]
    if (sec && sec.offsetTop <= scrollPos) {
      activeSection.value = navItems[i].id
      break
    }
  }
}

const closeMobileMenu = (sectionId: string) => {
  activeSection.value = sectionId
  isMobileMenuOpen.value = false
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
