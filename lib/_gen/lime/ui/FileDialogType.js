// Enum: lime.ui.FileDialogType

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

// Imports

var $estr = require("./../../estr_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;

// Definition

var FileDialogType = $hxEnums["lime.ui.FileDialogType"] = { __ename__ : "lime.ui.FileDialogType", __constructs__ : ["OPEN","OPEN_MULTIPLE","SAVE","OPEN_DIRECTORY"]
  ,SAVE: {_hx_index:2,__enum__:"lime.ui.FileDialogType",toString:$estr}
  ,OPEN_MULTIPLE: {_hx_index:1,__enum__:"lime.ui.FileDialogType",toString:$estr}
  ,OPEN_DIRECTORY: {_hx_index:3,__enum__:"lime.ui.FileDialogType",toString:$estr}
  ,OPEN: {_hx_index:0,__enum__:"lime.ui.FileDialogType",toString:$estr}
};

exports.default = FileDialogType;