// Class: openfl._internal.renderer.context3D.Context3DDisplayObject

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../../hxClasses_stub").default;
var $hxEnums = require("./../../../../hxEnums_stub").default;
var $import = require("./../../../../import_stub").default;
function openfl_geom_Rectangle() {return require("./../../../../openfl/geom/Rectangle");}
function openfl__$internal_renderer_context3D_Context3DShape() {return require("./../../../../openfl/_internal/renderer/context3D/Context3DShape");}

// Constructor

var Context3DDisplayObject = function(){}

// Meta

Context3DDisplayObject.__name__ = "openfl._internal.renderer.context3D.Context3DDisplayObject";
Context3DDisplayObject.__isInterface__ = false;
Context3DDisplayObject.prototype = {
	
};
Context3DDisplayObject.prototype.__class__ = Context3DDisplayObject.prototype.constructor = $hxClasses["openfl._internal.renderer.context3D.Context3DDisplayObject"] = Context3DDisplayObject;

// Init



// Statics

Context3DDisplayObject.render = function(displayObject,renderer) {
	if(displayObject.opaqueBackground == null && displayObject.__graphics == null) {
		return;
	}
	if(!displayObject.__renderable || displayObject.__worldAlpha <= 0) {
		return;
	}
	if(displayObject.opaqueBackground != null && !displayObject.__isCacheBitmapRender && displayObject.get_width() > 0 && displayObject.get_height() > 0) {
		renderer.__setBlendMode(displayObject.__worldBlendMode);
		renderer.__pushMaskObject(displayObject);
		var context = renderer.__context3D;
		var rect = (openfl_geom_Rectangle().default).__pool.get();
		rect.setTo(0,0,displayObject.get_width(),displayObject.get_height());
		renderer.__pushMaskRect(rect,displayObject.__renderTransform);
		var color = displayObject.opaqueBackground;
		context.clear((color >>> 16 & 255) / 255,(color >>> 8 & 255) / 255,(color & 255) / 255,1,0,0,1);
		renderer.__popMaskRect();
		renderer.__popMaskObject(displayObject);
		(openfl_geom_Rectangle().default).__pool.release(rect);
	}
	if(displayObject.__graphics != null) {
		(openfl__$internal_renderer_context3D_Context3DShape().default).render(displayObject,renderer);
	}
}
Context3DDisplayObject.renderMask = function(displayObject,renderer) {
	if(displayObject.opaqueBackground == null && displayObject.__graphics == null) {
		return;
	}
	var tmp = displayObject.opaqueBackground != null && !displayObject.__isCacheBitmapRender && displayObject.get_width() > 0 && displayObject.get_height() > 0;
	if(displayObject.__graphics != null) {
		(openfl__$internal_renderer_context3D_Context3DShape().default).renderMask(displayObject,renderer);
	}
}
Context3DDisplayObject.__meta__ = { obj : { SuppressWarnings : ["checkstyle:FieldDocComment"]}}

// Export

exports.default = Context3DDisplayObject;