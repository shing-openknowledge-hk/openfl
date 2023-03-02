// Class: openfl._internal.renderer._DrawCommandReader.CubicCurveToView_Impl_

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../../hxClasses_stub").default;
var $hxEnums = require("./../../../../hxEnums_stub").default;

// Constructor

var CubicCurveToView_Impl_ = function(){}

// Meta

CubicCurveToView_Impl_.__name__ = "openfl._internal.renderer._DrawCommandReader.CubicCurveToView_Impl_";
CubicCurveToView_Impl_.__isInterface__ = false;
CubicCurveToView_Impl_.prototype = {
	
};
CubicCurveToView_Impl_.prototype.__class__ = CubicCurveToView_Impl_.prototype.constructor = $hxClasses["openfl._internal.renderer._DrawCommandReader.CubicCurveToView_Impl_"] = CubicCurveToView_Impl_;

// Init



// Statics

CubicCurveToView_Impl_._new = function(d) {
	var this1 = d;
	return this1;
}
CubicCurveToView_Impl_.get_controlX1 = function(this1) {
	return this1.float(0);
}
CubicCurveToView_Impl_.get_controlY1 = function(this1) {
	return this1.float(1);
}
CubicCurveToView_Impl_.get_controlX2 = function(this1) {
	return this1.float(2);
}
CubicCurveToView_Impl_.get_controlY2 = function(this1) {
	return this1.float(3);
}
CubicCurveToView_Impl_.get_anchorX = function(this1) {
	return this1.float(4);
}
CubicCurveToView_Impl_.get_anchorY = function(this1) {
	return this1.float(5);
}


// Export

exports.default = CubicCurveToView_Impl_;