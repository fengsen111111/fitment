<template>
	<view class="bgF9F9F9 h100vh">
	    <NavBar :navType="'标题'" :title="'装修服务'" />
		<view class="p30">
			<view v-html="content"></view>
		</view>
		<view class="w-full fixed bottom0">
			<view class="bg-white  py20 px75">
				<view class="bg4DB23F text-center py17 font-bold col-white text32 radius10" @click="handUrl('/pages/home/components/btnBooking/index')">
					立即预约
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
				content:'<view>装修服务富文本</view>'
			}
		},
		components:{
			NavBar
		},
		onLoad(){
			this._getRichTextContent()
		},
		methods: {
			// 装修服务富文本
			_getRichTextContent(){
				api.getRichTextContent({
					post_params:{
						type:'introduce_a_rich'
					}
				}).then((res)=>{
					console.log('装修服务富文本',res.data);
					const {content} = res.data.data
					this.content = content
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
</style>