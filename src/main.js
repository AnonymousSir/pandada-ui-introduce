import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import './assets/iconfont/iconfont.css'
import './assets/globalStyle.scss'
// pandada-ui
import pandadaUI from 'pandada-ui'
Vue.use(pandadaUI)
// content-box
import Content from './components'
Vue.use(Content)
// Highlight
import Highlight from '@/highlight/highlight.js'
Vue.use(Highlight)

Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
