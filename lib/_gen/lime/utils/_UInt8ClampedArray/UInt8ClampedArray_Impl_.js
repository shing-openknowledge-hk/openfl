// Class: lime.utils._UInt8ClampedArray.UInt8ClampedArray_Impl_

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../hxClasses_stub").default;
var $hxEnums = require("./../../../hxEnums_stub").default;
var $import = require("./../../../import_stub").default;
function haxe_io_Bytes() {return require("./../../../haxe/io/Bytes");}
function Std() {return require("./../../../Std");}

// Constructor

var UInt8ClampedArray_Impl_ = function(){}

// Meta

UInt8ClampedArray_Impl_.__name__ = "lime.utils._UInt8ClampedArray.UInt8ClampedArray_Impl_";
UInt8ClampedArray_Impl_.__isInterface__ = false;
UInt8ClampedArray_Impl_.prototype = {
	
};
UInt8ClampedArray_Impl_.prototype.__class__ = UInt8ClampedArray_Impl_.prototype.constructor = $hxClasses["lime.utils._UInt8ClampedArray.UInt8ClampedArray_Impl_"] = UInt8ClampedArray_Impl_;

// Init



// Statics

UInt8ClampedArray_Impl_.fromBytes = function(bytes,byteOffset,len) {
	if(byteOffset == null) {
		byteOffset = 0;
	}
	if(byteOffset == null) {
		return new Uint8ClampedArray(bytes.getData());
	}
	if(len == null) {
		return new Uint8ClampedArray(bytes.getData(),byteOffset);
	}
	return new Uint8ClampedArray(bytes.getData(),byteOffset,len);
}
UInt8ClampedArray_Impl_.toBytes = function(this1) {
	return new (haxe_io_Bytes().default)(new Uint8Array(this1.buffer));
}
UInt8ClampedArray_Impl_.toString = function(this1) {
	if(this1 != null) {
		return "UInt8ClampedArray [byteLength:" + this1.byteLength + ", length:" + this1.length + "]";
	} else {
		return null;
	}
}
UInt8ClampedArray_Impl_._clamp = function(_in) {
	var _out = (Std().default).int(_in);
	_out = _out > 255 ? 255 : _out;
	if(_out < 0) {
		return 0;
	} else {
		return _out;
	}
}
UInt8ClampedArray_Impl_.BYTES_PER_ELEMENT = 1

// Export

exports.default = UInt8ClampedArray_Impl_;