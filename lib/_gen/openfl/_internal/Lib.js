// Class: openfl._internal.Lib

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;
var $import = require("./../../import_stub").default;
function haxe_ds_StringMap() {return require("./../../haxe/ds/StringMap");}
function lime_utils_Log() {return require("./../../lime/utils/Log");}

// Constructor

var Lib = function(){}

// Meta

Lib.__name__ = "openfl._internal.Lib";
Lib.__isInterface__ = false;
Lib.prototype = {
	
};
Lib.prototype.__class__ = Lib.prototype.constructor = $hxClasses["openfl._internal.Lib"] = Lib;

// Init



// Statics

Lib.notImplemented = function(posInfo) {
	var api = posInfo.className + "." + posInfo.methodName;
	if(!Lib.__sentWarnings.exists(api)) {
		Lib.__sentWarnings.set(api,true);
		(lime_utils_Log().default).warn(posInfo.methodName + " is not implemented",posInfo);
	}
}
Lib.__meta__ = { obj : { SuppressWarnings : ["checkstyle:FieldDocComment"]}, statics : { notImplemented : { SuppressWarnings : ["checkstyle:NullableParameter"]}}}
Lib.__sentWarnings = new (haxe_ds_StringMap().default)()

// Export

exports.default = Lib;