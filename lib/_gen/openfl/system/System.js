// Class: openfl.system.System

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;
var $import = require("./../../import_stub").default;
function lime_system_System() {return require("./../../lime/system/System");}
function openfl__$internal_Lib() {return require("./../../openfl/_internal/Lib");}
function lime_system_Clipboard() {return require("./../../lime/system/Clipboard");}

// Constructor

var System = function(){}

// Meta

System.__name__ = "openfl.system.System";
System.__isInterface__ = false;
System.prototype = {
	
};
System.prototype.__class__ = System.prototype.constructor = $hxClasses["openfl.system.System"] = System;

// Init

Object.defineProperties(System,{ totalMemory : { get : function() {
	return System.get_totalMemory();
}}, vmVersion : { get : function() {
	return System.get_vmVersion();
}}});

// Statics

System.disposeXML = function(node) {
}
System.exit = function(code) {
	(lime_system_System().default).exit(code);
}
System.gc = function() {
}
System.pause = function() {
	(openfl__$internal_Lib().default).notImplemented({ fileName : "../src/openfl/system/System.hx", lineNumber : 213, className : "openfl.system.System", methodName : "pause"});
}
System.resume = function() {
	(openfl__$internal_Lib().default).notImplemented({ fileName : "../src/openfl/system/System.hx", lineNumber : 229, className : "openfl.system.System", methodName : "resume"});
}
System.setClipboard = function(string) {
	(lime_system_Clipboard().default).set_text(string);
}
System.get_totalMemory = function() {
	return (window.performance && window.performance.memory) ? window.performance.memory.usedJSHeapSize : 0;
}
System.get_vmVersion = function() {
	return "1.0.0";
}
System.useCodePage = false

// Export

exports.default = System;