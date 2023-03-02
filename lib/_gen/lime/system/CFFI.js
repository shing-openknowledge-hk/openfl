// Class: lime.system.CFFI

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;
var $import = require("./../../import_stub").default;
function Reflect() {return require("./../../Reflect");}

// Constructor

var CFFI = function(){}

// Meta

CFFI.__name__ = "lime.system.CFFI";
CFFI.__isInterface__ = false;
CFFI.prototype = {
	
};
CFFI.prototype.__class__ = CFFI.prototype.constructor = $hxClasses["lime.system.CFFI"] = CFFI;

// Init

{
	CFFI.available = false;
	CFFI.enabled = false;
};

// Statics

CFFI.load = function(library,method,args,lazy) {
	if(lazy == null) {
		lazy = false;
	}
	if(args == null) {
		args = 0;
	}
	if(!CFFI.enabled) {
		return (Reflect().default).makeVarArgs(function(__) {
			return { };
		});
	}
	var result = null;
	return result;
}
CFFI.__findHaxelib = function(library) {
	return "";
}
CFFI.__loaderTrace = function(message) {
}
CFFI.__sysName = function() {
	return null;
}
CFFI.__tryLoad = function(name,library,func,args) {
	return null;
}
CFFI.__moduleNames = null

// Export

exports.default = CFFI;