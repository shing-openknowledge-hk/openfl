// Class: openfl.events.ActivityEvent

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

var ActivityEvent = function(type,bubbles,cancelable,activating) {
	if(activating == null) {
		activating = false;
	}
	if(cancelable == null) {
		cancelable = false;
	}
	if(bubbles == null) {
		bubbles = false;
	}
	(openfl_events_Event().default).call(this,type,bubbles,cancelable);
	this.activating = activating;
}

// Meta

ActivityEvent.__name__ = "openfl.events.ActivityEvent";
ActivityEvent.__isInterface__ = false;
ActivityEvent.__super__ = (openfl_events_Event().default);
ActivityEvent.prototype = $extend((openfl_events_Event().default).prototype, {
	clone: function() {
		var event = new ActivityEvent(this.type,this.bubbles,this.cancelable,this.activating);
		event.target = this.target;
		event.currentTarget = this.currentTarget;
		event.eventPhase = this.eventPhase;
		return event;
	},
	toString: function() {
		return this.__formatToString("ActivityEvent",["type","bubbles","cancelable","activating"]);
	},
	__init: function() {
		(openfl_events_Event().default).prototype.__init.call(this);
		this.activating = false;
	}
});
ActivityEvent.prototype.__class__ = ActivityEvent.prototype.constructor = $hxClasses["openfl.events.ActivityEvent"] = ActivityEvent;

// Init



// Statics


ActivityEvent.ACTIVITY = "activity"
ActivityEvent.__pool = new (lime_utils_ObjectPool().default)(function() {
	return new ActivityEvent(null);
},function(event) {
	event.__init();
})

// Export

exports.default = ActivityEvent;