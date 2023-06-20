"use strict";
const api_request = require("./request.js");
const log = (email, pwd) => {
  return api_request.request(`/login?email=${email}&password=${pwd}`, "POST");
};
const logout = () => {
  return api_request.request(`/logout`, "GET");
};
const echeck = (forWhat, email) => {
  return api_request.request(`/emailVerificationCode?forWhat=${forWhat}&email=${email}`, "GET");
};
const rgs = (data) => {
  return api_request.request(
    `/register?email=${data.email}&emailVerificationCode=${data.emailVerificationCode}&password=${data.password}&username=${data.username}`,
    "POST"
  );
};
const forgetPwd = (data) => {
  console.log(data);
  return api_request.request(
    `/forgetPassword?email=${data.email}&emailVerificationCode=${data.code}&password=${data.pwd}`,
    "GET"
  );
};
exports.echeck = echeck;
exports.forgetPwd = forgetPwd;
exports.log = log;
exports.logout = logout;
exports.rgs = rgs;
