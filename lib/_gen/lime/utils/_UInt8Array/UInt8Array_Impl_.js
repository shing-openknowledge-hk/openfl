// Class: lime.utils._UInt8Array.UInt8Array_Impl_

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../hxClasses_stub").default;
var $hxEnums = require("./../../../hxEnums_stub").default;
var $import = require("./../../../import_stub").default;
function haxe_io_Bytes() {return require("./../../../haxe/io/Bytes");}

// Constructor

var UInt8Array_Impl_ = function(){}

// Meta

UInt8Array_Impl_.__name__ = "lime.utils._UInt8Array.UInt8Array_Impl_";
UInt8Array_Impl_.__isInterface__ = false;
UInt8Array_Impl_.prototype = {
	
};
UInt8Array_Impl_.prototype.__class__ = UInt8Array_Impl_.prototype.constructor = $hxClasses["lime.utils._UInt8Array.UInt8Array_Impl_"] = UInt8Array_Impl_;

// Init



// Statics

UInt8Array_Impl_.fromBytes = function(bytes,byteOffset,len) {
	if(byteOffset == null) {
		return new Uint8Array(bytes.getData());
	}
	if(len == null) {
		return new Uint8Array(bytes.getData(),byteOffset);
	}
	return new Uint8Array(bytes.getData(),byteOffset,len);
}
UInt8Array_Impl_.toBytes = function(this1) {
	return new (haxe_io_Bytes().default)(new Uint8Array(this1.buffer));
}
UInt8Array_Impl_.toString = function(this1) {
	if(this1 != null) {
		return "UInt8Array [byteLength:" + this1.byteLength + ", length:" + this1.length + "]";
	} else {
		return null;
	}
}
UInt8Array_Impl_.BYTES_PER_ELEMENT = 1

// Export

exports.default = UInt8Array_Impl_;