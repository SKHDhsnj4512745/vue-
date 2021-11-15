<template>
    <div class="header_wrap">
        <Layout>
            <Header>
                <!-- @on-select="selectMenuHandler"决定点击那个带name的显示指定的组件 -->
                <!-- :active-name="$store.state.routerStore.column" 决定点击那个带name的并且，伪类active在它身上 -->
                <Menu mode="horizontal" theme="dark" :active-name="$store.state.routerStore.column" @on-select="selectMenuHandler">
                    <div class="layout-logo">
                        <img src="images/11.png" />
                    </div>
                    <div class="user_zone">
                        <!-- 气泡提示单击事件默认可以直接使用<Poptip></Poptip> -->
                        <Poptip trigger="click">
                            <!-- avatar计算属性返回的数据不为负性的，就显示这个标签，并且从服务器读取对应用户的头像 -->
                            <Avatar size="large" style="margin-right: 10px; "v-if="avatar != ''" :src="'http://127.0.0.1:3000/' + avatar" />
                            <span>
                                <!-- 读取对应用户的别名 -->
                                {{nickname}}
                            </span>
                            <!-- 使用iview里面的content插槽，一点击里面.user_zone就出现ul框  -->
                            <ul slot="content">
                                <li>
                                    <!-- 调用插件changeAvatarModalControl.js，插件里写了全局事件总线 -->
                                    <a href="javascript:;" @click="showModel">更改头像</a>
                                </li>
                                <li>
                                    <!-- 调用插件changeProfileControl.js，插件里写了全局事件总线 -->
                                    <a href="javascript:;" @click="showDrawer">我的信息</a>
                                </li>
                                <li>
                                    <a href="">充值</a>
                                </li>
                                <li>
                                    <a href="">站内信</a>
                                </li>
                                <li>
                                    <a href="http://localhost:8080/#/login">退出登陆</a>
                                </li>
                            </ul>
                        </Poptip>
                    </div>
                    <div class="layout-nav">
                        <menu-item name="index">
                            <Icon type="ios-home"></Icon>
                            首页
                        </menu-item>
                        <menu-item name="court">
                            <Icon type="ios-keypad"></Icon>
                            球场
                        </menu-item>
                        <menu-item name="match">
                            <Icon type="ios-navigate" ></Icon>
                            赛事
                        </menu-item>
                        <menu-item name="schedule">
                            <Icon type="ios-analytics"></Icon>
                            日程
                        </menu-item>
                    </div>
                </Menu>
            </Header>
            <router-view></router-view>
            <Footer class="layout-footer-center">
                2021-2022 &copy;&nbsp;&nbsp;李正
            </Footer>
        </Layout>
    </div>
</template>

<script>
export default {
    computed: {
        nickname(){
            return this.$store.state.me.nickname;
        },
        avatar(){
            return this.$store.state.me.avatar;
        }
    },
    // 这里面定义方法
    methods:{
        // <!-- 调用插件changeAvatarModalControl.js，插件里写了全局事件总线 -->
        showModel(){
            this.$changeAvatarModel.show();
        },
        // <!-- 调用插件changeProfileControl.js，插件里写了全局事件总线 -->
        showDrawer(){
            this.$changeProfileDrawer.show();
        },
        selectMenuHandler(name){
            this.$router.push({'name': name});
        }
    }
};
</script>

<style lang="less">
    /* 去掉网页过长浏览器出现竖直滚动条 */
    *{
        margin: 0;
        padding: 0;
    }
    body{ overflow-y:hidden;}
    .header_wrap{
        /* min-width:1100px; */
    }
    .ivu-menu-dark.ivu-menu-horizontal .ivu-menu-item-active, .ivu-menu-dark.ivu-menu-horizontal .ivu-menu-item:hover, .ivu-menu-dark.ivu-menu-horizontal .ivu-menu-submenu-active, .ivu-menu-dark.ivu-menu-horizontal .ivu-menu-submenu:hover{
        background:-webkit-linear-gradient(bottom, #bb8aa8, #c6cfca 50%, #523a06);
    }
    .layout{
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
    }
    .ivu-layout-header{
        height: 60px;
        background:-webkit-linear-gradient(left, #bb8aa8, #c6cfca 20%, #523a06);
        /* 去掉整个menu标签的背景颜色 */
        .ivu-menu-dark{
            background:none;
        }
    }
    .layout-logo{
        width: 300px;
        height: 40px;
        
        border-radius: 3px;
        float: left;
        position: relative;
        top: 10px;
        left: 20px;
        img{
            height:100%;
        }
    }
    .layout-nav{
        width: 420px;
        float:right;
    }
    .user_zone{
        float:right;
        width:120px;
        cursor: pointer;
        span{
            color:#ccc;
        }
        .ivu-poptip-body{
            padding:2px;
        }
        ul{
            list-style:none;
            li{
                font-size:16px;
                line-height: 24px;
                border-bottom:1px dotted #eee;
                padding:10px 6px;
                a{
                    color:#333;
                    display: block;
                    height:30px;
                    line-height: 30px;
                    &:hover{
                        background:#eee;
                    }
                }
            }
        }
        
    }
    .layout-footer-center{
        text-align: center;
        font-size: large;
    }
</style>