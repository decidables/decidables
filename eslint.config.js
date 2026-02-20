import {defineConfig} from 'eslint/config';
import globals from 'globals';
import js from '@eslint/js';
import {configs} from 'eslint-config-airbnb-extended/legacy';

export default defineConfig([
  // ESLint recommended
  {
    name: 'js/recommended',
    plugins: {js},
    extends: ['js/recommended'],
  },

  // Airbnb base recommended
  ...configs.base.recommended,

  // Local overrides
  {
    name: 'overrides',
    languageOptions: {
      ecmaVersion: 'latest',
      parserOptions: {
        ecmaVersion: 'latest',
      },
    },
    settings: {
      'import/resolver': ['eslint-import-resolver-typescript'],
    },
    rules: {
      'arrow-body-style': ['error', 'always'],
      'arrow-parens': ['error', 'always'],
      indent: ['error', 2, {
        SwitchCase: 1,
        VariableDeclarator: 1,
        outerIIFEBody: 1,
        FunctionDeclaration: {
          parameters: 1,
          body: 1,
        },
        FunctionExpression: {
          parameters: 1,
          body: 1,
        },
        CallExpression: {
          arguments: 1,
        },
        ArrayExpression: 1,
        ObjectExpression: 1,
        ImportDeclaration: 1,
        flatTernaryExpressions: false,
        ignoredNodes: ['TemplateLiteral > *'],
        ignoreComments: false,
      }],
      'multiline-ternary': ['error', 'always-multiline'],
      'no-multiple-empty-lines': ['error', {
        max: 2,
        maxBOF: 1,
        maxEOF: 0,
      }],
      'no-nested-ternary': ['off'],
      'no-param-reassign': ['error', {
        props: false,
      }],
      'object-curly-spacing': ['error', 'never'],
      'object-shorthand': ['error', 'methods', {
        ignoreConstructors: false,
        avoidQuotes: true,
      }],
    },
  },

  // Browser specific settings
  {
    name: 'browser',
    files: ['**/src/**/*.js'],
    languageOptions: {
      globals: {
        ...globals.browser,
      },
    },
  },

  // Development script specific settings
  {
    name: 'node',
    files: ['scripts/**/*.js', '**/gulpfile.js', '**/*.config.js', '**/.*.js'],
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
    rules: {
      'import/extensions': ['error', 'ignorePackages'],
      'import/no-extraneous-dependencies': ['error', {
        devDependencies: true,
      }],
      'import/no-relative-packages': 'off',
      'no-console': 'off',
    },
  },

  // Test script specific settings
  {
    name: 'test',
    files: ['scripts/test-utility.js', '**/test/**/*.test.js'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.mocha,
      },
    },
    rules: {
      'import/no-extraneous-dependencies': ['error', {
        devDependencies: true,
      }],
      'import/no-relative-packages': 'off',
    },
  },
]);
