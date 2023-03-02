// Class: lime.utils._DataPointer.DataPointer_Impl_

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../hxClasses_stub").default;
var $hxEnums = require("./../../../hxEnums_stub").default;
var $import = require("./../../../import_stub").default;
function lime_system__$CFFIPointer_CFFIPointer_$Impl_$() {return require("./../../../lime/system/_CFFIPointer/CFFIPointer_Impl_");}
function Std() {return require("./../../../Std");}

// Constructor

var DataPointer_Impl_ = function(){}

// Meta

DataPointer_Impl_.__name__ = "lime.utils._DataPointer.DataPointer_Impl_";
DataPointer_Impl_.__isInterface__ = false;
DataPointer_Impl_.prototype = {
	
};
DataPointer_Impl_.prototype.__class__ = DataPointer_Impl_.prototype.constructor = $hxClasses["lime.utils._DataPointer.DataPointer_Impl_"] = DataPointer_Impl_;

// Init



// Statics

DataPointer_Impl_._new = function(data) {
	var this1 = data;
	return this1;
}
DataPointer_Impl_.fromFloat = function(value) {
	return value;
}
DataPointer_Impl_.fromBytesPointer = function(pointer) {
	return DataPointer_Impl_.fromFloat(0);
}
DataPointer_Impl_.fromArrayBufferView = function(arrayBufferView) {
	return DataPointer_Impl_.fromFloat(0);
}
DataPointer_Impl_.fromArrayBuffer = function(buffer) {
	return DataPointer_Impl_.fromFloat(0);
}
DataPointer_Impl_.fromBytes = function(bytes) {
	return DataPointer_Impl_.fromFloat(0);
}
DataPointer_Impl_.fromBytesData = function(bytesData) {
	return DataPointer_Impl_.fromFloat(0);
}
DataPointer_Impl_.fromLimeBytes = function(bytes) {
	return DataPointer_Impl_.fromBytes(bytes);
}
DataPointer_Impl_.fromCFFIPointer = function(pointer) {
	return DataPointer_Impl_.fromFloat(0);
}
DataPointer_Impl_.fromFile = function(path) {
	return DataPointer_Impl_.fromFloat(0);
}
DataPointer_Impl_.__withOffset = function(data,offset) {
	return DataPointer_Impl_.fromFloat(0);
}
DataPointer_Impl_.equals = function(a,b) {
	return a == b;
}
DataPointer_Impl_.equalsPointer = function(a,b) {
	return a == b;
}
DataPointer_Impl_.greaterThan = function(a,b) {
	return a > b;
}
DataPointer_Impl_.greaterThanPointer = function(a,b) {
	return (lime_system__$CFFIPointer_CFFIPointer_$Impl_$().default).get(a) > (lime_system__$CFFIPointer_CFFIPointer_$Impl_$().default).get(b);
}
DataPointer_Impl_.greaterThanOrEqual = function(a,b) {
	return a >= b;
}
DataPointer_Impl_.greaterThanOrEqualPointer = function(a,b) {
	return (lime_system__$CFFIPointer_CFFIPointer_$Impl_$().default).get(a) >= (lime_system__$CFFIPointer_CFFIPointer_$Impl_$().default).get(b);
}
DataPointer_Impl_.lessThan = function(a,b) {
	return a < b;
}
DataPointer_Impl_.lessThanPointer = function(a,b) {
	return (lime_system__$CFFIPointer_CFFIPointer_$Impl_$().default).get(a) < (lime_system__$CFFIPointer_CFFIPointer_$Impl_$().default).get(b);
}
DataPointer_Impl_.lessThanOrEqual = function(a,b) {
	return a <= b;
}
DataPointer_Impl_.lessThanOrEqualPointer = function(a,b) {
	return (lime_system__$CFFIPointer_CFFIPointer_$Impl_$().default).get(a) <= (lime_system__$CFFIPointer_CFFIPointer_$Impl_$().default).get(b);
}
DataPointer_Impl_.notEquals = function(a,b) {
	return a != b;
}
DataPointer_Impl_.notEqualsPointer = function(a,b) {
	return a != b;
}
DataPointer_Impl_.plus = function(a,b) {
	return DataPointer_Impl_.__withOffset(a,b);
}
DataPointer_Impl_.plusPointer = function(a,b) {
	return DataPointer_Impl_.__withOffset(a,(Std().default).int(b));
}
DataPointer_Impl_.minus = function(a,b) {
	return DataPointer_Impl_.__withOffset(a,-b);
}
DataPointer_Impl_.minusPointer = function(a,b) {
	return DataPointer_Impl_.__withOffset(a,-(Std().default).int(b));
}


// Export

exports.default = DataPointer_Impl_;