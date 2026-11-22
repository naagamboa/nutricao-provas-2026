window.NUT_MODULES = (window.NUT_MODULES || []).concat([
  {
    id: "b1",
    track: "bases",
    title: "Ovos: estrutura, cocção e segurança",
    short: "Ovos",
    icon: "i-egg",
    accent: "green",
    blurb: "Composição, qualidade, propriedades funcionais, coagulação, anel verde, conservação e risco de Salmonella.",
    lessons: [
      {
        id: "b1l1",
        title: "Estrutura, composição e qualidade do ovo",
        minutes: 8,
        intro: "Antes de cozinhar, entenda o que é casca, clara e gema — e por que o ovo fresco se comporta diferente do velho.",
        content: `
<p class="lead">O ovo é uma célula reprodutiva altamente organizada. Cada parte tem uma função e uma consequência culinária. A prova cobra composição, frescor e conservação.</p>

<h3>Anatomia</h3>
<table>
  <thead><tr><th>Parte</th><th>Proporção aproximada</th><th>O que contém</th></tr></thead>
  <tbody>
    <tr><td>Casca</td><td>~10%</td><td>Carbonato de cálcio, poros, cutícula protetora; permite trocas gasosas.</td></tr>
    <tr><td>Clara (albúmen)</td><td>~60%</td><td>Água e proteínas: ovoalbumina, conalbumina, ovomucoide, lisozima; alcalina.</td></tr>
    <tr><td>Gema</td><td>~30%</td><td>Lipídios, proteínas (lipoproteínas), vitaminas A, D, E, K, ferro, colesterol, lecitina, carotenoides.</td></tr>
    <tr><td>Câmara de ar</td><td>—</td><td>Aumenta com o tempo; por isso o ovo velho flutua.</td></tr>
  </tbody>
</table>
<p>Um ovo de 50 g fornece cerca de <strong>6 g de proteína de alto valor biológico</strong>. A gema concentra gordura e colesterol (~370 mg/100 g). A clara é fonte de proteínas de alta qualidade e praticamente sem gordura.</p>

<h3>Proteínas e funcionalidade</h3>
<ul>
  <li><strong>Ovoalbumina:</strong> principal proteína da clara; coagula com calor e forma espuma.</li>
  <li><strong>Conalbumina:</strong> liga ferro; participa da cor e da estabilidade.</li>
  <li><strong>Lisozima:</strong> enzima com ação antibacteriana.</li>
  <li><strong>Lecitina e lipoproteínas da gema:</strong> emulsificantes naturais.</li>
</ul>

<h3>Frescor e qualidade</h3>
<table>
  <thead><tr><th>Indicador</th><th>Ovo fresco</th><th>Ovo velho</th></tr></thead>
  <tbody>
    <tr><td>Teste na água</td><td>Afunda</td><td>Flutua (câmara de ar maior)</td></tr>
    <tr><td>Clara</td><td>Espessa, firme, pouco espalhada</td><td>Fluida, espalha</td></tr>
    <tr><td>Gema</td><td>Firme, alta, difícil de romper</td><td>Plana, rompe fácil</td></tr>
    <tr><td>Odor</td><td>Suave</td><td>Pode ter odor sulfuroso/estragado</td></tr>
  </tbody>
</table>
<div class="callout exam"><strong>Cai na prova</strong><p>O ovo fresco afunda porque a câmara de ar é pequena. O ovo velho flutua porque perdeu água e a câmara cresceu. A casca é porosa; lavar antes de guardar remove a cutícula protetora e favorece a entrada de microrganismos.</p></div>

<h3>Conservação</h3>
<ul>
  <li>Guardar sob refrigeração, de preferência com a ponta fina para baixo.</li>
  <li>Não lavar antes de armazenar; lavar apenas no momento do uso.</li>
  <li>Ovo cru na casca: cerca de 3–5 semanas sob refrigeração.</li>
  <li>Ovo cozido: cerca de 1 semana refrigerado.</li>
  <li>Gema crua: até 2 dias; clara crua: até 4 dias, refrigeradas.</li>
  <li>Não congelar ovo na casca: o conteúdo expande e racha.</li>
</ul>

<div class="recap">
  <h4>Em 30 segundos</h4>
  <ul>
    <li>Casca ~10%, clara ~60%, gema ~30%.</li>
    <li>Ovo de 50 g ≈ 6 g de proteína de alto valor biológico.</li>
    <li>Fresco afunda, clara espessa, gema firme; velho flutua.</li>
    <li>Refrigerar, não lavar antes de guardar, ponta para baixo.</li>
  </ul>
</div>

<details class="quick">
  <summary>Teste rápido: por que não se deve lavar o ovo antes de guardar?</summary>
  <div class="quick-body"><p>A casca tem poros e uma cutícula protetora. Lavar remove essa barreira e a umidade pode facilitar a penetração de microrganismos, como <em>Salmonella</em>.</p></div>
</details>
`
      },
      {
        id: "b1l2",
        title: "Coagulação e propriedades funcionais do ovo",
        minutes: 9,
        intro: "Clara 60–65 °C, gema 65–70 °C. Por trás desses números está toda a confeitaria, a maionese e o ovo mexido perfeito.",
        content: `
<p class="lead">O calor desnatura as proteínas e permite que elas se organizem em rede — a coagulação. Entender temperatura, acidez, sal e açúcar é entender por que o ovo “passa do ponto”.</p>

<h3>Temperaturas de coagulação</h3>
<table>
  <thead><tr><th>Componente</th><th>Temperatura aproximada</th><th>Consequência</th></tr></thead>
  <tbody>
    <tr><td>Clara</td><td>60–65 °C</td><td>Fica opaca e firme; espuma coagula.</td></tr>
    <tr><td>Gema</td><td>65–70 °C</td><td>Engrossa e depois endurece.</td></tr>
    <tr><td>Ovo inteiro</td><td>70–75 °C</td><td>Coagulação completa; textura firme.</td></tr>
  </tbody>
</table>
<p>Sal e ácido <strong>aceleram</strong> a coagulação e ajudam a estabilizar a rede. Açúcar e água <strong>atrasam</strong> — por isso o banho-maria e o açúcar são usados em cremes e flans, para não talhar.</p>

<h3>O anel verde</h3>
<p>Ao cozinhar demais, o enxofre da clara reage com o ferro da gema e forma <strong>sulfeto de ferro</strong>, um anel verde-acinzentado. Não é sinal de ovo estragado, mas indica excesso de tempo/temperatura. Para evitar: usar água fervente, tempo controlado, choque em água gelada e, se quiser, um pouco de ácido na água.</p>
<div class="callout tip"><strong>Tempos práticos</strong><p>Ovo cozido com gema mole: cerca de 5–6 minutos; gema cremosa: 7–8; duro: 9–10. O tempo depende do tamanho do ovo e da altitude. Resfriar imediatamente após o tempo desejado.</p></div>

<h3>Propriedades funcionais</h3>
<table>
  <thead><tr><th>Propriedade</th><th>Como funciona</th><th>Exemplo</th></tr></thead>
  <tbody>
    <tr><td><strong>Emulsificação</strong></td><td>Lecitina e lipoproteínas da gema rodeiam gotículas de óleo e água.</td><td>Maionese, molho holandês.</td></tr>
    <tr><td><strong>Espuma</strong></td><td>Clara batida incorpora ar; proteínas formam filme ao redor das bolhas.</td><td>Suspiro, merengue, bolo.</td></tr>
    <tr><td><strong>Gelificação/liga</strong></td><td>Proteínas coaguladas formam rede que retém água.</td><td>Flan, quibe, almôndega, embutidos.</td></tr>
    <tr><td><strong>Revestimento</strong></td><td>Clara ou ovo batido adere à farinha e sela a superfície.</td><td>Empanados.</td></tr>
    <tr><td><strong>Cor e sabor</strong></td><td>Carotenoides e reação de Maillard.</td><td>Ovos mexidos, omelete, assados.</td></tr>
    <tr><td><strong>Fermentação</strong></td><td>Clara incorpora ar e ajuda a crescer.</td><td>Suflê, bolo.</td></tr>
  </tbody>
</table>

<h3>Espuma de clara: ciência prática</h3>
<ul>
  <li>Bowl limpo, seco e sem gordura; qualquer resíduo de gema atrapalha.</li>
  <li>Ovo fresco tem clara mais espessa e espuma mais estável.</li>
  <li>Ácido (limão/cremor) ajuda a estabilizar; açúcar deve ser adicionado aos poucos, depois que a espuma começa a formar picos.</li>
  <li>Não bater demais: a espuma pode secar e colapsar.</li>
</ul>

<h3>Maionese: emulsão clássica</h3>
<p>A maionese é uma emulsão de óleo em água (vinagre/limão + gema). A gema fornece lecitina e lipoproteínas; a mostarda ajuda a estabilizar. Se a emulsão “cortar”, comece com uma gema nova e adicione a mistura aos poucos. Maionese caseira com ovo cru é risco de <em>Salmonella</em> — use ovo pasteurizado ou consuma imediatamente, mantendo refrigeração.</p>

<div class="recap">
  <h4>Em 30 segundos</h4>
  <ul>
    <li>Clara 60–65 °C; gema 65–70 °C; ovo inteiro 70–75 °C.</li>
    <li>Sal/ácido aceleram; açúcar/água atrasam a coagulação.</li>
    <li>Anel verde = sulfeto de ferro por excesso de cocção.</li>
    <li>Gema emulsifica; clara faz espuma; ovo liga e dá cor.</li>
  </ul>
</div>

<details class="quick">
  <summary>Teste rápido: por que o açúcar atrasa a coagulação do ovo?</summary>
  <div class="quick-body"><p>Porque aumenta a viscosidade e interfere na interação entre as proteínas, elevando a temperatura necessária para formar a rede. É útil em cremes, mas pode impedir o ponto de firmeza.</p></div>
</details>
`
      },
      {
        id: "b1l3",
        title: "Segurança, ovoprodutos e usos na técnica dietética",
        minutes: 8,
        intro: "Salmonella, pasteurização, ovoprodutos e substituições. O ovo é nutritivo, mas exige cuidado com temperatura e contaminação cruzada.",
        content: `
<p class="lead">O ovo pode veicular <em>Salmonella</em>, principalmente se consumido cru ou malcozido. A segurança não vem de “lavar com cloro”, mas de comprar bem, armazenar refrigerado, cozinhar adequadamente e evitar contaminação cruzada.</p>

<h3>Salmonella e risco</h3>
<ul>
  <li>A contaminação pode estar na casca ou no interior do ovo.</li>
  <li>Alimentos de risco: maionese caseira, mousse, tiramisu, ovo pochê malcozido, gemada, molho holandês feito com ovo cru.</li>
  <li>Prevenção: cozinhar até clara e gema firmes; usar ovo pasteurizado em preparações cruas; higienizar mãos, utensílios e bancada.</li>
  <li>Pessoas vulneráveis (gestantes, crianças, idosos, imunossuprimidos) devem evitar ovo cru.</li>
</ul>
<div class="callout exam"><strong>Pegadinha</strong><p>Ovo com casca trincada não deve ser usado cru; o risco de contaminação aumenta. Se a casca estiver suja, descarte ou use apenas após cocção completa. Não lave e guarde.</p></div>

<h3>Ovoprodutos</h3>
<table>
  <thead><tr><th>Tipo</th><th>O que é</th><th>Vantagem</th></tr></thead>
  <tbody>
    <tr><td>Ovo líquido pasteurizado</td><td>Clara, gema ou ovo inteiro tratado termicamente</td><td>Seguro para preparações cruas; praticidade.</td></tr>
    <tr><td>Ovo em pó</td><td>Desidratado</td><td>Longa vida útil; fácil transporte.</td></tr>
    <tr><td>Ovo congelado</td><td>Clara/gema separadas ou inteiro</td><td>Industrial; requer descongelamento adequado.</td></tr>
    <tr><td>Clara pasteurizada</td><td>Sem gema</td><td>Espuma e produtos “zero gema”.</td></tr>
  </tbody>
</table>
<p>Ovoprodutos passam por pasteurização e são mais seguros microbiologicamente. No entanto, podem ter aditivos e alterações de funcionalidade; siga o rótulo.</p>

<h3>Substituições e aplicações</h3>
<ul>
  <li><strong>Liga:</strong> ovo inteiro; em receitas veganas, linhaça hidratada, chia ou amido podem substituir parcialmente.</li>
  <li><strong>Emulsão:</strong> gema; lecitina de soja é alternativa industrial.</li>
  <li><strong>Espuma:</strong> clara; aquafaba (líquido de grão-de-bico) é alternativa vegana.</li>
  <li><strong>Dourado:</strong> ovo batido antes de assar; leite ou manteiga também podem dar cor.</li>
</ul>
<p>Em dietas com restrição de colesterol, o ovo não precisa ser proibido para todos; a orientação é individual. A gema concentra colesterol, mas também nutrientes importantes.</p>

<h3>Boas práticas na cozinha</h3>
<ol>
  <li>Comprar ovos com casca íntegra e armazenamento refrigerado.</li>
  <li>Separar ovos crus de alimentos prontos; usar tábua e utensílios distintos.</li>
  <li>Higienizar as mãos após manipular ovos crus.</li>
  <li>Cozinhar até a temperatura interna adequada; para preparações cruas, usar ovoproduto pasteurizado.</li>
  <li>Manter preparações com ovo sob refrigeração e respeitar o prazo.</li>
</ol>

<div class="recap">
  <h4>Em 30 segundos</h4>
  <ul>
    <li><em>Salmonella</em> é o principal risco; cozinhe bem ou use ovo pasteurizado.</li>
    <li>Ovoprodutos são pasteurizados e seguros para preparações cruas.</li>
    <li>Ovo é versátil: liga, emulsifica, faz espuma, doura e dá textura.</li>
    <li>Contaminação cruzada se evita com utensílios separados e higiene.</li>
  </ul>
</div>

<details class="quick">
  <summary>Teste rápido: maionese caseira com ovo cru é segura se ficar na geladeira?</summary>
  <div class="quick-body"><p>Não necessariamente. A refrigeração reduz a multiplicação, mas não elimina <em>Salmonella</em> já presente. O ideal é usar ovo pasteurizado ou consumir imediatamente, com boas práticas.</p></div>
</details>
`
      }
    ]
  },
  {
    id: "b2",
    track: "bases",
    title: "Óleos e gorduras: qualidade e fritura",
    short: "Óleos e gorduras",
    icon: "i-flame",
    accent: "green",
    blurb: "Ácidos graxos, pontos de fumaça, rancidez, hidrogenação, fritura, descarte do óleo e emulsões.",
    lessons: [
      {
        id: "b2l1",
        title: "Classificação das gorduras e funções na cozinha",
        minutes: 8,
        intro: "Nem toda gordura é igual: saturação, comprimento da cadeia e origem mudam o ponto de fumaça, a textura e o efeito na saúde.",
        content: `
<p class="lead">Gorduras são essenciais: fornecem energia, transportam vitaminas lipossolúveis, dão palatabilidade, textura e conduzem calor. O problema não é a gordura em si, mas o tipo, a quantidade e o uso.</p>

<h3>Ácidos graxos</h3>
<table>
  <thead><tr><th>Tipo</th><th>Estrutura</th><th>Fontes</th><th>Comportamento</th></tr></thead>
  <tbody>
    <tr><td>Saturados</td><td>Sem duplas ligações</td><td>Coco, dendê, manteiga, banha, carnes gordas</td><td>Sólidos em temperatura ambiente; mais estáveis ao calor.</td></tr>
    <tr><td>Monoinsaturados</td><td>Uma dupla ligação</td><td>Azeite, abacate, canola, castanhas</td><td>Líquidos; sensíveis à oxidação, mas adequados para uso moderado.</td></tr>
    <tr><td>Poli-insaturados</td><td>Duas ou mais duplas</td><td>Girassol, milho, soja, linhaça, peixes</td><td>Ômega-6 e ômega-3; oxidam com calor, luz e oxigênio.</td></tr>
    <tr><td>Trans</td><td>Insaturação com hidrogênios em lados opostos</td><td>Gorduras parcialmente hidrogenadas</td><td>Não essenciais; elevam LDL e reduzem HDL.</td></tr>
  </tbody>
</table>

<h3>Funções na técnica dietética</h3>
<ul>
  <li><strong>Energia:</strong> 9 kcal/g.</li>
  <li><strong>Palatabilidade e aroma:</strong> conduzem e retêm sabores.</li>
  <li><strong>Textura:</strong> crocância, maciez, untuosidade e aeração.</li>
  <li><strong>Transferência de calor:</strong> fritura, refogado, assado.</li>
  <li><strong>Emulsificação:</strong> maionese, molhos, massas.</li>
  <li><strong>Conservação:</strong> barreira ao oxigênio e à umidade.</li>
  <li><strong>Vitaminas lipossolúveis:</strong> transporte de A, D, E e K.</li>
</ul>

<h3>Gorduras animais x vegetais</h3>
<table>
  <thead><tr><th>Aspecto</th><th>Animais</th><th>Vegetais</th></tr></thead>
  <tbody>
    <tr><td>Exemplos</td><td>Manteiga, banha, sebo, gordura de coco (vegetal, mas rica em saturados)</td><td>Azeite, canola, girassol, soja, milho, dendê</td></tr>
    <tr><td>Perfil</td><td>Mais saturados e colesterol</td><td>Mais insaturados; sem colesterol</td></tr>
    <tr><td>Estabilidade</td><td>Geralmente maior</td><td>Variável; poli-insaturados oxidam mais</td></tr>
  </tbody>
</table>
<p>“Vegetal” não significa automaticamente saudável: óleo de coco e dendê são ricos em saturados; margarinas podem ter gorduras trans (hoje limitadas por lei) e aditivos.</p>

<h3>Ômega-3, 6 e 9</h3>
<ul>
  <li><strong>Ômega-3:</strong> ALA (linhaça, chia, nozes), EPA/DHA (peixes gordurosos). Importante para inflamação, retina e cérebro.</li>
  <li><strong>Ômega-6:</strong> girassol, milho, soja. Essencial, mas deve haver equilíbrio com ômega-3.</li>
  <li><strong>Ômega-9:</strong> azeite, abacate. Monoinsaturado, não essencial.</li>
</ul>

<div class="recap">
  <h4>Em 30 segundos</h4>
  <ul>
    <li>Saturados: sólidos, estáveis; insaturados: líquidos, mais sensíveis.</li>
    <li>Trans: evitar; efeito negativo no LDL/HDL.</li>
    <li>Gordura dá energia, sabor, textura e conduz calor.</li>
    <li>“Vegetal” não é sinônimo de saudável.</li>
  </ul>
</div>

<details class="quick">
  <summary>Teste rápido: por que o azeite é mais adequado para finalizar do que para fritura profunda?</summary>
  <div class="quick-body"><p>Porque é rico em monoinsaturados e compostos fenólicos, mas tem ponto de fumaça menor que óleos refinados e pode degradar em frituras prolongadas. Para finalizar e refogar leve, é excelente.</p></div>
</details>
`
      },
      {
        id: "b2l2",
        title: "Processamento, pontos de fumaça e rancidez",
        minutes: 9,
        intro: "Ponto de fumaça, fulgor e fogo não são a mesma coisa. E a degradação do óleo começa muito antes de ele ficar preto.",
        content: `
<p class="lead">A qualidade de uma gordura depende do grau de refino, da presença de antioxidantes, do tempo e da temperatura. Aquecer além do ponto de fumaça produz compostos indesejáveis e sabores ruins.</p>

<h3>Extração e refino</h3>
<ul>
  <li><strong>Prensagem a frio:</strong> menor rendimento, preserva compostos fenólicos e aroma; ponto de fumaça menor.</li>
  <li><strong>Extração por solvente + refino:</strong> maior rendimento, remove impurezas e ácidos graxos livres; ponto de fumaça maior.</li>
  <li><strong>Hidrogenação:</strong> adiciona hidrogênio às duplas ligações; torna a gordura mais sólida e estável.</li>
</ul>

<h3>Pontos de fumaça aproximados</h3>
<table>
  <thead><tr><th>Gordura</th><th>Ponto de fumaça (°C)</th><th>Uso</th></tr></thead>
  <tbody>
    <tr><td>Azeite extravirgem</td><td>190–207</td><td>Finalização, salada, refogado leve.</td></tr>
    <tr><td>Canola refinado</td><td>~204</td><td>Uso geral, fritura moderada.</td></tr>
    <tr><td>Girassol refinado</td><td>~225</td><td>Fritura e assados.</td></tr>
    <tr><td>Soja refinado</td><td>~234</td><td>Fritura por imersão.</td></tr>
    <tr><td>Coco</td><td>175–205</td><td>Assados e doces.</td></tr>
    <tr><td>Manteiga</td><td>~150</td><td>Sabor; não é ideal para fritura profunda.</td></tr>
    <tr><td>Banha</td><td>~190</td><td>Fritura e cocção tradicional.</td></tr>
  </tbody>
</table>
<p>Valores variam com refino e qualidade. O ponto de fumaça <strong>cai</strong> com o uso repetido, pois ácidos graxos livres e compostos de degradação se acumulam.</p>

<h3>Fumaça, fulgor e fogo</h3>
<table>
  <thead><tr><th>Evento</th><th>O que acontece</th></tr></thead>
  <tbody>
    <tr><td>Ponto de fumaça</td><td>Início da decomposição visível, com liberação de fumaça.</td></tr>
    <tr><td>Ponto de fulgor</td><td>Vapores inflamam na presença de chama.</td></tr>
    <tr><td>Ponto de fogo</td><td>Combustão contínua da gordura.</td></tr>
  </tbody>
</table>
<div class="callout exam"><strong>Não troque os nomes</strong><p>Fumaça ≠ fulgor ≠ fogo. A prova costuma usar os três para testar se você sabe que são temperaturas diferentes.</p></div>

<h3>Rancidez</h3>
<ul>
  <li><strong>Hidrolítica:</strong> quebra da gordura com liberação de ácidos graxos livres; ocorre com água e enzimas (lipases). Sabor de sabão/queijo.</li>
  <li><strong>Oxidativa:</strong> reação com oxigênio, acelerada por luz, calor e metais; forma peróxidos, aldeídos e cetonas. Sabor de “velho”, “papelão”.</li>
  <li><strong>Prevenção:</strong> armazenar no escuro, fechado, longe do calor; evitar umidade; usar antioxidantes (vitamina E, BHA/BHT conforme legislação).</li>
</ul>

<h3>Hidrogenação e trans</h3>
<p>A hidrogenação parcial cria ácidos graxos trans, que aumentam LDL e reduzem HDL. A <strong>RDC 332/2019</strong> limitou a gordura trans industrial a 2 g por 100 g de gordura total e proibiu óleos parcialmente hidrogenados. A hidrogenação total gera gordura saturada, sem trans. Margarinas modernas reformularam suas gorduras, mas é preciso ler o rótulo.</p>

<h3>Como avaliar a qualidade do óleo</h3>
<ul>
  <li>Cor, odor, fumaça e espuma persistente.</li>
  <li>Viscosidade aumentada e resíduos na superfície.</li>
  <li>Compostos polares: descarte em torno de <strong>25–27%</strong> (conforme método/legislação).</li>
  <li>Não “salvar” óleo escuro adicionando óleo novo.</li>
</ul>

<div class="recap">
  <h4>Em 30 segundos</h4>
  <ul>
    <li>Refino eleva o ponto de fumaça; uso repetido reduz.</li>
    <li>Fumaça, fulgor e fogo são eventos diferentes.</li>
    <li>Rancidez hidrolítica (água/enzima) e oxidativa (oxigênio/luz/calor).</li>
    <li>Trans: limitados por lei; evitar gorduras parcialmente hidrogenadas.</li>
  </ul>
</div>

<details class="quick">
  <summary>Teste rápido: óleo que espuma e escurece pode ser reutilizado?</summary>
  <div class="quick-body"><p>Não é recomendado. Espuma persistente, escurecimento e odor indicam degradação; compostos polares podem estar acima do limite. Descarte.</p></div>
</details>
`
      },
      {
        id: "b2l3",
        title: "Fritura, emulsões e aplicações práticas",
        minutes: 9,
        intro: "160–180 °C, alimento seco, gordura limpa e descarte no momento certo. A fritura é uma técnica de precisão.",
        content: `
<p class="lead">Fritar é cozinhar por imersão em gordura quente. A crosta se forma pela desidratação superficial e pela reação de Maillard; o interior cozinha por condução. Se a temperatura está errada, o resultado é gordura demais ou queimado.</p>

<h3>Temperatura e efeitos</h3>
<table>
  <thead><tr><th>Faixa</th><th>Efeito</th></tr></thead>
  <tbody>
    <tr><td>&lt; 160 °C</td><td>Alimento absorve gordura, fica encharcado e não dourа.</td></tr>
    <tr><td>160–180 °C</td><td>Faixa ideal: crosta, cocção uniforme e menor absorção.</td></tr>
    <tr><td>&gt; 180–200 °C</td><td>Degradação do óleo, queima externa e interior cru.</td></tr>
  </tbody>
</table>
<p>Ideal: <strong>175 °C</strong>, com variação de 160–180 °C. Use termômetro; teste com um cubo de pão — ele deve dourar em cerca de 60 segundos.</p>

<h3>Boas práticas de fritura</h3>
<ol>
  <li>Secar bem o alimento: água acelera hidrólise e respingos.</li>
  <li>Não sobrecarregar a panela: a temperatura cai e o alimento absorve gordura.</li>
  <li>Usar gordura limpa e de ponto de fumaça adequado.</li>
  <li>Não salgar antes de fritar (o sal puxa água); tempere depois.</li>
  <li>Escorrer em grade, não em papel amassado, para manter crocância.</li>
  <li>Filtrar partículas e armazenar o óleo no escuro, fechado.</li>
  <li>Não reutilizar indefinidamente; descartar quando degradado.</li>
</ol>
<div class="callout warn"><strong>Segurança</strong><p>Nunca jogar água em óleo quente. Em caso de princípio de incêndio, tampar a panela e desligar o fogo; não usar água. Manter crianças longe.</p></div>

<h3>Métodos de fritura</h3>
<ul>
  <li><strong>Por imersão:</strong> alimento submerso; batata, bolinho, frango empanado.</li>
  <li><strong>Por contato/saltear:</strong> pouca gordura, superfície quente; legumes, carnes.</li>
  <li><strong>Shallow frying:</strong> gordura até a metade do alimento; ovo, panqueca.</li>
  <li><strong>Refogar:</strong> calor misto, gordura + água/vapor; base de molhos.</li>
</ul>

<h3>Emulsões</h3>
<table>
  <thead><tr><th>Tipo</th><th>Fase dispersa</th><th>Exemplo</th></tr></thead>
  <tbody>
    <tr><td>Óleo em água</td><td>Gotículas de óleo em água</td><td>Maionese, molho branco.</td></tr>
    <tr><td>Água em óleo</td><td>Gotículas de água em gordura</td><td>Manteiga, margarina.</td></tr>
    <tr><td>Temporária</td><td>Sem emulsificante estável</td><td>Vinagrete.</td></tr>
    <tr><td>Estável</td><td>Com emulsificante</td><td>Maionese (lecitina), holandês.</td></tr>
  </tbody>
</table>

<h3>Manteiga x margarina</h3>
<table>
  <thead><tr><th>Aspecto</th><th>Manteiga</th><th>Margarina</th></tr></thead>
  <tbody>
    <tr><td>Origem</td><td>Gordura animal (leite)</td><td>Emulsão de óleos vegetais</td></tr>
    <tr><td>Água</td><td>~16%</td><td>~16–20%</td></tr>
    <tr><td>Ponto de fumaça</td><td>Baixo (~150 °C)</td><td>Variável; geralmente maior</td></tr>
    <tr><td>Trans</td><td>Naturalmente pequena</td><td>Reduzida/eliminada pela legislação</td></tr>
    <tr><td>Uso</td><td>Sabor, finalização, assados</td><td>Espalhar, assar, alguns tipos para fritura</td></tr>
  </tbody>
</table>

<h3>Substituições</h3>
<p>Em receitas, trocar gordura por óleo muda textura e ponto de fumaça. Manteiga dá sabor e estrutura; óleo dá maciez e umidade. Para fritura, escolha gordura com ponto de fumaça alto e sabor neutro. Não reutilize óleo de fritura de peixe para doces.</p>

<div class="recap">
  <h4>Em 30 segundos</h4>
  <ul>
    <li>Fritura ideal: 160–180 °C; alimento seco e panela não sobrecarregada.</li>
    <li>Água acelera degradação; salgar depois.</li>
    <li>Descarte quando espuma/escurece/odora ou compostos polares ≥ 25–27%.</li>
    <li>Maionese = óleo em água com lecitina; manteiga = água em óleo.</li>
  </ul>
</div>

<details class="quick">
  <summary>Teste rápido: por que a batata frita fica murcha em óleo frio?</summary>
  <div class="quick-body"><p>Porque a temperatura baixa não desidrata a superfície rapidamente; o alimento cozinha e absorve gordura antes de formar crosta. O óleo precisa estar na faixa de 160–180 °C.</p></div>
</details>
`
      }
    ]
  },
  {
    id: "b3",
    track: "bases",
    title: "Carnes: estrutura, cocção e qualidade",
    short: "Carnes",
    icon: "i-knife",
    accent: "green",
    blurb: "Fibras, colágeno, rigor mortis, maciez, temperaturas seguras, Maillard, aves, pescados e embutidos.",
    lessons: [
      {
        id: "b3l1",
        title: "Estrutura da carne, rigor mortis e maciez",
        minutes: 9,
        intro: "Por que o filé é macio e o músculo é duro? A resposta está nas fibras, no colágeno e no que acontece depois da morte do animal.",
        content: `
<p class="lead">Carne é músculo. A qualidade sensorial depende da quantidade e do tipo de fibras, do tecido conjuntivo, da gordura intramuscular e do manejo pós-abate.</p>

<h3>Estrutura</h3>
<table>
  <thead><tr><th>Componente</th><th>O que é</th><th>Efeito</th></tr></thead>
  <tbody>
    <tr><td>Fibras musculares</td><td>Actina e miosina organizadas em sarcômeros</td><td>Contraem com calor e perdem água; músculos mais exercitados são mais duros.</td></tr>
    <tr><td>Colágeno</td><td>Proteína do tecido conjuntivo</td><td>Com calor úmido prolongado, vira gelatina e amacia.</td></tr>
    <tr><td>Elastina</td><td>Proteína elástica</td><td>Resiste ao calor; pode exigir remoção.</td></tr>
    <tr><td>Gordura intramuscular</td><td>Marmoreio</td><td>Melhora suculência, sabor e protege do ressecamento.</td></tr>
    <tr><td>Mioglobina</td><td>Pigmento muscular</td><td>Cor vermelha; muda com calor, pH e oxigênio.</td></tr>
  </tbody>
</table>

<h3>Rigor mortis e maturação</h3>
<p>Após o abate, o ATP se esgota, as fibras se contraem e a carne fica rígida — <strong>rigor mortis</strong>. Com o tempo, enzimas proteolíticas degradam parcialmente as proteínas e a carne amacia: é a <strong>maturação</strong>. Carne maturada é mais macia e saborosa, mas exige controle de temperatura e higiene.</p>
<ul>
  <li><strong>pH final:</strong> carnes normais ficam em torno de 5,5–5,8.</li>
  <li><strong>DFD</strong> (dark, firm, dry): pH alto, carne escura, firme e seca; menor vida útil.</li>
  <li><strong>PSE</strong> (pale, soft, exudative): pH baixo, carne pálida, mole e exsudativa; comum em suínos estressados.</li>
</ul>

<h3>Cor da carne</h3>
<p>A mioglobina é vermelha quando oxigenada (oximioglobina). Com o calor, desnatura e fica marrom-acinzentada. Com nitrito, forma <strong>nitrosomioglobina</strong>, que mantém a cor rosa dos embutidos. Carne cozida demais perde cor e suculência.</p>

<h3>Fatores de maciez</h3>
<ul>
  <li><strong>Corte:</strong> músculos pouco exercitados (filé, contrafilé) são mais macios.</li>
  <li><strong>Idade do animal:</strong> animais jovens têm menos colágeno e mais maciez.</li>
  <li><strong>Marmoreio:</strong> gordura intramuscular melhora suculência.</li>
  <li><strong>Maturação:</strong> enzimas amaciam.</li>
  <li><strong>pH:</strong> pH extremo prejudica.</li>
  <li><strong>Cocção:</strong> método e temperatura adequados.</li>
  <li><strong>Corte contra a fibra:</strong> encurta as fibras e facilita a mastigação.</li>
</ul>

<h3>Cortes e classificação</h3>
<table>
  <thead><tr><th>Tipo</th><th>Exemplos</th><th>Melhor uso</th></tr></thead>
  <tbody>
    <tr><td>Bovinos macios</td><td>Filé, contrafilé, alcatra, picanha</td><td>Grelhar, assar, saltear.</td></tr>
    <tr><td>Bovinos duros</td><td>Acém, músculo, costela, cupim</td><td>Cozinhar, estufar, brasear.</td></tr>
    <tr><td>Suínos</td><td>Lombo, pernil, costela, barriga</td><td>Assar, grelhar, cozinhar.</td></tr>
    <tr><td>Aves</td><td>Peito, coxa, sobrecoxa, asa</td><td>Assar, grelhar, cozinhar.</td></tr>
    <tr><td>Pescados</td><td>Filés, postas, inteiros</td><td>Vapor, assar, escalfar, grelhar.</td></tr>
  </tbody>
</table>

<div class="recap">
  <h4>Em 30 segundos</h4>
  <ul>
    <li>Maciez = fibras + colágeno + marmoreio + maturação + cocção.</li>
    <li>Rigor mortis endurece; maturação amacia.</li>
    <li>Colágeno precisa de calor úmido e tempo; elastina não amacia facilmente.</li>
    <li>Corte contra a fibra melhora a mastigação.</li>
  </ul>
</div>

<details class="quick">
  <summary>Teste rápido: por que o músculo precisa de cozimento longo e úmido?</summary>
  <div class="quick-body"><p>Porque tem muito colágeno e fibras exercitadas. O calor úmido prolongado hidrolisa o colágeno em gelatina, amaciando a carne; calor seco rápido a deixaria dura e seca.</p></div>
</details>
`
      },
      {
        id: "b3l2",
        title: "Cocção da carne: temperaturas, Maillard e suculência",
        minutes: 9,
        intro: "Selar não “lacra” os sucos, mas desenvolve sabor. Descansar faz diferença. E a temperatura interna é questão de segurança.",
        content: `
<p class="lead">Cozinhar carne é transformar proteínas, perder água e criar sabor. O método depende do corte e do objetivo: maciez, crosta, suculência ou segurança.</p>

<h3>O que o calor faz</h3>
<ul>
  <li><strong>40–50 °C:</strong> desnaturação da miosina; a carne começa a mudar.</li>
  <li><strong>60–65 °C:</strong> colágeno contrai; perda de água aumenta.</li>
  <li><strong>60–80 °C:</strong> fibras contraem, água é expulsa; a carne encolhe.</li>
  <li><strong>70–80 °C + umidade + tempo:</strong> colágeno se transforma em gelatina; maciez em cortes duros.</li>
  <li><strong>&gt; 140–150 °C e superfície seca:</strong> reação de Maillard; cor e aroma.</li>
</ul>
<div class="callout exam"><strong>Selar não “lacra” os sucos</strong><p>A crosta formada por Maillard melhora sabor e textura, mas a perda de água continua. O que preserva suculência é controlar temperatura, tempo e repouso.</p></div>

<h3>Temperaturas seguras</h3>
<table>
  <thead><tr><th>Alimento</th><th>Temperatura interna</th><th>Observação</th></tr></thead>
  <tbody>
    <tr><td>Bovina inteira</td><td>63 °C + repouso 3 min</td><td>Segurança; ponto sensorial varia.</td></tr>
    <tr><td>Carne moída</td><td>71 °C</td><td>Maior risco microbiológico; não servir malpassada.</td></tr>
    <tr><td>Aves</td><td>74 °C</td><td><em>Salmonella</em> e <em>Campylobacter</em>.</td></tr>
    <tr><td>Suína</td><td>63 °C + repouso</td><td>Atualmente segura; antes se exigia 71 °C.</td></tr>
    <tr><td>Peixes</td><td>63 °C ou opaco/firme</td><td>Cuidado com parasitas em preparações cruas.</td></tr>
  </tbody>
</table>
<p>Use termômetro no centro da parte mais grossa, evitando osso e gordura. A cor não é garantia de segurança.</p>

<h3>Métodos e escolha</h3>
<table>
  <thead><tr><th>Situação</th><th>Método</th><th>Por quê</th></tr></thead>
  <tbody>
    <tr><td>Corte duro, muito colágeno</td><td>Calor úmido longo: cozinhar, estufar, brasear</td><td>Hidrata e converte colágeno em gelatina.</td></tr>
    <tr><td>Corte macio</td><td>Calor seco rápido: grelhar, assar, saltear</td><td>Preserva suculência e forma crosta.</td></tr>
    <tr><td>Ave inteira</td><td>Assar/braseado, 74 °C</td><td>Uniformidade e segurança.</td></tr>
    <tr><td>Peixe delicado</td><td>Vapor, escalfar, assar</td><td>Proteína coagula rápido e desmancha.</td></tr>
  </tbody>
</table>

<h3>Repouso e corte</h3>
<p>Após assar ou grelhar, deixe a carne descansar <strong>5–20 minutos</strong> (peças maiores, mais tempo). As fibras relaxam e os sucos se redistribuem; cortar imediatamente perde suculência. Corte <strong>contra a fibra</strong>, em fatias não muito finas para carnes suculentas.</p>

<h3>Sal e tempero</h3>
<ul>
  <li>Salgar antes pode ajudar a temperar profundamente, mas em cortes finos pode puxar água.</li>
  <li>Marinadas com ácido e sal amaciam levemente e incorporam sabor; não esterilizam.</li>
  <li>Ervas e especiarias não substituem controle de temperatura.</li>
</ul>

<h3>Erros comuns</h3>
<ul>
  <li>Fogo alto em carne grossa: queima fora e deixa cru dentro.</li>
  <li>Não secar a superfície: dificulta Maillard e cozinha no vapor.</li>
  <li>Furar a carne repetidamente: perde suco.</li>
  <li>Não descansar: suco escorre no prato.</li>
  <li>Usar calor seco em corte duro: fica borrachudo.</li>
</ul>

<div class="recap">
  <h4>Em 30 segundos</h4>
  <ul>
    <li>Bovina inteira 63 °C + repouso; moída 71 °C; aves 74 °C.</li>
    <li>Maillard &gt; 140–150 °C com superfície seca.</li>
    <li>Colágeno → gelatina com calor úmido e tempo.</li>
    <li>Descansar e cortar contra a fibra preserva suculência.</li>
  </ul>
</div>

<details class="quick">
  <summary>Teste rápido: selar a carne “prende” os sucos?</summary>
  <div class="quick-body"><p>Não. A crosta melhora sabor e textura, mas a perda de água continua. O repouso e o controle de temperatura são o que preservam a suculência.</p></div>
</details>
`
      },
      {
        id: "b3l3",
        title: "Aves, pescados, miúdos e embutidos",
        minutes: 9,
        intro: "Cada tipo de carne tem riscos e cuidados próprios. Aves exigem 74 °C; pescados podem ter histamina e parasitas; embutidos envolvem nitrito.",
        content: `
<p class="lead">A segurança microbiológica muda com o animal e o processamento. Aves são as principais fontes de <em>Salmonella</em> e <em>Campylobacter</em>; pescados podem veicular parasitas e histamina; embutidos exigem controle de nitrito.</p>

<h3>Aves</h3>
<ul>
  <li><strong>Não lavar cru:</strong> espalha microrganismos na pia e em utensílios.</li>
  <li><strong>Tábua separada</strong> para carne crua e alimentos prontos.</li>
  <li><strong>Cozinhar a 74 °C</strong> no centro da parte mais grossa.</li>
  <li><strong>Descongelar sob refrigeração</strong>; não recongelar cru.</li>
  <li><strong>Frango inteiro:</strong> assar até a coxa atingir 74 °C; suco claro não é garantia suficiente.</li>
</ul>

<h3>Pescados e frutos do mar</h3>
<table>
  <thead><tr><th>Indicador de frescor</th><th>Peixe fresco</th></tr></thead>
  <tbody>
    <tr><td>Olhos</td><td>Claros, salientes, córnea transparente</td></tr>
    <tr><td>Guelras</td><td>Vermelhas, úmidas, sem odor forte</td></tr>
    <tr><td>Carne</td><td>Firme, elástica, adere ao osso</td></tr>
    <tr><td>Odor</td><td>Suave, sem amônia</td></tr>
    <tr><td>Escamas</td><td>Brilhantes, bem aderidas</td></tr>
  </tbody>
</table>
<ul>
  <li><strong>Histamina:</strong> peixes escombrídeos (atum, cavala, sardinha) mal conservados; toxina termoestável, não destruída pela cocção. Sintomas de scombroidose.</li>
  <li><strong>Parasitas:</strong> peixes crus podem ter nematódeos; congelamento adequado ou cocção eliminam.</li>
  <li><strong>Frutos do mar:</strong> <em>Vibrio</em>, norovírus e hepatite A; cozinhar bem e evitar contaminação cruzada.</li>
</ul>

<h3>Miúdos</h3>
<ul>
  <li>Fígado: rico em ferro, vitamina A e B12; consumir com moderação (vitamina A em excesso é tóxica).</li>
  <li>Rins, coração, moela: alto valor proteico; limpeza rigorosa.</li>
  <li>Manusear rapidamente e refrigerar; são perecíveis.</li>
</ul>

<h3>Embutidos e conservação</h3>
<p>Nitrito e nitrato de sódio dão cor rosa, inibem <em>Clostridium botulinum</em> e contribuem para o sabor. O nitrito pode formar <strong>nitrosaminas</strong>, compostos potencialmente carcinogênicos, especialmente em temperaturas altas e na presença de aminas. O uso de ascorbato/isoascorbato reduz essa formação. A legislação define limites; o consumo deve ser moderado.</p>
<div class="callout warn"><strong>Não confunda</strong><p>Nitrito não é “conservante qualquer”: é aditivo com função tecnológica e risco controlado. Embutidos não são fonte recomendada diária de proteína; prefira carnes frescas.</p></div>

<h3>Conservação de carnes</h3>
<ul>
  <li>Refrigeração: &lt; 5 °C; carnes cruas na prateleira inferior para evitar gotejamento.</li>
  <li>Congelamento: ≤ −18 °C; embalar bem para evitar queimadura por frio.</li>
  <li>Descongelamento: sob refrigeração ou micro-ondas com cocção imediata.</li>
  <li>Cocção e resfriamento rápidos; não deixar na zona de perigo (5–60 °C).</li>
  <li>Separar utensílios e superfícies de contato com carne crua.</li>
</ul>

<div class="recap">
  <h4>Em 30 segundos</h4>
  <ul>
    <li>Aves: 74 °C, não lavar cru, tábua separada.</li>
    <li>Peixe fresco: olhos claros, guelras vermelhas, carne firme; histamina não é destruída pelo calor.</li>
    <li>Fígado é rico em vitamina A e ferro; moderação.</li>
    <li>Nitrito inibe botulismo, mas pode formar nitrosaminas; limites legais e consumo moderado.</li>
  </ul>
</div>

<details class="quick">
  <summary>Teste rápido: por que não se deve lavar o frango cru?</summary>
  <div class="quick-body"><p>Porque a água espalha <em>Salmonella</em> e <em>Campylobacter</em> pela pia, bancada e utensílios, aumentando a contaminação cruzada. O cozimento a 74 °C elimina o risco.</p></div>
</details>
`
      }
    ]
  }
]);
