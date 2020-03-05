import axios from "axios";

// 取得資料
export const getApiRepo = param => {
    return axios.get(`/users/${param.userId}/repos`)
};

// 藥房資料
export const getApiPhamacyList = () => {
    return axios.get(`https://raw.githubusercontent.com/kiang/pharmacies/master/json/points.json`)
};