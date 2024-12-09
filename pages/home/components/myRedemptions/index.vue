<template>
	<view class="bgF9F9F9 h100vh">
		<NavBar :navType="'标题'" :title="'我的兑换'" />
		<view class="p30">
			<view class="flex text28 col666666 justify-between px50">
				<view @click="()=>{status='a'}" :class="status=='a'?'border_bottom_two':''">待发货</view>
				<view @click="()=>{status='b'}" :class="status=='b'?'border_bottom_two':''">待收货</view>
				<view @click="()=>{status='c'}" :class="status=='c'?'border_bottom_two':''">已签收</view>
			</view>
			<view class="bg-white p20 radius10 mt30" v-for="item in dataList" :key="item.id">
				<view class="">订单编号：{{item.id}}</view>
				<view class="mt20 bgF5F5F5 radius10 text24 p20 flex items-center">
					<view class="w128 h128">
						<image src="@/static/home/pointsMall/shop.png" class="w128 h128 radius10" mode=""></image>
					</view>
					<view class="col333333 ml30 w-full">
						<view v-if="item.name">
							<view class="text30 font-bold" v-if="item.name.length<17">{{item.name}}</view>
							<view class="text30 font-bold " v-else>{{item.name.slice(0,16)+'...'}}</view>
						</view>
						<view class="flex mt20" style="line-height: 28rpx;">
							<view class="">{{item.store_name}}</view>
							<text v-if="item.platform_goods=='Y'" class="ml20 text20 col4DB23F border4DB23F radius4 px10">自营</text>
						</view>
						<view class="flex justify-between">
							<view class="flex text28 colFF0000 ">
								<view class="">积分 {{item.integral}}</view>
								<view class="ml20">￥ {{item.price}}</view>
							</view>
							<view class="text28 col333333 font-bold">数量：1</view>
						</view>
					</view>
				</view>
				<!-- 状态·待收货 -->
				<view class="flex justify-between mt30" v-if="status=='b'">
					<view class=""></view>
					<view class="flex">
						<view @click="lookWl(item)"
							class=" col4DB23F border4DB23F radius10 px20 py6">查看物流</view>
						<view @click="_overIntegralGoodsOrder(item)" class=" col-white bg4DB23F radius10 px20 py6 ml40">确认收货</view>
					</view>
				</view>
			</view>
		</view>
		<!-- 查看物流 -->
		<uni-popup ref="popupLook" type="bottom" border-radius="10px 10px 0 0">
			<view class="bgF9F9F9 p30" style="border-radius: 10px 10px 0 0;">
				<view class="flex justify-between items-center">
					<view class="text28 font-bold">物流详情</view>
					<uni-icons type="closeempty" size="20" @click="()=>{$refs.popupLook.close()}"></uni-icons>
				</view>
				<view class="bg-white radius10 py30 mt20">
					<view class="flex px30 items-center">
						<view class="">{{lookData.transport_name}} {{lookData.transport_number}}</view>
						<view @click="copy(lookData.transport_number)" class="text20 col4DB23F ml10">复制</view>
					</view>
					<view class="bgF5F5F5 h1 my20"></view>
					<view class="px30">
						<uni-steps :options="list2" active-color="#4DB23F" deactiveColor="#666666" :active="active"
							direction="column" />
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
				status: 'b',
				// 
				active: 0,
				list2: [{
					title: '买家下单',
					desc: '2018-11-11'
				}, {
					title: '卖家发货',
					desc: '2018-11-12'
				}, {
					title: '买家签收',
					desc: '2018-11-13'
				}, {
					title: '交易完成',
					desc: '2018-11-14'
				}],
				
				dataList:[],//数据列表
				
				lookData:{}//查看物流
			}
		},
		components: {
			NavBar
		},
		onLoad(){
			this._getIntegralGoodsOrderList()
		},
		methods: {
			// 确认收货
			_overIntegralGoodsOrder(item){
				api.overIntegralGoodsOrder({
					post_params:{
						id: item.id
					}
				}).then((res)=>{
					console.log('收货成功');
					this.status='c'
					this._getIntegralGoodsOrderList()
				})
			},
			// 查看物流
			lookWl(item){
				this.lookData = item
				this.$refs.popupLook.open('bottom')
				if(item.transport_detail){
					this.list2 = item.transport_detail.map((item)=>{
						return {
							title: item.des,
							desc: item.time
						}
					})
				}
			},
			// 订单列表
			_getIntegralGoodsOrderList(){
				api.getIntegralGoodsOrderList({
					post_params:{
						status: this.status,
						currentPage:1,
						perPage:10
					}
				}).then((res)=>{
					const {list} = res.data.data
					this.dataList = list
				})
			},
			copy(value) {
				uni.setClipboardData({
					data: value, //要被复制的内容
					success: () => { //复制成功的回调函数
						uni.showToast({ //提示
							title: '复制成功'
						})
					}
				});

			}
		}
	}
</script>

<style>
	.border_bottom_two {
		border-bottom: 8rpx solid #4DB23F;
		font-weight: bold;
		color: black;
	}
</style>