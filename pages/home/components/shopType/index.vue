<template>
	<view class="bgF9F9F9 h100vh">
		<NavBar :navType="'标题'" :title="'商品分类'" />
		<view class="flex">
			<view class="bgF5F5F5 text-center" style="height: 95vh;width: 20%;">
				<view class="py30">
					<view @click="handleItem(item)" class="py30" :class="type_index==item.id?'font-bold':'col666666'"
						v-for="item in typeList" :key="item.id">{{item.name}}</view>
				</view>
			</view>
			<view class="bg-white" style="height: 95vh;width: 80%;">
				<view class="p30">
					<view class="grid text-center grid-cols-4 pt25" style="grid-column-gap:40rpx">
						<view class="mb30" v-for="item in typeItem" :key="item.id">
							<view class="w100 h100" @click="handUrl('/pages/home/components/shopTypeTwo/index?integral_goods_type_id='+item.id)">
								<image src="@/static/home/sytjspslt1.png" class="w100 h100 radius10" mode=""></image>
							</view>
							<view class="text20 font-bold mt5">{{item.name}}</view>
						</view>
					</view>
					<view v-if="typeItem.length==0">分类暂无数据！</view>
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
				typeList: [],
				type_index: 1,
				typeItem: []
			}
		},
		components: {
			NavBar
		},
		created() {
			this._getGoodsTypeList()
		},
		methods: {
			// 分类列表
			_getGoodsTypeList() {
				api.getGoodsTypeList().then((res) => {
					console.log('分类列表', res.data);
					const {
						list
					} = res.data.data
					this.typeList = list
					this.typeItem = list[0].children
					this.type_index = list[0].id
				})
			},
			handleItem(item) {
				this.type_index = item.id
				this.typeItem = item.children
			},
			handUrl(url) {
				uni.navigateTo({
					url: url
				})
			}

		}
	}
</script>

<style>
</style>