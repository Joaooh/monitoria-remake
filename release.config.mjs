// @ts-check

export default {
  branches: ["main"],
  plugins: [
    // Analisa os commits e decide o tipo de versão (patch/minor/major)
    [
      "@semantic-release/commit-analyzer",
      {
        preset: "conventionalcommits",
        releaseRules: [
          { type: "feat", release: "minor" },
          { type: "fix", release: "patch" },
          { type: "perf", release: "patch" },
          { type: "revert", release: "patch" },
          { type: "refactor", release: false },
          { type: "docs", release: false },
          { type: "style", release: false },
          { type: "chore", release: false },
          { type: "test", release: false },
          { type: "ci", release: false },
        ],
      },
    ],
    // Gera as notas da release a partir dos commits
    "@semantic-release/release-notes-generator",
    // Cria a tag e a GitHub Release automaticamente
    "@semantic-release/github",
  ],
};
