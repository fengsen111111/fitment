<template>
	<view class="bgF9F9F9 h100vh">
		<NavBar :navType="'搜索'" @searchVal="searchVal" />
		<view class="text-center " v-if="!dataList.length">
			<view class="h206"></view>
			<image src="@/static/home/search/null.png" class="w272 h180 mx-auto" mode=""></image>
			<view class="text30 font-bold col999999 mt20 ">暂无任何内容</view>
		</view>
		<view class="p30 text20 " v-else>
			<view class="grid grid-cols-4 text-center" style="grid-column-gap:30rpx">
				<view class="mt20 bgF5F5F5  py6 radius8" @click="handleChe(index)" :class="item.check?'col4DB23F border4DB23F':'col666666'"  v-for="(item,index) in dataList" :key="item.id">{{item.name}}</view>
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
				search:'',//关键词
				dataList:[]//话题列表
			}
		},
		components:{NavBar},
		onLoad(){
			this._getTopicList()
		},
		methods: {
			handleChe(index){
				let arr = []
				this.dataList[index].check = !this.dataList[index].check
				this.dataList.map((item)=>{
					if(item.check){
						arr.push(item)
					}
				})
				uni.setStorageSync('topicList', JSON.stringify(arr)) //存入缓存
			},
			//话题列表
			_getTopicList(){
				api.getTopicList({
					post_params:{
						key_word:this.search,//关键词
						recommend:'Y'//推荐
					}
				}).then((res)=>{
					const {list} = res.data.data
					list.map((item)=>{
						item.check = false
					})
					console.log('话题列表');
					this.dataList = list
				})
			},
			searchVal(val){
				console.log('搜索',val);
				this.search = val
				this._getTopicList()//搜索
			}
		}
	}
</script>

<style>
	.btn1{
		background: linear-gradient( 270deg, #4DB23F 0%, #91C42F 100%);
		border-radius: 50rpx;
		width: 260rpx;
		text-align: center;
		font-size: 32rpx;
		font-weight: bold;
		padding: 25rpx 0rpx;
		color: white;
		font-family: PingFang SC, PingFang SC;
	}
	.btn2{
		background: linear-gradient( 134deg, #FA311D 0%, #FF8E34 100%);
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