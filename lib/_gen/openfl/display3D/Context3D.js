// Class: openfl.display3D.Context3D

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;
var $import = require("./../../import_stub").default;
var $extend = require("./../../extend_stub").default;
function openfl_events_EventDispatcher() {return require("./../../openfl/events/EventDispatcher");}
function openfl__$Vector_Vector_$Impl_$() {return require("./../../openfl/_Vector/Vector_Impl_");}
function openfl_display3D_textures_CubeTexture() {return require("./../../openfl/display3D/textures/CubeTexture");}
function openfl_display3D_IndexBuffer3D() {return require("./../../openfl/display3D/IndexBuffer3D");}
function openfl_display3D_Program3D() {return require("./../../openfl/display3D/Program3D");}
function openfl_display3D_textures_RectangleTexture() {return require("./../../openfl/display3D/textures/RectangleTexture");}
function openfl_display3D_textures_Texture() {return require("./../../openfl/display3D/textures/Texture");}
function openfl_display3D_VertexBuffer3D() {return require("./../../openfl/display3D/VertexBuffer3D");}
function openfl_display3D_textures_VideoTexture() {return require("./../../openfl/display3D/textures/VideoTexture");}
function lime_math_Rectangle() {return require("./../../lime/math/Rectangle");}
function lime_math_Vector2() {return require("./../../lime/math/Vector2");}
function Std() {return require("./../../Std");}
function lime_graphics_Image() {return require("./../../lime/graphics/Image");}
function lime_graphics_ImageBuffer() {return require("./../../lime/graphics/ImageBuffer");}
function openfl_utils__$ByteArray_ByteArray_$Impl_$() {return require("./../../openfl/utils/_ByteArray/ByteArray_Impl_");}
function _$UInt_UInt_$Impl_$() {return require("./../../_UInt/UInt_Impl_");}
function lime_graphics__$WebGLRenderContext_WebGLRenderContext_$Impl_$() {return require("./../../lime/graphics/_WebGLRenderContext/WebGLRenderContext_Impl_");}
function openfl__$internal_renderer_SamplerState() {return require("./../../openfl/_internal/renderer/SamplerState");}
function js__$Boot_HaxeError() {return require("./../../js/_Boot/HaxeError");}
function openfl_errors_IllegalOperationError() {return require("./../../openfl/errors/IllegalOperationError");}
function openfl_errors_Error() {return require("./../../openfl/errors/Error");}
function openfl_utils_AGALMiniAssembler() {return require("./../../openfl/utils/AGALMiniAssembler");}
function openfl__$internal_renderer_context3D_Context3DState() {return require("./../../openfl/_internal/renderer/context3D/Context3DState");}
function haxe_ds_StringMap() {return require("./../../haxe/ds/StringMap");}
function Reflect() {return require("./../../Reflect");}

// Constructor

var Context3D = function(stage,contextState,stage3D) {
	this.profile = "standard";
	this.driverInfo = "OpenGL (Direct blitting)";
	this.backBufferWidth = 0;
	this.backBufferHeight = 0;
	(openfl_events_EventDispatcher().default).call(this);
	this.__stage = stage;
	this.__contextState = contextState;
	this.__stage3D = stage3D;
	this.__context = stage.window.context;
	this.gl = this.__context.webgl;
	if(this.__contextState == null) {
		this.__contextState = new (openfl__$internal_renderer_context3D_Context3DState().default)();
	}
	this.__state = new (openfl__$internal_renderer_context3D_Context3DState().default)();
	var array = null;
	var view = null;
	var buffer = null;
	var len = null;
	var this1 = new Float32Array(512);
	this.__vertexConstants = this1;
	var array1 = null;
	var view1 = null;
	var buffer1 = null;
	var len1 = null;
	var this2 = new Float32Array(512);
	this.__fragmentConstants = this2;
	var elements = null;
	var array2 = [1.0,1.0,1.0,1.0];
	var view2 = null;
	var buffer2 = null;
	var len2 = null;
	var this3;
	if(elements != null) {
		this3 = new Float32Array(elements);
	} else if(array2 != null) {
		this3 = new Float32Array(array2);
	} else if(view2 != null) {
		this3 = new Float32Array(view2);
	} else if(buffer2 != null) {
		if(len2 == null) {
			this3 = new Float32Array(buffer2,0);
		} else {
			this3 = new Float32Array(buffer2,0,len2);
		}
	} else {
		this3 = null;
	}
	this.__positionScale = this3;
	this.__programs = new (haxe_ds_StringMap().default)();
	if(Context3D.__glMaxViewportDims == -1) {
		Context3D.__glMaxViewportDims = this.gl.getParameter(this.gl.MAX_VIEWPORT_DIMS);
	}
	this.maxBackBufferWidth = Context3D.__glMaxViewportDims;
	this.maxBackBufferHeight = Context3D.__glMaxViewportDims;
	if(Context3D.__glMaxTextureMaxAnisotropy == -1) {
		var extension = this.gl.getExtension("EXT_texture_filter_anisotropic");
		if(extension == null || !(Reflect().default).hasField(extension,"MAX_TEXTURE_MAX_ANISOTROPY_EXT")) {
			extension = this.gl.getExtension("MOZ_EXT_texture_filter_anisotropic");
		}
		if(extension == null || !(Reflect().default).hasField(extension,"MAX_TEXTURE_MAX_ANISOTROPY_EXT")) {
			extension = this.gl.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
		}
		if(extension != null) {
			Context3D.__glTextureMaxAnisotropy = extension.TEXTURE_MAX_ANISOTROPY_EXT;
			Context3D.__glMaxTextureMaxAnisotropy = this.gl.getParameter(extension.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
		} else {
			Context3D.__glTextureMaxAnisotropy = 0;
			Context3D.__glMaxTextureMaxAnisotropy = 0;
		}
	}
	if(Context3D.__glDepthStencil == -1) {
		Context3D.__glDepthStencil = this.gl.DEPTH_STENCIL;
	}
	if(Context3D.__glMemoryTotalAvailable == -1) {
		var extension1 = this.gl.getExtension("NVX_gpu_memory_info");
		if(extension1 != null) {
			Context3D.__glMemoryTotalAvailable = extension1.GPU_MEMORY_INFO_DEDICATED_VIDMEM_NVX;
			Context3D.__glMemoryCurrentAvailable = extension1.GPU_MEMORY_INFO_CURRENT_AVAILABLE_VIDMEM_NVX;
		}
	}
	if(Context3D.__driverInfo == null) {
		var vendor = this.gl.getParameter(this.gl.VENDOR);
		var version = this.gl.getParameter(this.gl.VERSION);
		var renderer = this.gl.getParameter(this.gl.RENDERER);
		var glslVersion = this.gl.getParameter(this.gl.SHADING_LANGUAGE_VERSION);
		Context3D.__driverInfo = "OpenGL Vendor=" + vendor + " Version=" + version + " Renderer=" + renderer + " GLSL=" + glslVersion;
	}
	this.driverInfo = Context3D.__driverInfo;
	this.__quadIndexBufferElements = 16383;
	this.__quadIndexBufferCount = this.__quadIndexBufferElements * 6;
	var elements1 = this.__quadIndexBufferCount;
	var array3 = null;
	var view3 = null;
	var buffer3 = null;
	var len3 = null;
	var this4;
	if(elements1 != null) {
		this4 = new Uint16Array(elements1);
	} else if(array3 != null) {
		this4 = new Uint16Array(array3);
	} else if(view3 != null) {
		this4 = new Uint16Array(view3);
	} else if(buffer3 != null) {
		if(len3 == null) {
			this4 = new Uint16Array(buffer3,0);
		} else {
			this4 = new Uint16Array(buffer3,0,len3);
		}
	} else {
		this4 = null;
	}
	var data = this4;
	var index = 0;
	var vertex = 0;
	var _g = 0;
	var _g1 = this.__quadIndexBufferElements;
	while(_g < _g1) {
		var i = _g++;
		data[index] = vertex;
		data[index + 1] = vertex + 1;
		data[index + 2] = vertex + 2;
		data[index + 3] = vertex + 2;
		data[index + 4] = vertex + 1;
		data[index + 5] = vertex + 3;
		index = index + 6;
		vertex = vertex + 4;
	}
	this.__quadIndexBuffer = this.createIndexBuffer(this.__quadIndexBufferCount);
	this.__quadIndexBuffer.uploadFromTypedArray(data);
}

// Meta

Context3D.__name__ = "openfl.display3D.Context3D";
Context3D.__isInterface__ = false;
Context3D.__super__ = (openfl_events_EventDispatcher().default);
Context3D.prototype = $extend((openfl_events_EventDispatcher().default).prototype, {
	clear: function(red,green,blue,alpha,depth,stencil,mask) {
		if(mask == null) {
			mask = 7;
		}
		if(stencil == null) {
			stencil = 0;
		}
		if(depth == null) {
			depth = 1;
		}
		if(alpha == null) {
			alpha = 1;
		}
		if(blue == null) {
			blue = 0;
		}
		if(green == null) {
			green = 0;
		}
		if(red == null) {
			red = 0;
		}
		this.__flushGLFramebuffer();
		this.__flushGLViewport();
		var clearMask = 0;
		if((mask & 1) != 0) {
			if(this.__state.renderToTexture == null) {
				if(this.__stage.context3D == this && !this.__stage.__renderer.__cleared) {
					this.__stage.__renderer.__cleared = true;
				}
				this.__cleared = true;
			}
			clearMask |= this.gl.COLOR_BUFFER_BIT;
			if(this.__contextState.colorMaskRed != true || this.__contextState.colorMaskGreen != true || this.__contextState.colorMaskBlue != true || this.__contextState.colorMaskAlpha != true) {
				this.gl.colorMask(true,true,true,true);
				this.__contextState.colorMaskRed = true;
				this.__contextState.colorMaskGreen = true;
				this.__contextState.colorMaskBlue = true;
				this.__contextState.colorMaskAlpha = true;
			}
			this.gl.clearColor(red,green,blue,alpha);
		}
		if((mask & 2) != 0) {
			clearMask |= this.gl.DEPTH_BUFFER_BIT;
			if(this.__contextState.depthMask != true) {
				this.gl.depthMask(true);
				this.__contextState.depthMask = true;
			}
			this.gl.clearDepth(depth);
		}
		if((mask & 4) != 0) {
			clearMask |= this.gl.STENCIL_BUFFER_BIT;
			if(this.__contextState.stencilWriteMask != 255) {
				this.gl.stencilMask(255);
				this.__contextState.stencilWriteMask = 255;
			}
			this.gl.clearStencil(stencil);
			this.__contextState.stencilWriteMask = 255;
		}
		if(clearMask == 0) {
			return;
		}
		this.__setGLScissorTest(false);
		this.gl.clear(clearMask);
	},
	configureBackBuffer: function(width,height,antiAlias,enableDepthAndStencil,wantsBestResolution,wantsBestResolutionOnBrowserZoom) {
		if(wantsBestResolutionOnBrowserZoom == null) {
			wantsBestResolutionOnBrowserZoom = false;
		}
		if(wantsBestResolution == null) {
			wantsBestResolution = false;
		}
		if(enableDepthAndStencil == null) {
			enableDepthAndStencil = true;
		}
		if(this.__stage3D == null) {
			this.backBufferWidth = width;
			this.backBufferHeight = height;
			this.__backBufferAntiAlias = antiAlias;
			this.__state.backBufferEnableDepthAndStencil = enableDepthAndStencil;
			this.__backBufferWantsBestResolution = wantsBestResolution;
			this.__backBufferWantsBestResolutionOnBrowserZoom = wantsBestResolutionOnBrowserZoom;
		} else {
			if(this.__backBufferTexture == null || this.backBufferWidth != width || this.backBufferHeight != height) {
				if(this.__backBufferTexture != null) {
					this.__backBufferTexture.dispose();
				}
				if(this.__frontBufferTexture != null) {
					this.__frontBufferTexture.dispose();
				}
				this.__backBufferTexture = this.createRectangleTexture(width,height,"bgra",true);
				this.__frontBufferTexture = this.createRectangleTexture(width,height,"bgra",true);
				if(this.__stage3D.__vertexBuffer == null) {
					this.__stage3D.__vertexBuffer = this.createVertexBuffer(4,5);
				}
				var vertexData = (openfl__$Vector_Vector_$Impl_$().default)._new(null,null,[width,height,0,1,1,0,height,0,0,1,width,0,0,1,0,0,0,0,0,0.0]);
				this.__stage3D.__vertexBuffer.uploadFromVector(vertexData,0,20);
				if(this.__stage3D.__indexBuffer == null) {
					this.__stage3D.__indexBuffer = this.createIndexBuffer(6);
					var indexData = (openfl__$Vector_Vector_$Impl_$().default)._new(null,null,[0,1,2,2,1,3]);
					this.__stage3D.__indexBuffer.uploadFromVector(indexData,0,6);
				}
			}
			this.backBufferWidth = width;
			this.backBufferHeight = height;
			this.__backBufferAntiAlias = antiAlias;
			this.__state.backBufferEnableDepthAndStencil = enableDepthAndStencil;
			this.__backBufferWantsBestResolution = wantsBestResolution;
			this.__backBufferWantsBestResolutionOnBrowserZoom = wantsBestResolutionOnBrowserZoom;
			this.__state.__primaryGLFramebuffer = this.__backBufferTexture.__getGLFramebuffer(enableDepthAndStencil,antiAlias,0);
			this.__frontBufferTexture.__getGLFramebuffer(enableDepthAndStencil,antiAlias,0);
		}
	},
	createCubeTexture: function(size,format,optimizeForRenderToTexture,streamingLevels) {
		if(streamingLevels == null) {
			streamingLevels = 0;
		}
		return new (openfl_display3D_textures_CubeTexture().default)(this,size,format,optimizeForRenderToTexture,streamingLevels);
	},
	createIndexBuffer: function(numIndices,bufferUsage) {
		if(bufferUsage == null) {
			bufferUsage = "staticDraw";
		}
		return new (openfl_display3D_IndexBuffer3D().default)(this,numIndices,bufferUsage);
	},
	createProgram: function(format) {
		if(format == null) {
			format = "agal";
		}
		return new (openfl_display3D_Program3D().default)(this,format);
	},
	createRectangleTexture: function(width,height,format,optimizeForRenderToTexture) {
		return new (openfl_display3D_textures_RectangleTexture().default)(this,width,height,format,optimizeForRenderToTexture);
	},
	createTexture: function(width,height,format,optimizeForRenderToTexture,streamingLevels) {
		if(streamingLevels == null) {
			streamingLevels = 0;
		}
		return new (openfl_display3D_textures_Texture().default)(this,width,height,format,optimizeForRenderToTexture,streamingLevels);
	},
	createVertexBuffer: function(numVertices,data32PerVertex,bufferUsage) {
		if(bufferUsage == null) {
			bufferUsage = "staticDraw";
		}
		return new (openfl_display3D_VertexBuffer3D().default)(this,numVertices,data32PerVertex,bufferUsage);
	},
	createVideoTexture: function() {
		return new (openfl_display3D_textures_VideoTexture().default)(this);
	},
	dispose: function(recreate) {
		if(recreate == null) {
			recreate = true;
		}
		this.gl = null;
		this.__dispose();
	},
	drawToBitmapData: function(destination,srcRect,destPoint) {
		if(destination == null) {
			return;
		}
		var sourceRect = srcRect != null ? srcRect.__toLimeRectangle() : new (lime_math_Rectangle().default)(0,0,this.backBufferWidth,this.backBufferHeight);
		var destVector = destPoint != null ? destPoint.__toLimeVector2() : new (lime_math_Vector2().default)();
		if(this.__stage.context3D == this) {
			if(this.__stage.window != null) {
				if(this.__stage3D != null) {
					destVector.setTo((Std().default).int(-this.__stage3D.get_x()),(Std().default).int(-this.__stage3D.get_y()));
				}
				var image = this.__stage.window.readPixels();
				destination.image.copyPixels(image,sourceRect,destVector);
			}
		} else if(this.__backBufferTexture != null) {
			var cacheRenderToTexture = this.__state.renderToTexture;
			this.setRenderToBackBuffer();
			this.__flushGLFramebuffer();
			this.__flushGLViewport();
			var elements = this.backBufferWidth * this.backBufferHeight * 4;
			var array = null;
			var view = null;
			var buffer = null;
			var len = null;
			var this1;
			if(elements != null) {
				this1 = new Uint8Array(elements);
			} else if(array != null) {
				this1 = new Uint8Array(array);
			} else if(view != null) {
				this1 = new Uint8Array(view);
			} else if(buffer != null) {
				if(len == null) {
					this1 = new Uint8Array(buffer,0);
				} else {
					this1 = new Uint8Array(buffer,0,len);
				}
			} else {
				this1 = null;
			}
			var data = this1;
			var this2 = this.gl;
			var width = this.backBufferWidth;
			var height = this.backBufferHeight;
			var format = this.__backBufferTexture.__format;
			var type = this.gl.UNSIGNED_BYTE;
			var pixels = data;
			var dstOffset = null;
			if(dstOffset != null) {
				this2.readPixels(0,0,width,height,format,type,pixels,dstOffset);
			} else {
				this2.readPixels(0,0,width,height,format,type,pixels);
			}
			var image1 = new (lime_graphics_Image().default)(new (lime_graphics_ImageBuffer().default)(data,this.backBufferWidth,this.backBufferHeight,32,2));
			destination.image.copyPixels(image1,sourceRect,destVector);
			if(cacheRenderToTexture != null) {
				this.setRenderToTexture(cacheRenderToTexture,this.__state.renderToTextureDepthStencil,this.__state.renderToTextureAntiAlias,this.__state.renderToTextureSurfaceSelector);
			}
		}
	},
	drawTriangles: function(indexBuffer,firstIndex,numTriangles) {
		if(numTriangles == null) {
			numTriangles = -1;
		}
		if(firstIndex == null) {
			firstIndex = 0;
		}
		if(this.__state.renderToTexture == null) {
			if(this.__stage.context3D == this && !this.__stage.__renderer.__cleared) {
				this.__stage.__renderer.__clear();
			} else if(!this.__cleared) {
				this.clear(0,0,0,0,1,0,1);
			}
		}
		this.__flushGL();
		if(this.__state.program != null) {
			this.__state.program.__flush();
		}
		var count = numTriangles == -1 ? indexBuffer.__numIndices : numTriangles * 3;
		this.__bindGLElementArrayBuffer(indexBuffer.__id);
		this.gl.drawElements(this.gl.TRIANGLES,count,this.gl.UNSIGNED_SHORT,firstIndex * 2);
	},
	present: function() {
		this.setRenderToBackBuffer();
		if(this.__stage3D != null && this.__backBufferTexture != null) {
			if(!this.__cleared) {
				this.clear(0,0,0,0,1,0,1);
			}
			var cacheBuffer = this.__backBufferTexture;
			this.__backBufferTexture = this.__frontBufferTexture;
			this.__frontBufferTexture = cacheBuffer;
			this.__state.__primaryGLFramebuffer = this.__backBufferTexture.__getGLFramebuffer(this.__state.backBufferEnableDepthAndStencil,this.__backBufferAntiAlias,0);
			this.__cleared = false;
		}
		this.__present = true;
	},
	setBlendFactors: function(sourceFactor,destinationFactor) {
		this.setBlendFactorsSeparate(sourceFactor,destinationFactor,sourceFactor,destinationFactor);
	},
	setBlendFactorsSeparate: function(sourceRGBFactor,destinationRGBFactor,sourceAlphaFactor,destinationAlphaFactor) {
		this.__state.blendSourceRGBFactor = sourceRGBFactor;
		this.__state.blendDestinationRGBFactor = destinationRGBFactor;
		this.__state.blendSourceAlphaFactor = sourceAlphaFactor;
		this.__state.blendDestinationAlphaFactor = destinationAlphaFactor;
		this.__setGLBlendEquation(this.gl.FUNC_ADD);
	},
	setColorMask: function(red,green,blue,alpha) {
		this.__state.colorMaskRed = red;
		this.__state.colorMaskGreen = green;
		this.__state.colorMaskBlue = blue;
		this.__state.colorMaskAlpha = alpha;
	},
	setCulling: function(triangleFaceToCull) {
		this.__state.culling = triangleFaceToCull;
	},
	setDepthTest: function(depthMask,passCompareMode) {
		this.__state.depthMask = depthMask;
		this.__state.depthCompareMode = passCompareMode;
	},
	setProgram: function(program) {
		this.__state.program = program;
		this.__state.shader = null;
		if(program != null) {
			var _g = 0;
			var _g1 = program.__samplerStates.length;
			while(_g < _g1) {
				var i = _g++;
				if(this.__state.samplerStates[i] == null) {
					this.__state.samplerStates[i] = program.__samplerStates[i].clone();
				} else {
					this.__state.samplerStates[i].copyFrom(program.__samplerStates[i]);
				}
			}
		}
	},
	setProgramConstantsFromByteArray: function(programType,firstRegister,numRegisters,data,byteArrayOffset) {
		if(numRegisters == 0 || this.__state.program == null) {
			return;
		}
		if(!(this.__state.program != null && this.__state.program.__format == "glsl")) {
			if(numRegisters == -1) {
				numRegisters = ((openfl_utils__$ByteArray_ByteArray_$Impl_$().default).get_length(data) >>> 2) - byteArrayOffset;
			}
			var isVertex = programType == "vertex";
			var dest = isVertex ? this.__vertexConstants : this.__fragmentConstants;
			var bytes = (openfl_utils__$ByteArray_ByteArray_$Impl_$().default).toBytes(data);
			var byteOffset = 0;
			var len = (openfl_utils__$ByteArray_ByteArray_$Impl_$().default).get_length(data);
			if(byteOffset == null) {
				byteOffset = 0;
			}
			var floatData = byteOffset == null ? new Float32Array(bytes.getData()) : len == null ? new Float32Array(bytes.getData(),byteOffset) : new Float32Array(bytes.getData(),byteOffset,len);
			var outOffset = firstRegister * 4;
			var inOffset = (Std().default).int((_$UInt_UInt_$Impl_$().default).toFloat(byteArrayOffset) / (_$UInt_UInt_$Impl_$().default).toFloat(4));
			var _g = 0;
			var _g1 = numRegisters * 4;
			while(_g < _g1) {
				var i = _g++;
				dest[outOffset + i] = floatData[inOffset + i];
			}
			if(this.__state.program != null) {
				this.__state.program.__markDirty(isVertex,firstRegister,numRegisters);
			}
		}
	},
	setProgramConstantsFromMatrix: function(programType,firstRegister,matrix,transposedMatrix) {
		if(transposedMatrix == null) {
			transposedMatrix = false;
		}
		if(this.__state.program != null && this.__state.program.__format == "glsl") {
			this.__flushGLProgram();
			var array = null;
			var view = null;
			var buffer = null;
			var len = null;
			var this1 = new Float32Array(16);
			var data = this1;
			data[0] = matrix.rawData[0];
			data[1] = matrix.rawData[1];
			data[2] = matrix.rawData[2];
			data[3] = matrix.rawData[3];
			data[4] = matrix.rawData[4];
			data[5] = matrix.rawData[5];
			data[6] = matrix.rawData[6];
			data[7] = matrix.rawData[7];
			data[8] = matrix.rawData[8];
			data[9] = matrix.rawData[9];
			data[10] = matrix.rawData[10];
			data[11] = matrix.rawData[11];
			data[12] = matrix.rawData[12];
			data[13] = matrix.rawData[13];
			data[14] = matrix.rawData[14];
			data[15] = matrix.rawData[15];
			(lime_graphics__$WebGLRenderContext_WebGLRenderContext_$Impl_$().default).uniformMatrix4fv(this.gl,firstRegister,transposedMatrix,data);
		} else {
			var isVertex = programType == "vertex";
			var dest = isVertex ? this.__vertexConstants : this.__fragmentConstants;
			var source = matrix.rawData;
			var i = firstRegister * 4;
			if(transposedMatrix) {
				dest[i++] = source[0];
				dest[i++] = source[4];
				dest[i++] = source[8];
				dest[i++] = source[12];
				dest[i++] = source[1];
				dest[i++] = source[5];
				dest[i++] = source[9];
				dest[i++] = source[13];
				dest[i++] = source[2];
				dest[i++] = source[6];
				dest[i++] = source[10];
				dest[i++] = source[14];
				dest[i++] = source[3];
				dest[i++] = source[7];
				dest[i++] = source[11];
				dest[i++] = source[15];
			} else {
				dest[i++] = source[0];
				dest[i++] = source[1];
				dest[i++] = source[2];
				dest[i++] = source[3];
				dest[i++] = source[4];
				dest[i++] = source[5];
				dest[i++] = source[6];
				dest[i++] = source[7];
				dest[i++] = source[8];
				dest[i++] = source[9];
				dest[i++] = source[10];
				dest[i++] = source[11];
				dest[i++] = source[12];
				dest[i++] = source[13];
				dest[i++] = source[14];
				dest[i++] = source[15];
			}
			if(this.__state.program != null) {
				this.__state.program.__markDirty(isVertex,firstRegister,4);
			}
		}
	},
	setProgramConstantsFromVector: function(programType,firstRegister,data,numRegisters) {
		if(numRegisters == null) {
			numRegisters = -1;
		}
		if(numRegisters == 0) {
			return;
		}
		if(!(this.__state.program != null && this.__state.program.__format == "glsl")) {
			if(numRegisters == -1) {
				numRegisters = data.get_length() >> 2;
			}
			var isVertex = programType == "vertex";
			var dest = isVertex ? this.__vertexConstants : this.__fragmentConstants;
			var source = data;
			var sourceIndex = 0;
			var destIndex = firstRegister * 4;
			var _g = 0;
			var _g1 = numRegisters;
			while(_g < _g1) {
				var i = _g++;
				dest[destIndex++] = source[sourceIndex++];
				dest[destIndex++] = source[sourceIndex++];
				dest[destIndex++] = source[sourceIndex++];
				dest[destIndex++] = source[sourceIndex++];
			}
			if(this.__state.program != null) {
				this.__state.program.__markDirty(isVertex,firstRegister,numRegisters);
			}
		}
	},
	setRenderToBackBuffer: function() {
		this.__state.renderToTexture = null;
	},
	setRenderToTexture: function(texture,enableDepthAndStencil,antiAlias,surfaceSelector) {
		if(surfaceSelector == null) {
			surfaceSelector = 0;
		}
		if(antiAlias == null) {
			antiAlias = 0;
		}
		if(enableDepthAndStencil == null) {
			enableDepthAndStencil = false;
		}
		this.__state.renderToTexture = texture;
		this.__state.renderToTextureDepthStencil = enableDepthAndStencil;
		this.__state.renderToTextureAntiAlias = antiAlias;
		this.__state.renderToTextureSurfaceSelector = surfaceSelector;
	},
	setSamplerStateAt: function(sampler,wrap,filter,mipfilter) {
		if(this.__state.samplerStates[sampler] == null) {
			this.__state.samplerStates[sampler] = new (openfl__$internal_renderer_SamplerState().default)();
		}
		var state = this.__state.samplerStates[sampler];
		state.wrap = wrap;
		state.filter = filter;
		state.mipfilter = mipfilter;
	},
	setScissorRectangle: function(rectangle) {
		if(rectangle != null) {
			this.__state.scissorEnabled = true;
			this.__state.scissorRectangle.copyFrom(rectangle);
		} else {
			this.__state.scissorEnabled = false;
		}
	},
	setStencilActions: function(triangleFace,compareMode,actionOnBothPass,actionOnDepthFail,actionOnDepthPassStencilFail) {
		if(actionOnDepthPassStencilFail == null) {
			actionOnDepthPassStencilFail = "keep";
		}
		if(actionOnDepthFail == null) {
			actionOnDepthFail = "keep";
		}
		if(actionOnBothPass == null) {
			actionOnBothPass = "keep";
		}
		if(compareMode == null) {
			compareMode = "always";
		}
		if(triangleFace == null) {
			triangleFace = "frontAndBack";
		}
		this.__state.stencilTriangleFace = triangleFace;
		this.__state.stencilCompareMode = compareMode;
		this.__state.stencilPass = actionOnBothPass;
		this.__state.stencilDepthFail = actionOnDepthFail;
		this.__state.stencilFail = actionOnDepthPassStencilFail;
	},
	setStencilReferenceValue: function(referenceValue,readMask,writeMask) {
		if(writeMask == null) {
			writeMask = 255;
		}
		if(readMask == null) {
			readMask = 255;
		}
		this.__state.stencilReferenceValue = referenceValue;
		this.__state.stencilReadMask = readMask;
		this.__state.stencilWriteMask = writeMask;
	},
	setTextureAt: function(sampler,texture) {
		this.__state.textures[sampler] = texture;
	},
	setVertexBufferAt: function(index,buffer,bufferOffset,format) {
		if(format == null) {
			format = "float4";
		}
		if(bufferOffset == null) {
			bufferOffset = 0;
		}
		if(buffer == null) {
			this.gl.disableVertexAttribArray(index);
			this.__bindGLArrayBuffer(null);
			return;
		}
		this.__bindGLArrayBuffer(buffer.__id);
		this.gl.enableVertexAttribArray(index);
		var byteOffset = bufferOffset * 4;
		switch(format) {
		case "bytes4":
			this.gl.vertexAttribPointer(index,4,this.gl.UNSIGNED_BYTE,true,buffer.__stride,byteOffset);
			break;
		case "float1":
			this.gl.vertexAttribPointer(index,1,this.gl.FLOAT,false,buffer.__stride,byteOffset);
			break;
		case "float2":
			this.gl.vertexAttribPointer(index,2,this.gl.FLOAT,false,buffer.__stride,byteOffset);
			break;
		case "float3":
			this.gl.vertexAttribPointer(index,3,this.gl.FLOAT,false,buffer.__stride,byteOffset);
			break;
		case "float4":
			this.gl.vertexAttribPointer(index,4,this.gl.FLOAT,false,buffer.__stride,byteOffset);
			break;
		default:
			throw new (js__$Boot_HaxeError().default)(new (openfl_errors_IllegalOperationError().default)());
		}
	},
	__bindGLArrayBuffer: function(buffer) {
		if(this.__contextState.__currentGLArrayBuffer != buffer) {
			this.gl.bindBuffer(this.gl.ARRAY_BUFFER,buffer);
			this.__contextState.__currentGLArrayBuffer = buffer;
		}
	},
	__bindGLElementArrayBuffer: function(buffer) {
		if(this.__contextState.__currentGLElementArrayBuffer != buffer) {
			this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER,buffer);
			this.__contextState.__currentGLElementArrayBuffer = buffer;
		}
	},
	__bindGLFramebuffer: function(framebuffer) {
		if(this.__contextState.__currentGLFramebuffer != framebuffer) {
			this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,framebuffer);
			this.__contextState.__currentGLFramebuffer = framebuffer;
		}
	},
	__bindGLTexture2D: function(texture) {
		this.gl.bindTexture(this.gl.TEXTURE_2D,texture);
		this.__contextState.__currentGLTexture2D = texture;
	},
	__bindGLTextureCubeMap: function(texture) {
		this.gl.bindTexture(this.gl.TEXTURE_CUBE_MAP,texture);
		this.__contextState.__currentGLTextureCubeMap = texture;
	},
	__dispose: function() {
		this.driverInfo += " (Disposed)";
		if(this.__stage3D != null) {
			this.__stage3D.__indexBuffer = null;
			this.__stage3D.__vertexBuffer = null;
			this.__stage3D.context3D = null;
			this.__stage3D = null;
		}
		this.__backBufferTexture = null;
		this.__context = null;
		this.__renderStage3DProgram = null;
		this.__fragmentConstants = null;
		this.__frontBufferTexture = null;
		this.__positionScale = null;
		this.__present = false;
		this.__quadIndexBuffer = null;
		this.__stage = null;
		this.__vertexConstants = null;
	},
	__drawTriangles: function(firstIndex,count) {
		if(firstIndex == null) {
			firstIndex = 0;
		}
		if(this.__state.renderToTexture == null) {
			if(this.__stage.context3D == this && !this.__stage.__renderer.__cleared) {
				this.__stage.__renderer.__clear();
			} else if(!this.__cleared) {
				this.clear(0,0,0,0,1,0,1);
			}
		}
		this.__flushGL();
		if(this.__state.program != null) {
			this.__state.program.__flush();
		}
		this.gl.drawArrays(this.gl.TRIANGLES,firstIndex,count);
	},
	__flushGL: function() {
		this.__flushGLProgram();
		this.__flushGLFramebuffer();
		this.__flushGLViewport();
		this.__flushGLBlend();
		this.__flushGLColor();
		this.__flushGLCulling();
		this.__flushGLDepth();
		this.__flushGLScissor();
		this.__flushGLStencil();
		this.__flushGLTextures();
	},
	__flushGLBlend: function() {
		if(this.__contextState.blendDestinationRGBFactor != this.__state.blendDestinationRGBFactor || this.__contextState.blendSourceRGBFactor != this.__state.blendSourceRGBFactor || this.__contextState.blendDestinationAlphaFactor != this.__state.blendDestinationAlphaFactor || this.__contextState.blendSourceAlphaFactor != this.__state.blendSourceAlphaFactor) {
			this.__setGLBlend(true);
			if(this.__state.blendDestinationRGBFactor == this.__state.blendDestinationAlphaFactor && this.__state.blendSourceRGBFactor == this.__state.blendSourceAlphaFactor) {
				this.gl.blendFunc(this.__getGLBlend(this.__state.blendSourceRGBFactor),this.__getGLBlend(this.__state.blendDestinationRGBFactor));
			} else {
				this.gl.blendFuncSeparate(this.__getGLBlend(this.__state.blendSourceRGBFactor),this.__getGLBlend(this.__state.blendDestinationRGBFactor),this.__getGLBlend(this.__state.blendSourceAlphaFactor),this.__getGLBlend(this.__state.blendDestinationAlphaFactor));
			}
			this.__contextState.blendDestinationRGBFactor = this.__state.blendDestinationRGBFactor;
			this.__contextState.blendSourceRGBFactor = this.__state.blendSourceRGBFactor;
			this.__contextState.blendDestinationAlphaFactor = this.__state.blendDestinationAlphaFactor;
			this.__contextState.blendSourceAlphaFactor = this.__state.blendSourceAlphaFactor;
		}
	},
	__flushGLColor: function() {
		if(this.__contextState.colorMaskRed != this.__state.colorMaskRed || this.__contextState.colorMaskGreen != this.__state.colorMaskGreen || this.__contextState.colorMaskBlue != this.__state.colorMaskBlue || this.__contextState.colorMaskAlpha != this.__state.colorMaskAlpha) {
			this.gl.colorMask(this.__state.colorMaskRed,this.__state.colorMaskGreen,this.__state.colorMaskBlue,this.__state.colorMaskAlpha);
			this.__contextState.colorMaskRed = this.__state.colorMaskRed;
			this.__contextState.colorMaskGreen = this.__state.colorMaskGreen;
			this.__contextState.colorMaskBlue = this.__state.colorMaskBlue;
			this.__contextState.colorMaskAlpha = this.__state.colorMaskAlpha;
		}
	},
	__flushGLCulling: function() {
		if(this.__contextState.culling != this.__state.culling) {
			if(this.__state.culling == "none") {
				this.__setGLCullFace(false);
			} else {
				this.__setGLCullFace(true);
				switch(this.__state.culling) {
				case "back":
					this.gl.cullFace(this.gl.BACK);
					break;
				case "front":
					this.gl.cullFace(this.gl.FRONT);
					break;
				case "frontAndBack":
					this.gl.cullFace(this.gl.FRONT_AND_BACK);
					break;
				case "none":
					break;
				default:
					throw new (js__$Boot_HaxeError().default)(new (openfl_errors_IllegalOperationError().default)());
				}
			}
			this.__contextState.culling = this.__state.culling;
		}
	},
	__flushGLDepth: function() {
		var depthMask = this.__state.depthMask && (this.__state.renderToTexture != null ? this.__state.renderToTextureDepthStencil : this.__state.backBufferEnableDepthAndStencil);
		if(this.__contextState.depthMask != depthMask) {
			this.gl.depthMask(depthMask);
			this.__contextState.depthMask = depthMask;
		}
		if(this.__contextState.depthCompareMode != this.__state.depthCompareMode) {
			switch(this.__state.depthCompareMode) {
			case "always":
				this.gl.depthFunc(this.gl.ALWAYS);
				break;
			case "equal":
				this.gl.depthFunc(this.gl.EQUAL);
				break;
			case "greater":
				this.gl.depthFunc(this.gl.GREATER);
				break;
			case "greaterEqual":
				this.gl.depthFunc(this.gl.GEQUAL);
				break;
			case "less":
				this.gl.depthFunc(this.gl.LESS);
				break;
			case "lessEqual":
				this.gl.depthFunc(this.gl.LEQUAL);
				break;
			case "never":
				this.gl.depthFunc(this.gl.NEVER);
				break;
			case "notEqual":
				this.gl.depthFunc(this.gl.NOTEQUAL);
				break;
			default:
				throw new (js__$Boot_HaxeError().default)(new (openfl_errors_IllegalOperationError().default)());
			}
			this.__contextState.depthCompareMode = this.__state.depthCompareMode;
		}
	},
	__flushGLFramebuffer: function() {
		if(this.__state.renderToTexture != null) {
			if(this.__contextState.renderToTexture != this.__state.renderToTexture || this.__contextState.renderToTextureSurfaceSelector != this.__state.renderToTextureSurfaceSelector) {
				var framebuffer = this.__state.renderToTexture.__getGLFramebuffer(this.__state.renderToTextureDepthStencil,this.__state.renderToTextureAntiAlias,this.__state.renderToTextureSurfaceSelector);
				this.__bindGLFramebuffer(framebuffer);
				this.__contextState.renderToTexture = this.__state.renderToTexture;
				this.__contextState.renderToTextureAntiAlias = this.__state.renderToTextureAntiAlias;
				this.__contextState.renderToTextureDepthStencil = this.__state.renderToTextureDepthStencil;
				this.__contextState.renderToTextureSurfaceSelector = this.__state.renderToTextureSurfaceSelector;
			}
			this.__setGLDepthTest(this.__state.renderToTextureDepthStencil);
			this.__setGLStencilTest(this.__state.renderToTextureDepthStencil);
			this.__setGLFrontFace(true);
		} else {
			if(this.__stage == null && this.backBufferWidth == 0 && this.backBufferHeight == 0) {
				throw new (js__$Boot_HaxeError().default)(new (openfl_errors_Error().default)("Context3D backbuffer has not been configured"));
			}
			if(this.__contextState.renderToTexture != null || this.__contextState.__currentGLFramebuffer != this.__state.__primaryGLFramebuffer || this.__contextState.backBufferEnableDepthAndStencil != this.__state.backBufferEnableDepthAndStencil) {
				this.__bindGLFramebuffer(this.__state.__primaryGLFramebuffer);
				this.__contextState.renderToTexture = null;
				this.__contextState.backBufferEnableDepthAndStencil = this.__state.backBufferEnableDepthAndStencil;
			}
			this.__setGLDepthTest(this.__state.backBufferEnableDepthAndStencil);
			this.__setGLStencilTest(this.__state.backBufferEnableDepthAndStencil);
			this.__setGLFrontFace(this.__stage.context3D != this);
		}
	},
	__flushGLProgram: function() {
		var shader = this.__state.shader;
		var program = this.__state.program;
		if(this.__contextState.shader != shader) {
			if(this.__contextState.shader != null) {
				this.__contextState.shader.__disable();
			}
			if(shader != null) {
				shader.__enable();
			}
			this.__contextState.shader = shader;
		}
		if(this.__contextState.program != program) {
			if(this.__contextState.program != null) {
				this.__contextState.program.__disable();
			}
			if(program != null) {
				program.__enable();
			}
			this.__contextState.program = program;
		}
		if(program != null && program.__format == "agal") {
			this.__positionScale[1] = this.__stage.context3D == this && this.__state.renderToTexture == null ? 1.0 : -1.0;
			program.__setPositionScale(this.__positionScale);
		}
	},
	__flushGLScissor: function() {
		if(!this.__state.scissorEnabled) {
			if(this.__contextState.scissorEnabled != this.__state.scissorEnabled) {
				this.__setGLScissorTest(false);
				this.__contextState.scissorEnabled = false;
			}
		} else {
			this.__setGLScissorTest(true);
			this.__contextState.scissorEnabled = true;
			var scissorX = (Std().default).int(this.__state.scissorRectangle.x);
			var scissorY = (Std().default).int(this.__state.scissorRectangle.y);
			var scissorWidth = (Std().default).int(this.__state.scissorRectangle.width);
			var scissorHeight = (Std().default).int(this.__state.scissorRectangle.height);
			if(this.__state.renderToTexture == null && this.__stage3D == null) {
				var contextHeight = (Std().default).int(this.__stage.window.get_height() * this.__stage.window.get_scale());
				scissorY = contextHeight - (Std().default).int(this.__state.scissorRectangle.height) - scissorY;
			}
			if(this.__contextState.scissorRectangle.x != scissorX || this.__contextState.scissorRectangle.y != scissorY || this.__contextState.scissorRectangle.width != scissorWidth || this.__contextState.scissorRectangle.height != scissorHeight) {
				this.gl.scissor(scissorX,scissorY,scissorWidth,scissorHeight);
				this.__contextState.scissorRectangle.setTo(scissorX,scissorY,scissorWidth,scissorHeight);
			}
		}
	},
	__flushGLStencil: function() {
		if(this.__contextState.stencilTriangleFace != this.__state.stencilTriangleFace || this.__contextState.stencilPass != this.__state.stencilPass || this.__contextState.stencilDepthFail != this.__state.stencilDepthFail || this.__contextState.stencilFail != this.__state.stencilFail) {
			this.gl.stencilOpSeparate(this.__getGLTriangleFace(this.__state.stencilTriangleFace),this.__getGLStencilAction(this.__state.stencilFail),this.__getGLStencilAction(this.__state.stencilDepthFail),this.__getGLStencilAction(this.__state.stencilPass));
			this.__contextState.stencilTriangleFace = this.__state.stencilTriangleFace;
			this.__contextState.stencilPass = this.__state.stencilPass;
			this.__contextState.stencilDepthFail = this.__state.stencilDepthFail;
			this.__contextState.stencilFail = this.__state.stencilFail;
		}
		if(this.__contextState.stencilWriteMask != this.__state.stencilWriteMask) {
			this.gl.stencilMask(this.__state.stencilWriteMask);
			this.__contextState.stencilWriteMask = this.__state.stencilWriteMask;
		}
		if(this.__contextState.stencilCompareMode != this.__state.stencilCompareMode || this.__contextState.stencilReferenceValue != this.__state.stencilReferenceValue || this.__contextState.stencilReadMask != this.__state.stencilReadMask) {
			this.gl.stencilFunc(this.__getGLCompareMode(this.__state.stencilCompareMode),this.__state.stencilReferenceValue,this.__state.stencilReadMask);
			this.__contextState.stencilCompareMode = this.__state.stencilCompareMode;
			this.__contextState.stencilReferenceValue = this.__state.stencilReferenceValue;
			this.__contextState.stencilReadMask = this.__state.stencilReadMask;
		}
	},
	__flushGLTextures: function() {
		var sampler = 0;
		var texture;
		var samplerState;
		var _g = 0;
		var _g1 = this.__state.textures.length;
		while(_g < _g1) {
			var i = _g++;
			texture = this.__state.textures[i];
			samplerState = this.__state.samplerStates[i];
			if(samplerState == null) {
				this.__state.samplerStates[i] = new (openfl__$internal_renderer_SamplerState().default)();
				samplerState = this.__state.samplerStates[i];
			}
			this.gl.activeTexture(this.gl.TEXTURE0 + sampler);
			if(texture != null) {
				if(texture.__textureTarget == this.gl.TEXTURE_2D) {
					this.__bindGLTexture2D(texture.__getTexture());
				} else {
					this.__bindGLTextureCubeMap(texture.__getTexture());
				}
				this.__contextState.textures[i] = texture;
				texture.__setSamplerState(samplerState);
			} else {
				this.__bindGLTexture2D(null);
			}
			if(this.__state.program != null && this.__state.program.__format == "agal" && samplerState.textureAlpha) {
				this.gl.activeTexture(this.gl.TEXTURE0 + sampler + 4);
				if(texture != null && texture.__alphaTexture != null) {
					if(texture.__alphaTexture.__textureTarget == this.gl.TEXTURE_2D) {
						this.__bindGLTexture2D(texture.__alphaTexture.__getTexture());
					} else {
						this.__bindGLTextureCubeMap(texture.__alphaTexture.__getTexture());
					}
					texture.__alphaTexture.__setSamplerState(samplerState);
					this.gl.uniform1i(this.__state.program.__agalAlphaSamplerEnabled[sampler].location,1);
				} else {
					this.__bindGLTexture2D(null);
					if(this.__state.program.__agalAlphaSamplerEnabled[sampler] != null) {
						this.gl.uniform1i(this.__state.program.__agalAlphaSamplerEnabled[sampler].location,0);
					}
				}
			}
			++sampler;
		}
	},
	__flushGLViewport: function() {
		if(this.__state.renderToTexture == null) {
			if(this.__stage.context3D == this) {
				var x = this.__stage3D == null ? 0 : (Std().default).int(this.__stage3D.get_x());
				var y = (Std().default).int(this.__stage.window.get_height() * this.__stage.window.get_scale() - this.backBufferHeight - (this.__stage3D == null ? 0 : this.__stage3D.get_y()));
				this.gl.viewport(x,y,this.backBufferWidth,this.backBufferHeight);
			} else {
				this.gl.viewport(0,0,this.backBufferWidth,this.backBufferHeight);
			}
		} else {
			var width = 0;
			var height = 0;
			if(((this.__state.renderToTexture) instanceof (openfl_display3D_textures_Texture().default))) {
				var texture2D = this.__state.renderToTexture;
				width = texture2D.__width;
				height = texture2D.__height;
			} else if(((this.__state.renderToTexture) instanceof (openfl_display3D_textures_RectangleTexture().default))) {
				var rectTexture = this.__state.renderToTexture;
				width = rectTexture.__width;
				height = rectTexture.__height;
			} else if(((this.__state.renderToTexture) instanceof (openfl_display3D_textures_CubeTexture().default))) {
				var cubeTexture = this.__state.renderToTexture;
				width = cubeTexture.__size;
				height = cubeTexture.__size;
			}
			this.gl.viewport(0,0,width,height);
		}
	},
	__getGLBlend: function(blendFactor) {
		switch(blendFactor) {
		case "destinationAlpha":
			return this.gl.DST_ALPHA;
		case "destinationColor":
			return this.gl.DST_COLOR;
		case "one":
			return this.gl.ONE;
		case "oneMinusDestinationAlpha":
			return this.gl.ONE_MINUS_DST_ALPHA;
		case "oneMinusDestinationColor":
			return this.gl.ONE_MINUS_DST_COLOR;
		case "oneMinusSourceAlpha":
			return this.gl.ONE_MINUS_SRC_ALPHA;
		case "oneMinusSourceColor":
			return this.gl.ONE_MINUS_SRC_COLOR;
		case "sourceAlpha":
			return this.gl.SRC_ALPHA;
		case "sourceColor":
			return this.gl.SRC_COLOR;
		case "zero":
			return this.gl.ZERO;
		default:
			throw new (js__$Boot_HaxeError().default)(new (openfl_errors_IllegalOperationError().default)());
		}
	},
	__getGLCompareMode: function(mode) {
		switch(mode) {
		case "always":
			return this.gl.ALWAYS;
		case "equal":
			return this.gl.EQUAL;
		case "greater":
			return this.gl.GREATER;
		case "greaterEqual":
			return this.gl.GEQUAL;
		case "less":
			return this.gl.LESS;
		case "lessEqual":
			return this.gl.LEQUAL;
		case "never":
			return this.gl.NEVER;
		case "notEqual":
			return this.gl.NOTEQUAL;
		default:
			return this.gl.EQUAL;
		}
	},
	__getGLStencilAction: function(action) {
		switch(action) {
		case "decrementSaturate":
			return this.gl.DECR;
		case "decrementWrap":
			return this.gl.DECR_WRAP;
		case "incrementSaturate":
			return this.gl.INCR;
		case "incrementWrap":
			return this.gl.INCR_WRAP;
		case "invert":
			return this.gl.INVERT;
		case "keep":
			return this.gl.KEEP;
		case "set":
			return this.gl.REPLACE;
		case "zero":
			return this.gl.ZERO;
		default:
			return this.gl.KEEP;
		}
	},
	__getGLTriangleFace: function(face) {
		switch(face) {
		case "back":
			return this.gl.BACK;
		case "front":
			return this.gl.FRONT;
		case "frontAndBack":
			return this.gl.FRONT_AND_BACK;
		case "none":
			return this.gl.NONE;
		default:
			return this.gl.FRONT_AND_BACK;
		}
	},
	__renderStage3D: function(stage3D) {
		var context = stage3D.context3D;
		if(context != null && context != this && context.__frontBufferTexture != null && stage3D.visible && this.backBufferHeight > 0 && this.backBufferWidth > 0) {
			if(this.__renderStage3DProgram == null) {
				var vertexAssembler = new (openfl_utils_AGALMiniAssembler().default)();
				vertexAssembler.assemble("vertex","m44 op, va0, vc0\n" + "mov v0, va1");
				var fragmentAssembler = new (openfl_utils_AGALMiniAssembler().default)();
				fragmentAssembler.assemble("fragment","tex ft1, v0, fs0 <2d,nearest,nomip>\n" + "mov oc, ft1");
				this.__renderStage3DProgram = this.createProgram();
				this.__renderStage3DProgram.upload(vertexAssembler.agalcode,fragmentAssembler.agalcode);
			}
			this.setProgram(this.__renderStage3DProgram);
			this.setBlendFactors("one","zero");
			this.setColorMask(true,true,true,true);
			this.setCulling("none");
			this.setDepthTest(false,"always");
			this.setStencilActions();
			this.setStencilReferenceValue(0,0,0);
			this.setScissorRectangle(null);
			this.setTextureAt(0,context.__frontBufferTexture);
			this.setVertexBufferAt(0,stage3D.__vertexBuffer,0,"float3");
			this.setVertexBufferAt(1,stage3D.__vertexBuffer,3,"float2");
			this.setProgramConstantsFromMatrix("vertex",0,stage3D.__renderTransform,true);
			this.drawTriangles(stage3D.__indexBuffer);
			this.__present = true;
		}
	},
	__setGLBlend: function(enable) {
		if(this.__contextState.__enableGLBlend != enable) {
			if(enable) {
				this.gl.enable(this.gl.BLEND);
			} else {
				this.gl.disable(this.gl.BLEND);
			}
			this.__contextState.__enableGLBlend = enable;
		}
	},
	__setGLBlendEquation: function(value) {
		if(this.__contextState.__glBlendEquation != value) {
			this.gl.blendEquation(value);
			this.__contextState.__glBlendEquation = value;
		}
	},
	__setGLCullFace: function(enable) {
		if(this.__contextState.__enableGLCullFace != enable) {
			if(enable) {
				this.gl.enable(this.gl.CULL_FACE);
			} else {
				this.gl.disable(this.gl.CULL_FACE);
			}
			this.__contextState.__enableGLCullFace = enable;
		}
	},
	__setGLDepthTest: function(enable) {
		if(this.__contextState.__enableGLDepthTest != enable) {
			if(enable) {
				this.gl.enable(this.gl.DEPTH_TEST);
			} else {
				this.gl.disable(this.gl.DEPTH_TEST);
			}
			this.__contextState.__enableGLDepthTest = enable;
		}
	},
	__setGLFrontFace: function(counterClockWise) {
		if(this.__contextState.__frontFaceGLCCW != counterClockWise) {
			this.gl.frontFace(counterClockWise ? this.gl.CCW : this.gl.CW);
			this.__contextState.__frontFaceGLCCW = counterClockWise;
		}
	},
	__setGLScissorTest: function(enable) {
		if(this.__contextState.__enableGLScissorTest != enable) {
			if(enable) {
				this.gl.enable(this.gl.SCISSOR_TEST);
			} else {
				this.gl.disable(this.gl.SCISSOR_TEST);
			}
			this.__contextState.__enableGLScissorTest = enable;
		}
	},
	__setGLStencilTest: function(enable) {
		if(this.__contextState.__enableGLStencilTest != enable) {
			if(enable) {
				this.gl.enable(this.gl.STENCIL_TEST);
			} else {
				this.gl.disable(this.gl.STENCIL_TEST);
			}
			this.__contextState.__enableGLStencilTest = enable;
		}
	},
	get_enableErrorChecking: function() {
		return this.__enableErrorChecking;
	},
	set_enableErrorChecking: function(value) {
		return this.__enableErrorChecking = value;
	},
	get_totalGPUMemory: function() {
		if(Context3D.__glMemoryCurrentAvailable != -1) {
			var current = this.gl.getParameter(Context3D.__glMemoryCurrentAvailable);
			var total = this.gl.getParameter(Context3D.__glMemoryTotalAvailable);
			if(total > 0) {
				return (total - current) * 1024;
			}
		}
		return 0;
	}
});
Context3D.prototype.__class__ = Context3D.prototype.constructor = $hxClasses["openfl.display3D.Context3D"] = Context3D;

// Init



// Statics


Context3D.supportsVideoTexture = true
Context3D.__glDepthStencil = -1
Context3D.__glMaxTextureMaxAnisotropy = -1
Context3D.__glMaxViewportDims = -1
Context3D.__glMemoryCurrentAvailable = -1
Context3D.__glMemoryTotalAvailable = -1
Context3D.__glTextureMaxAnisotropy = -1

// Export

exports.default = Context3D;