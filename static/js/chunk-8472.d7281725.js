(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-8472"],{briW:function(a,e,t){},kPe3:function(a,e,t){"use strict";var n=t("briW");t.n(n).a},vRT2:function(a,e,t){"use strict";t.r(e);var n={data:function(){return{elNorms:this.$store.getters.elNorms,AMapGL:null,gapdeMap:null,carMarker:null,polyline:null,passedPolyline:null,searchValue:"",placeSearch:null}},watch:{searchValue:function(a){this.placeSearch.search(a)}},mounted:function(){this.createAMap()},methods:{createAMap:function(){var a=this;a.AMapGL=AMap,a.AMapGL.plugin("AMap.MoveAnimation",function(){a.gapdeMap=new a.AMapGL.Map("amap-container",{resizeEnable:!0,center:[105.389814,38.311781],zoom:4,rotation:-.7908261543741522,viewMode:"3D",buildingAnimation:!0})}),a.gapdeMap.plugin(["AMap.Scale"],function(){var e=new a.AMapGL.Scale({position:"RB",offset:[10,10]});a.gapdeMap.addControl(e)}),a.gapdeMap.plugin(["AMap.ToolBar"],function(){var e=new a.AMapGL.ToolBar({position:"RT",offset:[10,60]});a.gapdeMap.addControl(e)}),a.AMapGL.plugin(["AMap.PlaceSearch"],function(){a.placeSearch=new a.AMapGL.PlaceSearch({city:"全国",map:a.gapdeMap})})},createCarMarkerFn:function(){this.carMarker=new this.AMapGL.Marker({map:this.gapdeMap,position:this.$parent.staticData[0],icon:"https://a.amap.com/jsapi_demos/static/demo-center-v2/car.png",offset:new this.AMapGL.Pixel(-13,-26)})},createLocusFn:function(){this.polyline=new this.AMapGL.Polyline({map:this.gapdeMap,path:this.$parent.locusData,showDir:!0,strokeColor:"#409EFF",strokeOpacity:1,strokeWeight:10,strokeStyle:"solid"}),this.passedPolyline=new this.AMapGL.Polyline({map:this.gapdeMap,strokeColor:"#67C23A",strokeOpacity:0,strokeWeight:8})},movingCarFn:function(){var a=this;a.carMarker.on("moving",function(e){a.passedPolyline.setPath(e.passedPath)})},startAnimation:function(){var a=this.$parent.carInfoObj;"stop"===a.playStatus?this.carMarker.moveAlong(this.$parent.locusData,{duration:500,autoRotation:!0}):"pause"===a.playStatus&&this.carMarker.resumeMove(),a.playStatus="play"},pauesAnimation:function(){this.carMarker.pauseMove(),this.$parent.carInfoObj.playStatus="pause"},stopAnimation:function(){this.carMarker.stopMove(),this.$parent.carInfoObj.playStatus="stop"},clearMap:function(){this.gapdeMap.clearMap()},setFitView:function(){this.gapdeMap.setFitView()}}},i=(t("kPe3"),t("ZrdR")),o=Object(i.a)(n,function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{staticClass:"record-amap"},[t("div",{staticClass:"amap-page",attrs:{id:"amap-container"}}),a._v(" "),t("el-input",{staticClass:"map-search",attrs:{size:a.elNorms.size,clearable:"",placeholder:"全国搜索","prefix-icon":"el-icon-search"},model:{value:a.searchValue,callback:function(e){a.searchValue=e},expression:"searchValue"}})],1)},[],!1,null,"1dccf188",null);o.options.__file="record-amap.vue";e.default=o.exports}}]);