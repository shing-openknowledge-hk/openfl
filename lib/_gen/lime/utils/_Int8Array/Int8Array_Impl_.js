// Class: lime.utils._Int8Array.Int8Array_Impl_

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../hxClasses_stub").default;
var $hxEnums = require("./../../../hxEnums_stub").default;
var $import = require("./../../../import_stub").default;
function haxe_io_Bytes() {return require("./../../../haxe/io/Bytes");}

// Constructor

var Int8Array_Impl_ = function(){}

// Meta

Int8Array_Impl_.__name__ = "lime.utils._Int8Array.Int8Array_Impl_";
Int8Array_Impl_.__isInterface__ = false;
Int8Array_Impl_.prototype = {
	
};
Int8Array_Impl_.prototype.__class__ = Int8Array_Impl_.prototype.constructor = $hxClasses["lime.utils._Int8Array.Int8Array_Impl_"] = Int8Array_Impl_;

// Init



// Statics

Int8Array_Impl_.fromBytes = function(bytes,byteOffset,len) {
	if(byteOffset == null) {
		byteOffset = 0;
	}
	return new Int8Array(bytes.getData(),byteOffset,len);
}
Int8Array_Impl_.toBytes = function(this1) {
	return new (haxe_io_Bytes().default)(new Uint8Array(this1.buffer));
}
Int8Array_Impl_.toString = function(this1) {
	if(this1 != null) {
		return "Int8Array [byteLength:" + this1.byteLength + ", length:" + this1.length + "]";
	} else {
		return null;
	}
}
Int8Array_Impl_.BYTES_PER_ELEMENT = 1

// Export

exports.default = Int8Array_Impl_;