const path = require('path');

module.exports = {
  env: {
    browser: true,
    es2021: true,
    es6: true,
  },
  extends: [
    "airbnb",
    "eslint:recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
  ],
  plugins: [
    "jsx-a11y",
    "import",
    "react",
    "@typescript-eslint"
  ],
  settings: {
    react: {
      version: "detect",
    },
    'import/resolver': {
      alias: {
        map: [
          ['@', path.resolve(__dirname, 'source')],
          ['_', path.resolve(__dirname, 'types')]
        ],
      },
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"]
      }
    },
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: ["tsconfig.json"],
    ecmaFeatures: {
      jsx: true
    },
    sourceType: "module",
    ecmaVersion: 2020,
  },
  rules: {
    "arrow-body-style": ["error", "as-needed"],
    "arrow-spacing": ["error", { before: true, after: true }],
    "max-len": ["error", { code: 120 }],
    "no-use-before-define": "off",
    "no-shadow": "off",
    "indent": "off",

    "jsx-a11y/no-onchange": 0,

    "import/first": "error",
    "import/newline-after-import": "error",
    "import/no-duplicates": "error",
    "import/no-unresolved": "off",
    "import/extensions": "off",
    "import/prefer-default-export": "off",

    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off",
    "react/display-name": "off",
    "react/button-has-type": "error",
    "react/no-access-state-in-setstate": "error",
    "react/no-array-index-key": "error",
    "react/no-danger": "warn",
    "react/no-children-prop": "error",
    "react/no-danger-with-children": "error",
    "react/no-deprecated": "error",
    "react/no-did-mount-set-state": "error",
    "react/no-direct-mutation-state": "error",
    "react/no-find-dom-node": "error",
    "react/no-multi-comp": "off",
    "react/no-redundant-should-component-update": "error",
    "react/no-render-return-value": "error",
    "react/no-string-refs": ["error", { noTemplateLiterals : true }],
    "react/no-this-in-sfc": "error",
    "react/no-typos": "error",
    "react/no-unescaped-entities": "error",
    "react/no-unknown-property": "error",
    "react/no-unsafe": "error",
    "react/require-optimization": "error",
    "react/self-closing-comp": "error",
    "react/jsx-child-element-spacing": "error",
    "react/jsx-closing-tag-location": "error",
    'react/jsx-filename-extension': ["error", { 'extensions': ['.js', '.jsx', '.ts', '.tsx'] }],
    "react/jsx-closing-bracket-location": "off",
    "react/jsx-props-no-spreading": "off",
    "react/jsx-key": "off",

    "@typescript-eslint/no-shadow": "error",
    "@typescript-eslint/indent": ["error", 2],
    "@typescript-eslint/no-unused-vars": [
      "error",
      { "argsIgnorePattern": "^_" }
    ],
    "@typescript-eslint/array-type": "warn",
    "@typescript-eslint/no-use-before-define": ["error"],
    "@typescript-eslint/no-empty-interface": ["error", { allowSingleExtends: true }],
    "@typescript-eslint/member-delimiter-style": ["error"],
    "@typescript-eslint/no-implicit-any-catch": ["error", { allowExplicitAny: false } ],
    "@typescript-eslint/no-namespace": ["error", { allowDefinitionFiles: true } ],
    "@typescript-eslint/no-non-null-assertion": "error",
    "@typescript-eslint/no-non-null-asserted-optional-chain": "error",
    "@typescript-eslint/no-require-imports": "error",
    "@typescript-eslint/no-this-alias": "error",
    "@typescript-eslint/no-unnecessary-boolean-literal-compare": "error",
    "@typescript-eslint/no-unsafe-return": "error",
    "@typescript-eslint/no-var-requires": "error",
    "@typescript-eslint/prefer-enum-initializers": "warn",
    "@typescript-eslint/prefer-for-of": "error",
    "@typescript-eslint/prefer-includes": "error",
    "@typescript-eslint/prefer-nullish-coalescing": "warn",
    "@typescript-eslint/restrict-plus-operands": "error",
    "@typescript-eslint/prefer-string-starts-ends-with": "error",
    "@typescript-eslint/prefer-regexp-exec": "error",
    "@typescript-eslint/prefer-reduce-type-parameter": "warn",
    "@typescript-eslint/prefer-optional-chain": "error",
  }
};
