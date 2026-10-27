
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
