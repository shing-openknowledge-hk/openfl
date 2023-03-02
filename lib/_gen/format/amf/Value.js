// Enum: format.amf.Value

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

// Imports

var $estr = require("./../../estr_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;

// Definition

var Value = $hxEnums["format.amf.Value"] = { __ename__ : "format.amf.Value", __constructs__ : ["ANumber","ABool","AString","AObject","ADate","AUndefined","ANull","AArray"]
  ,AUndefined: {_hx_index:5,__enum__:"format.amf.Value",toString:$estr}
  ,AString: ($_=function(s) { return {_hx_index:2,s:s,__enum__:"format.amf.Value",toString:$estr}; },$_.__params__ = ["s"],$_)
  ,AObject: ($_=function(fields,size) { return {_hx_index:3,fields:fields,size:size,__enum__:"format.amf.Value",toString:$estr}; },$_.__params__ = ["fields","size"],$_)
  ,ANumber: ($_=function(f) { return {_hx_index:0,f:f,__enum__:"format.amf.Value",toString:$estr}; },$_.__params__ = ["f"],$_)
  ,ANull: {_hx_index:6,__enum__:"format.amf.Value",toString:$estr}
  ,ADate: ($_=function(d) { return {_hx_index:4,d:d,__enum__:"format.amf.Value",toString:$estr}; },$_.__params__ = ["d"],$_)
  ,ABool: ($_=function(b) { return {_hx_index:1,b:b,__enum__:"format.amf.Value",toString:$estr}; },$_.__params__ = ["b"],$_)
  ,AArray: ($_=function(values) { return {_hx_index:7,values:values,__enum__:"format.amf.Value",toString:$estr}; },$_.__params__ = ["values"],$_)
};

exports.default = Value;