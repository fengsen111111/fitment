// 公共方法

// 防抖
export const debounce = (fn, delay) => {
	var time = null
	return function() {
		let context = this; //记录一下this指向
		let args = arguments;
		//清除定时任务
		if (time) clearTimeout(time);
		uni.hideLoading()
		time = setTimeout(function() {
			time = null;
			fn.apply(context, args)
		}, delay)
	}
}
// 节流
export const throttle = (fn, delay) => {
	var timeTwo = 0
	var timeThree = null;
	return function() {
		let context = this;
		let args = arguments;
		const now = new Date()
		let wait = delay - (now - timeTwo)
		clearTimeout(timeThree)
		if (wait <= 0) {
			fn.apply(context, args);
			timeTwo = new Date();
		} else {
			timeThree = setTimeout(function() {
				fn.apply(context, args);
			}, delay)
		}
	}
}

import {
	FormData
} from './formData.js'

function uniTempFileToBase64(tempFilePath) {
	return new Promise((resolve, reject) => {
		const fs = uni.getFileSystemManager();
		fs.readFile({
			filePath: tempFilePath,
			encoding: 'base64', // 直接读取为 Base64
			success(res) {
				resolve(`data:image/jpeg;base64,${res.data}`); // 根据文件类型调整前缀
			},
			fail(err) {
				reject(err);
			},
		});
	});
}

export const onChooseAvatar = (url, query, callback) => {
	let formData = new FormData();
	for (let key in query) {
		formData.append("post_params[" + key + "]", query[key]);
	}
	formData.append("rsa", "false");
	formData.appendFile("file", url);
	let data = formData.getData();

	try {
		wx.request({
			url: 'https://beverage.api.sczhiyun.net/factory_storage/File/uploadFile',
			method: 'POST',
			header: {
				'Content-Type': data.contentType,
				'Authorization': uni.getStorageSync('token') || '',
				'accept': 'application/json, text/plain, */*',
				'origin': 'https://beverage.sczhiyun.net',
			},
			data: data.buffer,
			success: (res) => {
				// console.log('res', res);
				if (callback) {
					callback(null, res); // 通过回调函数返回结果
				}
			},
			fail: (err) => {
				console.error('Request failed:', err);
				if (callback) {
					callback(err, null); // 通过回调函数返回错误
				}
			}
		});
	} catch (error) {
		console.error('Error:', error);
		if (callback) {
			callback(error, null);
		}
	}
};