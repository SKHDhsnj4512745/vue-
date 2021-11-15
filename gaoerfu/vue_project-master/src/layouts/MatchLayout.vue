<template>
    <div>
        <Layout>
                <Sider hide-trigger :style="{background: '#fff'}">
                    <Menu :active-name="$store.state.routerStore.subcolumn" theme="light" width="auto" :open-names="['1']" @on-select="selectMenuHandler">
                        <menu-item name="overviewofevents">赛事概览</menu-item>
                        <menu-item name="tourmath">巡回赛</menu-item>
                        <menu-item name="pointrace">积分赛</menu-item>
                        <menu-item name="applyforacompetition">申请举办赛事</menu-item>
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