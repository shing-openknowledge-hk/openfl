// Class: lime.media.AudioManager

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;
var $import = require("./../../import_stub").default;
function lime_media_AudioContext() {return require("./../../lime/media/AudioContext");}

// Constructor

var AudioManager = function(){}

// Meta

AudioManager.__name__ = "lime.media.AudioManager";
AudioManager.__isInterface__ = false;
AudioManager.prototype = {
	
};
AudioManager.prototype.__class__ = AudioManager.prototype.constructor = $hxClasses["lime.media.AudioManager"] = AudioManager;

// Init



// Statics

AudioManager.init = function(context) {
	if(AudioManager.context == null) {
		if(context == null) {
			AudioManager.context = new (lime_media_AudioContext().default)();
			context = AudioManager.context;
			if(context.type == "openal") {
				var alc = context.openal;
				var device = alc.openDevice();
				var ctx = alc.createContext(device);
				alc.makeContextCurrent(ctx);
				alc.processContext(ctx);
			}
		}
		AudioManager.context = context;
	}
}
AudioManager.resume = function() {
	if(AudioManager.context != null && AudioManager.context.type == "openal") {
		var alc = AudioManager.context.openal;
		var currentContext = alc.getCurrentContext();
		if(currentContext != null) {
			var device = alc.getContextsDevice(currentContext);
			alc.resumeDevice(device);
			alc.processContext(currentContext);
		}
	}
}
AudioManager.shutdown = function() {
	if(AudioManager.context != null && AudioManager.context.type == "openal") {
		var alc = AudioManager.context.openal;
		var currentContext = alc.getCurrentContext();
		if(currentContext != null) {
			var device = alc.getContextsDevice(currentContext);
			alc.makeContextCurrent(null);
			alc.destroyContext(currentContext);
			if(device != null) {
				alc.closeDevice(device);
			}
		}
	}
	AudioManager.context = null;
}
AudioManager.suspend = function() {
	if(AudioManager.context != null && AudioManager.context.type == "openal") {
		var alc = AudioManager.context.openal;
		var currentContext = alc.getCurrentContext();
		if(currentContext != null) {
			alc.suspendContext(currentContext);
			var device = alc.getContextsDevice(currentContext);
			if(device != null) {
				alc.pauseDevice(device);
			}
		}
	}
}


// Export

exports.default = AudioManager;