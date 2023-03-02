// Class: openfl.display.GraphicsShaderFill

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;
function openfl_display_IGraphicsFill() {return require("./../../openfl/display/IGraphicsFill");}
function openfl_display_IGraphicsData() {return require("./../../openfl/display/IGraphicsData");}

// Constructor

var GraphicsShaderFill = function(shader,matrix) {
	this.shader = shader;
	this.matrix = matrix;
	this.__graphicsDataType = 8;
	this.__graphicsFillType = 4;
}

// Meta

GraphicsShaderFill.__name__ = "openfl.display.GraphicsShaderFill";
GraphicsShaderFill.__isInterface__ = false;
GraphicsShaderFill.__interfaces__ = [(openfl_display_IGraphicsFill().default),(openfl_display_IGraphicsData().default)];
GraphicsShaderFill.prototype = {
	
};
GraphicsShaderFill.prototype.__class__ = GraphicsShaderFill.prototype.constructor = $hxClasses["openfl.display.GraphicsShaderFill"] = GraphicsShaderFill;

// Init



// Statics




// Export

exports.default = GraphicsShaderFill;