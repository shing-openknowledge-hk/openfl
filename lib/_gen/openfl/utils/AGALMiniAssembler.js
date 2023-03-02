// Class: openfl.utils.AGALMiniAssembler

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;
var $import = require("./../../import_stub").default;
function openfl_Lib() {return require("./../../openfl/Lib");}
function openfl_utils_ByteArrayData() {return require("./../../openfl/utils/ByteArrayData");}
function StringTools() {return require("./../../StringTools");}
function EReg() {return require("./../../EReg");}
function HxOverrides() {return require("./../../HxOverrides");}
function lime_utils_Log() {return require("./../../lime/utils/Log");}
function Std() {return require("./../../Std");}
function _$UInt_UInt_$Impl_$() {return require("./../../_UInt/UInt_Impl_");}
function openfl_utils__$ByteArray_ByteArray_$Impl_$() {return require("./../../openfl/utils/_ByteArray/ByteArray_Impl_");}
function openfl_utils__$AGALMiniAssembler_Register() {return require("./../../openfl/utils/_AGALMiniAssembler/Register");}
function haxe_ds_StringMap() {return require("./../../haxe/ds/StringMap");}
function openfl_utils__$AGALMiniAssembler_OpCode() {return require("./../../openfl/utils/_AGALMiniAssembler/OpCode");}
function openfl_utils__$AGALMiniAssembler_Sampler() {return require("./../../openfl/utils/_AGALMiniAssembler/Sampler");}

// Constructor

var AGALMiniAssembler = function(debugging) {
	if(debugging == null) {
		debugging = false;
	}
	this.debugEnabled = false;
	this.debugEnabled = debugging;
	if(!AGALMiniAssembler.initialized) {
		AGALMiniAssembler.init();
	}
}

// Meta

AGALMiniAssembler.__name__ = "openfl.utils.AGALMiniAssembler";
AGALMiniAssembler.__isInterface__ = false;
AGALMiniAssembler.prototype = {
	assemble2: function(context3D,version,vertexSource,fragmentSource) {
		var agalVertex = this.assemble("vertex",vertexSource,version);
		var agalFragment = this.assemble("fragment",fragmentSource,version);
		var program = context3D.createProgram();
		program.upload(agalVertex,agalFragment);
		return program;
	},
	assemble: function(mode,source,version,ignoreLimits) {
		if(ignoreLimits == null) {
			ignoreLimits = false;
		}
		if(version == null) {
			version = 1;
		}
		var start = (openfl_Lib().default).getTimer();
		var this1 = new (openfl_utils_ByteArrayData().default)(0);
		this.agalcode = this1;
		this.error = "";
		var isFrag = false;
		if(mode == "fragment") {
			isFrag = true;
		} else if(mode != "vertex") {
			this.error = "ERROR: mode needs to be \"" + "fragment" + "\" or \"" + "vertex" + "\" but is \"" + mode + "\".";
		}
		this.agalcode.set_endian("littleEndian");
		this.agalcode.writeByte(160);
		this.agalcode.writeUnsignedInt(version);
		this.agalcode.writeByte(161);
		this.agalcode.writeByte(isFrag ? 1 : 0);
		this.initregmap(version,ignoreLimits);
		var lines = (StringTools().default).replace(source,"\r","\n").split("\n");
		var nops = 0;
		var lng = lines.length;
		var reg1 = new (EReg().default)("<.*>","g");
		var reg2 = new (EReg().default)("([\\w\\.\\-\\+]+)","gi");
		var reg3 = new (EReg().default)("^\\w{3}","ig");
		var reg4 = new (EReg().default)("vc\\[([vofi][acostdip]?[d]?)(\\d*)?(\\.[xyzw](\\+\\d{1,3})?)?\\](\\.[xyzw]{1,4})?|([vofi][acostdip]?[d]?)(\\d*)?(\\.[xyzw]{1,4})?","gi");
		var reg5 = new (EReg().default)("\\[.*\\]","ig");
		var reg6 = new (EReg().default)("^\\b[A-Za-z]{1,3}","ig");
		var reg7 = new (EReg().default)("\\d+","");
		var reg8 = new (EReg().default)("(\\.[xyzw]{1,4})","");
		var reg9 = new (EReg().default)("[A-Za-z]{1,3}","ig");
		var reg10 = new (EReg().default)("(\\.[xyzw]{1,1})","");
		var reg11 = new (EReg().default)("\\+\\d{1,3}","ig");
		var i = 0;
		while(i < lng && this.error == "") {
			var line = (StringTools().default).trim(lines[i]);
			var startcomment = line.indexOf("//");
			if(startcomment != -1) {
				line = (HxOverrides().default).substr(line,0,startcomment);
			}
			var optsi = reg1.match(line) ? reg1.matchedPos().pos : -1;
			var opts = null;
			if(optsi != -1) {
				opts = this.match((HxOverrides().default).substr(line,optsi,null),reg2);
				line = (HxOverrides().default).substr(line,0,optsi);
			}
			var opCode = null;
			var opFound = null;
			if(reg3.match(line)) {
				opCode = reg3.matched(0);
				opFound = AGALMiniAssembler.OPMAP.get(opCode);
			}
			if(opFound == null) {
				if(line.length >= 3) {
					(lime_utils_Log().default).warn("warning: bad line " + i + ": " + lines[i],{ fileName : "../src/openfl/utils/AGALMiniAssembler.hx", lineNumber : 262, className : "openfl.utils.AGALMiniAssembler", methodName : "assemble"});
				}
				++i;
				continue;
			}
			if(this.debugEnabled) {
				(lime_utils_Log().default).info(opFound,{ fileName : "../src/openfl/utils/AGALMiniAssembler.hx", lineNumber : 272, className : "openfl.utils.AGALMiniAssembler", methodName : "assemble"});
			}
			if(opFound == null) {
				if(line.length >= 3) {
					(lime_utils_Log().default).warn("warning: bad line " + i + ": " + lines[i],{ fileName : "../src/openfl/utils/AGALMiniAssembler.hx", lineNumber : 279, className : "openfl.utils.AGALMiniAssembler", methodName : "assemble"});
				}
				++i;
				continue;
			}
			line = (HxOverrides().default).substr(line,line.indexOf(opFound.name) + opFound.name.length,null);
			if((opFound.flags & 256) != 0 && version < 2) {
				this.error = "error: opcode requires version 2.";
				break;
			}
			if((opFound.flags & 64) != 0 && isFrag) {
				this.error = "error: opcode is only allowed in vertex programs.";
				break;
			}
			if((opFound.flags & 32) != 0 && !isFrag) {
				this.error = "error: opcode is only allowed in fragment programs.";
				break;
			}
			if(this.verbose) {
				(lime_utils_Log().default).info("emit opcode=" + (Std().default).string(opFound),{ fileName : "../src/openfl/utils/AGALMiniAssembler.hx", lineNumber : 308, className : "openfl.utils.AGALMiniAssembler", methodName : "assemble"});
			}
			this.agalcode.writeUnsignedInt(opFound.emitCode);
			++nops;
			if(nops > 4096) {
				this.error = "error: too many opcodes. maximum is " + 4096 + ".";
				break;
			}
			var regs = this.match(line,reg4);
			if(regs.length != opFound.numRegister) {
				this.error = "error: wrong number of operands. found " + regs.length + " but expected " + opFound.numRegister + ".";
				break;
			}
			var badreg = false;
			var pad = 160;
			var regLength = regs.length;
			var _g = 0;
			var _g1 = regLength;
			while(_g < _g1) {
				var j = _g++;
				var isRelative = false;
				var relreg = this.match(regs[j],reg5);
				if(relreg.length > 0) {
					regs[j] = (StringTools().default).replace(regs[j],relreg[0],"0");
					if(this.verbose) {
						(lime_utils_Log().default).info("IS REL",{ fileName : "../src/openfl/utils/AGALMiniAssembler.hx", lineNumber : 344, className : "openfl.utils.AGALMiniAssembler", methodName : "assemble"});
					}
					isRelative = true;
				}
				var res = this.match(regs[j],reg6);
				if(res.length == 0) {
					this.error = "error: could not parse operand " + j + " (" + regs[j] + ").";
					badreg = true;
					break;
				}
				var regFound = AGALMiniAssembler.REGMAP.get(res[0]);
				if(this.debugEnabled) {
					(lime_utils_Log().default).info(regFound,{ fileName : "../src/openfl/utils/AGALMiniAssembler.hx", lineNumber : 363, className : "openfl.utils.AGALMiniAssembler", methodName : "assemble"});
				}
				if(regFound == null) {
					this.error = "error: could not find register name for operand " + j + " (" + regs[j] + ").";
					badreg = true;
					break;
				}
				if(isFrag) {
					if((regFound.flags & 32) == 0) {
						this.error = "error: register operand " + j + " (" + regs[j] + ") only allowed in vertex programs.";
						badreg = true;
						break;
					}
					if(isRelative) {
						this.error = "error: register operand " + j + " (" + regs[j] + ") relative adressing not allowed in fragment programs.";
						badreg = true;
						break;
					}
				} else if((regFound.flags & 64) == 0) {
					this.error = "error: register operand " + j + " (" + regs[j] + ") only allowed in fragment programs.";
					badreg = true;
					break;
				}
				regs[j] = (HxOverrides().default).substr(regs[j],regs[j].indexOf(regFound.name) + regFound.name.length,null);
				var idxmatch = isRelative ? this.match(relreg[0],reg7) : this.match(regs[j],reg7);
				var regidx = 0;
				if(idxmatch.length > 0) {
					regidx = (Std().default).parseInt(idxmatch[0]);
				}
				if((_$UInt_UInt_$Impl_$().default).gt(regidx,regFound.range)) {
					var this2 = regFound.range + 1;
					this.error = "error: register operand " + j + " (" + regs[j] + ") index exceeds limit of " + (Std().default).string(this2 == null ? null : (_$UInt_UInt_$Impl_$().default).toFloat(this2)) + ".";
					badreg = true;
					break;
				}
				var regmask = 0;
				var maskmatch = this.match(regs[j],reg8);
				var isDest = j == 0 && (opFound.flags & 128) == 0;
				var isSampler = j == 2 && (opFound.flags & 8) != 0;
				var reltype = 0;
				var relsel = 0;
				var reloffset = 0;
				if(isDest && isRelative) {
					this.error = "error: relative can not be destination";
					badreg = true;
					break;
				}
				if(maskmatch.length > 0) {
					regmask = 0;
					var cv = 0;
					var maskLength = maskmatch[0].length;
					var k = 1;
					while(k < maskLength) {
						cv = (HxOverrides().default).cca(maskmatch[0],k) - 120;
						if((_$UInt_UInt_$Impl_$().default).gt(cv,2)) {
							cv = 3;
						}
						if(isDest) {
							regmask |= 1 << cv;
						} else {
							regmask = regmask | cv << (k - 1 << 1);
						}
						++k;
					}
					if(!isDest) {
						while(k <= 4) {
							regmask = regmask | cv << (k - 1 << 1);
							++k;
						}
					}
				} else {
					regmask = isDest ? 15 : 228;
				}
				if(isRelative) {
					var relname = this.match(relreg[0],reg9);
					var regFoundRel = AGALMiniAssembler.REGMAP.get(relname[0]);
					if(regFoundRel == null) {
						this.error = "error: bad index register";
						badreg = true;
						break;
					}
					reltype = regFoundRel.emitCode;
					var selmatch = this.match(relreg[0],reg10);
					if(selmatch.length == 0) {
						this.error = "error: bad index register select";
						badreg = true;
						break;
					}
					relsel = (HxOverrides().default).cca(selmatch[0],1) - 120;
					if((_$UInt_UInt_$Impl_$().default).gt(relsel,2)) {
						relsel = 3;
					}
					var relofs = this.match(relreg[0],reg11);
					if(relofs.length > 0) {
						reloffset = (Std().default).parseInt(relofs[0]);
					}
					if(reloffset < 0 || reloffset > 255) {
						this.error = "error: index offset " + reloffset + " out of bounds. [0..255]";
						badreg = true;
						break;
					}
					if(this.verbose) {
						(lime_utils_Log().default).info("RELATIVE: type=" + reltype + "==" + relname[0] + " sel=" + (Std().default).string(relsel == null ? null : (_$UInt_UInt_$Impl_$().default).toFloat(relsel)) + "==" + selmatch[0] + " idx=" + (Std().default).string(regidx == null ? null : (_$UInt_UInt_$Impl_$().default).toFloat(regidx)) + " offset=" + reloffset,{ fileName : "../src/openfl/utils/AGALMiniAssembler.hx", lineNumber : 518, className : "openfl.utils.AGALMiniAssembler", methodName : "assemble"});
					}
				}
				if(this.verbose) {
					(lime_utils_Log().default).info("  emit argcode=" + (Std().default).string(regFound) + "[" + (Std().default).string(regidx == null ? null : (_$UInt_UInt_$Impl_$().default).toFloat(regidx)) + "][" + regmask + "]",{ fileName : "../src/openfl/utils/AGALMiniAssembler.hx", lineNumber : 525, className : "openfl.utils.AGALMiniAssembler", methodName : "assemble"});
				}
				if(isDest) {
					this.agalcode.writeShort(regidx);
					this.agalcode.writeByte(regmask);
					this.agalcode.writeByte(regFound.emitCode);
					pad -= 32;
				} else if(isSampler) {
					if(this.verbose) {
						(lime_utils_Log().default).info("  emit sampler",{ fileName : "../src/openfl/utils/AGALMiniAssembler.hx", lineNumber : 541, className : "openfl.utils.AGALMiniAssembler", methodName : "assemble"});
					}
					var samplerbits = 5;
					var optsLength = opts == null ? 0 : opts.length;
					var bias = 0.0;
					var _g2 = 0;
					var _g11 = optsLength;
					while(_g2 < _g11) {
						var k1 = _g2++;
						if(this.verbose) {
							(lime_utils_Log().default).info("    opt: " + opts[k1],{ fileName : "../src/openfl/utils/AGALMiniAssembler.hx", lineNumber : 552, className : "openfl.utils.AGALMiniAssembler", methodName : "assemble"});
						}
						var optfound = AGALMiniAssembler.SAMPLEMAP.get(opts[k1]);
						if(optfound == null) {
							bias = (Std().default).parseFloat(opts[k1]);
							if(this.verbose) {
								(lime_utils_Log().default).info("    bias: " + bias,{ fileName : "../src/openfl/utils/AGALMiniAssembler.hx", lineNumber : 565, className : "openfl.utils.AGALMiniAssembler", methodName : "assemble"});
							}
						} else {
							if(optfound.flag != 16) {
								samplerbits &= ~(15 << optfound.flag);
							}
							samplerbits = samplerbits | optfound.mask << optfound.flag;
						}
					}
					this.agalcode.writeShort(regidx);
					this.agalcode.writeByte((Std().default).int(bias * 8.0));
					this.agalcode.writeByte(0);
					this.agalcode.writeUnsignedInt(samplerbits);
					if(this.verbose) {
						(lime_utils_Log().default).info("    bits: " + (samplerbits - 5),{ fileName : "../src/openfl/utils/AGALMiniAssembler.hx", lineNumber : 586, className : "openfl.utils.AGALMiniAssembler", methodName : "assemble"});
					}
					pad -= 64;
				} else {
					if(j == 0) {
						this.agalcode.writeUnsignedInt(0);
						pad -= 32;
					}
					this.agalcode.writeShort(regidx);
					this.agalcode.writeByte(reloffset);
					this.agalcode.writeByte(regmask);
					this.agalcode.writeByte(regFound.emitCode);
					this.agalcode.writeByte(reltype);
					this.agalcode.writeShort(isRelative ? relsel | 32768 : 0);
					pad -= 64;
				}
			}
			var j1 = 0;
			while(j1 < pad) {
				this.agalcode.writeByte(0);
				j1 += 8;
			}
			if(badreg) {
				break;
			}
			++i;
		}
		if(this.error != "") {
			this.error += "\n  at line " + i + " " + lines[i];
			(openfl_utils__$ByteArray_ByteArray_$Impl_$().default).set_length(this.agalcode,0);
			(lime_utils_Log().default).info(this.error,{ fileName : "../src/openfl/utils/AGALMiniAssembler.hx", lineNumber : 631, className : "openfl.utils.AGALMiniAssembler", methodName : "assemble"});
		}
		if(this.debugEnabled) {
			var dbgLine = "generated bytecode:";
			var agalLength = (openfl_utils__$ByteArray_ByteArray_$Impl_$().default).get_length(this.agalcode);
			var _g3 = 0;
			var _g12 = agalLength;
			while(_g3 < _g12) {
				var index = _g3++;
				if(index % 16 == 0) {
					dbgLine += "\n";
				}
				if(index % 4 == 0) {
					dbgLine += " ";
				}
				var byteStr = (StringTools().default).hex(this.agalcode.get(index),2);
				if(byteStr.length < 2) {
					byteStr = "0" + byteStr;
				}
				dbgLine += byteStr;
			}
			(lime_utils_Log().default).info(dbgLine,{ fileName : "../src/openfl/utils/AGALMiniAssembler.hx", lineNumber : 662, className : "openfl.utils.AGALMiniAssembler", methodName : "assemble"});
		}
		if(this.verbose) {
			(lime_utils_Log().default).info("AGALMiniAssembler.assemble time: " + ((openfl_Lib().default).getTimer() - start) / 1000 + "s",{ fileName : "../src/openfl/utils/AGALMiniAssembler.hx", lineNumber : 667, className : "openfl.utils.AGALMiniAssembler", methodName : "assemble"});
		}
		return this.agalcode;
	},
	initregmap: function(version,ignorelimits) {
		var this1 = AGALMiniAssembler.REGMAP;
		var v = new (openfl_utils__$AGALMiniAssembler_Register().default)("va","vertex attribute",0,ignorelimits ? 1024 : version == 1 || version == 2 ? 7 : 15,66);
		this1.set("va",v);
		var this2 = AGALMiniAssembler.REGMAP;
		var v1 = new (openfl_utils__$AGALMiniAssembler_Register().default)("vc","vertex constant",1,ignorelimits ? 1024 : version == 1 ? 127 : 249,66);
		this2.set("vc",v1);
		var this3 = AGALMiniAssembler.REGMAP;
		var v2 = new (openfl_utils__$AGALMiniAssembler_Register().default)("vt","vertex temporary",2,ignorelimits ? 1024 : version == 1 ? 7 : 25,67);
		this3.set("vt",v2);
		var this4 = AGALMiniAssembler.REGMAP;
		var v3 = new (openfl_utils__$AGALMiniAssembler_Register().default)("vo","vertex output",3,ignorelimits ? 1024 : 0,65);
		this4.set("vo",v3);
		var this5 = AGALMiniAssembler.REGMAP;
		var v4 = new (openfl_utils__$AGALMiniAssembler_Register().default)("vi","varying",4,ignorelimits ? 1024 : version == 1 ? 7 : 9,99);
		this5.set("vi",v4);
		var this6 = AGALMiniAssembler.REGMAP;
		var v5 = new (openfl_utils__$AGALMiniAssembler_Register().default)("fc","fragment constant",1,ignorelimits ? 1024 : version == 1 ? 27 : version == 2 ? 63 : 199,34);
		this6.set("fc",v5);
		var this7 = AGALMiniAssembler.REGMAP;
		var v6 = new (openfl_utils__$AGALMiniAssembler_Register().default)("ft","fragment temporary",2,ignorelimits ? 1024 : version == 1 ? 7 : 25,35);
		this7.set("ft",v6);
		var this8 = AGALMiniAssembler.REGMAP;
		var v7 = new (openfl_utils__$AGALMiniAssembler_Register().default)("fs","texture sampler",5,ignorelimits ? 1024 : 7,34);
		this8.set("fs",v7);
		var this9 = AGALMiniAssembler.REGMAP;
		var v8 = new (openfl_utils__$AGALMiniAssembler_Register().default)("fo","fragment output",3,ignorelimits ? 1024 : version == 1 ? 0 : 3,33);
		this9.set("fo",v8);
		var this10 = AGALMiniAssembler.REGMAP;
		var v9 = new (openfl_utils__$AGALMiniAssembler_Register().default)("fd","fragment depth output",6,ignorelimits ? 1024 : version == 1 ? -1 : 0,33);
		this10.set("fd",v9);
		var this11 = AGALMiniAssembler.REGMAP;
		var v10 = new (openfl_utils__$AGALMiniAssembler_Register().default)("iid","instance id",7,ignorelimits ? 1024 : 0,66);
		this11.set("iid",v10);
		var this12 = AGALMiniAssembler.REGMAP;
		var v11 = AGALMiniAssembler.REGMAP.get("vo");
		this12.set("op",v11);
		var this13 = AGALMiniAssembler.REGMAP;
		var v12 = AGALMiniAssembler.REGMAP.get("vi");
		this13.set("i",v12);
		var this14 = AGALMiniAssembler.REGMAP;
		var v13 = AGALMiniAssembler.REGMAP.get("vi");
		this14.set("v",v13);
		var this15 = AGALMiniAssembler.REGMAP;
		var v14 = AGALMiniAssembler.REGMAP.get("fo");
		this15.set("oc",v14);
		var this16 = AGALMiniAssembler.REGMAP;
		var v15 = AGALMiniAssembler.REGMAP.get("fd");
		this16.set("od",v15);
		var this17 = AGALMiniAssembler.REGMAP;
		var v16 = AGALMiniAssembler.REGMAP.get("vi");
		this17.set("fi",v16);
	},
	match: function(value,reg) {
		var matches = [];
		var index = 0;
		var match;
		while(reg.matchSub(value,index)) {
			match = reg.matched(0);
			matches.push(match);
			index = reg.matchedPos().pos + match.length;
		}
		return matches;
	}
};
AGALMiniAssembler.prototype.__class__ = AGALMiniAssembler.prototype.constructor = $hxClasses["openfl.utils.AGALMiniAssembler"] = AGALMiniAssembler;

// Init



// Statics

AGALMiniAssembler.init = function() {
	AGALMiniAssembler.initialized = true;
	var this1 = AGALMiniAssembler.OPMAP;
	var v = new (openfl_utils__$AGALMiniAssembler_OpCode().default)("mov",2,0,0);
	this1.set("mov",v);
	var this2 = AGALMiniAssembler.OPMAP;
	var v1 = new (openfl_utils__$AGALMiniAssembler_OpCode().default)("add",3,1,0);
	this2.set("add",v1);
	var this3 = AGALMiniAssembler.OPMAP;
	var v2 = new (openfl_utils__$AGALMiniAssembler_OpCode().default)("sub",3,2,0);
	this3.set("sub",v2);
	var this4 = AGALMiniAssembler.OPMAP;
	var v3 = new (openfl_utils__$AGALMiniAssembler_OpCode().default)("mul",3,3,0);
	this4.set("mul",v3);
	var this5 = AGALMiniAssembler.OPMAP;
	var v4 = new (openfl_utils__$AGALMiniAssembler_OpCode().default)("div",3,4,0);
	this5.set("div",v4);
	var this6 = AGALMiniAssembler.OPMAP;
	var v5 = new (openfl_utils__$AGALMiniAssembler_OpCode().default)("rcp",2,5,0);
	this6.set("rcp",v5);
	var this7 = AGALMiniAssembler.OPMAP;
	var v6 = new (openfl_utils__$AGALMiniAssembler_OpCode().default)("min",3,6,0);
	this7.set("min",v6);
	var this8 = AGALMiniAssembler.OPMAP;
	var v7 = new (openfl_utils__$AGALMiniAssembler_OpCode().default)("max",3,7,0);
	this8.set("max",v7);
	var this9 = AGALMiniAssembler.OPMAP;
	var v8 = new (openfl_utils__$AGALMiniAssembler_OpCode().default)("frc",2,8,0);
	this9.set("frc",v8);
	var this10 = AGALMiniAssembler.OPMAP;
	var v9 = new (openfl_utils__$AGALMiniAssembler_OpCode().default)("sqt",2,9,0);
	this10.set("sqt",v9);
	var this11 = AGALMiniAssembler.OPMAP;
	var v10 = new (openfl_utils__$AGALMiniAssembler_OpCode().default)("rsq",2,10,0);
	this11.set("rsq",v10);
	var this12 = AGALMiniAssembler.OPMAP;
	var v11 = new (openfl_utils__$AGALMiniAssembler_OpCode().default)("pow",3,11,0);
	this12.set("pow",v11);
	var this13 = AGALMiniAssembler.OPMAP;
	var v12 = new (openfl_utils__$AGALMiniAssembler_OpCode().default)("log",2,12,0);
	this13.set("log",v12);
	var this14 = AGALMiniAssembler.OPMAP;
	var v13 = new (openfl_utils__$AGALMiniAssembler_OpCode().default)("exp",2,13,0);
	this14.set("exp",v13);
	var this15 = AGALMiniAssembler.OPMAP;
	var v14 = new (openfl_utils__$AGALMiniAssembler_OpCode().default)("nrm",2,14,0);
	this15.set("nrm",v14);
	var this16 = AGALMiniAssembler.OPMAP;
	var v15 = new (openfl_utils__$AGALMiniAssembler_OpCode().default)("sin",2,15,0);
	this16.set("sin",v15);
	var this17 = AGALMiniAssembler.OPMAP;
	var v16 = new (openfl_utils__$AGALMiniAssembler_OpCode().default)("cos",2,16,0);
	this17.set("cos",v16);
	var this18 = AGALMiniAssembler.OPMAP;
	var v17 = new (openfl_utils__$AGALMiniAssembler_OpCode().default)("crs",3,17,0);
	this18.set("crs",v17);
	var this19 = AGALMiniAssembler.OPMAP;
	var v18 = new (openfl_utils__$AGALMiniAssembler_OpCode().default)("dp3",3,18,0);
	this19.set("dp3",v18);
	var this20 = AGALMiniAssembler.OPMAP;
	var v19 = new (openfl_utils__$AGALMiniAssembler_OpCode().default)("dp4",3,19,0);
	this20.set("dp4",v19);
	var this21 = AGALMiniAssembler.OPMAP;
	var v20 = new (openfl_utils__$AGALMiniAssembler_OpCode().default)("abs",2,20,0);
	this21.set("abs",v20);
	var this22 = AGALMiniAssembler.OPMAP;
	var v21 = new (openfl_utils__$AGALMiniAssembler_OpCode().default)("neg",2,21,0);
	this22.set("neg",v21);
	var this23 = AGALMiniAssembler.OPMAP;
	var v22 = new (openfl_utils__$AGALMiniAssembler_OpCode().default)("sat",2,22,0);
	this23.set("sat",v22);
	var this24 = AGALMiniAssembler.OPMAP;
	var v23 = new (openfl_utils__$AGALMiniAssembler_OpCode().default)("m33",3,23,16);
	this24.set("m33",v23);
	var this25 = AGALMiniAssembler.OPMAP;
	var v24 = new (openfl_utils__$AGALMiniAssembler_OpCode().default)("m44",3,24,16);
	this25.set("m44",v24);
	var this26 = AGALMiniAssembler.OPMAP;
	var v25 = new (openfl_utils__$AGALMiniAssembler_OpCode().default)("m34",3,25,16);
	this26.set("m34",v25);
	var this27 = AGALMiniAssembler.OPMAP;
	var v26 = new (openfl_utils__$AGALMiniAssembler_OpCode().default)("ddx",2,26,288);
	this27.set("ddx",v26);
	var this28 = AGALMiniAssembler.OPMAP;
	var v27 = new (openfl_utils__$AGALMiniAssembler_OpCode().default)("ddy",2,27,288);
	this28.set("ddy",v27);
	var this29 = AGALMiniAssembler.OPMAP;
	var v28 = new (openfl_utils__$AGALMiniAssembler_OpCode().default)("ife",2,28,897);
	this29.set("ife",v28);
	var this30 = AGALMiniAssembler.OPMAP;
	var v29 = new (openfl_utils__$AGALMiniAssembler_OpCode().default)("ine",2,29,897);
	this30.set("ine",v29);
	var this31 = AGALMiniAssembler.OPMAP;
	var v30 = new (openfl_utils__$AGALMiniAssembler_OpCode().default)("ifg",2,30,897);
	this31.set("ifg",v30);
	var this32 = AGALMiniAssembler.OPMAP;
	var v31 = new (openfl_utils__$AGALMiniAssembler_OpCode().default)("ifl",2,31,897);
	this32.set("ifl",v31);
	var this33 = AGALMiniAssembler.OPMAP;
	var v32 = new (openfl_utils__$AGALMiniAssembler_OpCode().default)("els",0,32,1921);
	this33.set("els",v32);
	var this34 = AGALMiniAssembler.OPMAP;
	var v33 = new (openfl_utils__$AGALMiniAssembler_OpCode().default)("eif",0,33,1409);
	this34.set("eif",v33);
	var this35 = AGALMiniAssembler.OPMAP;
	var v34 = new (openfl_utils__$AGALMiniAssembler_OpCode().default)("kil",1,39,160);
	this35.set("kil",v34);
	var this36 = AGALMiniAssembler.OPMAP;
	var v35 = new (openfl_utils__$AGALMiniAssembler_OpCode().default)("tex",3,40,40);
	this36.set("tex",v35);
	var this37 = AGALMiniAssembler.OPMAP;
	var v36 = new (openfl_utils__$AGALMiniAssembler_OpCode().default)("sge",3,41,0);
	this37.set("sge",v36);
	var this38 = AGALMiniAssembler.OPMAP;
	var v37 = new (openfl_utils__$AGALMiniAssembler_OpCode().default)("slt",3,42,0);
	this38.set("slt",v37);
	var this39 = AGALMiniAssembler.OPMAP;
	var v38 = new (openfl_utils__$AGALMiniAssembler_OpCode().default)("sgn",2,43,0);
	this39.set("sgn",v38);
	var this40 = AGALMiniAssembler.OPMAP;
	var v39 = new (openfl_utils__$AGALMiniAssembler_OpCode().default)("seq",3,44,0);
	this40.set("seq",v39);
	var this41 = AGALMiniAssembler.OPMAP;
	var v40 = new (openfl_utils__$AGALMiniAssembler_OpCode().default)("sne",3,45,0);
	this41.set("sne",v40);
	var this42 = AGALMiniAssembler.SAMPLEMAP;
	var v41 = new (openfl_utils__$AGALMiniAssembler_Sampler().default)("rgba",8,0);
	this42.set("rgba",v41);
	var this43 = AGALMiniAssembler.SAMPLEMAP;
	var v42 = new (openfl_utils__$AGALMiniAssembler_Sampler().default)("compressed",8,1);
	this43.set("compressed",v42);
	var this44 = AGALMiniAssembler.SAMPLEMAP;
	var v43 = new (openfl_utils__$AGALMiniAssembler_Sampler().default)("compressedalpha",8,2);
	this44.set("compressedalpha",v43);
	var this45 = AGALMiniAssembler.SAMPLEMAP;
	var v44 = new (openfl_utils__$AGALMiniAssembler_Sampler().default)("dxt1",8,1);
	this45.set("dxt1",v44);
	var this46 = AGALMiniAssembler.SAMPLEMAP;
	var v45 = new (openfl_utils__$AGALMiniAssembler_Sampler().default)("dxt5",8,2);
	this46.set("dxt5",v45);
	var this47 = AGALMiniAssembler.SAMPLEMAP;
	var v46 = new (openfl_utils__$AGALMiniAssembler_Sampler().default)("video",8,3);
	this47.set("video",v46);
	var this48 = AGALMiniAssembler.SAMPLEMAP;
	var v47 = new (openfl_utils__$AGALMiniAssembler_Sampler().default)("2d",12,0);
	this48.set("2d",v47);
	var this49 = AGALMiniAssembler.SAMPLEMAP;
	var v48 = new (openfl_utils__$AGALMiniAssembler_Sampler().default)("3d",12,2);
	this49.set("3d",v48);
	var this50 = AGALMiniAssembler.SAMPLEMAP;
	var v49 = new (openfl_utils__$AGALMiniAssembler_Sampler().default)("cube",12,1);
	this50.set("cube",v49);
	var this51 = AGALMiniAssembler.SAMPLEMAP;
	var v50 = new (openfl_utils__$AGALMiniAssembler_Sampler().default)("mipnearest",24,1);
	this51.set("mipnearest",v50);
	var this52 = AGALMiniAssembler.SAMPLEMAP;
	var v51 = new (openfl_utils__$AGALMiniAssembler_Sampler().default)("miplinear",24,2);
	this52.set("miplinear",v51);
	var this53 = AGALMiniAssembler.SAMPLEMAP;
	var v52 = new (openfl_utils__$AGALMiniAssembler_Sampler().default)("mipnone",24,0);
	this53.set("mipnone",v52);
	var this54 = AGALMiniAssembler.SAMPLEMAP;
	var v53 = new (openfl_utils__$AGALMiniAssembler_Sampler().default)("nomip",24,0);
	this54.set("nomip",v53);
	var this55 = AGALMiniAssembler.SAMPLEMAP;
	var v54 = new (openfl_utils__$AGALMiniAssembler_Sampler().default)("nearest",28,0);
	this55.set("nearest",v54);
	var this56 = AGALMiniAssembler.SAMPLEMAP;
	var v55 = new (openfl_utils__$AGALMiniAssembler_Sampler().default)("linear",28,1);
	this56.set("linear",v55);
	var this57 = AGALMiniAssembler.SAMPLEMAP;
	var v56 = new (openfl_utils__$AGALMiniAssembler_Sampler().default)("anisotropic2x",28,2);
	this57.set("anisotropic2x",v56);
	var this58 = AGALMiniAssembler.SAMPLEMAP;
	var v57 = new (openfl_utils__$AGALMiniAssembler_Sampler().default)("anisotropic4x",28,3);
	this58.set("anisotropic4x",v57);
	var this59 = AGALMiniAssembler.SAMPLEMAP;
	var v58 = new (openfl_utils__$AGALMiniAssembler_Sampler().default)("anisotropic8x",28,4);
	this59.set("anisotropic8x",v58);
	var this60 = AGALMiniAssembler.SAMPLEMAP;
	var v59 = new (openfl_utils__$AGALMiniAssembler_Sampler().default)("anisotropic16x",28,5);
	this60.set("anisotropic16x",v59);
	var this61 = AGALMiniAssembler.SAMPLEMAP;
	var v60 = new (openfl_utils__$AGALMiniAssembler_Sampler().default)("centroid",16,1);
	this61.set("centroid",v60);
	var this62 = AGALMiniAssembler.SAMPLEMAP;
	var v61 = new (openfl_utils__$AGALMiniAssembler_Sampler().default)("single",16,2);
	this62.set("single",v61);
	var this63 = AGALMiniAssembler.SAMPLEMAP;
	var v62 = new (openfl_utils__$AGALMiniAssembler_Sampler().default)("ignoresampler",16,4);
	this63.set("ignoresampler",v62);
	var this64 = AGALMiniAssembler.SAMPLEMAP;
	var v63 = new (openfl_utils__$AGALMiniAssembler_Sampler().default)("repeat",20,1);
	this64.set("repeat",v63);
	var this65 = AGALMiniAssembler.SAMPLEMAP;
	var v64 = new (openfl_utils__$AGALMiniAssembler_Sampler().default)("wrap",20,1);
	this65.set("wrap",v64);
	var this66 = AGALMiniAssembler.SAMPLEMAP;
	var v65 = new (openfl_utils__$AGALMiniAssembler_Sampler().default)("clamp",20,0);
	this66.set("clamp",v65);
	var this67 = AGALMiniAssembler.SAMPLEMAP;
	var v66 = new (openfl_utils__$AGALMiniAssembler_Sampler().default)("clamp_u_repeat_v",20,2);
	this67.set("clamp_u_repeat_v",v66);
	var this68 = AGALMiniAssembler.SAMPLEMAP;
	var v67 = new (openfl_utils__$AGALMiniAssembler_Sampler().default)("repeat_u_clamp_v",20,3);
	this68.set("repeat_u_clamp_v",v67);
}
AGALMiniAssembler.__meta__ = { obj : { SuppressWarnings : [["checkstyle:ConstantName","checkstyle:FieldDocComment"]]}}
AGALMiniAssembler.OPMAP = new (haxe_ds_StringMap().default)()
AGALMiniAssembler.REGMAP = new (haxe_ds_StringMap().default)()
AGALMiniAssembler.SAMPLEMAP = new (haxe_ds_StringMap().default)()
AGALMiniAssembler.MAX_NESTING = 4
AGALMiniAssembler.MAX_OPCODES = 4096
AGALMiniAssembler.FRAGMENT = "fragment"
AGALMiniAssembler.VERTEX = "vertex"
AGALMiniAssembler.SAMPLER_TYPE_SHIFT = 8
AGALMiniAssembler.SAMPLER_DIM_SHIFT = 12
AGALMiniAssembler.SAMPLER_SPECIAL_SHIFT = 16
AGALMiniAssembler.SAMPLER_REPEAT_SHIFT = 20
AGALMiniAssembler.SAMPLER_MIPMAP_SHIFT = 24
AGALMiniAssembler.SAMPLER_FILTER_SHIFT = 28
AGALMiniAssembler.REG_WRITE = 1
AGALMiniAssembler.REG_READ = 2
AGALMiniAssembler.REG_FRAG = 32
AGALMiniAssembler.REG_VERT = 64
AGALMiniAssembler.OP_SCALAR = 1
AGALMiniAssembler.OP_SPECIAL_TEX = 8
AGALMiniAssembler.OP_SPECIAL_MATRIX = 16
AGALMiniAssembler.OP_FRAG_ONLY = 32
AGALMiniAssembler.OP_VERT_ONLY = 64
AGALMiniAssembler.OP_NO_DEST = 128
AGALMiniAssembler.OP_VERSION2 = 256
AGALMiniAssembler.OP_INCNEST = 512
AGALMiniAssembler.OP_DECNEST = 1024
AGALMiniAssembler.MOV = "mov"
AGALMiniAssembler.ADD = "add"
AGALMiniAssembler.SUB = "sub"
AGALMiniAssembler.MUL = "mul"
AGALMiniAssembler.DIV = "div"
AGALMiniAssembler.RCP = "rcp"
AGALMiniAssembler.MIN = "min"
AGALMiniAssembler.MAX = "max"
AGALMiniAssembler.FRC = "frc"
AGALMiniAssembler.SQT = "sqt"
AGALMiniAssembler.RSQ = "rsq"
AGALMiniAssembler.POW = "pow"
AGALMiniAssembler.LOG = "log"
AGALMiniAssembler.EXP = "exp"
AGALMiniAssembler.NRM = "nrm"
AGALMiniAssembler.SIN = "sin"
AGALMiniAssembler.COS = "cos"
AGALMiniAssembler.CRS = "crs"
AGALMiniAssembler.DP3 = "dp3"
AGALMiniAssembler.DP4 = "dp4"
AGALMiniAssembler.ABS = "abs"
AGALMiniAssembler.NEG = "neg"
AGALMiniAssembler.SAT = "sat"
AGALMiniAssembler.M33 = "m33"
AGALMiniAssembler.M44 = "m44"
AGALMiniAssembler.M34 = "m34"
AGALMiniAssembler.DDX = "ddx"
AGALMiniAssembler.DDY = "ddy"
AGALMiniAssembler.IFE = "ife"
AGALMiniAssembler.INE = "ine"
AGALMiniAssembler.IFG = "ifg"
AGALMiniAssembler.IFL = "ifl"
AGALMiniAssembler.IEG = "ieg"
AGALMiniAssembler.IEL = "iel"
AGALMiniAssembler.ELS = "els"
AGALMiniAssembler.EIF = "eif"
AGALMiniAssembler.TED = "ted"
AGALMiniAssembler.KIL = "kil"
AGALMiniAssembler.TEX = "tex"
AGALMiniAssembler.SGE = "sge"
AGALMiniAssembler.SLT = "slt"
AGALMiniAssembler.SGN = "sgn"
AGALMiniAssembler.SEQ = "seq"
AGALMiniAssembler.SNE = "sne"
AGALMiniAssembler.VA = "va"
AGALMiniAssembler.VC = "vc"
AGALMiniAssembler.VT = "vt"
AGALMiniAssembler.VO = "vo"
AGALMiniAssembler.VI = "vi"
AGALMiniAssembler.FC = "fc"
AGALMiniAssembler.FT = "ft"
AGALMiniAssembler.FS = "fs"
AGALMiniAssembler.FO = "fo"
AGALMiniAssembler.FD = "fd"
AGALMiniAssembler.IID = "iid"
AGALMiniAssembler.D2 = "2d"
AGALMiniAssembler.D3 = "3d"
AGALMiniAssembler.CUBE = "cube"
AGALMiniAssembler.MIPNEAREST = "mipnearest"
AGALMiniAssembler.MIPLINEAR = "miplinear"
AGALMiniAssembler.MIPNONE = "mipnone"
AGALMiniAssembler.NOMIP = "nomip"
AGALMiniAssembler.NEAREST = "nearest"
AGALMiniAssembler.LINEAR = "linear"
AGALMiniAssembler.ANISOTROPIC2X = "anisotropic2x"
AGALMiniAssembler.ANISOTROPIC4X = "anisotropic4x"
AGALMiniAssembler.ANISOTROPIC8X = "anisotropic8x"
AGALMiniAssembler.ANISOTROPIC16X = "anisotropic16x"
AGALMiniAssembler.CENTROID = "centroid"
AGALMiniAssembler.SINGLE = "single"
AGALMiniAssembler.IGNORESAMPLER = "ignoresampler"
AGALMiniAssembler.REPEAT = "repeat"
AGALMiniAssembler.WRAP = "wrap"
AGALMiniAssembler.CLAMP = "clamp"
AGALMiniAssembler.REPEAT_U_CLAMP_V = "repeat_u_clamp_v"
AGALMiniAssembler.CLAMP_U_REPEAT_V = "clamp_u_repeat_v"
AGALMiniAssembler.RGBA = "rgba"
AGALMiniAssembler.COMPRESSED = "compressed"
AGALMiniAssembler.COMPRESSEDALPHA = "compressedalpha"
AGALMiniAssembler.DXT1 = "dxt1"
AGALMiniAssembler.DXT5 = "dxt5"
AGALMiniAssembler.VIDEO = "video"
AGALMiniAssembler.initialized = false

// Export

exports.default = AGALMiniAssembler;