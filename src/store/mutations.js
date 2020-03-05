export default{
    setUserInfo(state, data) {
        state.userInfo = data
        this.$cookie.set("userInfo", data);
    },
    getRepo(state, res) {
        state.repo = [...state.repo, ...res];
    },
    setUpdateFlag(state, bool) {
        state.updateFlag = bool;
    },
    getPhamacyList(state, data) {
        state.pharmacyList = data;
    },
}