// Class: openfl._internal.renderer.dom.DOMBitmap

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../../hxClasses_stub").default;
var $hxEnums = require("./../../../../hxEnums_stub").default;
var $import = require("./../../../../import_stub").default;
function lime__$internal_graphics_ImageCanvasUtil() {return require("./../../../../lime/_internal/graphics/ImageCanvasUtil");}

// Constructor

var DOMBitmap = function(){}

// Meta

DOMBitmap.__name__ = "openfl._internal.renderer.dom.DOMBitmap";
DOMBitmap.__isInterface__ = false;
DOMBitmap.prototype = {
	
};
DOMBitmap.prototype.__class__ = DOMBitmap.prototype.constructor = $hxClasses["openfl._internal.renderer.dom.DOMBitmap"] = DOMBitmap;

// Init



// Statics

DOMBitmap.clear = function(bitmap,renderer) {
	if(bitmap.__image != null) {
		renderer.element.removeChild(bitmap.__image);
		bitmap.__image = null;
		bitmap.__style = null;
	}
	if(bitmap.__canvas != null) {
		renderer.element.removeChild(bitmap.__canvas);
		bitmap.__canvas = null;
		bitmap.__style = null;
	}
}
DOMBitmap.render = function(bitmap,renderer) {
	if(bitmap.stage != null && bitmap.__worldVisible && bitmap.__renderable && bitmap.__bitmapData != null && bitmap.__bitmapData.__isValid && bitmap.__bitmapData.readable) {
		renderer.__pushMaskObject(bitmap);
		if(bitmap.__bitmapData.image.buffer.__srcImage != null) {
			DOMBitmap.renderImage(bitmap,renderer);
		} else {
			DOMBitmap.renderCanvas(bitmap,renderer);
		}
		renderer.__popMaskObject(bitmap);
	} else {
		DOMBitmap.clear(bitmap,renderer);
	}
}
DOMBitmap.renderCanvas = function(bitmap,renderer) {
	if(bitmap.__image != null) {
		renderer.element.removeChild(bitmap.__image);
		bitmap.__image = null;
	}
	if(bitmap.__canvas == null) {
		bitmap.__canvas = window.document.createElement("canvas");
		bitmap.__context = bitmap.__canvas.getContext("2d");
		bitmap.__imageVersion = -1;
		if(!renderer.__allowSmoothing || !bitmap.smoothing) {
			bitmap.__context.imageSmoothingEnabled = false;
		}
		renderer.__initializeElement(bitmap,bitmap.__canvas);
	}
	if(bitmap.__imageVersion != bitmap.__bitmapData.image.version) {
		(lime__$internal_graphics_ImageCanvasUtil().default).convertToCanvas(bitmap.__bitmapData.image);
		bitmap.__canvas.width = bitmap.__bitmapData.width + 1;
		bitmap.__canvas.width = bitmap.__bitmapData.width;
		bitmap.__canvas.height = bitmap.__bitmapData.height;
		bitmap.__context.drawImage(bitmap.__bitmapData.image.buffer.__srcCanvas,0,0);
		bitmap.__imageVersion = bitmap.__bitmapData.image.version;
	}
	renderer.__updateClip(bitmap);
	renderer.__applyStyle(bitmap,true,true,true);
}
DOMBitmap.renderImage = function(bitmap,renderer) {
	if(bitmap.__canvas != null) {
		renderer.element.removeChild(bitmap.__canvas);
		bitmap.__canvas = null;
	}
	if(bitmap.__image == null) {
		bitmap.__image = window.document.createElement("img");
		bitmap.__image.crossOrigin = "Anonymous";
		bitmap.__image.src = bitmap.__bitmapData.image.buffer.__srcImage.src;
		renderer.__initializeElement(bitmap,bitmap.__image);
	}
	renderer.__updateClip(bitmap);
	renderer.__applyStyle(bitmap,true,true,true);
}
DOMBitmap.__meta__ = { obj : { SuppressWarnings : ["checkstyle:FieldDocComment"]}}

// Export

exports.default = DOMBitmap;