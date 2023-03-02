// Class: openfl.net.URLRequestHeader

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;

// Constructor

var URLRequestHeader = function(name,value) {
	if(value == null) {
		value = "";
	}
	if(name == null) {
		name = "";
	}
	this.name = name;
	this.value = value;
}

// Meta

URLRequestHeader.__name__ = "openfl.net.URLRequestHeader";
URLRequestHeader.__isInterface__ = false;
URLRequestHeader.prototype = {
	
};
URLRequestHeader.prototype.__class__ = URLRequestHeader.prototype.constructor = $hxClasses["openfl.net.URLRequestHeader"] = URLRequestHeader;

// Init



// Statics




// Export

exports.default = URLRequestHeader;