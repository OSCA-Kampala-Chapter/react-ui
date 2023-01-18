module.exports = {
    root: true,
    "env": {
        "browser": true,
        "es2021": true,
        "node": true
    },
    "extends": [
        "eslint:recommended", // Uses the recommended rules from eslint
        'plugin:import/errors', // Uses the error rules from eslint-plugin-import
        'plugin:import/warnings', // Uses the warning rules from eslint-plugin-import
        'plugin:import/typescript', // Uses the typescript rules from eslint-plugin-import
        'plugin:react/recommended', // Uses the recommended rules from eslint-plugin-react
        'plugin:react-hooks/recommended', // Uses the recommended rules from eslint-plugin-react-hooks
        'plugin:@typescript-eslint/recommended', // Uses the recommended rules from @typescript-eslint/eslint-plugin
        'plugin:@typescript-eslint/recommended-requiring-type-checking', // Uses the recommended rules from @typescript-eslint/eslint-plugin that require type checking (slower)
        'prettier', // Uses eslint-config-prettier to disable ESLint rules from eslint-plugin-react that would conflict with prettier
    ],
    "overrides": [
    ],
    "parser": "@typescript-eslint/parser", // Specifies the ESLint parser
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module", // Allows for the use of imports
        ecmaFeatures: {
            jsx: true, // Allows for the parsing of JSX
          },
    },
    "plugins": [
        "react",
        "@typescript-eslint",
        'simple-import-sort', // sorts imports and exports
    ],
    "rules": {
        'react/prop-types': 'off', // allow no prop-types
        'simple-import-sort/imports': 'error', // sort imports
        'simple-import-sort/exports': 'error', // sort exports
        '@typescript-eslint/no-explicit-any': 'off', // allow explicit any
        '@typescript-eslint/ban-ts-comment': 'off', // allow ts-ignore
    },
    settings: {
        react: {
          version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
        },
}
}