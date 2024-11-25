<template>
	<view class="bgF9F9F9 h100vh">
	    <NavBar :navType="'标题'" :title="'店铺入驻'" />
		<view class="p30">
			<view class="">富文本</view>
		<!-- 	<view class="px44 mt100">
				<view class="bg636363 text-center py17 font-bold col-white text32 radius10">
					等待开放
				</view>
			</view> -->
		</view>
		<view class="w-full fixed bottom0 grid grid-cols-2">
			<view class="bg-white p20">
				<view class="bg91C42F text-center py17 font-bold col-white text32 radius10" @click="handUrl('/pages/my/components/bdsjrz/index')">
					本地商家入驻
				</view>
			</view>
			<view class="bg-white p20">
				<view class="bg4DB23F text-center py17 font-bold col-white text32 radius10" @click="handUrl('/pages/my/components/wdsjrz/index')">
					网店商家入驻
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
		components:{
			NavBar
		},
		methods: {
			handUrl(url){
				uni.navigateTo({
					url:url
				})
			}
		}
	}
</script>

<style>
</style>