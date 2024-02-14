import { createApp } from 'vue'
import App from './App.vue'
import * as bootstrap from 'bootstrap'
import './style/general.scss'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'

library.add(fas, far)

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')
