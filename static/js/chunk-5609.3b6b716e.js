(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-5609","B8wf"],{B8wf:function(t,e,i){"use strict";i.r(e);var r=i("bS4n"),o=i.n(r),a=i("8t5x");e.default={data:function(){return{permissionList:{positionPassReport:"/position/pass/rate/report",positionLocusReport:"/position/locus/complete/rate/report",positionDriftRateReport:"/position/vehicle/drift/rate/report",positionDriftReport:"/position/vehicle/drift/detail/report",positionHistoryReport:"/position/history/report",mileageCompanyReport:"/mileage/company/report",mileageVehicleReport:"/mileage/vehicle/report",mileageDriverReport:"/mileage/driver/report",mileageDayReport:"/mileage/vehicle/day/report",mileageMontyReport:"/mileage/vehicle/monty/report",alarmCommonList:"/alarm/common/list",onlineRateSummaryReport:"/online/rate/summary/report",onlineRateReport:"/online/rate/report",onlineSummaryReport:"/online/offline/summary/report",onlineDetailReport:"/online/offline/detail/report",onlineAccStatisticsReport:"/online/acc/ignition/statistics/report",onlineAccReport:"/online/acc/ignition/report",reportTemperatureAlarmStatistics:"/report/temperature/alarmStatistics",reportTemperatureList:"/report/temperature/list",reportTemperatureDetailInfo:"/report/temperature/detailInfo",driverSummaryReport:"/driver/login/logout/summary/report",driverDetailReport:"/driver/login/logout/detail/report",driverVehicleSummaryReport:"/driver/vehicle/login/logout/summary/report",driverVehicleDetailReport:"/driver/vehicle/login/logout/detail/report",driverIdReport:"/driver/id/report",positionPassExport:"/position/pass/rate/report/export",positionLocusExport:"/position/locus/complete/rate/report/export",positionDriftRateExport:"/position/vehicle/drift/rate/report/export",positionDriftDetailExport:"/position/vehicle/drift/detail/report/export",positionHistoryExport:"/position/history/report/export",mileageCompanyExport:"/mileage/company/report/export",mileageVehicleExport:"/mileage/vehicle/report/export",mileageDriverExport:"/mileage/driver/report/export",mileageDayExport:"/mileage/vehicle/day/report/export",mileageMontyExport:"/mileage/vehicle/monty/report/export",alarmReportExport:"/alarm/common/report/export",onlineRateSummaryExport:"/online/rate/summary/report/export",onlineRateExport:"/online/rate/report/export",onlineSummaryExport:"/online/offline/summary/report/export",onlineDetailExport:"/online/offline/detail/report/export",onlineAccStatisticsExport:"/online/acc/ignition/statistics/report/export",onlineAccExport:"/online/acc/ignition/report/export",reportTemperatureAlarmStatisticsExport:"/report/temperature/alarmStatistics/export",reportTemperatureListExport:"/report/temperature/list/export",reportTemperatureDetailInfoExport:"/report/temperature/detailInfo/export",driverSummaryExport:"/driver/login/logout/summary/report/export",driverDetailExport:"/driver/login/logout/detail/report/export",driverVehicleSummaryExport:"/driver/vehicle/login/logout/summary/report/export",driverVehicleDetailExport:"/driver/vehicle/login/logout/detail/report/export",driverIdExport:"/driver/id/report/export"}}},computed:o()({},Object(a.b)(["permsData"]),{isAdministrator:function(){return[-1,-2].includes(Number(this.$store.getters.userData.userType))}}),watch:{permsData:{handler:function(){this.handlePermissionShow&&this.handlePermissionShow()},immediate:!0}},methods:{isPermissionShow:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return!!this.isAdministrator||this.permsData.includes(this.permissionList[t])}}}},HsYK:function(t,e,i){"use strict";i.r(e);var r=i("AlM9"),o=i("B8wf"),a={name:"Tof3of2",components:{TableView:r.a},mixins:[o.default],data:function(){return{isTable:!0,tableOptions:{data:[],total:0,columns:[{type:"slot",name:"number",title:"序号"},{title:this.$t("view.license_num"),key:"licenseNum",type:"text",fixed:"left",minWidth:"130"},{title:this.$t("statisticsReport.license_color"),key:"licenseColor",width:"100",type:"tag",tags:[]},{title:this.$t("statisticsReport.motorcade_name"),key:"motorcadeName",type:"text",minWidth:"180"},{title:this.$t("statisticsReport.report_time"),key:"reportTime",type:"text",width:"120"},{title:this.$t("statisticsReport.alarm_total"),key:"alarmTotal",type:"text",minWidth:"100"},{title:this.$t("statisticsReport.emergency_alarm"),key:"emergencyAlarm",type:"text",minWidth:"110"},{title:this.$t("statisticsReport.overtime_parking"),key:"overtimeParkingAlarm",type:"text",minWidth:"100"},{title:this.$t("statisticsReport.fatigue_driving"),key:"fatigueDrivingAlarm",type:"text",minWidth:"100"},{title:this.$t("statisticsReport.danger_warning"),key:"dangerWarning",type:"text",minWidth:"100"},{title:this.$t("statisticsReport.gnss_failure"),key:"gnssFailureAlarm",type:"text",minWidth:"120"},{title:this.$t("statisticsReport.terminal_undervoltage"),key:"terminalUndervoltageAlarm",type:"text",minWidth:"120"}],buttonControls:[],searchControls:[{type:"treeSelect",key:"vehicleIds",valueKey:"vehicleId",placeholder:this.$t("view.license_num"),width:"200px",clearable:!0,treeOption:{defaultProps:{children:"children",label:"treeName"},nodeKey:"treeId",nodeCode:"iconfont Jamin_vehicle_icon_clgl1",defaultExpandAll:!1,expandClickNode:!1,checkbox:!0,screenFn:{bindFn:function(t,e){return!t||-1!==e.treeName.indexOf(t)}}},treeDefinedData:this.$parent.devTreeData},{type:"daterange",key:"time",startPlaceholder:this.$t("view.start_time"),endPlaceholder:this.$t("view.end_time"),width:"280px",condition:{key:"reportType",value:0}},{type:"monthrange",key:"monthTime",startPlaceholder:this.$t("view.start_time"),endPlaceholder:this.$t("view.end_time"),width:"280px",valueFormat:"yyyy-MM",condition:{key:"reportType",value:1}},{type:"select",key:"reportType",width:"120px",clearable:!0,value:0,options:[{name:this.$t("statisticsReport.day_report"),value:0},{name:this.$t("statisticsReport.month_report"),value:1}]}],searchMode:"immediate",footerButtons:[],paginationLayout:"total, sizes, prev, pager, next, jumper",loading:!1},params:null,tableAllData:[]}},methods:{handlePermissionShow:function(){this.tableOptions.buttonControls=[],this.isPermissionShow("alarmReportExport")&&this.tableOptions.buttonControls.push({text:this.$t("operation.export_record"),type:"null",round:!1,icon:"el-icon-document",funcName:"exportRecord",dataStatus:!0})},getTableData:function(t){var e=this;if(t.vehicleIds)if(t.time||t.monthTime){if(this.tableOptions.loading=!0,!this.params||this.params.page===t.page&&this.params.limit===t.limit){this.tableOptions.columns[2].tags=this.$parent.dictObj.licenseColor;var i=1===t.reportType?t.monthTime:t.time,r={vehicleIds:JSON.parse(t.vehicleIds),reportType:t.reportType,startTime:i?i[0]:null,endTime:i?i[1]:null};this.$http.post("/alarm/common/list",r).then(function(i){e.tableOptions.loading=!1,i.code===e.$config.API_STATUS.OK&&i.data&&(e.tableAllData=i.data,e.initTableDataFn(t),e.tableOptions.total=i.data.length)}).catch(function(){e.tableOptions.loading=!1})}else this.initTableDataFn(t),this.tableOptions.loading=!1;this.params=t}else this.$message.warning(this.$t("statisticsReport.tip_2"))},initTableDataFn:function(t){var e=(t.page-1)*t.limit,i=t.page*t.limit>this.tableAllData.length?this.tableAllData.length:t.page*t.limit;this.tableOptions.data=this.tableAllData.slice(e,i)},tableResponseFn:function(t,e,i){this[e.funcName].call(function(){},t,e,i)},exportRecord:function(){var t=this,e=this.params,i=e.vehicleIds,r=e.time,o=e.monthTime,a=e.reportType;this.$confirm(this.$t("confirm.content"),this.$t("confirm.title"),{confirmButtonText:this.$t("confirm.determine"),cancelButtonText:this.$t("confirm.cancel"),closeOnClickModal:!1,beforeClose:function(e,n,l){if(t.fieldMap={},t.tableOptions.columns.forEach(function(e){t.$refs.table.columnCheckList.forEach(function(i){e.key===i&&"operate"!==e.key&&(t.fieldMap[i]=e.title)})}),"confirm"===e){var s=1===a?o:r,p={fieldMap:t.fieldMap,vehicleIds:JSON.parse(i),reportType:a,startTime:s?s[0]:null,endTime:s?s[1]:null};t.tableAllData.length<t.$store.getters.userData.realtimeVideoUrl?t.$http.download("/alarm/common/report/export?isToken=true",p):t.$http.post("/alarm/common/report/export/async",p),l()}else l()}}).catch(function(){})}}},n=(i("So9A"),i("ZrdR")),l=Object(n.a)(a,function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.isTable?i("table-view",{ref:"table",attrs:{center:"","id-key":"id","is-search":!0,data:t.tableOptions.data,total:t.tableOptions.total,columns:t.tableOptions.columns,"search-controls":t.tableOptions.searchControls,"footer-buttons":t.tableOptions.footerButtons,"button-controls":t.tableOptions.buttonControls,"pagination-layout":t.tableOptions.paginationLayout,loading:t.tableOptions.loading,"is-shadow":""},on:{requestTableData:t.getTableData,handleCallback:t.tableResponseFn}},[i("el-table-column",{attrs:{slot:"number",label:t.$t("view.index"),type:"index",align:"center",fixed:"left",width:"60"},slot:"number"})],1):t._e()},[],!1,null,"ed71ff34",null);l.options.__file="t_3_2.vue";e.default=l.exports},So9A:function(t,e,i){"use strict";var r=i("gtmk");i.n(r).a},gtmk:function(t,e,i){}}]);