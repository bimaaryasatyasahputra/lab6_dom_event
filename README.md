# Praktikum 6 --- JavaScript DOM dan Event Handling

**Mata Kuliah:** Pemrograman Web\
**Topik:** JavaScript DOM dan Event Handling\
**Tools:** Visual Studio Code dan browser (Google Chrome)

## A. Tujuan Praktikum

1.  Memahami DOM sebagai representasi dokumen HTML yang dapat diakses
    melalui JavaScript.
2.  Memilih elemen HTML menggunakan ID dan selector CSS.
3.  Mengubah teks, kelas CSS, dan konten elemen melalui JavaScript.
4.  Menangani event pengguna dengan `addEventListener()`.
5.  Membuat validasi form dan menampilkan pesan sesuai kondisi input.
6.  Membuat halaman web yang memiliki beberapa fungsi interaktif.

## B. Dasar Teori

### 1. DOM

DOM (*Document Object Model*) adalah representasi struktur HTML dalam
bentuk objek yang bisa diakses dan diubah menggunakan JavaScript. DOM
dapat digunakan untuk memilih elemen, mengubah teks, menambah elemen,
serta mengubah class CSS.

### 2. Memilih elemen

-   `document.getElementById("judul")` mengambil elemen berdasarkan ID.
-   `document.querySelector(".pesan")` mengambil elemen pertama yang
    cocok dengan selector CSS.
-   `document.querySelectorAll(".item")` mengambil semua elemen yang
    cocok dengan selector CSS.

### 3. Mengubah konten

-   `textContent` digunakan untuk membaca atau mengubah teks biasa.
-   `innerHTML` dapat membaca atau mengubah markup HTML. Hindari
    memasukkan teks pengguna yang tidak dipercaya ke `innerHTML` karena
    dapat menimbulkan risiko keamanan.
-   `classList.toggle()` menambahkan class jika belum ada dan
    menghapusnya jika sudah ada.

### 4. Event handling

`addEventListener()` menghubungkan sebuah event dengan fungsi yang
dijalankan ketika event terjadi.

Contoh event: - `click`: ketika elemen diklik. - `input`: ketika isi
input berubah. - `change`: ketika nilai pilihan berubah. - `submit`:
ketika form dikirim. - `keydown`: ketika tombol keyboard ditekan. -
`mouseover`: ketika pointer berada di atas elemen.

`event.preventDefault()` digunakan untuk mencegah tindakan bawaan
browser. Pada form, ini bisa mencegah halaman dimuat ulang sebelum
validasi selesai.

## C. Struktur Folder

Simpan file sesuai struktur berikut:

``` text
lab6_dom_event/
├── index.html
├── style.css
├── script.js
└── README.md
```

File `index.html` berisi struktur halaman, `style.css` mengatur
tampilan, dan `script.js` berisi fungsi JavaScript.

## D. Latihan 1 --- Mengubah Teks dengan DOM

Contoh kode JavaScript:

``` javascript
const judul = document.getElementById("judul");
const pesan = document.getElementById("pesan");

judul.textContent = "Belajar JavaScript DOM";
pesan.textContent = "Konten berhasil diubah oleh JavaScript.";
```

**Hasil yang diharapkan:** judul dan paragraf berubah setelah halaman
dibuka di browser.

## E. Latihan 2 --- Event Klik dan Menampilkan Waktu

Contoh HTML:

``` html
<h1 id="judul">Latihan DOM</h1>
<p id="pesan">Belum ada tindakan.</p>
<button id="tombolAksi" type="button">Klik Saya</button>
```

Contoh JavaScript:

``` javascript
const tombol = document.getElementById("tombolAksi");
const pesan = document.getElementById("pesan");

tombol.addEventListener("click", function () {
  pesan.textContent = "Tombol diklik pada " + new Date().toLocaleTimeString();
});
```

**Hasil yang diharapkan:** ketika tombol diklik, paragraf menampilkan
waktu saat tombol ditekan.

## F. Latihan 3 --- Mengubah Class dan Tampilan CSS

Contoh CSS:

``` css
.highlight {
  color: #173f75;
  background-color: #e6f1ff;
  border-left: 4px solid #3478c8;
  padding: 12px;
}

.teks-besar {
  font-size: 1.4rem;
}
```

Contoh HTML:

``` html
<p id="teksGaya">Contoh teks yang tampilannya bisa diubah.</p>
<button id="tombolGaya" type="button">Ubah Tampilan</button>
```

Contoh JavaScript:

``` javascript
const tombolGaya = document.getElementById("tombolGaya");
const teksGaya = document.getElementById("teksGaya");

tombolGaya.addEventListener("click", function () {
  teksGaya.classList.toggle("highlight");
  teksGaya.classList.toggle("teks-besar");
});
```

**Hasil yang diharapkan:** ketika tombol diklik, class ditambahkan atau
dihapus sehingga tampilan teks berubah.

## G. Latihan 4 --- Penghitung Karakter Nama

HTML:

``` html
<label for="namaInput">Nama:</label>
<input type="text" id="namaInput" maxlength="40">
<p>Jumlah karakter: <span id="jumlahKarakter">0</span></p>
```

JavaScript:

``` javascript
const namaInput = document.getElementById("namaInput");
const jumlahKarakter = document.getElementById("jumlahKarakter");

namaInput.addEventListener("input", function () {
  jumlahKarakter.textContent = namaInput.value.length;
});
```

**Hasil yang diharapkan:** jumlah karakter berubah langsung ketika
pengguna mengetik, menghapus, atau menempelkan teks. Panjang input
dibatasi maksimal 40 karakter.

## H. Latihan 5 --- Validasi Form Pendaftaran

HTML:

``` html
<form id="formPendaftaran" novalidate>
  <label for="nama">Nama lengkap</label>
  <input id="nama" name="nama" type="text">

  <label for="email">Email</label>
  <input id="email" name="email" type="email">

  <label for="usia">Usia</label>
  <input id="usia" name="usia" type="number" min="17" max="100">

  <button type="submit">Daftar</button>
</form>

<p id="pesanForm" aria-live="polite"></p>
```

JavaScript:

``` javascript
const form = document.getElementById("formPendaftaran");
const pesanForm = document.getElementById("pesanForm");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const nama = document.getElementById("nama").value.trim();
  const email = document.getElementById("email").value.trim();
  const usiaInput = document.getElementById("usia").value;
  const usia = Number(usiaInput);
  const polaEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (nama === "") {
    pesanForm.textContent = "Nama wajib diisi.";
  } else if (!polaEmail.test(email)) {
    pesanForm.textContent = "Masukkan email yang valid.";
  } else if (
    usiaInput === "" ||
    !Number.isInteger(usia) ||
    usia < 17 ||
    usia > 100
  ) {
    pesanForm.textContent = "Usia harus berupa bilangan bulat 17–100.";
  } else {
    pesanForm.textContent = "Validasi berhasil. Form siap diproses.";
    form.reset();
  }
});
```

**Skenario pengujian:**

1.  Semua input dikosongkan.
2.  Nama dikosongkan.
3.  Email diisi dengan format yang tidak valid.
4.  Usia diisi kurang dari 17 atau lebih dari 100.
5.  Semua data diisi dengan benar.

**Hasil yang diharapkan:** pesan kesalahan muncul jika input tidak
sesuai. Jika semua data valid, pesan keberhasilan ditampilkan.

## I. Latihan 6 --- Daftar Tugas (*To-do List*)

HTML:

``` html
<section>
  <h2>Daftar Tugas</h2>
  <label for="inputTugas">Tugas baru</label>
  <input id="inputTugas" type="text">
  <button id="tambahTugas" type="button">Tambah</button>
  <p id="pesanTugas" aria-live="polite"></p>
  <ul id="daftarTugas"></ul>
</section>
```

JavaScript:

``` javascript
const inputTugas = document.getElementById("inputTugas");
const tambahTugas = document.getElementById("tambahTugas");
const daftarTugas = document.getElementById("daftarTugas");
const pesanTugas = document.getElementById("pesanTugas");

tambahTugas.addEventListener("click", function () {
  const teks = inputTugas.value.trim();

  if (teks === "") {
    pesanTugas.textContent = "Tulis tugas terlebih dahulu.";
    return;
  }

  const item = document.createElement("li");
  const label = document.createElement("span");
  const selesai = document.createElement("button");

  label.textContent = teks + " ";
  selesai.type = "button";
  selesai.textContent = "Tandai selesai";

  selesai.addEventListener("click", function () {
    item.classList.toggle("selesai");
    selesai.textContent = item.classList.contains("selesai")
      ? "Batalkan selesai" : "Tandai selesai";
  });

  item.append(label, selesai);
  daftarTugas.appendChild(item);
  inputTugas.value = "";
  pesanTugas.textContent = "Tugas ditambahkan.";
  inputTugas.focus();
});
```

CSS:

``` css
.selesai span {
  text-decoration: line-through;
  color: #687386;
}

li {
  margin-bottom: 8px;
}
```

**Hasil yang diharapkan:** pengguna dapat menambahkan tugas dan menandai
tugas selesai. Tugas kosong tidak ditambahkan. Teks tugas ditampilkan
dengan `textContent`, bukan sebagai HTML.

## J. Mini Project --- Form Pendaftaran Workshop

Mini project menggabungkan beberapa fungsi interaktif: - Validasi nama,
email, dan pilihan sesi. - Penghitung karakter nama secara langsung. -
Pesan kesalahan dan pesan sukses pada halaman. - Tombol reset untuk
mengosongkan input. - Event `input`, `submit`, dan `reset` melalui
`addEventListener()`.

### 1. `index.html`

``` html
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Form Pendaftaran Workshop</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="container">
    <h2>Form Pendaftaran Workshop</h2>
    <p>Silakan isi data untuk mendaftar workshop.</p>

    <form id="formWorkshop">
      <label for="nama">Nama lengkap:</label>
      <input type="text" id="nama" maxlength="40">
      <p class="info">Jumlah karakter: <span id="jumlahKarakter">0</span>/40</p>

      <label for="email">Email:</label>
      <input type="text" id="email">

      <label for="sesi">Pilih sesi workshop:</label>
      <select id="sesi">
        <option value="">-- Pilih sesi --</option>
        <option value="Pagi">Sesi Pagi (09.00)</option>
        <option value="Siang">Sesi Siang (13.00)</option>
        <option value="Sore">Sesi Sore (15.00)</option>
      </select>

      <div class="tombol">
        <button type="submit">Daftar</button>
        <button type="reset" id="tombolReset">Reset</button>
      </div>
    </form>

    <p id="pesan" aria-live="polite"></p>
  </div>

  <script src="script.js"></script>
</body>
</html>
```

### 2. `style.css`

``` css
body {
  font-family: Arial, sans-serif;
  background-color: #f0f4f8;
  margin: 0;
  padding: 30px 15px;
}

.container {
  max-width: 450px;
  margin: auto;
  padding: 25px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 2px 10px #cccccc;
}

h2 {
  text-align: center;
  color: #245580;
}

label {
  display: block;
  margin-top: 15px;
  margin-bottom: 6px;
}

input, select {
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  border: 1px solid #bbbbbb;
  border-radius: 5px;
}

.info {
  font-size: 13px;
  color: #666666;
  margin-top: 5px;
}

.tombol {
  display: flex;
  gap: 10px;
  margin-top: 20px;
}

button {
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background-color: #245580;
  color: white;
}

button:hover {
  opacity: 0.85;
}

#pesan {
  margin-top: 15px;
  font-weight: bold;
  overflow-wrap: anywhere;
}

.sukses {
  color: green;
}

.error {
  color: red;
}
```

### 3. `script.js`

``` javascript
const form = document.getElementById("formWorkshop");
const nama = document.getElementById("nama");
const email = document.getElementById("email");
const sesi = document.getElementById("sesi");
const jumlahKarakter = document.getElementById("jumlahKarakter");
const pesan = document.getElementById("pesan");

nama.addEventListener("input", function () {
  jumlahKarakter.textContent = nama.value.length;
});

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const namaValue = nama.value.trim();
  const emailValue = email.value.trim();
  const polaEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  pesan.className = "";

  if (namaValue === "") {
    pesan.textContent = "Nama wajib diisi.";
    pesan.classList.add("error");
  } else if (!polaEmail.test(emailValue)) {
    pesan.textContent = "Masukkan email yang valid.";
    pesan.classList.add("error");
  } else if (sesi.value === "") {
    pesan.textContent = "Silakan pilih sesi workshop.";
    pesan.classList.add("error");
  } else {
    pesan.textContent =
      "Pendaftaran berhasil! Nama: " + namaValue +
      ", Email: " + emailValue +
      ", Sesi: " + sesi.value;

    pesan.classList.add("sukses");
  }
});

form.addEventListener("reset", function () {
  pesan.textContent = "";
  pesan.className = "";
  jumlahKarakter.textContent = "0";
});
```

## K. Cara Menjalankan Program

1.  Buat folder bernama `lab6_dom_event`.
2.  Buat file `index.html`, `style.css`, dan `script.js`.
3.  Salin kode setiap latihan ke file yang sesuai.
4.  Pastikan nama file dan ID elemen HTML sesuai dengan yang dipanggil
    JavaScript.
5.  Simpan semua file.
6.  Buka `index.html` di browser, atau gunakan ekstensi Live Server di
    VS Code.
7.  Uji setiap tombol, input, validasi, dan pesan yang muncul.

## L. Jawaban Pertanyaan Evaluasi

### 1. Apa yang dimaksud dengan DOM dan apa manfaatnya?

DOM (*Document Object Model*) adalah struktur dokumen HTML yang dapat
diakses dan dimanipulasi menggunakan JavaScript. Manfaatnya untuk
memilih elemen, mengubah teks, mengatur tampilan, dan membuat halaman
web menjadi interaktif.

### 2. Apa perbedaan `getElementById()`, `querySelector()`, dan `querySelectorAll()`?

-   `getElementById()` mengambil elemen berdasarkan ID.
-   `querySelector()` mengambil elemen pertama yang cocok dengan
    selector CSS.
-   `querySelectorAll()` mengambil semua elemen yang cocok dengan
    selector CSS.

### 3. Apa fungsi `addEventListener()` dan sebutkan tiga contoh event?

`addEventListener()` digunakan untuk menjalankan fungsi ketika suatu
event terjadi. Contohnya `click` saat tombol diklik, `input` saat isi
input berubah, dan `submit` saat form dikirim.

### 4. Mengapa `event.preventDefault()` digunakan pada event submit form?

Fungsi ini mencegah tindakan bawaan browser, misalnya halaman dimuat
ulang saat form dikirim. Dengan begitu, JavaScript dapat memeriksa data
dan menampilkan pesan terlebih dahulu.

### 5. Apa perbedaan `textContent` dan `innerHTML` dari sisi penggunaan dan keamanan?

`textContent` digunakan untuk membaca atau mengubah teks biasa.
`innerHTML` dapat membaca atau mengubah markup HTML. Untuk menampilkan
input pengguna, `textContent` lebih aman karena tidak menafsirkan input
tersebut sebagai HTML.

### 6. Bagaimana `classList.toggle()` membantu mengubah tampilan elemen?

`classList.toggle()` menambahkan class jika belum ada dan menghapusnya
jika sudah ada. Dengan cara ini, tampilan elemen bisa diubah, misalnya
memberi warna latar atau mencoret tugas yang sudah selesai.

### 7. Sebutkan minimal tiga skenario pengujian validasi form.

1.  Nama dikosongkan, lalu muncul pesan nama wajib diisi.
2.  Email diisi dengan format yang salah, lalu muncul pesan email tidak
    valid.
3.  Usia diisi kurang dari 17 atau lebih dari 100, lalu muncul pesan
    usia tidak sesuai.
4.  Semua data diisi dengan benar, lalu muncul pesan validasi berhasil.

## M. Eksperimen Mandiri

Beberapa pengembangan yang bisa dicoba: 1. Tambahkan tombol untuk
menghapus satu tugas dari daftar. 2. Ubah validasi agar nama minimal
terdiri dari tiga karakter. 3. Tampilkan sesi workshop yang dipilih
menggunakan event `change`. 4. Buat tombol untuk menyembunyikan dan
menampilkan paragraf. 5. Coba memindahkan script ke bagian `<head>`
tanpa `defer`, lalu amati apakah elemen sudah tersedia saat JavaScript
dijalankan.

## O. Pengumpulan

Sesuai arahan modul:

1.  Buat repository bernama `Lab6Web`.
2.  Masukkan hasil latihan dan mini project.
3.  Ambil screenshot setiap latihan, termasuk kondisi form valid dan
    tidak valid.
4.  Lengkapi `README.md` dengan tujuan, struktur file, cara menjalankan,
    langkah kerja, dan screenshot.
5.  Commit file ke repository.
6.  Kirim URL repository melalui e-learning atau e-campus sesuai arahan
    dosen.

## P. Kesimpulan

Pada praktikum ini, JavaScript digunakan untuk mengakses dan mengubah
elemen HTML melalui DOM, menangani event pengguna, mengubah class CSS,
menghitung karakter, memvalidasi input, dan membuat daftar tugas. Mini
project form pendaftaran workshop menggabungkan validasi data,
penghitung karakter, pesan hasil, dan tombol reset dalam satu halaman
web interaktif.
