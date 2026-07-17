function tombolDiklik() {
    alert("Halo! Terima kasih sudah mengunjungi website saya 😊");
}

// Formulir Kontak
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault(); // Mencegah halaman refresh
    
    const nama = document.getElementById("nama").value;
    const email = document.getElementById("email").value;
    const pesan = document.getElementById("pesan").value;
    
    if (nama && email && pesan) {
        alert("Terima kasih " + nama + "!\nPesan kamu telah terkirim (simulasi).");
        // Reset form
        document.getElementById("contactForm").reset();
    } else {
        alert("Mohon isi semua kolom!");
    }
});