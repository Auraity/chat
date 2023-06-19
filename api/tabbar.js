import request from '/api/request.js'

export const msg = () => {
	return request(`/messageSessionList`, 'GET')
}

export const cot = () => {
	return request(`/friendInfoList`, 'GET')
}

export const my = (id) => {
	return request(`/friendDetailInfo?friendId=${id}`, 'GET')
}
