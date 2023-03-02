// Class: lime._internal.format.Zlib

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../hxClasses_stub").default;
var $hxEnums = require("./../../../hxEnums_stub").default;
var $import = require("./../../../import_stub").default;
function haxe_io_Bytes() {return require("./../../../haxe/io/Bytes");}

// Constructor

var Zlib = function(){}

// Meta

Zlib.__name__ = "lime._internal.format.Zlib";
Zlib.__isInterface__ = false;
Zlib.prototype = {
	
};
Zlib.prototype.__class__ = Zlib.prototype.constructor = $hxClasses["lime._internal.format.Zlib"] = Zlib;

// Init



// Statics

Zlib.compress = function(bytes) {
	var data = require ("pako").deflate(bytes.getData());
	return (haxe_io_Bytes().default).ofData(data);
}
Zlib.decompress = function(bytes) {
	var data = require ("pako").inflate(bytes.getData());
	return (haxe_io_Bytes().default).ofData(data);
}


// Export

exports.default = Zlib;