<template>
	<view>
		<!-- 头部 -->
		<view class="p30">
			<view class="h40"></view>
			<view class="flex justify-between col4DB23F">
				<view class="text-center flex items-center">
					<uni-icons type="location" size="24" color="#4DB23F"></uni-icons>
					<view @click="handUrl('/pages/home/components/citySel/index')" class="text24">成都</view>
				</view>
				<view class="flex text-center text30 font-bold col999999">
					<view class="" @click="handleType(1)">
						<view :class="type_index == 1?'col-black':''">关注</view>
						<view class="checkboxItem mx-auto" v-if="type_index == 1"></view>
					</view>
					<view class="ml85" @click="handleType(2)">
						<view class="" :class="type_index == 2?'col-black':''">发现</view>
						<view class="checkboxItem mx-auto" v-if="type_index == 2"></view>
					</view>
				</view>
				<view class="text-center">
					<uni-icons @click="handUrl('/pages/home/components/search/index')" type="search" size="28" color="#4DB23F"></uni-icons>
				</view>
			</view>
		</view>
		<view class="px30 ">
			<view class="flex text24 font-bold col999999">
				<view @click="handleTitle(1)" :class="title_index == 1?'col-black':''">推荐话题</view>
				<view @click="handleTitle(2)" :class="title_index == 2?'col-black':''" class="mx74">热门话题</view>
				<view @click="handleTitle(3)" :class="title_index == 3?'col-black':''" class="">最新话题</view>
			</view>
			<view class="flex justify-between mt30" style="flex-wrap: wrap;">
				<!-- 视频 -->
				<view class="bg-white w340 mb20" v-for="(item,index) in czzList" :key="item.id">
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
								<image src="../../static/home/qjflal2.png" class="w28 h28 radius20" mode="">
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
			<!--  -->
			<view class="h140"></view>
		</view>
		<Tarbar :checkIndex="2" />
	</view>
</template>

<script>
	import api from '@/request/allApi.js'
	import Tarbar from '@/components/tarbar/index.vue'
	export default {
		components: {
			Tarbar
		},
		data() {
			return {
				// 当前分类id
				type_index: 1,
				title_index:1,//当前话题
				
				czzList:[]
			}
		},
		onShow(){
			this._getArticleList()//创作列表
		},
		methods: {
			_getArticleList(){
				uni.showLoading({
					title: "加载中"
				})
				api.getArticleList({
					post_params:{
						recommend:this.title_index==1?'Y':'',//推荐
						hot:this.title_index==2?'Y':'',//热门 
						new:this.title_index==3?'Y':'',//最新
						follow:this.type_index==1?'Y':''//关注
					}
				}).then((res)=>{
					uni.hideLoading()
					console.log('res.data',res.data.data.list);
					this.czzList = res.data.data.list
				})
			},
			handleType(index) {
				this.type_index = index
				this._getArticleList()//创作列表
			},
			handleTitle(index) {
				this.title_index = index
				this._getArticleList()//创作列表
			},
			handUrl(url){
				uni.navigateTo({
					url:url
				})
			}
		}
	}
</script>

<style>
	.bg_top {
		background-image: url('../../static/home/bg.png');
		background-size: 100% 100%;
		padding: 30rpx;
	}

	.checkboxItem {
		width: 96rpx;
		height: 8rpx;
		background: #4DB23F;
	}

	.example::-webkit-scrollbar {
		display: none;
	}
</style>