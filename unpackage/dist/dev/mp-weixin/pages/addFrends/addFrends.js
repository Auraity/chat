"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {};
if (!Array) {
  const _easycom_addContact2 = common_vendor.resolveComponent("addContact");
  _easycom_addContact2();
}
const _easycom_addContact = () => "../../components/addContact/addContact.js";
if (!Math) {
  _easycom_addContact();
}
function _sfc_render(_ctx, _cache) {
  return {
    a: common_vendor.o((...args) => _ctx.handleInput && _ctx.handleInput(...args)),
    b: common_vendor.o((...args) => _ctx.handleSearch && _ctx.handleSearch(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/HXproject/Chat/pages/addFrends/addFrends.vue"]]);
wx.createPage(MiniProgramPage);
