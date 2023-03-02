// Enum: ValueType

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

// Imports

var $estr = require("./estr_stub").default;
var $hxEnums = require("./hxEnums_stub").default;

// Definition

var ValueType = $hxEnums["ValueType"] = { __ename__ : "ValueType", __constructs__ : ["TNull","TInt","TFloat","TBool","TObject","TFunction","TClass","TEnum","TUnknown"]
  ,TUnknown: {_hx_index:8,__enum__:"ValueType",toString:$estr}
  ,TObject: {_hx_index:4,__enum__:"ValueType",toString:$estr}
  ,TNull: {_hx_index:0,__enum__:"ValueType",toString:$estr}
  ,TInt: {_hx_index:1,__enum__:"ValueType",toString:$estr}
  ,TFunction: {_hx_index:5,__enum__:"ValueType",toString:$estr}
  ,TFloat: {_hx_index:2,__enum__:"ValueType",toString:$estr}
  ,TEnum: ($_=function(e) { return {_hx_index:7,e:e,__enum__:"ValueType",toString:$estr}; },$_.__params__ = ["e"],$_)
  ,TClass: ($_=function(c) { return {_hx_index:6,c:c,__enum__:"ValueType",toString:$estr}; },$_.__params__ = ["c"],$_)
  ,TBool: {_hx_index:3,__enum__:"ValueType",toString:$estr}
};

exports.default = ValueType;