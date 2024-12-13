import Vue from 'vue'
import Vuex from 'vuex'
import api from '@/request/allApi.js'
Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		userInfo: {}, //用户信息
		czzInfo: {}, //创作者资料
		system: {
			xcqx: false, //相册权限
			wzqx: true, //位置权限
			xjqx: false, //相机权限
			jqbdqqx: false, //剪切板读取权限
		}
	},
	mutations: {
		// 退出登录,清空本地缓存和state 数据
		delState(state) {
			uni.clearStorageSync()
			state.userInfo = {} //用户信息
			state.czzInfo = {}//创作者资料
			state.system = {
				xcqx: false, //相册权限
				wzqx: false, //位置权限
				xjqx: false, //相机权限
				jqbdqqx: false, //剪切板读取权限
			}
		},
		// 取出state
		getState(state) {
			const stateObj = JSON.parse(uni.getStorageSync('state'))
			console.log('stateObj',stateObj);
			state = stateObj //缓存的值，赋值回来
			
		},
		// 更新system数据
		setSystem(state,obj){
			state.system = obj
			uni.setStorageSync('state', JSON.stringify(state)) //进入本地缓存
		},
		// 储存userInfo
		setUserInfo(state, obj) {
			console.log(state, obj);
			state.userInfo = obj
			uni.setStorageSync('state', JSON.stringify(state)) //进入本地缓存
		},
		// 储存czzInfo
		setCzzInfo(state, obj) {
			console.log(state, obj);
			state.czzInfo = obj
			uni.setStorageSync('state', JSON.stringify(state)) //进入本地缓存
		},
	},
	actions: {}
})
export default store