// Class: lime.media.openal.ALC

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../hxClasses_stub").default;
var $hxEnums = require("./../../../hxEnums_stub").default;
var $import = require("./../../../import_stub").default;

// Constructor

var ALC = function(){}

// Meta

ALC.__name__ = "lime.media.openal.ALC";
ALC.__isInterface__ = false;
ALC.prototype = {
	
};
ALC.prototype.__class__ = ALC.prototype.constructor = $hxClasses["lime.media.openal.ALC"] = ALC;

// Init



// Statics

ALC.closeDevice = function(device) {
	return false;
}
ALC.createContext = function(device,attrlist) {
	return null;
}
ALC.destroyContext = function(context) {
}
ALC.getContextsDevice = function(context) {
	return null;
}
ALC.getCurrentContext = function() {
	return null;
}
ALC.getError = function(device) {
	return 0;
}
ALC.getErrorString = function(device) {
	switch(ALC.getError(device)) {
	case 40961:
		return "INVALID_DEVICE: Invalid device (or no device?)";
	case 40962:
		return "INVALID_CONTEXT: Invalid context (or no context?)";
	case 40963:
		return "INVALID_ENUM: Invalid enum value";
	case 40964:
		return "INVALID_VALUE: Invalid param value";
	case 40965:
		return "OUT_OF_MEMORY: OpenAL has run out of memory";
	default:
		return "";
	}
}
ALC.getIntegerv = function(device,param,size) {
	return null;
}
ALC.getString = function(device,param) {
	return null;
}
ALC.makeContextCurrent = function(context) {
	return false;
}
ALC.openDevice = function(deviceName) {
	return null;
}
ALC.pauseDevice = function(device) {
}
ALC.processContext = function(context) {
}
ALC.resumeDevice = function(device) {
}
ALC.suspendContext = function(context) {
}
ALC.FALSE = 0
ALC.TRUE = 1
ALC.FREQUENCY = 4103
ALC.REFRESH = 4104
ALC.SYNC = 4105
ALC.MONO_SOURCES = 4112
ALC.STEREO_SOURCES = 4113
ALC.NO_ERROR = 0
ALC.INVALID_DEVICE = 40961
ALC.INVALID_CONTEXT = 40962
ALC.INVALID_ENUM = 40963
ALC.INVALID_VALUE = 40964
ALC.OUT_OF_MEMORY = 40965
ALC.ATTRIBUTES_SIZE = 4098
ALC.ALL_ATTRIBUTES = 4099
ALC.DEFAULT_DEVICE_SPECIFIER = 4100
ALC.DEVICE_SPECIFIER = 4101
ALC.EXTENSIONS = 4102
ALC.ENUMERATE_ALL_EXT = 1
ALC.DEFAULT_ALL_DEVICES_SPECIFIER = 4114
ALC.ALL_DEVICES_SPECIFIER = 4115

// Export

exports.default = ALC;