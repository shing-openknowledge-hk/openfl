// Enum: lime.utils.CompressionAlgorithm

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

// Imports

var $estr = require("./../../estr_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;

// Definition

var CompressionAlgorithm = $hxEnums["lime.utils.CompressionAlgorithm"] = { __ename__ : "lime.utils.CompressionAlgorithm", __constructs__ : ["DEFLATE","GZIP","LZMA","ZLIB"]
  ,ZLIB: {_hx_index:3,__enum__:"lime.utils.CompressionAlgorithm",toString:$estr}
  ,LZMA: {_hx_index:2,__enum__:"lime.utils.CompressionAlgorithm",toString:$estr}
  ,GZIP: {_hx_index:1,__enum__:"lime.utils.CompressionAlgorithm",toString:$estr}
  ,DEFLATE: {_hx_index:0,__enum__:"lime.utils.CompressionAlgorithm",toString:$estr}
};

exports.default = CompressionAlgorithm;