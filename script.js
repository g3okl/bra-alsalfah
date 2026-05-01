// قائمة الكلمات بعد التوسيع والتضخيم الشامل (أكثر من 30-40 كلمة لكل قسم)
const baseData = {
    gaming: [
        "ببجي", "فورتنايت", "كول اوف ديوتي", "ماين كرافت", "فيفا", "روبلوكس", "جي تي أي (GTA)", "بلايستيشن", "إكس بوكس", "قيمر", "كيبورد", "سوني", "نينتندو", "ستيم", "فالورانت", "ريد ديد ريدمبشن", "ديسكورد", "تويتش", "اساسنز كريد", "ليق اوف ليجيندز", "اوفر واتش", "سوبر ماريو", "زيلدا", "الدن رينج", "قود اوف وار", "ذا لاست اوف اس", "سايبر بانك", "ريزدنت ايفل", "تيكن", "مورتال كومبات", "امونج اس", "روكيت ليق", "ايبكس ليجندز", "سيمز (The Sims)"
    ],
    anime: [
        "ون بيس", "ناروتو", "هجوم العمالقة", "كونان", "دراغون بول", "قاتل الشياطين", "ديث نوت", "لوفي", "زورو", "هنتر x هنتر", "جوجوتسو كايسن", "بليتش", "طوكيو غول", "فولميتال الخيميائي", "بوكو نو هيرو", "هايكيو", "بلاك كلوفر", "سورد ارت اونلاين", "ون بنش مان", "كود جياس", "نيون جينيسيس", "دراغون كويست", "غوكو", "ميكاسا", "ايتاشي", "كاكاشي", "غوجو", "ليفاي", "سباي فاملي", "دكتور ستون", "جينتاما"
    ],
    food: [
        "شاورما", "برجر", "بيتزا", "منسف", "كبسة", "سوشي", "ورق عنب", "كنافة", "نوتيلا", "ملوخية", "فلافل", "حمص", "متبل", "كباب", "شيش طاووق", "مندي", "مظبي", "مضغوط", "مقلوبة", "مسخن", "بروستد", "اندومي", "باستا", "لازانيا", "كشري", "حواوشي", "محاشي", "تبولة", "فتوش", "عصير مانجو", "قهوة", "شاي", "بان كيك", "وافل", "دونات", "آيس كريم", "كوكيز", "بطاطس مقلية", "ستيك لحم", "سمك مشوي", "روبيان"
    ],
    animals: [
        "أسد", "زرافة", "بطريق", "تمساح", "فيل", "نمر", "دولفين", "ثعلب", "قطة", "كلب", "أرنب", "حصان", "غزال", "صقر", "نسر", "حوت", "قرش", "دب قطبي", "باندا", "قرد", "غوريلا", "كنغر", "نعامة", "طاووس", "سلحفاة", "ضفدع", "عنكبوت", "عقرب", "ثعبان", "بومة"
    ],
    actors: [
        "عادل إمام", "ذا روك", "توم كروز", "ويل سميث", "جاكي شان", "أحمد حلمي", "ناصر القصبي", "ليوناردو دي كابريو", "جوني ديب", "براد بيت", "توم هانكس", "مورغان فريمان", "آل باتشينو", "روبرت دي نيرو", "كيانو ريفز", "جيسون ستاثام", "سيلفستر ستالون", "ارنولد شوارزنيجر", "محمد هنيدي", "احمد السقا", "كريم عبدالعزيز", "عبدالحسين عبدالرضا", "طارق العلي"
    ],
    series: [
        "باب الحارة", "لعبة العروش", "بريكينج باد", "فريندز", "المحقق كونان", "رشاش", "شباب البومب", "طاش ما طاش", "بيكي بلايندرز", "فايكنجز", "سترينجر ثينقز", "لا كاسا دي بابيل", "ذا ووكينج ديد", "ذا بويز", "صراع العروش", "سكويد جيم (لعبة الحبار)", "ذا أوفيس", "مستر بين", "لوست (Lost)", "بريزون بريك"
    ],
    sports: [
        "كرة القدم", "ميسي", "رونالدو", "الهلال", "النصر", "الاتحاد", "ريال مدريد", "برشلونة", "كرة سلة", "ليبرون جيمس", "كوبي براينت", "تنس", "رافاييل نادال", "روجر فيدرر", "ملاكمة", "محمد علي كلاي", "مايك تايسون", "مصارعة حرة", "جون سينا", "اندرتيكر", "مارادونا", "بيليه", "نيمار", "مبابي", "ليفربول", "مانشستر سيتي", "بايرن ميونخ", "سباحة", "فورمولا 1"
    ],
    tech: [
        "آيفون", "تيك توك", "سناب شات", "إنستغرام", "روبوت", "بايثون", "لابتوب", "ذكاء اصطناعي", "جوجل", "يوتيوب", "أبل", "سامسونج", "مايكروسوفت", "تويتر (X)", "فيسبوك", "واتساب", "شات جي بي تي (ChatGPT)", "تيلغرام", "واي فاي", "بلوتوث", "ساعة ذكية", "ايباد", "اندرويد", "هاكر", "برمجة", "سيرفر"
    ],
    places: [
        "المطار", "دبي", "السينما", "المستشفى", "المول", "باريس", "مكة", "البحر", "الحديقة", "المطعم", "لندن", "نيويورك", "طوكيو", "الرياض", "القاهرة", "المدرسة", "الجامعة", "النادي الرياضي", "الملعب", "المكتبة", "المتحف", "البنك", "الفندق", "المسجد", "المحكمة", "محطة القطار"
    ],
    random: [
        "مظلة", "ساعة", "نظارة", "كرسي", "شاحن", "محفظة", "مفتاح", "عطر", "قلم", "ثلاجة", "مكيف", "تلفزيون", "سرير", "سيارة", "طيارة", "سفينة", "دراجة", "كتاب", "دفتر", "مقص", "سكين", "ملعقة", "كوب", "صحن", "خاتم", "حذاء", "حقيبة", "كاميرا", "مايكروفون", "سماعات"
    ]
};

// المتغيرات والبيانات المحلية
let userWords = JSON.parse(localStorage.getItem('salfahUserWords_v4')) || {};
let players = JSON.parse(localStorage.getItem('salfahPlayersScores_v4')) || [];
let spyIndices = [], currentSubject, currentIndex = 0, isShowing = false;
let spyCount = 1, currentSpyGuessIndex = 0, spyResults = [];

// دالة التبديل بين الشاشات
function showScreen(screenId) {
    ['setup', 'game', 'discussion', 'voting', 'spyGuess', 'roundResults'].forEach(id => {
        const el = document.getElementById(id);
        if (el) { el.classList.add('hidden'); el.classList.remove('section-fade'); }
    });
    const target = document.getElementById(screenId);
    if (target) { target.classList.remove('hidden'); setTimeout(() => target.classList.add('section-fade'), 10); }
}

// ---------------- إدارة اللاعبين ----------------
renderPlayers();

function addPlayer() {
    const input = document.getElementById('playerNameInput');
    if (input.value.trim()) {
        players.push({ name: input.value.trim(), score: 0 });
        saveData();
        input.value = "";
        renderPlayers();
    }
}

function renderPlayers() {
    document.getElementById('playerListUI').innerHTML = players.map((p, i) => `
        <div class="player-item">
            <span style="font-size: 1.1rem; font-weight: bold;">${p.name}</span>
            <div style="display:flex; align-items:center; gap:10px;">
                <span class="score-badge">${p.score} ⭐</span>
                <button onclick="removePlayer(${i})" class="btn-danger" style="width: 35px; height: 35px; padding: 0; border-radius: 10px; font-size: 1.2rem;">✖</button>
            </div>
        </div>
    `).join('');
}

function removePlayer(i) { players.splice(i, 1); saveData(); renderPlayers(); }
function clearPlayers() { if(confirm("هل أنت متأكد أنك تريد تصفير النقاط وحذف كل اللاعبين؟")) { players = []; saveData(); renderPlayers(); } }
function saveData() { localStorage.setItem('salfahPlayersScores_v4', JSON.stringify(players)); }


// ---------------- إدارة الكلمات (الإضافة والحذف) ----------------
function addCustomWord() {
    const cat = document.getElementById('categorySelect').value;
    const word = document.getElementById('newWordInput').value.trim();
    if (word) {
        if (!userWords[cat]) userWords[cat] = [];
        // منع التكرار
        if(!userWords[cat].includes(word) && !(baseData[cat] || []).includes(word)) {
            userWords[cat].push(word);
            localStorage.setItem('salfahUserWords_v4', JSON.stringify(userWords));
            document.getElementById('newWordInput').value = "";
            alert("تمت الإضافة بنجاح! ✅");
            renderCustomWordsList();
        } else {
            alert("هذه الكلمة موجودة مسبقاً! ❌");
        }
    }
}

function toggleWordManager() {
    const modal = document.getElementById('wordManagerModal');
    modal.classList.toggle('hidden');
    if (!modal.classList.contains('hidden')) renderCustomWordsList();
}

function renderCustomWordsList() {
    const cat = document.getElementById('categorySelect').value;
    const list = userWords[cat] || [];
    const container = document.getElementById('customWordsListUI');
    if (list.length === 0) {
        container.innerHTML = "<p style='padding: 20px; text-align: center;'>لا توجد كلمات مضافة يدوياً في هذا القسم</p>";
        return;
    }
    container.innerHTML = list.map((word, index) => `
        <div class="word-item">
            <span style="font-weight: bold;">${word}</span>
            <button onclick="deleteCustomWord('${cat}', ${index})" class="btn-danger" style="width:auto; padding: 8px 15px; margin:0; font-size: 0.9rem;">حذف 🗑️</button>
        </div>
    `).join('');
}

function deleteCustomWord(cat, index) {
    if(confirm("متأكد أنك تريد حذف هذه الكلمة؟")) {
        userWords[cat].splice(index, 1);
        localStorage.setItem('salfahUserWords_v4', JSON.stringify(userWords));
        renderCustomWordsList();
    }
}


// ---------------- منطق اللعبة والتنقل ----------------
function startGame() {
    spyCount = parseInt(document.getElementById('spyCountSelect').value);
    if (players.length < spyCount + 2) return alert(`نحتاج عدد لاعبين أكثر! (على الأقل ${spyCount + 2} لاعبين)`);
    
    const cat = document.getElementById('categorySelect').value;
    const fullList = (baseData[cat] || []).concat(userWords[cat] || []);
    currentSubject = fullList[Math.floor(Math.random() * fullList.length)];
    
    spyIndices = [];
    while(spyIndices.length < spyCount) {
        let r = Math.floor(Math.random() * players.length);
        if(!spyIndices.includes(r)) spyIndices.push(r);
    }
    
    currentIndex = 0; 
    spyResults = [];
    showScreen('game'); 
    showTurn();
}

function showTurn() {
    document.getElementById('playerTurnName').innerText = `دور: ${players[currentIndex].name}`;
    const card = document.getElementById('mainCard');
    card.innerText = "اضغط لرؤية السالفة 👀";
    card.style.color = "var(--text)";
    isShowing = false;
}

function toggleCard() {
    const card = document.getElementById('mainCard');
    if (!isShowing) {
        if (spyIndices.includes(currentIndex)) {
            card.innerHTML = "أنت الجاسوس! 🤫<br><span style='font-size: 1rem; color: #fff;'>حاول تعرف السالفة من كلامهم</span>";
            card.style.color = "var(--danger)";
        } else {
            card.innerHTML = `السالفة هي:<br><span style="color: var(--accent); font-size: 2.8rem;">${currentSubject}</span>`;
            card.style.color = "var(--success)";
        }
        isShowing = true;
    } else {
        card.innerText = "تم الإخفاء ✅";
        card.style.color = "#aaa";
        isShowing = false;
    }
}

function nextPlayer() {
    if (currentIndex < players.length - 1) { 
        currentIndex++; 
        showTurn(); 
    } else { 
        showScreen('discussion'); 
        document.getElementById('spyCountInfo').innerHTML = `احذروا.. يوجد <b>${spyCount}</b> جاسوس بينكم! 🕵️‍♂️`;
    }
}


// ---------------- التصويت ----------------
function goToVoting() {
    showScreen('voting');
    document.getElementById('votingUI').innerHTML = players.map((p, i) => `
        <div class="player-item" style="flex-direction:column; align-items:flex-start;">
            <span style="margin-bottom: 8px; color: var(--accent); font-weight: bold;">تصويت [ ${p.name} ]:</span>
            <select id="vote_${i}" style="width:100%; margin: 0; padding: 10px;">
                <option value="" disabled selected>اختر المشتبه به...</option>
                ${players.map((opt, idx) => idx !== i ? `<option value="${idx}">${opt.name}</option>` : '').join('')}
            </select>
        </div>
    `).join('');
}

function submitVotes() {
    // التأكد ان الكل صوت
    for(let i=0; i<players.length; i++) {
        if(!document.getElementById(`vote_${i}`).value) {
            alert(`اللاعب ${players[i].name} لم يصوت!`);
            return;
        }
    }
    currentSpyGuessIndex = 0;
    showSpyGuessingScreen();
}


// ---------------- تخمين الجاسوس ----------------
function showSpyGuessingScreen() {
    showScreen('spyGuess');
    let spyIdx = spyIndices[currentSpyGuessIndex];
    document.getElementById('currentSpyName').innerText = players[spyIdx].name;
    
    const cat = document.getElementById('categorySelect').value;
    const fullList = (baseData[cat] || []).concat(userWords[cat] || []);
    
    // سحب 5 كلمات عشوائية خاطئة + الكلمة الصحيحة
    let wrongOptions = fullList.filter(w => w !== currentSubject).sort(() => 0.5 - Math.random()).slice(0, 5);
    let choices = [currentSubject, ...wrongOptions].sort(() => 0.5 - Math.random());
    
    document.getElementById('spyOptionsUI').innerHTML = choices.map(c => `
        <button class="btn-secondary" style="padding: 15px; font-size: 1.1rem; border-radius: 15px;" onclick="processSpyResult('${c}')">${c}</button>
    `).join('');
}

function processSpyResult(word) {
    let isCorrect = (word === currentSubject);
    spyResults.push({ index: spyIndices[currentSpyGuessIndex], correct: isCorrect });
    
    if(isCorrect) {
        alert("يا لعيب! الجاسوس خمن السالفة صح ✅");
    } else {
        alert(`غلط! الجاسوس ما عرف السالفة ❌ (السالفة كانت: ${currentSubject})`);
    }

    if (currentSpyGuessIndex < spyIndices.length - 1) { 
        currentSpyGuessIndex++; 
        showSpyGuessingScreen(); 
    } else {
        finalizeRound();
    }
}


// ---------------- النتائج والتقييم ----------------
function finalizeRound() {
    let details = `<span style="color: #aaa;">السالفة كانت:</span> <br><b style="color:var(--accent); font-size: 2rem;">${currentSubject}</b><br><hr style="border-color: rgba(255,255,255,0.1); margin: 15px 0;">`;
    
    // حساب النقاط للمواطنين (الغير جواسيس)
    players.forEach((p, i) => {
        if (!spyIndices.includes(i)) {
            let voteVal = parseInt(document.getElementById(`vote_${i}`).value);
            if (spyIndices.includes(voteVal)) {
                p.score += 10; // 10 نقاط للمواطن اللي صاد الجاسوس
            }
        }
    });

    // حساب النقاط للجواسيس
    spyResults.forEach(res => { 
        if (res.correct) {
            players[res.index].score += 30; // الجاسوس اللي يخمن السالفة ياخذ 30 نقطة!
        }
    });

    document.getElementById('roundDetails').innerHTML = details + `الجواسيس كانوا: <b style="color:var(--danger);">${spyIndices.map(i => players[i].name).join(' و ')}</b>`;
    
    updateLeaderboard();
    showScreen('roundResults');
    saveData();
}

function updateLeaderboard() {
    document.getElementById('leaderboardUI').innerHTML = [...players].sort((a,b)=>b.score-a.score).map((p, index) => `
        <div class="player-item" style="${index === 0 ? 'border-color: gold; background: rgba(255,215,0,0.1);' : ''}">
            <span style="font-weight: bold; font-size: 1.2rem;">${index === 0 ? '👑 ' : ''}${p.name}</span>
            <span class="score-badge">${p.score} ⭐</span>
        </div>
    `).join('');
}

function resetGame() { showScreen('setup'); renderPlayers(); }