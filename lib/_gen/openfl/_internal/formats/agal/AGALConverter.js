// Class: openfl._internal.formats.agal.AGALConverter

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../../hxClasses_stub").default;
var $hxEnums = require("./../../../../hxEnums_stub").default;
var $import = require("./../../../../import_stub").default;
function openfl__$internal_formats_agal__$AGALConverter_ProgramType() {return require("./../../../../openfl/_internal/formats/agal/_AGALConverter/ProgramType");}
function js__$Boot_HaxeError() {return require("./../../../../js/_Boot/HaxeError");}
function openfl_errors_IllegalOperationError() {return require("./../../../../openfl/errors/IllegalOperationError");}
function haxe__$Int64__$_$_$Int64() {return require("./../../../../haxe/_Int64/___Int64");}
function openfl__$internal_formats_agal_RegisterMap() {return require("./../../../../openfl/_internal/formats/agal/RegisterMap");}
function StringBuf() {return require("./../../../../StringBuf");}
function _$UInt_UInt_$Impl_$() {return require("./../../../../_UInt/UInt_Impl_");}
function openfl_utils__$ByteArray_ByteArray_$Impl_$() {return require("./../../../../openfl/utils/_ByteArray/ByteArray_Impl_");}
function openfl__$internal_formats_agal__$AGALConverter_DestRegister() {return require("./../../../../openfl/_internal/formats/agal/_AGALConverter/DestRegister");}
function openfl__$internal_formats_agal__$AGALConverter_SourceRegister() {return require("./../../../../openfl/_internal/formats/agal/_AGALConverter/SourceRegister");}
function openfl__$internal_formats_agal__$AGALConverter_RegisterUsage() {return require("./../../../../openfl/_internal/formats/agal/_AGALConverter/RegisterUsage");}
function openfl__$internal_formats_agal__$AGALConverter_SamplerRegister() {return require("./../../../../openfl/_internal/formats/agal/_AGALConverter/SamplerRegister");}
function lime_graphics_opengl_GL() {return require("./../../../../lime/graphics/opengl/GL");}

// Constructor

var AGALConverter = function(){}

// Meta

AGALConverter.__name__ = "openfl._internal.formats.agal.AGALConverter";
AGALConverter.__isInterface__ = false;
AGALConverter.prototype = {
	
};
AGALConverter.prototype.__class__ = AGALConverter.prototype.constructor = $hxClasses["openfl._internal.formats.agal.AGALConverter"] = AGALConverter;

// Init



// Statics

AGALConverter.prefixFromType = function(regType,programType) {
	switch(regType) {
	case 0:
		return "va";
	case 1:
		if(programType == (openfl__$internal_formats_agal__$AGALConverter_ProgramType().default).VERTEX) {
			return "vc";
		} else {
			return "fc";
		}
		break;
	case 2:
		if(programType == (openfl__$internal_formats_agal__$AGALConverter_ProgramType().default).VERTEX) {
			return "vt";
		} else {
			return "ft";
		}
		break;
	case 3:
		return "output_";
	case 4:
		return "v";
	case 5:
		return "sampler";
	default:
		throw new (js__$Boot_HaxeError().default)(new (openfl_errors_IllegalOperationError().default)("Invalid data!"));
	}
}
AGALConverter.readUInt64 = function(byteArray) {
	var low = byteArray.readInt();
	var high = byteArray.readInt();
	var this1 = new (haxe__$Int64__$_$_$Int64().default)(high,low);
	return this1;
}
AGALConverter.convertToGLSL = function(agal,samplerState) {
	agal.position = 0;
	agal.set_endian("littleEndian");
	var magic = agal.readByte() & 255;
	if(magic == 176) {
		return agal.readUTF();
	}
	if(magic != 160) {
		throw new (js__$Boot_HaxeError().default)(new (openfl_errors_IllegalOperationError().default)("Magic value must be 0xA0, may not be AGAL"));
	}
	var version = agal.readInt();
	if(version != 1) {
		throw new (js__$Boot_HaxeError().default)(new (openfl_errors_IllegalOperationError().default)("Version must be 1"));
	}
	var shaderTypeID = agal.readByte() & 255;
	if(shaderTypeID != 161) {
		throw new (js__$Boot_HaxeError().default)(new (openfl_errors_IllegalOperationError().default)("Shader type ID must be 0xA1"));
	}
	var programType = (agal.readByte() & 255) == 0 ? (openfl__$internal_formats_agal__$AGALConverter_ProgramType().default).VERTEX : (openfl__$internal_formats_agal__$AGALConverter_ProgramType().default).FRAGMENT;
	var map = new (openfl__$internal_formats_agal_RegisterMap().default)();
	var sb = new (StringBuf().default)();
	while(true) {
		var a = agal.position;
		if(!(_$UInt_UInt_$Impl_$().default).gt((openfl_utils__$ByteArray_ByteArray_$Impl_$().default).get_length(agal),a)) {
			break;
		}
		var opcode = agal.readInt();
		var dest = agal.readUnsignedInt();
		var source1 = AGALConverter.readUInt64(agal);
		var source2 = AGALConverter.readUInt64(agal);
		var dr = (openfl__$internal_formats_agal__$AGALConverter_DestRegister().default).parse(dest,programType);
		var sr1 = (openfl__$internal_formats_agal__$AGALConverter_SourceRegister().default).parse(source1,programType,dr.mask);
		var sr2 = (openfl__$internal_formats_agal__$AGALConverter_SourceRegister().default).parse(source2,programType,dr.mask);
		sb.add("\t");
		switch(opcode) {
		case 0:
			sb.add(dr.toGLSL() + " = " + sr1.toGLSL() + "; // mov");
			map.addDR(dr,(openfl__$internal_formats_agal__$AGALConverter_RegisterUsage().default).VECTOR_4);
			map.addSR(sr1,(openfl__$internal_formats_agal__$AGALConverter_RegisterUsage().default).VECTOR_4);
			break;
		case 1:
			sb.add(dr.toGLSL() + " = " + sr1.toGLSL() + " + " + sr2.toGLSL() + "; // add");
			map.addDR(dr,(openfl__$internal_formats_agal__$AGALConverter_RegisterUsage().default).VECTOR_4);
			map.addSR(sr1,(openfl__$internal_formats_agal__$AGALConverter_RegisterUsage().default).VECTOR_4);
			map.addSR(sr2,(openfl__$internal_formats_agal__$AGALConverter_RegisterUsage().default).VECTOR_4);
			break;
		case 2:
			sb.add(dr.toGLSL() + " = " + sr1.toGLSL() + " - " + sr2.toGLSL() + "; // sub");
			map.addDR(dr,(openfl__$internal_formats_agal__$AGALConverter_RegisterUsage().default).VECTOR_4);
			map.addSR(sr1,(openfl__$internal_formats_agal__$AGALConverter_RegisterUsage().default).VECTOR_4);
			map.addSR(sr2,(openfl__$internal_formats_agal__$AGALConverter_RegisterUsage().default).VECTOR_4);
			break;
		case 3:
			sb.add(dr.toGLSL() + " = " + sr1.toGLSL() + " * " + sr2.toGLSL() + "; // mul");
			map.addDR(dr,(openfl__$internal_formats_agal__$AGALConverter_RegisterUsage().default).VECTOR_4);
			map.addSR(sr1,(openfl__$internal_formats_agal__$AGALConverter_RegisterUsage().default).VECTOR_4);
			map.addSR(sr2,(openfl__$internal_formats_agal__$AGALConverter_RegisterUsage().default).VECTOR_4);
			break;
		case 4:
			sb.add(dr.toGLSL() + " = " + sr1.toGLSL() + " / " + sr2.toGLSL() + "; // div");
			map.addDR(dr,(openfl__$internal_formats_agal__$AGALConverter_RegisterUsage().default).VECTOR_4);
			map.addSR(sr1,(openfl__$internal_formats_agal__$AGALConverter_RegisterUsage().default).VECTOR_4);
			map.addSR(sr2,(openfl__$internal_formats_agal__$AGALConverter_RegisterUsage().default).VECTOR_4);
			break;
		case 5:
			var sr = sr1.toGLSL();
			if(sr.indexOf(".") > -1) {
				sb.add(dr.toGLSL() + " = 1.0 / " + sr1.toGLSL() + "; // rcp");
			} else {
				sb.add(dr.toGLSL() + " = vec4(1) / " + sr1.toGLSL() + "; // rcp");
			}
			map.addDR(dr,(openfl__$internal_formats_agal__$AGALConverter_RegisterUsage().default).VECTOR_4);
			map.addSR(sr1,(openfl__$internal_formats_agal__$AGALConverter_RegisterUsage().default).VECTOR_4);
			break;
		case 6:
			sb.add(dr.toGLSL() + " = min(" + sr1.toGLSL() + ", " + sr2.toGLSL() + "); // min");
			map.addDR(dr,(openfl__$internal_formats_agal__$AGALConverter_RegisterUsage().default).VECTOR_4);
			map.addSR(sr1,(openfl__$internal_formats_agal__$AGALConverter_RegisterUsage().default).VECTOR_4);
			map.addSR(sr2,(openfl__$internal_formats_agal__$AGALConverter_RegisterUsage().default).VECTOR_4);
			break;
		case 7:
			sb.add(dr.toGLSL() + " = max(" + sr1.toGLSL() + ", " + sr2.toGLSL() + "); // max");
			map.addDR(dr,(openfl__$internal_formats_agal__$AGALConverter_RegisterUsage().default).VECTOR_4);
			map.addSR(sr1,(openfl__$internal_formats_agal__$AGALConverter_RegisterUsage().default).VECTOR_4);
			map.addSR(sr2,(openfl__$internal_formats_agal__$AGALConverter_RegisterUsage().default).VECTOR_4);
			break;
		case 8:
			sb.add(dr.toGLSL() + " = fract(" + sr1.toGLSL() + "); // frc");
			map.addDR(dr,(openfl__$internal_formats_agal__$AGALConverter_RegisterUsage().default).VECTOR_4);
			map.addSR(sr1,(openfl__$internal_formats_agal__$AGALConverter_RegisterUsage().default).VECTOR_4);
			break;
		case 9:
			sb.add(dr.toGLSL() + " = sqrt(" + sr1.toGLSL() + "); // sqrt");
			map.addDR(dr,(openfl__$internal_formats_agal__$AGALConverter_RegisterUsage().default).VECTOR_4);
			map.addSR(sr1,(openfl__$internal_formats_agal__$AGALConverter_RegisterUsage().default).VECTOR_4);
			break;
		case 10:
			sb.add(dr.toGLSL() + " = inversesqrt(" + sr1.toGLSL() + "); // rsq");
			map.addDR(dr,(openfl__$internal_formats_agal__$AGALConverter_RegisterUsage().default).VECTOR_4);
			map.addSR(sr1,(openfl__$internal_formats_agal__$AGALConverter_RegisterUsage().default).VECTOR_4);
			break;
		case 11:
			sb.add(dr.toGLSL() + " = pow(" + sr1.toGLSL() + ", " + sr2.toGLSL() + "); // pow");
			map.addDR(dr,(openfl__$internal_formats_agal__$AGALConverter_RegisterUsage().default).VECTOR_4);
			map.addSR(sr1,(openfl__$internal_formats_agal__$AGALConverter_RegisterUsage().default).VECTOR_4);
			map.addSR(sr2,(openfl__$internal_formats_agal__$AGALConverter_RegisterUsage().default).VECTOR_4);
			break;
		case 12:
			sb.add(dr.toGLSL() + " = log2(" + sr1.toGLSL() + "); // log");
			map.addDR(dr,(openfl__$internal_formats_agal__$AGALConverter_RegisterUsage().default).VECTOR_4);
			map.addSR(sr1,(openfl__$internal_formats_agal__$AGALConverter_RegisterUsage().default).VECTOR_4);
			break;
		case 13:
			sb.add(dr.toGLSL() + " = exp2(" + sr1.toGLSL() + "); // exp");
			map.addDR(dr,(openfl__$internal_formats_agal__$AGALConverter_RegisterUsage().default).VECTOR_4);
			map.addSR(sr1,(openfl__$internal_formats_agal__$AGALConverter_RegisterUsage().default).VECTOR_4);
			break;
		case 14:
			sb.add(dr.toGLSL() + " = normalize(" + sr1.toGLSL() + "); // normalize");
			map.addDR(dr,(openfl__$internal_formats_agal__$AGALConverter_RegisterUsage().default).VECTOR_4);
			map.addSR(sr1,(openfl__$internal_formats_agal__$AGALConverter_RegisterUsage().default).VECTOR_4);
			break;
		case 15:
			sb.add(dr.toGLSL() + " = sin(" + sr1.toGLSL() + "); // sin");
			map.addDR(dr,(openfl__$internal_formats_agal__$AGALConverter_RegisterUsage().default).VECTOR_4);
			map.addSR(sr1,(openfl__$internal_formats_agal__$AGALConverter_RegisterUsage().default).VECTOR_4);
			break;
		case 16:
			sb.add(dr.toGLSL() + " = cos(" + sr1.toGLSL() + "); // cos");
			map.addDR(dr,(openfl__$internal_formats_agal__$AGALConverter_RegisterUsage().default).VECTOR_4);
			map.addSR(sr1,(openfl__$internal_formats_agal__$AGALConverter_RegisterUsage().default).VECTOR_4);
			break;
		case 17:
			sr1.sourceMask = sr2.sourceMask = 7;
			sb.add(dr.toGLSL() + " = cross(vec3(" + sr1.toGLSL() + "), vec3(" + sr2.toGLSL() + ")); // crs");
			map.addDR(dr,(openfl__$internal_formats_agal__$AGALConverter_RegisterUsage().default).VECTOR_4);
			map.addSR(sr1,(openfl__$internal_formats_agal__$AGALConverter_RegisterUsage().default).VECTOR_4);
			map.addSR(sr2,(openfl__$internal_formats_agal__$AGALConverter_RegisterUsage().default).VECTOR_4);
			break;
		case 18:
			sr1.sourceMask = sr2.sourceMask = 7;
			sb.add(dr.toGLSL() + " = vec4(dot(vec3(" + sr1.toGLSL() + "), vec3(" + sr2.toGLSL() + ")))" + dr.getWriteMask() + "; // dp3");
			map.addDR(dr,(openfl__$internal_formats_agal__$AGALConverter_RegisterUsage().default).VECTOR_4);
			map.addSR(sr1,(openfl__$internal_formats_agal__$AGALConverter_RegisterUsage().default).VECTOR_4);
			map.addSR(sr2,(openfl__$internal_formats_agal__$AGALConverter_RegisterUsage().default).VECTOR_4);
			break;
		case 19:
			sr1.sourceMask = sr2.sourceMask = 15;
			sb.add(dr.toGLSL() + " = vec4(dot(vec4(" + sr1.toGLSL() + "), vec4(" + sr2.toGLSL() + ")))" + dr.getWriteMask() + "; // dp4");
			map.addDR(dr,(openfl__$internal_formats_agal__$AGALConverter_RegisterUsage().default).VECTOR_4);
			map.addSR(sr1,(openfl__$internal_formats_agal__$AGALConverter_RegisterUsage().default).VECTOR_4);
			map.addSR(sr2,(openfl__$internal_formats_agal__$AGALConverter_RegisterUsage().default).VECTOR_4);
			break;
		case 20:
			sb.add(dr.toGLSL() + " = abs(" + sr1.toGLSL() + "); // abs");
			map.addDR(dr,(openfl__$internal_formats_agal__$AGALConverter_RegisterUsage().default).VECTOR_4);
			map.addSR(sr1,(openfl__$internal_formats_agal__$AGALConverter_RegisterUsage().default).VECTOR_4);
			break;
		case 21:
			sb.add(dr.toGLSL() + " = -" + sr1.toGLSL() + "; // neg");
			map.addDR(dr,(openfl__$internal_formats_agal__$AGALConverter_RegisterUsage().default).VECTOR_4);
			map.addSR(sr1,(openfl__$internal_formats_agal__$AGALConverter_RegisterUsage().default).VECTOR_4);
			break;
		case 22:
			sb.add(dr.toGLSL() + " = clamp(" + sr1.toGLSL() + ", 0.0, 1.0); // saturate");
			map.addDR(dr,(openfl__$internal_formats_agal__$AGALConverter_RegisterUsage().default).VECTOR_4);
			map.addSR(sr1,(openfl__$internal_formats_agal__$AGALConverter_RegisterUsage().default).VECTOR_4);
			break;
		case 23:
			var existingUsage = map.getRegisterUsage(sr2);
			if(existingUsage != (openfl__$internal_formats_agal__$AGALConverter_RegisterUsage().default).VECTOR_4 && existingUsage != (openfl__$internal_formats_agal__$AGALConverter_RegisterUsage().default).VECTOR_4_ARRAY) {
				sb.add(dr.toGLSL() + " = " + sr1.toGLSL() + " * mat3(" + sr2.toGLSL(false) + "); // m33");
				map.addDR(dr,(openfl__$internal_formats_agal__$AGALConverter_RegisterUsage().default).VECTOR_4);
				map.addSR(sr1,(openfl__$internal_formats_agal__$AGALConverter_RegisterUsage().default).VECTOR_4);
				map.addSR(sr2,(openfl__$internal_formats_agal__$AGALConverter_RegisterUsage().default).MATRIX_4_4);
			} else {
				sr1.sourceMask = sr2.sourceMask = 7;
				sb.add(dr.toGLSL() + " = vec3(" + "dot(" + sr1.toGLSL(true) + "," + sr2.toGLSL(true,0) + "), " + "dot(" + sr1.toGLSL(true) + "," + sr2.toGLSL(true,1) + ")," + "dot(" + sr1.toGLSL(true) + "," + sr2.toGLSL(true,2) + ")); // m33");
				map.addDR(dr,(openfl__$internal_formats_agal__$AGALConverter_RegisterUsage().default).VECTOR_4);
				map.addSR(sr1,(openfl__$internal_formats_agal__$AGALConverter_RegisterUsage().default).VECTOR_4);
				map.addSR(sr2,(openfl__$internal_formats_agal__$AGALConverter_RegisterUsage().default).VECTOR_4,0);
				map.addSR(sr2,(openfl__$internal_formats_agal__$AGALConverter_RegisterUsage().default).VECTOR_4,1);
				map.addSR(sr2,(openfl__$internal_formats_agal__$AGALConverter_RegisterUsage().default).VECTOR_4,2);
			}
			break;
		case 24:
			var existingUsage1 = map.getRegisterUsage(sr2);
			if(existingUsage1 != (openfl__$internal_formats_agal__$AGALConverter_RegisterUsage().default).VECTOR_4 && existingUsage1 != (openfl__$internal_formats_agal__$AGALConverter_RegisterUsage().default).VECTOR_4_ARRAY) {
				sb.add(dr.toGLSL() + " = " + sr1.toGLSL() + " * " + sr2.toGLSL(false) + "; // m44");
				map.addDR(dr,(openfl__$internal_formats_agal__$AGALConverter_RegisterUsage().default).VECTOR_4);
				map.addSR(sr1,(openfl__$internal_formats_agal__$AGALConverter_RegisterUsage().default).VECTOR_4);
				map.addSR(sr2,(openfl__$internal_formats_agal__$AGALConverter_RegisterUsage().default).MATRIX_4_4);
			} else {
				sr1.sourceMask = sr2.sourceMask = 15;
				sb.add(dr.toGLSL() + " = vec4(" + "dot(" + sr1.toGLSL(true) + "," + sr2.toGLSL(true,0) + "), " + "dot(" + sr1.toGLSL(true) + "," + sr2.toGLSL(true,1) + "), " + "dot(" + sr1.toGLSL(true) + "," + sr2.toGLSL(true,2) + "), " + "dot(" + sr1.toGLSL(true) + "," + sr2.toGLSL(true,3) + ")); // m44");
				map.addDR(dr,(openfl__$internal_formats_agal__$AGALConverter_RegisterUsage().default).VECTOR_4);
				map.addSR(sr1,(openfl__$internal_formats_agal__$AGALConverter_RegisterUsage().default).VECTOR_4);
				map.addSR(sr2,(openfl__$internal_formats_agal__$AGALConverter_RegisterUsage().default).VECTOR_4,0);
				map.addSR(sr2,(openfl__$internal_formats_agal__$AGALConverter_RegisterUsage().default).VECTOR_4,1);
				map.addSR(sr2,(openfl__$internal_formats_agal__$AGALConverter_RegisterUsage().default).VECTOR_4,2);
				map.addSR(sr2,(openfl__$internal_formats_agal__$AGALConverter_RegisterUsage().default).VECTOR_4,3);
			}
			break;
		case 25:
			dr.mask &= 7;
			var existingUsage2 = map.getRegisterUsage(sr2);
			if(existingUsage2 != (openfl__$internal_formats_agal__$AGALConverter_RegisterUsage().default).VECTOR_4 && existingUsage2 != (openfl__$internal_formats_agal__$AGALConverter_RegisterUsage().default).VECTOR_4_ARRAY) {
				sb.add(dr.toGLSL() + " = " + sr1.toGLSL() + " * " + sr2.toGLSL(false) + "; // m34");
				map.addDR(dr,(openfl__$internal_formats_agal__$AGALConverter_RegisterUsage().default).VECTOR_4);
				map.addSR(sr1,(openfl__$internal_formats_agal__$AGALConverter_RegisterUsage().default).VECTOR_4);
				map.addSR(sr2,(openfl__$internal_formats_agal__$AGALConverter_RegisterUsage().default).MATRIX_4_4);
			} else {
				sr1.sourceMask = sr2.sourceMask = 15;
				sb.add(dr.toGLSL() + " = vec3(" + "dot(" + sr1.toGLSL(true) + "," + sr2.toGLSL(true,0) + "), " + "dot(" + sr1.toGLSL(true) + "," + sr2.toGLSL(true,1) + ")," + "dot(" + sr1.toGLSL(true) + "," + sr2.toGLSL(true,2) + ")); // m34");
				map.addDR(dr,(openfl__$internal_formats_agal__$AGALConverter_RegisterUsage().default).VECTOR_4);
				map.addSR(sr1,(openfl__$internal_formats_agal__$AGALConverter_RegisterUsage().default).VECTOR_4);
				map.addSR(sr2,(openfl__$internal_formats_agal__$AGALConverter_RegisterUsage().default).VECTOR_4,0);
				map.addSR(sr2,(openfl__$internal_formats_agal__$AGALConverter_RegisterUsage().default).VECTOR_4,1);
				map.addSR(sr2,(openfl__$internal_formats_agal__$AGALConverter_RegisterUsage().default).VECTOR_4,2);
			}
			break;
		case 39:
			sr1.sourceMask = 15;
			sb.add("if (any(lessThan(" + sr1.toGLSL() + ", vec4(0)))) discard;");
			map.addSR(sr1,(openfl__$internal_formats_agal__$AGALConverter_RegisterUsage().default).VECTOR_4);
			break;
		case 40:
			var sampler = (openfl__$internal_formats_agal__$AGALConverter_SamplerRegister().default).parse(source2,programType);
			switch(sampler.d) {
			case 0:
				if(sampler.t == 2) {
					sr1.sourceMask = 3;
					map.addSaR(sampler,(openfl__$internal_formats_agal__$AGALConverter_RegisterUsage().default).SAMPLER_2D_ALPHA);
					sb.add("if (" + sampler.toGLSL() + "_alphaEnabled) {\n");
					sb.add("\t\t" + dr.toGLSL() + " = vec4(texture2D(" + sampler.toGLSL() + ", " + sr1.toGLSL() + ").xyz, texture2D(" + sampler.toGLSL() + "_alpha, " + sr1.toGLSL() + ").x); // tex + alpha\n");
					sb.add("\t} else {\n");
					sb.add("\t\t" + dr.toGLSL() + " = texture2D(" + sampler.toGLSL() + ", " + sr1.toGLSL() + "); // tex\n");
					sb.add("\t}");
				} else {
					sr1.sourceMask = 3;
					map.addSaR(sampler,(openfl__$internal_formats_agal__$AGALConverter_RegisterUsage().default).SAMPLER_2D);
					sb.add(dr.toGLSL() + " = texture2D(" + sampler.toGLSL() + ", " + sr1.toGLSL() + "); // tex");
				}
				break;
			case 1:
				if(sampler.t == 2) {
					sr1.sourceMask = 7;
					map.addSaR(sampler,(openfl__$internal_formats_agal__$AGALConverter_RegisterUsage().default).SAMPLER_CUBE_ALPHA);
					sb.add("if (" + sampler.toGLSL() + "_alphaEnabled) {\n");
					sb.add("\t\t" + dr.toGLSL() + " = vec4(textureCube(" + sampler.toGLSL() + ", " + sr1.toGLSL() + ").xyz, textureCube(" + sampler.toGLSL() + "_alpha, " + sr1.toGLSL() + ").x); // tex + alpha\n");
					sb.add("\t} else {\n");
					sb.add("\t\t" + dr.toGLSL() + " = textureCube(" + sampler.toGLSL() + ", " + sr1.toGLSL() + "); // tex");
					sb.add("\t}");
				} else {
					sr1.sourceMask = 7;
					sb.add(dr.toGLSL() + " = textureCube(" + sampler.toGLSL() + ", " + sr1.toGLSL() + "); // tex");
					map.addSaR(sampler,(openfl__$internal_formats_agal__$AGALConverter_RegisterUsage().default).SAMPLER_CUBE);
				}
				break;
			}
			map.addDR(dr,(openfl__$internal_formats_agal__$AGALConverter_RegisterUsage().default).VECTOR_4);
			map.addSR(sr1,(openfl__$internal_formats_agal__$AGALConverter_RegisterUsage().default).VECTOR_4);
			if(samplerState != null) {
				samplerState[sampler.n] = sampler.toSamplerState();
			}
			break;
		case 41:
			sr1.sourceMask = sr2.sourceMask = 15;
			sb.add(dr.toGLSL() + " = vec4(greaterThanEqual(" + sr1.toGLSL() + ", " + sr2.toGLSL() + "))" + dr.getWriteMask() + "; // ste");
			map.addDR(dr,(openfl__$internal_formats_agal__$AGALConverter_RegisterUsage().default).VECTOR_4);
			map.addSR(sr1,(openfl__$internal_formats_agal__$AGALConverter_RegisterUsage().default).VECTOR_4);
			map.addSR(sr2,(openfl__$internal_formats_agal__$AGALConverter_RegisterUsage().default).VECTOR_4);
			break;
		case 42:
			sr1.sourceMask = sr2.sourceMask = 15;
			sb.add(dr.toGLSL() + " = vec4(lessThan(" + sr1.toGLSL() + ", " + sr2.toGLSL() + "))" + dr.getWriteMask() + "; // slt");
			map.addDR(dr,(openfl__$internal_formats_agal__$AGALConverter_RegisterUsage().default).VECTOR_4);
			map.addSR(sr1,(openfl__$internal_formats_agal__$AGALConverter_RegisterUsage().default).VECTOR_4);
			map.addSR(sr2,(openfl__$internal_formats_agal__$AGALConverter_RegisterUsage().default).VECTOR_4);
			break;
		case 44:
			sr1.sourceMask = sr2.sourceMask = 15;
			sb.add(dr.toGLSL() + " = vec4(equal(" + sr1.toGLSL() + ", " + sr2.toGLSL() + "))" + dr.getWriteMask() + "; // seq");
			map.addDR(dr,(openfl__$internal_formats_agal__$AGALConverter_RegisterUsage().default).VECTOR_4);
			map.addSR(sr1,(openfl__$internal_formats_agal__$AGALConverter_RegisterUsage().default).VECTOR_4);
			map.addSR(sr2,(openfl__$internal_formats_agal__$AGALConverter_RegisterUsage().default).VECTOR_4);
			break;
		case 45:
			sr1.sourceMask = sr2.sourceMask = 15;
			sb.add(dr.toGLSL() + " = vec4(notEqual(" + sr1.toGLSL() + ", " + sr2.toGLSL() + "))" + dr.getWriteMask() + "; // sne");
			map.addDR(dr,(openfl__$internal_formats_agal__$AGALConverter_RegisterUsage().default).VECTOR_4);
			map.addSR(sr1,(openfl__$internal_formats_agal__$AGALConverter_RegisterUsage().default).VECTOR_4);
			map.addSR(sr2,(openfl__$internal_formats_agal__$AGALConverter_RegisterUsage().default).VECTOR_4);
			break;
		default:
			throw new (js__$Boot_HaxeError().default)(new (openfl_errors_IllegalOperationError().default)("Opcode " + opcode));
		}
		sb.add("\n");
	}
	if(AGALConverter.limitedProfile == null) {
		var version1 = (lime_graphics_opengl_GL().default).getParameter(7938);
		AGALConverter.limitedProfile = version1.indexOf("OpenGL ES") > -1 || version1.indexOf("WebGL") > -1;
	}
	var glsl = new (StringBuf().default)();
	glsl.add("// AGAL " + (programType == (openfl__$internal_formats_agal__$AGALConverter_ProgramType().default).VERTEX ? "vertex" : "fragment") + " shader\n");
	if(AGALConverter.limitedProfile) {
		glsl.add("#version 100\n");
		glsl.add("precision highp float;\n");
	} else {
		glsl.add("#version 120\n");
	}
	glsl.add(map.toGLSL(false));
	if(programType == (openfl__$internal_formats_agal__$AGALConverter_ProgramType().default).VERTEX) {
		glsl.add("uniform vec4 vcPositionScale;\n");
	}
	glsl.add("void main() {\n");
	glsl.add(map.toGLSL(true));
	glsl.add(sb.toString());
	if(programType == (openfl__$internal_formats_agal__$AGALConverter_ProgramType().default).VERTEX) {
		glsl.add("\tgl_Position *= vcPositionScale;\n");
	}
	glsl.add("}\n");
	return glsl.toString();
}
AGALConverter.__meta__ = { obj : { SuppressWarnings : ["checkstyle:FieldDocComment"]}}
AGALConverter.limitedProfile = true

// Export

exports.default = AGALConverter;