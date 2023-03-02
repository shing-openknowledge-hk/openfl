// Class: lime.math._ColorMatrix.ColorMatrix_Impl_

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../hxClasses_stub").default;
var $hxEnums = require("./../../../hxEnums_stub").default;
var $import = require("./../../../import_stub").default;
function Std() {return require("./../../../Std");}

// Constructor

var ColorMatrix_Impl_ = function(){}

// Meta

ColorMatrix_Impl_.__name__ = "lime.math._ColorMatrix.ColorMatrix_Impl_";
ColorMatrix_Impl_.__isInterface__ = false;
ColorMatrix_Impl_.prototype = {
	
};
ColorMatrix_Impl_.prototype.__class__ = ColorMatrix_Impl_.prototype.constructor = $hxClasses["lime.math._ColorMatrix.ColorMatrix_Impl_"] = ColorMatrix_Impl_;

// Init



// Statics

ColorMatrix_Impl_._new = function(data) {
	var this1;
	if(data != null && data.length == 20) {
		this1 = data;
	} else {
		var elements = null;
		var array = ColorMatrix_Impl_.__identity;
		var view = null;
		var buffer = null;
		var len = null;
		var this2;
		if(elements != null) {
			this2 = new Float32Array(elements);
		} else if(array != null) {
			this2 = new Float32Array(array);
		} else if(view != null) {
			this2 = new Float32Array(view);
		} else if(buffer != null) {
			if(len == null) {
				this2 = new Float32Array(buffer,0);
			} else {
				this2 = new Float32Array(buffer,0,len);
			}
		} else {
			this2 = null;
		}
		this1 = this2;
	}
	return this1;
}
ColorMatrix_Impl_.clone = function(this1) {
	var elements = null;
	var array = null;
	var buffer = null;
	var len = null;
	var this2;
	if(elements != null) {
		this2 = new Float32Array(elements);
	} else if(array != null) {
		this2 = new Float32Array(array);
	} else if(this1 != null) {
		this2 = new Float32Array(this1);
	} else if(buffer != null) {
		if(len == null) {
			this2 = new Float32Array(buffer,0);
		} else {
			this2 = new Float32Array(buffer,0,len);
		}
	} else {
		this2 = null;
	}
	return ColorMatrix_Impl_._new(this2);
}
ColorMatrix_Impl_.concat = function(this1,second) {
	this1[0] += second[0];
	this1[6] += second[6];
	this1[12] += second[12];
	this1[18] += second[18];
}
ColorMatrix_Impl_.copyFrom = function(this1,other) {
	this1.set(other);
}
ColorMatrix_Impl_.identity = function(this1) {
	this1[0] = 1;
	this1[1] = 0;
	this1[2] = 0;
	this1[3] = 0;
	this1[4] = 0;
	this1[5] = 0;
	this1[6] = 1;
	this1[7] = 0;
	this1[8] = 0;
	this1[9] = 0;
	this1[10] = 0;
	this1[11] = 0;
	this1[12] = 1;
	this1[13] = 0;
	this1[14] = 0;
	this1[15] = 0;
	this1[16] = 0;
	this1[17] = 0;
	this1[18] = 1;
	this1[19] = 0;
}
ColorMatrix_Impl_.getAlphaTable = function(this1) {
	if(ColorMatrix_Impl_.__alphaTable == null) {
		var array = null;
		var view = null;
		var buffer = null;
		var len = null;
		var this2 = new Uint8Array(256);
		ColorMatrix_Impl_.__alphaTable = this2;
	}
	var value;
	ColorMatrix_Impl_.__alphaTable[0] = 0;
	var _g = 1;
	while(_g < 256) {
		var i = _g++;
		value = Math.floor(i * this1[18] + this1[19] * 255);
		if(value > 255) {
			value = 255;
		}
		if(value < 0) {
			value = 0;
		}
		ColorMatrix_Impl_.__alphaTable[i] = value;
	}
	return ColorMatrix_Impl_.__alphaTable;
}
ColorMatrix_Impl_.getBlueTable = function(this1) {
	if(ColorMatrix_Impl_.__blueTable == null) {
		var array = null;
		var view = null;
		var buffer = null;
		var len = null;
		var this2 = new Uint8Array(256);
		ColorMatrix_Impl_.__blueTable = this2;
	}
	var value;
	var _g = 0;
	while(_g < 256) {
		var i = _g++;
		value = Math.floor(i * this1[12] + this1[14] * 255);
		if(value > 255) {
			value = 255;
		}
		if(value < 0) {
			value = 0;
		}
		ColorMatrix_Impl_.__blueTable[i] = value;
	}
	return ColorMatrix_Impl_.__blueTable;
}
ColorMatrix_Impl_.getGreenTable = function(this1) {
	if(ColorMatrix_Impl_.__greenTable == null) {
		var array = null;
		var view = null;
		var buffer = null;
		var len = null;
		var this2 = new Uint8Array(256);
		ColorMatrix_Impl_.__greenTable = this2;
	}
	var value;
	var _g = 0;
	while(_g < 256) {
		var i = _g++;
		value = Math.floor(i * this1[6] + this1[9] * 255);
		if(value > 255) {
			value = 255;
		}
		if(value < 0) {
			value = 0;
		}
		ColorMatrix_Impl_.__greenTable[i] = value;
	}
	return ColorMatrix_Impl_.__greenTable;
}
ColorMatrix_Impl_.getRedTable = function(this1) {
	if(ColorMatrix_Impl_.__redTable == null) {
		var array = null;
		var view = null;
		var buffer = null;
		var len = null;
		var this2 = new Uint8Array(256);
		ColorMatrix_Impl_.__redTable = this2;
	}
	var value;
	var _g = 0;
	while(_g < 256) {
		var i = _g++;
		value = Math.floor(i * this1[0] + this1[4] * 255);
		if(value > 255) {
			value = 255;
		}
		if(value < 0) {
			value = 0;
		}
		ColorMatrix_Impl_.__redTable[i] = value;
	}
	return ColorMatrix_Impl_.__redTable;
}
ColorMatrix_Impl_.__toFlashColorTransform = function(this1) {
	return null;
}
ColorMatrix_Impl_.get_alphaMultiplier = function(this1) {
	return this1[18];
}
ColorMatrix_Impl_.set_alphaMultiplier = function(this1,value) {
	return this1[18] = value;
}
ColorMatrix_Impl_.get_alphaOffset = function(this1) {
	return this1[19] * 255;
}
ColorMatrix_Impl_.set_alphaOffset = function(this1,value) {
	return this1[19] = value / 255;
}
ColorMatrix_Impl_.get_blueMultiplier = function(this1) {
	return this1[12];
}
ColorMatrix_Impl_.set_blueMultiplier = function(this1,value) {
	return this1[12] = value;
}
ColorMatrix_Impl_.get_blueOffset = function(this1) {
	return this1[14] * 255;
}
ColorMatrix_Impl_.set_blueOffset = function(this1,value) {
	return this1[14] = value / 255;
}
ColorMatrix_Impl_.get_color = function(this1) {
	return (Std().default).int(this1[4] * 255) << 16 | (Std().default).int(this1[9] * 255) << 8 | (Std().default).int(this1[14] * 255);
}
ColorMatrix_Impl_.set_color = function(this1,value) {
	this1[4] = (value >> 16 & 255) / 255;
	this1[9] = (value >> 8 & 255) / 255;
	this1[14] = (value & 255) / 255;
	this1[0] = 0;
	this1[6] = 0;
	this1[12] = 0;
	return ColorMatrix_Impl_.get_color(this1);
}
ColorMatrix_Impl_.get_greenMultiplier = function(this1) {
	return this1[6];
}
ColorMatrix_Impl_.set_greenMultiplier = function(this1,value) {
	return this1[6] = value;
}
ColorMatrix_Impl_.get_greenOffset = function(this1) {
	return this1[9] * 255;
}
ColorMatrix_Impl_.set_greenOffset = function(this1,value) {
	return this1[9] = value / 255;
}
ColorMatrix_Impl_.get_redMultiplier = function(this1) {
	return this1[0];
}
ColorMatrix_Impl_.set_redMultiplier = function(this1,value) {
	return this1[0] = value;
}
ColorMatrix_Impl_.get_redOffset = function(this1) {
	return this1[4] * 255;
}
ColorMatrix_Impl_.set_redOffset = function(this1,value) {
	return this1[4] = value / 255;
}
ColorMatrix_Impl_.get = function(this1,index) {
	return this1[index];
}
ColorMatrix_Impl_.set = function(this1,index,value) {
	return this1[index] = value;
}
ColorMatrix_Impl_.__identity = [1.0,0.0,0.0,0.0,0.0,0.0,1.0,0.0,0.0,0.0,0.0,0.0,1.0,0.0,0.0,0.0,0.0,0.0,1.0,0.0]

// Export

exports.default = ColorMatrix_Impl_;