// Class: openfl.media.Sound

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
function lime_utils_Assets() {return require("./../../lime/utils/Assets");}
function lime_media_AudioBuffer() {return require("./../../lime/media/AudioBuffer");}
function openfl_events_IOErrorEvent() {return require("./../../openfl/events/IOErrorEvent");}
function _$UInt_UInt_$Impl_$() {return require("./../../_UInt/UInt_Impl_");}
function openfl_utils__$ByteArray_ByteArray_$Impl_$() {return require("./../../openfl/utils/_ByteArray/ByteArray_Impl_");}
function openfl_utils_ByteArrayData() {return require("./../../openfl/utils/ByteArrayData");}
function openfl_events_Event() {return require("./../../openfl/events/Event");}
function Std() {return require("./../../Std");}
function openfl_media_SoundMixer() {return require("./../../openfl/media/SoundMixer");}
function openfl_media_SoundTransform() {return require("./../../openfl/media/SoundTransform");}
function lime_media_AudioSource() {return require("./../../lime/media/AudioSource");}
function openfl_media_SoundChannel() {return require("./../../openfl/media/SoundChannel");}
function openfl_media_ID3Info() {return require("./../../openfl/media/ID3Info");}
function lime_app_Future() {return require("./../../lime/app/Future");}

// Constructor

var Sound = function(stream,context) {
	(openfl_events_EventDispatcher().default).call(this,this);
	this.bytesLoaded = 0;
	this.bytesTotal = 0;
	this.isBuffering = false;
	this.url = null;
	if(stream != null) {
		this.load(stream,context);
	}
}

// Meta

Sound.__name__ = "openfl.media.Sound";
Sound.__isInterface__ = false;
Sound.__super__ = (openfl_events_EventDispatcher().default);
Sound.prototype = $extend((openfl_events_EventDispatcher().default).prototype, {
	close: function() {
		if(this.__buffer != null) {
			this.__buffer.dispose();
			this.__buffer = null;
		}
	},
	load: function(stream,context) {
		var _gthis = this;
		this.url = stream.url;
		var defaultLibrary = (lime_utils_Assets().default).getLibrary("default");
		if(defaultLibrary != null && defaultLibrary.cachedAudioBuffers.exists(this.url)) {
			this.AudioBuffer_onURLLoad(defaultLibrary.cachedAudioBuffers.get(this.url));
		} else {
			(lime_media_AudioBuffer().default).loadFromFile(this.url).onComplete($bind(this,this.AudioBuffer_onURLLoad)).onError(function(_) {
				_gthis.AudioBuffer_onURLLoad(null);
			});
		}
	},
	loadCompressedDataFromByteArray: function(bytes,bytesLength) {
		if(bytes == null || bytesLength <= 0) {
			this.dispatchEvent(new (openfl_events_IOErrorEvent().default)("ioError"));
			return;
		}
		if((_$UInt_UInt_$Impl_$().default).gt(bytes.position,0) || (_$UInt_UInt_$Impl_$().default).gt((openfl_utils__$ByteArray_ByteArray_$Impl_$().default).get_length(bytes),bytesLength)) {
			var length = bytesLength;
			if(length == null) {
				length = 0;
			}
			var this1 = new (openfl_utils_ByteArrayData().default)(length);
			var copy = this1;
			var offset = bytes.position;
			var length1 = bytesLength;
			if(length1 == null) {
				length1 = 0;
			}
			if(offset == null) {
				offset = 0;
			}
			copy.writeBytes(bytes,offset,length1);
			bytes = copy;
		}
		this.__buffer = (lime_media_AudioBuffer().default).fromBytes((openfl_utils__$ByteArray_ByteArray_$Impl_$().default).toBytes(bytes));
		if(this.__buffer == null) {
			this.dispatchEvent(new (openfl_events_IOErrorEvent().default)("ioError"));
		} else {
			this.dispatchEvent(new (openfl_events_Event().default)("complete"));
		}
	},
	loadPCMFromByteArray: function(bytes,samples,format,stereo,sampleRate) {
		if(sampleRate == null) {
			sampleRate = 44100;
		}
		if(stereo == null) {
			stereo = true;
		}
		if(format == null) {
			format = "float";
		}
		if(bytes == null) {
			this.dispatchEvent(new (openfl_events_IOErrorEvent().default)("ioError"));
			return;
		}
		var bitsPerSample = format == "float" ? 32 : 16;
		var channels = stereo ? 2 : 1;
		var bytesLength = (Std().default).int(samples * channels * (bitsPerSample / 8));
		if((_$UInt_UInt_$Impl_$().default).gt(bytes.position,0) || (_$UInt_UInt_$Impl_$().default).gt((openfl_utils__$ByteArray_ByteArray_$Impl_$().default).get_length(bytes),bytesLength)) {
			var length = bytesLength;
			if(length == null) {
				length = 0;
			}
			var this1 = new (openfl_utils_ByteArrayData().default)(length);
			var copy = this1;
			var offset = bytes.position;
			var length1 = bytesLength;
			if(length1 == null) {
				length1 = 0;
			}
			if(offset == null) {
				offset = 0;
			}
			copy.writeBytes(bytes,offset,length1);
			bytes = copy;
		}
		var audioBuffer = new (lime_media_AudioBuffer().default)();
		audioBuffer.bitsPerSample = bitsPerSample;
		audioBuffer.channels = channels;
		var elements = null;
		var array = null;
		var view = null;
		var buffer = (openfl_utils__$ByteArray_ByteArray_$Impl_$().default).toArrayBuffer(bytes);
		var len = null;
		var this2;
		if(elements != null) {
			this2 = new Uint8Array(elements);
		} else if(array != null) {
			this2 = new Uint8Array(array);
		} else if(view != null) {
			this2 = new Uint8Array(view);
		} else if(buffer != null) {
			if(len == null) {
				this2 = new Uint8Array(buffer,0);
			} else {
				this2 = new Uint8Array(buffer,0,len);
			}
		} else {
			this2 = null;
		}
		audioBuffer.data = this2;
		audioBuffer.sampleRate = (Std().default).int(sampleRate);
		this.__buffer = audioBuffer;
		this.dispatchEvent(new (openfl_events_Event().default)("complete"));
	},
	play: function(startTime,loops,sndTransform) {
		if(loops == null) {
			loops = 0;
		}
		if(startTime == null) {
			startTime = 0.0;
		}
		if(this.__buffer == null || (openfl_media_SoundMixer().default).__soundChannels.length >= 32) {
			return null;
		}
		if(sndTransform == null) {
			sndTransform = new (openfl_media_SoundTransform().default)();
		} else {
			sndTransform = sndTransform.clone();
		}
		var pan = (openfl_media_SoundMixer().default).__soundTransform.pan + sndTransform.pan;
		if(pan > 1) {
			pan = 1;
		}
		if(pan < -1) {
			pan = -1;
		}
		var volume = (openfl_media_SoundMixer().default).__soundTransform.volume * sndTransform.volume;
		var source = new (lime_media_AudioSource().default)(this.__buffer);
		source.offset = (Std().default).int(startTime);
		if(loops > 1) {
			source.set_loops(loops - 1);
		}
		source.set_gain(volume);
		var position = source.get_position();
		position.x = pan;
		position.z = -1 * Math.sqrt(1 - Math.pow(pan,2));
		source.set_position(position);
		return new (openfl_media_SoundChannel().default)(source,sndTransform);
	},
	get_id3: function() {
		return new (openfl_media_ID3Info().default)();
	},
	get_length: function() {
		if(this.__buffer != null) {
			return (Std().default).int(this.__buffer.get_src().duration() * 1000);
		}
		return 0;
	},
	AudioBuffer_onURLLoad: function(buffer) {
		if(buffer == null) {
			this.dispatchEvent(new (openfl_events_IOErrorEvent().default)("ioError"));
		} else {
			this.__buffer = buffer;
			this.dispatchEvent(new (openfl_events_Event().default)("complete"));
		}
	}
});
Sound.prototype.__class__ = Sound.prototype.constructor = $hxClasses["openfl.media.Sound"] = Sound;

// Init

Object.defineProperties(Sound.prototype,{ id3 : { get : function () { return this.get_id3 (); }}, length : { get : function () { return this.get_length (); }}});

// Statics

Sound.fromAudioBuffer = function(buffer) {
	var sound = new Sound();
	sound.__buffer = buffer;
	return sound;
}
Sound.fromFile = function(path) {
	return Sound.fromAudioBuffer((lime_media_AudioBuffer().default).fromFile(path));
}
Sound.loadFromFile = function(path) {
	return (lime_media_AudioBuffer().default).loadFromFile(path).then(function(audioBuffer) {
		return (lime_app_Future().default).withValue(Sound.fromAudioBuffer(audioBuffer));
	});
}
Sound.loadFromFiles = function(paths) {
	return (lime_media_AudioBuffer().default).loadFromFiles(paths).then(function(audioBuffer) {
		return (lime_app_Future().default).withValue(Sound.fromAudioBuffer(audioBuffer));
	});
}


// Export

exports.default = Sound;