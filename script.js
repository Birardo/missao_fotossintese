const levels = [
  {
    title: "Nível básico",
    subtitle: "Reconheça os conceitos fundamentais.",
    tag: "NÍVEL 1 · BÁSICO",
    reward: { name: "Pequeno Botânico", icon: "🌱", description: "Você reconhece os primeiros segredos das plantas!" },
    questions: [
      {
        q: "O que é fotossíntese?",
        a: ["O processo pelo qual as plantas produzem seu próprio alimento usando luz", "A absorção de nutrientes diretamente do solo", "A transformação de oxigênio em gás carbônico", "A reprodução das plantas por sementes"],
        correct: 0,
        explanation: "Na fotossíntese, organismos como plantas, algas e algumas bactérias usam energia luminosa para produzir matéria orgânica a partir de água e gás carbônico."
      },
      {
        q: "Qual é a principal fonte de energia para a fotossíntese?",
        a: ["O vento", "A luz do Sol", "Os minerais do solo", "O oxigênio do ar"],
        correct: 1,
        explanation: "A energia luminosa, geralmente fornecida pelo Sol, é captada por pigmentos como a clorofila e utilizada no processo fotossintético."
      },
      {
        q: "Qual pigmento verde participa da captação de luz nas plantas?",
        a: ["Hemoglobina", "Melanina", "Clorofila", "Queratina"],
        correct: 2,
        explanation: "A clorofila é um pigmento presente nos cloroplastos. Ela absorve principalmente luz azul e vermelha e reflete parte da luz verde."
      },
      {
        q: "Em qual estrutura celular ocorre a fotossíntese nas plantas?",
        a: ["No núcleo", "Nas mitocôndrias", "Nos ribossomos", "Nos cloroplastos"],
        correct: 3,
        explanation: "Os cloroplastos são organelas das células vegetais que contêm clorofila e abrigam as etapas da fotossíntese."
      }
    ]
  },
  {
    title: "Nível intermediário",
    subtitle: "Aplique o que aprendeu sobre os componentes do processo.",
    tag: "NÍVEL 2 · INTERMEDIÁRIO",
    reward: { name: "Cientista Verde", icon: "🔬", description: "Você compreende como os componentes da fotossíntese se relacionam!" },
    questions: [
      {
        q: "Quais substâncias são utilizadas como reagentes na fotossíntese?",
        a: ["Oxigênio e glicose", "Água e gás carbônico", "Glicose e nitrogênio", "Oxigênio e água"],
        correct: 1,
        explanation: "A água (H₂O) e o gás carbônico (CO₂) são utilizados para formar moléculas orgânicas. A energia luminosa torna esse processo possível."
      },
      {
        q: "Qual gás é liberado para o ambiente durante a fotossíntese?",
        a: ["Nitrogênio", "Gás carbônico", "Oxigênio", "Hidrogênio"],
        correct: 2,
        explanation: "O oxigênio (O₂) liberado na fotossíntese é produzido a partir da água durante as reações dependentes de luz."
      },
      {
        q: "Qual é a principal molécula orgânica produzida na fotossíntese e usada como fonte de energia química?",
        a: ["Glicose", "Água", "Oxigênio", "Gás carbônico"],
        correct: 0,
        explanation: "A fotossíntese permite formar açúcares, como a glicose, que armazenam energia química e podem ser utilizados pela planta."
      },
      {
        q: "Uma planta ficou por bastante tempo sem receber água. Mesmo em um local iluminado, sua fotossíntese tende a:",
        a: ["Aumentar bastante", "Continuar sempre na mesma taxa", "Produzir mais água", "Diminuir, pois a água é necessária ao processo"],
        correct: 3,
        explanation: "A água é um dos reagentes da fotossíntese. Sua falta prejudica o processo e também pode levar ao fechamento dos estômatos, reduzindo a entrada de CO₂."
      }
    ]
  },
  {
    title: "Nível avançado",
    subtitle: "Analise situações e conecte diferentes conceitos.",
    tag: "NÍVEL 3 · AVANÇADO",
    reward: { name: "Mestre da Fotossíntese", icon: "🏆", description: "Missão completa: você dominou os desafios da fotossíntese!" },
    questions: [
      {
        q: "Duas plantas da mesma espécie recebem água em quantidade adequada. Uma fica sob luz intensa e a outra em um local muito escuro. Considerando os demais fatores iguais, o que se espera?",
        a: ["A planta no escuro terá maior taxa fotossintética", "A planta iluminada tende a apresentar maior taxa fotossintética", "As duas terão necessariamente taxa zero", "A luz não interfere na fotossíntese"],
        correct: 1,
        explanation: "A luz fornece energia para as reações fotoquímicas. Com pouca luz, a taxa fotossintética tende a diminuir, desde que a intensidade luminosa seja um fator limitante."
      },
      {
        q: "Em um experimento, a concentração de gás carbônico aumenta, mas a intensidade luminosa permanece muito baixa. Por que a taxa de fotossíntese pode não aumentar significativamente?",
        a: ["Porque o gás carbônico impede a absorção de água", "Porque a clorofila deixa de existir", "Porque a baixa disponibilidade de luz continua limitando o processo", "Porque a planta passa a liberar glicose no ar"],
        correct: 2,
        explanation: "A fotossíntese depende de diferentes fatores. Aumentar o CO₂ não garante maior taxa quando outro fator, como a luz, continua sendo limitante."
      },
      {
        q: "Uma planta saudável é colocada em um recipiente transparente e fechado, com luz. Depois de algum tempo, a concentração de CO₂ dentro dele cai. Qual explicação é mais adequada?",
        a: ["A planta consumiu CO₂ durante a fotossíntese", "A planta transformou oxigênio em nitrogênio", "A luz converteu CO₂ diretamente em água", "A planta deixou de realizar trocas gasosas para sempre"],
        correct: 0,
        explanation: "Durante a fotossíntese, a planta retira CO₂ do ambiente para produzir compostos orgânicos. Em um recipiente fechado, essa retirada pode reduzir a concentração do gás."
      },
      {
        q: "Um estudante afirma: “A planta faz fotossíntese apenas para liberar oxigênio”. Qual avaliação corrige melhor essa afirmação?",
        a: ["Está correta, pois o oxigênio é o alimento da planta", "Está correta, pois a fotossíntese não produz matéria orgânica", "Está incorreta, pois plantas não realizam fotossíntese", "Está incorreta, pois a fotossíntese produz matéria orgânica; o oxigênio é liberado como produto do processo"],
        correct: 3,
        explanation: "A função central da fotossíntese é converter energia luminosa em energia química armazenada em moléculas orgânicas. O oxigênio é liberado durante o processo, mas não é seu objetivo principal."
      }
    ]
  }
];

const screens = {
  home: document.getElementById("home-screen"),
  game: document.getElementById("game-screen"),
  levelResult: document.getElementById("level-result-screen"),
  final: document.getElementById("final-screen")
};

const state = {
  level: 0,
  question: 0,
  answers: [],
  attemptCorrect: 0,
  score: 0,
  unlocked: 0,
  completed: [],
  rewards: []
};

const letters = ["A", "B", "C", "D"];
const $ = (id) => document.getElementById(id);

function showScreen(name) {
  Object.values(screens).forEach(screen => screen.classList.add("hidden"));
  screens[name].classList.remove("hidden");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function updateScore() {
  $("score").textContent = state.score;
  $("header-score").textContent = state.score;
  $("header-badges").textContent = state.rewards.length;
}

function updateProgress() {
  for (let i = 0; i < levels.length; i++) {
    const step = $("step-" + i);
    step.classList.toggle("active", i === state.level);
    step.classList.toggle("done", state.completed.includes(i));
    step.classList.toggle("locked", i > state.unlocked);
  }
}

function updateRewards() {
  const list = $("reward-list");
  list.innerHTML = levels.map((level, index) => {
    const earned = state.rewards.includes(index);
    return `<div class="reward ${earned ? "unlocked" : "locked-reward"}">
      <span>${level.reward.icon}</span>
      <div><strong>${level.reward.name}</strong><small>${earned ? "Conquista desbloqueada!" : ["Conclua o nível básico", "Conclua o intermediário", "Conclua o avançado"][index]}</small></div>
      <b>${earned ? "✓" : "🔒"}</b>
    </div>`;
  }).join("");
  $("header-badges").textContent = state.rewards.length;
}

function beginLevel(levelIndex) {
  state.level = levelIndex;
  state.question = 0;
  state.answers = [];
  state.attemptCorrect = 0;
  $("level-title").textContent = levels[levelIndex].title;
  $("level-subtitle").textContent = levels[levelIndex].subtitle;
  updateProgress();
  updateRewards();
  updateScore();
  showScreen("game");
  renderQuestion();
}

function renderQuestion() {
  const level = levels[state.level];
  const question = level.questions[state.question];
  $("question-level").textContent = level.tag;
  $("question-count").textContent = `Questão ${state.question + 1} de 4`;
  $("question-text").textContent = question.q;
  $("question-progress").style.width = `${((state.question + 1) / 4) * 100}%`;
  $("answered-count").textContent = `${state.answers.length} de 4 respondidas`;
  $("feedback").className = "feedback hidden";
  $("feedback").textContent = "";
  $("next-button").disabled = true;
  $("next-button").textContent = state.question === 3 ? "Ver resultado →" : "Próxima questão →";

  $("answers").innerHTML = question.a.map((answer, index) =>
    `<button class="answer" type="button" data-index="${index}">
      <span class="letter">${letters[index]}</span><span>${answer}</span>
    </button>`
  ).join("");

  document.querySelectorAll(".answer").forEach(button => {
    button.addEventListener("click", () => selectAnswer(Number(button.dataset.index)));
  });
}

function selectAnswer(selectedIndex) {
  if (state.answers[state.question] !== undefined) return;

  const question = levels[state.level].questions[state.question];
  const isCorrect = selectedIndex === question.correct;
  state.answers[state.question] = selectedIndex;
  if (isCorrect) state.attemptCorrect++;

  document.querySelectorAll(".answer").forEach((button, index) => {
    button.disabled = true;
    if (index === question.correct) button.classList.add("correct");
    if (index === selectedIndex && !isCorrect) button.classList.add("wrong");
  });

  const feedback = $("feedback");
  feedback.className = `feedback ${isCorrect ? "good" : "bad"}`;
  feedback.innerHTML = `<strong>${isCorrect ? "✓ Resposta correta!" : "✗ Não foi dessa vez. A alternativa correta é " + letters[question.correct] + "."}</strong>${question.explanation}`;
  $("answered-count").textContent = `${state.answers.length} de 4 respondidas`;
  $("next-button").disabled = false;
}

function finishLevel() {
  const passed = state.attemptCorrect >= 3;
  const pointsEarned = passed ? state.attemptCorrect * 10 : 0;
  const levelIndex = state.level;

  $("level-correct").textContent = `${state.attemptCorrect}/4`;
  $("level-points").textContent = pointsEarned;
  $("level-result-icon").textContent = passed ? levels[levelIndex].reward.icon : "🌿";

  if (passed) {
    state.score += pointsEarned;
    if (!state.completed.includes(levelIndex)) state.completed.push(levelIndex);
    if (!state.rewards.includes(levelIndex)) state.rewards.push(levelIndex);
    state.unlocked = Math.max(state.unlocked, Math.min(levelIndex + 1, 2));
    $("level-result-title").textContent = levelIndex === 2 ? "Missão cumprida!" : "Nível concluído!";
    $("level-result-message").textContent = `Você acertou ${state.attemptCorrect} de 4 questões e conquistou ${pointsEarned} pontos. Excelente trabalho!`;
    $("earned-reward").textContent = `${levels[levelIndex].reward.icon} ${levels[levelIndex].reward.name} — conquista desbloqueada!`;
    $("earned-reward").classList.remove("hidden");
    $("retry-button").classList.add("hidden");
    $("continue-button").classList.remove("hidden");
    $("continue-button").textContent = levelIndex === 2 ? "Ver resultado final →" : "Avançar de nível →";
  } else {
    $("level-result-title").textContent = "Quase lá! Continue tentando.";
    $("level-result-message").textContent = `Você acertou ${state.attemptCorrect} de 4. É necessário acertar pelo menos 3 para concluir o nível. Os pontos desta tentativa não foram contabilizados.`;
    $("earned-reward").textContent = "Revise as explicações e tente novamente. Você consegue!";
    $("earned-reward").classList.remove("hidden");
    $("continue-button").classList.add("hidden");
    $("retry-button").classList.remove("hidden");
  }

  updateScore();
  updateRewards();
  updateProgress();
  showScreen("levelResult");
}

function continueMission() {
  if (state.level === 2) {
    $("final-points").textContent = state.score;
    $("final-rewards").innerHTML = levels.map(level =>
      `<span>${level.reward.icon} ${level.reward.name}</span>`
    ).join("");
    showScreen("final");
  } else {
    beginLevel(state.level + 1);
  }
}

function restartGame() {
  state.level = 0;
  state.question = 0;
  state.answers = [];
  state.attemptCorrect = 0;
  state.score = 0;
  state.unlocked = 0;
  state.completed = [];
  state.rewards = [];
  updateScore();
  updateRewards();
  updateProgress();
  showScreen("home");
}

$("start-button").addEventListener("click", () => beginLevel(0));
$("next-button").addEventListener("click", () => {
  if (state.answers[state.question] === undefined) return;
  if (state.question < 3) {
    state.question++;
    renderQuestion();
  } else {
    finishLevel();
  }
});
$("continue-button").addEventListener("click", continueMission);
$("retry-button").addEventListener("click", () => beginLevel(state.level));
$("restart-button").addEventListener("click", restartGame);

updateScore();
updateRewards();
updateProgress();
