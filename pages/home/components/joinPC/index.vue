<template>
	<view class="bgF9F9F9 h100vh">
		<NavBar :navType="'标题'" :title="'加入平台'" />
		<view class="p60">
			<view class="grid grid-cols-3 text-center "  style="grid-column-gap:100rpx">
				<view class="mb60" v-for="item in iconList" :key="item.id">
					<img :src="require(`@/static/home/joinPC/${item.src}.png`)" class="w100 h100 radius4" mode=""></img>
					<view class="text24 font-bold">{{item.text}}</view>
				</view>
			</view>
			
			<view class="bg000000 col-white text32 font-bold radius10 text-center py22" style="opacity: 0.6;">
				等待开放
			</view>
		</view>
	</view>
</template>

<script>
	import NavBar from '@/components/navbar/index.vue'
	export default {
		data() {
			return {
				iconList: [{
						id: 1,
						text: '推荐管申请',
						src: 'icon1',
						url: ''
					},
					{
						id: 2,
						text: '家居管家入驻',
						src: 'icon2',
						url: ''
					},
					{
						id: 3,
						text: '设计师入驻',
						src: 'icon3',
						url: ''
					},
					{
						id: 4,
						text: '监理师入驻',
						src: 'icon4',
						url: ''
					},
					{
						id: 5,
						text: '工长入驻',
						src: 'icon5',
						url: ''
					},
					{
						id: 6,
						text: '装企入驻',
						src: 'icon6',
						url: ''
					},
					{
						id: 7,
						text: '商家入驻',
						src: 'icon7',
						url: ''
					}
				]
			}
		},
		components: {
			NavBar
		},
		methods: {}
	}
</script>

<style>

</style>