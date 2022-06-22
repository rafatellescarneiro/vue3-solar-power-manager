import { createApp } from 'vue'
import App from './App.vue'
import Vuex from './store/index'
import Router from './router/index'
import BootstrapVue3 from 'bootstrap-vue-3'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'
import '@fortawesome/fontawesome-free/js/all'

createApp(App).use(Vuex).use(Router).use(BootstrapVue3).mount('#app')
