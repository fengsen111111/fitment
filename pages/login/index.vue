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
				<view @click="getWeChatCode">
					<image src="../../static/login/weixin.png" class="w60 h60 mt30" mode=""></image>
					<view class="text28 font-bold col333333 mt20">
						微信授权登录
					</view>
				</view>
				<view class="flex text24 mt176">
					<view class="flex items-center mx-auto">
						<uni-icons @click="chenckHand" v-if="chenck" type="circle" size="24"
							color="#999999"></uni-icons>
						<uni-icons @click="chenckHand" v-else type="checkbox-filled" size="24"
							color="#4DB23F"></uni-icons>
						<view class="ml20">已查看并同意</view>
						<view class="col4DB23F" @click="handUrl('/pages/login/components/fwbText?type=user_rich')">
							《用户协议》</view>
						<view class="col4DB23F" @click="handUrl('/pages/login/components/fwbText?type=privacy_rich')">
							《隐私政策》</view>
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

				phone: 18481020570,
				yzmCode: null,

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
		onLoad() {
			const hasWechatLogin = uni.getStorageSync('wechat_login_tag') || null;
			if (hasWechatLogin) {
				this.checkWeChatCode();
			}
		},
		methods: {
			// 重定向回来本页面检查有没有code
			checkWeChatCode() {
				let code = this.getUrlCode('code');
				if (code) {
					console.log('code',code);
				}
			},
			// 正则匹配请求地址中的参数函数
			getUrlCode(name) {
				return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.href) ||
				[, ''
				])[1].replace(/\+/g, '%20')) || null
			},
			// 看地址中有没有code参数,如果没有code参数的话则请求微信官方的接口并获取包含code的回调链接
			getWeChatCode() {
				//用于退出登录回来不会再调一次授权登录
				uni.setStorageSync('wechat_login_tag', 'true');
				const appID = 'wx87e8f8dfbdc6c22a'; //公众号appID
				const callBack = 'https://api.qfcss.cn'; //回调地址 就是你的完整地址登录页
				//通过微信官方接口获取code之后，会重新刷新设置的回调地址【redirect_uri】
				window.location.href = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=' +
					appID + '&redirect_uri=' + encodeURIComponent(callBack) +
					'&response_type=code&scope=snsapi_userinfo&state=1#wechat_redirect'
			},
			//----------------------------------------------
			handUrl(url) {
				uni.navigateTo({
					url: url
				})
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
				this.timer = 60
				this.timer = setInterval(() => {
					this.time = this.time - 1
				}, 1000);
				uni.showLoading({
					title: "加载中"
				})
				api.getMobileCode({
					post_params: {
						mobile: this.phone
					}
				}).then((res) => {
					uni.hideLoading()
					console.log('验证码发送', res.data.data);
					const {
						code
					} = res.data.data
					this.yzmCode = code
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
				// 校验验证码
				api.checkMobileCode({
					post_params: {
						mobile: this.phone,
						mobile_code: this.yzmCode
					}
				}).then((res) => {
					uni.hideLoading()
					const {
						result,
						message
					} = res.data.data
					console.log('result', result,message);
					if (result == 'Y') {
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
								console.log('注册登陆成功', res.data.data);
								const {
									token
								} = res.data.data
								uni.setStorageSync('token', token) //token 存入本地
								console.log('this.phone',this.phone);
								uni.setStorageSync('phone', this.phone) //手机号 存入本地
								uni.navigateTo({ //跳转登陆
									url: '/pages/home/index'
								})
							})
							.catch((res) => {
								uni.hideLoading()
							})
					}else{
						uni.showToast({
							title: message,
							icon: 'none',
							duration: 2000
						})
					}
				})

			}
		}
	}
</script>

<style>
	.logoImg {
		width: 400rpx;
		height: 400rpx;
		margin: 0 auto;
	}
</style>