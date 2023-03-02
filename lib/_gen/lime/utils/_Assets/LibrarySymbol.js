// Class: lime.utils._Assets.LibrarySymbol

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../hxClasses_stub").default;
var $hxEnums = require("./../../../hxEnums_stub").default;
var $import = require("./../../../import_stub").default;
function lime_utils_Assets() {return require("./../../../lime/utils/Assets");}

// Constructor

var LibrarySymbol = function(id) {
	var colonIndex = id.indexOf(":");
	this.libraryName = id.substring(0,colonIndex);
	this.symbolName = id.substring(colonIndex + 1);
	this.library = (lime_utils_Assets().default).getLibrary(this.libraryName);
}

// Meta

LibrarySymbol.__name__ = "lime.utils._Assets.LibrarySymbol";
LibrarySymbol.__isInterface__ = false;
LibrarySymbol.prototype = {
	isLocal: function(type) {
		return this.library.isLocal(this.symbolName,type);
	},
	exists: function(type) {
		return this.library.exists(this.symbolName,type);
	}
};
LibrarySymbol.prototype.__class__ = LibrarySymbol.prototype.constructor = $hxClasses["lime.utils._Assets.LibrarySymbol"] = LibrarySymbol;

// Init



// Statics




// Export

exports.default = LibrarySymbol;