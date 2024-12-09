<template>
	<view class="bgF9F9F9 h100vh">
		<NavBar :navType="'标题'" :title="'订单列表'" />
		<view class="p30 text24">
			<view class="flex col666666 justify-between">
				<view @click="()=>{status=''}" :class="status == ''?'border_bot_4DB23F col-black':''">全部</view>
				<view @click="()=>{status='a'}" :class="status == 'a'?'border_bot_4DB23F col-black':''">待支付</view>
				<view @click="()=>{status='b'}" :class="status == 'b'?'border_bot_4DB23F col-black':''">待拼成</view>
				<view @click="()=>{status='c'}" :class="status == 'c'?'border_bot_4DB23F col-black':''">待发货</view>
				<view @click="()=>{status='d'}" :class="status == 'd'?'border_bot_4DB23F col-black':''">待收货</view>
				<view @click="()=>{status='e'}" :class="status == 'e'?'border_bot_4DB23F col-black':''">已完成</view>
			</view>
			<view class="mt40">
				<view class="bg-white radius10 mb20" v-for="item in orderList" :key="item.id">
					<view class="flex p25 justify-between items-center"  @click="handUrl('/pages/my/components/orderListDetails/index?id='+item.id)">
						<view class="text24">订单编号:{{item.id}}</view>
						<view class=" ">
							<view class="col4988FE text28">
								<view class="colFF0000" v-if="item.status == 'a'">待支付</view>
								<view class="colFF0000" v-else-if="item.status == 'b'">待拼成</view>
								<view v-else-if="item.status == 'c'">待发货</view>
								<view v-else-if="item.status == 'd'">待收货</view>
								<view v-else-if="item.status == 'e'">已完成</view>
								<view v-else-if="item.status == 'f'">已评价</view>
								<view v-else-if="item.status == 'g'">售后</view>
								<view v-else-if="item.status == 'z'">拼团失败</view>
							</view>
							<view class="col4DB23F text24">已有{{item.team_person}}人参与</view>
							<!-- <view class="col4988FE text28">待发货</view> -->
						</view>
					</view>
					<view class="bg999999 h1"></view>
					<view class="p25">
						<view class="flex mb20 justify-between items-center" v-for="(iss,index_iss) in item.goods_list"
							:key="index_iss">
							<view class="w136 h136">
								<!-- <image src="@/static/home/首页推荐商品图示例1.png" class="w136 h136 radius10" mode=""></image> -->
								<image src="iss.cover_image" class="w136 h136 radius10" mode=""></image>
							</view>
							<view class="w-full ml20" style="line-height: 30rpx;">
								<view class="flex justify-between items-center">
									<view class="text20 w370">{{iss.name}}</view>
									<view class="colFF0000 text30">￥{{iss.price}}</view>
								</view>
								<view class="flex mt10 justify-between items-center">
									<view class="text20 w370 col333333">规格:{{iss.size_name}}</view>
									<view class="text28">X ??</view>
								</view>
								<view class="flex mt10 justify-between items-center">
									<view class="text20 w370 col333333">{{item.store_name}}</view>
									<view class="text28"></view>
								</view>
							</view>
						</view>
					</view>
					<view class="bg999999 h1"></view>
					<view class="flex p25 justify-between items-center">
						<view class="flex items-center">
							<view class="text24 col666666">实付金额</view>
							<view class="ml10 text34 colFF0000 font-bold">￥{{item.pay_price}}</view>
						</view>
						<view class="">
							<!-- 待支付 -->
							<view v-if="item.status == 'a'"
								class="text28 bg4DB23F col-white text-center  px30 py10 radius40">去支付</view>
							<!-- 待拼成 -->
							<view v-else-if="item.status == 'b'"
								class="text28 borderFF0000 text-center colFF0000  px30 py10 radius40">取消</view>
							<!-- 代发货 -->
							<view v-else-if="item.status == 'c'">
								<view @click="handUrl('/pages/my/components/orderListSH/index')"
									class="text28 border4DB23F text-center col4DB23F  px30 py10 radius40">申请售后</view>
								<view class="text28 borderFF0000 text-center colFF0000  px30 py10 radius40">催发货</view>
							</view>
							<!-- 待收货 -->
							<view v-else-if="item.status == 'd'">
								<view @click="handUrl('/pages/my/components/orderListSH/index')"
									class="text28 border4DB23F text-center col4DB23F px30 py10 radius40">申请售后</view>
								<view class="text28 bg4DB23F col-white text-center px30 py10 radius40">确认收货</view>
							</view>
							<!-- 已完成 -->
							<view v-else-if="item.status == 'e'">
								<view @click="handUrl('/pages/my/components/orderListSH/index')"
									class="text28 border4DB23F text-center col4DB23F px30 py10 radius40">申请售后</view>
								<view class="text28 bgFBB333 col-white text-center px30 py10 radius40">再次购买</view>
							</view>
							<!-- 售后 -->
							<view v-else-if="item.status == 'g'"
								class="text28 borderFF0000 text-center colFF0000  px30 py10 radius40">取消售后</view>
						</view>
					</view>
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
				status: 'a',
				orderList: []
			}
		},
		onLoad(option) {
			console.log('option', option);
			this.status = option.status
			this._getOrderList() //订单列表
		},
		components: {
			NavBar
		},
		methods: {
			// 订单列表
			_getOrderList() {
				api.getOrderList({
					post_params: {
						user_type: 'a',
						status: this.status,
						currentPage: 1,
						perPage: 20
					}
				}).then((res) => {
					const {
						list
					} = res.data.data
					this.orderList = list
					console.log('订单列表', this.orderList);
				})
			},
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