// Class: format.tools.Inflate

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;
var $import = require("./../../import_stub").default;
function haxe_zip_Uncompress() {return require("./../../haxe/zip/Uncompress");}

// Constructor

var Inflate = function(){}

// Meta

Inflate.__name__ = "format.tools.Inflate";
Inflate.__isInterface__ = false;
Inflate.prototype = {
	
};
Inflate.prototype.__class__ = Inflate.prototype.constructor = $hxClasses["format.tools.Inflate"] = Inflate;

// Init



// Statics

Inflate.run = function(bytes) {
	return (haxe_zip_Uncompress().default).run(bytes);
}


// Export

exports.default = Inflate;