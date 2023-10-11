import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import mixpanel from 'mixpanel-browser'
import '@/assets/styles/_global.scss'

mixpanel.init('63ed46bf92fd83cdbe91189aeba6fed7', {
  debug: true,
  track_pageview: true,
  persistence: 'localStorage'
})
createApp(App).use(router).mount('#app')
