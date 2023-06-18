"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_contac2 = common_vendor.resolveComponent("contac");
  _easycom_contac2();
}
const _easycom_contac = () => "../../components/contac/contac.js";
if (!Math) {
  _easycom_contac();
}
const _sfc_main = {
  __name: "contacts",
  setup(__props) {
    function toSearch() {
      common_vendor.index.navigateTo({
        url: "/pages/searchPage/searchPage"
      });
    }
    function toAddFriends() {
      common_vendor.index.navigateTo({
        url: "/pages/addFrends/addFrends"
      });
    }
    function toNewFriends() {
      common_vendor.index.navigateTo({
        url: "/pages/newFriends/newFriends"
      });
    }
    function toOtherHome() {
      common_vendor.index.navigateTo({
        url: "/pages/otherPeapleHome/otherPeapleHome"
      });
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(toAddFriends),
        b: common_vendor.o(toSearch),
        c: common_vendor.o(toAddFriends),
        d: common_vendor.o(toNewFriends),
        e: common_vendor.f(10, (i, k0, i0) => {
          return {
            a: "90a1bbf6-1-" + i0,
            b: common_vendor.o(toOtherHome, i),
            c: i
          };
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-90a1bbf6"], ["__file", "D:/HXproject/Chat/pages/contacts/contacts.vue"]]);
wx.createPage(MiniProgramPage);
