"use strict";
const api_request = require("./request.js");
const allFTrends = () => {
  return api_request.request(`/allFriendsMoments`, "GET");
};
exports.allFTrends = allFTrends;
