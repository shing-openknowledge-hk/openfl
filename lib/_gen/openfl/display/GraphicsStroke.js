// Class: openfl.display.GraphicsStroke

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;
function openfl_display_IGraphicsStroke() {return require("./../../openfl/display/IGraphicsStroke");}
function openfl_display_IGraphicsData() {return require("./../../openfl/display/IGraphicsData");}

// Constructor

var GraphicsStroke = function(thickness,pixelHinting,scaleMode,caps,joints,miterLimit,fill) {
	if(miterLimit == null) {
		miterLimit = 3;
	}
	if(joints == null) {
		joints = "round";
	}
	if(caps == null) {
		caps = "none";
	}
	if(scaleMode == null) {
		scaleMode = "normal";
	}
	if(pixelHinting == null) {
		pixelHinting = false;
	}
	if(thickness == null) {
		thickness = NaN;
	}
	this.caps = caps;
	this.fill = fill;
	this.joints = joints;
	this.miterLimit = miterLimit;
	this.pixelHinting = pixelHinting;
	this.scaleMode = scaleMode;
	this.thickness = thickness;
	this.__graphicsDataType = 0;
}

// Meta

GraphicsStroke.__name__ = "openfl.display.GraphicsStroke";
GraphicsStroke.__isInterface__ = false;
GraphicsStroke.__interfaces__ = [(openfl_display_IGraphicsStroke().default),(openfl_display_IGraphicsData().default)];
GraphicsStroke.prototype = {
	
};
GraphicsStroke.prototype.__class__ = GraphicsStroke.prototype.constructor = $hxClasses["openfl.display.GraphicsStroke"] = GraphicsStroke;

// Init



// Statics




// Export

exports.default = GraphicsStroke;