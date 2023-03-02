// Class: js.Browser

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../hxClasses_stub").default;
var $hxEnums = require("./../hxEnums_stub").default;
var $import = require("./../import_stub").default;
function haxe_CallStack() {return require("./../haxe/CallStack");}
function js__$Boot_HaxeError() {return require("./../js/_Boot/HaxeError");}
function Std() {return require("./../Std");}

// Constructor

var Browser = function(){}

// Meta

Browser.__name__ = "js.Browser";
Browser.__isInterface__ = false;
Browser.prototype = {
	
};
Browser.prototype.__class__ = Browser.prototype.constructor = $hxClasses["js.Browser"] = Browser;

// Init



// Statics

Browser.getLocalStorage = function() {
	try {
		var s = window.localStorage;
		s.getItem("");
		if(s.length == 0) {
			var key = "_hx_" + Math.random();
			s.setItem(key,key);
			s.removeItem(key);
		}
		return s;
	} catch( e ) {
		(haxe_CallStack().default).lastException = e;
		var e1 = ((e) instanceof (js__$Boot_HaxeError().default)) ? e.val : e;
		return null;
	}
}
Browser.alert = function(v) {
	window.alert((Std().default).string(v));
}


// Export

exports.default = Browser;