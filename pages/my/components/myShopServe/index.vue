<template>
	<view class="bgF9F9F9 h100vh">
		<NavBar :navType="'标题'" :title="'服务管理'" />
		<view class="p30">
			<view v-for="item in [1,2,3,4]" :key="item" class="mb20 flex bg-white flex items-center radius10 p25">
				<uni-icons type="circle" color="#999999" size="24"></uni-icons>
				<uni-icons type="checkbox-filled" color="#4DB23F" size="24"></uni-icons>
				<view class="font-bold text28 ml20">服务名称</view>
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
	export default {
		data() {
			return {
			}
		},
		components: {
			NavBar
		},
		methods: {
			
		}
	}
</script>

<style>
</style>