// Class: openfl.display.GraphicsGradientFill

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;
function openfl_display_IGraphicsFill() {return require("./../../openfl/display/IGraphicsFill");}
function openfl_display_IGraphicsData() {return require("./../../openfl/display/IGraphicsData");}

// Constructor

var GraphicsGradientFill = function(type,colors,alphas,ratios,matrix,spreadMethod,interpolationMethod,focalPointRatio) {
	if(focalPointRatio == null) {
		focalPointRatio = 0;
	}
	if(type == null) {
		type = "linear";
	}
	if(spreadMethod == null) {
		spreadMethod = "pad";
	}
	if(interpolationMethod == null) {
		interpolationMethod = "rgb";
	}
	this.type = type;
	this.colors = colors;
	this.alphas = alphas;
	this.ratios = ratios;
	this.matrix = matrix;
	this.spreadMethod = spreadMethod;
	this.interpolationMethod = interpolationMethod;
	this.focalPointRatio = focalPointRatio;
	this.__graphicsDataType = 2;
	this.__graphicsFillType = 1;
}

// Meta

GraphicsGradientFill.__name__ = "openfl.display.GraphicsGradientFill";
GraphicsGradientFill.__isInterface__ = false;
GraphicsGradientFill.__interfaces__ = [(openfl_display_IGraphicsFill().default),(openfl_display_IGraphicsData().default)];
GraphicsGradientFill.prototype = {
	
};
GraphicsGradientFill.prototype.__class__ = GraphicsGradientFill.prototype.constructor = $hxClasses["openfl.display.GraphicsGradientFill"] = GraphicsGradientFill;

// Init



// Statics




// Export

exports.default = GraphicsGradientFill;