(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-home-components-orderOk-index"],{"15ba":function(t,e,i){"use strict";i.r(e);var a=i("f006"),n=i("63bc");for(var s in n)["default"].indexOf(s)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(s);i("c380");var c=i("828b"),r=Object(c["a"])(n["default"],a["b"],a["c"],!1,null,"2c502d53",null,!1,a["a"],void 0);e["default"]=r.exports},"5a18":function(t,e,i){var a=i("c86c");e=a(!1),e.push([t.i,".half-circle[data-v-2c502d53]{width:%?120?%;\n\t/* 设置宽度 */height:%?60?%;\n\t/* 设置高度（高度为宽度的一半） */background-color:#fff;\n\t/* 设置背景颜色 */border-radius:%?65?% %?65?% 0 0;\n\t/* 上半部分圆角 */box-shadow:0 %?-3?% %?6?% rgba(0,0,0,.2);padding:%?10?%;top:-46px}.border_BY[data-v-2c502d53]{border-radius:50% 50% 0 0}.shadow_tarbar[data-v-2c502d53]{box-shadow:%?0?% %?-3?% %?6?% %?1?% rgba(0,0,0,.4)}uni-image[data-v-2c502d53]{will-change:transform}.iconAll[data-v-2c502d53]{width:%?40?%;height:%?40?%}.tarBarClass[data-v-2c502d53]{width:100%;\n\t/* width: 380px; */position:fixed;bottom:0;\n\t/* border-top: 1px solid #D7D9EC; */background-color:#fff;padding:%?20?% %?0?%;border-radius:%?20?% %?20?% 0 0;box-shadow:%?0?% %?-3?% %?6?% %?1?% rgba(0,0,0,.2)}",""]),t.exports=e},"63bc":function(t,e,i){"use strict";i.r(e);var a=i("ba12"),n=i.n(a);for(var s in a)["default"].indexOf(s)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(s);e["default"]=n.a},"6dff":function(t,e,i){"use strict";i("6a54");var a=i("f5bd").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("fd3c");var n=a(i("15ba")),s=a(i("dc4b")),c={data:function(){return{birthday:"",mrdz:{},price:"",integral:"",transport:""}},components:{NavBar:n.default},onLoad:function(t){this._getUserAddressList(),this._computeIntegralGoodsOrder()},methods:{_computeIntegralGoodsOrder:function(){var t=this;s.default.computeIntegralGoodsOrder({post_params:{id:""}}).then((function(e){var i=e.data,a=i.price,n=i.integral,s=i.transport;t.price=a,t.integral=n,t.transport=s}))},_getUserAddressList:function(){var t=this;s.default.getUserAddressList({post_params:{currentPage:1,perPage:100}}).then((function(e){var i=e.data.data.list;i.map((function(e){"Y"==e.is_default&&(t.mrdz=e)}))}))},handUrl:function(t){uni.navigateTo({url:t})},payShop:function(){s.default.createIntegralGoodsOrder({post_params:{user_address_id:this.mrdz.id,id:""}}).then((function(t){var e=t.data,i=e.result,a=e.order_id;"a"==i?uni.showToast({title:"交易成功",icon:"none",duration:2e3}):"b"==i?uni.showToast({title:"积分不足",icon:"none",duration:2e3}):s.default.payIntegralGoodsOrder({post_params:{order_id:a}}).then((function(t){var e=t.data.pay_data;console.log("支付数据",e)}))}))}}};e.default=c},"6ecf":function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){}));var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"bgF9F9F9 h100vh"},[a("NavBar",{attrs:{navType:"标题",title:"订单确认"}}),a("v-uni-view",{staticClass:"p30 text28 "},[a("v-uni-view",{},[t._v("收货地址")]),t.mrdz.id?a("v-uni-view",{staticClass:"mt20 bg-white radius10 text24 p20 flex justify-between items-center"},[a("v-uni-view",{},[a("v-uni-view",{staticClass:"font-bold"},[t._v(t._s(t.mrdz.name)+" "+t._s(t.mrdz.mobile))]),a("v-uni-view",{staticClass:"text20 mt10 col999999",staticStyle:{"line-height":"16rpx"}},[t._v(t._s(t.mrdz.sort_address))]),a("v-uni-view",{},[t._v(t._s(t.mrdz.address))])],1),a("v-uni-view",{staticClass:"col4DB23F ",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handUrl("/pages/my/components/address/index")}}},[t._v("更换")])],1):a("v-uni-image",{staticClass:"w-full h140 mt20",attrs:{src:i("7550"),mode:""}}),a("v-uni-view",{staticClass:"mt40"},[t._v("订单商品")]),a("v-uni-view",{staticClass:"mt20 bg-white radius10 text24 p20 flex items-center"},[a("v-uni-view",{staticClass:"w128 h128"},[a("v-uni-image",{staticClass:"w128 h128 radius10",attrs:{src:i("bb47"),mode:""}})],1),a("v-uni-view",{staticClass:" ml30"},[a("v-uni-view",{staticClass:"text30 font-bold"},[t._v("精品多钻豪华富贵18K铂金520海...")]),a("v-uni-view",{staticClass:"flex justify-between mt10"},[a("v-uni-view",{staticClass:"flex"},[a("v-uni-view",{},[t._v("库存:9999")]),a("v-uni-view",{staticClass:"ml20"},[t._v("销量:9999")])],1),a("v-uni-view",{staticClass:"text30 col333333 font-bold"},[t._v("数量：1")])],1),a("v-uni-view",{staticClass:"flex text28 colFF0000 "},[a("v-uni-view",{},[t._v("积分 6666")]),a("v-uni-view",{staticClass:"ml20"},[t._v("￥ 6666")])],1)],1)],1)],1),a("v-uni-view",{staticClass:"w-full fixed bottom0"},[a("v-uni-view",{staticClass:"bg-white flex justify-between items-center py20 px30"},[a("v-uni-view",{staticClass:"flex items-center font-bold text30"},[a("v-uni-view",{staticClass:"col666666 "},[t._v("总计")]),a("v-uni-view",{staticClass:"colFF0000  ml30"},[a("v-uni-view",{},[t._v("积分 "+t._s(t.integral))]),a("v-uni-view",{},[t._v("￥"+t._s(t.price))])],1)],1),a("v-uni-view",{staticClass:"flex items-center text24"},[a("v-uni-view",{staticClass:"flex items-center"},[a("v-uni-view",{staticClass:"col666666 "},[t._v("邮费")]),a("v-uni-view",{staticClass:"colFF0000 ml10 "},[t._v("￥"+t._s(t.transport))])],1),a("v-uni-view",{staticClass:"font-bold text32 col-white px30 py20 bg4DB23F radius10 ml20",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.payShop.apply(void 0,arguments)}}},[t._v("提交支付")])],1)],1)],1)],1)},n=[]},7550:function(t,e,i){t.exports=i.p+"static/home/pointsMall/nulladdress.png"},"7eec":function(t,e,i){"use strict";i.r(e);var a=i("6ecf"),n=i("c6b9");for(var s in n)["default"].indexOf(s)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(s);var c=i("828b"),r=Object(c["a"])(n["default"],a["b"],a["c"],!1,null,"7f3e8ccc",null,!1,a["a"],void 0);e["default"]=r.exports},ba12:function(t,e,i){"use strict";i("6a54"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={props:{navType:{type:String,default:"搜索"},title:{type:String,default:""}},data:function(){return{value:""}},methods:{back:function(){uni.navigateBack()},tjValue:function(){this.$emit("searchVal",this.value)}}};e.default=a},bb47:function(t,e,i){t.exports=i.p+"static/home/pointsMall/shop.png"},c380:function(t,e,i){"use strict";var a=i("fcab"),n=i.n(a);n.a},c6b9:function(t,e,i){"use strict";i.r(e);var a=i("6dff"),n=i.n(a);for(var s in a)["default"].indexOf(s)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(s);e["default"]=n.a},f006:function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return s})),i.d(e,"a",(function(){return a}));var a={uniIcons:i("e7d1").default},n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{},["搜索"==t.navType?i("v-uni-view",{staticClass:"bg4DB23F pt40"},[i("v-uni-view",{staticClass:"flex pt25 px30  items-center pb14 justify-between"},[i("uni-icons",{staticStyle:{"margin-left":"-10rpx"},attrs:{type:"left",size:"30",color:"#ffffff"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.back()}}}),i("v-uni-view",{staticClass:"bg-white flex items-center py10 px20 radius40"},[i("uni-icons",{staticClass:"mt5",attrs:{type:"search",size:"20",color:"#999999"}}),i("v-uni-input",{staticClass:" w55vw text28",attrs:{type:"text",placeholder:"输入搜索内容"},on:{keydown:function(e){arguments[0]=e=t.$handleEvent(e),t.tjValue()}},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}})],1),i("v-uni-view",{staticClass:"bg91C42F col-white font-bold text28 px30 py10 radius40",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.tjValue()}}},[t._v("搜索")])],1)],1):"标题"==t.navType?i("v-uni-view",{staticClass:"bg4DB23F pt40"},[i("v-uni-view",{staticClass:"pt25 px30 grid grid-cols-3 pb20 justify-between"},[i("uni-icons",{staticStyle:{"text-align":"left","margin-left":"-10rpx"},attrs:{type:"left",size:"30",color:"#ffffff"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.back()}}}),i("v-uni-view",{staticClass:"text-center text36 font-bold col-white"},[t._v(t._s(t.title))]),i("v-uni-view",{staticClass:"w15"})],1)],1):"搜索2"==t.navType?i("v-uni-view",{staticClass:"bg4DB23F pt40"},[i("v-uni-view",{staticClass:"flex pt25 px30  items-center pb14 justify-between"},[i("uni-icons",{staticStyle:{"margin-left":"-10rpx"},attrs:{type:"left",size:"30",color:"#ffffff"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.back()}}}),i("v-uni-view",{staticClass:"bg-white flex items-center py10 px20 radius40"},[i("uni-icons",{staticClass:"mt5",attrs:{type:"search",size:"20",color:"#999999"}}),i("v-uni-input",{staticClass:" w55vw text28",attrs:{type:"text",placeholder:"输入搜索内容"}})],1),i("v-uni-view",{staticClass:"w140"})],1)],1):"solt"==t.navType?i("v-uni-view",{},[i("v-uni-view",{staticClass:"bg4DB23F pt40"},[i("v-uni-view",{staticClass:"pt25 px30 grid grid-cols-3 pb20 items-center"},[i("uni-icons",{staticStyle:{"text-align":"left","margin-left":"-10rpx"},attrs:{type:"left",size:"30",color:"#ffffff"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.back()}}}),i("v-uni-view",{staticClass:"text-center text36 font-bold col-white"},[t._v(t._s(t.title))]),i("v-uni-view",{staticClass:"flex justify-between",staticStyle:{"text-align":"center","line-height":"30rpx"}},[i("v-uni-view",{staticClass:"w15"}),t._t("default")],2)],1)],1)],1):t._e()],1)},s=[]},fcab:function(t,e,i){var a=i("5a18");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("967d").default;n("31f7de44",a,!0,{sourceMap:!1,shadowMode:!1})}}]);