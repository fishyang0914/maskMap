<script>
import { mapGetters, mapActions } from 'vuex';
export default {
    components: {
    },
    data() {
        return {
            name: 'this is about page'
        }
    },
    computed: {
        ...mapGetters([
            'userInfo'
        ]),
    },
    methods: {
        
    },
    mounted() {
        
    }
}
</script>
<template>
    <div>
        <h1>{{`${name}[user: ${userInfo.name}]`}}</h1>
    </div>
</template>
<style lang='scss' scoped>

</style>