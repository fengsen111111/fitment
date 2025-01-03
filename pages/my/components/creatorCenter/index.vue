<template>
	<view class="">
		<view class="bgSign" :style="{ backgroundImage: `url(${backgroundImage})` }">
			<view class="h40"></view>
			<view class="flex justify-between items-center col-white pt25 px30">
				<uni-icons type="left" size="30" color="#ffffff" @click="back()"></uni-icons>
				<view class="flex items-center">
					<view @click="bjsz()" class="flex items-center bg6E7D89 py10 px20 radius30">
						<uni-icons type="image" size="18" color="#ffffff"></uni-icons>
						<view class="font-bold col-white text16 ml10">背景设置</view>
					</view>
					<uni-icons @click="handUrl('/pages/my/components/creatorNotice/index')" type="gear" size="30"
						color="#ffffff" class="ml36"></uni-icons>
					<uni-icons type="redo" size="30" color="#ffffff" class="ml36"></uni-icons>
				</view>
			</view>
			<view class="flex items-center mt40 px30">
				<view class="w150 h150">
					<image v-if="form.uper_image" :src="form.uper_image" class="w150 h150 radius_bfb50" mode=""></image>
					<image v-else src="@/static/my/userImg.png" class="w150 h150 radius_bfb50" mode=""></image>
				</view>
				<view class="ml20 w-full col-white">
					<view class="flex w-full items-center justify-between">
						<view class="flex items-center">
							<image v-if="form.gender=='a'" src="@/static/my/sex1.png" class=" w32 h32 radius_bfb50"
								mode=""></image>
							<image v-else src="@/static/my/sex2.png" class=" w32 h32 radius_bfb50" mode=""></image>
							<view class="text36 font-bold ml10">{{form.name?form.name:'用户昵称'}}</view>
						</view>
						<view class="text20 font-bold bg91C42F radius4 px30">博主</view>
					</view>
					<view class="mt20 text20" style="line-height: 30rpx;">
						<view class="">账号ID: {{form.id}}</view>
						<view class="">四川·成都</view>
					</view>
				</view>
			</view>
			<view class="mt30 px30 text20 col-white" style="line-height: 30rpx;">{{form.des?form.des:'有趣的简介可以吸引粉丝！'}}</view>
			<!-- mt65 -->
			<view class="mt50 px30 col-white flex justify-between items-center">
				<view class="flex">
					<view class="text-center">
						<view class="text30 font-bold">{{form.allow_number?form.allow_number:0}}</view>
						<view class="text20">关注</view>
					</view>
					<view class="text-center ml60">
						<view class="text30 font-bold">{{form.fans_number?form.fans_number:0}}</view>
						<view class="text20">粉丝</view>
					</view>
					<view class="text-center ml60">
						<view class="text30 font-bold">{{form.star_and_collection?form.star_and_collection:0}}</view>
						<view class="text20">获赞与收藏</view>
					</view>
				</view>
				<view @click="handUrl('/pages/my/components/creatorCenterEdit/index')"
					class="text24 py10 px30 radius30 bg6E7D89 ">编辑资料</view>
			</view>
			<view class="mt30 flex text24 px30 justify-between">
				<view class="bg6E7D89 flex radius8 col-white py22 w160">
					<view @click="handUrl('/pages/my/components/creatorHistory/index?title=圈过')" class="flex items-center mx-auto">
						<view class="w30 h30">
							<image src="@/static/my/creatorCenter/dz.png" class="w30 h30" mode=""></image>
						</view>
						<view class="ml10">圈过</view>
					</view>
				</view>
				<view class="bg6E7D89 flex radius8 col-white py22 w160">
					<view @click="handUrl('/pages/my/components/creatorHistory/index?title=我的收藏')"
						class="flex items-center mx-auto">
						<view class="w30 h30">
							<image src="@/static/my/creatorCenter/sc.png" class="w30 h30" mode=""></image>
						</view>
						<view class="ml10">我的收藏</view>
					</view>
				</view>
				<view class="bg6E7D89 flex radius8 col-white py22 w160">
					<view @click="handUrl('/pages/my/components/creatorHistory/index?title=浏览记录')" class="flex items-center mx-auto">
						<view class="w30 h30">
							<image src="@/static/my/creatorCenter/time.png" class="w30 h30" mode=""></image>
						</view>
						<view class="ml10">浏览记录</view>
					</view>
				</view>
				<view class="bg6E7D89 flex radius8 col-white py22 w160">
					<view @click="handUrl('/pages/my/components/creatorTLlist/index')"
						class="flex items-center mx-auto">
						<view class="w30 h30">
							<image src="@/static/my/creatorCenter/tldd.png" class="w30 h30" mode=""></image>
						</view>
						<view class="ml10">投流订单</view>
					</view>
				</view>
			</view>
		</view>
		<view class="bgF5F5F5 mt-30 " style="border-radius: 30rpx 30rpx 0rpx 0rpx;">
			<view class="px36">
				<view class="py14 text28">我的作品</view>
				<view class="flex col666666 text24 justify-between items-center">
					<view @click="handleStatus('b')" :class="my_status=='b'?'col-black border_bot_4DB23F':''">已发布</view>
					<view @click="handleStatus('a')" :class="my_status=='a'?'col-black border_bot_4DB23F':''">审核中</view>
					<view @click="handleStatus('c')" :class="my_status=='c'?'col-black border_bot_4DB23F':''">未通过</view>
					<view @click="handleStatus('d')" :class="my_status=='d'?'col-black border_bot_4DB23F':''">隐藏</view>
				</view>
				<view class="mt30 grid grid-cols-2" style="grid-column-gap:10rpx">
					<view class="bg-white w340 mb20" v-for="(item,index) in czlb" :key="item.id">
						<view v-if="item.type=='b'">
							<!-- 视频 -->
							<view class="w340 h575 bg-black" v-if="item.video">
								<image @click="handUrl('/pages/home/components/video/index?id='+item.id)"
									:src="'https://api.qfcss.cn'+item.images[0]" class="w340 h575" mode=""></image>
							</view>
						</view>
						<view v-else>
							<!-- 图片 -->
							<image @click="handUrl('/pages/home/components/graphic/index?id='+item.id)"
								:src="'https://api.qfcss.cn'+item.images[0]" class="w340 h575" mode=""></image>
						</view>
						<view class="px20 col333333 pb14">
							<view class="font-bold text28">{{item.title.length>20?item.title.slice(0,20):item.title}}
							</view>
							<view class="flex justify-between text20 mt10">
								<view class="flex items-center">
									<image src="@/static/home/qjflal2.png" class="w28 h28 radius20" mode="">
									</image>
									<view class="ml10">一只小海螺</view>
								</view>
								<view class="flex items-center">
									<uni-icons type="eye" size="20" color="#4DB23F"></uni-icons>
									<view class="ml10">6666</view>
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import api from '@/request/allApi.js'
	import {
		onChooseAvatar
	} from '@/utils/index.js'
	export default {
		data() {
			return {
				// 初始化背景图片路径 https://via.placeholder.com/300x200.png
				backgroundImage: "",

				form: {},
				czlb: [] ,//创作列表
				my_status:'b',//a审核中 b已发布  c未通过  d隐藏 
			}
		},
		onLoad() {
			this._getUperMaterial()
			this._getArticleList()
		},
		onShow(){
			if(uni.getStorageSync('czzbj')){
				this.backgroundImage = uni.getStorageSync('czzbj')?uni.getStorageSync('czzbj'):''
				console.log('创作者背景',this.backgroundImage);
			}
		},
		methods: {
			handleStatus(key){
				this.my_status = key
				this._getArticleList()
			},
			// 获取创作者资料
			_getUperMaterial() {
				api.getUperMaterial().then((res) => {
					const {
						data
					} = res.data
					this.form = data
					this.form.uper_image = 'https://api.qfcss.cn'+this.form.uper_image
					console.log('获取创作者资料', this.form);
				})
			},
			//获取创作列表 
			_getArticleList() {
				uni.showLoading({
					title: "加载中"
				})
				api.getArticleList({
					post_params: {
						store_id: '',
						my_status: this.my_status
					}
				}).then((res) => {
					uni.hideLoading()
					const {
						list
					} = res.data.data
					this.czlb = list
					console.log('创作列表', this.czlb);
				})
			},
			back() {
				uni.navigateBack()
			},
			handUrl(url) {
				uni.navigateTo({
					url: url
				})
			},
			// 背景设置
			bjsz() {
				// this.backgroundImage = 'https://via.placeholder.com/300x200.png'
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
										that.backgroundImage ='https://api.qfcss.cn' + res.data.url
										uni.setStorageSync('czzbj',that.backgroundImage)
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
	.bgSign {
		/* background-image: url('../../../../static/home/sign/bg.png'); */
		background-size: 100% 100%;
		background-color: #374858;
		/* height: 100vh; */
		height: 702rpx;
		width: 100%;
	}
</style>