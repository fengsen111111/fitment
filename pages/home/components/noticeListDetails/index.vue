<template>
	<view class="bgF9F9F9 h100vh">
		<NavBar :navType="'标题'" :title="'活动详情'" />
		<view class="p30">
			<view class="text36 font-bold">{{item.title}}</view>
			<view class="mt25" v-html="item.content"></view>
		</view>
	</view>
</template>

<script>
	import NavBar from '@/components/navbar/index.vue'
	import api from '@/request/allApi.js'
	export default {
		data() {
			return {
				option:{},
				item:{}//数据
			}
		},
		components: {
			NavBar,
		},
		onLoad(option){
			this.option = option
			if(option.type=='gglb'){
				this._getNoticeDetail()//公告详情
			}else{
			    this._getActivityDetail()//	每日活动富文本详情
			}
		},
		methods: {
			// 公告详情
			_getNoticeDetail(){
				api.getNoticeDetail({
					post_params:{
						id:this.option.id
					}
				}).then((res)=>{
					console.log('数据',res.data.data);
					this.item = res.data.data
				})
			},
			// 每日活动富文本详情
			_getActivityDetail(){
				api.getActivityDetail({
					post_params:{
						id:this.option.id
					}
				}).then((res)=>{
					console.log('数据',res.data.data);
					this.item = res.data.data
				})
			}
		}
	}
</script>

<style>
	
</style>