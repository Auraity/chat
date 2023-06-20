"use strict";
const api_request = require("./request.js");
const newFri = () => {
  return api_request.request(`/friendAddingRequestList`, "GET");
};
const searchFri = (email) => {
  return api_request.request(`/searchUserByEmail?email=${email}`, "GET");
};
const addFri = (UerId) => {
  return api_request.request(`/sendFriendAddingRequest?toUserId=${UerId}`, "GET");
};
const searFri = (username) => {
  return api_request.request(`/searchFriendInfoByName?username=${username}`, "GET");
};
const updateStatus = (uid, fid, status) => {
  return api_request.request(`/updateFriendAddingRequestStatus?fromUserId=${uid}&toUserId=${fid}&status=${status}`, "GET");
};
const hisHome = (friendId) => {
  return api_request.request(`/friendDetailInfo?friendId=${friendId}`, "GET");
};
const hisTrends = (friendId) => {
  return api_request.request(`/friendMoments?friendId=${friendId}`, "GET");
};
const deleteFid = (friendId) => {
  return api_request.request(`/deleteFriendship?friendId=${friendId}`, "GET");
};
exports.addFri = addFri;
exports.deleteFid = deleteFid;
exports.hisHome = hisHome;
exports.hisTrends = hisTrends;
exports.newFri = newFri;
exports.searFri = searFri;
exports.searchFri = searchFri;
exports.updateStatus = updateStatus;
