// 引入vue
import Vue from 'vue';
//引入PC端常用UI组件插件IView UI
import iView from 'iview';
// 引入vue前端路由插件
import VueRouter from 'vue-router';
// 引入App.vue组件
import App from './App.vue';
// 引入路由配置
import router from './router.js';
// 引入http.js
import http from './utils/http.js';
// 引入vuex状态管理
import store from './store';
// 引入全局事件总线
import changeAvatarModalControl from './bus/changeAvatarModalControl.js';
// 引入全局事件总线
import changeProfileControl from './bus/changeProfileControl.js';
// 引入全局过滤器
import yiwan_filter from './filters/yiwan.js';
import riqi_filter from './filters/riqi.js';
import ShowLoadingImage from './components/show-loading-image/show-loading-image.vue';

//关闭Vue的生产提示
Vue.config.productionTip = false;

// 使用路由插件
Vue.use(VueRouter);
// 使用UI插件
Vue.use(iView);
// 使用头像管理插件MODAL框（自己编写的）
Vue.use(changeAvatarModalControl);
// 使用用户资料管理插件抽屉（自己编写的）
Vue.use(changeProfileControl);
// 使用全局性质的图片loading小组件
Vue.component('ShowLoadingImage',ShowLoadingImage);

// 使用全局过滤器
Vue.use(yiwan_filter);
Vue.use(riqi_filter);

// 将http对象写在Vue的原型上
Vue.prototype.$http = http;


// 实例化Vue
new Vue({
    render: h => h(App),
    // 路由
    router,
    store
}).$mount('#app');
