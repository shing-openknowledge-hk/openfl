// Enum: format.png.Chunk

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

// Imports

var $estr = require("./../../estr_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;

// Definition

var Chunk = $hxEnums["format.png.Chunk"] = { __ename__ : "format.png.Chunk", __constructs__ : ["CEnd","CHeader","CData","CPalette","CUnknown"]
  ,CUnknown: ($_=function(id,data) { return {_hx_index:4,id:id,data:data,__enum__:"format.png.Chunk",toString:$estr}; },$_.__params__ = ["id","data"],$_)
  ,CPalette: ($_=function(b) { return {_hx_index:3,b:b,__enum__:"format.png.Chunk",toString:$estr}; },$_.__params__ = ["b"],$_)
  ,CHeader: ($_=function(h) { return {_hx_index:1,h:h,__enum__:"format.png.Chunk",toString:$estr}; },$_.__params__ = ["h"],$_)
  ,CEnd: {_hx_index:0,__enum__:"format.png.Chunk",toString:$estr}
  ,CData: ($_=function(b) { return {_hx_index:2,b:b,__enum__:"format.png.Chunk",toString:$estr}; },$_.__params__ = ["b"],$_)
};

exports.default = Chunk;