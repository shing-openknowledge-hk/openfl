// Class: lime.net._HTTPRequest.AbstractHTTPRequest

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../hxClasses_stub").default;
var $hxEnums = require("./../../../hxEnums_stub").default;
var $import = require("./../../../import_stub").default;
function lime_net__$IHTTPRequest() {return require("./../../../lime/net/_IHTTPRequest");}
function haxe_ds_StringMap() {return require("./../../../haxe/ds/StringMap");}
function lime__$internal_backend_html5_HTML5HTTPRequest() {return require("./../../../lime/_internal/backend/html5/HTML5HTTPRequest");}

// Constructor

var AbstractHTTPRequest = function(uri) {
	this.uri = uri;
	this.contentType = "application/x-www-form-urlencoded";
	this.followRedirects = true;
	this.enableResponseHeaders = false;
	this.formData = new (haxe_ds_StringMap().default)();
	this.headers = [];
	this.method = "GET";
	this.timeout = 30000;
	this.withCredentials = false;
	this.__backend = new (lime__$internal_backend_html5_HTML5HTTPRequest().default)();
	this.__backend.init(this);
}

// Meta

AbstractHTTPRequest.__name__ = "lime.net._HTTPRequest.AbstractHTTPRequest";
AbstractHTTPRequest.__isInterface__ = false;
AbstractHTTPRequest.__interfaces__ = [(lime_net__$IHTTPRequest().default)];
AbstractHTTPRequest.prototype = {
	cancel: function() {
		this.__backend.cancel();
	},
	load: function(uri) {
		return null;
	}
};
AbstractHTTPRequest.prototype.__class__ = AbstractHTTPRequest.prototype.constructor = $hxClasses["lime.net._HTTPRequest.AbstractHTTPRequest"] = AbstractHTTPRequest;

// Init



// Statics




// Export

exports.default = AbstractHTTPRequest;