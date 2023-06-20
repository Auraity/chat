import request from '/api/request.js'

export const historyMsg = (sessionId) => {
	return request(`/historyMessage?sessionId=${sessionId}`, 'GET')
}
