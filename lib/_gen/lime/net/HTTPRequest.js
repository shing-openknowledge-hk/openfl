// Class: lime.net.HTTPRequest

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;
var $import = require("./../../import_stub").default;
var $extend = require("./../../extend_stub").default;
function lime_net__$HTTPRequest_AbstractHTTPRequest() {return require("./../../lime/net/_HTTPRequest/AbstractHTTPRequest");}

// Constructor

var HTTPRequest = function(uri) {
	(lime_net__$HTTPRequest_AbstractHTTPRequest().default).call(this,uri);
}

// Meta

HTTPRequest.__name__ = "lime.net.HTTPRequest";
HTTPRequest.__isInterface__ = false;
HTTPRequest.__super__ = (lime_net__$HTTPRequest_AbstractHTTPRequest().default);
HTTPRequest.prototype = $extend((lime_net__$HTTPRequest_AbstractHTTPRequest().default).prototype, {
	
});
HTTPRequest.prototype.__class__ = HTTPRequest.prototype.constructor = $hxClasses["lime.net.HTTPRequest"] = HTTPRequest;

// Init



// Statics




// Export

exports.default = HTTPRequest;