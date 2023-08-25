module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  languageOptions: {
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
    },
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    "ecmaFeatures": {
        "jsx": true
    }
  },
  plugins: ["react"],
};
