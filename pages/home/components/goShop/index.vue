<template>
	<view class=" h100vh ">
		<view class="w-full bg-white">
			<view class="flex  pt38 w-full items-center pb14 justify-between">
				<view class="flex">
					<view class="w15"></view>
					<uni-icons type="left" size="30" @click="fhsyy()" color="#000000"></uni-icons>
				</view>
				<view class="w15"></view>
				<view class="flex text-center">
					<view class="">
						<view class="w40 h40">
							<image src="@/static/home/shopDetails/kf.png" class="w40 h40" mode=""></image>
						</view>
						<view class="text16">客服</view>
					</view>
					<view class="w30"></view>
				</view>
			</view>
			<!--  -->
			<view class="px40">
				<view class=" flex justify-between w-full items-center">
					<view class="flex items-center">
						<view class="w80 h80">
							<!-- <image src="@/static/home/shopDetails/shopImg.png" class="w80 h80" mode=""></image> -->
							<image :src="sjxx.logo" class="w80 h80" mode=""></image>
						</view>
						<view class="ml20">
							<view class="flex" style="line-height: 30rpx;">
								<view class="font-bold text24">{{sjxx.store_name}}</view>
								<view v-if="sjxx.is_platform=='Y'"
									class="font-bold text20 px10 ml20 col4DB23F border4DB23F radius4">自营</view>
							</view>
							<view class="flex">
								<uni-icons v-if="Number(sjxx.score)>=1" type="star-filled" color="#FF0000" class="mr10"
									size="16"></uni-icons>
								<uni-icons v-if="Number(sjxx.score)>=2" type="star-filled" color="#FF0000" class="mr10"
									size="16"></uni-icons>
								<uni-icons v-if="Number(sjxx.score)>=3" type="star-filled" color="#FF0000" class="mr10"
									size="16"></uni-icons>
								<uni-icons v-if="Number(sjxx.score)>=4" type="star-filled" color="#FF0000" class="mr10"
									size="16"></uni-icons>
								<uni-icons v-if="Number(sjxx.score)>=5" type="star-filled" color="#FF0000" class="mr10"
									size="16"></uni-icons>
								<view class="col666666 text24 mr10 ml10">评分</view>
								<view class="colFF0000 font-bold">{{sjxx.score}}</view>
							</view>
						</view>
					</view>
					<view class="">
						<view @click="_attentionStore()" v-if="sjxx.is_fans=='Y'" class="col4DB23F border4DB23F text24 radius10  text-center">已关注</view>
						<view @click="_attentionStore()" v-else class="bg4DB23F col-white text24 radius10  text-center">关注</view>
						<view class="text24 col666666">关注量:{{sjxx.fans}}</view>
					</view>
				</view>
				<view @click="()=>{$refs.popupShop.open('bottom')}"
					class="bgF5F5F5 text24 mt20 px20 py10 radius10 flex justify-between items-center">
					<view class="flex items-center">
						<view class="w28 h30">
							<image src="@/static/home/shopDetails/fw.png" class="w28 h30" mode=""></image>
						</view>
						<view class=" col333333 ml10">店铺服务</view>
					</view>
					<view class="col666666">{{sjfwStr}}</view>
				</view>
				<view class="h10"></view>
			</view>

		</view>
		<!--  -->
		<view v-if="sjxx.type=='a'" class="bg-white mt10 items-center py20 px40 flex justify-between">
			<view class="text20">
				<view class="col-black font-bold">商家地址</view>
				<view class="col666666 mt-10">{{sjxx.address}}</view>
			</view>
			<view class="text-center" >
				<view class="w28 h32 mx-auto">
					<image src="@/static/home/shopDetails/dt.png" class="w28 h32 mt5" mode=""></image>
				</view>
				<view class="col4DB23F text16">888km</view>
			</view>
		</view>
		<view class="mt20 bg-white p20">
			<view class="flex justify-evenly text28 col666666">
				<view @click="handTypeIndex(1)" :class="type_index==1?'font-bold col-black border_bot_4DB23F':''">全部商品
				</view>
				<view @click="handTypeIndex(2)" :class="type_index==2?'font-bold col-black border_bot_4DB23F':''">分类
				</view>
				<view @click="handTypeIndex(3)" :class="type_index==3?'font-bold col-black border_bot_4DB23F':''">评价
				</view>
				<view @click="handTypeIndex(4)" :class="type_index==4?'font-bold col-black border_bot_4DB23F':''">视频
				</view>
			</view>
		</view>
		<!-- 全部商品 -->
		<view v-if="type_index==1">
			<view class="bg-white text24 col666666 p20">
				<view class="flex justify-between items-center">
					<view class="flex items-center" @click="()=>{$refs.popup.open('bottom')}">
						<view class="">{{sort=='a'?'综合':'销量优先'}}</view>
						<image class="w15 h10 ml10" src="@/static/home/pointsMall/bottom.png" mode=""></image>
					</view>
					<view class="flex items-center" @click="()=>{$refs.popupPP.open('bottom')}">
						<view class="">{{ppObj.name?ppObj.name:'品牌'}}</view>
						<image class="w15 h10 ml10" src="@/static/home/pointsMall/bottom.png" mode=""></image>
					</view>
					<view :class="sfzy?'col4DB23F':''" @click="()=>{sfzy=!sfzy}">自营</view>
					<view class="flex items-center">
						<view class="">价格</view>
						<view class="bgF9F9F9 py10 radius10 ml10">
							<input type="text" v-model="price_start" class="w70 mx15" />
						</view>
						<view class="ml10">-</view>
						<view class="bgF9F9F9 py10 radius10 ml10">
							<input type="text" v-model="price_end" class="w70 mx15" />
						</view>
					</view>
					<view class="bg4DB23F col-white radius10 px20 py5" @click="_getGoodsList()">筛选</view>
				</view>
			</view>
			<!--  -->
			<view class="mt15 px30 grid grid-cols-2" style="grid-column-gap:30rpx">
				<view class="bg-white w340 mb20" v-for="(item,index) in shopList" :key="item.id">
					<!-- <image @click="handUrl('/pages/home/components/graphic/index')" src="@/static/home/sytjspslt1.png" class="w340 h340" mode=""></image> -->
					<image @click="handUrl('/pages/home/components/shopDetail/index?id='+item.id)" :src="item.cover_image"
						class="w340 h340" mode=""></image>
					<view class="px20 pb14">
						<view class="col333333 font-bold" v-if="item.name">{{item.name.length>22?item.name.slice(0,22)+'...':item.name}}</view>
						<view class="colFF0000 font-bold mt10">￥{{item.price}}</view>
						<view class="flex text20 mt10" style="line-height: normal">
							<view v-if="item.platform_goods=='Y'" class="bg4DB23F col-white px10 radius4 mr20">自营</view>
							<view class=" border4DB23F col4DB23F px10 radius4">销量 {{item.salled_number}}</view>
						</view>
						<view class="flex justify-between col666666 text20 mt10">
							<view class="">规格 ‌{{item.size_name}}‌</view>
							<view class="">库存 {{item.stock}}</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<!-- 分类 -->
		<view v-else-if="type_index==2">
			<view class="">
				<view class="flex overflow-auto bg-white example pt40 text24">
					<view class="px30 text28 text-center mb20" @click="oneClick(item)"
						v-for="(item,oneIndex) in typeAll" :key="oneIndex">
						<view style="white-space: nowrap;"
							:class="oneType == item.id?'font-bold col4DB23F':'col999999'">
							{{item.name}}
						</view>
					</view>
				</view>
				<view class="bgF5F5F5 h1"></view>
				<view class="flex overflow-auto bg-white example pt20 text24">
					<view class="px30 text28 text-center mb20" @click="twoClick(item)"
						v-for="(item,twoIndex) in typeAllTwo" :key="twoIndex">
						<view style="white-space: nowrap;"
							:class="twoType == item.id?'font-bold col4DB23F':'col999999'">
							{{item.name}}
						</view>
					</view>
				</view>
			</view>
			<!--  -->
			<view class="mt15 px30 grid grid-cols-2" style="grid-column-gap:30rpx">
				<view class="bg-white w340 mb20" v-for="(item,index) in shopList" :key="item.id">
					<!-- <image @click="handUrl('/pages/home/components/graphic/index')" src="@/static/home/sytjspslt1.png" class="w340 h340" mode=""></image> -->
					<image @click="handUrl('/pages/home/components/shopDetail/index?id='+item.id)" :src="item.cover_image"
						class="w340 h340" mode=""></image>
					<view class="px20 pb14">
						<view class="col333333 font-bold" v-if="item.name">{{item.name.length>22?item.name.slice(0,22)+'...':item.name}}</view>
						<view class="colFF0000 font-bold mt10">￥{{item.price}}</view>
						<view class="flex text20 mt10" style="line-height: normal">
							<view v-if="item.platform_goods=='Y'" class="bg4DB23F col-white px10 radius4 mr20">自营</view>
							<view class=" border4DB23F col4DB23F px10 radius4">销量 {{item.salled_number}}</view>
						</view>
						<view class="flex justify-between col666666 text20 mt10">
							<view class="">规格 ‌{{item.size_name}}‌</view>
							<view class="">库存 {{item.stock}}</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<!-- 评价 -->
		<view v-else-if="type_index==3">
			<view class="mb20 p30 bg-white" v-for="item in sjpj" :key="item.id">
				<view class="flex justify-between items-center mt30">
					<view class="flex items-center">
						<view class="w48 h48">
							<!-- <image src="/static/home/qjflal2.png" class="w48 h48 radius_bfb50" mode=""></image> -->
							<image :src="item.head_image" class="w48 h48 radius_bfb50" mode=""></image>
						</view>
						<view class="text26 font-bold ml20">{{item.nickname}}</view>
					</view>
					<view class="flex text20 ">
						<view class="colFF0000 font-bold" v-if="item.type=='a'">好评</view>
						<view class="col4DB23F font-bold" v-else-if="item.type=='b'">中评</view>
						<view class="col666666 font-bold" v-else>差评</view>
						<view class="ml30">{{item.create_time}}</view>
					</view>
				</view>
				<view class="text20 mt20" style="line-height: 30rpx;">{{item.content}}</view>
				<view class="image in item.images" :key="image">
					<image :src="image" class="w-full mb10 h389" mode=""></image>
				</view>
			</view>
		</view>
		<!-- 视频 -->
		<view v-else-if="type_index == 4">
			<view class="flex justify-between mt30 px30" style="flex-wrap: wrap;">
				<view class="bg-white w340 mb20" v-for="(item,index_foue) in [1,2,1,2,1,2]" :key="index_foue">
					<image @click="handUrl('/pages/home/components/video/index')"
						:src="require('@/static/community/sq'+item+'.png')" class="w340 h540" mode=""></image>
					<view class="px20 col333333 pb14">
						<view class="font-bold">节省时间和精力‌：通过选择全屋整装或整装装修</view>
						<view class="flex justify-between text20 mt10">
							<view class="flex items-center">
								<image src="@/static/home/qjflal2.png" class="w28 h28 radius20" mode="">
								</image>
								<view class="ml10">一只小海螺</view>
							</view>
							<view class="flex items-center">
								<uni-icons type="eye" size="20" color="#4DB23F"></uni-icons>
								<view class="ml10">6666</view>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<!-- 普通综合弹窗 -->
		<uni-popup ref="popup" background-color="#fff" borderRadius="20rpx 20rpx 0rpx 0rpx">
			<view class="p40">
				<view class="flex justify-between items-center">
					<view class="w15"></view>
					<uni-icons type="closeempty" size="20" @click="()=>{$refs.popup.close()}"></uni-icons>
				</view>
				<view class="px20">
					<view class="my20" :class="sort=='a'?'col4DB23F':''" @click="checkSort('a')">综合</view>
					<view class="my20" :class="sort=='b'?'col4DB23F':''" @click="checkSort('b')">销量优先</view>
				</view>
			</view>
		</uni-popup>
		<!-- 品牌弹窗 -->
		<uni-popup ref="popupPP" background-color="#fff" borderRadius="20rpx 20rpx 0rpx 0rpx">
			<view class="p40">
				<view class="flex justify-between items-center">
					<view class="w15"></view>
					<uni-icons type="closeempty" size="20" @click="()=>{$refs.popupPP.close()}"></uni-icons>
				</view>
				<view class="px20">
					<view class="my20" :class="ppIndex==item.id?'col4DB23F':''" @click="checkIndex(item)"
						v-for="item in ppList" :key="item.id">{{item.name}}</view>
				</view>
			</view>
		</uni-popup>
		<!-- 店铺信息 -->
		<uni-popup ref="popupShop" background-color="#fff" borderRadius="20rpx 20rpx 0rpx 0rpx">
			<view class="p40">
				<view class="flex justify-between items-center">
					<view class="w15"></view>
					<view class="">
						<view class="flex">
							<view class="flex mx-auto h60 items-center">
								<!-- <image src="@/static/home/shopDetails/shopImg.png" class="w60 h60" mode=""></image> -->
								<image :src="sjxx.logo" class="w60 h60" mode=""></image>
								<view class="text24 col333333 ml20">{{sjxx.store_name}}</view>
							</view>
						</view>
						<view class="flex items-center">
							<view class="text20 col666666">综合体验:</view>
							<uni-icons v-if="sjxx.score>=1" type="star-filled" color="#FF0000" class="mr10"
								size="16"></uni-icons>
							<uni-icons v-if="sjxx.score>=2" type="star-filled" color="#FF0000" class="mr10"
								size="16"></uni-icons>
							<uni-icons v-if="sjxx.score>=3" type="star-filled" color="#FF0000" class="mr10"
								size="16"></uni-icons>
							<uni-icons v-if="sjxx.score>=4" type="star-filled" color="#FF0000" class="mr10"
								size="16"></uni-icons>
							<uni-icons v-if="sjxx.score>=5" type="star-filled" color="#FF0000" class="mr10"
								size="16"></uni-icons>
						</view>
					</view>
					<uni-icons type="closeempty" size="20" @click="()=>{$refs.popupShop.close()}"></uni-icons>
				</view>
				<view class="px20 text24 col666666">
					<view class=" col-black text28 font-bold">服务保障</view>
					<view class="" v-for="item in sjfw" :key="item.id">
						<view class="mt20">{{item.name}}</view>
						<view class="text20" style="line-height: 25rpx;">{{item.introduce}}</view>
					</view>
					<!-- <view class="mt20">坏了包赔</view>
					<view class="text20" style="line-height: 25rpx;">若发现支持该服务的商品有变质、腐烂、破损等情况，可在24小时内申请退款，商家将在24小时内处理退款申请</view>
					<view class="mt20">全场包邮</view>
					<view class="text20" style="line-height: 25rpx;">所有商品包邮(偏远地区除外)</view> -->
				</view>
			</view>
		</uni-popup>
	</view>
</template>

<script>
	import NavBar from '@/components/navbar/index.vue'
	import api from '@/request/allApi.js'
	export default {
		data() {
			return {
				store_id: '', //商家id
				sjxx: {}, //商家信息
				sort: 'a', //a综合 b销量优先
				ppList: [], //品牌、
				ppIndex: '', //品牌id
				ppObj:{},//品牌obj
				price_start: '', //价格起
				price_end: '', //价格止  
				sfzy: false, //是否自营

				shopList: [], //商品列表

				sjfw: [], //商家服务
				sjfwStr: '', //商家服务标题字符串

				type_index: 1, //当前所属分类

				oneType: 1, //商品分类1 当前
				twoType: 1, //商品分类2 当前

				typeAll: [], //所以商品分类
				typeAllTwo: [], //商品分类 二级

				sjpj: [] //商家评价
			}
		},
		components: {
			NavBar,
		},
		onLoad(option) {
			this.store_id = option.store_id
			this._getGoodsBrandList() //品牌列表
			this._userGetStoreInfo() //商家信息
			this._getGoodsTypeList()//分类
		},
		methods: {
			//关注/取消关注商家 
			_attentionStore(){
				uni.showLoading({
					title: "加载中"
				})
				api.attentionStore({
					post_params:{
						store_id:this.store_id
					}
				}).then((res)=>{
					// uni.showToast({
					// 	title: '加入成功！',
					// 	icon: 'success',
					// 	duration: 2000
					// })
					uni.hideLoading()
					console.log('关注结果',res.data);
				})
			},
			// 获取商家评价
			_userGetStoreEvaluate() {
				api.userGetStoreEvaluate({
					post_params: {
						store_id: this.store_id,
						type: 'a', //a好评 b中评 c差评  
						currentPage: 1,
						perPage: 100
					}
				}).then((res) => {
					const {
						list
					} = res.data.data
					console.log('商家评价', list);
					this.sjpj = list
				})
			},
			// 所有分类
			_getGoodsTypeList() {
				api.getGoodsTypeList({
					post_params:{
						store_id:this.store_id
					}
				}).then((res) => {
					const {
						list
					} = res.data.data
					this.typeAll = list
					this.oneType  = list[0].id
					this.typeAllTwo = list[0].children //默认
				})
			},
			// 一级分类
			oneClick(item) {
				this.oneType = item.id
				this.typeAllTwo = item.children
			},
			// 二级分类
			twoClick(item) {
				this.twoType = item.id
				this._getGoodsList()
			},
			// 所属分类切换
			handTypeIndex(index) {
				this.type_index = index
			},
			// 商品列表
			_getGoodsList() {
				api.getGoodsList({
					post_params: {
						key_word: '', //关键词
						store_id: this.store_id, //商家ID  
						integral_goods_type_id: this.twoType, //商品分类ID ==>二级分类
						price_start: this.price_start, //价格起  
						price_end: this.price_end, //价格止  
						platform_goods: this.sfzy ? 'Y' : 'N', //自营商品  Y是 N否  
						brand_id: this.ppIndex, //品牌ID  
						sort: this.sort, //a综合 b销量优先
						currentPage: 1,
						perPage: 10
					}
				}).then((res) => {
					console.log('商品数据', res.data);
					const {
						list
					} = res.data.data
					this.shopList = list
				})
			},
			// 商品品牌列表
			_getGoodsBrandList() {
				api.getGoodsBrandList().then((res) => {
					const {
						list
					} = res.data.data
					this.ppList = list
				})
			},
			checkIndex(item) {
				this.ppIndex = item.id
				this.ppObj = item
				this.$refs.popupPP.close()
			},
			checkSort(index) {
				this.sort = index
				this.$refs.popup.close()
			},
			// 用户获取商家信息
			_userGetStoreInfo() {
				api.userGetStoreInfo({
					post_params: {
						store_id: this.store_id
					}
				}).then((res) => {
					console.log('商家信息', res.data);
					const {
						data
					} = res.data
					this.sjxx = data
					this.sjfw = data.services
					data.services.map((item) => {
						this.sjfwStr = this.sjfwStr + item.name + '·'
					})
					this.sjfwStr = this.sjfwStr.substring(0, this.sjfwStr.length - 1);
					this._getGoodsList() //获取店铺商品信息
					this._userGetStoreEvaluate() //商家评价

				})
			},
			handUrl(url) {
				uni.navigateTo({
					url: url
				})
			},
			fhsyy() {
				uni.navigateBack()
			}

		}
	}
</script>

<style>
	.example::-webkit-scrollbar {
		display: none;
	}

	.checkboxItem {
		width: 96rpx;
		height: 8rpx;
		background: #4DB23F;
	}
</style>