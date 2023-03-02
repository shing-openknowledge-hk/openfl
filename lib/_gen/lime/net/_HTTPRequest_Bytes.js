// Class: lime.net._HTTPRequest_Bytes

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;
var $import = require("./../../import_stub").default;
var $bind = require("./../../bind_stub").default;
var $extend = require("./../../extend_stub").default;
function lime_net__$HTTPRequest_AbstractHTTPRequest() {return require("./../../lime/net/_HTTPRequest/AbstractHTTPRequest");}
function lime_app_Promise() {return require("./../../lime/app/Promise");}

// Constructor

var _HTTPRequest_Bytes = function(uri) {
	(lime_net__$HTTPRequest_AbstractHTTPRequest().default).call(this,uri);
}

// Meta

_HTTPRequest_Bytes.__name__ = "lime.net._HTTPRequest_Bytes";
_HTTPRequest_Bytes.__isInterface__ = false;
_HTTPRequest_Bytes.__super__ = (lime_net__$HTTPRequest_AbstractHTTPRequest().default);
_HTTPRequest_Bytes.prototype = $extend((lime_net__$HTTPRequest_AbstractHTTPRequest().default).prototype, {
	fromBytes: function(bytes) {
		return bytes;
	},
	load: function(uri) {
		var _gthis = this;
		if(uri != null) {
			this.uri = uri;
		}
		var promise = new (lime_app_Promise().default)();
		var future = this.__backend.loadData(this.uri);
		future.onProgress($bind(promise,promise.progress));
		future.onError($bind(promise,promise.error));
		future.onComplete(function(bytes) {
			_gthis.responseData = _gthis.fromBytes(bytes);
			promise.complete(_gthis.responseData);
		});
		return promise.future;
	}
});
_HTTPRequest_Bytes.prototype.__class__ = _HTTPRequest_Bytes.prototype.constructor = $hxClasses["lime.net._HTTPRequest_Bytes"] = _HTTPRequest_Bytes;

// Init



// Statics




// Export

exports.default = _HTTPRequest_Bytes;