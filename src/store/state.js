import vueCookie from "../lib/VueCookie.js";
export default {
    userInfo: vueCookie.get('userInfo') || {},
    repo: [],
    updateFlag: false,
    pharmacyList: [],
}