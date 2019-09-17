import Vue from 'vue'
import 'element-ui/lib/theme-chalk/index.css'
import element from 'element-ui'
import 'highlight.js/styles/color-brewer.css'
import pagesFactory from '../src/index.js'
import router from './router'
import './asset/style/index.css'
import App from './App.vue'
import DemoBlock from './components/demoBlock'
Vue.use(element)
Vue.use(pagesFactory)
Vue.component('demo-code', DemoBlock)
// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  render: h => h(App)
})
