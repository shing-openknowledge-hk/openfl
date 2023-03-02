// Class: lime.ui._GamepadAxis.GamepadAxis_Impl_

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../hxClasses_stub").default;
var $hxEnums = require("./../../../hxEnums_stub").default;

// Constructor

var GamepadAxis_Impl_ = function(){}

// Meta

GamepadAxis_Impl_.__name__ = "lime.ui._GamepadAxis.GamepadAxis_Impl_";
GamepadAxis_Impl_.__isInterface__ = false;
GamepadAxis_Impl_.prototype = {
	
};
GamepadAxis_Impl_.prototype.__class__ = GamepadAxis_Impl_.prototype.constructor = $hxClasses["lime.ui._GamepadAxis.GamepadAxis_Impl_"] = GamepadAxis_Impl_;

// Init



// Statics

GamepadAxis_Impl_.toString = function(this1) {
	switch(this1) {
	case 0:
		return "LEFT_X";
	case 1:
		return "LEFT_Y";
	case 2:
		return "RIGHT_X";
	case 3:
		return "RIGHT_Y";
	case 4:
		return "TRIGGER_LEFT";
	case 5:
		return "TRIGGER_RIGHT";
	default:
		return "UNKNOWN (" + this1 + ")";
	}
}
GamepadAxis_Impl_.LEFT_X = 0
GamepadAxis_Impl_.LEFT_Y = 1
GamepadAxis_Impl_.RIGHT_X = 2
GamepadAxis_Impl_.RIGHT_Y = 3
GamepadAxis_Impl_.TRIGGER_LEFT = 4
GamepadAxis_Impl_.TRIGGER_RIGHT = 5

// Export

exports.default = GamepadAxis_Impl_;