// Class: js.Lib

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../hxClasses_stub").default;
var $hxEnums = require("./../hxEnums_stub").default;

// Constructor

var Lib = function(){}

// Meta

Lib.__name__ = "js.Lib";
Lib.__isInterface__ = false;
Lib.prototype = {
	
};
Lib.prototype.__class__ = Lib.prototype.constructor = $hxClasses["js.Lib"] = Lib;

// Init



// Statics

Lib.eval = function(code) {
	return eval(code);
}
Lib.get_undefined = function() {
	return undefined;
}
Lib.getNextHaxeUID = function() {
	return $global.$haxeUID++;
}


// Export

exports.default = Lib;