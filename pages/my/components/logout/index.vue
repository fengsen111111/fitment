<template>
	<view class="bgF5F5F5 h100vh">
		<NavBar :navType="'标题'" :title="'注销账号'" />
		<view class="p30">
			富文本
		</view>
		<view class="h600"></view>
		<view class="h600"></view>
		<view class="h60"></view>
		<view class="flex">
			<view class="flex mx-auto mt65 text24 px30">
				<uni-icons type="circle" size="16"></uni-icons>
				<uni-icons type="checkbox-filled" size="16" color="#4DB23F"></uni-icons>
				<view class="ml10">已查看并同意</view>
				<view class="col4DB23F">《注销协议》</view>
			</view>
		</view>
		<view class="w-full fixed bottom0">
			<view class="py20 px30 ">
				<view class="bg-white text-center py22 colFF0000 text32 radius10">
					注销
				</view>
			</view>
		</view>

	</view>
</template>

<script>
	import NavBar from '@/components/navbar/index.vue'
	export default {
		data() {
			return {}
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