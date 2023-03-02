// Class: openfl.filters.BitmapFilter

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;
var $import = require("./../../import_stub").default;

// Constructor

var BitmapFilter = function() {
	this.__bottomExtension = 0;
	this.__leftExtension = 0;
	this.__needSecondBitmapData = true;
	this.__numShaderPasses = 0;
	this.__preserveObject = false;
	this.__rightExtension = 0;
	this.__shaderBlendMode = "normal";
	this.__topExtension = 0;
	this.__smooth = true;
}

// Meta

BitmapFilter.__name__ = "openfl.filters.BitmapFilter";
BitmapFilter.__isInterface__ = false;
BitmapFilter.prototype = {
	clone: function() {
		return new BitmapFilter();
	},
	__applyFilter: function(bitmapData,sourceBitmapData,sourceRect,destPoint) {
		return sourceBitmapData;
	},
	__initShader: function(renderer,pass) {
		return null;
	}
};
BitmapFilter.prototype.__class__ = BitmapFilter.prototype.constructor = $hxClasses["openfl.filters.BitmapFilter"] = BitmapFilter;

// Init



// Statics




// Export

exports.default = BitmapFilter;