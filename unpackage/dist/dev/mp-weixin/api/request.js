"use strict";
const common_vendor = require("../common/vendor.js");
let baseUrl = "http://129.211.211.180:8081";
const request = (url, method, data) => {
  let key = common_vendor.index.getStorageSync("user");
  const header = key ? {
    "JSESSIONID": key.jsessionid
  } : {};
  return new Promise((resolve, reject) => {
    console.log(key);
    common_vendor.index.request(Object.assign({
      url: baseUrl + url,
      method,
      data,
      header,
      success: (res) => {
        resolve(res);
      },
      fail: (err) => {
        reject(err);
      }
    }));
  });
};
exports.request = request;
