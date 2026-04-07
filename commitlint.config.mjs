// @ts-check

/** @type {import('@commitlint/types').UserConfig} */
export default {
  extends: ["@commitlint/config-conventional"],
  rules: {
    // Tipos permitidos no projeto
    "type-enum": [
      2,
      "always",
      [
        "feat",     // nova funcionalidade
        "fix",      // correção de bug
        "docs",     // apenas documentação
        "style",    // formatação, sem mudança de lógica
        "refactor", // refatoração sem feat nem fix
        "perf",     // melhoria de performance
        "test",     // adiciona ou corrige testes
        "chore",    // manutenção, dependências, scripts
        "revert",   // reverte commit anterior
        "ci",       // mudanças em CI/CD
      ],
    ],
    // Header máximo de 100 caracteres
    "header-max-length": [2, "always", 100],
    // Tipo obrigatório em lowercase
    "type-case": [2, "always", "lower-case"],
    // Tipo não pode ser vazio
    "type-empty": [2, "never"],
    // Escopo em lowercase (quando presente)
    "scope-case": [2, "always", "lower-case"],
    // Subject não pode ser vazio
    "subject-empty": [2, "never"],
    // Sem ponto final no subject
    "subject-full-stop": [2, "never", "."],
    // Sem restrição de idioma no subject (português ou inglês são aceitos)
  },
};
