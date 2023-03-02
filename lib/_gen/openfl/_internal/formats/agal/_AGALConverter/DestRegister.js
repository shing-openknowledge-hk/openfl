// Class: openfl._internal.formats.agal._AGALConverter.DestRegister

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../../../hxClasses_stub").default;
var $hxEnums = require("./../../../../../hxEnums_stub").default;
var $import = require("./../../../../../import_stub").default;
function openfl__$internal_formats_agal__$AGALConverter_ProgramType() {return require("./../../../../../openfl/_internal/formats/agal/_AGALConverter/ProgramType");}
function openfl__$internal_formats_agal_AGALConverter() {return require("./../../../../../openfl/_internal/formats/agal/AGALConverter");}

// Constructor

var DestRegister = function() {
}

// Meta

DestRegister.__name__ = "openfl._internal.formats.agal._AGALConverter.DestRegister";
DestRegister.__isInterface__ = false;
DestRegister.prototype = {
	getWriteMask: function() {
		var str = ".";
		if((this.mask & 1) != 0) {
			str += "x";
		}
		if((this.mask & 2) != 0) {
			str += "y";
		}
		if((this.mask & 4) != 0) {
			str += "z";
		}
		if((this.mask & 8) != 0) {
			str += "w";
		}
		return str;
	},
	toGLSL: function(useMask) {
		if(useMask == null) {
			useMask = true;
		}
		var str;
		if(this.type == 3) {
			str = this.programType == (openfl__$internal_formats_agal__$AGALConverter_ProgramType().default).VERTEX ? "gl_Position" : "gl_FragColor";
		} else {
			str = (openfl__$internal_formats_agal_AGALConverter().default).prefixFromType(this.type,this.programType) + this.n;
		}
		if(useMask && this.mask != 15) {
			str += this.getWriteMask();
		}
		return str;
	}
};
DestRegister.prototype.__class__ = DestRegister.prototype.constructor = $hxClasses["openfl._internal.formats.agal._AGALConverter.DestRegister"] = DestRegister;

// Init



// Statics

DestRegister.parse = function(v,programType) {
	var dr = new DestRegister();
	dr.programType = programType;
	dr.type = v >>> 24 & 15;
	dr.mask = v >>> 16 & 15;
	dr.n = v & 65535;
	return dr;
}
DestRegister.__meta__ = { obj : { SuppressWarnings : ["checkstyle:FieldDocComment"]}}

// Export

exports.default = DestRegister;