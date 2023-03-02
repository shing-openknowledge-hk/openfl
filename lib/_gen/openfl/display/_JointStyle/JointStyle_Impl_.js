// Class: openfl.display._JointStyle.JointStyle_Impl_

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../hxClasses_stub").default;
var $hxEnums = require("./../../../hxEnums_stub").default;

// Constructor

var JointStyle_Impl_ = function(){}

// Meta

JointStyle_Impl_.__name__ = "openfl.display._JointStyle.JointStyle_Impl_";
JointStyle_Impl_.__isInterface__ = false;
JointStyle_Impl_.prototype = {
	
};
JointStyle_Impl_.prototype.__class__ = JointStyle_Impl_.prototype.constructor = $hxClasses["openfl.display._JointStyle.JointStyle_Impl_"] = JointStyle_Impl_;

// Init



// Statics

JointStyle_Impl_.fromInt = function(value) {
	if(value == null) {
		return null;
	} else {
		switch(value) {
		case 0:
			return "bevel";
		case 1:
			return "miter";
		case 2:
			return "round";
		default:
			return null;
		}
	}
}
JointStyle_Impl_.BEVEL = "bevel"
JointStyle_Impl_.MITER = "miter"
JointStyle_Impl_.ROUND = "round"

// Export

exports.default = JointStyle_Impl_;