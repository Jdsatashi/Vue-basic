// .eslintrc.js
module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:vue/recommended',
        'prettier', // Chúng ta sử dụng Prettier cùng với ESLint
    ],
    plugins: ['vue'],
    parserOptions: {
        parser: 'babel-eslint',
    },
    rules: {},
};