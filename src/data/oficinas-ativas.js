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
    id: "oficina-de-hardware",
    titulo: "Fundamentos de Hardware",
    descricao:
      "Aprenda na prática sobre montagem, funcionamento e manutenção dos principais componentes de um computador.",
    turmas: [
      "Terça e Sexta: 11h às 13h",
      "Terça e Sexta: 17h às 19h",
    ],
    formato: "Presencial",
    imagem: imgDados,
    alt: "Mago manipulando componentes",
    linkInscricao: "/oficinas/oficina-de-hardware",
  },
];
