// Class: openfl.display._InterpolationMethod.InterpolationMethod_Impl_

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../hxClasses_stub").default;
var $hxEnums = require("./../../../hxEnums_stub").default;

// Constructor

var InterpolationMethod_Impl_ = function(){}

// Meta

InterpolationMethod_Impl_.__name__ = "openfl.display._InterpolationMethod.InterpolationMethod_Impl_";
InterpolationMethod_Impl_.__isInterface__ = false;
InterpolationMethod_Impl_.prototype = {
	
};
InterpolationMethod_Impl_.prototype.__class__ = InterpolationMethod_Impl_.prototype.constructor = $hxClasses["openfl.display._InterpolationMethod.InterpolationMethod_Impl_"] = InterpolationMethod_Impl_;

// Init



// Statics

InterpolationMethod_Impl_.fromInt = function(value) {
	if(value == null) {
		return null;
	} else {
		switch(value) {
		case 0:
			return "linearRGB";
		case 1:
			return "rgb";
		default:
			return null;
		}
	}
}
InterpolationMethod_Impl_.LINEAR_RGB = "linearRGB"
InterpolationMethod_Impl_.RGB = "rgb"

// Export

exports.default = InterpolationMethod_Impl_;