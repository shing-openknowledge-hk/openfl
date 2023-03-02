// Class: Std

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./hxClasses_stub").default;
var $hxEnums = require("./hxEnums_stub").default;
var $import = require("./import_stub").default;
function js_Boot() {return require("./js/Boot");}
function StringTools() {return require("./StringTools");}

// Constructor

var Std = function(){}

// Meta

Std.__name__ = "Std";
Std.__isInterface__ = false;
Std.prototype = {
	
};
Std.prototype.__class__ = Std.prototype.constructor = $hxClasses["Std"] = Std;

// Init

{
	String.prototype.__class__ = $hxClasses["String"] = String
	String.__name__ = "String";
	$hxClasses["Array"] = Array
	Array.__name__ = "Array";
	Date.prototype.__class__ = $hxClasses["Date"] = Date;
	Date.__name__ = "Date";
	var Int = $hxClasses["Int"] = { };
	var Dynamic = $hxClasses["Dynamic"] = { };
	var Float = $hxClasses["Float"] = Number;
	var Bool = $hxClasses["Bool"] = Boolean;
	var Class = $hxClasses["Class"] = { };
	var Enum = $hxClasses["Enum"] = { };
};

// Statics

Std.is = function(v,t) {
	return (js_Boot().default).__instanceof(v,t);
}
Std.string = function(s) {
	return (js_Boot().default).__string_rec(s,"");
}
Std.int = function(x) {
	return x | 0;
}
Std.parseInt = function(x) {
	if(x != null) {
		var _g = 0;
		var _g1 = x.length;
		while(_g < _g1) {
			var i = _g++;
			var c = (StringTools().default).fastCodeAt(x,i);
			if(c <= 8 || c >= 14 && c != 32 && c != 45) {
				var v = parseInt(x, (x[(i + 1)]=="x" || x[(i + 1)]=="X") ? 16 : 10);
				if(isNaN(v)) {
					return null;
				} else {
					return v;
				}
			}
		}
	}
	return null;
}
Std.parseFloat = function(x) {
	return parseFloat(x);
}


// Export

exports.default = Std;