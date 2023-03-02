// Class: openfl.events.GameInputEvent

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

var GameInputEvent = function(type,bubbles,cancelable,device) {
	if(cancelable == null) {
		cancelable = false;
	}
	if(bubbles == null) {
		bubbles = true;
	}
	(openfl_events_Event().default).call(this,type,bubbles,cancelable);
	this.device = device;
}

// Meta

GameInputEvent.__name__ = "openfl.events.GameInputEvent";
GameInputEvent.__isInterface__ = false;
GameInputEvent.__super__ = (openfl_events_Event().default);
GameInputEvent.prototype = $extend((openfl_events_Event().default).prototype, {
	clone: function() {
		var event = new GameInputEvent(this.type,this.bubbles,this.cancelable,this.device);
		event.target = this.target;
		event.currentTarget = this.currentTarget;
		event.eventPhase = this.eventPhase;
		return event;
	},
	toString: function() {
		return this.__formatToString("GameInputEvent",["type","bubbles","cancelable","device"]);
	},
	__init: function() {
		(openfl_events_Event().default).prototype.__init.call(this);
		this.device = null;
	}
});
GameInputEvent.prototype.__class__ = GameInputEvent.prototype.constructor = $hxClasses["openfl.events.GameInputEvent"] = GameInputEvent;

// Init



// Statics


GameInputEvent.DEVICE_ADDED = "deviceAdded"
GameInputEvent.DEVICE_REMOVED = "deviceRemoved"
GameInputEvent.DEVICE_UNUSABLE = "deviceUnusable"
GameInputEvent.__pool = new (lime_utils_ObjectPool().default)(function() {
	return new GameInputEvent(null);
},function(event) {
	event.__init();
})

// Export

exports.default = GameInputEvent;