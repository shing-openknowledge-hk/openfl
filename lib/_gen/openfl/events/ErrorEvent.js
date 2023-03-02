// Class: openfl.events.ErrorEvent

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

var ErrorEvent = function(type,bubbles,cancelable,text,id) {
	if(id == null) {
		id = 0;
	}
	if(text == null) {
		text = "";
	}
	if(cancelable == null) {
		cancelable = false;
	}
	if(bubbles == null) {
		bubbles = false;
	}
	(openfl_events_TextEvent().default).call(this,type,bubbles,cancelable,text);
	this.errorID = id;
}

// Meta

ErrorEvent.__name__ = "openfl.events.ErrorEvent";
ErrorEvent.__isInterface__ = false;
ErrorEvent.__super__ = (openfl_events_TextEvent().default);
ErrorEvent.prototype = $extend((openfl_events_TextEvent().default).prototype, {
	clone: function() {
		var event = new ErrorEvent(this.type,this.bubbles,this.cancelable,this.text,this.errorID);
		event.target = this.target;
		event.currentTarget = this.currentTarget;
		event.eventPhase = this.eventPhase;
		return event;
	},
	toString: function() {
		return this.__formatToString("ErrorEvent",["type","bubbles","cancelable","text","errorID"]);
	},
	__init: function() {
		(openfl_events_TextEvent().default).prototype.__init.call(this);
		this.errorID = 0;
	}
});
ErrorEvent.prototype.__class__ = ErrorEvent.prototype.constructor = $hxClasses["openfl.events.ErrorEvent"] = ErrorEvent;

// Init



// Statics


ErrorEvent.ERROR = "error"
ErrorEvent.__pool = new (lime_utils_ObjectPool().default)(function() {
	return new ErrorEvent(null);
},function(event) {
	event.__init();
})

// Export

exports.default = ErrorEvent;