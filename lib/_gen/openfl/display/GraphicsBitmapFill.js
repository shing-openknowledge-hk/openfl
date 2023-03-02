// Class: openfl.display.GraphicsBitmapFill

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;
function openfl_display_IGraphicsFill() {return require("./../../openfl/display/IGraphicsFill");}
function openfl_display_IGraphicsData() {return require("./../../openfl/display/IGraphicsData");}

// Constructor

var GraphicsBitmapFill = function(bitmapData,matrix,repeat,smooth) {
	if(smooth == null) {
		smooth = false;
	}
	if(repeat == null) {
		repeat = true;
	}
	this.bitmapData = bitmapData;
	this.matrix = matrix;
	this.repeat = repeat;
	this.smooth = smooth;
	this.__graphicsDataType = 4;
	this.__graphicsFillType = 2;
}

// Meta

GraphicsBitmapFill.__name__ = "openfl.display.GraphicsBitmapFill";
GraphicsBitmapFill.__isInterface__ = false;
GraphicsBitmapFill.__interfaces__ = [(openfl_display_IGraphicsFill().default),(openfl_display_IGraphicsData().default)];
GraphicsBitmapFill.prototype = {
	
};
GraphicsBitmapFill.prototype.__class__ = GraphicsBitmapFill.prototype.constructor = $hxClasses["openfl.display.GraphicsBitmapFill"] = GraphicsBitmapFill;

// Init



// Statics




// Export

exports.default = GraphicsBitmapFill;