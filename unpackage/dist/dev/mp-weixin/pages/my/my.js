"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      infoItems: [
        {
          label: "用户名",
          value: "小明"
        },
        {
          label: "邮箱",
          value: "123@123.com"
        },
        {
          label: "个性签名",
          value: "我就是我，不一样的烟火"
        },
        {
          label: "",
          value: "我的朋友圈"
        },
        {
          label: "",
          value: "修改密码"
        },
        {
          label: "",
          value: "退出登录"
        }
      ]
    };
  },
  methods: {
    navigateToEdit(label) {
      console.log("跳转到编辑页面", label);
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.infoItems, (item, k0, i0) => {
      return {
        a: common_vendor.t(item.label),
        b: common_vendor.t(item.value),
        c: item.label
      };
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/HXproject/Chat/pages/my/my.vue"]]);
wx.createPage(MiniProgramPage);
