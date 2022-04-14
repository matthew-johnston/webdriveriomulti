module.exports = {
   root: true,
   parser: "@typescript-eslint/parser",
   plugins: ["@typescript-eslint"],
   extends: [
      "eslint:recommended",
      "plugin:@typescript-eslint/recommended",
      +"prettier",
   ],
   rules: {
      indent: ["error", 3],
      "@typescript-eslint/no-floating-promises": "error",
   },
};
