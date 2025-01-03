<template>
	<view class="bgF9F9F9 h100vh">
		<NavBar :navType="'搜索'" ref="navbar" @searchVal="searchVal()" />
		<view v-if="czzList.length==0">
			<view class="p30 text20 col666666">
				<view class="col-black">热门</view>
				<view class="grid grid-cols-2 px20 mt16">
					<view class="flex" @click="handSeaVal(item)" v-for="(item,index) in hot_words" :key="index">
						<view :class="index==0||index==1?'colFF0000':index==2||index==3?'colFBB333':'col91C42F'">
							NO.{{index+1}}</view>
						<view class="ml10">{{item}}</view>
					</view>
				</view>
			</view>
			<view class="p30 text20 col666666">
				<view class="col-black">历史</view>
				<view class="grid grid-cols-4 text-center" style="grid-column-gap:30rpx">
					<view class="mt20 bgF5F5F5 col666666 py6 radius8" v-for="item in [1,2,3,4]" :key="item">历史名称</view>
				</view>
			</view>
			<view class="text-center mt40">
				<image src="@/static/home/search/null.png" class="w272 h180 mx-auto" mode=""></image>
				<view class="text30 font-bold col999999 mt20">暂无任何内容</view>
			</view>
		</view>
		<view class="px30" v-else>
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
</template>

<script>
	import NavBar from '@/components/navbar/index.vue'
	import api from '@/request/allApi.js'
	export default {
		data() {
			return {
				hot_words: [], //热门推荐词
				czzList: [] //创作数据
			}
		},
		components: {
			NavBar
		},
		onShow() {
			this._getBaseTypes()
			// this._getArticleList() //创作列表
		},
		methods: {
			// 搜索
			searchVal(val) {
				this._getArticleList() //创作列表
			},
			// 点击项
			handSeaVal(str) {
				this.$refs.navbar.value = str
				console.log('str', str);
				this._getArticleList() //创作列表
			},
			// 配置项
			_getBaseTypes() {
				api.getBaseTypes().then((res) => {
					console.log('基本数据', res.data.data.hot_words);
					this.hot_words = res.data.data.hot_words
				})
			},
			// 话题
			_getArticleList() {
				uni.showLoading({
					title: "加载中"
				})
				api.getArticleList({
					post_params: {
						key_word: this.$refs.navbar.value, //推荐
					}
				}).then((res) => {
					uni.hideLoading()
					console.log('res.data', res.data.data.list);
					this.czzList = res.data.data.list
				})
			},

		}
	}
</script>

<style>
	.btn1 {
		background: linear-gradient(270deg, #4DB23F 0%, #91C42F 100%);
		border-radius: 50rpx;
		width: 260rpx;
		text-align: center;
		font-size: 32rpx;
		font-weight: bold;
		padding: 25rpx 0rpx;
		color: white;
		font-family: PingFang SC, PingFang SC;
	}

	.btn2 {
		background: linear-gradient(134deg, #FA311D 0%, #FF8E34 100%);
		border-radius: 50rpx;
		width: 260rpx;
		text-align: center;
		font-size: 32rpx;
		font-weight: bold;
		padding: 25rpx 0rpx;
		color: white;
		font-family: PingFang SC, PingFang SC;
	}

	.bgSign {
		background-image: url('../../../../static/home/sign/bg.png');
		background-size: 100% 100%;
		height: 100vh;
		width: 100%;
	}
</style>