# Untuk Matahari ☀️ — web kejutan ulang tahun

## Isi folder
| File | Fungsi |
|---|---|
| `index.html` | Halaman yang kamu kirim ke dia |
| `admin.html` | Panel rahasia buat kamu nge-OK-in rundown |
| `style.css` | Tampilan (warna, font, balon) |
| `config.js` | Semua teks: rundown, surat, pesan kado, jam ucapan |
| `status.json` | Posisi rundown sekarang (diubah otomatis lewat admin) |

## Cara pasang (±10 menit)
1. **Buat repo** di github.com → New repository → nama bebas yang nggak spoiler (misal `untuk-matahari`) → **Public** → Create.
2. **Upload file**: di repo, klik *Add file → Upload files* → seret semua file (6 file) → *Commit changes*.
3. **Nyalakan GitHub Pages**: *Settings → Pages* → Source: *Deploy from a branch* → Branch: `main` / `(root)` → Save.
   Tunggu 1–2 menit, link-nya jadi: `https://USERNAME.github.io/untuk-matahari/`
4. **Bikin token buat admin**: github.com/settings/personal-access-tokens/new
   - Repository access: *Only select repositories* → pilih repo ini
   - Permissions → Repository → **Contents: Read and write**
   - Expiration: 7 hari aja → Generate → salin tokennya.
5. **Buka admin di HP kamu**: `https://USERNAME.github.io/untuk-matahari/admin.html`
   isi username, nama repo, token → *Hubungkan*. (Cukup sekali, nanti tersimpan di HP itu.)
6. **Tes dulu**: buka `.../index.html?test` — ada tombol buat geser rundown & simulasi jam 00:00.
7. **Kirim link utama** (tanpa `?test`) ke dia.

## Pas hari H
- Ketuk momen di admin → HP dia update sendiri (getar + notif kecil) dalam **±1 menit**
  (GitHub Pages butuh waktu sebentar buat publish).
- Isi nama driver / plat / mobil di admin biar dia tau mobil mana yang jemput.
- Jam **00:00 WIB tanggal 11 November** matahari terbit di layar dia, lalu muncul balon (bisa diketuk biar pecah) dan surat, lanjut tiup lilin (bisa tiup ke mic HP) dan buka kado.
  Halamannya harus lagi kebuka/dibuka setelah jam 12 — kalau dia buka belakangan, suratnya langsung muncul.

## Catatan
- Mau ubah teks/urutan rundown (misal tambah "Check-in hotel 🏨")? Edit `config.js` langsung di GitHub (ikon pensil).
- Kalau sudah sempat ngetes di HP sendiri dan mau lihat amplopnya lagi dari awal: buka `index.html?reset`.
- Spoiler rundown ada di `config.js`. Dia nggak akan lihat kecuali sengaja ngintip kodenya 😉
- Setelah acara, hapus token di github.com/settings/personal-access-tokens.
