import Vue from 'vue';
import router from '../router.js';
export default {
    namespaced: true,
    state: {
        username: '',
        nickname: '',
        avatar: ''
    },
    mutations: {
        changeUsername(state, { username }) {
            state.username = username;
        },
        changeNickname(state, { nickname }) {
            state.nickname = nickname;
        },
        changeAvatar(state, { avatar }) {
            state.avatar = avatar;
        }
    },
    actions: {
        async checkMe({ commit }) {
            // 这里发送Ajax请求，请求服务器上的数据
            const resultObj = await Vue.prototype.$http.get('/me').then(data => data.data);
            // console.log(resultObj);
            // 没有登陆
            if (resultObj.err == -4) {
                // 编程式路由导航，没有登入还是跳转到login界面
                router.push({ 'name': 'login' });
                return;
            }
            // 解构
            const { nickname, username, avatar } = resultObj;
            // 上跳
            commit('changeNickname', { nickname });
            commit('changeUsername', { username });
            commit('changeAvatar', { avatar });
        }
    }
};