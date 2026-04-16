import imgPadrao from "@assets/mago/mago-padrao.png";
import imgAngelo from "@assets/equipe/angelo.jpeg";
import imgArthurArash from "@assets/equipe/arthur-arash.png";
import imgEnzo from "@assets/equipe/enzo-rodrigues.jpeg";
import imgFelipeBarcelos from "@assets/equipe/felipe-barcelos.png";
import imgFelipeRodrigues from "@assets/equipe/felipe-rodrigues.png";
import imgFilipeCampos from "@assets/equipe/filipe-campos.jpg";
import imgGabrielBecker from "@assets/equipe/gabriel-becker.jpg";
import imgGabrielCaramez from "@assets/equipe/gabriel-caramez.jpg";
import imgGabrielSoares from "@assets/equipe/gabriel-soares.png";
import imgGuilhermeFernandes from "@assets/equipe/guilherme-fernandes.jpeg";
import imgIsaacLovisi from "@assets/equipe/isaac-lovisi.jpeg";
import imgIsabellaOliveira from "@assets/equipe/isabella-oliveira.jpeg";
import imgJessForster from "@assets/equipe/jess-forster.jpg";
import imgJoaoGabriel from "@assets/equipe/joao-gabriel.png";
import imgKaynan from "@assets/equipe/kaynan.jpeg";
import imgLeonardoCespedes from "@assets/equipe/leonardo-cespedes.jpg";
import imgLucasBorges from "@assets/equipe/lucas-borges.jpg";
import imgLucasMoura from "@assets/equipe/lucas-moura.jpg";
import imgLucasPaiva from "@assets/equipe/lucas-paiva.jpg";
import imgLucasVillas from "@assets/equipe/lucas-villas.jpg";
import imgLuizNicolau from "@assets/equipe/luiz-nicolau.jpeg";
import imgOtavioOliveira from "@assets/equipe/otavio-oliveira.jpeg";
import imgPedroCalderon from "@assets/equipe/pedro-calderon.jpg";
import imgPedroQuartin from "@assets/equipe/pedro-quartin.jpg";
import imgScielBuitrago from "@assets/equipe/sciel-buitrago.jpeg";
import imgThaisRegina from "@assets/equipe/thais-regina.jpg";
import imgSavioNery from "@assets/equipe/savio-nery.jpg";
import imgBrunoDluka from "@assets/equipe/bruno-dluka.jpg";
import imgCaioGodoy from "@assets/equipe/caio-godoy.jpg";
import imgDanielGodoi from "@assets/equipe/daniel-godoi.jpg";
import imgPietraPaz from "@assets/equipe/pietra-paz.jpg";
import imgLeticiaBorsaro from "@assets/equipe/leticia-borsaro.jpg";
import imgMarcoMarques from "@assets/equipe/marco-marques.jpg";

/*
 * COMO ADICIONAR UM NOVO MONITOR À EQUIPE:
 * 1. Importe a foto do monitor lá no topo usando (import imgNome from "@assets/equipe/foto.jpg").
 * 2. Crie um novo bloco no array abaixo contendo: id, nome, descricao, foto, ativo, linkedin e github.
 * 3. Se 'ativo: true', ele aparece como monitor atual. Se 'ativo: false', vai pra aba de Ex-Membros.
 * 4. Coloque null em linkedin/github se o membro não tiver ou não quiser exibir o link.
 * 5. Dica: Use 'ocultarNaEquipe: true' caso o monitor esteja ativo no banco, mas você não quer que apareça na página da equipe.
 */
export const equipeData = [
  // ==========================================
  // MONITORES ATIVOS
  // ==========================================
  {
    id: "lucas-borges",
    nome: "Lucas Borges",
    descricao:
      "Coordenador-chefe da monitoria. Entusiasta em Redes e Cibersegurança.",
    foto: imgLucasBorges,
    ativo: true,
    linkedin: "https://www.linkedin.com/in/lucas-borges-9723b8309/",
    github: "https://github.com/Borges070",
  },
  {
    id: "lucas-villas",
    nome: "Lucas Villas",
    descricao: "Especialista em Blender e Desenvolvedor Full Stack.",
    foto: imgLucasVillas,
    ativo: true,
    linkedin:
      "https://www.linkedin.com/in/lucas-villas-boas-portella-0208752b9/",
    github: "https://github.com/Lucasvillas/",
  },
  {
    id: "jess-forster",
    nome: "Jess Forster",
    descricao:
      "Especialista em Sistemas Operacionais, desenvolvimento Full Stack, Cibersegurança e mono Thresh.",
    foto: imgJessForster,
    ativo: true,
    linkedin: "https://www.linkedin.com/in/jesssaitoforster/",
    github: "https://github.com/gathddu",
  },
  {
    id: "gabriel-caramez",
    nome: "Gabriel Caramez",
    descricao:
      "Especialista em React, Maven e programador Java, Python e JavaScript.",
    foto: imgGabrielCaramez,
    ativo: true,
    linkedin:
      "https://www.linkedin.com/in/gabriel-caramez-benvindo-da-silva-dev/",
    github: "https://github.com/GabrielCaramez/",
  },
  {
    id: "pedro-calderon",
    nome: "Pedro Calderón",
    descricao:
      "Full Stack Developer | Python | C | SQL | entusiasta da Computação Quântica.",
    foto: imgPedroCalderon,
    ativo: true,
    linkedin:
      "https://www.linkedin.com/in/pedro-calder%C3%B3n-nunes-4a27812b5/",
    github: "https://github.com/pedrocalderon52",
  },
  {
    id: "pedro-quartin",
    nome: "Pedro Quartin",
    descricao: "Desenvolvedor: Java, Spring, SQL, Linux, Git, Docker e React.",
    foto: imgPedroQuartin,
    ativo: true,
    linkedin: "https://www.linkedin.com/in/pedroquartin/",
    github: "https://github.com/phquartin",
  },
  {
    id: "lucas-moura",
    nome: "Lucas Moura",
    descricao:
      "Backend Developer | Inteligência Artificial | Entusiasta em Linux e Cibersegurança.",
    foto: imgLucasMoura,
    ativo: true,
    linkedin: "https://www.linkedin.com/in/lucas-salles-moura/",
    github: "https://github.com/LucMoura",
  },
  {
    id: "sciel-buitrago",
    nome: "Sciel Buitrago",
    descricao:
      "Desenvolvedor Backend, entusiasta em Python, com conhecimentos em SQL e fundamentos de estrutura de dados.",
    foto: imgScielBuitrago,
    ativo: true,
    linkedin: "https://www.linkedin.com/in/felipe-buitrago-3225b1364/",
    github: "https://github.com/FerBuitrago",
  },
  {
    id: "enzo-rodrigues",
    nome: "Enzo Rodrigues",
    descricao:
      "Ciência de Dados | Machine Learning | Análise de Dados | Desenvolvimento Full Stack.",
    foto: imgEnzo,
    ativo: true,
    linkedin: "https://www.linkedin.com/in/enzo-rodrigues-ribeiro-134405268/",
    github: "https://github.com/eznrr",
  },
  {
    id: "otavio-oliveira",
    nome: "Otávio Oliveira",
    descricao: "Engenheiro de Dados experiente em SQL e Python.",
    foto: imgOtavioOliveira,
    ativo: true,
    linkedin: "https://www.linkedin.com/in/0ot%C3%A1vio-vieira/",
    github: "https://github.com/Olveir",
  },
  {
    id: "lucas-paiva",
    nome: "Lucas Paiva",
    descricao: "Analista de Dados | Desenvolvedor Web.",
    foto: imgLucasPaiva,
    ativo: true,
    linkedin: "https://www.linkedin.com/in/paiva-sa01/",
    github: "https://github.com/lucasdpsa01",
  },
  {
    id: "felipe-barcelos",
    nome: "Felipe Barcelos",
    descricao:
      "Entusiasta em Cibersegurança | Analista de Redes | Python & Linux.",
    foto: imgFelipeBarcelos,
    ativo: true,
    linkedin: "https://www.linkedin.com/in/felipe-barcelos-5b0637321/",
    github: "https://github.com/felpsbc",
  },
  {
    id: "kaynan",
    nome: "Kaynan Macedo",
    descricao: "Especialista em Java, Engenheiro DevOps.",
    foto: imgKaynan,
    ativo: true,
    linkedin: "https://www.linkedin.com/in/kaynansouza/",
    github: "https://github.com/KaynanSouza",
  },
  {
    id: "guilherme-fernandes",
    nome: "Guilherme Fernandes",
    descricao:
      "Cientista de Dados com foco em Engenharia de IA, MLOps e LLMOps.",
    foto: imgGuilhermeFernandes,
    ativo: true,
    linkedin: "https://www.linkedin.com/in/gui-fernandes04/",
    github: "https://github.com/guifzy",
  },
  {
    id: "joao-gabriel",
    nome: "João Gabriel Torres",
    descricao:
      "Desenvolvedor Front-end com interesse em Java e Linux | vulgo 'Modo Escuro'.",
    foto: imgJoaoGabriel,
    ativo: true,
    linkedin: "https://www.linkedin.com/in/joaogmtorres",
    github: "https://github.com/Joaooh",
  },
  {
    id: "luiz-nicolau",
    nome: "Luiz Felipe Nicolau",
    descricao:
      "Full Stack & AI Engineer | Startup Founder | @SeuNicolau -> YouTube | AWS, Python, JavaScript, SQL…",
    foto: imgLuizNicolau,
    ativo: true,
    linkedin: "https://www.linkedin.com/in/luis-felipe-nicolau/",
    github: "https://github.com/luisfnicolau",
  },
  {
    id: "gabriel-soares",
    nome: "Gabriel Soares",
    descricao: "Especialista em Blender, Generalista 3D.",
    foto: imgGabrielSoares,
    ativo: true,
    ocultarNaEquipe: true,
    linkedin: "https://www.linkedin.com/in/gabrielsoaresss/",
    github: "https://github.com/Zouares",
  },
  {
    id: "leonardo-cespedes",
    nome: "Leonardo Cespedes",
    descricao: "Entusiasta em modelagem e animação 3D.",
    foto: imgLeonardoCespedes,
    ativo: true,
    ocultarNaEquipe: true,
    linkedin:
      "https://www.linkedin.com/in/leonardo-cespedes-paes-huard-7026a435b/",
    github: "https://github.com/rexleo111",
  },
  {
    id: "savio-nery",
    nome: "Sávio Nery",
    descricao: "Data Engineering | Python, ML, NLP",
    foto: imgSavioNery,
    ativo: true,
    ocultarNaEquipe: false,
    linkedin: "https://www.linkedin.com/in/s%C3%A1vio-arbu%C3%AAs-3028aa33a",
    github: "https://github.com/nizpew",
  },
  {
    id: "bruno-dluka",
    nome: "Bruno D'Luka",
    descricao: "Desenvolvedor Mobile e Desktop | Flutter | Dart | Lua",
    foto: imgBrunoDluka,
    ativo: true,
    linkedin: "https://www.linkedin.com/in/bdlukaa/?locale=pt",
    github: "https://github.com/bdlukaa",
  },
  {
    id: "daniel-godoi",
    nome: "Daniel Godoi",
    descricao:
      "Entusiasta em Cibersegurança | Redes de computadores | Desenvolvimento Full Stack",
    foto: imgDanielGodoi,
    ativo: true,
    linkedin: "https://www.linkedin.com/in/daniel-godoi-alves-watrin/",
    github: "https://github.com/DGodoi19",
  },
  {
    id: "pietra-paz",
    nome: "Pietra Paz",
    descricao: "Desenvolvimento Full-Stack | Dados | SQL | R | UX/UI",
    foto: imgPietraPaz,
    ativo: true,
    linkedin: "https://www.linkedin.com/in/pietrapaz/",
    github: "https://github.com/pietrapaz",
  },
  {
    id: "joao-pedro",
    nome: "João Pedro Passos",
    descricao: "Monitor de Web (JavaScript)",
    foto: imgPadrao,
    ativo: true,
    ocultarNaEquipe: true,
    linkedin: "https://www.linkedin.com/in/jpsoupa/",
    github: null,
  },
  {
    id: "ricardo-bonna",
    nome: "Ricardo Bonna",
    descricao: "Monitor de Linux",
    foto: imgPadrao,
    ativo: true,
    ocultarNaEquipe: true,
    linkedin: "https://www.linkedin.com/in/ricbonna/",
    github: "https://github.com/ricbonna",
  },
  {
    id: "gabriel-garcia",
    nome: "Gabriel Garcia",
    descricao: "Monitor de Linux",
    foto: imgPadrao,
    ativo: true,
    ocultarNaEquipe: true,
    linkedin: null,
    github: null,
  },
  {
    id: "caio-godoy",
    nome: "Caio de Godoy",
    descricao: "Entusiasta de Cybersegurança | Pentest | Linux | Python",
    foto: imgCaioGodoy,
    ativo: true,
    linkedin: "https://www.linkedin.com/in/1caiogodoy",
    github: "https://github.com/1caiogodoy",
  },
  {
    id: "leticia-borsaro",
    nome: "Letícia Borsaro",
    descricao:
      "Apaixonada por Criatividade. Interessada em Gerência de Projetos e Pesquisa Científica. Entusiasta em Ética & IA e Tecnologias Sociais",
    foto: imgLeticiaBorsaro,
    ativo: true,
    linkedin: "https://www.linkedin.com/in/leticiaborsaro",
    github: "https://github.com/leticiaborsaro",
  },
  {
    id: "marco-marques",
    nome: "Marco Marques",
    descricao: "Engenharia de Redes | Infraestrutura | Cloud e Automação",
    foto: imgMarcoMarques,
    ativo: true,
    linkedin: "https://www.linkedin.com/in/marco-marques-aa1478278/",
    github: null,
  },

  // ==========================================
  // EX-MEMBROS
  // ==========================================
  {
    id: "angelo-keller",
    nome: "Ângelo Keller",
    descricao:
      "Desenvolvedor Backend, entusiasta de Linux e especialista em tudo.",
    foto: imgAngelo,
    ativo: false,
    linkedin: "https://www.linkedin.com/in/angkeller/",
    github: "https://www.linkedin.com/in/angkeller/",
  },
  {
    id: "arthur-arash",
    nome: "Arthur Arash",
    descricao: "Arquiteto de Soluções | Especialista em Python.",
    foto: imgArthurArash,
    ativo: false,
    linkedin: "https://www.linkedin.com/in/arthur-arash/",
    github: "https://github.com/Arthurbric",
  },
  {
    id: "filipe-campos",
    nome: "Filipe Campos",
    descricao:
      "Engenheiro e Cientista de Dados. Especialista em Big Data e Machine Learning.",
    foto: imgFilipeCampos,
    ativo: false,
    linkedin: "https://www.linkedin.com/in/filipe-sampaio-campos/",
    github: "https://github.com/FilipeSCampos",
  },
  {
    id: "gabriel-becker",
    nome: "Gabriel Becker",
    descricao:
      "Junior Programmer | Backend | Python | Java | PyTorch | Spring Boot.",
    foto: imgGabrielBecker,
    ativo: false,
    linkedin: "https://www.linkedin.com/in/gabriel-becker-cidral/",
    github: "https://github.com/BudaBecker",
  },
  {
    id: "thais",
    nome: "Thaís Regina",
    descricao:
      "Desenvolvedora Backend, Analista de Dados. Experiência com MySQL, Java, C e Python.",
    foto: imgThaisRegina,
    ativo: false,
    linkedin: "https://www.linkedin.com/in/tha%C3%ADs-regina-dias-da-mota/",
    github: "https://github.com/thaisdmota",
  },
  {
    id: "felipe-rodrigues",
    nome: "Felipe Rodrigues",
    descricao: "Especialista em React.",
    foto: imgFelipeRodrigues,
    ativo: false,
    linkedin: "https://www.linkedin.com/in/felipe-rodrigues-queiroz-564377171/",
    github: "https://github.com/felipethecreator",
  },
  {
    id: "isaac-lovisi",
    nome: "Isaac Lovisi",
    descricao: "Full Stack Developer e entusiasta de Linux.",
    foto: imgIsaacLovisi,
    ativo: false,
    linkedin: "https://www.linkedin.com/in/isaac-lovisi/",
    github: "https://github.com/isaaclovisi",
  },
  {
    id: "isabella-oliveira",
    nome: "Isabella Oliveira",
    descricao: "Especialista em Sistemas Operacionais e manipulação de dados.",
    foto: imgIsabellaOliveira,
    ativo: false,
    linkedin: "https://www.linkedin.com/in/isabella-oliveira-747804201/",
    github: "https://github.com/B3ella",
  },
];
