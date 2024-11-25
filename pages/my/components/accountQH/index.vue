<template>
	<view>
		<NavBar :navType="'标题'" :title="'切换账号'" />
		<view class="p30 text24">
			<view class="p20 mb20 radius10 bg-white text24 col333333">
				<view class="text28">当前登录</view>
				<view class="flex justify-between">
					<view class="">账号昵称</view>
					<view class="">134****1234</view>
				</view>
			</view>
			<view class="p20 flex justify-between mb20 radius10 bg-white text24 col333333">
				<view class="">账号昵称</view>
				<view class="">134****1234</view>
			</view>
			<view class="p20 flex justify-between mb20 radius10 bg-white text24 col333333">
				<view class="">账号昵称</view>
				<view class="">134****1234</view>
			</view>
		</view>
		<!--  -->
		<view class="fixed bottom0 w-full">
			<view class=" bg-white py20 px75 ">
				<view class="bg4DB23F py20 text-center w-full radius10 col-white text32 font-bold">
					新增
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