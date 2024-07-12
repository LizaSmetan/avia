/* eslint-disable no-undef */
module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2022,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    env: {
        browser: true,
        es2022: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:jsx-a11y/recommended',
        'prettier', // Додаємо плагін Prettier останнім, щоб відключити правила ESLint, які конфліктують з Prettier
    ],
    plugins: [
        'prettier', // Додаємо плагін Prettier
        'react-hooks',
    ],
    rules: {
        'no-use-before-define': 'error',
        'no-unused-vars': 'error',
        'no-redeclare': 'error',
        'no-undef': [
            'error',
            {
                typeof: false,
            },
        ],
        'no-duplicate-imports': 'error',
        'comma-spacing': [
            'error',
            {
                before: false,
                after: true,
            },
        ],
        'func-call-spacing': ['error', 'never'],
        'function-call-argument-newline': ['error', 'consistent'],
        'keyword-spacing': [
            'error',
            {
                before: true,
                after: true,
            },
        ],
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
    },
    ignorePatterns: [
        '*.svg',
        '*.ts',
        '*.json',
        'node_modules/**/*',
        '.idea/*',
        'dist',
        'npm-debug.*',
        '*.jks',
        '*.p8',
        '*.p12',
        '*.key',
        '*.mobileprovision',
        '*.orig.*',
        'package-lock.json',
        'yarn.lock',
        'yarn-debug.log*',
        'yarn-error.log*',
        '.DS_Store',
    ],
};
