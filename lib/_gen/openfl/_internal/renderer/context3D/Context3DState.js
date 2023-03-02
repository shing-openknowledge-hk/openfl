// Class: openfl._internal.renderer.context3D.Context3DState

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../../hxClasses_stub").default;
var $hxEnums = require("./../../../../hxEnums_stub").default;
var $import = require("./../../../../import_stub").default;
function openfl_geom_Rectangle() {return require("./../../../../openfl/geom/Rectangle");}

// Constructor

var Context3DState = function() {
	this.backBufferEnableDepthAndStencil = false;
	this.blendDestinationAlphaFactor = "zero";
	this.blendSourceAlphaFactor = "one";
	this.blendDestinationRGBFactor = "zero";
	this.blendSourceRGBFactor = "one";
	this.colorMaskRed = true;
	this.colorMaskGreen = true;
	this.colorMaskBlue = true;
	this.colorMaskAlpha = true;
	this.culling = "none";
	this.depthCompareMode = "less";
	this.depthMask = true;
	this.samplerStates = [];
	this.scissorRectangle = new (openfl_geom_Rectangle().default)();
	this.stencilCompareMode = "always";
	this.stencilDepthFail = "keep";
	this.stencilFail = "keep";
	this.stencilPass = "keep";
	this.stencilReadMask = 255;
	this.stencilReferenceValue = 0;
	this.stencilTriangleFace = "frontAndBack";
	this.stencilWriteMask = 255;
	this.textures = [];
	this.__frontFaceGLCCW = true;
	this.__glBlendEquation = 32774;
}

// Meta

Context3DState.__name__ = "openfl._internal.renderer.context3D.Context3DState";
Context3DState.__isInterface__ = false;
Context3DState.prototype = {
	
};
Context3DState.prototype.__class__ = Context3DState.prototype.constructor = $hxClasses["openfl._internal.renderer.context3D.Context3DState"] = Context3DState;

// Init



// Statics


Context3DState.__meta__ = { obj : { SuppressWarnings : ["checkstyle:FieldDocComment"]}}

// Export

exports.default = Context3DState;