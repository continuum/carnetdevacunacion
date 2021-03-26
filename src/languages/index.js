import Vue from 'vue'
import VueI18n from 'vue-i18n'
import es from './es'

Vue.use(VueI18n)

const messages = { es }

const i18n = new VueI18n(
  {
    locale: 'es',
    fallbackLocale: 'es',
    messages,
  },
)

export default i18n
