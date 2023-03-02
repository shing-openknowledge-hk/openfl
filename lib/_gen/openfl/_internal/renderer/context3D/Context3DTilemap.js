// Class: openfl._internal.renderer.context3D.Context3DTilemap

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../../hxClasses_stub").default;
var $hxEnums = require("./../../../../hxEnums_stub").default;
var $import = require("./../../../../import_stub").default;
function openfl_geom_Rectangle() {return require("./../../../../openfl/geom/Rectangle");}
function openfl_geom_Matrix() {return require("./../../../../openfl/geom/Matrix");}
function openfl_geom_ColorTransform() {return require("./../../../../openfl/geom/ColorTransform");}
function Std() {return require("./../../../../Std");}
function openfl__$internal_renderer_context3D_Context3DBuffer() {return require("./../../../../openfl/_internal/renderer/context3D/Context3DBuffer");}
function openfl__$internal_renderer_context3D_Context3DElementType() {return require("./../../../../openfl/_internal/renderer/context3D/Context3DElementType");}

// Constructor

var Context3DTilemap = function(){}

// Meta

Context3DTilemap.__name__ = "openfl._internal.renderer.context3D.Context3DTilemap";
Context3DTilemap.__isInterface__ = false;
Context3DTilemap.prototype = {
	
};
Context3DTilemap.prototype.__class__ = Context3DTilemap.prototype.constructor = $hxClasses["openfl._internal.renderer.context3D.Context3DTilemap"] = Context3DTilemap;

// Init



// Statics

Context3DTilemap.buildBuffer = function(tilemap,renderer) {
	if(!tilemap.__renderable || tilemap.__group.__tiles.length == 0 || tilemap.__worldAlpha <= 0) {
		return;
	}
	Context3DTilemap.numTiles = 0;
	Context3DTilemap.vertexBufferData = tilemap.__buffer != null ? tilemap.__buffer.vertexBufferData : null;
	Context3DTilemap.vertexDataPosition = 0;
	var rect = (openfl_geom_Rectangle().default).__pool.get();
	var matrix = (openfl_geom_Matrix().default).__pool.get();
	var parentTransform = (openfl_geom_Matrix().default).__pool.get();
	Context3DTilemap.dataPerVertex = 4;
	if(tilemap.tileAlphaEnabled) {
		Context3DTilemap.dataPerVertex++;
	}
	if(tilemap.tileColorTransformEnabled) {
		Context3DTilemap.dataPerVertex += 8;
	}
	Context3DTilemap.buildBufferTileContainer(tilemap,tilemap.__group,renderer,parentTransform,tilemap.__tileset,tilemap.tileAlphaEnabled,tilemap.__worldAlpha,tilemap.tileColorTransformEnabled,tilemap.__worldColorTransform,null,rect,matrix);
	tilemap.__buffer.flushVertexBufferData();
	(openfl_geom_Rectangle().default).__pool.release(rect);
	(openfl_geom_Matrix().default).__pool.release(matrix);
	(openfl_geom_Matrix().default).__pool.release(parentTransform);
}
Context3DTilemap.buildBufferTileContainer = function(tilemap,group,renderer,parentTransform,defaultTileset,alphaEnabled,worldAlpha,colorTransformEnabled,defaultColorTransform,cacheBitmapData,rect,matrix) {
	var tileTransform = (openfl_geom_Matrix().default).__pool.get();
	var roundPixels = renderer.__roundPixels;
	var tiles = group.__tiles;
	var length = group.__length;
	Context3DTilemap.resizeBuffer(tilemap,Context3DTilemap.numTiles + length);
	var tile;
	var tileset;
	var alpha;
	var visible;
	var colorTransform = null;
	var id;
	var tileData;
	var tileRect;
	var bitmapData;
	var tileWidth;
	var tileHeight;
	var uvX;
	var uvY;
	var uvHeight;
	var uvWidth;
	var vertexOffset;
	var x;
	var y;
	var x2;
	var y2;
	var x3;
	var y3;
	var x4;
	var y4;
	var alphaPosition = 4;
	var ctPosition = alphaEnabled ? 5 : 4;
	var _g = 0;
	while(_g < tiles.length) {
		var tile1 = tiles[_g];
		++_g;
		tileTransform.setTo(1,0,0,1,-tile1.get_originX(),-tile1.get_originY());
		tileTransform.concat(tile1.get_matrix());
		tileTransform.concat(parentTransform);
		if(roundPixels) {
			tileTransform.tx = Math.round(tileTransform.tx);
			tileTransform.ty = Math.round(tileTransform.ty);
		}
		tileset = tile1.get_tileset() != null ? tile1.get_tileset() : defaultTileset;
		alpha = tile1.get_alpha() * worldAlpha;
		visible = tile1.get_visible();
		tile1.__dirty = false;
		if(!visible || alpha <= 0) {
			continue;
		}
		if(colorTransformEnabled) {
			if(tile1.get_colorTransform() != null) {
				if(defaultColorTransform == null) {
					colorTransform = tile1.get_colorTransform();
				} else {
					if(Context3DTilemap.cacheColorTransform == null) {
						Context3DTilemap.cacheColorTransform = new (openfl_geom_ColorTransform().default)();
					}
					colorTransform = Context3DTilemap.cacheColorTransform;
					colorTransform.redMultiplier = defaultColorTransform.redMultiplier * tile1.get_colorTransform().redMultiplier;
					colorTransform.greenMultiplier = defaultColorTransform.greenMultiplier * tile1.get_colorTransform().greenMultiplier;
					colorTransform.blueMultiplier = defaultColorTransform.blueMultiplier * tile1.get_colorTransform().blueMultiplier;
					colorTransform.alphaMultiplier = defaultColorTransform.alphaMultiplier * tile1.get_colorTransform().alphaMultiplier;
					colorTransform.redOffset = defaultColorTransform.redOffset + tile1.get_colorTransform().redOffset;
					colorTransform.greenOffset = defaultColorTransform.greenOffset + tile1.get_colorTransform().greenOffset;
					colorTransform.blueOffset = defaultColorTransform.blueOffset + tile1.get_colorTransform().blueOffset;
					colorTransform.alphaOffset = defaultColorTransform.alphaOffset + tile1.get_colorTransform().alphaOffset;
				}
			} else {
				colorTransform = defaultColorTransform;
			}
		}
		if(!alphaEnabled) {
			alpha = 1;
		}
		if(tile1.__length > 0) {
			Context3DTilemap.buildBufferTileContainer(tilemap,tile1,renderer,tileTransform,tileset,alphaEnabled,alpha,colorTransformEnabled,colorTransform,cacheBitmapData,rect,matrix);
		} else {
			if(tileset == null) {
				continue;
			}
			id = tile1.get_id();
			bitmapData = tileset.__bitmapData;
			if(bitmapData == null) {
				continue;
			}
			if(id == -1) {
				tileRect = tile1.__rect;
				if(tileRect == null || tileRect.width <= 0 || tileRect.height <= 0) {
					continue;
				}
				uvX = tileRect.x / bitmapData.width;
				uvY = tileRect.y / bitmapData.height;
				uvWidth = tileRect.get_right() / bitmapData.width;
				uvHeight = tileRect.get_bottom() / bitmapData.height;
			} else {
				tileData = tileset.__data[id];
				if(tileData == null) {
					continue;
				}
				rect.setTo(tileData.x,tileData.y,tileData.width,tileData.height);
				tileRect = rect;
				uvX = tileData.__uvX;
				uvY = tileData.__uvY;
				uvWidth = tileData.__uvWidth;
				uvHeight = tileData.__uvHeight;
			}
			tileWidth = tileRect.width;
			tileHeight = tileRect.height;
			x = tileTransform.__transformX(0,0);
			y = tileTransform.__transformY(0,0);
			x2 = tileTransform.__transformX(tileWidth,0);
			y2 = tileTransform.__transformY(tileWidth,0);
			x3 = tileTransform.__transformX(0,tileHeight);
			y3 = tileTransform.__transformY(0,tileHeight);
			x4 = tileTransform.__transformX(tileWidth,tileHeight);
			y4 = tileTransform.__transformY(tileWidth,tileHeight);
			vertexOffset = Context3DTilemap.vertexDataPosition;
			Context3DTilemap.vertexBufferData[vertexOffset] = x;
			Context3DTilemap.vertexBufferData[vertexOffset + 1] = y;
			Context3DTilemap.vertexBufferData[vertexOffset + 2] = uvX;
			Context3DTilemap.vertexBufferData[vertexOffset + 3] = uvY;
			Context3DTilemap.vertexBufferData[vertexOffset + Context3DTilemap.dataPerVertex] = x2;
			Context3DTilemap.vertexBufferData[vertexOffset + Context3DTilemap.dataPerVertex + 1] = y2;
			Context3DTilemap.vertexBufferData[vertexOffset + Context3DTilemap.dataPerVertex + 2] = uvWidth;
			Context3DTilemap.vertexBufferData[vertexOffset + Context3DTilemap.dataPerVertex + 3] = uvY;
			Context3DTilemap.vertexBufferData[vertexOffset + Context3DTilemap.dataPerVertex * 2] = x3;
			Context3DTilemap.vertexBufferData[vertexOffset + Context3DTilemap.dataPerVertex * 2 + 1] = y3;
			Context3DTilemap.vertexBufferData[vertexOffset + Context3DTilemap.dataPerVertex * 2 + 2] = uvX;
			Context3DTilemap.vertexBufferData[vertexOffset + Context3DTilemap.dataPerVertex * 2 + 3] = uvHeight;
			Context3DTilemap.vertexBufferData[vertexOffset + Context3DTilemap.dataPerVertex * 3] = x4;
			Context3DTilemap.vertexBufferData[vertexOffset + Context3DTilemap.dataPerVertex * 3 + 1] = y4;
			Context3DTilemap.vertexBufferData[vertexOffset + Context3DTilemap.dataPerVertex * 3 + 2] = uvWidth;
			Context3DTilemap.vertexBufferData[vertexOffset + Context3DTilemap.dataPerVertex * 3 + 3] = uvHeight;
			if(alphaEnabled) {
				Context3DTilemap.vertexBufferData[vertexOffset + Context3DTilemap.dataPerVertex * 0 + alphaPosition] = alpha;
				Context3DTilemap.vertexBufferData[vertexOffset + Context3DTilemap.dataPerVertex + alphaPosition] = alpha;
				Context3DTilemap.vertexBufferData[vertexOffset + Context3DTilemap.dataPerVertex * 2 + alphaPosition] = alpha;
				Context3DTilemap.vertexBufferData[vertexOffset + Context3DTilemap.dataPerVertex * 3 + alphaPosition] = alpha;
			}
			if(colorTransformEnabled) {
				if(colorTransform != null) {
					var _g1 = 0;
					while(_g1 < 4) {
						var i = _g1++;
						Context3DTilemap.vertexBufferData[vertexOffset + Context3DTilemap.dataPerVertex * i + ctPosition] = colorTransform.redMultiplier;
						Context3DTilemap.vertexBufferData[vertexOffset + Context3DTilemap.dataPerVertex * i + ctPosition + 1] = colorTransform.greenMultiplier;
						Context3DTilemap.vertexBufferData[vertexOffset + Context3DTilemap.dataPerVertex * i + ctPosition + 2] = colorTransform.blueMultiplier;
						Context3DTilemap.vertexBufferData[vertexOffset + Context3DTilemap.dataPerVertex * i + ctPosition + 3] = colorTransform.alphaMultiplier;
						Context3DTilemap.vertexBufferData[vertexOffset + Context3DTilemap.dataPerVertex * i + ctPosition + 4] = colorTransform.redOffset;
						Context3DTilemap.vertexBufferData[vertexOffset + Context3DTilemap.dataPerVertex * i + ctPosition + 5] = colorTransform.greenOffset;
						Context3DTilemap.vertexBufferData[vertexOffset + Context3DTilemap.dataPerVertex * i + ctPosition + 6] = colorTransform.blueOffset;
						Context3DTilemap.vertexBufferData[vertexOffset + Context3DTilemap.dataPerVertex * i + ctPosition + 7] = colorTransform.alphaOffset;
					}
				} else {
					var _g2 = 0;
					while(_g2 < 4) {
						var i1 = _g2++;
						Context3DTilemap.vertexBufferData[vertexOffset + Context3DTilemap.dataPerVertex * i1 + ctPosition] = 1;
						Context3DTilemap.vertexBufferData[vertexOffset + Context3DTilemap.dataPerVertex * i1 + ctPosition + 1] = 1;
						Context3DTilemap.vertexBufferData[vertexOffset + Context3DTilemap.dataPerVertex * i1 + ctPosition + 2] = 1;
						Context3DTilemap.vertexBufferData[vertexOffset + Context3DTilemap.dataPerVertex * i1 + ctPosition + 3] = 1;
						Context3DTilemap.vertexBufferData[vertexOffset + Context3DTilemap.dataPerVertex * i1 + ctPosition + 4] = 0;
						Context3DTilemap.vertexBufferData[vertexOffset + Context3DTilemap.dataPerVertex * i1 + ctPosition + 5] = 0;
						Context3DTilemap.vertexBufferData[vertexOffset + Context3DTilemap.dataPerVertex * i1 + ctPosition + 6] = 0;
						Context3DTilemap.vertexBufferData[vertexOffset + Context3DTilemap.dataPerVertex * i1 + ctPosition + 7] = 0;
					}
				}
			}
			Context3DTilemap.vertexDataPosition += Context3DTilemap.dataPerVertex * 4;
		}
	}
	group.__dirty = false;
	(openfl_geom_Matrix().default).__pool.release(tileTransform);
}
Context3DTilemap.flush = function(tilemap,renderer,blendMode) {
	if(Context3DTilemap.currentShader == null) {
		Context3DTilemap.currentShader = renderer.__defaultDisplayShader;
	}
	if(Context3DTilemap.bufferPosition > Context3DTilemap.lastFlushedPosition && Context3DTilemap.currentBitmapData != null && Context3DTilemap.currentShader != null) {
		var shader = renderer.__initDisplayShader(Context3DTilemap.currentShader);
		renderer.setShader(shader);
		renderer.applyBitmapData(Context3DTilemap.currentBitmapData,tilemap.smoothing);
		renderer.applyMatrix(renderer.__getMatrix(tilemap.__renderTransform,"auto"));
		if(tilemap.tileAlphaEnabled) {
			renderer.useAlphaArray();
		} else {
			renderer.applyAlpha(tilemap.__worldAlpha);
		}
		if(tilemap.tileBlendModeEnabled) {
			renderer.__setBlendMode(blendMode);
		}
		if(tilemap.tileColorTransformEnabled) {
			renderer.applyHasColorTransform(true);
			renderer.useColorTransformArray();
		} else {
			renderer.applyColorTransform(tilemap.__worldColorTransform);
		}
		renderer.updateShader();
		var vertexBuffer = tilemap.__buffer.vertexBuffer;
		var vertexBufferPosition = Context3DTilemap.lastFlushedPosition * Context3DTilemap.dataPerVertex * 4;
		var length = Context3DTilemap.bufferPosition - Context3DTilemap.lastFlushedPosition;
		while(Context3DTilemap.lastFlushedPosition < Context3DTilemap.bufferPosition) {
			length = (Std().default).int(Math.min(Context3DTilemap.bufferPosition - Context3DTilemap.lastFlushedPosition,Context3DTilemap.context.__quadIndexBufferElements));
			if(length <= 0) {
				break;
			}
			if(shader.__position != null) {
				Context3DTilemap.context.setVertexBufferAt(shader.__position.index,vertexBuffer,vertexBufferPosition,"float2");
			}
			if(shader.__textureCoord != null) {
				Context3DTilemap.context.setVertexBufferAt(shader.__textureCoord.index,vertexBuffer,vertexBufferPosition + 2,"float2");
			}
			if(tilemap.tileAlphaEnabled) {
				if(shader.__alpha != null) {
					Context3DTilemap.context.setVertexBufferAt(shader.__alpha.index,vertexBuffer,vertexBufferPosition + 4,"float1");
				}
			}
			if(tilemap.tileColorTransformEnabled) {
				var position = tilemap.tileAlphaEnabled ? 5 : 4;
				if(shader.__colorMultiplier != null) {
					Context3DTilemap.context.setVertexBufferAt(shader.__colorMultiplier.index,vertexBuffer,vertexBufferPosition + position,"float4");
				}
				if(shader.__colorOffset != null) {
					Context3DTilemap.context.setVertexBufferAt(shader.__colorOffset.index,vertexBuffer,vertexBufferPosition + position + 4,"float4");
				}
			}
			Context3DTilemap.context.drawTriangles(Context3DTilemap.context.__quadIndexBuffer,0,length * 2);
			Context3DTilemap.lastFlushedPosition += length;
		}
		renderer.__clearShader();
	}
	Context3DTilemap.lastUsedBitmapData = Context3DTilemap.currentBitmapData;
	Context3DTilemap.lastUsedShader = Context3DTilemap.currentShader;
}
Context3DTilemap.render = function(tilemap,renderer) {
	if(!tilemap.__renderable || tilemap.__worldAlpha <= 0) {
		return;
	}
	Context3DTilemap.context = renderer.__context3D;
	Context3DTilemap.buildBuffer(tilemap,renderer);
	if(Context3DTilemap.numTiles == 0) {
		return;
	}
	Context3DTilemap.bufferPosition = 0;
	Context3DTilemap.lastFlushedPosition = 0;
	Context3DTilemap.lastUsedBitmapData = null;
	Context3DTilemap.lastUsedShader = null;
	Context3DTilemap.currentBitmapData = null;
	Context3DTilemap.currentShader = null;
	Context3DTilemap.currentBlendMode = tilemap.__worldBlendMode;
	if(!tilemap.tileBlendModeEnabled) {
		renderer.__setBlendMode(Context3DTilemap.currentBlendMode);
	}
	renderer.__pushMaskObject(tilemap);
	var rect = (openfl_geom_Rectangle().default).__pool.get();
	rect.setTo(0,0,tilemap.__width,tilemap.__height);
	renderer.__pushMaskRect(rect,tilemap.__renderTransform);
	Context3DTilemap.renderTileContainer(tilemap,renderer,tilemap.__group,tilemap.__worldShader,tilemap.__tileset,tilemap.__worldAlpha,tilemap.tileBlendModeEnabled,Context3DTilemap.currentBlendMode,null);
	Context3DTilemap.flush(tilemap,renderer,Context3DTilemap.currentBlendMode);
	renderer.__popMaskRect();
	renderer.__popMaskObject(tilemap);
	(openfl_geom_Rectangle().default).__pool.release(rect);
}
Context3DTilemap.renderTileContainer = function(tilemap,renderer,group,defaultShader,defaultTileset,worldAlpha,blendModeEnabled,defaultBlendMode,cacheBitmapData) {
	var tiles = group.__tiles;
	var tile;
	var tileset;
	var alpha;
	var visible;
	var blendMode = null;
	var id;
	var tileData;
	var tileRect;
	var shader;
	var bitmapData;
	var _g = 0;
	while(_g < tiles.length) {
		var tile1 = tiles[_g];
		++_g;
		tileset = tile1.get_tileset() != null ? tile1.get_tileset() : defaultTileset;
		alpha = tile1.get_alpha() * worldAlpha;
		visible = tile1.get_visible();
		if(!visible || alpha <= 0) {
			continue;
		}
		shader = tile1.get_shader() != null ? tile1.get_shader() : defaultShader;
		if(blendModeEnabled) {
			blendMode = tile1.__blendMode != null ? tile1.__blendMode : defaultBlendMode;
		}
		if(tile1.__length > 0) {
			Context3DTilemap.renderTileContainer(tilemap,renderer,tile1,shader,tileset,alpha,blendModeEnabled,blendMode,cacheBitmapData);
		} else {
			if(tileset == null) {
				continue;
			}
			id = tile1.get_id();
			bitmapData = tileset.__bitmapData;
			if(bitmapData == null) {
				continue;
			}
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
			}
			if(shader != Context3DTilemap.currentShader || bitmapData != Context3DTilemap.currentBitmapData && Context3DTilemap.currentBitmapData != null || Context3DTilemap.currentBlendMode != blendMode) {
				Context3DTilemap.flush(tilemap,renderer,Context3DTilemap.currentBlendMode);
			}
			Context3DTilemap.currentBitmapData = bitmapData;
			Context3DTilemap.currentShader = shader;
			Context3DTilemap.currentBlendMode = blendMode;
			Context3DTilemap.bufferPosition++;
		}
	}
}
Context3DTilemap.renderMask = function(tilemap,renderer) {
}
Context3DTilemap.resizeBuffer = function(tilemap,count) {
	Context3DTilemap.numTiles = count;
	if(tilemap.__buffer == null) {
		tilemap.__buffer = new (openfl__$internal_renderer_context3D_Context3DBuffer().default)(Context3DTilemap.context,(openfl__$internal_renderer_context3D_Context3DElementType().default).QUADS,Context3DTilemap.numTiles,Context3DTilemap.dataPerVertex);
	} else {
		tilemap.__buffer.resize(Context3DTilemap.numTiles,Context3DTilemap.dataPerVertex);
	}
	Context3DTilemap.vertexBufferData = tilemap.__buffer.vertexBufferData;
}
Context3DTilemap.__meta__ = { obj : { SuppressWarnings : ["checkstyle:FieldDocComment"]}}

// Export

exports.default = Context3DTilemap;