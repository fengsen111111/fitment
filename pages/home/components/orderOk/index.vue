<template>
	<view class="bgF9F9F9 h100vh">
		<NavBar :navType="'标题'" :title="'订单确认'" />
		<view class="p30 text28 ">
			<view class="">收货地址</view>
			<image v-if="!mrdz.id" src="@/static/home/pointsMall/nulladdress.png" class="w-full h140 mt20" mode="">
			</image>
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
				<view class="w128 h128" v-if="item.images">
					<image :src="item.images[0]" class="w128 h128 radius10" mode=""></image>
				</view>
				<view class=" ml30">
					<view class="text30 font-bold" v-if="item.name">{{item.name.length>20?item.name.slice(0,20)+'...':item.name}}</view>
					<view class="flex justify-between mt10">
						<view class="flex">
							<view class="">库存:{{item.stock}}</view>
							<view class="ml20">销量:{{item.salled_number?item.salled_number:0}}</view>
						</view>
						<view class="text30 col333333 font-bold">数量：1</view>
					</view>
					<view class="flex text28 colFF0000 ">
						<view class="">积分 {{item.integral}}</view>
						<view class="ml20">￥{{item.price}}</view>
					</view>
				</view>
			</view>
		</view>
		<view class="w-full fixed bottom0">
			<view class="bg-white flex justify-between items-center py20 px30">
				<view class="flex items-center font-bold text30">
					<view class="col666666 ">总计</view>
					<view class="colFF0000  ml30">
						<view class="">积分 {{integral}}</view>
						<view class="">￥{{price}}</view>
					</view>
				</view>
				<view class="flex items-center text24">
					<view class="flex items-center">
						<view class="col666666 ">邮费</view>
						<view class="colFF0000 ml10 ">￥{{carriage_price}}</view>
					</view>
					<!-- handUrl('/pages/home/components/myRedemptions/index') -->
					<view @click="payShop"
						class="font-bold text32 col-white px30 py20 bg4DB23F radius10 ml20">
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
				
				price:'',//价格 
				integral:'',//积分 
				carriage_price:'',//运费  
				
				option:{},
				item:{},//积分详情
			}
		},
		components: {
			NavBar
		},
		onLoad(option) {
			this.option = option
			this._getUserAddressList() //默认地址
			this._getIntegralGoodsDetail()//积分详情
		},
		methods: {
			// 积分详情
			_getIntegralGoodsDetail(){
				api.getIntegralGoodsDetail({
					post_params:{
						id:this.option.id
					}
				}).then((res)=>{
					console.log('积分详情',res.data.data);
					const {data} = res.data
					this.item = data
				})
			},
			// 计算积分商品价格
			_computeIntegralGoodsOrder() {
				api.computeIntegralGoodsOrder({
					post_params: {
						id:this.option.id ,//积分商品id
						user_address_id:this.mrdz.id
					}
				}).then((res) => {
					console.log('计算价格',res.data.data);
					const {
						price,
						integral,
						carriage_price
					} = res.data.data
					this.price = price
					this.integral = integral
					this.carriage_price = carriage_price
				})
			},
			// 收货地址
			_getUserAddressList() {
				api.getUserAddressList({
					post_params: {
						currentPage: 1,
						perPage: 10
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
					this._computeIntegralGoodsOrder() //计算积分商品价格
				})
			},
			handUrl(url) {
				uni.navigateTo({
					url: url
				})
			},
			// 下单积分商品
			payShop(){
				uni.showLoading({
					title: "加载中"
				})
				api.createIntegralGoodsOrder({
					post_params:{
						user_address_id:this.mrdz.id,
						id:this.option.id
					}
				}).then((res)=>{
					uni.hideLoading()
					const {result,order_id} = res.data
					console.log('res.data.data支付',res.data);
					if(result=='a'){
						// a交易成功  b积分不足  c需要微信支付  
						uni.showToast({
							title: '交易成功',
							icon: 'none',
							duration: 4000
						})
					}else if(result=='b'){
						uni.showToast({
							title: '积分不足',
							icon: 'none',
							duration: 4000
						})
					}else{
						// 支付积分商品订单
						api.payIntegralGoodsOrder({
							post_params:{
								order_id:order_id
							}
						}).then((res)=>{
							const {pay_data} =res.data.data
							console.log('支付数据',pay_data,res.data);
						})
					}
				})
			}
			
		}
	}
</script>

<style>
</style>