<template>
	<view class="bgF9F9F9 h100vh">
	    <NavBar :navType="'标题'" :title="'店铺入驻'" />
		<view class="p30">
			<view v-html="content"></view>
			<view class="px44 mt100" v-if="userInfo.store_status">
				<view class="bg636363 text-center py17 font-bold col-white text32 radius10">
					<!-- 等待开放 -->
					{{userInfo.store_status=='a'?'未开通':userInfo.store_status=='b'?'申请开通中':''}}
				</view>
			</view>
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
				content:'',
				userInfo:{}
			}
		},
		components:{
			NavBar
		},
		onLoad(){
			this._getRichTextContent()
			this._getUserInfo()//用户信息
		},
		methods: {
			// 获取用户信息
			_getUserInfo(){
				api.getUserInfo().then((res)=>{
					console.log('用户信息',res.data.data);
					this.userInfo = res.data.data
					this.userInfo.mobile_two = this.userInfo.mobile.replace(/^(\d{3})\d{4}(\d{4})/,'$1****$2')
					// 存入本地储存
					uni.setStorageSync('userInfo', JSON.stringify(res.data.data))
					// 存入vuex
					this.$store.commit('setUserInfo', res.data.data)
				})
			},
			// 商家入驻介绍
			_getRichTextContent(){
				api.getRichTextContent({
					post_params:{
						type:'store_entry_introduce'
					}
				}).then((res)=>{
					this.content = res.data.data
				})
			},
			handUrl(url){
				if(this.userInfo.store_status=='a'){
					uni.navigateTo({
						url:url
					})
				}else if(this.userInfo.store_status=='b'){
					uni.showToast({
						title: '店铺申请开通中！',
						icon: 'none',
						duration: 2000
					})
				}else if(this.userInfo.store_status=='d'){
					uni.showToast({
						title: '状态异常！',
						icon: 'none',
						duration: 2000
					})
				}else if(this.userInfo.store_status=='c'){
					uni.navigateTo({
						url:url
					})
				}
				
			}
		}
	}
</script>

<style>
</style>