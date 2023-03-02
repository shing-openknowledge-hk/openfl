// Class: openfl.media.SoundMixer

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;
var $import = require("./../../import_stub").default;
function openfl_media_SoundTransform() {return require("./../../openfl/media/SoundTransform");}
function HxOverrides() {return require("./../../HxOverrides");}

// Constructor

var SoundMixer = function(){}

// Meta

SoundMixer.__name__ = "openfl.media.SoundMixer";
SoundMixer.__isInterface__ = false;
SoundMixer.prototype = {
	
};
SoundMixer.prototype.__class__ = SoundMixer.prototype.constructor = $hxClasses["openfl.media.SoundMixer"] = SoundMixer;

// Init

Object.defineProperty(SoundMixer,"soundTransform",{ get : function() {
	return SoundMixer.get_soundTransform();
}, set : function(value) {
	return SoundMixer.set_soundTransform(value);
}});

// Statics

SoundMixer.areSoundsInaccessible = function() {
	return false;
}
SoundMixer.stopAll = function() {
	var _g = 0;
	var _g1 = SoundMixer.__soundChannels;
	while(_g < _g1.length) {
		var channel = _g1[_g];
		++_g;
		channel.stop();
	}
}
SoundMixer.__registerSoundChannel = function(soundChannel) {
	SoundMixer.__soundChannels.push(soundChannel);
}
SoundMixer.__unregisterSoundChannel = function(soundChannel) {
	(HxOverrides().default).remove(SoundMixer.__soundChannels,soundChannel);
}
SoundMixer.get_soundTransform = function() {
	return SoundMixer.__soundTransform;
}
SoundMixer.set_soundTransform = function(value) {
	SoundMixer.__soundTransform = value.clone();
	var _g = 0;
	var _g1 = SoundMixer.__soundChannels;
	while(_g < _g1.length) {
		var channel = _g1[_g];
		++_g;
		channel.__updateTransform();
	}
	return value;
}
SoundMixer.MAX_ACTIVE_CHANNELS = 32
SoundMixer.__soundChannels = []
SoundMixer.__soundTransform = new (openfl_media_SoundTransform().default)()

// Export

exports.default = SoundMixer;