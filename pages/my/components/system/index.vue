<template>
	<view class="bgF9F9F9 h100vh">
		<NavBar :navType="'标题'" :title="'设置'" />
		<view class=" text28 p30 ">
			<view class="mb20 bg-white p30 radius10 flex justify-between">
				<view class="">账号与安全</view>
				<uni-icons type="right" @click="handUrl('/pages/my/components/accountSafe/index')" color="#666666" size="20"></uni-icons>
			</view>
			<view class="mb20 bg-white p30 radius10 flex justify-between">
				<view class="">通知设置</view>
				<uni-icons type="right" @click="handUrl('')" color="#666666" size="20"></uni-icons>
			</view>
			<view class="mb20 bg-white p30 radius10 flex justify-between">
				<view class="">隐私设置</view>
				<uni-icons type="right" @click="handUrl('/pages/my/components/privacy/index')" color="#666666" size="20"></uni-icons>
			</view>
			<view class="mb20 bg-white p30 radius10 flex justify-between">
				<view class="">提现设置</view>
				<uni-icons type="right" @click="handUrl('/pages/my/components/systemPayouts/index')" color="#666666" size="20"></uni-icons>
			</view>
			<view class="mb20 bg-white p30 radius10 flex justify-between">
				<view class="">反馈与帮助</view>
				<uni-icons type="right" @click="handUrl('/pages/my/components/feedback/index')" color="#666666" size="20"></uni-icons>
			</view>
			<view class="mb20 bg-white p30 radius10 flex justify-between">
				<view class="">平台规则中心</view>
				<uni-icons type="right" @click="handUrl('')" color="#666666" size="20"></uni-icons>
			</view>
			<view class="mb20 bg-white p30 radius10 flex justify-between">
				<view class="">资质证照</view>
				<uni-icons type="right" @click="handUrl('/pages/my/components/qualifications/index')" color="#666666" size="20"></uni-icons>
			</view>
			<view class="mb20 bg-white p30 radius10 flex justify-between">
				<view class="">用户协议</view>
				<uni-icons type="right" @click="handUrl('')" color="#666666" size="20"></uni-icons>
			</view>
			<view class="mb20 bg-white p30 radius10 flex justify-between">
				<view class="">隐私政策</view>
				<uni-icons type="right" @click="handUrl('')" color="#666666" size="20"></uni-icons>
			</view>
			<view class="mb20 bg-white p30 radius10 flex justify-between">
				<view class="">关于平台</view>
				<uni-icons type="right" @click="handUrl('')" color="#666666" size="20"></uni-icons>
			</view>
			<view class="h170"></view>
			<view @click="handUrl('/pages/login/index')"  class="mb20 colFF0000 text-center bg-white p30 radius10 ">
				退出登陆
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
			NavBar,
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
	.example::-webkit-scrollbar {
		display: none;
	}
	.checkboxItem {
		width: 96rpx;
		height: 8rpx;
		background: #4DB23F;
	}
</style>