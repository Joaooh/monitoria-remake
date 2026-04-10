# Monitoria de TI — CEUB

Site oficial da Monitoria de TI do UniCEUB. Construído com [Astro](https://astro.build), hospedado na Vercel.

O projeto centraliza as oficinas, playlists de aulas, calendário de ciclos e a equipe de monitores em um único portal público.

---

## Índice

- [Desenvolvimento local](#desenvolvimento-local)
- [Estrutura de dados](#estrutura-de-dados)
- [Guia de manutenção](#guia-de-manutenção)
  - [Equipe](#equipe-equipejs)
  - [Calendário](#calendário-calendáriojs)
  - [Oficinas ativas](#oficinas-ativas-oficinas-ativasjs)
  - [Detalhes das oficinas](#detalhes-das-oficinas-oficinas-detalhesjs)
  - [Oficinas passadas](#oficinas-passadas-oficinas-passadasjs)
  - [Playlists](#playlists-playlistsjs)
- [Commits e versionamento](#commits-e-versionamento)

---

## Desenvolvimento local

Requisitos: Node.js >= 22.12.0

```bash
npm install
npm run dev        # servidor local em localhost:4321
npm run build      # build de produção em ./dist/
npm run preview    # prévia do build antes do deploy
```

---

## Estrutura de dados

Todo o conteúdo do site é gerenciado pelos arquivos em `src/data/`. Nenhum banco de dados ou CMS externo é utilizado. Alterar esses arquivos e fazer push é suficiente para atualizar o site.

```
src/data/
├── calendario.js           # Ciclos e datas do semestre
├── equipe.js               # Monitores ativos e ex-membros
├── oficinas-ativas.js      # Oficinas em andamento (cards da página principal)
├── oficinas-detalhes.js    # Páginas internas completas de cada oficina
├── oficinas-passadas.js    # Oficinas encerradas (carrossel)
├── playlists.js            # Vídeos de cada oficina gravada
└── stats.js                # Números de destaque da homepage
```

---

## Guia de manutenção

### Equipe (`equipe.js`)

Cada membro é um objeto no array `equipeData`. Membros com `ativo: true` aparecem na seção principal; com `ativo: false`, na seção de ex-membros. Membros com `ocultarNaEquipe: true` existem no sistema (para uso em oficinas-detalhes) mas não aparecem na página da equipe.

```js
{
  id: "nome-unico",           // identificador único; usado em oficinas-detalhes.js
  nome: "Nome Completo",
  descricao: "Breve bio.",
  foto: imgNome,              // importar a imagem no topo do arquivo
  ativo: true,
  linkedin: "https://linkedin.com/in/...", // null se não houver
  github: "https://github.com/...",        // null se não houver
}
```

Para adicionar um monitor: importe a foto em `src/assets/equipe/`, crie o objeto no array e faça o commit.

---

### Calendário (`calendario.js`)

Controla o calendário visual da página de Oficinas. Dois arrays devem ser mantidos sincronizados:

**`mesesParaGerar`** — lista os meses exibidos no calendário. O campo `mes` usa índice base 0 (Janeiro = 0, Fevereiro = 1, Março = 2, etc.).

```js
{ mes: 2, ano: 2026, nome: "Março" }
```

**`dadosCalendario.ciclos`** — cada ciclo define um período destacado no calendário com suas oficinas associadas.

```js
{
  id: "ciclo-1",
  nome: "Ciclo 1 (16/03 a 27/03)",
  dataInicio: "2026-03-16",   // formato YYYY-MM-DD
  dataFim: "2026-03-27",
  corBase: "#c8e6c9",         // cor de fundo do destaque
  corBorda: "#388e3c",        // cor da borda
  oficinas: [
    { nome: "Oficina de Java", dias: "Seg, Ter e Qui", hora: "11h às 13h", formato: "Presencial" },
  ],
}
```

Oficinas futuras ainda sem detalhes confirmados podem usar apenas `{ nome: "A confirmar" }`.

---

### Oficinas ativas (`oficinas-ativas.js`)

Aparecem como cards na seção principal da página de Oficinas. Cada entrada exige uma imagem importada de `src/assets/mago/oficinas/`. O campo `linkInscricao` deve apontar para o slug correspondente em `oficinas-detalhes.js` (ex: `"/oficinas/oficina-de-java"`).

```js
{
  id: "oficina-java",
  titulo: "Oficina de Java",
  descricao: "Descrição curta para o card.",
  turmas: ["Segunda, Terça e Quinta: 11h às 13h"],
  formato: "Presencial",          // ou "Online"
  linkInscricao: "/oficinas/oficina-de-java",
  imagem: imgJava,
  alt: "Descrição acessível da imagem",
}
```

---

### Detalhes das oficinas (`oficinas-detalhes.js`)

Alimenta as páginas internas de cada oficina (rota `/oficinas/[slug]`). O campo `slug` deve ser idêntico ao trecho final do `linkInscricao` de `oficinas-ativas.js` e `oficinas-passadas.js`.

Os monitores são vinculados pelo `id` cadastrado em `equipe.js` via a função `getMonitor`:

```js
monitores: [
  getMonitor("lucas-borges", true),  // true = exibe coroa de líder
  getMonitor("joao-gabriel"),
  getMonitor("lucas-villas", false, "Turma: Manhã"), // infoExtra aparece no topo da bio
].filter(Boolean), // filter(Boolean) remove entradas com ID inválido
```

Os botões de ação da página (inscrição, playlist, etc.) são configurados em `botoes`:

```js
botoes: [
  { texto: "Inscreva-se Agora", link: "https://forms.gle/...", tipo: "primary" },
  { texto: "Acessar Playlist", link: "/playlist/slug-da-oficina", tipo: "secondary" },
]
```

---

### Oficinas passadas (`oficinas-passadas.js`)

Quando uma oficina encerra seu ciclo, mova-a de `oficinas-ativas.js` para `oficinas-passadas.js`. A estrutura é simplificada em relação às ativas (sem `descricao` e `formato`). O campo `linkInscricao` aponta para a página interna correspondente em `oficinas-detalhes.js`.

Adicione sempre em ordem decrescente (mais recente primeiro).

```js
{
  id: "oficina-sql",
  titulo: "Oficina de SQL",
  turmas: ["Segunda, Quarta e Sexta: 17h30 às 19h"],
  imagem: imgSql,
  alt: "Descrição acessível da imagem",
  linkInscricao: "/oficinas/oficina-sql",
}
```

---

### Playlists (`playlists.js`)

Cada playlist alimenta uma página de player em `/playlist/[slug]`. O `slug` deve ser exatamente igual ao campo `slug` de `oficinas-detalhes.js` para o vínculo funcionar.

```js
{
  slug: "oficina-de-java",
  titulo: "Oficina de Java",
  classroomUrl: "https://classroom.google.com/...",
  videos: [
    {
      id_youtube: "ABC123xyz",    // ID do vídeo: parte final da URL do embed do YouTube
      title: "Título da Aula",
      description: "Resumo do que foi ensinado.",
      tags: ["JAVA", "OOP"],
    },
    {
      id_youtube: "",             // string vazia = aula "Em Breve" (placeholder)
      title: "Em Breve",
      description: "Em Breve",
      tags: [],
    },
  ],
}
```

Para vídeos fora do YouTube (Google Drive, Streamyard, etc.), omita `id_youtube` e injete manualmente:

```js
{
  url: "https://...",
  title: "Título da Aula",
  description: "...",
  date: "2026-03-20",
  duration: "1h20min30s",
  available: true,
  tags: [],
}
```

---

## Commits e versionamento

**Todo commit enviado para o repositório deve obrigatoriamente seguir o padrão [Conventional Commits](https://www.conventionalcommits.org/).** Commits fora do padrão são rejeitados automaticamente: primeiro pelo Husky localmente (antes mesmo de serem registrados), e em seguida pelo GitHub Actions no push remoto. Não há exceções.

O formato exigido é:

```
tipo: descrição em qualquer idioma
```

Exemplos válidos:

```
feat: adiciona nova oficina de Python
fix: corrige data incorreta no calendário
chore: atualiza dependências do projeto
docs: adiciona instruções de commit ao README
```

Tipos aceitos: `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `chore`, `revert`, `ci`.

### Versionamento semântico (major.minor.patch)

A cada push para `main`, o workflow do GitHub Actions analisa os commits desde a última versão e decide automaticamente se e como incrementar a versão, seguindo o padrão **major.minor.patch**:

| Número | Quando incrementa | Tipo de commit |
| --- | --- | --- |
| **patch** (x.x.**1**) | Correções de bugs, melhorias de performance, reverts | `fix`, `perf`, `revert` |
| **minor** (x.**1**.0) | Novas funcionalidades retrocompatíveis | `feat` |
| **major** (**1**.0.0) | Mudança que quebra compatibilidade | qualquer tipo com `BREAKING CHANGE` no corpo |

Commits dos tipos `docs`, `style`, `refactor`, `chore`, `test` e `ci` **não geram release**.

Quando uma release é gerada, o workflow cria automaticamente uma tag (ex: `v1.2.0`) e uma GitHub Release com as notas de alteração, sem necessidade de intervenção manual.
