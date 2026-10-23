# Portofolio Pribadi — Mita Nurfitri (Siswi Rekayasa Perangkat Lunak)

Website portofolio pribadi modern, profesional, dan responsif untuk mendokumentasikan hasil belajar kelas XI jurusan **Rekayasa Perangkat Lunak (RPL)** di **SMK Negeri 71 Jakarta**. Dibuat menggunakan **Nuxt 4**, **Vue 3 Composition API**, dan **Tailwind CSS**.

---

## 📌 Identitas Pemilik Portofolio
- **Nama:** Mita Nurfitri
- **Sekolah:** SMK Negeri 71 Jakarta
- **Jurusan:** Rekayasa Perangkat Lunak (RPL)
- **Tingkat:** Kelas XI
- **Sekolah Sebelumnya:** SMPN 139 Jakarta
- **Email:** `nurfitrimita227@gmail.com`
- **Minat & Hobi Utama:** Menggambar (seni visual, tata letak antarmuka, eksplorasi estetika)
- **Hobi Lainnya:** Bermain game (mengamati UI/UX dan interaksi interaktif)

---

## 🏛️ Pengalaman Organisasi
1. **OSIS SMK Negeri 71 Jakarta (Periode 2024 - 2025)**
   - **Peran:** Anggota Seksi Bidang (Sekbid) Seni Budaya dan Olahraga (5 anggota).
   - **Struktur:** Total 40 anggota OSIS dan 30 anggota MPK.
   - **Program Kerja Unggulan:** Menaungi dan mengoordinasikan seluruh kegiatan ekstrakurikuler sekolah serta mengelola penerbitan **Mading (Majalah Dinding)** sekolah.
2. **Organisasi Pengajian ISYAD**
   - **Peran:** Bendahara (2 orang bendahara).
   - **Struktur:** 20 anggota.
   - **Program Kerja Unggulan:** Pengelolaan uang kas rutin dan pencatatan keuangan acara/event keagamaan di pengajian ISYAD.

---

## 📁 8 Proyek dan Tugas Pembelajaran Nyata
Portofolio ini hanya menampilkan tugas dan proyek yang benar-benar dikerjakan selama pembelajaran kelas XI:
1. **POS Kasir — kasir-frontend** (Nuxt 3, Vue 3, Laravel REST API, MySQL) — Aplikasi Point of Sale kasir dengan katalog produk, CRUD stok barang, dan transaksi struk.
2. **Data Flow Diagram (DFD) — Sistem Parkir (Level 0, 1, 2)**:
   - **DFD Level 0 (Diagram Konteks):** Memodelkan aliran data global sistem parkir dengan entitas Pengendara, Petugas, dan Pimpinan.
   - **DFD Level 1 (Dekomposisi):** Dekomposisi 3 proses utama (1.1 Parkir Masuk, 2.1 Parkir Keluar & Pembayaran, 3.1 Pembuatan Laporan) dengan Data Store D1 Parkir & D2 Pembayaran.
   - **DFD Level 2 (Proses 2):** Rincian proses 2 (2.2.1 Scan & Cek data parkir, 2.2.2 Hitung biaya parkir, 2.2.3 Transaksi pembayaran).
3. **Entity Relationship Diagram (ERD) — Sistem Parkir** (Draw.io) — Perancangan relasi basis data entitas Pengendara, Parkir, Pembayaran, Petugas, dan Admin.
4. **Use Case Diagram — Sistem Parkir** (Draw.io) — Dokumentasi relasi interaksi 4 aktor dengan fungsionalitas sistem parkir.
5. **Activity Diagram — Sistem Parkir** (Draw.io) — Alur alur aktivitas parkir masuk, keluar, penanganan karcis hilang, dan member.
6. **Class Diagram — Sistem Parkir** (Draw.io) — Perancangan struktur OOP (atribut, visibilitas, tipe data, dan metode).
7. **UI/UX Design — Finulipe Patisserie** (Figma) — Desain grand design landing page web dan antarmuka aplikasi mobile toko roti.
8. **Website Toko Roti — Finulipe Patisserie** (Vue 3, Tailwind CSS) — Implementasi antarmuka website brand toko roti dengan nuansa pastry hangat.

---

## 🛠️ Teknologi yang Digunakan
- **Framework Frontend:** Nuxt 4 & Vue 3 Composition API
- **Styling:** Tailwind CSS & PostCSS
- **Bahasa:** TypeScript & JavaScript
- **Lingkungan Kerja Lokal:** Laragon di Windows, Node.js (v22.x), npm
- **Version Control:** Git

### Palet Warna Desain
- Background Utama: `#020B1B`
- Background Kartu: `#07172D` / `#0B1930`
- Biru Utama: `#2583FF`
- Cyan Aksen: `#27D9F5`
- Teks Utama: `#F3F7FF`
- Teks Sekunder: `#A9B8D0`

---

## 🚀 Panduan Menjalankan Proyek Secara Lokal

### Prasyarat
- Node.js (disarankan Node.js v18 atau v20+)
- npm terpasang
- Laragon (opsional, untuk root web server Windows)

### Langkah Menjalankan
1. Buka terminal pada folder proyek:
   ```bash
   cd C:\laragon\www\Portofolio
   ```
2. Pastikan dependensi sudah terpasang:
   ```bash
   npm install
   ```
3. Jalankan development server:
   ```bash
   npm run dev
   ```
4. Buka browser pada alamat lokal:
   ```
   http://localhost:3000/
   ```

### Langkah Build untuk Produksi
```bash
npm run build
```
Untuk static generation (misalnya persiapan GitHub Pages):
```bash
npm run generate
```

---

## 🎨 Menambahkan Karya Gambar Baru
Jika ingin menampilkan hasil gambar baru pada section Hobi:
1. Simpan gambar berformat `.jpg` atau `.png` ke dalam folder:
   `public/images/drawing/`
2. Hubungkan nama berkas pada komponen `app/components/HobbiesSection.vue`.

---

## 📄 Kebijakan Informasi & Transparansi
- Proyek ini tidak memuat proyek fiktif atau proyek luar seperti GoPay.
- Akun Instagram ditampilkan sebagai teks biasa tanpa tautan URL luar.
- Email resmi terhubung menggunakan tautan `mailto:nurfitrimita227@gmail.com`.
- Formulir kontak bersifat demonstrasi antarmuka (client-side) dan mengarahkan pengguna secara aman ke aplikasi email lokal.
