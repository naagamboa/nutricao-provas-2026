// Materno Infantil — Prova 2 (atualização 13/11)
window.NUT_CARDS = (window.NUT_CARDS || [])
  .filter((card) => ["m1", "m2", "m3", "m4"].indexOf(card.module) === -1)
  .concat([
  { id: "c001", module: "m1", front: "Como pesar um lactente corretamente?", back: "Balança calibrada, superfície firme, bebê sem roupa/fralda, mesma balança e horário. Se não houver balança pediátrica, pesar o adulto com o bebê e descontar o peso do adulto." },
  { id: "c002", module: "m1", front: "Como medir o comprimento de um lactente?", back: "Menor de 2 anos: em decúbito dorsal, com infantômetro e dois avaliadores. Cabeça na placa fixa, corpo alinhado e pernas estendidas; registrar em cm." },
  { id: "c003", module: "m1", front: "Quais indicadores antropométricos são usados no lactente?", back: "Peso/idade, comprimento/idade, peso/comprimento, IMC/idade e perímetro cefálico." },
  { id: "c004", module: "m1", front: "O que o peso/idade avalia e qual é seu limite?", back: "Avalia baixo peso para a idade. Não diferencia desnutrição aguda de crônica; para isso, usar peso/comprimento e comprimento/idade." },
  { id: "c005", module: "m1", front: "O que significa comprimento/idade baixo?", back: "Baixa estatura para a idade, sugestiva de desnutrição crônica ou outras causas. Avaliar tendência, velocidade e contexto." },
  { id: "c006", module: "m1", front: "Peso/comprimento e IMC/idade: para que servem?", back: "Avaliam a proporção peso-estatura: identificam emagrecimento (magreza) e sobrepeso/obesidade. O IMC/idade ajusta pela idade." },
  { id: "c007", module: "m1", front: "Qual a utilidade do perímetro cefálico?", back: "Acompanhar o crescimento cerebral, especialmente até 3 anos. Valores extremos sugerem microcefalia ou macrocefalia e exigem avaliação." },
  { id: "c008", module: "m1", front: "Classifique o RN por idade gestacional e peso.", back: "Pré-termo <37 semanas; termo 37–42; pós-termo >42. Baixo peso <2.500 g; muito baixo <1.500 g; extremo <1.000 g." },
  { id: "c009", module: "m1", front: "O que é idade corrigida no prematuro?", back: "Idade cronológica menos as semanas que faltaram para 40. Ex.: 32 semanas + 3 meses cronológicos → cerca de 1 mês corrigido. Usada para crescimento/desenvolvimento." },
  { id: "c010", module: "m1", front: "Quais micronutrientes são de risco no lactente?", back: "Ferro, vitamina D, vitamina A, zinco, iodo e B12 (dieta vegana); no prematuro, cálcio e fósforo. Suplementação conforme protocolo, sem decorar doses." },

  { id: "c011", module: "m2", front: "O que caracteriza o comportamento alimentar do pré-escolar?", back: "Desaceleração do crescimento, apetite oscilante, autonomia, neofobia, imitação e maior seletividade. É uma fase de descoberta, não necessariamente doença." },
  { id: "c012", module: "m2", front: "Como manejar a neofobia alimentar?", back: "Exposição repetida sem pressão, variedade, refeições em família e ambiente positivo. Não forçar, chantagear ou distrair com telas." },
  { id: "c013", module: "m2", front: "Como avaliar o pré-escolar?", back: "Peso, estatura, IMC/idade, estatura/idade, curva e velocidade de crescimento; consumo, hábitos, exame físico e contexto familiar." },
  { id: "c014", module: "m2", front: "O que é o PNAE?", back: "Programa Nacional de Alimentação Escolar: oferece alimentação e educação alimentar na educação básica pública, com universalidade, cultura, sustentabilidade e participação social." },
  { id: "c015", module: "m2", front: "Quais são as atribuições do nutricionista no PNAE?", back: "Planejar cardápios, garantir qualidade e segurança, educação alimentar, avaliação, compras e articulação com agricultura familiar e gestão." },
  { id: "c016", module: "m2", front: "Como compor um lanche escolar adequado?", back: "Fruta + proteína (queijo/ovo/iogurte) + carboidrato (pão/tapioca/cuscuz) + água. Evitar ultraprocessados, embutidos, refrigerantes e sucos artificiais." },
  { id: "c017", module: "m2", front: "Quais características marcam o escolar?", back: "Crescimento regular, maior autonomia, influência dos colegas e da publicidade, escola, esporte, sono e tempo de tela." },
  { id: "c018", module: "m2", front: "Quais nutrientes são prioritários no escolar?", back: "Ferro, cálcio, vitamina D, zinco, proteína e fibras, além de frutas, verduras e leguminosas." },
  { id: "c019", module: "m2", front: "Como avaliar nutricionalmente o escolar?", back: "Peso, estatura, IMC/idade, estatura/idade, curva e velocidade; consumo, atividade física, sono e exame físico." },
  { id: "c020", module: "m2", front: "O que priorizar na qualidade da alimentação escolar?", back: "Comida de verdade, frutas/verduras, leguminosas, proteína, água; limitar ultraprocessados, açúcar, sódio e bebidas açucaradas." },

  { id: "c021", module: "m3", front: "Quais hormônios iniciam e conduzem a puberdade?", back: "GnRH (hipotálamo) → LH/FSH (hipófise) → estrogênio/testosterona (gônadas). GH/IGF-1 participam do estirão." },
  { id: "c022", module: "m3", front: "Como é o estirão do crescimento?", back: "Meninas: mais precoce, pico próximo à menarca. Meninos: mais tardio e com maior ganho. Aumentam massa muscular, óssea e necessidades nutricionais." },
  { id: "c023", module: "m3", front: "O que são os estágios de Tanner?", back: "Estágios 1–5 de maturação sexual: mama e pelos pubianos nas meninas; genitália e pelos nos meninos. Ajudam a contextualizar crescimento e composição corporal." },
  { id: "c024", module: "m3", front: "Quando ocorre a menarca em relação a Tanner?", back: "Geralmente no Tanner 3–4, após o pico de crescimento. A menarca aumenta a necessidade de ferro pelas perdas menstruais." },
  { id: "c025", module: "m3", front: "Quais fatores influenciam o comportamento alimentar do adolescente?", back: "Autonomia, amigos, família, escola, renda, redes sociais, imagem corporal, tempo, sono e esporte." },
  { id: "c026", module: "m3", front: "Quais sinais sugerem risco de transtorno alimentar?", back: "Restrição importante, medo de engordar, distorção da imagem, purgação, exercício excessivo, isolamento e alterações de humor/peso." },
  { id: "c027", module: "m3", front: "O que é a PeNSE?", back: "Pesquisa Nacional de Saúde do Escolar (IBGE): monitora alimentação, atividade física, telas, imagem corporal, bullying e saúde mental de estudantes." },
  { id: "c028", module: "m3", front: "Quais nutrientes são prioritários na adolescência?", back: "Energia, proteína, ferro, cálcio, vitamina D e zinco. Meninas com menstruação têm maior risco de anemia." },
  { id: "c029", module: "m3", front: "Como avaliar o adolescente?", back: "Peso, estatura, IMC/idade, estatura/idade, curva, velocidade, Tanner, cintura, consumo, atividade, sono e saúde mental." },
  { id: "c030", module: "m3", front: "Como abordar imagem corporal e alimentação sem julgar?", back: "Escutar, evitar comentários sobre peso/corpo, focar em saúde e autonomia, construir pequenas mudanças e encaminhar em risco de transtorno alimentar." },

  { id: "c031", module: "m4", front: "Quais são os tipos de desnutrição?", back: "Aguda/emagrecimento, crônica/baixa estatura, global; edematosa (kwashiorkor) e não edematosa (marasmo)." },
  { id: "c032", module: "m4", front: "Quais são as características do kwashiorkor?", back: "Edema, hipoalbuminemia, alterações de pele/cabelo, apatia e abdome distendido. O peso pode ser mascarado pelo edema." },
  { id: "c033", module: "m4", front: "Quais são as características do marasmo?", back: "Emagrecimento extremo, sem edema, perda de gordura e músculo, face de “velho”, irritabilidade e apetite variável." },
  { id: "c034", module: "m4", front: "Quais medidas são afetadas na desnutrição?", back: "Peso, peso/comprimento, IMC/idade, estatura/idade (crônica), MUAC e, em casos graves, perímetro cefálico relativo." },
  { id: "c035", module: "m4", front: "Qual o papel da circunferência do braço (MUAC)?", back: "Triagem e acompanhamento da desnutrição aguda; reflete músculo e gordura. É simples e útil quando peso/estatura são difíceis, mas não substitui a avaliação completa." },
  { id: "c036", module: "m4", front: "Como intervir na desnutrição leve a moderada?", back: "Tratar a causa, garantir energia/proteína/micronutrientes, suplementar conforme protocolo, acompanhar crescimento e envolver família/rede." },
  { id: "c037", module: "m4", front: "Como prevenir sobrepeso/obesidade na infância?", back: "Ambiente familiar saudável, água, comida de verdade, menos ultraprocessados, sono, atividade física, escola e políticas públicas." },
  { id: "c038", module: "m4", front: "O que é intervenção não prescritiva na obesidade?", back: "Acolher sem estigma, entender rotina, negociar pequenas mudanças, usar entrevista motivacional, envolver a família e evitar dietas restritivas." },
  { id: "c039", module: "m4", front: "O que é o modelo de dois compartimentos?", back: "Divide o corpo em massa gorda e massa livre de gordura (músculo, osso, água, órgãos). É útil, mas não separa os componentes da MLG." },
  { id: "c040", module: "m4", front: "Quais métodos avaliam composição corporal e quais seus limites?", back: "Dobras (gordura subcutânea), cintura (central), MUAC (músculo/gordura), bioimpedância (MG/MLG), DEXA. Todos têm limitações; interpretar com curva e clínica." }
]);
