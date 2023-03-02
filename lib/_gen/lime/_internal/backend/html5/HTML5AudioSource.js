// Class: lime._internal.backend.html5.HTML5AudioSource

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../../hxClasses_stub").default;
var $hxEnums = require("./../../../../hxEnums_stub").default;
var $bind = require("./../../../../bind_stub").default;
var $import = require("./../../../../import_stub").default;
function Std() {return require("./../../../../Std");}
function lime_math_Vector4() {return require("./../../../../lime/math/Vector4");}

// Constructor

var HTML5AudioSource = function(parent) {
	this.parent = parent;
	this.id = -1;
	this.gain = 1;
	this.position = new (lime_math_Vector4().default)();
}

// Meta

HTML5AudioSource.__name__ = "lime._internal.backend.html5.HTML5AudioSource";
HTML5AudioSource.__isInterface__ = false;
HTML5AudioSource.prototype = {
	dispose: function() {
	},
	init: function() {
	},
	play: function() {
		if(this.playing || this.parent.buffer == null || this.parent.buffer.__srcHowl == null) {
			return;
		}
		this.playing = true;
		var time = this.getCurrentTime();
		this.completed = false;
		var cacheVolume = this.parent.buffer.__srcHowl._volume;
		this.parent.buffer.__srcHowl._volume = this.parent.get_gain();
		this.id = this.parent.buffer.__srcHowl.play();
		this.parent.buffer.__srcHowl._volume = cacheVolume;
		this.setPosition(this.parent.get_position());
		this.parent.buffer.__srcHowl.on("end",$bind(this,this.howl_onEnd),this.id);
		this.setCurrentTime(time);
	},
	pause: function() {
		this.playing = false;
		if(this.parent.buffer != null && this.parent.buffer.__srcHowl != null) {
			this.parent.buffer.__srcHowl.pause(this.id);
		}
	},
	stop: function() {
		this.playing = false;
		if(this.parent.buffer != null && this.parent.buffer.__srcHowl != null) {
			this.parent.buffer.__srcHowl.stop(this.id);
			this.parent.buffer.__srcHowl.off("end",$bind(this,this.howl_onEnd),this.id);
		}
	},
	howl_onEnd: function() {
		this.playing = false;
		if(this.loops > 0) {
			this.loops--;
			this.stop();
			this.play();
			return;
		} else if(this.parent.buffer != null && this.parent.buffer.__srcHowl != null) {
			this.parent.buffer.__srcHowl.stop(this.id);
			this.parent.buffer.__srcHowl.off("end",$bind(this,this.howl_onEnd),this.id);
		}
		this.completed = true;
		this.parent.onComplete.dispatch();
	},
	getCurrentTime: function() {
		if(this.id == -1) {
			return 0;
		}
		if(this.completed) {
			return this.getLength();
		} else if(this.parent.buffer != null && this.parent.buffer.__srcHowl != null) {
			var time = (Std().default).int(this.parent.buffer.__srcHowl.seek(this.id) * 1000) - this.parent.offset;
			if(time < 0) {
				return 0;
			}
			return time;
		}
		return 0;
	},
	setCurrentTime: function(value) {
		if(this.parent.buffer != null && this.parent.buffer.__srcHowl != null) {
			var pos = (value + this.parent.offset) / 1000;
			if(pos < 0) {
				pos = 0;
			}
			this.parent.buffer.__srcHowl.seek(pos,this.id);
		}
		return value;
	},
	getGain: function() {
		return this.gain;
	},
	setGain: function(value) {
		if(this.parent.buffer != null && this.parent.buffer.__srcHowl != null && this.id != -1) {
			this.parent.buffer.__srcHowl.volume(value,this.id);
		}
		return this.gain = value;
	},
	getLength: function() {
		if(this.length != 0) {
			return this.length;
		}
		if(this.parent.buffer != null && this.parent.buffer.__srcHowl != null) {
			return (Std().default).int(this.parent.buffer.__srcHowl.duration() * 1000);
		}
		return 0;
	},
	setLength: function(value) {
		return this.length = value;
	},
	getLoops: function() {
		return this.loops;
	},
	setLoops: function(value) {
		return this.loops = value;
	},
	getPosition: function() {
		return this.position;
	},
	setPosition: function(value) {
		this.position.x = value.x;
		this.position.y = value.y;
		this.position.z = value.z;
		this.position.w = value.w;
		if(this.parent.buffer.__srcHowl != null && this.parent.buffer.__srcHowl.pos != null) {
			this.parent.buffer.__srcHowl.pos(this.position.x,this.position.y,this.position.z,this.id);
		}
		return this.position;
	}
};
HTML5AudioSource.prototype.__class__ = HTML5AudioSource.prototype.constructor = $hxClasses["lime._internal.backend.html5.HTML5AudioSource"] = HTML5AudioSource;

// Init



// Statics




// Export

exports.default = HTML5AudioSource;