// Class: openfl._internal.renderer._DrawCommandReader.LineGradientStyleView_Impl_

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../../hxClasses_stub").default;
var $hxEnums = require("./../../../../hxEnums_stub").default;

// Constructor

var LineGradientStyleView_Impl_ = function(){}

// Meta

LineGradientStyleView_Impl_.__name__ = "openfl._internal.renderer._DrawCommandReader.LineGradientStyleView_Impl_";
LineGradientStyleView_Impl_.__isInterface__ = false;
LineGradientStyleView_Impl_.prototype = {
	
};
LineGradientStyleView_Impl_.prototype.__class__ = LineGradientStyleView_Impl_.prototype.constructor = $hxClasses["openfl._internal.renderer._DrawCommandReader.LineGradientStyleView_Impl_"] = LineGradientStyleView_Impl_;

// Init



// Statics

LineGradientStyleView_Impl_._new = function(d) {
	var this1 = d;
	return this1;
}
LineGradientStyleView_Impl_.get_type = function(this1) {
	return this1.obj(0);
}
LineGradientStyleView_Impl_.get_colors = function(this1) {
	return this1.iArr(0);
}
LineGradientStyleView_Impl_.get_alphas = function(this1) {
	return this1.fArr(0);
}
LineGradientStyleView_Impl_.get_ratios = function(this1) {
	return this1.iArr(1);
}
LineGradientStyleView_Impl_.get_matrix = function(this1) {
	return this1.obj(1);
}
LineGradientStyleView_Impl_.get_spreadMethod = function(this1) {
	return this1.obj(2);
}
LineGradientStyleView_Impl_.get_interpolationMethod = function(this1) {
	return this1.obj(3);
}
LineGradientStyleView_Impl_.get_focalPointRatio = function(this1) {
	return this1.float(0);
}


// Export

exports.default = LineGradientStyleView_Impl_;