<template>
	<view class=" h100vh ">
		<view class="relative">
			<image :src="imgDq" class="w-full h780" mode=""></image>
			<view class="absolute top0">
				<view class="flex pt38 px10  items-center pb14 justify-between">
					<uni-icons type="left" size="30"  @click="back()" color="#ffffff"></uni-icons>
					<view class="w15"></view>
					<view class="w15"></view>
				</view>
			</view>
		</view>
		<view class="p30 bg-white">
			<view class="flex overflow-auto example">
				<view v-for="iss in item.images" class="mr50 text28 text-center " :key="iss">
					<image :src="iss" @click="handImg(iss)" class="w120 h120 radius10" mode=""></image>
				</view>
			</view>
			<view class="flex justify-between mt25">
				<view class="flex colFF0000 text36 font-bold items-center">
					<view class="font-bold">积分 {{item.integral}}</view>
					<view class="ml67">￥{{item.price}}</view>
				</view>
				<view class="col333333 text24">规格:{{item.size_name}}</view>
			</view>
			<view class="mt20 font-bold text30">{{item.name}}</view>
			<view class="flex justify-between items-center mt20">
				<view class="flex items-center">
					<view class="flex">
						<view class="col-white bgFA6C2F px16">销量</view>
						<view class="colFA6C2F borderFA6C2F px16">{{item.salled_number?item.salled_number:0}}</view>
					</view>
					<view class="flex ml30">
						<view class="col-white bg36A9FC px16">库存</view>
						<view class="col36A9FC border36A9FC px16">{{item.stock}}</view>
					</view>
				</view>
			<!-- 	<view class="flex items-center text28 font-bold">
					<view class="col666666">评分</view>
					<view class="colFF0000 ml10">{{item.point}}</view>
				</view> -->
					<view class="flex items-center text28 font-bold">
						<view class="col666666">评分</view>
						<view class="colFF0000 ml10">{{sjxx.score}}</view>
					</view>
			</view>
			
			<view class="flex mt30 justify-between items-center">
				<view class=" flex items-center">
					<view class="w80 h80">
						<image :src="sjxx.logo" class="w80 h80" mode=""></image>
					</view>
					<view class="font-bold text24 ml20">{{sjxx.store_name}}</view>
					<view v-if="sjxx.self_support=='Y'" class="font-bold text20 px10 ml20 col4DB23F border4DB23F radius4" style="line-height: 30rpx;">自营</view>
				</view>
				<!-- <view class="flex items-center text28 font-bold">
					<view class="col666666">评分</view>
					<view class="colFF0000 ml10">{{sjxx.score}}</view>
				</view> -->
			</view>
		</view>
		<!--  -->
		<view class="p30 bg-white mt20" style="min-height: 15%;">
			<view class="text28 font-bold">商品详情</view>
			<view class="mt20">
				<view v-html="item.detail"></view>
				<view class="h100"></view>
			</view>
		</view>
		<!--  -->
		<view class="fixed bottom0 w-full">
			<view @click="handUrl('/pages/home/components/orderOk/index?id='+item.id)" class=" bg-white py20 px75 ">
				<view class="bg4DB23F py20 text-center w-full radius10 col-white text32 font-bold">
					立即兑换
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import NavBar from '@/components/navbar/index.vue'
	import api from '@/request/allApi.js'
	export default {
		data() {
			return {
				option:{},
				item:{},//积分详情
				imgDq:'',
				sjxx:{}//商家信息
			}
		},
		components: {
			NavBar,
		},
		onLoad(option){
			this.option = option
			this._getIntegralGoodsDetail()
		},
		methods: {
			handImg(iss){
				this.imgDq = iss
			},
			back(){
				uni.navigateBack()
			},
			_getIntegralGoodsDetail(){
				api.getIntegralGoodsDetail({
					post_params:{
						id:this.option.id
					}
				}).then((res)=>{
					console.log('积分详情',res.data.data);
					const {data} = res.data
					this.item = data
					this.imgDq = data.images[0]
					this._userGetStoreInfo()//获取商家信息
				})
			},
			handUrl(url){
				uni.navigateTo({
					url:url
				})
			},
			// 商家信息
			_userGetStoreInfo(){
				api.userGetStoreInfo({
					post_params:{
						store_id:this.item.store_id
					}
				}).then((res)=>{
					console.log('商家信息',res.data);
					this.sjxx = res.data.data
				})
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