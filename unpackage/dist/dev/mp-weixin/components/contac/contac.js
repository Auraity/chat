"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "contac",
  props: {
    "cotdata": "cotdata"
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return {
        a: __props.cotdata.friendHeadImgUrl,
        b: common_vendor.t(__props.cotdata.friendName)
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/HXproject/Chat/components/contac/contac.vue"]]);
wx.createComponent(Component);
