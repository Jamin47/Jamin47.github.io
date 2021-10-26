(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-e970","YelX","YelX","YelX"],{C1Wa:function(e,t,a){"use strict";var n=a("s3Gs");a.n(n).a},S2YK:function(e,t,a){"use strict";a.r(t);var n=a("cLjf"),i=a.n(n),o=a("hDQ3"),s=a.n(o),r=a("unDg"),c=a.n(r),l=a("AlM9"),p=a("BHIJ"),d=a("XVnh"),m=a("YelX"),u={name:"CompanyManagement",components:{TableView:l.a,drawer:p.a,notPerm:d.a},mixins:[m.default],data:function(){return{industry:[],fieldMap:{},companyList:[],display:!1,drawerDisplay:!1,drawerData:{},alias:{pageSize:"pageSize",pageNum:"pageNum"},isTable:!0,tableOptions:{data:[],total:0,columns:[{type:"slot",name:"number",title:this.$t("view.index")},{title:this.$t("companyPage.name"),key:"name",type:"text"},{title:this.$t("companyPage.abbrName"),key:"abbrName",type:"text"},{title:this.$t("companyPage.account"),key:"account",type:"text"},{title:this.$t("companyPage.industry"),key:"industry",type:"tagText",tags:[]},{title:this.$t("companyPage.parentName"),key:"parentName",type:"text"},{title:this.$t("companyPage.vehiclesTotal"),key:"vehiclesTotal",type:"text"},{title:this.$t("companyPage.tagText"),key:"status",type:"tagText",tags:[{value:1,text:this.$t("companyPage.tagText_1")},{value:0,text:this.$t("companyPage.tagText_2"),option:{type:"warning"}}]},{title:this.$t("companyPage.createTime"),key:"createTime",type:"text"},{title:this.$t("operation.operation"),key:"operate",type:"operate",fixed:"right",width:"140",buttons:[]}],buttonControls:[],searchControls:[{type:"treeSelect",key:"parentId",valueKey:"companyId",placeholder:this.$t("companyPage.parentName"),width:"200px",treeOption:{defaultProps:{children:"sysCompanyNodes",label:"name"},nodeKey:"companyId",defaultExpandAll:!1,expandClickNode:!1,screenFn:{bindFn:function(e,t){return!e||-1!==t.name.indexOf(e)}}},treeDefinedData:[]},{type:"input",key:"name",placeholder:this.$t("companyPage.control_button_company_placeholder"),width:"200px"},{type:"select",key:"industry",placeholder:this.$t("companyPage.control_button_industry_placeholder"),width:"200px",clearable:!0,options:[]},{type:"select",key:"status",placeholder:this.$t("companyPage.control_button_tagText_placeholder"),width:"200px",clearable:!0,options:[{name:this.$t("companyPage.tagText_1"),value:1},{name:this.$t("companyPage.tagText_2"),value:0}]}],footerButtons:[],paginationLayout:"total, sizes, prev, pager, next, jumper",loading:!1},params:null}},computed:{},created:function(){this.getCompanyDataFn()},mounted:function(){this.industryList()},methods:{handlePermissionShow:function(){this.tableOptions.buttonControls=[],this.isPermissionShow("companyCreate")&&this.tableOptions.buttonControls.push({text:this.$t("companyPage.control_button_addcompany"),type:"primary",funcName:"increase"}),this.isPermissionShow("companyExport")&&this.tableOptions.buttonControls.push({text:this.$t("operation.export_record"),type:"null",funcName:"export",dataStatus:!0}),this.tableOptions.footerButtons=[],this.isPermissionShow("companyUpdate")&&this.tableOptions.footerButtons.push({text:this.$t("operation.enable"),type:"",size:"small",icon:"el-icon-switch-button",round:!1,funcName:"enable"}),this.isPermissionShow("companyUpdate")&&this.tableOptions.footerButtons.push({text:this.$t("operation.prohibit"),type:"danger",size:"small",icon:"el-icon-circle-close",round:!1,funcName:"disable"}),this.isPermissionShow("companyDelete")&&this.tableOptions.footerButtons.push({text:this.$t("operation.delete"),type:"danger",size:"small",icon:"el-icon-delete",round:!1,funcName:"delete"});var e=this.tableOptions.columns.findIndex(function(e){return"operate"===e.key});this.tableOptions.columns[e].buttons=[],e>-1&&this.isPermissionShow("companyDetail")&&this.tableOptions.columns[e].buttons.push({tipText:this.$t("operation.detail"),type:"text",icon:"iconfont Jamin_vehicle_ico_xq",funcName:"details"}),e>-1&&this.isPermissionShow("companyUpdate")&&this.tableOptions.columns[e].buttons.push({tipText:this.$t("operation.edit"),type:"text",icon:"iconfont Jamin_vehicle_icon_bj",funcName:"edit"}),e>-1&&this.isPermissionShow("companyPersonalization")&&this.tableOptions.columns[e].buttons.push({tipText:this.$t("operation.personalized"),type:"text",icon:"iconfont Jamin_vehicle_icon_gxh",funcName:"individualization"})},industryList:function(){var e=this;this.$http.get("/dict/list/codes",{dicCodes:"industry"}).then(function(t){t.code===e.$config.API_STATUS.OK&&t.data.industry.forEach(function(t,a){e.industry[a]={value:t.itemName,name:t.itemValue},e.tableOptions.columns[4].tags[a]={value:t.itemName,text:t.itemValue},e.tableOptions.searchControls[2].options[a]={value:t.itemName,name:t.itemValue}})})},getCompanyDataFn:function(){var e=this;this.$http.get("/company/treeList").then(function(t){if(t.code===e.$config.API_STATUS.OK){if(e.tableOptions.searchControls[0].treeDefinedData=t.data,-1===e.$store.getters.userData.userType){e.companyList=[{name:"无",companyId:0,parentId:0,sysCompanyNodes:[]}].concat(c()(t.data))}else e.companyList=t.data;e.tableOptions.searchControls[0].treeDefinedData=t.data,e.isTable=!1,e.$nextTick(function(){e.isTable=!0})}})},getTableData:function(e){var t=this;this.tableOptions.loading=!0,this.companyList.length&&(e.parentId?e.parentId=[e.parentId]:e.parentId=[],this.$http.post("/company/list?pageNum="+e.pageNum+"&pageSize="+e.pageSize,e).then(function(e){e.code===t.$config.API_STATUS.OK?(t.tableOptions.data=e.data.list,t.tableOptions.total=e.data.total):(t.tableOptions.data=[],t.tableOptions.total=0),t.tableOptions.loading=!1}).catch(function(){t.tableOptions.data=[],t.tableOptions.total=0,t.tableOptions.loading=!1}),this.params=e)},tableResponseFn:function(e,t,a){this[t.funcName].call(function(){},e,t,a)},increase:function(){var e=this,t={disabledDate:function(e){return e.getTime()<Date.now()}};this.drawerDisplay=!0,this.drawerData={isShow:!0,title:this.$t("companyPage.form_add_title"),titleWidth:"120",btnAlign:"center",submitAction:"/company/create",formList:[{title:this.$t("companyPage.name"),type:"input",key:"name",offsetWidth:"320",rules:[{required:!0,message:this.$t("companyPage.name_placeholder"),trigger:"blur"}]},{title:this.$t("companyPage.abbrName"),type:"input",key:"abbrName",offsetWidth:"320",rules:[{required:!0,message:this.$t("companyPage.abbrName_placeholder"),trigger:"blur"}]},{title:this.$t("companyPage.parentName"),type:"treeSelect",key:"parentId",valueKey:"companyId",offsetWidth:"320",treeOption:{defaultProps:{children:"sysCompanyNodes",label:"name"},nodeKey:"companyId",defaultExpandAll:!1,expandClickNode:!1,screenFn:{bindFn:function(e,t){return!e||-1!==t.name.indexOf(e)}}},treeDefinedData:this.companyList,rules:[{required:!0,message:this.$t("companyPage.parentName_placeholder"),trigger:"blur"}]},{title:this.$t("companyPage.account"),type:"input",key:"account",offsetWidth:"320",placeholder:this.$t("companyPage.account_placeholder"),rules:[{required:!0,message:this.$t("companyPage.account_placeholder_1"),trigger:"blur"},{min:5,max:20,message:this.$t("companyPage.account_placeholder_2"),trigger:"blur"}]},{title:this.$t("companyPage.form_add_password"),type:"input",offsetWidth:"320",key:"password",placeholder:this.$t("companyPage.form_add_password_placeholder"),rules:[{required:!0,message:this.$t("companyPage.form_add_password_placeholder_1"),trigger:"blur"},{validator:function(t,a,n){a.length<6||a.length>20?n(new Error(e.$t("companyPage.control_input_tip"))):/^[a-z0-9]+$/i.test(a)?n():n(new Error(e.$t("companyPage.control_input_tip_1")))},trigger:"blur"}]},{title:this.$t("companyPage.form_add_username"),type:"input",key:"username",offsetWidth:"320",rules:[{required:!0,message:this.$t("companyPage.form_add_username_placeholder"),trigger:"blur"}]},{title:this.$t("companyPage.form_add_timeoutAt"),type:"dateSelect",valueFormat:"yyyy-MM-dd",key:"timeoutAt",offsetWidth:"320",pickerOptions:t,placeholder:this.$t("companyPage.form_add_timeoutAt_placeholder")},{title:this.$t("companyPage.industry"),type:"select",key:"industry",offsetWidth:"320",filterable:!0,options:{type:"default",list:this.industry}},{title:this.$t("companyPage.form_add_contactPerson"),type:"input",offsetWidth:"320",key:"contactPerson"},{title:this.$t("companyPage.form_add_contactPhone"),type:"input",offsetWidth:"320",key:"contactPhone",rules:[{required:!0,message:this.$t("companyPage.form_add_contactPhone_placeholder"),trigger:"blur"}]},{title:this.$t("companyPage.form_add_contactAddr"),type:"input",offsetWidth:"320",key:"contactAddr"}],formButton:[{name:this.$t("confirm.determine"),type:"confirm",class:"primary"},{name:this.$t("confirm.cancel"),type:"cancel",class:""}],message:{type:"success",message:this.$t("companyPage.form_add_scuuess")}}},export:function(){var e=this;this.$confirm(this.$t("confirm.export"),this.$t("confirm.title"),{confirmButtonText:this.$t("confirm.determine"),cancelButtonText:this.$t("confirm.cancel"),type:"warning",closeOnClickModal:!1,beforeClose:function(t,a,n){e.fieldMap={},e.tableOptions.columns.forEach(function(t){e.$refs.table.columnCheckList.forEach(function(a){t.key===a&&"operate"!==t.key&&(e.fieldMap[a]=t.title)})});var i=e.params,o=i.parentId,s=i.industry,r=i.name,c=i.status;if("confirm"===t){var l={fieldMap:e.fieldMap,parentId:o?[o]:null,name:r,industry:s,status:c};e.tableOptions.total<e.$store.getters.userData.realtimeVideoUrl?e.$http.download("/company/export?isToken=true",l):e.$http.post("/company/export/async",l),n()}else n()}}).catch(function(){})},details:function(e){var t=this;return s()(i.a.mark(function a(){return i.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,t.$http.get("/company/"+e.companyId).then(function(e){if(e.code===t.$config.API_STATUS.OK)return e.data});case 2:e=a.sent,t.drawerDisplay=!0,t.drawerData={staticData:e,isShow:!0,title:t.$t("companyPage.detail_title"),titleWidth:"120",btnAlign:"center",formList:[{title:t.$t("companyPage.name"),type:"text",key:"name",offsetWidth:"320",rules:[{required:!0,message:t.$t("companyPage.name_placeholder"),trigger:"blur"}]},{title:t.$t("companyPage.abbrName"),type:"text",offsetWidth:"320",key:"abbrName"},{title:t.$t("companyPage.parentName"),type:"text",offsetWidth:"320",key:"parentName"},{title:t.$t("companyPage.industry"),type:"textSelect",key:"industry",offsetWidth:"320",filterable:!0,list:t.industry},{title:t.$t("companyPage.form_add_contactPerson"),type:"text",offsetWidth:"320",key:"contactPerson"},{title:t.$t("companyPage.form_add_contactPhone"),type:"text",offsetWidth:"320",key:"contactPhone"},{title:t.$t("companyPage.form_add_contactAddr"),type:"text",offsetWidth:"320",key:"contactAddr"}]};case 5:case"end":return a.stop()}},a,t)}))()},edit:function(e){var t=this;this.$http.get("/company/"+e.companyId).then(function(a){a.code===t.$config.API_STATUS.OK&&(e=a.data,t.drawerDisplay=!0,-1===t.$store.getters.userData.userType&&0===e.companyId&&(e.parentName="无"),t.drawerData={staticData:e,isShow:!0,title:t.$t("companyPage.form_edit_title"),titleWidth:"120",btnAlign:"center",submitAction:"/company/update/"+e.companyId,formList:[{title:t.$t("companyPage.name"),type:"input",offsetWidth:"320",key:"name",rules:[{required:!0,message:t.$t("companyPage.name_placeholder"),trigger:"blur"}]},{title:t.$t("companyPage.abbrName"),type:"input",offsetWidth:"320",key:"abbrName",rules:[{required:!0,message:t.$t("companyPage.abbrName_placeholder"),trigger:"blur"}]},{title:t.$t("companyPage.parentName"),type:"treeSelect",key:"parentId",valueKey:"companyId",offsetWidth:"320",label:e.parentName,treeOption:{defaultProps:{children:"sysCompanyNodes",label:"name"},nodeKey:"companyId",defaultExpandAll:!1,expandClickNode:!1,screenFn:{bindFn:function(e,t){return!e||-1!==t.name.indexOf(e)}}},treeDefinedData:t.companyList,rules:[{required:!0,message:t.$t("companyPage.parentName_placeholder"),trigger:"blur"}]},{title:t.$t("companyPage.industry"),type:"select",key:"industry",offsetWidth:"320",filterable:!0,options:{type:"default",list:t.industry}},{title:t.$t("companyPage.form_add_contactPerson"),type:"input",offsetWidth:"320",key:"contactPerson"},{title:t.$t("companyPage.form_add_contactPhone"),type:"input",offsetWidth:"320",key:"contactPhone",rules:[{required:!0,message:t.$t("companyPage.form_add_contactPhone_placeholder"),trigger:"blur"}]},{title:t.$t("companyPage.form_add_contactAddr"),type:"input",offsetWidth:"320",key:"contactAddr"}],formButton:[{name:t.$t("confirm.determine"),type:"confirm",class:"primary"},{name:t.$t("confirm.cancel"),type:"cancel",class:""}],message:{type:"success",message:t.$t("confirm.editSuccess")}})})},individualization:function(e){var t=this;this.$http.get("/company/"+e.companyId).then(function(a){a.code===t.$config.API_STATUS.OK&&(e=a.data,t.drawerDisplay=!0,t.individualizationData(e))})},individualizationData:function(e){var t=this,a=e.sysTitle,n=e.loginDomain,i=e.sysCorn;this.drawerData={staticData:{sysTitle:a,loginDomain:n,sysCorn:i},isShow:!0,title:this.$t("companyPage.gxh_title"),titleWidth:"120",btnAlign:"center",submitAction:"/company/personalization/"+e.companyId,formList:[{title:this.$t("companyPage.gxh_sysTitle"),type:"input",offsetWidth:"320",key:"sysTitle",rules:[{required:!0,message:this.$t("companyPage.gxh_sysTitle_placeholder"),trigger:"blur"}]},{title:this.$t("companyPage.gxh_loginDomain"),type:"input",offsetWidth:"320",key:"loginDomain",rules:[{required:!0,message:this.$t("companyPage.gxh_loginDomain_placeholder"),trigger:"blur"}]},{title:this.$t("companyPage.gxh_sysCorn"),type:"imgUpload",offsetWidth:"320",action:this.$config.API_CONFIG.API_ROOT+"/file/upload/sysCorn",key:"sysCorn",accept:"image/jpeg,image/png",headers:{Authorization:this.$store.getters.userData.tokenHead+this.$store.getters.userData.token},showFileList:!1,beforeUpload:function(e){},onProgress:function(e){},onSuccess:function(e){e.code===t.$config.API_STATUS.OK&&t.$set(t.$refs.drawer.formData,"sysCorn",e.data.url)}}],formButton:[{name:this.$t("confirm.determine"),type:"confirm",class:"primary"},{name:this.$t("confirm.cancel"),type:"cancel",class:""}],message:{type:"success",message:this.$t("confirm.editSuccess")}}},submitForm:function(e){this.$refs[e].validate(function(e){if(!e)return!1;alert("submit!")})},diaClose:function(e){e&&this.$refs.table.emitRequestTableData(),this.drawerDisplay=!1},drawerCallback:function(e,t,a,n){this[e.handlerCallback.funcName].call(function(){},t,a,n)},enable:function(e){var t=this;this.$confirm(this.$t("confirm.enable"),this.$t("confirm.title"),{confirmButtonText:this.$t("confirm.determine"),cancelButtonText:this.$t("confirm.cancel"),type:"warning"}).then(function(){var a=[];e.forEach(function(e,t){a[t]=e.companyId}),t.$http.deleteApi("/company/status",{ids:a.join(","),status:1}).then(function(e){e.code===t.$config.API_STATUS.OK&&(t.$refs.table.initRequestTableData(),t.$message({message:e.message,type:"success"}))})})},disable:function(e){var t=this;this.$confirm(this.$t("confirm.disable"),this.$t("confirm.title"),{confirmButtonText:this.$t("confirm.determine"),cancelButtonText:this.$t("confirm.cancel"),type:"warning"}).then(function(){var a=[];e.forEach(function(e,t){a[t]=e.companyId}),t.$http.deleteApi("/company/status",{ids:a.join(","),status:0}).then(function(e){e.code===t.$config.API_STATUS.OK&&(t.$refs.table.initRequestTableData(),t.$message({message:e.message,type:"success"}))})})},delete:function(e){var t=this;this.$confirm(this.$t("confirm.del"),this.$t("confirm.title"),{confirmButtonText:this.$t("confirm.determine"),cancelButtonText:this.$t("confirm.cancel"),type:"warning"}).then(function(){var a=[];e.forEach(function(e,t){a[t]=e.companyId}),t.$http.deleteApi("/company/delete",{ids:a.join(",")}).then(function(e){e.code===t.$config.API_STATUS.OK&&(t.$refs.table.initRequestTableData(),t.$message({message:e.message,type:"success"}))})})}}},h=(a("C1Wa"),a("ZrdR")),y=Object(h.a)(u,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"page-wrap"},[e.isTable&&e.isPermissionShow("companyList")?a("table-view",{ref:"table",attrs:{center:"","id-key":"companyId","is-search":!0,"check-memory":!0,data:e.tableOptions.data,total:e.tableOptions.total,columns:e.tableOptions.columns,"search-controls":e.tableOptions.searchControls,"footer-buttons":e.tableOptions.footerButtons,"button-controls":e.tableOptions.buttonControls,"pagination-layout":e.tableOptions.paginationLayout,loading:e.tableOptions.loading,checked:"","column-view":"","is-shadow":"",alias:e.alias},on:{requestTableData:e.getTableData,handleCallback:e.tableResponseFn}},[a("el-table-column",{attrs:{slot:"number",label:e.$t("view.index"),type:"index",align:"center"},slot:"number"})],1):e._e(),e._v(" "),e.isPermissionShow("companyList")||e.$store.state.app.permsDataLoading?e._e():a("notPerm"),e._v(" "),e.drawerDisplay?a("drawer",{ref:"drawer",attrs:{size:"small","drawer-data":e.drawerData},on:{diaClose:e.diaClose,handlerCallback:e.drawerCallback}}):e._e()],1)},[],!1,null,"2e000048",null);y.options.__file="companyManagement.vue";t.default=y.exports},YelX:function(e,t,a){"use strict";a.r(t);var n=a("bS4n"),i=a.n(n),o=a("8t5x");t.default={data:function(){return{permissionList:{vehicleUpdate:"/vehicle/update/**",vehicleExport:"/vehicle/export",vehicleDelete:"/vehicle/delete",vehicleList:"/vehicle/list",vehicleCreate:"/vehicle/create",vehicleFastCreate:"/vehicle/fastCreate",vehicleMotorcadeCreate:"/vehicle/motorcade/create",vehicleMotorcadeUpdate:"/vehicle/motorcade/update",vehicleMotorcadeDelete:"/vehicle/motorcade/delete/**",companyList:"/company/list",companyCreate:"/company/create",companyExport:"/company/export",companyDetail:"/company/**",companyUpdate:"/company/update/**",companyPersonalization:"/company/personalization/**",companyDelete:"/company/delete",driverList:"/driver/list",driverCreate:"/driver/create",driverDetail:"/driver/get/**",driverUpdate:"/driver/update/**",driverDelete:"/driver/delete",driverExport:"/driver/export",labelList:"/label/list",labelCreate:"/label/create",labelUpdate:"/label/update/**",labelDelete:"/label/delete",labelExport:"/label/export",regionList:"/region/list",regionCreate:"/region/create",regionUpdate:"/region/update/**",regionDelete:"/region/delete",regionExport:"/region/export",routeList:"/route/list",routeCreate:"/route/create",routeUpdate:"/route/update/**",routeDelete:"/route/delete",routeExport:"/route/export",adminList:"/admin/list",adminCreate:"/admin/create",adminUpdate:"/admin/update/**",adminDelete:"/admin/delete",adminExport:"/admin/export",typeCreate:"/ef/type/create",typeUpdate:"/ef/type/update/**",typeDelete:"/ef/type/delete/**",drivingLicenseList:"/driving/license/list",drivingLicenseCreate:"/driving/license/create",drivingLicenseUpdate:"/driving/license/update/**",drivingLicenseDelete:"/driving/license/delete",drivingLicense:"/driving/license/export",transportList:"/transport/list",transportCreate:"/transport/create",transportUpdate:"/transport/update/**",transportDelete:"/transport/delete",transportExport:"/transport/export",maintainList:"/maintain/list",maintainCreate:"/maintain/create",maintainUpdate:"/maintain/update/**",maintainDelete:"/maintain/delete",maintainExport:"/maintain/export",insuranceList:"/insurance/list",insuranceCreate:"/insurance/create",insuranceUpdate:"/insurance/update/**",insuranceDelete:"/insurance/delete",insuranceExport:"/insurance/export",insuranceListAdvance:"/insurance/list/advance",annualList:"/annual/list",annualCreate:"/annual/create",annualUpdate:"/annual/update/**",annualDelete:"/annual/delete",annualExport:"/annual/export",annualListAdvance:"/annual/list/advance",repairList:"/repair/list",repairCreate:"/repair/create",repairUpdate:"/repair/update/**",repairDelete:"/repair/delete",repairExport:"/repair/export",accidentList:"/accident/list",accidentCreate:"/accident/create",accidentUpdate:"/accident/update/**",accidentDelete:"/accident/delete",accidentExport:"/accident/export",simList:"/sim/list",simCreate:"/sim/create",simUpdate:"/sim/update/**",simDelete:"/sim/delete",simExport:"/sim/export"}}},computed:i()({},Object(o.b)(["permsData"]),{isAdministrator:function(){return[-1,-2].includes(Number(this.$store.getters.userData.userType))}}),watch:{permsData:{handler:function(){this.handlePermissionShow&&this.handlePermissionShow()},immediate:!0}},methods:{isPermissionShow:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return!!this.isAdministrator||this.permsData.includes(this.permissionList[e])}}}},jcYt:function(e,t,a){e.exports=a.p+"static/img/not-perm.d97c442.png"},s3Gs:function(e,t,a){}}]);