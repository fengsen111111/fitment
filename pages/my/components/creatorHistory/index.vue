<template>
	<view>
		<NavBar :navType="'标题'" :title="title" />
		<view class="p30 text24">
			<view class="flex bg-white radius10 mb20" v-for="item in dataList" :key="item.id">
				<view v-if="item.type=='b'">
					<!-- 视频 -->
					<view class="w200 h140 bg-black" v-if="item.video">
						<image @click="handUrl('/pages/home/components/video/index?id='+item.id)"
							:src="'https://api.qfcss.cn'+item.images[0]" class="w200 h140" mode=""></image>
					</view>
				</view>
				<view v-else>
					<!-- 图片 -->
					<image @click="handUrl('/pages/home/components/graphic/index?id='+item.id)"
						:src="'https://api.qfcss.cn'+item.images[0]" class="w200 h140" mode=""></image>
				</view>
				<view class="py10 px20 w-full">
					<view class="text20 font-bold" style="line-height: 30rpx;">
						<!-- 节省时间和精力‌：通过选择全屋整装或整装装修，消费者可以减少在装修过程中花费的时间 -->
						{{item.title}}
					</view>
					<view class="flex items-center">
						<image src="@/static/home/qjflal2.png" class="w28 h28 radius20" mode=""></image>
						<!-- <image :src="item.head_image" class="w28 h28 radius20" mode=""></image> -->
						<view class="ml10 text20">{{item.nickname?item.nickname:'???'}}</view>
					</view>
					<view class="flex items-center justify-between w-full">
						<view class="text20 col666666">{{item.create_time}}</view>
						<view @click="handGd(item)">
							<view class="bgItem"></view>
							<view class="bgItem"></view>
							<view class="bgItem"></view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<!-- 分享 -->
		<uni-popup ref="popupCZZ" background-color="#F5F5F5" borderRadius="20rpx 20rpx 0rpx 0rpx">
			<view class="p40">
				<view class="flex justify-between items-center mb30">
					<view class="font-bold text28">分享</view>
					<uni-icons type="closeempty" size="20" @click="()=>{$refs.popupCZZ.close()}"></uni-icons>
				</view>
				<view class="">
					<view class="grid grid-cols-4">
						<view class="text-center">
							<view class="w60 h60 mx-auto">
								<image src="@/static/my/creatorCenter/wx.png" class="w60 h60 radius_bfb50" mode=""></image>
							</view>
							<view class="text28 col333333 mt10">微信</view>
						</view>
						<view class="text-center">
							<view class="w60 h60 mx-auto">
								<image src="@/static/my/creatorCenter/pyq.png" class="w60 h60 radius_bfb50" mode=""></image>
							</view>
							<view class="text28 col333333 mt10">朋友圈</view>
						</view>
						<view class="text-center">
							<view class="w60 h60 mx-auto">
								<image src="@/static/my/creatorCenter/nbfx.png" class="w60 h60 radius_bfb50" mode=""></image>
							</view>
							<view class="text28 col333333 mt10">微信</view>
						</view>
					</view>
					<view class="grid grid-cols-4 mt60">
						<view @click="_collectArticle()" class="text-center" v-if="title=='我的收藏'">
							<view class="w60 h60 mx-auto">
								<image src="@/static/my/creatorCenter/qxsc.png" class="w60 h60 radius_bfb50" mode=""></image>
							</view>
							<view class="text28 col333333 mt10">取消收藏</view>
						</view>
						<view  @click="_deleteArticle()" class="text-center">
							<view class="w60 h60 mx-auto">
								<image src="@/static/my/creatorCenter/sc_2.png" class="w60 h60 radius_bfb50" mode=""></image>
							</view>
							<view class="text28 col333333 mt10">删除</view>
						</view>
					</view>
				</view>
			</view>
		</uni-popup>
	</view>
</template>

<script>
	import NavBar from '@/components/navbar/index.vue'
	import api from '@/request/allApi.js'
	export default {
		data() {
			return {
				title:'',//标题
				
				dataList:[],//数据列表
				
				params:{},//参数
				
				item:{}//点击数据
			}
		},
		components: {
			NavBar
		},
		onLoad(option){
			this.title = option.title
			if(this.title=='圈过'){
				this.params = {
					star:"Y"
				}
			}else if(this.title=='我的收藏'){
				this.params = {
					collect:"Y"
				}
			}else{
				// 浏览记录
				this.params = {
					foot:"Y"
				}
			}
			this._getArticleList()
		},
		methods: {
			// 取消收藏
			_collectArticle(){
				uni.showLoading({
					title: "加载中"
				})
				api.collectArticle({
					post_params:{
						id:this.item.id
					}
				}).then((res)=>{
					uni.hideLoading()
					if(res.data.code=='1'){
						this.$refs.popupCZZ.close()
						uni.showToast({
							title: '操作成功！',
							icon: 'success',
							duration: 2000
						})
						const _this =this
						setTimeout(()=>{
							_this._getArticleList()
						},2000)
					}
				})
			},
			// 删除
			_deleteArticle(){
				uni.showLoading({
					title: "加载中"
				})
				api.deleteArticle({
					post_params:{
						id:this.item.id
					}
				}).then((res)=>{
					uni.hideLoading()
					if(res.data.code=='1'){
						this.$refs.popupCZZ.close()
						uni.showToast({
							title: '操作成功！',
							icon: 'success',
							duration: 2000
						})
						const _this =this
						setTimeout(()=>{
							_this._getArticleList()
						},2000)
					}
				})
			},
			// 更多
			handGd(item){
				// console.log('item',item);
				this.item = item
				this.$refs.popupCZZ.open('bottom')
			},
			// 
			_getArticleList(){
				uni.showLoading({
					title: "加载中"
				})
				api.getArticleList({
					post_params:{
						...this.params
					}
				}).then((res)=>{
					uni.hideLoading()
					const {list} = res.data.data
					this.dataList = list
					console.log('数据列表',this.dataList);
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
	.bgItem {
		background-color: #666666;
		width: 4rpx;
		height: 4rpx;
		margin-bottom: 4rpx;
	}
</style>