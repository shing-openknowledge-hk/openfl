// Class: openfl._internal.utils.AbstractNoise

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../hxClasses_stub").default;
var $hxEnums = require("./../../../hxEnums_stub").default;
var $import = require("./../../../import_stub").default;
function Std() {return require("./../../../Std");}

// Constructor

var AbstractNoise = function(seed,octaves,channels,grayScale,falloff,stitch,stitch_threshold) {
	if(stitch_threshold == null) {
		stitch_threshold = 0.05;
	}
	if(stitch == null) {
		stitch = false;
	}
	this.stitch = stitch;
	this.stitch_threshold = stitch_threshold;
	this.octaves = octaves;
	this.channels = channels;
	this.grayscale = grayScale;
	this.calculateOctaves(falloff);
}

// Meta

AbstractNoise.__name__ = "openfl._internal.utils.AbstractNoise";
AbstractNoise.__isInterface__ = false;
AbstractNoise.prototype = {
	fill: function(bitmap,_scale_x,_scale_y,_scale_z) {
	},
	stitching: function(bitmap,color,px,py,stitch_w,stitch_h,width,height) {
		var r = color >> 16 & 255;
		var g = color >> 8 & 255;
		var b = color & 255;
		if(width - stitch_w < px) {
			var dest = bitmap.getPixel32(width - px,py);
			var dest_r = dest >> 16 & 255;
			var dest_g = dest >> 8 & 255;
			var dest_b = dest & 255;
			var u = (width - px) / stitch_w;
			var uu = u * u;
			r = this.mixI(dest_r,r,u);
			g = this.mixI(dest_g,g,u);
			b = this.mixI(dest_b,b,u);
		}
		if(height - stitch_h < py) {
			var dest1 = bitmap.getPixel32(px,height - py);
			var dest_r1 = dest1 >> 16 & 255;
			var dest_g1 = dest1 >> 8 & 255;
			var dest_b1 = dest1 & 255;
			var u1 = (height - py) / stitch_h;
			var uu1 = u1 * u1;
			r = this.mixI(dest_r1,r,u1);
			g = this.mixI(dest_g1,g,u1);
			b = this.mixI(dest_b1,b,u1);
		}
		return -16777216 | r << 16 | g << 8 | b;
	},
	color: function(r_noise,g_noise,b_noise) {
		var color_r = 0;
		var color_g = 0;
		var color_b = 0;
		if(null != r_noise) {
			color_r = this.noiseToColor(r_noise);
		}
		if(null != g_noise) {
			color_g = this.noiseToColor(g_noise);
		}
		if(null != b_noise) {
			color_b = this.noiseToColor(b_noise);
		}
		return -16777216 | color_r << 16 | color_g << 8 | color_b;
	},
	noiseToColor: function(noise) {
		return (Std().default).int((noise * this.persistence_max + 1.0) * 128);
	},
	fade: function(t) {
		return t * t * t * (t * (t * 6.0 - 15.0) + 10.0);
	},
	mixI: function(x,y,t) {
		return (Std().default).int((1.0 - t) * x + t * y);
	},
	mix: function(x,y,t) {
		return (1.0 - t) * x + t * y;
	},
	fastfloor: function(x) {
		if(x > 0) {
			return (Std().default).int(x);
		} else {
			return (Std().default).int(x - 1);
		}
	},
	dot2d: function(grad,x,y) {
		return grad[0] * x + grad[1] * y;
	},
	dot: function(grad,x,y,z) {
		return grad[0] * x + grad[1] * y + grad[2] * z;
	},
	calculateOctaves: function(fPersistence) {
		var fFreq;
		var fPers;
		this.octaves_frequencies = [];
		this.octaves_persistences = [];
		this.persistence_max = 0;
		var _g = 0;
		var _g1 = this.octaves;
		while(_g < _g1) {
			var i = _g++;
			fFreq = Math.pow(2.0,i);
			fPers = Math.pow(fPersistence,i);
			this.persistence_max += fPers;
			this.octaves_frequencies.push(fFreq);
			this.octaves_persistences.push(fPers);
		}
		this.persistence_max = 1.0 / this.persistence_max;
	}
};
AbstractNoise.prototype.__class__ = AbstractNoise.prototype.constructor = $hxClasses["openfl._internal.utils.AbstractNoise"] = AbstractNoise;

// Init



// Statics


AbstractNoise.__meta__ = { obj : { SuppressWarnings : ["checkstyle:FieldDocComment"]}}

// Export

exports.default = AbstractNoise;