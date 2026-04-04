import img3D from "@assets/mago/oficinas/monitoria-blender.png";
import imgJava from "@assets/mago/oficinas/mago-redes.png";
import imgWeb from "@assets/mago/oficinas/mago-web.png";
import imgLinux from "@assets/mago/oficinas/mago-linux.png";
import imgDados from "@assets/mago/oficinas/mago-dados.png";
import imgFundamentos from "@assets/mago/oficinas/mago-fundamentos.png";
import imgSql from "@assets/mago/oficinas/mago-sql.png";
import imgRedes from "@assets/mago/oficinas/mago-redes.png";
import { equipeData } from "./equipe.js";

// Busca o monitor pelo ID e (opcionalmente) marca como líder ou adiciona info extra (ex: Turma)
const getMonitor = (id, isLider = false, infoExtra = "") => {
  const monitor = equipeData.find((m) => m.id === id);

  if (!monitor) {
    console.warn(`Monitor com ID '${id}' não encontrado em equipe.js`);
    return null;
  }

  // Se houver info extra (tipo "Turma: Manhã"), formata para aparecer no topo da descrição
  const descricaoFormatada = infoExtra
    ? `<strong>${infoExtra}</strong><br/>${monitor.descricao}`
    : monitor.descricao;

  // Retorna cópia do objeto do monitor, modificando o nome se for líder da oficina
  return {
    ...monitor,
    nome: isLider ? `${monitor.nome} 👑` : monitor.nome,
    descricao: descricaoFormatada,
  };
};

export const oficinasDetalhes = [
  {
    slug: "criacao-de-personagens-3d",
    titulo: "Criação de Personagens 3D",
    campus: "Campus Asa Norte",
    horarios: "Segunda, Quarta e Sexta, das 11h às 13h",
    imagem: img3D,
    alt: "Oficina de Criação de Personagens 3D no Blender",
    botoes: [
      {
        texto: "Inscreva-se Agora",
        link: "https://forms.gle/X389SKQTBrUSytQMA",
        tipo: "primary",
      },
      {
        texto: "Playlist Criação de Personagens 3D",
        link: "/playlist/criacao-de-personagens-3d",
        tipo: "secondary",
      },
    ],
    sobre: [
      {
        titulo: "",
        texto:
          "Esta oficina oferece uma introdução prática e dinâmica ao mundo da Modelagem 3D no Blender. Partindo do zero, os alunos aprenderão o básico de blender, desenvolvendo gradualmente as habilidades necessárias para construir seu primeiro personagem 3D.",
      },
      {
        titulo: "O que você vai aprender:",
        texto:
          "<strong>Fundamentos:</strong> Como utilizar a interface, e como aplicar os princípios de modelagem e texturização para desenvolver diversos personagens low poly até o fim.<br/><strong>Ferramentas:</strong> Trabalharemos apenas com o Blender para modelagem 3D, UV unwrap, texturização, rigging e animação - totalmente gratuito e open source.<br/><strong>Modelagem 3D:</strong> Desde objetos primitivos até a construção de modelos complexos com topologia correta e malha limpa.<br/><strong>Texturização:</strong> Aprenderemos a aplicar texturas a um modelo 3D e iremos pintar as texturas dos próprios personagens.<br/><strong>Rigging e animação:</strong> Aprenderemos a criar o esqueleto base do nosso personagem e animações para dar vida a ele.",
      },
      {
        titulo: "Projetos e Liberdade Criativa:",
        texto:
          "Em toda a oficina, vocês terão toda a liberdade criativa para criar qualquer personagem de sua escolha, desde que siga a ideia do projeto e os conceitos apresentados nas aulas.",
      },
      {
        titulo: "Para quem é este curso:",
        texto:
          "Quaisquer alunos que desejam transformar seus personagens em realidade no Blender.<br/>Alunos que buscam criar personagens 3D do zero.<br/>Interessados em entender na prática como funciona a criação de personagens no Blender.",
      },
    ],
    monitores: [
      getMonitor("gabriel-soares", true),
      getMonitor("sciel-buitrago"),
      getMonitor("leonardo-cespedes"),
    ].filter(Boolean),
  },

  // --- OFICINA DE JAVA ---
  {
    slug: "oficina-de-java",
    titulo: "Oficina de Java",
    campus: "Campus Asa Norte",
    horarios:
      "Turma Manhã: Segundas, Terças e Sextas, das 11h às 13h | Turma Noite: Segundas, Quartas e Sextas, das 17h às 19h",
    imagem: imgJava,
    alt: "Mago em ambiente digital matrix",
    botoes: [
      {
        texto: "Inscreva-se Agora",
        link: "https://forms.gle/aeqzqE69ET8v9h7p9",
        tipo: "primary",
      },
    ],
    sobre: [
      {
        titulo: "",
        texto:
          "A <strong>oficina de Java</strong> foi desenvolvida para transformar sua visão sobre o desenvolvimento de software. Se você deseja dominar uma das linguagens mais utilizadas no mundo e compreender como são construídos grandes sistemas, esta oficina é o ponto de partida ideal. Ao longo das aulas, partiremos dos fundamentos da lógica e de sintaxe da linguagem até chegar aos conceitos estruturais da <strong>programação orientada a objetos (POO)</strong>, permitindo que os participantes aprendam a projetar soluções mais organizadas, escaláveis e profissionais.<br/><br/>A oficina será realizada entre os dias <strong>18/03 e possivelmente 27/03</strong>, com encontros às <strong>segundas, terças e quintas-feiras</strong>.<br/><br/>Ao final da oficina, os participantes que cumprirem os requisitos receberão <strong>certificado de conclusão</strong>. A avaliação será baseada na frequência e no desempenho nos desafios práticos propostos ao longo das aulas.",
      },
      {
        titulo: "O que você vai aprender:",
        texto:
          "<strong>Lógica e sintaxe Java:</strong> Introdução à estrutura da linguagem, incluindo variáveis, tipos de dados, operadores e o ciclo de escrita de programas em Java.<br/><strong>Estruturas de controle:</strong> Uso de condicionais (<em>if/else, switch</em>) e laços de repetição (<em>for, while</em>) para controlar o fluxo de execução do programa.<br/><strong>O Salto para Objetos:</strong> Introdução à Programação Orientada a Objetos, aprendendo a representar conceitos do mundo real por meio de <strong>classes e objetos</strong>.<br/><strong>Atributos e Métodos:</strong> Como definir características e comportamentos dentro das classes para criar componentes de software organizados.<br/><strong>Os Pilares da POO:</strong> Aplicação prática de <strong>encapsulamento, herança e polimorfismo</strong> para deixar o código flexível, estruturado e de fácil manutenção.<br/><strong>Tratamento de Erros:</strong> Introdução ao tratamento de exceções em Java para tornar os programas mais seguros e resilientes.<br/><strong>Projeto Prático:</strong> Desenvolvimento de uma aplicação funcional para consolidar os conhecimentos adquiridos durante a oficina.",
      },
      {
        titulo: "Para quem é esta oficina:",
        texto:
          "<ul style='margin-left: 20px; margin-bottom: 20px; list-style-type: disc;'>" +
          "<li>Estudantes que desejam aprender ou dominar uma das linguagens mais requisitadas pelo mercado de tecnologia;</li>" +
          "<li>Alunos que querem evoluir da lógica de programação para o paradigma de orientação a objetos;</li>" +
          "<li>Iniciantes em TI que desejam construir uma base sólida para desenvolvimento back-end;</li>" +
          "<li>Interessados em aprender boas práticas de programação e padrões fundamentais utilizados em Java.</li>" +
          "</ul>" +
          "Preencha o formulário de inscrição para garantir sua participação. <strong>As vagas são limitadas.</strong>",
      },
    ],
    monitores: [
      getMonitor("kaynan", true, "Turma Manhã"),
      getMonitor("felipe-barcelos", true, "Turma Manhã"),
      getMonitor("lucas-moura", false, "Turma Manhã"),
      getMonitor("lucas-villas", false, "Turma Noite"),
      getMonitor("joao-gabriel", false, "Turma Noite"),
      getMonitor("gabriel-becker", false, "Turma Noite"),
    ].filter(Boolean),
  },

  // --- OFICINA DE WEB ---
  {
    slug: "oficina-de-web",
    titulo: "Oficina de Web",
    campus: "Campus Asa Norte",
    horarios: "Quartas e Sextas, das 11h às 13h",
    imagem: imgWeb,
    alt: "Mago pensando em desenvolvimento web cercado por tags HTML",
    botoes: [
      {
        texto: "Inscreva-se Agora",
        link: "https://forms.gle/kycnCX58jLpMTDvT7",
        tipo: "primary",
      },
    ],
    sobre: [
      {
        titulo: "",
        texto:
          "A <strong>Oficina de HTML e CSS</strong> foi desenvolvida para introduzir os participantes ao universo do desenvolvimento web, apresentando os conceitos fundamentais utilizados na construção de páginas na Internet. Ao longo da oficina, os alunos aprenderão como estruturar conteúdos utilizando <strong>HTML</strong> e como aplicar estilos e layouts utilizando <strong>CSS</strong>, criando páginas visualmente organizadas e funcionais.<br/><br/>Durante as aulas, serão explorados os principais elementos utilizados na criação de páginas web, permitindo que os participantes compreendam como textos, imagens e outros componentes são organizados dentro de um site. Além disso, serão apresentados os primeiros conceitos de estilização e organização visual das páginas.",
      },
      {
        titulo: "O que você vai aprender:",
        texto:
          "<strong>Estrutura de páginas com HTML:</strong> Introdução às principais tags utilizadas para estruturar conteúdos em páginas web.<br/><strong>Elementos e organização:</strong> Como organizar títulos, parágrafos, imagens, links e outros componentes fundamentais de uma página.<br/><strong>Estilização com CSS:</strong> Aplicação de cores, fontes, tamanhos e estilos para melhorar a aparência das páginas.<br/><strong>Layout e posicionamento:</strong> Conceitos básicos de organização visual utilizando CSS, incluindo introdução ao Flexbox.<br/><strong>Construção de páginas simples:</strong> Criação de páginas web básicas aplicando os conceitos aprendidos durante a oficina.<br/><strong>Base para desenvolvimento web:</strong> Preparação para etapas mais avançadas da trilha, onde serão exploradas técnicas mais complexas de criação de interfaces.",
      },
      {
        titulo: "Para quem é esta oficina:",
        texto:
          "<ul style='margin-left: 20px; margin-bottom: 20px; list-style-type: disc;'>" +
          "<li>Estudantes que desejam iniciar no desenvolvimento web;</li>" +
          "<li>Iniciantes em programação que querem entender como sites são construídos;</li>" +
          "<li>Alunos interessados em aprender a estruturar e estilizar páginas na internet;</li>" +
          "<li>Pessoas que desejam dar os primeiros passos na criação de interfaces web.</li>" +
          "</ul>" +
          "Preencha o formulário de inscrição para garantir sua participação. <strong>As vagas são limitadas.</strong>",
      },
    ],
    monitores: [getMonitor("lucas-paiva"), getMonitor("joao-gabriel")].filter(
      Boolean,
    ),
  },

  // --- OFICINA DE LINUX ---
  {
    slug: "oficina-de-linux",
    titulo: "Oficina de Linux",
    campus: "Campus Asa Norte",
    horarios: "Terça e Quinta, das 17h às 19h",
    imagem: imgLinux,
    alt: "Mago ao lado do pinguim Tux em cenário de neve",
    botoes: [
      {
        texto: "Inscreva-se Agora",
        link: "https://forms.gle/9b2TTFmLpUYxDVQ57",
        tipo: "primary",
      },
    ],
    sobre: [
      {
        titulo: "",
        texto:
          "A <strong>Oficina de Linux</strong> foi desenvolvida para introduzir os participantes ao funcionamento e uso prático de sistemas baseados em Linux. Durante a oficina, os alunos aprenderão os conceitos fundamentais de sistemas operacionais e como utilizar Linux de forma eficiente, explorando ferramentas e práticas comuns no ambiente de desenvolvimento e infraestrutura.<br/><br/>A oficina será realizada entre os dias <strong>18 e 27</strong>, com encontros às <strong>terças e quintas-feiras</strong>, no horário das <strong>17h às 19h</strong>.<br/><br/>Ao final da oficina, os participantes que cumprirem os requisitos receberão <strong>certificado de conclusão</strong>. A avaliação será baseada na frequência e participação nas atividades práticas realizadas durante as aulas.",
      },
      {
        titulo: "O que você vai aprender:",
        texto:
          "<strong>O que é um sistema operacional:</strong> Papel do sistema operacional e diferenças entre ambientes como Windows e Linux.<br/><strong>Instalação e inicialização:</strong> BIOS, processo de boot, dual boot e diferentes formas de instalar ou testar Linux.<br/><strong>Interfaces e ambiente do sistema:</strong> Interface gráfica, terminal e como interagir com o sistema de forma eficiente.<br/><strong>Sistema de arquivos:</strong> Estrutura do filesystem, rotas absolutas e relativas e pontos de montagem.<br/><strong>Usuários e permissões:</strong> Conceitos de usuários, grupos e controle de permissões no sistema.<br/><strong>Processos e funcionamento interno:</strong> O que são processos, comunicação entre processos (IPC) e sinais.<br/><strong>Gerenciamento de software:</strong> Uso de package managers para instalar, atualizar e gerenciar programas no sistema.<br/><strong>Segurança e boas práticas:</strong> Uso de sudo, organização do sistema e fundamentos de segurança ao utilizar Linux.",
      },
      {
        titulo: "Para quem é esta oficina:",
        texto:
          "<ul style='margin-left: 20px; margin-bottom: 20px; list-style-type: disc;'>" +
          "<li>Estudantes que desejam aprender a utilizar Linux de forma prática;</li>" +
          "<li>Pessoas interessadas em desenvolvimento, servidores ou infraestrutura;</li>" +
          "<li>Alunos que querem entender melhor como sistemas operacionais funcionam;</li>" +
          "<li>Iniciantes que querem começar a usar Linux no dia a dia.</li>" +
          "</ul>" +
          "Preencha o formulário de inscrição para garantir sua participação. <strong>As vagas são limitadas.</strong>",
      },
    ],
    monitores: [
      getMonitor("jess-forster", true),
      getMonitor("gabriel-caramez", true),
      getMonitor("pedro-quartin"),
    ].filter(Boolean),
  },
  // --- CIÊNCIA DE DADOS - FERRAMENTAS E FRAMEWORKS ---
  {
    slug: "ciencia-de-dados-ferramentas-e-frameworks",
    titulo: "Ciência de Dados - Ferramentas e Frameworks",
    campus: "Campus Asa Norte",
    horarios: "Segundas, Terças e Quintas, das 17h às 19h",
    imagem: imgDados,
    alt: "Mago jogando dados e manipulando poções em um cenário de análise",
    botoes: [
      {
        texto: "Inscreva-se Agora",
        link: "https://forms.gle/JeHitj7XgzukmdrM9",
        tipo: "primary",
      },
      {
        texto: "Playlist Ciência de Dados",
        link: "/playlist/ciencia-de-dados-ferramentas-e-frameworks",
        tipo: "secondary",
      },
    ],
    sobre: [
      {
        titulo: "",
        texto:
          "Esta oficina apresenta as principais bibliotecas utilizadas no trabalho prático com dados em Python, incluindo <strong>NumPy, Pandas, Matplotlib e Seaborn</strong>. Durante as aulas, os participantes aprenderão a carregar, explorar, limpar e visualizar dados, aplicando conceitos de Exploratory Data Analysis (EDA) e pré-processamento de dados.<br/><br/>A mesma dará continuidade à introdução em Python e prepara os participantes para as próximas etapas da trilha, voltadas para Machine Learning e Deep Learning, onde os dados preparados serão utilizados na construção de modelos de inteligência artificial.",
      },
      {
        titulo: "O que você vai aprender:",
        texto:
          "<strong>Bibliotecas de Dados:</strong> Introdução às principais bibliotecas utilizadas na análise de dados em Python, como NumPy, Pandas, Matplotlib e Seaborn.<br/><strong>Manipulação de Dados:</strong> Como carregar, organizar e explorar conjuntos de dados utilizando ferramentas práticas do ecossistema Python.<br/><strong>Limpeza de Dados:</strong> Técnicas de pré-processamento para tratar dados inconsistentes, ausentes ou desorganizados.<br/><strong>Análise Exploratória (EDA):</strong> Como investigar dados, identificar padrões e gerar insights utilizando estatísticas e visualizações.<br/><strong>Visualização de Dados:</strong> Criação de gráficos e representações visuais para compreender melhor os dados.<br/><strong>Preparação para IA:</strong> Organização e preparação de dados que serão utilizados futuramente em projetos de Machine Learning e Deep Learning.",
      },
      {
        titulo: "Para quem é este curso:",
        texto:
          "<ul style='margin-left: 20px; margin-bottom: 20px; list-style-type: disc;'>" +
          "<li>Alunos sem experiência prévia em Frameworks de Ciência de Dados;</li>" +
          "<li>Quem tem conhecimento básico de programação (ou nenhum);</li>" +
          "<li>Interessados em entender na prática como a ciência de dados funciona.</li>" +
          "</ul>",
      },
    ],
    monitores: [
      getMonitor("guilherme-fernandes", true),
      getMonitor("enzo-rodrigues"),
      getMonitor("otavio-oliveira"),
    ].filter(Boolean),
  },

  // --- FUNDAMENTOS DA COMPUTAÇÃO ---
  {
    slug: "fundamentos-comp",
    titulo: "Fundamentos da Computação",
    campus: "Campus Asa Norte",
    horarios: "Segundas, Quartas e Sextas, das 11h às 13h ou 17h às 19h",
    imagem: imgFundamentos,
    alt: "Mago conversando com robô de blocos",
    botoes: [
      {
        texto: "Inscreva-se Agora",
        link: "https://forms.gle/SS6XFPT3MvQEomHR9",
        tipo: "primary",
      },
    ],
    sobre: [
      {
        titulo: "",
        texto:
          "A <strong>Oficina de Fundamentos da Computação</strong> foi desenhada para oferecer a base essencial em computação a estudantes que desejam fortalecer seus conhecimentos e construir fundamentos sólidos na área de tecnologia. Ao longo do programa, serão abordados conceitos indispensáveis para a formação em TI, com foco na compreensão prática do funcionamento dos sistemas computacionais e no desenvolvimento progressivo de raciocínio lógico e analítico.<br/><br/>A oficina será realizada entre os dias <strong>02/03 a 13/03</strong>, com encontros às <strong>segundas, quartas e sextas-feiras</strong>, em dois horários disponíveis:<br/>- Turma da manhã: 11h às 13h<br/>- Turma da noite: 17h às 19h<br/><br/>Ao final da oficina, os participantes que cumprirem os requisitos receberão <strong>certificado de conclusão</strong>. A avaliação será baseada na frequência e no desempenho nas atividades propostas ao longo das aulas.",
      },
      {
        titulo: "O que você vai aprender:",
        texto:
          "<strong>Desmistificando o computador:</strong> Como o computador realmente funciona por dentro — hardware, memória e sistemas operacionais.<br/><strong>Linguagens de programação e componentes:</strong> Diferença entre linguagens compiladas e interpretadas, primeiros programas e funcionamento dos sistemas.<br/><strong>Como computadores se comunicam:</strong> Noções básicas de redes, comunicação entre sistemas e funcionamento da internet.<br/><strong>Internet e interfaces:</strong> Como aplicações e interfaces são construídas e utilizadas no desenvolvimento moderno.<br/><strong>Bancos de dados:</strong> Conceitos iniciais de armazenamento, organização e uso de dados em sistemas computacionais.<br/><strong>O dia a dia do programador:</strong> Uso de IDEs, terminal, Git/GitHub e práticas reais do ambiente de desenvolvimento.<br/><strong>Prática orientada:</strong> Exercícios guiados e desafios para consolidar os conceitos aprendidos ao longo da oficina.",
      },
      {
        titulo: "Para quem é esta oficina:",
        texto:
          "<ul style='margin-left: 20px; margin-bottom: 20px; list-style-type: disc;'>" +
          "<li>Estudantes que desejam construir uma base sólida em computação e tecnologia;</li>" +
          "<li>Alunos que sentem falta de fundamentos essenciais para acompanhar disciplinas de TI;</li>" +
          "<li>Iniciantes que querem entender como computadores e programas funcionam no dia a dia;</li>" +
          "<li>Interessados em se preparar para áreas como programação, sistemas, dados, redes e engenharia de software.</li>" +
          "</ul>" +
          "Preencha o formulário de inscrição para garantir sua participação. <strong>As vagas são limitadas.</strong>",
      },
    ],
    monitores: [
      getMonitor("pedro-calderon", true, "Turma Manhã"),
      getMonitor("isabella-oliveira", true, "Turma Noite"),
      getMonitor("lucas-villas", false, "Turma Manhã"),
      getMonitor("gabriel-caramez", false, "Turma Manhã"),
      getMonitor("lucas-moura", false, "Turma Manhã"),
      getMonitor("jess-forster", false, "Turma Noite"),
      getMonitor("pedro-quartin", false, "Turma Noite"),
      getMonitor("joao-gabriel", false, "Turma Manhã"),
    ].filter(Boolean),
  },

  // --- FUNDAMENTOS DE CIÊNCIA DE DADOS - INTRODUÇÃO A PYTHON ---
  {
    slug: "fundamentos-ciencia-de-dados",
    titulo: "Fundamentos de Ciência de Dados - Introdução a Python",
    campus: "Campus Asa Norte",
    horarios: "Segundas, Terças e Quintas: 17h30 às 19h",
    imagem: imgDados,
    alt: "Mago jogando dados",
    botoes: [
      {
        texto: "Inscreva-se Agora",
        link: "https://forms.gle/ryjrwRf5SV5NLfPy5",
        tipo: "primary",
      },
      {
        texto: "Playlist Fundamentos de Ciência de Dados",
        link: "/playlist/fundamentos-ciencia-de-dados",
        tipo: "secondary",
      },
    ],
    sobre: [
      {
        titulo: "",
        texto:
          "A <strong>oficina de Introdução à Ciência de Dados</strong> foi desenvolvida para apresentar os principais fundamentos, ferramentas e práticas da área, utilizando <strong>Python</strong> como linguagem base. Durante os encontros, os participantes irão compreender o fluxo essencial de um projeto de dados — da coleta à análise — aplicando conceitos de forma prática e estruturada.<br/><br/>Esta oficina faz parte da trilha formativa da monitoria de TI da Asa Norte, com o objetivo de oferecer uma visão clara sobre como dados são organizados, analisados e utilizados para gerar insights e apoiar a tomada de decisões.<br/><br/>A oficina será realizada entre os dias <strong>02/03 e 12/03</strong>, com encontros às <strong>segundas, terças e quintas-feiras</strong>. As aulas serão ministradas <strong>online, via Discord</strong>.<br/><br/>A participação garante <strong>certificado de conclusão</strong>, mediante frequência e desempenho nas atividades propostas ao longo do curso.",
      },
      {
        titulo: "O que você vai aprender:",
        texto:
          "<strong>Fundamentos de Ciência de Dados:</strong> O que é a área, como funciona o ciclo de um projeto de dados e quais são seus principais componentes.<br/><strong>Python para análise de dados:</strong> Manipulação básica de dados, organização de informações e os primeiros passos na análise exploratória.<br/><strong>Tratamento e modelagem de dados:</strong> Limpeza, estruturação e preparação de dados para extração de insights.<br/><strong>Visualização e Interpretação:</strong> Como transformar números em gráficos e conclusões compreensíveis.<br/><strong>Bancos de dados:</strong> Noções iniciais de armazenamento e consulta de dados.<br/><strong>Aplicação prática:</strong> Exercícios guiados simulando situações reais de análise e tomada de decisão.",
      },
      {
        titulo: "Para quem é esta oficina:",
        texto:
          "<ul style='margin-left: 20px; margin-bottom: 20px; list-style-type: disc;'>" +
          "<li>Estudantes que desejam iniciar seus estudos em Ciência de Dados;</li>" +
          "<li>Interessados em aprender a utilizar Python para análise de dados;</li>" +
          "<li>Alunos que querem entender como dados geram insights e apoiam decisões;</li>" +
          "<li>Pessoas que desejam explorar possibilidades de atuação na área de dados.</li>" +
          "</ul>" +
          "Preencha o formulário de inscrição para garantir sua vaga. <strong>Vagas limitadas.</strong><br/><strong>Link do servidor do Discord:</strong>",
      },
    ],
    monitores: [
      getMonitor("guilherme-fernandes", true),
      getMonitor("otavio-oliveira"),
      getMonitor("enzo-rodrigues"),
    ].filter(Boolean),
  },

  // --- OFICINA DE SQL ---
  {
    slug: "oficina-sql",
    titulo: "SQL",
    campus: "Campus Asa Norte",
    horarios: "Segunda, Quarta e Sexta: 17h30 às 19h",
    imagem: imgSql,
    alt: "Mago gerenciando banco de dados",
    botoes: [
      { texto: "Playlist SQL", link: "/playlist/oficina-sql", tipo: "primary" },
    ],
    sobre: [
      {
        titulo: "",
        texto:
          "Esta oficina apresenta uma introdução prática e direta ao universo do SQL e dos bancos de dados relacionais. A proposta é levar o aluno do zero ao domínio das operações essenciais para criar, consultar e manipular dados, sempre com exemplos reais e exercícios guiados. É um percurso desenhado para quem quer entender como o MySQL funciona na prática — desde a criação de tabelas até consultas mais avançadas.",
      },
      {
        titulo: "O que você vai aprender:",
        texto:
          "<strong>Fundamentos do MySQL:</strong> Instalação, primeiro contato com um banco real e criação do banco de dados.<br/><strong>Modelagem e Estrutura:</strong> Definição de tabelas, principais tipos de dados e uso de constraints como PK, FK, UNIQUE e AUTO_INCREMENT.<br/><strong>DML na Prática:</strong> Inserir, atualizar e deletar registros; realizar dumps rápidos; Trabalhar com SELECT, WHERE, AND/OR, ORDER BY e LIMIT.<br/><strong>Funções Importantes:</strong> Uso de funções agregadoras como COUNT, SUM e AVG dentro de consultas.<br/><strong>Joins:</strong> Entendimento dos relacionamentos entre tabelas e como combinar dados de forma eficiente.<br/><strong>Consultas Avançadas:</strong> Subqueries, views, stored procedures e triggers para automação da lógica dentro do banco.<br/><strong>Transações:</strong> Uso de ROLLBACK, SAVEPOINT e dos princípios A.C.I.D. que garantem integridade das operações.",
      },
      {
        titulo: "Estrutura da Oficina:",
        texto:
          "As aulas evoluem de forma progressiva:<br/>• <strong>Aula 01</strong> — Primeiro contato com banco real, criação de tabelas e manipulação básica de dados. (Inclui toda a parte DDL e Introdução ao DML).<br/>• <strong>Aula 02</strong> — Refinamento das consultas: operadores lógicos, ordenação e funções agregadas, seguido da introdução aos principais tipos de JOIN.<br/>• <strong>Aula 03</strong> — Avanço para recursos profissionais: subqueries, views, procedures, triggers e transações.",
      },
      {
        titulo: "Para quem é esta oficina:",
        texto:
          "<ul style='margin-left: 20px; margin-bottom: 20px; list-style-type: disc;'>" +
          "<li>Alunos que nunca tiveram contato com bancos de dados.</li>" +
          "<li>Quem deseja aprender SQL de forma aplicada, entendendo não só comandos, mas seus usos reais.</li>" +
          "<li>Estudantes de tecnologia que querem adquirir uma base sólida para disciplinas futuras ou projetos práticos.</li>" +
          "</ul>",
      },
    ],
    monitores: [
      getMonitor("sciel-buitrago", true),
      getMonitor("luiz-nicolau"),
    ].filter(Boolean),
  },

  // --- INTRODUÇÃO DE REDES PARA CIBERSEGURANÇA ---
  {
    slug: "intro-redes",
    titulo: "Introdução de Redes para Cibersegurança",
    campus: "Campus Asa Norte",
    horarios: "Terças e Quintas, das 17h às 19h",
    imagem: imgRedes,
    alt: "Mago flutuando na matrix",
    botoes: [],
    sobre: [
      {
        titulo: "",
        texto:
          "Esta oficina oferece uma introdução prática e essencial ao universo de Redes de Computadores sob a ótica da cibersegurança. Partindo dos fundamentos, os alunos aprenderão o básico da comunicação de dados, desenvolvendo gradualmente as habilidades necessárias para analisar o tráfego de uma rede, identificar vulnerabilidades e compreender como os ataques mais comuns funcionam.",
      },
      {
        titulo: "O que você vai aprender:",
        texto:
          "<strong>Fundamentos:</strong> Como funcionam os modelos de comunicação (OSI e TCP/IP) e os protocolos essenciais (IP, TCP, UDP) que sustentam a internet. Entenda a teoria para dominar a prática.<br/><strong>Ferramentas:</strong> Trabalharemos com ferramentas padrão da indústria como <strong>Wireshark</strong> para análise de pacotes e <strong>Nmap</strong> para varredura de redes — softwares gratuitos e poderosos, essenciais para qualquer profissional de tecnologia.<br/><strong>Análise de Rede:</strong> Aprender a ler e entender o que está acontecendo com o sistema de redes e quais comunicações estão ocorrendo.<br/><strong>Vetores de Ataque:</strong> Aprenderemos a teoria por trás dos ataques mais clássicos, como Man-in-the-Middle, Negação de Serviço (DoS) e Spoofing, entendendo como exploram as fraquezas inerentes aos protocolos de rede.<br/><strong>Mecanismos de Defesa:</strong> Iremos explorar os conceitos de equipamentos e estratégias de defesa, como Firewalls, VLANs e VPNs, entendendo como criar camadas de segurança para proteger uma infraestrutura.<br/><strong>Atividades Práticas e Análise Crítica:</strong><br/>Serão apresentados cenários de análise e desafios a serem resolvidos. Com o objetivo é desenvolver seu raciocínio crítico para que você possa aplicar os conceitos e ferramentas aprendidos em qualquer situação, capacitando-o a diagnosticar problemas e suspeitas em diferentes ambientes de rede.",
      },
      {
        titulo: "Para quem é este curso:",
        texto:
          "<ul style='margin-left: 20px; margin-bottom: 20px; list-style-type: disc;'>" +
          "<li>Alunos que queiram saber sobre como funciona a internet e curiosidade sobre redes e protocolos;</li>" +
          "<li>Alunos que buscam aprender a identificar e entender tráfego de rede, assim como identificar atividades maliciosas;</li>" +
          "<li>Interessados em entender na prática como as vulnerabilidades de rede são exploradas e como se defender delas;</li>" +
          "<li>Estudantes que querem criar uma base sólida para futuras carreiras em Cibersegurança e Infraestrutura.</li>" +
          "</ul>",
      },
    ],
    monitores: [
      getMonitor("lucas-borges", true),
      getMonitor("felipe-barcelos", true),
      getMonitor("isabella-oliveira"),
      getMonitor("gabriel-caramez"),
    ].filter(Boolean),
  },

  // --- MACHINE LEARNING ---
  {
    slug: "machine-learning",
    titulo: "Machine Learning",
    campus: "Campus Asa Norte",
    horarios: "Segundas e Quartas: 17h às 19h",
    imagem: imgDados,
    alt: "Mago jogando dados",
    botoes: [
      {
        texto: "Playlist Machine Learning",
        link: "/playlist/machine-learning",
        tipo: "primary",
      },
    ],
    sobre: [
      {
        titulo: "",
        texto:
          "Esta oficina oferece uma introdução prática e acessível ao mundo do Machine Learning e Ciência de Dados. Partindo do zero, os alunos aprenderão os conceitos fundamentais através de exemplos concretos e hands-on, desenvolvendo gradualmente as habilidades necessárias para construir seu primeiro modelo preditivo.",
      },
      {
        titulo: "O que você vai aprender:",
        texto:
          "<strong>Fundamentos:</strong> O que é Machine Learning, onde se aplica no mundo real e como funciona um projeto de dados do início ao fim.<br/><strong>Ferramentas:</strong> Trabalharemos com Python, Pandas e Scikit-Learn no Google Colab - tudo gratuito e na nuvem.<br/><strong>Fluxo de Dados:</strong> Desde a importação e exploração de dados até a construção e avaliação de modelos.<br/><strong>Pré-processamento:</strong> Como limpar e preparar dados para análise.<br/><strong>Modelos Básicos:</strong> Introdução aos algoritmos de classificação.",
      },
      {
        titulo: "Projeto Final - Sobrevivência no Titanic:",
        texto:
          "Você vai analisar os dados históricos do Titanic e construir um modelo que prevê quais passageiros sobreviveram ao naufrágio. Este projeto emblemático da comunidade de Data Science permitirá aplicar todo o conhecimento adquirido:<br/>Analisar quais fatores influenciavam a sobrevivência (classe, gênero, idade).<br/>Limpar e preparar os dados.<br/>Treinar um modelo de Machine Learning.<br/>Avaliar o desempenho do seu modelo.",
      },
      {
        titulo: "Para quem é este curso:",
        texto:
          "Alunos sem experiência prévia em Machine Learning.<br/>Quem tem conhecimento básico de programação (ou nenhum).<br/>Interessados em entender na prática como a ciência de dados funciona.",
      },
    ],
    monitores: [
      getMonitor("filipe-campos", true),
      getMonitor("gabriel-becker"),
      getMonitor("otavio-oliveira"),
    ].filter(Boolean),
  },
];
