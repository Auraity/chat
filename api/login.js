import request from '/api/request.js'

export const log = (email, pwd) => {
	return request(`/login?email=${email}&password=${pwd}`, 'POST')
}

export const echeck = (email) => {
	return request(`/emailVerificationCode?forWhat=register&email=${email}`, 'GET')
}

export const rgs = (data) => {
	console.log(data);
	return request(
		`/register?email=${data.email}&emailVerificationCode=${data.emailVerificationCode}&password=${data.password}&username=${data.username}`,
		'POST')
}
