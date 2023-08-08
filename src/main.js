import { createApp } from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUserSecret, faHouse, faInbox, faGear, faRightFromBracket, faAddressCard, faBell, faDownload, faBars, faMicrophone, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

import App from './App.vue'
import router from './routers'
import './assets/style.css'

// Add icons to the library
library.add(faUserSecret)
library.add(faHouse)
library.add(faInbox)
library.add(faGear)
library.add(faRightFromBracket)
library.add(faAddressCard)
library.add(faBell)
library.add(faDownload)
library.add(faBars)
library.add(faMicrophone)
library.add(faMagnifyingGlass)

const app = createApp(App)
app.use(router)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
