(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-8b0a","B8wf"],{"81sB":function(t,e,i){"use strict";var o=i("JL2j");i.n(o).a},B8wf:function(t,e,i){"use strict";i.r(e);var o=i("bS4n"),r=i.n(o),a=i("8t5x");e.default={data:function(){return{permissionList:{positionPassReport:"/position/pass/rate/report",positionLocusReport:"/position/locus/complete/rate/report",positionDriftRateReport:"/position/vehicle/drift/rate/report",positionDriftReport:"/position/vehicle/drift/detail/report",positionHistoryReport:"/position/history/report",mileageCompanyReport:"/mileage/company/report",mileageVehicleReport:"/mileage/vehicle/report",mileageDriverReport:"/mileage/driver/report",mileageDayReport:"/mileage/vehicle/day/report",mileageMontyReport:"/mileage/vehicle/monty/report",alarmCommonList:"/alarm/common/list",onlineRateSummaryReport:"/online/rate/summary/report",onlineRateReport:"/online/rate/report",onlineSummaryReport:"/online/offline/summary/report",onlineDetailReport:"/online/offline/detail/report",onlineAccStatisticsReport:"/online/acc/ignition/statistics/report",onlineAccReport:"/online/acc/ignition/report",reportTemperatureAlarmStatistics:"/report/temperature/alarmStatistics",reportTemperatureList:"/report/temperature/list",reportTemperatureDetailInfo:"/report/temperature/detailInfo",driverSummaryReport:"/driver/login/logout/summary/report",driverDetailReport:"/driver/login/logout/detail/report",driverVehicleSummaryReport:"/driver/vehicle/login/logout/summary/report",driverVehicleDetailReport:"/driver/vehicle/login/logout/detail/report",driverIdReport:"/driver/id/report",positionPassExport:"/position/pass/rate/report/export",positionLocusExport:"/position/locus/complete/rate/report/export",positionDriftRateExport:"/position/vehicle/drift/rate/report/export",positionDriftDetailExport:"/position/vehicle/drift/detail/report/export",positionHistoryExport:"/position/history/report/export",mileageCompanyExport:"/mileage/company/report/export",mileageVehicleExport:"/mileage/vehicle/report/export",mileageDriverExport:"/mileage/driver/report/export",mileageDayExport:"/mileage/vehicle/day/report/export",mileageMontyExport:"/mileage/vehicle/monty/report/export",alarmReportExport:"/alarm/common/report/export",onlineRateSummaryExport:"/online/rate/summary/report/export",onlineRateExport:"/online/rate/report/export",onlineSummaryExport:"/online/offline/summary/report/export",onlineDetailExport:"/online/offline/detail/report/export",onlineAccStatisticsExport:"/online/acc/ignition/statistics/report/export",onlineAccExport:"/online/acc/ignition/report/export",reportTemperatureAlarmStatisticsExport:"/report/temperature/alarmStatistics/export",reportTemperatureListExport:"/report/temperature/list/export",reportTemperatureDetailInfoExport:"/report/temperature/detailInfo/export",driverSummaryExport:"/driver/login/logout/summary/report/export",driverDetailExport:"/driver/login/logout/detail/report/export",driverVehicleSummaryExport:"/driver/vehicle/login/logout/summary/report/export",driverVehicleDetailExport:"/driver/vehicle/login/logout/detail/report/export",driverIdExport:"/driver/id/report/export"}}},computed:r()({},Object(a.b)(["permsData"]),{isAdministrator:function(){return[-1,-2].includes(Number(this.$store.getters.userData.userType))}}),watch:{permsData:{handler:function(){this.handlePermissionShow&&this.handlePermissionShow()},immediate:!0}},methods:{isPermissionShow:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return!!this.isAdministrator||this.permsData.includes(this.permissionList[t])}}}},JL2j:function(t,e,i){},gGJj:function(t,e,i){"use strict";i.r(e);var o=i("AlM9"),r=i("B8wf"),a={name:"Tof1of5",components:{TableView:o.a},mixins:[r.default],data:function(){return{isTable:!0,tableOptions:{data:[],total:0,columns:[{type:"slot",name:"number",title:"序号"},{title:this.$t("view.license_num"),key:"licenseNum",type:"text",fixed:"left",minWidth:"130px"},{title:this.$t("statisticsReport.license_color"),key:"licenseColor",minWidth:"110px",type:"tag",tags:[]},{title:this.$t("statisticsReport.motorcade_name"),key:"motorcadeName",type:"text",minWidth:"180"},{title:this.$t("statisticsReport.positioning_time"),key:"positioningTime",type:"text",minWidth:"160px"},{title:this.$t("statisticsReport.speed"),key:"speed",type:"text",prependText:"km/h",minWidth:"110px"},{title:this.$t("statisticsReport.direction"),key:"directionStr",type:"text",minWidth:"110"},{title:this.$t("statisticsReport.longitude"),key:"longitude",type:"text",minWidth:"110px"},{title:this.$t("statisticsReport.latitude"),key:"latitude",type:"text",minWidth:"110px"},{title:this.$t("statisticsReport.position_type"),key:"positionType",type:"text",minWidth:"130px"},{title:this.$t("statisticsReport.location"),key:"location",type:"text",minWidth:"200"}],buttonControls:[],searchControls:[{type:"treeSelect",key:"vehicleIds",valueKey:"vehicleId",placeholder:this.$t("view.license_num"),width:"200px",clearable:!0,treeOption:{defaultProps:{children:"children",label:"treeName"},nodeKey:"treeId",nodeCode:"iconfont Jamin_vehicle_icon_clgl1",defaultExpandAll:!1,expandClickNode:!1,checkbox:!0,screenFn:{bindFn:function(t,e){return!t||-1!==e.treeName.indexOf(t)}}},treeDefinedData:this.$parent.devTreeData},{type:"daterange",key:"time",startPlaceholder:this.$t("view.start_time"),endPlaceholder:this.$t("view.end_time"),width:"280px"}],searchMode:"immediate",footerButtons:[],paginationLayout:"total, sizes, prev, pager, next, jumper",loading:!1},params:null,tableAllData:[]}},created:function(){},methods:{handlePermissionShow:function(){this.tableOptions.buttonControls=[],this.isPermissionShow("positionHistoryExport")&&this.tableOptions.buttonControls.push({text:this.$t("operation.export_record"),type:"null",round:!1,icon:"el-icon-document",funcName:"exportRecord",dataStatus:!0})},getTableData:function(t){var e=this;if(t.vehicleIds)if(t.time){if(this.tableOptions.loading=!0,!this.params||this.params.page===t.page&&this.params.limit===t.limit){this.tableOptions.columns[2].tags=this.$parent.dictObj.licenseColor;var i={vehicleIds:JSON.parse(t.vehicleIds),startTime:t.time?t.time[0]:null,endTime:t.time?t.time[1]:null};this.$http.post("/position/history/report",i).then(function(i){e.tableOptions.loading=!1,i.code===e.$config.API_STATUS.OK&&i.data&&(e.tableAllData=i.data,e.initTableDataFn(t),e.tableOptions.total=i.data.length)}).catch(function(){e.tableOptions.loading=!1})}else this.initTableDataFn(t),this.tableOptions.loading=!1;this.params=t}else this.$message.warning(this.$t("statisticsReport.tip_2"))},initTableDataFn:function(t){var e=(t.page-1)*t.limit,i=t.page*t.limit>this.tableAllData.length?this.tableAllData.length:t.page*t.limit;this.tableOptions.data=this.tableAllData.slice(e,i)},tableResponseFn:function(t,e,i){this[e.funcName].call(function(){},t,e,i)},exportRecord:function(){var t=this,e=this.params,i=e.vehicleIds,o=e.time;this.$confirm(this.$t("confirm.content"),this.$t("confirm.title"),{confirmButtonText:this.$t("confirm.determine"),cancelButtonText:this.$t("confirm.cancel"),closeOnClickModal:!1,beforeClose:function(e,r,a){if(t.fieldMap={},t.tableOptions.columns.forEach(function(e){t.$refs.table.columnCheckList.forEach(function(i){e.key===i&&"operate"!==e.key&&(t.fieldMap[i]=e.title)})}),"confirm"===e){var n={fieldMap:t.fieldMap,vehicleIds:JSON.parse(i),startTime:o?o[0]:null,endTime:o?o[1]:null};t.tableAllData.length<t.$store.getters.userData.realtimeVideoUrl?t.$http.download("/position/history/report/export?isToken=true",n):t.$http.post("/position/history/report/export/async",n),a()}else a()}}).catch(function(){})}}},n=(i("81sB"),i("ZrdR")),l=Object(n.a)(a,function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.isTable?i("table-view",{ref:"table",attrs:{center:"","id-key":"id","is-search":!0,data:t.tableOptions.data,total:t.tableOptions.total,columns:t.tableOptions.columns,"search-controls":t.tableOptions.searchControls,"footer-buttons":t.tableOptions.footerButtons,"button-controls":t.tableOptions.buttonControls,"pagination-layout":t.tableOptions.paginationLayout,loading:t.tableOptions.loading,"is-shadow":""},on:{requestTableData:t.getTableData,handleCallback:t.tableResponseFn}},[i("el-table-column",{attrs:{slot:"number",label:t.$t("view.index"),type:"index",align:"center",fixed:"left",width:"60"},slot:"number"})],1):t._e()},[],!1,null,"335e57e2",null);l.options.__file="t_1_5.vue";e.default=l.exports}}]);