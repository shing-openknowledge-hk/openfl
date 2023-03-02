// Class: openfl.display._SpreadMethod.SpreadMethod_Impl_

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../hxClasses_stub").default;
var $hxEnums = require("./../../../hxEnums_stub").default;

// Constructor

var SpreadMethod_Impl_ = function(){}

// Meta

SpreadMethod_Impl_.__name__ = "openfl.display._SpreadMethod.SpreadMethod_Impl_";
SpreadMethod_Impl_.__isInterface__ = false;
SpreadMethod_Impl_.prototype = {
	
};
SpreadMethod_Impl_.prototype.__class__ = SpreadMethod_Impl_.prototype.constructor = $hxClasses["openfl.display._SpreadMethod.SpreadMethod_Impl_"] = SpreadMethod_Impl_;

// Init



// Statics

SpreadMethod_Impl_.fromInt = function(value) {
	if(value == null) {
		return null;
	} else {
		switch(value) {
		case 0:
			return "pad";
		case 1:
			return "reflect";
		case 2:
			return "repeat";
		default:
			return null;
		}
	}
}
SpreadMethod_Impl_.PAD = "pad"
SpreadMethod_Impl_.REFLECT = "reflect"
SpreadMethod_Impl_.REPEAT = "repeat"

// Export

exports.default = SpreadMethod_Impl_;