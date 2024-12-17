<template>
	<view>
		 <NavBar :navType="'标题'" :title="title" />
		 <view class="p40">
		 	<view v-html="content"></view>
		 </view>
	</view>
</template>

<script>
	import NavBar from '@/components/navbar/index.vue'
	import api from '@/request/allApi.js'
	export default {
		components:{NavBar},
		data() {
			return {
				title:'富文本标题',
				content: '',
				optionType:''
			}
		},
		onLoad(option){
			this.optionType = option.type
			switch (option.type){
				case 'about_us':
				    this.title = '关于平台'
					break;
				case 'privacy_rich':
				    this.title = '隐私政策'
					break;
				case 'user_rich':
				    this.title = '用户协议'
					break;
				case 'introduce_a_rich':
				    this.title = '装修服务介绍'
					break;
				case 'introduce_b_rich':
				    this.title = '设计服务介绍'
					break;
				case 'introduce_c_rich':
				    this.title = '验房服务介绍'
					break;
				case 'introduce_d_rich':
				    this.title = '监理服务介绍'
					break;
				case 'store_entry_introduce':
				    this.title = '商家入驻介绍'
					break;
				case 'delete_user_rich':
				    this.title = '注销用户协议'
					break;
				case 'deposit_des':
				    this.title = '押金说明'
					break;
				case 'ensure_rule':
				    this.title = '保证金规则'
					break;
				default:
				    this.title = '富文本'
					break;
			}
			this._getRichTextContent()
		},
		watch: {
		},
		methods: {
		   _getRichTextContent(){
			   api.getRichTextContent({
				   post_params:{
					   type: this.optionType
				   }
			   }).then((res)=>{
				   this.content = res.data.data
			   })
		   }
		}
	}
</script>

<style>
	
</style>