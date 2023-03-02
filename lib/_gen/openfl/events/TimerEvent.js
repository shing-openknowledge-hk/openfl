// Class: openfl.events.TimerEvent

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

var TimerEvent = function(type,bubbles,cancelable) {
	if(cancelable == null) {
		cancelable = false;
	}
	if(bubbles == null) {
		bubbles = false;
	}
	(openfl_events_Event().default).call(this,type,bubbles,cancelable);
}

// Meta

TimerEvent.__name__ = "openfl.events.TimerEvent";
TimerEvent.__isInterface__ = false;
TimerEvent.__super__ = (openfl_events_Event().default);
TimerEvent.prototype = $extend((openfl_events_Event().default).prototype, {
	clone: function() {
		var event = new TimerEvent(this.type,this.bubbles,this.cancelable);
		event.target = this.target;
		event.currentTarget = this.currentTarget;
		event.eventPhase = this.eventPhase;
		return event;
	},
	toString: function() {
		return this.__formatToString("TimerEvent",["type","bubbles","cancelable"]);
	},
	updateAfterEvent: function() {
	}
});
TimerEvent.prototype.__class__ = TimerEvent.prototype.constructor = $hxClasses["openfl.events.TimerEvent"] = TimerEvent;

// Init



// Statics


TimerEvent.TIMER = "timer"
TimerEvent.TIMER_COMPLETE = "timerComplete"
TimerEvent.__pool = new (lime_utils_ObjectPool().default)(function() {
	return new TimerEvent(null);
},function(event) {
	event.__init();
})

// Export

exports.default = TimerEvent;