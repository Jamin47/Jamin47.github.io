(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-2243","B8wf"],{"8TrA":function(t,e,i){"use strict";var o=i("hflJ");i.n(o).a},"9yBD":function(t,e,i){"use strict";i.r(e);var o=i("AlM9"),r=i("B8wf"),a={name:"Tof2of1",components:{TableView:o.a},mixins:[r.default],data:function(){return{isTable:!0,tableOptions:{data:[],total:0,columns:[{type:"slot",name:"number",title:"序号"},{title:this.$t("statisticsReport.company_name"),key:"companyName",type:"text"},{title:this.$t("statisticsReport.mileage"),key:"mileage",type:"text"},{title:this.$t("statisticsReport.vehicleNum"),key:"vehicleNum",type:"text"}],buttonControls:[],searchControls:[{type:"treeSelect",key:"companyIds",valueKey:"companyId",placeholder:this.$t("statisticsReport.company_name"),width:"200px",clearable:!0,treeOption:{defaultProps:{children:"sysCompanyNodes",label:"name"},nodeKey:"companyId",defaultExpandAll:!1,expandClickNode:!1,checkbox:!0,screenFn:{bindFn:function(t,e){return!t||-1!==e.name.indexOf(t)}}},treeDefinedData:this.$parent.companyTreeData},{type:"daterange",key:"time",startPlaceholder:this.$t("view.start_time"),endPlaceholder:this.$t("view.end_time"),width:"280px"}],searchMode:"immediate",footerButtons:[],paginationLayout:"total, sizes, prev, pager, next, jumper",loading:!1},params:null,tableAllData:[]}},methods:{handlePermissionShow:function(){this.tableOptions.buttonControls=[],this.isPermissionShow("mileageCompanyExport")&&this.tableOptions.buttonControls.push({text:this.$t("operation.export_record"),type:"null",round:!1,icon:"el-icon-document",funcName:"exportRecord"})},getTableData:function(t){var e=this;if(t.companyIds)if(t.time){if(this.tableOptions.loading=!0,!this.params||this.params.page===t.page&&this.params.limit===t.limit){var i={companyIds:JSON.parse(t.companyIds),startTime:t.time?t.time[0]:null,endTime:t.time?t.time[1]:null};this.$http.post("/mileage/company/report",i).then(function(i){e.tableOptions.loading=!1,i.code===e.$config.API_STATUS.OK&&i.data&&(e.tableAllData=i.data,e.initTableDataFn(t),e.tableOptions.total=i.data.length)}).catch(function(){e.tableOptions.loading=!1})}else this.initTableDataFn(t),this.tableOptions.loading=!1;this.params=t}else this.$message.warning(this.$t("statisticsReport.tip_4"))},initTableDataFn:function(t){var e=(t.page-1)*t.limit,i=t.page*t.limit>this.tableAllData.length?this.tableAllData.length:t.page*t.limit;this.tableOptions.data=this.tableAllData.slice(e,i)},tableResponseFn:function(t,e,i){this[e.funcName].call(function(){},t,e,i)},exportRecord:function(){var t=this,e=this.$refs.table._data.searchParams,i=e.companyIds,o=e.time;i?this.$confirm(this.$t("confirm.content"),this.$t("confirm.title"),{confirmButtonText:this.$t("confirm.determine"),cancelButtonText:this.$t("confirm.cancel"),closeOnClickModal:!1,beforeClose:function(e,r,a){if(t.fieldMap={},t.tableOptions.columns.forEach(function(e){t.$refs.table.columnCheckList.forEach(function(i){e.key===i&&"operate"!==e.key&&(t.fieldMap[i]=e.title)})}),"confirm"===e){var n={fieldMap:t.fieldMap,companyIds:JSON.parse(i),startTime:o?o[0]:null,endTime:o?o[1]:null};t.$http.download("/mileage/company/report/export?isToken=true",n),a()}else a()}}).catch(function(){}):this.$message.warning(this.$t("statisticsReport.tip_3"))}}},n=(i("8TrA"),i("ZrdR")),s=Object(n.a)(a,function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.isTable?i("table-view",{ref:"table",attrs:{center:"","id-key":"id","is-search":!0,data:t.tableOptions.data,total:t.tableOptions.total,columns:t.tableOptions.columns,"search-controls":t.tableOptions.searchControls,"footer-buttons":t.tableOptions.footerButtons,"button-controls":t.tableOptions.buttonControls,"pagination-layout":t.tableOptions.paginationLayout,loading:t.tableOptions.loading,"is-shadow":""},on:{requestTableData:t.getTableData,handleCallback:t.tableResponseFn}},[i("el-table-column",{attrs:{slot:"number",label:t.$t("view.index"),type:"index",align:"center",fixed:"left",width:"60"},slot:"number"})],1):t._e()},[],!1,null,"1ee378f8",null);s.options.__file="t_2_1.vue";e.default=s.exports},B8wf:function(t,e,i){"use strict";i.r(e);var o=i("bS4n"),r=i.n(o),a=i("8t5x");e.default={data:function(){return{permissionList:{positionPassReport:"/position/pass/rate/report",positionLocusReport:"/position/locus/complete/rate/report",positionDriftRateReport:"/position/vehicle/drift/rate/report",positionDriftReport:"/position/vehicle/drift/detail/report",positionHistoryReport:"/position/history/report",mileageCompanyReport:"/mileage/company/report",mileageVehicleReport:"/mileage/vehicle/report",mileageDriverReport:"/mileage/driver/report",mileageDayReport:"/mileage/vehicle/day/report",mileageMontyReport:"/mileage/vehicle/monty/report",alarmCommonList:"/alarm/common/list",onlineRateSummaryReport:"/online/rate/summary/report",onlineRateReport:"/online/rate/report",onlineSummaryReport:"/online/offline/summary/report",onlineDetailReport:"/online/offline/detail/report",onlineAccStatisticsReport:"/online/acc/ignition/statistics/report",onlineAccReport:"/online/acc/ignition/report",reportTemperatureAlarmStatistics:"/report/temperature/alarmStatistics",reportTemperatureList:"/report/temperature/list",reportTemperatureDetailInfo:"/report/temperature/detailInfo",positionPassExport:"/position/pass/rate/report/export",positionLocusExport:"/position/locus/complete/rate/report/export",positionDriftRateExport:"/position/vehicle/drift/rate/report/export",positionDriftDetailExport:"/position/vehicle/drift/detail/report/export",positionHistoryExport:"/position/history/report/export",mileageCompanyExport:"/mileage/company/report/export",mileageVehicleExport:"/mileage/vehicle/report/export",mileageDriverExport:"/mileage/driver/report/export",mileageDayExport:"/mileage/vehicle/day/report/export",mileageMontyExport:"/mileage/vehicle/monty/report/export",alarmReportExport:"/alarm/common/report/export",onlineRateSummaryExport:"/online/rate/summary/report/export",onlineRateExport:"/online/rate/report/export",onlineSummaryExport:"/online/offline/summary/report/export",onlineDetailExport:"/online/offline/detail/report/export",onlineAccStatisticsExport:"/online/acc/ignition/statistics/report/export",onlineAccExport:"/online/acc/ignition/report/export",reportTemperatureAlarmStatisticsExport:"/report/temperature/alarmStatistics/export",reportTemperatureListExport:"/report/temperature/list/export",reportTemperatureDetailInfoExport:"/report/temperature/detailInfo/export"}}},computed:r()({},Object(a.b)(["permsData"]),{isAdministrator:function(){return[-1,-2].includes(Number(this.$store.getters.userData.userType))}}),watch:{permsData:{handler:function(){this.handlePermissionShow&&this.handlePermissionShow()},immediate:!0}},methods:{isPermissionShow:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return!!this.isAdministrator||this.permsData.includes(this.permissionList[t])}}}},hflJ:function(t,e,i){}}]);