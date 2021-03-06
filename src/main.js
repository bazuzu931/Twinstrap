import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/main.css'

// Fontawesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faBars)
Vue.component('font-awesome-icon', FontAwesomeIcon)


// Prismjs
import "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/components/prism-scss.min";
import "prismjs/plugins/autolinker/prism-autolinker.min";
import "prismjs/plugins/autolinker/prism-autolinker.css";
import Prism from "vue-prism-component";
Vue.component("prism", Prism);

// Cue-clipboard
import VueClipboard from 'vue-clipboard2'
Vue.use(VueClipboard)




Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
