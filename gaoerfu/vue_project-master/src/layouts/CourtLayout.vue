<template>
    <div>
        <Layout>
                <Sider hide-trigger :style="{background: '#fff'}">
                    <Menu :active-name="$store.state.routerStore.subcolumn" theme="light" width="auto" :open-names="['1']" @on-select="selectMenuHandler">
                        <menu-item name="overviewofgolfcourse">球场概览</menu-item>
                        <menu-item name="operationworld">运营天地</menu-item>
                        <menu-item name="stadiumarea">球场专区</menu-item>
                    </Menu>
                </Sider>
                <Layout :style="{padding: '0 24px 24px'}">
                    <Breadcrumb />
                    <Content :style="{padding: '24px', minHeight: '280px', background: '#fff'}">
                        <router-view />
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    </div>
</template>

<script>
import Breadcrumb from './Breadcrumb.vue';
export default {
    components: {
        Breadcrumb
    },
    methods: {
        selectMenuHandler(name){
            this.$router.push({
                name
            });
        }
    }
};
</script>

<style lang="less" scoped>

</style>