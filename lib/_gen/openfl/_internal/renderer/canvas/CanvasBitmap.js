// Class: openfl._internal.renderer.canvas.CanvasBitmap

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../../hxClasses_stub").default;
var $hxEnums = require("./../../../../hxEnums_stub").default;
var $import = require("./../../../../import_stub").default;
function lime__$internal_graphics_ImageCanvasUtil() {return require("./../../../../lime/_internal/graphics/ImageCanvasUtil");}

// Constructor

var CanvasBitmap = function(){}

// Meta

CanvasBitmap.__name__ = "openfl._internal.renderer.canvas.CanvasBitmap";
CanvasBitmap.__isInterface__ = false;
CanvasBitmap.prototype = {
	
};
CanvasBitmap.prototype.__class__ = CanvasBitmap.prototype.constructor = $hxClasses["openfl._internal.renderer.canvas.CanvasBitmap"] = CanvasBitmap;

// Init



// Statics

CanvasBitmap.render = function(bitmap,renderer) {
	if(!bitmap.__renderable) {
		return;
	}
	var alpha = renderer.__getAlpha(bitmap.__worldAlpha);
	if(alpha > 0 && bitmap.__bitmapData != null && bitmap.__bitmapData.__isValid && bitmap.__bitmapData.readable) {
		var context = renderer.context;
		renderer.__setBlendMode(bitmap.__worldBlendMode);
		renderer.__pushMaskObject(bitmap,false);
		(lime__$internal_graphics_ImageCanvasUtil().default).convertToCanvas(bitmap.__bitmapData.image);
		context.globalAlpha = alpha;
		var scrollRect = bitmap.__scrollRect;
		renderer.setTransform(bitmap.__renderTransform,context);
		if(!renderer.__allowSmoothing || !bitmap.smoothing) {
			context.imageSmoothingEnabled = false;
		}
		if(scrollRect == null) {
			context.drawImage(bitmap.__bitmapData.image.get_src(),0,0,bitmap.__bitmapData.image.width,bitmap.__bitmapData.image.height);
		} else {
			context.drawImage(bitmap.__bitmapData.image.get_src(),scrollRect.x,scrollRect.y,scrollRect.width,scrollRect.height);
		}
		if(!renderer.__allowSmoothing || !bitmap.smoothing) {
			context.imageSmoothingEnabled = true;
		}
		renderer.__popMaskObject(bitmap,false);
	}
}
CanvasBitmap.__meta__ = { obj : { SuppressWarnings : ["checkstyle:FieldDocComment"]}}

// Export

exports.default = CanvasBitmap;