"use strict";
const api_request = require("./request.js");
const historyMsg = (sessionId) => {
  return api_request.request(`/historyMessage?sessionId=${sessionId}`, "GET");
};
exports.historyMsg = historyMsg;
