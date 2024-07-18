const { loadTranslations } = require('../../../routes/a/b/c/loadTranslations.js');

test('loads English translations', async () => {
  const translations = await loadTranslations('en', '../../../routes/a/b/c');
  expect(translations.title).toBe('Welcome');
  expect(translations.description).toBe('This is the English version of the route.');
});

test('loads Hindi translations', async () => {
  const translations = await loadTranslations('hi', '../../../routes/a/b/c');
  expect(translations.title).toBe('स्वागत है');
  expect(translations.description).toBe('यह मार्ग का हिंदी संस्करण है।');
});

test('handles missing translation file gracefully', async () => {
  const translations = await loadTranslations('fr', '../../../routes/a/b/c');
  expect(translations).toEqual({});
});
