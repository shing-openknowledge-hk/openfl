// Class: openfl.events.SecurityErrorEvent

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

var SecurityErrorEvent = function(type,bubbles,cancelable,text,id) {
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
	(openfl_events_ErrorEvent().default).call(this,type,bubbles,cancelable,text,id);
}

// Meta

SecurityErrorEvent.__name__ = "openfl.events.SecurityErrorEvent";
SecurityErrorEvent.__isInterface__ = false;
SecurityErrorEvent.__super__ = (openfl_events_ErrorEvent().default);
SecurityErrorEvent.prototype = $extend((openfl_events_ErrorEvent().default).prototype, {
	clone: function() {
		var event = new SecurityErrorEvent(this.type,this.bubbles,this.cancelable,this.text,this.errorID);
		event.target = this.target;
		event.currentTarget = this.currentTarget;
		event.eventPhase = this.eventPhase;
		return event;
	},
	toString: function() {
		return this.__formatToString("SecurityErrorEvent",["type","bubbles","cancelable","text","errorID"]);
	}
});
SecurityErrorEvent.prototype.__class__ = SecurityErrorEvent.prototype.constructor = $hxClasses["openfl.events.SecurityErrorEvent"] = SecurityErrorEvent;

// Init



// Statics


SecurityErrorEvent.SECURITY_ERROR = "securityError"
SecurityErrorEvent.__pool = new (lime_utils_ObjectPool().default)(function() {
	return new SecurityErrorEvent(null);
},function(event) {
	event.__init();
})

// Export

exports.default = SecurityErrorEvent;