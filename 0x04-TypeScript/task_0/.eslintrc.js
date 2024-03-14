module.exports = {
    parser: '@typescript-eslint/parser', // Specifies the parser to be used for TypeScript files
    extends: [
        'plugin:@typescript-eslint/recommended',  // Extends the recommended rules from @typescript-eslint/eslint-plugin
    ],
    parserOptions: {
        ecmaVersion: 2018, // Specifies the ECMAScript version to be used
        sourceType: 'module', // Specifies the type of JavaScript modules to be used
    },
    rules: { // Custom rules can be added here
        // Rules can be specified to customize the linting behavior
    },
};

