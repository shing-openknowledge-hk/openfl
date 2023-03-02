// Class: openfl.events.HTTPStatusEvent

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

var HTTPStatusEvent = function(type,bubbles,cancelable,status,redirected) {
	if(redirected == null) {
		redirected = false;
	}
	if(status == null) {
		status = 0;
	}
	if(cancelable == null) {
		cancelable = false;
	}
	if(bubbles == null) {
		bubbles = false;
	}
	this.status = status;
	this.redirected = redirected;
	(openfl_events_Event().default).call(this,type,bubbles,cancelable);
}

// Meta

HTTPStatusEvent.__name__ = "openfl.events.HTTPStatusEvent";
HTTPStatusEvent.__isInterface__ = false;
HTTPStatusEvent.__super__ = (openfl_events_Event().default);
HTTPStatusEvent.prototype = $extend((openfl_events_Event().default).prototype, {
	clone: function() {
		var event = new HTTPStatusEvent(this.type,this.bubbles,this.cancelable,this.status,this.redirected);
		event.target = this.target;
		event.currentTarget = this.currentTarget;
		event.eventPhase = this.eventPhase;
		return event;
	},
	toString: function() {
		return this.__formatToString("HTTPStatusEvent",["type","bubbles","cancelable","status","redirected"]);
	},
	__init: function() {
		(openfl_events_Event().default).prototype.__init.call(this);
		this.status = 0;
		this.redirected = false;
	}
});
HTTPStatusEvent.prototype.__class__ = HTTPStatusEvent.prototype.constructor = $hxClasses["openfl.events.HTTPStatusEvent"] = HTTPStatusEvent;

// Init



// Statics


HTTPStatusEvent.HTTP_RESPONSE_STATUS = "httpResponseStatus"
HTTPStatusEvent.HTTP_STATUS = "httpStatus"
HTTPStatusEvent.__pool = new (lime_utils_ObjectPool().default)(function() {
	return new HTTPStatusEvent(null);
},function(event) {
	event.__init();
})

// Export

exports.default = HTTPStatusEvent;