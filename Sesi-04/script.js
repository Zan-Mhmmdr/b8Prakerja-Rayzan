// luas lingkaran
function hitungLuasLingkaran(jariJari) {
    return 22/7 * jariJari * jariJari;
}

// keliling lingkaran
function hitungKelilingLingkaran(jariJari) {
    return 2 * 22/7 * jariJari;
}

// dipanggil saat tombol diklik
function hitung() {
    const jariJariInput = document.getElementById('jariJari').value;
    const jariJari = (jariJariInput);

    if (isNaN(jariJari) || jariJari <= 0) {
        alert('Error: Masukkan angka.');
        return;
    }

    const luas = hitungLuasLingkaran(jariJari);
    const keliling = hitungKelilingLingkaran(jariJari);

    document.getElementById('luas').innerText = 'Luas Lingkaran: ' + luas.toFixed(2);
    document.getElementById('keliling').innerText = 'Keliling Lingkaran: ' + keliling.toFixed(2);
}