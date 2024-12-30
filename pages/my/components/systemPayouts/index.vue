<template>
	<view>
		<NavBar :navType="'标题'" :title="'提现设置'" />
		<view class="p30 text24">
			<view class=" bg-white px30 py20 radius10 mb20 items-center">
				<view class="flex justify-between">
					<view class="mt10 text28">设置提现密码</view>
					<switch @click="handle()" color="#91C42F" :checked="szmm" style="transform:scale(0.7)"/>
				</view>
			</view>
			
			<view class="px36 mt236" v-if="userInfo.has_pay_password=='Y'">
				<view class="flex items-center text30 bg636363 col-white text-center radius10 py30">
					<view class="flex mx-auto items-center">
						<uni-icons type="checkbox-filled" size="30" color="#4DB23F"></uni-icons>
						<view class="ml30">设置成功</view>
					</view>
				</view>
			</view>
		</view>
		<!-- 验证 -->
		<uni-popup ref="popupYZ" background-color="#F5F5F5" borderRadius="20rpx 20rpx 0rpx 0rpx">
			<view class="p40">
				<view class="grid grid-cols-3 items-center mb30">
					<view class="font-bold text28 text-left">验证</view>
					<view class="w15 text24 colFF0000 text-center">
						<!-- 验证码错误 -->
						</view>
					<view class="flex justify-between">
						<view class="w15"></view>
						<uni-icons type="closeempty" size="20"  @click="close()"></uni-icons>
					</view>
				</view>
				<view class="">
					<view class="flex justify-between items-center mt25">
						<view class="bg-white p20 flex items-center radius10" style="width: 60%;">
							<uni-icons type="locked" size="16"></uni-icons>
							<input type="text" v-model="form.verify_code" class="ml20" placeholder="输入验证码" />
						</view>
						<view v-if="code" @click="sendCode()" class="bg4DB23F radius10 py20 px40 col-white font-bold ">
							发送验证码
						</view>
						<view v-else class=" col999999 radius10 py17 text28 px10 text-center font-bold yzm">
							{{time}}s 后重新发送
						</view>
					</view>
					<view class="px36 mt77">
						<view  @click="()=>{$refs.popupPas.open('bottom')}" class="bg4DB23F col-white font-bold text32 py17 radius10 text-center">确定</view>
					</view>
				</view>
			</view>
		</uni-popup>
		<!-- 输入密码 -->
		<uni-popup ref="popupPas" background-color="#F5F5F5" borderRadius="20rpx 20rpx 0rpx 0rpx">
			<view class="p40">
				<view class="flex justify-between items-center mb30">
					<view class="font-bold text28 text-left">输入密码</view>
					<uni-icons type="closeempty" size="20"  @click="close()"></uni-icons>
				</view>
				<view class="">
					<view class="flex justify-between items-center mt25 w-full">
						<view class="bg-white p20 flex items-center w-full radius10">
							<uni-icons type="locked" size="16" color="#999999"></uni-icons>
							<input type="text" v-model="form.password" class="ml20 w-full" placeholder="输入密码" />
						</view>
					</view>
					<view class="px36 mt77">
						<view @click="()=>{$refs.popupPasTwo.open('bottom')}" class="bg4DB23F col-white font-bold text32 py17 radius10 text-center">确定</view>
					</view>
				</view>
			</view>
		</uni-popup>
		<!-- 再次输入 -->
		<uni-popup ref="popupPasTwo" background-color="#F5F5F5" borderRadius="20rpx 20rpx 0rpx 0rpx">
			<view class="p40">
				<view class="grid grid-cols-3 items-center mb30">
					<view class="font-bold text28 text-left">再次输入</view>
					<view class="text24  text-center" :class="showPas?'col4DB23F':'colFF0000'">{{showPas?'密码通过':''}}</view>
					<view class="flex justify-between">
						<view class="w15"></view>
						<uni-icons type="closeempty" size="20"  @click="close()"></uni-icons>
					</view>
				</view>
				<view class="">
					<view class="flex justify-between items-center mt25 w-full">
						<view class="bg-white p20 flex items-center w-full radius10">
							<uni-icons type="locked" size="16" color="#999999"></uni-icons>
							<input type="text" v-model="form.passwordTwo" class="ml20 w-full" placeholder="输入密码" />
						</view>
					</view>
					<view class="px36 mt77">
						<view @click="setPayPas()" class="bg4DB23F col-white font-bold text32 py17 radius10 text-center">确定</view>
					</view>
				</view>
			</view>
		</uni-popup>
		<!-- 关闭验证 -->
		<uni-popup ref="popupGBCode" background-color="#F5F5F5" borderRadius="20rpx 20rpx 0rpx 0rpx">
			<view class="p40">
				<view class="grid grid-cols-3 items-center mb30">
					<view class="font-bold text28 text-left">密码关闭</view>
					<view class="w15 text24 colFF0000 text-center">
						<!-- 验证码错误 -->
						</view>
					<view class="flex justify-between">
						<view class="w15"></view>
						<uni-icons type="closeempty" size="20"  @click="close()"></uni-icons>
					</view>
				</view>
				<view class="">
					<view class="flex justify-between items-center mt25">
						<view class="bg-white p20 flex items-center radius10" style="width: 60%;">
							<uni-icons type="locked" size="16"></uni-icons>
							<input type="text" v-model="form.verify_code" class="ml20" placeholder="输入验证码" />
						</view>
						<view v-if="code" @click="sendCode()" class="bg4DB23F radius10 py20 px40 col-white font-bold ">
							发送验证码
						</view>
						<view v-else class=" col999999 radius10 py17 text28 px10 text-center font-bold yzm">
							{{time}}s 后重新发送
						</view>
					</view>
					<view class="px36 mt77">
						<view  @click="_closeUserPayPassword()" class="bg4DB23F col-white font-bold text32 py17 radius10 text-center">确定</view>
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
				szmm:false,
				
				time: 60,
				timer: '', //计时器
				code: true,
				
				form:{
					mobile:'',//手机号 
					verify_code:'',//验证码   
					password:'',//支付密码 
					passwordTwo:'',//支付密码 
				},
				
				showPas:false,//是否一直
				
				userInfo:{}//用户信息
			}
		},
		components: {
			NavBar
		},
		watch: {
			time(newVal, oldVal) {
				if (newVal == 0) {
					clearInterval(this.timer); //清除定时器
					this.code = true //重置发送、
					this.time = 60
				}
			}
		},
		onShow(){
			this._getUserInfo()//用户信息
		},
		methods: {
			// 用户信息
			_getUserInfo(){
				api.getUserInfo().then((res)=>{
					console.log('用户信息',res.data.data);
					this.userInfo = res.data.data
					this.userInfo.mobile_two = this.userInfo.mobile.replace(/^(\d{3})\d{4}(\d{4})/,'$1****$2')
					// 存入本地储存
					uni.setStorageSync('userInfo', JSON.stringify(res.data.data))
					// 存入vuex
					this.$store.commit('setUserInfo', res.data.data)
					this.form.mobile = res.data.data.mobile //手机号
					this.szmm = res.data.data.has_pay_password=='Y'?true:false
				})
			},
			// 关闭支付密码
			_closeUserPayPassword(){
				uni.showLoading({
					title: "加载中"
				})
				api.closeUserPayPassword({
					post_params:{
						verify_code:this.form.verify_code
					}
				}).then((res)=>{
					uni.hideLoading()
					console.log('关闭提现密码');
					if(res.data.code==1){
						uni.showToast({
							title: '关闭支付密码成功',
							icon: 'none',
							duration: 2000
						})
						this.close()//关闭弹框
						const _this = this
						setTimeout(()=>{
							_this._getUserInfo()//重新获取用户信息
						})
					}
				})
			},
			// 设置支付密码
			setPayPas(){
				if(this.form.password === this.form.passwordTwo){
					uni.showLoading({
						title: "加载中"
					})
					this.showPas = true //密码通过
					api.setUserPayPassword({
						post_params:{
							password: this.form.password,//支付密码
						}
					}).then((res)=>{
						uni.hideLoading()
						console.log('设置支付密码成功');
						if(res.data.code==1){
							uni.showToast({
								title: '设置支付密码成功',
								icon: 'none',
								duration: 2000
							})
							this.close()//关闭弹框
							const _this = this
							setTimeout(()=>{
								_this._getUserInfo()//重新获取用户信息
							})
						}
					})
				}else{
					this.showPas = false //密码不通过
					uni.showToast({
						title: '密码不一致',
						icon: 'none',
						duration: 2000
					})
				}
				
			},
			// 打开弹框
			handle(){
				this.szmm = !this.szmm
				console.log('this.szmm',this.szmm);
				if(this.szmm){
					this.$refs.popupYZ.open('bottom')
				}else{
					// 关闭提现密码
					this.$refs.popupGBCode.open('bottom')
				}
			},
			// 发送验证码
			sendCode() {
				this.code = false;
				this.timer = setInterval(() => {
					this.time = this.time - 1
				}, 1000);
				// 手机验证码
				api.getMobileCode({
					post_params: {
						mobile: this.form.mobile
					}
				}).then((res) => {
					console.log('号码验证码发送', res.data.data.code);
					this.form.verify_code = res.data.data.code //验证码
				})
			},
			handUrl(url) {
				uni.navigateTo({
					url: url
				})
			},
			close(){
				this.$refs.popupYZ.close()
				this.$refs.popupPas.close()
				this.$refs.popupPasTwo.close()
				this.$refs.popupGBCode.close()//关闭支付密码
				
			}
		}
	}
</script>

<style>
	.bgItem {
		background-color: #666666;
		width: 4rpx;
		height: 4rpx;
		margin-bottom: 4rpx;
	}
</style>