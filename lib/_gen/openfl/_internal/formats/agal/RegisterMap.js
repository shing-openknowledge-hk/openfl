// Class: openfl._internal.formats.agal.RegisterMap

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../../hxClasses_stub").default;
var $hxEnums = require("./../../../../hxEnums_stub").default;
var $import = require("./../../../../import_stub").default;
function js__$Boot_HaxeError() {return require("./../../../../js/_Boot/HaxeError");}
function openfl_errors_IllegalOperationError() {return require("./../../../../openfl/errors/IllegalOperationError");}
function openfl__$internal_formats_agal__$AGALConverter_RegisterMapEntry() {return require("./../../../../openfl/_internal/formats/agal/_AGALConverter/RegisterMapEntry");}
function openfl__$internal_formats_agal_AGALConverter() {return require("./../../../../openfl/_internal/formats/agal/AGALConverter");}
function openfl__$internal_formats_agal__$AGALConverter_RegisterUsage() {return require("./../../../../openfl/_internal/formats/agal/_AGALConverter/RegisterUsage");}
function js_Boot() {return require("./../../../../js/Boot");}
function StringBuf() {return require("./../../../../StringBuf");}
function lime_utils_Log() {return require("./../../../../lime/utils/Log");}

// Constructor

var RegisterMap = function() {
	this.mEntries = [];
}

// Meta

RegisterMap.__name__ = "openfl._internal.formats.agal.RegisterMap";
RegisterMap.__isInterface__ = false;
RegisterMap.prototype = {
	add: function(type,name,number,usage) {
		var _g = 0;
		var _g1 = this.mEntries;
		while(_g < _g1.length) {
			var entry = _g1[_g];
			++_g;
			if(entry.type == type && entry.name == name && entry.number == number) {
				if(entry.usage != usage) {
					throw new (js__$Boot_HaxeError().default)(new (openfl_errors_IllegalOperationError().default)("Cannot use register in multiple ways yet (mat4/vec4)"));
				}
				return;
			}
		}
		var entry1 = new (openfl__$internal_formats_agal__$AGALConverter_RegisterMapEntry().default)();
		entry1.type = type;
		entry1.name = name;
		entry1.number = number;
		entry1.usage = usage;
		this.mEntries.push(entry1);
	},
	addDR: function(dr,usage) {
		this.add(dr.type,dr.toGLSL(false),dr.n,usage);
	},
	addSaR: function(sr,usage) {
		this.add(sr.type,sr.toGLSL(),sr.n,usage);
	},
	addSR: function(sr,usage,offset) {
		if(offset == null) {
			offset = 0;
		}
		if(sr.d != 0) {
			this.add(sr.itype,(openfl__$internal_formats_agal_AGALConverter().default).prefixFromType(sr.itype,sr.programType) + sr.n,sr.n,(openfl__$internal_formats_agal__$AGALConverter_RegisterUsage().default).VECTOR_4);
			this.add(sr.type,(openfl__$internal_formats_agal_AGALConverter().default).prefixFromType(sr.type,sr.programType) + sr.o,sr.o,(openfl__$internal_formats_agal__$AGALConverter_RegisterUsage().default).VECTOR_4_ARRAY);
			return;
		}
		this.add(sr.type,sr.toGLSL(false,offset),sr.n + offset,usage);
	},
	getRegisterUsage: function(sr) {
		if(sr.d != 0) {
			return (openfl__$internal_formats_agal__$AGALConverter_RegisterUsage().default).VECTOR_4_ARRAY;
		}
		return this.getUsage(sr.type,sr.toGLSL(false),sr.n);
	},
	getUsage: function(type,name,number) {
		var _g = 0;
		var _g1 = this.mEntries;
		while(_g < _g1.length) {
			var entry = _g1[_g];
			++_g;
			if(entry.type == type && entry.name == name && entry.number == number) {
				return entry.usage;
			}
		}
		return (openfl__$internal_formats_agal__$AGALConverter_RegisterUsage().default).UNUSED;
	},
	toGLSL: function(tempRegistersOnly) {
		this.mEntries.sort(function(a,b) {
			return a.number - b.number;
		});
		var entry;
		this.mEntries.sort(function(a1,b1) {
			return (js_Boot().default).__cast(a1.type , $hxClasses["Int"]) - (js_Boot().default).__cast(b1.type , $hxClasses["Int"]);
		});
		var sb = new (StringBuf().default)();
		var _g = 0;
		var _g1 = this.mEntries.length;
		while(_g < _g1) {
			var i = _g++;
			entry = this.mEntries[i];
			if(tempRegistersOnly && entry.type != 2 || !tempRegistersOnly && entry.type == 2) {
				continue;
			}
			if(entry.type == 3) {
				continue;
			}
			switch(entry.type) {
			case 0:
				sb.add("attribute ");
				break;
			case 1:
				sb.add("uniform ");
				break;
			case 2:
				sb.add("\t");
				break;
			case 3:
				break;
			case 4:
				sb.add("varying ");
				break;
			case 5:
				sb.add("uniform ");
				break;
			default:
				throw new (js__$Boot_HaxeError().default)(new (openfl_errors_IllegalOperationError().default)());
			}
			switch(entry.usage._hx_index) {
			case 0:
				(lime_utils_Log().default).info("Missing switch patten: RegisterUsage.UNUSED",{ fileName : "../src/openfl/_internal/formats/agal/AGALConverter.hx", lineNumber : 746, className : "openfl._internal.formats.agal.RegisterMap", methodName : "toGLSL"});
				break;
			case 1:
				sb.add("vec4 ");
				break;
			case 2:
				sb.add("mat4 ");
				break;
			case 3:
				sb.add("sampler2D ");
				break;
			case 4:
				break;
			case 5:
				sb.add("samplerCube ");
				break;
			case 6:
				break;
			case 7:
				sb.add("vec4 ");
				break;
			}
			if(entry.usage == (openfl__$internal_formats_agal__$AGALConverter_RegisterUsage().default).SAMPLER_2D_ALPHA) {
				sb.add("sampler2D ");
				sb.add(entry.name);
				sb.add(";\n");
				sb.add("uniform ");
				sb.add("sampler2D ");
				sb.add(entry.name + "_alpha");
				sb.add(";\n");
				sb.add("uniform ");
				sb.add("bool ");
				sb.add(entry.name + "_alphaEnabled");
				sb.add(";\n");
			} else if(entry.usage == (openfl__$internal_formats_agal__$AGALConverter_RegisterUsage().default).SAMPLER_CUBE_ALPHA) {
				sb.add("samplerCube ");
				sb.add(entry.name);
				sb.add(";\n");
				sb.add("uniform ");
				sb.add("samplerCube ");
				sb.add(entry.name + "_alpha");
				sb.add(";\n");
				sb.add("uniform ");
				sb.add("bool ");
				sb.add(entry.name + "_alphaEnabled");
				sb.add(";\n");
			} else if(entry.usage == (openfl__$internal_formats_agal__$AGALConverter_RegisterUsage().default).VECTOR_4_ARRAY) {
				sb.add(entry.name + "[128]");
				sb.add(";\n");
			} else {
				sb.add(entry.name);
				sb.add(";\n");
			}
		}
		return sb.toString();
	}
};
RegisterMap.prototype.__class__ = RegisterMap.prototype.constructor = $hxClasses["openfl._internal.formats.agal.RegisterMap"] = RegisterMap;

// Init



// Statics


RegisterMap.__meta__ = { obj : { SuppressWarnings : ["checkstyle:FieldDocComment"]}}

// Export

exports.default = RegisterMap;