"use strict";
const api_request = require("./request.js");
const msg = () => {
  return api_request.request(`/messageSessionList`, "GET");
};
const cot = () => {
  return api_request.request(`/friendInfoList`, "GET");
};
const my = (id) => {
  return api_request.request(`/friendDetailInfo?friendId=${id}`, "GET");
};
exports.cot = cot;
exports.msg = msg;
exports.my = my;
