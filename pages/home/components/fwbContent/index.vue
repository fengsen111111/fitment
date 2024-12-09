<template>
	<view class="bgF9F9F9 h100vh">
	    <NavBar :navType="'标题'" :title="'富文本'" />
		<view class="p30">
			<view v-html="jump_data"></view>
		</view>
		<!-- <view class="w-full fixed bottom0">
			<view class="bg-white  py20 px75">
				<view class="bg4DB23F text-center py17 font-bold col-white text32 radius10" @click="handUrl('/pages/home/components/btnBooking/index')">
					立即预约
				</view>
			</view>
		</view> -->
	
	</view>
</template>

<script>
	import NavBar from '@/components/navbar/index.vue'
	import api from '@/request/allApi.js'
	export default {
		data() {
			return {
				jump_data:'<view>富文本内容</view>'
			}
		},
		onLoad(option){
			this._getBannerContent(option.id)
		},
		components:{
			NavBar
		},
		methods: {
			_getBannerContent(id){
				api.getBannerContent({
					post_params:{
						id: id
					}
				}).then((res)=>{
					console.log('富文本内容',res.data);
					const {jump_data} = res.data.data
					this.jump_data = jump_data
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