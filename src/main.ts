import createComp from '@/dant/index'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
const app = createApp(App)
// 全局挂载
createComp(app)
app.use(store).use(router).mount('#app')
