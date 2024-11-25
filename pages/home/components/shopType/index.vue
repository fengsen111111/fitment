<template>
	<view class="bgF9F9F9 h100vh">
		<NavBar :navType="'标题'" :title="'商品分类'" />
		<view class="flex">
			<view class="bgF5F5F5 text-center" style="height: 95vh;width: 20%;">
				<view class="py30">
					<view @click="handleItem(item.id)" class="py30" :class="type_index==item.id?'font-bold':'col666666'" v-for="item in typeList" :key="item.id">{{item.text}}</view>
				</view>
			</view>
			<view class="bg-white" style="height: 95vh;width: 80%;">
				<view class="p30">
					<view class="grid text-center grid-cols-4 pt25"  style="grid-column-gap:40rpx">
						<view class="mb30" v-for="item in [1,2,3,4,5]" :key="item">
							<view class="w100 h100" @click="handUrl('/pages/home/components/shopTypeTwo/index')">
								<image src="@/static/home/首页推荐商品图示例1.png" class="w100 h100 radius10" mode=""></image>
							</view>
							<view class="text20 font-bold mt5">转角沙发</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import NavBar from '@/components/navbar/index.vue'
	export default {
		data() {
			return {
				typeList:[
					{
						id:1,
						text:'沙发分类'
					},
					{
						id:2,
						text:'茶几分类'
					},
					{
						id:3,
						text:'床具分类'
					},
					{
						id:4,
						text:'橱柜分类'
					}
				],
				type_index:1
			}
		},
		components: {
			NavBar
		},
		methods: {
			handleItem(index){
				this.type_index = index
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