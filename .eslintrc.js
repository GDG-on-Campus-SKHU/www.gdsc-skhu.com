module.exports = {
  extends: ['next', 'prettier', 'plugin:import/typescript'],
  plugins: ['prettier', 'import', '@typescript-eslint', 'simple-import-sort'],
  rules: {
    'prettier/prettier': 'error',
    '@typescript-eslint/naming-convention': [
      'error',
      {
        format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
        selector: 'variable',
        leadingUnderscore: 'allow',
      },
      { format: ['camelCase', 'PascalCase'], selector: 'function' },
      { format: ['PascalCase'], selector: 'interface' },
      { format: ['PascalCase'], selector: 'typeAlias' },
    ],
    '@typescript-eslint/array-type': ['error', { default: 'array-simple' }],
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        ignoreRestSiblings: true,
        argsIgnorePattern: '_',
        varsIgnorePattern: '_',
      },
    ],
    'prefer-const': 'error',
    'no-var': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
    'react/jsx-no-target-blank': 'error',
    'import/no-duplicates': 'error',
    'import/newline-after-import': 'error',
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          ['^react$', '^next', '^@', '^[a-z]'],
          ['^\\.\\.(?!/?$)', '^\\.\\./?$', '^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
          ['^\\u0000'],
        ],
      },
    ],
    'simple-import-sort/exports': 'error',
    'import/default': 'off',
    'import/namespace': 'off',
  },

  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    sourceType: 'module',
  },

  settings: {
    react: {
      version: 'detect',
      pragma: 'React',
      jsxPragma: 'jsx',
    },
  },

  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parserOptions: {
        jsxImportSource: '@emotion/react',
      },
      rules: {
        'react/no-unknown-property': [
          'error',
          {
            ignore: [
              'css',
              'position',
              'intensity',
              'groundColor',
              'dispose',
              'geometry',
              'rotation',
            ],
          },
        ],
      },
    },
  ],
};
