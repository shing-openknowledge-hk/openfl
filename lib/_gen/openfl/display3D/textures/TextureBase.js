// Class: openfl.display3D.textures.TextureBase

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../hxClasses_stub").default;
var $hxEnums = require("./../../../hxEnums_stub").default;
var $import = require("./../../../import_stub").default;
var $extend = require("./../../../extend_stub").default;
function openfl_events_EventDispatcher() {return require("./../../../openfl/events/EventDispatcher");}
function lime_utils_Log() {return require("./../../../lime/utils/Log");}
function openfl_display3D_Context3D() {return require("./../../../openfl/display3D/Context3D");}
function lime__$internal_graphics_ImageCanvasUtil() {return require("./../../../lime/_internal/graphics/ImageCanvasUtil");}
function lime_graphics_ImageType() {return require("./../../../lime/graphics/ImageType");}
function js__$Boot_HaxeError() {return require("./../../../js/_Boot/HaxeError");}
function openfl_errors_Error() {return require("./../../../openfl/errors/Error");}
function lime_graphics__$WebGLRenderContext_WebGLRenderContext_$Impl_$() {return require("./../../../lime/graphics/_WebGLRenderContext/WebGLRenderContext_Impl_");}
function haxe_ds_IntMap() {return require("./../../../haxe/ds/IntMap");}

// Constructor

var TextureBase = function(context) {
	(openfl_events_EventDispatcher().default).call(this);
	this.__context = context;
	var gl = this.__context.gl;
	this.__textureID = gl.createTexture();
	this.__textureContext = this.__context.__context;
	if(TextureBase.__supportsBGRA == null) {
		TextureBase.__textureInternalFormat = gl.RGBA;
		var bgraExtension = null;
		if(bgraExtension != null) {
			TextureBase.__supportsBGRA = true;
			TextureBase.__textureFormat = bgraExtension.BGRA_EXT;
			if(context.__context.type == "opengles") {
				TextureBase.__textureInternalFormat = bgraExtension.BGRA_EXT;
			}
		} else {
			TextureBase.__supportsBGRA = false;
			TextureBase.__textureFormat = gl.RGBA;
		}
		TextureBase.__compressedFormats = new (haxe_ds_IntMap().default)();
		TextureBase.__compressedFormatsAlpha = new (haxe_ds_IntMap().default)();
		var dxtExtension = gl.getExtension("WEBGL_compressed_texture_s3tc");
		var etc1Extension = gl.getExtension("WEBGL_compressed_texture_etc1");
		var pvrtcExtension = gl.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
		if(dxtExtension != null) {
			var v = dxtExtension.COMPRESSED_RGBA_S3TC_DXT1_EXT;
			TextureBase.__compressedFormats.set(0,v);
			var v1 = dxtExtension.COMPRESSED_RGBA_S3TC_DXT5_EXT;
			TextureBase.__compressedFormatsAlpha.set(0,v1);
		}
		if(etc1Extension != null) {
			var v2 = etc1Extension.COMPRESSED_RGB_ETC1_WEBGL;
			TextureBase.__compressedFormats.set(2,v2);
			var v3 = etc1Extension.COMPRESSED_RGB_ETC1_WEBGL;
			TextureBase.__compressedFormatsAlpha.set(2,v3);
		}
		if(pvrtcExtension != null) {
			var v4 = pvrtcExtension.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
			TextureBase.__compressedFormats.set(1,v4);
			var v5 = pvrtcExtension.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
			TextureBase.__compressedFormatsAlpha.set(1,v5);
		}
	}
	this.__internalFormat = TextureBase.__textureInternalFormat;
	this.__format = TextureBase.__textureFormat;
}

// Meta

TextureBase.__name__ = "openfl.display3D.textures.TextureBase";
TextureBase.__isInterface__ = false;
TextureBase.__super__ = (openfl_events_EventDispatcher().default);
TextureBase.prototype = $extend((openfl_events_EventDispatcher().default).prototype, {
	dispose: function() {
		var gl = this.__context.gl;
		if(this.__alphaTexture != null) {
			this.__alphaTexture.dispose();
			this.__alphaTexture = null;
		}
		if(this.__textureID != null) {
			gl.deleteTexture(this.__textureID);
			this.__textureID = null;
		}
		if(this.__glFramebuffer != null) {
			gl.deleteFramebuffer(this.__glFramebuffer);
			this.__glFramebuffer = null;
		}
		if(this.__glDepthRenderbuffer != null) {
			gl.deleteRenderbuffer(this.__glDepthRenderbuffer);
			this.__glDepthRenderbuffer = null;
		}
		if(this.__glStencilRenderbuffer != null) {
			gl.deleteRenderbuffer(this.__glStencilRenderbuffer);
			this.__glStencilRenderbuffer = null;
		}
	},
	__getGLFramebuffer: function(enableDepthAndStencil,antiAlias,surfaceSelector) {
		var gl = this.__context.gl;
		if(this.__glFramebuffer == null) {
			this.__glFramebuffer = gl.createFramebuffer();
			this.__context.__bindGLFramebuffer(this.__glFramebuffer);
			gl.framebufferTexture2D(gl.FRAMEBUFFER,gl.COLOR_ATTACHMENT0,gl.TEXTURE_2D,this.__textureID,0);
			if(this.__context.__enableErrorChecking) {
				var code = gl.checkFramebufferStatus(gl.FRAMEBUFFER);
				if(code != gl.FRAMEBUFFER_COMPLETE) {
					(lime_utils_Log().default).warn("Error: Context3D.setRenderToTexture status:" + code + " width:" + this.__width + " height:" + this.__height,{ fileName : "../src/openfl/display3D/textures/TextureBase.hx", lineNumber : 201, className : "openfl.display3D.textures.TextureBase", methodName : "__getGLFramebuffer"});
				}
			}
		}
		if(enableDepthAndStencil && this.__glDepthRenderbuffer == null) {
			this.__context.__bindGLFramebuffer(this.__glFramebuffer);
			if((openfl_display3D_Context3D().default).__glDepthStencil != 0) {
				this.__glDepthRenderbuffer = gl.createRenderbuffer();
				this.__glStencilRenderbuffer = this.__glDepthRenderbuffer;
				gl.bindRenderbuffer(gl.RENDERBUFFER,this.__glDepthRenderbuffer);
				gl.renderbufferStorage(gl.RENDERBUFFER,(openfl_display3D_Context3D().default).__glDepthStencil,this.__width,this.__height);
				gl.framebufferRenderbuffer(gl.FRAMEBUFFER,gl.DEPTH_STENCIL_ATTACHMENT,gl.RENDERBUFFER,this.__glDepthRenderbuffer);
			} else {
				this.__glDepthRenderbuffer = gl.createRenderbuffer();
				this.__glStencilRenderbuffer = gl.createRenderbuffer();
				gl.bindRenderbuffer(gl.RENDERBUFFER,this.__glDepthRenderbuffer);
				gl.renderbufferStorage(gl.RENDERBUFFER,gl.DEPTH_COMPONENT16,this.__width,this.__height);
				gl.bindRenderbuffer(gl.RENDERBUFFER,this.__glStencilRenderbuffer);
				gl.renderbufferStorage(gl.RENDERBUFFER,gl.STENCIL_INDEX8,this.__width,this.__height);
				gl.framebufferRenderbuffer(gl.FRAMEBUFFER,gl.DEPTH_ATTACHMENT,gl.RENDERBUFFER,this.__glDepthRenderbuffer);
				gl.framebufferRenderbuffer(gl.FRAMEBUFFER,gl.STENCIL_ATTACHMENT,gl.RENDERBUFFER,this.__glStencilRenderbuffer);
			}
			if(this.__context.__enableErrorChecking) {
				var code1 = gl.checkFramebufferStatus(gl.FRAMEBUFFER);
				if(code1 != gl.FRAMEBUFFER_COMPLETE) {
					(lime_utils_Log().default).warn("Error: Context3D.setRenderToTexture status:" + code1 + " width:" + this.__width + " height:" + this.__height,{ fileName : "../src/openfl/display3D/textures/TextureBase.hx", lineNumber : 239, className : "openfl.display3D.textures.TextureBase", methodName : "__getGLFramebuffer"});
				}
			}
			gl.bindRenderbuffer(gl.RENDERBUFFER,null);
		}
		return this.__glFramebuffer;
	},
	__getImage: function(bitmapData) {
		var image = bitmapData.image;
		if(!bitmapData.__isValid || image == null) {
			return null;
		}
		(lime__$internal_graphics_ImageCanvasUtil().default).sync(image,false);
		var gl = this.__context.gl;
		if(image.type != (lime_graphics_ImageType().default).DATA && !image.get_premultiplied()) {
			gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL,1);
		} else if(!image.get_premultiplied() && image.get_transparent()) {
			gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL,0);
			image = image.clone();
			image.set_premultiplied(true);
		}
		if(image.get_format() != 0) {
			image = image.clone();
			image.set_format(0);
			image.buffer.premultiplied = true;
		}
		return image;
	},
	__getTexture: function() {
		return this.__textureID;
	},
	__setSamplerState: function(state) {
		if(!state.equals(this.__samplerState)) {
			var gl = this.__context.gl;
			if(this.__textureTarget == this.__context.gl.TEXTURE_CUBE_MAP) {
				this.__context.__bindGLTextureCubeMap(this.__textureID);
			} else {
				this.__context.__bindGLTexture2D(this.__textureID);
			}
			var wrapModeS = 0;
			var wrapModeT = 0;
			switch(state.wrap) {
			case "clamp":
				wrapModeS = gl.CLAMP_TO_EDGE;
				wrapModeT = gl.CLAMP_TO_EDGE;
				break;
			case "clamp_u_repeat_v":
				wrapModeS = gl.CLAMP_TO_EDGE;
				wrapModeT = gl.REPEAT;
				break;
			case "repeat":
				wrapModeS = gl.REPEAT;
				wrapModeT = gl.REPEAT;
				break;
			case "repeat_u_clamp_v":
				wrapModeS = gl.REPEAT;
				wrapModeT = gl.CLAMP_TO_EDGE;
				break;
			default:
				throw new (js__$Boot_HaxeError().default)(new (openfl_errors_Error().default)("wrap bad enum"));
			}
			var magFilter = 0;
			var minFilter = 0;
			if(state.filter == "nearest") {
				magFilter = gl.NEAREST;
			} else {
				magFilter = gl.LINEAR;
			}
			switch(state.mipfilter) {
			case "miplinear":
				minFilter = state.filter == "nearest" ? gl.NEAREST_MIPMAP_LINEAR : gl.LINEAR_MIPMAP_LINEAR;
				break;
			case "mipnearest":
				minFilter = state.filter == "nearest" ? gl.NEAREST_MIPMAP_NEAREST : gl.LINEAR_MIPMAP_NEAREST;
				break;
			case "mipnone":
				minFilter = state.filter == "nearest" ? gl.NEAREST : gl.LINEAR;
				break;
			default:
				throw new (js__$Boot_HaxeError().default)(new (openfl_errors_Error().default)("mipfiter bad enum"));
			}
			gl.texParameteri(this.__textureTarget,gl.TEXTURE_MIN_FILTER,minFilter);
			gl.texParameteri(this.__textureTarget,gl.TEXTURE_MAG_FILTER,magFilter);
			gl.texParameteri(this.__textureTarget,gl.TEXTURE_WRAP_S,wrapModeS);
			gl.texParameteri(this.__textureTarget,gl.TEXTURE_WRAP_T,wrapModeT);
			var tmp = state.lodBias != 0.0;
			if(this.__samplerState == null) {
				this.__samplerState = state.clone();
			}
			this.__samplerState.copyFrom(state);
			return true;
		}
		return false;
	},
	__uploadFromImage: function(image) {
		var gl = this.__context.gl;
		var internalFormat;
		var format;
		if(this.__textureTarget != gl.TEXTURE_2D) {
			return;
		}
		if(image.buffer.bitsPerPixel == 1) {
			internalFormat = gl.ALPHA;
			format = gl.ALPHA;
		} else {
			internalFormat = TextureBase.__textureInternalFormat;
			format = TextureBase.__textureFormat;
		}
		this.__context.__bindGLTexture2D(this.__textureID);
		if(image.type != (lime_graphics_ImageType().default).DATA && !image.get_premultiplied()) {
			gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL,1);
		} else if(!image.get_premultiplied() && image.get_transparent()) {
			gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL,1);
		}
		if(image.type == (lime_graphics_ImageType().default).DATA) {
			(lime_graphics__$WebGLRenderContext_WebGLRenderContext_$Impl_$().default).texImage2D(gl,gl.TEXTURE_2D,0,internalFormat,image.buffer.width,image.buffer.height,0,format,gl.UNSIGNED_BYTE,image.get_data());
		} else {
			(lime_graphics__$WebGLRenderContext_WebGLRenderContext_$Impl_$().default).texImage2D(gl,gl.TEXTURE_2D,0,internalFormat,format,gl.UNSIGNED_BYTE,image.get_src());
		}
		this.__context.__bindGLTexture2D(null);
	}
});
TextureBase.prototype.__class__ = TextureBase.prototype.constructor = $hxClasses["openfl.display3D.textures.TextureBase"] = TextureBase;

// Init



// Statics


TextureBase.__meta__ = { fields : { __textureContext : { SuppressWarnings : ["checkstyle:Dynamic"]}, __getGLFramebuffer : { SuppressWarnings : ["checkstyle:Dynamic"]}}}
TextureBase.__supportsBGRA = null

// Export

exports.default = TextureBase;