import request from '/api/request.js'

export const allFTrends = () => {
	return request(`/allFriendsMoments`, 'GET')
}
