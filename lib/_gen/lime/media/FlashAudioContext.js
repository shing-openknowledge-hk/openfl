// Class: lime.media.FlashAudioContext

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;

// Constructor

var FlashAudioContext = function() {
}

// Meta

FlashAudioContext.__name__ = "lime.media.FlashAudioContext";
FlashAudioContext.__isInterface__ = false;
FlashAudioContext.prototype = {
	createBuffer: function(stream,context) {
		return null;
	},
	getBytesLoaded: function(buffer) {
		return 0;
	},
	getBytesTotal: function(buffer) {
		return 0;
	},
	getID3: function(buffer) {
		return null;
	},
	getIsBuffering: function(buffer) {
		return false;
	},
	getIsURLInaccessible: function(buffer) {
		return false;
	},
	getLength: function(buffer) {
		return 0;
	},
	getURL: function(buffer) {
		return null;
	},
	close: function(buffer) {
	},
	extract: function(buffer,target,length,startPosition) {
		if(startPosition == null) {
			startPosition = -1;
		}
		return 0;
	},
	load: function(buffer,stream,context) {
	},
	loadCompressedDataFromByteArray: function(buffer,bytes,bytesLength) {
	},
	loadPCMFromByteArray: function(buffer,bytes,samples,format,stereo,sampleRate) {
		if(sampleRate == null) {
			sampleRate = 44100;
		}
		if(stereo == null) {
			stereo = true;
		}
	},
	play: function(buffer,startTime,loops,sndTransform) {
		if(loops == null) {
			loops = 0;
		}
		if(startTime == null) {
			startTime = 0;
		}
		return null;
	}
};
FlashAudioContext.prototype.__class__ = FlashAudioContext.prototype.constructor = $hxClasses["lime.media.FlashAudioContext"] = FlashAudioContext;

// Init



// Statics




// Export

exports.default = FlashAudioContext;