(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-9c30"],{"/aYH":function(e,t,a){e.exports=a.p+"static/img/vehicle_pic_biaozhu_L-1.73edc78.png"},"1EGo":function(e,t,a){e.exports=a.p+"static/img/vehicle_icon_biaozhu_c.5dbc68e.png"},"59wn":function(e,t,a){e.exports=a.p+"static/img/vehicle_pic_biaozhu_hong.c2605f2.png"},"5caA":function(e,t,a){e.exports=a.p+"static/img/vehicle_pic_biaozhu_l.cce8e63.png"},ETiy:function(e,t,a){e.exports=a.p+"static/img/vehicle_pic_biaozhu_lan.9aecd4d.png"},EUoD:function(e,t,a){"use strict";a.r(t);var i=a("omC7"),n=a.n(i),o=a("bS4n"),s=a.n(o),l=a("8t5x"),c=a("ABCu"),r=a("kDn8"),d=a("AlM9"),p=a("EXUM"),u=a("1EGo"),m=a.n(u),f=a("RCyq"),h=a.n(f),g=a("LpoB"),y=a.n(g),b=a("kvP9"),v=a.n(b),x=a("GNt7"),_=a.n(x),T=a("59wn"),w=a.n(T),D=a("/aYH"),N=a.n(D),k=a("MrZo"),C=a.n(k),I=a("5caA"),$=a.n(I),z=a("ETiy"),M=a.n(z),O=a("d6xc"),S=a.n(O),A=a("ojTi"),E=a.n(A),W={name:"VehicleAdminister",components:{treeView:c.a,dialogDesign:r.a,TableView:d.a,bdMap:p.default},data:function(){return{icons:[{icon:m.a,index:0},{icon:y.a,index:1},{icon:_.a,index:2},{icon:N.a,index:3},{icon:$.a,index:4},{icon:S.a,index:5},{icon:h.a,index:6},{icon:v.a,index:7},{icon:w.a,index:8},{icon:C.a,index:9},{icon:M.a,index:10},{icon:E.a,index:11}],widthNum:0,show:!1,viewLeft:!1,company:[],dialogDisplay:!1,alias:{pageSize:"pageSize",pageNum:"pageNum"},fieldMap:{},activeMenu:{typeId:null,name:""},typeTitle:"标注名称",typeId:null,isTree:!0,labelId:null,filterText:"",resTreeData:null,resetData:{parentId:"parentId",value:"typeId",label:"typeName",children:"opEfTypeNodes"},resetMenu:[],resetMenus:[],treeData:{extendData:{},checkOriginName:"",treeQuery:{type:"get",action:"/ef/type/treeList/0",list:null},defaultProps:{children:"opEfTypeNodes",label:"typeName",isLeaf:"lezy",disabled:"disabled"},emptyText:"暂无数据",nodeKey:"typeId",currentNodeKey:1,defaultExpandAll:!0,expandClickNode:!1,indent:16,screenFn:{bindFn:function(e,t){return!e||-1!==t.typeName.indexOf(e)}},draggable:{isDraggable:!1,allowDrap:function(e,t,a){return!0},allowDrop:function(e,t,a){return e.data.type===t.data.type?"inner"!==a:(1!==e.data.type||0!==t.data.type)&&(0!==e.data.type||1!==t.data.type)}}},params:{},tableOptions:{data:[],total:0,columns:[{type:"slot",name:"number",title:"序号"},{title:"图标",type:"slot",name:"icon"},{title:"标注名称",type:"text",minWidth:"130",key:"labelName"},{title:"所属分类",key:"typeName",minWidth:"130",type:"text"},{title:"所在区域",key:"region",minWidth:"130",type:"text"},{title:"所属公司",key:"companyName",minWidth:"150",type:"text"},{title:"创建时间",key:"createTime",minWidth:"220",type:"text"},{title:"操作",key:"operate",type:"operate",fixed:"right",width:"150",buttons:[{size:"mini",type:"text",icon:"iconfont Jamin_vehicle_ico_xq",funcName:"details"},{size:"mini",type:"text",icon:"iconfont Jamin_vehicle_icon_bj",funcName:"edit"}],mode:"default",dropdownType:"primary"}],buttonControls:[{text:"添加标注",size:"mini",round:!1,icon:"el-icon-plus",funcName:"addVehicle"},{text:"导出记录",size:"mini",type:"null",round:!1,icon:"el-icon-download",funcName:"exportRecord"}],searchControls:[{type:"input",key:"labelName",placeholder:"标注名称",width:"200px",size:"small"},{type:"input",key:"region",placeholder:"所在区域",width:"200px",size:"small"},{type:"select",key:"companyId",placeholder:"所属公司",width:"200px",size:"small",filterable:!0,clearable:!0,options:[{name:"无",value:0}]}],searchMode:"immediate",footerButtons:[{text:"移动",type:"",size:"mini",icon:"el-icon-remove-outline",round:!1,funcName:"move"},{text:"删除",type:"danger",size:"mini",icon:"el-icon-delete",round:!1,funcName:"delete"}],paginationLayout:"total, sizes, prev, pager, next, jumper",loading:!1}}},computed:s()({},Object(l.b)(["elNorms"])),watch:{filterText:function(e){this.$refs.tree.$refs.sonTree.filter(e)}},created:function(){},mounted:function(){},methods:{addVehicle:function(){this.show=!0,this.$refs.bdmap.addVehicle()},edit:function(e){this.show=!0,this.$refs.bdmap.edit(e)},details:function(e){this.show=!0,this.$refs.bdmap.details(e)},diaClose:function(e){var t=this;this.treeData.currentNodeKey=this.activeMenu.typeId,e&&(this.isTree=!1,this.$nextTick(function(){t.isTree=!0})),this.dialogDisplay=!1},dialogCallback:function(e,t,a){this[e.handlerCallback.funcName].call(function(){},e,t,a)},addMenu:function(e){"click"===e.type&&(e={}),this.dialogData={staticData:{parentId:e.typeId},isClickClose:!1,isDialogDisplay:!0,title:"添加分类",data:{},defaultData:{fenceType:0},mainWidth:"500",titleWidth:"100",submitAction:"/ef/type/create",btnAlign:"center",formList:[{title:"上级分类",type:"cascader",labelWidth:"100",offsetWidth:"320",key:"parentId",props:{checkStrictly:!0,emitPath:!1},options:{type:"default",list:this.resetMenus},handlerCallback:{target:"changeFunction",funcName:"cascaderChange"},rules:[{required:!0,message:"请选择上级分类",trigger:"change"}]},{title:"分类名称",type:"input",offsetWidth:"320",key:"typeName",rules:[{required:!0,message:"请输入分类名称",trigger:"blur"}]}],message:{message:"分类添加成功！",type:"success"},formButton:[{name:"提交",type:"confirm",class:"primary",round:!1},{name:"取消",type:"cancel",class:"",round:!1}]},this.dialogDisplay=!0},editMenu:function(e){-1===this.resetMenus[0].value&&(this.resetMenu=JSON.parse(n()(this.resetMenus)).splice(-1,1)),delete e.list,this.dialogData={isClickClose:!1,staticData:e,isDialogDisplay:!0,title:"编辑分类",data:{},defaultData:{fenceType:0},mainWidth:"500",titleWidth:"100",submitAction:"/ef/type/update/"+e.typeId,btnAlign:"center",formList:[{title:"上级分类",type:"cascader",labelWidth:"100",offsetWidth:"320",key:"parentId",props:{checkStrictly:!0,emitPath:!1},options:{type:"default",list:this.resetMenu},handlerCallback:{target:"changeFunction",funcName:"cascaderChange"},rules:[{required:!0,message:"请选择上级分类",trigger:"change"}]},{title:"分类名称",type:"input",offsetWidth:"320",key:"typeName",rules:[{required:!0,message:"请输入分类名称",trigger:"blur"}]}],message:{message:"分类编辑成功！",type:"success"},formButton:[{name:"提交",type:"confirm",class:"primary",round:!1},{name:"取消",type:"cancel",class:"",round:!1}]},this.dialogDisplay=!0},handleCommand:function(e){this[e.funcName].call(function(){},e.data,e.node,e.funcName)},removeTree:function(e){var t=this;this.$confirm("此操作将永久删除, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){t.$http.get("/ef/type/delete/"+e.typeId).then(function(e){e.code===t.$config.API_STATUS.OK&&(t.$message({type:"success",message:"删除成功!"}),t.isTree=!1,t.$nextTick(function(){t.isTree=!0}))})}).catch(function(){t.$message({type:"info",message:"已取消删除"})})},getTreeData:function(e){var t=JSON.parse(n()(e));t.unshift({typeName:"无",typeId:-1,parentId:0}),this.resTreeData=e,this.resetDataFn(t,!1),this.$refs.table.emitRequestTableData()},nodeClick:function(e,t){e.children&&e.children.length||(this.activeMenu={typeId:e.typeId,name:e.typeName},this.parentId=e.parentId),this.typeId=e.typeId,this.$refs.table.emitRequestTableData()},getTableData:function(e){var t=this;this.tableOptions.loading=!0;var a={typeId:this.typeId,region:e.region,labelName:e.labelName,companyId:e.companyId};this.$http.post("/label/list?pageNum="+e.pageNum+"&pageSize="+e.pageSize,a).then(function(e){e.code===t.$config.API_STATUS.OK&&(t.tableOptions.loading=!1,t.tableOptions.data=e.data.list,e.data.total&&(t.tableOptions.total=e.data.total))}),this.$http.post("/company/list").then(function(e){e.code===t.$config.API_STATUS.OK&&(t.tableOptions.searchControls[2].options=[],e.data.list.forEach(function(e,a){t.tableOptions.searchControls[2].options[a]={name:e.name,value:e.companyId},t.company[a]={label:e.name,value:e.companyId}}))})},tableResponseFn:function(e,t,a){this[t.funcName].call(function(){},e,t,a)},move:function(e){var t=[];e.forEach(function(e,a){t[a]=e.labelId}),-1===this.resetMenus[0].value&&(this.resetMenu=JSON.parse(n()(this.resetMenus)).splice(-1,1)),this.dialogData={isClickClose:!1,staticData:"",isDialogDisplay:!0,title:"调整分类",data:{},defaultData:{ids:t.join(",")},methods:"deleteApi",mainWidth:"500",titleWidth:"100",submitAction:"/label/update",btnAlign:"center",formList:[{title:"上级分类",type:"cascader",labelWidth:"100",offsetWidth:"320",key:"typeId",props:{checkStrictly:!0,emitPath:!1},options:{type:"default",list:this.resetMenu},handlerCallback:{target:"changeFunction",funcName:"cascaderChange"},rules:[{required:!0,message:"请选择分类",trigger:"change"}]}],message:{message:"调整成功！",type:"success"},formButton:[{name:"提交",type:"confirm",class:"primary",round:!1},{name:"取消",type:"cancel",class:"",round:!1}]},this.dialogDisplay=!0},delete:function(e){var t=this;this.$confirm("是否删除?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){var a=[];e.forEach(function(e,t){a[t]=e.labelId}),t.$http.deleteApi("/label/delete",{ids:a.join(",")}).then(function(e){e.code===t.$config.API_STATUS.OK&&(t.$refs.table.emitRequestTableData(),t.$message({message:e.message,type:"success"}))})}).catch(function(){t.$message({type:"info",message:"已取消"})})},resetDataFn:function(e){var t=this,a=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(this.resetData){var i=[];if(e.forEach(function(e){var a=t.initJSON(t.resetData,e);i.push(a)}),!0===a)return i;this.resetMenus=i}},initJSON:function(e,t){var a={};for(var i in e)if("children"===i&&t[e[i]]&&t[e[i]].length>0){var n=this.resetDataFn(t[e[i]],!0);a[i]=n}else"children"!==i&&(a[i]=t[e[i]]);return a},disabledData:function(e){this.resetMenus.forEach(function(t){0===e&&t.children&&t.children.length>0&&(t.disabled=!0),t.children&&t.children.length>0&&t.children.forEach(function(t){1===e&&(t.disabled=!1)})})},nodeDragEnd:function(e,t,a){var i=this;this.$http.post("/sys/menu/sort",{motorcadeId:e.data.motorcadeId,targetId:t.data.motorcadeId,moveType:a}).then(function(e){e.code,i.$config.API_STATUS,i.isTree=!1,i.$nextTick(function(){i.isTree=!0})}).catch(function(e){i.isTree=!1,i.$nextTick(function(){i.isTree=!0})})},cascaderChange:function(e,t,a){null===t&&(t=0),this.$refs._dialog.dialogData.defaultData.parentId=-1===t?0:t,this.$refs._dialog.dialogData.defaultData.fenceType=0,"0"===t&&(this.$refs._dialog.dialogData.defaultData={type:0})},exportRecord:function(){var e=this;this.$confirm("确认导出记录?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",closeOnClickModal:!1,beforeClose:function(t,a,i){if(e.fieldMap={},e.tableOptions.columns.forEach(function(t){e.$refs.table.columnCheckList.forEach(function(a){t.key===a&&"operate"!==t.key&&(e.fieldMap[a]=t.title)})}),"confirm"===t){var n=e.$refs.table._data.searchParams,o=n.labelName,s=n.region,l=n.companyId,c={fieldMap:e.fieldMap,labelName:o,region:s,companyId:l};e.$http.download("/label/export?isToken=true",c).then(function(e){}),i()}else i()}}).catch(function(){})}}},B=(a("sHx5"),a("ZrdR")),L=Object(B.a)(W,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"table"},[a("div",{staticClass:"page-body"},[a("div",{staticClass:"con-left"},[a("div",{staticClass:"input-query"},[a("el-input",{staticStyle:{width:"170px","margin-right":"4px"},attrs:{size:e.elNorms.size,placeholder:"搜索分类名称","prefix-icon":"el-icon-search"},model:{value:e.filterText,callback:function(t){e.filterText="string"==typeof t?t.trim():t},expression:"filterText"}}),e._v(" "),a("el-button",{attrs:{size:e.elNorms.size,circle:e.elNorms.circle,round:e.elNorms.round},on:{click:e.addMenu}},[e._v("新增分类")])],1),e._v(" "),a("div",{staticClass:"body-tree init-tree"},[e.isTree?a("tree-view",{ref:"tree",attrs:{"tree-data":e.treeData},on:{treeDataFn:e.getTreeData,"node-click":e.nodeClick,"node-drag-end":e.nodeDragEnd},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",{staticClass:"left-title text-ellipsis",style:t.data.data.typeId===e.activeMenu.typeId?"color: var(--main-primary);":""},[a("i",{staticClass:"iconfont Jamin_vehicle_icon_xiaowenjian"}),e._v("\n              "+e._s(t.data.data.typeName)+"\n            ")]),e._v(" "),a("span",{staticClass:"right-edit"},[a("span",[a("el-dropdown",{on:{command:e.handleCommand}},[a("span",{staticClass:"el-dropdown-link"},[a("i",{directives:[{name:"show",rawName:"v-show",value:null!==t.data.data.typeId,expression:"scope.data.data.typeId !== null"}],staticClass:"el-icon-more"})]),e._v(" "),a("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[a("el-dropdown-item",{attrs:{command:{data:t.data.data,node:t.data.node,funcName:"addMenu"}}},[e._v("添加子分类")]),e._v(" "),a("el-dropdown-item",{attrs:{command:{data:t.data.data,node:t.data.node,funcName:"editMenu"}}},[e._v("编辑分类")]),e._v(" "),a("el-dropdown-item",{attrs:{command:{data:t.data.data,node:t.data.node,funcName:"removeTree"}}},[e._v("删除分类")])],1)],1)],1)])]}}])}):e._e()],1)]),e._v(" "),a("div",{staticClass:"con-right"},[a("transition",{attrs:{name:"opacity"}},[a("div",{staticClass:"opacity_table"},[a("table-view",{ref:"table",attrs:{stripe:"",center:"","id-key":"id","is-search":!0,data:e.tableOptions.data,total:e.tableOptions.total,columns:e.tableOptions.columns,"search-controls":e.tableOptions.searchControls,"footer-buttons":e.tableOptions.footerButtons,"button-controls":e.tableOptions.buttonControls,"pagination-layout":e.tableOptions.paginationLayout,loading:e.tableOptions.loading,checked:"","column-view":"","is-border":"",alias:e.alias},on:{requestTableData:e.getTableData,handleCallback:e.tableResponseFn}},[a("el-table-column",{attrs:{slot:"number",label:"序号",type:"index",align:"center"},slot:"number"}),e._v(" "),a("el-table-column",{attrs:{slot:"icon",label:"图标",align:"center",width:"130"},slot:"icon",scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.icon?a("img",{attrs:{src:e.icons[t.row.icon].icon,alt:""}}):e._e()]}}])})],1)],1)])],1),e._v(" "),a("transition",{attrs:{name:"el-zoom-in-bottom"}},[a("bd-map",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}],ref:"bdmap",staticClass:"mapShow  left-control control-view",class:{leftActive:e.viewLeft},attrs:{"reset-menus":e.resetMenus,company:e.company,icons:e.icons,"view-left":e.viewLeft,"type-title":e.typeTitle}})],1)],1),e._v(" "),e.dialogDisplay?a("dialog-design",{ref:"_dialog",attrs:{size:"mini",color:"warning","dialog-data":e.dialogData},on:{diaClose:e.diaClose,handlerCallback:e.dialogCallback}}):e._e()],1)},[],!1,null,"78eae49a",null);L.options.__file="tagging.vue";t.default=L.exports},GNt7:function(e,t,a){e.exports=a.p+"static/img/vehicle_pic_biaozhu_h.c6ebff2.png"},LpoB:function(e,t,a){e.exports=a.p+"static/img/vehicle_pic_biaozhu_f.e84ec01.png"},MrZo:function(e,t,a){e.exports=a.p+"static/img/vehicle_pic_biaozhu_lv.b165b1c.png"},RCyq:function(e,t,a){e.exports=a.p+"static/img/vehicle_pic_biaozhu_cheng.866581b.png"},d6xc:function(e,t,a){e.exports=a.p+"static/img/vehicle_pic_biaozhu_z.6873d9e.png"},kvP9:function(e,t,a){e.exports=a.p+"static/img/vehicle_pic_biaozhu_feng.06ccffd.png"},ojTi:function(e,t,a){e.exports=a.p+"static/img/vehicle_pic_biaozhu_zi.e58d8fb.png"},sHx5:function(e,t,a){"use strict";var i=a("xj5g");a.n(i).a},xj5g:function(e,t,a){}}]);