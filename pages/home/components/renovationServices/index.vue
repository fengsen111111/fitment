<template>
	<view class="bgF9F9F9 h100vh">
	    <NavBar :navType="'标题'" :title="'装修服务'" />
		<view class="p30">
			<view class="">富文本</view>
			
		</view>
		<view class="w-full fixed bottom0">
			<view class="bg-white  py20 px75">
				<view class="bg4DB23F text-center py17 font-bold col-white text32 radius10" @click="handUrl('/pages/home/components/btnBooking/index')">
					立即预约
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