// Class: openfl.filters.DropShadowFilter

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;
var $import = require("./../../import_stub").default;
var $extend = require("./../../extend_stub").default;
function openfl_filters_BitmapFilter() {return require("./../../openfl/filters/BitmapFilter");}
function openfl_geom_Point() {return require("./../../openfl/geom/Point");}
function lime__$internal_graphics_ImageDataUtil() {return require("./../../lime/_internal/graphics/ImageDataUtil");}
function openfl_geom_ColorTransform() {return require("./../../openfl/geom/ColorTransform");}
function Std() {return require("./../../Std");}

// Constructor

var DropShadowFilter = function(distance,angle,color,alpha,blurX,blurY,strength,quality,inner,knockout,hideObject) {
	if(hideObject == null) {
		hideObject = false;
	}
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
		strength = 1;
	}
	if(blurY == null) {
		blurY = 4;
	}
	if(blurX == null) {
		blurX = 4;
	}
	if(alpha == null) {
		alpha = 1;
	}
	if(color == null) {
		color = 0;
	}
	if(angle == null) {
		angle = 45;
	}
	if(distance == null) {
		distance = 4;
	}
	(openfl_filters_BitmapFilter().default).call(this);
	this.__offsetX = 0;
	this.__offsetY = 0;
	this.__distance = distance;
	this.__angle = angle;
	this.__color = color;
	this.__alpha = alpha;
	this.__blurX = blurX;
	this.__blurY = blurY;
	this.__strength = strength;
	this.__quality = quality;
	this.__inner = inner;
	this.__knockout = knockout;
	this.__hideObject = hideObject;
	this.__updateSize();
	this.__needSecondBitmapData = true;
	this.__preserveObject = !this.__hideObject;
	this.__renderDirty = true;
}

// Meta

DropShadowFilter.__name__ = "openfl.filters.DropShadowFilter";
DropShadowFilter.__isInterface__ = false;
DropShadowFilter.__super__ = (openfl_filters_BitmapFilter().default);
DropShadowFilter.prototype = $extend((openfl_filters_BitmapFilter().default).prototype, {
	clone: function() {
		return new DropShadowFilter(this.__distance,this.__angle,this.__color,this.__alpha,this.__blurX,this.__blurY,this.__strength,this.__quality,this.__inner,this.__knockout,this.__hideObject);
	},
	__applyFilter: function(bitmapData,sourceBitmapData,sourceRect,destPoint) {
		var r = this.__color >> 16 & 255;
		var g = this.__color >> 8 & 255;
		var b = this.__color & 255;
		var point = new (openfl_geom_Point().default)(destPoint.x + this.__offsetX,destPoint.y + this.__offsetY);
		var finalImage = (lime__$internal_graphics_ImageDataUtil().default).gaussianBlur(bitmapData.image,sourceBitmapData.image,sourceRect.__toLimeRectangle(),point.__toLimeVector2(),this.__blurX,this.__blurY,this.__quality,this.__strength);
		finalImage.colorTransform(finalImage.get_rect(),new (openfl_geom_ColorTransform().default)(0,0,0,this.__alpha,r,g,b,0).__toLimeColorMatrix());
		if(finalImage == bitmapData.image) {
			return bitmapData;
		}
		return sourceBitmapData;
	},
	__updateSize: function() {
		this.__offsetX = (Std().default).int(this.__distance * Math.cos(this.__angle * Math.PI / 180));
		this.__offsetY = (Std().default).int(this.__distance * Math.sin(this.__angle * Math.PI / 180));
		this.__topExtension = Math.ceil((this.__offsetY < 0 ? -this.__offsetY : 0) + this.__blurY);
		this.__bottomExtension = Math.ceil((this.__offsetY > 0 ? this.__offsetY : 0) + this.__blurY);
		this.__leftExtension = Math.ceil((this.__offsetX < 0 ? -this.__offsetX : 0) + this.__blurX);
		this.__rightExtension = Math.ceil((this.__offsetX > 0 ? this.__offsetX : 0) + this.__blurX);
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
	get_angle: function() {
		return this.__angle;
	},
	set_angle: function(value) {
		if(value != this.__angle) {
			this.__angle = value;
			this.__renderDirty = true;
			this.__updateSize();
		}
		return value;
	},
	get_blurX: function() {
		return this.__blurX;
	},
	set_blurX: function(value) {
		if(value != this.__blurX) {
			this.__blurX = value;
			this.__renderDirty = true;
			this.__updateSize();
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
			this.__updateSize();
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
	get_distance: function() {
		return this.__distance;
	},
	set_distance: function(value) {
		if(value != this.__distance) {
			this.__distance = value;
			this.__renderDirty = true;
			this.__updateSize();
		}
		return value;
	},
	get_hideObject: function() {
		return this.__hideObject;
	},
	set_hideObject: function(value) {
		if(value != this.__hideObject) {
			this.__renderDirty = true;
			this.__preserveObject = !value;
		}
		return this.__hideObject = value;
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
DropShadowFilter.prototype.__class__ = DropShadowFilter.prototype.constructor = $hxClasses["openfl.filters.DropShadowFilter"] = DropShadowFilter;

// Init

Object.defineProperties(DropShadowFilter.prototype,{ alpha : { get : function () { return this.get_alpha (); }, set : function (v) { return this.set_alpha (v); }}, angle : { get : function () { return this.get_angle (); }, set : function (v) { return this.set_angle (v); }}, blurX : { get : function () { return this.get_blurX (); }, set : function (v) { return this.set_blurX (v); }}, blurY : { get : function () { return this.get_blurY (); }, set : function (v) { return this.set_blurY (v); }}, color : { get : function () { return this.get_color (); }, set : function (v) { return this.set_color (v); }}, distance : { get : function () { return this.get_distance (); }, set : function (v) { return this.set_distance (v); }}, hideObject : { get : function () { return this.get_hideObject (); }, set : function (v) { return this.set_hideObject (v); }}, inner : { get : function () { return this.get_inner (); }, set : function (v) { return this.set_inner (v); }}, knockout : { get : function () { return this.get_knockout (); }, set : function (v) { return this.set_knockout (v); }}, quality : { get : function () { return this.get_quality (); }, set : function (v) { return this.set_quality (v); }}, strength : { get : function () { return this.get_strength (); }, set : function (v) { return this.set_strength (v); }}});

// Statics




// Export

exports.default = DropShadowFilter;