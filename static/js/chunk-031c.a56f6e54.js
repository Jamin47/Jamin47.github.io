(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-031c"],{KhAm:function(e,t,a){"use strict";var i=a("NsG1");a.n(i).a},NsG1:function(e,t,a){},tw9k:function(e,t,a){"use strict";a.r(t);var i=a("bS4n"),n=a.n(i),s=a("ABCu"),r=a("kDn8"),o=a("AlM9"),l=a("8t5x"),d={name:"MenuJurisdiction",components:{treeView:s.a,dialogDesign:r.a,TableView:o.a},data:function(){return{pageType:0,api:{addMenu:"/menu/create",editMenu:"/menu/update/",removeTree:"/menu/delete/",addRole:"/perm/create",editRole:"/perm/update",removeRole:"/perm/delete"},activeMenu:{menuId:null,name:null},menuId:1,parentId:0,isTree:!0,isTable:!0,filterText:"",resTreeData:null,resetData:{type:"type",value:"menuId",label:"name",children:"children"},resetMenus:[],treeData:{extendData:{},checkOriginName:"",treeQuery:{type:"get",action:"/menu/treeList",list:null},defaultProps:{children:"children",label:"name",isLeaf:"lezy",disabled:"disabled"},emptyText:"暂无数据",nodeKey:"menuId",currentNodeKey:1,defaultExpandAll:!0,expandClickNode:!1,indent:16,screenFn:{bindFn:function(e,t){return!e||-1!==t.name.indexOf(e)}},draggable:{isDraggable:!1,allowDrap:function(e,t,a){return!0},allowDrop:function(e,t,a){return e.data.type===t.data.type?"inner"!==a:(1!==e.data.type||0!==t.data.type)&&(0!==e.data.type||1!==t.data.type)}}},params:null,tableOptions:{data:[],total:0,columns:[{title:"权限名称",key:"permName",type:"text"},{title:"权限规则",key:"path",type:"text"},{title:"状态",type:"tag",key:"hidden",tags:[{value:1,text:"显示",option:{type:"success"}},{value:0,text:"隐藏",option:{type:"danger"}}]},{title:"操作",key:"operate",type:"operate",width:"250",buttons:[{text:"编辑",size:"mini",type:"text",funcName:"editRole"},{text:"删除",size:"mini",type:"text",funcName:"removeRole"}],mode:"default",dropdownType:"primary"}],buttonControls:[{text:"添加权限",size:"mini",round:!1,funcName:"addRole"}],searchControls:[],searchMode:"immediate",footerButtons:[{text:"显示",size:"mini",icon:"el-icon-circle-check",round:!1,funcName:"hiddenRole"},{text:"隐藏",type:"danger",size:"mini",icon:"el-icon-remove-outline",round:!1,funcName:"displayRole"},{text:"删除",type:"danger",size:"mini",icon:"el-icon-delete",round:!1,funcName:"removeRole"}],paginationLayout:"total, sizes, prev, pager, next, jumper",loading:!1},dialogDisplay:!1,dialogData:{staticData:null,isDialogDisplay:!0,title:"新增角色",data:"",defaultData:"",mainWidth:"500",titleWidth:"100",btnAlign:"center",formList:[{title:"角色名",type:"input",labelWidth:"100",offsetWidth:"320",key:"input",rules:[{required:!0,message:"请输入角色名",trigger:"blur"}]},{title:"角色组",type:"select",labelWidth:"100",offsetWidth:"320",key:"select",handlerCallback:{target:"blurFunction",funcName:"inputCallback"},options:{type:"default",list:[{name:"角色组一",value:1},{name:"角色组二",value:2},{name:"角色组三",value:3}]},rules:[{required:!0,message:"请选择选择角色组",trigger:"blur"}]},{title:"描述",type:"textarea",offsetWidth:"320",labelWidth:"100",key:"input2"}],formButton:[{name:"确定",type:"confirm",class:"warning",round:!1},{name:"取消",type:"cancel",class:"",round:!1}]}}},computed:n()({},Object(l.b)(["elNorms"])),watch:{filterText:function(e){this.$refs.tree.$refs.sonTree.filter(e)}},created:function(){},mounted:function(){},methods:{diaClose:function(e){var t=this;this.treeData.currentNodeKey=this.activeMenu.menuId,e&&(this.isTree=!1,this.$nextTick(function(){t.isTree=!0})),this.dialogDisplay=!1},dialogCallback:function(e,t,a){this[e.handlerCallback.funcName].call(function(){},e,t,a)},addMenu:function(e){"click"===e.type&&(e=null),this.resetDataFn(this.resTreeData,!1),this.disabledData(1),this.dialogData={isClickClose:!1,staticData:{type:1,status:1,parentId:null!==e&&e.menuId},isDialogDisplay:!0,title:"添加主菜单",data:{},defaultData:"",mainWidth:"500",titleWidth:"100",submitAction:this.api.addMenu,btnAlign:"center",formList:[{title:"上级菜单",type:"cascader",labelWidth:"100",offsetWidth:"320",key:"parentId",props:{checkStrictly:!0,emitPath:!1},options:{type:"default",list:this.resetMenus},rules:[{required:!0,message:"请选择上级菜单",trigger:"blur"}],handlerCallback:{target:"changeFunction",funcName:"cascaderChange"}},{title:"菜单名称",type:"input",offsetWidth:"320",key:"name",rules:[{required:!0,message:"请输入菜单名称",trigger:"blur"}]},{title:"菜单简称",type:"input",offsetWidth:"320",key:"abbreviation",rules:[{required:!0,message:"请输入菜单简称",trigger:"blur"}]},{title:"菜单路径",type:"input",offsetWidth:"320",key:"url"},{title:"菜单图标",type:"input",offsetWidth:"320",key:"icon"},{title:"排序权重",type:"input",offsetWidth:"320",key:"sort"},{title:"权限状态",type:"select",labelWidth:"100",offsetWidth:"320",key:"hidden",options:{type:"default",list:[{name:"显示",value:1},{name:"隐藏",value:0}]}},{title:"备注说明",type:"textarea",offsetWidth:"320",key:"notes"}],message:{message:"菜单添加成功！",type:"success"},formButton:[{name:"提交",type:"confirm",class:"primary",round:!1},{name:"取消",type:"cancel",class:"",round:!1}]},this.dialogDisplay=!0},editMenu:function(e){delete e.list,0===e.parentId&&(e.parentId="0"),this.resetDataFn(this.resTreeData,!1),this.disabledData(1);this.dialogData={isClickClose:!1,staticData:e,isDialogDisplay:!0,title:"编辑菜单",data:{},defaultData:"",mainWidth:"500",titleWidth:"100",submitAction:this.api.editMenu+e.menuId,btnAlign:"center",formList:[{title:"上级菜单",type:"cascader",labelWidth:"100",offsetWidth:"320",key:"parentId",props:{checkStrictly:!0,emitPath:!1},options:{type:"default",list:this.resetMenus},rules:[{required:!0,message:"请选择上级菜单",trigger:"blur"},{validator:function(t,a,i){e.menuId===a?i(new Error("不能设置自己为自己的子菜单！")):i()},trigger:"change"}],handlerCallback:{target:"changeFunction",funcName:"cascaderChange"}},{title:"菜单名称",type:"input",offsetWidth:"320",key:"name",rules:[{required:!0,message:"请输入菜单名称",trigger:"blur"}]},{title:"菜单简称",type:"input",offsetWidth:"320",key:"abbreviation",rules:[{required:!0,message:"请输入菜单简称",trigger:"blur"}]},{title:"菜单路径",type:"input",offsetWidth:"320",key:"url"},{title:"菜单图标",type:"input",offsetWidth:"320",key:"icon"},{title:"排序权重",type:"input",offsetWidth:"320",key:"sort"},{title:"权限状态",type:"select",labelWidth:"100",offsetWidth:"320",key:"hidden",options:{type:"default",list:[{name:"显示",value:1},{name:"隐藏",value:0}]}},{title:"备注说明",type:"textarea",offsetWidth:"320",key:"notes"}],message:{message:"菜单编辑成功！",type:"success"},formButton:[{name:"提交",type:"confirm",class:"primary",round:!1},{name:"取消",type:"cancel",class:"",round:!1}]},this.dialogDisplay=!0},handleCommand:function(e){this[e.funcName].call(function(){},e.data,e.node,e.funcName)},removeTree:function(e){var t=this;return 0===this.pageType&&1===e.menuId?(this.$message.error("首页不可删除！"),!1):1===this.pageType&&245===e.menuId?(this.$message.error("首页不可删除！"),!1):void this.$confirm("此操作将永久删除该菜单, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){t.$http.post(""+t.api.removeTree+e.menuId).then(function(e){e.code===t.$config.API_STATUS.OK&&(t.$message({type:"success",message:"删除成功!"}),t.isTree=!1,t.$nextTick(function(){t.isTree=!0}))})}).catch(function(){t.$message({type:"info",message:"已取消删除"})})},getTreeData:function(e){this.activeMenu={menuId:e[0].menuId,name:e[0].name},this.resTreeData=e,this.resetDataFn(this.resTreeData,!1),this.getTableData()},nodeClick:function(e,t){this.activeMenu={menuId:e.menuId,name:e.name},this.parentId=e.parentId,this.getTableData()},addRole:function(){this.resetDataFn(this.resTreeData,!1),this.disabledData(0),this.dialogData={isClickClose:!1,staticData:{menuId:this.activeMenu.menuId},isDialogDisplay:!0,title:"添加权限",data:{},defaultData:"",mainWidth:"500",titleWidth:"100",submitAction:this.api.addRole,btnAlign:"center",formList:[{title:"所属菜单",type:"cascader",labelWidth:"100",offsetWidth:"320",key:"parentId",props:{checkStrictly:!0,emitPath:!1},options:{type:"default",list:this.resetMenus},rules:[{required:!0,message:"请选择所属菜单",trigger:"blur"}],handlerCallback:{target:"changeFunction",funcName:"cascaderChange"}},{title:"权限名称",type:"input",offsetWidth:"320",key:"permName",rules:[{required:!0,message:"请输入权限名称",trigger:"blur"}]},{title:"权限规则",type:"input",offsetWidth:"320",key:"path",rules:[{required:!0,message:"请输入权限规则",trigger:"blur"}]},{title:"排序权重",type:"input",offsetWidth:"320",key:"sort"},{title:"权限状态",type:"select",labelWidth:"100",offsetWidth:"320",key:"hidden",options:{type:"default",list:[{name:"显示",value:1},{name:"隐藏",value:0}]}}],message:{message:"权限添加成功！",type:"success"},formButton:[{name:"提交",type:"confirm",class:"primary",round:!1},{name:"取消",type:"cancel",class:"",round:!1}]},this.dialogDisplay=!0},delRole:function(e){var t=this;this.$confirm("删除权限，此操作不可逆？?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){t.$http.post("/perm/delete/"+e.permId).then(function(e){e.code===t.$config.API_STATUS.OK&&(t.$message({type:"success",message:"删除成功!"}),t.$refs.table.emitRequestTableData())})}).catch(function(){t.$message({type:"info",message:"已取消删除"})})},editRole:function(e){this.resetDataFn(this.resTreeData,!1),this.disabledData(0),this.dialogData={isClickClose:!1,staticData:e,isDialogDisplay:!0,title:"编辑权限",data:{},defaultData:{ids:e.permId},methods:"deleteApi",mainWidth:"500",titleWidth:"100",submitAction:this.api.editRole,btnAlign:"center",formList:[{title:"权限名称",type:"input",offsetWidth:"320",key:"permName",rules:[{required:!0,message:"请输入权限名称",trigger:"blur"}]},{title:"权限规则",type:"input",offsetWidth:"320",key:"path",rules:[{required:!0,message:"请输入权限规则",trigger:"blur"}]},{title:"排序权重",type:"input",offsetWidth:"320",key:"sort"},{title:"权限状态",type:"select",labelWidth:"100",offsetWidth:"320",key:"hidden",options:{type:"default",list:[{name:"显示",value:1},{name:"隐藏",value:0}]}}],message:{message:"权限编辑成功！",type:"success"},formButton:[{name:"提交",type:"confirm",class:"primary",round:!1},{name:"取消",type:"cancel",class:"",round:!1}]},this.dialogDisplay=!0},displayRole:function(e){var t=this;if(e.length<1)return this.$message.error("请选择将要隐藏的权限！"),!1;this.$confirm("是否隐藏权限?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){var a=[];e.forEach(function(e,t){a[t]=e.permId}),t.$http.deleteApi("/perm/updateHidden",{hidden:0,ids:a.join(",")}).then(function(e){e.code===t.$config.API_STATUS.OK&&(t.$refs.tree.getTreeData(),t.$message({type:"success",message:"操作成功！"}))})}).catch(function(){t.$message({type:"info",message:"已取消"})})},hiddenRole:function(e){var t=this;if(e.length<1)return this.$message.error("请选择将要显示的权限！"),!1;this.$confirm("是否显示权限?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){var a=[];e.forEach(function(e,t){a[t]=e.permId}),t.$http.deleteApi("/perm/updateHidden",{hidden:1,ids:a.join(",")}).then(function(e){e.code===t.$config.API_STATUS.OK&&(t.$refs.tree.getTreeData(),t.$message({type:"success",message:"操作成功！"}))})}).catch(function(){t.$message({type:"info",message:"已取消"})})},changeStatus:function(e,t,a){var i=this,n=[];e.forEach(function(e){n.push(e.menuId)}),this.$http.post(this.api.changeStatus,{menuIds:n.join(","),status:t}).then(function(e){e.code===i.$config.API_STATUS.OK&&(i.$refs.tree.getTreeData(),i.$message({type:"success",message:a}))})},removeRole:function(e){var t=this,a=null;if(e.constructor===Array)a="",e.forEach(function(e,t){a+=e.permId+","});else{if(e.constructor!==Object)return!1;a=e.permId}this.$confirm("是否删除权限?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){t.$http.deleteApi(""+t.api.removeRole,{ids:a}).then(function(e){e.code===t.$config.API_STATUS.OK&&(t.$refs.tree.getTreeData(),t.$message({type:"success",message:"操作成功！"}))})}).catch(function(){t.$message({type:"info",message:"已取消"})})},getTableData:function(e){var t=this;this.activeMenu.menuId&&this.$http.get("/menu/listPermssion/"+this.activeMenu.menuId).then(function(e){e.code===t.$config.API_STATUS.OK&&(t.tableOptions.data=e.data)})},tableResponseFn:function(e,t,a){this[t.funcName].call(function(){},e,t,a)},showRefresh:function(e){var t=this;this.isTree=!1,this.$nextTick(function(){t.isTree=!0})},resetDataFn:function(e){var t=this,a=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(this.resetData){var i=[];if(e.forEach(function(e){var a=t.initJSON(t.resetData,e);i.push(a)}),!0===a)return i;this.resetMenus=i}},initJSON:function(e,t){var a={};for(var i in e)if("children"===i&&t[e[i]]&&t[e[i]].length>0){var n=this.resetDataFn(t[e[i]],!0);a[i]=n}else"children"!==i&&(a[i]=t[e[i]]);return a},disabledData:function(e){1===e&&this.resetMenus.unshift({type:0,value:"0",label:"无"}),this.resetMenus.forEach(function(t){0===e&&t.children&&t.children.length>0&&(t.disabled=!0),t.children&&t.children.length>0&&t.children.forEach(function(t){1===e&&(t.disabled=!1)})})},nodeDragEnd:function(e,t,a){var i=this;this.$http.post("/sys/menu/sort",{menuId:e.data.menuId,targetId:t.data.menuId,moveType:a}).then(function(e){e.code,i.$config.API_STATUS,i.isTree=!1,i.$nextTick(function(){i.isTree=!0})}).catch(function(e){i.isTree=!1,i.$nextTick(function(){i.isTree=!0})})},cascaderChange:function(e,t,a){"0"===t&&(this.$refs._dialog.dialogData.defaultData={type:0})}}},c=(a("KhAm"),a("ZrdR")),u=Object(c.a)(d,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"page-wrap"},[a("div",{staticClass:"page-body"},[a("div",{staticClass:"con-left"},[a("div",{staticClass:"input-query"},[a("el-input",{staticStyle:{width:"170px","margin-right":"4px"},attrs:{size:e.elNorms.size,placeholder:"搜索菜单名称","prefix-icon":"el-icon-search"},model:{value:e.filterText,callback:function(t){e.filterText="string"==typeof t?t.trim():t},expression:"filterText"}}),e._v(" "),a("el-button",{attrs:{disabled:!e.resTreeData||!e.isTree,size:e.elNorms.size,circle:e.elNorms.circle,round:e.elNorms.round},on:{click:e.addMenu}},[e._v("添加菜单")])],1),e._v(" "),a("div",{staticClass:"body-tree init-tree"},[e.isTree?a("tree-view",{ref:"tree",attrs:{"tree-data":e.treeData},on:{treeDataFn:e.getTreeData,"node-click":e.nodeClick,"node-drag-end":e.nodeDragEnd},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",{staticClass:"left-title",style:t.data.data.menuId===e.activeMenu.menuId?"color: #589ef8;":""},[a("i",{class:t.data.data.icon}),e._v("\n              "+e._s(t.data.data.name)+"\n            ")]),e._v(" "),a("span",{staticClass:"right-edit"},[a("span",[a("el-dropdown",{on:{command:e.handleCommand}},[a("span",{staticClass:"el-dropdown-link"},[a("i",{staticClass:"el-icon-more"})]),e._v(" "),a("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[a("el-dropdown-item",{attrs:{command:{data:t.data.data,node:t.data.node,funcName:"addMenu"}}},[e._v("添加子菜单")]),e._v(" "),a("el-dropdown-item",{attrs:{command:{data:t.data.data,node:t.data.node,funcName:"editMenu"}}},[e._v("编辑菜单")]),e._v(" "),a("el-dropdown-item",{attrs:{command:{data:t.data.data,node:t.data.node,funcName:"removeTree"}}},[e._v("删除菜单")])],1)],1)],1)])]}}])}):e._e()],1)]),e._v(" "),a("div",{staticClass:"con-right"},[a("div",{staticClass:"right-header"},[e._v("\n        "+e._s(e.activeMenu.name)+"\n      ")]),e._v(" "),a("transition",{attrs:{name:"opacity"}},[a("div",{staticClass:"opacity_table"},[e.isTable?a("table-view",{ref:"table",attrs:{"table-height":500,data:e.tableOptions.data,total:e.tableOptions.total,columns:e.tableOptions.columns,"search-controls":e.tableOptions.searchControls,"search-mode":e.tableOptions.searchMode,"button-controls":e.tableOptions.buttonControls,"footer-buttons":e.tableOptions.footerButtons,"pagination-layout":e.tableOptions.paginationLayout,loading:e.tableOptions.loading,"column-view":"",checked:"","is-border":""},on:{requestTableData:e.getTableData,handleCallback:e.tableResponseFn}}):e._e()],1)])],1)]),e._v(" "),e.dialogDisplay?a("dialog-design",{ref:"_dialog",attrs:{size:"mini",color:"warning","dialog-data":e.dialogData},on:{diaClose:e.diaClose,handlerCallback:e.dialogCallback}}):e._e()],1)},[],!1,null,"1fa32290",null);u.options.__file="menuJurisdiction.vue";t.default=u.exports}}]);