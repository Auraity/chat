"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "trendsListCop",
  props: ["allFTrendsDa"],
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(props.allFTrendsDa, (item, i, i0) => {
          return {
            a: item.userHeadImgUrl,
            b: common_vendor.t(item.username),
            c: common_vendor.t(item.content),
            d: common_vendor.t(item.createTime),
            e: i
          };
        })
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/HXproject/Chat/components/trendsListCop/trendsListCop.vue"]]);
wx.createComponent(Component);
