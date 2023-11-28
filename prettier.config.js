/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').options} */
const config = {
  plugins: [
    'prettier-plugin-tailwindcss',
    '@trivago/prettier-plugin-sort-imports',
    'prettier-plugin-tailwindcss'
  ],
  semi: false,
  singleQuote: true,
  trailingComma: 'none',
  importOrder: [
    '^[a-z0-9]',
    '^~server/(.*)$',
    '^~utils/(.*)$',
    '^~public/(.*)$',
    '.*'
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true
}

export default config
