// Class: openfl._internal.text._TextLayout.TextDirection_Impl_

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../../hxClasses_stub").default;
var $hxEnums = require("./../../../../hxEnums_stub").default;

// Constructor

var TextDirection_Impl_ = function(){}

// Meta

TextDirection_Impl_.__name__ = "openfl._internal.text._TextLayout.TextDirection_Impl_";
TextDirection_Impl_.__isInterface__ = false;
TextDirection_Impl_.prototype = {
	
};
TextDirection_Impl_.prototype.__class__ = TextDirection_Impl_.prototype.constructor = $hxClasses["openfl._internal.text._TextLayout.TextDirection_Impl_"] = TextDirection_Impl_;

// Init



// Statics

TextDirection_Impl_.reverse = function(this1) {
	this1 ^= 1;
}
TextDirection_Impl_.toString = function(this1) {
	switch(this1) {
	case 4:
		return "leftToRight";
	case 5:
		return "rightToLeft";
	case 6:
		return "topToBottom";
	case 7:
		return "bottomToTop";
	default:
		return "";
	}
}
TextDirection_Impl_.toHBDirection = function(this1) {
	switch(this1) {
	case 4:
		return 4;
	case 5:
		return 5;
	case 6:
		return 6;
	case 7:
		return 7;
	default:
		return 0;
	}
}
TextDirection_Impl_.get_backward = function(this1) {
	return (this1 & -3) == 5;
}
TextDirection_Impl_.get_forward = function(this1) {
	return (this1 & -3) == 4;
}
TextDirection_Impl_.get_horizontal = function(this1) {
	return (this1 & -2) == 4;
}
TextDirection_Impl_.get_vertical = function(this1) {
	return (this1 & -2) == 6;
}
TextDirection_Impl_.INVALID = 0
TextDirection_Impl_.LEFT_TO_RIGHT = 4
TextDirection_Impl_.RIGHT_TO_LEFT = 5
TextDirection_Impl_.TOP_TO_BOTTOM = 6
TextDirection_Impl_.BOTTOM_TO_TOP = 7

// Export

exports.default = TextDirection_Impl_;