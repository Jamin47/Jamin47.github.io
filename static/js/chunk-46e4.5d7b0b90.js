(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-46e4"],{Blph:function(e,t,a){},Y4hI:function(e,t,a){"use strict";a.r(t);var n=a("BHIJ"),i={components:{TableView:a("AlM9").a,drawer:n.a},data:function(){return{vehicleIds:[],drawerDisplay:!1,drawerData:{},alias:{pageSize:"pageSize",pageNum:"pageNum"},tableOptions:{data:[],total:0,columns:[{type:"slot",name:"number",title:"序号"},{title:"车牌号码",key:"licenseNum",sort:"custom",minWidth:"180",type:"text"},{title:"所属公司",key:"companyName",type:"text",minWidth:"180"},{title:"上次年检时间",key:"annualAt",minWidth:"180",type:"text"},{title:"年检到期时间",key:"timeoutAt",minWidth:"180",type:"text"},{minWidth:"130",type:"slot",name:"overDayNum"},{title:"操作",type:"operate",key:"operate",fixed:"right",width:"160",buttons:[{icon:"iconfont Jamin_vehicle_icon_bj",type:"text",size:"mini",funcName:"edit"}]}],buttonControls:[{text:"导出记录",type:"null",size:"small",round:!1,icon:"el-icon-download",funcName:"export"}],searchControls:[{type:"input",key:"licenseNum",placeholder:"车牌号码",width:"200px",size:"small"},{type:"input",key:"companyName",placeholder:"所属公司",width:"200px",size:"small"}],footerButtons:[{text:"删除",type:"danger",size:"small",icon:"el-icon-delete",round:!1,funcName:"delete"}],paginationLayout:"total, sizes, prev, pager, next, jumper",loading:!1}}},computed:{},created:function(){},mounted:function(){},methods:{endTime:function(e){this.$refs.drawer.formData.annualAt?new Date(e).getTime()<=new Date(this.$refs.drawer.formData.annualAt).getTime()&&(this.$message.error("结束时间不得小于开始时间"),this.$refs.drawer.formData.timeoutAt=null):(this.$message.error("请先选择开始时间"),this.$refs.drawer.formData.timeoutAt=null)},getTableData:function(e){var t=this;this.tableOptions.loading=!0;var a={licenseNum:e.licenseNum,companyName:e.companyName};this.$http.post("/annual/list/advance?pageNum="+e.pageNum+"&pageSize="+e.pageSize,a).then(function(e){e.code===t.$config.API_STATUS.OK&&(t.tableOptions.loading=!1,t.tableOptions.data=e.data.list,t.tableOptions.total=e.data.total)}),this.$http.post("/vehicle/list").then(function(e){e.code===t.$config.API_STATUS.OK&&e.data.list.forEach(function(e,a){t.vehicleIds[a]={value:e.vehicleId,name:e.licenseNum}})})},tableResponseFn:function(e,t,a){this[t.funcName].call(function(){},e,t,a)},edit:function(e){var t=this;this.$http.get("/annual/"+e.annualId).then(function(a){a.code===t.$config.API_STATUS.OK&&(e=a.data)}),this.drawerDisplay=!0,this.drawerData={staticData:e,isShow:!0,title:"编辑年检信息",titleWidth:"120",data:{},defaultData:"",submitAction:"/annual/update/"+e.annualId,btnAlign:"center",formList:[{title:"年检车辆",type:"select",key:"vehicleId",offsetWidth:"320",filterable:!0,options:{type:"default",list:this.vehicleIds},rules:[{required:!0,message:"请绑定车辆",trigger:"change"}]},{title:"本次年检时间",type:"dateSelect",valueFormat:"yyyy-MM-dd",offsetWidth:"320",key:"annualAt",rules:[{required:!0,message:"请选择本次年检时间",trigger:"change"}]},{title:"年检到期时间",type:"dateSelect",valueFormat:"yyyy-MM-dd",offsetWidth:"320",key:"timeoutAt",handlerCallback:{target:"changeFunction",funcName:"endTime"},rules:[{required:!0,message:"请选择年检到期时间",trigger:"change"}]},{title:"年检费用",type:"input",key:"price",offsetWidth:"320"},{title:"缴纳人",type:"input",offsetWidth:"320",key:"payer"},{title:"办理人",type:"input",offsetWidth:"320",key:"handler"},{title:"办理人电话",type:"input",offsetWidth:"320",key:"phone"},{title:"备注说明",type:"input",offsetWidth:"320",key:"remark"},{title:"附件图片",type:"imgUpload",offsetWidth:"320",action:this.$config.API_CONFIG.API_ROOT+"/file/upload/attachedPhoto",key:"attachedPhoto",accept:"image/jpeg,image/png",headers:{Authorization:this.$store.getters.userData.tokenHead+this.$store.getters.userData.token},showFileList:!1,beforeUpload:function(e){},onProgress:function(e){},onSuccess:function(e){e.code===t.$config.API_STATUS.OK&&t.$set(t.$refs.drawer.formData,"attachedPhoto",e.data.url)}}],formButton:[{name:"确定",type:"confirm",class:"primary"},{name:"取消",type:"cancel",class:""}],message:{type:"success",message:"编辑成功！"}}},export:function(){var e=this;this.$confirm("确认导出记录?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",closeOnClickModal:!1,beforeClose:function(t,a,n){e.fieldMap={},e.tableOptions.columns.forEach(function(t){e.$refs.table.columnCheckList.forEach(function(a){t.key===a&&"operate"!==t.key&&(e.fieldMap[a]=t.title)})});var i=e.$refs.table._data.searchParams,o=i.licenseNum,l=i.companyName;if("confirm"===t){var s={fieldMap:e.fieldMap,licenseNum:o,companyName:l};e.$http.download("/annual/export?isToken=true",s).then(function(e){}),n()}else n()}}).catch(function(){})},delete:function(e){var t=this;this.$confirm("是否删除?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){var a=[];e.forEach(function(e,t){a[t]=e.annualId}),t.$http.deleteApi("/annual/delete",{ids:a.join(",")}).then(function(e){e.code===t.$config.API_STATUS.OK&&(t.$refs.table.emitRequestTableData(),t.$message({message:e.message,type:"success"}))})}).catch(function(){t.$message({type:"info",message:"已取消"})})},diaClose:function(){this.$refs.table.emitRequestTableData(),this.drawerDisplay=!1},drawerCallback:function(e,t,a,n){this[e.handlerCallback.funcName].call(function(){},t,a,n)}}},o=(a("Z53D"),a("ZrdR")),l=Object(o.a)(i,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"main"},[a("table-view",{ref:"table",attrs:{stripe:"",center:"","id-key":"id","is-search":!0,data:e.tableOptions.data,total:e.tableOptions.total,columns:e.tableOptions.columns,"search-controls":e.tableOptions.searchControls,"footer-buttons":e.tableOptions.footerButtons,"button-controls":e.tableOptions.buttonControls,"pagination-layout":e.tableOptions.paginationLayout,loading:e.tableOptions.loading,"view-table-key":"remind",checked:"","column-view":"",alias:e.alias},on:{requestTableData:e.getTableData,handleCallback:e.tableResponseFn}},[a("el-table-column",{attrs:{slot:"number",label:"序号",type:"index",align:"center"},slot:"number"}),e._v(" "),a("el-table-column",{attrs:{slot:"overDayNum",label:"到期剩余天数",align:"center",width:"130"},slot:"overDayNum",scopedSlots:e._u([{key:"default",fn:function(t){return null!==t.row.overDayNum?[t.row.overDayNum>=0?a("span",[e._v("\n          剩余 "+e._s(t.row.overDayNum)+" 天\n        ")]):e._e(),e._v(" "),t.row.overDayNum<0?a("span",[e._v("\n          过期 "+e._s(Math.abs(t.row.overDayNum))+" 天\n        ")]):e._e()]:void 0}}])})],1),e._v(" "),e.drawerDisplay?a("drawer",{ref:"drawer",attrs:{size:"small","drawer-data":e.drawerData},on:{diaClose:e.diaClose,handlerCallback:e.drawerCallback}}):e._e()],1)},[],!1,null,"e25948d0",null);l.options.__file="remind.vue";t.default=l.exports},Z53D:function(e,t,a){"use strict";var n=a("Blph");a.n(n).a}}]);