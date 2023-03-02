// Class: lime.ui._JoystickHatPosition.JoystickHatPosition_Impl_

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../hxClasses_stub").default;
var $hxEnums = require("./../../../hxEnums_stub").default;

// Constructor

var JoystickHatPosition_Impl_ = function(){}

// Meta

JoystickHatPosition_Impl_.__name__ = "lime.ui._JoystickHatPosition.JoystickHatPosition_Impl_";
JoystickHatPosition_Impl_.__isInterface__ = false;
JoystickHatPosition_Impl_.prototype = {
	
};
JoystickHatPosition_Impl_.prototype.__class__ = JoystickHatPosition_Impl_.prototype.constructor = $hxClasses["lime.ui._JoystickHatPosition.JoystickHatPosition_Impl_"] = JoystickHatPosition_Impl_;

// Init



// Statics

JoystickHatPosition_Impl_._new = function(value) {
	var this1 = value;
	return this1;
}
JoystickHatPosition_Impl_.get_center = function(this1) {
	return this1 == 0;
}
JoystickHatPosition_Impl_.set_center = function(this1,value) {
	if(value) {
		this1 = 0;
	}
	return value;
}
JoystickHatPosition_Impl_.get_down = function(this1) {
	return (this1 & 4) > 0;
}
JoystickHatPosition_Impl_.set_down = function(this1,value) {
	if(value) {
		this1 |= 4;
	} else {
		this1 &= 268435455 - 4;
	}
	return value;
}
JoystickHatPosition_Impl_.get_left = function(this1) {
	return (this1 & 8) > 0;
}
JoystickHatPosition_Impl_.set_left = function(this1,value) {
	if(value) {
		this1 |= 8;
	} else {
		this1 &= 268435455 - 8;
	}
	return value;
}
JoystickHatPosition_Impl_.get_right = function(this1) {
	return (this1 & 2) > 0;
}
JoystickHatPosition_Impl_.set_right = function(this1,value) {
	if(value) {
		this1 |= 2;
	} else {
		this1 &= 268435455 - 2;
	}
	return value;
}
JoystickHatPosition_Impl_.get_up = function(this1) {
	return (this1 & 1) > 0;
}
JoystickHatPosition_Impl_.set_up = function(this1,value) {
	if(value) {
		this1 |= 1;
	} else {
		this1 &= 268435455 - 1;
	}
	return value;
}
JoystickHatPosition_Impl_.CENTER = 0
JoystickHatPosition_Impl_.DOWN = 4
JoystickHatPosition_Impl_.LEFT = 8
JoystickHatPosition_Impl_.RIGHT = 2
JoystickHatPosition_Impl_.UP = 1
JoystickHatPosition_Impl_.DOWN_LEFT = 12
JoystickHatPosition_Impl_.DOWN_RIGHT = 6
JoystickHatPosition_Impl_.UP_LEFT = 9
JoystickHatPosition_Impl_.UP_RIGHT = 3

// Export

exports.default = JoystickHatPosition_Impl_;