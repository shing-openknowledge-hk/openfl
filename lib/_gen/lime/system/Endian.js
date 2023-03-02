// Enum: lime.system.Endian

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

// Imports

var $estr = require("./../../estr_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;

// Definition

var Endian = $hxEnums["lime.system.Endian"] = { __ename__ : "lime.system.Endian", __constructs__ : ["LITTLE_ENDIAN","BIG_ENDIAN"]
  ,LITTLE_ENDIAN: {_hx_index:0,__enum__:"lime.system.Endian",toString:$estr}
  ,BIG_ENDIAN: {_hx_index:1,__enum__:"lime.system.Endian",toString:$estr}
};

exports.default = Endian;