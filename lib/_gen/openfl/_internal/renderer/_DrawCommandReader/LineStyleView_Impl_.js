// Class: openfl._internal.renderer._DrawCommandReader.LineStyleView_Impl_

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../../hxClasses_stub").default;
var $hxEnums = require("./../../../../hxEnums_stub").default;

// Constructor

var LineStyleView_Impl_ = function(){}

// Meta

LineStyleView_Impl_.__name__ = "openfl._internal.renderer._DrawCommandReader.LineStyleView_Impl_";
LineStyleView_Impl_.__isInterface__ = false;
LineStyleView_Impl_.prototype = {
	
};
LineStyleView_Impl_.prototype.__class__ = LineStyleView_Impl_.prototype.constructor = $hxClasses["openfl._internal.renderer._DrawCommandReader.LineStyleView_Impl_"] = LineStyleView_Impl_;

// Init



// Statics

LineStyleView_Impl_._new = function(d) {
	var this1 = d;
	return this1;
}
LineStyleView_Impl_.get_thickness = function(this1) {
	return this1.obj(0);
}
LineStyleView_Impl_.get_color = function(this1) {
	return this1.int(0);
}
LineStyleView_Impl_.get_alpha = function(this1) {
	return this1.float(0);
}
LineStyleView_Impl_.get_pixelHinting = function(this1) {
	return this1.bool(0);
}
LineStyleView_Impl_.get_scaleMode = function(this1) {
	return this1.obj(1);
}
LineStyleView_Impl_.get_caps = function(this1) {
	return this1.obj(2);
}
LineStyleView_Impl_.get_joints = function(this1) {
	return this1.obj(3);
}
LineStyleView_Impl_.get_miterLimit = function(this1) {
	return this1.float(1);
}


// Export

exports.default = LineStyleView_Impl_;