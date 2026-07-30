const englishData = {
    "A1": [
        {
            mainTitle: "BÖLÜM 1: TEMEL ATMA (Foundation)",
            subTitle: "Unit 1: Hello, World! / Merhaba Dünya!",
            topics: [
                {
                    title: "1.1 Greetings & Farewells / Selamlaşmalar ve Vedalaşmalar",
                    questions: [
                        { word: "Hello", correct: "Merhaba", wrongOptions: ["Güle güle", "Teşekkürler", "Görüşürüz", "Lütfen"] },
                        { word: "Hi", correct: "Selam", wrongOptions: ["Hoşça kal", "Nasılsın", "İyi geceler", "Rica ederim"] },
                        { word: "Good morning", correct: "Günaydın", wrongOptions: ["İyi akşamlar", "Tünaydın", "İyi geceler", "İyi günler"] },
                        { word: "Good afternoon", correct: "Tünaydın / İyi öğleden sonraları", wrongOptions: ["Günaydın", "İyi geceler", "İyi akşamlar", "Hoş geldin"] },
                        { word: "Good evening", correct: "İyi akşamlar", wrongOptions: ["İyi geceler", "Günaydın", "Tünaydın", "Görüşmek üzere"] },
                        { word: "Good night", correct: "İyi geceler", wrongOptions: ["İyi akşamlar", "Tünaydın", "Günaydın", "Merhaba"] },
                        { word: "Goodbye", correct: "Güle güle / Hoşça kal", wrongOptions: ["Merhaba", "Selam", "Hoş geldin", "Nasılsın"] },
                        { word: "Bye", correct: "Hoşça kal", wrongOptions: ["Lütfen", "Teşekkürler", "Günaydın", "Özür dilerim"] },
                        { word: "See you", correct: "Görüşürüz", wrongOptions: ["Kendine iyi bak", "Merhaba", "İyi şanslar", "Teşekkürler"] },
                        { word: "See you later", correct: "Sonra görüşürüz", wrongOptions: ["Yarın görüşürüz", "Yakında görüşürüz", "Şimdi görüşürüz", "Dün görüşürüz"] },
                        { word: "See you tomorrow", correct: "Yarın görüşürüz", wrongOptions: ["Sonra görüşürüz", "Yakında görüşürüz", "Haftaya görüşürüz", "Birazdan görüşürüz"] },
                        { word: "See you soon", correct: "Yakında görüşürüz", wrongOptions: ["Yarın görüşürüz", "Sonra görüşürüz", "Bugün görüşürüz", "Akşam görüşürüz"] },
                        { word: "Take care", correct: "Kendine iyi bak", wrongOptions: ["Görüşürüz", "Hoşça kal", "İyi günler", "Geçmiş olsun"] },
                        { word: "Have a nice day", correct: "İyi günler", wrongOptions: ["İyi geceler", "İyi akşamlar", "İyi şanslar", "İyi uykular"] },
                        { word: "Welcome", correct: "Hoş geldin / Hoş geldiniz", wrongOptions: ["Güle güle", "Görüşürüz", "Hoş bulduk", "Hoşça kal"] },
                        { word: "How are you?", correct: "Nasılsın? / Nasılsınız?", wrongOptions: ["Adın ne?", "Nerelisin?", "Kaç yaşındasın?", "Ne yapıyorsun?"] },
                        { word: "I am fine", correct: "İyiyim", wrongOptions: ["Kötüyüm", "Hastayım", "Yorgunum", "Mutluyum"] },
                        { word: "Thank you", correct: "Teşekkür ederim", wrongOptions: ["Rica ederim", "Lütfen", "Özür dilerim", "Sorun değil"] },
                        { word: "Thanks", correct: "Teşekkürler", wrongOptions: ["Hoşça kal", "Affedersin", "Lütfen", "Tabi ki"] },
                        { word: "And you?", correct: "Ya sen? / Peki sen?", wrongOptions: ["Ya o?", "Ya onlar?", "Ya biz?", "Sen kimsin?"] },
                        { word: "Please", correct: "Lütfen", wrongOptions: ["Teşekkürler", "Özür dilerim", "Rica ederim", "Affedersiniz"] },
                        { word: "Excuse me", correct: "Affedersiniz / Bakar mısınız?", wrongOptions: ["Teşekkür ederim", "Lütfen", "Rica ederim", "Hoş geldin"] },
                        { word: "I am sorry", correct: "Özür dilerim / Üzgünüm", wrongOptions: ["Teşekkür ederim", "Önemli değil", "Lütfen", "Sorun yok"] },
                        { word: "Nice to meet you", correct: "Tanıştığıma memnun oldum", wrongOptions: ["Seni gördüğüme sevindim", "Nasılsın", "Benim adım...", "Görüşmek üzere"] },
                        { word: "Glad to meet you", correct: "Tanıştığımıza sevindim", wrongOptions: ["Seni özledim", "Hoşça kal", "İyi günler", "Nasılsın"] },
                        { word: "Sir", correct: "Beyefendi / Efendim", wrongOptions: ["Hanımefendi", "Bayan", "Arkadaş", "Çocuk"] },
                        { word: "Madam", correct: "Hanımefendi", wrongOptions: ["Beyefendi", "Bay", "Adam", "Kardeş"] },
                        { word: "Mr. (Mister)", correct: "Bay", wrongOptions: ["Bayan", "Hanım", "Çocuk", "Kız"] },
                        { word: "Mrs. (Missus)", correct: "Bayan (Evli)", wrongOptions: ["Bay", "Bayan (Bekar)", "Beyefendi", "Arkadaş"] },
                        { word: "Miss", correct: "Bayan (Bekar)", wrongOptions: ["Bay", "Bayan (Evli)", "Beyefendi", "Çocuk"] },
                        { word: "What's up?", correct: "Ne haber?", wrongOptions: ["Adın ne?", "Nerelisin?", "Kaç yaşındasın?", "Saat kaç?"] },
                        { word: "Not bad", correct: "Fena değil", wrongOptions: ["Çok iyi", "Çok kötü", "Harika", "Berbat"] },
                        { word: "Very well", correct: "Çok iyi", wrongOptions: ["Kötü", "Fena değil", "İdare eder", "Hasta"] },
                        { word: "Morning", correct: "Sabah", wrongOptions: ["Akşam", "Öğle", "Gece", "Gündüz"] },
                        { word: "Afternoon", correct: "Öğleden sonra", wrongOptions: ["Sabah", "Akşam", "Gece", "Şafak"] },
                        { word: "Evening", correct: "Akşam", wrongOptions: ["Sabah", "Öğle", "Gece", "Gündüz"] },
                        { word: "Night", correct: "Gece", wrongOptions: ["Sabah", "Akşam", "Öğle", "Öğleden sonra"] },
                        { word: "Today", correct: "Bugün", wrongOptions: ["Yarın", "Dün", "Şimdi", "Sonra"] },
                        { word: "Tomorrow", correct: "Yarın", wrongOptions: ["Bugün", "Dün", "Haftaya", "Şimdi"] },
                        { word: "Now", correct: "Şimdi", wrongOptions: ["Sonra", "Önce", "Bugün", "Yarın"] }
                    ]
                },
                { title: "1.2 The Alphabet & Numbers (1-100) / Alfabemiz ve Sayılar", questions: [] },
                { title: "1.3 Subject Pronouns & The Verb 'To Be' (am/is/are) / Şahıs Zamirleri ve 'To Be' (Olmak) Fiili", questions: [] },
                { title: "1.4 Countries & Nationalities / Ülkeler ve Milliyetler", questions: [] },
                { title: "1.5 Personal Information (Name, Age, Job) / Kişisel Bilgiler (İsim, Yaş, Meslek)", questions: [] }
            ]
        }
    ],
    "A2": [],
    "B1": [],
    "B2": []
};
