import imgDados from "@assets/mago/oficinas/mago-dados.png";
import imgLinux from "@assets/mago/oficinas/mago-linux.png";
import imgRedes from "@assets/mago/oficinas/mago-redes.png";
import imgWeb from "@assets/mago/oficinas/mago-web.png";
import imgBlender from "@assets/mago/oficinas/monitoria-blender.png";

/*
 * COMO CADASTRAR UMA OFICINA:
 * Preencha o bloco no array abaixo. 'linkInscricao' é o caminho da URL que abrirá
 * a página detalhada da oficina (ex: "/oficinas/oficina-de-web").
 * Importe a imagem correspondente lá no topo de assets/mago/oficinas.
 */
export const oficinasAtivasData = [
  {
    id: "oficina-blender",
    titulo: "Criação de Personagens 3D: Ciclo 2",
    descricao:
      "Aprenda os fundamentos da criação de modelos de personagens 3D e conceitos iniciais para integração na web.",
    turmas: ["Segunda, Quarta e Sexta: 11h às 13h"],
    formato: "Presencial",
    linkInscricao: "/oficinas/criacao-de-personagens-3d",
    imagem: imgBlender,
    alt: "Mago ao lado de personagens 3D",
  },
  {
    id: "intro-redes",
    titulo: "Introdução de Redes para Cibersegurança: Ciclo 2",
    descricao:
      "Esta oficina oferece uma introdução prática e essencial ao universo de Redes de Computadores sob a ótica da cibersegurança.",
    turmas: ["Segunda, Terça e Quinta: 11h às 13h"],
    formato: "Presencial",
    linkInscricao: "/oficinas/intro-redes",
    imagem: imgRedes,
    alt: "Mago flutuando na matrix",
  },
  {
    id: "oficina-web",
    titulo: "Oficina de Web (JavaScript): Ciclo 2",
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
    titulo: "Oficina de Linux: Ciclo 2",
    descricao:
      "Domine o terminal, permissões e scripts básicos essenciais para o dia a dia do desenvolvedor.",
    turmas: ["Segunda e Quinta: 17h às 19h"],
    formato: "Presencial",
    linkInscricao: "/oficinas/oficina-de-linux",
    imagem: imgLinux,
    alt: "Mago ao lado do pinguim Tux",
  },
  {
    id: "machine-learning",
    titulo: "Ciência de Dados - Machine Learning: Ciclo 2",
    descricao:
      "Oferece uma introdução prática e acessível ao mundo do Machine Learning e Ciência de Dados.",
    turmas: ["Terça e Quarta: 11h às 13h"],
    formato: "Presencial",
    linkInscricao: "/oficinas/machine-learning",
    imagem: imgDados,
    alt: "Mago jogando dados",
  },
];
