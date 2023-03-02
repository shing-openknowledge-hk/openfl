// Class: openfl.events.VideoTextureEvent

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;
var $import = require("./../../import_stub").default;
var $extend = require("./../../extend_stub").default;
function openfl_events_Event() {return require("./../../openfl/events/Event");}
function lime_utils_ObjectPool() {return require("./../../lime/utils/ObjectPool");}

// Constructor

var VideoTextureEvent = function(type,bubbles,cancelable,status,colorSpace) {
	if(cancelable == null) {
		cancelable = false;
	}
	if(bubbles == null) {
		bubbles = false;
	}
	(openfl_events_Event().default).call(this,type,bubbles,cancelable);
	this.status = status;
	this.colorSpace = colorSpace;
}

// Meta

VideoTextureEvent.__name__ = "openfl.events.VideoTextureEvent";
VideoTextureEvent.__isInterface__ = false;
VideoTextureEvent.__super__ = (openfl_events_Event().default);
VideoTextureEvent.prototype = $extend((openfl_events_Event().default).prototype, {
	clone: function() {
		var event = new VideoTextureEvent(this.type,this.bubbles,null,this.status,this.colorSpace);
		event.target = this.target;
		event.currentTarget = this.currentTarget;
		event.eventPhase = this.eventPhase;
		return event;
	},
	toString: function() {
		return this.__formatToString("VideoTextureEvent",["type","bubbles","cancelable","status","colorSpace"]);
	},
	__init: function() {
		(openfl_events_Event().default).prototype.__init.call(this);
		this.status = null;
		this.colorSpace = null;
	}
});
VideoTextureEvent.prototype.__class__ = VideoTextureEvent.prototype.constructor = $hxClasses["openfl.events.VideoTextureEvent"] = VideoTextureEvent;

// Init



// Statics


VideoTextureEvent.RENDER_STATE = "renderState"
VideoTextureEvent.__pool = new (lime_utils_ObjectPool().default)(function() {
	return new VideoTextureEvent(null);
},function(event) {
	event.__init();
})

// Export

exports.default = VideoTextureEvent;