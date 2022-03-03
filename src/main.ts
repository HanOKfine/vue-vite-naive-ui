import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from "./store"
import naive from "./plugins/naiveui";
createApp(App).use(store).use(router).use(naive).mount('#app')
