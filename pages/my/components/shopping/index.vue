<template>
	<view class="bgF9F9F9 h100vh">
		<NavBar :navType="'标题'" :title="'购物车'" />
		<view class="p30 text24">
			<!--   -->
			<view class="bg-white radius10 mb20 p30 flex" v-for="item in gwcList" :key="item.id">
				<view class="w30 h30 mt30">
					<uni-icons @click="handCheck(item)" v-if="item.check==true" type="checkbox-filled" size="24"
						color="#4DB23F"></uni-icons>
					<uni-icons @click="handCheck(item)" v-else type="circle" size="24" color="#999999"></uni-icons>
				</view>
				<view class="ml30 w-full">
					<view class="flex w-full">
						<view class="w100 h100">
							<!-- <image class="w100 h100" src="@/static/home/sytjspslt1.png" mode=""></image> -->
							<image class="w100 h100" :src="item.cover_image" mode=""></image>
						</view>
						<view class="ml20 text20">
							<view class="flex items-center">
								<view v-if="item.platform_goods=='Y'" class="col4DB23F border4DB23F radius10 px10 mr10"
									style="line-height: 30rpx;">自营</view>
								<!-- <view class="ml10 text30">新中式沙发冬夏两用豪华...</view> -->
								<view v-if="item.goods_name" class=" text30" style="width: 60vw;">
									{{item.goods_name.length>14?item.goods_name.slice(0,14)+'...':item.goods_name}}
								</view>
							</view>
							<view class="mt10 flex col333333 items-center justify-between">
								<view class="flex items-center">
									<view class="">库存:{{item.stock}}</view>
									<view class="ml40">销量:{{item.salled_number}}</view>
								</view>
								<view class="">规格:{{item.goods_size_name}}</view>
							</view>
						</view>
					</view>
					<!--  -->
					<view class="mt25 w-full flex justify-between items-center">
						<view class="text36 colFF0000 font-bold">￥{{item.price}}</view>
						<view class="flex items-center">
							<uni-icons @click="_deleteCarGoods(item)" type="trash" size="24"></uni-icons>
							<view class="flex ml60 items-center">
								<view class="w90 h60" @click="_editCarGoods(item,'-')">
									<image src="@/static/my/shopping/left.png" class="w-full h60" mode=""></image>
								</view>
								<view class="py10 px30 bgF9F9F9 col-black font-bold">{{item.number}}</view>
								<view class="w90 h60" @click="_editCarGoods(item,'+')">
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
					<view class="flex items-center" @click="checkAll()">
						<uni-icons v-if="isQx==true" type="checkbox-filled" size="24" color="#4DB23F"></uni-icons>
						<uni-icons v-else type="circle" size="24" color="#999999"></uni-icons>
						<view class="text20 ml10">全选</view>
					</view>
					<view class="text20 ml30">实付金额</view>
					<view class="text36 ml10 colFF0000 font-bold">￥{{price?price:0}}</view>
				</view>
				<view class="bg4DB23F text32 col-white font-bold radius10 py17 px36" @click="handPay">
					去支付
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
				gwcList: [],
				isQx: false,
				mrdz: {}, //默认地址

				price: '',
				discount_price: '',
				carriage_price: ''
			}
		},
		components: {
			NavBar
		},
		onLoad() {
			this._getCarList()
			this._getUserAddressList() //收货地址
		},
		methods: {
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
			// 计算价格
			_computeOrder() {
				let goods_list = []
				this.gwcList.map((item) => {
					if (item.check) {
						goods_list.push({
							id: item.goods_id,
							number: item.number * 1
						})
					}
				})
				api.computeOrder({
					post_params: {
						user_address_id: this.mrdz.id,
						goods_list: goods_list
					}
				}).then((res) => {
					const {
						price,
						discount_price,
						carriage_price
					} = res.data.data
					this.price = price
					this.discount_price = discount_price
					this.carriage_price = carriage_price
				})
			},
			// 去支付
			handPay() {
				let goods_list = []
				this.gwcList.map((item) => {
					if (item.check) {
						goods_list.push({
							goods_id: item.goods_id,
							number: item.number,
							details: {}
						})
					}
				})
				if (goods_list.length > 0) {
					uni.navigateTo({
						url: '/pages/home/components/shopOrderOkShopping/index?goods_list=' + JSON.stringify(
							goods_list) //商品结算
					})
				} else {
					uni.showToast({
						title: '请先勾选商品！',
						icon: 'none',
						duration: 4000
					})
				}
			},
			// 是否全选
			checkAll() {
				console.log('是否全选', this.gwcList);
				let dpid = this.gwcList[0].store_id //店铺id
				this.gwcList.map((item) => {
					if (item.store_id == dpid) {
						console.log('同一家店铺');
					} else {
						console.log('不同店铺');
						return false
					}
				})
				// 都是同一家店铺
				this.isQx = !this.isQx
				this.gwcList.map((item) => {
					item.check = true
				})
				this._computeOrder()//计算价格
			},
			// 勾选
			handCheck(item) {
				// 判断是否同一家店铺，是才勾选的起，不是就给提示
				let ygxdpid = '' //已勾选商家id
				this.gwcList.map((iss) => {
					if (iss.check) {
						// console.log('已勾选项',iss);
						ygxdpid = iss.store_id
					}
				})
				this.gwcList.map((iss) => {
					if (iss.id == item.id) {
						// 判断是否同一家店铺
						if (iss.store_id == ygxdpid || ygxdpid == '') {
							item.check = !item.check
						} else {
							uni.showToast({
								title: '勾选商品不是同一家店铺！',
								icon: 'none',
								duration: 4000
							})
							return false
						}
					}
				})
				// 计算价格
				this._computeOrder()
			},
			// 购物车
			_getCarList() {
				uni.showLoading({
					title: "加载中"
				})
				api.getCarList().then((res) => {
					uni.hideLoading()
					const {
						list
					} = res.data.data
					console.log('购物车列表', list);
					list.map((item) => {
						item.check = false
					})
					this.gwcList = list
				})
			},
			// 修改购物车商品数量
			_editCarGoods(item, type) {
				let {
					id,
					number
				} = item
				if (type == '-') {
					if (number > 1) {
						number = number - 1
					} else {
						uni.showToast({
							title: '已经最小',
							icon: 'none',
							duration: 2000
						})
						return false
					}
				} else {
					number = Number(number) + 1
				}
				uni.showLoading({
					title: "加载中"
				})
				api.editCarGoods({
					post_params: {
						car_id: id,
						number: number
					}
				}).then((res) => {
					uni.hideLoading()
					console.log('修改购物车数量', res.data);
					if (res.data.code == 1) {
						uni.showToast({
							title: '修改成功',
							icon: 'success',
							duration: 2000,
						})
						const _this = this
						setTimeout(() => {
							_this._getCarList()
						}, 2000)
					}
				})
			},
			// 删除购物车商品
			_deleteCarGoods(item) {
				api.deleteCarGoods({
					post_params: {
						car_id: item.id,
					}
				}).then((res) => {
					console.log('删除购物车商品');
					if (res.data.code == 1) {
						uni.showToast({
							title: '删除成功',
							icon: 'success',
							duration: 2000,
						})
						const _this = this
						setTimeout(() => {
							_this._getCarList()
						}, 2000)
					}
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