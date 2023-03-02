// Class: openfl.events.DataEvent

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;
var $import = require("./../../import_stub").default;
var $extend = require("./../../extend_stub").default;
function openfl_events_TextEvent() {return require("./../../openfl/events/TextEvent");}
function lime_utils_ObjectPool() {return require("./../../lime/utils/ObjectPool");}

// Constructor

var DataEvent = function(type,bubbles,cancelable,data) {
	if(data == null) {
		data = "";
	}
	if(cancelable == null) {
		cancelable = false;
	}
	if(bubbles == null) {
		bubbles = false;
	}
	(openfl_events_TextEvent().default).call(this,type,bubbles,cancelable);
	this.data = data;
}

// Meta

DataEvent.__name__ = "openfl.events.DataEvent";
DataEvent.__isInterface__ = false;
DataEvent.__super__ = (openfl_events_TextEvent().default);
DataEvent.prototype = $extend((openfl_events_TextEvent().default).prototype, {
	clone: function() {
		var event = new DataEvent(this.type,this.bubbles,this.cancelable,this.data);
		event.target = this.target;
		event.currentTarget = this.currentTarget;
		event.eventPhase = this.eventPhase;
		return event;
	},
	toString: function() {
		return this.__formatToString("DataEvent",["type","bubbles","cancelable","data"]);
	},
	__init: function() {
		(openfl_events_TextEvent().default).prototype.__init.call(this);
		this.data = "";
	}
});
DataEvent.prototype.__class__ = DataEvent.prototype.constructor = $hxClasses["openfl.events.DataEvent"] = DataEvent;

// Init



// Statics


DataEvent.DATA = "data"
DataEvent.UPLOAD_COMPLETE_DATA = "uploadCompleteData"
DataEvent.__pool = new (lime_utils_ObjectPool().default)(function() {
	return new DataEvent(null);
},function(event) {
	event.__init();
})

// Export

exports.default = DataEvent;