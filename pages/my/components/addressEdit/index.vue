<template>
	<view class="bgF9F9F9 h100vh">
		<NavBar :navType="'标题'" :title="'收货地址'" />
		<view class="p30">
			<view class="p30 radius10 bg-white text24 col333333">
				<view>
					<view class="font-bold">定位</view>
					<view class="mt20  items-center justify-between radius10 flex">
						<view class="col999999">{{item.address}}</view>
						<view class="w32 h32" @click="handUrl('/pages/my/components/map/index')">
							<image src="@/static/my/address/dz.png" class="w32 h32" mode=""></image>
						</view>
					</view>
				</view>
			</view>
			<view class="p30 mt20 radius10 bg-white text24 col333333">
				<view>
					<view class="font-bold">地址</view>
					<view class="mt20 bgF5F5F5 py20 px30 radius10 ">
						<input type="text" v-model="item.address" placeholder="输入地址" />
					</view>
				</view>
				<view class="mt40">
					<view class="font-bold">姓名</view>
					<view class="mt20 bgF5F5F5 py20 px30 radius10 ">
						<input type="text" v-model="item.name" placeholder="输入姓名" />
					</view>
				</view>
				<view class="mt40">
					<view class="font-bold">手机号</view>
					<view class="mt20 bgF5F5F5 py20 px30 radius10">
						<input type="text" v-model="item.mobile" placeholder="输入手机号" />
					</view>
				</view>
			</view>
		</view>
		
		<view class="w-full fixed bottom0">
			<view class="bg-white  py20 px75">
				<view class="bg4DB23F text-center py17 font-bold col-white text32 radius10" @click="_editUserAddress()">
					保存
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
				item:{}//
			}
		},
		onLoad(option){
			this.item = JSON.parse(option.item)
		},
		components: {
			NavBar
		},
		methods: {
			handUrl(url) {
				uni.navigateTo({
					url: url
				})
			},
			_editUserAddress(){
				uni.showLoading({
					title: "加载中"
				})
				api.editUserAddress({
					post_params:{
						id:this.item.id,
						is_default:this.item.is_default=='Y'?'Y':'N',
						name:this.item.name,
						mobile:this.item.mobile,
						location: uni.getStorageSync('location'),
						address:this.item.address
					}
				}).then((res)=>{
					uni.hideLoading()
					console.log('操作成功');
					uni.navigateBack()
				})
			}
		}
	}
</script>

<style>
</style>