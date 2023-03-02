// Class: openfl.display3D.Program3D

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;
var $import = require("./../../import_stub").default;
function StringTools() {return require("./../../StringTools");}
function Std() {return require("./../../Std");}
function openfl__$internal_formats_agal_AGALConverter() {return require("./../../openfl/_internal/formats/agal/AGALConverter");}
function lime_utils_Log() {return require("./../../lime/utils/Log");}
function haxe_ds_List() {return require("./../../haxe/ds/List");}
function openfl_display3D_Uniform() {return require("./../../openfl/display3D/Uniform");}
function openfl_display3D_UniformMap() {return require("./../../openfl/display3D/UniformMap");}
function Lambda() {return require("./../../Lambda");}
function js__$Boot_HaxeError() {return require("./../../js/_Boot/HaxeError");}
function openfl_errors_IllegalOperationError() {return require("./../../openfl/errors/IllegalOperationError");}
function EReg() {return require("./../../EReg");}

// Constructor

var Program3D = function(context3D,format) {
	this.__context = context3D;
	this.__format = format;
	if(this.__format == "agal") {
		this.__agalSamplerUsageMask = 0;
		this.__agalUniforms = new (haxe_ds_List().default)();
		this.__agalSamplerUniforms = new (haxe_ds_List().default)();
		this.__agalAlphaSamplerUniforms = new (haxe_ds_List().default)();
		this.__agalAlphaSamplerEnabled = [];
	} else {
		this.__glslAttribNames = [];
		this.__glslAttribTypes = [];
		this.__glslSamplerNames = [];
		this.__glslUniformLocations = [];
		this.__glslUniformNames = [];
		this.__glslUniformTypes = [];
	}
	this.__samplerStates = [];
}

// Meta

Program3D.__name__ = "openfl.display3D.Program3D";
Program3D.__isInterface__ = false;
Program3D.prototype = {
	dispose: function() {
		this.__deleteShaders();
	},
	getAttributeIndex: function(name) {
		if(this.__format == "agal") {
			if((StringTools().default).startsWith(name,"va")) {
				return (Std().default).parseInt(name.substring(2));
			} else {
				return -1;
			}
		} else {
			var _g = 0;
			var _g1 = this.__glslAttribNames.length;
			while(_g < _g1) {
				var i = _g++;
				if(this.__glslAttribNames[i] == name) {
					return i;
				}
			}
			return -1;
		}
	},
	getConstantIndex: function(name) {
		if(this.__format == "agal") {
			if((StringTools().default).startsWith(name,"vc")) {
				return (Std().default).parseInt(name.substring(2));
			} else if((StringTools().default).startsWith(name,"fc")) {
				return (Std().default).parseInt(name.substring(2));
			} else {
				return -1;
			}
		} else {
			var _g = 0;
			var _g1 = this.__glslUniformNames.length;
			while(_g < _g1) {
				var i = _g++;
				if(this.__glslUniformNames[i] == name) {
					return this.__glslUniformLocations[i];
				}
			}
			return -1;
		}
	},
	upload: function(vertexProgram,fragmentProgram) {
		if(this.__format != "agal") {
			return;
		}
		var samplerStates = [];
		var glslVertex = (openfl__$internal_formats_agal_AGALConverter().default).convertToGLSL(vertexProgram,null);
		var glslFragment = (openfl__$internal_formats_agal_AGALConverter().default).convertToGLSL(fragmentProgram,samplerStates);
		if((lime_utils_Log().default).level == 5) {
			(lime_utils_Log().default).info(glslVertex,{ fileName : "../src/openfl/display3D/Program3D.hx", lineNumber : 399, className : "openfl.display3D.Program3D", methodName : "upload"});
			(lime_utils_Log().default).info(glslFragment,{ fileName : "../src/openfl/display3D/Program3D.hx", lineNumber : 400, className : "openfl.display3D.Program3D", methodName : "upload"});
		}
		this.__deleteShaders();
		this.__uploadFromGLSL(glslVertex,glslFragment);
		this.__buildAGALUniformList();
		var _g = 0;
		var _g1 = samplerStates.length;
		while(_g < _g1) {
			var i = _g++;
			this.__samplerStates[i] = samplerStates[i];
		}
	},
	uploadSources: function(vertexSource,fragmentSource) {
		if(this.__format != "glsl") {
			return;
		}
		var prefix = "#ifdef GL_ES\n\t\t\t#ifdef GL_FRAGMENT_PRECISION_HIGH\n\t\t\tprecision highp float;\n\t\t\t#else\n\t\t\tprecision mediump float;\n\t\t\t#endif\n\t\t\t#endif\n\t\t\t";
		var vertex = prefix + vertexSource;
		var fragment = prefix + fragmentSource;
		if(vertex == this.__glVertexSource && fragment == this.__glFragmentSource) {
			return;
		}
		this.__processGLSLData(vertexSource,"attribute");
		this.__processGLSLData(vertexSource,"uniform");
		this.__processGLSLData(fragmentSource,"uniform");
		this.__deleteShaders();
		this.__uploadFromGLSL(vertex,fragment);
		var samplerNames = this.__glslSamplerNames;
		var attribNames = this.__glslAttribNames;
		var attribTypes = this.__glslAttribTypes;
		var uniformNames = this.__glslUniformNames;
		this.__glslSamplerNames = [];
		this.__glslAttribNames = [];
		this.__glslAttribTypes = [];
		this.__glslUniformLocations = [];
		var gl = this.__context.gl;
		var index;
		var location;
		var _g = 0;
		while(_g < samplerNames.length) {
			var name = samplerNames[_g];
			++_g;
			index = gl.getUniformLocation(this.__glProgram,name);
			this.__glslSamplerNames[index] = name;
		}
		var _g1 = 0;
		var _g2 = attribNames.length;
		while(_g1 < _g2) {
			var i = _g1++;
			index = gl.getAttribLocation(this.__glProgram,attribNames[i]);
			this.__glslAttribNames[index] = attribNames[i];
			this.__glslAttribTypes[index] = attribTypes[i];
		}
		var _g3 = 0;
		var _g4 = uniformNames.length;
		while(_g3 < _g4) {
			var i1 = _g3++;
			location = gl.getUniformLocation(this.__glProgram,uniformNames[i1]);
			this.__glslUniformLocations[i1] = location;
		}
	},
	__buildAGALUniformList: function() {
		if(this.__format == "glsl") {
			return;
		}
		var gl = this.__context.gl;
		this.__agalUniforms.clear();
		this.__agalSamplerUniforms.clear();
		this.__agalAlphaSamplerUniforms.clear();
		this.__agalAlphaSamplerEnabled = [];
		this.__agalSamplerUsageMask = 0;
		var numActive = 0;
		numActive = gl.getProgramParameter(this.__glProgram,gl.ACTIVE_UNIFORMS);
		var vertexUniforms = new (haxe_ds_List().default)();
		var fragmentUniforms = new (haxe_ds_List().default)();
		var _g = 0;
		var _g1 = numActive;
		while(_g < _g1) {
			var i = _g++;
			var info = gl.getActiveUniform(this.__glProgram,i);
			var name = info.name;
			var size = info.size;
			var uniformType = info.type;
			var uniform = new (openfl_display3D_Uniform().default)(this.__context);
			uniform.name = name;
			uniform.size = size;
			uniform.type = uniformType;
			uniform.location = gl.getUniformLocation(this.__glProgram,uniform.name);
			var indexBracket = uniform.name.indexOf("[");
			if(indexBracket >= 0) {
				uniform.name = uniform.name.substring(0,indexBracket);
			}
			switch(uniform.type) {
			case 35674:
				uniform.regCount = 2;
				break;
			case 35675:
				uniform.regCount = 3;
				break;
			case 35676:
				uniform.regCount = 4;
				break;
			default:
				uniform.regCount = 1;
			}
			uniform.regCount *= uniform.size;
			this.__agalUniforms.add(uniform);
			if(uniform.name == "vcPositionScale") {
				this.__agalPositionScale = uniform;
			} else if((StringTools().default).startsWith(uniform.name,"vc")) {
				uniform.regIndex = (Std().default).parseInt(uniform.name.substring(2));
				uniform.regData = this.__context.__vertexConstants;
				vertexUniforms.add(uniform);
			} else if((StringTools().default).startsWith(uniform.name,"fc")) {
				uniform.regIndex = (Std().default).parseInt(uniform.name.substring(2));
				uniform.regData = this.__context.__fragmentConstants;
				fragmentUniforms.add(uniform);
			} else if((StringTools().default).startsWith(uniform.name,"sampler") && uniform.name.indexOf("alpha") == -1) {
				uniform.regIndex = (Std().default).parseInt(uniform.name.substring(7));
				this.__agalSamplerUniforms.add(uniform);
				var _g11 = 0;
				var _g2 = uniform.regCount;
				while(_g11 < _g2) {
					var reg = _g11++;
					this.__agalSamplerUsageMask |= 1 << uniform.regIndex + reg;
				}
			} else if((StringTools().default).startsWith(uniform.name,"sampler") && (StringTools().default).endsWith(uniform.name,"_alpha")) {
				var len = uniform.name.indexOf("_") - 7;
				uniform.regIndex = (Std().default).parseInt(uniform.name.substring(7,7 + len)) + 4;
				this.__agalAlphaSamplerUniforms.add(uniform);
			} else if((StringTools().default).startsWith(uniform.name,"sampler") && (StringTools().default).endsWith(uniform.name,"_alphaEnabled")) {
				uniform.regIndex = (Std().default).parseInt(uniform.name.substring(7));
				this.__agalAlphaSamplerEnabled[uniform.regIndex] = uniform;
			}
			if((lime_utils_Log().default).level == 5) {
				(lime_utils_Log().default).verbose("" + i + " name:" + uniform.name + " type:" + uniform.type + " size:" + uniform.size + " location:" + (Std().default).string(uniform.location),{ fileName : "../src/openfl/display3D/Program3D.hx", lineNumber : 577, className : "openfl.display3D.Program3D", methodName : "__buildAGALUniformList"});
			}
		}
		this.__agalVertexUniformMap = new (openfl_display3D_UniformMap().default)((Lambda().default).array(vertexUniforms));
		this.__agalFragmentUniformMap = new (openfl_display3D_UniformMap().default)((Lambda().default).array(fragmentUniforms));
	},
	__deleteShaders: function() {
		var gl = this.__context.gl;
		if(this.__glProgram != null) {
			this.__glProgram = null;
		}
		if(this.__glVertexShader != null) {
			gl.deleteShader(this.__glVertexShader);
			this.__glVertexShader = null;
		}
		if(this.__glFragmentShader != null) {
			gl.deleteShader(this.__glFragmentShader);
			this.__glFragmentShader = null;
		}
	},
	__disable: function() {
		var tmp = this.__format == "glsl";
	},
	__enable: function() {
		var gl = this.__context.gl;
		gl.useProgram(this.__glProgram);
		if(this.__format == "agal") {
			this.__agalVertexUniformMap.markAllDirty();
			this.__agalFragmentUniformMap.markAllDirty();
			var sampler = this.__agalSamplerUniforms.iterator();
			while(sampler.hasNext()) {
				var sampler1 = sampler.next();
				if(sampler1.regCount == 1) {
					gl.uniform1i(sampler1.location,sampler1.regIndex);
				} else {
					throw new (js__$Boot_HaxeError().default)(new (openfl_errors_IllegalOperationError().default)("!!! TODO: uniform location on webgl"));
				}
			}
			var sampler2 = this.__agalAlphaSamplerUniforms.iterator();
			while(sampler2.hasNext()) {
				var sampler3 = sampler2.next();
				if(sampler3.regCount == 1) {
					gl.uniform1i(sampler3.location,sampler3.regIndex);
				} else {
					throw new (js__$Boot_HaxeError().default)(new (openfl_errors_IllegalOperationError().default)("!!! TODO: uniform location on webgl"));
				}
			}
		}
	},
	__flush: function() {
		if(this.__format == "agal") {
			this.__agalVertexUniformMap.flush();
			this.__agalFragmentUniformMap.flush();
		} else {
			return;
		}
	},
	__getSamplerState: function(sampler) {
		return this.__samplerStates[sampler];
	},
	__markDirty: function(isVertex,index,count) {
		if(this.__format == "glsl") {
			return;
		}
		if(isVertex) {
			this.__agalVertexUniformMap.markDirty(index,count);
		} else {
			this.__agalFragmentUniformMap.markDirty(index,count);
		}
	},
	__processGLSLData: function(source,storageType) {
		var lastMatch = 0;
		var position;
		var regex;
		var name;
		var type;
		if(storageType == "uniform") {
			regex = new (EReg().default)("uniform ([A-Za-z0-9]+) ([A-Za-z0-9_]+)","");
		} else {
			regex = new (EReg().default)("attribute ([A-Za-z0-9]+) ([A-Za-z0-9_]+)","");
		}
		while(regex.matchSub(source,lastMatch)) {
			type = regex.matched(1);
			name = regex.matched(2);
			if((StringTools().default).startsWith(name,"gl_")) {
				continue;
			}
			if((StringTools().default).startsWith(type,"sampler")) {
				this.__glslSamplerNames.push(name);
			} else {
				var parameterType;
				switch(type) {
				case "bool":
					parameterType = "bool";
					break;
				case "bvec2":
					parameterType = "bool2";
					break;
				case "bvec3":
					parameterType = "bool3";
					break;
				case "bvec4":
					parameterType = "bool4";
					break;
				case "dvec2":case "vec2":
					parameterType = "float2";
					break;
				case "dvec3":case "vec3":
					parameterType = "float3";
					break;
				case "double":case "float":
					parameterType = "float";
					break;
				case "ivec3":case "uvec3":
					parameterType = "int3";
					break;
				case "ivec4":case "uvec4":
					parameterType = "int4";
					break;
				case "mat2":case "mat2x2":
					parameterType = "matrix2x2";
					break;
				case "mat2x3":
					parameterType = "matrix2x3";
					break;
				case "mat2x4":
					parameterType = "matrix2x4";
					break;
				case "mat3x2":
					parameterType = "matrix3x2";
					break;
				case "mat3":case "mat3x3":
					parameterType = "matrix3x3";
					break;
				case "mat3x4":
					parameterType = "matrix3x4";
					break;
				case "mat4":case "mat4x4":
					parameterType = "matrix4x4";
					break;
				case "mat4x2":
					parameterType = "matrix4x2";
					break;
				case "mat4x3":
					parameterType = "matrix4x3";
					break;
				case "int":case "uint":
					parameterType = "int";
					break;
				case "ivec2":case "uvec2":
					parameterType = "int2";
					break;
				case "dvec4":case "vec4":
					parameterType = "float4";
					break;
				default:
					parameterType = null;
				}
				if(storageType == "uniform") {
					this.__glslUniformNames.push(name);
					this.__glslUniformTypes.push(parameterType);
				} else {
					this.__glslAttribNames.push(name);
					this.__glslAttribTypes.push(parameterType);
				}
			}
			position = regex.matchedPos();
			lastMatch = position.pos + position.len;
		}
	},
	__setPositionScale: function(positionScale) {
		if(this.__format == "glsl") {
			return;
		}
		if(this.__agalPositionScale != null) {
			var gl = this.__context.gl;
			var location = this.__agalPositionScale.location;
			var data = positionScale;
			var srcOffset = null;
			if(srcOffset != null) {
				gl.uniform4fv(location,data,srcOffset,null);
			} else {
				gl.uniform4fv(location,data);
			}
		}
	},
	__setSamplerState: function(sampler,state) {
		this.__samplerStates[sampler] = state;
	},
	__uploadFromGLSL: function(vertexShaderSource,fragmentShaderSource) {
		var gl = this.__context.gl;
		this.__glVertexSource = vertexShaderSource;
		this.__glFragmentSource = fragmentShaderSource;
		this.__glVertexShader = gl.createShader(gl.VERTEX_SHADER);
		gl.shaderSource(this.__glVertexShader,vertexShaderSource);
		gl.compileShader(this.__glVertexShader);
		if(gl.getShaderParameter(this.__glVertexShader,gl.COMPILE_STATUS) == 0) {
			var message = "Error compiling vertex shader";
			message += "\n" + gl.getShaderInfoLog(this.__glVertexShader);
			message += "\n" + vertexShaderSource;
			(lime_utils_Log().default).error(message,{ fileName : "../src/openfl/display3D/Program3D.hx", lineNumber : 869, className : "openfl.display3D.Program3D", methodName : "__uploadFromGLSL"});
		}
		this.__glFragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
		gl.shaderSource(this.__glFragmentShader,fragmentShaderSource);
		gl.compileShader(this.__glFragmentShader);
		if(gl.getShaderParameter(this.__glFragmentShader,gl.COMPILE_STATUS) == 0) {
			var message1 = "Error compiling fragment shader";
			message1 += "\n" + gl.getShaderInfoLog(this.__glFragmentShader);
			message1 += "\n" + fragmentShaderSource;
			(lime_utils_Log().default).error(message1,{ fileName : "../src/openfl/display3D/Program3D.hx", lineNumber : 881, className : "openfl.display3D.Program3D", methodName : "__uploadFromGLSL"});
		}
		this.__glProgram = gl.createProgram();
		if(this.__format == "agal") {
			var _g = 0;
			while(_g < 16) {
				var i = _g++;
				var name = "va" + i;
				if(vertexShaderSource.indexOf(" " + name) != -1) {
					gl.bindAttribLocation(this.__glProgram,i,name);
				}
			}
		} else {
			var _g1 = 0;
			var _g11 = this.__glslAttribNames;
			while(_g1 < _g11.length) {
				var name1 = _g11[_g1];
				++_g1;
				if(name1.indexOf("Position") > -1 && (StringTools().default).startsWith(name1,"openfl_")) {
					gl.bindAttribLocation(this.__glProgram,0,name1);
					break;
				}
			}
		}
		gl.attachShader(this.__glProgram,this.__glVertexShader);
		gl.attachShader(this.__glProgram,this.__glFragmentShader);
		gl.linkProgram(this.__glProgram);
		if(gl.getProgramParameter(this.__glProgram,gl.LINK_STATUS) == 0) {
			var message2 = "Unable to initialize the shader program";
			message2 += "\n" + gl.getProgramInfoLog(this.__glProgram);
			(lime_utils_Log().default).error(message2,{ fileName : "../src/openfl/display3D/Program3D.hx", lineNumber : 922, className : "openfl.display3D.Program3D", methodName : "__uploadFromGLSL"});
		}
	}
};
Program3D.prototype.__class__ = Program3D.prototype.constructor = $hxClasses["openfl.display3D.Program3D"] = Program3D;

// Init



// Statics




// Export

exports.default = Program3D;