<template>
	<view class="bgF9F9F9 h100vh">
		<NavBar :navType="'标题'" :title="'反馈'" />
		<view class="p30">
			<view class="p30 radius10 bg-white text24 col333333">
				<view>
					<view class="font-bold">反馈内容</view>
					<view class="mt20 bgF5F5F5 py20 px30 radius10 ">
						 <textarea class="textarea" v-model="question" placeholder="输入遇到的问题"></textarea>
					</view>
					<view class="mt20 grid grid-cols-5">
						<image v-for="item in images" :key="item" :src="item" class="w116 h116 radius10" mode="">
						</image>
						<image  @click="selImg()" src="../../../../static/home/btnBooking/upload.png" class="w116 h116 radius10" mode="">
						</image>
					</view>
				</view>
			</view>
		</view>
		<view class="w-full fixed bottom0">
			<view class="bg-white  py20 px75">
				<view @click="_submitOpinion()" class="bg4DB23F text-center py17 font-bold col-white text32 radius10">
					保存
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
				type:'',//类型
				question:'',//内容
				images:[]//图片
			}
		},
		onLoad(option){
			this.type = option.type
		},
		components: {
			NavBar
		},
		methods: {
			_submitOpinion(){
				uni.showLoading({
					title: "加载中"
				})
				api.submitOpinion({
					post_params:{
						type: this.type,
						question: this.question,
						images: this.images
					}
				}).then((res)=>{
					uni.hideLoading()
					console.log('提交成功');
					if(res.data.code==1){
						uni.showToast({
							title: '提交成功！',
							icon: 'success',
							duration: 2000
						})
						setTimeout(()=>{
							uni.navigateBack()
						},2000)
					}
				})
			},
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
										that.images.push('https://api.qfcss.cn'+res.data.url)
									}
								});
							})
						})
					}
				})
			},
		}
	}
</script>

<style>
</style>