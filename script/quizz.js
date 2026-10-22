const quiz = [
  { question: "Dans quel institut Jean-Marie Hullot a-t-il été chercheur ?", options: ["CNRS", "INRIA", "MIT"], correct: 1 },
  { question: "Quel logiciel est à l’origine d’Interface Builder ?", options: ["iCal", "SOS Interface", "Xcode"], correct: 1 },
  { question: "Quelle entreprise Steve Jobs fonde après avoir quitté Apple ?", options: ["Pixar", "NeXT", "Sun Microsystems"], correct: 1 },
  { question: "Quel outil Hullot a-t-il conçu pour créer des interfaces graphiques ?", options: ["Photoshop", "Interface Builder", "Final Cut"], correct: 1 },
  { question: "Quel poste Hullot occupe chez Apple au début des années 2000 ?", options: ["PDG", "Directeur technique des applications", "Responsable marketing"], correct: 1 },
  { question: "Quel logiciel Apple concerne le calendrier ?", options: ["iSync", "iCal", "iCloud"], correct: 1 },
  { question: "À quoi servait iSync ?", options: ["Créer des interfaces", "Synchroniser les appareils", "Éditer des photos"], correct: 1 },
  { question: "Quel appareil révolutionnaire Hullot a aidé à imaginer ?", options: ["iPod", "iPhone", "iPad"], correct: 1 },
  { question: "Quel projet photo collaboratif a-t-il fondé ?", options: ["Flickr", "Fotopedia", "Instagram"], correct: 1 },
  { question: "Quelle fondation a-t-il créée ?", options: ["Fondation Iris", "Greenpeace", "WWF"], correct: 0 }
];

const quizForm = document.getElementById("quiz-form");
const timerEl = document.getElementById("timer");
const scoreLiveEl = document.getElementById("score-live");
const resultat = document.getElementById("resultat");
const progressBar = document.getElementById("progress-bar");

let startTime;
let chronoId;
let quizTermine = false;

function formatTemps(ms) {
  const s = Math.floor(ms / 1000);
  return `${String(Math.floor(s / 60)).padStart(2,"0")}:${String(s % 60).padStart(2,"0")}`;
}

function demarrerChrono() {
  startTime = Date.now();
  chronoId = setInterval(() => {
    if (!quizTermine) {
      timerEl.textContent = "Temps : " + formatTemps(Date.now() - startTime);
    }
  }, 500);
}

function rendreQuiz() {
  quizForm.innerHTML = "";
  quiz.forEach((q, index) => {
    const card = document.createElement("div");
    card.className = "question-card";

    let html = `<p class="question-title"><strong>${index+1}. ${q.question}</strong></p>`;

    q.options.forEach((opt, i) => {
      html += `
        <div class="option" data-q="${index}" data-v="${i}">
          ${opt}
        </div>
      `;
    });

    card.innerHTML = html;
    quizForm.appendChild(card);
  });
}

function calculScore() {
  let score = 0;
  quiz.forEach((q, i) => {
    const choix = document.querySelector(`.option.selected[data-q="${i}"]`);
    if (choix && Number(choix.dataset.v) === q.correct) score++;
  });
  scoreLiveEl.textContent = `Score : ${score}/${quiz.length}`;
  return score;
}

function majProgression() {
  const repondues = document.querySelectorAll(".option.selected").length;
  const pourcentage = Math.min((repondues / quiz.length) * 100, 100);
  progressBar.style.width = pourcentage + "%";
}

quizForm.addEventListener("click", e => {
  if (!e.target.classList.contains("option") || quizTermine) return;

  const q = e.target.dataset.q;
  document.querySelectorAll(`.option[data-q="${q}"]`)
    .forEach(o => o.classList.remove("selected"));

  e.target.classList.add("selected");
  calculScore();
  majProgression();
});

document.getElementById("submit-btn").onclick = e => {
  e.preventDefault();
  quizTermine = true;
  clearInterval(chronoId);

  const score = calculScore();
  resultat.innerHTML = `
    <p><strong>Score final :</strong> ${score}/10</p>
    <p><strong>Temps :</strong> ${formatTemps(Date.now() - startTime)}</p>
  `;
};

document.getElementById("restart-btn").onclick = e => {
  e.preventDefault();
  quizTermine = false;
  resultat.innerHTML = "";
  progressBar.style.width = "0%";
  rendreQuiz();
  calculScore();
  demarrerChrono();
};

rendreQuiz();
calculScore();
demarrerChrono();
