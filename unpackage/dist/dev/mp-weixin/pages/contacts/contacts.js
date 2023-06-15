"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {};
if (!Array) {
  const _easycom_contac2 = common_vendor.resolveComponent("contac");
  _easycom_contac2();
}
const _easycom_contac = () => "../../components/contac/contac.js";
if (!Math) {
  _easycom_contac();
}
function _sfc_render(_ctx, _cache) {
  return {
    a: common_vendor.f(10, (i, k0, i0) => {
      return {
        a: "90a1bbf6-1-" + i0,
        b: i
      };
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-90a1bbf6"], ["__file", "D:/HXproject/Chat/pages/contacts/contacts.vue"]]);
wx.createPage(MiniProgramPage);
