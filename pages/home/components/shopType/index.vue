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
								<image src="@/static/home/首页推荐商品图示例1.png" class="w100 h100 radius10" mode=""></image>
							</view>
							<view class="text20 font-bold mt5">{{item.name}}</view>
						</view>
					</view>
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
				typeList: [{
						id: 1,
						name: '沙发分类',
						children: [{
								id: 11,
								name: '沙发分类1',
								icon: ''
							},
							{
								id: 12,
								name: '沙发分类2',
								icon: ''
							},
							{
								id: 13,
								name: '沙发分类3',
								icon: ''
							},
							{
								id: 14,
								name: '沙发分类4',
								icon: ''
							},
							{
								id: 15,
								name: '沙发分类5',
								icon: ''
							}
						]
					},
					{
						id: 2,
						name: '茶几分类',
						children: [{
								id: 21,
								name: '茶几分类1',
								icon: ''
							},
							{
								id: 22,
								name: '茶几分类2',
								icon: ''
							},
							{
								id: 23,
								name: '茶几分类3',
								icon: ''
							},
						]
					},
					{
						id: 3,
						name: '床具分类',
						children: [{
								id: 31,
								name: '床具分类1',
								icon: ''
							},
							{
								id: 32,
								name: '床具分类2',
								icon: ''
							},
							{
								id: 33,
								name: '床具分类3',
								icon: ''
							},
							{
								id: 34,
								name: '床具分类4',
								icon: ''
							},
						]
					},
					{
						id: 4,
						name: '橱柜分类',
						children: [{
								id: 41,
								name: '橱柜分类1',
								icon: ''
							},
							{
								id: 42,
								name: '橱柜分类2',
								icon: ''
							},
							{
								id: 43,
								name: '橱柜分类3',
								icon: ''
							},
							{
								id: 44,
								name: '橱柜分类4',
								icon: ''
							},
							{
								id: 45,
								name: '橱柜分类5',
								icon: ''
							}
						]
					}
				],
				type_index: 1,
				typeItem: [{
						id: 11,
						name: '沙发分类1',
						icon: ''
					},
					{
						id: 12,
						name: '沙发分类2',
						icon: ''
					},
					{
						id: 13,
						name: '沙发分类3',
						icon: ''
					},
					{
						id: 14,
						name: '沙发分类4',
						icon: ''
					},
					{
						id: 15,
						name: '沙发分类5',
						icon: ''
					}
				]
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