// Class: lime.math._ARGB.ARGB_Impl_

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../hxClasses_stub").default;
var $hxEnums = require("./../../../hxEnums_stub").default;
var $import = require("./../../../import_stub").default;
function lime_math__$RGBA_RGBA_$Impl_$() {return require("./../../../lime/math/_RGBA/RGBA_Impl_");}

// Constructor

var ARGB_Impl_ = function(){}

// Meta

ARGB_Impl_.__name__ = "lime.math._ARGB.ARGB_Impl_";
ARGB_Impl_.__isInterface__ = false;
ARGB_Impl_.prototype = {
	
};
ARGB_Impl_.prototype.__class__ = ARGB_Impl_.prototype.constructor = $hxClasses["lime.math._ARGB.ARGB_Impl_"] = ARGB_Impl_;

// Init



// Statics

ARGB_Impl_._new = function(argb) {
	if(argb == null) {
		argb = 0;
	}
	var this1 = argb;
	return this1;
}
ARGB_Impl_.create = function(a,r,g,b) {
	var this1 = 0;
	var argb = this1;
	argb = (a & 255) << 24 | (r & 255) << 16 | (g & 255) << 8 | b & 255;
	return argb;
}
ARGB_Impl_.multiplyAlpha = function(this1) {
	if((this1 >>> 24 & 255) == 0) {
		this1 = 0;
	} else if((this1 >>> 24 & 255) != 255) {
		ARGB_Impl_.a16 = (lime_math__$RGBA_RGBA_$Impl_$().default).__alpha16[this1 >>> 24 & 255];
		this1 = (this1 >>> 24 & 255 & 255) << 24 | ((this1 >>> 16 & 255) * ARGB_Impl_.a16 >> 16 & 255) << 16 | ((this1 >>> 8 & 255) * ARGB_Impl_.a16 >> 16 & 255) << 8 | (this1 & 255) * ARGB_Impl_.a16 >> 16 & 255;
	}
}
ARGB_Impl_.readUInt8 = function(this1,data,offset,format,premultiplied) {
	if(premultiplied == null) {
		premultiplied = false;
	}
	if(format == null) {
		format = 0;
	}
	switch(format) {
	case 0:
		this1 = (data[offset + 1] & 255) << 24 | (data[offset + 2] & 255) << 16 | (data[offset + 3] & 255) << 8 | data[offset] & 255;
		break;
	case 1:
		this1 = (data[offset + 2] & 255) << 24 | (data[offset + 3] & 255) << 16 | (data[offset] & 255) << 8 | data[offset + 1] & 255;
		break;
	case 2:
		this1 = (data[offset + 1] & 255) << 24 | (data[offset] & 255) << 16 | (data[offset + 3] & 255) << 8 | data[offset + 2] & 255;
		break;
	}
	if(premultiplied) {
		if((this1 >>> 24 & 255) != 0 && (this1 >>> 24 & 255) != 255) {
			ARGB_Impl_.unmult = 255.0 / (this1 >>> 24 & 255);
			this1 = (this1 >>> 24 & 255 & 255) << 24 | ((lime_math__$RGBA_RGBA_$Impl_$().default).__clamp[Math.floor((this1 >>> 16 & 255) * ARGB_Impl_.unmult)] & 255) << 16 | ((lime_math__$RGBA_RGBA_$Impl_$().default).__clamp[Math.floor((this1 >>> 8 & 255) * ARGB_Impl_.unmult)] & 255) << 8 | (lime_math__$RGBA_RGBA_$Impl_$().default).__clamp[Math.floor((this1 & 255) * ARGB_Impl_.unmult)] & 255;
		}
	}
}
ARGB_Impl_.set = function(this1,a,r,g,b) {
	this1 = (a & 255) << 24 | (r & 255) << 16 | (g & 255) << 8 | b & 255;
}
ARGB_Impl_.unmultiplyAlpha = function(this1) {
	if((this1 >>> 24 & 255) != 0 && (this1 >>> 24 & 255) != 255) {
		ARGB_Impl_.unmult = 255.0 / (this1 >>> 24 & 255);
		this1 = (this1 >>> 24 & 255 & 255) << 24 | ((lime_math__$RGBA_RGBA_$Impl_$().default).__clamp[Math.floor((this1 >>> 16 & 255) * ARGB_Impl_.unmult)] & 255) << 16 | ((lime_math__$RGBA_RGBA_$Impl_$().default).__clamp[Math.floor((this1 >>> 8 & 255) * ARGB_Impl_.unmult)] & 255) << 8 | (lime_math__$RGBA_RGBA_$Impl_$().default).__clamp[Math.floor((this1 & 255) * ARGB_Impl_.unmult)] & 255;
	}
}
ARGB_Impl_.writeUInt8 = function(this1,data,offset,format,premultiplied) {
	if(premultiplied == null) {
		premultiplied = false;
	}
	if(format == null) {
		format = 0;
	}
	if(premultiplied) {
		if((this1 >>> 24 & 255) == 0) {
			this1 = 0;
		} else if((this1 >>> 24 & 255) != 255) {
			ARGB_Impl_.a16 = (lime_math__$RGBA_RGBA_$Impl_$().default).__alpha16[this1 >>> 24 & 255];
			this1 = (this1 >>> 24 & 255 & 255) << 24 | ((this1 >>> 16 & 255) * ARGB_Impl_.a16 >> 16 & 255) << 16 | ((this1 >>> 8 & 255) * ARGB_Impl_.a16 >> 16 & 255) << 8 | (this1 & 255) * ARGB_Impl_.a16 >> 16 & 255;
		}
	}
	switch(format) {
	case 0:
		data[offset] = this1 >>> 16 & 255;
		data[offset + 1] = this1 >>> 8 & 255;
		data[offset + 2] = this1 & 255;
		data[offset + 3] = this1 >>> 24 & 255;
		break;
	case 1:
		data[offset] = this1 >>> 24 & 255;
		data[offset + 1] = this1 >>> 16 & 255;
		data[offset + 2] = this1 >>> 8 & 255;
		data[offset + 3] = this1 & 255;
		break;
	case 2:
		data[offset] = this1 & 255;
		data[offset + 1] = this1 >>> 8 & 255;
		data[offset + 2] = this1 >>> 16 & 255;
		data[offset + 3] = this1 >>> 24 & 255;
		break;
	}
}
ARGB_Impl_.__fromBGRA = function(bgra) {
	var this1 = 0;
	var argb = this1;
	argb = (bgra & 255 & 255) << 24 | (bgra >>> 8 & 255 & 255) << 16 | (bgra >>> 16 & 255 & 255) << 8 | bgra >>> 24 & 255 & 255;
	return argb;
}
ARGB_Impl_.__fromRGBA = function(rgba) {
	var this1 = 0;
	var argb = this1;
	argb = (rgba & 255 & 255) << 24 | (rgba >>> 24 & 255 & 255) << 16 | (rgba >>> 16 & 255 & 255) << 8 | rgba >>> 8 & 255 & 255;
	return argb;
}
ARGB_Impl_.get_a = function(this1) {
	return this1 >>> 24 & 255;
}
ARGB_Impl_.set_a = function(this1,value) {
	this1 = (value & 255) << 24 | (this1 >>> 16 & 255 & 255) << 16 | (this1 >>> 8 & 255 & 255) << 8 | this1 & 255 & 255;
	return value;
}
ARGB_Impl_.get_b = function(this1) {
	return this1 & 255;
}
ARGB_Impl_.set_b = function(this1,value) {
	this1 = (this1 >>> 24 & 255 & 255) << 24 | (this1 >>> 16 & 255 & 255) << 16 | (this1 >>> 8 & 255 & 255) << 8 | value & 255;
	return value;
}
ARGB_Impl_.get_g = function(this1) {
	return this1 >>> 8 & 255;
}
ARGB_Impl_.set_g = function(this1,value) {
	this1 = (this1 >>> 24 & 255 & 255) << 24 | (this1 >>> 16 & 255 & 255) << 16 | (value & 255) << 8 | this1 & 255 & 255;
	return value;
}
ARGB_Impl_.get_r = function(this1) {
	return this1 >>> 16 & 255;
}
ARGB_Impl_.set_r = function(this1,value) {
	this1 = (this1 >>> 24 & 255 & 255) << 24 | (value & 255) << 16 | (this1 >>> 8 & 255 & 255) << 8 | this1 & 255 & 255;
	return value;
}


// Export

exports.default = ARGB_Impl_;