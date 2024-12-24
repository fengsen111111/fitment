<template>
	<view class="bgF9F9F9 h100vh">
		<NavBar :navType="'标题'" :title="'收货地址'" />
		<view class="p30 text24">
			<view class="bg-white radius10 mb20" v-for="item in dataList" :key="item.id">
				<view class="p20">
					<view class="col-black font-bold">{{item.name}} {{item.mobile}}</view>
					<view class="col666666">{{item.address}}</view>
				</view>
				<view class="bg999999 h1"></view>
				<view class="p20 flex justify-between">
					<view class="flex">
						<uni-icons v-if="item.is_default=='Y'" type="checkbox-filled" size="16" color="#4DB23F"></uni-icons>
						<uni-icons v-else @click="_setDefaultUserAddress(item)" type="circle" size="16"></uni-icons>
						<view class="ml10">默认收货地址</view>
					</view>
					<view class="flex">
						<view class="colFF0000 borderFF0000 radius10 px28" @click="_deleteUserAddress(item)">删除</view>
						<view @click="handUrl('/pages/my/components/addressEdit/index?item='+JSON.stringify(item))"
							class="col-white bg4DB23F radius10 ml40 px28">修改</view>
					</view>
				</view>
			</view>
		</view>
		<view class="w-full fixed bottom0">
			<view class="bg-white  py20 px75">
				<view class="bg4DB23F text-center py17 font-bold col-white text32 radius10" @click="addAddress()">
					新增
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
				dataList: [] //收货信息
			}
		},
		components: {
			NavBar
		},
		onShow() {
			this._getUserAddressList()
		},
		methods: {
			// 跳转新增
			addAddress(){
				uni.setStorageSync('xdwz','')
				uni.navigateTo({
					url: '/pages/my/components/addressEdit/index'
				})
			},
			// 地址列表
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
					this.dataList = list
					console.log('收货信息', list);
				})
			},
			// 删除
			_deleteUserAddress(item) {
				uni.showLoading({
					title: "加载中"
				})
				api.deleteUserAddress({
					post_params: {
						id: item.id
					}
				}).then((res) => {
					uni.hideLoading()
					console.log('删除成功');
					this._getUserAddressList()
				})
			},
			// 默认
			_setDefaultUserAddress(item) {
				uni.showLoading({
					title: "加载中"
				})
				api.setDefaultUserAddress({
					post_params: {
						id: item.id
					}
				}).then((res)=>{
					uni.hideLoading()
					console.log('设置成功');
					this._getUserAddressList()
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