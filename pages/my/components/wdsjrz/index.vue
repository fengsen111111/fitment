<template>
	<view class="bgF9F9F9 h100vh">
		<NavBar :navType="'标题'" :title="'网店商家'" />
		<view class="p30">
			<view class="p30 radius10 bg-white text24 col333333">
				<view>
					<view class="font-bold">联系人</view>
					<view class="mt20 bgF5F5F5 py20 px30 radius10 ">
						<input type="text" v-model="form.name" placeholder="输入联系人" />
					</view>
				</view>
				<view class="mt40">
					<view class="font-bold">手机号</view>
					<view class="mt20 bgF5F5F5 py20 px30 radius10">
						<input type="number" v-model="form.mobile" placeholder="输入手机号" />
					</view>
				</view>
				<view class="mt40">
					<view class="font-bold">店铺名称</view>
					<view class="mt20 bgF5F5F5 py20 px30 radius10">
						<input type="text" v-model="form.store_name" placeholder="输入店铺名称" />
					</view>
				</view>
				<view class="mt40">
					<view class="font-bold">营业执照</view>
					<view class="mt20">
						<image src="../../../../static/home/btnBooking/upload.png" class="w116 h116 radius10" mode="">
						</image>
					</view>
				</view>
			
			</view>
		</view>
		<view class="h140"></view>
		<view class="h140"></view>
		<view class="h140"></view>
		<view class="h120"></view>
		<view class="flex">
			<view class="flex mx-auto mt65 text18 px30">
				<uni-icons @click="()=>{status=!status}" v-if="status" type="circle" size="16"></uni-icons>
				<uni-icons @click="()=>{status=!status}" v-else type="checkbox-filled" size="16" color="#4DB23F"></uni-icons>
				<view class="ml10">已仔细阅读并自愿同意</view>
				<view class="col4DB23F" @click="handUrl('/pages/login/components/fwbText?type=store_entry_introduce')">《商家入驻协议》</view>
				<view class="col4DB23F">《商家隐私协议》</view>
				<view class="col4DB23F">《平台商家规则》</view>
			</view>
		</view>
		<view class="w-full fixed bottom0">
			<view class="bg-white  py20 px75">
				<view @click="_submitEntryApply()" class="bg4DB23F text-center py17 font-bold col-white text32 radius10">
					立即提交
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
				form: {
					type: 'b',
					name: '',
					mobile: '',
					store_name: '',
					license_image: '',
					address: '',
					title_image: '',
				},
				status:true,
			}
		},
		components: {
			NavBar
		},
		methods: {
			_submitEntryApply() {
				if (this.status) {
					uni.showToast({
						title: '请勾选协议',
						icon: 'none',
						duration: 2000
					})
					return false
				}
				if (!this.form.mobile) {
					uni.showToast({
						title: '请输入手机号',
						icon: 'none',
						duration: 2000
					})
					return false
				} else {
					// 手机号格式验证（中国大陆手机号）
					const regex = /^1[3-9]\d{9}$/;
					if (this.form.mobile && !regex.test(this.form.mobile)) {
						uni.showToast({
							title: '手机号格式错误',
							icon: 'none',
							duration: 2000
						})
						return false
					}
				}
				uni.showLoading({
					title: "加载中"
				})
				api.submitEntryApply({
					post_params: {
						type: 'b',
						name: this.form.name,
						mobile: this.form.mobile,
						store_name: this.form.store_name,
						license_image: this.form.license_image,
						address: this.form.address,
						title_image: this.form.title_image,
					}
				}).then((res)=>{
					uni.hideLoading()
					console.log('提交成功');
				})
			}
		}
	}
</script>

<style>
</style>