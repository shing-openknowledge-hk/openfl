// Class: _String.String_Impl_

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../hxClasses_stub").default;
var $hxEnums = require("./../hxEnums_stub").default;

// Constructor

var String_Impl_ = function(){}

// Meta

String_Impl_.__name__ = "_String.String_Impl_";
String_Impl_.__isInterface__ = false;
String_Impl_.prototype = {
	
};
String_Impl_.prototype.__class__ = String_Impl_.prototype.constructor = $hxClasses["_String.String_Impl_"] = String_Impl_;

// Init



// Statics

String_Impl_.fromCharCode = function(code) {
	return String.fromCodePoint(code);
}


// Export

exports.default = String_Impl_;