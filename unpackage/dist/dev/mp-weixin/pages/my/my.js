"use strict";
const common_vendor = require("../../common/vendor.js");
const api_login = require("../../api/login.js");
const api_tabbar = require("../../api/tabbar.js");
require("../../api/request.js");
const _sfc_main = {
  __name: "my",
  setup(__props) {
    let myDa = common_vendor.ref({});
    const me = async (id) => {
      const res = await api_tabbar.my(id);
      if (res.data.code == "200" || res.data.code == 200) {
        myDa.value = res.data.data;
      } else {
        common_vendor.index.showToast({
          title: "数据获取失败",
          icon: "none"
        });
      }
    };
    const out = async () => {
      const res = await api_login.logout();
      if (res.data.code == "200" || res.data.code == 200) {
        common_vendor.index.showToast({
          title: "退出成功",
          icon: "none"
        });
        common_vendor.index.reLaunch({
          url: "/pages/login/login"
        });
      } else {
        common_vendor.index.showToast({
          title: "退出失败",
          icon: "none"
        });
      }
    };
    function toMyTrends() {
      common_vendor.index.navigateTo({
        url: "/pages/myTrends/myTrends"
      });
    }
    function alterUN() {
      common_vendor.index.navigateTo({
        url: `/pages/alterUserName/alterUserName?friendName=${myDa.value.friendName}`
      });
    }
    function toAlterSign() {
      common_vendor.index.navigateTo({
        url: `/pages/alterSign/alterSign?friendIntroduction=${myDa.value.friendIntroduction}`
      });
    }
    function alterPwd() {
      common_vendor.index.navigateTo({
        url: "/pages/alterPassword/alterPassword"
      });
    }
    function exit() {
      out();
    }
    common_vendor.index.getStorage({
      key: "user",
      success: (res) => {
        me(res.data.userId);
      }
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.unref(myDa).friendHeadImgUrl,
        b: common_vendor.t(common_vendor.unref(myDa).friendEmail),
        c: common_vendor.t(common_vendor.unref(myDa).friendName),
        d: common_vendor.o(alterUN),
        e: common_vendor.t(common_vendor.unref(myDa).friendIntroduction),
        f: common_vendor.o(toAlterSign),
        g: common_vendor.o(toMyTrends),
        h: common_vendor.o(alterPwd),
        i: common_vendor.o(exit)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/HXproject/Chat/pages/my/my.vue"]]);
wx.createPage(MiniProgramPage);
