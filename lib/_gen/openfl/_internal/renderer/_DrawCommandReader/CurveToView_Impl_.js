// Class: openfl._internal.renderer._DrawCommandReader.CurveToView_Impl_

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../../hxClasses_stub").default;
var $hxEnums = require("./../../../../hxEnums_stub").default;

// Constructor

var CurveToView_Impl_ = function(){}

// Meta

CurveToView_Impl_.__name__ = "openfl._internal.renderer._DrawCommandReader.CurveToView_Impl_";
CurveToView_Impl_.__isInterface__ = false;
CurveToView_Impl_.prototype = {
	
};
CurveToView_Impl_.prototype.__class__ = CurveToView_Impl_.prototype.constructor = $hxClasses["openfl._internal.renderer._DrawCommandReader.CurveToView_Impl_"] = CurveToView_Impl_;

// Init



// Statics

CurveToView_Impl_._new = function(d) {
	var this1 = d;
	return this1;
}
CurveToView_Impl_.get_controlX = function(this1) {
	return this1.float(0);
}
CurveToView_Impl_.get_controlY = function(this1) {
	return this1.float(1);
}
CurveToView_Impl_.get_anchorX = function(this1) {
	return this1.float(2);
}
CurveToView_Impl_.get_anchorY = function(this1) {
	return this1.float(3);
}


// Export

exports.default = CurveToView_Impl_;