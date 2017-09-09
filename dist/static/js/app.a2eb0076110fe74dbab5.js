webpackJsonp([1],Array(33).concat([function(t,e,a){"use strict";var n=a(3),l=a(147),o=a(123),r=a.n(o),i=a(122),s=a.n(i),c=a(126),u=a.n(c),d=a(127),p=a.n(d),m=a(128),f=a.n(m),h=a(129),v=a.n(h),b=a(132),g=a.n(b),_=a(133),w=a.n(_),k=a(125),x=a.n(k),$=a(124),y=a.n($),S=a(131),L=a.n(S),D=a(130),P=a.n(D);n.default.use(l.a);var F=new l.a({routes:[{path:"/",name:"Login",component:r.a},{path:"/home",name:"Home",component:s.a},{path:"/article",name:"article",component:s.a,children:[{path:"list",name:"articleList",component:u.a},{path:"update/:id",name:"articleUpdate",component:p.a}]},{path:"/album",name:"album",component:s.a,children:[{path:"list",name:"albumList",component:x.a},{path:"add/:id",name:"albumAdd",component:y.a}]},{path:"/audio",name:"audio",component:s.a,children:[{path:"list",name:"audioList",component:f.a},{path:"update/:id",name:"audioUpdate",component:v.a}]},{path:"/video",name:"video",component:s.a,children:[{path:"list",name:"videoList",component:g.a},{path:"update/:id",name:"videoUpdate",component:w.a}]},{path:"/user",name:"user",component:s.a,children:[{path:"list",name:"userList",component:L.a},{path:"me",name:"me",component:P.a}]}]});e.a=F},,function(t,e){},function(t,e,a){function n(t){a(110)}var l=a(2)(a(76),a(134),n,null,null);t.exports=l.exports},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={created:function(){this.checkToken(),"/"===this.$route.path?this.isLogin=!1:(this.isLogin=!0,console.log(window.localStorage.getItem("username")),this.username=window.localStorage.getItem("username"))},updated:function(){this.checkToken(),"/"===this.$route.path?this.isLogin=!1:(this.isLogin=!0,this.username=window.localStorage.getItem("username"))},name:"app",data:function(){return{isLogin:!1,username:""}},methods:{logout:function(){this.$router.push("/"),window.localStorage.removeItem("username"),window.localStorage.removeItem("token")},checkToken:function(){window.localStorage.getItem("token")||this.$router.push("/")}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(4),l=a.n(n);e.default={created:function(){this.token=window.localStorage.getItem("token"),l.a.defaults.params={token:this.token}},data:function(){return{username:"",token:null,articleList:{path:"/article/list"},articleUpdate:{path:"/article/update/:-1"},albumList:{path:"/album/list"},albumAdd:{path:"/album/add/:-1"},audioList:{path:"/audio/list"},audioUpdate:{path:"/audio/update/:-1"},videoList:{path:"/video/list"},videoUpdate:{path:"/video/update/:-1"},userList:{path:"/user/list"},me:{path:"/user/me"}}},methods:{}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(4),l=a.n(n);e.default={data:function(){return{labelPosition:"right",loginSuccess:!1,formLabelAlign:{username:"",password:""}}},methods:{onSubmit:function(){var t=this,e=this.formLabelAlign,a=e.username,n=e.password;return a.trim()&&n.trim()?(l.a.post(this.ip+"/user/login",{username:a,password:n}).then(function(e){console.log(e);var n=e.data;0===n.code?t.$alert(n.msg,"",{confirmButtonText:"确定",callback:function(){t.$router.push({path:"/home"}),window.localStorage.setItem("username",a),window.localStorage.setItem("id",n.id),window.localStorage.setItem("access",n.access),window.localStorage.setItem("token",n.token)}}):t.$alert(n.msg,"登录失败")}).catch(function(e){t.$alert(e.message)}),!1):(this.showWarn(),!1)},showWarn:function(){this.$msgbox({title:"",message:"用户名和密码不能为空"})},cancel:function(){this.formLabelAlign.username="",this.formLabelAlign.password=""}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(6),l=a.n(n),o=a(4),r=a.n(o);e.default={created:function(){this.checkRoute()},updated:function(){this.checkRoute()},data:function(){return{id:null,buttonText:"立即创建",labelPosition:"right",formLabelAlign:{name:"",profile:""}}},methods:{onSubmit:function(){var t=this,e=this,a=new FormData;a.append("title",this.formLabelAlign.name),a.append("profile",this.formLabelAlign.profile),-1!=this.id?(a.append("id",this.id),r.a.post(this.ip+"/album/update",a).then(function(a){console.log(a);var n=a.data;0===n.code?t.$alert("更新成功","",{callback:function(){e.clearInput(),e.$router.push({path:"/album/list"})}}):t.$alert("更新失败",n.msg||l()(n.stack),{callback:e.clearInput})}).catch(function(a){t.$alert("更新失败",a.message,{callback:e.clearInput})})):r.a.post(this.ip+"/album/add",a).then(function(a){console.log(a);var n=a.data;0===n.code?t.$alert("创建成功","",{callback:function(){e.clearInput(),e.$router.push({path:"/album/list"})}}):t.$alert("创建失败",n.msg||l()(n.stack),{callback:e.clearInput})}).catch(function(a){t.$alert("创建失败",a.message,{callback:e.clearInput})})},clearInput:function(){this.formLabelAlign.name="",this.formLabelAlign.profile=""},checkRoute:function(){var t=this;if(this.$route.params.id){var e=this.$route.params.id;this.id=~~e.slice(1,e.length),console.log(this.id),this.buttonText="立即更新",-1!==this.id?r.a.get(this.ip+"/album/one",{params:{id:this.id}}).then(function(e){console.log(e.data),0===e.data.code&&(t.formLabelAlign.name=e.data.data.title,t.formLabelAlign.profile=e.data.data.profile)}):(console.log("create"),this.clearInput(),this.buttonText="立即创建")}}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(6),l=a.n(n),o=a(4),r=a.n(o);e.default={created:function(){var t=this;r.a.get(this.ip+"/album").then(function(e){var a=e.data;0===a.code?t.tableData=a.data:t.$alert(a.msg||l()(a.stack))}).catch(function(e){t.$alert(e.message)})},data:function(){return{tableData:null}},methods:{handleEdit:function(t){this.$router.push({path:"/album/add/:"+t.id})},handleDelete:function(t,e){var a=this;r.a.post(this.ip+"/album/del",{id:e.id}).then(function(e){var n=e.data;0===e.code?(a.$alert("删除成功"),a.tableData.splice(t,1)):a.$alert("删除失败",n.msg||l()(n.stack))}).catch(function(t){a.$alert("删除失败",t.message)})}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(6),l=a.n(n),o=a(4),r=a.n(o);e.default={created:function(){var t=this;r.a.get(this.ip+"/article").then(function(e){var a=e.data;0===a.code?t.tableData=a.data:t.$alert(a.msg||l()(a.stack))}).catch(function(e){t.$alert(e.message)})},data:function(){return{tableData:null}},methods:{handleEdit:function(t,e){console.log(e),this.$router.push({path:"/article/update/:"+e.id})},handleDelete:function(t,e){var a=this;r.a.post(this.ip+"/article/del",{id:e.id}).then(function(e){var n=e.data;0===e.code?(a.$alert("删除成功"),a.tableData.splice(t,1)):a.$alert("删除失败",n.msg||l()(n.stack))}).catch(function(t){a.$alert("删除失败",t.message)})}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(6),l=a.n(n),o=a(149),r=(a.n(o),a(4)),i=a.n(r);e.default={created:function(){this.checkRoute()},updated:function(){this.checkRoute()},data:function(){return{title:null,content:"",placeholder:null,result:null,titleResult:null}},components:{VueEditor:o.VueEditor},methods:{titleChange:function(t){this.titleResult=t},input:function(t){this.result=t},setEditorContent:function(){var t=this,e=this;this.title=this.titleResult.target.value,console.log(this.title);var a=new FormData;a.append("title",this.title),a.append("content",this.result),-1!=this.id?(a.append("id",this.id),i.a.post(this.ip+"/article/update",a).then(function(a){console.log(a);var n=a.data;0===n.code?t.$alert("更新成功","",{callback:function(){e.content="",e.placeholder="这里添加标题",e.$router.push({path:"/article/list"})}}):t.$alert("更新失败",n.msg||l()(n.stack))}).catch(function(e){t.$alert("更新失败",e.message)})):i.a.post(this.ip+"/article/add",a).then(function(a){console.log(a);var n=a.data;0===n.code?t.$alert("创建成功","",{callback:function(){e.content="",e.placeholder="这里添加标题",e.$router.push({path:"/article/list"})}}):t.$alert("创建失败",n.msg||l()(n.stack))}).catch(function(e){t.$alert("创建失败",e.message)})},checkRoute:function(){var t=this;if(this.$route.params.id){var e=this.$route.params.id;this.id=~~e.slice(1,e.length),console.log(this.id),-1!==this.id?i.a.get(this.ip+"/article",{params:{id:this.id}}).then(function(e){console.log(e.data),0===e.data.code&&(t.title=e.data.data.title,t.content=e.data.data.content)}):(console.log("create"),this.placeholder="这里添加标题",this.content="")}}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(6),l=a.n(n),o=a(4),r=a.n(o);e.default={created:function(){var t=this;r.a.get(this.ip+"/audio").then(function(e){var a=e.data;console.log(a),0===a.code?t.tableData=a.data:t.$alert(a.msg||l()(a.stack))}).catch(function(e){t.$alert(e.message)})},data:function(){return{tableData:null}},methods:{handleDelete:function(t,e){var a=this;r.a.post(this.ip+"/audio/del",{id:e.id}).then(function(e){var n=e.data;0===n.code?(a.$alert("删除成功"),a.tableData.splice(t,1)):a.$alert("删除失败",n.msg||l()(n.stack))}).catch(function(t){a.$alert("删除失败",t.message)})}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(6),l=a.n(n),o=a(4),r=a.n(o);e.default={created:function(){var t=this;this.url=this.ip+"/audio/add",r.a.get(this.ip+"/album").then(function(e){var a=e.data;0===a.code?t.options=a.data.map(function(t){return{label:t.title,value:t.id}}):t.$alert(a.msg||l()(a.stack))}).catch(function(e){t.$alert(e.message)})},data:function(){return{url:null,uploadData:{id:null,album_name:null,token:null},form:{name:""},value:"",label:"",options:null}},methods:{selectChange:function(t){var e={};e=this.options.find(function(e){return e.value===t}),this.label=e.label},onSubmit:function(){this.uploadData.id=this.value,this.uploadData.album_name=this.label,this.uploadData.token=window.localStorage.getItem("token"),console.log(this.uploadData),this.$refs.upload.submit()},handlePreview:function(t){console.log(t)},successHandler:function(t){var e=this;if(0!==t.code)return void this.$alert("上传失败",t.msg||l()(t.stack));this.$alert("上传成功","",{callback:function(){e.$router.push({path:"/audio/list"})}})},errorHandler:function(t){this.$alert("上传失败",t.msg||l()(t))}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(6),l=a.n(n),o=a(4),r=a.n(o);e.default={created:function(){this.ruleForm2.username=window.localStorage.getItem("username")},data:function(){var t=this;return{oldPwd:"",ruleForm2:{username:"",pass:"",checkPass:""},rules2:{pass:[{validator:function(e,a,n){""===a?n(new Error("请输入密码")):(""!==t.ruleForm2.checkPass&&t.$refs.ruleForm2.validateField("checkPass"),n())},trigger:"blur"}],checkPass:[{validator:function(e,a,n){""===a?n(new Error("请再次输入密码")):a!==t.ruleForm2.pass?n(new Error("两次输入密码不一致!")):n()},trigger:"blur"}]}}},methods:{submitForm:function(t){var e=this;this.$refs[t].validate(function(t){if(!t)return!1;var a=window.localStorage.getItem("id");console.log(e.oldPwd),r.a.post(e.ip+"/user/update",{id:a,oldPwd:e.oldPwd,password:e.ruleForm2.pass}).then(function(t){console.log(t),0==t.data.code?e.$alert("更改成功",""):e.$alert("更改失败",t.data.msg)}).catch(function(t){e.$alert("更改失败",l()(t))})})},resetForm:function(t){this.$refs[t].resetFields(),this.oldPwd=""}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(6),l=a.n(n),o=a(4),r=a.n(o);e.default={created:function(){var t=this;r.a.get(this.ip+"/user/getAll").then(function(e){var a=e.data;if(0===a.code){var n=a.data.map(function(t){return t.access=1===t.access?"超级管理员":"普通管理员",t});t.tableData=n}else t.$alert(a.msg||l()(a.stack))}).catch(function(e){t.$alert(e.message)})},data:function(){return{tableData:null}},methods:{handleDelete:function(t,e){var a=this,n=window.localStorage.getItem("access");r.a.post(this.ip+"/album/del",{id:e.id,access:n}).then(function(e){var n=e.data;0===e.code?(a.$alert("删除成功"),a.tableData.splice(t,1)):a.$alert("删除失败",n.msg||l()(n.stack))}).catch(function(t){a.$alert("删除失败",t.message)})}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(6),l=a.n(n),o=a(4),r=a.n(o);e.default={created:function(){var t=this;r.a.get(this.ip+"/video").then(function(e){var a=e.data;console.log(a),0===a.code?t.tableData=a.data:t.$alert(a.msg||l()(a.stack))}).catch(function(e){t.$alert(e.message)})},data:function(){return{tableData:null}},methods:{handleDelete:function(t,e){var a=this;r.a.post(this.ip+"/video/del",{id:e.id}).then(function(e){var n=e.data;0===n.code?(a.$alert("删除成功"),a.tableData.splice(t,1)):a.$alert("删除失败",n.msg||l()(n.stack))}).catch(function(t){a.$alert("删除失败",t.message)})}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(6),l=a.n(n),o=a(4);a.n(o);e.default={data:function(){return{url:this.ip+"/video/add",uploadData:{token:null},text:null,loading:!1}},methods:{onSubmit:function(){this.uploadData.token=window.localStorage.getItem("token"),console.log(this.uploadData),this.$refs.upload.submit()},handlePreview:function(t){console.log(t)},successHandler:function(t){var e=this;if(console.log(t),this.loading=!1,0!==t.code)return void this.$alert("上传失败",t.msg||l()(t.stack));this.$alert("上传成功","",{callback:function(){e.$router.push({path:"/video/list"})}})},errorHandler:function(t){console.log(t),this.loading=!1,this.$alert("上传失败",t.msg||l()(t))},progressHandler:function(t){this.loading=!0;var e=t.percent;this.text="正在上传: "+e+"%"}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(3),l=a(36),o=a.n(l),r=a(34),i=a.n(r),s=a(33),c=a(35);a.n(c);n.default.config.productionTip=!1,n.default.prototype.ip="http://123.206.64.198/admin",n.default.use(i.a),new n.default({el:"#app",router:s.a,template:"<App/>",components:{App:o.a}})},,,,,,,,,,,,,,,,,,,,,function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},,,function(t,e,a){function n(t){a(116)}var l=a(2)(a(77),a(141),n,null,null);t.exports=l.exports},function(t,e,a){function n(t){a(114)}var l=a(2)(a(78),a(139),n,null,null);t.exports=l.exports},function(t,e,a){function n(t){a(119)}var l=a(2)(a(79),a(145),n,null,null);t.exports=l.exports},function(t,e,a){var n=a(2)(a(80),a(146),null,null,null);t.exports=n.exports},function(t,e,a){var n=a(2)(a(81),a(135),null,null,null);t.exports=n.exports},function(t,e,a){function n(t){a(111)}var l=a(2)(a(82),a(136),n,null,null);t.exports=l.exports},function(t,e,a){function n(t){a(118)}var l=a(2)(a(83),a(144),n,null,null);t.exports=l.exports},function(t,e,a){function n(t){a(115)}var l=a(2)(a(84),a(140),n,null,null);t.exports=l.exports},function(t,e,a){function n(t){a(117)}var l=a(2)(a(85),a(142),n,null,null);t.exports=l.exports},function(t,e,a){var n=a(2)(a(86),a(143),null,null,null);t.exports=n.exports},function(t,e,a){function n(t){a(112)}var l=a(2)(a(87),a(137),n,null,null);t.exports=l.exports},function(t,e,a){function n(t){a(113)}var l=a(2)(a(88),a(138),n,null,null);t.exports=l.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("el-row",[a("el-col",{attrs:{span:24}},[a("h1",{staticClass:"grid-content bg-purple-dark"},[t.isLogin?a("el-button",{attrs:{type:"text"}},[t._v("你好, "+t._s(t.username))]):t._e(),t._v("\n      后台管理系统\n      "),t.isLogin?a("el-button",{attrs:{type:"danger"},on:{click:t.logout}},[t._v("退出")]):t._e()],1)])],1),t._v(" "),a("router-view")],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-table",{staticStyle:{width:"100%",margin:"16px 16px"},attrs:{data:t.tableData,border:""}},[a("el-table-column",{attrs:{label:"标题",width:"240",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{staticStyle:{"margin-left":"10px"}},[t._v(t._s(e.row.title))])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"内容简介",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",{staticClass:"name-wrapper",slot:"reference"},[a("el-tag",[t._v(t._s(e.row.content))])],1)]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"操作",width:"180",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{size:"small"},on:{click:function(a){t.handleEdit(e.$index,e.row)}}},[t._v("编辑")]),t._v(" "),a("el-button",{attrs:{size:"small",type:"danger"},on:{click:function(a){t.handleDelete(e.$index,e.row)}}},[t._v("删除")])]}}])})],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("input",{staticClass:"title",attrs:{placeholder:t.placeholder},domProps:{value:t.title},on:{input:t.titleChange}}),t._v(" "),a("vue-editor",{attrs:{id:"editor"},on:{input:t.input},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}}),t._v(" "),a("el-button",{attrs:{type:"primary",id:"saveContent"},on:{click:t.setEditorContent}},[t._v("立即上传")])],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-table",{staticStyle:{width:"100%",margin:"16px 16px"},attrs:{data:t.tableData,border:""}},[a("el-table-column",{attrs:{label:"名称",width:"240",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{staticStyle:{"margin-left":"10px"}},[t._v(t._s(e.row.name))])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"试看",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",{staticClass:"name-wrapper",slot:"reference"},[a("video",{attrs:{src:e.row.src,controls:""}},[t._v(t._s(e.row.name))])])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"操作",width:"180",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{size:"small",type:"danger"},on:{click:function(a){t.handleDelete(e.$index,e.row)}}},[t._v("删除")])]}}])})],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-form",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],ref:"form",attrs:{"element-loading-text":"text","label-width":"80px"}},[a("el-form-item",{attrs:{label:"上传视频",name:"video"}},[a("el-upload",{ref:"upload",staticClass:"upload-demo",attrs:{action:t.url,drag:"",data:t.uploadData,"on-preview":t.handlePreview,"on-success":t.successHandler,"on-progress":t.progressHandler,"on-error":t.errorHandler,"auto-upload":!1}},[a("i",{staticClass:"el-icon-upload"}),t._v(" "),a("div",{staticClass:"el-upload__text"},[t._v("将文件拖到此处，或"),a("em",[t._v("点击上传")])])])],1),t._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:t.onSubmit}},[t._v("立即上传")]),t._v(" "),a("el-button",[t._v("取消")])],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("div",{staticStyle:{margin:"20px"}}),t._v(" "),a("el-form",{staticStyle:{margin:"120px auto"},attrs:{"label-position":t.labelPosition,"label-width":"80px",model:t.formLabelAlign}},[a("el-form-item",{attrs:{label:"用户名"}},[a("el-input",{model:{value:t.formLabelAlign.username,callback:function(e){t.formLabelAlign.username=e},expression:"formLabelAlign.username"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"密码"}},[a("el-input",{attrs:{type:"password"},model:{value:t.formLabelAlign.password,callback:function(e){t.formLabelAlign.password=e},expression:"formLabelAlign.password"}})],1),t._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:t.onSubmit}},[t._v("登录")]),t._v(" "),a("el-button",{on:{click:t.cancel}},[t._v("取消")])],1)],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-form",{ref:"form",attrs:{model:t.form,"label-width":"80px"}},[a("el-form-item",{attrs:{label:"添加到",name:"album"}},[a("el-col",{attrs:{span:11}},[a("el-select",{attrs:{placeholder:"请选择",align:"left"},on:{change:t.selectChange},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}},t._l(t.options,function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}))],1)],1),t._v(" "),a("el-form-item",{attrs:{label:"上传文件",name:"audio"}},[a("el-upload",{ref:"upload",staticClass:"upload-demo",attrs:{drag:"",action:t.url,multiple:"",data:t.uploadData,"on-preview":t.handlePreview,"on-success":t.successHandler,"on-error":t.errorHandler,"auto-upload":!1}},[a("i",{staticClass:"el-icon-upload"}),t._v(" "),a("div",{staticClass:"el-upload__text"},[t._v("将文件拖到此处，或"),a("em",[t._v("点击上传")])])])],1),t._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:t.onSubmit}},[t._v("立即上传")]),t._v(" "),a("el-button",[t._v("取消")])],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-row",{staticClass:"tac",attrs:{width:"120px"}},[a("el-col",{attrs:{span:8}},[a("el-menu",{staticClass:"el-menu-vertical-demo",attrs:{mode:"vertical","default-active":"1","unique-opened":!0,router:!0}},[a("el-submenu",{attrs:{index:"1",title:"文章"}},[a("template",{slot:"title"},[t._v("文章")]),t._v(" "),a("el-menu-item",{attrs:{route:t.articleList,index:"5"}},[t._v("管理文章")]),t._v(" "),a("el-menu-item",{attrs:{route:t.articleUpdate,index:"6"}},[t._v("上传文章")])],2),t._v(" "),a("el-submenu",{attrs:{index:"2",title:"专辑"}},[a("template",{slot:"title"},[t._v("专辑")]),t._v(" "),a("el-menu-item",{attrs:{route:t.albumList,index:"7"}},[t._v("管理专辑")]),t._v(" "),a("el-menu-item",{attrs:{route:t.albumAdd,index:"8"}},[t._v("创建专辑")])],2),t._v(" "),a("el-submenu",{attrs:{index:"3",title:"音频"}},[a("template",{slot:"title"},[t._v("音频")]),t._v(" "),a("el-menu-item",{attrs:{route:t.audioList,index:"9"}},[t._v("管理音频")]),t._v(" "),a("el-menu-item",{attrs:{route:t.audioUpdate,index:"10"}},[t._v("上传音频")])],2),t._v(" "),a("el-submenu",{attrs:{index:"4",title:"视频"}},[a("template",{slot:"title"},[t._v("视频")]),t._v(" "),a("el-menu-item",{attrs:{route:t.videoList,index:"11"}},[t._v("管理视频")]),t._v(" "),a("el-menu-item",{attrs:{route:t.videoUpdate,index:"12"}},[t._v("上传视频")])],2),t._v(" "),a("el-submenu",{attrs:{index:"15",title:"账号管理"}},[a("template",{slot:"title"},[t._v("账号管理")]),t._v(" "),a("el-menu-item",{attrs:{route:t.userList,index:"13"}},[t._v("管理员列表")]),t._v(" "),a("el-menu-item",{attrs:{route:t.me,index:"14"}},[t._v("更改密码")])],2)],1)],1),t._v(" "),a("el-col",{attrs:{span:19}},[a("router-view")],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-form",{ref:"ruleForm2",staticClass:"demo-ruleForm",attrs:{model:t.ruleForm2,rules:t.rules2,"label-width":"100px"}},[a("p",[t._v("当前用户:   "),a("span",{staticStyle:{color:"#ee6623",fontWeight:"800"}},[t._v(t._s(this.ruleForm2.username))])]),t._v(" "),a("el-form-item",{attrs:{label:"输入原密码"}},[a("el-input",{ref:"oldPwd",attrs:{type:"password","auto-complete":"off"},model:{value:t.oldPwd,callback:function(e){t.oldPwd=e},expression:"oldPwd"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"输入新密码",prop:"pass"}},[a("el-input",{attrs:{type:"password","auto-complete":"off"},model:{value:t.ruleForm2.pass,callback:function(e){t.ruleForm2.pass=e},expression:"ruleForm2.pass"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"确认新密码",prop:"checkPass"}},[a("el-input",{attrs:{type:"password","auto-complete":"off"},model:{value:t.ruleForm2.checkPass,callback:function(e){t.ruleForm2.checkPass=e},expression:"ruleForm2.checkPass"}})],1),t._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.submitForm("ruleForm2")}}},[t._v("确认修改")]),t._v(" "),a("el-button",{on:{click:function(e){t.resetForm("ruleForm2")}}},[t._v("重置")])],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-table",{staticStyle:{width:"100%",margin:"16px 16px"},attrs:{data:t.tableData,border:""}},[a("el-table-column",{attrs:{label:"用户名",width:"240",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{staticStyle:{"margin-left":"10px"}},[t._v(t._s(e.row.username))])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"注册日期",width:"240",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{staticStyle:{"margin-left":"10px"}},[t._v(t._s(e.row.create))])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"用户权限",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",{staticClass:"name-wrapper",slot:"reference"},[a("el-tag",[t._v(t._s(e.row.access))])],1)]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"操作",width:"180",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{size:"small",type:"danger"},on:{click:function(a){t.handleDelete(e.$index,e.row)}}},[t._v("删除")])]}}])})],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-table",{staticStyle:{width:"100%",margin:"16px 16px"},attrs:{data:t.tableData,border:""}},[a("el-table-column",{attrs:{label:"名称",width:"240",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{staticStyle:{"margin-left":"10px"}},[t._v(t._s(e.row.name))])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"试听",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",{staticClass:"name-wrapper",slot:"reference"},[a("audio",{attrs:{src:e.row.src,controls:""}},[t._v(t._s(e.row.name))])])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"所属专辑",width:"120",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{staticStyle:{"margin-left":"10px"}},[t._v(t._s(e.row.album_name))])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"操作",width:"180",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{size:"small",type:"danger"},on:{click:function(a){t.handleDelete(e.$index,e.row)}}},[t._v("删除")])]}}])})],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-form",{attrs:{"label-position":t.labelPosition,"label-width":"80px",model:t.formLabelAlign}},[a("el-form-item",{attrs:{label:"专辑名称"}},[a("el-input",{model:{value:t.formLabelAlign.name,callback:function(e){t.formLabelAlign.name=e},expression:"formLabelAlign.name"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"专辑介绍"}},[a("el-input",{model:{value:t.formLabelAlign.profile,callback:function(e){t.formLabelAlign.profile=e},expression:"formLabelAlign.profile"}})],1),t._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:t.onSubmit}},[t._v(t._s(t.buttonText))]),t._v(" "),a("el-button",{on:{click:t.clearInput}},[t._v("取消")])],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-table",{staticStyle:{width:"100%",margin:"16px 16px"},attrs:{data:t.tableData,border:""}},[a("el-table-column",{attrs:{label:"标题",width:"240",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{staticStyle:{"margin-left":"10px"}},[t._v(t._s(e.row.title))])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"简介",width:"240",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{staticStyle:{"margin-left":"10px"}},[t._v(t._s(e.row.profile))])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"创建日期",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",{staticClass:"name-wrapper",slot:"reference"},[a("el-tag",[t._v(t._s(e.row.create))])],1)]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"操作",width:"180",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{size:"small"},on:{click:function(a){t.handleEdit(e.row)}}},[t._v("编辑")]),t._v(" "),a("el-button",{attrs:{size:"small",type:"danger"},on:{click:function(a){t.handleDelete(e.$index,e.row)}}},[t._v("删除")])]}}])})],1)},staticRenderFns:[]}}]),[89]);
//# sourceMappingURL=app.a2eb0076110fe74dbab5.js.map