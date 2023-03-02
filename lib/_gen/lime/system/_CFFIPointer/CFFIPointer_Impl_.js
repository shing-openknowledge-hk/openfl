// Class: lime.system._CFFIPointer.CFFIPointer_Impl_

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../hxClasses_stub").default;
var $hxEnums = require("./../../../hxEnums_stub").default;
var $import = require("./../../../import_stub").default;

// Constructor

var CFFIPointer_Impl_ = function(){}

// Meta

CFFIPointer_Impl_.__name__ = "lime.system._CFFIPointer.CFFIPointer_Impl_";
CFFIPointer_Impl_.__isInterface__ = false;
CFFIPointer_Impl_.prototype = {
	
};
CFFIPointer_Impl_.prototype.__class__ = CFFIPointer_Impl_.prototype.constructor = $hxClasses["lime.system._CFFIPointer.CFFIPointer_Impl_"] = CFFIPointer_Impl_;

// Init



// Statics

CFFIPointer_Impl_._new = function(handle) {
	var this1 = handle;
	return this1;
}
CFFIPointer_Impl_.get = function(this1) {
	var tmp = this1 != null;
	return 0;
}
CFFIPointer_Impl_.equals = function(a,b) {
	return CFFIPointer_Impl_.get(a) == b;
}
CFFIPointer_Impl_.equalsPointer = function(a,b) {
	return CFFIPointer_Impl_.get(a) == CFFIPointer_Impl_.get(b);
}
CFFIPointer_Impl_.greaterThan = function(a,b) {
	return CFFIPointer_Impl_.get(a) > b;
}
CFFIPointer_Impl_.greaterThanPointer = function(a,b) {
	return CFFIPointer_Impl_.get(a) > CFFIPointer_Impl_.get(b);
}
CFFIPointer_Impl_.greaterThanOrEqual = function(a,b) {
	return CFFIPointer_Impl_.get(a) >= b;
}
CFFIPointer_Impl_.greaterThanOrEqualPointer = function(a,b) {
	return CFFIPointer_Impl_.get(a) >= CFFIPointer_Impl_.get(b);
}
CFFIPointer_Impl_.lessThan = function(a,b) {
	return CFFIPointer_Impl_.get(a) < b;
}
CFFIPointer_Impl_.lessThanPointer = function(a,b) {
	return CFFIPointer_Impl_.get(a) < CFFIPointer_Impl_.get(b);
}
CFFIPointer_Impl_.lessThanOrEqual = function(a,b) {
	return CFFIPointer_Impl_.get(a) <= b;
}
CFFIPointer_Impl_.lessThanOrEqualPointer = function(a,b) {
	return CFFIPointer_Impl_.get(a) <= CFFIPointer_Impl_.get(b);
}
CFFIPointer_Impl_.notEquals = function(a,b) {
	return CFFIPointer_Impl_.get(a) != b;
}
CFFIPointer_Impl_.notEqualsPointer = function(a,b) {
	return CFFIPointer_Impl_.get(a) != CFFIPointer_Impl_.get(b);
}


// Export

exports.default = CFFIPointer_Impl_;