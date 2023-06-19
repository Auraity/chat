import request from '/api/request.js'

export const log = (email, pwd) => {
	return request(`/login?email=${email}&password=${pwd}`, 'POST')
}

export const echeck = (email) => {
	return request(`/emailVerificationCode?forwhat=register&email=${email}`, 'GET')
}

export const rgs = () => {
	return request(`/register`, 'POST')
}
