// Class: openfl.events.SampleDataEvent

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;
var $import = require("./../../import_stub").default;
var $extend = require("./../../extend_stub").default;
function openfl_events_Event() {return require("./../../openfl/events/Event");}
function openfl_utils_ByteArrayData() {return require("./../../openfl/utils/ByteArrayData");}
function lime_utils_ObjectPool() {return require("./../../lime/utils/ObjectPool");}

// Constructor

var SampleDataEvent = function(type,bubbles,cancelable) {
	if(cancelable == null) {
		cancelable = false;
	}
	if(bubbles == null) {
		bubbles = false;
	}
	(openfl_events_Event().default).call(this,type,bubbles,cancelable);
	var this1 = new (openfl_utils_ByteArrayData().default)(0);
	this.data = this1;
	this.data.set_endian("littleEndian");
	this.position = 0.0;
}

// Meta

SampleDataEvent.__name__ = "openfl.events.SampleDataEvent";
SampleDataEvent.__isInterface__ = false;
SampleDataEvent.__super__ = (openfl_events_Event().default);
SampleDataEvent.prototype = $extend((openfl_events_Event().default).prototype, {
	clone: function() {
		var event = new SampleDataEvent(this.type,this.bubbles,this.cancelable);
		event.target = this.target;
		event.currentTarget = this.currentTarget;
		event.eventPhase = this.eventPhase;
		return event;
	},
	toString: function() {
		return this.__formatToString("SampleDataEvent",["type","bubbles","cancelable"]);
	},
	__init: function() {
		(openfl_events_Event().default).prototype.__init.call(this);
		var this1 = new (openfl_utils_ByteArrayData().default)(0);
		this.data = this1;
		this.data.set_endian("littleEndian");
		this.position = 0.0;
	}
});
SampleDataEvent.prototype.__class__ = SampleDataEvent.prototype.constructor = $hxClasses["openfl.events.SampleDataEvent"] = SampleDataEvent;

// Init



// Statics


SampleDataEvent.SAMPLE_DATA = "sampleData"
SampleDataEvent.__pool = new (lime_utils_ObjectPool().default)(function() {
	return new SampleDataEvent(null);
},function(event) {
	event.__init();
})

// Export

exports.default = SampleDataEvent;