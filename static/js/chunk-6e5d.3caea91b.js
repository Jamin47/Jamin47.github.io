(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-6e5d","YelX","YelX","YelX"],{"9uQH":function(e,t,i){e.exports=i.p+"static/img/vehicle_pic_yx.5215034.png"},CQtm:function(e,t,i){},"D/oC":function(e,t,i){"use strict";var n=i("CQtm");i.n(n).a},II04:function(e,t,i){e.exports=i.p+"static/img/vehicle_pic_dbx.433ef3d.png"},YelX:function(e,t,i){"use strict";i.r(t);var n=i("bS4n"),a=i.n(n),r=i("8t5x");t.default={data:function(){return{permissionList:{vehicleUpdate:"/vehicle/update/**",vehicleExport:"/vehicle/export",vehicleDelete:"/vehicle/delete",vehicleList:"/vehicle/list",vehicleCreate:"/vehicle/create",vehicleFastCreate:"/vehicle/fastCreate",vehicleMotorcadeCreate:"/vehicle/motorcade/create",vehicleMotorcadeUpdate:"/vehicle/motorcade/update",vehicleMotorcadeDelete:"/vehicle/motorcade/delete/**",companyList:"/company/list",companyCreate:"/company/create",companyExport:"/company/export",companyDetail:"/company/**",companyUpdate:"/company/update/**",companyPersonalization:"/company/personalization/**",companyDelete:"/company/delete",driverList:"/driver/list",driverCreate:"/driver/create",driverDetail:"/driver/get/**",driverUpdate:"/driver/update/**",driverDelete:"/driver/delete",driverExport:"/driver/export",labelList:"/label/list",labelCreate:"/label/create",labelUpdate:"/label/update/**",labelDelete:"/label/delete",labelExport:"/label/export",regionList:"/region/list",regionCreate:"/region/create",regionUpdate:"/region/update/**",regionDelete:"/region/delete",regionExport:"/region/export",routeList:"/route/list",routeCreate:"/route/create",routeUpdate:"/route/update/**",routeDelete:"/route/delete",routeExport:"/route/export",adminList:"/admin/list",adminCreate:"/admin/create",adminUpdate:"/admin/update/**",adminDelete:"/admin/delete",adminExport:"/admin/export",typeCreate:"/ef/type/create",typeUpdate:"/ef/type/update/**",typeDelete:"/ef/type/delete/**",drivingLicenseList:"/driving/license/list",drivingLicenseCreate:"/driving/license/create",drivingLicenseUpdate:"/driving/license/update/**",drivingLicenseDelete:"/driving/license/delete",drivingLicense:"/driving/license/export",transportList:"/transport/list",transportCreate:"/transport/create",transportUpdate:"/transport/update/**",transportDelete:"/transport/delete",transportExport:"/transport/export",maintainList:"/maintain/list",maintainCreate:"/maintain/create",maintainUpdate:"/maintain/update/**",maintainDelete:"/maintain/delete",maintainExport:"/maintain/export",insuranceList:"/insurance/list",insuranceCreate:"/insurance/create",insuranceUpdate:"/insurance/update/**",insuranceDelete:"/insurance/delete",insuranceExport:"/insurance/export",insuranceListAdvance:"/insurance/list/advance",annualList:"/annual/list",annualCreate:"/annual/create",annualUpdate:"/annual/update/**",annualDelete:"/annual/delete",annualExport:"/annual/export",annualListAdvance:"/annual/list/advance",repairList:"/repair/list",repairCreate:"/repair/create",repairUpdate:"/repair/update/**",repairDelete:"/repair/delete",repairExport:"/repair/export",accidentList:"/accident/list",accidentCreate:"/accident/create",accidentUpdate:"/accident/update/**",accidentDelete:"/accident/delete",accidentExport:"/accident/export",simList:"/sim/list",simCreate:"/sim/create",simUpdate:"/sim/update/**",simDelete:"/sim/delete",simExport:"/sim/export"}}},computed:a()({},Object(r.b)(["permsData"]),{isAdministrator:function(){return[-1,-2].includes(Number(this.$store.getters.userData.userType))}}),watch:{permsData:{handler:function(){this.handlePermissionShow&&this.handlePermissionShow()},immediate:!0}},methods:{isPermissionShow:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return!!this.isAdministrator||this.permsData.includes(this.permissionList[e])}}}},iNRi:function(e,t,i){"use strict";i.r(t);var n=i("unDg"),a=i.n(n),r=i("omC7"),s=i.n(r),o=i("bS4n"),c=i.n(o),l=i("ABCu"),d=i("kDn8"),p=i("AlM9"),u=i("EXUM"),m=i("YelX"),h=i("9uQH"),f=i.n(h),g=i("mh7c"),y=i.n(g),v=i("II04"),_=i.n(v),b=i("8t5x"),$={name:"VehicleAdminister",components:{treeView:l.a,dialogDesign:d.a,TableView:p.a,bdMap:u.default},mixins:[m.default],data:function(){return{regionId:null,ruleForm:{paramType:1,enterType:2,enterReceives:[],outType:2,outReceives:[],speedLimit:1,maxSpeed:null,nightMaxSpeed:null,duration:null,effectTime:1,startTime:null,endTime:null,communication:0,collectCnss:1},rules:{enterType:[{required:!0,message:this.$t("electronicFence.tip_1"),trigger:"change"}],enterReceives:[{required:!0,message:this.$t("electronicFence.tip_2"),trigger:"change"}],outType:[{required:!0,message:this.$t("electronicFence.tip_3"),trigger:"change"}],outReceives:[{required:!0,message:this.$t("electronicFence.tip_4"),trigger:"change"}],speedLimit:[{required:!0,message:this.$t("electronicFence.tip_5"),trigger:"change"}],maxSpeed:[{required:!0,message:this.$t("electronicFence.tip_6"),trigger:"blur"}],nightMaxSpeed:[{required:!0,message:this.$t("electronicFence.tip_6"),trigger:"blur"}],duration:[{required:!0,message:this.$t("electronicFence.tip_7"),trigger:"blur"}],effectTime:[{required:!0,message:this.$t("electronicFence.tip_8"),trigger:"change"}],startTime:[{required:!0,message:this.$t("electronicFence.select_start_time"),trigger:"change"}],endTime:[{required:!0,message:this.$t("electronicFence.select_end_time"),trigger:"change"}],communication:[{required:!0,message:this.$t("electronicFence.tip_8"),trigger:"change"}],collectCnss:[{required:!0,message:this.$t("electronicFence.tip_8"),trigger:"change"}]},props:{motorcade:"motorcade",parentId:"parentId",status:"status",children:"children",label:"label",id:"id",count:"count"},regionIds:"",userMenus:[],flag:null,checkedKeys:[],fieldMap:{},tableplay:!1,drawerplay:!1,direction:"rtl",drawerTitle:"",drawerWidth:"700px",user:{username:"",account:""},icons:[{icon:f.a,name:this.$t("electronicFence.circle"),id:1},{icon:y.a,name:this.$t("electronicFence.rectangle"),id:2},{icon:_.a,name:this.$t("electronicFence.polygon"),id:3}],visible:!1,widthNum:0,show:!1,viewLeft:!1,company:[],dialogDisplay:!1,alias:{pageSize:"pageSize",pageNum:"pageNum"},typeTitle:null,activeMenu:{typeId:null,name:""},typeId:null,isTree:!0,filterText:"",resTreeData:null,resetData:{parentId:"parentId",value:"typeId",label:"typeName",children:"opEfTypeNodes"},resetMenus:[],treeData:{extendData:{},checkOriginName:"",treeQuery:{type:"get",action:"/ef/type/treeList/1",list:null},defaultProps:{children:"opEfTypeNodes",label:"typeName",isLeaf:"lezy",disabled:"disabled"},nodeKey:"typeId",currentNodeKey:1,defaultExpandAll:!0,expandClickNode:!1,indent:16,screenFn:{bindFn:function(e,t){return!e||-1!==t.typeName.indexOf(e)}},draggable:{isDraggable:!1,allowDrap:function(e,t,i){return!0},allowDrop:function(e,t,i){return e.data.type===t.data.type?"inner"!==i:(1!==e.data.type||0!==t.data.type)&&(0!==e.data.type||1!==t.data.type)}}},params:{},tableOptions:{data:[],total:0,columns:[{type:"slot",name:"number",title:this.$t("electronicFence.sequence_number")},{title:this.$t("electronicFence.area_shape"),type:"slot",name:"regionType"},{title:this.$t("electronicFence.region_name"),type:"text",minWidth:"130",key:"regionName"},{title:this.$t("electronicFence.subordinate_classification"),key:"typeName",minWidth:"130",type:"text"},{title:this.$t("electronicFence.belong_company"),key:"companyName",minWidth:"150",type:"text"},{title:this.$t("electronicFence.type"),key:"entryType",minWidth:"130",type:"tagText",tags:[{text:this.$t("electronicFence.disable"),value:1},{text:this.$t("electronicFence.forbidden"),value:2,option:{type:"danger"}}]},{title:this.$t("electronicFence.create_time"),key:"createTime",minWidth:"220",type:"text"},{title:this.$t("operation.operation"),key:"operate",type:"operate",fixed:"right",width:"250",buttons:[],mode:"default",dropdownType:"primary"}],buttonControls:[],searchControls:[{type:"input",key:"regionName",placeholder:this.$t("electronicFence.region_name"),width:"200px"},{type:"select",key:"regionType",placeholder:this.$t("electronicFence.area_shape"),width:"200px",filterable:!0,clearable:!0,options:[{name:this.$t("electronicFence.circle"),value:1},{name:this.$t("electronicFence.rectangle"),value:2},{name:this.$t("electronicFence.polygon"),value:3}]},{type:"select",key:"companyId",placeholder:this.$t("electronicFence.belong_company"),width:"200px",filterable:!0,clearable:!0,options:[{name:this.$t("electronicFence.none"),value:0}]},{type:"select",key:"entryType",placeholder:this.$t("electronicFence.type"),width:"200px",filterable:!0,clearable:!0,options:[{name:this.$t("electronicFence.disable"),value:1},{name:this.$t("electronicFence.forbidden"),value:2}]}],searchMode:"immediate",footerButtons:[],paginationLayout:"total, sizes, prev, pager, next, jumper",loading:!1}}},computed:c()({},Object(b.b)(["elNorms"]),{categoryManagementPermission:function(){return this.isPermissionShow("typeCreate")||this.isPermissionShow("typeUpdate")||this.isPermissionShow("typeDelete")}}),watch:{filterText:function(e){this.$refs.tree.$refs.sonTree.filter(e)},show:function(e){this.$emit("mapSwitchFn",e)}},created:function(){this.getCompanyDataFn()},mounted:function(){},methods:{handlePermissionShow:function(){this.tableOptions.buttonControls=[],this.isPermissionShow("regionCreate")&&this.tableOptions.buttonControls.push({text:this.$t("electronicFence.add_region"),round:!1,icon:"el-icon-plus",funcName:"addVehicle"}),this.isPermissionShow("regionExport")&&this.tableOptions.buttonControls.push({text:this.$t("operation.export_record"),type:"null",round:!1,icon:"el-icon-download",funcName:"exportRecord"}),this.tableOptions.footerButtons=[],this.isPermissionShow("regionUpdate")&&this.tableOptions.footerButtons.push({text:this.$t("electronicFence.move"),type:"",size:"mini",icon:"el-icon-remove-outline",round:!1,funcName:"move"}),this.isPermissionShow("regionDelete")&&this.tableOptions.footerButtons.push({text:this.$t("operateCommon.delete"),type:"danger",size:"mini",icon:"el-icon-delete",round:!1,funcName:"delete"});var e=this.tableOptions.columns.findIndex(function(e){return"operate"===e.key});this.tableOptions.columns[e].buttons=[],e>-1&&this.isPermissionShow("regionList")&&this.tableOptions.columns[e].buttons.push({tipText:this.$t("electronicFence.details"),type:"text",icon:"iconfont Jamin_vehicle_ico_xq",funcName:"details"}),e>-1&&this.isPermissionShow("regionUpdate")&&this.tableOptions.columns[e].buttons.push({tipText:this.$t("operation.edit"),type:"text",icon:"iconfont Jamin_vehicle_icon_bj",funcName:"edit"}),e>-1&&this.isPermissionShow("regionUpdate")&&this.tableOptions.columns[e].buttons.push({tipText:this.$t("electronicFence.fence_arameters"),type:"text",icon:"iconfont Jamin_vehicle_icon_wlcs",funcName:"enclosure"}),e>-1&&this.isPermissionShow("regionUpdate")&&this.tableOptions.columns[e].buttons.push({tipText:this.$t("electronicFence.zone_down"),type:"text",icon:"iconfont Jamin_vehicle_icon_qyxf",funcName:"vehicleAuthorization"})},enclosure:function(e){var t=this;switch(this.regionId=e.regionId,this.tableplay=!0,this.ruleForm={paramType:1,enterType:2,enterReceives:[],outType:2,outReceives:[],speedLimit:1,maxSpeed:null,nightMaxSpeed:null,duration:null,effectTime:1,startTime:null,endTime:null,communication:0,collectCnss:1},this.$nextTick(function(){t.$refs.ruleForm.resetFields()}),this.drawerTitle=this.$t("electronicFence.fence_arameters"),this.drawerWidth="700px",this.user.username=e.regionName,e.regionType){case 1:this.user.account=this.$t("electronicFence.circle");break;case 2:this.user.account=this.$t("electronicFence.rectangle");break;case 3:this.user.account=this.$t("electronicFence.polygon")}this.paramData(e.regionId)},paramData:function(e){var t=this;this.$http.get("/ef/param/1/"+e).then(function(e){e.code===t.$config.API_STATUS.OK&&e.data&&(t.ruleForm=e.data)})},tablesFn:function(){var e=this;this.$refs.ruleForm.validate(function(t){if(!t)return!1;e.ruleForm.regionId=e.regionId,e.$http.post("/ef/param/create",e.ruleForm).then(function(t){t.code===e.$config.API_STATUS.OK&&(e.tableplay=!1,e.$refs.table.initRequestTableData(),e.$message({message:t.message,type:"success"}))})})},endTime:function(e){this.ruleForm.startTime?new Date(e).getTime()<=new Date(this.ruleForm.startTime).getTime()&&(this.$message.error(this.$t("electronicFence.time_tip_1")),this.ruleForm.endTime=null):(this.$message.error(this.$t("electronicFence.select_start_time")),this.ruleForm.endTimet=null)},click:function(e,t){this.$refs.trees.setCurrentKey(e.treeId),this.$refs._user_tree.setCurrentKey(e.treeId)},switchs:function(e,t){this.$refs.trees.setChecked(t,!1,!1),this.CheckedKeyFn()},treeList:function(e){var t=this;this.flag=!1,this.checkedKeys=[],this.$http.get("/region/list/vehicle?regionId="+e).then(function(e){if(e.code===t.$config.API_STATUS.OK){var i=[{motorcades:e.data.motorcades,vehicles:e.data.vehicles}];t.treeArr(i),t.resetMenus=i[0].children}t.userTreeList(t.regionIds)})},userTreeList:function(e){var t=this;this.flag=!0,this.checkedKeys=[],this.$http.get("/region/list/vehicle/authorized?regionId="+e).then(function(e){if(e.code===t.$config.API_STATUS.OK){var i=[{motorcades:e.data.motorcades,vehicles:e.data.vehicles}];t.treeArr(i),t.userMenus=i[0].children,t.$refs.trees.setCheckedKeys(t.checkedKeys)}})},treeArr:function(e){for(var t=this,i=function(i){if(e[i].motorcades){var n=[];e[i].vehicles&&e[i].vehicles.forEach(function(a){t.flag&&t.checkedKeys.push("v"+a.vehicleId),n.push({motorcade:!1,parentId:e[i].vehiclePid,status:a.status,label:a.licenseNum,id:a.vehicleId,treeId:"v"+a.vehicleId})}),e[i].motorcades.forEach(function(e){t.flag&&!e.motorcades.length&&!e.vehicles.length&&t.checkedKeys.push("m"+e.motorcadeId),n.push({motorcade:!0,parentId:e.parentId,status:e.status,motorcades:e.motorcades,vehicles:e.vehicles,label:e.motorcadeName,id:e.motorcadeId,count:e.count,vehiclePid:e.motorcadeId,treeId:"m"+e.motorcadeId})}),e[i].children=JSON.parse(s()(n)),t.treeArr(e[i].children),delete e[i].motorcades,delete e[i].vehicles}},n=0;n<e.length;n++)i(n)},CheckedKeyFn:function(e,t){this.userMenus=[],this.createCheckedTreeFn(this.$refs.trees._data.root.childNodes)},createCheckedTreeFn:function(e){for(var t=0;t<e.length;t++){var i=e[t];if(i.checked){if(!i.data.motorcade){var n=this.$refs.trees.getNode("m"+i.data.parentId),a=this.forNodeFilterFn(n);a&&this.userMenus.push(a);break}this.userMenus.push(i.data)}else i.childNodes&&i.childNodes.length&&this.createCheckedTreeFn(i.childNodes)}},forNodeFilterFn:function(e){var t=this,i=[],n=null;return e.childNodes.forEach(function(e){if(e.checked)i.push(e.data);else if(e.childNodes&&e.childNodes.length){var n=t.forNodeFilterFn(e);n&&i.push(n)}}),i.length&&((n=JSON.parse(s()(e.data))).children=i),n},vehicleAuthorization:function(e){e.username&&(this.user.username=e.username),e.account&&(this.user.account=e.account),this.regionIds=e.regionId,this.treeList(this.regionIds),this.drawerWidth="700px",this.drawerTitle=this.$t("electronicFence.zone_down"),this.drawerplay=!0},submitFn:function(){var e=this,t=this.treeCountFn(this.$refs._user_tree._data.root.childNodes,!0);this.$http.post("/region/vehicle/"+this.regionIds,t).then(function(t){t.code===e.$config.API_STATUS.OK&&(e.$message.success(e.$t("electronicFence.authorization_succeeded")),e.drawerplay=!1,e.$refs.table.initRequestTableData())})},treeCountFn:function(e){var t=this,i=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=[],r=[];return e.forEach(function(e){if(e.data.motorcade){if(n.push({parentId:i?0:e.data.parentId,motorcadeId:e.data.id}),e.childNodes&&e.childNodes.length){var s=t.treeCountFn(e.childNodes);n=[].concat(a()(n),a()(s.authorizedMotorcades)),r=[].concat(a()(r),a()(s.vehicles))}}else r.push({parentId:e.data.parentId,vehicleId:e.data.id})}),{authorizedMotorcades:n,vehicles:r}},addVehicle:function(){this.visible=!this.visible},iconMap:function(e){var t=this;switch(e){case 1:this.typeTitle=this.$t("electronicFence.circle");break;case 2:this.typeTitle=this.$t("electronicFence.rectangle");break;case 3:this.typeTitle=this.$t("electronicFence.polygon")}this.show=!0,this.visible=!1,this.$nextTick(function(){t.$refs.bdmap.addRegion()})},diaClose:function(e){var t=this;this.treeData.currentNodeKey=this.activeMenu.typeId,e&&(this.isTree=!1,this.$nextTick(function(){t.isTree=!0})),this.dialogDisplay=!1},details:function(e){var t=this;this.$http.get("/region/"+e.regionId).then(function(e){e.code===t.$config.API_STATUS.OK&&(t.show=!0,t.$refs.bdmap.detailsRegion(e.data))})},edit:function(e){var t=this;this.$http.get("/region/"+e.regionId).then(function(e){if(e.code===t.$config.API_STATUS.OK){switch(e.data.regionType){case 1:t.typeTitle=t.$t("electronicFence.circle");break;case 2:t.typeTitle=t.$t("electronicFence.rectangle");break;case 3:t.typeTitle=t.$t("electronicFence.polygon")}setTimeout(function(){t.show=!0,t.$refs.bdmap.editRegion(e.data)},100)}})},dialogCallback:function(e,t,i){this[e.handlerCallback.funcName].call(function(){},e,t,i)},addMenu:function(e){var t=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;"click"===e.type&&(e={}),-1===this.resetMenus[0].value&&(this.resetMenu=JSON.parse(s()(this.resetMenus)).splice(-1,1),this.$set(this.resetMenu[0],"value",0)),this.dialogData={staticData:{parentId:"mainNew"===i?null:e.typeId?e.typeId:0},isClickClose:!1,isDialogDisplay:!0,title:this.$t("electronicFence.add_Category"),data:{},defaultData:{fenceType:1},mainWidth:"500",titleWidth:"100",submitAction:"/ef/type/create",btnAlign:"center",formList:[{title:this.$t("electronicFence.superior_category"),type:"cascader",labelWidth:"100",offsetWidth:"320",key:"parentId",props:{checkStrictly:!0,emitPath:!1},options:{type:"default",list:this.resetMenu},handlerCallback:{target:"changeFunction",funcName:"cascaderChange"},rules:[{required:!0,message:this.$t("electronicFence.select_superior_category"),trigger:"change"}]},{title:this.$t("electronicFence.category_name"),type:"input",offsetWidth:"320",key:"typeName",rules:[{required:!0,message:this.$t("electronicFence.enter_category_name"),trigger:"blur"}]}],message:{message:this.$t("electronicFence.category_added_successfully"),type:"success"},formButton:[{name:this.$t("electronicFence.submit"),type:"confirm",class:"primary",round:!1},{name:this.$t("confirm.cancel"),type:"cancel",class:"",round:!1}],confirmSubmitFn:function(e,i){var n=!1;t.dialogData.submitAction="/ef/type/create",function t(i){for(var a=0;a<i.length;a++){if(null===i[a].typeId&&0===e.parentId||i[a].typeId===e.parentId){n=i[a].opEfTypeNodes.some(function(t){return t.typeName===e.typeName});break}i[a].opEfTypeNodes&&i[a].opEfTypeNodes.length>0&&t(i[a].opEfTypeNodes)}}(t.resTreeData),n&&(t.dialogData.submitAction=!1,t.$message.warning(t.$t("electronicFence.category_name_exists")))}},this.dialogDisplay=!0},editMenu:function(e){-1===this.resetMenus[0].value&&(this.resetMenu=JSON.parse(s()(this.resetMenus)).splice(-1,1),this.$set(this.resetMenu[0],"value",0)),delete e.list,this.dialogData={isClickClose:!1,staticData:e,isDialogDisplay:!0,title:this.$t("electronicFence.edit_categories"),data:{},defaultData:{fenceType:1},mainWidth:"500",titleWidth:"100",submitAction:"/ef/type/update/"+e.typeId,btnAlign:"center",formList:[{title:this.$t("electronicFence.superior_category"),type:"cascader",labelWidth:"100",offsetWidth:"320",key:"parentId",props:{checkStrictly:!0,emitPath:!1},options:{type:"default",list:this.resetMenu},handlerCallback:{target:"changeFunction",funcName:"cascaderChange"},rules:[{required:!0,message:this.$t("electronicFence.select_superior_category"),trigger:"change"}]},{title:this.$t("electronicFence.category_name"),type:"input",offsetWidth:"320",key:"typeName",rules:[{required:!0,message:this.$t("electronicFence.enter_category_name"),trigger:"blur"}]}],message:{message:this.$t("electronicFence.category_edit_successful"),type:"success"},formButton:[{name:this.$t("electronicFence.submit"),type:"confirm",class:"primary",round:!1},{name:this.$t("confirm.cancel"),type:"cancel",class:"",round:!1}]},this.dialogDisplay=!0},handleCommand:function(e){this[e.funcName].call(function(){},e.data,e.node,e.funcName)},removeTree:function(e){var t=this;this.$confirm(this.$t("electronicFence.delete_text_tip"),this.$t("operateCommon.prompt"),{confirmButtonText:this.$t("operateCommon.ok"),cancelButtonText:this.$t("operateCommon.cancel"),type:"warning"}).then(function(){t.$http.get("/ef/type/delete/"+e.typeId).then(function(e){e.code===t.$config.API_STATUS.OK&&(t.$message({type:"success",message:t.$t("electronicFence.delete_successfully")}),t.isTree=!1,t.$nextTick(function(){t.isTree=!0}))})}).catch(function(){t.$message({type:"info",message:t.$t("electronicFence.deleted_canceled")})})},getTreeData:function(e){var t=JSON.parse(s()(e));t.unshift({typeName:this.$t("electronicFence.none"),typeId:-1,parentId:0}),this.resTreeData=e,this.resetDataFn(t,!1),this.$refs.table.initRequestTableData()},nodeClick:function(e,t){e.children&&e.children.length||(this.activeMenu={typeId:e.typeId,name:e.typeName},this.parentId=e.parentId),this.typeId=e.typeId,this.$refs.table.initRequestTableData()},getCompanyDataFn:function(){var e=this;this.$http.get("/company/treeList/electronicFence").then(function(t){t.code===e.$config.API_STATUS.OK&&(e.company=t.data)}),this.$http.post("/company/electronicFence/list/all").then(function(t){if(t.code===e.$config.API_STATUS.OK){var i=t.data.list.map(function(e){return{label:e.name,name:e.name,value:e.companyId}});e.tableOptions.searchControls[2].options=i}})},getTableData:function(e){var t=this;this.tableOptions.loading=!0;var i={typeId:this.typeId,regionName:e.regionName,regionType:e.regionType,companyId:e.companyId,entryType:e.entryType};this.$http.post("/region/list?pageNum="+e.pageNum+"&pageSize="+e.pageSize,i).then(function(e){e.code===t.$config.API_STATUS.OK&&(t.tableOptions.loading=!1,t.tableOptions.data=e.data.list,t.tableOptions.total=e.data.total)})},tableResponseFn:function(e,t,i){this[t.funcName].call(function(){},e,t,i)},move:function(e){var t=[];e.forEach(function(e,i){t[i]=e.regionId}),-1===this.resetMenus[0].value&&(this.resetMenu=JSON.parse(s()(this.resetMenus)).splice(-1,1)),this.dialogData={isClickClose:!1,staticData:"",isDialogDisplay:!0,title:this.$t("electronicFence.adjust_classification"),data:{},defaultData:{ids:t.join(",")},methods:"deleteApi",mainWidth:"500",titleWidth:"100",submitAction:"/region/update",btnAlign:"center",formList:[{title:this.$t("electronicFence.superior_category"),type:"cascader",labelWidth:"100",offsetWidth:"320",key:"typeId",props:{checkStrictly:!0,emitPath:!1},options:{type:"default",list:this.resetMenu},handlerCallback:{target:"changeFunction",funcName:"cascaderChange"},rules:[{required:!0,message:this.$t("electronicFence.select_category"),trigger:"change"}]}],message:{message:this.$t("electronicFence.adjustment_succeeded"),type:"success"},formButton:[{name:this.$t("electronicFence.submit"),type:"confirm",class:"primary",round:!1},{name:this.$t("confirm.cancel"),type:"cancel",class:"",round:!1}]},this.dialogDisplay=!0},delete:function(e){var t=this;this.$confirm(this.$t("confirm.del"),this.$t("confirm.title"),{confirmButtonText:this.$t("operateCommon.ok"),cancelButtonText:this.$t("operateCommon.cancel"),type:"warning"}).then(function(){var i=[];e.forEach(function(e,t){i[t]=e.regionId}),t.$http.deleteApi("/region/delete",{ids:i.join(",")}).then(function(e){e.code===t.$config.API_STATUS.OK&&(t.$refs.table.initRequestTableData(),t.$message({message:e.message,type:"success"}))})})},resetDataFn:function(e){var t=this,i=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(this.resetData){var n=[];if(e.forEach(function(e){var i=t.initJSON(t.resetData,e);n.push(i)}),!0===i)return n;this.resetMenus=n}},initJSON:function(e,t){var i={};for(var n in e)if("children"===n&&t[e[n]]&&t[e[n]].length>0){var a=this.resetDataFn(t[e[n]],!0);i[n]=a}else"children"!==n&&(i[n]=t[e[n]]);return i},disabledData:function(e){this.resetMenus.forEach(function(t){0===e&&t.children&&t.children.length>0&&(t.disabled=!0),t.children&&t.children.length>0&&t.children.forEach(function(t){1===e&&(t.disabled=!1)})})},nodeDragEnd:function(e,t,i){var n=this;this.$http.post("/sys/menu/sort",{motorcadeId:e.data.motorcadeId,targetId:t.data.motorcadeId,moveType:i}).then(function(e){e.code,n.$config.API_STATUS,n.isTree=!1,n.$nextTick(function(){n.isTree=!0})}).catch(function(){n.isTree=!1,n.$nextTick(function(){n.isTree=!0})})},cascaderChange:function(e,t,i){null===t&&(t=0),this.$refs._dialog.dialogData.defaultData.parentId=-1===t?0:t,this.$refs._dialog.dialogData.defaultData.fenceType=1,"0"===t&&(this.$refs._dialog.dialogData.defaultData={type:0})},exportRecord:function(){var e=this;this.$confirm(this.$t("operateCommon.confirm_export_record"),this.$t("confirm.title"),{confirmButtonText:this.$t("operateCommon.ok"),cancelButtonText:this.$t("operateCommon.cancel"),type:"warning",closeOnClickModal:!1,beforeClose:function(t,i,n){if(e.fieldMap={},e.tableOptions.columns.forEach(function(t){e.$refs.table.columnCheckList.forEach(function(i){t.key===i&&"operate"!==t.key&&(e.fieldMap[i]=t.title)})}),"confirm"===t){var a=e.$refs.table._data.searchParams,r=a.regionName,s=a.regionType,o=a.companyId,c=a.entryType,l={fieldMap:e.fieldMap,regionName:r,regionType:s,companyId:o,entryType:c,typeId:e.typeId};e.$http.download("/region/export?isToken=true",l),n()}else n()}}).catch(function(){})}}},F=(i("D/oC"),i("ZrdR")),T=Object(F.a)($,function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"table"},[i("div",{staticClass:"page-body"},[i("el-collapse-transition",[i("div",{directives:[{name:"show",rawName:"v-show",value:e.visible,expression:"visible"}],staticClass:"visible"},[i("div",{staticClass:"arrow"}),e._v(" "),e._l(e.icons,function(t){return i("div",{key:t.id,staticClass:"icons",on:{click:function(i){e.iconMap(t.id)}}},[i("img",{attrs:{src:t.icon,alt:""}}),e._v(" "),i("span",{staticStyle:{"font-size":"14px"}},[e._v(e._s(t.name))])])})],2)]),e._v(" "),i("div",{staticClass:"con-left"},[i("div",{staticClass:"input-query"},[i("el-input",{attrs:{size:e.elNorms.size,placeholder:e.$t("electronicFence.search_category_name"),"prefix-icon":"el-icon-search"},model:{value:e.filterText,callback:function(t){e.filterText="string"==typeof t?t.trim():t},expression:"filterText"}}),e._v(" "),e.isPermissionShow("typeCreate")?i("el-button",{staticStyle:{width:"80px","margin-left":"4px"},attrs:{size:e.elNorms.size,circle:e.elNorms.circle,round:e.elNorms.round},on:{click:function(t){e.addMenu(t,"mainNew")}}},[e._v(e._s(e.$t("electronicFence.new_category")))]):e._e()],1),e._v(" "),i("div",{staticClass:"body-tree init-tree"},[e.isTree?i("tree-view",{ref:"tree",attrs:{"tree-data":e.treeData},on:{treeDataFn:e.getTreeData,"node-click":e.nodeClick,"node-drag-end":e.nodeDragEnd},scopedSlots:e._u([{key:"default",fn:function(t){return[i("span",{staticClass:"left-title text-ellipsis",style:t.data.data.typeId===e.activeMenu.typeId?"color: var(--main-primary);":""},[i("i",{staticClass:"iconfont Jamin_vehicle_icon_xiaowenjian"}),e._v("\n              "+e._s(t.data.data.typeName)+"\n            ")]),e._v(" "),i("span",{staticClass:"right-edit"},[i("span",[i("el-dropdown",{on:{command:e.handleCommand}},[i("span",{staticClass:"el-dropdown-link"},[e.categoryManagementPermission?i("i",{staticClass:"el-icon-more"}):e._e()]),e._v(" "),i("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[e.isPermissionShow("typeCreate")?i("el-dropdown-item",{attrs:{command:{data:t.data.data,node:t.data.node,funcName:"addMenu"}}},[e._v(e._s(e.$t("electronicFence.add_subcategory")))]):e._e(),e._v(" "),null!==t.data.data.typeId&&e.isPermissionShow("typeUpdate")?i("el-dropdown-item",{attrs:{command:{data:t.data.data,node:t.data.node,funcName:"editMenu"}}},[e._v(e._s(e.$t("electronicFence.edit_categories")))]):e._e(),e._v(" "),null!==t.data.data.typeId&&e.isPermissionShow("typeDelete")?i("el-dropdown-item",{attrs:{command:{data:t.data.data,node:t.data.node,funcName:"removeTree"}}},[e._v(e._s(e.$t("electronicFence.delete_category")))]):e._e()],1)],1)],1)])]}}])}):e._e()],1)]),e._v(" "),i("div",{staticClass:"con-right"},[i("transition",{attrs:{name:"opacity"}},[i("div",{staticClass:"opacity_table"},[i("table-view",{ref:"table",attrs:{center:"","id-key":"regionId","is-search":!0,"check-memory":!0,data:e.tableOptions.data,total:e.tableOptions.total,columns:e.tableOptions.columns,"search-controls":e.tableOptions.searchControls,"footer-buttons":e.tableOptions.footerButtons,"button-controls":e.tableOptions.buttonControls,"pagination-layout":e.tableOptions.paginationLayout,loading:e.tableOptions.loading,checked:"","column-view":"","is-border":"",alias:e.alias},on:{requestTableData:e.getTableData,handleCallback:e.tableResponseFn}},[i("el-table-column",{attrs:{slot:"number",label:e.$t("view.index"),type:"index",align:"center"},slot:"number"}),e._v(" "),i("el-table-column",{attrs:{slot:"regionType",label:e.$t("electronicFence.icon"),align:"center",width:"130"},slot:"regionType",scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.regionType?i("img",{attrs:{src:e.icons[t.row.regionType-1].icon,alt:""}}):e._e()]}}])})],1)],1)])],1)],1),e._v(" "),i("transition",{attrs:{name:"el-zoom-in-bottom"}},[i("bd-map",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}],ref:"bdmap",staticClass:"mapShow  left-control control-view",class:{leftActive:e.viewLeft},attrs:{"reset-menus":e.resetMenus,company:e.company,icons:e.icons,"view-left":e.viewLeft,"type-title":e.typeTitle,"is-show-form":!1}})],1),e._v(" "),e.dialogDisplay?i("dialog-design",{ref:"_dialog",attrs:{color:"warning","dialog-data":e.dialogData},on:{diaClose:e.diaClose,handlerCallback:e.dialogCallback}}):e._e(),e._v(" "),i("el-drawer",{attrs:{title:e.drawerTitle,visible:e.drawerplay,direction:e.direction,size:e.drawerWidth,"wrapper-closable":!1},on:{"update:visible":function(t){e.drawerplay=t}}},[e.drawerplay?i("div",{staticClass:"uploadDialogClass"},[i("div",{staticClass:"user"},[i("span",[e._v(e._s(e.$t("electronicFence.region_name"))+"  "+e._s(e.user.username))]),e._v(" "),i("span",[e._v(e._s(e.$t("electronicFence.region_name"))+"  "+e._s(e.user.account))])]),e._v(" "),i("div",{staticClass:"tree_box"},[i("div",{staticClass:"tree_item"},[i("el-tree",{ref:"trees",attrs:{data:e.resetMenus,"show-checkbox":"","node-key":"treeId","default-checked-keys":e.checkedKeys,"default-expand-all":!0,props:e.props},on:{check:e.CheckedKeyFn,"node-click":e.click},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.node,a=t.data;return i("span",{staticClass:"custom-tree-node"},[!0===a.motorcade?i("span",[i("i",{staticClass:"iconfont Jamin_vehicle_icon_dawenjianjia p-c"}),e._v("\n                "+e._s(n.label)+"\n              ")]):e._e(),e._v(" "),!1===a.motorcade?i("span",[i("i",{staticClass:"iconfont Jamin_location_icon_che-lan iconTxt p-s"}),e._v("\n                "+e._s(n.label)+"\n              ")]):e._e()])}}])})],1),e._v(" "),i("div",{staticClass:"tree_item"},[i("el-tree",{ref:"_user_tree",attrs:{data:e.userMenus,"node-key":"treeId","default-expand-all":!0,props:e.props},on:{check:e.CheckedKeyFn,"node-click":e.click},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.node,a=t.data;return i("span",{staticClass:"custom-tree-node"},[!0===a.motorcade?i("span",[i("span",[i("i",{staticClass:"iconfont Jamin_vehicle_icon_dawenjianjia p-c"}),e._v("\n                  "+e._s(n.label)+"\n                ")]),e._v(" "),i("span",{staticClass:"right-box"},[i("el-button",{attrs:{type:"text",size:"mini"},on:{click:function(){return e.switchs(n,a)}}},[e._v("\n                    "+e._s(e.$t("electronicFence.remove"))+"\n                  ")])],1)]):e._e(),e._v(" "),!1===a.motorcade?i("span",[i("span",[i("i",{staticClass:"iconfont Jamin_location_icon_che-lan iconTxt p-s"}),e._v("\n                  "+e._s(n.label)+"\n                ")]),e._v(" "),i("span",{staticClass:"right-box"},[i("el-button",{attrs:{type:"text",size:"mini"},on:{click:function(){return e.switchs(n,a)}}},[e._v("\n                    "+e._s(e.$t("electronicFence.remove"))+"\n                  ")])],1)]):e._e()])}}])})],1)])]):e._e(),e._v(" "),i("div",{staticClass:"footBtn"},[i("el-button",{attrs:{type:"primary",size:e.elNorms.size,round:e.elNorms.round,circle:e.elNorms.circle},on:{click:e.submitFn}},[e._v(e._s(e.$t("operateCommon.ok")))]),e._v(" "),i("el-button",{attrs:{size:e.elNorms.size,round:e.elNorms.round,circle:e.elNorms.circle},on:{click:function(t){e.drawerplay=!1}}},[e._v(e._s(e.$t("operateCommon.cancel")))])],1)]),e._v(" "),i("el-drawer",{attrs:{title:e.drawerTitle,visible:e.tableplay,direction:e.direction,size:e.drawerWidth,"wrapper-closable":!1},on:{"update:visible":function(t){e.tableplay=t}}},[e.tableplay?i("div",{staticClass:"uploadDialogClass"},[i("div",{staticClass:"user"},[i("span",[e._v(e._s(e.$t("electronicFence.region_name"))+"  "+e._s(e.user.username))]),e._v(" "),i("span",[e._v(e._s(e.$t("electronicFence.area_shape"))+"  "+e._s(e.user.account))])]),e._v(" "),i("div",{staticClass:"tree_box"},[i("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.ruleForm,rules:e.rules,size:e.elNorms.formSize,"label-width":"120px"}},[i("el-form-item",{attrs:{label:e.$t("electronicFence.tip_9"),prop:"enterType"}},[i("el-radio-group",{attrs:{size:e.elNorms.size},model:{value:e.ruleForm.enterType,callback:function(t){e.$set(e.ruleForm,"enterType",t)},expression:"ruleForm.enterType"}},[i("el-radio",{attrs:{label:0}},[e._v(" "+e._s(e.$t("electronicFence.no_alarm"))+" ")]),e._v(" "),i("el-radio",{attrs:{label:1}},[e._v(e._s(e.$t("electronicFence.alert_once")))]),e._v(" "),i("el-radio",{attrs:{label:2}},[e._v(" "+e._s(e.$t("electronicFence.alarm_continuously"))+" ")])],1)],1),e._v(" "),i("el-form-item",{attrs:{label:e.$t("electronicFence.tip_10"),prop:"enterReceives"}},[i("el-checkbox-group",{attrs:{size:e.elNorms.size},model:{value:e.ruleForm.enterReceives,callback:function(t){e.$set(e.ruleForm,"enterReceives",t)},expression:"ruleForm.enterReceives"}},[i("el-checkbox",{attrs:{label:1}},[e._v("  "+e._s(e.$t("electronicFence.driver"))+" ")]),e._v(" "),i("el-checkbox",{attrs:{label:2}},[e._v(" "+e._s(e.$t("electronicFence.platform"))+" ")])],1)],1),e._v(" "),i("el-form-item",{attrs:{label:e.$t("electronicFence.tip_11"),prop:"outType"}},[i("el-radio-group",{attrs:{size:e.elNorms.size},model:{value:e.ruleForm.outType,callback:function(t){e.$set(e.ruleForm,"outType",t)},expression:"ruleForm.outType"}},[i("el-radio",{attrs:{label:0}},[e._v("  "+e._s(e.$t("electronicFence.no_alarm"))+" ")]),e._v(" "),i("el-radio",{attrs:{label:1}},[e._v("  "+e._s(e.$t("electronicFence.alert_once")))]),e._v(" "),i("el-radio",{attrs:{label:2}},[e._v("  "+e._s(e.$t("electronicFence.alarm_continuously"))+" ")])],1)],1),e._v(" "),i("el-form-item",{attrs:{label:e.$t("electronicFence.tip_12"),prop:"outReceives"}},[i("el-checkbox-group",{attrs:{size:e.elNorms.size},model:{value:e.ruleForm.outReceives,callback:function(t){e.$set(e.ruleForm,"outReceives",t)},expression:"ruleForm.outReceives"}},[i("el-checkbox",{attrs:{label:1}},[e._v("  "+e._s(e.$t("electronicFence.driver"))+" ")]),e._v(" "),i("el-checkbox",{attrs:{label:2}},[e._v(" "+e._s(e.$t("electronicFence.platform"))+" ")])],1)],1),e._v(" "),i("el-form-item",{attrs:{label:e.$t("electronicFence.tip_13"),prop:"speedLimit"}},[i("el-radio-group",{attrs:{size:e.elNorms.size},model:{value:e.ruleForm.speedLimit,callback:function(t){e.$set(e.ruleForm,"speedLimit",t)},expression:"ruleForm.speedLimit"}},[i("el-radio",{attrs:{label:0}},[e._v(" "+e._s(e.$t("electronicFence.unlimited_speed"))+" ")]),e._v(" "),i("el-radio",{attrs:{label:1}},[e._v(e._s(e.$t("electronicFence.speed_limit")))])],1)],1),e._v(" "),i("el-form-item",{attrs:{label:e.$t("electronicFence.maximum_speed"),prop:"maxSpeed"}},[i("el-input",{attrs:{size:e.elNorms.size},model:{value:e.ruleForm.maxSpeed,callback:function(t){e.$set(e.ruleForm,"maxSpeed",t)},expression:"ruleForm.maxSpeed"}},[i("template",{slot:"append"},[e._v("km/h")])],2)],1),e._v(" "),i("el-form-item",{attrs:{label:e.$t("electronicFence.nightSpeed"),prop:"nightMaxSpeed"}},[i("el-input",{attrs:{size:e.elNorms.size},model:{value:e.ruleForm.nightMaxSpeed,callback:function(t){e.$set(e.ruleForm,"nightMaxSpeed",t)},expression:"ruleForm.nightMaxSpeed"}},[i("template",{slot:"append"},[e._v("km/h")])],2)],1),e._v(" "),i("el-form-item",{attrs:{label:e.$t("electronicFence.duration"),prop:"duration"}},[i("el-input",{attrs:{size:e.elNorms.size},model:{value:e.ruleForm.duration,callback:function(t){e.$set(e.ruleForm,"duration",t)},expression:"ruleForm.duration"}},[i("template",{slot:"append"},[e._v(e._s(e.$t("electronicFence.seconds")))])],2)],1),e._v(" "),i("el-form-item",{attrs:{label:e.$t("electronicFence.zone_effective_time"),prop:"effectTime"}},[i("el-radio-group",{attrs:{size:e.elNorms.size},model:{value:e.ruleForm.effectTime,callback:function(t){e.$set(e.ruleForm,"effectTime",t)},expression:"ruleForm.effectTime"}},[i("el-radio",{attrs:{label:0}},[e._v(" "+e._s(e.$t("electronicFence.permanent_valid"))+" ")]),e._v(" "),i("el-radio",{attrs:{label:1}},[e._v(" "+e._s(e.$t("electronicFence.time_period"))+" ")]),e._v(" "),i("el-radio",{attrs:{label:2}},[e._v(" "+e._s(e.$t("electronicFence.every_day"))+" ")])],1)],1),e._v(" "),i("el-form-item",{attrs:{label:e.$t("electronicFence.start_time"),prop:"startTime"}},[i("el-date-picker",{staticClass:"input-width",attrs:{size:e.elNorms.size,"value-format":"yyyy-MM-dd HH:mm:ss",type:"datetime",placeholder:""},model:{value:e.ruleForm.startTime,callback:function(t){e.$set(e.ruleForm,"startTime",t)},expression:"ruleForm.startTime"}})],1),e._v(" "),i("el-form-item",{attrs:{label:e.$t("electronicFence.end_time"),prop:"endTime"}},[i("el-date-picker",{staticClass:"input-width",attrs:{size:e.elNorms.size,"value-format":"yyyy-MM-dd HH:mm:ss","default-time":"23:59:59",type:"datetime",placeholder:""},on:{change:e.endTime},model:{value:e.ruleForm.endTime,callback:function(t){e.$set(e.ruleForm,"endTime",t)},expression:"ruleForm.endTime"}})],1),e._v(" "),i("el-form-item",{attrs:{label:e.$t("electronicFence.gatewayCommunications"),prop:"communication"}},[i("el-radio-group",{attrs:{size:e.elNorms.size},model:{value:e.ruleForm.communication,callback:function(t){e.$set(e.ruleForm,"communication",t)},expression:"ruleForm.communication"}},[i("el-radio",{attrs:{label:0}},[e._v(" "+e._s(e.$t("electronicFence.no"))+" ")]),e._v(" "),i("el-radio",{attrs:{label:1}},[e._v(e._s(e.$t("electronicFence.yes")))])],1)],1),e._v(" "),i("el-form-item",{attrs:{label:e.$t("electronicFence.cnss"),prop:"collectCnss"}},[i("el-radio-group",{attrs:{size:e.elNorms.size},model:{value:e.ruleForm.collectCnss,callback:function(t){e.$set(e.ruleForm,"collectCnss",t)},expression:"ruleForm.collectCnss"}},[i("el-radio",{attrs:{label:1}},[e._v(" "+e._s(e.$t("electronicFence.no"))+" ")]),e._v(" "),i("el-radio",{attrs:{label:0}},[e._v(e._s(e.$t("electronicFence.yes")))])],1)],1)],1)],1)]):e._e(),e._v(" "),i("div",{staticClass:"footBtn",staticStyle:{width:"700px"}},[i("el-button",{attrs:{type:"primary",size:e.elNorms.size,round:e.elNorms.round,circle:e.elNorms.circle},on:{click:e.tablesFn}},[e._v(e._s(e.$t("operateCommon.ok")))]),e._v(" "),i("el-button",{attrs:{size:e.elNorms.size,round:e.elNorms.round,circle:e.elNorms.circle},on:{click:function(t){e.tableplay=!1}}},[e._v(e._s(e.$t("operateCommon.cancel")))])],1)])],1)},[],!1,null,"eea112ea",null);T.options.__file="region.vue";t.default=T.exports}}]);