<template>
	<view>
		<NavBar :navType="'标题'" :title="'发票管理'" />
		<view class="p30 text24">
			<view class="bg-white radius10 mb20" v-for="item in dataList" :key="item.id">
				<view class=" px20 font-bold py20 flex justify-between">
					<view class="">{{item.type=='person'?'姓名：':'单位名称：'}}{{item.name}}</view>
					<view class="">{{item.style=='a'?'专票':'普票'}}</view>
				</view>
				<view v-if="item.code" class=" px20 font-bold pb20 flex justify-between">
					<view class="">纳税人识别码</view>
					<view class="">{{item.code}}</view>
				</view>
				<view v-else class="h30"></view>
				<view class="bg999999 h1"></view>
				<view class="px20  py30 flex justify-between">
					<view class="flex items-center">
						<uni-icons v-if="item.is_default=='Y'" type="checkbox-filled" color="#4DB23F" class="mt5" size="20"></uni-icons>
						<uni-icons v-else @click="_setDefaultUserInvoice(item)" type="circle" color="#999999" class="mt5" size="20"></uni-icons>
						<view class="ml10 col333333">设为默认</view>
					</view>
					<view class="flex items-center">
						<view @click="_deleteUserInvoice(item)" class="borderFF0000 colFF0000 px28 radius10 ">删除</view>
						<view @click="editHand(item)" class="bg4DB23F col-white px28 ml40  radius10">修改</view>
					</view>
				</view>
			</view>
		</view>
		<!--  -->
		<view class="fixed bottom0 w-full">
			<view class=" bg-white py20 px75 ">
				<view @click="handAdd()" class="bg4DB23F py20 text-center w-full radius10 col-white text32 font-bold">
					新增
				</view>
			</view>
		</view>
		<!-- 新增发票 -->
		<uni-popup ref="popupAdd" background-color="#F5F5F5" borderRadius="20rpx 20rpx 0rpx 0rpx">
			<view class="p40">
				<view class="flex justify-between items-center mb30">
					<view class="font-bold">新增发票</view>
					<uni-icons type="closeempty" size="20" @click="()=>{$refs.popupAdd.close()}"></uni-icons>
				</view>
				<view class="">
					<view @click="()=>{$refs.popupUser.open('bottom')}" class="bg-white radius10 py20 px30 mb30">个人发票</view>
					<view @click="()=>{$refs.popupDw.open('bottom')}" class="bg-white radius10 py20 px30 mb30">单位发票</view>
					<view class="h70"></view>
				</view>
			</view>
		</uni-popup>
		<!-- 单位发票 -->
		<uni-popup ref="popupDw" background-color="#FFFFFF" borderRadius="20rpx 20rpx 0rpx 0rpx">
			<view class="p40">
				<view class="flex justify-between items-center mb30">
					<view class="font-bold">单位发票</view>
					<uni-icons type="closeempty" size="20" @click="()=>{$refs.popupDw.close()}"></uni-icons>
				</view>
				<view class="">
					<view class="">单位名称</view>
					<view class="bgF5F5F5 p20 radius10 mt20">
						<input type="text" v-model="item.name" placeholder="输入单位名称" />
					</view>
					<view class="mt30">纳税人识别码</view>
					<view class="bgF5F5F5 p20 radius10 mt20">
						<input type="text" v-model="item.code" placeholder="输入纳税人识别码" />
					</view>
					
					<view class="flex mt40 justify-evenly">
						<view class="flex">
							<uni-icons v-if="item.style=='a'" type="checkbox-filled" color="#4DB23F" class="mt5" size="20"></uni-icons>
							<uni-icons @click="checkHand('a')" v-else type="circle" color="#999999" class="mt5" size="20"></uni-icons>
							<view class="col333333 ml30">专票</view>
						</view>
						<view class="flex">
							<uni-icons  v-if="item.style=='b'" type="checkbox-filled" color="#4DB23F" class="mt5" size="20"></uni-icons>
							<uni-icons @click="checkHand('b')" v-else type="circle" color="#999999" class="mt5" size="20"></uni-icons>
							<view class="col333333 ml30">普票</view>
						</view>
					</view>
					<view class="px20 mt40" @click="handOkDw">
						<view class="bg4DB23F py20 radius10 col-white font-bold text-center">确定</view>
					</view>
					<view class="h20"></view>
				</view>
			</view>
		</uni-popup>
		<!-- 个人发票 -->
		<uni-popup ref="popupUser" background-color="#FFFFFF" borderRadius="20rpx 20rpx 0rpx 0rpx">
			<view class="p40">
				<view class="flex justify-between items-center mb30">
					<view class="font-bold">个人发票</view>
					<uni-icons type="closeempty" size="20" @click="()=>{$refs.popupUser.close()}"></uni-icons>
				</view>
				<view class="">
					<view class="">姓名</view>
					<view class="bgF5F5F5 p20 radius10 mt20">
						<input type="text" v-model="item.name" placeholder="输入姓名" />
					</view>
					
					<view class="flex mt40 justify-evenly">
						<view class="flex">
							<uni-icons v-if="item.style=='a'" type="checkbox-filled" color="#4DB23F" class="mt5" size="20"></uni-icons>
							<uni-icons @click="checkHand('a')" v-else type="circle" color="#999999" class="mt5" size="20"></uni-icons>
							<view class="col333333 ml30">专票</view>
						</view>
						<view class="flex">
							<uni-icons  v-if="item.style=='b'" type="checkbox-filled" color="#4DB23F" class="mt5" size="20"></uni-icons>
							<uni-icons @click="checkHand('b')" v-else type="circle" color="#999999" class="mt5" size="20"></uni-icons>
							<view class="col333333 ml30">普票</view>
						</view>
					</view>
					<view class="px20 mt40" @click="handOkGr()">
						<view class="bg4DB23F py20 radius10 col-white font-bold text-center">确定</view>
					</view>
					<view class="h20"></view>
				</view>
			</view>
		</uni-popup>
			
		
	</view>
</template>

<script>
	import NavBar from '@/components/navbar/index.vue'
	import api from '@/request/allApi.js'
	export default {
		data() {
			return {
				dataList:[],//
			
			    item:{
					id:'',
					is_default:'',
					type:'',
					style:'',
					name:'',
					code:'',
				}//新增编辑	
			}
		},
		components:{NavBar},
		onLoad(){
			this._getUserInvoiceList()
		},
		methods: {
			// 新增
			handAdd(){
				this.item ={
					id:'',
					is_default:'',
					type:'',
					style:'',
					name:'',
					code:'',
				}
				this.$refs.popupAdd.open('bottom')
			},
			// 切换发票类型
			checkHand(key){
				console.log('key',key);
				this.item.style = key
			},
			// 修改发票信息
			editHand(item){
				this.item = item
				console.log('item',item);
				// 个人发票
				if(item.type=='person'){
					this.$refs.popupUser.open('bottom')
				}else{
					this.$refs.popupDw.open('bottom')
				}
			},
			// 单位新增
			handOkDw(){
				uni.showLoading({
					title: "加载中"
				})
				api.editUserInvoice({
					post_params:{
						id: this.item.id,
						is_default: this.item.is_default=='Y'?'Y':'N',
						type: 'company',
						style: this.item.style,
						name: this.item.name,
						code: this.item.code,
					}
				}).then((res)=>{
					uni.hideLoading()
					console.log('单位发票新增');
					if(res.data.code==1){
						uni.showToast({
							title: '操作成功！',
							icon: 'success',
							duration: 2000
						})
						const _this = this
						this.$refs.popupDw.close()
						this.$refs.popupAdd.close()
						this.$refs.popupUser.close()
						setTimeout(()=>{
							_this._getUserInvoiceList()
						},2000)
					}
				})
			},
			// 个人新增
			handOkGr(){
				uni.showLoading({
					title: "加载中"
				})
				api.editUserInvoice({
					post_params:{
						id: this.item.id,
						is_default: this.item.is_default=='Y'?'Y':'N',
						type: 'person',
						style: this.item.style,
						name: this.item.name,
						code: this.item.code,
					}
				}).then((res)=>{
					uni.hideLoading()
					console.log('单位发票新增');
					if(res.data.code==1){
						uni.showToast({
							title: '操作成功！',
							icon: 'success',
							duration: 2000
						})
						const _this = this
						this.$refs.popupDw.close()
						this.$refs.popupAdd.close()
						this.$refs.popupUser.close()
						setTimeout(()=>{
							_this._getUserInvoiceList()
						},2000)
					}
				})
			},
			// 用户发票信息列表
			_getUserInvoiceList(){
				uni.showLoading({
					title: "加载中"
				})
				api.getUserInvoiceList({
					post_params:{
						currentPage:1,
						perPage:10
					}
				}).then((res)=>{
					uni.hideLoading()
					const {list} = res.data.data
					this.dataList = list
					console.log('发票信息列表',list);
				})
			},
			// 删除
			_deleteUserInvoice(item) {
				uni.showLoading({
					title: "加载中"
				})
				api.deleteUserInvoice({
					post_params: {
						id: item.id
					}
				}).then((res) => {
					uni.hideLoading()
					console.log('删除成功');
					if(res.data.code==1){
						uni.showToast({
							title: '操作成功！',
							icon: 'success',
							duration: 2000
						})
						const _this = this
						setTimeout(()=>{
							_this._getUserInvoiceList()
						},2000)
					}
				})
			},
			// 默认
			_setDefaultUserInvoice(item) {
				uni.showLoading({
					title: "加载中"
				})
				api.setDefaultUserInvoice({
					post_params: {
						id: item.id
					}
				}).then((res)=>{
					uni.hideLoading()
					console.log('设置成功');
					if(res.data.code==1){
						uni.showToast({
							title: '操作成功！',
							icon: 'success',
							duration: 2000
						})
						const _this = this
						setTimeout(()=>{
							_this._getUserInvoiceList()
						},2000)
					}
				})
			},
			back() {
				console.log('返回')
				uni.navigateBack()
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