// Class: openfl.display.BitmapData

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;
var $import = require("./../../import_stub").default;
function openfl_display_IBitmapDrawable() {return require("./../../openfl/display/IBitmapDrawable");}
function lime_graphics_ImageChannel() {return require("./../../lime/graphics/ImageChannel");}
function openfl_geom_Matrix() {return require("./../../openfl/geom/Matrix");}
function openfl_geom_ColorTransform() {return require("./../../openfl/geom/ColorTransform");}
function openfl_Lib() {return require("./../../openfl/Lib");}
function lime_app_Application() {return require("./../../lime/app/Application");}
function openfl_display_OpenGLRenderer() {return require("./../../openfl/display/OpenGLRenderer");}
function openfl_geom_Rectangle() {return require("./../../openfl/geom/Rectangle");}
function lime__$internal_graphics_ImageCanvasUtil() {return require("./../../lime/_internal/graphics/ImageCanvasUtil");}
function openfl_display_CanvasRenderer() {return require("./../../openfl/display/CanvasRenderer");}
function openfl_utils_ByteArrayData() {return require("./../../openfl/utils/ByteArrayData");}
function openfl_display_PNGEncoderOptions() {return require("./../../openfl/display/PNGEncoderOptions");}
function openfl_utils__$ByteArray_ByteArray_$Impl_$() {return require("./../../openfl/utils/_ByteArray/ByteArray_Impl_");}
function lime_graphics_ImageFileFormat() {return require("./../../lime/graphics/ImageFileFormat");}
function openfl_display_JPEGEncoderOptions() {return require("./../../openfl/display/JPEGEncoderOptions");}
function js_Boot() {return require("./../../js/Boot");}
function lime_graphics_cairo__$CairoImageSurface_CairoImageSurface_$Impl_$() {return require("./../../lime/graphics/cairo/_CairoImageSurface/CairoImageSurface_Impl_");}
function lime_graphics_cairo__$CairoSurface_CairoSurface_$Impl_$() {return require("./../../lime/graphics/cairo/_CairoSurface/CairoSurface_Impl_");}
function openfl_display3D_textures_TextureBase() {return require("./../../openfl/display3D/textures/TextureBase");}
function Std() {return require("./../../Std");}
function _$UInt_UInt_$Impl_$() {return require("./../../_UInt/UInt_Impl_");}
function openfl__$Vector_Vector_$Impl_$() {return require("./../../openfl/_Vector/Vector_Impl_");}
function openfl_display_Bitmap() {return require("./../../openfl/display/Bitmap");}
function openfl_geom_Point() {return require("./../../openfl/geom/Point");}
function openfl__$internal_utils_PerlinNoise() {return require("./../../openfl/_internal/utils/PerlinNoise");}
function js__$Boot_HaxeError() {return require("./../../js/_Boot/HaxeError");}
function openfl_errors_Error() {return require("./../../openfl/errors/Error");}
function openfl_utils__$Endian_Endian_$Impl_$() {return require("./../../openfl/utils/_Endian/Endian_Impl_");}
function openfl__$Vector_VectorIterator() {return require("./../../openfl/_Vector/VectorIterator");}
function lime_graphics_Image() {return require("./../../lime/graphics/Image");}
function lime_math_Vector2() {return require("./../../lime/math/Vector2");}
function lime_app_Future() {return require("./../../lime/app/Future");}
function lime_graphics_ImageType() {return require("./../../lime/graphics/ImageType");}

// Constructor

var BitmapData = function(width,height,transparent,fillColor) {
	if(fillColor == null) {
		fillColor = -1;
	}
	if(transparent == null) {
		transparent = true;
	}
	this.transparent = transparent;
	width = width == null ? 0 : width;
	height = height == null ? 0 : height;
	width = width < 0 ? 0 : width;
	height = height < 0 ? 0 : height;
	this.width = width;
	this.height = height;
	this.rect = new (openfl_geom_Rectangle().default)(0,0,width,height);
	this.__textureWidth = width;
	this.__textureHeight = height;
	if(width > 0 && height > 0) {
		if(transparent) {
			if((fillColor & -16777216) == 0) {
				fillColor = 0;
			}
		} else {
			fillColor = -16777216 | fillColor & 16777215;
		}
		fillColor = fillColor << 8 | fillColor >>> 24 & 255;
		this.image = new (lime_graphics_Image().default)(null,0,0,width,height,fillColor);
		this.image.set_transparent(transparent);
		this.__isValid = true;
		this.readable = true;
	}
	this.__renderTransform = new (openfl_geom_Matrix().default)();
	this.__worldAlpha = 1;
	this.__worldTransform = new (openfl_geom_Matrix().default)();
	this.__worldColorTransform = new (openfl_geom_ColorTransform().default)();
	this.__renderable = true;
}

// Meta

BitmapData.__name__ = "openfl.display.BitmapData";
BitmapData.__isInterface__ = false;
BitmapData.__interfaces__ = [(openfl_display_IBitmapDrawable().default)];
BitmapData.prototype = {
	applyFilter: function(sourceBitmapData,sourceRect,destPoint,filter) {
		if(!this.readable || sourceBitmapData == null || !sourceBitmapData.readable) {
			return;
		}
		var needSecondBitmapData = filter.__needSecondBitmapData;
		var needCopyOfOriginal = filter.__preserveObject;
		var bitmapData2 = null;
		var bitmapData3 = null;
		if(needSecondBitmapData) {
			bitmapData2 = new BitmapData(this.width,this.height,true,0);
		} else {
			bitmapData2 = this;
		}
		if(needCopyOfOriginal) {
			bitmapData3 = new BitmapData(this.width,this.height,true,0);
		}
		if(filter.__preserveObject) {
			bitmapData3.copyPixels(this,this.rect,destPoint);
		}
		var lastBitmap = filter.__applyFilter(bitmapData2,this,sourceRect,destPoint);
		if(filter.__preserveObject) {
			lastBitmap.draw(bitmapData3,null,null);
		}
		if(needSecondBitmapData && lastBitmap == bitmapData2) {
			bitmapData2.image.version = this.image.version;
			this.image = bitmapData2.image;
		}
		this.image.dirty = true;
		this.image.version++;
	},
	clone: function() {
		var bitmapData;
		if(!this.__isValid) {
			bitmapData = new BitmapData(this.width,this.height,this.transparent,0);
		} else if(!this.readable && this.image == null) {
			bitmapData = new BitmapData(0,0,this.transparent,0);
			bitmapData.width = this.width;
			bitmapData.height = this.height;
			bitmapData.__textureWidth = this.__textureWidth;
			bitmapData.__textureHeight = this.__textureHeight;
			bitmapData.rect.copyFrom(this.rect);
			bitmapData.__framebuffer = this.__framebuffer;
			bitmapData.__framebufferContext = this.__framebufferContext;
			bitmapData.__texture = this.__texture;
			bitmapData.__textureContext = this.__textureContext;
			bitmapData.__isValid = true;
		} else {
			bitmapData = BitmapData.fromImage(this.image.clone(),this.transparent);
		}
		bitmapData.__worldTransform.copyFrom(this.__worldTransform);
		bitmapData.__renderTransform.copyFrom(this.__renderTransform);
		return bitmapData;
	},
	colorTransform: function(rect,colorTransform) {
		if(!this.readable) {
			return;
		}
		this.image.colorTransform(rect.__toLimeRectangle(),colorTransform.__toLimeColorMatrix());
	},
	compare: function(otherBitmapData) {
		if(otherBitmapData == this) {
			return 0;
		} else if(otherBitmapData == null) {
			return -1;
		} else if(this.readable == false || otherBitmapData.readable == false) {
			return -2;
		} else if(this.width != otherBitmapData.width) {
			return -3;
		} else if(this.height != otherBitmapData.height) {
			return -4;
		}
		if(this.image != null && otherBitmapData.image != null && this.image.get_format() == otherBitmapData.image.get_format()) {
			var bytes = this.image.get_data();
			var otherBytes = otherBitmapData.image.get_data();
			var equal = true;
			var _g = 0;
			var _g1 = bytes.length;
			while(_g < _g1) {
				var i = _g++;
				if(bytes[i] != otherBytes[i]) {
					equal = false;
					break;
				}
			}
			if(equal) {
				return 0;
			}
		}
		var bitmapData = null;
		var foundDifference;
		var pixel;
		var otherPixel;
		var comparePixel;
		var r;
		var g;
		var b;
		var a;
		var _g2 = 0;
		var _g11 = this.height;
		while(_g2 < _g11) {
			var y = _g2++;
			var _g3 = 0;
			var _g12 = this.width;
			while(_g3 < _g12) {
				var x = _g3++;
				foundDifference = false;
				pixel = this.getPixel32(x,y);
				otherPixel = otherBitmapData.getPixel32(x,y);
				comparePixel = 0;
				if(pixel != otherPixel) {
					r = (pixel >>> 16 & 255) - (otherPixel >>> 16 & 255);
					g = (pixel >>> 8 & 255) - (otherPixel >>> 8 & 255);
					b = (pixel & 255) - (otherPixel & 255);
					if(r < 0) {
						r *= -1;
					}
					if(g < 0) {
						g *= -1;
					}
					if(b < 0) {
						b *= -1;
					}
					if(r == 0 && g == 0 && b == 0) {
						a = (pixel >>> 24 & 255) - (otherPixel >>> 24 & 255);
						if(a != 0) {
							comparePixel = (comparePixel >>> 24 & 255 & 255) << 24 | 16711680 | (comparePixel >>> 8 & 255 & 255) << 8 | comparePixel & 255 & 255;
							comparePixel = (comparePixel >>> 24 & 255 & 255) << 24 | (comparePixel >>> 16 & 255 & 255) << 16 | 65280 | comparePixel & 255 & 255;
							comparePixel = (comparePixel >>> 24 & 255 & 255) << 24 | (comparePixel >>> 16 & 255 & 255) << 16 | (comparePixel >>> 8 & 255 & 255) << 8 | 255;
							comparePixel = (a & 255) << 24 | (comparePixel >>> 16 & 255 & 255) << 16 | (comparePixel >>> 8 & 255 & 255) << 8 | comparePixel & 255 & 255;
							foundDifference = true;
						}
					} else {
						comparePixel = (comparePixel >>> 24 & 255 & 255) << 24 | (r & 255) << 16 | (comparePixel >>> 8 & 255 & 255) << 8 | comparePixel & 255 & 255;
						comparePixel = (comparePixel >>> 24 & 255 & 255) << 24 | (comparePixel >>> 16 & 255 & 255) << 16 | (g & 255) << 8 | comparePixel & 255 & 255;
						comparePixel = (comparePixel >>> 24 & 255 & 255) << 24 | (comparePixel >>> 16 & 255 & 255) << 16 | (comparePixel >>> 8 & 255 & 255) << 8 | b & 255;
						comparePixel = -16777216 | (comparePixel >>> 16 & 255 & 255) << 16 | (comparePixel >>> 8 & 255 & 255) << 8 | comparePixel & 255 & 255;
						foundDifference = true;
					}
				}
				if(foundDifference) {
					if(bitmapData == null) {
						bitmapData = new BitmapData(this.width,this.height,this.transparent || otherBitmapData.transparent,0);
					}
					bitmapData.setPixel32(x,y,comparePixel);
				}
			}
		}
		if(bitmapData == null) {
			return 0;
		}
		return bitmapData;
	},
	copyChannel: function(sourceBitmapData,sourceRect,destPoint,sourceChannel,destChannel) {
		if(!this.readable) {
			return;
		}
		var sourceChannel1;
		switch(sourceChannel) {
		case 1:
			sourceChannel1 = (lime_graphics_ImageChannel().default).RED;
			break;
		case 2:
			sourceChannel1 = (lime_graphics_ImageChannel().default).GREEN;
			break;
		case 4:
			sourceChannel1 = (lime_graphics_ImageChannel().default).BLUE;
			break;
		case 8:
			sourceChannel1 = (lime_graphics_ImageChannel().default).ALPHA;
			break;
		default:
			return;
		}
		var destChannel1;
		switch(destChannel) {
		case 1:
			destChannel1 = (lime_graphics_ImageChannel().default).RED;
			break;
		case 2:
			destChannel1 = (lime_graphics_ImageChannel().default).GREEN;
			break;
		case 4:
			destChannel1 = (lime_graphics_ImageChannel().default).BLUE;
			break;
		case 8:
			destChannel1 = (lime_graphics_ImageChannel().default).ALPHA;
			break;
		default:
			return;
		}
		this.image.copyChannel(sourceBitmapData.image,sourceRect.__toLimeRectangle(),destPoint.__toLimeVector2(),sourceChannel1,destChannel1);
	},
	copyPixels: function(sourceBitmapData,sourceRect,destPoint,alphaBitmapData,alphaPoint,mergeAlpha) {
		if(mergeAlpha == null) {
			mergeAlpha = false;
		}
		if(!this.readable || sourceBitmapData == null) {
			return;
		}
		if(alphaPoint != null) {
			BitmapData.__tempVector.x = alphaPoint.x;
			BitmapData.__tempVector.y = alphaPoint.y;
		}
		this.image.copyPixels(sourceBitmapData.image,sourceRect.__toLimeRectangle(),destPoint.__toLimeVector2(),alphaBitmapData != null ? alphaBitmapData.image : null,alphaPoint != null ? BitmapData.__tempVector : null,mergeAlpha);
	},
	dispose: function() {
		this.image = null;
		this.width = 0;
		this.height = 0;
		this.rect = null;
		this.__isValid = false;
		this.readable = false;
		this.__surface = null;
		this.__vertexBuffer = null;
		this.__framebuffer = null;
		this.__framebufferContext = null;
		this.__texture = null;
		this.__textureContext = null;
	},
	disposeImage: function() {
		this.readable = false;
	},
	draw: function(source,matrix,colorTransform,blendMode,clipRect,smoothing) {
		if(smoothing == null) {
			smoothing = false;
		}
		if(source == null) {
			return;
		}
		source.__update(false,true);
		var transform = (openfl_geom_Matrix().default).__pool.get();
		transform.copyFrom(source.__renderTransform);
		transform.invert();
		if(matrix != null) {
			transform.concat(matrix);
		}
		var clipMatrix = null;
		if(clipRect != null) {
			clipMatrix = (openfl_geom_Matrix().default).__pool.get();
			clipMatrix.copyFrom(transform);
			clipMatrix.invert();
		}
		var _colorTransform = new (openfl_geom_ColorTransform().default)();
		_colorTransform.__copyFrom(source.__worldColorTransform);
		_colorTransform.__invert();
		if(!this.readable && (openfl_Lib().default).get_current().stage.context3D != null) {
			if(this.__textureContext == null) {
				this.__textureContext = (lime_app_Application().default).current.get_window().context;
			}
			if(colorTransform != null) {
				_colorTransform.__combine(colorTransform);
			}
			var renderer = new (openfl_display_OpenGLRenderer().default)((openfl_Lib().default).get_current().stage.context3D,this);
			renderer.__allowSmoothing = smoothing;
			renderer.__overrideBlendMode = blendMode;
			renderer.__worldTransform = transform;
			renderer.__worldAlpha = 1 / source.__worldAlpha;
			renderer.__worldColorTransform = _colorTransform;
			renderer.__resize(this.width,this.height);
			if(clipRect != null) {
				renderer.__pushMaskRect(clipRect,clipMatrix);
			}
			this.__drawGL(source,renderer);
			if(clipRect != null) {
				renderer.__popMaskRect();
				(openfl_geom_Matrix().default).__pool.release(clipMatrix);
			}
		} else {
			if(colorTransform != null) {
				var bounds = (openfl_geom_Rectangle().default).__pool.get();
				var boundsMatrix = (openfl_geom_Matrix().default).__pool.get();
				source.__getBounds(bounds,boundsMatrix);
				var width = Math.ceil(bounds.width);
				var height = Math.ceil(bounds.height);
				boundsMatrix.tx = -bounds.x;
				boundsMatrix.ty = -bounds.y;
				var copy = new BitmapData(width,height,true,0);
				copy.draw(source,boundsMatrix);
				copy.colorTransform(copy.rect,colorTransform);
				copy.__renderTransform.identity();
				copy.__renderTransform.tx = bounds.x;
				copy.__renderTransform.ty = bounds.y;
				copy.__renderTransform.concat(source.__renderTransform);
				copy.__worldAlpha = source.__worldAlpha;
				copy.__worldColorTransform.__copyFrom(source.__worldColorTransform);
				source = copy;
				(openfl_geom_Rectangle().default).__pool.release(bounds);
				(openfl_geom_Matrix().default).__pool.release(boundsMatrix);
			}
			(lime__$internal_graphics_ImageCanvasUtil().default).convertToCanvas(this.image);
			var renderer1 = new (openfl_display_CanvasRenderer().default)(this.image.buffer.__srcContext);
			renderer1.__allowSmoothing = smoothing;
			renderer1.__overrideBlendMode = blendMode;
			renderer1.__worldTransform = transform;
			renderer1.__worldAlpha = 1 / source.__worldAlpha;
			renderer1.__worldColorTransform = _colorTransform;
			if(clipRect != null) {
				renderer1.__pushMaskRect(clipRect,clipMatrix);
			}
			this.__drawCanvas(source,renderer1);
			if(clipRect != null) {
				renderer1.__popMaskRect();
				(openfl_geom_Matrix().default).__pool.release(clipMatrix);
			}
		}
		(openfl_geom_Matrix().default).__pool.release(transform);
	},
	drawWithQuality: function(source,matrix,colorTransform,blendMode,clipRect,smoothing,quality) {
		if(smoothing == null) {
			smoothing = false;
		}
		this.draw(source,matrix,colorTransform,blendMode,clipRect,quality != "low" && smoothing);
	},
	encode: function(rect,compressor,byteArray) {
		if(!this.readable || rect == null) {
			byteArray = null;
			return byteArray;
		}
		if(byteArray == null) {
			var this1 = new (openfl_utils_ByteArrayData().default)(0);
			byteArray = this1;
		}
		var image = this.image;
		if(!rect.equals(this.rect)) {
			var matrix = (openfl_geom_Matrix().default).__pool.get();
			matrix.tx = Math.round(-rect.x);
			matrix.ty = Math.round(-rect.y);
			var bitmapData = new BitmapData(Math.ceil(rect.width),Math.ceil(rect.height),true,0);
			bitmapData.draw(this,matrix);
			image = bitmapData.image;
			(openfl_geom_Matrix().default).__pool.release(matrix);
		}
		if(((compressor) instanceof (openfl_display_PNGEncoderOptions().default))) {
			byteArray.writeBytes((openfl_utils__$ByteArray_ByteArray_$Impl_$().default).fromBytes(image.encode((lime_graphics_ImageFileFormat().default).PNG)),0,0);
			return byteArray;
		} else if(((compressor) instanceof (openfl_display_JPEGEncoderOptions().default))) {
			byteArray.writeBytes((openfl_utils__$ByteArray_ByteArray_$Impl_$().default).fromBytes(image.encode((lime_graphics_ImageFileFormat().default).JPEG,((js_Boot().default).__cast(compressor , (openfl_display_JPEGEncoderOptions().default))).quality)),0,0);
			return byteArray;
		}
		byteArray = null;
		return byteArray;
	},
	fillRect: function(rect,color) {
		this.__fillRect(rect,color,true);
	},
	floodFill: function(x,y,color) {
		if(!this.readable) {
			return;
		}
		this.image.floodFill(x,y,color,1);
	},
	generateFilterRect: function(sourceRect,filter) {
		return sourceRect.clone();
	},
	getIndexBuffer: function(context,scale9Grid) {
		var gl = context.gl;
		if(this.__indexBuffer == null || this.__indexBufferContext != context.__context || scale9Grid != null && this.__indexBufferGrid == null || this.__indexBufferGrid != null && !this.__indexBufferGrid.equals(scale9Grid)) {
			this.__indexBufferContext = context.__context;
			this.__indexBuffer = null;
			if(scale9Grid != null) {
				if(this.__indexBufferGrid == null) {
					this.__indexBufferGrid = new (openfl_geom_Rectangle().default)();
				}
				this.__indexBufferGrid.copyFrom(scale9Grid);
				var centerX = scale9Grid.width;
				var centerY = scale9Grid.height;
				if(centerX != 0 && centerY != 0) {
					var array = null;
					var view = null;
					var buffer = null;
					var len = null;
					var this1 = new Uint16Array(54);
					this.__indexBufferData = this1;
					this.__indexBufferData[0] = 0;
					this.__indexBufferData[1] = 1;
					this.__indexBufferData[2] = 2;
					this.__indexBufferData[3] = 2;
					this.__indexBufferData[4] = 1;
					this.__indexBufferData[5] = 3;
					this.__indexBufferData[6] = 4;
					this.__indexBufferData[7] = 0;
					this.__indexBufferData[8] = 5;
					this.__indexBufferData[9] = 5;
					this.__indexBufferData[10] = 0;
					this.__indexBufferData[11] = 2;
					this.__indexBufferData[12] = 6;
					this.__indexBufferData[13] = 4;
					this.__indexBufferData[14] = 7;
					this.__indexBufferData[15] = 7;
					this.__indexBufferData[16] = 4;
					this.__indexBufferData[17] = 5;
					this.__indexBufferData[18] = 8;
					this.__indexBufferData[19] = 9;
					this.__indexBufferData[20] = 0;
					this.__indexBufferData[21] = 0;
					this.__indexBufferData[22] = 9;
					this.__indexBufferData[23] = 1;
					this.__indexBufferData[24] = 10;
					this.__indexBufferData[25] = 8;
					this.__indexBufferData[26] = 4;
					this.__indexBufferData[27] = 4;
					this.__indexBufferData[28] = 8;
					this.__indexBufferData[29] = 0;
					this.__indexBufferData[30] = 11;
					this.__indexBufferData[31] = 10;
					this.__indexBufferData[32] = 6;
					this.__indexBufferData[33] = 6;
					this.__indexBufferData[34] = 10;
					this.__indexBufferData[35] = 4;
					this.__indexBufferData[36] = 12;
					this.__indexBufferData[37] = 13;
					this.__indexBufferData[38] = 8;
					this.__indexBufferData[39] = 8;
					this.__indexBufferData[40] = 13;
					this.__indexBufferData[41] = 9;
					this.__indexBufferData[42] = 14;
					this.__indexBufferData[43] = 12;
					this.__indexBufferData[44] = 10;
					this.__indexBufferData[45] = 10;
					this.__indexBufferData[46] = 12;
					this.__indexBufferData[47] = 8;
					this.__indexBufferData[48] = 15;
					this.__indexBufferData[49] = 14;
					this.__indexBufferData[50] = 11;
					this.__indexBufferData[51] = 11;
					this.__indexBufferData[52] = 14;
					this.__indexBufferData[53] = 10;
					this.__indexBuffer = context.createIndexBuffer(54);
				} else if(centerX == 0 && centerY != 0) {
					var array1 = null;
					var view1 = null;
					var buffer1 = null;
					var len1 = null;
					var this2 = new Uint16Array(18);
					this.__indexBufferData = this2;
					this.__indexBufferData[0] = 0;
					this.__indexBufferData[1] = 1;
					this.__indexBufferData[2] = 2;
					this.__indexBufferData[3] = 2;
					this.__indexBufferData[4] = 1;
					this.__indexBufferData[5] = 3;
					this.__indexBufferData[6] = 4;
					this.__indexBufferData[7] = 5;
					this.__indexBufferData[8] = 0;
					this.__indexBufferData[9] = 0;
					this.__indexBufferData[10] = 5;
					this.__indexBufferData[11] = 1;
					this.__indexBufferData[12] = 6;
					this.__indexBufferData[13] = 7;
					this.__indexBufferData[14] = 4;
					this.__indexBufferData[15] = 4;
					this.__indexBufferData[16] = 7;
					this.__indexBufferData[17] = 5;
					this.__indexBuffer = context.createIndexBuffer(18);
				} else if(centerX != 0 && centerY == 0) {
					var array2 = null;
					var view2 = null;
					var buffer2 = null;
					var len2 = null;
					var this3 = new Uint16Array(18);
					this.__indexBufferData = this3;
					this.__indexBufferData[0] = 0;
					this.__indexBufferData[1] = 1;
					this.__indexBufferData[2] = 2;
					this.__indexBufferData[3] = 2;
					this.__indexBufferData[4] = 1;
					this.__indexBufferData[5] = 3;
					this.__indexBufferData[6] = 4;
					this.__indexBufferData[7] = 0;
					this.__indexBufferData[8] = 5;
					this.__indexBufferData[9] = 5;
					this.__indexBufferData[10] = 0;
					this.__indexBufferData[11] = 2;
					this.__indexBufferData[12] = 6;
					this.__indexBufferData[13] = 4;
					this.__indexBufferData[14] = 7;
					this.__indexBufferData[15] = 7;
					this.__indexBufferData[16] = 4;
					this.__indexBufferData[17] = 5;
					this.__indexBuffer = context.createIndexBuffer(18);
				}
			} else {
				this.__indexBufferGrid = null;
			}
			if(this.__indexBuffer == null) {
				var array3 = null;
				var view3 = null;
				var buffer3 = null;
				var len3 = null;
				var this4 = new Uint16Array(6);
				this.__indexBufferData = this4;
				this.__indexBufferData[0] = 0;
				this.__indexBufferData[1] = 1;
				this.__indexBufferData[2] = 2;
				this.__indexBufferData[3] = 2;
				this.__indexBufferData[4] = 1;
				this.__indexBufferData[5] = 3;
				this.__indexBuffer = context.createIndexBuffer(6);
			}
			this.__indexBuffer.uploadFromTypedArray(this.__indexBufferData);
		}
		return this.__indexBuffer;
	},
	getVertexBuffer: function(context,scale9Grid,targetObject) {
		var gl = context.gl;
		if(this.__vertexBuffer == null || this.__vertexBufferContext != context.__context || scale9Grid != null && this.__vertexBufferGrid == null || this.__vertexBufferGrid != null && !this.__vertexBufferGrid.equals(scale9Grid) || targetObject != null && (this.__vertexBufferWidth != targetObject.get_width() || this.__vertexBufferHeight != targetObject.get_height() || this.__vertexBufferScaleX != targetObject.get_scaleX() || this.__vertexBufferScaleY != targetObject.get_scaleY())) {
			this.__uvRect = new (openfl_geom_Rectangle().default)(0,0,this.width,this.height);
			var uvWidth = 1;
			var uvHeight = 1;
			this.__vertexBufferContext = context.__context;
			this.__vertexBuffer = null;
			if(targetObject != null) {
				this.__vertexBufferWidth = targetObject.get_width();
				this.__vertexBufferHeight = targetObject.get_height();
				this.__vertexBufferScaleX = targetObject.get_scaleX();
				this.__vertexBufferScaleY = targetObject.get_scaleY();
			}
			if(scale9Grid != null && targetObject != null) {
				if(this.__vertexBufferGrid == null) {
					this.__vertexBufferGrid = new (openfl_geom_Rectangle().default)();
				}
				this.__vertexBufferGrid.copyFrom(scale9Grid);
				this.__vertexBufferWidth = targetObject.get_width();
				this.__vertexBufferHeight = targetObject.get_height();
				this.__vertexBufferScaleX = targetObject.get_scaleX();
				this.__vertexBufferScaleY = targetObject.get_scaleY();
				var centerX = scale9Grid.width;
				var centerY = scale9Grid.height;
				if(centerX != 0 && centerY != 0) {
					var array = null;
					var view = null;
					var buffer = null;
					var len = null;
					var this1 = new Float32Array(224);
					this.__vertexBufferData = this1;
					var left = scale9Grid.x;
					var top = scale9Grid.y;
					var right = this.width - centerX - left;
					var bottom = this.height - centerY - top;
					var uvLeft = left / this.width;
					var uvTop = top / this.height;
					var uvCenterX = centerX / this.width;
					var uvCenterY = centerY / this.height;
					var uvRight = right / this.width;
					var uvBottom = bottom / this.height;
					var renderedLeft = left / targetObject.get_scaleX();
					var renderedTop = top / targetObject.get_scaleY();
					var renderedRight = right / targetObject.get_scaleX();
					var renderedBottom = bottom / targetObject.get_scaleY();
					var renderedCenterX = targetObject.get_width() / targetObject.get_scaleX() - renderedLeft - renderedRight;
					var renderedCenterY = targetObject.get_height() / targetObject.get_scaleY() - renderedTop - renderedBottom;
					this.__vertexBufferData[0] = renderedLeft;
					this.__vertexBufferData[1] = renderedTop;
					this.__vertexBufferData[3] = uvWidth * uvLeft;
					this.__vertexBufferData[4] = uvHeight * uvTop;
					this.__vertexBufferData[15] = renderedTop;
					this.__vertexBufferData[18] = uvHeight * uvTop;
					this.__vertexBufferData[28] = renderedLeft;
					this.__vertexBufferData[31] = uvWidth * uvLeft;
					this.__vertexBufferData[56] = renderedLeft + renderedCenterX;
					this.__vertexBufferData[57] = renderedTop;
					this.__vertexBufferData[59] = uvWidth * (uvLeft + uvCenterX);
					this.__vertexBufferData[60] = uvHeight * uvTop;
					this.__vertexBufferData[70] = renderedLeft + renderedCenterX;
					this.__vertexBufferData[73] = uvWidth * (uvLeft + uvCenterX);
					this.__vertexBufferData[84] = this.width;
					this.__vertexBufferData[85] = renderedTop;
					this.__vertexBufferData[87] = uvWidth;
					this.__vertexBufferData[88] = uvHeight * uvTop;
					this.__vertexBufferData[98] = this.width;
					this.__vertexBufferData[101] = uvWidth;
					this.__vertexBufferData[112] = renderedLeft;
					this.__vertexBufferData[113] = renderedTop + renderedCenterY;
					this.__vertexBufferData[115] = uvWidth * uvLeft;
					this.__vertexBufferData[116] = uvHeight * (uvTop + uvCenterY);
					this.__vertexBufferData[127] = renderedTop + renderedCenterY;
					this.__vertexBufferData[130] = uvHeight * (uvTop + uvCenterY);
					this.__vertexBufferData[140] = renderedLeft + renderedCenterX;
					this.__vertexBufferData[141] = renderedTop + renderedCenterY;
					this.__vertexBufferData[143] = uvWidth * (uvLeft + uvCenterX);
					this.__vertexBufferData[144] = uvHeight * (uvTop + uvCenterY);
					this.__vertexBufferData[154] = this.width;
					this.__vertexBufferData[155] = renderedTop + renderedCenterY;
					this.__vertexBufferData[157] = uvWidth;
					this.__vertexBufferData[158] = uvHeight * (uvTop + uvCenterY);
					this.__vertexBufferData[168] = renderedLeft;
					this.__vertexBufferData[169] = this.height;
					this.__vertexBufferData[171] = uvWidth * uvLeft;
					this.__vertexBufferData[172] = uvHeight;
					this.__vertexBufferData[183] = this.height;
					this.__vertexBufferData[186] = uvHeight;
					this.__vertexBufferData[196] = renderedLeft + renderedCenterX;
					this.__vertexBufferData[197] = this.height;
					this.__vertexBufferData[199] = uvWidth * (uvLeft + uvCenterX);
					this.__vertexBufferData[200] = uvHeight;
					this.__vertexBufferData[210] = this.width;
					this.__vertexBufferData[211] = this.height;
					this.__vertexBufferData[213] = uvWidth;
					this.__vertexBufferData[214] = uvHeight;
					this.__vertexBuffer = context.createVertexBuffer(16,14);
				} else if(centerX == 0 && centerY != 0) {
					var array1 = null;
					var view1 = null;
					var buffer1 = null;
					var len1 = null;
					var this2 = new Float32Array(112);
					this.__vertexBufferData = this2;
					var top1 = scale9Grid.y;
					var bottom1 = this.height - centerY - top1;
					var uvTop1 = top1 / this.height;
					var uvCenterY1 = centerY / this.height;
					var uvBottom1 = bottom1 / this.height;
					var renderedTop1 = top1 / targetObject.get_scaleY();
					var renderedBottom1 = bottom1 / targetObject.get_scaleY();
					var renderedCenterY1 = targetObject.get_height() / targetObject.get_scaleY() - renderedTop1 - renderedBottom1;
					var renderedWidth = targetObject.get_width() / targetObject.get_scaleX();
					this.__vertexBufferData[0] = renderedWidth;
					this.__vertexBufferData[1] = renderedTop1;
					this.__vertexBufferData[3] = uvWidth;
					this.__vertexBufferData[4] = uvHeight * uvTop1;
					this.__vertexBufferData[15] = renderedTop1;
					this.__vertexBufferData[18] = uvHeight * uvTop1;
					this.__vertexBufferData[28] = renderedWidth;
					this.__vertexBufferData[31] = uvWidth;
					this.__vertexBufferData[56] = renderedWidth;
					this.__vertexBufferData[57] = renderedTop1 + renderedCenterY1;
					this.__vertexBufferData[59] = uvWidth;
					this.__vertexBufferData[60] = uvHeight * (uvTop1 + uvCenterY1);
					this.__vertexBufferData[71] = renderedTop1 + renderedCenterY1;
					this.__vertexBufferData[74] = uvHeight * (uvTop1 + uvCenterY1);
					this.__vertexBufferData[84] = renderedWidth;
					this.__vertexBufferData[85] = this.height;
					this.__vertexBufferData[87] = uvWidth;
					this.__vertexBufferData[88] = uvHeight;
					this.__vertexBufferData[99] = this.height;
					this.__vertexBufferData[102] = uvHeight;
					this.__vertexBuffer = context.createVertexBuffer(8,14);
				} else if(centerY == 0 && centerX != 0) {
					var array2 = null;
					var view2 = null;
					var buffer2 = null;
					var len2 = null;
					var this3 = new Float32Array(112);
					this.__vertexBufferData = this3;
					var left1 = scale9Grid.x;
					var right1 = this.width - centerX - left1;
					var uvLeft1 = left1 / this.width;
					var uvCenterX1 = centerX / this.width;
					var uvRight1 = right1 / this.width;
					var renderedLeft1 = left1 / targetObject.get_scaleX();
					var renderedRight1 = right1 / targetObject.get_scaleX();
					var renderedCenterX1 = targetObject.get_width() / targetObject.get_scaleX() - renderedLeft1 - renderedRight1;
					var renderedHeight = targetObject.get_height() / targetObject.get_scaleY();
					this.__vertexBufferData[0] = renderedLeft1;
					this.__vertexBufferData[1] = renderedHeight;
					this.__vertexBufferData[3] = uvWidth * uvLeft1;
					this.__vertexBufferData[4] = uvHeight;
					this.__vertexBufferData[15] = renderedHeight;
					this.__vertexBufferData[18] = uvHeight;
					this.__vertexBufferData[28] = renderedLeft1;
					this.__vertexBufferData[31] = uvWidth * uvLeft1;
					this.__vertexBufferData[56] = renderedLeft1 + renderedCenterX1;
					this.__vertexBufferData[57] = renderedHeight;
					this.__vertexBufferData[59] = uvWidth * (uvLeft1 + uvCenterX1);
					this.__vertexBufferData[60] = uvHeight;
					this.__vertexBufferData[70] = renderedLeft1 + renderedCenterX1;
					this.__vertexBufferData[73] = uvWidth * (uvLeft1 + uvCenterX1);
					this.__vertexBufferData[84] = this.width;
					this.__vertexBufferData[85] = renderedHeight;
					this.__vertexBufferData[87] = uvWidth;
					this.__vertexBufferData[88] = uvHeight;
					this.__vertexBufferData[98] = this.width;
					this.__vertexBufferData[101] = uvWidth;
					this.__vertexBuffer = context.createVertexBuffer(8,14);
				}
			} else {
				this.__vertexBufferGrid = null;
			}
			if(this.__vertexBuffer == null) {
				var array3 = null;
				var view3 = null;
				var buffer3 = null;
				var len3 = null;
				var this4 = new Float32Array(56);
				this.__vertexBufferData = this4;
				this.__vertexBufferData[0] = this.width;
				this.__vertexBufferData[1] = this.height;
				this.__vertexBufferData[3] = uvWidth;
				this.__vertexBufferData[4] = uvHeight;
				this.__vertexBufferData[15] = this.height;
				this.__vertexBufferData[18] = uvHeight;
				this.__vertexBufferData[28] = this.width;
				this.__vertexBufferData[31] = uvWidth;
				this.__vertexBuffer = context.createVertexBuffer(3,14);
			}
			this.__vertexBuffer.uploadFromTypedArray(this.__vertexBufferData);
		}
		return this.__vertexBuffer;
	},
	getColorBoundsRect: function(mask,color,findColor) {
		if(findColor == null) {
			findColor = true;
		}
		if(!this.readable) {
			return new (openfl_geom_Rectangle().default)(0,0,this.width,this.height);
		}
		if(!this.transparent || (mask >> 24 & 255) > 0) {
			var color1 = color;
			if((color1 >>> 24 & 255) == 0) {
				color1 = 0;
			}
		}
		var rect = this.image.getColorBoundsRect(mask,color,findColor,1);
		return new (openfl_geom_Rectangle().default)(rect.x,rect.y,rect.width,rect.height);
	},
	getPixel: function(x,y) {
		if(!this.readable) {
			return 0;
		}
		return this.image.getPixel(x,y,1);
	},
	getPixel32: function(x,y) {
		if(!this.readable) {
			return 0;
		}
		return this.image.getPixel32(x,y,1);
	},
	getPixels: function(rect) {
		if(!this.readable) {
			return null;
		}
		if(rect == null) {
			rect = this.rect;
		}
		var byteArray = (openfl_utils__$ByteArray_ByteArray_$Impl_$().default).fromBytes(this.image.getPixels(rect.__toLimeRectangle(),1));
		byteArray.set_endian("bigEndian");
		return byteArray;
	},
	getSurface: function() {
		if(!this.readable) {
			return null;
		}
		if(this.__surface == null) {
			this.__surface = (lime_graphics_cairo__$CairoImageSurface_CairoImageSurface_$Impl_$().default).fromImage(this.image);
		}
		return this.__surface;
	},
	getTexture: function(context) {
		if(!this.__isValid) {
			return null;
		}
		if(this.__texture == null || this.__textureContext != context.__context) {
			this.__textureContext = context.__context;
			this.__texture = context.createRectangleTexture(this.width,this.height,"bgra",false);
			this.__textureVersion = -1;
		}
		(lime__$internal_graphics_ImageCanvasUtil().default).sync(this.image,false);
		if(this.image != null && this.image.version > this.__textureVersion) {
			if(this.__surface != null) {
				(lime_graphics_cairo__$CairoSurface_CairoSurface_$Impl_$().default).flush(this.__surface);
			}
			var textureImage = this.image;
			if(!(openfl_display3D_textures_TextureBase().default).__supportsBGRA && textureImage.get_format() != 0) {
				textureImage = textureImage.clone();
				textureImage.set_format(0);
			}
			this.__texture.__uploadFromImage(textureImage);
			this.__textureVersion = this.image.version;
			this.__textureWidth = textureImage.buffer.width;
			this.__textureHeight = textureImage.buffer.height;
		}
		if(!this.readable && this.image != null) {
			this.__surface = null;
			this.image = null;
		}
		return this.__texture;
	},
	getVector: function(rect) {
		var pixels = this.getPixels(rect);
		var length = (Std().default).int((_$UInt_UInt_$Impl_$().default).toFloat((openfl_utils__$ByteArray_ByteArray_$Impl_$().default).get_length(pixels)) / (_$UInt_UInt_$Impl_$().default).toFloat(4));
		var result = (openfl__$Vector_Vector_$Impl_$().default)._new(length,true);
		var _g = 0;
		var _g1 = length;
		while(_g < _g1) {
			var i = _g++;
			(openfl__$Vector_Vector_$Impl_$().default).set(result,i,pixels.readUnsignedInt());
		}
		return result;
	},
	histogram: function(hRect) {
		var rect = hRect != null ? hRect : new (openfl_geom_Rectangle().default)(0,0,this.width,this.height);
		var pixels = this.getPixels(rect);
		var _g = [];
		var _g1 = [];
		var _g2 = 0;
		while(_g2 < 256) {
			var j = _g2++;
			_g1.push(0);
		}
		_g.push(_g1);
		var _g11 = [];
		var _g21 = 0;
		while(_g21 < 256) {
			var j1 = _g21++;
			_g11.push(0);
		}
		_g.push(_g11);
		var _g12 = [];
		var _g22 = 0;
		while(_g22 < 256) {
			var j2 = _g22++;
			_g12.push(0);
		}
		_g.push(_g12);
		var _g13 = [];
		var _g23 = 0;
		while(_g23 < 256) {
			var j3 = _g23++;
			_g13.push(0);
		}
		_g.push(_g13);
		var result = _g;
		var _g14 = 0;
		var _g24 = (openfl_utils__$ByteArray_ByteArray_$Impl_$().default).get_length(pixels);
		while(_g14 < _g24) {
			var i = _g14++;
			var result1 = result[i % 4];
			++result1[pixels.readUnsignedByte()];
		}
		return result;
	},
	hitTest: function(firstPoint,firstAlphaThreshold,secondObject,secondBitmapDataPoint,secondAlphaThreshold) {
		if(secondAlphaThreshold == null) {
			secondAlphaThreshold = 1;
		}
		if(!this.readable) {
			return false;
		}
		if(((secondObject) instanceof (openfl_display_Bitmap().default))) {
			secondObject = ((js_Boot().default).__cast(secondObject , (openfl_display_Bitmap().default))).__bitmapData;
		}
		if(((secondObject) instanceof (openfl_geom_Point().default))) {
			var secondPoint = secondObject;
			var x = (Std().default).int(secondPoint.x - firstPoint.x);
			var y = (Std().default).int(secondPoint.y - firstPoint.y);
			if(this.rect.contains(x,y)) {
				var pixel = this.getPixel32(x,y);
				if((pixel >> 24 & 255) > firstAlphaThreshold) {
					return true;
				}
			}
		} else if(((secondObject) instanceof BitmapData)) {
			var secondBitmapData = secondObject;
			var x1;
			var y1;
			if(secondBitmapDataPoint == null) {
				x1 = 0;
				y1 = 0;
			} else {
				x1 = Math.round(secondBitmapDataPoint.x - firstPoint.x);
				y1 = Math.round(secondBitmapDataPoint.y - firstPoint.y);
			}
			var hitRect = (openfl_geom_Rectangle().default).__pool.get();
			hitRect.setTo(x1,y1,secondBitmapData.width,secondBitmapData.height);
			if(this.rect.intersects(hitRect)) {
				if(x1 < 0) {
					hitRect.x = 0;
					hitRect.width = Math.min(secondBitmapData.width + x1,this.width);
				} else {
					hitRect.width = Math.min(secondBitmapData.width,this.width - x1);
				}
				if(y1 < 0) {
					hitRect.y = 0;
					hitRect.height = Math.min(secondBitmapData.height + y1,this.height);
				} else {
					hitRect.height = Math.min(secondBitmapData.height,this.height - y1);
				}
				var pixels = this.getPixels(hitRect);
				hitRect.x = x1 < 0 ? -x1 : 0;
				hitRect.y = y1 < 0 ? -y1 : 0;
				var testPixels = secondBitmapData.getPixels(hitRect);
				var length = (Std().default).int(hitRect.width * hitRect.height);
				var pixel1;
				var testPixel;
				var _g = 0;
				var _g1 = length;
				while(_g < _g1) {
					var i = _g++;
					pixel1 = pixels.readUnsignedInt();
					testPixel = testPixels.readUnsignedInt();
					if((_$UInt_UInt_$Impl_$().default).gt(pixel1 >>> 24 & 255,firstAlphaThreshold) && (_$UInt_UInt_$Impl_$().default).gt(testPixel >>> 24 & 255,secondAlphaThreshold)) {
						(openfl_geom_Rectangle().default).__pool.release(hitRect);
						return true;
					}
				}
			}
			(openfl_geom_Rectangle().default).__pool.release(hitRect);
		} else if(((secondObject) instanceof (openfl_geom_Rectangle().default))) {
			var secondRectangle = (openfl_geom_Rectangle().default).__pool.get();
			secondRectangle.copyFrom(secondObject);
			secondRectangle.offset(-firstPoint.x,-firstPoint.y);
			secondRectangle.__contract(0,0,this.width,this.height);
			if(secondRectangle.width > 0 && secondRectangle.height > 0) {
				var pixels1 = this.getPixels(secondRectangle);
				var length1 = (Std().default).int((_$UInt_UInt_$Impl_$().default).toFloat((openfl_utils__$ByteArray_ByteArray_$Impl_$().default).get_length(pixels1)) / (_$UInt_UInt_$Impl_$().default).toFloat(4));
				var pixel2;
				var _g2 = 0;
				var _g11 = length1;
				while(_g2 < _g11) {
					var i1 = _g2++;
					pixel2 = pixels1.readUnsignedInt();
					if((_$UInt_UInt_$Impl_$().default).gt(pixel2 >>> 24 & 255,firstAlphaThreshold)) {
						(openfl_geom_Rectangle().default).__pool.release(secondRectangle);
						return true;
					}
				}
			}
			(openfl_geom_Rectangle().default).__pool.release(secondRectangle);
		}
		return false;
	},
	lock: function() {
	},
	merge: function(sourceBitmapData,sourceRect,destPoint,redMultiplier,greenMultiplier,blueMultiplier,alphaMultiplier) {
		if(!this.readable || sourceBitmapData == null || !sourceBitmapData.readable || sourceRect == null || destPoint == null) {
			return;
		}
		this.image.merge(sourceBitmapData.image,sourceRect.__toLimeRectangle(),destPoint.__toLimeVector2(),redMultiplier,greenMultiplier,blueMultiplier,alphaMultiplier);
	},
	noise: function(randomSeed,low,high,channelOptions,grayScale) {
		if(grayScale == null) {
			grayScale = false;
		}
		if(channelOptions == null) {
			channelOptions = 7;
		}
		if(high == null) {
			high = 255;
		}
		if(low == null) {
			low = 0;
		}
		if(!this.readable) {
			return;
		}
		var func = function() {
			randomSeed = randomSeed * 1103515245 + 12345;
			return (Std().default).int(Math.abs(randomSeed / 65536)) % 32768;
		};
		var rand = func;
		rand();
		var range = high - low;
		var redChannel = (channelOptions & 1) == 1;
		var greenChannel = (channelOptions & 2) >> 1 == 1;
		var blueChannel = (channelOptions & 4) >> 2 == 1;
		var alphaChannel = (channelOptions & 8) >> 3 == 1;
		var _g = 0;
		var _g1 = this.height;
		while(_g < _g1) {
			var y = _g++;
			var _g2 = 0;
			var _g11 = this.width;
			while(_g2 < _g11) {
				var x = _g2++;
				var red = 0;
				var blue = 0;
				var green = 0;
				var alpha = 255;
				if(grayScale) {
					blue = low + rand() % range;
					green = blue;
					red = green;
					alpha = 255;
				} else {
					if(redChannel) {
						red = low + rand() % range;
					}
					if(greenChannel) {
						green = low + rand() % range;
					}
					if(blueChannel) {
						blue = low + rand() % range;
					}
					if(alphaChannel) {
						alpha = low + rand() % range;
					}
				}
				var rgb = alpha;
				rgb = (rgb << 8) + red;
				rgb = (rgb << 8) + green;
				rgb = (rgb << 8) + blue;
				this.setPixel32(x,y,rgb);
			}
		}
	},
	paletteMap: function(sourceBitmapData,sourceRect,destPoint,redArray,greenArray,blueArray,alphaArray) {
		var sw = (Std().default).int(sourceRect.width);
		var sh = (Std().default).int(sourceRect.height);
		var pixels = sourceBitmapData.getPixels(sourceRect);
		var pixelValue;
		var r;
		var g;
		var b;
		var a;
		var color;
		var _g = 0;
		var _g1 = sh * sw;
		while(_g < _g1) {
			var i = _g++;
			pixelValue = pixels.readUnsignedInt();
			a = alphaArray == null ? pixelValue & -16777216 : alphaArray[pixelValue >> 24 & 255];
			r = redArray == null ? pixelValue & 16711680 : redArray[pixelValue >> 16 & 255];
			g = greenArray == null ? pixelValue & 65280 : greenArray[pixelValue >> 8 & 255];
			b = blueArray == null ? pixelValue & 255 : blueArray[pixelValue & 255];
			color = a + r + g + b;
			pixels.position = i * 4;
			pixels.writeUnsignedInt(color);
		}
		pixels.position = 0;
		var destRect = (openfl_geom_Rectangle().default).__pool.get();
		destRect.setTo(destPoint.x,destPoint.y,sw,sh);
		this.setPixels(destRect,pixels);
		(openfl_geom_Rectangle().default).__pool.release(destRect);
	},
	perlinNoise: function(baseX,baseY,numOctaves,randomSeed,stitch,fractalNoise,channelOptions,grayScale,offsets) {
		if(grayScale == null) {
			grayScale = false;
		}
		if(channelOptions == null) {
			channelOptions = 7;
		}
		if(!this.readable) {
			return;
		}
		var noise = new (openfl__$internal_utils_PerlinNoise().default)(randomSeed,numOctaves,channelOptions,grayScale,0.5,stitch,0.15);
		noise.fill(this,baseX,baseY,0);
	},
	scroll: function(x,y) {
		if(!this.readable) {
			return;
		}
		this.image.scroll(x,y);
	},
	setPixel: function(x,y,color) {
		if(!this.readable) {
			return;
		}
		this.image.setPixel(x,y,color,1);
	},
	setPixel32: function(x,y,color) {
		if(!this.readable) {
			return;
		}
		this.image.setPixel32(x,y,color,1);
	},
	setPixels: function(rect,byteArray) {
		if(!this.readable || rect == null) {
			return;
		}
		var length = rect.width * rect.height * 4;
		if((_$UInt_UInt_$Impl_$().default).toFloat(byteArray.get_bytesAvailable()) < length) {
			throw new (js__$Boot_HaxeError().default)(new (openfl_errors_Error().default)("End of file was encountered.",2030));
		}
		this.image.setPixels(rect.__toLimeRectangle(),(openfl_utils__$ByteArray_ByteArray_$Impl_$().default).toBytePointer(byteArray),1,(openfl_utils__$Endian_Endian_$Impl_$().default).toLimeEndian(byteArray.get_endian()));
	},
	setVector: function(rect,inputVector) {
		var this1 = new (openfl_utils_ByteArrayData().default)(0);
		var byteArray = this1;
		(openfl_utils__$ByteArray_ByteArray_$Impl_$().default).set_length(byteArray,inputVector.get_length() * 4);
		var color = new (openfl__$Vector_VectorIterator().default)(inputVector);
		while(color.hasNext()) {
			var color1 = color.next();
			byteArray.writeUnsignedInt(color1);
		}
		byteArray.position = 0;
		this.setPixels(rect,byteArray);
	},
	threshold: function(sourceBitmapData,sourceRect,destPoint,operation,threshold,color,mask,copySource) {
		if(copySource == null) {
			copySource = false;
		}
		if(mask == null) {
			mask = -1;
		}
		if(color == null) {
			color = 0;
		}
		if(sourceBitmapData == null || sourceRect == null || destPoint == null || sourceRect.x > sourceBitmapData.width || sourceRect.y > sourceBitmapData.height || destPoint.x > this.width || destPoint.y > this.height) {
			return 0;
		}
		return this.image.threshold(sourceBitmapData.image,sourceRect.__toLimeRectangle(),destPoint.__toLimeVector2(),operation,threshold,color,mask,copySource,1);
	},
	unlock: function(changeRect) {
	},
	__applyAlpha: function(alpha) {
		(lime__$internal_graphics_ImageCanvasUtil().default).convertToCanvas(this.image);
		(lime__$internal_graphics_ImageCanvasUtil().default).createImageData(this.image);
		var data = this.image.buffer.data;
		var _g = 0;
		var _g1 = (openfl_utils__$ByteArray_ByteArray_$Impl_$().default).get_length(alpha);
		while(_g < _g1) {
			var i = _g++;
			data[i * 4 + 3] = alpha.readUnsignedByte();
		}
		this.image.version++;
	},
	__drawCairo: function(source,renderer) {
	},
	__drawCanvas: function(source,renderer) {
		var buffer = this.image.buffer;
		if(!renderer.__allowSmoothing) {
			renderer.applySmoothing(buffer.__srcContext,false);
		}
		renderer.__render(source);
		if(!renderer.__allowSmoothing) {
			renderer.applySmoothing(buffer.__srcContext,true);
		}
		buffer.__srcContext.setTransform(1,0,0,1,0,0);
		buffer.__srcImageData = null;
		buffer.data = null;
		this.image.dirty = true;
		this.image.version++;
	},
	__drawGL: function(source,renderer) {
		var context = renderer.__context3D;
		var cacheRTT = context.__state.renderToTexture;
		var cacheRTTDepthStencil = context.__state.renderToTextureDepthStencil;
		var cacheRTTAntiAlias = context.__state.renderToTextureAntiAlias;
		var cacheRTTSurfaceSelector = context.__state.renderToTextureSurfaceSelector;
		context.setRenderToTexture(this.getTexture(context),true);
		renderer.__render(source);
		if(cacheRTT != null) {
			context.setRenderToTexture(cacheRTT,cacheRTTDepthStencil,cacheRTTAntiAlias,cacheRTTSurfaceSelector);
		} else {
			context.setRenderToBackBuffer();
		}
	},
	__fillRect: function(rect,color,allowFramebuffer) {
		if(rect == null) {
			return;
		}
		if(this.transparent && (color & -16777216) == 0) {
			color = 0;
		}
		if(allowFramebuffer && this.__texture != null && this.__texture.__glFramebuffer != null && (openfl_Lib().default).get_current().stage.__renderer.__type == "opengl") {
			var renderer = (openfl_Lib().default).get_current().stage.__renderer;
			var context = renderer.__context3D;
			var color1 = color;
			var useScissor = !this.rect.equals(rect);
			var cacheRTT = context.__state.renderToTexture;
			var cacheRTTDepthStencil = context.__state.renderToTextureDepthStencil;
			var cacheRTTAntiAlias = context.__state.renderToTextureAntiAlias;
			var cacheRTTSurfaceSelector = context.__state.renderToTextureSurfaceSelector;
			context.setRenderToTexture(this.__texture);
			if(useScissor) {
				context.setScissorRectangle(rect);
			}
			context.clear((color1 >>> 16 & 255) / 255,(color1 >>> 8 & 255) / 255,(color1 & 255) / 255,this.transparent ? (color1 >>> 24 & 255) / 255 : 1,0,0,1);
			if(useScissor) {
				context.setScissorRectangle(null);
			}
			if(cacheRTT != null) {
				context.setRenderToTexture(cacheRTT,cacheRTTDepthStencil,cacheRTTAntiAlias,cacheRTTSurfaceSelector);
			} else {
				context.setRenderToBackBuffer();
			}
		} else if(this.readable) {
			this.image.fillRect(rect.__toLimeRectangle(),color,1);
		}
	},
	__fromBase64: function(base64,type) {
		var image = (lime_graphics_Image().default).fromBase64(base64,type);
		this.__fromImage(image);
	},
	__fromBytes: function(bytes,rawAlpha) {
		var image = (lime_graphics_Image().default).fromBytes((openfl_utils__$ByteArray_ByteArray_$Impl_$().default).toBytes(bytes));
		this.__fromImage(image);
		if(rawAlpha != null) {
			this.__applyAlpha(rawAlpha);
		}
	},
	__fromFile: function(path) {
		var image = (lime_graphics_Image().default).fromFile(path);
		this.__fromImage(image);
	},
	__fromImage: function(image) {
		if(image != null && image.buffer != null) {
			this.image = image;
			this.width = image.width;
			this.height = image.height;
			this.rect = new (openfl_geom_Rectangle().default)(0,0,image.width,image.height);
			this.__textureWidth = this.width;
			this.__textureHeight = this.height;
			this.readable = true;
			this.__isValid = true;
		}
	},
	__fromSymbol: function(swf,symbol) {
		var _gthis = this;
		this.__symbol = symbol;
		(lime_graphics_Image().default).loadFromFile(symbol.path).onComplete(function(image) {
			if(symbol.alpha != null) {
				(lime_graphics_Image().default).loadFromFile(symbol.alpha).onComplete(function(alpha) {
					if(image != null && alpha != null) {
						var tmp = alpha.get_rect();
						image.copyChannel(alpha,tmp,new (lime_math_Vector2().default)(),(lime_graphics_ImageChannel().default).RED,(lime_graphics_ImageChannel().default).ALPHA);
						image.buffer.premultiplied = true;
						image.set_premultiplied(false);
					}
					_gthis.__fromImage(image);
				});
			} else {
				_gthis.__fromImage(image);
			}
		});
	},
	__getBounds: function(rect,matrix) {
		var bounds = (openfl_geom_Rectangle().default).__pool.get();
		this.rect.__transform(bounds,matrix);
		rect.__expand(bounds.x,bounds.y,bounds.width,bounds.height);
		(openfl_geom_Rectangle().default).__pool.release(bounds);
	},
	__loadFromBase64: function(base64,type) {
		var _gthis = this;
		return (lime_graphics_Image().default).loadFromBase64(base64,type).then(function(image) {
			_gthis.__fromImage(image);
			return (lime_app_Future().default).withValue(_gthis);
		});
	},
	__loadFromBytes: function(bytes,rawAlpha) {
		var _gthis = this;
		return (lime_graphics_Image().default).loadFromBytes((openfl_utils__$ByteArray_ByteArray_$Impl_$().default).toBytes(bytes)).then(function(image) {
			_gthis.__fromImage(image);
			if(rawAlpha != null) {
				_gthis.__applyAlpha(rawAlpha);
			}
			return (lime_app_Future().default).withValue(_gthis);
		});
	},
	__loadFromFile: function(path) {
		var _gthis = this;
		return (lime_graphics_Image().default).loadFromFile(path).then(function(image) {
			_gthis.__fromImage(image);
			return (lime_app_Future().default).withValue(_gthis);
		});
	},
	__renderCairo: function(renderer) {
	},
	__renderCairoMask: function(renderer) {
	},
	__renderCanvas: function(renderer) {
		if(!this.readable) {
			return;
		}
		if(this.image.type == (lime_graphics_ImageType().default).DATA) {
			(lime__$internal_graphics_ImageCanvasUtil().default).convertToCanvas(this.image);
		}
		var context = renderer.context;
		context.globalAlpha = 1;
		renderer.setTransform(this.__renderTransform,context);
		context.drawImage(this.image.get_src(),0,0,this.image.width,this.image.height);
	},
	__renderCanvasMask: function(renderer) {
	},
	__renderDOM: function(renderer) {
	},
	__renderGL: function(renderer) {
		var context = renderer.__context3D;
		var gl = context.gl;
		renderer.__setBlendMode("normal");
		var shader = renderer.__defaultDisplayShader;
		renderer.setShader(shader);
		renderer.applyBitmapData(this,renderer.__upscaled);
		renderer.applyMatrix(renderer.__getMatrix(this.__worldTransform,"auto"));
		renderer.applyAlpha(this.__worldAlpha);
		renderer.applyColorTransform(this.__worldColorTransform);
		renderer.updateShader();
		var vertexBuffer = this.getVertexBuffer(context);
		if(shader.__position != null) {
			context.setVertexBufferAt(shader.__position.index,vertexBuffer,0,"float3");
		}
		if(shader.__textureCoord != null) {
			context.setVertexBufferAt(shader.__textureCoord.index,vertexBuffer,3,"float2");
		}
		var indexBuffer = this.getIndexBuffer(context);
		context.drawTriangles(indexBuffer);
		renderer.__clearShader();
	},
	__renderGLMask: function(renderer) {
		var context = renderer.__context3D;
		var gl = context.gl;
		var shader = renderer.__maskShader;
		renderer.setShader(shader);
		renderer.applyBitmapData(this,renderer.__upscaled);
		renderer.applyMatrix(renderer.__getMatrix(this.__worldTransform,"auto"));
		renderer.updateShader();
		var vertexBuffer = this.getVertexBuffer(context);
		if(shader.__position != null) {
			context.setVertexBufferAt(shader.__position.index,vertexBuffer,0,"float3");
		}
		if(shader.__textureCoord != null) {
			context.setVertexBufferAt(shader.__textureCoord.index,vertexBuffer,3,"float2");
		}
		var indexBuffer = this.getIndexBuffer(context);
		context.drawTriangles(indexBuffer);
		renderer.__clearShader();
	},
	__resize: function(width,height) {
		this.width = width;
		this.height = height;
		this.rect.width = width;
		this.rect.height = height;
		this.__textureWidth = width;
		this.__textureHeight = height;
	},
	__setUVRect: function(context,x,y,width,height) {
		var buffer = this.getVertexBuffer(context);
		if(buffer != null && (width != this.__uvRect.width || height != this.__uvRect.height || x != this.__uvRect.x || y != this.__uvRect.y)) {
			var gl = context.gl;
			if(this.__uvRect == null) {
				this.__uvRect = new (openfl_geom_Rectangle().default)();
			}
			this.__uvRect.setTo(x,y,width,height);
			var uvX = this.__textureWidth > 0 ? x / this.__textureWidth : 0;
			var uvY = this.__textureHeight > 0 ? y / this.__textureHeight : 0;
			var uvWidth = this.__textureWidth > 0 ? width / this.__textureWidth : 0;
			var uvHeight = this.__textureHeight > 0 ? height / this.__textureHeight : 0;
			this.__vertexBufferData[0] = width;
			this.__vertexBufferData[1] = height;
			this.__vertexBufferData[3] = uvX + uvWidth;
			this.__vertexBufferData[4] = uvY + uvHeight;
			this.__vertexBufferData[15] = height;
			this.__vertexBufferData[17] = uvX;
			this.__vertexBufferData[18] = uvY + uvHeight;
			this.__vertexBufferData[28] = width;
			this.__vertexBufferData[31] = uvX + uvWidth;
			this.__vertexBufferData[32] = uvY;
			this.__vertexBufferData[45] = uvX;
			this.__vertexBufferData[46] = uvY;
			this.__vertexBuffer.uploadFromTypedArray(this.__vertexBufferData);
		}
	},
	__sync: function() {
		(lime__$internal_graphics_ImageCanvasUtil().default).sync(this.image,false);
	},
	__update: function(transformOnly,updateChildren) {
		this.__updateTransforms();
	},
	__updateTransforms: function(overrideTransform) {
		if(overrideTransform == null) {
			this.__worldTransform.identity();
		} else {
			this.__worldTransform.copyFrom(overrideTransform);
		}
		this.__renderTransform.copyFrom(this.__worldTransform);
	}
};
BitmapData.prototype.__class__ = BitmapData.prototype.constructor = $hxClasses["openfl.display.BitmapData"] = BitmapData;

// Init



// Statics

BitmapData.fromBase64 = function(base64,type) {
	return null;
}
BitmapData.fromBytes = function(bytes,rawAlpha) {
	return null;
}
BitmapData.fromCanvas = function(canvas,transparent) {
	if(transparent == null) {
		transparent = true;
	}
	if(canvas == null) {
		return null;
	}
	var bitmapData = new BitmapData(0,0,transparent,0);
	bitmapData.__fromImage((lime_graphics_Image().default).fromCanvas(canvas));
	bitmapData.image.set_transparent(transparent);
	return bitmapData;
}
BitmapData.fromFile = function(path) {
	return null;
}
BitmapData.fromImage = function(image,transparent) {
	if(transparent == null) {
		transparent = true;
	}
	if(image == null || image.buffer == null) {
		return null;
	}
	var bitmapData = new BitmapData(0,0,transparent,0);
	bitmapData.__fromImage(image);
	bitmapData.image.set_transparent(transparent);
	if(bitmapData.image != null) {
		return bitmapData;
	} else {
		return null;
	}
}
BitmapData.fromTexture = function(texture) {
	if(texture == null) {
		return null;
	}
	var bitmapData = new BitmapData(texture.__width,texture.__height,true,0);
	bitmapData.readable = false;
	bitmapData.__texture = texture;
	bitmapData.__textureContext = texture.__textureContext;
	bitmapData.image = null;
	return bitmapData;
}
BitmapData.loadFromBase64 = function(base64,type) {
	return (lime_graphics_Image().default).loadFromBase64(base64,type).then(function(image) {
		return (lime_app_Future().default).withValue(BitmapData.fromImage(image));
	});
}
BitmapData.loadFromBytes = function(bytes,rawAlpha) {
	return (lime_graphics_Image().default).loadFromBytes((openfl_utils__$ByteArray_ByteArray_$Impl_$().default).toBytes(bytes)).then(function(image) {
		var bitmapData = BitmapData.fromImage(image);
		if(rawAlpha != null) {
			bitmapData.__applyAlpha(rawAlpha);
		}
		return (lime_app_Future().default).withValue(bitmapData);
	});
}
BitmapData.loadFromFile = function(path) {
	return (lime_graphics_Image().default).loadFromFile(path).then(function(image) {
		return (lime_app_Future().default).withValue(BitmapData.fromImage(image));
	});
}
BitmapData.__meta__ = { fields : { image : { SuppressWarnings : ["checkstyle:Dynamic"]}, __framebufferContext : { SuppressWarnings : ["checkstyle:Dynamic"]}, __indexBufferContext : { SuppressWarnings : ["checkstyle:Dynamic"]}, __surface : { SuppressWarnings : ["checkstyle:Dynamic"]}, __textureContext : { SuppressWarnings : ["checkstyle:Dynamic"]}, __vertexBufferContext : { SuppressWarnings : ["checkstyle:Dynamic"]}, compare : { SuppressWarnings : ["checkstyle:Dynamic"]}, getSurface : { SuppressWarnings : ["checkstyle:Dynamic"]}, __fromImage : { SuppressWarnings : ["checkstyle:Dynamic"]}}}
BitmapData.VERTEX_BUFFER_STRIDE = 14
BitmapData.__supportsBGRA = null
BitmapData.__tempVector = new (lime_math_Vector2().default)()

// Export

exports.default = BitmapData;