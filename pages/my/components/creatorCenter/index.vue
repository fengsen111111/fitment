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
					<image src="@/static/my/userImg.png" class="w150 h150 radius_bfb50" mode=""></image>
				</view>
				<view class="ml20 w-full col-white">
					<view class="flex w-full items-center justify-between">
						<view class="flex items-center">
							<image v-if="form.gender=='a'" src="@/static/my/sex1.png" class=" w32 h32 radius_bfb50"
								mode=""></image>
							<image v-else src="@/static/my/sex2.png" class=" w32 h32 radius_bfb50" mode=""></image>
							<view class="text36 font-bold ml10">{{form.name}}</view>
						</view>
						<view class="text20 font-bold bg91C42F radius4 px30">博主</view>
					</view>
					<view class="mt20 text20" style="line-height: 30rpx;">
						<view class="">账号ID: XXXXXXXXXX</view>
						<view class="">四川·成都</view>
					</view>
				</view>
			</view>
			<view class="mt30 px30 text20 col-white" style="line-height: 30rpx;">
				脖子粗短的人，往往缺乏一种挺拔的感觉。如果在本身就短的脖子上戴项链就会使脖子显得更短。</view>
			<view class="mt65 px30 col-white flex justify-between items-center">
				<view class="flex">
					<view class="text-center">
						<view class="text30 font-bold">666</view>
						<view class="text20">关注</view>
					</view>
					<view class="text-center ml60">
						<view class="text30 font-bold">666</view>
						<view class="text20">粉丝</view>
					</view>
					<view class="text-center ml60">
						<view class="text30 font-bold">666</view>
						<view class="text20">获赞与收藏</view>
					</view>
				</view>
				<view @click="handUrl('/pages/my/components/creatorCenterEdit/index')"
					class="text24 py10 px30 radius30 bg6E7D89 ">编辑资料</view>
			</view>
			<view class="mt30 flex text24 px30 justify-between">
				<view class="bg6E7D89 flex radius8 col-white py22 w160">
					<!-- @click="handUrl('/pages/my/components/creatorHistory/index?title=圈过')" -->
					<view class="flex items-center mx-auto">
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
					<!-- @click="handUrl('/pages/my/components/creatorHistory/index?title=浏览记录')" -->
					<view class="flex items-center mx-auto">
						<view class="w30 h30">
							<image src="@/static/my/creatorCenter/time.png" class="w30 h30" mode=""></image>
						</view>
						<view class="ml10">浏览记录</view>
					</view>
				</view>
				<view class="bg6E7D89 flex radius8 col-white py22 w160">
					<view @click="handUrl('/pages/my/components/creatorTLlist/index')" class="flex items-center mx-auto">
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
					<view class="col-black border_bot_4DB23F">已发布</view>
					<view class="">审核中</view>
					<view class="">未通过</view>
					<view class="">隐藏</view>
				</view>
				<view class="mt30 grid grid-cols-2" style="grid-column-gap:10rpx">
					<view class="bg-white w340 mb20" v-for="(item,index) in czlb" :key="item.id">
						<!-- <image @click="handUrl('/pages/home/components/video/index')" src="@/static/home/sytjspfm1.png" class="w340 h540" mode=""></image> -->
						<image @click="handUrl('/pages/home/components/video/index')" :src="item.image"
							class="w340 h540" mode=""></image>
						<view class="px20 col333333 pb14">
							<view class="font-bold">‌{{item.title}}</view>
							<view class="flex col4DB23F px16 justify-between text20 mt10">
								<view class="flex items-center">
									<view class="w28 h28">
										<image src="@/static/my/creatorCenter/video.png" class="w28 h28" mode="">
										</image>
									</view>
									<view class="ml10 text24">????</view>
								</view>
								<view class="flex items-center">
									<view class="w28 h28">
										<image src="@/static/my/creatorCenter/dz_check.png" class="w28 h28" mode="">
										</image>
									</view>
									<view class="ml10 text24">{{item.star_number}}</view>
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
	export default {
		data() {
			return {
				// 初始化背景图片路径 https://via.placeholder.com/300x200.png
				backgroundImage: "",

				form: {},
				czlb: [] //创作列表
			}
		},
		onLoad() {
			this._getUperMaterial()
			this._getArticleList()
		},
		methods: {
			bjsz(){
				this.backgroundImage='https://via.placeholder.com/300x200.png'
			},
			// 获取创作者资料
			_getUperMaterial() {
				api.getUperMaterial().then((res) => {
					const {
						data
					} = res.data
					this.form = data
					console.log('获取创作者资料');
				})
			},
			//获取创作列表 
			_getArticleList() {
				api.getArticleList({
					post_params: {
						store_id: ''
					}
				}).then((res) => {
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
			}

		}
	}
</script>

<style>
	.bgSign {
		/* background-image: url('../../../../static/home/sign/bg.png'); */
		/* background-size: 100% 100%; */
		background-color: #374858;
		/* height: 100vh; */
		height: 702rpx;
		width: 100%;
	}
</style>