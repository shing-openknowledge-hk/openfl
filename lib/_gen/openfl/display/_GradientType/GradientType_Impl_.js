// Class: openfl.display._GradientType.GradientType_Impl_

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../hxClasses_stub").default;
var $hxEnums = require("./../../../hxEnums_stub").default;

// Constructor

var GradientType_Impl_ = function(){}

// Meta

GradientType_Impl_.__name__ = "openfl.display._GradientType.GradientType_Impl_";
GradientType_Impl_.__isInterface__ = false;
GradientType_Impl_.prototype = {
	
};
GradientType_Impl_.prototype.__class__ = GradientType_Impl_.prototype.constructor = $hxClasses["openfl.display._GradientType.GradientType_Impl_"] = GradientType_Impl_;

// Init



// Statics

GradientType_Impl_.fromInt = function(value) {
	if(value == null) {
		return null;
	} else {
		switch(value) {
		case 0:
			return "linear";
		case 1:
			return "radial";
		default:
			return null;
		}
	}
}
GradientType_Impl_.LINEAR = "linear"
GradientType_Impl_.RADIAL = "radial"

// Export

exports.default = GradientType_Impl_;