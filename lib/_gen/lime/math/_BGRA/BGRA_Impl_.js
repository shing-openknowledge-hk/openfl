// Class: lime.math._BGRA.BGRA_Impl_

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../hxClasses_stub").default;
var $hxEnums = require("./../../../hxEnums_stub").default;
var $import = require("./../../../import_stub").default;
function lime_math__$RGBA_RGBA_$Impl_$() {return require("./../../../lime/math/_RGBA/RGBA_Impl_");}

// Constructor

var BGRA_Impl_ = function(){}

// Meta

BGRA_Impl_.__name__ = "lime.math._BGRA.BGRA_Impl_";
BGRA_Impl_.__isInterface__ = false;
BGRA_Impl_.prototype = {
	
};
BGRA_Impl_.prototype.__class__ = BGRA_Impl_.prototype.constructor = $hxClasses["lime.math._BGRA.BGRA_Impl_"] = BGRA_Impl_;

// Init



// Statics

BGRA_Impl_._new = function(bgra) {
	if(bgra == null) {
		bgra = 0;
	}
	var this1 = bgra;
	return this1;
}
BGRA_Impl_.create = function(b,g,r,a) {
	var this1 = 0;
	var bgra = this1;
	bgra = (b & 255) << 24 | (g & 255) << 16 | (r & 255) << 8 | a & 255;
	return bgra;
}
BGRA_Impl_.multiplyAlpha = function(this1) {
	if((this1 & 255) == 0) {
		this1 = 0;
	} else if((this1 & 255) != 255) {
		BGRA_Impl_.a16 = (lime_math__$RGBA_RGBA_$Impl_$().default).__alpha16[this1 & 255];
		this1 = ((this1 >>> 24 & 255) * BGRA_Impl_.a16 >> 16 & 255) << 24 | ((this1 >>> 16 & 255) * BGRA_Impl_.a16 >> 16 & 255) << 16 | ((this1 >>> 8 & 255) * BGRA_Impl_.a16 >> 16 & 255) << 8 | this1 & 255 & 255;
	}
}
BGRA_Impl_.readUInt8 = function(this1,data,offset,format,premultiplied) {
	if(premultiplied == null) {
		premultiplied = false;
	}
	if(format == null) {
		format = 0;
	}
	switch(format) {
	case 0:
		this1 = (data[offset + 2] & 255) << 24 | (data[offset + 1] & 255) << 16 | (data[offset] & 255) << 8 | data[offset + 3] & 255;
		break;
	case 1:
		this1 = (data[offset + 3] & 255) << 24 | (data[offset + 2] & 255) << 16 | (data[offset + 1] & 255) << 8 | data[offset] & 255;
		break;
	case 2:
		this1 = (data[offset] & 255) << 24 | (data[offset + 1] & 255) << 16 | (data[offset + 2] & 255) << 8 | data[offset + 3] & 255;
		break;
	}
	if(premultiplied) {
		if((this1 & 255) != 0 && (this1 & 255) != 255) {
			BGRA_Impl_.unmult = 255.0 / (this1 & 255);
			this1 = ((lime_math__$RGBA_RGBA_$Impl_$().default).__clamp[Math.floor((this1 >>> 24 & 255) * BGRA_Impl_.unmult)] & 255) << 24 | ((lime_math__$RGBA_RGBA_$Impl_$().default).__clamp[Math.floor((this1 >>> 16 & 255) * BGRA_Impl_.unmult)] & 255) << 16 | ((lime_math__$RGBA_RGBA_$Impl_$().default).__clamp[Math.floor((this1 >>> 8 & 255) * BGRA_Impl_.unmult)] & 255) << 8 | this1 & 255 & 255;
		}
	}
}
BGRA_Impl_.set = function(this1,b,g,r,a) {
	this1 = (b & 255) << 24 | (g & 255) << 16 | (r & 255) << 8 | a & 255;
}
BGRA_Impl_.unmultiplyAlpha = function(this1) {
	if((this1 & 255) != 0 && (this1 & 255) != 255) {
		BGRA_Impl_.unmult = 255.0 / (this1 & 255);
		this1 = ((lime_math__$RGBA_RGBA_$Impl_$().default).__clamp[Math.floor((this1 >>> 24 & 255) * BGRA_Impl_.unmult)] & 255) << 24 | ((lime_math__$RGBA_RGBA_$Impl_$().default).__clamp[Math.floor((this1 >>> 16 & 255) * BGRA_Impl_.unmult)] & 255) << 16 | ((lime_math__$RGBA_RGBA_$Impl_$().default).__clamp[Math.floor((this1 >>> 8 & 255) * BGRA_Impl_.unmult)] & 255) << 8 | this1 & 255 & 255;
	}
}
BGRA_Impl_.writeUInt8 = function(this1,data,offset,format,premultiplied) {
	if(premultiplied == null) {
		premultiplied = false;
	}
	if(format == null) {
		format = 0;
	}
	if(premultiplied) {
		if((this1 & 255) == 0) {
			this1 = 0;
		} else if((this1 & 255) != 255) {
			BGRA_Impl_.a16 = (lime_math__$RGBA_RGBA_$Impl_$().default).__alpha16[this1 & 255];
			this1 = ((this1 >>> 24 & 255) * BGRA_Impl_.a16 >> 16 & 255) << 24 | ((this1 >>> 16 & 255) * BGRA_Impl_.a16 >> 16 & 255) << 16 | ((this1 >>> 8 & 255) * BGRA_Impl_.a16 >> 16 & 255) << 8 | this1 & 255 & 255;
		}
	}
	switch(format) {
	case 0:
		data[offset] = this1 >>> 8 & 255;
		data[offset + 1] = this1 >>> 16 & 255;
		data[offset + 2] = this1 >>> 24 & 255;
		data[offset + 3] = this1 & 255;
		break;
	case 1:
		data[offset] = this1 & 255;
		data[offset + 1] = this1 >>> 8 & 255;
		data[offset + 2] = this1 >>> 16 & 255;
		data[offset + 3] = this1 >>> 24 & 255;
		break;
	case 2:
		data[offset] = this1 >>> 24 & 255;
		data[offset + 1] = this1 >>> 16 & 255;
		data[offset + 2] = this1 >>> 8 & 255;
		data[offset + 3] = this1 & 255;
		break;
	}
}
BGRA_Impl_.__fromARGB = function(argb) {
	var this1 = 0;
	var bgra = this1;
	bgra = (argb & 255 & 255) << 24 | (argb >>> 8 & 255 & 255) << 16 | (argb >>> 16 & 255 & 255) << 8 | argb >>> 24 & 255 & 255;
	return bgra;
}
BGRA_Impl_.__fromRGBA = function(rgba) {
	var this1 = 0;
	var bgra = this1;
	bgra = (rgba >>> 8 & 255 & 255) << 24 | (rgba >>> 16 & 255 & 255) << 16 | (rgba >>> 24 & 255 & 255) << 8 | rgba & 255 & 255;
	return bgra;
}
BGRA_Impl_.get_a = function(this1) {
	return this1 & 255;
}
BGRA_Impl_.set_a = function(this1,value) {
	this1 = (this1 >>> 24 & 255 & 255) << 24 | (this1 >>> 16 & 255 & 255) << 16 | (this1 >>> 8 & 255 & 255) << 8 | value & 255;
	return value;
}
BGRA_Impl_.get_b = function(this1) {
	return this1 >>> 24 & 255;
}
BGRA_Impl_.set_b = function(this1,value) {
	this1 = (value & 255) << 24 | (this1 >>> 16 & 255 & 255) << 16 | (this1 >>> 8 & 255 & 255) << 8 | this1 & 255 & 255;
	return value;
}
BGRA_Impl_.get_g = function(this1) {
	return this1 >>> 16 & 255;
}
BGRA_Impl_.set_g = function(this1,value) {
	this1 = (this1 >>> 24 & 255 & 255) << 24 | (value & 255) << 16 | (this1 >>> 8 & 255 & 255) << 8 | this1 & 255 & 255;
	return value;
}
BGRA_Impl_.get_r = function(this1) {
	return this1 >>> 8 & 255;
}
BGRA_Impl_.set_r = function(this1,value) {
	this1 = (this1 >>> 24 & 255 & 255) << 24 | (this1 >>> 16 & 255 & 255) << 16 | (value & 255) << 8 | this1 & 255 & 255;
	return value;
}


// Export

exports.default = BGRA_Impl_;