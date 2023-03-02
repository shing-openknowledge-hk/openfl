// Class: openfl.filters.BlurFilter

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;
var $import = require("./../../import_stub").default;
var $extend = require("./../../extend_stub").default;
function openfl_filters_BitmapFilter() {return require("./../../openfl/filters/BitmapFilter");}
function haxe_Timer() {return require("./../../haxe/Timer");}
function lime__$internal_graphics_ImageDataUtil() {return require("./../../lime/_internal/graphics/ImageDataUtil");}
function openfl_filters__$BlurFilter_BlurShader() {return require("./../../openfl/filters/_BlurFilter/BlurShader");}

// Constructor

var BlurFilter = function(blurX,blurY,quality) {
	if(quality == null) {
		quality = 1;
	}
	if(blurY == null) {
		blurY = 4;
	}
	if(blurX == null) {
		blurX = 4;
	}
	(openfl_filters_BitmapFilter().default).call(this);
	this.set_blurX(blurX);
	this.set_blurY(blurY);
	this.set_quality(quality);
	this.__needSecondBitmapData = true;
	this.__preserveObject = false;
	this.__renderDirty = true;
}

// Meta

BlurFilter.__name__ = "openfl.filters.BlurFilter";
BlurFilter.__isInterface__ = false;
BlurFilter.__super__ = (openfl_filters_BitmapFilter().default);
BlurFilter.prototype = $extend((openfl_filters_BitmapFilter().default).prototype, {
	clone: function() {
		return new BlurFilter(this.__blurX,this.__blurY,this.__quality);
	},
	__applyFilter: function(bitmapData,sourceBitmapData,sourceRect,destPoint) {
		var time = (haxe_Timer().default).stamp();
		var finalImage = (lime__$internal_graphics_ImageDataUtil().default).gaussianBlur(bitmapData.image,sourceBitmapData.image,sourceRect.__toLimeRectangle(),destPoint.__toLimeVector2(),this.__blurX,this.__blurY,this.__quality);
		var elapsed = (haxe_Timer().default).stamp() - time;
		if(finalImage == bitmapData.image) {
			return bitmapData;
		}
		return sourceBitmapData;
	},
	__initShader: function(renderer,pass) {
		if(pass <= this.__horizontalPasses) {
			var scale = Math.pow(0.5,pass >> 1);
			BlurFilter.__blurShader.uRadius.value[0] = this.get_blurX() * scale;
			BlurFilter.__blurShader.uRadius.value[1] = 0;
		} else {
			var scale1 = Math.pow(0.5,pass - this.__horizontalPasses >> 1);
			BlurFilter.__blurShader.uRadius.value[0] = 0;
			BlurFilter.__blurShader.uRadius.value[1] = this.get_blurY() * scale1;
		}
		return BlurFilter.__blurShader;
	},
	get_blurX: function() {
		return this.__blurX;
	},
	set_blurX: function(value) {
		if(value != this.__blurX) {
			this.__blurX = value;
			this.__renderDirty = true;
			this.__leftExtension = value > 0 ? Math.ceil(value) : 0;
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
			this.__topExtension = value > 0 ? Math.ceil(value) : 0;
			this.__bottomExtension = this.__topExtension;
		}
		return value;
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
	}
});
BlurFilter.prototype.__class__ = BlurFilter.prototype.constructor = $hxClasses["openfl.filters.BlurFilter"] = BlurFilter;

// Init

Object.defineProperties(BlurFilter.prototype,{ blurX : { get : function () { return this.get_blurX (); }, set : function (v) { return this.set_blurX (v); }}, blurY : { get : function () { return this.get_blurY (); }, set : function (v) { return this.set_blurY (v); }}, quality : { get : function () { return this.get_quality (); }, set : function (v) { return this.set_quality (v); }}});

// Statics


BlurFilter.__blurShader = new (openfl_filters__$BlurFilter_BlurShader().default)()

// Export

exports.default = BlurFilter;