"use strict";
const api_request = require("./request.js");
const newFri = () => {
  return api_request.request(`/friendAddingRequestList`, "GET");
};
exports.newFri = newFri;
