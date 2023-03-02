// Class: openfl.filters.GlowFilter

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;
var $import = require("./../../import_stub").default;
var $extend = require("./../../extend_stub").default;
function openfl_filters_BitmapFilter() {return require("./../../openfl/filters/BitmapFilter");}
function lime__$internal_graphics_ImageDataUtil() {return require("./../../lime/_internal/graphics/ImageDataUtil");}
function openfl_geom_ColorTransform() {return require("./../../openfl/geom/ColorTransform");}
function openfl_filters__$GlowFilter_GlowShader() {return require("./../../openfl/filters/_GlowFilter/GlowShader");}

// Constructor

var GlowFilter = function(color,alpha,blurX,blurY,strength,quality,inner,knockout) {
	if(knockout == null) {
		knockout = false;
	}
	if(inner == null) {
		inner = false;
	}
	if(quality == null) {
		quality = 1;
	}
	if(strength == null) {
		strength = 2;
	}
	if(blurY == null) {
		blurY = 6;
	}
	if(blurX == null) {
		blurX = 6;
	}
	if(alpha == null) {
		alpha = 1;
	}
	if(color == null) {
		color = 16711680;
	}
	(openfl_filters_BitmapFilter().default).call(this);
	this.__color = color;
	this.__alpha = alpha;
	this.set_blurX(blurX);
	this.set_blurY(blurY);
	this.__strength = strength;
	this.set_quality(quality);
	this.__inner = inner;
	this.__knockout = knockout;
	this.__needSecondBitmapData = true;
	this.__preserveObject = true;
	this.__renderDirty = true;
}

// Meta

GlowFilter.__name__ = "openfl.filters.GlowFilter";
GlowFilter.__isInterface__ = false;
GlowFilter.__super__ = (openfl_filters_BitmapFilter().default);
GlowFilter.prototype = $extend((openfl_filters_BitmapFilter().default).prototype, {
	clone: function() {
		return new GlowFilter(this.__color,this.__alpha,this.__blurX,this.__blurY,this.__strength,this.__quality,this.__inner,this.__knockout);
	},
	__applyFilter: function(bitmapData,sourceBitmapData,sourceRect,destPoint) {
		var r = this.__color >> 16 & 255;
		var g = this.__color >> 8 & 255;
		var b = this.__color & 255;
		var finalImage = (lime__$internal_graphics_ImageDataUtil().default).gaussianBlur(bitmapData.image,sourceBitmapData.image,sourceRect.__toLimeRectangle(),destPoint.__toLimeVector2(),this.__blurX,this.__blurY,this.__quality,this.__strength);
		finalImage.colorTransform(finalImage.get_rect(),new (openfl_geom_ColorTransform().default)(0,0,0,this.__alpha,r,g,b,0).__toLimeColorMatrix());
		if(finalImage == bitmapData.image) {
			return bitmapData;
		}
		return sourceBitmapData;
	},
	__initShader: function(renderer,pass) {
		if(pass <= this.__horizontalPasses) {
			var scale = Math.pow(0.5,pass >> 1);
			GlowFilter.__glowShader.uRadius.value[0] = this.get_blurX() * scale;
			GlowFilter.__glowShader.uRadius.value[1] = 0;
		} else {
			var scale1 = Math.pow(0.5,pass - this.__horizontalPasses >> 1);
			GlowFilter.__glowShader.uRadius.value[0] = 0;
			GlowFilter.__glowShader.uRadius.value[1] = this.get_blurY() * scale1;
		}
		GlowFilter.__glowShader.uColor.value[0] = (this.get_color() >> 16 & 255) / 255;
		GlowFilter.__glowShader.uColor.value[1] = (this.get_color() >> 8 & 255) / 255;
		GlowFilter.__glowShader.uColor.value[2] = (this.get_color() & 255) / 255;
		GlowFilter.__glowShader.uColor.value[3] = this.get_alpha() * (this.__strength / this.__numShaderPasses);
		return GlowFilter.__glowShader;
	},
	get_alpha: function() {
		return this.__alpha;
	},
	set_alpha: function(value) {
		if(value != this.__alpha) {
			this.__renderDirty = true;
		}
		return this.__alpha = value;
	},
	get_blurX: function() {
		return this.__blurX;
	},
	set_blurX: function(value) {
		if(value != this.__blurX) {
			this.__blurX = value;
			this.__renderDirty = true;
			this.__leftExtension = value > 0 ? Math.ceil(value * 1.5) : 0;
			this.__rightExtension = this.__leftExtension;
		}
		return value;
	},
	get_blurY: function() {
		return this.__blurY;
	},
	set_blurY: function(value) {
		if(value != this.__blurY) {
			this.__blurY = value;
			this.__renderDirty = true;
			this.__topExtension = value > 0 ? Math.ceil(value * 1.5) : 0;
			this.__bottomExtension = this.__topExtension;
		}
		return value;
	},
	get_color: function() {
		return this.__color;
	},
	set_color: function(value) {
		if(value != this.__color) {
			this.__renderDirty = true;
		}
		return this.__color = value;
	},
	get_inner: function() {
		return this.__inner;
	},
	set_inner: function(value) {
		if(value != this.__inner) {
			this.__renderDirty = true;
		}
		return this.__inner = value;
	},
	get_knockout: function() {
		return this.__knockout;
	},
	set_knockout: function(value) {
		if(value != this.__knockout) {
			this.__renderDirty = true;
		}
		return this.__knockout = value;
	},
	get_quality: function() {
		return this.__quality;
	},
	set_quality: function(value) {
		this.__horizontalPasses = this.__blurX <= 0 ? 0 : Math.round(this.__blurX * (value / 4)) + 1;
		this.__verticalPasses = this.__blurY <= 0 ? 0 : Math.round(this.__blurY * (value / 4)) + 1;
		this.__numShaderPasses = this.__horizontalPasses + this.__verticalPasses;
		if(value != this.__quality) {
			this.__renderDirty = true;
		}
		return this.__quality = value;
	},
	get_strength: function() {
		return this.__strength;
	},
	set_strength: function(value) {
		if(value != this.__strength) {
			this.__renderDirty = true;
		}
		return this.__strength = value;
	}
});
GlowFilter.prototype.__class__ = GlowFilter.prototype.constructor = $hxClasses["openfl.filters.GlowFilter"] = GlowFilter;

// Init

Object.defineProperties(GlowFilter.prototype,{ alpha : { get : function () { return this.get_alpha (); }, set : function (v) { return this.set_alpha (v); }}, blurX : { get : function () { return this.get_blurX (); }, set : function (v) { return this.set_blurX (v); }}, blurY : { get : function () { return this.get_blurY (); }, set : function (v) { return this.set_blurY (v); }}, color : { get : function () { return this.get_color (); }, set : function (v) { return this.set_color (v); }}, inner : { get : function () { return this.get_inner (); }, set : function (v) { return this.set_inner (v); }}, knockout : { get : function () { return this.get_knockout (); }, set : function (v) { return this.set_knockout (v); }}, quality : { get : function () { return this.get_quality (); }, set : function (v) { return this.set_quality (v); }}, strength : { get : function () { return this.get_strength (); }, set : function (v) { return this.set_strength (v); }}});

// Statics


GlowFilter.__glowShader = new (openfl_filters__$GlowFilter_GlowShader().default)()

// Export

exports.default = GlowFilter;