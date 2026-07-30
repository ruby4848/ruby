// Ekranları ve butonları seçiyoruz
const homeScreen = document.getElementById('home-screen');
const topicsScreen = document.getElementById('topics-screen');
const levelButtons = document.querySelectorAll('.level-btn');
const backBtn = document.getElementById('back-btn');
const currentLevelTitle = document.getElementById('current-level-title');
const topicsList = document.getElementById('topics-list');

// Seviye butonlarına tıklama olayı ekliyoruz
levelButtons.forEach(button => {
    button.addEventListener('click', () => {
        const selectedLevel = button.getAttribute('data-level');
        openLevelScreen(selectedLevel);
    });
});

// Geri butonuna tıklama olayı
backBtn.addEventListener('click', () => {
    topicsScreen.classList.remove('active');
    homeScreen.classList.add('active');
    topicsList.innerHTML = ''; // Geri çıkınca listeyi temizle
});

// İlgili seviyenin ekranını açan fonksiyon
function openLevelScreen(level) {
    // Başlığı güncelle
    currentLevelTitle.textContent = `${level} Konuları`;

    // Ekran geçişini yap
    homeScreen.classList.remove('active');
    topicsScreen.classList.add('active');

    // Şimdilik burası boş, senin vereceğin verilerle burayı dolduracak bir sistem kuracağız.
    topicsList.innerHTML = `<p style="text-align: center; margin-top: 2rem; color: #94a3b8;">
        Şu an içerik bekleniyor... <br><br>
        (Senin vereceğin ${level} konuları ve "Karışık" butonu buraya listelenecek.)
    </p>`;
}
