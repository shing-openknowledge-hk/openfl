// Class: format.tools.Deflate

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;
var $import = require("./../../import_stub").default;
function haxe_zip_Compress() {return require("./../../haxe/zip/Compress");}

// Constructor

var Deflate = function(){}

// Meta

Deflate.__name__ = "format.tools.Deflate";
Deflate.__isInterface__ = false;
Deflate.prototype = {
	
};
Deflate.prototype.__class__ = Deflate.prototype.constructor = $hxClasses["format.tools.Deflate"] = Deflate;

// Init



// Statics

Deflate.run = function(b,level) {
	if(level == null) {
		level = 9;
	}
	return (haxe_zip_Compress().default).run(b,level);
}


// Export

exports.default = Deflate;