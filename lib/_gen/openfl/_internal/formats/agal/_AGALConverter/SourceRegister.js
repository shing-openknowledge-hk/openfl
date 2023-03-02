// Class: openfl._internal.formats.agal._AGALConverter.SourceRegister

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../../../hxClasses_stub").default;
var $hxEnums = require("./../../../../../hxEnums_stub").default;
var $import = require("./../../../../../import_stub").default;
function openfl__$internal_formats_agal__$AGALConverter_ProgramType() {return require("./../../../../../openfl/_internal/formats/agal/_AGALConverter/ProgramType");}
function openfl__$internal_formats_agal_AGALConverter() {return require("./../../../../../openfl/_internal/formats/agal/AGALConverter");}
function haxe__$Int64__$_$_$Int64() {return require("./../../../../../haxe/_Int64/___Int64");}

// Constructor

var SourceRegister = function() {
}

// Meta

SourceRegister.__name__ = "openfl._internal.formats.agal._AGALConverter.SourceRegister";
SourceRegister.__isInterface__ = false;
SourceRegister.prototype = {
	toGLSL: function(emitSwizzle,offset) {
		if(offset == null) {
			offset = 0;
		}
		if(emitSwizzle == null) {
			emitSwizzle = true;
		}
		if(this.type == 3) {
			if(this.programType == (openfl__$internal_formats_agal__$AGALConverter_ProgramType().default).VERTEX) {
				return "gl_Position";
			} else {
				return "gl_FragColor";
			}
		}
		var fullxyzw = this.s == 228 && this.sourceMask == 15;
		var swizzle = "";
		if(this.type != 5 && !fullxyzw) {
			if((this.sourceMask & 1) != 0) {
				switch(this.s & 3) {
				case 0:
					swizzle += "x";
					break;
				case 1:
					swizzle += "y";
					break;
				case 2:
					swizzle += "z";
					break;
				case 3:
					swizzle += "w";
					break;
				}
			}
			if((this.sourceMask & 2) != 0) {
				switch(this.s >> 2 & 3) {
				case 0:
					swizzle += "x";
					break;
				case 1:
					swizzle += "y";
					break;
				case 2:
					swizzle += "z";
					break;
				case 3:
					swizzle += "w";
					break;
				}
			}
			if((this.sourceMask & 4) != 0) {
				switch(this.s >> 4 & 3) {
				case 0:
					swizzle += "x";
					break;
				case 1:
					swizzle += "y";
					break;
				case 2:
					swizzle += "z";
					break;
				case 3:
					swizzle += "w";
					break;
				}
			}
			if((this.sourceMask & 8) != 0) {
				switch(this.s >> 6 & 3) {
				case 0:
					swizzle += "x";
					break;
				case 1:
					swizzle += "y";
					break;
				case 2:
					swizzle += "z";
					break;
				case 3:
					swizzle += "w";
					break;
				}
			}
		}
		var str = (openfl__$internal_formats_agal_AGALConverter().default).prefixFromType(this.type,this.programType);
		if(this.d == 0) {
			str += this.n + offset;
		} else {
			str += this.o;
			var indexComponent = "";
			switch(this.q) {
			case 0:
				indexComponent = "x";
				break;
			case 1:
				indexComponent = "y";
				break;
			case 2:
				indexComponent = "z";
				break;
			case 3:
				indexComponent = "w";
				break;
			}
			var indexRegister = (openfl__$internal_formats_agal_AGALConverter().default).prefixFromType(this.itype,this.programType) + this.n + "." + indexComponent;
			str += "[ int(" + indexRegister + ") +" + offset + "]";
		}
		if(emitSwizzle && swizzle != "") {
			str += "." + swizzle;
		}
		return str;
	}
};
SourceRegister.prototype.__class__ = SourceRegister.prototype.constructor = $hxClasses["openfl._internal.formats.agal._AGALConverter.SourceRegister"] = SourceRegister;

// Init



// Statics

SourceRegister.parse = function(v,programType,sourceMask) {
	var sr = new SourceRegister();
	sr.programType = programType;
	var b = 63;
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
	var this4 = new (haxe__$Int64__$_$_$Int64().default)(0,1);
	var b1 = this4;
	var this5 = new (haxe__$Int64__$_$_$Int64().default)(a.high & b1.high,a.low & b1.low);
	sr.d = this5.low;
	var b2 = 48;
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
	var this9 = new (haxe__$Int64__$_$_$Int64().default)(0,3);
	var b3 = this9;
	var this10 = new (haxe__$Int64__$_$_$Int64().default)(a1.high & b3.high,a1.low & b3.low);
	sr.q = this10.low;
	var b4 = 40;
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
	sr.itype = this15.low;
	var b6 = 32;
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
	sr.type = this20.low;
	var b8 = 24;
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
	var this24 = new (haxe__$Int64__$_$_$Int64().default)(0,255);
	var b9 = this24;
	var this25 = new (haxe__$Int64__$_$_$Int64().default)(a4.high & b9.high,a4.low & b9.low);
	sr.s = this25.low;
	var b10 = 16;
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
	var this29 = new (haxe__$Int64__$_$_$Int64().default)(0,255);
	var b11 = this29;
	var this30 = new (haxe__$Int64__$_$_$Int64().default)(a5.high & b11.high,a5.low & b11.low);
	sr.o = this30.low;
	var this31 = new (haxe__$Int64__$_$_$Int64().default)(0,65535);
	var b12 = this31;
	var this32 = new (haxe__$Int64__$_$_$Int64().default)(v.high & b12.high,v.low & b12.low);
	sr.n = this32.low;
	sr.sourceMask = sourceMask;
	return sr;
}
SourceRegister.__meta__ = { obj : { SuppressWarnings : ["checkstyle:FieldDocComment"]}}

// Export

exports.default = SourceRegister;