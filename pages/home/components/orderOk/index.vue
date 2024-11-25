<template>
	<view class="bgF9F9F9 h100vh">
		<NavBar :navType="'标题'" :title="'订单确认'" />
		<view class="p30 text28 ">
			<view class="">收货地址</view>
			<image src="@/static/home/pointsMall/nulladdress.png" class="w-full h140 mt20" mode=""></image>
			<view class="mt20 bg-white radius10 text24 p20 flex justify-between items-center">
				<view class="">
					<view class="font-bold">张三 12312341234</view>
					<view class="text20 mt10 col999999" style="line-height: 16rpx;">四川省-成都市-武侯区-桂溪街道</view>
					<view class="">成都市高新区世纪城天府大道中段588号</view>
				</view>
				<view class="col4DB23F ">更换</view>
			</view>
			
			<view class="mt40">订单商品</view>
			<view class="mt20 bg-white radius10 text24 p20 flex items-center">
				<view class="w128 h128">
					<image src="@/static/home/pointsMall/shop.png" class="w128 h128 radius10" mode=""></image>
				</view>
				<view class=" ml30">
					<view class="text30 font-bold">精品多钻豪华富贵18K铂金520海...</view>
					<view class="flex justify-between mt10">
						<view class="flex">
							<view class="">库存:9999</view>
							<view class="ml20">销量:9999</view>
						</view>
						<view class="text30 col333333 font-bold">数量：1</view>
					</view>
					<view class="flex text28 colFF0000 ">
						<view class="">积分 6666</view>
						<view class="ml20">￥ 6666</view>
					</view>
				</view>
			</view>
		</view>
		<view class="w-full fixed bottom0">
			<view class="bg-white flex justify-between items-center py20 px30">
				<view class="flex items-center font-bold text30">
					<view class="col666666 ">总计</view>
					<view class="colFF0000  ml30">
						<view class="">积分 6666</view>
						<view class="">￥6666</view>
					</view>
				</view>
				<view class="flex items-center text24">
					<view class="flex items-center">
						<view class="col666666 ">邮费</view>
						<view class="colFF0000 ml10 ">￥666</view>
					</view>
					<view @click="handUrl('/pages/home/components/myRedemptions/index')" class="font-bold text32 col-white px30 py20 bg4DB23F radius10 ml20">
						提交支付
					</view>
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
				birthday: "", //时间选择
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