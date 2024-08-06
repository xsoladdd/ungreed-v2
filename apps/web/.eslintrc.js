/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ["@repo/eslint-config/next.js",],
  parser: "@typescript-eslint/parser",
  rules: {
    // Note: you must disable the base rule as it can report incorrect errors
    "no-unused-vars": "off",
  },
  parserOptions: {
    // project: true,
  },
};
