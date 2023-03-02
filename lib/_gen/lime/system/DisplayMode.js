// Class: lime.system.DisplayMode

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;

// Constructor

var DisplayMode = function(width,height,refreshRate,pixelFormat) {
	this.width = width;
	this.height = height;
	this.refreshRate = refreshRate;
	this.pixelFormat = pixelFormat;
}

// Meta

DisplayMode.__name__ = "lime.system.DisplayMode";
DisplayMode.__isInterface__ = false;
DisplayMode.prototype = {
	
};
DisplayMode.prototype.__class__ = DisplayMode.prototype.constructor = $hxClasses["lime.system.DisplayMode"] = DisplayMode;

// Init



// Statics




// Export

exports.default = DisplayMode;