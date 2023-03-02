// Class: lime.utils._UInt32Array.UInt32Array_Impl_

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../hxClasses_stub").default;
var $hxEnums = require("./../../../hxEnums_stub").default;
var $import = require("./../../../import_stub").default;
function haxe_io_Bytes() {return require("./../../../haxe/io/Bytes");}

// Constructor

var UInt32Array_Impl_ = function(){}

// Meta

UInt32Array_Impl_.__name__ = "lime.utils._UInt32Array.UInt32Array_Impl_";
UInt32Array_Impl_.__isInterface__ = false;
UInt32Array_Impl_.prototype = {
	
};
UInt32Array_Impl_.prototype.__class__ = UInt32Array_Impl_.prototype.constructor = $hxClasses["lime.utils._UInt32Array.UInt32Array_Impl_"] = UInt32Array_Impl_;

// Init



// Statics

UInt32Array_Impl_.fromBytes = function(bytes,byteOffset,len) {
	if(byteOffset == null) {
		byteOffset = 0;
	}
	if(byteOffset == null) {
		return new Uint32Array(bytes.getData());
	}
	if(len == null) {
		return new Uint32Array(bytes.getData(),byteOffset);
	}
	return new Uint32Array(bytes.getData(),byteOffset,len);
}
UInt32Array_Impl_.toBytes = function(this1) {
	return new (haxe_io_Bytes().default)(new Uint8Array(this1.buffer));
}
UInt32Array_Impl_.toString = function(this1) {
	if(this1 != null) {
		return "UInt32Array [byteLength:" + this1.byteLength + ", length:" + this1.length + "]";
	} else {
		return null;
	}
}
UInt32Array_Impl_.BYTES_PER_ELEMENT = 4

// Export

exports.default = UInt32Array_Impl_;