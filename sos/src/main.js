import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './components/router'

import { useI18n } from './i18n'

const app = createApp(App)

app.use(router)
app.mount('#app')

// Apply locale to the document so it affects built-in formatting
const { state } = useI18n()
if (typeof document !== 'undefined') {
  document.documentElement.lang = state.locale
}

