// Enum: format.png.Color

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

// Imports

var $estr = require("./../../estr_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;

// Definition

var Color = $hxEnums["format.png.Color"] = { __ename__ : "format.png.Color", __constructs__ : ["ColGrey","ColTrue","ColIndexed"]
  ,ColTrue: ($_=function(alpha) { return {_hx_index:1,alpha:alpha,__enum__:"format.png.Color",toString:$estr}; },$_.__params__ = ["alpha"],$_)
  ,ColIndexed: {_hx_index:2,__enum__:"format.png.Color",toString:$estr}
  ,ColGrey: ($_=function(alpha) { return {_hx_index:0,alpha:alpha,__enum__:"format.png.Color",toString:$estr}; },$_.__params__ = ["alpha"],$_)
};

exports.default = Color;