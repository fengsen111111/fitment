<template>
	<view class="bgF9F9F9 h100vh">
		<NavBar :navType="'标题'" :title="'公告列表'" />
		<view class="p30">
			<Notice :dataList="list" :type="'gglb'" />
		</view>
	</view>
</template>

<script>
	import NavBar from '@/components/navbar/index.vue'
	import Notice from '@/components/notice/index.vue'
	import api from '@/request/allApi.js'
	export default {
		data() {
			return {
				list:[]
			}
		},
		components: {
			NavBar,Notice
		},
		onLoad(){
			this._getNoticeList()
		},
		methods: {
			_getNoticeList(){
				api.getNoticeList({
					post_params:{
						currentPage:1,
						perPage:20
					}
				}).then((res)=>{
					const {list} = res.data.data
					console.log('list',list);
					this.list = list
				})
			}
		}
	}
</script>

<style>
	
</style>