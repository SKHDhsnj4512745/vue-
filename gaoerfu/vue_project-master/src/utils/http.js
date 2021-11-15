import axios from 'axios';
import url from 'url';
import router from '../router.js';
import MOCKAPI from './MOCKAPI.js';

// 创建axios实例
var instance = axios.create({
    baseURL: '/api'
});
// 添加响应拦截器
instance.interceptors.response.use(function (response) {
    //  在发送请求之前做些什么
    return response;
}, function (error) {
    // 对请求错误做些什么
    // 结果我们要看err属性是不是-4，如果是-4表示没有权限
    if(error.response.status == 401){
        router.push({'name':'login'});
    }
    // 得到路径部分，去掉了querystring部分
    const pathname = url.parse(error.config.url).pathname;
    // 找策略对象，执行它
    if(typeof MOCKAPI[pathname] == 'function'){
        // 执行
        return {
            data : MOCKAPI[pathname]()
        };
    }
    // 对响应错误做点什么
    // 当失败的时候，就要考虑转到模拟接口
    return Promise.reject(error);
});
export default instance;