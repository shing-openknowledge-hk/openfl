// Class: openfl.display3D.textures.Texture

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
function openfl_display_BitmapData() {return require("./../../../openfl/display/BitmapData");}
function lime_graphics__$WebGLRenderContext_WebGLRenderContext_$Impl_$() {return require("./../../../lime/graphics/_WebGLRenderContext/WebGLRenderContext_Impl_");}
function openfl_utils__$ByteArray_ByteArray_$Impl_$() {return require("./../../../openfl/utils/_ByteArray/ByteArray_Impl_");}
function openfl_display3D_Context3D() {return require("./../../../openfl/display3D/Context3D");}
function openfl__$internal_formats_atf_ATFReader() {return require("./../../../openfl/_internal/formats/atf/ATFReader");}
function Std() {return require("./../../../Std");}

// Constructor

var Texture = function(context,width,height,format,optimizeForRenderToTexture,streamingLevels) {
	(openfl_display3D_textures_TextureBase().default).call(this,context);
	this.__width = width;
	this.__height = height;
	this.__optimizeForRenderToTexture = optimizeForRenderToTexture;
	this.__streamingLevels = streamingLevels;
	var gl = this.__context.gl;
	this.__textureTarget = gl.TEXTURE_2D;
	this.__context.__bindGLTexture2D(this.__textureID);
	(lime_graphics__$WebGLRenderContext_WebGLRenderContext_$Impl_$().default).texImage2D(gl,this.__textureTarget,0,this.__internalFormat,this.__width,this.__height,0,this.__format,gl.UNSIGNED_BYTE,null);
	this.__context.__bindGLTexture2D(null);
	if(optimizeForRenderToTexture) {
		this.__getGLFramebuffer(true,0,0);
	}
}

// Meta

Texture.__name__ = "openfl.display3D.textures.Texture";
Texture.__isInterface__ = false;
Texture.__super__ = (openfl_display3D_textures_TextureBase().default);
Texture.prototype = $extend((openfl_display3D_textures_TextureBase().default).prototype, {
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
	uploadFromBitmapData: function(source,miplevel,generateMipmap) {
		if(generateMipmap == null) {
			generateMipmap = false;
		}
		if(miplevel == null) {
			miplevel = 0;
		}
		if(source == null) {
			return;
		}
		var width = this.__width >> miplevel;
		var height = this.__height >> miplevel;
		if(width == 0 && height == 0) {
			return;
		}
		if(width == 0) {
			width = 1;
		}
		if(height == 0) {
			height = 1;
		}
		if(source.width != width || source.height != height) {
			var copy = new (openfl_display_BitmapData().default)(width,height,true,0);
			copy.draw(source);
			source = copy;
		}
		var image = this.__getImage(source);
		if(image == null) {
			return;
		}
		if(miplevel == 0 && image.buffer != null && image.buffer.data == null && image.buffer.get_src() != null) {
			var gl = this.__context.gl;
			var width1 = this.__width >> miplevel;
			var height1 = this.__height >> miplevel;
			if(width1 == 0 && height1 == 0) {
				return;
			}
			if(width1 == 0) {
				width1 = 1;
			}
			if(height1 == 0) {
				height1 = 1;
			}
			this.__context.__bindGLTexture2D(this.__textureID);
			(lime_graphics__$WebGLRenderContext_WebGLRenderContext_$Impl_$().default).texImage2D(gl,this.__textureTarget,miplevel,this.__internalFormat,this.__format,gl.UNSIGNED_BYTE,image.buffer.get_src());
			this.__context.__bindGLTexture2D(null);
			return;
		}
		this.uploadFromTypedArray(image.get_data(),miplevel);
	},
	uploadFromByteArray: function(data,byteArrayOffset,miplevel) {
		if(miplevel == null) {
			miplevel = 0;
		}
		if(byteArrayOffset == 0) {
			this.uploadFromTypedArray(data.b,miplevel);
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
		this.uploadFromTypedArray(this1,miplevel);
	},
	uploadFromTypedArray: function(data,miplevel) {
		if(miplevel == null) {
			miplevel = 0;
		}
		if(data == null) {
			return;
		}
		var gl = this.__context.gl;
		var width = this.__width >> miplevel;
		var height = this.__height >> miplevel;
		if(width == 0 && height == 0) {
			return;
		}
		if(width == 0) {
			width = 1;
		}
		if(height == 0) {
			height = 1;
		}
		this.__context.__bindGLTexture2D(this.__textureID);
		(lime_graphics__$WebGLRenderContext_WebGLRenderContext_$Impl_$().default).texImage2D(gl,this.__textureTarget,miplevel,this.__internalFormat,width,height,0,this.__format,gl.UNSIGNED_BYTE,data);
		this.__context.__bindGLTexture2D(null);
	},
	__setSamplerState: function(state) {
		if((openfl_display3D_textures_TextureBase().default).prototype.__setSamplerState.call(this,state)) {
			var gl = this.__context.gl;
			if(state.mipfilter != "mipnone" && !this.__samplerState.mipmapGenerated) {
				gl.generateMipmap(gl.TEXTURE_2D);
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
				gl.texParameterf(gl.TEXTURE_2D,(openfl_display3D_Context3D().default).__glTextureMaxAnisotropy,aniso);
			}
			return true;
		}
		return false;
	},
	__uploadCompressedTextureFromByteArray: function(data,byteArrayOffset) {
		var _gthis = this;
		var reader = new (openfl__$internal_formats_atf_ATFReader().default)(data,byteArrayOffset);
		var alpha = reader.readHeader(this.__width,this.__height,false);
		var context = this.__context;
		var gl = context.gl;
		this.__context.__bindGLTexture2D(this.__textureID);
		var hasTexture = false;
		reader.readTextures(function(target,level,gpuFormat,width,height,blockLength,bytes) {
			var format = alpha ? (openfl_display3D_textures_TextureBase().default).__compressedFormatsAlpha.get(gpuFormat) : (openfl_display3D_textures_TextureBase().default).__compressedFormats.get(gpuFormat);
			if(format == 0) {
				return;
			}
			hasTexture = true;
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
				(lime_graphics__$WebGLRenderContext_WebGLRenderContext_$Impl_$().default).compressedTexImage2D(gl,_gthis.__textureTarget,level,_gthis.__internalFormat,width,height,0,this1);
				var alphaTexture = new Texture(_gthis.__context,_gthis.__width,_gthis.__height,"compressed",_gthis.__optimizeForRenderToTexture,_gthis.__streamingLevels);
				alphaTexture.__format = format;
				alphaTexture.__internalFormat = format;
				_gthis.__context.__bindGLTexture2D(alphaTexture.__textureID);
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
				(lime_graphics__$WebGLRenderContext_WebGLRenderContext_$Impl_$().default).compressedTexImage2D(gl,alphaTexture.__textureTarget,level,alphaTexture.__internalFormat,width,height,0,this2);
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
				(lime_graphics__$WebGLRenderContext_WebGLRenderContext_$Impl_$().default).compressedTexImage2D(gl,_gthis.__textureTarget,level,_gthis.__internalFormat,width,height,0,this3);
			}
		});
		if(!hasTexture) {
			var elements3 = this.__width * this.__height * 4;
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
			(lime_graphics__$WebGLRenderContext_WebGLRenderContext_$Impl_$().default).texImage2D(gl,this.__textureTarget,0,this.__internalFormat,this.__width,this.__height,0,this.__format,gl.UNSIGNED_BYTE,data1);
		}
		this.__context.__bindGLTexture2D(null);
	}
});
Texture.prototype.__class__ = Texture.prototype.constructor = $hxClasses["openfl.display3D.textures.Texture"] = Texture;

// Init



// Statics


Texture.__lowMemoryMode = false

// Export

exports.default = Texture;