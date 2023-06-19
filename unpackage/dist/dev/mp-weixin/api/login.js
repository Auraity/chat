"use strict";
const api_request = require("./request.js");
const log = (email, pwd) => {
  return api_request.request(`/login?email=${email}&password=${pwd}`, "POST");
};
exports.log = log;
