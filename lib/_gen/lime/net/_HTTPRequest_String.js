// Class: lime.net._HTTPRequest_String

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

var _HTTPRequest_String = function(uri) {
	(lime_net__$HTTPRequest_AbstractHTTPRequest().default).call(this,uri);
}

// Meta

_HTTPRequest_String.__name__ = "lime.net._HTTPRequest_String";
_HTTPRequest_String.__isInterface__ = false;
_HTTPRequest_String.__super__ = (lime_net__$HTTPRequest_AbstractHTTPRequest().default);
_HTTPRequest_String.prototype = $extend((lime_net__$HTTPRequest_AbstractHTTPRequest().default).prototype, {
	load: function(uri) {
		var _gthis = this;
		if(uri != null) {
			this.uri = uri;
		}
		var promise = new (lime_app_Promise().default)();
		var future = this.__backend.loadText(this.uri);
		future.onProgress($bind(promise,promise.progress));
		future.onError($bind(promise,promise.error));
		future.onComplete(function(text) {
			_gthis.responseData = text;
			promise.complete(_gthis.responseData);
		});
		return promise.future;
	}
});
_HTTPRequest_String.prototype.__class__ = _HTTPRequest_String.prototype.constructor = $hxClasses["lime.net._HTTPRequest_String"] = _HTTPRequest_String;

// Init



// Statics




// Export

exports.default = _HTTPRequest_String;