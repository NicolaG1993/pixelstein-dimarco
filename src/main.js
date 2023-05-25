import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
// import router from './router'

import CoreuiVue from '@coreui/vue'
import { CIcon } from '@coreui/icons-vue'
import { cilList, cilShieldAlt, cilSquare } from '@coreui/icons'

const icons = {
  cilList,
  cilShieldAlt,
  cilSquare
}

createApp(App).use(CoreuiVue).provide('icons', icons).component('CIcon', CIcon).mount('#app')
