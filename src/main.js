import { createApp } from 'vue'
import './style.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './router'

import * as ElIconList from '@element-plus/icons-vue'
const app = createApp(App).use(router).use(ElementPlus)
// 注册icon
for (const name in ElIconList) {
  app.component(name, ElIconList[name])
}

app.mount('#app')
