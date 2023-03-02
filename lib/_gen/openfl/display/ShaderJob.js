// Class: openfl.display.ShaderJob

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;
var $import = require("./../../import_stub").default;
var $extend = require("./../../extend_stub").default;
function openfl_events_EventDispatcher() {return require("./../../openfl/events/EventDispatcher");}

// Constructor

var ShaderJob = function(shader,target,width,height) {
	if(height == null) {
		height = 0;
	}
	if(width == null) {
		width = 0;
	}
	(openfl_events_EventDispatcher().default).call(this);
	this.height = height;
	this.width = 0;
	this.progress = 0;
}

// Meta

ShaderJob.__name__ = "openfl.display.ShaderJob";
ShaderJob.__isInterface__ = false;
ShaderJob.__super__ = (openfl_events_EventDispatcher().default);
ShaderJob.prototype = $extend((openfl_events_EventDispatcher().default).prototype, {
	cancel: function() {
	},
	start: function(waitForCompletion) {
		if(waitForCompletion == null) {
			waitForCompletion = false;
		}
	}
});
ShaderJob.prototype.__class__ = ShaderJob.prototype.constructor = $hxClasses["openfl.display.ShaderJob"] = ShaderJob;

// Init



// Statics


ShaderJob.__meta__ = { fields : { target : { SuppressWarnings : ["checkstyle:Dynamic"]}, _ : { SuppressWarnings : ["checkstyle:Dynamic"]}}}

// Export

exports.default = ShaderJob;