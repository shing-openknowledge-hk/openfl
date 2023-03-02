// Class: openfl.display3D.textures.VideoTexture

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../hxClasses_stub").default;
var $hxEnums = require("./../../../hxEnums_stub").default;
var $import = require("./../../../import_stub").default;
var $bind = require("./../../../bind_stub").default;
var $extend = require("./../../../extend_stub").default;
function openfl_display3D_textures_TextureBase() {return require("./../../../openfl/display3D/textures/TextureBase");}
function haxe_Timer() {return require("./../../../haxe/Timer");}
function lime_graphics__$WebGLRenderContext_WebGLRenderContext_$Impl_$() {return require("./../../../lime/graphics/_WebGLRenderContext/WebGLRenderContext_Impl_");}
function openfl_events_Event() {return require("./../../../openfl/events/Event");}

// Constructor

var VideoTexture = function(context) {
	(openfl_display3D_textures_TextureBase().default).call(this,context);
	this.__textureTarget = this.__context.gl.TEXTURE_2D;
}

// Meta

VideoTexture.__name__ = "openfl.display3D.textures.VideoTexture";
VideoTexture.__isInterface__ = false;
VideoTexture.__super__ = (openfl_display3D_textures_TextureBase().default);
VideoTexture.prototype = $extend((openfl_display3D_textures_TextureBase().default).prototype, {
	attachNetStream: function(netStream) {
		var _gthis = this;
		if(this.__netStream != null) {
			this.__netStream.__video.removeEventListener("canplay",$bind(this,this.__onCanPlay),false);
		}
		this.__netStream = netStream;
		if(this.__netStream.__video.readyState == 4) {
			(haxe_Timer().default).delay(function() {
				_gthis.__textureReady();
			},0);
		} else {
			this.__netStream.__video.addEventListener("canplay",$bind(this,this.__onCanPlay),false);
		}
	},
	__onCanPlay: function(_) {
		this.__textureReady();
	},
	__getTexture: function() {
		if((!this.__netStream.__video.paused || this.__netStream.get___seeking()) && this.__netStream.__video.readyState > 0) {
			this.__netStream.set___seeking(false);
			var gl = this.__context.gl;
			this.__context.__bindGLTexture2D(this.__textureID);
			(lime_graphics__$WebGLRenderContext_WebGLRenderContext_$Impl_$().default).texImage2D(gl,gl.TEXTURE_2D,0,gl.RGBA,gl.RGBA,gl.UNSIGNED_BYTE,this.__netStream.__video);
		}
		return this.__textureID;
	},
	__textureReady: function() {
		this.videoWidth = this.__netStream.__video.videoWidth;
		this.videoHeight = this.__netStream.__video.videoHeight;
		var event = null;
		event = new (openfl_events_Event().default)("textureReady");
		this.dispatchEvent(event);
	}
});
VideoTexture.prototype.__class__ = VideoTexture.prototype.constructor = $hxClasses["openfl.display3D.textures.VideoTexture"] = VideoTexture;

// Init



// Statics




// Export

exports.default = VideoTexture;