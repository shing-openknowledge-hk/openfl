// Enum: format.amf3.Value

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

// Imports

var $estr = require("./../../estr_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;

// Definition

var Value = $hxEnums["format.amf3.Value"] = { __ename__ : "format.amf3.Value", __constructs__ : ["AUndefined","ANull","ABool","AInt","ANumber","AString","ADate","AObject","AArray","AVector","AXml","ABytes","AMap"]
  ,AXml: ($_=function(x) { return {_hx_index:10,x:x,__enum__:"format.amf3.Value",toString:$estr}; },$_.__params__ = ["x"],$_)
  ,AVector: ($_=function(values) { return {_hx_index:9,values:values,__enum__:"format.amf3.Value",toString:$estr}; },$_.__params__ = ["values"],$_)
  ,AUndefined: {_hx_index:0,__enum__:"format.amf3.Value",toString:$estr}
  ,AString: ($_=function(s) { return {_hx_index:5,s:s,__enum__:"format.amf3.Value",toString:$estr}; },$_.__params__ = ["s"],$_)
  ,AObject: ($_=function(fields,size) { return {_hx_index:7,fields:fields,size:size,__enum__:"format.amf3.Value",toString:$estr}; },$_.__params__ = ["fields","size"],$_)
  ,ANumber: ($_=function(f) { return {_hx_index:4,f:f,__enum__:"format.amf3.Value",toString:$estr}; },$_.__params__ = ["f"],$_)
  ,ANull: {_hx_index:1,__enum__:"format.amf3.Value",toString:$estr}
  ,AMap: ($_=function(m) { return {_hx_index:12,m:m,__enum__:"format.amf3.Value",toString:$estr}; },$_.__params__ = ["m"],$_)
  ,AInt: ($_=function(i) { return {_hx_index:3,i:i,__enum__:"format.amf3.Value",toString:$estr}; },$_.__params__ = ["i"],$_)
  ,ADate: ($_=function(d) { return {_hx_index:6,d:d,__enum__:"format.amf3.Value",toString:$estr}; },$_.__params__ = ["d"],$_)
  ,ABytes: ($_=function(b) { return {_hx_index:11,b:b,__enum__:"format.amf3.Value",toString:$estr}; },$_.__params__ = ["b"],$_)
  ,ABool: ($_=function(b) { return {_hx_index:2,b:b,__enum__:"format.amf3.Value",toString:$estr}; },$_.__params__ = ["b"],$_)
  ,AArray: ($_=function(values,extra) { return {_hx_index:8,values:values,extra:extra,__enum__:"format.amf3.Value",toString:$estr}; },$_.__params__ = ["values","extra"],$_)
};

exports.default = Value;