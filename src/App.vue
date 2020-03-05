<script>
import headerCom from 'components/_common/header'
import footerCom from 'components/_common/footer'
export default {
    components: {
        headerCom,
        footerCom
    },
    data() {
        return {
            
        }
    },
    computed: {
        
    },
    methods: {
        
    },
    mounted() {
        
    }
}
</script>
<template>
    <div id="app">
        <header-com />
        <router-view />
        <footer-com />
    </div>
</template>
<style lang='scss' scoped>
    #app{
        position: relative;
        width: 100%;
        margin: 0 auto;
        height: 100%;
        overflow: hidden;
    }
</style>