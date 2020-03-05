<script>
import { mapGetters, mapActions } from 'vuex';
import cityList from 'assets/cityList.json'
// import L from 'leaflet';
import osm from 'lib/osm'


export default {
    components: {
    },
    data() {
        return {
            cityList,
            areaList: [],
            city: '',
            area: '',
            pharmacyResultList: []
        }
    },
    computed: {
        ...mapGetters([
            'pharmacyList'
        ]),
    },
    watch: {
        pharmacyList(v) {
            // console.log(v)
        },
        city(v) {
            this.areaList = this.cityList.find(v => v.CityName === this.city).AreaList
            this.area = ''
        },
    },
    methods: {
        ...mapActions([
            'getPhamacyList',
        ]),
        updateMarker() {
            this.pharmacyResultList = this.pharmacyList.filter(v => {
                if(this.area) return v.properties.town === this.area
                return v.properties.county === this.city
            })
            this.pharmacyResultList.forEach(obj => {
                const { properties, geometry } = obj;
                osm.addMapMarker(
                    geometry.coordinates[0],
                    geometry.coordinates[1],
                    properties,
                )
            })
            this.panTo(this.pharmacyResultList[0]);
        },
        panTo(pharmacy) {
            const { properties, geometry } = pharmacy;
            osm.panTo(geometry.coordinates[0], geometry.coordinates[1], properties);
        },
        removeMarker() {
            osm.removeMapMarker();
        },
        updateSelect() {
            this.removeMarker();
            this.updateMarker();
        },
    },
    created() {
        this.getPhamacyList()
    },
    mounted() {
        osm.initMap()
    }
}
</script>
<template>
    <div>
        <div class="selectArea">
            <el-select v-model="city" @change="updateSelect" placeholder="請選擇城市">
                <el-option value="" disabled selected>--請選擇城市--</el-option>
                <el-option v-for="obj in cityList" :value="obj.CityName" :key="obj.CityEngName">{{obj.CityName}}</el-option>
            </el-select>
            <el-select v-model="area" @change="updateSelect" placeholder="請選擇區域">
                <el-option value="" disabled selected>--請選擇區域--</el-option>
                <el-option v-for="obj in areaList" :value="obj.AreaName" :key="obj.ZipCode">{{obj.AreaName}}</el-option>
            </el-select>
        </div>
        
        <div id="map"></div>

        <div class="pharmacyList">
            <ul>
                <li v-for="(obj, key) in pharmacyResultList" 
                :key="key" 
                :class="{ 
                    'highlight': obj.properties.mask_adult && obj.properties.mask_child,
                    'adult': obj.properties.mask_adult,
                    'child': obj.properties.mask_child
                 }"
                @click="panTo(obj)">
                    <h3>{{ obj.properties.name }}</h3>
                    <p class="mb-0">
                        成人口罩：{{ obj.properties.mask_adult}} | 兒童口罩：{{ obj.properties.mask_child}}
                    </p>
                    <p class="mb-0">地址：<a :href="`https://www.google.com.tw/maps/place/${obj.properties.address}`"
                    target="_blank" title="Google Map">
                        {{ obj.properties.address }}</a>
                    </p>
                </li>
            </ul>
        </div>
    </div>
</template>
<style lang='scss' scoped>
#map {
  height: 70vh;
  width: 70vw;
  float: left;
}
.pharmacyList {
    height: 70vh;
    padding: 10px 10px;
    overflow: scroll;
    li {
        background-color: #E9E9EB;
        margin: 2px;
        padding: 10px;
        border-radius: 5px;
        &.adult{
            background-color: #FDE2E2;
        }
        &.child{
            background-color: #FAECD8;
        }
        &.highlight{
            background-color: #E1F3D8;
        }
    }
}
.selectArea {
    margin: 10px auto;
}
</style>