<template>
  <teleport to="body">
    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="isOpen && project"
        class="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
        role="dialog"
        aria-modal="true"
        :aria-labelledby="`modal-title-${project.id}`"
        @click.self="close"
      >
        <div class="relative bg-[#07172D] border border-[#2583FF]/40 rounded-3xl max-w-4xl w-full overflow-hidden shadow-2xl my-8">
          <!-- Modal Header -->
          <div class="flex items-center justify-between px-6 py-4 border-b border-[#2583FF]/20 bg-[#0B1930]">
            <div>
              <span class="text-xs font-semibold text-[#27D9F5] uppercase tracking-wider">
                {{ project.category }} &bull; {{ project.status }}
              </span>
              <h3 :id="`modal-title-${project.id}`" class="text-xl sm:text-2xl font-bold text-[#F3F7FF]">
                {{ project.title }}
              </h3>
            </div>
            <button
              type="button"
              class="p-2 rounded-xl text-[#A9B8D0] hover:text-[#F3F7FF] hover:bg-[#020B1B] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#27D9F5]"
              aria-label="Tutup modal"
              @click="close"
            >
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <!-- Modal Body -->
          <div class="p-6 max-h-[75vh] overflow-y-auto space-y-6">
            <!-- DFD Sub-Tabs (If Project has Diagram Tabs like Level 0, 1, 2) -->
            <div v-if="project.diagramTabs && project.diagramTabs.length > 0" class="space-y-4">
              <div class="flex flex-wrap gap-2 p-1 bg-[#020B1B] rounded-xl border border-[#2583FF]/20">
                <button
                  v-for="tab in project.diagramTabs"
                  :key="tab.id"
                  type="button"
                  :class="[
                    'flex-1 min-w-[140px] px-3.5 py-2 rounded-lg text-xs font-semibold transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#27D9F5]',
                    activeTabId === tab.id
                      ? 'bg-gradient-to-r from-[#2583FF] to-[#27D9F5] text-[#020B1B] shadow-md'
                      : 'text-[#A9B8D0] hover:text-[#F3F7FF] hover:bg-[#07172D]'
                  ]"
                  @click="activeTabId = tab.id"
                >
                  {{ tab.label }}
                </button>
              </div>

              <!-- Active Tab Image and Description -->
              <div v-if="currentTab" class="space-y-3">
                <div class="relative rounded-2xl overflow-hidden border border-[#2583FF]/30 bg-[#020B1B] flex items-center justify-center min-h-[300px]">
                  <img
                    :src="currentTab.image"
                    :alt="currentTab.title"
                    class="w-full max-h-[500px] object-contain p-2"
                  />
                </div>
                <div class="bg-[#0B1930] p-4 rounded-xl border border-[#2583FF]/20">
                  <h4 class="text-sm font-bold text-[#27D9F5] mb-1">
                    {{ currentTab.title }}
                  </h4>
                  <p class="text-xs sm:text-sm text-[#A9B8D0] leading-relaxed">
                    {{ currentTab.description }}
                  </p>
                </div>
              </div>
            </div>

            <!-- Single Image Project View -->
            <div v-else class="relative rounded-2xl overflow-hidden border border-[#2583FF]/30 bg-[#020B1B] flex items-center justify-center">
              <img
                :src="project.image"
                :alt="project.title"
                class="w-full max-h-[500px] object-contain p-2"
              />
            </div>

            <!-- Project Details -->
            <div>
              <h4 class="text-sm font-semibold text-[#27D9F5] uppercase tracking-wider mb-2">
                Deskripsi Pekerjaan
              </h4>
              <p class="text-sm sm:text-base text-[#F3F7FF] leading-relaxed">
                {{ project.description }}
              </p>
            </div>

            <!-- Features & Implementation -->
            <div v-if="project.features && project.features.length > 0">
              <h4 class="text-sm font-semibold text-[#27D9F5] uppercase tracking-wider mb-3">
                Fitur / Rincian Komponen Terverifikasi
              </h4>
              <ul class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <li
                  v-for="(feat, idx) in project.features"
                  :key="idx"
                  class="flex items-start gap-2.5 text-xs sm:text-sm text-[#A9B8D0] bg-[#020B1B]/60 p-2.5 rounded-xl border border-white/5"
                >
                  <svg class="w-4 h-4 text-[#27D9F5] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{{ feat }}</span>
                </li>
              </ul>
            </div>

            <!-- Tech / Tools Stack -->
            <div>
              <h4 class="text-sm font-semibold text-[#27D9F5] uppercase tracking-wider mb-2.5">
                Teknologi & Alat yang Digunakan
              </h4>
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="t in project.tech"
                  :key="t"
                  class="px-3 py-1 rounded-lg text-xs font-semibold bg-[#2583FF]/15 text-[#27D9F5] border border-[#2583FF]/30"
                >
                  {{ t }}
                </span>
              </div>
            </div>
          </div>

          <!-- Modal Footer -->
          <div class="px-6 py-4 border-t border-[#2583FF]/20 bg-[#0B1930] flex items-center justify-between">
            <span class="text-xs text-[#A9B8D0]">
              Tugas Pembelajaran Kelas XI RPL
            </span>
            <button
              type="button"
              class="px-4 py-2 rounded-xl text-xs font-semibold bg-[#2583FF] hover:bg-[#27D9F5] hover:text-[#020B1B] text-[#F3F7FF] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#27D9F5]"
              @click="close"
            >
              Tutup Pratinjau
            </button>
          </div>
        </div>
      </div>
    </transition>
  </teleport>
</template>

<script setup lang="ts">
import { ref, computed, watch, onMounted, onUnmounted } from 'vue'
import type { ProjectItem } from '~/data/projects'

const props = defineProps<{
  isOpen: boolean
  project: ProjectItem | null
}>()

const emit = defineEmits<{
  (e: 'close'): void
}>()

const activeTabId = ref('')

watch(
  () => props.project,
  newVal => {
    if (newVal && newVal.diagramTabs && newVal.diagramTabs.length > 0) {
      activeTabId.value = newVal.diagramTabs[0].id
    } else {
      activeTabId.value = ''
    }
  },
  { immediate: true }
)

const currentTab = computed(() => {
  if (!props.project || !props.project.diagramTabs) return null
  return props.project.diagramTabs.find(t => t.id === activeTabId.value) || props.project.diagramTabs[0]
})

const close = () => {
  emit('close')
}

const handleKeydown = (e: KeyboardEvent) => {
  if (e.key === 'Escape' && props.isOpen) {
    close()
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown)
})
</script>
