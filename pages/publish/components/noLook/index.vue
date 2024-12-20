<template>
	<view>
		<NavBar :navType="'标题'" :title="'不给谁看'" />
		<view class="p30 text24">
			<view class="p30 bg-white radius10 flex items-center justify-between mb30" @click="handCli(item)" v-for="item in dxList"
				:key="item.id">
				<view class="flex items-center">
					<view class="w60 h60">
						<!-- <image src="@/static/home/sytjspslt1.png" class="w60 h60 radius_bfb50" mode=""></image> -->
						<image :src="item.head_image" class="w60 h60 radius_bfb50" mode=""></image>
					</view>
					<view class="font-bold ml20 col333333 text28">{{item.nickname}}</view>
				</view>
				<uni-icons v-if="cliList.indexOf(item.id) !== '-1'" type="checkbox-filled" color="#999999" size="20"></uni-icons>
			</view>
		</view>
		<view class="fixed bottom0 w-full">
			<view class=" bg-white py20 px75 ">
				<view class="bg4DB23F py20 text-center w-full radius10 col-white text32 font-bold">
					确定
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import api from '@/request/allApi.js'
	import NavBar from '@/components/navbar/index.vue'
	export default {
		data() {
			return {
				dxList:[],//对象列表
				cliList:[]//id合计
			}
		},
		onLoad(){
			this._getFriendList()//互关列表
		},
		components: {
			NavBar
		},
		methods: {
			// 点击项
			handCli(item){
				this.handCli.push(item.id)
			},
			// 
			_getFriendList(){
				api.getFriendList().then((res)=>{
					const {list} =res.data.data
					this.dxList = list
					console.log('互关列表',list);
				})
			}
		}
	}
</script>

<style>

</style>