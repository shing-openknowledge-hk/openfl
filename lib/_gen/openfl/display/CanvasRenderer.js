// Class: openfl.display.CanvasRenderer

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;
var $import = require("./../../import_stub").default;
var $extend = require("./../../extend_stub").default;
function openfl_display_DisplayObjectRenderer() {return require("./../../openfl/display/DisplayObjectRenderer");}
function Std() {return require("./../../Std");}
function openfl_geom_Matrix() {return require("./../../openfl/geom/Matrix");}

// Constructor

var CanvasRenderer = function(context) {
	this.pixelRatio = 1;
	(openfl_display_DisplayObjectRenderer().default).call(this);
	this.context = context;
	this.__tempMatrix = new (openfl_geom_Matrix().default)();
	this.__type = "canvas";
}

// Meta

CanvasRenderer.__name__ = "openfl.display.CanvasRenderer";
CanvasRenderer.__isInterface__ = false;
CanvasRenderer.__super__ = (openfl_display_DisplayObjectRenderer().default);
CanvasRenderer.prototype = $extend((openfl_display_DisplayObjectRenderer().default).prototype, {
	applySmoothing: function(context,value) {
		context.imageSmoothingEnabled = value;
	},
	setTransform: function(transform,context) {
		if(context == null) {
			context = this.context;
		} else if(this.context == context && this.__worldTransform != null) {
			this.__tempMatrix.copyFrom(transform);
			this.__tempMatrix.concat(this.__worldTransform);
			transform = this.__tempMatrix;
		}
		if(this.__roundPixels) {
			context.setTransform(transform.a,transform.b,transform.c,transform.d,(Std().default).int(transform.tx),(Std().default).int(transform.ty));
		} else {
			context.setTransform(transform.a,transform.b,transform.c,transform.d,transform.tx,transform.ty);
		}
	},
	__clear: function() {
		if(this.__stage != null) {
			var cacheBlendMode = this.__blendMode;
			this.__blendMode = null;
			this.__setBlendMode("normal");
			this.context.setTransform(1,0,0,1,0,0);
			this.context.globalAlpha = 1;
			if(!this.__stage.__transparent && this.__stage.__clearBeforeRender) {
				this.context.fillStyle = this.__stage.__colorString;
				this.context.fillRect(0,0,this.__stage.stageWidth * this.__stage.window.get_scale(),this.__stage.stageHeight * this.__stage.window.get_scale());
			} else if(this.__stage.__transparent && this.__stage.__clearBeforeRender) {
				this.context.clearRect(0,0,this.__stage.stageWidth * this.__stage.window.get_scale(),this.__stage.stageHeight * this.__stage.window.get_scale());
			}
			this.__setBlendMode(cacheBlendMode);
		}
	},
	__popMask: function() {
		this.context.restore();
	},
	__popMaskObject: function(object,handleScrollRect) {
		if(handleScrollRect == null) {
			handleScrollRect = true;
		}
		if(!object.__isCacheBitmapRender && object.__mask != null) {
			this.__popMask();
		}
		if(handleScrollRect && object.__scrollRect != null) {
			this.__popMaskRect();
		}
	},
	__popMaskRect: function() {
		this.context.restore();
	},
	__pushMask: function(mask) {
		this.context.save();
		this.setTransform(mask.__renderTransform,this.context);
		this.context.beginPath();
		mask.__renderCanvasMask(this);
		this.context.closePath();
		this.context.clip();
	},
	__pushMaskObject: function(object,handleScrollRect) {
		if(handleScrollRect == null) {
			handleScrollRect = true;
		}
		if(handleScrollRect && object.__scrollRect != null) {
			this.__pushMaskRect(object.__scrollRect,object.__renderTransform);
		}
		if(!object.__isCacheBitmapRender && object.__mask != null) {
			this.__pushMask(object.__mask);
		}
	},
	__pushMaskRect: function(rect,transform) {
		this.context.save();
		this.setTransform(transform,this.context);
		this.context.beginPath();
		this.context.rect(rect.x,rect.y,rect.width,rect.height);
		this.context.clip();
	},
	__render: function(object) {
		object.__renderCanvas(this);
	},
	__setBlendMode: function(value) {
		if(this.__overrideBlendMode != null) {
			value = this.__overrideBlendMode;
		}
		if(this.__blendMode == value) {
			return;
		}
		this.__blendMode = value;
		this.__setBlendModeContext(this.context,value);
	},
	__setBlendModeContext: function(context,value) {
		switch(value) {
		case "add":
			context.globalCompositeOperation = "lighter";
			break;
		case "darken":
			context.globalCompositeOperation = "darken";
			break;
		case "difference":
			context.globalCompositeOperation = "difference";
			break;
		case "hardlight":
			context.globalCompositeOperation = "hard-light";
			break;
		case "lighten":
			context.globalCompositeOperation = "lighten";
			break;
		case "multiply":
			context.globalCompositeOperation = "multiply";
			break;
		case "overlay":
			context.globalCompositeOperation = "overlay";
			break;
		case "screen":
			context.globalCompositeOperation = "screen";
			break;
		default:
			context.globalCompositeOperation = "source-over";
		}
	}
});
CanvasRenderer.prototype.__class__ = CanvasRenderer.prototype.constructor = $hxClasses["openfl.display.CanvasRenderer"] = CanvasRenderer;

// Init



// Statics


CanvasRenderer.__meta__ = { fields : { context : { SuppressWarnings : ["checkstyle:Dynamic"]}, applySmoothing : { SuppressWarnings : ["checkstyle:Dynamic"]}, setTransform : { SuppressWarnings : ["checkstyle:Dynamic"]}, __setBlendModeContext : { SuppressWarnings : ["checkstyle:Dynamic"]}, _ : { SuppressWarnings : ["checkstyle:Dynamic"]}}}

// Export

exports.default = CanvasRenderer;