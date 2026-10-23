<template>
  <section id="riwayat" class="py-20 lg:py-28 bg-[#020B1B] relative">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto mb-16">
        <span class="inline-block px-3 py-1 rounded-full bg-[#07172D] border border-[#2583FF]/30 text-xs font-semibold uppercase tracking-wider text-[#27D9F5] mb-3">
          Rekam Jejak
        </span>
        <h2 class="text-3xl sm:text-4xl font-extrabold text-[#F3F7FF] tracking-tight">
          Riwayat Pendidikan & <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#2583FF] to-[#27D9F5]">Pengalaman</span>
        </h2>
        <p class="text-sm sm:text-base text-[#A9B8D0] mt-3">
          Dokumentasi jujur jenjang pendidikan formal, tanggung jawab organisasi, dan capaian pembelajaran RPL.
        </p>
        <div class="w-16 h-1 bg-gradient-to-r from-[#2583FF] to-[#27D9F5] mx-auto mt-4 rounded-full" />
      </div>

      <!-- Navigation Tabs -->
      <div class="flex justify-center mb-12">
        <div class="inline-flex p-1.5 bg-[#07172D] border border-[#2583FF]/30 rounded-2xl gap-1">
          <button
            type="button"
            :class="[
              'px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#27D9F5]',
              activeTab === 'pendidikan'
                ? 'bg-gradient-to-r from-[#2583FF] to-[#27D9F5] text-[#020B1B] shadow-md font-bold'
                : 'text-[#A9B8D0] hover:text-[#F3F7FF]'
            ]"
            @click="activeTab = 'pendidikan'"
          >
            Pendidikan Formal
          </button>
          <button
            type="button"
            :class="[
              'px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#27D9F5]',
              activeTab === 'organisasi'
                ? 'bg-gradient-to-r from-[#2583FF] to-[#27D9F5] text-[#020B1B] shadow-md font-bold'
                : 'text-[#A9B8D0] hover:text-[#F3F7FF]'
            ]"
            @click="activeTab = 'organisasi'"
          >
            Pengalaman Organisasi
          </button>
          <button
            type="button"
            :class="[
              'px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#27D9F5]',
              activeTab === 'pembelajaran'
                ? 'bg-gradient-to-r from-[#2583FF] to-[#27D9F5] text-[#020B1B] shadow-md font-bold'
                : 'text-[#A9B8D0] hover:text-[#F3F7FF]'
            ]"
            @click="activeTab = 'pembelajaran'"
          >
            Pengalaman Belajar
          </button>
        </div>
      </div>

      <!-- Tab Content 1: Pendidikan -->
      <div v-if="activeTab === 'pendidikan'" class="max-w-4xl mx-auto space-y-6">
        <div
          v-for="(edu, idx) in profile.education"
          :key="idx"
          class="bg-[#07172D] border border-[#2583FF]/25 rounded-2xl p-6 sm:p-8 hover:border-[#27D9F5]/40 transition-colors shadow-xl relative overflow-hidden"
        >
          <div class="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
            <div>
              <span
                v-if="edu.current"
                class="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-[#27D9F5]/20 text-[#27D9F5] border border-[#27D9F5]/40 mb-2"
              >
                Pendidikan Aktif
              </span>
              <h3 class="text-xl font-bold text-[#F3F7FF]">
                {{ edu.institution }}
              </h3>
              <p v-if="edu.major" class="text-sm font-semibold text-[#27D9F5]">
                Jurusan {{ edu.major }} &bull; {{ edu.grade }}
              </p>
            </div>
            <span class="inline-flex items-center px-3 py-1 rounded-xl bg-[#0B1930] text-xs font-semibold text-[#A9B8D0] border border-white/5 whitespace-nowrap self-start">
              {{ edu.period }}
            </span>
          </div>

          <p class="text-sm text-[#A9B8D0] leading-relaxed">
            {{ edu.description }}
          </p>
        </div>
      </div>

      <!-- Tab Content 2: Pengalaman Organisasi -->
      <div v-if="activeTab === 'organisasi'" class="max-w-4xl mx-auto space-y-6">
        <div
          v-for="(org, idx) in profile.organizations"
          :key="idx"
          class="bg-[#07172D] border border-[#2583FF]/25 rounded-2xl p-6 sm:p-8 hover:border-[#27D9F5]/40 transition-colors shadow-xl"
        >
          <div class="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
            <div>
              <div class="flex items-center gap-2 mb-1 flex-wrap">
                <span class="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-[#2583FF]/20 text-[#27D9F5] border border-[#2583FF]/40">
                  {{ org.role }}
                </span>
                <span class="text-xs text-[#A9B8D0]">{{ org.period }}</span>
              </div>
              <h3 class="text-xl sm:text-2xl font-bold text-[#F3F7FF]">
                {{ org.name }}
              </h3>
            </div>
          </div>

          <!-- Membership and team meta -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4 bg-[#0B1930] p-4 rounded-xl border border-white/5">
            <div>
              <span class="text-[11px] text-[#A9B8D0] block">Struktur Organisasi</span>
              <span class="text-xs font-semibold text-[#F3F7FF]">{{ org.totalMembers }}</span>
            </div>
            <div>
              <span class="text-[11px] text-[#A9B8D0] block">Peran & Divisi Khusus</span>
              <span class="text-xs font-semibold text-[#27D9F5]">{{ org.teamDetail }}</span>
            </div>
          </div>

          <p class="text-sm text-[#A9B8D0] leading-relaxed mb-4">
            {{ org.description }}
          </p>

          <!-- Key Programs -->
          <div>
            <h4 class="text-xs font-bold uppercase tracking-wider text-[#27D9F5] mb-2">
              Program Kerja Utama
            </h4>
            <ul class="space-y-1.5">
              <li
                v-for="(prog, pIdx) in org.keyPrograms"
                :key="pIdx"
                class="flex items-start gap-2 text-xs sm:text-sm text-[#F3F7FF]"
              >
                <span class="text-[#2583FF] font-bold mt-0.5">&bull;</span>
                <span>{{ prog }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Tab Content 3: Pengalaman Belajar RPL -->
      <div v-if="activeTab === 'pembelajaran'" class="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        <div
          v-for="(exp, idx) in profile.learningExperiences"
          :key="idx"
          class="bg-[#07172D] border border-[#2583FF]/25 rounded-2xl p-6 shadow-xl flex flex-col justify-between"
        >
          <div>
            <span class="text-[11px] font-bold text-[#27D9F5] uppercase tracking-wider">
              {{ exp.category }}
            </span>
            <h3 class="text-lg font-bold text-[#F3F7FF] mt-1 mb-2">
              {{ exp.title }}
            </h3>
            <p class="text-xs sm:text-sm text-[#A9B8D0] leading-relaxed mb-4">
              {{ exp.description }}
            </p>
          </div>

          <div class="flex flex-wrap gap-1.5 pt-3 border-t border-white/5">
            <span
              v-for="tool in exp.tools"
              :key="tool"
              class="px-2.5 py-1 rounded-lg text-[11px] font-semibold bg-[#0B1930] text-[#27D9F5] border border-[#2583FF]/20"
            >
              {{ tool }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { profileData as profile } from '~/data/profile'

const activeTab = ref<'pendidikan' | 'organisasi' | 'pembelajaran'>('pendidikan')
</script>
