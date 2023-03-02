// Class: openfl.media.Video

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;
var $import = require("./../../import_stub").default;
var $extend = require("./../../extend_stub").default;
function openfl_display_DisplayObject() {return require("./../../openfl/display/DisplayObject");}
function openfl_geom_Rectangle() {return require("./../../openfl/geom/Rectangle");}
function lime_graphics__$WebGLRenderContext_WebGLRenderContext_$Impl_$() {return require("./../../lime/graphics/_WebGLRenderContext/WebGLRenderContext_Impl_");}
function openfl_geom_Point() {return require("./../../openfl/geom/Point");}
function openfl__$internal_renderer_canvas_CanvasVideo() {return require("./../../openfl/_internal/renderer/canvas/CanvasVideo");}
function openfl__$internal_renderer_dom_DOMVideo() {return require("./../../openfl/_internal/renderer/dom/DOMVideo");}
function openfl__$internal_renderer_context3D_Context3DVideo() {return require("./../../openfl/_internal/renderer/context3D/Context3DVideo");}
function Std() {return require("./../../Std");}

// Constructor

var Video = function(width,height) {
	if(height == null) {
		height = 240;
	}
	if(width == null) {
		width = 320;
	}
	(openfl_display_DisplayObject().default).call(this);
	this.__width = width;
	this.__height = height;
	this.__textureTime = -1;
	this.smoothing = false;
	this.deblocking = 0;
}

// Meta

Video.__name__ = "openfl.media.Video";
Video.__isInterface__ = false;
Video.__super__ = (openfl_display_DisplayObject().default);
Video.prototype = $extend((openfl_display_DisplayObject().default).prototype, {
	attachNetStream: function(netStream) {
		this.__stream = netStream;
		if(this.__stream != null && this.__stream.__video != null && !this.__stream.__closed) {
			this.__stream.__video.play();
		}
	},
	clear: function() {
	},
	__enterFrame: function(deltaTime) {
		if(this.__renderable && this.__stream != null) {
			this.__setRenderDirty();
		}
	},
	__getBounds: function(rect,matrix) {
		var bounds = (openfl_geom_Rectangle().default).__pool.get();
		bounds.setTo(0,0,this.__width,this.__height);
		bounds.__transform(bounds,matrix);
		rect.__expand(bounds.x,bounds.y,bounds.width,bounds.height);
		(openfl_geom_Rectangle().default).__pool.release(bounds);
	},
	__getIndexBuffer: function(context) {
		var gl = context.gl;
		if(this.__indexBuffer == null || this.__indexBufferContext != context.__context) {
			var array = null;
			var view = null;
			var buffer = null;
			var len = null;
			var this1 = new Uint16Array(6);
			this.__indexBufferData = this1;
			this.__indexBufferData[0] = 0;
			this.__indexBufferData[1] = 1;
			this.__indexBufferData[2] = 2;
			this.__indexBufferData[3] = 2;
			this.__indexBufferData[4] = 1;
			this.__indexBufferData[5] = 3;
			this.__indexBufferContext = context.__context;
			this.__indexBuffer = context.createIndexBuffer(6);
			this.__indexBuffer.uploadFromTypedArray(this.__indexBufferData);
		}
		return this.__indexBuffer;
	},
	__getTexture: function(context) {
		if(this.__stream == null || this.__stream.__video == null) {
			return null;
		}
		var gl = context.__context.webgl;
		var internalFormat = gl.RGBA;
		var format = gl.RGBA;
		if(!this.__stream.__closed && this.__stream.__video.currentTime != this.__textureTime) {
			if(this.__texture == null) {
				this.__texture = context.createRectangleTexture(this.__stream.__video.videoWidth,this.__stream.__video.videoHeight,"bgra",false);
			}
			context.__bindGLTexture2D(this.__texture.__textureID);
			(lime_graphics__$WebGLRenderContext_WebGLRenderContext_$Impl_$().default).texImage2D(gl,gl.TEXTURE_2D,0,internalFormat,format,gl.UNSIGNED_BYTE,this.__stream.__video);
			this.__textureTime = this.__stream.__video.currentTime;
		}
		return this.__texture;
	},
	__getVertexBuffer: function(context) {
		var gl = context.gl;
		if(this.__vertexBuffer == null || this.__vertexBufferContext != context.__context) {
			var uvWidth = 1;
			var uvHeight = 1;
			var array = null;
			var view = null;
			var buffer = null;
			var len = null;
			var this1 = new Float32Array(20);
			this.__vertexBufferData = this1;
			this.__vertexBufferData[0] = this.get_width();
			this.__vertexBufferData[1] = this.get_height();
			this.__vertexBufferData[3] = uvWidth;
			this.__vertexBufferData[4] = uvHeight;
			this.__vertexBufferData[6] = this.get_height();
			this.__vertexBufferData[9] = uvHeight;
			this.__vertexBufferData[10] = this.get_width();
			this.__vertexBufferData[13] = uvWidth;
			this.__vertexBufferContext = context.__context;
			this.__vertexBuffer = context.createVertexBuffer(3,5);
			this.__vertexBuffer.uploadFromTypedArray(this.__vertexBufferData);
		}
		return this.__vertexBuffer;
	},
	__hitTest: function(x,y,shapeFlag,stack,interactiveOnly,hitObject) {
		if(!hitObject.get_visible() || this.__isMask) {
			return false;
		}
		if(this.get_mask() != null && !this.get_mask().__hitTestMask(x,y)) {
			return false;
		}
		this.__getRenderTransform();
		var px = this.__renderTransform.__transformInverseX(x,y);
		var py = this.__renderTransform.__transformInverseY(x,y);
		if(px > 0 && py > 0 && px <= this.__width && py <= this.__height) {
			if(stack != null && !interactiveOnly) {
				stack.push(hitObject);
			}
			return true;
		}
		return false;
	},
	__hitTestMask: function(x,y) {
		var point = (openfl_geom_Point().default).__pool.get();
		point.setTo(x,y);
		this.__globalToLocal(point,point);
		var hit = point.x > 0 && point.y > 0 && point.x <= this.__width && point.y <= this.__height;
		(openfl_geom_Point().default).__pool.release(point);
		return hit;
	},
	__renderCanvas: function(renderer) {
		(openfl__$internal_renderer_canvas_CanvasVideo().default).render(this,renderer);
		this.__renderEvent(renderer);
	},
	__renderDOM: function(renderer) {
		(openfl__$internal_renderer_dom_DOMVideo().default).render(this,renderer);
		this.__renderEvent(renderer);
	},
	__renderGL: function(renderer) {
		(openfl__$internal_renderer_context3D_Context3DVideo().default).render(this,renderer);
		this.__renderEvent(renderer);
	},
	__renderGLMask: function(renderer) {
		(openfl__$internal_renderer_context3D_Context3DVideo().default).renderMask(this,renderer);
	},
	get_height: function() {
		return this.__height * this.get_scaleY();
	},
	set_height: function(value) {
		if(this.get_scaleY() != 1 || value != this.__height) {
			this.__setTransformDirty();
			this.__dirty = true;
		}
		this.set_scaleY(1);
		return this.__height = value;
	},
	get_videoHeight: function() {
		if(this.__stream != null && this.__stream.__video != null) {
			return (Std().default).int(this.__stream.__video.videoHeight);
		}
		return 0;
	},
	get_videoWidth: function() {
		if(this.__stream != null && this.__stream.__video != null) {
			return (Std().default).int(this.__stream.__video.videoWidth);
		}
		return 0;
	},
	get_width: function() {
		return this.__width * this.__scaleX;
	},
	set_width: function(value) {
		if(this.__scaleX != 1 || this.__width != value) {
			this.__setTransformDirty();
			this.__dirty = true;
		}
		this.set_scaleX(1);
		return this.__width = value;
	}
});
Video.prototype.__class__ = Video.prototype.constructor = $hxClasses["openfl.media.Video"] = Video;

// Init

Object.defineProperties(Video.prototype,{ videoHeight : { get : function () { return this.get_videoHeight (); }}, videoWidth : { get : function () { return this.get_videoWidth (); }}});

// Statics


Video.VERTEX_BUFFER_STRIDE = 5

// Export

exports.default = Video;