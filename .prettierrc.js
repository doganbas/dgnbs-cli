module.exports = {
  arrowParens: 'avoid',
  bracketSameLine: true,
  bracketSpacing: false,
  singleQuote: true,
  trailingComma: 'all',
  printWidth: 120,
  importOrder: [
    '^types/(.*)$',
    '^notifications/(.*)$',
    '^api/(.*)$',
    '^helpers/(.*)$',
    '^utils/(.*)$',
    '^atoms/(.*)$',
    '^molecules/(.*)$',
    '^organisms/(.*)$',
    '^pages/(.*)$',
    '^layouts/(.*)$',
    '^navigations/(.*)$',
    '^modals/(.*)$',
    '^providers/(.*)$',
    '^store/(.*)$',
    '^services/(.*)$',
    '^[./]',
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
};
