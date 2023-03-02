// Class: openfl.net.URLRequest

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;
var $import = require("./../../import_stub").default;
function openfl_net_URLRequestDefaults() {return require("./../../openfl/net/URLRequestDefaults");}

// Constructor

var URLRequest = function(url) {
	if(url != null) {
		this.url = url;
	}
	this.contentType = null;
	this.followRedirects = (openfl_net_URLRequestDefaults().default).followRedirects;
	if((openfl_net_URLRequestDefaults().default).idleTimeout > 0) {
		this.idleTimeout = (openfl_net_URLRequestDefaults().default).idleTimeout;
	} else {
		this.idleTimeout = 30000;
	}
	this.manageCookies = (openfl_net_URLRequestDefaults().default).manageCookies;
	this.method = "GET";
	this.requestHeaders = [];
	this.userAgent = (openfl_net_URLRequestDefaults().default).userAgent;
}

// Meta

URLRequest.__name__ = "openfl.net.URLRequest";
URLRequest.__isInterface__ = false;
URLRequest.prototype = {
	
};
URLRequest.prototype.__class__ = URLRequest.prototype.constructor = $hxClasses["openfl.net.URLRequest"] = URLRequest;

// Init



// Statics




// Export

exports.default = URLRequest;