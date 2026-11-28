// Análises Microbiológicas — aprofundamento para a A3/Faltantes (04/12)
// Conteúdo baseado nas aulas da Profa. Marjo Cadó Bessa (Moodle) e no estudo dirigido.

window.NUT_MODULES = (window.NUT_MODULES || []).concat([
  {
    id: "x4",
    track: "micro",
    title: "Protocolos e quantificação",
    short: "Protocolos",
    icon: "i-flask",
    accent: "blue",
    blurb: "Salmonella, Staphylococcus aureus, pour-plate, spread-plate e cálculo de UFC.",
    lessons: [
      {
        id: "x4l1",
        title: "Protocolo de Salmonella: do pré-enriquecimento à confirmação",
        minutes: 12,
        intro: "A Salmonella é o patógeno mais cobrado em protocolo. Entenda a lógica de cada etapa em vez de decorar uma lista solta.",
        content: `
<p class="lead"><em>Salmonella</em> é um bacilo Gram-negativo, não esporulado, móvel por flagelos e anaeróbio facultativo. Ela fermenta glicose com gás, em geral não fermenta lactose, produz H<sub>2</sub>S e é urease negativa. O protocolo existe para encontrá-la mesmo quando ela está em número baixo e acompanhada de uma microbiota enorme.</p>

<h3>Por que a análise é feita em etapas</h3>
<p>Alimentos como ovos, aves, carnes, leite cru e vegetais fatiados podem ter poucas células de <em>Salmonella</em> competindo com milhões de outras bactérias. Se você plaqueasse a amostra direto, as colônias de <em>Salmonella</em> desapareceriam no meio da microbiota. Por isso o protocolo usa quatro ideias em sequência:</p>
<ol>
  <li><strong>Recuperar</strong> células injuriadas em um meio não seletivo.</li>
  <li><strong>Multiplicar</strong> a <em>Salmonella</em> em um meio seletivo líquido.</li>
  <li><strong>Separar</strong> colônias em meios seletivos e diferenciais sólidos.</li>
  <li><strong>Confirmar</strong> a identidade com provas bioquímicas e sorologia.</li>
</ol>

<h3>Passo a passo do protocolo</h3>
<table>
  <thead><tr><th>Etapa</th><th>O que se faz</th><th>Por que</th></tr></thead>
  <tbody>
    <tr><td><strong>Pré-enriquecimento</strong></td><td>25 g do alimento + 225 mL de água peptonada tamponada (BPW), homogeneizar e incubar a 37 °C por 18–24 h.</td><td>Dilui substâncias inibidoras, reidrata e recupera células que sofreram calor, frio ou secagem. A proporção 1:10 é clássica.</td></tr>
    <tr><td><strong>Enriquecimento seletivo</strong></td><td>Transferir 0,1 mL do BPW para 10 mL de caldo Rappaport-Vassiliadis (RV) e incubar a 42 °C por 24 h. Em paralelo, 1 mL para 10 mL de caldo tetrationato (TT) a 37 °C ou 43 °C.</td><td>O RV é muito seletivo e favorece <em>Salmonella</em>; o TT inibe a microbiota acompanhante. Usar os dois aumenta a chance de recuperação.</td></tr>
    <tr><td><strong>Plaqueamento seletivo-diferencial</strong></td><td>Semear em ágar XLD e em ágar bismuto sulfito (BS) ou Hektoen. Incubar a 37 °C por 24 h.</td><td>O XLD diferencia pela fermentação da xilose, descarboxilação da lisina e produção de H<sub>2</sub>S; o BS é seletivo pelo bismuto e pelo verde brilhante.</td></tr>
    <tr><td><strong>Confirmação</strong></td><td>Escolher colônias típicas, semear em ágar nutriente e fazer TSI, LIA, urease, citrato, indol e oxidase; depois sorologia com antissoros O e H.</td><td>Colônia típica não é diagnóstico. Só a combinação de bioquímica e antígenos confirma o gênero/sorovar.</td></tr>
  </tbody>
</table>

<h3>Como reconhecer as colônias</h3>
<table>
  <thead><tr><th>Meio</th><th>Colônia típica de <em>Salmonella</em></th><th>Outras colônias</th></tr></thead>
  <tbody>
    <tr><td>XLD</td><td>Vermelhas, com centro negro brilhante (H<sub>2</sub>S).</td><td><em>Shigella</em>: vermelhas sem centro negro. <em>E. coli</em>: amarelas. <em>Proteus</em>: centro negro e borda vermelha, mas com odor forte e swarm.</td></tr>
    <tr><td>BS</td><td>Pretas, com brilho metálico; o meio ao redor pode ficar escuro.</td><td>Outras colônias verdes ou marrons.</td></tr>
    <tr><td>Hektoen</td><td>Verde-azuladas ou azul-esverdeadas, com centro negro.</td><td><em>E. coli</em>: amarela/laranja. <em>Shigella</em>: verde sem centro negro.</td></tr>
  </tbody>
</table>

<h3>Provas bioquímicas que fecham o diagnóstico</h3>
<table>
  <thead><tr><th>Teste</th><th>Resultado esperado em <em>Salmonella</em></th><th>Leitura</th></tr></thead>
  <tbody>
    <tr><td>TSI</td><td>Glicose +, lactose −, sacarose −, gás +, H<sub>2</sub>S +</td><td>Base amarela, ápice vermelho, bolhas e precipitado negro.</td></tr>
    <tr><td>LIA</td><td>Lisina descarboxilase +, H<sub>2</sub>S +</td><td>Ápice roxo e fundo negro.</td></tr>
    <tr><td>Urease</td><td>Negativa</td><td>Meio não fica rosa intenso.</td></tr>
    <tr><td>Citrato</td><td>Variável (muitas cepas positivas)</td><td>Meio azul.</td></tr>
    <tr><td>Indol</td><td>Negativo</td><td>Papel permanece amarelo.</td></tr>
    <tr><td>Oxidase</td><td>Negativa</td><td>Não escurece a fita reagente.</td></tr>
  </tbody>
</table>

<div class="callout exam"><strong>O que mais cai</strong><p>Não confunda <strong>enriquecimento</strong> com <strong>pré-enriquecimento</strong>. O pré-enriquecimento é líquido, não seletivo e serve para recuperar células estressadas (BPW, 37 °C). O enriquecimento seletivo usa RV ou TT para multiplicar <em>Salmonella</em> e inibir a microbiota. O plaqueamento vem depois, em XLD/BS.</p></div>

<h3>Padrão microbiológico</h3>
<p>A RDC 12/2001, usada durante anos no Brasil, estabelecia para <em>Salmonella</em> spp. o critério de <strong>ausência em 25 g</strong> em grande parte dos alimentos. A IN 161/2022 consolidou e atualizou os padrões microbiológicos; a lógica continua a mesma: pesquisa de presença/ausência em 25 g, e não contagem. Em prova, se a pergunta citar RDC 12/2001, responda “ausência em 25 g”.</p>
<p class="mini-note">A dose infectante da salmonelose é relativamente baixa (cerca de 10<sup>5</sup>–10<sup>8</sup> células nos slides; a febre tifóide é mais baixa, ~10<sup>3</sup>). O período de incubação da gastroenterite é de 8–48 h; a febre tifóide, 7–21 dias.</p>

<h3>Erros que derrubam a resposta</h3>
<ul>
  <li>Dizer que o XLD é um meio de enriquecimento: ele é <strong>seletivo-diferencial sólido</strong>.</li>
  <li>Achar que a colônia preta no BS já confirma <em>Salmonella</em>: precisa de bioquímica e sorologia.</li>
  <li>Esquecer que <em>Salmonella</em> é oxidase negativa e urease negativa.</li>
  <li>Trocar os tempos: BPW 18–24 h a 37 °C; RV 42 °C; plaqueamento 37 °C.</li>
</ul>
`
      },
      {
        id: "x4l2",
        title: "Protocolo de Staphylococcus aureus: Baird-Parker e coagulase",
        minutes: 12,
        intro: "O protocolo de S. aureus é o mais provável de aparecer com cálculo e com os porquês do meio seletivo-diferencial.",
        content: `
<p class="lead"><em>Staphylococcus aureus</em> é um coco Gram-positivo em cachos, catalase positivo e coagulase positivo. Ele é halotolerante, psicrotolerante e cresce bem em alimentos com pouca água disponível. O problema não é só a bactéria: as enterotoxinas (SEA a SEE) são <strong>termoestáveis</strong> e continuam ativas depois do aquecimento.</p>

<h3>Quadro clínico que ajuda a lembrar o protocolo</h3>
<table>
  <thead><tr><th>Aspecto</th><th>Intoxicação estafilocócica</th></tr></thead>
  <tbody>
    <tr><td>Mecanismo</td><td>Intoxicação: a toxina já está formada no alimento.</td></tr>
    <tr><td>Incubação</td><td>1–6 h (curta).</td></tr>
    <tr><td>Sintomas</td><td>Vômitos intensos, náuseas, cólica, diarreia; geralmente <strong>sem febre</strong>.</td></tr>
    <tr><td>Recuperação</td><td>Cerca de 24 h; tratamento é reposição de fluidos.</td></tr>
    <tr><td>Alimentos</td><td>Carnes processadas, salada de batata, leite e queijos, alimentos manipulados e deixados em temperatura ambiente.</td></tr>
    <tr><td>Prevenção</td><td>Higiene das mãos e do preparo; refrigeração rápida. A toxina resiste a &gt;100 °C por 30 min; a bactéria morre com &lt;10 °C ou &gt;60 °C.</td></tr>
  </tbody>
</table>

<h3>Protocolo ISO 6888-1</h3>
<table>
  <thead><tr><th>Etapa</th><th>Procedimento</th><th>Objetivo</th></tr></thead>
  <tbody>
    <tr><td>Diluição inicial</td><td>10 g da amostra + 90 mL de água peptonada → diluição 10<sup>−1</sup>.</td><td>Homogeneizar e iniciar a diluição seriada.</td></tr>
    <tr><td>Diluições</td><td>1 mL em 9 mL de água peptonada → 10<sup>−2</sup>, 10<sup>−3</sup> etc.</td><td>Obter placas com contagem entre 15 e 300 colônias.</td></tr>
    <tr><td>Inoculação</td><td>0,1 mL de cada diluição na superfície do ágar Baird-Parker, espalhar com alça de Drigalski (spread-plate).</td><td>Distribuir a amostra e permitir colônias isoladas.</td></tr>
    <tr><td>Incubação</td><td>37 °C por 48 h.</td><td>Colônias típicas e reação de tellurito/gema.</td></tr>
    <tr><td>Contagem</td><td>Escolher placa com 15–300 colônias; contar típicas e atípicas separadamente.</td><td>Evitar placas superlotadas ou com poucas colônias.</td></tr>
    <tr><td>Confirmação</td><td>Selecionar no mínimo 5 colônias típicas → caldo BHI 37 °C/24 h → teste da coagulase com plasma de coelho.</td><td>Diferenciar <em>S. aureus</em> de outros estafilococos coagulase-negativos.</td></tr>
  </tbody>
</table>

<h3>Por que o Baird-Parker é seletivo e diferencial</h3>
<table>
  <thead><tr><th>Componente</th><th>Função</th><th>Leitura</th></tr></thead>
  <tbody>
    <tr><td>Telurito de potássio</td><td>Inibe a maioria das bactérias acompanhantes; é reduzido por <em>S. aureus</em>.</td><td>Colônias pretas ou cinzas-escuras.</td></tr>
    <tr><td>Glicina e cloreto de lítio</td><td>Selecionam estafilococos.</td><td>Reduzem a microbiota Gram-negativa.</td></tr>
    <tr><td>Gema de ovo</td><td>Fonte de lecitina e lipídios.</td><td>Halo opaco (lipase) e halo transparente (lecitinase) ao redor da colônia.</td></tr>
    <tr><td>Piruvato de sódio</td><td>Estimula o crescimento e a recuperação de células injuriadas.</td><td>Ajuda a visualizar colônias típicas.</td></tr>
  </tbody>
</table>
<p><strong>Colônia típica:</strong> circular, lisa, convexa, preta ou cinza, com bordas perfeitas, às vezes com uma massa esbranquiçada na borda e um halo opaco/transparente ao redor.</p>

<div class="callout exam"><strong>Complete a frase da prova</strong><p>O meio seletivo e diferencial é o <strong>ágar Baird-Parker</strong>. Ele é seletivo porque contém <strong>telurito de potássio</strong> (e também glicina e cloreto de lítio) para inibir a maioria das bactérias. É diferencial porque contém <strong>gema de ovo</strong>, que evidencia dois halos (lecitinase e lipase), e o <strong>telurito</strong>, que dá a cor preta pela redução.</p></div>

<h3>Teste da coagulase</h3>
<p>O teste usa plasma de coelho. Em um tubo, colocar 0,3 mL de plasma e 0,1 mL da cultura em BHI; incubar a 37 °C e observar até 6 h. Se negativo, deixar até 24 h. A coagulase converte o fibrinogênio em fibrina e forma um coágulo. <em>S. aureus</em> é coagulase positivo; a maioria dos outros estafilococos é negativa.</p>

<h3>Cálculo</h3>
<p>Como o spread-plate inocula <strong>0,1 mL</strong>, o resultado por grama ou mililitro é:</p>
<p><strong>UFC/g = n × FD × 10</strong>, em que <em>n</em> é o número de colônias contadas e <em>FD</em> é o fator da diluição (10<sup>2</sup> para 10<sup>−2</sup>, 10<sup>3</sup> para 10<sup>−3</sup>...). O “×10” corrige o volume de 0,1 mL para 1 mL.</p>

<h3>Padrão microbiológico</h3>
<p>A RDC 12/2001 estabelecia limites de <em>S. aureus</em> que variavam com o alimento, em geral na faixa de 10<sup>2</sup>–10<sup>3</sup> UFC/g. A IN 161/2022 atualizou os padrões. Em prova, o importante é saber que se trata de <strong>contagem</strong> (não presença/ausência) e que o limite depende da matriz.</p>

<h3>Erros comuns</h3>
<ul>
  <li>Dizer que a toxina é destruída pelo reaquecimento: ela é termoestável.</li>
  <li>Confundir coagulase com catalase: <em>S. aureus</em> é positivo nas duas, mas a coagulase é o teste confirmatório do protocolo.</li>
  <li>Esquecer o “×10” do spread-plate.</li>
  <li>Achar que o Baird-Parker é um caldo de enriquecimento: ele é ágar sólido seletivo-diferencial.</li>
</ul>
`
      },
      {
        id: "x4l3",
        title: "Cálculo de UFC: pour-plate, spread-plate e escolha da diluição",
        minutes: 13,
        intro: "A conta é simples, mas a prova troca volume, diluição e limite de contagem. Fixe a lógica do fator de correção.",
        content: `
<p class="lead">UFC significa <strong>Unidade Formadora de Colônia</strong>. Uma colônia pode ter nascido de uma única célula ou de um agrupamento de células; por isso o resultado é expresso em UFC, e não em “células”. O cálculo combina a contagem da placa, o fator de diluição e o volume inoculado.</p>

<h3>Pour-plate x spread-plate</h3>
<table>
  <thead><tr><th></th><th>Pour-plate (plaqueamento em profundidade)</th><th>Spread-plate (plaqueamento em superfície)</th></tr></thead>
  <tbody>
    <tr><td>Como é feito</td><td>1 mL da diluição é colocado na placa vazia; adiciona-se o ágar fundido e mistura-se antes de solidificar.</td><td>0,1 mL da diluição é pipetado sobre o ágar já solidificado e espalhado com alça de Drigalski.</td></tr>
    <tr><td>Volume considerado</td><td>1 mL</td><td>0,1 mL</td></tr>
    <tr><td>Fator de correção</td><td>Não tem</td><td>×10 (para transformar 0,1 mL em 1 mL)</td></tr>
    <tr><td>Fórmula</td><td><strong>UFC/g = n × FD</strong></td><td><strong>UFC/g = n × FD × 10</strong></td></tr>
    <tr><td>Vantagem</td><td>Boa para amostras com muitos microrganismos e para anaeróbios facultativos; colônias dentro e na superfície.</td><td>Colônias na superfície, mais fácil de contar e de observar morfologia; útil para aeróbios.</td></tr>
    <tr><td>Limite de contagem</td><td>30–300 colônias (bactérias); 15–150 para enterobactérias; 25–250 para bactérias lácticas.</td><td>30–300 colônias; 15–300 para <em>S. aureus</em> (ISO 6888-1).</td></tr>
  </tbody>
</table>

<h3>O que é o fator de diluição (FD)</h3>
<p>Se a placa escolhida foi a diluição 10<sup>−4</sup>, o FD é 10<sup>4</sup> = 10.000. Se foi 10<sup>−5</sup>, FD = 100.000. A conta sempre usa a diluição <strong>da placa contada</strong>, não a diluição inicial.</p>
<p><strong>Exemplo 1 — pour-plate:</strong> contagem de 190 colônias na diluição 10<sup>−6</sup>.<br>
UFC/mL = 190 × 10<sup>6</sup> = 1,9 × 10<sup>8</sup> UFC/mL.</p>
<p><strong>Exemplo 2 — spread-plate:</strong> contagem de 225 colônias na diluição 10<sup>−5</sup>.<br>
UFC/mL = 225 × 10<sup>5</sup> × 10 = 2,25 × 10<sup>8</sup> UFC/mL.</p>

<h3>Estudo dirigido resolvido</h3>
<table>
  <thead><tr><th>Método</th><th>Contagens</th><th>Placa escolhida</th><th>Resultado</th></tr></thead>
  <tbody>
    <tr><td>Pour-plate</td><td>10<sup>−2</sup>: 1500; 10<sup>−3</sup>: 800; 10<sup>−4</sup>: 540; 10<sup>−5</sup>: 350; 10<sup>−6</sup>: 190</td><td>10<sup>−6</sup> (190 está entre 30 e 300)</td><td>190 × 10<sup>6</sup> = <strong>1,9 × 10<sup>8</sup> UFC/mL</strong></td></tr>
    <tr><td>Spread-plate</td><td>10<sup>−2</sup>: 740; 10<sup>−3</sup>: 520; 10<sup>−4</sup>: 340; 10<sup>−5</sup>: 225</td><td>10<sup>−5</sup> (225 está entre 30 e 300)</td><td>225 × 10<sup>5</sup> × 10 = <strong>2,25 × 10<sup>8</sup> UFC/mL</strong></td></tr>
    <tr><td>Bactérias lácticas (MRS, pour-plate, 25–250)</td><td>10<sup>0</sup>: 300; 10<sup>−1</sup>: 30; 10<sup>−2</sup>: 2; 10<sup>−3</sup>: 0</td><td>10<sup>−1</sup> (30 está entre 25 e 250)</td><td>30 × 10<sup>1</sup> = <strong>3,0 × 10<sup>2</sup> UFC/g</strong></td></tr>
  </tbody>
</table>

<h3>Bactérias lácticas (MRS)</h3>
<p><strong>Importância da contagem:</strong> as bactérias lácticas são usadas como culturas starter em iogurte, queijos e fermentados; sua contagem indica se a fermentação ocorreu como esperado, se o produto terá acidez e vida de prateleira adequadas e se há risco de deterioração (acidificação excessiva, slime, gás). Em probióticos, a contagem também é usada para garantir a dose de UFC por porção.</p>
<p><strong>Cuidado na incubação:</strong> o MRS é seletivo para <em>Lactobacillus</em>, mas exige condições controladas. Incubar em temperatura estável (cerca de 30–37 °C), pelo tempo previsto (em geral 48–72 h), em anaerobiose ou microaerofilia (jarra anaeróbia ou sobrecamada de ágar no pour-plate), evitando dessecação e contaminação. A contagem deve ser feita na diluição que resulte em 25–250 colônias.</p>
<p><strong>No estudo dirigido:</strong> MRS, pour-plate, 10<sup>0</sup>: 300; 10<sup>−1</sup>: 30; 10<sup>−2</sup>: 2; 10<sup>−3</sup>: 0. A placa válida é a 10<sup>−1</sup> (30 colônias), então UFC/g = 30 × 10<sup>1</sup> = <strong>3,0 × 10<sup>2</sup></strong>.</p>

<h3>Como escolher a placa</h3>
<ol>
  <li>Procure a diluição cuja contagem esteja dentro do limite do método.</li>
  <li>Se duas diluições consecutivas estiverem dentro do limite, o ideal é usar a menor diluição (mais colônias) ou o cálculo ponderado previsto no método. Em prova, normalmente basta escolher a que está dentro da faixa.</li>
  <li>Se todas estiverem acima do limite, o resultado é “estimado” ou “>&nbsp;limite superior”; se todas estiverem abaixo, “&lt; limite inferior”.</li>
  <li>Nunca multiplique por 10 no pour-plate nem esqueça o ×10 no spread-plate.</li>
</ol>

<div class="callout exam"><strong>Pegadinhas de prova</strong><p>(1) A diluição 10<sup>−2</sup> tem FD = 100, não 2. (2) O spread-plate inocula 0,1 mL, por isso o ×10. (3) O pour-plate inocula 1 mL, por isso não tem ×10. (4) O limite de contagem muda com o método: 15–150 para enterobactérias, 15–300 para <em>S. aureus</em>, 25–250 para lácticas.</p></div>

<h3>Unidades</h3>
<p>Para líquidos, o resultado é UFC/mL; para sólidos, UFC/g. Se a amostra foi diluída em 90 mL (10 g + 90 mL), a diluição 10<sup>−1</sup> já representa 0,1 g/mL. O cálculo com FD continua o mesmo.</p>
`
      }
    ]
  },
  {
    id: "x5",
    track: "micro",
    title: "Fungos e micotoxinas",
    short: "Fungos",
    icon: "i-flask",
    accent: "blue",
    blurb: "Leveduras, bolores, reprodução, indústria, deterioração e micotoxinas.",
    lessons: [
      {
        id: "x5l1",
        title: "Fungos: morfologia, reprodução e metabolismo",
        minutes: 12,
        intro: "Separe levedura de fungo filamentoso e entenda por que fungo cresce onde bactéria não cresce.",
        content: `
<p class="lead">Fungos são eucariotos, heterotróficos, com parede de quitina e sem clorofila. Isso muda tudo: eles não fazem fotossíntese, crescem bem em pH ácido e toleram baixa atividade de água. São os principais deteriorantes de pães, frutas, grãos e alimentos com pouca umidade.</p>

<h3>Leveduras x fungos filamentosos</h3>
<table>
  <thead><tr><th></th><th>Leveduras</th><th>Fungos filamentosos (bolores)</th></tr></thead>
  <tbody>
    <tr><td>Organização</td><td>Unicelulares</td><td>Multicelulares, formados por hifas</td></tr>
    <tr><td>Reprodução</td><td>Brotamento (gemulação) e fissão binária</td><td>Esporos sexuados e assexuados (conídios, esporangiosporos)</td></tr>
    <tr><td>Corpo</td><td>Célula oval; pode formar pseudo-hifas</td><td>Micélio vegetativo (nutrição) e micélio aéreo/reprodutivo</td></tr>
    <tr><td>Colônia</td><td>Lisa, cremosa, pastosa</td><td>Algodonosa, veludosa, com pigmentos</td></tr>
    <tr><td>Exemplos</td><td><em>Saccharomyces cerevisiae</em>, <em>Candida</em>, <em>Torulopsis</em></td><td><em>Penicillium</em>, <em>Aspergillus</em>, <em>Rhizopus</em>, <em>Mucor</em>, <em>Fusarium</em></td></tr>
  </tbody>
</table>

<h3>Estruturas dos filamentosos</h3>
<ul>
  <li><strong>Hifa:</strong> cada filamento individual.</li>
  <li><strong>Micélio:</strong> conjunto de hifas que forma o corpo do fungo; não é tecido verdadeiro.</li>
  <li><strong>Hifas septadas:</strong> têm paredes transversais (septos) que dividem os compartimentos; exemplo <em>Penicillium</em>.</li>
  <li><strong>Hifas não septadas (cenocíticas):</strong> sem septos regulares; exemplo <em>Rhizopus</em>.</li>
  <li><strong>Conídios:</strong> esporos assexuados formados na ponta de conidióforos; dão o aspecto de “pincel” em <em>Penicillium</em>.</li>
  <li><strong>Esporangiosporos:</strong> esporos dentro de um esporângio, típicos de <em>Rhizopus</em> e <em>Mucor</em>.</li>
</ul>

<h3>Como reconhecer no quadro e no microscópio</h3>
<p>Na aula de 27/11, a professora desenhou no quadro a diferença entre levedura, <em>Aspergillus</em> e <em>Penicillium</em>. A lógica é sempre a mesma: olhe para a <strong>ponta do conidióforo</strong> (o “pedúnculo” que sustenta os esporos).</p>
<table>
  <thead><tr><th>Estrutura</th><th>Desenho / microscopia</th><th>Como memorizar</th></tr></thead>
  <tbody>
    <tr><td>Levedura</td><td>Células ovais isoladas, com uma gema menor brotando; algumas formam pseudo-hifas (cadeia de células alongadas).</td><td>“Bolha dentro/ao lado da bolha”: brotamento. Colônias lisas e cremosas.</td></tr>
    <tr><td><em>Aspergillus</em></td><td>Conidióforo ereto que termina em uma <strong>vesícula globosa</strong>; dela saem fiálides com cadeias de conídios, formando uma “cabeça” radiada.</td><td>“Cabeça de dente-de-leão” ou “regador”: vesícula redonda com esporos em volta.</td></tr>
    <tr><td><em>Penicillium</em></td><td>Conidióforo ramificado em <strong>métulas e fiálides</strong>, com cadeias de conídios; o conjunto lembra um pincel.</td><td>“Pincel” ou “penicilo”: ramificações em vez de vesícula globosa.</td></tr>
    <tr><td>Hifa</td><td>Filamento tubulares, septado ou não; o conjunto é o micélio.</td><td>“Fio” e “novelo”: hifa é o fio; micélio é o novelo.</td></tr>
  </tbody>
</table>
<div class="callout exam"><strong>O que estava no quadro</strong><p>A foto mostra leveduras com brotamento, <em>Aspergillus</em> com vesícula e esporos ao redor, <em>Penicillium</em> com a estrutura ramificada em pincel e a indicação “esporo / reprodutivo”. Se a prova pedir para identificar o fungo pelo desenho, procure a <strong>vesícula</strong> (Aspergillus) ou o <strong>pincel ramificado</strong> (Penicillium).</p></div>

<h3>Reprodução</h3>
<p>Leveduras se multiplicam principalmente por <strong>brotamento</strong>: a célula-mãe forma uma gema, o núcleo se divide e a gema se separa. Também podem fazer fissão binária. Fungos filamentosos produzem grande quantidade de esporos, que são levados pelo ar e germinam quando encontram umidade e nutriente.</p>
<div class="callout tip"><strong>Esporo de fungo ≠ endósporo bacteriano</strong><p>O esporo fúngico é uma estrutura de <strong>reprodução e dispersão</strong>, geralmente menos resistente ao calor. O endósporo bacteriano (<em>Bacillus</em>, <em>Clostridium</em>) é uma estrutura de <strong>sobrevivência</strong>, muito resistente a calor, radiação e desinfetantes. Essa diferença é clássica em prova.</p></div>

<h3>Metabolismo e crescimento</h3>
<table>
  <thead><tr><th>Fator</th><th>Comportamento dos fungos</th></tr></thead>
  <tbody>
    <tr><td>Oxigênio</td><td>Maioria aeróbia; leveduras são anaeróbias facultativas.</td></tr>
    <tr><td>pH</td><td>Prefere pH ácido (3–6); cresce em alimentos ácidos onde bactérias não crescem.</td></tr>
    <tr><td>Atividade de água</td><td>Tolera a<sub>w</sub> mais baixa que bactérias (muitos crescem abaixo de 0,85; xerófilos abaixo de 0,6).</td></tr>
    <tr><td>Temperatura</td><td>Maioria mesófila (20–30 °C); alguns psicrotróficos deterioram refrigerados.</td></tr>
    <tr><td>Nutrientes</td><td>Utilizam açúcares, ácidos orgânicos, proteínas e lipídios; são menos exigentes que bactérias.</td></tr>
  </tbody>
</table>
<p>Na presença de O<sub>2</sub>, a levedura metaboliza carboidratos e produz CO<sub>2</sub> e H<sub>2</sub>O. Na ausência de O<sub>2</sub>, fermenta e produz etanol e CO<sub>2</sub> — é isso que faz pão crescer e cerveja/vino fermentarem.</p>

<h3>Estudo dirigido resolvido</h3>
<table>
  <thead><tr><th>Pergunta</th><th>Resposta</th></tr></thead>
  <tbody>
    <tr><td>Leveduras são fungos ___ e os filamentosos ___</td><td>Leveduras: <strong>unicelulares</strong>. Filamentosos: <strong>multicelulares</strong>.</td></tr>
    <tr><td>Leveduras se dividem por ___</td><td><strong>Brotamento</strong> (gemulação); algumas fazem fissão binária.</td></tr>
    <tr><td>Quem causa deterioração em frutas, grãos e vegetais?</td><td><strong>Fungos filamentosos</strong> (bolores), além de leveduras em sucos e frutas.</td></tr>
    <tr><td>Corpo do fungo multicelular: filamentos (1) e conjunto (2)</td><td>(1) <strong>hifas</strong>; (2) <strong>micélio</strong>.</td></tr>
    <tr><td>Fungos pluricelulares podem ser chamados de bolores?</td><td><strong>Correto</strong>: crescem como hifas septadas ou não septadas.</td></tr>
    <tr><td>1% x 10% de glicose: onde cresce <em>E. coli</em> e <em>Penicillium</em>?</td><td><em>E. coli</em> cresce no 1% (o açúcar alto inibe por estresse osmótico). <em>Penicillium</em> é xerófilo e tolera 10%, podendo crescer também em 1%. No meio 1%, o crescimento é mais rápido; o 10% seleciona o fungo.</td></tr>
  </tbody>
</table>

<h3>Resumo para não confundir</h3>
<ul>
  <li>Fungo é eucarioto; bactéria é procarioto.</li>
  <li>Levedura = unicelular, brotamento; bolor = multicelular, hifas/micélio.</li>
  <li>Fungo gosta de açúcar, ácido e pouca água; por isso estraga pão, fruta, geleia e grão.</li>
  <li>Esporo fúngico reproduz; endósporo bacteriano sobrevive.</li>
</ul>
`
      },
      {
        id: "x5l2",
        title: "Fungos na indústria e na deterioração",
        minutes: 11,
        intro: "O mesmo grupo que faz queijo e pão também estraga alimento e produz micotoxina. Saiba separar os papéis.",
        content: `
<p class="lead">Fungos não são só “mofo”. Eles produzem antibióticos, ácidos, enzimas, pão, cerveja, vinho e queijos. O problema começa quando o fungo cresce no alimento errado, em condição errada, ou quando produz micotoxinas.</p>

<h3>Fungos úteis na indústria</h3>
<table>
  <thead><tr><th>Fungo</th><th>Produto / uso</th><th>Papel</th></tr></thead>
  <tbody>
    <tr><td><em>Saccharomyces cerevisiae</em></td><td>Pão, cerveja, vinho, etanol</td><td>Fermenta açúcares, produz CO<sub>2</sub> e etanol.</td></tr>
    <tr><td><em>Penicillium roqueforti</em></td><td>Roquefort, gorgonzola</td><td>Aroma, textura e veios azul-esverdeados.</td></tr>
    <tr><td><em>Penicillium camemberti</em></td><td>Camembert, brie</td><td>Casca branca aveludada e aroma.</td></tr>
    <tr><td><em>Aspergillus oryzae</em></td><td>Shoyu, missô</td><td>Enzimas que degradam proteínas e amido.</td></tr>
    <tr><td><em>Aspergillus niger</em></td><td>Ácido cítrico</td><td>Produção industrial de ácido cítrico.</td></tr>
    <tr><td><em>Penicillium notatum</em></td><td>Penicilina</td><td>Antibiótico descoberto por Fleming.</td></tr>
    <tr><td>Cogumelos (ex.: shiitake)</td><td>Alimento</td><td>Fonte direta de alimento.</td></tr>
  </tbody>
</table>

<h3>Fungos deteriorantes</h3>
<table>
  <thead><tr><th>Fungo</th><th>Alimento</th><th>Sinal</th></tr></thead>
  <tbody>
    <tr><td><em>Penicillium</em> spp.</td><td>Pão, frutas, vegetais</td><td>Manchas verdes/azuladas; aspecto de pincel ao microscópio.</td></tr>
    <tr><td><em>Rhizopus nigricans</em></td><td>Pão</td><td>Manchas pretas; hifas não septadas.</td></tr>
    <tr><td><em>Aspergillus</em> spp.</td><td>Pão, grãos, cereais</td><td>Manchas verdes; conidióforos com vesícula.</td></tr>
    <tr><td><em>Neurospora</em> spp.</td><td>Pão</td><td>Massa avermelhada/laranja.</td></tr>
    <tr><td><em>Mucor</em>, <em>Rhizopus</em>, <em>Thamnidium</em></td><td>Carnes</td><td>Mofo superficial, textura algodonosa.</td></tr>
    <tr><td><em>Saccharomyces</em>, <em>Torulopsis</em></td><td>Geleias, xaropes, mel</td><td>Fermentação, gás, odor alcoólico.</td></tr>
  </tbody>
</table>

<h3>Por que fungo estraga justamente esses alimentos</h3>
<p>Pão, fruta, geleia, mel e grão têm <strong>baixa atividade de água</strong>, <strong>pH ácido</strong> ou <strong>muito açúcar</strong>. Bactérias não crescem bem nessas condições; fungos, sim. Além disso, muitos fungos são aeróbios e crescem na superfície, onde há oxigênio. Refrigeração não resolve tudo: existem fungos psicrotróficos.</p>

<h3>Como identificar <em>Penicillium</em></h3>
<p>No microscópio, <em>Penicillium</em> mostra conidióforos ramificados com uma ponta em forma de pincel (penicilo), sustentando cadeias de conídios. Macro: colônias aveludadas, geralmente verde-azuladas, com borda branca. O estudo dirigido avisa: se a professora mostrar uma foto, é para reconhecer o gênero, não só o nome.</p>

<h3>Fermentação: o que a levedura faz</h3>
<table>
  <thead><tr><th>Condição</th><th>Reação</th><th>Produto</th></tr></thead>
  <tbody>
    <tr><td>Com O<sub>2</sub> (respiração)</td><td>Açúcar → CO<sub>2</sub> + H<sub>2</sub>O</td><td>Energia, pouco etanol.</td></tr>
    <tr><td>Sem O<sub>2</sub> (fermentação alcoólica)</td><td>Açúcar → etanol + CO<sub>2</sub></td><td>Pão (CO<sub>2</sub>), cerveja e vinho (etanol).</td></tr>
  </tbody>
</table>
<p>No pão, o CO<sub>2</sub> fica preso no glúten e faz a massa crescer; o etanol evapora no forno. Na cerveja e no vinho, o etanol é o produto desejado. No kefir e na kombucha, há mistura de fermentação láctica e alcoólica.</p>

<h3>Controle</h3>
<ul>
  <li>Reduzir a<sub>w</sub> e manter o alimento seco (grãos, farinhas, castanhas).</li>
  <li>Refrigeração e cadeia de frio para alimentos perecíveis.</li>
  <li>Higiene, limpeza de câmaras e controle de umidade/condensação.</li>
  <li>Embalagem adequada, atmosfera modificada e conservantes (sorbato, benzoato, propionato).</li>
  <li>Não consumir alimento com mofo visível: a micotoxina pode estar difundida no produto, mesmo sem mofo aparente.</li>
</ul>

<div class="callout exam"><strong>Pegadinha</strong><p>“Fermentado” não é sinônimo de “probiótico”. Pão e cerveja são fermentados por levedura, mas não são probióticos. Para ser probiótico, o microrganismo precisa estar vivo em dose adequada e ter benefício comprovado para a saúde.</p></div>
`
      },
      {
        id: "x5l3",
        title: "Micotoxinas: aflatoxinas, ocratoxina, fumonisina e patulina",
        minutes: 13,
        intro: "Micotoxina é o que faz fungo ser perigoso mesmo sem mofo visível. Grave gênero, toxina, alimento e órgão-alvo.",
        content: `
<p class="lead">Micotoxinas são <strong>metabólitos secundários</strong> produzidos por alguns fungos filamentosos. Elas não são necessárias para o crescimento do fungo; são substâncias tóxicas que podem se acumular em sementes, cereais, frutas, rações e alimentos processados. São <strong>termoestáveis</strong>: cozinhar ou pasteurizar não resolve.</p>

<h3>Características gerais</h3>
<ul>
  <li>Produzidas por <em>Aspergillus</em>, <em>Fusarium</em>, <em>Penicillium</em>, <em>Claviceps</em>, <em>Stachybotrys</em>, entre outros.</li>
  <li>Efeitos: imunossupressão, mutagenicidade, teratogenicidade e carcinogenicidade.</li>
  <li>Contágio: ingestão de alimento contaminado (pré-colheita ou armazenamento) ou inalação de esporos.</li>
  <li>Micotoxicoses podem ser agudas (dose alta, doença grave) ou crônicas (exposição repetida, câncer, imunossupressão).</li>
  <li>Não há cheiro, gosto ou mofo obrigatório: o alimento pode parecer normal e estar contaminado.</li>
</ul>

<h3>Tabela das principais micotoxinas</h3>
<table>
  <thead><tr><th>Toxina</th><th>Fungo</th><th>Alimentos</th><th>Efeito principal</th></tr></thead>
  <tbody>
    <tr><td>Aflatoxinas B1, B2, G1, G2</td><td><em>Aspergillus flavus</em>, <em>A. parasiticus</em></td><td>Amendoim, milho, nozes, castanhas, cereais, rações</td><td>Hepatotóxica e hepatocarcinogênica; B1 é o carcinogênico natural mais potente conhecido.</td></tr>
    <tr><td>Aflatoxina M1</td><td>Metabólito da B1</td><td>Leite e derivados de animais que ingeriram ração contaminada</td><td>Hepatotóxica; relevante em leite.</td></tr>
    <tr><td>Ocratoxina A</td><td><em>Penicillium</em>, <em>Aspergillus</em></td><td>Cereais, café, vinho, uvas, cacau, pão, alimentos de origem animal</td><td>Nefrotóxica, teratogênica e imunossupressora.</td></tr>
    <tr><td>Fumonisinas</td><td><em>Fusarium</em> spp.</td><td>Milho e derivados</td><td>Câncer de esôfago; defeitos do tubo neural.</td></tr>
    <tr><td>Patulina</td><td><em>Penicillium</em>, <em>Aspergillus</em></td><td>Maçã, suco de maçã, vegetais</td><td>Teratogênica, carcinogênica e imunotóxica.</td></tr>
    <tr><td>Citrinina</td><td><em>Penicillium</em> (camembert), <em>Aspergillus</em> (saquê)</td><td>Queijos, arroz, cereais</td><td>Nefrotóxica.</td></tr>
    <tr><td>Desoxinivalenol (DON)</td><td><em>Fusarium</em></td><td>Trigo, cevada, milho</td><td>Vômito, recusa alimentar, toxicidade gastrointestinal.</td></tr>
    <tr><td>Zearalenona</td><td><em>Fusarium</em></td><td>Milho</td><td>Efeito estrogênico; alterações reprodutivas.</td></tr>
  </tbody>
</table>

<h3>Aflatoxina B1 em detalhe</h3>
<p>É a micotoxina mais cobrada. O alvo principal é o <strong>fígado</strong>. A aflatoxicose aguda pode levar à morte; a crônica causa imunossupressão e câncer hepático. A DL50 fica em torno de 0,5–10 mg/kg de peso corporal. A toxina pode aparecer no amendoim, no milho, em nozes e em cereais, especialmente quando o armazenamento é úmido e quente.</p>
<p><strong>M1</strong> aparece no leite porque o animal metaboliza a B1 e excreta o metabólito. Por isso ração contaminada vira risco para leite e derivados.</p>

<h3>Limites e legislação</h3>
<p>A RDC 7/2011 da ANVISA estabeleceu limites máximos tolerados (LMT) para micotoxinas. Exemplos didáticos dos slides: aflatoxinas totais em cereais e produtos de cereais, 5 µg/kg; amendoim, 20 µg/kg; alimentos infantis à base de cereais, 1 µg/kg; ocratoxina A em cereais, 10 µg/kg; fumonisinas em milho não processado, 2.000 µg/kg; patulina em suco de maçã, 50 µg/kg. Os valores podem ser atualizados por normas posteriores; o importante é entender que existe limite e que ele varia com o alimento e a toxina.</p>

<h3>Como controlar</h3>
<ul>
  <li>Prevenir o crescimento do fungo: colher no ponto, secar bem, armazenar com baixa umidade e temperatura controlada, ventilar.</li>
  <li>Fazer limpeza e seleção de grãos: grãos mofados, quebrados ou úmidos são descartados.</li>
  <li>Monitorar a matéria-prima e o produto final com análise de micotoxinas.</li>
  <li>Não confiar só no calor: as micotoxinas são termoestáveis.</li>
  <li>Usar boas práticas agrícolas e de fabricação; evitar umidade na estocagem.</li>
</ul>

<div class="callout exam"><strong>Frases que a prova adora</strong><p>“As micotoxinas são metabólitos secundários termoestáveis, produzidos por fungos filamentosos, que podem causar câncer e lesar órgãos mesmo sem mofo visível.” “Aflatoxina B1 é hepatotóxica e hepatocarcinogênica.” “Ocratoxina A é nefrotóxica.” “Fumonisina está no milho e se associa a câncer de esôfago e defeito do tubo neural.”</p></div>

<div class="callout tip"><strong>Recados da professora (aula de 27/11)</strong><p>As questões 4 e 15 do estudo dirigido de fungos não caem. As micotoxinas são termoestáveis — ela pediu para anotar. Ela já cobrou <em>Penicillium</em> na prova da outra turma e pode cobrar algo parecido; se aparecer foto ou desenho, é para reconhecer o gênero. Kefir e kombucha também foram citados.</p></div>

<h3>Erros comuns</h3>
<ul>
  <li>Dizer que a micotoxina é destruída pela cocção: ela é termoestável.</li>
  <li>Confundir aflatoxina (fígado) com ocratoxina (rim).</li>
  <li>Achar que todo fungo produz micotoxina: só algumas espécies/cepas são toxigênicas.</li>
  <li>Esquecer a via indireta: ração contaminada → animal → leite (M1).</li>
</ul>
`
      }
    ]
  },
  {
    id: "x6",
    track: "micro",
    title: "Microrganismos benéficos",
    short: "Benéficos",
    icon: "i-heart",
    accent: "blue",
    blurb: "Microbiota, probióticos, prebióticos, simbióticos e alimentos fermentados.",
    lessons: [
      {
        id: "x6l1",
        title: "Microbiota, probióticos e mecanismos de ação",
        minutes: 12,
        intro: "Probiótico não é “bactéria do bem” genérica: é cepa viva, em dose adequada, com benefício demonstrado.",
        content: `
<p class="lead">A microbiota intestinal é adquirida rapidamente ao nascimento e muda ao longo da vida. Ela participa da digestão, da produção de vitaminas, da maturação do sistema imune e da barreira contra patógenos. Probióticos são uma forma de modular essa comunidade — mas com critérios.</p>

<h3>Onde estão os microrganismos no corpo</h3>
<table>
  <thead><tr><th>Local</th><th>pH aproximado</th><th>Densidade</th></tr></thead>
  <tbody>
    <tr><td>Estômago</td><td>~2</td><td>~10<sup>3</sup>/mL</td></tr>
    <tr><td>Intestino delgado</td><td>~4–5</td><td>~10<sup>5</sup>/g</td></tr>
    <tr><td>Cólon</td><td>~7</td><td>~10<sup>11</sup>–10<sup>12</sup>/g</td></tr>
  </tbody>
</table>
<p>O cólon é o local de maior densidade e diversidade. Por isso a maioria dos probióticos atua no intestino grosso, mas há efeitos em vagina, pele, boca e vias aéreas.</p>

<h3>Definição de probiótico</h3>
<p><strong>Microrganismos vivos que, quando administrados em quantidades adequadas, conferem benefício à saúde do hospedeiro.</strong> Três palavras são essenciais: <strong>vivo</strong>, <strong>dose adequada</strong> e <strong>benefício comprovado</strong>. Uma bactéria isolada de alimento fermentado não é automaticamente probiótica.</p>

<h3>Critérios para uma cepa ser probiótica</h3>
<ul>
  <li>Não apresentar patogenicidade.</li>
  <li>Ser produtora de ácido e resistente ao ácido gástrico.</li>
  <li>Ter especificidade ao hospedeiro.</li>
  <li>Apresentar excreção de fator anti-<em>E. coli</em> (atividade antimicrobiana).</li>
  <li>Ser resistente à bile.</li>
  <li>Ser viável e estável durante o armazenamento.</li>
  <li>Idealmente, aderir ao epitélio e colonizar temporariamente o intestino.</li>
</ul>

<h3>Mecanismos de ação</h3>
<table>
  <thead><tr><th>Mecanismo</th><th>Como funciona</th></tr></thead>
  <tbody>
    <tr><td>Exclusão competitiva</td><td>Competem por sítios de adesão e por nutrientes com os patógenos.</td></tr>
    <tr><td>Produção de antimicrobianos</td><td>Bacteriocinas, ácido láctico, ácidos graxos de cadeia curta; baixam o pH e criam ambiente inóspito.</td></tr>
    <tr><td>Barreira epitelial</td><td>Fortalecem as junções entre células e reduzem a translocação de patógenos.</td></tr>
    <tr><td>Imunomodulação</td><td>Estimulam a resposta imune inata e adaptativa, com efeito local e sistêmico.</td></tr>
    <tr><td>Modulação do metabolismo</td><td>Alteram a produção de ácidos biliares, vitaminas e metabólitos.</td></tr>
  </tbody>
</table>

<h3>Benefícios com evidência</h3>
<ul>
  <li>Prevenção e encurtamento de diarreia infecciosa (especialmente por rotavírus em crianças).</li>
  <li>Prevenção de diarreia associada a antibióticos e reequilíbrio da microbiota.</li>
  <li>Alívio de constipação.</li>
  <li>Auxílio na intolerância à lactose (produção de β-galactosidase).</li>
  <li>Produção de vitaminas do complexo B.</li>
  <li>Redução modesta de colesterol total, LDL e triglicerídeos.</li>
  <li>Imunoestimulação e redução do risco de algumas alergias alimentares.</li>
  <li>Prevenção de vaginites e auxílio em infecções por <em>Helicobacter pylori</em>.</li>
  <li>Mecanismos de proteção contra câncer de cólon: bloqueio de carcinógenos, produção de butirato, aumento da imunidade.</li>
</ul>

<h3>Dose</h3>
<p>As doses terapêuticas estudadas ficam em torno de <strong>10<sup>9</sup> a 10<sup>10</sup> microrganismos por dia</strong>. Em alimentos, a referência prática é 10<sup>8</sup>–10<sup>9</sup> UFC por porção. Doses muito baixas podem não sobreviver ao ácido gástrico e à bile.</p>

<h3>Gêneros mais usados</h3>
<p><em>Lactobacillus</em> (L. acidophilus, L. rhamnosus, L. casei, L. reuteri, L. delbrueckii), <em>Bifidobacterium</em> (B. longum, B. breve, B. infantis, B. animalis), <em>Streptococcus thermophilus</em>, <em>Enterococcus</em> (E. faecium, E. faecalis), <em>Lactococcus lactis</em> e a levedura <em>Saccharomyces boulardii</em>.</p>

<div class="callout exam"><strong>Pegadinha</strong><p>“Probiótico é qualquer bactéria viva do iogurte” — falso. É preciso cepa identificada, dose adequada, resistência ao trato gastrointestinal e benefício demonstrado. “Fermentado” também não é sinônimo de probiótico.</p></div>
`
      },
      {
        id: "x6l2",
        title: "Prebióticos, simbióticos e alimentos fermentados",
        minutes: 12,
        intro: "Prebiótico é o “alimento” que a microbiota boa usa. Simbiótico é a combinação dos dois. Fermentado é outra coisa.",
        content: `
<p class="lead">Prebióticos são carboidratos não digeríveis que servem de substrato seletivo para microrganismos benéficos do hospedeiro. Eles não são bactérias: são o “alimento” que favorece <em>Bifidobacterium</em> e <em>Lactobacillus</em>.</p>

<h3>Definição e exemplos</h3>
<table>
  <thead><tr><th>Prebiótico</th><th>Onde está</th><th>Observação</th></tr></thead>
  <tbody>
    <tr><td>Frutooligossacarídeos (FOS)</td><td>Cebola, alho, tomate, banana, cevada, aveia, trigo, mel, cerveja</td><td>Fermentados por bifidobactérias; poder edulcorante.</td></tr>
    <tr><td>Inulina</td><td>Raiz de chicória, alho, cebola, aspargo, alcachofra de Jerusalém</td><td>Usada como substituto de gordura e fibra.</td></tr>
    <tr><td>Galactooligossacarídeos (GOS)</td><td>Leite humano, leguminosas</td><td>Estimula bifidobactérias no lactente.</td></tr>
    <tr><td>Pectina</td><td>Entrecasca de cítricos, maracujá, maçã</td><td>Fibra solúvel; geleificante.</td></tr>
    <tr><td>Ligninas</td><td>Cascas de frutas oleaginosas, linhaça, soja</td><td>Fibra insolúvel; não é fermentada do mesmo jeito.</td></tr>
    <tr><td>Lactulose</td><td>Derivado da lactose</td><td>Usada como laxante e prebiótico.</td></tr>
  </tbody>
</table>

<h3>Benefícios dos prebióticos</h3>
<ul>
  <li>Estimulam o crescimento de <em>Bifidobacterium</em> e <em>Lactobacillus</em>.</li>
  <li>Equilibram a microbiota intestinal saudável.</li>
  <li>Inibem a multiplicação de patógenos por competição e acidificação.</li>
  <li>Aumentam a absorção de cálcio.</li>
  <li>Estimulam a motilidade intestinal.</li>
  <li>Reduzem colesterol e triglicerídeos no sangue.</li>
</ul>

<h3>Funções na indústria</h3>
<p><strong>Oligofrutose:</strong> confere consistência a produtos lácteos, macieza a panificados, diminui o ponto de congelamento de sobremesas, dá crocância a biscoitos com baixo teor de gordura e pode substituir açúcar como ligante em barras de cereais.</p>
<p><strong>Inulina:</strong> substituta de gordura em lácteos, patês, molhos, recheios, coberturas, sobremesas congeladas e panificados.</p>

<h3>Simbióticos</h3>
<p>Simbiótico é o produto que contém <strong>probiótico + prebiótico</strong>. Os exemplos clássicos são lácteos fermentados com <em>Bifidobacterium</em> + GOS/FOS ou <em>Lactobacillus</em> + lactitol. A ideia é que o microrganismo chegue vivo e encontre substrato para se estabelecer.</p>

<h3>Alimentos fermentados</h3>
<table>
  <thead><tr><th>Alimento</th><th>Microrganismos</th><th>Fermentação</th></tr></thead>
  <tbody>
    <tr><td>Iogurte</td><td><em>Streptococcus thermophilus</em> + <em>Lactobacillus delbrueckii</em> subsp. <em>bulgaricus</em></td><td>Láctica; mínimo 10<sup>6</sup> UFC/g de cada cultura.</td></tr>
    <tr><td>Leite acidófilo</td><td><em>Lactobacillus acidophilus</em></td><td>Láctica.</td></tr>
    <tr><td>Kefir</td><td><em>Lactococcus lactis</em>, <em>Lactobacillus bulgaricus</em>, leveduras fermentadoras de lactose</td><td>Láctica + alcoólica; grãos de kefir.</td></tr>
    <tr><td>Kombucha</td><td>Consórcio de leveduras e bactérias acéticas</td><td>Alcoólica + acética; chá adoçado.</td></tr>
    <tr><td>Queijos</td><td>Bactérias lácticas e, em alguns, fungos</td><td>Láctica + maturação.</td></tr>
    <tr><td>Chucrute/kimchi</td><td>Bactérias lácticas</td><td>Láctica; vegetais salgados.</td></tr>
  </tbody>
</table>

<div class="callout tip"><strong>Fermentado ≠ probiótico</strong><p>Todo probiótico pode vir de um fermentado, mas nem todo fermentado é probiótico. Pão e cerveja são fermentados por levedura e não são probióticos. Para alegar benefício, é preciso cepa viva em dose adequada e evidência clínica.</p></div>

<h3>Estudo dirigido resolvido</h3>
<table>
  <thead><tr><th>Pergunta</th><th>Resposta</th></tr></thead>
  <tbody>
    <tr><td>O que é microbiota endógena? Onde há mais microrganismos?</td><td>É a comunidade que coloniza o corpo; maior densidade no cólon (10<sup>11</sup>–10<sup>12</sup>/g).</td></tr>
    <tr><td>Probióticos: definição e benefícios</td><td>Microrganismos vivos em dose adequada com benefício à saúde; diarreia, constipação, colesterol, intolerância à lactose, imunidade.</td></tr>
    <tr><td>Mecanismo de ação</td><td>Exclusão competitiva, produção de ácido/antimicrobianos, barreira epitelial e imunomodulação.</td></tr>
    <tr><td>Dose</td><td>10<sup>9</sup>–10<sup>10</sup> organismos/dia (terapêutico); 10<sup>8</sup>–10<sup>9</sup> UFC/porção em alimentos.</td></tr>
    <tr><td>Exemplos de produtos</td><td>Iogurte, leite acidófilo, kefir, kombucha, cápsulas liofilizadas, chocolate com probiótico.</td></tr>
    <tr><td>Prebiótico: definição e benefícios</td><td>Carboidrato não digerível que estimula seletivamente bactérias benéficas; cálcio, motilidade, colesterol, barreira.</td></tr>
    <tr><td>Simbiótico: definição e exemplos</td><td>Probiótico + prebiótico; iogurte com inulina/FOS, kefir, lácteos com <em>Bifidobacterium</em> + GOS.</td></tr>
  </tbody>
</table>
`
      },
      {
        id: "x6l3",
        title: "Probióticos na prática: cepas, dose, evidências e segurança",
        minutes: 11,
        intro: "A prova gosta de V/F e de situação-problema. Treine o raciocínio de cepa, dose e viabilidade.",
        content: `
<p class="lead">Nem todo produto com “culturas vivas” faz o que promete. A lógica é: <strong>cepa certa, dose certa, veículo certo, armazenamento certo</strong>. Sem isso, o microrganismo pode chegar morto ao intestino.</p>

<h3>Cepas que você deve reconhecer</h3>
<table>
  <thead><tr><th>Cepa</th><th>Produto / uso</th><th>Comentário</th></tr></thead>
  <tbody>
    <tr><td><em>Lactobacillus rhamnosus</em> GG (LGG)</td><td>Suplementos, lácteos</td><td>Muito estudada em diarreia infantil e antibiótico-associada.</td></tr>
    <tr><td><em>Lactobacillus casei</em> Shirota</td><td>Leite fermentado</td><td>Estudo em crianças sob antibiótico mostrou reequilíbrio mais rápido da microbiota.</td></tr>
    <tr><td><em>Bifidobacterium animalis</em> subsp. <em>lactis</em> BB-12</td><td>Lácteos e suplementos</td><td>Boa resistência gastrointestinal.</td></tr>
    <tr><td><em>Saccharomyces boulardii</em></td><td>Cápsulas</td><td>Levedura probiótica; útil em diarreia, mas evitar em imunossuprimidos graves.</td></tr>
    <tr><td><em>Lactobacillus acidophilus</em></td><td>Leite acidófilo, iogurte</td><td>Clássico; produz ácido láctico.</td></tr>
  </tbody>
</table>

<h3>O que a evidência sustenta</h3>
<ul>
  <li><strong>Diarreia infecciosa:</strong> encurta a duração, especialmente rotavírus em crianças.</li>
  <li><strong>Diarreia por antibiótico:</strong> reduz risco, com cepas específicas.</li>
  <li><strong>Constipação:</strong> melhora da frequência e consistência.</li>
  <li><strong>Intolerância à lactose:</strong> melhora dos sintomas por β-galactosidase.</li>
  <li><strong>Colesterol:</strong> redução modesta; não substitui tratamento.</li>
  <li><strong><em>H. pylori</em>:</strong> pode auxiliar, mas não substitui o esquema de erradicação.</li>
  <li><strong>Alergias:</strong> evidência limitada e dependente de cepa.</li>
</ul>

<h3>Viabilidade: o caminho até o intestino</h3>
<ol>
  <li>Sobreviver ao pH gástrico (2–3).</li>
  <li>Sobreviver à bile no duodeno.</li>
  <li>Chegar vivo e em quantidade suficiente ao cólon.</li>
  <li>Permanecer estável no produto até o consumo.</li>
</ol>
<p>Por isso a dose e a forma de conservação importam. Cápsulas liofilizadas têm maior estabilidade; produtos líquidos exigem refrigeração e prazo de validade curto. O iogurte precisa manter a cultura viva até o consumo.</p>

<h3>Segurança</h3>
<p>Probióticos são geralmente seguros em pessoas saudáveis, mas há relatos de efeitos adversos:</p>
<ul>
  <li>Infecções sistêmicas em imunossuprimidos, prematuros e pacientes graves.</li>
  <li>Atividade metabólica nociva em situações específicas.</li>
  <li>Efeitos sobre a imunomodulação.</li>
  <li>Transferência de genes de resistência a antibióticos.</li>
</ul>
<p>Em pacientes críticos, imunossuprimidos ou com cateter central, a decisão deve ser individualizada.</p>

<h3>V/F do estudo dirigido</h3>
<table>
  <thead><tr><th>Afirmação</th><th>Resposta</th><th>Por quê</th></tr></thead>
  <tbody>
    <tr><td>O TGI é o alvo mais importante; ações em outras áreas não devem ser consideradas.</td><td><strong>F</strong></td><td>O TGI é o principal alvo, mas há efeitos em vagina, pele e outros sítios; a afirmação é restritiva demais.</td></tr>
    <tr><td>Probióticos devem sobreviver ao aparelho digestivo, ao ácido e à bile e proliferar no intestino.</td><td><strong>V</strong></td><td>É o critério de viabilidade e colonização.</td></tr>
    <tr><td>Existem no mercado na forma líquida, liofilizada ou como componentes de alimentos industrializados.</td><td><strong>V</strong></td><td>Sim: lácteos, cápsulas, sachês, chocolates.</td></tr>
    <tr><td>Podem ser ferramentas do nutricionista como terapia nutricional.</td><td><strong>V</strong></td><td>Com indicação, dose e cepa adequadas.</td></tr>
    <tr><td>A pasteurização lenta pode ser usada para conservar um produto probiótico.</td><td><strong>Não</strong></td><td>O calor inativa o probiótico; o produto deixa de ser probiótico.</td></tr>
    <tr><td>Probióticos potencializam a ação dos antibióticos.</td><td><strong>F</strong> (na questão “EXCETO”)</td><td>Eles ajudam a restaurar a microbiota, mas não potencializam o antibiótico. As demais alternativas são benefícios reconhecidos.</td></tr>
  </tbody>
</table>

<h3>Como ler um rótulo</h3>
<ul>
  <li>Procure o <strong>gênero, espécie e cepa</strong> (ex.: <em>L. rhamnosus</em> GG), não só “lactobacilos”.</li>
  <li>Veja a <strong>dose em UFC</strong> por porção e a garantia até o fim da validade.</li>
  <li>Confira se o produto exige refrigeração.</li>
  <li>Desconfie de alegações vagas (“fortalece a imunidade”) sem cepa e dose.</li>
  <li>Suplemento não substitui alimentação variada nem tratamento prescrito.</li>
</ul>

<div class="callout exam"><strong>Situação-problema</strong><p>Se a questão descreve um produto probiótico que será pasteurizado para aumentar a validade, a resposta é: <strong>não pode</strong>, porque o tratamento térmico inativa o microrganismo e o produto perde a característica probiótica. Se a questão fala de iogurte com inulina e <em>Lactobacillus</em>, é um <strong>simbiótico</strong>.</p></div>
`
      }
    ]
  }
]);

window.NUT_CARDS = (window.NUT_CARDS || []).concat([
  // x4 — protocolos e quantificação
  { id: "c301", module: "x4", front: "Qual é a sequência geral do protocolo de Salmonella?", back: "Pré-enriquecimento em BPW (25 g + 225 mL, 37 °C/18–24 h) → enriquecimento seletivo em RV (42 °C) e/ou TT → plaqueamento em XLD e BS → confirmação bioquímica e sorológica." },
  { id: "c302", module: "x4", front: "Para que serve o pré-enriquecimento?", back: "Recuperar células injuriadas e diluir inibidores, sem selecionar. É um meio líquido não seletivo (água peptonada tamponada)." },
  { id: "c303", module: "x4", front: "Colônia típica de Salmonella em XLD?", back: "Vermelha, com centro negro brilhante, por produção de H2S." },
  { id: "c304", module: "x4", front: "Colônia típica de Salmonella em ágar bismuto sulfito?", back: "Preta, com brilho metálico." },
  { id: "c305", module: "x4", front: "Salmonella no TSI: qual padrão?", back: "Glicose positiva, lactose negativa, gás positivo e H2S positivo: base amarela, ápice vermelho, bolhas e precipitado negro." },
  { id: "c306", module: "x4", front: "Qual é o meio seletivo-diferencial do protocolo de S. aureus?", back: "Ágar Baird-Parker." },
  { id: "c307", module: "x4", front: "Por que as colônias de S. aureus ficam pretas no Baird-Parker?", back: "Porque o S. aureus reduz o telurito de potássio a telúrio metálico, que é negro." },
  { id: "c308", module: "x4", front: "Como é feito o teste da coagulase?", back: "Cultura em BHI + plasma de coelho; incubar a 37 °C e ler em até 6 h (se negativo, até 24 h). Coágulo = positivo." },
  { id: "c309", module: "x4", front: "Fórmula do pour-plate?", back: "UFC/g = n × FD. Inocula-se 1 mL, então não há fator ×10." },
  { id: "c310", module: "x4", front: "Fórmula do spread-plate?", back: "UFC/g = n × FD × 10. O ×10 corrige o volume de 0,1 mL inoculado." },

  // x5 — fungos e micotoxinas
  { id: "c311", module: "x5", front: "Leveduras e fungos filamentosos: unicelulares ou multicelulares?", back: "Leveduras são unicelulares; fungos filamentosos (bolores) são multicelulares, formados por hifas." },
  { id: "c312", module: "x5", front: "Como as leveduras se reproduzem?", back: "Principalmente por brotamento (gemulação); algumas também por fissão binária." },
  { id: "c313", module: "x5", front: "O que são hifas e micélio?", back: "Hifas são os filamentos individuais; micélio é o conjunto de hifas que forma o corpo do fungo." },
  { id: "c314", module: "x5", front: "Esporo de fungo é igual a endósporo bacteriano?", back: "Não. Esporo fúngico é de reprodução/dispersão e menos resistente; endósporo bacteriano é de sobrevivência e muito resistente ao calor." },
  { id: "c315", module: "x5", front: "Por que fungos deterioram pão, fruta e geleia?", back: "Porque toleram pH ácido, baixa atividade de água e altas concentrações de açúcar, condições em que muitas bactérias não crescem." },
  { id: "c316", module: "x5", front: "Penicillium roqueforti: qual uso?", back: "Produção de queijos azuis como Roquefort e gorgonzola; dá aroma, textura e veios." },
  { id: "c317", module: "x5", front: "Saccharomyces cerevisiae: qual uso?", back: "Pão, cerveja, vinho e etanol; fermenta açúcares produzindo CO2 e etanol." },
  { id: "c318", module: "x5", front: "Aflatoxina B1: fungo, alimento e órgão-alvo?", back: "Aspergillus flavus/parasiticus; amendoim, milho, nozes e cereais; fígado. É hepatotóxica e hepatocarcinogênica." },
  { id: "c319", module: "x5", front: "Ocratoxina A: principal efeito e alimentos?", back: "Nefrotóxica, teratogênica e imunossupressora; cereais, café, vinho, uvas e cacau." },
  { id: "c320", module: "x5", front: "Micotoxinas são destruídas pela cocção?", back: "Não. São termoestáveis e podem permanecer no alimento mesmo após cozinhar ou pasteurizar." },

  // x6 — benéficos
  { id: "c321", module: "x6", front: "Definição de probiótico?", back: "Microrganismo vivo que, administrado em quantidade adequada, confere benefício à saúde do hospedeiro." },
  { id: "c322", module: "x6", front: "Definição de prebiótico?", back: "Carboidrato não digerível que é fermentado seletivamente por microrganismos benéficos, trazendo benefício à saúde." },
  { id: "c323", module: "x6", front: "O que é simbiótico?", back: "Produto que combina probiótico + prebiótico. Ex.: iogurte com inulina e Lactobacillus." },
  { id: "c324", module: "x6", front: "O que é exclusão competitiva?", back: "Mecanismo pelo qual o probiótico compete por sítios de adesão e nutrientes, impedindo a fixação de patógenos." },
  { id: "c325", module: "x6", front: "Dose terapêutica típica de probiótico?", back: "Cerca de 10^9 a 10^10 microrganismos por dia; em alimentos, 10^8–10^9 UFC por porção." },
  { id: "c326", module: "x6", front: "Quais culturas são obrigatórias no iogurte?", back: "Streptococcus thermophilus e Lactobacillus delbrueckii subsp. bulgaricus, com pelo menos 10^6 UFC/g de cada." },
  { id: "c327", module: "x6", front: "Que fermentações ocorrem no kefir?", back: "Fermentação láctica e alcoólica, por bactérias lácticas e leveduras." },
  { id: "c328", module: "x6", front: "Cite dois prebióticos e onde estão.", back: "Inulina (chicória, alho, cebola) e FOS (cebola, alho, banana, aveia, mel)." },
  { id: "c329", module: "x6", front: "Quais são critérios de uma cepa probiótica?", back: "Não ser patogênica, resistir ao ácido e à bile, produzir ácido, ter especificidade ao hospedeiro, ser viável/estável e ter efeito benéfico comprovado." },
  { id: "c330", module: "x6", front: "Pode pasteurizar um produto probiótico?", back: "Não. O calor inativa o microrganismo; o produto deixa de ser probiótico." }
]);

window.NUT_QUESTIONS = (window.NUT_QUESTIONS || []).concat([
  // x4 — protocolos e quantificação
  { id: "q301", module: "x4", level: "facil", prompt: "No protocolo de Salmonella, qual meio é usado no pré-enriquecimento?", options: ["Água peptonada tamponada (BPW)", "Caldo Rappaport-Vassiliadis (RV)", "Ágar XLD", "Ágar Baird-Parker"], answer: 0, explanation: "O pré-enriquecimento usa um meio líquido não seletivo, a água peptonada tamponada, para recuperar células injuriadas. RV é o enriquecimento seletivo; XLD é o plaqueamento; Baird-Parker é para S. aureus." },
  { id: "q302", module: "x4", level: "medio", prompt: "Qual é a função do caldo Rappaport-Vassiliadis (RV) no protocolo de Salmonella?", options: ["Recuperar células injuriadas", "Multiplicar Salmonella e inibir a microbiota acompanhante", "Diferenciar colônias por cor", "Confirmar a produção de coagulase"], answer: 1, explanation: "O RV é um caldo de enriquecimento seletivo, incubado a 42 °C, que favorece Salmonella e inibe grande parte da microbiota concorrente." },
  { id: "q303", module: "x4", level: "medio", prompt: "Em ágar XLD, a colônia típica de Salmonella é:", options: ["Amarela, sem centro negro", "Vermelha, com centro negro brilhante", "Preta com brilho metálico, sem borda", "Verde-azulada, sem H2S"], answer: 1, explanation: "Salmonella fermenta xilose, descarboxila lisina e produz H2S, formando colônias vermelhas com centro negro. A colônia preta com brilho metálico é típica do ágar bismuto sulfito." },
  { id: "q304", module: "x4", level: "medio", prompt: "Qual conjunto bioquímico é compatível com Salmonella?", options: ["Urease +, indol +, oxidase +", "Lactose +, H2S −, urease +", "H2S +, urease −, oxidase −", "Citrato −, lisina −, glicose −"], answer: 2, explanation: "Salmonella produz H2S, é urease negativa e oxidase negativa. Fermenta glicose com gás, em geral não fermenta lactose e descarboxila lisina." },
  { id: "q305", module: "x4", level: "facil", prompt: "Segundo a RDC 12/2001, o critério para Salmonella em muitos alimentos é:", options: ["Contagem máxima de 10^2 UFC/g", "Ausência em 25 g", "Contagem máxima de 10^3 UFC/g", "Presença em 25 g"], answer: 1, explanation: "Para Salmonella, o padrão clássico é pesquisa de presença/ausência: ausência em 25 g. A IN 161/2022 atualizou a lista de padrões, mas mantém essa lógica." },
  { id: "q306", module: "x4", level: "facil", prompt: "O meio seletivo e diferencial usado no protocolo de Staphylococcus aureus é:", options: ["Ágar XLD", "Ágar Baird-Parker", "Ágar VRBG", "Caldo BHI"], answer: 1, explanation: "O Baird-Parker contém telurito, glicina e cloreto de lítio (seletivos) e gema de ovo (diferencial). O BHI é usado depois, para confirmar a coagulase." },
  { id: "q307", module: "x4", level: "medio", prompt: "No Baird-Parker, as colônias de S. aureus ficam pretas porque:", options: ["Fermentam lactose e acidificam o meio", "Reduzem o telurito de potássio a telúrio metálico", "Produzem coagulase", "Formam endósporos"], answer: 1, explanation: "O telurito é reduzido a telúrio metálico, que é negro. A gema de ovo evidencia os halos de lecitinase e lipase." },
  { id: "q308", module: "x4", level: "medio", prompt: "Para confirmar S. aureus após o Baird-Parker, usa-se:", options: ["Teste da catalase", "Teste da coagulase com plasma de coelho", "Coloração de Gram", "Teste de oxidase"], answer: 1, explanation: "A coagulase é o teste confirmatório: S. aureus é coagulase positivo. A catalase também é positiva, mas não diferencia dos outros estafilococos." },
  { id: "q309", module: "x4", level: "medio", prompt: "Em um pour-plate, a placa da diluição 10^−4 apresentou 250 colônias. O resultado é:", options: ["2,5 × 10^4 UFC/g", "2,5 × 10^5 UFC/g", "2,5 × 10^6 UFC/g", "2,5 × 10^7 UFC/g"], answer: 2, explanation: "UFC/g = n × FD = 250 × 10^4 = 2,5 × 10^6. No pour-plate não se multiplica por 10." },
  { id: "q310", module: "x4", level: "facil", prompt: "Por que o spread-plate tem um fator ×10 na fórmula?", options: ["Porque se inocula 0,1 mL, e o resultado é por 1 mL/g", "Porque a placa tem 10 cm de diâmetro", "Porque a diluição é sempre 10^−1", "Porque se contam 10 colônias"], answer: 0, explanation: "O spread-plate inocula 0,1 mL; multiplicar por 10 corrige o volume para 1 mL (ou 1 g). No pour-plate, inocula-se 1 mL e não há esse fator." },

  // x5 — fungos e micotoxinas
  { id: "q311", module: "x5", level: "facil", prompt: "Sobre leveduras e fungos filamentosos, é correto:", options: ["Leveduras são multicelulares e filamentosos são unicelulares", "Leveduras são unicelulares e filamentosos são multicelulares", "Ambos são procariotos", "Ambos são sempre patogênicos"], answer: 1, explanation: "Leveduras são unicelulares e se reproduzem por brotamento; fungos filamentosos são multicelulares, formados por hifas que constituem o micélio." },
  { id: "q312", module: "x5", level: "facil", prompt: "A principal forma de reprodução das leveduras é:", options: ["Brotamento (gemulação)", "Formação de endósporos", "Fissão binária exclusiva", "Conjugação bacteriana"], answer: 0, explanation: "Leveduras se reproduzem principalmente por brotamento; algumas também fazem fissão binária. Endósporo é estrutura bacteriana." },
  { id: "q313", module: "x5", level: "facil", prompt: "No corpo de um fungo filamentoso, os filamentos e o conjunto deles são chamados, respectivamente, de:", options: ["Micélio e hifas", "Hifas e micélio", "Conídios e esporos", "Septos e vesículas"], answer: 1, explanation: "Hifa é cada filamento; micélio é o conjunto de hifas. O micélio não é tecido verdadeiro." },
  { id: "q314", module: "x5", level: "medio", prompt: "Qual é a diferença entre esporo fúngico e endósporo bacteriano?", options: ["São a mesma estrutura", "O fúngico é de reprodução e menos resistente; o bacteriano é de sobrevivência e muito resistente", "O bacteriano é de reprodução e o fúngico de sobrevivência", "Nenhum dos dois resiste ao calor"], answer: 1, explanation: "Esporos fúngicos servem para reprodução e dispersão; endósporos bacterianos são formas de resistência ao calor, à radiação e a desinfetantes." },
  { id: "q315", module: "x5", level: "medio", prompt: "Em meios com 1% e 10% de glicose, o que se espera de E. coli e Penicillium?", options: ["E. coli cresce melhor em 1%; Penicillium tolera 10%", "E. coli cresce melhor em 10%; Penicillium só em 1%", "Nenhum cresce em 10%", "Penicillium não cresce em 1%"], answer: 0, explanation: "E. coli é inibida pelo alto teor de açúcar (10%); Penicillium é xerófilo e tolera 10%, podendo crescer também em 1%. No meio 1%, o crescimento é mais rápido para ambos." },
  { id: "q316", module: "x5", level: "facil", prompt: "Penicillium roqueforti é usado na produção de:", options: ["Pão branco", "Queijos azuis como Roquefort e gorgonzola", "Cerveja", "Shoyu"], answer: 1, explanation: "P. roqueforti dá aroma, textura e os veios azul-esverdeados dos queijos azuis. P. camemberti é usado em camembert e brie." },
  { id: "q317", module: "x5", level: "facil", prompt: "Saccharomyces cerevisiae é classicamente usado em:", options: ["Queijo azul", "Pão, cerveja e vinho", "Produção de penicilina", "Conservas de peixe"], answer: 1, explanation: "S. cerevisiae fermenta açúcares produzindo CO2 (pão) e etanol (cerveja, vinho). Penicillium notatum é o fungo da penicilina." },
  { id: "q318", module: "x5", level: "medio", prompt: "A aflatoxina B1 é produzida por Aspergillus e tem como principal órgão-alvo:", options: ["Rim", "Fígado", "Cérebro", "Pulmão"], answer: 1, explanation: "A B1 é hepatotóxica e hepatocarcinogênica. A ocratoxina A é a principal nefrotóxica." },
  { id: "q319", module: "x5", level: "medio", prompt: "A ocratoxina A é mais associada a:", options: ["Café, cereais e uvas; efeito nefrotóxico", "Leite e derivados; efeito hepatotóxico", "Milho; efeito estrogênico", "Maçã; efeito teratogênico"], answer: 0, explanation: "Ocratoxina A ocorre em cereais, café, vinho, uvas e cacau e é nefrotóxica, teratogênica e imunossupressora. Leite é aflatoxina M1; milho tem fumonisina/zearalenona; maçã tem patulina." },
  { id: "q320", module: "x5", level: "facil", prompt: "Sobre a estabilidade das micotoxinas, é correto:", options: ["São destruídas pela cocção comum", "São termoestáveis e podem permanecer no alimento", "Só existem em alimentos mofados visivelmente", "São produzidas por bactérias"], answer: 1, explanation: "Micotoxinas são termoestáveis; cozinhar ou pasteurizar não garante eliminação. O alimento pode estar contaminado sem mofo visível." },

  // x6 — benéficos
  { id: "q321", module: "x6", level: "facil", prompt: "Probiótico é:", options: ["Qualquer bactéria presente em alimento fermentado", "Microrganismo vivo que, em dose adequada, confere benefício à saúde", "Carboidrato não digerível", "Toxina produzida por fungo"], answer: 1, explanation: "A definição exige microrganismo vivo, quantidade adequada e benefício demonstrado. Fermentado não é sinônimo de probiótico." },
  { id: "q322", module: "x6", level: "facil", prompt: "Prebiótico é:", options: ["Microrganismo vivo benéfico", "Carboidrato não digerível que estimula seletivamente bactérias benéficas", "Antibiótico natural", "Toxina fúngica"], answer: 1, explanation: "Prebiótico é o substrato (ex.: inulina, FOS) fermentado seletivamente pela microbiota benéfica. Probiótico é o microrganismo vivo." },
  { id: "q323", module: "x6", level: "facil", prompt: "Um produto que contém probiótico + prebiótico é chamado de:", options: ["Simbiótico", "Antibiótico", "Prebiótico isolado", "Fermentado alcoólico"], answer: 0, explanation: "Simbiótico combina os dois. Exemplo: iogurte com inulina e Lactobacillus." },
  { id: "q324", module: "x6", level: "medio", prompt: "A competição por sítios de adesão e nutrientes, impedindo patógenos, é chamada de:", options: ["Exclusão competitiva", "Fermentação alcoólica", "Micotoxicose", "Coagulase"], answer: 0, explanation: "Exclusão competitiva é um dos principais mecanismos dos probióticos, junto com produção de ácido/antimicrobianos e imunomodulação." },
  { id: "q325", module: "x6", level: "medio", prompt: "A dose terapêutica típica de probióticos estudada é da ordem de:", options: ["10^2–10^3 organismos/dia", "10^4–10^5 organismos/dia", "10^9–10^10 organismos/dia", "10^15 organismos/dia"], answer: 2, explanation: "As doses terapêuticas usuais ficam em 10^9–10^10 microrganismos por dia; em alimentos, a referência é 10^8–10^9 UFC por porção." },
  { id: "q326", module: "x6", level: "medio", prompt: "As culturas obrigatórias do iogurte são:", options: ["Lactobacillus acidophilus e Bifidobacterium", "Streptococcus thermophilus e Lactobacillus delbrueckii subsp. bulgaricus", "Saccharomyces cerevisiae e Candida", "E. coli e Enterococcus"], answer: 1, explanation: "O iogurte precisa de S. thermophilus e L. delbrueckii subsp. bulgaricus, com pelo menos 10^6 UFC/g de cada cultura." },
  { id: "q327", module: "x6", level: "medio", prompt: "O kefir é produzido por:", options: ["Só fermentação láctica", "Só fermentação alcoólica", "Fermentação láctica e alcoólica", "Fermentação acética pura"], answer: 2, explanation: "O kefir combina bactérias lácticas e leveduras, resultando em fermentação láctica e alcoólica." },
  { id: "q328", module: "x6", level: "facil", prompt: "São exemplos de prebióticos:", options: ["Inulina e FOS", "Salmonella e E. coli", "Aflatoxina e ocratoxina", "Coagulase e catalase"], answer: 0, explanation: "Inulina e frutooligossacarídeos (FOS) são carboidratos não digeríveis que estimulam Bifidobacterium e Lactobacillus." },
  { id: "q329", module: "x6", level: "medio", prompt: "Qual NÃO é um critério para uma cepa ser considerada probiótica?", options: ["Não ser patogênica", "Resistir ao ácido e à bile", "Ser viável e estável", "Produzir toxinas termoestáveis"], answer: 3, explanation: "Produzir toxinas é justamente o oposto do desejado. A cepa probiótica deve ser não patogênica, resistir ao trato gastrointestinal e ter efeito benéfico." },
  { id: "q330", module: "x6", level: "medio", prompt: "Por que não se deve pasteurizar um produto probiótico?", options: ["Porque o calor inativa o microrganismo probiótico", "Porque a pasteurização aumenta a dose de probiótico", "Porque o probiótico só sobrevive a 100 °C", "Porque a pasteurização elimina as toxinas"], answer: 0, explanation: "O probiótico precisa estar vivo. A pasteurização, mesmo branda, inativa a cultura e o produto perde a característica probiótica." }
]);

window.NUT_PLAN = (window.NUT_PLAN || []).concat([
  {
    id: "d17", track: "micro", day: "Sábado", date: "28/11", title: "Micro: protocolos de Salmonella e S. aureus",
    focus: "A prova de 04/12 cobra protocolo. Leia a lógica de cada etapa e faça as questões de fixação.",
    tasks: [
      { id: "d17t1", text: "Ler o protocolo de Salmonella.", view: "aprender", lesson: "x4l1" },
      { id: "d17t2", text: "Ler o protocolo de S. aureus.", view: "aprender", lesson: "x4l2" },
      { id: "d17t3", text: "Fazer 10 flashcards de protocolos.", view: "flashcards" },
      { id: "d17t4", text: "Responder as questões de protocolos.", view: "questoes" }
    ]
  },
  {
    id: "d18", track: "micro", day: "Domingo", date: "29/11", title: "Micro: cálculos e fungos",
    focus: "Treine pour-plate e spread-plate e comece fungos por morfologia e reprodução.",
    tasks: [
      { id: "d18t1", text: "Ler a aula de cálculo de UFC.", view: "aprender", lesson: "x4l3" },
      { id: "d18t2", text: "Ler fungos: morfologia e reprodução.", view: "aprender", lesson: "x5l1" },
      { id: "d18t3", text: "Fazer o simulado curto de Micro.", view: "simulado" },
      { id: "d18t4", text: "Revisar os erros do simulado.", view: "simulado" }
    ]
  },
  {
    id: "d19", track: "micro", day: "Segunda", date: "30/11", title: "Micro: fungos na indústria e micotoxinas",
    focus: "Dia da prova de Bioquímica; mantenha Micro leve, mas não pule fungos e micotoxinas.",
    tasks: [
      { id: "d19t1", text: "Ler fungos na indústria e deterioração.", view: "aprender", lesson: "x5l2" },
      { id: "d19t2", text: "Ler micotoxinas.", view: "aprender", lesson: "x5l3" },
      { id: "d19t3", text: "Revisar a tabela de micotoxinas no Resumão.", view: "resumo" },
      { id: "d19t4", text: "Fazer flashcards de fungos.", view: "flashcards" }
    ]
  },
  {
    id: "d20", track: "micro", day: "Terça", date: "01/12", title: "Micro: probióticos e prebióticos",
    focus: "Separe probiótico, prebiótico, simbiótico e fermentado. A prova gosta de V/F.",
    tasks: [
      { id: "d20t1", text: "Ler microbiota e probióticos.", view: "aprender", lesson: "x6l1" },
      { id: "d20t2", text: "Ler prebióticos e simbióticos.", view: "aprender", lesson: "x6l2" },
      { id: "d20t3", text: "Ler a aula de aplicação prática.", view: "aprender", lesson: "x6l3" },
      { id: "d20t4", text: "Responder 10 questões de benéficos.", view: "questoes" }
    ]
  },
  {
    id: "d21", track: "micro", day: "Quarta", date: "02/12", title: "Micro: simulado e pontos fracos",
    focus: "Faça o simulado completo e transforme cada erro em uma revisão de 5 minutos.",
    tasks: [
      { id: "d21t1", text: "Fazer o simulado de Micro (20 questões/30 min).", view: "simulado" },
      { id: "d21t2", text: "Revisar o mapa de erros por módulo.", view: "simulado" },
      { id: "d21t3", text: "Reler as aulas dos módulos com mais erro.", view: "aprender" },
      { id: "d21t4", text: "Revisar flashcards marcados para revisar.", view: "flashcards" }
    ]
  },
  {
    id: "d22", track: "micro", day: "Quinta", date: "03/12", title: "Micro: véspera",
    focus: "Nada de assunto novo. Protocolos, cálculo, fungos e benéficos: só o essencial.",
    tasks: [
      { id: "d22t1", text: "Ler o Resumão de protocolos e cálculo.", view: "resumo" },
      { id: "d22t2", text: "Ler o Resumão de fungos e benéficos.", view: "resumo" },
      { id: "d22t3", text: "Fazer 10 questões dos temas que mais errou.", view: "questoes" },
      { id: "d22t4", text: "Dormir cedo; prova às 14h.", view: "inicio" }
    ]
  },
  {
    id: "d23", track: "micro", day: "Sexta", date: "04/12", title: "Micro: prova A3/Faltantes",
    focus: "Pela manhã, revise a tabela de protocolos e os limites de contagem. Prova às 14h.",
    tasks: [
      { id: "d23t1", text: "Revisar protocolos de Salmonella e S. aureus.", view: "resumo" },
      { id: "d23t2", text: "Revisar fórmulas de UFC e limites de contagem.", view: "resumo" },
      { id: "d23t3", text: "Prova A3/Faltantes de Análises Microbiológicas (14h).", view: "inicio" }
    ]
  }
]);

window.NUT_CARDS = (window.NUT_CARDS || []).concat([
  { id: "c331", module: "x2", front: "Diarreia 'água de arroz' + desidratação: qual agente?", back: "Vibrio cholerae, Gram-negativo em vírgula, toxinfecção pela toxina colérica." },
  { id: "c332", module: "x2", front: "Vômitos 1–6 h após sanduíche de presunto: qual agente e mecanismo?", back: "Staphylococcus aureus; intoxicação por enterotoxina termoestável pré-formada." },
  { id: "c333", module: "x2", front: "Carne assada + diarreia 8–16 h + bastão Gram-positivo esporulado:", back: "Clostridium perfringens; toxinfecção. Não confundir com S. aureus (coco, 1–6 h)." },
  { id: "c334", module: "x2", front: "Gestante com meningite/aborto e queijo mole:", back: "Listeria monocytogenes; atravessa a placenta e acomete o SNC." },
  { id: "c335", module: "x2", front: "Infecção x intoxicação x toxinfecção:", back: "Infecção = coloniza/invade. Intoxicação = toxina pronta no alimento. Toxinfecção = multiplica no intestino e produz toxina in situ." },
  { id: "c336", module: "x5", front: "Como diferenciar Aspergillus e Penicillium pelo desenho?", back: "Aspergillus: conidióforo termina em vesícula globosa com conídios radiados (cabeça). Penicillium: conidióforo ramificado em pincel (penicilo) com cadeias de conídios." }
]);

window.NUT_QUESTIONS = (window.NUT_QUESTIONS || []).concat([
  { id: "q331", module: "x2", level: "medio", prompt: "Mulher de 63 anos com diarreia profusa 'água de arroz', cheiro de peixe, desidratação e cultura com Gram-negativas. Qual o agente?", options: ["Salmonella", "Vibrio cholerae", "Campylobacter", "Listeria"], answer: 1, explanation: "Diarreia aquosa profusa, desidratação e aspecto de água de arroz são clássicos de cólera. Vibrio cholerae é Gram-negativo em vírgula e produz toxina colérica no intestino." },
  { id: "q332", module: "x2", level: "medio", prompt: "Sanduíche de presunto e queijo levado em temperatura ambiente; vômitos cerca de 1 h após a ingestão. Qual o agente e o mecanismo?", options: ["Salmonella — infecção", "Staphylococcus aureus — intoxicação", "Clostridium perfringens — toxinfecção", "Listeria — infecção"], answer: 1, explanation: "Incubação de 1–6 h, vômitos intensos e alimento manipulado em temperatura ambiente apontam para S. aureus. A toxina já está formada no alimento: intoxicação." },
  { id: "q333", module: "x2", level: "medio", prompt: "Surto em casamento com carne assada; enterocolite em 8 h; bactéria Gram-positiva em bastão esporulada. Qual o agente?", options: ["Staphylococcus aureus", "Clostridium perfringens", "Clostridium botulinum", "Listeria monocytogenes"], answer: 1, explanation: "C. perfringens é bastão Gram-positivo esporulado, anaeróbio, associado a carne assada/resfriada lentamente, com incubação de 8–16 h e toxinfecção. S. aureus é coco e 1–6 h." },
  { id: "q334", module: "x2", level: "medio", prompt: "Qual patógeno pode causar meningite e aborto em gestantes e imunocomprometidos?", options: ["Listeria monocytogenes", "Vibrio cholerae", "Clostridium botulinum", "E. coli STEC"], answer: 0, explanation: "Listeria atravessa a placenta, invade o SNC e causa sepse/meningite; queijos moles, frios e leite cru são veículos. É especialmente grave em gestantes, idosos e imunossuprimidos." },
  { id: "q335", module: "x2", level: "facil", prompt: "'Infecção é resultado da ação da toxina liberada pela bactéria no tecido.' Essa afirmação é:", options: ["Verdadeira", "Falsa"], answer: 1, explanation: "Falsa. Infecção é colonização/invasão e multiplicação. A toxina pré-formada caracteriza intoxicação; a toxina produzida no intestino caracteriza toxinfecção." },
  { id: "q336", module: "x5", level: "medio", prompt: "No desenho do quadro, qual estrutura caracteriza Penicillium?", options: ["Vesícula globosa com conídios radiados", "Conidióforo ramificado em forma de pincel", "Célula oval com brotamento", "Endósporo bacteriano"], answer: 1, explanation: "Penicillium tem conidióforo ramificado (penicilo) com cadeias de conídios. Aspergillus termina em vesícula globosa; levedura é oval e faz brotamento." }
]);

window.NUT_GLOSSARY = (window.NUT_GLOSSARY || []).concat([
  { term: "Pré-enriquecimento", module: "x4", definition: "Etapa líquida não seletiva (BPW) que recupera células injuriadas e dilui inibidores antes do enriquecimento seletivo." },
  { term: "Enriquecimento seletivo", module: "x4", definition: "Etapa em caldo seletivo (RV e/ou TT) que multiplica o patógeno e inibe a microbiota acompanhante." },
  { term: "XLD", module: "x4", definition: "Ágar xilose-lisina-desoxicolato: meio seletivo-diferencial para Salmonella; colônias vermelhas com centro negro por H2S." },
  { term: "Baird-Parker", module: "x4", definition: "Ágar seletivo-diferencial para Staphylococcus aureus; telurito, glicina e cloreto de lítio selecionam, gema de ovo diferencia." },
  { term: "Coagulase", module: "x4", definition: "Enzima que converte fibrinogênio em fibrina; teste confirmatório de S. aureus com plasma de coelho." },
  { term: "Pour-plate", module: "x4", definition: "Plaqueamento em profundidade: 1 mL da diluição é misturado ao ágar fundido; UFC/g = n × FD." },
  { term: "Spread-plate", module: "x4", definition: "Plaqueamento em superfície: 0,1 mL é espalhado no ágar; UFC/g = n × FD × 10." },
  { term: "UFC", module: "x4", definition: "Unidade Formadora de Colônia: estimativa de células viáveis, pois uma colônia pode vir de um agrupamento." },
  { term: "Hifa", module: "x5", definition: "Filamento individual de um fungo filamentoso; pode ser septada ou não septada." },
  { term: "Micélio", module: "x5", definition: "Conjunto de hifas que forma o corpo do fungo; não é tecido verdadeiro." },
  { term: "Aflatoxina", module: "x5", definition: "Micotoxina de Aspergillus flavus/parasiticus, hepatotóxica e hepatocarcinogênica; B1 é a mais potente." },
  { term: "Ocratoxina A", module: "x5", definition: "Micotoxina nefrotóxica, teratogênica e imunossupressora, encontrada em cereais, café, vinho e uvas." },
  { term: "Fumonisina", module: "x5", definition: "Micotoxina de Fusarium em milho, associada a câncer de esôfago e defeitos do tubo neural." },
  { term: "Patulina", module: "x5", definition: "Micotoxina de Penicillium/Aspergillus em maçã e derivados; teratogênica, carcinogênica e imunotóxica." },
  { term: "Simbiótico", module: "x6", definition: "Produto que combina probiótico e prebiótico, como iogurte com inulina e Lactobacillus." },
  { term: "Exclusão competitiva", module: "x6", definition: "Mecanismo de probióticos que competem por sítios de adesão e nutrientes, dificultando a colonização por patógenos." }
]);
