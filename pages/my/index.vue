<template>
	<view>
		<view class="userBg">
			<view class="h40"></view>
			<view class="flex justify-between items-center p30">
				<view class="text-center" @click="handUrl('/pages/home/components/citySel/index')">
					<uni-icons type="location" size="26" color="#FFFFFF"></uni-icons>
					<view class="text20" style="line-height: 20rpx;">成都</view>
				</view>
				<view class="flex">
					<uni-icons @click="handUrl('/pages/my/components/creatorCenterEdit/index')" type="compose" size="30"
						color="#FFFFFF"></uni-icons>
					<uni-icons @click="handUrl('/pages/my/components/system/index')" type="gear" class="ml40" size="30"
						color="#FFFFFF"></uni-icons>
				</view>
			</view>
			<view class="px30">
				<view class="bg-white p30 radius10">
					<view class="flex ">
						<view class="w90 h90">
							<image v-if="czzInfo.uper_image" :src="czzInfo.uper_image" class="w90 h90 radius_bfb50" mode=""></image>
							<image v-else src="../../static/my/userImg.png" class="w90 h90 radius_bfb50" mode=""></image>
						</view>
						<view class="ml20 w-full mt10">
							<view class="flex justify-between w-full">
								<view class="flex items-center">
									<image v-if="czzInfo.gender=='a'" src="../../static/my/sex1.png"
										class=" w32 h32 radius_bfb50" mode=""></image>
									<image v-else src="../../static/my/sex2.png" class=" w32 h32 radius_bfb50" mode="">
									</image>
									<view class="text28 font-bold ml10 col333333">{{czzInfo.name?czzInfo.name:'用户昵称'}}</view>
									<view class="text20 col-white px30 bg91C42F ml10 radius4">博主</view>
								</view>
								<view class="col-black">{{czzInfo.mobile_two}}</view>
							</view>
							<view class="col-black text20" v-if="czzInfo.des">
								<text v-if="!isZk">{{czzInfo.des.length>24?czzInfo.des.slice(0,24)+'...':czzInfo.des}}</text>
								<text v-else>{{czzInfo.des}}</text>
								<text class="col4DB23F ml10" @click="()=>{isZk=!isZk}">{{!isZk?'展开':'收起'}}</text>
							</view>
							<view class="col-black text20" v-else>有趣的简介可以吸引粉丝！</view>
						</view>
					</view>
					<view class="bgF5F5F5 h2 mt30"></view>
					<view class="mt30 col-black text20 text-center grid grid-cols-3">
						<view @click="handUrl('/pages/my/components/myCollect/index')">
							<image src="../../static/my/user1.png" class="w40 h40" mode=""></image>
							<view class="">我的收藏</view>
						</view>
						<view class="border_left_right" @click="handUrl('/pages/my/components/shopping/index')">
							<image src="../../static/my/user2.png" class="w40 h40" mode=""></image>
							<view class="">购物车</view>
						</view>
						<view @click="handUrl('/pages/my/components/creatorCenter/index')">
							<image src="../../static/my/user3.png" class="w40 h40" mode=""></image>
							<view class="">创作者中心</view>
						</view>
					</view>
				</view>
				<!--  -->
				<view class="mt20 text20 text-center col-black bg-white p40 flex justify-between radius10">
					<view @click="handUrl('/pages/my/components/orderList/index?status='+item.key)" class=""
						v-for="item in orderList" :key="item.id">
						<image :src="require('@/static/my/order'+item.id+'.png')" class="w48 h48" mode=""></image>
						<view class="">{{item.text}}</view>
					</view>
				</view>
				<!--  -->
				<view class="mt30 text24 text-center col-black bg-white p40 grid grid-cols-3 radius10">
					<view :class="item.id<4?'mb60': item.id>6?'':'mb60'" v-for="item in iconList" :key="item.id"
						@click="handUrl(item.url)">
						<image :src="require('@/static/my/icon'+item.id+'.png')" class="w56 h56" mode=""></image>
						<view class="">{{item.text}}</view>
					</view>
				</view>
			</view>
		</view>
		<Tarbar :checkIndex="5" />
	</view>
</template>

<script>
	import Tarbar from '@/components/tarbar/index.vue'
	import api from '@/request/allApi.js'
	export default {
		components: {
			Tarbar
		},
		data() {
			return {
				isZk: false,//是否展开
				orderList: [{
						id: 1,
						text: '待支付',
						key: 'a'
					},
					{
						id: 2,
						text: '待拼成',
						key: 'b'
					},
					{
						id: 3,
						text: '待发货',
						key: 'c'
					},
					{
						id: 4,
						text: '已完成',
						key: 'e'
					},
					{
						id: 5,
						text: '售后',
						key: 'g'
					}
				],
				iconList: [{
						id: 1,
						text: '我的钱包',
						url: '/pages/my/components/myMoney/index'
					},
					{
						id: 2,
						text: '收货地址',
						url: '/pages/my/components/address/index'
					},
					{
						id: 3,
						text: '任务中心',
						url: '/pages/my/components/taskCenter/index'
					},
					{
						id: 4,
						text: '发票管理',
						url: '/pages/my/components/invoice/index'
					},
					{
						id: 5,
						text: '历史浏览',
						url: '/pages/my/components/history/index'
					},
					// {
					// 	id:6,
					// 	text:'店铺入驻',
					// 	url:'/pages/my/components/shopsMove/index'
					// },
					// {
					// 	id:7,
					// 	text:'店铺管理',
					// 	url:'/pages/my/components/myShop/index'
					// }
				],
				userInfo: {}, //个人信息
				czzInfo: {}, //创作者资料
			}
		},
		created() {
			this.userInfo = this.$store.state.userInfo
			console.log('userInfo',this.userInfo);
			if (this.userInfo?.store_status == 'c') {
				this.iconList.push({
					id: 7,
					text: '店铺管理',
					url: '/pages/my/components/myShop/index'
				})
			} else {
				this.iconList.push({
					id: 6,
					text: '店铺入驻',
					url: '/pages/my/components/shopsMove/index'
				})
			}
			
		},
		onShow(){
			this._getUperMaterial()	// 创作者资料
		},
		methods: {
			// 创作者资料
			_getUperMaterial() {
				api.getUperMaterial().then((res) => {
					const {
						data
					} = res.data
					// console.log('创作者资料', data);
					this.czzInfo = data
					this.czzInfo.uper_image = 'https://api.qfcss.cn'+this.czzInfo.uper_image
					this.czzInfo.mobile_two = this.czzInfo.mobile.replace(/^(\d{3})\d{4}(\d{4})/,'$1****$2')
					// 存入本地储存
					uni.setStorageSync('czzInfo', JSON.stringify(data))
					// 存入vuex
					this.$store.commit('setCzzInfo', data)
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
	.userBg {
		background-image: url('../../static/my/my_bg.png');
		height: 576rpx;
		width: 100%;
		background-size: 100% 100%;
		color: white
	}

	.border_left_right {
		border-left: 1px solid #f5f5f5;
		border-right: 1px solid #f5f5f5;
	}
</style>