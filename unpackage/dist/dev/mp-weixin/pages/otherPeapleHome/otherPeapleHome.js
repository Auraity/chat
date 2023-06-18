"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "otherPeapleHome",
  setup(__props) {
    let userInfo = common_vendor.ref({
      name: "姓名",
      logo: "../../static/logo.png",
      email: "johndoe@example.com",
      bio: "Hello, I am John Doe"
    });
    function Delete() {
      console.log("删除用户");
    }
    function Message() {
      common_vendor.index.navigateTo({
        url: "/pages/WebSocket/WebSocket"
      });
      console.log("发消息给用户");
    }
    function toHisTrends() {
      common_vendor.index.navigateTo({
        url: "/pages/hisTrends/hisTrends"
      });
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.t(common_vendor.unref(userInfo).name),
        b: common_vendor.t(common_vendor.unref(userInfo).email),
        c: common_vendor.t(common_vendor.unref(userInfo).bio),
        d: common_vendor.o(toHisTrends),
        e: common_vendor.o(Message),
        f: common_vendor.o(Delete)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/HXproject/Chat/pages/otherPeapleHome/otherPeapleHome.vue"]]);
wx.createPage(MiniProgramPage);
