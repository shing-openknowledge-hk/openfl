// Class: openfl.events.AsyncErrorEvent

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

var AsyncErrorEvent = function(type,bubbles,cancelable,text,error) {
	if(text == null) {
		text = "";
	}
	if(cancelable == null) {
		cancelable = false;
	}
	if(bubbles == null) {
		bubbles = false;
	}
	(openfl_events_ErrorEvent().default).call(this,type,bubbles,cancelable);
	this.text = text;
	this.error = error;
}

// Meta

AsyncErrorEvent.__name__ = "openfl.events.AsyncErrorEvent";
AsyncErrorEvent.__isInterface__ = false;
AsyncErrorEvent.__super__ = (openfl_events_ErrorEvent().default);
AsyncErrorEvent.prototype = $extend((openfl_events_ErrorEvent().default).prototype, {
	clone: function() {
		var event = new AsyncErrorEvent(this.type,this.bubbles,this.cancelable,this.text,this.error);
		event.target = this.target;
		event.currentTarget = this.currentTarget;
		event.eventPhase = this.eventPhase;
		return event;
	},
	toString: function() {
		return this.__formatToString("AsyncErrorEvent",["type","bubbles","cancelable","text","error"]);
	},
	__init: function() {
		(openfl_events_ErrorEvent().default).prototype.__init.call(this);
		this.text = "";
		this.error = null;
	}
});
AsyncErrorEvent.prototype.__class__ = AsyncErrorEvent.prototype.constructor = $hxClasses["openfl.events.AsyncErrorEvent"] = AsyncErrorEvent;

// Init



// Statics


AsyncErrorEvent.ASYNC_ERROR = "asyncError"
AsyncErrorEvent.__pool = new (lime_utils_ObjectPool().default)(function() {
	return new AsyncErrorEvent(null);
},function(event) {
	event.__init();
})

// Export

exports.default = AsyncErrorEvent;