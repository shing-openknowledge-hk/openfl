// Class: lime._internal.format.GZip

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../hxClasses_stub").default;
var $hxEnums = require("./../../../hxEnums_stub").default;
var $import = require("./../../../import_stub").default;
function haxe_io_Bytes() {return require("./../../../haxe/io/Bytes");}

// Constructor

var GZip = function(){}

// Meta

GZip.__name__ = "lime._internal.format.GZip";
GZip.__isInterface__ = false;
GZip.prototype = {
	
};
GZip.prototype.__class__ = GZip.prototype.constructor = $hxClasses["lime._internal.format.GZip"] = GZip;

// Init



// Statics

GZip.compress = function(bytes) {
	var data = require ("pako").gzip(bytes.getData());
	return (haxe_io_Bytes().default).ofData(data);
}
GZip.decompress = function(bytes) {
	var data = require ("pako").ungzip(bytes.getData());
	return (haxe_io_Bytes().default).ofData(data);
}


// Export

exports.default = GZip;