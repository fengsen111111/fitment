<template>
	<view class=" h100vh ">
		<view class="relative">
			<image src="@/static/home/pointsMall/shop.png" class="w-full h780" mode=""></image>
			<view class="absolute top0">
				<view class="flex pt38 px10  items-center pb14 justify-between">
					<uni-icons type="left" size="30"  @click="()=>{uni.navigateBack()}" color="#ffffff"></uni-icons>
					<view class="w15"></view>
					<view class="w15"></view>
				</view>
			</view>
		</view>
		<view class="p30 bg-white">
			<view class="flex overflow-auto example">
				<view v-for="item in [1,2,3,4,5,6,7,8]" class="mr50 text28 text-center " :key="item">
					<image src="@/static/home/pointsMall/shop.png" class="w120 h120 radius10" mode=""></image>
				</view>
			</view>
			<view class="flex justify-between mt25">
				<view class="flex colFF0000 text36 font-bold items-center">
					<view class="font-bold">积分 6666666</view>
					<view class="ml67">￥6666</view>
				</view>
				<view class="col333333 text24">规格:1条</view>
			</view>
			<view class="mt20 font-bold text30">精品多钻豪华富贵18K铂金520海水珍珠钻石项链</view>
			<view class="flex justify-between items-center mt20">
				<view class="flex items-center">
					<view class="flex">
						<view class="col-white bgFA6C2F px16">销量</view>
						<view class="colFA6C2F borderFA6C2F px16">6.6w</view>
					</view>
					<view class="flex ml30">
						<view class="col-white bg36A9FC px16">库存</view>
						<view class="col36A9FC border36A9FC px16">8.8w</view>
					</view>
				</view>
				<view class="flex items-center text28 font-bold">
					<view class="col666666">评分</view>
					<view class="colFF0000 ml10">5.0</view>
				</view>
			</view>
			
			<view class="mt30 flex items-center">
				<view class="w80 h80">
					<image src="@/static/home/pointsMall/shopLogo.png" class="w80 h80" mode=""></image>
				</view>
				<view class="font-bold text24 ml20">商家名称</view>
				<view class="font-bold text20 px10 ml20 col4DB23F border4DB23F radius4" style="line-height: 30rpx;">自营</view>
			</view>
		</view>
		<!--  -->
		<view class="p30 bg-white mt20" style="min-height: 15%;">
			<view class="text28 font-bold">商品详情</view>
			<view class="mt20">富文本</view>
		</view>
		<!--  -->
		<view class="fixed bottom0 w-full">
			<view @click="handUrl('/pages/home/components/orderOk/index')" class=" bg-white py20 px75 ">
				<view class="bg4DB23F py20 text-center w-full radius10 col-white text32 font-bold">
					立即兑换
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import NavBar from '@/components/navbar/index.vue'
	export default {
		data() {
			return {
				// 分类列表

			}
		},
		components: {
			NavBar,
		},
		methods: {
			handUrl(url){
				uni.navigateTo({
					url:url
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