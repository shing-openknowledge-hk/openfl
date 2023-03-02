// Class: lime.utils._LogLevel.LogLevel_Impl_

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../hxClasses_stub").default;
var $hxEnums = require("./../../../hxEnums_stub").default;

// Constructor

var LogLevel_Impl_ = function(){}

// Meta

LogLevel_Impl_.__name__ = "lime.utils._LogLevel.LogLevel_Impl_";
LogLevel_Impl_.__isInterface__ = false;
LogLevel_Impl_.prototype = {
	
};
LogLevel_Impl_.prototype.__class__ = LogLevel_Impl_.prototype.constructor = $hxClasses["lime.utils._LogLevel.LogLevel_Impl_"] = LogLevel_Impl_;

// Init



// Statics

LogLevel_Impl_.gt = function(a,b) {
	return a > b;
}
LogLevel_Impl_.gte = function(a,b) {
	return a >= b;
}
LogLevel_Impl_.lt = function(a,b) {
	return a < b;
}
LogLevel_Impl_.lte = function(a,b) {
	return a <= b;
}
LogLevel_Impl_.NONE = 0
LogLevel_Impl_.ERROR = 1
LogLevel_Impl_.WARN = 2
LogLevel_Impl_.INFO = 3
LogLevel_Impl_.DEBUG = 4
LogLevel_Impl_.VERBOSE = 5

// Export

exports.default = LogLevel_Impl_;