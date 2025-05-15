import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from './router'
import App from './App.vue'
import './assets/main.css'

// 导入属性组件
import { registerPropertyComponents } from './components/editor/property'
import TableProperties from './components/elements/table/TableProperties.vue'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(ElementPlus)

// 注册属性面板组件
registerPropertyComponents(app)

// 注册元素属性编辑组件
app.component('table-properties', TableProperties)

app.mount('#app') 