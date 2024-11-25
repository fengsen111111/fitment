<template>
	<view class="bgF9F9F9 h100vh">
		<NavBar :navType="'标题'" :title="'本地商家'" />
		<view class="p30">
			<view class="p30 radius10 bg-white text24 col333333">
				<view>
					<view class="font-bold">联系人</view>
					<view class="mt20 bgF5F5F5 py20 px30 radius10 ">
						<input type="text" placeholder="输入联系人" />
					</view>
				</view>
				<view class="mt40">
					<view class="font-bold">手机号</view>
					<view class="mt20 bgF5F5F5 py20 px30 radius10">
						<input type="text" placeholder="输入手机号" />
					</view>
				</view>
				<view class="mt40">
					<view class="font-bold">店铺名称</view>
					<view class="mt20 bgF5F5F5 py20 px30 radius10">
						<input type="text" placeholder="输入店铺名称" />
					</view>
				</view>
				<view class="mt40">
					<view class="font-bold">店铺地址</view>
					<view class="mt20 bgF5F5F5 py20 px30 radius10">
						<input type="text" placeholder="输入店铺地址" />
					</view>
				</view>
				<view class="mt40">
					<view class="font-bold">店铺头牌照</view>
					<view class="mt20">
						<image src="../../../../static/home/btnBooking/upload.png" class="w116 h116 radius10" mode="">
						</image>
					</view>
				</view>
				<view class="mt40">
					<view class="font-bold">营业执照</view>
					<view class="mt20">
						<image src="../../../../static/home/btnBooking/upload.png" class="w116 h116 radius10" mode="">
						</image>
					</view>
				</view>
			
			</view>
		</view>
		<view class="h140"></view>
		<view class="flex">
			<view class="flex mx-auto mt65 text18 px30">
				<uni-icons type="circle" size="16"></uni-icons>
				<uni-icons type="checkbox-filled" size="16" color="#4DB23F"></uni-icons>
				<view class="ml10">已仔细阅读并自愿同意</view>
				<view class="col4DB23F">《商家入驻协议》</view>
				<view class="col4DB23F">《商家隐私协议》</view>
				<view class="col4DB23F">《平台商家规则》</view>
			</view>
		</view>
		<view class="w-full fixed bottom0">
			<view class="bg-white  py20 px75">
				<view class="bg4DB23F text-center py17 font-bold col-white text32 radius10">
					立即提交
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