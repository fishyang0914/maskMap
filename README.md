# mask map

## cookie 使用説明
vue, vuex都有綁上變數$cookie，所以可以這樣用：
```javascript
    this.$cookie.set("[name]", data); // 寫入 cookie 
    this.$cookie.get("[name]"); // 讀取 cookie 
    this.$cookie.remove("[name]"); // 刪除 cookie
```
## osm 使用説明
使用leaflet搭配openStreetMap圖資封裝：
```javascript
    import osm from 'lib/osm'
    osm.initMap()   // 地圖初始化
    osm.pinTo(x, y, item)   // 將位置標記在地圖上並popup內容
    osm.addMapMarker(x, y, item)    // 新增標記
    osm.removeMapMarker()   // 移除所有標記
```

#### Vue Development
```
npm run dev
```
#### Vue build
```
npm run build
```