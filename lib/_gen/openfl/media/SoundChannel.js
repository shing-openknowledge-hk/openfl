// Class: openfl.media.SoundChannel

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;
var $import = require("./../../import_stub").default;
var $bind = require("./../../bind_stub").default;
var $extend = require("./../../extend_stub").default;
function openfl_events_EventDispatcher() {return require("./../../openfl/events/EventDispatcher");}
function openfl_media_SoundMixer() {return require("./../../openfl/media/SoundMixer");}
function Std() {return require("./../../Std");}
function openfl_events_Event() {return require("./../../openfl/events/Event");}
function openfl_media_SoundTransform() {return require("./../../openfl/media/SoundTransform");}

// Constructor

var SoundChannel = function(source,soundTransform) {
	(openfl_events_EventDispatcher().default).call(this,this);
	this.leftPeak = 1;
	this.rightPeak = 1;
	if(soundTransform != null) {
		this.__soundTransform = soundTransform;
	} else {
		this.__soundTransform = new (openfl_media_SoundTransform().default)();
	}
	if(source != null) {
		this.__source = source;
		this.__source.onComplete.add($bind(this,this.source_onComplete));
		this.__isValid = true;
		this.__source.play();
	}
	(openfl_media_SoundMixer().default).__registerSoundChannel(this);
}

// Meta

SoundChannel.__name__ = "openfl.media.SoundChannel";
SoundChannel.__isInterface__ = false;
SoundChannel.__super__ = (openfl_events_EventDispatcher().default);
SoundChannel.prototype = $extend((openfl_events_EventDispatcher().default).prototype, {
	stop: function() {
		(openfl_media_SoundMixer().default).__unregisterSoundChannel(this);
		if(!this.__isValid) {
			return;
		}
		this.__source.stop();
		this.__dispose();
	},
	__dispose: function() {
		if(!this.__isValid) {
			return;
		}
		this.__source.onComplete.remove($bind(this,this.source_onComplete));
		this.__source.dispose();
		this.__source = null;
		this.__isValid = false;
	},
	__updateTransform: function() {
		this.set_soundTransform(this.get_soundTransform());
	},
	get_position: function() {
		if(!this.__isValid) {
			return 0;
		}
		return this.__source.get_currentTime() + this.__source.offset;
	},
	set_position: function(value) {
		if(!this.__isValid) {
			return 0;
		}
		this.__source.set_currentTime((Std().default).int(value) - this.__source.offset);
		return value;
	},
	get_soundTransform: function() {
		return this.__soundTransform.clone();
	},
	set_soundTransform: function(value) {
		if(value != null) {
			this.__soundTransform.pan = value.pan;
			this.__soundTransform.volume = value.volume;
			var pan = (openfl_media_SoundMixer().default).__soundTransform.pan + this.__soundTransform.pan;
			if(pan < -1) {
				pan = -1;
			}
			if(pan > 1) {
				pan = 1;
			}
			var volume = (openfl_media_SoundMixer().default).__soundTransform.volume * this.__soundTransform.volume;
			if(this.__isValid) {
				this.__source.set_gain(volume);
				var position = this.__source.get_position();
				position.x = pan;
				position.z = -1 * Math.sqrt(1 - Math.pow(pan,2));
				this.__source.set_position(position);
				return value;
			}
		}
		return value;
	},
	source_onComplete: function() {
		(openfl_media_SoundMixer().default).__unregisterSoundChannel(this);
		this.__dispose();
		this.dispatchEvent(new (openfl_events_Event().default)("soundComplete"));
	}
});
SoundChannel.prototype.__class__ = SoundChannel.prototype.constructor = $hxClasses["openfl.media.SoundChannel"] = SoundChannel;

// Init

Object.defineProperties(SoundChannel.prototype,{ position : { get : function () { return this.get_position (); }, set : function (v) { return this.set_position (v); }}, soundTransform : { get : function () { return this.get_soundTransform (); }, set : function (v) { return this.set_soundTransform (v); }}});

// Statics




// Export

exports.default = SoundChannel;