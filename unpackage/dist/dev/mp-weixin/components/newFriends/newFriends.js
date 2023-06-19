"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "newFriends",
  props: ["newFriDa"],
  setup(__props) {
    const props = __props;
    let uId = common_vendor.ref("");
    common_vendor.index.getStorage({
      key: "user",
      success: (res) => {
        console.log(res, "id");
        uId.value = res.data.userId;
        console.log(uId.value);
      }
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(props.newFriDa, (item, i, i0) => {
          return common_vendor.e({
            a: item.friendHeadImgUrl,
            b: common_vendor.t(item.friendName),
            c: item.status == 0 && item.friendId == common_vendor.unref(uId)
          }, item.status == 0 && item.friendId == common_vendor.unref(uId) ? {} : {
            d: common_vendor.t(item.statusDescription)
          }, {
            e: item.userId
          });
        })
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/HXproject/Chat/components/newFriends/newFriends.vue"]]);
wx.createComponent(Component);
