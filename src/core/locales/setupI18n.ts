import type { App } from 'vue';
import type { I18n, I18nOptions } from 'vue-i18n';

import { createI18n } from 'vue-i18n';
import { localeSetting } from '../config/localeSetting';
import { useLocaleStoreWithOut } from '../stores/modules/locale';
import { setHtmlPageLang, setLoadLocalePool } from './helper';

const { fallback, availableLocales } = localeSetting;

export let i18n: ReturnType<typeof createI18n>;

async function createI18nOptions(): Promise<I18nOptions> {
  const localeStore = useLocaleStoreWithOut();
  const locale = localeStore.getLocale;
  const defaultLocal = await import(`./lang/${locale}.ts`);
  const message = defaultLocal.default?.message ?? {};

  setHtmlPageLang(locale);
  setLoadLocalePool((loadLocalePool) => {
    loadLocalePool.push(locale);
  });

  return {
    legacy: false,
    locale,
    fallbackLocale: fallback,
    messages: {
      [locale]: message,
    },
    availableLocales: availableLocales,
    sync: true,
    silentTranslationWarn: true,
    missingWarn: false,
    silentFallbackWarn: true,
  };
}

// setup i18n instance with glob
export async function setupI18n(app: App) {
  const options = await createI18nOptions();
  const i18n = createI18n(options) as I18n;
  app.use(i18n);
}
