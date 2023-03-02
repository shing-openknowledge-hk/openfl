// Class: openfl.profiler.Telemetry

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;
var $import = require("./../../import_stub").default;

// Constructor

var Telemetry = function(){}

// Meta

Telemetry.__name__ = "openfl.profiler.Telemetry";
Telemetry.__isInterface__ = false;
Telemetry.prototype = {
	
};
Telemetry.prototype.__class__ = Telemetry.prototype.constructor = $hxClasses["openfl.profiler.Telemetry"] = Telemetry;

// Init

Object.defineProperty(Telemetry,"connected",{ get : function() {
	return Telemetry.get_connected();
}});

// Statics

Telemetry.registerCommandHandler = function(commandName,handler) {
	return false;
}
Telemetry.sendMetric = function(metric,value) {
}
Telemetry.sendSpanMetric = function(metric,startSpanMarker,value) {
}
Telemetry.unregisterCommandHandler = function(commandName) {
	return false;
}
Telemetry.__advanceFrame = function() {
}
Telemetry.__endTiming = function(name) {
}
Telemetry.__initialize = function() {
}
Telemetry.__rewindStack = function(stack) {
}
Telemetry.__startTiming = function(name) {
}
Telemetry.__unwindStack = function() {
	return "";
}
Telemetry.get_connected = function() {
	return false;
}
Telemetry.spanMarker = 0.0

// Export

exports.default = Telemetry;