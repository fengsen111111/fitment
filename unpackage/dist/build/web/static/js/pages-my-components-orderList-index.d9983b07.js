(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-my-components-orderList-index"],{"0697":function(t,e,i){"use strict";i.r(e);var s=i("5df3"),a=i("e217");for(var n in a)["default"].indexOf(n)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(n);var c=i("828b"),u=Object(c["a"])(a["default"],s["b"],s["c"],!1,null,"687e054a",null,!1,s["a"],void 0);e["default"]=u.exports},"0849":function(t,e,i){"use strict";i("6a54");var s=i("f5bd").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=s(i("15ba")),n=s(i("dc4b")),c={data:function(){return{status:"a",orderList:[]}},onLoad:function(t){console.log("option",t),this.status=t.status,this._getOrderList()},components:{NavBar:a.default},methods:{_getOrderList:function(){var t=this;n.default.getOrderList({post_params:{user_type:"a",status:this.status,currentPage:1,perPage:20}}).then((function(e){var i=e.data.data.list;t.orderList=i,console.log("订单列表",t.orderList)}))},handUrl:function(t){uni.navigateTo({url:t})}}};e.default=c},"15ba":function(t,e,i){"use strict";i.r(e);var s=i("f006"),a=i("63bc");for(var n in a)["default"].indexOf(n)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(n);i("c380");var c=i("828b"),u=Object(c["a"])(a["default"],s["b"],s["c"],!1,null,"2c502d53",null,!1,s["a"],void 0);e["default"]=u.exports},"5a18":function(t,e,i){var s=i("c86c");e=s(!1),e.push([t.i,".half-circle[data-v-2c502d53]{width:%?120?%;\n\t/* 设置宽度 */height:%?60?%;\n\t/* 设置高度（高度为宽度的一半） */background-color:#fff;\n\t/* 设置背景颜色 */border-radius:%?65?% %?65?% 0 0;\n\t/* 上半部分圆角 */box-shadow:0 %?-3?% %?6?% rgba(0,0,0,.2);padding:%?10?%;top:-46px}.border_BY[data-v-2c502d53]{border-radius:50% 50% 0 0}.shadow_tarbar[data-v-2c502d53]{box-shadow:%?0?% %?-3?% %?6?% %?1?% rgba(0,0,0,.4)}uni-image[data-v-2c502d53]{will-change:transform}.iconAll[data-v-2c502d53]{width:%?40?%;height:%?40?%}.tarBarClass[data-v-2c502d53]{width:100%;\n\t/* width: 380px; */position:fixed;bottom:0;\n\t/* border-top: 1px solid #D7D9EC; */background-color:#fff;padding:%?20?% %?0?%;border-radius:%?20?% %?20?% 0 0;box-shadow:%?0?% %?-3?% %?6?% %?1?% rgba(0,0,0,.2)}",""]),t.exports=e},"5df3":function(t,e,i){"use strict";i.d(e,"b",(function(){return s})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){}));var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"bgF9F9F9 h100vh"},[i("NavBar",{attrs:{navType:"标题",title:"订单列表"}}),i("v-uni-view",{staticClass:"p30 text24"},[i("v-uni-view",{staticClass:"flex col666666 justify-between"},[i("v-uni-view",{class:""==t.status?"border_bot_4DB23F col-black":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),function(){t.status=""}.apply(void 0,arguments)}}},[t._v("全部")]),i("v-uni-view",{class:"a"==t.status?"border_bot_4DB23F col-black":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),function(){t.status="a"}.apply(void 0,arguments)}}},[t._v("待支付")]),i("v-uni-view",{class:"b"==t.status?"border_bot_4DB23F col-black":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),function(){t.status="b"}.apply(void 0,arguments)}}},[t._v("待拼成")]),i("v-uni-view",{class:"c"==t.status?"border_bot_4DB23F col-black":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),function(){t.status="c"}.apply(void 0,arguments)}}},[t._v("待发货")]),i("v-uni-view",{class:"d"==t.status?"border_bot_4DB23F col-black":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),function(){t.status="d"}.apply(void 0,arguments)}}},[t._v("待收货")]),i("v-uni-view",{class:"e"==t.status?"border_bot_4DB23F col-black":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),function(){t.status="e"}.apply(void 0,arguments)}}},[t._v("已完成")])],1),i("v-uni-view",{staticClass:"mt40"},t._l(t.orderList,(function(e){return i("v-uni-view",{key:e.id,staticClass:"bg-white radius10 mb20"},[i("v-uni-view",{staticClass:"flex p25 justify-between items-center",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.handUrl("/pages/my/components/orderListDetails/index?id="+e.id)}}},[i("v-uni-view",{staticClass:"text24"},[t._v("订单编号:"+t._s(e.id))]),i("v-uni-view",{staticClass:" "},[i("v-uni-view",{staticClass:"col4988FE text28"},["a"==e.status?i("v-uni-view",{staticClass:"colFF0000"},[t._v("待支付")]):"b"==e.status?i("v-uni-view",{staticClass:"colFF0000"},[t._v("待拼成")]):"c"==e.status?i("v-uni-view",[t._v("待发货")]):"d"==e.status?i("v-uni-view",[t._v("待收货")]):"e"==e.status?i("v-uni-view",[t._v("已完成")]):"f"==e.status?i("v-uni-view",[t._v("已评价")]):"g"==e.status?i("v-uni-view",[t._v("售后")]):"z"==e.status?i("v-uni-view",[t._v("拼团失败")]):t._e()],1),i("v-uni-view",{staticClass:"col4DB23F text24"},[t._v("已有"+t._s(e.team_person)+"人参与")])],1)],1),i("v-uni-view",{staticClass:"bg999999 h1"}),i("v-uni-view",{staticClass:"p25"},t._l(e.goods_list,(function(s,a){return i("v-uni-view",{key:a,staticClass:"flex mb20 justify-between items-center"},[i("v-uni-view",{staticClass:"w136 h136"},[i("v-uni-image",{staticClass:"w136 h136 radius10",attrs:{src:"iss.cover_image",mode:""}})],1),i("v-uni-view",{staticClass:"w-full ml20",staticStyle:{"line-height":"30rpx"}},[i("v-uni-view",{staticClass:"flex justify-between items-center"},[i("v-uni-view",{staticClass:"text20 w370"},[t._v(t._s(s.name))]),i("v-uni-view",{staticClass:"colFF0000 text30"},[t._v("￥"+t._s(s.price))])],1),i("v-uni-view",{staticClass:"flex mt10 justify-between items-center"},[i("v-uni-view",{staticClass:"text20 w370 col333333"},[t._v("规格:"+t._s(s.size_name))]),i("v-uni-view",{staticClass:"text28"},[t._v("X ??")])],1),i("v-uni-view",{staticClass:"flex mt10 justify-between items-center"},[i("v-uni-view",{staticClass:"text20 w370 col333333"},[t._v(t._s(e.store_name))]),i("v-uni-view",{staticClass:"text28"})],1)],1)],1)})),1),i("v-uni-view",{staticClass:"bg999999 h1"}),i("v-uni-view",{staticClass:"flex p25 justify-between items-center"},[i("v-uni-view",{staticClass:"flex items-center"},[i("v-uni-view",{staticClass:"text24 col666666"},[t._v("实付金额")]),i("v-uni-view",{staticClass:"ml10 text34 colFF0000 font-bold"},[t._v("￥"+t._s(e.pay_price))])],1),i("v-uni-view",{},["a"==e.status?i("v-uni-view",{staticClass:"text28 bg4DB23F col-white text-center  px30 py10 radius40"},[t._v("去支付")]):"b"==e.status?i("v-uni-view",{staticClass:"text28 borderFF0000 text-center colFF0000  px30 py10 radius40"},[t._v("取消")]):"c"==e.status?i("v-uni-view",[i("v-uni-view",{staticClass:"text28 border4DB23F text-center col4DB23F  px30 py10 radius40",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handUrl("/pages/my/components/orderListSH/index")}}},[t._v("申请售后")]),i("v-uni-view",{staticClass:"text28 borderFF0000 text-center colFF0000  px30 py10 radius40"},[t._v("催发货")])],1):"d"==e.status?i("v-uni-view",[i("v-uni-view",{staticClass:"text28 border4DB23F text-center col4DB23F px30 py10 radius40",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handUrl("/pages/my/components/orderListSH/index")}}},[t._v("申请售后")]),i("v-uni-view",{staticClass:"text28 bg4DB23F col-white text-center px30 py10 radius40"},[t._v("确认收货")])],1):"e"==e.status?i("v-uni-view",[i("v-uni-view",{staticClass:"text28 border4DB23F text-center col4DB23F px30 py10 radius40",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handUrl("/pages/my/components/orderListSH/index")}}},[t._v("申请售后")]),i("v-uni-view",{staticClass:"text28 bgFBB333 col-white text-center px30 py10 radius40"},[t._v("再次购买")])],1):"g"==e.status?i("v-uni-view",{staticClass:"text28 borderFF0000 text-center colFF0000  px30 py10 radius40"},[t._v("取消售后")]):t._e()],1)],1)],1)})),1)],1)],1)},a=[]},"63bc":function(t,e,i){"use strict";i.r(e);var s=i("ba12"),a=i.n(s);for(var n in s)["default"].indexOf(n)<0&&function(t){i.d(e,t,(function(){return s[t]}))}(n);e["default"]=a.a},ba12:function(t,e,i){"use strict";i("6a54"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s={props:{navType:{type:String,default:"搜索"},title:{type:String,default:""}},data:function(){return{value:""}},methods:{back:function(){uni.navigateBack()},tjValue:function(){this.$emit("searchVal",this.value)}}};e.default=s},c380:function(t,e,i){"use strict";var s=i("fcab"),a=i.n(s);a.a},e217:function(t,e,i){"use strict";i.r(e);var s=i("0849"),a=i.n(s);for(var n in s)["default"].indexOf(n)<0&&function(t){i.d(e,t,(function(){return s[t]}))}(n);e["default"]=a.a},f006:function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){return s}));var s={uniIcons:i("e7d1").default},a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{},["搜索"==t.navType?i("v-uni-view",{staticClass:"bg4DB23F pt40"},[i("v-uni-view",{staticClass:"flex pt25 px30  items-center pb14 justify-between"},[i("uni-icons",{staticStyle:{"margin-left":"-10rpx"},attrs:{type:"left",size:"30",color:"#ffffff"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.back()}}}),i("v-uni-view",{staticClass:"bg-white flex items-center py10 px20 radius40"},[i("uni-icons",{staticClass:"mt5",attrs:{type:"search",size:"20",color:"#999999"}}),i("v-uni-input",{staticClass:" w55vw text28",attrs:{type:"text",placeholder:"输入搜索内容"},on:{keydown:function(e){arguments[0]=e=t.$handleEvent(e),t.tjValue()}},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}})],1),i("v-uni-view",{staticClass:"bg91C42F col-white font-bold text28 px30 py10 radius40",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.tjValue()}}},[t._v("搜索")])],1)],1):"标题"==t.navType?i("v-uni-view",{staticClass:"bg4DB23F pt40"},[i("v-uni-view",{staticClass:"pt25 px30 grid grid-cols-3 pb20 justify-between"},[i("uni-icons",{staticStyle:{"text-align":"left","margin-left":"-10rpx"},attrs:{type:"left",size:"30",color:"#ffffff"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.back()}}}),i("v-uni-view",{staticClass:"text-center text36 font-bold col-white"},[t._v(t._s(t.title))]),i("v-uni-view",{staticClass:"w15"})],1)],1):"搜索2"==t.navType?i("v-uni-view",{staticClass:"bg4DB23F pt40"},[i("v-uni-view",{staticClass:"flex pt25 px30  items-center pb14 justify-between"},[i("uni-icons",{staticStyle:{"margin-left":"-10rpx"},attrs:{type:"left",size:"30",color:"#ffffff"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.back()}}}),i("v-uni-view",{staticClass:"bg-white flex items-center py10 px20 radius40"},[i("uni-icons",{staticClass:"mt5",attrs:{type:"search",size:"20",color:"#999999"}}),i("v-uni-input",{staticClass:" w55vw text28",attrs:{type:"text",placeholder:"输入搜索内容"}})],1),i("v-uni-view",{staticClass:"w140"})],1)],1):"solt"==t.navType?i("v-uni-view",{},[i("v-uni-view",{staticClass:"bg4DB23F pt40"},[i("v-uni-view",{staticClass:"pt25 px30 grid grid-cols-3 pb20 items-center"},[i("uni-icons",{staticStyle:{"text-align":"left","margin-left":"-10rpx"},attrs:{type:"left",size:"30",color:"#ffffff"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.back()}}}),i("v-uni-view",{staticClass:"text-center text36 font-bold col-white"},[t._v(t._s(t.title))]),i("v-uni-view",{staticClass:"flex justify-between",staticStyle:{"text-align":"center","line-height":"30rpx"}},[i("v-uni-view",{staticClass:"w15"}),t._t("default")],2)],1)],1)],1):t._e()],1)},n=[]},fcab:function(t,e,i){var s=i("5a18");s.__esModule&&(s=s.default),"string"===typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);var a=i("967d").default;a("31f7de44",s,!0,{sourceMap:!1,shadowMode:!1})}}]);