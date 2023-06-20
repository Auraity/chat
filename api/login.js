import request from '/api/request.js'

export const log = (email, pwd) => {
	return request(`/login?email=${email}&password=${pwd}`, 'POST')
}

export const logout = () => {
	return request(`/logout`, 'GET')
}

export const echeck = (forWhat, email) => {
	return request(`/emailVerificationCode?forWhat=${forWhat}&email=${email}`, 'GET')
}

export const rgs = (data) => {
	// console.log(data);
	return request(
		`/register?email=${data.email}&emailVerificationCode=${data.emailVerificationCode}&password=${data.password}&username=${data.username}`,
		'POST')
}

export const forgetPwd = (data) => {
	console.log(data);
	return request(
		`/forgetPassword?email=${data.email}&emailVerificationCode=${data.code}&password=${data.pwd}`,
		'GET')
}
