// Class: lime.utils.Log

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;
var $import = require("./../../import_stub").default;
function Std() {return require("./../../Std");}
function js__$Boot_HaxeError() {return require("./../../js/_Boot/HaxeError");}

// Constructor

var Log = function(){}

// Meta

Log.__name__ = "lime.utils.Log";
Log.__isInterface__ = false;
Log.prototype = {
	
};
Log.prototype.__class__ = Log.prototype.constructor = $hxClasses["lime.utils.Log"] = Log;

// Init

{
	Log.level = 3;
	if(typeof console == "undefined") {
		console = {}
	}
	if(console.log == null) {
		console.log = function() {
		};
	}
};

// Statics

Log.debug = function(message,info) {
	if(Log.level >= 4) {
		console.debug("[" + info.className + "] " + (Std().default).string(message));
	}
}
Log.error = function(message,info) {
	if(Log.level >= 1) {
		var message1 = "[" + info.className + "] ERROR: " + (Std().default).string(message);
		if(Log.throwErrors) {
			throw new (js__$Boot_HaxeError().default)(message1);
		} else {
			console.error(message1);
		}
	}
}
Log.info = function(message,info) {
	if(Log.level >= 3) {
		console.info("[" + info.className + "] " + (Std().default).string(message));
	}
}
Log.print = function(message) {
	console.log(message);
}
Log.println = function(message) {
	console.log(message);
}
Log.verbose = function(message,info) {
	if(Log.level >= 5) {
		Log.println("[" + info.className + "] " + (Std().default).string(message));
	}
}
Log.warn = function(message,info) {
	if(Log.level >= 2) {
		console.warn("[" + info.className + "] WARNING: " + (Std().default).string(message));
	}
}
Log.throwErrors = true

// Export

exports.default = Log;