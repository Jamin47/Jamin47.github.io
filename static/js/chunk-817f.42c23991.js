(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-817f"],{"7xpE":function(e,t,i){},FTNH:function(e,t,i){"use strict";i.r(t);var a=i("MfIo"),n={data:function(){return{timeChartObj:{isShow:!1,timeOut:null,lineLeft:0,timelineWidth:0,viewNodeRange:{num:48,activeNum:5},timeNodeRange:[],activeTimeNode:""},data:[]}},computed:{layoutConfig:function(){return this.$store.getters.layoutConfig},isCollapse:function(){return this.$store.getters.isCollapse}},mounted:function(){this.timeChartObj.timelineWidth=this.$refs._timeline.offsetWidth-60},methods:{initFn:function(e){var t=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];this.countPxOfTimeFn(e.startTime,e.endTime,this.timeChartObj.timelineWidth),i&&i.length&&i.forEach(function(e){e.deviceFileDetails&&e.deviceFileDetails.length&&e.deviceFileDetails.forEach(function(e){e.customStyle=t.fileOfView(e)})}),this.data=i},countPxOfTimeFn:function(e,t,i){var a=new Date(e).getTime(),n=(new Date(t).getTime()-a)/i;this.timeChartObj.timeNodeRange=this.createTimeUnitListByTimeRange(e,t,n)},createTimeUnitListByTimeRange:function(e,t,i){var n=new Date(e).getTime(),s=new Date(t).getTime(),l=[],o=n;for(l.push(Object(a.d)(new Date(o),"yyyy-MM-dd hh:mm:ss"));o<s;)o+=i,l.push(Object(a.d)(new Date(o),"yyyy-MM-dd hh:mm:ss"));return l[l.length-1]=Object(a.d)(new Date(s),"yyyy-MM-dd hh:mm:ss"),l},fileTimeChartMoveFn:function(e,t){var i=80;"top"===this.layoutConfig.navType?i=0:this.isCollapse||"left"!==this.layoutConfig.navType||(i=220),this.timeChartObj.lineLeft=e.clientX-280-i;var a=this.timeChartObj.lineLeft-100;this.timeChartObj.activeTimeNode=this.timeChartObj.timeNodeRange[a]},fileOfView:function(e){var t=0,i=0;if(e.startTime&&e.endTime){for(var a=!0,n=0,s=0,l=new Date(e.startTime).getTime(),o=new Date(e.endTime).getTime(),r=0;r<this.timeChartObj.timeNodeRange.length;r++){var c=this.timeChartObj.timeNodeRange[r],h=new Date(c).getTime();l>h&&(n=r),l===h&&(n=r,a=!1),o>=h&&(s=r)}t=a?n+1:n,i=s-n}return"width: "+i+"px;left: "+t+"px;"},startPalyAllFn:function(){var e=this;this.$parent.clearVideoFn(),1===this.$parent.videoOperateConfig.playMode?(this.$parent.videoOperateConfig.windowNum=1,this.startPlayFn(this.data[0],0)):this.data.forEach(function(t,i){e.startPlayFn(t,i)})},startPlayFn:function(e,t){this.$parent.startPlayFn&&(this.initActiveTimeFn(),this.$parent.startPlayFn(e,t),e.deviceFileDetails&&e.deviceFileDetails.length&&this.$set(e,"activeTime",e.deviceFileDetails[0].startTime))},initActiveTimeFn:function(){var e=this;this.data.forEach(function(t){e.$set(t,"activeTime",null)})},delChanneLActiveTimeFn:function(e){var t=this;this.data.forEach(function(i){i.channelId===e&&t.$set(i,"activeTime",null)})},controlFn:function(e,t,i){var a=this;if(this.$parent.fileTimeControlFn)if(this.initActiveTimeFn(),this.$parent.clearVideoFn(),1===this.$parent.videoOperateConfig.playMode){var n=this.data[e],s=n.deviceFileDetails[t];this.$set(n,"activeTime",s.startTime),this.$parent.fileTimeControlFn(n,s,i),this.$parent.videoOperateConfig.windowNum=1}else this.data.forEach(function(e){if(e.deviceFileDetails&&e.deviceFileDetails[t]){var n=e.deviceFileDetails[t];a.$set(e,"activeTime",n.startTime),a.$parent.fileTimeControlFn(e,n,i)}})}}},s=(i("uu7x"),i("ZrdR")),l=Object(s.a)(n,function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"fileTimeChart-view"},[i("div",{staticClass:"fileTimeChart-timeline"},[i("div",{ref:"_timeline",staticClass:"timeline-content"},e._l(e.timeChartObj.viewNodeRange.num,function(e){return i("div",{key:e,staticClass:"range-item",style:e%2==0&&"height: 5px;"})}))]),e._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:e.data.length,expression:"data.length"}],staticClass:"fileTimeChart-content",on:{mousemove:function(t){e.fileTimeChartMoveFn(t)}}},e._l(e.data,function(t,a){return i("div",{key:t.channelId,staticClass:"content-item"},[i("div",{staticClass:"item-title .text-ellipsis"},[e._v(e._s(t.channelName))]),e._v(" "),e._e(),e._v(" "),t.deviceFileDetails&&t.deviceFileDetails.length?i("div",{staticClass:"item-view"},e._l(t.deviceFileDetails,function(n,s){return i("div",{key:s,staticClass:"time-item",class:t.activeTime&&t.activeTime===n.startTime&&"active-color",style:n.customStyle,on:{click:function(t){t.stopPropagation(),e.controlFn(a,s,e.timeChartObj.activeTimeNode)}}})})):e._e()])})),e._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:e.timeChartObj.activeTimeNode,expression:"timeChartObj.activeTimeNode"}],staticClass:"fileTimeChart-line",style:"left: "+e.timeChartObj.lineLeft+"px;"},[i("div",[e._v(e._s(e.timeChartObj.activeTimeNode))])])])},[],!1,null,"4a52b9d5",null);l.options.__file="FileTimeChart.vue";t.default=l.exports},uu7x:function(e,t,i){"use strict";var a=i("7xpE");i.n(a).a}}]);