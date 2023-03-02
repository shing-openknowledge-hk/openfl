// Class: lime.math._RGBA.RGBA_Impl_

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../hxClasses_stub").default;
var $hxEnums = require("./../../../hxEnums_stub").default;
var $import = require("./../../../import_stub").default;

// Constructor

var RGBA_Impl_ = function(){}

// Meta

RGBA_Impl_.__name__ = "lime.math._RGBA.RGBA_Impl_";
RGBA_Impl_.__isInterface__ = false;
RGBA_Impl_.prototype = {
	
};
RGBA_Impl_.prototype.__class__ = RGBA_Impl_.prototype.constructor = $hxClasses["lime.math._RGBA.RGBA_Impl_"] = RGBA_Impl_;

// Init

{
	var array = null;
	var view = null;
	var buffer = null;
	var len = null;
	var this1 = new Uint32Array(256);
	RGBA_Impl_.__alpha16 = this1;
	var _g = 0;
	while(_g < 256) {
		var i = _g++;
		RGBA_Impl_.__alpha16[i] = Math.ceil(i * 257.003921568627447);
	}
	var array1 = null;
	var view1 = null;
	var buffer1 = null;
	var len1 = null;
	var this2 = new Uint8Array(511);
	RGBA_Impl_.__clamp = this2;
	var _g1 = 0;
	while(_g1 < 255) {
		var i1 = _g1++;
		RGBA_Impl_.__clamp[i1] = i1;
	}
	var _g2 = 255;
	var _g3 = 511;
	while(_g2 < _g3) {
		var i2 = _g2++;
		RGBA_Impl_.__clamp[i2] = 255;
	}
};

// Statics

RGBA_Impl_._new = function(rgba) {
	if(rgba == null) {
		rgba = 0;
	}
	var this1 = rgba;
	return this1;
}
RGBA_Impl_.create = function(r,g,b,a) {
	var this1 = 0;
	var rgba = this1;
	rgba = (r & 255) << 24 | (g & 255) << 16 | (b & 255) << 8 | a & 255;
	return rgba;
}
RGBA_Impl_.multiplyAlpha = function(this1) {
	if((this1 & 255) == 0) {
		if(this1 != 0) {
			this1 = 0;
		}
	} else if((this1 & 255) != 255) {
		RGBA_Impl_.a16 = RGBA_Impl_.__alpha16[this1 & 255];
		this1 = ((this1 >>> 24 & 255) * RGBA_Impl_.a16 >> 16 & 255) << 24 | ((this1 >>> 16 & 255) * RGBA_Impl_.a16 >> 16 & 255) << 16 | ((this1 >>> 8 & 255) * RGBA_Impl_.a16 >> 16 & 255) << 8 | this1 & 255 & 255;
	}
}
RGBA_Impl_.readUInt8 = function(this1,data,offset,format,premultiplied) {
	if(premultiplied == null) {
		premultiplied = false;
	}
	if(format == null) {
		format = 0;
	}
	switch(format) {
	case 0:
		this1 = (data[offset] & 255) << 24 | (data[offset + 1] & 255) << 16 | (data[offset + 2] & 255) << 8 | data[offset + 3] & 255;
		break;
	case 1:
		this1 = (data[offset + 1] & 255) << 24 | (data[offset + 2] & 255) << 16 | (data[offset + 3] & 255) << 8 | data[offset] & 255;
		break;
	case 2:
		this1 = (data[offset + 2] & 255) << 24 | (data[offset + 1] & 255) << 16 | (data[offset] & 255) << 8 | data[offset + 3] & 255;
		break;
	}
	if(premultiplied) {
		if((this1 & 255) != 0 && (this1 & 255) != 255) {
			RGBA_Impl_.unmult = 255.0 / (this1 & 255);
			this1 = (RGBA_Impl_.__clamp[Math.round((this1 >>> 24 & 255) * RGBA_Impl_.unmult)] & 255) << 24 | (RGBA_Impl_.__clamp[Math.round((this1 >>> 16 & 255) * RGBA_Impl_.unmult)] & 255) << 16 | (RGBA_Impl_.__clamp[Math.round((this1 >>> 8 & 255) * RGBA_Impl_.unmult)] & 255) << 8 | this1 & 255 & 255;
		}
	}
}
RGBA_Impl_.set = function(this1,r,g,b,a) {
	this1 = (r & 255) << 24 | (g & 255) << 16 | (b & 255) << 8 | a & 255;
}
RGBA_Impl_.unmultiplyAlpha = function(this1) {
	if((this1 & 255) != 0 && (this1 & 255) != 255) {
		RGBA_Impl_.unmult = 255.0 / (this1 & 255);
		this1 = (RGBA_Impl_.__clamp[Math.round((this1 >>> 24 & 255) * RGBA_Impl_.unmult)] & 255) << 24 | (RGBA_Impl_.__clamp[Math.round((this1 >>> 16 & 255) * RGBA_Impl_.unmult)] & 255) << 16 | (RGBA_Impl_.__clamp[Math.round((this1 >>> 8 & 255) * RGBA_Impl_.unmult)] & 255) << 8 | this1 & 255 & 255;
	}
}
RGBA_Impl_.writeUInt8 = function(this1,data,offset,format,premultiplied) {
	if(premultiplied == null) {
		premultiplied = false;
	}
	if(format == null) {
		format = 0;
	}
	if(premultiplied) {
		if((this1 & 255) == 0) {
			if(this1 != 0) {
				this1 = 0;
			}
		} else if((this1 & 255) != 255) {
			RGBA_Impl_.a16 = RGBA_Impl_.__alpha16[this1 & 255];
			this1 = ((this1 >>> 24 & 255) * RGBA_Impl_.a16 >> 16 & 255) << 24 | ((this1 >>> 16 & 255) * RGBA_Impl_.a16 >> 16 & 255) << 16 | ((this1 >>> 8 & 255) * RGBA_Impl_.a16 >> 16 & 255) << 8 | this1 & 255 & 255;
		}
	}
	switch(format) {
	case 0:
		data[offset] = this1 >>> 24 & 255;
		data[offset + 1] = this1 >>> 16 & 255;
		data[offset + 2] = this1 >>> 8 & 255;
		data[offset + 3] = this1 & 255;
		break;
	case 1:
		data[offset] = this1 & 255;
		data[offset + 1] = this1 >>> 24 & 255;
		data[offset + 2] = this1 >>> 16 & 255;
		data[offset + 3] = this1 >>> 8 & 255;
		break;
	case 2:
		data[offset] = this1 >>> 8 & 255;
		data[offset + 1] = this1 >>> 16 & 255;
		data[offset + 2] = this1 >>> 24 & 255;
		data[offset + 3] = this1 & 255;
		break;
	}
}
RGBA_Impl_.__fromARGB = function(argb) {
	var this1 = 0;
	var rgba = this1;
	rgba = (argb >>> 16 & 255 & 255) << 24 | (argb >>> 8 & 255 & 255) << 16 | (argb & 255 & 255) << 8 | argb >>> 24 & 255 & 255;
	return rgba;
}
RGBA_Impl_.__fromBGRA = function(bgra) {
	var this1 = 0;
	var rgba = this1;
	rgba = (bgra >>> 8 & 255 & 255) << 24 | (bgra >>> 16 & 255 & 255) << 16 | (bgra >>> 24 & 255 & 255) << 8 | bgra & 255 & 255;
	return rgba;
}
RGBA_Impl_.get_a = function(this1) {
	return this1 & 255;
}
RGBA_Impl_.set_a = function(this1,value) {
	this1 = (this1 >>> 24 & 255 & 255) << 24 | (this1 >>> 16 & 255 & 255) << 16 | (this1 >>> 8 & 255 & 255) << 8 | value & 255;
	return value;
}
RGBA_Impl_.get_b = function(this1) {
	return this1 >>> 8 & 255;
}
RGBA_Impl_.set_b = function(this1,value) {
	this1 = (this1 >>> 24 & 255 & 255) << 24 | (this1 >>> 16 & 255 & 255) << 16 | (value & 255) << 8 | this1 & 255 & 255;
	return value;
}
RGBA_Impl_.get_g = function(this1) {
	return this1 >>> 16 & 255;
}
RGBA_Impl_.set_g = function(this1,value) {
	this1 = (this1 >>> 24 & 255 & 255) << 24 | (value & 255) << 16 | (this1 >>> 8 & 255 & 255) << 8 | this1 & 255 & 255;
	return value;
}
RGBA_Impl_.get_r = function(this1) {
	return this1 >>> 24 & 255;
}
RGBA_Impl_.set_r = function(this1,value) {
	this1 = (value & 255) << 24 | (this1 >>> 16 & 255 & 255) << 16 | (this1 >>> 8 & 255 & 255) << 8 | this1 & 255 & 255;
	return value;
}


// Export

exports.default = RGBA_Impl_;