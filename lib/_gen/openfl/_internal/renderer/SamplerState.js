// Class: openfl._internal.renderer.SamplerState

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../hxClasses_stub").default;
var $hxEnums = require("./../../../hxEnums_stub").default;
var $import = require("./../../../import_stub").default;

// Constructor

var SamplerState = function(wrap,filter,mipfilter,lodBias,ignoreSampler,centroid,textureAlpha) {
	if(textureAlpha == null) {
		textureAlpha = false;
	}
	if(centroid == null) {
		centroid = false;
	}
	if(ignoreSampler == null) {
		ignoreSampler = false;
	}
	if(lodBias == null) {
		lodBias = 0.0;
	}
	if(mipfilter == null) {
		mipfilter = "mipnone";
	}
	if(filter == null) {
		filter = "nearest";
	}
	if(wrap == null) {
		wrap = "clamp";
	}
	this.wrap = wrap;
	this.filter = filter;
	this.mipfilter = mipfilter;
	this.lodBias = lodBias;
	this.ignoreSampler = ignoreSampler;
	this.centroid = centroid;
	this.textureAlpha = textureAlpha;
}

// Meta

SamplerState.__name__ = "openfl._internal.renderer.SamplerState";
SamplerState.__isInterface__ = false;
SamplerState.prototype = {
	clone: function() {
		var copy = new SamplerState(this.wrap,this.filter,this.mipfilter,this.lodBias,this.ignoreSampler,this.centroid,this.textureAlpha);
		copy.mipmapGenerated = this.mipmapGenerated;
		return copy;
	},
	copyFrom: function(other) {
		if(other == null || other.ignoreSampler) {
			return;
		}
		this.wrap = other.wrap;
		this.filter = other.filter;
		this.mipfilter = other.mipfilter;
		this.lodBias = other.lodBias;
		this.centroid = other.centroid;
		this.textureAlpha = other.textureAlpha;
	},
	equals: function(other) {
		if(other == null) {
			return false;
		}
		if(this.wrap == other.wrap && this.filter == other.filter && this.mipfilter == other.mipfilter && this.lodBias == other.lodBias) {
			return this.textureAlpha == other.textureAlpha;
		} else {
			return false;
		}
	}
};
SamplerState.prototype.__class__ = SamplerState.prototype.constructor = $hxClasses["openfl._internal.renderer.SamplerState"] = SamplerState;

// Init



// Statics


SamplerState.__meta__ = { obj : { SuppressWarnings : ["checkstyle:FieldDocComment"]}}

// Export

exports.default = SamplerState;