// Class: haxe._Unserializer.NullResolver

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;
var $import = require("./../../import_stub").default;

// Constructor

var NullResolver = function() {
}

// Meta

NullResolver.__name__ = "haxe._Unserializer.NullResolver";
NullResolver.__isInterface__ = false;
NullResolver.prototype = {
	resolveClass: function(name) {
		return null;
	},
	resolveEnum: function(name) {
		return null;
	}
};
NullResolver.prototype.__class__ = NullResolver.prototype.constructor = $hxClasses["haxe._Unserializer.NullResolver"] = NullResolver;

// Init



// Statics

NullResolver.get_instance = function() {
	if(NullResolver.instance == null) {
		NullResolver.instance = new NullResolver();
	}
	return NullResolver.instance;
}


// Export

exports.default = NullResolver;