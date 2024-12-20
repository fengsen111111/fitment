<template>
	<view class="bgF5F5F5">
		<view class="h40"></view>
		<view class="flex text-center text20 justify-around p40">
			<view class="flex">
				<view class="">
					<image src="../../static/message/icon1.png" class="w60 h60 " mode=""></image>
					<view class="mt-10">客服消息</view>
				</view>
				<view class="bgFF0000 w16 h16 radius_bfb50 relative left-24"></view>
			</view>
			<view class="flex">
				<view class="">
					<image src="../../static/message/icon2.png" class="w60 h60 " mode=""></image>
					<view class="mt-10">点赞评论</view>
				</view>
				<view class="bgFF0000 w16 h16 radius_bfb50 relative left-24"></view>
			</view>
			<view class="flex">
				<view class="">
					<image src="../../static/message/icon3.png" class="w60 h60 " mode=""></image>
					<view class="mt-10">我的消息</view>
				</view>
				<view class="bgFF0000 w16 h16 radius_bfb50 relative left-24"></view>
			</view>
		</view>
		<view class="px30 text20">
			<view class="bg-white radius10 flex items-center p30 mb30" v-for="item in [1,2,3,4,5]" :key="item">
				<view class="flex ">
					<image src="../../static/home/qjflal2.png" class="w60 h60 radius_bfb50" mode=""></image>
					<view class="bgFF0000 w16 h16 radius_bfb50 relative left-16"></view>
				</view>
				<view class="w-full ml20">
					<view class="flex justify-between items-center">
						<view class="text28 font-bold">商家名称</view>
						<view class="col666666">12-16 08:22</view>
					</view>
					<view class="col666666">节省时间和精力‌：通过选择全屋整装或整装装修，消费者...</view>
				</view>
			</view>
		</view>
		<Tarbar :checkIndex="4" />
	</view>
</template>

<script>
	import Tarbar from '@/components/tarbar/index.vue'
	export default {
		components: {
			Tarbar
		},
		data() {
			return {}
		},
		methods: {

		}
	}
</script>

<style>

</style>