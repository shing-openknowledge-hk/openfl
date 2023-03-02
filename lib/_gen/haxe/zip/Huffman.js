// Enum: haxe.zip.Huffman

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

// Imports

var $estr = require("./../../estr_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;

// Definition

var Huffman = $hxEnums["haxe.zip.Huffman"] = { __ename__ : "haxe.zip.Huffman", __constructs__ : ["Found","NeedBit","NeedBits"]
  ,NeedBits: ($_=function(n,table) { return {_hx_index:2,n:n,table:table,__enum__:"haxe.zip.Huffman",toString:$estr}; },$_.__params__ = ["n","table"],$_)
  ,NeedBit: ($_=function(left,right) { return {_hx_index:1,left:left,right:right,__enum__:"haxe.zip.Huffman",toString:$estr}; },$_.__params__ = ["left","right"],$_)
  ,Found: ($_=function(i) { return {_hx_index:0,i:i,__enum__:"haxe.zip.Huffman",toString:$estr}; },$_.__params__ = ["i"],$_)
};

exports.default = Huffman;