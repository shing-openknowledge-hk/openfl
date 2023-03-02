// Class: openfl._internal.formats.agal._AGALConverter.SamplerRegister

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../../../hxClasses_stub").default;
var $hxEnums = require("./../../../../../hxEnums_stub").default;
var $import = require("./../../../../../import_stub").default;
function openfl__$internal_formats_agal_AGALConverter() {return require("./../../../../../openfl/_internal/formats/agal/AGALConverter");}
function js__$Boot_HaxeError() {return require("./../../../../../js/_Boot/HaxeError");}
function openfl_errors_IllegalOperationError() {return require("./../../../../../openfl/errors/IllegalOperationError");}
function openfl__$internal_renderer_SamplerState() {return require("./../../../../../openfl/_internal/renderer/SamplerState");}
function haxe__$Int64__$_$_$Int64() {return require("./../../../../../haxe/_Int64/___Int64");}

// Constructor

var SamplerRegister = function() {
}

// Meta

SamplerRegister.__name__ = "openfl._internal.formats.agal._AGALConverter.SamplerRegister";
SamplerRegister.__isInterface__ = false;
SamplerRegister.prototype = {
	toGLSL: function() {
		var str = (openfl__$internal_formats_agal_AGALConverter().default).prefixFromType(this.type,this.programType) + this.n;
		return str;
	},
	toSamplerState: function() {
		var wrap;
		var filter;
		var mipfilter;
		switch(this.f) {
		case 0:
			filter = "nearest";
			break;
		case 1:
			filter = "linear";
			break;
		default:
			throw new (js__$Boot_HaxeError().default)(new (openfl_errors_IllegalOperationError().default)());
		}
		switch(this.m) {
		case 0:
			mipfilter = "mipnone";
			break;
		case 1:
			mipfilter = "mipnearest";
			break;
		case 2:
			mipfilter = "miplinear";
			break;
		default:
			throw new (js__$Boot_HaxeError().default)(new (openfl_errors_IllegalOperationError().default)());
		}
		switch(this.w) {
		case 0:
			wrap = "clamp";
			break;
		case 1:
			wrap = "repeat";
			break;
		default:
			throw new (js__$Boot_HaxeError().default)(new (openfl_errors_IllegalOperationError().default)());
		}
		var ignoreSampler = (this.s & 4) == 4;
		var centroid = (this.s & 1) == 1;
		var textureAlpha = this.t == 2;
		var lodBias = (this.b << 24 >> 24) / 8.0;
		return new (openfl__$internal_renderer_SamplerState().default)(wrap,filter,mipfilter,lodBias,ignoreSampler,centroid,textureAlpha);
	}
};
SamplerRegister.prototype.__class__ = SamplerRegister.prototype.constructor = $hxClasses["openfl._internal.formats.agal._AGALConverter.SamplerRegister"] = SamplerRegister;

// Init



// Statics

SamplerRegister.parse = function(v,programType) {
	var sr = new SamplerRegister();
	sr.programType = programType;
	var b = 60;
	b &= 63;
	var a;
	if(b == 0) {
		var this1 = new (haxe__$Int64__$_$_$Int64().default)(v.high,v.low);
		a = this1;
	} else if(b < 32) {
		var this2 = new (haxe__$Int64__$_$_$Int64().default)(v.high >> b,v.high << 32 - b | v.low >>> b);
		a = this2;
	} else {
		var this3 = new (haxe__$Int64__$_$_$Int64().default)(v.high >> 31,v.high >> b - 32);
		a = this3;
	}
	var this4 = new (haxe__$Int64__$_$_$Int64().default)(0,15);
	var b1 = this4;
	var this5 = new (haxe__$Int64__$_$_$Int64().default)(a.high & b1.high,a.low & b1.low);
	sr.f = this5.low;
	var b2 = 56;
	b2 &= 63;
	var a1;
	if(b2 == 0) {
		var this6 = new (haxe__$Int64__$_$_$Int64().default)(v.high,v.low);
		a1 = this6;
	} else if(b2 < 32) {
		var this7 = new (haxe__$Int64__$_$_$Int64().default)(v.high >> b2,v.high << 32 - b2 | v.low >>> b2);
		a1 = this7;
	} else {
		var this8 = new (haxe__$Int64__$_$_$Int64().default)(v.high >> 31,v.high >> b2 - 32);
		a1 = this8;
	}
	var this9 = new (haxe__$Int64__$_$_$Int64().default)(0,15);
	var b3 = this9;
	var this10 = new (haxe__$Int64__$_$_$Int64().default)(a1.high & b3.high,a1.low & b3.low);
	sr.m = this10.low;
	var b4 = 52;
	b4 &= 63;
	var a2;
	if(b4 == 0) {
		var this11 = new (haxe__$Int64__$_$_$Int64().default)(v.high,v.low);
		a2 = this11;
	} else if(b4 < 32) {
		var this12 = new (haxe__$Int64__$_$_$Int64().default)(v.high >> b4,v.high << 32 - b4 | v.low >>> b4);
		a2 = this12;
	} else {
		var this13 = new (haxe__$Int64__$_$_$Int64().default)(v.high >> 31,v.high >> b4 - 32);
		a2 = this13;
	}
	var this14 = new (haxe__$Int64__$_$_$Int64().default)(0,15);
	var b5 = this14;
	var this15 = new (haxe__$Int64__$_$_$Int64().default)(a2.high & b5.high,a2.low & b5.low);
	sr.w = this15.low;
	var b6 = 48;
	b6 &= 63;
	var a3;
	if(b6 == 0) {
		var this16 = new (haxe__$Int64__$_$_$Int64().default)(v.high,v.low);
		a3 = this16;
	} else if(b6 < 32) {
		var this17 = new (haxe__$Int64__$_$_$Int64().default)(v.high >> b6,v.high << 32 - b6 | v.low >>> b6);
		a3 = this17;
	} else {
		var this18 = new (haxe__$Int64__$_$_$Int64().default)(v.high >> 31,v.high >> b6 - 32);
		a3 = this18;
	}
	var this19 = new (haxe__$Int64__$_$_$Int64().default)(0,15);
	var b7 = this19;
	var this20 = new (haxe__$Int64__$_$_$Int64().default)(a3.high & b7.high,a3.low & b7.low);
	sr.s = this20.low;
	var b8 = 44;
	b8 &= 63;
	var a4;
	if(b8 == 0) {
		var this21 = new (haxe__$Int64__$_$_$Int64().default)(v.high,v.low);
		a4 = this21;
	} else if(b8 < 32) {
		var this22 = new (haxe__$Int64__$_$_$Int64().default)(v.high >> b8,v.high << 32 - b8 | v.low >>> b8);
		a4 = this22;
	} else {
		var this23 = new (haxe__$Int64__$_$_$Int64().default)(v.high >> 31,v.high >> b8 - 32);
		a4 = this23;
	}
	var this24 = new (haxe__$Int64__$_$_$Int64().default)(0,15);
	var b9 = this24;
	var this25 = new (haxe__$Int64__$_$_$Int64().default)(a4.high & b9.high,a4.low & b9.low);
	sr.d = this25.low;
	var b10 = 40;
	b10 &= 63;
	var a5;
	if(b10 == 0) {
		var this26 = new (haxe__$Int64__$_$_$Int64().default)(v.high,v.low);
		a5 = this26;
	} else if(b10 < 32) {
		var this27 = new (haxe__$Int64__$_$_$Int64().default)(v.high >> b10,v.high << 32 - b10 | v.low >>> b10);
		a5 = this27;
	} else {
		var this28 = new (haxe__$Int64__$_$_$Int64().default)(v.high >> 31,v.high >> b10 - 32);
		a5 = this28;
	}
	var this29 = new (haxe__$Int64__$_$_$Int64().default)(0,15);
	var b11 = this29;
	var this30 = new (haxe__$Int64__$_$_$Int64().default)(a5.high & b11.high,a5.low & b11.low);
	sr.t = this30.low;
	var b12 = 32;
	b12 &= 63;
	var a6;
	if(b12 == 0) {
		var this31 = new (haxe__$Int64__$_$_$Int64().default)(v.high,v.low);
		a6 = this31;
	} else if(b12 < 32) {
		var this32 = new (haxe__$Int64__$_$_$Int64().default)(v.high >> b12,v.high << 32 - b12 | v.low >>> b12);
		a6 = this32;
	} else {
		var this33 = new (haxe__$Int64__$_$_$Int64().default)(v.high >> 31,v.high >> b12 - 32);
		a6 = this33;
	}
	var this34 = new (haxe__$Int64__$_$_$Int64().default)(0,15);
	var b13 = this34;
	var this35 = new (haxe__$Int64__$_$_$Int64().default)(a6.high & b13.high,a6.low & b13.low);
	sr.type = this35.low;
	var b14 = 16;
	b14 &= 63;
	var a7;
	if(b14 == 0) {
		var this36 = new (haxe__$Int64__$_$_$Int64().default)(v.high,v.low);
		a7 = this36;
	} else if(b14 < 32) {
		var this37 = new (haxe__$Int64__$_$_$Int64().default)(v.high >> b14,v.high << 32 - b14 | v.low >>> b14);
		a7 = this37;
	} else {
		var this38 = new (haxe__$Int64__$_$_$Int64().default)(v.high >> 31,v.high >> b14 - 32);
		a7 = this38;
	}
	var this39 = new (haxe__$Int64__$_$_$Int64().default)(0,255);
	var b15 = this39;
	var this40 = new (haxe__$Int64__$_$_$Int64().default)(a7.high & b15.high,a7.low & b15.low);
	sr.b = this40.low;
	var this41 = new (haxe__$Int64__$_$_$Int64().default)(0,65535);
	var b16 = this41;
	var this42 = new (haxe__$Int64__$_$_$Int64().default)(v.high & b16.high,v.low & b16.low);
	sr.n = this42.low;
	return sr;
}
SamplerRegister.__meta__ = { obj : { SuppressWarnings : ["checkstyle:FieldDocComment"]}}

// Export

exports.default = SamplerRegister;