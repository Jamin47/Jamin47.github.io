(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-user-index"],{"1be9":function(t,n,e){"use strict";e.r(n);var i=e("2e59"),a=e("4c0a");for(var s in a)"default"!==s&&function(t){e.d(n,t,(function(){return a[t]}))}(s);e("3a46");var o,u=e("f0c5"),c=Object(u["a"])(a["default"],i["b"],i["c"],!1,null,"0879618c",null,!1,i["a"],o);n["default"]=c.exports},"1ff2":function(t,n,e){var i=e("24fb");n=i(!1),n.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */.user-page[data-v-0879618c]{height:100%}.user-content .manage-item[data-v-0879618c]{font-size:%?28?%;background-color:#fff;border-top:1px solid #dbdbdb;padding:%?30?%}.user-content .manage-item[data-v-0879618c]:first-child{border-top:0}.user-content .manage-item[data-v-0879618c]:active{background-color:rgba(0,0,0,.1)}.user-content .manage-item .item-text[data-v-0879618c]{color:#666}.user-content .manage-item .item-text uni-image[data-v-0879618c]{width:%?16?%;height:%?28?%;margin-left:%?20?%;vertical-align:middle}.user-but[data-v-0879618c]{padding:0 %?30?%;margin-top:%?140?%}.user-but .out-btn[data-v-0879618c]{width:100%;font-size:%?26?%;padding:%?15?% 0;background-color:#499ff5}',""]),t.exports=n},"2e59":function(t,n,e){"use strict";var i;e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return s})),e.d(n,"a",(function(){return i}));var a=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("v-uni-view",{staticClass:"user-page"},[i("v-uni-view",{staticClass:"user-content"},[i("v-uni-view",{staticClass:"manage-item flexbox flexbox-y-align flexbox-x-justify"},[i("v-uni-view",{staticClass:"item-title"},[t._v("用户名")]),i("v-uni-view",{staticClass:"item-text"},[t._v(t._s(t.userData?t.userData.accountname:""))])],1),i("v-uni-view",{staticClass:"manage-item flexbox flexbox-y-align flexbox-x-justify",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.pushPassFn.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"item-title"},[t._v("修改密码")]),i("v-uni-view",{staticClass:"item-text"},[i("v-uni-image",{attrs:{src:e("8ea6"),mode:"scaleToFill"}})],1)],1),i("v-uni-view",{staticClass:"manage-item flexbox flexbox-y-align flexbox-x-justify"},[i("v-uni-view",{staticClass:"item-title"},[t._v("版本更新")]),i("v-uni-view",{staticClass:"item-text"},[t._v("V1.0.0"),i("v-uni-image",{attrs:{src:e("8ea6"),mode:"scaleToFill"}})],1)],1)],1),i("v-uni-view",{staticClass:"user-but"},[i("v-uni-button",{staticClass:"out-btn",attrs:{type:"primary",size:"mini"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.userOutFn.apply(void 0,arguments)}}},[t._v("退出登录")])],1)],1)},s=[]},"3a46":function(t,n,e){"use strict";var i=e("ee43"),a=e.n(i);a.a},"4c0a":function(t,n,e){"use strict";e.r(n);var i=e("7d07"),a=e.n(i);for(var s in i)"default"!==s&&function(t){e.d(n,t,(function(){return i[t]}))}(s);n["default"]=a.a},"7d07":function(t,n,e){"use strict";var i=e("4ea4");e("c975"),e("ac1f"),e("466d"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=e("c7e5"),s=i(e("93e3")),o={data:function(){return{userData:null,isWx:!1,isDing:!1}},onLoad:function(){this.userData=s.default.getters.userData},onShow:function(){this.isWxFn(),this.isDingFn()},methods:{userOutFn:function(){var t=this;uni.showModal({title:"提示",content:"确定退出登录？",success:function(n){n.confirm&&(0,a.$http)("/app/sys/logout","post").then((function(n){if(n.code===t.my_config.success_status){var e=JSON.parse(JSON.stringify(s.default.getters.userData));s.default.dispatch("saveUserData",null),t.isWx?(uni.showToast({title:"wx",duration:2e3,icon:"none"}),wx.miniProgram.navigateBack()):t.isDing?(uni.showToast({title:"dd",duration:2e3,icon:"none"}),dd.navigateBack()):e&&e.url?window.location.href=e.url:uni.reLaunch({url:"/pages/login/index"})}}))}})},pushPassFn:function(){uni.navigateTo({url:"../../pageUser/view/edit-pass"})},isWxFn:function(){var t=this,n=navigator.userAgent.toLowerCase();"micromessenger"==n.match(/MicroMessenger/i)&&wx&&wx.miniProgram&&wx.miniProgram.getEnv((function(n){console.log(3,n),n.miniprogram&&(t.isWx=!0)}))},isDingFn:function(){var t=this,n=navigator.userAgent.toLowerCase();-1!==n.indexOf("dingtalk")&&(t.isDing=!0)}}};n.default=o},"8ea6":function(t,n){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAkCAYAAABmMXGeAAAABHNCSVQICAgIfAhkiAAAAhVJREFUSImt1stvDlEcxvFPL1SINIJKS0TQEHGLl9QlcUvsbMVG/AU22NGQiEsiERYSf4HL/9BFdUEj7sSi3mhYSEXQNGXRJm0tzhnveLV9+57xbGbOM5Pv/ObMM79zmnAU17EBZYwqqAY8wKI4HsXFCE9WE1ZgfRy34BA+YKgI9DnasSbn7cd3DKZCp9AfzzdHvwFd8fg2BZrpDb5hV4TBFizH0/jwuqGE1y1jb+7aOnQKbzORAiV8oJcR3BK9DuzAY4ynQOFHBHSpxG1pfNAT/EqBwk/0YTuWRG8xDuIVhlOgMIZebEJb9BbgMN7jSwqU8HH6sAqro9eMAxH6MQUKk3iE+bFqaBTmeBLvUqCZXmMEO1WyvFVVluuFEnI8iD1myHIKFD7HqvcJU0LI8jb0pkIJv3S/UPHC6C1DUxEoof/2oYTW6HU0FoRmynOmikJX4qaQ4UwvikA34obQEzIN4E7D9PfXVAnnMS/nPcM1jKdAj+CUv+exB7eFv0u90JM4VuXdFVbkP5ortBGnhbaXaQK38LD65rlAW9At9NVMY7gs9NV/VAvaiktYm/NGcMEsy/ds0PZYTVvOGxKq/jpbJTPltFPIYB5YxtlawJkqLeGcSvchl8FawOmgNTNYL/QEjlddv497c4XlodNlcDJW11MvkLAqnhFWxkzjuCrsBpPUjN258X/b9A4Lm94BXMGnIkD4DVNobUzf9LTzAAAAAElFTkSuQmCC"},ee43:function(t,n,e){var i=e("1ff2");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=e("4f06").default;a("2f64ff1a",i,!0,{sourceMap:!1,shadowMode:!1})}}]);