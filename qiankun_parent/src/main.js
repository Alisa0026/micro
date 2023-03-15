import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { registerMicroApps, start } from 'qiankun';
import appConfig from './micro_app';
import action from './action'

createApp(App).use(store).use(router).mount('#app')


// 注册子应用
registerMicroApps(appConfig, {
    beforeLoad: app => {
        console.log('before load app.name====>>>>>', app.name)
    },
    beforeMount: [
        app => {
            console.log('[LifeCycle]主应用 before mount %c%s', 'color: green;', app.name);
        },
    ],
    afterMount: [
        app => {
            console.log('[LifeCycle]主应用 after mount %c%s', 'color: green;', app.name);
        }
    ],
    afterUnmount: [
        app => {
            console.log('[LifeCycle]主应用 after unmount %c%s', 'color: green;', app.name);
        },
    ],
});
// 启动qiankun
start();