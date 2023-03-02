// Class: lime.net.HTTPRequestHeader

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;

// Constructor

var HTTPRequestHeader = function(name,value) {
	if(value == null) {
		value = "";
	}
	this.name = name;
	this.value = value;
}

// Meta

HTTPRequestHeader.__name__ = "lime.net.HTTPRequestHeader";
HTTPRequestHeader.__isInterface__ = false;
HTTPRequestHeader.prototype = {
	
};
HTTPRequestHeader.prototype.__class__ = HTTPRequestHeader.prototype.constructor = $hxClasses["lime.net.HTTPRequestHeader"] = HTTPRequestHeader;

// Init



// Statics




// Export

exports.default = HTTPRequestHeader;