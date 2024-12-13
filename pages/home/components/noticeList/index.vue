<template>
	<view class="bgF9F9F9 h100vh">
		<NavBar :navType="'标题'" :title="'公告列表'" />
		<view class="p30">
			<Notice />
		</view>
	</view>
</template>

<script>
	import NavBar from '@/components/navbar/index.vue'
	import Notice from '@/components/notice/index.vue'
	export default {
		data() {
			return {
			}
		},
		components: {
			NavBar,Notice
		},
		methods: {
			
		}
	}
</script>

<style>
	
</style>