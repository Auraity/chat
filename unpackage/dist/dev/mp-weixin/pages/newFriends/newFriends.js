"use strict";
const common_vendor = require("../../common/vendor.js");
const api_contacts = require("../../api/contacts.js");
require("../../api/request.js");
if (!Array) {
  const _easycom_newFriends2 = common_vendor.resolveComponent("newFriends");
  _easycom_newFriends2();
}
const _easycom_newFriends = () => "../../components/newFriends/newFriends.js";
if (!Math) {
  _easycom_newFriends();
}
const _sfc_main = {
  __name: "newFriends",
  setup(__props) {
    let newFriDa = common_vendor.ref([]);
    const newFriApi = async () => {
      const res = await api_contacts.newFri();
      console.log(res, 11);
      if (res.data.code == "200" || res.data.code == 200) {
        newFriDa.value = res.data.data.list;
        console.log(newFriDa.value, 22);
      } else {
        common_vendor.index.showToast({
          title: "数据获取失败",
          icon: "none"
        });
      }
    };
    newFriApi();
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          newFriDa: common_vendor.unref(newFriDa)
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/HXproject/Chat/pages/newFriends/newFriends.vue"]]);
wx.createPage(MiniProgramPage);
