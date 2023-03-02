// Class: openfl.display.CairoRenderer

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;
var $import = require("./../../import_stub").default;
var $extend = require("./../../extend_stub").default;
function openfl_display_DisplayObjectRenderer() {return require("./../../openfl/display/DisplayObjectRenderer");}

// Constructor

var CairoRenderer = function(cairo) {
	(openfl_display_DisplayObjectRenderer().default).call(this);
}

// Meta

CairoRenderer.__name__ = "openfl.display.CairoRenderer";
CairoRenderer.__isInterface__ = false;
CairoRenderer.__super__ = (openfl_display_DisplayObjectRenderer().default);
CairoRenderer.prototype = $extend((openfl_display_DisplayObjectRenderer().default).prototype, {
	applyMatrix: function(transform,cairo) {
		if(cairo == null) {
			cairo = this.cairo;
		}
		this.__matrix.copyFrom(transform);
		if(this.cairo == cairo && this.__worldTransform != null) {
			this.__matrix.concat(this.__worldTransform);
		}
		this.__matrix3.a = this.__matrix.a;
		this.__matrix3.b = this.__matrix.b;
		this.__matrix3.c = this.__matrix.c;
		this.__matrix3.d = this.__matrix.d;
		if(this.__roundPixels) {
			this.__matrix3.tx = Math.round(this.__matrix.tx);
			this.__matrix3.ty = Math.round(this.__matrix.ty);
		} else {
			this.__matrix3.tx = this.__matrix.tx;
			this.__matrix3.ty = this.__matrix.ty;
		}
		cairo.set_matrix(this.__matrix3);
	},
	__clear: function() {
		if(this.cairo == null) {
			return;
		}
		this.cairo.identityMatrix();
		if(this.__stage != null && this.__stage.__clearBeforeRender) {
			var cacheBlendMode = this.__blendMode;
			this.__setBlendMode("normal");
			this.cairo.setSourceRGB(this.__stage.__colorSplit[0],this.__stage.__colorSplit[1],this.__stage.__colorSplit[2]);
			this.cairo.paint();
			this.__setBlendMode(cacheBlendMode);
		}
	},
	__popMask: function() {
		this.cairo.restore();
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
		this.cairo.restore();
	},
	__pushMask: function(mask) {
		this.cairo.save();
		this.applyMatrix(mask.__renderTransform,this.cairo);
		this.cairo.newPath();
		mask.__renderCairoMask(this);
		this.cairo.clip();
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
		this.cairo.save();
		this.applyMatrix(transform,this.cairo);
		this.cairo.newPath();
		this.cairo.rectangle(rect.x,rect.y,rect.width,rect.height);
		this.cairo.clip();
	},
	__render: function(object) {
		if(this.cairo == null) {
			return;
		}
		object.__renderCairo(this);
	},
	__setBlendMode: function(value) {
		if(this.__overrideBlendMode != null) {
			value = this.__overrideBlendMode;
		}
		if(this.__blendMode == value) {
			return;
		}
		this.__blendMode = value;
		this.__setBlendModeCairo(this.cairo,value);
	},
	__setBlendModeCairo: function(cairo,value) {
		switch(value) {
		case "add":
			cairo.setOperator(12);
			break;
		case "darken":
			cairo.setOperator(17);
			break;
		case "difference":
			cairo.setOperator(23);
			break;
		case "hardlight":
			cairo.setOperator(21);
			break;
		case "layer":
			cairo.setOperator(2);
			break;
		case "lighten":
			cairo.setOperator(18);
			break;
		case "multiply":
			cairo.setOperator(14);
			break;
		case "overlay":
			cairo.setOperator(16);
			break;
		case "screen":
			cairo.setOperator(15);
			break;
		default:
			cairo.setOperator(2);
		}
	}
});
CairoRenderer.prototype.__class__ = CairoRenderer.prototype.constructor = $hxClasses["openfl.display.CairoRenderer"] = CairoRenderer;

// Init



// Statics


CairoRenderer.__meta__ = { fields : { cairo : { SuppressWarnings : ["checkstyle:Dynamic"]}, __matrix3 : { SuppressWarnings : ["checkstyle:Dynamic"]}, applyMatrix : { SuppressWarnings : ["checkstyle:Dynamic"]}, __setBlendModeCairo : { SuppressWarnings : ["checkstyle:Dynamic"]}, _ : { SuppressWarnings : ["checkstyle:Dynamic"]}}}

// Export

exports.default = CairoRenderer;