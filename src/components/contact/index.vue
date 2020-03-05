<script>
import { mapGetters, mapActions } from 'vuex';
export default {
    components: {
    },
    data() {
        return {
            userId: 'vuejs',
            vb: null,
        }
    },
    computed: {
        ...mapGetters([
            'repo',
            'updateFlag',
        ]),
    },
    watch: {
        updateFlag(v) {
           if(v) this.getRepo(this.userId)
        }
    },
    methods: {
        ...mapActions([
            'getRepo',
            'setUpdateFlag',
        ]),
    },
    created() {
        this.getRepo(this.userId)
    },
    mounted() {
        // this.getRepo(this.userId)
        this.vb = this.$refs.vb
        this.vb.addEventListener('scroll', () => {
            if(this.$refs.vbc.clientHeight - this.$refs.vb.scrollTop <= 80 ) this.setUpdateFlag(true)
        }, false)
    }
}
</script>
<template>
    <article>
        <h2 class="title"> Infinite Scroll Demo</h2>
        <div class="viewBox" ref="vb">
            <div ref="vbc">
                <section v-for="(obj, idx) in repo" :key="obj.id + idx">
                    <h3>Title: {{obj.name}}</h3>
                    <p>Desc: {{obj.description}}</p>
                    <p>Url: {{obj.html_url}}</p>
                </section>
            </div>
        
    </div>
    </article>
</template>
<style lang='scss' scoped>
.title {
    margin-bottom: 10px;
}
.viewBox {
    height: 77px;
    overflow: auto;
}
</style>
