// Class: openfl._internal.renderer.canvas.CanvasTilemap

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../../hxClasses_stub").default;
var $hxEnums = require("./../../../../hxEnums_stub").default;
var $import = require("./../../../../import_stub").default;
function openfl_geom_Rectangle() {return require("./../../../../openfl/geom/Rectangle");}
function openfl_geom_Matrix() {return require("./../../../../openfl/geom/Matrix");}
function lime__$internal_graphics_ImageCanvasUtil() {return require("./../../../../lime/_internal/graphics/ImageCanvasUtil");}

// Constructor

var CanvasTilemap = function(){}

// Meta

CanvasTilemap.__name__ = "openfl._internal.renderer.canvas.CanvasTilemap";
CanvasTilemap.__isInterface__ = false;
CanvasTilemap.prototype = {
	
};
CanvasTilemap.prototype.__class__ = CanvasTilemap.prototype.constructor = $hxClasses["openfl._internal.renderer.canvas.CanvasTilemap"] = CanvasTilemap;

// Init



// Statics

CanvasTilemap.render = function(tilemap,renderer) {
	if(!tilemap.__renderable || tilemap.__group.__tiles.length == 0) {
		return;
	}
	var alpha = renderer.__getAlpha(tilemap.__worldAlpha);
	if(alpha <= 0) {
		return;
	}
	var context = renderer.context;
	renderer.__setBlendMode(tilemap.__worldBlendMode);
	renderer.__pushMaskObject(tilemap);
	var rect = (openfl_geom_Rectangle().default).__pool.get();
	rect.setTo(0,0,tilemap.__width,tilemap.__height);
	renderer.__pushMaskRect(rect,tilemap.__renderTransform);
	if(!renderer.__allowSmoothing || !tilemap.smoothing) {
		context.imageSmoothingEnabled = false;
	}
	CanvasTilemap.renderTileContainer(tilemap.__group,renderer,tilemap.__renderTransform,tilemap.__tileset,renderer.__allowSmoothing && tilemap.smoothing,tilemap.tileAlphaEnabled,alpha,tilemap.tileBlendModeEnabled,tilemap.__worldBlendMode,null,null,rect);
	if(!renderer.__allowSmoothing || !tilemap.smoothing) {
		context.imageSmoothingEnabled = true;
	}
	renderer.__popMaskRect();
	renderer.__popMaskObject(tilemap);
	(openfl_geom_Rectangle().default).__pool.release(rect);
}
CanvasTilemap.renderTileContainer = function(group,renderer,parentTransform,defaultTileset,smooth,alphaEnabled,worldAlpha,blendModeEnabled,defaultBlendMode,cacheBitmapData,source,rect) {
	var context = renderer.context;
	var roundPixels = renderer.__roundPixels;
	var tileTransform = (openfl_geom_Matrix().default).__pool.get();
	var tiles = group.__tiles;
	var length = group.__length;
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
	var _g1 = length;
	while(_g < _g1) {
		var i = _g++;
		tile = tiles[i];
		tileTransform.setTo(1,0,0,1,-tile.get_originX(),-tile.get_originY());
		tileTransform.concat(tile.get_matrix());
		tileTransform.concat(parentTransform);
		if(roundPixels) {
			tileTransform.tx = Math.round(tileTransform.tx);
			tileTransform.ty = Math.round(tileTransform.ty);
		}
		tileset = tile.get_tileset() != null ? tile.get_tileset() : defaultTileset;
		alpha = tile.get_alpha() * worldAlpha;
		visible = tile.get_visible();
		if(!visible || alpha <= 0) {
			continue;
		}
		if(!alphaEnabled) {
			alpha = 1;
		}
		if(blendModeEnabled) {
			blendMode = tile.__blendMode != null ? tile.__blendMode : defaultBlendMode;
		}
		if(tile.__length > 0) {
			CanvasTilemap.renderTileContainer(tile,renderer,tileTransform,tileset,smooth,alphaEnabled,alpha,blendModeEnabled,blendMode,cacheBitmapData,source,rect);
		} else {
			if(tileset == null) {
				continue;
			}
			id = tile.get_id();
			if(id == -1) {
				tileRect = tile.__rect;
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
				if(bitmapData.image.buffer.__srcImage == null) {
					(lime__$internal_graphics_ImageCanvasUtil().default).convertToCanvas(bitmapData.image);
				}
				source = bitmapData.image.get_src();
				cacheBitmapData = bitmapData;
			}
			context.globalAlpha = alpha;
			if(blendModeEnabled) {
				renderer.__setBlendMode(blendMode);
			}
			renderer.setTransform(tileTransform,context);
			context.drawImage(source,tileRect.x,tileRect.y,tileRect.width,tileRect.height,0,0,tileRect.width,tileRect.height);
		}
	}
	(openfl_geom_Matrix().default).__pool.release(tileTransform);
}
CanvasTilemap.__meta__ = { obj : { SuppressWarnings : ["checkstyle:FieldDocComment"]}, statics : { renderTileContainer : { SuppressWarnings : ["checkstyle:Dynamic"]}}}

// Export

exports.default = CanvasTilemap;