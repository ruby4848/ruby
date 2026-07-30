const homeScreen = document.getElementById('home-screen');
const topicsScreen = document.getElementById('topics-screen');
const levelButtons = document.querySelectorAll('.level-btn');
const backBtn = document.getElementById('back-btn');
const currentLevelTitle = document.getElementById('current-level-title');
const topicsList = document.getElementById('topics-list');

levelButtons.forEach(button => {
    button.addEventListener('click', () => {
        const selectedLevel = button.getAttribute('data-level');
        openLevelScreen(selectedLevel);
    });
});

backBtn.addEventListener('click', () => {
    topicsScreen.classList.remove('active');
    homeScreen.classList.add('active');
    topicsList.innerHTML = ''; 
});

function openLevelScreen(level) {
    currentLevelTitle.textContent = `${level} Konuları`;
    homeScreen.classList.remove('active');
    topicsScreen.classList.add('active');
    
    topicsList.innerHTML = ''; 

    const levelData = englishData[level];

    if (levelData && levelData.length > 0) {
        levelData.forEach(section => {
            const sectionDiv = document.createElement('div');
            sectionDiv.classList.add('topic-section');

            const mainTitle = document.createElement('h3');
            mainTitle.classList.add('section-main-title');
            mainTitle.textContent = section.mainTitle;
            sectionDiv.appendChild(mainTitle);

            const subTitle = document.createElement('h4');
            subTitle.classList.add('section-sub-title');
            subTitle.textContent = section.subTitle;
            sectionDiv.appendChild(subTitle);

            section.topics.forEach(topic => {
                const topicBtn = document.createElement('button');
                topicBtn.classList.add('topic-btn');
                topicBtn.textContent = topic;
                // Şimdilik tıklayınca uyarı verecek, ileride buraya kelime ekranını bağlayacağız
                topicBtn.onclick = () => alert(`Seçilen Konu: ${topic}\n\nİçerik ekranı bir sonraki aşamada kodlanacak!`);
                sectionDiv.appendChild(topicBtn);
            });

            topicsList.appendChild(sectionDiv);
        });

        // En alta "Karışık" butonu ekleniyor
        const mixedBtn = document.createElement('button');
        mixedBtn.classList.add('topic-btn', 'mixed-btn');
        mixedBtn.innerHTML = '🎲 Karışık (Mixed)';
        mixedBtn.onclick = () => alert(`${level} seviyesi için rastgele Karışık kelime/cümle testi yakında eklenecek!`);
        topicsList.appendChild(mixedBtn);

    } else {
        topicsList.innerHTML = `<p style="text-align: center; color: #94a3b8; margin-top:2rem;">Bu seviye için henüz konu eklenmedi.</p>`;
    }
}
