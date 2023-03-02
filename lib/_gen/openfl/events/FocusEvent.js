// Class: openfl.events.FocusEvent

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

var FocusEvent = function(type,bubbles,cancelable,relatedObject,shiftKey,keyCode) {
	if(keyCode == null) {
		keyCode = 0;
	}
	if(shiftKey == null) {
		shiftKey = false;
	}
	if(cancelable == null) {
		cancelable = false;
	}
	if(bubbles == null) {
		bubbles = false;
	}
	(openfl_events_Event().default).call(this,type,bubbles,cancelable);
	this.keyCode = keyCode;
	this.shiftKey = shiftKey;
	this.relatedObject = relatedObject;
}

// Meta

FocusEvent.__name__ = "openfl.events.FocusEvent";
FocusEvent.__isInterface__ = false;
FocusEvent.__super__ = (openfl_events_Event().default);
FocusEvent.prototype = $extend((openfl_events_Event().default).prototype, {
	clone: function() {
		var event = new FocusEvent(this.type,this.bubbles,this.cancelable,this.relatedObject,this.shiftKey,this.keyCode);
		event.target = this.target;
		event.currentTarget = this.currentTarget;
		event.eventPhase = this.eventPhase;
		return event;
	},
	toString: function() {
		return this.__formatToString("FocusEvent",["type","bubbles","cancelable","relatedObject","shiftKey","keyCode"]);
	},
	__init: function() {
		(openfl_events_Event().default).prototype.__init.call(this);
		this.keyCode = 0;
		this.shiftKey = false;
		this.relatedObject = null;
	}
});
FocusEvent.prototype.__class__ = FocusEvent.prototype.constructor = $hxClasses["openfl.events.FocusEvent"] = FocusEvent;

// Init



// Statics


FocusEvent.FOCUS_IN = "focusIn"
FocusEvent.FOCUS_OUT = "focusOut"
FocusEvent.KEY_FOCUS_CHANGE = "keyFocusChange"
FocusEvent.MOUSE_FOCUS_CHANGE = "mouseFocusChange"
FocusEvent.__pool = new (lime_utils_ObjectPool().default)(function() {
	return new FocusEvent(null);
},function(event) {
	event.__init();
})

// Export

exports.default = FocusEvent;