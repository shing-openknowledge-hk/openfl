// Class: openfl.display._CapsStyle.CapsStyle_Impl_

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../hxClasses_stub").default;
var $hxEnums = require("./../../../hxEnums_stub").default;

// Constructor

var CapsStyle_Impl_ = function(){}

// Meta

CapsStyle_Impl_.__name__ = "openfl.display._CapsStyle.CapsStyle_Impl_";
CapsStyle_Impl_.__isInterface__ = false;
CapsStyle_Impl_.prototype = {
	
};
CapsStyle_Impl_.prototype.__class__ = CapsStyle_Impl_.prototype.constructor = $hxClasses["openfl.display._CapsStyle.CapsStyle_Impl_"] = CapsStyle_Impl_;

// Init



// Statics

CapsStyle_Impl_.fromInt = function(value) {
	if(value == null) {
		return null;
	} else {
		switch(value) {
		case 0:
			return "none";
		case 1:
			return "round";
		case 2:
			return "square";
		default:
			return null;
		}
	}
}
CapsStyle_Impl_.NONE = "none"
CapsStyle_Impl_.ROUND = "round"
CapsStyle_Impl_.SQUARE = "square"

// Export

exports.default = CapsStyle_Impl_;