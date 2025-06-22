const questions = [
  {
    text: "Gibt’s bei dir im Stamm eine aktive R/R-Runde?",
    options: [
      { text: "Ja, wir machen schon einiges!", next: 1 },
      { text: "Nee, leider gar nicht.", next: 2 },
    ],
  },
  {
    text: "Trefft ihr euch regelmäßig nur für euch – ohne Sipplinge & Orga-Stress?",
    options: [
      {
        text: "Ja, aber frischer Wind wär nice!",
        result:
          "Du bist perfekt fürs KfR/R – hol dir neue Ideen und bring deine Runde aufs nächste Level!",
      },
      {
        text: "Eher nicht – wir helfen mehr mit als dass wir was für uns machen.",
        result:
          "Schnapp dir deine Runde – das KfR/R zeigt euch, wie R/R richtig Spaß macht!",
      },
    ],
  },
  {
    text: "Bist du allein oder seid ihr mehrere, die Bock auf R/R hätten?",
    options: [
      {
        text: "Ich bin (noch) allein – will aber starten!",
        result:
          "Du bist perfekt fürs KfR/R – finde Mitstreiter*innen und leg los!",
      },
      {
        text: "Wir sind ein paar – aber wissen nicht, wie wir starten sollen.",
        result:
          "Dann ab zum KfR/R – holt euch den Startschuss für eure Rundenarbeit!",
      },
    ],
  },
];

let currentQuestionIndex = 0;
const questionBox = document.getElementById("question-box");
const resultBox = document.getElementById("result-box");

function showQuestion(index) {
  const question = questions[index];
  questionBox.innerHTML = `<p>${question.text}</p>`;
  question.options.forEach((option, i) => {
    const btn = document.createElement("button");
    btn.textContent = option.text;
    btn.onclick = () => {
      if (option.next !== undefined) {
        currentQuestionIndex = option.next;
        showQuestion(currentQuestionIndex);
      } else {
        showResult(option.result);
      }
    };
    questionBox.appendChild(btn);
  });
}

function showResult(text) {
  questionBox.classList.add("hidden");
  resultBox.classList.remove("hidden");
  resultBox.innerHTML = `
    <p>${text}</p>
    <a href="https://hessenwiki.de/confluence/spaces/PUB/pages/1974767/Ausschreibungen+und+Anmeldungen" target="_blank">
      👉 Jetzt mehr zum KfR/R erfahren!
    </a>
  `;
}

showQuestion(currentQuestionIndex);

