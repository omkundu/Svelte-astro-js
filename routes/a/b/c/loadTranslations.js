const path = require('path');

async function loadTranslations(lang, routePath) {
  try {
    const translationPath = path.join(__dirname, routePath, `c.${lang}.json`);
    const translation = require(translationPath);
    return translation;
  } catch (error) {
    console.error(`Error loading ${lang} translations for ${routePath}:`, error);
    return {};
  }
}

module.exports = { loadTranslations };
