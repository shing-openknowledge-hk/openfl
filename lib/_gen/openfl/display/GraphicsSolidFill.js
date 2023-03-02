// Class: openfl.display.GraphicsSolidFill

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;
function openfl_display_IGraphicsFill() {return require("./../../openfl/display/IGraphicsFill");}
function openfl_display_IGraphicsData() {return require("./../../openfl/display/IGraphicsData");}

// Constructor

var GraphicsSolidFill = function(color,alpha) {
	if(alpha == null) {
		alpha = 1;
	}
	if(color == null) {
		color = 0;
	}
	this.alpha = alpha;
	this.color = color;
	this.__graphicsDataType = 1;
	this.__graphicsFillType = 0;
}

// Meta

GraphicsSolidFill.__name__ = "openfl.display.GraphicsSolidFill";
GraphicsSolidFill.__isInterface__ = false;
GraphicsSolidFill.__interfaces__ = [(openfl_display_IGraphicsFill().default),(openfl_display_IGraphicsData().default)];
GraphicsSolidFill.prototype = {
	
};
GraphicsSolidFill.prototype.__class__ = GraphicsSolidFill.prototype.constructor = $hxClasses["openfl.display.GraphicsSolidFill"] = GraphicsSolidFill;

// Init



// Statics




// Export

exports.default = GraphicsSolidFill;