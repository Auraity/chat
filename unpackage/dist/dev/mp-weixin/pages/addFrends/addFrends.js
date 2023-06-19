"use strict";
const common_vendor = require("../../common/vendor.js");
const api_contacts = require("../../api/contacts.js");
require("../../api/request.js");
if (!Array) {
  const _easycom_addContact2 = common_vendor.resolveComponent("addContact");
  _easycom_addContact2();
}
const _easycom_addContact = () => "../../components/addContact/addContact.js";
if (!Math) {
  _easycom_addContact();
}
const _sfc_main = {
  __name: "addFrends",
  setup(__props) {
    let searchResults = common_vendor.ref(true);
    let searchDa = common_vendor.ref([]);
    const searchApi = async (email2) => {
      const res = await api_contacts.searchFri(email2);
      if (res.data.code == "200" || res.data.code == 200) {
        searchDa.value = res.data.data;
        searchResults.value = false;
      } else {
        common_vendor.index.switchTab({
          title: "数据获取失败",
          icon: "none"
        });
      }
    };
    let email = common_vendor.ref([]);
    function handleSearch() {
      searchApi(email.value);
    }
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.unref(email),
        b: common_vendor.o(($event) => common_vendor.isRef(email) ? email.value = $event.detail.value : email = $event.detail.value),
        c: common_vendor.o(handleSearch),
        d: common_vendor.unref(searchResults)
      }, common_vendor.unref(searchResults) ? {} : {
        e: common_vendor.p({
          searchDa: common_vendor.unref(searchDa)
        })
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/HXproject/Chat/pages/addFrends/addFrends.vue"]]);
wx.createPage(MiniProgramPage);
