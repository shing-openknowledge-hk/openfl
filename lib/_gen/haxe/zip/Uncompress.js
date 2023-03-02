// Class: haxe.zip.Uncompress

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;
var $import = require("./../../import_stub").default;
function haxe_zip_InflateImpl() {return require("./../../haxe/zip/InflateImpl");}
function haxe_io_BytesInput() {return require("./../../haxe/io/BytesInput");}
function js__$Boot_HaxeError() {return require("./../../js/_Boot/HaxeError");}

// Constructor

var Uncompress = function(windowBits) {
	throw new (js__$Boot_HaxeError().default)("Not implemented for this platform");
}

// Meta

Uncompress.__name__ = "haxe.zip.Uncompress";
Uncompress.__isInterface__ = false;
Uncompress.prototype = {
	execute: function(src,srcPos,dst,dstPos) {
		return null;
	},
	setFlushMode: function(f) {
	},
	close: function() {
	}
};
Uncompress.prototype.__class__ = Uncompress.prototype.constructor = $hxClasses["haxe.zip.Uncompress"] = Uncompress;

// Init



// Statics

Uncompress.run = function(src,bufsize) {
	return (haxe_zip_InflateImpl().default).run(new (haxe_io_BytesInput().default)(src),bufsize);
}


// Export

exports.default = Uncompress;