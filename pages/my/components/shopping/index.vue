<template>
	<view class="bgF9F9F9 h100vh">
		<NavBar :navType="'标题'" :title="'购物车'" />
		<view class="p30 text24">
			<!--   -->
			<view class="bg-white radius10 mb20 p30 flex" v-for="item in [1,2,3]" :key="item">
				<view class="w30 h30">
					<uni-icons type="circle" color="#999999" size="24"></uni-icons>
					<br />
					<uni-icons type="checkbox-filled" size="24" color="#4DB23F"></uni-icons>
				</view>
				<view class="ml30 w-full">
					<view class="flex w-full">
						<view class="w100 h100">
							<image class="w100 h100" src="@/static/home/首页推荐商品图示例1.png" mode=""></image>
						</view>
						<view class="ml20 text20">
							<view class="flex items-center">
								<view class="col4DB23F border4DB23F radius10 px10" style="line-height: 30rpx;">自营</view>
								<view class="ml10 text30">新中式沙发冬夏两用豪华...</view>
							</view>
							<view class="mt10 flex col333333 items-center justify-between">
								<view class="flex items-center">
									<view class="">库存:9999</view>
									<view class="ml40">销量:9999</view>
								</view>
								<view class="">库存:9999</view>
							</view>
						</view>
					</view>
					<!--  -->
					<view class="mt25 w-full flex justify-between items-center">
					    <view class="text36 colFF0000 font-bold">￥6666</view>	
						<view class="flex items-center">
							<uni-icons type="trash" size="24"></uni-icons>
							<view class="flex ml60 items-center">
								<view class="w90 h60">
									<image src="@/static/my/shopping/left.png" class="w-full h60" mode=""></image>
								</view>
								<view class="py10 px30 bgF9F9F9 col-black font-bold">10</view>
								<view class="w90 h60">
									<image src="@/static/my/shopping/right.png" class="w-full h60" mode=""></image>
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="fixed bottom0 w-full bg-white ">
			<view class="py20 items-center px30 flex justify-between">
				<view class="flex items-center">
					<uni-icons type="circle" color="#999999" size="24"></uni-icons>
					<view class="text20 ml10">全选</view>
					<view class="text20 ml30">实付金额</view>
					<view class="text36 ml10 colFF0000 font-bold">￥6666</view>
				</view>
				<view class="bg4DB23F text32 col-white font-bold radius10 py17 px36">
					去支付
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
			}
		},
		components: {
			NavBar
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
</style>