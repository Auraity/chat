import request from '/api/request.js'

export const newFri = () => {
	return request(`/friendAddingRequestList`, 'GET')
}

export const searchFri = (email) => {
	return request(`/searchUserByEmail?email=${email}`, 'GET')
}

export const addFri = (UerId) => {
	return request(`/sendFriendAddingRequest?toUserId=${UerId}`, 'GET')
}
