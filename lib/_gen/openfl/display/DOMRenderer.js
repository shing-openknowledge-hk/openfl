// Class: openfl.display.DOMRenderer

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;
var $import = require("./../../import_stub").default;
var $extend = require("./../../extend_stub").default;
function openfl_display_DisplayObjectRenderer() {return require("./../../openfl/display/DisplayObjectRenderer");}
function openfl_geom_Rectangle() {return require("./../../openfl/geom/Rectangle");}
function openfl_geom_Matrix() {return require("./../../openfl/geom/Matrix");}
function openfl_display_DisplayObject() {return require("./../../openfl/display/DisplayObject");}
function openfl_display_CanvasRenderer() {return require("./../../openfl/display/CanvasRenderer");}

// Constructor

var DOMRenderer = function(element) {
	this.pixelRatio = 1;
	(openfl_display_DisplayObjectRenderer().default).call(this);
	this.element = element;
	(openfl_display_DisplayObject().default).__supportDOM = true;
	var prefix = (function () {
		  var styles = window.getComputedStyle(document.documentElement, ''),
			pre = (Array.prototype.slice
			  .call(styles)
			  .join('')
			  .match(/-(moz|webkit|ms)-/) || (styles.OLink === '' && ['', 'o'])
			)[1],
			dom = ('WebKit|Moz|MS|O').match(new RegExp('(' + pre + ')', 'i'))[1];
		  return {
			dom: dom,
			lowercase: pre,
			css: '-' + pre + '-',
			js: pre[0].toUpperCase() + pre.substr(1)
		  };
		})();
	this.__vendorPrefix = prefix.lowercase;
	this.__transformProperty = prefix.lowercase == "webkit" ? "-webkit-transform" : "transform";
	this.__transformOriginProperty = prefix.lowercase == "webkit" ? "-webkit-transform-origin" : "transform-origin";
	this.__clipRects = [];
	this.__numClipRects = 0;
	this.__z = 0;
	this.__type = "dom";
	this.__canvasRenderer = new (openfl_display_CanvasRenderer().default)(null);
	this.__canvasRenderer.__isDOM = true;
}

// Meta

DOMRenderer.__name__ = "openfl.display.DOMRenderer";
DOMRenderer.__isInterface__ = false;
DOMRenderer.__super__ = (openfl_display_DisplayObjectRenderer().default);
DOMRenderer.prototype = $extend((openfl_display_DisplayObjectRenderer().default).prototype, {
	applyStyle: function(parent,childElement) {
		if(parent != null && childElement != null) {
			if(parent.__style == null || childElement.parentElement != this.element) {
				this.__initializeElement(parent,childElement);
			}
			parent.__style = childElement.style;
			this.__updateClip(parent);
			this.__applyStyle(parent,true,true,true);
		}
	},
	clearStyle: function(childElement) {
		if(childElement != null && childElement.parentElement == this.element) {
			this.element.removeChild(childElement);
		}
	},
	__applyStyle: function(displayObject,setTransform,setAlpha,setClip) {
		var style = displayObject.__style;
		if(setTransform && displayObject.__renderTransformChanged) {
			style.setProperty(this.__transformProperty,displayObject.__renderTransform.to3DString(this.__roundPixels),null);
		}
		if(displayObject.__worldZ != ++this.__z) {
			displayObject.__worldZ = this.__z;
			style.setProperty("z-index",displayObject.__worldZ == null ? "null" : "" + displayObject.__worldZ,null);
		}
		if(setAlpha && displayObject.__worldAlphaChanged) {
			if(displayObject.__worldAlpha < 1) {
				style.setProperty("opacity",displayObject.__worldAlpha == null ? "null" : "" + displayObject.__worldAlpha,null);
			} else {
				style.removeProperty("opacity");
			}
		}
		if(setClip && displayObject.__worldClipChanged) {
			if(displayObject.__worldClip == null) {
				style.removeProperty("clip");
			} else {
				var clip = displayObject.__worldClip;
				style.setProperty("clip","rect(" + clip.y + "px, " + clip.get_right() + "px, " + clip.get_bottom() + "px, " + clip.x + "px)",null);
			}
		}
	},
	__initializeElement: function(displayObject,element) {
		var style = displayObject.__style = element.style;
		style.setProperty("position","absolute",null);
		style.setProperty("top","0",null);
		style.setProperty("left","0",null);
		style.setProperty(this.__transformOriginProperty,"0 0 0",null);
		this.element.appendChild(element);
		displayObject.__worldAlphaChanged = true;
		displayObject.__renderTransformChanged = true;
		displayObject.__worldVisibleChanged = true;
		displayObject.__worldClipChanged = true;
		displayObject.__worldClip = null;
		displayObject.__worldZ = -1;
	},
	__popMask: function() {
		this.__popMaskRect();
	},
	__popMaskObject: function(object,handleScrollRect) {
		if(handleScrollRect == null) {
			handleScrollRect = true;
		}
		if(object.__mask != null) {
			this.__popMask();
		}
		if(handleScrollRect && object.__scrollRect != null) {
			this.__popMaskRect();
		}
	},
	__popMaskRect: function() {
		if(this.__numClipRects > 0) {
			this.__numClipRects--;
			if(this.__numClipRects > 0) {
				this.__currentClipRect = this.__clipRects[this.__numClipRects - 1];
			} else {
				this.__currentClipRect = null;
			}
		}
	},
	__pushMask: function(mask) {
		this.__pushMaskRect(mask.getBounds(mask),mask.__renderTransform);
	},
	__pushMaskObject: function(object,handleScrollRect) {
		if(handleScrollRect == null) {
			handleScrollRect = true;
		}
		if(handleScrollRect && object.__scrollRect != null) {
			this.__pushMaskRect(object.__scrollRect,object.__renderTransform);
		}
		if(object.__mask != null) {
			this.__pushMask(object.__mask);
		}
	},
	__pushMaskRect: function(rect,transform) {
		if(this.__numClipRects == this.__clipRects.length) {
			this.__clipRects[this.__numClipRects] = new (openfl_geom_Rectangle().default)();
		}
		var clipRect = this.__clipRects[this.__numClipRects];
		rect.__transform(clipRect,transform);
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
		this.__currentClipRect = clipRect;
		this.__numClipRects++;
	},
	__render: function(object) {
		if(!this.__stage.__transparent) {
			this.element.style.background = this.__stage.__colorString;
		} else {
			this.element.style.background = "none";
		}
		this.__z = 1;
		object.__renderDOM(this);
	},
	__setBlendMode: function(value) {
		if(this.__overrideBlendMode != null) {
			value = this.__overrideBlendMode;
		}
		if(this.__blendMode == value) {
			return;
		}
		this.__blendMode = value;
	},
	__updateClip: function(displayObject) {
		if(this.__currentClipRect == null) {
			displayObject.__worldClipChanged = displayObject.__worldClip != null;
			displayObject.__worldClip = null;
		} else {
			if(displayObject.__worldClip == null) {
				displayObject.__worldClip = new (openfl_geom_Rectangle().default)();
			}
			var clip = (openfl_geom_Rectangle().default).__pool.get();
			var matrix = (openfl_geom_Matrix().default).__pool.get();
			matrix.copyFrom(displayObject.__renderTransform);
			matrix.invert();
			this.__currentClipRect.__transform(clip,matrix);
			if(clip.equals(displayObject.__worldClip)) {
				displayObject.__worldClipChanged = false;
			} else {
				displayObject.__worldClip.copyFrom(clip);
				displayObject.__worldClipChanged = true;
			}
			(openfl_geom_Rectangle().default).__pool.release(clip);
			(openfl_geom_Matrix().default).__pool.release(matrix);
		}
	}
});
DOMRenderer.prototype.__class__ = DOMRenderer.prototype.constructor = $hxClasses["openfl.display.DOMRenderer"] = DOMRenderer;

// Init



// Statics


DOMRenderer.__meta__ = { fields : { element : { SuppressWarnings : ["checkstyle:Dynamic"]}, applyStyle : { SuppressWarnings : ["checkstyle:Dynamic"]}, clearStyle : { SuppressWarnings : ["checkstyle:Dynamic"]}, _ : { SuppressWarnings : ["checkstyle:Dynamic"]}}}

// Export

exports.default = DOMRenderer;