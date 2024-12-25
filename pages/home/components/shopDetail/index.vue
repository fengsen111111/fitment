<template>
	<view class=" h100vh ">
		<view class="relative">
			<!-- <image src="@/static/home/shopDetails/shopDetails.png" class="w-full h780" mode=""></image> -->
			<image :src="imgUrl" class="w-full h780" mode=""></image>
			<view class="absolute top0 w-full">
				<view class="flex pt38 px10 w-full items-center pb14 justify-between">
					<uni-icons type="left" size="30"  @click="fhsyy()" color="#ffffff"></uni-icons>
					<view class="w15"></view>
					<view class="flex mr40">
						<view class="w32 h32 mr50">
							<!-- <image src="@/static/home/shopDetails/sc.png" class="w32 h32" mode=""></image> -->
							<uni-icons @click="_collectionGoods()" type="star" v-if="details.is_collection=='Y'" size="30" color="#FBB333"></uni-icons>
							<uni-icons @click="_collectionGoods()" type="star" v-else size="30" color="#ffffff"></uni-icons>
						</view>
						<view class="w32 h32">
							<!-- <image src="@/static/home/shopDetails/fx.png" class="w32 h32" mode=""></image> -->
							<uni-icons type="redo" size="30" color="#ffffff"></uni-icons>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="p30 bg-white">
			<view class="flex overflow-auto example">
				<view v-for="item in details.images" class="mr50 text28 text-center " :key="item">
					<image :src="item" class="w120 h120 radius10" mode=""></image>
				</view>
			</view>
			<view class="flex justify-between mt50">
				<view class="flex colFF0000 text50 font-bold items-center">
					<view class="">￥{{details.price}}</view>
				</view>
				<view class="col333333 text24">规格:{{details.size_name}}</view>
			</view>
			<view class="mt20 flex"  style="line-height: 30rpx;">
				<view class="borderFF0000 text24 px10 py5 colFF0000 radius4 mr20" v-for="item in details.signs" :key="item">{{item}}</view>
			<!-- 	<view class="borderFF0000 text24 px10 py5 colFF0000 radius4 mr20">10元无门槛??</view>
				<view class="borderFF0000 text24 px10 py5 colFF0000 radius4 mr20">6折全场通用??</view> -->
			</view>
			<view class="mt20 font-bold text30">{{details.name}}</view>
			<view class="mt20 flex col4DB23F text24 "  style="line-height: 30rpx;">
				<view class=" border4DB23F px10 py5  radius4 mr10" v-for="(iss,index_ser) in details.services" :key="index_ser">{{iss.name}}</view>
				<!-- <view class=" border4DB23F px10 py5  radius4 mr10">拼团</view>
				<view class=" border4DB23F px10 py5  radius4 mr10">积分抵现</view>
				<view class=" border4DB23F px10 py5  radius4 mr10">包邮</view> -->
			</view>
			<view class="flex justify-between items-center mt20">
				<view class="flex items-center">
					<view class="flex">
						<view class="col-white bgFA6C2F px16">销量</view>
						<view class="colFA6C2F borderFA6C2F px16">{{details.salled_number}}</view>
					</view>
					<view class="flex ml30">
						<view class="col-white bg36A9FC px16">库存</view>
						<view class="col36A9FC border36A9FC px16">{{details.stock}}</view>
					</view>
				</view>
			</view>
			
			<view class="flex mt25 items-baseline">
				<view class="text24">有 {{details.team_number}} 人拼团</view>
				<view class="text32 colFBB333 font-bold ml10">参与可立即拼成</view>
			</view>
			
			<view class="">
				<view class="flex items-center mt25" v-for="item in details.team" :key="item.id">
					<view class="w60 h60">
						<!-- <image src="/static/home/qjflal2.png" class="w60 h60 radius_bfb50" mode=""></image> -->
						<image :src="item.head_image" class="w60 h60 radius_bfb50" mode=""></image>
					</view>
					<view class="text30 font-bold ml20">{{item.nickname}}</view>
					<view class="font-bold text-center ml85">
						<view class="text24 colFF0000">拼团结束时间</view>
						<view class="text28">{{item.end_time}}</view>
					</view>
					<view class="font-bold bg4DB23F col-white text32 radius10 ml30 px28 py17">参与拼团</view>
				</view>
			</view>
			
			<view class="">
				<view @click="()=>{$refs.popupSer.open('bottom')}" v-for="item in details.services" :key="item.content" class="flex mt40 items-center justify-between text28 col666666">
					<view class="">{{item.content.length>21?item.content.slice(0,21)+'...':item.content}}</view>
					<uni-icons type="right" color="#8D8D8D" size="20"></uni-icons>
				</view>
				<!-- <view class="flex mt40 items-center justify-between text28 col666666">
					<view class="">提供最好的产品,满足客户的需求</view>
					<uni-icons type="right" color="#8D8D8D" size="20"></uni-icons>
				</view> -->
			</view>
		</view>
		
		<view class="p30 bg-white mt20">
			<view class=" col333333 font-bold text28">商品详情</view>
			<view class="bgF5F5F5 py20 px50 col999999 mt20 radius10">
				<!-- 展开 -->
				<view v-if="sfzk">
					<view class="flex my10 justify-between" v-for="(item,index) in details.attributes" :key="index">
						<view class="">{{item.key}}</view>
						<view class="col-black">{{item.value}}</view>
					</view>
				</view>
				<!-- 不展开 -->
				<view v-else >
					<view class="flex my10 justify-between" v-for="(item,index_two) in details.attribute_two" :key="index_two">
						<view class="">{{item.key}}</view>
						<view class="col-black">{{item.value}}</view>
					</view>
				</view>
				<view class="flex items-center">
					<view class="col4DB23F text20" @click="()=>{sfzk=!sfzk}">{{sfzk?'收起':'查看更多'}}</view>
					<uni-icons type="right" color="#4DB23F" class="ml20" size="14"></uni-icons>
				</view>
			</view>
		</view>
		
		<view class="bg-white p30 mt20">
			<view class=" flex justify-between w-full items-center">
				<view class="flex items-center">
					<view class="w80 h80">
						<!-- <image src="@/static/home/shopDetails/shopImg.png" class="w80 h80" mode=""></image> -->
						<image :src="sjxx.logo" class="w80 h80" mode=""></image>
					</view>
					<view class="ml20">
						<view class="flex"  style="line-height: 30rpx;">
							<view class="font-bold text24 ">{{sjxx.store_name}}</view>
							<view v-if="sjxx.is_platform=='Y'" class="font-bold text20 px10 ml20 col4DB23F border4DB23F radius4">自营</view>
						</view>
						<view class="flex">
							<uni-icons v-if="Number(sjxx.score)>=1" type="star-filled" color="#FF0000" class="mr10" size="16"></uni-icons>
							<uni-icons v-if="Number(sjxx.score)>=2" type="star-filled" color="#FF0000" class="mr10" size="16"></uni-icons>
							<uni-icons v-if="Number(sjxx.score)>=3" type="star-filled" color="#FF0000" class="mr10" size="16"></uni-icons>
							<uni-icons v-if="Number(sjxx.score)>=4" type="star-filled" color="#FF0000" class="mr10" size="16"></uni-icons>
							<uni-icons v-if="Number(sjxx.score)>=5" type="star-filled" color="#FF0000" class="mr10" size="16"></uni-icons>
							<view class="col666666 text24 mr10 ml10">评分</view>
							<view class="colFF0000 font-bold">{{sjxx.score}}</view>
						</view>
					</view>
				</view>
				<view @click="handUrl('/pages/home/components/goShop/index?store_id='+details.store_id)" class="font-bold bg4DB23F col-white text32 radius10 ml30 px28 py17">进店</view>
			</view>
		</view>
		
		<view class="mt20 p30 bg-white">
			<view class="text28 font-bold col-black">评价</view>
			<view class="" v-for="item in sjpj" :key="item.id">
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
		<view class="mt20 p30 bg-white">
			<view v-html="details.detail"></view>
		</view>
		<view class="h140"></view>
		
		<!--  -->
		<view class="fixed bottom0 w-full" style="box-shadow: 0rpx -3rpx 6rpx 1rpx rgba(0,0,0,0.4);">
			<view class="flex justify-between items-center bg-white p30 ">
				<view class="text-center ml30 relative top10">
					<view class="w40 h40">
						<image src="@/static/home/shopDetails/kf.png" class="w40 h40" mode=""></image>
					</view>
					<view class="text16 col-black">客服</view>
				</view>
				<view class="flex items-center">
					<view @click="_addCar()" class="bg91C42F px50 py20 text-center radius10 col-white text32 font-bold">
						加入购物车
					</view>
					<view  @click="handUrl('/pages/home/components/shopOrderOk/index?id='+shop_id)" class="ml30 bg4DB23F px50 py20 text-center radius10 col-white text32 font-bold">
						立即购买
					</view>
				</view>
			</view>
		</view>
		
		<!-- 店铺信息 -->
		<uni-popup ref="popupSer" background-color="#fff" borderRadius="20rpx 20rpx 0rpx 0rpx">
			<view class="p40">
				<view class="flex justify-between items-center">
					<view class="w15"></view>
					<view class="col-black text28 font-bold">服务信息</view>
					<uni-icons type="closeempty" size="20" @click="()=>{$refs.popupSer.close()}"></uni-icons>
				</view>
				<view class="px20 text24 col666666">
					<view class="" v-for="item in details.services" :key="item.name">
						<view class="mt20">{{item.name}}</view>
						<view class="text20" style="line-height: 25rpx;">{{item.content}}</view>
					</view>
					
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
				details:{},//详情数据
				shop_id:'',//商品id
				sfzk:false,//是否展开
				sjxx:{},//商家信息
				sjpj:[],//商家评价
				imgUrl:''//封面图
			}
		},
		components: {
			NavBar,
		},
		onLoad(option){
			this.shop_id = option.id
			this._getGoodsDetail()//商品详情
		},
		methods: {
			// 收藏
			_collectionGoods(){
				const _this = this
				uni.showLoading({
					title: "加载中"
				})
				api.collectionGoods({
					post_params:{
						goods_id:this.shop_id
					}
				}).then((res)=>{
					uni.hideLoading()
					console.log('收藏',res.data);
					if(res.data.code==1){
						uni.showToast({
							title: '收藏成功！',
							icon: 'success',
							duration: 2000
						})
						_this._getGoodsDetail()//商品详情
					}
				})
			},
			// 加入购物车
			_addCar(){
				uni.showLoading({
					title: "加载中"
				})
				api.addCar({
					post_params:{
						goods_id:this.shop_id,
						number:1
					}
				}).then((res)=>{
					console.log('加入购物车res.data',res.data);
					uni.hideLoading()
					if(res.data.code==1){
						uni.showToast({
							title: '加入成功！',
							icon: 'success',
							duration: 2000
						})
					}
				})
			},
			// 用户获取商家信息
			_userGetStoreInfo(){
				api.userGetStoreInfo({
					post_params:{
						store_id: this.details.store_id
					}
				}).then((res)=>{
					console.log('商家信息',res.data.data);
					const {data} = res.data
					this.sjxx = data
				})
			},
			// 用户获取商家评价
			_userGetStoreEvaluate(){
				api.userGetStoreEvaluate({
					post_params:{
						store_id:this.details.store_id,
						type:'a',//a好评 b中评 c差评  
						currentPage:1,
						perPage:10
					}
				}).then((res)=>{
					const {list} = res.data.data
					console.log('商家评价',list);
					this.sjpj = list
				})
			},
			// 商品详情
			_getGoodsDetail(){
				uni.showLoading({
					title: "加载中"
				})
				api.getGoodsDetail({
					post_params:{
						id: this.shop_id
					}
				}).then((res)=>{
					uni.hideLoading()
					this.details = {}
					const { data } = res.data
					data.attribute_two = data.attributes.slice(0,4)
					this.details = data
					this.imgUrl = data.images[0]
					console.log('商品详情',res.data.data);
					this._userGetStoreInfo()//商家信息
					this._userGetStoreEvaluate()//商家评价
				})
			},
			handUrl(url){
				uni.navigateTo({
					url:url
				})
			},
			fhsyy(){
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