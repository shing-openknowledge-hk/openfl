// Class: lime.media.AudioSource

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;
var $import = require("./../../import_stub").default;
function lime_app__$Event_$Void_$Void() {return require("./../../lime/app/_Event_Void_Void");}
function lime__$internal_backend_html5_HTML5AudioSource() {return require("./../../lime/_internal/backend/html5/HTML5AudioSource");}

// Constructor

var AudioSource = function(buffer,offset,length,loops) {
	if(loops == null) {
		loops = 0;
	}
	if(offset == null) {
		offset = 0;
	}
	this.onComplete = new (lime_app__$Event_$Void_$Void().default)();
	this.buffer = buffer;
	this.offset = offset;
	this.__backend = new (lime__$internal_backend_html5_HTML5AudioSource().default)(this);
	if(length != null && length != 0) {
		this.set_length(length);
	}
	this.set_loops(loops);
	if(buffer != null) {
		this.init();
	}
}

// Meta

AudioSource.__name__ = "lime.media.AudioSource";
AudioSource.__isInterface__ = false;
AudioSource.prototype = {
	dispose: function() {
		this.__backend.dispose();
	},
	init: function() {
		this.__backend.init();
	},
	play: function() {
		this.__backend.play();
	},
	pause: function() {
		this.__backend.pause();
	},
	stop: function() {
		this.__backend.stop();
	},
	get_currentTime: function() {
		return this.__backend.getCurrentTime();
	},
	set_currentTime: function(value) {
		return this.__backend.setCurrentTime(value);
	},
	get_gain: function() {
		return this.__backend.getGain();
	},
	set_gain: function(value) {
		return this.__backend.setGain(value);
	},
	get_length: function() {
		return this.__backend.getLength();
	},
	set_length: function(value) {
		return this.__backend.setLength(value);
	},
	get_loops: function() {
		return this.__backend.getLoops();
	},
	set_loops: function(value) {
		return this.__backend.setLoops(value);
	},
	get_position: function() {
		return this.__backend.getPosition();
	},
	set_position: function(value) {
		return this.__backend.setPosition(value);
	}
};
AudioSource.prototype.__class__ = AudioSource.prototype.constructor = $hxClasses["lime.media.AudioSource"] = AudioSource;

// Init



// Statics




// Export

exports.default = AudioSource;