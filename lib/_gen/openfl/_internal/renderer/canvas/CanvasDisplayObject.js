// Class: openfl._internal.renderer.canvas.CanvasDisplayObject

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../../hxClasses_stub").default;
var $hxEnums = require("./../../../../hxEnums_stub").default;
var $import = require("./../../../../import_stub").default;
function openfl__$internal_renderer_canvas_CanvasShape() {return require("./../../../../openfl/_internal/renderer/canvas/CanvasShape");}

// Constructor

var CanvasDisplayObject = function(){}

// Meta

CanvasDisplayObject.__name__ = "openfl._internal.renderer.canvas.CanvasDisplayObject";
CanvasDisplayObject.__isInterface__ = false;
CanvasDisplayObject.prototype = {
	
};
CanvasDisplayObject.prototype.__class__ = CanvasDisplayObject.prototype.constructor = $hxClasses["openfl._internal.renderer.canvas.CanvasDisplayObject"] = CanvasDisplayObject;

// Init



// Statics

CanvasDisplayObject.render = function(displayObject,renderer) {
	if(displayObject.opaqueBackground == null && displayObject.__graphics == null) {
		return;
	}
	if(!displayObject.__renderable) {
		return;
	}
	var alpha = renderer.__getAlpha(displayObject.__worldAlpha);
	if(alpha <= 0) {
		return;
	}
	if(displayObject.opaqueBackground != null && !displayObject.__isCacheBitmapRender && displayObject.get_width() > 0 && displayObject.get_height() > 0) {
		renderer.__setBlendMode(displayObject.__worldBlendMode);
		renderer.__pushMaskObject(displayObject);
		var context = renderer.context;
		renderer.setTransform(displayObject.__renderTransform,context);
		var color = displayObject.opaqueBackground;
		context.fillStyle = "rgb(" + (color >>> 16 & 255) + "," + (color >>> 8 & 255) + "," + (color & 255) + ")";
		context.fillRect(0,0,displayObject.get_width(),displayObject.get_height());
		renderer.__popMaskObject(displayObject);
	}
	if(displayObject.__graphics != null) {
		(openfl__$internal_renderer_canvas_CanvasShape().default).render(displayObject,renderer);
	}
}
CanvasDisplayObject.__meta__ = { obj : { SuppressWarnings : ["checkstyle:FieldDocComment"]}}

// Export

exports.default = CanvasDisplayObject;