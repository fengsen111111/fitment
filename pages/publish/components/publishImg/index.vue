<template>
	<view>
		<NavBar :navType="'标题'" :title="'发布图文'" />
		<view class="px30 text24">
			<view class="bg-white mt30 radius10 p20 flex justify-between">
				<view class="font-bold">发布位置</view>
				<view class="">四川·成都</view>
			</view>
			<view class="bg-white mt30 radius10 p20">
				<view class="font-bold">标题</view>
				<view class="mt20 px20 py14 bgF5F5F5 radius10">
					<input type="text" v-model="title" placeholder="输入标题" />
				</view>
			</view>
			<view class="bg-white mt30 radius10 p20">
				<view class=" flex justify-between">
					<view class="font-bold">话题</view>
					<view class="text20 col4DB23F" @click="handUrl('/pages/publish/components/topicSearch/index')">添加
					</view>
				</view>
				<view class="grid grid-cols-4 col4DB23F">
					<view class="mr30" v-for="item in topicList" :key="item.id">{{item.name}}</view>
					<!-- <view class="mr30">话题名称</view> -->
					<!-- <view class="mr30">话题名称</view> -->
					<!-- <view class="mr30">话题名称</view> -->
				</view>
			</view>
			<view class="bg-white mt30 radius10 p20">
				<view class="flex justify-between">
					<view class="font-bold">挂载商品</view>
					<view class="text20 col4DB23F"
						@click="handUrl('/pages/publish/components/commodityMounting/index')">添加</view>
				</view>
				<view class="flex mt30">
					<view class="w180 h180">
						<image src="@/static/home/sytjspslt1.png" class="w180 h180" mode=""></image>
					</view>
					<view class="ml20">
						<view class="flex items-center">
							<view class="border4DB23F col4DB23F px10 radius4 mr10">自营</view>
							<view class="text30 font-bold">{{'新中式沙发冬夏两用豪华'+'...'}}</view>
						</view>
						<view class="flex col333333 text20">
							<view class="">库存:9999</view>
							<view class="ml40">销量:9999</view>
						</view>
						<view class="flex col333333 text20">
							<view class="">规格:四人沙发</view>
						</view>
						<view class="flex justify-between items-center">
							<view class="text36 colFF0000 font-bold">￥6666</view>
							<view class="text28 border4DB23F col4DB23F py10 px30 radius10">取消</view>
						</view>
					</view>
				</view>
			</view>
			<view class="bg-white mt30 radius10 p20">
				<view class="font-bold">输入内容</view>
				<view class="mt20 px20 py14 bgF5F5F5 radius10">
					<textarea type="text" v-model="content" placeholder="输入内容" />
				</view>
				<view class="mt20 grid grid-cols-5">
					<image :src="item" v-for="item in images" :key="item" class="w116 h116 radius10 mb20" mode=""></image>
					<image @click="selImg()" src="@/static/home/btnBooking/upload.png" class="w116 h116 radius10 mb20"
						mode="">
					</image>
				</view>
			</view>
			<view class="bg-white mt40 radius10 px30 pb30">
				<view class="pt25">
					<view class="flex justify-between" @click="typeCli('a')">
						<view class="">公开·所有人可见</view>
						<uni-icons v-if="show_type=='a'" type="checkbox-filled" size="20" color="#4DB23F"></uni-icons>
					</view>
					<view class="bgF5F5F5 h1 mt20"></view>
				</view>
				<view class="pt25">
					<view class="flex justify-between" @click="typeCli('b')">
						<view class="">朋友·互关朋友可见</view>
						<uni-icons v-if="show_type=='b'" type="checkbox-filled" size="20" color="#4DB23F"></uni-icons>
					</view>
					<view class="bgF5F5F5 h1 mt20"></view>
				</view>
				<view class="pt25">
					<view class="flex justify-between" @click="typeCli('c')">
						<view class="">私密·仅自己可见</view>
						<uni-icons v-if="show_type=='c'" type="checkbox-filled" size="20" color="#4DB23F"></uni-icons>
					</view>
					<view class="bgF5F5F5 h1 mt20"></view>
				</view>
				<view class="pt25">
					<view class="flex justify-between" @click="typeCli('d')">
						<view class="">部分可见</view>
						<uni-icons v-if="show_type=='d'" type="checkbox-filled" size="20" color="#4DB23F"></uni-icons>
					</view>
					<view class="bgF5F5F5 h1 mt20"></view>
				</view>
				<view class="pt25">
					<view class="flex justify-between" @click="typeCli('e')">
						<view class="">不给谁看</view>
						<uni-icons v-if="show_type=='e'" type="checkbox-filled" size="20" color="#4DB23F"></uni-icons>
					</view>
					<!-- <view class="bgF5F5F5 h1 mt20"></view> -->
				</view>
			</view>
			<view class="h140"></view>
		</view>
		<view class="fixed bottom0 w-full">
			<view class=" bg-white py20 px75 ">
				<view class="bg4DB23F py20 text-center w-full radius10 col-white text32 font-bold">
					发布
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import api from '@/request/allApi.js'
	import NavBar from '@/components/navbar/index.vue'
	import {
		onChooseAvatar
	} from '@/utils/index.js'
	export default {
		data() {
			return {
				show_type: 'a', //公开状况
				images: [],
				topicList:[],//话题列表
				
				title:'',//标题
				content:'',//内容
				goods_ids:[],//商品id
				user_ids:''//用户ID  show_type为d/e时必填  
			}
		},
		components: {
			NavBar
		},
		onShow(){
			let arr = uni.getStorageSync('topicList') //存入缓存
			if(arr){
				arr = JSON.parse(arr)
				console.log('话题列表',arr) //
				this.topicList = arr
			}
		},
		methods: {
			//*选择图片*//
			selImg() {
				let that = this
				uni.chooseImage({
					count: 9, // 最多可以选择的图片张数，默认9
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
										that.images.push(res.data.url) //赋值回去
									}
								});
							})
						})
					}
				})
			},
			// 
			typeCli(str) {
				this.show_type = str
				if (str == 'd') {
					uni.navigateTo({
						url: '/pages/publish/components/partiallyVisible/index'
					})
				} else if (str == 'e') {
					uni.navigateTo({
						url: '/pages/publish/components/noLook/index'
					})
				}
			},
			back() {
				console.log('返回')
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

</style>