// Class: openfl.display.GraphicsTrianglePath

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;
function openfl_display_IGraphicsPath() {return require("./../../openfl/display/IGraphicsPath");}
function openfl_display_IGraphicsData() {return require("./../../openfl/display/IGraphicsData");}

// Constructor

var GraphicsTrianglePath = function(vertices,indices,uvtData,culling) {
	if(culling == null) {
		culling = "none";
	}
	this.vertices = vertices;
	this.indices = indices;
	this.uvtData = uvtData;
	this.culling = culling;
	this.__graphicsDataType = 7;
}

// Meta

GraphicsTrianglePath.__name__ = "openfl.display.GraphicsTrianglePath";
GraphicsTrianglePath.__isInterface__ = false;
GraphicsTrianglePath.__interfaces__ = [(openfl_display_IGraphicsPath().default),(openfl_display_IGraphicsData().default)];
GraphicsTrianglePath.prototype = {
	
};
GraphicsTrianglePath.prototype.__class__ = GraphicsTrianglePath.prototype.constructor = $hxClasses["openfl.display.GraphicsTrianglePath"] = GraphicsTrianglePath;

// Init



// Statics




// Export

exports.default = GraphicsTrianglePath;