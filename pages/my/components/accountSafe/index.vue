<template>
	<view class="bgF9F9F9 h100vh">
		<NavBar :navType="'标题'" :title="'账号与安全'" />
		<view class=" text28 p30 ">
			<view class=" bg-white p30 radius10">
				<view class="flex justify-between">
					<view class="">手机号绑定</view>
					<view class="flex items-center">
						<view class="">134****1234</view>
						<view @click="()=>{$refs.popupPhone.open('bottom')}" class="col4DB23F text20 ml20">更换</view>
					</view>
				</view>
				<view class="flex mt20 justify-between">
					<view class="">圈风号</view>
					<view class="">XXXXXXXXX</view>
				</view>
				<view class="flex mt20 justify-between">
					<view class="">实名认证</view>
					<view class="flex items-center">
						<view class="col4DB23F">已通过</view>
						<view class="col-black">认证中</view>
						<view class="col999999">未认证</view>
						<uni-icons type="right" @click="handUrl('/pages/my/components/realName/index')" color="#666666" class="ml10" size="20"></uni-icons>
					</view>
				</view>
			</view>
			
			<view class=" bg-white p30 radius10 mt20 items-center">
				<view class="flex justify-between">
					<view class="mt10">个性化广告管理</view>
					<switch color="#91C42F" style="transform:scale(0.7)"/>
				</view>
			</view>
			
			<view class="h256"></view>
			
			<view class="px44">
				<view class="bg000000 col-white font-bold text32 py22 radius10 text-center" style="opacity: 0.6;">
					需通过实名认证
				</view>
			</view>
			<view class="h256"></view>
			<view class="h256"></view>
			<view class="h40"></view>
			<view  @click="handUrl('/pages/my/components/accountQH/index')" class="mb20 col4DB23F text-center bg-white p30 radius10 ">
				切换账号
			</view>
			<view  @click="handUrl('/pages/my/components/logout/index')" class="mb20 colFF0000 text-center bg-white p30 radius10 ">
				注销账号
			</view>
		</view>
		<!-- 更换手机号 -->
		<uni-popup ref="popupPhone" type="bottom" border-radius="10px 10px 0 0">
			<view class="bgF9F9F9 text28 p30" style="border-radius: 10px 10px 0 0;">
				<view class="flex justify-between items-center">
					<view class=" font-bold">验证</view>
					<view class="text24 colFF0000">验证码错误</view>
					<uni-icons type="closeempty" size="20" @click="()=>{$refs.popupPhone.close()}"></uni-icons>
				</view>
				<view class="font-bold col-black mt100">输入新手机号</view>
				<view class="flex justify-between items-center mt25">
					<view class="bg-white p20 flex items-center radius10" style="width: 60%;">
						<uni-icons type="phone" size="16"></uni-icons>
						<input type="text" class="ml20" placeholder="输入手机号" />
					</view>
					<view class="bg4DB23F radius10 py20 px40 col-white font-bold ">
						发送验证码
					</view>
				</view>
				<view class="flex justify-between items-center mt25">
					<view class="font-bold ">旧手机号验证码</view>
					<view class="bg-white p20 flex items-center radius10" style="width: 60%;">
						<uni-icons type="locked" size="16"></uni-icons>
						<input type="text" class="ml20" placeholder="输入验证码" />
					</view>
				</view>
				<view class="flex justify-between items-center mt25">
					<view class="font-bold ">新手机号验证码</view>
					<view class="bg-white p20 flex items-center radius10" style="width: 60%;">
						<uni-icons type="locked" size="16"></uni-icons>
						<input type="text" class="ml20" placeholder="输入验证码" />
					</view>
				</view>
				
				<view class="px30">
					<view class="bg4DB23F mt77 py17 radius10 col-white font-bold text-center ">
					     确认	
					</view>
				</view>
			</view>
		</uni-popup>
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