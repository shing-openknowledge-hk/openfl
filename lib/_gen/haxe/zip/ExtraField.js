// Enum: haxe.zip.ExtraField

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

// Imports

var $estr = require("./../../estr_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;

// Definition

var ExtraField = $hxEnums["haxe.zip.ExtraField"] = { __ename__ : "haxe.zip.ExtraField", __constructs__ : ["FUnknown","FInfoZipUnicodePath","FUtf8"]
  ,FUtf8: {_hx_index:2,__enum__:"haxe.zip.ExtraField",toString:$estr}
  ,FUnknown: ($_=function(tag,bytes) { return {_hx_index:0,tag:tag,bytes:bytes,__enum__:"haxe.zip.ExtraField",toString:$estr}; },$_.__params__ = ["tag","bytes"],$_)
  ,FInfoZipUnicodePath: ($_=function(name,crc) { return {_hx_index:1,name:name,crc:crc,__enum__:"haxe.zip.ExtraField",toString:$estr}; },$_.__params__ = ["name","crc"],$_)
};

exports.default = ExtraField;