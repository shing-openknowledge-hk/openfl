// Class: format.amf3.Amf3Array

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;

// Constructor

var Amf3Array = function(initA,initExtra) {
	this.a = initA;
	this.extra = initExtra;
}

// Meta

Amf3Array.__name__ = "format.amf3.Amf3Array";
Amf3Array.__isInterface__ = false;
Amf3Array.prototype = {
	
};
Amf3Array.prototype.__class__ = Amf3Array.prototype.constructor = $hxClasses["format.amf3.Amf3Array"] = Amf3Array;

// Init



// Statics


Amf3Array.__meta__ = { fields : { extra : { optional : null}}}

// Export

exports.default = Amf3Array;