// Class: lime.media.AudioBuffer

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;
var $import = require("./../../import_stub").default;
function lime__$internal_format_Base64() {return require("./../../lime/_internal/format/Base64");}
function lime_media_howlerjs_Howl() {return require("howler");}
function lime_app_Promise() {return require("./../../lime/app/Promise");}
function lime_utils_Log() {return require("./../../lime/utils/Log");}

// Constructor

var AudioBuffer = function() {
}

// Meta

AudioBuffer.__name__ = "lime.media.AudioBuffer";
AudioBuffer.__isInterface__ = false;
AudioBuffer.prototype = {
	dispose: function() {
		this.__srcHowl.unload();
	},
	get_src: function() {
		return this.__srcHowl;
	},
	set_src: function(value) {
		return this.__srcHowl = value;
	}
};
AudioBuffer.prototype.__class__ = AudioBuffer.prototype.constructor = $hxClasses["lime.media.AudioBuffer"] = AudioBuffer;

// Init

{
	var p = AudioBuffer.prototype;
	Object.defineProperties(p,{ src : { get : p.get_src, set : p.set_src}});
};

// Statics

AudioBuffer.fromBase64 = function(base64String) {
	if(base64String == null) {
		return null;
	}
	if(base64String.indexOf(",") == -1) {
		base64String = "data:" + AudioBuffer.__getCodec((lime__$internal_format_Base64().default).decode(base64String)) + ";base64," + base64String;
	}
	var audioBuffer = new AudioBuffer();
	audioBuffer.set_src(new (lime_media_howlerjs_Howl().Howl)({ src : [base64String], html5 : true, preload : false}));
	return audioBuffer;
}
AudioBuffer.fromBytes = function(bytes) {
	if(bytes == null) {
		return null;
	}
	var audioBuffer = new AudioBuffer();
	audioBuffer.set_src(new (lime_media_howlerjs_Howl().Howl)({ src : ["data:" + AudioBuffer.__getCodec(bytes) + ";base64," + (lime__$internal_format_Base64().default).encode(bytes)], html5 : true, preload : false}));
	return audioBuffer;
}
AudioBuffer.fromFile = function(path) {
	if(path == null) {
		return null;
	}
	var audioBuffer = new AudioBuffer();
	audioBuffer.__srcHowl = new (lime_media_howlerjs_Howl().Howl)({ src : [path], preload : false});
	return audioBuffer;
}
AudioBuffer.fromFiles = function(paths) {
	var audioBuffer = new AudioBuffer();
	audioBuffer.__srcHowl = new (lime_media_howlerjs_Howl().Howl)({ src : paths, preload : false});
	return audioBuffer;
}
AudioBuffer.fromVorbisFile = function(vorbisFile) {
	return null;
}
AudioBuffer.loadFromFile = function(path) {
	var promise = new (lime_app_Promise().default)();
	var audioBuffer = AudioBuffer.fromFile(path);
	if(audioBuffer != null) {
		if(audioBuffer != null) {
			audioBuffer.__srcHowl.on("load",function() {
				promise.complete(audioBuffer);
			});
			audioBuffer.__srcHowl.on("loaderror",function(id,msg) {
				promise.error(msg);
			});
			audioBuffer.__srcHowl.load();
		}
	} else {
		promise.error(null);
	}
	return promise.future;
}
AudioBuffer.loadFromFiles = function(paths) {
	var promise = new (lime_app_Promise().default)();
	var audioBuffer = AudioBuffer.fromFiles(paths);
	if(audioBuffer != null) {
		audioBuffer.__srcHowl.on("load",function() {
			promise.complete(audioBuffer);
		});
		audioBuffer.__srcHowl.on("loaderror",function() {
			promise.error(null);
		});
		audioBuffer.__srcHowl.load();
	} else {
		promise.error(null);
	}
	return promise.future;
}
AudioBuffer.__getCodec = function(bytes) {
	var signature = bytes.getString(0,4);
	switch(signature) {
	case "OggS":
		return "audio/ogg";
	case "RIFF":
		if(bytes.getString(8,4) == "WAVE") {
			return "audio/wav";
		} else {
			var _g = bytes.get(2);
			var _g1 = bytes.get(1);
			switch(bytes.get(0)) {
			case 73:
				if(_g1 == 68) {
					if(_g == 51) {
						return "audio/mp3";
					}
				}
				break;
			case 255:
				switch(_g1) {
				case 243:case 250:case 251:
					return "audio/mp3";
				default:
				}
				break;
			default:
			}
		}
		break;
	case "fLaC":
		return "audio/flac";
	default:
		var _g2 = bytes.get(2);
		var _g11 = bytes.get(1);
		switch(bytes.get(0)) {
		case 73:
			if(_g11 == 68) {
				if(_g2 == 51) {
					return "audio/mp3";
				}
			}
			break;
		case 255:
			switch(_g11) {
			case 243:case 250:case 251:
				return "audio/mp3";
			default:
			}
			break;
		default:
		}
	}
	(lime_utils_Log().default).error("Unsupported sound format",{ fileName : "../node_modules/lime/src/lime/media/AudioBuffer.hx", lineNumber : 362, className : "lime.media.AudioBuffer", methodName : "__getCodec"});
	return null;
}


// Export

exports.default = AudioBuffer;