"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "my",
  setup(__props) {
    function toMyTrends() {
      common_vendor.index.navigateTo({
        url: "/pages/myTrends/myTrends"
      });
    }
    function alterUN() {
      common_vendor.index.navigateTo({
        url: "/pages/alterUserName/alterUserName"
      });
    }
    function toAlterSign() {
      common_vendor.index.navigateTo({
        url: "/pages/alterSign/alterSign"
      });
    }
    function alterPwd() {
      common_vendor.index.navigateTo({
        url: "/pages/alterPassword/alterPassword"
      });
    }
    function exit() {
      common_vendor.index.reLaunch({
        url: "/pages/login/login"
      });
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(alterUN),
        b: common_vendor.o(toAlterSign),
        c: common_vendor.o(toMyTrends),
        d: common_vendor.o(alterPwd),
        e: common_vendor.o(exit)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/HXproject/Chat/pages/my/my.vue"]]);
wx.createPage(MiniProgramPage);
