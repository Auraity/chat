import request from '/api/request.js'

export const newFri = () => {
	return request(`/friendAddingRequestList`, 'GET')
}
