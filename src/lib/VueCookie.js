import Cookies from 'js-cookie';
const NameList = ['userInfo'];
// const expires = new Date(new Date().getTime() + 60 * 60 * 1000);
const VueCookie = {
    install: function (Vue) {
        Vue.prototype.$cookie = this;
        window.clog = () => {
            NameList.forEach(el=> console.log(`${el}:`, JSON.parse(Cookies.get(el))))
        };
        window.logOut = () =>{
            NameList.forEach(el=> Cookies.remove(el));
            window.location.replace("/");
        }
    },
    set: (name, value) => {
        if(NameList.indexOf('name')!== -1) NameList.push(name);
        Cookies.set(name, value, { expires: 1 });
    },
    get: (name) => {
        const val = Cookies.get(name);
        try {
            return JSON.parse(val);
        } catch (err) {
            // console.error(err);
            return undefined;
        }
    },
    remove: (name) => {
        Cookies.remove(name);
    }
}
export default VueCookie;