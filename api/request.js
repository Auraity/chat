// 封装请求
let baseUrl = "http://129.211.211.180:8081"

const request = (url, method, data) => {
	// let user;
	// uni.getStorage({
	// 	key: 'user',
	// 	success: function(res) {
	// 		console.log(res.data);
	// 		user = res.data
	// 	}
	// })
	// console.log(user);
	return new Promise((resolve, reject) => {
		uni.getStorage({
			key: 'user',
			success: function(res) {
				uni.request({
					url: baseUrl + url,
					method,
					data,
					header: {
						'JSESSIONID': res.data
					},
					success: res => {
						resolve(res)
					},
					fail: err => {
						reject(err)
					}
				})
			}
		})
	})
}
export default request
