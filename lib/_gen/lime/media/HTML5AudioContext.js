// Class: lime.media.HTML5AudioContext

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;
var $import = require("./../../import_stub").default;
function lime_media_AudioBuffer() {return require("./../../lime/media/AudioBuffer");}

// Constructor

var HTML5AudioContext = function() {
	this.NETWORK_NO_SOURCE = 3;
	this.NETWORK_LOADING = 2;
	this.NETWORK_IDLE = 1;
	this.NETWORK_EMPTY = 0;
	this.HAVE_NOTHING = 0;
	this.HAVE_METADATA = 1;
	this.HAVE_FUTURE_DATA = 3;
	this.HAVE_ENOUGH_DATA = 4;
	this.HAVE_CURRENT_DATA = 2;
}

// Meta

HTML5AudioContext.__name__ = "lime.media.HTML5AudioContext";
HTML5AudioContext.__isInterface__ = false;
HTML5AudioContext.prototype = {
	canPlayType: function(buffer,type) {
		if(buffer.__srcAudio != null) {
			return buffer.__srcAudio.canPlayType(type);
		}
		return null;
	},
	createBuffer: function(urlString) {
		var buffer = new (lime_media_AudioBuffer().default)();
		buffer.__srcAudio = new Audio();
		buffer.__srcAudio.src = urlString;
		return buffer;
	},
	getAutoplay: function(buffer) {
		if(buffer.__srcAudio != null) {
			return buffer.__srcAudio.autoplay;
		}
		return false;
	},
	getBuffered: function(buffer) {
		if(buffer.__srcAudio != null) {
			return buffer.__srcAudio.buffered;
		}
		return null;
	},
	getCurrentSrc: function(buffer) {
		if(buffer.__srcAudio != null) {
			return buffer.__srcAudio.currentSrc;
		}
		return null;
	},
	getCurrentTime: function(buffer) {
		if(buffer.__srcAudio != null) {
			return buffer.__srcAudio.currentTime;
		}
		return 0;
	},
	getDefaultPlaybackRate: function(buffer) {
		if(buffer.__srcAudio != null) {
			return buffer.__srcAudio.defaultPlaybackRate;
		}
		return 1;
	},
	getDuration: function(buffer) {
		if(buffer.__srcAudio != null) {
			return buffer.__srcAudio.duration;
		}
		return 0;
	},
	getEnded: function(buffer) {
		if(buffer.__srcAudio != null) {
			return buffer.__srcAudio.ended;
		}
		return false;
	},
	getError: function(buffer) {
		if(buffer.__srcAudio != null) {
			return buffer.__srcAudio.error;
		}
		return null;
	},
	getLoop: function(buffer) {
		if(buffer.__srcAudio != null) {
			return buffer.__srcAudio.loop;
		}
		return false;
	},
	getMuted: function(buffer) {
		if(buffer.__srcAudio != null) {
			return buffer.__srcAudio.muted;
		}
		return false;
	},
	getNetworkState: function(buffer) {
		if(buffer.__srcAudio != null) {
			return buffer.__srcAudio.networkState;
		}
		return 0;
	},
	getPaused: function(buffer) {
		if(buffer.__srcAudio != null) {
			return buffer.__srcAudio.paused;
		}
		return false;
	},
	getPlaybackRate: function(buffer) {
		if(buffer.__srcAudio != null) {
			return buffer.__srcAudio.playbackRate;
		}
		return 1;
	},
	getPlayed: function(buffer) {
		if(buffer.__srcAudio != null) {
			return buffer.__srcAudio.played;
		}
		return null;
	},
	getPreload: function(buffer) {
		if(buffer.__srcAudio != null) {
			return buffer.__srcAudio.preload;
		}
		return null;
	},
	getReadyState: function(buffer) {
		if(buffer.__srcAudio != null) {
			return buffer.__srcAudio.readyState;
		}
		return 0;
	},
	getSeekable: function(buffer) {
		if(buffer.__srcAudio != null) {
			return buffer.__srcAudio.seekable;
		}
		return null;
	},
	getSeeking: function(buffer) {
		if(buffer.__srcAudio != null) {
			return buffer.__srcAudio.seeking;
		}
		return false;
	},
	getSrc: function(buffer) {
		if(buffer.__srcAudio != null) {
			return buffer.__srcAudio.src;
		}
		return null;
	},
	getStartTime: function(buffer) {
		if(buffer.__srcAudio != null) {
			return buffer.__srcAudio.playbackRate;
		}
		return 0;
	},
	getVolume: function(buffer) {
		if(buffer.__srcAudio != null) {
			return buffer.__srcAudio.volume;
		}
		return 1;
	},
	load: function(buffer) {
		if(buffer.__srcAudio != null) {
			buffer.__srcAudio.load();
		}
	},
	pause: function(buffer) {
		if(buffer.__srcAudio != null) {
			buffer.__srcAudio.pause();
		}
	},
	play: function(buffer) {
		if(buffer.__srcAudio != null) {
			buffer.__srcAudio.play();
		}
	},
	setAutoplay: function(buffer,value) {
		if(buffer.__srcAudio != null) {
			buffer.__srcAudio.autoplay = value;
		}
	},
	setCurrentTime: function(buffer,value) {
		if(buffer.__srcAudio != null) {
			buffer.__srcAudio.currentTime = value;
		}
	},
	setDefaultPlaybackRate: function(buffer,value) {
		if(buffer.__srcAudio != null) {
			buffer.__srcAudio.defaultPlaybackRate = value;
		}
	},
	setLoop: function(buffer,value) {
		if(buffer.__srcAudio != null) {
			buffer.__srcAudio.loop = value;
		}
	},
	setMuted: function(buffer,value) {
		if(buffer.__srcAudio != null) {
			buffer.__srcAudio.muted = value;
		}
	},
	setPlaybackRate: function(buffer,value) {
		if(buffer.__srcAudio != null) {
			buffer.__srcAudio.playbackRate = value;
		}
	},
	setPreload: function(buffer,value) {
		if(buffer.__srcAudio != null) {
			buffer.__srcAudio.preload = value;
		}
	},
	setSrc: function(buffer,value) {
		if(buffer.__srcAudio != null) {
			buffer.__srcAudio.src = value;
		}
	},
	setVolume: function(buffer,value) {
		if(buffer.__srcAudio != null) {
			buffer.__srcAudio.volume = value;
		}
	}
};
HTML5AudioContext.prototype.__class__ = HTML5AudioContext.prototype.constructor = $hxClasses["lime.media.HTML5AudioContext"] = HTML5AudioContext;

// Init



// Statics




// Export

exports.default = HTML5AudioContext;