// Class: lime.system.Sensor

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;
var $import = require("./../../import_stub").default;
function haxe_ds_IntMap() {return require("./../../haxe/ds/IntMap");}
function lime_app__$Event_$Float_$Float_$Float_$Void() {return require("./../../lime/app/_Event_Float_Float_Float_Void");}

// Constructor

var Sensor = function(type,id) {
	this.onUpdate = new (lime_app__$Event_$Float_$Float_$Float_$Void().default)();
	this.type = type;
	this.id = id;
}

// Meta

Sensor.__name__ = "lime.system.Sensor";
Sensor.__isInterface__ = false;
Sensor.prototype = {
	
};
Sensor.prototype.__class__ = Sensor.prototype.constructor = $hxClasses["lime.system.Sensor"] = Sensor;

// Init



// Statics

Sensor.getSensors = function(type) {
	if(type == null) {
		return Sensor.sensors.slice();
	} else {
		var result = [];
		var _g = 0;
		var _g1 = Sensor.sensors;
		while(_g < _g1.length) {
			var sensor = _g1[_g];
			++_g;
			if(sensor.type == type) {
				result.push(sensor);
			}
		}
		return result;
	}
}
Sensor.registerSensor = function(type,id) {
	var sensor = new Sensor(type,id);
	Sensor.sensors.push(sensor);
	Sensor.sensorByID.set(id,sensor);
	return sensor;
}
Sensor.sensorByID = new (haxe_ds_IntMap().default)()
Sensor.sensors = []

// Export

exports.default = Sensor;