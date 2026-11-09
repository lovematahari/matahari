// =====================================================
//  KONFIGURASI — ubah teks di sini sesukamu
//  (dipakai oleh index.html dan admin.html)
// =====================================================
window.CONFIG = {
  herName: "Matahari",
  signature: "— dari aku, yang selalu sayang kamu",

  // Waktu ucapan muncul otomatis (00:00 WIB tanggal 11 Nov 2026)
  birthday: "2026-11-11T00:00:00+07:00",

  // Seberapa sering halaman dia cek update dari kamu (detik)
  pollSeconds: 15,

  // Jumlah lilin di kue digital
  candles: 5,

  // Rundown. Urutan = urutan yang kamu OK-in di admin.
  // "auto: true" = otomatis kebuka jam 00:00 walau belum kamu OK-in.
  steps: [
    { icon: "🚗", title: "Jemputanmu datang",
      teaser: "Coba tebak ini apaaa",
      desc: "Driver sudah dalam perjalanan. Kamu tinggal duduk manis — dan jangan tanya mau ke mana ya 🤫" },
    { icon: "📍", title: "Sampai di tempat rahasia",
      teaser: "Perjalanan menuju tempat yang sudah aku siapkan…",
      desc: "Selamat datang! Aku sudah nungguin kamu di sini." },
    { icon: "📸", title: "Sesi foto",
      teaser: "Siapkan senyum terbaikmu.",
      desc: "Kita abadikan kamu di hari spesialmu. Kamu cantik banget hari ini." },
    { icon: "💐", title: "Momen apresiasi",
      teaser: "Ada hal yang dari dulu pengen aku bilang…",
      desc: "Sedikit caraku bilang terima kasih sudah jadi kamu, dan sudah memilih aku." },
    { icon: "🍹", title: "Chill sambil minum",
      teaser: "Waktunya santai sebentar.",
      desc: "Duduk, ngobrol, minum pelan-pelan. Malam ini punya kita." },
    { icon: "🍸", title: "Lanjut ke bar",
      teaser: "Malam masih panjang…",
      desc: "Satu tempat lagi sebelum jam dua belas." },
    { icon: "🕛", title: "Tepat tengah malam", auto: true,
      teaser: "Ada sesuatu yang menunggu jam 12 malam.",
      desc: "Ucapan dariku sudah terbuka. Baca pelan-pelan ya ✨" },
    { icon: "🎂", title: "Tiup lilin",
      teaser: "Siapkan permohonanmu.",
      desc: "Make a wish, sayang. Semoga semuanya terkabul." },
    { icon: "🎁", title: "Buka kado",
      teaser: "Yang terakhir, dan yang paling aku tunggu-tunggu.",
      desc: "Semoga kamu suka ya. Aku pilihnya pakai hati." }
  ],

  // Surat yang muncul jam 00:00
  letterGreeting: "Hai Matahari,",
  letter: [
    "Selamat ulang tahun cintaku. Ini tahun pertama melewati hari kelahiran kamu bareng aku. Semoga kebahagiaan selalu menyertaimu, semoga kemudahan segala cita-cita yang kamu semogakan semakin dekat dan segera terwujud.",
    "Tetaplah menjadi baik, penuh dengan cinta dan kasih sayang, tetaplah ceria. Tidak apa-apa juga sih ada sedihnya, karena itu yang bisa bikin kamu jauh lebih kuat. Di samping itu, aku juga selalu berusaha menguatkan dan berada di sebelah kamu.",
    "Aku sangat bahagia bisa bersama kamu, melewati hari-hari bersama orang yang penuh dengan cinta dan keceriaan. Terima kasih sudah hidup di waktu yang sama dengan aku yaa cinta, semoga kamu selalu merasa utuh.",
    "Selamat, berbahagialah di hari ini dan seterusnya. Semoga happy dengan apa yang selalu aku upayakan untuk kamu dan untuk kita. You're really special in my heart!"
  ],
  letterLove: "I love you so much!<br>I love you more than you know, baby.<br>I love you, I love you!",

  wishText: "Semoga semua yang kamu semogakan, satu per satu terwujud.",
  giftMessage: "Kado aslinya sudah ada di depan kamu sekarang. Tapi kado terbesarku tahun ini… ya kamu sendiri. Terima kasih sudah ada. 💗"
};
