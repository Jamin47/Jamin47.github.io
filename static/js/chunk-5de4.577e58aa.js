(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-5de4","YelX","YelX","YelX"],{"7eM9":function(e,t,a){"use strict";var n=a("BAZy");a.n(n).a},BAZy:function(e,t,a){},Y4hI:function(e,t,a){"use strict";a.r(t);var n=a("BHIJ"),i=a("AlM9"),r=a("YelX"),o={components:{TableView:i.a,drawer:n.a},mixins:[r.default],data:function(){return{drawerDisplay:!1,drawerData:{},alias:{pageSize:"pageSize",pageNum:"pageNum"},tableOptions:{data:[],total:0,columns:[{type:"slot",name:"number",title:"序号"},{title:this.$t("InsurancePage.licenseNum"),key:"licenseNum",minWidth:"180",type:"text"},{title:this.$t("InsurancePage.companyName"),key:"companyName",type:"text",minWidth:"180"},{title:this.$t("InsurancePage.annualAt_1"),key:"annualAt",minWidth:"180",type:"text"},{title:this.$t("InsurancePage.timeoutAt_2"),key:"timeoutAt",minWidth:"180",type:"text"},{title:this.$t("InsurancePage.overDayNum"),key:"overDayNum",minWidth:"130",type:"slot",name:"overDayNum"},{title:this.$t("operation.operation"),type:"operate",key:"operate",fixed:"right",width:"160",buttons:[]}],buttonControls:[],searchControls:[{type:"input",key:"licenseNum",placeholder:this.$t("view.license_num"),width:"200px"},{type:"treeSelect",key:"companyIds",valueKey:"companyId",placeholder:this.$t("view.searchControl_company"),width:"200px",clearable:!0,treeOption:{defaultProps:{children:"sysCompanyNodes",label:"name"},nodeKey:"companyId",defaultExpandAll:!1,expandClickNode:!1,checkbox:!0,screenFn:{bindFn:function(e,t){return!e||-1!==t.name.indexOf(e)}}},treeDefinedData:this.$parent.$parent.$parent.$parent.companyTreeData}],footerButtons:[],paginationLayout:"total, sizes, prev, pager, next, jumper",loading:!1}}},computed:{},created:function(){},mounted:function(){},methods:{handlePermissionShow:function(){this.tableOptions.buttonControls=[],this.isPermissionShow("annualExport")&&this.tableOptions.buttonControls.push({text:this.$t("operation.export_record"),type:"null",round:!1,icon:"el-icon-download",funcName:"export"}),this.tableOptions.footerButtons=[],this.isPermissionShow("annualDelete")&&this.tableOptions.footerButtons.push({text:this.$t("operation.delete"),type:"danger",icon:"el-icon-delete",round:!1,funcName:"delete"});var e=this.tableOptions.columns.findIndex(function(e){return"operate"===e.key});this.tableOptions.columns[e].buttons=[],e>-1&&this.isPermissionShow("annualUpdate")&&this.tableOptions.columns[e].buttons.push({tipText:this.$t("operation.edit"),icon:"iconfont Jamin_vehicle_icon_bj",type:"text",funcName:"edit"})},getTableData:function(e){var t=this;this.tableOptions.loading=!0;var a={licenseNum:e.licenseNum,companyIds:e.companyIds?JSON.parse(e.companyIds):[]};this.$http.post("/annual/list/advance?pageNum="+e.pageNum+"&pageSize="+e.pageSize,a).then(function(e){e.code===t.$config.API_STATUS.OK&&(t.tableOptions.loading=!1,t.tableOptions.data=e.data.list,t.tableOptions.total=e.data.total)})},tableResponseFn:function(e,t,a){this[t.funcName].call(function(){},e,t,a)},edit:function(e){var t=this;this.$http.get("/annual/"+e.annualId).then(function(a){if(a.code===t.$config.API_STATUS.OK){e=a.data;var n=function(e,a,n){t.$refs.drawer.formData.annualAt&&t.$refs.drawer.formData.timeoutAt?new Date(t.$refs.drawer.formData.annualAt).getTime()>new Date(t.$refs.drawer.formData.timeoutAt).getTime()?n(new Error(t.$t("InsurancePage.form_vehicleId_placeholder"))):n():n()};t.drawerDisplay=!0,t.drawerData={staticData:e,isShow:!0,title:t.$t("InsurancePage.form_editTitle_1"),titleWidth:"120",data:{},defaultData:"",submitAction:"/annual/update/"+e.annualId,btnAlign:"center",formList:[{title:t.$t("InsurancePage.form_vehicleId_1"),type:"treeSelect",key:"vehicleId",valueKey:"vehicleId",offsetWidth:"320",label:e.licenseNum,treeOption:{defaultProps:{children:"children",label:"treeName"},nodeKey:"treeId",nodeCode:"iconfont Jamin_vehicle_icon_clgl1",defaultExpandAll:!1,expandClickNode:!1,screenFn:{bindFn:function(e,t){return!e||-1!==t.treeName.indexOf(e)}}},treeDefinedData:t.$parent.$parent.$parent.$parent.carTreeData,rules:[{required:!0,message:t.$t("InsurancePage.form_vehicleId_placeholder"),trigger:"blur"}]},{title:t.$t("InsurancePage.annualAt"),type:"dateSelect",valueFormat:"yyyy-MM-dd",offsetWidth:"320",key:"annualAt",rules:[{required:!0,message:t.$t("InsurancePage.form_edit_annualAt_placeholder"),trigger:"change"},{validator:n,trigger:"change"}]},{title:t.$t("InsurancePage.timeoutAt_2"),type:"dateSelect",valueFormat:"yyyy-MM-dd",offsetWidth:"320",key:"timeoutAt",rules:[{required:!0,message:t.$t("InsurancePage.form_edit_timeoutAt_placeholder"),trigger:"change"},{validator:n,trigger:"change"}]},{title:t.$t("InsurancePage.price"),type:"input",key:"price",offsetWidth:"320"},{title:t.$t("InsurancePage.form_payer"),type:"input",offsetWidth:"320",key:"payer"},{title:t.$t("InsurancePage.form_handler"),type:"input",offsetWidth:"320",key:"handler"},{title:t.$t("InsurancePage.form_phone"),type:"input",offsetWidth:"320",key:"phone"},{title:t.$t("InsurancePage.form_description"),type:"input",offsetWidth:"320",key:"remark"},{title:t.$t("InsurancePage.form_attachedPhoto"),type:"imgUpload",offsetWidth:"320",action:t.$config.API_CONFIG.API_ROOT+"/file/upload/attachedPhoto",key:"attachedPhoto",accept:"image/jpeg,image/png",headers:{Authorization:t.$store.getters.userData.tokenHead+t.$store.getters.userData.token},showFileList:!1,beforeUpload:function(e){},onProgress:function(e){},onSuccess:function(e){e.code===t.$config.API_STATUS.OK&&t.$set(t.$refs.drawer.formData,"attachedPhoto",e.data.url)}}],formButton:[{name:t.$t("confirm.determine"),type:"confirm",class:"primary"},{name:t.$t("confirm.cancel"),type:"cancel",class:""}],message:{type:"success",message:t.$t("confirm.editSuccess")}}}})},export:function(){var e=this;this.$confirm(this.$t("confirm.export"),this.$t("confirm.title"),{confirmButtonText:this.$t("confirm.determine"),cancelButtonText:this.$t("confirm.cancel"),type:"warning",closeOnClickModal:!1,beforeClose:function(t,a,n){e.fieldMap={},e.tableOptions.columns.forEach(function(t){e.$refs.table.columnCheckList.forEach(function(a){t.key===a&&"operate"!==t.key&&(e.fieldMap[a]=t.title)})});var i=e.$refs.table._data.searchParams,r=i.licenseNum,o=i.companyIds;if("confirm"===t){var s={fieldMap:e.fieldMap,licenseNum:r,companyIds:o?JSON.parse(o):[]};e.$http.download("/annual/export?isToken=true",s),n()}else n()}}).catch(function(){})},delete:function(e){var t=this;this.$confirm(this.$t("confirm.del"),this.$t("confirm.title"),{confirmButtonText:this.$t("confirm.determine"),cancelButtonText:this.$t("confirm.cancel"),type:"warning"}).then(function(){var a=[];e.forEach(function(e,t){a[t]=e.annualId}),t.$http.deleteApi("/annual/delete",{ids:a.join(",")}).then(function(e){e.code===t.$config.API_STATUS.OK&&(t.$refs.table.initRequestTableData(),t.$message({message:e.message,type:"success"}))})})},diaClose:function(e){e&&this.$refs.table.initRequestTableData(),this.drawerDisplay=!1},drawerCallback:function(e,t,a,n){this[e.handlerCallback.funcName].call(function(){},t,a,n)}}},s=(a("7eM9"),a("ZrdR")),l=Object(s.a)(o,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"main"},[a("table-view",{ref:"table",attrs:{center:"","id-key":"annualId","is-search":!0,"check-memory":!0,data:e.tableOptions.data,total:e.tableOptions.total,columns:e.tableOptions.columns,"search-controls":e.tableOptions.searchControls,"footer-buttons":e.tableOptions.footerButtons,"button-controls":e.tableOptions.buttonControls,"pagination-layout":e.tableOptions.paginationLayout,loading:e.tableOptions.loading,"view-table-key":"remind",checked:"","column-view":"",alias:e.alias},on:{requestTableData:e.getTableData,handleCallback:e.tableResponseFn}},[a("el-table-column",{attrs:{slot:"number",label:e.$t("view.index"),type:"index",align:"center"},slot:"number"}),e._v(" "),a("el-table-column",{attrs:{slot:"overDayNum",label:e.$t("InsurancePage.overDayNum"),align:"center",width:"130"},slot:"overDayNum",scopedSlots:e._u([{key:"default",fn:function(t){return null!==t.row.overDayNum?[t.row.overDayNum>=0?a("span",[e._v("\n          "+e._s(e.$t("common.remaining"))+" "+e._s(t.row.overDayNum)+" "+e._s(e.$t("common.day"))+"\n        ")]):e._e(),e._v(" "),t.row.overDayNum<0?a("span",[e._v("\n          "+e._s(e.$t("common.overdue"))+" "+e._s(Math.abs(t.row.overDayNum))+" "+e._s(e.$t("common.day"))+"\n        ")]):e._e()]:void 0}}])})],1),e._v(" "),e.drawerDisplay?a("drawer",{ref:"drawer",attrs:{size:"small","drawer-data":e.drawerData},on:{diaClose:e.diaClose,handlerCallback:e.drawerCallback}}):e._e()],1)},[],!1,null,"3f51b2de",null);l.options.__file="remind.vue";t.default=l.exports},YelX:function(e,t,a){"use strict";a.r(t);var n=a("bS4n"),i=a.n(n),r=a("8t5x");t.default={data:function(){return{permissionList:{vehicleUpdate:"/vehicle/update/**",vehicleExport:"/vehicle/export",vehicleDelete:"/vehicle/delete",vehicleList:"/vehicle/list",vehicleCreate:"/vehicle/create",vehicleFastCreate:"/vehicle/fastCreate",vehicleMotorcadeCreate:"/vehicle/motorcade/create",vehicleMotorcadeUpdate:"/vehicle/motorcade/update",vehicleMotorcadeDelete:"/vehicle/motorcade/delete/**",companyList:"/company/list",companyCreate:"/company/create",companyExport:"/company/export",companyDetail:"/company/**",companyUpdate:"/company/update/**",companyPersonalization:"/company/personalization/**",companyDelete:"/company/delete",driverList:"/driver/list",driverCreate:"/driver/create",driverDetail:"/driver/get/**",driverUpdate:"/driver/update/**",driverDelete:"/driver/delete",driverExport:"/driver/export",labelList:"/label/list",labelCreate:"/label/create",labelUpdate:"/label/update/**",labelDelete:"/label/delete",labelExport:"/label/export",regionList:"/region/list",regionCreate:"/region/create",regionUpdate:"/region/update/**",regionDelete:"/region/delete",regionExport:"/region/export",routeList:"/route/list",routeCreate:"/route/create",routeUpdate:"/route/update/**",routeDelete:"/route/delete",routeExport:"/route/export",adminList:"/admin/list",adminCreate:"/admin/create",adminUpdate:"/admin/update/**",adminDelete:"/admin/delete",adminExport:"/admin/export",typeCreate:"/ef/type/create",typeUpdate:"/ef/type/update/**",typeDelete:"/ef/type/delete/**",drivingLicenseList:"/driving/license/list",drivingLicenseCreate:"/driving/license/create",drivingLicenseUpdate:"/driving/license/update/**",drivingLicenseDelete:"/driving/license/delete",drivingLicense:"/driving/license/export",transportList:"/transport/list",transportCreate:"/transport/create",transportUpdate:"/transport/update/**",transportDelete:"/transport/delete",transportExport:"/transport/export",maintainList:"/maintain/list",maintainCreate:"/maintain/create",maintainUpdate:"/maintain/update/**",maintainDelete:"/maintain/delete",maintainExport:"/maintain/export",insuranceList:"/insurance/list",insuranceCreate:"/insurance/create",insuranceUpdate:"/insurance/update/**",insuranceDelete:"/insurance/delete",insuranceExport:"/insurance/export",insuranceListAdvance:"/insurance/list/advance",annualList:"/annual/list",annualCreate:"/annual/create",annualUpdate:"/annual/update/**",annualDelete:"/annual/delete",annualExport:"/annual/export",annualListAdvance:"/annual/list/advance",repairList:"/repair/list",repairCreate:"/repair/create",repairUpdate:"/repair/update/**",repairDelete:"/repair/delete",repairExport:"/repair/export",accidentList:"/accident/list",accidentCreate:"/accident/create",accidentUpdate:"/accident/update/**",accidentDelete:"/accident/delete",accidentExport:"/accident/export",simList:"/sim/list",simCreate:"/sim/create",simUpdate:"/sim/update/**",simDelete:"/sim/delete",simExport:"/sim/export"}}},computed:i()({},Object(r.b)(["permsData"]),{isAdministrator:function(){return[-1,-2].includes(Number(this.$store.getters.userData.userType))}}),watch:{permsData:{handler:function(){this.handlePermissionShow&&this.handlePermissionShow()},immediate:!0}},methods:{isPermissionShow:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return!!this.isAdministrator||this.permsData.includes(this.permissionList[e])}}}}}]);