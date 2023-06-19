"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "contac",
  props: ["cotdata"],
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(props.cotdata, (item, i, i0) => {
          return {
            a: item.friendHeadImgUrl,
            b: common_vendor.t(item.friendName),
            c: item.friendId
          };
        })
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/HXproject/Chat/components/contac/contac.vue"]]);
wx.createComponent(Component);
