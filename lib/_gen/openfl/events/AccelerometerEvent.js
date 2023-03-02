// Class: openfl.events.AccelerometerEvent

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

var AccelerometerEvent = function(type,bubbles,cancelable,timestamp,accelerationX,accelerationY,accelerationZ) {
	if(accelerationZ == null) {
		accelerationZ = 0;
	}
	if(accelerationY == null) {
		accelerationY = 0;
	}
	if(accelerationX == null) {
		accelerationX = 0;
	}
	if(timestamp == null) {
		timestamp = 0;
	}
	if(cancelable == null) {
		cancelable = false;
	}
	if(bubbles == null) {
		bubbles = false;
	}
	(openfl_events_Event().default).call(this,type,bubbles,cancelable);
	this.timestamp = timestamp;
	this.accelerationX = accelerationX;
	this.accelerationY = accelerationY;
	this.accelerationZ = accelerationZ;
}

// Meta

AccelerometerEvent.__name__ = "openfl.events.AccelerometerEvent";
AccelerometerEvent.__isInterface__ = false;
AccelerometerEvent.__super__ = (openfl_events_Event().default);
AccelerometerEvent.prototype = $extend((openfl_events_Event().default).prototype, {
	clone: function() {
		var event = new AccelerometerEvent(this.type,this.bubbles,this.cancelable,this.timestamp,this.accelerationX,this.accelerationY,this.accelerationZ);
		event.target = this.target;
		event.currentTarget = this.currentTarget;
		event.eventPhase = this.eventPhase;
		return event;
	},
	toString: function() {
		return this.__formatToString("AccelerometerEvent",["type","bubbles","cancelable","timestamp","accelerationX","accelerationY","accelerationZ"]);
	},
	__init: function() {
		(openfl_events_Event().default).prototype.__init.call(this);
		this.timestamp = 0;
		this.accelerationX = 0;
		this.accelerationY = 0;
		this.accelerationZ = 0;
	}
});
AccelerometerEvent.prototype.__class__ = AccelerometerEvent.prototype.constructor = $hxClasses["openfl.events.AccelerometerEvent"] = AccelerometerEvent;

// Init



// Statics


AccelerometerEvent.UPDATE = "update"
AccelerometerEvent.__pool = new (lime_utils_ObjectPool().default)(function() {
	return new AccelerometerEvent(null);
},function(event) {
	event.__init();
})

// Export

exports.default = AccelerometerEvent;