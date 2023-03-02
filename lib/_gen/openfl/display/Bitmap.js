// Class: openfl.display.Bitmap

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
function openfl__$internal_renderer_canvas_CanvasBitmap() {return require("./../../openfl/_internal/renderer/canvas/CanvasBitmap");}
function openfl__$internal_renderer_canvas_CanvasDisplayObject() {return require("./../../openfl/_internal/renderer/canvas/CanvasDisplayObject");}
function openfl__$internal_renderer_dom_DOMBitmap() {return require("./../../openfl/_internal/renderer/dom/DOMBitmap");}
function openfl__$internal_renderer_dom_DOMDisplayObject() {return require("./../../openfl/_internal/renderer/dom/DOMDisplayObject");}
function openfl__$internal_renderer_context3D_Context3DBitmap() {return require("./../../openfl/_internal/renderer/context3D/Context3DBitmap");}
function openfl__$internal_renderer_context3D_Context3DDisplayObject() {return require("./../../openfl/_internal/renderer/context3D/Context3DDisplayObject");}

// Constructor

var Bitmap = function(bitmapData,pixelSnapping,smoothing) {
	if(smoothing == null) {
		smoothing = false;
	}
	(openfl_display_DisplayObject().default).call(this);
	this.__bitmapData = bitmapData;
	this.pixelSnapping = pixelSnapping;
	this.smoothing = smoothing;
	if(pixelSnapping == null) {
		this.pixelSnapping = "auto";
	}
}

// Meta

Bitmap.__name__ = "openfl.display.Bitmap";
Bitmap.__isInterface__ = false;
Bitmap.__super__ = (openfl_display_DisplayObject().default);
Bitmap.prototype = $extend((openfl_display_DisplayObject().default).prototype, {
	__enterFrame: function(deltaTime) {
		if(this.__bitmapData != null && this.__bitmapData.image != null && this.__bitmapData.image.version != this.__imageVersion) {
			this.__setRenderDirty();
		}
	},
	__getBounds: function(rect,matrix) {
		var bounds = (openfl_geom_Rectangle().default).__pool.get();
		if(this.__bitmapData != null) {
			bounds.setTo(0,0,this.__bitmapData.width,this.__bitmapData.height);
		} else {
			bounds.setTo(0,0,0,0);
		}
		bounds.__transform(bounds,matrix);
		rect.__expand(bounds.x,bounds.y,bounds.width,bounds.height);
		(openfl_geom_Rectangle().default).__pool.release(bounds);
	},
	__hitTest: function(x,y,shapeFlag,stack,interactiveOnly,hitObject) {
		if(!hitObject.get_visible() || this.__isMask || this.__bitmapData == null) {
			return false;
		}
		if(this.get_mask() != null && !this.get_mask().__hitTestMask(x,y)) {
			return false;
		}
		this.__getRenderTransform();
		var px = this.__renderTransform.__transformInverseX(x,y);
		var py = this.__renderTransform.__transformInverseY(x,y);
		if(px > 0 && py > 0 && px <= this.__bitmapData.width && py <= this.__bitmapData.height) {
			if(this.__scrollRect != null && !this.__scrollRect.contains(px,py)) {
				return false;
			}
			if(stack != null && !interactiveOnly) {
				stack.push(hitObject);
			}
			return true;
		}
		return false;
	},
	__hitTestMask: function(x,y) {
		if(this.__bitmapData == null) {
			return false;
		}
		this.__getRenderTransform();
		var px = this.__renderTransform.__transformInverseX(x,y);
		var py = this.__renderTransform.__transformInverseY(x,y);
		if(px > 0 && py > 0 && px <= this.__bitmapData.width && py <= this.__bitmapData.height) {
			return true;
		}
		return false;
	},
	__renderCairo: function(renderer) {
	},
	__renderCairoMask: function(renderer) {
		renderer.cairo.rectangle(0,0,this.get_width(),this.get_height());
	},
	__renderCanvas: function(renderer) {
		this.__updateCacheBitmap(renderer,false);
		if(this.__bitmapData != null && this.__bitmapData.image != null) {
			this.__imageVersion = this.__bitmapData.image.version;
		}
		if(this.__cacheBitmap != null && !this.__isCacheBitmapRender) {
			(openfl__$internal_renderer_canvas_CanvasBitmap().default).render(this.__cacheBitmap,renderer);
		} else {
			(openfl__$internal_renderer_canvas_CanvasDisplayObject().default).render(this,renderer);
			(openfl__$internal_renderer_canvas_CanvasBitmap().default).render(this,renderer);
		}
		this.__renderEvent(renderer);
	},
	__renderCanvasMask: function(renderer) {
		renderer.context.rect(0,0,this.get_width(),this.get_height());
	},
	__renderDOM: function(renderer) {
		this.__updateCacheBitmap(renderer,false);
		if(this.__cacheBitmap != null && !this.__isCacheBitmapRender) {
			this.__renderDOMClear(renderer);
			this.__cacheBitmap.stage = this.stage;
			(openfl__$internal_renderer_dom_DOMBitmap().default).render(this.__cacheBitmap,renderer);
		} else {
			(openfl__$internal_renderer_dom_DOMDisplayObject().default).render(this,renderer);
			(openfl__$internal_renderer_dom_DOMBitmap().default).render(this,renderer);
		}
		this.__renderEvent(renderer);
	},
	__renderDOMClear: function(renderer) {
		(openfl__$internal_renderer_dom_DOMBitmap().default).clear(this,renderer);
	},
	__renderGL: function(renderer) {
		this.__updateCacheBitmap(renderer,false);
		if(this.__bitmapData != null && this.__bitmapData.image != null) {
			this.__imageVersion = this.__bitmapData.image.version;
		}
		if(this.__cacheBitmap != null && !this.__isCacheBitmapRender) {
			(openfl__$internal_renderer_context3D_Context3DBitmap().default).render(this.__cacheBitmap,renderer);
		} else {
			(openfl__$internal_renderer_context3D_Context3DDisplayObject().default).render(this,renderer);
			(openfl__$internal_renderer_context3D_Context3DBitmap().default).render(this,renderer);
		}
		this.__renderEvent(renderer);
	},
	__renderGLMask: function(renderer) {
		(openfl__$internal_renderer_context3D_Context3DBitmap().default).renderMask(this,renderer);
	},
	__updateCacheBitmap: function(renderer,force) {
		if(this.__bitmapData == null || this.__filters == null && renderer.__type == "opengl" && this.__cacheBitmap == null) {
			return false;
		}
		return (openfl_display_DisplayObject().default).prototype.__updateCacheBitmap.call(this,renderer,this.__bitmapData.image != null && this.__bitmapData.image.version != this.__imageVersion);
	},
	get_bitmapData: function() {
		return this.__bitmapData;
	},
	set_bitmapData: function(value) {
		this.__bitmapData = value;
		this.smoothing = false;
		this.__setRenderDirty();
		var tmp = this.__filters != null;
		this.__imageVersion = -1;
		return this.__bitmapData;
	},
	set_height: function(value) {
		if(this.__bitmapData != null) {
			this.set_scaleY(value / this.__bitmapData.height);
		} else {
			this.set_scaleY(0);
		}
		return value;
	},
	set_width: function(value) {
		if(this.__bitmapData != null) {
			this.set_scaleX(value / this.__bitmapData.width);
		} else {
			this.set_scaleX(0);
		}
		return value;
	}
});
Bitmap.prototype.__class__ = Bitmap.prototype.constructor = $hxClasses["openfl.display.Bitmap"] = Bitmap;

// Init

Object.defineProperty(Bitmap.prototype,"bitmapData",{ get : function () { return this.get_bitmapData (); }, set : function (v) { return this.set_bitmapData (v); }});

// Statics




// Export

exports.default = Bitmap;