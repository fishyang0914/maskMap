import { getApiRepo, getApiPhamacyList } from "api";
export default {
    setUserInfo({ commit }, data) {
        commit('setUserInfo', data);
    },
    async getRepo({ commit, dispatch }, userId) {
        try {
            const res = await getApiRepo({ userId });

            commit('getRepo', res.data);
            dispatch('setUpdateFlag', false);
        } catch (error) {
            console.error('[Error] getRepo', error)
        }
    },
    setUpdateFlag({ commit }, bool) {
        commit('setUpdateFlag', bool);
    },
    async getPhamacyList({ commit, dispatch }, userId) {
        try {
            const res = await getApiPhamacyList();
            // console.log(res.data)
            commit('getPhamacyList', res.data.features);
        } catch (error) {
            console.error('[Error] getPhamacyList', error)
        }
    },
}