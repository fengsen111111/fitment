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

export const onChooseAvatar = (file, query, callback) => {
	const formData = new FormData();
	formData.append("rsa", "false");
	formData.append('file', file);
	for (let key in query) {
		formData.append("post_params[" + key + "]", query[key]);
	}
	try {
		// 使用 fetch 进行上传
		fetch('https://api.qfcss.cn/factory_storage/File/uploadFile', {
				method: 'POST',
				headers: {
					// 'Content-Type': 'multipart/form-data; boundary=----',
					'Authorization': uni.getStorageSync('token') || '',
					'accept': 'application/json, text/plain, */*',
					'origin': 'https://beverage.sczhiyun.net',
				},
				body: formData, // FormData 包含了文件和其他数据
			})
			.then(response => response.json())
			.then(data => {
				console.log('上传成功:', data.data);
				if (callback) {
					callback(false, data); // 通过回调函数返回结果
				}
			})
			.catch(error => {
				if (callback) {
					callback(true, error);  // 通过回调函数返回错误
				}
			});
	} catch (error) {
		console.error('Error:', error);
		if (callback) {
			callback(error, null);
		}
	}

};