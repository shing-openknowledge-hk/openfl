// Enum: lime.ui.MouseWheelMode

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

// Imports

var $estr = require("./../../estr_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;

// Definition

var MouseWheelMode = $hxEnums["lime.ui.MouseWheelMode"] = { __ename__ : "lime.ui.MouseWheelMode", __constructs__ : ["PIXELS","LINES","PAGES","UNKNOWN"]
  ,UNKNOWN: {_hx_index:3,__enum__:"lime.ui.MouseWheelMode",toString:$estr}
  ,PIXELS: {_hx_index:0,__enum__:"lime.ui.MouseWheelMode",toString:$estr}
  ,PAGES: {_hx_index:2,__enum__:"lime.ui.MouseWheelMode",toString:$estr}
  ,LINES: {_hx_index:1,__enum__:"lime.ui.MouseWheelMode",toString:$estr}
};

exports.default = MouseWheelMode;