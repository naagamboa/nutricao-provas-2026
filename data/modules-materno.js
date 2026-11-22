window.NUT_MODULES = (window.NUT_MODULES || []).concat([
  {
    id: "m1",
    track: "materno",
    title: "Lactente: antropometria e necessidades",
    short: "Lactente",
    icon: "i-baby",
    accent: "berry",
    blurb: "Técnica de peso e comprimento, indicadores, RN a termo e prematuro, macro e micronutrientes do lactente.",
    lessons: [
      {
        id: "m1l1",
        title: "Peso e comprimento do lactente: técnica e indicadores",
        minutes: 10,
        intro: "A prova cobra técnica, interpretação e escolha do indicador. Não basta saber medir: é preciso saber o que cada medida significa.",
        content: `
<p class="lead">No lactente, a antropometria é a principal ferramenta de acompanhamento do crescimento. A medida só tem valor se for feita com técnica padronizada e interpretada na curva correta.</p>

<h3>Técnica de peso</h3>
<ul>
  <li>Balança calibrada, em superfície plana e firme.</li>
  <li>Bebê sem roupa e sem fralda, ou com o mínimo possível; registrar sempre a mesma condição.</li>
  <li>Preferir o mesmo horário e a mesma balança para comparar medidas.</li>
  <li>Se não houver balança pediátrica, pesar o adulto com o bebê e descontar o peso do adulto.</li>
  <li>Registrar em kg com precisão adequada e plotar na curva.</li>
</ul>

<h3>Técnica de comprimento</h3>
<ul>
  <li>Menores de 2 anos: comprimento em <strong>decúbito dorsal</strong>, com infantômetro.</li>
  <li>Dois avaliadores: um segura a cabeça junto à placa fixa, com o olhar para cima (plano de Frankfurt); o outro alinha o corpo e estende as pernas, com os pés em ângulo reto.</li>
  <li>Medir da cabeça aos calcanhares, sem roupa ou com roupa leve, registrando em cm.</li>
  <li>A partir de 2 anos: estatura em pé, em estadiômetro, com cabeça no plano de Frankfurt, calcanhares juntos e olhos à frente.</li>
</ul>
<div class="callout exam"><strong>Erro clássico</strong><p>Medir criança menor de 2 anos em pé ou maior de 2 anos deitada muda o resultado e pode gerar diagnóstico falso. A técnica é parte da resposta.</p></div>

<h3>Indicadores e significados</h3>
<table>
  <thead><tr><th>Indicador</th><th>O que avalia</th><th>Interpretação</th></tr></thead>
  <tbody>
    <tr><td><strong>Peso/idade</strong></td><td>Peso em relação à idade.</td><td>Baixo peso para a idade; não diferencia agudo de crônico.</td></tr>
    <tr><td><strong>Comprimento/idade</strong></td><td>Estatura em relação à idade.</td><td>Baixa estatura: sugere desnutrição crônica ou outras causas.</td></tr>
    <tr><td><strong>Peso/comprimento</strong></td><td>Proporção peso-estatura.</td><td>Magreza/emagrecimento ou sobrepeso/obesidade.</td></tr>
    <tr><td><strong>IMC/idade</strong></td><td>Relação peso/estatura ajustada pela idade.</td><td>Triagem de sobrepeso/obesidade e magreza.</td></tr>
    <tr><td><strong>Perímetro cefálico</strong></td><td>Crescimento cerebral.</td><td>Microcefalia/macrocefalia; acompanhar até 3 anos.</td></tr>
  </tbody>
</table>
<p>Use as curvas da OMS 2006 para 0–5 anos e classifique por z-escore. A interpretação é sempre conjunta: tendência da curva, clínica, alimentação e contexto.</p>

<h3>Como responder em caso clínico</h3>
<ol>
  <li>Confira a técnica e a idade corrigida (se prematuro).</li>
  <li>Calcule o indicador e localize o z-escore.</li>
  <li>Veja a tendência: uma curva que cai pode ser mais importante que um ponto isolado.</li>
  <li>Relacione com ingestão, doenças, condições sociais e marcos do desenvolvimento.</li>
</ol>

<div class="recap">
  <h4>Em 30 segundos</h4>
  <ul>
    <li>Peso: balança calibrada, sem roupa, mesma condição.</li>
    <li>&lt; 2 anos: comprimento deitado; ≥ 2 anos: estatura em pé.</li>
    <li>Peso/idade, comprimento/idade, peso/comprimento, IMC/idade e PC.</li>
    <li>Indicador isolado não é diagnóstico: veja curva, clínica e contexto.</li>
  </ul>
</div>

<details class="quick">
  <summary>Teste rápido: por que o peso/idade não diferencia desnutrição aguda de crônica?</summary>
  <div class="quick-body"><p>Porque ele só compara peso e idade. A criança pode ter baixo peso por emagrecimento recente ou por baixa estatura crônica. Para diferenciar, use peso/comprimento e comprimento/idade.</p></div>
</details>
`
      },
      {
        id: "m1l2",
        title: "RN a termo e prematuro: como avaliar o crescimento",
        minutes: 10,
        intro: "Prematuro não é “bebê pequeno”: idade corrigida, curvas específicas e classificação por idade gestacional mudam toda a leitura.",
        content: `
<p class="lead">A avaliação do recém-nascido combina peso, comprimento, perímetro cefálico, idade gestacional e adequação do peso para a idade gestacional. No prematuro, acrescenta-se a idade corrigida.</p>

<h3>Classificação por idade gestacional</h3>
<ul>
  <li><strong>A termo:</strong> 37 a 42 semanas.</li>
  <li><strong>Pré-termo:</strong> &lt; 37 semanas. Pode ser subdividido em tardio (34–36+6), muito prematuro (28–31+6) e extremo (&lt; 28).</li>
  <li><strong>Pós-termo:</strong> &gt; 42 semanas.</li>
</ul>

<h3>Classificação por peso ao nascer</h3>
<table>
  <thead><tr><th>Classificação</th><th>Peso ao nascer</th></tr></thead>
  <tbody>
    <tr><td>Baixo peso</td><td>&lt; 2.500 g</td></tr>
    <tr><td>Muito baixo peso</td><td>&lt; 1.500 g</td></tr>
    <tr><td>Extremamente baixo peso</td><td>&lt; 1.000 g</td></tr>
    <tr><td>Macrossomia</td><td>&gt; 4.000 g</td></tr>
  </tbody>
</table>

<h3>Adequação para a idade gestacional</h3>
<p>Compara o peso ao nascer com a referência para a idade gestacional (curvas de Fenton/Intergrowth):</p>
<ul>
  <li><strong>AIG:</strong> adequado para a idade gestacional.</li>
  <li><strong>PIG:</strong> pequeno para a idade gestacional.</li>
  <li><strong>GIG:</strong> grande para a idade gestacional.</li>
</ul>
<p>Um bebê pode ser prematuro e AIG, ou a termo e PIG. São classificações diferentes: uma usa a idade gestacional; a outra compara peso e idade gestacional.</p>

<h3>Idade corrigida</h3>
<p>No prematuro, a idade cronológica pode subestimar o desenvolvimento. A <strong>idade corrigida</strong> desconta as semanas que faltaram para o termo:</p>
<p class="formula">Idade corrigida = idade cronológica − (40 − idade gestacional ao nascer)</p>
<p>Usa-se, em geral, até 24 meses (alguns serviços até 36 meses). A correção é essencial para interpretar crescimento, desenvolvimento e curvas.</p>

<h3>Como acompanhar o prematuro</h3>
<ul>
  <li>Usar curva específica para prematuro (Fenton/Intergrowth) no período neonatal e acompanhar a transição para as curvas da OMS com idade corrigida.</li>
  <li>Avaliar peso, comprimento e perímetro cefálico em conjunto.</li>
  <li>Observar velocidade de crescimento e sinais de restrição de crescimento extrauterino.</li>
  <li>Considerar fortificação do leite humano e suplementação conforme protocolo.</li>
  <li>Atentar para anemia, deficiência de ferro, vitamina D, cálcio e fósforo.</li>
</ul>
<div class="callout exam"><strong>Cai na prova</strong><p>Não classifique prematuro pela curva de termo sem corrigir a idade. E não confunda “baixo peso ao nascer” com “PIG”: o primeiro é um valor absoluto; o segundo é uma relação com a idade gestacional.</p></div>

<h3>Situação-problema</h3>
<div class="callout exam"><strong>Caso</strong><p>RN de 32 semanas, peso 1.500 g, com 3 meses de vida cronológica. A idade corrigida é cerca de 1 mês. A avaliação deve usar a curva e a idade corrigidas, além de considerar a classificação ao nascer e a velocidade de crescimento.</p></div>

<div class="recap">
  <h4>Em 30 segundos</h4>
  <ul>
    <li>Pré-termo &lt; 37 semanas; a termo 37–42.</li>
    <li>Baixo peso &lt; 2.500 g; muito baixo &lt; 1.500; extremo &lt; 1.000.</li>
    <li>AIG/PIG/GIG comparam peso e idade gestacional.</li>
    <li>Prematuro: idade corrigida e curva específica.</li>
  </ul>
</div>

<details class="quick">
  <summary>Teste rápido: um prematuro de 32 semanas com 4 meses cronológicos tem quantos meses corrigidos?</summary>
  <div class="quick-body"><p>Cerca de 2 meses: 4 meses − 2 meses (40−32 semanas = 8 semanas ≈ 2 meses). Use a idade corrigida para avaliar crescimento e desenvolvimento.</p></div>
</details>
`
      },
      {
        id: "m1l3",
        title: "Recomendações nutricionais do lactente: o que é de risco e o que suplementar",
        minutes: 9,
        intro: "A professora pediu sem números decorados: entenda por que ferro, vitamina D, vitamina A e outros nutrientes são críticos e quando suplementar.",
        content: `
<p class="lead">O lactente cresce rápido e tem reservas limitadas. A alimentação deve fornecer energia, proteína, gordura e micronutrientes — com atenção especial aos nutrientes de risco.</p>

<h3>Macronutrientes</h3>
<ul>
  <li><strong>Energia:</strong> a necessidade por kg é alta e diminui com a idade; o lactente regula a ingestão em livre demanda.</li>
  <li><strong>Proteína:</strong> essencial para crescimento; excesso sobrecarrega o rim e não é desejável.</li>
  <li><strong>Gordura:</strong> fundamental para energia, desenvolvimento cerebral e absorção de vitaminas lipossolúveis.</li>
  <li><strong>Carboidrato:</strong> fonte de energia; a lactose é o principal carboidrato do leite materno.</li>
</ul>
<p>Não é necessário decorar valores: entenda que a densidade nutricional e a qualidade da gordura importam, e que a fórmula deve ser preparada na diluição correta.</p>

<h3>Micronutrientes de risco</h3>
<table>
  <thead><tr><th>Nutriente</th><th>Por que é crítico</th><th>Como garantir</th></tr></thead>
  <tbody>
    <tr><td><strong>Ferro</strong></td><td>Reservas se esgotam nos primeiros meses; risco de anemia e atraso no desenvolvimento.</td><td>Leite materno, alimentação complementar com carnes/feijão e suplementação conforme protocolo.</td></tr>
    <tr><td><strong>Vitamina D</strong></td><td>Pouca exposição solar e baixo teor no leite; risco ósseo.</td><td>Suplementação desde o nascimento, conforme protocolo.</td></tr>
    <tr><td><strong>Vitamina A</strong></td><td>Imunidade, visão e crescimento.</td><td>Alimentação variada e suplementação em programas de saúde pública.</td></tr>
    <tr><td><strong>Zinco</strong></td><td>Crescimento, imunidade e cicatrização.</td><td>Carnes, ovos, leguminosas e cereais; atenção em dietas restritivas.</td></tr>
    <tr><td><strong>Iodo</strong></td><td>Tireoide e neurodesenvolvimento.</td><td>Sal iodado e alimentos variados; suplementação conforme gestação/lactação.</td></tr>
    <tr><td><strong>Vitamina B12</strong></td><td>Neurológico e hematológico; risco em mães veganas sem suplementação.</td><td>Avaliar dieta materna e suplementar quando indicado.</td></tr>
    <tr><td><strong>Cálcio e fósforo</strong></td><td>Mineralização óssea, especialmente no prematuro.</td><td>Leite materno/fórmula e fortificação no prematuro.</td></tr>
  </tbody>
</table>
<div class="callout exam"><strong>Sem decorar números</strong><p>O que cai é a lógica: quem tem reserva baixa, quem cresce rápido, quem tem dieta restritiva e quem é prematuro precisa de atenção. A dose e o tempo seguem o protocolo do serviço.</p></div>

<h3>Suplementação: o que saber</h3>
<ul>
  <li><strong>Vitamina D:</strong> suplementação desde o nascimento, inclusive em aleitamento exclusivo.</li>
  <li><strong>Ferro:</strong> a partir dos 6 meses na criança a termo; no prematuro/baixo peso, o início e a dose seguem protocolo específico.</li>
  <li><strong>Vitamina A:</strong> programa de suplementação em faixas prioritárias.</li>
  <li><strong>Prematuro:</strong> fortificação do leite humano e atenção a cálcio, fósforo, ferro e vitamina D.</li>
  <li><strong>Veganos:</strong> atenção à B12, ferro, zinco, cálcio e ômega-3.</li>
</ul>

<h3>O que evitar</h3>
<ul>
  <li>Mel antes de 1 ano (botulismo).</li>
  <li>Leite de vaca como bebida principal antes de 1 ano.</li>
  <li>Açúcar e ultraprocessados; sal mínimo.</li>
  <li>Diluição inadequada de fórmula e introdução precoce de outros alimentos.</li>
</ul>

<div class="recap">
  <h4>Em 30 segundos</h4>
  <ul>
    <li>Lactente: alta necessidade por kg; gordura é essencial.</li>
    <li>Risco: ferro, vitamina D, vitamina A, zinco, iodo, B12; prematuro: cálcio/fósforo.</li>
    <li>Suplementar conforme protocolo, sem decorar doses.</li>
    <li>Evitar mel e leite de vaca antes de 1 ano; sem açúcar/UPF.</li>
  </ul>
</div>

<details class="quick">
  <summary>Teste rápido: por que o ferro é um nutriente de risco no lactente?</summary>
  <div class="quick-body"><p>Porque as reservas fetais se esgotam nos primeiros meses e a demanda aumenta com o crescimento. Sem alimentos ricos em ferro e/ou suplementação, o risco de anemia é alto.</p></div>
</details>
`
      }
    ]
  },
  {
    id: "m2",
    track: "materno",
    title: "Pré-escolar e escolar",
    short: "Pré-escolar e escolar",
    icon: "i-chart",
    accent: "berry",
    blurb: "Comportamento alimentar, crescimento, PNAE, alimentação escolar, lanche e necessidades do escolar.",
    lessons: [
      {
        id: "m2l1",
        title: "Pré-escolar: desenvolvimento, comportamento e avaliação",
        minutes: 9,
        intro: "O apetite cai, a autonomia cresce e a neofobia aparece. A avaliação precisa diferenciar fase normal de risco nutricional.",
        content: `
<p class="lead">Entre 2 e 6 anos, o crescimento desacelera e a criança ganha autonomia. O comportamento alimentar oscila: neofobia, preferências, recusa e seletividade são comuns — mas não podem ser confundidos com desnutrição.</p>

<h3>Desenvolvimento e comportamento alimentar</h3>
<ul>
  <li><strong>Desaceleração do crescimento:</strong> o apetite pode diminuir naturalmente.</li>
  <li><strong>Neofobia:</strong> medo/recusa de alimentos novos; comum e transitória.</li>
  <li><strong>Autonomia:</strong> quer escolher, comer sozinha e testar limites.</li>
  <li><strong>Imitação:</strong> aprende com o que vê na família e na escola.</li>
  <li><strong>Regulação da saciedade:</strong> a criança pequena ainda regula bem; pressão e distração atrapalham.</li>
</ul>
<div class="callout tip"><strong>Manejo que funciona</strong><p>Exposição repetida sem pressão, variedade, refeições em família, ambiente sem telas e respeito à saciedade. Não usar comida como prêmio, castigo ou consolo.</p></div>

<h3>Avaliação nutricional e crescimento</h3>
<ul>
  <li>Peso, estatura, IMC/idade, estatura/idade e peso/idade.</li>
  <li>Curvas da OMS 2006 (0–5 anos) e 2007 (5–19).</li>
  <li>Velocidade de crescimento e tendência da curva.</li>
  <li>Consumo alimentar, seletividade, hábitos familiares e atividade física.</li>
  <li>Exame físico: palidez, cárie, constipação, sinais de carência.</li>
</ul>
<p>Não se interpreta uma medida isolada. Uma criança com IMC/idade adequado pode ter dieta pobre em ferro; uma criança com apetite pequeno pode estar crescendo bem.</p>

<h3>Nutrientes prioritários</h3>
<table>
  <thead><tr><th>Nutriente</th><th>Por que importa</th><th>Fontes</th></tr></thead>
  <tbody>
    <tr><td>Ferro</td><td>Anemia e desenvolvimento cognitivo.</td><td>Carnes, fígado, feijão, lentilha, gema.</td></tr>
    <tr><td>Zinco</td><td>Crescimento e imunidade.</td><td>Carnes, ovos, leguminosas, castanhas.</td></tr>
    <tr><td>Cálcio</td><td>Ossos e dentes.</td><td>Leite, iogurte, queijo, tofu, sardinha.</td></tr>
    <tr><td>Vitamina A</td><td>Visão e imunidade.</td><td>Fígado, ovos, leite, frutas/vegetais alaranjados.</td></tr>
    <tr><td>Vitamina D</td><td>Saúde óssea.</td><td>Sol, peixes, ovos, fortificados.</td></tr>
    <tr><td>Fibras</td><td>Intestino e saciedade.</td><td>Frutas, verduras, leguminosas, integrais.</td></tr>
  </tbody>
</table>

<h3>Situação-problema</h3>
<div class="callout exam"><strong>Caso</strong><p>Pré-escolar de 4 anos “não come nada”, mas a curva está estável no P50. A mãe oferece leite várias vezes ao dia. A conduta é reduzir excesso de leite, estruturar refeições, oferecer variedade sem pressão e acompanhar a curva. Não é desnutrição.</p></div>

<div class="recap">
  <h4>Em 30 segundos</h4>
  <ul>
    <li>Pré-escolar: crescimento desacelera, apetite oscila, neofobia é comum.</li>
    <li>Avalie curva, velocidade, consumo e clínica — não uma refeição.</li>
    <li>Priorize ferro, zinco, cálcio, vitaminas A e D e fibras.</li>
    <li>Sem pressão, telas ou recompensas; respeite a saciedade.</li>
  </ul>
</div>

<details class="quick">
  <summary>Teste rápido: a criança que recusa alimentos novos está desnutrida?</summary>
  <div class="quick-body"><p>Não necessariamente. Neofobia é comum e transitória. O que define risco é a curva de crescimento, a ingestão de nutrientes e a clínica — não a recusa em uma refeição.</p></div>
</details>
`
      },
      {
        id: "m2l2",
        title: "Alimentação escolar, PNAE e atuação do nutricionista",
        minutes: 9,
        intro: "A escola é ambiente alimentar e política pública. O PNAE é uma das principais estratégias de SAN para crianças.",
        content: `
<p class="lead">A alimentação escolar não é só “merenda”: é política de segurança alimentar e nutricional, educação e saúde. O nutricionista é o responsável técnico por sua qualidade.</p>

<h3>PNAE: o que é</h3>
<p>O Programa Nacional de Alimentação Escolar oferece alimentação e ações de educação alimentar e nutricional a estudantes da educação básica pública. Seus princípios incluem universalidade, equidade, sustentabilidade, respeito à cultura e participação social.</p>
<ul>
  <li>Alimentação adequada e saudável, com variedade e segurança.</li>
  <li>Respeito à cultura e aos hábitos locais.</li>
  <li>Fortalecimento da agricultura familiar e da economia local.</li>
  <li>Educação alimentar e nutricional integrada ao currículo.</li>
  <li>Controle social e transparência.</li>
</ul>

<h3>Atuação do nutricionista no PNAE</h3>
<table>
  <thead><tr><th>Frente</th><th>Ações</th></tr></thead>
  <tbody>
    <tr><td>Planejamento</td><td>Elaborar cardápios adequados à faixa etária, à cultura e à disponibilidade local.</td></tr>
    <tr><td>Qualidade</td><td>Garantir variedade, frequência de frutas/verduras, limites de ultraprocessados e açúcar.</td></tr>
    <tr><td>Segurança</td><td>Boas práticas, higiene, controle de temperatura e qualidade dos alimentos.</td></tr>
    <tr><td>Educação</td><td>Oficinas, hortas, ações com famílias e professores.</td></tr>
    <tr><td>Avaliação</td><td>Monitorar aceitação, consumo, estado nutricional e desperdício.</td></tr>
    <tr><td>Gestão</td><td>Compra, chamada pública, agricultura familiar, prestação de contas.</td></tr>
  </tbody>
</table>
<div class="callout exam"><strong>Cai na prova</strong><p>O nutricionista não é “cozinheiro” nem apenas “fiscal”: é responsável técnico, educador e articulador de políticas. A escola é também ambiente de formação de hábitos.</p></div>

<h3>Qualidade da alimentação e nutrientes prioritários</h3>
<ul>
  <li>Base em alimentos in natura e minimamente processados.</li>
  <li>Frutas e hortaliças frequentes; feijão/leguminosas; carnes/ovos; cereais.</li>
  <li>Limitar ultraprocessados, açúcar, sódio e bebidas açucaradas.</li>
  <li>Água como bebida principal.</li>
  <li>Atenção a ferro, vitamina A, zinco, cálcio, vitaminas do complexo B e fibras.</li>
</ul>

<h3>Situação-problema</h3>
<div class="callout exam"><strong>Caso</strong><p>Uma escola oferece apenas achocolatado, biscoito e salgadinho no lanche. O nutricionista deve reorganizar o cardápio, incluir fruta/proteína/cereal integral, água, educação alimentar e articulação com a família e a gestão. Não basta “proibir” sem oferecer alternativa.</p></div>

<div class="recap">
  <h4>Em 30 segundos</h4>
  <ul>
    <li>PNAE: política universal de alimentação e educação alimentar.</li>
    <li>Nutricionista: cardápio, qualidade, segurança, educação e avaliação.</li>
    <li>Base: comida de verdade, frutas/verduras, leguminosas, proteína.</li>
    <li>Limitar ultraprocessados, açúcar e bebidas açucaradas.</li>
  </ul>
</div>

<details class="quick">
  <summary>Teste rápido: por que a alimentação escolar é uma ação de SAN?</summary>
  <div class="quick-body"><p>Porque garante acesso regular a alimento adequado, promove educação alimentar, fortalece agricultura local e reduz desigualdades — dimensões centrais da SAN.</p></div>
</details>
`
      },
      {
        id: "m2l3",
        title: "Escolar: fase, lanche, necessidades e avaliação",
        minutes: 10,
        intro: "A criança em idade escolar ganha autonomia e sofre influência dos colegas, da escola e da publicidade. O lanche e o exemplo importam.",
        content: `
<p class="lead">O escolar (aproximadamente 6–10/12 anos) cresce de forma constante, ganha independência e amplia a vida social. A alimentação precisa acompanhar escola, esporte, sono e tempo de tela.</p>

<h3>Características fisiológicas, sociais e comportamentais</h3>
<ul>
  <li><strong>Fisiológicas:</strong> crescimento regular, aumento de massa muscular e óssea, maior necessidade de energia e nutrientes.</li>
  <li><strong>Sociais:</strong> escola, amigos, atividades extracurriculares e maior tempo fora de casa.</li>
  <li><strong>Comportamentais:</strong> autonomia, escolhas próprias, influência da publicidade e maior risco de pular refeições.</li>
  <li><strong>Ambiente:</strong> cantina, lancheira, festas, telas e sedentarismo.</li>
</ul>

<h3>Lanche escolar: composição e orientações</h3>
<table>
  <thead><tr><th>Componente</th><th>Exemplos</th><th>Evitar</th></tr></thead>
  <tbody>
    <tr><td>Fruta</td><td>Banana, maçã, laranja, mamão, uva</td><td>Frutas em calda, sucos artificiais</td></tr>
    <tr><td>Proteína</td><td>Queijo, ovo, iogurte natural, pasta de grão-de-bico</td><td>Embutidos, salgadinhos</td></tr>
    <tr><td>Carboidrato</td><td>Pão, tapioca, cuscuz, bolo caseiro</td><td>Biscoito recheado, salgadinho</td></tr>
    <tr><td>Bebida</td><td>Água; suco natural sem açúcar</td><td>Refrigerante, suco de caixinha, achocolatado</td></tr>
  </tbody>
</table>
<p>O lanche deve ser prático, seguro e suficiente para a fome da criança. A água deve ser a bebida principal. A participação da criança no preparo aumenta a aceitação.</p>

<h3>Necessidades nutricionais e nutrientes-chave</h3>
<ul>
  <li><strong>Energia:</strong> varia com idade, sexo, crescimento e atividade física.</li>
  <li><strong>Proteína:</strong> crescimento e manutenção.</li>
  <li><strong>Ferro:</strong> risco de anemia, especialmente em dietas pobres.</li>
  <li><strong>Cálcio e vitamina D:</strong> massa óssea.</li>
  <li><strong>Zinco:</strong> crescimento e imunidade.</li>
  <li><strong>Fibras:</strong> intestino e saciedade.</li>
</ul>
<p>A professora pediu “saber calcular, sem decorar”: entenda como estimar energia e proteína a partir do peso/idade/atividade e como distribuir os macronutrientes; não memorize equações.</p>

<h3>Avaliação nutricional</h3>
<ul>
  <li>Peso, estatura, IMC/idade, estatura/idade.</li>
  <li>Tendência e velocidade de crescimento.</li>
  <li>Consumo alimentar e qualidade da dieta.</li>
  <li>Atividade física, sono e tempo de tela.</li>
  <li>Exame físico e exames quando indicados.</li>
</ul>

<h3>Situação-problema</h3>
<div class="callout exam"><strong>Caso</strong><p>Escolar de 8 anos leva salgadinho e refrigerante todos os dias. A conduta é orientar a família e a escola, combinar substituições viáveis (fruta + sanduíche + água), envolver a criança e acompanhar. Não é “proibir” sem construir alternativa.</p></div>

<div class="recap">
  <h4>Em 30 segundos</h4>
  <ul>
    <li>Escolar: crescimento regular, autonomia e influência social.</li>
    <li>Lanche: fruta + proteína + carboidrato + água.</li>
    <li>Nutrientes-chave: ferro, cálcio, vitamina D, zinco, fibras.</li>
    <li>Avaliação: curva, consumo, atividade, sono e exame físico.</li>
  </ul>
</div>

<details class="quick">
  <summary>Teste rápido: por que não adianta só proibir o salgadinho da lancheira?</summary>
  <div class="quick-body"><p>Porque é preciso oferecer alternativa prática, acessível e aceita, envolver a criança e a família e trabalhar o ambiente escolar. Proibição sem substituição tende a não funcionar.</p></div>
</details>
`
      }
    ]
  },
  {
    id: "m3",
    track: "materno",
    title: "Adolescente: puberdade, comportamento e necessidades",
    short: "Adolescente",
    icon: "i-heart",
    accent: "berry",
    blurb: "Estirão, Tanner, imagem corporal, ambiente digital, PeNSE, necessidades e avaliação nutricional.",
    lessons: [
      {
        id: "m3l1",
        title: "Puberdade e estirão: hormônios, Tanner e crescimento",
        minutes: 10,
        intro: "A adolescência é a segunda grande janela de crescimento. Hormônios, maturação sexual e estirão mudam as necessidades e a avaliação.",
        content: `
<p class="lead">A puberdade é uma sequência de eventos hormonais e físicos. O estirão e a maturação sexual têm timing e velocidade diferentes entre meninas e meninos — e entre indivíduos.</p>

<h3>Eixo hormonal</h3>
<ul>
  <li><strong>GnRH:</strong> hipotálamo; inicia a puberdade.</li>
  <li><strong>LH e FSH:</strong> hipófise; estimulam gônadas.</li>
  <li><strong>Estrogênio:</strong> meninas; crescimento mamário, maturação óssea, menarca.</li>
  <li><strong>Testosterona:</strong> meninos; crescimento genital, massa muscular, voz.</li>
  <li><strong>GH e IGF-1:</strong> crescimento linear; aumentam no estirão.</li>
  <li><strong>Insulina e leptina:</strong> metabolismo e sinalização de reservas.</li>
</ul>

<h3>Estirão do crescimento</h3>
<ul>
  <li>Meninas: em geral inicia antes, com pico próximo à menarca.</li>
  <li>Meninos: inicia depois, com pico mais tardio e maior ganho de estatura.</li>
  <li>Ganho de massa muscular, óssea e alterações de composição corporal.</li>
  <li>Necessidades de energia, proteína, ferro, cálcio e zinco aumentam.</li>
</ul>

<h3>Estágios de Tanner</h3>
<table>
  <thead><tr><th>Estágio</th><th>Meninas</th><th>Meninos</th></tr></thead>
  <tbody>
    <tr><td>1</td><td>Pré-puberal</td><td>Pré-puberal</td></tr>
    <tr><td>2</td><td>Botão mamário; pelos pubianos finos</td><td>Aumento testicular; pelos pubianos finos</td></tr>
    <tr><td>3</td><td>Mama e pelos em desenvolvimento</td><td>Alongamento peniano; pelos mais escuros</td></tr>
    <tr><td>4</td><td>Aréola e papila salientes; pelos adultos</td><td>Glande e escroto maiores; pelos adultos</td></tr>
    <tr><td>5</td><td>Mama adulta; pelos adultos</td><td>Genitália adulta; pelos adultos</td></tr>
  </tbody>
</table>
<p>A menarca ocorre geralmente no Tanner 3–4, após o pico de crescimento. O estágio de Tanner ajuda a interpretar crescimento, composição corporal e necessidades.</p>

<div class="callout exam"><strong>Cai na prova</strong><p>Não compare adolescentes apenas pela idade cronológica: dois adolescentes de 13 anos podem estar em estágios de Tanner muito diferentes. A maturação sexual contextualiza a curva e o aconselhamento.</p></div>

<h3>Implicações nutricionais</h3>
<ul>
  <li>Ferro: crescimento muscular e perdas menstruais.</li>
  <li>Cálcio e vitamina D: pico de massa óssea.</li>
  <li>Zinco: maturação sexual, crescimento e imunidade.</li>
  <li>Proteína: construção de massa magra.</li>
  <li>Energia: estirão, esporte e atividade.</li>
</ul>

<div class="recap">
  <h4>Em 30 segundos</h4>
  <ul>
    <li>GnRH → LH/FSH → estrogênio/testosterona; GH/IGF-1 no estirão.</li>
    <li>Meninas: estirão mais precoce; meninos: mais tardio e maior.</li>
    <li>Tanner 1–5; menarca no 3–4.</li>
    <li>Nutrientes: ferro, cálcio, vitamina D, zinco e proteína.</li>
  </ul>
</div>

<details class="quick">
  <summary>Teste rápido: por que a idade cronológica não basta para avaliar um adolescente?</summary>
  <div class="quick-body"><p>Porque o timing da puberdade varia. Dois adolescentes da mesma idade podem ter estágios de Tanner e velocidades de crescimento diferentes. A maturação sexual contextualiza a interpretação.</p></div>
</details>
`
      },
      {
        id: "m3l2",
        title: "Comportamento alimentar, imagem corporal e ambiente digital",
        minutes: 9,
        intro: "Autonomia, amigos, redes sociais e imagem corporal influenciam o que o adolescente come. A abordagem precisa ser acolhedora e não julgadora.",
        content: `
<p class="lead">Na adolescência, a alimentação ganha significado social e identitário. O nutricionista precisa considerar autonomia, família, amigos, escola, redes sociais e saúde mental.</p>

<h3>Comportamento alimentar</h3>
<ul>
  <li><strong>Autonomia:</strong> maior poder de escolha e de compra.</li>
  <li><strong>Influência dos pares:</strong> comer com amigos, modismos e pertencimento.</li>
  <li><strong>Família:</strong> disponibilidade, exemplo, regras e renda.</li>
  <li><strong>Escola:</strong> cantina, lanche, horários e ambiente.</li>
  <li><strong>Mídia e redes:</strong> publicidade, influenciadores, padrões estéticos.</li>
  <li><strong>Tempo:</strong> rotina, estudo, esporte, sono e telas.</li>
</ul>

<h3>Imagem corporal e risco</h3>
<p>A insatisfação com o corpo é comum, mas pode levar a dietas restritivas, compulsão, purgação e transtornos alimentares. Sinais de alerta: restrição importante, medo intenso de engordar, distorção da imagem, isolamento, exercício excessivo, alterações de humor e peso.</p>
<div class="callout warn"><strong>Não prescreva dieta restritiva</strong><p>Em suspeita de transtorno alimentar, não foque em peso ou “dieta”. Acolha, investigue, envolva a família e encaminhe para equipe especializada.</p></div>

<h3>PeNSE</h3>
<p>A Pesquisa Nacional de Saúde do Escolar (PeNSE/IBGE) monitora hábitos de estudantes, incluindo alimentação, atividade física, tempo de tela, imagem corporal, bullying e saúde mental. É uma ferramenta de vigilância para orientar políticas e ações escolares.</p>

<h3>Hábitos, preferências e padrões</h3>
<ul>
  <li>Consumo frequente de ultraprocessados e bebidas açucaradas.</li>
  <li>Baixa ingestão de frutas, verduras e leguminosas.</li>
  <li>Pular refeições, especialmente o café da manhã.</li>
  <li>Dietas da moda, jejuns e restrições sem orientação.</li>
  <li>Vegetarianismo e veganismo: planejamento de B12, ferro, zinco, cálcio e ômega-3.</li>
  <li>Esporte: maior necessidade de energia e hidratação.</li>
</ul>

<h3>Como abordar</h3>
<ol>
  <li>Escute sem julgar e pergunte sobre rotina, sono, escola, amigos e redes.</li>
  <li>Evite comentários sobre peso e corpo; foque em saúde, energia e autonomia.</li>
  <li>Construa pequenas mudanças viáveis com o adolescente, não para ele.</li>
  <li>Envolva a família quando possível, sem culpabilizar.</li>
  <li>Encaminhe em sinais de transtorno alimentar ou sofrimento mental.</li>
</ol>

<div class="recap">
  <h4>Em 30 segundos</h4>
  <ul>
    <li>Autonomia, pares, família, escola, redes e sono influenciam a alimentação.</li>
    <li>Imagem corporal pode levar a dietas restritivas e transtornos.</li>
    <li>PeNSE monitora hábitos e saúde dos escolares.</li>
    <li>Abordagem acolhedora, sem julgamento e sem dieta restritiva.</li>
  </ul>
</div>

<details class="quick">
  <summary>Teste rápido: por que não focar apenas no peso com um adolescente?</summary>
  <div class="quick-body"><p>Porque isso pode aumentar estigma, insatisfação corporal e risco de transtorno alimentar. O foco deve ser saúde, hábitos, energia, sono e autonomia, com acompanhamento individualizado.</p></div>
</details>
`
      },
      {
        id: "m3l3",
        title: "Necessidades e avaliação nutricional do adolescente",
        minutes: 9,
        intro: "Estirão, maturação sexual e esporte mudam as necessidades. A avaliação combina curva, Tanner, consumo e contexto.",
        content: `
<p class="lead">O adolescente precisa de energia e nutrientes para crescer, maturar e sustentar a rotina. A avaliação não é apenas IMC: inclui estatura, velocidade, Tanner, consumo e saúde mental.</p>

<h3>Necessidades nutricionais</h3>
<table>
  <thead><tr><th>Nutriente</th><th>Por que é importante</th><th>Fontes</th></tr></thead>
  <tbody>
    <tr><td>Energia</td><td>Estirão, atividade, crescimento e manutenção.</td><td>Refeições regulares e variadas.</td></tr>
    <tr><td>Proteína</td><td>Massa muscular e tecidos.</td><td>Ovos, carnes, leite, leguminosas, cereais.</td></tr>
    <tr><td>Ferro</td><td>Crescimento muscular e perdas menstruais.</td><td>Carnes, fígado, feijão, lentilha; vitamina C.</td></tr>
    <tr><td>Cálcio</td><td>Pico de massa óssea.</td><td>Leite, iogurte, queijo, tofu, sardinha.</td></tr>
    <tr><td>Vitamina D</td><td>Saúde óssea e imunidade.</td><td>Sol, peixes, ovos, fortificados.</td></tr>
    <tr><td>Zinco</td><td>Maturação sexual, crescimento e imunidade.</td><td>Carnes, ovos, leguminosas, castanhas.</td></tr>
  </tbody>
</table>
<p>“Saber calcular, sem decorar”: use peso, idade, sexo, atividade e fase de crescimento para estimar necessidades; não memorize equações.</p>

<h3>Avaliação nutricional</h3>
<ul>
  <li><strong>Antropometria:</strong> peso, estatura, IMC/idade, estatura/idade.</li>
  <li><strong>Curvas:</strong> OMS 2007 (5–19 anos).</li>
  <li><strong>Tanner:</strong> contextualiza o crescimento e a composição corporal.</li>
  <li><strong>Velocidade de crescimento:</strong> identifica desvios.</li>
  <li><strong>Circunferência da cintura:</strong> adiposidade central.</li>
  <li><strong>Consumo:</strong> recordatório, frequência, hábitos e ambiente.</li>
  <li><strong>Atividade física, sono, saúde mental e imagem corporal.</strong></li>
</ul>

<h3>Interpretação</h3>
<p>IMC/idade &gt; +1 = sobrepeso; &gt; +2 = obesidade; &gt; +3 = obesidade grave. Estatura/idade &lt; −2 = baixa estatura. Mas o diagnóstico é sempre contextual: um adolescente atleta pode ter IMC diferente; um adolescente com transtorno alimentar pode ter IMC normal.</p>

<h3>Situação-problema</h3>
<div class="callout exam"><strong>Caso</strong><p>Adolescente de 15 anos, vegetariana, fadiga e ferritina baixa. A conduta: investigar ingestão de ferro/B12, sangramento menstrual, combinar leguminosas + cereais, vitamina C e suplementação se indicada. Não basta “comer mais ferro”.</p></div>

<div class="recap">
  <h4>Em 30 segundos</h4>
  <ul>
    <li>Energia, proteína, ferro, cálcio, vitamina D e zinco.</li>
    <li>Avaliação: IMC/idade, estatura/idade, Tanner, cintura, consumo.</li>
    <li>Curvas OMS 2007; contexto e velocidade importam.</li>
    <li>Calcule sem decorar; investigue determinantes e riscos.</li>
  </ul>
</div>

<details class="quick">
  <summary>Teste rápido: um adolescente com IMC normal pode ter deficiência de ferro?</summary>
  <div class="quick-body"><p>Sim. IMC não mede ingestão de ferro nem reservas. Anemia/ferropenia podem coexistir com IMC adequado, especialmente com dieta pobre, menstruação intensa ou vegetarismo sem planejamento.</p></div>
</details>
`
      }
    ]
  },
  {
    id: "m4",
    track: "materno",
    title: "Desnutrição, obesidade e composição corporal",
    short: "Desnutrição e composição",
    icon: "i-scale",
    accent: "berry",
    blurb: "Tipos de desnutrição, kwashiorkor e marasmo, circunferência do braço, excesso de peso e modelo de dois compartimentos.",
    lessons: [
      {
        id: "m4l1",
        title: "Desnutrição: tipos, kwashiorkor, marasmo e circunferência do braço",
        minutes: 10,
        intro: "Desnutrição não é só “magreza”. Edema, tempo de evolução e medidas afetadas mudam a classificação e a conduta.",
        content: `
<p class="lead">A desnutrição é uma síndrome multifatorial. Pode ser aguda ou crônica, com ou sem edema, e afeta diferentes medidas antropométricas.</p>

<h3>Tipos de desnutrição</h3>
<table>
  <thead><tr><th>Tipo</th><th>O que mostra</th><th>Indicador</th></tr></thead>
  <tbody>
    <tr><td><strong>Aguda / emagrecimento</strong></td><td>Perda recente de peso e massa.</td><td>Peso/idade, peso/comprimento, IMC/idade, MUAC.</td></tr>
    <tr><td><strong>Crônica / stunting</strong></td><td>Baixa estatura para a idade.</td><td>Estatura/idade.</td></tr>
    <tr><td><strong>Global</strong></td><td>Baixo peso e baixa estatura.</td><td>Peso/idade + estatura/idade.</td></tr>
    <tr><td><strong>Edematosa</strong></td><td>Edema, hipoalbuminemia, alterações de pele/cabelo.</td><td>Kwashiorkor.</td></tr>
    <tr><td><strong>Não edematosa</strong></td><td>Emagrecimento extremo, sem edema.</td><td>Marasmo.</td></tr>
  </tbody>
</table>

<h3>Kwashiorkor x marasmo</h3>
<table>
  <thead><tr><th>Aspecto</th><th>Kwashiorkor</th><th>Marasmo</th></tr></thead>
  <tbody>
    <tr><td>Edema</td><td>Presente</td><td>Ausente</td></tr>
    <tr><td>Aspecto</td><td>Face preservada, abdome distendido, apatia</td><td>Emagrecimento extremo, “face de velho”, irritabilidade</td></tr>
    <tr><td>Proteína</td><td>Deficiência proteica importante</td><td>Deficiência energética global</td></tr>
    <tr><td>Pele/cabelo</td><td>Alterações frequentes</td><td>Pele seca, cabelo quebradiço</td></tr>
    <tr><td>Peso</td><td>Pode estar mascarado pelo edema</td><td>Muito baixo</td></tr>
  </tbody>
</table>
<div class="callout exam"><strong>Cuidado</strong><p>No kwashiorkor, o peso pode não parecer tão baixo por causa do edema. Avalie edema, albumina, clínica e medidas combinadas. Não descarte desnutrição só pelo peso.</p></div>

<h3>Medidas afetadas</h3>
<ul>
  <li><strong>Peso:</strong> cai na desnutrição aguda; no kwashiorkor pode ser mascarado pelo edema.</li>
  <li><strong>Estatura:</strong> comprometida na desnutrição crônica.</li>
  <li><strong>Peso/comprimento ou IMC/idade:</strong> identificam emagrecimento.</li>
  <li><strong>Circunferência do braço (MUAC):</strong> reflete massa muscular e gordura; útil na triagem e no acompanhamento, especialmente quando peso/estatura são difíceis.</li>
  <li><strong>Perímetro cefálico:</strong> pode ser preservado em relação ao peso; acompanhe o crescimento cerebral.</li>
</ul>

<h3>Papel da circunferência do braço</h3>
<p>A MUAC é uma medida simples, rápida e portátil. Em crianças, é usada para triagem de desnutrição aguda e acompanhamento. Ela não substitui peso/estatura, mas ajuda a identificar risco e monitorar resposta. A medida deve ser feita no ponto médio entre acrômio e olecrano, com fita ajustada sem comprimir.</p>

<h3>Intervenção na desnutrição leve a moderada</h3>
<ol>
  <li>Tratar a causa: infecções, parasitas, problemas dentários, dificuldade de acesso.</li>
  <li>Garantir energia, proteína e micronutrientes com alimentação adequada e viável.</li>
  <li>Suplementar conforme protocolo (ferro, vitamina A, zinco, vitamina D).</li>
  <li>Acompanhar peso, estatura, MUAC, crescimento e desenvolvimento.</li>
  <li>Envolver família, escola e rede de apoio; evitar culpabilização.</li>
</ol>
<p>Desnutrição grave exige protocolo específico e atenção ao risco de síndrome de realimentação; não é manejo apenas ambulatorial simples.</p>

<div class="recap">
  <h4>Em 30 segundos</h4>
  <ul>
    <li>Aguda = emagrecimento; crônica = baixa estatura.</li>
    <li>Kwashiorkor = edema; marasmo = emagrecimento extremo sem edema.</li>
    <li>MUAC ajuda na triagem e no acompanhamento.</li>
    <li>Leve/moderada: causa + alimento + micronutrientes + monitoramento.</li>
  </ul>
</div>

<details class="quick">
  <summary>Teste rápido: por que o peso pode enganar no kwashiorkor?</summary>
  <div class="quick-body"><p>Porque o edema aumenta o peso e pode mascarar a perda de massa. É preciso avaliar edema, albumina, clínica e outras medidas, não apenas o peso.</p></div>
</details>
`
      },
      {
        id: "m4l2",
        title: "Sobrepeso e obesidade: prevenção e intervenção não prescritiva",
        minutes: 9,
        intro: "O excesso de peso na infância é familiar e ambiental. A intervenção eficaz é acolhedora, prática e não prescritiva.",
        content: `
<p class="lead">Sobrepeso e obesidade resultam de fatores genéticos, comportamentais, ambientais e sociais. Culpar a criança ou prescrever dieta restritiva não funciona e pode agravar o problema.</p>

<h3>Avaliação</h3>
<ul>
  <li>IMC/idade na curva (OMS).</li>
  <li>Circunferência da cintura para adiposidade central.</li>
  <li>Consumo alimentar: recordatório, frequência, bebidas, ultraprocessados.</li>
  <li>Atividade física, sono, telas e rotina.</li>
  <li>História familiar, saúde mental, bullying e ambiente escolar.</li>
  <li>Comorbidades quando indicado: pressão, glicemia, lipídios, apneia, esteatose.</li>
</ul>

<h3>Prevenção</h3>
<ul>
  <li>Ambiente familiar saudável e refeições em conjunto.</li>
  <li>Água como bebida principal; reduzir bebidas açucaradas.</li>
  <li>Frutas, verduras, leguminosas e comida de verdade.</li>
  <li>Menos ultraprocessados e publicidade.</li>
  <li>Sono adequado e menos telas.</li>
  <li>Atividade física prazerosa e regular.</li>
  <li>Escola, comunidade e políticas públicas.</li>
</ul>

<h3>Intervenção não prescritiva</h3>
<ol>
  <li>Acolher sem julgar; não falar de “peso” de forma estigmatizante.</li>
  <li>Entender rotina, preferências, renda e cultura.</li>
  <li>Negociar pequenas mudanças viáveis, uma ou duas por vez.</li>
  <li>Usar entrevista motivacional: perguntar, escutar, resumir, apoiar autonomia.</li>
  <li>Envolver a família e o ambiente, não só a criança.</li>
  <li>Acompanhar saúde, crescimento, bem-estar e adesão.</li>
</ol>
<div class="callout warn"><strong>Não prescreva</strong><p>Dietas muito restritivas, jejuns, substituições radicais ou metas de peso agressivas em crianças e adolescentes. O foco é saúde, hábitos e ambiente.</p></div>

<h3>Situação-problema</h3>
<div class="callout exam"><strong>Caso</strong><p>Escolar com IMC/idade +2 e cintura aumentada. A família quer “dieta”. A conduta é avaliar consumo e rotina, combinar redução de bebidas açucaradas, aumento de atividade e sono, refeições em família e retorno. Sem dieta restritiva ou culpa.</p></div>

<div class="recap">
  <h4>Em 30 segundos</h4>
  <ul>
    <li>Avaliação: IMC/idade, cintura, consumo, atividade, sono, contexto.</li>
    <li>Prevenção: ambiente, água, comida de verdade, sono e movimento.</li>
    <li>Intervenção não prescritiva e familiar.</li>
    <li>Sem dietas restritivas ou estigma.</li>
  </ul>
</div>

<details class="quick">
  <summary>Teste rápido: por que a dieta restritiva não é a primeira escolha na obesidade infantil?</summary>
  <div class="quick-body"><p>Porque pode comprometer crescimento, gerar compulsão, estigma e efeito rebote. A abordagem eficaz é comportamental, familiar e sustentável, com pequenas mudanças.</p></div>
</details>
`
      },
      {
        id: "m4l3",
        title: "Composição corporal: dois compartimentos e medidas",
        minutes: 9,
        intro: "Peso não é composição corporal. O modelo de dois compartimentos separa massa gorda e massa livre de gordura — e cada medida tem um significado.",
        content: `
<p class="lead">A composição corporal avalia quanto do peso é gordura e quanto é massa livre de gordura. Na pediatria, ajuda a interpretar crescimento, desnutrição, obesidade e doenças crônicas.</p>

<h3>Modelo de dois compartimentos</h3>
<table>
  <thead><tr><th>Compartimento</th><th>O que inclui</th><th>Observação</th></tr></thead>
  <tbody>
    <tr><td><strong>Massa gorda (MG)</strong></td><td>Tecido adiposo e gordura essencial.</td><td>Reserva energética, isolamento e proteção.</td></tr>
    <tr><td><strong>Massa livre de gordura (MLG)</strong></td><td>Músculo, osso, água, órgãos e tecido residual.</td><td>Metabolicamente ativa; inclui água corporal.</td></tr>
  </tbody>
</table>
<p>O modelo é simples e útil, mas não separa água, osso e músculo dentro da MLG. Métodos mais avançados podem ter mais compartimentos.</p>

<h3>Indicações na pediatria</h3>
<ul>
  <li>Avaliar crescimento e desenvolvimento em situações de risco.</li>
  <li>Desnutrição, obesidade e doenças crônicas.</li>
  <li>Prematuros e crianças com restrição de crescimento.</li>
  <li>Atletas e adolescentes em esporte de desempenho.</li>
  <li>Pesquisa e acompanhamento de intervenções.</li>
</ul>
<p>Não é exame de rotina para toda criança: deve ter indicação e interpretação clínica.</p>

<h3>Medidas e significados</h3>
<table>
  <thead><tr><th>Medida/método</th><th>O que representa</th><th>Limitação</th></tr></thead>
  <tbody>
    <tr><td>Peso e estatura/IMC</td><td>Relação global; triagem.</td><td>Não separa gordura e músculo.</td></tr>
    <tr><td>Dobras cutâneas</td><td>Gordura subcutânea.</td><td>Erro do avaliador; não mede gordura visceral.</td></tr>
    <tr><td>Circunferência da cintura</td><td>Adiposidade central.</td><td>Varia com idade, sexo e etnia.</td></tr>
    <tr><td>Circunferência do braço</td><td>Massa muscular e gordura.</td><td>Não diferencia os compartimentos.</td></tr>
    <tr><td>Bioimpedância</td><td>Estimativa de MG e MLG.</td><td>Depende de hidratação; cautela em edema.</td></tr>
    <tr><td>DEXA</td><td>MG, MLG e densidade óssea.</td><td>Custo, disponibilidade, radiação baixa.</td></tr>
  </tbody>
</table>

<h3>Como interpretar</h3>
<ul>
  <li>Compare com referências para idade, sexo e maturação (Tanner).</li>
  <li>Considere hidratação, edema, etnia e erro de medida.</li>
  <li>Não use um método isolado para diagnóstico.</li>
  <li>Relacione com curva de crescimento, consumo e clínica.</li>
</ul>

<div class="recap">
  <h4>Em 30 segundos</h4>
  <ul>
    <li>Dois compartimentos: massa gorda e massa livre de gordura.</li>
    <li>Indicações: risco, desnutrição, obesidade, doenças, atletas, pesquisa.</li>
    <li>Dobras = gordura subcutânea; cintura = central; MUAC = músculo/gordura.</li>
    <li>Métodos têm limites; interprete com curva e clínica.</li>
  </ul>
</div>

<details class="quick">
  <summary>Teste rápido: o IMC informa a composição corporal?</summary>
  <div class="quick-body"><p>Não diretamente. O IMC é uma relação peso/estatura e não separa massa gorda de massa livre de gordura. Duas crianças com o mesmo IMC podem ter composições diferentes.</p></div>
</details>
`
      }
    ]
  }
]);
