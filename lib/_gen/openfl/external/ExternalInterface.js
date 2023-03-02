// Class: openfl.external.ExternalInterface

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;
var $import = require("./../../import_stub").default;
function openfl__$internal_Lib() {return require("./../../openfl/_internal/Lib");}
function EReg() {return require("./../../EReg");}
function js_Lib() {return require("./../../js/Lib");}
function haxe_CallStack() {return require("./../../haxe/CallStack");}
function js__$Boot_HaxeError() {return require("./../../js/_Boot/HaxeError");}
function Type() {return require("./../../Type");}
function ValueType() {return require("./../../ValueType");}

// Constructor

var ExternalInterface = function(){}

// Meta

ExternalInterface.__name__ = "openfl.external.ExternalInterface";
ExternalInterface.__isInterface__ = false;
ExternalInterface.prototype = {
	
};
ExternalInterface.prototype.__class__ = ExternalInterface.prototype.constructor = $hxClasses["openfl.external.ExternalInterface"] = ExternalInterface;

// Init



// Statics

ExternalInterface.addCallback = function(functionName,closure) {
	if((openfl__$internal_Lib().default).application.get_window().element != null) {
		(openfl__$internal_Lib().default).application.get_window().element[functionName] = closure;
	}
}
ExternalInterface.call = function(functionName,p1,p2,p3,p4,p5) {
	var callResponse = null;
	if(!new (EReg().default)("^\\(.+\\)$","").match(functionName)) {
		var thisArg = functionName.split(".").slice(0,-1).join(".");
		if(thisArg.length > 0) {
			functionName += ".bind(" + thisArg + ")";
		}
	}
	var fn;
	try {
		fn = (js_Lib().default).eval(functionName);
	} catch( e ) {
		(haxe_CallStack().default).lastException = e;
		var e1 = ((e) instanceof (js__$Boot_HaxeError().default)) ? e.val : e;
		return null;
	}
	if((Type().default).typeof(fn) != (ValueType().default).TFunction) {
		return null;
	}
	if(p1 == null) {
		callResponse = fn();
	} else if(p2 == null) {
		callResponse = fn(p1);
	} else if(p3 == null) {
		callResponse = fn(p1,p2);
	} else if(p4 == null) {
		callResponse = fn(p1,p2,p3);
	} else if(p5 == null) {
		callResponse = fn(p1,p2,p3,p4);
	} else {
		callResponse = fn(p1,p2,p3,p4,p5);
	}
	return callResponse;
}
ExternalInterface.get_objectID = function() {
	if((openfl__$internal_Lib().default).application.get_window().element != null) {
		return (openfl__$internal_Lib().default).application.get_window().element.id;
	}
	return null;
}
ExternalInterface.available = true
ExternalInterface.marshallExceptions = false

// Export

exports.default = ExternalInterface;