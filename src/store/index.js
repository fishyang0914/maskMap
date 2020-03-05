import Vue from 'vue';
import Vuex from 'vuex';
import state from "./state";
import getters from "./getters";
import actions from "./actions";
import mutations from "./mutations";
import vueCookie from "../lib/VueCookie.js";

Vue.use(Vuex);

let vuex = new Vuex.Store({
    state,
    getters,
    actions,
    mutations,
})

vuex.$cookie = vueCookie;

export default vuex