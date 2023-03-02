// Class: openfl._internal.renderer.cairo.CairoBitmap

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../../hxClasses_stub").default;
var $hxEnums = require("./../../../../hxEnums_stub").default;
var $import = require("./../../../../import_stub").default;
function lime_graphics_cairo__$CairoPattern_CairoPattern_$Impl_$() {return require("./../../../../lime/graphics/cairo/_CairoPattern/CairoPattern_Impl_");}

// Constructor

var CairoBitmap = function(){}

// Meta

CairoBitmap.__name__ = "openfl._internal.renderer.cairo.CairoBitmap";
CairoBitmap.__isInterface__ = false;
CairoBitmap.prototype = {
	
};
CairoBitmap.prototype.__class__ = CairoBitmap.prototype.constructor = $hxClasses["openfl._internal.renderer.cairo.CairoBitmap"] = CairoBitmap;

// Init



// Statics

CairoBitmap.render = function(bitmap,renderer) {
	if(!bitmap.__renderable) {
		return;
	}
	var alpha = renderer.__getAlpha(bitmap.__worldAlpha);
	if(alpha > 0 && bitmap.__bitmapData != null && bitmap.__bitmapData.__isValid) {
		var cairo = renderer.cairo;
		renderer.__setBlendMode(bitmap.__worldBlendMode);
		renderer.__pushMaskObject(bitmap);
		renderer.applyMatrix(bitmap.__renderTransform,cairo);
		var surface = bitmap.__bitmapData.getSurface();
		if(surface != null) {
			var pattern = (lime_graphics_cairo__$CairoPattern_CairoPattern_$Impl_$().default).createForSurface(surface);
			(lime_graphics_cairo__$CairoPattern_CairoPattern_$Impl_$().default).set_filter(pattern,renderer.__allowSmoothing && bitmap.smoothing ? 1 : 3);
			cairo.set_source(pattern);
			if(alpha == 1) {
				cairo.paint();
			} else {
				cairo.paintWithAlpha(alpha);
			}
		}
		renderer.__popMaskObject(bitmap);
		renderer.__setBlendMode("normal");
	}
}
CairoBitmap.__meta__ = { obj : { SuppressWarnings : ["checkstyle:FieldDocComment"]}}

// Export

exports.default = CairoBitmap;