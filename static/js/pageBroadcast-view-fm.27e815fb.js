(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pageBroadcast-view-fm"],{2354:function(e,t,i){var o=i("da19");"string"===typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);var n=i("4f06").default;n("69d7a55f",o,!0,{sourceMap:!1,shadowMode:!1})},2622:function(e,t,i){"use strict";i.r(t);var o=i("8090"),n=i.n(o);for(var a in o)"default"!==a&&function(e){i.d(t,e,(function(){return o[e]}))}(a);t["default"]=n.a},6900:function(e,t,i){"use strict";i.d(t,"b",(function(){return n})),i.d(t,"c",(function(){return a})),i.d(t,"a",(function(){return o}));var o={uniIcons:i("7a8c").default,uniNumberBox:i("1f88").default},n=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("v-uni-view",{staticClass:"broadcast-fm-page"},[o("v-uni-view",{staticClass:"content-view"},[e.activeDev.length?o("v-uni-view",{staticClass:"device-list-view"},e._l(e.activeDev,(function(t,n){return o("v-uni-view",{key:t.terminalId,staticClass:"list-row flexbox flexbox-y-align"},[o("v-uni-image",{attrs:{src:i("7ea2"),mode:"scaleToFill"}}),o("v-uni-view",{staticClass:"text-ellipsis flexbox-flex1"},[e._v(e._s(t.terminalName))])],1)})),1):o("v-uni-view",{staticClass:"null-view"},[o("v-uni-image",{attrs:{src:i("37ba"),mode:""}}),o("v-uni-view",{staticClass:"null-view__tip"},[e._v("未选择播放设备，点击右上角添加或")]),o("v-uni-view",{staticClass:"null-view__button",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.pushDevFn.apply(void 0,arguments)}}},[e._v("立即添加")])],1)],1),o("v-uni-view",{staticClass:"operation-view"},[o("v-uni-view",{staticClass:"volume-view flexbox flexbox-y-align"},[o("v-uni-image",{attrs:{src:i("0228"),mode:""}}),o("v-uni-slider",{staticClass:"slider-view flexbox-flex1",attrs:{value:e.fmForm.volume},on:{changing:function(t){arguments[0]=t=e.$handleEvent(t),e.sliderChangeFn.apply(void 0,arguments)},change:function(t){arguments[0]=t=e.$handleEvent(t),e.sliderEndFn.apply(void 0,arguments)}}}),o("v-uni-view",{staticClass:"volume-text"},[e._v(e._s(e.fmForm.volume))])],1),o("v-uni-view",{staticClass:"play-view flexbox flexbox-y-align"},[o("v-uni-view",{staticClass:"resourc-view flexbox-flex1 text-ellipsis",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.pushResourceFn.apply(void 0,arguments)}}},[e._v(e._s(e.activeResourceData?e.activeResourceData.fmSourceName:"请选择电台"))]),e.fmForm.inTask?o("v-uni-image",{attrs:{src:i("b597"),mode:""},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.stopSubmit.apply(void 0,arguments)}}}):o("v-uni-image",{attrs:{src:i("8383"),mode:""},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.openPopoupFn("_playDurationPopoup")}}}),o("uni-icons",{staticStyle:{"margin-left":"50rpx"},attrs:{type:"plus",size:"24",color:"#666666"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.pushResourceFn.apply(void 0,arguments)}}})],1)],1),o("my-popoup",{ref:"_playDurationPopoup",staticClass:"popoup-view"},[o("v-uni-view",{staticClass:"popoup-title"},[e._v("播放时长（小时）")]),o("v-uni-view",{staticClass:"popoup-body flexbox flexbox-x-align"},[o("uni-number-box",{staticClass:"stepper",attrs:{value:e.playDurationObj.playDuration,min:1,max:24},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.stepperChange.apply(void 0,arguments)}}})],1),o("v-uni-view",{staticClass:"popoup-footer flexbox flexbox-x-justify"},[o("v-uni-view",{staticClass:"popoup-button button-gray",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.cancelPopoupFn("_playDurationPopoup")}}},[e._v("取消")]),o("v-uni-view",{staticClass:"popoup-button button-red",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.submitPopoupFn("_playDurationPopoup","playDurationObj","playDuration")}}},[e._v("确定")])],1)],1)],1)},a=[]},8090:function(e,t,i){"use strict";(function(e){var o=i("4ea4");i("a15b"),i("d81d"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i("c7e5"),a=o(i("93e3")),s=i("6195"),u=o(i("94dc")),r={components:{myPopoup:u.default},data:function(){return{fmForm:{inTask:!1,playType:"fmStatus",operationId:(0,s.uuid)(32,16),fmSourceId:null,fmSourceName:"",playDuration:2,volume:50},activeDev:[],activeResourceData:null,activeResourceId:null,playDurationObj:{isShow:!0,playDuration:2}}},onLoad:function(){this.socketFn()},onShow:function(){var e=this;e.activeDev=a.default.getters.playData.activeDev,uni.getStorage({key:"_resourceData",success:function(t){var i=t.data;"fm"===i.type&&(e.activeResourceId=i.activeResourceId,e.activeResourceData=JSON.parse(JSON.stringify(i.activeData)))},fail:function(t){e.activeResourceId=null,e.activeResourceData=null}})},onHide:function(){this.fmForm.inTask&&this.stopSubmit()},onUnload:function(){this.deleteResourceFn(),this.fmForm.inTask&&this.stopSubmit()},onNavigationBarButtonTap:function(e){this.pushDevFn()},methods:{sliderChangeFn:function(e){this.fmForm.volume=e.detail.value},sliderEndFn:function(e){if(this.fmForm.inTask){var t=this.activeDev.map((function(e){return e.deviceId}));(0,n.$http)("/app/live/updateVolume","post",{deviceIds:t.join(","),volume:this.fmForm.volume,operationId:this.fmForm.operationId})}},openPopoupFn:function(e){this.activeDev.length?this.activeResourceData?this.$refs[e].showStatus=!0:uni.showToast({title:"请选择播放电台！",duration:2e3,icon:"none"}):uni.showToast({title:"请选择播放设备！",duration:2e3,icon:"none"})},cancelPopoupFn:function(e){this.$refs[e].showStatus=!1},stepperChange:function(e){this.playDurationObj.playDuration=e},submitPopoupFn:function(e,t,i){this.fmForm[i]=this[t][i],this.$refs[e].showStatus=!1,this.palySubmit()},pushDevFn:function(){this.fmForm.inTask?uni.showToast({title:"播放状态下不能操作！",duration:2e3,icon:"none"}):uni.navigateTo({url:"../../pageBroadcast/components/sel-device/sel-device"})},pushResourceFn:function(){this.fmForm.inTask?uni.showToast({title:"播放状态下不能操作！",duration:2e3,icon:"none"}):uni.navigateTo({url:"../../pageBroadcast/view/fm-resource"})},deleteResourceFn:function(){var e=this;try{uni.removeStorageSync("_resourceData"),e.activeResourceId=null,e.activeResourceData=null}catch(t){}},palySubmit:function(){var e=this;this.fmForm.fmSourceId=this.activeResourceData.fmSourceId;var t=this.activeDev.map((function(e){return e.deviceId}));this.fmForm.operationId=(0,s.uuid)(32,16);var i={fmSourceId:this.fmForm.fmSourceId,deviceIds:t.join(","),operationId:this.fmForm.operationId,volume:this.fmForm.volume,playDuration:this.fmForm.playDuration};this.socketSend(t.join(",")),(0,n.$http)("/app/live/fmSourcePlay","post",i).then((function(t){t.code===e.my_config.success_status&&(uni.showToast({title:"开始播放！",duration:2e3,icon:"none"}),e.fmForm.inTask=!0)}))},stopSubmit:function(){var e=this;if(this.fmForm.inTask){var t=this.activeDev.map((function(e){return e.deviceId})),i={operationId:this.fmForm.operationId,deviceIds:t.join(","),playType:4};(0,n.$http)("/app/live/liveStop","post",i).then((function(t){t.code===e.my_config.success_status&&(e.fmForm.inTask=!1,uni.showToast({title:"播放已停止！",duration:2e3,icon:"none"}))}))}else uni.showToast({title:"请先进行播放！",duration:2e3,icon:"none"})},socketSend:function(t){var i={companyId:a.default.getters.userData.companyId,userName:a.default.getters.userData.username,token:a.default.getters.userData.token,operationId:this.fmForm.operationId,socketType:"playStatus",requestType:"H5",devices:t};e("log","发送推送请求 ===>",i," at pageBroadcast/view/fm.vue:313"),this.$socket.emit("clientRequest",i)},socketFn:function(){var t=this;this.$socket.on("socketRes",(function(i){if(e("log","socketRes========>>>>>>",i," at pageBroadcast/view/fm.vue:326"),"playStatus"!==i.socketType)return!1;t.fmForm.operationId===i.operationId&&"stop"===i.operationType&&(t.fmForm.inTask=!1,uni.showToast({title:"播放已停止！",duration:2e3,icon:"none"}))})),this.$socket.on("message",(function(t){e("log","========>>>>>>",t," at pageBroadcast/view/fm.vue:339")})),this.$socket.on("fail",(function(t){e("log","========>>>>>>",t," at pageBroadcast/view/fm.vue:343")}))}}};t.default=r}).call(this,i("0de9")["log"])},c30c:function(e,t,i){"use strict";i.r(t);var o=i("6900"),n=i("2622");for(var a in n)"default"!==a&&function(e){i.d(t,e,(function(){return n[e]}))}(a);i("f1e5");var s,u=i("f0c5"),r=Object(u["a"])(n["default"],o["b"],o["c"],!1,null,"f6267dfe",null,!1,o["a"],s);t["default"]=r.exports},da19:function(e,t,i){var o=i("24fb");t=o(!1),t.push([e.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */.broadcast-fm-page[data-v-f6267dfe]{height:100%}.content-view[data-v-f6267dfe]{padding-bottom:%?240?%;-webkit-box-sizing:border-box;box-sizing:border-box}.content-view .device-list-view[data-v-f6267dfe]{height:100%}.content-view .device-list-view .list-row[data-v-f6267dfe]{height:%?100?%;font-size:%?26?%;border-bottom:1px solid #dbdbdb;padding:0 %?30?%}.content-view .device-list-view .list-row uni-image[data-v-f6267dfe]{display:inline-block;width:%?50?%;height:%?50?%;margin-right:%?20?%}.content-view .null-view[data-v-f6267dfe]{text-align:center;padding-top:30%}.content-view .null-view uni-image[data-v-f6267dfe]{width:%?350?%;height:%?200?%}.content-view .null-view .null-view__tip[data-v-f6267dfe]{font-size:%?24?%;color:#666;margin-top:%?40?%}.content-view .null-view .null-view__button[data-v-f6267dfe]{font-size:%?24?%;color:#499ff5;margin-top:%?40?%}.operation-view[data-v-f6267dfe]{width:100%;height:%?230?%;overflow:hidden;background-color:#f4f1f6;position:fixed;left:0;bottom:0;z-index:10}.operation-view .volume-view[data-v-f6267dfe]{padding:%?10?% %?30?%}.operation-view .volume-view uni-image[data-v-f6267dfe]{width:%?50?%;height:%?50?%}.operation-view .volume-view .slider-view[data-v-f6267dfe] .uni-slider-handle{-webkit-transform:scale(.6);transform:scale(.6)}.operation-view .volume-view .slider-view[data-v-f6267dfe] .uni-slider-thumb{-webkit-transform:scale(.6);transform:scale(.6)}.operation-view .volume-view .slider-view[data-v-f6267dfe] .uni-slider-track{background-color:#499ff5!important}.operation-view .volume-view .volume-text[data-v-f6267dfe]{font-size:%?30?%;color:#666}.operation-view .play-view[data-v-f6267dfe]{padding:%?20?% %?30?%}.operation-view .play-view .resourc-view[data-v-f6267dfe]{font-size:%?30?%}.operation-view .play-view uni-image[data-v-f6267dfe]{width:%?80?%;height:%?80?%;margin-left:%?30?%}.popoup-view[data-v-f6267dfe]{color:#333}.popoup-view .popoup-title[data-v-f6267dfe]{padding:%?30?% 0 %?20?% 0;text-align:center;font-size:%?36?%}.popoup-view .popoup-item[data-v-f6267dfe]{padding:%?15?% %?50?%;font-size:%?34?%}.popoup-view .popoup-item uni-radio[data-v-f6267dfe]{-webkit-transform:scale(.7);transform:scale(.7)}.popoup-view .stepper[data-v-f6267dfe]{padding:%?30?% 0;-webkit-transform:scale(.9);transform:scale(.9)}.popoup-view .popoup-footer[data-v-f6267dfe]{padding:%?40?% %?50?% %?50?%}.popoup-view .popoup-footer .popoup-button[data-v-f6267dfe]{width:%?280?%;height:%?70?%;border-radius:%?10?%;line-height:%?70?%;text-align:center;font-size:%?32?%}.popoup-view .popoup-footer .button-gray[data-v-f6267dfe]{background-color:#f0f0f0;color:#999}.popoup-view .popoup-footer .button-red[data-v-f6267dfe]{background-color:#499ff5;color:#fff}',""]),e.exports=t},f1e5:function(e,t,i){"use strict";var o=i("2354"),n=i.n(o);n.a}}]);