module.exports = {
    root: true,
    env: {
      node: true,
    },
    extends: [
      "plugin:vue/vue3-essential",
      "eslint:recommended",
      "@vue/typescript/recommended",
      "@vue/prettier",
      "@vue/prettier/@typescript-eslint",
      'plugin:prettier/recommended' // 避免与prettier冲突
    ],
    parserOptions: {
      ecmaVersion: 2020, // 配置ECMAScript版本
    },
    rules: {},
  };