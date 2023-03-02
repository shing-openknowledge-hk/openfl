// Class: haxe.Log

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../hxClasses_stub").default;
var $hxEnums = require("./../hxEnums_stub").default;
var $import = require("./../import_stub").default;
function Std() {return require("./../Std");}

// Constructor

var Log = function(){}

// Meta

Log.__name__ = "haxe.Log";
Log.__isInterface__ = false;
Log.prototype = {
	
};
Log.prototype.__class__ = Log.prototype.constructor = $hxClasses["haxe.Log"] = Log;

// Init



// Statics

Log.formatOutput = function(v,infos) {
	var str = (Std().default).string(v);
	if(infos == null) {
		return str;
	}
	var pstr = infos.fileName + ":" + infos.lineNumber;
	if(infos.customParams != null) {
		var _g = 0;
		var _g1 = infos.customParams;
		while(_g < _g1.length) {
			var v1 = _g1[_g];
			++_g;
			str += ", " + (Std().default).string(v1);
		}
	}
	return pstr + ": " + str;
}
Log.trace = function(v,infos) {
	var str = Log.formatOutput(v,infos);
	if(typeof(console) != "undefined" && console.log != null) {
		console.log(str);
	}
}


// Export

exports.default = Log;