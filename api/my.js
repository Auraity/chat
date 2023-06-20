import request from '/api/request.js'

export const alterName = () => {
	return request(`/`, 'GET')
}
