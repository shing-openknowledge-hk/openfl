// Class: openfl.display3D.textures.RectangleTexture

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../hxClasses_stub").default;
var $hxEnums = require("./../../../hxEnums_stub").default;
var $import = require("./../../../import_stub").default;
var $extend = require("./../../../extend_stub").default;
function openfl_display3D_textures_TextureBase() {return require("./../../../openfl/display3D/textures/TextureBase");}
function lime_graphics__$WebGLRenderContext_WebGLRenderContext_$Impl_$() {return require("./../../../lime/graphics/_WebGLRenderContext/WebGLRenderContext_Impl_");}
function openfl_utils__$ByteArray_ByteArray_$Impl_$() {return require("./../../../openfl/utils/_ByteArray/ByteArray_Impl_");}
function openfl_display3D_Context3D() {return require("./../../../openfl/display3D/Context3D");}

// Constructor

var RectangleTexture = function(context,width,height,format,optimizeForRenderToTexture) {
	(openfl_display3D_textures_TextureBase().default).call(this,context);
	this.__width = width;
	this.__height = height;
	this.__optimizeForRenderToTexture = optimizeForRenderToTexture;
	this.__textureTarget = this.__context.gl.TEXTURE_2D;
	this.uploadFromTypedArray(null);
	if(optimizeForRenderToTexture) {
		this.__getGLFramebuffer(true,0,0);
	}
}

// Meta

RectangleTexture.__name__ = "openfl.display3D.textures.RectangleTexture";
RectangleTexture.__isInterface__ = false;
RectangleTexture.__super__ = (openfl_display3D_textures_TextureBase().default);
RectangleTexture.prototype = $extend((openfl_display3D_textures_TextureBase().default).prototype, {
	uploadFromBitmapData: function(source) {
		if(source == null) {
			return;
		}
		var image = this.__getImage(source);
		if(image == null) {
			return;
		}
		if(image.buffer != null && image.buffer.data == null && image.buffer.get_src() != null) {
			var gl = this.__context.gl;
			this.__context.__bindGLTexture2D(this.__textureID);
			(lime_graphics__$WebGLRenderContext_WebGLRenderContext_$Impl_$().default).texImage2D(gl,this.__textureTarget,0,this.__internalFormat,this.__format,gl.UNSIGNED_BYTE,image.buffer.get_src());
			this.__context.__bindGLTexture2D(null);
			return;
		}
		this.uploadFromTypedArray(image.get_data());
	},
	uploadFromByteArray: function(data,byteArrayOffset) {
		if(byteArrayOffset == 0) {
			this.uploadFromTypedArray(data.b);
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
		this.uploadFromTypedArray(this1);
	},
	uploadFromTypedArray: function(data) {
		var gl = this.__context.gl;
		this.__context.__bindGLTexture2D(this.__textureID);
		(lime_graphics__$WebGLRenderContext_WebGLRenderContext_$Impl_$().default).texImage2D(gl,this.__textureTarget,0,this.__internalFormat,this.__width,this.__height,0,this.__format,gl.UNSIGNED_BYTE,data);
		this.__context.__bindGLTexture2D(null);
	},
	__setSamplerState: function(state) {
		if((openfl_display3D_textures_TextureBase().default).prototype.__setSamplerState.call(this,state)) {
			var gl = this.__context.gl;
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
	}
});
RectangleTexture.prototype.__class__ = RectangleTexture.prototype.constructor = $hxClasses["openfl.display3D.textures.RectangleTexture"] = RectangleTexture;

// Init



// Statics




// Export

exports.default = RectangleTexture;