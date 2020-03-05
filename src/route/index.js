import Vue from 'vue'
import Router from 'vue-router'
import routing from "./routing.js";

Vue.use(Router)

const router =  new Router({
    mode: 'hash',
    ...routing
})

export default router