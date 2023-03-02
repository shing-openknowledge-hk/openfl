// Class: openfl.display3D.textures.CubeTexture

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../hxClasses_stub").default;
var $hxEnums = require("./../../../hxEnums_stub").default;
var $import = require("./../../../import_stub").default;
var $extend = require("./../../../extend_stub").default;
function openfl_display3D_textures_TextureBase() {return require("./../../../openfl/display3D/textures/TextureBase");}
function haxe_Timer() {return require("./../../../haxe/Timer");}
function openfl_events_Event() {return require("./../../../openfl/events/Event");}
function lime_graphics__$WebGLRenderContext_WebGLRenderContext_$Impl_$() {return require("./../../../lime/graphics/_WebGLRenderContext/WebGLRenderContext_Impl_");}
function openfl_utils__$ByteArray_ByteArray_$Impl_$() {return require("./../../../openfl/utils/_ByteArray/ByteArray_Impl_");}
function lime_utils_Log() {return require("./../../../lime/utils/Log");}
function openfl_display3D_Context3D() {return require("./../../../openfl/display3D/Context3D");}
function js__$Boot_HaxeError() {return require("./../../../js/_Boot/HaxeError");}
function openfl_errors_IllegalOperationError() {return require("./../../../openfl/errors/IllegalOperationError");}
function openfl__$internal_formats_atf_ATFReader() {return require("./../../../openfl/_internal/formats/atf/ATFReader");}
function Std() {return require("./../../../Std");}

// Constructor

var CubeTexture = function(context,size,format,optimizeForRenderToTexture,streamingLevels) {
	(openfl_display3D_textures_TextureBase().default).call(this,context);
	this.__size = size;
	this.__width = this.__height = this.__size;
	this.__optimizeForRenderToTexture = optimizeForRenderToTexture;
	this.__streamingLevels = streamingLevels;
	this.__textureTarget = this.__context.gl.TEXTURE_CUBE_MAP;
	this.__uploadedSides = 0;
}

// Meta

CubeTexture.__name__ = "openfl.display3D.textures.CubeTexture";
CubeTexture.__isInterface__ = false;
CubeTexture.__super__ = (openfl_display3D_textures_TextureBase().default);
CubeTexture.prototype = $extend((openfl_display3D_textures_TextureBase().default).prototype, {
	uploadCompressedTextureFromByteArray: function(data,byteArrayOffset,async) {
		if(async == null) {
			async = false;
		}
		var _gthis = this;
		if(!async) {
			this.__uploadCompressedTextureFromByteArray(data,byteArrayOffset);
		} else {
			(haxe_Timer().default).delay(function() {
				_gthis.__uploadCompressedTextureFromByteArray(data,byteArrayOffset);
				var event = null;
				event = new (openfl_events_Event().default)("textureReady");
				_gthis.dispatchEvent(event);
			},1);
		}
	},
	uploadFromBitmapData: function(source,side,miplevel,generateMipmap) {
		if(generateMipmap == null) {
			generateMipmap = false;
		}
		if(miplevel == null) {
			miplevel = 0;
		}
		if(source == null) {
			return;
		}
		var size = this.__size >> miplevel;
		if(size == 0) {
			return;
		}
		var image = this.__getImage(source);
		if(image == null) {
			return;
		}
		if(miplevel == 0 && image.buffer != null && image.buffer.data == null && image.buffer.get_src() != null) {
			var gl = this.__context.gl;
			var size1 = this.__size >> miplevel;
			if(size1 == 0) {
				return;
			}
			var target = this.__sideToTarget(side);
			this.__context.__bindGLTextureCubeMap(this.__textureID);
			(lime_graphics__$WebGLRenderContext_WebGLRenderContext_$Impl_$().default).texImage2D(gl,target,miplevel,this.__internalFormat,this.__format,gl.UNSIGNED_BYTE,image.buffer.get_src());
			this.__context.__bindGLTextureCubeMap(null);
			this.__uploadedSides |= 1 << side;
			return;
		}
		this.uploadFromTypedArray(image.get_data(),side,miplevel);
	},
	uploadFromByteArray: function(data,byteArrayOffset,side,miplevel) {
		if(miplevel == null) {
			miplevel = 0;
		}
		if(byteArrayOffset == 0) {
			this.uploadFromTypedArray(data.b,side,miplevel);
			return;
		}
		var elements = null;
		var array = null;
		var view = null;
		var buffer = (openfl_utils__$ByteArray_ByteArray_$Impl_$().default).toArrayBuffer(data);
		var byteoffset = byteArrayOffset;
		var len = null;
		if(byteoffset == null) {
			byteoffset = 0;
		}
		var this1;
		if(elements != null) {
			this1 = new Uint8Array(elements);
		} else if(array != null) {
			this1 = new Uint8Array(array);
		} else if(view != null) {
			this1 = new Uint8Array(view);
		} else if(buffer != null) {
			if(len == null) {
				this1 = new Uint8Array(buffer,byteoffset);
			} else {
				this1 = new Uint8Array(buffer,byteoffset,len);
			}
		} else {
			this1 = null;
		}
		this.uploadFromTypedArray(this1,side,miplevel);
	},
	uploadFromTypedArray: function(data,side,miplevel) {
		if(miplevel == null) {
			miplevel = 0;
		}
		if(data == null) {
			return;
		}
		var gl = this.__context.gl;
		var size = this.__size >> miplevel;
		if(size == 0) {
			return;
		}
		var target = this.__sideToTarget(side);
		this.__context.__bindGLTextureCubeMap(this.__textureID);
		(lime_graphics__$WebGLRenderContext_WebGLRenderContext_$Impl_$().default).texImage2D(gl,target,miplevel,this.__internalFormat,size,size,0,this.__format,gl.UNSIGNED_BYTE,data);
		this.__context.__bindGLTextureCubeMap(null);
		this.__uploadedSides |= 1 << side;
	},
	__getGLFramebuffer: function(enableDepthAndStencil,antiAlias,surfaceSelector) {
		var gl = this.__context.gl;
		if(this.__glFramebuffer == null) {
			this.__glFramebuffer = gl.createFramebuffer();
			this.__framebufferSurface = -1;
		}
		if(this.__framebufferSurface != surfaceSelector) {
			this.__framebufferSurface = surfaceSelector;
			this.__context.__bindGLFramebuffer(this.__glFramebuffer);
			gl.framebufferTexture2D(gl.FRAMEBUFFER,gl.COLOR_ATTACHMENT0,gl.TEXTURE_CUBE_MAP_POSITIVE_X + surfaceSelector,this.__textureID,0);
			if(this.__context.__enableErrorChecking) {
				var code = gl.checkFramebufferStatus(gl.FRAMEBUFFER);
				if(code != gl.FRAMEBUFFER_COMPLETE) {
					(lime_utils_Log().default).error("Error: Context3D.setRenderToTexture status:" + code + " width:" + this.__width + " height:" + this.__height,{ fileName : "../src/openfl/display3D/textures/CubeTexture.hx", lineNumber : 278, className : "openfl.display3D.textures.CubeTexture", methodName : "__getGLFramebuffer"});
				}
			}
		}
		return (openfl_display3D_textures_TextureBase().default).prototype.__getGLFramebuffer.call(this,enableDepthAndStencil,antiAlias,surfaceSelector);
	},
	__setSamplerState: function(state) {
		if((openfl_display3D_textures_TextureBase().default).prototype.__setSamplerState.call(this,state)) {
			var gl = this.__context.gl;
			if(state.mipfilter != "mipnone" && !this.__samplerState.mipmapGenerated) {
				gl.generateMipmap(gl.TEXTURE_CUBE_MAP);
				this.__samplerState.mipmapGenerated = true;
			}
			if((openfl_display3D_Context3D().default).__glMaxTextureMaxAnisotropy != 0) {
				var aniso;
				switch(state.filter) {
				case "anisotropic16x":
					aniso = 16;
					break;
				case "anisotropic2x":
					aniso = 2;
					break;
				case "anisotropic4x":
					aniso = 4;
					break;
				case "anisotropic8x":
					aniso = 8;
					break;
				default:
					aniso = 1;
				}
				if(aniso > (openfl_display3D_Context3D().default).__glMaxTextureMaxAnisotropy) {
					aniso = (openfl_display3D_Context3D().default).__glMaxTextureMaxAnisotropy;
				}
				gl.texParameterf(gl.TEXTURE_CUBE_MAP,(openfl_display3D_Context3D().default).__glTextureMaxAnisotropy,aniso);
			}
			return true;
		}
		return false;
	},
	__sideToTarget: function(side) {
		var gl = this.__context.gl;
		switch(side) {
		case 0:
			return gl.TEXTURE_CUBE_MAP_POSITIVE_X;
		case 1:
			return gl.TEXTURE_CUBE_MAP_NEGATIVE_X;
		case 2:
			return gl.TEXTURE_CUBE_MAP_POSITIVE_Y;
		case 3:
			return gl.TEXTURE_CUBE_MAP_NEGATIVE_Y;
		case 4:
			return gl.TEXTURE_CUBE_MAP_POSITIVE_Z;
		case 5:
			return gl.TEXTURE_CUBE_MAP_NEGATIVE_Z;
		default:
			throw new (js__$Boot_HaxeError().default)(new (openfl_errors_IllegalOperationError().default)());
		}
	},
	__uploadCompressedTextureFromByteArray: function(data,byteArrayOffset) {
		var _gthis = this;
		var reader = new (openfl__$internal_formats_atf_ATFReader().default)(data,byteArrayOffset);
		var alpha = reader.readHeader(this.__size,this.__size,true);
		var gl = this.__context.gl;
		this.__context.__bindGLTextureCubeMap(this.__textureID);
		var hasTexture = false;
		reader.readTextures(function(side,level,gpuFormat,width,height,blockLength,bytes) {
			var format = alpha ? (openfl_display3D_textures_TextureBase().default).__compressedFormatsAlpha.get(gpuFormat) : (openfl_display3D_textures_TextureBase().default).__compressedFormats.get(gpuFormat);
			if(format == 0) {
				return;
			}
			hasTexture = true;
			var target = _gthis.__sideToTarget(side);
			_gthis.__format = format;
			_gthis.__internalFormat = format;
			if(alpha && gpuFormat == 2) {
				var size = (Std().default).int(blockLength / 2);
				var elements = null;
				var array = null;
				var view = null;
				var buffer = bytes.b.buffer;
				var byteoffset = 0;
				if(byteoffset == null) {
					byteoffset = 0;
				}
				var this1;
				if(elements != null) {
					this1 = new Uint8Array(elements);
				} else if(array != null) {
					this1 = new Uint8Array(array);
				} else if(view != null) {
					this1 = new Uint8Array(view);
				} else if(buffer != null) {
					if(size == null) {
						this1 = new Uint8Array(buffer,byteoffset);
					} else {
						this1 = new Uint8Array(buffer,byteoffset,size);
					}
				} else {
					this1 = null;
				}
				(lime_graphics__$WebGLRenderContext_WebGLRenderContext_$Impl_$().default).compressedTexImage2D(gl,target,level,_gthis.__internalFormat,width,height,0,this1);
				var alphaTexture = new CubeTexture(_gthis.__context,_gthis.__size,"compressed",_gthis.__optimizeForRenderToTexture,_gthis.__streamingLevels);
				alphaTexture.__format = format;
				alphaTexture.__internalFormat = format;
				_gthis.__context.__bindGLTextureCubeMap(alphaTexture.__textureID);
				var elements1 = null;
				var array1 = null;
				var view1 = null;
				var buffer1 = bytes.b.buffer;
				var byteoffset1 = size;
				if(byteoffset1 == null) {
					byteoffset1 = 0;
				}
				var this2;
				if(elements1 != null) {
					this2 = new Uint8Array(elements1);
				} else if(array1 != null) {
					this2 = new Uint8Array(array1);
				} else if(view1 != null) {
					this2 = new Uint8Array(view1);
				} else if(buffer1 != null) {
					if(size == null) {
						this2 = new Uint8Array(buffer1,byteoffset1);
					} else {
						this2 = new Uint8Array(buffer1,byteoffset1,size);
					}
				} else {
					this2 = null;
				}
				(lime_graphics__$WebGLRenderContext_WebGLRenderContext_$Impl_$().default).compressedTexImage2D(gl,target,level,alphaTexture.__internalFormat,width,height,0,this2);
				_gthis.__alphaTexture = alphaTexture;
			} else {
				var elements2 = null;
				var array2 = null;
				var view2 = null;
				var buffer2 = bytes.b.buffer;
				var byteoffset2 = 0;
				if(byteoffset2 == null) {
					byteoffset2 = 0;
				}
				var this3;
				if(elements2 != null) {
					this3 = new Uint8Array(elements2);
				} else if(array2 != null) {
					this3 = new Uint8Array(array2);
				} else if(view2 != null) {
					this3 = new Uint8Array(view2);
				} else if(buffer2 != null) {
					if(blockLength == null) {
						this3 = new Uint8Array(buffer2,byteoffset2);
					} else {
						this3 = new Uint8Array(buffer2,byteoffset2,blockLength);
					}
				} else {
					this3 = null;
				}
				(lime_graphics__$WebGLRenderContext_WebGLRenderContext_$Impl_$().default).compressedTexImage2D(gl,target,level,_gthis.__internalFormat,width,height,0,this3);
			}
		});
		if(!hasTexture) {
			var elements3 = this.__size * this.__size * 4;
			var array3 = null;
			var view3 = null;
			var buffer3 = null;
			var len = null;
			var this4;
			if(elements3 != null) {
				this4 = new Uint8Array(elements3);
			} else if(array3 != null) {
				this4 = new Uint8Array(array3);
			} else if(view3 != null) {
				this4 = new Uint8Array(view3);
			} else if(buffer3 != null) {
				if(len == null) {
					this4 = new Uint8Array(buffer3,0);
				} else {
					this4 = new Uint8Array(buffer3,0,len);
				}
			} else {
				this4 = null;
			}
			var data1 = this4;
			var tmp = this.__sideToTarget(0);
			(lime_graphics__$WebGLRenderContext_WebGLRenderContext_$Impl_$().default).texImage2D(gl,tmp,0,this.__internalFormat,this.__size,this.__size,0,this.__format,gl.UNSIGNED_BYTE,data1);
			var elements4 = this.__size * this.__size * 4;
			var array4 = null;
			var view4 = null;
			var buffer4 = null;
			var len1 = null;
			var this5;
			if(elements4 != null) {
				this5 = new Uint8Array(elements4);
			} else if(array4 != null) {
				this5 = new Uint8Array(array4);
			} else if(view4 != null) {
				this5 = new Uint8Array(view4);
			} else if(buffer4 != null) {
				if(len1 == null) {
					this5 = new Uint8Array(buffer4,0);
				} else {
					this5 = new Uint8Array(buffer4,0,len1);
				}
			} else {
				this5 = null;
			}
			var data2 = this5;
			var tmp1 = this.__sideToTarget(1);
			(lime_graphics__$WebGLRenderContext_WebGLRenderContext_$Impl_$().default).texImage2D(gl,tmp1,0,this.__internalFormat,this.__size,this.__size,0,this.__format,gl.UNSIGNED_BYTE,data2);
			var elements5 = this.__size * this.__size * 4;
			var array5 = null;
			var view5 = null;
			var buffer5 = null;
			var len2 = null;
			var this6;
			if(elements5 != null) {
				this6 = new Uint8Array(elements5);
			} else if(array5 != null) {
				this6 = new Uint8Array(array5);
			} else if(view5 != null) {
				this6 = new Uint8Array(view5);
			} else if(buffer5 != null) {
				if(len2 == null) {
					this6 = new Uint8Array(buffer5,0);
				} else {
					this6 = new Uint8Array(buffer5,0,len2);
				}
			} else {
				this6 = null;
			}
			var data3 = this6;
			var tmp2 = this.__sideToTarget(2);
			(lime_graphics__$WebGLRenderContext_WebGLRenderContext_$Impl_$().default).texImage2D(gl,tmp2,0,this.__internalFormat,this.__size,this.__size,0,this.__format,gl.UNSIGNED_BYTE,data3);
			var elements6 = this.__size * this.__size * 4;
			var array6 = null;
			var view6 = null;
			var buffer6 = null;
			var len3 = null;
			var this7;
			if(elements6 != null) {
				this7 = new Uint8Array(elements6);
			} else if(array6 != null) {
				this7 = new Uint8Array(array6);
			} else if(view6 != null) {
				this7 = new Uint8Array(view6);
			} else if(buffer6 != null) {
				if(len3 == null) {
					this7 = new Uint8Array(buffer6,0);
				} else {
					this7 = new Uint8Array(buffer6,0,len3);
				}
			} else {
				this7 = null;
			}
			var data4 = this7;
			var tmp3 = this.__sideToTarget(3);
			(lime_graphics__$WebGLRenderContext_WebGLRenderContext_$Impl_$().default).texImage2D(gl,tmp3,0,this.__internalFormat,this.__size,this.__size,0,this.__format,gl.UNSIGNED_BYTE,data4);
			var elements7 = this.__size * this.__size * 4;
			var array7 = null;
			var view7 = null;
			var buffer7 = null;
			var len4 = null;
			var this8;
			if(elements7 != null) {
				this8 = new Uint8Array(elements7);
			} else if(array7 != null) {
				this8 = new Uint8Array(array7);
			} else if(view7 != null) {
				this8 = new Uint8Array(view7);
			} else if(buffer7 != null) {
				if(len4 == null) {
					this8 = new Uint8Array(buffer7,0);
				} else {
					this8 = new Uint8Array(buffer7,0,len4);
				}
			} else {
				this8 = null;
			}
			var data5 = this8;
			var tmp4 = this.__sideToTarget(4);
			(lime_graphics__$WebGLRenderContext_WebGLRenderContext_$Impl_$().default).texImage2D(gl,tmp4,0,this.__internalFormat,this.__size,this.__size,0,this.__format,gl.UNSIGNED_BYTE,data5);
			var elements8 = this.__size * this.__size * 4;
			var array8 = null;
			var view8 = null;
			var buffer8 = null;
			var len5 = null;
			var this9;
			if(elements8 != null) {
				this9 = new Uint8Array(elements8);
			} else if(array8 != null) {
				this9 = new Uint8Array(array8);
			} else if(view8 != null) {
				this9 = new Uint8Array(view8);
			} else if(buffer8 != null) {
				if(len5 == null) {
					this9 = new Uint8Array(buffer8,0);
				} else {
					this9 = new Uint8Array(buffer8,0,len5);
				}
			} else {
				this9 = null;
			}
			var data6 = this9;
			var tmp5 = this.__sideToTarget(5);
			(lime_graphics__$WebGLRenderContext_WebGLRenderContext_$Impl_$().default).texImage2D(gl,tmp5,0,this.__internalFormat,this.__size,this.__size,0,this.__format,gl.UNSIGNED_BYTE,data6);
		}
		this.__context.__bindGLTextureCubeMap(null);
	}
});
CubeTexture.prototype.__class__ = CubeTexture.prototype.constructor = $hxClasses["openfl.display3D.textures.CubeTexture"] = CubeTexture;

// Init



// Statics




// Export

exports.default = CubeTexture;