// Class: lime.net._HTTPRequest_openfl_utils_ByteArray

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;
var $import = require("./../../import_stub").default;
var $extend = require("./../../extend_stub").default;
function lime_net__$HTTPRequest_$Bytes() {return require("./../../lime/net/_HTTPRequest_Bytes");}
function openfl_utils__$ByteArray_ByteArray_$Impl_$() {return require("./../../openfl/utils/_ByteArray/ByteArray_Impl_");}

// Constructor

var _HTTPRequest_openfl_utils_ByteArray = function(uri) {
	(lime_net__$HTTPRequest_$Bytes().default).call(this,uri);
}

// Meta

_HTTPRequest_openfl_utils_ByteArray.__name__ = "lime.net._HTTPRequest_openfl_utils_ByteArray";
_HTTPRequest_openfl_utils_ByteArray.__isInterface__ = false;
_HTTPRequest_openfl_utils_ByteArray.__super__ = (lime_net__$HTTPRequest_$Bytes().default);
_HTTPRequest_openfl_utils_ByteArray.prototype = $extend((lime_net__$HTTPRequest_$Bytes().default).prototype, {
	fromBytes: function(bytes) {
		return (openfl_utils__$ByteArray_ByteArray_$Impl_$().default).fromBytes(bytes);
	}
});
_HTTPRequest_openfl_utils_ByteArray.prototype.__class__ = _HTTPRequest_openfl_utils_ByteArray.prototype.constructor = $hxClasses["lime.net._HTTPRequest_openfl_utils_ByteArray"] = _HTTPRequest_openfl_utils_ByteArray;

// Init



// Statics




// Export

exports.default = _HTTPRequest_openfl_utils_ByteArray;