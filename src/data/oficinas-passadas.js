import imgFundamentos from "@assets/mago/oficinas/mago-fundamentos.png";
import imgDados from "@assets/mago/oficinas/mago-dados.png";
import imgSql from "@assets/mago/oficinas/mago-sql.png";
import imgRedes from "@assets/mago/oficinas/mago-redes.png";
import img3D from "@assets/mago/oficinas/monitoria-blender.png";
import imgWeb from "@assets/mago/oficinas/mago-web.png";

/*
 * COMO CADASTRAR UMA OFICINA PASSADA:
 * Quando uma oficina ativa termina seu ciclo, ela deve vir pra cá.
 * Preferencialmente, adicione as oficinas passadas em ordem decrescente de data.
 * Basta preencher o array abaixo com os dados básicos, sendo que 'linkInscricao' na verdade será
 * o finalzinho do link que redireciona pra página de detalhes (ex: "/oficinas/oficina-sql").
 */
export const oficinasPassadasData = [
  {
    id: "machine-learning",
    titulo: "Ciência de Dados - Machine Learning",
    descricao:
      "Oferece uma introdução prática e acessível ao mundo do Machine Learning e Ciência de Dados.",
    turmas: ["Terça e Quarta: 11h às 13h"],
    formato: "Presencial",
    linkInscricao: "/oficinas/machine-learning",
    imagem: imgDados,
    alt: "Mago jogando dados",
  },
  {
    id: "oficina-web",
    titulo: "Oficina de Web (JavaScript)",
    descricao:
      "Construa sites rápidos e modernos do zero, focando em componentização e layouts responsivos.",
    turmas: ["Quarta e Sexta: 11h às 13h"],
    formato: "Presencial",
    linkInscricao: "/oficinas/oficina-de-web",
    imagem: imgWeb,
    alt: "Mago pensando em desenvolvimento web",
  },
  {
    id: "oficina-blender",
    titulo: "Oficina de Criação de Personagens 3D",
    turmas: ["Segunda, Quarta e Sexta: 11h às 13h"],
    formato: "Presencial",
    linkInscricao: "/oficinas/criacao-de-personagens-3d",
    imagem: img3D,
    alt: "Mago ao lado ",
  },
  {
    id: "oficina-java",
    titulo: "Oficina de Java",
    turmas: [
      "Segunda, Terça e Quinta: 11h às 13h",
      "Segunda, Quarta e Sexta: 17h às 19h",
    ],
    imagem: imgRedes,
    alt: "Mago flutuando na matrix",
    linkInscricao: "/oficinas/oficina-de-java",
  },
  {
    id: "oficina-dados",
    titulo: "Ciência de Dados - Ferramentas e Frameworks",
    turmas: ["Segunda, Terça e Quinta: 17h às 19h"],
    imagem: imgDados,
    alt: "Mago jogando dados para cima",
    linkInscricao: "/oficinas/ciencia-de-dados-ferramentas-e-frameworks",
  },
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
];
