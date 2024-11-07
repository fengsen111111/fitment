<template>
	<view>
		<view class="flex mt176">
			<image src="../../static/login/logo.png" class="logoImg" mode=""></image>
		</view>
		<view class="text40 font-bold text-center col4DB23F mt40" style="font-family: PingFang SC, PingFang SC;">
			智装天下
		</view>
		<view class="px30 mt77 ">
			<view class="flex bg-white radius10 p30">
				<image src="../../static/login/phone.png" class="w26 h30" mode=""></image>
				<input type="text" class="text30 ml30" placeholder="输入手机号" />
			</view>
			<view class="mt40 flex">
				<view class="flex bg-white radius10 p30 " style="width: 57%;">
					<image src="../../static/login/password.png" class="w26 h30" mode=""></image>
					<input type="text" class="text30 ml30 w-full" placeholder="输入验证码" />
				</view>
			<!-- 	<view class="ml20 bg4DB23F radius10 py30 text28 px28 text-center col-white font-bold">
					发送验证码
				</view> -->
				<view class="ml20  col999999  radius10 py30 text28 px10 text-center font-bold yzm">
					59s 后重新发送
				</view>
			</view>
			
			<!--  -->
			<view class="px44 text-center mt90">
				<view class="bg4DB23F col-white font-bold py20 w-full radius10 text32" @click="handTo">
					登录/注册
				</view>
				<view class="col999999 mt40">
					第三方登录
				</view>
				<image src="../../static/login/weixin.png" class="w60 h60 mt30" mode=""></image>
				<view class="text28 font-bold col333333 mt20">
					微信授权登录
				</view>
				<view class="flex mt176">
					<view class="flex items-center mx-auto">
						<uni-icons type="circle" size="24" color="#999999"></uni-icons>
						<uni-icons type="checkbox-filled" size="24" color="#4DB23F"></uni-icons>
						<view class="ml20">已查看并同意</view>
						<view class="col4DB23F">《用户协议个隐私政策》</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
			}
		},
		methods: {
			handTo(){
				uni.navigateTo({
					url:'/pages/home/index'
				})
			}
		}
	}
</script>

<style>
	.yzm{
		border: 1px solid #999999;
	}
	.logoImg{
		width: 400rpx;
		height: 400rpx;
		margin: 0 auto;
	}
</style>
