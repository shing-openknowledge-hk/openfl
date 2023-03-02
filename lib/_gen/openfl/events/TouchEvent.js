// Class: openfl.events.TouchEvent

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

var TouchEvent = function(type,bubbles,cancelable,touchPointID,isPrimaryTouchPoint,localX,localY,sizeX,sizeY,pressure,relatedObject,ctrlKey,altKey,shiftKey,commandKey,controlKey,timestamp,touchIntent,samples,isTouchPointCanceled) {
	if(isTouchPointCanceled == null) {
		isTouchPointCanceled = false;
	}
	if(timestamp == null) {
		timestamp = 0;
	}
	if(controlKey == null) {
		controlKey = false;
	}
	if(commandKey == null) {
		commandKey = false;
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
	if(pressure == null) {
		pressure = 0;
	}
	if(sizeY == null) {
		sizeY = 0;
	}
	if(sizeX == null) {
		sizeX = 0;
	}
	if(localY == null) {
		localY = 0;
	}
	if(localX == null) {
		localX = 0;
	}
	if(isPrimaryTouchPoint == null) {
		isPrimaryTouchPoint = false;
	}
	if(touchPointID == null) {
		touchPointID = 0;
	}
	if(cancelable == null) {
		cancelable = false;
	}
	if(bubbles == null) {
		bubbles = true;
	}
	(openfl_events_Event().default).call(this,type,bubbles,cancelable);
	this.touchPointID = touchPointID;
	this.isPrimaryTouchPoint = isPrimaryTouchPoint;
	this.localX = localX;
	this.localY = localY;
	this.sizeX = sizeX;
	this.sizeY = sizeY;
	this.pressure = pressure;
	this.relatedObject = relatedObject;
	this.ctrlKey = ctrlKey;
	this.altKey = altKey;
	this.shiftKey = shiftKey;
	this.commandKey = commandKey;
	this.controlKey = controlKey;
	this.stageX = NaN;
	this.stageY = NaN;
}

// Meta

TouchEvent.__name__ = "openfl.events.TouchEvent";
TouchEvent.__isInterface__ = false;
TouchEvent.__super__ = (openfl_events_Event().default);
TouchEvent.prototype = $extend((openfl_events_Event().default).prototype, {
	clone: function() {
		var event = new TouchEvent(this.type,this.bubbles,this.cancelable,this.touchPointID,this.isPrimaryTouchPoint,this.localX,this.localY,this.sizeX,this.sizeY,this.pressure,this.relatedObject,this.ctrlKey,this.altKey,this.shiftKey,this.commandKey,this.controlKey);
		event.target = this.target;
		event.currentTarget = this.currentTarget;
		event.eventPhase = this.eventPhase;
		return event;
	},
	toString: function() {
		return this.__formatToString("TouchEvent",["type","bubbles","cancelable","touchPointID","isPrimaryTouchPoint","localX","localY","sizeX","sizeY","pressure","relatedObject","ctrlKey","altKey","shiftKey","commandKey","controlKey"]);
	},
	updateAfterEvent: function() {
	},
	__init: function() {
		(openfl_events_Event().default).prototype.__init.call(this);
		this.touchPointID = 0;
		this.isPrimaryTouchPoint = false;
		this.localX = 0;
		this.localY = 0;
		this.sizeX = 0;
		this.sizeY = 0;
		this.pressure = 0;
		this.relatedObject = null;
		this.ctrlKey = false;
		this.altKey = false;
		this.shiftKey = false;
		this.commandKey = false;
		this.controlKey = false;
		this.stageX = NaN;
		this.stageY = NaN;
	}
});
TouchEvent.prototype.__class__ = TouchEvent.prototype.constructor = $hxClasses["openfl.events.TouchEvent"] = TouchEvent;

// Init



// Statics

TouchEvent.__create = function(type,touch,stageX,stageY,local,target) {
	var evt = new TouchEvent(type,true,false,0,true,local.x,local.y,1,1,1);
	evt.stageX = stageX;
	evt.stageY = stageY;
	evt.target = target;
	return evt;
}
TouchEvent.__meta__ = { fields : { delta : { SuppressWarnings : ["checkstyle:FieldDocComment"]}}}
TouchEvent.TOUCH_BEGIN = "touchBegin"
TouchEvent.TOUCH_END = "touchEnd"
TouchEvent.TOUCH_MOVE = "touchMove"
TouchEvent.TOUCH_OUT = "touchOut"
TouchEvent.TOUCH_OVER = "touchOver"
TouchEvent.TOUCH_ROLL_OUT = "touchRollOut"
TouchEvent.TOUCH_ROLL_OVER = "touchRollOver"
TouchEvent.TOUCH_TAP = "touchTap"
TouchEvent.__pool = new (lime_utils_ObjectPool().default)(function() {
	return new TouchEvent(null);
},function(event) {
	event.__init();
})

// Export

exports.default = TouchEvent;