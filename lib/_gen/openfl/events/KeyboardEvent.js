// Class: openfl.events.KeyboardEvent

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

var KeyboardEvent = function(type,bubbles,cancelable,charCodeValue,keyCodeValue,keyLocationValue,ctrlKeyValue,altKeyValue,shiftKeyValue,controlKeyValue,commandKeyValue) {
	if(commandKeyValue == null) {
		commandKeyValue = false;
	}
	if(controlKeyValue == null) {
		controlKeyValue = false;
	}
	if(shiftKeyValue == null) {
		shiftKeyValue = false;
	}
	if(altKeyValue == null) {
		altKeyValue = false;
	}
	if(ctrlKeyValue == null) {
		ctrlKeyValue = false;
	}
	if(keyCodeValue == null) {
		keyCodeValue = 0;
	}
	if(charCodeValue == null) {
		charCodeValue = 0;
	}
	if(cancelable == null) {
		cancelable = false;
	}
	if(bubbles == null) {
		bubbles = false;
	}
	(openfl_events_Event().default).call(this,type,bubbles,cancelable);
	this.charCode = charCodeValue;
	this.keyCode = keyCodeValue;
	this.keyLocation = keyLocationValue != null ? keyLocationValue : 0;
	this.ctrlKey = ctrlKeyValue;
	this.altKey = altKeyValue;
	this.shiftKey = shiftKeyValue;
	this.controlKey = controlKeyValue;
	this.commandKey = commandKeyValue;
}

// Meta

KeyboardEvent.__name__ = "openfl.events.KeyboardEvent";
KeyboardEvent.__isInterface__ = false;
KeyboardEvent.__super__ = (openfl_events_Event().default);
KeyboardEvent.prototype = $extend((openfl_events_Event().default).prototype, {
	clone: function() {
		var event = new KeyboardEvent(this.type,this.bubbles,this.cancelable,this.charCode,this.keyCode,this.keyLocation,this.ctrlKey,this.altKey,this.shiftKey,this.controlKey,this.commandKey);
		event.target = this.target;
		event.currentTarget = this.currentTarget;
		event.eventPhase = this.eventPhase;
		return event;
	},
	toString: function() {
		return this.__formatToString("KeyboardEvent",["type","bubbles","cancelable","charCode","keyCode","keyLocation","ctrlKey","altKey","shiftKey"]);
	},
	__init: function() {
		(openfl_events_Event().default).prototype.__init.call(this);
		this.charCode = 0;
		this.keyCode = 0;
		this.keyLocation = 0;
		this.ctrlKey = false;
		this.altKey = false;
		this.shiftKey = false;
		this.controlKey = false;
		this.commandKey = false;
	}
});
KeyboardEvent.prototype.__class__ = KeyboardEvent.prototype.constructor = $hxClasses["openfl.events.KeyboardEvent"] = KeyboardEvent;

// Init



// Statics


KeyboardEvent.KEY_DOWN = "keyDown"
KeyboardEvent.KEY_UP = "keyUp"
KeyboardEvent.__pool = new (lime_utils_ObjectPool().default)(function() {
	return new KeyboardEvent(null);
},function(event) {
	event.__init();
})

// Export

exports.default = KeyboardEvent;