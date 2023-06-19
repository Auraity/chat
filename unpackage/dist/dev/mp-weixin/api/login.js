"use strict";
const api_request = require("./request.js");
const log = (email, pwd) => {
  return api_request.request(`/login?email=${email}&password=${pwd}`, "POST");
};
const echeck = (email) => {
  return api_request.request(`/emailVerificationCode?forWhat=register&email=${email}`, "GET");
};
const rgs = (data) => {
  console.log(data);
  return api_request.request(
    `/register?email=${data.email}&emailVerificationCode=${data.emailVerificationCode}&password=${data.password}&username=${data.username}`,
    "POST"
  );
};
exports.echeck = echeck;
exports.log = log;
exports.rgs = rgs;
