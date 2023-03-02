// Class: openfl.utils._Endian.Endian_Impl_

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../hxClasses_stub").default;
var $hxEnums = require("./../../../hxEnums_stub").default;
var $import = require("./../../../import_stub").default;
function lime_system_Endian() {return require("./../../../lime/system/Endian");}

// Constructor

var Endian_Impl_ = function(){}

// Meta

Endian_Impl_.__name__ = "openfl.utils._Endian.Endian_Impl_";
Endian_Impl_.__isInterface__ = false;
Endian_Impl_.prototype = {
	
};
Endian_Impl_.prototype.__class__ = Endian_Impl_.prototype.constructor = $hxClasses["openfl.utils._Endian.Endian_Impl_"] = Endian_Impl_;

// Init



// Statics

Endian_Impl_.fromLimeEndian = function(value) {
	switch(value._hx_index) {
	case 0:
		return "littleEndian";
	case 1:
		return "bigEndian";
	}
}
Endian_Impl_.toLimeEndian = function(this1) {
	switch(this1) {
	case "bigEndian":
		return (lime_system_Endian().default).BIG_ENDIAN;
	case "littleEndian":
		return (lime_system_Endian().default).LITTLE_ENDIAN;
	default:
		return null;
	}
}
Endian_Impl_.BIG_ENDIAN = "bigEndian"
Endian_Impl_.LITTLE_ENDIAN = "littleEndian"

// Export

exports.default = Endian_Impl_;