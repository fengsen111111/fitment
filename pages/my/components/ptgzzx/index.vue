<template>
	<view class="bgF9F9F9 h100vh">
		<NavBar :navType="'标题'" :title="'平台规则中心'" />
		<view class=" text28 p30 ">
			<view class="mb20 bg-white p30 radius10 flex justify-between">
				<view class="">关于平台</view>
				<uni-icons type="right" @click="handUrl('/pages/login/components/fwbText?type=about_us')" color="#666666" size="20"></uni-icons>
			</view>
			<view class="mb20 bg-white p30 radius10 flex justify-between">
				<view class="">隐私政策</view>
				<uni-icons type="right" @click="handUrl('/pages/login/components/fwbText?type=privacy_rich')" color="#666666" size="20"></uni-icons>
			</view>
			<view class="mb20 bg-white p30 radius10 flex justify-between">
				<view class="">用户协议</view>
				<uni-icons type="right" @click="handUrl('/pages/login/components/fwbText?type=user_rich')" color="#666666" size="20"></uni-icons>
			</view>
			<view class="mb20 bg-white p30 radius10 flex justify-between">
				<view class="">装修服务介绍</view>
				<uni-icons type="right" @click="handUrl('/pages/login/components/fwbText?type=introduce_a_rich')" color="#666666" size="20"></uni-icons>
			</view>
			<view class="mb20 bg-white p30 radius10 flex justify-between">
				<view class="">设计服务介绍</view>
				<uni-icons type="right" @click="handUrl('/pages/login/components/fwbText?type=introduce_b_rich')" color="#666666" size="20"></uni-icons>
			</view>
			<view class="mb20 bg-white p30 radius10 flex justify-between">
				<view class="">验房服务介绍</view>
				<uni-icons type="right" @click="handUrl('/pages/login/components/fwbText?type=introduce_c_rich')" color="#666666" size="20"></uni-icons>
			</view>
			<view class="mb20 bg-white p30 radius10 flex justify-between">
				<view class="">监理服务介绍</view>
				<uni-icons type="right" @click="handUrl('/pages/login/components/fwbText?type=introduce_d_rich')" color="#666666" size="20"></uni-icons>
			</view>
			<view class="mb20 bg-white p30 radius10 flex justify-between">
				<view class="">商家入驻介绍</view>
				<uni-icons type="right" @click="handUrl('/pages/login/components/fwbText?type=store_entry_introduce')" color="#666666" size="20"></uni-icons>
			</view>
			<view class="mb20 bg-white p30 radius10 flex justify-between">
				<view class="">注销用户协议</view>
				<uni-icons type="right" @click="handUrl('/pages/login/components/fwbText?type=delete_user_rich')" color="#666666" size="20"></uni-icons>
			</view>
			<view class="mb20 bg-white p30 radius10 flex justify-between">
				<view class="">押金说明</view>
				<uni-icons type="right" @click="handUrl('/pages/login/components/fwbText?type=deposit_des')" color="#666666" size="20"></uni-icons>
			</view>
			<view class="mb20 bg-white p30 radius10 flex justify-between">
				<view class="">保证金规则</view>
				<uni-icons type="right" @click="handUrl('/pages/login/components/fwbText?type=ensure_rule')" color="#666666" size="20"></uni-icons>
			</view>
			<view class="mb20 bg-white p30 radius10 flex justify-between">
				<view class="">投流规则</view>
				<uni-icons type="right" @click="handUrl('/pages/login/components/fwbText?type=promotion_rule')" color="#666666" size="20"></uni-icons>
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