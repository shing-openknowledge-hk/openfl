// Class: openfl.media.SoundLoaderContext

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;

// Constructor

var SoundLoaderContext = function(bufferTime,checkPolicyFile) {
	if(checkPolicyFile == null) {
		checkPolicyFile = false;
	}
	if(bufferTime == null) {
		bufferTime = 1000;
	}
	this.bufferTime = bufferTime;
	this.checkPolicyFile = checkPolicyFile;
}

// Meta

SoundLoaderContext.__name__ = "openfl.media.SoundLoaderContext";
SoundLoaderContext.__isInterface__ = false;
SoundLoaderContext.prototype = {
	
};
SoundLoaderContext.prototype.__class__ = SoundLoaderContext.prototype.constructor = $hxClasses["openfl.media.SoundLoaderContext"] = SoundLoaderContext;

// Init



// Statics




// Export

exports.default = SoundLoaderContext;