document.getElementById('checkInsight').addEventListener('click', function() {
    const postLink = document.getElementById('postLink').value;
    // Logika untuk mengambil dan menampilkan insight dari link
    fetchInsight(postLink);
});

function fetchInsight(link) {
    // Contoh logika untuk mengambil data insight
    // Ganti dengan API yang sesuai
    const resultSection = document.getElementById('result');
    resultSection.innerHTML = 'Mengambil data...';

    // Simulasi pengambilan data
    setTimeout(() => {
        resultSection.innerHTML = `
            <h2>Insight untuk ${link}</h2>
            <p>Jumlah Like: 150</p>
            <p>Jumlah Komentar: 20</p>
            <p>Jumlah Interaksi: 170</p>
        `;
    }, 2000);
}
