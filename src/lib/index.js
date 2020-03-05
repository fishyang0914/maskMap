export default {
    pointRandom(minNum, maxNum) {
        return Math.floor( Math.random() * (maxNum - minNum + 1) ) + minNum;
    },
    getOffset: el => {
        const box = word.getBoundingClientRect();
        return {
          top: box.top + window.pageYOffset - document.documentElement.clientTop,
          left: box.left + window.pageXOffset - document.documentElement.clientLeft
        }
    },
    /**
     * uuid產生
     */
    uuid: () => {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {var r = Math.random()*16|0,v=c=='x'?r:r&0x3|0x8;return v.toString(16);});
    },
    /**
     * 陣列分組
     * @param {array} data
     * @param {number} cols
     * @returns {array}
     */
    groupArray : (data, cols) => {
        const arrItem = data.reduce((arr, item) => {
            arr.current.push(item);
            if (arr.current.length === cols) {
                arr.list.push(arr.current);
                arr.current = [];
            }
            return arr;
        }, { list: [], current: [] });

        if (arrItem.current.length) {
            arrItem.list.push(arrItem.current);
        }
        return arrItem.list;
    },
    /**
     * 回傳時分秒
     * @param {string}
     * @returns {string} output time string
     */
    resultFormat: result => {
        let h = result / 3600 | 0;
        let m = (result / 60 % 60) | 0;
        let s = (result % 60) | 0;
        if (h < 10) h = `0${h <= 0 ? 0 : h}`;
        if (m < 10) m = `0${m <= 0 ? 0 : m}`;
        if (s < 10) s = `0${s <= 0 ? 0 : s}`;
        return `${h} : ${m} : ${s}`;
    },
    /**
     * 浮點數相加
     * @param {number, number}
     * @returns {number}
     */
    accAdd: (arg1, arg2) => {
        if (isNaN(arg1)) {
            arg1 = 0;
        }
        if (isNaN(arg2)) {
            arg2 = 0;
        }
        arg1 = Number(arg1);
        arg2 = Number(arg2);
        var r1, r2, m, c;
        try {
            r1 = arg1.toString().split(".")[1].length;
        }
        catch (e) {
            r1 = 0;
        }
        try {
            r2 = arg2.toString().split(".")[1].length;
        }
        catch (e) {
            r2 = 0;
        }
        c = Math.abs(r1 - r2);
        m = Math.pow(10, Math.max(r1, r2));
        if (c > 0) {
            var cm = Math.pow(10, c);
            if (r1 > r2) {
                arg1 = Number(arg1.toString().replace(".", ""));
                arg2 = Number(arg2.toString().replace(".", "")) * cm;
            } else {
                arg1 = Number(arg1.toString().replace(".", "")) * cm;
                arg2 = Number(arg2.toString().replace(".", ""));
            }
        } else {
            arg1 = Number(arg1.toString().replace(".", ""));
            arg2 = Number(arg2.toString().replace(".", ""));
        }
        return (arg1 + arg2) / m;
    },
    /**
     * 浮點數相減
     * @param {number, number}
     * @returns {number}
     */
    accSub: (arg1, arg2)=> {
        if (isNaN(arg1)) {
            arg1 = 0;
        }
        if (isNaN(arg2)) {
            arg2 = 0;
        }
        arg1 = Number(arg1);
        arg2 = Number(arg2);

        var r1, r2, m, n;
        try {
            r1 = arg1.toString().split(".")[1].length;
        }
        catch (e) {
            r1 = 0;
        }
        try {
            r2 = arg2.toString().split(".")[1].length;
        }
        catch (e) {
            r2 = 0;
        }
        m = Math.pow(10, Math.max(r1, r2));
        n = (r1 >= r2) ? r1 : r2;
        return ((arg1 * m - arg2 * m) / m).toFixed(n);
    },
    
}