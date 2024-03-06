module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "@wemake-services/stylelint-config-scss",
    "@wemake-services/typescript/recommended",
    "@wemake-services/javascript"
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  plugins: ["react-refresh"],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
  },
};
