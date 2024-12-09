<template>
	<view>
		<NavBar :navType="'标题'" :title="'实名认证'" />
		<view class="p30 text24">
			<view class="p30 radius10 bg-white text24 col333333">
				<view>
					<view class="font-bold">姓名</view>
					<view class="mt20 bgF5F5F5 py20 px30 radius10 ">
						<input type="text" v-model="form.auth_name" placeholder="输入姓名" />
					</view>
				</view>
				<view class="mt40">
					<view class="font-bold">手机号</view>
					<view class="mt20 bgF5F5F5 py20 px30 radius10">
						<input type="text" v-model="form.auth_mobile" placeholder="输入手机号" />
					</view>
				</view>
				<view class="mt40">
					<view class="font-bold">身份证号</view>
					<view class="mt20 bgF5F5F5 py20 px30 radius10">
						<input type="text" v-model="form.auth_id_card" placeholder="输入身份证号" />
					</view>
				</view>
			</view>
		</view>
		<!--  -->
		<view class="fixed bottom0 w-full">
			<view class=" bg-white py20 px75 ">
				<view @click="_updateUserInfo()" class="bg4DB23F py20 text-center w-full radius10 col-white text32 font-bold">
					提交
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
				form:{
					auth_name:'',//实名认证姓名 
					auth_mobile:'',//实名认证手机号   
					auth_id_card:''//实名认证身份证号   
				}
			}
		},
		components: {
			NavBar
		},
		methods: {
			_updateUserInfo(){
				if (!this.form.auth_name) {
					uni.showToast({
						title: '请输入姓名',
						icon: 'none',
						duration: 2000
					})
					return false
				} 
				if (!this.form.auth_mobile) {
					uni.showToast({
						title: '请输入手机号',
						icon: 'none',
						duration: 2000
					})
					return false
				} else {
					// 手机号格式验证（中国大陆手机号）
					const regex = /^1[3-9]\d{9}$/;
					if (this.form.auth_mobile && !regex.test(this.form.auth_mobile)) {
						uni.showToast({
							title: '手机号格式错误',
							icon: 'none',
							duration: 2000
						})
						return false
					}
				}
				if (!this.form.auth_id_card) {
					uni.showToast({
						title: '请输入身份证号',
						icon: 'none',
						duration: 2000
					})
					return false
				}else{
					// 身份证号格式验证
					const regex = /^[1-9]\d{5}(18|19|20)\d{2}(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])\d{3}[\dXx]$/;
					if (this.form.auth_id_card && !regex.test(this.form.auth_id_card)) {
						uni.showToast({
							title: '身份证格式错误',
							icon: 'none',
							duration: 2000
						})
						return false
					}
				}
				uni.showLoading({
					title: "加载中"
				}) 
				api.updateUserInfo({
					post_params:{
						auth_name:this.form.auth_name,
						auth_mobile:this.form.auth_mobile, 
						auth_id_card:this.form.auth_id_card,
					}
				}).then((res)=>{
					console.log('实名认证');
					uni.hideLoading()
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