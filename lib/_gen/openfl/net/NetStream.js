// Class: openfl.net.NetStream

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
function haxe_Timer() {return require("./../../haxe/Timer");}
function openfl_events_NetStatusEvent() {return require("./../../openfl/events/NetStatusEvent");}
function haxe_CallStack() {return require("./../../haxe/CallStack");}
function js__$Boot_HaxeError() {return require("./../../js/_Boot/HaxeError");}
function openfl_media_SoundTransform() {return require("./../../openfl/media/SoundTransform");}

// Constructor

var NetStream = function(connection,peerID) {
	(openfl_events_EventDispatcher().default).call(this);
	this.__connection = connection;
	this.__soundTransform = new (openfl_media_SoundTransform().default)();
	this.__video = window.document.createElement("video");
	this.__video.setAttribute("playsinline","");
	this.__video.setAttribute("webkit-playsinline","");
	this.__video.setAttribute("crossorigin","anonymous");
	this.__video.addEventListener("error",$bind(this,this.video_onError),false);
	this.__video.addEventListener("waiting",$bind(this,this.video_onWaiting),false);
	this.__video.addEventListener("ended",$bind(this,this.video_onEnd),false);
	this.__video.addEventListener("pause",$bind(this,this.video_onPause),false);
	this.__video.addEventListener("seeking",$bind(this,this.video_onSeeking),false);
	this.__video.addEventListener("playing",$bind(this,this.video_onPlaying),false);
	this.__video.addEventListener("timeupdate",$bind(this,this.video_onTimeUpdate),false);
	this.__video.addEventListener("loadstart",$bind(this,this.video_onLoadStart),false);
	this.__video.addEventListener("stalled",$bind(this,this.video_onStalled),false);
	this.__video.addEventListener("durationchanged",$bind(this,this.video_onDurationChanged),false);
	this.__video.addEventListener("canplay",$bind(this,this.video_onCanPlay),false);
	this.__video.addEventListener("canplaythrough",$bind(this,this.video_onCanPlayThrough),false);
	this.__video.addEventListener("loadedmetadata",$bind(this,this.video_onLoadMetaData),false);
}

// Meta

NetStream.__name__ = "openfl.net.NetStream";
NetStream.__isInterface__ = false;
NetStream.__super__ = (openfl_events_EventDispatcher().default);
NetStream.prototype = $extend((openfl_events_EventDispatcher().default).prototype, {
	close: function() {
		if(this.__video == null) {
			return;
		}
		this.__closed = true;
		this.__video.pause();
		this.__video.src = "";
		this.time = 0;
	},
	dispose: function() {
		this.close();
		this.__video = null;
	},
	pause: function() {
		if(this.__video != null) {
			this.__video.pause();
		}
	},
	play: function(url,p1,p2,p3,p4,p5) {
		if(this.__video == null) {
			return;
		}
		this.__video.volume = (openfl_media_SoundMixer().default).__soundTransform.volume * this.__soundTransform.volume;
		if(typeof(url) == "string") {
			this.__video.src = url;
		} else {
			this.__video.srcObject = url;
		}
		this.__video.play();
	},
	requestVideoStatus: function() {
		var _gthis = this;
		if(this.__video == null) {
			return;
		}
		if(this.__timer == null) {
			this.__timer = new (haxe_Timer().default)(1);
		}
		this.__timer.run = function() {
			if(_gthis.__video.paused) {
				_gthis.__playStatus("NetStream.Play.pause");
			} else {
				_gthis.__playStatus("NetStream.Play.playing");
			}
			_gthis.__timer.stop();
		};
	},
	resume: function() {
		if(this.__video != null) {
			this.__video.play();
		}
	},
	seek: function(time) {
		if(this.__video == null) {
			return;
		}
		if(time < 0) {
			time = 0;
		} else if(time > this.__video.duration) {
			time = this.__video.duration;
		}
		this.set___seeking(true);
		this.__connection.dispatchEvent(new (openfl_events_NetStatusEvent().default)("netStatus",false,false,{ code : "NetStream.SeekStart.Notify"}));
		this.__video.currentTime = time;
	},
	togglePause: function() {
		if(this.__video == null) {
			return;
		}
		if(this.__video.paused) {
			this.__video.play();
		} else {
			this.__video.pause();
		}
	},
	__playStatus: function(code) {
		if(this.__video == null) {
			return;
		}
		if(this.client != null) {
			try {
				var handler = this.client.onPlayStatus;
				handler({ code : code, duration : this.__video.duration, position : this.__video.currentTime, speed : this.__video.playbackRate, start : this.__video.startTime});
			} catch( e ) {
				(haxe_CallStack().default).lastException = e;
				var e1 = ((e) instanceof (js__$Boot_HaxeError().default)) ? e.val : e;
			}
		}
	},
	video_onCanPlay: function(event) {
		this.__playStatus("NetStream.Play.canplay");
	},
	video_onCanPlayThrough: function(event) {
		this.__playStatus("NetStream.Play.canplaythrough");
	},
	video_onDurationChanged: function(event) {
		this.__playStatus("NetStream.Play.durationchanged");
	},
	video_onEnd: function(event) {
		this.__connection.dispatchEvent(new (openfl_events_NetStatusEvent().default)("netStatus",false,false,{ code : "NetStream.Play.Stop"}));
		this.__connection.dispatchEvent(new (openfl_events_NetStatusEvent().default)("netStatus",false,false,{ code : "NetStream.Play.Complete"}));
		this.__playStatus("NetStream.Play.Complete");
	},
	video_onError: function(event) {
		this.__connection.dispatchEvent(new (openfl_events_NetStatusEvent().default)("netStatus",false,false,{ code : "NetStream.Play.Stop"}));
		this.__playStatus("NetStream.Play.error");
	},
	video_onLoadMetaData: function(event) {
		if(this.__video == null) {
			return;
		}
		if(this.client != null) {
			try {
				var handler = this.client.onMetaData;
				handler({ width : this.__video.videoWidth, height : this.__video.videoHeight, duration : this.__video.duration});
			} catch( e ) {
				(haxe_CallStack().default).lastException = e;
				var e1 = ((e) instanceof (js__$Boot_HaxeError().default)) ? e.val : e;
			}
		}
	},
	video_onLoadStart: function(event) {
		this.__playStatus("NetStream.Play.loadstart");
	},
	video_onPause: function(event) {
		this.__playStatus("NetStream.Play.pause");
	},
	video_onPlaying: function(event) {
		this.__connection.dispatchEvent(new (openfl_events_NetStatusEvent().default)("netStatus",false,false,{ code : "NetStream.Play.Start"}));
		this.__playStatus("NetStream.Play.playing");
	},
	video_onSeeking: function(event) {
		this.__playStatus("NetStream.Play.seeking");
		this.__connection.dispatchEvent(new (openfl_events_NetStatusEvent().default)("netStatus",false,false,{ code : "NetStream.Seek.Complete"}));
	},
	video_onStalled: function(event) {
		this.__playStatus("NetStream.Play.stalled");
	},
	video_onTimeUpdate: function(event) {
		if(this.__video == null) {
			return;
		}
		this.time = this.__video.currentTime;
		this.__playStatus("NetStream.Play.timeupdate");
	},
	video_onWaiting: function(event) {
		this.__playStatus("NetStream.Play.waiting");
	},
	get_soundTransform: function() {
		return this.__soundTransform.clone();
	},
	set_soundTransform: function(value) {
		if(value != null) {
			this.__soundTransform.pan = value.pan;
			this.__soundTransform.volume = value.volume;
			if(this.__video != null) {
				this.__video.volume = (openfl_media_SoundMixer().default).__soundTransform.volume * this.__soundTransform.volume;
			}
		}
		return value;
	},
	get_speed: function() {
		if(this.__video != null) {
			return this.__video.playbackRate;
		} else {
			return 1;
		}
	},
	set_speed: function(value) {
		if(this.__video != null) {
			return this.__video.playbackRate = value;
		} else {
			return value;
		}
	},
	get___seeking: function() {
		if(!this.__seeking) {
			return this.__video.seeking;
		} else {
			return true;
		}
	},
	set___seeking: function(value) {
		return this.__seeking = value;
	}
});
NetStream.prototype.__class__ = NetStream.prototype.constructor = $hxClasses["openfl.net.NetStream"] = NetStream;

// Init

Object.defineProperties(NetStream.prototype,{ soundTransform : { get : function () { return this.get_soundTransform (); }, set : function (v) { return this.set_soundTransform (v); }}, speed : { get : function () { return this.get_speed (); }, set : function (v) { return this.set_speed (v); }}});

// Statics


NetStream.__meta__ = { fields : { audioCodec : { SuppressWarnings : ["checkstyle:FieldDocComment"]}, decodedFrames : { SuppressWarnings : ["checkstyle:FieldDocComment"]}, speed : { SuppressWarnings : ["checkstyle:FieldDocComment"]}, requestVideoStatus : { SuppressWarnings : ["checkstyle:FieldDocComment"]}}}

// Export

exports.default = NetStream;