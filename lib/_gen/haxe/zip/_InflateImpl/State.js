// Enum: haxe.zip._InflateImpl.State

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

// Imports

var $estr = require("./../../../estr_stub").default;
var $hxEnums = require("./../../../hxEnums_stub").default;

// Definition

var State = $hxEnums["haxe.zip._InflateImpl.State"] = { __ename__ : "haxe.zip._InflateImpl.State", __constructs__ : ["Head","Block","CData","Flat","Crc","Dist","DistOne","Done"]
  ,Head: {_hx_index:0,__enum__:"haxe.zip._InflateImpl.State",toString:$estr}
  ,Flat: {_hx_index:3,__enum__:"haxe.zip._InflateImpl.State",toString:$estr}
  ,Done: {_hx_index:7,__enum__:"haxe.zip._InflateImpl.State",toString:$estr}
  ,DistOne: {_hx_index:6,__enum__:"haxe.zip._InflateImpl.State",toString:$estr}
  ,Dist: {_hx_index:5,__enum__:"haxe.zip._InflateImpl.State",toString:$estr}
  ,Crc: {_hx_index:4,__enum__:"haxe.zip._InflateImpl.State",toString:$estr}
  ,CData: {_hx_index:2,__enum__:"haxe.zip._InflateImpl.State",toString:$estr}
  ,Block: {_hx_index:1,__enum__:"haxe.zip._InflateImpl.State",toString:$estr}
};

exports.default = State;