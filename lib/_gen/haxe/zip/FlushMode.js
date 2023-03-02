// Enum: haxe.zip.FlushMode

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

// Imports

var $estr = require("./../../estr_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;

// Definition

var FlushMode = $hxEnums["haxe.zip.FlushMode"] = { __ename__ : "haxe.zip.FlushMode", __constructs__ : ["NO","SYNC","FULL","FINISH","BLOCK"]
  ,SYNC: {_hx_index:1,__enum__:"haxe.zip.FlushMode",toString:$estr}
  ,NO: {_hx_index:0,__enum__:"haxe.zip.FlushMode",toString:$estr}
  ,FULL: {_hx_index:2,__enum__:"haxe.zip.FlushMode",toString:$estr}
  ,FINISH: {_hx_index:3,__enum__:"haxe.zip.FlushMode",toString:$estr}
  ,BLOCK: {_hx_index:4,__enum__:"haxe.zip.FlushMode",toString:$estr}
};

exports.default = FlushMode;