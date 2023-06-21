// 封装请求
let baseUrl = "http://129.211.211.180:8081"


const request = (url, method, data) => {

	let key = uni.getStorageSync('user')
	const header = key ? {
		'JSESSIONID': key.jsessionid
	} : {}
	return new Promise((resolve, reject) => {
		console.log(key);
		uni.request(Object.assign({
			url: baseUrl + url,
			method,
			data,
			header: header,
			success: res => {
				resolve(res)
			},
			fail: err => {
				reject(err)
			}
		}))

	})
}
export default request
