// Glossário atualizado de Materno Infantil — Prova 2
window.NUT_GLOSSARY = (window.NUT_GLOSSARY || [])
  .filter((item) => ["m1", "m2", "m3", "m4"].indexOf(item.module) === -1)
  .concat([
  { term: "Antropometria", module: "m1", definition: "Medição das dimensões corporais (peso, comprimento/estatura, circunferências, dobras) para avaliar crescimento e estado nutricional." },
  { term: "Peso", module: "m1", definition: "Medida global do corpo; deve ser obtida em balança calibrada, com mínima roupa e condições padronizadas." },
  { term: "Comprimento", module: "m1", definition: "Medida de crianças menores de 2 anos em decúbito dorsal, com infantômetro e dois avaliadores." },
  { term: "Estatura", module: "m1", definition: "Medida de crianças a partir de 2 anos em pé, no estadiômetro, com cabeça no plano de Frankfurt." },
  { term: "Peso/idade", module: "m1", definition: "Indicador que compara peso e idade; identifica baixo peso, mas não diferencia desnutrição aguda de crônica." },
  { term: "Comprimento/estatura para idade", module: "m1", definition: "Indicador de crescimento linear; baixo sugere desnutrição crônica ou outras causas de baixa estatura." },
  { term: "Peso/comprimento", module: "m1", definition: "Indicador de proporção peso-estatura; identifica emagrecimento e sobrepeso/obesidade." },
  { term: "IMC/idade", module: "m1", definition: "Relação peso/estatura ajustada pela idade; usado para triagem de magreza, sobrepeso e obesidade." },
  { term: "Perímetro cefálico", module: "m1", definition: "Circunferência da cabeça; acompanha crescimento cerebral, especialmente até 3 anos." },
  { term: "Idade corrigida", module: "m1", definition: "Idade cronológica menos as semanas que faltaram para 40 semanas. Usada em prematuros para crescimento e desenvolvimento." },
  { term: "AIG, PIG e GIG", module: "m1", definition: "Adequado, pequeno ou grande para a idade gestacional, conforme o peso ao nascer comparado à curva de referência." },
  { term: "Baixo peso ao nascer", module: "m1", definition: "Peso ao nascer inferior a 2.500 g. Muito baixo <1.500 g; extremo <1.000 g." },
  { term: "Micronutrientes de risco no lactente", module: "m1", definition: "Ferro, vitamina D, vitamina A, zinco, iodo e B12 (dietas restritivas); prematuros também cálcio e fósforo." },
  { term: "Neofobia alimentar", module: "m2", definition: "Medo/recusa de alimentos novos, comum no pré-escolar. Manejo com exposição repetida, sem pressão." },
  { term: "PNAE", module: "m2", definition: "Programa Nacional de Alimentação Escolar: alimentação e educação alimentar na educação básica pública." },
  { term: "Lanche escolar", module: "m2", definition: "Refeição intermediária composta por fruta, proteína, carboidrato e água; deve ser prática, segura e nutritiva." },
  { term: "Tanner", module: "m3", definition: "Estágios 1–5 de maturação sexual (mama/genitália e pelos pubianos), usados para contextualizar crescimento e composição corporal." },
  { term: "Estirão do crescimento", module: "m3", definition: "Aceleração do crescimento linear na puberdade, mais precoce em meninas e mais tardia/maior em meninos." },
  { term: "Menarca", module: "m3", definition: "Primeira menstruação, geralmente no Tanner 3–4, após o pico de crescimento; aumenta a necessidade de ferro." },
  { term: "PeNSE", module: "m3", definition: "Pesquisa Nacional de Saúde do Escolar (IBGE), que monitora alimentação, atividade, telas, imagem corporal e saúde mental." },
  { term: "Kwashiorkor", module: "m4", definition: "Desnutrição edematosa, com hipoalbuminemia, alterações de pele/cabelo, apatia e edema; o peso pode ser mascarado." },
  { term: "Marasmo", module: "m4", definition: "Desnutrição energética global, com emagrecimento extremo, sem edema, perda de músculo e gordura." },
  { term: "MUAC / circunferência do braço", module: "m4", definition: "Medida no ponto médio entre acrômio e olecrano; reflete músculo e gordura e ajuda na triagem de desnutrição." },
  { term: "Intervenção não prescritiva", module: "m4", definition: "Abordagem acolhedora e motivacional, com pequenas mudanças e participação da família, sem dietas restritivas ou estigma." },
  { term: "Modelo de dois compartimentos", module: "m4", definition: "Divide o corpo em massa gorda e massa livre de gordura (músculo, osso, água e órgãos)." },
  { term: "Massa livre de gordura", module: "m4", definition: "Componente metabolicamente ativo que inclui músculo, osso, água e órgãos." },
  { term: "Dobras cutâneas", module: "m4", definition: "Medidas de gordura subcutânea; têm erro do avaliador e não medem diretamente a gordura visceral." },
  { term: "Bioimpedância", module: "m4", definition: "Método que estima massa gorda e livre de gordura pela resistência elétrica; depende de hidratação e tem limitações." },
  { term: "DEXA", module: "m4", definition: "Absorciometria de raios X de dupla energia; estima massa gorda, livre de gordura e densidade óssea." }
]);
