// Class: openfl._internal.renderer.context3D.Context3DGraphics

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../../hxClasses_stub").default;
var $hxEnums = require("./../../../../hxEnums_stub").default;
var $import = require("./../../../../import_stub").default;
function openfl_display_BitmapData() {return require("./../../../../openfl/display/BitmapData");}
function openfl_geom_ColorTransform() {return require("./../../../../openfl/geom/ColorTransform");}
function openfl__$internal_renderer_DrawCommandReader() {return require("./../../../../openfl/_internal/renderer/DrawCommandReader");}
function openfl_geom_Rectangle() {return require("./../../../../openfl/geom/Rectangle");}
function openfl_geom_Matrix() {return require("./../../../../openfl/geom/Matrix");}
function openfl__$internal_renderer_context3D_Context3DBuffer() {return require("./../../../../openfl/_internal/renderer/context3D/Context3DBuffer");}
function openfl__$internal_renderer_context3D_Context3DElementType() {return require("./../../../../openfl/_internal/renderer/context3D/Context3DElementType");}
function openfl__$internal_renderer_canvas_CanvasGraphics() {return require("./../../../../openfl/_internal/renderer/canvas/CanvasGraphics");}
function Std() {return require("./../../../../Std");}

// Constructor

var Context3DGraphics = function(){}

// Meta

Context3DGraphics.__name__ = "openfl._internal.renderer.context3D.Context3DGraphics";
Context3DGraphics.__isInterface__ = false;
Context3DGraphics.prototype = {
	
};
Context3DGraphics.prototype.__class__ = Context3DGraphics.prototype.constructor = $hxClasses["openfl._internal.renderer.context3D.Context3DGraphics"] = Context3DGraphics;

// Init



// Statics

Context3DGraphics.buildBuffer = function(graphics,renderer) {
	var quadBufferPosition = 0;
	var triangleIndexBufferPosition = 0;
	var vertexBufferPosition = 0;
	var vertexBufferPositionUVT = 0;
	var data = new (openfl__$internal_renderer_DrawCommandReader().default)(graphics.__commands);
	var context = renderer.__context3D;
	var tileRect = (openfl_geom_Rectangle().default).__pool.get();
	var tileTransform = (openfl_geom_Matrix().default).__pool.get();
	var bitmap = null;
	var _g = 0;
	var _g1 = graphics.__commands.types;
	while(_g < _g1.length) {
		var type = _g1[_g];
		++_g;
		switch(type._hx_index) {
		case 0:
			var c = data.readBeginBitmapFill();
			bitmap = c.obj(0);
			break;
		case 1:
			bitmap = null;
			data.skip(type);
			break;
		case 3:
			var c1 = data.readBeginShaderFill();
			var shaderBuffer = c1.obj(0);
			bitmap = null;
			if(shaderBuffer != null) {
				var _g2 = 0;
				var _g11 = shaderBuffer.inputCount;
				while(_g2 < _g11) {
					var i = _g2++;
					if(shaderBuffer.inputRefs[i].name == "bitmap") {
						bitmap = shaderBuffer.inputs[i];
						break;
					}
				}
			}
			break;
		case 8:
			if(bitmap != null) {
				var c2 = data.readDrawQuads();
				var rects = c2.obj(0);
				var indices = c2.obj(1);
				var transforms = c2.obj(2);
				var hasIndices = indices != null;
				var transformABCD = false;
				var transformXY = false;
				var length = hasIndices ? indices.get_length() : Math.floor(rects.get_length() / 4);
				if(length == 0) {
					return;
				}
				if(transforms != null) {
					if(transforms.get_length() >= length * 6) {
						transformABCD = true;
						transformXY = true;
					} else if(transforms.get_length() >= length * 4) {
						transformABCD = true;
					} else if(transforms.get_length() >= length * 2) {
						transformXY = true;
					}
				}
				var dataPerVertex = 4;
				var stride = dataPerVertex * 4;
				if(graphics.__quadBuffer == null) {
					graphics.__quadBuffer = new (openfl__$internal_renderer_context3D_Context3DBuffer().default)(context,(openfl__$internal_renderer_context3D_Context3DElementType().default).QUADS,length,dataPerVertex);
				} else {
					graphics.__quadBuffer.resize(quadBufferPosition + length,dataPerVertex);
				}
				var vertexOffset;
				var alpha = 1.0;
				var tileData;
				var id;
				var tileWidth;
				var tileHeight;
				var uvX;
				var uvY;
				var uvWidth;
				var uvHeight;
				var x;
				var y;
				var x2;
				var y2;
				var x3;
				var y3;
				var x4;
				var y4;
				var ri;
				var ti;
				var vertexBufferData = graphics.__quadBuffer.vertexBufferData;
				var bitmapWidth = bitmap.width;
				var bitmapHeight = bitmap.height;
				var sourceRect = bitmap.rect;
				var _g3 = 0;
				var _g12 = length;
				while(_g3 < _g12) {
					var i1 = _g3++;
					vertexOffset = (quadBufferPosition + i1) * stride;
					ri = hasIndices ? indices[i1] * 4 : i1 * 4;
					if(ri < 0) {
						continue;
					}
					tileRect.setTo(rects[ri],rects[ri + 1],rects[ri + 2],rects[ri + 3]);
					tileWidth = tileRect.width;
					tileHeight = tileRect.height;
					if(tileWidth <= 0 || tileHeight <= 0) {
						continue;
					}
					if(transformABCD && transformXY) {
						ti = i1 * 6;
						tileTransform.setTo(transforms[ti],transforms[ti + 1],transforms[ti + 2],transforms[ti + 3],transforms[ti + 4],transforms[ti + 5]);
					} else if(transformABCD) {
						ti = i1 * 4;
						tileTransform.setTo(transforms[ti],transforms[ti + 1],transforms[ti + 2],transforms[ti + 3],tileRect.x,tileRect.y);
					} else if(transformXY) {
						ti = i1 * 2;
						tileTransform.tx = transforms[ti];
						tileTransform.ty = transforms[ti + 1];
					} else {
						tileTransform.tx = tileRect.x;
						tileTransform.ty = tileRect.y;
					}
					uvX = tileRect.x / bitmapWidth;
					uvY = tileRect.y / bitmapHeight;
					uvWidth = tileRect.get_right() / bitmapWidth;
					uvHeight = tileRect.get_bottom() / bitmapHeight;
					x = tileTransform.__transformX(0,0);
					y = tileTransform.__transformY(0,0);
					x2 = tileTransform.__transformX(tileWidth,0);
					y2 = tileTransform.__transformY(tileWidth,0);
					x3 = tileTransform.__transformX(0,tileHeight);
					y3 = tileTransform.__transformY(0,tileHeight);
					x4 = tileTransform.__transformX(tileWidth,tileHeight);
					y4 = tileTransform.__transformY(tileWidth,tileHeight);
					vertexBufferData[vertexOffset] = x;
					vertexBufferData[vertexOffset + 1] = y;
					vertexBufferData[vertexOffset + 2] = uvX;
					vertexBufferData[vertexOffset + 3] = uvY;
					vertexBufferData[vertexOffset + dataPerVertex] = x2;
					vertexBufferData[vertexOffset + dataPerVertex + 1] = y2;
					vertexBufferData[vertexOffset + dataPerVertex + 2] = uvWidth;
					vertexBufferData[vertexOffset + dataPerVertex + 3] = uvY;
					vertexBufferData[vertexOffset + dataPerVertex * 2] = x3;
					vertexBufferData[vertexOffset + dataPerVertex * 2 + 1] = y3;
					vertexBufferData[vertexOffset + dataPerVertex * 2 + 2] = uvX;
					vertexBufferData[vertexOffset + dataPerVertex * 2 + 3] = uvHeight;
					vertexBufferData[vertexOffset + dataPerVertex * 3] = x4;
					vertexBufferData[vertexOffset + dataPerVertex * 3 + 1] = y4;
					vertexBufferData[vertexOffset + dataPerVertex * 3 + 2] = uvWidth;
					vertexBufferData[vertexOffset + dataPerVertex * 3 + 3] = uvHeight;
				}
				quadBufferPosition += length;
			}
			break;
		case 12:
			var c3 = data.readDrawTriangles();
			var vertices = c3.obj(0);
			var indices1 = c3.obj(1);
			var uvtData = c3.obj(2);
			var culling = c3.obj(3);
			var hasIndices1 = indices1 != null;
			var numVertices = Math.floor(vertices.get_length() / 2);
			var length1 = hasIndices1 ? indices1.get_length() : numVertices;
			var hasUVData = uvtData != null;
			var hasUVTData = hasUVData && uvtData.get_length() >= numVertices * 3;
			var vertLength = hasUVTData ? 4 : 2;
			var uvStride = hasUVTData ? 3 : 2;
			var dataPerVertex1 = vertLength + 2;
			var vertexOffset1 = hasUVTData ? vertexBufferPositionUVT : vertexBufferPosition;
			Context3DGraphics.resizeVertexBuffer(graphics,hasUVTData,vertexOffset1 + length1 * dataPerVertex1);
			var vertexBufferData1 = hasUVTData ? graphics.__vertexBufferDataUVT : graphics.__vertexBufferData;
			var offset;
			var vertOffset;
			var uvOffset;
			var t;
			var _g4 = 0;
			var _g13 = length1;
			while(_g4 < _g13) {
				var i2 = _g4++;
				offset = vertexOffset1 + i2 * dataPerVertex1;
				vertOffset = hasIndices1 ? indices1[i2] * 2 : i2 * 2;
				uvOffset = hasIndices1 ? indices1[i2] * uvStride : i2 * uvStride;
				if(hasUVTData) {
					t = uvtData[uvOffset + 2];
					vertexBufferData1[offset] = vertices[vertOffset] / t;
					vertexBufferData1[offset + 1] = vertices[vertOffset + 1] / t;
					vertexBufferData1[offset + 2] = 0;
					vertexBufferData1[offset + 3] = 1 / t;
				} else {
					vertexBufferData1[offset] = vertices[vertOffset];
					vertexBufferData1[offset + 1] = vertices[vertOffset + 1];
				}
				vertexBufferData1[offset + vertLength] = hasUVData ? uvtData[uvOffset] : 0;
				vertexBufferData1[offset + vertLength + 1] = hasUVData ? uvtData[uvOffset + 1] : 0;
			}
			if(hasUVTData) {
				vertexBufferPositionUVT += length1 * dataPerVertex1;
			} else {
				vertexBufferPosition += length1 * dataPerVertex1;
			}
			break;
		case 13:
			bitmap = null;
			break;
		default:
			data.skip(type);
		}
	}
	if(quadBufferPosition > 0) {
		graphics.__quadBuffer.flushVertexBufferData();
	}
	if(triangleIndexBufferPosition > 0) {
		var buffer = graphics.__triangleIndexBuffer;
		if(buffer == null || triangleIndexBufferPosition > graphics.__triangleIndexBufferCount) {
			buffer = context.createIndexBuffer(triangleIndexBufferPosition,"dynamicDraw");
			graphics.__triangleIndexBuffer = buffer;
			graphics.__triangleIndexBufferCount = triangleIndexBufferPosition;
		}
		buffer.uploadFromTypedArray(graphics.__triangleIndexBufferData);
	}
	if(vertexBufferPosition > 0) {
		var buffer1 = graphics.__vertexBuffer;
		if(buffer1 == null || vertexBufferPosition > graphics.__vertexBufferCount) {
			buffer1 = context.createVertexBuffer(vertexBufferPosition,4,"dynamicDraw");
			graphics.__vertexBuffer = buffer1;
			graphics.__vertexBufferCount = vertexBufferPosition;
		}
		buffer1.uploadFromTypedArray(graphics.__vertexBufferData);
	}
	if(vertexBufferPositionUVT > 0) {
		var buffer2 = graphics.__vertexBufferUVT;
		if(buffer2 == null || vertexBufferPositionUVT > graphics.__vertexBufferCountUVT) {
			buffer2 = context.createVertexBuffer(vertexBufferPositionUVT,6,"dynamicDraw");
			graphics.__vertexBufferUVT = buffer2;
			graphics.__vertexBufferCountUVT = vertexBufferPositionUVT;
		}
		buffer2.uploadFromTypedArray(graphics.__vertexBufferDataUVT);
	}
	(openfl_geom_Rectangle().default).__pool.release(tileRect);
	(openfl_geom_Matrix().default).__pool.release(tileTransform);
}
Context3DGraphics.isCompatible = function(graphics) {
	if(graphics.__owner.__worldScale9Grid != null) {
		return false;
	}
	var data = new (openfl__$internal_renderer_DrawCommandReader().default)(graphics.__commands);
	var hasColorFill = false;
	var hasBitmapFill = false;
	var hasShaderFill = false;
	var _g = 0;
	var _g1 = graphics.__commands.types;
	while(_g < _g1.length) {
		var type = _g1[_g];
		++_g;
		switch(type._hx_index) {
		case 0:
			hasBitmapFill = true;
			hasColorFill = false;
			hasShaderFill = false;
			data.skip(type);
			break;
		case 1:
			hasBitmapFill = false;
			hasColorFill = true;
			hasShaderFill = false;
			data.skip(type);
			break;
		case 3:
			hasBitmapFill = false;
			hasColorFill = false;
			hasShaderFill = true;
			data.skip(type);
			break;
		case 8:
			if(hasBitmapFill || hasShaderFill) {
				data.skip(type);
			} else {
				data.destroy();
				return false;
			}
			break;
		case 9:
			if(hasColorFill) {
				data.skip(type);
			} else {
				data.destroy();
				return false;
			}
			break;
		case 12:
			if(hasBitmapFill || hasShaderFill) {
				data.skip(type);
			} else {
				data.destroy();
				return false;
			}
			break;
		case 13:
			hasBitmapFill = false;
			hasColorFill = false;
			hasShaderFill = false;
			data.skip(type);
			break;
		case 18:
			data.skip(type);
			break;
		case 19:
			data.skip(type);
			break;
		default:
			data.destroy();
			return false;
		}
	}
	data.destroy();
	return true;
}
Context3DGraphics.render = function(graphics,renderer) {
	if(!graphics.__visible || graphics.__commands.get_length() == 0) {
		return;
	}
	if(graphics.__bitmap != null && !graphics.__dirty || !Context3DGraphics.isCompatible(graphics)) {
		var cacheTransform = renderer.__softwareRenderer.__worldTransform;
		renderer.__softwareRenderer.__worldTransform = renderer.__worldTransform;
		(openfl__$internal_renderer_canvas_CanvasGraphics().default).render(graphics,renderer.__softwareRenderer);
		renderer.__softwareRenderer.__worldTransform = cacheTransform;
	} else {
		graphics.__bitmap = null;
		graphics.__update(renderer.__worldTransform);
		var bounds = graphics.__bounds;
		var width = graphics.__width;
		var height = graphics.__height;
		if(bounds != null && width >= 1 && height >= 1) {
			if(graphics.__hardwareDirty || graphics.__quadBuffer == null && graphics.__vertexBuffer == null && graphics.__vertexBufferUVT == null) {
				Context3DGraphics.buildBuffer(graphics,renderer);
			}
			var data = new (openfl__$internal_renderer_DrawCommandReader().default)(graphics.__commands);
			var context = renderer.__context3D;
			var gl = context.gl;
			var matrix = (openfl_geom_Matrix().default).__pool.get();
			var shaderBuffer = null;
			var bitmap = null;
			var repeat = false;
			var smooth = false;
			var fill = null;
			var positionX = 0.0;
			var positionY = 0.0;
			var quadBufferPosition = 0;
			var shaderBufferOffset = 0;
			var triangleIndexBufferPosition = 0;
			var vertexBufferPosition = 0;
			var vertexBufferPositionUVT = 0;
			var _g = 0;
			var _g1 = graphics.__commands.types;
			while(_g < _g1.length) {
				var type = _g1[_g];
				++_g;
				switch(type._hx_index) {
				case 0:
					var c = data.readBeginBitmapFill();
					bitmap = c.obj(0);
					repeat = c.bool(0);
					smooth = c.bool(1);
					shaderBuffer = null;
					fill = null;
					break;
				case 1:
					var c1 = data.readBeginFill();
					var color = (Std().default).int(c1.int(0));
					var alpha = (Std().default).int(c1.float(0) * 255);
					fill = color & 16777215 | alpha << 24;
					shaderBuffer = null;
					bitmap = null;
					break;
				case 3:
					var c2 = data.readBeginShaderFill();
					shaderBuffer = c2.obj(0);
					shaderBufferOffset = 0;
					if(shaderBuffer == null || shaderBuffer.shader == null || shaderBuffer.shader.__bitmap == null) {
						bitmap = null;
					} else {
						bitmap = shaderBuffer.shader.__bitmap.input;
					}
					fill = null;
					break;
				case 8:
					if(bitmap != null) {
						var c3 = data.readDrawQuads();
						var rects = c3.obj(0);
						var indices = c3.obj(1);
						var transforms = c3.obj(2);
						var hasIndices = indices != null;
						var length = hasIndices ? indices.get_length() : Math.floor(rects.get_length() / 4);
						var uMatrix = renderer.__getMatrix(graphics.__owner.__renderTransform,"auto");
						var shader;
						if(shaderBuffer != null && !Context3DGraphics.maskRender) {
							shader = renderer.__initShaderBuffer(shaderBuffer);
							renderer.__setShaderBuffer(shaderBuffer);
							renderer.applyMatrix(uMatrix);
							renderer.applyBitmapData(bitmap,false,repeat);
							renderer.applyAlpha(graphics.__owner.__worldAlpha);
							renderer.applyColorTransform(graphics.__owner.__worldColorTransform);
						} else {
							shader = Context3DGraphics.maskRender ? renderer.__maskShader : renderer.__initGraphicsShader(null);
							renderer.setShader(shader);
							renderer.applyMatrix(uMatrix);
							renderer.applyBitmapData(bitmap,smooth,repeat);
							renderer.applyAlpha(graphics.__owner.__worldAlpha);
							renderer.applyColorTransform(graphics.__owner.__worldColorTransform);
							renderer.updateShader();
						}
						var end = quadBufferPosition + length;
						while(quadBufferPosition < end) {
							length = (Std().default).int(Math.min(end - quadBufferPosition,context.__quadIndexBufferElements));
							if(length <= 0) {
								break;
							}
							if(shaderBuffer != null && !Context3DGraphics.maskRender) {
								renderer.__updateShaderBuffer(shaderBufferOffset);
							}
							if(shader.__position != null) {
								context.setVertexBufferAt(shader.__position.index,graphics.__quadBuffer.vertexBuffer,quadBufferPosition * 16,"float2");
							}
							if(shader.__textureCoord != null) {
								context.setVertexBufferAt(shader.__textureCoord.index,graphics.__quadBuffer.vertexBuffer,quadBufferPosition * 16 + 2,"float2");
							}
							context.drawTriangles(context.__quadIndexBuffer,0,length * 2);
							shaderBufferOffset += length * 4;
							quadBufferPosition += length;
						}
						renderer.__clearShader();
					}
					break;
				case 9:
					if(fill != null) {
						var c4 = data.readDrawRect();
						var x = c4.float(0);
						var y = c4.float(1);
						var width1 = c4.float(2);
						var height1 = c4.float(3);
						var color1 = fill;
						Context3DGraphics.tempColorTransform.redOffset = color1 >>> 16 & 255;
						Context3DGraphics.tempColorTransform.greenOffset = color1 >>> 8 & 255;
						Context3DGraphics.tempColorTransform.blueOffset = color1 & 255;
						Context3DGraphics.tempColorTransform.__combine(graphics.__owner.__worldColorTransform);
						matrix.identity();
						matrix.scale(width1,height1);
						matrix.tx = x;
						matrix.ty = y;
						matrix.concat(graphics.__owner.__renderTransform);
						var shader1 = Context3DGraphics.maskRender ? renderer.__maskShader : renderer.__initGraphicsShader(null);
						renderer.setShader(shader1);
						renderer.applyMatrix(renderer.__getMatrix(matrix,"auto"));
						renderer.applyBitmapData(Context3DGraphics.blankBitmapData,true,repeat);
						renderer.applyAlpha((color1 >>> 24 & 255) / 255 * graphics.__owner.__worldAlpha);
						renderer.applyColorTransform(Context3DGraphics.tempColorTransform);
						renderer.updateShader();
						var vertexBuffer = Context3DGraphics.blankBitmapData.getVertexBuffer(context);
						if(shader1.__position != null) {
							context.setVertexBufferAt(shader1.__position.index,vertexBuffer,0,"float3");
						}
						if(shader1.__textureCoord != null) {
							context.setVertexBufferAt(shader1.__textureCoord.index,vertexBuffer,3,"float2");
						}
						var indexBuffer = Context3DGraphics.blankBitmapData.getIndexBuffer(context);
						context.drawTriangles(indexBuffer);
						shaderBufferOffset += 4;
						renderer.__clearShader();
					}
					break;
				case 12:
					var c5 = data.readDrawTriangles();
					var vertices = c5.obj(0);
					var indices1 = c5.obj(1);
					var uvtData = c5.obj(2);
					var culling = c5.obj(3);
					var hasIndices1 = indices1 != null;
					var numVertices = Math.floor(vertices.get_length() / 2);
					var length1 = hasIndices1 ? indices1.get_length() : numVertices;
					var hasUVData = uvtData != null;
					var hasUVTData = hasUVData && uvtData.get_length() >= numVertices * 3;
					var vertLength = hasUVTData ? 4 : 2;
					var uvStride = hasUVTData ? 3 : 2;
					var dataPerVertex = vertLength + 2;
					var vertexBuffer1 = hasUVTData ? graphics.__vertexBufferUVT : graphics.__vertexBuffer;
					var bufferPosition = hasUVTData ? vertexBufferPositionUVT : vertexBufferPosition;
					var uMatrix1 = renderer.__getMatrix(graphics.__owner.__renderTransform,"auto");
					var shader2;
					if(shaderBuffer != null && !Context3DGraphics.maskRender) {
						shader2 = renderer.__initShaderBuffer(shaderBuffer);
						renderer.__setShaderBuffer(shaderBuffer);
						renderer.applyMatrix(uMatrix1);
						renderer.applyBitmapData(bitmap,false,repeat);
						renderer.applyAlpha(1);
						renderer.applyColorTransform(null);
						renderer.__updateShaderBuffer(shaderBufferOffset);
					} else {
						shader2 = Context3DGraphics.maskRender ? renderer.__maskShader : renderer.__initGraphicsShader(null);
						renderer.setShader(shader2);
						renderer.applyMatrix(uMatrix1);
						renderer.applyBitmapData(bitmap,smooth,repeat);
						renderer.applyAlpha(graphics.__owner.__worldAlpha);
						renderer.applyColorTransform(graphics.__owner.__worldColorTransform);
						renderer.updateShader();
					}
					if(shader2.__position != null) {
						context.setVertexBufferAt(shader2.__position.index,vertexBuffer1,bufferPosition,hasUVTData ? "float4" : "float2");
					}
					if(shader2.__textureCoord != null) {
						context.setVertexBufferAt(shader2.__textureCoord.index,vertexBuffer1,bufferPosition + vertLength,"float2");
					}
					switch(culling) {
					case "negative":
						context.setCulling("back");
						break;
					case "none":
						context.setCulling("none");
						break;
					case "positive":
						context.setCulling("front");
						break;
					default:
					}
					context.__drawTriangles(0,length1);
					shaderBufferOffset += length1;
					if(hasUVTData) {
						vertexBufferPositionUVT += dataPerVertex * length1;
					} else {
						vertexBufferPosition += dataPerVertex * length1;
					}
					switch(culling) {
					case "none":case "positive":
						context.setCulling("back");
						break;
					default:
					}
					renderer.__clearShader();
					break;
				case 13:
					bitmap = null;
					fill = null;
					shaderBuffer = null;
					data.skip(type);
					break;
				case 18:
					var c6 = data.readMoveTo();
					positionX = c6.float(0);
					positionY = c6.float(1);
					break;
				case 19:
					var c7 = data.readOverrideBlendMode();
					renderer.__setBlendMode(c7.obj(0));
					break;
				default:
					data.skip(type);
				}
			}
			(openfl_geom_Matrix().default).__pool.release(matrix);
		}
		graphics.__hardwareDirty = false;
		graphics.set___dirty(false);
	}
}
Context3DGraphics.renderMask = function(graphics,renderer) {
	Context3DGraphics.maskRender = true;
	Context3DGraphics.render(graphics,renderer);
	Context3DGraphics.maskRender = false;
}
Context3DGraphics.resizeIndexBuffer = function(graphics,isQuad,length) {
	if(isQuad) {
		return;
	}
	var buffer = isQuad ? null : graphics.__triangleIndexBufferData;
	var position = 0;
	var newBuffer = null;
	if(buffer == null) {
		var array = null;
		var view = null;
		var buffer1 = null;
		var len = null;
		var this1;
		if(length != null) {
			this1 = new Uint16Array(length);
		} else if(array != null) {
			this1 = new Uint16Array(array);
		} else if(view != null) {
			this1 = new Uint16Array(view);
		} else if(buffer1 != null) {
			if(len == null) {
				this1 = new Uint16Array(buffer1,0);
			} else {
				this1 = new Uint16Array(buffer1,0,len);
			}
		} else {
			this1 = null;
		}
		newBuffer = this1;
	} else if(length > buffer.length) {
		var array1 = null;
		var view1 = null;
		var buffer2 = null;
		var len1 = null;
		var this2;
		if(length != null) {
			this2 = new Uint16Array(length);
		} else if(array1 != null) {
			this2 = new Uint16Array(array1);
		} else if(view1 != null) {
			this2 = new Uint16Array(view1);
		} else if(buffer2 != null) {
			if(len1 == null) {
				this2 = new Uint16Array(buffer2,0);
			} else {
				this2 = new Uint16Array(buffer2,0,len1);
			}
		} else {
			this2 = null;
		}
		newBuffer = this2;
		newBuffer.set(buffer);
		position = buffer.length;
	}
	if(newBuffer != null) {
		if(!isQuad) {
			graphics.__triangleIndexBufferData = newBuffer;
		}
	}
}
Context3DGraphics.resizeVertexBuffer = function(graphics,hasUVTData,length) {
	var buffer = hasUVTData ? graphics.__vertexBufferDataUVT : graphics.__vertexBufferData;
	var newBuffer = null;
	if(buffer == null) {
		var array = null;
		var view = null;
		var buffer1 = null;
		var len = null;
		var this1;
		if(length != null) {
			this1 = new Float32Array(length);
		} else if(array != null) {
			this1 = new Float32Array(array);
		} else if(view != null) {
			this1 = new Float32Array(view);
		} else if(buffer1 != null) {
			if(len == null) {
				this1 = new Float32Array(buffer1,0);
			} else {
				this1 = new Float32Array(buffer1,0,len);
			}
		} else {
			this1 = null;
		}
		newBuffer = this1;
	} else if(length > buffer.length) {
		var array1 = null;
		var view1 = null;
		var buffer2 = null;
		var len1 = null;
		var this2;
		if(length != null) {
			this2 = new Float32Array(length);
		} else if(array1 != null) {
			this2 = new Float32Array(array1);
		} else if(view1 != null) {
			this2 = new Float32Array(view1);
		} else if(buffer2 != null) {
			if(len1 == null) {
				this2 = new Float32Array(buffer2,0);
			} else {
				this2 = new Float32Array(buffer2,0,len1);
			}
		} else {
			this2 = null;
		}
		newBuffer = this2;
		newBuffer.set(buffer);
	}
	if(newBuffer != null) {
		if(hasUVTData) {
			graphics.__vertexBufferDataUVT = newBuffer;
		} else {
			graphics.__vertexBufferData = newBuffer;
		}
	}
}
Context3DGraphics.__meta__ = { obj : { SuppressWarnings : ["checkstyle:FieldDocComment"]}}
Context3DGraphics.blankBitmapData = new (openfl_display_BitmapData().default)(1,1,false,0)
Context3DGraphics.tempColorTransform = new (openfl_geom_ColorTransform().default)(1,1,1,1,0,0,0,0)

// Export

exports.default = Context3DGraphics;