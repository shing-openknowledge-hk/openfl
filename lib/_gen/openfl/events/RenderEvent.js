// Class: openfl.events.RenderEvent

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

var RenderEvent = function(type,bubbles,cancelable,objectMatrix,objectColorTransform,allowSmoothing) {
	if(allowSmoothing == null) {
		allowSmoothing = true;
	}
	if(cancelable == null) {
		cancelable = false;
	}
	if(bubbles == null) {
		bubbles = false;
	}
	(openfl_events_Event().default).call(this,type,bubbles,cancelable);
	this.objectMatrix = objectMatrix;
	this.objectColorTransform = objectColorTransform;
	this.allowSmoothing = allowSmoothing;
}

// Meta

RenderEvent.__name__ = "openfl.events.RenderEvent";
RenderEvent.__isInterface__ = false;
RenderEvent.__super__ = (openfl_events_Event().default);
RenderEvent.prototype = $extend((openfl_events_Event().default).prototype, {
	clone: function() {
		var event = new RenderEvent(this.type,this.bubbles,this.cancelable,this.objectMatrix.clone(),this.objectColorTransform.__clone(),this.allowSmoothing);
		event.target = this.target;
		event.currentTarget = this.currentTarget;
		event.eventPhase = this.eventPhase;
		return event;
	},
	toString: function() {
		return this.__formatToString("RenderEvent",["type","bubbles","cancelable"]);
	},
	__init: function() {
		(openfl_events_Event().default).prototype.__init.call(this);
		this.objectMatrix = null;
		this.objectColorTransform = null;
		this.allowSmoothing = false;
		this.renderer = null;
	}
});
RenderEvent.prototype.__class__ = RenderEvent.prototype.constructor = $hxClasses["openfl.events.RenderEvent"] = RenderEvent;

// Init



// Statics


RenderEvent.CLEAR_DOM = "clearDOM"
RenderEvent.RENDER_CAIRO = "renderCairo"
RenderEvent.RENDER_CANVAS = "renderCanvas"
RenderEvent.RENDER_DOM = "renderDOM"
RenderEvent.RENDER_OPENGL = "renderOpenGL"
RenderEvent.__pool = new (lime_utils_ObjectPool().default)(function() {
	return new RenderEvent(null);
},function(event) {
	event.__init();
})

// Export

exports.default = RenderEvent;