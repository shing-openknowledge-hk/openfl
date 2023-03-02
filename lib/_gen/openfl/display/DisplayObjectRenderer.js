// Class: openfl.display.DisplayObjectRenderer

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;
var $import = require("./../../import_stub").default;
var $extend = require("./../../extend_stub").default;
function openfl_events_EventDispatcher() {return require("./../../openfl/events/EventDispatcher");}
function openfl_geom_ColorTransform() {return require("./../../openfl/geom/ColorTransform");}

// Constructor

var DisplayObjectRenderer = function() {
	(openfl_events_EventDispatcher().default).call(this);
	this.__allowSmoothing = true;
	this.__tempColorTransform = new (openfl_geom_ColorTransform().default)();
	this.__worldAlpha = 1;
}

// Meta

DisplayObjectRenderer.__name__ = "openfl.display.DisplayObjectRenderer";
DisplayObjectRenderer.__isInterface__ = false;
DisplayObjectRenderer.__super__ = (openfl_events_EventDispatcher().default);
DisplayObjectRenderer.prototype = $extend((openfl_events_EventDispatcher().default).prototype, {
	__clear: function() {
	},
	__getAlpha: function(value) {
		return value * this.__worldAlpha;
	},
	__getColorTransform: function(value) {
		if(this.__worldColorTransform != null) {
			this.__tempColorTransform.__copyFrom(this.__worldColorTransform);
			this.__tempColorTransform.__combine(value);
			return this.__tempColorTransform;
		} else {
			return value;
		}
	},
	__popMask: function() {
	},
	__popMaskObject: function(object,handleScrollRect) {
		if(handleScrollRect == null) {
			handleScrollRect = true;
		}
	},
	__popMaskRect: function() {
	},
	__pushMask: function(mask) {
	},
	__pushMaskObject: function(object,handleScrollRect) {
		if(handleScrollRect == null) {
			handleScrollRect = true;
		}
	},
	__pushMaskRect: function(rect,transform) {
	},
	__render: function(object) {
	},
	__resize: function(width,height) {
	},
	__setBlendMode: function(value) {
	}
});
DisplayObjectRenderer.prototype.__class__ = DisplayObjectRenderer.prototype.constructor = $hxClasses["openfl.display.DisplayObjectRenderer"] = DisplayObjectRenderer;

// Init



// Statics


DisplayObjectRenderer.__meta__ = { fields : { __context : { SuppressWarnings : ["checkstyle:Dynamic"]}, __type : { SuppressWarnings : ["checkstyle:Dynamic"]}}}

// Export

exports.default = DisplayObjectRenderer;