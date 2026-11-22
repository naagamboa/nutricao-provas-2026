window.NUT_MODULES = (window.NUT_MODULES || []).concat([
  {
    id: "x1",
    track: "micro",
    title: "Fundamentos, morfologia e crescimento microbiano",
    short: "Fundamentos micro",
    icon: "i-flask",
    accent: "blue",
    blurb: "Bactérias, fungos e vírus; Gram; fatores intrínsecos e extrínsecos; curva de crescimento e controle.",
    lessons: [
      {
        id: "x1l1",
        title: "Morfologia, classificação e coloração de Gram",
        minutes: 9,
        intro: "Coco, bacilo, espirilo; Gram positivo e negativo. A morfologia é a primeira pista para identificar o microrganismo.",
        content: `
<p class="lead">Microrganismos diferem em tamanho, estrutura e parede celular. A coloração de Gram é o método mais cobrado para diferenciar bactérias e orientar o tratamento.</p>

<h3>Tamanhos e grupos</h3>
<table>
  <thead><tr><th>Grupo</th><th>Tamanho aproximado</th><th>Característica</th></tr></thead>
  <tbody>
    <tr><td>Vírus</td><td>20–300 nm</td><td>Sem célula; ácido nucleico + capsídeo; alguns com envelope.</td></tr>
    <tr><td>Bactérias</td><td>0,5–5 µm</td><td>Procariotos; parede celular; divisão binária.</td></tr>
    <tr><td>Leveduras</td><td>3–10 µm</td><td>Fungos unicelulares; reprodução por brotamento.</td></tr>
    <tr><td>Bolores</td><td>Filamentos</td><td>Fungos multicelulares; hifas e micélio.</td></tr>
  </tbody>
</table>

<h3>Estrutura bacteriana</h3>
<ul>
  <li><strong>Parede celular:</strong> peptideoglicano; define Gram.</li>
  <li><strong>Membrana plasmática:</strong> transporte e barreira seletiva.</li>
  <li><strong>Citoplasma:</strong> ribossomos, material genético, inclusões.</li>
  <li><strong>Flagelos:</strong> motilidade.</li>
  <li><strong>Pili/fímbrias:</strong> adesão e conjugação.</li>
  <li><strong>Cápsula:</strong> proteção contra fagocitose (ex.: <em>Klebsiella</em>, <em>Streptococcus pneumoniae</em>).</li>
  <li><strong>Esporos:</strong> formas resistentes de <em>Bacillus</em> e <em>Clostridium</em>.</li>
</ul>

<h3>Coloração de Gram</h3>
<ol>
  <li><strong>Violeta de genciana</strong> — cora todas as bactérias de roxo.</li>
  <li><strong>Iodo/Lugol</strong> — mordente, fixa o corante.</li>
  <li><strong>Álcool-acetona</strong> — descoloração.</li>
  <li><strong>Safranina ou fucsina</strong> — contracorante rosa/vermelho.</li>
</ol>
<table>
  <thead><tr><th>Gram</th><th>Parede</th><th>Cor final</th><th>Exemplos</th></tr></thead>
  <tbody>
    <tr><td>Positiva</td><td>Camada espessa de peptideoglicano; retém violeta</td><td>Roxa</td><td><em>Staphylococcus</em>, <em>Streptococcus</em>, <em>Bacillus</em>, <em>Clostridium</em>, <em>Listeria</em></td></tr>
    <tr><td>Negativa</td><td>Camada fina + membrana externa; perde violeta e capta safranina</td><td>Rosa/vermelha</td><td><em>Salmonella</em>, <em>E. coli</em>, <em>Campylobacter</em>, <em>Vibrio</em>, <em>Pseudomonas</em></td></tr>
  </tbody>
</table>
<div class="callout exam"><strong>Cai na prova</strong><p>Gram-positivas ficam roxas porque a espessa camada de peptideoglicano retém o complexo violeta-iodo. Gram-negativas têm membrana externa, que é dissolvida pelo álcool, e captam o contracorante.</p></div>

<h3>Formas e arranjos</h3>
<table>
  <thead><tr><th>Forma</th><th>Arranjo</th><th>Exemplo</th></tr></thead>
  <tbody>
    <tr><td>Cocos</td><td>Pares (diplococos), cadeias (estreptococos), cachos (estafilococos)</td><td><em>S. aureus</em>, <em>S. pyogenes</em></td></tr>
    <tr><td>Bacilos</td><td>Isolados, pares, cadeias</td><td><em>E. coli</em>, <em>Salmonella</em>, <em>Lactobacillus</em></td></tr>
    <tr><td>Espirilos/espiroquetas</td><td>Espiral</td><td><em>Treponema</em>, <em>Helicobacter</em></td></tr>
    <tr><td>Vibriões</td><td>Vírgula</td><td><em>Vibrio cholerae</em></td></tr>
  </tbody>
</table>

<h3>Fungos e vírus</h3>
<p><strong>Leveduras</strong> são unicelulares, ovais, reproduzem por brotamento (<em>Saccharomyces</em>). <strong>Bolores</strong> formam hifas e micélio, com conídios (<em>Aspergillus</em>, <em>Penicillium</em>). <strong>Vírus</strong> têm ácido nucleico (DNA ou RNA) envolvido por capsídeo; alguns têm envelope lipídico, o que os torna mais sensíveis a álcool e detergentes.</p>

<div class="recap">
  <h4>Em 30 segundos</h4>
  <ul>
    <li>Gram + = roxa, peptideoglicano espesso; Gram − = rosa, membrana externa.</li>
    <li>Cocos, bacilos, espirilos, vibriões; arranjos ajudam a identificar.</li>
    <li>Esporos são formas resistentes de <em>Bacillus</em> e <em>Clostridium</em>.</li>
    <li>Vírus não têm célula; envelope muda a resistência.</li>
  </ul>
</div>

<details class="quick">
  <summary>Teste rápido: por que Gram-negativas perdem o violeta?</summary>
  <div class="quick-body"><p>Porque têm parede fina de peptideoglicano e membrana externa rica em lipídios, dissolvida pelo álcool-acetona. O corante sai e elas captam a safranina.</p></div>
</details>
`
      },
      {
        id: "x1l2",
        title: "Fatores intrínsecos e extrínsecos do crescimento",
        minutes: 9,
        intro: "Temperatura, pH, atividade de água, oxigênio e nutrientes. Cada alimento é um ecossistema — e a prova cobra qual fator favorece qual microrganismo.",
        content: `
<p class="lead">O crescimento microbiano depende do ambiente. Fatores intrínsecos vêm do próprio alimento; extrínsecos vêm do armazenamento. Entender isso explica conservação, deterioração e segurança.</p>

<h3>Fatores intrínsecos</h3>
<table>
  <thead><tr><th>Fator</th><th>O que é</th><th>Efeito</th></tr></thead>
  <tbody>
    <tr><td><strong>Atividade de água (a<sub>w</sub>)</strong></td><td>Água disponível para reações e microrganismos</td><td>Bactérias geralmente precisam de a<sub>w</sub> &gt; 0,85; fungos crescem com menos. Sal/açúcar reduzem.</td></tr>
    <tr><td><strong>pH</strong></td><td>Acidez do alimento</td><td>Maioria das bactérias prefere 6,5–7,5; fungos toleram pH ácido.</td></tr>
    <tr><td><strong>Nutrientes</strong></td><td>Carbono, nitrogênio, vitaminas, minerais</td><td>Alimentos ricos em proteína e umidade são mais perecíveis.</td></tr>
    <tr><td><strong>Potencial redox (Eh)</strong></td><td>Disponibilidade de oxigênio</td><td>Favorece aeróbios ou anaeróbios.</td></tr>
    <tr><td><strong>Compostos antimicrobianos</strong></td><td>Lisozima, ácidos, óleos essenciais, bacteriocinas</td><td>Podem inibir ou selecionar microrganismos.</td></tr>
    <tr><td><strong>Estrutura</strong></td><td>Casca, película, membrana</td><td>Barreira física; romper aumenta a contaminação.</td></tr>
  </tbody>
</table>

<h3>Fatores extrínsecos</h3>
<ul>
  <li><strong>Temperatura de armazenamento:</strong> refrigeração, congelamento, calor.</li>
  <li><strong>Umidade relativa:</strong> pode condensar na superfície e favorecer crescimento.</li>
  <li><strong>Atmosfera gasosa:</strong> vácuo, CO₂, embalagem com atmosfera modificada.</li>
  <li><strong>Tempo:</strong> quanto maior, maior a multiplicação.</li>
</ul>

<h3>Temperatura e classificação</h3>
<table>
  <thead><tr><th>Grupo</th><th>Faixa ótima</th><th>Importância em alimentos</th></tr></thead>
  <tbody>
    <tr><td>Psicrófilos</td><td>&lt; 15–20 °C</td><td>Ambientes muito frios; alguns deteriorantes.</td></tr>
    <tr><td>Psicrotróficos</td><td>20–30 °C, crescem no frio</td><td>Principais deteriorantes de alimentos refrigerados (<em>Pseudomonas</em>).</td></tr>
    <tr><td>Mesófilos</td><td>30–40 °C</td><td>Maioria dos patógenos de interesse em alimentos.</td></tr>
    <tr><td>Termófilos</td><td>50–80 °C</td><td>Conservas mal processadas, <em>Bacillus</em> termofílicos.</td></tr>
    <tr><td>Hipertermófilos</td><td>&gt; 80 °C</td><td>Ambientes extremos; relevância limitada em alimentos.</td></tr>
  </tbody>
</table>

<h3>pH e grupos</h3>
<ul>
  <li><strong>Acidófilos:</strong> pH 0–5,5; fungos, <em>Lactobacillus</em>.</li>
  <li><strong>Neutrófilos:</strong> pH 6,5–7,5; maioria das bactérias e patógenos.</li>
  <li><strong>Alcalifílicos:</strong> pH &gt; 8; <em>Bacillus</em>, <em>Vibrio cholerae</em>.</li>
</ul>

<h3>Oxigênio</h3>
<table>
  <thead><tr><th>Grupo</th><th>Comportamento</th></tr></thead>
  <tbody>
    <tr><td>Aeróbios obrigatórios</td><td>Crescem só com O₂.</td></tr>
    <tr><td>Anaeróbios obrigatórios</td><td>Crescem só sem O₂ (<em>Clostridium</em>).</td></tr>
    <tr><td>Anaeróbios facultativos</td><td>Crescem com ou sem O₂, mas preferem sem.</td></tr>
    <tr><td>Aerotolerantes</td><td>Toleram O₂, mas não usam.</td></tr>
    <tr><td>Microaerófilos</td><td>Precisam de pouco O₂ (<em>Campylobacter</em>).</td></tr>
  </tbody>
</table>
<p>Em laboratório, a jarra com vela cria microaerofilia; jarras com envelope químico e catalisador de paládio criam anaerobiose. O indicador azul de metileno confirma ausência de O₂.</p>

<h3>Atividade de água e conservação</h3>
<p>Salgar, açucarar, secar e liofilizar reduzem a<sub>w</sub>. A maioria das bactérias não cresce abaixo de 0,85; fungos xerofílicos podem crescer em a<sub>w</sub> 0,65–0,75. Alimentos com a<sub>w</sub> &lt; 0,6 são considerados microbiologicamente estáveis por longos períodos.</p>

<div class="recap">
  <h4>Em 30 segundos</h4>
  <ul>
    <li>Intrínsecos: a<sub>w</sub>, pH, nutrientes, Eh, antimicrobianos, estrutura.</li>
    <li>Extrínsecos: temperatura, umidade, atmosfera, tempo.</li>
    <li>Mesófilos = 30–40 °C; psicrotróficos deterioram refrigerados.</li>
    <li>Bactérias precisam de mais água que fungos; sal/açúcar reduzem a<sub>w</sub>.</li>
  </ul>
</div>

<details class="quick">
  <summary>Teste rápido: por que mel e geleia duram tanto?</summary>
  <div class="quick-body"><p>Porque têm alta concentração de açúcares, o que reduz a atividade de água e provoca plasmólise das células microbianas. Fungos xerofílicos ainda podem crescer se houver umidade.</p></div>
</details>
`
      },
      {
        id: "x1l3",
        title: "Curva de crescimento, morte térmica e controle",
        minutes: 10,
        intro: "Lag, log, estacionária e declínio. D, z e F. Pasteurização, esterilização e UHT. A base para entender conservação.",
        content: `
<p class="lead">Bactérias se multiplicam por fissão binária. Em condições ideais, a população dobra a cada geração. A curva de crescimento descreve esse processo e orienta o controle.</p>

<h3>Fissão binária e tempo de geração</h3>
<p>O DNA se replica, a célula se alonga, forma um septo e se divide em duas. O <strong>tempo de geração</strong> é o tempo para dobrar a população; varia com espécie e ambiente. <em>E. coli</em> pode dividir a cada 20 minutos em condições ótimas.</p>
<p class="formula">X = X₀ × 2ⁿ</p>
<p>X = número final; X₀ = número inicial; n = número de gerações. Ex.: 1 célula após 3 gerações = 1 × 2³ = 8.</p>

<h3>Curva de crescimento</h3>
<table>
  <thead><tr><th>Fase</th><th>O que acontece</th><th>Relevância</th></tr></thead>
  <tbody>
    <tr><td><strong>Lag</strong></td><td>Adaptação; pouca ou nenhuma divisão, mas intensa síntese de enzimas.</td><td>Período de latência após contaminar; trauma térmico prolonga.</td></tr>
    <tr><td><strong>Log</strong></td><td>Multiplicação exponencial; máxima absorção de nutrientes.</td><td>Mais sensível a antimicrobianos, calor e radiação.</td></tr>
    <tr><td><strong>Estacionária</strong></td><td>Nutrientes escassos e metabólitos tóxicos; nascimentos = mortes.</td><td>Produção de toxinas e esporos.</td></tr>
    <tr><td><strong>Declínio</strong></td><td>Morte celular logarítmica.</td><td>Após tratamento térmico ou esgotamento.</td></tr>
  </tbody>
</table>

<h3>Morte térmica</h3>
<table>
  <thead><tr><th>Conceito</th><th>Definição</th><th>Uso</th></tr></thead>
  <tbody>
    <tr><td><strong>Valor D</strong></td><td>Tempo para reduzir 90% (1 log) da população a uma temperatura.</td><td>Resistência térmica do microrganismo.</td></tr>
    <tr><td><strong>Valor z</strong></td><td>Variação de temperatura necessária para alterar D em 10 vezes.</td><td>Comparar tratamentos térmicos.</td></tr>
    <tr><td><strong>Valor F</strong></td><td>Tempo equivalente a 121 °C para atingir uma redução desejada.</td><td>Esterilização.</td></tr>
  </tbody>
</table>
<p>Quanto maior o D, mais resistente o microrganismo. Esporos de <em>Clostridium botulinum</em> são muito resistentes e exigem esterilização comercial (121 °C em autoclave) para conservas de baixa acidez.</p>

<h3>Métodos de controle</h3>
<table>
  <thead><tr><th>Método</th><th>Como funciona</th><th>Limite</th></tr></thead>
  <tbody>
    <tr><td>Pasteurização LTLT</td><td>63 °C por 30 min</td><td>Elimina patógenos, não esporos; requer refrigeração.</td></tr>
    <tr><td>Pasteurização HTST</td><td>72 °C por 15 s</td><td>Mesma lógica; fluxo contínuo.</td></tr>
    <tr><td>UHT</td><td>~140 °C por 4 s + envase asséptico</td><td>Esterilização comercial; produto estável fora da geladeira até abrir.</td></tr>
    <tr><td>Autoclave</td><td>121 °C sob pressão</td><td>Elimina esporos; pode alterar nutrientes e textura.</td></tr>
    <tr><td>Desidratação/liofilização</td><td>Reduz a<sub>w</sub></td><td>Não elimina todos os microrganismos; reidratação exige cuidado.</td></tr>
    <tr><td>Salga/açúcar</td><td>Reduz a<sub>w</sub> por plasmólise</td><td>Microrganismos halofílicos/xerofílicos podem sobreviver.</td></tr>
    <tr><td>Radiação ionizante</td><td>Lesa DNA; alta penetração</td><td>Pode oxidar lipídios e alterar vitaminas.</td></tr>
    <tr><td>UV</td><td>Lesa DNA; baixa penetração</td><td>Superfícies, ar e líquidos transparentes.</td></tr>
    <tr><td>Conservantes químicos</td><td>Inibem crescimento</td><td>Limites legais; não substituem boas práticas.</td></tr>
  </tbody>
</table>

<h3>Conservantes</h3>
<ul>
  <li><strong>Ácidos orgânicos</strong> (benzoato, sórbico, parabenos): bolores em alimentos ácidos.</li>
  <li><strong>Propionato de cálcio:</strong> panificação, inibe bolores.</li>
  <li><strong>Nitrito/nitrato:</strong> embutidos; inibe <em>C. botulinum</em> e dá cor.</li>
  <li><strong>Dióxido de enxofre:</strong> vinhos; antioxidante e antimicrobiano.</li>
</ul>
<p>Conservantes não corrigem matéria-prima contaminada nem falhas de higiene. A conservação é multifatorial: temperatura, a<sub>w</sub>, pH, atmosfera e boas práticas.</p>

<div class="recap">
  <h4>Em 30 segundos</h4>
  <ul>
    <li>Curva: lag, log, estacionária, declínio.</li>
    <li>D = tempo para 1 log; z = variação para D mudar 10×; F = equivalente a 121 °C.</li>
    <li>Pasteurização não elimina esporos; UHT/autoclave sim (esterilização comercial).</li>
    <li>a<sub>w</sub>, pH, temperatura e atmosfera são barreiras combinadas.</li>
  </ul>
</div>

<details class="quick">
  <summary>Teste rápido: leite UHT pode ficar fora da geladeira antes de abrir?</summary>
  <div class="quick-body"><p>Sim. O tratamento UHT seguido de envase asséptico promove esterilização comercial; enquanto fechado, é estável. Após abrir, deve ser refrigerado e consumido no prazo indicado.</p></div>
</details>
`
      }
    ]
  },
  {
    id: "x2",
    track: "micro",
    title: "Patogênicos e doenças transmitidas por alimentos",
    short: "Patógenos e DTAs",
    icon: "i-virus",
    accent: "blue",
    blurb: "Infecção, intoxicação e toxinfecção; Gram-negativos, Gram-positivos, vírus, parasitas e prevenção.",
    lessons: [
      {
        id: "x2l1",
        title: "Mecanismos de DTA e patógenos Gram-negativos",
        minutes: 10,
        intro: "Antes de decorar nomes, separe o mecanismo: o microrganismo invade, produz toxina no alimento ou produz toxina no intestino?",
        content: `
<p class="lead">DTA pode ser infecção, intoxicação ou toxinfecção. O mecanismo explica o tempo de incubação, os sintomas e a prevenção.</p>

<h3>Três mecanismos</h3>
<table>
  <thead><tr><th>Mecanismo</th><th>O que acontece</th><th>Exemplos</th></tr></thead>
  <tbody>
    <tr><td><strong>Infecção</strong></td><td>O microrganismo é ingerido, coloniza/invade o intestino e se multiplica.</td><td><em>Salmonella</em>, <em>Campylobacter</em>, <em>Listeria</em>, norovírus.</td></tr>
    <tr><td><strong>Intoxicação</strong></td><td>A toxina já está formada no alimento; ingerir o microrganismo não é necessário.</td><td><em>S. aureus</em>, <em>B. cereus</em> emético, <em>C. botulinum</em>.</td></tr>
    <tr><td><strong>Toxinfecção</strong></td><td>O microrganismo se multiplica no intestino e produz toxina in situ.</td><td><em>C. perfringens</em>, <em>B. cereus</em> diarreico, <em>E. coli</em> STEC.</td></tr>
  </tbody>
</table>

<h3>Gram-negativos clássicos</h3>
<table>
  <thead><tr><th>Microrganismo</th><th>Alimentos</th><th>Incubação</th><th>Quadro</th><th>Prevenção</th></tr></thead>
  <tbody>
    <tr><td><em>Salmonella</em> spp.</td><td>Ovos, aves, leite cru, carnes</td><td>6–72 h (12–36 h)</td><td>Diarreia, febre, cólica; pode haver sangue.</td><td>Cozinhar 74 °C; ovo pasteurizado; higiene.</td></tr>
    <tr><td><em>Campylobacter jejuni</em></td><td>Frango, leite cru, água</td><td>2–5 dias</td><td>Diarreia (frequente sanguinolenta), febre, dor; pode preceder Guillain-Barré.</td><td>Cozinhar; evitar contaminação cruzada; não lavar frango cru.</td></tr>
    <tr><td><em>E. coli</em> STEC (O157:H7)</td><td>Carne moída, leite cru, folhas, água</td><td>3–4 dias</td><td>Diarreia sanguinolenta, cólica; risco de síndrome hemolítico-urêmica.</td><td>71 °C na carne moída; lavar vegetais; higiene.</td></tr>
    <tr><td><em>Shigella</em> spp.</td><td>Água, alimentos prontos, mãos</td><td>1–3 dias</td><td>Disenteria (fezes com sangue/muco), febre.</td><td>Higiene das mãos; água segura; isolamento.</td></tr>
    <tr><td><em>Vibrio cholerae</em></td><td>Água, frutos do mar</td><td>1–3 dias</td><td>Diarreia aquosa intensa (“água de arroz”), desidratação.</td><td>Água tratada; cozinhar frutos do mar.</td></tr>
    <tr><td><em>Vibrio parahaemolyticus</em></td><td>Frutos do mar crus</td><td>12–24 h</td><td>Diarreia, cólica, náusea.</td><td>Cozinhar; cadeia de frio.</td></tr>
    <tr><td><em>Yersinia enterocolitica</em></td><td>Suínos, leite cru</td><td>4–7 dias</td><td>Enterocolite, dor abdominal (pode simular apendicite).</td><td>Cozinhar; pasteurizar; higiene.</td></tr>
  </tbody>
</table>

<h3>Detalhes que caem</h3>
<ul>
  <li><strong>Salmonella:</strong> principal risco em ovos crus/malcozidos e aves; não lavar frango cru.</li>
  <li><strong>Campylobacter:</strong> microaerófilo; frango é veículo clássico; associado a Guillain-Barré.</li>
  <li><strong>E. coli STEC:</strong> toxina Shiga; carne moída malpassada é clássica; crianças têm maior risco de SHU.</li>
  <li><strong>Vibrio:</strong> ambientes marinhos; risco em frutos do mar crus.</li>
</ul>

<h3>Prevenção geral</h3>
<ol>
  <li>Higiene das mãos e dos utensílios.</li>
  <li>Separar crus de prontos; tábua e faca distintas.</li>
  <li>Cozinhar na temperatura interna adequada.</li>
  <li>Refrigerar rapidamente; manter &lt; 5 °C.</li>
  <li>Água potável e gelo seguro.</li>
  <li>Evitar leite cru e derivados não pasteurizados.</li>
</ol>

<div class="recap">
  <h4>Em 30 segundos</h4>
  <ul>
    <li>Infecção = coloniza; intoxicação = toxina pronta; toxinfecção = toxina no intestino.</li>
    <li>Salmonella, Campylobacter, E. coli STEC, Shigella, Vibrio e Yersinia são Gram−.</li>
    <li>Ovo e frango: cozinhar bem; carne moída: 71 °C.</li>
    <li>Higiene e temperatura previnem a maioria das DTAs.</li>
  </ul>
</div>

<details class="quick">
  <summary>Teste rápido: por que a síndrome hemolítico-urêmica é associada a hambúrguer malpassado?</summary>
  <div class="quick-body"><p>Porque a carne moída pode conter <em>E. coli</em> STEC, que produz toxina Shiga. A moagem distribui a bactéria para toda a peça; por isso a carne moída deve atingir 71 °C.</p></div>
</details>
`
      },
      {
        id: "x2l2",
        title: "Patógenos Gram-positivos: toxinas e esporos",
        minutes: 10,
        intro: "S. aureus, C. perfringens, B. cereus, C. botulinum e Listeria. Cada um tem um mecanismo e um alimento clássico.",
        content: `
<p class="lead">Os Gram-positivos incluem os maiores produtores de toxinas e esporos de interesse em alimentos. A prova gosta de comparar intoxicação (toxina pronta) com toxinfecção (toxina produzida no intestino).</p>

<h3>Matriz comparativa</h3>
<table>
  <thead><tr><th>Microrganismo</th><th>Mecanismo</th><th>Alimento clássico</th><th>Incubação</th><th>Quadro</th></tr></thead>
  <tbody>
    <tr><td><em>Staphylococcus aureus</em></td><td>Intoxicação (enterotoxina termoestável)</td><td>Mãos/nariz, cremes, presunto, arroz, saladas</td><td>1–6 h</td><td>Vômitos intensos, cólica, diarreia; sem febre.</td></tr>
    <tr><td><em>Clostridium perfringens</em></td><td>Toxinfecção (toxina no intestino)</td><td>Carnes, molhos, ensopados, sobras</td><td>8–16 h</td><td>Diarreia aquosa, cólica; raramente vômito.</td></tr>
    <tr><td><em>Bacillus cereus</em> (emético)</td><td>Intoxicação (cereulida termoestável)</td><td>Arroz cozido, massas</td><td>0,5–6 h</td><td>Vômitos, náusea.</td></tr>
    <tr><td><em>Bacillus cereus</em> (diarreico)</td><td>Toxinfecção</td><td>Carnes, vegetais, cereais</td><td>8–16 h</td><td>Diarreia, cólica.</td></tr>
    <tr><td><em>Clostridium botulinum</em></td><td>Intoxicação (neurotoxina)</td><td>Conservas de baixa acidez, embutidos, vácuo</td><td>12–36 h (2 h–8 dias)</td><td>Paralisia flácida, visão dupla, disfagia, insuficiência respiratória.</td></tr>
    <tr><td><em>Listeria monocytogenes</em></td><td>Infecção</td><td>Queijos moles, frios, leite cru, prontos refrigerados</td><td>1–70 dias</td><td>Febre, mialgia, sepse, meningite, aborto.</td></tr>
  </tbody>
</table>

<h3>S. aureus</h3>
<p>Coloniza pele, nariz e mãos. A enterotoxina é produzida quando o alimento fica em temperatura inadequada e é <strong>termoestável</strong>: reaquecer não resolve. Prevenção: higiene, refrigeração rápida, não manipular alimentos com feridas nas mãos.</p>

<h3>C. perfringens</h3>
<p>Forma esporos e cresce em anaerobiose. O clássico é carne/molho cozido, resfriado lentamente e reaquecido. A toxina é produzida no intestino durante a esporulação. Prevenção: resfriamento rápido e reaquecimento adequado.</p>

<h3>B. cereus</h3>
<p>Arroz cozido deixado em temperatura ambiente é o clássico da forma emética. A toxina cereulida é termoestável. A forma diarreica é uma toxinfecção. Prevenção: cozinhar, resfriar rapidamente e manter refrigerado.</p>

<h3>C. botulinum</h3>
<p>Anaeróbio, forma esporos, produz neurotoxina. Conservas de baixa acidez, embutidos e alimentos a vácuo mal processados são risco. A toxina é destruída por fervura (≈100 °C por 10 min); os esporos exigem 121 °C. Prevenção: acidificar, salgar, refrigeração, processamento térmico adequado e boas práticas de conservas.</p>
<div class="callout exam"><strong>Pegadinha</strong><p>A toxina botulínica é <strong>termolábil</strong> (destruída pelo calor), enquanto a enterotoxina de <em>S. aureus</em> e a cereulida de <em>B. cereus</em> são <strong>termoestáveis</strong>. Não generalize “toxina resiste ao calor”.</p></div>

<h3>Listeria monocytogenes</h3>
<p>Psicrotrófica, tolera pH amplo e concentrações de sal; cresce em refrigeração. Risco em queijos moles, embutidos fatiados, salmão defumado e alimentos prontos para consumo. Gestantes, idosos, imunossuprimidos e neonatos são vulneráveis. Prevenção: pasteurização, higiene, controle de prontos para consumo e prazos curtos.</p>

<h3>Como a prova cobra</h3>
<div class="callout exam"><strong>Caso</strong><p>Banquete com arroz deixado fora da geladeira por horas; várias pessoas vomitam 2–4 h depois. Agente provável: <em>B. cereus</em> emético. A toxina já estava formada e é termoestável.</p></div>
<div class="callout exam"><strong>Caso</strong><p>Conserva caseira de palmito mal processada; paciente com visão dupla e paralisia. Agente: <em>C. botulinum</em>. A toxina é destruída por fervura, mas os esporos exigem esterilização.</p></div>

<div class="recap">
  <h4>Em 30 segundos</h4>
  <ul>
    <li><em>S. aureus</em>: toxina pronta termoestável; vômito precoce.</li>
    <li><em>C. perfringens</em>: toxinfecção; carnes/sobras; diarreia 8–16 h.</li>
    <li><em>B. cereus</em>: arroz; emético 0,5–6 h; diarreico 8–16 h.</li>
    <li><em>C. botulinum</em>: neurotoxina; conservas; toxina termolábil, esporo resistente.</li>
    <li><em>Listeria</em>: cresce no frio; risco em gestantes e imunossuprimidos.</li>
  </ul>
</div>

<details class="quick">
  <summary>Teste rápido: reaquecer o arroz resolve a intoxicação por B. cereus?</summary>
  <div class="quick-body"><p>Não. A cereulida é termoestável. O risco se previne cozinhando e refrigerando rapidamente, não deixando o arroz em temperatura ambiente.</p></div>
</details>
`
      },
      {
        id: "x2l3",
        title: "Vírus, parasitas, Cronobacter e prevenção",
        minutes: 9,
        intro: "Nem toda DTA é bactéria. Vírus e parasitas têm características próprias; Cronobacter é um risco neonatal ligado à fórmula em pó.",
        content: `
<p class="lead">Vírus não se multiplicam no alimento, mas permanecem viáveis e são altamente infecciosos. Parasitas podem formar cistos. A prevenção é higiene, água segura e cocção.</p>

<h3>Vírus de interesse</h3>
<table>
  <thead><tr><th>Vírus</th><th>Alimento</th><th>Incubação</th><th>Quadro</th></tr></thead>
  <tbody>
    <tr><td>Norovírus</td><td>Mariscos, água, alimentos prontos, mãos</td><td>12–48 h</td><td>Vômitos e diarreia; surtos em restaurantes, escolas e cruzeiros.</td></tr>
    <tr><td>Hepatite A</td><td>Água, mariscos, alimentos crus</td><td>15–50 dias</td><td>Febre, mal-estar, icterícia; pode ser grave.</td></tr>
    <tr><td>Rotavírus</td><td>Água, alimentos contaminados</td><td>1–3 dias</td><td>Diarreia em crianças; vacina disponível.</td></tr>
  </tbody>
</table>
<p>Vírus com envelope (ex.: HIV, influenza) são mais sensíveis a álcool e detergentes; vírus sem envelope (norovírus, hepatite A) são mais resistentes. A cocção adequada e a higiene das mãos são essenciais.</p>

<h3>Parasitas</h3>
<table>
  <thead><tr><th>Parasita</th><th>Transmissão</th><th>Quadro</th></tr></thead>
  <tbody>
    <tr><td><em>Toxoplasma gondii</em></td><td>Carne malcozida, fezes de gato, solo, vegetais mal lavados</td><td>Geralmente assintomático; risco de aborto e sequelas na gestação.</td></tr>
    <tr><td><em>Taenia</em> spp.</td><td>Carne bovina/suína malcozida</td><td>Teníase; cisticercose em casos graves.</td></tr>
    <tr><td><em>Trichinella spiralis</em></td><td>Carne suína crua/malcozida</td><td>Dor muscular, febre, edema.</td></tr>
    <tr><td><em>Giardia</em> / <em>Cryptosporidium</em></td><td>Água contaminada</td><td>Diarreia prolongada.</td></tr>
  </tbody>
</table>
<p>Congelamento adequado e cocção eliminam muitos parasitas; vegetais crus devem ser bem lavados e sanitizados. Gestantes devem evitar carne crua e higienizar bem frutas/verduras.</p>

<h3>Cronobacter sakazakii</h3>
<p>Bactéria Gram-negativa associada a <strong>fórmula infantil em pó</strong>. Pode causar meningite, sepse e enterocolite necrosante em neonatos, especialmente prematuros. O pó não é estéril. Prevenção: reconstituir com água ≥ 70 °C, resfriar rapidamente, usar imediatamente e seguir rigorosamente a higiene das mamadeiras. Em ambiente hospitalar, seguir protocolo.</p>

<h3>Prevenção e HACCP</h3>
<ul>
  <li><strong>Perigos físicos, químicos e biológicos:</strong> identificar e controlar.</li>
  <li><strong>Boas Práticas de Fabricação (BPF):</strong> higiene, água, pragas, manutenção, treinamento.</li>
  <li><strong>APPCC/HACCP:</strong> análise de perigos, pontos críticos de controle, limites, monitoramento, ações corretivas, verificação e registro.</li>
  <li><strong>Rastreabilidade:</strong> identificar lotes e recolher produtos quando necessário.</li>
  <li><strong>Educação:</strong> manipuladores e consumidores.</li>
</ul>

<h3>Cinco chaves da OMS</h3>
<ol>
  <li>Mantenha a higiene.</li>
  <li>Separe alimentos crus de cozidos.</li>
  <li>Cozinhe completamente.</li>
  <li>Mantenha os alimentos em temperaturas seguras.</li>
  <li>Use água e matérias-primas seguras.</li>
</ol>

<div class="recap">
  <h4>Em 30 segundos</h4>
  <ul>
    <li>Norovírus e hepatite A: alta transmissão fecal-oral; higiene e cocção.</li>
    <li>Toxoplasma: carne malcozida e solo; risco na gestação.</li>
    <li>Cronobacter: fórmula em pó; água ≥ 70 °C e uso imediato.</li>
    <li>HACCP = identificar perigos e controlar pontos críticos.</li>
  </ul>
</div>

<details class="quick">
  <summary>Teste rápido: por que a fórmula infantil em pó não é considerada estéril?</summary>
  <div class="quick-body"><p>Porque o processo de secagem não garante esterilidade e pode haver <em>Cronobacter</em>. A reconstituição com água ≥ 70 °C reduz o risco, mas não substitui boas práticas.</p></div>
</details>
`
      }
    ]
  },
  {
    id: "x3",
    track: "micro",
    title: "Deteriorantes, indicadores, fungos e benéficos",
    short: "Deteriorantes e fungos",
    icon: "i-bulb",
    accent: "blue",
    blurb: "Quem estraga cada alimento, o que os indicadores significam, micotoxinas e probióticos/prebióticos.",
    lessons: [
      {
        id: "x3l1",
        title: "Microrganismos deteriorantes: quem estraga o quê",
        minutes: 9,
        intro: "Deterioração não é necessariamente patogenicidade. Pseudomonas, Lactobacillus, Shewanella e bolores mudam cor, odor e textura.",
        content: `
<p class="lead">Deteriorantes causam perdas econômicas e rejeição, mas nem sempre são patogênicos. Reconhecer o grupo e o alimento ajuda a prever o tipo de estrago.</p>

<h3>Principais deteriorantes</h3>
<table>
  <thead><tr><th>Microrganismo</th><th>Alimento</th><th>Sinal</th></tr></thead>
  <tbody>
    <tr><td><em>Pseudomonas</em> spp.</td><td>Carnes, leite, pescados refrigerados</td><td>Slime, pigmento verde/azul, odor.</td></tr>
    <tr><td><em>Lactobacillus</em> spp.</td><td>Leite, carnes curadas, vegetais</td><td>Acidez, turvação, fermentação.</td></tr>
    <tr><td><em>Leuconostoc</em> spp.</td><td>Carnes resfriadas, açúcar</td><td>Slime, gás.</td></tr>
    <tr><td><em>Brochothrix thermosphacta</em></td><td>Carnes embaladas a vácuo</td><td>Odor ácido, slime.</td></tr>
    <tr><td><em>Shewanella putrefaciens</em></td><td>Peixes</td><td>Odor de amônia/TMA.</td></tr>
    <tr><td><em>Alicyclobacillus</em> spp.</td><td>Sucos ácidos</td><td>Off-flavor sem gás.</td></tr>
    <tr><td>Bolores e leveduras</td><td>Pães, frutas, sucos</td><td>Mofo, fermentação, borra.</td></tr>
  </tbody>
</table>

<h3>Por alimento</h3>
<ul>
  <li><strong>Carnes refrigeradas:</strong> <em>Pseudomonas</em>, <em>Brochothrix</em>, <em>Leuconostoc</em>; slime e odor.</li>
  <li><strong>Leite:</strong> <em>Pseudomonas</em>, <em>Lactobacillus</em>, <em>Bacillus</em>; acidez, coagulação, sabor amargo.</li>
  <li><strong>Pescados:</strong> <em>Shewanella</em>, <em>Photobacterium</em>; amônia, TMA, slime.</li>
  <li><strong>Pães:</strong> bolores (<em>Penicillium</em>, <em>Aspergillus</em>, <em>Rhizopus</em>); mofo visível.</li>
  <li><strong>Sucos e refrigerantes:</strong> leveduras, <em>Alicyclobacillus</em>; gás, turvação, off-flavor.</li>
  <li><strong>Conservas:</strong> <em>Bacillus</em>, <em>Clostridium</em>; estufamento, acidificação.</li>
</ul>

<h3>Fatores que favorecem a deterioração</h3>
<ul>
  <li>Cadeia de frio inadequada.</li>
  <li>Embalagem danificada ou com oxigênio.</li>
  <li>Alta umidade e a<sub>w</sub>.</li>
  <li>Tempo prolongado de armazenamento.</li>
  <li>Contaminação inicial alta.</li>
</ul>

<h3>Deterioração x patógeno</h3>
<p>Um alimento com cheiro e textura normais pode conter patógenos; um alimento deteriorado pode não ter patógenos. Por isso a análise microbiológica não substitui boas práticas, e a avaliação sensorial não garante segurança.</p>

<div class="recap">
  <h4>Em 30 segundos</h4>
  <ul>
    <li><em>Pseudomonas</em>: slime/pigmento em refrigerados.</li>
    <li><em>Shewanella</em>: odor de amônia em peixe.</li>
    <li><em>Brochothrix</em>: carnes a vácuo.</li>
    <li>Deterioração não é sinônimo de patogenicidade.</li>
  </ul>
</div>

<details class="quick">
  <summary>Teste rápido: peixe com odor de amônia está fresco?</summary>
  <div class="quick-body"><p>Não. Odor de amônia indica deterioração, com produção de compostos nitrogenados por bactérias como <em>Shewanella</em>. Descarte.</p></div>
</details>
`
      },
      {
        id: "x3l2",
        title: "Indicadores microbiológicos e IN 161/2022",
        minutes: 10,
        intro: "Coliformes, E. coli, Enterobacteriaceae, contagem total, psicrotróficos. O que cada indicador realmente prova — e o que não prova.",
        content: `
<p class="lead">Indicadores não são patógenos: são sinais de higiene, processo ou deterioração. A interpretação depende do alimento, do processo e do padrão legal.</p>

<h3>Principais indicadores</h3>
<table>
  <thead><tr><th>Indicador</th><th>O que indica</th><th>Limitação</th></tr></thead>
  <tbody>
    <tr><td>Contagem de mesófilos (APC)</td><td>População total; qualidade geral e higiene.</td><td>Não diferencia patógeno de deteriorante.</td></tr>
    <tr><td>Coliformes totais</td><td>Higiene do processo e contaminação ambiental.</td><td>Inclui espécies fecais e não fecais.</td></tr>
    <tr><td>Coliformes termotolerantes</td><td>Contaminação de origem fecal.</td><td>Não identifica a espécie.</td></tr>
    <tr><td><em>E. coli</em></td><td>Contaminação fecal direta; higiene.</td><td>Nem toda cepa é patogênica.</td></tr>
    <tr><td>Enterobacteriaceae</td><td>Família que inclui patógenos intestinais.</td><td>Indicador mais amplo que coliformes.</td></tr>
    <tr><td>Psicrotróficos</td><td>Deterioração de refrigerados.</td><td>Relevante na cadeia de frio.</td></tr>
    <tr><td>Bolores e leveduras</td><td>Deterioração de ácidos/secos.</td><td>Não indicam necessariamente patógenos.</td></tr>
    <tr><td>Pesquisa de <em>Salmonella</em></td><td>Presença/ausência do patógeno.</td><td>É critério microbiológico, não indicador.</td></tr>
  </tbody>
</table>

<h3>O que cada um “prova”</h3>
<ul>
  <li><strong>Coliforme alto:</strong> falha de higiene/processo; não prova <em>Salmonella</em>.</li>
  <li><strong><em>E. coli</em>:</strong> contaminação fecal mais direta; ainda não é identificação de patótipo.</li>
  <li><strong>APC alto:</strong> população elevada; pode ser deteriorante ou patógeno, mas não diferencia.</li>
  <li><strong>Psicrotrófico alto:</strong> problema de refrigeração/produção.</li>
  <li><strong>Bolores/leveduras:</strong> deterioração de alimentos ácidos, secos ou com açúcar.</li>
</ul>

<h3>Métodos</h3>
<table>
  <thead><tr><th>Método</th><th>Uso</th></tr></thead>
  <tbody>
    <tr><td>Plaqueamento em profundidade/superfície</td><td>Contagem de viáveis (APC, coliformes, bolores).</td></tr>
    <tr><td>Membrana filtrante</td><td>Água e líquidos com baixa carga.</td></tr>
    <tr><td>Número mais provável (NMP)</td><td>Estimativa em líquidos; coliformes.</td></tr>
    <tr><td>Enriquecimento seletivo</td><td>Pesquisa de <em>Salmonella</em>, <em>Listeria</em>.</td></tr>
    <tr><td>Meios cromogênicos</td><td>Detecção/confirmação rápida.</td></tr>
    <tr><td>Testes bioquímicos e sorologia</td><td>Confirmação de espécie/sorovar.</td></tr>
  </tbody>
</table>

<h3>IN 161/2022 e planos de amostragem</h3>
<p>A Instrução Normativa 161/2022 consolidou padrões microbiológicos de alimentos no Brasil. Em um plano de amostragem:</p>
<ul>
  <li><strong>n:</strong> número de unidades amostradas.</li>
  <li><strong>c:</strong> número máximo de unidades que podem apresentar contagem entre m e M.</li>
  <li><strong>m:</strong> limite inferior (contagem aceitável).</li>
  <li><strong>M:</strong> limite superior (acima dele, o lote é rejeitado).</li>
</ul>
<p>Para patógenos como <em>Salmonella</em>, o padrão costuma ser ausência em 25 g (ou outra unidade), sem tolerância.</p>
<div class="callout exam"><strong>Pegadinha</strong><p>Coliforme alto não significa “tem <em>Salmonella</em>”. Significa falha de higiene. A pesquisa de <em>Salmonella</em> é específica e independente.</p></div>

<h3>Coleta e interpretação</h3>
<ul>
  <li>Amostra representativa, assepsia, transporte refrigerado e prazo.</li>
  <li>Registrar lote, data, temperatura e condições.</li>
  <li>Comparar com o padrão do alimento e o processo.</li>
  <li>Resultado isolado não fecha diagnóstico; avaliar histórico e BPF.</li>
</ul>

<div class="recap">
  <h4>Em 30 segundos</h4>
  <ul>
    <li>Indicador de higiene ≠ patógeno.</li>
    <li>Coliformes/E. coli = higiene fecal; APC = população total.</li>
    <li>IN 161/2022: n, c, m, M; patógenos geralmente ausência.</li>
    <li>Coleta e transporte adequados são parte do resultado.</li>
  </ul>
</div>

<details class="quick">
  <summary>Teste rápido: contagem de coliformes acima do padrão prova contaminação por Salmonella?</summary>
  <div class="quick-body"><p>Não. Prova falha de higiene/processo. A presença de <em>Salmonella</em> precisa ser pesquisada especificamente.</p></div>
</details>
`
      },
      {
        id: "x3l3",
        title: "Fungos, micotoxinas, probióticos e prebióticos",
        minutes: 10,
        intro: "Bolores podem ser úteis, deteriorantes ou produtores de toxinas. Bactérias podem ser patogênicas ou benéficas. A diferença está na espécie, na dose e no contexto.",
        content: `
<p class="lead">Fungos são versáteis: fazem pão, queijo e shoyu, mas também estragam alimentos e produzem micotoxinas. Probióticos e prebióticos são outro exemplo de microrganismos/compostos com efeito benéfico — desde que a cepa e a dose sejam adequadas.</p>

<h3>Fungos: estrutura e crescimento</h3>
<ul>
  <li><strong>Leveduras:</strong> unicelulares, ovais, reprodução por brotamento.</li>
  <li><strong>Bolores:</strong> multicelulares, hifas e micélio; conídios para dispersão.</li>
  <li>Crescem em pH ácido, baixa a<sub>w</sub> e temperatura ambiente — condições em que muitas bactérias não crescem.</li>
  <li>São aeróbios ou anaeróbios facultativos; muitos toleram conservantes ácidos.</li>
</ul>

<h3>Fungos úteis</h3>
<table>
  <thead><tr><th>Fungo</th><th>Uso</th></tr></thead>
  <tbody>
    <tr><td><em>Saccharomyces cerevisiae</em></td><td>Pão, cerveja, vinho; fermentação de açúcares.</td></tr>
    <tr><td><em>Penicillium roqueforti</em></td><td>Queijo azul; aroma e textura.</td></tr>
    <tr><td><em>Penicillium camemberti</em></td><td>Queijos de casca branca (brie, camembert).</td></tr>
    <tr><td><em>Aspergillus oryzae</em></td><td>Shoyu, missô; enzimas.</td></tr>
    <tr><td><em>Aspergillus niger</em></td><td>Produção de enzimas (amilases, pectinases).</td></tr>
  </tbody>
</table>

<h3>Deterioração por fungos</h3>
<p>Pães, frutas, geleias, sucos, queijos e embutidos são afetados. O mofo visível é só a parte superficial; o micélio pode estar mais profundo. Em alimentos moles, o descarte deve ser total. Micotoxinas podem difundir e não são destruídas por cocção comum.</p>

<h3>Micotoxinas</h3>
<table>
  <thead><tr><th>Toxina</th><th>Fungo</th><th>Alimento</th><th>Efeito</th></tr></thead>
  <tbody>
    <tr><td>Aflatoxina B1, B2, G1, G2</td><td><em>Aspergillus flavus</em>, <em>A. parasiticus</em></td><td>Amendoim, milho, castanhas</td><td>Hepatotóxica, carcinogênica; B1 é a mais tóxica.</td></tr>
    <tr><td>Aflatoxina M1</td><td>Metabólito de B1</td><td>Leite e derivados</td><td>Excreção no leite de animais que ingeriram ração contaminada.</td></tr>
    <tr><td>Ocratoxina A</td><td><em>Aspergillus</em>, <em>Penicillium</em></td><td>Café, cereais, uvas</td><td>Nefrotóxica; possível carcinogênica.</td></tr>
    <tr><td>Fumonisina</td><td><em>Fusarium</em></td><td>Milho</td><td>Risco de defeito do tubo neural; toxicidade animal.</td></tr>
    <tr><td>Desoxinivalenol (DON)</td><td><em>Fusarium</em></td><td>Trigo, cereais</td><td>Vômito, recusa alimentar, efeito imunossupressor.</td></tr>
    <tr><td>Zearalenona</td><td><em>Fusarium</em></td><td>Milho</td><td>Efeito estrogênico; alterações reprodutivas.</td></tr>
  </tbody>
</table>
<p>Prevenção: controlar umidade na colheita e armazenamento, evitar grãos danificados, manter a<sub>w</sub> baixa e temperatura adequada, fazer análise de lotes.</p>

<h3>Probióticos</h3>
<p>Definição: microrganismos vivos que, administrados em quantidades adequadas, conferem benefício à saúde. Exemplos: <em>Lactobacillus</em>, <em>Bifidobacterium</em>, <em>Saccharomyces boulardii</em>. Para alegar efeito, importam a <strong>cepa</strong>, a <strong>dose</strong> (geralmente 10⁸–10⁹ UFC por porção) e a evidência clínica.</p>
<ul>
  <li>Podem auxiliar em diarreia associada a antibióticos, algumas diarreias infecciosas e saúde intestinal.</li>
  <li>Não são indicados de forma universal para todos os quadros; imunossuprimidos e pacientes graves exigem cautela.</li>
  <li>“Contém culturas vivas” não é sinônimo de probiótico.</li>
</ul>

<h3>Prebióticos e simbióticos</h3>
<table>
  <thead><tr><th>Conceito</th><th>Definição</th><th>Exemplos</th></tr></thead>
  <tbody>
    <tr><td>Prebiótico</td><td>Substrato utilizado seletivamente por microrganismos do hospedeiro, com benefício.</td><td>Inulina, FOS, GOS, lactulose.</td></tr>
    <tr><td>Simbiótico</td><td>Combinação de probiótico + prebiótico.</td><td>Iogurte com inulina + <em>Lactobacillus</em>.</td></tr>
    <tr><td>Fermentado</td><td>Alimento transformado por microrganismos; não é necessariamente probiótico.</td><td>Iogurte, kefir, kombucha, chucrute.</td></tr>
  </tbody>
</table>

<div class="recap">
  <h4>Em 30 segundos</h4>
  <ul>
    <li>Fungos crescem em pH ácido e baixa a<sub>w</sub>; podem ser úteis ou deteriorantes.</li>
    <li>Aflatoxina B1 é hepatotóxica; M1 aparece no leite.</li>
    <li>Probiótico = cepa + dose + benefício; prebiótico = substrato seletivo.</li>
    <li>Mofo visível não é “só tirar a parte de cima” em alimentos moles.</li>
  </ul>
</div>

<details class="quick">
  <summary>Teste rápido: iogurte comum é sempre probiótico?</summary>
  <div class="quick-body"><p>Não. Iogurte é fermentado, mas para ser probiótico precisa conter cepas específicas em dose adequada com benefício comprovado. “Culturas vivas” não basta.</p></div>
</details>
`
      }
    ]
  }
]);
