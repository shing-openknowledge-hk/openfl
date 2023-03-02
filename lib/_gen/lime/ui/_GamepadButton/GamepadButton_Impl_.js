// Class: lime.ui._GamepadButton.GamepadButton_Impl_

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../hxClasses_stub").default;
var $hxEnums = require("./../../../hxEnums_stub").default;

// Constructor

var GamepadButton_Impl_ = function(){}

// Meta

GamepadButton_Impl_.__name__ = "lime.ui._GamepadButton.GamepadButton_Impl_";
GamepadButton_Impl_.__isInterface__ = false;
GamepadButton_Impl_.prototype = {
	
};
GamepadButton_Impl_.prototype.__class__ = GamepadButton_Impl_.prototype.constructor = $hxClasses["lime.ui._GamepadButton.GamepadButton_Impl_"] = GamepadButton_Impl_;

// Init



// Statics

GamepadButton_Impl_.toString = function(this1) {
	switch(this1) {
	case 0:
		return "A";
	case 1:
		return "B";
	case 2:
		return "X";
	case 3:
		return "Y";
	case 4:
		return "BACK";
	case 5:
		return "GUIDE";
	case 6:
		return "START";
	case 7:
		return "LEFT_STICK";
	case 8:
		return "RIGHT_STICK";
	case 9:
		return "LEFT_SHOULDER";
	case 10:
		return "RIGHT_SHOULDER";
	case 11:
		return "DPAD_UP";
	case 12:
		return "DPAD_DOWN";
	case 13:
		return "DPAD_LEFT";
	case 14:
		return "DPAD_RIGHT";
	default:
		return "UNKNOWN (" + this1 + ")";
	}
}
GamepadButton_Impl_.A = 0
GamepadButton_Impl_.B = 1
GamepadButton_Impl_.X = 2
GamepadButton_Impl_.Y = 3
GamepadButton_Impl_.BACK = 4
GamepadButton_Impl_.GUIDE = 5
GamepadButton_Impl_.START = 6
GamepadButton_Impl_.LEFT_STICK = 7
GamepadButton_Impl_.RIGHT_STICK = 8
GamepadButton_Impl_.LEFT_SHOULDER = 9
GamepadButton_Impl_.RIGHT_SHOULDER = 10
GamepadButton_Impl_.DPAD_UP = 11
GamepadButton_Impl_.DPAD_DOWN = 12
GamepadButton_Impl_.DPAD_LEFT = 13
GamepadButton_Impl_.DPAD_RIGHT = 14

// Export

exports.default = GamepadButton_Impl_;