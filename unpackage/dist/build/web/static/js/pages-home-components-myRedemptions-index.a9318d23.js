(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-home-components-myRedemptions-index"],{"0ddc":function(t,e,i){"use strict";i.r(e);var n=i("9fed"),a=i("a8f2");for(var s in a)["default"].indexOf(s)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(s);i("174f");var o=i("828b"),c=Object(o["a"])(a["default"],n["b"],n["c"],!1,null,"fb80d4e4",null,!1,n["a"],void 0);e["default"]=c.exports},"15ba":function(t,e,i){"use strict";i.r(e);var n=i("f006"),a=i("63bc");for(var s in a)["default"].indexOf(s)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(s);i("c380");var o=i("828b"),c=Object(o["a"])(a["default"],n["b"],n["c"],!1,null,"2c502d53",null,!1,n["a"],void 0);e["default"]=c.exports},"174f":function(t,e,i){"use strict";var n=i("9eb4"),a=i.n(n);a.a},4630:function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return s})),i.d(e,"a",(function(){return n}));var n={uniIcons:i("e7d1").default},a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"uni-steps"},[i("v-uni-view",{class:["column"===t.direction?"uni-steps__column":"uni-steps__row"]},[i("v-uni-view",{class:["column"===t.direction?"uni-steps__column-text-container":"uni-steps__row-text-container"]},t._l(t.options,(function(e,n){return i("v-uni-view",{key:n,class:["column"===t.direction?"uni-steps__column-text":"uni-steps__row-text"]},[i("v-uni-text",{class:["column"===t.direction?"uni-steps__column-desc":"uni-steps__row-desc"],style:{color:n===t.active?t.activeColor:t.deactiveColor}},[t._v(t._s(e.desc))]),i("v-uni-text",{class:["column"===t.direction?"uni-steps__column-title":"uni-steps__row-title"],style:{color:n===t.active?t.activeColor:t.deactiveColor}},[t._v(t._s(e.title))])],1)})),1),i("v-uni-view",{class:["column"===t.direction?"uni-steps__column-container":"uni-steps__row-container"]},t._l(t.options,(function(e,n){return i("v-uni-view",{key:n,class:["column"===t.direction?"uni-steps__column-line-item":"uni-steps__row-line-item"],style:{height:"column"===t.direction?t.heightArr[n]+"px":"14px"}},[i("v-uni-view",{staticClass:"h16"}),n===t.active?i("v-uni-view",{class:["column"===t.direction?"uni-steps__column-check":"uni-steps__row-check"]},[i("uni-icons",{attrs:{color:t.activeColor,type:t.activeIcon,size:"14"}})],1):i("v-uni-view",{class:["column"===t.direction?"uni-steps__column-circle":"uni-steps__row-circle"],style:{backgroundColor:n<t.active?t.activeColor:"#999999"}}),i("v-uni-view",{class:["column"===t.direction?"uni-steps__column-line":"uni-steps__row-line","column"===t.direction?"uni-steps__column-line--after":"uni-steps__row-line--after"],style:{backgroundColor:n<t.active&&n!==t.options.length-1?t.activeColor:n===t.options.length-1?"transparent":"#999999"}})],1)})),1)],1)],1)},s=[]},5262:function(t,e,i){"use strict";i("6a54"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("64aa"),i("5c47"),i("fd3c");var n={name:"UniSteps",props:{direction:{type:String,default:"row"},activeColor:{type:String,default:"#2979FF"},deactiveColor:{type:String,default:"#B7BDC6"},active:{type:Number,default:0},activeIcon:{type:String,default:"checkbox-filled"},options:{type:Array,default:function(){return[]}}},data:function(){return{heightArr:[]}},mounted:function(){if("column"===this.direction){var t=this;uni.createSelectorQuery().in(this).selectAll(".uni-steps__column-text").boundingClientRect((function(e){t.heightArr=e.map((function(t){return t.height+1}))})).exec()}}};e.default=n},5460:function(t,e,i){"use strict";i("6a54");var n=i("f5bd").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("fd3c");var a=n(i("15ba")),s=n(i("dc4b")),o={data:function(){return{status:"b",active:0,list2:[{title:"买家下单",desc:"2018-11-11"},{title:"卖家发货",desc:"2018-11-12"},{title:"买家签收",desc:"2018-11-13"},{title:"交易完成",desc:"2018-11-14"}],dataList:[],lookData:{}}},components:{NavBar:a.default},onLoad:function(){this._getIntegralGoodsOrderList()},methods:{_overIntegralGoodsOrder:function(t){var e=this;s.default.overIntegralGoodsOrder({post_params:{id:t.id}}).then((function(t){console.log("收货成功"),e.status="c",e._getIntegralGoodsOrderList()}))},lookWl:function(t){this.lookData=t,this.$refs.popupLook.open("bottom"),t.transport_detail&&(this.list2=t.transport_detail.map((function(t){return{title:t.des,desc:t.time}})))},_getIntegralGoodsOrderList:function(){var t=this;s.default.getIntegralGoodsOrderList({post_params:{status:this.status,currentPage:1,perPage:10}}).then((function(e){var i=e.data.data.list;t.dataList=i}))},copy:function(t){uni.setClipboardData({data:t,success:function(){uni.showToast({title:"复制成功"})}})}}};e.default=o},"5a18":function(t,e,i){var n=i("c86c");e=n(!1),e.push([t.i,".half-circle[data-v-2c502d53]{width:%?120?%;\n\t/* 设置宽度 */height:%?60?%;\n\t/* 设置高度（高度为宽度的一半） */background-color:#fff;\n\t/* 设置背景颜色 */border-radius:%?65?% %?65?% 0 0;\n\t/* 上半部分圆角 */box-shadow:0 %?-3?% %?6?% rgba(0,0,0,.2);padding:%?10?%;top:-46px}.border_BY[data-v-2c502d53]{border-radius:50% 50% 0 0}.shadow_tarbar[data-v-2c502d53]{box-shadow:%?0?% %?-3?% %?6?% %?1?% rgba(0,0,0,.4)}uni-image[data-v-2c502d53]{will-change:transform}.iconAll[data-v-2c502d53]{width:%?40?%;height:%?40?%}.tarBarClass[data-v-2c502d53]{width:100%;\n\t/* width: 380px; */position:fixed;bottom:0;\n\t/* border-top: 1px solid #D7D9EC; */background-color:#fff;padding:%?20?% %?0?%;border-radius:%?20?% %?20?% 0 0;box-shadow:%?0?% %?-3?% %?6?% %?1?% rgba(0,0,0,.2)}",""]),t.exports=e},"63bc":function(t,e,i){"use strict";i.r(e);var n=i("ba12"),a=i.n(n);for(var s in n)["default"].indexOf(s)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(s);e["default"]=a.a},"7bc7":function(t,e,i){var n=i("c86c");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/* 水平间距 */\n/* 水平间距 */.uni-steps[data-v-1b10735e]{display:flex;width:100%;flex-direction:column}.uni-steps__row[data-v-1b10735e]{display:flex;flex-direction:column}.uni-steps__column[data-v-1b10735e]{display:flex;flex-direction:row-reverse}.uni-steps__row-text-container[data-v-1b10735e]{display:flex;flex-direction:row;align-items:flex-end;margin-bottom:8px}.uni-steps__column-text-container[data-v-1b10735e]{display:flex;flex-direction:column;flex:1}.uni-steps__row-text[data-v-1b10735e]{display:inline-flex;flex:1;flex-direction:column}.uni-steps__column-text[data-v-1b10735e]{padding:6px 0;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#fff;display:flex;flex-direction:column}.uni-steps__row-title[data-v-1b10735e]{font-size:14px;line-height:16px;text-align:center}.uni-steps__column-title[data-v-1b10735e]{font-size:14px;text-align:left;line-height:18px}.uni-steps__row-desc[data-v-1b10735e]{font-size:12px;line-height:14px;text-align:center}.uni-steps__column-desc[data-v-1b10735e]{font-size:12px;text-align:left;line-height:18px}.uni-steps__row-container[data-v-1b10735e]{display:flex;flex-direction:row}.uni-steps__column-container[data-v-1b10735e]{display:inline-flex;width:30px;flex-direction:column}.uni-steps__row-line-item[data-v-1b10735e]{display:inline-flex;flex-direction:row;flex:1;height:14px;line-height:14px;align-items:center;justify-content:center}.uni-steps__column-line-item[data-v-1b10735e]{display:flex;flex-direction:column;align-items:center;justify-content:center}.uni-steps__row-line[data-v-1b10735e]{flex:1;height:1px;background-color:#b7bdc6}.uni-steps__column-line[data-v-1b10735e]{width:1px;background-color:#b7bdc6}.uni-steps__row-line--after[data-v-1b10735e]{-webkit-transform:translateX(1px);transform:translateX(1px)}.uni-steps__column-line--after[data-v-1b10735e]{flex:1;-webkit-transform:translateY(1px);transform:translateY(1px)}.uni-steps__row-line--before[data-v-1b10735e]{-webkit-transform:translateX(-1px);transform:translateX(-1px)}.uni-steps__column-line--before[data-v-1b10735e]{height:6px;-webkit-transform:translateY(-13px);transform:translateY(-13px)}.uni-steps__row-circle[data-v-1b10735e]{width:5px;height:5px;border-radius:50%;background-color:#b7bdc6;margin:0 3px}.uni-steps__column-circle[data-v-1b10735e]{width:5px;height:5px;border-radius:50%;background-color:#b7bdc6;margin:4px 0 5px 0}.uni-steps__row-check[data-v-1b10735e]{margin:0 6px}.uni-steps__column-check[data-v-1b10735e]{height:14px;line-height:14px;margin:2px 0}',""]),t.exports=e},"8a9b":function(t,e,i){var n=i("7bc7");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("967d").default;a("8a9ca72e",n,!0,{sourceMap:!1,shadowMode:!1})},"9eb4":function(t,e,i){var n=i("f59a");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("967d").default;a("fd2ef234",n,!0,{sourceMap:!1,shadowMode:!1})},"9fed":function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return s})),i.d(e,"a",(function(){return n}));var n={uniPopup:i("80c8").default,uniIcons:i("e7d1").default,uniSteps:i("abdc").default},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"bgF9F9F9 h100vh"},[n("NavBar",{attrs:{navType:"标题",title:"我的兑换"}}),n("v-uni-view",{staticClass:"p30"},[n("v-uni-view",{staticClass:"flex text28 col666666 justify-between px50"},[n("v-uni-view",{class:"a"==t.status?"border_bottom_two":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),function(){t.status="a"}.apply(void 0,arguments)}}},[t._v("待发货")]),n("v-uni-view",{class:"b"==t.status?"border_bottom_two":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),function(){t.status="b"}.apply(void 0,arguments)}}},[t._v("待收货")]),n("v-uni-view",{class:"c"==t.status?"border_bottom_two":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),function(){t.status="c"}.apply(void 0,arguments)}}},[t._v("已签收")])],1),t._l(t.dataList,(function(e){return n("v-uni-view",{key:e.id,staticClass:"bg-white p20 radius10 mt30"},[n("v-uni-view",{},[t._v("订单编号："+t._s(e.id))]),n("v-uni-view",{staticClass:"mt20 bgF5F5F5 radius10 text24 p20 flex items-center"},[n("v-uni-view",{staticClass:"w128 h128"},[n("v-uni-image",{staticClass:"w128 h128 radius10",attrs:{src:i("bb47"),mode:""}})],1),n("v-uni-view",{staticClass:"col333333 ml30 w-full"},[e.name?n("v-uni-view",[e.name.length<17?n("v-uni-view",{staticClass:"text30 font-bold"},[t._v(t._s(e.name))]):n("v-uni-view",{staticClass:"text30 font-bold "},[t._v(t._s(e.name.slice(0,16)+"..."))])],1):t._e(),n("v-uni-view",{staticClass:"flex mt20",staticStyle:{"line-height":"28rpx"}},[n("v-uni-view",{},[t._v(t._s(e.store_name))]),"Y"==e.platform_goods?n("v-uni-text",{staticClass:"ml20 text20 col4DB23F border4DB23F radius4 px10"},[t._v("自营")]):t._e()],1),n("v-uni-view",{staticClass:"flex justify-between"},[n("v-uni-view",{staticClass:"flex text28 colFF0000 "},[n("v-uni-view",{},[t._v("积分 "+t._s(e.integral))]),n("v-uni-view",{staticClass:"ml20"},[t._v("￥ "+t._s(e.price))])],1),n("v-uni-view",{staticClass:"text28 col333333 font-bold"},[t._v("数量：1")])],1)],1)],1),"b"==t.status?n("v-uni-view",{staticClass:"flex justify-between mt30"},[n("v-uni-view",{}),n("v-uni-view",{staticClass:"flex"},[n("v-uni-view",{staticClass:" col4DB23F border4DB23F radius10 px20 py6",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.lookWl(e)}}},[t._v("查看物流")]),n("v-uni-view",{staticClass:" col-white bg4DB23F radius10 px20 py6 ml40",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t._overIntegralGoodsOrder(e)}}},[t._v("确认收货")])],1)],1):t._e()],1)}))],2),n("uni-popup",{ref:"popupLook",attrs:{type:"bottom","border-radius":"10px 10px 0 0"}},[n("v-uni-view",{staticClass:"bgF9F9F9 p30",staticStyle:{"border-radius":"10px 10px 0 0"}},[n("v-uni-view",{staticClass:"flex justify-between items-center"},[n("v-uni-view",{staticClass:"text28 font-bold"},[t._v("物流详情")]),n("uni-icons",{attrs:{type:"closeempty",size:"20"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),function(){t.$refs.popupLook.close()}.apply(void 0,arguments)}}})],1),n("v-uni-view",{staticClass:"bg-white radius10 py30 mt20"},[n("v-uni-view",{staticClass:"flex px30 items-center"},[n("v-uni-view",{},[t._v(t._s(t.lookData.transport_name)+" "+t._s(t.lookData.transport_number))]),n("v-uni-view",{staticClass:"text20 col4DB23F ml10",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.copy(t.lookData.transport_number)}}},[t._v("复制")])],1),n("v-uni-view",{staticClass:"bgF5F5F5 h1 my20"}),n("v-uni-view",{staticClass:"px30"},[n("uni-steps",{attrs:{options:t.list2,"active-color":"#4DB23F",deactiveColor:"#666666",active:t.active,direction:"column"}})],1)],1)],1)],1)],1)},s=[]},a8f2:function(t,e,i){"use strict";i.r(e);var n=i("5460"),a=i.n(n);for(var s in n)["default"].indexOf(s)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(s);e["default"]=a.a},abdc:function(t,e,i){"use strict";i.r(e);var n=i("4630"),a=i("d095");for(var s in a)["default"].indexOf(s)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(s);i("dd19");var o=i("828b"),c=Object(o["a"])(a["default"],n["b"],n["c"],!1,null,"1b10735e",null,!1,n["a"],void 0);e["default"]=c.exports},ba12:function(t,e,i){"use strict";i("6a54"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={props:{navType:{type:String,default:"搜索"},title:{type:String,default:""}},data:function(){return{value:""}},methods:{back:function(){uni.navigateBack()},tjValue:function(){this.$emit("searchVal",this.value)}}};e.default=n},bb47:function(t,e,i){t.exports=i.p+"static/home/pointsMall/shop.png"},c380:function(t,e,i){"use strict";var n=i("fcab"),a=i.n(n);a.a},d095:function(t,e,i){"use strict";i.r(e);var n=i("5262"),a=i.n(n);for(var s in n)["default"].indexOf(s)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(s);e["default"]=a.a},dd19:function(t,e,i){"use strict";var n=i("8a9b"),a=i.n(n);a.a},f006:function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return s})),i.d(e,"a",(function(){return n}));var n={uniIcons:i("e7d1").default},a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{},["搜索"==t.navType?i("v-uni-view",{staticClass:"bg4DB23F pt40"},[i("v-uni-view",{staticClass:"flex pt25 px30  items-center pb14 justify-between"},[i("uni-icons",{staticStyle:{"margin-left":"-10rpx"},attrs:{type:"left",size:"30",color:"#ffffff"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.back()}}}),i("v-uni-view",{staticClass:"bg-white flex items-center py10 px20 radius40"},[i("uni-icons",{staticClass:"mt5",attrs:{type:"search",size:"20",color:"#999999"}}),i("v-uni-input",{staticClass:" w55vw text28",attrs:{type:"text",placeholder:"输入搜索内容"},on:{keydown:function(e){arguments[0]=e=t.$handleEvent(e),t.tjValue()}},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}})],1),i("v-uni-view",{staticClass:"bg91C42F col-white font-bold text28 px30 py10 radius40",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.tjValue()}}},[t._v("搜索")])],1)],1):"标题"==t.navType?i("v-uni-view",{staticClass:"bg4DB23F pt40"},[i("v-uni-view",{staticClass:"pt25 px30 grid grid-cols-3 pb20 justify-between"},[i("uni-icons",{staticStyle:{"text-align":"left","margin-left":"-10rpx"},attrs:{type:"left",size:"30",color:"#ffffff"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.back()}}}),i("v-uni-view",{staticClass:"text-center text36 font-bold col-white"},[t._v(t._s(t.title))]),i("v-uni-view",{staticClass:"w15"})],1)],1):"搜索2"==t.navType?i("v-uni-view",{staticClass:"bg4DB23F pt40"},[i("v-uni-view",{staticClass:"flex pt25 px30  items-center pb14 justify-between"},[i("uni-icons",{staticStyle:{"margin-left":"-10rpx"},attrs:{type:"left",size:"30",color:"#ffffff"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.back()}}}),i("v-uni-view",{staticClass:"bg-white flex items-center py10 px20 radius40"},[i("uni-icons",{staticClass:"mt5",attrs:{type:"search",size:"20",color:"#999999"}}),i("v-uni-input",{staticClass:" w55vw text28",attrs:{type:"text",placeholder:"输入搜索内容"}})],1),i("v-uni-view",{staticClass:"w140"})],1)],1):"solt"==t.navType?i("v-uni-view",{},[i("v-uni-view",{staticClass:"bg4DB23F pt40"},[i("v-uni-view",{staticClass:"pt25 px30 grid grid-cols-3 pb20 items-center"},[i("uni-icons",{staticStyle:{"text-align":"left","margin-left":"-10rpx"},attrs:{type:"left",size:"30",color:"#ffffff"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.back()}}}),i("v-uni-view",{staticClass:"text-center text36 font-bold col-white"},[t._v(t._s(t.title))]),i("v-uni-view",{staticClass:"flex justify-between",staticStyle:{"text-align":"center","line-height":"30rpx"}},[i("v-uni-view",{staticClass:"w15"}),t._t("default")],2)],1)],1)],1):t._e()],1)},s=[]},f59a:function(t,e,i){var n=i("c86c");e=n(!1),e.push([t.i,".border_bottom_two[data-v-fb80d4e4]{border-bottom:%?8?% solid #4db23f;font-weight:700;color:#000}",""]),t.exports=e},fcab:function(t,e,i){var n=i("5a18");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("967d").default;a("31f7de44",n,!0,{sourceMap:!1,shadowMode:!1})}}]);