(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-78bc","YelX","YelX","YelX"],{"/aYH":function(e,t,i){e.exports=i.p+"static/img/vehicle_pic_biaozhu_L-1.73edc78.png"},"1EGo":function(e,t,i){e.exports=i.p+"static/img/vehicle_icon_biaozhu_c.5dbc68e.png"},"1V5b":function(e,t,i){"use strict";var a=i("gjL5");i.n(a).a},"59wn":function(e,t,i){e.exports=i.p+"static/img/vehicle_pic_biaozhu_hong.c2605f2.png"},"5caA":function(e,t,i){e.exports=i.p+"static/img/vehicle_pic_biaozhu_l.cce8e63.png"},ETiy:function(e,t,i){e.exports=i.p+"static/img/vehicle_pic_biaozhu_lan.9aecd4d.png"},EUoD:function(e,t,i){"use strict";i.r(t);var a=i("omC7"),n=i.n(a),o=i("bS4n"),s=i.n(o),c=i("8t5x"),r=i("ABCu"),l=i("kDn8"),d=i("AlM9"),p=i("EXUM"),u=i("YelX"),m=i("1EGo"),h=i.n(m),f=i("RCyq"),g=i.n(f),y=i("LpoB"),b=i.n(y),v=i("kvP9"),_=i.n(v),x=i("GNt7"),$=i.n(x),C=i("59wn"),D=i.n(C),w=i("/aYH"),T=i.n(w),N=i("MrZo"),k=i.n(N),F=i("5caA"),I=i.n(F),S=i("ETiy"),L=i.n(S),M=i("d6xc"),O=i.n(M),E=i("ojTi"),z=i.n(E),A={name:"VehicleAdminister",components:{treeView:r.a,dialogDesign:l.a,TableView:d.a,bdMap:p.default},mixins:[u.default],data:function(){return{icons:[{icon:h.a,index:0},{icon:b.a,index:1},{icon:$.a,index:2},{icon:T.a,index:3},{icon:I.a,index:4},{icon:O.a,index:5},{icon:g.a,index:6},{icon:_.a,index:7},{icon:D.a,index:8},{icon:k.a,index:9},{icon:L.a,index:10},{icon:z.a,index:11}],widthNum:0,show:!1,viewLeft:!1,company:[],dialogDisplay:!1,alias:{pageSize:"pageSize",pageNum:"pageNum"},fieldMap:{},activeMenu:{typeId:null,name:""},typeTitle:this.$t("electronicFence.label_name"),typeId:null,isTree:!0,labelId:null,filterText:"",resTreeData:null,resetData:{parentId:"parentId",value:"typeId",label:"typeName",children:"opEfTypeNodes"},resetMenu:[],resetMenus:[],treeData:{extendData:{},checkOriginName:"",treeQuery:{type:"get",action:"/ef/type/treeList/0",list:null},defaultProps:{children:"opEfTypeNodes",label:"typeName",isLeaf:"lezy",disabled:"disabled"},nodeKey:"typeId",currentNodeKey:1,defaultExpandAll:!0,expandClickNode:!1,indent:16,screenFn:{bindFn:function(e,t){return!e||-1!==t.typeName.indexOf(e)}},draggable:{isDraggable:!1,allowDrap:function(e,t,i){return!0},allowDrop:function(e,t,i){return e.data.type===t.data.type?"inner"!==i:(1!==e.data.type||0!==t.data.type)&&(0!==e.data.type||1!==t.data.type)}}},params:{},tableOptions:{data:[],total:0,columns:[{type:"slot",name:"number",title:this.$t("electronicFence.sequence_number")},{title:this.$t("electronicFence.icon"),type:"slot",name:"icon"},{title:this.$t("electronicFence.label_name"),type:"text",minWidth:"130",key:"labelName"},{title:this.$t("electronicFence.subordinate_classification"),key:"typeName",minWidth:"130",type:"text"},{title:this.$t("electronicFence.region"),key:"region",minWidth:"130",type:"text"},{title:this.$t("electronicFence.belong_company"),key:"companyName",minWidth:"150",type:"text"},{title:this.$t("electronicFence.create_time"),key:"createTime",minWidth:"220",type:"text"},{title:this.$t("operation.operation"),key:"operate",type:"operate",fixed:"right",width:"150",buttons:[],mode:"default",dropdownType:"primary"}],buttonControls:[],searchControls:[{type:"input",key:"labelName",placeholder:this.$t("electronicFence.label_name"),width:"200px",size:"small"},{type:"input",key:"region",placeholder:this.$t("electronicFence.region"),width:"200px",size:"small"},{type:"select",key:"companyId",placeholder:this.$t("electronicFence.belong_company"),width:"200px",size:"small",filterable:!0,clearable:!0,options:[{name:this.$t("electronicFence.none"),value:0}]}],searchMode:"immediate",footerButtons:[],paginationLayout:"total, sizes, prev, pager, next, jumper",loading:!1},isTaggingExist:!1}},computed:s()({},Object(c.b)(["elNorms"]),{categoryManagementPermission:function(){return this.isPermissionShow("typeCreate")||this.isPermissionShow("typeUpdate")||this.isPermissionShow("typeDelete")}}),watch:{filterText:function(e){this.$refs.tree.$refs.sonTree.filter(e)},show:function(e){this.$emit("mapSwitchFn",e)}},created:function(){this.getCompanyDataFn()},mounted:function(){},methods:{handlePermissionShow:function(){this.tableOptions.buttonControls=[],this.isPermissionShow("labelCreate")&&this.tableOptions.buttonControls.push({text:this.$t("electronicFence.add_label"),size:"mini",round:!1,icon:"el-icon-plus",funcName:"addVehicle"}),this.isPermissionShow("labelExport")&&this.tableOptions.buttonControls.push({text:this.$t("operation.export_record"),size:"mini",type:"null",round:!1,icon:"el-icon-download",funcName:"exportRecord"}),this.tableOptions.footerButtons=[],this.isPermissionShow("labelUpdate")&&this.tableOptions.footerButtons.push({text:this.$t("electronicFence.move"),type:"",size:"mini",icon:"el-icon-remove-outline",round:!1,funcName:"move"}),this.isPermissionShow("labelDelete")&&this.tableOptions.footerButtons.push({text:this.$t("operateCommon.delete"),type:"danger",size:"mini",icon:"el-icon-delete",round:!1,funcName:"delete"});var e=this.tableOptions.columns.findIndex(function(e){return"operate"===e.key});this.tableOptions.columns[e].buttons=[],e>-1&&this.isPermissionShow("labelList")&&this.tableOptions.columns[e].buttons.push({tipText:this.$t("electronicFence.details"),size:"mini",type:"text",icon:"iconfont Jamin_vehicle_icon_chakan",funcName:"details"}),e>-1&&this.isPermissionShow("labelUpdate")&&this.tableOptions.columns[e].buttons.push({tipText:this.$t("operation.edit"),size:"mini",type:"text",icon:"iconfont Jamin_vehicle_icon_bj",funcName:"edit"})},addVehicle:function(){this.show=!0,this.$refs.bdmap.addVehicle()},edit:function(e){this.show=!0,this.$refs.bdmap.edit(e)},details:function(e){this.show=!0,this.$refs.bdmap.details(e)},diaClose:function(e){var t=this;this.treeData.currentNodeKey=this.activeMenu.typeId,e&&(this.isTree=!1,this.$nextTick(function(){t.isTree=!0})),this.dialogDisplay=!1},dialogCallback:function(e,t,i){this[e.handlerCallback.funcName].call(function(){},e,t,i)},addMenu:function(e){var t=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;"click"===e.type&&(e={}),-1===this.resetMenus[0].value&&(this.resetMenu=JSON.parse(n()(this.resetMenus)).splice(-1,1),this.$set(this.resetMenu[0],"value",0)),this.dialogData={staticData:{parentId:"mainNew"===i?null:e.typeId?e.typeId:0},isClickClose:!1,isDialogDisplay:!0,title:this.$t("electronicFence.add_Category"),data:{},defaultData:{fenceType:0},mainWidth:"500",titleWidth:"100",submitAction:"/ef/type/create",btnAlign:"center",formList:[{title:this.$t("electronicFence.superior_category"),type:"cascader",labelWidth:"100",offsetWidth:"320",key:"parentId",props:{checkStrictly:!0,emitPath:!1},options:{type:"default",list:this.resetMenu},handlerCallback:{target:"changeFunction",funcName:"cascaderChange"},rules:[{required:!0,message:this.$t("electronicFence.select_superior_category"),trigger:"change"}]},{title:this.$t("electronicFence.category_name"),type:"input",offsetWidth:"320",key:"typeName",rules:[{required:!0,message:this.$t("electronicFence.enter_category_name"),trigger:"blur"}]}],message:{message:this.$t("electronicFence.category_added_successfully"),type:"success"},formButton:[{name:this.$t("electronicFence.submit"),type:"confirm",class:"primary",round:!1},{name:this.$t("confirm.cancel"),type:"cancel",class:"",round:!1}],confirmSubmitFn:function(e,i){var a=!1;t.dialogData.submitAction="/ef/type/create",function t(i){for(var n=0;n<i.length;n++){if(null===i[n].typeId&&0===e.parentId||i[n].typeId===e.parentId){a=i[n].opEfTypeNodes.some(function(t){return t.typeName===e.typeName});break}i[n].opEfTypeNodes&&i[n].opEfTypeNodes.length>0&&t(i[n].opEfTypeNodes)}}(t.resTreeData),a&&(t.dialogData.submitAction=!1,t.$message.warning(t.$t("electronicFence.category_name_exists")))}},this.dialogDisplay=!0},editMenu:function(e){-1===this.resetMenus[0].value&&(this.resetMenu=JSON.parse(n()(this.resetMenus)).splice(-1,1),this.$set(this.resetMenu[0],"value",0)),delete e.list,this.dialogData={isClickClose:!1,staticData:e,isDialogDisplay:!0,title:this.$t("electronicFence.edit_categories"),data:{},defaultData:{fenceType:0},mainWidth:"500",titleWidth:"100",submitAction:"/ef/type/update/"+e.typeId,btnAlign:"center",formList:[{title:this.$t("electronicFence.superior_category"),type:"cascader",labelWidth:"100",offsetWidth:"320",key:"parentId",props:{checkStrictly:!0,emitPath:!1},options:{type:"default",list:this.resetMenu},handlerCallback:{target:"changeFunction",funcName:"cascaderChange"},rules:[{required:!0,message:this.$t("electronicFence.select_superior_category"),trigger:"change"}]},{title:this.$t("electronicFence.category_name"),type:"input",offsetWidth:"320",key:"typeName",rules:[{required:!0,message:this.$t("electronicFence.enter_category_name"),trigger:"blur"}]}],message:{message:this.$t("electronicFence.category_edit_successful"),type:"success"},formButton:[{name:this.$t("electronicFence.submit"),type:"confirm",class:"primary",round:!1},{name:this.$t("confirm.cancel"),type:"cancel",class:"",round:!1}]},this.dialogDisplay=!0},handleCommand:function(e){this[e.funcName].call(function(){},e.data,e.node,e.funcName)},removeTree:function(e){var t=this;this.$confirm(this.$t("electronicFence.delete_text_tip"),this.$t("operateCommon.prompt"),{confirmButtonText:this.$t("operateCommon.ok"),cancelButtonText:this.$t("operateCommon.cancel"),type:"warning"}).then(function(){t.$http.get("/ef/type/delete/"+e.typeId).then(function(e){e.code===t.$config.API_STATUS.OK&&(t.$message({type:"success",message:t.$t("electronicFence.delete_successfully")}),t.isTree=!1,t.$nextTick(function(){t.isTree=!0}))})}).catch(function(){t.$message({type:"info",message:t.$t("electronicFence.deleted_canceled")})})},getTreeData:function(e){var t=JSON.parse(n()(e));t.unshift({typeName:this.$t("electronicFence.none"),typeId:-1,parentId:0}),this.resTreeData=e,this.resetDataFn(t,!1),this.$refs.table.initRequestTableData()},nodeClick:function(e,t){e.children&&e.children.length||(this.activeMenu={typeId:e.typeId,name:e.typeName},this.parentId=e.parentId),this.typeId=e.typeId,this.$refs.table.initRequestTableData()},getCompanyDataFn:function(){var e=this;this.$http.get("/company/treeList/electronicFence").then(function(t){t.code===e.$config.API_STATUS.OK&&(e.company=t.data)}),this.$http.post("/company/electronicFence/list/all").then(function(t){if(t.code===e.$config.API_STATUS.OK){var i=t.data.list.map(function(e){return{label:e.name,name:e.name,value:e.companyId}});e.tableOptions.searchControls[2].options=i}})},getTableData:function(e){var t=this;this.tableOptions.loading=!0;var i={typeId:this.typeId,region:e.region,labelName:e.labelName,companyId:e.companyId};this.$http.post("/label/list?pageNum="+e.pageNum+"&pageSize="+e.pageSize,i).then(function(e){e.code===t.$config.API_STATUS.OK&&(t.tableOptions.loading=!1,t.tableOptions.data=e.data.list,t.tableOptions.total=e.data.total)})},tableResponseFn:function(e,t,i){this[t.funcName].call(function(){},e,t,i)},move:function(e){var t=[];e.forEach(function(e,i){t[i]=e.labelId}),-1===this.resetMenus[0].value&&(this.resetMenu=JSON.parse(n()(this.resetMenus)).splice(-1,1)),this.dialogData={isClickClose:!1,staticData:"",isDialogDisplay:!0,title:this.$t("electronicFence.adjust_classification"),data:{},defaultData:{ids:t.join(",")},methods:"deleteApi",mainWidth:"500",titleWidth:"100",submitAction:"/label/update",btnAlign:"center",formList:[{title:this.$t("electronicFence.superior_category"),type:"cascader",labelWidth:"100",offsetWidth:"320",key:"typeId",props:{checkStrictly:!0,emitPath:!1},options:{type:"default",list:this.resetMenu},handlerCallback:{target:"changeFunction",funcName:"cascaderChange"},rules:[{required:!0,message:this.$t("electronicFence.select_category"),trigger:"change"}]}],message:{message:this.$t("electronicFence.adjustment_succeeded"),type:"success"},formButton:[{name:this.$t("electronicFence.submit"),type:"confirm",class:"primary",round:!1},{name:this.$t("confirm.cancel"),type:"cancel",class:"",round:!1}]},this.dialogDisplay=!0},delete:function(e){var t=this;this.$confirm(this.$t("confirm.del"),this.$t("confirm.title"),{confirmButtonText:this.$t("operateCommon.ok"),cancelButtonText:this.$t("operateCommon.cancel"),type:"warning"}).then(function(){var i=[];e.forEach(function(e,t){i[t]=e.labelId}),t.$http.deleteApi("/label/delete",{ids:i.join(",")}).then(function(e){e.code===t.$config.API_STATUS.OK&&(t.$refs.table.initRequestTableData(),t.$message({message:e.message,type:"success"}))})})},resetDataFn:function(e){var t=this,i=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(this.resetData){var a=[];if(e.forEach(function(e){var i=t.initJSON(t.resetData,e);a.push(i)}),!0===i)return a;this.resetMenus=a}},initJSON:function(e,t){var i={};for(var a in e)if("children"===a&&t[e[a]]&&t[e[a]].length>0){var n=this.resetDataFn(t[e[a]],!0);i[a]=n}else"children"!==a&&(i[a]=t[e[a]]);return i},disabledData:function(e){this.resetMenus.forEach(function(t){0===e&&t.children&&t.children.length>0&&(t.disabled=!0),t.children&&t.children.length>0&&t.children.forEach(function(t){1===e&&(t.disabled=!1)})})},nodeDragEnd:function(e,t,i){var a=this;this.$http.post("/sys/menu/sort",{motorcadeId:e.data.motorcadeId,targetId:t.data.motorcadeId,moveType:i}).then(function(e){e.code,a.$config.API_STATUS,a.isTree=!1,a.$nextTick(function(){a.isTree=!0})}).catch(function(){a.isTree=!1,a.$nextTick(function(){a.isTree=!0})})},cascaderChange:function(e,t,i){null===t&&(t=0),this.$refs._dialog.dialogData.defaultData.parentId=-1===t?0:t,this.$refs._dialog.dialogData.defaultData.fenceType=0,"0"===t&&(this.$refs._dialog.dialogData.defaultData={type:0})},exportRecord:function(){var e=this;this.$confirm(this.$t("operateCommon.confirm_export_record"),this.$t("operateCommon.prompt"),{confirmButtonText:this.$t("operateCommon.ok"),cancelButtonText:this.$t("operateCommon.cancel"),type:"warning",closeOnClickModal:!1,beforeClose:function(t,i,a){if(e.fieldMap={},e.tableOptions.columns.forEach(function(t){e.$refs.table.columnCheckList.forEach(function(i){t.key===i&&"operate"!==t.key&&(e.fieldMap[i]=t.title)})}),"confirm"===t){var n=e.$refs.table._data.searchParams,o=n.labelName,s=n.region,c=n.companyId,r={fieldMap:e.fieldMap,labelName:o,region:s,companyId:c,typeId:e.typeId};e.$http.download("/label/export?isToken=true",r),a()}else a()}}).catch(function(){})},verificationLabelName:function(e,t,i){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;this.isTaggingExist="edit"===a?(this.tableOptions.data||[]).some(function(a){return e===a.typeId&&t!==a.labelId&&i===a.labelName}):(this.tableOptions.data||[]).some(function(t){return e===t.typeId&&i===t.labelName})}}},P=(i("1V5b"),i("ZrdR")),U=Object(P.a)(A,function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"table"},[i("div",{staticClass:"page-body"},[i("div",{staticClass:"con-left"},[i("div",{staticClass:"input-query"},[i("el-input",{attrs:{size:e.elNorms.size,placeholder:e.$t("electronicFence.search_category_name"),"prefix-icon":"el-icon-search"},model:{value:e.filterText,callback:function(t){e.filterText="string"==typeof t?t.trim():t},expression:"filterText"}}),e._v(" "),e.isPermissionShow("typeCreate")?i("el-button",{staticStyle:{width:"80px","margin-left":"4px"},attrs:{size:e.elNorms.size,circle:e.elNorms.circle,round:e.elNorms.round},on:{click:function(t){e.addMenu(t,"mainNew")}}},[e._v(e._s(e.$t("electronicFence.new_category")))]):e._e()],1),e._v(" "),i("div",{staticClass:"body-tree init-tree"},[e.isTree?i("tree-view",{ref:"tree",attrs:{"tree-data":e.treeData},on:{treeDataFn:e.getTreeData,"node-click":e.nodeClick,"node-drag-end":e.nodeDragEnd},scopedSlots:e._u([{key:"default",fn:function(t){return[i("span",{staticClass:"left-title text-ellipsis",style:t.data.data.typeId===e.activeMenu.typeId?"color: var(--main-primary);":""},[i("i",{staticClass:"iconfont Jamin_vehicle_icon_xiaowenjian"}),e._v("\n              "+e._s(t.data.data.typeName)+"\n            ")]),e._v(" "),i("span",{staticClass:"right-edit"},[i("span",[i("el-dropdown",{on:{command:e.handleCommand}},[i("span",{staticClass:"el-dropdown-link"},[e.categoryManagementPermission?i("i",{staticClass:"el-icon-more"}):e._e()]),e._v(" "),i("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[e.isPermissionShow("typeCreate")?i("el-dropdown-item",{attrs:{command:{data:t.data.data,node:t.data.node,funcName:"addMenu"}}},[e._v(e._s(e.$t("electronicFence.add_subcategory")))]):e._e(),e._v(" "),null!==t.data.data.typeId&&e.isPermissionShow("typeUpdate")?i("el-dropdown-item",{attrs:{command:{data:t.data.data,node:t.data.node,funcName:"editMenu"}}},[e._v(e._s(e.$t("electronicFence.edit_categories")))]):e._e(),e._v(" "),null!==t.data.data.typeId&&e.isPermissionShow("typeDelete")?i("el-dropdown-item",{attrs:{command:{data:t.data.data,node:t.data.node,funcName:"removeTree"}}},[e._v(e._s(e.$t("electronicFence.delete_category")))]):e._e()],1)],1)],1)])]}}])}):e._e()],1)]),e._v(" "),i("div",{staticClass:"con-right"},[i("transition",{attrs:{name:"opacity"}},[i("div",{staticClass:"opacity_table"},[i("table-view",{ref:"table",attrs:{center:"","id-key":"labelId","is-search":!0,"check-memory":!0,data:e.tableOptions.data,total:e.tableOptions.total,columns:e.tableOptions.columns,"search-controls":e.tableOptions.searchControls,"footer-buttons":e.tableOptions.footerButtons,"button-controls":e.tableOptions.buttonControls,"pagination-layout":e.tableOptions.paginationLayout,loading:e.tableOptions.loading,checked:"","column-view":"","is-border":"",alias:e.alias},on:{requestTableData:e.getTableData,handleCallback:e.tableResponseFn}},[i("el-table-column",{attrs:{slot:"number",label:e.$t("view.index"),type:"index",align:"center"},slot:"number"}),e._v(" "),i("el-table-column",{attrs:{slot:"icon",label:e.$t("electronicFence.icon"),align:"center",width:"80"},slot:"icon",scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.icon||0===t.row.icon?i("img",{attrs:{src:e.icons[t.row.icon].icon,alt:""}}):e._e()]}}])})],1)],1)])],1)]),e._v(" "),i("transition",{attrs:{name:"el-zoom-in-bottom"}},[i("bd-map",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}],ref:"bdmap",staticClass:"mapShow left-control control-view",class:{leftActive:e.viewLeft},attrs:{"reset-menus":e.resetMenus,company:e.company,icons:e.icons,"view-left":e.viewLeft,"type-title":e.typeTitle,"is-tagging-exist":e.isTaggingExist,"is-show-form":!0},on:{verificationLabelName:e.verificationLabelName}})],1),e._v(" "),e.dialogDisplay?i("dialog-design",{ref:"_dialog",attrs:{size:"mini",color:"warning","dialog-data":e.dialogData},on:{diaClose:e.diaClose,handlerCallback:e.dialogCallback}}):e._e()],1)},[],!1,null,"5198a07f",null);U.options.__file="tagging.vue";t.default=U.exports},LpoB:function(e,t,i){e.exports=i.p+"static/img/vehicle_pic_biaozhu_f.e84ec01.png"},MrZo:function(e,t,i){e.exports=i.p+"static/img/vehicle_pic_biaozhu_lv.b165b1c.png"},RCyq:function(e,t,i){e.exports=i.p+"static/img/vehicle_pic_biaozhu_cheng.866581b.png"},YelX:function(e,t,i){"use strict";i.r(t);var a=i("bS4n"),n=i.n(a),o=i("8t5x");t.default={data:function(){return{permissionList:{vehicleUpdate:"/vehicle/update/**",vehicleExport:"/vehicle/export",vehicleDelete:"/vehicle/delete",vehicleList:"/vehicle/list",vehicleCreate:"/vehicle/create",vehicleFastCreate:"/vehicle/fastCreate",vehicleMotorcadeCreate:"/vehicle/motorcade/create",vehicleMotorcadeUpdate:"/vehicle/motorcade/update",vehicleMotorcadeDelete:"/vehicle/motorcade/delete/**",companyList:"/company/list",companyCreate:"/company/create",companyExport:"/company/export",companyDetail:"/company/**",companyUpdate:"/company/update/**",companyPersonalization:"/company/personalization/**",companyDelete:"/company/delete",driverList:"/driver/list",driverCreate:"/driver/create",driverDetail:"/driver/get/**",driverUpdate:"/driver/update/**",driverDelete:"/driver/delete",driverExport:"/driver/export",labelList:"/label/list",labelCreate:"/label/create",labelUpdate:"/label/update/**",labelDelete:"/label/delete",labelExport:"/label/export",regionList:"/region/list",regionCreate:"/region/create",regionUpdate:"/region/update/**",regionDelete:"/region/delete",regionExport:"/region/export",routeList:"/route/list",routeCreate:"/route/create",routeUpdate:"/route/update/**",routeDelete:"/route/delete",routeExport:"/route/export",adminList:"/admin/list",adminCreate:"/admin/create",adminUpdate:"/admin/update/**",adminDelete:"/admin/delete",adminExport:"/admin/export",typeCreate:"/ef/type/create",typeUpdate:"/ef/type/update/**",typeDelete:"/ef/type/delete/**",drivingLicenseList:"/driving/license/list",drivingLicenseCreate:"/driving/license/create",drivingLicenseUpdate:"/driving/license/update/**",drivingLicenseDelete:"/driving/license/delete",drivingLicense:"/driving/license/export",transportList:"/transport/list",transportCreate:"/transport/create",transportUpdate:"/transport/update/**",transportDelete:"/transport/delete",transportExport:"/transport/export",maintainList:"/maintain/list",maintainCreate:"/maintain/create",maintainUpdate:"/maintain/update/**",maintainDelete:"/maintain/delete",maintainExport:"/maintain/export",insuranceList:"/insurance/list",insuranceCreate:"/insurance/create",insuranceUpdate:"/insurance/update/**",insuranceDelete:"/insurance/delete",insuranceExport:"/insurance/export",insuranceListAdvance:"/insurance/list/advance",annualList:"/annual/list",annualCreate:"/annual/create",annualUpdate:"/annual/update/**",annualDelete:"/annual/delete",annualExport:"/annual/export",annualListAdvance:"/annual/list/advance",repairList:"/repair/list",repairCreate:"/repair/create",repairUpdate:"/repair/update/**",repairDelete:"/repair/delete",repairExport:"/repair/export",accidentList:"/accident/list",accidentCreate:"/accident/create",accidentUpdate:"/accident/update/**",accidentDelete:"/accident/delete",accidentExport:"/accident/export",simList:"/sim/list",simCreate:"/sim/create",simUpdate:"/sim/update/**",simDelete:"/sim/delete",simExport:"/sim/export"}}},computed:n()({},Object(o.b)(["permsData"]),{isAdministrator:function(){return[-1,-2].includes(Number(this.$store.getters.userData.userType))}}),watch:{permsData:{handler:function(){this.handlePermissionShow&&this.handlePermissionShow()},immediate:!0}},methods:{isPermissionShow:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return!!this.isAdministrator||this.permsData.includes(this.permissionList[e])}}}},d6xc:function(e,t,i){e.exports=i.p+"static/img/vehicle_pic_biaozhu_z.6873d9e.png"},gjL5:function(e,t,i){},kvP9:function(e,t,i){e.exports=i.p+"static/img/vehicle_pic_biaozhu_feng.06ccffd.png"},ojTi:function(e,t,i){e.exports=i.p+"static/img/vehicle_pic_biaozhu_zi.e58d8fb.png"}}]);