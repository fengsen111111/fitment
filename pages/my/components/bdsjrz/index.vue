<template>
	<view class="bgF9F9F9 h100vh">
		<NavBar :navType="'标题'" :title="'本地商家'" />
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
					<view class="font-bold">店铺地址</view>
					<view class="mt20 bgF5F5F5 py20 px30 radius10 flex items-center">
						<input type="text" class="w-full" v-model="form.address" placeholder="输入店铺地址" />
						<image src="../../../../static/home/btnBooking/dw.png" class="w22 h28" @click="handDw" mode="">
						</image>
					</view>
				</view>
				<view class="mt40">
					<view class="font-bold">店铺LOGO</view>
					<view class="mt20 grid grid-cols-5">
						<image @click="selImgLogo()" :src="form.logo" v-if="form.logo" class="w116 h116 radius10 mb20"
							mode=""></image>
						<image @click="selImgLogo()" v-else src="@/static/home/btnBooking/upload.png"
							class="w116 h116 radius10 mb20" mode="">
						</image>
					</view>
				</view>
				<view class="mt40">
					<view class="font-bold">营业执照</view>
					<view class="mt20 grid grid-cols-5">
						<image @click="selImg()" :src="form.license_image" v-if="form.license_image"
							class="w116 h116 radius10 mb20" mode=""></image>
						<image @click="selImg()" v-else src="@/static/home/btnBooking/upload.png"
							class="w116 h116 radius10 mb20" mode="">
						</image>
					</view>
				</view>
			</view>
		</view>
		<view class="h140"></view>
		<view class="w-full fixed bottom0">
			<view class="flex mb20">
				<view class="flex items-center mx-auto mt65 text18 px30">
					<uni-icons @click="()=>{status=!status}" v-if="status" type="circle" size="16"></uni-icons>
					<uni-icons @click="()=>{status=!status}" v-else type="checkbox-filled" size="16"
						color="#4DB23F"></uni-icons>
					<view class="ml10">已仔细阅读并自愿同意</view>
					<view class="col4DB23F"
						@click="handUrl('/pages/login/components/fwbText?type=store_entry_introduce')">《商家入驻协议》</view>
					<view class="col4DB23F">《商家隐私协议》</view>
					<view class="col4DB23F">《平台商家规则》</view>
				</view>
			</view>
			<view class="bg-white  py20 px75">
				<view @click="_submitEntryApply()"
					class="bg4DB23F text-center py17 font-bold col-white text32 radius10">
					立即提交
				</view>
			</view>
		</view>

	</view>
</template>

<script>
	import NavBar from '@/components/navbar/index.vue'
	import api from '@/request/allApi.js'
	import {
		onChooseAvatar
	} from '@/utils/index.js'
	export default {
		data() {
			return {
				form: {
					type: 'a',
					name: '',
					mobile: '',
					store_name: '',
					license_image: '',
					address: '',
					location: '',
					logo: '',
				},
				status: true,
			}
		},
		components: {
			NavBar
		},
		onShow() {
			if (uni.getStorageSync('xdwz')) {
				this.form = {
					type: 'a',
					name: '联系人刘某',
					mobile: '17877887878',
					store_name: '刘某的本地商家',
					license_image: '',
					address: '',
					location: '',
					logo: '',
				}
				this.form.address = JSON.parse(uni.getStorageSync('xdwz')).address
				this.form.location = JSON.parse(uni.getStorageSync('xdwz')).location
				console.log('地址show', this.form);
			}
		},
		methods: {
			//*选择图片*//
			selImg() {
				let that = this
				uni.chooseImage({
					count: 1, // 最多可以选择的图片张数，默认9
					sizeType: ['compressed'], // original 原图，compressed 压缩图，默认二者都有
					sourceType: ['album', 'camera'], // album 从相册选图，camera 使用相机，默认二者都有
					success: function(res) {
						console.log('res', res.tempFiles[0]);
						const file = res.tempFiles[0]
						// 上传图片
						api.getTicket().then((res) => {
							const {
								ticket_time
							} = res.data.data
							api.getUploadType().then((res_two) => {
								const {
									folder,
									file_type
								} = res_two.data.data.config
								const params = {
									"ticket_time": ticket_time,
									"folder": folder ? folder : 'topicImg',
									"file_type": file_type ? file_type : 'image',
								}
								onChooseAvatar(file, params, (error, res) => {
									if (error) {
										console.log('上传失败:', res);
									} else {
										console.log('上传地址:', res.data.url);
										that.form.license_image =
											'https://api.qfcss.cn' + res.data.url
									}
								});
							})
						})
					}
				})
			},
			//*选择图片logo*//
			selImgLogo() {
				let that = this
				uni.chooseImage({
					count: 1, // 最多可以选择的图片张数，默认9
					sizeType: ['compressed'], // original 原图，compressed 压缩图，默认二者都有
					sourceType: ['album', 'camera'], // album 从相册选图，camera 使用相机，默认二者都有
					success: function(res) {
						console.log('res', res.tempFiles[0]);
						const file = res.tempFiles[0]
						// 上传图片
						api.getTicket().then((res) => {
							const {
								ticket_time
							} = res.data.data
							api.getUploadType().then((res_two) => {
								const {
									folder,
									file_type
								} = res_two.data.data.config
								const params = {
									"ticket_time": ticket_time,
									"folder": folder ? folder : 'topicImg',
									"file_type": file_type ? file_type : 'image',
								}
								onChooseAvatar(file, params, (error, res) => {
									if (error) {
										console.log('上传失败:', res);
									} else {
										console.log('上传地址:', res.data.url);
										that.form.logo = 'https://api.qfcss.cn' + res
											.data.url
									}
								});
							})
						})
					}
				})
			},
			// 定位小区
			handDw() {
				uni.navigateTo({
					url: '/pages/my/components/map/index'
				})
			},
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
						type: 'a',
						name: this.form.name,
						mobile: this.form.mobile,
						store_name: this.form.store_name,
						license_image: this.form.license_image,
						address: this.form.address,
						location: this.form.location,
						logo: this.form.logo,
					}
				}).then((res) => {
					uni.hideLoading()
					console.log('提交成功');
					if (res.data.code == 1) {
						uni.showToast({
							title: '提交成功！',
							icon: 'success',
							duration: 2000
						})
						setTimeout(() => {
							uni.navigateBack()
						}, 2000)
					}
				})
			}
		}
	}
</script>

<style>
</style>