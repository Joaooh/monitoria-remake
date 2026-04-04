import imgFundamentos from "@assets/mago/oficinas/mago-fundamentos.png";
import imgDados from "@assets/mago/oficinas/mago-dados.png";
import imgSql from "@assets/mago/oficinas/mago-sql.png";
import imgRedes from "@assets/mago/oficinas/mago-redes.png";

export const oficinasPassadasData = [
  {
    id: "fundamentos-comp",
    titulo: "Fundamentos da Computação",
    turmas: [
      "Segunda, Quarta e Sexta: 11h às 13h",
      "Segunda, Quarta e Sexta: 17h00 às 19h",
    ],
    imagem: imgFundamentos,
    alt: "Mago conversando com robô",
    linkInscricao: "/oficinas/fundamentos-comp",
  },
  {
    id: "fundamentos-dados",
    titulo: "Fundamentos de Ciência de Dados - Introdução a Python",
    turmas: ["Segunda, Terça e Quinta: 17h30 às 19h"],
    imagem: imgDados,
    alt: "Mago jogando dados para cima",
    linkInscricao: "/oficinas/fundamentos-ciencia-de-dados",
  },
  {
    id: "oficina-sql",
    titulo: "Oficina de SQL",
    turmas: ["Segunda, Quarta e Sexta: 17h30 às 19h"],
    imagem: imgSql,
    alt: "Mago gerenciando banco de dados SQL",
    linkInscricao: "/oficinas/oficina-sql",
  },
  {
    id: "intro-redes",
    titulo: "Introdução de Redes para Cibersegurança",
    turmas: ["Terça e Quinta: 17h às 19h"],
    imagem: imgRedes,
    alt: "Mago flutuando na matrix",
    linkInscricao: "/oficinas/intro-redes",
  },
  {
    id: "machine-learning",
    titulo: "Oficina de Machine Learning",
    turmas: ["Segunda e Quarta: 17h às 19h"],
    imagem: imgDados,
    alt: "Mago jogando dados para cima",
    linkInscricao: "/oficinas/machine-learning",
  },
];
