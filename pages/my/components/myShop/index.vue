<template>
	<view class="bgF5F5F5 h100vh">
		<view class="bgMyShop">
			<uni-icons type="left" @click="back()" color="#ffffff" size="30"></uni-icons>
		</view>
		<view class="px30 relative top-60">
			<view class="bg-white radius10 p30 ">
				<view class="flex items-center">
					<view class="w80 h80">
						<image src="@/static/home/shopDetails/shopImg.png" class="w80 h80" mode=""></image>
					</view>
					<view class="ml30 w-full">
						<view class="flex justify-between w-full items-center">
							<view class="text28 font-bold">{{sjxx.name}}</view>
							<uni-icons  @click="()=>{$refs.popupImg.open('bottom')}" type="compose" color="#4DB23F" size="20"></uni-icons>
						</view>
						<view class="flex justify-between w-full items-center">
							<view class="text24 col666666 font-bold">
								<text class="">评分</text>
						        <text class="colFF0000 ml10">{{sjxx.score}}</text>
							</view>
							<view class="text20 col-black mt15">
								<text class="">粉丝数量</text>
							    <text class=" ml10">{{sjxx.fans}}</text>
							</view>
						</view>
					</view>
				</view>
				<view class="flex items-center mt20 justify-between" style="line-height: 30rpx;">
					<view class="text24 col666666" style="width: 80%;">{{sjxx.address}}</view>
					<view class="w40 h40">
						<image src="@/static/my/icon2.png" class="w40 h40" mode=""></image>
					</view>
				</view>
			</view>
			
			<!-- 网点 -->
			<view class="bg-white p30 radius10 mt20 ">
				<view class="flex justify-between items-center">
					<view class="flex items-center">
						<view class="text30">押金金额</view>
						<view class="text30 colFF0000 ml20">{{sjxx.pay_deposit_money}}</view>
					</view>
					<view class="col-white py6 px30 radius10 bg4DB23F">充值</view>
				</view>
				<view class="flex mt20 justify-between items-center">
					<view class="flex items-center">
						<view class="text24">未充值押金</view>
						<view @click="handUrl('/pages/login/components/fwbText?type=deposit_des')" class="text20 col4DB23F ml20">押金说明</view>
					</view>
					<view class="text24">{{sjxx.deposit_money}}</view>
				</view>
				<view class="flex mt20 justify-between items-center">
					<view class="flex items-center">
						<view class="text24">营业额限制金额</view>
					</view>
					<view class="flex">
						<view class="text24">{{sjxx.order_limit_money}}</view>
						<view class="text24 colFF0000">{{sjxx.opend_status=='Y'?'已开店':'已闭店'}}</view>
					</view>
				</view>
			</view>
			
			<view class="bg-white flex items-center justify-between mt20 radius10 p30">
				<view class="flex items-center">
					<view class="w40 h40">
						<image src="@/static/my/icon4.png" class="w40 h40" mode=""></image>
					</view>
					<view class="text28 ml30">订单管理</view>
				</view>
				<uni-icons @click="handUrl('/pages/my/components/myShopOrderList/index')" type="right" color="#666666" size="20"></uni-icons>
			</view>
			
			<view class="mt20 flex items-center justify-between">
				<view class="text24 font-bold">商家服务</view>
				<view @click="handUrl('/pages/my/components/myShopServe/index')" class="text20 col4DB23F">修改</view>
			</view>
			
			<view class="bg-white mt20 p30 font-bold radius10">
				<view v-for="item in fuxx" :key="item.id">
					<view class="my10" v-if="item.status=='Y'">{{item.name}}</view>
				</view>
			<!-- 	<view class="my10">服务名称</view>
				<view class="my10">服务名称</view> -->
			</view>
			
		</view>
		<!-- 门店照片 -->
		<uni-popup ref="popupImg" background-color="#fff" borderRadius="20rpx 20rpx 0rpx 0rpx">
			<view class="p40">
				<view class="flex justify-between items-center">
					<view class="font-bold">门店照片</view>
					<uni-icons type="closeempty" size="20" @click="()=>{$refs.popupImg.close()}"></uni-icons>
				</view>
				<view class="px20 mt30">
					<view class="w116 h116">
						<image src="@/static/home/btnBooking/upload.png" class="w116 h116 radius10" mode=""></image>
					</view>
					<view class="mt120">
						<view class="radius10 bg4DB23F col-white font-bold col-white text32 text-center py21">确定</view>
					</view>
				</view>
			</view>
		</uni-popup>
	</view>
</template>

<script>
	import api from '@/request/allApi.js'
	export default {
		data() {
			return {
				sjxx:{},//商家信息
				fuxx:[]//服务信息
			}
		},
		components: {
		},
		onLoad(){
			this._getStoreInfo()
			this._getStoreServiceList()
		},
		methods: {
			// 商家服务
			_getStoreServiceList(){
				api.getStoreServiceList().then((res)=>{
					const {list} = res.data.data
					this.fuxx = list
					console.log('服务信息',list);
					
				})
			},
			// 商家信息
			_getStoreInfo(){
				api.getStoreInfo().then((res)=>{
					const {data} = res.data
					this.sjxx = data
					console.log('商家信息',data);
				})
			},
			handUrl(url) {
				uni.navigateTo({
					url: url
				})
			},
			back() {
				uni.navigateBack()
			},
		}
	}
</script>

<style>
	.bgMyShop{
		height: 278rpx;
		width: 100%;
		background-image: url('@/static/my/myShop/bg.png');
		background-size: 100% 100%;
		padding-top: 40rpx;
	}
</style>