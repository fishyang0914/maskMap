<script>
import { mapGetters, mapActions } from 'vuex';
export default {
    components: {
    },
    data() {
        return {
            name: 'this is home page'
        }
    },
    computed: {
        ...mapGetters([
            'userInfo'
        ]),
    },
    methods: {
        ...mapActions([
            'setUserInfo',
        ]),
    },
    mounted() {
        const userInfo = {
            name: 'fish'
        }
        this.setUserInfo(userInfo)
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