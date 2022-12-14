
module.exports = {
  plugins: ["@typescript-eslint"],
  parser: "@typescript-eslint/parser",
  extends: ["next", "prettier", "eslint:recommended",
  "plugin:@typescript-eslint/recommended",
  "next/core-web-vitals",],
  settings: {
        next: {
          rootDir: ["apps/*/", "packages/*/"],
         },
       },
  rules: {
      "@next/next/no-html-link-for-pages": "off",
  }
}


