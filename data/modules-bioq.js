window.NUT_MODULES = (window.NUT_MODULES || []).concat([
  {
    id: "q1",
    track: "bioq",
    title: "Ciclo de Krebs: energia e intermediários",
    short: "Ciclo de Krebs",
    icon: "i-spark",
    accent: "plum",
    blurb: "Acetil-CoA, as oito reações do TCA, balanço de NADH/FADH2/GTP, regulação, anfibolia e reações anapleróticas.",
    lessons: [
      {
        id: "q1l1",
        title: "Respiração celular e acetil-CoA",
        minutes: 8,
        intro: "O Ciclo de Krebs é a segunda etapa da respiração. Antes dele, o piruvato precisa virar acetil-CoA — e essa etapa é irreversível.",
        content: `
<p class="lead">A célula obtém energia da glicose em três etapas: <strong>glicólise</strong> (citosol), <strong>Ciclo de Krebs</strong> (matriz mitocondrial) e <strong>cadeia respiratória/fosforilação oxidativa</strong> (membrana mitocondrial interna). O ciclo também é chamado de ciclo do ácido cítrico ou TCA.</p>

<h3>O que o ciclo faz</h3>
<ul>
  <li><strong>Produz energia:</strong> oxida o grupo acetila e conserva elétrons em NADH, FADH2 e GTP.</li>
  <li><strong>Fornece precursores:</strong> intermediários são usados para sintetizar aminoácidos, nucleotídeos, heme e lipídeos.</li>
  <li><strong>Integra o metabolismo:</strong> recebe carbonos de carboidratos, gorduras e proteínas.</li>
</ul>

<h3>Piruvato → acetil-CoA</h3>
<p>O piruvato entra na mitocôndria e sofre <strong>descarboxilação oxidativa</strong> pelo <strong>complexo piruvato-desidrogenase (PDH)</strong>:</p>
<p><strong>Piruvato + CoA + NAD⁺ → acetil-CoA + CO₂ + NADH + H⁺</strong></p>
<p>O complexo PDH tem três enzimas e várias coenzimas: tiamina (B1), ácido lipoico, CoA (B5), FAD (B2) e NAD (B3). É uma etapa <strong>irreversível</strong> nos animais: por isso o acetil-CoA não consegue voltar a glicose.</p>
<div class="callout exam"><strong>Cai na prova</strong><p>Os carbonos da glicose têm dois destinos depois do piruvato: oxidação a CO₂ no Ciclo de Krebs ou incorporação em lipídeos. O acetil-CoA não é precursor líquido de glicose.</p></div>

<h3>De onde vem e para onde vai o acetil-CoA</h3>
<table>
  <thead><tr><th>Origem</th><th>Processo</th><th>Destino</th></tr></thead>
  <tbody>
    <tr><td>Glicose/glicogênio</td><td>Glicólise → piruvato → PDH</td><td>Ciclo de Krebs</td></tr>
    <tr><td>Triacilgliceróis</td><td>Lipólise → beta-oxidação</td><td>Ciclo de Krebs, corpos cetônicos, colesterol</td></tr>
    <tr><td>Proteínas</td><td>Proteólise → aminoácidos → desaminação</td><td>Ciclo de Krebs, gliconeogênese, corpos cetônicos</td></tr>
  </tbody>
</table>

<h3>Regulação do PDH no jejum</h3>
<p>No jejum, o fígado recebe grande quantidade de ácidos graxos. A beta-oxidação eleva muito o <strong>acetil-CoA</strong>, que <strong>inibe o PDH</strong> e <strong>ativa a piruvato-carboxilase</strong> (enzima anaplerótica que produz oxaloacetato). Assim, o piruvato é desviado para a gliconeogênese em vez de ser oxidado.</p>

<div class="recap">
  <h4>Em 30 segundos</h4>
  <ul>
    <li>CK ocorre na matriz mitocondrial; glicólise, no citosol; fosforilação oxidativa, na membrana interna.</li>
    <li>PDH: piruvato → acetil-CoA + CO₂ + NADH; etapa irreversível.</li>
    <li>Acetil-CoA vem de carboidratos, gorduras e proteínas.</li>
    <li>No jejum, acetil-CoA inibe PDH e ativa piruvato-carboxilase.</li>
  </ul>
</div>

<details class="quick">
  <summary>Teste rápido: por que o acetil-CoA não pode ser convertido em glicose?</summary>
  <div class="quick-body"><p>Porque a reação do complexo PDH é irreversível e os animais não têm a enzima que refaz piruvato a partir de acetil-CoA. O acetil-CoA pode ser oxidado no CK ou usado na síntese de lipídeos e corpos cetônicos, mas não gera glicose líquida.</p></div>
</details>
`
      },
      {
        id: "q1l2",
        title: "As oito reações e o balanço do ciclo",
        minutes: 10,
        intro: "Reação por reação, com as enzimas e os produtos que a prova cobra: 2 CO₂, 3 NADH, 1 FADH2 e 1 GTP por acetil-CoA.",
        content: `
<p class="lead">O ciclo começa quando o <strong>acetil-CoA</strong> doa o grupo acetila ao <strong>oxaloacetato</strong>, formando <strong>citrato</strong>. Ao final, o oxaloacetato é regenerado e o ciclo recomeça.</p>

<h3>As oito etapas</h3>
<table>
  <thead><tr><th>#</th><th>Reação</th><th>Enzima</th><th>Produto energético</th></tr></thead>
  <tbody>
    <tr><td>1</td><td>Acetil-CoA + oxaloacetato → citrato</td><td>Citrato sintase</td><td>— (libera CoA)</td></tr>
    <tr><td>2</td><td>Citrato ↔ isocitrato</td><td>Aconitase</td><td>—</td></tr>
    <tr><td>3</td><td>Isocitrato → α-cetoglutarato + CO₂</td><td>Isocitrato-desidrogenase</td><td>NADH</td></tr>
    <tr><td>4</td><td>α-cetoglutarato → succinil-CoA + CO₂</td><td>Complexo α-cetoglutarato-desidrogenase</td><td>NADH</td></tr>
    <tr><td>5</td><td>Succinil-CoA → succinato</td><td>Succinil-CoA sintetase</td><td>GTP</td></tr>
    <tr><td>6</td><td>Succinato → fumarato</td><td>Succinato-desidrogenase (Complexo II)</td><td>FADH2</td></tr>
    <tr><td>7</td><td>Fumarato → malato</td><td>Fumarase</td><td>—</td></tr>
    <tr><td>8</td><td>Malato → oxaloacetato</td><td>Malato-desidrogenase</td><td>NADH</td></tr>
  </tbody>
</table>

<h3>Balanço por volta</h3>
<table>
  <thead><tr><th>Produto</th><th>Por acetil-CoA</th><th>Por glicose (2 voltas)</th></tr></thead>
  <tbody>
    <tr><td>CO₂</td><td>2</td><td>4</td></tr>
    <tr><td>NADH</td><td>3</td><td>6</td></tr>
    <tr><td>FADH2</td><td>1</td><td>2</td></tr>
    <tr><td>GTP (→ ATP)</td><td>1</td><td>2</td></tr>
  </tbody>
</table>
<p>Rendimento aproximado: cada NADH rende ~2,5 ATP e cada FADH2 ~1,5 ATP na cadeia respiratória. Assim, uma volta do CK rende cerca de <strong>10 ATP</strong>; por glicose, cerca de <strong>20 ATP</strong> só no CK (sem contar glicólise e fosforilação oxidativa dos equivalentes).</p>
<div class="callout exam"><strong>Pegadinha clássica</strong><p>O ciclo, sozinho, produz <strong>pouco ATP</strong> e <strong>não usa O₂ diretamente</strong>. Ele produz NADH e FADH2, que levam elétrons à cadeia respiratória. O O₂ só é consumido no Complexo IV.</p></div>

<h3>Detalhes que caem</h3>
<ul>
  <li><strong>Citrato sintase:</strong> primeira enzima; inibida por ATP, NADH e succinil-CoA; ativada por ADP.</li>
  <li><strong>Isocitrato-desidrogenase:</strong> principal ponto de regulação; ativada por ADP e Ca²⁺; inibida por ATP e NADH.</li>
  <li><strong>Complexo α-cetoglutarato-desidrogenase:</strong> semelhante ao PDH; inibido por ATP, NADH e succinil-CoA.</li>
  <li><strong>Succinato-desidrogenase</strong> é a única enzima do ciclo ligada à membrana mitocondrial interna e é o <strong>Complexo II</strong> da cadeia respiratória.</li>
  <li><strong>GTP</strong> pode ser convertido em ATP por uma quinase (GTP + ADP → GDP + ATP).</li>
</ul>

<div class="recap">
  <h4>Em 30 segundos</h4>
  <ul>
    <li>1 acetil-CoA → 2 CO₂ + 3 NADH + 1 FADH2 + 1 GTP.</li>
    <li>1 glicose → 2 voltas → 4 CO₂ + 6 NADH + 2 FADH2 + 2 GTP.</li>
    <li>Succinato-desidrogenase = Complexo II.</li>
    <li>O ciclo não consome O₂ diretamente; quem consome é a cadeia respiratória.</li>
  </ul>
</div>

<details class="quick">
  <summary>Teste rápido: quantos NADH e FADH2 são formados por glicose no CK?</summary>
  <div class="quick-body"><p>6 NADH e 2 FADH2, porque cada glicose gera 2 acetil-CoA e cada volta produz 3 NADH e 1 FADH2. Some ainda 4 CO₂ e 2 GTP.</p></div>
</details>
`
      },
      {
        id: "q1l3",
        title: "Regulação, anfibolia e anaplerose",
        minutes: 9,
        intro: "Por que o ciclo acelera quando a célula gasta ATP e por que ele é chamado de anfibólico. Mais as reações que repõem intermediários.",
        content: `
<p class="lead">O Ciclo de Krebs não é uma via isolada: ele sente o estado energético da célula e fornece intermediários para várias rotas de síntese. Isso explica dois conceitos muito cobrados: <strong>anfibolia</strong> e <strong>anaplerose</strong>.</p>

<h3>Regulação pelo estado energético</h3>
<table>
  <thead><tr><th>Sinal</th><th>Efeito no ciclo</th></tr></thead>
  <tbody>
    <tr><td>ATP alto, NADH alto</td><td>Inibe citrato sintase, isocitrato-desidrogenase e α-cetoglutarato-desidrogenase</td></tr>
    <tr><td>ADP alto, NAD⁺ alto</td><td>Ativa o ciclo: a célula precisa de energia</td></tr>
    <tr><td>Ca²⁺ (contração muscular)</td><td>Ativa isocitrato-desidrogenase e α-cetoglutarato-desidrogenase</td></tr>
    <tr><td>Succinil-CoA</td><td>Inibe citrato sintase e α-cetoglutarato-desidrogenase</td></tr>
  </tbody>
</table>
<p>O ciclo está ligado à disponibilidade de substrato (acetil-CoA), à inibição por produto (NADH) e à razão ADP/ATP. Em repouso, ATP alto e NADH alto mantêm o ciclo mais lento; em atividade, ADP e NAD⁺ altos aceleram.</p>

<h3>Anfibolia</h3>
<p>O CK é <strong>anfibólico</strong> porque participa ao mesmo tempo do catabolismo e do anabolismo:</p>
<ul>
  <li><strong>Catabólico:</strong> oxida acetil-CoA a CO₂ e gera NADH/FADH2.</li>
  <li><strong>Anabólico:</strong> fornece oxaloacetato, α-cetoglutarato, succinil-CoA e citrato para síntese de aminoácidos, nucleotídeos, heme e ácidos graxos.</li>
</ul>

<h3>Reações anapleróticas</h3>
<p>São reações que <strong>repõem intermediários</strong> do ciclo quando eles são desviados para síntese. As principais:</p>
<table>
  <thead><tr><th>Reação</th><th>Enzima</th><th>Intermediário reposto</th></tr></thead>
  <tbody>
    <tr><td>Piruvato + CO₂ → oxaloacetato</td><td>Piruvato-carboxilase (biotina, ATP)</td><td>Oxaloacetato</td></tr>
    <tr><td>Fosfoenolpiruvato + CO₂ → oxaloacetato</td><td>PEP-carboxiquinase</td><td>Oxaloacetato</td></tr>
    <tr><td>Malato → piruvato + CO₂</td><td>Enzima málica</td><td>NADPH e piruvato</td></tr>
    <tr><td>Glutamato → α-cetoglutarato</td><td>Glutamato-desidrogenase</td><td>α-cetoglutarato</td></tr>
    <tr><td>Propionil-CoA → succinil-CoA</td><td>Propionil-CoA-carboxilase + metilmalonil-CoA mutase (B12)</td><td>Succinil-CoA</td></tr>
  </tbody>
</table>
<p>A deficiência de piruvato-carboxilase causa a <strong>doença de Leigh</strong> (encefalopatia necrotizante subaguda), porque o ciclo perde oxaloacetato e não consegue repor intermediários.</p>

<div class="callout exam"><strong>Fígado no jejum</strong><p>O acetil-CoA elevado inibe o PDH e ativa a piruvato-carboxilase. O oxaloacetato formado é usado na gliconeogênese; parte do acetil-CoA vai para corpos cetônicos. É a lógica da integração metabólica do jejum.</p></div>

<div class="recap">
  <h4>Em 30 segundos</h4>
  <ul>
    <li>ATP/NADH altos inibem; ADP/NAD⁺ altos ativam o ciclo.</li>
    <li>Anfibólico = catabolismo + anabolismo no mesmo ciclo.</li>
    <li>Anaplerose repõe intermediários; piruvato-carboxilase é a principal.</li>
    <li>Deficiência de piruvato-carboxilase → doença de Leigh.</li>
  </ul>
</div>

<details class="quick">
  <summary>Teste rápido: por que o ciclo para quando a cadeia respiratória é bloqueada?</summary>
  <div class="quick-body"><p>Porque o NADH e o FADH2 não são oxidados de volta a NAD⁺ e FAD. Sem NAD⁺/FAD disponíveis, as desidrogenases do ciclo não conseguem oxidar os substratos e o ciclo desacelera.</p></div>
</details>
`
      }
    ]
  },
  {
    id: "q2",
    track: "bioq",
    title: "Cadeia respiratória e fosforilação oxidativa",
    short: "Cadeia respiratória",
    icon: "i-flame",
    accent: "plum",
    blurb: "Complexos I–IV, CoQ e citocromo c, bombeamento de prótons, hipótese quimiosmótica, ATP sintase, inibidores, desacopladores e radicais livres.",
    lessons: [
      {
        id: "q2l1",
        title: "Complexos e fluxo de elétrons",
        minutes: 9,
        intro: "Os elétrons do NADH e do FADH2 percorrem quatro complexos na membrana interna até reduzir o oxigênio a água.",
        content: `
<p class="lead">A cadeia respiratória (ou transporte de elétrons, CTE) fica na <strong>membrana mitocondrial interna</strong>. Ela recebe elétrons do NADH e do FADH2 e usa a energia do fluxo para bombear prótons.</p>

<h3>Os componentes</h3>
<table>
  <thead><tr><th>Componente</th><th>Nome</th><th>Função</th></tr></thead>
  <tbody>
    <tr><td>Complexo I</td><td>NADH-desidrogenase</td><td>Recebe elétrons do NADH; bombeia 4 H⁺</td></tr>
    <tr><td>Complexo II</td><td>Succinato-desidrogenase</td><td>Recebe elétrons do FADH2; não bombeia prótons</td></tr>
    <tr><td>Coenzima Q</td><td>Ubiquinona</td><td>Transporta elétrons entre I/II e III</td></tr>
    <tr><td>Complexo III</td><td>Citocromo c oxidorredutase</td><td>Bombeia 4 H⁺; passa elétrons ao citocromo c</td></tr>
    <tr><td>Citocromo c</td><td>Proteína solúvel</td><td>Transporta elétrons do III para o IV</td></tr>
    <tr><td>Complexo IV</td><td>Citocromo c oxidase</td><td>Bombeia 2 H⁺; reduz O₂ a H₂O</td></tr>
    <tr><td>Complexo V</td><td>ATP sintase</td><td>Usa o gradiente de prótons para fazer ATP</td></tr>
  </tbody>
</table>

<h3>Fluxo de elétrons</h3>
<p><strong>NADH → Complexo I → CoQ → Complexo III → citocromo c → Complexo IV → O₂ → H₂O</strong></p>
<p><strong>FADH2 → Complexo II → CoQ → Complexo III → citocromo c → Complexo IV → O₂ → H₂O</strong></p>
<p>O FADH2 entra depois do Complexo I, por isso rende menos ATP que o NADH. Os complexos I, III e IV bombeiam prótons da matriz para o espaço intermembranas; o Complexo II não bombeia.</p>

<h3>Pares redox e grupos prostéticos</h3>
<p>As proteínas da cadeia têm grupos prostéticos capazes de receber e doar elétrons: FMN, centros ferro-enxofre, heme e cobre. Cada par redox alterna entre forma oxidada e reduzida. O oxigênio é o <strong>aceptor final de elétrons</strong> e é reduzido a água.</p>
<div class="callout exam"><strong>Cai na prova</strong><p>O Complexo II é a succinato-desidrogenase — a mesma enzima do Ciclo de Krebs. Por isso o FADH2 rende menos ATP: ele contorna o primeiro sítio de bombeamento de prótons.</p></div>

<div class="recap">
  <h4>Em 30 segundos</h4>
  <ul>
    <li>CTE na membrana mitocondrial interna; ATP sintase = Complexo V.</li>
    <li>NADH entra no I; FADH2 entra no II; CoQ e citocromo c conectam.</li>
    <li>I, III e IV bombeiam H⁺; II não bombeia.</li>
    <li>O₂ é o aceptor final e vira água no Complexo IV.</li>
  </ul>
</div>

<details class="quick">
  <summary>Teste rápido: por que o cianeto mata tão rápido?</summary>
  <div class="quick-body"><p>Porque bloqueia o Complexo IV e impede a transferência de elétrons para o oxigênio. Sem cadeia respiratória, a fosforilação oxidativa para e a célula fica sem ATP aeróbico, especialmente neurônios e coração.</p></div>
</details>
`
      },
      {
        id: "q2l2",
        title: "Quimiosmose e ATP sintase",
        minutes: 9,
        intro: "A energia do fluxo de elétrons não vira ATP diretamente: ela cria um gradiente de prótons que gira a ATP sintase.",
        content: `
<p class="lead">A <strong>hipótese quimiosmótica</strong>, de Peter Mitchell (Nobel de Química de 1978), explica como a energia do transporte de elétrons é convertida em ATP.</p>

<h3>A lógica</h3>
<ol>
  <li>Os complexos I, III e IV bombeiam H⁺ da matriz para o espaço intermembranas.</li>
  <li>Isso cria um <strong>gradiente de pH</strong> e um <strong>potencial elétrico</strong> através da membrana: a <strong>força próton-motriz</strong>.</li>
  <li>Os prótons retornam à matriz pela <strong>ATP sintase</strong> (Complexo V), a favor do gradiente.</li>
  <li>A energia desse retorno move a síntese de ATP a partir de ADP + Pi.</li>
</ol>

<h3>ATP sintase</h3>
<table>
  <thead><tr><th>Parte</th><th>Local</th><th>Função</th></tr></thead>
  <tbody>
    <tr><td>F₀</td><td>Membrana interna</td><td>Canal de prótons; roda conforme o H⁺ passa</td></tr>
    <tr><td>F₁</td><td>Matriz</td><td>Subunidades catalíticas que sintetizam ATP</td></tr>
  </tbody>
</table>
<p>A cadeia respiratória e a ATP sintase são sistemas separados, ligados apenas pela força próton-motriz. Quando o gradiente é dissipado, a cadeia acelera, mas não há ATP.</p>

<h3>Acoplamento e rendimento</h3>
<p>Transporte de elétrons e fosforilação são <strong>acoplados</strong> pelo gradiente de prótons. O ATP não é armazenado em grande quantidade: um adulto sedentário gasta cerca de 2.000 kcal/dia, o equivalente a ~83 kg de ATP, mas tem apenas ~250 g disponíveis. A reciclagem de ADP em ATP ocorre principalmente pela fosforilação oxidativa — cada ATP é reciclado centenas de vezes por dia.</p>
<p>Rendimento aproximado: NADH → ~2,5 ATP; FADH2 → ~1,5 ATP. O rendimento exato depende dos transportadores de elétrons e da permeabilidade da membrana.</p>

<div class="callout exam"><strong>Cai na prova</strong><p>Se a membrana mitocondrial interna ficar permeável a prótons (desacoplador), o gradiente desaparece: a cadeia continua queimando NADH, mas a ATP sintase não produz ATP. A energia vira calor.</p></div>

<div class="recap">
  <h4>Em 30 segundos</h4>
  <ul>
    <li>Fluxo de elétrons → bombeamento de H⁺ → força próton-motriz → ATP.</li>
    <li>F₀ = canal de prótons; F₁ = catálise do ATP.</li>
    <li>NADH ~2,5 ATP; FADH2 ~1,5 ATP.</li>
    <li>ATP é reciclado continuamente; não é reserva de longo prazo.</li>
  </ul>
</div>

<details class="quick">
  <summary>Teste rápido: o que acontece se a ATP sintase for bloqueada pela oligomicina?</summary>
  <div class="quick-body"><p>Os prótons não retornam pela ATP sintase, o gradiente fica máximo e o transporte de elétrons desacelera por falta de NAD⁺/FAD. A célula para de produzir ATP pela fosforilação oxidativa.</p></div>
</details>
`
      },
      {
        id: "q2l3",
        title: "Inibidores, desacopladores e radicais livres",
        minutes: 9,
        intro: "Rotenona, antimicina, cianeto, oligomicina, DNP e UCP1: quem bloqueia o quê, e por que a cadeia também produz radicais livres.",
        content: `
<p class="lead">A produção aeróbica de ATP pode ser prejudicada por inibidores da cadeia, inibidores da ATP sintase e desacopladores. Também há produção fisiológica de espécies reativas de oxigênio (ROS).</p>

<h3>Inibidores</h3>
<table>
  <thead><tr><th>Agente</th><th>Alvo</th><th>Efeito</th></tr></thead>
  <tbody>
    <tr><td>Rotenona (pesticida)</td><td>Complexo I → CoQ</td><td>Bloqueia elétrons do NADH</td></tr>
    <tr><td>Antimicina A (fungicida)</td><td>Complexo III</td><td>Interrompe o fluxo para o citocromo c</td></tr>
    <tr><td>Cianeto e monóxido de carbono</td><td>Complexo IV</td><td>Impedem a redução do O₂ a água</td></tr>
    <tr><td>Oligomicina</td><td>ATP sintase</td><td>Bloqueia o canal de prótons e a síntese de ATP</td></tr>
  </tbody>
</table>

<h3>Desacopladores</h3>
<p>Desacopladores aumentam a permeabilidade da membrana interna a prótons. O gradiente é dissipado e a energia é liberada como <strong>calor</strong>, sem síntese de ATP. O exemplo clássico é o <strong>2,4-dinitrofenol (DNP)</strong>, que já foi usado como emagrecedor e se mostrou tóxico.</p>
<p>As <strong>UCPs</strong> (proteínas desacopladoras) fazem isso naturalmente. A <strong>termogenina (UCP1)</strong>, na gordura marrom, é especializada em termogênese sem calafrios: permite o retorno de prótons sem ATP e gera calor.</p>
<table>
  <thead><tr><th>Conceito</th><th>O que faz</th></tr></thead>
  <tbody>
    <tr><td>Inibidor</td><td>Bloqueia um componente da cadeia ou a ATP sintase; o fluxo para</td></tr>
    <tr><td>Desacoplador</td><td>Permite o fluxo de elétrons, mas dissipa o gradiente; ATP cai e calor sobe</td></tr>
  </tbody>
</table>

<h3>Radicais livres e antioxidantes</h3>
<p>Parte dos elétrons escapa, sobretudo dos complexos I e III, e reduz o O₂ a <strong>superóxido (O₂⁻)</strong>, que origina peróxido de hidrogênio (H₂O₂) e radical hidroxila (OH·). Essas ROS danificam lipídeos, proteínas e DNA.</p>
<ul>
  <li><strong>SOD (superóxido dismutase):</strong> converte superóxido em H₂O₂.</li>
  <li><strong>Catalase:</strong> decompõe H₂O₂ em água e O₂.</li>
  <li><strong>Glutationa peroxidase:</strong> usa glutationa reduzida (GSH) para reduzir peróxidos; a glutationa redutase regenera GSH com NADPH.</li>
</ul>
<p>Exercício moderado aumenta a biogênese mitocondrial e as defesas antioxidantes, reduzindo o estresse oxidativo. Exercício exaustivo e isquemia aumentam a produção de ROS.</p>

<div class="callout exam"><strong>Pegadinha</strong><p>Desacoplador não é inibidor. O desacoplador <strong>aumenta</strong> o consumo de O₂ e a oxidação de substratos, mas <strong>reduz</strong> o ATP. O inibidor <strong>para</strong> a cadeia e também reduz o consumo de O₂.</p></div>

<div class="recap">
  <h4>Em 30 segundos</h4>
  <ul>
    <li>Rotenona → I; antimicina A → III; cianeto/CO → IV; oligomicina → ATP sintase.</li>
    <li>DNP e UCP1 dissipam o gradiente: calor em vez de ATP.</li>
    <li>ROS vêm do vazamento de elétrons, principalmente dos complexos I e III.</li>
    <li>SOD, catalase e glutationa peroxidase são defesas antioxidantes.</li>
  </ul>
</div>

<details class="quick">
  <summary>Teste rápido: por que o DNP causa hipertermia e fraqueza?</summary>
  <div class="quick-body"><p>Porque dissipa o gradiente de prótons: a cadeia queima substratos e gera calor, mas produz pouco ATP. O corpo tenta compensar aumentando o metabolismo, o que agrava a hipertermia e leva à falência energética.</p></div>
</details>
`
      }
    ]
  },
  {
    id: "q3",
    track: "bioq",
    title: "Metabolismo do glicogênio",
    short: "Glicogênio",
    icon: "i-chart",
    accent: "plum",
    blurb: "Glicogênese, glicogenólise, regulação hormonal, fígado x músculo, exercício e doenças de armazenamento.",
    lessons: [
      {
        id: "q3l1",
        title: "Glicogênio e glicogênese",
        minutes: 8,
        intro: "Guardar glicose como glicogênio evita o problema osmótico. Entenda como o polímero é sintetizado e ramificado.",
        content: `
<p class="lead">O glicogênio é um polímero ramificado de glicose, osmoticamente inativo, armazenado no fígado e no músculo esquelético. Ele resolve um problema: altas concentrações de glicose livre perturbariam o equilíbrio osmótico da célula.</p>

<h3>Estrutura e estoques</h3>
<ul>
  <li>Grânulo globular com cerca de <strong>30.000 moléculas de glicose</strong>.</li>
  <li>Ligações lineares <strong>α-1,4</strong> e ramificações <strong>α-1,6</strong>.</li>
  <li>Fígado: ~200 g após refeição, ~80 g após jejum; mantém a glicemia.</li>
  <li>Músculo: reserva para a própria contração; não libera glicose para o sangue.</li>
</ul>

<h3>Glicogênese (síntese)</h3>
<ol>
  <li><strong>UDP-glicose:</strong> a UDP-glicose pirofosforilase converte glicose-1-fosfato + UTP em UDP-glicose + PPi. A UDP-glicose é a fonte de todos os resíduos adicionados.</li>
  <li><strong>Segmento inicial:</strong> a glicogênio-sintase não inicia a cadeia com glicose livre. Usa um fragmento de glicogênio existente ou a proteína <strong>glicogenina</strong> como receptor dos primeiros resíduos.</li>
  <li><strong>Alongamento:</strong> a glicogênio-sintase adiciona glicoses em ligações α-1,4.</li>
  <li><strong>Ramificação:</strong> a enzima ramificadora (4:6-transferase) transfere um bloco de resíduos e forma ligações α-1,6.</li>
</ol>
<p>As ramificações aumentam a solubilidade e criam muitos terminais, acelerando tanto a síntese quanto a degradação.</p>

<h3>Onde e quando ocorre</h3>
<p>A síntese ocorre no <strong>citosol</strong> de células hepáticas e musculares. A insulina, no estado alimentado, estimula a glicogênese: facilita a entrada de glicose e ativa a glicogênio-sintase (por desfosforilação).</p>
<div class="callout exam"><strong>Cai na prova</strong><p>A glicogenina é o primer proteico; a glicogênio-sintase faz α-1,4; a enzima ramificadora faz α-1,6. UDP-glicose é a forma ativada da glicose doada ao polímero.</p></div>

<div class="recap">
  <h4>Em 30 segundos</h4>
  <ul>
    <li>Glicogênio: polímero de glicose, α-1,4 lineares e α-1,6 ramificações.</li>
    <li>Fígado mantém glicemia; músculo usa para contração.</li>
    <li>Glicogênese: UDP-glicose → glicogenina → sintase → ramificadora.</li>
    <li>Insulina estimula; ocorre no citosol.</li>
  </ul>
</div>

<details class="quick">
  <summary>Teste rápido: por que o glicogênio é ramificado?</summary>
  <div class="quick-body"><p>As ramificações criam muitos terminais não redutores, onde atuam a glicogênio-sintase e a glicogênio-fosforilase. Isso aumenta a velocidade de síntese e de degradação e melhora a solubilidade do polímero.</p></div>
</details>
`
      },
      {
        id: "q3l2",
        title: "Glicogenólise e regulação hormonal",
        minutes: 9,
        intro: "Como o glicogênio é quebrado, por que o fígado consegue liberar glicose e o músculo não, e quem manda nisso.",
        content: `
<p class="lead">A glicogenólise libera glicose-1-fosfato do polímero. O destino depende do tecido: o fígado exporta glicose para o sangue; o músculo usa glicose-6-fosfato na própria glicólise.</p>

<h3>Três etapas</h3>
<ol>
  <li><strong>Glicogênio-fosforilase:</strong> cliva ligações α-1,4 por fosforólise, liberando glicose-1-fosfato.</li>
  <li><strong>Desramificação:</strong> a enzima desramificadora tem atividade transferase (move resíduos) e glicosidase α-1,6 (hidrolisa a glicose ramificada).</li>
  <li><strong>Fosfoglicomutase:</strong> converte glicose-1-fosfato em glicose-6-fosfato.</li>
</ol>

<h3>Destinos da glicose-6-fosfato</h3>
<ul>
  <li>Glicólise → ATP.</li>
  <li>Glicose livre → sangue (somente no fígado e rins, que têm <strong>glicose-6-fosfatase</strong>).</li>
  <li>Via das pentoses-fosfato → NADPH e ribose-5-fosfato.</li>
</ul>
<p>O músculo não tem glicose-6-fosfatase funcional relevante: por isso o glicogênio muscular <strong>não corrige a glicemia</strong>. Ele serve para a própria contração.</p>

<h3>Regulação hormonal</h3>
<table>
  <thead><tr><th>Hormônio</th><th>Efeito</th><th>Tecido</th></tr></thead>
  <tbody>
    <tr><td>Glucagon</td><td>Ativa glicogenólise e gliconeogênese</td><td>Fígado (jejum)</td></tr>
    <tr><td>Adrenalina</td><td>Ativa glicogenólise</td><td>Músculo (luta ou fuga) e fígado</td></tr>
    <tr><td>Insulina</td><td>Ativa glicogênese e inibe glicogenólise</td><td>Fígado e músculo (estado alimentado)</td></tr>
  </tbody>
</table>
<p>O glucagon se liga a receptor acoplado à proteína G, ativa adenilil-ciclase → cAMP → PKA, que fosforila e ativa a glicogênio-fosforilase (e inibe a sintase). A adrenalina faz o mesmo no músculo.</p>

<h3>Dois níveis de regulação</h3>
<ul>
  <li><strong>Covalente:</strong> fosforilação/desfosforilação das enzimas por hormônios.</li>
  <li><strong>Alostérica:</strong> AMP e G6P modulam a fosforilase; ATP e G6P inibem; a enzima hepática responde à glicose.</li>
</ul>

<h3>Doenças de armazenamento</h3>
<table>
  <thead><tr><th>Doença</th><th>Enzima deficiente</th><th>Marca</th></tr></thead>
  <tbody>
    <tr><td>Von Gierke (tipo I)</td><td>Glicose-6-fosfatase</td><td>Hipoglicemia grave, hepatomegalia</td></tr>
    <tr><td>Pompe (tipo II)</td><td>α-glicosidase lisossomal</td><td>Cardiomegalia, fraqueza</td></tr>
    <tr><td>Cori (tipo III)</td><td>Enzima desramificadora</td><td>Hepatomegalia, hipoglicemia</td></tr>
    <tr><td>McArdle (tipo V)</td><td>Glicogênio-fosforilase muscular</td><td>Cãibras e intolerância ao exercício</td></tr>
  </tbody>
</table>
<div class="callout exam"><strong>Pegadinha</strong><p>A glicogenólise <strong>não é o inverso exato</strong> da glicogênese: usa fosforólise (não hidrólise), enzimas diferentes e produz glicose-1-fosfato. A síntese usa UDP-glicose e glicogênio-sintase.</p></div>

<div class="recap">
  <h4>Em 30 segundos</h4>
  <ul>
    <li>Fosforilase → G1P; desramificadora; fosfoglicomutase → G6P.</li>
    <li>Fígado tem G6Pase e libera glicose; músculo não tem e usa na glicólise.</li>
    <li>Glucagon = fígado; adrenalina = músculo; insulina = síntese.</li>
    <li>Von Gierke = G6Pase; McArdle = fosforilase muscular.</li>
  </ul>
</div>

<details class="quick">
  <summary>Teste rápido: por que o glicogênio muscular não mantém a glicemia?</summary>
  <div class="quick-body"><p>Porque o músculo não possui glicose-6-fosfatase em quantidade funcional. A glicose-6-fosfato fica presa na célula e entra na glicólise; só o fígado (e o rim) consegue converter G6P em glicose livre para o sangue.</p></div>
</details>
`
      },
      {
        id: "q3l3",
        title: "Glicogênio no exercício e no jejum",
        minutes: 8,
        intro: "Reserva hepática x muscular, ciclo de Cori e o que acontece com os estoques nas primeiras horas de jejum e no exercício.",
        content: `
<p class="lead">O glicogênio é a reserva de glicose de curto prazo. Ele sustenta a glicemia entre as refeições e fornece energia rápida para o músculo.</p>

<h3>Fígado x músculo</h3>
<table>
  <thead><tr><th>Aspecto</th><th>Fígado</th><th>Músculo</th></tr></thead>
  <tbody>
    <tr><td>Função</td><td>Manter glicemia</td><td>Energia para contração</td></tr>
    <tr><td>Glicose-6-fosfatase</td><td>Sim</td><td>Não (relevante)</td></tr>
    <tr><td>Hormônio principal</td><td>Glucagon</td><td>Adrenalina</td></tr>
    <tr><td>Destino da glicose</td><td>Sangue</td><td>Glicólise local</td></tr>
  </tbody>
</table>

<h3>Exercício</h3>
<p>Nos primeiros segundos de esforço intenso, a fosfocreatina regenera ATP. Depois, o glicogênio muscular sustenta a glicólise anaeróbia e, com a continuidade, a oxidação aeróbia de gorduras. O lactato produzido no músculo vai ao fígado, onde é convertido em glicose pela gliconeogênese: é o <strong>ciclo de Cori</strong>.</p>

<h3>Jejum</h3>
<ul>
  <li><strong>Até 12–18 h:</strong> glicogenólise hepática mantém a glicemia.</li>
  <li><strong>Após ~18 h:</strong> os estoques caem e a gliconeogênese (lactato, glicerol e aminoácidos) assume.</li>
  <li><strong>Jejum prolongado:</strong> lipólise e cetogênese aumentam; o cérebro usa corpos cetônicos e poupa glicose e proteína muscular.</li>
</ul>
<p>O treinamento de endurance aumenta a capacidade de estocar glicogênio (supercompensação) e de poupar glicogênio usando gordura.</p>

<div class="callout exam"><strong>Integração</strong><p>No jejum, o glucagon estimula glicogenólise hepática e gliconeogênese. O músculo, sem glucagon, responde à adrenalina. O fígado é o único tecido que exporta glicose em quantidade relevante para manter a glicemia.</p></div>

<div class="recap">
  <h4>Em 30 segundos</h4>
  <ul>
    <li>Fígado exporta glicose; músculo consome localmente.</li>
    <li>Ciclo de Cori: lactato muscular → glicose hepática.</li>
    <li>Jejum curto = glicogenólise; prolongado = gliconeogênese e cetose.</li>
    <li>Treino aumenta estoque e poupança de glicogênio.</li>
  </ul>
</div>

<details class="quick">
  <summary>Teste rápido: por que a hipoglicemia pode ocorrer em jejum prolongado mesmo com gordura estocada?</summary>
  <div class="quick-body"><p>Porque a gordura não gera glicose líquida: os ácidos graxos viram acetil-CoA, que não é precursor de glicose. O cérebro precisa de uma fração de glicose e depende da gliconeogênese a partir de aminoácidos e glicerol; quando isso se esgota, a glicemia cai.</p></div>
</details>
`
      }
    ]
  },
  {
    id: "q4",
    track: "bioq",
    title: "Metabolismo de lipídeos",
    short: "Lipídeos",
    icon: "i-fish",
    accent: "plum",
    blurb: "Digestão e lipoproteínas, lipogênese, mobilização, beta-oxidação, corpos cetônicos e dislipidemias.",
    lessons: [
      {
        id: "q4l1",
        title: "Digestão, absorção e lipoproteínas",
        minutes: 9,
        intro: "Triglicerídeos são grandes e hidrofóbicos: precisam de emulsificação, micelas, quilomícrons e lipoproteínas para circular.",
        content: `
<p class="lead">Os lipídeos da dieta são principalmente triacilgliceróis (TAG). Como são hidrofóbicos, não são absorvidos diretamente: passam por emulsificação, hidrólise e empacotamento em lipoproteínas.</p>

<h3>Digestão e absorção</h3>
<ol>
  <li><strong>Emulsificação</strong> no intestino delgado: sais biliares + movimento mecânico formam micelas e aumentam a superfície de contato.</li>
  <li><strong>Lipase pancreática</strong> hidrolisa TAG em ácidos graxos livres e 2-monoacilglicerol.</li>
  <li>Ácidos graxos e monoacilglicerol são absorvidos pelos enterócitos.</li>
  <li>Dentro da célula, são reesterificados a TAG.</li>
  <li>TAG + colesterol + apolipoproteínas formam o <strong>quilomícron</strong>.</li>
  <li>O quilomícron vai para o sistema linfático e depois para o sangue.</li>
  <li>A <strong>lipoproteína lipase (LPL)</strong>, ativada pela ApoC-II, libera ácidos graxos e glicerol para adipócitos e miócitos.</li>
</ol>

<h3>Lipoproteínas</h3>
<table>
  <thead><tr><th>Lipoproteína</th><th>Origem</th><th>Transporta</th></tr></thead>
  <tbody>
    <tr><td>Quilomícron</td><td>Intestino</td><td>TAG da dieta</td></tr>
    <tr><td>VLDL</td><td>Fígado</td><td>TAG produzidos no fígado</td></tr>
    <tr><td>LDL</td><td>Derivado do VLDL</td><td>Colesterol para os tecidos</td></tr>
    <tr><td>HDL</td><td>Fígado/intestino</td><td>Colesterol dos tecidos de volta ao fígado</td></tr>
  </tbody>
</table>

<h3>Dislipidemia e aterosclerose</h3>
<p>LDL alto favorece o depósito de colesterol na parede arterial. O LDL oxidado atrai monócitos, que viram macrófagos e formam <strong>células espumosas</strong>; isso origina a placa aterosclerótica, que pode estreitar ou romper a artéria e causar trombose, infarto ou AVC.</p>
<table>
  <thead><tr><th>Parâmetro</th><th>Ótimo</th><th>Alto</th></tr></thead>
  <tbody>
    <tr><td>Colesterol total</td><td>&lt; 200 mg/dL</td><td>≥ 240 mg/dL</td></tr>
    <tr><td>LDL-C</td><td>&lt; 100 mg/dL</td><td>≥ 160 mg/dL</td></tr>
    <tr><td>HDL-C</td><td>&gt; 60 mg/dL</td><td>Baixo: &lt; 40 mg/dL</td></tr>
    <tr><td>Triglicerídeos</td><td>&lt; 150 mg/dL</td><td>≥ 200 mg/dL</td></tr>
  </tbody>
</table>
<p>Drogas: <strong>estatinas</strong> inibem a HMG-CoA-redutase (etapa limitante da síntese de colesterol); <strong>ezetimiba</strong> inibe a absorção intestinal; <strong>resinas</strong> sequestram sais biliares; aspirina reduz inflamação e agregação plaquetária.</p>

<div class="callout exam"><strong>Cai na prova</strong><p>Quilomícron transporta gordura da dieta; VLDL, gordura hepática; LDL, colesterol para os tecidos; HDL, colesterol de volta ao fígado. A LPL é ativada pela ApoC-II.</p></div>

<div class="recap">
  <h4>Em 30 segundos</h4>
  <ul>
    <li>Emulsificação por sais biliares; lipase pancreática hidrolisa TAG.</li>
    <li>Absorção → reesterificação → quilomícron → linfa → sangue.</li>
    <li>LPL libera ácidos graxos para adipócitos e músculos.</li>
    <li>LDL alto = risco aterosclerótico; HDL faz transporte reverso.</li>
  </ul>
</div>

<details class="quick">
  <summary>Teste rápido: por que os triglicerídeos não são absorvidos diretamente?</summary>
  <div class="quick-body"><p>Porque são moléculas grandes e hidrofóbicas, que não atravessam a membrana intestinal. Precisam ser emulsificados, hidrolisados pela lipase pancreática e absorvidos como ácidos graxos e monoacilglicerol.</p></div>
</details>
`
      },
      {
        id: "q4l2",
        title: "Lipogênese e mobilização",
        minutes: 9,
        intro: "No estado alimentado, o excesso de glicose vira ácido graxo e triglicerídeo. No jejum, as lipases liberam ácidos graxos para o sangue.",
        content: `
<p class="lead">O tecido adiposo é o principal estoque de energia. A lipogênese acontece principalmente no fígado e no adipócito; a lipólise é controlada por hormônios do jejum e do estresse.</p>

<h3>Lipogênese</h3>
<ol>
  <li>Excesso de glicose → piruvato → acetil-CoA.</li>
  <li>No citosol, o acetil-CoA é convertido em <strong>malonil-CoA</strong> pela <strong>acetil-CoA-carboxilase (ACC)</strong>, a enzima limitante. A insulina ativa a ACC.</li>
  <li>A <strong>ácido graxo sintase</strong> usa malonil-CoA para produzir <strong>palmitato (16C)</strong>.</li>
  <li>Os ácidos graxos são esterificados com glicerol-3-fosfato, formando TAG.</li>
  <li>No fígado, os TAG são exportados como <strong>VLDL</strong>; no adipócito, ficam armazenados.</li>
</ol>
<p>A lipogênese consome NADPH (da via das pentoses) e ATP. O fígado lipogênico produz VLDL; o fígado glicogênico armazena glicose como glicogênio.</p>

<h3>Mobilização (lipólise)</h3>
<ol>
  <li>Glucagon (jejum) ou adrenalina (estresse) se ligam ao receptor e elevam cAMP → PKA.</li>
  <li>PKA fosforila e ativa a <strong>lipase sensível ao hormônio (HSL)</strong> e a MGL.</li>
  <li>TAG → ácidos graxos livres + glicerol.</li>
  <li>Os ácidos graxos se ligam à <strong>albumina</strong> e vão aos tecidos; o glicerol vai ao fígado para a gliconeogênese.</li>
</ol>

<h3>Por que a gordura é a melhor reserva?</h3>
<table>
  <thead><tr><th>Critério</th><th>Gordura</th><th>Glicogênio</th></tr></thead>
  <tbody>
    <tr><td>Energia por grama</td><td>~9 kcal/g</td><td>~4 kcal/g</td></tr>
    <tr><td>Água de hidratação</td><td>Não hidratada</td><td>Hidratado (pesa mais)</td></tr>
    <tr><td>Reserva total</td><td>15–20 kg em adulto</td><td>~200 g (limitada)</td></tr>
    <tr><td>Uso</td><td>Longo prazo</td><td>Curto prazo / exercício</td></tr>
  </tbody>
</table>
<div class="callout exam"><strong>Cai na prova</strong><p>Insulina ativa ACC e lipogênese; glucagon e adrenalina ativam lipólise. O glicerol da lipólise é precursor de glicose; os ácidos graxos não geram glicose líquida.</p></div>

<div class="recap">
  <h4>Em 30 segundos</h4>
  <ul>
    <li>ACC é a enzima limitante da lipogênese; insulina a ativa.</li>
    <li>Ácido graxo sintase produz palmitato a partir de malonil-CoA.</li>
    <li>HSL e MGL quebram TAG; glucagon/adrenalina ativam via cAMP-PKA.</li>
    <li>Ácidos graxos circulam ligados à albumina; glicerol vai à gliconeogênese.</li>
  </ul>
</div>

<details class="quick">
  <summary>Teste rápido: por que o fígado exporta VLDL em vez de guardar toda a gordura?</summary>
  <div class="quick-body"><p>Porque o fígado não é um tecido de armazenamento principal. Ele empacota TAG em VLDL e envia para o tecido adiposo e músculos. O excesso de VLDL e LDL no sangue está associado a dislipidemia e aterosclerose.</p></div>
</details>
`
      },
      {
        id: "q4l3",
        title: "Beta-oxidação e corpos cetônicos",
        minutes: 10,
        intro: "A mitocôndria quebra ácidos graxos em acetil-CoA. No jejum prolongado, o fígado converte esse excesso em corpos cetônicos.",
        content: `
<p class="lead">A beta-oxidação é a oxidação mitocondrial de ácidos graxos. Cada volta remove dois carbonos na forma de acetil-CoA e gera NADH e FADH2.</p>

<h3>Ativação e transporte</h3>
<ol>
  <li><strong>Ativação:</strong> no citoplasma, a acil-CoA-sintetase liga o ácido graxo à CoA, formando acil-CoA (consome ATP).</li>
  <li><strong>Transporte:</strong> a carnitina-aciltransferase I (CPT1) liga carnitina ao acil; a translocase leva para a matriz; a CPT2 libera o acil-CoA dentro da mitocôndria.</li>
</ol>

<h3>As quatro etapas de cada volta</h3>
<table>
  <thead><tr><th>Etapa</th><th>Reação</th><th>Produto</th></tr></thead>
  <tbody>
    <tr><td>1. Oxidação</td><td>Formação de dupla ligação</td><td>FADH2</td></tr>
    <tr><td>2. Hidratação</td><td>Adição de água</td><td>β-hidroxiacil-CoA</td></tr>
    <tr><td>3. Oxidação</td><td>Formação de cetona</td><td>NADH</td></tr>
    <tr><td>4. Tiólise</td><td>Clivagem por CoA</td><td>Acetil-CoA + acil-CoA (2C menor)</td></tr>
  </tbody>
</table>
<p>O palmitato (16C) dá <strong>7 voltas</strong> e produz <strong>8 acetil-CoA, 7 FADH2 e 7 NADH</strong>. O rendimento aproximado é ~106 ATP, descontando 2 ATP da ativação.</p>
<p>Ácidos graxos de cadeia ímpar produzem propionil-CoA, que vira succinil-CoA com ajuda de biotina e vitamina B12.</p>

<h3>Corpos cetônicos</h3>
<p>No jejum prolongado, o fígado recebe muitos ácidos graxos, produz muito acetil-CoA e o Ciclo de Krebs não consegue oxidar tudo. O excesso é convertido em <strong>acetoacetato</strong>, <strong>β-hidroxibutirato</strong> e <strong>acetona</strong> (cetogênese mitocondrial).</p>
<ul>
  <li>São solúveis e transportados no sangue.</li>
  <li>O cérebro, o coração e o músculo podem usá-los como combustível, poupando glicose.</li>
  <li>O fígado produz, mas não usa corpos cetônicos (falta de tioforase).</li>
  <li>Excesso em diabetes tipo 1 não tratada → cetoacidose diabética.</li>
</ul>
<div class="callout exam"><strong>Pegadinha</strong><p>Cetogênese não é o mesmo que cetólise. O fígado produz corpos cetônicos, mas não os utiliza; tecidos extra-hepáticos fazem a cetólise. A acetona é volátil e sai pela respiração.</p></div>

<div class="recap">
  <h4>Em 30 segundos</h4>
  <ul>
    <li>Beta-oxidação: 4 etapas por volta; remove 2C como acetil-CoA.</li>
    <li>Palmitato: 7 voltas → 8 acetil-CoA + 7 FADH2 + 7 NADH.</li>
    <li>Carnitina é necessária para entrar na mitocôndria.</li>
    <li>Jejum prolongado → cetogênese hepática; cérebro usa cetônicos.</li>
  </ul>
</div>

<details class="quick">
  <summary>Teste rápido: por que o jejum prolongado aumenta os corpos cetônicos?</summary>
  <div class="quick-body"><p>Porque a lipólise libera muitos ácidos graxos, a beta-oxidação hepática gera acetil-CoA em excesso e o Ciclo de Krebs não dá conta de oxidar tudo. O excedente é desviado para a cetogênese.</p></div>
</details>
`
      }
    ]
  },
  {
    id: "q5",
    track: "bioq",
    title: "Metabolismo de aminoácidos",
    short: "Aminoácidos",
    icon: "i-leaf",
    accent: "plum",
    blurb: "Fontes e digestão, transaminação e desaminação, transporte de nitrogênio, ciclo da ureia, esqueletos carbonados e doenças.",
    lessons: [
      {
        id: "q5l1",
        title: "Aminoácidos: fontes, digestão e transaminação",
        minutes: 9,
        intro: "Não existe reserva de aminoácidos. O excesso é degradado, e o primeiro passo é separar o grupo amino do esqueleto de carbono.",
        content: `
<p class="lead">Aminoácidos são as unidades das proteínas. O corpo não os armazena como reserva: o excesso é rapidamente degradado (cerca de 3/4 vêm da dieta e 1/4 da renovação proteica).</p>

<h3>Essenciais e não essenciais</h3>
<p><strong>Essenciais:</strong> histidina, isoleucina, leucina, lisina, metionina, fenilalanina, treonina, triptofano e valina. <strong>Não essenciais</strong> são sintetizados a partir de intermediários da glicólise, do Ciclo de Krebs ou da via das pentoses, geralmente por transaminação.</p>

<h3>Digestão e absorção</h3>
<ul>
  <li>No estômago, a gastrina estimula HCl e pepsinogênio; o HCl ativa a <strong>pepsina</strong>, principal endopeptidase gástrica.</li>
  <li>No intestino, proteases pancreáticas continuam a hidrólise.</li>
  <li>Aminoácidos são absorvidos pelos enterócitos e chegam ao fígado pela <strong>veia porta</strong>.</li>
</ul>

<h3>Renovação proteica</h3>
<p>Um adulto renova cerca de <strong>400 g de proteínas por dia</strong>. Proteínas velhas ou defeituosas são degradadas por dois sistemas:</p>
<ul>
  <li><strong>Lisossomos:</strong> proteases degradam proteínas de membrana, extracelulares e de vida longa.</li>
  <li><strong>Ubiquitina-proteassoma:</strong> via citoplasmática para proteínas marcadas por ubiquitina.</li>
</ul>

<h3>Transaminação e desaminação</h3>
<p><strong>Transaminação:</strong> o grupo amino de um aminoácido é transferido para o α-cetoglutarato, formando <strong>glutamato</strong>. Enzimas: aminotransferases (transaminases), com cofator <strong>piridoxal-fosfato (PLP, vitamina B6)</strong>. Ocorre no fígado, rins, intestino e músculo; é reversível.</p>
<ul>
  <li><strong>ALT (TGP):</strong> alanina + α-cetoglutarato → piruvato + glutamato.</li>
  <li><strong>AST (TGO):</strong> aspartato + α-cetoglutarato → oxaloacetato + glutamato.</li>
</ul>
<p>ALT e AST elevadas no plasma indicam lesão hepática.</p>
<p><strong>Desaminação oxidativa:</strong> o glutamato perde o grupo amino pela glutamato-desidrogenase (mitocôndria hepática), gerando α-cetoglutarato e NH₃/NH₄⁺. O NH₃ difunde pelas membranas; o NH₄⁺ não difunde e reduz a acidez da urina.</p>

<h3>Transporte do nitrogênio</h3>
<ul>
  <li><strong>Alanina:</strong> do músculo para o fígado (ciclo glicose-alanina).</li>
  <li><strong>Glutamina:</strong> da maioria dos tecidos para o fígado e rins.</li>
</ul>
<div class="callout exam"><strong>Cai na prova</strong><p>Transaminação não libera amônia: apenas transfere o grupo amino para o glutamato. A liberação de NH₃ ocorre na desaminação oxidativa do glutamato. O fígado é o principal órgão do ciclo da ureia.</p></div>

<div class="recap">
  <h4>Em 30 segundos</h4>
  <ul>
    <li>9 aminoácidos essenciais; não há reserva de aminoácidos.</li>
    <li>Pepsina é a endopeptidase gástrica; absorção pela veia porta.</li>
    <li>Transaminação: ALT/AST, PLP/B6, forma glutamato.</li>
    <li>Desaminação oxidativa: glutamato → α-cetoglutarato + NH₃.</li>
  </ul>
</div>

<details class="quick">
  <summary>Teste rápido: qual exame diferencia lesão hepática e a função do PLP?</summary>
  <div class="quick-body"><p>ALT e AST são as transaminases usadas na avaliação hepática; ALT é mais específica do fígado. O PLP (vitamina B6) é o cofator que aceita e transfere o grupo amino nas transaminações.</p></div>
</details>
`
      },
      {
        id: "q5l2",
        title: "Ciclo da ureia",
        minutes: 9,
        intro: "A amônia é neurotóxica. O fígado a converte em ureia, que é solúvel e excretada pelos rins.",
        content: `
<p class="lead">O nitrogênio dos aminoácidos precisa ser eliminado. O fígado faz isso pelo <strong>ciclo da ureia</strong>, que combina amônia com bicarbonato e aspartato.</p>

<h3>Etapas</h3>
<ol>
  <li><strong>Carbamoil-fosfato sintetase I (CPS I):</strong> na mitocôndria, NH₃ + HCO₃⁻ + 2 ATP → carbamoil-fosfato. É a etapa reguladora.</li>
  <li><strong>Ornitina transcarbamoilase:</strong> carbamoil-fosfato + ornitina → citrulina.</li>
  <li><strong>Citrulina</strong> sai da mitocôndria para o citosol.</li>
  <li><strong>Argininossuccinato sintetase:</strong> citrulina + aspartato → argininossuccinato.</li>
  <li><strong>Argininossuccinato liase:</strong> → arginina + fumarato.</li>
  <li><strong>Arginase:</strong> arginina → ureia + ornitina. A ornitina volta à mitocôndria.</li>
</ol>
<p>O fumarato pode entrar no Ciclo de Krebs, conectando os dois ciclos.</p>

<h3>Regulação</h3>
<ul>
  <li><strong>Feed-forward:</strong> quanto maior a degradação de aminoácidos, maior a velocidade do ciclo.</li>
  <li><strong>CPS I</strong> é ativada alostericamente por <strong>N-acetil-glutamato (NAG)</strong>, formado em refeições ricas em proteínas.</li>
  <li>Dieta rica em proteínas e jejum aumentam a expressão das enzimas do ciclo.</li>
</ul>

<h3>Jejum e excreção de ureia</h3>
<p>No jejum, o fígado mantém a glicemia por glicogenólise e gliconeogênese. Os aminoácidos musculares são a maior fonte de carbono para a gliconeogênese; isso aumenta a produção de ureia. Com o jejum prolongado, o cérebro passa a usar corpos cetônicos, poupa glicose e reduz a gliconeogênese — a ureia urinária tende a cair.</p>
<p>Na dieta rica em proteína, a ureia urinária aumenta. Na insuficiência renal, a ureia se acumula no sangue (azotemia) e pode causar sintomas urêmicos.</p>

<div class="callout exam"><strong>Pegadinha</strong><p>O ciclo da ureia ocorre no fígado (mitocôndria + citosol), não no rim. O rim apenas excreta a ureia. A amônia livre é neurotóxica; a ureia é a forma segura de transporte e excreção.</p></div>

<div class="recap">
  <h4>Em 30 segundos</h4>
  <ul>
    <li>CPS I é a enzima reguladora; NAG ativa.</li>
    <li>Ornitina entra e sai; citrulina e arginina são intermediários.</li>
    <li>Ureia = 2 N (amônia + aspartato) + CO₂.</li>
    <li>Jejum prolongado com cetose reduz a ureia; dieta hiperproteica aumenta.</li>
  </ul>
</div>

<details class="quick">
  <summary>Teste rápido: por que a amônia é mais tóxica que a ureia?</summary>
  <div class="quick-body"><p>Porque a amônia (NH₃/NH₄⁺) altera o pH e interfere no metabolismo cerebral, causando edema e encefalopatia. A ureia é neutra, solúvel e pode ser transportada em concentrações maiores até ser excretada pelos rins.</p></div>
</details>
`
      },
      {
        id: "q5l3",
        title: "Esqueletos carbonados e doenças",
        minutes: 9,
        intro: "Depois de perder o nitrogênio, cada aminoácido vira um cetoácido que entra no metabolismo energético. Alguns são glicogênicos, outros cetogênicos.",
        content: `
<p class="lead">O catabolismo dos aminoácidos tem duas metades: remover o nitrogênio (ciclo da ureia) e oxidar o esqueleto de carbono (ciclo de Krebs, gliconeogênese ou cetogênese).</p>

<h3>Glicogênicos x cetogênicos</h3>
<table>
  <thead><tr><th>Grupo</th><th>Destino</th><th>Exemplos</th></tr></thead>
  <tbody>
    <tr><td>Glicogênicos</td><td>Produzem piruvato ou intermediários do CK → glicose</td><td>Alanina, glutamato, aspartato, serina, glicina</td></tr>
    <tr><td>Cetogênicos</td><td>Produzem acetil-CoA ou acetoacetato → corpos cetônicos</td><td>Leucina e lisina (exclusivamente)</td></tr>
    <tr><td>Mistos</td><td>Produzem os dois</td><td>Isoleucina, fenilalanina, tirosina, triptofano</td></tr>
  </tbody>
</table>
<p>Os esqueletos entram no CK em pontos diferentes: piruvato, acetil-CoA, α-cetoglutarato, succinil-CoA, fumarato ou oxaloacetato. Isso explica por que o catabolismo de aminoácidos alimenta a gliconeogênese e o CK.</p>

<h3>Estado alimentado x jejum</h3>
<ul>
  <li><strong>Alimentado:</strong> aminoácidos da dieta chegam pelo portal; o fígado sintetiza proteínas e desvia o excesso para lipogênese/glicogênese.</li>
  <li><strong>Jejum:</strong> proteólise muscular libera aminoácidos; alanina e glutamina levam nitrogênio ao fígado; o carbono vira glicose; o nitrogênio vira ureia.</li>
</ul>

<h3>Doenças do metabolismo de aminoácidos</h3>
<table>
  <thead><tr><th>Doença</th><th>Defeito</th><th>Marca</th></tr></thead>
  <tbody>
    <tr><td>Fenilcetonúria (PKU)</td><td>Fenilalanina-hidroxilase</td><td>Fenilalanina alta, deficiência intelectual se não tratar</td></tr>
    <tr><td>Doença da urina em xarope de bordo</td><td>Desidrogenase dos α-cetoácidos de cadeia ramificada</td><td>Leucina, isoleucina e valina altas; odor adocicado</td></tr>
    <tr><td>Alcaptonúria</td><td>Homogentisato oxidase</td><td>Urina escura, artropatia</td></tr>
    <tr><td>Homocistinúria</td><td>Cistationina-β-sintase</td><td>Homocisteína alta, risco vascular</td></tr>
    <tr><td>Distúrbios do ciclo da ureia</td><td>CPS I, OTC, AS, AL</td><td>Hiperamonemia, vômitos, letargia</td></tr>
  </tbody>
</table>
<div class="callout exam"><strong>Integração</strong><p>Leucina e lisina são exclusivamente cetogênicos: não geram glicose. Por isso, em jejum prolongado, a gliconeogênese depende dos aminoácidos glicogênicos e do glicerol, não da gordura.</p></div>

<div class="recap">
  <h4>Em 30 segundos</h4>
  <ul>
    <li>Remover N → ureia; oxidar o carbono → CK/gliconeogênese/cetogênese.</li>
    <li>Leucina e lisina: só cetogênicos.</li>
    <li>Jejum: alanina/glutamina levam N ao fígado; ureia sobe.</li>
    <li>PKU = fenilalanina-hidroxilase; xarope de bordo = BCKDH.</li>
  </ul>
</div>

<details class="quick">
  <summary>Teste rápido: por que a leucina não consegue produzir glicose?</summary>
  <div class="quick-body"><p>Porque seu esqueleto de carbono é convertido em acetil-CoA/acetoacetato, e o acetil-CoA não é precursor líquido de glicose. Ela é cetogênica, não glicogênica.</p></div>
</details>
`
      }
    ]
  },
  {
    id: "q6",
    track: "bioq",
    title: "Integração metabólica: alimentado e jejum",
    short: "Alimentado e jejum",
    icon: "i-clock",
    accent: "plum",
    blurb: "Hormônios, estados metabólicos, fases do jejum, ciclo glicose-alanina, Cori, cetose e raciocínio de prova.",
    lessons: [
      {
        id: "q6l1",
        title: "Estados metabólicos e hormônios",
        minutes: 9,
        intro: "O corpo alterna entre armazenar e mobilizar. Insulina, glucagon, adrenalina e cortisol definem o rumo das vias.",
        content: `
<p class="lead">O metabolismo é integrado por hormônios e pelo estado energético das células. O fígado é o centro de distribuição; músculo, tecido adiposo e cérebro têm papéis especializados.</p>

<h3>Estado alimentado (absortivo)</h3>
<ul>
  <li><strong>Insulina alta</strong>, glucagon baixo.</li>
  <li>Glicose entra nas células; glicólise e glicogênese aumentam.</li>
  <li>Excesso de glicose vira gordura (lipogênese) no fígado e no adipócito.</li>
  <li>Proteínas são sintetizadas; aminoácidos entram nas células.</li>
  <li>TAG da dieta são armazenados via quilomícrons e LPL.</li>
</ul>

<h3>Jejum (pós-absortivo)</h3>
<ul>
  <li><strong>Glucagon alto</strong> (fígado), adrenalina e cortisol.</li>
  <li>Glicogenólise hepática → glicemia.</li>
  <li>Gliconeogênese (lactato, glicerol, aminoácidos).</li>
  <li>Lipólise → ácidos graxos → beta-oxidação; cetogênese hepática.</li>
  <li>Proteólise muscular fornece aminoácidos, mas é poupada pela cetose.</li>
</ul>

<h3>Papel dos tecidos</h3>
<table>
  <thead><tr><th>Tecido</th><th>Alimentado</th><th>Jejum</th></tr></thead>
  <tbody>
    <tr><td>Fígado</td><td>Glicogênese, lipogênese, síntese proteica</td><td>Glicogenólise, gliconeogênese, cetogênese, ureia</td></tr>
    <tr><td>Músculo</td><td>Glicogênese, síntese proteica</td><td>Proteólise, uso de ácidos graxos e corpos cetônicos</td></tr>
    <tr><td>Adiposo</td><td>Armazena TAG (LPL)</td><td>Lipólise (HSL), libera ácidos graxos e glicerol</td></tr>
    <tr><td>Cérebro</td><td>Glicose</td><td>Glicose e, no jejum prolongado, corpos cetônicos</td></tr>
  </tbody>
</table>

<h3>Energia celular</h3>
<p>ATP/ADP e NADH/NAD⁺ sinalizam o estado energético. ATP alto inibe vias produtoras; ADP alto ativa glicólise, CK e fosforilação oxidativa. O ATP é reciclado continuamente e não é reserva de longo prazo.</p>
<div class="callout exam"><strong>Cai na prova</strong><p>Insulina = armazenamento. Glucagon = mobilização hepática. Adrenalina = mobilização rápida (músculo). Cortisol = proteólise e gliconeogênese no estresse prolongado.</p></div>

<div class="recap">
  <h4>Em 30 segundos</h4>
  <ul>
    <li>Alimentado: insulina, glicogênese, lipogênese, síntese proteica.</li>
    <li>Jejum: glucagon, glicogenólise, gliconeogênese, lipólise, cetogênese.</li>
    <li>Fígado mantém glicemia; músculo usa localmente; adiposo estoca.</li>
    <li>ATP/ADP e NADH/NAD⁺ regulam as vias.</li>
  </ul>
</div>

<details class="quick">
  <summary>Teste rápido: por que a insulina é anabólica?</summary>
  <div class="quick-body"><p>Porque estimula entrada de glicose, glicogênese, lipogênese e síntese proteica, além de inibir glicogenólise e lipólise. Ela favorece o armazenamento de energia no estado alimentado.</p></div>
</details>
`
      },
      {
        id: "q6l2",
        title: "Fases do jejum e ciclo glicose-alanina",
        minutes: 9,
        intro: "O que o corpo usa em 4, 12, 18 e 72 horas de jejum — e como o músculo e o fígado cooperam para manter a glicose.",
        content: `
<p class="lead">O jejum não é um estado único: as fontes de energia mudam com o tempo. Entender a cronologia evita confundir glicogenólise, gliconeogênese e cetogênese.</p>

<h3>Linha do tempo</h3>
<table>
  <thead><tr><th>Fase</th><th>Tempo</th><th>Principal fonte de glicose/energia</th></tr></thead>
  <tbody>
    <tr><td>Absortiva</td><td>0–4 h</td><td>Glicose da dieta; insulina alta</td></tr>
    <tr><td>Pós-absortiva inicial</td><td>4–12/18 h</td><td>Glicogenólise hepática; lipólise crescente</td></tr>
    <tr><td>Jejum intermediário</td><td>após ~18 h</td><td>Gliconeogênese (lactato, glicerol, aminoácidos)</td></tr>
    <tr><td>Jejum prolongado</td><td>2–3 dias ou mais</td><td>Cetogênese; cérebro usa corpos cetônicos; proteína poupada</td></tr>
  </tbody>
</table>

<h3>Ciclo de Cori</h3>
<p>No exercício, o músculo produz lactato pela glicólise anaeróbia. O lactato vai ao fígado, é convertido em piruvato e depois em glicose pela gliconeogênese. A glicose volta ao músculo. Isso recicla o carbono e evita acidose excessiva.</p>

<h3>Ciclo glicose-alanina</h3>
<p>No músculo, o piruvato recebe o grupo amino de aminoácidos (transaminação) e forma <strong>alanina</strong>. A alanina vai ao fígado, onde é transaminada de volta a piruvato; o nitrogênio entra no ciclo da ureia e o piruvato vira glicose. A glicose retorna ao músculo.</p>
<p>Esse ciclo transporta nitrogênio de forma segura e fornece carbono para a gliconeogênese.</p>

<h3>Cetose e poupança de proteína</h3>
<p>No jejum prolongado, os corpos cetônicos substituem parte da glicose usada pelo cérebro. Com menos necessidade de gliconeogênese, o corpo degrada menos proteína muscular. Por isso a ureia urinária cai com o tempo de jejum, apesar de a proteólise continuar em nível basal.</p>
<div class="callout exam"><strong>Sequência para decorar</strong><p>Glicogênio → gliconeogênese → cetogênese. O fígado é o único que exporta glicose em quantidade relevante; o músculo não tem G6Pase; o cérebro troca glicose por cetônicos no jejum prolongado.</p></div>

<div class="recap">
  <h4>Em 30 segundos</h4>
  <ul>
    <li>0–4 h: glicose da dieta; 4–18 h: glicogenólise; &gt;18 h: gliconeogênese.</li>
    <li>Cori: lactato → glicose; alanina: N + carbono → fígado.</li>
    <li>Cetose poupa proteína e reduz ureia.</li>
    <li>Músculo não exporta glicose; fígado sim.</li>
  </ul>
</div>

<details class="quick">
  <summary>Teste rápido: por que a ureia urinária cai no jejum muito prolongado?</summary>
  <div class="quick-body"><p>Porque o cérebro passa a usar corpos cetônicos, reduzindo a necessidade de gliconeogênese a partir de aminoácidos. Com menos proteólise para gliconeogênese, menos nitrogênio é convertido em ureia.</p></div>
</details>
`
      },
      {
        id: "q6l3",
        title: "Integração na prova: comparativos e casos",
        minutes: 8,
        intro: "Um resumo cruzado para resolver as questões de integração: quem está ligado, quem está desligado e por quê.",
        content: `
<p class="lead">As questões de integração costumam pedir uma via, um hormônio ou um tecido. Use as tabelas abaixo para raciocinar por eliminação.</p>

<h3>Vias ligadas/desligadas</h3>
<table>
  <thead><tr><th>Via</th><th>Alimentado</th><th>Jejum</th></tr></thead>
  <tbody>
    <tr><td>Glicólise</td><td>Alta</td><td>Baixa no fígado; mantida em tecidos que dependem de glicose</td></tr>
    <tr><td>Glicogênese</td><td>Alta</td><td>Baixa</td></tr>
    <tr><td>Glicogenólise</td><td>Baixa</td><td>Alta</td></tr>
    <tr><td>Gliconeogênese</td><td>Baixa</td><td>Alta</td></tr>
    <tr><td>Lipogênese</td><td>Alta</td><td>Baixa</td></tr>
    <tr><td>Lipólise</td><td>Baixa</td><td>Alta</td></tr>
    <tr><td>Beta-oxidação</td><td>Baixa</td><td>Alta</td></tr>
    <tr><td>Cetogênese</td><td>Baixa</td><td>Alta (fígado)</td></tr>
    <tr><td>Ciclo da ureia</td><td>Moderado (dieta proteica)</td><td>Alto</td></tr>
  </tbody>
</table>

<h3>Casos clássicos</h3>
<ul>
  <li><strong>Por que o fígado não consegue usar toda a gordura no jejum?</strong> Porque o acetil-CoA excede a capacidade do CK; o excesso vira corpos cetônicos.</li>
  <li><strong>Por que a glicemia cai no jejum prolongado?</strong> Porque o glicogênio acaba e a gliconeogênese depende de aminoácidos e glicerol; a gordura não gera glicose líquida.</li>
  <li><strong>Por que o alcoolista desnutrido tem hipoglicemia?</strong> Reservas de glicogênio baixas, ingestão proteica ruim e etanol inibindo a gliconeogênese.</li>
  <li><strong>Por que o diabético tipo 1 não tratado faz cetoacidose?</strong> Falta de insulina → lipólise e beta-oxidação descontroladas → cetogênese excessiva → acidose.</li>
  <li><strong>Por que o exercício intenso aumenta o lactato?</strong> Glicólise anaeróbia acima da capacidade oxidativa; o lactato vai ao fígado (Cori).</li>
</ul>

<h3>Erros que zeram questão</h3>
<ul>
  <li>Dizer que o músculo libera glicose para o sangue: <strong>não</strong> (falta G6Pase).</li>
  <li>Dizer que a gordura vira glicose: <strong>não</strong> (acetil-CoA não é precursor líquido).</li>
  <li>Dizer que o CK consome O₂ diretamente: <strong>não</strong>; quem consome é a cadeia respiratória.</li>
  <li>Dizer que o ciclo da ureia ocorre no rim: <strong>não</strong>; ocorre no fígado.</li>
  <li>Dizer que insulina estimula lipólise: <strong>não</strong>; ela inibe.</li>
</ul>

<div class="callout exam"><strong>Regra de ouro</strong><p>Estado alimentado = insulina = armazenar. Jejum = glucagon/adrenalina = mobilizar. Jejum prolongado = cetose = poupar proteína. Se a questão citar um tecido, lembre-se do papel dele antes de escolher a via.</p></div>

<div class="recap">
  <h4>Em 30 segundos</h4>
  <ul>
    <li>Alimentado: glicogênese, lipogênese, síntese proteica.</li>
    <li>Jejum: glicogenólise, gliconeogênese, lipólise, cetogênese.</li>
    <li>Fígado exporta glicose; músculo não; cérebro usa cetônicos no jejum.</li>
    <li>Gordura não vira glicose; acetil-CoA não é glicogênico.</li>
  </ul>
</div>

<details class="quick">
  <summary>Teste rápido: quem mantém a glicemia no jejum de 20 horas?</summary>
  <div class="quick-body"><p>Principalmente a gliconeogênese hepática, usando lactato, glicerol e aminoácidos, porque os estoques de glicogênio já estão baixos. A lipólise e a cetogênese também estão ativas.</p></div>
</details>
`
      }
    ]
  }
]);
