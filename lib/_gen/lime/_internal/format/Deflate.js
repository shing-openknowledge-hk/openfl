// Class: lime._internal.format.Deflate

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../hxClasses_stub").default;
var $hxEnums = require("./../../../hxEnums_stub").default;
var $import = require("./../../../import_stub").default;
function haxe_io_Bytes() {return require("./../../../haxe/io/Bytes");}

// Constructor

var Deflate = function(){}

// Meta

Deflate.__name__ = "lime._internal.format.Deflate";
Deflate.__isInterface__ = false;
Deflate.prototype = {
	
};
Deflate.prototype.__class__ = Deflate.prototype.constructor = $hxClasses["lime._internal.format.Deflate"] = Deflate;

// Init



// Statics

Deflate.compress = function(bytes) {
	var data = require ("pako").deflateRaw(bytes.getData());
	return (haxe_io_Bytes().default).ofData(data);
}
Deflate.decompress = function(bytes) {
	var data = require ("pako").inflateRaw(bytes.getData());
	return (haxe_io_Bytes().default).ofData(data);
}


// Export

exports.default = Deflate;