(function(){"use strict";var t={6049:function(t,e,a){var s=a(6369),i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"app"},[e("router-view")],1)},l=[],n=a(1001),r={},o=(0,n.Z)(r,i,l,!1,null,null,null),c=o.exports,u=a(2631),d=function(){var t=this,e=t._self._c;return e("div",{staticClass:"home"},[e("Layout")],1)},m=[],v=function(){var t=this,e=t._self._c;return e("div",{staticClass:"layout"},[e("Sidebar",{staticClass:"sidebar"}),e("div",{staticClass:"container"},[e("Banner"),e("div",{staticClass:"content"},[e("Crumbs"),e("Form1"),e("Form2"),e("Form3"),e("div",{staticClass:"button"},[e("el-button",{attrs:{type:"primary",size:"small"}},[t._v("保存")])],1)],1)],1)],1)},f=[],b=function(){var t=this,e=t._self._c;return e("div",{staticClass:"sidebar"},[t._m(0),e("div",{staticClass:"item"},[e("svg",{staticClass:"icon left",attrs:{"aria-hidden":"true"}},[e("use",{attrs:{"xlink:href":"#icon-zulinhetongbaobiao"}})]),e("div",{staticClass:"text"},[t._v("功能功能")]),e("svg",{staticClass:"icon arrow",attrs:{"aria-hidden":"true"}},[e("use",{attrs:{"xlink:href":"#icon-jiantouyou"}})])]),e("div",{staticClass:"item"},[e("svg",{staticClass:"icon left",attrs:{"aria-hidden":"true"}},[e("use",{attrs:{"xlink:href":"#icon-zulinhetongbaobiao"}})]),e("div",{staticClass:"text"},[t._v("功能功能")]),e("svg",{staticClass:"icon arrow",attrs:{"aria-hidden":"true"}},[e("use",{attrs:{"xlink:href":"#icon-jiantouyou"}})])]),e("div",{staticClass:"item"},[e("svg",{staticClass:"icon left",attrs:{"aria-hidden":"true"}},[e("use",{attrs:{"xlink:href":"#icon-zulinhetongbaobiao"}})]),e("div",{staticClass:"text"},[t._v("功能功能")]),e("svg",{staticClass:"icon arrow",attrs:{"aria-hidden":"true"}},[e("use",{attrs:{"xlink:href":"#icon-jiantouyou"}})])]),e("div",{staticClass:"item"},[e("svg",{staticClass:"icon left",attrs:{"aria-hidden":"true"}},[e("use",{attrs:{"xlink:href":"#icon-zulinhetongbaobiao"}})]),e("div",{staticClass:"text"},[t._v("功能功能")]),e("svg",{staticClass:"icon arrow",attrs:{"aria-hidden":"true"}},[e("use",{attrs:{"xlink:href":"#icon-jiantouyou"}})])]),e("div",{staticClass:"item"},[e("svg",{staticClass:"icon left",attrs:{"aria-hidden":"true"}},[e("use",{attrs:{"xlink:href":"#icon-zulinhetongbaobiao"}})]),e("div",{staticClass:"text"},[t._v("功能功能")]),e("svg",{staticClass:"icon arrow",attrs:{"aria-hidden":"true"}},[e("use",{attrs:{"xlink:href":"#icon-jiantouyou"}})])])])},p=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"logo-box"},[e("img",{attrs:{src:a(2025)}}),e("div",{staticClass:"title"},[t._v("上海正也医药有限公司")])])}],h={name:"Sidebar",props:{}},_=h,g=(0,n.Z)(_,b,p,!1,null,"5be3c306",null),C=g.exports,x=function(){var t=this,e=t._self._c;return e("div",{staticClass:"banner"},[e("div",{staticClass:"item"},[e("div",{staticClass:"icon-box"},[e("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[e("use",{attrs:{"xlink:href":"#icon-shouye"}})])]),e("div",[t._v("首页")])]),e("div",{staticClass:"item"},[e("div",{staticClass:"icon-box"},[e("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[e("use",{attrs:{"xlink:href":"#icon-yunduanshuaxin"}})])]),e("div",[t._v("主数据")])]),e("div",{staticClass:"item"},[e("div",{staticClass:"icon-box"},[e("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[e("use",{attrs:{"xlink:href":"#icon-danweizuzhi"}})])]),e("div",[t._v("辖区管理")])]),e("div",{staticClass:"sys-logo"},[e("div",{staticClass:"icon-box"},[e("svg",{staticClass:"icon logo",attrs:{"aria-hidden":"true"}},[e("use",{attrs:{"xlink:href":"#icon-wendangguanlixitong-CRMxitongtubiao"}})])]),t._m(0)])])},y=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"box"},[e("div",[t._v("迅销通")]),e("div",[t._v("行为管理系统")])])}],w={name:"Banner"},k=w,z=(0,n.Z)(k,x,y,!1,null,"57dc3035",null),S=z.exports,j=function(){var t=this;t._self._c;return t._m(0)},Z=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"top"},[e("div",{staticClass:"crumbs"},[t._v("首页/管理协议/管理协议/管理协议")]),e("div",{staticClass:"route"},[t._v("新增二级商协议")])])}],O={name:"Crumbs"},F=O,$=(0,n.Z)(F,j,Z,!1,null,"1b4c88e4",null),B=$.exports,P=function(){var t=this,e=t._self._c;return e("div",[e("Slide",{attrs:{name:"协议主体",index:"❶"}}),e("div",{staticClass:"form"},[e("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{size:"mini",model:t.form,rules:t.rules,"label-width":"100px"}},[e("div",{staticClass:"top"},[e("div",{staticClass:"left"},[e("el-form-item",{attrs:{label:"协议客户",prop:"name"}},[e("el-button",[t._v("选择客户")]),t._v("  "),e("span",{staticClass:"company"},[t._v("上海正也医药有限公司")])],1),e("el-form-item",{attrs:{label:"购进指标"}},[e("el-select",{staticStyle:{width:"24%"},model:{value:t.form.region,callback:function(e){t.$set(t.form,"region",e)},expression:"form.region"}},[e("el-option",{attrs:{label:"区域一",value:"shanghai"}}),e("el-option",{attrs:{label:"区域二",value:"beijing"}})],1),t._v("  "),e("el-input",{staticStyle:{width:"60%"},attrs:{placeholder:"输入金额/数量"}})],1),e("el-form-item",{attrs:{label:"销售区域"}},[e("el-button",[t._v("选择区域")]),t._v("  "),e("el-tag",{attrs:{closable:"",size:"medium"}},[t._v("全国")])],1)],1),e("div",{staticClass:"right"},[e("el-form-item",{attrs:{label:"协议状态"}},[e("el-select",{staticStyle:{width:"40%"},model:{value:t.form.index,callback:function(e){t.$set(t.form,"index",e)},expression:"form.index"}},[e("el-option",{attrs:{label:"区域一",value:"shanghai"}}),e("el-option",{attrs:{label:"区域二",value:"beijing"}})],1)],1),e("el-form-item",{attrs:{label:"纯销指标"}},[e("el-select",{staticStyle:{width:"24%"},model:{value:t.form.region,callback:function(e){t.$set(t.form,"region",e)},expression:"form.region"}},[e("el-option",{attrs:{label:"区域一",value:"shanghai"}}),e("el-option",{attrs:{label:"区域二",value:"beijing"}})],1),t._v("  "),e("el-input",{staticStyle:{width:"60%"},attrs:{placeholder:"输入金额/数量"}})],1),e("el-form-item",{attrs:{label:"签订时间"}},[e("el-input",{model:{value:t.form.time,callback:function(e){t.$set(t.form,"time",e)},expression:"form.time"}})],1)],1)]),e("div",{staticClass:"bottom"},[e("el-form-item",{attrs:{label:"购进渠道"}},[e("el-select",{staticStyle:{width:"100px"},model:{value:t.form.way,callback:function(e){t.$set(t.form,"way",e)},expression:"form.way"}},[e("el-option",{attrs:{label:"区域一",value:"shanghai"}}),e("el-option",{attrs:{label:"区域二",value:"beijing"}})],1),t._v("  "),e("el-button",[t._v("请选择渠道")])],1),e("div",{staticClass:"table"},[e("el-table",{attrs:{"header-cell-style":{background:"#f8f8f8",color:"#606266"},data:t.tableData,size:"mini"}},[e("el-table-column",{attrs:{width:"40"}}),e("el-table-column",{attrs:{prop:"date",label:"指定渠道编码",width:"280"}}),e("el-table-column",{attrs:{prop:"name",label:"指定渠道名称",width:"550"}}),e("el-table-column",{attrs:{prop:"address",label:"地址"}})],1)],1)],1)])],1)],1)},D=[],J=function(){var t=this,e=t._self._c;return e("div",{staticClass:"slide"},[t._m(0),e("div",{staticClass:"text"},[e("span",[t._v(t._s(t.index))]),t._v(" "+t._s(t.name))]),t._m(1)])},T=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"dotted"},[e("div"),e("div")])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"dotted"},[e("div"),e("div")])}],M={name:"Slide",props:["name","index"]},N=M,Q=(0,n.Z)(N,J,T,!1,null,"a547c864",null),L=Q.exports,q={name:"Form1",components:{Slide:L},data(){return{form:{name:"",region:"金额",index:"正常",time:"2020-02-01 18:25",way:"指定渠道"},rules:{name:[{required:!0,message:"请输入活动名称",trigger:"blur"},{min:3,max:5,message:"长度在 3 到 5 个字符",trigger:"blur"}]},tableData:[{date:"BJ000190",name:"宁波九州通药业有限公司",address:"浙江省"},{date:"BJ000190",name:"国药控股精华有限公司",address:"浙江省"},{date:"BJ000190",name:"老百姓药业有限公司",address:"上海市普陀区金沙江路 1519 弄"}]}}},E=q,H=(0,n.Z)(E,P,D,!1,null,"4f9a5652",null),R=H.exports,V=function(){var t=this,e=t._self._c;return e("div",[e("Slide",{attrs:{name:"产品政策",index:"❷"}}),e("div",{staticClass:"container"},[e("div",{staticClass:"top"},[e("el-button",{attrs:{type:"primary",size:"mini"}},[t._v("添加产品")]),t._m(0),t._m(1),t._m(2)],1),e("div",{staticClass:"middle"},[e("div",{staticClass:"left"},[e("span",[t._v("产品：")]),e("el-button",{attrs:{size:"mini"}},[t._v("选择产品")]),e("span",[t._v("美复胶丸 24粒/盒")]),e("span",[t._v("协议效期：")]),e("el-button",{attrs:{size:"mini"}},[t._v("2020-02-01 ~ 2020-05-01")])],1),e("el-button",{staticClass:"delete",attrs:{size:"mini"}},[e("span",[t._v("删除")])])],1),e("div",{staticClass:"bottom"},[e("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,"header-cell-style":{background:"#f8f8f8",color:"#606266"},border:!0,size:"mini"}},[e("el-table-column",{attrs:{label:"协议价（元）"}},[e("el-input",{attrs:{placeholder:"请输入",size:"mini"}})],1),e("el-table-column",{attrs:{label:"票折（元）"}},[e("el-input",{attrs:{placeholder:"请输入",size:"mini"}})],1),e("el-table-column",{attrs:{label:"购进指标量（大单位）"}},[e("el-input",{attrs:{placeholder:"请输入",size:"mini"}})],1),e("el-table-column",{attrs:{label:"购进指标量（小单位）"}},[e("el-input",{attrs:{placeholder:"请输入",size:"mini"}})],1),e("el-table-column",{attrs:{label:"购进金额（万元）"}},[e("el-input",{attrs:{placeholder:"请输入",size:"mini"}})],1),e("el-table-column",{attrs:{label:"纯销指标量（小单位）"}},[e("el-input",{attrs:{placeholder:"请输入",size:"mini"}})],1),e("el-table-column",{attrs:{label:"纯销指标金额（万元）"}},[e("el-input",{attrs:{placeholder:"请输入",size:"mini"}})],1)],1),e("el-form",{ref:"form",attrs:{model:t.form,"label-width":"80px"}},[e("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,"header-cell-style":{background:"#f8f8f8",color:"#606266"},border:!0,size:"mini"}},[e("el-table-column",{attrs:{label:"分销奖励"}},[e("el-input",{attrs:{placeholder:"请输入",size:"mini"}})],1),e("el-table-column",{attrs:{label:"费用科目"}},[e("el-select",{attrs:{placeholder:"请选择活动区域",size:"mini"},model:{value:t.form.sigle,callback:function(e){t.$set(t.form,"sigle",e)},expression:"form.sigle"}},[e("el-option",{attrs:{label:"区域一",value:"shanghai"}}),e("el-option",{attrs:{label:"区域二",value:"beijing"}})],1)],1),e("el-table-column",{attrs:{label:"零售配送"}},[e("el-input",{attrs:{placeholder:"请输入",size:"mini"}})],1),e("el-table-column",{attrs:{label:"费用科目"}},[e("el-select",{attrs:{placeholder:"请选择活动区域",size:"mini"},model:{value:t.form.multi,callback:function(e){t.$set(t.form,"multi",e)},expression:"form.multi"}},[e("el-option",{attrs:{label:"区域一",value:"shanghai"}}),e("el-option",{attrs:{label:"区域二",value:"beijing"}})],1)],1),e("el-table-column",{attrs:{label:"医疗配送商"}},[e("el-input",{attrs:{placeholder:"请输入",size:"mini"}})],1),e("el-table-column",{attrs:{label:"费用科目"}},[e("el-select",{attrs:{placeholder:"请选择活动区域",size:"mini"},model:{value:t.form.multi2,callback:function(e){t.$set(t.form,"multi2",e)},expression:"form.multi2"}},[e("el-option",{attrs:{label:"区域一",value:"shanghai"}}),e("el-option",{attrs:{label:"区域二",value:"beijing"}})],1)],1),e("el-table-column",{attrs:{label:"纯销指标金额（万元）"}},[e("el-input",{staticClass:"white",attrs:{placeholder:"2020-05-15",size:"mini"},model:{value:t.form.date2,callback:function(e){t.$set(t.form,"date2",e)},expression:"form.date2"}})],1),e("el-table-column",{attrs:{label:"纯销指标金额（万元）"}},[e("el-input",{staticClass:"white",attrs:{placeholder:"",size:"mini"},model:{value:t.form.date1,callback:function(e){t.$set(t.form,"date1",e)},expression:"form.date1"}})],1)],1)],1)],1)])],1)},A=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"box"},[e("span",[t._v("购进总指标（万元）:")]),t._v("  "),e("span",[t._v("¥152,54")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"box"},[e("span",[t._v("指标按季度分解（万元）:")]),t._v("  "),e("span",[t._v("【Q1】¥12.5，【Q2】¥12.5，【Q3】¥12.5，【Q4】¥12.5")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"box"},[e("span",[t._v("纯销总指标（万元）:")]),t._v("  "),e("span",[t._v("¥152,65")])])}],G={name:"Form2",data(){return{tableData:[{date:"2016-05-02",name:"王小虎",address:"上海市普陀区金沙江路 1518 弄"}],form:{name:"",sigle:"单选项1",multi:"多选项1",multi2:"多选项2",date1:"2020-05-15",date2:"2020-05-15",delivery:!1,type:[],resource:"",desc:""}}}},I=G,K=(0,n.Z)(I,V,A,!1,null,"22366de5",null),U=K.exports,W=function(){var t=this,e=t._self._c;return e("div",[e("Slide",{attrs:{name:"补充协议",index:"❸"}}),e("div",{staticClass:"box"},[e("el-tabs",{attrs:{type:"card"},on:{"tab-click":t.handleClick},model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},[e("el-tab-pane",{attrs:{label:"补充协议1",name:"first"}},[e("div",{staticClass:"content-box"},[e("div",{staticClass:"header"},[e("span",[t._v("协议内容:")])]),e("div",{staticClass:"content"})])]),e("el-tab-pane",{attrs:{label:"补充协议2",name:"second"}},[t._v("配置管理")]),e("el-tab-pane",{attrs:{label:"补充协议3",name:"third"}},[t._v("角色管理")])],1)],1)],1)},X=[],Y={name:"Form3",data(){return{activeName:"first"}},methods:{handleClick(t,e){console.log(t,e)}}},tt=Y,et=(0,n.Z)(tt,W,X,!1,null,"110c269a",null),at=et.exports,st={name:"Layout",components:{Banner:S,Sidebar:C,Crumbs:B,Form1:R,Form2:U,Form3:at},data(){return{form:{name:"",region:"金额",index:"正常",time:"2020-02-01 18:25",way:"指定渠道"},rules:{name:[{required:!0,message:"请输入活动名称",trigger:"blur"},{min:3,max:5,message:"长度在 3 到 5 个字符",trigger:"blur"}]},tableData:[{date:"BJ000190",name:"宁波九州通药业有限公司",address:"浙江省"},{date:"BJ000190",name:"国药控股精华有限公司",address:"浙江省"},{date:"BJ000190",name:"老百姓药业有限公司",address:"上海市普陀区金沙江路 1519 弄"}]}}},it=st,lt=(0,n.Z)(it,v,f,!1,null,"b492f244",null),nt=lt.exports,rt={name:"HomeView",components:{Layout:nt}},ot=rt,ct=(0,n.Z)(ot,d,m,!1,null,"c659130a",null),ut=ct.exports;s["default"].use(u.ZP);const dt=[{path:"/",name:"home",component:ut}],mt=new u.ZP({routes:dt});var vt=mt,ft=a(3822);s["default"].use(ft.ZP);var bt=new ft.ZP.Store({state:{},getters:{},mutations:{},actions:{},modules:{}}),pt=a(8499),ht=a.n(pt);s["default"].component("Slide",L),s["default"].use(ht()),s["default"].config.productionTip=!1,new s["default"]({router:vt,store:bt,render:t=>t(c)}).$mount("#app")},2025:function(t,e,a){t.exports=a.p+"img/tencent.de82dec1.png"}},e={};function a(s){var i=e[s];if(void 0!==i)return i.exports;var l=e[s]={exports:{}};return t[s](l,l.exports,a),l.exports}a.m=t,function(){var t=[];a.O=function(e,s,i,l){if(!s){var n=1/0;for(u=0;u<t.length;u++){s=t[u][0],i=t[u][1],l=t[u][2];for(var r=!0,o=0;o<s.length;o++)(!1&l||n>=l)&&Object.keys(a.O).every((function(t){return a.O[t](s[o])}))?s.splice(o--,1):(r=!1,l<n&&(n=l));if(r){t.splice(u--,1);var c=i();void 0!==c&&(e=c)}}return e}l=l||0;for(var u=t.length;u>0&&t[u-1][2]>l;u--)t[u]=t[u-1];t[u]=[s,i,l]}}(),function(){a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,{a:e}),e}}(),function(){a.d=function(t,e){for(var s in e)a.o(e,s)&&!a.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){a.p="/manage-sys-vue2/dist/"}(),function(){var t={143:0};a.O.j=function(e){return 0===t[e]};var e=function(e,s){var i,l,n=s[0],r=s[1],o=s[2],c=0;if(n.some((function(e){return 0!==t[e]}))){for(i in r)a.o(r,i)&&(a.m[i]=r[i]);if(o)var u=o(a)}for(e&&e(s);c<n.length;c++)l=n[c],a.o(t,l)&&t[l]&&t[l][0](),t[l]=0;return a.O(u)},s=self["webpackChunkmanage_sys_vue2"]=self["webpackChunkmanage_sys_vue2"]||[];s.forEach(e.bind(null,0)),s.push=e.bind(null,s.push.bind(s))}();var s=a.O(void 0,[998],(function(){return a(6049)}));s=a.O(s)})();
//# sourceMappingURL=app.085e7f99.js.map