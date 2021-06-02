(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-2bb5","chunk-2b4c"],{"+puh":function(e,t,i){"use strict";i.r(t);var a=i("BHIJ"),n={components:{TableView:i("AlM9").a,drawer:a.a},data:function(){return{vehicleIds:[],driverIds:[],drawerDisplay:!1,drawerData:{},alias:{pageSize:"pageSize",pageNum:"pageNum"},tableOptions:{data:[],total:0,columns:[{type:"slot",name:"number",title:"序号"},{title:"车牌号码",key:"licenseNum",sort:"custom",minWidth:"180",type:"text"},{title:"所属公司",key:"companyName",type:"text",minWidth:"180"},{title:"事故驾驶员",key:"driverName",minWidth:"180",type:"text"},{title:"事故责任方",key:"accidentDuty",type:"tagText",minWidth:"180",tags:[{value:2,text:"我方责任",option:{type:"warning"}},{value:1,text:"对方责任",option:{type:"danger"}}]},{title:"事故时间",key:"accidentAt",minWidth:"180",type:"text"},{title:"事故地点",key:"location",minWidth:"180",type:"text"},{title:"情况描述",key:"accidentDescription",minWidth:"180",type:"text"},{title:"操作",type:"operate",key:"operate",fixed:"right",width:"160",buttons:[{icon:"iconfont Jamin_vehicle_ico_xq",type:"text",size:"mini",funcName:"detail"},{icon:"iconfont Jamin_vehicle_icon_bj",type:"text",size:"mini",funcName:"edit"}]}],buttonControls:[{text:"添加事故",type:"primary",size:"small",round:!1,icon:"el-icon-plus",funcName:"increase"},{text:"导出记录",type:"null",size:"small",round:!1,icon:"el-icon-download",funcName:"export"}],searchControls:[{type:"input",key:"licenseNum",placeholder:"车牌号码",width:"200px",size:"small"},{type:"input",key:"companyName",placeholder:"所属公司",width:"200px",size:"small"},{type:"select",key:"type",placeholder:"事故责任方",width:"200px",size:"small",filterable:!0,clearable:!0,options:[{name:"对方责任",value:1},{name:"我方责任",value:2}]}],footerButtons:[{text:"删除",type:"danger",size:"small",icon:"el-icon-delete",round:!1,funcName:"delete"}],paginationLayout:"total, sizes, prev, pager, next, jumper",loading:!1}}},computed:{},created:function(){},mounted:function(){},methods:{getTableData:function(e){var t=this;this.tableOptions.loading=!0;var i={licenseNum:e.licenseNum,companyName:e.companyName,type:e.type};this.$http.post("/accident/list?pageNum="+e.pageNum+"&pageSize="+e.pageSize,i).then(function(e){e.code===t.$config.API_STATUS.OK&&(t.tableOptions.loading=!1,t.tableOptions.data=e.data.list,t.tableOptions.total=e.data.total)}),this.$http.post("/vehicle/list").then(function(e){e.code===t.$config.API_STATUS.OK&&e.data.list.forEach(function(e,i){t.vehicleIds[i]={value:e.vehicleId,name:e.licenseNum}})})},tableResponseFn:function(e,t,i){this[t.funcName].call(function(){},e,t,i)},vehicleChange:function(e){var t=this;this.$http.get("/vehicle/select/"+e).then(function(e){e.code===t.$config.API_STATUS.OK&&e.data.forEach(function(e,i){t.$set(t.driverIds,i,{value:e.driverId,name:e.driverName})})})},changeFunction:function(e){var t=this;this.$http.get("/vehicle/select/"+e).then(function(e){e.code===t.$config.API_STATUS.OK&&e.data.list.forEach(function(e,i){t.driverIds[i]={value:e.vehicleId,name:e.licenseNum}})})},edit:function(e){var t=this;this.$http.get("/accident/"+e.accidentId).then(function(i){i.code===t.$config.API_STATUS.OK&&(e=i.data)}),this.vehicleChange(e.vehicleId),this.drawerDisplay=!0,this.drawerData={staticData:e,isShow:!0,title:"编辑年检信息",titleWidth:"120",data:{},defaultData:"",submitAction:"/accident/update/"+e.accidentId,btnAlign:"center",formList:[{title:"事故车辆",type:"select",key:"vehicleId",offsetWidth:"320",filterable:!0,options:{type:"default",list:this.vehicleIds},handlerCallback:{target:"changeFunction",funcName:"vehicleChange"},rules:[{required:!0,message:"请绑定车辆",trigger:"change"}]},{title:"驾驶员",type:"select",key:"driverId",offsetWidth:"320",filterable:!0,options:{type:"default",list:this.driverIds},rules:[{required:!0,message:"请绑定驾驶员",trigger:"change"}]},{title:"事故责任方",type:"select",key:"accidentDuty",offsetWidth:"320",filterable:!0,options:{type:"default",list:[{value:2,name:"我方责任"},{value:1,name:"对方责任"}]},rules:[{required:!0,message:"请选择责任方",trigger:"change"}]},{title:"事故时间",type:"dateSelect",offsetWidth:"320",key:"accidentAt",valueFormat:"yyyy-MM-dd",rules:[{required:!0,message:"请选择事故时间",trigger:"change"}]},{title:"事故地点",type:"input",key:"location",offsetWidth:"320",rules:[{required:!0,message:"请输入事故地点",trigger:"blur"}]},{title:"赔付金额",type:"input",offsetWidth:"320",key:"payoutAmount"},{title:"维修费用",type:"input",offsetWidth:"320",key:"repairFees"},{title:"事故描述",type:"input",offsetWidth:"320",key:"e11"},{title:"备注说明",type:"input",offsetWidth:"320",key:"accidentDescription"},{title:"附件图片",type:"imgUpload",offsetWidth:"320",action:this.$config.API_CONFIG.API_ROOT+"/file/upload/attachedPhoto",key:"attachedPhoto",accept:"image/jpeg,image/png",headers:{Authorization:this.$store.getters.userData.tokenHead+this.$store.getters.userData.token},showFileList:!1,beforeUpload:function(e){},onProgress:function(e){},onSuccess:function(e){e.code===t.$config.API_STATUS.OK&&t.$set(t.$refs.drawer.formData,"attachedPhoto",e.data.url)}}],formButton:[{name:"确定",type:"confirm",class:"primary"},{name:"取消",type:"cancel",class:""}],message:{type:"success",message:"编辑成功！"}}},detail:function(e){var t=this;this.vehicleChange(e.vehicleId),this.drawerDisplay=!0,this.drawerData={staticData:e,isShow:!0,title:"年检详情",titleWidth:"120",btnAlign:"center",formList:[{title:"事故车辆",type:"textSelect",key:"vehicleId",offsetWidth:"320",filterable:!0,list:this.vehicleIds},{title:"驾驶员",type:"textSelect",key:"driverId",offsetWidth:"320",filterable:!0,list:this.driverIds},{title:"事故责任方",type:"textSelect",key:"accidentDuty",offsetWidth:"320",list:[{value:2,name:"我方责任"},{value:1,name:"对方责任"}]},{title:"事故时间",type:"text",offsetWidth:"320",key:"accidentAt"},{title:"事故地点",type:"text",key:"location",offsetWidth:"320",rules:[{required:!0,message:"请输入事故地点",trigger:"blur"}]},{title:"赔付金额",type:"text",offsetWidth:"320",key:"payoutAmount"},{title:"维修费用",type:"text",offsetWidth:"320",key:"repairFees"},{title:"事故描述",type:"text",offsetWidth:"320",key:"e11"},{title:"备注说明",type:"text",offsetWidth:"320",key:"accidentDescription"},{title:"附件图片",type:"imgUpload",offsetWidth:"320",action:this.$config.API_CONFIG.API_ROOT+"/file/upload/attachedPhoto",key:"attachedPhoto",disabled:!0,accept:"image/jpeg,image/png",headers:{Authorization:this.$store.getters.userData.tokenHead+this.$store.getters.userData.token},showFileList:!1,beforeUpload:function(e){},onProgress:function(e){},onSuccess:function(e){e.code===t.$config.API_STATUS.OK&&t.$set(t.$refs.drawer.formData,"attachedPhoto",e.data.url)}}]}},increase:function(){var e=this;this.drawerDisplay=!0,this.drawerData={isShow:!0,title:"添加事故信息",titleWidth:"120",data:{},defaultData:"",submitAction:"/accident/create",btnAlign:"center",formList:[{title:"事故车辆",type:"select",key:"vehicleId",offsetWidth:"320",filterable:!0,options:{type:"default",list:this.vehicleIds},handlerCallback:{target:"changeFunction",funcName:"vehicleChange"},rules:[{required:!0,message:"请绑定车辆",trigger:"change"}]},{title:"驾驶员",type:"select",key:"driverId",offsetWidth:"320",filterable:!0,options:{type:"default",list:this.driverIds},rules:[{required:!0,message:"请绑定驾驶员",trigger:"change"}]},{title:"事故责任方",type:"select",key:"accidentDuty",offsetWidth:"320",filterable:!0,options:{type:"default",list:[{value:2,name:"我方责任"},{value:1,name:"对方责任"}]},rules:[{required:!0,message:"请选择责任方",trigger:"change"}]},{title:"事故时间",type:"dateSelect",offsetWidth:"320",key:"accidentAt",valueFormat:"yyyy-MM-dd",rules:[{required:!0,message:"请选择事故时间",trigger:"change"}]},{title:"事故地点",type:"input",key:"location",offsetWidth:"320",rules:[{required:!0,message:"请输入事故地点",trigger:"blur"}]},{title:"赔付金额",type:"input",offsetWidth:"320",key:"payoutAmount"},{title:"维修费用",type:"input",offsetWidth:"320",key:"repairFees"},{title:"事故描述",type:"input",offsetWidth:"320",key:"e11"},{title:"备注说明",type:"input",offsetWidth:"320",key:"accidentDescription"},{title:"附件图片",type:"imgUpload",offsetWidth:"320",action:this.$config.API_CONFIG.API_ROOT+"/file/upload/attachedPhoto",key:"attachedPhoto",accept:"image/jpeg,image/png",headers:{Authorization:this.$store.getters.userData.tokenHead+this.$store.getters.userData.token},showFileList:!1,beforeUpload:function(e){},onProgress:function(e){},onSuccess:function(t){t.code===e.$config.API_STATUS.OK&&e.$set(e.$refs.drawer.formData,"attachedPhoto",t.data.url)}}],formButton:[{name:"确定",type:"confirm",class:"primary"},{name:"取消",type:"cancel",class:""}],message:{type:"success",message:"添加成功！"}}},export:function(){var e=this;this.$confirm("确认导出记录?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",closeOnClickModal:!1,beforeClose:function(t,i,a){e.fieldMap={},e.tableOptions.columns.forEach(function(t){e.$refs.table.columnCheckList.forEach(function(i){t.key===i&&"operate"!==t.key&&(e.fieldMap[i]=t.title)})});var n=e.$refs.table._data.searchParams,s=n.licenseNum,o=n.companyName,l=n.type;if("confirm"===t){var c={fieldMap:e.fieldMap,licenseNum:s,companyName:o,type:l};e.$http.download("/accident/export?isToken=true",c).then(function(e){}),a()}else a()}}).catch(function(){})},delete:function(e){var t=this;this.$confirm("是否删除?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){var i=[];e.forEach(function(e,t){i[t]=e.accidentId}),t.$http.deleteApi("/accident/delete",{ids:i.join(",")}).then(function(e){e.code===t.$config.API_STATUS.OK&&(t.$refs.table.emitRequestTableData(),t.$message({message:e.message,type:"success"}))})}).catch(function(){t.$message({type:"info",message:"已取消"})})},diaClose:function(){this.$refs.table.emitRequestTableData(),this.drawerDisplay=!1},drawerCallback:function(e,t,i,a){this[e.handlerCallback.funcName].call(function(){},t,i,a)}}},s=(i("W6Q2"),i("ZrdR")),o=Object(s.a)(n,function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"main"},[i("table-view",{ref:"table",attrs:{stripe:"",center:"","id-key":"id","is-search":!0,data:e.tableOptions.data,total:e.tableOptions.total,columns:e.tableOptions.columns,"search-controls":e.tableOptions.searchControls,"footer-buttons":e.tableOptions.footerButtons,"button-controls":e.tableOptions.buttonControls,"pagination-layout":e.tableOptions.paginationLayout,loading:e.tableOptions.loading,"view-table-key":"accident",checked:"","column-view":"",alias:e.alias},on:{requestTableData:e.getTableData,handleCallback:e.tableResponseFn}},[i("el-table-column",{attrs:{slot:"number",label:"序号",type:"index",align:"center"},slot:"number"})],1),e._v(" "),e.drawerDisplay?i("drawer",{ref:"drawer",attrs:{size:"small","drawer-data":e.drawerData},on:{diaClose:e.diaClose,handlerCallback:e.drawerCallback}}):e._e()],1)},[],!1,null,"e1216424",null);o.options.__file="accident.vue";t.default=o.exports},"7IPx":function(e,t,i){"use strict";i.r(t);var a={components:{accident:i("+puh").default},data:function(){return{activeName:"accident"}},computed:{},created:function(){},mounted:function(){},methods:{}},n=(i("RH23"),i("ZrdR")),s=Object(n.a)(a,function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"box"},[i("div",{staticClass:"main"},[i("el-tabs",{staticClass:"init-tabs",model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},[i("el-tab-pane",{attrs:{name:"accident"}},[i("span",{attrs:{slot:"label"},slot:"label"},[i("i",{staticClass:"iconfont Jamin_vehicle_icon_ksnj"}),e._v("车辆事故记录")]),e._v(" "),"accident"===e.activeName?i("accident"):e._e()],1)],1)],1)])},[],!1,null,"776f3784",null);s.options.__file="index.vue";t.default=s.exports},"P+cK":function(e,t,i){},RH23:function(e,t,i){"use strict";var a=i("o55j");i.n(a).a},W6Q2:function(e,t,i){"use strict";var a=i("P+cK");i.n(a).a},o55j:function(e,t,i){}}]);