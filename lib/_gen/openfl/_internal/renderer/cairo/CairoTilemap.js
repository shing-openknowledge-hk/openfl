// Class: openfl._internal.renderer.cairo.CairoTilemap

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../../hxClasses_stub").default;
var $hxEnums = require("./../../../../hxEnums_stub").default;
var $import = require("./../../../../import_stub").default;
function openfl_geom_Rectangle() {return require("./../../../../openfl/geom/Rectangle");}
function lime_math_Matrix3() {return require("./../../../../lime/math/Matrix3");}
function openfl_geom_Matrix() {return require("./../../../../openfl/geom/Matrix");}
function lime_graphics_cairo__$CairoPattern_CairoPattern_$Impl_$() {return require("./../../../../lime/graphics/cairo/_CairoPattern/CairoPattern_Impl_");}

// Constructor

var CairoTilemap = function(){}

// Meta

CairoTilemap.__name__ = "openfl._internal.renderer.cairo.CairoTilemap";
CairoTilemap.__isInterface__ = false;
CairoTilemap.prototype = {
	
};
CairoTilemap.prototype.__class__ = CairoTilemap.prototype.constructor = $hxClasses["openfl._internal.renderer.cairo.CairoTilemap"] = CairoTilemap;

// Init



// Statics

CairoTilemap.render = function(tilemap,renderer) {
	if(!tilemap.__renderable || tilemap.__group.__tiles.length == 0) {
		return;
	}
	var alpha = renderer.__getAlpha(tilemap.__worldAlpha);
	if(alpha <= 0) {
		return;
	}
	renderer.__setBlendMode(tilemap.__worldBlendMode);
	renderer.__pushMaskObject(tilemap);
	var rect = (openfl_geom_Rectangle().default).__pool.get();
	rect.setTo(0,0,tilemap.__width,tilemap.__height);
	renderer.__pushMaskRect(rect,tilemap.__renderTransform);
	CairoTilemap.renderTileContainer(tilemap.__group,renderer,tilemap.__renderTransform,tilemap.__tileset,renderer.__allowSmoothing && tilemap.smoothing,tilemap.tileAlphaEnabled,alpha,tilemap.tileBlendModeEnabled,tilemap.__worldBlendMode,null,null,null,rect,new (lime_math_Matrix3().default)());
	renderer.__popMaskRect();
	renderer.__popMaskObject(tilemap);
	(openfl_geom_Rectangle().default).__pool.release(rect);
}
CairoTilemap.renderTileContainer = function(group,renderer,parentTransform,defaultTileset,smooth,alphaEnabled,worldAlpha,blendModeEnabled,defaultBlendMode,cacheBitmapData,surface,pattern,rect,matrix) {
	var cairo = renderer.cairo;
	var tileTransform = (openfl_geom_Matrix().default).__pool.get();
	var tiles = group.__tiles;
	var tile;
	var tileset;
	var alpha;
	var visible;
	var blendMode = null;
	var id;
	var tileData;
	var tileRect;
	var bitmapData;
	var _g = 0;
	while(_g < tiles.length) {
		var tile1 = tiles[_g];
		++_g;
		tileTransform.setTo(1,0,0,1,-tile1.get_originX(),-tile1.get_originY());
		tileTransform.concat(tile1.get_matrix());
		tileTransform.concat(parentTransform);
		tileset = tile1.get_tileset() != null ? tile1.get_tileset() : defaultTileset;
		alpha = tile1.get_alpha() * worldAlpha;
		visible = tile1.get_visible();
		if(!visible || alpha <= 0) {
			continue;
		}
		if(!alphaEnabled) {
			alpha = 1;
		}
		if(blendModeEnabled) {
			blendMode = tile1.__blendMode != null ? tile1.__blendMode : defaultBlendMode;
		}
		if(tile1.__length > 0) {
			CairoTilemap.renderTileContainer(tile1,renderer,tileTransform,tileset,smooth,alphaEnabled,alpha,blendModeEnabled,blendMode,cacheBitmapData,surface,pattern,rect,matrix);
		} else {
			if(tileset == null) {
				continue;
			}
			id = tile1.get_id();
			if(id == -1) {
				tileRect = tile1.__rect;
				if(tileRect == null || tileRect.width <= 0 || tileRect.height <= 0) {
					continue;
				}
			} else {
				tileData = tileset.__data[id];
				if(tileData == null) {
					continue;
				}
				rect.setTo(tileData.x,tileData.y,tileData.width,tileData.height);
				tileRect = rect;
			}
			bitmapData = tileset.__bitmapData;
			if(bitmapData == null) {
				continue;
			}
			if(bitmapData != cacheBitmapData) {
				surface = bitmapData.getSurface();
				pattern = (lime_graphics_cairo__$CairoPattern_CairoPattern_$Impl_$().default).createForSurface(surface);
				(lime_graphics_cairo__$CairoPattern_CairoPattern_$Impl_$().default).set_filter(pattern,smooth ? 1 : 3);
				cairo.set_source(pattern);
				cacheBitmapData = bitmapData;
			}
			if(blendModeEnabled) {
				renderer.__setBlendMode(blendMode);
			}
			renderer.applyMatrix(tileTransform,cairo);
			matrix.tx = tileRect.x;
			matrix.ty = tileRect.y;
			(lime_graphics_cairo__$CairoPattern_CairoPattern_$Impl_$().default).set_matrix(pattern,matrix);
			cairo.set_source(pattern);
			cairo.save();
			cairo.newPath();
			cairo.rectangle(0,0,tileRect.width,tileRect.height);
			cairo.clip();
			if(alpha == 1) {
				cairo.paint();
			} else {
				cairo.paintWithAlpha(alpha);
			}
			cairo.restore();
		}
	}
	(openfl_geom_Matrix().default).__pool.release(tileTransform);
}
CairoTilemap.__meta__ = { obj : { SuppressWarnings : ["checkstyle:FieldDocComment"]}, statics : { renderTileContainer : { SuppressWarnings : ["checkstyle:Dynamic"]}}}

// Export

exports.default = CairoTilemap;