import img3D from "@assets/mago/oficinas/monitoria-blender.png";
import imgJava from "@assets/mago/oficinas/mago-redes.png";
import imgWeb from "@assets/mago/oficinas/mago-web.png";
import imgLinux from "@assets/mago/oficinas/mago-linux.png";
import imgDados from "@assets/mago/oficinas/mago-dados.png";
import imgFundamentos from "@assets/mago/oficinas/mago-fundamentos.png";
import imgSql from "@assets/mago/oficinas/mago-sql.png";
import imgRedes from "@assets/mago/oficinas/mago-redes.png";
import { equipeData } from "./equipe.js";

/*
 * DETALHES GLOBAIS DE CADA OFICINA:
 * Aqui ficam todos os dados "pesados" da página interna de cada oficina.
 * 1. O 'slug' PRECISA ser exatamente igual ao 'linkInscricao' apontado nos outros arquivos (ex: "oficina-sql").
 * 2. Em 'monitores', coloque exatamente o 'id' dos monitores correspondentes salvos lá em equipe.js.
 */

// Busca o monitor pelo ID e puxa seus dados para exibir no card, e opcionalmente marca como líder ou adiciona info extra (ex: Turma).
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
    titulo: "Criação de Personagens 3D: Ciclo 2",
    campus: "Campus Asa Norte",
    horarios: "Segunda, Quarta e Sexta, das 11h às 13h",
    imagem: img3D,
    alt: "Oficina de Criação de Personagens 3D no Blender",
    botoes: [
      {
        texto: "Inscreva-se Agora",
        link: "https://forms.gle/znc7K3u426sRbedq5",
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
          "Durante esta oficina, serão explorados fundamentos essenciais para modelagem de personagem, texturização, rigging e controle do personagem utilizando a ferramenta Blender.<br/><br/>Esta oficina faz parte de uma trilha ofertada pela monitoria de TI da Asa Norte que tem como objetivo apresentar a ferramenta Blender e ensinar como modelar personagens do início ao fim para utilização em jogos e animações.<br/><br/>A oficina será realizada entre os dias <strong>13/04 e 08/05</strong>, com encontros às <strong>segundas, quartas e sextas-feiras</strong>. As aulas serão ministradas <strong>presencialmente</strong>.",
      },
      {
        titulo: "O que você vai aprender:",
        texto:
          "<strong>Fundamentos do Blender:</strong> Como utilizar a interface e aplicar os princípios de modelagem e texturização para desenvolver personagens low poly.<br/><strong>Modelagem 3D:</strong> Desde objetos primitivos até a construção de modelos complexos com topologia correta e malha limpa.<br/><strong>Texturização:</strong> Aprenderemos a aplicar texturas a um modelo 3D e pintar as texturas dos próprios personagens.<br/><strong>Rigging:</strong> Aprenderemos a criar o esqueleto base do personagem.<br/><strong>Controle e Animação:</strong> Como dar vida ao personagem com animações básicas.",
      },
      {
        titulo: "Projetos e Liberdade Criativa:",
        texto:
          "Em toda a oficina, vocês terão toda a liberdade criativa para criar qualquer personagem de sua escolha, desde que siga a ideia do projeto e os conceitos apresentados nas aulas.",
      },
      {
        titulo: "Para quem é esta oficina:",
        texto:
          "<ul style='margin-left: 20px; margin-bottom: 20px; list-style-type: disc;'>" +
          "<li>Quaisquer alunos que desejam transformar seus personagens em realidade no Blender;</li>" +
          "<li>Alunos que buscam criar personagens 3D do zero;</li>" +
          "<li>Interessados em entender na prática como funciona a criação de personagens para jogos e animações.</li>" +
          "</ul>" +
          "Preencha o formulário de inscrição para garantir sua participação. <strong>As vagas são limitadas.</strong>",
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
    botoes: [],
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
    titulo: "Oficina de Web (JavaScript): Ciclo 2",
    campus: "Campus Asa Norte",
    horarios: "Quarta e Sexta, das 11h às 13h",
    imagem: imgWeb,
    alt: "Mago pensando em desenvolvimento web cercado por tags HTML",
    botoes: [
      {
        texto: "Inscreva-se Agora",
        link: "https://forms.gle/Rm9iLtr5uxoP73eY8",
        tipo: "primary",
      },
    ],
    sobre: [
      {
        titulo: "",
        texto:
          "Durante esta oficina, você terá uma introdução prática aos principais conceitos do desenvolvimento web, explorando como aplicações modernas são estruturadas e funcionam. Serão abordados temas como interação com páginas, manipulação de dados, comunicação com serviços externos e noções básicas de integração entre diferentes camadas de uma aplicação.<br/><br/>Ao longo das aulas, você desenvolverá aplicações simples e progressivas, permitindo compreender na prática como cada parte contribui para o funcionamento do todo.<br/><br/>A oficina será realizada entre os dias <strong>15/04 e 08/05</strong>, com encontros às <strong>quartas e sextas</strong>. As aulas serão ministradas <strong>presencialmente</strong>.",
      },
      {
        titulo: "O que você vai aprender:",
        texto:
          "<strong>Estrutura de páginas com HTML:</strong> Introdução às principais tags utilizadas para estruturar conteúdos em páginas web.<br/><strong>Interação com páginas:</strong> Como utilizar JavaScript para tornar páginas dinâmicas e responsivas ao usuário.<br/><strong>Manipulação de dados:</strong> Conceitos de como trabalhar com dados localmente e exibir informações de forma dinâmica.<br/><strong>Comunicação com serviços externos:</strong> Introdução a requisições HTTP e como consumir APIs para integrar dados externos nas suas aplicações.<br/><strong>Camadas de uma aplicação:</strong> Noções básicas de como o frontend, backend e banco de dados se integram para formar uma aplicação completa.<br/><strong>Construção progressiva:</strong> Desenvolvimento de aplicação simples e funcional que evolui a cada aula, consolidando o aprendizado na prática.",
      },
      {
        titulo: "Para quem é esta oficina:",
        texto:
          "<ul style='margin-left: 20px; margin-bottom: 20px; list-style-type: disc;'>" +
          "<li>Estudantes que desejam entender como aplicações web modernas funcionam;</li>" +
          "<li>Iniciantes em programação que querem desenvolver suas primeiras aplicações;</li>" +
          "<li>Alunos interessados em aprender desenvolvimento web com foco prático.</li>" +
          "</ul>" +
          "Preencha o formulário de inscrição para garantir sua participação. <strong>As vagas são limitadas.</strong>",
      },
    ],
    monitores: [
      getMonitor("lucas-paiva"),
      getMonitor("joao-gabriel"),
      getMonitor("joao-pedro"),
    ].filter(Boolean),
  },

  // --- OFICINA DE LINUX ---
  {
    slug: "oficina-de-linux",
    titulo: "Oficina de Linux: Ciclo 2",
    campus: "Campus Asa Norte",
    horarios: "Segunda e Quinta, das 17h às 19h",
    imagem: imgLinux,
    alt: "Mago ao lado do pinguim Tux em cenário de neve",
    botoes: [
      {
        texto: "Inscreva-se Agora",
        link: "https://forms.gle/g1CSPNoyhz9Kjuo8A",
        tipo: "primary",
      },
    ],
    sobre: [
      {
        titulo: "",
        texto:
          "Durante esta oficina, serão explorados os fundamentos essenciais do sistema operacional Linux, desde o funcionamento do Shell e suas ferramentas de texto, passando pela estrutura real do sistema de arquivos, executáveis, bibliotecas e configurações, até a inicialização do sistema, gerenciamento de serviços, controle de processos e gerenciamento de pacotes — com atividades práticas em máquina virtual.<br/><br/>Esta oficina faz parte de uma trilha ofertada pela monitoria de TI da Asa Norte que tem como objetivo capacitar os participantes a compreender e operar sistemas Linux com autonomia, entendendo como o sistema se organiza, inicializa e executa programas, e oferecendo uma base sólida para atuar em ambientes de desenvolvimento, servidores e infraestrutura.<br/><br/>A oficina será realizada entre os dias <strong>13/04 e 08/05</strong>, com encontros às <strong>segundas e quintas</strong>. As aulas serão ministradas <strong>presencialmente</strong>.",
      },
      {
        titulo: "O que você vai aprender:",
        texto:
          "<strong>Shell e ferramentas de texto:</strong> Como utilizar o terminal, navegar pelo sistema e operar arquivos com eficiência usando ferramentas de linha de comando.<br/><strong>Estrutura real do sistema de arquivos:</strong> Como o Linux organiza seus diretórios, onde ficam os executáveis, bibliotecas e arquivos de configuração.<br/><strong>Inicialização do sistema:</strong> Como o Linux inicia, desde o boot até o carregamento dos serviços e do ambiente do usuário.<br/><strong>Gerenciamento de serviços:</strong> Como iniciar, parar e monitorar serviços com systemd e outras ferramentas.<br/><strong>Controle de processos:</strong> Como visualizar, gerenciar e encerrar processos em execução no sistema.<br/><strong>Gerenciamento de pacotes:</strong> Como instalar, atualizar e remover softwares utilizando os gerenciadores de pacotes do Linux.",
      },
      {
        titulo: "Para quem é esta oficina:",
        texto:
          "<ul style='margin-left: 20px; margin-bottom: 20px; list-style-type: disc;'>" +
          "<li>Estudantes que desejam aprender a utilizar Linux de forma prática e autônoma;</li>" +
          "<li>Pessoas interessadas em desenvolvimento, servidores ou infraestrutura;</li>" +
          "<li>Alunos que querem entender de verdade como o sistema operacional funciona por dentro;</li>" +
          "<li>Iniciantes que querem construir uma base sólida para trabalhar com Linux no dia a dia.</li>" +
          "</ul>" +
          "Preencha o formulário de inscrição para garantir sua participação. <strong>As vagas são limitadas.</strong>",
      },
    ],
    monitores: [
      getMonitor("jess-forster", true),
      getMonitor("gabriel-caramez"),
      getMonitor("ricardo-bonna"),
      getMonitor("gabriel-garcia"),
      getMonitor("caio-godoy"),
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
        texto: "Playlist Ciência de Dados",
        link: "/playlist/ciencia-de-dados-ferramentas-e-frameworks",
        tipo: "primary",
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
    botoes: [],
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
        texto: "Playlist Fundamentos de Ciência de Dados",
        link: "/playlist/fundamentos-ciencia-de-dados",
        tipo: "primary",
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
    titulo: "Introdução de Redes para Cibersegurança: Ciclo 2",
    campus: "Campus Asa Norte",
    horarios: "Segunda, Terça e Quinta, das 11h às 13h",
    imagem: imgRedes,
    alt: "Mago flutuando na matrix",
    botoes: [
      {
        texto: "Inscreva-se Agora",
        link: "https://forms.gle/k1R5dSFoFwHRBtZ57",
        tipo: "primary",
      },
    ],
    sobre: [
      {
        titulo: "",
        texto:
          "Durante esta oficina, de forma progressiva, os participantes verão os fundamentos de redes de computadores e segurança da informação, partindo de conceitos essenciais como a Tríade CIA e os modelos OSI/TCP-IP, até chegar à construção de redes segmentadas e protegidas com VLANs, NAT, firewalls e DMZ. Ao longo do curso, entende-se não somente como a rede funciona, mas também como ela pode ser atacada e defendida.<br/><br/>Esta oficina faz parte de uma trilha ofertada pela monitoria de TI da Asa Norte que tem como objetivo entender os fundamentos necessários para o estudo de Cibersegurança. Essencial para quem deseja dar os primeiros passos sólidos na área de redes e cibersegurança.<br/><br/>A oficina será realizada entre os dias <strong>13/04 e 07/05</strong>, com encontros às <strong>segundas, terças e quintas</strong>. As aulas serão ministradas <strong>presencialmente</strong>.",
      },
      {
        titulo: "Programação por semana:",
        texto:
          '<strong>Semana 1: O Alicerce</strong> – Fundamentos da Tríade CIA (Confidencialidade, Integridade e Disponibilidade) e os modelos OSI e TCP/IP.<br/><strong>Semana 2: Sobrevivência em Rede Local</strong> – O funcionamento de Switches, ataques de Camada 2 (MAC Flooding/Spoofing) e protocolos de transporte (TCP vs UDP).<br/><strong>Semana 3: O Mapa da Internet</strong> – Endereçamento IP (IPv4/CIDR), protocolos essenciais como DHCP e DNS, e a dinâmica de roteamento.<br/><strong>Semana 4: Arquitetura de Defesa</strong> – Construção de "castelos seguros" utilizando VLANs, NAT, Firewalls e zonas de segurança (DMZ).<br/><br/>Ao final, espera-se que o aluno tenha um perfil analítico e técnico, capaz de compreender o funcionamento básico de uma rede, identificar as camadas e suas principais vulnerabilidades e conceitos fundamentais como VLAN, gateway, ataques de camada, entre outros.',
      },
      {
        titulo: "Para quem é esta oficina:",
        texto:
          "<ul style='margin-left: 20px; margin-bottom: 20px; list-style-type: disc;'>" +
          "<li>Alunos que queiram saber sobre como funciona a internet e curiosidade sobre redes e protocolos;</li>" +
          "<li>Alunos que buscam aprender a identificar e entender tráfego de rede, assim como identificar atividades maliciosas;</li>" +
          "<li>Interessados em entender na prática como as vulnerabilidades de rede são exploradas e como se defender delas;</li>" +
          "<li>Estudantes que querem criar uma base sólida para futuras carreiras em Cibersegurança e Infraestrutura.</li>" +
          "</ul>" +
          "Preencha o formulário de inscrição para garantir sua participação. <strong>As vagas são limitadas.</strong>",
      },
    ],
    monitores: [
      getMonitor("lucas-borges", true),
      getMonitor("lucas-moura"),
      getMonitor("daniel-godoi"),
    ].filter(Boolean),
  },

  // --- MACHINE LEARNING ---
  {
    slug: "machine-learning",
    titulo: "Machine Learning: Ciclo 2",
    campus: "Campus Asa Norte",
    horarios: "Terça e Quarta, das 11h às 13h",
    imagem: imgDados,
    alt: "Mago jogando dados",
    botoes: [
      {
        texto: "Inscreva-se Agora",
        link: "https://forms.gle/jjwSVUxeDN3JY9Gv9",
        tipo: "primary",
      },
      {
        texto: "Playlist Machine Learning",
        link: "/playlist/machine-learning",
        tipo: "secondary",
      },
    ],
    sobre: [
      {
        titulo: "",
        texto:
          "Durante esta oficina, serão abordados modelos clássicos de regressão, classificação e clusterização, incluindo métodos lineares, modelos baseados em árvores e técnicas de ensemble. A oficina irá desenvolver a capacidade teórica e prática para avaliar modelos e interpretar seus resultados, preparando os participantes para construir soluções mais robustas e servindo como base para o avanço em Deep Learning.<br/><br/>Esta oficina faz parte da trilha de Ciência de Dados ofertada pela monitoria de TI da Asa Norte que tem como objetivo apresentar o que é necessário para seguir uma carreira de dados com conteúdos voltados para Machine Learning, Deep Learning, análise de dados e integração DevOps, onde os dados preparados serão utilizados na construção de modelos de inteligência artificial em ambientes reais.<br/><br/>A oficina será realizada entre os dias <strong>14/04 e 06/05</strong>, com encontros às <strong>terças e quartas</strong>. As aulas serão ministradas <strong>presencialmente na sala 1110 e serão gravadas!</strong>",
      },
      {
        titulo: "O que você vai aprender:",
        texto:
          "<strong>Regressão:</strong> Métodos lineares e polinomiais para prever valores contínuos e avaliar seu desempenho.<br/><strong>Classificação:</strong> Algoritmos como Árvores de Decisão, Random Forest, SVM e KNN para categorizar dados.<br/><strong>Clusterização:</strong> Técnicas não supervisionadas como K-Means para descobrir grupos em dados sem rótulos.<br/><strong>Ensemble:</strong> Como combinar modelos (Bagging, Boosting) para obter melhores resultados do que modelos individuais.<br/><strong>Avaliação de modelos:</strong> Métricas como acurácia, precisão, recall, F1-score, RMSE e como interpretá-las.<br/><strong>Base para Deep Learning:</strong> Consolidação dos conceitos clássicos que servem de alicerce para o estudo de redes neurais.",
      },
      {
        titulo: "Para quem é este curso:",
        texto:
          "<ul style='margin-left: 20px; margin-bottom: 20px; list-style-type: disc;'>" +
          "<li>Alunos que já têm base em Python e bibliotecas de dados (Pandas, NumPy);</li>" +
          "<li>Quem deseja aprender ML com foco prático e aplicado;</li>" +
          "<li>Interessados em seguir carreira de dados e inteligência artificial.</li>" +
          "</ul>" +
          "Preencha o formulário de inscrição para garantir sua participação. <strong>As vagas são limitadas.</strong>",
      },
    ],
    monitores: [
      getMonitor("guilherme-fernandes", true),
      getMonitor("enzo-rodrigues"),
      getMonitor("otavio-oliveira"),
    ].filter(Boolean),
  },
];
