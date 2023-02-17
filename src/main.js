import { createApp } from 'vue'
import App from './App.vue'

import './assets/main.css'
import Notifications from '@kyvg/vue3-notification'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons'
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

library.add(faArrowRight, faArrowLeft, faChevronLeft, faCircleExclamation, faTriangleExclamation, faCircleCheck, faXmark)

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .use(Notifications)
    .mount('#app')
