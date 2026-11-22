// Plano atualizado de Materno Infantil — Prova 2 (18/11)
window.NUT_PLAN = (window.NUT_PLAN || [])
  .filter((day) => day.track !== "materno")
  .concat([
  {
    id: "dm1", track: "materno", day: "Sexta", date: "13/11", title: "Materno: lactente — antropometria",
    focus: "Técnica de peso/comprimento, indicadores e avaliação do RN a termo e prematuro.",
    tasks: [
      { id: "dm1t1", text: "Ler as aulas 1 e 2 do módulo Lactente.", view: "aprender", lesson: "m1l1" },
      { id: "dm1t2", text: "Fazer os flashcards do módulo Lactente.", view: "flashcards" },
      { id: "dm1t3", text: "Responder 10 questões de antropometria do lactente.", view: "questoes" }
    ]
  },
  {
    id: "dm2", track: "materno", day: "Sábado", date: "14/11", title: "Materno: lactente — nutrição + pré-escolar",
    focus: "Micronutrientes de risco, suplementação e comportamento alimentar do pré-escolar.",
    tasks: [
      { id: "dm2t1", text: "Ler a aula de recomendações nutricionais do lactente.", view: "aprender", lesson: "m1l3" },
      { id: "dm2t2", text: "Ler a aula de pré-escolar.", view: "aprender", lesson: "m2l1" },
      { id: "dm2t3", text: "Responder 10 questões de lactente/pré-escolar.", view: "questoes" }
    ]
  },
  {
    id: "dm3", track: "materno", day: "Domingo", date: "15/11", title: "Materno: PNAE e escolar",
    focus: "Alimentação escolar, atuação do nutricionista, lanche e avaliação do escolar.",
    tasks: [
      { id: "dm3t1", text: "Ler as aulas de PNAE e escolar.", view: "aprender", lesson: "m2l2" },
      { id: "dm3t2", text: "Fazer os flashcards de pré-escolar/escolar.", view: "flashcards" },
      { id: "dm3t3", text: "Responder 10 questões de PNAE e escolar.", view: "questoes" }
    ]
  },
  {
    id: "dm4", track: "materno", day: "Segunda", date: "16/11", title: "Materno: adolescente",
    focus: "Puberdade, Tanner, estirão, comportamento, PeNSE e necessidades.",
    tasks: [
      { id: "dm4t1", text: "Ler as 3 aulas de Adolescente.", view: "aprender", lesson: "m3l1" },
      { id: "dm4t2", text: "Fazer os flashcards de Adolescente.", view: "flashcards" },
      { id: "dm4t3", text: "Responder 10 questões de Adolescente.", view: "questoes" }
    ]
  },
  {
    id: "dm5", track: "materno", day: "Terça", date: "17/11", title: "Materno: desnutrição, obesidade e composição corporal",
    focus: "Kwashiorkor/marasmo, MUAC, excesso de peso e modelo de dois compartimentos.",
    tasks: [
      { id: "dm5t1", text: "Ler as 3 aulas do módulo 4.", view: "aprender", lesson: "m4l1" },
      { id: "dm5t2", text: "Fazer o simulado de Materno (20 questões/30 min).", view: "simulado" },
      { id: "dm5t3", text: "Revisar todos os erros do simulado.", view: "simulado" }
    ]
  },
  {
    id: "dm6", track: "materno", day: "Quarta", date: "18/11", title: "Prova de Materno",
    focus: "Pela manhã, releia o Resumão de Materno e os flashcards mais difíceis. Prova às 14h.",
    tasks: [
      { id: "dm6t1", text: "Reler o Resumão de Materno.", view: "resumo" },
      { id: "dm6t2", text: "Revisar flashcards marcados.", view: "flashcards" },
      { id: "dm6t3", text: "Prova 2 de Nutrição Materno Infantil (14h).", view: "inicio" }
    ]
  }
]);
