<template>
  <section id="kontak" class="py-20 lg:py-28 bg-[#020B1B]/80 relative">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto mb-16">
        <span class="inline-block px-3 py-1 rounded-full bg-[#07172D] border border-[#2583FF]/30 text-xs font-semibold uppercase tracking-wider text-[#27D9F5] mb-3">
          Hubungi Saya
        </span>
        <h2 class="text-3xl sm:text-4xl font-extrabold text-[#F3F7FF] tracking-tight">
          Kontak & <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#2583FF] to-[#27D9F5]">Peluang Kolaborasi</span>
        </h2>
        <p class="text-sm sm:text-base text-[#A9B8D0] mt-3">
          Terbuka untuk diskusi pembelajaran, masukan proyek portofolio, dan persiapan Praktik Kerja Lapangan (PKL).
        </p>
        <div class="w-16 h-1 bg-gradient-to-r from-[#2583FF] to-[#27D9F5] mx-auto mt-4 rounded-full" />
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start max-w-5xl mx-auto">
        <!-- Contact Information (5 cols) -->
        <div class="lg:col-span-5 space-y-6">
          <div class="bg-[#07172D] border border-[#2583FF]/25 rounded-2xl p-6 shadow-xl">
            <h3 class="text-lg font-bold text-[#F3F7FF] mb-4">
              Informasi Kontak
            </h3>

            <div class="space-y-4">
              <!-- Email Item with mailto -->
              <div class="flex items-start gap-3.5">
                <div class="w-10 h-10 rounded-xl bg-[#2583FF]/15 border border-[#2583FF]/30 flex items-center justify-center text-[#27D9F5] flex-shrink-0 mt-0.5">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p class="text-xs text-[#A9B8D0]">Email Resmi</p>
                  <a
                    :href="`mailto:${profile.email}`"
                    class="text-sm font-semibold text-[#27D9F5] hover:underline focus:outline-none focus-visible:ring-1 focus-visible:ring-[#27D9F5]"
                  >
                    {{ profile.email }}
                  </a>
                </div>
              </div>

              <!-- Location Item -->
              <div class="flex items-start gap-3.5">
                <div class="w-10 h-10 rounded-xl bg-[#2583FF]/15 border border-[#2583FF]/30 flex items-center justify-center text-[#27D9F5] flex-shrink-0 mt-0.5">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p class="text-xs text-[#A9B8D0]">Domisili</p>
                  <p class="text-sm font-semibold text-[#F3F7FF]">{{ profile.location }}</p>
                </div>
              </div>

              <!-- Instagram Text Only (NO LINK, NON-INTERACTIVE) -->
              <div class="flex items-start gap-3.5 pt-2 border-t border-white/5">
                <div class="w-10 h-10 rounded-xl bg-[#0B1930] border border-white/10 flex items-center justify-center text-[#A9B8D0] flex-shrink-0 mt-0.5">
                  <span class="text-xs font-bold">IG</span>
                </div>
                <div>
                  <p class="text-xs text-[#A9B8D0]">Media Sosial</p>
                  <p class="text-sm font-medium text-[#A9B8D0]">
                    Instagram (Teks Non-Interaktif)
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- Quick Action Card -->
          <div class="bg-gradient-to-br from-[#07172D] to-[#0B1930] border border-[#2583FF]/30 rounded-2xl p-6 shadow-xl">
            <h4 class="text-sm font-bold text-[#F3F7FF] mb-2">
              Kirim Email Langsung
            </h4>
            <p class="text-xs text-[#A9B8D0] leading-relaxed mb-4">
              Untuk respon paling cepat, silakan langsung mengirim pesan melalui aplikasi email Anda.
            </p>
            <a
              :href="`mailto:${profile.email}?subject=Halo%20Mita%20-%20Portofolio%20RPL`"
              class="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#2583FF] to-[#27D9F5] text-[#020B1B] font-bold text-xs shadow-md hover:opacity-95 transition-opacity"
            >
              <span>Buka Email Klien</span>
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>

        <!-- Contact Form (7 cols) -->
        <div class="lg:col-span-7 bg-[#07172D] border border-[#2583FF]/25 rounded-2xl p-6 sm:p-8 shadow-xl">
          <h3 class="text-lg font-bold text-[#F3F7FF] mb-2">
            Formulir Pesan
          </h3>
          <p class="text-xs text-[#A9B8D0] mb-6">
            Kirimkan pertanyaan atau pesan singkat di bawah ini.
          </p>

          <form @submit.prevent="handleSubmit" class="space-y-4">
            <div>
              <label for="name" class="block text-xs font-semibold text-[#F3F7FF] mb-1.5">
                Nama Lengkap <span class="text-rose-400">*</span>
              </label>
              <input
                id="name"
                v-model="formData.name"
                type="text"
                required
                placeholder="Masukkan nama Anda"
                class="w-full px-4 py-2.5 rounded-xl bg-[#020B1B] border border-[#2583FF]/30 text-sm text-[#F3F7FF] placeholder-[#A9B8D0]/50 focus:outline-none focus:border-[#27D9F5] focus:ring-1 focus:ring-[#27D9F5] transition-colors"
              />
            </div>

            <div>
              <label for="email" class="block text-xs font-semibold text-[#F3F7FF] mb-1.5">
                Alamat Email <span class="text-rose-400">*</span>
              </label>
              <input
                id="email"
                v-model="formData.email"
                type="email"
                required
                placeholder="nama@email.com"
                class="w-full px-4 py-2.5 rounded-xl bg-[#020B1B] border border-[#2583FF]/30 text-sm text-[#F3F7FF] placeholder-[#A9B8D0]/50 focus:outline-none focus:border-[#27D9F5] focus:ring-1 focus:ring-[#27D9F5] transition-colors"
              />
            </div>

            <div>
              <label for="subject" class="block text-xs font-semibold text-[#F3F7FF] mb-1.5">
                Subjek Pesan <span class="text-rose-400">*</span>
              </label>
              <input
                id="subject"
                v-model="formData.subject"
                type="text"
                required
                placeholder="Contoh: Diskusi Portofolio / Informasi PKL"
                class="w-full px-4 py-2.5 rounded-xl bg-[#020B1B] border border-[#2583FF]/30 text-sm text-[#F3F7FF] placeholder-[#A9B8D0]/50 focus:outline-none focus:border-[#27D9F5] focus:ring-1 focus:ring-[#27D9F5] transition-colors"
              />
            </div>

            <div>
              <label for="message" class="block text-xs font-semibold text-[#F3F7FF] mb-1.5">
                Isi Pesan <span class="text-rose-400">*</span>
              </label>
              <textarea
                id="message"
                v-model="formData.message"
                rows="4"
                required
                placeholder="Tuliskan pesan Anda..."
                class="w-full px-4 py-2.5 rounded-xl bg-[#020B1B] border border-[#2583FF]/30 text-sm text-[#F3F7FF] placeholder-[#A9B8D0]/50 focus:outline-none focus:border-[#27D9F5] focus:ring-1 focus:ring-[#27D9F5] transition-colors resize-none"
              />
            </div>

            <div v-if="noticeMessage" class="p-3.5 rounded-xl bg-[#0B1930] border border-[#27D9F5]/40 text-xs text-[#27D9F5] leading-relaxed">
              {{ noticeMessage }}
            </div>

            <button
              type="submit"
              class="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#2583FF] to-[#27D9F5] text-[#020B1B] font-bold text-sm shadow-lg shadow-[#2583FF]/20 hover:opacity-95 transition-opacity focus:outline-none focus-visible:ring-2 focus-visible:ring-[#27D9F5]"
            >
              <span>Kirim Pesan (Simulasi Demo)</span>
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </button>

            <!-- Honest Prototype Note -->
            <p class="text-[11px] text-[#A9B8D0] text-center pt-2">
              <span class="text-[#27D9F5] font-semibold">Catatan Keterbukaan:</span> Website statis ini belum terhubung ke server backend pengirim email otomatis. Menekan tombol akan menyiapkan template email untuk dikirim ke <span class="text-[#F3F7FF]">nurfitrimita227@gmail.com</span>.
            </p>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { profileData as profile } from '~/data/profile'

const formData = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const noticeMessage = ref('')

const handleSubmit = () => {
  if (!formData.value.name || !formData.value.email || !formData.value.subject || !formData.value.message) {
    noticeMessage.value = 'Harap lengkapi seluruh kolom formulir wajib sebelum mengirim.'
    return
  }

  // Generate mailto link with encoded parameters to honestly hand off to email client
  const subjectEncoded = encodeURIComponent(`[Portofolio] ${formData.value.subject} - dari ${formData.value.name}`)
  const bodyEncoded = encodeURIComponent(`Nama: ${formData.value.name}\nEmail Pengirim: ${formData.value.email}\n\nPesan:\n${formData.value.message}`)
  
  noticeMessage.value = `Membuka aplikasi email Anda untuk mengirim pesan ke ${profile.email}...`

  // Redirect to mailto safely
  window.location.href = `mailto:${profile.email}?subject=${subjectEncoded}&body=${bodyEncoded}`
}
</script>
