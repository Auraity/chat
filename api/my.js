import request from '/api/request.js'

export const alterName = () => {
	return request(`/`, 'GET')
}

export const myTrends = (uid) => {
	return request(`/friendMoments?friendId=${uid}`, 'GET')
}
