(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-15da","YelX","YelX","YelX"],{"+puh":function(e,t,i){"use strict";i.r(t);var a=i("BHIJ"),n=i("AlM9"),r=i("YelX"),s={components:{TableView:n.a,drawer:a.a},mixins:[r.default],data:function(){return{driverIds:[],drawerDisplay:!1,drawerData:{},alias:{pageSize:"pageSize",pageNum:"pageNum"},tableOptions:{data:[],total:0,columns:[{type:"slot",name:"number",title:"序号"},{title:this.$t("InsurancePage.licenseNum"),key:"licenseNum",minWidth:"180",type:"text"},{title:this.$t("InsurancePage.companyName"),key:"companyName",type:"text",minWidth:"180"},{title:this.$t("InsurancePage.driverName"),key:"driverName",minWidth:"180",type:"text"},{title:this.$t("InsurancePage.accidentDuty"),key:"accidentDuty",type:"tagText",minWidth:"180",tags:[{value:2,text:this.$t("InsurancePage.accidentDuty_1"),option:{type:"warning"}},{value:1,text:this.$t("InsurancePage.accidentDuty_2"),option:{type:"danger"}}]},{title:this.$t("InsurancePage.accidentAt"),key:"accidentAt",minWidth:"180",type:"text"},{title:this.$t("InsurancePage.location"),key:"location",minWidth:"180",type:"text"},{title:this.$t("InsurancePage.accidentDescription"),key:"accidentDescription",minWidth:"180",type:"text"},{title:this.$t("operation.operation"),type:"operate",key:"operate",fixed:"right",width:"160",buttons:[]}],buttonControls:[],searchControls:[{type:"input",key:"licenseNum",placeholder:this.$t("view.license_num"),width:"200px"},{type:"treeSelect",key:"companyIds",valueKey:"companyId",placeholder:this.$t("view.searchControl_company"),width:"200px",clearable:!0,treeOption:{defaultProps:{children:"sysCompanyNodes",label:"name"},nodeKey:"companyId",defaultExpandAll:!1,expandClickNode:!1,checkbox:!0,screenFn:{bindFn:function(e,t){return!e||-1!==t.name.indexOf(e)}}},treeDefinedData:this.$parent.$parent.$parent.$parent.companyTreeData},{type:"select",key:"type",placeholder:this.$t("InsurancePage.accidentDuty"),width:"200px",filterable:!0,clearable:!0,options:[{name:this.$t("InsurancePage.accidentDuty_1"),value:1},{name:this.$t("InsurancePage.accidentDuty_2"),value:2}]}],footerButtons:[],paginationLayout:"total, sizes, prev, pager, next, jumper",loading:!1}}},computed:{},created:function(){},mounted:function(){},methods:{handlePermissionShow:function(){this.tableOptions.buttonControls=[],this.isPermissionShow("accidentCreate")&&this.tableOptions.buttonControls.push({text:this.$t("InsurancePage.search_accident"),type:"primary",round:!1,icon:"el-icon-plus",funcName:"increase"}),this.isPermissionShow("accidentExport")&&this.tableOptions.buttonControls.push({text:this.$t("operation.export_record"),type:"null",round:!1,icon:"el-icon-download",funcName:"export"}),this.tableOptions.footerButtons=[],this.isPermissionShow("accidentDelete")&&this.tableOptions.footerButtons.push({text:this.$t("operation.delete"),type:"danger",icon:"el-icon-delete",round:!1,funcName:"delete"});var e=this.tableOptions.columns.findIndex(function(e){return"operate"===e.key});this.tableOptions.columns[e].buttons=[],e>-1&&this.isPermissionShow("accidentList")&&this.tableOptions.columns[e].buttons.push({tipText:this.$t("operation.detail"),icon:"iconfont Jamin_vehicle_ico_xq",type:"text",funcName:"detail"}),e>-1&&this.isPermissionShow("accidentUpdate")&&this.tableOptions.columns[e].buttons.push({tipText:this.$t("operation.edit"),icon:"iconfont Jamin_vehicle_icon_bj",type:"text",funcName:"edit"})},getTableData:function(e){var t=this;this.tableOptions.loading=!0;var i={licenseNum:e.licenseNum,companyIds:e.companyIds?JSON.parse(e.companyIds):[],type:e.type};this.$http.post("/accident/list?pageNum="+e.pageNum+"&pageSize="+e.pageSize,i).then(function(e){e.code===t.$config.API_STATUS.OK&&(t.tableOptions.loading=!1,t.tableOptions.data=e.data.list,t.tableOptions.total=e.data.total)})},tableResponseFn:function(e,t,i){this[t.funcName].call(function(){},e,t,i)},vehicleChange:function(e){var t=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;this.driverIds=[],this.$http.get("/vehicle/select/"+e).then(function(e){e.code===t.$config.API_STATUS.OK&&(e.data.forEach(function(e,i){t.$set(t.driverIds,i,{value:e.driverId,name:e.driverName})}),t.$refs.drawer&&(t.$refs.drawer.formDataOptions.driverId_options=t.driverIds,i&&t.$set(t.$refs.drawer.formData,"driverId",null)))})},edit:function(e){var t=this;this.$http.get("/accident/"+e.accidentId).then(function(i){i.code===t.$config.API_STATUS.OK&&(e=i.data)}),this.vehicleChange(e.vehicleId,0),this.drawerDisplay=!0,this.drawerData={staticData:e,isShow:!0,title:this.$t("InsurancePage.form_editTitle_1"),titleWidth:"120",data:{},defaultData:"",submitAction:"/accident/update/"+e.accidentId,btnAlign:"center",formList:[{title:this.$t("InsurancePage.form_edit_wx_vehicleId"),type:"treeSelect",key:"vehicleId",valueKey:"vehicleId",offsetWidth:"320",label:e.licenseNum,treeOption:{defaultProps:{children:"children",label:"treeName"},nodeKey:"treeId",nodeCode:"iconfont Jamin_vehicle_icon_clgl1",defaultExpandAll:!1,expandClickNode:!1,screenFn:{bindFn:function(e,t){return!e||-1!==t.treeName.indexOf(e)}}},treeDefinedData:this.$parent.$parent.$parent.$parent.carTreeData,rules:[{required:!0,message:this.$t("InsurancePage.form_vehicleId_placeholder"),trigger:"change"}],handlerCallback:{target:"clickFunction",funcName:"vehicleChange"}},{title:this.$t("InsurancePage.form_edit_wx_driverId"),type:"select",key:"driverId",offsetWidth:"320",filterable:!0,options:{type:"default",list:this.driverIds},rules:[{required:!0,message:this.$t("InsurancePage.form_edit_wx_driverId_placeholder"),trigger:"change"}]},{title:this.$t("InsurancePage.form_edit_wx_accidentDuty"),type:"select",key:"accidentDuty",offsetWidth:"320",filterable:!0,options:{type:"default",list:[{value:2,name:this.$t("InsurancePage.accidentDuty_1")},{value:1,name:this.$t("InsurancePage.accidentDuty_2")}]},rules:[{required:!0,message:this.$t("InsurancePage.form_edit_wx_accidentDuty_placeholder"),trigger:"change"}]},{title:this.$t("InsurancePage.form_edit_wx_accidentAt"),type:"dateSelect",offsetWidth:"320",key:"accidentAt",valueFormat:"yyyy-MM-dd",rules:[{required:!0,message:this.$t("InsurancePage.form_edit_wx_accidentAt_placeholder"),trigger:"change"}]},{title:this.$t("InsurancePage.form_edit_wx_location"),type:"input",key:"location",offsetWidth:"320",rules:[{required:!0,message:this.$t("InsurancePage.form_edit_wx_location_placeholder"),trigger:"blur"}]},{title:this.$t("InsurancePage.form_edit_wx_payoutAmount"),type:"input",offsetWidth:"320",key:"payoutAmount"},{title:this.$t("InsurancePage.form_edit_wx_repairFees"),type:"input",offsetWidth:"320",key:"repairFees"},{title:this.$t("InsurancePage.form_edit_wx_accidentDescription"),type:"input",offsetWidth:"320",key:"accidentDescription"},{title:this.$t("InsurancePage.form_description"),type:"input",offsetWidth:"320",key:"remark"},{title:this.$t("InsurancePage.form_attachedPhoto"),type:"imgUpload",offsetWidth:"320",action:this.$config.API_CONFIG.API_ROOT+"/file/upload/attachedPhoto",key:"attachedPhoto",accept:"image/jpeg,image/png",headers:{Authorization:this.$store.getters.userData.tokenHead+this.$store.getters.userData.token},showFileList:!1,beforeUpload:function(e){},onProgress:function(e){},onSuccess:function(e){e.code===t.$config.API_STATUS.OK&&t.$set(t.$refs.drawer.formData,"attachedPhoto",e.data.url)}}],formButton:[{name:this.$t("confirm.determine"),type:"confirm",class:"primary"},{name:this.$t("confirm.cancel"),type:"cancel",class:""}],message:{type:"success",message:this.$t("confirm.editSuccess")}}},detail:function(e){this.vehicleChange(e.vehicleId,0),this.drawerDisplay=!0,this.drawerData={staticData:e,isShow:!0,title:this.$t("InsurancePage.detail_accident_title"),titleWidth:"120",btnAlign:"center",formList:[{title:this.$t("InsurancePage.form_edit_wx_vehicleId"),type:"text",key:"licenseNum",offsetWidth:"320"},{title:this.$t("InsurancePage.form_edit_wx_driverId"),type:"textSelect",key:"driverId",offsetWidth:"320",filterable:!0,list:this.driverIds},{title:this.$t("InsurancePage.form_edit_wx_accidentDuty"),type:"textSelect",key:"accidentDuty",offsetWidth:"320",list:[{value:2,name:this.$t("InsurancePage.accidentDuty_1")},{value:1,name:this.$t("InsurancePage.accidentDuty_2")}]},{title:this.$t("InsurancePage.form_edit_wx_accidentAt"),type:"text",offsetWidth:"320",key:"accidentAt"},{title:this.$t("InsurancePage.form_edit_wx_location"),type:"text",key:"location",offsetWidth:"320",rules:[{required:!0,message:"请输入事故地点",trigger:"blur"}]},{title:this.$t("InsurancePage.form_edit_wx_payoutAmount"),type:"text",offsetWidth:"320",key:"payoutAmount"},{title:this.$t("InsurancePage.form_edit_wx_repairFees"),type:"text",offsetWidth:"320",key:"repairFees"},{title:this.$t("InsurancePage.form_edit_wx_accidentDescription"),type:"text",offsetWidth:"320",key:"accidentDescription"},{title:this.$t("InsurancePage.form_description"),type:"text",offsetWidth:"320",key:"remark"},{title:this.$t("InsurancePage.detail_attachedPhoto"),type:"imageView",offsetWidth:"320",key:"attachedPhoto"}]}},increase:function(){var e=this;this.drawerDisplay=!0,this.drawerData={isShow:!0,title:this.$t("InsurancePage.form_add_sg_title"),titleWidth:"120",data:{},defaultData:"",submitAction:"/accident/create",btnAlign:"center",formList:[{title:this.$t("InsurancePage.form_edit_wx_vehicleId"),type:"treeSelect",key:"vehicleId",valueKey:"vehicleId",offsetWidth:"320",treeOption:{defaultProps:{children:"children",label:"treeName"},nodeKey:"treeId",nodeCode:"iconfont Jamin_vehicle_icon_clgl1",defaultExpandAll:!1,expandClickNode:!1,screenFn:{bindFn:function(e,t){return!e||-1!==t.treeName.indexOf(e)}}},treeDefinedData:this.$parent.$parent.$parent.$parent.carTreeData,rules:[{required:!0,message:this.$t("InsurancePage.form_vehicleId_placeholder"),trigger:"blur"}],handlerCallback:{target:"clickFunction",funcName:"vehicleChange"}},{title:this.$t("InsurancePage.form_edit_wx_driverId"),type:"select",key:"driverId",offsetWidth:"320",filterable:!0,options:{type:"default",list:this.driverIds},rules:[{required:!0,message:this.$t("InsurancePage.form_edit_wx_driverId_placeholder"),trigger:"change"}]},{title:this.$t("InsurancePage.form_edit_wx_accidentDuty"),type:"select",key:"accidentDuty",offsetWidth:"320",filterable:!0,options:{type:"default",list:[{value:2,name:this.$t("InsurancePage.accidentDuty_1")},{value:1,name:this.$t("InsurancePage.accidentDuty_2")}]},rules:[{required:!0,message:this.$t("InsurancePage.form_edit_wx_accidentDuty"),trigger:"change"}]},{title:this.$t("InsurancePage.form_edit_wx_accidentAt"),type:"dateSelect",offsetWidth:"320",key:"accidentAt",valueFormat:"yyyy-MM-dd",rules:[{required:!0,message:this.$t("InsurancePage.form_edit_wx_accidentAt_placeholder"),trigger:"change"}]},{title:this.$t("InsurancePage.form_edit_wx_location"),type:"input",key:"location",offsetWidth:"320",rules:[{required:!0,message:this.$t("InsurancePage.form_edit_wx_location_placeholder"),trigger:"blur"}]},{title:this.$t("InsurancePage.form_edit_wx_payoutAmount"),type:"input",offsetWidth:"320",key:"payoutAmount"},{title:this.$t("InsurancePage.form_edit_wx_repairFees"),type:"input",offsetWidth:"320",key:"repairFees"},{title:this.$t("InsurancePage.form_edit_wx_accidentDescription"),type:"input",offsetWidth:"320",key:"accidentDescription"},{title:this.$t("InsurancePage.form_description"),type:"input",offsetWidth:"320",key:"remark"},{title:this.$t("InsurancePage.form_attachedPhoto"),type:"imgUpload",offsetWidth:"320",action:this.$config.API_CONFIG.API_ROOT+"/file/upload/attachedPhoto",key:"attachedPhoto",accept:"image/jpeg,image/png",headers:{Authorization:this.$store.getters.userData.tokenHead+this.$store.getters.userData.token},showFileList:!1,beforeUpload:function(e){},onProgress:function(e){},onSuccess:function(t){t.code===e.$config.API_STATUS.OK&&e.$set(e.$refs.drawer.formData,"attachedPhoto",t.data.url)}}],formButton:[{name:this.$t("confirm.determine"),type:"confirm",class:"primary"},{name:this.$t("confirm.cancel"),type:"cancel",class:""}],message:{type:"success",message:this.$t("confirm.addSuccess")},confirmSubmitFn:function(e,t){e.payoutAmount=parseFloat(e.payoutAmount),e.repairFees=parseFloat(e.repairFees)}}},export:function(){var e=this;this.$confirm(this.$t("confirm.export"),this.$t("confirm.title"),{confirmButtonText:this.$t("confirm.determine"),cancelButtonText:this.$t("confirm.cancel"),type:"warning",closeOnClickModal:!1,beforeClose:function(t,i,a){e.fieldMap={},e.tableOptions.columns.forEach(function(t){e.$refs.table.columnCheckList.forEach(function(i){t.key===i&&"operate"!==t.key&&(e.fieldMap[i]=t.title)})});var n=e.$refs.table._data.searchParams,r=n.licenseNum,s=n.companyIds,o=n.type;if("confirm"===t){var c={fieldMap:e.fieldMap,licenseNum:r,companyIds:s?JSON.parse(s):[],type:o};e.$http.download("/accident/export?isToken=true",c),a()}else a()}}).catch(function(){})},delete:function(e){var t=this;this.$confirm(this.$t("confirm.del"),this.$t("confirm.title"),{confirmButtonText:this.$t("confirm.determine"),cancelButtonText:this.$t("confirm.cancel"),type:"warning"}).then(function(){var i=[];e.forEach(function(e,t){i[t]=e.accidentId}),t.$http.deleteApi("/accident/delete",{ids:i.join(",")}).then(function(e){e.code===t.$config.API_STATUS.OK&&(t.$refs.table.initRequestTableData(),t.$message({message:e.message,type:"success"}))})})},diaClose:function(e){e&&this.$refs.table.initRequestTableData(),this.drawerDisplay=!1},drawerCallback:function(e,t,i,a){this[e.handlerCallback.funcName].call(function(){},t,i,a)}}},o=(i("EVil"),i("ZrdR")),c=Object(o.a)(s,function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"main"},[i("table-view",{ref:"table",attrs:{center:"","id-key":"accidentId","is-search":!0,"check-memory":!0,data:e.tableOptions.data,total:e.tableOptions.total,columns:e.tableOptions.columns,"search-controls":e.tableOptions.searchControls,"footer-buttons":e.tableOptions.footerButtons,"button-controls":e.tableOptions.buttonControls,"pagination-layout":e.tableOptions.paginationLayout,loading:e.tableOptions.loading,"view-table-key":"accident",checked:"","column-view":"",alias:e.alias},on:{requestTableData:e.getTableData,handleCallback:e.tableResponseFn}},[i("el-table-column",{attrs:{slot:"number",label:e.$t("view.index"),type:"index",align:"center"},slot:"number"})],1),e._v(" "),e.drawerDisplay?i("drawer",{ref:"drawer",attrs:{size:"small","drawer-data":e.drawerData},on:{diaClose:e.diaClose,handlerCallback:e.drawerCallback}}):e._e()],1)},[],!1,null,"3e01a743",null);c.options.__file="accident.vue";t.default=c.exports},"9k2h":function(e,t,i){},EVil:function(e,t,i){"use strict";var a=i("9k2h");i.n(a).a},YelX:function(e,t,i){"use strict";i.r(t);var a=i("bS4n"),n=i.n(a),r=i("8t5x");t.default={data:function(){return{permissionList:{vehicleUpdate:"/vehicle/update/**",vehicleExport:"/vehicle/export",vehicleDelete:"/vehicle/delete",vehicleList:"/vehicle/list",vehicleCreate:"/vehicle/create",vehicleFastCreate:"/vehicle/fastCreate",vehicleMotorcadeCreate:"/vehicle/motorcade/create",vehicleMotorcadeUpdate:"/vehicle/motorcade/update",vehicleMotorcadeDelete:"/vehicle/motorcade/delete/**",companyList:"/company/list",companyCreate:"/company/create",companyExport:"/company/export",companyDetail:"/company/**",companyUpdate:"/company/update/**",companyPersonalization:"/company/personalization/**",companyDelete:"/company/delete",driverList:"/driver/list",driverCreate:"/driver/create",driverDetail:"/driver/get/**",driverUpdate:"/driver/update/**",driverDelete:"/driver/delete",driverExport:"/driver/export",labelList:"/label/list",labelCreate:"/label/create",labelUpdate:"/label/update/**",labelDelete:"/label/delete",labelExport:"/label/export",regionList:"/region/list",regionCreate:"/region/create",regionUpdate:"/region/update/**",regionDelete:"/region/delete",regionExport:"/region/export",routeList:"/route/list",routeCreate:"/route/create",routeUpdate:"/route/update/**",routeDelete:"/route/delete",routeExport:"/route/export",adminList:"/admin/list",adminCreate:"/admin/create",adminUpdate:"/admin/update/**",adminDelete:"/admin/delete",adminExport:"/admin/export",typeCreate:"/ef/type/create",typeUpdate:"/ef/type/update/**",typeDelete:"/ef/type/delete/**",drivingLicenseList:"/driving/license/list",drivingLicenseCreate:"/driving/license/create",drivingLicenseUpdate:"/driving/license/update/**",drivingLicenseDelete:"/driving/license/delete",drivingLicense:"/driving/license/export",transportList:"/transport/list",transportCreate:"/transport/create",transportUpdate:"/transport/update/**",transportDelete:"/transport/delete",transportExport:"/transport/export",maintainList:"/maintain/list",maintainCreate:"/maintain/create",maintainUpdate:"/maintain/update/**",maintainDelete:"/maintain/delete",maintainExport:"/maintain/export",insuranceList:"/insurance/list",insuranceCreate:"/insurance/create",insuranceUpdate:"/insurance/update/**",insuranceDelete:"/insurance/delete",insuranceExport:"/insurance/export",insuranceListAdvance:"/insurance/list/advance",annualList:"/annual/list",annualCreate:"/annual/create",annualUpdate:"/annual/update/**",annualDelete:"/annual/delete",annualExport:"/annual/export",annualListAdvance:"/annual/list/advance",repairList:"/repair/list",repairCreate:"/repair/create",repairUpdate:"/repair/update/**",repairDelete:"/repair/delete",repairExport:"/repair/export",accidentList:"/accident/list",accidentCreate:"/accident/create",accidentUpdate:"/accident/update/**",accidentDelete:"/accident/delete",accidentExport:"/accident/export",simList:"/sim/list",simCreate:"/sim/create",simUpdate:"/sim/update/**",simDelete:"/sim/delete",simExport:"/sim/export"}}},computed:n()({},Object(r.b)(["permsData"]),{isAdministrator:function(){return[-1,-2].includes(Number(this.$store.getters.userData.userType))}}),watch:{permsData:{handler:function(){this.handlePermissionShow&&this.handlePermissionShow()},immediate:!0}},methods:{isPermissionShow:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return!!this.isAdministrator||this.permsData.includes(this.permissionList[e])}}}}}]);