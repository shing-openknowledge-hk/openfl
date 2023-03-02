// Class: openfl.display.OpenGLRenderer

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;
var $import = require("./../../import_stub").default;
var $extend = require("./../../extend_stub").default;
function openfl_display_DisplayObjectRenderer() {return require("./../../openfl/display/DisplayObjectRenderer");}
function lime_math__$Matrix4_Matrix4_$Impl_$() {return require("./../../lime/math/_Matrix4/Matrix4_Impl_");}
function openfl_geom_Matrix() {return require("./../../openfl/geom/Matrix");}
function openfl_geom_Rectangle() {return require("./../../openfl/geom/Rectangle");}
function openfl_display_Graphics() {return require("./../../openfl/display/Graphics");}
function openfl_display_CanvasRenderer() {return require("./../../openfl/display/CanvasRenderer");}
function openfl_display_DisplayObjectShader() {return require("./../../openfl/display/DisplayObjectShader");}
function openfl_display_GraphicsShader() {return require("./../../openfl/display/GraphicsShader");}
function lime_utils_ObjectPool() {return require("./../../lime/utils/ObjectPool");}
function openfl_display_Shape() {return require("./../../openfl/display/Shape");}
function openfl__$internal_renderer_context3D_Context3DMaskShader() {return require("./../../openfl/_internal/renderer/context3D/Context3DMaskShader");}

// Constructor

var OpenGLRenderer = function(context,defaultRenderTarget) {
	(openfl_display_DisplayObjectRenderer().default).call(this);
	this.__context3D = context;
	this.__context = context.__context;
	this.gl = context.__context.webgl;
	this.__gl = this.gl;
	this.__defaultRenderTarget = defaultRenderTarget;
	this.__flipped = this.__defaultRenderTarget == null;
	if((openfl_display_Graphics().default).maxTextureWidth == null) {
		(openfl_display_Graphics().default).maxTextureWidth = (openfl_display_Graphics().default).maxTextureHeight = this.__gl.getParameter(this.__gl.MAX_TEXTURE_SIZE);
	}
	this.__matrix = (lime_math__$Matrix4_Matrix4_$Impl_$().default)._new();
	this.__values = [];
	this.__softwareRenderer = new (openfl_display_CanvasRenderer().default)(null);
	this.__type = "opengl";
	this.__setBlendMode("normal");
	this.__context3D.__setGLBlend(true);
	this.__clipRects = [];
	this.__maskObjects = [];
	this.__numClipRects = 0;
	this.__projection = (lime_math__$Matrix4_Matrix4_$Impl_$().default)._new();
	this.__projectionFlipped = (lime_math__$Matrix4_Matrix4_$Impl_$().default)._new();
	this.__stencilReference = 0;
	this.__tempRect = new (openfl_geom_Rectangle().default)();
	this.__defaultDisplayShader = new (openfl_display_DisplayObjectShader().default)();
	this.__defaultGraphicsShader = new (openfl_display_GraphicsShader().default)();
	this.__defaultShader = this.__defaultDisplayShader;
	this.__initShader(this.__defaultShader);
	this.__scrollRectMasks = new (lime_utils_ObjectPool().default)(function() {
		return new (openfl_display_Shape().default)();
	});
	this.__maskShader = new (openfl__$internal_renderer_context3D_Context3DMaskShader().default)();
}

// Meta

OpenGLRenderer.__name__ = "openfl.display.OpenGLRenderer";
OpenGLRenderer.__isInterface__ = false;
OpenGLRenderer.__super__ = (openfl_display_DisplayObjectRenderer().default);
OpenGLRenderer.prototype = $extend((openfl_display_DisplayObjectRenderer().default).prototype, {
	applyAlpha: function(alpha) {
		OpenGLRenderer.__alphaValue[0] = alpha;
		if(this.__currentShaderBuffer != null) {
			this.__currentShaderBuffer.addFloatOverride("openfl_Alpha",OpenGLRenderer.__alphaValue);
		} else if(this.__currentShader != null) {
			if(this.__currentShader.__alpha != null) {
				this.__currentShader.__alpha.value = OpenGLRenderer.__alphaValue;
			}
		}
	},
	applyBitmapData: function(bitmapData,smooth,repeat) {
		if(repeat == null) {
			repeat = false;
		}
		if(this.__currentShaderBuffer != null) {
			if(bitmapData != null) {
				OpenGLRenderer.__textureSizeValue[0] = bitmapData.__textureWidth;
				OpenGLRenderer.__textureSizeValue[1] = bitmapData.__textureHeight;
				this.__currentShaderBuffer.addFloatOverride("openfl_TextureSize",OpenGLRenderer.__textureSizeValue);
			}
		} else if(this.__currentShader != null) {
			if(this.__currentShader.__bitmap != null) {
				this.__currentShader.__bitmap.input = bitmapData;
				this.__currentShader.__bitmap.filter = smooth && this.__allowSmoothing ? "linear" : "nearest";
				this.__currentShader.__bitmap.mipFilter = "mipnone";
				this.__currentShader.__bitmap.wrap = repeat ? "repeat" : "clamp";
			}
			if(this.__currentShader.__texture != null) {
				this.__currentShader.__texture.input = bitmapData;
				this.__currentShader.__texture.filter = smooth && this.__allowSmoothing ? "linear" : "nearest";
				this.__currentShader.__texture.mipFilter = "mipnone";
				this.__currentShader.__texture.wrap = repeat ? "repeat" : "clamp";
			}
			if(this.__currentShader.__textureSize != null) {
				if(bitmapData != null) {
					OpenGLRenderer.__textureSizeValue[0] = bitmapData.__textureWidth;
					OpenGLRenderer.__textureSizeValue[1] = bitmapData.__textureHeight;
					this.__currentShader.__textureSize.value = OpenGLRenderer.__textureSizeValue;
				} else {
					this.__currentShader.__textureSize.value = null;
				}
			}
		}
	},
	applyColorTransform: function(colorTransform) {
		var enabled = colorTransform != null && !colorTransform.__isDefault(true);
		this.applyHasColorTransform(enabled);
		if(enabled) {
			colorTransform.__setArrays(OpenGLRenderer.__colorMultipliersValue,OpenGLRenderer.__colorOffsetsValue);
			if(this.__currentShaderBuffer != null) {
				this.__currentShaderBuffer.addFloatOverride("openfl_ColorMultiplier",OpenGLRenderer.__colorMultipliersValue);
				this.__currentShaderBuffer.addFloatOverride("openfl_ColorOffset",OpenGLRenderer.__colorOffsetsValue);
			} else if(this.__currentShader != null) {
				if(this.__currentShader.__colorMultiplier != null) {
					this.__currentShader.__colorMultiplier.value = OpenGLRenderer.__colorMultipliersValue;
				}
				if(this.__currentShader.__colorOffset != null) {
					this.__currentShader.__colorOffset.value = OpenGLRenderer.__colorOffsetsValue;
				}
			}
		} else if(this.__currentShaderBuffer != null) {
			this.__currentShaderBuffer.addFloatOverride("openfl_ColorMultiplier",OpenGLRenderer.__emptyColorValue);
			this.__currentShaderBuffer.addFloatOverride("openfl_ColorOffset",OpenGLRenderer.__emptyColorValue);
		} else if(this.__currentShader != null) {
			if(this.__currentShader.__colorMultiplier != null) {
				this.__currentShader.__colorMultiplier.value = OpenGLRenderer.__emptyColorValue;
			}
			if(this.__currentShader.__colorOffset != null) {
				this.__currentShader.__colorOffset.value = OpenGLRenderer.__emptyColorValue;
			}
		}
	},
	applyHasColorTransform: function(enabled) {
		OpenGLRenderer.__hasColorTransformValue[0] = enabled;
		if(this.__currentShaderBuffer != null) {
			this.__currentShaderBuffer.addBoolOverride("openfl_HasColorTransform",OpenGLRenderer.__hasColorTransformValue);
		} else if(this.__currentShader != null) {
			if(this.__currentShader.__hasColorTransform != null) {
				this.__currentShader.__hasColorTransform.value = OpenGLRenderer.__hasColorTransformValue;
			}
		}
	},
	applyMatrix: function(matrix) {
		if(this.__currentShaderBuffer != null) {
			this.__currentShaderBuffer.addFloatOverride("openfl_Matrix",matrix);
		} else if(this.__currentShader != null) {
			if(this.__currentShader.__matrix != null) {
				this.__currentShader.__matrix.value = matrix;
			}
		}
	},
	getMatrix: function(transform) {
		if(this.gl != null) {
			var values = this.__getMatrix(transform,"auto");
			(lime_math__$Matrix4_Matrix4_$Impl_$().default).set(this.__matrix,0,values[0]);
			(lime_math__$Matrix4_Matrix4_$Impl_$().default).set(this.__matrix,1,values[1]);
			(lime_math__$Matrix4_Matrix4_$Impl_$().default).set(this.__matrix,2,values[2]);
			(lime_math__$Matrix4_Matrix4_$Impl_$().default).set(this.__matrix,3,values[3]);
			(lime_math__$Matrix4_Matrix4_$Impl_$().default).set(this.__matrix,4,values[4]);
			(lime_math__$Matrix4_Matrix4_$Impl_$().default).set(this.__matrix,5,values[5]);
			(lime_math__$Matrix4_Matrix4_$Impl_$().default).set(this.__matrix,6,values[6]);
			(lime_math__$Matrix4_Matrix4_$Impl_$().default).set(this.__matrix,7,values[7]);
			(lime_math__$Matrix4_Matrix4_$Impl_$().default).set(this.__matrix,8,values[8]);
			(lime_math__$Matrix4_Matrix4_$Impl_$().default).set(this.__matrix,9,values[9]);
			(lime_math__$Matrix4_Matrix4_$Impl_$().default).set(this.__matrix,10,values[10]);
			(lime_math__$Matrix4_Matrix4_$Impl_$().default).set(this.__matrix,11,values[11]);
			(lime_math__$Matrix4_Matrix4_$Impl_$().default).set(this.__matrix,12,values[12]);
			(lime_math__$Matrix4_Matrix4_$Impl_$().default).set(this.__matrix,13,values[13]);
			(lime_math__$Matrix4_Matrix4_$Impl_$().default).set(this.__matrix,14,values[14]);
			(lime_math__$Matrix4_Matrix4_$Impl_$().default).set(this.__matrix,15,values[15]);
			return this.__matrix;
		} else {
			(lime_math__$Matrix4_Matrix4_$Impl_$().default).identity(this.__matrix);
			(lime_math__$Matrix4_Matrix4_$Impl_$().default).set(this.__matrix,0,transform.a);
			(lime_math__$Matrix4_Matrix4_$Impl_$().default).set(this.__matrix,1,transform.b);
			(lime_math__$Matrix4_Matrix4_$Impl_$().default).set(this.__matrix,4,transform.c);
			(lime_math__$Matrix4_Matrix4_$Impl_$().default).set(this.__matrix,5,transform.d);
			(lime_math__$Matrix4_Matrix4_$Impl_$().default).set(this.__matrix,12,transform.tx);
			(lime_math__$Matrix4_Matrix4_$Impl_$().default).set(this.__matrix,13,transform.ty);
			return this.__matrix;
		}
	},
	setShader: function(shader) {
		this.__currentShaderBuffer = null;
		if(this.__currentShader == shader) {
			return;
		}
		var tmp = this.__currentShader != null;
		if(shader == null) {
			this.__currentShader = null;
			this.__context3D.setProgram(null);
			return;
		} else {
			this.__currentShader = shader;
			this.__initShader(shader);
			this.__context3D.setProgram(shader.program);
			this.__context3D.__flushGLProgram();
			this.__currentShader.__enable();
			this.__context3D.__state.shader = shader;
		}
	},
	setViewport: function() {
		this.__gl.viewport(this.__offsetX,this.__offsetY,this.__displayWidth,this.__displayHeight);
	},
	updateShader: function() {
		if(this.__currentShader != null) {
			if(this.__currentShader.__position != null) {
				this.__currentShader.__position.__useArray = true;
			}
			if(this.__currentShader.__textureCoord != null) {
				this.__currentShader.__textureCoord.__useArray = true;
			}
			this.__context3D.setProgram(this.__currentShader.program);
			this.__context3D.__flushGLProgram();
			this.__context3D.__flushGLTextures();
			this.__currentShader.__update();
		}
	},
	useAlphaArray: function() {
		if(this.__currentShader != null) {
			if(this.__currentShader.__alpha != null) {
				this.__currentShader.__alpha.__useArray = true;
			}
		}
	},
	useColorTransformArray: function() {
		if(this.__currentShader != null) {
			if(this.__currentShader.__colorMultiplier != null) {
				this.__currentShader.__colorMultiplier.__useArray = true;
			}
			if(this.__currentShader.__colorOffset != null) {
				this.__currentShader.__colorOffset.__useArray = true;
			}
		}
	},
	__cleanup: function() {
		if(this.__stencilReference > 0) {
			this.__stencilReference = 0;
			this.__context3D.setStencilActions();
			this.__context3D.setStencilReferenceValue(0,0,0);
		}
		if(this.__numClipRects > 0) {
			this.__numClipRects = 0;
			this.__scissorRect();
		}
	},
	__clear: function() {
		if(this.__stage == null || this.__stage.__transparent) {
			this.__context3D.clear(0,0,0,0,0,0,1);
		} else {
			this.__context3D.clear(this.__stage.__colorSplit[0],this.__stage.__colorSplit[1],this.__stage.__colorSplit[2],1,0,0,1);
		}
		this.__cleared = true;
	},
	__clearShader: function() {
		if(this.__currentShader != null) {
			if(this.__currentShaderBuffer == null) {
				if(this.__currentShader.__bitmap != null) {
					this.__currentShader.__bitmap.input = null;
				}
			} else {
				this.__currentShaderBuffer.clearOverride();
			}
			if(this.__currentShader.__texture != null) {
				this.__currentShader.__texture.input = null;
			}
			if(this.__currentShader.__textureSize != null) {
				this.__currentShader.__textureSize.value = null;
			}
			if(this.__currentShader.__hasColorTransform != null) {
				this.__currentShader.__hasColorTransform.value = null;
			}
			if(this.__currentShader.__position != null) {
				this.__currentShader.__position.value = null;
			}
			if(this.__currentShader.__matrix != null) {
				this.__currentShader.__matrix.value = null;
			}
			this.__currentShader.__clearUseArray();
		}
	},
	__copyShader: function(other) {
		this.__currentShader = other.__currentShader;
		this.__currentShaderBuffer = other.__currentShaderBuffer;
		this.__currentDisplayShader = other.__currentDisplayShader;
		this.__currentGraphicsShader = other.__currentGraphicsShader;
	},
	__getMatrix: function(transform,pixelSnapping) {
		var _matrix = (openfl_geom_Matrix().default).__pool.get();
		_matrix.copyFrom(transform);
		_matrix.concat(this.__worldTransform);
		if(pixelSnapping == "always" || pixelSnapping == "auto" && _matrix.b == 0 && _matrix.c == 0 && (_matrix.a < 1.001 && _matrix.a > 0.999) && (_matrix.d < 1.001 && _matrix.d > 0.999)) {
			_matrix.tx = Math.round(_matrix.tx);
			_matrix.ty = Math.round(_matrix.ty);
		}
		(lime_math__$Matrix4_Matrix4_$Impl_$().default).identity(this.__matrix);
		(lime_math__$Matrix4_Matrix4_$Impl_$().default).set(this.__matrix,0,_matrix.a);
		(lime_math__$Matrix4_Matrix4_$Impl_$().default).set(this.__matrix,1,_matrix.b);
		(lime_math__$Matrix4_Matrix4_$Impl_$().default).set(this.__matrix,4,_matrix.c);
		(lime_math__$Matrix4_Matrix4_$Impl_$().default).set(this.__matrix,5,_matrix.d);
		(lime_math__$Matrix4_Matrix4_$Impl_$().default).set(this.__matrix,12,_matrix.tx);
		(lime_math__$Matrix4_Matrix4_$Impl_$().default).set(this.__matrix,13,_matrix.ty);
		(lime_math__$Matrix4_Matrix4_$Impl_$().default).append(this.__matrix,this.__flipped ? this.__projectionFlipped : this.__projection);
		this.__values[0] = (lime_math__$Matrix4_Matrix4_$Impl_$().default).get(this.__matrix,0);
		this.__values[1] = (lime_math__$Matrix4_Matrix4_$Impl_$().default).get(this.__matrix,1);
		this.__values[2] = (lime_math__$Matrix4_Matrix4_$Impl_$().default).get(this.__matrix,2);
		this.__values[3] = (lime_math__$Matrix4_Matrix4_$Impl_$().default).get(this.__matrix,3);
		this.__values[4] = (lime_math__$Matrix4_Matrix4_$Impl_$().default).get(this.__matrix,4);
		this.__values[5] = (lime_math__$Matrix4_Matrix4_$Impl_$().default).get(this.__matrix,5);
		this.__values[6] = (lime_math__$Matrix4_Matrix4_$Impl_$().default).get(this.__matrix,6);
		this.__values[7] = (lime_math__$Matrix4_Matrix4_$Impl_$().default).get(this.__matrix,7);
		this.__values[8] = (lime_math__$Matrix4_Matrix4_$Impl_$().default).get(this.__matrix,8);
		this.__values[9] = (lime_math__$Matrix4_Matrix4_$Impl_$().default).get(this.__matrix,9);
		this.__values[10] = (lime_math__$Matrix4_Matrix4_$Impl_$().default).get(this.__matrix,10);
		this.__values[11] = (lime_math__$Matrix4_Matrix4_$Impl_$().default).get(this.__matrix,11);
		this.__values[12] = (lime_math__$Matrix4_Matrix4_$Impl_$().default).get(this.__matrix,12);
		this.__values[13] = (lime_math__$Matrix4_Matrix4_$Impl_$().default).get(this.__matrix,13);
		this.__values[14] = (lime_math__$Matrix4_Matrix4_$Impl_$().default).get(this.__matrix,14);
		this.__values[15] = (lime_math__$Matrix4_Matrix4_$Impl_$().default).get(this.__matrix,15);
		(openfl_geom_Matrix().default).__pool.release(_matrix);
		return this.__values;
	},
	__initShader: function(shader) {
		if(shader != null) {
			if(shader.__context == null) {
				shader.__context = this.__context3D;
				shader.__init();
			}
			return shader;
		}
		return this.__defaultShader;
	},
	__initDisplayShader: function(shader) {
		if(shader != null) {
			if(shader.__context == null) {
				shader.__context = this.__context3D;
				shader.__init();
			}
			return shader;
		}
		return this.__defaultDisplayShader;
	},
	__initGraphicsShader: function(shader) {
		if(shader != null) {
			if(shader.__context == null) {
				shader.__context = this.__context3D;
				shader.__init();
			}
			return shader;
		}
		return this.__defaultGraphicsShader;
	},
	__initShaderBuffer: function(shaderBuffer) {
		if(shaderBuffer != null) {
			return this.__initGraphicsShader(shaderBuffer.shader);
		}
		return this.__defaultGraphicsShader;
	},
	__popMask: function() {
		if(this.__stencilReference == 0) {
			return;
		}
		var mask = this.__maskObjects.pop();
		if(this.__stencilReference > 1) {
			this.__context3D.setStencilActions("frontAndBack","equal","decrementSaturate","decrementSaturate","keep");
			this.__context3D.setStencilReferenceValue(this.__stencilReference,255,255);
			this.__context3D.setColorMask(false,false,false,false);
			mask.__renderGLMask(this);
			this.__stencilReference--;
			this.__context3D.setStencilActions("frontAndBack","equal","keep","keep","keep");
			this.__context3D.setStencilReferenceValue(this.__stencilReference,255,0);
			this.__context3D.setColorMask(true,true,true,true);
		} else {
			this.__stencilReference = 0;
			this.__context3D.setStencilActions();
			this.__context3D.setStencilReferenceValue(0,0,0);
		}
	},
	__popMaskObject: function(object,handleScrollRect) {
		if(handleScrollRect == null) {
			handleScrollRect = true;
		}
		if(object.__mask != null) {
			this.__popMask();
		}
		if(handleScrollRect && object.__scrollRect != null) {
			if(object.__renderTransform.b != 0 || object.__renderTransform.c != 0) {
				this.__scrollRectMasks.release(this.__maskObjects[this.__maskObjects.length - 1]);
				this.__popMask();
			} else {
				this.__popMaskRect();
			}
		}
	},
	__popMaskRect: function() {
		if(this.__numClipRects > 0) {
			this.__numClipRects--;
			if(this.__numClipRects > 0) {
				this.__scissorRect(this.__clipRects[this.__numClipRects - 1]);
			} else {
				this.__scissorRect();
			}
		}
	},
	__pushMask: function(mask) {
		if(this.__stencilReference == 0) {
			this.__context3D.clear(0,0,0,0,0,0,4);
			this.__updatedStencil = true;
		}
		this.__context3D.setStencilActions("frontAndBack","equal","incrementSaturate","keep","keep");
		this.__context3D.setStencilReferenceValue(this.__stencilReference,255,255);
		this.__context3D.setColorMask(false,false,false,false);
		mask.__renderGLMask(this);
		this.__maskObjects.push(mask);
		this.__stencilReference++;
		this.__context3D.setStencilActions("frontAndBack","equal","keep","keep","keep");
		this.__context3D.setStencilReferenceValue(this.__stencilReference,255,0);
		this.__context3D.setColorMask(true,true,true,true);
	},
	__pushMaskObject: function(object,handleScrollRect) {
		if(handleScrollRect == null) {
			handleScrollRect = true;
		}
		if(handleScrollRect && object.__scrollRect != null) {
			if(object.__renderTransform.b != 0 || object.__renderTransform.c != 0) {
				var shape = this.__scrollRectMasks.get();
				shape.get_graphics().clear();
				shape.get_graphics().beginFill(65280);
				shape.get_graphics().drawRect(object.__scrollRect.x,object.__scrollRect.y,object.__scrollRect.width,object.__scrollRect.height);
				shape.__renderTransform.copyFrom(object.__renderTransform);
				this.__pushMask(shape);
			} else {
				this.__pushMaskRect(object.__scrollRect,object.__renderTransform);
			}
		}
		if(object.__mask != null) {
			this.__pushMask(object.__mask);
		}
	},
	__pushMaskRect: function(rect,transform) {
		if(this.__numClipRects == this.__clipRects.length) {
			this.__clipRects[this.__numClipRects] = new (openfl_geom_Rectangle().default)();
		}
		var _matrix = (openfl_geom_Matrix().default).__pool.get();
		_matrix.copyFrom(transform);
		_matrix.concat(this.__worldTransform);
		var clipRect = this.__clipRects[this.__numClipRects];
		rect.__transform(clipRect,_matrix);
		if(this.__numClipRects > 0) {
			var parentClipRect = this.__clipRects[this.__numClipRects - 1];
			clipRect.__contract(parentClipRect.x,parentClipRect.y,parentClipRect.width,parentClipRect.height);
		}
		if(clipRect.height < 0) {
			clipRect.height = 0;
		}
		if(clipRect.width < 0) {
			clipRect.width = 0;
		}
		(openfl_geom_Matrix().default).__pool.release(_matrix);
		this.__scissorRect(clipRect);
		this.__numClipRects++;
	},
	__render: function(object) {
		this.__context3D.setColorMask(true,true,true,true);
		this.__context3D.setCulling("none");
		this.__context3D.setDepthTest(false,"always");
		this.__context3D.setStencilActions();
		this.__context3D.setStencilReferenceValue(0,0,0);
		this.__context3D.setScissorRectangle(null);
		this.__blendMode = null;
		this.__setBlendMode("normal");
		if(this.__defaultRenderTarget == null) {
			OpenGLRenderer.__scissorRectangle.setTo(this.__offsetX,this.__offsetY,this.__displayWidth,this.__displayHeight);
			this.__context3D.setScissorRectangle(OpenGLRenderer.__scissorRectangle);
			this.__upscaled = this.__worldTransform.a != 1 || this.__worldTransform.d != 1;
			object.__renderGL(this);
			if(this.__offsetX > 0 || this.__offsetY > 0) {
				if(this.__offsetX > 0) {
					OpenGLRenderer.__scissorRectangle.setTo(0,0,this.__offsetX,this.__height);
					this.__context3D.setScissorRectangle(OpenGLRenderer.__scissorRectangle);
					this.__context3D.__flushGL();
					this.__gl.clearColor(0,0,0,1);
					this.__gl.clear(this.__gl.COLOR_BUFFER_BIT);
					OpenGLRenderer.__scissorRectangle.setTo(this.__offsetX + this.__displayWidth,0,this.__width,this.__height);
					this.__context3D.setScissorRectangle(OpenGLRenderer.__scissorRectangle);
					this.__context3D.__flushGL();
					this.__gl.clearColor(0,0,0,1);
					this.__gl.clear(this.__gl.COLOR_BUFFER_BIT);
				}
				if(this.__offsetY > 0) {
					OpenGLRenderer.__scissorRectangle.setTo(0,0,this.__width,this.__offsetY);
					this.__context3D.setScissorRectangle(OpenGLRenderer.__scissorRectangle);
					this.__context3D.__flushGL();
					this.__gl.clearColor(0,0,0,1);
					this.__gl.clear(this.__gl.COLOR_BUFFER_BIT);
					OpenGLRenderer.__scissorRectangle.setTo(0,this.__offsetY + this.__displayHeight,this.__width,this.__height);
					this.__context3D.setScissorRectangle(OpenGLRenderer.__scissorRectangle);
					this.__context3D.__flushGL();
					this.__gl.clearColor(0,0,0,1);
					this.__gl.clear(this.__gl.COLOR_BUFFER_BIT);
				}
				this.__context3D.setScissorRectangle(null);
			}
		} else {
			OpenGLRenderer.__scissorRectangle.setTo(this.__offsetX,this.__offsetY,this.__displayWidth,this.__displayHeight);
			this.__context3D.setScissorRectangle(OpenGLRenderer.__scissorRectangle);
			var cacheMask = object.__mask;
			var cacheScrollRect = object.__scrollRect;
			object.__mask = null;
			object.__scrollRect = null;
			object.__renderGL(this);
			object.__mask = cacheMask;
			object.__scrollRect = cacheScrollRect;
		}
		this.__context3D.present();
	},
	__renderFilterPass: function(source,shader,smooth,clear) {
		if(clear == null) {
			clear = true;
		}
		if(source == null || shader == null) {
			return;
		}
		if(this.__defaultRenderTarget == null) {
			return;
		}
		var cacheRTT = this.__context3D.__state.renderToTexture;
		var cacheRTTDepthStencil = this.__context3D.__state.renderToTextureDepthStencil;
		var cacheRTTAntiAlias = this.__context3D.__state.renderToTextureAntiAlias;
		var cacheRTTSurfaceSelector = this.__context3D.__state.renderToTextureSurfaceSelector;
		this.__context3D.setRenderToTexture(this.__defaultRenderTarget.getTexture(this.__context3D),false);
		if(clear) {
			this.__context3D.clear(0,0,0,0,0,0,1);
		}
		var shader1 = this.__initShader(shader);
		this.setShader(shader1);
		this.applyAlpha(1);
		this.applyBitmapData(source,smooth);
		this.applyColorTransform(null);
		this.applyMatrix(this.__getMatrix(source.__renderTransform,"auto"));
		this.updateShader();
		var vertexBuffer = source.getVertexBuffer(this.__context3D);
		if(shader1.__position != null) {
			this.__context3D.setVertexBufferAt(shader1.__position.index,vertexBuffer,0,"float3");
		}
		if(shader1.__textureCoord != null) {
			this.__context3D.setVertexBufferAt(shader1.__textureCoord.index,vertexBuffer,3,"float2");
		}
		var indexBuffer = source.getIndexBuffer(this.__context3D);
		this.__context3D.drawTriangles(indexBuffer);
		if(cacheRTT != null) {
			this.__context3D.setRenderToTexture(cacheRTT,cacheRTTDepthStencil,cacheRTTAntiAlias,cacheRTTSurfaceSelector);
		} else {
			this.__context3D.setRenderToBackBuffer();
		}
		this.__clearShader();
	},
	__resize: function(width,height) {
		this.__width = width;
		this.__height = height;
		var w = this.__defaultRenderTarget == null ? this.__stage.stageWidth : this.__defaultRenderTarget.width;
		var h = this.__defaultRenderTarget == null ? this.__stage.stageHeight : this.__defaultRenderTarget.height;
		this.__offsetX = this.__defaultRenderTarget == null ? Math.round(this.__worldTransform.__transformX(0,0)) : 0;
		this.__offsetY = this.__defaultRenderTarget == null ? Math.round(this.__worldTransform.__transformY(0,0)) : 0;
		this.__displayWidth = this.__defaultRenderTarget == null ? Math.round(this.__worldTransform.__transformX(w,0) - this.__offsetX) : w;
		this.__displayHeight = this.__defaultRenderTarget == null ? Math.round(this.__worldTransform.__transformY(0,h) - this.__offsetY) : h;
		(lime_math__$Matrix4_Matrix4_$Impl_$().default).createOrtho(this.__projection,0,this.__displayWidth + this.__offsetX * 2,0,this.__displayHeight + this.__offsetY * 2,-1000,1000);
		(lime_math__$Matrix4_Matrix4_$Impl_$().default).createOrtho(this.__projectionFlipped,0,this.__displayWidth + this.__offsetX * 2,this.__displayHeight + this.__offsetY * 2,0,-1000,1000);
	},
	__resumeClipAndMask: function(childRenderer) {
		if(this.__stencilReference > 0) {
			this.__context3D.setStencilActions("frontAndBack","equal","keep","keep","keep");
			this.__context3D.setStencilReferenceValue(this.__stencilReference,255,0);
		} else {
			this.__context3D.setStencilActions();
			this.__context3D.setStencilReferenceValue(0,0,0);
		}
		if(this.__numClipRects > 0) {
			this.__scissorRect(this.__clipRects[this.__numClipRects - 1]);
		} else {
			this.__scissorRect();
		}
	},
	__scissorRect: function(clipRect) {
		if(clipRect != null) {
			var x = Math.floor(clipRect.x);
			var y = Math.floor(clipRect.y);
			var width = clipRect.width > 0 ? Math.ceil(clipRect.get_right()) - x : 0;
			var height = clipRect.height > 0 ? Math.ceil(clipRect.get_bottom()) - y : 0;
			if(width < 0) {
				width = 0;
			}
			if(height < 0) {
				height = 0;
			}
			OpenGLRenderer.__scissorRectangle.setTo(x,y,width,height);
			this.__context3D.setScissorRectangle(OpenGLRenderer.__scissorRectangle);
		} else {
			this.__context3D.setScissorRectangle(null);
		}
	},
	__setBlendMode: function(value) {
		if(this.__overrideBlendMode != null) {
			value = this.__overrideBlendMode;
		}
		if(this.__blendMode == value) {
			return;
		}
		this.__blendMode = value;
		switch(value) {
		case "add":
			this.__context3D.setBlendFactors("one","one");
			break;
		case "multiply":
			this.__context3D.setBlendFactors("destinationColor","oneMinusSourceAlpha");
			break;
		case "screen":
			this.__context3D.setBlendFactors("one","oneMinusSourceColor");
			break;
		case "subtract":
			this.__context3D.setBlendFactors("one","one");
			this.__context3D.__setGLBlendEquation(this.__gl.FUNC_REVERSE_SUBTRACT);
			break;
		default:
			this.__context3D.setBlendFactors("one","oneMinusSourceAlpha");
		}
	},
	__setRenderTarget: function(renderTarget) {
		this.__defaultRenderTarget = renderTarget;
		this.__flipped = renderTarget == null;
		if(renderTarget != null) {
			this.__resize(renderTarget.width,renderTarget.height);
		}
	},
	__setShaderBuffer: function(shaderBuffer) {
		this.setShader(shaderBuffer.shader);
		this.__currentShaderBuffer = shaderBuffer;
	},
	__suspendClipAndMask: function() {
		if(this.__stencilReference > 0) {
			this.__context3D.setStencilActions();
			this.__context3D.setStencilReferenceValue(0,0,0);
		}
		if(this.__numClipRects > 0) {
			this.__scissorRect();
		}
	},
	__updateShaderBuffer: function(bufferOffset) {
		if(this.__currentShader != null && this.__currentShaderBuffer != null) {
			this.__currentShader.__updateFromBuffer(this.__currentShaderBuffer,bufferOffset);
		}
	}
});
OpenGLRenderer.prototype.__class__ = OpenGLRenderer.prototype.constructor = $hxClasses["openfl.display.OpenGLRenderer"] = OpenGLRenderer;

// Init



// Statics


OpenGLRenderer.__meta__ = { fields : { gl : { SuppressWarnings : ["checkstyle:Dynamic"]}, __gl : { SuppressWarnings : ["checkstyle:Dynamic"]}, __matrix : { SuppressWarnings : ["checkstyle:Dynamic"]}, __projection : { SuppressWarnings : ["checkstyle:Dynamic"]}, __projectionFlipped : { SuppressWarnings : ["checkstyle:Dynamic"]}, getMatrix : { SuppressWarnings : ["checkstyle:Dynamic"]}}}
OpenGLRenderer.__alphaValue = [1]
OpenGLRenderer.__colorMultipliersValue = [0,0,0,0]
OpenGLRenderer.__colorOffsetsValue = [0,0,0,0]
OpenGLRenderer.__defaultColorMultipliersValue = [1,1,1,1]
OpenGLRenderer.__emptyColorValue = [0,0,0,0]
OpenGLRenderer.__emptyAlphaValue = [1]
OpenGLRenderer.__hasColorTransformValue = [false]
OpenGLRenderer.__scissorRectangle = new (openfl_geom_Rectangle().default)()
OpenGLRenderer.__textureSizeValue = [0,0]

// Export

exports.default = OpenGLRenderer;