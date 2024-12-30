// 公共方法

// 经纬度精确
export const bd09ToGcj02=(lon, lat)=> {
  const x = lon - 0.0065;
  const y = lat - 0.006;
  const z = Math.sqrt(x * x + y * y) - 0.00002 * Math.sin(y * Math.PI);
  const theta = Math.atan2(y, x) - 0.000003 * Math.cos(x * Math.PI);
  const gcj_lon = z * Math.cos(theta);
  const gcj_lat = z * Math.sin(theta);

  // 纠正误差，实际应用中可根据精度要求多次调整
  const correctionLon = Number(Number(gcj_lon).toFixed(6))*1.000153;//经度
  const correctionLat = Number(Number(gcj_lat).toFixed(6))*0.999848;//经纬度

  return { gcj_lon: correctionLon.toFixed(6), gcj_lat: correctionLat.toFixed(6) };
}

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
		uni.showLoading({
			title: "加载中"
		})
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
				uni.hideLoading()
				console.log('上传成功:', data.data);
				if (callback) {
					callback(false, data); // 通过回调函数返回结果
				}
			})
			.catch(error => {
				uni.hideLoading()
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