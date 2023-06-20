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

export const searFri = (username) => {
	return request(`/searchFriendInfoByName?username=${username}`, 'GET')
}

export const updateStatus = (uid, fid, status) => {
	return request(`/updateFriendAddingRequestStatus?fromUserId=${uid}&toUserId=${fid}&status=${status}`, 'GET')
}

export const hisHome = (friendId) => {
	return request(`/friendDetailInfo?friendId=${friendId}`, 'GET')
}

export const hisTrends = (friendId) => {
	return request(`/friendMoments?friendId=${friendId}`, 'GET')
}

export const deleteFid = (friendId) => {
	return request(`/deleteFriendship?friendId=${friendId}`, 'GET')
}
