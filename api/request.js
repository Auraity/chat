// 封装请求
let baseUrl = "http://172.20.10.3:8080"

const request = (url, method, data) => {
	return new Promise((resolve, reject) => {
		uni.getStorage({
			key: 'user',
			success: function(res) {
				uni.request({
					url: baseUrl + url,
					method,
					data,
					header: {
						'JSESSIONID': res.data.jsessionid
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
