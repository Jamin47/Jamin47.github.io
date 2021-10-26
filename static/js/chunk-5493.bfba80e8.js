(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-5493","Cili"],{Cili:function(e,t,a){"use strict";a.r(t);var i=a("bS4n"),n=a.n(i),s=a("8t5x");t.default={data:function(){return{permissionList:{alarmPreviewTodayRisk:"/alarm/preview/today/risk",alarmPreviewYesterdayScore:"/alarm/preview/yesterday/score",alarmPreviewTodayType:"/alarm/preview/today/type",alarmPreviewTodayLocation:"/alarm/preview/today/location",alarmPreviewTodayAnalyze:"/alarm/preview/today/analyze",alarmPreviewTodayHandle:"/alarm/preview/today/handle",alarmPreviewTodayVehicle:"/alarm/preview/today/vehicle",alarmRealtimeList:"/alarm/realtime/list",alarmRealtimeExport:"/alarm/realtime/export",alarmRealtimeAgg:"alarm/realtime/agg",alarmSummaryTypeList:"/alarm/summary/type/list/**",alarmRealtimeListCommonDetail:"alarm/realtime/list/common/detail",alarmPopUpSettingCreateOrUpdate:"/alarmPopUp/setting/createOrUpdate",alarmRealtimeSolveAlarm:"/alarm/realtime/solveAlarm",alarmSettingList:"/alarm/setting/list",alarmSettingUpdate:"/alarm/setting/update/**",alarmSettingDelete:"/alarm/setting/delete",alarmSettingCreate:"/alarm/setting/create",alarmStatisticsListVehicle:"/alarm/statistics/list/vehicle",alarmStatisticsExportVehicle:"/alarm/statistics/export/vehicle",alarmStatisticsListCompany:"/alarm/statistics/list/company",alarmStatisticsExportCompany:"/alarm/statistics/export/company"}}},computed:n()({},Object(s.b)(["permsData"]),{isAdministrator:function(){return[-1,-2].includes(Number(this.$store.getters.userData.userType))}}),watch:{permsData:{handler:function(){this.handlePermissionShow&&this.handlePermissionShow()},immediate:!0}},methods:{isPermissionShow:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return!!this.isAdministrator||this.permsData.includes(this.permissionList[e])}}}},Yb24:function(e,t,a){"use strict";var i=a("uqJ5");a.n(i).a},i2ZX:function(e,t,a){"use strict";a.r(t);var i=a("AlM9"),n=a("BHIJ"),s=a("MfIo"),l=a("Cili"),r={name:"CompanyFiles",components:{TableView:i.a,drawer:n.a},mixins:[l.default],data:function(){return{title:"",fieldMap:{},vehicleIds:[],drawerDisplay:!1,drawerData:{},alias:{pageSize:"pageSize",pageNum:"pageNum"},requsetStatus:!0,isTable:!0,tableOptions:{data:[],total:0,columns:[{type:"slot",name:"number",title:this.$t("securityCommon.serial_number")},{title:this.$t("securityData.time"),key:"alarmTime",type:"text"},{title:this.$t("securityData.corporate_name"),key:"companyName",type:"text"},{title:this.$t("securityData.number_vehicles"),key:"vehicleNum",type:"text"},{title:this.$t("securityData.high_risk_times"),key:"highRisk",type:"text"},{title:this.$t("securityData.change_same_period"),key:"highChange",name:"highChange",type:"sort"},{title:this.$t("securityData.medium_risk_times"),key:"mediumRisk",type:"text"},{title:this.$t("securityData.change_same_period"),key:"mediumChange",name:"mediumChange",type:"sort"},{title:this.$t("securityData.low_risk_times"),key:"lowRisk",type:"text"},{title:this.$t("securityData.change_same_period"),key:"lowChange",name:"lowChange",type:"sort"},{title:this.$t("securityData.average_score"),key:"averageScore",type:"text"},{title:this.$t("securityCommon.operation"),type:"operate",key:"operate",fixed:"right",width:"250",buttons:[]}],buttonControls:[],searchControls:[{type:"treeSelect",key:"companyId",valueKey:"companyId",placeholder:this.$t("securityData.select_vehicle"),width:"200px",clearable:!0,treeOption:{defaultProps:{children:"sysCompanyNodes",label:"name"},nodeKey:"companyId",nodeCode:"iconfont Jamin_vehicle_icon_clgl1",defaultExpandAll:!1,expandClickNode:!1,checkbox:!0,screenFn:{bindFn:function(e,t){return!e||-1!==t.treeName.indexOf(e)}}},treeDefinedData:[]},{type:"select",key:"type",placeholder:this.$t("securityData.time_range"),width:"200px",clearable:!0,value:0,options:[{name:this.$t("securityData.every_day"),value:0},{name:this.$t("securityData.weekly"),value:1}]},{type:"daterange",key:"time",startPlaceholder:this.$t("securityCommon.start_date"),endPlaceholder:this.$t("securityCommon.end_date"),width:"320px",condition:{key:"type",value:0}},{type:"dateweek",key:"weektime",placeholder:this.$t("securityData.select_week"),format:"yyyy 第 WW 周",width:"320px",condition:{key:"type",value:1}}],footerButtons:[],paginationLayout:"total, sizes, prev, pager, next, jumper",loading:!1}}},computed:{},created:function(){this.getSelectDataFn()},mounted:function(){},methods:{handlePermissionShow:function(){var e=this.tableOptions.columns.findIndex(function(e){return"operate"===e.key});this.tableOptions.columns[e].buttons=[],e>-1&&this.isPermissionShow("alarmStatisticsListCompany")&&this.tableOptions.columns[e].buttons.push({tipText:this.$t("securityData.detailed_analysis"),icon:"iconfont Jamin_vehicle_ico_xq",type:"text",funcName:"detail"}),this.tableOptions.buttonControls=[],this.isPermissionShow("alarmStatisticsExportCompany")&&this.tableOptions.buttonControls.push({text:this.$t("securityData.export_record"),type:"null",round:!1,icon:"el-icon-download",funcName:"exportFn"})},getTableData:function(e){var t=this;if(this.requsetStatus){if(this.tableOptions.loading=!0,e.time&&(e.startTime=e.time[0],e.endTime=e.time[1]),e.weektime){var a=new Date(e.weektime).getTime(),i=a+6048e5;e.startTime=Object(s.d)(new Date(a),"yyyy-MM-dd"),e.endTime=Object(s.d)(new Date(i),"yyyy-MM-dd")}e.companyIds=e.companyId?JSON.parse(e.companyId):null,delete e.time,delete e.weektime,delete e.companyId,this.$http.post("/alarm/statistics/list/company?pageNum="+e.pageNum+"&pageSize="+e.pageSize,e).then(function(e){e.code===t.$config.API_STATUS.OK&&(t.tableOptions.loading=!1,t.tableOptions.data=e.data.list,t.tableOptions.total=e.data.total)})}else this.requsetStatus=!0},valueOfViewFn:function(e){var t="default",a="";return e&&(t=e>0?"rise":"decline",a=Math.abs(e)),{data:a,change:t}},getSelectDataFn:function(){var e=this;this.$http.get("/company/treeList/securityData").then(function(t){t.code===e.$config.API_STATUS.OK&&(e.tableOptions.searchControls[0].treeDefinedData=t.data,e.requsetStatus=!1,e.isTable=!1,e.$nextTick(function(){e.isTable=!0}))})},tableResponseFn:function(e,t,a){this[t.funcName].call(function(){},e,t,a)},exportFn:function(){var e=this;this.$confirm(this.$t("securityData.confirm_export_records"),this.$t("securityCommon.prompt"),{confirmButtonText:this.$t("securityCommon.ok"),cancelButtonText:this.$t("securityCommon.cancel"),type:"warning",closeOnClickModal:!1,beforeClose:function(t,a,i){e.fieldMap={},e.tableOptions.columns.forEach(function(t){e.$refs.table.columnCheckList.forEach(function(a){t.key===a&&"operate"!==t.key&&(e.fieldMap[a]=t.title)})});var n=e.$refs.table._data.searchParams,s=n.companyId,l=n.time;if("confirm"===t){var r={fieldMap:e.fieldMap,companyIds:s?JSON.parse(s):null};l&&(r.startTime=l[0],r.endTime=l[1]),e.$http.download("/alarm/statistics/export/company?isToken=true",r),i()}else i()}}).catch(function(){})},detail:function(e){this.$message.warning(this.$t("securityData.under_development"))},detailData:function(e){this.drawerData={staticData:e,isShow:!0,title:this.$t("securityData.license_details"),titleWidth:"120",data:{},defaultData:"",submitAction:"/driving/license/update/"+e.id,btnAlign:"center",formList:[{title:this.$t("securityData.bind_vehicle"),type:"textSelect",key:"vehicleId",offsetWidth:"320",list:this.vehicleIds},{title:this.$t("securityData.driving_license_number"),type:"text",key:"drivingNum",offsetWidth:"320"},{title:this.$t("securityData.nature_use"),type:"text",key:"useNature",offsetWidth:"320"},{title:this.$t("securityData.brand_model"),type:"text",key:"model",offsetWidth:"320"},{title:this.$t("securityData.engine_number"),type:"text",key:"engineNum",offsetWidth:"320"},{title:this.$t("securityData.effective_time"),type:"text",offsetWidth:"320",key:"effectAt"},{title:this.$t("securityData.expiration_time"),type:"text",offsetWidth:"320",key:"timeoutAt"},{title:this.$t("securityData.days_advance_reminder"),type:"text",key:"advanceNum",offsetWidth:"320"},{title:this.$t("securityData.remarks_description"),offsetWidth:"320",type:"text",key:"remark"}],message:{type:"success",message:this.$t("securityData.edit_succeeded")}}},diaClose:function(){this.drawerDisplay=!1},drawerCallback:function(e,t,a,i){this[e.handlerCallback.funcName].call(function(){},t,a,i)}}},o=(a("Yb24"),a("ZrdR")),c=Object(o.a)(r,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"companyFiles"},[e.isTable?a("table-view",{ref:"table",attrs:{center:"","id-key":"statisticsId","is-search":!0,data:e.tableOptions.data,total:e.tableOptions.total,columns:e.tableOptions.columns,"search-controls":e.tableOptions.searchControls,"footer-buttons":e.tableOptions.footerButtons,"button-controls":e.tableOptions.buttonControls,"pagination-layout":e.tableOptions.paginationLayout,loading:e.tableOptions.loading,"column-view":"","is-shadow":"",alias:e.alias},on:{requestTableData:e.getTableData,handleCallback:e.tableResponseFn}},[a("el-table-column",{attrs:{slot:"number",label:e.$t("view.index"),type:"index",align:"center"},slot:"number"}),e._v(" "),a("el-table-column",{attrs:{slot:"highChange",label:e.$t("securityData.change_same_period"),align:"center",width:"130"},slot:"highChange",scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",{style:"decline"===e.valueOfViewFn(t.row.highChange).change?"color: var(--main-danger);":"color: var(--main-success);"},[e._v(e._s(e.valueOfViewFn(t.row.highChange).data))]),e._v(" "),"rise"===e.valueOfViewFn(t.row.highChange).change?a("i",{staticClass:"iconfont Jamin_xiangshang"}):e._e(),e._v(" "),"decline"===e.valueOfViewFn(t.row.highChange).change?a("i",{staticClass:"iconfont Jamin_xiangxia"}):e._e()]}}])}),e._v(" "),a("el-table-column",{attrs:{slot:"mediumChange",label:e.$t("securityData.change_same_period"),align:"center",width:"130"},slot:"mediumChange",scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",{style:"decline"===e.valueOfViewFn(t.row.mediumChange).change?"color: var(--main-danger);":"color: var(--main-success);"},[e._v(e._s(e.valueOfViewFn(t.row.mediumChange).data))]),e._v(" "),"rise"===e.valueOfViewFn(t.row.mediumChange).change?a("i",{staticClass:"iconfont Jamin_xiangshang"}):e._e(),e._v(" "),"decline"===e.valueOfViewFn(t.row.mediumChange).change?a("i",{staticClass:"iconfont Jamin_xiangxia"}):e._e()]}}])}),e._v(" "),a("el-table-column",{attrs:{slot:"lowChange",label:e.$t("securityData.change_same_period"),align:"center",width:"130"},slot:"lowChange",scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",{style:"decline"===e.valueOfViewFn(t.row.lowChange).change?"color: var(--main-danger);":"color: var(--main-success);"},[e._v(e._s(e.valueOfViewFn(t.row.lowChange).data))]),e._v(" "),"rise"===e.valueOfViewFn(t.row.lowChange).change?a("i",{staticClass:"iconfont Jamin_xiangshang"}):e._e(),e._v(" "),"decline"===e.valueOfViewFn(t.row.lowChange).change?a("i",{staticClass:"iconfont Jamin_xiangxia"}):e._e()]}}])})],1):e._e(),e._v(" "),e.drawerDisplay?a("drawer",{ref:"drawer",attrs:{"drawer-data":e.drawerData},on:{diaClose:e.diaClose,handlerCallback:e.drawerCallback}}):e._e()],1)},[],!1,null,"77b7a60c",null);c.options.__file="company-files.vue";t.default=c.exports},uqJ5:function(e,t,a){}}]);