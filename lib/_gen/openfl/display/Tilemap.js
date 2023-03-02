// Class: openfl.display.Tilemap

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;
var $import = require("./../../import_stub").default;
var $extend = require("./../../extend_stub").default;
function openfl_display_ITileContainer() {return require("./../../openfl/display/ITileContainer");}
function openfl_display_DisplayObject() {return require("./../../openfl/display/DisplayObject");}
function openfl_geom_Rectangle() {return require("./../../openfl/geom/Rectangle");}
function openfl__$internal_renderer_canvas_CanvasBitmap() {return require("./../../openfl/_internal/renderer/canvas/CanvasBitmap");}
function openfl__$internal_renderer_canvas_CanvasDisplayObject() {return require("./../../openfl/_internal/renderer/canvas/CanvasDisplayObject");}
function openfl__$internal_renderer_canvas_CanvasTilemap() {return require("./../../openfl/_internal/renderer/canvas/CanvasTilemap");}
function openfl__$internal_renderer_dom_DOMBitmap() {return require("./../../openfl/_internal/renderer/dom/DOMBitmap");}
function openfl__$internal_renderer_dom_DOMDisplayObject() {return require("./../../openfl/_internal/renderer/dom/DOMDisplayObject");}
function openfl__$internal_renderer_dom_DOMTilemap() {return require("./../../openfl/_internal/renderer/dom/DOMTilemap");}
function openfl__$internal_renderer_flash_FlashTilemap() {return require("./../../openfl/_internal/renderer/flash/FlashTilemap");}
function openfl__$internal_renderer_context3D_Context3DBitmap() {return require("./../../openfl/_internal/renderer/context3D/Context3DBitmap");}
function openfl__$internal_renderer_context3D_Context3DDisplayObject() {return require("./../../openfl/_internal/renderer/context3D/Context3DDisplayObject");}
function openfl__$internal_renderer_context3D_Context3DTilemap() {return require("./../../openfl/_internal/renderer/context3D/Context3DTilemap");}
function Std() {return require("./../../Std");}
function openfl_display_TileContainer() {return require("./../../openfl/display/TileContainer");}

// Constructor

var Tilemap = function(width,height,tileset,smoothing) {
	if(smoothing == null) {
		smoothing = true;
	}
	(openfl_display_DisplayObject().default).call(this);
	this.__tileset = tileset;
	this.smoothing = smoothing;
	this.tileAlphaEnabled = true;
	this.tileBlendModeEnabled = true;
	this.tileColorTransformEnabled = true;
	this.__group = new (openfl_display_TileContainer().default)();
	this.__group.set_tileset(tileset);
	this.__width = width;
	this.__height = height;
}

// Meta

Tilemap.__name__ = "openfl.display.Tilemap";
Tilemap.__isInterface__ = false;
Tilemap.__interfaces__ = [(openfl_display_ITileContainer().default)];
Tilemap.__super__ = (openfl_display_DisplayObject().default);
Tilemap.prototype = $extend((openfl_display_DisplayObject().default).prototype, {
	addTile: function(tile) {
		return this.__group.addTile(tile);
	},
	addTileAt: function(tile,index) {
		return this.__group.addTileAt(tile,index);
	},
	addTiles: function(tiles) {
		return this.__group.addTiles(tiles);
	},
	contains: function(tile) {
		return this.__group.contains(tile);
	},
	getTileAt: function(index) {
		return this.__group.getTileAt(index);
	},
	getTileIndex: function(tile) {
		return this.__group.getTileIndex(tile);
	},
	getTiles: function() {
		return this.__group.clone();
	},
	removeTile: function(tile) {
		return this.__group.removeTile(tile);
	},
	removeTileAt: function(index) {
		return this.__group.removeTileAt(index);
	},
	removeTiles: function(beginIndex,endIndex) {
		if(endIndex == null) {
			endIndex = 2147483647;
		}
		if(beginIndex == null) {
			beginIndex = 0;
		}
		this.__group.removeTiles(beginIndex,endIndex);
		return;
	},
	setTileIndex: function(tile,index) {
		this.__group.setTileIndex(tile,index);
	},
	setTiles: function(group) {
		var _g = 0;
		var _g1 = this.__group.__tiles;
		while(_g < _g1.length) {
			var tile = _g1[_g];
			++_g;
			this.removeTile(tile);
		}
		var _g2 = 0;
		var _g3 = group.__tiles;
		while(_g2 < _g3.length) {
			var tile1 = _g3[_g2];
			++_g2;
			this.addTile(tile1);
		}
	},
	sortTiles: function(compareFunction) {
		this.__group.sortTiles(compareFunction);
	},
	swapTiles: function(tile1,tile2) {
		this.__group.swapTiles(tile1,tile2);
	},
	swapTilesAt: function(index1,index2) {
		this.__group.swapTilesAt(index1,index2);
	},
	__enterFrame: function(deltaTime) {
		if(this.__group.__dirty) {
			this.__setRenderDirty();
		}
	},
	__getBounds: function(rect,matrix) {
		var bounds = (openfl_geom_Rectangle().default).__pool.get();
		bounds.setTo(0,0,this.__width,this.__height);
		bounds.__transform(bounds,matrix);
		rect.__expand(bounds.x,bounds.y,bounds.width,bounds.height);
		(openfl_geom_Rectangle().default).__pool.release(bounds);
	},
	__hitTest: function(x,y,shapeFlag,stack,interactiveOnly,hitObject) {
		if(!hitObject.get_visible() || this.__isMask) {
			return false;
		}
		if(this.get_mask() != null && !this.get_mask().__hitTestMask(x,y)) {
			return false;
		}
		this.__getRenderTransform();
		var px = this.__renderTransform.__transformInverseX(x,y);
		var py = this.__renderTransform.__transformInverseY(x,y);
		if(px > 0 && py > 0 && px <= this.__width && py <= this.__height) {
			if(stack != null && !interactiveOnly) {
				stack.push(hitObject);
			}
			return true;
		}
		return false;
	},
	__renderCairo: function(renderer) {
	},
	__renderCanvas: function(renderer) {
		this.__updateCacheBitmap(renderer,false);
		if(this.__cacheBitmap != null && !this.__isCacheBitmapRender) {
			(openfl__$internal_renderer_canvas_CanvasBitmap().default).render(this.__cacheBitmap,renderer);
		} else {
			(openfl__$internal_renderer_canvas_CanvasDisplayObject().default).render(this,renderer);
			(openfl__$internal_renderer_canvas_CanvasTilemap().default).render(this,renderer);
		}
		this.__renderEvent(renderer);
	},
	__renderDOM: function(renderer) {
		this.__updateCacheBitmap(renderer,false);
		if(this.__cacheBitmap != null && !this.__isCacheBitmapRender) {
			this.__renderDOMClear(renderer);
			this.__cacheBitmap.stage = this.stage;
			(openfl__$internal_renderer_dom_DOMBitmap().default).render(this.__cacheBitmap,renderer);
		} else {
			(openfl__$internal_renderer_dom_DOMDisplayObject().default).render(this,renderer);
			(openfl__$internal_renderer_dom_DOMTilemap().default).render(this,renderer);
		}
		this.__renderEvent(renderer);
	},
	__renderDOMClear: function(renderer) {
		(openfl__$internal_renderer_dom_DOMTilemap().default).clear(this,renderer);
	},
	__renderFlash: function() {
		(openfl__$internal_renderer_flash_FlashTilemap().default).render(this);
	},
	__renderGL: function(renderer) {
		this.__updateCacheBitmap(renderer,false);
		if(this.__cacheBitmap != null && !this.__isCacheBitmapRender) {
			(openfl__$internal_renderer_context3D_Context3DBitmap().default).render(this.__cacheBitmap,renderer);
		} else {
			(openfl__$internal_renderer_context3D_Context3DDisplayObject().default).render(this,renderer);
			(openfl__$internal_renderer_context3D_Context3DTilemap().default).render(this,renderer);
		}
		this.__renderEvent(renderer);
	},
	__renderGLMask: function(renderer) {
		(openfl__$internal_renderer_context3D_Context3DDisplayObject().default).renderMask(this,renderer);
		(openfl__$internal_renderer_context3D_Context3DTilemap().default).renderMask(this,renderer);
	},
	__shouldCacheHardware: function(value) {
		return true;
	},
	__updateCacheBitmap: function(renderer,force) {
		if(this.__filters == null && renderer.__type == "opengl" && this.__cacheBitmap == null) {
			return false;
		}
		return (openfl_display_DisplayObject().default).prototype.__updateCacheBitmap.call(this,renderer,force);
	},
	get_height: function() {
		return this.__height * Math.abs(this.get_scaleY());
	},
	set_height: function(value) {
		this.__height = (Std().default).int(value);
		return this.__height * Math.abs(this.get_scaleY());
	},
	get_numTiles: function() {
		return this.__group.__length;
	},
	get_tileset: function() {
		return this.__tileset;
	},
	set_tileset: function(value) {
		if(value != this.__tileset) {
			this.__tileset = value;
			this.__group.set_tileset(value);
			this.__group.__dirty = true;
			this.__setRenderDirty();
		}
		return value;
	},
	get_width: function() {
		return this.__width * Math.abs(this.__scaleX);
	},
	set_width: function(value) {
		this.__width = (Std().default).int(value);
		return this.__width * Math.abs(this.__scaleX);
	}
});
Tilemap.prototype.__class__ = Tilemap.prototype.constructor = $hxClasses["openfl.display.Tilemap"] = Tilemap;

// Init

Object.defineProperties(Tilemap.prototype,{ numTiles : { get : function () { return this.get_numTiles (); }}, tileset : { get : function () { return this.get_tileset (); }, set : function (v) { return this.set_tileset (v); }}});

// Statics




// Export

exports.default = Tilemap;