(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-572e"],{JyS4:function(t,a,n){"use strict";n.r(a);var i=n("cfOQ"),r=n.n(i),e=n("ZN1E"),o=n.n(e),s={name:"AlarmDistribution",props:{alarmDistributionDataLoading:{type:Boolean,default:!1},distributionData:{type:Array,default:function(){return[]}}},data:function(){return{markerList:[]}},watch:{distributionData:function(t){(t.length>0||!this.alarmDistributionDataLoading)&&this.initMap()}},mounted:function(){},methods:{initMap:function(){var t=new r.a.Map("map");t.centerAndZoom(new r.a.Point(105.39,36.55),5),t.enableScrollWheelZoom(!0),this.createMarkersFn(this.distributionData,t)},createMarkersFn:function(t,a){var i=this;this.markerList=[];var e=n("rNui");t.forEach(function(t){var a=new r.a.Icon(e,new r.a.Size(30,30)),n=new r.a.Point(t.longitude,t.latitude),o=new r.a.Marker(n,{icon:a});i.markerList.push(o)}),new o.a.MarkerClusterer(a,{markers:this.markerList})}}},c=(n("S5Rc"),n("ZrdR")),u=Object(c.a)(s,function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"map-container",attrs:{id:"map"}})},[],!1,null,"45a21caf",null);u.options.__file="alarmDistribution.vue";a.default=u.exports},RtIc:function(t,a,n){},S5Rc:function(t,a,n){"use strict";var i=n("RtIc");n.n(i).a},rNui:function(t,a,n){t.exports=n.p+"static/img/16_jc_lx_ydw_tc_bj.6b589d9.png"}}]);