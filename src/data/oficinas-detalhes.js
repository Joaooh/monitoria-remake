import img3D from "@assets/mago/oficinas/monitoria-blender.png";
import imgJava from "@assets/mago/oficinas/mago-redes.png";
import imgWeb from "@assets/mago/oficinas/mago-web.png";
import imgLinux from "@assets/mago/oficinas/mago-linux.png";
import imgDados from "@assets/mago/oficinas/mago-dados.png";
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
      { texto: "Inscreva-se Agora", link: "#", tipo: "primary" },
      {
        texto: "Playlist Criação de Personagens 3D",
        link: "#",
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
    botoes: [{ texto: "Inscreva-se Agora", link: "#", tipo: "primary" }],
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
    botoes: [{ texto: "Inscreva-se Agora", link: "#", tipo: "primary" }],
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
    botoes: [{ texto: "Inscreva-se Agora", link: "#", tipo: "primary" }],
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
  // --- OFICINA DE CIÊNCIA DE DADOS ---
  {
    slug: "oficina-de-dados",
    titulo: "Ciência de Dados - Ferramentas e Frameworks",
    campus: "Campus Asa Norte",
    horarios: "Segundas, Terças e Quintas, das 17h às 19h",
    imagem: imgDados,
    alt: "Mago jogando dados e manipulando poções em um cenário de análise",
    botoes: [
      { texto: "Inscreva-se Agora", link: "#", tipo: "primary" },
      { texto: "Playlist Ciência de Dados", link: "#", tipo: "secondary" },
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
];
