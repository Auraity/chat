"use strict";
const common_vendor = require("../../common/vendor.js");
const api_tabbar = require("../../api/tabbar.js");
require("../../api/request.js");
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
    let cotDa = common_vendor.ref([]);
    const cotApi = async () => {
      const res = await api_tabbar.cot();
      if (res.data.code == "200" || res.data.code == 200) {
        cotDa.value = res.data.data.list;
      } else {
        common_vendor.index.showToast({
          title: "数据获取失败",
          icon: "none"
        });
      }
    };
    cotApi();
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
    function toOtherHome(fid) {
      common_vendor.index.navigateTo({
        url: `/pages/otherPeapleHome/otherPeapleHome?fid=${fid}`
      });
    }
    let addCot = common_vendor.reactive({
      "friendId": 0,
      "friendName": "添加好友",
      "friendHeadImgUrl": "/static/addFriends.png"
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(toSearch),
        b: common_vendor.o(toSearch),
        c: common_vendor.o(toAddFriends),
        d: common_vendor.p({
          cotdata: common_vendor.unref(addCot)
        }),
        e: common_vendor.o(toNewFriends),
        f: common_vendor.f(common_vendor.unref(cotDa), (item, i, i0) => {
          return {
            a: "90a1bbf6-1-" + i0,
            b: common_vendor.p({
              cotdata: item
            }),
            c: common_vendor.o(($event) => toOtherHome(item.friendId), item.friendId),
            d: item.friendId
          };
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-90a1bbf6"], ["__file", "D:/HXproject/Chat/pages/contacts/contacts.vue"]]);
wx.createPage(MiniProgramPage);
