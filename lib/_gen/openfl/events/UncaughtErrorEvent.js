// Class: openfl.events.UncaughtErrorEvent

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;
var $import = require("./../../import_stub").default;
var $extend = require("./../../extend_stub").default;
function openfl_events_ErrorEvent() {return require("./../../openfl/events/ErrorEvent");}
function lime_utils_ObjectPool() {return require("./../../lime/utils/ObjectPool");}

// Constructor

var UncaughtErrorEvent = function(type,bubbles,cancelable,error) {
	if(cancelable == null) {
		cancelable = true;
	}
	if(bubbles == null) {
		bubbles = true;
	}
	(openfl_events_ErrorEvent().default).call(this,type,bubbles,cancelable);
	this.error = error;
}

// Meta

UncaughtErrorEvent.__name__ = "openfl.events.UncaughtErrorEvent";
UncaughtErrorEvent.__isInterface__ = false;
UncaughtErrorEvent.__super__ = (openfl_events_ErrorEvent().default);
UncaughtErrorEvent.prototype = $extend((openfl_events_ErrorEvent().default).prototype, {
	clone: function() {
		var event = new UncaughtErrorEvent(this.type,this.bubbles,this.cancelable,this.error);
		event.target = this.target;
		event.currentTarget = this.currentTarget;
		event.eventPhase = this.eventPhase;
		return event;
	},
	toString: function() {
		return this.__formatToString("UncaughtErrorEvent",["type","bubbles","cancelable","error"]);
	},
	__init: function() {
		(openfl_events_ErrorEvent().default).prototype.__init.call(this);
		this.error = null;
	}
});
UncaughtErrorEvent.prototype.__class__ = UncaughtErrorEvent.prototype.constructor = $hxClasses["openfl.events.UncaughtErrorEvent"] = UncaughtErrorEvent;

// Init



// Statics


UncaughtErrorEvent.UNCAUGHT_ERROR = "uncaughtError"
UncaughtErrorEvent.__pool = new (lime_utils_ObjectPool().default)(function() {
	return new UncaughtErrorEvent(null);
},function(event) {
	event.__init();
})

// Export

exports.default = UncaughtErrorEvent;