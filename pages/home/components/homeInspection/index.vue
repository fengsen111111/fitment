<template>
	<view class="bgF9F9F9 h100vh">
	    <NavBar :navType="'标题'" :title="'验房服务'" />
		<view class="p30">
			<view v-html="content"></view>
			<view class="px44 mt100">
				<view class="bg636363 text-center py17 font-bold col-white text32 radius10">
					等待开放
				</view>
			</view>
		</view>
		<view class="w-full fixed bottom0 grid grid-cols-2">
			<view class="bg-white p20">
				<view class="bg91C42F text-center py17 font-bold col-white text32 radius10">
					匹配管家
				</view>
			</view>
			<view class="bg-white p20">
				<view class="bg4DB23F text-center py17 font-bold col-white text32 radius10" @click="handUrl('/pages/home/components/btnBookingTwo/index')">
					预约监理
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
				content:''
			}
		},
		components:{
			NavBar
		},
		created(){
			this._getRichTextContent()
		},
		methods: {
			// 验房服务
			_getRichTextContent(){
				api.getRichTextContent({
					post_params:'introduce_c_rich'
				}).then((res)=>{
					console.log('验房服务',res.data.data);
					this.content = res.data.data
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