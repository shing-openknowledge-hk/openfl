// Class: lime.net._HTTPRequest_lime_utils_Bytes

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;
var $import = require("./../../import_stub").default;
var $extend = require("./../../extend_stub").default;
function lime_net__$HTTPRequest_$Bytes() {return require("./../../lime/net/_HTTPRequest_Bytes");}
function lime_utils__$Bytes_Bytes_$Impl_$() {return require("./../../lime/utils/_Bytes/Bytes_Impl_");}

// Constructor

var _HTTPRequest_lime_utils_Bytes = function(uri) {
	(lime_net__$HTTPRequest_$Bytes().default).call(this,uri);
}

// Meta

_HTTPRequest_lime_utils_Bytes.__name__ = "lime.net._HTTPRequest_lime_utils_Bytes";
_HTTPRequest_lime_utils_Bytes.__isInterface__ = false;
_HTTPRequest_lime_utils_Bytes.__super__ = (lime_net__$HTTPRequest_$Bytes().default);
_HTTPRequest_lime_utils_Bytes.prototype = $extend((lime_net__$HTTPRequest_$Bytes().default).prototype, {
	fromBytes: function(bytes) {
		return (lime_utils__$Bytes_Bytes_$Impl_$().default).fromBytes(bytes);
	}
});
_HTTPRequest_lime_utils_Bytes.prototype.__class__ = _HTTPRequest_lime_utils_Bytes.prototype.constructor = $hxClasses["lime.net._HTTPRequest_lime_utils_Bytes"] = _HTTPRequest_lime_utils_Bytes;

// Init



// Statics




// Export

exports.default = _HTTPRequest_lime_utils_Bytes;