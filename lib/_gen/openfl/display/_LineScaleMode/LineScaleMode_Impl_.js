// Class: openfl.display._LineScaleMode.LineScaleMode_Impl_

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../hxClasses_stub").default;
var $hxEnums = require("./../../../hxEnums_stub").default;

// Constructor

var LineScaleMode_Impl_ = function(){}

// Meta

LineScaleMode_Impl_.__name__ = "openfl.display._LineScaleMode.LineScaleMode_Impl_";
LineScaleMode_Impl_.__isInterface__ = false;
LineScaleMode_Impl_.prototype = {
	
};
LineScaleMode_Impl_.prototype.__class__ = LineScaleMode_Impl_.prototype.constructor = $hxClasses["openfl.display._LineScaleMode.LineScaleMode_Impl_"] = LineScaleMode_Impl_;

// Init



// Statics

LineScaleMode_Impl_.fromInt = function(value) {
	if(value == null) {
		return null;
	} else {
		switch(value) {
		case 0:
			return "horizontal";
		case 1:
			return "none";
		case 2:
			return "normal";
		case 3:
			return "vertical";
		default:
			return null;
		}
	}
}
LineScaleMode_Impl_.HORIZONTAL = "horizontal"
LineScaleMode_Impl_.NONE = "none"
LineScaleMode_Impl_.NORMAL = "normal"
LineScaleMode_Impl_.VERTICAL = "vertical"

// Export

exports.default = LineScaleMode_Impl_;