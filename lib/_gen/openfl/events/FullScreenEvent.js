// Class: openfl.events.FullScreenEvent

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;
var $import = require("./../../import_stub").default;
var $extend = require("./../../extend_stub").default;
function openfl_events_ActivityEvent() {return require("./../../openfl/events/ActivityEvent");}
function lime_utils_ObjectPool() {return require("./../../lime/utils/ObjectPool");}

// Constructor

var FullScreenEvent = function(type,bubbles,cancelable,fullScreen,interactive) {
	if(interactive == null) {
		interactive = false;
	}
	if(fullScreen == null) {
		fullScreen = false;
	}
	if(cancelable == null) {
		cancelable = false;
	}
	if(bubbles == null) {
		bubbles = false;
	}
	(openfl_events_ActivityEvent().default).call(this,type,bubbles,cancelable);
	this.fullScreen = fullScreen;
	this.interactive = interactive;
}

// Meta

FullScreenEvent.__name__ = "openfl.events.FullScreenEvent";
FullScreenEvent.__isInterface__ = false;
FullScreenEvent.__super__ = (openfl_events_ActivityEvent().default);
FullScreenEvent.prototype = $extend((openfl_events_ActivityEvent().default).prototype, {
	clone: function() {
		var event = new FullScreenEvent(this.type,this.bubbles,this.cancelable,this.fullScreen,this.interactive);
		event.target = this.target;
		event.currentTarget = this.currentTarget;
		event.eventPhase = this.eventPhase;
		return event;
	},
	toString: function() {
		return this.__formatToString("FullscreenEvent",["type","bubbles","cancelable","fullscreen","interactive"]);
	},
	__init: function() {
		(openfl_events_ActivityEvent().default).prototype.__init.call(this);
		this.fullScreen = false;
		this.interactive = false;
	}
});
FullScreenEvent.prototype.__class__ = FullScreenEvent.prototype.constructor = $hxClasses["openfl.events.FullScreenEvent"] = FullScreenEvent;

// Init



// Statics


FullScreenEvent.FULL_SCREEN = "fullScreen"
FullScreenEvent.FULL_SCREEN_INTERACTIVE_ACCEPTED = "fullScreenInteractiveAccepted"
FullScreenEvent.__pool = new (lime_utils_ObjectPool().default)(function() {
	return new FullScreenEvent(null);
},function(event) {
	event.__init();
})

// Export

exports.default = FullScreenEvent;