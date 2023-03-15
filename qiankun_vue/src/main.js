import './public-path'
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import routes from './router'
import store from './store'
import actions from './action'

Vue.use(VueRouter)

Vue.config.productionTip = false
let instance = null

function render(props = {}) {
  const { container, routerBase } = props

  const router = new VueRouter({
    mode: 'history',
    base: window.__POWERED_BY_QIANKUN__ ? routerBase : process.env.BASE_URL,
    routes
  })

  instance = new Vue({
    router,
    store,
    render: (h) => h(App)
  }).$mount(container ? container.querySelector('#app') : "#app")
}

if (!window.__POWERED_BY_QIANKUN__) {
  render()
}
export async function bootstrap() {
  console.log('[vue] 子应用 app bootstraped');
}
export async function mount(props) {
  console.log('[vue] 子应用 props from main framework', props)
  // 接受主应用的props
  actions.setActions(props);
  render(props)
}

export async function unmount() {
  instance.$destroy()
  instance.$el.innerHTML = ''
  instance = null
}