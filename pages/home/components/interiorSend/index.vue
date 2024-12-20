<template>
	<view class="bgF9F9F9 h100vh">
	    <NavBar :navType="'标题'" :title="'内部分享'" />
		<view class="px30 text28">
			<view v-for="item in [1,2,3,4]" :key="item" class="mt30 flex items-center justify-between p30 bg-white radius10">
				<view class="flex items-center">
					<image src="@/static/home/qjflal2.png" class="w60 h60 radius_bfb50" mode="">
					</image>
					<view class="ml20">一只小海螺</view>
				</view>
				<view class="font-bold px30 bg4DB23F radius10 col-white py10">
					发送
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
		}
	}
</script>

<style>
</style>