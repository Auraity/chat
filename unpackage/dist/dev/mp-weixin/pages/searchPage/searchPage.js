"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "searchPage",
  setup(__props) {
    let searchResults = common_vendor.ref([]);
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.o((...args) => _ctx.handleInput && _ctx.handleInput(...args)),
        b: common_vendor.o((...args) => _ctx.handleSearch && _ctx.handleSearch(...args)),
        c: _ctx.searching
      }, _ctx.searching ? {} : common_vendor.unref(searchResults).length === 0 ? {} : {
        e: common_vendor.f(common_vendor.unref(searchResults), (result, index, i0) => {
          return {
            a: common_vendor.t(result),
            b: index
          };
        })
      }, {
        d: common_vendor.unref(searchResults).length === 0
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/HXproject/Chat/pages/searchPage/searchPage.vue"]]);
wx.createPage(MiniProgramPage);
