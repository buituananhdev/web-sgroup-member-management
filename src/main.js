import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import Notifications from '@kyvg/vue3-notification'
import { auth } from './api/auth';
const app = createApp(App);

app.provide('auth', auth);
app.use(createPinia())
app.use(router)
app.use(Notifications)
app.mount('#app')
