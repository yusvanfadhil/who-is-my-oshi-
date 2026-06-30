/* ═══════════════════════════════════════════════════════════
   Data Member JKT48 — Weighted Random
════════════════════════════════════════════════════════════ */
var namesWithWeights = [
  // Member Aktif
  { name: "Feni Fitriyanti", weight: 3 },
  { name: "Gita Sekar Andarini", weight: 3 },
  { name: "Freyanashifa Jayawardana", weight: 3 },
  { name: "Angelina Christy", weight: 3 },
  { name: "Helisma Mauludzunia Putri Kurnia", weight: 3 },
  { name: "Jessica Rich Chandra", weight: 3 },
  { name: "Cornelia Syafa Vanisa", weight: 3 },
  { name: "Celline Thefani", weight: 3 },
  { name: "Fiony Alveria Tantri", weight: 3 },
  { name: "Lulu Azkiya Salsabila", weight: 3 },
  { name: "Indah Cahya Nabilla", weight: 3 },
  { name: "Gabriela Abigail Mewengkang", weight: 3 },
  { name: "Kathrina Irene Indarto Putri", weight: 3 },
  { name: "Marsha Lenathea Lapian", weight: 3 },
  { name: "Alya Amanda Fatihah", weight: 3 },
  { name: "Anindya Ramadhani Purnomo", weight: 3 },
  { name: "Cathleen Hana Nixie", weight: 3 },
  { name: "Dena Natalia Ang", weight: 3 },
  { name: "Desy Natalia Ang", weight: 3 },
  { name: "Greesella Sophina Adhalia", weight: 3 },
  { name: "Grace Octaviani Tanujaya", weight: 3 },
  { name: "Michelle Alexandra Suandi", weight: 3 },
  { name: "Cynthia Yaputera", weight: 3 },
  { name: "Chelsea Davina Norman", weight: 3 },
  { name: "Abigail Rachel Lie", weight: 3 },
  { name: "Adeline Wijaya", weight: 3 },
  { name: "Aurhel Alana Tirta", weight: 3 },
  { name: "Catherina Vallencia Kurniawan", weight: 3 },
  { name: "Fritzy Rosmerian", weight: 3 },
  { name: "Hillary Abigail", weight: 3 },
  { name: "Jazzlyn Agatha Trisha", weight: 3 },
  { name: "Michelle Levia Arifin", weight: 3 },
  { name: "Nayla Suji Aurelia", weight: 3 },
  { name: "Nina Tutachia Chapman", weight: 3 },
  { name: "Oline Manuel Chay", weight: 3 },
  { name: "Ribka Budiman", weight: 3 },
  { name: "Shabilqis Naila Bustami", weight: 3 },
  { name: "Victoria Kimberly Lukitama", weight: 3 },
  // Trainee Gen 13
  { name: "Astrella Virgiananda", weight: 3 },
  { name: "Aulia Riza", weight: 3 },
  { name: "Bong Aprilli", weight: 3 },
  { name: "Hagia Sopia", weight: 3 },
  { name: "Humaira Ramadhani", weight: 3 },
  { name: "Jacqueline Immanuela", weight: 3 },
  { name: "Jemima Evodie", weight: 3 },
  { name: "Mikaela Kusjanto", weight: 3 },
  { name: "Nur Intan", weight: 3 },
  // Trainee Gen 14
  { name: "Afera Thalia", weight: 3 },
  { name: "Carissa Dini", weight: 3 },
  { name: "Christabella Bonita", weight: 3 },
  { name: "Fahira Putri", weight: 3 },
  { name: "Fatimah Azzahra", weight: 3 },
  { name: "Heidi Suyangga", weight: 3 },
  { name: "Maxine Faye Lee", weight: 3 },
  { name: "Putry Jazyta", weight: 3 },
  { name: "Ralyne Van Irwan", weight: 3 },
  { name: "Sona Kalyana", weight: 3 }
];

/* ═══════════════════════════════════════════════════════════
   Particle Star Field — Canvas Background
════════════════════════════════════════════════════════════ */
(function initParticles() {
  var canvas = document.getElementById('particleCanvas');
  var ctx = canvas.getContext('2d');
  var particles = [];
  var PARTICLE_COUNT = 55;
  var COLORS = ['192,39,45', '255,107,157', '245,197,24', '255,255,255'];

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  function createParticle() {
    return {
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 2 + 0.5,
      speedX: (Math.random() - 0.5) * 0.25,
      speedY: -Math.random() * 0.35 - 0.08,
      opacity: Math.random() * 0.55 + 0.2,
      pulse: Math.random() * Math.PI * 2,
      color: COLORS[Math.floor(Math.random() * COLORS.length)]
    };
  }

  for (var i = 0; i < PARTICLE_COUNT; i++) {
    particles.push(createParticle());
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (var j = 0; j < particles.length; j++) {
      var p = particles[j];
      p.x += p.speedX;
      p.y += p.speedY;
      p.pulse += 0.018;

      if (p.y < -10) {
        p.y = canvas.height + 10;
        p.x = Math.random() * canvas.width;
      }
      if (p.x < -10) p.x = canvas.width + 10;
      if (p.x > canvas.width + 10) p.x = -10;

      var currentOpacity = p.opacity * (0.55 + 0.45 * Math.sin(p.pulse));

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(' + p.color + ',' + currentOpacity + ')';
      ctx.fill();

      if (p.size > 1.1) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 3.5, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(' + p.color + ',' + (currentOpacity * 0.1) + ')';
        ctx.fill();
      }
    }

    requestAnimationFrame(animate);
  }

  animate();
})();

/* ═══════════════════════════════════════════════════════════
   Toast Notification
════════════════════════════════════════════════════════════ */
var toastEl = document.getElementById('toast');
var toastMsgEl = document.getElementById('toastMsg');
var toastTimer = null;

function showToast(message) {
  toastMsgEl.textContent = message;
  toastEl.classList.add('show');

  if (toastTimer) clearTimeout(toastTimer);
  toastTimer = setTimeout(function () {
    toastEl.classList.remove('show');
  }, 2800);
}

/* ═══════════════════════════════════════════════════════════
   Confetti Burst
════════════════════════════════════════════════════════════ */
function launchConfetti() {
  var container = document.getElementById('confettiBox');
  var confettiColors = ['#c0272d', '#e84550', '#ff6b9d', '#f5c518', '#ffe066', '#ffffff'];
  var TOTAL = 45;

  for (var i = 0; i < TOTAL; i++) {
    var piece = document.createElement('div');
    piece.classList.add('confetti-piece');

    var rand = Math.random();
    if (rand > 0.7) {
      piece.classList.add('circle');
    } else if (rand > 0.5) {
      piece.classList.add('long');
    }

    piece.style.left = (35 + Math.random() * 30) + '%';
    piece.style.top = '-2%';
    piece.style.background = confettiColors[Math.floor(Math.random() * confettiColors.length)];

    var size = Math.random() * 7 + 4;
    piece.style.width = size + 'px';
    piece.style.height = piece.classList.contains('long') ? (size * 2.5) + 'px' : size + 'px';

    var duration = Math.random() * 2 + 1.5;
    var delay = Math.random() * 0.6;
    piece.style.animationDuration = duration + 's';
    piece.style.animationDelay = delay + 's';

    var drift = (Math.random() - 0.5) * 250;
    piece.style.setProperty('--drift', drift + 'px');

    container.appendChild(piece);

    (function (el, dur, del) {
      setTimeout(function () {
        if (el.parentNode) el.parentNode.removeChild(el);
      }, (dur + del) * 1000 + 300);
    })(piece, duration, delay);
  }
}

/* ═══════════════════════════════════════════════════════════
   Escape HTML — Keamanan XSS
════════════════════════════════════════════════════════════ */
function escapeHtml(text) {
  var div = document.createElement('div');
  div.appendChild(document.createTextNode(text));
  return div.innerHTML;
}

/* ═══════════════════════════════════════════════════════════
   NameGenerator Class — Logika Inti
════════════════════════════════════════════════════════════ */
var nameGenerator;

(function () {
  /* Timer untuk auto-clear hasil */
  var clearTimer = null;

  function NameGenerator(data) {
    this.namesWithWeights = data;
    this.usedNames = new Set();
    this.nameMap = new Map();
  }

  NameGenerator.prototype.handleButtonClick = function (nameInputElement, nameDisplayElement) {
    var nameInput = nameInputElement.value.trim();
    this.displayName(nameInput, nameDisplayElement);
  };

  NameGenerator.prototype.displayName = function (nameInput, nameDisplayElement) {
    /* Bersihkan timer sebelumnya jika ada */
    if (clearTimer) {
      clearTimeout(clearTimer);
      clearTimer = null;
    }

    var randomName;

    /* Special case: yusvan */
    if (nameInput.toLowerCase() === "yusvan") {
      var specialNames = [
        { name: "Fiony Alveria Tantri", weight: 20 },
        { name: "Freyanashifa Jayawardana", weight: 5 },
        { name: "Catherina Vallencia Kurniawan", weight: 30 },
        { name: "Astrella Virgiananda", weight: 30 }
      ];
      var totalWeight = specialNames.reduce(function (sum, item) { return sum + item.weight; }, 0);
      var random = Math.random() * totalWeight;
      for (var s = 0; s < specialNames.length; s++) {
        if (random < specialNames[s].weight) {
          randomName = specialNames[s].name;
          break;
        }
        random -= specialNames[s].weight;
      }
      if (!randomName) randomName = specialNames[0].name;
    } else {
      randomName = this.getRandomName();
    }

    if (randomName) {
      this.usedNames.add(nameInput.toLowerCase());
      this.nameMap.set(nameInput, randomName);
      this.showName(randomName, nameDisplayElement);
    }
  };

  NameGenerator.prototype.getRandomName = function () {
    var totalWeight = this.namesWithWeights.reduce(function (sum, item) { return sum + item.weight; }, 0);
    var random = Math.random() * totalWeight;
    for (var i = 0; i < this.namesWithWeights.length; i++) {
      if (random < this.namesWithWeights[i].weight) {
        return this.namesWithWeights[i].name;
      }
      random -= this.namesWithWeights[i].weight;
    }
    return this.namesWithWeights[0].name;
  };

  NameGenerator.prototype.showName = function (randomName, nameDisplayElement) {
    var resultHint = document.getElementById('resultHint');
    var resultArea = document.getElementById('resultArea');

    /* Render nama dengan gradient text + heartbeat */
    nameDisplayElement.innerHTML =
      '<span class="oshi-text">' + escapeHtml(randomName) + '</span>' +
      '<span class="result-heart"><i class="fa-solid fa-heart"></i></span>';

    /* Burst animation */
    nameDisplayElement.classList.remove('burst-effect', 'fade-out-effect');
    void nameDisplayElement.offsetWidth;
    nameDisplayElement.classList.add('burst-effect');

    /* Tampilkan result area */
    resultArea.classList.add('active');

    /* Tampilkan hint */
    resultHint.textContent = 'Hasil akan hilang dalam 5 detik...';
    resultHint.classList.add('visible');

    /* Confetti */
    launchConfetti();

    /* Auto-clear setelah 5 detik */
    clearTimer = setTimeout(function () {
      nameDisplayElement.classList.remove('burst-effect');
      nameDisplayElement.classList.add('fade-out-effect');

      resultHint.classList.remove('visible');

      setTimeout(function () {
        nameDisplayElement.innerHTML = '';
        nameDisplayElement.classList.remove('fade-out-effect');
        resultArea.classList.remove('active');
        resultHint.textContent = '';
        clearTimer = null;
      }, 800);
    }, 5000);
  };

  NameGenerator.prototype.resetNames = function () {
    /* Bersihkan timer auto-clear */
    if (clearTimer) {
      clearTimeout(clearTimer);
      clearTimer = null;
    }

    this.usedNames.clear();
    this.nameMap.clear();

    var nameDisplay = document.getElementById('nameDisplay');
    var resultHint = document.getElementById('resultHint');
    var resultArea = document.getElementById('resultArea');
    var nameInput = document.getElementById('nameInput');

    /* Fade out lalu bersihkan */
    nameDisplay.classList.remove('burst-effect');
    nameDisplay.classList.add('fade-out-effect');
    resultHint.classList.remove('visible');

    setTimeout(function () {
      nameDisplay.innerHTML = '';
      nameDisplay.classList.remove('fade-out-effect');
      resultHint.textContent = '';
      resultArea.classList.remove('active');
    }, 800);

    /* Reset input */
    nameInput.value = '';
    nameInput.focus();

    showToast('Data sudah direset!');
  };

  /* Inisialisasi */
  nameGenerator = new NameGenerator(namesWithWeights);
})();

/* ═══════════════════════════════════════════════════════════
   Event Listeners
════════════════════════════════════════════════════════════ */
var nameInput = document.getElementById('nameInput');
var submitBtn = document.getElementById('submitBtn');
var resetBtn = document.getElementById('resetButton');

/* Klik tombol submit */
submitBtn.addEventListener('click', function () {
  var name = nameInput.value.trim();

  if (!name) {
    showToast('Tulis namamu dulu yuk!');
    nameInput.focus();

    nameInput.classList.remove('shake');
    void nameInput.offsetWidth;
    nameInput.classList.add('shake');

    setTimeout(function () {
      nameInput.classList.remove('shake');
    }, 500);
    return;
  }

  var nameDisplay = document.getElementById('nameDisplay');
  nameGenerator.handleButtonClick(nameInput, nameDisplay);
});

/* Tekan Enter di input */
nameInput.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') {
    var name = nameInput.value.trim();

    if (!name) {
      showToast('Tulis namamu dulu yuk!');
      nameInput.focus();

      nameInput.classList.remove('shake');
      void nameInput.offsetWidth;
      nameInput.classList.add('shake');

      setTimeout(function () {
        nameInput.classList.remove('shake');
      }, 500);
      return;
    }

    var nameDisplay = document.getElementById('nameDisplay');
    nameGenerator.handleButtonClick(nameInput, nameDisplay);
  }
});

/* Klik tombol reset */
resetBtn.addEventListener('click', function () {
  nameGenerator.resetNames();
});