import imgDados from "@assets/mago/oficinas/mago-dados.png";
import imgLinux from "@assets/mago/oficinas/mago-linux.png";
import imgRedes from "@assets/mago/oficinas/mago-redes.png";
import imgWeb from "@assets/mago/oficinas/mago-web.png";
import imgBlender from "@assets/mago/oficinas/monitoria-blender.png";

export const oficinasAtivasData = [
  {
    id: "oficina-blender",
    titulo: "Criação de Personagens 3D",
    descricao:
      "Aprenda os fundamentos da criação de modelos de personagens 3D e conceitos iniciais para integração na web.",
    turmas: ["Segunda, Quarta e Sexta: 11h às 13h"],
    formato: "Presencial",
    linkInscricao: "/oficinas/criacao-de-personagens-3d",
    imagem: imgBlender,
    alt: "Mago ao lado de personagens 3D",
  },
  {
    id: "oficina-java",
    titulo: "Oficina de Java",
    descricao:
      "Domine a linguagem Java, orientação a objetos e construa bases sólidas para o desenvolvimento de software.",
    turmas: [
      "Segunda, Terça e Quinta: 11h às 13h",
      "Segunda, Quarta e Sexta: 17h às 19h",
    ],
    formato: "Presencial",
    linkInscricao: "/oficinas/oficina-de-java",
    imagem: imgRedes,
    alt: "Mago flutuando na matrix",
  },
  {
    id: "oficina-web",
    titulo: "Oficina de Web",
    descricao:
      "Construa sites rápidos e modernos do zero, focando em componentização e layouts responsivos.",
    turmas: ["Quarta e Sexta: 11h às 13h"],
    formato: "Presencial",
    linkInscricao: "/oficinas/oficina-de-web",
    imagem: imgWeb,
    alt: "Mago pensando em desenvolvimento web",
  },
  {
    id: "oficina-linux",
    titulo: "Oficina de Linux",
    descricao:
      "Domine o terminal, permissões e scripts básicos essenciais para o dia a dia do desenvolvedor.",
    turmas: ["Terça e Quinta: 17h às 19h"],
    formato: "Presencial",
    linkInscricao: "/oficinas/oficina-de-linux",
    imagem: imgLinux,
    alt: "Mago ao lado do pinguim Tux",
  },
  {
    id: "oficina-dados",
    titulo: "Ciência de Dados - Ferramentas e Frameworks",
    descricao:
      "Exploração, tratamento e análise de dados utilizando as principais bibliotecas do ecossistema moderno.",
    turmas: ["Segunda, Terça e Quinta: 17h às 19h"],
    formato: "Online",
    linkInscricao: "/oficinas/oficina-de-dados",
    imagem: imgDados,
    alt: "Mago jogando dados para cima",
  },
];
