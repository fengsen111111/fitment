<template>
	<view class="bgF9F9F9 h100vh">
		<NavBar :navType="'标题'" :title="'账号与安全'" />
		<view class=" text28 p30 ">
			<view class=" bg-white p30 radius10">
				<view class="flex justify-between">
					<view class="">手机号绑定</view>
					<view class="flex items-center">
						<view class="">{{userInfo.mobile_two}}</view>
						<view @click="()=>{$refs.popupPhone.open('bottom')}" class="col4DB23F text20 ml20">更换</view>
					</view>
				</view>
				<view class="flex mt20 justify-between">
					<view class="">圈风号</view>
					<view class="">{{userInfo.id}}</view>
				</view>
				<view class="flex mt20 justify-between">
					<view class="">实名认证</view>
					<view class="flex items-center">
						<view v-if="userInfo.has_auth_status=='Y'" class="col4DB23F">已通过</view>
						<view v-else-if="userInfo.has_auth_status=='N'" class="col999999">未认证</view>
						<view v-else class="col-black">认证中</view>
						<uni-icons type="right" @click="handUrl('/pages/my/components/realName/index')" color="#666666"
							class="ml10" size="20"></uni-icons>
					</view>
				</view>
			</view>

			<view class=" bg-white p30 radius10 mt20 items-center">
				<view class="flex justify-between">
					<view class="mt10">个性化广告管理</view>
					<switch @change="handleSwitchChange" :checked="switchStatus" color="#91C42F"
						style="transform:scale(0.7)" />
				</view>
			</view>

			<view class="h256"></view>

			<view class="px44" v-if="userInfo.has_auth_status=='N'">
				<view class="bg000000 col-white font-bold text32 py22 radius10 text-center" style="opacity: 0.6;">
					需通过实名认证
				</view>
			</view>
			<view class="h256"></view>
			<view class="h256"></view>
			<view class="h40"></view>
			<view @click="handUrl('/pages/my/components/accountQH/index')"
				class="mb20 col4DB23F text-center bg-white p30 radius10 ">
				切换账号
			</view>
			<view @click="handleZX()" class="mb20 colFF0000 text-center bg-white p30 radius10 ">
				注销账号
			</view>
		</view>
		<!-- 更换手机号 -->
		<uni-popup ref="popupPhone" type="bottom" border-radius="10px 10px 0 0">
			<view class="bgF9F9F9 text28 p30" style="border-radius: 10px 10px 0 0;">
				<view class="flex justify-between items-center">
					<view class=" font-bold">验证</view>
					<view class="w15 text24 colFF0000">
						<!-- 验证码错误 -->
						</view>
					<uni-icons type="closeempty" size="20" @click="()=>{$refs.popupPhone.close()}"></uni-icons>
				</view>
				<view class="font-bold col-black mt100">输入新手机号</view>
				<view class="flex justify-between items-center mt25">
					<view class="bg-white p20 flex items-center radius10" style="width: 60%;">
						<uni-icons type="phone" size="16"></uni-icons>
						<input type="number" v-model="form.new_mobile" class="ml20" placeholder="输入手机号" />
					</view>
					<view v-if="code" @click="sendCode()" class="bg4DB23F radius10 py20 px40 col-white font-bold ">
						发送验证码
					</view>
					<view v-else class=" col999999 radius10 py17 text28 px10 text-center font-bold yzm">
						{{time}}s 后重新发送
					</view>
				</view>
				<view class="flex justify-between items-center mt25">
					<view class="font-bold ">旧手机号验证码</view>
					<view class="bg-white p20 flex items-center radius10" style="width: 60%;">
						<uni-icons type="locked" size="16"></uni-icons>
						<input type="number" v-model="form.old_mobile_code" class="ml20" placeholder="输入验证码" />
					</view>
				</view>
				<view class="flex justify-between items-center mt25">
					<view class="font-bold ">新手机号验证码</view>
					<view class="bg-white p20 flex items-center radius10" style="width: 60%;">
						<uni-icons type="locked" size="16"></uni-icons>
						<input type="number" v-model="form.new_mobile_code" class="ml20" placeholder="输入验证码" />
					</view>
				</view>

				<view class="px30">
					<view @click="_updateUserInfo()"
						class="bg4DB23F mt77 py17 radius10 col-white font-bold text-center ">
						确认
					</view>
				</view>
			</view>
		</uni-popup>
		<!-- 注销验证 -->
		<uni-popup ref="popupZX" type="bottom" border-radius="10px 10px 0 0">
			<view class="bgF9F9F9 text28 p30" style="border-radius: 10px 10px 0 0;">
				<view class="flex justify-between items-center">
					<view class=" font-bold">验证</view>
					<view class="text24 colFF0000 w15">
						<!-- 验证码错误 -->
					</view>
					<uni-icons type="closeempty" size="20" @click="()=>{$refs.popupZX.close()}"></uni-icons>
				</view>
				<view class="flex justify-between items-center mt25">
					<view class="bg-white p20 flex items-center radius10" style="width: 60%;">
						<uni-icons type="locked" size="16"></uni-icons>
						<input type="number" v-model="form.old_mobile_code" class="ml20" placeholder="输入验证码" />
					</view>
					<view v-if="code" @click="sendPhone()" class="bg4DB23F radius10 py20 px40 col-white font-bold ">
						发送验证码
					</view>
					<view v-else class=" col999999 radius10 py17 text28 px10 text-center font-bold yzm">
						{{time}}s 后重新发送
					</view>
				</view>
				<view class="px30">
					<view @click="handUrl('/pages/my/components/logout/index?code='+form.old_mobile_code)"
						class="bg4DB23F mt77 py17 radius10 col-white font-bold text-center ">
						确认
					</view>
				</view>
			</view>
		</uni-popup>
	</view>
</template>

<script>
	import NavBar from '@/components/navbar/index.vue'
	import api from '@/request/allApi.js'
	export default {
		data() {
			return {
				time: 60,
				timer: '', //计时器
				code: true,

				form: {
					new_mobile: '', //修改手机号-新  
					old_mobile_code: '', //手机号验证码-旧  
					new_mobile_code: '', //手机号验证码-新  
				},

				phone: '', //旧手机号

				switchStatus: false, // 默认开关状态为关闭

				userInfo: {},
				// czzInfo:{},
			}
		},
		watch: {
			time(newVal, oldVal) {
				if (newVal == 0) {
					clearInterval(this.timer); //清除定时器
					this.code = true //重置发送
					this.time = 60
				}
			}
		},
		components: {
			NavBar,
		},
		onShow() {
			// console.log('userInfo', this.$store.state.userInfo);
			// console.log('czzInfo', this.$store.state.czzInfo);
			// if (this.$store.state.userInfo) {
			// 	this.userInfo = this.$store.state.userInfo
			// 	this.phone = this.$store.state.userInfo.mobile //原来手机号				
			// }
			// if (this.$store.state.czzInfo) {
			// 	this.czzInfo = this.$store.state.czzInfo//创作者信息
			// }
			this._getUserInfo()//获取用户信息
		},
		methods: {
			// 获取用户信息
			_getUserInfo(){
				api.getUserInfo().then((res)=>{
					console.log('用户信息',res.data.data);
					this.userInfo = res.data.data
					this.phone = res.data.data.mobile
					this.userInfo.mobile_two = this.userInfo.mobile.replace(/^(\d{3})\d{4}(\d{4})/,'$1****$2')
					this.switchStatus =  res.data.data.open_ad == 'Y'?true:false
					// 存入本地储存
					uni.setStorageSync('userInfo', JSON.stringify(res.data.data))
					// 存入vuex
					this.$store.commit('setUserInfo', res.data.data)
				})
			},
			// 注销账号
			handleZX() {
				this.$refs.popupZX.open('bottom')
			},
			// 切换状态
			handleSwitchChange(event) {
				// 获取开关状态（true为开启，false为关闭）
				this.switchStatus = event.detail.value
				console.log('当前开关状态:', event.detail.value);
				uni.showLoading({
					title: "加载中"
				})
				api.updateUserInfo({
					post_params: {
						open_ad: event.detail.value ? 'Y' : 'N'
					}
				}).then((res) => {
					uni.hideLoading()
					console.log('提交个性广告管理');
					if(res.data.code==1){
						uni.showToast({
							title: '设置成功！',
							icon: 'success',
							duration: 2000
						})
					}
				})
			},
			// 提交
			_updateUserInfo() {
				uni.showLoading({
					title: "加载中"
				})
				api.updateUserInfo({
					post_params: {
						new_mobile: this.form.new_mobile,
						old_mobile_code: this.form.old_mobile_code,
						new_mobile_code: this.form.new_mobile_code,
					}
				}).then((res) => {
					uni.hideLoading()
					console.log('提交手机号绑定信息');
					if(res.data.code==1){
						uni.showToast({
							title: '设置成功！',
							icon: 'success',
							duration: 2000
						})
						this.$refs.popupPhone.close()
						this._getUserInfo()//获取用户信息
					}
				})
			},
			// 发送验证码
			sendCode() {
				if (!this.form.new_mobile) {
					uni.showToast({
						title: '请输入手机号',
						icon: 'none',
						duration: 2000
					})
					return false
				} else {
					// 手机号格式验证（中国大陆手机号）
					const regex = /^1[3-9]\d{9}$/;
					if (this.form.new_mobile && !regex.test(this.form.new_mobile)) {
						uni.showToast({
							title: '手机号格式错误',
							icon: 'none',
							duration: 2000
						})
						return false
					}
				}
				this.code = false;
				this.timer = setInterval(() => {
					this.time = this.time - 1
				}, 1000);
				// 旧手机验证码
				this.sendPhone()
				// 新手机验证码
				api.getMobileCode({
					post_params: {
						mobile: this.form.new_mobile
					}
				}).then((res) => {
					console.log('新号码验证码发送', res.data.data.code);
					this.form.new_mobile_code = res.data.data.code
				})
			},
			// 发送验证码（旧手机）
			sendPhone() {
				this.code = false;
				this.timer = setInterval(() => {
					this.time = this.time - 1
				}, 1000);
				// 旧手机验证码
				api.getMobileCode({
					post_params: {
						mobile: this.phone
					}
				}).then((res) => {
					console.log('旧号码验证码发送', res.data.data.code);
					this.form.old_mobile_code = res.data.data.code
				})
			},
			handUrl(url) {
				uni.navigateTo({
					url: url
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