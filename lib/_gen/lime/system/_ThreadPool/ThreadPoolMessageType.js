// Enum: lime.system._ThreadPool.ThreadPoolMessageType

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

// Imports

var $estr = require("./../../../estr_stub").default;
var $hxEnums = require("./../../../hxEnums_stub").default;

// Definition

var ThreadPoolMessageType = $hxEnums["lime.system._ThreadPool.ThreadPoolMessageType"] = { __ename__ : "lime.system._ThreadPool.ThreadPoolMessageType", __constructs__ : ["COMPLETE","ERROR","EXIT","PROGRESS","WORK"]
  ,WORK: {_hx_index:4,__enum__:"lime.system._ThreadPool.ThreadPoolMessageType",toString:$estr}
  ,PROGRESS: {_hx_index:3,__enum__:"lime.system._ThreadPool.ThreadPoolMessageType",toString:$estr}
  ,EXIT: {_hx_index:2,__enum__:"lime.system._ThreadPool.ThreadPoolMessageType",toString:$estr}
  ,ERROR: {_hx_index:1,__enum__:"lime.system._ThreadPool.ThreadPoolMessageType",toString:$estr}
  ,COMPLETE: {_hx_index:0,__enum__:"lime.system._ThreadPool.ThreadPoolMessageType",toString:$estr}
};

exports.default = ThreadPoolMessageType;