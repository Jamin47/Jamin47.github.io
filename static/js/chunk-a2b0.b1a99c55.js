(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-a2b0","chunk-556d","chunk-50d3","chunk-79d4"],{"+fbh":function(e,t,a){"use strict";var n=a("vrli");a.n(n).a},"/WhK":function(e,t,a){"use strict";var n=a("j7I0");a.n(n).a},"1Drk":function(e,t,a){"use strict";a.r(t);var n={components:{TableView:a("AlM9").a},data:function(){return{fieldMap:{},alias:{pageSize:"pageSize",pageNum:"pageNum"},tableOptions:{data:[],total:0,columns:[{type:"slot",name:"number",title:"序号"},{title:"操作时间",key:"createTime",type:"text"},{title:"操作用户",key:"username",type:"text"},{title:"操作应用端",key:"loginType",type:"tag",tags:[{value:0,text:"网页版"},{value:1,text:"Android版"},{value:2,text:"iOS版"}]},{title:"功能区域",key:"functionArea",type:"text"},{title:"操作类型",key:"operationType",type:"tag",tags:[{value:0,text:"执行"},{value:1,text:"新增"},{value:2,text:"编辑"},{value:3,text:"删除"},{value:4,text:"查询"}]},{title:"操作事项记录",key:"operation",type:"text"},{title:"IP地址",key:"loginIp",type:"text"},{title:"操作结果",type:"tag",key:"status",tags:[{value:1,text:"成功"},{value:0,text:"失败",option:{type:"warning"}}]}],buttonControls:[{text:"导出记录",type:"null",size:"small",round:!1,funcName:"export"}],searchControls:[{type:"datetimerange",key:"loginTime",startPlaceholder:"选择开始日期",endPlaceholder:"选择结束日期",width:"360px",size:"small"},{type:"input",key:"username",placeholder:"请输入登录账号",width:"200px",size:"small"},{type:"select",key:"method",width:"200px",placeholder:"请选择功能区域",size:"small",clearable:!0,options:[{name:"功能区域",value:0},{name:"定时广播",value:1}]},{type:"select",key:"loginType",placeholder:"请选择应用终端",width:"200px",size:"small",clearable:!0,options:[{name:"网页版",value:0},{name:"Android版",value:1},{name:"iOS版",value:2}]},{type:"select",key:"status",width:"200px",placeholder:"状态",size:"small",clearable:!0,options:[{name:"成功",value:1},{name:"失败",value:0}]}],paginationLayout:"total, sizes, prev, pager, next, jumper",loading:!1}}},computed:{},created:function(){},mounted:function(){},methods:{getTableData:function(e){var t=this;this.tableOptions.loading=!0;var a={startTime:e.loginTime[0],endTime:e.loginTime[1],loginType:e.loginType,method:e.method,status:e.status,username:e.username};this.$http.post("/log/list/operate?pageNum="+e.pageNum+"&pageSize="+e.pageSize,a).then(function(e){e.code===t.$config.API_STATUS.OK&&(t.tableOptions.data=e.data.list,t.tableOptions.total=e.data.total,t.tableOptions.loading=!1)})},tableResponseFn:function(e,t,a){this[t.funcName].call(function(){},e,t,a)},export:function(){var e=this;this.$confirm("确认导出记录?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",closeOnClickModal:!1,beforeClose:function(t,a,n){e.fieldMap={},e.tableOptions.columns.forEach(function(t){e.$refs.table.columnCheckList.forEach(function(a){t.key===a&&"operate"!==t.key&&(e.fieldMap[a]=t.title)})});var l=e.$refs.table._data.searchParams,o=l.loginTime,i=l.username,s=l.method,r=l.loginType,p=l.status;if("confirm"===t){var c={fieldMap:e.fieldMap,startTime:o[0],endTime:o[1],username:i,method:s,loginType:r,status:p};e.$http.download("/log/operate/export?isToken=true",c).then(function(e){}),n()}else n()}}).catch(function(){})}}},l=(a("EFkf"),a("ZrdR")),o=Object(l.a)(n,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"operationLog"},[a("table-view",{ref:"table",attrs:{center:"","id-key":"id","is-search":!0,data:e.tableOptions.data,total:e.tableOptions.total,columns:e.tableOptions.columns,"pagination-layout":e.tableOptions.paginationLayout,"search-controls":e.tableOptions.searchControls,"button-controls":e.tableOptions.buttonControls,loading:e.tableOptions.loading,checked:"","is-shadow":"","column-view":"",alias:e.alias},on:{requestTableData:e.getTableData,handleCallback:e.tableResponseFn}},[a("el-table-column",{attrs:{slot:"number",label:"序号",type:"index",align:"center"},slot:"number"})],1)],1)},[],!1,null,"cc5c6ea0",null);o.options.__file="operationLog.vue";t.default=o.exports},"2USO":function(e,t,a){"use strict";a.r(t);var n=a("1Drk"),l=a("yfck"),o=a("mAiG"),i={name:"LogManagement",components:{operationLog:n.default,loginLog:l.default,equipmentLog:o.default},data:function(){return{activeName:"operation"}},computed:{},created:function(){},mounted:function(){},methods:{}},s=(a("pomc"),a("ZrdR")),r=Object(s.a)(i,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"page-wrap"},[a("div",{staticClass:"main"},[a("el-tabs",{staticClass:"init-tabs",model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},[a("el-tab-pane",{attrs:{name:"operation"}},[a("span",{attrs:{slot:"label"},slot:"label"},[a("i",{staticClass:"iconfont Jamin_system_icon_czrz"}),e._v(" 操作日志")]),e._v(" "),"operation"===e.activeName?a("operationLog"):e._e()],1),e._v(" "),a("el-tab-pane",{attrs:{name:"login"}},[a("span",{attrs:{slot:"label"},slot:"label"},[a("i",{staticClass:"iconfont Jamin_system_icon_dlrz"}),e._v(" 登录日志")]),e._v(" "),"login"===e.activeName?a("loginLog"):e._e()],1),e._v(" "),a("el-tab-pane",{attrs:{name:"equipment"}},[a("span",{attrs:{slot:"label"},slot:"label"},[a("i",{staticClass:"iconfont Jamin_system_icon_sbrz"}),e._v(" 设备日志")]),e._v(" "),"equipment"===e.activeName?a("equipmentLog"):e._e()],1)],1)],1)])},[],!1,null,"f3bc30be",null);r.options.__file="logManagement.vue";t.default=r.exports},EFkf:function(e,t,a){"use strict";var n=a("xIQM");a.n(n).a},EYMi:function(e,t,a){},j7I0:function(e,t,a){},mAiG:function(e,t,a){"use strict";a.r(t);var n={components:{TableView:a("AlM9").a},data:function(){return{fieldMap:{},alias:{pageSize:"pageSize",pageNum:"pageNum"},tableOptions:{data:[],total:0,columns:[{type:"slot",name:"number",title:"序号"},{title:"设备名称",key:"name",type:"text"},{title:"所在区域",key:"address",type:"text"},{title:"执行事件",key:"event",type:"text"},{title:"开始时间",key:"startTime",type:"text"},{title:"结束时间",key:"endTime",type:"text"},{title:"执行内容记录",key:"record",type:"text"},{title:"操作结果",type:"tag",key:"status",tags:[{value:1,text:"成功"},{value:0,text:"失败",option:{type:"warning"}}]}],buttonControls:[{text:"导出记录",type:"null",size:"small",round:!1,funcName:"export"}],searchControls:[{type:"datetimerange",key:"loginTime",startPlaceholder:"选择开始日期",endPlaceholder:"选择结束日期",width:"360px",size:"small"},{type:"input",key:"name",placeholder:"请输入设备名称",width:"200px",size:"small"},{type:"select",key:"event",placeholder:"执行事件",width:"200px",size:"small",clearable:!0,options:[{name:"设备激活",value:0},{name:"设备重启",value:1}]},{type:"select",key:"status",width:"200px",placeholder:"状态",size:"small",clearable:!0,options:[{name:"成功",value:1},{name:"失败",value:0}]}],paginationLayout:"total, sizes, prev, pager, next, jumper",loading:!1}}},computed:{},created:function(){},mounted:function(){},methods:{getTableData:function(e){var t=this;this.tableOptions.loading=!0;var a={startTime:e.loginTime[0],endTime:e.loginTime[1],name:e.name,event:e.event};this.$http.post("/log/list/equipment?pageNum="+e.pageNum+"&pageSize="+e.pageSize,a).then(function(e){e.code===t.$config.API_STATUS.OK&&(t.tableOptions.loading=!1,t.tableOptions.data=e.data.list,t.tableOptions.total=e.data.total)})},tableResponseFn:function(e,t,a){this[t.funcName].call(function(){},e,t,a)},export:function(){var e=this;this.$confirm("确认导出记录?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",closeOnClickModal:!1,beforeClose:function(t,a,n){e.fieldMap={},e.tableOptions.columns.forEach(function(t){e.$refs.table.columnCheckList.forEach(function(a){t.key===a&&"operate"!==t.key&&(e.fieldMap[a]=t.title)})});var l=e.$refs.table._data.searchParams,o=l.loginTime,i=l.status,s=l.event,r=l.name;if("confirm"===t){var p={fieldMap:e.fieldMap,startTime:o[0],endTime:o[1],status:i,event:s,name:r};e.$http.download("/log/equipment/export?isToken=true",p).then(function(e){}),n()}else n()}}).catch(function(){})}}},l=(a("+fbh"),a("ZrdR")),o=Object(l.a)(n,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"equipmentLog"},[a("table-view",{ref:"table",attrs:{center:"","is-search":!0,data:e.tableOptions.data,total:e.tableOptions.total,columns:e.tableOptions.columns,"search-controls":e.tableOptions.searchControls,"button-controls":e.tableOptions.buttonControls,"pagination-layout":e.tableOptions.paginationLayout,loading:e.tableOptions.loading,alias:e.alias,"is-shadow":""},on:{requestTableData:e.getTableData,handleCallback:e.tableResponseFn}},[a("el-table-column",{attrs:{slot:"number",label:"序号",type:"index",align:"center"},slot:"number"})],1)],1)},[],!1,null,"23ff975e",null);o.options.__file="equipmentLog.vue";t.default=o.exports},pomc:function(e,t,a){"use strict";var n=a("EYMi");a.n(n).a},vrli:function(e,t,a){},xIQM:function(e,t,a){},yfck:function(e,t,a){"use strict";a.r(t);var n={components:{TableView:a("AlM9").a},data:function(){return{fieldMap:{},alias:{pageSize:"pageSize",pageNum:"pageNum"},tableOptions:{data:[],total:0,columns:[{type:"slot",name:"number",title:"序号"},{title:"登录时间",key:"createTime",type:"text"},{title:"应用端类型",key:"loginType",type:"tag",tags:[{value:0,text:"网页版"},{value:1,text:"Android版"},{value:2,text:"iOS版"}]},{title:"登录账号",key:"username",type:"text"},{title:"角色类型",key:"roleName",type:"text"},{title:"IP地址",key:"loginIp",type:"text"},{title:"归属地",key:"loginAddr",type:"text"},{title:"登录设备信息",key:"loginEqument",type:"text"}],buttonControls:[{text:"导出记录",type:"null",size:"small",round:!1,funcName:"export"}],searchControls:[{type:"datetimerange",key:"loginTime",startPlaceholder:"选择开始日期",endPlaceholder:"选择结束日期",width:"360px",size:"small"},{type:"input",key:"username",placeholder:"请输入登录账号",width:"200px",size:"small"},{type:"select",key:"loginType",placeholder:"请选择应用终端",width:"200px",size:"small",clearable:!0,options:[{name:"网页版",value:0},{name:"Android版",value:1},{name:"iOS版",value:2}]}],paginationLayout:"total, sizes, prev, pager, next, jumper",loading:!1}}},computed:{},created:function(){},mounted:function(){},methods:{getTableData:function(e){var t=this;this.tableOptions.loading=!0;var a={startTime:e.loginTime[0],endTime:e.loginTime[1],loginType:e.loginType,account:e.account};this.$http.post("/log/list/login?pageNum="+e.pageNum+"&pageSize="+e.pageSize,a).then(function(e){e.code===t.$config.API_STATUS.OK&&(t.tableOptions.loading=!1,t.tableOptions.data=e.data.list,t.tableOptions.total=e.data.total)})},tableResponseFn:function(e,t,a){this[t.funcName].call(function(){},e,t,a)},export:function(){var e=this;this.$confirm("确认导出记录?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",closeOnClickModal:!1,beforeClose:function(t,a,n){e.fieldMap={},e.tableOptions.columns.forEach(function(t){e.$refs.table.columnCheckList.forEach(function(a){t.key===a&&"operate"!==t.key&&(e.fieldMap[a]=t.title)})});var l=e.$refs.table._data.searchParams,o=l.loginTime,i=l.username,s=l.loginType;if("confirm"===t){var r={fieldMap:e.fieldMap,startTime:o[0],endTime:o[1],username:i,loginType:s};e.$http.download("/log/login/export?isToken=true",r).then(function(e){}),n()}else n()}}).catch(function(){})}}},l=(a("/WhK"),a("ZrdR")),o=Object(l.a)(n,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"loginLog"},[a("table-view",{ref:"table",attrs:{center:"","is-search":!0,data:e.tableOptions.data,total:e.tableOptions.total,columns:e.tableOptions.columns,"search-controls":e.tableOptions.searchControls,"button-controls":e.tableOptions.buttonControls,"pagination-layout":e.tableOptions.paginationLayout,loading:e.tableOptions.loading,alias:e.alias,"is-shadow":""},on:{requestTableData:e.getTableData,handleCallback:e.tableResponseFn}},[a("el-table-column",{attrs:{slot:"number",label:"序号",type:"index",align:"center"},slot:"number"})],1)],1)},[],!1,null,"04239c05",null);o.options.__file="loginLog.vue";t.default=o.exports}}]);