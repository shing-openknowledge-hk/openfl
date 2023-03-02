// Class: openfl.events.MouseEvent

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

var MouseEvent = function(type,bubbles,cancelable,localX,localY,relatedObject,ctrlKey,altKey,shiftKey,buttonDown,delta,commandKey,clickCount) {
	if(clickCount == null) {
		clickCount = 0;
	}
	if(commandKey == null) {
		commandKey = false;
	}
	if(delta == null) {
		delta = 0;
	}
	if(buttonDown == null) {
		buttonDown = false;
	}
	if(shiftKey == null) {
		shiftKey = false;
	}
	if(altKey == null) {
		altKey = false;
	}
	if(ctrlKey == null) {
		ctrlKey = false;
	}
	if(localY == null) {
		localY = 0;
	}
	if(localX == null) {
		localX = 0;
	}
	if(cancelable == null) {
		cancelable = false;
	}
	if(bubbles == null) {
		bubbles = true;
	}
	(openfl_events_Event().default).call(this,type,bubbles,cancelable);
	this.shiftKey = shiftKey;
	this.altKey = altKey;
	this.ctrlKey = ctrlKey;
	this.bubbles = bubbles;
	this.relatedObject = relatedObject;
	this.delta = delta;
	this.localX = localX;
	this.localY = localY;
	this.buttonDown = buttonDown;
	this.commandKey = commandKey;
	this.clickCount = clickCount;
	this.isRelatedObjectInaccessible = false;
	this.stageX = NaN;
	this.stageY = NaN;
}

// Meta

MouseEvent.__name__ = "openfl.events.MouseEvent";
MouseEvent.__isInterface__ = false;
MouseEvent.__super__ = (openfl_events_Event().default);
MouseEvent.prototype = $extend((openfl_events_Event().default).prototype, {
	clone: function() {
		var event = new MouseEvent(this.type,this.bubbles,this.cancelable,this.localX,this.localY,this.relatedObject,this.ctrlKey,this.altKey,this.shiftKey,this.buttonDown,this.delta,this.commandKey,this.clickCount);
		event.target = this.target;
		event.currentTarget = this.currentTarget;
		event.eventPhase = this.eventPhase;
		return event;
	},
	toString: function() {
		return this.__formatToString("MouseEvent",["type","bubbles","cancelable","localX","localY","relatedObject","ctrlKey","altKey","shiftKey","buttonDown","delta"]);
	},
	updateAfterEvent: function() {
	},
	__init: function() {
		(openfl_events_Event().default).prototype.__init.call(this);
		this.shiftKey = false;
		this.altKey = false;
		this.ctrlKey = false;
		this.bubbles = false;
		this.relatedObject = null;
		this.delta = 0;
		this.localX = 0;
		this.localY = 0;
		this.buttonDown = false;
		this.commandKey = false;
		this.clickCount = 0;
		this.isRelatedObjectInaccessible = false;
		this.stageX = NaN;
		this.stageY = NaN;
	}
});
MouseEvent.prototype.__class__ = MouseEvent.prototype.constructor = $hxClasses["openfl.events.MouseEvent"] = MouseEvent;

// Init



// Statics

MouseEvent.__create = function(type,button,stageX,stageY,local,target,delta) {
	if(delta == null) {
		delta = 0;
	}
	var event = new MouseEvent(type,true,false,local.x,local.y,null,MouseEvent.__ctrlKey,MouseEvent.__altKey,MouseEvent.__shiftKey,MouseEvent.__buttonDown,delta,MouseEvent.__commandKey);
	event.stageX = stageX;
	event.stageY = stageY;
	event.target = target;
	return event;
}
MouseEvent.CLICK = "click"
MouseEvent.DOUBLE_CLICK = "doubleClick"
MouseEvent.MIDDLE_CLICK = "middleClick"
MouseEvent.MIDDLE_MOUSE_DOWN = "middleMouseDown"
MouseEvent.MIDDLE_MOUSE_UP = "middleMouseUp"
MouseEvent.MOUSE_DOWN = "mouseDown"
MouseEvent.MOUSE_MOVE = "mouseMove"
MouseEvent.MOUSE_OUT = "mouseOut"
MouseEvent.MOUSE_OVER = "mouseOver"
MouseEvent.MOUSE_UP = "mouseUp"
MouseEvent.MOUSE_WHEEL = "mouseWheel"
MouseEvent.RELEASE_OUTSIDE = "releaseOutside"
MouseEvent.RIGHT_CLICK = "rightClick"
MouseEvent.RIGHT_MOUSE_DOWN = "rightMouseDown"
MouseEvent.RIGHT_MOUSE_UP = "rightMouseUp"
MouseEvent.ROLL_OUT = "rollOut"
MouseEvent.ROLL_OVER = "rollOver"
MouseEvent.__pool = new (lime_utils_ObjectPool().default)(function() {
	return new MouseEvent(null);
},function(event) {
	event.__init();
})

// Export

exports.default = MouseEvent;