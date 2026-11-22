(function () {
  "use strict";

  const MODULES = window.NUT_MODULES || [];
  const CARDS = window.NUT_CARDS || [];
  const QUESTIONS = window.NUT_QUESTIONS || [];
  const MATERIALS = window.NUT_MATERIALS || [];
  const GLOSSARY = window.NUT_GLOSSARY || [];
  const PLAN = window.NUT_PLAN || [];
  const STORAGE_KEY = "nut-provas-2026-v1";
  const LETTERS = ["A", "B", "C", "D", "E"];
  const LEVEL_LABEL = { facil: "Fácil", medio: "Médio", dificil: "Difícil" };
  const TRACKS = [
    {
      id: "san", name: "Segurança Alimentar e Nutricional", short: "SAN", date: "2026-11-17T14:00",
      label: "Segurança Alimentar e Nutricional", exam: "Exercício Avaliativo · 17/11 · 14h",
      eyebrow: "SAN · Exercício Avaliativo · 17/11 · 14h",
      title: "Segurança <em>Alimentar e Nutricional</em>",
      note: "conceitos, indicadores e situações-problema",
      lead: "Estude para a prova de terça: SAN, história, DHAA, fome, insegurança alimentar, EBIA, VIGISAN, SOFI, determinantes, sistemas alimentares, atuação do nutricionista e extensão.",
      strategy: [
        "Para cada indicador, pergunte o que ele mede e o que ele não mostra.",
        "Relacione todo conceito a uma situação real: renda, território, gênero, raça e política.",
        "Em situação-problema, use a sequência: conceito → indicador → determinantes → ação."
      ]
    },
    {
      id: "materno", name: "Materno Infantil", short: "Materno", date: "2026-11-18T14:00",
      label: "Nutrição Materno Infantil", exam: "Prova 2 · 18/11 · 14h",
      eyebrow: "Materno Infantil · Prova 2 · 18/11 · 14h",
      title: "Materno <em>Infantil</em>",
      note: "lactente, escolar, adolescente e composição corporal",
      lead: "Foque na Prova 2: antropometria do lactente e do RN, pré-escolar, escolar, adolescente, desnutrição, sobrepeso/obesidade e composição corporal. A prova tem situações-problema e interpretação de dados.",
      strategy: [
        "Comece pela técnica antropométrica e pelos indicadores; depois interprete curvas e casos.",
        "Diferencie desnutrição aguda/crônica, kwashiorkor/marasmo e o papel do MUAC.",
        "No adolescente, relacione Tanner, estirão, imagem corporal e necessidades; na obesidade, intervenção não prescritiva."
      ]
    },
    {
      id: "bases", name: "Bases da Técnica Dietética", short: "Bases", date: "2026-11-24T17:30",
      label: "Bases da Técnica Dietética", exam: "Prova Teórica 3 · 24/11 · 17h30",
      eyebrow: "Bases da Técnica Dietética · P3 · 24/11 · 17h30",
      title: "Bases da <em>Técnica Dietética</em>",
      note: "ovos, gorduras e carnes",
      lead: "Foque no módulo 3 da prova teórica: ovos, óleos e gorduras, carnes. Estrutura, transformações, cocção, qualidade e segurança — sem a prova prática.",
      strategy: [
        "Para cada técnica, pergunte: o que o calor, a água e a gordura fazem com essa estrutura?",
        "Decore as temperaturas e os pontos de fumaça; são questões rápidas e frequentes.",
        "Compare cortes duros x macios, coagulação x emulsão e fritura x rancidez."
      ]
    },
    {
      id: "micro", name: "Análises Microbiológicas", short: "Micro", date: "2026-11-27T14:00",
      label: "Análises Microbiológicas", exam: "A2 · 27/11 · 14h",
      eyebrow: "Análises Microbiológicas · A2 · 27/11 · 14h",
      title: "Análises <em>Microbiológicas</em>",
      note: "patógenos, indicadores, fungos e benéficos",
      lead: "Estude a A2 teórica: fundamentos e crescimento, patógenos e DTAs, deteriorantes, indicadores, fungos, micotoxinas e probióticos/prebióticos.",
      strategy: [
        "Separe o mecanismo antes do nome: infecção, intoxicação ou toxinfecção.",
        "Monte a matriz patógeno x alimento x incubação x prevenção; é o que mais cai.",
        "Diferencie indicador de patógeno: coliforme alto não é Salmonella."
      ]
    }
  ];
  const TRACK_BY_ID = {};
  TRACKS.forEach((track) => { TRACK_BY_ID[track.id] = track; });
  const ACCENT_BY_TRACK = { san: "mustard", materno: "berry", bases: "green", micro: "blue" };

  const $ = (sel, root) => (root || document).querySelector(sel);
  const $$ = (sel, root) => Array.from((root || document).querySelectorAll(sel));

  const BY_ID = {};
  const LESSONS = [];
  MODULES.forEach((mod, mi) => {
    BY_ID[mod.id] = mod;
    mod.lessons.forEach((lesson, li) => {
      LESSONS.push({ lesson: lesson, module: mod, mi: mi, li: li, index: LESSONS.length });
    });
  });
  const CARD_BY_ID = {};
  CARDS.forEach((card) => { CARD_BY_ID[card.id] = card; });

  const DEFAULT_STATE = {
    theme: null,
    track: null,
    examDate: "2026-11-18T14:00",
    examTrack: "materno",
    lessons: {},
    cards: {},
    xp: 0,
    streak: 0,
    lastActiveDate: null,
    quizStats: { answered: 0, correct: 0 },
    trackStats: { san: { answered: 0, correct: 0 }, materno: { answered: 0, correct: 0 }, bases: { answered: 0, correct: 0 }, micro: { answered: 0, correct: 0 } },
    quizHistory: [],
    examHistory: [],
    plan: {},
    lastLesson: null
  };

  let state = loadState();
  let activeLesson = null;
  let openModules = new Set([MODULES[0] ? MODULES[0].id : ""]);
  let deck = [];
  let deckIndex = 0;
  let quiz = null;
  let exam = null;
  let examRemaining = 30 * 60;
  let quizReviewMode = "all";
  let glossaryQuery = "";
  let glossaryLetter = "";
  let toastTimer = null;

  function normalizeTrackStats(raw) {
    const base = { san: { answered: 0, correct: 0 }, materno: { answered: 0, correct: 0 }, bases: { answered: 0, correct: 0 }, micro: { answered: 0, correct: 0 } };
    const source = raw || {};
    Object.keys(base).forEach((id) => {
      base[id] = Object.assign({ answered: 0, correct: 0 }, source[id] || {});
    });
    return base;
  }

  function loadState() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return JSON.parse(JSON.stringify(DEFAULT_STATE));
      const parsed = JSON.parse(raw);
      return Object.assign(JSON.parse(JSON.stringify(DEFAULT_STATE)), parsed, {
        lessons: Object.assign({}, parsed.lessons),
        cards: Object.assign({}, parsed.cards),
        plan: Object.assign({}, parsed.plan),
        quizStats: Object.assign({ answered: 0, correct: 0 }, parsed.quizStats),
        trackStats: normalizeTrackStats(parsed.trackStats),
        quizHistory: Array.isArray(parsed.quizHistory) ? parsed.quizHistory : [],
        examHistory: Array.isArray(parsed.examHistory) ? parsed.examHistory : []
      });
    } catch (err) {
      return JSON.parse(JSON.stringify(DEFAULT_STATE));
    }
  }

  function saveState() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (err) {
      /* armazenamento indisponível: o site continua funcionando na sessão */
    }
  }

  function esc(value) {
    return String(value == null ? "" : value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function svg(name) {
    return '<svg aria-hidden="true"><use href="#' + name + '"></use></svg>';
  }

  function normalize(text) {
    return String(text || "")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();
  }

  function stripHtml(html) {
    const div = document.createElement("div");
    div.innerHTML = html || "";
    return (div.textContent || div.innerText || "").replace(/\s+/g, " ").trim();
  }

  function fmt(value, digits) {
    const d = typeof digits === "number" ? digits : 2;
    return value.toLocaleString("pt-BR", { minimumFractionDigits: d, maximumFractionDigits: d });
  }

  function fmtInt(value) {
    return Math.round(value).toLocaleString("pt-BR");
  }

  function pct(part, total) {
    return total ? Math.round((part / total) * 100) : 0;
  }

  function shuffle(list) {
    const copy = list.slice();
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const tmp = copy[i];
      copy[i] = copy[j];
      copy[j] = tmp;
    }
    return copy;
  }

  function withShuffledOptions(question) {
    const options = question.options.map((text, index) => ({ text: text, correct: index === question.answer }));
    const shuffled = shuffle(options);
    return Object.assign({}, question, {
      options: shuffled.map((option) => option.text),
      answer: shuffled.findIndex((option) => option.correct)
    });
  }

  function moduleOf(id) {
    return BY_ID[id] || null;
  }

  function trackOf(id) {
    const mod = moduleOf(id);
    return mod && mod.track ? TRACK_BY_ID[mod.track] : null;
  }

  function trackLabel(id) {
    const track = trackOf(id);
    return track ? track.short : "Módulo";
  }

  function modulesOfTrack(trackId) {
    return MODULES.filter((mod) => mod.track === trackId);
  }

  function selectedTrack() {
    return state.track ? TRACK_BY_ID[state.track] || null : null;
  }

  function visibleModules() {
    return state.track ? modulesOfTrack(state.track) : MODULES;
  }

  function moduleIsVisible(id) {
    const mod = moduleOf(id);
    return !!mod && (!state.track || mod.track === state.track);
  }

  function visibleLessons() {
    return LESSONS.filter((entry) => !state.track || entry.module.track === state.track);
  }

  function visibleCards() {
    return CARDS.filter((card) => moduleIsVisible(card.module));
  }

  function visibleQuestions() {
    return QUESTIONS.filter((q) => moduleIsVisible(q.module));
  }

  function moduleNumberInTrack(id) {
    const mod = moduleOf(id);
    if (!mod) return 0;
    return modulesOfTrack(mod.track).indexOf(mod) + 1;
  }

  function moduleLabel(id) {
    const mod = moduleOf(id);
    return mod ? mod.short : "Módulo";
  }

  function lessonById(id) {
    const item = LESSONS.find((entry) => entry.lesson.id === id);
    return item || null;
  }

  function firstLessonOf(mod) {
    return mod && mod.lessons.length ? mod.lessons[0] : null;
  }

  function nextIncompleteLesson(mod) {
    if (!mod) return null;
    return mod.lessons.find((lesson) => !state.lessons[lesson.id]) || mod.lessons[0] || null;
  }

  function dateLabel(ts) {
    return new Date(ts).toLocaleDateString("pt-BR", { day: "2-digit", month: "2-digit" });
  }

  function toast(message) {
    const el = $("#toast");
    if (!el) return;
    el.textContent = message;
    el.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => el.classList.remove("show"), 2400);
  }

  /* -------------------------- gamificação ------------------------- */

  function localDateKey(date) {
    const d = date || new Date();
    return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0");
  }

  function daysBetweenKeys(from, to) {
    const a = new Date(from + "T12:00:00");
    const b = new Date(to + "T12:00:00");
    return Math.round((b - a) / 86400000);
  }

  function currentStreak() {
    if (!state.lastActiveDate) return 0;
    const diff = daysBetweenKeys(state.lastActiveDate, localDateKey());
    return diff <= 1 ? (state.streak || 0) : 0;
  }

  function touchActivity() {
    const today = localDateKey();
    if (!state.lastActiveDate) {
      state.streak = 1;
    } else {
      const diff = daysBetweenKeys(state.lastActiveDate, today);
      if (diff === 0) state.streak = state.streak || 1;
      else if (diff === 1) state.streak = (state.streak || 0) + 1;
      else state.streak = 1;
    }
    state.lastActiveDate = today;
  }

  function levelInfo(xp) {
    const per = 150;
    const value = Math.max(0, xp || 0);
    return { level: Math.floor(value / per) + 1, inLevel: value % per, per: per, pct: ((value % per) / per) * 100 };
  }

  function flashHud() {
    const hud = $("#game-hud");
    if (!hud) return;
    hud.classList.remove("flash");
    void hud.offsetWidth;
    hud.classList.add("flash");
    setTimeout(() => hud.classList.remove("flash"), 700);
  }

  function addXp(amount) {
    if (!amount) return;
    const before = levelInfo(state.xp || 0).level;
    touchActivity();
    state.xp = (state.xp || 0) + amount;
    saveState();
    renderGamification();
    const after = levelInfo(state.xp).level;
    if (after > before) toast("Nível " + after + " desbloqueado! Continue assim.");
    flashHud();
  }

  function renderGamification() {
    const info = levelInfo(state.xp || 0);
    const streak = currentStreak();
    const set = (id, text) => {
      const el = document.getElementById(id);
      if (el) el.textContent = text;
    };
    set("game-hud-level", "Nv. " + info.level);
    set("game-hud-streak", String(streak));
    set("game-level", "Nível " + info.level);
    set("game-xp", (state.xp || 0) + " XP · " + info.inLevel + "/" + info.per);
    set("game-streak", String(streak));
    const bar = $("#game-xp-bar");
    if (bar) bar.style.width = info.pct + "%";
    const next = $("#game-next");
    if (next) {
      const missing = Math.max(0, info.per - info.inLevel);
      next.textContent = missing === 0
        ? "Nível completo. Continue para o próximo!"
        : "Faltam " + missing + " XP para o nível " + (info.level + 1) + ".";
    }

    const known = CARDS.filter((card) => state.cards[card.id] === "known").length;
    const lessonsDone = LESSONS.filter((entry) => state.lessons[entry.lesson.id]).length;
    const trackLessons = visibleLessons();
    const trackDone = trackLessons.length && trackLessons.every((entry) => state.lessons[entry.lesson.id]);
    const badges = [
      { label: "Primeira aula", icon: "i-book", unlocked: lessonsDone >= 1 },
      { label: "10 flashcards", icon: "i-cards", unlocked: known >= 10 },
      { label: "50 questões", icon: "i-quiz", unlocked: (state.quizStats.answered || 0) >= 50 },
      { label: "Primeiro simulado", icon: "i-trophy", unlocked: (state.examHistory || []).length >= 1 },
      { label: "3 dias seguidos", icon: "i-flame", unlocked: streak >= 3 },
      { label: "Cadeira concluída", icon: "i-check", unlocked: !!trackDone }
    ];
    const host = $("#game-badges");
    if (host) {
      host.innerHTML = badges.map((badge) =>
        '<span class="game-badge ' + (badge.unlocked ? "on" : "off") + '" title="' + esc(badge.label) + (badge.unlocked ? " — conquistado" : " — bloqueado") + '">' +
          svg(badge.icon) + "<small>" + esc(badge.label) + "</small>" +
        "</span>"
      ).join("");
    }
  }


  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    const meta = $('meta[name="theme-color"]');
    if (meta) meta.setAttribute("content", theme === "dark" ? "#151b14" : "#2f5d3a");
    state.theme = theme;
    saveState();
  }

  function initTheme() {
    const theme = state.theme === "dark" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", theme);
    const meta = $('meta[name="theme-color"]');
    if (meta) meta.setAttribute("content", theme === "dark" ? "#151b14" : "#2f5d3a");
  }

  /* ------------------------ seleção de cadeira ------------------- */

  function updateSubjectChrome() {
    const track = selectedTrack();
    const btn = $("#btn-subject");
    const label = $("#subject-btn-label");
    if (!track) {
      if (btn) btn.hidden = true;
      document.body.removeAttribute("data-subject");
      return;
    }
    if (btn) {
      btn.hidden = false;
      btn.dataset.track = track.id;
      btn.setAttribute("aria-label", "Cadeira atual: " + track.name + ". Trocar de cadeira");
    }
    if (label) label.textContent = track.short;
    document.body.setAttribute("data-subject", track.id);
  }

  function openSubjectGate() {
    const gate = $("#subject-gate");
    if (!gate) return;
    const close = $("#btn-close-gate");
    if (close) close.hidden = !selectedTrack();
    gate.hidden = false;
    document.body.classList.add("gate-open");
    const main = document.querySelector("main");
    if (main) main.inert = true;
    const first = gate.querySelector("[data-subject-choice]");
    if (first) first.focus();
  }

  function closeSubjectGate() {
    if (!selectedTrack()) return;
    const gate = $("#subject-gate");
    if (gate) gate.hidden = true;
    document.body.classList.remove("gate-open");
    const main = document.querySelector("main");
    if (main) main.inert = false;
  }

  function selectSubject(trackId) {
    const track = TRACK_BY_ID[trackId];
    if (!track) return;
    if (exam && exam.timer) clearInterval(exam.timer);
    exam = null;
    quiz = null;
    deck = [];
    deckIndex = 0;
    activeLesson = null;
    glossaryQuery = "";
    glossaryLetter = "";
    const glossaryInput = $("#glossary-search");
    if (glossaryInput) glossaryInput.value = "";
    const quizGame = $("#quiz-game");
    const quizResults = $("#quiz-results");
    const quizSetup = $("#quiz-setup");
    if (quizGame) quizGame.hidden = true;
    if (quizResults) quizResults.hidden = true;
    if (quizSetup) quizSetup.hidden = false;
    const examGame = $("#exam-game");
    const examResults = $("#exam-results");
    const examSetup = $("#exam-setup");
    if (examGame) examGame.hidden = true;
    if (examResults) examResults.hidden = true;
    if (examSetup) examSetup.hidden = false;
    state.track = trackId;
    state.examTrack = trackId;
    state.examDate = track.date;
    state.lastLesson = null;
    openModules = new Set([visibleModules()[0] ? visibleModules()[0].id : ""]);
    saveState();
    updateSubjectChrome();
    closeSubjectGate();
    applySubjectToPage();
    navigate("inicio");
    toast("Cadeira selecionada: " + track.name + ".");
  }

  function applySubjectToPage() {
    const track = selectedTrack();
    if (!track) return;
    document.title = track.short + " · Nutrição 2026/2";
    const mods = visibleModules();
    const lessons = visibleLessons();
    const cards = visibleCards();
    const questions = visibleQuestions();

    // Hero
    const eyebrow = $("#hero-eyebrow");
    if (eyebrow) eyebrow.innerHTML = '<span class="dot"></span> ' + esc(track.eyebrow);
    const title = $("#hero-title");
    if (title) title.innerHTML = track.title + '<span class="h1-note">' + esc(track.note) + "</span>";
    const lead = $("#hero-lead");
    if (lead) lead.textContent = track.lead;

    const start = $("#hero-start");
    const first = lessons[0];
    if (start && first) {
      start.dataset.lesson = first.lesson.id;
      start.innerHTML = "Começar por " + esc(track.short) + " " + svg("i-arrow");
    }
    const heroExam = $("#hero-exam");
    if (heroExam) heroExam.innerHTML = svg("i-trophy") + " Simulado de " + esc(track.short);

    const facts = {
      "fact-modules": mods.length,
      "fact-lessons": lessons.length,
      "fact-cards": cards.length,
      "fact-questions": questions.length
    };
    Object.keys(facts).forEach((id) => {
      const el = document.getElementById(id);
      if (el) el.textContent = facts[id];
    });

    // Seções e títulos
    const modulesTitle = $("#home-modules-title");
    if (modulesTitle) modulesTitle.textContent = "Os " + mods.length + " módulos de " + track.short;
    const modulesSub = $("#home-modules-sub");
    if (modulesSub) modulesSub.textContent = mods.length + " módulos, " + lessons.length + " aulas. Cada módulo tem 3 aulas, 10 flashcards e 10 questões próprias.";

    const focusTitle = $("#focus-title");
    if (focusTitle) focusTitle.textContent = "O que mais cai em " + track.short;
    $$("#view-inicio .focus-list [data-subject]").forEach((item) => {
      item.hidden = item.dataset.subject !== track.id;
    });

    const cardsTitle = $("#cards-page-title");
    if (cardsTitle) cardsTitle.textContent = "Flashcards · " + track.short;
    const quizTitle = $("#quiz-page-title");
    if (quizTitle) quizTitle.textContent = "Questões · " + track.short;
    const examTitle = $("#exam-page-title");
    if (examTitle) examTitle.textContent = "Simulado · " + track.short;
    const examDesc = $("#exam-page-desc");
    if (examDesc) examDesc.textContent = "Responda sem consulta e receba o mapa dos erros por módulo. O simulado usa somente " + track.name + ": 20 questões em 30 minutos.";
    const examSubject = $("#exam-subject-label");
    if (examSubject) examSubject.textContent = track.name;

    const strategy = $("#exam-strategy");
    if (strategy) strategy.innerHTML = track.strategy.map((item) => "<li>" + esc(item) + "</li>").join("");

    const resumoTitle = $("#resumo-page-title");
    if (resumoTitle) resumoTitle.textContent = "Resumão · " + track.short;
    const resumoDesc = $("#resumo-page-desc");
    if (resumoDesc) resumoDesc.textContent = "Revisão de véspera de " + track.name + ": números, tabelas, comparações e pegadinhas.";

    const glossaryTitle = $("#glossary-page-title");
    if (glossaryTitle) glossaryTitle.textContent = "Glossário · " + track.short;
    const glossaryEyebrow = $("#glossary-page-eyebrow");
    if (glossaryEyebrow) glossaryEyebrow.textContent = "Dicionário de " + track.name;
    const glossaryDesc = $("#glossary-page-desc");
    if (glossaryDesc) glossaryDesc.textContent = "Termos de " + track.name + " explicados em linguagem direta, com o módulo de origem.";

    const materialsTitle = $("#materials-page-title");
    if (materialsTitle) materialsTitle.textContent = "Materiais · " + track.short;
    const materialsDesc = $("#materials-page-desc");
    if (materialsDesc) materialsDesc.textContent = "Arquivos da professora, links oficiais e referências de " + track.name + ". Os itens gerais (calendário) aparecem em todas as cadeiras.";
    const matModules = $("#materials-stat-modules");
    if (matModules) matModules.textContent = mods.length;
    const matLessons = $("#materials-stat-lessons");
    if (matLessons) matLessons.textContent = lessons.length;

    const planTitle = $("#plan-page-title");
    if (planTitle) planTitle.textContent = "Plano de " + track.short;
    const planEyebrow = $("#plan-page-eyebrow");
    if (planEyebrow) planEyebrow.textContent = track.exam;
    const planDesc = $("#plan-page-desc");
    if (planDesc) planDesc.textContent = "Caminho de estudo de " + track.name + " até a prova. Marque cada tarefa feita.";
    const planCta = $("#plan-cta");
    if (planCta) planCta.innerHTML = "Ver plano de " + esc(track.short) + " " + svg("i-calendar");

    // Abas e painéis do resumão
    $$(".summary-tab[data-subject]").forEach((tab) => {
      tab.hidden = tab.dataset.subject !== track.id;
    });
    $$(".summary-panel[data-subject]").forEach((panel) => {
      panel.hidden = panel.dataset.subject !== track.id;
      panel.classList.remove("active");
    });
    $$(".summary-panel[data-summary-panel='pegadinhas'] .trap-card[data-subject]").forEach((card) => {
      card.hidden = card.dataset.subject !== track.id;
    });
    const firstTab = $$(".summary-tab").find((tab) => !tab.hidden);
    if (firstTab) {
      activateSummaryTab(firstTab.dataset.summaryTab);
    }

    // Re-renderiza tudo que depende da cadeira
    populateSelects();
    renderHome();
    renderSidebar();
    renderContinue();
    renderStats();
    buildDeck();
    updateDeckStats();
    renderQuizSetupMeta();
    renderExamSetupMeta();
    updateExamConfigLabels();
    renderGlossary();
    renderPlan();
    renderMaterials();
    renderGamification();
    updateCountdown();
  }

  function activateSummaryTab(name) {
    $$(".summary-tab").forEach((tab) => {
      const active = tab.dataset.summaryTab === name;
      tab.classList.toggle("active", active);
      tab.setAttribute("aria-selected", active ? "true" : "false");
    });
    $$(".summary-panel").forEach((panel) => {
      panel.classList.toggle("active", panel.dataset.summaryPanel === name && !panel.hidden);
    });
  }


  const VIEWS = $$("[data-view-name]").map((section) => section.dataset.viewName);

  function navigate(view, lesson) {
    if (!selectedTrack()) {
      openSubjectGate();
      return;
    }
    if (VIEWS.indexOf(view) === -1) view = "inicio";
    const target = "#" + view + (lesson ? "/" + lesson : "");
    if (location.hash === target) {
      route();
    } else {
      location.hash = target;
    }
  }

  function route() {
    const raw = location.hash.replace(/^#/, "");
    const parts = raw.split("/");
    const view = VIEWS.indexOf(parts[0]) !== -1 ? parts[0] : "inicio";
    const lesson = parts[1] || null;
    if (!selectedTrack()) {
      showView("inicio");
      openSubjectGate();
      return;
    }
    if (!raw || VIEWS.indexOf(parts[0]) === -1) {
      history.replaceState(null, "", "#inicio");
    }
    showView(view);
    if (view === "aprender") {
      if (lesson) {
        openLesson(lesson);
      } else {
        showLessonEmpty();
      }
    }
  }

  function showView(view) {
    $$(".view").forEach((section) => {
      section.hidden = section.dataset.viewName !== view;
    });
    $$(".main-nav a").forEach((link) => {
      link.classList.toggle("active", link.dataset.view === view);
    });
    $$(".app-tabbar a").forEach((link) => {
      link.classList.toggle("active", link.dataset.view === view);
    });
    closeMenu();
    window.scrollTo(0, 0);
    if (view === "flashcards") {
      ensureDeck();
      renderCard();
    }
    if (view === "questoes") {
      renderQuizSetupMeta();
    }
    if (view === "simulado") {
      renderExamSetupMeta();
    }
    if (view === "materiais") {
      renderMaterials();
    }
    if (view === "glossario") {
      renderGlossary();
    }
    if (view === "plano") {
      renderPlan();
    }
    updateReadingProgress();
  }

  function closeMenu() {
    const nav = $("#main-nav");
    const btn = $("#btn-menu");
    if (nav) nav.classList.remove("open");
    if (btn) btn.setAttribute("aria-expanded", "false");
  }

  /* ---------------------------- início ---------------------------- */

  function renderHomeModules() {
    const host = $("#home-modules");
    if (!host) return;
    host.innerHTML = visibleModules().map((mod) => {
      const done = mod.lessons.filter((lesson) => state.lessons[lesson.id]).length;
      const total = mod.lessons.length;
      const ratio = total ? done / total : 0;
      const circumference = 2 * Math.PI * 15;
      const offset = circumference * (1 - ratio);
      const percent = Math.round(ratio * 100);
      return (
        '<div class="module-card acc-' + esc(mod.accent) + '" role="button" tabindex="0" data-module="' + esc(mod.id) + '" aria-label="Abrir módulo: ' + esc(mod.title) + '">' +
          '<span class="module-icon">' + svg(mod.icon) + "</span>" +
          '<span class="module-body">' +
            "<h3>" + esc(mod.title) + "</h3>" +
            "<p>" + esc(mod.blurb) + "</p>" +
            '<span class="module-meta"><span>' + total + " aulas</span><span>" + (done === total ? "concluído" : done + "/" + total) + "</span></span>" +
          "</span>" +
          '<span class="module-progress" aria-hidden="true">' +
            '<svg viewBox="0 0 36 36"><circle class="bg" cx="18" cy="18" r="15"></circle>' +
            '<circle class="fg" cx="18" cy="18" r="15" stroke-dasharray="' + circumference.toFixed(2) + '" stroke-dashoffset="' + offset.toFixed(2) + '"></circle></svg>' +
            "<span>" + percent + "%</span>" +
          "</span>" +
        "</div>"
      );
    }).join("");
  }

  function renderStats() {
    const lessons = visibleLessons();
    const cards = visibleCards();
    const questions = visibleQuestions();
    const done = lessons.filter((entry) => state.lessons[entry.lesson.id]).length;
    const known = cards.filter((card) => state.cards[card.id] === "known").length;
    const stats = state.trackStats[state.track] || { answered: 0, correct: 0 };
    const answered = stats.answered;
    const correct = stats.correct;
    const accuracy = answered ? Math.round((correct / answered) * 100) : null;

    const set = (id, text) => {
      const el = document.getElementById(id);
      if (el) el.textContent = text;
    };
    const bar = (id, width) => {
      const el = document.getElementById(id);
      if (el) el.style.width = Math.max(0, Math.min(100, width)) + "%";
    };

    set("stat-lessons", done + "/" + lessons.length);
    set("stat-cards", known + "/" + cards.length);
    set("stat-questions", fmtInt(answered));
    set("stat-accuracy", accuracy === null ? "—" : accuracy + "%");
    bar("stat-lessons-bar", pct(done, lessons.length));
    bar("stat-cards-bar", pct(known, cards.length));
    bar("stat-questions-bar", pct(answered, questions.length || 1));
    bar("stat-accuracy-bar", accuracy === null ? 0 : accuracy);
  }

  function renderContinue() {
    const title = $("#continue-title");
    const desc = $("#continue-desc");
    const btn = $("#btn-continue");
    if (!title || !desc || !btn) return;
    const lessons = visibleLessons();
    let target = state.lastLesson ? lessonById(state.lastLesson) : null;
    if (target && state.track && target.module.track !== state.track) target = null;
    if (!target) {
      const entry = lessons.find((item) => !state.lessons[item.lesson.id]) || lessons[0];
      target = entry || null;
    }
    if (!target) {
      title.textContent = "Comece pela primeira aula";
      desc.textContent = "O conteúdo ainda está carregando. Recarregue a página.";
      return;
    }
    const lesson = target.lesson;
    const mod = target.module;
    if (state.lastLesson) {
      title.textContent = "Retomar: " + lesson.title;
      desc.textContent = mod.title + " · " + lesson.minutes + " min. " + stripHtml(lesson.intro);
      btn.innerHTML = "Retomar estudo " + svg("i-arrow");
    } else {
      title.textContent = "Comece pela primeira aula";
      desc.textContent = mod.title + ": " + stripHtml(lesson.intro);
      btn.innerHTML = "Começar agora " + svg("i-arrow");
    }
    btn.dataset.lesson = lesson.id;
    btn.hidden = false;
  }

  function renderHome() {
    renderHomeModules();
    renderStats();
    renderContinue();
  }

  /* --------------------------- aprender --------------------------- */

  function renderSidebar() {
    const host = $("#module-list");
    if (!host) return;
    host.innerHTML = visibleModules().map((mod, mi) => {
      const done = mod.lessons.filter((lesson) => state.lessons[lesson.id]).length;
      const isOpen = openModules.has(mod.id);
      const links = mod.lessons.map((lesson) => {
        const isActive = activeLesson && activeLesson.lesson.id === lesson.id;
        return (
          '<button class="lesson-link' + (state.lessons[lesson.id] ? " done" : "") + (isActive ? " active" : "") + '" data-lesson="' + esc(lesson.id) + '">' +
            '<span class="lesson-dot" aria-hidden="true"></span>' +
            "<span>" + esc(lesson.title) + "</span>" +
          "</button>"
        );
      }).join("");
      return (
        '<div class="module-group acc-' + esc(mod.accent) + (isOpen ? " open" : "") + '" data-module-group="' + esc(mod.id) + '">' +
          '<button class="module-toggle" data-toggle-module="' + esc(mod.id) + '" aria-expanded="' + (isOpen ? "true" : "false") + '">' +
            '<span class="m-ico">' + svg(mod.icon) + "</span>" +
            '<span class="m-title">' + (mi + 1) + ". " + esc(mod.short) + "</span>" +
            '<span class="m-count">' + done + "/" + mod.lessons.length + "</span>" +
            '<svg class="chev" aria-hidden="true"><use href="#i-chevron"></use></svg>' +
          "</button>" +
          '<div class="lesson-links">' + links + "</div>" +
        "</div>"
      );
    }).join("");

    const doneCount = visibleLessons().filter((entry) => state.lessons[entry.lesson.id]).length;
    const totalCount = visibleLessons().length;
    const label = $("#sidebar-progress-label");
    const bar = $("#sidebar-progress-bar");
    if (label) label.textContent = doneCount + " de " + totalCount + " aulas";
    if (bar) bar.style.width = pct(doneCount, totalCount) + "%";
  }

  function showLessonEmpty() {
    activeLesson = null;
    const empty = $("#lesson-empty");
    const article = $("#lesson-article");
    if (empty) empty.hidden = false;
    if (article) article.hidden = true;
    renderSidebar();
  }

  function setCompleteButton() {
    const btn = $("#btn-complete-lesson");
    if (!btn || !activeLesson) return;
    const done = !!state.lessons[activeLesson.lesson.id];
    btn.classList.toggle("is-done", done);
    btn.innerHTML = svg("i-check") + (done ? " Concluída" : " Marcar como concluída");
    btn.setAttribute("aria-pressed", done ? "true" : "false");
  }

  function openLesson(id) {
    const entry = lessonById(id);
    if (!entry || (state.track && entry.module.track !== state.track)) {
      showLessonEmpty();
      return;
    }
    activeLesson = entry;
    state.lastLesson = id;
    openModules.add(entry.module.id);
    saveState();

    const empty = $("#lesson-empty");
    const article = $("#lesson-article");
    if (empty) empty.hidden = true;
    if (article) article.hidden = false;

    const pill = $("#lesson-module-pill");
    if (pill) pill.textContent = "Módulo " + moduleNumberInTrack(entry.module.id) + " · " + entry.module.short;
    const minutes = $("#lesson-minutes");
    if (minutes) minutes.textContent = entry.lesson.minutes;
    const title = $("#lesson-title");
    if (title) title.textContent = entry.lesson.title;
    const intro = $("#lesson-intro");
    if (intro) intro.textContent = stripHtml(entry.lesson.intro);
    const content = $("#lesson-content");
    if (content) content.innerHTML = entry.lesson.content;

    setCompleteButton();
    renderSidebar();

    const trackLessons = visibleLessons();
    const trackIndex = trackLessons.findIndex((item) => item.lesson.id === id);
    const position = $("#lesson-position");
    if (position) {
      position.textContent = "Aula " + (trackIndex + 1) + " de " + trackLessons.length + " · Módulo " + moduleNumberInTrack(entry.module.id) + " de " + visibleModules().length;
    }

    const prev = $("#btn-prev-lesson");
    const next = $("#btn-next-lesson");
    if (prev) prev.disabled = trackIndex <= 0;
    if (next) next.disabled = trackIndex >= trackLessons.length - 1;
  }

  function toggleLessonDone() {
    if (!activeLesson) return;
    const id = activeLesson.lesson.id;
    if (state.lessons[id]) {
      delete state.lessons[id];
      toast("Aula marcada como não concluída.");
    } else {
      state.lessons[id] = true;
      toast("Aula concluída. Bom avanço!");
      addXp(25);
    }
    saveState();
    setCompleteButton();
    renderSidebar();
    renderHome();
  }

  /* -------------------------- flashcards -------------------------- */

  function ensureDeck() {
    if (!deck.length || $("#cards-order").value === "review") {
      buildDeck();
    }
  }

  function buildDeck() {
    const moduleSel = $("#cards-module");
    const orderSel = $("#cards-order");
    const moduleId = moduleSel ? moduleSel.value : "all";
    const order = orderSel ? orderSel.value : "default";
    let list = visibleCards().filter((card) => moduleId === "all" || card.module === moduleId);
    if (order === "review") list = list.filter((card) => state.cards[card.id] === "review");
    if (order === "shuffle") list = shuffle(list);
    deck = list;
    if (deckIndex >= deck.length) deckIndex = 0;
    renderCard();
  }

  function renderCard() {
    const counter = $("#card-counter");
    const moduleLabelEl = $("#card-module-label");
    const front = $("#card-front");
    const back = $("#card-back");
    const flip = $("#flashcard");
    const reviewBtn = $("#btn-card-review");
    const knownBtn = $("#btn-card-known");
    if (!front || !back) return;

    if (!deck.length) {
      if (counter) counter.textContent = "Nenhum cartão neste filtro";
      if (moduleLabelEl) moduleLabelEl.textContent = "";
      front.textContent = "Nada por aqui.";
      back.textContent = "Troque o módulo ou a ordem, ou reinicie o baralho para voltar a ver todos os cartões.";
      if (flip) flip.classList.remove("flipped");
      if (reviewBtn) reviewBtn.disabled = true;
      if (knownBtn) knownBtn.disabled = true;
      updateDeckStats();
      return;
    }

    if (reviewBtn) reviewBtn.disabled = false;
    if (knownBtn) knownBtn.disabled = false;
    if (deckIndex >= deck.length) deckIndex = 0;
    const card = deck[deckIndex];
    const mod = moduleOf(card.module);
    if (counter) counter.textContent = "Cartão " + (deckIndex + 1) + " de " + deck.length;
    if (moduleLabelEl) moduleLabelEl.textContent = mod ? mod.title : "";
    front.textContent = card.front;
    back.textContent = card.back;
    if (flip) {
      flip.classList.remove("flipped");
      flip.setAttribute("aria-pressed", "false");
    }
    updateDeckStats();
  }

  function advanceCard() {
    if (!deck.length) return;
    deckIndex = (deckIndex + 1) % deck.length;
    renderCard();
  }

  function markCard(status) {
    if (!deck.length) return;
    const card = deck[deckIndex];
    const previous = state.cards[card.id];
    state.cards[card.id] = status;
    if (status === "known" && previous !== "known") addXp(3);
    saveState();
    if ($("#cards-order").value === "review") {
      const shouldAdvance = status === "review" && deck.length > 1;
      const nextIndex = shouldAdvance ? (deckIndex + 1) % deck.length : deckIndex;
      buildDeck();
      if (shouldAdvance && deck.length > 1) {
        deckIndex = nextIndex % deck.length;
        renderCard();
      }
    } else {
      advanceCard();
    }
    updateDeckStats();
  }

  function updateDeckStats() {
    const cards = visibleCards();
    const known = cards.filter((card) => state.cards[card.id] === "known").length;
    const review = cards.filter((card) => state.cards[card.id] === "review").length;
    const unseen = cards.length - known - review;
    const set = (id, value) => {
      const el = document.getElementById(id);
      if (el) el.textContent = value;
    };
    set("deck-known", known);
    set("deck-review", review);
    set("deck-unseen", unseen);
    const bar = $("#deck-bar");
    if (bar) bar.style.width = pct(known, cards.length) + "%";
    const note = $("#deck-note");
    if (note) {
      if (known === cards.length && cards.length) {
        note.textContent = "Baralho desta cadeira dominado. Agora revise pelo simulado para manter o conteúdo fresco.";
      } else if (review > 0) {
        note.textContent = "Você tem " + review + " cartão(ões) desta cadeira marcado(s) para revisar. Use a ordem “Só os que preciso revisar”.";
      } else if (known > 0) {
        note.textContent = "Bom ritmo. Faltam " + unseen + " cartões novos desta cadeira para percorrer o baralho inteiro.";
      } else {
        note.textContent = "Comece pelos cartões do módulo que você acabou de estudar.";
      }
    }
  }

  function resetDeck() {
    if (!window.confirm("Reiniciar o progresso dos flashcards desta cadeira?")) return;
    visibleCards().forEach((card) => { delete state.cards[card.id]; });
    saveState();
    buildDeck();
    updateDeckStats();
    renderStats();
    toast("Baralho desta cadeira reiniciado.");
  }

  function openCard(id) {
    const card = CARD_BY_ID[id];
    if (!card || !moduleIsVisible(card.module)) return;
    $("#cards-module").value = card.module;
    $("#cards-order").value = "default";
    deckIndex = 0;
    buildDeck();
    const found = deck.findIndex((item) => item.id === id);
    if (found >= 0) deckIndex = found;
    renderCard();
    navigate("flashcards");
  }

  /* ---------------------------- questões -------------------------- */

  function populateSelects() {
    const mods = visibleModules();
    const options = mods.map((mod) => {
      const index = mods.indexOf(mod) + 1;
      return '<option value="' + esc(mod.id) + '">' + index + ". " + esc(mod.short) + "</option>";
    }).join("");
    ["cards-module", "quiz-module"].forEach((id) => {
      const select = document.getElementById(id);
      if (select) select.innerHTML = '<option value="all">Todos os módulos desta cadeira</option>' + options;
    });
  }

  function filteredQuestions(moduleId, level) {
    return visibleQuestions().filter((q) => (moduleId === "all" || q.module === moduleId) && (level === "all" || q.level === level));
  }

  function startQuiz() {
    if (!selectedTrack()) {
      toast("Escolha uma cadeira para começar o treino.");
      return;
    }
    const moduleId = $("#quiz-module").value;
    const level = $("#quiz-level").value;
    const countValue = $("#quiz-count").value;
    let list = filteredQuestions(moduleId, level);
    if (!list.length) {
      toast("Não há questões com esses filtros.");
      return;
    }
    list = shuffle(list).map(withShuffledOptions);
    if (countValue !== "all") list = list.slice(0, parseInt(countValue, 10) || 10);
    quiz = {
      list: list,
      index: 0,
      answers: new Array(list.length).fill(null),
      selected: null,
      answered: false,
      score: 0
    };
    quizReviewMode = "all";
    $("#quiz-setup").hidden = true;
    $("#quiz-game").hidden = false;
    $("#quiz-results").hidden = true;
    renderQuizQuestion();
    window.scrollTo(0, 0);
  }

  function quizHasAnsweredAll() {
    return !!quiz && quiz.answers.length > 0 && quiz.answers.every(Boolean);
  }

  function renderQuizQuestion() {
    if (!quiz) return;
    const q = quiz.list[quiz.index];
    const mod = moduleOf(q.module);
    const existing = quiz.answers[quiz.index];
    quiz.answered = !!existing;
    quiz.selected = existing ? existing.selected : null;

    const scoreLabel = $("#quiz-score-label");
    if (scoreLabel) scoreLabel.textContent = quiz.score + (quiz.score === 1 ? " acerto" : " acertos");
    $("#quiz-q-module").textContent = trackLabel(q.module) + " · " + (mod ? mod.short : "");
    $("#quiz-q-level").textContent = LEVEL_LABEL[q.level] || q.level;
    $("#quiz-question").textContent = q.prompt;

    const optionsHost = $("#quiz-options");
    optionsHost.innerHTML = q.options.map((option, i) => {
      let cls = "option";
      if (existing) {
        cls += " disabled";
        if (i === q.answer) cls += " correct";
        if (i === existing.selected && !existing.correct) cls += " wrong";
      }
      return '<button class="' + cls + '" data-option="' + i + '" aria-pressed="' + (existing && existing.selected === i ? "true" : "false") + '"' + (existing ? " disabled" : "") + '><span class="letter">' + LETTERS[i] + "</span><span>" + esc(option) + "</span></button>";
    }).join("");

    const feedback = $("#quiz-feedback");
    if (existing) {
      feedback.hidden = false;
      feedback.className = "feedback " + (existing.correct ? "ok" : "no");
      feedback.innerHTML =
        "<strong>" + (existing.correct ? "Resposta correta." : "Não foi essa.") + "</strong>" +
        "<p>" + (existing.correct ? "" : "A resposta correta é <strong>" + LETTERS[q.answer] + ") " + esc(q.options[q.answer]) + "</strong>. ") + esc(q.explanation) + "</p>";
      $("#btn-confirm-quiz").hidden = true;
      $("#btn-confirm-quiz").disabled = true;
      const nextBtn = $("#btn-next-quiz");
      nextBtn.hidden = false;
      nextBtn.innerHTML = (quizHasAnsweredAll() ? "Ver resultado" : "Próxima pendente") + " " + svg("i-arrow");
    } else {
      feedback.hidden = true;
      feedback.className = "feedback";
      feedback.innerHTML = "";
      const confirm = $("#btn-confirm-quiz");
      confirm.hidden = false;
      confirm.disabled = true;
      $("#btn-next-quiz").hidden = true;
    }

    renderQuizPalette();
    updateQuizProgress();
  }

  function renderQuizPalette() {
    const host = $("#quiz-palette");
    if (!host || !quiz) return;
    host.innerHTML = quiz.list.map((q, i) => {
      const answer = quiz.answers[i];
      let cls = "";
      if (answer) cls += answer.correct ? " correct" : " wrong";
      if (i === quiz.index) cls += " current";
      return '<button class="' + cls + '" data-quiz-palette="' + i + '" aria-label="Questão ' + (i + 1) + (answer ? (answer.correct ? ', correta' : ', errada') : ', em branco') + '">' + (i + 1) + "</button>";
    }).join("");
    const finish = $("#btn-finish-quiz");
    if (finish) finish.hidden = !quizHasAnsweredAll();
  }

  function goQuizQuestion(index) {
    if (!quiz || index < 0 || index >= quiz.list.length) return;
    quiz.index = index;
    renderQuizQuestion();
    const palette = $(".quiz-palette");
    if (palette && window.innerWidth < 900) palette.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function selectQuizOption(index) {
    if (!quiz || quiz.answered) return;
    quiz.selected = index;
    $$("#quiz-options .option").forEach((btn, i) => {
      btn.classList.toggle("selected", i === index);
      btn.setAttribute("aria-pressed", i === index ? "true" : "false");
    });
    $("#btn-confirm-quiz").disabled = false;
  }

  function confirmQuizAnswer() {
    if (!quiz || quiz.answered || quiz.selected === null) return;
    const q = quiz.list[quiz.index];
    const correct = quiz.selected === q.answer;
    quiz.answers[quiz.index] = { selected: quiz.selected, correct: correct };
    if (correct) quiz.score += 1;

    state.quizStats.answered += 1;
    if (correct) state.quizStats.correct += 1;
    const trackStats = state.trackStats[state.track] || { answered: 0, correct: 0 };
    trackStats.answered += 1;
    if (correct) trackStats.correct += 1;
    state.trackStats[state.track] = trackStats;
    saveState();

    addXp(correct ? 10 : 2, correct ? "Questão correta" : "Questão respondida");
    renderQuizQuestion();
    renderStats();
  }

  function updateQuizProgress() {
    if (!quiz) return;
    const bar = $("#quiz-progress-bar");
    const answered = quiz.answers.filter(Boolean).length;
    if (bar) bar.style.width = ((answered / quiz.list.length) * 100).toFixed(2) + "%";
    const label = $("#quiz-progress-label");
    if (label) label.textContent = "Questão " + (quiz.index + 1) + " de " + quiz.list.length + " · " + answered + " respondida(s)";
  }

  function nextQuizQuestion() {
    if (!quiz) return;
    if (!quiz.answered) return;
    const nextIndex = quiz.list.findIndex((q, i) => i > quiz.index && !quiz.answers[i]);
    if (nextIndex >= 0) {
      quiz.index = nextIndex;
      renderQuizQuestion();
      return;
    }
    const firstBlank = quiz.answers.findIndex((answer) => !answer);
    if (firstBlank >= 0) {
      quiz.index = firstBlank;
      renderQuizQuestion();
      return;
    }
    finishQuiz();
  }

  function finishQuiz() {
    if (!quiz) return;
    $("#quiz-game").hidden = true;
    $("#quiz-setup").hidden = true;
    $("#quiz-results").hidden = false;

    const total = quiz.list.length;
    const score = quiz.score;
    const percent = pct(score, total);
    $("#quiz-result-score").textContent = score;
    $("#quiz-result-total").textContent = "/ " + total;
    $("#quiz-result-title").textContent = percent >= 90 ? "Excelente!" : percent >= 75 ? "Muito bem!" : percent >= 60 ? "No caminho." : "Hora de revisar.";
    $("#quiz-result-message").textContent =
      "Você acertou " + score + " de " + total + " (" + percent + "%). " +
      (percent >= 75 ? "Mantenha o ritmo e faça o simulado cronometrado." : percent >= 60 ? "Revise os erros abaixo antes de tentar de novo." : "Volte às aulas dos módulos com mais erros e refaça o treino.");

    quizReviewMode = "all";
    $("#btn-quiz-errors").textContent = "Revisar erros";
    renderBreakdown($("#quiz-breakdown"), quiz.list, quiz.answers.map((answer) => answer || null));
    renderQuizReview();
    renderQuizHistory();
    renderQuizSetupMeta();

    const moduleId = $("#quiz-module").value;
    const label = moduleId === "all" ? "Treino de " + (selectedTrack() ? selectedTrack().short : "cadeira") : moduleLabel(moduleId);
    state.quizHistory.unshift({ date: Date.now(), score: score, total: total, label: label, track: state.track });
    state.quizHistory = state.quizHistory.slice(0, 8);
    saveState();
    renderQuizHistory();
    renderStats();
    addXp(15);
    window.scrollTo(0, 0);
  }

  function renderQuizReview() {
    const host = $("#quiz-review");
    if (!host) return;
    let entries = quiz.list.map((q, i) => ({ q: q, a: quiz.answers[i] || null }));
    if (quizReviewMode === "errors") {
      entries = entries.filter((entry) => !entry.a || entry.a.selected !== entry.q.answer);
    }
    if (!entries.length) {
      host.innerHTML = '<p class="empty-state">Nenhum erro neste treino. Muito bem!</p>';
      return;
    }
    host.innerHTML = entries.map((entry) => reviewItem(entry.q, entry.a ? entry.a.selected : null)).join("");
  }

  function reviewItem(q, selected) {
    const ok = selected === q.answer;
    const mod = moduleOf(q.module);
    const your = selected === null || typeof selected === "undefined"
      ? "Em branco"
      : LETTERS[selected] + ") " + q.options[selected];
    return (
      '<article class="review-item ' + (ok ? "ok" : "no") + '">' +
        '<p class="review-origin">' + esc(trackLabel(q.module)) + " · " + esc(mod ? mod.short : "") + " · " + esc(LEVEL_LABEL[q.level] || q.level) + "</p>" +
        '<p class="review-q">' + esc(q.prompt) + "</p>" +
        '<p class="review-answer"><strong>Correta:</strong> ' + LETTERS[q.answer] + ") " + esc(q.options[q.answer]) +
          (ok ? "" : "<br><strong>Sua resposta:</strong> " + esc(your)) + "</p>" +
        '<p class="review-expl">' + esc(q.explanation) + "</p>" +
      "</article>"
    );
  }

  function renderBreakdown(host, questions, answers) {
    if (!host) return;
    const groups = {};
    questions.forEach((q, i) => {
      if (!groups[q.module]) groups[q.module] = { total: 0, correct: 0 };
      groups[q.module].total += 1;
      const answer = answers[i];
      if (answer && answer.selected === q.answer) groups[q.module].correct += 1;
    });
    host.innerHTML = Object.keys(groups).map((moduleId) => {
      const group = groups[moduleId];
      const mod = moduleOf(moduleId);
      const ratio = pct(group.correct, group.total);
      return (
        '<div class="breakdown-item' + (ratio < 60 ? " low" : "") + '">' +
          '<div class="bd-head"><span>' + esc(mod ? mod.short : moduleId) + "</span><span>" + group.correct + "/" + group.total + "</span></div>" +
          '<div class="bd-bar"><i style="width:' + ratio + '%"></i></div>' +
        "</div>"
      );
    }).join("");
  }

  function renderQuizSetupMeta() {
    const stats = state.trackStats[state.track] || { answered: 0, correct: 0 };
    const answered = stats.answered;
    const correct = stats.correct;
    const accuracy = answered ? Math.round((correct / answered) * 100) : null;
    const accuracyEl = $("#quiz-overall-accuracy");
    if (accuracyEl) accuracyEl.textContent = accuracy === null ? "—" : accuracy + "%";
    const countEl = $("#quiz-overall-count");
    if (countEl) countEl.textContent = answered + " questão(ões) respondida(s)";
    renderQuizHistory();
  }

  function renderQuizHistory() {
    const host = $("#quiz-history");
    if (!host) return;
    const history = state.quizHistory.filter((item) => item.track === state.track);
    if (!history.length) {
      host.innerHTML = '<li class="empty-history">Nenhum treino desta cadeira ainda.</li>';
      return;
    }
    host.innerHTML = history.slice(0, 6).map((item) =>
      "<li><span>" + esc(item.label || "Treino") + " · " + dateLabel(item.date) + '</span><span class="h-score">' + item.score + "/" + item.total + "</span></li>"
    ).join("");
  }

  function quitQuiz() {
    quiz = null;
    $("#quiz-game").hidden = true;
    $("#quiz-results").hidden = true;
    $("#quiz-setup").hidden = false;
    renderQuizSetupMeta();
    window.scrollTo(0, 0);
  }

  /* ---------------------------- simulado -------------------------- */

  function examConfig() {
    const track = selectedTrack();
    const id = track ? track.id : null;
    const pool = track ? visibleQuestions() : [];
    const count = Math.min(20, pool.length);
    return {
      id: id,
      mixed: false,
      pool: pool,
      count: count,
      minutes: 30,
      label: track ? track.short : "Simulado"
    };
  }

  function updateExamConfigLabels() {
    const config = examConfig();
    const duration = $("#exam-duration-label");
    const count = $("#exam-count-label");
    const min = $("#exam-min-label");
    const timerStrong = $("#exam-timer strong");
    if (duration) duration.textContent = config.minutes + " minutos";
    if (count) count.textContent = config.count;
    if (min) min.textContent = config.minutes;
    if (timerStrong) timerStrong.textContent = String(config.minutes).padStart(2, "0") + ":00";
    const best = $("#exam-best");
    if (best) {
      const history = state.examHistory.filter((item) => item.track === state.track && (item.label || "") === config.label);
      if (!history.length) {
        best.textContent = "Melhor resultado em " + config.label + ": —";
      } else {
        const top = history.reduce((acc, item) => (item.score / item.total > acc.score / acc.total ? item : acc), history[0]);
        best.textContent = "Melhor resultado em " + config.label + ": " + top.score + "/" + top.total + " (" + pct(top.score, top.total) + "%)";
      }
    }
  }

  function startExam() {
    if (!selectedTrack() || !visibleQuestions().length) {
      toast("Escolha uma cadeira para iniciar o simulado.");
      return;
    }
    if (exam && exam.timer) clearInterval(exam.timer);
    const config = examConfig();
    const total = config.count;
    exam = {
      list: shuffle(config.pool).slice(0, total).map(withShuffledOptions),
      answers: new Array(total).fill(null),
      marked: new Set(),
      index: 0,
      timer: null,
      finished: false,
      minutes: config.minutes,
      label: config.label,
      track: state.track
    };
    examRemaining = config.minutes * 60;
    $("#exam-setup").hidden = true;
    $("#exam-results").hidden = true;
    $("#exam-game").hidden = false;
    renderExamQuestion();
    updateExamTimer();
    exam.timer = setInterval(() => {
      examRemaining -= 1;
      updateExamTimer();
      if (examRemaining <= 0) {
        finishExam(true);
      }
    }, 1000);
    window.scrollTo(0, 0);
  }

  function updateExamTimer() {
    const strong = $("#exam-timer strong");
    if (!strong) return;
    const seconds = Math.max(0, examRemaining);
    const minutes = Math.floor(seconds / 60);
    const rest = seconds % 60;
    strong.textContent = String(minutes).padStart(2, "0") + ":" + String(rest).padStart(2, "0");
  }

  function renderExamQuestion() {
    const q = exam.list[exam.index];
    const mod = moduleOf(q.module);
    $("#exam-q-module").textContent = trackLabel(q.module) + " · " + (mod ? mod.short : "");
    $("#exam-q-level").textContent = LEVEL_LABEL[q.level] || q.level;
    $("#exam-question").textContent = q.prompt;
    $("#exam-options").innerHTML = q.options.map((option, i) =>
      '<button class="option' + (exam.answers[exam.index] === i ? " selected" : "") + '" data-option="' + i + '" aria-pressed="' + (exam.answers[exam.index] === i ? "true" : "false") + '">' +
        '<span class="letter">' + LETTERS[i] + "</span><span>" + esc(option) + "</span>" +
      "</button>"
    ).join("");
    $("#btn-exam-prev").disabled = exam.index === 0;
    $("#btn-exam-next").disabled = exam.index === exam.list.length - 1;
    const markBtn = $("#btn-exam-mark");
    const isMarked = exam.marked.has(exam.index);
    markBtn.textContent = isMarked ? "Desmarcar" : "Marcar para revisar";
    markBtn.classList.toggle("btn-ghost", true);
    updateExamProgress();
    renderExamPalette();
  }

  function selectExamOption(index) {
    if (!exam || exam.finished) return;
    exam.answers[exam.index] = index;
    $$("#exam-options .option").forEach((btn, i) => {
      btn.classList.toggle("selected", i === index);
      btn.setAttribute("aria-pressed", i === index ? "true" : "false");
    });
    updateExamProgress();
    renderExamPalette();
  }

  function updateExamProgress() {
    if (!exam) return;
    const answered = exam.answers.filter((answer) => answer !== null).length;
    $("#exam-progress-label").textContent = answered + " de " + exam.list.length + " respondidas";
  }

  function renderExamPalette() {
    const host = $("#exam-palette");
    if (!host || !exam) return;
    host.innerHTML = exam.list.map((q, i) =>
      '<button class="' + (exam.answers[i] !== null ? "answered " : "") + (exam.marked.has(i) ? "marked " : "") + (i === exam.index ? "current" : "") +
      '" data-palette="' + i + '" aria-label="Questão ' + (i + 1) + (exam.answers[i] !== null ? ", respondida" : ", em branco") + '">' + (i + 1) + "</button>"
    ).join("");
  }

  function goExamQuestion(index) {
    if (!exam || index < 0 || index >= exam.list.length) return;
    exam.index = index;
    renderExamQuestion();
  }

  function toggleExamMark() {
    if (!exam) return;
    if (exam.marked.has(exam.index)) {
      exam.marked.delete(exam.index);
    } else {
      exam.marked.add(exam.index);
    }
    renderExamQuestion();
  }

  function finishExam(auto) {
    if (!exam || exam.finished) return;
    const blanks = exam.answers.filter((answer) => answer === null).length;
    if (!auto && blanks > 0) {
      if (!window.confirm("Você deixou " + blanks + " questão(ões) em branco. Entregar assim mesmo?")) return;
    }
    exam.finished = true;
    if (exam.timer) {
      clearInterval(exam.timer);
      exam.timer = null;
    }

    let score = 0;
    exam.answers.forEach((answer, i) => {
      if (answer !== null && answer === exam.list[i].answer) score += 1;
    });
    const total = exam.list.length;
    const percent = pct(score, total);
    const answered = total - blanks;

    state.quizStats.answered += answered;
    state.quizStats.correct += score;
    const trackStats = state.trackStats[state.track] || { answered: 0, correct: 0 };
    trackStats.answered += answered;
    trackStats.correct += score;
    state.trackStats[state.track] = trackStats;
    state.examHistory.unshift({
      date: Date.now(),
      score: score,
      total: total,
      seconds: exam.minutes * 60 - Math.max(0, examRemaining),
      label: exam.label || (selectedTrack() ? selectedTrack().short : "Simulado"),
      track: exam.track || state.track
    });
    state.examHistory = state.examHistory.slice(0, 8);
    saveState();

    $("#exam-game").hidden = true;
    $("#exam-setup").hidden = true;
    $("#exam-results").hidden = false;
    $("#exam-result-score").textContent = score;
    $("#exam-result-total").textContent = "/ " + total;
    $("#exam-result-title").textContent = percent >= 90 ? "Pronto para a prova!" : percent >= 75 ? "Bom resultado." : percent >= 60 ? "Dá para melhorar." : "Ainda precisa revisar.";
    $("#exam-result-message").textContent =
      "Você acertou " + score + " de " + total + " (" + percent + "%) em " + (auto ? exam.minutes + " minutos" : "tempo livre") + ". " +
      (percent >= 75 ? "Mantenha a revisão dos erros e durma bem antes da prova." : "Volte aos módulos com pior desempenho, releia as aulas e refaça o simulado.");

    renderBreakdown($("#exam-breakdown"), exam.list, exam.answers.map((answer) => ({ selected: answer })));
    $("#exam-review").innerHTML = exam.list.map((q, i) => reviewItem(q, exam.answers[i])).join("");
    renderExamSetupMeta();
    renderStats();
    addXp(40 + score * 2);
    if (auto) toast("Tempo encerrado. Simulado entregue automaticamente.");
    window.scrollTo(0, 0);
  }

  function renderExamSetupMeta() {
    const host = $("#exam-history");
    if (host) {
      const history = state.examHistory.filter((item) => item.track === state.track);
      if (!history.length) {
        host.innerHTML = '<li class="empty-history">Nenhum simulado desta cadeira ainda.</li>';
      } else {
        host.innerHTML = history.slice(0, 6).map((item) =>
          "<li><span>" + esc(item.label || "Simulado") + " · " + dateLabel(item.date) + '</span><span class="h-score">' + item.score + "/" + item.total + "</span></li>"
        ).join("");
      }
    }
    updateExamConfigLabels();
  }

  function retryExam() {
    if (exam && exam.timer) clearInterval(exam.timer);
    exam = null;
    $("#exam-results").hidden = true;
    $("#exam-game").hidden = true;
    $("#exam-setup").hidden = false;
    renderExamSetupMeta();
    window.scrollTo(0, 0);
  }

  /* --------------------------- resumão ---------------------------- */

  function updateCalculators() {
    if (!$("#out-fc")) return;
    const num = (id) => {
      const el = document.getElementById(id);
      if (!el) return NaN;
      const value = parseFloat(el.value);
      return isFinite(value) && value > 0 ? value : NaN;
    };

    const pb = num("calc-fc-pb");
    const pl = num("calc-fc-pl");
    const outFc = $("#out-fc");
    const noteFc = $("#out-fc-note");
    if (!isNaN(pb) && !isNaN(pl)) {
      const fc = pb / pl;
      outFc.textContent = fmt(fc);
      if (fc < 1) {
        noteFc.textContent = "Confira os pesos: o peso bruto deveria ser maior ou igual ao líquido.";
      } else {
        noteFc.textContent = "PB ÷ PL = " + fmt(pb, 0) + " g ÷ " + fmt(pl, 0) + " g. Você compra " + fmt((fc - 1) * 100, 1) + "% a mais do que usa.";
      }
    } else {
      outFc.textContent = "—";
      noteFc.textContent = "Preencha os dois pesos.";
    }

    const raw = num("calc-ic-raw");
    const cooked = num("calc-ic-cooked");
    const outIc = $("#out-ic");
    const noteIc = $("#out-ic-note");
    if (!isNaN(raw) && !isNaN(cooked)) {
      const ic = cooked / raw;
      outIc.textContent = fmt(ic);
      if (ic > 1.001) {
        noteIc.textContent = "IC maior que 1: ganho de " + fmt((ic - 1) * 100, 1) + "%, geralmente por absorção de água.";
      } else if (ic < 0.999) {
        noteIc.textContent = "IC menor que 1: perda de " + fmt((1 - ic) * 100, 1) + "%, geralmente água ou gordura.";
      } else {
        noteIc.textContent = "IC igual a 1: sem ganho ou perda relevante de peso.";
      }
    } else {
      outIc.textContent = "—";
      noteIc.textContent = "Preencha os dois pesos.";
    }

    const perCapita = num("calc-pc");
    const people = num("calc-people");
    const fc = num("calc-fc");
    const outPurchase = $("#out-purchase");
    const notePurchase = $("#out-purchase-note");
    if (!isNaN(perCapita) && !isNaN(people) && !isNaN(fc)) {
      const liquidKg = (perCapita * people) / 1000;
      const purchase = liquidKg * fc;
      outPurchase.textContent = fmt(purchase);
      notePurchase.textContent = fmt(perCapita, 0) + " g × " + fmt(people, 0) + " pessoas = " + fmt(liquidKg) + " kg líquidos × FC " + fmt(fc) + " = " + fmt(purchase) + " kg brutos.";
    } else {
      outPurchase.textContent = "—";
      notePurchase.textContent = "Informe per capita, comensais e FC.";
    }
  }

  /* --------------------------- ferramentas ------------------------ */

  function classifyZ(age, indicator, z) {
    if (indicator === "hfa") {
      if (z < -3) return { label: "Muito baixa estatura para a idade", tone: "low" };
      if (z < -2) return { label: "Baixa estatura para a idade (risco de desnutrição crônica)", tone: "low" };
      return { label: "Estatura adequada para a idade", tone: "ok" };
    }
    if (indicator === "wfa") {
      if (z < -3) return { label: "Muito baixo peso para a idade", tone: "low" };
      if (z < -2) return { label: "Baixo peso para a idade", tone: "low" };
      if (z <= 2) return { label: "Peso adequado para a idade", tone: "ok" };
      return { label: "Peso acima do esperado para a idade — avaliar IMC/idade e contexto", tone: "high" };
    }
    if (indicator === "wfl") {
      if (z < -3) return { label: "Magreza acentuada (peso/comprimento)", tone: "low" };
      if (z < -2) return { label: "Magreza (peso/comprimento)", tone: "low" };
      if (z <= 1) return { label: "Eutrofia (peso/comprimento)", tone: "ok" };
      if (z <= 2) return { label: "Risco de sobrepeso (peso/comprimento)", tone: "high" };
      if (z <= 3) return { label: "Sobrepeso (peso/comprimento)", tone: "high" };
      return { label: "Obesidade (peso/comprimento)", tone: "high" };
    }
    // IMC/idade
    if (z < -3) return { label: "Magreza acentuada (IMC/idade)", tone: "low" };
    if (z < -2) return { label: "Magreza (IMC/idade)", tone: "low" };
    if (age === "0-5") {
      if (z <= 1) return { label: "Eutrofia (IMC/idade 0–5 anos)", tone: "ok" };
      if (z <= 2) return { label: "Risco de sobrepeso (IMC/idade 0–5 anos)", tone: "high" };
      if (z <= 3) return { label: "Sobrepeso (IMC/idade 0–5 anos)", tone: "high" };
      return { label: "Obesidade (IMC/idade 0–5 anos)", tone: "high" };
    }
    if (z <= 1) return { label: "Eutrofia (IMC/idade 5–19 anos)", tone: "ok" };
    if (z <= 2) return { label: "Sobrepeso (IMC/idade 5–19 anos)", tone: "high" };
    if (z <= 3) return { label: "Obesidade (IMC/idade 5–19 anos)", tone: "high" };
    return { label: "Obesidade grave (IMC/idade 5–19 anos)", tone: "high" };
  }

  function updateZTool() {
    const ageEl = $("#z-age");
    const indEl = $("#z-indicator");
    const valueEl = $("#z-value");
    const out = $("#z-output");
    const note = $("#z-note");
    if (!ageEl || !indEl || !valueEl || !out) return;
    const z = parseFloat(String(valueEl.value).replace(",", "."));
    const indicator = indEl.value;
    if (!isFinite(z)) {
      out.className = "z-output";
      out.innerHTML = "<strong>—</strong><span>Preencha o z-escore.</span>";
      if (note) note.textContent = "A classificação aparece aqui.";
      return;
    }
    const result = classifyZ(ageEl.value, indicator, z);
    out.className = "z-output " + result.tone;
    out.innerHTML = "<strong>z = " + z.toFixed(2).replace(".", ",") + "</strong><span>" + esc(result.label) + "</span>";
    if (note) {
      if (indicator === "wfa" && ageEl.value === "5-19") {
        note.textContent = "No SISVAN, peso/idade é usado até 10 anos; dos 10 aos 19, o indicador principal é IMC/idade.";
      } else if (Math.abs(z) > 3) {
        note.textContent = "Valor extremo: interprete com a curva, a clínica e o contexto familiar. Não é diagnóstico isolado.";
      } else {
        note.textContent = "Sempre confirme na curva da referência e avalie a tendência, não só o ponto.";
      }
    }
  }

  /* --------------------------- materiais -------------------------- */

  function materialSubject(item) {
    const text = normalize((item.group || "") + " " + (item.title || ""));
    if (text.indexOf("seguranca alimentar") !== -1) return "san";
    if (text.indexOf("bases") !== -1) return "bases";
    if (text.indexOf("micro") !== -1 || text.indexOf("analises microbiologicas") !== -1) return "micro";
    if (text.indexOf("materno") !== -1) return "materno";
    return "geral";
  }

  function renderMaterials() {
    const host = $("#materials-list");
    if (!host) return;
    if (!MATERIALS.length) {
      host.innerHTML = '<p class="empty-state">Os materiais ainda não foram carregados.</p>';
      return;
    }

    const groups = [];
    MATERIALS.filter((item) => {
      const subject = materialSubject(item);
      return subject === "geral" || subject === state.track;
    }).forEach((item) => {
      let group = groups.find((entry) => entry.name === item.group);
      if (!group) {
        group = { name: item.group, items: [] };
        groups.push(group);
      }
      group.items.push(item);
    });

    host.innerHTML = groups.map((group) => (
      '<section class="materials-group">' +
        '<div class="materials-group-head">' +
          "<h2>" + esc(group.name) + "</h2>" +
          "<span>" + group.items.length + (group.items.length === 1 ? " arquivo" : " arquivos") + "</span>" +
        "</div>" +
        '<div class="materials-grid">' +
          group.items.map((item) => (
            '<a class="material-card" href="' + esc(encodeURI(item.file)) + '" target="_blank" rel="noopener">' +
              '<span class="material-kind">' + esc(item.kind) + "</span>" +
              '<span class="material-copy"><strong>' + esc(item.title) + "</strong><span>" + esc(item.note) + "</span></span>" +
              '<span class="material-open" aria-hidden="true">' + svg("i-arrow") + "</span>" +
            "</a>"
          )).join("") +
        "</div>" +
      "</section>"
    )).join("");
  }

  /* --------------------------- glossário -------------------------- */

  function renderGlossary() {
    const listHost = $("#glossary-list");
    const lettersHost = $("#glossary-letters");
    const empty = $("#glossary-empty");
    if (!listHost) return;
    const base = GLOSSARY.filter((item) => moduleIsVisible(item.module));

    const letters = Array.from(new Set(base.map((item) => normalize(item.term).charAt(0).toUpperCase()).filter(Boolean))).sort();
    if (lettersHost) {
      lettersHost.innerHTML = letters.map((letter) =>
        '<button data-letter="' + esc(letter) + '" class="' + (glossaryLetter === letter ? "active" : "") + '">' + esc(letter) + "</button>"
      ).join("");
    }

    const query = normalize(glossaryQuery);
    const filtered = base.filter((item) => {
      const matchesQuery = !query || normalize(item.term + " " + item.definition).indexOf(query) !== -1;
      const matchesLetter = !glossaryLetter || normalize(item.term).charAt(0).toUpperCase() === glossaryLetter;
      return matchesQuery && matchesLetter;
    }).sort((a, b) => a.term.localeCompare(b.term, "pt-BR"));

    listHost.innerHTML = filtered.map((item) => {
      const mod = moduleOf(item.module);
      return (
        '<article class="glossary-item">' +
          "<h3>" + esc(item.term) + "</h3>" +
          "<p>" + esc(item.definition) + "</p>" +
          '<span class="g-module">' + esc(mod ? mod.title : "Geral") + "</span>" +
        "</article>"
      );
    }).join("");
    if (empty) empty.hidden = filtered.length > 0;
  }

  /* ----------------------------- plano ---------------------------- */

  function renderPlan() {
    const host = $("#plan-list");
    if (!host) return;
    const days = PLAN.filter((day) => !day.track || day.track === state.track);
    let total = 0;
    let done = 0;
    host.innerHTML = days.map((day, index) => {
      const dayDone = day.tasks.filter((task) => state.plan[task.id]).length;
      total += day.tasks.length;
      done += dayDone;
      const tasks = day.tasks.map((task) => {
        const checked = !!state.plan[task.id];
        return (
          '<label class="plan-task">' +
            '<input type="checkbox" data-plan-task="' + esc(task.id) + '"' + (checked ? " checked" : "") + ">" +
            '<span class="plan-check">' + svg("i-check") + "</span>" +
            "<span>" + esc(task.text) +
              ' <span class="p-link" data-plan-view="' + esc(task.view) + '" data-plan-lesson="' + esc(task.lesson || "") + '">abrir</span>' +
            "</span>" +
          "</label>"
        );
      }).join("");
      return (
        '<article class="plan-day">' +
          '<div class="plan-day-head">' +
            '<span class="plan-day-num">' + (index + 1) + "</span>" +
            "<div><h2>" + esc(day.day) + " · " + esc(day.date) + " — " + esc(day.title) + "</h2><p>" + esc(day.focus) + "</p></div>" +
            '<span class="plan-day-progress">' + dayDone + "/" + day.tasks.length + "</span>" +
          "</div>" +
          '<div class="plan-tasks">' + tasks + "</div>" +
        "</article>"
      );
    }).join("");
    const progress = $("#plan-progress");
    if (progress) progress.textContent = pct(done, total) + "%";
  }

  /* ----------------------------- busca ---------------------------- */

  function buildSearchIndex() {
    const index = [];
    LESSONS.forEach((entry) => {
      index.push({
        kind: "Aula",
        track: entry.module.track,
        id: entry.lesson.id,
        title: entry.lesson.title,
        text: entry.module.title + " " + stripHtml(entry.lesson.intro) + " " + stripHtml(entry.lesson.content)
      });
    });
    GLOSSARY.forEach((item) => {
      const mod = moduleOf(item.module);
      index.push({ kind: "Glossário", track: mod ? mod.track : null, id: item.term, title: item.term, text: item.definition });
    });
    CARDS.forEach((card) => {
      const mod = moduleOf(card.module);
      index.push({ kind: "Flashcard", track: mod ? mod.track : null, id: card.id, title: card.front, text: card.back + " " + moduleLabel(card.module) });
    });
    return index;
  }

  const SEARCH_INDEX = buildSearchIndex();

  function renderSearch(query) {
    const host = $("#search-results");
    if (!host) return;
    const term = normalize(query.trim());
    if (term.length < 2) {
      host.innerHTML = '<p class="search-hint">A busca mostra apenas a cadeira selecionada. Digite pelo menos 2 letras.</p>';
      return;
    }
    const matches = [];
    SEARCH_INDEX.forEach((item) => {
      if (state.track && item.track !== state.track) return;
      const haystack = normalize(item.title + " " + item.text);
      const position = haystack.indexOf(term);
      if (position !== -1) {
        const text = item.text.replace(/\s+/g, " ").trim();
        const start = Math.max(0, position - 40);
        matches.push({
          kind: item.kind,
          id: item.id,
          title: item.title,
          snippet: (start > 0 ? "…" : "") + text.slice(start, start + 150) + (text.length > start + 150 ? "…" : ""),
          position: position
        });
      }
    });
    matches.sort((a, b) => a.position - b.position);
    if (!matches.length) {
      host.innerHTML = '<p class="search-hint">Nada encontrado. Tente outra palavra ou um termo mais curto.</p>';
      return;
    }
    host.innerHTML = matches.slice(0, 14).map((item) =>
      '<button class="search-result" data-result-kind="' + esc(item.kind) + '" data-result-id="' + esc(item.id) + '">' +
        '<span class="sr-kind">' + esc(item.kind) + "</span>" +
        '<p class="sr-title">' + esc(item.title) + "</p>" +
        '<p class="sr-snippet">' + esc(item.snippet) + "</p>" +
      "</button>"
    ).join("");
  }

  function openSearch() {
    if (!selectedTrack()) {
      openSubjectGate();
      return;
    }
    const dialog = $("#search-dialog");
    if (!dialog) return;
    if (typeof dialog.showModal === "function") {
      if (!dialog.open) dialog.showModal();
    } else {
      dialog.setAttribute("open", "");
    }
    setTimeout(() => {
      const input = $("#search-input");
      if (input) input.focus();
    }, 40);
  }

  function closeSearch() {
    const dialog = $("#search-dialog");
    if (!dialog) return;
    if (typeof dialog.close === "function") {
      dialog.close();
    } else {
      dialog.removeAttribute("open");
    }
  }

  function handleSearchResult(kind, id) {
    closeSearch();
    if (kind === "Aula") {
      navigate("aprender", id);
    } else if (kind === "Flashcard") {
      openCard(id);
    } else if (kind === "Glossário") {
      glossaryQuery = id;
      glossaryLetter = "";
      $("#glossary-search").value = id;
      navigate("glossario");
      renderGlossary();
    }
  }

  /* --------------------------- contagem --------------------------- */

  function updateCountdown() {
    const target = new Date(state.examDate).getTime();
    const daysEl = $("#cd-days");
    const hoursEl = $("#cd-hours");
    const minEl = $("#cd-min");
    const secEl = $("#cd-sec");
    const note = $("#countdown-note");
    const title = $("#countdown-title");
    const track = selectedTrack() || TRACK_BY_ID[state.examTrack] || TRACKS[0];
    if (title) title.textContent = "Contagem para " + track.short;
    if (!daysEl) return;
    if (!isFinite(target)) {
      [daysEl, hoursEl, minEl, secEl].forEach((el) => { if (el) el.textContent = "—"; });
      if (note) note.textContent = "Data inválida. Use o botão ajustar.";
      return;
    }
    const diff = target - Date.now();
    const safe = Math.max(0, diff);
    const days = Math.floor(safe / 86400000);
    const hours = Math.floor((safe % 86400000) / 3600000);
    const minutes = Math.floor((safe % 3600000) / 60000);
    const seconds = Math.floor((safe % 60000) / 1000);
    daysEl.textContent = String(days);
    hoursEl.textContent = String(hours).padStart(2, "0");
    minEl.textContent = String(minutes).padStart(2, "0");
    secEl.textContent = String(seconds).padStart(2, "0");
    if (note) {
      if (diff <= 0) {
        note.textContent = "A data marcada já passou. Ajuste para acompanhar a contagem da próxima prova.";
      } else if (days === 0) {
        note.textContent = "É hoje. Revise o Resumão e os flashcards marcados para revisar. Nada de assunto novo.";
      } else if (days <= 2) {
        note.textContent = "Reta final: priorize os temas que mais caem e faça um simulado curto.";
      } else {
        note.textContent = "Plano sugerido: um bloco de teoria + um de questões por dia.";
      }
    }
  }

  function updateDateInput() {
    const input = $("#exam-date-input");
    if (input) input.value = state.examDate;
  }

  /* --------------------------- progresso -------------------------- */

  function updateReadingProgress() {
    const bar = $("#reading-progress");
    const topbar = $("#topbar");
    if (topbar) topbar.classList.toggle("scrolled", window.scrollY > 8);
    if (!bar) return;
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const value = max > 0 ? Math.min(1, window.scrollY / max) : 0;
    bar.style.width = (value * 100).toFixed(2) + "%";
  }

  /* ----------------------------- eventos -------------------------- */

  function bindEvents() {
    window.addEventListener("hashchange", route);
    window.addEventListener("scroll", updateReadingProgress, { passive: true });

    document.addEventListener("click", (event) => {
      const go = event.target.closest("[data-go]");
      if (go) {
        const view = go.dataset.go;
        const lesson = go.dataset.lesson || null;
        navigate(view, lesson);
        return;
      }

      const subjectChoice = event.target.closest("[data-subject-choice]");
      if (subjectChoice) {
        selectSubject(subjectChoice.dataset.subjectChoice);
        return;
      }

      const lessonBtn = event.target.closest("[data-lesson]");
      if (lessonBtn) {
        navigate("aprender", lessonBtn.dataset.lesson);
        return;
      }

      const moduleCard = event.target.closest(".module-card[data-module]");
      if (moduleCard) {
        const mod = moduleOf(moduleCard.dataset.module);
        const lesson = nextIncompleteLesson(mod);
        if (lesson) navigate("aprender", lesson.id);
        return;
      }

      const toggle = event.target.closest("[data-toggle-module]");
      if (toggle) {
        const id = toggle.dataset.toggleModule;
        const group = toggle.closest(".module-group");
        const isOpen = group.classList.toggle("open");
        toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
        if (isOpen) openModules.add(id); else openModules.delete(id);
        return;
      }

      const planLink = event.target.closest("[data-plan-view]");
      if (planLink) {
        event.preventDefault();
        event.stopPropagation();
        navigate(planLink.dataset.planView, planLink.dataset.planLesson || null);
        return;
      }

      const searchResult = event.target.closest("[data-result-kind]");
      if (searchResult) {
        handleSearchResult(searchResult.dataset.resultKind, searchResult.dataset.resultId);
        return;
      }
    });

    const btnMenu = $("#btn-menu");
    if (btnMenu) {
      btnMenu.addEventListener("click", () => {
        const nav = $("#main-nav");
        const open = nav.classList.toggle("open");
        btnMenu.setAttribute("aria-expanded", open ? "true" : "false");
      });
    }

    const btnSubject = $("#btn-subject");
    if (btnSubject) btnSubject.addEventListener("click", openSubjectGate);
    const btnCloseGate = $("#btn-close-gate");
    if (btnCloseGate) btnCloseGate.addEventListener("click", closeSubjectGate);
    const gate = $("#subject-gate");
    if (gate) {
      gate.addEventListener("click", (event) => {
        if (event.target === gate) closeSubjectGate();
      });
    }

    const btnTheme = $("#btn-theme");
    if (btnTheme) {
      btnTheme.addEventListener("click", () => {
        applyTheme(document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark");
      });
    }

    const btnSearch = $("#btn-search");
    if (btnSearch) btnSearch.addEventListener("click", openSearch);
    const btnCloseSearch = $("#btn-close-search");
    if (btnCloseSearch) btnCloseSearch.addEventListener("click", closeSearch);
    const searchInput = $("#search-input");
    if (searchInput) {
      searchInput.addEventListener("input", (event) => renderSearch(event.target.value));
    }
    const searchDialog = $("#search-dialog");
    if (searchDialog) {
      searchDialog.addEventListener("close", () => {
        if (searchInput) searchInput.value = "";
        if ($("#search-results")) {
          $("#search-results").innerHTML = '<p class="search-hint">A busca mostra apenas a cadeira selecionada. Digite pelo menos 2 letras.</p>';
        }
      });
    }

    const btnTop = $("#btn-top");
    if (btnTop) btnTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

    const btnComplete = $("#btn-complete-lesson");
    if (btnComplete) btnComplete.addEventListener("click", toggleLessonDone);

    const btnPrev = $("#btn-prev-lesson");
    if (btnPrev) {
      btnPrev.addEventListener("click", () => {
        if (!activeLesson) return;
        const list = visibleLessons();
        const index = list.findIndex((item) => item.lesson.id === activeLesson.lesson.id);
        const prev = list[index - 1];
        if (prev) navigate("aprender", prev.lesson.id);
      });
    }
    const btnNext = $("#btn-next-lesson");
    if (btnNext) {
      btnNext.addEventListener("click", () => {
        if (!activeLesson) return;
        const list = visibleLessons();
        const index = list.findIndex((item) => item.lesson.id === activeLesson.lesson.id);
        const next = list[index + 1];
        if (next) navigate("aprender", next.lesson.id);
      });
    }

    const btnLessonCards = $("#btn-lesson-cards");
    if (btnLessonCards) {
      btnLessonCards.addEventListener("click", () => {
        if (!activeLesson) return;
        $("#cards-module").value = activeLesson.module.id;
        $("#cards-order").value = "default";
        deckIndex = 0;
        buildDeck();
        navigate("flashcards");
      });
    }
    const btnLessonQuiz = $("#btn-lesson-quiz");
    if (btnLessonQuiz) {
      btnLessonQuiz.addEventListener("click", () => {
        if (!activeLesson) return;
        $("#quiz-module").value = activeLesson.module.id;
        $("#quiz-level").value = "all";
        $("#quiz-count").value = "10";
        navigate("questoes");
        toast("Filtro ajustado para " + activeLesson.module.short + ".");
      });
    }

    const flashcard = $("#flashcard");
    if (flashcard) {
      flashcard.addEventListener("click", () => {
        if (!deck.length) return;
        const flipped = flashcard.classList.toggle("flipped");
        flashcard.setAttribute("aria-pressed", flipped ? "true" : "false");
      });
    }
    const btnCardReview = $("#btn-card-review");
    if (btnCardReview) btnCardReview.addEventListener("click", () => markCard("review"));
    const btnCardKnown = $("#btn-card-known");
    if (btnCardKnown) btnCardKnown.addEventListener("click", () => markCard("known"));

    ["cards-module", "cards-order"].forEach((id) => {
      const el = document.getElementById(id);
      if (el) {
        el.addEventListener("change", () => {
          deckIndex = 0;
          buildDeck();
        });
      }
    });
    const btnResetDeck = $("#btn-reset-deck");
    if (btnResetDeck) btnResetDeck.addEventListener("click", resetDeck);

    const btnStartQuiz = $("#btn-start-quiz");
    if (btnStartQuiz) btnStartQuiz.addEventListener("click", startQuiz);
    const quizOptions = $("#quiz-options");
    if (quizOptions) {
      quizOptions.addEventListener("click", (event) => {
        const option = event.target.closest("[data-option]");
        if (option) selectQuizOption(parseInt(option.dataset.option, 10));
      });
    }
    const btnConfirmQuiz = $("#btn-confirm-quiz");
    if (btnConfirmQuiz) btnConfirmQuiz.addEventListener("click", confirmQuizAnswer);
    const btnNextQuiz = $("#btn-next-quiz");
    if (btnNextQuiz) btnNextQuiz.addEventListener("click", nextQuizQuestion);
    const quizPalette = $("#quiz-palette");
    if (quizPalette) {
      quizPalette.addEventListener("click", (event) => {
        const button = event.target.closest("[data-quiz-palette]");
        if (button) goQuizQuestion(parseInt(button.dataset.quizPalette, 10));
      });
    }
    const btnFinishQuiz = $("#btn-finish-quiz");
    if (btnFinishQuiz) {
      btnFinishQuiz.addEventListener("click", () => {
        if (!quiz) return;
        if (!quizHasAnsweredAll()) {
          toast("Responda todas as questões para ver o resultado.");
          return;
        }
        finishQuiz();
      });
    }
    const btnQuitQuiz = $("#btn-quit-quiz");
    if (btnQuitQuiz) btnQuitQuiz.addEventListener("click", quitQuiz);
    const btnQuizRetry = $("#btn-quiz-retry");
    if (btnQuizRetry) {
      btnQuizRetry.addEventListener("click", () => {
        $("#quiz-results").hidden = true;
        $("#quiz-setup").hidden = false;
        quiz = null;
        renderQuizSetupMeta();
        window.scrollTo(0, 0);
      });
    }
    const btnQuizErrors = $("#btn-quiz-errors");
    if (btnQuizErrors) {
      btnQuizErrors.addEventListener("click", () => {
        if (!quiz) return;
        if (quizReviewMode === "all") {
          const errors = quiz.answers.filter((answer, i) => !answer || answer.selected !== quiz.list[i].answer).length;
          if (!errors) {
            toast("Você não errou nenhuma questão neste treino.");
            return;
          }
          quizReviewMode = "errors";
          btnQuizErrors.textContent = "Ver todas";
        } else {
          quizReviewMode = "all";
          btnQuizErrors.textContent = "Revisar erros";
        }
        renderQuizReview();
      });
    }

    const btnStartExam = $("#btn-start-exam");
    if (btnStartExam) btnStartExam.addEventListener("click", startExam);
    const examOptions = $("#exam-options");
    if (examOptions) {
      examOptions.addEventListener("click", (event) => {
        const option = event.target.closest("[data-option]");
        if (option) selectExamOption(parseInt(option.dataset.option, 10));
      });
    }
    const btnExamPrev = $("#btn-exam-prev");
    if (btnExamPrev) btnExamPrev.addEventListener("click", () => { if (exam) goExamQuestion(exam.index - 1); });
    const btnExamNext = $("#btn-exam-next");
    if (btnExamNext) btnExamNext.addEventListener("click", () => { if (exam) goExamQuestion(exam.index + 1); });
    const btnExamMark = $("#btn-exam-mark");
    if (btnExamMark) btnExamMark.addEventListener("click", toggleExamMark);
    const btnFinishExam = $("#btn-finish-exam");
    if (btnFinishExam) btnFinishExam.addEventListener("click", () => finishExam(false));
    const palette = $("#exam-palette");
    if (palette) {
      palette.addEventListener("click", (event) => {
        const button = event.target.closest("[data-palette]");
        if (button) goExamQuestion(parseInt(button.dataset.palette, 10));
      });
    }
    const btnExamReview = $("#btn-exam-review");
    if (btnExamReview) {
      btnExamReview.addEventListener("click", () => {
        const review = $("#exam-review");
        if (review) review.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    }
    const btnExamRetry = $("#btn-exam-retry");
    if (btnExamRetry) btnExamRetry.addEventListener("click", retryExam);

    $$(".summary-tab").forEach((tab) => {
      tab.addEventListener("click", () => {
        $$(".summary-tab").forEach((item) => {
          item.classList.toggle("active", item === tab);
          item.setAttribute("aria-selected", item === tab ? "true" : "false");
        });
        $$(".summary-panel").forEach((panel) => {
          panel.classList.toggle("active", panel.dataset.summaryPanel === tab.dataset.summaryTab);
        });
      });
    });

    ["calc-fc-pb", "calc-fc-pl", "calc-ic-raw", "calc-ic-cooked", "calc-pc", "calc-people", "calc-fc"].forEach((id) => {
      const el = document.getElementById(id);
      if (el) el.addEventListener("input", updateCalculators);
    });

    ["z-age", "z-indicator", "z-value"].forEach((id) => {
      const el = document.getElementById(id);
      if (el) el.addEventListener("input", updateZTool);
      if (el) el.addEventListener("change", updateZTool);
    });
    const btnPrint = $("#btn-print");
    if (btnPrint) btnPrint.addEventListener("click", () => window.print());

    const glossarySearch = $("#glossary-search");
    if (glossarySearch) {
      glossarySearch.addEventListener("input", (event) => {
        glossaryQuery = event.target.value;
        renderGlossary();
      });
    }
    const glossaryLetters = $("#glossary-letters");
    if (glossaryLetters) {
      glossaryLetters.addEventListener("click", (event) => {
        const button = event.target.closest("[data-letter]");
        if (!button) return;
        glossaryLetter = glossaryLetter === button.dataset.letter ? "" : button.dataset.letter;
        renderGlossary();
      });
    }

    const planList = $("#plan-list");
    if (planList) {
      planList.addEventListener("change", (event) => {
        const input = event.target.closest("[data-plan-task]");
        if (!input) return;
        const id = input.dataset.planTask;
        const wasDone = !!state.plan[id];
        if (input.checked) state.plan[id] = true; else delete state.plan[id];
        if (input.checked && !wasDone) addXp(5);
        saveState();
        renderPlan();
      });
    }

    const btnEditDate = $("#btn-edit-date");
    const dateEditor = $("#date-editor");
    if (btnEditDate && dateEditor) {
      btnEditDate.addEventListener("click", () => {
        dateEditor.hidden = !dateEditor.hidden;
        if (!dateEditor.hidden) {
          updateDateInput();
          $("#exam-date-input").focus();
        }
      });
    }
    const btnSaveDate = $("#btn-save-date");
    if (btnSaveDate) {
      btnSaveDate.addEventListener("click", () => {
        const value = $("#exam-date-input").value;
        if (!value || !isFinite(new Date(value).getTime())) {
          toast("Escolha uma data e hora válidas.");
          return;
        }
        state.examDate = value;
        saveState();
        updateCountdown();
        if (dateEditor) dateEditor.hidden = true;
        toast("Data da prova atualizada.");
      });
    }

    document.addEventListener("keydown", (event) => {
      const tag = (event.target.tagName || "").toLowerCase();
      const typing = tag === "input" || tag === "textarea" || tag === "select" || event.target.isContentEditable;
      const card = event.target.closest && event.target.closest(".module-card[data-module]");
      if (card && (event.key === "Enter" || event.key === " ")) {
        event.preventDefault();
        const mod = moduleOf(card.dataset.module);
        const lesson = nextIncompleteLesson(mod);
        if (lesson) navigate("aprender", lesson.id);
        return;
      }
      if ((event.key === "/" || (event.key.toLowerCase() === "k" && (event.ctrlKey || event.metaKey))) && !typing) {
        event.preventDefault();
        openSearch();
        return;
      }
      if (event.key === "Escape") {
        closeMenu();
        const gate = $("#subject-gate");
        if (gate && !gate.hidden) closeSubjectGate();
        return;
      }
      const onCards = !$("#view-flashcards").hidden;
      if (!onCards || typing || !deck.length) return;
      if (event.target.closest && event.target.closest("button, a")) return;
      if (event.code === "Space") {
        event.preventDefault();
        const flipped = $("#flashcard").classList.toggle("flipped");
        $("#flashcard").setAttribute("aria-pressed", flipped ? "true" : "false");
      } else if (event.key === "1") {
        event.preventDefault();
        markCard("review");
      } else if (event.key === "2") {
        event.preventDefault();
        markCard("known");
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        advanceCard();
      }
    });
  }

  /* ------------------------------ init ---------------------------- */

  function init() {
    initTheme();
    updateSubjectChrome();
    bindEvents();
    if (selectedTrack()) {
      applySubjectToPage();
    } else {
      populateSelects();
      renderHome();
      renderSidebar();
      renderContinue();
      renderQuizSetupMeta();
      renderExamSetupMeta();
      renderGlossary();
      renderPlan();
      renderMaterials();
      buildDeck();
      updateDeckStats();
      openSubjectGate();
    }
    updateDateInput();
    updateCalculators();
    updateZTool();
    renderGamification();
    updateCountdown();
    setInterval(updateCountdown, 1000);
    if (!location.hash) history.replaceState(null, "", "#inicio");
    route();
    updateReadingProgress();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
