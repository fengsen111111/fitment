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
			<view v-if="goods_list.length>0">
				<view class="mt20 bg-white radius10 text24 p20 flex items-center" v-for="(item,index) in goods_list" :key="index">
					<view class="w180 h180" v-if="item.details.images">
						<image :src="item.details.images[0]" class="w180 h180 radius10" mode=""></image>
					</view>
					<view class=" ml30">
						<view class="text30 font-bold" v-if="item.details.name"  style="width: 60vw;">
							{{item.details.name.length>28?item.details.name.slice(0,28)+'...':item.details.name}}</view>
				
						<view class="flex text20 col333333 mt20 ">
							<view class="mr50">库存:{{item.details.stock}}</view>
							<view class="mr50">销量:{{item.details.salled_number}}</view>
							<view class="">(测试用)数量:{{item.number}}</view>
							<view class="">单价:{{item.details.price}}</view>
						</view>
						<view class="flex justify-between text20 col333333">
							<view class="flex">
								<view class="">规格:{{item.details.size_name}}</view>
							</view>
							<view class="text36 colFF0000 font-bold">￥{{Number(item.details.price*item.number).toFixed(2)}}</view>
						</view>
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
						<view class="colFF0000 ml10 ">￥{{discount_price}}</view>
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

				goods_list: [], // 参数

				price: '', //订单金额  
				discount_price: '', //运费   

			}
		},
		components: {
			NavBar
		},
		onLoad(option) {
			this.option = option
			this.goods_list = JSON.parse(option.goods_list)
		},
		onShow() {
			this._getUserAddressList() //默认地址
			if (this.goods_list.length > 0) {
				this.goods_list.map((item, index) => {
					this._getGoodsDetail(item,index)
				})
				const _this = this
				setTimeout(()=>{
					_this._computeOrder() //计算价格
				},2000)
			}
		},
		methods: {
			// 商品详情
			_getGoodsDetail(item,index) {
				api.getGoodsDetail({
					post_params: {
						id: item.goods_id
					}
				}).then((res) => {
					this.goods_list[index].details = res.data.data
					console.log('商品数据', this.goods_list);
				})
			},
			// 计算价格
			_computeOrder() {
				api.computeOrder({
					post_params: {
						user_address_id: this.mrdz.id,
						goods_list: this.goods_list.map((iss)=>{
							return {
								id: iss.goods_id,
								number: iss.number
							}
						})
					}
				}).then((res) => {
					const {
						price,
						preferential_price,
						discount_price
					} = res.data.data
					console.log('计算价格');
					this.price = price
					this.discount_price = discount_price
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
				api.createOrder({
					post_params: {
						user_address_id: this.mrdz.id,
						goods_list: this.goods_list.map((iss)=>{
							return {
								id: iss.goods_id,
								number: iss.number
							}
						})
					}
				}).then((res) => {
					console.log('支付订单创建',res.data);
					const {
						order_id
					} = res.data.data
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