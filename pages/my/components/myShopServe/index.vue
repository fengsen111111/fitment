<template>
	<view class="bgF9F9F9 h100vh">
		<NavBar :navType="'标题'" :title="'服务管理'" />
		<view class="p30">
			<view v-for="item in fuxx" :key="item.id" class="mb20 flex bg-white flex items-center radius10 p25">
				<uni-icons v-if="item.status=='Y'" type="checkbox-filled" color="#4DB23F" size="24"></uni-icons>
				<uni-icons v-else type="circle" color="#999999" size="24"></uni-icons>
				<view class="font-bold text28 ml20">{{item.name}}</view>
			</view>
		</view>
		
		<view class="w-full fixed bottom0">
			<view class="bg-white  py20 px75">
				<view class="bg4DB23F text-center py17 font-bold col-white text32 radius10">
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
				fuxx:[]//商家服务
			}
		},
		components: {
			NavBar
		},
		onLoad(){
			this._getStoreServiceList()
		},
		methods: {
			// 商家服务
			_getStoreServiceList(){
				api.getStoreServiceList().then((res)=>{
					const {list} = res.data.data
					this.fuxx = list
					console.log('服务信息',list);
					
				})
			},
		}
	}
</script>

<style>
</style>