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
				<view class="flex items-center">
					<input v-model="phone" type="number" maxlength="11" class="text30 ml30" placeholder="输入手机号" />
				</view>
			</view>
			<view class="mt40 flex">
				<view class="flex bg-white radius10 p30 " style="width: 57%;">
					<image src="../../static/login/password.png" class="w26 h30" mode=""></image>
					<input v-model="yzmCode" type="text" class="text30 ml30 w-full" placeholder="输入验证码" />
				</view>
				<view @click="sendCode()" v-if="code"
					class="ml20 bg4DB23F radius10 py30 text28 px28 text-center col-white font-bold">
					发送验证码
				</view>
				<view v-else class="ml20  col999999  radius10 py30 text28 px10 text-center font-bold yzm">
					{{time}}s 后重新发送
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
						<uni-icons @click="chenckHand" v-if="chenck" type="circle" size="24"
							color="#999999"></uni-icons>
						<uni-icons @click="chenckHand" v-else type="checkbox-filled" size="24"
							color="#4DB23F"></uni-icons>
						<view class="ml20">已查看并同意</view>
						<view class="col4DB23F" @click="handUrl('/pages/login/components/fwbText?type=user_rich')">《用户协议》</view>
						<view class="col4DB23F" @click="handUrl('/pages/login/components/fwbText?type=privacy_rich')">《隐私政策》</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import api from '@/request/allApi.js'
	import {
		debounce,
		throttle
	} from '@/utils/index.js'
	export default {
		data() {
			return {
				code: true,
				time: 60,
				timer: '', //计时器
				chenck: false,

				phone: 18488448484,
				yzmCode: 303390,

			}
		},
		watch: {
			time(newVal, oldVal) {
				if (newVal == 0) {
					clearInterval(this.timer); //清除定时器
					this.code = true //重置发送
				}
			}
		},
		methods: {
			handUrl(url){
				uni.navigateTo({
					url:url
				})
			},
			validatePhone() {
				this.phone = this.phone.replace(/[^\d]/g, '');
				const regex = /^1[3-9]\d{9}$/;
				if (this.phone && !regex.test(this.phone)) {
					console.log('手机号格式不正确');
				}
			},
			// 勾选协议节流
			chenckHand: throttle(function() {
				this.chenckHandOld()
			}, 3000),
			chenckHandOld() {
				console.log('执行');
				this.chenck = !this.chenck
			},
			sendCode() {
				this.code = false;
				this.timer = setInterval(() => {
					this.time = this.time - 1
				}, 1000);
				api.getMobileCode({
					post_params: {
						mobile: this.phone
					}
				}).then((res) => {
					console.log('验证码发送', res);
				})
			},
			// 登陆节流
			handTo: throttle(function() {
				this.handToOld()
			}, 3000),
			handToOld() {
				if (!this.phone) {
					uni.showToast({
						title: '请输入手机号',
						icon: 'none',
						duration: 2000
					})
					return false
				} else {
					// 手机号格式验证（中国大陆手机号）
					const regex = /^1[3-9]\d{9}$/;
					if (this.phone && !regex.test(this.phone)) {
						uni.showToast({
							title: '手机号格式错误',
							icon: 'none',
							duration: 2000
						})
						return false
					}
				}
				if (!this.yzmCode) {
					uni.showToast({
						title: '请输入验证码',
						icon: 'none',
						duration: 2000
					})
					return false
				}
				if (this.chenck) {
					uni.showToast({
						title: '请勾选协议',
						icon: 'none',
						duration: 2000
					})
					return false
				}
				uni.showLoading({
					title: "加载中"
				}) 
				api.loginAndRegister({
						post_params: {
							mobile: this.phone,
							mobile_code: this.yzmCode,
							// 下面两个是切换账号使用
							// user_id: '',
							// old_token: '',
						}
					}).then((res) => {
						uni.hideLoading()
						console.log('注册登陆成功', res);
						const {
							token
						} = res.data.data
						uni.setStorageSync('token', token) //token 存入本地
					})
					.catch((res) => {
						uni.hideLoading()
						// 请求错误
						uni.navigateTo({ //跳转登陆
							url: '/pages/home/index'
						})
					})

			}
		}
	}
</script>

<style>
	.yzm {
		border: 1px solid #999999;
	}

	.logoImg {
		width: 400rpx;
		height: 400rpx;
		margin: 0 auto;
	}
</style>