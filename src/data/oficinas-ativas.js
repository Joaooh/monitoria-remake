import imgRedes from "@assets/mago/oficinas/mago-redes.png";
import imgLinux from "@assets/mago/oficinas/mago-linux.png";
import imgNuvem from "@assets/mago/oficinas/mago-nuvem.png";
import imgFundamentos from "@assets/mago/oficinas/mago-fundamentos.png";
import imgDados from "@assets/mago/oficinas/mago-dados.png";
/*
 * COMO CADASTRAR UMA OFICINA:
 * Preencha o bloco no array abaixo. 'linkInscricao' é o caminho da URL que abrirá
 * a página detalhada da oficina (ex: "/oficinas/oficina-de-web").
 * Importe a imagem correspondente lá no topo de assets/mago/oficinas.
 */
export const oficinasAtivasData = [
  {
    id: "fundamentos-comp",
    titulo: "Fundamentos da Computação",
    descricao:
      "Entenda como computadores funcionam por debaixo dos panos, do hardware ao sistema operacional.",
    turmas: [
      "Segunda, Quarta e Quinta: 11h às 13h",
      "Segunda, Quarta e Quinta: 17h às 19h",
    ],
    formato: "Presencial",
    imagem: imgFundamentos,
    alt: "Mago conversando com robô",
    linkInscricao: "/oficinas/fundamentos-comp",
  },
  {
    id: "fundamentos-dados",
    titulo: "Fundamentos de Ciência de Dados",
    descricao:
      "Inicie sua jornada na área de dados utilizando a linguagem Python para manipular informações.",
    turmas: ["Segunda, Quarta e Quinta: 17h às 19h"],
    formato: "Presencial",
    imagem: imgDados,
    alt: "Mago jogando dados para cima",
    linkInscricao: "/oficinas/fundamentos-ciencia-de-dados",
  },
];
