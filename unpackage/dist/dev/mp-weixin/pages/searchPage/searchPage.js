"use strict";
const common_vendor = require("../../common/vendor.js");
const api_contacts = require("../../api/contacts.js");
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
  __name: "searchPage",
  setup(__props) {
    let searchResults = common_vendor.ref(false);
    let username = common_vendor.ref("");
    function handleSearch() {
      console.log(username.value);
      searchFriApi(username.value);
    }
    let searchFriDa = common_vendor.ref([]);
    const searchFriApi = async (username2) => {
      const res = await api_contacts.searFri(username2);
      if (res.data.code == "200" || res.data.code == 200) {
        searchResults.value = true;
        searchFriDa.value = res.data.data.list;
        console.log(searchFriDa.value, 222);
      } else {
        common_vendor.index.showToast({
          title: "数据获取失败",
          icon: "none"
        });
      }
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.unref(username),
        b: common_vendor.o(($event) => common_vendor.isRef(username) ? username.value = $event.detail.value : username = $event.detail.value),
        c: common_vendor.o(handleSearch),
        d: common_vendor.unref(searchResults) == false
      }, common_vendor.unref(searchResults) == false ? {} : {
        e: common_vendor.p({
          cotdata: common_vendor.unref(searchFriDa)
        })
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/HXproject/Chat/pages/searchPage/searchPage.vue"]]);
wx.createPage(MiniProgramPage);
