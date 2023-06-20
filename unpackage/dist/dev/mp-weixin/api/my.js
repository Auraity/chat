"use strict";
const api_request = require("./request.js");
const myTrends = (uid) => {
  return api_request.request(`/friendMoments?friendId=${uid}`, "GET");
};
exports.myTrends = myTrends;
