window.NUT_MODULES = (window.NUT_MODULES || []).concat([
  {
    id: "b4",
    track: "bases",
    title: "Cereais: estrutura, amido e cocção",
    short: "Cereais",
    icon: "i-wheat",
    accent: "green",
    blurb: "Estrutura do grão, classificação, amido (gelatinização, retrogradação, dextrinização), glúten e cocção de arroz, trigo, milho e aveia.",
    lessons: [
      {
        id: "b4l1",
        title: "Estrutura, classificação e composição dos cereais",
        minutes: 8,
        intro: "Entenda o grão por dentro: o que o refino retira, o que o parboilizado devolve e por que isso muda a nutrição e a cocção.",
        content: `
<p class="lead">Cereais são os grãos das gramíneas usados como base energética da alimentação: arroz, trigo, milho, aveia, cevada, centeio, sorgo e triticale. Quinoa, amaranto e trigo-sarraceno são <strong>pseudocereais</strong> — têm composição parecida, mas não são gramíneas.</p>

<h3>Anatomia do grão</h3>
<table>
  <thead><tr><th>Parte</th><th>Proporção aproximada</th><th>O que contém</th><th>O que acontece no refino</th></tr></thead>
  <tbody>
    <tr><td>Pericarpo (farelo)</td><td>5–8%</td><td>Fibras, vitaminas do complexo B, minerais, compostos fenólicos</td><td>É removido: perde-se fibra e micronutrientes</td></tr>
    <tr><td>Endosperma</td><td>80–85%</td><td>Amido (60–75%) e proteínas de reserva</td><td>Permanece: é a parte do grão polido</td></tr>
    <tr><td>Gérmen</td><td>2–3%</td><td>Lipídios, vitamina E, vitaminas B, minerais, enzimas</td><td>É removido: o grão refinado fica mais estável, porém menos nutritivo</td></tr>
  </tbody>
</table>
<p>O farelo e o gérmen concentram a maior parte dos micronutrientes. Por isso, quanto mais refinado o cereal, menor a densidade de fibras, vitaminas e minerais. No Brasil, farinhas de trigo e o arroz polido são <strong>fortificados com ferro e ácido fólico</strong> por determinação legal — isso compensa parte das perdas, mas não repõe a fibra.</p>

<h3>Classificação que a prova cobra</h3>
<ul>
  <li><strong>Pelo grão:</strong> arroz, trigo, milho, aveia, cevada, centeio, sorgo.</li>
  <li><strong>Pelo processamento:</strong> integral (farelo e gérmen preservados), polido/refinado (só endosperma), parboilizado (tratamento hidrotérmico antes do polimento).</li>
  <li><strong>Pela forma:</strong> grão, farinha, flocos, semolina, farelo.</li>
</ul>

<h3>Integral, polido e parboilizado</h3>
<table>
  <thead><tr><th>Tipo de arroz</th><th>Processo</th><th>Nutrientes</th><th>Cocção e textura</th></tr></thead>
  <tbody>
    <tr><td>Integral</td><td>Descasca e mantém farelo e gérmen</td><td>Mais fibra, vitaminas, minerais e lipídios</td><td>Demora mais, absorve mais água, grão mais firme</td></tr>
    <tr><td>Polido</td><td>Remove casca, farelo e gérmen</td><td>Predomina amido; é fortificado com ferro e folato</td><td>Cozinha rápido, textura solta</td></tr>
    <tr><td>Parboilizado</td><td>Vapor sob pressão antes do polimento</td><td>Nutrientes do farelo migram para o endosperma; fica entre integral e polido</td><td>Grão mais firme e solto, menos pegajoso</td></tr>
  </tbody>
</table>
<div class="callout exam"><strong>Cai na prova</strong><p>O parboilizado não é “integral”. O vapor empurra parte dos nutrientes do farelo para dentro do grão antes de o farelo ser removido. Ele é mais nutritivo que o polido e menos que o integral.</p></div>

<h3>Proteínas, glúten e fatores antinutricionais</h3>
<ul>
  <li>As proteínas dos cereais são <strong>limitantes em lisina</strong>; a combinação com leguminosas (arroz + feijão) melhora o perfil de aminoácidos.</li>
  <li><strong>Glúten:</strong> presente no trigo, centeio, cevada e derivados. Arroz, milho, aveia e pseudocereais não têm glúten — a aveia exige cuidado com contaminação cruzada.</li>
  <li><strong>Fitato:</strong> no farelo, reduz a absorção de ferro, zinco e cálcio. Remolho, fermentação e cozimento reduzem o efeito.</li>
  <li><strong>Lipídios do gérmen:</strong> oxidam com facilidade; por isso farinha integral e gérmen de trigo rançam mais rápido.</li>
</ul>

<div class="recap">
  <h4>Em 30 segundos</h4>
  <ul>
    <li>Pericarpo = fibra e micronutrientes; endosperma = amido; gérmen = gordura e vitamina E.</li>
    <li>Refino retira farelo e gérmen; integral preserva; parboilizado migra nutrientes antes de polir.</li>
    <li>Cereais são limitantes em lisina; glúten só em trigo, centeio e cevada.</li>
    <li>Fitato do farelo reduz absorção de minerais; remolho e fermentação ajudam.</li>
  </ul>
</div>

<details class="quick">
  <summary>Teste rápido: por que o arroz integral demora mais para cozinhar?</summary>
  <div class="quick-body"><p>Porque o farelo e o gérmen formam uma barreira física à entrada de água e à gelatinização do amido do endosperma. Por isso ele precisa de mais água, mais tempo e, de preferência, remolho.</p></div>
</details>
`
      },
      {
        id: "b4l2",
        title: "Amido: gelatinização, retrogradação e dextrinização",
        minutes: 10,
        intro: "Os três nomes que decidem questões: gelatinização, retrogradação e dextrinização. Entenda o que o calor e o frio fazem com o amido.",
        content: `
<p class="lead">O amido é um polissacarídeo de glicose formado por dois polímeros: <strong>amilose</strong> (linear) e <strong>amilopectina</strong> (ramificada). A proporção entre eles explica a textura de molhos, pães, arroz e doces.</p>

<h3>Amilose e amilopectina</h3>
<table>
  <thead><tr><th>Componente</th><th>Proporção típica</th><th>Comportamento</th></tr></thead>
  <tbody>
    <tr><td>Amilose</td><td>20–30%</td><td>Linear; forma géis firmes e tem maior tendência a retrogradar</td></tr>
    <tr><td>Amilopectina</td><td>70–80%</td><td>Ramificada; dá viscosidade, clareza e menor retrogradação</td></tr>
  </tbody>
</table>
<p>Arroz e milho têm mais amilose e tendem a ficar mais soltos; variedades com mais amilopectina ficam mais pegajosas e cremosas (arroz arbóreo, por exemplo).</p>

<h3>Gelatinização</h3>
<p>Com água e calor, os grânulos incham, absorvem água e perdem a organização cristalina. O grânulo rompe, o amido solubiliza e a mistura engrossa. A faixa geral fica em torno de <strong>60–80 °C</strong>, variando com a fonte:</p>
<table>
  <thead><tr><th>Fonte</th><th>Faixa aproximada de gelatinização</th><th>Uso típico</th></tr></thead>
  <tbody>
    <tr><td>Milho (maisena)</td><td>62–72 °C</td><td>Molhos, cremes, pudins</td></tr>
    <tr><td>Trigo</td><td>58–64 °C</td><td>Roux, pães, massas</td></tr>
    <tr><td>Arroz</td><td>68–78 °C</td><td>Cocção do grão, bolos</td></tr>
    <tr><td>Batata</td><td>58–68 °C</td><td>Purês e sopas</td></tr>
  </tbody>
</table>
<p><strong>O que atrasa a gelatinização:</strong> açúcar (compete pela água e eleva a temperatura necessária), gordura (dificulta a hidratação), ácido (hidrolisa o amido e reduz a viscosidade) e agitação excessiva. <strong>O que acelera:</strong> água em excesso, calor e granulometria fina.</p>

<h3>Retrogradação</h3>
<p>No resfriamento, as cadeias de amilose se reorganizam e formam zonas cristalinas: o gel endurece, fica opaco e libera água (<strong>sinérese</strong>). É o que acontece com o arroz na geladeira, com o pão que “endurece” e com o pudim que solta líquido.</p>
<ul>
  <li>A retrogradação é mais intensa em temperaturas de refrigeração (cerca de 4 °C).</li>
  <li>O reaquecimento amolece parcialmente, mas não desfaz tudo — por isso o arroz requentado nunca fica igual.</li>
  <li>Gorduras, emulsificantes e açúcares podem reduzir a retrogradação; é o princípio dos pães industriais macios.</li>
</ul>

<h3>Dextrinização</h3>
<p>É a quebra do amido por <strong>calor seco</strong> (ou ácido), gerando dextrinas menores: o produto escurece, ganha sabor e perde capacidade de espessar. Exemplos: farinha torrada, crosta de pão, amido tostado em receitas e a coloração de bolos e torradas.</p>
<div class="callout exam"><strong>Cai na prova</strong><p>Não confunda: <strong>gelatinização</strong> = amido + água + calor (engrossa). <strong>Retrogradação</strong> = resfriamento (endurece, sinérese). <strong>Dextrinização</strong> = calor seco (quebra, cor e aroma).</p></div>

<h3>Espessantes na prática</h3>
<ul>
  <li><strong>Maisena (amido de milho):</strong> gel claro e brilhante; engrossa rápido; deve ser dissolvida em água fria antes (slurry) para não empelotar.</li>
  <li><strong>Roux:</strong> farinha + gordura aquecidas; espessa e dá sabor; usado em molho branco.</li>
  <li><strong>Amido de mandioca/polvilho:</strong> gel mais transparente e elástico; cuidado com excesso de aquecimento.</li>
  <li><strong>Proporção guia:</strong> 1 colher de sopa de amido (~10 g) para 200–250 mL de líquido dá um molho médio (4–5%). Para creme mais consistente, 6–8%.</li>
  <li><strong>Acidez:</strong> sucos e vinagre reduzem o poder espessante; por isso amidos modificados são usados em produtos ácidos.</li>
</ul>

<div class="recap">
  <h4>Em 30 segundos</h4>
  <ul>
    <li>Amilose = gel firme e retrogradação; amilopectina = viscosidade e cremosidade.</li>
    <li>Gelatinização: 60–80 °C com água; açúcar atrasa, ácido reduz a viscosidade.</li>
    <li>Retrogradação: frio endurece e libera água; reaquecer só reverte em parte.</li>
    <li>Dextrinização: calor seco quebra o amido, gera cor e sabor.</li>
  </ul>
</div>

<details class="quick">
  <summary>Teste rápido: por que o brigadeiro demora mais quando se coloca o açúcar junto?</summary>
  <div class="quick-body"><p>Porque o açúcar compete pela água e eleva a temperatura de gelatinização do amido do leite condensado e do chocolate. Com menos água disponível para o amido, o ponto demora mais para chegar.</p></div>
</details>
`
      },
      {
        id: "b4l3",
        title: "Cocção e aplicações: arroz, trigo, milho e aveia",
        minutes: 9,
        intro: "Proporções, rendimento, glúten e os erros que aparecem em prova: lavar o arroz, sovar demais, cozinhar macarrão além do ponto.",
        content: `
<p class="lead">Cada cereal tem uma técnica própria porque a estrutura do grão e a proteína mudam. A prova gosta de proporção, rendimento e efeito do calor.</p>

<h3>Arroz</h3>
<ul>
  <li><strong>Proporção:</strong> arroz branco 1 xícara de grão para 1,5–2 de água; integral, 1 para 2,5–3; parboilizado, 1 para 2.</li>
  <li><strong>Rendimento:</strong> 1 xícara de arroz cru rende cerca de 2,5–3 xícaras cozidas, porque o grão hidrata e incha.</li>
  <li><strong>Lavar:</strong> remove amido superficial e sujeira, deixando o grão mais solto. Para risoto, não se lava — o amido superficial é o que dá cremosidade.</li>
  <li><strong>Refogar antes:</strong> sela o grão, reduz a perda de amido para a água e deixa o arroz mais solto.</li>
  <li><strong>Descanso:</strong> 5 minutos tampado após o cozimento completa a hidratação e equaliza a textura.</li>
  <li><strong>Tipos:</strong> agulhinha (solto), arbóreo/arborio (cremoso), basmati e jasmim (aromáticos), integral (fibra), parboilizado (firme).</li>
</ul>

<h3>Trigo e glúten</h3>
<p>O glúten se forma quando a <strong>gliadina</strong> e a <strong>glutenina</strong> são hidratadas e trabalhadas mecanicamente. Ele é o esqueleto do pão:</p>
<table>
  <thead><tr><th>Ingrediente / ação</th><th>Efeito no glúten</th></tr></thead>
  <tbody>
    <tr><td>Água</td><td>Hidrata e permite a formação da rede</td></tr>
    <tr><td>Sova</td><td>Alinha as proteínas e desenvolve elasticidade</td></tr>
    <tr><td>Sal</td><td>Fortalece a rede e melhora o sabor</td></tr>
    <tr><td>Gordura</td><td>Encurta a rede: deixa a massa mais macia e menos elástica</td></tr>
    <tr><td>Açúcar</td><td>Amacia e alimenta o fermento; em excesso, atrasa a fermentação</td></tr>
    <tr><td>Farinha integral</td><td>Absorve mais água e corta parte da rede; pão fica mais denso</td></tr>
  </tbody>
</table>
<ul>
  <li><strong>Farinha comum:</strong> versátil, para bolos e massas.</li>
  <li><strong>Farinha integral:</strong> mais fibra, mais absorção de água, menor desenvolvimento do glúten.</li>
  <li><strong>Semolina:</strong> granulometria grossa, usada em massas e cuscuz.</li>
  <li><strong>Macarrão:</strong> cozinhar em água abundante e fervente; não lavar depois, porque remove o amido que ajuda o molho a aderir. O ponto <em>al dente</em> preserva textura.</li>
  <li><strong>Pão:</strong> fermento produz CO₂, o glúten retém o gás; o forno promove expansão, fixação da estrutura e Maillard na casca.</li>
</ul>

<h3>Milho e aveia</h3>
<ul>
  <li><strong>Milho:</strong> consumido como grão, fubá, flocos, canjica, polenta e amido. A <strong>nixtamalização</strong> (cozinhar com cal) libera a niacina e previne pelagra — técnica tradicional das tortilhas mexicanas.</li>
  <li><strong>Canjica/cuscuz:</strong> exigem remolho e cocção longa; o cuscuz de milho cozinha no vapor.</li>
  <li><strong>Aveia:</strong> flocos, farelo e farinha. É rica em <strong>beta-glucana</strong>, fibra solúvel que aumenta a viscosidade e ajuda a reduzir o colesterol. Não contém glúten, mas pode haver contaminação cruzada no processamento.</li>
  <li><strong>Aveia em pó:</strong> não substitui farinha de trigo em pão, porque não forma rede de glúten.</li>
</ul>

<div class="callout exam"><strong>Cai na prova</strong><p>Lavar o arroz remove amido superficial e deixa o grão mais solto, mas não “elimina carboidrato”. O arroz continua sendo fonte de amido. Já no risoto, não se lava justamente para preservar o amido que dá cremosidade.</p></div>

<h3>Tabela de cocção</h3>
<table>
  <thead><tr><th>Preparação</th><th>Água / proporção</th><th>Tempo aproximado</th><th>Rendimento</th></tr></thead>
  <tbody>
    <tr><td>Arroz branco</td><td>1 : 2</td><td>15–20 min</td><td>2,5–3×</td></tr>
    <tr><td>Arroz integral</td><td>1 : 2,5–3</td><td>35–45 min</td><td>2,5–3×</td></tr>
    <tr><td>Macarrão</td><td>Água abundante</td><td>8–12 min</td><td>2–2,5×</td></tr>
    <tr><td>Aveia em flocos</td><td>1 : 2–3</td><td>5–10 min</td><td>2–3×</td></tr>
    <tr><td>Cuscuz de milho</td><td>Hidratar e cozinhar no vapor</td><td>15–20 min</td><td>2–2,5×</td></tr>
  </tbody>
</table>

<div class="recap">
  <h4>Em 30 segundos</h4>
  <ul>
    <li>Arroz branco 1:2; integral 1:2,5–3; rendimento ~2,5–3×.</li>
    <li>Glúten = gliadina + glutenina + água + sova; gordura amacia, sal fortalece.</li>
    <li>Não lavar o macarrão: o amido superficial ajuda o molho a aderir.</li>
    <li>Nixtamalização do milho libera niacina; aveia tem beta-glucana e não tem glúten.</li>
  </ul>
</div>

<details class="quick">
  <summary>Teste rápido: por que a farinha integral deixa o pão mais denso?</summary>
  <div class="quick-body"><p>Porque o farelo interrompe fisicamente a rede de glúten e absorve mais água. Menos rede contínua significa menos retenção de gás e migalhas mais compactas.</p></div>
</details>
`
      }
    ]
  },
  {
    id: "b5",
    track: "bases",
    title: "Açúcares e edulcorantes: tecnologia e uso",
    short: "Açúcares e edulcorantes",
    icon: "i-sugar",
    accent: "green",
    blurb: "Tipos de açúcar, poder adoçante, higroscopicidade, funções na conservação e na textura, caramelização, cristalização e edulcorantes naturais e artificiais.",
    lessons: [
      {
        id: "b5l1",
        title: "Açúcares: definição, tipos e propriedades",
        minutes: 9,
        intro: "Sacarose, glicose, frutose, lactose e maltose: o que muda no sabor, na solubilidade e no comportamento na cozinha.",
        content: `
<p class="lead">Açúcares são carboidratos simples, solúveis em água e de sabor doce. Na técnica dietética, o que importa não é só o sabor: solubilidade, higroscopicidade, poder adoçante e capacidade de cristalizar mudam a textura de doces, pães e bebidas.</p>

<h3>Os principais açúcares</h3>
<table>
  <thead><tr><th>Nome</th><th>Tipo</th><th>Onde aparece</th><th>Observação</th></tr></thead>
  <tbody>
    <tr><td>Glicose</td><td>Monossacarídeo</td><td>Mel, frutas, xarope de glicose</td><td>Menos doce que a sacarose; fonte rápida de energia</td></tr>
    <tr><td>Frutose</td><td>Monossacarídeo</td><td>Frutas, mel, xarope de milho</td><td>Mais doce; muito higroscópica</td></tr>
    <tr><td>Sacarose</td><td>Dissacarídeo (glicose + frutose)</td><td>Cana, beterraba, açúcar de mesa</td><td>Referência de poder adoçante = 100</td></tr>
    <tr><td>Lactose</td><td>Dissacarídeo (glicose + galactose)</td><td>Leite e derivados</td><td>Pouco doce; causa desconforto em intolerantes</td></tr>
    <tr><td>Maltose</td><td>Dissacarídeo (glicose + glicose)</td><td>Malte, cereais germinados</td><td>Poder adoçante baixo</td></tr>
  </tbody>
</table>

<h3>De onde vem o açúcar de mesa</h3>
<p>No Brasil, vem principalmente da cana; em outras regiões, da beterraba. O processo resume-se a: moagem → clarificação → evaporação → cristalização → centrifugação → secagem. O <strong>refino</strong> é uma etapa extra de purificação que remove cor e impurezas.</p>

<h3>Tipos de açúcar e o que muda</h3>
<table>
  <thead><tr><th>Tipo</th><th>Processamento</th><th>Cor / textura</th><th>Uso</th></tr></thead>
  <tbody>
    <tr><td>Refinado</td><td>Máxima purificação</td><td>Branco, fino</td><td>Bolos, doces, bebidas</td></tr>
    <tr><td>Cristal</td><td>Menos refino</td><td>Branco, cristais maiores</td><td>Uso geral, caldas</td></tr>
    <tr><td>Demerara</td><td>Refino leve</td><td>Dourado, cristais grossos</td><td>Coberturas, café</td></tr>
    <tr><td>Mascavo</td><td>Caldo de cana evaporado, sem refino</td><td>Marrom, úmido, aroma de melaço</td><td>Bolos, doces</td></tr>
    <tr><td>Rapadura / açúcar de coco</td><td>Caldo concentrado / seiva de coco</td><td>Bloco / marrom</td><td>Doces típicos</td></tr>
  </tbody>
</table>
<p><strong>Cuidado com o marketing:</strong> mascavo, demerara, rapadura e açúcar de coco têm mais minerais, mas em quantidade irrelevante no consumo habitual. Continuam sendo açúcar e devem ser moderados. “Light” significa redução mínima de 25% de energia ou de um nutriente em relação ao produto convencional — não é sinônimo de baixa caloria.</p>

<h3>Propriedades que decidem a receita</h3>
<ul>
  <li><strong>Solubilidade:</strong> frutose &gt; sacarose &gt; glicose &gt; maltose &gt; lactose. A solubilidade aumenta com o calor.</li>
  <li><strong>Poder adoçante (sacarose = 100):</strong> frutose 120–170; açúcar invertido ~120; glicose 70–80; maltose 30–40; lactose 20–30. Percepção varia com temperatura, pH e presença de outros sabores.</li>
  <li><strong>Higroscopicidade:</strong> frutose e açúcar invertido atraem água; por isso balas e bolos ficam úmidos e geleias podem “suar”.</li>
  <li><strong>Umectância:</strong> retêm água e prolongam a maciez de bolos e pães.</li>
  <li><strong>Cristalização:</strong> a sacarose cristaliza com facilidade; glicose, invertido e ácidos interferem e reduzem a cristalização.</li>
  <li><strong>Caramelização:</strong> aquecimento do açúcar sem proteínas, acima de ~160–180 °C, gera cor âmbar e sabor amargo.</li>
</ul>

<h3>Açúcar invertido e xarope de glicose</h3>
<p>O <strong>açúcar invertido</strong> é a sacarose hidrolisada em glicose + frutose (por ácido ou enzima). Ele é mais doce, mais higroscópico e <strong>dificulta a cristalização</strong> — por isso é usado em sorvetes, geleias e doces. O <strong>xarope de glicose</strong> (glicose + maltose) também controla cristalização e dá corpo a doces e bebidas.</p>
<div class="callout exam"><strong>Cai na prova</strong><p>Caramelização ≠ Maillard. Caramelização é só açúcar + calor. Maillard precisa de <strong>açúcar redutor + aminoácido/proteína</strong> e ocorre em superfície seca, geralmente acima de 140–150 °C.</p></div>

<div class="recap">
  <h4>Em 30 segundos</h4>
  <ul>
    <li>Sacarose = glicose + frutose; referência de doçura 100.</li>
    <li>Frutose é mais doce e mais higroscópica; lactose é pouco doce.</li>
    <li>Refino remove cor e minerais; mascavo não é “livre de açúcar”.</li>
    <li>Açúcar invertido e xarope de glicose reduzem cristalização e retêm água.</li>
  </ul>
</div>

<details class="quick">
  <summary>Teste rápido: por que o sorvete caseiro fica mais macio com açúcar?</summary>
  <div class="quick-body"><p>Porque o açúcar abaixa o ponto de congelamento da água e interfere na formação de cristais de gelo. Menos cristais grandes = textura mais macia e cremosa.</p></div>
</details>
`
      },
      {
        id: "b5l2",
        title: "Funções do açúcar na técnica dietética",
        minutes: 9,
        intro: "Açúcar não é só sabor: conserva, fermenta, dá estrutura, cor e ponto. Veja onde ele é insubstituível.",
        content: `
<p class="lead">O açúcar tem funções tecnológicas que vão muito além do gosto doce. Retirar ou substituir açúcar de uma receita muda conservação, textura, volume, cor e vida de prateleira.</p>

<h3>As seis funções principais</h3>
<table>
  <thead><tr><th>Função</th><th>Como acontece</th><th>Exemplo</th></tr></thead>
  <tbody>
    <tr><td>Adoçar</td><td>Ativa receptores de doce; interage com acidez e aroma</td><td>Bebidas, sobremesas</td></tr>
    <tr><td>Conservar</td><td>Reduz a atividade de água e a disponibilidade de água para microrganismos</td><td>Geleias, compotas, doces em massa</td></tr>
    <tr><td>Fermentar</td><td>Serve de substrato para leveduras, que produzem CO₂ e álcool</td><td>Pães, bebidas fermentadas</td></tr>
    <tr><td>Estruturar</td><td>Interfere na cristalização, na rede de glúten e na coagulação de proteínas</td><td>Bolos, merengues, doces de confeitaria</td></tr>
    <tr><td>Cor e aroma</td><td>Caramelização e Maillard</td><td>Caramelo, crosta de pão, bolos</td></tr>
    <tr><td>Textura e conservação da maciez</td><td>Higroscopicidade e umectância</td><td>Bolos que “duram” macios</td></tr>
  </tbody>
</table>

<h3>Conservação: atividade de água</h3>
<p>Geleias e compotas duram porque o açúcar se dissolve e “prende” a água, reduzindo a atividade de água (<em>a</em><sub>w</sub>). Menos água disponível = menos crescimento microbiano. Por isso <strong>não se substitui açúcar por edulcorante em geleia</strong>: o edulcorante adoça, mas não conserva nem forma gel.</p>
<p>Para gelificar, a geleia precisa de três pilares: <strong>pectina + ácido + açúcar</strong>. Sem açúcar suficiente, não há gel nem conservação adequada.</p>

<h3>Fermentação</h3>
<p>Leveduras consomem açúcares e produzem CO₂ (gás que infla a massa) e etanol. Em pães, uma pequena quantidade de açúcar acelera a fermentação; em excesso, a pressão osmótica desidrata as leveduras e <strong>atrasa</strong> o crescimento. Em massas muito doces, usa-se fermento em maior quantidade ou fermentação mais longa.</p>

<h3>Cristalização e pontos de calda</h3>
<p>A cristalização é a organização ordenada da sacarose. Em doces, ela pode ser desejada (fondant, brigadeiro de corte) ou indesejada (caldas e geleias com cristais). Para controlar:</p>
<ul>
  <li>Adicionar glicose, açúcar invertido ou gotas de ácido reduz a cristalização.</li>
  <li>Evitar mexer a calda depois de iniciada a fervura: cristais nas paredes servem de núcleo.</li>
  <li>Lavar as paredes da panela com pincel úmido dissolve cristais.</li>
  <li>Impedir a entrada de impurezas e de grãos de açúcar.</li>
</ul>
<table>
  <thead><tr><th>Ponto</th><th>Temperatura aproximada</th><th>Teste</th><th>Uso</th></tr></thead>
  <tbody>
    <tr><td>Fio</td><td>104–110 °C</td><td>Calda escorre em fio</td><td>Compotas, caldas leves</td></tr>
    <tr><td>Bola mole</td><td>112–116 °C</td><td>Forma bola que cede ao toque</td><td>Doces moles, marshmallow</td></tr>
    <tr><td>Bola dura</td><td>118–122 °C</td><td>Bola firme</td><td>Doces de corte, nougat</td></tr>
    <tr><td>Quebradiço</td><td>145–155 °C</td><td>Endurece e quebra</td><td>Praliné, crocante</td></tr>
    <tr><td>Caramelo</td><td>160–180 °C</td><td>Cor âmbar e aroma</td><td>Caramelo, flan</td></tr>
  </tbody>
</table>

<h3>Açúcar e outros ingredientes</h3>
<ul>
  <li><strong>Amido:</strong> o açúcar compete pela água e atrasa a gelatinização — o molho e o brigadeiro demoram mais para engrossar.</li>
  <li><strong>Claras:</strong> o açúcar estabiliza a espuma e aumenta a viscosidade; adicionado aos poucos, dá merengue mais firme e brilhante.</li>
  <li><strong>Ovos:</strong> o açúcar retarda a coagulação das proteínas, deixando cremes mais lisos.</li>
  <li><strong>Congelamento:</strong> abaixa o ponto de congelamento e reduz cristais de gelo em sorvetes.</li>
  <li><strong>Glúten:</strong> amacia a rede e torna o miolo mais macio; em excesso, enfraquece a estrutura.</li>
</ul>

<h3>Consumo e rotulagem</h3>
<p>A OMS recomenda que os açúcares livres fiquem abaixo de <strong>10% do valor energético total</strong>, com benefício adicional abaixo de 5%. A rotulagem nutricional brasileira alerta com a lupa “alto em açúcar adicionado” quando o produto tem <strong>≥ 15 g/100 g</strong> (sólidos) ou <strong>≥ 7,5 g/100 mL</strong> (líquidos).</p>
<div class="callout exam"><strong>Cai na prova</strong><p>“Diet” não significa sem calorias: um produto diet pode ter mais gordura. “Zero” e “light” têm definições próprias. E edulcorante não substitui açúcar em geleia, merengue ou caramelo, porque não dá corpo, não conserva e não carameliza.</p></div>

<div class="recap">
  <h4>Em 30 segundos</h4>
  <ul>
    <li>Açúcar conserva ao reduzir a atividade de água.</li>
    <li>Fermentação precisa de açúcar, mas excesso atrasa a levedura.</li>
    <li>Glicose/invertido controlam cristalização; mexer a calda cristaliza.</li>
    <li>Em geleia, edulcorante não substitui açúcar; em merengue, estabiliza a espuma.</li>
  </ul>
</div>

<details class="quick">
  <summary>Teste rápido: por que a calda cristaliza quando se mexe depois de ferver?</summary>
  <div class="quick-body"><p>Porque mexer favorece a colisão entre moléculas de sacarose e a formação de núcleos de cristal. O ideal é mexer só até dissolver o açúcar, antes da fervura.</p></div>
</details>
`
      },
      {
        id: "b5l3",
        title: "Edulcorantes: naturais, artificiais e uso seguro",
        minutes: 8,
        intro: "Stevia, aspartame, sucralose, sacarina, polióis: o que são, quanto adoçam, o que não fazem e onde a prova costuma confundir.",
        content: `
<p class="lead">Edulcorantes são substâncias que conferem sabor doce. Podem ser naturais ou artificiais, calóricos ou não. Eles substituem o <strong>gosto</strong> do açúcar, mas não necessariamente suas funções tecnológicas.</p>

<h3>Classificação</h3>
<table>
  <thead><tr><th>Grupo</th><th>Exemplos</th><th>Poder adoçante (sacarose = 100)</th><th>Observações</th></tr></thead>
  <tbody>
    <tr><td>Naturais não calóricos</td><td>Stevia (esteviol glicosídeos)</td><td>200–300</td><td>Retrogosto amargo/licoroso; estável ao calor</td></tr>
    <tr><td>Naturais proteicos</td><td>Taumatina, brazzeína</td><td>2.000–3.000</td><td>Proteínas doces; uso limitado por custo</td></tr>
    <tr><td>Naturais de fruta</td><td>Monk fruit (mogrosídeos)</td><td>150–300</td><td>Sabor mais próximo do açúcar; estável</td></tr>
    <tr><td>Polióis</td><td>Sorbitol, manitol, xilitol, maltitol, eritritol</td><td>30–100</td><td>Menos calorias; efeito laxativo em excesso; xilitol anticariogênico</td></tr>
    <tr><td>Artificiais</td><td>Sacarina, aspartame, ciclamato, sucralose, acessulfame K</td><td>30–600</td><td>Potência e estabilidade variam; alguns com retrogosto</td></tr>
  </tbody>
</table>

<h3>Os artificiais, um por um</h3>
<ul>
  <li><strong>Sacarina:</strong> ~300× mais doce; retrogosto metálico/amargo; muito usada em adoçantes de mesa e refrigerantes.</li>
  <li><strong>Aspartame:</strong> ~180–200×; contém fenilalanina (aviso obrigatório para fenilcetonúricos); <strong>não é estável ao calor</strong>, por isso não é ideal para forno.</li>
  <li><strong>Sucralose:</strong> ~600×; estável ao calor; sabor próximo do açúcar; muito usada em bebidas e produtos de confeitaria.</li>
  <li><strong>Acessulfame K:</strong> ~200×; estável ao calor; frequentemente combinado com aspartame ou sucralose para melhorar o perfil de sabor.</li>
  <li><strong>Ciclamato:</strong> ~30–50×; permitido no Brasil e em vários países, mas proibido nos EUA desde 1970; costuma ser combinado com sacarina.</li>
</ul>

<h3>Polióis: os “açúcares álcool”</h3>
<p>São carboidratos hidrogenados com menor valor calórico (cerca de 1,6–2,4 kcal/g; eritritol ~0,2 kcal/g) e menor impacto na glicemia. Em excesso, puxam água para o intestino e causam <strong>efeito laxativo</strong> — o eritritol é o que menos provoca. O xilitol reduz o risco de cárie, por isso aparece em chicletes e pastilhas.</p>

<h3>Segurança e rotulagem</h3>
<ul>
  <li>A ANVISA autoriza e define limites de uso; a <strong>IDA</strong> (ingestão diária aceitável) é a quantidade que pode ser consumida diariamente ao longo da vida sem risco apreciável.</li>
  <li>Edulcorantes devem constar na lista de ingredientes; produtos com polióis podem alertar sobre efeito laxativo.</li>
  <li><strong>“Diet”:</strong> ausência de açúcar (mas pode conter gordura e calorias).</li>
  <li><strong>“Zero”:</strong> sem adição de açúcar ou sem determinado componente, conforme o regulamento.</li>
  <li><strong>“Light”:</strong> redução mínima de 25% de energia ou de um nutriente em relação ao produto de referência.</li>
</ul>

<h3>Por que edulcorante não substitui açúcar em tudo</h3>
<table>
  <thead><tr><th>Função do açúcar</th><th>O edulcorante faz?</th><th>Consequência</th></tr></thead>
  <tbody>
    <tr><td>Adoçar</td><td>Sim</td><td>Pode haver retrogosto e diferença de perfil</td></tr>
    <tr><td>Dar corpo/volume</td><td>Não (exceto polióis)</td><td>Bolo murcho, textura seca</td></tr>
    <tr><td>Conservar por reduzir a<sub>w</sub></td><td>Não</td><td>Geleia e compota não podem ser só com edulcorante</td></tr>
    <tr><td>Caramelizar</td><td>Não</td><td>Sem cor e sabor de caramelo</td></tr>
    <tr><td>Alimentar leveduras</td><td>Não</td><td>Fermentação comprometida</td></tr>
    <tr><td>Cristalizar/estruturar</td><td>Parcial (polióis)</td><td>Textura diferente</td></tr>
  </tbody>
</table>
<div class="callout exam"><strong>Cai na prova</strong><p>Aspartame não é estável ao calor e tem fenilalanina. Sucralose e acessulfame K são estáveis. Stevia é natural, mas não é “livre de química”. Polióis têm menos calorias, mas efeito laxativo. E “diet” não é sinônimo de “sem calorias”.</p></div>

<div class="recap">
  <h4>Em 30 segundos</h4>
  <ul>
    <li>Sacarose = 100 de referência; sucralose ~600; sacarina ~300; aspartame ~200; ciclamato ~30–50.</li>
    <li>Aspartame: não vai ao forno e tem aviso para fenilcetonúricos.</li>
    <li>Polióis reduzem calorias e glicemia, mas causam efeito laxativo.</li>
    <li>Edulcorante adoça, mas não conserva, não carameliza e não dá volume.</li>
  </ul>
</div>

<details class="quick">
  <summary>Teste rápido: posso fazer geleia só com edulcorante?</summary>
  <div class="quick-body"><p>Não com segurança. Sem açúcar em quantidade suficiente, a atividade de água fica alta, o gel de pectina não se forma adequadamente e o produto se torna vulnerável a microrganismos. Edulcorante não substitui a função conservante do açúcar.</p></div>
</details>
`
      }
    ]
  },
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
