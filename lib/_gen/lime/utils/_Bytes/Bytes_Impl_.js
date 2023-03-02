// Class: lime.utils._Bytes.Bytes_Impl_

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../hxClasses_stub").default;
var $hxEnums = require("./../../../hxEnums_stub").default;
var $import = require("./../../../import_stub").default;
function haxe_io_Bytes() {return require("./../../../haxe/io/Bytes");}
function lime__$internal_format_Deflate() {return require("./../../../lime/_internal/format/Deflate");}
function lime__$internal_format_GZip() {return require("./../../../lime/_internal/format/GZip");}
function lime__$internal_format_LZMA() {return require("./../../../lime/_internal/format/LZMA");}
function lime__$internal_format_Zlib() {return require("./../../../lime/_internal/format/Zlib");}
function lime_app_Future() {return require("./../../../lime/app/Future");}
function lime_net__$HTTPRequest_$lime_$utils_$Bytes() {return require("./../../../lime/net/_HTTPRequest_lime_utils_Bytes");}

// Constructor

var Bytes_Impl_ = function(){}

// Meta

Bytes_Impl_.__name__ = "lime.utils._Bytes.Bytes_Impl_";
Bytes_Impl_.__isInterface__ = false;
Bytes_Impl_.prototype = {
	
};
Bytes_Impl_.prototype.__class__ = Bytes_Impl_.prototype.constructor = $hxClasses["lime.utils._Bytes.Bytes_Impl_"] = Bytes_Impl_;

// Init



// Statics

Bytes_Impl_._new = function(length,bytesData) {
	var this1 = new (haxe_io_Bytes().default)(bytesData);
	return this1;
}
Bytes_Impl_.alloc = function(length) {
	return (haxe_io_Bytes().default).alloc(length);
}
Bytes_Impl_.compress = function(this1,algorithm) {
	switch(algorithm._hx_index) {
	case 0:
		return (lime__$internal_format_Deflate().default).compress(this1);
	case 1:
		return (lime__$internal_format_GZip().default).compress(this1);
	case 2:
		return (lime__$internal_format_LZMA().default).compress(this1);
	case 3:
		return (lime__$internal_format_Zlib().default).compress(this1);
	}
}
Bytes_Impl_.decompress = function(this1,algorithm) {
	switch(algorithm._hx_index) {
	case 0:
		return (lime__$internal_format_Deflate().default).decompress(this1);
	case 1:
		return (lime__$internal_format_GZip().default).decompress(this1);
	case 2:
		return (lime__$internal_format_LZMA().default).decompress(this1);
	case 3:
		return (lime__$internal_format_Zlib().default).decompress(this1);
	}
}
Bytes_Impl_.fastGet = function(b,pos) {
	return (haxe_io_Bytes().default).fastGet(b,pos);
}
Bytes_Impl_.fromBytes = function(bytes) {
	if(bytes == null) {
		return null;
	}
	return Bytes_Impl_._new(bytes.get_length(),bytes.getData());
}
Bytes_Impl_.fromFile = function(path) {
	return null;
}
Bytes_Impl_.loadFromBytes = function(bytes) {
	return (lime_app_Future().default).withValue(Bytes_Impl_.fromBytes(bytes));
}
Bytes_Impl_.loadFromFile = function(path) {
	var request = new (lime_net__$HTTPRequest_$lime_$utils_$Bytes().default)();
	return request.load(path);
}
Bytes_Impl_.ofData = function(b) {
	var bytes = (haxe_io_Bytes().default).ofData(b);
	return Bytes_Impl_._new(bytes.get_length(),bytes.getData());
}
Bytes_Impl_.ofString = function(s) {
	var bytes = (haxe_io_Bytes().default).ofString(s);
	return Bytes_Impl_._new(bytes.get_length(),bytes.getData());
}


// Export

exports.default = Bytes_Impl_;