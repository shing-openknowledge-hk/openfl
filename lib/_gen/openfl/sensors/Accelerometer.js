// Class: openfl.sensors.Accelerometer

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
function js__$Boot_HaxeError() {return require("./../../js/_Boot/HaxeError");}
function openfl_errors_ArgumentError() {return require("./../../openfl/errors/ArgumentError");}
function haxe_Timer() {return require("./../../haxe/Timer");}
function openfl_events_AccelerometerEvent() {return require("./../../openfl/events/AccelerometerEvent");}
function lime_system_Sensor() {return require("./../../lime/system/Sensor");}
function lime_system_SensorType() {return require("./../../lime/system/SensorType");}

// Constructor

var Accelerometer = function() {
	(openfl_events_EventDispatcher().default).call(this);
	Accelerometer.initialize();
	this.__interval = 0;
	this.__muted = false;
	this.setRequestedUpdateInterval(Accelerometer.defaultInterval);
}

// Meta

Accelerometer.__name__ = "openfl.sensors.Accelerometer";
Accelerometer.__isInterface__ = false;
Accelerometer.__super__ = (openfl_events_EventDispatcher().default);
Accelerometer.prototype = $extend((openfl_events_EventDispatcher().default).prototype, {
	addEventListener: function(type,listener,useCapture,priority,useWeakReference) {
		if(useWeakReference == null) {
			useWeakReference = false;
		}
		if(priority == null) {
			priority = 0;
		}
		if(useCapture == null) {
			useCapture = false;
		}
		(openfl_events_EventDispatcher().default).prototype.addEventListener.call(this,type,listener,useCapture,priority,useWeakReference);
		this.update();
	},
	setRequestedUpdateInterval: function(interval) {
		this.__interval = interval;
		if(this.__interval < 0) {
			throw new (js__$Boot_HaxeError().default)(new (openfl_errors_ArgumentError().default)());
		} else if(this.__interval == 0) {
			this.__interval = Accelerometer.defaultInterval;
		}
		if(this.__timer != null) {
			this.__timer.stop();
			this.__timer = null;
		}
		if(Accelerometer.supported && !this.get_muted()) {
			this.__timer = new (haxe_Timer().default)(this.__interval);
			this.__timer.run = $bind(this,this.update);
		}
	},
	update: function() {
		var event = new (openfl_events_AccelerometerEvent().default)("update");
		event.timestamp = (haxe_Timer().default).stamp();
		event.accelerationX = Accelerometer.currentX;
		event.accelerationY = Accelerometer.currentY;
		event.accelerationZ = Accelerometer.currentZ;
		this.dispatchEvent(event);
	},
	get_muted: function() {
		return this.__muted;
	},
	set_muted: function(value) {
		this.__muted = value;
		this.setRequestedUpdateInterval(this.__interval);
		return value;
	}
});
Accelerometer.prototype.__class__ = Accelerometer.prototype.constructor = $hxClasses["openfl.sensors.Accelerometer"] = Accelerometer;

// Init

{
	Object.defineProperty(Accelerometer.prototype,"muted",{ get : function () { return this.get_muted (); }, set : function (v) { return this.set_muted (v); }});
	Object.defineProperty(Accelerometer,"isSupported",{ get : function() {
		return Accelerometer.get_isSupported();
	}});
};

// Statics

Accelerometer.initialize = function() {
	if(!Accelerometer.initialized) {
		var sensors = (lime_system_Sensor().default).getSensors((lime_system_SensorType().default).ACCELEROMETER);
		if(sensors.length > 0) {
			sensors[0].onUpdate.add(Accelerometer.accelerometer_onUpdate);
			Accelerometer.supported = true;
		}
		Accelerometer.initialized = true;
	}
}
Accelerometer.accelerometer_onUpdate = function(x,y,z) {
	Accelerometer.currentX = x;
	Accelerometer.currentY = y;
	Accelerometer.currentZ = z;
}
Accelerometer.get_isSupported = function() {
	Accelerometer.initialize();
	return Accelerometer.supported;
}
Accelerometer.currentX = 0.0
Accelerometer.currentY = 1.0
Accelerometer.currentZ = 0.0
Accelerometer.defaultInterval = 34
Accelerometer.initialized = false
Accelerometer.supported = false

// Export

exports.default = Accelerometer;