const homeScreen = document.getElementById('home-screen');
const topicsScreen = document.getElementById('topics-screen');
const quizScreen = document.getElementById('quiz-screen');

const levelButtons = document.querySelectorAll('.level-btn');
const backBtn = document.getElementById('back-btn');
const quizBackBtn = document.getElementById('quiz-back-btn');

const currentLevelTitle = document.getElementById('current-level-title');
const topicsList = document.getElementById('topics-list');

// Quiz Elementleri
const questionWord = document.getElementById('question-word');
const optionsGrid = document.getElementById('options-grid');
const nextQuestionBtn = document.getElementById('next-question-btn');
const questionCounter = document.getElementById('question-counter');

let currentQuestions = [];
let currentQuestionIndex = 0;

// Seviye Seçimi
levelButtons.forEach(button => {
    button.addEventListener('click', () => {
        const selectedLevel = button.getAttribute('data-level');
        openLevelScreen(selectedLevel);
    });
});

// Geri Butonları
backBtn.addEventListener('click', () => {
    topicsScreen.classList.remove('active');
    homeScreen.classList.add('active');
});

quizBackBtn.addEventListener('click', () => {
    quizScreen.classList.remove('active');
    topicsScreen.classList.add('active');
});

// Konuları Listeleme
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
                
                // İŞTE DÜZELEN KISIM BURASI (topic.title)
                topicBtn.textContent = topic.title; 
                
                // Konuya Tıklanınca Testi Başlat
                topicBtn.onclick = () => {
                    if(topic.questions && topic.questions.length > 0) {
                        startQuiz(topic.questions);
                    } else {
                        alert("Bu konuya henüz kelime eklenmedi!");
                    }
                };
                
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
    }
}

// Şıkları Karıştırma Algoritması (Fisher-Yates)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Testi Başlatma
function startQuiz(questions) {
    currentQuestions = questions;
    currentQuestionIndex = 0;
    
    topicsScreen.classList.remove('active');
    quizScreen.classList.add('active');
    
    loadQuestion();
}

// Soruyu Ekrana Basma
function loadQuestion() {
    nextQuestionBtn.classList.add('hidden');
    optionsGrid.innerHTML = '';
    
    const currentQ = currentQuestions[currentQuestionIndex];
    
    questionCounter.textContent = `Soru ${currentQuestionIndex + 1} / ${currentQuestions.length}`;
    questionWord.textContent = currentQ.word;
    
    // Doğru ve yanlış şıkları birleştirip KARIŞTIRIYORUZ
    let allOptions = [currentQ.correct, ...currentQ.wrongOptions];
    allOptions = shuffleArray(allOptions);
    
    // Şıkları Ekrana Çizme
    allOptions.forEach(option => {
        const btn = document.createElement('button');
        btn.classList.add('option-btn');
        btn.textContent = option;
        
        btn.onclick = () => checkAnswer(btn, option, currentQ.correct);
        
        optionsGrid.appendChild(btn);
    });
}

// Cevabı Kontrol Etme
function checkAnswer(selectedBtn, selectedAnswer, correctAnswer) {
    const allBtns = document.querySelectorAll('.option-btn');
    
    // Tüm butonları pasif yap (ikinci kez tıklanamasın)
    allBtns.forEach(btn => btn.disabled = true);
    
    if (selectedAnswer === correctAnswer) {
        selectedBtn.classList.add('correct');
    } else {
        selectedBtn.classList.add('wrong');
        // Doğru cevabı bul ve yeşil yap ki öğrenmiş olasın
        allBtns.forEach(btn => {
            if(btn.textContent === correctAnswer) {
                btn.classList.add('correct');
            }
        });
    }
    
    // Sonraki soru butonunu göster (Eğer son soruysa Test Bitti yaz)
    nextQuestionBtn.classList.remove('hidden');
    if (currentQuestionIndex === currentQuestions.length - 1) {
        nextQuestionBtn.textContent = "Testi Bitir";
    } else {
        nextQuestionBtn.textContent = "Sonraki Soru →";
    }
}

// Sonraki Soruya Geçme
nextQuestionBtn.addEventListener('click', () => {
    if (currentQuestionIndex < currentQuestions.length - 1) {
        currentQuestionIndex++;
        loadQuestion();
    } else {
        alert("Tebrikler! Testi bitirdin.");
        quizScreen.classList.remove('active');
        topicsScreen.classList.add('active');
    }
});
