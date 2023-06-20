"use strict";
const common_vendor = require("../common/vendor.js");
let baseUrl = "http://172.20.10.3:8080";
const request = (url, method, data) => {
  return new Promise((resolve, reject) => {
    common_vendor.index.getStorage({
      key: "user",
      success: function(res) {
        common_vendor.index.request({
          url: baseUrl + url,
          method,
          data,
          header: {
            "JSESSIONID": res.data.jsessionid
          },
          success: (res2) => {
            resolve(res2);
          },
          fail: (err) => {
            reject(err);
          }
        });
      }
    });
  });
};
exports.request = request;
