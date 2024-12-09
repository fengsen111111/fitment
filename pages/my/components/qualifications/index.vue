<template>
	<view class="bgF9F9F9 h100vh">
		<NavBar :navType="'标题'" :title="'资质证照'" />
		
		<view class=" text28 p30 ">
			<view class="" v-for="item in dataList" :key="item.id">
				<view @click="handleItem(item)" v-if="index_id == item.id" class="mb20 bg-white p20 radius10">
					<view class="">{{item.name}}</view>
					<image src="@/static/my/qualifications/zs.png" class="w-full h460 mt20" mode=""></image>
				</view>
				<view @click="handleItem(item)" v-else class="mb20 bg-white p30 radius10 flex justify-between">
					<view class="">{{item.name}}</view>
					<uni-icons type="right" color="#666666" size="20"></uni-icons>
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
				dataList:[],
				index_id:'',//点开的key
			}
		},
		components: {
			NavBar,
		},
		onLoad(){
			this._getMaterials()
		},
		methods: {
			// 点击项
			handleItem(item){
				if(item.id == this.index_id){
					this.index_id = '' //重复点击置空
				}else{
					this.index_id = item.id //点击赋值
				}
			},
			// 平台资质
			_getMaterials(){
				api.getMaterials().then((res)=>{
					const {list} = res.data.data
					this.dataList = list
				})
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
	.example::-webkit-scrollbar {
		display: none;
	}
	.checkboxItem {
		width: 96rpx;
		height: 8rpx;
		background: #4DB23F;
	}
</style>