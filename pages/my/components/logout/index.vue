<template>
	<view class="bgF5F5F5 h100vh">
		<NavBar :navType="'标题'" :title="'注销账号'" />
		<view class="p30">
			<view v-html="content"></view>
		</view>
		<view class="w-full fixed bottom0">
			<view class="flex">
				<view class="flex mx-auto mt65 text24 px30">
					<uni-icons @click="chenckHandOld" v-if="chenck" type="circle" size="16"></uni-icons>
					<uni-icons @click="chenckHandOld" v-else type="checkbox-filled" size="16" color="#4DB23F"></uni-icons>
					<view class="ml10">已查看并同意</view>
					<view class="col4DB23F" @click="handUrl('/pages/login/components/fwbText?type=delete_user_rich')">《注销协议》
					</view>
				</view>
			</view>
			<view class="py20 px30 ">
				<view class="bg-white text-center py22 colFF0000 text32 radius10" @click="_deleteUser()">
					注销
				</view>
			</view>
		</view>

	</view>
</template>

<script>
	import NavBar from '@/components/navbar/index.vue'
	import api from '@/request/allApi.js'
	export default {
		data() {
			return {
				code: '',
				chenck: false, //勾选
				content:''
			}
		},
		components: {
			NavBar
		},
		onLoad(option) {
			this.code = option.code
			this._getRichTextContent()
		},
		methods: {
			_getRichTextContent() {
				api.getRichTextContent({
					post_params: {
						type: 'delete_user_rich'
					}
				}).then((res) => {
					this.content = res.data.data
				})
			},
			chenckHandOld() {
				console.log('执行');
				this.chenck = !this.chenck
			},
			_deleteUser() {
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
				// 验证验证码
				api.checkMobileCode({
					post_params:{
						mobile:this.$store.state.userInfo.mobile,
						mobile_code: this.code
					}
				}).then((res)=>{
					uni.hideLoading()
					const {data} = res.data
					if(data.result=='Y'){
						// 注销
						api.deleteUser({
							post_params: {
								verify_code: this.code, //验证码
							}
						}).then((res) => {
							console.log('注销账号');
						    uni.navigateTo({
						    	url:'/pages/login/index'
						    })
						})
					}else{
						uni.showToast({
							title: data.message,
							icon: 'none',
							duration: 2000
						})
					}
					
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
</style>