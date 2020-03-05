import L from 'leaflet';

const iconsConfig = {
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
}

const icons = {
    green: new L.Icon({
        iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
        ...iconsConfig,
    }),
    grey: new L.Icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-grey.png',
        ...iconsConfig,
    }),
}

const osmConfig = {
    center: [25.03, 121.55],
    zoom: 13,
    maxZoom: 18,
    popupHtml(item) {
        return `<strong>${item.name}</strong> <br>
        口罩剩餘：<strong>成人 - ${item.mask_adult ? `${item.mask_adult} 個` : '未取得資料'}/ 兒童 - ${item.mask_child ? `${item.mask_child} 個` : '未取得資料'}</strong><br>
        地址: <a href="https://www.google.com.tw/maps/place/${item.address}" target="_blank">${item.address}</a><br>
        電話: ${item.phone}<br>
        <small>最後更新時間: ${item.updated}</small>`
    }
}

const osm = {
    map: {},
    initMap() {
        this.map = L.map('map', {
            center: osmConfig.center,    // 初始位置
            zoom: osmConfig.zoom,   // 初始大小
        });
        
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: osmConfig.maxZoom // 縮放大小
        }).addTo(this.map);
    },
    addMapMarker(x, y, item) {
        const icon = item.mask_adult || item.mask_child ? icons.green : icons.grey;
        L.marker([y, x], {
            icon,
        }).addTo(this.map).bindPopup(osmConfig.popupHtml(item));
    },
    removeMapMarker() {
        this.map.eachLayer((layer) => {
            if (layer instanceof L.Marker) {
                this.map.removeLayer(layer);
            }
        });
    },
    pinTo(x, y, item) {
        const icon = item.mask_adult || item.mask_child ? icons.green : icons.grey;
        this.map.panTo(new L.LatLng(y, x));
        L.marker([y, x], {
            icon,
        }).addTo(this.map).bindPopup(osmConfig.popupHtml(item)).openPopup();
    },
};

export default osm