<template>
	<view class="bgF9F9F9 h100vh">
	    <NavBar :navType="'标题'" :title="'店铺入驻'" />
		<view class="p30">
			<view v-html="content"></view>
		</view>
		<view class="w-full fixed bottom0 grid grid-cols-2">
			<view class="bg-white p20">
				<view class="bg91C42F text-center py17 font-bold col-white text32 radius10" @click="handUrl('/pages/my/components/bdsjrz/index')">
					本地商家入驻
				</view>
			</view>
			<view class="bg-white p20">
				<view class="bg4DB23F text-center py17 font-bold col-white text32 radius10" @click="handUrl('/pages/my/components/wdsjrz/index')">
					网店商家入驻
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
		methods: {
			// 商家入驻介绍
			_getRichTextContent(){
				api.getRichTextContent({
					post_params:{
						type:'store_entry_introduce'
					}
				}).then((res)=>{
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