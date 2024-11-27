import Vue from 'vue'
import Vuex from 'vuex'
import api from '@/request/allApi.js'
Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		userInfo:{},//用户信息
	},
	mutations: {
		// 储存state
		setState(state) {
			uni.setStorageSync('state', JSON.stringify(state))
		},
		// 取出state
		getState(state) {
			const stateObj = uni.getStorageSync('state')
		},
		// 储存userInfo
		setUserInfo(state,obj) {
			console.log(state,obj);
		},
	},
	actions: {
	}
})
export default store