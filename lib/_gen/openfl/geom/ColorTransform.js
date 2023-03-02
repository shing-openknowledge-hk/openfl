// Class: openfl.geom.ColorTransform

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;
var $import = require("./../../import_stub").default;
function Std() {return require("./../../Std");}
function lime_utils_ObjectPool() {return require("./../../lime/utils/ObjectPool");}

// Constructor

var ColorTransform = function(redMultiplier,greenMultiplier,blueMultiplier,alphaMultiplier,redOffset,greenOffset,blueOffset,alphaOffset) {
	if(alphaOffset == null) {
		alphaOffset = 0;
	}
	if(blueOffset == null) {
		blueOffset = 0;
	}
	if(greenOffset == null) {
		greenOffset = 0;
	}
	if(redOffset == null) {
		redOffset = 0;
	}
	if(alphaMultiplier == null) {
		alphaMultiplier = 1;
	}
	if(blueMultiplier == null) {
		blueMultiplier = 1;
	}
	if(greenMultiplier == null) {
		greenMultiplier = 1;
	}
	if(redMultiplier == null) {
		redMultiplier = 1;
	}
	this.redMultiplier = redMultiplier;
	this.greenMultiplier = greenMultiplier;
	this.blueMultiplier = blueMultiplier;
	this.alphaMultiplier = alphaMultiplier;
	this.redOffset = redOffset;
	this.greenOffset = greenOffset;
	this.blueOffset = blueOffset;
	this.alphaOffset = alphaOffset;
}

// Meta

ColorTransform.__name__ = "openfl.geom.ColorTransform";
ColorTransform.__isInterface__ = false;
ColorTransform.prototype = {
	concat: function(second) {
		this.redOffset = second.redOffset * this.redMultiplier + this.redOffset;
		this.greenOffset = second.greenOffset * this.greenMultiplier + this.greenOffset;
		this.blueOffset = second.blueOffset * this.blueMultiplier + this.blueOffset;
		this.alphaOffset = second.alphaOffset * this.alphaMultiplier + this.alphaOffset;
		this.redMultiplier *= second.redMultiplier;
		this.greenMultiplier *= second.greenMultiplier;
		this.blueMultiplier *= second.blueMultiplier;
		this.alphaMultiplier *= second.alphaMultiplier;
	},
	toString: function() {
		return "(redMultiplier=" + this.redMultiplier + ", greenMultiplier=" + this.greenMultiplier + ", blueMultiplier=" + this.blueMultiplier + ", alphaMultiplier=" + this.alphaMultiplier + ", redOffset=" + this.redOffset + ", greenOffset=" + this.greenOffset + ", blueOffset=" + this.blueOffset + ", alphaOffset=" + this.alphaOffset + ")";
	},
	__clone: function() {
		return new ColorTransform(this.redMultiplier,this.greenMultiplier,this.blueMultiplier,this.alphaMultiplier,this.redOffset,this.greenOffset,this.blueOffset,this.alphaOffset);
	},
	__copyFrom: function(ct) {
		this.redMultiplier = ct.redMultiplier;
		this.greenMultiplier = ct.greenMultiplier;
		this.blueMultiplier = ct.blueMultiplier;
		this.alphaMultiplier = ct.alphaMultiplier;
		this.redOffset = ct.redOffset;
		this.greenOffset = ct.greenOffset;
		this.blueOffset = ct.blueOffset;
		this.alphaOffset = ct.alphaOffset;
	},
	__combine: function(ct) {
		this.redMultiplier *= ct.redMultiplier;
		this.greenMultiplier *= ct.greenMultiplier;
		this.blueMultiplier *= ct.blueMultiplier;
		this.alphaMultiplier *= ct.alphaMultiplier;
		this.redOffset += ct.redOffset;
		this.greenOffset += ct.greenOffset;
		this.blueOffset += ct.blueOffset;
		this.alphaOffset += ct.alphaOffset;
	},
	__identity: function() {
		this.redMultiplier = 1;
		this.greenMultiplier = 1;
		this.blueMultiplier = 1;
		this.alphaMultiplier = 1;
		this.redOffset = 0;
		this.greenOffset = 0;
		this.blueOffset = 0;
		this.alphaOffset = 0;
	},
	__invert: function() {
		this.redMultiplier = this.redMultiplier != 0 ? 1 / this.redMultiplier : 1;
		this.greenMultiplier = this.greenMultiplier != 0 ? 1 / this.greenMultiplier : 1;
		this.blueMultiplier = this.blueMultiplier != 0 ? 1 / this.blueMultiplier : 1;
		this.alphaMultiplier = this.alphaMultiplier != 0 ? 1 / this.alphaMultiplier : 1;
		this.redOffset = -this.redOffset;
		this.greenOffset = -this.greenOffset;
		this.blueOffset = -this.blueOffset;
		this.alphaOffset = -this.alphaOffset;
	},
	__equals: function(ct,ignoreAlphaMultiplier) {
		if(ct != null && this.redMultiplier == ct.redMultiplier && this.greenMultiplier == ct.greenMultiplier && this.blueMultiplier == ct.blueMultiplier && (ignoreAlphaMultiplier || this.alphaMultiplier == ct.alphaMultiplier) && this.redOffset == ct.redOffset && this.greenOffset == ct.greenOffset && this.blueOffset == ct.blueOffset) {
			return this.alphaOffset == ct.alphaOffset;
		} else {
			return false;
		}
	},
	__isDefault: function(ignoreAlphaMultiplier) {
		if(ignoreAlphaMultiplier) {
			if(this.redMultiplier == 1 && this.greenMultiplier == 1 && this.blueMultiplier == 1 && this.redOffset == 0 && this.greenOffset == 0 && this.blueOffset == 0) {
				return this.alphaOffset == 0;
			} else {
				return false;
			}
		} else if(this.redMultiplier == 1 && this.greenMultiplier == 1 && this.blueMultiplier == 1 && this.alphaMultiplier == 1 && this.redOffset == 0 && this.greenOffset == 0 && this.blueOffset == 0) {
			return this.alphaOffset == 0;
		} else {
			return false;
		}
	},
	__setArrays: function(colorMultipliers,colorOffsets) {
		colorMultipliers[0] = this.redMultiplier;
		colorMultipliers[1] = this.greenMultiplier;
		colorMultipliers[2] = this.blueMultiplier;
		colorMultipliers[3] = this.alphaMultiplier;
		colorOffsets[0] = this.redOffset;
		colorOffsets[1] = this.greenOffset;
		colorOffsets[2] = this.blueOffset;
		colorOffsets[3] = this.alphaOffset;
	},
	get_color: function() {
		return (Std().default).int(this.redOffset) << 16 | (Std().default).int(this.greenOffset) << 8 | (Std().default).int(this.blueOffset);
	},
	set_color: function(value) {
		this.redOffset = value >> 16 & 255;
		this.greenOffset = value >> 8 & 255;
		this.blueOffset = value & 255;
		this.redMultiplier = 0;
		this.greenMultiplier = 0;
		this.blueMultiplier = 0;
		return this.get_color();
	},
	__toLimeColorMatrix: function() {
		if(ColorTransform.__limeColorMatrix == null) {
			var array = null;
			var view = null;
			var buffer = null;
			var len = null;
			var this1 = new Float32Array(20);
			ColorTransform.__limeColorMatrix = this1;
		}
		ColorTransform.__limeColorMatrix[0] = this.redMultiplier;
		ColorTransform.__limeColorMatrix[4] = this.redOffset / 255;
		ColorTransform.__limeColorMatrix[6] = this.greenMultiplier;
		ColorTransform.__limeColorMatrix[9] = this.greenOffset / 255;
		ColorTransform.__limeColorMatrix[12] = this.blueMultiplier;
		ColorTransform.__limeColorMatrix[14] = this.blueOffset / 255;
		ColorTransform.__limeColorMatrix[18] = this.alphaMultiplier;
		ColorTransform.__limeColorMatrix[19] = this.alphaOffset / 255;
		return ColorTransform.__limeColorMatrix;
	}
};
ColorTransform.prototype.__class__ = ColorTransform.prototype.constructor = $hxClasses["openfl.geom.ColorTransform"] = ColorTransform;

// Init

Object.defineProperty(ColorTransform.prototype,"color",{ get : function () { return this.get_color (); }, set : function (v) { return this.set_color (v); }});

// Statics


ColorTransform.__pool = new (lime_utils_ObjectPool().default)(function() {
	return new ColorTransform();
},function(ct) {
	ct.__identity();
})

// Export

exports.default = ColorTransform;