<template>
	<view class="bgF9F9F9 h100vh">
		<NavBar :navType="'标题'" :title="'订单列表'" />
		<view class="p30 text24">
			<view class="flex col666666 justify-between">
				<view class="border_bot_4DB23F col-black">全部</view>
				<view>待支付</view>
				<view>待拼成</view>
				<view>待发货</view>
				<view>待收货</view>
				<view>已完成</view>
			</view>
			<view class="mt40">
				<view @click="handUrl('/pages/my/components/orderListDetails/indexs')" class="bg-white radius10 mb20" v-for="item in [1,2,3]" :key="item">
					<view class="flex p25 justify-between items-center">
						<view class="text24">订单编号:123456789</view>
						<view class=" ">
							<view class="colFF0000 text28">待支付</view>
							<view class="col4DB23F text24">已有XXX人参与</view>
							<view class="col4988FE text28">待发货</view>
						</view>
					</view>
					<view class="bg999999 h1"></view>
					<view class="p25">
						<view class="flex mb20 justify-between items-center" v-for="item in [1,2]" :key="item">
							<view class="w136 h136">
								<image src="@/static/home/首页推荐商品图示例1.png" class="w136 h136 radius10" mode=""></image>
							</view>
							<view class="w-full ml20" style="line-height: 30rpx;">
								<view class="flex justify-between items-center">
									<view class="text20 w370">左维空间沙发新款胡桃木实木沙发组合客厅大小户型现代简约新中式转角沙发</view>
									<view class="colFF0000 text30">￥6666</view>
								</view>
								<view class="flex mt10 justify-between items-center">
									<view class="text20 w370 col333333">规格:四人沙发</view>
									<view class="text28">X 666</view>
								</view>
								<view class="flex mt10 justify-between items-center">
									<view class="text20 w370 col333333">商家名称</view>
									<view class="text28"></view>
								</view>
							</view>
						</view>
					</view>
					<view class="bg999999 h1"></view>
					<view class="flex p25 justify-between items-center">
						<view class="flex items-center">
							<view class="text24 col666666">实付金额</view>
						    <view class="ml10 text34 colFF0000 font-bold">￥100</view>
						</view>
						<view class="">
							<!-- 待支付 -->
							<view class="text28 bg4DB23F col-white text-center  px30 py10 radius40">去支付</view>
							<!-- 待拼成 -->
							<view class="text28 borderFF0000 text-center colFF0000  px30 py10 radius40">取消</view>
							<!-- 代发货 -->
							<view @click="handUrl('/pages/my/components/orderListSH/index')" class="text28 border4DB23F text-center col4DB23F  px30 py10 radius40">申请售后</view>
							<view class="text28 borderFF0000 text-center colFF0000  px30 py10 radius40">催发货</view>
							<!-- 待收货 -->
							<view @click="handUrl('/pages/my/components/orderListSH/index')" class="text28 border4DB23F text-center col4DB23F  px30 py10 radius40">申请售后</view>
							<view class="text28 bg4DB23F col-white text-center  px30 py10 radius40">确认收货</view>
							<!-- 已完成 -->
							<view @click="handUrl('/pages/my/components/orderListSH/index')" class="text28 border4DB23F text-center col4DB23F  px30 py10 radius40">申请售后</view>
							<view class="text28 bgFBB333 col-white text-center  px30 py10 radius40">再次购买</view>
							<!-- 售后 -->
							<view class="text28 borderFF0000 text-center colFF0000  px30 py10 radius40">取消售后</view>
						</view>
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
			return {}
		},
		onLoad(option) {
			console.log('option', option);
		},
		components: {
			NavBar
		},
		methods: {
			handUrl(url) {
				uni.navigateTo({
					url: url
				})
			}
		}
	}
</script>

<style>
</style>