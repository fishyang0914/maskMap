<script>
import lib from 'lib'
export default {
    components: {
    },
    data() {
        return {
            name: 'this is header',
            linkList: [
                'home', 'about', 'contact', 'map'
            ],
            activeIndex: '3'
        }
    },
    computed: {
        
    },
    methods: {
        goTo(link) {
            this.$router.push({ name: link })
        }
    },
    mounted() {

    }
}
</script>
<template>
    <div>
        <el-tag type="success">{{name}}</el-tag>
        <br />
        <el-menu mode="horizontal" 
        :default-active="activeIndex" 
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b">
            <el-menu-item v-for="(v, key) in linkList" :key="v" :index="key.toString()" @click="goTo(v)">{{v}}</el-menu-item>
        </el-menu>
        <!-- <router-link to="/">home</router-link>
        <router-link to="/about">about</router-link>
        <router-link to="/contact">contact</router-link> -->
    </div>
</template>
<style lang='scss' scoped>

</style>