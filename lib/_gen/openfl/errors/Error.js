// Class: openfl.errors.Error

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;
var $import = require("./../../import_stub").default;
function haxe_CallStack() {return require("./../../haxe/CallStack");}

// Constructor

var Error = function(message,id) {
	if(id == null) {
		id = 0;
	}
	if(message == null) {
		message = "";
	}
	this.message = message;
	this.errorID = id;
	this.name = "Error";
}

// Meta

Error.__name__ = "openfl.errors.Error";
Error.__isInterface__ = false;
Error.prototype = {
	getStackTrace: function() {
		return (haxe_CallStack().default).toString((haxe_CallStack().default).exceptionStack());
	},
	toString: function() {
		if(this.message != null) {
			return this.message;
		} else {
			return "Error";
		}
	}
};
Error.prototype.__class__ = Error.prototype.constructor = $hxClasses["openfl.errors.Error"] = Error;

// Init



// Statics


Error.DEFAULT_TO_STRING = "Error"

// Export

exports.default = Error;