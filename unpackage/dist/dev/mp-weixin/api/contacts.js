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
exports.addFri = addFri;
exports.newFri = newFri;
exports.searchFri = searchFri;
