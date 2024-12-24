<template>
	<view class="bgF9F9F9 h100vh">
		<NavBar :navType="'标题'" :title="'订单确认'" />
		<view class="p30 text28 ">
			<view class="">收货地址</view>
			<image @click="handUrl('/pages/my/components/address/index')" v-if="!mrdz.id"
				src="@/static/home/pointsMall/nulladdress.png" class="w-full h140 mt20" mode=""></image>
			<view v-else class="mt20 bg-white radius10 text24 p20 flex justify-between items-center">
				<view class="">
					<view class="font-bold">{{mrdz.name}} {{mrdz.mobile}}</view>
					<view class="text20 mt10 col999999" style="line-height: 16rpx;">{{mrdz.sort_address}}</view>
					<view class="">{{mrdz.address}}</view>
				</view>
				<view class="col4DB23F " @click="handUrl('/pages/my/components/address/index')">更换</view>
			</view>
			<view class="mt40">订单商品</view>
			<view class="mt20 bg-white radius10 text24 p20 flex items-center">
				<view class="w180 h180" v-if="item.images">
					<!-- <image src="@/static/home/pointsMall/shop.png" class="w180 h180 radius10" mode=""></image> -->
					<image :src="item.images[0]" class="w180 h180 radius10" mode=""></image>
				</view>
				<view class=" ml30">
					<view class="text30 font-bold" v-if="item.name" style="width: 60vw;">
						{{item.name.length>28?item.name.slice(0,28)+'...':item.name}}</view>

					<view class="flex text20 col333333 mt20 ">
						<view class="mr50">库存:{{item.stock}}</view>
						<view class="">销量:{{item.salled_number}}</view>
					</view>
					<view class="flex justify-between text20 col333333">
						<view class="flex">
							<view class="">规格:{{item.size_name}}</view>
						</view>
						<view class="text36 colFF0000 font-bold">￥{{item.price}}</view>
					</view>
				</view>
			</view>
		</view>
		<view class="w-full fixed bottom0">
			<view class="bg-white flex justify-between items-center py20 px30">
				<view class="flex items-center font-bold text30">
					<view class="col666666 ">总计</view>
					<view class="colFF0000  ml30">
						<view class="">￥{{price}}</view>
					</view>
				</view>
				<view class="flex items-center text24">
					<view class="flex items-center">
						<view class="col666666 ">邮费</view>
						<view class="colFF0000 ml10 ">￥{{transport}}</view>
					</view>
					<view @click="payOrder" class="font-bold text32 col-white px30 py20 bg4DB23F radius10 ml20">
						提交支付
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
				birthday: "", //时间选择
				mrdz: {}, //默认地址

				option: {},

				price: '', //订单金额  
				transport: '', //运费   

				item: {} //详情
			}
		},
		components: {
			NavBar
		},
		onLoad(option) {
			this.option = option
		},
		onShow() {
			this._getUserAddressList() //默认地址
			this._getGoodsDetail() //商品详情
		},
		methods: {
			// 商品详情
			_getGoodsDetail() {
				api.getGoodsDetail({
					post_params: {
						id: this.option.id
					}
				}).then((res) => {
					console.log('商品数据', res.data.data);
					this.item = res.data.data
				})
			},
			// 计算价格
			_computeOrder() {
				api.computeOrder({
					post_params: {
						user_address_id: this.mrdz.id,
						goods_list: [{
							id: this.option.id,
							number: 1
						}]
					}
				}).then((res) => {
					const {
						price,
						preferential_price,
						transport
					} = res.data
					console.log('计算价格');
					this.price = price
					this.transport = transport
				})
			},
			// 收货地址
			_getUserAddressList() {
				api.getUserAddressList({
					post_params: {
						currentPage: 1,
						perPage: 100
					}
				}).then((res) => {
					const {
						list
					} = res.data.data
					list.map((item) => {
						if (item.is_default == 'Y') {
							this.mrdz = item
						}
					})
					this._computeOrder() //计算价格
				})
			},
			handUrl(url) {
				uni.navigateTo({
					url: url
				})
			},
			// 支付订单
			payOrder() {
				console.log('支付订单');
				return false
				api.createOrder({
					post_params: {
						user_address_id: this.mrdz.id,
						goods_list: [{
							id: this.option.id,
							number: 1
						}]
					}
				}).then((res) => {
					console.log('支付订单创建');
					const {
						order_id
					} = res.data
					// 支付订单
					api.payOrder({
						post_params: {
							order_id: order_id
						}
					}).then((res) => {
						console.log('支付订单');
					})
				})
			}
		}
	}
</script>

<style>
</style>