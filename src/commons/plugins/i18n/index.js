import Vue from 'vue'
import VueI18n from 'vue-i18n'
import pt from './pt'
import en from './en'

Vue.use(VueI18n)

export default new VueI18n({
  locale: 'pt',
  fallbackLocale: 'pt',
  silentTranslationWarn: true,
  messages: {
    pt,
    en
  }
})
