// Class: openfl.display.GraphicsQuadPath

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;
function openfl_display_IGraphicsPath() {return require("./../../openfl/display/IGraphicsPath");}
function openfl_display_IGraphicsData() {return require("./../../openfl/display/IGraphicsData");}

// Constructor

var GraphicsQuadPath = function(rects,indices,transforms) {
	this.rects = rects;
	this.indices = indices;
	this.transforms = transforms;
	this.__graphicsDataType = 6;
}

// Meta

GraphicsQuadPath.__name__ = "openfl.display.GraphicsQuadPath";
GraphicsQuadPath.__isInterface__ = false;
GraphicsQuadPath.__interfaces__ = [(openfl_display_IGraphicsPath().default),(openfl_display_IGraphicsData().default)];
GraphicsQuadPath.prototype = {
	
};
GraphicsQuadPath.prototype.__class__ = GraphicsQuadPath.prototype.constructor = $hxClasses["openfl.display.GraphicsQuadPath"] = GraphicsQuadPath;

// Init



// Statics




// Export

exports.default = GraphicsQuadPath;