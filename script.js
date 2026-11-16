/* =========================================================
   1. BANCO DE QUESTÕES INÉDITAS (12 PERGUNTAS NOVAS)
========================================================= */
const levels = [
  {
    title: "Nível básico",
    subtitle: "Reconheça as estruturas da folha e o transporte de substâncias.",
    tag: "NÍVEL 1 · BÁSICO",
    reward: { name: "Pequeno Botânico", icon: "🌱", description: "Você domina as estruturas essenciais das plantas!" },
    questions: [
      {
        q: "Por quais estruturas microscópicas, localizadas principalmente na epiderme das folhas, o gás carbônico (CO₂) entra na planta?",
        a: ["Estômatos", "Raízes pivotantes", "Pétalas", "Sementes"],
        correct: 0,
        explanation: "Os estômatos são pequenos poros regulados por células-guarda que permitem as trocas gasosas (entrada de CO₂ e saída de O₂ e vapor d'água)."
      },
      {
        q: "Qual tecido condutor transporta a água e os sais minerais absorvidos pelas raízes até as folhas para que ocorra a fotossíntese?",
        a: ["Floema", "Xilema", "Parênquima de reserva", "Córtex"],
        correct: 1,
        explanation: "O xilema conduz a seiva bruta (água e sais minerais) das raízes até as folhas, onde a fotossíntese acontece."
      },
      {
        q: "Além das plantas terrestres, quais outros organismos são grandes responsáveis pela fotossíntese e produção de oxigênio nos oceanos?",
        a: ["Fungos decompositores", "Algas e cianobactérias (fitoplâncton)", "Animais marinhos", "Vírus aquáticos"],
        correct: 1,
        explanation: "O fitoplâncton, composto por algas microscópicas e cianobactérias, realiza a maior parte da fotossíntese nos ecossistemas aquáticos."
      },
      {
        q: "Qual é a função do floema após a produção de glicose nas folhas?",
        a: ["Absorver luz ultravioleta", "Eliminar oxigênio pelo caule", "Distribuir a seiva elaborada (açúcares) para toda a planta", "Fixar a planta no solo"],
        correct: 2,
        explanation: "O floema transporta a seiva elaborada, rica em compostos orgânicos produzidos na fotossíntese, das folhas para raízes, frutos e outras partes."
      }
    ]
  },
  {
    title: "Nível intermediário",
    subtitle: "Compreenda as etapas fotoquímica e química da fotossíntese.",
    tag: "NÍVEL 2 · INTERMEDIÁRIO",
    reward: { name: "Cientista Verde", icon: "🔬", description: "Você entende as reações internas do cloroplasto!" },
    questions: [
      {
        q: "A fotossíntese é dividida em duas etapas principais. Onde ocorre a etapa fotoquímica (fase clara)?",
        a: ["No estroma do cloroplasto", "Nos tilacoides do cloroplasto", "Na parede celular", "No vacúolo central"],
        correct: 1,
        explanation: "Nos tilacoides encontram-se a clorofila e outros pigmentos que captam a luz solar para produzir ATP, NADPH e liberar oxigênio."
      },
      {
        q: "Durante a fase clara ocorre a fotólise da água. Qual é o resultado direto da quebra da molécula de H₂O pela luz?",
        a: ["Formação imediata de glicose", "Liberação de gás carbônico", "Liberação de gás oxigênio (O₂), prótons e elétrons", "Produção de celulose"],
        correct: 2,
        explanation: "Todo o oxigênio liberado na fotossíntese vem da quebra das moléculas de água (fotólise) durante a etapa dependente de luz."
      },
      {
        q: "Em qual região do cloroplasto acontece o Ciclo de Calvin (etapa química), responsável por fixar o CO₂ e formar açúcares?",
        a: ["No estroma", "Na membrana plasmática", "No núcleo celular", "Nos estômatos"],
        correct: 0,
        explanation: "No estroma (fluido interno do cloroplasto), as enzimas utilizam o ATP e o NADPH gerados na fase clara para transformar CO₂ em carboidratos."
      },
      {
        q: "Por que a maioria das folhas nos parece verde aos olhos humanos?",
        a: ["Porque a clorofila absorve apenas a luz verde", "Porque a clorofila reflete principalmente os comprimentos de onda da luz verde", "Porque o CO₂ tem coloração esverdeada", "Porque a água do xilema é verde"],
        correct: 1,
        explanation: "A clorofila absorve com alta eficiência as luzes vermelha e azul, refletindo a faixa verde do espectro luminoso."
      }
    ]
  },
  {
    title: "Nível avançado",
    subtitle: "Analise o balanço energético, respiração e fatores limitantes.",
    tag: "NÍVEL 3 · AVANÇADO",
    reward: { name: "Mestre da Fotossíntese", icon: "🏆", description: "Você domina a fisiologia vegetal em nível avançado!" },
    questions: [
      {
        q: "O que acontece com uma planta quando ela atinge o chamado 'Ponto de Compensação Fótico'?",
        a: ["Ela para completamente de respirar", "A taxa de fotossíntese se iguala à taxa de respiração celular", "Ela morre por excesso de luz", "Ela passa a consumir oxigênio e liberar apenas nitrogênio"],
        correct: 1,
        explanation: "No ponto de compensação fótico, todo o O₂ produzido na fotossíntese é consumido na respiração, e todo o CO₂ da respiração é usado na fotossíntese."
      },
      {
        q: "Em dias muito quentes e secos, muitas plantas fecham seus estômatos para evitar desidratação. Qual é a consequência imediata disso para a fotossíntese?",
        a: ["A taxa fotossintética cai devido à redução na entrada de CO₂", "A fotossíntese acelera pelo acúmulo de oxigênio", "A planta passa a absorver CO₂ pelas raízes", "A clorofila se transforma em glicose"],
        correct: 0,
        explanation: "Com os estômatos fechados, a planta economiza água, mas restringe a entrada de gás carbônico, diminuindo a taxa do Ciclo de Calvin."
      },
      {
        q: "Sobre a relação entre fotossíntese e respiração celular nas plantas, qual afirmação está correta?",
        a: ["Plantas fazem fotossíntese de dia e só respiram à noite", "Plantas respiram 24 horas por dia e fazem fotossíntese apenas na presença de luz", "Plantas não realizam respiração celular", "A fotossíntese ocorre nas mitocôndrias e a respiração nos cloroplastos"],
        correct: 1,
        explanation: "As células vegetais precisam de energia constantemente, portanto respiram o tempo todo (dia e noite), enquanto a fotossíntese depende de luz."
      },
      {
        q: "Após atingir o ponto de saturação luminosa, aumentar ainda mais a intensidade da luz não eleva a taxa de fotossíntese porque:",
        a: ["A luz destrói todas as raízes", "Outros fatores, como a concentração de CO₂ ou enzimas, tornam-se limitantes", "A planta deixa de precisar de água", "O oxigênio bloqueia a entrada de luz"],
        correct: 1,
        explanation: "Quando todas as moléculas de clorofila já estão excitadas no máximo, a velocidade passa a ser limitada pela disponibilidade de CO₂ ou temperatura."
      }
    ]
  }
];

/* =========================================================
   2. DADOS DO ECOBANCO (LOJA DE ITENS) E BOTS DO RANKING
========================================================= */
const shopCatalog = [
  { id: "av_lotus", type: "avatar", icon: "🪷", name: "Avatar Lótus", desc: "Ícone exclusivo para seu perfil", price: 40 },
  { id: "av_dna", type: "avatar", icon: "🧬", name: "Avatar BioTech", desc: "Ícone científico avançado", price: 75 },
  { id: "av_crown", type: "avatar", icon: "👑", name: "Avatar Rei Flora", desc: "O símbolo máximo da botânica", price: 120 },
  { id: "title_guard", type: "title", icon: "🛡️", name: "Título: Guardião Verde", desc: "Exibido no Banco e Ranking", price: 50 },
  { id: "title_dr", type: "title", icon: "🎓", name: "Título: Doutor Clorofila", desc: "Exibido no Banco e Ranking", price: 90 }
];

const defaultBots = [
  { username: "Charles_Darwin", avatar: "🐢", title: "Naturalista Lendário", score: 110, coins: 165, isBot: true },
  { username: "Dra_Clorofila", avatar: "🌿", title: "Especialista Solar", score: 80, coins: 120, isBot: true },
  { username: "Gregor_Mendel", avatar: "🫛", title: "Mestre das Ervilhas", score: 40, coins: 60, isBot: true }
];

/* =========================================================
   3. GERENCIAMENTO DE USUÁRIOS, LOGIN E BANCO (localStorage)
========================================================= */
const STORAGE_USERS_KEY = "mf_users_db_v1";
const STORAGE_SESSION_KEY = "mf_current_user_v1";

function getUsersDB() {
  return JSON.parse(localStorage.getItem(STORAGE_USERS_KEY) || "{}");
}

function saveUsersDB(db) {
  localStorage.setItem(STORAGE_USERS_KEY, JSON.stringify(db));
}

function getCurrentUser() {
  const username = localStorage.getItem(STORAGE_SESSION_KEY);
  if (!username) return null;
  const db = getUsersDB();
  return db[username] || null;
}

function updateCurrentUser(updaterFn) {
  const username = localStorage.getItem(STORAGE_SESSION_KEY);
  if (!username) return null;
  const db = getUsersDB();
  if (!db[username]) return null;
  updaterFn(db[username]);
  saveUsersDB(db);
  syncUserUI();
  return db[username];
}

function addBankTransaction(user, label, amount) {
  user.history = user.history || [];
  const time = new Date().toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" });
  user.history.unshift({ label, amount, time });
  if (user.history.length > 25) user.history.pop();
}

/* =========================================================
   4. ESTADO DO JOGO E ELEMENTOS DA INTERFACE
========================================================= */
const screens = {
  auth: document.getElementById("auth-screen"),
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
  coins: 0,
  unlocked: 0,
  completed: [],
  rewards: []
};

const letters = ["A", "B", "C", "D"];
const $ = (id) => document.getElementById(id);

function showScreen(name) {
  Object.values(screens).forEach(s => s.classList.add("hidden"));
  screens[name].classList.remove("hidden");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function syncUserUI() {
  const user = getCurrentUser();
  if (user) {
    // Carrega progresso salvo do usuário
    state.score = user.score || 0;
    state.coins = user.coins || 0;
    state.unlocked = user.unlocked || 0;
    state.completed = user.completed || [];
    state.rewards = user.rewards || [];

    $("user-stats-bar").classList.remove("hidden");
    $("guest-actions").classList.add("hidden");
    $("header-username").textContent = user.username;
    $("header-avatar").textContent = user.avatar || "🌱";
    $("header-coins").textContent = state.coins;
    $("header-score").textContent = state.score;
    $("header-badges").textContent = state.rewards.length;
  } else {
    $("user-stats-bar").classList.add("hidden");
    $("guest-actions").classList.remove("hidden");
  }
  updateScore();
  updateRewards();
  updateProgress();
}

function updateScore() {
  $("score").textContent = state.score;
  $("game-coins").textContent = state.coins;
  $("header-score").textContent = state.score;
  $("header-coins").textContent = state.coins;
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
}

/* =========================================================
   5. LÓGICA DE LOGIN E CADASTRO
========================================================= */
let authMode = "login";
let selectedAvatar = "🌱";

function openAuthScreen(mode = "login") {
  authMode = mode;
  $("auth-error").classList.add("hidden");
  $("auth-form").reset();
  document.querySelectorAll(".auth-tab").forEach(t => t.classList.toggle("active", t.dataset.mode === mode));

  if (mode === "login") {
    $("auth-title").textContent = "Entrar na Missão";
    $("auth-subtitle").textContent = "Acesse sua conta para carregar seus pontos e BioMoedas.";
    $("avatar-picker-group").classList.add("hidden");
    $("auth-submit-btn").textContent = "Acessar conta →";
  } else {
    $("auth-title").textContent = "Criar Conta de Pesquisador";
    $("auth-subtitle").textContent = "Ganhe 30 BioMoedas de bônus de boas-vindas no EcoBanco!";
    $("avatar-picker-group").classList.remove("hidden");
    $("auth-submit-btn").textContent = "Cadastrar e jogar →";
  }
  showScreen("auth");
}

document.querySelectorAll(".auth-tab").forEach(tab => {
  tab.addEventListener("click", () => openAuthScreen(tab.dataset.mode));
});

document.querySelectorAll(".avatar-opt").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".avatar-opt").forEach(b => b.classList.remove("selected"));
    btn.classList.add("selected");
    selectedAvatar = btn.dataset.avatar;
  });
});

$("auth-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const username = $("auth-username").value.trim();
  const password = $("auth-password").value;
  const db = getUsersDB();
  const errEl = $("auth-error");

  if (authMode === "register") {
    if (db[username]) {
      errEl.textContent = "Esse nome de usuário já está em uso. Escolha outro.";
      errEl.classList.remove("hidden");
      return;
    }
    db[username] = {
      username,
      password,
      avatar: selectedAvatar,
      title: "Explorador Iniciante",
      score: 0,
      coins: 30,
      unlocked: 0,
      completed: [],
      rewards: [],
      ownedItems: [],
      history: [{ label: "Bônus de abertura de conta", amount: +30, time: "Hoje" }]
    };
    saveUsersDB(db);
    localStorage.setItem(STORAGE_SESSION_KEY, username);
    syncUserUI();
    showScreen("home");
  } else {
    const user = db[username];
    if (!user || user.password !== password) {
      errEl.textContent = "Usuário ou senha incorretos.";
      errEl.classList.remove("hidden");
      return;
    }
    localStorage.setItem(STORAGE_SESSION_KEY, username);
    syncUserUI();
    showScreen("home");
  }
});

$("logout-btn").addEventListener("click", () => {
  localStorage.removeItem(STORAGE_SESSION_KEY);
  state.score = 0;
  state.coins = 0;
  state.unlocked = 0;
  state.completed = [];
  state.rewards = [];
  syncUserUI();
  showScreen("home");
});

/* =========================================================
   6. LÓGICA DO JOGO
========================================================= */
function beginLevel(levelIndex) {
  if (!getCurrentUser()) {
    openAuthScreen("login");
    return;
  }
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
  feedback.innerHTML = `<strong>${isCorrect ? "✓ Resposta correta! (+15 BioMoedas)" : "✗ Não foi dessa vez. A alternativa correta é " + letters[question.correct] + "."}</strong>${question.explanation}`;
  $("answered-count").textContent = `${state.answers.length} de 4 respondidas`;
  $("next-button").disabled = false;
}

function finishLevel() {
  const passed = state.attemptCorrect >= 3;
  const pointsEarned = passed ? state.attemptCorrect * 10 : 0;
  const coinsEarned = passed ? state.attemptCorrect * 15 : 5; // 5 moedas de consolação se reprovar
  const levelIndex = state.level;

  $("level-correct").textContent = `${state.attemptCorrect}/4`;
  $("level-points").textContent = pointsEarned;
  $("level-coins-earned").textContent = `+${coinsEarned}`;
  $("level-result-icon").textContent = passed ? levels[levelIndex].reward.icon : "🌿";

  updateCurrentUser((user) => {
    user.coins = (user.coins || 0) + coinsEarned;
    addBankTransaction(user, `Recompensa: ${levels[levelIndex].title}`, +coinsEarned);

    if (passed) {
      // Só soma pontos se o nível ainda não havia sido concluído ou se melhorou
      if (!user.completed.includes(levelIndex)) {
        user.score = (user.score || 0) + pointsEarned;
        user.completed.push(levelIndex);
      }
      if (!user.rewards.includes(levelIndex)) {
        user.rewards.push(levelIndex);
      }
      user.unlocked = Math.max(user.unlocked || 0, Math.min(levelIndex + 1, 2));
    }
  });

  if (passed) {
    $("level-result-title").textContent = levelIndex === 2 ? "Missão cumprida!" : "Nível concluído!";
    $("level-result-message").textContent = `Você acertou ${state.attemptCorrect} de 4 questões e recebeu +${coinsEarned} BioMoedas no EcoBanco!`;
    $("earned-reward").textContent = `${levels[levelIndex].reward.icon} ${levels[levelIndex].reward.name} — conquista desbloqueada!`;
    $("retry-button").classList.add("hidden");
    $("continue-button").classList.remove("hidden");
    $("continue-button").textContent = levelIndex === 2 ? "Ver resultado final →" : "Avançar de nível →";
  } else {
    $("level-result-title").textContent = "Quase lá! Continue tentando.";
    $("level-result-message").textContent = `Você acertou ${state.attemptCorrect} de 4 (mínimo 3 para avançar). Ganhou +5 BioMoedas pelo esforço!`;
    $("earned-reward").textContent = "Revise as explicações e tente novamente.";
    $("continue-button").classList.add("hidden");
    $("retry-button").classList.remove("hidden");
  }

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

/* =========================================================
   7. ECOBANCO (LOJA, TRANSFERÊNCIA E EXTRATO)
========================================================= */
function openBankModal() {
  const user = getCurrentUser();
  if (!user) {
    openAuthScreen("login");
    return;
  }
  renderBankModal();
  $("bank-modal").classList.remove("hidden");
}

function renderBankModal() {
  const user = getCurrentUser();
  if (!user) return;

  $("bank-balance").textContent = user.coins || 0;
  $("bank-user-title").textContent = user.title || "Explorador Iniciante";
  $("bank-user-name").textContent = `@${user.username}`;

  // Renderiza Loja
  const owned = user.ownedItems || [];
  $("shop-items").innerHTML = shopCatalog.map(item => {
    const isOwned = owned.includes(item.id);
    const isEquipped = (item.type === "avatar" && user.avatar === item.icon) ||
                       (item.type === "title" && user.title === item.name.replace("Título: ", ""));
    let btnLabel = `Comprar (🪙 ${item.price})`;
    let btnClass = "btn btn-primary";
    if (isEquipped) {
      btnLabel = "Em uso ✓";
      btnClass = "btn btn-secondary";
    } else if (isOwned) {
      btnLabel = "Equipar";
      btnClass = "btn btn-secondary";
    }

    return `<div class="shop-item">
      <div class="item-icon">${item.icon}</div>
      <strong>${item.name}</strong>
      <small>${item.desc}</small>
      <button type="button" class="${btnClass}" data-shop-id="${item.id}" ${isEquipped ? "disabled" : ""}>${btnLabel}</button>
    </div>`;
  }).join("");

  document.querySelectorAll("[data-shop-id]").forEach(btn => {
    btn.addEventListener("click", () => handleShopAction(btn.dataset.shopId));
  });

  // Renderiza Extrato
  const history = user.history || [];
  $("bank-history-list").innerHTML = history.length
    ? history.map(h => `<li>
        <div><strong>${h.label}</strong><br><small style="color:var(--muted)">${h.time}</small></div>
        <span class="${h.amount >= 0 ? "plus" : "minus"}">${h.amount >= 0 ? "+" : ""}${h.amount} 🪙</span>
      </li>`).join("")
    : `<li><span>Nenhuma movimentação registrada ainda.</span></li>`;
}

function handleShopAction(itemId) {
  const item = shopCatalog.find(i => i.id === itemId);
  if (!item) return;

  updateCurrentUser((user) => {
    user.ownedItems = user.ownedItems || [];
    if (!user.ownedItems.includes(item.id)) {
      if ((user.coins || 0) < item.price) {
        alert("Saldo de BioMoedas insuficiente! Responda mais questões para ganhar moedas.");
        return;
      }
      user.coins -= item.price;
      user.ownedItems.push(item.id);
      addBankTransaction(user, `Compra: ${item.name}`, -item.price);
    }
    if (item.type === "avatar") user.avatar = item.icon;
    if (item.type === "title") user.title = item.name.replace("Título: ", "");
  });
  renderBankModal();
}

document.querySelectorAll(".bank-tab").forEach(tab => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".bank-tab").forEach(t => t.classList.remove("active"));
    tab.classList.add("active");
    document.querySelectorAll(".bank-pane").forEach(p => p.classList.add("hidden"));
    $("btab-" + tab.dataset.btab).classList.remove("hidden");
  });
});

$("transfer-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const targetName = $("transfer-to").value.trim();
  const amount = Number($("transfer-amount").value);
  const msgEl = $("transfer-msg");
  const currentUser = getCurrentUser();
  const db = getUsersDB();

  msgEl.className = "transfer-msg err";
  if (!currentUser) return;
  if (targetName === currentUser.username) {
    msgEl.textContent = "Você não pode transferir moedas para si mesmo.";
    msgEl.classList.remove("hidden");
    return;
  }
  if (!db[targetName]) {
    msgEl.textContent = "Usuário destinatário não encontrado no sistema.";
    msgEl.classList.remove("hidden");
    return;
  }
  if (amount <= 0 || currentUser.coins < amount) {
    msgEl.textContent = "Saldo insuficiente ou valor inválido.";
    msgEl.classList.remove("hidden");
    return;
  }

  // Realiza transferência
  db[currentUser.username].coins -= amount;
  addBankTransaction(db[currentUser.username], `Transferência para @${targetName}`, -amount);

  db[targetName].coins = (db[targetName].coins || 0) + amount;
  addBankTransaction(db[targetName], `Recebido de @${currentUser.username}`, +amount);

  saveUsersDB(db);
  syncUserUI();
  renderBankModal();
  $("transfer-form").reset();
  msgEl.textContent = `✓ ${amount} BioMoedas enviadas com sucesso para @${targetName}!`;
  msgEl.className = "transfer-msg ok";
  msgEl.classList.remove("hidden");
});

/* =========================================================
   8. RANKING GERAL
========================================================= */
function openRankingModal() {
  const db = getUsersDB();
  const currentUser = getCurrentUser();
  const realUsers = Object.values(db).map(u => ({
    username: u.username,
    avatar: u.avatar || "🌱",
    title: u.title || "Explorador Iniciante",
    score: u.score || 0,
    coins: u.coins || 0,
    isCurrent: currentUser && currentUser.username === u.username
  }));

  const allPlayers = [...realUsers, ...defaultBots].sort((a, b) => {
    if (b.score !== a.score) return b.score - a.score;
    return b.coins - a.coins;
  });

  $("ranking-tbody").innerHTML = allPlayers.map((p, idx) => {
    const pos = idx + 1;
    const rankClass = pos <= 3 ? `rank-${pos}` : "";
    return `<tr class="${p.isCurrent ? "current-user-row" : ""}">
      <td><span class="rank-badge ${rankClass}">${pos}º</span></td>
      <td>${p.avatar} <strong>${p.username}</strong> ${p.isCurrent ? "(Você)" : ""}</td>
      <td><small>${p.title}</small></td>
      <td>🪙 ${p.coins}</td>
      <td><strong>${p.score} pts</strong></td>
    </tr>`;
  }).join("");

  $("ranking-modal").classList.remove("hidden");
}

/* =========================================================
   9. EVENT LISTENERS E INICIALIZAÇÃO
========================================================= */
$("brand-home").addEventListener("click", (e) => { e.preventDefault(); showScreen("home"); });
$("nav-login-btn").addEventListener("click", () => openAuthScreen("login"));
$("auth-cancel-btn").addEventListener("click", () => showScreen("home"));

$("start-button").addEventListener("click", () => {
  if (!getCurrentUser()) {
    openAuthScreen("login");
  } else {
    beginLevel(state.unlocked || 0);
  }
});

$("open-bank-btn").addEventListener("click", openBankModal);
$("home-bank-btn").addEventListener("click", openBankModal);

$("open-ranking-btn").addEventListener("click", openRankingModal);
$("nav-ranking-btn").addEventListener("click", openRankingModal);
$("home-ranking-btn").addEventListener("click", openRankingModal);
$("final-ranking-btn").addEventListener("click", openRankingModal);

document.querySelectorAll(".close-modal").forEach(btn => {
  btn.addEventListener("click", () => $(btn.dataset.close).classList.add("hidden"));
});

document.querySelectorAll(".modal-overlay").forEach(overlay => {
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) overlay.classList.add("hidden");
  });
});

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
$("restart-button").addEventListener("click", () => beginLevel(0));

// Inicializa interface
syncUserUI();