// Class: openfl.display.Shader

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;
var $import = require("./../../import_stub").default;
function lime_utils_Log() {return require("./../../lime/utils/Log");}
function StringTools() {return require("./../../StringTools");}
function openfl_display__$ShaderData_ShaderData_$Impl_$() {return require("./../../openfl/display/_ShaderData/ShaderData_Impl_");}
function EReg() {return require("./../../EReg");}
function openfl_display_ShaderInput() {return require("./../../openfl/display/ShaderInput");}
function Reflect() {return require("./../../Reflect");}
function openfl_display_ShaderParameter() {return require("./../../openfl/display/ShaderParameter");}
function lime_graphics__$WebGLRenderContext_WebGLRenderContext_$Impl_$() {return require("./../../lime/graphics/_WebGLRenderContext/WebGLRenderContext_Impl_");}

// Constructor

var Shader = function(code) {
	this.byteCode = code;
	this.precisionHint = "full";
	this.__glSourceDirty = true;
	this.__numPasses = 1;
	this.__data = (openfl_display__$ShaderData_ShaderData_$Impl_$().default)._new(code);
}

// Meta

Shader.__name__ = "openfl.display.Shader";
Shader.__isInterface__ = false;
Shader.prototype = {
	__clearUseArray: function() {
		var _g = 0;
		var _g1 = this.__paramBool;
		while(_g < _g1.length) {
			var parameter = _g1[_g];
			++_g;
			parameter.__useArray = false;
		}
		var _g2 = 0;
		var _g3 = this.__paramFloat;
		while(_g2 < _g3.length) {
			var parameter1 = _g3[_g2];
			++_g2;
			parameter1.__useArray = false;
		}
		var _g4 = 0;
		var _g5 = this.__paramInt;
		while(_g4 < _g5.length) {
			var parameter2 = _g5[_g4];
			++_g4;
			parameter2.__useArray = false;
		}
	},
	__createGLShader: function(source,type) {
		var gl = this.__context.gl;
		var shader = gl.createShader(type);
		gl.shaderSource(shader,source);
		gl.compileShader(shader);
		if(gl.getShaderParameter(shader,gl.COMPILE_STATUS) == 0) {
			var message = type == gl.VERTEX_SHADER ? "Error compiling vertex shader" : "Error compiling fragment shader";
			message += "\n" + gl.getShaderInfoLog(shader);
			message += "\n" + source;
			(lime_utils_Log().default).error(message,{ fileName : "../src/openfl/display/Shader.hx", lineNumber : 328, className : "openfl.display.Shader", methodName : "__createGLShader"});
		}
		return shader;
	},
	__createGLProgram: function(vertexSource,fragmentSource) {
		var gl = this.__context.gl;
		var vertexShader = this.__createGLShader(vertexSource,gl.VERTEX_SHADER);
		var fragmentShader = this.__createGLShader(fragmentSource,gl.FRAGMENT_SHADER);
		var program = gl.createProgram();
		var _g = 0;
		var _g1 = this.__paramFloat;
		while(_g < _g1.length) {
			var param = _g1[_g];
			++_g;
			if(param.name.indexOf("Position") > -1 && (StringTools().default).startsWith(param.name,"openfl_")) {
				gl.bindAttribLocation(program,0,param.name);
				break;
			}
		}
		gl.attachShader(program,vertexShader);
		gl.attachShader(program,fragmentShader);
		gl.linkProgram(program);
		if(gl.getProgramParameter(program,gl.LINK_STATUS) == 0) {
			var message = "Unable to initialize the shader program";
			message += "\n" + gl.getProgramInfoLog(program);
			(lime_utils_Log().default).error(message,{ fileName : "../src/openfl/display/Shader.hx", lineNumber : 361, className : "openfl.display.Shader", methodName : "__createGLProgram"});
		}
		return program;
	},
	__disable: function() {
		if(this.program != null) {
			this.__disableGL();
		}
	},
	__disableGL: function() {
		var gl = this.__context.gl;
		var textureCount = 0;
		var _g = 0;
		var _g1 = this.__inputBitmapData;
		while(_g < _g1.length) {
			var input = _g1[_g];
			++_g;
			input.__disableGL(this.__context,textureCount);
			++textureCount;
		}
		var _g2 = 0;
		var _g3 = this.__paramBool;
		while(_g2 < _g3.length) {
			var parameter = _g3[_g2];
			++_g2;
			parameter.__disableGL(this.__context);
		}
		var _g4 = 0;
		var _g5 = this.__paramFloat;
		while(_g4 < _g5.length) {
			var parameter1 = _g5[_g4];
			++_g4;
			parameter1.__disableGL(this.__context);
		}
		var _g6 = 0;
		var _g7 = this.__paramInt;
		while(_g6 < _g7.length) {
			var parameter2 = _g7[_g6];
			++_g6;
			parameter2.__disableGL(this.__context);
		}
		this.__context.__bindGLArrayBuffer(null);
		if(this.__context.__context.type == "opengl") {
			gl.disable(gl.TEXTURE_2D);
		}
	},
	__enable: function() {
		this.__init();
		if(this.program != null) {
			this.__enableGL();
		}
	},
	__enableGL: function() {
		var textureCount = 0;
		var gl = this.__context.gl;
		var _g = 0;
		var _g1 = this.__inputBitmapData;
		while(_g < _g1.length) {
			var input = _g1[_g];
			++_g;
			gl.uniform1i(input.index,textureCount);
			++textureCount;
		}
		if(this.__context.__context.type == "opengl" && textureCount > 0) {
			gl.enable(gl.TEXTURE_2D);
		}
	},
	__init: function() {
		if(this.__data == null) {
			this.__data = (openfl_display__$ShaderData_ShaderData_$Impl_$().default)._new(null);
		}
		if(this.__glFragmentSource != null && this.__glVertexSource != null && (this.program == null || this.__glSourceDirty)) {
			this.__initGL();
		}
	},
	__initGL: function() {
		if(this.__glSourceDirty || this.__paramBool == null) {
			this.__glSourceDirty = false;
			this.program = null;
			this.__inputBitmapData = [];
			this.__paramBool = [];
			this.__paramFloat = [];
			this.__paramInt = [];
			this.__processGLData(this.get_glVertexSource(),"attribute");
			this.__processGLData(this.get_glVertexSource(),"uniform");
			this.__processGLData(this.get_glFragmentSource(),"uniform");
		}
		if(this.__context != null && this.program == null) {
			var gl = this.__context.gl;
			var prefix = "#ifdef GL_ES\n\t\t\t\t" + (this.precisionHint == "full" ? "#ifdef GL_FRAGMENT_PRECISION_HIGH\n\t\t\t\tprecision highp float;\n\t\t\t\t#else\n\t\t\t\tprecision mediump float;\n\t\t\t\t#endif" : "precision lowp float;") + "\n\t\t\t\t#endif\n\t\t\t\t";
			var vertex = prefix + this.get_glVertexSource();
			var fragment = prefix + this.get_glFragmentSource();
			var id = vertex + fragment;
			if(this.__context.__programs.exists(id)) {
				this.program = this.__context.__programs.get(id);
			} else {
				this.program = this.__context.createProgram("glsl");
				this.program.__glProgram = this.__createGLProgram(vertex,fragment);
				this.__context.__programs.set(id,this.program);
			}
			if(this.program != null) {
				this.glProgram = this.program.__glProgram;
				var _g = 0;
				var _g1 = this.__inputBitmapData;
				while(_g < _g1.length) {
					var input = _g1[_g];
					++_g;
					if(input.__isUniform) {
						input.index = gl.getUniformLocation(this.glProgram,input.name);
					} else {
						input.index = gl.getAttribLocation(this.glProgram,input.name);
					}
				}
				var _g2 = 0;
				var _g3 = this.__paramBool;
				while(_g2 < _g3.length) {
					var parameter = _g3[_g2];
					++_g2;
					if(parameter.__isUniform) {
						parameter.index = gl.getUniformLocation(this.glProgram,parameter.name);
					} else {
						parameter.index = gl.getAttribLocation(this.glProgram,parameter.name);
					}
				}
				var _g4 = 0;
				var _g5 = this.__paramFloat;
				while(_g4 < _g5.length) {
					var parameter1 = _g5[_g4];
					++_g4;
					if(parameter1.__isUniform) {
						parameter1.index = gl.getUniformLocation(this.glProgram,parameter1.name);
					} else {
						parameter1.index = gl.getAttribLocation(this.glProgram,parameter1.name);
					}
				}
				var _g6 = 0;
				var _g7 = this.__paramInt;
				while(_g6 < _g7.length) {
					var parameter2 = _g7[_g6];
					++_g6;
					if(parameter2.__isUniform) {
						parameter2.index = gl.getUniformLocation(this.glProgram,parameter2.name);
					} else {
						parameter2.index = gl.getAttribLocation(this.glProgram,parameter2.name);
					}
				}
			}
		}
	},
	__processGLData: function(source,storageType) {
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
			var isUniform = storageType == "uniform";
			if((StringTools().default).startsWith(type,"sampler")) {
				var input = new (openfl_display_ShaderInput().default)();
				input.name = name;
				input.__isUniform = isUniform;
				this.__inputBitmapData.push(input);
				switch(name) {
				case "bitmap":
					this.__bitmap = input;
					break;
				case "openfl_Texture":
					this.__texture = input;
					break;
				default:
				}
				(Reflect().default).setField(this.__data,name,input);
				if(this.__isGenerated) {
					(Reflect().default).setField(this,name,input);
				}
			} else if(!(Reflect().default).hasField(this.__data,name) || (Reflect().default).field(this.__data,name) == null) {
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
				var length;
				switch(parameterType) {
				case "bool2":case "float2":case "int2":
					length = 2;
					break;
				case "bool3":case "float3":case "int3":
					length = 3;
					break;
				case "bool4":case "float4":case "int4":case "matrix2x2":
					length = 4;
					break;
				case "matrix3x3":
					length = 9;
					break;
				case "matrix4x4":
					length = 16;
					break;
				default:
					length = 1;
				}
				var arrayLength;
				switch(parameterType) {
				case "matrix2x2":
					arrayLength = 2;
					break;
				case "matrix3x3":
					arrayLength = 3;
					break;
				case "matrix4x4":
					arrayLength = 4;
					break;
				default:
					arrayLength = 1;
				}
				switch(parameterType) {
				case "bool":case "bool2":case "bool3":case "bool4":
					var parameter = new (openfl_display_ShaderParameter().default)();
					parameter.set_name(name);
					parameter.type = parameterType;
					parameter.__arrayLength = arrayLength;
					parameter.__isBool = true;
					parameter.__isUniform = isUniform;
					parameter.__length = length;
					this.__paramBool.push(parameter);
					if(name == "openfl_HasColorTransform") {
						this.__hasColorTransform = parameter;
					}
					(Reflect().default).setField(this.__data,name,parameter);
					if(this.__isGenerated) {
						(Reflect().default).setField(this,name,parameter);
					}
					break;
				case "int":case "int2":case "int3":case "int4":
					var parameter1 = new (openfl_display_ShaderParameter().default)();
					parameter1.set_name(name);
					parameter1.type = parameterType;
					parameter1.__arrayLength = arrayLength;
					parameter1.__isInt = true;
					parameter1.__isUniform = isUniform;
					parameter1.__length = length;
					this.__paramInt.push(parameter1);
					(Reflect().default).setField(this.__data,name,parameter1);
					if(this.__isGenerated) {
						(Reflect().default).setField(this,name,parameter1);
					}
					break;
				default:
					var parameter2 = new (openfl_display_ShaderParameter().default)();
					parameter2.set_name(name);
					parameter2.type = parameterType;
					parameter2.__arrayLength = arrayLength;
					if(arrayLength > 0) {
						var elements = arrayLength * arrayLength;
						var array = null;
						var view = null;
						var buffer = null;
						var len = null;
						var this1;
						if(elements != null) {
							this1 = new Float32Array(elements);
						} else if(array != null) {
							this1 = new Float32Array(array);
						} else if(view != null) {
							this1 = new Float32Array(view);
						} else if(buffer != null) {
							if(len == null) {
								this1 = new Float32Array(buffer,0);
							} else {
								this1 = new Float32Array(buffer,0,len);
							}
						} else {
							this1 = null;
						}
						parameter2.__uniformMatrix = this1;
					}
					parameter2.__isFloat = true;
					parameter2.__isUniform = isUniform;
					parameter2.__length = length;
					this.__paramFloat.push(parameter2);
					if((StringTools().default).startsWith(name,"openfl_")) {
						switch(name) {
						case "openfl_Alpha":
							this.__alpha = parameter2;
							break;
						case "openfl_ColorMultiplier":
							this.__colorMultiplier = parameter2;
							break;
						case "openfl_ColorOffset":
							this.__colorOffset = parameter2;
							break;
						case "openfl_Matrix":
							this.__matrix = parameter2;
							break;
						case "openfl_Position":
							this.__position = parameter2;
							break;
						case "openfl_TextureCoord":
							this.__textureCoord = parameter2;
							break;
						case "openfl_TextureSize":
							this.__textureSize = parameter2;
							break;
						default:
						}
					}
					(Reflect().default).setField(this.__data,name,parameter2);
					if(this.__isGenerated) {
						(Reflect().default).setField(this,name,parameter2);
					}
				}
			}
			position = regex.matchedPos();
			lastMatch = position.pos + position.len;
		}
	},
	__update: function() {
		if(this.program != null) {
			this.__updateGL();
		}
	},
	__updateFromBuffer: function(shaderBuffer,bufferOffset) {
		if(this.program != null) {
			this.__updateGLFromBuffer(shaderBuffer,bufferOffset);
		}
	},
	__updateGL: function() {
		var textureCount = 0;
		var _g = 0;
		var _g1 = this.__inputBitmapData;
		while(_g < _g1.length) {
			var input = _g1[_g];
			++_g;
			input.__updateGL(this.__context,textureCount);
			++textureCount;
		}
		var _g2 = 0;
		var _g3 = this.__paramBool;
		while(_g2 < _g3.length) {
			var parameter = _g3[_g2];
			++_g2;
			parameter.__updateGL(this.__context);
		}
		var _g4 = 0;
		var _g5 = this.__paramFloat;
		while(_g4 < _g5.length) {
			var parameter1 = _g5[_g4];
			++_g4;
			parameter1.__updateGL(this.__context);
		}
		var _g6 = 0;
		var _g7 = this.__paramInt;
		while(_g6 < _g7.length) {
			var parameter2 = _g7[_g6];
			++_g6;
			parameter2.__updateGL(this.__context);
		}
	},
	__updateGLFromBuffer: function(shaderBuffer,bufferOffset) {
		var textureCount = 0;
		var input;
		var inputData;
		var inputFilter;
		var inputMipFilter;
		var inputWrap;
		var _g = 0;
		var _g1 = shaderBuffer.inputCount;
		while(_g < _g1) {
			var i = _g++;
			input = shaderBuffer.inputRefs[i];
			inputData = shaderBuffer.inputs[i];
			inputFilter = shaderBuffer.inputFilter[i];
			inputMipFilter = shaderBuffer.inputMipFilter[i];
			inputWrap = shaderBuffer.inputWrap[i];
			if(inputData != null) {
				input.__updateGL(this.__context,textureCount,inputData,inputFilter,inputMipFilter,inputWrap);
				++textureCount;
			}
		}
		var gl = this.__context.gl;
		if(shaderBuffer.paramDataLength > 0) {
			if(shaderBuffer.paramDataBuffer == null) {
				shaderBuffer.paramDataBuffer = gl.createBuffer();
			}
			this.__context.__bindGLArrayBuffer(shaderBuffer.paramDataBuffer);
			(lime_graphics__$WebGLRenderContext_WebGLRenderContext_$Impl_$().default).bufferData(gl,gl.ARRAY_BUFFER,shaderBuffer.paramData,gl.DYNAMIC_DRAW);
		} else {
			this.__context.__bindGLArrayBuffer(null);
		}
		var boolIndex = 0;
		var floatIndex = 0;
		var intIndex = 0;
		var boolCount = shaderBuffer.paramBoolCount;
		var floatCount = shaderBuffer.paramFloatCount;
		var paramData = shaderBuffer.paramData;
		var boolRef;
		var floatRef;
		var intRef;
		var hasOverride;
		var overrideBoolValue = null;
		var overrideFloatValue = null;
		var overrideIntValue = null;
		var _g2 = 0;
		var _g3 = shaderBuffer.paramCount;
		while(_g2 < _g3) {
			var i1 = _g2++;
			hasOverride = false;
			if(i1 < boolCount) {
				boolRef = shaderBuffer.paramRefs_Bool[boolIndex];
				var _g21 = 0;
				var _g31 = shaderBuffer.overrideBoolCount;
				while(_g21 < _g31) {
					var j = _g21++;
					if(boolRef.name == shaderBuffer.overrideBoolNames[j]) {
						overrideBoolValue = shaderBuffer.overrideBoolValues[j];
						hasOverride = true;
						break;
					}
				}
				if(hasOverride) {
					boolRef.__updateGL(this.__context,overrideBoolValue);
				} else {
					boolRef.__updateGLFromBuffer(this.__context,paramData,shaderBuffer.paramPositions[i1],shaderBuffer.paramLengths[i1],bufferOffset);
				}
				++boolIndex;
			} else if(i1 < boolCount + floatCount) {
				floatRef = shaderBuffer.paramRefs_Float[floatIndex];
				var _g22 = 0;
				var _g32 = shaderBuffer.overrideFloatCount;
				while(_g22 < _g32) {
					var j1 = _g22++;
					if(floatRef.name == shaderBuffer.overrideFloatNames[j1]) {
						overrideFloatValue = shaderBuffer.overrideFloatValues[j1];
						hasOverride = true;
						break;
					}
				}
				if(hasOverride) {
					floatRef.__updateGL(this.__context,overrideFloatValue);
				} else {
					floatRef.__updateGLFromBuffer(this.__context,paramData,shaderBuffer.paramPositions[i1],shaderBuffer.paramLengths[i1],bufferOffset);
				}
				++floatIndex;
			} else {
				intRef = shaderBuffer.paramRefs_Int[intIndex];
				var _g23 = 0;
				var _g33 = shaderBuffer.overrideIntCount;
				while(_g23 < _g33) {
					var j2 = _g23++;
					if(intRef.name == shaderBuffer.overrideIntNames[j2]) {
						overrideIntValue = shaderBuffer.overrideIntValues[j2];
						hasOverride = true;
						break;
					}
				}
				if(hasOverride) {
					intRef.__updateGL(this.__context,overrideIntValue);
				} else {
					intRef.__updateGLFromBuffer(this.__context,paramData,shaderBuffer.paramPositions[i1],shaderBuffer.paramLengths[i1],bufferOffset);
				}
				++intIndex;
			}
		}
	},
	get_data: function() {
		if(this.__glSourceDirty || this.__data == null) {
			this.__init();
		}
		return this.__data;
	},
	set_data: function(value) {
		return this.__data = value;
	},
	get_glFragmentSource: function() {
		return this.__glFragmentSource;
	},
	set_glFragmentSource: function(value) {
		if(value != this.__glFragmentSource) {
			this.__glSourceDirty = true;
		}
		return this.__glFragmentSource = value;
	},
	get_glVertexSource: function() {
		return this.__glVertexSource;
	},
	set_glVertexSource: function(value) {
		if(value != this.__glVertexSource) {
			this.__glSourceDirty = true;
		}
		return this.__glVertexSource = value;
	}
};
Shader.prototype.__class__ = Shader.prototype.constructor = $hxClasses["openfl.display.Shader"] = Shader;

// Init

Object.defineProperties(Shader.prototype,{ data : { get : function () { return this.get_data (); }, set : function (v) { return this.set_data (v); }}, glFragmentSource : { get : function () { return this.get_glFragmentSource (); }, set : function (v) { return this.set_glFragmentSource (v); }}, glVertexSource : { get : function () { return this.get_glVertexSource (); }, set : function (v) { return this.set_glVertexSource (v); }}});

// Statics


Shader.__meta__ = { fields : { glProgram : { SuppressWarnings : ["checkstyle:Dynamic"]}}}

// Export

exports.default = Shader;