const questions = [
  {
    id: "start",
    text: "Gibt’s bei euch eine aktive R/R-Runde im Stamm?",
    options: [
      { text: "Ja, voll!", next: "rr_programm" },
      { text: "Ne, eigentlich nicht…", next: "allein_oder_mehrere" }
    ]
  },
  {
    id: "rr_programm",
    text: "Trefft ihr euch regelmäßig nur als Runde, mit richtigem Programm für euch?",
    options: [
      { text: "Klar – aber neue Ideen wären cool!", result: "Dann komm zum KfR/R – frischer Wind für deine Runde!" },
      { text: "Eher nicht – wir machen meistens Orga-Kram.", result: "KfR/R ist genau richtig für euch – holt euch coole Programmideen!" }
    ]
  },
  {
    id: "allein_oder_mehrere",
    text: "Bist du alleine im Stamm oder gibt’s noch andere in deinem Alter?",
    options: [
      { text: "Ich bin (noch) allein unterwegs", result: "Dann ist der KfR/R genau dein Ding – lern andere RRs kennen und bring die Stufe in Schwung!" },
      { text: "Wir sind mehrere, aber machen nicht viel", next: "kennt_ihr_rr" }
    ]
  },
  {
    id: "kennt_ihr_rr",
    text: "Wisst ihr, was man in einer Runde alles machen kann?",
    options: [
      { text: "Nicht wirklich…", result: "Dann ab zum KfR/R – dort findet ihr raus, wie cool Rundenstunden sein können!" },
      { text: "Schon ein bisschen – aber mehr wäre gut", result: "Dann schnappt euch eure Runde und kommt zum KfR/R – für mehr Motivation und frische Ideen!" }
    ]
  },
  {
    id: "jung",
    text: "Du bist 15 oder 16 und fragst dich, was nach der Sippe kommt?",
    options: [
      { text: "Ja – voll!", result: "KfR/R ist deine Chance, in die nächste Stufe reinzuschnuppern – komm vorbei!" },
      { text: "Weiß ich noch nicht…", result: "Perfekt – der KfR/R hilft dir herauszufinden, ob RR was für dich ist!" }
    ]
  }
];

let currentQuestion = questions[0];
let path = [];

const questionBox = document.getElementById("question-box");
const resultBox = document.getElementById("result-box");
const pathSpan = document.getElementById("path");

function showQuestion(question) {
  questionBox.classList.remove("hidden");
  resultBox.classList.add("hidden");
  questionBox.innerHTML = `<p>${question.text}</p>`;

  question.options.forEach((option) => {
    const btn = document.createElement("button");
    btn.textContent = option.text;

    btn.onclick = () => {
      path.push(option.text);
      updatePathDisplay();

      if (option.next) {
        const nextQuestion = questions.find(q => q.id === option.next);
        showQuestion(nextQuestion);
      } else if (option.result) {
        showResult(option.result);
      }
    };

    questionBox.appendChild(btn);
  });
}

function updatePathDisplay() {
  pathSpan.textContent = path.join(" → ");
}

function showResult(text) {
  questionBox.classList.add("hidden");
  resultBox.classList.remove("hidden");

  resultBox.innerHTML = `
    <p>${text}</p>
    <p><strong>Alle Infos & Anmeldung findest du hier:</strong></p>
    <a href="https://hessenwiki.de/confluence/spaces/PUB/pages/1974767/Ausschreibungen+und+Anmeldungen"_blank" 
       style="display:inline-block; margin-top:1rem; background:#00754b; color:white; padding:1rem 1.5rem; border-radius:12px; text-decoration:none;">
       🔗 Zur Ausschreibung im Hessenwiki
    </a>
  `;
}

showQuestion(currentQuestion);

