// next-i18next.config.js
const { resolve } = require('path')
module.exports = {
    i18n: {
        defaultLocale: 'en',
        locales: ['en', 'ka'],
    },
    localePath: resolve('./public/locales')
};
